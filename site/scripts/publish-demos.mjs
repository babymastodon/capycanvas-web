import assert from 'node:assert/strict';
import { execFile } from 'node:child_process';
import { createHash } from 'node:crypto';
import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { promisify } from 'node:util';
import { locales } from './capture/languages.mjs';

const output = 'site/public/assets/demos';
const themes = ['light', 'dark'];
const hash = bytes => createHash('sha256').update(bytes).digest('hex');
const run = promisify(execFile);
const shared = ['capture/demo/pointer.mjs', 'browser.mjs', 'serve.mjs', 'capture/editor.mjs', 'capture/languages.mjs', 'capture/shoot.mjs'];
const demos = {
  sketch: {
    seconds: [24, 28], bytes: 1500000, hero: ['color-changed', .9],
    recipes: ['capture-demo.mjs', 'capture/demo/motion.mjs', 'capture/demo/encode.mjs', ...shared],
    check: capture => {
      assert.equal(capture.colorWheel, 'Medium (216px)');
      assert.equal(capture.stages.find(stage => stage.name === 'blotty-ink-selected').preset, 33);
      assert.ok(capture.hueReleaseRadius > 158, 'Hue releases outside the wheel');
    },
  },
  paint: {
    seconds: [30, 36], bytes: 3000000, hero: ['pink-sky-crystal', .2],
    recipes: ['capture-paint-demo.mjs', 'capture/demo/paint-motion.mjs', 'capture/demo/paint-strokes.json', 'capture/demo/motion.mjs', ...shared],
    check: capture => {
      assert.ok(Math.abs(capture.painterlySize - 592) <= 12 && Math.abs(capture.crystalSize - 411) <= 10, 'Blender sizes');
      const glass = capture.stages.find(stage => stage.name === 'glass-distorted');
      assert.ok(Math.abs(glass.distortion / glass.original - 2) < .15, 'Glass distortion doubles');
      const layers = name => capture.stages.find(stage => stage.name === name).state.layers;
      assert.equal(layers('posterize-deleted').length, layers('layers-panel').length - 1, 'One filter layer is deleted');
    },
  },
  photo: {
    seconds: [72, 90], bytes: 6500000, hero: ['color-matched', .3],
    recipes: ['capture-photo-demo.mjs', 'capture/demo/photo-journey.mjs', 'capture/demo/photo-outline.json', 'capture/demo/motion.mjs', ...shared],
    check: capture => {
      assert.deepEqual(capture.stages.map(stage => stage.name), ['original-hero', 'logo-healed', 'subject-selected', 'cut-out', 'sage-backdrop', 'subject-placed', 'poster-look', 'color-matched', 'shadow', 'final']);
      assert.equal(capture.look.shadowBlur, 20);
    },
  },
};
const sources = {}, published = {};
for (const [id, demo] of Object.entries(demos)) {
  const planned = [];
  for (const locale of locales) for (const theme of themes) {
    const root = `${process.env[`${id.toUpperCase()}_DEMO_DIRECTORY`] || `artifacts/${id}-demos`}/${locale}-${theme}`;
    const capture = JSON.parse(await readFile(`${root}/capture.json`, 'utf8'));
    assert.equal(capture.locale, locale); assert.equal(capture.theme, theme);
    assert.deepEqual(capture.errors, []);
    demo.check(capture);
    const { revision, ...sourceManifest } = capture.source;
    sources[revision] = sourceManifest;
    const source = `${root}/${id}-demo-1080p.webm`;
    const bytes = await readFile(source);
    const { stdout } = await run('ffprobe', ['-v', 'error', '-show_streams', '-show_format', '-of', 'json', source]);
    const probe = JSON.parse(stdout);
    assert.equal(probe.streams.length, 1, 'Silent video only');
    const stream = probe.streams[0];
    assert.deepEqual([stream.codec_name, stream.width, stream.height, stream.r_frame_rate], ['vp9', 1920, 1080, '24/1']);
    const duration = Number(probe.format.duration);
    assert.ok(duration >= demo.seconds[0] && duration < demo.seconds[1], `${id} demo length: ${source}`);
    assert.ok(bytes.length < demo.bytes, `Small download: ${source}`);
    const [stage, hold] = demo.hero;
    const reached = capture.stages.find(entry => entry.name === stage);
    const hero = Number(((reached.video ?? reached.at - capture.firstFrameAt) + hold).toFixed(2));
    assert.ok(hero > 10 && hero < duration, `${id} homepage clip ends inside the video: ${source}`);
    planned.push({ source, file: `${locale}/${id}-${theme}.webm`, locale, theme, duration, hero,
      bytes: bytes.length, sha256: hash(bytes), revision });
  }
  const recipeHashes = Object.fromEntries(await Promise.all(demo.recipes.map(async file => [file, hash(await readFile(`site/scripts/${file}`))])));
  for (const { source, file } of planned) {
    await mkdir(`${output}/${file.split('/')[0]}`, { recursive: true });
    await copyFile(source, `${output}/${file}`);
  }
  published[id] = { recipeHashes, videos: planned.map(({ source, ...entry }) => entry) };
  console.log(`Published ${planned.length} localized ${id} demos (${Math.round(planned.reduce((n, v) => n + v.bytes, 0) / 1000000)} MB total; one variant per reader).`);
}
await writeFile(`${output}/manifest.json`, JSON.stringify({ width: 1920, height: 1080, fps: 24,
  codec: 'vp9', audio: false, locales, themes, sources, demos: published,
}, null, 2) + '\n');
