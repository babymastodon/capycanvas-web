import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { mkdir, readFile, writeFile, rm, stat } from 'node:fs/promises';
import { join } from 'node:path';
import { browser } from './browser.mjs';
import { serve } from './serve.mjs';
import { editor } from './capture/editor.mjs';
import { fixedLanguages, languageSwitcher, messageReader, locales } from './capture/languages.mjs';
import { applyTheme, settled } from './capture/shoot.mjs';
import { clock, metrics } from './capture/demo/motion.mjs';
import { pointerEvents, installPointer, readPointer } from './capture/demo/pointer.mjs';
import { journey, look, opening, prepare } from './capture/demo/photo-journey.mjs';

const locale = process.env.DEMO_LOCALE || 'en', theme = process.env.DEMO_THEME || 'light';
assert.ok(locales.includes(locale)); assert.ok(['light', 'dark'].includes(theme));
const through = process.env.DEMO_THROUGH;
const output = process.env.DEMO_OUTPUT || `artifacts/photo-demos/${locale}-${theme}${through ? `-through-${through}` : ''}`;
const prepared = JSON.parse(await readFile('artifacts/capture-app.json', 'utf8'));
await rm(`${output}/frames`, { recursive: true, force: true });
await mkdir(`${output}/frames`, { recursive: true });
const host = await serve(0, prepared.directory);
const b = await browser({ gpu: true, headless: process.env.CAPTURE_BROWSER_MODE !== 'wayland', width: 1920, height: 1080, scale: 1 });
const frames = [], writes = [], errors = [], stages = [], motions = [], cuts = [], keys = [];
let cursor = [1190, 720], started, recording = false, pressed = null, held = 0;
const hold = seconds => new Promise(resolve => setTimeout(resolve, seconds * 1000));
const now = () => Date.now() / 1000 - started;
const saveFrame = (data, at) => {
  const file = `frames/${String(frames.length).padStart(6, '0')}.png`;
  frames.push({ file, at });
  writes.push(writeFile(`${output}/${file}`, Buffer.from(data, 'base64')).catch(error => errors.push(String(error))));
};
b.on('Page.screencastFrame', ({ data, metadata, sessionId }) => {
  if (recording) saveFrame(data, metadata.timestamp ?? Date.now() / 1000);
  b.call('Page.screencastFrameAck', { sessionId }).catch(error => errors.push(String(error)));
});

