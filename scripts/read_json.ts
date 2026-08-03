import fs from 'node:fs';
import { z } from 'zod';
import { formatZodError } from './format_zod_error';

function parseJson(source: string, sourceName: string): unknown {
  try {
    return JSON.parse(source);
  } catch (error) {
    const detail = error instanceof Error ? error.message : String(error);
    throw new Error(`Failed to parse JSON from ${sourceName}: ${detail}`, { cause: error });
  }
}

function validateJson<Schema extends z.ZodType>(value: unknown, schema: Schema, sourceName: string): z.output<Schema> {
  const result = schema.safeParse(value);
  if (!result.success) {
    throw new Error(`Invalid JSON in ${sourceName}:\n${formatZodError(result.error)}`);
  }
  return result.data;
}

export function readJsonFile<Schema extends z.ZodType>(filePath: string, schema: Schema): z.output<Schema> {
  return validateJson(parseJson(fs.readFileSync(filePath, 'utf-8'), filePath), schema, filePath);
}

export function parseJsonValue<Schema extends z.ZodType>(source: string, schema: Schema): z.output<Schema> {
  return validateJson(parseJson(source, 'command-line value'), schema, 'command-line value');
}
