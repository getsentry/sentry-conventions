# Schema Unification Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make modular Zod 4 schemas the single hand-written definition for all model JSON, derive TypeScript types and committed Draft 7 schemas from them, and validate every script input before use.

**Architecture:** Six focused modules under `schemas/` export strict Zod schemas and inferred input types. Astro consumes those schemas directly, scripts load files through one fail-fast validated reader, and a deterministic generator writes the existing Draft 7 artifacts for AJV and external consumers.

**Tech Stack:** TypeScript, Zod 4, Astro 6 content collections, AJV 8, Vitest 4, Yarn 1.22, Node.js 22.

## Global Constraints

- Keep all six existing `schemas/*.schema.json` paths and Draft 7 output.
- Every current `model/**/*.json` document must remain valid.
- Use current JSON Schema behavior as the compatibility baseline unless an existing CI test or contributor policy is stricter.
- Canonical input schemas must not coerce, transform, or default values.
- All modeled objects reject unknown properties.
- Cross-field rules must use Zod structures that `z.toJSONSchema` can emit; do not hide external rules in `.refine()` or `.superRefine()`.
- Script loading must throw immediately on malformed or schema-invalid JSON and include the source filename.
- Generated JavaScript and Python package types remain owned by their existing generators.
- Only execute commit steps if the user has explicitly authorized commits.

---

### Task 1: Add the shared schema foundation and non-attribute schemas

**Files:**
- Modify: `package.json`
- Modify: `yarn.lock`
- Create: `schemas/name.ts`
- Create: `schemas/description.ts`
- Create: `schemas/op.ts`
- Create: `schemas/measurement.ts`
- Create: `schemas/attribute-transformation.ts`
- Create: `schemas/index.ts`
- Create: `test/schema-definitions.test.ts`

**Interfaces:**
- Produces: `nameSchema`, `nameOperationSchema`, `descriptionSchema`, `descriptionOperationSchema`, `opSchema`, `opFieldSchema`, `measurementSchema`, `attributeTransformationSchema`
- Produces: inferred `NameJson`, `NameOperation`, `DescriptionJson`, `DescriptionOperation`, `OpJson`, `OpField`, `MeasurementJson`, `AttributeTransformationJson`, `AttributeTransformationAttributeReference`, and `AttributeTransformationExample`
- Consumes: nothing from later tasks

- [ ] **Step 1: Add Zod as a direct root development dependency**

Run:

```bash
yarn add --dev zod@^4
```

Expected: `package.json` lists `zod` under `devDependencies`, and `yarn.lock` remains on one compatible Zod 4 resolution shared with Astro.

- [ ] **Step 2: Write failing schema-definition tests**

Create `test/schema-definitions.test.ts`:

```ts
import { describe, expect, it } from 'vitest';
import {
  attributeTransformationSchema,
  descriptionSchema,
  measurementSchema,
  nameSchema,
  opSchema,
} from '../schemas';

describe('nameSchema', () => {
  const baseOperation = {
    brief: 'HTTP client span',
    ops: ['http.client'],
    templates: ['{method}'],
  };

  it('requires OTel notes for OTel operations', () => {
    expect(
      nameSchema.safeParse({
        brief: 'HTTP names',
        operations: [{ ...baseOperation, is_in_otel: true }],
      }).success,
    ).toBe(false);
    expect(
      nameSchema.safeParse({
        brief: 'HTTP names',
        operations: [{ ...baseOperation, is_in_otel: true, otel_notes: '' }],
      }).success,
    ).toBe(true);
  });

  it('rejects unknown fields', () => {
    expect(
      nameSchema.safeParse({
        brief: 'HTTP names',
        operations: [{ ...baseOperation, is_in_otel: false, unexpected: true }],
      }).success,
    ).toBe(false);
  });
});

describe('descriptionSchema', () => {
  const operation = {
    brief: 'HTTP description',
    ops: ['http.client'],
    templates: ['{{http.request.method}}'],
  };

  it.each([
    { brief: 'Descriptions', operations: [] },
    { brief: 'Descriptions', operations: [{ ...operation, ops: [] }] },
    { brief: 'Descriptions', operations: [{ ...operation, templates: [] }] },
  ])('rejects empty required arrays: %#', (value) => {
    expect(descriptionSchema.safeParse(value).success).toBe(false);
  });
});

describe('opSchema', () => {
  it('accepts the existing op shape and rejects unknown fields', () => {
    expect(opSchema.safeParse({ name: 'http', fields: [{ name: 'http.client' }] }).success).toBe(true);
    expect(opSchema.safeParse({ name: 'http', fields: [], unexpected: true }).success).toBe(false);
  });
});

describe('measurementSchema', () => {
  it('accepts supported platforms only', () => {
    const base = { key: 'lcp', full_name: 'largest contentful paint', unit: 'millisecond' };
    expect(measurementSchema.safeParse({ ...base, platform: 'web' }).success).toBe(true);
    expect(measurementSchema.safeParse({ ...base, platform: 'desktop' }).success).toBe(false);
  });
});

describe('attributeTransformationSchema', () => {
  const valid = {
    id: 'old_to_new',
    brief: 'Convert old to new',
    inputs: [{ attribute: 'example.old' }],
    outputs: [{ attribute: 'example.new' }],
    actions: ['Copy the value'],
    examples: [{ name: 'copy', input: { 'example.old': 1 }, output: { 'example.new': 1 } }],
  };

  it('accepts a complete transformation', () => {
    expect(attributeTransformationSchema.safeParse(valid).success).toBe(true);
  });

  it.each([
    { ...valid, id: 'Old-To-New' },
    { ...valid, inputs: [] },
    { ...valid, outputs: [] },
    { ...valid, actions: [] },
    { ...valid, examples: [] },
  ])('rejects an invalid transformation: %#', (value) => {
    expect(attributeTransformationSchema.safeParse(value).success).toBe(false);
  });
});
```