try {
  await b.call('Page.addScriptToEvaluateOnNewDocument', { source: fixedLanguages + pointerEvents });
  await b.navigate(host.url);
  const e = await editor(b);
  await languageSwitcher(b).use(locale);
  const message = await messageReader(join(prepared.directory, '../../assets/locales'));
  const t = key => message(key, locale);
  await applyTheme(b, theme);
  await e.workspace('photographer');
  await e.provide('NDF_4717.jpg', await readFile('site/scripts/capture/showcase/NDF_4717.jpg'));
  await e.open('NDF_4717.jpg');
  await e.select('NDF_4717');
  assert.equal(await e.read('!!layerApp.state().layers.find(l=>l.label==="NDF_4717").object'), false, 'The photograph opens as a paint layer');
  await settled(b);
  await prepare({ e, b });
  await e.send({ type: 'selection', action: { op: 'load_layer', id: await e.read('Number(layerApp.state().layers.find(l=>l.label==="Subject").id)'), mode: 'new', inverted: false } });
  await e.wait('layerApp.state().layer_tools.has_selection');
  await e.invoke('quick_mask');
  await settled(b);
  await b.screenshot(`${output}/subject-selection.png`);
  await e.invoke('quick_mask');
  await e.invoke('deselect');
  await opening({ e });
  await b.call('Input.dispatchMouseEvent', { type: 'mouseMoved', x: -20, y: -20, button: 'none', buttons: 0 });
  await e.invoke('fit_canvas');
  await settled(b);
  await e.wait(`layerApp.state().histogram.status===${JSON.stringify(t('resources-histogram-exact'))}`);
  await settled(b);
  await b.screenshot(`${output}/poster-1080p.png`);
  await b.evaluate(installPointer);

  const send = (device, type, { force = 0, tilt = [0, 0] } = {}) => {
    const [x, y] = cursor;
    const down = type === 'down' || (type === 'move' && !!pressed);
    return b.call('Input.dispatchMouseEvent', { type: { down: 'mousePressed', move: 'mouseMoved', up: 'mouseReleased' }[type], x, y, button: type === 'move' && !down ? 'none' : 'left', buttons: down ? 1 : 0, clickCount: type === 'move' ? 0 : 1, modifiers: held, pointerType: device, ...(device === 'pen' ? { force: type === 'up' ? 0 : force, tiltX: tilt[0], tiltY: tilt[1] } : {}) });
  };
  const press = async (device = 'mouse', options) => { assert.equal(pressed, null); await send(device, 'down', options); pressed = device; };
  const release = async () => { assert.ok(pressed); const device = pressed; await send(device, 'up'); pressed = null; };
  const travel = async (to, { seconds, bow, device = pressed ?? 'mouse', force = .55, name = 'travel' } = {}) => {
    const from = [...cursor], distance = Math.hypot(to[0] - from[0], to[1] - from[1]);
    if (distance < .5) return;
    seconds ??= Math.min(.34, .11 + distance / 4200);
    bow ??= distance > 500 ? .025 : 0;
    const dx = to[0] - from[0], dy = to[1] - from[1];
    const c1 = [from[0] + dx * .32 - dy * bow, from[1] + dy * .32 + dx * bow], c2 = [from[0] + dx * .72 - dy * bow, from[1] + dy * .72 + dx * bow];
    const path = s => from.map((v, i) => (1 - s) ** 3 * v + 3 * (1 - s) ** 2 * s * c1[i] + 3 * (1 - s) * s * s * c2[i] + s ** 3 * to[i]);
    const begin = performance.now(), samples = [];
    for (;;) {
      const t = Math.min(1, (performance.now() - begin) / (seconds * 1000));
      cursor = path(clock(t, pressed ? 'balanced' : 'early'));
      assert.ok(cursor.every(Number.isFinite) && cursor[0] >= 0 && cursor[0] < 1920 && cursor[1] >= 0 && cursor[1] < 1080, `In-frame gesture ${name}: ${cursor}`);
      await send(device, 'move', { force });
      samples.push({ at: now(), x: cursor[0], y: cursor[1] });
      if (t === 1) break;
      await hold(.014);
    }
    motions.push({ name, device, pressed: !!pressed, seconds, from, to: [...cursor], ...metrics(samples) });
  };
  const api = {
    e, b, t, through,
    hold,
    async stage(name, extra = {}) { const at = now(); stages.push({ name, at, ...extra }); console.log(`${at.toFixed(2)} s: ${name}`); },
    async until(expression, timeout = 60000) {
      const begin = now();
      await b.until(expression, timeout);
      const end = now();
      if (end - begin > .45) cuts.push([begin + .3, end - .05]);
    },
    async click(at, { seconds, recheck } = {}) {
      await travel(at, { seconds });
      if (recheck) { const again = await recheck(); if (Math.hypot(again[0] - at[0], again[1] - at[1]) > 3) await travel(again, { seconds: .2 }); }
      await hold(.02); await press(); await hold(.05); await release(); await hold(.03);
      await e.idle();
    },
    cursor: () => [...cursor],
    async move(at, { bow, seconds } = {}) { await travel(at, { bow, seconds }); },
    async tap(at, device = 'mouse') {
      await travel(at, { device });
      await hold(.05); await press(device, { force: .6 }); await hold(.08); await release(); await hold(.05);
      await e.idle();
    },
    async drag(from, to, { device = 'mouse', seconds } = {}) {
      await travel(from, { device });
      await hold(.05); await press(device); await hold(.06);
      await travel(to, { device, seconds: seconds ?? Math.min(.8, .3 + Math.hypot(to[0] - from[0], to[1] - from[1]) / 1600), bow: 0 });
      await hold(.06); await release(); await hold(.06);
      await e.idle();
    },
    async trace(points, seconds) {
      await travel(points[0], { device: 'pen' });
      await hold(.06); await press('pen', { force: .5 });
      const lengths = [0];
      for (let i = 1; i < points.length; i++) lengths.push(lengths[i - 1] + Math.hypot(points[i][0] - points[i - 1][0], points[i][1] - points[i - 1][1]));
      const total = lengths.at(-1), begin = performance.now();
      for (let k = 0; ;) {
        const s = Math.min(1, (performance.now() - begin) / (seconds * 1000)), along = s * total;
        while (k < points.length - 2 && lengths[k + 1] < along) k++;
        const f = (along - lengths[k]) / Math.max(1e-6, lengths[k + 1] - lengths[k]);
        cursor = points[k].map((v, i) => v + (points[k + 1][i] - v) * Math.min(1, f));
        await send('pen', 'move', { force: .5 });
        if (s === 1) break;
        await hold(.008);
      }
      await release(); await hold(.08);
      await e.idle();
    },
    async wheel(at, dy) {
      await travel(at);
      const steps = Math.max(2, Math.ceil(Math.abs(dy) / 90));
      for (let i = 0; i < steps; i++) { await b.call('Input.dispatchMouseEvent', { type: 'mouseWheel', x: cursor[0], y: cursor[1], deltaX: 0, deltaY: dy / steps, pointerType: 'mouse' }); await hold(.05); }
      await hold(.12);
    },
    async type(value) {
      for (const character of value) { await b.call('Input.insertText', { text: character }); keys.push({ at: now(), text: character }); await hold([.05, .04, .055, .04][keys.length % 4]); }
    },
    async key(key, modifiers = 0) {
      const codes = { Enter: ['Enter', 13], Escape: ['Escape', 27], a: ['KeyA', 65], d: ['KeyD', 68], o: ['KeyO', 79] };
      const [code, vk] = codes[key];
      for (const type of ['keyDown', 'keyUp']) await b.call('Input.dispatchKeyEvent', { type, key, code, windowsVirtualKeyCode: vk, modifiers });
      keys.push({ at: now(), key, modifiers });
      await hold(.05);
    },
    async holding(key, action) {
      const [code, vk, bit] = { Alt: ['AltLeft', 18, 1] }[key];
      held |= bit;
      await b.call('Input.dispatchKeyEvent', { type: 'rawKeyDown', key, code, windowsVirtualKeyCode: vk, modifiers: held });
      keys.push({ at: now(), key, held: true });
      await hold(.12);
      await action();
      held &= ~bit;
      await b.call('Input.dispatchKeyEvent', { type: 'keyUp', key, code, windowsVirtualKeyCode: vk, modifiers: held });
      await hold(.05);
    },
  };

  started = Date.now() / 1000; recording = true;
  await b.call('Page.startScreencast', { format: 'png', maxWidth: 1920, maxHeight: 1080, everyNthFrame: 1 });
  while (!frames.length) await hold(.02);
  await journey(api);
  await b.call('Page.stopScreencast'); recording = false;
  const last = await b.call('Page.captureScreenshot', { format: 'png' });
  saveFrame(last.data, Date.now() / 1000);
  await Promise.all(writes);
  assert.deepEqual(errors, []); assert.deepEqual(b.errors, []);
  assert.equal(pressed, null);

  frames.sort((a, b) => a.at - b.at);
  const unique = frames.filter((f, i) => !i || f.at > frames[i - 1].at);
  const origin = started;
  const cutSeconds = (from, to) => cuts.reduce((n, [a, z]) => n + Math.max(0, Math.min(to, z) - Math.max(from, a)), 0);
  const shift = at => at - cutSeconds(0, at);
  const concat = ['ffconcat version 1.0'];
  let duration = 0;
  for (let i = 0; i < unique.length; i++) {
    const a = unique[i].at - origin, z = i + 1 < unique.length ? unique[i + 1].at - origin : a + 1 / 24;
    const length = z - a - cutSeconds(a, z);
    if (length <= .0005) continue;
    concat.push(`file '${unique[i].file}'`, `duration ${length.toFixed(6)}`);
    duration += length;
  }
  concat.push(`file '${unique.at(-1).file}'`);
  await writeFile(`${output}/frames.ffconcat`, concat.join('\n') + '\n');
  const firstFrameAt = unique[0].at - origin;
  const timeline = stages.map(stage => ({ ...stage, video: Number((shift(stage.at) - shift(firstFrameAt)).toFixed(3)) }));
  const pointer = await b.evaluate(readPointer);
  assert.equal(pointer.visible, true);
  const { directory, ...source } = prepared;
  await writeFile(`${output}/capture.json`, JSON.stringify({ width: 1920, height: 1080, locale, theme, source, look, frames: unique.length, firstFrameAt, duration, cuts, stages: timeline, errors: b.errors }, null, 2) + '\n');
  await writeFile(`${output}/motion-audit.json`, JSON.stringify({ motions, keys, cuts, duration }, null, 2) + '\n');
  console.log(`Captured ${duration.toFixed(2)} s, ${unique.length} frames, ${cuts.length} cuts`);
} catch (error) {
  recording = false; await b.call('Page.stopScreencast').catch(() => {}); await Promise.all(writes);
  await b.screenshot(`${output}/capture-failure.png`).catch(() => {});
  await writeFile(`${output}/capture-failure.json`, await b.evaluate("JSON.stringify({state:layerApp.state(),layout:layerApp.app.layout(innerWidth,innerHeight)},(_,v)=>typeof v==='bigint'?Number(v):v)").catch(() => '{}'));
  await writeFile(`${output}/capture-stages.json`, JSON.stringify({ stages, cuts }, null, 2)).catch(() => {});
  throw error;
} finally { await b.close(); await host.close(); }

