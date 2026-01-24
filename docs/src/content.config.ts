import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Schema matching schemas/attribute.schema.json
const attributeSchema = z.object({
  key: z.string(),
  brief: z.string(),
  has_dynamic_suffix: z.boolean().optional(),
  type: z.enum(['string', 'boolean', 'integer', 'double', 'string[]', 'boolean[]', 'integer[]', 'double[]']),
  pii: z.object({
    key: z.enum(['true', 'maybe', 'false']),
    reason: z.string().optional(),
  }),
  is_in_otel: z.boolean(),
  example: z
    .union([z.string(), z.boolean(), z.number(), z.array(z.string()), z.array(z.boolean()), z.array(z.number())])
    .optional(),
  deprecation: z
    .object({
      replacement: z.string().optional(),
      reason: z.string().optional(),
      _status: z.enum(['backfill', 'normalize']).nullable(),
    })
    .optional(),
  alias: z.array(z.string()).optional(),
  sdks: z.array(z.string()).optional(),
});

// Schema matching schemas/name.schema.json
const spanOperationSchema = z.object({
  name: z.string().optional(),
  brief: z.string(),
  is_in_otel: z.boolean(),
  otel_notes: z.string().optional(),
  ops: z.array(z.string()),
  templates: z.array(z.string()),
  examples: z.array(z.string()).optional(),
});

const nameSchema = z.object({
  brief: z.string(),
  operations: z.array(spanOperationSchema),
});

// Define the attributes collection - loads all JSON files from model/attributes
const attributes = defineCollection({
  loader: glob({ pattern: '**/*.json', base: '../model/attributes' }),
  schema: attributeSchema,
});

// Define the names collection - loads all JSON files from model/name
const names = defineCollection({
  loader: glob({ pattern: '*.json', base: '../model/name' }),
  schema: nameSchema,
});

export const collections = { attributes, names };

// Export types for use in pages
export type Attribute = z.infer<typeof attributeSchema>;
export type SpanName = z.infer<typeof nameSchema>;
export type SpanOperation = z.infer<typeof spanOperationSchema>;
