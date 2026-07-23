import { z } from 'zod';

export const measurementSchema = z
  .strictObject({
    key: z.string().describe('The name of the measurement as sent in code, for ex. lcp'),
    full_name: z.string().describe('The full name of the measurement, for ex. largest contentful paint'),
    brief: z.string().describe('A description of the measurement').optional(),
    unit: z.string().describe('The unit of the measurement'),
    platform: z.enum(['web', 'mobile']).describe('What platform the measurement is collected in'),
    attribute: z.string().describe('The name of the attribute corresponding to this measurement').optional(),
  })
  .meta({
    title: 'Sentry Span Measurement Schema',
    description: "Describes an measurement and it's fields",
  });

export type MeasurementJson = z.infer<typeof measurementSchema>;
