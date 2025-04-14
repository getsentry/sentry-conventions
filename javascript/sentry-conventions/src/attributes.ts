// This is an auto-generated file. Do not edit!

// Path: model/attributes/ai/ai__completion_tokens__used.json

/**
 * The number of tokens used to respond to the message. `ai.completion_tokens.used`
 *
 * Attribute Value Type: `number` {@link AI_COMPLETION_TOKENS_USED_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * Aliases: {@link GEN_AI_USAGE_OUTPUT_TOKENS} `gen_ai.usage.output_tokens`, {@link GEN_AI_USAGE_COMPLETION_TOKENS} `gen_ai.usage.completion_tokens`
 *
 * @example 10
 */
export const AI_COMPLETION_TOKENS_USED = 'ai.completion_tokens.used';

/**
 * Type for {@link AI_COMPLETION_TOKENS_USED} ai.completion_tokens.used
 */
export type AI_COMPLETION_TOKENS_USED_TYPE = number;

// Path: model/attributes/ai/ai__input_messages.json

/**
 * The input messages sent to the model `ai.input_messages`
 *
 * Attribute Value Type: `string` {@link AI_INPUT_MESSAGES_TYPE}
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: No
 *
 * Aliases: {@link GEN_AI_PROMPT} `gen_ai.prompt`
 *
 * @example "[{\"role\": \"user\", \"message\": \"hello\"}]"
 */
export const AI_INPUT_MESSAGES = 'ai.input_messages';

/**
 * Type for {@link AI_INPUT_MESSAGES} ai.input_messages
 */
export type AI_INPUT_MESSAGES_TYPE = string;

// Path: model/attributes/ai/ai__model_id.json

/**
 * The vendor-specific ID of the model used. `ai.model_id`
 *
 * Attribute Value Type: `string` {@link AI_MODEL_ID_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * Aliases: {@link GEN_AI_RESPONSE_MODEL} `gen_ai.response.model`
 *
 * @example "gpt-4"
 */
export const AI_MODEL_ID = 'ai.model_id';

/**
 * Type for {@link AI_MODEL_ID} ai.model_id
 */
export type AI_MODEL_ID_TYPE = string;

// Path: model/attributes/ai/ai__prompt_tokens__used.json

/**
 * The number of tokens used to process just the prompt. `ai.prompt_tokens.used`
 *
 * Attribute Value Type: `number` {@link AI_PROMPT_TOKENS_USED_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * Aliases: {@link GEN_AI_USAGE_PROMPT_TOKENS} `gen_ai.usage.prompt_tokens`, {@link GEN_AI_USAGE_INPUT_TOKENS} `gen_ai.usage.input_tokens`
 *
 * @example 20
 */
export const AI_PROMPT_TOKENS_USED = 'ai.prompt_tokens.used';

/**
 * Type for {@link AI_PROMPT_TOKENS_USED} ai.prompt_tokens.used
 */
export type AI_PROMPT_TOKENS_USED_TYPE = number;

// Path: model/attributes/ai/ai__responses.json

/**
 * The response messages sent back by the AI model. `ai.responses`
 *
 * Attribute Value Type: `Array<string>` {@link AI_RESPONSES_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example ["hello","world"]
 */
export const AI_RESPONSES = 'ai.responses';

/**
 * Type for {@link AI_RESPONSES} ai.responses
 */
export type AI_RESPONSES_TYPE = Array<string>;

// Path: model/attributes/ai/ai__streaming.json

/**
 * Whether the request was streamed back. `ai.streaming`
 *
 * Attribute Value Type: `boolean` {@link AI_STREAMING_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example true
 */
export const AI_STREAMING = 'ai.streaming';

/**
 * Type for {@link AI_STREAMING} ai.streaming
 */
export type AI_STREAMING_TYPE = boolean;

// Path: model/attributes/ai/ai__total_tokens__used.json

/**
 * The total number of tokens used to process the prompt. `ai.total_tokens.used`
 *
 * Attribute Value Type: `number` {@link AI_TOTAL_TOKENS_USED_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example 30
 */
export const AI_TOTAL_TOKENS_USED = 'ai.total_tokens.used';

/**
 * Type for {@link AI_TOTAL_TOKENS_USED} ai.total_tokens.used
 */
export type AI_TOTAL_TOKENS_USED_TYPE = number;

// Path: model/attributes/app_start_type.json

/**
 * Mobile app start variant. Either cold or warm. `app_start_type`
 *
 * Attribute Value Type: `string` {@link APP_START_TYPE_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example "cold"
 */
export const APP_START_TYPE = 'app_start_type';

/**
 * Type for {@link APP_START_TYPE} app_start_type
 */
export type APP_START_TYPE_TYPE = string;

// Path: model/attributes/blocked_main_thread.json

/**
 * Whether the main thread was blocked by the span. `blocked_main_thread`
 *
 * Attribute Value Type: `boolean` {@link BLOCKED_MAIN_THREAD_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example true
 */
export const BLOCKED_MAIN_THREAD = 'blocked_main_thread';

/**
 * Type for {@link BLOCKED_MAIN_THREAD} blocked_main_thread
 */
export type BLOCKED_MAIN_THREAD_TYPE = boolean;

// Path: model/attributes/browser/browser__name.json

/**
 * The name of the browser. `browser.name`
 *
 * Attribute Value Type: `string` {@link BROWSER_NAME_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example "Chrome"
 */
export const BROWSER_NAME = 'browser.name';

/**
 * Type for {@link BROWSER_NAME} browser.name
 */
export type BROWSER_NAME_TYPE = string;

// Path: model/attributes/browser/browser__script__invoker.json

/**
 * How a script was called in the browser. `browser.script.invoker`
 *
 * Attribute Value Type: `string` {@link BROWSER_SCRIPT_INVOKER_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example "Window.requestAnimationFrame"
 */
export const BROWSER_SCRIPT_INVOKER = 'browser.script.invoker';

/**
 * Type for {@link BROWSER_SCRIPT_INVOKER} browser.script.invoker
 */
export type BROWSER_SCRIPT_INVOKER_TYPE = string;

// Path: model/attributes/browser/browser__script__invoker_type.json

/**
 * Browser script entry point type. `browser.script.invoker_type`
 *
 * Attribute Value Type: `string` {@link BROWSER_SCRIPT_INVOKER_TYPE_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example "event-listener"
 */
export const BROWSER_SCRIPT_INVOKER_TYPE = 'browser.script.invoker_type';

/**
 * Type for {@link BROWSER_SCRIPT_INVOKER_TYPE} browser.script.invoker_type
 */
export type BROWSER_SCRIPT_INVOKER_TYPE_TYPE = string;

// Path: model/attributes/browser/browser__script__source_char_position.json

/**
 * A number representing the script character position of the script. `browser.script.source_char_position`
 *
 * Attribute Value Type: `number` {@link BROWSER_SCRIPT_SOURCE_CHAR_POSITION_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example 678
 */
export const BROWSER_SCRIPT_SOURCE_CHAR_POSITION = 'browser.script.source_char_position';

/**
 * Type for {@link BROWSER_SCRIPT_SOURCE_CHAR_POSITION} browser.script.source_char_position
 */
export type BROWSER_SCRIPT_SOURCE_CHAR_POSITION_TYPE = number;

// Path: model/attributes/cache/cache__hit.json

/**
 * If the cache was hit during this span. `cache.hit`
 *
 * Attribute Value Type: `boolean` {@link CACHE_HIT_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example true
 */
export const CACHE_HIT = 'cache.hit';

/**
 * Type for {@link CACHE_HIT} cache.hit
 */
export type CACHE_HIT_TYPE = boolean;

// Path: model/attributes/cache/cache__item_size.json

/**
 * The size of the requested item in the cache. In bytes. `cache.item_size`
 *
 * Attribute Value Type: `number` {@link CACHE_ITEM_SIZE_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example 58
 */
export const CACHE_ITEM_SIZE = 'cache.item_size';

/**
 * Type for {@link CACHE_ITEM_SIZE} cache.item_size
 */
export type CACHE_ITEM_SIZE_TYPE = number;

// Path: model/attributes/cache/cache__key.json

/**
 * The key of the cache accessed. `cache.key`
 *
 * Attribute Value Type: `Array<string>` {@link CACHE_KEY_TYPE}
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: No
 *
 * @example ["my-cache-key","my-other-cache-key"]
 */
export const CACHE_KEY = 'cache.key';

/**
 * Type for {@link CACHE_KEY} cache.key
 */
export type CACHE_KEY_TYPE = Array<string>;

// Path: model/attributes/cache/cache__operation.json

/**
 * The operation being performed on the cache. `cache.operation`
 *
 * Attribute Value Type: `string` {@link CACHE_OPERATION_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example "get"
 */
export const CACHE_OPERATION = 'cache.operation';

/**
 * Type for {@link CACHE_OPERATION} cache.operation
 */
export type CACHE_OPERATION_TYPE = string;

// Path: model/attributes/cache/cache__ttl.json

/**
 * The ttl of the cache in seconds `cache.ttl`
 *
 * Attribute Value Type: `number` {@link CACHE_TTL_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example 120
 */
export const CACHE_TTL = 'cache.ttl';

/**
 * Type for {@link CACHE_TTL} cache.ttl
 */
export type CACHE_TTL_TYPE = number;

// Path: model/attributes/channel.json

/**
 * The channel name that is being used. `channel`
 *
 * Attribute Value Type: `string` {@link CHANNEL_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example "mail"
 */
export const CHANNEL = 'channel';

/**
 * Type for {@link CHANNEL} channel
 */
export type CHANNEL_TYPE = string;

// Path: model/attributes/client/client__address.json

/**
 * Client address - domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name. `client.address`
 *
 * Attribute Value Type: `string` {@link CLIENT_ADDRESS_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link HTTP_CLIENT_ID} `http.client_id`
 *
 * @example "example.com"
 */
export const CLIENT_ADDRESS = 'client.address';

/**
 * Type for {@link CLIENT_ADDRESS} client.address
 */
export type CLIENT_ADDRESS_TYPE = string;

// Path: model/attributes/client/client__port.json

/**
 * Client port number. `client.port`
 *
 * Attribute Value Type: `number` {@link CLIENT_PORT_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example 5432
 */
export const CLIENT_PORT = 'client.port';

/**
 * Type for {@link CLIENT_PORT} client.port
 */
export type CLIENT_PORT_TYPE = number;

// Path: model/attributes/cloudflare/cloudflare__d1__duration.json

/**
 * The duration of a Cloudflare D1 operation. `cloudflare.d1.duration`
 *
 * Attribute Value Type: `number` {@link CLOUDFLARE_D1_DURATION_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example 543
 */
export const CLOUDFLARE_D1_DURATION = 'cloudflare.d1.duration';

/**
 * Type for {@link CLOUDFLARE_D1_DURATION} cloudflare.d1.duration
 */
export type CLOUDFLARE_D1_DURATION_TYPE = number;

// Path: model/attributes/cloudflare/cloudflare__d1__rows_read.json

/**
 * The number of rows read in a Cloudflare D1 operation. `cloudflare.d1.rows_read`
 *
 * Attribute Value Type: `number` {@link CLOUDFLARE_D1_ROWS_READ_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example 12
 */
export const CLOUDFLARE_D1_ROWS_READ = 'cloudflare.d1.rows_read';

/**
 * Type for {@link CLOUDFLARE_D1_ROWS_READ} cloudflare.d1.rows_read
 */
export type CLOUDFLARE_D1_ROWS_READ_TYPE = number;

// Path: model/attributes/cloudflare/cloudflare__d1__rows_written.json

/**
 * The number of rows written in a Cloudflare D1 operation. `cloudflare.d1.rows_written`
 *
 * Attribute Value Type: `number` {@link CLOUDFLARE_D1_ROWS_WRITTEN_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example 12
 */
export const CLOUDFLARE_D1_ROWS_WRITTEN = 'cloudflare.d1.rows_written';

/**
 * Type for {@link CLOUDFLARE_D1_ROWS_WRITTEN} cloudflare.d1.rows_written
 */
export type CLOUDFLARE_D1_ROWS_WRITTEN_TYPE = number;

// Path: model/attributes/code/code__file__path.json

/**
 * The source code file name that identifies the code unit as uniquely as possible (preferably an absolute file path). `code.file.path`
 *
 * Attribute Value Type: `string` {@link CODE_FILE_PATH_TYPE}
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link CODE_FILEPATH} `code.filepath`
 *
 * @example "/app/myapplication/http/handler/server.py"
 */
export const CODE_FILE_PATH = 'code.file.path';

/**
 * Type for {@link CODE_FILE_PATH} code.file.path
 */
export type CODE_FILE_PATH_TYPE = string;

// Path: model/attributes/code/code__filepath.json

/**
 * The source code file name that identifies the code unit as uniquely as possible (preferably an absolute file path). `code.filepath`
 *
 * Attribute Value Type: `string` {@link CODE_FILEPATH_TYPE}
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link CODE_FILE_PATH} `code.file.path`
 *
 * @deprecated Use {@link CODE_FILE_PATH} (code.file.path) instead
 * @example "/app/myapplication/http/handler/server.py"
 */
export const CODE_FILEPATH = 'code.filepath';

/**
 * Type for {@link CODE_FILEPATH} code.filepath
 */
export type CODE_FILEPATH_TYPE = string;

// Path: model/attributes/code/code__function.json

/**
 * The method or function name, or equivalent (usually rightmost part of the code unit's name). `code.function`
 *
 * Attribute Value Type: `string` {@link CODE_FUNCTION_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link CODE_FUNCTION_NAME} `code.function.name`
 *
 * @deprecated Use {@link CODE_FUNCTION_NAME} (code.function.name) instead
 * @example "server_request"
 */
export const CODE_FUNCTION = 'code.function';

/**
 * Type for {@link CODE_FUNCTION} code.function
 */
export type CODE_FUNCTION_TYPE = string;

// Path: model/attributes/code/code__function__name.json

/**
 * The method or function name, or equivalent (usually rightmost part of the code unit's name). `code.function.name`
 *
 * Attribute Value Type: `string` {@link CODE_FUNCTION_NAME_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link CODE_FUNCTION} `code.function`
 *
 * @example "server_request"
 */
export const CODE_FUNCTION_NAME = 'code.function.name';

/**
 * Type for {@link CODE_FUNCTION_NAME} code.function.name
 */
export type CODE_FUNCTION_NAME_TYPE = string;

// Path: model/attributes/code/code__line__number.json

/**
 * The line number in code.filepath best representing the operation. It SHOULD point within the code unit named in code.function `code.line.number`
 *
 * Attribute Value Type: `number` {@link CODE_LINE_NUMBER_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link CODE_LINENO} `code.lineno`
 *
 * @example 42
 */
export const CODE_LINE_NUMBER = 'code.line.number';

/**
 * Type for {@link CODE_LINE_NUMBER} code.line.number
 */
export type CODE_LINE_NUMBER_TYPE = number;

// Path: model/attributes/code/code__lineno.json

/**
 * The line number in code.filepath best representing the operation. It SHOULD point within the code unit named in code.function `code.lineno`
 *
 * Attribute Value Type: `number` {@link CODE_LINENO_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link CODE_LINENO} `code.lineno`
 *
 * @deprecated Use {@link CODE_LINE_NUMBER} (code.line.number) instead
 * @example 42
 */
export const CODE_LINENO = 'code.lineno';

/**
 * Type for {@link CODE_LINENO} code.lineno
 */
export type CODE_LINENO_TYPE = number;

// Path: model/attributes/code/code__namespace.json

/**
 * The 'namespace' within which code.function is defined. Usually the qualified class or module name, such that code.namespace + some separator + code.function form a unique identifier for the code unit. `code.namespace`
 *
 * Attribute Value Type: `string` {@link CODE_NAMESPACE_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @deprecated Use {@link CODE_FUNCTION_NAME} (code.function.name) instead - code.function.name should include the namespace.
 * @example "http.handler"
 */
export const CODE_NAMESPACE = 'code.namespace';

/**
 * Type for {@link CODE_NAMESPACE} code.namespace
 */
export type CODE_NAMESPACE_TYPE = string;

// Path: model/attributes/db/db__collection__name.json

/**
 * The name of a collection (table, container) within the database. `db.collection.name`
 *
 * Attribute Value Type: `string` {@link DB_COLLECTION_NAME_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link DB_COLLECTION} `db.collection`
 *
 * @example "users"
 */
export const DB_COLLECTION_NAME = 'db.collection.name';

/**
 * Type for {@link DB_COLLECTION_NAME} db.collection.name
 */
export type DB_COLLECTION_NAME_TYPE = string;

// Path: model/attributes/db/db__name.json

/**
 * The name of the database being accessed. `db.name`
 *
 * Attribute Value Type: `string` {@link DB_NAME_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link DB_NAMESPACE} `db.namespace`
 *
 * @deprecated Use {@link DB_NAMESPACE} (db.namespace) instead
 * @example "customers"
 */
export const DB_NAME = 'db.name';

/**
 * Type for {@link DB_NAME} db.name
 */
export type DB_NAME_TYPE = string;

// Path: model/attributes/db/db__namespace.json

/**
 * The name of the database being accessed. `db.namespace`
 *
 * Attribute Value Type: `string` {@link DB_NAMESPACE_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link DB_NAME} `db.name`
 *
 * @example "customers"
 */
export const DB_NAMESPACE = 'db.namespace';

/**
 * Type for {@link DB_NAMESPACE} db.namespace
 */
export type DB_NAMESPACE_TYPE = string;

// Path: model/attributes/db/db__operation.json

/**
 * The name of the operation being executed. `db.operation`
 *
 * Attribute Value Type: `string` {@link DB_OPERATION_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link DB_OPERATION_NAME} `db.operation.name`
 *
 * @deprecated Use {@link DB_OPERATION_NAME} (db.operation.name) instead
 * @example "SELECT"
 */
export const DB_OPERATION = 'db.operation';

/**
 * Type for {@link DB_OPERATION} db.operation
 */
export type DB_OPERATION_TYPE = string;

// Path: model/attributes/db/db__operation__name.json

/**
 * The name of the operation being executed. `db.operation.name`
 *
 * Attribute Value Type: `string` {@link DB_OPERATION_NAME_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link DB_OPERATION} `db.operation`
 *
 * @example "SELECT"
 */
export const DB_OPERATION_NAME = 'db.operation.name';

/**
 * Type for {@link DB_OPERATION_NAME} db.operation.name
 */
export type DB_OPERATION_NAME_TYPE = string;

// Path: model/attributes/db/db__query__parameter__<key>.json

/**
 * A query parameter used in db.query.text, with <key> being the parameter name, and the attribute value being a string representation of the parameter value. `db.query.parameter.<key>`
 *
 * Attribute Value Type: `string` {@link DB_QUERY_PARAMETER_KEY_TYPE}
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

/**
 * Type for {@link DB_QUERY_PARAMETER_KEY} db.query.parameter.<key>
 */
export type DB_QUERY_PARAMETER_KEY_TYPE = string;

// Path: model/attributes/db/db__query__summary.json

/**
 * A database query being executed. Should be paramaterized. The full version of the query is in `db.query.text`. `db.query.summary`
 *
 * Attribute Value Type: `string` {@link DB_QUERY_SUMMARY_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "SELECT * FROM users"
 */
export const DB_QUERY_SUMMARY = 'db.query.summary';

/**
 * Type for {@link DB_QUERY_SUMMARY} db.query.summary
 */
export type DB_QUERY_SUMMARY_TYPE = string;

// Path: model/attributes/db/db__query__text.json

