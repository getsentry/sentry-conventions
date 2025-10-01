<?php

declare(strict_types=1);

namespace Sentry\Conventions;

// This is an auto-generated file. Do not edit!

/**
 * A collection of attribute names with their constants, as defined in the Sentry Semantic Conventions registry.
 */
final class Attributes
{
    /**
     * References or sources cited by the AI model in its response.
     *
     * Attribute: `ai.citations`
     *
     * Type: array<string>
     *
     * Contains PII: true
     *
     * Defined in OTEL: No
     *
     * @example ["Citation 1", "Citation 2"]
     */
    public const AI_CITATIONS = 'ai.citations';

    /**
     * The number of tokens used to respond to the message.
     *
     * Attribute: `ai.completion_tokens.used`
     *
     * Type: int
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * Aliases: gen_ai.usage.output_tokens, gen_ai.usage.completion_tokens
     *
     * @deprecated Use gen_ai.usage.output_tokens instead
     *
     * @example 10
     */
    public const AI_COMPLETION_TOKENS_USED = 'ai.completion_tokens.used';

    /**
     * Documents or content chunks used as context for the AI model.
     *
     * Attribute: `ai.documents`
     *
     * Type: array<string>
     *
     * Contains PII: true
     *
     * Defined in OTEL: No
     *
     * @example ["document1.txt", "document2.pdf"]
     */
    public const AI_DOCUMENTS = 'ai.documents';

    /**
     * The reason why the model stopped generating.
     *
     * Attribute: `ai.finish_reason`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: No
     *
     * Aliases: gen_ai.response.finish_reasons
     *
     * @deprecated Use gen_ai.response.finish_reason instead
     *
     * @example "COMPLETE"
     */
    public const AI_FINISH_REASON = 'ai.finish_reason';

    /**
     * Used to reduce repetitiveness of generated tokens. The higher the value, the stronger a penalty is applied to previously present tokens, proportional to how many times they have already appeared in the prompt or prior generation.
     *
     * Attribute: `ai.frequency_penalty`
     *
     * Type: float
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * Aliases: gen_ai.request.frequency_penalty
     *
     * @deprecated Use gen_ai.request.frequency_penalty instead
     *
     * @example 0.5
     */
    public const AI_FREQUENCY_PENALTY = 'ai.frequency_penalty';

    /**
     * For an AI model call, the function that was called. This is deprecated for OpenAI, and replaced by tool_calls
     *
     * Attribute: `ai.function_call`
     *
     * Type: string
     *
     * Contains PII: true
     *
     * Defined in OTEL: No
     *
     * Aliases: gen_ai.tool.name
     *
     * @deprecated Use gen_ai.tool.name instead
     *
     * @example "function_name"
     */
    public const AI_FUNCTION_CALL = 'ai.function_call';

    /**
     * Unique identifier for the completion.
     *
     * Attribute: `ai.generation_id`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: No
     *
     * Aliases: gen_ai.response.id
     *
     * @deprecated Use gen_ai.response.id instead
     *
     * @example "gen_123abc"
     */
    public const AI_GENERATION_ID = 'ai.generation_id';

    /**
     * The input messages sent to the model
     *
     * Attribute: `ai.input_messages`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: No
     *
     * Aliases: gen_ai.request.messages
     *
     * @deprecated Use gen_ai.request.messages instead
     *
     * @example "[{\"role\": \"user\", \"message\": \"hello\"}]"
     */
    public const AI_INPUT_MESSAGES = 'ai.input_messages';

    /**
     * Boolean indicating if the model needs to perform a search.
     *
     * Attribute: `ai.is_search_required`
     *
     * Type: bool
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @example false
     */
    public const AI_IS_SEARCH_REQUIRED = 'ai.is_search_required';

    /**
     * Extra metadata passed to an AI pipeline step.
     *
     * Attribute: `ai.metadata`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: No
     *
     * @example "{\"user_id\": 123, \"session_id\": \"abc123\"}"
     */
    public const AI_METADATA = 'ai.metadata';

    /**
     * The provider of the model.
     *
     * Attribute: `ai.model.provider`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: No
     *
     * Aliases: gen_ai.system
     *
     * @deprecated Use gen_ai.system instead
     *
     * @example "openai"
     */
    public const AI_MODEL_PROVIDER = 'ai.model.provider';

    /**
     * The vendor-specific ID of the model used.
     *
     * Attribute: `ai.model_id`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: No
     *
     * Aliases: gen_ai.response.model
     *
     * @deprecated Use gen_ai.response.model instead
     *
     * @example "gpt-4"
     */
    public const AI_MODEL_ID = 'ai.model_id';

    /**
     * The name of the AI pipeline.
     *
     * Attribute: `ai.pipeline.name`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: No
     *
     * Aliases: gen_ai.pipeline.name
     *
     * @deprecated Use gen_ai.pipeline.name instead
     *
     * @example "Autofix Pipeline"
     */
    public const AI_PIPELINE_NAME = 'ai.pipeline.name';

    /**
     * For an AI model call, the preamble parameter. Preambles are a part of the prompt used to adjust the model's overall behavior and conversation style.
     *
     * Attribute: `ai.preamble`
     *
     * Type: string
     *
     * Contains PII: true
     *
     * Defined in OTEL: No
     *
     * @example "You are now a clown."
     */
    public const AI_PREAMBLE = 'ai.preamble';

    /**
     * Used to reduce repetitiveness of generated tokens. Similar to frequency_penalty, except that this penalty is applied equally to all tokens that have already appeared, regardless of their exact frequencies.
     *
     * Attribute: `ai.presence_penalty`
     *
     * Type: float
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * Aliases: gen_ai.request.presence_penalty
     *
     * @deprecated Use gen_ai.request.presence_penalty instead
     *
     * @example 0.5
     */
    public const AI_PRESENCE_PENALTY = 'ai.presence_penalty';

    /**
     * The number of tokens used to process just the prompt.
     *
     * Attribute: `ai.prompt_tokens.used`
     *
     * Type: int
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * Aliases: gen_ai.usage.prompt_tokens, gen_ai.usage.input_tokens
     *
     * @deprecated Use gen_ai.usage.input_tokens instead
     *
     * @example 20
     */
    public const AI_PROMPT_TOKENS_USED = 'ai.prompt_tokens.used';

    /**
     * When enabled, the user’s prompt will be sent to the model without any pre-processing.
     *
     * Attribute: `ai.raw_prompting`
     *
     * Type: bool
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @example true
     */
    public const AI_RAW_PROMPTING = 'ai.raw_prompting';

    /**
     * For an AI model call, the format of the response
     *
     * Attribute: `ai.response_format`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: No
     *
     * @example "json_object"
     */
    public const AI_RESPONSE_FORMAT = 'ai.response_format';

    /**
     * The response messages sent back by the AI model.
     *
     * Attribute: `ai.responses`
     *
     * Type: array<string>
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: No
     *
     * @deprecated Use gen_ai.response.text instead
     *
     * @example ["hello", "world"]
     */
    public const AI_RESPONSES = 'ai.responses';

    /**
     * Queries used to search for relevant context or documents.
     *
     * Attribute: `ai.search_queries`
     *
     * Type: array<string>
     *
     * Contains PII: true
     *
     * Defined in OTEL: No
     *
     * @example ["climate change effects", "renewable energy"]
     */
    public const AI_SEARCH_QUERIES = 'ai.search_queries';

    /**
     * Results returned from search queries for context.
     *
     * Attribute: `ai.search_results`
     *
     * Type: array<string>
     *
     * Contains PII: true
     *
     * Defined in OTEL: No
     *
     * @example ["search_result_1, search_result_2"]
     */
    public const AI_SEARCH_RESULTS = 'ai.search_results';

    /**
     * The seed, ideally models given the same seed and same other parameters will produce the exact same output.
     *
     * Attribute: `ai.seed`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: No
     *
     * Aliases: gen_ai.request.seed
     *
     * @deprecated Use gen_ai.request.seed instead
     *
     * @example "1234567890"
     */
    public const AI_SEED = 'ai.seed';

    /**
     * Whether the request was streamed back.
     *
     * Attribute: `ai.streaming`
     *
     * Type: bool
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * Aliases: gen_ai.response.streaming
     *
     * @deprecated Use gen_ai.response.streaming instead
     *
     * @example true
     */
    public const AI_STREAMING = 'ai.streaming';

    /**
     * Tags that describe an AI pipeline step.
     *
     * Attribute: `ai.tags`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: No
     *
     * @example "{\"executed_function\": \"add_integers\"}"
     */
    public const AI_TAGS = 'ai.tags';

    /**
     * For an AI model call, the temperature parameter. Temperature essentially means how random the output will be.
     *
     * Attribute: `ai.temperature`
     *
     * Type: float
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * Aliases: gen_ai.request.temperature
     *
     * @deprecated Use gen_ai.request.temperature instead
     *
     * @example 0.1
     */
    public const AI_TEMPERATURE = 'ai.temperature';

    /**
     * Raw text inputs provided to the model.
     *
     * Attribute: `ai.texts`
     *
     * Type: array<string>
     *
     * Contains PII: true
     *
     * Defined in OTEL: No
     *
     * @example ["Hello, how are you?", "What is the capital of France?"]
     */
    public const AI_TEXTS = 'ai.texts';

    /**
     * For an AI model call, the tool calls that were made.
     *
     * Attribute: `ai.tool_calls`
     *
     * Type: array<string>
     *
     * Contains PII: true
     *
     * Defined in OTEL: No
     *
     * @deprecated Use gen_ai.response.tool_calls instead
     *
     * @example ["tool_call_1", "tool_call_2"]
     */
    public const AI_TOOL_CALLS = 'ai.tool_calls';

    /**
     * For an AI model call, the functions that are available
     *
     * Attribute: `ai.tools`
     *
     * Type: array<string>
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: No
     *
     * @deprecated Use gen_ai.request.available_tools instead
     *
     * @example ["function_1", "function_2"]
     */
    public const AI_TOOLS = 'ai.tools';

    /**
     * Limits the model to only consider the K most likely next tokens, where K is an integer (e.g., top_k=20 means only the 20 highest probability tokens are considered).
     *
     * Attribute: `ai.top_k`
     *
     * Type: int
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * Aliases: gen_ai.request.top_k
     *
     * @deprecated Use gen_ai.request.top_k instead
     *
     * @example 35
     */
    public const AI_TOP_K = 'ai.top_k';

    /**
     * Limits the model to only consider tokens whose cumulative probability mass adds up to p, where p is a float between 0 and 1 (e.g., top_p=0.7 means only tokens that sum up to 70% of the probability mass are considered).
     *
     * Attribute: `ai.top_p`
     *
     * Type: float
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * Aliases: gen_ai.request.top_p
     *
     * @deprecated Use gen_ai.request.top_p instead
     *
     * @example 0.7
     */
    public const AI_TOP_P = 'ai.top_p';

    /**
     * The total cost for the tokens used.
     *
     * Attribute: `ai.total_cost`
     *
     * Type: float
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @example 12.34
     */
    public const AI_TOTAL_COST = 'ai.total_cost';

    /**
     * The total number of tokens used to process the prompt.
     *
     * Attribute: `ai.total_tokens.used`
     *
     * Type: int
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * Aliases: gen_ai.usage.total_tokens
     *
     * @deprecated Use gen_ai.usage.total_tokens instead
     *
     * @example 30
     */
    public const AI_TOTAL_TOKENS_USED = 'ai.total_tokens.used';

    /**
     * Warning messages generated during model execution.
     *
     * Attribute: `ai.warnings`
     *
     * Type: array<string>
     *
     * Contains PII: true
     *
     * Defined in OTEL: No
     *
     * @example ["Token limit exceeded"]
     */
    public const AI_WARNINGS = 'ai.warnings';

    /**
     * Mobile app start variant. Either cold or warm.
     *
     * Attribute: `app_start_type`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: No
     *
     * @example "cold"
     */
    public const APP_START_TYPE = 'app_start_type';

    /**
     * Whether the main thread was blocked by the span.
     *
     * Attribute: `blocked_main_thread`
     *
     * Type: bool
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @example true
     */
    public const BLOCKED_MAIN_THREAD = 'blocked_main_thread';

    /**
     * The name of the browser.
     *
     * Attribute: `browser.name`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: No
     *
     * Aliases: sentry.browser.name
     *
     * @example "Chrome"
     */
    public const BROWSER_NAME = 'browser.name';

