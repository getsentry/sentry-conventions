import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { renderInlineMarkdown } from './markdown';

describe('renderInlineMarkdown', () => {
  it('renders code from the reported gen_ai.input.messages description without paragraph wrappers', () => {
    const attribute = JSON.parse(
      readFileSync(new URL('../../../model/attributes/gen_ai/gen_ai__input__messages.json', import.meta.url), 'utf8'),
    );
    const html = renderInlineMarkdown(attribute.brief);
    expect(html).toContain('<code>role</code>');
    expect(html).toContain('<code>&quot;user&quot;</code>');
    expect(html).toContain('<code>{type: &quot;text&quot;, text:&quot;...&quot;}</code>');
    expect(html).not.toContain('`');
    expect(html).not.toContain('<p>');
  });

  it('handles multiple delimiters, escaped backticks, and unmatched backticks', () => {
    expect(renderInlineMarkdown('Use ``a ` b`` and `content`.')).toBe(
      'Use <code>a ` b</code> and <code>content</code>.',
    );
    expect(renderInlineMarkdown('Literal \\`role\\` and unmatched `code')).toBe('Literal `role` and unmatched `code');
  });

  it('does not parse Markdown inside code spans', () => {
    expect(renderInlineMarkdown('`[docs](https://example.com)`')).toBe('<code>[docs](https://example.com)</code>');
  });

  it('preserves HTTP(S) links and supports code in link labels', () => {
    expect(renderInlineMarkdown('[`role`](https://example.com/path_(name)?x=1&y=2)')).toBe(
      '<a href="https://example.com/path_(name)?x=1&amp;y=2" target="_blank" rel="noopener" class="text-accent hover:text-accent-hover"><code>role</code></a>',
    );
    expect(renderInlineMarkdown('[docs](http://example.com)')).toContain('href="http://example.com"');
  });

  it('escapes raw HTML both inside and outside code', () => {
    const html = renderInlineMarkdown('<img src=x onerror="alert(1)"> `<script>alert(1)</script>` & <value>');
    expect(html).toBe(
      '&lt;img src=x onerror=&quot;alert(1)&quot;&gt; <code>&lt;script&gt;alert(1)&lt;/script&gt;</code> &amp; &lt;value&gt;',
    );
    expect(renderInlineMarkdown('&lt;script&gt;')).toBe('&lt;script&gt;');
  });

  it.each(['javascript:alert%281%29', 'data:text/html,test', 'vbscript:test', '//example.com', '/relative'])(
    'does not link unsafe or unsupported destinations: %s',
    (url) => {
      expect(renderInlineMarkdown(`[link](${url})`)).not.toContain('<a');
    },
  );

  it('does not introduce images or interpret emphasis in attribute names', () => {
    expect(renderInlineMarkdown('![image](https://example.com/image.png)')).not.toContain('<img');
    expect(renderInlineMarkdown('gen_ai.input.messages and *')).toBe('gen_ai.input.messages and *');
  });
});