/**
 * The database query being executed. Should be the full query, not a parameterized version. The parameterized version is in `db.query.summary`. `db.query.text`
 *
 * Attribute Value Type: `string` {@link DB_QUERY_TEXT_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link DB_STATEMENT} `db.statement`
 *
 * @example "SELECT * FROM users"
 */
export const DB_QUERY_TEXT = 'db.query.text';

/**
 * Type for {@link DB_QUERY_TEXT} db.query.text
 */
export type DB_QUERY_TEXT_TYPE = string;

// Path: model/attributes/db/db__redis__connection.json

/**
 * The redis connection name. `db.redis.connection`
 *
 * Attribute Value Type: `string` {@link DB_REDIS_CONNECTION_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example "my-redis-instance"
 */
export const DB_REDIS_CONNECTION = 'db.redis.connection';

/**
 * Type for {@link DB_REDIS_CONNECTION} db.redis.connection
 */
export type DB_REDIS_CONNECTION_TYPE = string;

// Path: model/attributes/db/db__redis__parameters.json

/**
 * The array of command parameters given to a redis command. `db.redis.parameters`
 *
 * Attribute Value Type: `Array<string>` {@link DB_REDIS_PARAMETERS_TYPE}
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: No
 *
 * @example ["test","*"]
 */
export const DB_REDIS_PARAMETERS = 'db.redis.parameters';

/**
 * Type for {@link DB_REDIS_PARAMETERS} db.redis.parameters
 */
export type DB_REDIS_PARAMETERS_TYPE = Array<string>;

// Path: model/attributes/db/db__sql__bindings.json

/**
 * The array of query bindings. `db.sql.bindings`
 *
 * Attribute Value Type: `Array<string>` {@link DB_SQL_BINDINGS_TYPE}
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: No
 *
 * @deprecated Use {@link DB_QUERY_PARAMETER_KEY} (db.query.parameter.<key>) instead - Instead of adding every binding in the db.sql.bindings attribute, add them as individual entires with db.query.parameter.<key>.
 * @example ["1","foo"]
 */
export const DB_SQL_BINDINGS = 'db.sql.bindings';

/**
 * Type for {@link DB_SQL_BINDINGS} db.sql.bindings
 */
export type DB_SQL_BINDINGS_TYPE = Array<string>;

// Path: model/attributes/db/db__statement.json

/**
 * The database statement being executed. `db.statement`
 *
 * Attribute Value Type: `string` {@link DB_STATEMENT_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link DB_QUERY_TEXT} `db.query.text`
 *
 * @deprecated Use {@link DB_QUERY_TEXT} (db.query.text) instead
 * @example "SELECT * FROM users"
 */
export const DB_STATEMENT = 'db.statement';

/**
 * Type for {@link DB_STATEMENT} db.statement
 */
export type DB_STATEMENT_TYPE = string;

// Path: model/attributes/db/db__system.json

/**
 * An identifier for the database management system (DBMS) product being used. See [OpenTelemetry docs](https://github.com/open-telemetry/semantic-conventions/blob/main/docs/database/database-spans.md#notes-and-well-known-identifiers-for-dbsystem) for a list of well-known identifiers. `db.system`
 *
 * Attribute Value Type: `string` {@link DB_SYSTEM_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link DB_SYSTEM_NAME} `db.system.name`
 *
 * @deprecated Use {@link DB_SYSTEM_NAME} (db.system.name) instead
 * @example "postgresql"
 */
export const DB_SYSTEM = 'db.system';

/**
 * Type for {@link DB_SYSTEM} db.system
 */
export type DB_SYSTEM_TYPE = string;

// Path: model/attributes/db/db__system__name.json

/**
 * An identifier for the database management system (DBMS) product being used. See [OpenTelemetry docs](https://github.com/open-telemetry/semantic-conventions/blob/main/docs/database/database-spans.md#notes-and-well-known-identifiers-for-dbsystem) for a list of well-known identifiers. `db.system.name`
 *
 * Attribute Value Type: `string` {@link DB_SYSTEM_NAME_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link DB_SYSTEM} `db.system`
 *
 * @example "postgresql"
 */
export const DB_SYSTEM_NAME = 'db.system.name';

/**
 * Type for {@link DB_SYSTEM_NAME} db.system.name
 */
export type DB_SYSTEM_NAME_TYPE = string;

// Path: model/attributes/db/db__user.json

/**
 * The database user. `db.user`
 *
 * Attribute Value Type: `string` {@link DB_USER_TYPE}
 *
 * Contains PII: true
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "fancy_user"
 */
export const DB_USER = 'db.user';

/**
 * Type for {@link DB_USER} db.user
 */
export type DB_USER_TYPE = string;

// Path: model/attributes/environment.json

/**
 * The sentry environment. `environment`
 *
 * Attribute Value Type: `string` {@link ENVIRONMENT_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * Aliases: {@link SENTRY_ENVIRONMENT} `sentry.environment`
 *
 * @deprecated Use {@link SENTRY_ENVIRONMENT} (sentry.environment) instead
 * @example "production"
 */
export const ENVIRONMENT = 'environment';

/**
 * Type for {@link ENVIRONMENT} environment
 */
export type ENVIRONMENT_TYPE = string;

// Path: model/attributes/error/error__type.json

/**
 * Describes a class of error the operation ended with. `error.type`
 *
 * Attribute Value Type: `string` {@link ERROR_TYPE_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "timeout"
 */
export const ERROR_TYPE = 'error.type';

/**
 * Type for {@link ERROR_TYPE} error.type
 */
export type ERROR_TYPE_TYPE = string;

// Path: model/attributes/exception/exception__escaped.json

/**
 * SHOULD be set to true if the exception event is recorded at a point where it is known that the exception is escaping the scope of the span. `exception.escaped`
 *
 * Attribute Value Type: `boolean` {@link EXCEPTION_ESCAPED_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example true
 */
export const EXCEPTION_ESCAPED = 'exception.escaped';

/**
 * Type for {@link EXCEPTION_ESCAPED} exception.escaped
 */
export type EXCEPTION_ESCAPED_TYPE = boolean;

// Path: model/attributes/exception/exception__message.json

/**
 * The error message. `exception.message`
 *
 * Attribute Value Type: `string` {@link EXCEPTION_MESSAGE_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "ENOENT: no such file or directory"
 */
export const EXCEPTION_MESSAGE = 'exception.message';

/**
 * Type for {@link EXCEPTION_MESSAGE} exception.message
 */
export type EXCEPTION_MESSAGE_TYPE = string;

// Path: model/attributes/exception/exception__stacktrace.json

/**
 * A stacktrace as a string in the natural representation for the language runtime. The representation is to be determined and documented by each language SIG. `exception.stacktrace`
 *
 * Attribute Value Type: `string` {@link EXCEPTION_STACKTRACE_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "Exception in thread \"main\" java.lang.RuntimeException: Test exception\n at com.example.GenerateTrace.methodB(GenerateTrace.java:13)\n at com.example.GenerateTrace.methodA(GenerateTrace.java:9)\n at com.example.GenerateTrace.main(GenerateTrace.java:5)"
 */
export const EXCEPTION_STACKTRACE = 'exception.stacktrace';

/**
 * Type for {@link EXCEPTION_STACKTRACE} exception.stacktrace
 */
export type EXCEPTION_STACKTRACE_TYPE = string;

// Path: model/attributes/exception/exception__type.json

/**
 * The type of the exception (its fully-qualified class name, if applicable). The dynamic type of the exception should be preferred over the static type in languages that support it. `exception.type`
 *
 * Attribute Value Type: `string` {@link EXCEPTION_TYPE_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "OSError"
 */
export const EXCEPTION_TYPE = 'exception.type';

/**
 * Type for {@link EXCEPTION_TYPE} exception.type
 */
export type EXCEPTION_TYPE_TYPE = string;

// Path: model/attributes/faas/faas__coldstart.json

/**
 * A boolean that is true if the serverless function is executed for the first time (aka cold-start). `faas.coldstart`
 *
 * Attribute Value Type: `boolean` {@link FAAS_COLDSTART_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example true
 */
export const FAAS_COLDSTART = 'faas.coldstart';

/**
 * Type for {@link FAAS_COLDSTART} faas.coldstart
 */
export type FAAS_COLDSTART_TYPE = boolean;

// Path: model/attributes/faas/faas__cron.json

/**
 * A string containing the schedule period as Cron Expression. `faas.cron`
 *
 * Attribute Value Type: `string` {@link FAAS_CRON_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "0/5 * * * ? *"
 */
export const FAAS_CRON = 'faas.cron';

/**
 * Type for {@link FAAS_CRON} faas.cron
 */
export type FAAS_CRON_TYPE = string;

// Path: model/attributes/faas/faas__time.json

/**
 * A string containing the function invocation time in the ISO 8601 format expressed in UTC. `faas.time`
 *
 * Attribute Value Type: `string` {@link FAAS_TIME_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "2020-01-23T13:47:06Z"
 */
export const FAAS_TIME = 'faas.time';

/**
 * Type for {@link FAAS_TIME} faas.time
 */
export type FAAS_TIME_TYPE = string;

// Path: model/attributes/faas/faas__trigger.json

/**
 * Type of the trigger which caused this function invocation. `faas.trigger`
 *
 * Attribute Value Type: `string` {@link FAAS_TRIGGER_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "timer"
 */
export const FAAS_TRIGGER = 'faas.trigger';

/**
 * Type for {@link FAAS_TRIGGER} faas.trigger
 */
export type FAAS_TRIGGER_TYPE = string;

// Path: model/attributes/flag/flag__evaluation__<key>.json

/**
 * An instance of a feature flag evaluation. The value of this attribute is the boolean representing the evaluation result. The <key> suffix is the name of the feature flag. `flag.evaluation.<key>`
 *
 * Attribute Value Type: `boolean` {@link FLAG_EVALUATION_KEY_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * Has Dynamic Suffix: true
 *
 * @example "flag.evaluation.is_new_ui=true"
 */
export const FLAG_EVALUATION_KEY = 'flag.evaluation.<key>';

/**
 * Type for {@link FLAG_EVALUATION_KEY} flag.evaluation.<key>
 */
export type FLAG_EVALUATION_KEY_TYPE = boolean;

// Path: model/attributes/frames/frames__delay.json

/**
 * The sum of all delayed frame durations in seconds during the lifetime of the span. For more information see [frames delay](https://develop.sentry.dev/sdk/performance/frames-delay/). `frames.delay`
 *
 * Attribute Value Type: `number` {@link FRAMES_DELAY_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example 5
 */
export const FRAMES_DELAY = 'frames.delay';

/**
 * Type for {@link FRAMES_DELAY} frames.delay
 */
export type FRAMES_DELAY_TYPE = number;

// Path: model/attributes/frames/frames__frozen.json

/**
 * The number of frozen frames rendered during the lifetime of the span. `frames.frozen`
 *
 * Attribute Value Type: `number` {@link FRAMES_FROZEN_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example 3
 */
export const FRAMES_FROZEN = 'frames.frozen';

/**
 * Type for {@link FRAMES_FROZEN} frames.frozen
 */
export type FRAMES_FROZEN_TYPE = number;

// Path: model/attributes/frames/frames__slow.json

/**
 * The number of slow frames rendered during the lifetime of the span. `frames.slow`
 *
 * Attribute Value Type: `number` {@link FRAMES_SLOW_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example 1
 */
export const FRAMES_SLOW = 'frames.slow';

/**
 * Type for {@link FRAMES_SLOW} frames.slow
 */
export type FRAMES_SLOW_TYPE = number;

// Path: model/attributes/frames/frames__total.json

/**
 * The number of total frames rendered during the lifetime of the span. `frames.total`
 *
 * Attribute Value Type: `number` {@link FRAMES_TOTAL_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example 60
 */
export const FRAMES_TOTAL = 'frames.total';

/**
 * Type for {@link FRAMES_TOTAL} frames.total
 */
export type FRAMES_TOTAL_TYPE = number;

// Path: model/attributes/fs_error.json

/**
 * The error message of a file system error. `fs_error`
 *
 * Attribute Value Type: `string` {@link FS_ERROR_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @deprecated Use {@link ERROR_TYPE} (error.type) instead - This attribute is not part of the OpenTelemetry specification and error.type fits much better.
 * @example "ENOENT: no such file or directory"
 */
export const FS_ERROR = 'fs_error';

/**
 * Type for {@link FS_ERROR} fs_error
 */
export type FS_ERROR_TYPE = string;

// Path: model/attributes/gen_ai/gen_ai__prompt.json

/**
 * The input messages sent to the model `gen_ai.prompt`
 *
 * Attribute Value Type: `string` {@link GEN_AI_PROMPT_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "[{\"role\": \"user\", \"message\": \"hello\"}]"
 */
export const GEN_AI_PROMPT = 'gen_ai.prompt';

/**
 * Type for {@link GEN_AI_PROMPT} gen_ai.prompt
 */
export type GEN_AI_PROMPT_TYPE = string;

// Path: model/attributes/gen_ai/gen_ai__response__model.json

/**
 * The vendor-specific ID of the model used. `gen_ai.response.model`
 *
 * Attribute Value Type: `string` {@link GEN_AI_RESPONSE_MODEL_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link AI_MODEL_ID} `ai.model_id`
 *
 * @example "gpt-4"
 */
export const GEN_AI_RESPONSE_MODEL = 'gen_ai.response.model';

/**
 * Type for {@link GEN_AI_RESPONSE_MODEL} gen_ai.response.model
 */
export type GEN_AI_RESPONSE_MODEL_TYPE = string;

// Path: model/attributes/gen_ai/gen_ai__usage__completion_tokens.json

/**
 * The number of tokens used in the GenAI response (completion). `gen_ai.usage.completion_tokens`
 *
 * Attribute Value Type: `number` {@link GEN_AI_USAGE_COMPLETION_TOKENS_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link AI_COMPLETION_TOKENS_USED} `ai.completion_tokens.used`, {@link GEN_AI_USAGE_OUTPUT_TOKENS} `gen_ai.usage.output_tokens`
 *
 * @deprecated Use {@link GEN_AI_USAGE_OUTPUT_TOKENS} (gen_ai.usage.output_tokens) instead
 * @example 10
 */
export const GEN_AI_USAGE_COMPLETION_TOKENS = 'gen_ai.usage.completion_tokens';

/**
 * Type for {@link GEN_AI_USAGE_COMPLETION_TOKENS} gen_ai.usage.completion_tokens
 */
export type GEN_AI_USAGE_COMPLETION_TOKENS_TYPE = number;

// Path: model/attributes/gen_ai/gen_ai__usage__input_tokens.json

/**
 * The number of tokens used in the GenAI input (prompt). `gen_ai.usage.input_tokens`
 *
 * Attribute Value Type: `number` {@link GEN_AI_USAGE_INPUT_TOKENS_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link AI_PROMPT_TOKENS_USED} `ai.prompt_tokens.used`, {@link GEN_AI_USAGE_PROMPT_TOKENS} `gen_ai.usage.prompt_tokens`
 *
 * @example 10
 */
export const GEN_AI_USAGE_INPUT_TOKENS = 'gen_ai.usage.input_tokens';

/**
 * Type for {@link GEN_AI_USAGE_INPUT_TOKENS} gen_ai.usage.input_tokens
 */
export type GEN_AI_USAGE_INPUT_TOKENS_TYPE = number;

// Path: model/attributes/gen_ai/gen_ai__usage__output_tokens.json

/**
 * The number of tokens used in the GenAI response (completion). `gen_ai.usage.output_tokens`
 *
 * Attribute Value Type: `number` {@link GEN_AI_USAGE_OUTPUT_TOKENS_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link AI_COMPLETION_TOKENS_USED} `ai.completion_tokens.used`, {@link GEN_AI_USAGE_COMPLETION_TOKENS} `gen_ai.usage.completion_tokens`
 *
 * @example 10
 */
export const GEN_AI_USAGE_OUTPUT_TOKENS = 'gen_ai.usage.output_tokens';

/**
 * Type for {@link GEN_AI_USAGE_OUTPUT_TOKENS} gen_ai.usage.output_tokens
 */
export type GEN_AI_USAGE_OUTPUT_TOKENS_TYPE = number;

// Path: model/attributes/gen_ai/gen_ai__usage__prompt_tokens.json

/**
 * The number of tokens used in the GenAI input (prompt). `gen_ai.usage.prompt_tokens`
 *
 * Attribute Value Type: `number` {@link GEN_AI_USAGE_PROMPT_TOKENS_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link AI_PROMPT_TOKENS_USED} `ai.prompt_tokens.used`, {@link GEN_AI_USAGE_INPUT_TOKENS} `gen_ai.usage.input_tokens`
 *
 * @deprecated Use {@link GEN_AI_USAGE_INPUT_TOKENS} (gen_ai.usage.input_tokens) instead
 * @example 20
 */
export const GEN_AI_USAGE_PROMPT_TOKENS = 'gen_ai.usage.prompt_tokens';

/**
 * Type for {@link GEN_AI_USAGE_PROMPT_TOKENS} gen_ai.usage.prompt_tokens
 */
export type GEN_AI_USAGE_PROMPT_TOKENS_TYPE = number;

// Path: model/attributes/graphql/graphql__operation__name.json

/**
 * The name of the operation being executed. `graphql.operation.name`
 *
 * Attribute Value Type: `string` {@link GRAPHQL_OPERATION_NAME_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "findBookById"
 */
export const GRAPHQL_OPERATION_NAME = 'graphql.operation.name';

/**
 * Type for {@link GRAPHQL_OPERATION_NAME} graphql.operation.name
 */
export type GRAPHQL_OPERATION_NAME_TYPE = string;

// Path: model/attributes/graphql/graphql__operation__type.json

/**
 * The type of the operation being executed. `graphql.operation.type`
 *
 * Attribute Value Type: `string` {@link GRAPHQL_OPERATION_TYPE_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "query"
 */
export const GRAPHQL_OPERATION_TYPE = 'graphql.operation.type';

/**
 * Type for {@link GRAPHQL_OPERATION_TYPE} graphql.operation.type
 */
export type GRAPHQL_OPERATION_TYPE_TYPE = string;

// Path: model/attributes/http/http__client_ip.json

/**
 * Client address - domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name. `http.client_ip`
 *
 * Attribute Value Type: `string` {@link HTTP_CLIENT_IP_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link CLIENT_ADDRESS} `client.address`
 *
 * @deprecated Use {@link HTTP_CLIENT_IP} (http.client_ip) instead
 * @example "example.com"
 */
export const HTTP_CLIENT_IP = 'http.client_ip';

/**
 * Type for {@link HTTP_CLIENT_IP} http.client_ip
 */
export type HTTP_CLIENT_IP_TYPE = string;

// Path: model/attributes/http/http__decoded_response_content_length.json

/**
 * The decoded body size of the response (in bytes). `http.decoded_response_content_length`
 *
 * Attribute Value Type: `number` {@link HTTP_DECODED_RESPONSE_CONTENT_LENGTH_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example 456
 */
export const HTTP_DECODED_RESPONSE_CONTENT_LENGTH = 'http.decoded_response_content_length';

/**
 * Type for {@link HTTP_DECODED_RESPONSE_CONTENT_LENGTH} http.decoded_response_content_length
 */
export type HTTP_DECODED_RESPONSE_CONTENT_LENGTH_TYPE = number;

// Path: model/attributes/http/http__flavor.json

/**
 * The actual version of the protocol used for network communication. `http.flavor`
 *
 * Attribute Value Type: `string` {@link HTTP_FLAVOR_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link NETWORK_PROTOCOL_VERSION} `network.protocol.version`
 *
 * @deprecated Use {@link NETWORK_PROTOCOL_VERSION} (network.protocol.version) instead
 * @example "1.1"
 */
