export function attributeKeyToFileName(key: string): string {
  return key.replace('<key>', '[key]').split('.').join('__').concat('.json');
}

export function fileNameToAttributeKey(fileName: string): string {
  return fileName
    .replace(/\.json$/, '')
    .replaceAll('__', '.')
    .replace('[key]', '<key>');
}

/**
 * Returns the dynamic-suffix key that a concrete attribute key could be an instance of,
 * e.g. `browser.web_vital.cls.source.1` -> `browser.web_vital.cls.source.<key>`.
 *
 * Returns undefined for keys without a separator, which cannot carry a suffix.
 */
export function attributeKeyToDynamicSuffixKey(key: string): string | undefined {
  const lastSeparator = key.lastIndexOf('.');
  return lastSeparator === -1 ? undefined : `${key.slice(0, lastSeparator)}.<key>`;
}
