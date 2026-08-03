import { z } from 'zod';

export const attributeTransformationAttributeReferenceSchema = z
  .strictObject({
    attribute: z.string(),
    brief: z.string().optional(),
  })
  .meta({ id: 'AttributeReference', title: 'AttributeReference' });

export const attributeTransformationExampleSchema = z
  .strictObject({
    name: z.string(),
    input: z.record(z.string(), z.unknown()),
    output: z.record(z.string(), z.unknown()),
  })
  .meta({ id: 'TransformationExample', title: 'TransformationExample' });

export const attributeTransformationSchema = z
  .strictObject({
    id: z
      .string()
      .regex(/^[a-z0-9_]+$/)
      .describe('Stable identifier for the transformation'),
    brief: z.string().describe('Short explanation of when and why this transformation is applied'),
    inputs: z
      .array(attributeTransformationAttributeReferenceSchema)
      .min(1)
      .describe('Attributes consumed by this transformation'),
    outputs: z
      .array(attributeTransformationAttributeReferenceSchema)
      .min(1)
      .describe('Attributes produced by this transformation'),
    actions: z
      .array(z.string())
      .min(1)
      .describe(
        'Ordered description of the value transformations to apply. This describes behavior; Relay owns the implementation.',
      ),
    examples: z
      .array(attributeTransformationExampleSchema)
      .min(1)
      .describe('Examples showing input attributes and expected output attributes'),
  })
  .meta({
    title: 'Sentry Attribute Transformation Schema',
    description: 'Describes how one or more deprecated attributes are transformed into replacement attributes',
  });

export type AttributeTransformationAttributeReference = z.infer<typeof attributeTransformationAttributeReferenceSchema>;
export type AttributeTransformationExample = z.infer<typeof attributeTransformationExampleSchema>;
export type AttributeTransformationJson = z.infer<typeof attributeTransformationSchema>;
