import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';
import { appName, appNames, globalBrandAliases } from '../src/data/branding.mjs';
import { languages } from '../src/data/content.mjs';

const root = new URL('../../', import.meta.url);
const names = [...new Set([...Object.values(appNames), ...globalBrandAliases])];
const pattern = new RegExp(names.sort((a, b) => b.length - a.length).map(name => {
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return globalBrandAliases.includes(name) ? `(?<![\\w/\\\\-])${escaped}(?![\\w/\\\\-]|\\.[\\w])` : escaped;
}).join('|'), 'giu');

export function checkBrandingSource(source, location) {
  const prose = source.replace(/https?:\/\/[^\s<>"')]+/g, '').replace(/(?:editor\.)?capycanvas\.art/gi, '');
  const literal = prose.replace(/\s+/g, ' ').match(pattern)?.[0];
  assert.ok(!literal, `${location}: use {appName} instead of the literal brand "${literal}"`);
  for (const token of source.match(/\{app[_\s-]*name\}/gi) ?? []) assert.equal(token, '{appName}', `${location}: keep the {appName} placeholder unchanged`);
}

const count = source => source.split('{appName}').length - 1;
async function sourceFiles(directory) {
  return (await Promise.all((await readdir(directory, { withFileTypes: true })).map(entry => entry.isDirectory()
    ? sourceFiles(new URL(entry.name + '/', directory)) : new URL(entry.name, directory)))).flat();
}

export async function checkBranding() {
  for (const locale of Object.keys(languages)) appName(locale);
  for (const path of await sourceFiles(new URL('site/src/', root))) {
    if (!/\.(astro|mjs|ts|js)$/.test(path.pathname) || path.pathname.endsWith('/data/branding.mjs')) continue;
    checkBrandingSource(await readFile(path, 'utf8'), path.pathname);
  }
  const guides = new URL('site/src/content/guides/', root);
  for (const directory of ['guides', 'policies']) for (const path of await sourceFiles(new URL(`site/src/content/${directory}/`, root))) {
    const relative = path.pathname.split(`/content/${directory}/`)[1];
    const locale = directory === 'guides' ? relative.split('/')[0] : relative.replace(/\.md$/, '');
    assert.ok(Object.hasOwn(languages, locale), `Unknown translation locale: ${locale}`);
    const source = await readFile(path, 'utf8');
    checkBrandingSource(source, path.pathname);
    const english = directory === 'guides' ? new URL('en/' + relative.split('/').slice(1).join('/'), guides) : new URL('site/src/content/policies/en.md', root);
    assert.ok(count(source) >= count(await readFile(english, 'utf8')), `${path.pathname}: preserve the English {appName} placeholders`);
  }
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  await checkBranding();
  console.log('Approved app names and translation placeholders verified.');
}
