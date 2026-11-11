import test from 'node:test';
import assert from 'node:assert/strict';
import { allowRules } from '../site/scripts/allow-downloads.mjs';

const host = 'http.host eq "downloads.capycanvas.art"';
const allowedPaths = rule => rule.expression.match(/in \{(.*)\}$/)[1].split(' ').map(path => JSON.parse(path));

test('downloads serve plain GETs of bucket files and block everything else', () => {
  const rules = allowRules(['v1.0.15/capycanvas-1.0.15-android.apk', 'releases.json']);
  assert.equal(rules.length, 2);
  assert.equal(rules[0].action, 'skip');
  assert.deepEqual(rules[0].action_parameters, { ruleset: 'current' });
  assert.ok(rules[0].expression.startsWith(`${host} and http.request.method eq "GET" and http.request.uri.query eq "" and http.request.uri.path in {`));
  assert.deepEqual(allowedPaths(rules[0]), ['/releases.json', '/v1.0.15/capycanvas-1.0.15-android.apk']);
  assert.deepEqual(rules.at(-1), { ref: 'downloads-block', description: rules.at(-1).description, expression: host, action: 'block' });
});

test('long file lists split into rules that fit the expression limit', () => {
  const keys = Array.from({ length: 300 }, (_, index) => `v1.${index}.0/capycanvas-1.${index}.0-windows-arm64-setup.exe`);
  const rules = allowRules(keys);
  const allows = rules.slice(0, -1);
  assert.ok(allows.length > 1);
  for (const rule of allows) assert.ok(rule.expression.length <= 4096, `${rule.ref} is ${rule.expression.length} characters`);
  assert.deepEqual(allows.map(rule => rule.ref), allows.map((_, index) => `downloads-allow-${index + 1}`));
  assert.deepEqual(allows.flatMap(allowedPaths), keys.map(key => `/${key}`).sort());
  assert.equal(rules.at(-1).action, 'block');
});

test('keys that cannot be written into a rule are refused', () => {
  for (const key of ['bad"key', 'space key', 'back\\slash']) assert.throws(() => allowRules([key]), /Cannot allow downloads key/);
});
