// This is an auto-generated file. Do not edit!

// Path: model/attributes/ai/ai__completion_tokens__used.json

/**
 * The number of tokens used to respond to the message.
 *
 * Attribute Value Type: number
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * Aliases: {@link GEN_AI_USAGE_OUTPUT_TOKENS} 'gen_ai.usage.output_tokens', {@link GEN_AI_USAGE_COMPLETION_TOKENS} 'gen_ai.usage.completion_tokens'
 *
 * @example 10
 */
export const AI_COMPLETION_TOKENS_USED = 'ai.completion_tokens.used';

// Path: model/attributes/ai/ai__input_messages.json

/**
 * The input messages sent to the model
 *
 * Attribute Value Type: string
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: No
 *
 * Aliases: {@link GEN_AI_PROMPT} 'gen_ai.prompt'
 *
 * @example "[{\"role\": \"user\", \"message\": \"hello\"}]"
 */
export const AI_INPUT_MESSAGES = 'ai.input_messages';

// Path: model/attributes/ai/ai__model_id.json

/**
 * The vendor-specific ID of the model used.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * Aliases: {@link GEN_AI_RESPONSE_MODEL} 'gen_ai.response.model'
 *
 * @example "gpt-4"
 */
export const AI_MODEL_ID = 'ai.model_id';

// Path: model/attributes/ai/ai__prompt_tokens__used.json

/**
 * The number of tokens used to process just the prompt.
 *
 * Attribute Value Type: number
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * Aliases: {@link GEN_AI_USAGE_PROMPT_TOKENS} 'gen_ai.usage.prompt_tokens', {@link GEN_AI_USAGE_INPUT_TOKENS} 'gen_ai.usage.input_tokens'
 *
 * @example 20
 */
export const AI_PROMPT_TOKENS_USED = 'ai.prompt_tokens.used';

// Path: model/attributes/ai/ai__responses.json

/**
 * The response messages sent back by the AI model.
 *
 * Attribute Value Type: Array<string>
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example ["hello","world"]
 */
export const AI_RESPONSES = 'ai.responses';

// Path: model/attributes/ai/ai__streaming.json

/**
 * Whether the request was streamed back.
 *
 * Attribute Value Type: boolean
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example true
 */
export const AI_STREAMING = 'ai.streaming';

// Path: model/attributes/ai/ai__total_tokens__used.json

/**
 * The total number of tokens used to process the prompt.
 *
 * Attribute Value Type: number
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example 30
 */
export const AI_TOTAL_TOKENS_USED = 'ai.total_tokens.used';

// Path: model/attributes/app_start_type.json

/**
 * Mobile app start variant. Either cold or warm.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example "cold"
 */
export const APP_START_TYPE = 'app_start_type';

// Path: model/attributes/blocked_main_thread.json

/**
 * Whether the main thread was blocked by the span.
 *
 * Attribute Value Type: boolean
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example true
 */
export const BLOCKED_MAIN_THREAD = 'blocked_main_thread';

// Path: model/attributes/browser/browser__name.json

/**
 * The name of the browser.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example "Chrome"
 */
export const BROWSER_NAME = 'browser.name';

// Path: model/attributes/browser/browser__script__invoker.json

/**
 * How a script was called in the browser.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example "Window.requestAnimationFrame"
 */
export const BROWSER_SCRIPT_INVOKER = 'browser.script.invoker';

// Path: model/attributes/browser/browser__script__invoker_type.json

/**
 * Browser script entry point type.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example "event-listener"
 */
export const BROWSER_SCRIPT_INVOKER_TYPE = 'browser.script.invoker_type';

// Path: model/attributes/browser/browser__script__source_char_position.json

/**
 * A number representing the script character position of the script.
 *
 * Attribute Value Type: number
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example 678
 */
export const BROWSER_SCRIPT_SOURCE_CHAR_POSITION = 'browser.script.source_char_position';

// Path: model/attributes/cache/cache__hit.json

/**
 * If the cache was hit during this span.
 *
 * Attribute Value Type: boolean
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example true
 */
export const CACHE_HIT = 'cache.hit';

// Path: model/attributes/cache/cache__item_size.json

/**
 * The size of the requested item in the cache. In bytes.
 *
 * Attribute Value Type: number
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example 58
 */
export const CACHE_ITEM_SIZE = 'cache.item_size';

// Path: model/attributes/cache/cache__key.json

/**
 * The key of the cache accessed.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example "my-cache-key"
 */
export const CACHE_KEY = 'cache.key';

// Path: model/attributes/cache/cache__ttl.json

/**
 * The ttl of the cache in seconds
 *
 * Attribute Value Type: number
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example 120
 */
export const CACHE_TTL = 'cache.ttl';

// Path: model/attributes/channel.json

/**
 * The channel name that is being used.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example "mail"
 */
export const CHANNEL = 'channel';

// Path: model/attributes/client/client__address.json

/**
 * Client address - domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link HTTP_CLIENT_ID} 'http.client_id'
 *
 * @example "example.com"
 */
export const CLIENT_ADDRESS = 'client.address';

// Path: model/attributes/client/client__port.json

/**
 * Client port number.
 *
 * Attribute Value Type: number
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example 5432
 */
export const CLIENT_PORT = 'client.port';

// Path: model/attributes/cloudflare/cloudflare__d1__duration.json

/**
 * The duration of a Cloudflare D1 operation.
 *
 * Attribute Value Type: number
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example 543
 */
export const CLOUDFLARE_D1_DURATION = 'cloudflare.d1.duration';

// Path: model/attributes/cloudflare/cloudflare__d1__rows_read.json

/**
 * The number of rows read in a Cloudflare D1 operation.
 *
 * Attribute Value Type: number
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example 12
 */
export const CLOUDFLARE_D1_ROWS_READ = 'cloudflare.d1.rows_read';

// Path: model/attributes/cloudflare/cloudflare__d1__rows_written.json

/**
 * The number of rows written in a Cloudflare D1 operation.
 *
 * Attribute Value Type: number
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example 12
 */
export const CLOUDFLARE_D1_ROWS_WRITTEN = 'cloudflare.d1.rows_written';

// Path: model/attributes/code/code__file__path.json

/**
 * The source code file name that identifies the code unit as uniquely as possible (preferably an absolute file path).
 *
 * Attribute Value Type: string
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link CODE_FILEPATH} 'code.filepath'
 *
 * @example "/app/myapplication/http/handler/server.py"
 */
export const CODE_FILE_PATH = 'code.file.path';

// Path: model/attributes/code/code__filepath.json

/**
 * The source code file name that identifies the code unit as uniquely as possible (preferably an absolute file path).
 *
 * Attribute Value Type: string
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link CODE_FILE_PATH} 'code.file.path'
 *
 * @deprecated Use {@link CODE_FILE_PATH} (code.file.path) instead
 * @example "/app/myapplication/http/handler/server.py"
 */
export const CODE_FILEPATH = 'code.filepath';

// Path: model/attributes/code/code__function.json

/**
 * The method or function name, or equivalent (usually rightmost part of the code unit's name).
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link CODE_FUNCTION_NAME} 'code.function.name'
 *
 * @deprecated Use {@link CODE_FUNCTION_NAME} (code.function.name) instead
 * @example "server_request"
 */
export const CODE_FUNCTION = 'code.function';

// Path: model/attributes/code/code__function__name.json

/**
 * The method or function name, or equivalent (usually rightmost part of the code unit's name).
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link CODE_FUNCTION} 'code.function'
 *
 * @example "server_request"
 */
export const CODE_FUNCTION_NAME = 'code.function.name';

// Path: model/attributes/code/code__line__number.json

/**
 * The line number in code.filepath best representing the operation. It SHOULD point within the code unit named in code.function
 *
 * Attribute Value Type: number
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link CODE_LINENO} 'code.lineno'
 *
 * @example 42
 */
export const CODE_LINE_NUMBER = 'code.line.number';

// Path: model/attributes/code/code__lineno.json

/**
 * The line number in code.filepath best representing the operation. It SHOULD point within the code unit named in code.function
 *
 * Attribute Value Type: number
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link CODE_LINENO} 'code.lineno'
 *
 * @deprecated Use {@link CODE_LINE_NUMBER} (code.line.number) instead
 * @example 42
 */
export const CODE_LINENO = 'code.lineno';

// Path: model/attributes/code/code__namespace.json

/**
 * The 'namespace' within which code.function is defined. Usually the qualified class or module name, such that code.namespace + some separator + code.function form a unique identifier for the code unit.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @deprecated Use {@link CODE_FUNCTION_NAME} (code.function.name) instead - code.function.name should include the namespace.
 * @example "http.handler"
 */
export const CODE_NAMESPACE = 'code.namespace';

// Path: model/attributes/db/db__collection__name.json

/**
 * The name of a collection (table, container) within the database.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link DB_COLLECTION} 'db.collection'
 *
 * @example "users"
 */
export const DB_COLLECTION_NAME = 'db.collection.name';

// Path: model/attributes/db/db__name.json

/**
 * The name of the database being accessed.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link DB_NAMESPACE} 'db.namespace'
 *
 * @deprecated Use {@link DB_NAMESPACE} (db.namespace) instead
 * @example "customers"
 */
export const DB_NAME = 'db.name';

// Path: model/attributes/db/db__namespace.json

/**
 * The name of the database being accessed.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link DB_NAME} 'db.name'
 *
 * @example "customers"
 */
export const DB_NAMESPACE = 'db.namespace';

// Path: model/attributes/db/db__operation.json

/**
 * The name of the operation being executed.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link DB_OPERATION_NAME} 'db.operation.name'
 *
 * @deprecated Use {@link DB_OPERATION_NAME} (db.operation.name) instead
 * @example "SELECT"
 */
export const DB_OPERATION = 'db.operation';

// Path: model/attributes/db/db__operation__name.json

/**
 * The name of the operation being executed.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link DB_OPERATION} 'db.operation'
 *
 * @example "SELECT"
 */
export const DB_OPERATION_NAME = 'db.operation.name';

// Path: model/attributes/db/db__query__parameter__<key>.json

/**
 * A query parameter used in db.query.text, with <key> being the parameter name, and the attribute value being a string representation of the parameter value.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Has Dynamic Suffix: true
 *
 * @example "db.query.parameter.foo='123'"
 */
export const DB_QUERY_PARAMETER_KEY = 'db.query.parameter.<key>';

// Path: model/attributes/db/db__query__text.json

/**
 * The database query being executed. Should be paramaterized
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link DB_STATEMENT} 'db.statement'
 *
 * @example "SELECT * FROM users"
 */
