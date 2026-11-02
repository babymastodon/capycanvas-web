import { readFile } from 'node:fs/promises';

const outline = JSON.parse(await readFile(new URL('./photo-outline.json', import.meta.url), 'utf8')).rock;
const photo = { width: 4875, height: 3249 };
const tank = [[1263, 2272], [1316, 2196], [3518, 2184], [3612, 2272], [3615, 3209], [1262, 3209]];
const table = [[0.5, 2905], [1258, 2905], [1258, 3212], [3619, 3212], [3619, 2905], [4874.5, 2905], [4874.5, 3248.5], [0.5, 3248.5]];
const tankBottom = 3209, tankLeft = 1261, tankRight = 3616;
const cloneSource = [2985, 2921];
const cloneStroke = Array.from({ length: 36 }, (_, i) => [3305 + i * 6.2, 2922 + Math.sin(i / 6) * 2]);
export const look = {
  scale: .5, center: [2437.5, 1624.5],
  light: [115, .07, .93], dark: [126, .2, .72], lightAt: [.2, .04], darkAt: [.98, .97],
  grain: [45, 5], vignette: [24, 115],
  splitShadows: '33402e', splitHighlights: 'f5edd1', splitStrength: 30, clarity: 32,
  shadowColor: '2D3730', shadowSkew: 21, contactFeather: 40, maskFeather: 100, shadowBlur: 20, shadowOpacity: .42, crispReach: 150, upperReach: 700,
};

export async function prepare({ e, b }) {
  const doc = async ([x, y]) => {
    const c = await e.read('layerApp.state().camera'), ratio = c.viewport[0] / await e.read('innerWidth');
    return [(c.translation[0] + x * c.zoom) / ratio, (c.translation[1] + y * c.zoom) / ratio];
  };
  const polygon = async (points, mode) => {
    await e.invoke('polygon_select');
    await e.invoke(mode);
    for (const point of points) {
      const [x, y] = await doc(point);
      for (const type of ['mouseMoved', 'mousePressed', 'mouseReleased']) await b.call('Input.dispatchMouseEvent', { type, x, y, button: type === 'mouseMoved' ? 'none' : 'left', buttons: type === 'mousePressed' ? 1 : 0, clickCount: type === 'mouseMoved' ? 0 : 1 });
      await b.settle();
    }
    await e.invoke('complete_selection');
    await e.wait('!layerApp.state().commands.find(c=>c.id==="complete_selection")?.enabled');
    await e.idle();
    for (let i = 0; i < 20; i++) await b.settle();
  };
  await e.invoke('tonal_select');
  await e.invoke('selection_new');
  await e.send({ type: 'tonal', action: { kind: 'preset', index: 0 } });
  await e.send({ type: 'set_tool_setting', id: 'tonal_softness', value: .5 });
  await e.wait('layerApp.state().layer_tools.has_selection');
  await e.idle();
  for (let i = 0; i < 30; i++) await b.settle();
  await e.invoke('invert_selection');
  await e.idle();
  for (let i = 0; i < 30; i++) await b.settle();
  await polygon(tank, 'selection_add');
  await polygon(outline, 'selection_add');
  await polygon(table, 'selection_subtract');
  await e.invoke('shrink_selection');
  await e.wait('!!layerApp.state().layer_tools.selection_resize');
  await e.send({ type: 'selection', action: { op: 'resize_radius', radius: 2 } });
  await e.send({ type: 'selection', action: { op: 'apply_resize' } });
  await e.wait('!layerApp.state().layer_tools.selection_resize');
  const before = await e.read('layerApp.state().layers.map(l=>Number(l.id))');
  const saved = `layerApp.state().layers.some(l=>!${JSON.stringify(before)}.includes(Number(l.id)))`;
  for (let attempt = 0; attempt < 3 && !await e.read(saved); attempt++) {
    await e.idle();
    for (let i = 0; i < 30; i++) await b.settle();
    await e.invoke('save_selection_layer');
    await b.until(saved, 30000).catch(() => {});
  }
  await e.wait(saved);
  const id = await e.read(`Number(layerApp.state().layers.find(l=>!${JSON.stringify(before)}.includes(Number(l.id))).id)`);
  await e.layer({ op: 'rename', id, name: 'Subject' });
  await e.invoke('deselect');
  await e.select('NDF_4717');
}

