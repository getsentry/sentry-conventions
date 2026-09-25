import fs from 'node:fs';
import path from 'node:path';

import type { AttributeJson } from '../scripts/types';
import { attributeKeyToDynamicSuffixKey, attributeKeyToFileName } from '../scripts/utils';

const attributesFolder = path.resolve(__dirname, '../model/attributes');
const placeholder = /\{\{([^}]+)\}\}/g;

async function readAttribute(key: string): Promise<AttributeJson | undefined> {
  const fileName = attributeKeyToFileName(key);
  const namespace = key.includes('.') ? (key.split('.')[0] as string) : undefined;
  const filePath = namespace ? path.join(attributesFolder, namespace, fileName) : path.join(attributesFolder, fileName);

  return fs.promises
    .readFile(filePath, 'utf-8')
    .then((content) => JSON.parse(content) as AttributeJson)
    .catch(() => undefined);
}

/**
 * Resolves the attribute a template placeholder refers to.
 *
 * A placeholder may name a concrete variant of an attribute with a dynamic suffix, e.g.
 * `browser.web_vital.cls.source.1` for `browser.web_vital.cls.source.<key>`, for templates
 * that need one specific value rather than the whole set. Only attributes that declare
 * `has_dynamic_suffix` can be named that way.
 */
export async function resolveTemplateAttribute(key: string): Promise<AttributeJson | undefined> {
  const attribute = await readAttribute(key);
  if (attribute) {
    return attribute;
  }

  const dynamicSuffixKey = attributeKeyToDynamicSuffixKey(key);
  if (!dynamicSuffixKey) {
    return undefined;
  }

  const dynamicSuffixAttribute = await readAttribute(dynamicSuffixKey);
  return dynamicSuffixAttribute?.has_dynamic_suffix ? dynamicSuffixAttribute : undefined;
}

/**
 * Collects the placeholders across a name or description file that don't resolve to an
 * attribute, and those that resolve to one that has been deprecated in favour of another.
 */
export async function findTemplateAttributeIssues(content: {
  operations: { templates: string[] }[];
}): Promise<{ missing: string[]; deprecated: string[] }> {
  const missing: string[] = [];
  const deprecated: string[] = [];

  for (const operation of content.operations) {
    for (const tmpl of operation.templates) {
      for (const match of tmpl.matchAll(placeholder)) {
        const key = match[1] as string;
        const attribute = await resolveTemplateAttribute(key);

        if (!attribute) {
          missing.push(key);
        } else if (attribute.deprecation?.replacement) {
          deprecated.push(key);
        }
      }
    }
  }

  return { missing, deprecated };
}