export const DB_QUERY_TEXT = 'db.query.text';

// Path: model/attributes/db/db__redis__connection.json

/**
 * The redis connection name.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example "my-redis-instance"
 */
export const DB_REDIS_CONNECTION = 'db.redis.connection';

// Path: model/attributes/db/db__redis__parameters.json

/**
 * The array of command parameters given to a redis command.
 *
 * Attribute Value Type: Array<string>
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: No
 *
 * @example ["test","*"]
 */
export const DB_REDIS_PARAMETERS = 'db.redis.parameters';

// Path: model/attributes/db/db__sql__bindings.json

/**
 * The array of query bindings.
 *
 * Attribute Value Type: Array<string>
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: No
 *
 * @deprecated Use {@link DB_QUERY_PARAMETER_KEY} (db.query.parameter.<key>) instead - Instead of adding every binding in the db.sql.bindings attribute, add them as individual entires with db.query.parameter.<key>.
 * @example ["1","foo"]
 */
export const DB_SQL_BINDINGS = 'db.sql.bindings';

// Path: model/attributes/db/db__statement.json

/**
 * The database statement being executed.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link DB_QUERY_TEXT} 'db.query.text'
 *
 * @deprecated Use {@link DB_QUERY_TEXT} (db.query.text) instead
 * @example "SELECT * FROM users"
 */
export const DB_STATEMENT = 'db.statement';

// Path: model/attributes/db/db__system.json

/**
 * An identifier for the database management system (DBMS) product being used. See [OpenTelemetry docs](https://github.com/open-telemetry/semantic-conventions/blob/main/docs/database/database-spans.md#notes-and-well-known-identifiers-for-dbsystem) for a list of well-known identifiers.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link DB_SYSTEM_NAME} 'db.system.name'
 *
 * @deprecated Use {@link DB_SYSTEM_NAME} (db.system.name) instead
 * @example "postgresql"
 */
export const DB_SYSTEM = 'db.system';

// Path: model/attributes/db/db__system__name.json

/**
 * An identifier for the database management system (DBMS) product being used. See [OpenTelemetry docs](https://github.com/open-telemetry/semantic-conventions/blob/main/docs/database/database-spans.md#notes-and-well-known-identifiers-for-dbsystem) for a list of well-known identifiers.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link DB_SYSTEM} 'db.system'
 *
 * @example "postgresql"
 */
export const DB_SYSTEM_NAME = 'db.system.name';

// Path: model/attributes/db/db__user.json

/**
 * The database user.
 *
 * Attribute Value Type: string
 *
 * Contains PII: true
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "fancy_user"
 */
export const DB_USER = 'db.user';

// Path: model/attributes/environment.json

/**
 * The sentry environment.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * Aliases: {@link SENTRY_ENVIRONMENT} 'sentry.environment'
 *
 * @deprecated Use {@link SENTRY_ENVIRONMENT} (sentry.environment) instead
 * @example "production"
 */
export const ENVIRONMENT = 'environment';

// Path: model/attributes/error/error__type.json

/**
 * Describes a class of error the operation ended with.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "timeout"
 */
export const ERROR_TYPE = 'error.type';

// Path: model/attributes/exception/exception__escaped.json

/**
 * SHOULD be set to true if the exception event is recorded at a point where it is known that the exception is escaping the scope of the span.
 *
 * Attribute Value Type: boolean
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example true
 */
export const EXCEPTION_ESCAPED = 'exception.escaped';

// Path: model/attributes/exception/exception__message.json

/**
 * The error message.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "ENOENT: no such file or directory"
 */
export const EXCEPTION_MESSAGE = 'exception.message';

// Path: model/attributes/exception/exception__stacktrace.json

/**
 * A stacktrace as a string in the natural representation for the language runtime. The representation is to be determined and documented by each language SIG.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "Exception in thread \"main\" java.lang.RuntimeException: Test exception\n at com.example.GenerateTrace.methodB(GenerateTrace.java:13)\n at com.example.GenerateTrace.methodA(GenerateTrace.java:9)\n at com.example.GenerateTrace.main(GenerateTrace.java:5)"
 */
export const EXCEPTION_STACKTRACE = 'exception.stacktrace';

// Path: model/attributes/exception/exception__type.json

/**
 * The type of the exception (its fully-qualified class name, if applicable). The dynamic type of the exception should be preferred over the static type in languages that support it.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "OSError"
 */
export const EXCEPTION_TYPE = 'exception.type';

// Path: model/attributes/faas/faas__coldstart.json

/**
 * A boolean that is true if the serverless function is executed for the first time (aka cold-start).
 *
 * Attribute Value Type: boolean
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example true
 */
export const FAAS_COLDSTART = 'faas.coldstart';

// Path: model/attributes/faas/faas__cron.json

/**
 * A string containing the schedule period as Cron Expression.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "0/5 * * * ? *"
 */
export const FAAS_CRON = 'faas.cron';

// Path: model/attributes/faas/faas__time.json

/**
 * A string containing the function invocation time in the ISO 8601 format expressed in UTC.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "2020-01-23T13:47:06Z"
 */
export const FAAS_TIME = 'faas.time';

// Path: model/attributes/faas/faas__trigger.json

/**
 * Type of the trigger which caused this function invocation.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "timer"
 */
export const FAAS_TRIGGER = 'faas.trigger';

// Path: model/attributes/frames/frames__delay.json

/**
 * The sum of all delayed frame durations in seconds during the lifetime of the span. For more information see [frames delay](https://develop.sentry.dev/sdk/performance/frames-delay/).
 *
 * Attribute Value Type: number
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example 5
 */
export const FRAMES_DELAY = 'frames.delay';

// Path: model/attributes/frames/frames__frozen.json

/**
 * The number of frozen frames rendered during the lifetime of the span.
 *
 * Attribute Value Type: number
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example 3
 */
export const FRAMES_FROZEN = 'frames.frozen';

// Path: model/attributes/frames/frames__slow.json

/**
 * The number of slow frames rendered during the lifetime of the span.
 *
 * Attribute Value Type: number
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example 1
 */
export const FRAMES_SLOW = 'frames.slow';

// Path: model/attributes/frames/frames__total.json

/**
 * The number of total frames rendered during the lifetime of the span.
 *
 * Attribute Value Type: number
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example 60
 */
export const FRAMES_TOTAL = 'frames.total';

// Path: model/attributes/fs_error.json

/**
 * The error message of a file system error.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @deprecated Use {@link ERROR_TYPE} (error.type) instead - This attribute is not part of the OpenTelemetry specification and error.type fits much better.
 * @example "ENOENT: no such file or directory"
 */
export const FS_ERROR = 'fs_error';

// Path: model/attributes/gen_ai/gen_ai__prompt.json

/**
 * The input messages sent to the model
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "[{\"role\": \"user\", \"message\": \"hello\"}]"
 */
export const GEN_AI_PROMPT = 'gen_ai.prompt';

// Path: model/attributes/gen_ai/gen_ai__response__model.json

/**
 * The vendor-specific ID of the model used.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link AI_MODEL_ID} 'ai.model_id'
 *
 * @example "gpt-4"
 */
export const GEN_AI_RESPONSE_MODEL = 'gen_ai.response.model';

// Path: model/attributes/gen_ai/gen_ai__usage__completion_tokens.json

/**
 * The number of tokens used in the GenAI response (completion).
 *
 * Attribute Value Type: number
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link AI_COMPLETION_TOKENS_USED} 'ai.completion_tokens.used', {@link GEN_AI_USAGE_OUTPUT_TOKENS} 'gen_ai.usage.output_tokens'
 *
 * @deprecated Use {@link GEN_AI_USAGE_OUTPUT_TOKENS} (gen_ai.usage.output_tokens) instead
 * @example 10
 */
export const GEN_AI_USAGE_COMPLETION_TOKENS = 'gen_ai.usage.completion_tokens';

// Path: model/attributes/gen_ai/gen_ai__usage__input_tokens.json

/**
 * The number of tokens used in the GenAI input (prompt).
 *
 * Attribute Value Type: number
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link AI_PROMPT_TOKENS_USED} 'ai.prompt_tokens.used', {@link GEN_AI_USAGE_PROMPT_TOKENS} 'gen_ai.usage.prompt_tokens'
 *
 * @example 10
 */
export const GEN_AI_USAGE_INPUT_TOKENS = 'gen_ai.usage.input_tokens';

// Path: model/attributes/gen_ai/gen_ai__usage__output_tokens.json

/**
 * The number of tokens used in the GenAI response (completion).
 *
 * Attribute Value Type: number
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link AI_COMPLETION_TOKENS_USED} 'ai.completion_tokens.used', {@link GEN_AI_USAGE_COMPLETION_TOKENS} 'gen_ai.usage.completion_tokens'
 *
 * @example 10
 */
export const GEN_AI_USAGE_OUTPUT_TOKENS = 'gen_ai.usage.output_tokens';

// Path: model/attributes/gen_ai/gen_ai__usage__prompt_tokens.json

/**
 * The number of tokens used in the GenAI input (prompt).
 *
 * Attribute Value Type: number
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link AI_PROMPT_TOKENS_USED} 'ai.prompt_tokens.used', {@link GEN_AI_USAGE_INPUT_TOKENS} 'gen_ai.usage.input_tokens'
 *
 * @deprecated Use {@link GEN_AI_USAGE_INPUT_TOKENS} (gen_ai.usage.input_tokens) instead
 * @example 20
 */
export const GEN_AI_USAGE_PROMPT_TOKENS = 'gen_ai.usage.prompt_tokens';

// Path: model/attributes/graphql/graphql__operation__name.json

/**
 * The name of the operation being executed.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "findBookById"
 */
export const GRAPHQL_OPERATION_NAME = 'graphql.operation.name';

// Path: model/attributes/graphql/graphql__operation__type.json

/**
 * The type of the operation being executed.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "query"
 */
export const GRAPHQL_OPERATION_TYPE = 'graphql.operation.type';

// Path: model/attributes/http/http__client_ip.json

/**
 * Client address - domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link CLIENT_ADDRESS} 'client.address'
 *
 * @deprecated Use {@link HTTP_CLIENT_IP} (http.client_ip) instead
 * @example "example.com"
 */
export const HTTP_CLIENT_IP = 'http.client_ip';

// Path: model/attributes/http/http__decoded_response_content_length.json

/**
 * The decoded body size of the response (in bytes).
 *
 * Attribute Value Type: number
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example 456
 */