    /**
     * A browser report sent via reporting API..
     *
     * Attribute: `browser.report.type`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: No
     *
     * @example "network-error"
     */
    public const BROWSER_REPORT_TYPE = 'browser.report.type';

    /**
     * How a script was called in the browser.
     *
     * Attribute: `browser.script.invoker`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: No
     *
     * @example "Window.requestAnimationFrame"
     */
    public const BROWSER_SCRIPT_INVOKER = 'browser.script.invoker';

    /**
     * Browser script entry point type.
     *
     * Attribute: `browser.script.invoker_type`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: No
     *
     * @example "event-listener"
     */
    public const BROWSER_SCRIPT_INVOKER_TYPE = 'browser.script.invoker_type';

    /**
     * A number representing the script character position of the script.
     *
     * Attribute: `browser.script.source_char_position`
     *
     * Type: int
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @example 678
     */
    public const BROWSER_SCRIPT_SOURCE_CHAR_POSITION = 'browser.script.source_char_position';

    /**
     * The version of the browser.
     *
     * Attribute: `browser.version`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: No
     *
     * Aliases: sentry.browser.version
     *
     * @example "120.0.6099.130"
     */
    public const BROWSER_VERSION = 'browser.version';

    /**
     * If the cache was hit during this span.
     *
     * Attribute: `cache.hit`
     *
     * Type: bool
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @example true
     */
    public const CACHE_HIT = 'cache.hit';

    /**
     * The size of the requested item in the cache. In bytes.
     *
     * Attribute: `cache.item_size`
     *
     * Type: int
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @example 58
     */
    public const CACHE_ITEM_SIZE = 'cache.item_size';

    /**
     * The key of the cache accessed.
     *
     * Attribute: `cache.key`
     *
     * Type: array<string>
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: No
     *
     * @example ["my-cache-key", "my-other-cache-key"]
     */
    public const CACHE_KEY = 'cache.key';

    /**
     * The operation being performed on the cache.
     *
     * Attribute: `cache.operation`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: No
     *
     * @example "get"
     */
    public const CACHE_OPERATION = 'cache.operation';

    /**
     * The ttl of the cache in seconds
     *
     * Attribute: `cache.ttl`
     *
     * Type: int
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @example 120
     */
    public const CACHE_TTL = 'cache.ttl';

    /**
     * The channel name that is being used.
     *
     * Attribute: `channel`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: No
     *
     * @example "mail"
     */
    public const CHANNEL = 'channel';

    /**
     * Client address - domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.
     *
     * Attribute: `client.address`
     *
     * Type: string
     *
     * Contains PII: true
     *
     * Defined in OTEL: Yes
     *
     * Aliases: http.client_ip
     *
     * @example "example.com"
     */
    public const CLIENT_ADDRESS = 'client.address';

    /**
     * Client port number.
     *
     * Attribute: `client.port`
     *
     * Type: int
     *
     * Contains PII: false
     *
     * Defined in OTEL: Yes
     *
     * @example 5432
     */
    public const CLIENT_PORT = 'client.port';

    /**
     * The duration of a Cloudflare D1 operation.
     *
     * Attribute: `cloudflare.d1.duration`
     *
     * Type: int
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @example 543
     */
    public const CLOUDFLARE_D1_DURATION = 'cloudflare.d1.duration';

    /**
     * The number of rows read in a Cloudflare D1 operation.
     *
     * Attribute: `cloudflare.d1.rows_read`
     *
     * Type: int
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @example 12
     */
    public const CLOUDFLARE_D1_ROWS_READ = 'cloudflare.d1.rows_read';

    /**
     * The number of rows written in a Cloudflare D1 operation.
     *
     * Attribute: `cloudflare.d1.rows_written`
     *
     * Type: int
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @example 12
     */
    public const CLOUDFLARE_D1_ROWS_WRITTEN = 'cloudflare.d1.rows_written';

    /**
     * The source code file name that identifies the code unit as uniquely as possible (preferably an absolute file path).
     *
     * Attribute: `code.file.path`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * Aliases: code.filepath
     *
     * @example "/app/myapplication/http/handler/server.py"
     */
    public const CODE_FILE_PATH = 'code.file.path';

    /**
     * The source code file name that identifies the code unit as uniquely as possible (preferably an absolute file path).
     *
     * Attribute: `code.filepath`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * Aliases: code.file.path
     *
     * @deprecated Use code.file.path instead
     *
     * @example "/app/myapplication/http/handler/server.py"
     */
    public const CODE_FILEPATH = 'code.filepath';

    /**
     * The method or function name, or equivalent (usually rightmost part of the code unit's name).
     *
     * Attribute: `code.function`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * Aliases: code.function.name
     *
     * @deprecated Use code.function.name instead
     *
     * @example "server_request"
     */
    public const CODE_FUNCTION = 'code.function';

    /**
     * The method or function name, or equivalent (usually rightmost part of the code unit's name).
     *
     * Attribute: `code.function.name`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * Aliases: code.function
     *
     * @example "server_request"
     */
    public const CODE_FUNCTION_NAME = 'code.function.name';

    /**
     * The line number in code.filepath best representing the operation. It SHOULD point within the code unit named in code.function
     *
     * Attribute: `code.line.number`
     *
     * Type: int
     *
     * Contains PII: false
     *
     * Defined in OTEL: Yes
     *
     * Aliases: code.lineno
     *
     * @example 42
     */
    public const CODE_LINE_NUMBER = 'code.line.number';

    /**
     * The line number in code.filepath best representing the operation. It SHOULD point within the code unit named in code.function
     *
     * Attribute: `code.lineno`
     *
     * Type: int
     *
     * Contains PII: false
     *
     * Defined in OTEL: Yes
     *
     * Aliases: code.line.number
     *
     * @deprecated Use code.line.number instead
     *
     * @example 42
     */
    public const CODE_LINENO = 'code.lineno';

    /**
     * The 'namespace' within which code.function is defined. Usually the qualified class or module name, such that code.namespace + some separator + code.function form a unique identifier for the code unit.
     *
     * Attribute: `code.namespace`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * @deprecated Use code.function.name instead - code.function.name should include the namespace.
     *
     * @example "http.handler"
     */
    public const CODE_NAMESPACE = 'code.namespace';

    /**
     * The name of a collection (table, container) within the database.
     *
     * Attribute: `db.collection.name`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * @example "users"
     */
    public const DB_COLLECTION_NAME = 'db.collection.name';

    /**
     * The name of the database being accessed.
     *
     * Attribute: `db.name`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * Aliases: db.namespace
     *
     * @deprecated Use db.namespace instead
     *
     * @example "customers"
     */
    public const DB_NAME = 'db.name';

    /**
     * The name of the database being accessed.
     *
     * Attribute: `db.namespace`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * Aliases: db.name
     *
     * @example "customers"
     */
    public const DB_NAMESPACE = 'db.namespace';

    /**
     * The name of the operation being executed.
     *
     * Attribute: `db.operation`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * Aliases: db.operation.name
     *
     * @deprecated Use db.operation.name instead
     *
     * @example "SELECT"
     */
    public const DB_OPERATION = 'db.operation';

    /**
     * The name of the operation being executed.
     *
     * Attribute: `db.operation.name`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * Aliases: db.operation
     *
     * @example "SELECT"
     */
    public const DB_OPERATION_NAME = 'db.operation.name';

    /**
     * A query parameter used in db.query.text, with <key> being the parameter name, and the attribute value being a string representation of the parameter value.
     *
     * Attribute: `db.query.parameter.<key>`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * Has Dynamic Suffix: true
     *
     * @example "db.query.parameter.foo='123'"
     */
    public const DB_QUERY_PARAMETER_KEY = 'db.query.parameter.<key>';

    /**
     * A database query being executed. Should be paramaterized. The full version of the query is in `db.query.text`.
     *
     * Attribute: `db.query.summary`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * @example "SELECT * FROM users"
     */
    public const DB_QUERY_SUMMARY = 'db.query.summary';

    /**
     * The database query being executed. Should be the full query, not a parameterized version. The parameterized version is in `db.query.summary`.
     *
     * Attribute: `db.query.text`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * Aliases: db.statement
     *
     * @example "SELECT * FROM users"
     */
    public const DB_QUERY_TEXT = 'db.query.text';

    /**
     * The redis connection name.
     *
     * Attribute: `db.redis.connection`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: No
     *
     * @example "my-redis-instance"
     */
    public const DB_REDIS_CONNECTION = 'db.redis.connection';

    /**
     * The array of command parameters given to a redis command.
     *
     * Attribute: `db.redis.parameters`
     *
     * Type: array<string>
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: No
     *
     * @example ["test", "*"]
     */
    public const DB_REDIS_PARAMETERS = 'db.redis.parameters';

    /**
     * The array of query bindings.
     *
     * Attribute: `db.sql.bindings`
     *
     * Type: array<string>
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: No
     *
     * @deprecated Use db.query.parameter.<key> instead - Instead of adding every binding in the db.sql.bindings attribute, add them as individual entires with db.query.parameter.<key>.
     *
     * @example ["1", "foo"]
     */
    public const DB_SQL_BINDINGS = 'db.sql.bindings';

    /**
     * The database statement being executed.
     *
     * Attribute: `db.statement`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * Aliases: db.query.text
     *
     * @deprecated Use db.query.text instead
     *
     * @example "SELECT * FROM users"
     */
    public const DB_STATEMENT = 'db.statement';

    /**
     * An identifier for the database management system (DBMS) product being used. See [OpenTelemetry docs](https://github.com/open-telemetry/semantic-conventions/blob/main/docs/database/database-spans.md#notes-and-well-known-identifiers-for-dbsystem) for a list of well-known identifiers.
     *
     * Attribute: `db.system`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * Aliases: db.system.name
     *
     * @deprecated Use db.system.name instead
     *
     * @example "postgresql"
     */
    public const DB_SYSTEM = 'db.system';

    /**
     * An identifier for the database management system (DBMS) product being used. See [OpenTelemetry docs](https://github.com/open-telemetry/semantic-conventions/blob/main/docs/database/database-spans.md#notes-and-well-known-identifiers-for-dbsystem) for a list of well-known identifiers.
     *
     * Attribute: `db.system.name`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * Aliases: db.system
     *
     * @example "postgresql"
     */
    public const DB_SYSTEM_NAME = 'db.system.name';

    /**
     * The database user.
     *
     * Attribute: `db.user`
     *
     * Type: string
     *
     * Contains PII: true
     *
     * Defined in OTEL: Yes
     *
     * @example "fancy_user"
     */
    public const DB_USER = 'db.user';

    /**
     * The brand of the device.
     *
     * Attribute: `device.brand`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: No
     *
     * @example "Apple"
     */
    public const DEVICE_BRAND = 'device.brand';

    /**
     * The family of the device.
     *
     * Attribute: `device.family`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: No
     *
     * @example "iPhone"
     */
    public const DEVICE_FAMILY = 'device.family';

    /**
     * The model of the device.
     *
     * Attribute: `device.model`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: No
     *
     * @example "iPhone 15 Pro Max"
     */
    public const DEVICE_MODEL = 'device.model';

    /**
     * The sentry environment.
     *
     * Attribute: `environment`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: No
     *
     * Aliases: sentry.environment
     *
     * @deprecated Use sentry.environment instead
     *
     * @example "production"
     */
    public const ENVIRONMENT = 'environment';

    /**
     * Describes a class of error the operation ended with.
     *
     * Attribute: `error.type`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * @example "timeout"
     */
    public const ERROR_TYPE = 'error.type';

    /**
     * The unique identifier for this event (log record)
     *
     * Attribute: `event.id`
     *
     * Type: int
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @example 1234567890
     */
    public const EVENT_ID = 'event.id';

    /**
     * The name that uniquely identifies this event (log record)
     *
     * Attribute: `event.name`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: No
     *
     * @example "Process Payload"
     */
    public const EVENT_NAME = 'event.name';

    /**
     * SHOULD be set to true if the exception event is recorded at a point where it is known that the exception is escaping the scope of the span.
     *
     * Attribute: `exception.escaped`
     *
     * Type: bool
     *
     * Contains PII: false
     *
     * Defined in OTEL: Yes
     *
     * @example true
     */
    public const EXCEPTION_ESCAPED = 'exception.escaped';

