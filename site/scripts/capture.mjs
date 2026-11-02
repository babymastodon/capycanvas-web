import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { browser } from './browser.mjs';
import { serve } from './serve.mjs';
import { editor } from './capture/editor.mjs';
import { clearAnnotations } from './capture/annotations.mjs';
import { pageHelpers, shooter } from './capture/shoot.mjs';
import { appLanguage, defaultNames, fixedLanguages, languageSwitcher, locales, messageReader, nameLocalizer } from './capture/languages.mjs';
import { chapters as docs } from './capture/docs/index.mjs';
import showcase from './capture/showcase.mjs';
import { PNG } from 'pngjs';

const started = Date.now();
const width = 1920, height = 1080, scale = 2;
const areas = ['docs', 'guides', 'showcase'];
const published = resolve('site/public/assets');
const output = resolve(process.env.CAPTURE_OUTPUT || published);
const review = resolve(process.env.CAPTURE_REVIEW || 'artifacts/capture-review');
const hash = bytes => createHash('sha256').update(bytes).digest('hex');
for (const area of areas) await mkdir(`${output}/${area}`, { recursive: true });
await mkdir(review, { recursive: true });
const prepared = JSON.parse(await readFile('artifacts/capture-app.json', 'utf8'));
const localize = await defaultNames(join(prepared.directory, '../../assets/locales'));
const message = await messageReader(join(prepared.directory, '../../assets/locales'));
const host = process.env.APP_URL ? null : await serve(0, prepared.directory);
const appUrl = process.env.APP_URL || host.url;
const source = await fetch(new URL('capture-source.json', appUrl)).then(response => { assert.ok(response.ok, 'Capture source manifest is served'); return response.json(); });
assert.equal(source.revision, prepared.revision, 'Served revision matches prepared source');
for (const [path, expected] of Object.entries(source.hashes)) {
  const bytes = await fetch(new URL(path, appUrl)).then(response => { assert.ok(response.ok, `Source file available: ${path}`); return response.arrayBuffer(); });
  assert.equal(hash(Buffer.from(bytes)), expected, `Served bytes match source manifest: ${path}`);
}

const chapters = { ...docs, showcase };
const scope = (process.env.CAPTURE_ONLY || 'all').split(',').map(name => name.trim()).filter(Boolean);
const known = Object.keys(chapters);
for (const name of scope) assert.ok(name === 'all' || known.includes(name), `Known capture chapter: ${name}`);
const selected = scope.includes('all') ? known : known.filter(name => scope.includes(name));
const examples = resolve(process.env.CAPTURE_EXAMPLES || (selected.includes('illustration') ? `${output}/examples` : `${published}/examples`));
await mkdir(examples, { recursive: true });
const previous = JSON.parse(await readFile(`${output}/capture.json`, 'utf8').catch(() => readFile(`${published}/capture.json`, 'utf8')));
const shotOf = entry => entry.shot ?? entry.file.replace(/-(light|dark)\.webp$/, '');
const captures = [];
if (!scope.includes('all')) {
  for (const entry of previous.captures.filter(entry => entry.shot)) {
    const bytes = await readFile(`${output}/${entry.file}`).catch(() => null);
    if (bytes && hash(bytes) === entry.sha256) captures.push({ revision: previous.revision, ...entry });
  }
}
const committed = new Map(previous.captures.filter(entry => entry.shot && entry.quality).map(entry => [entry.file, entry]));
const previousSources = previous.sources ?? { [previous.revision]: { source: previous.source, patches: previous.patches, hashes: previous.hashes, browser: previous.browser } };

