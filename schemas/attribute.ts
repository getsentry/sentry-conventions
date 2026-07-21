import { z } from 'zod';

export const attributeTypeSchema = z.enum([
  'string',
  'boolean',
  'integer',
  'double',
  'string[]',
  'boolean[]',
  'integer[]',
  'double[]',
  'any',
]);

export const attributeValueSchema = z.union([
  z.string(),
  z.boolean(),
  z.number(),
  z.array(z.string()),
  z.array(z.boolean()),
  z.array(z.number()),
]);

const applyScrubbingSchema = z.strictObject({
  key: z.enum(['auto', 'manual', 'never']),
  reason: z.string().optional(),
});

const ordinaryDeprecationSchema = z.strictObject({
  replacement: z.string().optional(),
  reason: z.string().optional(),
  _status: z.union([z.literal('backfill'), z.literal('normalize'), z.null()]),
  transformation: z.string().optional(),
});

const transformDeprecationSchema = z.strictObject({
  replacement: z.string().optional(),
  reason: z.string().optional(),
  _status: z.literal('transform'),
  transformation: z.string(),
});

const deprecationSchema = z.union([ordinaryDeprecationSchema, transformDeprecationSchema]);

export const changelogEntrySchema = z.strictObject({
  version: z.string(),
  prs: z.array(z.number().int().positive()).optional(),
  description: z.string().optional(),
});

const commonAttributeShape = {
  key: z.string(),
  brief: z.string(),
  apply_scrubbing: applyScrubbingSchema,
  is_in_otel: z.boolean(),
  visibility: z.enum(['public', 'internal']),
  deprecation: deprecationSchema.optional(),
  alias: z.array(z.string()).optional(),
  additional_context: z.array(z.string()).optional(),
  changelog: z.array(changelogEntrySchema).optional(),
};

function staticAttributeVariants<const Type extends string, Value extends z.ZodType>(type: Type, valueSchema: Value) {
  const shape = {
    ...commonAttributeShape,
    has_dynamic_suffix: z.literal(false).optional(),
    type: z.literal(type),
  };
  return [
    z.strictObject(shape),
    z.strictObject({ ...shape, example: valueSchema }),
    z.strictObject({ ...shape, examples: z.array(valueSchema).min(1) }),
  ] as const;
}

const dynamicAttributeShape = {
  ...commonAttributeShape,
  has_dynamic_suffix: z.literal(true),
  type: attributeTypeSchema,
};

export const attributeSchema = z
  .union([
    ...staticAttributeVariants('string', z.string()),
    ...staticAttributeVariants('boolean', z.boolean()),
    ...staticAttributeVariants('integer', z.number()),
    ...staticAttributeVariants('double', z.number()),
    ...staticAttributeVariants('string[]', z.array(z.string())),
    ...staticAttributeVariants('boolean[]', z.array(z.boolean())),
    ...staticAttributeVariants('integer[]', z.array(z.number())),
    ...staticAttributeVariants('double[]', z.array(z.number())),
    ...staticAttributeVariants('any', attributeValueSchema),
    z.strictObject({ ...dynamicAttributeShape, example: z.string() }),
    z.strictObject({ ...dynamicAttributeShape, examples: z.array(z.string()).min(1) }),
  ])
  .meta({
    title: 'Sentry Span Attribute Schema',
    description: "Describes an attribute and how it's meant to be used",
  });

export type AttributeType = z.infer<typeof attributeTypeSchema>;
export type AttributeValue = z.infer<typeof attributeValueSchema>;
export type ChangelogEntry = z.infer<typeof changelogEntrySchema>;
export type AttributeJson = z.infer<typeof attributeSchema>;