export const HTTP_FLAVOR = 'http.flavor';

/**
 * Type for {@link HTTP_FLAVOR} http.flavor
 */
export type HTTP_FLAVOR_TYPE = string;

// Path: model/attributes/http/http__fragment.json

/**
 * The fragments present in the URI. Note that this contains the leading # character, while the `url.fragment` attribute does not. `http.fragment`
 *
 * Attribute Value Type: `string` {@link HTTP_FRAGMENT_TYPE}
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: No
 *
 * @example "#details"
 */
export const HTTP_FRAGMENT = 'http.fragment';

/**
 * Type for {@link HTTP_FRAGMENT} http.fragment
 */
export type HTTP_FRAGMENT_TYPE = string;

// Path: model/attributes/http/http__host.json

/**
 * The domain name. `http.host`
 *
 * Attribute Value Type: `string` {@link HTTP_HOST_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link SERVER_ADDRESS} `server.address`, {@link CLIENT_ADDRESS} `client.address`
 *
 * @deprecated Use {@link SERVER_ADDRESS} (server.address) instead - Deprecated, use one of `server.address` or `client.address`, depending on the usage
 * @example "example.com"
 */
export const HTTP_HOST = 'http.host';

/**
 * Type for {@link HTTP_HOST} http.host
 */
export type HTTP_HOST_TYPE = string;

// Path: model/attributes/http/http__method.json

/**
 * The HTTP method used. `http.method`
 *
 * Attribute Value Type: `string` {@link HTTP_METHOD_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link HTTP_REQUEST_METHOD} `http.request.method`
 *
 * @deprecated Use {@link HTTP_REQUEST_METHOD} (http.request.method) instead
 * @example "GET"
 */
export const HTTP_METHOD = 'http.method';

/**
 * Type for {@link HTTP_METHOD} http.method
 */
export type HTTP_METHOD_TYPE = string;

// Path: model/attributes/http/http__query.json

/**
 * The query string present in the URL. Note that this contains the leading ? character, while the `url.query` attribute does not. `http.query`
 *
 * Attribute Value Type: `string` {@link HTTP_QUERY_TYPE}
 *
 * Contains PII: maybe - Query string values can contain sensitive information. Clients should attempt to scrub parameters that might contain sensitive information.
 *
 * Attribute defined in OTEL: No
 *
 * @example "?foo=bar&bar=baz"
 */
export const HTTP_QUERY = 'http.query';

/**
 * Type for {@link HTTP_QUERY} http.query
 */
export type HTTP_QUERY_TYPE = string;

// Path: model/attributes/http/http__request__connect_start.json

/**
 * The UNIX timestamp representing the time immediately before the user agent starts establishing the connection to the server to retrieve the resource. `http.request.connect_start`
 *
 * Attribute Value Type: `number` {@link HTTP_REQUEST_CONNECT_START_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example 1732829555
 */
export const HTTP_REQUEST_CONNECT_START = 'http.request.connect_start';

/**
 * Type for {@link HTTP_REQUEST_CONNECT_START} http.request.connect_start
 */
export type HTTP_REQUEST_CONNECT_START_TYPE = number;

// Path: model/attributes/http/http__request__connection_end.json

/**
 * The UNIX timestamp representing the time immediately after the browser finishes establishing the connection to the server to retrieve the resource. The timestamp value includes the time interval to establish the transport connection, as well as other time intervals such as TLS handshake and SOCKS authentication. `http.request.connection_end`
 *
 * Attribute Value Type: `number` {@link HTTP_REQUEST_CONNECTION_END_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example 1732829555
 */
export const HTTP_REQUEST_CONNECTION_END = 'http.request.connection_end';

/**
 * Type for {@link HTTP_REQUEST_CONNECTION_END} http.request.connection_end
 */
export type HTTP_REQUEST_CONNECTION_END_TYPE = number;

// Path: model/attributes/http/http__request__domain_lookup_end.json

/**
 * The UNIX timestamp representing the time immediately after the browser finishes the domain-name lookup for the resource. `http.request.domain_lookup_end`
 *
 * Attribute Value Type: `number` {@link HTTP_REQUEST_DOMAIN_LOOKUP_END_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example 1732829555
 */
export const HTTP_REQUEST_DOMAIN_LOOKUP_END = 'http.request.domain_lookup_end';

/**
 * Type for {@link HTTP_REQUEST_DOMAIN_LOOKUP_END} http.request.domain_lookup_end
 */
export type HTTP_REQUEST_DOMAIN_LOOKUP_END_TYPE = number;

// Path: model/attributes/http/http__request__domain_lookup_start.json

/**
 * The UNIX timestamp representing the time immediately before the browser starts the domain name lookup for the resource. `http.request.domain_lookup_start`
 *
 * Attribute Value Type: `number` {@link HTTP_REQUEST_DOMAIN_LOOKUP_START_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example 1732829555
 */
export const HTTP_REQUEST_DOMAIN_LOOKUP_START = 'http.request.domain_lookup_start';

/**
 * Type for {@link HTTP_REQUEST_DOMAIN_LOOKUP_START} http.request.domain_lookup_start
 */
export type HTTP_REQUEST_DOMAIN_LOOKUP_START_TYPE = number;

// Path: model/attributes/http/http__request__fetch_start.json

/**
 * The UNIX timestamp representing the time immediately before the browser starts to fetch the resource. `http.request.fetch_start`
 *
 * Attribute Value Type: `number` {@link HTTP_REQUEST_FETCH_START_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example 1732829555
 */
export const HTTP_REQUEST_FETCH_START = 'http.request.fetch_start';

/**
 * Type for {@link HTTP_REQUEST_FETCH_START} http.request.fetch_start
 */
export type HTTP_REQUEST_FETCH_START_TYPE = number;

// Path: model/attributes/http/http__request__header__<key>.json

/**
 * HTTP request headers, <key> being the normalized HTTP Header name (lowercase), the value being the header values. `http.request.header.<key>`
 *
 * Attribute Value Type: `Array<string>` {@link HTTP_REQUEST_HEADER_KEY_TYPE}
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

/**
 * Type for {@link HTTP_REQUEST_HEADER_KEY} http.request.header.<key>
 */
export type HTTP_REQUEST_HEADER_KEY_TYPE = Array<string>;

// Path: model/attributes/http/http__request__method.json

/**
 * The HTTP method used. `http.request.method`
 *
 * Attribute Value Type: `string` {@link HTTP_REQUEST_METHOD_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link METHOD} `method`, {@link HTTP_METHOD} `http.method`
 *
 * @example "GET"
 */
export const HTTP_REQUEST_METHOD = 'http.request.method';

/**
 * Type for {@link HTTP_REQUEST_METHOD} http.request.method
 */
export type HTTP_REQUEST_METHOD_TYPE = string;

// Path: model/attributes/http/http__request__redirect_start.json

/**
 * The UNIX timestamp representing the start time of the fetch which that initiates the redirect. `http.request.redirect_start`
 *
 * Attribute Value Type: `number` {@link HTTP_REQUEST_REDIRECT_START_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example 1732829555
 */
export const HTTP_REQUEST_REDIRECT_START = 'http.request.redirect_start';

/**
 * Type for {@link HTTP_REQUEST_REDIRECT_START} http.request.redirect_start
 */
export type HTTP_REQUEST_REDIRECT_START_TYPE = number;

// Path: model/attributes/http/http__request__request_start.json

/**
 * The UNIX timestamp representing the time immediately before the browser starts requesting the resource from the server, cache, or local resource. If the transport connection fails and the browser retires the request, the value returned will be the start of the retry request. `http.request.request_start`
 *
 * Attribute Value Type: `number` {@link HTTP_REQUEST_REQUEST_START_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example 1732829555
 */
export const HTTP_REQUEST_REQUEST_START = 'http.request.request_start';

/**
 * Type for {@link HTTP_REQUEST_REQUEST_START} http.request.request_start
 */
export type HTTP_REQUEST_REQUEST_START_TYPE = number;

// Path: model/attributes/http/http__request__resend_count.json

/**
 * The ordinal number of request resending attempt (for any reason, including redirects). `http.request.resend_count`
 *
 * Attribute Value Type: `number` {@link HTTP_REQUEST_RESEND_COUNT_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example 2
 */
export const HTTP_REQUEST_RESEND_COUNT = 'http.request.resend_count';

/**
 * Type for {@link HTTP_REQUEST_RESEND_COUNT} http.request.resend_count
 */
export type HTTP_REQUEST_RESEND_COUNT_TYPE = number;

// Path: model/attributes/http/http__request__response_end.json

/**
 * The UNIX timestamp representing the time immediately after the browser receives the last byte of the resource or immediately before the transport connection is closed, whichever comes first. `http.request.response_end`
 *
 * Attribute Value Type: `number` {@link HTTP_REQUEST_RESPONSE_END_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example 1732829555
 */
export const HTTP_REQUEST_RESPONSE_END = 'http.request.response_end';

/**
 * Type for {@link HTTP_REQUEST_RESPONSE_END} http.request.response_end
 */
export type HTTP_REQUEST_RESPONSE_END_TYPE = number;

// Path: model/attributes/http/http__request__response_start.json

/**
 * The UNIX timestamp representing the time immediately before the browser starts requesting the resource from the server, cache, or local resource. If the transport connection fails and the browser retires the request, the value returned will be the start of the retry request. `http.request.response_start`
 *
 * Attribute Value Type: `number` {@link HTTP_REQUEST_RESPONSE_START_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example 1732829555
 */
export const HTTP_REQUEST_RESPONSE_START = 'http.request.response_start';

/**
 * Type for {@link HTTP_REQUEST_RESPONSE_START} http.request.response_start
 */
export type HTTP_REQUEST_RESPONSE_START_TYPE = number;

// Path: model/attributes/http/http__request__secure_connection_start.json

/**
 * The UNIX timestamp representing the time immediately before the browser starts the handshake process to secure the current connection. If a secure connection is not used, the property returns zero. `http.request.secure_connection_start`
 *
 * Attribute Value Type: `number` {@link HTTP_REQUEST_SECURE_CONNECTION_START_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example 1732829555
 */
export const HTTP_REQUEST_SECURE_CONNECTION_START = 'http.request.secure_connection_start';

/**
 * Type for {@link HTTP_REQUEST_SECURE_CONNECTION_START} http.request.secure_connection_start
 */
export type HTTP_REQUEST_SECURE_CONNECTION_START_TYPE = number;

// Path: model/attributes/http/http__response__body__size.json

/**
 * The encoded body size of the response (in bytes). `http.response.body.size`
 *
 * Attribute Value Type: `number` {@link HTTP_RESPONSE_BODY_SIZE_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link HTTP_RESPONSE_CONTENT_LENGTH} `http.response_content_length`, {@link HTTP_RESPONSE_HEADER_CONTENT_LENGTH} `http.response.header.content-length`, {@link HTTP_RESPONSE_HEADER['CONTENT_LENGTH']} `http.response.header['content-length']`
 *
 * @example 123
 */
export const HTTP_RESPONSE_BODY_SIZE = 'http.response.body.size';

/**
 * Type for {@link HTTP_RESPONSE_BODY_SIZE} http.response.body.size
 */
export type HTTP_RESPONSE_BODY_SIZE_TYPE = number;

// Path: model/attributes/http/http__response__header__<key>.json

/**
 * HTTP response headers, <key> being the normalized HTTP Header name (lowercase), the value being the header values. `http.response.header.<key>`
 *
 * Attribute Value Type: `Array<string>` {@link HTTP_RESPONSE_HEADER_KEY_TYPE}
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

/**
 * Type for {@link HTTP_RESPONSE_HEADER_KEY} http.response.header.<key>
 */
export type HTTP_RESPONSE_HEADER_KEY_TYPE = Array<string>;

// Path: model/attributes/http/http__response__header__content-length.json

/**
 * The size of the message body sent to the recipient (in bytes) `http.response.header.content-length`
 *
 * Attribute Value Type: `string` {@link HTTP_RESPONSE_HEADER_CONTENT_LENGTH_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link HTTP_RESPONSE_CONTENT_LENGTH} `http.response_content_length`, {@link HTTP_RESPONSE_BODY_SIZE} `http.response.body.size`
 *
 * @example "http.response.header.custom-header=['foo', 'bar']"
 */
export const HTTP_RESPONSE_HEADER_CONTENT_LENGTH = 'http.response.header.content-length';

/**
 * Type for {@link HTTP_RESPONSE_HEADER_CONTENT_LENGTH} http.response.header.content-length
 */
export type HTTP_RESPONSE_HEADER_CONTENT_LENGTH_TYPE = string;

// Path: model/attributes/http/http__response__size.json

/**
 * The transfer size of the response (in bytes). `http.response.size`
 *
 * Attribute Value Type: `number` {@link HTTP_RESPONSE_SIZE_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link HTTP_RESPONSE_TRANSFER_SIZE} `http.response_transfer_size`
 *
 * @example 456
 */
export const HTTP_RESPONSE_SIZE = 'http.response.size';

/**
 * Type for {@link HTTP_RESPONSE_SIZE} http.response.size
 */
export type HTTP_RESPONSE_SIZE_TYPE = number;

// Path: model/attributes/http/http__response__status_code.json

/**
 * The status code of the HTTP response. `http.response.status_code`
 *
 * Attribute Value Type: `number` {@link HTTP_RESPONSE_STATUS_CODE_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link HTTP_STATUS_CODE} `http.status_code`
 *
 * @example 404
 */
export const HTTP_RESPONSE_STATUS_CODE = 'http.response.status_code';

/**
 * Type for {@link HTTP_RESPONSE_STATUS_CODE} http.response.status_code
 */
export type HTTP_RESPONSE_STATUS_CODE_TYPE = number;

// Path: model/attributes/http/http__response_content_length.json

/**
 * The encoded body size of the response (in bytes). `http.response_content_length`
 *
 * Attribute Value Type: `number` {@link HTTP_RESPONSE_CONTENT_LENGTH_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link HTTP_RESPONSE_BODY_SIZE} `http.response.body.size`, {@link HTTP_RESPONSE_HEADER_CONTENT_LENGTH} `http.response.header.content-length`, {@link HTTP_RESPONSE_HEADER['CONTENT_LENGTH']} `http.response.header['content-length']`
 *
 * @deprecated Use {@link HTTP_RESPONSE_BODY_SIZE} (http.response.body.size) instead
 * @example 123
 */
export const HTTP_RESPONSE_CONTENT_LENGTH = 'http.response_content_length';

/**
 * Type for {@link HTTP_RESPONSE_CONTENT_LENGTH} http.response_content_length
 */
export type HTTP_RESPONSE_CONTENT_LENGTH_TYPE = number;

// Path: model/attributes/http/http__response_transfer_size.json

/**
 * The transfer size of the response (in bytes). `http.response_transfer_size`
 *
 * Attribute Value Type: `number` {@link HTTP_RESPONSE_TRANSFER_SIZE_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * Aliases: {@link HTTP_RESPONSE_SIZE} `http.response.size`
 *
 * @deprecated Use {@link HTTP_RESPONSE_SIZE} (http.response.size) instead
 * @example 456
 */
export const HTTP_RESPONSE_TRANSFER_SIZE = 'http.response_transfer_size';

/**
 * Type for {@link HTTP_RESPONSE_TRANSFER_SIZE} http.response_transfer_size
 */
export type HTTP_RESPONSE_TRANSFER_SIZE_TYPE = number;

// Path: model/attributes/http/http__route.json

/**
 * The matched route, that is, the path template in the format used by the respective server framework. `http.route`
 *
 * Attribute Value Type: `string` {@link HTTP_ROUTE_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link URL_TEMPLATE} `url.template`
 *
 * @example "/users/:id"
 */
export const HTTP_ROUTE = 'http.route';

/**
 * Type for {@link HTTP_ROUTE} http.route
 */
export type HTTP_ROUTE_TYPE = string;

// Path: model/attributes/http/http__scheme.json

/**
 * The URI scheme component identifying the used protocol. `http.scheme`
 *
 * Attribute Value Type: `string` {@link HTTP_SCHEME_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link URL_SCHEME} `url.scheme`
 *
 * @deprecated Use {@link URL_SCHEME} (url.scheme) instead
 * @example "https"
 */
export const HTTP_SCHEME = 'http.scheme';

/**
 * Type for {@link HTTP_SCHEME} http.scheme
 */
export type HTTP_SCHEME_TYPE = string;

// Path: model/attributes/http/http__server_name.json

/**
 * The server domain name `http.server_name`
 *
 * Attribute Value Type: `string` {@link HTTP_SERVER_NAME_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link SERVER_ADDRESS} `server.address`
 *
 * @deprecated Use {@link SERVER_ADDRESS} (server.address) instead
 * @example "example.com"
 */
export const HTTP_SERVER_NAME = 'http.server_name';

/**
 * Type for {@link HTTP_SERVER_NAME} http.server_name
 */
export type HTTP_SERVER_NAME_TYPE = string;

// Path: model/attributes/http/http__status_code.json

/**
 * The status code of the HTTP response. `http.status_code`
 *
 * Attribute Value Type: `number` {@link HTTP_STATUS_CODE_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link HTTP_RESPONSE_STATUS_CODE} `http.response.status_code`
 *
 * @deprecated Use {@link HTTP_RESPONSE_STATUS_CODE} (http.response.status_code) instead
 * @example 404
 */
export const HTTP_STATUS_CODE = 'http.status_code';

/**
 * Type for {@link HTTP_STATUS_CODE} http.status_code
 */
export type HTTP_STATUS_CODE_TYPE = number;

// Path: model/attributes/http/http__target.json

/**
 * The pathname and query string of the URL. `http.target`
 *
 * Attribute Value Type: `string` {@link HTTP_TARGET_TYPE}
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: Yes
 *
 * @deprecated Use {@link URL_PATH} (url.path) instead - This attribute is being deprecated in favor of url.path and url.query
 * @example "/test?foo=bar#buzz"
 */
export const HTTP_TARGET = 'http.target';

/**
 * Type for {@link HTTP_TARGET} http.target
 */
export type HTTP_TARGET_TYPE = string;

// Path: model/attributes/http/http__url.json

/**
 * The URL of the resource that was fetched. `http.url`
 *
 * Attribute Value Type: `string` {@link HTTP_URL_TYPE}
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link URL_FULL} `url.full`, {@link HTTP_URL} `http.url`
 *
 * @deprecated Use {@link URL_FULL} (url.full) instead
 * @example "https://example.com/test?foo=bar#buzz"
 */
export const HTTP_URL = 'http.url';

/**
 * Type for {@link HTTP_URL} http.url
 */
export type HTTP_URL_TYPE = string;

// Path: model/attributes/http/http__user_agent.json

/**
 * Value of the HTTP User-Agent header sent by the client. `http.user_agent`
 *
 * Attribute Value Type: `string` {@link HTTP_USER_AGENT_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link USER_AGENT_ORIGINAL} `user_agent.original`
 *
 * @deprecated Use {@link USER_AGENT_ORIGINAL} (user_agent.original) instead
 * @example "Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Mobile/15E148 Safari/604.1"
 */
export const HTTP_USER_AGENT = 'http.user_agent';

/**
 * Type for {@link HTTP_USER_AGENT} http.user_agent
 */
export type HTTP_USER_AGENT_TYPE = string;

// Path: model/attributes/id.json

/**
 * A unique identifier for the span. `id`
 *
 * Attribute Value Type: `string` {@link ID_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example "f47ac10b58cc4372a5670e02b2c3d479"
 */
