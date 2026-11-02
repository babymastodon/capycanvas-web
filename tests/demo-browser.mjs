import { languages } from '../site/src/data/content.mjs';

export async function checkWorkspaceDemos(b, host, check) {
  const header = await fetch(`${host.url}/assets/demos/en/sketch-light.webm`, { headers: { Range: 'bytes=0-31' } });
  check(header.status === 206 && header.headers.get('content-type') === 'video/webm' && (await header.arrayBuffer()).byteLength === 32, 'Preview server serves video byte ranges');
  const page = locale => `${host.url}${locale === 'en' ? '' : '/' + locale}/docs/`;
  const emulate = (theme, motion = 'no-preference') => b.call('Emulation.setEmulatedMedia', { features: [
    { name: 'prefers-color-scheme', value: theme },
    { name: 'prefers-reduced-motion', value: motion },
  ] });
  await b.call('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false });
  for (const [id, seconds] of [['sketch', [24, 28]], ['paint', [30, 36]], ['photo', [72, 90]]]) {
    const figure = `document.querySelector('[data-workspace-demo="${id}"]')`, video = `${figure}.querySelector('video')`;
    for (const locale of Object.keys(languages)) for (const theme of ['light', 'dark']) {
      await emulate(theme);
      await b.navigate(page(locale));
      await b.evaluate(`${figure}.scrollIntoView({block:'center'})`);
      await b.until(`${video}.currentTime > .05`).catch(async error => {
        throw new Error(`${id} demo did not play ${locale}/${theme}: ${await b.evaluate(`JSON.stringify({scroll:scrollY,top:${figure}.getBoundingClientRect().top,hidden:document.hidden,src:${video}.getAttribute('src'),ready:${video}.readyState,network:${video}.networkState,paused:${video}.paused,time:${video}.currentTime,error:${video}.error?.message,playing:${figure}.hasAttribute('data-playing')})`)}`, { cause: error });
      });
      const result = await b.evaluate(`(() => {
        const v = ${video}, box = v.getBoundingClientRect();
        return { source: v.currentSrc, playing: !v.paused, loop: v.loop, muted: v.muted,
          inline: v.playsInline, controls: v.controls, width: v.videoWidth, height: v.videoHeight,
          duration: v.duration, error: v.error, visible: getComputedStyle(v).visibility,
          ratio: box.width / box.height, label: v.getAttribute('aria-label') };
      })()`);
      check(result.source.endsWith(`/assets/demos/${locale}/${id}-${theme}.webm`), `Localized ${id} demo source ${locale}/${theme}`);
      check(result.playing && result.loop && result.muted && result.inline && !result.controls && !result.error, `Minimal automatic ${id} demo ${locale}/${theme}`);
      check(result.width === 1920 && result.height === 1080 && result.duration >= seconds[0] && result.duration < seconds[1], `1080p ${id} demo timing ${locale}/${theme}`);
      check(result.visible === 'visible' && Math.abs(result.ratio - 16/9) < .01 && result.label, `Visible labeled ${id} demo ${locale}/${theme}`);
    }
    await b.evaluate(`${video}.currentTime=${video}.duration-.35`);
    await b.until(`!${video}.seeking && ${video}.currentTime>${video}.duration-.5`);
    await b.until(`${video}.currentTime<.5&&!${video}.paused`);
    check(true, `${id} video reaches its end and restarts the loop`);
    await b.evaluate(`(() => { const box = ${figure}.getBoundingClientRect(), below = document.documentElement.scrollHeight - scrollY - innerHeight; scrollBy(0, below > box.bottom + 10 ? box.bottom + 10 : box.top - innerHeight - 10); })()`);
    await b.until(`${video}.paused`);
    check(true, `Offscreen ${id} demo stops playing`);
    await b.evaluate(`${figure}.scrollIntoView({block:'center'})`);
    await b.until(`!${video}.paused`);
    await emulate('light');
    await b.until(`${video}.currentSrc.endsWith('/it/${id}-light.webm') && !${video}.paused`);
    check(true, `${id} demo follows a live appearance change`);

    await emulate('dark', 'reduce');
    await b.navigate(page('ja'));
    await b.evaluate(`${figure}.scrollIntoView({block:'center'})`);
    await b.settle();
    check(await b.evaluate(`!${video}.getAttribute('src') && !performance.getEntriesByType('resource').some(r => r.name.endsWith('.webm'))`), `Reduced motion loads no ${id} video`);
    check(await b.evaluate(`${video}.paused && getComputedStyle(${video}).visibility === 'hidden'`), `Reduced motion keeps the static ${id} image`);
    await b.evaluate(`${figure}.querySelector('img').decode()`);
    check(await b.evaluate(`${figure}.querySelector('img').currentSrc.endsWith('/ja/${id}-dark.webp')`), `Reduced motion still follows the localized ${id} theme`);

    await emulate('light');
    await b.call('Emulation.setScriptExecutionDisabled', { value: true });
    try {
      await b.navigate(page('en'));
      await b.evaluate(`${figure}.querySelector('img').decode()`);
      check(await b.evaluate(`!${video}.getAttribute('src') && ${figure}.querySelector('img').naturalWidth > 0`), `No JavaScript keeps a working static ${id} image`);
    } finally {
      await b.call('Emulation.setScriptExecutionDisabled', { value: false });
    }
  }
}
