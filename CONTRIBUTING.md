# Contributing

Running this repo requires the usage of [volta](https://volta.sh/). See instructions on installing volta on their documentation [here](https://docs.volta.sh/guide/getting-started). The repo requires Node v22 or higher to run.

# Setup

To install required dependencies, run `yarn install`.

```bash
yarn install
```

# Usage

## Adding a new attribute

Run `yarn run create:attribute` to create a new attribute. This will prompt you to enter information about the attribute. There are two modes:

- Interactive mode: This will prompt you to enter information about the attribute.
- Non-interactive mode: This will use the information provided to create the attribute. You'll need to explicitly specify all the needed information when running the command.

```bash
# Interactive mode
yarn run create:attribute

# Non-interactive mode
yarn run create:attribute --key http.route --description "The route pattern of the request" --type string --has_pii false --is_in_otel true --example "/users/:id" --alias "url.template"
```

After you've created an attribute, the script will ask if you'd like to generate the docs. This will run `yarn run generate`. If you want to skip this step, you can run `yarn run generate` manually afterwards.

If you need help, run `yarn run create:attribute --help` to see the available options.

## Adding a new convention for span names

Span name conventions are organized loosely by type of span operation. To create a convention for a new type of span operation:

1. Create a new file in the `models/name` directory. Ideally the file name should match a folder in the `models/attributes` directory (e.g., `ui.json`).
2. Fill in the contents of the file with the necessary information. You can find the schema for the document in `schemas/name.schema.json`.

- The `"brief"` field should be a short description of what kind of information the `name` field contains for this kind of span operation.
- The `"is_in_otel"` field describes whether the [OpenTelemetry Semantic Conventions](https://opentelemetry.io/docs/specs/semconv/) describe how the `name` field should be constructed for this kind of span operation. If there are no OTel conventions for this kind of operation, set this field to `false`.
- The `"op"` field contains a list of all known Sentry span operation names that the convention is applicable to. For example, in Sentry `"db"`, and `"db.query"` spans can construct their names using the `"db"` name conventions.
- The `"templates"` field contains a list of string templates for constructing the `name` field from known span attributes. Strings in curly braces are replaced with the value of the corresponding attribute. For example, the template `"{{db.system}}"` becomes `"postgres"` for a span with the attribute `"db.system"` set to the string `"postgres"`. The top template should be the preferred version, with subsequent templates being fallbacks. The final template should be a static string without any curly braces.
- The `"examples"` field contains a list of example span names. Please add a few examples that correspond to the available templates.

Remember to run `yarn run generate` after editing or creating a `name` convention to recreate the documentation and auto-generated code.

## Code and Docs Generation

After you edit an attribute or add a new one, you can run `yarn run generate` to generate the auto-generated code and docs from the json files stored in the `model` directly.

# Testing

This repo uses [Vitest](https://vitest.dev/) for testing. To run the tests, run `yarn test`.

```bash
yarn test
```

# Linting

This repo uses [Biome](https://biome.sh/) for linting. To run the linting, run `yarn lint`.

```bash
yarn lint
```

If you want to fix the linting errors automatically, run `yarn fix`.

```bash
yarn fix
```

Some linting errors can only be automatically fixed if you use the `--unsafe` flag.

```bash
yarn lint --unsafe
```