export const ID = 'id';

/**
 * Type for {@link ID} id
 */
export type ID_TYPE = string;

// Path: model/attributes/jvm/jvm__gc__action.json

/**
 * Name of the garbage collector action. `jvm.gc.action`
 *
 * Attribute Value Type: `string` {@link JVM_GC_ACTION_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "end of minor GC"
 */
export const JVM_GC_ACTION = 'jvm.gc.action';

/**
 * Type for {@link JVM_GC_ACTION} jvm.gc.action
 */
export type JVM_GC_ACTION_TYPE = string;

// Path: model/attributes/jvm/jvm__gc__name.json

/**
 * Name of the garbage collector. `jvm.gc.name`
 *
 * Attribute Value Type: `string` {@link JVM_GC_NAME_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "G1 Young Generation"
 */
export const JVM_GC_NAME = 'jvm.gc.name';

/**
 * Type for {@link JVM_GC_NAME} jvm.gc.name
 */
export type JVM_GC_NAME_TYPE = string;

// Path: model/attributes/jvm/jvm__memory__pool__name.json

/**
 * Name of the memory pool. `jvm.memory.pool.name`
 *
 * Attribute Value Type: `string` {@link JVM_MEMORY_POOL_NAME_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "G1 Old Gen"
 */
export const JVM_MEMORY_POOL_NAME = 'jvm.memory.pool.name';

/**
 * Type for {@link JVM_MEMORY_POOL_NAME} jvm.memory.pool.name
 */
export type JVM_MEMORY_POOL_NAME_TYPE = string;

// Path: model/attributes/jvm/jvm__memory__type.json

/**
 * Name of the memory pool. `jvm.memory.type`
 *
 * Attribute Value Type: `string` {@link JVM_MEMORY_TYPE_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "G1 Old Gen"
 */
export const JVM_MEMORY_TYPE = 'jvm.memory.type';

/**
 * Type for {@link JVM_MEMORY_TYPE} jvm.memory.type
 */
export type JVM_MEMORY_TYPE_TYPE = string;

// Path: model/attributes/jvm/jvm__thread__daemon.json

/**
 * Whether the thread is daemon or not. `jvm.thread.daemon`
 *
 * Attribute Value Type: `boolean` {@link JVM_THREAD_DAEMON_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example true
 */
export const JVM_THREAD_DAEMON = 'jvm.thread.daemon';

/**
 * Type for {@link JVM_THREAD_DAEMON} jvm.thread.daemon
 */
export type JVM_THREAD_DAEMON_TYPE = boolean;

// Path: model/attributes/jvm/jvm__thread__state.json

/**
 * State of the thread. `jvm.thread.state`
 *
 * Attribute Value Type: `string` {@link JVM_THREAD_STATE_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "blocked"
 */
export const JVM_THREAD_STATE = 'jvm.thread.state';

/**
 * Type for {@link JVM_THREAD_STATE} jvm.thread.state
 */
export type JVM_THREAD_STATE_TYPE = string;

// Path: model/attributes/lcp/lcp__element.json

/**
 * The dom element responsible for the largest contentful paint. `lcp.element`
 *
 * Attribute Value Type: `string` {@link LCP_ELEMENT_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example "img"
 */
export const LCP_ELEMENT = 'lcp.element';

/**
 * Type for {@link LCP_ELEMENT} lcp.element
 */
export type LCP_ELEMENT_TYPE = string;

// Path: model/attributes/lcp/lcp__id.json

/**
 * The id of the dom element responsible for the largest contentful paint. `lcp.id`
 *
 * Attribute Value Type: `string` {@link LCP_ID_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example "#hero"
 */
export const LCP_ID = 'lcp.id';

/**
 * Type for {@link LCP_ID} lcp.id
 */
export type LCP_ID_TYPE = string;

// Path: model/attributes/lcp/lcp__size.json

/**
 * The size of the largest contentful paint element. `lcp.size`
 *
 * Attribute Value Type: `number` {@link LCP_SIZE_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example 1234
 */
export const LCP_SIZE = 'lcp.size';

/**
 * Type for {@link LCP_SIZE} lcp.size
 */
export type LCP_SIZE_TYPE = number;

// Path: model/attributes/lcp/lcp__url.json

/**
 * The url of the dom element responsible for the largest contentful paint. `lcp.url`
 *
 * Attribute Value Type: `string` {@link LCP_URL_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example "https://example.com"
 */
export const LCP_URL = 'lcp.url';

/**
 * Type for {@link LCP_URL} lcp.url
 */
export type LCP_URL_TYPE = string;

// Path: model/attributes/logger/logger__name.json

/**
 * The name of the logger that generated this event. `logger.name`
 *
 * Attribute Value Type: `string` {@link LOGGER_NAME_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example "myLogger"
 */
export const LOGGER_NAME = 'logger.name';

/**
 * Type for {@link LOGGER_NAME} logger.name
 */
export type LOGGER_NAME_TYPE = string;

// Path: model/attributes/messaging/messaging__destination__connection.json

/**
 * The message destination connection. `messaging.destination.connection`
 *
 * Attribute Value Type: `string` {@link MESSAGING_DESTINATION_CONNECTION_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example "BestTopic"
 */
export const MESSAGING_DESTINATION_CONNECTION = 'messaging.destination.connection';

/**
 * Type for {@link MESSAGING_DESTINATION_CONNECTION} messaging.destination.connection
 */
export type MESSAGING_DESTINATION_CONNECTION_TYPE = string;

// Path: model/attributes/messaging/messaging__destination__name.json

/**
 * The message destination name. `messaging.destination.name`
 *
 * Attribute Value Type: `string` {@link MESSAGING_DESTINATION_NAME_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "BestTopic"
 */
export const MESSAGING_DESTINATION_NAME = 'messaging.destination.name';

/**
 * Type for {@link MESSAGING_DESTINATION_NAME} messaging.destination.name
 */
export type MESSAGING_DESTINATION_NAME_TYPE = string;

// Path: model/attributes/messaging/messaging__message__body__size.json

/**
 * The size of the message body in bytes. `messaging.message.body.size`
 *
 * Attribute Value Type: `number` {@link MESSAGING_MESSAGE_BODY_SIZE_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example 839
 */
export const MESSAGING_MESSAGE_BODY_SIZE = 'messaging.message.body.size';

/**
 * Type for {@link MESSAGING_MESSAGE_BODY_SIZE} messaging.message.body.size
 */
export type MESSAGING_MESSAGE_BODY_SIZE_TYPE = number;

// Path: model/attributes/messaging/messaging__message__envelope__size.json

/**
 * The size of the message body and metadata in bytes. `messaging.message.envelope.size`
 *
 * Attribute Value Type: `number` {@link MESSAGING_MESSAGE_ENVELOPE_SIZE_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example 1045
 */
export const MESSAGING_MESSAGE_ENVELOPE_SIZE = 'messaging.message.envelope.size';

/**
 * Type for {@link MESSAGING_MESSAGE_ENVELOPE_SIZE} messaging.message.envelope.size
 */
export type MESSAGING_MESSAGE_ENVELOPE_SIZE_TYPE = number;

// Path: model/attributes/messaging/messaging__message__id.json

/**
 * A value used by the messaging system as an identifier for the message, represented as a string. `messaging.message.id`
 *
 * Attribute Value Type: `string` {@link MESSAGING_MESSAGE_ID_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "f47ac10b58cc4372a5670e02b2c3d479"
 */
export const MESSAGING_MESSAGE_ID = 'messaging.message.id';

/**
 * Type for {@link MESSAGING_MESSAGE_ID} messaging.message.id
 */
export type MESSAGING_MESSAGE_ID_TYPE = string;

// Path: model/attributes/messaging/messaging__message__receive__latency.json

/**
 * The latency between when the message was published and received. `messaging.message.receive.latency`
 *
 * Attribute Value Type: `number` {@link MESSAGING_MESSAGE_RECEIVE_LATENCY_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example 1732847252
 */
export const MESSAGING_MESSAGE_RECEIVE_LATENCY = 'messaging.message.receive.latency';

/**
 * Type for {@link MESSAGING_MESSAGE_RECEIVE_LATENCY} messaging.message.receive.latency
 */
export type MESSAGING_MESSAGE_RECEIVE_LATENCY_TYPE = number;

// Path: model/attributes/messaging/messaging__message__retry__count.json

/**
 * The amount of attempts to send the message. `messaging.message.retry.count`
 *
 * Attribute Value Type: `number` {@link MESSAGING_MESSAGE_RETRY_COUNT_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example 2
 */
export const MESSAGING_MESSAGE_RETRY_COUNT = 'messaging.message.retry.count';

/**
 * Type for {@link MESSAGING_MESSAGE_RETRY_COUNT} messaging.message.retry.count
 */
export type MESSAGING_MESSAGE_RETRY_COUNT_TYPE = number;

// Path: model/attributes/messaging/messaging__system.json

/**
 * The messaging system as identified by the client instrumentation. `messaging.system`
 *
 * Attribute Value Type: `string` {@link MESSAGING_SYSTEM_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "activemq"
 */
export const MESSAGING_SYSTEM = 'messaging.system';

/**
 * Type for {@link MESSAGING_SYSTEM} messaging.system
 */
export type MESSAGING_SYSTEM_TYPE = string;

// Path: model/attributes/method.json

/**
 * The HTTP method used. `method`
 *
 * Attribute Value Type: `string` {@link METHOD_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * Aliases: {@link HTTP_REQUEST_METHOD} `http.request.method`
 *
 * @deprecated Use {@link HTTP_REQUEST_METHOD} (http.request.method) instead
 * @example "GET"
 */
export const METHOD = 'method';

/**
 * Type for {@link METHOD} method
 */
export type METHOD_TYPE = string;

// Path: model/attributes/navigation/navigation__type.json

/**
 * The type of navigation done by a client-side router. `navigation.type`
 *
 * Attribute Value Type: `string` {@link NAVIGATION_TYPE_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example "router.push"
 */
export const NAVIGATION_TYPE = 'navigation.type';

/**
 * Type for {@link NAVIGATION_TYPE} navigation.type
 */
export type NAVIGATION_TYPE_TYPE = string;

// Path: model/attributes/net/net__host__ip.json

/**
 * Local address of the network connection - IP address or Unix domain socket name. `net.host.ip`
 *
 * Attribute Value Type: `string` {@link NET_HOST_IP_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link NETWORK_LOCAL_ADDRESS} `network.local.address`
 *
 * @deprecated Use {@link NETWORK_LOCAL_ADDRESS} (network.local.address) instead
 * @example "192.168.0.1"
 */
export const NET_HOST_IP = 'net.host.ip';

/**
 * Type for {@link NET_HOST_IP} net.host.ip
 */
export type NET_HOST_IP_TYPE = string;

// Path: model/attributes/net/net__host__name.json

/**
 * Server domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name. `net.host.name`
 *
 * Attribute Value Type: `string` {@link NET_HOST_NAME_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link SERVER_ADDRESS} `server.address`
 *
 * @deprecated Use {@link SERVER_ADDRESS} (server.address) instead
 * @example "example.com"
 */
export const NET_HOST_NAME = 'net.host.name';

/**
 * Type for {@link NET_HOST_NAME} net.host.name
 */
export type NET_HOST_NAME_TYPE = string;

// Path: model/attributes/net/net__host__port.json

/**
 * Server port number. `net.host.port`
 *
 * Attribute Value Type: `number` {@link NET_HOST_PORT_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link SERVER_PORT} `server.port`
 *
 * @deprecated Use {@link SERVER_PORT} (server.port) instead
 * @example 1337
 */
export const NET_HOST_PORT = 'net.host.port';

/**
 * Type for {@link NET_HOST_PORT} net.host.port
 */
export type NET_HOST_PORT_TYPE = number;

// Path: model/attributes/net/net__peer__ip.json

/**
 * Peer address of the network connection - IP address or Unix domain socket name. `net.peer.ip`
 *
 * Attribute Value Type: `string` {@link NET_PEER_IP_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link NETWORK_PEER_ADDRESS} `network.peer.address`
 *
 * @deprecated Use {@link NETWORK_PEER_ADDRESS} (network.peer.address) instead
 * @example "192.168.0.1"
 */
export const NET_PEER_IP = 'net.peer.ip';

/**
 * Type for {@link NET_PEER_IP} net.peer.ip
 */
export type NET_PEER_IP_TYPE = string;

// Path: model/attributes/net/net__peer__name.json

/**
 * Server domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name. `net.peer.name`
 *
 * Attribute Value Type: `string` {@link NET_PEER_NAME_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @deprecated Use {@link SERVER_ADDRESS} (server.address) instead - Deprecated, use server.address on client spans and client.address on server spans.
 * @example "example.com"
 */
export const NET_PEER_NAME = 'net.peer.name';

/**
 * Type for {@link NET_PEER_NAME} net.peer.name
 */
export type NET_PEER_NAME_TYPE = string;

// Path: model/attributes/net/net__peer__port.json

/**
 * Peer port number. `net.peer.port`
 *
 * Attribute Value Type: `number` {@link NET_PEER_PORT_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @deprecated Use {@link SERVER_PORT} (server.port) instead - Deprecated, use server.port on client spans and client.port on server spans.
 * @example 1337
 */
export const NET_PEER_PORT = 'net.peer.port';

/**
 * Type for {@link NET_PEER_PORT} net.peer.port
 */
export type NET_PEER_PORT_TYPE = number;

// Path: model/attributes/net/net__protocol__name.json

/**
 * OSI application layer or non-OSI equivalent. `net.protocol.name`
 *
 * Attribute Value Type: `string` {@link NET_PROTOCOL_NAME_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link NETWORK_PROTOCOL_NAME} `network.protocol.name`
 *
 * @deprecated Use {@link NETWORK_PROTOCOL_NAME} (network.protocol.name) instead
 * @example "http"
 */
export const NET_PROTOCOL_NAME = 'net.protocol.name';

/**
 * Type for {@link NET_PROTOCOL_NAME} net.protocol.name
 */
export type NET_PROTOCOL_NAME_TYPE = string;

// Path: model/attributes/net/net__protocol__version.json

/**
 * The actual version of the protocol used for network communication. `net.protocol.version`
 *
 * Attribute Value Type: `string` {@link NET_PROTOCOL_VERSION_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link NETWORK_PROTOCOL_VERSION} `network.protocol.version`
 *
 * @deprecated Use {@link NETWORK_PROTOCOL_VERSION} (network.protocol.version) instead
 * @example "1.1"
 */
export const NET_PROTOCOL_VERSION = 'net.protocol.version';

/**
 * Type for {@link NET_PROTOCOL_VERSION} net.protocol.version
 */
export type NET_PROTOCOL_VERSION_TYPE = string;

// Path: model/attributes/net/net__sock__family.json

/**
 * OSI transport and network layer `net.sock.family`
 *
 * Attribute Value Type: `string` {@link NET_SOCK_FAMILY_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @deprecated Use {@link NETWORK_TRANSPORT} (network.transport) instead - Deprecated, use network.transport and network.type.
 * @example "inet"
 */
export const NET_SOCK_FAMILY = 'net.sock.family';

/**
 * Type for {@link NET_SOCK_FAMILY} net.sock.family
 */
export type NET_SOCK_FAMILY_TYPE = string;

// Path: model/attributes/net/net__sock__host__addr.json

/**
 * Local address of the network connection mapping to Unix domain socket name. `net.sock.host.addr`
 *
 * Attribute Value Type: `string` {@link NET_SOCK_HOST_ADDR_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link NETWORK_LOCAL_ADDRESS} `network.local.address`
 *
 * @deprecated Use {@link NETWORK_LOCAL_ADDRESS} (network.local.address) instead
 * @example "/var/my.sock"
 */
export const NET_SOCK_HOST_ADDR = 'net.sock.host.addr';

/**
 * Type for {@link NET_SOCK_HOST_ADDR} net.sock.host.addr
 */
export type NET_SOCK_HOST_ADDR_TYPE = string;

// Path: model/attributes/net/net__sock__host__port.json

/**
 * Local port number of the network connection. `net.sock.host.port`
 *
 * Attribute Value Type: `number` {@link NET_SOCK_HOST_PORT_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link NETWORK_LOCAL_PORT} `network.local.port`
 *
 * @deprecated Use {@link NETWORK_LOCAL_PORT} (network.local.port) instead
 * @example 8080
 */
export const NET_SOCK_HOST_PORT = 'net.sock.host.port';

/**
 * Type for {@link NET_SOCK_HOST_PORT} net.sock.host.port
 */
export type NET_SOCK_HOST_PORT_TYPE = number;

// Path: model/attributes/net/net__sock__peer__addr.json

/**
 * Peer address of the network connection - IP address `net.sock.peer.addr`
 *
 * Attribute Value Type: `string` {@link NET_SOCK_PEER_ADDR_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link NETWORK_PEER_ADDRESS} `network.peer.address`
 *
 * @deprecated Use {@link NETWORK_PEER_ADDRESS} (network.peer.address) instead
 * @example "192.168.0.1"
 */
export const NET_SOCK_PEER_ADDR = 'net.sock.peer.addr';

/**
 * Type for {@link NET_SOCK_PEER_ADDR} net.sock.peer.addr
 */
export type NET_SOCK_PEER_ADDR_TYPE = string;

// Path: model/attributes/net/net__sock__peer__name.json

/**
 * Peer address of the network connection - Unix domain socket name `net.sock.peer.name`
 *
 * Attribute Value Type: `string` {@link NET_SOCK_PEER_NAME_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @deprecated Use {@link } () instead - Deprecated, no replacement at this time
 * @example "/var/my.sock"
 */
export const NET_SOCK_PEER_NAME = 'net.sock.peer.name';

/**
 * Type for {@link NET_SOCK_PEER_NAME} net.sock.peer.name
 */
export type NET_SOCK_PEER_NAME_TYPE = string;

// Path: model/attributes/net/net__sock__peer__port.json

/**
 * Peer port number of the network connection. `net.sock.peer.port`
 *
 * Attribute Value Type: `number` {@link NET_SOCK_PEER_PORT_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @deprecated Use {@link NETWORK_PEER_PORT} (network.peer.port) instead
 * @example 8080
 */
export const NET_SOCK_PEER_PORT = 'net.sock.peer.port';

/**
 * Type for {@link NET_SOCK_PEER_PORT} net.sock.peer.port
 */
export type NET_SOCK_PEER_PORT_TYPE = number;

// Path: model/attributes/net/net__transport.json

/**
 * OSI transport layer or inter-process communication method. `net.transport`
 *
 * Attribute Value Type: `string` {@link NET_TRANSPORT_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link NETWORK_TRANSPORT} `network.transport`
 *
 * @deprecated Use {@link NETWORK_TRANSPORT} (network.transport) instead
 * @example "tcp"
 */
export const NET_TRANSPORT = 'net.transport';

/**
 * Type for {@link NET_TRANSPORT} net.transport
 */
export type NET_TRANSPORT_TYPE = string;

// Path: model/attributes/network/network__local__address.json

/**
 * Local address of the network connection - IP address or Unix domain socket name. `network.local.address`
 *
 * Attribute Value Type: `string` {@link NETWORK_LOCAL_ADDRESS_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link NET_HOST_IP} `net.host.ip`, {@link NET_SOCK_HOST_ADDR} `net.sock.host.addr`
 *
 * @example "10.1.2.80"
 */
export const NETWORK_LOCAL_ADDRESS = 'network.local.address';

/**
 * Type for {@link NETWORK_LOCAL_ADDRESS} network.local.address
 */
export type NETWORK_LOCAL_ADDRESS_TYPE = string;

