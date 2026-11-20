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
