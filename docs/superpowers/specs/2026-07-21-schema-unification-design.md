# Schema Unification Design

Status: Approved design
Issue: [getsentry/sentry-conventions#512](https://github.com/getsentry/sentry-conventions/issues/512)

## Context

The repository currently describes model JSON in three independently maintained forms:

1. Draft 7 JSON Schema files under `schemas/`
2. Zod schemas embedded in `docs/src/content.config.ts`
3. TypeScript interfaces in `scripts/types.ts`

There is also a fourth, intentional layer: generated JavaScript and Python types for published packages. Those types describe the transformed public API and should remain generated outputs.

The three input-model definitions have already diverged. For example, the docs schema omits the valid `any` attribute type and several cross-field constraints, while `AttributeJson.visibility` is optional even though both runtime validators require it. Code generation uses unchecked `JSON.parse(...) as Type` casts, so it can consume invalid data before another job reports the problem.

## Decision

Zod 4 schemas will become the single hand-written source of truth for all six model document types. TypeScript input types and Draft 7 JSON Schemas will be derived from them.

The migration will be completed in one pull request. Existing JSON Schema filenames and Draft 7 output remain supported for contributors, editors, AJV, and external consumers.

Where the existing definitions disagree, use this precedence:

1. Every current model document must remain valid; this cleanup does not migrate model data.
2. The effective behavior of the hand-written JSON Schema is the compatibility baseline.
3. A stricter rule replaces that baseline only when an existing CI test or contributor policy already enforces it.
4. A docs-only Zod difference does not override the JSON Schema unless step 3 applies.
5. Every divergence MUST be mentioned in the implementation summary.

If these rules do not resolve a disagreement, preserve the JSON Schema behavior and list the unresolved difference in the pull request. Any deliberate tightening of invalid-input behavior must be listed in the pull request's test plan and covered by both Zod and AJV tests.

## Goals

- Define each input model once.
- Validate model JSON before scripts use it.
- Derive TypeScript input types with `z.infer`.
- Keep committed Draft 7 JSON Schema artifacts at their existing paths.
- Use the same schemas in Astro content collections, scripts, tests, and authoring tools.
- Preserve the current valid model corpus and important invalid-case behavior.
- Produce actionable validation errors that identify the source file and the relevant property or syntax location.

## Non-goals

- Removing JSON Schema as a supported artifact.
- Publishing a new schema package.
- Changing the model JSON format.
- Removing generated JavaScript or Python public API types.
- Adding documentation pages for attribute transformations.
- Refactoring unrelated code generation behavior.

## Canonical schema modules

Add Zod as a direct root dependency and create one module per model:

- `schemas/attribute.ts`
- `schemas/name.ts`
- `schemas/description.ts`
- `schemas/op.ts`
- `schemas/measurement.ts`
- `schemas/attribute-transformation.ts`
- `schemas/index.ts`

Each model module exports:

- Reusable nested schemas
- The top-level runtime schema
- Types derived with `z.infer`

The index exports the public schema and type surface used by docs, scripts, and tests.

All object schemas must reject unknown properties to preserve `additionalProperties: false`. Arrays and strings retain existing minimum-length and pattern constraints.

Canonical input schemas must not coerce, transform, or default values. Their parsed output must have the same values and field names as the JSON input.

## Representable cross-field rules

Canonical definitions must use Zod constructs that `z.toJSONSchema` can represent. Opaque refinements must not carry rules that need to exist in generated JSON Schema.

Structural unions or discriminated unions will model:

- Attribute `type` and its permitted `example` or `examples` values
- Mutual exclusion of `example` and `examples`
- Required string examples for dynamic-suffix attributes
- Required transformation identifiers when deprecation status is `transform`
- Required OTel notes for OTel span-name conventions

Reusable schemas receive stable metadata so generated artifacts retain meaningful titles, descriptions, and references where the current schemas expose them.

### Attribute branches

All attributes require `key`, `brief`, `type`, `apply_scrubbing`, `is_in_otel`, and `visibility`.

- `example` and `examples` are mutually exclusive.
- `examples`, when present, is non-empty.
- A dynamic-suffix attribute requires one of those fields and accepts only string examples, regardless of its declared type.
- A non-dynamic attribute may omit examples. When present, examples must match its declared scalar or array type.
- Integer and double examples remain JSON numbers; integer examples are not newly restricted to whole numbers.
- Array-valued examples may be empty arrays, while the outer `examples` list remains non-empty.
- The `any` type retains the existing `AttributeValue` example domain rather than accepting arbitrary JSON.
- Deprecation always requires `_status`; `transform` additionally requires `transformation`.

### Other model branches

- A name operation with `is_in_otel: true` requires `otel_notes`; an empty note remains valid.
- Description `operations`, `ops`, and `templates` retain their non-empty constraints.
- Attribute transformation `inputs`, `outputs`, `actions`, and `examples` remain non-empty, and transformation IDs retain `^[a-z0-9_]+$`.
- Op and measurement schemas retain their current required fields and enum constraints.

## Generated Draft 7 artifacts

Add a schema artifact registry that maps each canonical schema to its existing output file:

- `schemas/attribute.schema.json`
- `schemas/name.schema.json`
- `schemas/description.schema.json`
- `schemas/op.schema.json`
- `schemas/measurements.schema.json`
- `schemas/attribute_transformation.schema.json`

A generation script calls `z.toJSONSchema` with the `draft-07` target and writes deterministic, formatted JSON. `yarn generate` runs schema generation before package code generation.

The generated files remain committed. The existing CI dirty-tree check catches stale artifacts after `yarn generate`.

Compatibility is defined by stable paths, Draft 7 output, preserved model validation semantics, and retained top-level titles, descriptions, and named reusable definitions. The generator uses `JSON.stringify(value, null, 2)` with a trailing newline; schema registration order is fixed. The generated document's equivalent `anyOf`, `oneOf`, or reference layout does not otherwise need to match the former hand-written text byte for byte.

## Consumption

### Astro docs

`docs/src/content.config.ts` will import canonical schemas and contain only collection loader wiring and collection exports. Astro continues to read model files itself and validates them with the shared schemas.

The docs do not add an attribute-transformation collection because no page consumes those documents.

### Scripts

Add a shared `readJsonFile(path, schema)` helper for scripts and tests. It:

1. Reads the file.
2. Parses JSON syntax.
3. Validates the parsed value with the supplied Zod schema.
4. Returns the schema's inferred output type.
5. Throws an error containing the file path. Schema failures include Zod property paths; malformed JSON reports its syntax location when the runtime provides one.

Generation and maintenance scripts use this helper instead of `JSON.parse(...) as Type`. A malformed or invalid document stops the operation immediately; there is no unvalidated fallback.

`create_attribute.ts` validates new documents directly with the canonical attribute schema before writing them and reports the same structured errors.

### Published code

Generated JavaScript and Python metadata types remain committed in their existing generated outputs. They intentionally describe normalized public APIs, including renamed fields and defaults, rather than the raw input model. The existing package code generators continue to own these files; the JSON Schema generator does not.

## Testing

Tests cover the source schemas and their generated representation:

1. Focused Zod unit tests exercise valid and invalid cases for every cross-field rule.
2. Every file in each model directory parses through its canonical Zod schema.
3. AJV validates the same model corpus against the generated Draft 7 artifacts.
4. Representative invalid fixtures are rejected by both Zod and AJV, guarding semantic parity.
5. Schema generation is deterministic and produces the committed artifacts.
6. Span operation documents gain the schema-validation coverage currently missing.
7. Existing policy and cross-document tests continue to operate on validated inferred values.

The invalid fixture matrix includes:

- Unknown and missing required properties for every object type
- Each attribute type with matching and mismatched singular and plural examples
- Empty outer example lists and valid empty array-valued examples
- Both `example` and `examples` on one attribute
- Dynamic-suffix attributes with missing or non-string examples
- Transform deprecations without a transformation identifier
- OTel name operations without notes
- Empty arrays where description and transformation schemas require entries
- Invalid transformation IDs
- Invalid measurement enums

The pull request is verified with:

- `yarn generate`
- `yarn test`
- `yarn docs:build`
- `yarn lint`

The PR workflow will run the docs build so collection wiring and schema imports are checked before merge rather than only after changes reach `main`.

## Implementation sequence

The work lands as one pull request but can be developed in this order:

1. Add Zod and the six canonical schema modules.
2. Add focused schema tests and prove the current model corpus parses.
3. Add deterministic Draft 7 generation and compare AJV behavior.
4. Replace embedded Astro schemas with imports.
5. Replace `scripts/types.ts` and unsafe JSON casts with inferred types and validated loading.
6. Update authoring and maintenance scripts.
7. Add docs build coverage to PR CI and update contributor documentation.
8. Run generation, tests, docs build, and lint; confirm the worktree stays clean afterward.

The migration inventory includes:

- Root dependency metadata: `package.json` and `yarn.lock`
- Canonical sources and artifacts under `schemas/`
- `docs/src/content.config.ts`
- `scripts/types.ts`, attribute and op generators, changelog maintenance scripts, attribute creation, and attribute example types
- Existing attribute, name, description, measurement, and transformation tests, plus new op and parity coverage
- `.github/workflows/build.yml`
- `CONTRIBUTING.md` and `docs/README.md`

Generated package sources may change only as a consequence of running their existing generators; changing their public shape is outside this migration.

## Risks and mitigations

### Generated JSON Schema differs structurally

Zod may express the same rule with different `anyOf`, `oneOf`, or reference layout. Compatibility tests compare accepted and rejected data rather than text layout, while stable metadata preserves useful names.

### A Zod rule cannot be emitted

Cross-field constraints are represented structurally. Tests generate every schema and validate invalid fixtures with AJV, preventing a Zod-only rule from silently weakening the external artifact.

### Migration exposes existing invalid data

The full current model corpus is parsed before consumers are migrated. If a prospective canonical schema rejects current data, the schema is corrected to preserve that data; this cleanup does not silently cast around the discrepancy or migrate model files.

### Error output becomes noisy

The shared loader formats errors with the source path and either precise property paths or JSON syntax context. Bulk operations fail fast.

## Acceptance criteria

- All six model formats have one canonical Zod definition.
- `scripts/types.ts` is removed or contains no duplicate model shapes.
- Codegen and maintenance scripts do not cast unvalidated JSON to model types.
- Astro imports the canonical schemas.
- Existing Draft 7 schema paths remain available and generated.
- Zod and AJV accept every current model document.
- Zod and AJV reject representative invalid cross-field cases.
- Invalid script input throws with its filename. Validation errors include the failing property path; malformed JSON includes syntax context.
- Span operation documents are validated in tests.
- PR CI runs generation, tests, lint, and the docs build.
- Generation leaves the worktree clean when artifacts are current.