export const HTTP_DECODED_RESPONSE_CONTENT_LENGTH = 'http.decoded_response_content_length';

// Path: model/attributes/http/http__flavor.json

/**
 * The actual version of the protocol used for network communication.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link NETWORK_PROTOCOL_VERSION} 'network.protocol.version'
 *
 * @deprecated Use {@link NETWORK_PROTOCOL_VERSION} (network.protocol.version) instead
 * @example "1.1"
 */
export const HTTP_FLAVOR = 'http.flavor';

// Path: model/attributes/http/http__fragment.json

/**
 * The fragments present in the URI. Note that this contains the leading # character, while the `url.fragment` attribute does not.
 *
 * Attribute Value Type: string
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: No
 *
 * @example "#details"
 */
export const HTTP_FRAGMENT = 'http.fragment';

// Path: model/attributes/http/http__host.json

/**
 * The domain name.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link SERVER_ADDRESS} 'server.address', {@link CLIENT_ADDRESS} 'client.address'
 *
 * @deprecated Use {@link SERVER_ADDRESS} (server.address) instead - Deprecated, use one of `server.address` or `client.address`, depending on the usage
 * @example "example.com"
 */
export const HTTP_HOST = 'http.host';

// Path: model/attributes/http/http__method.json

/**
 * The HTTP method used.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link HTTP_REQUEST_METHOD} 'http.request.method'
 *
 * @deprecated Use {@link HTTP_REQUEST_METHOD} (http.request.method) instead
 * @example "GET"
 */
export const HTTP_METHOD = 'http.method';

// Path: model/attributes/http/http__query.json

/**
 * The query string present in the URL. Note that this contains the leading ? character, while the `url.query` attribute does not.
 *
 * Attribute Value Type: string
 *
 * Contains PII: maybe - Query string values can contain sensitive information. Clients should attempt to scrub parameters that might contain sensitive information.
 *
 * Attribute defined in OTEL: No
 *
 * @example "?foo=bar&bar=baz"
 */
export const HTTP_QUERY = 'http.query';

// Path: model/attributes/http/http__request__connect_start.json

/**
 * The UNIX timestamp representing the time immediately before the user agent starts establishing the connection to the server to retrieve the resource.
 *
 * Attribute Value Type: number
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example 1732829555
 */
export const HTTP_REQUEST_CONNECT_START = 'http.request.connect_start';

// Path: model/attributes/http/http__request__connection_end.json

/**
 * The UNIX timestamp representing the time immediately after the browser finishes establishing the connection to the server to retrieve the resource. The timestamp value includes the time interval to establish the transport connection, as well as other time intervals such as TLS handshake and SOCKS authentication.
 *
 * Attribute Value Type: number
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example 1732829555
 */
export const HTTP_REQUEST_CONNECTION_END = 'http.request.connection_end';

// Path: model/attributes/http/http__request__domain_lookup_end.json

/**
 * The UNIX timestamp representing the time immediately after the browser finishes the domain-name lookup for the resource.
 *
 * Attribute Value Type: number
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example 1732829555
 */
export const HTTP_REQUEST_DOMAIN_LOOKUP_END = 'http.request.domain_lookup_end';

// Path: model/attributes/http/http__request__domain_lookup_start.json

/**
 * The UNIX timestamp representing the time immediately before the browser starts the domain name lookup for the resource.
 *
 * Attribute Value Type: number
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example 1732829555
 */
export const HTTP_REQUEST_DOMAIN_LOOKUP_START = 'http.request.domain_lookup_start';

// Path: model/attributes/http/http__request__fetch_start.json

/**
 * The UNIX timestamp representing the time immediately before the browser starts to fetch the resource.
 *
 * Attribute Value Type: number
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example 1732829555
 */
export const HTTP_REQUEST_FETCH_START = 'http.request.fetch_start';

// Path: model/attributes/http/http__request__header__<key>.json

/**
 * HTTP request headers, <key> being the normalized HTTP Header name (lowercase), the value being the header values.
 *
 * Attribute Value Type: Array<string>
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: Yes
 *
 * Has Dynamic Suffix: true
 *
 * @example "http.request.header.custom-header=['foo', 'bar']"
 */
export const HTTP_REQUEST_HEADER_KEY = 'http.request.header.<key>';

// Path: model/attributes/http/http__request__method.json

/**
 * The HTTP method used.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link METHOD} 'method', {@link HTTP_METHOD} 'http.method'
 *
 * @example "GET"
 */
export const HTTP_REQUEST_METHOD = 'http.request.method';

// Path: model/attributes/http/http__request__redirect_start.json

/**
 * The UNIX timestamp representing the start time of the fetch which that initiates the redirect.
 *
 * Attribute Value Type: number
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example 1732829555
 */
export const HTTP_REQUEST_REDIRECT_START = 'http.request.redirect_start';

// Path: model/attributes/http/http__request__request_start.json

/**
 * The UNIX timestamp representing the time immediately before the browser starts requesting the resource from the server, cache, or local resource. If the transport connection fails and the browser retires the request, the value returned will be the start of the retry request.
 *
 * Attribute Value Type: number
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example 1732829555
 */
export const HTTP_REQUEST_REQUEST_START = 'http.request.request_start';

// Path: model/attributes/http/http__request__resend_count.json

/**
 * The ordinal number of request resending attempt (for any reason, including redirects).
 *
 * Attribute Value Type: number
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example 2
 */
export const HTTP_REQUEST_RESEND_COUNT = 'http.request.resend_count';

// Path: model/attributes/http/http__request__response_end.json

/**
 * The UNIX timestamp representing the time immediately after the browser receives the last byte of the resource or immediately before the transport connection is closed, whichever comes first.
 *
 * Attribute Value Type: number
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example 1732829555
 */
export const HTTP_REQUEST_RESPONSE_END = 'http.request.response_end';

// Path: model/attributes/http/http__request__response_start.json

/**
 * The UNIX timestamp representing the time immediately before the browser starts requesting the resource from the server, cache, or local resource. If the transport connection fails and the browser retires the request, the value returned will be the start of the retry request.
 *
 * Attribute Value Type: number
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example 1732829555
 */
export const HTTP_REQUEST_RESPONSE_START = 'http.request.response_start';

// Path: model/attributes/http/http__request__secure_connection_start.json

/**
 * The UNIX timestamp representing the time immediately before the browser starts the handshake process to secure the current connection. If a secure connection is not used, the property returns zero.
 *
 * Attribute Value Type: number
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example 1732829555
 */
export const HTTP_REQUEST_SECURE_CONNECTION_START = 'http.request.secure_connection_start';

// Path: model/attributes/http/http__response__body__size.json

/**
 * The encoded body size of the response (in bytes).
 *
 * Attribute Value Type: number
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link HTTP_RESPONSE_CONTENT_LENGTH} 'http.response_content_length', {@link HTTP_RESPONSE_HEADER_CONTENT_LENGTH} 'http.response.header.content-length', {@link HTTP_RESPONSE_HEADER['CONTENT_LENGTH']} 'http.response.header['content-length']'
 *
 * @example 123
 */
export const HTTP_RESPONSE_BODY_SIZE = 'http.response.body.size';

// Path: model/attributes/http/http__response__header__<key>.json

/**
 * HTTP response headers, <key> being the normalized HTTP Header name (lowercase), the value being the header values.
 *
 * Attribute Value Type: Array<string>
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: Yes
 *
 * Has Dynamic Suffix: true
 *
 * @example "http.response.header.custom-header=['foo', 'bar']"
 */
export const HTTP_RESPONSE_HEADER_KEY = 'http.response.header.<key>';

// Path: model/attributes/http/http__response__header__content-length.json

/**
 * The size of the message body sent to the recipient (in bytes)
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Has Dynamic Suffix: true
 *
 * Aliases: {@link HTTP_RESPONSE_CONTENT_LENGTH} 'http.response_content_length', {@link HTTP_RESPONSE_BODY_SIZE} 'http.response.body.size'
 *
 * @example "http.response.header.custom-header=['foo', 'bar']"
 */
export const HTTP_RESPONSE_HEADER_CONTENT_LENGTH = 'http.response.header.content-length';

// Path: model/attributes/http/http__response__size.json

/**
 * The transfer size of the response (in bytes).
 *
 * Attribute Value Type: number
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link HTTP_RESPONSE_TRANSFER_SIZE} 'http.response_transfer_size'
 *
 * @example 456
 */
export const HTTP_RESPONSE_SIZE = 'http.response.size';

// Path: model/attributes/http/http__response__status_code.json

/**
 * The status code of the HTTP response.
 *
 * Attribute Value Type: number
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link HTTP_STATUS_CODE} 'http.status_code'
 *
 * @example 404
 */
export const HTTP_RESPONSE_STATUS_CODE = 'http.response.status_code';

// Path: model/attributes/http/http__response_content_length.json

/**
 * The encoded body size of the response (in bytes).
 *
 * Attribute Value Type: number
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link HTTP_RESPONSE_BODY_SIZE} 'http.response.body.size', {@link HTTP_RESPONSE_HEADER_CONTENT_LENGTH} 'http.response.header.content-length', {@link HTTP_RESPONSE_HEADER['CONTENT_LENGTH']} 'http.response.header['content-length']'
 *
 * @deprecated Use {@link HTTP_RESPONSE_BODY_SIZE} (http.response.body.size) instead
 * @example 123
 */
export const HTTP_RESPONSE_CONTENT_LENGTH = 'http.response_content_length';

// Path: model/attributes/http/http__response_transfer_size.json

/**
 * The transfer size of the response (in bytes).
 *
 * Attribute Value Type: number
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * Aliases: {@link HTTP_RESPONSE_SIZE} 'http.response.size'
 *
 * @deprecated Use {@link HTTP_RESPONSE_SIZE} (http.response.size) instead
 * @example 456
 */
export const HTTP_RESPONSE_TRANSFER_SIZE = 'http.response_transfer_size';

// Path: model/attributes/http/http__route.json

/**
 * The matched route, that is, the path template in the format used by the respective server framework.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link URL_TEMPLATE} 'url.template'
 *
 * @example "/users/:id"
 */
export const HTTP_ROUTE = 'http.route';

// Path: model/attributes/http/http__scheme.json

/**
 * The URI scheme component identifying the used protocol.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link URL_SCHEME} 'url.scheme'
 *
 * @deprecated Use {@link URL_SCHEME} (url.scheme) instead
 * @example "https"
 */
export const HTTP_SCHEME = 'http.scheme';

// Path: model/attributes/http/http__server_name.json

