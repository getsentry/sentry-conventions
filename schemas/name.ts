import { z } from 'zod';

const sharedOperationShape = {
  name: z.string().optional(),
  brief: z.string(),
  ops: z.array(z.string()),
  templates: z.array(z.string()),
  examples: z.array(z.string()).optional(),
};

const otelNameOperationSchema = z
  .strictObject({
    ...sharedOperationShape,
    is_in_otel: z.literal(true),
    otel_notes: z.string(),
  })
  .meta({ id: 'OtelSpanOperation', title: 'SpanOperation' });

const nonOtelNameOperationSchema = z
  .strictObject({
    ...sharedOperationShape,
    is_in_otel: z.literal(false),
    otel_notes: z.string().optional(),
  })
  .meta({ id: 'NonOtelSpanOperation', title: 'SpanOperation' });

export const nameOperationSchema = z
  .union([otelNameOperationSchema, nonOtelNameOperationSchema])
  .meta({ id: 'SpanOperation', title: 'SpanOperation' });

export const nameSchema = z
  .strictObject({
    brief: z.string(),
    operations: z.array(nameOperationSchema),
  })
  .meta({ id: 'SpanName', title: 'SpanName' });

export type NameOperation = z.infer<typeof nameOperationSchema>;
export type NameJson = z.infer<typeof nameSchema>;