const recipeFiles = async dir => (await readdir(dir, { withFileTypes: true })).flatMap(entry => entry.isDirectory() ? [] : [join(dir, entry.name)]);
const recipePaths = [
  ...['capture.mjs', 'browser.mjs', 'serve.mjs', 'capture-headless.sh', 'prepare-capture.mjs', 'capture-compatibility.mjs', 'capture/demo/photo-journey.mjs', 'capture/demo/photo-outline.json'].map(path => `site/scripts/${path}`),
  ...(await recipeFiles('site/scripts/capture')).filter(path => path.endsWith('.mjs')),
  ...(await recipeFiles('site/scripts/capture/docs')).filter(path => path.endsWith('.mjs')),
].sort();
const recipeHashes = Object.fromEntries(await Promise.all(recipePaths.map(async path => [path.replace('site/scripts/', ''), hash(await readFile(path))])));
const headless = process.env.CAPTURE_BROWSER_MODE !== 'wayland';
const displays = (process.env.CAPTURE_DISPLAYS || '').split(',').filter(Boolean);
const jobs = Math.max(1, Math.min(selected.length, headless ? Number(process.env.CAPTURE_JOBS || 6) : displays.length));
const manifest = { width, height, scale, partial: true, locales,
  display: headless ? 'Chrome native headless' : 'Headed Chrome on private headless Wayland displays, one browser per chapter',
  canvas2d: 'Software decoding and UI previews; artwork remains hardware WebGPU.', recipeHashes,
  languages: 'Each image is captured once per site language from the same editor state, after switching the editor language in place. Default layer, palette and swatch names shown in the image are renamed to the names the editor gives them in that language, then restored. Images identical in every language are stored once under shared/. A new capture keeps the committed file when it has the same size, quality and callouts and its pixels match within a small tolerance (no channel off by more than 32, mean difference under 1).',
  artwork: 'Manual: an original abstract study of a teal ribbon, ochre disc and terracotta block, dry-media, paper, blender, and Liquify comparisons drawn through real browser pen input and editor actions, and a photograph of a terrarium supplied by Capy Atelier. The paper-library example imports a PNG derived from the editor\'s Linen preview. Homepage: a pen sketch, an oil painting and a photograph supplied by Capy Atelier, shown in Sketch, Paint and Photo.',
  annotations: 'Cropped from the real editor; numbered SVG outlines are injected over measured DOM controls.', captures };

const drawing = selected.includes('illustration');
const saved = new Map();
const announce = name => { if (!saved.has(name)) saved.set(name, Promise.withResolvers()); saved.get(name).resolve(); };
let illustrated = () => {};
const finished = drawing ? new Promise(done => { illustrated = done; }) : Promise.resolve();
const example = async name => {
  if (drawing) {
    if (!saved.has(name)) saved.set(name, Promise.withResolvers());
    await Promise.race([saved.get(name).promise, finished]);
  }
  return readFile(`${examples}/${name}`);
};

const glyphCheck = `(()=>{
  const scripts={ja:/[\\u3040-\\u30ff\\u4e00-\\u9fff]/u,'zh-Hans':/[\\u4e00-\\u9fff]/u,'zh-Hant':/[\\u4e00-\\u9fff]/u,ko:/[\\uac00-\\ud7af]/u,th:/[\\u0e00-\\u0e7f]/u};
  const pattern=scripts[document.documentElement.lang];if(!pattern)return [];
  const chars=[...new Set([...document.body.innerText].filter(c=>pattern.test(c)))].slice(0,60);
  if(chars.length<5)return ['too few characters'];
  const canvas=document.createElement('canvas');canvas.width=64;canvas.height=64;const ctx=canvas.getContext('2d',{willReadFrequently:true});
  ctx.font='32px '+getComputedStyle(document.querySelector('#header')).fontFamily;
  const draw=c=>{ctx.clearRect(0,0,64,64);ctx.fillText(c,8,44);return ctx.getImageData(0,0,64,64).data.join();};
  const missing=draw('\\u{10FFFD}');
  return chars.filter(c=>draw(c)===missing);
})()`;
let glyphs = null;
async function checkGlyphs(b, lang) {
  for (const locale of locales) {
    await lang.use(locale);
    await b.evaluate('document.fonts.ready.then(()=>null)');
    assert.deepEqual(await b.evaluate(glyphCheck), [], `Interface text renders with real glyphs in ${appLanguage(locale)}`);
  }
  await lang.use('en');
}