// Path: model/attributes/network/network__local__port.json

/**
 * Local port number of the network connection. `network.local.port`
 *
 * Attribute Value Type: `number` {@link NETWORK_LOCAL_PORT_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link NET_SOCK_HOST_PORT} `net.sock.host.port`
 *
 * @example 65400
 */
export const NETWORK_LOCAL_PORT = 'network.local.port';

/**
 * Type for {@link NETWORK_LOCAL_PORT} network.local.port
 */
export type NETWORK_LOCAL_PORT_TYPE = number;

// Path: model/attributes/network/network__peer__address.json

/**
 * Peer address of the network connection - IP address or Unix domain socket name. `network.peer.address`
 *
 * Attribute Value Type: `string` {@link NETWORK_PEER_ADDRESS_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "10.1.2.80"
 */
export const NETWORK_PEER_ADDRESS = 'network.peer.address';

/**
 * Type for {@link NETWORK_PEER_ADDRESS} network.peer.address
 */
export type NETWORK_PEER_ADDRESS_TYPE = string;

// Path: model/attributes/network/network__peer__port.json

/**
 * Peer port number of the network connection. `network.peer.port`
 *
 * Attribute Value Type: `number` {@link NETWORK_PEER_PORT_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example 65400
 */
export const NETWORK_PEER_PORT = 'network.peer.port';

/**
 * Type for {@link NETWORK_PEER_PORT} network.peer.port
 */
export type NETWORK_PEER_PORT_TYPE = number;

// Path: model/attributes/network/network__protocol__name.json

/**
 * OSI application layer or non-OSI equivalent. `network.protocol.name`
 *
 * Attribute Value Type: `string` {@link NETWORK_PROTOCOL_NAME_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link NET_PROTOCOL_NAME} `net.protocol.name`
 *
 * @example "http"
 */
export const NETWORK_PROTOCOL_NAME = 'network.protocol.name';

/**
 * Type for {@link NETWORK_PROTOCOL_NAME} network.protocol.name
 */
export type NETWORK_PROTOCOL_NAME_TYPE = string;

// Path: model/attributes/network/network__protocol__version.json

/**
 * The actual version of the protocol used for network communication. `network.protocol.version`
 *
 * Attribute Value Type: `string` {@link NETWORK_PROTOCOL_VERSION_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link HTTP_FLAVOR} `http.flavor`, {@link NET_PROTOCOL_VERSION} `net.protocol.version`
 *
 * @example "1.1"
 */
export const NETWORK_PROTOCOL_VERSION = 'network.protocol.version';

/**
 * Type for {@link NETWORK_PROTOCOL_VERSION} network.protocol.version
 */
export type NETWORK_PROTOCOL_VERSION_TYPE = string;

// Path: model/attributes/network/network__transport.json

/**
 * OSI transport layer or inter-process communication method. `network.transport`
 *
 * Attribute Value Type: `string` {@link NETWORK_TRANSPORT_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link NET_TRANSPORT} `net.transport`
 *
 * @example "tcp"
 */
export const NETWORK_TRANSPORT = 'network.transport';

/**
 * Type for {@link NETWORK_TRANSPORT} network.transport
 */
export type NETWORK_TRANSPORT_TYPE = string;

// Path: model/attributes/network/network__type.json

/**
 * OSI network layer or non-OSI equivalent. `network.type`
 *
 * Attribute Value Type: `string` {@link NETWORK_TYPE_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "ipv4"
 */
export const NETWORK_TYPE = 'network.type';

/**
 * Type for {@link NETWORK_TYPE} network.type
 */
export type NETWORK_TYPE_TYPE = string;

// Path: model/attributes/os/os__build_id.json

/**
 * The build ID of the operating system. `os.build_id`
 *
 * Attribute Value Type: `string` {@link OS_BUILD_ID_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "1234567890"
 */
export const OS_BUILD_ID = 'os.build_id';

/**
 * Type for {@link OS_BUILD_ID} os.build_id
 */
export type OS_BUILD_ID_TYPE = string;

// Path: model/attributes/os/os__description.json

/**
 * Human readable (not intended to be parsed) OS version information, like e.g. reported by ver or lsb_release -a commands. `os.description`
 *
 * Attribute Value Type: `string` {@link OS_DESCRIPTION_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "Ubuntu 18.04.1 LTS"
 */
export const OS_DESCRIPTION = 'os.description';

/**
 * Type for {@link OS_DESCRIPTION} os.description
 */
export type OS_DESCRIPTION_TYPE = string;

// Path: model/attributes/os/os__name.json

/**
 * Human readable operating system name. `os.name`
 *
 * Attribute Value Type: `string` {@link OS_NAME_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "Ubuntu"
 */
export const OS_NAME = 'os.name';

/**
 * Type for {@link OS_NAME} os.name
 */
export type OS_NAME_TYPE = string;

// Path: model/attributes/os/os__type.json

/**
 * The operating system type. `os.type`
 *
 * Attribute Value Type: `string` {@link OS_TYPE_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "linux"
 */
export const OS_TYPE = 'os.type';

/**
 * Type for {@link OS_TYPE} os.type
 */
export type OS_TYPE_TYPE = string;

// Path: model/attributes/os/os__version.json

/**
 * The version of the operating system. `os.version`
 *
 * Attribute Value Type: `string` {@link OS_VERSION_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "18.04.2"
 */
export const OS_VERSION = 'os.version';

/**
 * Type for {@link OS_VERSION} os.version
 */
export type OS_VERSION_TYPE = string;

// Path: model/attributes/otel/otel__scope__name.json

/**
 * The name of the instrumentation scope - (InstrumentationScope.Name in OTLP). `otel.scope.name`
 *
 * Attribute Value Type: `string` {@link OTEL_SCOPE_NAME_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "io.opentelemetry.contrib.mongodb"
 */
export const OTEL_SCOPE_NAME = 'otel.scope.name';

/**
 * Type for {@link OTEL_SCOPE_NAME} otel.scope.name
 */
export type OTEL_SCOPE_NAME_TYPE = string;

// Path: model/attributes/otel/otel__scope__version.json

/**
 * The version of the instrumentation scope - (InstrumentationScope.Version in OTLP). `otel.scope.version`
 *
 * Attribute Value Type: `string` {@link OTEL_SCOPE_VERSION_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "2.4.5"
 */
export const OTEL_SCOPE_VERSION = 'otel.scope.version';

/**
 * Type for {@link OTEL_SCOPE_VERSION} otel.scope.version
 */
export type OTEL_SCOPE_VERSION_TYPE = string;

// Path: model/attributes/otel/otel__status_code.json

/**
 * Name of the code, either “OK” or “ERROR”. MUST NOT be set if the status code is UNSET. `otel.status_code`
 *
 * Attribute Value Type: `string` {@link OTEL_STATUS_CODE_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "OK"
 */
export const OTEL_STATUS_CODE = 'otel.status_code';

/**
 * Type for {@link OTEL_STATUS_CODE} otel.status_code
 */
export type OTEL_STATUS_CODE_TYPE = string;

// Path: model/attributes/otel/otel__status_description.json

/**
 * Description of the Status if it has a value, otherwise not set. `otel.status_description`
 *
 * Attribute Value Type: `string` {@link OTEL_STATUS_DESCRIPTION_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "resource not found"
 */
export const OTEL_STATUS_DESCRIPTION = 'otel.status_description';

/**
 * Type for {@link OTEL_STATUS_DESCRIPTION} otel.status_description
 */
export type OTEL_STATUS_DESCRIPTION_TYPE = string;

// Path: model/attributes/params/params__<key>.json

/**
 * Decoded parameters extracted from a URL path. Usually added by client-side routing frameworks like vue-router. `params.<key>`
 *
 * Attribute Value Type: `string` {@link PARAMS_KEY_TYPE}
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: No
 *
 * Has Dynamic Suffix: true
 *
 * Aliases: {@link URL_PATH_PARAMETER_KEY} `url.path.parameter.<key>`
 *
 * @example "params.id='123'"
 */
export const PARAMS_KEY = 'params.<key>';

/**
 * Type for {@link PARAMS_KEY} params.<key>
 */
export type PARAMS_KEY_TYPE = string;

// Path: model/attributes/previous_route.json

/**
 * Also used by mobile SDKs to indicate the previous route in the application. `previous_route`
 *
 * Attribute Value Type: `string` {@link PREVIOUS_ROUTE_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example "HomeScreen"
 */
export const PREVIOUS_ROUTE = 'previous_route';

/**
 * Type for {@link PREVIOUS_ROUTE} previous_route
 */
export type PREVIOUS_ROUTE_TYPE = string;

// Path: model/attributes/process/process__executable__name.json

/**
 * The name of the executable that started the process. `process.executable.name`
 *
 * Attribute Value Type: `string` {@link PROCESS_EXECUTABLE_NAME_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "getsentry"
 */
export const PROCESS_EXECUTABLE_NAME = 'process.executable.name';

/**
 * Type for {@link PROCESS_EXECUTABLE_NAME} process.executable.name
 */
export type PROCESS_EXECUTABLE_NAME_TYPE = string;

// Path: model/attributes/process/process__pid.json

/**
 * The process ID of the running process. `process.pid`
 *
 * Attribute Value Type: `number` {@link PROCESS_PID_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example 12345
 */
export const PROCESS_PID = 'process.pid';

/**
 * Type for {@link PROCESS_PID} process.pid
 */
export type PROCESS_PID_TYPE = number;

// Path: model/attributes/process/process__runtime__description.json

/**
 * An additional description about the runtime of the process, for example a specific vendor customization of the runtime environment. Equivalent to `raw_description` in the Sentry runtime context. `process.runtime.description`
 *
 * Attribute Value Type: `string` {@link PROCESS_RUNTIME_DESCRIPTION_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "Eclipse OpenJ9 VM openj9-0.21.0"
 */
export const PROCESS_RUNTIME_DESCRIPTION = 'process.runtime.description';

/**
 * Type for {@link PROCESS_RUNTIME_DESCRIPTION} process.runtime.description
 */
export type PROCESS_RUNTIME_DESCRIPTION_TYPE = string;

// Path: model/attributes/process/process__runtime__name.json

/**
 * The name of the runtime. Equivalent to `name` in the Sentry runtime context. `process.runtime.name`
 *
 * Attribute Value Type: `string` {@link PROCESS_RUNTIME_NAME_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "node"
 */
export const PROCESS_RUNTIME_NAME = 'process.runtime.name';

/**
 * Type for {@link PROCESS_RUNTIME_NAME} process.runtime.name
 */
export type PROCESS_RUNTIME_NAME_TYPE = string;

// Path: model/attributes/process/process__runtime__version.json

/**
 * The version of the runtime of this process, as returned by the runtime without modification. Equivalent to `version` in the Sentry runtime context. `process.runtime.version`
 *
 * Attribute Value Type: `string` {@link PROCESS_RUNTIME_VERSION_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "18.04.2"
 */
export const PROCESS_RUNTIME_VERSION = 'process.runtime.version';

/**
 * Type for {@link PROCESS_RUNTIME_VERSION} process.runtime.version
 */
export type PROCESS_RUNTIME_VERSION_TYPE = string;

// Path: model/attributes/profile_id.json

/**
 * The id of the sentry profile. `profile_id`
 *
 * Attribute Value Type: `string` {@link PROFILE_ID_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * Aliases: {@link SENTRY_PROFILE_ID} `sentry.profile_id`
 *
 * @deprecated Use {@link SENTRY_PROFILE_ID} (sentry.profile_id) instead
 * @example "123e4567e89b12d3a456426614174000"
 */
export const PROFILE_ID = 'profile_id';

/**
 * Type for {@link PROFILE_ID} profile_id
 */
export type PROFILE_ID_TYPE = string;

// Path: model/attributes/query/query__<key>.json

/**
 * An item in a query string. Usually added by client-side routing frameworks like vue-router. `query.<key>`
 *
 * Attribute Value Type: `string` {@link QUERY_KEY_TYPE}
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

/**
 * Type for {@link QUERY_KEY} query.<key>
 */
export type QUERY_KEY_TYPE = string;

// Path: model/attributes/release.json

/**
 * The sentry release. `release`
 *
 * Attribute Value Type: `string` {@link RELEASE_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * Aliases: {@link SENTRY_RELEASE} `sentry.release`
 *
 * @deprecated Use {@link SENTRY_RELEASE} (sentry.release) instead
 * @example "production"
 */
export const RELEASE = 'release';

/**
 * Type for {@link RELEASE} release
 */
export type RELEASE_TYPE = string;

// Path: model/attributes/remix/remix__action_form_data__<key>.json

/**
 * Remix form data, <key> being the form data key, the value being the form data value. `remix.action_form_data.<key>`
 *
 * Attribute Value Type: `string` {@link REMIX_ACTION_FORM_DATA_KEY_TYPE}
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

/**
 * Type for {@link REMIX_ACTION_FORM_DATA_KEY} remix.action_form_data.<key>
 */
export type REMIX_ACTION_FORM_DATA_KEY_TYPE = string;

// Path: model/attributes/replay_id.json

/**
 * The id of the sentry replay. `replay_id`
 *
 * Attribute Value Type: `string` {@link REPLAY_ID_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * Aliases: {@link SENTRY_REPLAY_ID} `sentry.replay_id`
 *
 * @deprecated Use {@link SENTRY_REPLAY_ID} (sentry.replay_id) instead
 * @example "123e4567e89b12d3a456426614174000"
 */
export const REPLAY_ID = 'replay_id';

/**
 * Type for {@link REPLAY_ID} replay_id
 */
export type REPLAY_ID_TYPE = string;

// Path: model/attributes/resource/resource__render_blocking_status.json

/**
 * The render blocking status of the resource. `resource.render_blocking_status`
 *
 * Attribute Value Type: `string` {@link RESOURCE_RENDER_BLOCKING_STATUS_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example "non-blocking"
 */
export const RESOURCE_RENDER_BLOCKING_STATUS = 'resource.render_blocking_status';

/**
 * Type for {@link RESOURCE_RENDER_BLOCKING_STATUS} resource.render_blocking_status
 */
export type RESOURCE_RENDER_BLOCKING_STATUS_TYPE = string;

// Path: model/attributes/route.json

/**
 * The matched route, that is, the path template in the format used by the respective server framework. Also used by mobile SDKs to indicate the current route in the application. `route`
 *
 * Attribute Value Type: `string` {@link ROUTE_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * Aliases: {@link HTTP_ROUTE} `http.route`
 *
 * @deprecated Use {@link HTTP_ROUTE} (http.route) instead
 * @example "App\\Controller::indexAction"
 */
export const ROUTE = 'route';

/**
 * Type for {@link ROUTE} route
 */
export type ROUTE_TYPE = string;

// Path: model/attributes/rpc/rpc__grpc__status_code.json

/**
 * The numeric status code of the gRPC request. `rpc.grpc.status_code`
 *
 * Attribute Value Type: `number` {@link RPC_GRPC_STATUS_CODE_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example 2
 */
export const RPC_GRPC_STATUS_CODE = 'rpc.grpc.status_code';

/**
 * Type for {@link RPC_GRPC_STATUS_CODE} rpc.grpc.status_code
 */
export type RPC_GRPC_STATUS_CODE_TYPE = number;

// Path: model/attributes/rpc/rpc__service.json

/**
 * The full (logical) name of the service being called, including its package name, if applicable. `rpc.service`
 *
 * Attribute Value Type: `string` {@link RPC_SERVICE_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "myService.BestService"
 */
export const RPC_SERVICE = 'rpc.service';

/**
 * Type for {@link RPC_SERVICE} rpc.service
 */
export type RPC_SERVICE_TYPE = string;

// Path: model/attributes/sentry/sentry__cancellation_reason.json

/**
 * The reason why a span ended early. `sentry.cancellation_reason`
 *
 * Attribute Value Type: `string` {@link SENTRY_CANCELLATION_REASON_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example "document.hidden"
 */
export const SENTRY_CANCELLATION_REASON = 'sentry.cancellation_reason';

/**
 * Type for {@link SENTRY_CANCELLATION_REASON} sentry.cancellation_reason
 */
export type SENTRY_CANCELLATION_REASON_TYPE = string;

// Path: model/attributes/sentry/sentry__dist.json

/**
 * The sentry dist. `sentry.dist`
 *
 * Attribute Value Type: `string` {@link SENTRY_DIST_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example "1.0"
 */
export const SENTRY_DIST = 'sentry.dist';

/**
 * Type for {@link SENTRY_DIST} sentry.dist
 */
export type SENTRY_DIST_TYPE = string;

// Path: model/attributes/sentry/sentry__environment.json

/**
 * The sentry environment. `sentry.environment`
 *
 * Attribute Value Type: `string` {@link SENTRY_ENVIRONMENT_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * Aliases: {@link ENVIRONMENT} `environment`
 *
 * @example "production"
 */
export const SENTRY_ENVIRONMENT = 'sentry.environment';

/**
 * Type for {@link SENTRY_ENVIRONMENT} sentry.environment
 */
export type SENTRY_ENVIRONMENT_TYPE = string;

// Path: model/attributes/sentry/sentry__exclusive_time.json

/**
 * The exclusive time duration of the span. `sentry.exclusive_time`
 *
 * Attribute Value Type: `number` {@link SENTRY_EXCLUSIVE_TIME_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example 1234
 */
export const SENTRY_EXCLUSIVE_TIME = 'sentry.exclusive_time';

/**
 * Type for {@link SENTRY_EXCLUSIVE_TIME} sentry.exclusive_time
 */
export type SENTRY_EXCLUSIVE_TIME_TYPE = number;

// Path: model/attributes/sentry/sentry__http__prefetch.json

/**
 * If an http request was a prefetch request. `sentry.http.prefetch`
 *
 * Attribute Value Type: `boolean` {@link SENTRY_HTTP_PREFETCH_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example true
 */
export const SENTRY_HTTP_PREFETCH = 'sentry.http.prefetch';

/**
 * Type for {@link SENTRY_HTTP_PREFETCH} sentry.http.prefetch
 */
export type SENTRY_HTTP_PREFETCH_TYPE = boolean;

// Path: model/attributes/sentry/sentry__idle_span_finish_reason.json

/**
 * The reason why an idle span ended early. `sentry.idle_span_finish_reason`
 *
 * Attribute Value Type: `string` {@link SENTRY_IDLE_SPAN_FINISH_REASON_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example "idleTimeout"
 */
export const SENTRY_IDLE_SPAN_FINISH_REASON = 'sentry.idle_span_finish_reason';

/**
 * Type for {@link SENTRY_IDLE_SPAN_FINISH_REASON} sentry.idle_span_finish_reason
 */
export type SENTRY_IDLE_SPAN_FINISH_REASON_TYPE = string;

// Path: model/attributes/sentry/sentry__module__<key>.json

/**
 * A module that was loaded in the process. The key is the name of the module. `sentry.module.<key>`
 *
 * Attribute Value Type: `string` {@link SENTRY_MODULE_KEY_TYPE}
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

/**
 * Type for {@link SENTRY_MODULE_KEY} sentry.module.<key>
 */
export type SENTRY_MODULE_KEY_TYPE = string;

// Path: model/attributes/sentry/sentry__op.json

/**
 * The operation of a span. `sentry.op`
 *
 * Attribute Value Type: `string` {@link SENTRY_OP_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example "http.client"
 */
export const SENTRY_OP = 'sentry.op';

/**
 * Type for {@link SENTRY_OP} sentry.op
 */
export type SENTRY_OP_TYPE = string;

// Path: model/attributes/sentry/sentry__origin.json

