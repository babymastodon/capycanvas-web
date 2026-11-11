import test from 'node:test';
import assert from 'node:assert/strict';
import { allowRules } from '../site/scripts/allow-downloads.mjs';

const host = 'http.host eq "downloads.capycanvas.art"';
const files = ['android.aab', 'android.apk', 'flatpak-repository.tar.zst', 'linux-x86_64.flatpak', 'macos-arm64.dmg', 'web.zip',
  'windows-arm64-setup.exe', 'windows-arm64.msix', 'windows-arm64.zip', 'windows-x64-setup.exe', 'windows-x64.msix', 'windows-x64.zip'];
const release = (version, names = files) => [
  ...names.map(name => `v${version}/capycanvas-${version}-${name}`),
  `v${version}/SHA256SUMS`, `v${version}/capycanvas.flatpakref`,
];
const hex = (seed, length) => Array.from({ length }, (_, index) => ((seed * 7919 + index * 104729) % 16).toString(16)).join('');
const bucket = count => [
  'releases.json',
  ...Array.from({ length: count }, (_, index) => [
    ...release(`1.${Math.floor(index / 10)}.${index % 10}`),
    `editor/assets/pkg/layer_web_bg.${hex(index, 20)}.wasm`,
    `flatpak/objects/${hex(index, 2)}/${hex(index + 1, 62)}.filez`,
  ]).flat(),
];

const allowedPaths = rules => new Set(rules.slice(0, -1).flatMap(rule => {
  const pattern = /\(substring\(http\.request\.uri\.path, 0, (\d+)\) in \{([^}]*)\} and substring\(http\.request\.uri\.path, \1\) in \{([^}]*)\}\)/g;
  const conditions = [...rule.expression.matchAll(pattern)];
  assert.equal(rule.expression, `${host} and http.request.method eq "GET" and http.request.uri.query eq "" and (${conditions.map(([text]) => text).join(' or ')})`);
  return conditions.flatMap(([, length, heads, tails]) => {
    const values = list => list.split(' ').map(value => JSON.parse(value));
    return values(heads).flatMap(head => {
      assert.equal(head.length, Number(length));
      return values(tails).map(tail => `${head}${tail}`);
    });
  });
}));

test('downloads serve plain GETs of exactly the bucket files and block everything else', () => {
  const keys = [...release('1.0.14'), ...release('1.0.15'), ...release('1.0.3', files.slice(0, 4)), 'releases.json',
    'editor/assets/pkg/layer_web_bg.1ba467d8e464fe7f6faf.wasm'];
  const rules = allowRules(keys);
  assert.deepEqual(allowedPaths(rules), new Set(keys.map(key => `/${key}`)));
  assert.deepEqual(rules.slice(0, -1).map(rule => [rule.action, rule.action_parameters]), [['skip', { ruleset: 'current' }]]);
  assert.deepEqual(rules.at(-1), { ref: 'downloads-block', description: rules.at(-1).description, expression: host, action: 'block' });
});

test('a hundred releases with an editor and Flatpak object each fit the Free plan rules', () => {
  const keys = bucket(100);
  const rules = allowRules(keys);
  assert.ok(rules.length <= 5, `${rules.length} rules`);
  for (const rule of rules) assert.ok(rule.expression.length <= 4096, `${rule.ref} is ${rule.expression.length} characters`);
  assert.deepEqual(rules.slice(0, -1).map(rule => rule.ref), rules.slice(0, -1).map((_, index) => `downloads-allow-${index + 1}`));
  assert.deepEqual(allowedPaths(rules), new Set(keys.map(key => `/${key}`)));
});

test('keys that cannot be written into a rule are refused', () => {
  for (const key of ['bad"key', 'space key', 'back\\slash']) assert.throws(() => allowRules([key]), /Cannot allow downloads key/);
});
