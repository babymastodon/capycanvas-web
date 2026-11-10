import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import { browser } from '../site/scripts/browser.mjs';
import { serve } from '../site/scripts/serve.mjs';
import { checkPwaInstructions } from './pwa-browser.mjs';
import { checkDocumentation } from './docs-browser.mjs';
import { languages } from '../site/src/data/content.mjs';
import { appName } from '../site/src/data/branding.mjs';
import { buildReleaseSite } from './release-sites.mjs';

const locales = Object.keys(languages);
const segments = { documentation: 'docs', versions: 'download/past-versions', ipadBeta: 'download/ipad-beta', androidBeta: 'download/android-beta' };

await mkdir('artifacts/review',{recursive:true});
const host=await serve();
const b=await browser();
const navigating=/Inspected target navigated or closed|Execution context was destroyed|Cannot find context with specified id/;
const {until}=b;
b.until=async(expression,timeout)=>{for(let attempt=1;;attempt++){try{return await until(expression,timeout);}catch(error){if(attempt===5||!navigating.test(error.message))throw error;}}};
b.navigate=async url=>{await b.call('Page.navigate',{url});await b.until("document.readyState === 'complete' && location.href !== 'about:blank'");};
let checks=0;
const report=[];
const check=(value,message)=>{assert.ok(value,message);checks++;};
try {
  await b.call('Page.addScriptToEvaluateOnNewDocument',{source:"Object.defineProperty(navigator,'languages',{get:()=>['en-US','en'],configurable:true})"});
  const layouts=async (site,pages,name='')=>{for(const [width,height] of [[1440,900],[1280,720],[1024,600],[768,1024],[390,844],[320,568],[844,390]]) for(const theme of ['light','dark']) for(const locale of locales) for(const page of pages) {
    await b.call('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:false});
    await b.theme(theme);
    const path=`${locale==='en'?'':'/'+locale}/${page==='home'?'':(segments[page]??page)+'/'}`;
    await b.navigate(site.url+path);
    await b.evaluate('document.querySelectorAll("img[loading=lazy]").forEach(image=>{image.loading="eager"}); Promise.all([...document.images].map(i=>i.decode())).then(()=>null)');
    await b.settle();
    const metrics=await b.evaluate(`(() => {
      const visible=e=>e.getClientRects().length>0;
      const bounds=[...document.querySelectorAll('h1,h2,h3,p,a,summary')].filter(visible).filter(e=>e.getBoundingClientRect().right>innerWidth+1||e.getBoundingClientRect().left< -1).map(e=>e.textContent);
      const shot=document.querySelector('.showcase-frame[data-slide="paint"] img')?.getBoundingClientRect();
      const shown=[...document.querySelectorAll('.showcase-frame')].filter(frame=>getComputedStyle(frame).opacity!=='0').map(frame=>frame.dataset.slide);
      const borders=[...document.querySelectorAll('header,nav,main,picture,section,a,li')].filter(visible).filter(e=>['Top','Right','Bottom','Left'].some(side=>parseFloat(getComputedStyle(e)['border'+side+'Width'])>0)).map(e=>e.className);
      return { title: document.title, brand: document.querySelector('.brand span')?.textContent, brandLabel: document.querySelector('.brand')?.getAttribute('aria-label'), siteName: document.querySelector('[property="og:site_name"]')?.content, unresolved: document.body.textContent.includes('{appName}'), height:innerHeight, scrollHeight:document.documentElement.scrollHeight, shotRatio:shot?shot.width/shot.height:null, borders, width:innerWidth, scroll:document.documentElement.scrollWidth, lang:document.documentElement.dataset.locale, bg:getComputedStyle(document.body).backgroundColor, source:document.querySelector('.showcase-frame[data-slide="paint"] img')?.currentSrc, original:document.querySelector('.showcase-frame[data-slide="paint"] img')?.getAttribute('src'), shown, bounds,
        labels:[...document.querySelectorAll('a,summary')].filter(visible).every(e=>(e.getAttribute('aria-label')||e.textContent||e.querySelector('img[alt]')?.alt||'').trim()),
        headings:document.querySelectorAll('h1').length,
        broken:[...document.images].some(i=>!i.complete||!i.naturalWidth)
      };
    })()`);
    const label=`${name}${width}x${height}/${theme}/${locale}/${page}`;
    check(metrics.scroll<=width,`Horizontal overflow ${label}: ${JSON.stringify(metrics)}`);
    check(metrics.bounds.length===0,`Clipped text ${label}: ${metrics.bounds}`);
    check(metrics.lang===locale,`Wrong language ${label}`);
    check(metrics.title.includes(appName(locale)) && metrics.siteName === appName(locale) && !metrics.unresolved, `Localized app identity ${label}`);
    if (page !== 'home') check(metrics.brand === appName(locale) && metrics.brandLabel.startsWith(appName(locale)), `Localized header identity ${label}`);
    check(metrics.bg===(theme==='light'?'rgb(237, 237, 237)':'rgb(51, 51, 51)'),`Wrong theme ${label}`);
    check(metrics.labels&&metrics.headings===1&&!metrics.broken,`Accessibility/asset basics ${label}`);
    check(metrics.borders.length===0,`Unexpected borders ${label}: ${metrics.borders}`);
    if(page==='home') {
      check(new RegExp(`/assets/showcase/(${locale}|shared)/paint-light\\.webp$`).test(metrics.original)&&new RegExp(`/_astro/paint-${theme}\\.`).test(metrics.source),`Wrong screenshot ${label}`);
      check(metrics.shown.join()==='paint',`Paint slide is shown first ${label}: ${metrics.shown}`);
      check(metrics.scrollHeight<=height+1,`Minimal home should fit viewport ${label}: ${metrics.scrollHeight}`);
      check(await b.evaluate("document.querySelector('main').classList.contains('hero')&&document.querySelector('h1').classList.contains('visually-hidden')&&document.querySelector('h1').getBoundingClientRect().width===1&&document.querySelectorAll('main p').length===1&&document.querySelectorAll('main .button').length===3&&!document.querySelector('.home-details')&&!document.querySelector('[data-language-suggestion]')"),'Original minimal landing page design');
      check(await b.evaluate(`[...document.querySelectorAll('main .button')].every(button=>{const s=getComputedStyle(button);return parseFloat(s.paddingLeft)===${width<=540?13:17}&&s.paddingLeft===s.paddingRight})`),'Original landing button padding');
      check(Math.abs(metrics.shotRatio-16/9)<.01,`Screenshot aspect ratio ${label}`);
    }
    if(page==='download') check(await b.evaluate("[...document.querySelectorAll('.pick .button,.platform .button')].filter(button=>button.getClientRects().length).every(button=>{const s=getComputedStyle(button),icon=button.querySelector('svg'),start=parseFloat(s.paddingInlineStart),end=parseFloat(s.paddingInlineEnd);return icon?end-start===8&&parseFloat(s.gap)===8:start===end})"),'Download icons use a smaller leading inset without changing label gaps or text-only buttons');
    if(page==='documentation') {
      check(await b.evaluate(`!document.querySelector('.docs-overview-image') && [...document.querySelectorAll('.docs-stories img')].length === 3 && [...document.querySelectorAll('.docs-stories img')].every(image => { const box=image.getBoundingClientRect(); return image.currentSrc.endsWith('-${theme}.webp') && Math.abs(box.width/box.height-16/9)<.01; })`), `Workspace stories and image proportions ${label}`);
    }
    if((width===1440&&locale==='en')||(width===390&&(locale==='en'||theme==='dark'))) await b.screenshot(`artifacts/review/${name.replace('/','-')}${width}-${theme}-${locale}-${page}.png`,true);
    report.push(label);
  }};
  await layouts(host,['home','download','versions','ipadBeta','androidBeta','documentation','privacy']);
  const releaseHost=await serve(0,await buildReleaseSite('releases'));
  try {
    await layouts(releaseHost,['download','versions'],'releases/');
    await b.call('Emulation.setDeviceMetricsOverride',{width:1280,height:800,deviceScaleFactor:1,mobile:false});
    await b.navigate(releaseHost.url+'/download/?lang=en');
    check(await b.evaluate("(()=>{const shown=[...document.querySelectorAll('[data-pick], [data-pick] [data-platform]')].filter(e=>!e.hidden);return shown.length===2&&shown[1].dataset.platform==='linux'&&shown[1].querySelector('a').href==='https://flatpak.capycanvas.art/capycanvas.flatpakref'&&document.querySelectorAll('.platform').length===5&&[...document.querySelectorAll('.platform')].every(e=>e.getClientRects().length)})()"),'The detected platform gets the big download button and every platform stays listed');
    check(await b.evaluate("(()=>{const field=document.querySelector('[data-platform=\"linux\"] .command code');return field?.textContent==='flatpak install --from https://flatpak.capycanvas.art/capycanvas.flatpakref'&&field.tabIndex<0&&field.scrollWidth<=field.clientWidth&&getComputedStyle(field.parentElement,'::before').content.startsWith('\"$\"')&&field.closest('[data-platform]').querySelector('a').nextElementSibling===field.parentElement})()"),'Linux shows the whole install command below the big button');
    const {identifier}=await b.call('Page.addScriptToEvaluateOnNewDocument',{source:"Object.defineProperty(navigator,'platform',{get:()=>'MacIntel',configurable:true});Object.defineProperty(navigator,'maxTouchPoints',{get:()=>5,configurable:true})"});
    await b.navigate(releaseHost.url+'/download/?lang=en');
    check(await b.evaluate("document.querySelector('[data-pick] [data-platform]:not([hidden]) a')?.getAttribute('href')==='/download/ipad-beta/'"),'An iPad is sent to the TestFlight beta');
    await b.call('Page.removeScriptToEvaluateOnNewDocument',{identifier});
    for(const [architecture,file,label] of [['arm','-windows-arm64-setup.exe','An Arm PC gets the Arm64 installer'],['','-windows-x64-setup.exe','Without architecture hints, Windows gets the x64 installer']]) {
      const hints=architecture?`{get:()=>({getHighEntropyValues:async()=>({architecture:'${architecture}'})}),configurable:true}`:'{get:()=>undefined,configurable:true}';
      const {identifier}=await b.call('Page.addScriptToEvaluateOnNewDocument',{source:`Object.defineProperty(navigator,'platform',{get:()=>'Win32',configurable:true});Object.defineProperty(navigator,'userAgentData',${hints})`});
      await b.navigate(releaseHost.url+'/download/?lang=en');
      await b.until("!document.querySelector('[data-pick]').hidden");
      check(await b.evaluate(`[...document.querySelectorAll('[data-pick] [data-platform]')].filter(e=>!e.hidden).map(e=>e.querySelector('a').href).join()===document.querySelector('a[aria-describedby="platform-windows"][href$="${file}"]')?.href`),label);
      await b.call('Page.removeScriptToEvaluateOnNewDocument',{identifier});
    }
  } finally { await releaseHost.close(); }
  await b.navigate(host.url+'/download/?lang=en');
  check(await b.evaluate("(()=>{const shown=document.querySelector('[data-pick] [data-platform]:not([hidden])');const released=!!document.querySelector('a[aria-describedby=\"platform-linux\"]');return !document.querySelector('[data-pick]').hidden&&shown.dataset.platform===(released?'linux':'other')})()"),'Without a Linux release, the big button opens the web app');
  await checkPwaInstructions(b,host,check);
  const guideLayouts = await checkDocumentation(b,host,check);
  // Live OS appearance changes swap both the site palette and the actual screenshot.
  await b.navigate(host.url+'/?lang=en'); await b.theme('light'); await b.settle();
  await b.theme('dark'); await b.until("document.querySelector('.showcase-frame[data-slide=\"paint\"] img').currentSrc.includes('/paint-dark.')"); checks++;
  await b.until("document.querySelector('[data-showcase]').hasAttribute('data-playing')"); checks++;
  const clip = slide => `document.querySelector('.showcase-frame[data-slide="${slide}"] video')`;
  const finish = slide => b.evaluate(`${clip(slide)}.currentTime=Number(${clip(slide)}.dataset.end)-.4`);
  await b.until(`${clip('paint')}.currentSrc.endsWith('/assets/demos/en/paint-dark.webm')&&${clip('paint')}.currentTime>.05&&document.querySelector('.showcase-frame[data-slide="paint"]').hasAttribute('data-playing')`, 20000); checks++;
  await finish('paint');
  await b.until("document.querySelector('.showcase input[value=\"photo\"]').checked", 10000); checks++;
  check(await b.evaluate(`${clip('paint')}.paused`),'The Paint clip stops when the slideshow moves on');
  await b.until(`${clip('photo')}.currentSrc.endsWith('/assets/demos/en/photo-dark.webm')&&${clip('photo')}.currentTime>.05`, 20000); checks++;
  await b.evaluate("[...document.querySelectorAll('.showcase-switcher label')].find(label=>label.textContent.trim()==='Sketch').click()");
  check(await b.evaluate("document.querySelector('.showcase input[value=\"sketch\"]').checked&&document.querySelector('[data-showcase]').hasAttribute('data-playing')"),'Choosing a workspace shows it and the slideshow continues');
  await b.until("getComputedStyle(document.querySelector('.showcase-frame[data-slide=\"sketch\"]')).opacity==='1'"); checks++;
  await b.until(`${clip('sketch')}.currentSrc.endsWith('/assets/demos/en/sketch-dark.webm')&&${clip('sketch')}.currentTime>.05`, 20000); checks++;
  await finish('sketch');
  await b.until("document.querySelector('.showcase input[value=\"paint\"]').checked", 10000); checks++;
  await b.until(`!${clip('paint')}.paused&&${clip('paint')}.currentTime<2`, 10000); checks++;
  check(await b.evaluate("(()=>{const shot=document.querySelector('.showcase').getBoundingClientRect(),dots=document.querySelector('.showcase-switcher').getBoundingClientRect();return dots.top>=shot.top&&dots.bottom<=shot.bottom&&dots.width<shot.width*.6})()"),'The slide indicator sits inside the screenshot');
  await b.call('Emulation.setEmulatedMedia',{features:[{name:'prefers-color-scheme',value:'light'},{name:'prefers-reduced-motion',value:'reduce'}]});
  await b.navigate(host.url+'/?lang=en'); await b.settle();
  await b.until("document.querySelector('[data-showcase]').hasAttribute('data-playing')", 10000);
  check(await b.evaluate("[...document.querySelectorAll('.showcase video')].every(video=>!video.getAttribute('src'))&&!performance.getEntriesByType('resource').some(r=>r.name.endsWith('.webm'))"),'Reduced motion keeps the homepage stills and loads no video');
  await b.call('Emulation.setEmulatedMedia',{features:[{name:'prefers-color-scheme',value:'dark'},{name:'prefers-reduced-motion',value:'no-preference'}]});
  // Preference detection and regional language tags, including unsupported-first lists.
  for(const [langs,expected] of [
    [['ja-JP'],'ja'], [['zh-TW'],'zh-Hant'], [['zh-HK'],'zh-Hant'], [['zh-MO'],'zh-Hant'],
    [['zh-Hant'],'zh-Hant'], [['zh-Hant-TW'],'zh-Hant'], [['zh-Hant-CN'],'zh-Hant'], [['zh_hant_hk'],'zh-Hant'],
    [['zh-Hans'],'zh'], [['zh-Hans-TW'],'zh'], [['zh-CN'],'zh'], [['zh-SG'],'zh'], [['zh'],'zh'],
    [['zh-Latn','zh-Hant'],'zh-Hant'], [['zh-Latn','ja-JP'],'ja'], [['ko-KR'],'ko'],
    [['es-MX'],'es'], [['pt-BR'],'pt-BR'], [['pt-br'],'pt-BR'], [['pt_PT'],'pt-BR'], [['pt'],'pt-BR'],
    [['id-ID'],'id'], [['fr-CA'],'fr'], [['de-DE'],'de'], [['ru-RU'],'ru'],
    [['th-TH'],'th'], [['vi-VN'],'vi'], [['tr-TR'],'tr'], [['it-IT'],'it'],
    [['ar-SA','fr-FR','ja-JP'],'fr'], [['ar-SA','pt-BR'],'pt-BR'], [['ar-SA'],'en'],
  ]) {
    const {identifier}=await b.call('Page.addScriptToEvaluateOnNewDocument',{source:`Object.defineProperty(navigator,'languages',{get:()=>${JSON.stringify(langs)},configurable:true})`});
    for (const page of ['download', 'privacy']) {
      await b.evaluate('localStorage.clear()'); await b.navigate(host.url+'/'+page+'/');
      check(await b.evaluate(`document.documentElement.dataset.locale==='en'&&location.pathname==='/${page}/'`),'Browser language preserves the requested English URL');
      check(await b.evaluate(`document.querySelector('[data-language-suggestion]').hidden===${expected==='en'}`),'A translated page is suggested when available');
      if(expected!=='en') {
        check(await b.evaluate(`document.querySelector('[data-language-suggestion]').href.endsWith('/${expected}/${page}/')`),'Suggestion preserves the page');
        await b.evaluate("document.querySelector('[data-language-suggestion]').click()");
        await b.until(`document.documentElement.dataset.locale==='${expected}'`);checks++;
      }
    }
    await b.call('Page.removeScriptToEvaluateOnNewDocument',{identifier});
  }
  // Explicit locale URLs take priority; language links preserve the page and persist.
  await b.navigate(host.url+'/ja/docs/');
  await b.evaluate("document.querySelector('.language-menu').open=true;document.querySelector('[data-language=ko]').click()");
  await b.until("document.documentElement.dataset.locale==='ko'");
  check(await b.evaluate("location.pathname==='/ko/docs/'&&localStorage.getItem('capycanvas.language')==='ko'"),'Manual selection persists and preserves page');
  await b.navigate(host.url+'/');
  check(await b.evaluate("document.documentElement.dataset.locale==='en'&&document.querySelector('.language-menu [data-language=ko]').href.endsWith('/ko/')&&!document.querySelector('[data-language-suggestion]')"),'The minimal home preserves its URL and offers translations through the original menu');
  await b.navigate(host.url+'/ja/');check(await b.evaluate("document.documentElement.dataset.locale==='ja'"),'Explicit locale URL wins over storage');
  await b.evaluate("document.querySelector('[data-language=en]').click()");await b.until("document.documentElement.dataset.locale==='en'");checks++;
  await b.until("document.readyState==='complete'");await b.settle();
  // Menus can be reached by keyboard, and Escape restores focus.
  await b.evaluate("document.querySelector('.language-menu summary').focus()");
  await b.call('Input.dispatchKeyEvent',{type:'keyDown',key:'Enter',code:'Enter',windowsVirtualKeyCode:13,text:'\r',unmodifiedText:'\r'});
  await b.call('Input.dispatchKeyEvent',{type:'keyUp',key:'Enter',code:'Enter',windowsVirtualKeyCode:13});
  await b.settle();
  check(await b.evaluate("document.querySelector('.language-menu').open"),'Keyboard opens language menu');
  await b.call('Input.dispatchKeyEvent',{type:'keyDown',key:'Escape',code:'Escape',windowsVirtualKeyCode:27});
  check(await b.evaluate("!document.querySelector('.language-menu').open&&document.activeElement.tagName==='SUMMARY'"),'Escape closes language menu');
  // Every choice remains reachable in the larger menu, even on a short mobile screen.
  for (const [width,height] of [[320,568],[844,390]]) {
    await b.call('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:false});
    await b.navigate(host.url+'/pt-BR/download/'); await b.settle();
    await b.evaluate("document.querySelector('.language-menu').open=true");
    check(await b.evaluate(`(() => {
      const menu=document.querySelector('.language-options');
      const box=menu.getBoundingClientRect();
      const last=menu.querySelector('a:last-child');
      last.focus();
      const option=last.getBoundingClientRect();
      return menu.querySelectorAll('a').length===${locales.length}&&menu.scrollHeight>menu.clientHeight&&menu.scrollTop>0&&box.left>=0&&box.right<=innerWidth&&box.bottom<=innerHeight&&option.bottom<=box.bottom;
    })()`),`All language choices fit and scroll at ${width}x${height}`);
  }
  await b.evaluate("document.querySelector('[data-language=it]').click()");
  await b.until("location.pathname==='/it/download/'&&document.documentElement.dataset.locale==='it'");checks++;
  // With script and storage unavailable, every page and language link is still usable.
  await b.call('Emulation.setScriptExecutionDisabled',{value:true});
  await b.navigate(host.url+'/ja/download/');
  check(await b.evaluate("document.documentElement.lang==='ja'&&document.querySelectorAll('.platform').length===5"),'No-JS page content');
  check(await b.evaluate("document.querySelector('[data-pwa-guide=generic]').hidden===false&&document.querySelector('.pwa-browser').hidden&&document.querySelectorAll('[data-pwa-guide]:not([hidden])').length===1"),'No-JS installation instructions remain readable');
  await b.screenshot('artifacts/review/no-js-japanese.png',true);
  await b.navigate(host.url+'/ko/');
  await b.evaluate("[...document.querySelectorAll('.showcase-switcher label')].find(label=>label.textContent.trim()==='Photo').click()");
  await b.until("getComputedStyle(document.querySelector('.showcase-frame[data-slide=\"photo\"]')).opacity==='1'&&getComputedStyle(document.querySelector('.showcase-frame[data-slide=\"paint\"]')).opacity==='0'"); checks++;
  await b.navigate(host.url+'/ko/privacy/');
  check(await b.evaluate(`document.querySelectorAll('.policy-prose h2').length===5&&!!document.querySelector('a[href="mailto:zackdrach@gmail.com"]')&&document.querySelectorAll('[data-language]').length===${locales.length}`),'The full privacy policy and language links work without JavaScript');
  await b.call('Emulation.setScriptExecutionDisabled',{value:false});
  const {identifier}=await b.call('Page.addScriptToEvaluateOnNewDocument',{source:"Object.defineProperty(window,'localStorage',{get(){throw new Error('Storage disabled')}})"});
  await b.navigate(host.url+'/?lang=en');
  check(await b.evaluate("document.documentElement.dataset.locale==='en'"),'English override works without storage');
  await b.call('Page.removeScriptToEvaluateOnNewDocument',{identifier});
  await b.navigate(host.url+'/missing-page');check(await b.evaluate("!!document.querySelector('.error-page')"),'Real 404 response is readable');
  check(b.errors.length===0,`Browser console errors: ${b.errors.join('\n')}`);
  await writeFile('artifacts/review/report.json',JSON.stringify({checks,layouts:report.length+guideLayouts.length,report,guideLayouts},null,2)+'\n');
  console.log(`PASS: ${checks} checks across ${report.length+guideLayouts.length} responsive/theme/locale/page combinations, plus language, device, keyboard, no-JS, storage and 404 flows.`);
} finally {await b.close();await host.close();}