/**
 * The origin of a span. `sentry.origin`
 *
 * Attribute Value Type: `string` {@link SENTRY_ORIGIN_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example "auto.http.otel.fastify"
 */
export const SENTRY_ORIGIN = 'sentry.origin';

/**
 * Type for {@link SENTRY_ORIGIN} sentry.origin
 */
export type SENTRY_ORIGIN_TYPE = string;

// Path: model/attributes/sentry/sentry__platform.json

/**
 * The sdk platform that generated the event. `sentry.platform`
 *
 * Attribute Value Type: `string` {@link SENTRY_PLATFORM_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example "php"
 */
export const SENTRY_PLATFORM = 'sentry.platform';

/**
 * Type for {@link SENTRY_PLATFORM} sentry.platform
 */
export type SENTRY_PLATFORM_TYPE = string;

// Path: model/attributes/sentry/sentry__profile_id.json

/**
 * The id of the sentry profile. `sentry.profile_id`
 *
 * Attribute Value Type: `string` {@link SENTRY_PROFILE_ID_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * Aliases: {@link PROFILE_ID} `profile_id`
 *
 * @example "123e4567e89b12d3a456426614174000"
 */
export const SENTRY_PROFILE_ID = 'sentry.profile_id';

/**
 * Type for {@link SENTRY_PROFILE_ID} sentry.profile_id
 */
export type SENTRY_PROFILE_ID_TYPE = string;

// Path: model/attributes/sentry/sentry__release.json

/**
 * The sentry release. `sentry.release`
 *
 * Attribute Value Type: `string` {@link SENTRY_RELEASE_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * Aliases: {@link SERVICE_VERSION} `service.version`, {@link RELEASE} `release`
 *
 * @example "7.0.0"
 */
export const SENTRY_RELEASE = 'sentry.release';

/**
 * Type for {@link SENTRY_RELEASE} sentry.release
 */
export type SENTRY_RELEASE_TYPE = string;

// Path: model/attributes/sentry/sentry__replay_id.json

/**
 * The id of the sentry replay. `sentry.replay_id`
 *
 * Attribute Value Type: `string` {@link SENTRY_REPLAY_ID_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * Aliases: {@link REPLAY_ID} `replay_id`
 *
 * @example "123e4567e89b12d3a456426614174000"
 */
export const SENTRY_REPLAY_ID = 'sentry.replay_id';

/**
 * Type for {@link SENTRY_REPLAY_ID} sentry.replay_id
 */
export type SENTRY_REPLAY_ID_TYPE = string;

// Path: model/attributes/sentry/sentry__sample_rate.json

/**
 * The sample rate of the span. `sentry.sample_rate`
 *
 * Attribute Value Type: `number` {@link SENTRY_SAMPLE_RATE_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example 0.5
 */
export const SENTRY_SAMPLE_RATE = 'sentry.sample_rate';

/**
 * Type for {@link SENTRY_SAMPLE_RATE} sentry.sample_rate
 */
export type SENTRY_SAMPLE_RATE_TYPE = number;

// Path: model/attributes/sentry/sentry__sdk__integrations.json

/**
 * A list of names identifying enabled integrations. The list shouldhave all enabled integrations, including default integrations. Defaultintegrations are included because different SDK releases may contain differentdefault integrations. `sentry.sdk.integrations`
 *
 * Attribute Value Type: `Array<string>` {@link SENTRY_SDK_INTEGRATIONS_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example ["InboundFilters","FunctionToString","BrowserApiErrors","Breadcrumbs"]
 */
export const SENTRY_SDK_INTEGRATIONS = 'sentry.sdk.integrations';

/**
 * Type for {@link SENTRY_SDK_INTEGRATIONS} sentry.sdk.integrations
 */
export type SENTRY_SDK_INTEGRATIONS_TYPE = Array<string>;

// Path: model/attributes/sentry/sentry__sdk__name.json

/**
 * The sentry sdk name. `sentry.sdk.name`
 *
 * Attribute Value Type: `string` {@link SENTRY_SDK_NAME_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example "@sentry/react"
 */
export const SENTRY_SDK_NAME = 'sentry.sdk.name';

/**
 * Type for {@link SENTRY_SDK_NAME} sentry.sdk.name
 */
export type SENTRY_SDK_NAME_TYPE = string;

// Path: model/attributes/sentry/sentry__sdk__version.json

/**
 * The sentry sdk version. `sentry.sdk.version`
 *
 * Attribute Value Type: `string` {@link SENTRY_SDK_VERSION_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example "7.0.0"
 */
export const SENTRY_SDK_VERSION = 'sentry.sdk.version';

/**
 * Type for {@link SENTRY_SDK_VERSION} sentry.sdk.version
 */
export type SENTRY_SDK_VERSION_TYPE = string;

// Path: model/attributes/sentry/sentry__span__source.json

/**
 * The source of a span, also referred to as transaction source. `sentry.span.source`
 *
 * Attribute Value Type: `string` {@link SENTRY_SPAN_SOURCE_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example "route"
 */
export const SENTRY_SPAN_SOURCE = 'sentry.span.source';

/**
 * Type for {@link SENTRY_SPAN_SOURCE} sentry.span.source
 */
export type SENTRY_SPAN_SOURCE_TYPE = string;

// Path: model/attributes/sentry/sentry__transaction.json

/**
 * The sentry transaction (segment name). `sentry.transaction`
 *
 * Attribute Value Type: `string` {@link SENTRY_TRANSACTION_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * Aliases: {@link TRANSACTION} `transaction`
 *
 * @example "GET /"
 */
export const SENTRY_TRANSACTION = 'sentry.transaction';

/**
 * Type for {@link SENTRY_TRANSACTION} sentry.transaction
 */
export type SENTRY_TRANSACTION_TYPE = string;

// Path: model/attributes/server/server__address.json

/**
 * Server domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name. `server.address`
 *
 * Attribute Value Type: `string` {@link SERVER_ADDRESS_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link HTTP_SERVER_NAME} `http.server_name`, {@link NET_HOST_NAME} `net.host.name`
 *
 * @example "example.com"
 */
export const SERVER_ADDRESS = 'server.address';

/**
 * Type for {@link SERVER_ADDRESS} server.address
 */
export type SERVER_ADDRESS_TYPE = string;

// Path: model/attributes/server/server__port.json

/**
 * Server port number. `server.port`
 *
 * Attribute Value Type: `number` {@link SERVER_PORT_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link NET_HOST_PORT} `net.host.port`
 *
 * @example 1337
 */
export const SERVER_PORT = 'server.port';

/**
 * Type for {@link SERVER_PORT} server.port
 */
export type SERVER_PORT_TYPE = number;

// Path: model/attributes/service/service__name.json

/**
 * Logical name of the service. `service.name`
 *
 * Attribute Value Type: `string` {@link SERVICE_NAME_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "omegastar"
 */
export const SERVICE_NAME = 'service.name';

/**
 * Type for {@link SERVICE_NAME} service.name
 */
export type SERVICE_NAME_TYPE = string;

// Path: model/attributes/service/service__version.json

/**
 * The version string of the service API or implementation. The format is not defined by these conventions. `service.version`
 *
 * Attribute Value Type: `string` {@link SERVICE_VERSION_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link SENTRY_RELEASE} `sentry.release`
 *
 * @example "5.0.0"
 */
export const SERVICE_VERSION = 'service.version';

/**
 * Type for {@link SERVICE_VERSION} service.version
 */
export type SERVICE_VERSION_TYPE = string;

// Path: model/attributes/thread/thread__id.json

/**
 * Current “managed” thread ID. `thread.id`
 *
 * Attribute Value Type: `number` {@link THREAD_ID_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example 56
 */
export const THREAD_ID = 'thread.id';

/**
 * Type for {@link THREAD_ID} thread.id
 */
export type THREAD_ID_TYPE = number;

// Path: model/attributes/thread/thread__name.json

/**
 * Current thread name. `thread.name`
 *
 * Attribute Value Type: `string` {@link THREAD_NAME_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "main"
 */
export const THREAD_NAME = 'thread.name';

/**
 * Type for {@link THREAD_NAME} thread.name
 */
export type THREAD_NAME_TYPE = string;

// Path: model/attributes/transaction.json

/**
 * The sentry transaction (segment name). `transaction`
 *
 * Attribute Value Type: `string` {@link TRANSACTION_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * Aliases: {@link SENTRY_TRANSACTION} `sentry.transaction`
 *
 * @deprecated Use {@link SENTRY_TRANSACTION} (sentry.transaction) instead
 * @example "GET /"
 */
export const TRANSACTION = 'transaction';

/**
 * Type for {@link TRANSACTION} transaction
 */
export type TRANSACTION_TYPE = string;

// Path: model/attributes/type.json

/**
 * More granular type of the operation happening. `type`
 *
 * Attribute Value Type: `string` {@link TYPE_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example "fetch"
 */
export const TYPE = 'type';

/**
 * Type for {@link TYPE} type
 */
export type TYPE_TYPE = string;

// Path: model/attributes/ui/ui__component_name.json

/**
 * The name of the associated component. `ui.component_name`
 *
 * Attribute Value Type: `string` {@link UI_COMPONENT_NAME_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example "HomeButton"
 */
export const UI_COMPONENT_NAME = 'ui.component_name';

/**
 * Type for {@link UI_COMPONENT_NAME} ui.component_name
 */
export type UI_COMPONENT_NAME_TYPE = string;

// Path: model/attributes/ui/ui__contributes_to_ttfd.json

/**
 * Whether the span execution contributed to the TTFD (time to fully drawn) metric. `ui.contributes_to_ttfd`
 *
 * Attribute Value Type: `boolean` {@link UI_CONTRIBUTES_TO_TTFD_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example true
 */
export const UI_CONTRIBUTES_TO_TTFD = 'ui.contributes_to_ttfd';

/**
 * Type for {@link UI_CONTRIBUTES_TO_TTFD} ui.contributes_to_ttfd
 */
export type UI_CONTRIBUTES_TO_TTFD_TYPE = boolean;

// Path: model/attributes/ui/ui__contributes_to_ttid.json

/**
 * Whether the span execution contributed to the TTID (time to initial display) metric. `ui.contributes_to_ttid`
 *
 * Attribute Value Type: `boolean` {@link UI_CONTRIBUTES_TO_TTID_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example true
 */
export const UI_CONTRIBUTES_TO_TTID = 'ui.contributes_to_ttid';

/**
 * Type for {@link UI_CONTRIBUTES_TO_TTID} ui.contributes_to_ttid
 */
export type UI_CONTRIBUTES_TO_TTID_TYPE = boolean;

// Path: model/attributes/url/url__domain.json

/**
 * Server domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name. `url.domain`
 *
 * Attribute Value Type: `string` {@link URL_DOMAIN_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "example.com"
 */
export const URL_DOMAIN = 'url.domain';

/**
 * Type for {@link URL_DOMAIN} url.domain
 */
export type URL_DOMAIN_TYPE = string;

// Path: model/attributes/url/url__fragment.json

/**
 * The fragments present in the URI. Note that this does not contain the leading # character, while the `http.fragment` attribute does. `url.fragment`
 *
 * Attribute Value Type: `string` {@link URL_FRAGMENT_TYPE}
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "details"
 */
export const URL_FRAGMENT = 'url.fragment';

/**
 * Type for {@link URL_FRAGMENT} url.fragment
 */
export type URL_FRAGMENT_TYPE = string;

// Path: model/attributes/url/url__full.json

/**
 * The URL of the resource that was fetched. `url.full`
 *
 * Attribute Value Type: `string` {@link URL_FULL_TYPE}
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link URL} `url`, {@link HTTP_URL} `http.url`
 *
 * @example "https://example.com/test?foo=bar#buzz"
 */
export const URL_FULL = 'url.full';

/**
 * Type for {@link URL_FULL} url.full
 */
export type URL_FULL_TYPE = string;

// Path: model/attributes/url/url__path.json

/**
 * The URI path component. `url.path`
 *
 * Attribute Value Type: `string` {@link URL_PATH_TYPE}
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "/foo"
 */
export const URL_PATH = 'url.path';

/**
 * Type for {@link URL_PATH} url.path
 */
export type URL_PATH_TYPE = string;

// Path: model/attributes/url/url__path__parameter__<key>.json

/**
 * Decoded parameters extracted from a URL path. Usually added by client-side routing frameworks like vue-router. `url.path.parameter.<key>`
 *
 * Attribute Value Type: `string` {@link URL_PATH_PARAMETER_KEY_TYPE}
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: No
 *
 * Has Dynamic Suffix: true
 *
 * Aliases: {@link PARAMS_KEY} `params.<key>`
 *
 * @example "url.path.parameter.id='123'"
 */
export const URL_PATH_PARAMETER_KEY = 'url.path.parameter.<key>';

/**
 * Type for {@link URL_PATH_PARAMETER_KEY} url.path.parameter.<key>
 */
export type URL_PATH_PARAMETER_KEY_TYPE = string;

// Path: model/attributes/url/url__port.json

/**
 * Server port number. `url.port`
 *
 * Attribute Value Type: `number` {@link URL_PORT_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example 1337
 */
export const URL_PORT = 'url.port';

/**
 * Type for {@link URL_PORT} url.port
 */
export type URL_PORT_TYPE = number;

// Path: model/attributes/url/url__query.json

/**
 * The query string present in the URL. Note that this does not contain the leading ? character, while the `http.query` attribute does. `url.query`
 *
 * Attribute Value Type: `string` {@link URL_QUERY_TYPE}
 *
 * Contains PII: maybe - Query string values can contain sensitive information. Clients should attempt to scrub parameters that might contain sensitive information.
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "foo=bar&bar=baz"
 */
export const URL_QUERY = 'url.query';

/**
 * Type for {@link URL_QUERY} url.query
 */
export type URL_QUERY_TYPE = string;

// Path: model/attributes/url/url__scheme.json

/**
 * The URI scheme component identifying the used protocol. `url.scheme`
 *
 * Attribute Value Type: `string` {@link URL_SCHEME_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link HTTP_SCHEME} `http.scheme`
 *
 * @example "https"
 */
export const URL_SCHEME = 'url.scheme';

/**
 * Type for {@link URL_SCHEME} url.scheme
 */
export type URL_SCHEME_TYPE = string;

// Path: model/attributes/url/url__template.json

/**
 * The low-cardinality template of an absolute path reference. `url.template`
 *
 * Attribute Value Type: `string` {@link URL_TEMPLATE_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link HTTP_ROUTE} `http.route`
 *
 * @example "/users/:id"
 */
export const URL_TEMPLATE = 'url.template';

/**
 * Type for {@link URL_TEMPLATE} url.template
 */
export type URL_TEMPLATE_TYPE = string;

// Path: model/attributes/url.json

/**
 * The URL of the resource that was fetched. `url`
 *
 * Attribute Value Type: `string` {@link URL_TYPE}
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: No
 *
 * Aliases: {@link URL_FULL} `url.full`, {@link HTTP_URL} `http.url`
 *
 * @deprecated Use {@link URL_FULL} (url.full) instead
 * @example "https://example.com/test?foo=bar#buzz"
 */
export const URL = 'url';

/**
 * Type for {@link URL} url
 */
export type URL_TYPE = string;

// Path: model/attributes/user/user__email.json

/**
 * User email address. `user.email`
 *
 * Attribute Value Type: `string` {@link USER_EMAIL_TYPE}
 *
 * Contains PII: true
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "test@example.com"
 */
export const USER_EMAIL = 'user.email';

/**
 * Type for {@link USER_EMAIL} user.email
 */
export type USER_EMAIL_TYPE = string;

// Path: model/attributes/user/user__full_name.json

/**
 * User's full name. `user.full_name`
 *
 * Attribute Value Type: `string` {@link USER_FULL_NAME_TYPE}
 *
 * Contains PII: true
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "John Smith"
 */
export const USER_FULL_NAME = 'user.full_name';

/**
 * Type for {@link USER_FULL_NAME} user.full_name
 */
export type USER_FULL_NAME_TYPE = string;

// Path: model/attributes/user/user__geo__city.json

/**
 * Human readable city name. `user.geo.city`
 *
 * Attribute Value Type: `string` {@link USER_GEO_CITY_TYPE}
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: No
 *
 * @example "Toronto"
 */
export const USER_GEO_CITY = 'user.geo.city';

/**
 * Type for {@link USER_GEO_CITY} user.geo.city
 */
export type USER_GEO_CITY_TYPE = string;

// Path: model/attributes/user/user__geo__country_code.json

/**
 * Two-letter country code (ISO 3166-1 alpha-2). `user.geo.country_code`
 *
 * Attribute Value Type: `string` {@link USER_GEO_COUNTRY_CODE_TYPE}
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: No
 *
 * @example "CA"
 */
export const USER_GEO_COUNTRY_CODE = 'user.geo.country_code';

/**
 * Type for {@link USER_GEO_COUNTRY_CODE} user.geo.country_code
 */
export type USER_GEO_COUNTRY_CODE_TYPE = string;

// Path: model/attributes/user/user__geo__region.json

/**
 * Human readable region name or code. `user.geo.region`
 *
 * Attribute Value Type: `string` {@link USER_GEO_REGION_TYPE}
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: No
 *
 * @example "Canada"
 */
export const USER_GEO_REGION = 'user.geo.region';

/**
 * Type for {@link USER_GEO_REGION} user.geo.region
 */
export type USER_GEO_REGION_TYPE = string;

// Path: model/attributes/user/user__geo__subdivision.json

/**
 * Human readable subdivision name. `user.geo.subdivision`
 *
 * Attribute Value Type: `string` {@link USER_GEO_SUBDIVISION_TYPE}
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: No
 *
 * @example "Ontario"
 */
export const USER_GEO_SUBDIVISION = 'user.geo.subdivision';

/**
 * Type for {@link USER_GEO_SUBDIVISION} user.geo.subdivision
 */
export type USER_GEO_SUBDIVISION_TYPE = string;

// Path: model/attributes/user/user__hash.json

/**
 * Unique user hash to correlate information for a user in anonymized form. `user.hash`
 *
 * Attribute Value Type: `string` {@link USER_HASH_TYPE}
 *
 * Contains PII: true
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "8ae4c2993e0f4f3b8b2d1b1f3b5e8f4d"
 */
export const USER_HASH = 'user.hash';

/**
 * Type for {@link USER_HASH} user.hash
 */
export type USER_HASH_TYPE = string;

// Path: model/attributes/user/user__id.json

/**
 * Unique identifier of the user. `user.id`
 *
 * Attribute Value Type: `string` {@link USER_ID_TYPE}
 *
 * Contains PII: true
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "S-1-5-21-202424912787-2692429404-2351956786-1000"
 */
export const USER_ID = 'user.id';

/**
 * Type for {@link USER_ID} user.id
 */
export type USER_ID_TYPE = string;

// Path: model/attributes/user/user__name.json

/**
 * Short name or login/username of the user. `user.name`
 *
 * Attribute Value Type: `string` {@link USER_NAME_TYPE}
 *
 * Contains PII: true
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "j.smith"
 */
export const USER_NAME = 'user.name';

/**
 * Type for {@link USER_NAME} user.name
 */
export type USER_NAME_TYPE = string;

// Path: model/attributes/user/user__roles.json

/**
 * Array of user roles at the time of the event. `user.roles`
 *
 * Attribute Value Type: `Array<string>` {@link USER_ROLES_TYPE}
 *
 * Contains PII: true
 *
 * Attribute defined in OTEL: Yes
 *
 * @example ["admin","editor"]
 */
export const USER_ROLES = 'user.roles';

/**
 * Type for {@link USER_ROLES} user.roles
 */
export type USER_ROLES_TYPE = Array<string>;