    /**
     * The error message.
     *
     * Attribute: `exception.message`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * @example "ENOENT: no such file or directory"
     */
    public const EXCEPTION_MESSAGE = 'exception.message';

    /**
     * A stacktrace as a string in the natural representation for the language runtime. The representation is to be determined and documented by each language SIG.
     *
     * Attribute: `exception.stacktrace`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * @example "Exception in thread \"main\" java.lang.RuntimeException: Test exception\n at com.example.GenerateTrace.methodB(GenerateTrace.java:13)\n at com.example.GenerateTrace.methodA(GenerateTrace.java:9)\n at com.example.GenerateTrace.main(GenerateTrace.java:5)"
     */
    public const EXCEPTION_STACKTRACE = 'exception.stacktrace';

    /**
     * The type of the exception (its fully-qualified class name, if applicable). The dynamic type of the exception should be preferred over the static type in languages that support it.
     *
     * Attribute: `exception.type`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * @example "OSError"
     */
    public const EXCEPTION_TYPE = 'exception.type';

    /**
     * A boolean that is true if the serverless function is executed for the first time (aka cold-start).
     *
     * Attribute: `faas.coldstart`
     *
     * Type: bool
     *
     * Contains PII: false
     *
     * Defined in OTEL: Yes
     *
     * @example true
     */
    public const FAAS_COLDSTART = 'faas.coldstart';

    /**
     * A string containing the schedule period as Cron Expression.
     *
     * Attribute: `faas.cron`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * @example "0/5 * * * ? *"
     */
    public const FAAS_CRON = 'faas.cron';

    /**
     * A string containing the function invocation time in the ISO 8601 format expressed in UTC.
     *
     * Attribute: `faas.time`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * @example "2020-01-23T13:47:06Z"
     */
    public const FAAS_TIME = 'faas.time';

    /**
     * Type of the trigger which caused this function invocation.
     *
     * Attribute: `faas.trigger`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * @example "timer"
     */
    public const FAAS_TRIGGER = 'faas.trigger';

    /**
     * An instance of a feature flag evaluation. The value of this attribute is the boolean representing the evaluation result. The <key> suffix is the name of the feature flag.
     *
     * Attribute: `flag.evaluation.<key>`
     *
     * Type: bool
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * Has Dynamic Suffix: true
     *
     * @example "flag.evaluation.is_new_ui=true"
     */
    public const FLAG_EVALUATION_KEY = 'flag.evaluation.<key>';

    /**
     * The sum of all delayed frame durations in seconds during the lifetime of the span. For more information see [frames delay](https://develop.sentry.dev/sdk/performance/frames-delay/).
     *
     * Attribute: `frames.delay`
     *
     * Type: int
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @example 5
     */
    public const FRAMES_DELAY = 'frames.delay';

    /**
     * The number of frozen frames rendered during the lifetime of the span.
     *
     * Attribute: `frames.frozen`
     *
     * Type: int
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @example 3
     */
    public const FRAMES_FROZEN = 'frames.frozen';

    /**
     * The number of slow frames rendered during the lifetime of the span.
     *
     * Attribute: `frames.slow`
     *
     * Type: int
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @example 1
     */
    public const FRAMES_SLOW = 'frames.slow';

    /**
     * The number of total frames rendered during the lifetime of the span.
     *
     * Attribute: `frames.total`
     *
     * Type: int
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @example 60
     */
    public const FRAMES_TOTAL = 'frames.total';

    /**
     * The error message of a file system error.
     *
     * Attribute: `fs_error`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: No
     *
     * @deprecated Use error.type instead - This attribute is not part of the OpenTelemetry specification and error.type fits much better.
     *
     * @example "ENOENT: no such file or directory"
     */
    public const FS_ERROR = 'fs_error';

    /**
     * The name of the agent being used.
     *
     * Attribute: `gen_ai.agent.name`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * @example "ResearchAssistant"
     */
    public const GEN_AI_AGENT_NAME = 'gen_ai.agent.name';

    /**
     * The assistant message passed to the model.
     *
     * Attribute: `gen_ai.assistant.message`
     *
     * Type: string
     *
     * Contains PII: true
     *
     * Defined in OTEL: No
     *
     * @example "get_weather tool call"
     */
    public const GEN_AI_ASSISTANT_MESSAGE = 'gen_ai.assistant.message';

    /**
     * The model's response message.
     *
     * Attribute: `gen_ai.choice`
     *
     * Type: string
     *
     * Contains PII: true
     *
     * Defined in OTEL: No
     *
     * @example "The weather in Paris is rainy and overcast, with temperatures around 57°F"
     */
    public const GEN_AI_CHOICE = 'gen_ai.choice';

    /**
     * The cost of tokens used to process the AI input (prompt) in USD (without cached input tokens).
     *
     * Attribute: `gen_ai.cost.input_tokens`
     *
     * Type: float
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @example 123.45
     */
    public const GEN_AI_COST_INPUT_TOKENS = 'gen_ai.cost.input_tokens';

    /**
     * The cost of tokens used for creating the AI output in USD (without reasoning tokens).
     *
     * Attribute: `gen_ai.cost.output_tokens`
     *
     * Type: float
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @example 123.45
     */
    public const GEN_AI_COST_OUTPUT_TOKENS = 'gen_ai.cost.output_tokens';

    /**
     * The total cost for the tokens used.
     *
     * Attribute: `gen_ai.cost.total_tokens`
     *
     * Type: float
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @example 12.34
     */
    public const GEN_AI_COST_TOTAL_TOKENS = 'gen_ai.cost.total_tokens';

    /**
     * The name of the operation being performed.
     *
     * Attribute: `gen_ai.operation.name`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * @example "chat"
     */
    public const GEN_AI_OPERATION_NAME = 'gen_ai.operation.name';

    /**
     * The type of AI operation. Must be one of 'agent', 'ai_client', 'tool', 'handoff', 'guardrail'. Makes querying for spans in the UI easier.
     *
     * Attribute: `gen_ai.operation.type`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: No
     *
     * @example "tool"
     */
    public const GEN_AI_OPERATION_TYPE = 'gen_ai.operation.type';

    /**
     * Name of the AI pipeline or chain being executed.
     *
     * Attribute: `gen_ai.pipeline.name`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: No
     *
     * Aliases: ai.pipeline.name
     *
     * @example "Autofix Pipeline"
     */
    public const GEN_AI_PIPELINE_NAME = 'gen_ai.pipeline.name';

    /**
     * The input messages sent to the model
     *
     * Attribute: `gen_ai.prompt`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * @deprecated - Deprecated from OTEL, use gen_ai.input.messages with the new format instead.
     *
     * @example "[{\"role\": \"user\", \"message\": \"hello\"}]"
     */
    public const GEN_AI_PROMPT = 'gen_ai.prompt';

    /**
     * The available tools for the model. It has to be a stringified version of an array of objects.
     *
     * Attribute: `gen_ai.request.available_tools`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: No
     *
     * @example "[{\"name\": \"get_weather\", \"description\": \"Get the weather for a given location\"}, {\"name\": \"get_news\", \"description\": \"Get the news for a given topic\"}]"
     */
    public const GEN_AI_REQUEST_AVAILABLE_TOOLS = 'gen_ai.request.available_tools';

    /**
     * Used to reduce repetitiveness of generated tokens. The higher the value, the stronger a penalty is applied to previously present tokens, proportional to how many times they have already appeared in the prompt or prior generation.
     *
     * Attribute: `gen_ai.request.frequency_penalty`
     *
     * Type: float
     *
     * Contains PII: false
     *
     * Defined in OTEL: Yes
     *
     * Aliases: ai.frequency_penalty
     *
     * @example 0.5
     */
    public const GEN_AI_REQUEST_FREQUENCY_PENALTY = 'gen_ai.request.frequency_penalty';

    /**
     * The maximum number of tokens to generate in the response.
     *
     * Attribute: `gen_ai.request.max_tokens`
     *
     * Type: int
     *
     * Contains PII: false
     *
     * Defined in OTEL: Yes
     *
     * @example 2048
     */
    public const GEN_AI_REQUEST_MAX_TOKENS = 'gen_ai.request.max_tokens';

    /**
     * The messages passed to the model. It has to be a stringified version of an array of objects. The `role` attribute of each object must be `"user"`, `"assistant"`, `"tool"`, or `"system"`. For messages of the role `"tool"`, the `content` can be a string or an arbitrary object with information about the tool call. For other messages the `content` can be either a string or a list of objects in the format `{type: "text", text:"..."}`.
     *
     * Attribute: `gen_ai.request.messages`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: No
     *
     * Aliases: ai.input_messages
     *
     * @example "[{\"role\": \"system\", \"content\": \"Generate a random number.\"}, {\"role\": \"user\", \"content\": [{\"text\": \"Generate a random number between 0 and 10.\", \"type\": \"text\"}]}, {\"role\": \"tool\", \"content\": {\"toolCallId\": \"1\", \"toolName\": \"Weather\", \"output\": \"rainy\"}}]"
     */
    public const GEN_AI_REQUEST_MESSAGES = 'gen_ai.request.messages';

    /**
     * The model identifier being used for the request.
     *
     * Attribute: `gen_ai.request.model`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * @example "gpt-4-turbo-preview"
     */
    public const GEN_AI_REQUEST_MODEL = 'gen_ai.request.model';

    /**
     * Used to reduce repetitiveness of generated tokens. Similar to frequency_penalty, except that this penalty is applied equally to all tokens that have already appeared, regardless of their exact frequencies.
     *
     * Attribute: `gen_ai.request.presence_penalty`
     *
     * Type: float
     *
     * Contains PII: false
     *
     * Defined in OTEL: Yes
     *
     * Aliases: ai.presence_penalty
     *
     * @example 0.5
     */
    public const GEN_AI_REQUEST_PRESENCE_PENALTY = 'gen_ai.request.presence_penalty';

    /**
     * The seed, ideally models given the same seed and same other parameters will produce the exact same output.
     *
     * Attribute: `gen_ai.request.seed`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * Aliases: ai.seed
     *
     * @example "1234567890"
     */
    public const GEN_AI_REQUEST_SEED = 'gen_ai.request.seed';

    /**
     * For an AI model call, the temperature parameter. Temperature essentially means how random the output will be.
     *
     * Attribute: `gen_ai.request.temperature`
     *
     * Type: float
     *
     * Contains PII: false
     *
     * Defined in OTEL: Yes
     *
     * Aliases: ai.temperature
     *
     * @example 0.1
     */
    public const GEN_AI_REQUEST_TEMPERATURE = 'gen_ai.request.temperature';

    /**
     * Limits the model to only consider the K most likely next tokens, where K is an integer (e.g., top_k=20 means only the 20 highest probability tokens are considered).
     *
     * Attribute: `gen_ai.request.top_k`
     *
     * Type: int
     *
     * Contains PII: false
     *
     * Defined in OTEL: Yes
     *
     * Aliases: ai.top_k
     *
     * @example 35
     */
    public const GEN_AI_REQUEST_TOP_K = 'gen_ai.request.top_k';

    /**
     * Limits the model to only consider tokens whose cumulative probability mass adds up to p, where p is a float between 0 and 1 (e.g., top_p=0.7 means only tokens that sum up to 70% of the probability mass are considered).
     *
     * Attribute: `gen_ai.request.top_p`
     *
     * Type: float
     *
     * Contains PII: false
     *
     * Defined in OTEL: Yes
     *
     * Aliases: ai.top_p
     *
     * @example 0.7
     */
    public const GEN_AI_REQUEST_TOP_P = 'gen_ai.request.top_p';

    /**
     * The reason why the model stopped generating.
     *
     * Attribute: `gen_ai.response.finish_reasons`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * Aliases: ai.finish_reason
     *
     * @example "COMPLETE"
     */
    public const GEN_AI_RESPONSE_FINISH_REASONS = 'gen_ai.response.finish_reasons';

    /**
     * Unique identifier for the completion.
     *
     * Attribute: `gen_ai.response.id`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * Aliases: ai.generation_id
     *
     * @example "gen_123abc"
     */
    public const GEN_AI_RESPONSE_ID = 'gen_ai.response.id';

    /**
     * The vendor-specific ID of the model used.
     *
     * Attribute: `gen_ai.response.model`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * Aliases: ai.model_id
     *
     * @example "gpt-4"
     */
    public const GEN_AI_RESPONSE_MODEL = 'gen_ai.response.model';