- [ ] **Step 3: Run the focused test and verify it fails**

Run:

```bash
yarn vitest run test/schema-definitions.test.ts
```

Expected: FAIL because `../schemas` and its exports do not exist.

- [ ] **Step 4: Implement the name schema**

Create `schemas/name.ts`:

```ts
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
```

- [ ] **Step 5: Implement the description schema**

Create `schemas/description.ts`:

```ts
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
```

- [ ] **Step 6: Implement the op and measurement schemas**

Create `schemas/op.ts`:

```ts
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
```

Create `schemas/measurement.ts`:

```ts
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
```

- [ ] **Step 7: Implement the attribute-transformation schema**

Create `schemas/attribute-transformation.ts`:

```ts
import { z } from 'zod';

export const attributeTransformationAttributeReferenceSchema = z
  .strictObject({
    attribute: z.string(),
    brief: z.string().optional(),
  })
  .meta({ id: 'AttributeReference', title: 'AttributeReference' });

export const attributeTransformationExampleSchema = z
  .strictObject({
    name: z.string(),
    input: z.record(z.string(), z.unknown()),
    output: z.record(z.string(), z.unknown()),
  })
  .meta({ id: 'TransformationExample', title: 'TransformationExample' });

export const attributeTransformationSchema = z
  .strictObject({
    id: z.string().regex(/^[a-z0-9_]+$/),
    brief: z.string(),
    inputs: z.array(attributeTransformationAttributeReferenceSchema).min(1),
    outputs: z.array(attributeTransformationAttributeReferenceSchema).min(1),
    actions: z.array(z.string()).min(1),
    examples: z.array(attributeTransformationExampleSchema).min(1),
  })
  .meta({
    title: 'Sentry Attribute Transformation Schema',
    description:
      'Describes how one or more deprecated attributes are transformed into replacement attributes',
  });

export type AttributeTransformationAttributeReference = z.infer<
  typeof attributeTransformationAttributeReferenceSchema
>;
export type AttributeTransformationExample = z.infer<typeof attributeTransformationExampleSchema>;
export type AttributeTransformationJson = z.infer<typeof attributeTransformationSchema>;
```

- [ ] **Step 8: Add the schema barrel**

Create `schemas/index.ts`:

```ts
export * from './attribute-transformation';
export * from './description';
export * from './measurement';
export * from './name';
export * from './op';
```

- [ ] **Step 9: Run the focused tests**

Run:

```bash
yarn vitest run test/schema-definitions.test.ts
```

Expected: PASS.

- [ ] **Step 10: Commit the schema foundation if commits are authorized**

```bash
git add package.json yarn.lock schemas test/schema-definitions.test.ts
git commit -m "feat(schema): add shared model schemas"
```

---

### Task 2: Implement the canonical attribute schema

**Files:**
- Create: `schemas/attribute.ts`
- Modify: `schemas/index.ts`
- Create: `test/attribute-schema.test.ts`

**Interfaces:**
- Produces: `attributeSchema`, `attributeValueSchema`, `attributeTypeSchema`
- Produces: `AttributeJson`, `AttributeValue`, `AttributeType`, and `ChangelogEntry`
- Consumes: no later-task interfaces

- [ ] **Step 1: Write the attribute branch tests**

Create `test/attribute-schema.test.ts`:

```ts
import { describe, expect, it } from 'vitest';
import { attributeSchema } from '../schemas';

const base = {
  key: 'test.attribute',
  brief: 'Test attribute',
  apply_scrubbing: { key: 'never' },
  is_in_otel: false,
  visibility: 'public',
} as const;

describe('attributeSchema', () => {
  it.each([
    ['string', 'value'],
    ['boolean', true],
    ['integer', 1.5],
    ['double', 1.5],
    ['string[]', ['a']],
    ['boolean[]', [true]],
    ['integer[]', [1]],
    ['double[]', [1.5]],
    ['any', ['still', 'the', 'existing', 'domain']],
  ])('accepts matching %s examples', (type, example) => {
    expect(attributeSchema.safeParse({ ...base, type, example }).success).toBe(true);
    expect(attributeSchema.safeParse({ ...base, type, examples: [example] }).success).toBe(true);
  });

  it.each([
    ['string', 1],
    ['boolean', 'true'],
    ['integer', '1'],
    ['double', false],
    ['string[]', [1]],
    ['boolean[]', ['true']],
    ['integer[]', ['1']],
    ['double[]', [false]],
  ])('rejects mismatched %s examples', (type, example) => {
    expect(attributeSchema.safeParse({ ...base, type, example }).success).toBe(false);
    expect(attributeSchema.safeParse({ ...base, type, examples: [example] }).success).toBe(false);
  });

  it('allows no examples for non-dynamic attributes', () => {
    expect(attributeSchema.safeParse({ ...base, type: 'string' }).success).toBe(true);
  });

  it('rejects singular and plural examples together', () => {
    expect(
      attributeSchema.safeParse({ ...base, type: 'string', example: 'one', examples: ['two'] }).success,
    ).toBe(false);
  });

  it('rejects an empty outer examples list', () => {
    expect(attributeSchema.safeParse({ ...base, type: 'string', examples: [] }).success).toBe(false);
  });

  it('accepts an empty array-valued example', () => {
    expect(attributeSchema.safeParse({ ...base, type: 'string[]', examples: [[]] }).success).toBe(true);
  });

  it('requires string examples for dynamic suffixes', () => {
    const dynamic = { ...base, key: 'test.<key>', type: 'integer', has_dynamic_suffix: true };
    expect(attributeSchema.safeParse(dynamic).success).toBe(false);
    expect(attributeSchema.safeParse({ ...dynamic, example: 'suffix' }).success).toBe(true);
    expect(attributeSchema.safeParse({ ...dynamic, example: 1 }).success).toBe(false);
  });

  it('requires a transformation id for transform deprecations', () => {
    const attribute = {
      ...base,
      type: 'string',
      deprecation: { _status: 'transform', replacement: 'test.replacement' },
    };
    expect(attributeSchema.safeParse(attribute).success).toBe(false);
    expect(
      attributeSchema.safeParse({
        ...attribute,
        deprecation: { ...attribute.deprecation, transformation: 'test_to_replacement' },
      }).success,
    ).toBe(true);
  });

  it('rejects unknown properties', () => {
    expect(attributeSchema.safeParse({ ...base, type: 'string', unknown: true }).success).toBe(false);
  });
});
```