const capture = JSON.parse(await readFile(`${output}/capture.json`, 'utf8'));
await new Promise((resolve, reject) => {
  const offset = Math.max(0, capture.duration - .32).toFixed(6);
  const body = '[0:v]fps=24,format=yuv420p,setsar=1,settb=AVTB,setpts=PTS-STARTPTS';
  const filters = through ? `${body}[video]` : `${body}[body];[1:v]format=yuv420p,setsar=1,settb=AVTB,setpts=PTS-STARTPTS[poster];[body][poster]xfade=transition=fade:duration=0.22:offset=${offset}[video]`;
  const poster = through ? [] : ['-loop', '1', '-framerate', '24', '-i', `${output}/poster-1080p.png`];
  const child = spawn('ffmpeg', ['-hide_banner', '-loglevel', 'warning', '-y', '-f', 'concat', '-safe', '0', '-i', `${output}/frames.ffconcat`, ...poster, '-filter_complex', filters, '-map', '[video]', '-r', '24', '-t', String(capture.duration), '-an', '-c:v', 'libvpx-vp9', '-crf', '30', '-b:v', '1400k', '-deadline', 'good', '-cpu-used', '2', '-row-mt', '1', '-threads', '8', '-g', '9999', `${output}/photo-demo-1080p.webm`], { stdio: ['ignore', 'ignore', 'inherit'] });
  child.on('error', reject);
  child.on('exit', code => code === 0 ? resolve() : reject(new Error(`ffmpeg exited ${code}`)));
});
const bytes = (await stat(`${output}/photo-demo-1080p.webm`)).size;
await writeFile(`${output}/video.json`, JSON.stringify({ width: 1920, height: 1080, fps: 24, duration: capture.duration, locale, theme, files: [{ file: 'photo-demo-1080p.webm', bytes }] }, null, 2) + '\n');
console.log(JSON.stringify({ file: 'photo-demo-1080p.webm', bytes }));
if (process.env.DEMO_KEEP_FRAMES !== '1') await rm(`${output}/frames`, { recursive: true });