    /**
     * Whether or not the AI model call's response was streamed back asynchronously
     *
     * Attribute: `gen_ai.response.streaming`
     *
     * Type: bool
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * Aliases: ai.streaming
     *
     * @example true
     */
    public const GEN_AI_RESPONSE_STREAMING = 'gen_ai.response.streaming';

    /**
     * The model's response text messages. It has to be a stringified version of an array of response text messages.
     *
     * Attribute: `gen_ai.response.text`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: No
     *
     * @example "[\"The weather in Paris is rainy and overcast, with temperatures around 57°F\", \"The weather in London is sunny and warm, with temperatures around 65°F\"]"
     */
    public const GEN_AI_RESPONSE_TEXT = 'gen_ai.response.text';

    /**
     * The total output tokens per seconds throughput
     *
     * Attribute: `gen_ai.response.tokens_per_second`
     *
     * Type: float
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @example 12345.67
     */
    public const GEN_AI_RESPONSE_TOKENS_PER_SECOND = 'gen_ai.response.tokens_per_second';

    /**
     * The tool calls in the model's response. It has to be a stringified version of an array of objects.
     *
     * Attribute: `gen_ai.response.tool_calls`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: No
     *
     * @example "[{\"name\": \"get_weather\", \"arguments\": {\"location\": \"Paris\"}}]"
     */
    public const GEN_AI_RESPONSE_TOOL_CALLS = 'gen_ai.response.tool_calls';

    /**
     * The provider of the model.
     *
     * Attribute: `gen_ai.system`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * Aliases: ai.model.provider
     *
     * @example "openai"
     */
    public const GEN_AI_SYSTEM = 'gen_ai.system';

    /**
     * The system instructions passed to the model.
     *
     * Attribute: `gen_ai.system.message`
     *
     * Type: string
     *
     * Contains PII: true
     *
     * Defined in OTEL: No
     *
     * @example "You are a helpful assistant"
     */
    public const GEN_AI_SYSTEM_MESSAGE = 'gen_ai.system.message';

    /**
     * The description of the tool being used.
     *
     * Attribute: `gen_ai.tool.description`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * @example "Searches the web for current information about a topic"
     */
    public const GEN_AI_TOOL_DESCRIPTION = 'gen_ai.tool.description';

    /**
     * The input of the tool being used. It has to be a stringified version of the input to the tool.
     *
     * Attribute: `gen_ai.tool.input`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: No
     *
     * @example "{\"location\": \"Paris\"}"
     */
    public const GEN_AI_TOOL_INPUT = 'gen_ai.tool.input';

    /**
     * The response from a tool or function call passed to the model.
     *
     * Attribute: `gen_ai.tool.message`
     *
     * Type: string
     *
     * Contains PII: true
     *
     * Defined in OTEL: No
     *
     * @example "rainy, 57°F"
     */
    public const GEN_AI_TOOL_MESSAGE = 'gen_ai.tool.message';

    /**
     * Name of the tool utilized by the agent.
     *
     * Attribute: `gen_ai.tool.name`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * Aliases: ai.function_call
     *
     * @example "Flights"
     */
    public const GEN_AI_TOOL_NAME = 'gen_ai.tool.name';

    /**
     * The output of the tool being used. It has to be a stringified version of the output of the tool.
     *
     * Attribute: `gen_ai.tool.output`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: No
     *
     * @example "rainy, 57°F"
     */
    public const GEN_AI_TOOL_OUTPUT = 'gen_ai.tool.output';

    /**
     * The type of tool being used.
     *
     * Attribute: `gen_ai.tool.type`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * @example "function"
     */
    public const GEN_AI_TOOL_TYPE = 'gen_ai.tool.type';

    /**
     * The number of tokens used in the GenAI response (completion).
     *
     * Attribute: `gen_ai.usage.completion_tokens`
     *
     * Type: int
     *
     * Contains PII: false
     *
     * Defined in OTEL: Yes
     *
     * Aliases: ai.completion_tokens.used, gen_ai.usage.output_tokens
     *
     * @deprecated Use gen_ai.usage.output_tokens instead
     *
     * @example 10
     */
    public const GEN_AI_USAGE_COMPLETION_TOKENS = 'gen_ai.usage.completion_tokens';

    /**
     * The number of tokens used to process the AI input (prompt) without cached input tokens.
     *
     * Attribute: `gen_ai.usage.input_tokens`
     *
     * Type: int
     *
     * Contains PII: false
     *
     * Defined in OTEL: Yes
     *
     * Aliases: ai.prompt_tokens.used, gen_ai.usage.prompt_tokens
     *
     * @example 10
     */
    public const GEN_AI_USAGE_INPUT_TOKENS = 'gen_ai.usage.input_tokens';

    /**
     * The number of cached tokens used to process the AI input (prompt).
     *
     * Attribute: `gen_ai.usage.input_tokens.cached`
     *
     * Type: int
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @example 50
     */
    public const GEN_AI_USAGE_INPUT_TOKENS_CACHED = 'gen_ai.usage.input_tokens.cached';

    /**
     * The number of tokens used for creating the AI output (without reasoning tokens).
     *
     * Attribute: `gen_ai.usage.output_tokens`
     *
     * Type: int
     *
     * Contains PII: false
     *
     * Defined in OTEL: Yes
     *
     * Aliases: ai.completion_tokens.used, gen_ai.usage.completion_tokens
     *
     * @example 10
     */
    public const GEN_AI_USAGE_OUTPUT_TOKENS = 'gen_ai.usage.output_tokens';

    /**
     * The number of tokens used for reasoning to create the AI output.
     *
     * Attribute: `gen_ai.usage.output_tokens.reasoning`
     *
     * Type: int
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @example 75
     */
    public const GEN_AI_USAGE_OUTPUT_TOKENS_REASONING = 'gen_ai.usage.output_tokens.reasoning';

    /**
     * The number of tokens used in the GenAI input (prompt).
     *
     * Attribute: `gen_ai.usage.prompt_tokens`
     *
     * Type: int
     *
     * Contains PII: false
     *
     * Defined in OTEL: Yes
     *
     * Aliases: ai.prompt_tokens.used, gen_ai.usage.input_tokens
     *
     * @deprecated Use gen_ai.usage.input_tokens instead
     *
     * @example 20
     */
    public const GEN_AI_USAGE_PROMPT_TOKENS = 'gen_ai.usage.prompt_tokens';

    /**
     * The total cost for the tokens used.
     *
     * Attribute: `gen_ai.usage.total_cost`
     *
     * Type: float
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @deprecated Use gen_ai.cost.total_tokens instead
     *
     * @example 12.34
     */
    public const GEN_AI_USAGE_TOTAL_COST = 'gen_ai.usage.total_cost';

    /**
     * The total number of tokens used to process the prompt. (input tokens plus output todkens)
     *
     * Attribute: `gen_ai.usage.total_tokens`
     *
     * Type: int
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * Aliases: ai.total_tokens.used
     *
     * @example 20
     */
    public const GEN_AI_USAGE_TOTAL_TOKENS = 'gen_ai.usage.total_tokens';

    /**
     * The user message passed to the model.
     *
     * Attribute: `gen_ai.user.message`
     *
     * Type: string
     *
     * Contains PII: true
     *
     * Defined in OTEL: No
     *
     * @example "What's the weather in Paris?"
     */
    public const GEN_AI_USER_MESSAGE = 'gen_ai.user.message';

    /**
     * The name of the operation being executed.
     *
     * Attribute: `graphql.operation.name`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * @example "findBookById"
     */
    public const GRAPHQL_OPERATION_NAME = 'graphql.operation.name';

    /**
     * The type of the operation being executed.
     *
     * Attribute: `graphql.operation.type`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * @example "query"
     */
    public const GRAPHQL_OPERATION_TYPE = 'graphql.operation.type';

    /**
     * Client address - domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.
     *
     * Attribute: `http.client_ip`
     *
     * Type: string
     *
     * Contains PII: true
     *
     * Defined in OTEL: Yes
     *
     * Aliases: client.address
     *
     * @deprecated Use client.address instead
     *
     * @example "example.com"
     */
    public const HTTP_CLIENT_IP = 'http.client_ip';

    /**
     * The decoded body size of the response (in bytes).
     *
     * Attribute: `http.decoded_response_content_length`
     *
     * Type: int
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @example 456
     */
    public const HTTP_DECODED_RESPONSE_CONTENT_LENGTH = 'http.decoded_response_content_length';

    /**
     * The actual version of the protocol used for network communication.
     *
     * Attribute: `http.flavor`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * Aliases: network.protocol.version, net.protocol.version
     *
     * @deprecated Use network.protocol.version instead
     *
     * @example "1.1"
     */
    public const HTTP_FLAVOR = 'http.flavor';

    /**
     * The fragments present in the URI. Note that this contains the leading # character, while the `url.fragment` attribute does not.
     *
     * Attribute: `http.fragment`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: No
     *
     * @example "#details"
     */
    public const HTTP_FRAGMENT = 'http.fragment';

    /**
     * The domain name.
     *
     * Attribute: `http.host`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * Aliases: server.address, client.address, http.server_name, net.host.name
     *
     * @deprecated Use server.address instead - Deprecated, use one of `server.address` or `client.address`, depending on the usage
     *
     * @example "example.com"
     */
    public const HTTP_HOST = 'http.host';

    /**
     * The HTTP method used.
     *
     * Attribute: `http.method`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * Aliases: http.request.method
     *
     * @deprecated Use http.request.method instead
     *
     * @example "GET"
     */
    public const HTTP_METHOD = 'http.method';

    /**
     * The query string present in the URL. Note that this contains the leading ? character, while the `url.query` attribute does not.
     *
     * Attribute: `http.query`
     *
     * Type: string
     *
     * Contains PII: maybe - Query string values can contain sensitive information. Clients should attempt to scrub parameters that might contain sensitive information.
     *
     * Defined in OTEL: No
     *
     * @example "?foo=bar&bar=baz"
     */
    public const HTTP_QUERY = 'http.query';

    /**
     * The UNIX timestamp representing the time immediately before the user agent starts establishing the connection to the server to retrieve the resource.
     *
     * Attribute: `http.request.connect_start`
     *
     * Type: float
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @example 1732829555.111
     */
    public const HTTP_REQUEST_CONNECT_START = 'http.request.connect_start';

    /**
     * The UNIX timestamp representing the time immediately after the browser finishes establishing the connection to the server to retrieve the resource. The timestamp value includes the time interval to establish the transport connection, as well as other time intervals such as TLS handshake and SOCKS authentication.
     *
     * Attribute: `http.request.connection_end`
     *
     * Type: float
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @example 1732829555.15
     */
    public const HTTP_REQUEST_CONNECTION_END = 'http.request.connection_end';

    /**
     * The UNIX timestamp representing the time immediately after the browser finishes the domain-name lookup for the resource.
     *
     * Attribute: `http.request.domain_lookup_end`
     *
     * Type: float
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @example 1732829555.201
     */
    public const HTTP_REQUEST_DOMAIN_LOOKUP_END = 'http.request.domain_lookup_end';

    /**
     * The UNIX timestamp representing the time immediately before the browser starts the domain name lookup for the resource.
     *
     * Attribute: `http.request.domain_lookup_start`
     *
     * Type: float
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @example 1732829555.322
     */
    public const HTTP_REQUEST_DOMAIN_LOOKUP_START = 'http.request.domain_lookup_start';

    /**
     * The UNIX timestamp representing the time immediately before the browser starts to fetch the resource.
     *
     * Attribute: `http.request.fetch_start`
     *
     * Type: float
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @example 1732829555.389
     */
    public const HTTP_REQUEST_FETCH_START = 'http.request.fetch_start';

    /**
     * HTTP request headers, <key> being the normalized HTTP Header name (lowercase), the value being the header values.
     *
     * Attribute: `http.request.header.<key>`
     *
     * Type: array<string>
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * Has Dynamic Suffix: true
     *
     * @example "http.request.header.custom-header=['foo', 'bar']"
     */
    public const HTTP_REQUEST_HEADER_KEY = 'http.request.header.<key>';

    /**
     * The HTTP method used.
     *
     * Attribute: `http.request.method`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * Aliases: method, http.method
     *
     * @example "GET"
     */
    public const HTTP_REQUEST_METHOD = 'http.request.method';