// Path: model/attributes/user_agent/user_agent__original.json

/**
 * Value of the HTTP User-Agent header sent by the client. `user_agent.original`
 *
 * Attribute Value Type: `string` {@link USER_AGENT_ORIGINAL_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link HTTP_USER_AGENT} `http.user_agent`
 *
 * @example "Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Mobile/15E148 Safari/604.1"
 */
export const USER_AGENT_ORIGINAL = 'user_agent.original';

/**
 * Type for {@link USER_AGENT_ORIGINAL} user_agent.original
 */
export type USER_AGENT_ORIGINAL_TYPE = string;

export type AttributeValue = string | number | boolean | Array<string> | Array<number> | Array<boolean>;

export type Attributes = {
  [AI_COMPLETION_TOKENS_USED]?: AI_COMPLETION_TOKENS_USED_TYPE;
  [AI_INPUT_MESSAGES]?: AI_INPUT_MESSAGES_TYPE;
  [AI_MODEL_ID]?: AI_MODEL_ID_TYPE;
  [AI_PROMPT_TOKENS_USED]?: AI_PROMPT_TOKENS_USED_TYPE;
  [AI_RESPONSES]?: AI_RESPONSES_TYPE;
  [AI_STREAMING]?: AI_STREAMING_TYPE;
  [AI_TOTAL_TOKENS_USED]?: AI_TOTAL_TOKENS_USED_TYPE;
  [APP_START_TYPE]?: APP_START_TYPE_TYPE;
  [BLOCKED_MAIN_THREAD]?: BLOCKED_MAIN_THREAD_TYPE;
  [BROWSER_NAME]?: BROWSER_NAME_TYPE;
  [BROWSER_SCRIPT_INVOKER]?: BROWSER_SCRIPT_INVOKER_TYPE;
  [BROWSER_SCRIPT_INVOKER_TYPE]?: BROWSER_SCRIPT_INVOKER_TYPE_TYPE;
  [BROWSER_SCRIPT_SOURCE_CHAR_POSITION]?: BROWSER_SCRIPT_SOURCE_CHAR_POSITION_TYPE;
  [CACHE_HIT]?: CACHE_HIT_TYPE;
  [CACHE_ITEM_SIZE]?: CACHE_ITEM_SIZE_TYPE;
  [CACHE_KEY]?: CACHE_KEY_TYPE;
  [CACHE_OPERATION]?: CACHE_OPERATION_TYPE;
  [CACHE_TTL]?: CACHE_TTL_TYPE;
  [CHANNEL]?: CHANNEL_TYPE;
  [CLIENT_ADDRESS]?: CLIENT_ADDRESS_TYPE;
  [CLIENT_PORT]?: CLIENT_PORT_TYPE;
  [CLOUDFLARE_D1_DURATION]?: CLOUDFLARE_D1_DURATION_TYPE;
  [CLOUDFLARE_D1_ROWS_READ]?: CLOUDFLARE_D1_ROWS_READ_TYPE;
  [CLOUDFLARE_D1_ROWS_WRITTEN]?: CLOUDFLARE_D1_ROWS_WRITTEN_TYPE;
  [CODE_FILE_PATH]?: CODE_FILE_PATH_TYPE;
  [CODE_FUNCTION_NAME]?: CODE_FUNCTION_NAME_TYPE;
  [CODE_LINE_NUMBER]?: CODE_LINE_NUMBER_TYPE;
  [DB_COLLECTION_NAME]?: DB_COLLECTION_NAME_TYPE;
  [DB_NAMESPACE]?: DB_NAMESPACE_TYPE;
  [DB_OPERATION_NAME]?: DB_OPERATION_NAME_TYPE;
  [DB_QUERY_PARAMETER_KEY]?: DB_QUERY_PARAMETER_KEY_TYPE;
  [DB_QUERY_SUMMARY]?: DB_QUERY_SUMMARY_TYPE;
  [DB_QUERY_TEXT]?: DB_QUERY_TEXT_TYPE;
  [DB_REDIS_CONNECTION]?: DB_REDIS_CONNECTION_TYPE;
  [DB_REDIS_PARAMETERS]?: DB_REDIS_PARAMETERS_TYPE;
  [DB_SYSTEM_NAME]?: DB_SYSTEM_NAME_TYPE;
  [DB_USER]?: DB_USER_TYPE;
  [ERROR_TYPE]?: ERROR_TYPE_TYPE;
  [EXCEPTION_ESCAPED]?: EXCEPTION_ESCAPED_TYPE;
  [EXCEPTION_MESSAGE]?: EXCEPTION_MESSAGE_TYPE;
  [EXCEPTION_STACKTRACE]?: EXCEPTION_STACKTRACE_TYPE;
  [EXCEPTION_TYPE]?: EXCEPTION_TYPE_TYPE;
  [FAAS_COLDSTART]?: FAAS_COLDSTART_TYPE;
  [FAAS_CRON]?: FAAS_CRON_TYPE;
  [FAAS_TIME]?: FAAS_TIME_TYPE;
  [FAAS_TRIGGER]?: FAAS_TRIGGER_TYPE;
  [FLAG_EVALUATION_KEY]?: FLAG_EVALUATION_KEY_TYPE;
  [FRAMES_DELAY]?: FRAMES_DELAY_TYPE;
  [FRAMES_FROZEN]?: FRAMES_FROZEN_TYPE;
  [FRAMES_SLOW]?: FRAMES_SLOW_TYPE;
  [FRAMES_TOTAL]?: FRAMES_TOTAL_TYPE;
  [GEN_AI_PROMPT]?: GEN_AI_PROMPT_TYPE;
  [GEN_AI_RESPONSE_MODEL]?: GEN_AI_RESPONSE_MODEL_TYPE;
  [GEN_AI_USAGE_INPUT_TOKENS]?: GEN_AI_USAGE_INPUT_TOKENS_TYPE;
  [GEN_AI_USAGE_OUTPUT_TOKENS]?: GEN_AI_USAGE_OUTPUT_TOKENS_TYPE;
  [GRAPHQL_OPERATION_NAME]?: GRAPHQL_OPERATION_NAME_TYPE;
  [GRAPHQL_OPERATION_TYPE]?: GRAPHQL_OPERATION_TYPE_TYPE;
  [HTTP_DECODED_RESPONSE_CONTENT_LENGTH]?: HTTP_DECODED_RESPONSE_CONTENT_LENGTH_TYPE;
  [HTTP_FRAGMENT]?: HTTP_FRAGMENT_TYPE;
  [HTTP_QUERY]?: HTTP_QUERY_TYPE;
  [HTTP_REQUEST_CONNECT_START]?: HTTP_REQUEST_CONNECT_START_TYPE;
  [HTTP_REQUEST_CONNECTION_END]?: HTTP_REQUEST_CONNECTION_END_TYPE;
  [HTTP_REQUEST_DOMAIN_LOOKUP_END]?: HTTP_REQUEST_DOMAIN_LOOKUP_END_TYPE;
  [HTTP_REQUEST_DOMAIN_LOOKUP_START]?: HTTP_REQUEST_DOMAIN_LOOKUP_START_TYPE;
  [HTTP_REQUEST_FETCH_START]?: HTTP_REQUEST_FETCH_START_TYPE;
  [HTTP_REQUEST_HEADER_KEY]?: HTTP_REQUEST_HEADER_KEY_TYPE;
  [HTTP_REQUEST_METHOD]?: HTTP_REQUEST_METHOD_TYPE;
  [HTTP_REQUEST_REDIRECT_START]?: HTTP_REQUEST_REDIRECT_START_TYPE;
  [HTTP_REQUEST_REQUEST_START]?: HTTP_REQUEST_REQUEST_START_TYPE;
  [HTTP_REQUEST_RESEND_COUNT]?: HTTP_REQUEST_RESEND_COUNT_TYPE;
  [HTTP_REQUEST_RESPONSE_END]?: HTTP_REQUEST_RESPONSE_END_TYPE;
  [HTTP_REQUEST_RESPONSE_START]?: HTTP_REQUEST_RESPONSE_START_TYPE;
  [HTTP_REQUEST_SECURE_CONNECTION_START]?: HTTP_REQUEST_SECURE_CONNECTION_START_TYPE;
  [HTTP_RESPONSE_BODY_SIZE]?: HTTP_RESPONSE_BODY_SIZE_TYPE;
  [HTTP_RESPONSE_HEADER_KEY]?: HTTP_RESPONSE_HEADER_KEY_TYPE;
  [HTTP_RESPONSE_HEADER_CONTENT_LENGTH]?: HTTP_RESPONSE_HEADER_CONTENT_LENGTH_TYPE;
  [HTTP_RESPONSE_SIZE]?: HTTP_RESPONSE_SIZE_TYPE;
  [HTTP_RESPONSE_STATUS_CODE]?: HTTP_RESPONSE_STATUS_CODE_TYPE;
  [HTTP_ROUTE]?: HTTP_ROUTE_TYPE;
  [ID]?: ID_TYPE;
  [JVM_GC_ACTION]?: JVM_GC_ACTION_TYPE;
  [JVM_GC_NAME]?: JVM_GC_NAME_TYPE;
  [JVM_MEMORY_POOL_NAME]?: JVM_MEMORY_POOL_NAME_TYPE;
  [JVM_MEMORY_TYPE]?: JVM_MEMORY_TYPE_TYPE;
  [JVM_THREAD_DAEMON]?: JVM_THREAD_DAEMON_TYPE;
  [JVM_THREAD_STATE]?: JVM_THREAD_STATE_TYPE;
  [LCP_ELEMENT]?: LCP_ELEMENT_TYPE;
  [LCP_ID]?: LCP_ID_TYPE;
  [LCP_SIZE]?: LCP_SIZE_TYPE;
  [LCP_URL]?: LCP_URL_TYPE;
  [LOGGER_NAME]?: LOGGER_NAME_TYPE;
  [MESSAGING_DESTINATION_CONNECTION]?: MESSAGING_DESTINATION_CONNECTION_TYPE;
  [MESSAGING_DESTINATION_NAME]?: MESSAGING_DESTINATION_NAME_TYPE;
  [MESSAGING_MESSAGE_BODY_SIZE]?: MESSAGING_MESSAGE_BODY_SIZE_TYPE;
  [MESSAGING_MESSAGE_ENVELOPE_SIZE]?: MESSAGING_MESSAGE_ENVELOPE_SIZE_TYPE;
  [MESSAGING_MESSAGE_ID]?: MESSAGING_MESSAGE_ID_TYPE;
  [MESSAGING_MESSAGE_RECEIVE_LATENCY]?: MESSAGING_MESSAGE_RECEIVE_LATENCY_TYPE;
  [MESSAGING_MESSAGE_RETRY_COUNT]?: MESSAGING_MESSAGE_RETRY_COUNT_TYPE;
  [MESSAGING_SYSTEM]?: MESSAGING_SYSTEM_TYPE;
  [NAVIGATION_TYPE]?: NAVIGATION_TYPE_TYPE;
  [NETWORK_LOCAL_ADDRESS]?: NETWORK_LOCAL_ADDRESS_TYPE;
  [NETWORK_LOCAL_PORT]?: NETWORK_LOCAL_PORT_TYPE;
  [NETWORK_PEER_ADDRESS]?: NETWORK_PEER_ADDRESS_TYPE;
  [NETWORK_PEER_PORT]?: NETWORK_PEER_PORT_TYPE;
  [NETWORK_PROTOCOL_NAME]?: NETWORK_PROTOCOL_NAME_TYPE;
  [NETWORK_PROTOCOL_VERSION]?: NETWORK_PROTOCOL_VERSION_TYPE;
  [NETWORK_TRANSPORT]?: NETWORK_TRANSPORT_TYPE;
  [NETWORK_TYPE]?: NETWORK_TYPE_TYPE;
  [OS_BUILD_ID]?: OS_BUILD_ID_TYPE;
  [OS_DESCRIPTION]?: OS_DESCRIPTION_TYPE;
  [OS_NAME]?: OS_NAME_TYPE;
  [OS_TYPE]?: OS_TYPE_TYPE;
  [OS_VERSION]?: OS_VERSION_TYPE;
  [OTEL_SCOPE_NAME]?: OTEL_SCOPE_NAME_TYPE;
  [OTEL_SCOPE_VERSION]?: OTEL_SCOPE_VERSION_TYPE;
  [OTEL_STATUS_CODE]?: OTEL_STATUS_CODE_TYPE;
  [OTEL_STATUS_DESCRIPTION]?: OTEL_STATUS_DESCRIPTION_TYPE;
  [PARAMS_KEY]?: PARAMS_KEY_TYPE;
  [PREVIOUS_ROUTE]?: PREVIOUS_ROUTE_TYPE;
  [PROCESS_EXECUTABLE_NAME]?: PROCESS_EXECUTABLE_NAME_TYPE;
  [PROCESS_PID]?: PROCESS_PID_TYPE;
  [PROCESS_RUNTIME_DESCRIPTION]?: PROCESS_RUNTIME_DESCRIPTION_TYPE;
  [PROCESS_RUNTIME_NAME]?: PROCESS_RUNTIME_NAME_TYPE;
  [PROCESS_RUNTIME_VERSION]?: PROCESS_RUNTIME_VERSION_TYPE;
  [REMIX_ACTION_FORM_DATA_KEY]?: REMIX_ACTION_FORM_DATA_KEY_TYPE;
  [RESOURCE_RENDER_BLOCKING_STATUS]?: RESOURCE_RENDER_BLOCKING_STATUS_TYPE;
  [RPC_GRPC_STATUS_CODE]?: RPC_GRPC_STATUS_CODE_TYPE;
  [RPC_SERVICE]?: RPC_SERVICE_TYPE;
  [SENTRY_CANCELLATION_REASON]?: SENTRY_CANCELLATION_REASON_TYPE;
  [SENTRY_DIST]?: SENTRY_DIST_TYPE;
  [SENTRY_ENVIRONMENT]?: SENTRY_ENVIRONMENT_TYPE;
  [SENTRY_EXCLUSIVE_TIME]?: SENTRY_EXCLUSIVE_TIME_TYPE;
  [SENTRY_HTTP_PREFETCH]?: SENTRY_HTTP_PREFETCH_TYPE;
  [SENTRY_IDLE_SPAN_FINISH_REASON]?: SENTRY_IDLE_SPAN_FINISH_REASON_TYPE;
  [SENTRY_MODULE_KEY]?: SENTRY_MODULE_KEY_TYPE;
  [SENTRY_OP]?: SENTRY_OP_TYPE;
  [SENTRY_ORIGIN]?: SENTRY_ORIGIN_TYPE;
  [SENTRY_PLATFORM]?: SENTRY_PLATFORM_TYPE;
  [SENTRY_PROFILE_ID]?: SENTRY_PROFILE_ID_TYPE;
  [SENTRY_RELEASE]?: SENTRY_RELEASE_TYPE;
  [SENTRY_REPLAY_ID]?: SENTRY_REPLAY_ID_TYPE;
  [SENTRY_SAMPLE_RATE]?: SENTRY_SAMPLE_RATE_TYPE;
  [SENTRY_SDK_INTEGRATIONS]?: SENTRY_SDK_INTEGRATIONS_TYPE;
  [SENTRY_SDK_NAME]?: SENTRY_SDK_NAME_TYPE;
  [SENTRY_SDK_VERSION]?: SENTRY_SDK_VERSION_TYPE;
  [SENTRY_SPAN_SOURCE]?: SENTRY_SPAN_SOURCE_TYPE;
  [SENTRY_TRANSACTION]?: SENTRY_TRANSACTION_TYPE;
  [SERVER_ADDRESS]?: SERVER_ADDRESS_TYPE;
  [SERVER_PORT]?: SERVER_PORT_TYPE;
  [SERVICE_NAME]?: SERVICE_NAME_TYPE;
  [SERVICE_VERSION]?: SERVICE_VERSION_TYPE;
  [THREAD_ID]?: THREAD_ID_TYPE;
  [THREAD_NAME]?: THREAD_NAME_TYPE;
  [TYPE]?: TYPE_TYPE;
  [UI_COMPONENT_NAME]?: UI_COMPONENT_NAME_TYPE;
  [UI_CONTRIBUTES_TO_TTFD]?: UI_CONTRIBUTES_TO_TTFD_TYPE;
  [UI_CONTRIBUTES_TO_TTID]?: UI_CONTRIBUTES_TO_TTID_TYPE;
  [URL_DOMAIN]?: URL_DOMAIN_TYPE;
  [URL_FRAGMENT]?: URL_FRAGMENT_TYPE;
  [URL_FULL]?: URL_FULL_TYPE;
  [URL_PATH]?: URL_PATH_TYPE;
  [URL_PATH_PARAMETER_KEY]?: URL_PATH_PARAMETER_KEY_TYPE;
  [URL_PORT]?: URL_PORT_TYPE;
  [URL_QUERY]?: URL_QUERY_TYPE;
  [URL_SCHEME]?: URL_SCHEME_TYPE;
  [URL_TEMPLATE]?: URL_TEMPLATE_TYPE;
  [USER_EMAIL]?: USER_EMAIL_TYPE;
  [USER_FULL_NAME]?: USER_FULL_NAME_TYPE;
  [USER_GEO_CITY]?: USER_GEO_CITY_TYPE;
  [USER_GEO_COUNTRY_CODE]?: USER_GEO_COUNTRY_CODE_TYPE;
  [USER_GEO_REGION]?: USER_GEO_REGION_TYPE;
  [USER_GEO_SUBDIVISION]?: USER_GEO_SUBDIVISION_TYPE;
  [USER_HASH]?: USER_HASH_TYPE;
  [USER_ID]?: USER_ID_TYPE;
  [USER_NAME]?: USER_NAME_TYPE;
  [USER_ROLES]?: USER_ROLES_TYPE;
  [USER_AGENT_ORIGINAL]?: USER_AGENT_ORIGINAL_TYPE;
} & Record<string, AttributeValue | undefined>;

