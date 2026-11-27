# AGENTS.md

Read `CONTRIBUTING.md` before you change the model. It contains all the policies.

## PII scrubbing

- Set `apply_scrubbing` to `auto` or `manual` if the value can contain PII.
- Set `apply_scrubbing` to `never` only if scrubbing breaks a product feature.
- If you are not sure that the value is free of PII, ask the user. Do not select a value yourself.

## Workflow

- Use `yarn run create:attribute` to add an attribute.
- Define conventions in the JSON files in `model/`. Do not edit generated code.
- After each change to `model/`, run `yarn run generate`.
- Before you finish, run `yarn test` and `yarn lint`.

## Code generation and tests

- Add language output to the existing category-specific generators through `writeTo<Language>()` functions. Reuse their parsed models and deduplication instead of introducing a separate language-level generator.
- Match surrounding code patterns and ordering.
- Extend the existing category-specific generator tests instead of adding a separate language-specific generator suite. Keep unrelated concerns in separate test cases.
- Use idiomatic naming for each generated language, including lowerCamelCase Swift properties. Preserve convention string values and collision detection.
- Avoid duplicating trivial constant-value checks already covered by generator tests and consuming executables.

## Scripts and CI

- Add language-specific commands to the existing `test` and `build` aggregates where applicable.
- Keep existing scripts intact unless their refactoring is explicitly requested. Adding support for a language is not permission to rename or restructure unrelated commands.

## Swift verification and documentation

- Before changing Swift getter attributes, linkage, or toolchain setup, read [the inlining and stripping rationale](swift/README.md#inlining-and-dead-code-stripping).
- Use `yarn test:swift` for consumer compilation, value checks, and release-binary stripping verification.