    /**
     * The UNIX timestamp representing the timestamp immediately after receiving the last byte of the response of the last redirect
     *
     * Attribute: `http.request.redirect_end`
     *
     * Type: float
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @example 1732829558.502
     */
    public const HTTP_REQUEST_REDIRECT_END = 'http.request.redirect_end';

    /**
     * The UNIX timestamp representing the start time of the fetch which that initiates the redirect.
     *
     * Attribute: `http.request.redirect_start`
     *
     * Type: float
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @example 1732829555.495
     */
    public const HTTP_REQUEST_REDIRECT_START = 'http.request.redirect_start';

    /**
     * The UNIX timestamp representing the time immediately before the browser starts requesting the resource from the server, cache, or local resource. If the transport connection fails and the browser retires the request, the value returned will be the start of the retry request.
     *
     * Attribute: `http.request.request_start`
     *
     * Type: float
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @example 1732829555.51
     */
    public const HTTP_REQUEST_REQUEST_START = 'http.request.request_start';

    /**
     * The ordinal number of request resending attempt (for any reason, including redirects).
     *
     * Attribute: `http.request.resend_count`
     *
     * Type: int
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @example 2
     */
    public const HTTP_REQUEST_RESEND_COUNT = 'http.request.resend_count';

    /**
     * The UNIX timestamp representing the time immediately after the browser receives the last byte of the resource or immediately before the transport connection is closed, whichever comes first.
     *
     * Attribute: `http.request.response_end`
     *
     * Type: float
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @example 1732829555.89
     */
    public const HTTP_REQUEST_RESPONSE_END = 'http.request.response_end';

    /**
     * The UNIX timestamp representing the time immediately before the browser starts requesting the resource from the server, cache, or local resource. If the transport connection fails and the browser retires the request, the value returned will be the start of the retry request.
     *
     * Attribute: `http.request.response_start`
     *
     * Type: float
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @example 1732829555.7
     */
    public const HTTP_REQUEST_RESPONSE_START = 'http.request.response_start';

    /**
     * The UNIX timestamp representing the time immediately before the browser starts the handshake process to secure the current connection. If a secure connection is not used, the property returns zero.
     *
     * Attribute: `http.request.secure_connection_start`
     *
     * Type: float
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @example 1732829555.73
     */
    public const HTTP_REQUEST_SECURE_CONNECTION_START = 'http.request.secure_connection_start';

    /**
     * The time in seconds from the browser's timeorigin to when the first byte of the request's response was received. See https://web.dev/articles/ttfb#measure-resource-requests
     *
     * Attribute: `http.request.time_to_first_byte`
     *
     * Type: float
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @example 1.032
     */
    public const HTTP_REQUEST_TIME_TO_FIRST_BYTE = 'http.request.time_to_first_byte';

    /**
     * The UNIX timestamp representing the timestamp immediately before dispatching the FetchEvent if a Service Worker thread is already running, or immediately before starting the Service Worker thread if it is not already running.
     *
     * Attribute: `http.request.worker_start`
     *
     * Type: float
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @example 1732829553.68
     */
    public const HTTP_REQUEST_WORKER_START = 'http.request.worker_start';

    /**
     * The encoded body size of the response (in bytes).
     *
     * Attribute: `http.response.body.size`
     *
     * Type: int
     *
     * Contains PII: false
     *
     * Defined in OTEL: Yes
     *
     * Aliases: http.response_content_length, http.response.header.content-length
     *
     * @example 123
     */
    public const HTTP_RESPONSE_BODY_SIZE = 'http.response.body.size';

    /**
     * HTTP response headers, <key> being the normalized HTTP Header name (lowercase), the value being the header values.
     *
     * Attribute: `http.response.header.<key>`
     *
     * Type: array<string>
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * Has Dynamic Suffix: true
     *
     * @example "http.response.header.custom-header=['foo', 'bar']"
     */
    public const HTTP_RESPONSE_HEADER_KEY = 'http.response.header.<key>';

    /**
     * The size of the message body sent to the recipient (in bytes)
     *
     * Attribute: `http.response.header.content-length`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * Aliases: http.response_content_length, http.response.body.size
     *
     * @example "http.response.header.custom-header=['foo', 'bar']"
     */
    public const HTTP_RESPONSE_HEADER_CONTENT_LENGTH = 'http.response.header.content-length';

    /**
     * The transfer size of the response (in bytes).
     *
     * Attribute: `http.response.size`
     *
     * Type: int
     *
     * Contains PII: false
     *
     * Defined in OTEL: Yes
     *
     * Aliases: http.response_transfer_size
     *
     * @example 456
     */
    public const HTTP_RESPONSE_SIZE = 'http.response.size';

    /**
     * The status code of the HTTP response.
     *
     * Attribute: `http.response.status_code`
     *
     * Type: int
     *
     * Contains PII: false
     *
     * Defined in OTEL: Yes
     *
     * Aliases: http.status_code
     *
     * @example 404
     */
    public const HTTP_RESPONSE_STATUS_CODE = 'http.response.status_code';

    /**
     * The encoded body size of the response (in bytes).
     *
     * Attribute: `http.response_content_length`
     *
     * Type: int
     *
     * Contains PII: false
     *
     * Defined in OTEL: Yes
     *
     * Aliases: http.response.body.size, http.response.header.content-length
     *
     * @deprecated Use http.response.body.size instead
     *
     * @example 123
     */
    public const HTTP_RESPONSE_CONTENT_LENGTH = 'http.response_content_length';

    /**
     * The transfer size of the response (in bytes).
     *
     * Attribute: `http.response_transfer_size`
     *
     * Type: int
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * Aliases: http.response.size
     *
     * @deprecated Use http.response.size instead
     *
     * @example 456
     */
    public const HTTP_RESPONSE_TRANSFER_SIZE = 'http.response_transfer_size';

    /**
     * The matched route, that is, the path template in the format used by the respective server framework.
     *
     * Attribute: `http.route`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * Aliases: url.template
     *
     * @example "/users/:id"
     */
    public const HTTP_ROUTE = 'http.route';

    /**
     * The URI scheme component identifying the used protocol.
     *
     * Attribute: `http.scheme`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * Aliases: url.scheme
     *
     * @deprecated Use url.scheme instead
     *
     * @example "https"
     */
    public const HTTP_SCHEME = 'http.scheme';

    /**
     * The server domain name
     *
     * Attribute: `http.server_name`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * Aliases: server.address, net.host.name, http.host
     *
     * @deprecated Use server.address instead
     *
     * @example "example.com"
     */
    public const HTTP_SERVER_NAME = 'http.server_name';

    /**
     * The status code of the HTTP response.
     *
     * Attribute: `http.status_code`
     *
     * Type: int
     *
     * Contains PII: false
     *
     * Defined in OTEL: Yes
     *
     * Aliases: http.response.status_code
     *
     * @deprecated Use http.response.status_code instead
     *
     * @example 404
     */
    public const HTTP_STATUS_CODE = 'http.status_code';

    /**
     * The pathname and query string of the URL.
     *
     * Attribute: `http.target`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * @deprecated Use url.path instead - This attribute is being deprecated in favor of url.path and url.query
     *
     * @example "/test?foo=bar#buzz"
     */
    public const HTTP_TARGET = 'http.target';

    /**
     * The URL of the resource that was fetched.
     *
     * Attribute: `http.url`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * Aliases: url.full, url
     *
     * @deprecated Use url.full instead
     *
     * @example "https://example.com/test?foo=bar#buzz"
     */
    public const HTTP_URL = 'http.url';

    /**
     * Value of the HTTP User-Agent header sent by the client.
     *
     * Attribute: `http.user_agent`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * Aliases: user_agent.original
     *
     * @deprecated Use user_agent.original instead
     *
     * @example "Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Mobile/15E148 Safari/604.1"
     */
    public const HTTP_USER_AGENT = 'http.user_agent';

    /**
     * A unique identifier for the span.
     *
     * Attribute: `id`
     *
     * Type: string
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @example "f47ac10b58cc4372a5670e02b2c3d479"
     */
    public const ID = 'id';

    /**
     * Name of the garbage collector action.
     *
     * Attribute: `jvm.gc.action`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * @example "end of minor GC"
     */
    public const JVM_GC_ACTION = 'jvm.gc.action';

    /**
     * Name of the garbage collector.
     *
     * Attribute: `jvm.gc.name`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * @example "G1 Young Generation"
     */
    public const JVM_GC_NAME = 'jvm.gc.name';

    /**
     * Name of the memory pool.
     *
     * Attribute: `jvm.memory.pool.name`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * @example "G1 Old Gen"
     */
    public const JVM_MEMORY_POOL_NAME = 'jvm.memory.pool.name';

    /**
     * Name of the memory pool.
     *
     * Attribute: `jvm.memory.type`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * @example "G1 Old Gen"
     */
    public const JVM_MEMORY_TYPE = 'jvm.memory.type';

    /**
     * Whether the thread is daemon or not.
     *
     * Attribute: `jvm.thread.daemon`
     *
     * Type: bool
     *
     * Contains PII: false
     *
     * Defined in OTEL: Yes
     *
     * @example true
     */
    public const JVM_THREAD_DAEMON = 'jvm.thread.daemon';

    /**
     * State of the thread.
     *
     * Attribute: `jvm.thread.state`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * @example "blocked"
     */
    public const JVM_THREAD_STATE = 'jvm.thread.state';

    /**
     * The dom element responsible for the largest contentful paint.
     *
     * Attribute: `lcp.element`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: No
     *
     * @example "img"
     */
    public const LCP_ELEMENT = 'lcp.element';

    /**
     * The id of the dom element responsible for the largest contentful paint.
     *
     * Attribute: `lcp.id`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: No
     *
     * @example "#hero"
     */
    public const LCP_ID = 'lcp.id';

    /**
     * The size of the largest contentful paint element.
     *
     * Attribute: `lcp.size`
     *
     * Type: int
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @example 1234
     */
    public const LCP_SIZE = 'lcp.size';

    /**
     * The url of the dom element responsible for the largest contentful paint.
     *
     * Attribute: `lcp.url`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: No
     *
     * @example "https://example.com"
     */
    public const LCP_URL = 'lcp.url';

    /**
     * The name of the logger that generated this event.
     *
     * Attribute: `logger.name`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: No
     *
     * @example "myLogger"
     */
    public const LOGGER_NAME = 'logger.name';

    /**
     * The message destination connection.
     *
     * Attribute: `messaging.destination.connection`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: No
     *
     * @example "BestTopic"
     */
    public const MESSAGING_DESTINATION_CONNECTION = 'messaging.destination.connection';

    /**
     * The message destination name.
     *
     * Attribute: `messaging.destination.name`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * @example "BestTopic"
     */
    public const MESSAGING_DESTINATION_NAME = 'messaging.destination.name';

    /**
     * The size of the message body in bytes.
     *
     * Attribute: `messaging.message.body.size`
     *
     * Type: int
     *
     * Contains PII: false
     *
     * Defined in OTEL: Yes
     *
     * @example 839
     */
    public const MESSAGING_MESSAGE_BODY_SIZE = 'messaging.message.body.size';

    /**
     * The size of the message body and metadata in bytes.
     *
     * Attribute: `messaging.message.envelope.size`
     *
     * Type: int
     *
     * Contains PII: false
     *
     * Defined in OTEL: Yes
     *
     * @example 1045
     */
    public const MESSAGING_MESSAGE_ENVELOPE_SIZE = 'messaging.message.envelope.size';

    /**
     * A value used by the messaging system as an identifier for the message, represented as a string.
     *
     * Attribute: `messaging.message.id`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * @example "f47ac10b58cc4372a5670e02b2c3d479"
     */
    public const MESSAGING_MESSAGE_ID = 'messaging.message.id';

    /**
     * The latency between when the message was published and received.
     *
     * Attribute: `messaging.message.receive.latency`
     *
     * Type: int
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @example 1732847252
     */
    public const MESSAGING_MESSAGE_RECEIVE_LATENCY = 'messaging.message.receive.latency';

    /**
     * The amount of attempts to send the message.
     *
     * Attribute: `messaging.message.retry.count`
     *
     * Type: int
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @example 2
     */
    public const MESSAGING_MESSAGE_RETRY_COUNT = 'messaging.message.retry.count';

