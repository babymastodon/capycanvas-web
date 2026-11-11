import assert from 'node:assert/strict';

const site = 'https://capycanvas.art';
const editor = 'https://editor.capycanvas.art';
const flatpak = 'https://flatpak.capycanvas.art';
const downloads = 'https://downloads.capycanvas.art';
const failures = [];

const request = (url, method = 'HEAD') => fetch(url, { method, redirect: 'manual', headers: { 'user-agent': 'capycanvas-live-check' } });

async function check(name, url, expect) {
  try {
    const response = await request(url, expect.method);
    assert.equal(response.status, expect.status ?? 200, `status ${response.status}`);
    for (const [header, value] of Object.entries(expect.headers ?? {})) {
      const actual = response.headers.get(header) ?? '';
      assert.ok(value instanceof RegExp ? value.test(actual) : actual === value, `${header}: ${actual}`);
    }
    console.log(`ok   ${name}`);
    return response;
  } catch (error) {
    failures.push(`${name} (${url}): ${error.message}`);
    console.log(`FAIL ${name}: ${error.message}`);
  }
}

await check('site', `${site}/`, { headers: { 'content-type': /^text\/html/, 'strict-transport-security': /max-age=\d+/ } });
await check('download page', `${site}/download/`, { headers: { 'content-type': /^text\/html/ } });
await check('www redirect', `${site.replace('://', '://www.')}/download/`, { status: 301, headers: { location: `${site}/download/` } });
await check('plain HTTP redirect', `${site.replace('https:', 'http:')}/`, { status: 301, headers: { location: `${site}/` } });

const index = await check('editor', `${editor}/`, { method: 'GET', headers: { 'content-type': /^text\/html/ } });
const wasm = index && (await index.text()).match(/assets\/pkg\/layer_web_bg\.[a-f0-9]{20}\.wasm/)?.[0];
if (!wasm) failures.push('editor: index.html names no Wasm file');
else {
  const moved = `${downloads}/editor/${wasm}`;
  await check('editor Wasm redirect', `${editor}/${wasm}`, { status: 302, headers: { location: moved } });
  await check('editor Wasm', moved, { headers: { 'content-type': 'application/wasm', 'access-control-allow-origin': '*' } });
}

await check('Flatpak summary', `${flatpak}/summary`, {});
await check('Flatpak reference', `${flatpak}/capycanvas.flatpakref`, { headers: { 'content-type': 'application/vnd.flatpak.ref' } });

const feed = await check('release feed', `${downloads}/releases.json`, { method: 'GET', headers: { 'content-type': /json/ } });
const [latest] = feed ? await feed.json() : [];
if (!latest) failures.push('release feed lists no release');
for (const asset of latest?.assets ?? []) {
  await check(`${latest.tag_name} ${asset.name}`, asset.browser_download_url, { headers: { 'content-length': String(asset.size) } });
}

if (failures.length) {
  console.error(`\n${failures.length} live check(s) failed:\n${failures.join('\n')}`);
  process.exit(1);
}
