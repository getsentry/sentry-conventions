/**
 * Turns an attribute key into its anchor on the category page
 * (e.g. "http.request.method" → "http-request-method").
 */
export function attributeSlug(key: string): string {
  return key.replace(/\./g, '-').replace(/</g, '').replace(/>/g, '');
}

/**
 * Builds a URL to an attribute's anchor on the docs site.
 * Derives the category from the first segment of a dotted key
 * (e.g. "http.request.method" → category "http").
 * Keys without a dot land in the "general" category.
 */
export function attributeUrl(key: string, base: string): string {
  const category = key.includes('.') ? key.split('.')[0] : 'general';
  return `${base}attributes/${category}/#${attributeSlug(key)}`;
}
