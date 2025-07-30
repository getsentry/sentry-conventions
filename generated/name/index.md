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

## `http`

### HTTP Client Spans

Operations that represent outgoing HTTP requests.

#### Affected `op`s

- `"http.client"`

#### Templates

- `"{{http.request.method}} {{http.route}}"`
- `"{{http.request.method}} {{url.template}}"`
- `"{{http.request.method}}"`
- `"HTTP"`

#### Examples

- `"GET /users/:id"`
- `"GET"`

### HTTP Server Spans

Operations that represent processing incoming HTTP requests in a web server.

#### Affected `op`s

- `"http.server"`

#### Templates

- `"{{http.request.method}} {{http.route}}"`
- `"{{http.request.method}} {{url.template}}"`
- `"{{http.request.method}}"`
- `"HTTP"`

#### Examples

- `"GET /users/:id"`
- `"GET"`

## `messaging`

### Messaging

Operations that represent working with messages on topics in streaming data systems (e.g., producing and consuming messages in Kafka).

#### Affected `op`s

- `"topic"`
- `"topic.send"`
- `"topic.receive"`
- `"topic.process"`

#### Templates

- `"{{messaging.operation.type}} {{messaging.destination.name}}"`
- `"{{messaging.operation.type}} {{server.address}}:{{server.port}}"`
- `"{{messaging.operation.type}}"`
- `"Messaging"`

#### Examples

- `"send user.data"`
- `"publish"`

## `middleware`

### Middleware functions

Operations that represent execution of web framework middleware (e.g., authentication middleware in a framework like Django). NOTE: Names for this category of span are **not** specified in OpenTelemetry Semantic Conventions.

#### Affected `op`s

- `"middlware"`
- `"middleware.handle"`
- `"middleware.express"`
- `"middleware.django"`
- `"middleware.starlette"`
- `"http.server.middleware"`

#### Templates

- `"Middleware"`

## `resource`

### Images

Operations that represent a browser or a mobile app downloading an image resource over the network. NOTE: Names for this category of span are **not** specified in OpenTelemetry Semantic Conventions.

#### Affected `op`s

- `"resource.img"`

#### Templates

- `"Image Resource"`

### Scripts

Operations that represent a browser or a mobile app downloading a JavaScript resource over the network. NOTE: Names for this category of span are **not** specified in OpenTelemetry Semantic Conventions.

#### Affected `op`s

- `"resource.js"`

#### Templates

- `"JavaScript Resource"`

### CSS

Operations that represent a browser or a mobile app downloading a CSS stylesheet resource over the network. NOTE: Names for this category of span are **not** specified in OpenTelemetry Semantic Conventions.

#### Affected `op`s

- `"resource.css"`

#### Templates

- `"CSS Resource"`

### Links

Operations that represent a browser or a mobile app accessing a link resource. NOTE: Names for this category of span are **not** specified in OpenTelemetry Semantic Conventions.

#### Affected `op`s

- `"resource.link"`

#### Templates

- `"Link Resource"`

## `ui`

### UI Lifecycle

Operations that represent the loading of a UI. NOTE: Names for this category of span are **not** specified in OpenTelemetry Semantic Conventions.

#### Affected `op`s

- `"ui.load"`
- `"ui.render"`
- `"ui.initial_display"`
- `"ui.full_display"`

#### Templates

- `"UI {{span.action}}"`

#### Examples

- `"UI load"`
- `"UI initial_display"`

### Actions

Operations that represent UI actions that are initiated by the user (e.g., mouse clicks). NOTE: Names for this category of span are **not** specified in OpenTelemetry Semantic Conventions.

#### Affected `op`s

- `"ui.action"`
- `"ui.action.click"`
- `"ui.action.scroll"`
- `"ui.action.swap"`

#### Templates

- `"UI Action"`

### Tasks

Operations that represent generic UI tasks that might be affecting performance on the UI thread. NOTE: Names for this category of span are **not** specified in OpenTelemetry Semantic Conventions.

#### Affected `op`s

- `"ui.task"`
- `"ui.long-task"`
- `"ui.long-animation-frame"`

#### Templates

- `"UI Task"`

### React

Operations that represent work done by the React UI framework. NOTE: Names for this category of span are **not** specified in OpenTelemetry Semantic Conventions.

#### Affected `op`s

- `"ui.react"`
- `"ui.react.mount"`
- `"ui.react.render"`
- `"ui.react.update"`

#### Templates

- `"React {{span.subaction}}"`
- `"React"`

#### Examples

- `"React mount"`

### Vue

Operations that represent work done by the Vue UI framework. NOTE: Names for this category of span are **not** specified in OpenTelemetry Semantic Conventions.

#### Affected `op`s

- `"ui.vue"`
- `"ui.vue.activate"`
- `"ui.vue.create"`
- `"ui.vue.destroy"`
- `"ui.vue.mount"`
- `"ui.vue.update"`

#### Templates

- `"Vue {{span.subaction}}"`
- `"Vue"`

#### Examples

- `"Vue destroy"`

### Svelte

Operations that represent work done by the Svete UI framework. NOTE: Names for this category of span are **not** specified in OpenTelemetry Semantic Conventions.

#### Affected `op`s

- `"ui.svelte"`
- `"ui.svelte.init"`
- `"ui.svelte.update"`

#### Templates

- `"Svelte {{span.subaction}}"`
- `"Svelte"`

#### Examples

- `"Svelte init"`

### Angular

Operations that represent work done by the Angular UI framework. NOTE: Names for this category of span are **not** specified in OpenTelemetry Semantic Conventions.

#### Affected `op`s

- `"ui.angular"`
- `"ui.angular.init"`
- `"ui.angular.routing"`

#### Templates

- `"Angular {{span.subaction}}"`
- `"Angular"`

#### Examples

- `"Angular init"`

### Ember

Operations that represent work done by the Ember UI framework. NOTE: Names for this category of span are **not** specified in OpenTelemetry Semantic Conventions.

#### Affected `op`s

- `"ui.ember"`
- `"ui.ember.route.before_model"`
- `"ui.ember.model"`
- `"ui.ember.route.after_model"`
- `"ui.ember.route.setup_controller"`

#### Templates

- `"Ember {{span.subaction}}"`
- `"Ember"`

#### Examples

- `"Angular route.before_model"`

{% endraw %}