- [ ] **Step 2: Run the attribute tests and verify they fail**

Run:

```bash
yarn vitest run test/attribute-schema.test.ts
```

Expected: FAIL because `attributeSchema` is not exported.

- [ ] **Step 3: Implement the attribute schema with structural branches**

Create `schemas/attribute.ts`:

```ts
import { z } from 'zod';

export const attributeTypeSchema = z.enum([
  'string',
  'boolean',
  'integer',
  'double',
  'string[]',
  'boolean[]',
  'integer[]',
  'double[]',
  'any',
]);

export const attributeValueSchema = z.union([
  z.string(),
  z.boolean(),
  z.number(),
  z.array(z.string()),
  z.array(z.boolean()),
  z.array(z.number()),
]);

const applyScrubbingSchema = z.strictObject({
  key: z.enum(['auto', 'manual', 'never']),
  reason: z.string().optional(),
});

const ordinaryDeprecationSchema = z.strictObject({
  replacement: z.string().optional(),
  reason: z.string().optional(),
  _status: z.union([z.literal('backfill'), z.literal('normalize'), z.null()]),
  transformation: z.string().optional(),
});

const transformDeprecationSchema = z.strictObject({
  replacement: z.string().optional(),
  reason: z.string().optional(),
  _status: z.literal('transform'),
  transformation: z.string(),
});

const deprecationSchema = z.union([ordinaryDeprecationSchema, transformDeprecationSchema]);

export const changelogEntrySchema = z.strictObject({
  version: z.string(),
  prs: z.array(z.number().int().positive()).optional(),
  description: z.string().optional(),
});

const commonAttributeShape = {
  key: z.string(),
  brief: z.string(),
  apply_scrubbing: applyScrubbingSchema,
  is_in_otel: z.boolean(),
  visibility: z.enum(['public', 'internal']),
  deprecation: deprecationSchema.optional(),
  alias: z.array(z.string()).optional(),
  additional_context: z.array(z.string()).optional(),
  changelog: z.array(changelogEntrySchema).optional(),
};

function staticAttributeVariants<const Type extends string, Value extends z.ZodType>(
  type: Type,
  valueSchema: Value,
) {
  const shape = {
    ...commonAttributeShape,
    has_dynamic_suffix: z.literal(false).optional(),
    type: z.literal(type),
  };
  return [
    z.strictObject(shape),
    z.strictObject({ ...shape, example: valueSchema }),
    z.strictObject({ ...shape, examples: z.array(valueSchema).min(1) }),
  ] as const;
}

const dynamicAttributeShape = {
  ...commonAttributeShape,
  has_dynamic_suffix: z.literal(true),
  type: attributeTypeSchema,
};

export const attributeSchema = z
  .union([
    ...staticAttributeVariants('string', z.string()),
    ...staticAttributeVariants('boolean', z.boolean()),
    ...staticAttributeVariants('integer', z.number()),
    ...staticAttributeVariants('double', z.number()),
    ...staticAttributeVariants('string[]', z.array(z.string())),
    ...staticAttributeVariants('boolean[]', z.array(z.boolean())),
    ...staticAttributeVariants('integer[]', z.array(z.number())),
    ...staticAttributeVariants('double[]', z.array(z.number())),
    ...staticAttributeVariants('any', attributeValueSchema),
    z.strictObject({ ...dynamicAttributeShape, example: z.string() }),
    z.strictObject({ ...dynamicAttributeShape, examples: z.array(z.string()).min(1) }),
  ])
  .meta({
    title: 'Sentry Span Attribute Schema',
    description: "Describes an attribute and how it's meant to be used",
  });

export type AttributeType = z.infer<typeof attributeTypeSchema>;
export type AttributeValue = z.infer<typeof attributeValueSchema>;
export type ChangelogEntry = z.infer<typeof changelogEntrySchema>;
export type AttributeJson = z.infer<typeof attributeSchema>;
```

- [ ] **Step 4: Export the attribute schema**

Add to `schemas/index.ts`:

```ts
export * from './attribute';
```

- [ ] **Step 5: Run the attribute and foundation tests**

Run:

```bash
yarn vitest run test/attribute-schema.test.ts test/schema-definitions.test.ts
```

Expected: PASS.

- [ ] **Step 6: Commit the canonical attribute schema if commits are authorized**

```bash
git add schemas/attribute.ts schemas/index.ts test/attribute-schema.test.ts
git commit -m "feat(schema): define canonical attribute schema"
```

---

### Task 3: Add fail-fast model loading and migrate script types

**Files:**
- Create: `scripts/read_json.ts`
- Create: `test/read-json.test.ts`
- Modify: `scripts/generate_attributes.ts`
- Modify: `scripts/generate_op.ts`
- Modify: `scripts/generate_attribute_changelog.ts`
- Modify: `scripts/clear_attribute_changelog.ts`
- Modify: `scripts/bump_attribute_changelog.ts`
- Modify: `scripts/create_attribute.ts`
- Modify: `scripts/attribute_examples.ts`
- Modify: `test/attributes.test.ts`
- Modify: `test/name.test.ts`
- Modify: `test/description.test.ts`
- Modify: `test/validate-measurements.test.ts`
- Modify: `test/attribute-transformations.test.ts`
- Delete: `scripts/types.ts`