/**
 * The server domain name
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link SERVER_ADDRESS} 'server.address'
 *
 * @deprecated Use {@link SERVER_ADDRESS} (server.address) instead
 * @example "example.com"
 */
export const HTTP_SERVER_NAME = 'http.server_name';

// Path: model/attributes/http/http__status_code.json

/**
 * The status code of the HTTP response.
 *
 * Attribute Value Type: number
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link HTTP_RESPONSE_STATUS_CODE} 'http.response.status_code'
 *
 * @deprecated Use {@link HTTP_RESPONSE_STATUS_CODE} (http.response.status_code) instead
 * @example 404
 */
export const HTTP_STATUS_CODE = 'http.status_code';

// Path: model/attributes/http/http__target.json

/**
 * The pathname and query string of the URL.
 *
 * Attribute Value Type: string
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: Yes
 *
 * @deprecated Use {@link URL_PATH} (url.path) instead - This attribute is being deprecated in favor of url.path and url.query
 * @example "/test?foo=bar#buzz"
 */
export const HTTP_TARGET = 'http.target';

// Path: model/attributes/http/http__url.json

/**
 * The URL of the resource that was fetched.
 *
 * Attribute Value Type: string
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link URL_FULL} 'url.full', {@link HTTP_URL} 'http.url'
 *
 * @deprecated Use {@link URL_FULL} (url.full) instead
 * @example "https://example.com/test?foo=bar#buzz"
 */
export const HTTP_URL = 'http.url';

// Path: model/attributes/http/http__user_agent.json

/**
 * Value of the HTTP User-Agent header sent by the client.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link USER_AGENT_ORIGINAL} 'user_agent.original'
 *
 * @deprecated Use {@link USER_AGENT_ORIGINAL} (user_agent.original) instead
 * @example "Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Mobile/15E148 Safari/604.1"
 */
export const HTTP_USER_AGENT = 'http.user_agent';

// Path: model/attributes/id.json

/**
 * A unique identifier for the span.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example "f47ac10b58cc4372a5670e02b2c3d479"
 */
export const ID = 'id';

// Path: model/attributes/jvm/jvm__gc__action.json

/**
 * Name of the garbage collector action.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "end of minor GC"
 */
export const JVM_GC_ACTION = 'jvm.gc.action';

// Path: model/attributes/jvm/jvm__gc__name.json

/**
 * Name of the garbage collector.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "G1 Young Generation"
 */
export const JVM_GC_NAME = 'jvm.gc.name';

// Path: model/attributes/jvm/jvm__memory__pool__name.json

/**
 * Name of the memory pool.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "G1 Old Gen"
 */
export const JVM_MEMORY_POOL_NAME = 'jvm.memory.pool.name';

// Path: model/attributes/jvm/jvm__memory__type.json

/**
 * Name of the memory pool.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "G1 Old Gen"
 */
export const JVM_MEMORY_TYPE = 'jvm.memory.type';

// Path: model/attributes/jvm/jvm__thread__daemon.json

/**
 * Whether the thread is daemon or not.
 *
 * Attribute Value Type: boolean
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example true
 */
export const JVM_THREAD_DAEMON = 'jvm.thread.daemon';

// Path: model/attributes/jvm/jvm__thread__state.json

/**
 * State of the thread.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "blocked"
 */
export const JVM_THREAD_STATE = 'jvm.thread.state';

// Path: model/attributes/lcp/lcp__element.json

/**
 * The dom element responsible for the largest contentful paint.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example "img"
 */
export const LCP_ELEMENT = 'lcp.element';

// Path: model/attributes/lcp/lcp__id.json

/**
 * The id of the dom element responsible for the largest contentful paint.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example "#hero"
 */
export const LCP_ID = 'lcp.id';

// Path: model/attributes/lcp/lcp__size.json

/**
 * The size of the largest contentful paint element.
 *
 * Attribute Value Type: number
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example 1234
 */
export const LCP_SIZE = 'lcp.size';

// Path: model/attributes/lcp/lcp__url.json

/**
 * The url of the dom element responsible for the largest contentful paint.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example "https://example.com"
 */
export const LCP_URL = 'lcp.url';

// Path: model/attributes/logger/logger__name.json

/**
 * The name of the logger that generated this event.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example "myLogger"
 */
export const LOGGER_NAME = 'logger.name';

// Path: model/attributes/messaging/messaging__destination__connection.json

/**
 * The message destination connection.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example "BestTopic"
 */
export const MESSAGING_DESTINATION_CONNECTION = 'messaging.destination.connection';

// Path: model/attributes/messaging/messaging__destination__name.json

/**
 * The message destination name.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "BestTopic"
 */
export const MESSAGING_DESTINATION_NAME = 'messaging.destination.name';

// Path: model/attributes/messaging/messaging__message__body__size.json

/**
 * The size of the message body in bytes.
 *
 * Attribute Value Type: number
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example 839
 */
export const MESSAGING_MESSAGE_BODY_SIZE = 'messaging.message.body.size';

// Path: model/attributes/messaging/messaging__message__envelope__size.json

/**
 * The size of the message body and metadata in bytes.
 *
 * Attribute Value Type: number
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example 1045
 */
export const MESSAGING_MESSAGE_ENVELOPE_SIZE = 'messaging.message.envelope.size';

// Path: model/attributes/messaging/messaging__message__id.json

/**
 * A value used by the messaging system as an identifier for the message, represented as a string.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "f47ac10b58cc4372a5670e02b2c3d479"
 */
export const MESSAGING_MESSAGE_ID = 'messaging.message.id';

// Path: model/attributes/messaging/messaging__message__receive__latency.json

/**
 * The latency between when the message was published and received.
 *
 * Attribute Value Type: number
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example 1732847252
 */
export const MESSAGING_MESSAGE_RECEIVE_LATENCY = 'messaging.message.receive.latency';

// Path: model/attributes/messaging/messaging__message__retry__count.json

/**
 * The amount of attempts to send the message.
 *
 * Attribute Value Type: number
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example 2
 */
export const MESSAGING_MESSAGE_RETRY_COUNT = 'messaging.message.retry.count';

// Path: model/attributes/messaging/messaging__system.json

/**
 * The messaging system as identified by the client instrumentation.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "activemq"
 */
export const MESSAGING_SYSTEM = 'messaging.system';

// Path: model/attributes/method.json

/**
 * The HTTP method used.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * Aliases: {@link HTTP_REQUEST_METHOD} 'http.request.method'
 *
 * @deprecated Use {@link HTTP_REQUEST_METHOD} (http.request.method) instead
 * @example "GET"
 */
export const METHOD = 'method';

// Path: model/attributes/navigation/navigation__type.json

/**
 * The type of navigation done by a client-side router.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example "router.push"
 */
export const NAVIGATION_TYPE = 'navigation.type';

// Path: model/attributes/net/net__host__ip.json

/**
 * Local address of the network connection - IP address or Unix domain socket name.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link NETWORK_LOCAL_ADDRESS} 'network.local.address'
 *
 * @deprecated Use {@link NETWORK_LOCAL_ADDRESS} (network.local.address) instead
 * @example "192.168.0.1"
 */
export const NET_HOST_IP = 'net.host.ip';

// Path: model/attributes/net/net__host__name.json

/**
 * Server domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link SERVER_ADDRESS} 'server.address'
 *
 * @deprecated Use {@link SERVER_ADDRESS} (server.address) instead
 * @example "example.com"
 */
export const NET_HOST_NAME = 'net.host.name';

// Path: model/attributes/net/net__host__port.json

/**
 * Server port number.
 *
 * Attribute Value Type: number
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link SERVER_PORT} 'server.port'
 *
 * @deprecated Use {@link SERVER_PORT} (server.port) instead
 * @example 1337
 */
export const NET_HOST_PORT = 'net.host.port';

// Path: model/attributes/net/net__peer__ip.json

/**
 * Peer address of the network connection - IP address or Unix domain socket name.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link NETWORK_PEER_ADDRESS} 'network.peer.address'
 *
 * @deprecated Use {@link NETWORK_PEER_ADDRESS} (network.peer.address) instead
 * @example "192.168.0.1"
 */
export const NET_PEER_IP = 'net.peer.ip';

// Path: model/attributes/net/net__peer__name.json

/**
 * Server domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @deprecated Use {@link SERVER_ADDRESS} (server.address) instead - Deprecated, use server.address on client spans and client.address on server spans.
 * @example "example.com"
 */
export const NET_PEER_NAME = 'net.peer.name';

// Path: model/attributes/net/net__peer__port.json

/**
 * Peer port number.
 *
 * Attribute Value Type: number
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @deprecated Use {@link SERVER_PORT} (server.port) instead - Deprecated, use server.port on client spans and client.port on server spans.
 * @example 1337
 */
export const NET_PEER_PORT = 'net.peer.port';

// Path: model/attributes/net/net__protocol__name.json

/**
 * OSI application layer or non-OSI equivalent.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link NETWORK_PROTOCOL_NAME} 'network.protocol.name'
 *
 * @deprecated Use {@link NETWORK_PROTOCOL_NAME} (network.protocol.name) instead
 * @example "http"
 */
export const NET_PROTOCOL_NAME = 'net.protocol.name';

// Path: model/attributes/net/net__protocol__version.json

/**
 * The actual version of the protocol used for network communication.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link NETWORK_PROTOCOL_VERSION} 'network.protocol.version'
 *
 * @deprecated Use {@link NETWORK_PROTOCOL_VERSION} (network.protocol.version) instead
 * @example "1.1"
 */
export const NET_PROTOCOL_VERSION = 'net.protocol.version';

// Path: model/attributes/net/net__sock__family.json

/**
 * OSI transport and network layer
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @deprecated Use {@link NETWORK_TRANSPORT} (network.transport) instead - Deprecated, use network.transport and network.type.
 * @example "inet"
 */
export const NET_SOCK_FAMILY = 'net.sock.family';

// Path: model/attributes/net/net__sock__host__addr.json

/**
 * Local address of the network connection mapping to Unix domain socket name.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link NETWORK_LOCAL_ADDRESS} 'network.local.address'
 *
 * @deprecated Use {@link NETWORK_LOCAL_ADDRESS} (network.local.address) instead
 * @example "/var/my.sock"
 */
export const NET_SOCK_HOST_ADDR = 'net.sock.host.addr';

// Path: model/attributes/net/net__sock__host__port.json

/**
 * Local port number of the network connection.
 *
 * Attribute Value Type: number
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link NETWORK_LOCAL_PORT} 'network.local.port'
 *
 * @deprecated Use {@link NETWORK_LOCAL_PORT} (network.local.port) instead
 * @example 8080
 */
