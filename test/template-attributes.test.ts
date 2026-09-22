import { describe, expect, it } from 'vitest';

import { attributeKeyToDynamicSuffixKey } from '../scripts/utils';
import { findTemplateAttributeIssues, resolveTemplateAttribute } from './template-attributes';

describe('attributeKeyToDynamicSuffixKey', () => {
  it('replaces the last segment with the dynamic suffix', () => {
    expect(attributeKeyToDynamicSuffixKey('browser.web_vital.cls.source.1')).toBe('browser.web_vital.cls.source.<key>');
  });

  it('returns undefined for keys that cannot carry a suffix', () => {
    expect(attributeKeyToDynamicSuffixKey('inp')).toBeUndefined();
  });
});

describe('resolveTemplateAttribute', () => {
  it('resolves an attribute named in full', async () => {
    await expect(resolveTemplateAttribute('ui.component_name')).resolves.toMatchObject({
      key: 'ui.component_name',
    });
  });

  it('resolves a concrete variant of an attribute with a dynamic suffix', async () => {
    await expect(resolveTemplateAttribute('browser.web_vital.cls.source.1')).resolves.toMatchObject({
      key: 'browser.web_vital.cls.source.<key>',
    });
  });

  it('does not resolve a suffixed variant of an attribute without a dynamic suffix', async () => {
    await expect(resolveTemplateAttribute('ui.component_name.1')).resolves.toBeUndefined();
  });

  it('does not resolve an unknown attribute', async () => {
    await expect(resolveTemplateAttribute('does.not.exist')).resolves.toBeUndefined();
  });
});

describe('findTemplateAttributeIssues', () => {
  const operation = (templates: string[]) => ({ operations: [{ templates }] });

  it('reports placeholders that do not resolve', async () => {
    const { missing, deprecated } = await findTemplateAttributeIssues(operation(['{{does.not.exist}}']));

    expect(missing).toEqual(['does.not.exist']);
    expect(deprecated).toEqual([]);
  });

  it('reports a concrete variant of a deprecated attribute with a dynamic suffix', async () => {
    // `cls.source.<key>` is deprecated in favour of `browser.web_vital.cls.source.<key>`
    const { missing, deprecated } = await findTemplateAttributeIssues(operation(['{{cls.source.1}}']));

    expect(missing).toEqual([]);
    expect(deprecated).toEqual(['cls.source.1']);
  });

  it('accepts a mix of full and concrete dynamic-suffix keys', async () => {
    const issues = await findTemplateAttributeIssues(
      operation(['{{browser.web_vital.cls.source.1}}', '{{ui.component_name}}']),
    );

    expect(issues).toEqual({ missing: [], deprecated: [] });
  });
});
