export function getAttributeValue<T = unknown>(
  attributes: Record<string, unknown>,
  keys: readonly string[],
): T | undefined {
  for (const key of keys) {
    const value = attributes[key];
    if (value !== undefined) {
      return value as T;
    }
  }

  return undefined;
}