**Interfaces:**
- Consumes: all schemas and inferred types from Tasks 1–2
- Produces: `readJsonFile<Schema extends z.ZodType>(filePath: string, schema: Schema): z.output<Schema>`
- Produces: `parseJsonValue<Schema extends z.ZodType>(source: string, schema: Schema): z.output<Schema>` for CLI JSON values

- [ ] **Step 1: Write failing loader tests**

Create `test/read-json.test.ts`:

```ts
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';
import { z } from 'zod';
import { parseJsonValue, readJsonFile } from '../scripts/read_json';

const tempDirs: string[] = [];

function writeTempFile(name: string, content: string): string {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'sentry-conventions-'));
  tempDirs.push(directory);
  const filePath = path.join(directory, name);
  fs.writeFileSync(filePath, content);
  return filePath;
}

afterEach(() => {
  for (const directory of tempDirs.splice(0)) {
    fs.rmSync(directory, { recursive: true, force: true });
  }
});

describe('readJsonFile', () => {
  const schema = z.strictObject({ key: z.string() });

  it('returns validated data', () => {
    const filePath = writeTempFile('valid.json', '{"key":"value"}');
    expect(readJsonFile(filePath, schema)).toEqual({ key: 'value' });
  });

  it('throws with the filename and property path for invalid data', () => {
    const filePath = writeTempFile('invalid.json', '{"key":42}');
    expect(() => readJsonFile(filePath, schema)).toThrow(filePath);
    expect(() => readJsonFile(filePath, schema)).toThrow(/key/);
  });

  it('throws with the filename and syntax context for malformed JSON', () => {
    const filePath = writeTempFile('malformed.json', '{"key":');
    expect(() => readJsonFile(filePath, schema)).toThrow(filePath);
    expect(() => readJsonFile(filePath, schema)).toThrow(/JSON/);
  });
});

describe('parseJsonValue', () => {
  it('validates CLI JSON without a type assertion', () => {
    expect(parseJsonValue('["one"]', z.array(z.string()).min(1))).toEqual(['one']);
    expect(() => parseJsonValue('[]', z.array(z.string()).min(1))).toThrow();
  });
});
```

- [ ] **Step 2: Run the loader test and verify it fails**

Run:

```bash
yarn vitest run test/read-json.test.ts
```

Expected: FAIL because `scripts/read_json.ts` does not exist.

- [ ] **Step 3: Implement the validated JSON helpers**

Create `scripts/read_json.ts`:

```ts
import fs from 'node:fs';
import { z } from 'zod';

function parseJson(source: string, sourceName: string): unknown {
  try {
    return JSON.parse(source);
  } catch (error) {
    const detail = error instanceof Error ? error.message : String(error);
    throw new Error(`Failed to parse JSON from ${sourceName}: ${detail}`, { cause: error });
  }
}

function validateJson<Schema extends z.ZodType>(
  value: unknown,
  schema: Schema,
  sourceName: string,
): z.output<Schema> {
  const result = schema.safeParse(value);
  if (!result.success) {
    throw new Error(`Invalid JSON in ${sourceName}:\n${z.prettifyError(result.error)}`);
  }
  return result.data;
}

export function readJsonFile<Schema extends z.ZodType>(
  filePath: string,
  schema: Schema,
): z.output<Schema> {
  return validateJson(parseJson(fs.readFileSync(filePath, 'utf-8'), filePath), schema, filePath);
}

export function parseJsonValue<Schema extends z.ZodType>(
  source: string,
  schema: Schema,
): z.output<Schema> {
  return validateJson(parseJson(source, 'command-line value'), schema, 'command-line value');
}
```

- [ ] **Step 4: Run the loader tests**

Run:

```bash
yarn vitest run test/read-json.test.ts
```

Expected: PASS.

- [ ] **Step 5: Migrate attribute and op generators**

In `scripts/generate_attributes.ts`:

```ts
import { attributeSchema, type AttributeJson } from '../schemas';
import { readJsonFile } from './read_json';
```

Replace all three attribute reads with:

```ts
const attributeJson = readJsonFile(attributePath, attributeSchema);
```

Keep `AttributeJson` only where function signatures need the inferred type.

In `scripts/generate_op.ts`:

```ts
import { opSchema } from '../schemas';
import { readJsonFile } from './read_json';
```

Replace both untyped op reads with:

```ts
const opJson = readJsonFile(opPath, opSchema);
```

- [ ] **Step 6: Migrate changelog maintenance scripts**

In `scripts/generate_attribute_changelog.ts`, import:

```ts
import { attributeSchema, type ChangelogEntry } from '../schemas';
import { readJsonFile } from './read_json';
```

Delete the local `ChangelogEntry` interface and replace its attribute read with:

```ts
const attributeJson = readJsonFile(filePath, attributeSchema);
```

In `scripts/clear_attribute_changelog.ts`, import:

```ts
import { attributeSchema } from '../schemas';
import { readJsonFile } from './read_json';
```

In `scripts/bump_attribute_changelog.ts`, import:

```ts
import {
  attributeSchema,
  type AttributeJson,
  type ChangelogEntry,
} from '../schemas';
import { readJsonFile } from './read_json';
```

Replace every `fs.readFile` plus typed `JSON.parse` pair with:

```ts
const json = readJsonFile(filePath, attributeSchema);
```

Keep the inferred `AttributeJson` import only for indexed helper types such as:

```ts
type Changelog = NonNullable<AttributeJson['changelog']>;
```

In `scripts/bump_attribute_changelog.ts`, remove `type ChangelogEntry` from the import sourced from `./generate_attribute_changelog`; use the inferred schema export above instead.

