import MarkdownIt from 'markdown-it';

// Only enable the inline syntax used in model prose. Raw HTML and images stay disabled.
const markdown = new MarkdownIt('zero', { html: false }).enable(['backticks', 'escape', 'link', 'entity']);

// Preserve the existing renderer's HTTP(S)-only link policy.
markdown.validateLink = (url) => /^https?:\/\//i.test(url);
markdown.renderer.rules.link_open = (tokens, index, options, _env, renderer) => {
  const token = tokens[index]!;
  token.attrSet('target', '_blank');
  token.attrSet('rel', 'noopener');
  token.attrSet('class', 'text-accent hover:text-accent-hover');
  return renderer.renderToken(tokens, index, options);
};

/** Render inline code and links, escaping everything else for safe use with `set:html`. */
export function renderInlineMarkdown(text: string): string {
  return markdown.renderInline(text);
}
