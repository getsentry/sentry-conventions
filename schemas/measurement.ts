import { z } from 'zod';

export const measurementSchema = z
  .strictObject({
    key: z.string(),
    full_name: z.string(),
    brief: z.string().optional(),
    unit: z.string(),
    platform: z.enum(['web', 'mobile']),
    attribute: z.string().optional(),
  })
  .meta({
    title: 'Sentry Span Measurement Schema',
    description: "Describes an measurement and it's fields",
  });

export type MeasurementJson = z.infer<typeof measurementSchema>;
