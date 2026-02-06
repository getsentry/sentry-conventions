import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const baseUrl = import.meta.env.BASE_URL || '/';

  const content = `# Sentry Semantic Conventions

> Semantic conventions for Sentry span attributes, operations, and measurements.

Sentry Semantic Conventions define standardized attribute keys, span operation names, and measurements for observability data across all Sentry SDKs.

## Documentation

- [All Attributes](${baseUrl}llms-full.txt): Complete list of all span and breadcrumb attributes in plain text
- [Attributes Reference](${baseUrl}attributes/): Browse attributes grouped by category
- [Span Names](${baseUrl}names/): How to construct span names using templates

## Optional

- [GitHub Repository](https://github.com/getsentry/sentry-conventions): Source model files and schemas
- [API: Attributes JSON](${baseUrl}api/attributes.json): Machine-readable JSON of all attributes
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
