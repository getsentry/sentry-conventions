import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const allAttributes = await getCollection('attributes');

  // Build category map
  const categoryMap = new Map<string, typeof allAttributes>();

  for (const attr of allAttributes) {
    const category = attr.id.includes('/') ? attr.id.split('/')[0] : 'general';

    if (!categoryMap.has(category)) {
      categoryMap.set(category, []);
    }
    categoryMap.get(category)?.push(attr);
  }

  // Sort categories alphabetically, but put 'general' first
  const sortedCategories = Array.from(categoryMap.keys()).sort((a, b) => {
    if (a === 'general') return -1;
    if (b === 'general') return 1;
    return a.localeCompare(b);
  });

  // Sort attributes within each category by key
  for (const attrs of categoryMap.values()) {
    attrs.sort((a, b) => a.data.key.localeCompare(b.data.key));
  }

  // Calculate stats
  const totalAttributes = allAttributes.length;
  const stableCount = allAttributes.filter((a) => !a.data.deprecation).length;
  const deprecatedCount = totalAttributes - stableCount;

  // Build the plain text content
  const lines: string[] = [];

  lines.push('# Sentry Semantic Convention Attributes');
  lines.push('');
  lines.push(`Total: ${totalAttributes} attributes | Stable: ${stableCount} | Deprecated: ${deprecatedCount}`);
  lines.push('');

  for (const category of sortedCategories) {
    const attributes = categoryMap.get(category) || [];

    lines.push('---');
    lines.push('');
    lines.push(`## ${category}`);
    lines.push('');

    for (const attr of attributes) {
      const { data } = attr;

      lines.push(`### ${data.key}`);
      lines.push(`- Brief: ${data.brief}`);
      lines.push(`- Type: ${data.type}`);
      lines.push(
        `- Apply Scrubbing: ${data.apply_scrubbing.key}${data.apply_scrubbing.reason ? ` (${data.apply_scrubbing.reason})` : ''}`,
      );

      if (data.examples !== undefined) {
        lines.push('- Examples:');
        for (const example of data.examples) {
          const exampleText = Array.isArray(example) ? JSON.stringify(example) : String(example);
          lines.push(`  - ${exampleText}`);
        }
      } else if (data.example !== undefined) {
        const exampleText = Array.isArray(data.example) ? JSON.stringify(data.example) : String(data.example);
        lines.push(`- Example: ${exampleText}`);
      }

      if (data.alias && data.alias.length > 0) {
        lines.push(`- Aliases: ${data.alias.join(', ')}`);
      }

      if (data.has_dynamic_suffix) {
        lines.push('- Has dynamic suffix: yes');
      }

      if (data.is_in_otel) {
        lines.push('- OpenTelemetry: yes');
      }

      if (data.additional_context && data.additional_context.length > 0) {
        lines.push('- Additional context:');
        for (const note of data.additional_context) {
          lines.push(`  - ${note}`);
        }
      }

      if (data.deprecation) {
        let deprecationNote = '- Deprecated: yes';
        if (data.deprecation.replacement) {
          deprecationNote += ` (use ${data.deprecation.replacement})`;
        } else if (data.deprecation.reason) {
          deprecationNote += ` (${data.deprecation.reason})`;
        }
        lines.push(deprecationNote);
      }

      lines.push('');
    }
  }

  const content = lines.join('\n');

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