export const NET_SOCK_HOST_PORT = 'net.sock.host.port';

// Path: model/attributes/net/net__sock__peer__addr.json

/**
 * Peer address of the network connection - IP address
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link NETWORK_PEER_ADDRESS} 'network.peer.address'
 *
 * @deprecated Use {@link NETWORK_PEER_ADDRESS} (network.peer.address) instead
 * @example "192.168.0.1"
 */
export const NET_SOCK_PEER_ADDR = 'net.sock.peer.addr';

// Path: model/attributes/net/net__sock__peer__name.json

/**
 * Peer address of the network connection - Unix domain socket name
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @deprecated Use {@link } () instead - Deprecated, no replacement at this time
 * @example "/var/my.sock"
 */
export const NET_SOCK_PEER_NAME = 'net.sock.peer.name';

// Path: model/attributes/net/net__sock__peer__port.json

/**
 * Peer port number of the network connection.
 *
 * Attribute Value Type: number
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @deprecated Use {@link NETWORK_PEER_PORT} (network.peer.port) instead
 * @example 8080
 */
export const NET_SOCK_PEER_PORT = 'net.sock.peer.port';

// Path: model/attributes/net/net__transport.json

/**
 * OSI transport layer or inter-process communication method.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link NETWORK_TRANSPORT} 'network.transport'
 *
 * @deprecated Use {@link NETWORK_TRANSPORT} (network.transport) instead
 * @example "tcp"
 */
export const NET_TRANSPORT = 'net.transport';

// Path: model/attributes/network/network__local__address.json

/**
 * Local address of the network connection - IP address or Unix domain socket name.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link NET_HOST_IP} 'net.host.ip', {@link NET_SOCK_HOST_ADDR} 'net.sock.host.addr'
 *
 * @example "10.1.2.80"
 */
export const NETWORK_LOCAL_ADDRESS = 'network.local.address';

// Path: model/attributes/network/network__local__port.json

/**
 * Local port number of the network connection.
 *
 * Attribute Value Type: number
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link NET_SOCK_HOST_PORT} 'net.sock.host.port'
 *
 * @example 65400
 */
export const NETWORK_LOCAL_PORT = 'network.local.port';

// Path: model/attributes/network/network__peer__address.json

/**
 * Peer address of the network connection - IP address or Unix domain socket name.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "10.1.2.80"
 */
export const NETWORK_PEER_ADDRESS = 'network.peer.address';

// Path: model/attributes/network/network__peer__port.json

/**
 * Peer port number of the network connection.
 *
 * Attribute Value Type: number
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example 65400
 */
export const NETWORK_PEER_PORT = 'network.peer.port';

// Path: model/attributes/network/network__protocol__name.json

/**
 * OSI application layer or non-OSI equivalent.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link NET_PROTOCOL_NAME} 'net.protocol.name'
 *
 * @example "http"
 */
export const NETWORK_PROTOCOL_NAME = 'network.protocol.name';

// Path: model/attributes/network/network__protocol__version.json

/**
 * The actual version of the protocol used for network communication.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link HTTP_FLAVOR} 'http.flavor', {@link NET_PROTOCOL_VERSION} 'net.protocol.version'
 *
 * @example "1.1"
 */
export const NETWORK_PROTOCOL_VERSION = 'network.protocol.version';

// Path: model/attributes/network/network__transport.json

/**
 * OSI transport layer or inter-process communication method.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link NET_TRANSPORT} 'net.transport'
 *
 * @example "tcp"
 */
export const NETWORK_TRANSPORT = 'network.transport';

// Path: model/attributes/network/network__type.json

/**
 * OSI network layer or non-OSI equivalent.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "ipv4"
 */
export const NETWORK_TYPE = 'network.type';

// Path: model/attributes/otel/otel__scope__name.json

/**
 * The name of the instrumentation scope - (InstrumentationScope.Name in OTLP).
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "io.opentelemetry.contrib.mongodb"
 */
export const OTEL_SCOPE_NAME = 'otel.scope.name';

// Path: model/attributes/otel/otel__scope__version.json

/**
 * The version of the instrumentation scope - (InstrumentationScope.Version in OTLP).
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "2.4.5"
 */
export const OTEL_SCOPE_VERSION = 'otel.scope.version';

// Path: model/attributes/otel/otel__status_code.json

/**
 * Name of the code, either “OK” or “ERROR”. MUST NOT be set if the status code is UNSET.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "OK"
 */
export const OTEL_STATUS_CODE = 'otel.status_code';

// Path: model/attributes/otel/otel__status_description.json

/**
 * Description of the Status if it has a value, otherwise not set.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "resource not found"
 */
export const OTEL_STATUS_DESCRIPTION = 'otel.status_description';

// Path: model/attributes/params/params.<key>.json

/**
 * Decoded parameters extracted from a URL path. Usually added by client-side routing frameworks like vue-router.
 *
 * Attribute Value Type: string
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: No
 *
 * Has Dynamic Suffix: true
 *
 * Aliases: {@link URL_PATH_PARAMS_KEY} 'url.path.params.<key>'
 *
 * @example "params.id='123'"
 */
export const PARAMS_KEY = 'params.<key>';

// Path: model/attributes/previous_route.json

/**
 * Also used by mobile SDKs to indicate the previous route in the application.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example "HomeScreen"
 */
export const PREVIOUS_ROUTE = 'previous_route';

// Path: model/attributes/process/process__executable__name.json

/**
 * The name of the executable that started the process.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "getsentry"
 */
export const PROCESS_EXECUTABLE_NAME = 'process.executable.name';

// Path: model/attributes/process/process__pid.json

/**
 * The process ID of the running process.
 *
 * Attribute Value Type: number
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example 12345
 */
export const PROCESS_PID = 'process.pid';

// Path: model/attributes/profile_id.json

/**
 * The id of the sentry profile.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * Aliases: {@link SENTRY_PROFILE_ID} 'sentry.profile_id'
 *
 * @deprecated Use {@link SENTRY_PROFILE_ID} (sentry.profile_id) instead
 * @example "123e4567e89b12d3a456426614174000"
 */
export const PROFILE_ID = 'profile_id';

// Path: model/attributes/query/query.<key>.json

/**
 * An item in a query string. Usually added by client-side routing frameworks like vue-router.
 *
 * Attribute Value Type: string
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: No
 *
 * Has Dynamic Suffix: true
 *
 * @deprecated Use {@link URL_QUERY} (url.query) instead - Instead of sending items individually in query.<key>, they should be sent all together with url.query.
 * @example "query.id='123'"
 */
export const QUERY_KEY = 'query.<key>';

// Path: model/attributes/release.json

/**
 * The sentry release.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * Aliases: {@link SENTRY_RELEASE} 'sentry.release'
 *
 * @deprecated Use {@link SENTRY_RELEASE} (sentry.release) instead
 * @example "production"
 */
export const RELEASE = 'release';

// Path: model/attributes/remix/remix__action_form_data__<key>.json

/**
 * Remix form data, <key> being the form data key, the value being the form data value.
 *
 * Attribute Value Type: string
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: No
 *
 * Has Dynamic Suffix: true
 *
 * @example "http.response.header.text='test'"
 */
export const REMIX_ACTION_FORM_DATA_KEY = 'remix.action_form_data.<key>';

// Path: model/attributes/replay_id.json

/**
 * The id of the sentry replay.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * Aliases: {@link SENTRY_REPLAY_ID} 'sentry.replay_id'
 *
 * @deprecated Use {@link SENTRY_REPLAY_ID} (sentry.replay_id) instead
 * @example "123e4567e89b12d3a456426614174000"
 */
export const REPLAY_ID = 'replay_id';

// Path: model/attributes/resource/resource__render_blocking_status.json

/**
 * The render blocking status of the resource.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example "non-blocking"
 */
export const RESOURCE_RENDER_BLOCKING_STATUS = 'resource.render_blocking_status';

// Path: model/attributes/route.json

/**
 * The matched route, that is, the path template in the format used by the respective server framework. Also used by mobile SDKs to indicate the current route in the application.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * Aliases: {@link HTTP_ROUTE} 'http.route'
 *
 * @deprecated Use {@link HTTP_ROUTE} (http.route) instead
 * @example "App\\Controller::indexAction"
 */
export const ROUTE = 'route';

// Path: model/attributes/rpc/rpc__grpc__status_code.json

/**
 * The numeric status code of the gRPC request.
 *
 * Attribute Value Type: number
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example 2
 */
export const RPC_GRPC_STATUS_CODE = 'rpc.grpc.status_code';

// Path: model/attributes/rpc/rpc__service.json

/**
 * The full (logical) name of the service being called, including its package name, if applicable.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "myService.BestService"
 */
export const RPC_SERVICE = 'rpc.service';

// Path: model/attributes/sentry/sentry__cancellation_reason.json

/**
 * The reason why a span ended early.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example "document.hidden"
 */
export const SENTRY_CANCELLATION_REASON = 'sentry.cancellation_reason';

// Path: model/attributes/sentry/sentry__dist.json

/**
 * The sentry dist.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example "1.0"
 */
export const SENTRY_DIST = 'sentry.dist';

// Path: model/attributes/sentry/sentry__environment.json

/**
 * The sentry environment.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * Aliases: {@link ENVIRONMENT} 'environment'
 *
 * @example "production"
 */
export const SENTRY_ENVIRONMENT = 'sentry.environment';

// Path: model/attributes/sentry/sentry__exclusive_time.json

/**
 * The exclusive time duration of the span.
 *
 * Attribute Value Type: number
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example 1234
 */
export const SENTRY_EXCLUSIVE_TIME = 'sentry.exclusive_time';

// Path: model/attributes/sentry/sentry__http__prefetch.json

/**
 * If an http request was a prefetch request.
 *
 * Attribute Value Type: boolean
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example true
 */
export const SENTRY_HTTP_PREFETCH = 'sentry.http.prefetch';

// Path: model/attributes/sentry/sentry__idle_span_finish_reason.json

/**
 * The reason why an idle span ended early.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example "idleTimeout"
 */
export const SENTRY_IDLE_SPAN_FINISH_REASON = 'sentry.idle_span_finish_reason';

// Path: model/attributes/sentry/sentry__module__<key>.json

/**
 * A module that was loaded in the process. The key is the name of the module. 
 *
 * Attribute Value Type: string
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: No
 *
 * Has Dynamic Suffix: true
 *
 * @example "sentry.module.brianium/paratest='v7.7.0'"
 */