- [ ] **Step 7: Migrate attribute creation and example parsing**

In `scripts/attribute_examples.ts`, import:

```ts
import { z } from 'zod';
import { attributeValueSchema, type AttributeJson, type AttributeValue } from '../schemas';
import { parseJsonValue } from './read_json';
```

Replace `parseAttributeExamples` with:

```ts
export function parseAttributeExamples(value: string): AttributeValue[] {
  try {
    return parseJsonValue(value, z.array(attributeValueSchema).min(1));
  } catch {
    throw new Error('Examples must be provided as a non-empty JSON array');
  }
}
```

In `scripts/create_attribute.ts`:

```ts
import { attributeSchema, attributeValueSchema, type AttributeValue } from '../schemas';
import { parseJsonValue } from './read_json';
```

Replace the AJV/file-based `validateSchema` implementation with:

```ts
const validateSchema = (data: unknown) => {
  const result = attributeSchema.safeParse(data);
  if (!result.success) {
    throw new Error(`Invalid attribute data:\n${z.prettifyError(result.error)}`);
  }
};
```

Add `import { z } from 'zod';`, remove the AJV import, and parse legacy array-valued `--example` input with:

```ts
exampleValue = parseJsonValue(example, attributeValueSchema);
```

- [ ] **Step 8: Migrate tests to inferred types and validated reads**

Use these imports in the existing model tests:

```ts
import {
  attributeSchema,
  attributeTransformationSchema,
  descriptionSchema,
  measurementSchema,
  nameSchema,
  type AttributeJson,
  type AttributeTransformationJson,
  type DescriptionJson,
  type NameJson,
} from '../schemas';
import { readJsonFile } from '../scripts/read_json';
```

Replace typed `JSON.parse` reads with the matching call:

```ts
const content = readJsonFile(file, attributeSchema);
const content = readJsonFile(file, nameSchema);
const content = readJsonFile(file, descriptionSchema);
const content = readJsonFile(file, measurementSchema);
const content = readJsonFile(file, attributeTransformationSchema);
```

Retain existing policy and cross-document assertions. AJV imports remain temporarily and continue validating the committed JSON Schema files until Task 4 replaces those files with generated artifacts.

- [ ] **Step 9: Delete the duplicate type file and prove no imports remain**

Delete `scripts/types.ts`.

Run:

```bash
rg "scripts/types|from './types'|from '../scripts/types'" scripts test docs
```

Expected: no matches.

- [ ] **Step 10: Run script and model tests**

Run:

```bash
yarn vitest run test/read-json.test.ts test/attribute-schema.test.ts test/schema-definitions.test.ts test/attributes.test.ts test/name.test.ts test/description.test.ts test/validate-measurements.test.ts test/attribute-transformations.test.ts test/generate_attributes.test.ts
```

Expected: PASS.

- [ ] **Step 11: Commit validated script loading if commits are authorized**

```bash
git add scripts schemas test
git commit -m "ref(scripts): validate model JSON with shared schemas"
```

---

### Task 4: Generate Draft 7 schemas and enforce Zod/AJV parity

**Files:**
- Create: `schemas/artifacts.ts`
- Create: `scripts/generate_schemas.ts`
- Modify: `scripts/generate.ts`
- Regenerate: `schemas/attribute.schema.json`
- Regenerate: `schemas/name.schema.json`
- Regenerate: `schemas/description.schema.json`
- Regenerate: `schemas/op.schema.json`
- Regenerate: `schemas/measurements.schema.json`
- Regenerate: `schemas/attribute_transformation.schema.json`
- Create: `test/schema-generation.test.ts`
- Create: `test/schema-parity.test.ts`
- Create: `test/op.test.ts`

**Interfaces:**
- Consumes: canonical schemas from Tasks 1–2
- Produces: `schemaArtifacts`
- Produces: `generateSchemas(outputDirectory?: string): void`
- Produces: deterministic committed Draft 7 artifacts

- [ ] **Step 1: Write failing generation and op tests**

Create `test/schema-generation.test.ts`:

```ts
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import Ajv from 'ajv';
import { afterEach, describe, expect, it } from 'vitest';
import { generateSchemas } from '../scripts/generate_schemas';
import { schemaArtifacts } from '../schemas/artifacts';

const tempDirs: string[] = [];
const expectedMetadata: Record<string, { title: string; description?: string }> = {
  'attribute.schema.json': {
    title: 'Sentry Span Attribute Schema',
    description: "Describes an attribute and how it's meant to be used",
  },
  'name.schema.json': { title: 'SpanName' },
  'description.schema.json': { title: 'SpanDescription' },
  'op.schema.json': { title: 'SpanOperation' },
  'measurements.schema.json': {
    title: 'Sentry Span Measurement Schema',
    description: "Describes an measurement and it's fields",
  },
  'attribute_transformation.schema.json': {
    title: 'Sentry Attribute Transformation Schema',
    description:
      'Describes how one or more deprecated attributes are transformed into replacement attributes',
  },
};

afterEach(() => {
  for (const directory of tempDirs.splice(0)) {
    fs.rmSync(directory, { recursive: true, force: true });
  }
});

describe('generateSchemas', () => {
  it('writes deterministic valid Draft 7 artifacts', () => {
    const first = fs.mkdtempSync(path.join(os.tmpdir(), 'schemas-first-'));
    const second = fs.mkdtempSync(path.join(os.tmpdir(), 'schemas-second-'));
    tempDirs.push(first, second);

    generateSchemas(first);
    generateSchemas(second);

    for (const { fileName } of schemaArtifacts) {
      const firstText = fs.readFileSync(path.join(first, fileName), 'utf-8');
      const secondText = fs.readFileSync(path.join(second, fileName), 'utf-8');
      expect(firstText).toBe(secondText);
      expect(firstText.endsWith('\n')).toBe(true);
      const schema = JSON.parse(firstText);
      expect(schema.$schema).toBe('http://json-schema.org/draft-07/schema#');
      expect(schema.title).toBe(expectedMetadata[fileName]?.title);
      expect(schema.description).toBe(expectedMetadata[fileName]?.description);
      expect(() => new Ajv().compile(schema)).not.toThrow();
    }
  });
});
```

