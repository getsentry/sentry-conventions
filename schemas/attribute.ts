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

const applyScrubbingSchema = z
  .strictObject({
    key: z.enum(['auto', 'manual', 'never']),
    reason: z.string().optional(),
  })
  .describe(
    "How PII scrubbing should be applied to the attribute value. 'auto' scrubs automatically, 'manual' requires manual scrubbing rules, 'never' is never scrubbed. Optionally include a reason about why this mode applies",
  );

const deprecationStatusDescription =
  "How the attribute should be handled in the ingestion pipeline. 'backfill' copies the value to the new name. 'normalize' moves the value to the new name. 'transform' applies the referenced attribute transformation. Existing values for the replacement attribute will not be overwritten. The attribute should be backfilled or transformed for 90 days before status is set to normalize.";
const transformationDescription =
  "The id of the attribute transformation to apply when _status is 'transform'. Transformation definitions live in model/attribute_transformations/.";

const ordinaryDeprecationSchema = z.strictObject({
  replacement: z.string().optional(),
  reason: z.string().optional(),
  _status: z.union([z.literal('backfill'), z.literal('normalize'), z.null()]).describe(deprecationStatusDescription),
  transformation: z.string().describe(transformationDescription).optional(),
});

const transformDeprecationSchema = z.strictObject({
  replacement: z.string().optional(),
  reason: z.string().optional(),
  _status: z.literal('transform').describe(deprecationStatusDescription),
  transformation: z.string().describe(transformationDescription),
});

const deprecationSchema = z
  .union([ordinaryDeprecationSchema, transformDeprecationSchema])
  .describe('If an attribute was deprecated, and what it was replaced with');

export const changelogEntrySchema = z.strictObject({
  version: z.string().describe('The sentry-conventions release version'),
  prs: z.array(z.number().int().positive()).describe('GitHub PR numbers').optional(),
  description: z.string().describe('Optional description of what changed').optional(),
});

const commonAttributeShape = {
  key: z.string().describe('The name of the attribute, for ex. http.route'),
  brief: z.string().describe('A description of the attribute'),
  apply_scrubbing: applyScrubbingSchema,
  is_in_otel: z.boolean(),
  visibility: z.enum(['public', 'internal']).describe('The visibility of the attribute'),
  deprecation: deprecationSchema.optional(),
  alias: z.array(z.string()).describe('If there are attributes that alias to this attribute').optional(),
  additional_context: z
    .array(z.string())
    .describe(
      'A list of freeform notes providing additional context about how this attribute behaves, common pitfalls, or query-time nuances',
    )
    .optional(),
  changelog: z
    .array(changelogEntrySchema)
    .describe('A list of changelog entries tracking how this attribute has changed across versions')
    .optional(),
};

function staticAttributeVariants<const Type extends string, Value extends z.ZodType>(type: Type, valueSchema: Value) {
  const shape = {
    ...commonAttributeShape,
    has_dynamic_suffix: z
      .literal(false)
      .describe('If an attribute has a dynamic suffix, for example http.response.header.<key> where <key> is dynamic')
      .optional(),
    type: z.literal(type).describe('The type of the attribute value'),
  };
  return [
    z.strictObject(shape),
    z.strictObject({ ...shape, example: valueSchema.describe('An example value of the attribute') }),
    z.strictObject({ ...shape, examples: z.array(valueSchema).min(1).describe('Example values of the attribute') }),
  ] as const;
}

const dynamicAttributeShape = {
  ...commonAttributeShape,
  has_dynamic_suffix: z
    .literal(true)
    .describe('If an attribute has a dynamic suffix, for example http.response.header.<key> where <key> is dynamic'),
  type: attributeTypeSchema.describe('The type of the attribute value'),
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
    z.strictObject({
      ...dynamicAttributeShape,
      example: z.string().describe('An example value of the attribute'),
    }),
    z.strictObject({
      ...dynamicAttributeShape,
      examples: z.array(z.string()).min(1).describe('Example values of the attribute'),
    }),
  ])
  .meta({
    title: 'Sentry Span Attribute Schema',
    description: "Describes an attribute and how it's meant to be used",
  });

export type AttributeType = z.infer<typeof attributeTypeSchema>;
export type AttributeValue = z.infer<typeof attributeValueSchema>;
export type ChangelogEntry = z.infer<typeof changelogEntrySchema>;
export type AttributeJson = z.infer<typeof attributeSchema>;
