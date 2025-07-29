<!-- THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. -->

{% raw %}
# Span Name Documentation

This page contains documentation for known span names. You can use this documentation to understand how to create the `name` attribute for a span, when you have the span's other attributes. This is useful for SDK development, as well as in-product when deriving the span name. The documentation is organized by general category of work that spans represent, and further broken down by specific kinds of work.

## Generating Names

Span names are generated via string template. Each span category of work has a set of templates for the span name. Curly brackets in the template indicate that the contents inside the curly brackets should be replaced with the contents of the span attribute of the name within the brackets. The templates should be evaluated in order of appearance. At least one template must be provided that doesn't require any attributes.

## `db`

### Database Queries

Database queries. Any operation that acts on the data in a database. Includes operations like fetching data, updating records. Does not include operations like connecting to the database, or updating permissions.

#### Affected `op`s

- `"db"`
- `"db.query"`
- `"db.sql.query"`
- `"db.sql.prisma"`
- `"db.sql.active_record"`
- `"db.sql.execute"`
- `"db.sql.room"`
- `"db.sql.transaction"`

#### Templates

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

#### Examples

- `"SELECT users"`
- `"findAndModify products"`
- `"users"`
- `"postgres"`

### Database Network

Database network operations. Any operation that deals with database network communication. NOTE: Names for this category of span are **not** specified in OpenTelemetry Semantic Conventions.

#### Affected `op`s

- `"db.connection"`

#### Templates

- `"Database connection"`

## `file`

### File Operations

Operations on individual files NOTE: Names for this category of span are **not** specified in OpenTelemetry Semantic Conventions.

#### Affected `op`s

- `"file.open"`
- `"file.read"`
- `"file.write"`
- `"file.copy"`
- `"file.delete"`
- `"file.rename"`

#### Templates

- `"File {{sentry.category}}"`
- `"File IO"`

#### Examples

- `"File open"`
- `"File read"`
- `"File IO"`

{% endraw %}