export const SENTRY_MODULE_KEY = 'sentry.module.<key>';

// Path: model/attributes/sentry/sentry__op.json

/**
 * The operation of a span.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example "http.client"
 */
export const SENTRY_OP = 'sentry.op';

// Path: model/attributes/sentry/sentry__origin.json

/**
 * The origin of a span.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example "auto.http.otel.fastify"
 */
export const SENTRY_ORIGIN = 'sentry.origin';

// Path: model/attributes/sentry/sentry__platform.json

/**
 * The sdk platform that generated the event.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example "php"
 */
export const SENTRY_PLATFORM = 'sentry.platform';

// Path: model/attributes/sentry/sentry__profile_id.json

/**
 * The id of the sentry profile.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * Aliases: {@link PROFILE_ID} 'profile_id'
 *
 * @example "123e4567e89b12d3a456426614174000"
 */
export const SENTRY_PROFILE_ID = 'sentry.profile_id';

// Path: model/attributes/sentry/sentry__release.json

/**
 * The sentry release.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * Aliases: {@link SERVICE_VERSION} 'service.version', {@link RELEASE} 'release'
 *
 * @example "7.0.0"
 */
export const SENTRY_RELEASE = 'sentry.release';

// Path: model/attributes/sentry/sentry__replay_id.json

/**
 * The id of the sentry replay.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * Aliases: {@link REPLAY_ID} 'replay_id'
 *
 * @example "123e4567e89b12d3a456426614174000"
 */
export const SENTRY_REPLAY_ID = 'sentry.replay_id';

// Path: model/attributes/sentry/sentry__sample_rate.json

/**
 * The sample rate of the span.
 *
 * Attribute Value Type: number
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example 0.5
 */
export const SENTRY_SAMPLE_RATE = 'sentry.sample_rate';

// Path: model/attributes/sentry/sentry__sdk__name.json

/**
 * The sentry sdk name.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example "@sentry/react"
 */
export const SENTRY_SDK_NAME = 'sentry.sdk.name';

// Path: model/attributes/sentry/sentry__sdk__version.json

/**
 * The sentry sdk version.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example "7.0.0"
 */
export const SENTRY_SDK_VERSION = 'sentry.sdk.version';

// Path: model/attributes/sentry/sentry__span__source.json

/**
 * The source of a span, also referred to as transaction source.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example "route"
 */
export const SENTRY_SPAN_SOURCE = 'sentry.span.source';

// Path: model/attributes/sentry/sentry__transaction.json

/**
 * The sentry transaction (segment name).
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * Aliases: {@link TRANSACTION} 'transaction'
 *
 * @example "GET /"
 */
export const SENTRY_TRANSACTION = 'sentry.transaction';

// Path: model/attributes/server/server__address.json

/**
 * Server domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link HTTP_SERVER_NAME} 'http.server_name', {@link NET_HOST_NAME} 'net.host.name'
 *
 * @example "example.com"
 */
export const SERVER_ADDRESS = 'server.address';

// Path: model/attributes/server/server__port.json

/**
 * Server port number.
 *
 * Attribute Value Type: number
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link NET_HOST_PORT} 'net.host.port'
 *
 * @example 1337
 */
export const SERVER_PORT = 'server.port';

// Path: model/attributes/service/service__name.json

/**
 * Logical name of the service.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "omegastar"
 */
export const SERVICE_NAME = 'service.name';

// Path: model/attributes/service/service__version.json

/**
 * The version string of the service API or implementation. The format is not defined by these conventions.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link SENTRY_RELEASE} 'sentry.release'
 *
 * @example "5.0.0"
 */
export const SERVICE_VERSION = 'service.version';

// Path: model/attributes/thread/thread__id.json

/**
 * Current “managed” thread ID.
 *
 * Attribute Value Type: number
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example 56
 */
export const THREAD_ID = 'thread.id';

// Path: model/attributes/thread/thread__name.json

/**
 * Current thread name.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "main"
 */
export const THREAD_NAME = 'thread.name';

// Path: model/attributes/transaction.json

/**
 * The sentry transaction (segment name).
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * Aliases: {@link SENTRY_TRANSACTION} 'sentry.transaction'
 *
 * @deprecated Use {@link SENTRY_TRANSACTION} (sentry.transaction) instead
 * @example "GET /"
 */
export const TRANSACTION = 'transaction';

// Path: model/attributes/type.json

/**
 * More granular type of the operation happening.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example "fetch"
 */
export const TYPE = 'type';

// Path: model/attributes/ui/ui__component_name.json

/**
 * The name of the associated component.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example "HomeButton"
 */
export const UI_COMPONENT_NAME = 'ui.component_name';

// Path: model/attributes/ui/ui__contributes_to_ttfd.json

/**
 * Whether the span execution contributed to the TTFD (time to fully drawn) metric.
 *
 * Attribute Value Type: boolean
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example true
 */
export const UI_CONTRIBUTES_TO_TTFD = 'ui.contributes_to_ttfd';

// Path: model/attributes/ui/ui__contributes_to_ttid.json

/**
 * Whether the span execution contributed to the TTID (time to initial display) metric.
 *
 * Attribute Value Type: boolean
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example true
 */
export const UI_CONTRIBUTES_TO_TTID = 'ui.contributes_to_ttid';

// Path: model/attributes/url/url__domain.json

/**
 * Server domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "example.com"
 */
export const URL_DOMAIN = 'url.domain';

// Path: model/attributes/url/url__fragment.json

/**
 * The fragments present in the URI. Note that this does not contain the leading # character, while the `http.fragment` attribute does.
 *
 * Attribute Value Type: string
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "details"
 */
export const URL_FRAGMENT = 'url.fragment';

// Path: model/attributes/url/url__full.json

/**
 * The URL of the resource that was fetched.
 *
 * Attribute Value Type: string
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link URL} 'url', {@link HTTP_URL} 'http.url'
 *
 * @example "https://example.com/test?foo=bar#buzz"
 */
export const URL_FULL = 'url.full';

// Path: model/attributes/url/url__path.json

/**
 * The URI path component.
 *
 * Attribute Value Type: string
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "/foo"
 */
export const URL_PATH = 'url.path';

// Path: model/attributes/url/url__path__params__<key>.json

/**
 * Decoded parameters extracted from a URL path. Usually added by client-side routing frameworks like vue-router.
 *
 * Attribute Value Type: string
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: No
 *
 * Has Dynamic Suffix: true
 *
 * Aliases: {@link PARAMS_KEY} 'params.<key>'
 *
 * @example "url.path.params.id='123'"
 */
export const URL_PATH_PARAMS_KEY = 'url.path.params.<key>';

// Path: model/attributes/url/url__port.json

/**
 * Server port number.
 *
 * Attribute Value Type: number
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example 1337
 */
export const URL_PORT = 'url.port';

// Path: model/attributes/url/url__query.json

/**
 * The query string present in the URL. Note that this does not contain the leading ? character, while the `http.query` attribute does.
 *
 * Attribute Value Type: string
 *
 * Contains PII: maybe - Query string values can contain sensitive information. Clients should attempt to scrub parameters that might contain sensitive information.
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "foo=bar&bar=baz"
 */
export const URL_QUERY = 'url.query';

// Path: model/attributes/url/url__scheme.json

/**
 * The URI scheme component identifying the used protocol.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link HTTP_SCHEME} 'http.scheme'
 *
 * @example "https"
 */
export const URL_SCHEME = 'url.scheme';

// Path: model/attributes/url/url__template.json

/**
 * The low-cardinality template of an absolute path reference.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link HTTP_ROUTE} 'http.route'
 *
 * @example "/users/:id"
 */
export const URL_TEMPLATE = 'url.template';

// Path: model/attributes/url.json

/**
 * The URL of the resource that was fetched.
 *
 * Attribute Value Type: string
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: No
 *
 * Aliases: {@link URL_FULL} 'url.full', {@link HTTP_URL} 'http.url'
 *
 * @deprecated Use {@link URL_FULL} (url.full) instead
 * @example "https://example.com/test?foo=bar#buzz"
 */
export const URL = 'url';

// Path: model/attributes/user/user__email.json

/**
 * User email address.
 *
 * Attribute Value Type: string
 *
 * Contains PII: true
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "test@example.com"
 */
export const USER_EMAIL = 'user.email';

// Path: model/attributes/user/user__full_name.json

/**
 * User's full name.
 *
 * Attribute Value Type: string
 *
 * Contains PII: true
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "John Smith"
 */
export const USER_FULL_NAME = 'user.full_name';

// Path: model/attributes/user/user__geo__city.json

/**
 * Human readable city name.
 *
 * Attribute Value Type: string
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: No
 *
 * @example "Toronto"
 */
export const USER_GEO_CITY = 'user.geo.city';

// Path: model/attributes/user/user__geo__country_code.json

/**
 * Two-letter country code (ISO 3166-1 alpha-2).
 *
 * Attribute Value Type: string
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: No
 *
 * @example "CA"
 */
export const USER_GEO_COUNTRY_CODE = 'user.geo.country_code';

// Path: model/attributes/user/user__geo__region.json

/**
 * Human readable region name or code.
 *
 * Attribute Value Type: string
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: No
 *
 * @example "Canada"
 */
export const USER_GEO_REGION = 'user.geo.region';

// Path: model/attributes/user/user__geo__subdivision.json

/**
 * Human readable subdivision name.
 *
 * Attribute Value Type: string
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: No
 *
 * @example "Ontario"
 */
export const USER_GEO_SUBDIVISION = 'user.geo.subdivision';

// Path: model/attributes/user/user__hash.json

/**
 * Unique user hash to correlate information for a user in anonymized form.
 *
 * Attribute Value Type: string
 *
 * Contains PII: true
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "8ae4c2993e0f4f3b8b2d1b1f3b5e8f4d"
 */
export const USER_HASH = 'user.hash';

// Path: model/attributes/user/user__id.json

/**
 * Unique identifier of the user.
 *
 * Attribute Value Type: string
 *
 * Contains PII: true
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "S-1-5-21-202424912787-2692429404-2351956786-1000"
 */
export const USER_ID = 'user.id';

// Path: model/attributes/user/user__name.json

/**
 * Short name or login/username of the user.
 *
 * Attribute Value Type: string
 *
 * Contains PII: true
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "j.smith"
 */
export const USER_NAME = 'user.name';

// Path: model/attributes/user/user__roles.json

/**
 * Array of user roles at the time of the event.
 *
 * Attribute Value Type: Array<string>
 *
 * Contains PII: true
 *
 * Attribute defined in OTEL: Yes
 *
 * @example ["admin","editor"]
 */
