<!-- THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. -->

{% raw %}
# Span Name Documentation

This page contains documentation for known span names. You can use this documentation to understand how to create the `name` attribute for a span, when you have the span's other attributes. This is useful for SDK development, as well as in-product when deriving the span name. The documentation is organized by general category of work that spans represent, and further broken down by specific kinds of work.

## Generating Names

Span names are generated via string template. Each span category of work has a set of templates for the span name. Curly brackets in the template indicate that the contents inside the curly brackets should be replaced with the contents of the span attribute of the name within the brackets. The templates should be evaluated in order of appearance. At least one template must be provided that doesn't require any attributes.

## `app`

### App Startup

Operations related to starting up an application. NOTE: Names for this category of span are **not** specified in OpenTelemetry Semantic Conventions.

#### Affected `op`s

- `"app.start"`
- `"app.bootstrap"`
- `"app.start.warm"`
- `"app.start.cold"`

#### Templates

- `"App {{app_start_type}} start"`
- `"App start"`

#### Examples

- `"App warm start"`
- `"App cold start"`
- `"App start"`

## `browser`

### Paint

Flushing pending UI changes to the screen. NOTE: Names for this category of span are **not** specified in OpenTelemetry Semantic Conventions.

#### Affected `op`s

- `"browser.paint"`

#### Templates

- `"Browser Paint"`

### DNS

Connecting to a DNS server to resolve a domain name. NOTE: Names for this category of span are **not** specified in OpenTelemetry Semantic Conventions.

#### Affected `op`s

- `"browser.dns"`

#### Templates

- `"DNS"`

### TLS

Establishing a secure connection via a cryptographic handshake. NOTE: Names for this category of span are **not** specified in OpenTelemetry Semantic Conventions.

#### Affected `op`s

- `"browser.tls/ssl"`

#### Templates

- `"TLS/SSL"`

## `cache`

### Cache Operations

Operations done against data in the cache (e.g., setting and getting cache key values). NOTE: Names for this category of span are **not** specified in OpenTelemetry Semantic Conventions.

#### Affected `op`s

- `"cache.get"`
- `"cache.get_item"`
- `"cache.clear"`
- `"cache.delete_item"`
- `"cache.save"`

#### Templates

- `"Cache {{cache.operation}}"`
- `"Cache operation"`

#### Examples

- `"Cache set"`
- `"Cache get"`
- `"Cache clear"`

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

Operations on individual files. NOTE: Names for this category of span are **not** specified in OpenTelemetry Semantic Conventions.

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

## `function`

### FAAS Function Execution

Operations that represent invoking a Function as a Service function (e.g., AWS Lambda).

#### Affected `op`s

- `"function.gcp"`
- `"function.aws"`
- `"function.azure"`
- `"function.remix"`
- `"function.nextjs"`

#### Templates

- `"FAAS Function"`

## `gen_ai`

### Agent operations

Generative AI agent operations (e.g., spawning a new agent, an agent performing an action on behalf of a user, and agent handing off work to another agent).

#### Affected `op`s

- `"gen_ai.handoff"`
- `"gen_ai.invoke_agent"`

#### Templates

- `"{{gen_ai.operation.name}} {{gen_ai.agent.name}}"`
- `"{{gen_ai.operation.name}}"`
- `"Generative AI agent operation"`

#### Examples

- `"text_completion Zed"`
- `"text_completion Claude Code"`
- `"embeddings"`

### Inference

Generative AI inference operations. Request to a generative AI model to perform some unit of work (e.g., autocomplete, translation, chat completion, response to a query).

#### Affected `op`s

- `"gen_ai"`
- `"gen_ai.chat"`
- `"gen_ai.execute_tool"`

#### Templates

- `"{{gen_ai.operation.name}} {{gen_ai.request.model}}"`
- `"{{gen_ai.operation.name}}"`
- `"Generative AI model operation"`

#### Examples

- `"text_completion gpt-4"`
- `"embeddings huggingface"`
- `"chat claude-opus-4"`
- `"chat"`

## `graphql`

### General GraphQL

Any and all operations that fall under GraphQL

#### Affected `op`s

- `"http.graphql"`
- `"http.graphql.query"`
- `"http.graphql.mutation"`
- `"http.graphql.subscription"`
- `"graphql.execute"`
- `"graphql.execute"`
- `"graphql.parse"`
- `"graphql.resolve"`
- `"graphql.request"`
- `"graphql.query"`
- `"graphql.mutation"`
- `"graphql.subscription"`
- `"graphql.validate"`

#### Templates

- `"{{graphql.operation.type}}"`
- `"GraphQL Operation"`

#### Examples

- `"mutation"`
- `"query"`

{% endraw %}