Create `test/op.test.ts`:

```ts
import fs from 'node:fs';
import path from 'node:path';
import Ajv from 'ajv';
import { describe, expect, it } from 'vitest';
import opJsonSchema from '../schemas/op.schema.json';
import { opSchema } from '../schemas';
import { readJsonFile } from '../scripts/read_json';

const opFolder = path.resolve(__dirname, '../model/op');

describe('op JSON', async () => {
  const files = await Array.fromAsync(fs.promises.glob(`${opFolder}/*.json`));

  for (const file of files) {
    it(`${path.basename(file)} follows the canonical and generated schemas`, () => {
      const content = readJsonFile(file, opSchema);
      expect(new Ajv().validate(opJsonSchema, content)).toBe(true);
    });
  }
});
```

- [ ] **Step 2: Run the generation tests and verify they fail**

Run:

```bash
yarn vitest run test/schema-generation.test.ts test/op.test.ts
```

Expected: generation test FAIL because the generator and artifact registry do not exist; op test PASS.

- [ ] **Step 3: Add the artifact registry**

Create `schemas/artifacts.ts`:

```ts
import { attributeSchema } from './attribute';
import { attributeTransformationSchema } from './attribute-transformation';
import { descriptionSchema } from './description';
import { measurementSchema } from './measurement';
import { nameSchema } from './name';
import { opSchema } from './op';

export const schemaArtifacts = [
  { fileName: 'attribute.schema.json', schema: attributeSchema },
  { fileName: 'name.schema.json', schema: nameSchema },
  { fileName: 'description.schema.json', schema: descriptionSchema },
  { fileName: 'op.schema.json', schema: opSchema },
  { fileName: 'measurements.schema.json', schema: measurementSchema },
  { fileName: 'attribute_transformation.schema.json', schema: attributeTransformationSchema },
] as const;
```

- [ ] **Step 4: Implement deterministic Draft 7 generation**

Create `scripts/generate_schemas.ts`:

```ts
import fs from 'node:fs';
import path from 'node:path';
import { z } from 'zod';
import { schemaArtifacts } from '../schemas/artifacts';

export function generateSchemas(
  outputDirectory = path.join(__dirname, '..', 'schemas'),
): void {
  fs.mkdirSync(outputDirectory, { recursive: true });

  for (const { fileName, schema } of schemaArtifacts) {
    const jsonSchema = z.toJSONSchema(schema, {
      target: 'draft-07',
      reused: 'ref',
      unrepresentable: 'throw',
    });
    fs.writeFileSync(
      path.join(outputDirectory, fileName),
      `${JSON.stringify(jsonSchema, null, 2)}\n`,
    );
  }
}
```

- [ ] **Step 5: Wire schema generation before package generation**

Replace `scripts/generate.ts` with:

```ts
import { generateSchemas } from './generate_schemas';
import { generateAttributes } from './generate_attributes';
import { generateOps } from './generate_op';

async function generate() {
  generateSchemas();
  await generateOps();
  await generateAttributes();
}

generate().catch((error) => {
  console.error(error);
  process.exit(1);
});
```

Keep the root `generate` script as:

```json
"generate": "tsx scripts/generate.ts && yarn format"
```

- [ ] **Step 6: Run schema generation and inspect the artifact diff**

Run:

```bash
yarn generate
git diff -- schemas
```

Expected: all six JSON files are regenerated as Draft 7. Review that required fields, strict objects, enums, non-empty arrays, attribute branches, transformation requirements, and OTel-note requirements remain represented.

- [ ] **Step 7: Add Zod/AJV parity tests**

Create `test/schema-parity.test.ts`:

```ts
import Ajv from 'ajv';
import { describe, expect, it } from 'vitest';
import attributeJsonSchema from '../schemas/attribute.schema.json';
import descriptionJsonSchema from '../schemas/description.schema.json';
import measurementJsonSchema from '../schemas/measurements.schema.json';
import nameJsonSchema from '../schemas/name.schema.json';
import opJsonSchema from '../schemas/op.schema.json';
import transformationJsonSchema from '../schemas/attribute_transformation.schema.json';
import {
  attributeSchema,
  attributeTransformationSchema,
  descriptionSchema,
  measurementSchema,
  nameSchema,
  opSchema,
} from '../schemas';

type SafeParser = {
  safeParse(value: unknown): { success: boolean };
};

function expectParity(zodSchema: SafeParser, jsonSchema: object, value: unknown) {
  const zodResult = zodSchema.safeParse(value).success;
  const ajvResult = new Ajv().validate(jsonSchema, value) as boolean;
  expect(ajvResult).toBe(zodResult);
}

const baseAttribute = {
  key: 'test.attribute',
  brief: 'Test attribute',
  type: 'string',
  apply_scrubbing: { key: 'never' },
  is_in_otel: false,
  visibility: 'public',
};

const matchingExamples: Array<[string, unknown]> = [
  ['string', 'value'],
  ['boolean', true],
  ['integer', 1.5],
  ['double', 1.5],
  ['string[]', ['value']],
  ['boolean[]', [true]],
  ['integer[]', [1]],
  ['double[]', [1.5]],
  ['any', ['existing', 'attribute', 'value']],
];

const mismatchedExamples: Array<[string, unknown]> = [
  ['string', 1],
  ['boolean', 'true'],
  ['integer', '1'],
  ['double', false],
  ['string[]', [1]],
  ['boolean[]', ['true']],
  ['integer[]', ['1']],
  ['double[]', [false]],
  ['any', { arbitrary: 'object' }],
];

const attributeFixtures = [
  baseAttribute,
  ...matchingExamples.flatMap(([type, example]) => [
    { ...baseAttribute, type, example },
    { ...baseAttribute, type, examples: [example] },
  ]),
  ...mismatchedExamples.flatMap(([type, example]) => [
    { ...baseAttribute, type, example },
    { ...baseAttribute, type, examples: [example] },
  ]),
  { ...baseAttribute, examples: [] },
  { ...baseAttribute, example: 'one', examples: ['two'] },
  { ...baseAttribute, unknown: true },
  { ...baseAttribute, brief: undefined },
  { ...baseAttribute, type: 'string[]', examples: [[]] },
  { ...baseAttribute, key: 'test.<key>', has_dynamic_suffix: true },
  { ...baseAttribute, key: 'test.<key>', has_dynamic_suffix: true, example: 'suffix' },
  { ...baseAttribute, key: 'test.<key>', has_dynamic_suffix: true, example: 1 },
  {
    ...baseAttribute,
    deprecation: { _status: 'transform', replacement: 'test.replacement' },
  },
  {
    ...baseAttribute,
    deprecation: {
      _status: 'transform',
      replacement: 'test.replacement',
      transformation: 'test_to_replacement',
    },
  },
];

const nameOperation = {
  brief: 'HTTP',
  is_in_otel: false,
  ops: ['http.client'],
  templates: ['HTTP'],
};

const descriptionOperation = {
  brief: 'HTTP',
  ops: ['http.client'],
  templates: ['{{http.request.method}}'],
};

const transformation = {
  id: 'old_to_new',
  brief: 'Convert',
  inputs: [{ attribute: 'old' }],
  outputs: [{ attribute: 'new' }],
  actions: ['Copy'],
  examples: [{ name: 'copy', input: { old: 1 }, output: { new: 1 } }],
};

describe('generated schema parity', () => {
  it.each(attributeFixtures)('matches attribute validation for fixture %#', (value) => {
    expectParity(attributeSchema, attributeJsonSchema, value);
  });

  it.each([
    { brief: 'HTTP names', operations: [nameOperation] },
    {
      brief: 'HTTP names',
      operations: [{ ...nameOperation, is_in_otel: true, otel_notes: '' }],
    },
    {
      brief: 'HTTP names',
      operations: [{ ...nameOperation, is_in_otel: true, otel_notes: undefined }],
    },
    {
      brief: 'HTTP names',
      operations: [{ ...nameOperation, unexpected: true }],
    },
    { operations: [nameOperation] },
  ])('matches name validation for fixture %#', (value) => {
    expectParity(nameSchema, nameJsonSchema, value);
  });

  it.each([
    { brief: 'Descriptions', operations: [descriptionOperation] },
    { brief: 'Descriptions', operations: [] },
    { brief: 'Descriptions', operations: [{ ...descriptionOperation, ops: [] }] },
    { brief: 'Descriptions', operations: [{ ...descriptionOperation, templates: [] }] },
    { brief: 'Descriptions', operations: [{ ...descriptionOperation, unexpected: true }] },
    { operations: [descriptionOperation] },
  ])('matches description validation for fixture %#', (value) => {
    expectParity(descriptionSchema, descriptionJsonSchema, value);
  });

  it.each([
    transformation,
    { ...transformation, id: 'Old-To-New' },
    { ...transformation, inputs: [] },
    { ...transformation, outputs: [] },
    { ...transformation, actions: [] },
    { ...transformation, examples: [] },
    { ...transformation, unexpected: true },
    { ...transformation, brief: undefined },
  ])('matches transformation validation for fixture %#', (value) => {
    expectParity(attributeTransformationSchema, transformationJsonSchema, value);
  });

  it.each([
    {
      key: 'lcp',
      full_name: 'largest contentful paint',
      unit: 'millisecond',
      platform: 'web',
    },
    {
      key: 'lcp',
      full_name: 'largest contentful paint',
      unit: 'millisecond',
      platform: 'desktop',
    },
    {
      full_name: 'largest contentful paint',
      unit: 'millisecond',
      platform: 'web',
    },
    {
      key: 'lcp',
      full_name: 'largest contentful paint',
      unit: 'millisecond',
      platform: 'web',
      unexpected: true,
    },
  ])('matches measurement validation for fixture %#', (value) => {
    expectParity(measurementSchema, measurementJsonSchema, value);
  });

  it.each([
    { name: 'http', fields: [{ name: 'http.client' }] },
    { name: 'http', fields: [] },
    { fields: [{ name: 'http.client' }] },
    { name: 'http', fields: [{ description: 'missing name' }] },
    { name: 'http', fields: [], unexpected: true },
  ])('matches op validation for fixture %#', (value) => {
    expectParity(opSchema, opJsonSchema, value);
  });
});
```

- [ ] **Step 8: Run generation, parity, and model tests**

Run:

```bash
yarn vitest run test/schema-generation.test.ts test/schema-parity.test.ts test/op.test.ts test/attributes.test.ts test/name.test.ts test/description.test.ts test/validate-measurements.test.ts test/attribute-transformations.test.ts
```

Expected: PASS.

- [ ] **Step 9: Prove committed artifacts are current**

Run:

```bash
git diff -- schemas javascript/sentry-conventions/src python/src/sentry_conventions rust/src > /tmp/generated-before.diff
yarn generate
git diff -- schemas javascript/sentry-conventions/src python/src/sentry_conventions rust/src > /tmp/generated-after.diff
cmp /tmp/generated-before.diff /tmp/generated-after.diff
```

Expected: `cmp` exits 0. If it reports a difference, fix generator nondeterminism before continuing.

- [ ] **Step 10: Commit generated schema support if commits are authorized**

```bash
git add scripts/generate.ts scripts/generate_schemas.ts schemas test/schema-generation.test.ts test/schema-parity.test.ts test/op.test.ts
git commit -m "feat(schema): generate Draft 7 artifacts from Zod"
```

---

### Task 5: Share schemas with Astro and complete CI/documentation integration

**Files:**
- Modify: `docs/src/content.config.ts`
- Modify: `.github/workflows/build.yml`
- Modify: `CONTRIBUTING.md`
- Modify: `docs/README.md`

**Interfaces:**
- Consumes: canonical schemas and inferred types from Tasks 1–2
- Produces: unchanged Astro collection names and page-facing type aliases

- [ ] **Step 1: Replace embedded Astro definitions with canonical imports**

Replace `docs/src/content.config.ts` with:

```ts
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import {
  attributeSchema,
  descriptionSchema,
  measurementSchema,
  nameSchema,
  opSchema,
} from '../../schemas';

const attributes = defineCollection({
  loader: glob({ pattern: '**/*.json', base: '../model/attributes' }),
  schema: attributeSchema,
});

