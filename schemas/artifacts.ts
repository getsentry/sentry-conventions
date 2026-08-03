import { attributeSchema } from './attribute';
import { attributeTransformationSchema } from './attribute-transformation';
import { descriptionSchema } from './description';
import { measurementSchema } from './measurement';
import { nameSchema } from './name';
import { opSchema } from './op';

export const schemaArtifacts = [
  { fileName: 'attribute.schema.json', schema: attributeSchema },
  { fileName: 'name.schema.json', schema: nameSchema, rootDefinition: 'SpanName' },
  { fileName: 'description.schema.json', schema: descriptionSchema, rootDefinition: 'SpanDescription' },
  { fileName: 'op.schema.json', schema: opSchema, rootDefinition: 'SpanOperation' },
  { fileName: 'measurements.schema.json', schema: measurementSchema },
  { fileName: 'attribute_transformation.schema.json', schema: attributeTransformationSchema },
] as const;
