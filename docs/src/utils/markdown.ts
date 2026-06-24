function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * Renders a string containing inline markdown links (`[label](https://...)`) to HTML.
 * Everything except recognized http(s) links is HTML-escaped, so the output is safe to
 * pass to `set:html`.
 */
export function renderMarkdownLinks(text: string): string {
  const linkPattern = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;
  let result = '';
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = linkPattern.exec(text)) !== null) {
    result += escapeHtml(text.slice(lastIndex, match.index));
    const label = escapeHtml(match[1]);
    const url = escapeHtml(match[2]);
    result += `<a href="${url}" target="_blank" rel="noopener" class="text-accent hover:text-accent-hover">${label}</a>`;
    lastIndex = linkPattern.lastIndex;
  }

  result += escapeHtml(text.slice(lastIndex));
  return result;
}
