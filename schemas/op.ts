import { z } from 'zod';

export const opFieldSchema = z
  .strictObject({
    name: z.string(),
    description: z.string().optional(),
  })
  .meta({ id: 'Field', title: 'Field' });

export const opSchema = z
  .strictObject({
    name: z.string(),
    description: z.string().optional(),
    fields: z.array(opFieldSchema),
  })
  .meta({ id: 'SpanOperationDocument', title: 'SpanOperation' });

export type OpField = z.infer<typeof opFieldSchema>;
export type OpJson = z.infer<typeof opSchema>;