export const USER_ROLES = 'user.roles';

// Path: model/attributes/user_agent/user_agent__original.json

/**
 * Value of the HTTP User-Agent header sent by the client.
 *
 * Attribute Value Type: string
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link HTTP_USER_AGENT} 'http.user_agent'
 *
 * @example "Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Mobile/15E148 Safari/604.1"
 */
export const USER_AGENT_ORIGINAL = 'user_agent.original';

export type AttributeValue = string | number | boolean | Array<string> | Array<number> | Array<boolean>;

export type Attributes = {
  [AI_COMPLETION_TOKENS_USED]?: number;
  [AI_INPUT_MESSAGES]?: string;
  [AI_MODEL_ID]?: string;
  [AI_PROMPT_TOKENS_USED]?: number;
  [AI_RESPONSES]?: Array<string>;
  [AI_STREAMING]?: boolean;
  [AI_TOTAL_TOKENS_USED]?: number;
  [APP_START_TYPE]?: string;
  [BLOCKED_MAIN_THREAD]?: boolean;
  [BROWSER_NAME]?: string;
  [BROWSER_SCRIPT_INVOKER]?: string;
  [BROWSER_SCRIPT_INVOKER_TYPE]?: string;
  [BROWSER_SCRIPT_SOURCE_CHAR_POSITION]?: number;
  [CACHE_HIT]?: boolean;
  [CACHE_ITEM_SIZE]?: number;
  [CACHE_KEY]?: string;
  [CACHE_TTL]?: number;
  [CHANNEL]?: string;
  [CLIENT_ADDRESS]?: string;
  [CLIENT_PORT]?: number;
  [CLOUDFLARE_D1_DURATION]?: number;
  [CLOUDFLARE_D1_ROWS_READ]?: number;
  [CLOUDFLARE_D1_ROWS_WRITTEN]?: number;
  [CODE_FILE_PATH]?: string;
  [CODE_FUNCTION_NAME]?: string;
  [CODE_LINE_NUMBER]?: number;
  [DB_COLLECTION_NAME]?: string;
  [DB_NAMESPACE]?: string;
  [DB_OPERATION_NAME]?: string;
  [DB_QUERY_PARAMETER_KEY]?: string;
  [DB_QUERY_TEXT]?: string;
  [DB_REDIS_CONNECTION]?: string;
  [DB_REDIS_PARAMETERS]?: Array<string>;
  [DB_SYSTEM_NAME]?: string;
  [DB_USER]?: string;
  [ERROR_TYPE]?: string;
  [EXCEPTION_ESCAPED]?: boolean;
  [EXCEPTION_MESSAGE]?: string;
  [EXCEPTION_STACKTRACE]?: string;
  [EXCEPTION_TYPE]?: string;
  [FAAS_COLDSTART]?: boolean;
  [FAAS_CRON]?: string;
  [FAAS_TIME]?: string;
  [FAAS_TRIGGER]?: string;
  [FRAMES_DELAY]?: number;
  [FRAMES_FROZEN]?: number;
  [FRAMES_SLOW]?: number;
  [FRAMES_TOTAL]?: number;
  [GEN_AI_PROMPT]?: string;
  [GEN_AI_RESPONSE_MODEL]?: string;
  [GEN_AI_USAGE_INPUT_TOKENS]?: number;
  [GEN_AI_USAGE_OUTPUT_TOKENS]?: number;
  [GRAPHQL_OPERATION_NAME]?: string;
  [GRAPHQL_OPERATION_TYPE]?: string;
  [HTTP_DECODED_RESPONSE_CONTENT_LENGTH]?: number;
  [HTTP_FRAGMENT]?: string;
  [HTTP_QUERY]?: string;
  [HTTP_REQUEST_CONNECT_START]?: number;
  [HTTP_REQUEST_CONNECTION_END]?: number;
  [HTTP_REQUEST_DOMAIN_LOOKUP_END]?: number;
  [HTTP_REQUEST_DOMAIN_LOOKUP_START]?: number;
  [HTTP_REQUEST_FETCH_START]?: number;
  [HTTP_REQUEST_HEADER_KEY]?: Array<string>;
  [HTTP_REQUEST_METHOD]?: string;
  [HTTP_REQUEST_REDIRECT_START]?: number;
  [HTTP_REQUEST_REQUEST_START]?: number;
  [HTTP_REQUEST_RESEND_COUNT]?: number;
  [HTTP_REQUEST_RESPONSE_END]?: number;
  [HTTP_REQUEST_RESPONSE_START]?: number;
  [HTTP_REQUEST_SECURE_CONNECTION_START]?: number;
  [HTTP_RESPONSE_BODY_SIZE]?: number;
  [HTTP_RESPONSE_HEADER_KEY]?: Array<string>;
  [HTTP_RESPONSE_HEADER_CONTENT_LENGTH]?: string;
  [HTTP_RESPONSE_SIZE]?: number;
  [HTTP_RESPONSE_STATUS_CODE]?: number;
  [HTTP_ROUTE]?: string;
  [ID]?: string;
  [JVM_GC_ACTION]?: string;
  [JVM_GC_NAME]?: string;
  [JVM_MEMORY_POOL_NAME]?: string;
  [JVM_MEMORY_TYPE]?: string;
  [JVM_THREAD_DAEMON]?: boolean;
  [JVM_THREAD_STATE]?: string;
  [LCP_ELEMENT]?: string;
  [LCP_ID]?: string;
  [LCP_SIZE]?: number;
  [LCP_URL]?: string;
  [LOGGER_NAME]?: string;
  [MESSAGING_DESTINATION_CONNECTION]?: string;
  [MESSAGING_DESTINATION_NAME]?: string;
  [MESSAGING_MESSAGE_BODY_SIZE]?: number;
  [MESSAGING_MESSAGE_ENVELOPE_SIZE]?: number;
  [MESSAGING_MESSAGE_ID]?: string;
  [MESSAGING_MESSAGE_RECEIVE_LATENCY]?: number;
  [MESSAGING_MESSAGE_RETRY_COUNT]?: number;
  [MESSAGING_SYSTEM]?: string;
  [NAVIGATION_TYPE]?: string;
  [NETWORK_LOCAL_ADDRESS]?: string;
  [NETWORK_LOCAL_PORT]?: number;
  [NETWORK_PEER_ADDRESS]?: string;
  [NETWORK_PEER_PORT]?: number;
  [NETWORK_PROTOCOL_NAME]?: string;
  [NETWORK_PROTOCOL_VERSION]?: string;
  [NETWORK_TRANSPORT]?: string;
  [NETWORK_TYPE]?: string;
  [OTEL_SCOPE_NAME]?: string;
  [OTEL_SCOPE_VERSION]?: string;
  [OTEL_STATUS_CODE]?: string;
  [OTEL_STATUS_DESCRIPTION]?: string;
  [PARAMS_KEY]?: string;
  [PREVIOUS_ROUTE]?: string;
  [PROCESS_EXECUTABLE_NAME]?: string;
  [PROCESS_PID]?: number;
  [REMIX_ACTION_FORM_DATA_KEY]?: string;
  [RESOURCE_RENDER_BLOCKING_STATUS]?: string;
  [RPC_GRPC_STATUS_CODE]?: number;
  [RPC_SERVICE]?: string;
  [SENTRY_CANCELLATION_REASON]?: string;
  [SENTRY_DIST]?: string;
  [SENTRY_ENVIRONMENT]?: string;
  [SENTRY_EXCLUSIVE_TIME]?: number;
  [SENTRY_HTTP_PREFETCH]?: boolean;
  [SENTRY_IDLE_SPAN_FINISH_REASON]?: string;
  [SENTRY_MODULE_KEY]?: string;
  [SENTRY_OP]?: string;
  [SENTRY_ORIGIN]?: string;
  [SENTRY_PLATFORM]?: string;
  [SENTRY_PROFILE_ID]?: string;
  [SENTRY_RELEASE]?: string;
  [SENTRY_REPLAY_ID]?: string;
  [SENTRY_SAMPLE_RATE]?: number;
  [SENTRY_SDK_NAME]?: string;
  [SENTRY_SDK_VERSION]?: string;
  [SENTRY_SPAN_SOURCE]?: string;
  [SENTRY_TRANSACTION]?: string;
  [SERVER_ADDRESS]?: string;
  [SERVER_PORT]?: number;
  [SERVICE_NAME]?: string;
  [SERVICE_VERSION]?: string;
  [THREAD_ID]?: number;
  [THREAD_NAME]?: string;
  [TYPE]?: string;
  [UI_COMPONENT_NAME]?: string;
  [UI_CONTRIBUTES_TO_TTFD]?: boolean;
  [UI_CONTRIBUTES_TO_TTID]?: boolean;
  [URL_DOMAIN]?: string;
  [URL_FRAGMENT]?: string;
  [URL_FULL]?: string;
  [URL_PATH]?: string;
  [URL_PATH_PARAMS_KEY]?: string;
  [URL_PORT]?: number;
  [URL_QUERY]?: string;
  [URL_SCHEME]?: string;
  [URL_TEMPLATE]?: string;
  [USER_EMAIL]?: string;
  [USER_FULL_NAME]?: string;
  [USER_GEO_CITY]?: string;
  [USER_GEO_COUNTRY_CODE]?: string;
  [USER_GEO_REGION]?: string;
  [USER_GEO_SUBDIVISION]?: string;
  [USER_HASH]?: string;
  [USER_ID]?: string;
  [USER_NAME]?: string;
  [USER_ROLES]?: Array<string>;
  [USER_AGENT_ORIGINAL]?: string;
} & Record<string, AttributeValue | undefined>;

