import { z } from 'zod';
import { attributeValueSchema, type AttributeJson, type AttributeValue } from '../schemas';
import { parseJsonValue } from './read_json';

type AttributeExamples = Partial<AttributeJson> & {
  example?: AttributeValue;
  examples?: AttributeValue[];
};

export function getAttributeExamples(attribute: AttributeExamples): AttributeValue[] | undefined {
  if (attribute.examples !== undefined) {
    return attribute.examples;
  }
  if (attribute.example !== undefined) {
    return [attribute.example];
  }
  return undefined;
}

export function parseAttributeExamples(value: string): AttributeValue[] {
  try {
    return parseJsonValue(value, z.array(attributeValueSchema).min(1));
  } catch {
    throw new Error('Examples must be provided as a non-empty JSON array');
  }
}