    /**
     * A string identifying the type of the messaging operation
     *
     * Attribute: `messaging.operation.type`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * @example "create"
     */
    public const MESSAGING_OPERATION_TYPE = 'messaging.operation.type';

    /**
     * The messaging system as identified by the client instrumentation.
     *
     * Attribute: `messaging.system`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * @example "activemq"
     */
    public const MESSAGING_SYSTEM = 'messaging.system';

    /**
     * The HTTP method used.
     *
     * Attribute: `method`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: No
     *
     * Aliases: http.request.method
     *
     * @deprecated Use http.request.method instead
     *
     * @example "GET"
     */
    public const METHOD = 'method';

    /**
     * The type of navigation done by a client-side router.
     *
     * Attribute: `navigation.type`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: No
     *
     * @example "router.push"
     */
    public const NAVIGATION_TYPE = 'navigation.type';

    /**
     * The elapsed number of milliseconds between the start of the resource fetch and when it was completed or aborted by the user agent.
     *
     * Attribute: `nel.elapsed_time`
     *
     * Type: int
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @example 100
     */
    public const NEL_ELAPSED_TIME = 'nel.elapsed_time';

    /**
     * If request failed, the phase of its network error. If request succeeded, "application".
     *
     * Attribute: `nel.phase`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: No
     *
     * @example "application"
     */
    public const NEL_PHASE = 'nel.phase';

    /**
     * request's referrer, as determined by the referrer policy associated with its client.
     *
     * Attribute: `nel.referrer`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: No
     *
     * @example "https://example.com/foo?bar=baz"
     */
    public const NEL_REFERRER = 'nel.referrer';

    /**
     * The sampling function used to determine if the request should be sampled.
     *
     * Attribute: `nel.sampling_function`
     *
     * Type: float
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @example 0.5
     */
    public const NEL_SAMPLING_FUNCTION = 'nel.sampling_function';

    /**
     * If request failed, the type of its network error. If request succeeded, "ok".
     *
     * Attribute: `nel.type`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: No
     *
     * @example "dns.unreachable"
     */
    public const NEL_TYPE = 'nel.type';

    /**
     * Local address of the network connection - IP address or Unix domain socket name.
     *
     * Attribute: `net.host.ip`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * Aliases: network.local.address, net.sock.host.addr
     *
     * @deprecated Use network.local.address instead
     *
     * @example "192.168.0.1"
     */
    public const NET_HOST_IP = 'net.host.ip';

    /**
     * Server domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.
     *
     * Attribute: `net.host.name`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * Aliases: server.address, http.server_name, http.host
     *
     * @deprecated Use server.address instead
     *
     * @example "example.com"
     */
    public const NET_HOST_NAME = 'net.host.name';

    /**
     * Server port number.
     *
     * Attribute: `net.host.port`
     *
     * Type: int
     *
     * Contains PII: false
     *
     * Defined in OTEL: Yes
     *
     * Aliases: server.port
     *
     * @deprecated Use server.port instead
     *
     * @example 1337
     */
    public const NET_HOST_PORT = 'net.host.port';

    /**
     * Peer address of the network connection - IP address or Unix domain socket name.
     *
     * Attribute: `net.peer.ip`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * Aliases: network.peer.address, net.sock.peer.addr
     *
     * @deprecated Use network.peer.address instead
     *
     * @example "192.168.0.1"
     */
    public const NET_PEER_IP = 'net.peer.ip';

    /**
     * Server domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.
     *
     * Attribute: `net.peer.name`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * @deprecated Use server.address instead - Deprecated, use server.address on client spans and client.address on server spans.
     *
     * @example "example.com"
     */
    public const NET_PEER_NAME = 'net.peer.name';

    /**
     * Peer port number.
     *
     * Attribute: `net.peer.port`
     *
     * Type: int
     *
     * Contains PII: false
     *
     * Defined in OTEL: Yes
     *
     * @deprecated Use server.port instead - Deprecated, use server.port on client spans and client.port on server spans.
     *
     * @example 1337
     */
    public const NET_PEER_PORT = 'net.peer.port';

    /**
     * OSI application layer or non-OSI equivalent.
     *
     * Attribute: `net.protocol.name`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * Aliases: network.protocol.name
     *
     * @deprecated Use network.protocol.name instead
     *
     * @example "http"
     */
    public const NET_PROTOCOL_NAME = 'net.protocol.name';

    /**
     * The actual version of the protocol used for network communication.
     *
     * Attribute: `net.protocol.version`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * Aliases: network.protocol.version, http.flavor
     *
     * @deprecated Use network.protocol.version instead
     *
     * @example "1.1"
     */
    public const NET_PROTOCOL_VERSION = 'net.protocol.version';

    /**
     * OSI transport and network layer
     *
     * Attribute: `net.sock.family`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * @deprecated Use network.transport instead - Deprecated, use network.transport and network.type.
     *
     * @example "inet"
     */
    public const NET_SOCK_FAMILY = 'net.sock.family';

    /**
     * Local address of the network connection mapping to Unix domain socket name.
     *
     * Attribute: `net.sock.host.addr`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * Aliases: network.local.address, net.host.ip
     *
     * @deprecated Use network.local.address instead
     *
     * @example "/var/my.sock"
     */
    public const NET_SOCK_HOST_ADDR = 'net.sock.host.addr';

    /**
     * Local port number of the network connection.
     *
     * Attribute: `net.sock.host.port`
     *
     * Type: int
     *
     * Contains PII: false
     *
     * Defined in OTEL: Yes
     *
     * Aliases: network.local.port
     *
     * @deprecated Use network.local.port instead
     *
     * @example 8080
     */
    public const NET_SOCK_HOST_PORT = 'net.sock.host.port';

    /**
     * Peer address of the network connection - IP address
     *
     * Attribute: `net.sock.peer.addr`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * Aliases: network.peer.address, net.peer.ip
     *
     * @deprecated Use network.peer.address instead
     *
     * @example "192.168.0.1"
     */
    public const NET_SOCK_PEER_ADDR = 'net.sock.peer.addr';

    /**
     * Peer address of the network connection - Unix domain socket name
     *
     * Attribute: `net.sock.peer.name`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * @deprecated - Deprecated from OTEL, no replacement at this time
     *
     * @example "/var/my.sock"
     */
    public const NET_SOCK_PEER_NAME = 'net.sock.peer.name';

    /**
     * Peer port number of the network connection.
     *
     * Attribute: `net.sock.peer.port`
     *
     * Type: int
     *
     * Contains PII: false
     *
     * Defined in OTEL: Yes
     *
     * @deprecated Use network.peer.port instead
     *
     * @example 8080
     */
    public const NET_SOCK_PEER_PORT = 'net.sock.peer.port';

    /**
     * OSI transport layer or inter-process communication method.
     *
     * Attribute: `net.transport`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * Aliases: network.transport
     *
     * @deprecated Use network.transport instead
     *
     * @example "tcp"
     */
    public const NET_TRANSPORT = 'net.transport';

    /**
     * Local address of the network connection - IP address or Unix domain socket name.
     *
     * Attribute: `network.local.address`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * Aliases: net.host.ip, net.sock.host.addr
     *
     * @example "10.1.2.80"
     */
    public const NETWORK_LOCAL_ADDRESS = 'network.local.address';

    /**
     * Local port number of the network connection.
     *
     * Attribute: `network.local.port`
     *
     * Type: int
     *
     * Contains PII: false
     *
     * Defined in OTEL: Yes
     *
     * Aliases: net.sock.host.port
     *
     * @example 65400
     */
    public const NETWORK_LOCAL_PORT = 'network.local.port';

    /**
     * Peer address of the network connection - IP address or Unix domain socket name.
     *
     * Attribute: `network.peer.address`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * Aliases: net.peer.ip, net.sock.peer.addr
     *
     * @example "10.1.2.80"
     */
    public const NETWORK_PEER_ADDRESS = 'network.peer.address';

    /**
     * Peer port number of the network connection.
     *
     * Attribute: `network.peer.port`
     *
     * Type: int
     *
     * Contains PII: false
     *
     * Defined in OTEL: Yes
     *
     * @example 65400
     */
    public const NETWORK_PEER_PORT = 'network.peer.port';

    /**
     * OSI application layer or non-OSI equivalent.
     *
     * Attribute: `network.protocol.name`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * Aliases: net.protocol.name
     *
     * @example "http"
     */
    public const NETWORK_PROTOCOL_NAME = 'network.protocol.name';

    /**
     * The actual version of the protocol used for network communication.
     *
     * Attribute: `network.protocol.version`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * Aliases: http.flavor, net.protocol.version
     *
     * @example "1.1"
     */
    public const NETWORK_PROTOCOL_VERSION = 'network.protocol.version';

    /**
     * OSI transport layer or inter-process communication method.
     *
     * Attribute: `network.transport`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * Aliases: net.transport
     *
     * @example "tcp"
     */
    public const NETWORK_TRANSPORT = 'network.transport';

    /**
     * OSI network layer or non-OSI equivalent.
     *
     * Attribute: `network.type`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * @example "ipv4"
     */
    public const NETWORK_TYPE = 'network.type';

    /**
     * The build ID of the operating system.
     *
     * Attribute: `os.build_id`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * @example "1234567890"
     */
    public const OS_BUILD_ID = 'os.build_id';

    /**
     * Human readable (not intended to be parsed) OS version information, like e.g. reported by ver or lsb_release -a commands.
     *
     * Attribute: `os.description`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * @example "Ubuntu 18.04.1 LTS"
     */
    public const OS_DESCRIPTION = 'os.description';

    /**
     * Human readable operating system name.
     *
     * Attribute: `os.name`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * @example "Ubuntu"
     */
    public const OS_NAME = 'os.name';

    /**
     * The operating system type.
     *
     * Attribute: `os.type`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * @example "linux"
     */
    public const OS_TYPE = 'os.type';

    /**
     * The version of the operating system.
     *
     * Attribute: `os.version`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * @example "18.04.2"
     */
    public const OS_VERSION = 'os.version';

    /**
     * The name of the instrumentation scope - (InstrumentationScope.Name in OTLP).
     *
     * Attribute: `otel.scope.name`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * @example "io.opentelemetry.contrib.mongodb"
     */
    public const OTEL_SCOPE_NAME = 'otel.scope.name';

    /**
     * The version of the instrumentation scope - (InstrumentationScope.Version in OTLP).
     *
     * Attribute: `otel.scope.version`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * @example "2.4.5"
     */
    public const OTEL_SCOPE_VERSION = 'otel.scope.version';

    /**
     * Name of the code, either “OK” or “ERROR”. MUST NOT be set if the status code is UNSET.
     *
     * Attribute: `otel.status_code`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * @example "OK"
     */
    public const OTEL_STATUS_CODE = 'otel.status_code';

    /**
     * Description of the Status if it has a value, otherwise not set.
     *
     * Attribute: `otel.status_description`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * @example "resource not found"
     */
    public const OTEL_STATUS_DESCRIPTION = 'otel.status_description';

    /**
     * Decoded parameters extracted from a URL path. Usually added by client-side routing frameworks like vue-router.
     *
     * Attribute: `params.<key>`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: No
     *
     * Has Dynamic Suffix: true
     *
     * Aliases: url.path.parameter.<key>
     *
     * @example "params.id='123'"
     */
    public const PARAMS_KEY = 'params.<key>';

    /**
     * Also used by mobile SDKs to indicate the previous route in the application.
     *
     * Attribute: `previous_route`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: No
     *
     * @example "HomeScreen"
     */
    public const PREVIOUS_ROUTE = 'previous_route';

    /**
     * The name of the executable that started the process.
     *
     * Attribute: `process.executable.name`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * @example "getsentry"
     */
    public const PROCESS_EXECUTABLE_NAME = 'process.executable.name';

    /**
     * The process ID of the running process.
     *
     * Attribute: `process.pid`
     *
     * Type: int
     *
     * Contains PII: false
     *
     * Defined in OTEL: Yes
     *
     * @example 12345
     */
    public const PROCESS_PID = 'process.pid';

    /**
     * An additional description about the runtime of the process, for example a specific vendor customization of the runtime environment. Equivalent to `raw_description` in the Sentry runtime context.
     *
     * Attribute: `process.runtime.description`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * @example "Eclipse OpenJ9 VM openj9-0.21.0"
     */
    public const PROCESS_RUNTIME_DESCRIPTION = 'process.runtime.description';

