/**
 * Takes a record of attributes (key-value pairs) and a list of keys.
 * Returns the value of the first key that exists in the attributes record has a defined value.
 *
 * This is useful when passing in a deprecation chain or alias list where we want to obtain a
 * value from the first key that is defined in the attributes record.
 *
 * @example
 * const attributes = {
 *   "old_key": "value",
 * };
 * const keys = ["new_key", "old_key"];
 * const value = getAttributeValue(attributes, keys);
 * console.log(value); // "value"
 *
 * @param attributes a key-value pair of attributes. Not compatible with typed attributes where the value is a `{value, type, unit?}` object.
 * @param keys a list of attribute keys. Use `<ATTRIBUTE_NAME>_KEYS` to get the list of current and deprecated attribute keys for an attribute.
 *
 * @returns the attribute value of the first key that is defined in the attributes record.
 */
export function getAttributeValue<T = unknown>(
  attributes: Record<string, unknown>,
  keys: readonly string[],
): T | undefined {
  return keys.map((key) => attributes[key]).find((value) => value !== undefined) as T | undefined;
}