const names = defineCollection({
  loader: glob({ pattern: '*.json', base: '../model/name' }),
  schema: nameSchema,
});

const descriptions = defineCollection({
  loader: glob({ pattern: '*.json', base: '../model/description' }),
  schema: descriptionSchema,
});

const ops = defineCollection({
  loader: glob({ pattern: '*.json', base: '../model/op' }),
  schema: opSchema,
});

const measurements = defineCollection({
  loader: glob({ pattern: '*.json', base: '../model/measurements' }),
  schema: measurementSchema,
});

export const collections = { attributes, names, descriptions, measurements, ops };

export type {
  AttributeJson as Attribute,
  DescriptionJson as SpanDescription,
  DescriptionOperation,
  MeasurementJson as Measurement,
  NameJson as SpanName,
  NameOperation as SpanOperation,
  OpField as SpanOpField,
  OpJson as SpanOp,
} from '../../schemas';
```

- [ ] **Step 2: Build docs and verify shared imports**

Run:

```bash
yarn docs:build
```

Expected: Astro and Pagefind complete successfully; every content collection validates through the canonical schemas.

- [ ] **Step 3: Add docs build to pull-request CI**

In `.github/workflows/build.yml`, add after the lint step in the `test` job:

```yaml
      - name: Build docs
        if: matrix.os == 'ubuntu-latest'
        run: yarn docs:build
