import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { attributeSchema, descriptionSchema, measurementSchema, nameSchema, opSchema } from '../../schemas';

const attributes = defineCollection({
  loader: glob({ pattern: '**/*.json', base: '../model/attributes' }),
  schema: attributeSchema,
});

const names = defineCollection({
  loader: glob({ pattern: '*.json', base: '../model/name' }),
  schema: nameSchema,
});

const descriptions = defineCollection({
  loader: glob({ pattern: '*.json', base: '../model/description' }),
  schema: descriptionSchema,
});

const ops = defineCollection({
  loader: glob({ pattern: '*.json', base: '../model/op' }),
  schema: opSchema,
});

const measurements = defineCollection({
  loader: glob({ pattern: '*.json', base: '../model/measurements' }),
  schema: measurementSchema,
});

export const collections = { attributes, names, descriptions, measurements, ops };

export type {
  AttributeJson as Attribute,
  DescriptionJson as SpanDescription,
  DescriptionOperation,
  MeasurementJson as Measurement,
  NameJson as SpanName,
  NameOperation as SpanOperation,
  OpField as SpanOpField,
  OpJson as SpanOp,
} from '../../schemas';
