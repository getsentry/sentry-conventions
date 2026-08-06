import type { AttributeJson, AttributeValue } from './types';

export function getAttributeExamples(
  attribute: Pick<AttributeJson, 'example' | 'examples'>,
): AttributeValue[] | undefined {
  if (attribute.examples !== undefined) {
    return attribute.examples;
  }
  if (attribute.example !== undefined) {
    return [attribute.example];
  }
  return undefined;
}

export function parseAttributeExamples(value: string): AttributeValue[] {
  const examples = JSON.parse(value) as unknown;
  if (!Array.isArray(examples) || examples.length === 0) {
    throw new Error('Examples must be provided as a non-empty JSON array');
  }
  return examples as AttributeValue[];
}
