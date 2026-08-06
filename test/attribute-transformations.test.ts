import fs from 'node:fs';
import path from 'node:path';

import Ajv from 'ajv';
import { describe, expect, it } from 'vitest';

import attributeSchema from '../schemas/attribute.schema.json';
import transformationSchema from '../schemas/attribute_transformation.schema.json';
import type { AttributeJson, AttributeTransformationJson } from '../scripts/types';
import { attributeKeyToFileName } from '../scripts/utils';

const attributesFolder = path.resolve(__dirname, '../model/attributes');
const transformationsFolder = path.resolve(__dirname, '../model/attribute_transformations');

async function readAttribute(key: string): Promise<AttributeJson> {
  const fileName = attributeKeyToFileName(key);
  const filePath = key.includes('.')
    ? path.join(attributesFolder, key.split('.')[0] as string, fileName)
    : path.join(attributesFolder, fileName);
  return JSON.parse(await fs.promises.readFile(filePath, 'utf-8')) as AttributeJson;
}

async function readTransformations(): Promise<AttributeTransformationJson[]> {
  const filesIterator = fs.promises.glob(`${transformationsFolder}/*.json`);
  const files = await Array.fromAsync(filesIterator);
  return Promise.all(files.map(async (file) => JSON.parse(await fs.promises.readFile(file, 'utf-8'))));
}

describe('attribute transformations', async () => {
  const ajv = new Ajv();
  const transformationFiles = await Array.fromAsync(fs.promises.glob(`${transformationsFolder}/*.json`));
  const attributeFiles = await Array.fromAsync(fs.promises.glob(`${attributesFolder}/**/*.json`));

  it('all transformation documents follow the schema', async () => {
    for (const file of transformationFiles) {
      const transformation = JSON.parse(await fs.promises.readFile(file, 'utf-8')) as AttributeTransformationJson;

      ajv.validate(transformationSchema, transformation);

      expect(ajv.errors, file).toBe(null);
    }
  });

  it('transformation ids match their filenames', async () => {
    for (const file of transformationFiles) {
      const transformation = JSON.parse(await fs.promises.readFile(file, 'utf-8')) as AttributeTransformationJson;
      const fileName = path.basename(file, '.json');

      expect(transformation.id).toBe(fileName);
    }
  });

  it('transformation input and output attributes exist', async () => {
    const transformations = await readTransformations();

    for (const transformation of transformations) {
      for (const input of transformation.inputs) {
        await expect(
          readAttribute(input.attribute),
          `${transformation.id} input ${input.attribute}`,
        ).resolves.toBeDefined();
      }
      for (const output of transformation.outputs) {
        await expect(
          readAttribute(output.attribute),
          `${transformation.id} output ${output.attribute}`,
        ).resolves.toBeDefined();
      }
    }
  });

  it('transform deprecations reference existing transformations', async () => {
    const transformations = new Set((await readTransformations()).map((transformation) => transformation.id));

    for (const file of attributeFiles) {
      const attribute = JSON.parse(await fs.promises.readFile(file, 'utf-8')) as AttributeJson;
      if (attribute.deprecation?._status !== 'transform') {
        continue;
      }

      expect(attribute.deprecation.transformation, attribute.key).toBeDefined();
      expect(transformations.has(attribute.deprecation.transformation as string), attribute.key).toBe(true);
    }
  });

  it('transformations are referenced by their input attributes', async () => {
    for (const transformation of await readTransformations()) {
      for (const input of transformation.inputs) {
        const attribute = await readAttribute(input.attribute);

        expect(attribute.deprecation?._status, input.attribute).toBe('transform');
        expect(attribute.deprecation?.transformation, input.attribute).toBe(transformation.id);
      }
    }
  });

  it('transformation examples only contain declared inputs and outputs', async () => {
    for (const transformation of await readTransformations()) {
      const inputs = new Set(transformation.inputs.map((input) => input.attribute));
      const outputs = new Set(transformation.outputs.map((output) => output.attribute));

      for (const example of transformation.examples) {
        for (const key of Object.keys(example.input)) {
          expect(inputs.has(key), `${transformation.id} example ${example.name} input ${key}`).toBe(true);
        }
        for (const key of Object.keys(example.output)) {
          expect(outputs.has(key), `${transformation.id} example ${example.name} output ${key}`).toBe(true);
        }
      }
    }
  });

  it('attribute schema accepts transform deprecations only with a transformation id', () => {
    const attribute: AttributeJson = {
      key: 'example.old',
      brief: 'Old example attribute.',
      type: 'string',
      apply_scrubbing: { key: 'manual' },
      is_in_otel: false,
      visibility: 'public',
      deprecation: {
        _status: 'transform',
        replacement: 'example.new',
        transformation: 'example_old_to_new',
      },
    };

    ajv.validate(attributeSchema, attribute);

    expect(ajv.errors).toBe(null);
  });
});