```

The schema/model Vitest coverage continues to run on both Ubuntu and Windows, while the complete Astro/Pagefind build runs once on Ubuntu.

- [ ] **Step 4: Update contributor documentation**

In `CONTRIBUTING.md`, replace instructions implying that `schemas/*.schema.json` are hand-edited with:

```markdown
Model formats are defined by the Zod modules in `schemas/*.ts`. The corresponding
Draft 7 JSON Schema files are generated compatibility artifacts. Edit the Zod
schema, add or update validation tests, and run `yarn generate`; do not edit a
`*.schema.json` file directly.
```

Keep references to the generated filenames for authors who use editor validation.

In `docs/README.md`, replace:

```markdown
Content is validated against Zod schemas matching the JSON schemas in `schemas/`.
```

with:

```markdown
Content is validated with the canonical Zod schemas in `schemas/*.ts`. The same
definitions generate the committed Draft 7 JSON Schemas used by other tools.
```

- [ ] **Step 5: Run docs and lint checks**

Run:

```bash
yarn docs:build
yarn lint:js
```

Expected: both commands PASS.

- [ ] **Step 6: Commit Astro and CI integration if commits are authorized**

```bash
git add docs/src/content.config.ts .github/workflows/build.yml CONTRIBUTING.md docs/README.md
git commit -m "ref(docs): consume canonical model schemas"
```

---

### Task 6: Run full verification and review generated compatibility

**Files:**
- Verify: all files changed in Tasks 1–5
- Modify only if verification exposes a scoped defect

**Interfaces:**
- Consumes: the completed schema, loader, generator, docs, and CI integration
- Produces: a clean, implementation-ready branch

- [ ] **Step 1: Generate all artifacts**

Run:

```bash
yarn generate
```

Expected: schema, JavaScript, Python, and Rust generators complete without validation errors.

- [ ] **Step 2: Run the complete test suite**

Run:

```bash
yarn test
```

Expected: all Vitest and Python tests PASS.

- [ ] **Step 3: Build the docs**

Run:

```bash
yarn docs:build
```

Expected: Astro build and Pagefind PASS.

- [ ] **Step 4: Run all linters**

Run:

```bash
yarn lint
```

Expected: JavaScript/TypeScript formatting and linting plus Python checks PASS.

- [ ] **Step 5: Verify generation is deterministic**

Run:

```bash
yarn generate
git status --short
```

Expected: the second generation introduces no additional changes. Only the intended implementation and design/plan documents are listed.

- [ ] **Step 6: Inspect the final diff for scope and compatibility**

Run:

```bash
git diff --stat
git diff --check
git diff -- schemas package.json scripts test docs .github/workflows/build.yml CONTRIBUTING.md
```

Expected:

- No whitespace errors.
- Six generated Draft 7 artifacts remain present.
- `scripts/types.ts` is deleted.
- No unchecked model `JSON.parse(...) as ...Json` casts remain.
- No generated JavaScript or Python public API shape changes occurred unless required by pre-existing generator output.
- No model JSON files changed.

- [ ] **Step 7: Commit final verification fixes if commits are authorized**

```bash
git add .
git commit -m "test(schema): verify generated schema compatibility"
```

Skip this commit when verification required no additional changes.