export type FullAttributes = {
  [AI_COMPLETION_TOKENS_USED]?: AI_COMPLETION_TOKENS_USED_TYPE;
  [AI_INPUT_MESSAGES]?: AI_INPUT_MESSAGES_TYPE;
  [AI_MODEL_ID]?: AI_MODEL_ID_TYPE;
  [AI_PROMPT_TOKENS_USED]?: AI_PROMPT_TOKENS_USED_TYPE;
  [AI_RESPONSES]?: AI_RESPONSES_TYPE;
  [AI_STREAMING]?: AI_STREAMING_TYPE;
  [AI_TOTAL_TOKENS_USED]?: AI_TOTAL_TOKENS_USED_TYPE;
  [APP_START_TYPE]?: APP_START_TYPE_TYPE;
  [BLOCKED_MAIN_THREAD]?: BLOCKED_MAIN_THREAD_TYPE;
  [BROWSER_NAME]?: BROWSER_NAME_TYPE;
  [BROWSER_SCRIPT_INVOKER]?: BROWSER_SCRIPT_INVOKER_TYPE;
  [BROWSER_SCRIPT_INVOKER_TYPE]?: BROWSER_SCRIPT_INVOKER_TYPE_TYPE;
  [BROWSER_SCRIPT_SOURCE_CHAR_POSITION]?: BROWSER_SCRIPT_SOURCE_CHAR_POSITION_TYPE;
  [CACHE_HIT]?: CACHE_HIT_TYPE;
  [CACHE_ITEM_SIZE]?: CACHE_ITEM_SIZE_TYPE;
  [CACHE_KEY]?: CACHE_KEY_TYPE;
  [CACHE_OPERATION]?: CACHE_OPERATION_TYPE;
  [CACHE_TTL]?: CACHE_TTL_TYPE;
  [CHANNEL]?: CHANNEL_TYPE;
  [CLIENT_ADDRESS]?: CLIENT_ADDRESS_TYPE;
  [CLIENT_PORT]?: CLIENT_PORT_TYPE;
  [CLOUDFLARE_D1_DURATION]?: CLOUDFLARE_D1_DURATION_TYPE;
  [CLOUDFLARE_D1_ROWS_READ]?: CLOUDFLARE_D1_ROWS_READ_TYPE;
  [CLOUDFLARE_D1_ROWS_WRITTEN]?: CLOUDFLARE_D1_ROWS_WRITTEN_TYPE;
  [CODE_FILE_PATH]?: CODE_FILE_PATH_TYPE;
  [CODE_FILEPATH]?: CODE_FILEPATH_TYPE;
  [CODE_FUNCTION]?: CODE_FUNCTION_TYPE;
  [CODE_FUNCTION_NAME]?: CODE_FUNCTION_NAME_TYPE;
  [CODE_LINE_NUMBER]?: CODE_LINE_NUMBER_TYPE;
  [CODE_LINENO]?: CODE_LINENO_TYPE;
  [CODE_NAMESPACE]?: CODE_NAMESPACE_TYPE;
  [DB_COLLECTION_NAME]?: DB_COLLECTION_NAME_TYPE;
  [DB_NAME]?: DB_NAME_TYPE;
  [DB_NAMESPACE]?: DB_NAMESPACE_TYPE;
  [DB_OPERATION]?: DB_OPERATION_TYPE;
  [DB_OPERATION_NAME]?: DB_OPERATION_NAME_TYPE;
  [DB_QUERY_PARAMETER_KEY]?: DB_QUERY_PARAMETER_KEY_TYPE;
  [DB_QUERY_SUMMARY]?: DB_QUERY_SUMMARY_TYPE;
  [DB_QUERY_TEXT]?: DB_QUERY_TEXT_TYPE;
  [DB_REDIS_CONNECTION]?: DB_REDIS_CONNECTION_TYPE;
  [DB_REDIS_PARAMETERS]?: DB_REDIS_PARAMETERS_TYPE;
  [DB_SQL_BINDINGS]?: DB_SQL_BINDINGS_TYPE;
  [DB_STATEMENT]?: DB_STATEMENT_TYPE;
  [DB_SYSTEM]?: DB_SYSTEM_TYPE;
  [DB_SYSTEM_NAME]?: DB_SYSTEM_NAME_TYPE;
  [DB_USER]?: DB_USER_TYPE;
  [ENVIRONMENT]?: ENVIRONMENT_TYPE;
  [ERROR_TYPE]?: ERROR_TYPE_TYPE;
  [EXCEPTION_ESCAPED]?: EXCEPTION_ESCAPED_TYPE;
  [EXCEPTION_MESSAGE]?: EXCEPTION_MESSAGE_TYPE;
  [EXCEPTION_STACKTRACE]?: EXCEPTION_STACKTRACE_TYPE;
  [EXCEPTION_TYPE]?: EXCEPTION_TYPE_TYPE;
  [FAAS_COLDSTART]?: FAAS_COLDSTART_TYPE;
  [FAAS_CRON]?: FAAS_CRON_TYPE;
  [FAAS_TIME]?: FAAS_TIME_TYPE;
  [FAAS_TRIGGER]?: FAAS_TRIGGER_TYPE;
  [FLAG_EVALUATION_KEY]?: FLAG_EVALUATION_KEY_TYPE;
  [FRAMES_DELAY]?: FRAMES_DELAY_TYPE;
  [FRAMES_FROZEN]?: FRAMES_FROZEN_TYPE;
  [FRAMES_SLOW]?: FRAMES_SLOW_TYPE;
  [FRAMES_TOTAL]?: FRAMES_TOTAL_TYPE;
  [FS_ERROR]?: FS_ERROR_TYPE;
  [GEN_AI_PROMPT]?: GEN_AI_PROMPT_TYPE;
  [GEN_AI_RESPONSE_MODEL]?: GEN_AI_RESPONSE_MODEL_TYPE;
  [GEN_AI_USAGE_COMPLETION_TOKENS]?: GEN_AI_USAGE_COMPLETION_TOKENS_TYPE;
  [GEN_AI_USAGE_INPUT_TOKENS]?: GEN_AI_USAGE_INPUT_TOKENS_TYPE;
  [GEN_AI_USAGE_OUTPUT_TOKENS]?: GEN_AI_USAGE_OUTPUT_TOKENS_TYPE;
  [GEN_AI_USAGE_PROMPT_TOKENS]?: GEN_AI_USAGE_PROMPT_TOKENS_TYPE;
  [GRAPHQL_OPERATION_NAME]?: GRAPHQL_OPERATION_NAME_TYPE;
  [GRAPHQL_OPERATION_TYPE]?: GRAPHQL_OPERATION_TYPE_TYPE;
  [HTTP_CLIENT_IP]?: HTTP_CLIENT_IP_TYPE;
  [HTTP_DECODED_RESPONSE_CONTENT_LENGTH]?: HTTP_DECODED_RESPONSE_CONTENT_LENGTH_TYPE;
  [HTTP_FLAVOR]?: HTTP_FLAVOR_TYPE;
  [HTTP_FRAGMENT]?: HTTP_FRAGMENT_TYPE;
  [HTTP_HOST]?: HTTP_HOST_TYPE;
  [HTTP_METHOD]?: HTTP_METHOD_TYPE;
  [HTTP_QUERY]?: HTTP_QUERY_TYPE;
  [HTTP_REQUEST_CONNECT_START]?: HTTP_REQUEST_CONNECT_START_TYPE;
  [HTTP_REQUEST_CONNECTION_END]?: HTTP_REQUEST_CONNECTION_END_TYPE;
  [HTTP_REQUEST_DOMAIN_LOOKUP_END]?: HTTP_REQUEST_DOMAIN_LOOKUP_END_TYPE;
  [HTTP_REQUEST_DOMAIN_LOOKUP_START]?: HTTP_REQUEST_DOMAIN_LOOKUP_START_TYPE;
  [HTTP_REQUEST_FETCH_START]?: HTTP_REQUEST_FETCH_START_TYPE;
  [HTTP_REQUEST_HEADER_KEY]?: HTTP_REQUEST_HEADER_KEY_TYPE;
  [HTTP_REQUEST_METHOD]?: HTTP_REQUEST_METHOD_TYPE;
  [HTTP_REQUEST_REDIRECT_START]?: HTTP_REQUEST_REDIRECT_START_TYPE;
  [HTTP_REQUEST_REQUEST_START]?: HTTP_REQUEST_REQUEST_START_TYPE;
  [HTTP_REQUEST_RESEND_COUNT]?: HTTP_REQUEST_RESEND_COUNT_TYPE;
  [HTTP_REQUEST_RESPONSE_END]?: HTTP_REQUEST_RESPONSE_END_TYPE;
  [HTTP_REQUEST_RESPONSE_START]?: HTTP_REQUEST_RESPONSE_START_TYPE;
  [HTTP_REQUEST_SECURE_CONNECTION_START]?: HTTP_REQUEST_SECURE_CONNECTION_START_TYPE;
  [HTTP_RESPONSE_BODY_SIZE]?: HTTP_RESPONSE_BODY_SIZE_TYPE;
  [HTTP_RESPONSE_HEADER_KEY]?: HTTP_RESPONSE_HEADER_KEY_TYPE;
  [HTTP_RESPONSE_HEADER_CONTENT_LENGTH]?: HTTP_RESPONSE_HEADER_CONTENT_LENGTH_TYPE;
  [HTTP_RESPONSE_SIZE]?: HTTP_RESPONSE_SIZE_TYPE;
  [HTTP_RESPONSE_STATUS_CODE]?: HTTP_RESPONSE_STATUS_CODE_TYPE;
  [HTTP_RESPONSE_CONTENT_LENGTH]?: HTTP_RESPONSE_CONTENT_LENGTH_TYPE;
  [HTTP_RESPONSE_TRANSFER_SIZE]?: HTTP_RESPONSE_TRANSFER_SIZE_TYPE;
  [HTTP_ROUTE]?: HTTP_ROUTE_TYPE;
  [HTTP_SCHEME]?: HTTP_SCHEME_TYPE;
  [HTTP_SERVER_NAME]?: HTTP_SERVER_NAME_TYPE;
  [HTTP_STATUS_CODE]?: HTTP_STATUS_CODE_TYPE;
  [HTTP_TARGET]?: HTTP_TARGET_TYPE;
  [HTTP_URL]?: HTTP_URL_TYPE;
  [HTTP_USER_AGENT]?: HTTP_USER_AGENT_TYPE;
  [ID]?: ID_TYPE;
  [JVM_GC_ACTION]?: JVM_GC_ACTION_TYPE;
  [JVM_GC_NAME]?: JVM_GC_NAME_TYPE;
  [JVM_MEMORY_POOL_NAME]?: JVM_MEMORY_POOL_NAME_TYPE;
  [JVM_MEMORY_TYPE]?: JVM_MEMORY_TYPE_TYPE;
  [JVM_THREAD_DAEMON]?: JVM_THREAD_DAEMON_TYPE;
  [JVM_THREAD_STATE]?: JVM_THREAD_STATE_TYPE;
  [LCP_ELEMENT]?: LCP_ELEMENT_TYPE;
  [LCP_ID]?: LCP_ID_TYPE;
  [LCP_SIZE]?: LCP_SIZE_TYPE;
  [LCP_URL]?: LCP_URL_TYPE;
  [LOGGER_NAME]?: LOGGER_NAME_TYPE;
  [MESSAGING_DESTINATION_CONNECTION]?: MESSAGING_DESTINATION_CONNECTION_TYPE;
  [MESSAGING_DESTINATION_NAME]?: MESSAGING_DESTINATION_NAME_TYPE;
  [MESSAGING_MESSAGE_BODY_SIZE]?: MESSAGING_MESSAGE_BODY_SIZE_TYPE;
  [MESSAGING_MESSAGE_ENVELOPE_SIZE]?: MESSAGING_MESSAGE_ENVELOPE_SIZE_TYPE;
  [MESSAGING_MESSAGE_ID]?: MESSAGING_MESSAGE_ID_TYPE;
  [MESSAGING_MESSAGE_RECEIVE_LATENCY]?: MESSAGING_MESSAGE_RECEIVE_LATENCY_TYPE;
  [MESSAGING_MESSAGE_RETRY_COUNT]?: MESSAGING_MESSAGE_RETRY_COUNT_TYPE;
  [MESSAGING_SYSTEM]?: MESSAGING_SYSTEM_TYPE;
  [METHOD]?: METHOD_TYPE;
  [NAVIGATION_TYPE]?: NAVIGATION_TYPE_TYPE;
  [NET_HOST_IP]?: NET_HOST_IP_TYPE;
  [NET_HOST_NAME]?: NET_HOST_NAME_TYPE;
  [NET_HOST_PORT]?: NET_HOST_PORT_TYPE;
  [NET_PEER_IP]?: NET_PEER_IP_TYPE;
  [NET_PEER_NAME]?: NET_PEER_NAME_TYPE;
  [NET_PEER_PORT]?: NET_PEER_PORT_TYPE;
  [NET_PROTOCOL_NAME]?: NET_PROTOCOL_NAME_TYPE;
  [NET_PROTOCOL_VERSION]?: NET_PROTOCOL_VERSION_TYPE;
  [NET_SOCK_FAMILY]?: NET_SOCK_FAMILY_TYPE;
  [NET_SOCK_HOST_ADDR]?: NET_SOCK_HOST_ADDR_TYPE;
  [NET_SOCK_HOST_PORT]?: NET_SOCK_HOST_PORT_TYPE;
  [NET_SOCK_PEER_ADDR]?: NET_SOCK_PEER_ADDR_TYPE;
  [NET_SOCK_PEER_NAME]?: NET_SOCK_PEER_NAME_TYPE;
  [NET_SOCK_PEER_PORT]?: NET_SOCK_PEER_PORT_TYPE;
  [NET_TRANSPORT]?: NET_TRANSPORT_TYPE;
  [NETWORK_LOCAL_ADDRESS]?: NETWORK_LOCAL_ADDRESS_TYPE;
  [NETWORK_LOCAL_PORT]?: NETWORK_LOCAL_PORT_TYPE;
  [NETWORK_PEER_ADDRESS]?: NETWORK_PEER_ADDRESS_TYPE;
  [NETWORK_PEER_PORT]?: NETWORK_PEER_PORT_TYPE;
  [NETWORK_PROTOCOL_NAME]?: NETWORK_PROTOCOL_NAME_TYPE;
  [NETWORK_PROTOCOL_VERSION]?: NETWORK_PROTOCOL_VERSION_TYPE;
  [NETWORK_TRANSPORT]?: NETWORK_TRANSPORT_TYPE;
  [NETWORK_TYPE]?: NETWORK_TYPE_TYPE;
  [OS_BUILD_ID]?: OS_BUILD_ID_TYPE;
  [OS_DESCRIPTION]?: OS_DESCRIPTION_TYPE;
  [OS_NAME]?: OS_NAME_TYPE;
  [OS_TYPE]?: OS_TYPE_TYPE;
  [OS_VERSION]?: OS_VERSION_TYPE;
  [OTEL_SCOPE_NAME]?: OTEL_SCOPE_NAME_TYPE;
  [OTEL_SCOPE_VERSION]?: OTEL_SCOPE_VERSION_TYPE;
  [OTEL_STATUS_CODE]?: OTEL_STATUS_CODE_TYPE;
  [OTEL_STATUS_DESCRIPTION]?: OTEL_STATUS_DESCRIPTION_TYPE;
  [PARAMS_KEY]?: PARAMS_KEY_TYPE;
  [PREVIOUS_ROUTE]?: PREVIOUS_ROUTE_TYPE;
  [PROCESS_EXECUTABLE_NAME]?: PROCESS_EXECUTABLE_NAME_TYPE;
  [PROCESS_PID]?: PROCESS_PID_TYPE;
  [PROCESS_RUNTIME_DESCRIPTION]?: PROCESS_RUNTIME_DESCRIPTION_TYPE;
  [PROCESS_RUNTIME_NAME]?: PROCESS_RUNTIME_NAME_TYPE;
  [PROCESS_RUNTIME_VERSION]?: PROCESS_RUNTIME_VERSION_TYPE;
  [PROFILE_ID]?: PROFILE_ID_TYPE;
  [QUERY_KEY]?: QUERY_KEY_TYPE;
  [RELEASE]?: RELEASE_TYPE;
  [REMIX_ACTION_FORM_DATA_KEY]?: REMIX_ACTION_FORM_DATA_KEY_TYPE;
  [REPLAY_ID]?: REPLAY_ID_TYPE;
  [RESOURCE_RENDER_BLOCKING_STATUS]?: RESOURCE_RENDER_BLOCKING_STATUS_TYPE;
  [ROUTE]?: ROUTE_TYPE;
  [RPC_GRPC_STATUS_CODE]?: RPC_GRPC_STATUS_CODE_TYPE;
  [RPC_SERVICE]?: RPC_SERVICE_TYPE;
  [SENTRY_CANCELLATION_REASON]?: SENTRY_CANCELLATION_REASON_TYPE;
  [SENTRY_DIST]?: SENTRY_DIST_TYPE;
  [SENTRY_ENVIRONMENT]?: SENTRY_ENVIRONMENT_TYPE;
  [SENTRY_EXCLUSIVE_TIME]?: SENTRY_EXCLUSIVE_TIME_TYPE;
  [SENTRY_HTTP_PREFETCH]?: SENTRY_HTTP_PREFETCH_TYPE;
  [SENTRY_IDLE_SPAN_FINISH_REASON]?: SENTRY_IDLE_SPAN_FINISH_REASON_TYPE;
  [SENTRY_MODULE_KEY]?: SENTRY_MODULE_KEY_TYPE;
  [SENTRY_OP]?: SENTRY_OP_TYPE;
  [SENTRY_ORIGIN]?: SENTRY_ORIGIN_TYPE;
  [SENTRY_PLATFORM]?: SENTRY_PLATFORM_TYPE;
  [SENTRY_PROFILE_ID]?: SENTRY_PROFILE_ID_TYPE;
  [SENTRY_RELEASE]?: SENTRY_RELEASE_TYPE;
  [SENTRY_REPLAY_ID]?: SENTRY_REPLAY_ID_TYPE;
  [SENTRY_SAMPLE_RATE]?: SENTRY_SAMPLE_RATE_TYPE;
  [SENTRY_SDK_INTEGRATIONS]?: SENTRY_SDK_INTEGRATIONS_TYPE;
  [SENTRY_SDK_NAME]?: SENTRY_SDK_NAME_TYPE;
  [SENTRY_SDK_VERSION]?: SENTRY_SDK_VERSION_TYPE;
  [SENTRY_SPAN_SOURCE]?: SENTRY_SPAN_SOURCE_TYPE;
  [SENTRY_TRANSACTION]?: SENTRY_TRANSACTION_TYPE;
  [SERVER_ADDRESS]?: SERVER_ADDRESS_TYPE;
  [SERVER_PORT]?: SERVER_PORT_TYPE;
  [SERVICE_NAME]?: SERVICE_NAME_TYPE;
  [SERVICE_VERSION]?: SERVICE_VERSION_TYPE;
  [THREAD_ID]?: THREAD_ID_TYPE;
  [THREAD_NAME]?: THREAD_NAME_TYPE;
  [TRANSACTION]?: TRANSACTION_TYPE;
  [TYPE]?: TYPE_TYPE;
  [UI_COMPONENT_NAME]?: UI_COMPONENT_NAME_TYPE;
  [UI_CONTRIBUTES_TO_TTFD]?: UI_CONTRIBUTES_TO_TTFD_TYPE;
  [UI_CONTRIBUTES_TO_TTID]?: UI_CONTRIBUTES_TO_TTID_TYPE;
  [URL_DOMAIN]?: URL_DOMAIN_TYPE;
  [URL_FRAGMENT]?: URL_FRAGMENT_TYPE;
  [URL_FULL]?: URL_FULL_TYPE;
  [URL_PATH]?: URL_PATH_TYPE;
  [URL_PATH_PARAMETER_KEY]?: URL_PATH_PARAMETER_KEY_TYPE;
  [URL_PORT]?: URL_PORT_TYPE;
  [URL_QUERY]?: URL_QUERY_TYPE;
  [URL_SCHEME]?: URL_SCHEME_TYPE;
  [URL_TEMPLATE]?: URL_TEMPLATE_TYPE;
  [URL]?: URL_TYPE;
  [USER_EMAIL]?: USER_EMAIL_TYPE;
  [USER_FULL_NAME]?: USER_FULL_NAME_TYPE;
  [USER_GEO_CITY]?: USER_GEO_CITY_TYPE;
  [USER_GEO_COUNTRY_CODE]?: USER_GEO_COUNTRY_CODE_TYPE;
  [USER_GEO_REGION]?: USER_GEO_REGION_TYPE;
  [USER_GEO_SUBDIVISION]?: USER_GEO_SUBDIVISION_TYPE;
  [USER_HASH]?: USER_HASH_TYPE;
  [USER_ID]?: USER_ID_TYPE;
  [USER_NAME]?: USER_NAME_TYPE;
  [USER_ROLES]?: USER_ROLES_TYPE;
  [USER_AGENT_ORIGINAL]?: USER_AGENT_ORIGINAL_TYPE;
} & Record<string, AttributeValue | undefined>;
