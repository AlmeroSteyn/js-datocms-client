export default function localizedRead(entity, key, localized, i18n) {
  if (localized) {
    const hash = entity[key];
    const fallbacks = [i18n.locale].concat(i18n.fallbacks[i18n.locale] || []);
    const localeWithValue = fallbacks.find(locale => hash[locale]);
    return localeWithValue ? hash[localeWithValue] : null;
  }

  return entity[key];
}
