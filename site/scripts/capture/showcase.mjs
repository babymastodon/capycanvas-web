import { readFile } from 'node:fs/promises';
import { artwork, scenes } from './showcase-scenes.mjs';
import { settleLayout } from './shoot.mjs';

const command = id => `layerApp.state().commands.find(c=>c.id===${JSON.stringify(id)})`;
const analysed = `layerApp.state().histogram.status==='Exact'&&!String(layerApp.state().layer_properties?.description??'').includes('Updating')`;
const thumbnailsDrawn = `[...document.querySelectorAll('#layer-rows .layer-thumbnail canvas')].filter(c=>c.checkVisibility()).every(c=>{const d=c.getContext('2d').getImageData(0,0,c.width,c.height).data;for(let i=3;i<d.length;i+=4)if(d[i])return true;return false})`;
const highlights = `[...document.querySelectorAll('button[aria-label]')].some(b=>(b.getAttribute('aria-label')||'').startsWith('Highlights'))`;

export default async function showcase({ e, capture }) {
  const restoreLayout = async () => {
    if (await e.read(`${command('reset_layout')}?.enabled`)) {
      await e.invoke('reset_layout');
      await e.wait("!!document.querySelector('.workspace-form[open] .suggested-action')");
      await e.click('.workspace-form[open] .suggested-action');
      await e.wait("!document.querySelector('.workspace-form[open]') && !JSON.parse(layerApp.app.workspace_view()).busy");
    }
    if (await e.read('layerApp.state().workspace.zen_mode')) await e.invoke('zen_mode');
    await e.wait('!layerApp.state().workspace.zen_mode');
  };
  const effect = async (name, parameters) => {
    const count = await e.read('layerApp.state().layers.length');
    await e.send({ type: 'effect', action: { op: 'insert', effect: name } });
    await e.wait(`layerApp.state().layers.length===${count + 1} && layerApp.state().layer_tools.editing_layer.adjustment_effect`);
    const id = await e.read('Number(layerApp.state().layer_properties.layer)');
    for (const [key, value] of Object.entries(parameters)) await e.send({ type: 'effect', action: { op: 'set', layer: id, key, value } });
  };
  const steps = {
    action: ({ action }) => action.type === 'invoke' ? e.invoke(action.command) : e.send(action),
    frame: ({ zoom, focus }) => e.frame(zoom, focus),
    select_layer: ({ name }) => e.select(name),
    layer_visibility: ({ name, visible }) => e.visible(name, visible),
    show_panel: ({ panel }) => e.show(panel),
    effect: ({ effect: name, parameters }) => effect(name, parameters),
    wait_histogram: () => e.wait(analysed),
  };
  const shots = {
    sketch: {},
    paint: { setup: () => e.b.until(thumbnailsDrawn, 120000), variant: async () => { await e.workspace('painter'); await e.workspace('illustrator'); await settleLayout(e.b); await e.invoke('fit_canvas'); await e.canvas(); await settleLayout(e.b, undefined, 12); } },
    photo: { ready: () => e.wait(highlights), setup: async () => { await e.wait(analysed); await e.b.until(thumbnailsDrawn, 120000); } },
  };

  const only = process.env.CAPTURE_SCENES?.split(',');
  for (const scene of scenes.filter(scene => !only || only.includes(scene.id))) {
    await e.workspace(scene.workspace);
    await restoreLayout();
    await e.provide(scene.source, await readFile(new URL(scene.source, artwork)));
    await e.open(scene.source);
    for (const step of scene.steps) await steps[step.type](step);
    const { ready, setup, variant } = shots[scene.id];
    await ready?.();
    await capture(`showcase/${scene.id}`, { full: true, verify: true, setup, variant });
  }
  await e.workspace('illustrator');
}
