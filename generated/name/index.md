<!-- THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. -->

{% raw %}
# Name Documentation

This page contains documentation for known span names. You can use this documentation to understand how to create the `name` attribute for a span, when you have the span's other attributes. This is useful for SDK development, as well as in-product when deriving the span name.

## Generating Names

Span names are generated via string template. Each span category has a set of templates for the span name. Curly brackets in the template indicate that the contents inside the curly brackets should be replaced with the contents of the span attribute of the name within the brackets. The templates should be evaluated in order of appearance. At least one template must be provided that doesn't require any attributes.

## Available Categories

## `db`

A description of an operation performed against a database.

Names for this category of span **are** specified in OpenTelemetry Semantic Conventions.

### Affected `op`s

- `"db"`
- `"db.query"`

### Name Templates

- `"{{db.query.summary}}"`
- `"{{db.operation.name}} {{db.collection.name}}"`
- `"{{db.operation.name}} {{db.stored_procedure.name}}"`
- `"{{db.operation.name}} {{db.namespace}}"`
- `"{{db.operation.name}} {{server.address}}:{{server.port}}"`
- `"{{db.collection.name}}"`
- `"{{db.stored_procedure.name}}"`
- `"{{db.namespace}}"`
- `"{{server.address}}:{{server.port}}"`
- `"{{db.system.name}}"`
- `"Database operation"`

### Examples

- `"SELECT users"`
- `"findAndModify products"`
- `"users"`
- `"postgres"`

## `file`

A description of a filesystem operation.

Names for this category of span **are not** specified in OpenTelemetry Semantic Conventions.

### Affected `op`s

- `"file.open"`
- `"file.read"`
- `"file.write"`
- `"file.copy"`
- `"file.delete"`
- `"file.rename"`

### Name Templates

- `"File {{sentry.category}}"`
- `"File IO"`

### Examples

- `"File open"`
- `"File read"`
- `"File IO"`

{% endraw %}