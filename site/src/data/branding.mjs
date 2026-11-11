const globalName = 'Capy Canvas';
export const appNames = Object.freeze({
  en: globalName, ja: 'カピカン', zh: '水豚画布', 'zh-Hant': '水豚畫布',
  ko: '카피 캔버스', ru: 'Капи Канвас', th: 'คาปิ แคนวาส',
  es: globalName, 'pt-BR': globalName, id: globalName, fr: globalName,
  de: globalName, vi: globalName, tr: globalName, it: globalName,
});
export const globalBrandAliases = [globalName, 'CapyCanvas'];

/** @param {string} locale @returns {string} */
export function appName(locale) {
  if (!Object.hasOwn(appNames, locale)) throw new Error(`Missing approved app name: ${locale}`);
  return appNames[locale];
}

/** @template T @param {string} locale @param {T} value @returns {T} */
export function brandCopy(locale, value) {
  const name = appName(locale);
  const visit = item => typeof item === 'string' ? item.replaceAll('{appName}', name)
    : Array.isArray(item) ? item.map(visit)
    : item && typeof item === 'object' ? Object.fromEntries(Object.entries(item).map(([key, child]) => [key, visit(child)]))
    : item;
  return visit(value);
}

/** @template T @param {T} translations @returns {T} */
export function brandTranslations(translations) {
  return /** @type {T} */ (Object.fromEntries(Object.entries(translations).map(([locale, copy]) => [locale, brandCopy(locale, copy)])));
}
