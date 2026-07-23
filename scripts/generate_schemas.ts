import fs from 'node:fs';
import path from 'node:path';
import { z } from 'zod';
import { schemaArtifacts } from '../schemas/artifacts';

export function generateSchemas(outputDirectory = path.join(__dirname, '..', 'schemas')): void {
  fs.mkdirSync(outputDirectory, { recursive: true });

  for (const { fileName, schema } of schemaArtifacts) {
    const jsonSchema = z.toJSONSchema(schema, {
      target: 'draft-07',
      reused: 'ref',
      unrepresentable: 'throw',
    });
    fs.writeFileSync(path.join(outputDirectory, fileName), `${JSON.stringify(jsonSchema, null, 2)}\n`);
  }
}
