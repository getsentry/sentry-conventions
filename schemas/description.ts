import { z } from 'zod';

export const descriptionOperationSchema = z
  .strictObject({
    name: z.string().optional(),
    brief: z.string(),
    ops: z.array(z.string()).min(1),
    templates: z.array(z.string()).min(1),
    examples: z.array(z.string()).optional(),
  })
  .meta({ id: 'DescriptionOperation', title: 'SpanOperation' });

export const descriptionSchema = z
  .strictObject({
    brief: z.string(),
    operations: z.array(descriptionOperationSchema).min(1),
  })
  .meta({ id: 'SpanDescription', title: 'SpanDescription' });

export type DescriptionOperation = z.infer<typeof descriptionOperationSchema>;
export type DescriptionJson = z.infer<typeof descriptionSchema>;
