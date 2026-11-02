import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { createHash } from 'node:crypto';
import { languages } from '../site/src/data/content.mjs';

const root = resolve(process.env.SITE_OUTPUT || 'docs');
const hash = bytes => createHash('sha256').update(bytes).digest('hex');

test('the Sketch, Paint and Photo demos cover every locale and theme with small silent 1080p videos', async () => {
  const manifest = JSON.parse(await readFile(`${root}/assets/demos/manifest.json`, 'utf8'));
  assert.deepEqual(manifest.locales, Object.keys(languages));
  assert.deepEqual(manifest.themes, ['light', 'dark']);
  assert.deepEqual([manifest.width, manifest.height, manifest.fps, manifest.codec, manifest.audio], [1920, 1080, 24, 'vp9', false]);
  const limits = { sketch: { seconds: [24, 28], bytes: 1500000 }, paint: { seconds: [30, 36], bytes: 3000000 }, photo: { seconds: [72, 90], bytes: 6500000 } };
  assert.deepEqual(Object.keys(manifest.demos), Object.keys(limits));
  for (const [id, demo] of Object.entries(manifest.demos)) {
    assert.deepEqual(demo.videos.map(v => `${v.locale}/${v.theme}`), manifest.locales.flatMap(locale => manifest.themes.map(theme => `${locale}/${theme}`)));
    for (const entry of demo.videos) {
      assert.equal(entry.file, `${entry.locale}/${id}-${entry.theme}.webm`);
      assert.match(entry.revision, /^[a-f0-9]{40}$/);
      assert.ok(manifest.sources[entry.revision].hashes['app.js']);
      assert.ok(entry.duration >= limits[id].seconds[0] && entry.duration < limits[id].seconds[1]);
      const bytes = await readFile(`${root}/assets/demos/${entry.file}`);
      assert.equal(hash(bytes), entry.sha256);
      assert.equal(bytes.length, entry.bytes);
      assert.ok(bytes.length < limits[id].bytes);
      assert.equal(bytes.subarray(0, 4).toString('hex'), '1a45dfa3');
      assert.ok(bytes.includes(Buffer.from('V_VP9')));
      const html = await readFile(`${root}/${entry.locale === 'en' ? '' : entry.locale + '/'}docs/index.html`, 'utf8');
      assert.ok(html.includes(`data-${entry.theme}="/assets/demos/${entry.file}"`));
      assert.match(html, /<video[^>]+autoplay[^>]+loop[^>]+muted[^>]+playsinline[^>]+preload="none"/);
      assert.doesNotMatch(html, /<video[^>]+\scontrols(?:\s|=|>)/);
    }
    for (const [file, expected] of Object.entries(demo.recipeHashes)) {
      assert.equal(hash(await readFile(`site/scripts/${file}`)), expected, `${id} demo capture recipe: ${file}`);
    }
  }
});
