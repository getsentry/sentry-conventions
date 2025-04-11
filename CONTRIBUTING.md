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