    /**
     * The name of the runtime. Equivalent to `name` in the Sentry runtime context.
     *
     * Attribute: `process.runtime.name`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * @example "node"
     */
    public const PROCESS_RUNTIME_NAME = 'process.runtime.name';

    /**
     * The version of the runtime of this process, as returned by the runtime without modification. Equivalent to `version` in the Sentry runtime context.
     *
     * Attribute: `process.runtime.version`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * @example "18.04.2"
     */
    public const PROCESS_RUNTIME_VERSION = 'process.runtime.version';

    /**
     * The id of the sentry profile.
     *
     * Attribute: `profile_id`
     *
     * Type: string
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * Aliases: sentry.profile_id
     *
     * @deprecated Use sentry.profile_id instead
     *
     * @example "123e4567e89b12d3a456426614174000"
     */
    public const PROFILE_ID = 'profile_id';

    /**
     * An item in a query string. Usually added by client-side routing frameworks like vue-router.
     *
     * Attribute: `query.<key>`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: No
     *
     * Has Dynamic Suffix: true
     *
     * @deprecated Use url.query instead - Instead of sending items individually in query.<key>, they should be sent all together with url.query.
     *
     * @example "query.id='123'"
     */
    public const QUERY_KEY = 'query.<key>';

    /**
     * The sentry release.
     *
     * Attribute: `release`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: No
     *
     * Aliases: sentry.release
     *
     * @deprecated Use sentry.release instead
     *
     * @example "production"
     */
    public const RELEASE = 'release';

    /**
     * Remix form data, <key> being the form data key, the value being the form data value.
     *
     * Attribute: `remix.action_form_data.<key>`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: No
     *
     * Has Dynamic Suffix: true
     *
     * @example "http.response.header.text='test'"
     */
    public const REMIX_ACTION_FORM_DATA_KEY = 'remix.action_form_data.<key>';

    /**
     * The id of the sentry replay.
     *
     * Attribute: `replay_id`
     *
     * Type: string
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * Aliases: sentry.replay_id
     *
     * @deprecated Use sentry.replay_id instead
     *
     * @example "123e4567e89b12d3a456426614174000"
     */
    public const REPLAY_ID = 'replay_id';

    /**
     * The render blocking status of the resource.
     *
     * Attribute: `resource.render_blocking_status`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: No
     *
     * @example "non-blocking"
     */
    public const RESOURCE_RENDER_BLOCKING_STATUS = 'resource.render_blocking_status';

    /**
     * The matched route, that is, the path template in the format used by the respective server framework. Also used by mobile SDKs to indicate the current route in the application.
     *
     * Attribute: `route`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: No
     *
     * Aliases: http.route
     *
     * @deprecated Use http.route instead
     *
     * @example "App\\Controller::indexAction"
     */
    public const ROUTE = 'route';

    /**
     * The numeric status code of the gRPC request.
     *
     * Attribute: `rpc.grpc.status_code`
     *
     * Type: int
     *
     * Contains PII: false
     *
     * Defined in OTEL: Yes
     *
     * @example 2
     */
    public const RPC_GRPC_STATUS_CODE = 'rpc.grpc.status_code';

    /**
     * The full (logical) name of the service being called, including its package name, if applicable.
     *
     * Attribute: `rpc.service`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * @example "myService.BestService"
     */
    public const RPC_SERVICE = 'rpc.service';

    /**
     * The environment from the dynamic sampling context.
     *
     * Attribute: `sentry._internal.dsc.environment`
     *
     * Type: string
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @example "prod"
     */
    public const SENTRY_INTERNAL_DSC_ENVIRONMENT = 'sentry._internal.dsc.environment';

    /**
     * The organization ID from the dynamic sampling context.
     *
     * Attribute: `sentry._internal.dsc.org_id`
     *
     * Type: string
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @example "1"
     */
    public const SENTRY_INTERNAL_DSC_ORG_ID = 'sentry._internal.dsc.org_id';

    /**
     * The public key from the dynamic sampling context.
     *
     * Attribute: `sentry._internal.dsc.public_key`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: No
     *
     * @example "c51734c603c4430eb57cb0a5728a479d"
     */
    public const SENTRY_INTERNAL_DSC_PUBLIC_KEY = 'sentry._internal.dsc.public_key';

    /**
     * The release identifier from the dynamic sampling context.
     *
     * Attribute: `sentry._internal.dsc.release`
     *
     * Type: string
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @example "frontend@e8211be71b214afab5b85de4b4c54be3714952bb"
     */
    public const SENTRY_INTERNAL_DSC_RELEASE = 'sentry._internal.dsc.release';

    /**
     * The random sampling value from the dynamic sampling context.
     *
     * Attribute: `sentry._internal.dsc.sample_rand`
     *
     * Type: string
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @example "0.8286147972820134"
     */
    public const SENTRY_INTERNAL_DSC_SAMPLE_RAND = 'sentry._internal.dsc.sample_rand';

    /**
     * The sample rate from the dynamic sampling context.
     *
     * Attribute: `sentry._internal.dsc.sample_rate`
     *
     * Type: string
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @example "1.0"
     */
    public const SENTRY_INTERNAL_DSC_SAMPLE_RATE = 'sentry._internal.dsc.sample_rate';

    /**
     * Whether the event was sampled according to the dynamic sampling context.
     *
     * Attribute: `sentry._internal.dsc.sampled`
     *
     * Type: bool
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @example true
     */
    public const SENTRY_INTERNAL_DSC_SAMPLED = 'sentry._internal.dsc.sampled';

    /**
     * The trace ID from the dynamic sampling context.
     *
     * Attribute: `sentry._internal.dsc.trace_id`
     *
     * Type: string
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @example "047372980460430cbc78d9779df33a46"
     */
    public const SENTRY_INTERNAL_DSC_TRACE_ID = 'sentry._internal.dsc.trace_id';

    /**
     * The transaction name from the dynamic sampling context.
     *
     * Attribute: `sentry._internal.dsc.transaction`
     *
     * Type: string
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @example "/issues/errors-outages/"
     */
    public const SENTRY_INTERNAL_DSC_TRANSACTION = 'sentry._internal.dsc.transaction';

    /**
     * The timestamp at which an envelope was received by Relay, in nanoseconds.
     *
     * Attribute: `sentry._internal.observed_timestamp_nanos`
     *
     * Type: string
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * Aliases: sentry.observed_timestamp_nanos
     *
     * @example "1544712660300000000"
     */
    public const SENTRY_INTERNAL_OBSERVED_TIMESTAMP_NANOS = 'sentry._internal.observed_timestamp_nanos';

    /**
     * A sentinel attribute on log events indicating whether the current Session Replay is being buffered (onErrorSampleRate).
     *
     * Attribute: `sentry._internal.replay_is_buffering`
     *
     * Type: bool
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @example true
     */
    public const SENTRY_INTERNAL_REPLAY_IS_BUFFERING = 'sentry._internal.replay_is_buffering';

    /**
     * The name of the browser.
     *
     * Attribute: `sentry.browser.name`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: No
     *
     * Aliases: browser.name
     *
     * @deprecated Use browser.name instead
     *
     * @example "Chrome"
     */
    public const SENTRY_BROWSER_NAME = 'sentry.browser.name';

    /**
     * The version of the browser.
     *
     * Attribute: `sentry.browser.version`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: No
     *
     * Aliases: browser.version
     *
     * @deprecated Use browser.version instead
     *
     * @example "120.0.6099.130"
     */
    public const SENTRY_BROWSER_VERSION = 'sentry.browser.version';

    /**
     * The reason why a span ended early.
     *
     * Attribute: `sentry.cancellation_reason`
     *
     * Type: string
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @example "document.hidden"
     */
    public const SENTRY_CANCELLATION_REASON = 'sentry.cancellation_reason';

    /**
     * Rate at which a span was sampled in the SDK.
     *
     * Attribute: `sentry.client_sample_rate`
     *
     * Type: float
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @example 0.5
     */
    public const SENTRY_CLIENT_SAMPLE_RATE = 'sentry.client_sample_rate';

    /**
     * The human-readable description of a span.
     *
     * Attribute: `sentry.description`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: No
     *
     * @example "index view query"
     */
    public const SENTRY_DESCRIPTION = 'sentry.description';

    /**
     * The sentry dist.
     *
     * Attribute: `sentry.dist`
     *
     * Type: string
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @example "1.0"
     */
    public const SENTRY_DIST = 'sentry.dist';

    /**
     * The sentry environment.
     *
     * Attribute: `sentry.environment`
     *
     * Type: string
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * Aliases: environment
     *
     * @example "production"
     */
    public const SENTRY_ENVIRONMENT = 'sentry.environment';

    /**
     * The exclusive time duration of the span.
     *
     * Attribute: `sentry.exclusive_time`
     *
     * Type: int
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @example 1234
     */
    public const SENTRY_EXCLUSIVE_TIME = 'sentry.exclusive_time';

    /**
     * If an http request was a prefetch request.
     *
     * Attribute: `sentry.http.prefetch`
     *
     * Type: bool
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @example true
     */
    public const SENTRY_HTTP_PREFETCH = 'sentry.http.prefetch';

    /**
     * The reason why an idle span ended early.
     *
     * Attribute: `sentry.idle_span_finish_reason`
     *
     * Type: string
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @example "idleTimeout"
     */
    public const SENTRY_IDLE_SPAN_FINISH_REASON = 'sentry.idle_span_finish_reason';

    /**
     * A parameter used in the message template. <key> can either be the number that represent the parameter's position in the template string (sentry.message.parameter.0, sentry.message.parameter.1, etc) or the parameter's name (sentry.message.parameter.item_id, sentry.message.parameter.user_id, etc)
     *
     * Attribute: `sentry.message.parameter.<key>`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: No
     *
     * @example "sentry.message.parameter.0='123'"
     */
    public const SENTRY_MESSAGE_PARAMETER_KEY = 'sentry.message.parameter.<key>';

    /**
     * The parameterized template string.
     *
     * Attribute: `sentry.message.template`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: No
     *
     * @example "Hello, {name}!"
     */
    public const SENTRY_MESSAGE_TEMPLATE = 'sentry.message.template';

    /**
     * A module that was loaded in the process. The key is the name of the module.
     *
     * Attribute: `sentry.module.<key>`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: No
     *
     * Has Dynamic Suffix: true
     *
     * @example "sentry.module.brianium/paratest='v7.7.0'"
     */
    public const SENTRY_MODULE_KEY = 'sentry.module.<key>';

    /**
     * A parameterized route for a function in Next.js that contributes to Server-Side Rendering. Should be present on spans that track such functions when the file location of the function is known.
     *
     * Attribute: `sentry.nextjs.ssr.function.route`
     *
     * Type: string
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @example "/posts/[id]/layout"
     */
    public const SENTRY_NEXTJS_SSR_FUNCTION_ROUTE = 'sentry.nextjs.ssr.function.route';

    /**
     * A descriptor for a for a function in Next.js that contributes to Server-Side Rendering. Should be present on spans that track such functions.
     *
     * Attribute: `sentry.nextjs.ssr.function.type`
     *
     * Type: string
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @example "generateMetadata"
     */
    public const SENTRY_NEXTJS_SSR_FUNCTION_TYPE = 'sentry.nextjs.ssr.function.type';

    /**
     * The timestamp at which an envelope was received by Relay, in nanoseconds.
     *
     * Attribute: `sentry.observed_timestamp_nanos`
     *
     * Type: string
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * Aliases: sentry._internal.observed_timestamp_nanos
     *
     * @deprecated Use sentry._internal.observed_timestamp_nanos instead
     *
     * @example "1544712660300000000"
     */
    public const SENTRY_OBSERVED_TIMESTAMP_NANOS = 'sentry.observed_timestamp_nanos';

    /**
     * The operation of a span.
     *
     * Attribute: `sentry.op`
     *
     * Type: string
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @example "http.client"
     */
    public const SENTRY_OP = 'sentry.op';

    /**
     * The origin of the instrumentation (e.g. span, log, etc.)
     *
     * Attribute: `sentry.origin`
     *
     * Type: string
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @example "auto.http.otel.fastify"
     */
    public const SENTRY_ORIGIN = 'sentry.origin';

    /**
     * The sdk platform that generated the event.
     *
     * Attribute: `sentry.platform`
     *
     * Type: string
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @example "php"
     */
    public const SENTRY_PLATFORM = 'sentry.platform';

