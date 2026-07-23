import fs from 'node:fs';
import path from 'node:path';
import { z } from 'zod';
import { schemaArtifacts } from '../schemas/artifacts';

export function generateSchemas(outputDirectory = path.join(__dirname, '..', 'schemas')): void {
  fs.mkdirSync(outputDirectory, { recursive: true });

  for (const artifact of schemaArtifacts) {
    const { fileName, schema } = artifact;
    const jsonSchema = z.toJSONSchema(schema, {
      target: 'draft-07',
      reused: 'ref',
      unrepresentable: 'throw',
    });
    const output =
      'rootDefinition' in artifact
        ? {
            $schema: jsonSchema.$schema,
            $ref: `#/definitions/${artifact.rootDefinition}`,
            definitions: {
              [artifact.rootDefinition]: Object.fromEntries(
                Object.entries(jsonSchema).filter(([key]) => key !== '$schema' && key !== 'definitions'),
              ),
              ...jsonSchema.definitions,
            },
          }
        : jsonSchema;
    fs.writeFileSync(path.join(outputDirectory, fileName), `${JSON.stringify(output, null, 2)}\n`);
  }
}
