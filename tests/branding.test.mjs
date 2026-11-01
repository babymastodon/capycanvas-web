import test from 'node:test';
import assert from 'node:assert/strict';
import { createSatteriMarkdownProcessor } from '@astrojs/markdown-satteri';
import { appName, appNames, brandCopy, brandTranslations } from '../site/src/data/branding.mjs';
import { appNameMarkdown } from '../site/src/lib/branding-markdown.mjs';
import { checkBranding, checkBrandingSource } from '../site/scripts/check-branding.mjs';
import { languages } from '../site/src/data/content.mjs';

test('every website locale has the approved app name and unknown locales fail', () => {
  assert.equal(appName('ja'), 'カピカン');
  assert.equal(appName('zh'), '水豚画布');
  assert.equal(appName('zh-Hant'), '水豚畫布');
  assert.equal(appName('ko'), '카피 캔버스');
  assert.equal(appName('ru'), 'Капи Канвас');
  assert.equal(appName('th'), 'คาปิ แคนวาส');
  for (const locale of Object.keys(languages)) assert.ok(appName(locale));
  assert.throws(() => appName('xx'), /Missing approved app name/);
  assert.throws(() => brandTranslations({ xx: { title: '{appName}' } }), /Missing approved app name/);
});

test('nested translated copy resolves the brand while preserving other placeholders and input', () => {
  const copy = { heading: '{appName}', steps: ['Open {appName}.', { label: '{appName} {version}', value: 1 }] };
  assert.deepEqual(brandCopy('ja', copy), { heading: 'カピカン', steps: ['Open カピカン.', { label: 'カピカン {version}', value: 1 }] });
  assert.equal(copy.heading, '{appName}');
});

test('branding validation rejects literal names and damaged placeholders but preserves references', () => {
  for (const name of [...Object.values(appNames), 'CapyCanvas', 'capy canvas', 'Capy\nCanvas', 'Capy   Canvas']) assert.throws(() => checkBrandingSource(`Open ${name}.`, 'translation'), /use \{appName\}/);
  for (const token of ['{appname}', '{AppName}', '{app_name}']) assert.throws(() => checkBrandingSource(`Open ${token}.`, 'translation'), /placeholder unchanged/);
  assert.doesNotThrow(() => checkBrandingSource('Open {appName} at https://editor.capycanvas.art/ or capycanvas.art.', 'translation'));
  assert.doesNotThrow(() => checkBrandingSource('capycanvas.language ../capycanvas CapyCanvas.png', 'identifiers'));
  assert.doesNotThrow(() => checkBrandingSource(String.raw`%LOCALAPPDATA%\CapyAtelier\CapyCanvas\workspaces`, 'Windows path'));
  assert.throws(() => checkBrandingSource('`CapyCanvas`', 'literal name'), /use \{appName\}/);
});

test('all translation sources retain centrally resolved branding', checkBranding);

test('Markdown resolves the brand before headings, anchors, alt text and policy rendering', async () => {
  const processor = await createSatteriMarkdownProcessor({ mdastPlugins: [appNameMarkdown()] });
  for (const locale of ['en', 'ja', 'zh', 'ko', 'ru', 'th']) for (const path of [`guides/${locale}/quickstart.md`, `policies/${locale}.md`]) {
    const rendered = await processor.render('# {appName}\n\nOpen **{appName}**.\n\n![{appName}](https://editor.capycanvas.art/image.png "{appName}")\n\n[Open {appName}](/download/ "{appName}")\n\n[Reference][app]\n\n[app]: /download/ "{appName}"', { fileURL: new URL(`../site/src/content/${path}`, import.meta.url) });
    assert.doesNotMatch(rendered.code, /\{appName\}/);
    assert.ok(rendered.code.includes(appName(locale)));
    assert.ok(rendered.code.includes(`alt="${appName(locale)}"`));
    assert.ok(rendered.code.includes('https://editor.capycanvas.art/image.png'));
    assert.equal(rendered.metadata.headings[0].text, appName(locale));
    assert.ok(!rendered.metadata.headings[0].slug.includes('appname'));
  }
});
