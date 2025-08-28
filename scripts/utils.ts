export function attributeKeyToFileName(key: string): string {
  return key.replace('<key>', '$key$').split('.').join('__').concat('.json');
}

export function fileNameToAttributeKey(fileName: string): string {
  return fileName.replace('.json', '').replaceAll('__', '.').replace('$key$', '<key>');
}

