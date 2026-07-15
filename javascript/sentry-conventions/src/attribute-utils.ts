export function getAttributeValue<T = unknown>(
  attributes: Record<string, unknown>,
  keys: readonly string[],
): T | undefined {
  return keys.map((key) => attributes[key]).find((value) => value !== undefined) as T | undefined;
}
