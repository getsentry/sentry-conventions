# Contributing

Running this repo requires the usage of [volta](https://volta.sh/). See instructions on installing volta on their documentation [here](https://docs.volta.sh/guide/getting-started). The repo requires Node v22 or higher to run.

To install required dependencies, run `yarn install`.

```bash
yarn install
```

## Adding a new attribute

Run `yarn run create:attribute` to create a new attribute. This will prompt you to enter information about the attribute. There are two modes:

- Interactive mode: This will prompt you to enter information about the attribute.
- Non-interactive mode: This will use the information provided to create the attribute. You'll need to explicitly specify all the needed information when running the command.

```bash
# Interactive mode
yarn create:attribute

# Non-interactive mode
yarn create:attribute --key http.route --description "The route pattern of the request" --type string --has_pii false --is_in_otel true --example "/users/:id"
```

If you need help, run `yarn run create:attribute --help` to see the available options.

## Code and Docs Generation

After you edit an attribute or add a new one, you can run `yarn run generate` to generate the auto-generated code and docs from the json files stored in the `model` directly.
