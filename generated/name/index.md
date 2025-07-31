<!-- THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. -->

{% raw %}
# Span Name Documentation

This page contains documentation for known span names. You can use this documentation to understand how to create the `name` attribute for a span, when you have the span's other attributes. This is useful for SDK development, as well as in-product when deriving the span name. The documentation is organized by general category of work that spans represent, and further broken down by specific kinds of work.

## Generating Names

Span names are generated via string template. Each span category of work has a set of templates for the span name. Curly brackets in the template indicate that the contents inside the curly brackets should be replaced with the contents of the span attribute of the name within the brackets. The templates should be evaluated in order of appearance. The final template should be a static string, to be used as a fallback.

## `db`

### Queries

Operations that act on the data in a database. Includes operations like fetching, updating, and deleting records. Does not include operations like connecting to the database server.

#### Affected `op`s

- `"db"`
- `"db.query"`
- `"db.sql.query"`
- `"db.sql.prisma"`
- `"db.sql.active_record"`
- `"db.sql.execute"`
- `"db.sql.room"`
- `"db.sql.transaction"`
- `"db.redis"`
- `"redis"`

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

## `gen_ai`

### Agent

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

Generative AI inference operations. Requests to a generative AI model to perform some unit of work (e.g., autocomplete, translation, chat completion, response to a query).

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

### GraphQL

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

### Client

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

### Server

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

Operations that represent working with messages on topics in streaming data systems and queues (e.g., producing and consuming messages in Kafka, RabbitMQ).

#### Affected `op`s

- `"topic"`
- `"topic.send"`
- `"topic.receive"`
- `"topic.process"`
- `"queue"`
- `"queue.task"`
- `"queue.task.celery"`
- `"queue.task.rq"`
- `"queue.task.delayed_job"`
- `"queue.task.active_job"`
- `"queue.submit"`
- `"queue.submit.celery"`
- `"queue.resque"`
- `"queue.sidekiq"`

#### Templates

- `"{{messaging.operation.type}} {{messaging.destination.name}}"`
- `"{{messaging.operation.type}} {{server.address}}:{{server.port}}"`
- `"{{messaging.operation.type}}"`
- `"Messaging"`

#### Examples

- `"send user.data"`
- `"publish"`

{% endraw %}