export type FullAttributes = {
  [AI_COMPLETION_TOKENS_USED]?: number;
  [AI_INPUT_MESSAGES]?: string;
  [AI_MODEL_ID]?: string;
  [AI_PROMPT_TOKENS_USED]?: number;
  [AI_RESPONSES]?: Array<string>;
  [AI_STREAMING]?: boolean;
  [AI_TOTAL_TOKENS_USED]?: number;
  [APP_START_TYPE]?: string;
  [BLOCKED_MAIN_THREAD]?: boolean;
  [BROWSER_NAME]?: string;
  [BROWSER_SCRIPT_INVOKER]?: string;
  [BROWSER_SCRIPT_INVOKER_TYPE]?: string;
  [BROWSER_SCRIPT_SOURCE_CHAR_POSITION]?: number;
  [CACHE_HIT]?: boolean;
  [CACHE_ITEM_SIZE]?: number;
  [CACHE_KEY]?: string;
  [CACHE_TTL]?: number;
  [CHANNEL]?: string;
  [CLIENT_ADDRESS]?: string;
  [CLIENT_PORT]?: number;
  [CLOUDFLARE_D1_DURATION]?: number;
  [CLOUDFLARE_D1_ROWS_READ]?: number;
  [CLOUDFLARE_D1_ROWS_WRITTEN]?: number;
  [CODE_FILE_PATH]?: string;
  [CODE_FILEPATH]?: string;
  [CODE_FUNCTION]?: string;
  [CODE_FUNCTION_NAME]?: string;
  [CODE_LINE_NUMBER]?: number;
  [CODE_LINENO]?: number;
  [CODE_NAMESPACE]?: string;
  [DB_COLLECTION_NAME]?: string;
  [DB_NAME]?: string;
  [DB_NAMESPACE]?: string;
  [DB_OPERATION]?: string;
  [DB_OPERATION_NAME]?: string;
  [DB_QUERY_PARAMETER_KEY]?: string;
  [DB_QUERY_TEXT]?: string;
  [DB_REDIS_CONNECTION]?: string;
  [DB_REDIS_PARAMETERS]?: Array<string>;
  [DB_SQL_BINDINGS]?: Array<string>;
  [DB_STATEMENT]?: string;
  [DB_SYSTEM]?: string;
  [DB_SYSTEM_NAME]?: string;
  [DB_USER]?: string;
  [ENVIRONMENT]?: string;
  [ERROR_TYPE]?: string;
  [EXCEPTION_ESCAPED]?: boolean;
  [EXCEPTION_MESSAGE]?: string;
  [EXCEPTION_STACKTRACE]?: string;
  [EXCEPTION_TYPE]?: string;
  [FAAS_COLDSTART]?: boolean;
  [FAAS_CRON]?: string;
  [FAAS_TIME]?: string;
  [FAAS_TRIGGER]?: string;
  [FRAMES_DELAY]?: number;
  [FRAMES_FROZEN]?: number;
  [FRAMES_SLOW]?: number;
  [FRAMES_TOTAL]?: number;
  [FS_ERROR]?: string;
  [GEN_AI_PROMPT]?: string;
  [GEN_AI_RESPONSE_MODEL]?: string;
  [GEN_AI_USAGE_COMPLETION_TOKENS]?: number;
  [GEN_AI_USAGE_INPUT_TOKENS]?: number;
  [GEN_AI_USAGE_OUTPUT_TOKENS]?: number;
  [GEN_AI_USAGE_PROMPT_TOKENS]?: number;
  [GRAPHQL_OPERATION_NAME]?: string;
  [GRAPHQL_OPERATION_TYPE]?: string;
  [HTTP_CLIENT_IP]?: string;
  [HTTP_DECODED_RESPONSE_CONTENT_LENGTH]?: number;
  [HTTP_FLAVOR]?: string;
  [HTTP_FRAGMENT]?: string;
  [HTTP_HOST]?: string;
  [HTTP_METHOD]?: string;
  [HTTP_QUERY]?: string;
  [HTTP_REQUEST_CONNECT_START]?: number;
  [HTTP_REQUEST_CONNECTION_END]?: number;
  [HTTP_REQUEST_DOMAIN_LOOKUP_END]?: number;
  [HTTP_REQUEST_DOMAIN_LOOKUP_START]?: number;
  [HTTP_REQUEST_FETCH_START]?: number;
  [HTTP_REQUEST_HEADER_KEY]?: Array<string>;
  [HTTP_REQUEST_METHOD]?: string;
  [HTTP_REQUEST_REDIRECT_START]?: number;
  [HTTP_REQUEST_REQUEST_START]?: number;
  [HTTP_REQUEST_RESEND_COUNT]?: number;
  [HTTP_REQUEST_RESPONSE_END]?: number;
  [HTTP_REQUEST_RESPONSE_START]?: number;
  [HTTP_REQUEST_SECURE_CONNECTION_START]?: number;
  [HTTP_RESPONSE_BODY_SIZE]?: number;
  [HTTP_RESPONSE_HEADER_KEY]?: Array<string>;
  [HTTP_RESPONSE_HEADER_CONTENT_LENGTH]?: string;
  [HTTP_RESPONSE_SIZE]?: number;
  [HTTP_RESPONSE_STATUS_CODE]?: number;
  [HTTP_RESPONSE_CONTENT_LENGTH]?: number;
  [HTTP_RESPONSE_TRANSFER_SIZE]?: number;
  [HTTP_ROUTE]?: string;
  [HTTP_SCHEME]?: string;
  [HTTP_SERVER_NAME]?: string;
  [HTTP_STATUS_CODE]?: number;
  [HTTP_TARGET]?: string;
  [HTTP_URL]?: string;
  [HTTP_USER_AGENT]?: string;
  [ID]?: string;
  [JVM_GC_ACTION]?: string;
  [JVM_GC_NAME]?: string;
  [JVM_MEMORY_POOL_NAME]?: string;
  [JVM_MEMORY_TYPE]?: string;
  [JVM_THREAD_DAEMON]?: boolean;
  [JVM_THREAD_STATE]?: string;
  [LCP_ELEMENT]?: string;
  [LCP_ID]?: string;
  [LCP_SIZE]?: number;
  [LCP_URL]?: string;
  [LOGGER_NAME]?: string;
  [MESSAGING_DESTINATION_CONNECTION]?: string;
  [MESSAGING_DESTINATION_NAME]?: string;
  [MESSAGING_MESSAGE_BODY_SIZE]?: number;
  [MESSAGING_MESSAGE_ENVELOPE_SIZE]?: number;
  [MESSAGING_MESSAGE_ID]?: string;
  [MESSAGING_MESSAGE_RECEIVE_LATENCY]?: number;
  [MESSAGING_MESSAGE_RETRY_COUNT]?: number;
  [MESSAGING_SYSTEM]?: string;
  [METHOD]?: string;
  [NAVIGATION_TYPE]?: string;
  [NET_HOST_IP]?: string;
  [NET_HOST_NAME]?: string;
  [NET_HOST_PORT]?: number;
  [NET_PEER_IP]?: string;
  [NET_PEER_NAME]?: string;
  [NET_PEER_PORT]?: number;
  [NET_PROTOCOL_NAME]?: string;
  [NET_PROTOCOL_VERSION]?: string;
  [NET_SOCK_FAMILY]?: string;
  [NET_SOCK_HOST_ADDR]?: string;
  [NET_SOCK_HOST_PORT]?: number;
  [NET_SOCK_PEER_ADDR]?: string;
  [NET_SOCK_PEER_NAME]?: string;
  [NET_SOCK_PEER_PORT]?: number;
  [NET_TRANSPORT]?: string;
  [NETWORK_LOCAL_ADDRESS]?: string;
  [NETWORK_LOCAL_PORT]?: number;
  [NETWORK_PEER_ADDRESS]?: string;
  [NETWORK_PEER_PORT]?: number;
  [NETWORK_PROTOCOL_NAME]?: string;
  [NETWORK_PROTOCOL_VERSION]?: string;
  [NETWORK_TRANSPORT]?: string;
  [NETWORK_TYPE]?: string;
  [OTEL_SCOPE_NAME]?: string;
  [OTEL_SCOPE_VERSION]?: string;
  [OTEL_STATUS_CODE]?: string;
  [OTEL_STATUS_DESCRIPTION]?: string;
  [PARAMS_KEY]?: string;
  [PREVIOUS_ROUTE]?: string;
  [PROCESS_EXECUTABLE_NAME]?: string;
  [PROCESS_PID]?: number;
  [PROFILE_ID]?: string;
  [QUERY_KEY]?: string;
  [RELEASE]?: string;
  [REMIX_ACTION_FORM_DATA_KEY]?: string;
  [REPLAY_ID]?: string;
  [RESOURCE_RENDER_BLOCKING_STATUS]?: string;
  [ROUTE]?: string;
  [RPC_GRPC_STATUS_CODE]?: number;
  [RPC_SERVICE]?: string;
  [SENTRY_CANCELLATION_REASON]?: string;
  [SENTRY_DIST]?: string;
  [SENTRY_ENVIRONMENT]?: string;
  [SENTRY_EXCLUSIVE_TIME]?: number;
  [SENTRY_HTTP_PREFETCH]?: boolean;
  [SENTRY_IDLE_SPAN_FINISH_REASON]?: string;
  [SENTRY_MODULE_KEY]?: string;
  [SENTRY_OP]?: string;
  [SENTRY_ORIGIN]?: string;
  [SENTRY_PLATFORM]?: string;
  [SENTRY_PROFILE_ID]?: string;
  [SENTRY_RELEASE]?: string;
  [SENTRY_REPLAY_ID]?: string;
  [SENTRY_SAMPLE_RATE]?: number;
  [SENTRY_SDK_NAME]?: string;
  [SENTRY_SDK_VERSION]?: string;
  [SENTRY_SPAN_SOURCE]?: string;
  [SENTRY_TRANSACTION]?: string;
  [SERVER_ADDRESS]?: string;
  [SERVER_PORT]?: number;
  [SERVICE_NAME]?: string;
  [SERVICE_VERSION]?: string;
  [THREAD_ID]?: number;
  [THREAD_NAME]?: string;
  [TRANSACTION]?: string;
  [TYPE]?: string;
  [UI_COMPONENT_NAME]?: string;
  [UI_CONTRIBUTES_TO_TTFD]?: boolean;
  [UI_CONTRIBUTES_TO_TTID]?: boolean;
  [URL_DOMAIN]?: string;
  [URL_FRAGMENT]?: string;
  [URL_FULL]?: string;
  [URL_PATH]?: string;
  [URL_PATH_PARAMS_KEY]?: string;
  [URL_PORT]?: number;
  [URL_QUERY]?: string;
  [URL_SCHEME]?: string;
  [URL_TEMPLATE]?: string;
  [URL]?: string;
  [USER_EMAIL]?: string;
  [USER_FULL_NAME]?: string;
  [USER_GEO_CITY]?: string;
  [USER_GEO_COUNTRY_CODE]?: string;
  [USER_GEO_REGION]?: string;
  [USER_GEO_SUBDIVISION]?: string;
  [USER_HASH]?: string;
  [USER_ID]?: string;
  [USER_NAME]?: string;
  [USER_ROLES]?: Array<string>;
  [USER_AGENT_ORIGINAL]?: string;
} & Record<string, AttributeValue | undefined>;