    /**
     * The id of the sentry profile.
     *
     * Attribute: `sentry.profile_id`
     *
     * Type: string
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * Aliases: profile_id
     *
     * @example "123e4567e89b12d3a456426614174000"
     */
    public const SENTRY_PROFILE_ID = 'sentry.profile_id';

    /**
     * The sentry release.
     *
     * Attribute: `sentry.release`
     *
     * Type: string
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * Aliases: service.version, release
     *
     * @example "7.0.0"
     */
    public const SENTRY_RELEASE = 'sentry.release';

    /**
     * The id of the sentry replay.
     *
     * Attribute: `sentry.replay_id`
     *
     * Type: string
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * Aliases: replay_id
     *
     * @example "123e4567e89b12d3a456426614174000"
     */
    public const SENTRY_REPLAY_ID = 'sentry.replay_id';

    /**
     * A list of names identifying enabled integrations. The list shouldhave all enabled integrations, including default integrations. Defaultintegrations are included because different SDK releases may contain differentdefault integrations.
     *
     * Attribute: `sentry.sdk.integrations`
     *
     * Type: array<string>
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @example ["InboundFilters", "FunctionToString", "BrowserApiErrors", "Breadcrumbs"]
     */
    public const SENTRY_SDK_INTEGRATIONS = 'sentry.sdk.integrations';

    /**
     * The sentry sdk name.
     *
     * Attribute: `sentry.sdk.name`
     *
     * Type: string
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @example "@sentry/react"
     */
    public const SENTRY_SDK_NAME = 'sentry.sdk.name';

    /**
     * The sentry sdk version.
     *
     * Attribute: `sentry.sdk.version`
     *
     * Type: string
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @example "7.0.0"
     */
    public const SENTRY_SDK_VERSION = 'sentry.sdk.version';

    /**
     * The segment ID of a span
     *
     * Attribute: `sentry.segment.id`
     *
     * Type: string
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * Aliases: sentry.segment_id
     *
     * @example "051581bf3cb55c13"
     */
    public const SENTRY_SEGMENT_ID = 'sentry.segment.id';

    /**
     * The segment name of a span
     *
     * Attribute: `sentry.segment.name`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: No
     *
     * @example "GET /user"
     */
    public const SENTRY_SEGMENT_NAME = 'sentry.segment.name';

    /**
     * The segment ID of a span
     *
     * Attribute: `sentry.segment_id`
     *
     * Type: string
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * Aliases: sentry.segment.id
     *
     * @deprecated Use sentry.segment.id instead
     *
     * @example "051581bf3cb55c13"
     */
    public const _SENTRY_SEGMENT_ID = 'sentry.segment_id';

    /**
     * Rate at which a span was sampled in Relay.
     *
     * Attribute: `sentry.server_sample_rate`
     *
     * Type: float
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @example 0.5
     */
    public const SENTRY_SERVER_SAMPLE_RATE = 'sentry.server_sample_rate';

    /**
     * The source of a span, also referred to as transaction source.
     *
     * Attribute: `sentry.span.source`
     *
     * Type: string
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @example "route"
     */
    public const SENTRY_SPAN_SOURCE = 'sentry.span.source';

    /**
     * The span id of the span that was active when the log was collected. This should not be set if there was no active span.
     *
     * Attribute: `sentry.trace.parent_span_id`
     *
     * Type: string
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @example "b0e6f15b45c36b12"
     */
    public const SENTRY_TRACE_PARENT_SPAN_ID = 'sentry.trace.parent_span_id';

    /**
     * The sentry transaction (segment name).
     *
     * Attribute: `sentry.transaction`
     *
     * Type: string
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * Aliases: transaction
     *
     * @example "GET /"
     */
    public const SENTRY_TRANSACTION = 'sentry.transaction';

    /**
     * Server domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.
     *
     * Attribute: `server.address`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * Aliases: http.server_name, net.host.name, http.host
     *
     * @example "example.com"
     */
    public const SERVER_ADDRESS = 'server.address';

    /**
     * Server port number.
     *
     * Attribute: `server.port`
     *
     * Type: int
     *
     * Contains PII: false
     *
     * Defined in OTEL: Yes
     *
     * Aliases: net.host.port
     *
     * @example 1337
     */
    public const SERVER_PORT = 'server.port';

    /**
     * Logical name of the service.
     *
     * Attribute: `service.name`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * @example "omegastar"
     */
    public const SERVICE_NAME = 'service.name';

    /**
     * The version string of the service API or implementation. The format is not defined by these conventions.
     *
     * Attribute: `service.version`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * Aliases: sentry.release
     *
     * @example "5.0.0"
     */
    public const SERVICE_VERSION = 'service.version';

    /**
     * Current “managed” thread ID.
     *
     * Attribute: `thread.id`
     *
     * Type: int
     *
     * Contains PII: false
     *
     * Defined in OTEL: Yes
     *
     * @example 56
     */
    public const THREAD_ID = 'thread.id';

    /**
     * Current thread name.
     *
     * Attribute: `thread.name`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * @example "main"
     */
    public const THREAD_NAME = 'thread.name';

    /**
     * The sentry transaction (segment name).
     *
     * Attribute: `transaction`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: No
     *
     * Aliases: sentry.transaction
     *
     * @deprecated Use sentry.transaction instead
     *
     * @example "GET /"
     */
    public const TRANSACTION = 'transaction';

    /**
     * More granular type of the operation happening.
     *
     * Attribute: `type`
     *
     * Type: string
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @example "fetch"
     */
    public const TYPE = 'type';

    /**
     * The name of the associated component.
     *
     * Attribute: `ui.component_name`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: No
     *
     * @example "HomeButton"
     */
    public const UI_COMPONENT_NAME = 'ui.component_name';

    /**
     * Whether the span execution contributed to the TTFD (time to fully drawn) metric.
     *
     * Attribute: `ui.contributes_to_ttfd`
     *
     * Type: bool
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @example true
     */
    public const UI_CONTRIBUTES_TO_TTFD = 'ui.contributes_to_ttfd';

    /**
     * Whether the span execution contributed to the TTID (time to initial display) metric.
     *
     * Attribute: `ui.contributes_to_ttid`
     *
     * Type: bool
     *
     * Contains PII: false
     *
     * Defined in OTEL: No
     *
     * @example true
     */
    public const UI_CONTRIBUTES_TO_TTID = 'ui.contributes_to_ttid';

    /**
     * Server domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.
     *
     * Attribute: `url.domain`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * @example "example.com"
     */
    public const URL_DOMAIN = 'url.domain';

    /**
     * The fragments present in the URI. Note that this does not contain the leading # character, while the `http.fragment` attribute does.
     *
     * Attribute: `url.fragment`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * @example "details"
     */
    public const URL_FRAGMENT = 'url.fragment';

    /**
     * The URL of the resource that was fetched.
     *
     * Attribute: `url.full`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * Aliases: http.url, url
     *
     * @example "https://example.com/test?foo=bar#buzz"
     */
    public const URL_FULL = 'url.full';

    /**
     * The URI path component.
     *
     * Attribute: `url.path`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * @example "/foo"
     */
    public const URL_PATH = 'url.path';

    /**
     * Decoded parameters extracted from a URL path. Usually added by client-side routing frameworks like vue-router.
     *
     * Attribute: `url.path.parameter.<key>`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: No
     *
     * Has Dynamic Suffix: true
     *
     * Aliases: params.<key>
     *
     * @example "url.path.parameter.id='123'"
     */
    public const URL_PATH_PARAMETER_KEY = 'url.path.parameter.<key>';

    /**
     * Server port number.
     *
     * Attribute: `url.port`
     *
     * Type: int
     *
     * Contains PII: false
     *
     * Defined in OTEL: Yes
     *
     * @example 1337
     */
    public const URL_PORT = 'url.port';

    /**
     * The query string present in the URL. Note that this does not contain the leading ? character, while the `http.query` attribute does.
     *
     * Attribute: `url.query`
     *
     * Type: string
     *
     * Contains PII: maybe - Query string values can contain sensitive information. Clients should attempt to scrub parameters that might contain sensitive information.
     *
     * Defined in OTEL: Yes
     *
     * @example "foo=bar&bar=baz"
     */
    public const URL_QUERY = 'url.query';

    /**
     * The URI scheme component identifying the used protocol.
     *
     * Attribute: `url.scheme`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * Aliases: http.scheme
     *
     * @example "https"
     */
    public const URL_SCHEME = 'url.scheme';

    /**
     * The low-cardinality template of an absolute path reference.
     *
     * Attribute: `url.template`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * Aliases: http.route
     *
     * @example "/users/:id"
     */
    public const URL_TEMPLATE = 'url.template';

    /**
     * The URL of the resource that was fetched.
     *
     * Attribute: `url`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: No
     *
     * Aliases: url.full, http.url
     *
     * @deprecated Use url.full instead
     *
     * @example "https://example.com/test?foo=bar#buzz"
     */
    public const URL = 'url';

    /**
     * User email address.
     *
     * Attribute: `user.email`
     *
     * Type: string
     *
     * Contains PII: true
     *
     * Defined in OTEL: Yes
     *
     * @example "test@example.com"
     */
    public const USER_EMAIL = 'user.email';

    /**
     * User's full name.
     *
     * Attribute: `user.full_name`
     *
     * Type: string
     *
     * Contains PII: true
     *
     * Defined in OTEL: Yes
     *
     * @example "John Smith"
     */
    public const USER_FULL_NAME = 'user.full_name';

    /**
     * Human readable city name.
     *
     * Attribute: `user.geo.city`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: No
     *
     * @example "Toronto"
     */
    public const USER_GEO_CITY = 'user.geo.city';

    /**
     * Two-letter country code (ISO 3166-1 alpha-2).
     *
     * Attribute: `user.geo.country_code`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: No
     *
     * @example "CA"
     */
    public const USER_GEO_COUNTRY_CODE = 'user.geo.country_code';

    /**
     * Human readable region name or code.
     *
     * Attribute: `user.geo.region`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: No
     *
     * @example "Canada"
     */
    public const USER_GEO_REGION = 'user.geo.region';

    /**
     * Human readable subdivision name.
     *
     * Attribute: `user.geo.subdivision`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: No
     *
     * @example "Ontario"
     */
    public const USER_GEO_SUBDIVISION = 'user.geo.subdivision';

    /**
     * Unique user hash to correlate information for a user in anonymized form.
     *
     * Attribute: `user.hash`
     *
     * Type: string
     *
     * Contains PII: true
     *
     * Defined in OTEL: Yes
     *
     * @example "8ae4c2993e0f4f3b8b2d1b1f3b5e8f4d"
     */
    public const USER_HASH = 'user.hash';

    /**
     * Unique identifier of the user.
     *
     * Attribute: `user.id`
     *
     * Type: string
     *
     * Contains PII: true
     *
     * Defined in OTEL: Yes
     *
     * @example "S-1-5-21-202424912787-2692429404-2351956786-1000"
     */
    public const USER_ID = 'user.id';

    /**
     * The IP address of the user.
     *
     * Attribute: `user.ip_address`
     *
     * Type: string
     *
     * Contains PII: true
     *
     * Defined in OTEL: No
     *
     * @example "192.168.1.1"
     */
    public const USER_IP_ADDRESS = 'user.ip_address';

    /**
     * Short name or login/username of the user.
     *
     * Attribute: `user.name`
     *
     * Type: string
     *
     * Contains PII: true
     *
     * Defined in OTEL: Yes
     *
     * @example "j.smith"
     */
    public const USER_NAME = 'user.name';

    /**
     * Array of user roles at the time of the event.
     *
     * Attribute: `user.roles`
     *
     * Type: array<string>
     *
     * Contains PII: true
     *
     * Defined in OTEL: Yes
     *
     * @example ["admin", "editor"]
     */
    public const USER_ROLES = 'user.roles';

    /**
     * Value of the HTTP User-Agent header sent by the client.
     *
     * Attribute: `user_agent.original`
     *
     * Type: string
     *
     * Contains PII: maybe
     *
     * Defined in OTEL: Yes
     *
     * Aliases: http.user_agent
     *
     * @example "Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Mobile/15E148 Safari/604.1"
     */
    public const USER_AGENT_ORIGINAL = 'user_agent.original';

}
