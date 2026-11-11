export const bucket = 'capycanvas-downloads';
const zoneName = 'capycanvas.art';
const host = 'downloads.capycanvas.art';
const phase = 'http_request_firewall_custom';
const refPrefix = 'downloads-';
const expressionLimit = 4096;
const safeKey = /^[\w.\/-]+$/;

const field = 'http.request.uri.path';
const set = values => `{${values.map(value => `"${value}"`).join(' ')}}`;

const commonPrefix = values => values.reduce((prefix, value) => {
  let length = 0;
  while (length < prefix.length && prefix[length] === value[length]) length += 1;
  return prefix.slice(0, length);
});

function groups(keys) {
  const tails = new Map();
  const add = (head, tail) => tails.set(head, [...tails.get(head) ?? [], tail]);
  const families = new Map();
  for (const key of [...keys].sort()) {
    if (!safeKey.test(key)) throw new Error(`Cannot allow downloads key ${JSON.stringify(key)}`);
    const release = key.match(/^v([^/]+)\/capycanvas-\1-/);
    if (release) add(`/${release[0]}`, key.slice(release[0].length));
    else {
      const family = key.slice(0, key.indexOf('/') + 1);
      families.set(family, [...families.get(family) ?? [], key]);
    }
  }
  for (const members of families.values()) {
    const prefix = members.length > 1 ? commonPrefix(members) : members[0].slice(0, members[0].lastIndexOf('/') + 1);
    for (const key of members) add(`/${prefix}`, key.slice(prefix.length));
  }
  const grouped = new Map();
  for (const [head, names] of tails) {
    const id = `${head.length} ${names.join(' ')}`;
    grouped.set(id, { length: head.length, heads: [...grouped.get(id)?.heads ?? [], head].sort(), tails: names });
  }
  return [...grouped.keys()].sort().map(id => grouped.get(id));
}

export function allowRules(keys) {
  const allowed = `http.host eq "${host}" and http.request.method eq "GET" and http.request.uri.query eq "" and (`;
  const room = expressionLimit - allowed.length - 1;
  const condition = ({ length, heads, tails }) =>
    `(substring(${field}, 0, ${length}) in ${set(heads)} and substring(${field}, ${length}) in ${set(tails)})`;
  const bins = [[]];
  const space = () => room - bins.at(-1).join(' or ').length - (bins.at(-1).length ? 4 : 0);
  const fitting = (group, side) => {
    let count = 0;
    while (count < group[side].length && condition({ ...group, [side]: group[side].slice(0, count + 1) }).length <= space()) count += 1;
    return count;
  };
  for (let group of groups(keys)) {
    while (group) {
      if (condition(group).length <= space()) {
        bins.at(-1).push(condition(group));
        group = null;
        continue;
      }
      const side = ['heads', 'tails'].sort((a, b) => group[b].length - group[a].length).find(side => group[side].length > 1 && fitting(group, side));
      if (!side) {
        if (!bins.at(-1).length) throw new Error(`Downloads path ${group.heads[0]}${group.tails[0]} is too long for a rule`);
        bins.push([]);
        continue;
      }
      const count = fitting(group, side);
      bins.at(-1).push(condition({ ...group, [side]: group[side].slice(0, count) }));
      group = { ...group, [side]: group[side].slice(count) };
      bins.push([]);
    }
  }
  if (!bins.at(-1).length) bins.pop();
  return [...bins.map((parts, index) => ({
    ref: `${refPrefix}allow-${index + 1}`,
    description: 'Serve files that exist in the downloads bucket',
    expression: `${allowed}${parts.join(' or ')})`,
    action: 'skip',
    action_parameters: { ruleset: 'current' },
  })), {
    ref: `${refPrefix}block`,
    description: 'Block every other downloads request before it reaches R2',
    expression: `http.host eq "${host}"`,
    action: 'block',
  }];
}

const ruleFields = ({ ref, description, expression, action, action_parameters }) =>
  ({ ref, description, expression, action, ...(action_parameters && { action_parameters }) });

export async function allowDownloads() {
  const { CLOUDFLARE_API_TOKEN: token, CLOUDFLARE_ACCOUNT_ID: account } = process.env;
  if (!token || !account) throw new Error('Set CLOUDFLARE_API_TOKEN, with Zone WAF: Edit and Workers R2 Storage: Read, and CLOUDFLARE_ACCOUNT_ID');
  const cloudflare = async (path, init = {}) => {
    const response = await fetch(`https://api.cloudflare.com/client/v4${path}`, {
      ...init, headers: { authorization: `Bearer ${token}`, 'content-type': 'application/json' },
    });
    const body = await response.json();
    if (!body.success) throw new Error(`${init.method ?? 'GET'} ${path} failed with ${response.status}: ${JSON.stringify(body.errors)}`);
    return body;
  };
  const bucketKeys = async () => {
    const keys = [];
    let cursor = '';
    do {
      const { result, result_info } = await cloudflare(`/accounts/${account}/r2/buckets/${bucket}/objects?per_page=1000${cursor && `&cursor=${encodeURIComponent(cursor)}`}`);
      keys.push(...result.map(object => object.key));
      cursor = result_info?.is_truncated ? result_info.cursor : '';
    } while (cursor);
    return keys;
  };
  const [found] = (await cloudflare(`/zones?name=${zoneName}`)).result;
  if (!found) throw new Error(`CLOUDFLARE_API_TOKEN cannot read the ${zoneName} zone; give it Zone: Read`);
  const zone = found.id;
  const entrypoint = `/zones/${zone}/rulesets/phases/${phase}/entrypoint`;
  const ours = rule => rule.ref?.startsWith(refPrefix);
  let written;
  for (;;) {
    const keys = await bucketKeys();
    const wanted = allowRules(keys);
    const summary = { keys: keys.length, rules: wanted.length };
    if (written === JSON.stringify(wanted)) return summary;
    const { rules = [] } = (await cloudflare(entrypoint)).result;
    if (JSON.stringify(rules.filter(ours).map(ruleFields)) === JSON.stringify(wanted)) return summary;
    const others = rules.filter(rule => !ours(rule)).map(rule => ({ id: rule.id, ...ruleFields(rule), enabled: rule.enabled }));
    await cloudflare(entrypoint, { method: 'PUT', body: JSON.stringify({ rules: [...others, ...wanted] }) });
    written = JSON.stringify(wanted);
  }
}

if (import.meta.main) {
  const { keys, rules } = await allowDownloads();
  console.log(`${host} serves ${keys} files through ${rules} WAF rules`);
}
