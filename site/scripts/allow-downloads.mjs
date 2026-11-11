export const bucket = 'capycanvas-downloads';
const zoneName = 'capycanvas.art';
const host = 'downloads.capycanvas.art';
const phase = 'http_request_firewall_custom';
const refPrefix = 'downloads-';
const expressionLimit = 4096;
const safeKey = /^[\w.\/-]+$/;

export function allowRules(keys) {
  const allowed = `http.host eq "${host}" and http.request.method eq "GET" and http.request.uri.query eq "" and http.request.uri.path in {`;
  const rules = [];
  let paths = [];
  const flush = () => {
    rules.push({
      ref: `${refPrefix}allow-${rules.length + 1}`,
      description: 'Serve files that exist in the downloads bucket',
      expression: `${allowed}${paths.join(' ')}}`,
      action: 'skip',
      action_parameters: { ruleset: 'current' },
    });
    paths = [];
  };
  for (const key of [...keys].sort()) {
    if (!safeKey.test(key)) throw new Error(`Cannot allow downloads key ${JSON.stringify(key)}`);
    const path = `"/${key}"`;
    if (paths.length && `${allowed}${[...paths, path].join(' ')}}`.length > expressionLimit) flush();
    paths.push(path);
  }
  if (paths.length) flush();
  return [...rules, {
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