const sources = {};
const timings = {};
const failures = [];
const retried = [];
async function runChapter(name, display, attempt) {
  const begun = Date.now();
  const b = await browser({ gpu: true, headless, width, height, scale, env: display ? { WAYLAND_DISPLAY: display } : {} });
  try {
    sources.browser ??= await b.call('Browser.getVersion');
    await b.call('Page.addScriptToEvaluateOnNewDocument', { source: fixedLanguages + pageHelpers });
    await b.navigate(appUrl);
    const e = await editor(b, { saved: name === 'illustration' ? announce : undefined });
    const lang = languageSwitcher(b);
    if (!glyphs) { glyphs = checkGlyphs(b, lang); await glyphs; }
    await e.workspace('illustrator');
    const verifyPixels = async (clip = { x: 500, y: 180, width: 900, height: 750 }) => {
      const check = await b.call('Page.captureScreenshot', { format: 'png', clip: { ...clip, scale: 1 } });
      const pixels = PNG.sync.read(Buffer.from(check.data, 'base64')).data;
      const buckets = new Map();
      for (let i = 0; i < pixels.length; i += 4) { const key = (pixels[i] >> 4) << 8 | (pixels[i + 1] >> 4) << 4 | pixels[i + 2] >> 4; buckets.set(key, (buckets.get(key) || 0) + 1); }
      const total = pixels.length / 4;
      assert.ok(buckets.size > 30 && Math.max(...buckets.values()) < total * .9, 'Screenshot contains rendered artwork, not a blank or missing GPU surface');
    };
    const { capture, shoot, record } = shooter({ b, lang, names: nameLocalizer(b, localize), output, captures, previous: committed, verifyPixels, width, height });
    await chapters[name]({ e, b, capture, shoot, record, verifyPixels, example, message, examples, output, review });
    assert.deepEqual(b.errors, [], `No application errors during ${name}`);
    timings[name] = Math.round((Date.now() - begun) / 1000);
    console.log(`Finished ${name} in ${timings[name]} s`);
    return true;
  } catch (error) {
    console.error(`Failed ${name} (attempt ${attempt}): ${error.stack}`);
    const prefix = `${review}/${name}-${attempt}`;
    await clearAnnotations(b).catch(() => {});
    await b.screenshot(`${prefix}-failure.png`).catch(() => {});
    await writeFile(`${prefix}-failure-state.json`, await b.evaluate("JSON.stringify({state:layerApp.state(),workspace:JSON.parse(layerApp.app.workspace_view())},(_,v)=>typeof v==='bigint'?Number(v):v)").catch(() => '{}')).catch(() => {});
    await writeFile(`${prefix}-errors.json`, JSON.stringify([String(error.stack), ...b.errors], null, 2)).catch(() => {});
    return false;
  } finally {
    if (name === 'illustration') illustrated();
    await b.close();
  }
}

const queue = selected.map(name => ({ name, attempt: 1 }));
try {
  await Promise.all(Array.from({ length: jobs }, async (_, index) => {
    for (let job; (job = queue.shift());) {
      if (await runChapter(job.name, displays[index], job.attempt)) continue;
      if (job.attempt === 1 && job.name !== 'illustration') { retried.push(job.name); queue.push({ name: job.name, attempt: 2 }); }
      else failures.push(job.name);
    }
  }));
  const exampleFiles = (await readdir(examples)).filter(name => !name.startsWith('_')).sort();
  manifest.examples = await Promise.all(exampleFiles.map(async name => { const bytes = await readFile(`${examples}/${name}`); return { file: `examples/${name}`, bytes: bytes.length, sha256: hash(bytes) }; }));
  manifest.captures = captures.map(({ file, revision = source.revision, ...entry }) => ({ file, revision, ...entry })).sort((a, b) => a.file.localeCompare(b.file));
  const run = { source: source.source, patches: source.patches, hashes: source.hashes, browser: sources.browser };
  manifest.sources = Object.fromEntries([...new Set(manifest.captures.map(capture => capture.revision))].sort().map(revision => [revision, revision === source.revision ? run : previousSources[revision]]));
  const shots = new Set(manifest.captures.map(capture => capture.shot));
  manifest.partial = failures.length > 0 || (!scope.includes('all') && previous.captures.some(entry => !shots.has(shotOf(entry))));
  if (!manifest.partial) {
    const kept = new Set(manifest.captures.map(capture => capture.file));
    const walk = async dir => (await Promise.all((await readdir(dir, { withFileTypes: true })).map(entry => entry.isDirectory() ? walk(join(dir, entry.name)) : [join(dir, entry.name)]))).flat();
    for (const area of areas) for (const path of await walk(`${output}/${area}`)) if (path.endsWith('.webp') && !kept.has(path.slice(output.length + 1))) await rm(path);
  }
  await writeFile(`${output}/capture.json`, JSON.stringify(manifest, null, 2) + '\n');
  const total = Math.round((Date.now() - started) / 1000);
  await writeFile(`${review}/timings.json`, JSON.stringify({ total, jobs, retried, chapters: timings }, null, 2) + '\n');
  console.log(`Captured ${selected.join(', ')} from ${source.revision} in ${total} s with ${jobs} browsers; ${captures.length} images recorded.`);
  if (failures.length) throw new Error(`Capture failed in ${failures.join(', ')}; see ${review}`);
} finally { if (host) await host.close(); }
