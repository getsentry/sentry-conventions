<!-- THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. -->

# Sentry Attributes

- [Stable Attributes](#stable-attributes)
  - [sentry.action](#sentryaction)
  - [sentry.cancellation_reason](#sentrycancellation_reason)
  - [sentry.category](#sentrycategory)
  - [sentry.client_sample_rate](#sentryclient_sample_rate)
  - [sentry.description](#sentrydescription)
  - [sentry.dist](#sentrydist)
  - [sentry.domain](#sentrydomain)
  - [sentry.dsc.environment](#sentrydscenvironment)
  - [sentry.dsc.public_key](#sentrydscpublic_key)
  - [sentry.dsc.release](#sentrydscrelease)
  - [sentry.dsc.sample_rate](#sentrydscsample_rate)
  - [sentry.dsc.sampled](#sentrydscsampled)
  - [sentry.dsc.trace_id](#sentrydsctrace_id)
  - [sentry.dsc.transaction](#sentrydsctransaction)
  - [sentry.environment](#sentryenvironment)
  - [sentry.exclusive_time](#sentryexclusive_time)
  - [sentry.graphql.operation](#sentrygraphqloperation)
  - [sentry.group](#sentrygroup)
  - [sentry.http.prefetch](#sentryhttpprefetch)
  - [sentry.idle_span_finish_reason](#sentryidle_span_finish_reason)
  - [sentry.is_remote](#sentryis_remote)
  - [sentry.kind](#sentrykind)
  - [sentry.message.parameter.\<key\>](#sentrymessageparameterkey)
  - [sentry.message.template](#sentrymessagetemplate)
  - [sentry.module.\<key\>](#sentrymodulekey)
  - [sentry.nextjs.ssr.function.route](#sentrynextjsssrfunctionroute)
  - [sentry.nextjs.ssr.function.type](#sentrynextjsssrfunctiontype)
  - [sentry.normalized_db_query](#sentrynormalized_db_query)
  - [sentry.normalized_db_query.hash](#sentrynormalized_db_queryhash)
  - [sentry.normalized_description](#sentrynormalized_description)
  - [sentry.observed_timestamp_nanos](#sentryobserved_timestamp_nanos)
  - [sentry.op](#sentryop)
  - [sentry.origin](#sentryorigin)
  - [sentry.platform](#sentryplatform)
  - [sentry.profile_id](#sentryprofile_id)
  - [sentry.release](#sentryrelease)
  - [sentry.replay_id](#sentryreplay_id)
  - [sentry.replay_is_buffering](#sentryreplay_is_buffering)
  - [sentry.sdk.integrations](#sentrysdkintegrations)
  - [sentry.sdk.name](#sentrysdkname)
  - [sentry.sdk.version](#sentrysdkversion)
  - [sentry.segment.id](#sentrysegmentid)
  - [sentry.segment.name](#sentrysegmentname)
  - [sentry.server_sample_rate](#sentryserver_sample_rate)
  - [sentry.span.source](#sentryspansource)
  - [sentry.status.message](#sentrystatusmessage)
  - [sentry.trace.parent_span_id](#sentrytraceparent_span_id)
  - [sentry.transaction](#sentrytransaction)
- [Deprecated Attributes](#deprecated-attributes)
  - [sentry.browser.name](#sentrybrowsername)
  - [sentry.browser.version](#sentrybrowserversion)
  - [sentry.segment_id](#sentrysegment_id)

## Stable Attributes

### sentry.action

Used as a generic attribute representing the action depending on the type of span. For instance, this is the database query operation for DB spans, and the request method for HTTP spans.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Example | `SELECT` |

### sentry.cancellation_reason

The reason why a span ended early.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `document.hidden` |

### sentry.category

The high-level category of a span, derived from the span operation or span attributes. This categorizes spans by their general purpose (e.g., database, HTTP, UI). Known values include: 'ai', 'ai.pipeline', 'app', 'browser', 'cache', 'console', 'db', 'event', 'file', 'function.aws', 'function.azure', 'function.gcp', 'function.nextjs', 'function.remix', 'graphql', 'grpc', 'http', 'measure', 'middleware', 'navigation', 'pageload', 'queue', 'resource', 'rpc', 'serialize', 'subprocess', 'template', 'topic', 'ui', 'ui.angular', 'ui.ember', 'ui.react', 'ui.svelte', 'ui.vue', 'view', 'websocket'.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `db` |

### sentry.client_sample_rate

Rate at which a span was sampled in the SDK.

| Property | Value |
| --- | --- |
| Type | `double` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `0.5` |

### sentry.description

The human-readable description of a span.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Example | `index view query` |

### sentry.dist

The sentry dist.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `1.0` |

### sentry.domain

Used as a generic attribute representing the domain depending on the type of span. For instance, this is the collection/table name for database spans, and the server address for HTTP spans.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Example | `example.com` |

### sentry.dsc.environment

The environment from the dynamic sampling context.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `prod` |

### sentry.dsc.public_key

The public key from the dynamic sampling context.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Example | `c51734c603c4430eb57cb0a5728a479d` |

### sentry.dsc.release

The release identifier from the dynamic sampling context.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `frontend@e8211be71b214afab5b85de4b4c54be3714952bb` |

### sentry.dsc.sample_rate

The sample rate from the dynamic sampling context.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `1.0` |

### sentry.dsc.sampled

Whether the event was sampled according to the dynamic sampling context.

| Property | Value |
| --- | --- |
| Type | `boolean` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `true` |

### sentry.dsc.trace_id

The trace ID from the dynamic sampling context.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `047372980460430cbc78d9779df33a46` |

### sentry.dsc.transaction

The transaction name from the dynamic sampling context.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `/issues/errors-outages/` |

### sentry.environment

The sentry environment.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `production` |
| Aliases | `environment` |

### sentry.exclusive_time

The exclusive time duration of the span in milliseconds.

| Property | Value |
| --- | --- |
| Type | `double` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `1234` |

### sentry.graphql.operation

Indicates the type of graphql operation, emitted by the Javascript SDK.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Example | `getUserById` |

### sentry.group

Stores the hash of `sentry.normalized_description`. This is primarily used for grouping spans in the product end.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |

### sentry.http.prefetch

If an http request was a prefetch request.

| Property | Value |
| --- | --- |
| Type | `boolean` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `true` |

### sentry.idle_span_finish_reason

The reason why an idle span ended early.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `idleTimeout` |

### sentry.is_remote

Indicates whether a span's parent is remote.

| Property | Value |
| --- | --- |
| Type | `boolean` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `true` |

### sentry.kind

Used to clarify the relationship between parents and children, or to distinguish between spans, e.g. a `server` and `client` span with the same name.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Example | `server` |

### sentry.message.parameter.\<key\>

A parameter used in the message template. \<key\> can either be the number that represent the parameter's position in the template string (sentry.message.parameter.0, sentry.message.parameter.1, etc) or the parameter's name (sentry.message.parameter.item_id, sentry.message.parameter.user_id, etc)

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Example | `sentry.message.parameter.0='123'` |

### sentry.message.template

The parameterized template string.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Example | `Hello, {name}!` |

### sentry.module.\<key\>

A module that was loaded in the process. The key is the name of the module.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Has dynamic suffix | Yes |
| Example | `sentry.module.brianium/paratest='v7.7.0'` |

### sentry.nextjs.ssr.function.route

A parameterized route for a function in Next.js that contributes to Server-Side Rendering. Should be present on spans that track such functions when the file location of the function is known.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `/posts/[id]/layout` |

### sentry.nextjs.ssr.function.type

A descriptor for a for a function in Next.js that contributes to Server-Side Rendering. Should be present on spans that track such functions.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `generateMetadata` |

### sentry.normalized_db_query

The normalized version of `db.query.text`.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Example | `SELECT .. FROM sentry_project WHERE (project_id = %s)` |

### sentry.normalized_db_query.hash

The hash of `sentry.normalized_db_query`.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |

### sentry.normalized_description

Used as a generic attribute representing the normalized `sentry.description`. This refers to the legacy use case of `sentry.description` where it holds relevant data depending on the type of span (e.g. database query, resource url, http request description, etc).

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Example | `SELECT .. FROM sentry_project WHERE (project_id = %s)` |

### sentry.observed_timestamp_nanos

The timestamp at which an envelope was received by Relay, in nanoseconds.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `1544712660300000000` |

### sentry.op

The operation of a span.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `http.client` |

### sentry.origin

The origin of the instrumentation (e.g. span, log, etc.)

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `auto.http.otel.fastify` |

### sentry.platform

The sdk platform that generated the event.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `php` |

### sentry.profile_id

The id of the sentry profile.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `123e4567e89b12d3a456426614174000` |
| Aliases | `profile_id` |

### sentry.release

The sentry release.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `7.0.0` |
| Aliases | `service.version`, `release` |

### sentry.replay_id

The id of the sentry replay.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `123e4567e89b12d3a456426614174000` |
| Aliases | `replay_id` |

### sentry.replay_is_buffering

A sentinel attribute on log events indicating whether the current Session Replay is being buffered (onErrorSampleRate).

| Property | Value |
| --- | --- |
| Type | `boolean` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `true` |

### sentry.sdk.integrations

A list of names identifying enabled integrations. The list shouldhave all enabled integrations, including default integrations. Defaultintegrations are included because different SDK releases may contain differentdefault integrations.

| Property | Value |
| --- | --- |
| Type | `string[]` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `["InboundFilters","FunctionToString","BrowserApiErrors","Breadcrumbs"]` |

### sentry.sdk.name

The sentry sdk name.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `@sentry/react` |

### sentry.sdk.version

The sentry sdk version.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `7.0.0` |

### sentry.segment.id

The segment ID of a span

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `051581bf3cb55c13` |
| Aliases | `sentry.segment_id` |

### sentry.segment.name

The segment name of a span

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Example | `GET /user` |

### sentry.server_sample_rate

Rate at which a span was sampled in Relay.

| Property | Value |
| --- | --- |
| Type | `double` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `0.5` |

### sentry.span.source

The source of a span, also referred to as transaction source. Known values are:  `'custom'`, `'url'`, `'route'`, `'component'`, `'view'`, `'task'`.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `route` |

### sentry.status.message

The from OTLP extracted status message.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Example | `foobar` |

### sentry.trace.parent_span_id

The span id of the span that was active when the log was collected. This should not be set if there was no active span.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `b0e6f15b45c36b12` |

### sentry.transaction

The sentry transaction (segment name).

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `GET /` |
| Aliases | `transaction` |

## Deprecated Attributes

These attributes are deprecated and will be removed in a future version. Please use the recommended replacements.

### sentry.browser.name

The name of the browser.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Example | `Chrome` |
| Deprecated | Yes, use `browser.name` instead |
| Aliases | `browser.name` |

### sentry.browser.version

The version of the browser.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Example | `120.0.6099.130` |
| Deprecated | Yes, use `browser.version` instead |
| Aliases | `browser.version` |

### sentry.segment_id

The segment ID of a span

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `051581bf3cb55c13` |
| Deprecated | Yes, use `sentry.segment.id` instead |
| Aliases | `sentry.segment.id` |

