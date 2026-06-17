export function parseAttributeId(id: string) {
  const category = id.includes('/') ? id.split('/')[0] : 'general';
  const slug = id.includes('/') ? id.split('/').slice(1).join('/') : id;
  return { category, slug };
}

export function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
