import { docTopics } from '../data/docs-nav.mjs';
import { languages } from '../data/content.mjs';
import { getRelativeLocaleUrl } from 'astro:i18n';

export type Locale = keyof typeof languages;
export type Page = 'home' | 'download' | 'versions' | 'ipadBeta' | 'androidBeta' | 'documentation' | 'privacy';
export type SitePage = Page | '404';
export const locales = Object.keys(languages) as Locale[];
export const pages = ['home', 'download', 'versions', 'ipadBeta', 'androidBeta', 'documentation', 'privacy'] as const;
export const platforms = ['ipad', 'android', 'linux', 'windows', 'mac'] as const;
export type Platform = (typeof platforms)[number];
export const betaPages: Partial<Record<Platform, 'ipadBeta' | 'androidBeta'>> = { ipad: 'ipadBeta', android: 'androidBeta' };
export const testFlightAppUrl = 'https://apps.apple.com/app/testflight/id899247664';
export const betaLinks = {
  ipadBeta: { invitation: 'https://testflight.apple.com/join/VBcE4Z8r' },
  androidBeta: { group: 'https://groups.google.com/g/capycanvas-beta', test: 'https://play.google.com/apps/testing/art.capycanvas.editor' },
};
export const origin = 'https://capycanvas.art';
export const appUrl = 'https://editor.capycanvas.art/';
export const repositoryUrl = 'https://github.com/babymastodon/capycanvas';
export const feedbackUrl = `${repositoryUrl}/issues`;
const segments: Partial<Record<SitePage, string>> = { versions: 'download/past-versions', ipadBeta: 'download/ipad-beta', androidBeta: 'download/android-beta', documentation: 'docs' };

export function route(locale: Locale, page: SitePage = 'home', slug = '') {
  const segment = segments[page] ?? page;
  return getRelativeLocaleUrl(locale, page === 'home' ? '' : [segment, slug].filter(Boolean).join('/'), { normalizeLocale: false });
}

export const routes = locales.flatMap(locale => [
  ...pages.map(page => ({ locale, page, slug: '', path: route(locale, page) })),
  ...docTopics.map(({ slug }) => ({ locale, page: 'documentation' as const, slug, path: route(locale, 'documentation', slug) })),
]);
