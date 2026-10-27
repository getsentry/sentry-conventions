import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const allMetrics = await getCollection('metrics');
  const baseUrl = import.meta.env.BASE_URL || '/';

  // Build the search index with minimal data needed for search (anchor matches MetricCard.astro)
  const searchIndex = allMetrics.map((metric) => ({
    key: metric.data.key,
    brief: metric.data.brief,
    instrument: metric.data.instrument,
    url: `${baseUrl}metrics/#${metric.data.key.replace(/\./g, '-')}`,
  }));

  // Sort by key for consistent output
  searchIndex.sort((a, b) => a.key.localeCompare(b.key));

  return new Response(JSON.stringify(searchIndex), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
