export function attributeKeyToFileName(key: string): string {
  return key.replace('<key>', '$key$').concat('.json');
}

export function fileNameToAttributeKey(fileName: string): string {
  return fileName.replace(/\.json$/, '').replace('$key$', '<key>');
}
