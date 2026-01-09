import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const allAttributes = await getCollection('attributes');
  
  // Build the search index with minimal data needed for search
  const searchIndex = allAttributes.map(attr => {
    // Extract category from id (e.g., "http/http__request__method" -> "http")
    const category = attr.id.includes('/') ? attr.id.split('/')[0] : 'general';
    
    // Build the URL with anchor hash (matches AttributeCard.astro format)
    const anchorId = attr.data.key.replace(/\./g, '-').replace(/</g, '').replace(/>/g, '');
    // Use import.meta.env.BASE_URL for the base path
    const baseUrl = import.meta.env.BASE_URL || '/';
    const url = `${baseUrl}attributes/${category}/#${anchorId}`;
    
    return {
      key: attr.data.key,
      brief: attr.data.brief,
      type: attr.data.type,
      category,
      url,
      deprecated: !!attr.data.deprecation,
    };
  });
  
  // Sort by key for consistent output
  searchIndex.sort((a, b) => a.key.localeCompare(b.key));
  
  return new Response(JSON.stringify(searchIndex), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