export async function opening({ e }) {
  await e.select('NDF_4717');
  await e.invoke('clone');
  await e.wait(`layerApp.state().brush.tool==='clone'&&layerApp.app.brush_ready()`);
  await e.invoke('selection_editing');
  await e.send({ type: 'set_brush_size', value: 74 });
  await e.setColor('#2b3127');
  await e.invoke('move');
}

export async function journey(api) {
  const { e, b, t } = api;
  const json = value => JSON.stringify(value);
  const reveal = async (expression, depth = 0) => {
    const scroll = await e.read(`(()=>{const n=${expression};if(!n)return null;let s=n.parentElement;while(s&&!(s.scrollHeight>s.clientHeight+2&&['auto','scroll'].includes(getComputedStyle(s).overflowY)))s=s.parentElement;if(!s)return null;const a=n.getBoundingClientRect(),c=s.getBoundingClientRect(),pad=14;let dy=a.bottom>c.bottom-pad?Math.min(a.top-(c.top+pad),a.bottom-(c.bottom-pad)):a.top<c.top+pad?a.top-(c.top+pad):0;dy=Math.max(-s.scrollTop,Math.min(s.scrollHeight-s.clientHeight-s.scrollTop,dy));return Math.abs(dy)>1?{dy,at:[c.x+c.width/2,c.y+c.height/2]}:null})()`);
    if (!scroll || depth > 2) return;
    await api.wheel(scroll.at, scroll.dy);
    let last = null, same = 0;
    for (let i = 0; i < 60 && same < 4; i++) {
      const y = await e.read(`(()=>{const n=${expression};return n?Math.round(n.getBoundingClientRect().y):null})()`);
      same = y === last ? same + 1 : 0; last = y;
      await api.hold(.03);
    }
    await reveal(expression, depth + 1);
  };
  const measure = async expression => {
    const at = await e.read(`(()=>{const n=${expression};if(!n)return null;const r=n.getBoundingClientRect();return r.width>0?[r.x+r.width/2,r.y+r.height/2]:null})()`);
    if (!at) throw new Error(`Missing control: ${expression.slice(0, 160)}`);
    return at;
  };
  const point = async expression => { await reveal(expression); return measure(expression); };
  const box = async expression => {
    await reveal(expression);
    const at = await e.read(`(()=>{const n=${expression};if(!n)return null;const r=n.getBoundingClientRect();return r.width>0?{x:r.x,y:r.y,width:r.width,height:r.height}:null})()`);
    if (!at) throw new Error(`Missing control: ${expression.slice(0, 160)}`);
    return at;
  };
  const aria = (label, scope = '') => `[...document.querySelectorAll(${json(`${scope} [aria-label]`)})].find(n=>n.checkVisibility()&&n.getBoundingClientRect().width>0&&n.getAttribute('aria-label')===${json(label)})`;
  const ariaStart = (label, scope = '') => `[...document.querySelectorAll(${json(`${scope} [aria-label]`)})].find(n=>n.checkVisibility()&&n.getBoundingClientRect().width>0&&n.getAttribute('aria-label').startsWith(${json(label)}))`;
  const text = (value, scope = 'body') => `(n=>n&&(n.closest('button,[role=menuitem],summary,label,a,li')||n))([...document.querySelectorAll(${json(`${scope} *`)})].find(n=>n.checkVisibility()&&n.getBoundingClientRect().width>0&&[...n.childNodes].some(c=>c.nodeType===3&&c.nodeValue.trim()===${json(value)})))`;
  const command = id => e.read(`layerApp.state().commands.find(c=>c.id===${json(id)})`);
  const label = async id => (await command(id)).label;
  const settle = async (frames = 4) => { for (let i = 0; i < frames; i++) await b.settle(); };
  const layers = () => e.read('layerApp.state().layers.map(l=>({id:Number(l.id),label:l.label,target:l.relationship?.target!=null?Number(l.relationship.target):null,mask:l.has_mask}))');
  const layerId = async name => (await layers()).find(l => l.label === name && l.target == null)?.id;
  const rowName = id => `document.querySelector('#layer-rows .layer-row[data-layer="${id}"] .layer-name')`;
  const camera = () => e.read('layerApp.state().camera');
  const doc = async ([x, y]) => {
    const c = await camera(), ratio = c.viewport[0] / await e.read('innerWidth');
    return [(c.translation[0] + x * c.zoom) / ratio, (c.translation[1] + y * c.zoom) / ratio];
  };
  const press = async expression => api.click(await point(expression), { recheck: () => measure(expression) });
  const drawerOpen = () => e.read(`!![...document.querySelectorAll('.tool-choice-button')].find(n=>n.checkVisibility())`);
  const tool = async (id, group, variants = []) => {
    const want = await label(id), names = [...await Promise.all(group.map(label)), ...variants];
    const strip = `[...document.querySelectorAll('.tool-strip button[aria-label]')].find(n=>n.checkVisibility()&&${json(names)}.includes(n.getAttribute('aria-label')))`;
    await press(strip);
    for (let attempt = 0; attempt < 3 && !(await command(id)).selected; attempt++) {
      if (!await drawerOpen()) await press(strip);
      await api.until(`!![...document.querySelectorAll('.tool-choice-button')].find(n=>n.checkVisibility())`);
      await api.hold(.25);
      await press(`[...document.querySelectorAll('.tool-choice-button')].find(n=>n.checkVisibility()&&n.getAttribute('aria-label')===${json(want)})`);
      await api.hold(.1);
    }
    if (!(await command(id)).selected) throw new Error(`Tool not chosen: ${id}`);
    if (await drawerOpen()) { await api.key('Escape'); await api.until(`![...document.querySelectorAll('.tool-choice-button')].find(n=>n.checkVisibility())`); }
  };
  const menu = async (...path) => {
    await press(aria(path[0], '#header'));
    for (const item of path.slice(1)) {
      await api.hold(.12);
      const at = await point(text(item, 'details[open]'));
      await api.move([api.cursor()[0], at[1]], { bow: 0 });
      await press(text(item, 'details[open]'));
    }
  };
  const bar = async id => press(aria(await label(id)));
  const sliderInput = (name, scope) => `[...document.querySelectorAll(${json(`${scope} input.number-slider`)})].find(n=>n.checkVisibility()&&n.getAttribute('aria-label')===${json(name)})`;
  const position = (numeric, value) => {
    const kind = numeric.mapping?.type ?? 'linear', offset = numeric.log_offset ?? 0;
    const mapped = v => kind === 'log' ? Math.log(v + offset) : kind === 'power' ? Math.sign(v) * Math.abs(v) ** numeric.mapping.exponent : v;
    const low = numeric.soft_min ?? numeric.min, high = numeric.soft_max ?? numeric.max;
    return Math.min(1, Math.max(0, (mapped(Math.min(high, Math.max(low, value))) - mapped(low)) / (mapped(high) - mapped(low))));
  };
  const setSlider = async (name, value, numeric, scope = '#workspace') => {
    const input = sliderInput(name, scope);
    await reveal(input);
    const geometry = async () => e.read(`(()=>{const n=${input};const r=n.getBoundingClientRect(),thumb=parseFloat(getComputedStyle(n).getPropertyValue('--thumb-size'))||0;return {x:r.x,y:r.y+r.height/2,width:r.width,thumb,fill:Number(n.value),steps:[...n.closest('.number-control').querySelectorAll('.number-step')].filter(b=>b.checkVisibility()&&b.getBoundingClientRect().width>0).map(b=>{const q=b.getBoundingClientRect();return [q.x+q.width/2,q.y+q.height/2]})}})()`);
    let g = await geometry();
    for (let i = 0; i < 40; i++) {
      await api.hold(.05);
      const next = await geometry();
      const still = Math.abs(next.x - g.x) < .5 && Math.abs(next.y - g.y) < .5;
      g = next;
      if (still) break;
    }
    const at = fill => [Math.min(g.x + g.width - 3, Math.max(g.x + 3, g.x + g.thumb / 2 + fill * (g.width - g.thumb))), g.y];
    const target = position(numeric, value), current = g.fill;
    const stepFill = numeric.step / ((numeric.soft_max ?? numeric.max) - (numeric.soft_min ?? numeric.min));
    const clicks = Math.round(Math.abs(target - current) / Math.max(1e-9, stepFill));
    if ((numeric.mapping?.type ?? 'linear') === 'linear' && clicks > 0 && clicks <= 4 && g.steps.length === 2) {
      for (let i = 0; i < clicks; i++) await api.click(g.steps[target < current ? 0 : 1], { seconds: i ? .12 : undefined });
      return;
    }
    if (Math.abs(target - current) < .004) return;
    await api.drag(at(current), at(target));
    await api.hold(.1);
    const after = await geometry();
    if (Math.abs(after.fill - target) > .02) {
      const again = fill => [Math.min(after.x + after.width - 3, Math.max(after.x + 3, after.x + after.thumb / 2 + fill * (after.width - after.thumb))), after.y];
      await api.drag(again(after.fill), again(target));
    }
  };
  const controlSlider = async (key, value, name) => {
    const numeric = await e.read(`layerApp.state().layer_properties.controls.find(c=>c.key===${json(key)}).kind.numeric`);
    await setSlider(name, value, numeric, '#workspace .properties-panel');
  };


  const color = async (well, hex) => {
    await press(well);
    await api.until(`!!${ariaStart(t('native-color-hex'))}`);
    await press(ariaStart(t('native-color-hex')));
    await settle(2);
    await api.key('a', 2);
    await api.type(hex);
    await api.key('Enter');
    await api.hold(.15);
    await press(text(t('native-color-use-color')));
    await api.until(`!${ariaStart(t('native-color-hex'))}`);
  };
  const selectRow = async id => { const masked = (await layers()).find(l => l.id === id)?.mask; await press(masked ? rowName(id).replace('.layer-name', `button.layer-thumbnail[aria-label=${json(t('native-layers-edit-content'))}]`) : rowName(id)); await api.until(`Number(layerApp.state().layer_tools.editing_layer.id)===${id}&&!layerApp.state().layer_tools.editing_layer.mask_selected`); };
  const addFilter = async (category, name) => {
    const before = (await layers()).map(l => l.id);
    await press(aria(t('resources-layer-add-filter'), '#workspace'));
    await press(text(t(category), ':popover-open'));
    await api.hold(.1);
    await press(text(t(name), ':popover-open'));
    await api.until(`layerApp.state().layers.some(l=>!${json(before)}.includes(Number(l.id)))`);
    return (await layers()).map(l => l.id).find(id => !before.includes(id));
  };
  const insertFilter = async (category, name) => {
    const before = (await layers()).map(l => l.id);
    await menu(t('menu-filter'), t(category), t(name));
    await api.until(`layerApp.state().layers.some(l=>!${json(before)}.includes(Number(l.id)))`);
    return (await layers()).map(l => l.id).find(id => !before.includes(id));
  };
  const blend = async mode => {
    await press(`[...document.querySelectorAll('#workspace .properties-panel button.dropdown')].find(n=>n.checkVisibility()&&n.getAttribute('aria-label')===${json(t('resources-blend-mode'))})`);
    await press(`[...document.querySelectorAll('.panel-context-menu [role=menuitemcheckbox]')].find(n=>n.checkVisibility()&&n.textContent.trim()===${json(mode)})`);
  };
  const opacity = async value => setSlider(t('resources-opacity'), value, { mapping: { type: 'linear' }, min: 0, max: 1, step: .01 }, '#workspace .properties-panel');
  const placement = async () => {
    const s = await e.read('Object.fromEntries(layerApp.state().tool_settings.map(s=>[s.id,s.value]))');
    return s;
  };
  const variant = async (group, names, item) => {
    const strip = `[...document.querySelectorAll('.tool-strip button[aria-label]')].find(n=>n.checkVisibility()&&${json([...await Promise.all(group.map(label)), ...names])}.includes(n.getAttribute('aria-label')))`;
    for (let attempt = 0; attempt < 3 && !await drawerOpen(); attempt++) { await press(strip); await api.hold(.15); }
    await api.until(`!![...document.querySelectorAll('.tool-choice-button')].find(n=>n.checkVisibility())`);
    await api.hold(.2);
    await press(`[...document.querySelectorAll('.tool-choice-button')].find(n=>n.checkVisibility()&&n.getAttribute('aria-label')===${json(item)})`);
    if (await drawerOpen()) { await api.key('Escape'); await api.until(`![...document.querySelectorAll('.tool-choice-button')].find(n=>n.checkVisibility())`); }
  };
  const wheel = `[...document.querySelectorAll('.color-wheel')].find(n=>n.checkVisibility()&&n.getBoundingClientRect().width>0)`;
  const openColors = async () => {
    await press(aria(t('workspace-control-brush-color'), '.tool-strip'));
    await api.until(`(n=>!!n&&n.getBoundingClientRect().x>=0)(${wheel})`);
    await api.hold(.2);
  };
  const closeColors = async () => {
    await api.key('Escape');
    await api.until(`!${wheel}`, 3000);
  };
  const pickColor = async (hue, saturation, value) => {
    const w = await box(wheel), at = p => [w.x + p[0] * w.width, w.y + p[1] * w.height];
    let panel = await e.read('layerApp.app.color_panel()');
    const ring = (panel.geometry.inner + panel.geometry.outer) / 2, angle = (hue + panel.wheel_hue_start_degrees) * Math.PI / 180;
    await api.click(at([.5 + ring * Math.cos(angle), .5 + ring * Math.sin(angle)]));
    panel = await e.read('layerApp.app.color_panel()');
    const a = 2 * saturation - 1, d = 1 - 2 * value, r = panel.geometry.disc_radius;
    await api.click(at([.5 + r * a * Math.sqrt(1 - d * d * .5), .5 + r * d * Math.sqrt(1 - a * a * .5)]));
  };
  const applying = json(t('transform-applying').replace(/…$/, ''));
  const rowOf = id => `document.querySelector('#layer-rows .layer-row[data-layer="${id}"]')`;
  const subject = await layerId('Subject'), image = await layerId('NDF_4717'), paper = (await layers()).at(-1).id;

  await api.stage('original-hero');
  await api.hold(.4);

  await press(aria(await label('clone'), '.tool-strip'));
  await api.until(`layerApp.state().brush.tool==='clone'&&layerApp.app.brush_ready()`);
  const armed = `layerApp.state().commands.find(c=>c.id==='clone_source_arm').selected`;
  await api.holding('Alt', async () => {
    await api.until(armed, 3000);
    await api.tap(await doc(cloneSource), 'pen');
  });
  await api.until(`!${armed}`);
  const before = await e.read('layerApp.state().layers.find(l=>l.label==="NDF_4717").paint_revision');
  await api.trace(await Promise.all(cloneStroke.map(doc)), .7);
  await api.until(`layerApp.state().layers.find(l=>l.label==="NDF_4717").paint_revision!==${before}`);
  await api.stage('logo-healed');
  await api.hold(.15);

  await press(`${rowOf(subject)}?.querySelector('.selection-layer-load')`);
  await api.until('layerApp.state().layer_tools.has_selection');
  await api.stage('subject-selected');
  await api.hold(.25);
  await menu(t('menu-layer'), t('toolbar-mask'), t('resources-layer-menu-mask-reveal-selection'));
  await api.until('layerApp.state().layers.find(l=>l.label==="NDF_4717").has_mask');
  await api.stage('cut-out');
  await api.hold(.3);

  await selectRow(paper);
  const beforeBackdrop = (await layers()).map(l => l.id);
  await press(aria(t('command-add-layer'), '#workspace'));
  await api.until(`layerApp.state().layers.some(l=>!${json(beforeBackdrop)}.includes(Number(l.id)))`);
  const gradient = (await layers()).find(l => !beforeBackdrop.includes(l.id)).id;
  await openColors();
  await pickColor(...look.dark);
  await press(aria(t('commands-swap-foreground-and-background')));
  await pickColor(...look.light);
  await closeColors();
  await variant(['gradient', 'fill', 'lasso_fill', 'enclose_fill'], [t('resources-choice-gradient-fill-style-linear'), t('resources-choice-gradient-fill-style-radial'), t('resources-choice-gradient-fill-style-reflected')], t('resources-choice-gradient-fill-style-radial'));
  const size = await e.read('[layerApp.state().tabs[0].width, layerApp.state().tabs[0].height]');
  const painted = await e.read(`layerApp.state().layers.find(l=>Number(l.id)===${gradient}).paint_revision`);
  await api.drag(await doc([size[0] * look.lightAt[0], size[1] * look.lightAt[1]]), await doc([size[0] * look.darkAt[0], size[1] * look.darkAt[1]]), { seconds: .9 });
  await api.until(`layerApp.state().layers.find(l=>Number(l.id)===${gradient}).paint_revision!==${painted}`);
  await api.stage('sage-backdrop');
  await api.hold(.3);

  await selectRow(image);
  await press(aria(await label('scale_rotate'), '.tool-strip'));
  await api.until('layerApp.state().layer_tools.tool==="transform"');
  if (!(await command('transform_uniform')).selected) await bar('transform_uniform');
  const start = await placement();
  const corner = await doc([start.transform_x + photo.width / 2, start.transform_y + photo.height / 2]);
  const target = await doc([start.transform_x - photo.width / 2 + photo.width * look.scale, start.transform_y - photo.height / 2 + photo.height * look.scale]);
  await api.drag(corner, target);
  await api.until(`Math.abs(layerApp.state().tool_settings.find(s=>s.id==='transform_width').value-${look.scale})<.02`);
  await api.hold(.2);
  let placed = await placement();
  for (let attempt = 0; attempt < 3 && Math.hypot(placed.transform_x - look.center[0], placed.transform_y - look.center[1]) > 30; attempt++) {
    const grab = [placed.transform_x - photo.width * look.scale * .18, placed.transform_y + photo.height * look.scale * .22];
    await api.drag(await doc(grab), await doc([grab[0] + look.center[0] - placed.transform_x, grab[1] + look.center[1] - placed.transform_y]));
    await api.hold(.2);
    placed = await placement();
  }
  if (Math.hypot(placed.transform_x - look.center[0], placed.transform_y - look.center[1]) > 30) throw new Error(`Subject placed at ${placed.transform_x}, ${placed.transform_y}`);
  await bar('apply_transform');
  await api.until('!layerApp.state().commands.find(c=>c.id==="apply_transform")?.enabled', 180000);
  await api.until(`![...document.querySelectorAll('.canvas-action-bar')].some(n=>n.checkVisibility()&&n.textContent.includes(${applying}))`, 180000);
  await api.stage('subject-placed');
  await api.hold(.25);

  await insertFilter('resources-category-texture', 'resources-filter-film-grain');
  if (await e.read(`layerApp.state().layer_properties.controls.find(c=>c.key==='animate').value.value`)) throw new Error('Film Grain must insert without animation');
  await controlSlider('amount', look.grain[0], t('resources-parameter-film-grain-amount'));
  await controlSlider('size', look.grain[1], t('resources-parameter-film-grain-size'));
  await insertFilter('resources-category-tone', 'resources-filter-vignette');
  await controlSlider('strength', look.vignette[0], t('resources-parameter-vignette-strength'));
  await controlSlider('radius', look.vignette[1], t('resources-parameter-vignette-radius'));
  await api.stage('poster-look');
  await api.hold(.4);

  await selectRow(image);
  await addFilter('resources-category-color', 'resources-filter-split-tone');
  await color(aria(t('resources-parameter-split-tone-shadows'), '#workspace .properties-panel'), look.splitShadows);
  await color(aria(t('resources-parameter-split-tone-highlights'), '#workspace .properties-panel'), look.splitHighlights);
  await controlSlider('strength', look.splitStrength, t('resources-parameter-split-tone-strength'));
  await selectRow(image);
  await addFilter('resources-category-detail', 'resources-filter-clarity');
  await controlSlider('amount', look.clarity, t('resources-local-amount'));
  await api.stage('color-matched');
  if (api.through === 'color-matched') {
    await api.until(`layerApp.state().layer_properties.description!==${json(t('resources-analysis-updating'))}`, 180000);
    await api.hold(3);
    await api.stage('final');
    return;
  }
  await api.hold(.3);

  await selectRow(image);
  await menu(t('menu-select'), t('resources-coverage-from-layer-mask'), t('resources-selection-menu-load-mask-as-selection'));
  await api.until('layerApp.state().layer_tools.has_selection');
  await selectRow(gradient);
  const beforeShadow = (await layers()).map(l => l.id);
  await press(aria(t('command-add-layer'), '#workspace'));
  await api.until(`layerApp.state().layers.some(l=>!${json(beforeShadow)}.includes(Number(l.id)))`);
  const shadow = (await layers()).find(l => !beforeShadow.includes(l.id)).id;
  await blend(t('resources-blend-multiply'));
  await opacity(look.shadowOpacity);
  await openColors();
  await press(`[...document.querySelectorAll('[aria-label]')].find(n=>n.checkVisibility()&&n.getBoundingClientRect().width>0&&n.getAttribute('aria-label').toUpperCase().includes(' · #${look.shadowColor} · '))`);
  await closeColors();
  await menu(t('menu-layer'), t('resources-layer-menu-pixel-selection'), t('resources-layer-menu-fill-selection'));
  await api.until(`layerApp.state().layers.find(l=>Number(l.id)===${shadow}).paint_revision>0`);
  await api.key('d', 2);
  await api.until('!layerApp.state().layer_tools.has_selection');
  await press(aria(await label('scale_rotate'), '.tool-strip'));
  await api.until('layerApp.state().layer_tools.tool==="transform"');
  const centered = await placement();
  const base = look.center[1] + (tankBottom - photo.height / 2) * look.scale;
  const skewVisible = `!![...document.querySelectorAll('input.number-slider')].find(n=>{const r=n.getBoundingClientRect();return n.checkVisibility()&&n.getAttribute('aria-label')===${json(t('tool-control-transform-skew'))}&&r.right<=innerWidth&&r.left>=0})`;
  await press(aria(t('workspace-toolbar-more-options')));
  await api.until(skewVisible);
  await api.hold(.3);
  const skew = await e.read('layerApp.state().tool_settings.find(s=>s.id==="transform_skew").numeric');
  await setSlider(t('tool-control-transform-skew'), -look.shadowSkew * Math.PI / 180, skew, 'body');
  await press(aria(t('workspace-toolbar-more-options')));
  await api.until(`!${skewVisible}`, 3000).catch(() => {});
  if (!await e.read('layerApp.state().layer_tools.tool==="transform"')) throw new Error('Closing the transform options ended the transform');
  const skewed = await placement();
  if (Math.abs(skewed.transform_skew + look.shadowSkew * Math.PI / 180) > .05) throw new Error(`Shadow skew is ${skewed.transform_skew}`);
  const shift = Math.tan(-skewed.transform_skew) * (base - centered.transform_y);
  const grip = [centered.transform_x, base - 120];
  await api.drag(await doc(grip), await doc([grip[0] + shift, grip[1]]));
  await bar('apply_transform');
  await api.until('!layerApp.state().commands.find(c=>c.id==="apply_transform")?.enabled', 180000);
  await api.until(`![...document.querySelectorAll('.canvas-action-bar')].some(n=>n.checkVisibility()&&n.textContent.includes(${applying}))`, 180000);
  await tool('ellipse_select', ['rectangle_select', 'ellipse_select']);
  if (!(await command('selection_new')).selected) await press(aria(await label('selection_new')));
  const feather = await e.read('layerApp.state().tool_settings.find(s=>s.id==="selection_feather").numeric');
  await setSlider(t('tool-control-selection-tools-feather-radius'), look.contactFeather, feather, '#workspace');
  const [left, right] = [tankLeft, tankRight].map(x => look.center[0] + (x - photo.width / 2) * look.scale);
  await api.drag(await doc([left - 40, base - 30]), await doc([right + 170, base + 60]));
  await api.until('layerApp.state().layer_tools.has_selection');
  const traced = await e.read(`layerApp.state().layers.find(l=>Number(l.id)===${shadow}).paint_revision`);
  await bar('fill_selection');
  await api.until(`layerApp.state().layers.find(l=>Number(l.id)===${shadow}).paint_revision!==${traced}`);
  await bar('deselect');
  const blurAbove = async reach => {
    await tool('rectangle_select', ['rectangle_select', 'ellipse_select']);
    if (Math.abs(await e.read('layerApp.state().tool_settings.find(s=>s.id==="selection_feather").value') - look.maskFeather) > 1) await setSlider(t('tool-control-selection-tools-feather-radius'), look.maskFeather, feather, '#workspace');
    await api.drag(await doc([-40, -40]), await doc([size[0] + 40, base - reach]));
    await api.until('layerApp.state().layer_tools.has_selection');
    const before = (await layers()).map(l => l.id);
    await press(`[...document.querySelectorAll('[data-canvas-bar-menu="adjust"]')].find(n=>n.checkVisibility())`);
    await press(text(t('resources-category-blur'), '.panel-context-menu'));
    await api.hold(.1);
    await press(text(t('resources-filter-gaussian-blur'), '.panel-context-menu'));
    await api.until(`layerApp.state().layers.some(l=>!${json(before)}.includes(Number(l.id))&&l.has_mask)`);
    if (Math.abs(await e.read(`layerApp.state().layer_properties.controls.find(c=>c.key==='sigma').value.value`) - look.shadowBlur) > .5) await controlSlider('sigma', look.shadowBlur, t('resources-parameter-gaussian-blur-sigma'));
    if (await e.read('layerApp.state().layer_tools.has_selection')) {
      await api.key('d', 2);
      await api.until('!layerApp.state().layer_tools.has_selection');
    }
  };
  await blurAbove(look.crispReach);
  await blurAbove(look.upperReach);
  await selectRow(shadow);
  await api.key('o');
  await api.until(`layerApp.state().commands.find(c=>c.id==='move').selected`);
  await api.stage('shadow');
  await api.hold(3);
  await api.stage('final');
}
