// This is an auto-generated file. Do not edit!

// Path: model/attributes/ai/ai__citations.json

/**
 * References or sources cited by the AI model in its response. `ai.citations`
 *
 * Attribute Value Type: `Array<string>` {@link AI_CITATIONS_TYPE}
 *
 * Contains PII: true
 *
 * Attribute defined in OTEL: No
 *
 * @example ["Citation 1","Citation 2"]
 */
export const AI_CITATIONS = 'ai.citations';

/**
 * Type for {@link AI_CITATIONS} ai.citations
 */
export type AI_CITATIONS_TYPE = Array<string>;

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
 * @deprecated Use {@link GEN_AI_USAGE_OUTPUT_TOKENS} (gen_ai.usage.output_tokens) instead
 * @example 10
 */
export const AI_COMPLETION_TOKENS_USED = 'ai.completion_tokens.used';

/**
 * Type for {@link AI_COMPLETION_TOKENS_USED} ai.completion_tokens.used
 */
export type AI_COMPLETION_TOKENS_USED_TYPE = number;

// Path: model/attributes/ai/ai__documents.json

/**
 * Documents or content chunks used as context for the AI model. `ai.documents`
 *
 * Attribute Value Type: `Array<string>` {@link AI_DOCUMENTS_TYPE}
 *
 * Contains PII: true
 *
 * Attribute defined in OTEL: No
 *
 * @example ["document1.txt","document2.pdf"]
 */
export const AI_DOCUMENTS = 'ai.documents';

/**
 * Type for {@link AI_DOCUMENTS} ai.documents
 */
export type AI_DOCUMENTS_TYPE = Array<string>;

// Path: model/attributes/ai/ai__finish_reason.json

/**
 * The reason why the model stopped generating. `ai.finish_reason`
 *
 * Attribute Value Type: `string` {@link AI_FINISH_REASON_TYPE}
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: No
 *
 * Aliases: {@link GEN_AI_RESPONSE_FINISH_REASONS} `gen_ai.response.finish_reasons`
 *
 * @deprecated Use {@link GEN_AI_RESPONSE_FINISH_REASON} (gen_ai.response.finish_reason) instead
 * @example "COMPLETE"
 */
export const AI_FINISH_REASON = 'ai.finish_reason';

/**
 * Type for {@link AI_FINISH_REASON} ai.finish_reason
 */
export type AI_FINISH_REASON_TYPE = string;

// Path: model/attributes/ai/ai__frequency_penalty.json

/**
 * Used to reduce repetitiveness of generated tokens. The higher the value, the stronger a penalty is applied to previously present tokens, proportional to how many times they have already appeared in the prompt or prior generation. `ai.frequency_penalty`
 *
 * Attribute Value Type: `number` {@link AI_FREQUENCY_PENALTY_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * Aliases: {@link GEN_AI_REQUEST_FREQUENCY_PENALTY} `gen_ai.request.frequency_penalty`
 *
 * @deprecated Use {@link GEN_AI_REQUEST_FREQUENCY_PENALTY} (gen_ai.request.frequency_penalty) instead
 * @example 0.5
 */
export const AI_FREQUENCY_PENALTY = 'ai.frequency_penalty';

/**
 * Type for {@link AI_FREQUENCY_PENALTY} ai.frequency_penalty
 */
export type AI_FREQUENCY_PENALTY_TYPE = number;

// Path: model/attributes/ai/ai__function_call.json

/**
 * For an AI model call, the function that was called. This is deprecated for OpenAI, and replaced by tool_calls `ai.function_call`
 *
 * Attribute Value Type: `string` {@link AI_FUNCTION_CALL_TYPE}
 *
 * Contains PII: true
 *
 * Attribute defined in OTEL: No
 *
 * Aliases: {@link GEN_AI_TOOL_NAME} `gen_ai.tool.name`
 *
 * @deprecated Use {@link GEN_AI_TOOL_NAME} (gen_ai.tool.name) instead
 * @example "function_name"
 */
export const AI_FUNCTION_CALL = 'ai.function_call';

/**
 * Type for {@link AI_FUNCTION_CALL} ai.function_call
 */
export type AI_FUNCTION_CALL_TYPE = string;

// Path: model/attributes/ai/ai__generation_id.json

/**
 * Unique identifier for the completion. `ai.generation_id`
 *
 * Attribute Value Type: `string` {@link AI_GENERATION_ID_TYPE}
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: No
 *
 * Aliases: {@link GEN_AI_RESPONSE_ID} `gen_ai.response.id`
 *
 * @deprecated Use {@link GEN_AI_RESPONSE_ID} (gen_ai.response.id) instead
 * @example "gen_123abc"
 */
export const AI_GENERATION_ID = 'ai.generation_id';

/**
 * Type for {@link AI_GENERATION_ID} ai.generation_id
 */
export type AI_GENERATION_ID_TYPE = string;

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
 * Aliases: {@link GEN_AI_REQUEST_MESSAGES} `gen_ai.request.messages`
 *
 * @deprecated Use {@link GEN_AI_REQUEST_MESSAGES} (gen_ai.request.messages) instead
 * @example "[{\"role\": \"user\", \"message\": \"hello\"}]"
 */
export const AI_INPUT_MESSAGES = 'ai.input_messages';

/**
 * Type for {@link AI_INPUT_MESSAGES} ai.input_messages
 */
export type AI_INPUT_MESSAGES_TYPE = string;

// Path: model/attributes/ai/ai__is_search_required.json

/**
 * Boolean indicating if the model needs to perform a search. `ai.is_search_required`
 *
 * Attribute Value Type: `boolean` {@link AI_IS_SEARCH_REQUIRED_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example false
 */
export const AI_IS_SEARCH_REQUIRED = 'ai.is_search_required';

/**
 * Type for {@link AI_IS_SEARCH_REQUIRED} ai.is_search_required
 */
export type AI_IS_SEARCH_REQUIRED_TYPE = boolean;

// Path: model/attributes/ai/ai__metadata.json

/**
 * Extra metadata passed to an AI pipeline step. `ai.metadata`
 *
 * Attribute Value Type: `string` {@link AI_METADATA_TYPE}
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: No
 *
 * @example "{\"user_id\": 123, \"session_id\": \"abc123\"}"
 */
export const AI_METADATA = 'ai.metadata';

/**
 * Type for {@link AI_METADATA} ai.metadata
 */
export type AI_METADATA_TYPE = string;

// Path: model/attributes/ai/ai__model__provider.json

/**
 * The provider of the model. `ai.model.provider`
 *
 * Attribute Value Type: `string` {@link AI_MODEL_PROVIDER_TYPE}
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: No
 *
 * Aliases: {@link GEN_AI_SYSTEM} `gen_ai.system`
 *
 * @deprecated Use {@link GEN_AI_SYSTEM} (gen_ai.system) instead
 * @example "openai"
 */
export const AI_MODEL_PROVIDER = 'ai.model.provider';

/**
 * Type for {@link AI_MODEL_PROVIDER} ai.model.provider
 */
export type AI_MODEL_PROVIDER_TYPE = string;

// Path: model/attributes/ai/ai__model_id.json

/**
 * The vendor-specific ID of the model used. `ai.model_id`
 *
 * Attribute Value Type: `string` {@link AI_MODEL_ID_TYPE}
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: No
 *
 * Aliases: {@link GEN_AI_RESPONSE_MODEL} `gen_ai.response.model`
 *
 * @deprecated Use {@link GEN_AI_RESPONSE_MODEL} (gen_ai.response.model) instead
 * @example "gpt-4"
 */
export const AI_MODEL_ID = 'ai.model_id';

/**
 * Type for {@link AI_MODEL_ID} ai.model_id
 */
export type AI_MODEL_ID_TYPE = string;

// Path: model/attributes/ai/ai__pipeline__name.json

/**
 * The name of the AI pipeline. `ai.pipeline.name`
 *
 * Attribute Value Type: `string` {@link AI_PIPELINE_NAME_TYPE}
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: No
 *
 * Aliases: {@link GEN_AI_PIPELINE_NAME} `gen_ai.pipeline.name`
 *
 * @deprecated Use {@link GEN_AI_PIPELINE_NAME} (gen_ai.pipeline.name) instead
 * @example "Autofix Pipeline"
 */
export const AI_PIPELINE_NAME = 'ai.pipeline.name';

/**
 * Type for {@link AI_PIPELINE_NAME} ai.pipeline.name
 */
export type AI_PIPELINE_NAME_TYPE = string;

// Path: model/attributes/ai/ai__preamble.json

/**
 * For an AI model call, the preamble parameter. Preambles are a part of the prompt used to adjust the model's overall behavior and conversation style. `ai.preamble`
 *
 * Attribute Value Type: `string` {@link AI_PREAMBLE_TYPE}
 *
 * Contains PII: true
 *
 * Attribute defined in OTEL: No
 *
 * @example "You are now a clown."
 */
export const AI_PREAMBLE = 'ai.preamble';

/**
 * Type for {@link AI_PREAMBLE} ai.preamble
 */
export type AI_PREAMBLE_TYPE = string;

// Path: model/attributes/ai/ai__presence_penalty.json

/**
 * Used to reduce repetitiveness of generated tokens. Similar to frequency_penalty, except that this penalty is applied equally to all tokens that have already appeared, regardless of their exact frequencies. `ai.presence_penalty`
 *
 * Attribute Value Type: `number` {@link AI_PRESENCE_PENALTY_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * Aliases: {@link GEN_AI_REQUEST_PRESENCE_PENALTY} `gen_ai.request.presence_penalty`
 *
 * @deprecated Use {@link GEN_AI_REQUEST_PRESENCE_PENALTY} (gen_ai.request.presence_penalty) instead
 * @example 0.5
 */
export const AI_PRESENCE_PENALTY = 'ai.presence_penalty';

/**
 * Type for {@link AI_PRESENCE_PENALTY} ai.presence_penalty
 */
export type AI_PRESENCE_PENALTY_TYPE = number;

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
 * @deprecated Use {@link GEN_AI_USAGE_INPUT_TOKENS} (gen_ai.usage.input_tokens) instead
 * @example 20
 */
export const AI_PROMPT_TOKENS_USED = 'ai.prompt_tokens.used';

/**
 * Type for {@link AI_PROMPT_TOKENS_USED} ai.prompt_tokens.used
 */
export type AI_PROMPT_TOKENS_USED_TYPE = number;

// Path: model/attributes/ai/ai__raw_prompting.json

/**
 * When enabled, the user’s prompt will be sent to the model without any pre-processing. `ai.raw_prompting`
 *
 * Attribute Value Type: `boolean` {@link AI_RAW_PROMPTING_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example true
 */
export const AI_RAW_PROMPTING = 'ai.raw_prompting';

/**
 * Type for {@link AI_RAW_PROMPTING} ai.raw_prompting
 */
export type AI_RAW_PROMPTING_TYPE = boolean;

// Path: model/attributes/ai/ai__response_format.json

/**
 * For an AI model call, the format of the response `ai.response_format`
 *
 * Attribute Value Type: `string` {@link AI_RESPONSE_FORMAT_TYPE}
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: No
 *
 * @example "json_object"
 */
export const AI_RESPONSE_FORMAT = 'ai.response_format';

/**
 * Type for {@link AI_RESPONSE_FORMAT} ai.response_format
 */
export type AI_RESPONSE_FORMAT_TYPE = string;

// Path: model/attributes/ai/ai__responses.json

/**
 * The response messages sent back by the AI model. `ai.responses`
 *
 * Attribute Value Type: `Array<string>` {@link AI_RESPONSES_TYPE}
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: No
 *
 * @deprecated Use {@link GEN_AI_RESPONSE_TEXT} (gen_ai.response.text) instead
 * @example ["hello","world"]
 */
export const AI_RESPONSES = 'ai.responses';

/**
 * Type for {@link AI_RESPONSES} ai.responses
 */
export type AI_RESPONSES_TYPE = Array<string>;

// Path: model/attributes/ai/ai__search_queries.json

/**
 * Queries used to search for relevant context or documents. `ai.search_queries`
 *
 * Attribute Value Type: `Array<string>` {@link AI_SEARCH_QUERIES_TYPE}
 *
 * Contains PII: true
 *
 * Attribute defined in OTEL: No
 *
 * @example ["climate change effects","renewable energy"]
 */
export const AI_SEARCH_QUERIES = 'ai.search_queries';

/**
 * Type for {@link AI_SEARCH_QUERIES} ai.search_queries
 */
export type AI_SEARCH_QUERIES_TYPE = Array<string>;

// Path: model/attributes/ai/ai__search_results.json

/**
 * Results returned from search queries for context. `ai.search_results`
 *
 * Attribute Value Type: `Array<string>` {@link AI_SEARCH_RESULTS_TYPE}
 *
 * Contains PII: true
 *
 * Attribute defined in OTEL: No
 *
 * @example ["search_result_1, search_result_2"]
 */
export const AI_SEARCH_RESULTS = 'ai.search_results';

/**
 * Type for {@link AI_SEARCH_RESULTS} ai.search_results
 */
export type AI_SEARCH_RESULTS_TYPE = Array<string>;

// Path: model/attributes/ai/ai__seed.json

/**
 * The seed, ideally models given the same seed and same other parameters will produce the exact same output. `ai.seed`
 *
 * Attribute Value Type: `string` {@link AI_SEED_TYPE}
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: No
 *
 * Aliases: {@link GEN_AI_REQUEST_SEED} `gen_ai.request.seed`
 *
 * @deprecated Use {@link GEN_AI_REQUEST_SEED} (gen_ai.request.seed) instead
 * @example "1234567890"
 */
export const AI_SEED = 'ai.seed';

/**
 * Type for {@link AI_SEED} ai.seed
 */
export type AI_SEED_TYPE = string;

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
 * Aliases: {@link GEN_AI_RESPONSE_STREAMING} `gen_ai.response.streaming`
 *
 * @deprecated Use {@link GEN_AI_RESPONSE_STREAMING} (gen_ai.response.streaming) instead
 * @example true
 */
export const AI_STREAMING = 'ai.streaming';

/**
 * Type for {@link AI_STREAMING} ai.streaming
 */
export type AI_STREAMING_TYPE = boolean;

// Path: model/attributes/ai/ai__tags.json

/**
 * Tags that describe an AI pipeline step. `ai.tags`
 *
 * Attribute Value Type: `string` {@link AI_TAGS_TYPE}
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: No
 *
 * @example "{\"executed_function\": \"add_integers\"}"
 */
export const AI_TAGS = 'ai.tags';

/**
 * Type for {@link AI_TAGS} ai.tags
 */
export type AI_TAGS_TYPE = string;

// Path: model/attributes/ai/ai__temperature.json

/**
 * For an AI model call, the temperature parameter. Temperature essentially means how random the output will be. `ai.temperature`
 *
 * Attribute Value Type: `number` {@link AI_TEMPERATURE_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * Aliases: {@link GEN_AI_REQUEST_TEMPERATURE} `gen_ai.request.temperature`
 *
 * @deprecated Use {@link GEN_AI_REQUEST_TEMPERATURE} (gen_ai.request.temperature) instead
 * @example 0.1
 */
export const AI_TEMPERATURE = 'ai.temperature';

/**
 * Type for {@link AI_TEMPERATURE} ai.temperature
 */
export type AI_TEMPERATURE_TYPE = number;

// Path: model/attributes/ai/ai__texts.json

/**
 * Raw text inputs provided to the model. `ai.texts`
 *
 * Attribute Value Type: `Array<string>` {@link AI_TEXTS_TYPE}
 *
 * Contains PII: true
 *
 * Attribute defined in OTEL: No
 *
 * @example ["Hello, how are you?","What is the capital of France?"]
 */
export const AI_TEXTS = 'ai.texts';

/**
 * Type for {@link AI_TEXTS} ai.texts
 */
export type AI_TEXTS_TYPE = Array<string>;

// Path: model/attributes/ai/ai__tool_calls.json

/**
 * For an AI model call, the tool calls that were made. `ai.tool_calls`
 *
 * Attribute Value Type: `Array<string>` {@link AI_TOOL_CALLS_TYPE}
 *
 * Contains PII: true
 *
 * Attribute defined in OTEL: No
 *
 * @deprecated Use {@link GEN_AI_RESPONSE_TOOL_CALLS} (gen_ai.response.tool_calls) instead
 * @example ["tool_call_1","tool_call_2"]
 */
export const AI_TOOL_CALLS = 'ai.tool_calls';

/**
 * Type for {@link AI_TOOL_CALLS} ai.tool_calls
 */
export type AI_TOOL_CALLS_TYPE = Array<string>;

// Path: model/attributes/ai/ai__tools.json

/**
 * For an AI model call, the functions that are available `ai.tools`
 *
 * Attribute Value Type: `Array<string>` {@link AI_TOOLS_TYPE}
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: No
 *
 * @deprecated Use {@link GEN_AI_REQUEST_AVAILABLE_TOOLS} (gen_ai.request.available_tools) instead
 * @example ["function_1","function_2"]
 */
export const AI_TOOLS = 'ai.tools';

/**
 * Type for {@link AI_TOOLS} ai.tools
 */
export type AI_TOOLS_TYPE = Array<string>;

// Path: model/attributes/ai/ai__top_k.json

/**
 * Limits the model to only consider the K most likely next tokens, where K is an integer (e.g., top_k=20 means only the 20 highest probability tokens are considered). `ai.top_k`
 *
 * Attribute Value Type: `number` {@link AI_TOP_K_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * Aliases: {@link GEN_AI_REQUEST_TOP_K} `gen_ai.request.top_k`
 *
 * @deprecated Use {@link GEN_AI_REQUEST_TOP_K} (gen_ai.request.top_k) instead
 * @example 35
 */
export const AI_TOP_K = 'ai.top_k';

/**
 * Type for {@link AI_TOP_K} ai.top_k
 */
export type AI_TOP_K_TYPE = number;

// Path: model/attributes/ai/ai__top_p.json

/**
 * Limits the model to only consider tokens whose cumulative probability mass adds up to p, where p is a float between 0 and 1 (e.g., top_p=0.7 means only tokens that sum up to 70% of the probability mass are considered). `ai.top_p`
 *
 * Attribute Value Type: `number` {@link AI_TOP_P_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * Aliases: {@link GEN_AI_REQUEST_TOP_P} `gen_ai.request.top_p`
 *
 * @deprecated Use {@link GEN_AI_REQUEST_TOP_P} (gen_ai.request.top_p) instead
 * @example 0.7
 */
export const AI_TOP_P = 'ai.top_p';

/**
 * Type for {@link AI_TOP_P} ai.top_p
 */
export type AI_TOP_P_TYPE = number;

// Path: model/attributes/ai/ai__total_cost.json

/**
 * The total cost for the tokens used. `ai.total_cost`
 *
 * Attribute Value Type: `number` {@link AI_TOTAL_COST_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example 12.34
 */
export const AI_TOTAL_COST = 'ai.total_cost';

/**
 * Type for {@link AI_TOTAL_COST} ai.total_cost
 */
export type AI_TOTAL_COST_TYPE = number;

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
 * Aliases: {@link GEN_AI_USAGE_TOTAL_TOKENS} `gen_ai.usage.total_tokens`
 *
 * @deprecated Use {@link GEN_AI_USAGE_TOTAL_TOKENS} (gen_ai.usage.total_tokens) instead
 * @example 30
 */
export const AI_TOTAL_TOKENS_USED = 'ai.total_tokens.used';

/**
 * Type for {@link AI_TOTAL_TOKENS_USED} ai.total_tokens.used
 */
export type AI_TOTAL_TOKENS_USED_TYPE = number;

// Path: model/attributes/ai/ai__warnings.json

/**
 * Warning messages generated during model execution. `ai.warnings`
 *
 * Attribute Value Type: `Array<string>` {@link AI_WARNINGS_TYPE}
 *
 * Contains PII: true
 *
 * Attribute defined in OTEL: No
 *
 * @example ["Token limit exceeded"]
 */
export const AI_WARNINGS = 'ai.warnings';

/**
 * Type for {@link AI_WARNINGS} ai.warnings
 */
export type AI_WARNINGS_TYPE = Array<string>;

// Path: model/attributes/app_start_type.json

/**
 * Mobile app start variant. Either cold or warm. `app_start_type`
 *
 * Attribute Value Type: `string` {@link APP_START_TYPE_TYPE}
 *
 * Contains PII: maybe
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
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: No
 *
 * Aliases: {@link SENTRY_BROWSER_NAME} `sentry.browser.name`
 *
 * @example "Chrome"
 */
export const BROWSER_NAME = 'browser.name';

/**
 * Type for {@link BROWSER_NAME} browser.name
 */
export type BROWSER_NAME_TYPE = string;

// Path: model/attributes/browser/browser__report__type.json

/**
 * A browser report sent via reporting API.. `browser.report.type`
 *
 * Attribute Value Type: `string` {@link BROWSER_REPORT_TYPE_TYPE}
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: No
 *
 * @example "network-error"
 */
export const BROWSER_REPORT_TYPE = 'browser.report.type';

/**
 * Type for {@link BROWSER_REPORT_TYPE} browser.report.type
 */
export type BROWSER_REPORT_TYPE_TYPE = string;

// Path: model/attributes/browser/browser__script__invoker.json

/**
 * How a script was called in the browser. `browser.script.invoker`
 *
 * Attribute Value Type: `string` {@link BROWSER_SCRIPT_INVOKER_TYPE}
 *
 * Contains PII: maybe
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
 * Contains PII: maybe
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

// Path: model/attributes/browser/browser__version.json

/**
 * The version of the browser. `browser.version`
 *
 * Attribute Value Type: `string` {@link BROWSER_VERSION_TYPE}
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: No
 *
 * Aliases: {@link SENTRY_BROWSER_VERSION} `sentry.browser.version`
 *
 * @example "120.0.6099.130"
 */
export const BROWSER_VERSION = 'browser.version';

/**
 * Type for {@link BROWSER_VERSION} browser.version
 */
export type BROWSER_VERSION_TYPE = string;

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
 * Contains PII: maybe
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
 * Contains PII: maybe
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
 * Contains PII: true
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link HTTP_CLIENT_IP} `http.client_ip`
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
 * Contains PII: maybe
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
 * Contains PII: maybe
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
 * Aliases: {@link CODE_LINE_NUMBER} `code.line.number`
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
 * Contains PII: maybe
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
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: Yes
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
 * Contains PII: maybe
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
 * Contains PII: maybe
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
 * Contains PII: maybe
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
 * Contains PII: maybe
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

// Path: model/attributes/db/db__query__parameter__[key].json

/**
 * A query parameter used in db.query.text, with <key> being the parameter name, and the attribute value being a string representation of the parameter value. `db.query.parameter.<key>`
 *
 * Attribute Value Type: `string` {@link DB_QUERY_PARAMETER_KEY_TYPE}
 *
 * Contains PII: maybe
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
 * Contains PII: maybe
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
 * Contains PII: maybe
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
 * Contains PII: maybe
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
 * Contains PII: maybe
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
 * Contains PII: maybe
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
 * Contains PII: maybe
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

// Path: model/attributes/device/device__brand.json

/**
 * The brand of the device. `device.brand`
 *
 * Attribute Value Type: `string` {@link DEVICE_BRAND_TYPE}
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: No
 *
 * @example "Apple"
 */
export const DEVICE_BRAND = 'device.brand';

/**
 * Type for {@link DEVICE_BRAND} device.brand
 */
export type DEVICE_BRAND_TYPE = string;

// Path: model/attributes/device/device__family.json

/**
 * The family of the device. `device.family`
 *
 * Attribute Value Type: `string` {@link DEVICE_FAMILY_TYPE}
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: No
 *
 * @example "iPhone"
 */
export const DEVICE_FAMILY = 'device.family';

/**
 * Type for {@link DEVICE_FAMILY} device.family
 */
export type DEVICE_FAMILY_TYPE = string;

// Path: model/attributes/device/device__model.json

/**
 * The model of the device. `device.model`
 *
 * Attribute Value Type: `string` {@link DEVICE_MODEL_TYPE}
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: No
 *
 * @example "iPhone 15 Pro Max"
 */
export const DEVICE_MODEL = 'device.model';

/**
 * Type for {@link DEVICE_MODEL} device.model
 */
export type DEVICE_MODEL_TYPE = string;

// Path: model/attributes/environment.json

/**
 * The sentry environment. `environment`
 *
 * Attribute Value Type: `string` {@link ENVIRONMENT_TYPE}
 *
 * Contains PII: maybe
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
 * Contains PII: maybe
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

// Path: model/attributes/event/event__id.json

/**
 * The unique identifier for this event (log record) `event.id`
 *
 * Attribute Value Type: `number` {@link EVENT_ID_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example 1234567890
 */
export const EVENT_ID = 'event.id';

/**
 * Type for {@link EVENT_ID} event.id
 */
export type EVENT_ID_TYPE = number;

// Path: model/attributes/event/event__name.json

/**
 * The name that uniquely identifies this event (log record) `event.name`
 *
 * Attribute Value Type: `string` {@link EVENT_NAME_TYPE}
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: No
 *
 * @example "Process Payload"
 */
export const EVENT_NAME = 'event.name';

/**
 * Type for {@link EVENT_NAME} event.name
 */
export type EVENT_NAME_TYPE = string;

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
 * Contains PII: maybe
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
 * Contains PII: maybe
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
 * Contains PII: maybe
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
 * Contains PII: maybe
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
 * Contains PII: maybe
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
 * Contains PII: maybe
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

// Path: model/attributes/flag/flag__evaluation__[key].json

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
 * Contains PII: maybe
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

// Path: model/attributes/gen_ai/gen_ai__agent__name.json

/**
 * The name of the agent being used. `gen_ai.agent.name`
 *
 * Attribute Value Type: `string` {@link GEN_AI_AGENT_NAME_TYPE}
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "ResearchAssistant"
 */
export const GEN_AI_AGENT_NAME = 'gen_ai.agent.name';

/**
 * Type for {@link GEN_AI_AGENT_NAME} gen_ai.agent.name
 */
export type GEN_AI_AGENT_NAME_TYPE = string;

// Path: model/attributes/gen_ai/gen_ai__assistant__message.json

/**
 * The assistant message passed to the model. `gen_ai.assistant.message`
 *
 * Attribute Value Type: `string` {@link GEN_AI_ASSISTANT_MESSAGE_TYPE}
 *
 * Contains PII: true
 *
 * Attribute defined in OTEL: No
 *
 * @example "get_weather tool call"
 */
export const GEN_AI_ASSISTANT_MESSAGE = 'gen_ai.assistant.message';

/**
 * Type for {@link GEN_AI_ASSISTANT_MESSAGE} gen_ai.assistant.message
 */
export type GEN_AI_ASSISTANT_MESSAGE_TYPE = string;

// Path: model/attributes/gen_ai/gen_ai__choice.json

/**
 * The model's response message. `gen_ai.choice`
 *
 * Attribute Value Type: `string` {@link GEN_AI_CHOICE_TYPE}
 *
 * Contains PII: true
 *
 * Attribute defined in OTEL: No
 *
 * @example "The weather in Paris is rainy and overcast, with temperatures around 57°F"
 */
export const GEN_AI_CHOICE = 'gen_ai.choice';

/**
 * Type for {@link GEN_AI_CHOICE} gen_ai.choice
 */
export type GEN_AI_CHOICE_TYPE = string;

// Path: model/attributes/gen_ai/gen_ai__cost__input_tokens.json

/**
 * The cost of tokens used to process the AI input (prompt) in USD (without cached input tokens). `gen_ai.cost.input_tokens`
 *
 * Attribute Value Type: `number` {@link GEN_AI_COST_INPUT_TOKENS_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example 123.45
 */
export const GEN_AI_COST_INPUT_TOKENS = 'gen_ai.cost.input_tokens';

/**
 * Type for {@link GEN_AI_COST_INPUT_TOKENS} gen_ai.cost.input_tokens
 */
export type GEN_AI_COST_INPUT_TOKENS_TYPE = number;

// Path: model/attributes/gen_ai/gen_ai__cost__output_tokens.json

/**
 * The cost of tokens used for creating the AI output in USD (without reasoning tokens). `gen_ai.cost.output_tokens`
 *
 * Attribute Value Type: `number` {@link GEN_AI_COST_OUTPUT_TOKENS_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example 123.45
 */
export const GEN_AI_COST_OUTPUT_TOKENS = 'gen_ai.cost.output_tokens';

/**
 * Type for {@link GEN_AI_COST_OUTPUT_TOKENS} gen_ai.cost.output_tokens
 */
export type GEN_AI_COST_OUTPUT_TOKENS_TYPE = number;

// Path: model/attributes/gen_ai/gen_ai__cost__total_tokens.json

/**
 * The total cost for the tokens used. `gen_ai.cost.total_tokens`
 *
 * Attribute Value Type: `number` {@link GEN_AI_COST_TOTAL_TOKENS_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example 12.34
 */
export const GEN_AI_COST_TOTAL_TOKENS = 'gen_ai.cost.total_tokens';

/**
 * Type for {@link GEN_AI_COST_TOTAL_TOKENS} gen_ai.cost.total_tokens
 */
export type GEN_AI_COST_TOTAL_TOKENS_TYPE = number;

// Path: model/attributes/gen_ai/gen_ai__operation__name.json

/**
 * The name of the operation being performed. `gen_ai.operation.name`
 *
 * Attribute Value Type: `string` {@link GEN_AI_OPERATION_NAME_TYPE}
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "chat"
 */
export const GEN_AI_OPERATION_NAME = 'gen_ai.operation.name';

/**
 * Type for {@link GEN_AI_OPERATION_NAME} gen_ai.operation.name
 */
export type GEN_AI_OPERATION_NAME_TYPE = string;

// Path: model/attributes/gen_ai/gen_ai__operation__type.json

/**
 * The type of AI operation. Must be one of 'agent', 'ai_client', 'tool', 'handoff', 'guardrail'. Makes querying for spans in the UI easier. `gen_ai.operation.type`
 *
 * Attribute Value Type: `string` {@link GEN_AI_OPERATION_TYPE_TYPE}
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: No
 *
 * @example "tool"
 */
export const GEN_AI_OPERATION_TYPE = 'gen_ai.operation.type';

/**
 * Type for {@link GEN_AI_OPERATION_TYPE} gen_ai.operation.type
 */
export type GEN_AI_OPERATION_TYPE_TYPE = string;

// Path: model/attributes/gen_ai/gen_ai__pipeline__name.json

/**
 * Name of the AI pipeline or chain being executed. `gen_ai.pipeline.name`
 *
 * Attribute Value Type: `string` {@link GEN_AI_PIPELINE_NAME_TYPE}
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: No
 *
 * Aliases: {@link AI_PIPELINE_NAME} `ai.pipeline.name`
 *
 * @example "Autofix Pipeline"
 */
export const GEN_AI_PIPELINE_NAME = 'gen_ai.pipeline.name';

/**
 * Type for {@link GEN_AI_PIPELINE_NAME} gen_ai.pipeline.name
 */
export type GEN_AI_PIPELINE_NAME_TYPE = string;

// Path: model/attributes/gen_ai/gen_ai__prompt.json

/**
 * The input messages sent to the model `gen_ai.prompt`
 *
 * Attribute Value Type: `string` {@link GEN_AI_PROMPT_TYPE}
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: Yes
 *
 * @deprecated  - Deprecated from OTEL, use gen_ai.input.messages with the new format instead.
 * @example "[{\"role\": \"user\", \"message\": \"hello\"}]"
 */
export const GEN_AI_PROMPT = 'gen_ai.prompt';

/**
 * Type for {@link GEN_AI_PROMPT} gen_ai.prompt
 */
export type GEN_AI_PROMPT_TYPE = string;

// Path: model/attributes/gen_ai/gen_ai__request__available_tools.json

/**
 * The available tools for the model. It has to be a stringified version of an array of objects. `gen_ai.request.available_tools`
 *
 * Attribute Value Type: `string` {@link GEN_AI_REQUEST_AVAILABLE_TOOLS_TYPE}
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: No
 *
 * @example "[{\"name\": \"get_weather\", \"description\": \"Get the weather for a given location\"}, {\"name\": \"get_news\", \"description\": \"Get the news for a given topic\"}]"
 */
export const GEN_AI_REQUEST_AVAILABLE_TOOLS = 'gen_ai.request.available_tools';

/**
 * Type for {@link GEN_AI_REQUEST_AVAILABLE_TOOLS} gen_ai.request.available_tools
 */
export type GEN_AI_REQUEST_AVAILABLE_TOOLS_TYPE = string;

// Path: model/attributes/gen_ai/gen_ai__request__frequency_penalty.json

/**
 * Used to reduce repetitiveness of generated tokens. The higher the value, the stronger a penalty is applied to previously present tokens, proportional to how many times they have already appeared in the prompt or prior generation. `gen_ai.request.frequency_penalty`
 *
 * Attribute Value Type: `number` {@link GEN_AI_REQUEST_FREQUENCY_PENALTY_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link AI_FREQUENCY_PENALTY} `ai.frequency_penalty`
 *
 * @example 0.5
 */
export const GEN_AI_REQUEST_FREQUENCY_PENALTY = 'gen_ai.request.frequency_penalty';

/**
 * Type for {@link GEN_AI_REQUEST_FREQUENCY_PENALTY} gen_ai.request.frequency_penalty
 */
export type GEN_AI_REQUEST_FREQUENCY_PENALTY_TYPE = number;

// Path: model/attributes/gen_ai/gen_ai__request__max_tokens.json

/**
 * The maximum number of tokens to generate in the response. `gen_ai.request.max_tokens`
 *
 * Attribute Value Type: `number` {@link GEN_AI_REQUEST_MAX_TOKENS_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * @example 2048
 */
export const GEN_AI_REQUEST_MAX_TOKENS = 'gen_ai.request.max_tokens';

/**
 * Type for {@link GEN_AI_REQUEST_MAX_TOKENS} gen_ai.request.max_tokens
 */
export type GEN_AI_REQUEST_MAX_TOKENS_TYPE = number;

// Path: model/attributes/gen_ai/gen_ai__request__messages.json

/**
 * The messages passed to the model. It has to be a stringified version of an array of objects. The `role` attribute of each object must be `"user"`, `"assistant"`, `"tool"`, or `"system"`. For messages of the role `"tool"`, the `content` can be a string or an arbitrary object with information about the tool call. For other messages the `content` can be either a string or a list of objects in the format `{type: "text", text:"..."}`. `gen_ai.request.messages`
 *
 * Attribute Value Type: `string` {@link GEN_AI_REQUEST_MESSAGES_TYPE}
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: No
 *
 * Aliases: {@link AI_INPUT_MESSAGES} `ai.input_messages`
 *
 * @example "[{\"role\": \"system\", \"content\": \"Generate a random number.\"}, {\"role\": \"user\", \"content\": [{\"text\": \"Generate a random number between 0 and 10.\", \"type\": \"text\"}]}, {\"role\": \"tool\", \"content\": {\"toolCallId\": \"1\", \"toolName\": \"Weather\", \"output\": \"rainy\"}}]"
 */
export const GEN_AI_REQUEST_MESSAGES = 'gen_ai.request.messages';

/**
 * Type for {@link GEN_AI_REQUEST_MESSAGES} gen_ai.request.messages
 */
export type GEN_AI_REQUEST_MESSAGES_TYPE = string;

// Path: model/attributes/gen_ai/gen_ai__request__model.json

/**
 * The model identifier being used for the request. `gen_ai.request.model`
 *
 * Attribute Value Type: `string` {@link GEN_AI_REQUEST_MODEL_TYPE}
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "gpt-4-turbo-preview"
 */
export const GEN_AI_REQUEST_MODEL = 'gen_ai.request.model';

/**
 * Type for {@link GEN_AI_REQUEST_MODEL} gen_ai.request.model
 */
export type GEN_AI_REQUEST_MODEL_TYPE = string;

// Path: model/attributes/gen_ai/gen_ai__request__presence_penalty.json

/**
 * Used to reduce repetitiveness of generated tokens. Similar to frequency_penalty, except that this penalty is applied equally to all tokens that have already appeared, regardless of their exact frequencies. `gen_ai.request.presence_penalty`
 *
 * Attribute Value Type: `number` {@link GEN_AI_REQUEST_PRESENCE_PENALTY_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link AI_PRESENCE_PENALTY} `ai.presence_penalty`
 *
 * @example 0.5
 */
export const GEN_AI_REQUEST_PRESENCE_PENALTY = 'gen_ai.request.presence_penalty';

/**
 * Type for {@link GEN_AI_REQUEST_PRESENCE_PENALTY} gen_ai.request.presence_penalty
 */
export type GEN_AI_REQUEST_PRESENCE_PENALTY_TYPE = number;

// Path: model/attributes/gen_ai/gen_ai__request__seed.json

/**
 * The seed, ideally models given the same seed and same other parameters will produce the exact same output. `gen_ai.request.seed`
 *
 * Attribute Value Type: `string` {@link GEN_AI_REQUEST_SEED_TYPE}
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link AI_SEED} `ai.seed`
 *
 * @example "1234567890"
 */
export const GEN_AI_REQUEST_SEED = 'gen_ai.request.seed';

/**
 * Type for {@link GEN_AI_REQUEST_SEED} gen_ai.request.seed
 */
export type GEN_AI_REQUEST_SEED_TYPE = string;

// Path: model/attributes/gen_ai/gen_ai__request__temperature.json

/**
 * For an AI model call, the temperature parameter. Temperature essentially means how random the output will be. `gen_ai.request.temperature`
 *
 * Attribute Value Type: `number` {@link GEN_AI_REQUEST_TEMPERATURE_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link AI_TEMPERATURE} `ai.temperature`
 *
 * @example 0.1
 */
export const GEN_AI_REQUEST_TEMPERATURE = 'gen_ai.request.temperature';

/**
 * Type for {@link GEN_AI_REQUEST_TEMPERATURE} gen_ai.request.temperature
 */
export type GEN_AI_REQUEST_TEMPERATURE_TYPE = number;

// Path: model/attributes/gen_ai/gen_ai__request__top_k.json

/**
 * Limits the model to only consider the K most likely next tokens, where K is an integer (e.g., top_k=20 means only the 20 highest probability tokens are considered). `gen_ai.request.top_k`
 *
 * Attribute Value Type: `number` {@link GEN_AI_REQUEST_TOP_K_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link AI_TOP_K} `ai.top_k`
 *
 * @example 35
 */
export const GEN_AI_REQUEST_TOP_K = 'gen_ai.request.top_k';

/**
 * Type for {@link GEN_AI_REQUEST_TOP_K} gen_ai.request.top_k
 */
export type GEN_AI_REQUEST_TOP_K_TYPE = number;

// Path: model/attributes/gen_ai/gen_ai__request__top_p.json

/**
 * Limits the model to only consider tokens whose cumulative probability mass adds up to p, where p is a float between 0 and 1 (e.g., top_p=0.7 means only tokens that sum up to 70% of the probability mass are considered). `gen_ai.request.top_p`
 *
 * Attribute Value Type: `number` {@link GEN_AI_REQUEST_TOP_P_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link AI_TOP_P} `ai.top_p`
 *
 * @example 0.7
 */
export const GEN_AI_REQUEST_TOP_P = 'gen_ai.request.top_p';

/**
 * Type for {@link GEN_AI_REQUEST_TOP_P} gen_ai.request.top_p
 */
export type GEN_AI_REQUEST_TOP_P_TYPE = number;

// Path: model/attributes/gen_ai/gen_ai__response__finish_reasons.json

/**
 * The reason why the model stopped generating. `gen_ai.response.finish_reasons`
 *
 * Attribute Value Type: `string` {@link GEN_AI_RESPONSE_FINISH_REASONS_TYPE}
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link AI_FINISH_REASON} `ai.finish_reason`
 *
 * @example "COMPLETE"
 */
export const GEN_AI_RESPONSE_FINISH_REASONS = 'gen_ai.response.finish_reasons';

/**
 * Type for {@link GEN_AI_RESPONSE_FINISH_REASONS} gen_ai.response.finish_reasons
 */
export type GEN_AI_RESPONSE_FINISH_REASONS_TYPE = string;

// Path: model/attributes/gen_ai/gen_ai__response__id.json

/**
 * Unique identifier for the completion. `gen_ai.response.id`
 *
 * Attribute Value Type: `string` {@link GEN_AI_RESPONSE_ID_TYPE}
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link AI_GENERATION_ID} `ai.generation_id`
 *
 * @example "gen_123abc"
 */
export const GEN_AI_RESPONSE_ID = 'gen_ai.response.id';

/**
 * Type for {@link GEN_AI_RESPONSE_ID} gen_ai.response.id
 */
export type GEN_AI_RESPONSE_ID_TYPE = string;

// Path: model/attributes/gen_ai/gen_ai__response__model.json

/**
 * The vendor-specific ID of the model used. `gen_ai.response.model`
 *
 * Attribute Value Type: `string` {@link GEN_AI_RESPONSE_MODEL_TYPE}
 *
 * Contains PII: maybe
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

// Path: model/attributes/gen_ai/gen_ai__response__streaming.json

/**
 * Whether or not the AI model call's response was streamed back asynchronously `gen_ai.response.streaming`
 *
 * Attribute Value Type: `boolean` {@link GEN_AI_RESPONSE_STREAMING_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * Aliases: {@link AI_STREAMING} `ai.streaming`
 *
 * @example true
 */
export const GEN_AI_RESPONSE_STREAMING = 'gen_ai.response.streaming';

/**
 * Type for {@link GEN_AI_RESPONSE_STREAMING} gen_ai.response.streaming
 */
export type GEN_AI_RESPONSE_STREAMING_TYPE = boolean;

// Path: model/attributes/gen_ai/gen_ai__response__text.json

/**
 * The model's response text messages. It has to be a stringified version of an array of response text messages. `gen_ai.response.text`
 *
 * Attribute Value Type: `string` {@link GEN_AI_RESPONSE_TEXT_TYPE}
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: No
 *
 * @example "[\"The weather in Paris is rainy and overcast, with temperatures around 57°F\", \"The weather in London is sunny and warm, with temperatures around 65°F\"]"
 */
export const GEN_AI_RESPONSE_TEXT = 'gen_ai.response.text';

/**
 * Type for {@link GEN_AI_RESPONSE_TEXT} gen_ai.response.text
 */
export type GEN_AI_RESPONSE_TEXT_TYPE = string;

// Path: model/attributes/gen_ai/gen_ai__response__tokens_per_second.json

/**
 * The total output tokens per seconds throughput `gen_ai.response.tokens_per_second`
 *
 * Attribute Value Type: `number` {@link GEN_AI_RESPONSE_TOKENS_PER_SECOND_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example 12345.67
 */
export const GEN_AI_RESPONSE_TOKENS_PER_SECOND = 'gen_ai.response.tokens_per_second';

/**
 * Type for {@link GEN_AI_RESPONSE_TOKENS_PER_SECOND} gen_ai.response.tokens_per_second
 */
export type GEN_AI_RESPONSE_TOKENS_PER_SECOND_TYPE = number;

// Path: model/attributes/gen_ai/gen_ai__response__tool_calls.json

/**
 * The tool calls in the model's response. It has to be a stringified version of an array of objects. `gen_ai.response.tool_calls`
 *
 * Attribute Value Type: `string` {@link GEN_AI_RESPONSE_TOOL_CALLS_TYPE}
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: No
 *
 * @example "[{\"name\": \"get_weather\", \"arguments\": {\"location\": \"Paris\"}}]"
 */
export const GEN_AI_RESPONSE_TOOL_CALLS = 'gen_ai.response.tool_calls';

/**
 * Type for {@link GEN_AI_RESPONSE_TOOL_CALLS} gen_ai.response.tool_calls
 */
export type GEN_AI_RESPONSE_TOOL_CALLS_TYPE = string;

// Path: model/attributes/gen_ai/gen_ai__system.json

/**
 * The provider of the model. `gen_ai.system`
 *
 * Attribute Value Type: `string` {@link GEN_AI_SYSTEM_TYPE}
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link AI_MODEL_PROVIDER} `ai.model.provider`
 *
 * @example "openai"
 */
export const GEN_AI_SYSTEM = 'gen_ai.system';

/**
 * Type for {@link GEN_AI_SYSTEM} gen_ai.system
 */
export type GEN_AI_SYSTEM_TYPE = string;

// Path: model/attributes/gen_ai/gen_ai__system__message.json

/**
 * The system instructions passed to the model. `gen_ai.system.message`
 *
 * Attribute Value Type: `string` {@link GEN_AI_SYSTEM_MESSAGE_TYPE}
 *
 * Contains PII: true
 *
 * Attribute defined in OTEL: No
 *
 * @example "You are a helpful assistant"
 */
export const GEN_AI_SYSTEM_MESSAGE = 'gen_ai.system.message';

/**
 * Type for {@link GEN_AI_SYSTEM_MESSAGE} gen_ai.system.message
 */
export type GEN_AI_SYSTEM_MESSAGE_TYPE = string;

// Path: model/attributes/gen_ai/gen_ai__tool__description.json

/**
 * The description of the tool being used. `gen_ai.tool.description`
 *
 * Attribute Value Type: `string` {@link GEN_AI_TOOL_DESCRIPTION_TYPE}
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "Searches the web for current information about a topic"
 */
export const GEN_AI_TOOL_DESCRIPTION = 'gen_ai.tool.description';

/**
 * Type for {@link GEN_AI_TOOL_DESCRIPTION} gen_ai.tool.description
 */
export type GEN_AI_TOOL_DESCRIPTION_TYPE = string;

// Path: model/attributes/gen_ai/gen_ai__tool__input.json

/**
 * The input of the tool being used. It has to be a stringified version of the input to the tool. `gen_ai.tool.input`
 *
 * Attribute Value Type: `string` {@link GEN_AI_TOOL_INPUT_TYPE}
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: No
 *
 * @example "{\"location\": \"Paris\"}"
 */
export const GEN_AI_TOOL_INPUT = 'gen_ai.tool.input';

/**
 * Type for {@link GEN_AI_TOOL_INPUT} gen_ai.tool.input
 */
export type GEN_AI_TOOL_INPUT_TYPE = string;

// Path: model/attributes/gen_ai/gen_ai__tool__message.json

/**
 * The response from a tool or function call passed to the model. `gen_ai.tool.message`
 *
 * Attribute Value Type: `string` {@link GEN_AI_TOOL_MESSAGE_TYPE}
 *
 * Contains PII: true
 *
 * Attribute defined in OTEL: No
 *
 * @example "rainy, 57°F"
 */
export const GEN_AI_TOOL_MESSAGE = 'gen_ai.tool.message';

/**
 * Type for {@link GEN_AI_TOOL_MESSAGE} gen_ai.tool.message
 */
export type GEN_AI_TOOL_MESSAGE_TYPE = string;

// Path: model/attributes/gen_ai/gen_ai__tool__name.json

/**
 * Name of the tool utilized by the agent. `gen_ai.tool.name`
 *
 * Attribute Value Type: `string` {@link GEN_AI_TOOL_NAME_TYPE}
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link AI_FUNCTION_CALL} `ai.function_call`
 *
 * @example "Flights"
 */
export const GEN_AI_TOOL_NAME = 'gen_ai.tool.name';

/**
 * Type for {@link GEN_AI_TOOL_NAME} gen_ai.tool.name
 */
export type GEN_AI_TOOL_NAME_TYPE = string;

// Path: model/attributes/gen_ai/gen_ai__tool__output.json

/**
 * The output of the tool being used. It has to be a stringified version of the output of the tool. `gen_ai.tool.output`
 *
 * Attribute Value Type: `string` {@link GEN_AI_TOOL_OUTPUT_TYPE}
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: No
 *
 * @example "rainy, 57°F"
 */
export const GEN_AI_TOOL_OUTPUT = 'gen_ai.tool.output';

/**
 * Type for {@link GEN_AI_TOOL_OUTPUT} gen_ai.tool.output
 */
export type GEN_AI_TOOL_OUTPUT_TYPE = string;

// Path: model/attributes/gen_ai/gen_ai__tool__type.json

/**
 * The type of tool being used. `gen_ai.tool.type`
 *
 * Attribute Value Type: `string` {@link GEN_AI_TOOL_TYPE_TYPE}
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "function"
 */
export const GEN_AI_TOOL_TYPE = 'gen_ai.tool.type';

/**
 * Type for {@link GEN_AI_TOOL_TYPE} gen_ai.tool.type
 */
export type GEN_AI_TOOL_TYPE_TYPE = string;

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
 * The number of tokens used to process the AI input (prompt) without cached input tokens. `gen_ai.usage.input_tokens`
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

// Path: model/attributes/gen_ai/gen_ai__usage__input_tokens__cached.json

/**
 * The number of cached tokens used to process the AI input (prompt). `gen_ai.usage.input_tokens.cached`
 *
 * Attribute Value Type: `number` {@link GEN_AI_USAGE_INPUT_TOKENS_CACHED_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example 50
 */
export const GEN_AI_USAGE_INPUT_TOKENS_CACHED = 'gen_ai.usage.input_tokens.cached';

/**
 * Type for {@link GEN_AI_USAGE_INPUT_TOKENS_CACHED} gen_ai.usage.input_tokens.cached
 */
export type GEN_AI_USAGE_INPUT_TOKENS_CACHED_TYPE = number;

// Path: model/attributes/gen_ai/gen_ai__usage__output_tokens.json

/**
 * The number of tokens used for creating the AI output (without reasoning tokens). `gen_ai.usage.output_tokens`
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

// Path: model/attributes/gen_ai/gen_ai__usage__output_tokens__reasoning.json

/**
 * The number of tokens used for reasoning to create the AI output. `gen_ai.usage.output_tokens.reasoning`
 *
 * Attribute Value Type: `number` {@link GEN_AI_USAGE_OUTPUT_TOKENS_REASONING_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example 75
 */
export const GEN_AI_USAGE_OUTPUT_TOKENS_REASONING = 'gen_ai.usage.output_tokens.reasoning';

/**
 * Type for {@link GEN_AI_USAGE_OUTPUT_TOKENS_REASONING} gen_ai.usage.output_tokens.reasoning
 */
export type GEN_AI_USAGE_OUTPUT_TOKENS_REASONING_TYPE = number;

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

// Path: model/attributes/gen_ai/gen_ai__usage__total_cost.json

/**
 * The total cost for the tokens used. `gen_ai.usage.total_cost`
 *
 * Attribute Value Type: `number` {@link GEN_AI_USAGE_TOTAL_COST_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @deprecated Use {@link GEN_AI_COST_TOTAL_TOKENS} (gen_ai.cost.total_tokens) instead
 * @example 12.34
 */
export const GEN_AI_USAGE_TOTAL_COST = 'gen_ai.usage.total_cost';

/**
 * Type for {@link GEN_AI_USAGE_TOTAL_COST} gen_ai.usage.total_cost
 */
export type GEN_AI_USAGE_TOTAL_COST_TYPE = number;

// Path: model/attributes/gen_ai/gen_ai__usage__total_tokens.json

/**
 * The total number of tokens used to process the prompt. (input tokens plus output todkens) `gen_ai.usage.total_tokens`
 *
 * Attribute Value Type: `number` {@link GEN_AI_USAGE_TOTAL_TOKENS_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * Aliases: {@link AI_TOTAL_TOKENS_USED} `ai.total_tokens.used`
 *
 * @example 20
 */
export const GEN_AI_USAGE_TOTAL_TOKENS = 'gen_ai.usage.total_tokens';

/**
 * Type for {@link GEN_AI_USAGE_TOTAL_TOKENS} gen_ai.usage.total_tokens
 */
export type GEN_AI_USAGE_TOTAL_TOKENS_TYPE = number;

// Path: model/attributes/gen_ai/gen_ai__user__message.json

/**
 * The user message passed to the model. `gen_ai.user.message`
 *
 * Attribute Value Type: `string` {@link GEN_AI_USER_MESSAGE_TYPE}
 *
 * Contains PII: true
 *
 * Attribute defined in OTEL: No
 *
 * @example "What's the weather in Paris?"
 */
export const GEN_AI_USER_MESSAGE = 'gen_ai.user.message';

/**
 * Type for {@link GEN_AI_USER_MESSAGE} gen_ai.user.message
 */
export type GEN_AI_USER_MESSAGE_TYPE = string;

// Path: model/attributes/graphql/graphql__operation__name.json

/**
 * The name of the operation being executed. `graphql.operation.name`
 *
 * Attribute Value Type: `string` {@link GRAPHQL_OPERATION_NAME_TYPE}
 *
 * Contains PII: maybe
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
 * Contains PII: maybe
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
 * Contains PII: true
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link CLIENT_ADDRESS} `client.address`
 *
 * @deprecated Use {@link CLIENT_ADDRESS} (client.address) instead
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
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link NETWORK_PROTOCOL_VERSION} `network.protocol.version`, {@link NET_PROTOCOL_VERSION} `net.protocol.version`
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
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link SERVER_ADDRESS} `server.address`, {@link CLIENT_ADDRESS} `client.address`, {@link HTTP_SERVER_NAME} `http.server_name`, {@link NET_HOST_NAME} `net.host.name`
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
 * Contains PII: maybe
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
 * @example 1732829555.111
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
 * @example 1732829555.15
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
 * @example 1732829555.201
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
 * @example 1732829555.322
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
 * @example 1732829555.389
 */
export const HTTP_REQUEST_FETCH_START = 'http.request.fetch_start';

/**
 * Type for {@link HTTP_REQUEST_FETCH_START} http.request.fetch_start
 */
export type HTTP_REQUEST_FETCH_START_TYPE = number;

// Path: model/attributes/http/http__request__header__[key].json

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
 * Contains PII: maybe
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

// Path: model/attributes/http/http__request__redirect_end.json

/**
 * The UNIX timestamp representing the timestamp immediately after receiving the last byte of the response of the last redirect `http.request.redirect_end`
 *
 * Attribute Value Type: `number` {@link HTTP_REQUEST_REDIRECT_END_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example 1732829558.502
 */
export const HTTP_REQUEST_REDIRECT_END = 'http.request.redirect_end';

/**
 * Type for {@link HTTP_REQUEST_REDIRECT_END} http.request.redirect_end
 */
export type HTTP_REQUEST_REDIRECT_END_TYPE = number;

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
 * @example 1732829555.495
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
 * @example 1732829555.51
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
 * @example 1732829555.89
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
 * @example 1732829555.7
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
 * @example 1732829555.73
 */
export const HTTP_REQUEST_SECURE_CONNECTION_START = 'http.request.secure_connection_start';

/**
 * Type for {@link HTTP_REQUEST_SECURE_CONNECTION_START} http.request.secure_connection_start
 */
export type HTTP_REQUEST_SECURE_CONNECTION_START_TYPE = number;

// Path: model/attributes/http/http__request__time_to_first_byte.json

/**
 * The time in seconds from the browser's timeorigin to when the first byte of the request's response was received. See https://web.dev/articles/ttfb#measure-resource-requests `http.request.time_to_first_byte`
 *
 * Attribute Value Type: `number` {@link HTTP_REQUEST_TIME_TO_FIRST_BYTE_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example 1.032
 */
export const HTTP_REQUEST_TIME_TO_FIRST_BYTE = 'http.request.time_to_first_byte';

/**
 * Type for {@link HTTP_REQUEST_TIME_TO_FIRST_BYTE} http.request.time_to_first_byte
 */
export type HTTP_REQUEST_TIME_TO_FIRST_BYTE_TYPE = number;

// Path: model/attributes/http/http__request__worker_start.json

/**
 * The UNIX timestamp representing the timestamp immediately before dispatching the FetchEvent if a Service Worker thread is already running, or immediately before starting the Service Worker thread if it is not already running. `http.request.worker_start`
 *
 * Attribute Value Type: `number` {@link HTTP_REQUEST_WORKER_START_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example 1732829553.68
 */
export const HTTP_REQUEST_WORKER_START = 'http.request.worker_start';

/**
 * Type for {@link HTTP_REQUEST_WORKER_START} http.request.worker_start
 */
export type HTTP_REQUEST_WORKER_START_TYPE = number;

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
 * Aliases: {@link HTTP_RESPONSE_CONTENT_LENGTH} `http.response_content_length`, {@link HTTP_RESPONSE_HEADER_CONTENT_LENGTH} `http.response.header.content-length`
 *
 * @example 123
 */
export const HTTP_RESPONSE_BODY_SIZE = 'http.response.body.size';

/**
 * Type for {@link HTTP_RESPONSE_BODY_SIZE} http.response.body.size
 */
export type HTTP_RESPONSE_BODY_SIZE_TYPE = number;

// Path: model/attributes/http/http__response__header__[key].json

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
 * Contains PII: maybe
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
 * Aliases: {@link HTTP_RESPONSE_BODY_SIZE} `http.response.body.size`, {@link HTTP_RESPONSE_HEADER_CONTENT_LENGTH} `http.response.header.content-length`
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
 * Contains PII: maybe
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
 * Contains PII: maybe
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
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link SERVER_ADDRESS} `server.address`, {@link NET_HOST_NAME} `net.host.name`, {@link HTTP_HOST} `http.host`
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
 * Aliases: {@link URL_FULL} `url.full`, {@link URL} `url`
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
 * Contains PII: maybe
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
 * Contains PII: maybe
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
 * Contains PII: maybe
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
 * Contains PII: maybe
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
 * Contains PII: maybe
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
 * Contains PII: maybe
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
 * Contains PII: maybe
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
 * Contains PII: maybe
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
 * Contains PII: maybe
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
 * Contains PII: maybe
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
 * Contains PII: maybe
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
 * Contains PII: maybe
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
 * Contains PII: maybe
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

// Path: model/attributes/messaging/messaging__operation__type.json

/**
 * A string identifying the type of the messaging operation `messaging.operation.type`
 *
 * Attribute Value Type: `string` {@link MESSAGING_OPERATION_TYPE_TYPE}
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: Yes
 *
 * @example "create"
 */
export const MESSAGING_OPERATION_TYPE = 'messaging.operation.type';

/**
 * Type for {@link MESSAGING_OPERATION_TYPE} messaging.operation.type
 */
export type MESSAGING_OPERATION_TYPE_TYPE = string;

// Path: model/attributes/messaging/messaging__system.json

/**
 * The messaging system as identified by the client instrumentation. `messaging.system`
 *
 * Attribute Value Type: `string` {@link MESSAGING_SYSTEM_TYPE}
 *
 * Contains PII: maybe
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
 * Contains PII: maybe
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
 * Contains PII: maybe
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

// Path: model/attributes/nel/nel__elapsed_time.json

/**
 * The elapsed number of milliseconds between the start of the resource fetch and when it was completed or aborted by the user agent. `nel.elapsed_time`
 *
 * Attribute Value Type: `number` {@link NEL_ELAPSED_TIME_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example 100
 */
export const NEL_ELAPSED_TIME = 'nel.elapsed_time';

/**
 * Type for {@link NEL_ELAPSED_TIME} nel.elapsed_time
 */
export type NEL_ELAPSED_TIME_TYPE = number;

// Path: model/attributes/nel/nel__phase.json

/**
 * If request failed, the phase of its network error. If request succeeded, "application". `nel.phase`
 *
 * Attribute Value Type: `string` {@link NEL_PHASE_TYPE}
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: No
 *
 * @example "application"
 */
export const NEL_PHASE = 'nel.phase';

/**
 * Type for {@link NEL_PHASE} nel.phase
 */
export type NEL_PHASE_TYPE = string;

// Path: model/attributes/nel/nel__referrer.json

/**
 * request's referrer, as determined by the referrer policy associated with its client. `nel.referrer`
 *
 * Attribute Value Type: `string` {@link NEL_REFERRER_TYPE}
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: No
 *
 * @example "https://example.com/foo?bar=baz"
 */
export const NEL_REFERRER = 'nel.referrer';

/**
 * Type for {@link NEL_REFERRER} nel.referrer
 */
export type NEL_REFERRER_TYPE = string;

// Path: model/attributes/nel/nel__sampling_function.json

/**
 * The sampling function used to determine if the request should be sampled. `nel.sampling_function`
 *
 * Attribute Value Type: `number` {@link NEL_SAMPLING_FUNCTION_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example 0.5
 */
export const NEL_SAMPLING_FUNCTION = 'nel.sampling_function';

/**
 * Type for {@link NEL_SAMPLING_FUNCTION} nel.sampling_function
 */
export type NEL_SAMPLING_FUNCTION_TYPE = number;

// Path: model/attributes/nel/nel__type.json

/**
 * If request failed, the type of its network error. If request succeeded, "ok". `nel.type`
 *
 * Attribute Value Type: `string` {@link NEL_TYPE_TYPE}
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: No
 *
 * @example "dns.unreachable"
 */
export const NEL_TYPE = 'nel.type';

/**
 * Type for {@link NEL_TYPE} nel.type
 */
export type NEL_TYPE_TYPE = string;

// Path: model/attributes/net/net__host__ip.json

/**
 * Local address of the network connection - IP address or Unix domain socket name. `net.host.ip`
 *
 * Attribute Value Type: `string` {@link NET_HOST_IP_TYPE}
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link NETWORK_LOCAL_ADDRESS} `network.local.address`, {@link NET_SOCK_HOST_ADDR} `net.sock.host.addr`
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
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link SERVER_ADDRESS} `server.address`, {@link HTTP_SERVER_NAME} `http.server_name`, {@link HTTP_HOST} `http.host`
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
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link NETWORK_PEER_ADDRESS} `network.peer.address`, {@link NET_SOCK_PEER_ADDR} `net.sock.peer.addr`
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
 * Contains PII: maybe
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
 * Contains PII: maybe
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
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link NETWORK_PROTOCOL_VERSION} `network.protocol.version`, {@link HTTP_FLAVOR} `http.flavor`
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
 * Contains PII: maybe
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
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link NETWORK_LOCAL_ADDRESS} `network.local.address`, {@link NET_HOST_IP} `net.host.ip`
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
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link NETWORK_PEER_ADDRESS} `network.peer.address`, {@link NET_PEER_IP} `net.peer.ip`
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
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: Yes
 *
 * @deprecated  - Deprecated from OTEL, no replacement at this time
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
 * Contains PII: maybe
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
 * Contains PII: maybe
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
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link NET_PEER_IP} `net.peer.ip`, {@link NET_SOCK_PEER_ADDR} `net.sock.peer.addr`
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
 * Contains PII: maybe
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
 * Contains PII: maybe
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
 * Contains PII: maybe
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
 * Contains PII: maybe
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
 * Contains PII: maybe
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
 * Contains PII: maybe
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
 * Contains PII: maybe
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
 * Contains PII: maybe
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
 * Contains PII: maybe
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
 * Contains PII: maybe
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
 * Contains PII: maybe
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
 * Contains PII: maybe
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
 * Contains PII: maybe
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

// Path: model/attributes/params/params__[key].json

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
 * Contains PII: maybe
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
 * Contains PII: maybe
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
 * Contains PII: maybe
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
 * Contains PII: maybe
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
 * Contains PII: maybe
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

// Path: model/attributes/query/query__[key].json

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
 * Contains PII: maybe
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

// Path: model/attributes/remix/remix__action_form_data__[key].json

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
 * Contains PII: maybe
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
 * Contains PII: maybe
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
 * Contains PII: maybe
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

// Path: model/attributes/sentry/sentry___internal__dsc__environment.json

/**
 * The environment from the dynamic sampling context. `sentry._internal.dsc.environment`
 *
 * Attribute Value Type: `string` {@link SENTRY_INTERNAL_DSC_ENVIRONMENT_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example "prod"
 */
export const SENTRY_INTERNAL_DSC_ENVIRONMENT = 'sentry._internal.dsc.environment';

/**
 * Type for {@link SENTRY_INTERNAL_DSC_ENVIRONMENT} sentry._internal.dsc.environment
 */
export type SENTRY_INTERNAL_DSC_ENVIRONMENT_TYPE = string;

// Path: model/attributes/sentry/sentry___internal__dsc__org_id.json

/**
 * The organization ID from the dynamic sampling context. `sentry._internal.dsc.org_id`
 *
 * Attribute Value Type: `string` {@link SENTRY_INTERNAL_DSC_ORG_ID_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example "1"
 */
export const SENTRY_INTERNAL_DSC_ORG_ID = 'sentry._internal.dsc.org_id';

/**
 * Type for {@link SENTRY_INTERNAL_DSC_ORG_ID} sentry._internal.dsc.org_id
 */
export type SENTRY_INTERNAL_DSC_ORG_ID_TYPE = string;

// Path: model/attributes/sentry/sentry___internal__dsc__public_key.json

/**
 * The public key from the dynamic sampling context. `sentry._internal.dsc.public_key`
 *
 * Attribute Value Type: `string` {@link SENTRY_INTERNAL_DSC_PUBLIC_KEY_TYPE}
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: No
 *
 * @example "c51734c603c4430eb57cb0a5728a479d"
 */
export const SENTRY_INTERNAL_DSC_PUBLIC_KEY = 'sentry._internal.dsc.public_key';

/**
 * Type for {@link SENTRY_INTERNAL_DSC_PUBLIC_KEY} sentry._internal.dsc.public_key
 */
export type SENTRY_INTERNAL_DSC_PUBLIC_KEY_TYPE = string;

// Path: model/attributes/sentry/sentry___internal__dsc__release.json

/**
 * The release identifier from the dynamic sampling context. `sentry._internal.dsc.release`
 *
 * Attribute Value Type: `string` {@link SENTRY_INTERNAL_DSC_RELEASE_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example "frontend@e8211be71b214afab5b85de4b4c54be3714952bb"
 */
export const SENTRY_INTERNAL_DSC_RELEASE = 'sentry._internal.dsc.release';

/**
 * Type for {@link SENTRY_INTERNAL_DSC_RELEASE} sentry._internal.dsc.release
 */
export type SENTRY_INTERNAL_DSC_RELEASE_TYPE = string;

// Path: model/attributes/sentry/sentry___internal__dsc__sample_rand.json

/**
 * The random sampling value from the dynamic sampling context. `sentry._internal.dsc.sample_rand`
 *
 * Attribute Value Type: `string` {@link SENTRY_INTERNAL_DSC_SAMPLE_RAND_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example "0.8286147972820134"
 */
export const SENTRY_INTERNAL_DSC_SAMPLE_RAND = 'sentry._internal.dsc.sample_rand';

/**
 * Type for {@link SENTRY_INTERNAL_DSC_SAMPLE_RAND} sentry._internal.dsc.sample_rand
 */
export type SENTRY_INTERNAL_DSC_SAMPLE_RAND_TYPE = string;

// Path: model/attributes/sentry/sentry___internal__dsc__sample_rate.json

/**
 * The sample rate from the dynamic sampling context. `sentry._internal.dsc.sample_rate`
 *
 * Attribute Value Type: `string` {@link SENTRY_INTERNAL_DSC_SAMPLE_RATE_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example "1.0"
 */
export const SENTRY_INTERNAL_DSC_SAMPLE_RATE = 'sentry._internal.dsc.sample_rate';

/**
 * Type for {@link SENTRY_INTERNAL_DSC_SAMPLE_RATE} sentry._internal.dsc.sample_rate
 */
export type SENTRY_INTERNAL_DSC_SAMPLE_RATE_TYPE = string;

// Path: model/attributes/sentry/sentry___internal__dsc__sampled.json

/**
 * Whether the event was sampled according to the dynamic sampling context. `sentry._internal.dsc.sampled`
 *
 * Attribute Value Type: `boolean` {@link SENTRY_INTERNAL_DSC_SAMPLED_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example true
 */
export const SENTRY_INTERNAL_DSC_SAMPLED = 'sentry._internal.dsc.sampled';

/**
 * Type for {@link SENTRY_INTERNAL_DSC_SAMPLED} sentry._internal.dsc.sampled
 */
export type SENTRY_INTERNAL_DSC_SAMPLED_TYPE = boolean;

// Path: model/attributes/sentry/sentry___internal__dsc__trace_id.json

/**
 * The trace ID from the dynamic sampling context. `sentry._internal.dsc.trace_id`
 *
 * Attribute Value Type: `string` {@link SENTRY_INTERNAL_DSC_TRACE_ID_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example "047372980460430cbc78d9779df33a46"
 */
export const SENTRY_INTERNAL_DSC_TRACE_ID = 'sentry._internal.dsc.trace_id';

/**
 * Type for {@link SENTRY_INTERNAL_DSC_TRACE_ID} sentry._internal.dsc.trace_id
 */
export type SENTRY_INTERNAL_DSC_TRACE_ID_TYPE = string;

// Path: model/attributes/sentry/sentry___internal__dsc__transaction.json

/**
 * The transaction name from the dynamic sampling context. `sentry._internal.dsc.transaction`
 *
 * Attribute Value Type: `string` {@link SENTRY_INTERNAL_DSC_TRANSACTION_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example "/issues/errors-outages/"
 */
export const SENTRY_INTERNAL_DSC_TRANSACTION = 'sentry._internal.dsc.transaction';

/**
 * Type for {@link SENTRY_INTERNAL_DSC_TRANSACTION} sentry._internal.dsc.transaction
 */
export type SENTRY_INTERNAL_DSC_TRANSACTION_TYPE = string;

// Path: model/attributes/sentry/sentry___internal__observed_timestamp_nanos.json

/**
 * The timestamp at which an envelope was received by Relay, in nanoseconds. `sentry._internal.observed_timestamp_nanos`
 *
 * Attribute Value Type: `string` {@link SENTRY_INTERNAL_OBSERVED_TIMESTAMP_NANOS_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * Aliases: {@link SENTRY_OBSERVED_TIMESTAMP_NANOS} `sentry.observed_timestamp_nanos`
 *
 * @example "1544712660300000000"
 */
export const SENTRY_INTERNAL_OBSERVED_TIMESTAMP_NANOS = 'sentry._internal.observed_timestamp_nanos';

/**
 * Type for {@link SENTRY_INTERNAL_OBSERVED_TIMESTAMP_NANOS} sentry._internal.observed_timestamp_nanos
 */
export type SENTRY_INTERNAL_OBSERVED_TIMESTAMP_NANOS_TYPE = string;

// Path: model/attributes/sentry/sentry___internal__replay_is_buffering.json

/**
 * A sentinel attribute on log events indicating whether the current Session Replay is being buffered (onErrorSampleRate). `sentry._internal.replay_is_buffering`
 *
 * Attribute Value Type: `boolean` {@link SENTRY_INTERNAL_REPLAY_IS_BUFFERING_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example true
 */
export const SENTRY_INTERNAL_REPLAY_IS_BUFFERING = 'sentry._internal.replay_is_buffering';

/**
 * Type for {@link SENTRY_INTERNAL_REPLAY_IS_BUFFERING} sentry._internal.replay_is_buffering
 */
export type SENTRY_INTERNAL_REPLAY_IS_BUFFERING_TYPE = boolean;

// Path: model/attributes/sentry/sentry__browser__name.json

/**
 * The name of the browser. `sentry.browser.name`
 *
 * Attribute Value Type: `string` {@link SENTRY_BROWSER_NAME_TYPE}
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: No
 *
 * Aliases: {@link BROWSER_NAME} `browser.name`
 *
 * @deprecated Use {@link BROWSER_NAME} (browser.name) instead
 * @example "Chrome"
 */
export const SENTRY_BROWSER_NAME = 'sentry.browser.name';

/**
 * Type for {@link SENTRY_BROWSER_NAME} sentry.browser.name
 */
export type SENTRY_BROWSER_NAME_TYPE = string;

// Path: model/attributes/sentry/sentry__browser__version.json

/**
 * The version of the browser. `sentry.browser.version`
 *
 * Attribute Value Type: `string` {@link SENTRY_BROWSER_VERSION_TYPE}
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: No
 *
 * Aliases: {@link BROWSER_VERSION} `browser.version`
 *
 * @deprecated Use {@link BROWSER_VERSION} (browser.version) instead
 * @example "120.0.6099.130"
 */
export const SENTRY_BROWSER_VERSION = 'sentry.browser.version';

/**
 * Type for {@link SENTRY_BROWSER_VERSION} sentry.browser.version
 */
export type SENTRY_BROWSER_VERSION_TYPE = string;

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

// Path: model/attributes/sentry/sentry__client_sample_rate.json

/**
 * Rate at which a span was sampled in the SDK. `sentry.client_sample_rate`
 *
 * Attribute Value Type: `number` {@link SENTRY_CLIENT_SAMPLE_RATE_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example 0.5
 */
export const SENTRY_CLIENT_SAMPLE_RATE = 'sentry.client_sample_rate';

/**
 * Type for {@link SENTRY_CLIENT_SAMPLE_RATE} sentry.client_sample_rate
 */
export type SENTRY_CLIENT_SAMPLE_RATE_TYPE = number;

// Path: model/attributes/sentry/sentry__description.json

/**
 * The human-readable description of a span. `sentry.description`
 *
 * Attribute Value Type: `string` {@link SENTRY_DESCRIPTION_TYPE}
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: No
 *
 * @example "index view query"
 */
export const SENTRY_DESCRIPTION = 'sentry.description';

/**
 * Type for {@link SENTRY_DESCRIPTION} sentry.description
 */
export type SENTRY_DESCRIPTION_TYPE = string;

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

// Path: model/attributes/sentry/sentry__message__parameter__[key].json

/**
 * A parameter used in the message template. <key> can either be the number that represent the parameter's position in the template string (sentry.message.parameter.0, sentry.message.parameter.1, etc) or the parameter's name (sentry.message.parameter.item_id, sentry.message.parameter.user_id, etc) `sentry.message.parameter.<key>`
 *
 * Attribute Value Type: `string` {@link SENTRY_MESSAGE_PARAMETER_KEY_TYPE}
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: No
 *
 * @example "sentry.message.parameter.0='123'"
 */
export const SENTRY_MESSAGE_PARAMETER_KEY = 'sentry.message.parameter.<key>';

/**
 * Type for {@link SENTRY_MESSAGE_PARAMETER_KEY} sentry.message.parameter.<key>
 */
export type SENTRY_MESSAGE_PARAMETER_KEY_TYPE = string;

// Path: model/attributes/sentry/sentry__message__template.json

/**
 * The parameterized template string. `sentry.message.template`
 *
 * Attribute Value Type: `string` {@link SENTRY_MESSAGE_TEMPLATE_TYPE}
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: No
 *
 * @example "Hello, {name}!"
 */
export const SENTRY_MESSAGE_TEMPLATE = 'sentry.message.template';

/**
 * Type for {@link SENTRY_MESSAGE_TEMPLATE} sentry.message.template
 */
export type SENTRY_MESSAGE_TEMPLATE_TYPE = string;

// Path: model/attributes/sentry/sentry__module__[key].json

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

// Path: model/attributes/sentry/sentry__nextjs__ssr__function__route.json

/**
 * A parameterized route for a function in Next.js that contributes to Server-Side Rendering. Should be present on spans that track such functions when the file location of the function is known. `sentry.nextjs.ssr.function.route`
 *
 * Attribute Value Type: `string` {@link SENTRY_NEXTJS_SSR_FUNCTION_ROUTE_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example "/posts/[id]/layout"
 */
export const SENTRY_NEXTJS_SSR_FUNCTION_ROUTE = 'sentry.nextjs.ssr.function.route';

/**
 * Type for {@link SENTRY_NEXTJS_SSR_FUNCTION_ROUTE} sentry.nextjs.ssr.function.route
 */
export type SENTRY_NEXTJS_SSR_FUNCTION_ROUTE_TYPE = string;

// Path: model/attributes/sentry/sentry__nextjs__ssr__function__type.json

/**
 * A descriptor for a for a function in Next.js that contributes to Server-Side Rendering. Should be present on spans that track such functions. `sentry.nextjs.ssr.function.type`
 *
 * Attribute Value Type: `string` {@link SENTRY_NEXTJS_SSR_FUNCTION_TYPE_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example "generateMetadata"
 */
export const SENTRY_NEXTJS_SSR_FUNCTION_TYPE = 'sentry.nextjs.ssr.function.type';

/**
 * Type for {@link SENTRY_NEXTJS_SSR_FUNCTION_TYPE} sentry.nextjs.ssr.function.type
 */
export type SENTRY_NEXTJS_SSR_FUNCTION_TYPE_TYPE = string;

// Path: model/attributes/sentry/sentry__observed_timestamp_nanos.json

/**
 * The timestamp at which an envelope was received by Relay, in nanoseconds. `sentry.observed_timestamp_nanos`
 *
 * Attribute Value Type: `string` {@link SENTRY_OBSERVED_TIMESTAMP_NANOS_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * Aliases: {@link SENTRY_INTERNAL_OBSERVED_TIMESTAMP_NANOS} `sentry._internal.observed_timestamp_nanos`
 *
 * @deprecated Use {@link SENTRY_INTERNAL_OBSERVED_TIMESTAMP_NANOS} (sentry._internal.observed_timestamp_nanos) instead
 * @example "1544712660300000000"
 */
export const SENTRY_OBSERVED_TIMESTAMP_NANOS = 'sentry.observed_timestamp_nanos';

/**
 * Type for {@link SENTRY_OBSERVED_TIMESTAMP_NANOS} sentry.observed_timestamp_nanos
 */
export type SENTRY_OBSERVED_TIMESTAMP_NANOS_TYPE = string;

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
 * The origin of the instrumentation (e.g. span, log, etc.) `sentry.origin`
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

// Path: model/attributes/sentry/sentry__segment__id.json

/**
 * The segment ID of a span `sentry.segment.id`
 *
 * Attribute Value Type: `string` {@link SENTRY_SEGMENT_ID_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * Aliases: {@link _SENTRY_SEGMENT_ID} `sentry.segment_id`
 *
 * @example "051581bf3cb55c13"
 */
export const SENTRY_SEGMENT_ID = 'sentry.segment.id';

/**
 * Type for {@link SENTRY_SEGMENT_ID} sentry.segment.id
 */
export type SENTRY_SEGMENT_ID_TYPE = string;

// Path: model/attributes/sentry/sentry__segment__name.json

/**
 * The segment name of a span `sentry.segment.name`
 *
 * Attribute Value Type: `string` {@link SENTRY_SEGMENT_NAME_TYPE}
 *
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: No
 *
 * @example "GET /user"
 */
export const SENTRY_SEGMENT_NAME = 'sentry.segment.name';

/**
 * Type for {@link SENTRY_SEGMENT_NAME} sentry.segment.name
 */
export type SENTRY_SEGMENT_NAME_TYPE = string;

// Path: model/attributes/sentry/sentry__segment_id.json

/**
 * The segment ID of a span `sentry.segment_id`
 *
 * Attribute Value Type: `string` {@link _SENTRY_SEGMENT_ID_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * Aliases: {@link SENTRY_SEGMENT_ID} `sentry.segment.id`
 *
 * @deprecated Use {@link SENTRY_SEGMENT_ID} (sentry.segment.id) instead
 * @example "051581bf3cb55c13"
 */
export const _SENTRY_SEGMENT_ID = 'sentry.segment_id';

/**
 * Type for {@link _SENTRY_SEGMENT_ID} sentry.segment_id
 */
export type _SENTRY_SEGMENT_ID_TYPE = string;

// Path: model/attributes/sentry/sentry__server_sample_rate.json

/**
 * Rate at which a span was sampled in Relay. `sentry.server_sample_rate`
 *
 * Attribute Value Type: `number` {@link SENTRY_SERVER_SAMPLE_RATE_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example 0.5
 */
export const SENTRY_SERVER_SAMPLE_RATE = 'sentry.server_sample_rate';

/**
 * Type for {@link SENTRY_SERVER_SAMPLE_RATE} sentry.server_sample_rate
 */
export type SENTRY_SERVER_SAMPLE_RATE_TYPE = number;

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

// Path: model/attributes/sentry/sentry__trace__parent_span_id.json

/**
 * The span id of the span that was active when the log was collected. This should not be set if there was no active span. `sentry.trace.parent_span_id`
 *
 * Attribute Value Type: `string` {@link SENTRY_TRACE_PARENT_SPAN_ID_TYPE}
 *
 * Contains PII: false
 *
 * Attribute defined in OTEL: No
 *
 * @example "b0e6f15b45c36b12"
 */
export const SENTRY_TRACE_PARENT_SPAN_ID = 'sentry.trace.parent_span_id';

/**
 * Type for {@link SENTRY_TRACE_PARENT_SPAN_ID} sentry.trace.parent_span_id
 */
export type SENTRY_TRACE_PARENT_SPAN_ID_TYPE = string;

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
 * Contains PII: maybe
 *
 * Attribute defined in OTEL: Yes
 *
 * Aliases: {@link HTTP_SERVER_NAME} `http.server_name`, {@link NET_HOST_NAME} `net.host.name`, {@link HTTP_HOST} `http.host`
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
 * Contains PII: maybe
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
 * Contains PII: maybe
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
 * Contains PII: maybe
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
 * Contains PII: maybe
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
 * Contains PII: maybe
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
 * Contains PII: maybe
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
 * Aliases: {@link HTTP_URL} `http.url`, {@link URL} `url`
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

// Path: model/attributes/url/url__path__parameter__[key].json

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
 * Contains PII: maybe
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
 * Contains PII: maybe
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

// Path: model/attributes/user/user__ip_address.json

/**
 * The IP address of the user. `user.ip_address`
 *
 * Attribute Value Type: `string` {@link USER_IP_ADDRESS_TYPE}
 *
 * Contains PII: true
 *
 * Attribute defined in OTEL: No
 *
 * @example "192.168.1.1"
 */
export const USER_IP_ADDRESS = 'user.ip_address';

/**
 * Type for {@link USER_IP_ADDRESS} user.ip_address
 */
export type USER_IP_ADDRESS_TYPE = string;

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
 * Contains PII: maybe
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

export enum AttributeType {
  STRING = 'string',
  BOOLEAN = 'boolean',
  INTEGER = 'integer',
  DOUBLE = 'double',
  STRING_ARRAY = 'string[]',
  BOOLEAN_ARRAY = 'boolean[]',
  INTEGER_ARRAY = 'integer[]',
  DOUBLE_ARRAY = 'double[]',
}

export enum IsPii {
  TRUE = 'true',
  FALSE = 'false',
  MAYBE = 'maybe',
}

export interface PiiInfo {
  /** Whether the attribute contains PII */
  isPii: IsPii;
  /** Reason why it has PII or not */
  reason?: string;
}

export interface DeprecationInfo {
  /** What this attribute was replaced with */
  replacement?: string;
  /** Reason for deprecation */
  reason?: string;
}

export interface AttributeMetadata {
  /** A description of the attribute */
  brief: string;
  /** The type of the attribute value */
  type: AttributeType;
  /** If an attribute can have PII */
  pii: PiiInfo;
  /** Whether the attribute is defined in OpenTelemetry Semantic Conventions */
  isInOtel: boolean;
  /** If an attribute has a dynamic suffix */
  hasDynamicSuffix?: boolean;
  /** An example value of the attribute */
  example?: AttributeValue;
  /** If an attribute was deprecated, and what it was replaced with */
  deprecation?: DeprecationInfo;
  /** If there are attributes that alias to this attribute */
  aliases?: AttributeName[];
  /** If an attribute is SDK specific, list the SDKs that use this attribute */
  sdks?: string[];
}

export enum AttributeName {
  AI_CITATIONS = 'ai.citations',
  AI_COMPLETION_TOKENS_USED = 'ai.completion_tokens.used',
  AI_DOCUMENTS = 'ai.documents',
  AI_FINISH_REASON = 'ai.finish_reason',
  AI_FREQUENCY_PENALTY = 'ai.frequency_penalty',
  AI_FUNCTION_CALL = 'ai.function_call',
  AI_GENERATION_ID = 'ai.generation_id',
  AI_INPUT_MESSAGES = 'ai.input_messages',
  AI_IS_SEARCH_REQUIRED = 'ai.is_search_required',
  AI_METADATA = 'ai.metadata',
  AI_MODEL_PROVIDER = 'ai.model.provider',
  AI_MODEL_ID = 'ai.model_id',
  AI_PIPELINE_NAME = 'ai.pipeline.name',
  AI_PREAMBLE = 'ai.preamble',
  AI_PRESENCE_PENALTY = 'ai.presence_penalty',
  AI_PROMPT_TOKENS_USED = 'ai.prompt_tokens.used',
  AI_RAW_PROMPTING = 'ai.raw_prompting',
  AI_RESPONSE_FORMAT = 'ai.response_format',
  AI_RESPONSES = 'ai.responses',
  AI_SEARCH_QUERIES = 'ai.search_queries',
  AI_SEARCH_RESULTS = 'ai.search_results',
  AI_SEED = 'ai.seed',
  AI_STREAMING = 'ai.streaming',
  AI_TAGS = 'ai.tags',
  AI_TEMPERATURE = 'ai.temperature',
  AI_TEXTS = 'ai.texts',
  AI_TOOL_CALLS = 'ai.tool_calls',
  AI_TOOLS = 'ai.tools',
  AI_TOP_K = 'ai.top_k',
  AI_TOP_P = 'ai.top_p',
  AI_TOTAL_COST = 'ai.total_cost',
  AI_TOTAL_TOKENS_USED = 'ai.total_tokens.used',
  AI_WARNINGS = 'ai.warnings',
  APP_START_TYPE = 'app_start_type',
  BLOCKED_MAIN_THREAD = 'blocked_main_thread',
  BROWSER_NAME = 'browser.name',
  BROWSER_REPORT_TYPE = 'browser.report.type',
  BROWSER_SCRIPT_INVOKER = 'browser.script.invoker',
  BROWSER_SCRIPT_INVOKER_TYPE = 'browser.script.invoker_type',
  BROWSER_SCRIPT_SOURCE_CHAR_POSITION = 'browser.script.source_char_position',
  BROWSER_VERSION = 'browser.version',
  CACHE_HIT = 'cache.hit',
  CACHE_ITEM_SIZE = 'cache.item_size',
  CACHE_KEY = 'cache.key',
  CACHE_OPERATION = 'cache.operation',
  CACHE_TTL = 'cache.ttl',
  CHANNEL = 'channel',
  CLIENT_ADDRESS = 'client.address',
  CLIENT_PORT = 'client.port',
  CLOUDFLARE_D1_DURATION = 'cloudflare.d1.duration',
  CLOUDFLARE_D1_ROWS_READ = 'cloudflare.d1.rows_read',
  CLOUDFLARE_D1_ROWS_WRITTEN = 'cloudflare.d1.rows_written',
  CODE_FILE_PATH = 'code.file.path',
  CODE_FILEPATH = 'code.filepath',
  CODE_FUNCTION = 'code.function',
  CODE_FUNCTION_NAME = 'code.function.name',
  CODE_LINE_NUMBER = 'code.line.number',
  CODE_LINENO = 'code.lineno',
  CODE_NAMESPACE = 'code.namespace',
  DB_COLLECTION_NAME = 'db.collection.name',
  DB_NAME = 'db.name',
  DB_NAMESPACE = 'db.namespace',
  DB_OPERATION = 'db.operation',
  DB_OPERATION_NAME = 'db.operation.name',
  DB_QUERY_PARAMETER_KEY = 'db.query.parameter.<key>',
  DB_QUERY_SUMMARY = 'db.query.summary',
  DB_QUERY_TEXT = 'db.query.text',
  DB_REDIS_CONNECTION = 'db.redis.connection',
  DB_REDIS_PARAMETERS = 'db.redis.parameters',
  DB_SQL_BINDINGS = 'db.sql.bindings',
  DB_STATEMENT = 'db.statement',
  DB_SYSTEM = 'db.system',
  DB_SYSTEM_NAME = 'db.system.name',
  DB_USER = 'db.user',
  DEVICE_BRAND = 'device.brand',
  DEVICE_FAMILY = 'device.family',
  DEVICE_MODEL = 'device.model',
  ENVIRONMENT = 'environment',
  ERROR_TYPE = 'error.type',
  EVENT_ID = 'event.id',
  EVENT_NAME = 'event.name',
  EXCEPTION_ESCAPED = 'exception.escaped',
  EXCEPTION_MESSAGE = 'exception.message',
  EXCEPTION_STACKTRACE = 'exception.stacktrace',
  EXCEPTION_TYPE = 'exception.type',
  FAAS_COLDSTART = 'faas.coldstart',
  FAAS_CRON = 'faas.cron',
  FAAS_TIME = 'faas.time',
  FAAS_TRIGGER = 'faas.trigger',
  FLAG_EVALUATION_KEY = 'flag.evaluation.<key>',
  FRAMES_DELAY = 'frames.delay',
  FRAMES_FROZEN = 'frames.frozen',
  FRAMES_SLOW = 'frames.slow',
  FRAMES_TOTAL = 'frames.total',
  FS_ERROR = 'fs_error',
  GEN_AI_AGENT_NAME = 'gen_ai.agent.name',
  GEN_AI_ASSISTANT_MESSAGE = 'gen_ai.assistant.message',
  GEN_AI_CHOICE = 'gen_ai.choice',
  GEN_AI_COST_INPUT_TOKENS = 'gen_ai.cost.input_tokens',
  GEN_AI_COST_OUTPUT_TOKENS = 'gen_ai.cost.output_tokens',
  GEN_AI_COST_TOTAL_TOKENS = 'gen_ai.cost.total_tokens',
  GEN_AI_OPERATION_NAME = 'gen_ai.operation.name',
  GEN_AI_OPERATION_TYPE = 'gen_ai.operation.type',
  GEN_AI_PIPELINE_NAME = 'gen_ai.pipeline.name',
  GEN_AI_PROMPT = 'gen_ai.prompt',
  GEN_AI_REQUEST_AVAILABLE_TOOLS = 'gen_ai.request.available_tools',
  GEN_AI_REQUEST_FREQUENCY_PENALTY = 'gen_ai.request.frequency_penalty',
  GEN_AI_REQUEST_MAX_TOKENS = 'gen_ai.request.max_tokens',
  GEN_AI_REQUEST_MESSAGES = 'gen_ai.request.messages',
  GEN_AI_REQUEST_MODEL = 'gen_ai.request.model',
  GEN_AI_REQUEST_PRESENCE_PENALTY = 'gen_ai.request.presence_penalty',
  GEN_AI_REQUEST_SEED = 'gen_ai.request.seed',
  GEN_AI_REQUEST_TEMPERATURE = 'gen_ai.request.temperature',
  GEN_AI_REQUEST_TOP_K = 'gen_ai.request.top_k',
  GEN_AI_REQUEST_TOP_P = 'gen_ai.request.top_p',
  GEN_AI_RESPONSE_FINISH_REASONS = 'gen_ai.response.finish_reasons',
  GEN_AI_RESPONSE_ID = 'gen_ai.response.id',
  GEN_AI_RESPONSE_MODEL = 'gen_ai.response.model',
  GEN_AI_RESPONSE_STREAMING = 'gen_ai.response.streaming',
  GEN_AI_RESPONSE_TEXT = 'gen_ai.response.text',
  GEN_AI_RESPONSE_TOKENS_PER_SECOND = 'gen_ai.response.tokens_per_second',
  GEN_AI_RESPONSE_TOOL_CALLS = 'gen_ai.response.tool_calls',
  GEN_AI_SYSTEM = 'gen_ai.system',
  GEN_AI_SYSTEM_MESSAGE = 'gen_ai.system.message',
  GEN_AI_TOOL_DESCRIPTION = 'gen_ai.tool.description',
  GEN_AI_TOOL_INPUT = 'gen_ai.tool.input',
  GEN_AI_TOOL_MESSAGE = 'gen_ai.tool.message',
  GEN_AI_TOOL_NAME = 'gen_ai.tool.name',
  GEN_AI_TOOL_OUTPUT = 'gen_ai.tool.output',
  GEN_AI_TOOL_TYPE = 'gen_ai.tool.type',
  GEN_AI_USAGE_COMPLETION_TOKENS = 'gen_ai.usage.completion_tokens',
  GEN_AI_USAGE_INPUT_TOKENS = 'gen_ai.usage.input_tokens',
  GEN_AI_USAGE_INPUT_TOKENS_CACHED = 'gen_ai.usage.input_tokens.cached',
  GEN_AI_USAGE_OUTPUT_TOKENS = 'gen_ai.usage.output_tokens',
  GEN_AI_USAGE_OUTPUT_TOKENS_REASONING = 'gen_ai.usage.output_tokens.reasoning',
  GEN_AI_USAGE_PROMPT_TOKENS = 'gen_ai.usage.prompt_tokens',
  GEN_AI_USAGE_TOTAL_COST = 'gen_ai.usage.total_cost',
  GEN_AI_USAGE_TOTAL_TOKENS = 'gen_ai.usage.total_tokens',
  GEN_AI_USER_MESSAGE = 'gen_ai.user.message',
  GRAPHQL_OPERATION_NAME = 'graphql.operation.name',
  GRAPHQL_OPERATION_TYPE = 'graphql.operation.type',
  HTTP_CLIENT_IP = 'http.client_ip',
  HTTP_DECODED_RESPONSE_CONTENT_LENGTH = 'http.decoded_response_content_length',
  HTTP_FLAVOR = 'http.flavor',
  HTTP_FRAGMENT = 'http.fragment',
  HTTP_HOST = 'http.host',
  HTTP_METHOD = 'http.method',
  HTTP_QUERY = 'http.query',
  HTTP_REQUEST_CONNECT_START = 'http.request.connect_start',
  HTTP_REQUEST_CONNECTION_END = 'http.request.connection_end',
  HTTP_REQUEST_DOMAIN_LOOKUP_END = 'http.request.domain_lookup_end',
  HTTP_REQUEST_DOMAIN_LOOKUP_START = 'http.request.domain_lookup_start',
  HTTP_REQUEST_FETCH_START = 'http.request.fetch_start',
  HTTP_REQUEST_HEADER_KEY = 'http.request.header.<key>',
  HTTP_REQUEST_METHOD = 'http.request.method',
  HTTP_REQUEST_REDIRECT_END = 'http.request.redirect_end',
  HTTP_REQUEST_REDIRECT_START = 'http.request.redirect_start',
  HTTP_REQUEST_REQUEST_START = 'http.request.request_start',
  HTTP_REQUEST_RESEND_COUNT = 'http.request.resend_count',
  HTTP_REQUEST_RESPONSE_END = 'http.request.response_end',
  HTTP_REQUEST_RESPONSE_START = 'http.request.response_start',
  HTTP_REQUEST_SECURE_CONNECTION_START = 'http.request.secure_connection_start',
  HTTP_REQUEST_TIME_TO_FIRST_BYTE = 'http.request.time_to_first_byte',
  HTTP_REQUEST_WORKER_START = 'http.request.worker_start',
  HTTP_RESPONSE_BODY_SIZE = 'http.response.body.size',
  HTTP_RESPONSE_HEADER_KEY = 'http.response.header.<key>',
  HTTP_RESPONSE_HEADER_CONTENT_LENGTH = 'http.response.header.content-length',
  HTTP_RESPONSE_SIZE = 'http.response.size',
  HTTP_RESPONSE_STATUS_CODE = 'http.response.status_code',
  HTTP_RESPONSE_CONTENT_LENGTH = 'http.response_content_length',
  HTTP_RESPONSE_TRANSFER_SIZE = 'http.response_transfer_size',
  HTTP_ROUTE = 'http.route',
  HTTP_SCHEME = 'http.scheme',
  HTTP_SERVER_NAME = 'http.server_name',
  HTTP_STATUS_CODE = 'http.status_code',
  HTTP_TARGET = 'http.target',
  HTTP_URL = 'http.url',
  HTTP_USER_AGENT = 'http.user_agent',
  ID = 'id',
  JVM_GC_ACTION = 'jvm.gc.action',
  JVM_GC_NAME = 'jvm.gc.name',
  JVM_MEMORY_POOL_NAME = 'jvm.memory.pool.name',
  JVM_MEMORY_TYPE = 'jvm.memory.type',
  JVM_THREAD_DAEMON = 'jvm.thread.daemon',
  JVM_THREAD_STATE = 'jvm.thread.state',
  LCP_ELEMENT = 'lcp.element',
  LCP_ID = 'lcp.id',
  LCP_SIZE = 'lcp.size',
  LCP_URL = 'lcp.url',
  LOGGER_NAME = 'logger.name',
  MESSAGING_DESTINATION_CONNECTION = 'messaging.destination.connection',
  MESSAGING_DESTINATION_NAME = 'messaging.destination.name',
  MESSAGING_MESSAGE_BODY_SIZE = 'messaging.message.body.size',
  MESSAGING_MESSAGE_ENVELOPE_SIZE = 'messaging.message.envelope.size',
  MESSAGING_MESSAGE_ID = 'messaging.message.id',
  MESSAGING_MESSAGE_RECEIVE_LATENCY = 'messaging.message.receive.latency',
  MESSAGING_MESSAGE_RETRY_COUNT = 'messaging.message.retry.count',
  MESSAGING_OPERATION_TYPE = 'messaging.operation.type',
  MESSAGING_SYSTEM = 'messaging.system',
  METHOD = 'method',
  NAVIGATION_TYPE = 'navigation.type',
  NEL_ELAPSED_TIME = 'nel.elapsed_time',
  NEL_PHASE = 'nel.phase',
  NEL_REFERRER = 'nel.referrer',
  NEL_SAMPLING_FUNCTION = 'nel.sampling_function',
  NEL_TYPE = 'nel.type',
  NET_HOST_IP = 'net.host.ip',
  NET_HOST_NAME = 'net.host.name',
  NET_HOST_PORT = 'net.host.port',
  NET_PEER_IP = 'net.peer.ip',
  NET_PEER_NAME = 'net.peer.name',
  NET_PEER_PORT = 'net.peer.port',
  NET_PROTOCOL_NAME = 'net.protocol.name',
  NET_PROTOCOL_VERSION = 'net.protocol.version',
  NET_SOCK_FAMILY = 'net.sock.family',
  NET_SOCK_HOST_ADDR = 'net.sock.host.addr',
  NET_SOCK_HOST_PORT = 'net.sock.host.port',
  NET_SOCK_PEER_ADDR = 'net.sock.peer.addr',
  NET_SOCK_PEER_NAME = 'net.sock.peer.name',
  NET_SOCK_PEER_PORT = 'net.sock.peer.port',
  NET_TRANSPORT = 'net.transport',
  NETWORK_LOCAL_ADDRESS = 'network.local.address',
  NETWORK_LOCAL_PORT = 'network.local.port',
  NETWORK_PEER_ADDRESS = 'network.peer.address',
  NETWORK_PEER_PORT = 'network.peer.port',
  NETWORK_PROTOCOL_NAME = 'network.protocol.name',
  NETWORK_PROTOCOL_VERSION = 'network.protocol.version',
  NETWORK_TRANSPORT = 'network.transport',
  NETWORK_TYPE = 'network.type',
  OS_BUILD_ID = 'os.build_id',
  OS_DESCRIPTION = 'os.description',
  OS_NAME = 'os.name',
  OS_TYPE = 'os.type',
  OS_VERSION = 'os.version',
  OTEL_SCOPE_NAME = 'otel.scope.name',
  OTEL_SCOPE_VERSION = 'otel.scope.version',
  OTEL_STATUS_CODE = 'otel.status_code',
  OTEL_STATUS_DESCRIPTION = 'otel.status_description',
  PARAMS_KEY = 'params.<key>',
  PREVIOUS_ROUTE = 'previous_route',
  PROCESS_EXECUTABLE_NAME = 'process.executable.name',
  PROCESS_PID = 'process.pid',
  PROCESS_RUNTIME_DESCRIPTION = 'process.runtime.description',
  PROCESS_RUNTIME_NAME = 'process.runtime.name',
  PROCESS_RUNTIME_VERSION = 'process.runtime.version',
  PROFILE_ID = 'profile_id',
  QUERY_KEY = 'query.<key>',
  RELEASE = 'release',
  REMIX_ACTION_FORM_DATA_KEY = 'remix.action_form_data.<key>',
  REPLAY_ID = 'replay_id',
  RESOURCE_RENDER_BLOCKING_STATUS = 'resource.render_blocking_status',
  ROUTE = 'route',
  RPC_GRPC_STATUS_CODE = 'rpc.grpc.status_code',
  RPC_SERVICE = 'rpc.service',
  SENTRY_INTERNAL_DSC_ENVIRONMENT = 'sentry._internal.dsc.environment',
  SENTRY_INTERNAL_DSC_ORG_ID = 'sentry._internal.dsc.org_id',
  SENTRY_INTERNAL_DSC_PUBLIC_KEY = 'sentry._internal.dsc.public_key',
  SENTRY_INTERNAL_DSC_RELEASE = 'sentry._internal.dsc.release',
  SENTRY_INTERNAL_DSC_SAMPLE_RAND = 'sentry._internal.dsc.sample_rand',
  SENTRY_INTERNAL_DSC_SAMPLE_RATE = 'sentry._internal.dsc.sample_rate',
  SENTRY_INTERNAL_DSC_SAMPLED = 'sentry._internal.dsc.sampled',
  SENTRY_INTERNAL_DSC_TRACE_ID = 'sentry._internal.dsc.trace_id',
  SENTRY_INTERNAL_DSC_TRANSACTION = 'sentry._internal.dsc.transaction',
  SENTRY_INTERNAL_OBSERVED_TIMESTAMP_NANOS = 'sentry._internal.observed_timestamp_nanos',
  SENTRY_INTERNAL_REPLAY_IS_BUFFERING = 'sentry._internal.replay_is_buffering',
  SENTRY_BROWSER_NAME = 'sentry.browser.name',
  SENTRY_BROWSER_VERSION = 'sentry.browser.version',
  SENTRY_CANCELLATION_REASON = 'sentry.cancellation_reason',
  SENTRY_CLIENT_SAMPLE_RATE = 'sentry.client_sample_rate',
  SENTRY_DESCRIPTION = 'sentry.description',
  SENTRY_DIST = 'sentry.dist',
  SENTRY_ENVIRONMENT = 'sentry.environment',
  SENTRY_EXCLUSIVE_TIME = 'sentry.exclusive_time',
  SENTRY_HTTP_PREFETCH = 'sentry.http.prefetch',
  SENTRY_IDLE_SPAN_FINISH_REASON = 'sentry.idle_span_finish_reason',
  SENTRY_MESSAGE_PARAMETER_KEY = 'sentry.message.parameter.<key>',
  SENTRY_MESSAGE_TEMPLATE = 'sentry.message.template',
  SENTRY_MODULE_KEY = 'sentry.module.<key>',
  SENTRY_NEXTJS_SSR_FUNCTION_ROUTE = 'sentry.nextjs.ssr.function.route',
  SENTRY_NEXTJS_SSR_FUNCTION_TYPE = 'sentry.nextjs.ssr.function.type',
  SENTRY_OBSERVED_TIMESTAMP_NANOS = 'sentry.observed_timestamp_nanos',
  SENTRY_OP = 'sentry.op',
  SENTRY_ORIGIN = 'sentry.origin',
  SENTRY_PLATFORM = 'sentry.platform',
  SENTRY_PROFILE_ID = 'sentry.profile_id',
  SENTRY_RELEASE = 'sentry.release',
  SENTRY_REPLAY_ID = 'sentry.replay_id',
  SENTRY_SDK_INTEGRATIONS = 'sentry.sdk.integrations',
  SENTRY_SDK_NAME = 'sentry.sdk.name',
  SENTRY_SDK_VERSION = 'sentry.sdk.version',
  SENTRY_SEGMENT_ID = 'sentry.segment.id',
  SENTRY_SEGMENT_NAME = 'sentry.segment.name',
  _SENTRY_SEGMENT_ID = 'sentry.segment_id',
  SENTRY_SERVER_SAMPLE_RATE = 'sentry.server_sample_rate',
  SENTRY_SPAN_SOURCE = 'sentry.span.source',
  SENTRY_TRACE_PARENT_SPAN_ID = 'sentry.trace.parent_span_id',
  SENTRY_TRANSACTION = 'sentry.transaction',
  SERVER_ADDRESS = 'server.address',
  SERVER_PORT = 'server.port',
  SERVICE_NAME = 'service.name',
  SERVICE_VERSION = 'service.version',
  THREAD_ID = 'thread.id',
  THREAD_NAME = 'thread.name',
  TRANSACTION = 'transaction',
  TYPE = 'type',
  UI_COMPONENT_NAME = 'ui.component_name',
  UI_CONTRIBUTES_TO_TTFD = 'ui.contributes_to_ttfd',
  UI_CONTRIBUTES_TO_TTID = 'ui.contributes_to_ttid',
  URL_DOMAIN = 'url.domain',
  URL_FRAGMENT = 'url.fragment',
  URL_FULL = 'url.full',
  URL_PATH = 'url.path',
  URL_PATH_PARAMETER_KEY = 'url.path.parameter.<key>',
  URL_PORT = 'url.port',
  URL_QUERY = 'url.query',
  URL_SCHEME = 'url.scheme',
  URL_TEMPLATE = 'url.template',
  URL = 'url',
  USER_EMAIL = 'user.email',
  USER_FULL_NAME = 'user.full_name',
  USER_GEO_CITY = 'user.geo.city',
  USER_GEO_COUNTRY_CODE = 'user.geo.country_code',
  USER_GEO_REGION = 'user.geo.region',
  USER_GEO_SUBDIVISION = 'user.geo.subdivision',
  USER_HASH = 'user.hash',
  USER_ID = 'user.id',
  USER_IP_ADDRESS = 'user.ip_address',
  USER_NAME = 'user.name',
  USER_ROLES = 'user.roles',
  USER_AGENT_ORIGINAL = 'user_agent.original',
}

export const ATTRIBUTE_TYPES: Record<AttributeName, AttributeType> = {
  [AttributeName.AI_CITATIONS]: AttributeType.STRING_ARRAY,
  [AttributeName.AI_COMPLETION_TOKENS_USED]: AttributeType.INTEGER,
  [AttributeName.AI_DOCUMENTS]: AttributeType.STRING_ARRAY,
  [AttributeName.AI_FINISH_REASON]: AttributeType.STRING,
  [AttributeName.AI_FREQUENCY_PENALTY]: AttributeType.DOUBLE,
  [AttributeName.AI_FUNCTION_CALL]: AttributeType.STRING,
  [AttributeName.AI_GENERATION_ID]: AttributeType.STRING,
  [AttributeName.AI_INPUT_MESSAGES]: AttributeType.STRING,
  [AttributeName.AI_IS_SEARCH_REQUIRED]: AttributeType.BOOLEAN,
  [AttributeName.AI_METADATA]: AttributeType.STRING,
  [AttributeName.AI_MODEL_PROVIDER]: AttributeType.STRING,
  [AttributeName.AI_MODEL_ID]: AttributeType.STRING,
  [AttributeName.AI_PIPELINE_NAME]: AttributeType.STRING,
  [AttributeName.AI_PREAMBLE]: AttributeType.STRING,
  [AttributeName.AI_PRESENCE_PENALTY]: AttributeType.DOUBLE,
  [AttributeName.AI_PROMPT_TOKENS_USED]: AttributeType.INTEGER,
  [AttributeName.AI_RAW_PROMPTING]: AttributeType.BOOLEAN,
  [AttributeName.AI_RESPONSE_FORMAT]: AttributeType.STRING,
  [AttributeName.AI_RESPONSES]: AttributeType.STRING_ARRAY,
  [AttributeName.AI_SEARCH_QUERIES]: AttributeType.STRING_ARRAY,
  [AttributeName.AI_SEARCH_RESULTS]: AttributeType.STRING_ARRAY,
  [AttributeName.AI_SEED]: AttributeType.STRING,
  [AttributeName.AI_STREAMING]: AttributeType.BOOLEAN,
  [AttributeName.AI_TAGS]: AttributeType.STRING,
  [AttributeName.AI_TEMPERATURE]: AttributeType.DOUBLE,
  [AttributeName.AI_TEXTS]: AttributeType.STRING_ARRAY,
  [AttributeName.AI_TOOL_CALLS]: AttributeType.STRING_ARRAY,
  [AttributeName.AI_TOOLS]: AttributeType.STRING_ARRAY,
  [AttributeName.AI_TOP_K]: AttributeType.INTEGER,
  [AttributeName.AI_TOP_P]: AttributeType.DOUBLE,
  [AttributeName.AI_TOTAL_COST]: AttributeType.DOUBLE,
  [AttributeName.AI_TOTAL_TOKENS_USED]: AttributeType.INTEGER,
  [AttributeName.AI_WARNINGS]: AttributeType.STRING_ARRAY,
  [AttributeName.APP_START_TYPE]: AttributeType.STRING,
  [AttributeName.BLOCKED_MAIN_THREAD]: AttributeType.BOOLEAN,
  [AttributeName.BROWSER_NAME]: AttributeType.STRING,
  [AttributeName.BROWSER_REPORT_TYPE]: AttributeType.STRING,
  [AttributeName.BROWSER_SCRIPT_INVOKER]: AttributeType.STRING,
  [AttributeName.BROWSER_SCRIPT_INVOKER_TYPE]: AttributeType.STRING,
  [AttributeName.BROWSER_SCRIPT_SOURCE_CHAR_POSITION]: AttributeType.INTEGER,
  [AttributeName.BROWSER_VERSION]: AttributeType.STRING,
  [AttributeName.CACHE_HIT]: AttributeType.BOOLEAN,
  [AttributeName.CACHE_ITEM_SIZE]: AttributeType.INTEGER,
  [AttributeName.CACHE_KEY]: AttributeType.STRING_ARRAY,
  [AttributeName.CACHE_OPERATION]: AttributeType.STRING,
  [AttributeName.CACHE_TTL]: AttributeType.INTEGER,
  [AttributeName.CHANNEL]: AttributeType.STRING,
  [AttributeName.CLIENT_ADDRESS]: AttributeType.STRING,
  [AttributeName.CLIENT_PORT]: AttributeType.INTEGER,
  [AttributeName.CLOUDFLARE_D1_DURATION]: AttributeType.INTEGER,
  [AttributeName.CLOUDFLARE_D1_ROWS_READ]: AttributeType.INTEGER,
  [AttributeName.CLOUDFLARE_D1_ROWS_WRITTEN]: AttributeType.INTEGER,
  [AttributeName.CODE_FILE_PATH]: AttributeType.STRING,
  [AttributeName.CODE_FILEPATH]: AttributeType.STRING,
  [AttributeName.CODE_FUNCTION]: AttributeType.STRING,
  [AttributeName.CODE_FUNCTION_NAME]: AttributeType.STRING,
  [AttributeName.CODE_LINE_NUMBER]: AttributeType.INTEGER,
  [AttributeName.CODE_LINENO]: AttributeType.INTEGER,
  [AttributeName.CODE_NAMESPACE]: AttributeType.STRING,
  [AttributeName.DB_COLLECTION_NAME]: AttributeType.STRING,
  [AttributeName.DB_NAME]: AttributeType.STRING,
  [AttributeName.DB_NAMESPACE]: AttributeType.STRING,
  [AttributeName.DB_OPERATION]: AttributeType.STRING,
  [AttributeName.DB_OPERATION_NAME]: AttributeType.STRING,
  [AttributeName.DB_QUERY_PARAMETER_KEY]: AttributeType.STRING,
  [AttributeName.DB_QUERY_SUMMARY]: AttributeType.STRING,
  [AttributeName.DB_QUERY_TEXT]: AttributeType.STRING,
  [AttributeName.DB_REDIS_CONNECTION]: AttributeType.STRING,
  [AttributeName.DB_REDIS_PARAMETERS]: AttributeType.STRING_ARRAY,
  [AttributeName.DB_SQL_BINDINGS]: AttributeType.STRING_ARRAY,
  [AttributeName.DB_STATEMENT]: AttributeType.STRING,
  [AttributeName.DB_SYSTEM]: AttributeType.STRING,
  [AttributeName.DB_SYSTEM_NAME]: AttributeType.STRING,
  [AttributeName.DB_USER]: AttributeType.STRING,
  [AttributeName.DEVICE_BRAND]: AttributeType.STRING,
  [AttributeName.DEVICE_FAMILY]: AttributeType.STRING,
  [AttributeName.DEVICE_MODEL]: AttributeType.STRING,
  [AttributeName.ENVIRONMENT]: AttributeType.STRING,
  [AttributeName.ERROR_TYPE]: AttributeType.STRING,
  [AttributeName.EVENT_ID]: AttributeType.INTEGER,
  [AttributeName.EVENT_NAME]: AttributeType.STRING,
  [AttributeName.EXCEPTION_ESCAPED]: AttributeType.BOOLEAN,
  [AttributeName.EXCEPTION_MESSAGE]: AttributeType.STRING,
  [AttributeName.EXCEPTION_STACKTRACE]: AttributeType.STRING,
  [AttributeName.EXCEPTION_TYPE]: AttributeType.STRING,
  [AttributeName.FAAS_COLDSTART]: AttributeType.BOOLEAN,
  [AttributeName.FAAS_CRON]: AttributeType.STRING,
  [AttributeName.FAAS_TIME]: AttributeType.STRING,
  [AttributeName.FAAS_TRIGGER]: AttributeType.STRING,
  [AttributeName.FLAG_EVALUATION_KEY]: AttributeType.BOOLEAN,
  [AttributeName.FRAMES_DELAY]: AttributeType.INTEGER,
  [AttributeName.FRAMES_FROZEN]: AttributeType.INTEGER,
  [AttributeName.FRAMES_SLOW]: AttributeType.INTEGER,
  [AttributeName.FRAMES_TOTAL]: AttributeType.INTEGER,
  [AttributeName.FS_ERROR]: AttributeType.STRING,
  [AttributeName.GEN_AI_AGENT_NAME]: AttributeType.STRING,
  [AttributeName.GEN_AI_ASSISTANT_MESSAGE]: AttributeType.STRING,
  [AttributeName.GEN_AI_CHOICE]: AttributeType.STRING,
  [AttributeName.GEN_AI_COST_INPUT_TOKENS]: AttributeType.DOUBLE,
  [AttributeName.GEN_AI_COST_OUTPUT_TOKENS]: AttributeType.DOUBLE,
  [AttributeName.GEN_AI_COST_TOTAL_TOKENS]: AttributeType.DOUBLE,
  [AttributeName.GEN_AI_OPERATION_NAME]: AttributeType.STRING,
  [AttributeName.GEN_AI_OPERATION_TYPE]: AttributeType.STRING,
  [AttributeName.GEN_AI_PIPELINE_NAME]: AttributeType.STRING,
  [AttributeName.GEN_AI_PROMPT]: AttributeType.STRING,
  [AttributeName.GEN_AI_REQUEST_AVAILABLE_TOOLS]: AttributeType.STRING,
  [AttributeName.GEN_AI_REQUEST_FREQUENCY_PENALTY]: AttributeType.DOUBLE,
  [AttributeName.GEN_AI_REQUEST_MAX_TOKENS]: AttributeType.INTEGER,
  [AttributeName.GEN_AI_REQUEST_MESSAGES]: AttributeType.STRING,
  [AttributeName.GEN_AI_REQUEST_MODEL]: AttributeType.STRING,
  [AttributeName.GEN_AI_REQUEST_PRESENCE_PENALTY]: AttributeType.DOUBLE,
  [AttributeName.GEN_AI_REQUEST_SEED]: AttributeType.STRING,
  [AttributeName.GEN_AI_REQUEST_TEMPERATURE]: AttributeType.DOUBLE,
  [AttributeName.GEN_AI_REQUEST_TOP_K]: AttributeType.INTEGER,
  [AttributeName.GEN_AI_REQUEST_TOP_P]: AttributeType.DOUBLE,
  [AttributeName.GEN_AI_RESPONSE_FINISH_REASONS]: AttributeType.STRING,
  [AttributeName.GEN_AI_RESPONSE_ID]: AttributeType.STRING,
  [AttributeName.GEN_AI_RESPONSE_MODEL]: AttributeType.STRING,
  [AttributeName.GEN_AI_RESPONSE_STREAMING]: AttributeType.BOOLEAN,
  [AttributeName.GEN_AI_RESPONSE_TEXT]: AttributeType.STRING,
  [AttributeName.GEN_AI_RESPONSE_TOKENS_PER_SECOND]: AttributeType.DOUBLE,
  [AttributeName.GEN_AI_RESPONSE_TOOL_CALLS]: AttributeType.STRING,
  [AttributeName.GEN_AI_SYSTEM]: AttributeType.STRING,
  [AttributeName.GEN_AI_SYSTEM_MESSAGE]: AttributeType.STRING,
  [AttributeName.GEN_AI_TOOL_DESCRIPTION]: AttributeType.STRING,
  [AttributeName.GEN_AI_TOOL_INPUT]: AttributeType.STRING,
  [AttributeName.GEN_AI_TOOL_MESSAGE]: AttributeType.STRING,
  [AttributeName.GEN_AI_TOOL_NAME]: AttributeType.STRING,
  [AttributeName.GEN_AI_TOOL_OUTPUT]: AttributeType.STRING,
  [AttributeName.GEN_AI_TOOL_TYPE]: AttributeType.STRING,
  [AttributeName.GEN_AI_USAGE_COMPLETION_TOKENS]: AttributeType.INTEGER,
  [AttributeName.GEN_AI_USAGE_INPUT_TOKENS]: AttributeType.INTEGER,
  [AttributeName.GEN_AI_USAGE_INPUT_TOKENS_CACHED]: AttributeType.INTEGER,
  [AttributeName.GEN_AI_USAGE_OUTPUT_TOKENS]: AttributeType.INTEGER,
  [AttributeName.GEN_AI_USAGE_OUTPUT_TOKENS_REASONING]: AttributeType.INTEGER,
  [AttributeName.GEN_AI_USAGE_PROMPT_TOKENS]: AttributeType.INTEGER,
  [AttributeName.GEN_AI_USAGE_TOTAL_COST]: AttributeType.DOUBLE,
  [AttributeName.GEN_AI_USAGE_TOTAL_TOKENS]: AttributeType.INTEGER,
  [AttributeName.GEN_AI_USER_MESSAGE]: AttributeType.STRING,
  [AttributeName.GRAPHQL_OPERATION_NAME]: AttributeType.STRING,
  [AttributeName.GRAPHQL_OPERATION_TYPE]: AttributeType.STRING,
  [AttributeName.HTTP_CLIENT_IP]: AttributeType.STRING,
  [AttributeName.HTTP_DECODED_RESPONSE_CONTENT_LENGTH]: AttributeType.INTEGER,
  [AttributeName.HTTP_FLAVOR]: AttributeType.STRING,
  [AttributeName.HTTP_FRAGMENT]: AttributeType.STRING,
  [AttributeName.HTTP_HOST]: AttributeType.STRING,
  [AttributeName.HTTP_METHOD]: AttributeType.STRING,
  [AttributeName.HTTP_QUERY]: AttributeType.STRING,
  [AttributeName.HTTP_REQUEST_CONNECT_START]: AttributeType.DOUBLE,
  [AttributeName.HTTP_REQUEST_CONNECTION_END]: AttributeType.DOUBLE,
  [AttributeName.HTTP_REQUEST_DOMAIN_LOOKUP_END]: AttributeType.DOUBLE,
  [AttributeName.HTTP_REQUEST_DOMAIN_LOOKUP_START]: AttributeType.DOUBLE,
  [AttributeName.HTTP_REQUEST_FETCH_START]: AttributeType.DOUBLE,
  [AttributeName.HTTP_REQUEST_HEADER_KEY]: AttributeType.STRING_ARRAY,
  [AttributeName.HTTP_REQUEST_METHOD]: AttributeType.STRING,
  [AttributeName.HTTP_REQUEST_REDIRECT_END]: AttributeType.DOUBLE,
  [AttributeName.HTTP_REQUEST_REDIRECT_START]: AttributeType.DOUBLE,
  [AttributeName.HTTP_REQUEST_REQUEST_START]: AttributeType.DOUBLE,
  [AttributeName.HTTP_REQUEST_RESEND_COUNT]: AttributeType.INTEGER,
  [AttributeName.HTTP_REQUEST_RESPONSE_END]: AttributeType.DOUBLE,
  [AttributeName.HTTP_REQUEST_RESPONSE_START]: AttributeType.DOUBLE,
  [AttributeName.HTTP_REQUEST_SECURE_CONNECTION_START]: AttributeType.DOUBLE,
  [AttributeName.HTTP_REQUEST_TIME_TO_FIRST_BYTE]: AttributeType.DOUBLE,
  [AttributeName.HTTP_REQUEST_WORKER_START]: AttributeType.DOUBLE,
  [AttributeName.HTTP_RESPONSE_BODY_SIZE]: AttributeType.INTEGER,
  [AttributeName.HTTP_RESPONSE_HEADER_KEY]: AttributeType.STRING_ARRAY,
  [AttributeName.HTTP_RESPONSE_HEADER_CONTENT_LENGTH]: AttributeType.STRING,
  [AttributeName.HTTP_RESPONSE_SIZE]: AttributeType.INTEGER,
  [AttributeName.HTTP_RESPONSE_STATUS_CODE]: AttributeType.INTEGER,
  [AttributeName.HTTP_RESPONSE_CONTENT_LENGTH]: AttributeType.INTEGER,
  [AttributeName.HTTP_RESPONSE_TRANSFER_SIZE]: AttributeType.INTEGER,
  [AttributeName.HTTP_ROUTE]: AttributeType.STRING,
  [AttributeName.HTTP_SCHEME]: AttributeType.STRING,
  [AttributeName.HTTP_SERVER_NAME]: AttributeType.STRING,
  [AttributeName.HTTP_STATUS_CODE]: AttributeType.INTEGER,
  [AttributeName.HTTP_TARGET]: AttributeType.STRING,
  [AttributeName.HTTP_URL]: AttributeType.STRING,
  [AttributeName.HTTP_USER_AGENT]: AttributeType.STRING,
  [AttributeName.ID]: AttributeType.STRING,
  [AttributeName.JVM_GC_ACTION]: AttributeType.STRING,
  [AttributeName.JVM_GC_NAME]: AttributeType.STRING,
  [AttributeName.JVM_MEMORY_POOL_NAME]: AttributeType.STRING,
  [AttributeName.JVM_MEMORY_TYPE]: AttributeType.STRING,
  [AttributeName.JVM_THREAD_DAEMON]: AttributeType.BOOLEAN,
  [AttributeName.JVM_THREAD_STATE]: AttributeType.STRING,
  [AttributeName.LCP_ELEMENT]: AttributeType.STRING,
  [AttributeName.LCP_ID]: AttributeType.STRING,
  [AttributeName.LCP_SIZE]: AttributeType.INTEGER,
  [AttributeName.LCP_URL]: AttributeType.STRING,
  [AttributeName.LOGGER_NAME]: AttributeType.STRING,
  [AttributeName.MESSAGING_DESTINATION_CONNECTION]: AttributeType.STRING,
  [AttributeName.MESSAGING_DESTINATION_NAME]: AttributeType.STRING,
  [AttributeName.MESSAGING_MESSAGE_BODY_SIZE]: AttributeType.INTEGER,
  [AttributeName.MESSAGING_MESSAGE_ENVELOPE_SIZE]: AttributeType.INTEGER,
  [AttributeName.MESSAGING_MESSAGE_ID]: AttributeType.STRING,
  [AttributeName.MESSAGING_MESSAGE_RECEIVE_LATENCY]: AttributeType.INTEGER,
  [AttributeName.MESSAGING_MESSAGE_RETRY_COUNT]: AttributeType.INTEGER,
  [AttributeName.MESSAGING_OPERATION_TYPE]: AttributeType.STRING,
  [AttributeName.MESSAGING_SYSTEM]: AttributeType.STRING,
  [AttributeName.METHOD]: AttributeType.STRING,
  [AttributeName.NAVIGATION_TYPE]: AttributeType.STRING,
  [AttributeName.NEL_ELAPSED_TIME]: AttributeType.INTEGER,
  [AttributeName.NEL_PHASE]: AttributeType.STRING,
  [AttributeName.NEL_REFERRER]: AttributeType.STRING,
  [AttributeName.NEL_SAMPLING_FUNCTION]: AttributeType.DOUBLE,
  [AttributeName.NEL_TYPE]: AttributeType.STRING,
  [AttributeName.NET_HOST_IP]: AttributeType.STRING,
  [AttributeName.NET_HOST_NAME]: AttributeType.STRING,
  [AttributeName.NET_HOST_PORT]: AttributeType.INTEGER,
  [AttributeName.NET_PEER_IP]: AttributeType.STRING,
  [AttributeName.NET_PEER_NAME]: AttributeType.STRING,
  [AttributeName.NET_PEER_PORT]: AttributeType.INTEGER,
  [AttributeName.NET_PROTOCOL_NAME]: AttributeType.STRING,
  [AttributeName.NET_PROTOCOL_VERSION]: AttributeType.STRING,
  [AttributeName.NET_SOCK_FAMILY]: AttributeType.STRING,
  [AttributeName.NET_SOCK_HOST_ADDR]: AttributeType.STRING,
  [AttributeName.NET_SOCK_HOST_PORT]: AttributeType.INTEGER,
  [AttributeName.NET_SOCK_PEER_ADDR]: AttributeType.STRING,
  [AttributeName.NET_SOCK_PEER_NAME]: AttributeType.STRING,
  [AttributeName.NET_SOCK_PEER_PORT]: AttributeType.INTEGER,
  [AttributeName.NET_TRANSPORT]: AttributeType.STRING,
  [AttributeName.NETWORK_LOCAL_ADDRESS]: AttributeType.STRING,
  [AttributeName.NETWORK_LOCAL_PORT]: AttributeType.INTEGER,
  [AttributeName.NETWORK_PEER_ADDRESS]: AttributeType.STRING,
  [AttributeName.NETWORK_PEER_PORT]: AttributeType.INTEGER,
  [AttributeName.NETWORK_PROTOCOL_NAME]: AttributeType.STRING,
  [AttributeName.NETWORK_PROTOCOL_VERSION]: AttributeType.STRING,
  [AttributeName.NETWORK_TRANSPORT]: AttributeType.STRING,
  [AttributeName.NETWORK_TYPE]: AttributeType.STRING,
  [AttributeName.OS_BUILD_ID]: AttributeType.STRING,
  [AttributeName.OS_DESCRIPTION]: AttributeType.STRING,
  [AttributeName.OS_NAME]: AttributeType.STRING,
  [AttributeName.OS_TYPE]: AttributeType.STRING,
  [AttributeName.OS_VERSION]: AttributeType.STRING,
  [AttributeName.OTEL_SCOPE_NAME]: AttributeType.STRING,
  [AttributeName.OTEL_SCOPE_VERSION]: AttributeType.STRING,
  [AttributeName.OTEL_STATUS_CODE]: AttributeType.STRING,
  [AttributeName.OTEL_STATUS_DESCRIPTION]: AttributeType.STRING,
  [AttributeName.PARAMS_KEY]: AttributeType.STRING,
  [AttributeName.PREVIOUS_ROUTE]: AttributeType.STRING,
  [AttributeName.PROCESS_EXECUTABLE_NAME]: AttributeType.STRING,
  [AttributeName.PROCESS_PID]: AttributeType.INTEGER,
  [AttributeName.PROCESS_RUNTIME_DESCRIPTION]: AttributeType.STRING,
  [AttributeName.PROCESS_RUNTIME_NAME]: AttributeType.STRING,
  [AttributeName.PROCESS_RUNTIME_VERSION]: AttributeType.STRING,
  [AttributeName.PROFILE_ID]: AttributeType.STRING,
  [AttributeName.QUERY_KEY]: AttributeType.STRING,
  [AttributeName.RELEASE]: AttributeType.STRING,
  [AttributeName.REMIX_ACTION_FORM_DATA_KEY]: AttributeType.STRING,
  [AttributeName.REPLAY_ID]: AttributeType.STRING,
  [AttributeName.RESOURCE_RENDER_BLOCKING_STATUS]: AttributeType.STRING,
  [AttributeName.ROUTE]: AttributeType.STRING,
  [AttributeName.RPC_GRPC_STATUS_CODE]: AttributeType.INTEGER,
  [AttributeName.RPC_SERVICE]: AttributeType.STRING,
  [AttributeName.SENTRY_INTERNAL_DSC_ENVIRONMENT]: AttributeType.STRING,
  [AttributeName.SENTRY_INTERNAL_DSC_ORG_ID]: AttributeType.STRING,
  [AttributeName.SENTRY_INTERNAL_DSC_PUBLIC_KEY]: AttributeType.STRING,
  [AttributeName.SENTRY_INTERNAL_DSC_RELEASE]: AttributeType.STRING,
  [AttributeName.SENTRY_INTERNAL_DSC_SAMPLE_RAND]: AttributeType.STRING,
  [AttributeName.SENTRY_INTERNAL_DSC_SAMPLE_RATE]: AttributeType.STRING,
  [AttributeName.SENTRY_INTERNAL_DSC_SAMPLED]: AttributeType.BOOLEAN,
  [AttributeName.SENTRY_INTERNAL_DSC_TRACE_ID]: AttributeType.STRING,
  [AttributeName.SENTRY_INTERNAL_DSC_TRANSACTION]: AttributeType.STRING,
  [AttributeName.SENTRY_INTERNAL_OBSERVED_TIMESTAMP_NANOS]: AttributeType.STRING,
  [AttributeName.SENTRY_INTERNAL_REPLAY_IS_BUFFERING]: AttributeType.BOOLEAN,
  [AttributeName.SENTRY_BROWSER_NAME]: AttributeType.STRING,
  [AttributeName.SENTRY_BROWSER_VERSION]: AttributeType.STRING,
  [AttributeName.SENTRY_CANCELLATION_REASON]: AttributeType.STRING,
  [AttributeName.SENTRY_CLIENT_SAMPLE_RATE]: AttributeType.DOUBLE,
  [AttributeName.SENTRY_DESCRIPTION]: AttributeType.STRING,
  [AttributeName.SENTRY_DIST]: AttributeType.STRING,
  [AttributeName.SENTRY_ENVIRONMENT]: AttributeType.STRING,
  [AttributeName.SENTRY_EXCLUSIVE_TIME]: AttributeType.INTEGER,
  [AttributeName.SENTRY_HTTP_PREFETCH]: AttributeType.BOOLEAN,
  [AttributeName.SENTRY_IDLE_SPAN_FINISH_REASON]: AttributeType.STRING,
  [AttributeName.SENTRY_MESSAGE_PARAMETER_KEY]: AttributeType.STRING,
  [AttributeName.SENTRY_MESSAGE_TEMPLATE]: AttributeType.STRING,
  [AttributeName.SENTRY_MODULE_KEY]: AttributeType.STRING,
  [AttributeName.SENTRY_NEXTJS_SSR_FUNCTION_ROUTE]: AttributeType.STRING,
  [AttributeName.SENTRY_NEXTJS_SSR_FUNCTION_TYPE]: AttributeType.STRING,
  [AttributeName.SENTRY_OBSERVED_TIMESTAMP_NANOS]: AttributeType.STRING,
  [AttributeName.SENTRY_OP]: AttributeType.STRING,
  [AttributeName.SENTRY_ORIGIN]: AttributeType.STRING,
  [AttributeName.SENTRY_PLATFORM]: AttributeType.STRING,
  [AttributeName.SENTRY_PROFILE_ID]: AttributeType.STRING,
  [AttributeName.SENTRY_RELEASE]: AttributeType.STRING,
  [AttributeName.SENTRY_REPLAY_ID]: AttributeType.STRING,
  [AttributeName.SENTRY_SDK_INTEGRATIONS]: AttributeType.STRING_ARRAY,
  [AttributeName.SENTRY_SDK_NAME]: AttributeType.STRING,
  [AttributeName.SENTRY_SDK_VERSION]: AttributeType.STRING,
  [AttributeName.SENTRY_SEGMENT_ID]: AttributeType.STRING,
  [AttributeName.SENTRY_SEGMENT_NAME]: AttributeType.STRING,
  [AttributeName._SENTRY_SEGMENT_ID]: AttributeType.STRING,
  [AttributeName.SENTRY_SERVER_SAMPLE_RATE]: AttributeType.DOUBLE,
  [AttributeName.SENTRY_SPAN_SOURCE]: AttributeType.STRING,
  [AttributeName.SENTRY_TRACE_PARENT_SPAN_ID]: AttributeType.STRING,
  [AttributeName.SENTRY_TRANSACTION]: AttributeType.STRING,
  [AttributeName.SERVER_ADDRESS]: AttributeType.STRING,
  [AttributeName.SERVER_PORT]: AttributeType.INTEGER,
  [AttributeName.SERVICE_NAME]: AttributeType.STRING,
  [AttributeName.SERVICE_VERSION]: AttributeType.STRING,
  [AttributeName.THREAD_ID]: AttributeType.INTEGER,
  [AttributeName.THREAD_NAME]: AttributeType.STRING,
  [AttributeName.TRANSACTION]: AttributeType.STRING,
  [AttributeName.TYPE]: AttributeType.STRING,
  [AttributeName.UI_COMPONENT_NAME]: AttributeType.STRING,
  [AttributeName.UI_CONTRIBUTES_TO_TTFD]: AttributeType.BOOLEAN,
  [AttributeName.UI_CONTRIBUTES_TO_TTID]: AttributeType.BOOLEAN,
  [AttributeName.URL_DOMAIN]: AttributeType.STRING,
  [AttributeName.URL_FRAGMENT]: AttributeType.STRING,
  [AttributeName.URL_FULL]: AttributeType.STRING,
  [AttributeName.URL_PATH]: AttributeType.STRING,
  [AttributeName.URL_PATH_PARAMETER_KEY]: AttributeType.STRING,
  [AttributeName.URL_PORT]: AttributeType.INTEGER,
  [AttributeName.URL_QUERY]: AttributeType.STRING,
  [AttributeName.URL_SCHEME]: AttributeType.STRING,
  [AttributeName.URL_TEMPLATE]: AttributeType.STRING,
  [AttributeName.URL]: AttributeType.STRING,
  [AttributeName.USER_EMAIL]: AttributeType.STRING,
  [AttributeName.USER_FULL_NAME]: AttributeType.STRING,
  [AttributeName.USER_GEO_CITY]: AttributeType.STRING,
  [AttributeName.USER_GEO_COUNTRY_CODE]: AttributeType.STRING,
  [AttributeName.USER_GEO_REGION]: AttributeType.STRING,
  [AttributeName.USER_GEO_SUBDIVISION]: AttributeType.STRING,
  [AttributeName.USER_HASH]: AttributeType.STRING,
  [AttributeName.USER_ID]: AttributeType.STRING,
  [AttributeName.USER_IP_ADDRESS]: AttributeType.STRING,
  [AttributeName.USER_NAME]: AttributeType.STRING,
  [AttributeName.USER_ROLES]: AttributeType.STRING_ARRAY,
  [AttributeName.USER_AGENT_ORIGINAL]: AttributeType.STRING,
};

export const ATTRIBUTE_METADATA: Record<AttributeName, AttributeMetadata> = {
  [AttributeName.AI_CITATIONS]: {
    brief: 'References or sources cited by the AI model in its response.',
    type: AttributeType.STRING_ARRAY,
    pii: {
      isPii: IsPii.TRUE,
    },
    isInOtel: false,
    example: ['Citation 1', 'Citation 2'],
  },
  [AttributeName.AI_COMPLETION_TOKENS_USED]: {
    brief: 'The number of tokens used to respond to the message.',
    type: AttributeType.INTEGER,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: 10,
    deprecation: {
      replacement: 'gen_ai.usage.output_tokens',
    },
    aliases: ['gen_ai.usage.output_tokens', 'gen_ai.usage.completion_tokens'],
    sdks: ['python'],
  },
  [AttributeName.AI_DOCUMENTS]: {
    brief: 'Documents or content chunks used as context for the AI model.',
    type: AttributeType.STRING_ARRAY,
    pii: {
      isPii: IsPii.TRUE,
    },
    isInOtel: false,
    example: ['document1.txt', 'document2.pdf'],
  },
  [AttributeName.AI_FINISH_REASON]: {
    brief: 'The reason why the model stopped generating.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: false,
    example: 'COMPLETE',
    deprecation: {
      replacement: 'gen_ai.response.finish_reason',
    },
    aliases: ['gen_ai.response.finish_reasons'],
  },
  [AttributeName.AI_FREQUENCY_PENALTY]: {
    brief:
      'Used to reduce repetitiveness of generated tokens. The higher the value, the stronger a penalty is applied to previously present tokens, proportional to how many times they have already appeared in the prompt or prior generation.',
    type: AttributeType.DOUBLE,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: 0.5,
    deprecation: {
      replacement: 'gen_ai.request.frequency_penalty',
    },
    aliases: ['gen_ai.request.frequency_penalty'],
  },
  [AttributeName.AI_FUNCTION_CALL]: {
    brief:
      'For an AI model call, the function that was called. This is deprecated for OpenAI, and replaced by tool_calls',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.TRUE,
    },
    isInOtel: false,
    example: 'function_name',
    deprecation: {
      replacement: 'gen_ai.tool.name',
    },
    aliases: ['gen_ai.tool.name'],
  },
  [AttributeName.AI_GENERATION_ID]: {
    brief: 'Unique identifier for the completion.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: false,
    example: 'gen_123abc',
    deprecation: {
      replacement: 'gen_ai.response.id',
    },
    aliases: ['gen_ai.response.id'],
  },
  [AttributeName.AI_INPUT_MESSAGES]: {
    brief: 'The input messages sent to the model',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: false,
    example: '[{"role": "user", "message": "hello"}]',
    deprecation: {
      replacement: 'gen_ai.request.messages',
    },
    aliases: ['gen_ai.request.messages'],
    sdks: ['python'],
  },
  [AttributeName.AI_IS_SEARCH_REQUIRED]: {
    brief: 'Boolean indicating if the model needs to perform a search.',
    type: AttributeType.BOOLEAN,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: false,
  },
  [AttributeName.AI_METADATA]: {
    brief: 'Extra metadata passed to an AI pipeline step.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: false,
    example: '{"user_id": 123, "session_id": "abc123"}',
  },
  [AttributeName.AI_MODEL_PROVIDER]: {
    brief: 'The provider of the model.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: false,
    example: 'openai',
    deprecation: {
      replacement: 'gen_ai.system',
    },
    aliases: ['gen_ai.system'],
  },
  [AttributeName.AI_MODEL_ID]: {
    brief: 'The vendor-specific ID of the model used.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: false,
    example: 'gpt-4',
    deprecation: {
      replacement: 'gen_ai.response.model',
    },
    aliases: ['gen_ai.response.model'],
    sdks: ['python'],
  },
  [AttributeName.AI_PIPELINE_NAME]: {
    brief: 'The name of the AI pipeline.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: false,
    example: 'Autofix Pipeline',
    deprecation: {
      replacement: 'gen_ai.pipeline.name',
    },
    aliases: ['gen_ai.pipeline.name'],
  },
  [AttributeName.AI_PREAMBLE]: {
    brief:
      "For an AI model call, the preamble parameter. Preambles are a part of the prompt used to adjust the model's overall behavior and conversation style.",
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.TRUE,
    },
    isInOtel: false,
    example: 'You are now a clown.',
  },
  [AttributeName.AI_PRESENCE_PENALTY]: {
    brief:
      'Used to reduce repetitiveness of generated tokens. Similar to frequency_penalty, except that this penalty is applied equally to all tokens that have already appeared, regardless of their exact frequencies.',
    type: AttributeType.DOUBLE,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: 0.5,
    deprecation: {
      replacement: 'gen_ai.request.presence_penalty',
    },
    aliases: ['gen_ai.request.presence_penalty'],
  },
  [AttributeName.AI_PROMPT_TOKENS_USED]: {
    brief: 'The number of tokens used to process just the prompt.',
    type: AttributeType.INTEGER,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: 20,
    deprecation: {
      replacement: 'gen_ai.usage.input_tokens',
    },
    aliases: ['gen_ai.usage.prompt_tokens', 'gen_ai.usage.input_tokens'],
    sdks: ['python'],
  },
  [AttributeName.AI_RAW_PROMPTING]: {
    brief: 'When enabled, the user’s prompt will be sent to the model without any pre-processing.',
    type: AttributeType.BOOLEAN,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: true,
  },
  [AttributeName.AI_RESPONSE_FORMAT]: {
    brief: 'For an AI model call, the format of the response',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: false,
    example: 'json_object',
  },
  [AttributeName.AI_RESPONSES]: {
    brief: 'The response messages sent back by the AI model.',
    type: AttributeType.STRING_ARRAY,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: false,
    example: ['hello', 'world'],
    deprecation: {
      replacement: 'gen_ai.response.text',
    },
    sdks: ['python'],
  },
  [AttributeName.AI_SEARCH_QUERIES]: {
    brief: 'Queries used to search for relevant context or documents.',
    type: AttributeType.STRING_ARRAY,
    pii: {
      isPii: IsPii.TRUE,
    },
    isInOtel: false,
    example: ['climate change effects', 'renewable energy'],
  },
  [AttributeName.AI_SEARCH_RESULTS]: {
    brief: 'Results returned from search queries for context.',
    type: AttributeType.STRING_ARRAY,
    pii: {
      isPii: IsPii.TRUE,
    },
    isInOtel: false,
    example: ['search_result_1, search_result_2'],
  },
  [AttributeName.AI_SEED]: {
    brief: 'The seed, ideally models given the same seed and same other parameters will produce the exact same output.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: false,
    example: '1234567890',
    deprecation: {
      replacement: 'gen_ai.request.seed',
    },
    aliases: ['gen_ai.request.seed'],
  },
  [AttributeName.AI_STREAMING]: {
    brief: 'Whether the request was streamed back.',
    type: AttributeType.BOOLEAN,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: true,
    deprecation: {
      replacement: 'gen_ai.response.streaming',
    },
    aliases: ['gen_ai.response.streaming'],
    sdks: ['python'],
  },
  [AttributeName.AI_TAGS]: {
    brief: 'Tags that describe an AI pipeline step.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: false,
    example: '{"executed_function": "add_integers"}',
  },
  [AttributeName.AI_TEMPERATURE]: {
    brief:
      'For an AI model call, the temperature parameter. Temperature essentially means how random the output will be.',
    type: AttributeType.DOUBLE,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: 0.1,
    deprecation: {
      replacement: 'gen_ai.request.temperature',
    },
    aliases: ['gen_ai.request.temperature'],
  },
  [AttributeName.AI_TEXTS]: {
    brief: 'Raw text inputs provided to the model.',
    type: AttributeType.STRING_ARRAY,
    pii: {
      isPii: IsPii.TRUE,
    },
    isInOtel: false,
    example: ['Hello, how are you?', 'What is the capital of France?'],
  },
  [AttributeName.AI_TOOL_CALLS]: {
    brief: 'For an AI model call, the tool calls that were made.',
    type: AttributeType.STRING_ARRAY,
    pii: {
      isPii: IsPii.TRUE,
    },
    isInOtel: false,
    example: ['tool_call_1', 'tool_call_2'],
    deprecation: {
      replacement: 'gen_ai.response.tool_calls',
    },
  },
  [AttributeName.AI_TOOLS]: {
    brief: 'For an AI model call, the functions that are available',
    type: AttributeType.STRING_ARRAY,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: false,
    example: ['function_1', 'function_2'],
    deprecation: {
      replacement: 'gen_ai.request.available_tools',
    },
  },
  [AttributeName.AI_TOP_K]: {
    brief:
      'Limits the model to only consider the K most likely next tokens, where K is an integer (e.g., top_k=20 means only the 20 highest probability tokens are considered).',
    type: AttributeType.INTEGER,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: 35,
    deprecation: {
      replacement: 'gen_ai.request.top_k',
    },
    aliases: ['gen_ai.request.top_k'],
  },
  [AttributeName.AI_TOP_P]: {
    brief:
      'Limits the model to only consider tokens whose cumulative probability mass adds up to p, where p is a float between 0 and 1 (e.g., top_p=0.7 means only tokens that sum up to 70% of the probability mass are considered).',
    type: AttributeType.DOUBLE,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: 0.7,
    deprecation: {
      replacement: 'gen_ai.request.top_p',
    },
    aliases: ['gen_ai.request.top_p'],
  },
  [AttributeName.AI_TOTAL_COST]: {
    brief: 'The total cost for the tokens used.',
    type: AttributeType.DOUBLE,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: 12.34,
  },
  [AttributeName.AI_TOTAL_TOKENS_USED]: {
    brief: 'The total number of tokens used to process the prompt.',
    type: AttributeType.INTEGER,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: 30,
    deprecation: {
      replacement: 'gen_ai.usage.total_tokens',
    },
    aliases: ['gen_ai.usage.total_tokens'],
    sdks: ['python'],
  },
  [AttributeName.AI_WARNINGS]: {
    brief: 'Warning messages generated during model execution.',
    type: AttributeType.STRING_ARRAY,
    pii: {
      isPii: IsPii.TRUE,
    },
    isInOtel: false,
    example: ['Token limit exceeded'],
  },
  [AttributeName.APP_START_TYPE]: {
    brief: 'Mobile app start variant. Either cold or warm.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: false,
    example: 'cold',
  },
  [AttributeName.BLOCKED_MAIN_THREAD]: {
    brief: 'Whether the main thread was blocked by the span.',
    type: AttributeType.BOOLEAN,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: true,
  },
  [AttributeName.BROWSER_NAME]: {
    brief: 'The name of the browser.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: false,
    example: 'Chrome',
    aliases: ['sentry.browser.name'],
  },
  [AttributeName.BROWSER_REPORT_TYPE]: {
    brief: 'A browser report sent via reporting API..',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: false,
    example: 'network-error',
  },
  [AttributeName.BROWSER_SCRIPT_INVOKER]: {
    brief: 'How a script was called in the browser.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: false,
    example: 'Window.requestAnimationFrame',
    sdks: ['browser'],
  },
  [AttributeName.BROWSER_SCRIPT_INVOKER_TYPE]: {
    brief: 'Browser script entry point type.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: false,
    example: 'event-listener',
    sdks: ['browser'],
  },
  [AttributeName.BROWSER_SCRIPT_SOURCE_CHAR_POSITION]: {
    brief: 'A number representing the script character position of the script.',
    type: AttributeType.INTEGER,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: 678,
    sdks: ['browser'],
  },
  [AttributeName.BROWSER_VERSION]: {
    brief: 'The version of the browser.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: false,
    example: '120.0.6099.130',
    aliases: ['sentry.browser.version'],
  },
  [AttributeName.CACHE_HIT]: {
    brief: 'If the cache was hit during this span.',
    type: AttributeType.BOOLEAN,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: true,
    sdks: ['php-laravel'],
  },
  [AttributeName.CACHE_ITEM_SIZE]: {
    brief: 'The size of the requested item in the cache. In bytes.',
    type: AttributeType.INTEGER,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: 58,
  },
  [AttributeName.CACHE_KEY]: {
    brief: 'The key of the cache accessed.',
    type: AttributeType.STRING_ARRAY,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: false,
    example: ['my-cache-key', 'my-other-cache-key'],
    sdks: ['php-laravel'],
  },
  [AttributeName.CACHE_OPERATION]: {
    brief: 'The operation being performed on the cache.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: false,
    example: 'get',
    sdks: ['php-laravel'],
  },
  [AttributeName.CACHE_TTL]: {
    brief: 'The ttl of the cache in seconds',
    type: AttributeType.INTEGER,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: 120,
    sdks: ['php-laravel'],
  },
  [AttributeName.CHANNEL]: {
    brief: 'The channel name that is being used.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: false,
    example: 'mail',
    sdks: ['php-laravel'],
  },
  [AttributeName.CLIENT_ADDRESS]: {
    brief:
      'Client address - domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.TRUE,
    },
    isInOtel: true,
    example: 'example.com',
    aliases: ['http.client_ip'],
  },
  [AttributeName.CLIENT_PORT]: {
    brief: 'Client port number.',
    type: AttributeType.INTEGER,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: true,
    example: 5432,
  },
  [AttributeName.CLOUDFLARE_D1_DURATION]: {
    brief: 'The duration of a Cloudflare D1 operation.',
    type: AttributeType.INTEGER,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: 543,
    sdks: ['javascript-cloudflare'],
  },
  [AttributeName.CLOUDFLARE_D1_ROWS_READ]: {
    brief: 'The number of rows read in a Cloudflare D1 operation.',
    type: AttributeType.INTEGER,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: 12,
    sdks: ['javascript-cloudflare'],
  },
  [AttributeName.CLOUDFLARE_D1_ROWS_WRITTEN]: {
    brief: 'The number of rows written in a Cloudflare D1 operation.',
    type: AttributeType.INTEGER,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: 12,
    sdks: ['javascript-cloudflare'],
  },
  [AttributeName.CODE_FILE_PATH]: {
    brief:
      'The source code file name that identifies the code unit as uniquely as possible (preferably an absolute file path).',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: '/app/myapplication/http/handler/server.py',
    aliases: ['code.filepath'],
  },
  [AttributeName.CODE_FILEPATH]: {
    brief:
      'The source code file name that identifies the code unit as uniquely as possible (preferably an absolute file path).',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: '/app/myapplication/http/handler/server.py',
    deprecation: {
      replacement: 'code.file.path',
    },
    aliases: ['code.file.path'],
  },
  [AttributeName.CODE_FUNCTION]: {
    brief: "The method or function name, or equivalent (usually rightmost part of the code unit's name).",
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: 'server_request',
    deprecation: {
      replacement: 'code.function.name',
    },
    aliases: ['code.function.name'],
  },
  [AttributeName.CODE_FUNCTION_NAME]: {
    brief: "The method or function name, or equivalent (usually rightmost part of the code unit's name).",
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: 'server_request',
    aliases: ['code.function'],
  },
  [AttributeName.CODE_LINE_NUMBER]: {
    brief:
      'The line number in code.filepath best representing the operation. It SHOULD point within the code unit named in code.function',
    type: AttributeType.INTEGER,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: true,
    example: 42,
    aliases: ['code.lineno'],
  },
  [AttributeName.CODE_LINENO]: {
    brief:
      'The line number in code.filepath best representing the operation. It SHOULD point within the code unit named in code.function',
    type: AttributeType.INTEGER,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: true,
    example: 42,
    deprecation: {
      replacement: 'code.line.number',
    },
    aliases: ['code.line.number'],
  },
  [AttributeName.CODE_NAMESPACE]: {
    brief:
      "The 'namespace' within which code.function is defined. Usually the qualified class or module name, such that code.namespace + some separator + code.function form a unique identifier for the code unit.",
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: 'http.handler',
    deprecation: {
      replacement: 'code.function.name',
      reason: 'code.function.name should include the namespace.',
    },
  },
  [AttributeName.DB_COLLECTION_NAME]: {
    brief: 'The name of a collection (table, container) within the database.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: 'users',
  },
  [AttributeName.DB_NAME]: {
    brief: 'The name of the database being accessed.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: 'customers',
    deprecation: {
      replacement: 'db.namespace',
    },
    aliases: ['db.namespace'],
  },
  [AttributeName.DB_NAMESPACE]: {
    brief: 'The name of the database being accessed.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: 'customers',
    aliases: ['db.name'],
  },
  [AttributeName.DB_OPERATION]: {
    brief: 'The name of the operation being executed.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: 'SELECT',
    deprecation: {
      replacement: 'db.operation.name',
    },
    aliases: ['db.operation.name'],
  },
  [AttributeName.DB_OPERATION_NAME]: {
    brief: 'The name of the operation being executed.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: 'SELECT',
    aliases: ['db.operation'],
  },
  [AttributeName.DB_QUERY_PARAMETER_KEY]: {
    brief:
      'A query parameter used in db.query.text, with <key> being the parameter name, and the attribute value being a string representation of the parameter value.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    hasDynamicSuffix: true,
    example: "db.query.parameter.foo='123'",
  },
  [AttributeName.DB_QUERY_SUMMARY]: {
    brief:
      'A database query being executed. Should be paramaterized. The full version of the query is in `db.query.text`.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: 'SELECT * FROM users',
  },
  [AttributeName.DB_QUERY_TEXT]: {
    brief:
      'The database query being executed. Should be the full query, not a parameterized version. The parameterized version is in `db.query.summary`.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: 'SELECT * FROM users',
    aliases: ['db.statement'],
  },
  [AttributeName.DB_REDIS_CONNECTION]: {
    brief: 'The redis connection name.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: false,
    example: 'my-redis-instance',
    sdks: ['php-laravel'],
  },
  [AttributeName.DB_REDIS_PARAMETERS]: {
    brief: 'The array of command parameters given to a redis command.',
    type: AttributeType.STRING_ARRAY,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: false,
    example: ['test', '*'],
    sdks: ['php-laravel'],
  },
  [AttributeName.DB_SQL_BINDINGS]: {
    brief: 'The array of query bindings.',
    type: AttributeType.STRING_ARRAY,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: false,
    example: ['1', 'foo'],
    deprecation: {
      replacement: 'db.query.parameter.<key>',
      reason:
        'Instead of adding every binding in the db.sql.bindings attribute, add them as individual entires with db.query.parameter.<key>.',
    },
    sdks: ['php-laravel'],
  },
  [AttributeName.DB_STATEMENT]: {
    brief: 'The database statement being executed.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: 'SELECT * FROM users',
    deprecation: {
      replacement: 'db.query.text',
    },
    aliases: ['db.query.text'],
  },
  [AttributeName.DB_SYSTEM]: {
    brief:
      'An identifier for the database management system (DBMS) product being used. See [OpenTelemetry docs](https://github.com/open-telemetry/semantic-conventions/blob/main/docs/database/database-spans.md#notes-and-well-known-identifiers-for-dbsystem) for a list of well-known identifiers.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: 'postgresql',
    deprecation: {
      replacement: 'db.system.name',
    },
    aliases: ['db.system.name'],
  },
  [AttributeName.DB_SYSTEM_NAME]: {
    brief:
      'An identifier for the database management system (DBMS) product being used. See [OpenTelemetry docs](https://github.com/open-telemetry/semantic-conventions/blob/main/docs/database/database-spans.md#notes-and-well-known-identifiers-for-dbsystem) for a list of well-known identifiers.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: 'postgresql',
    aliases: ['db.system'],
  },
  [AttributeName.DB_USER]: {
    brief: 'The database user.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.TRUE,
    },
    isInOtel: true,
    example: 'fancy_user',
  },
  [AttributeName.DEVICE_BRAND]: {
    brief: 'The brand of the device.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: false,
    example: 'Apple',
  },
  [AttributeName.DEVICE_FAMILY]: {
    brief: 'The family of the device.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: false,
    example: 'iPhone',
  },
  [AttributeName.DEVICE_MODEL]: {
    brief: 'The model of the device.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: false,
    example: 'iPhone 15 Pro Max',
  },
  [AttributeName.ENVIRONMENT]: {
    brief: 'The sentry environment.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: false,
    example: 'production',
    deprecation: {
      replacement: 'sentry.environment',
    },
    aliases: ['sentry.environment'],
  },
  [AttributeName.ERROR_TYPE]: {
    brief: 'Describes a class of error the operation ended with.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: 'timeout',
  },
  [AttributeName.EVENT_ID]: {
    brief: 'The unique identifier for this event (log record)',
    type: AttributeType.INTEGER,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: 1234567890,
  },
  [AttributeName.EVENT_NAME]: {
    brief: 'The name that uniquely identifies this event (log record)',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: false,
    example: 'Process Payload',
  },
  [AttributeName.EXCEPTION_ESCAPED]: {
    brief:
      'SHOULD be set to true if the exception event is recorded at a point where it is known that the exception is escaping the scope of the span.',
    type: AttributeType.BOOLEAN,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: true,
    example: true,
  },
  [AttributeName.EXCEPTION_MESSAGE]: {
    brief: 'The error message.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: 'ENOENT: no such file or directory',
  },
  [AttributeName.EXCEPTION_STACKTRACE]: {
    brief:
      'A stacktrace as a string in the natural representation for the language runtime. The representation is to be determined and documented by each language SIG.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example:
      'Exception in thread "main" java.lang.RuntimeException: Test exception\n at com.example.GenerateTrace.methodB(GenerateTrace.java:13)\n at com.example.GenerateTrace.methodA(GenerateTrace.java:9)\n at com.example.GenerateTrace.main(GenerateTrace.java:5)',
  },
  [AttributeName.EXCEPTION_TYPE]: {
    brief:
      'The type of the exception (its fully-qualified class name, if applicable). The dynamic type of the exception should be preferred over the static type in languages that support it.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: 'OSError',
  },
  [AttributeName.FAAS_COLDSTART]: {
    brief: 'A boolean that is true if the serverless function is executed for the first time (aka cold-start).',
    type: AttributeType.BOOLEAN,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: true,
    example: true,
  },
  [AttributeName.FAAS_CRON]: {
    brief: 'A string containing the schedule period as Cron Expression.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: '0/5 * * * ? *',
  },
  [AttributeName.FAAS_TIME]: {
    brief: 'A string containing the function invocation time in the ISO 8601 format expressed in UTC.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: '2020-01-23T13:47:06Z',
  },
  [AttributeName.FAAS_TRIGGER]: {
    brief: 'Type of the trigger which caused this function invocation.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: 'timer',
  },
  [AttributeName.FLAG_EVALUATION_KEY]: {
    brief:
      'An instance of a feature flag evaluation. The value of this attribute is the boolean representing the evaluation result. The <key> suffix is the name of the feature flag.',
    type: AttributeType.BOOLEAN,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    hasDynamicSuffix: true,
    example: 'flag.evaluation.is_new_ui=true',
  },
  [AttributeName.FRAMES_DELAY]: {
    brief:
      'The sum of all delayed frame durations in seconds during the lifetime of the span. For more information see [frames delay](https://develop.sentry.dev/sdk/performance/frames-delay/).',
    type: AttributeType.INTEGER,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: 5,
  },
  [AttributeName.FRAMES_FROZEN]: {
    brief: 'The number of frozen frames rendered during the lifetime of the span.',
    type: AttributeType.INTEGER,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: 3,
  },
  [AttributeName.FRAMES_SLOW]: {
    brief: 'The number of slow frames rendered during the lifetime of the span.',
    type: AttributeType.INTEGER,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: 1,
  },
  [AttributeName.FRAMES_TOTAL]: {
    brief: 'The number of total frames rendered during the lifetime of the span.',
    type: AttributeType.INTEGER,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: 60,
  },
  [AttributeName.FS_ERROR]: {
    brief: 'The error message of a file system error.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: false,
    example: 'ENOENT: no such file or directory',
    deprecation: {
      replacement: 'error.type',
      reason: 'This attribute is not part of the OpenTelemetry specification and error.type fits much better.',
    },
    sdks: ['javascript-node'],
  },
  [AttributeName.GEN_AI_AGENT_NAME]: {
    brief: 'The name of the agent being used.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: 'ResearchAssistant',
  },
  [AttributeName.GEN_AI_ASSISTANT_MESSAGE]: {
    brief: 'The assistant message passed to the model.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.TRUE,
    },
    isInOtel: false,
    example: 'get_weather tool call',
  },
  [AttributeName.GEN_AI_CHOICE]: {
    brief: "The model's response message.",
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.TRUE,
    },
    isInOtel: false,
    example: 'The weather in Paris is rainy and overcast, with temperatures around 57°F',
  },
  [AttributeName.GEN_AI_COST_INPUT_TOKENS]: {
    brief: 'The cost of tokens used to process the AI input (prompt) in USD (without cached input tokens).',
    type: AttributeType.DOUBLE,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: 123.45,
  },
  [AttributeName.GEN_AI_COST_OUTPUT_TOKENS]: {
    brief: 'The cost of tokens used for creating the AI output in USD (without reasoning tokens).',
    type: AttributeType.DOUBLE,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: 123.45,
  },
  [AttributeName.GEN_AI_COST_TOTAL_TOKENS]: {
    brief: 'The total cost for the tokens used.',
    type: AttributeType.DOUBLE,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: 12.34,
  },
  [AttributeName.GEN_AI_OPERATION_NAME]: {
    brief: 'The name of the operation being performed.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: 'chat',
  },
  [AttributeName.GEN_AI_OPERATION_TYPE]: {
    brief:
      "The type of AI operation. Must be one of 'agent', 'ai_client', 'tool', 'handoff', 'guardrail'. Makes querying for spans in the UI easier.",
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: false,
    example: 'tool',
  },
  [AttributeName.GEN_AI_PIPELINE_NAME]: {
    brief: 'Name of the AI pipeline or chain being executed.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: false,
    example: 'Autofix Pipeline',
    aliases: ['ai.pipeline.name'],
  },
  [AttributeName.GEN_AI_PROMPT]: {
    brief: 'The input messages sent to the model',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: '[{"role": "user", "message": "hello"}]',
    deprecation: {
      reason: 'Deprecated from OTEL, use gen_ai.input.messages with the new format instead.',
    },
  },
  [AttributeName.GEN_AI_REQUEST_AVAILABLE_TOOLS]: {
    brief: 'The available tools for the model. It has to be a stringified version of an array of objects.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: false,
    example:
      '[{"name": "get_weather", "description": "Get the weather for a given location"}, {"name": "get_news", "description": "Get the news for a given topic"}]',
  },
  [AttributeName.GEN_AI_REQUEST_FREQUENCY_PENALTY]: {
    brief:
      'Used to reduce repetitiveness of generated tokens. The higher the value, the stronger a penalty is applied to previously present tokens, proportional to how many times they have already appeared in the prompt or prior generation.',
    type: AttributeType.DOUBLE,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: true,
    example: 0.5,
    aliases: ['ai.frequency_penalty'],
  },
  [AttributeName.GEN_AI_REQUEST_MAX_TOKENS]: {
    brief: 'The maximum number of tokens to generate in the response.',
    type: AttributeType.INTEGER,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: true,
    example: 2048,
  },
  [AttributeName.GEN_AI_REQUEST_MESSAGES]: {
    brief:
      'The messages passed to the model. It has to be a stringified version of an array of objects. The `role` attribute of each object must be `"user"`, `"assistant"`, `"tool"`, or `"system"`. For messages of the role `"tool"`, the `content` can be a string or an arbitrary object with information about the tool call. For other messages the `content` can be either a string or a list of objects in the format `{type: "text", text:"..."}`.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: false,
    example:
      '[{"role": "system", "content": "Generate a random number."}, {"role": "user", "content": [{"text": "Generate a random number between 0 and 10.", "type": "text"}]}, {"role": "tool", "content": {"toolCallId": "1", "toolName": "Weather", "output": "rainy"}}]',
    aliases: ['ai.input_messages'],
  },
  [AttributeName.GEN_AI_REQUEST_MODEL]: {
    brief: 'The model identifier being used for the request.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: 'gpt-4-turbo-preview',
  },
  [AttributeName.GEN_AI_REQUEST_PRESENCE_PENALTY]: {
    brief:
      'Used to reduce repetitiveness of generated tokens. Similar to frequency_penalty, except that this penalty is applied equally to all tokens that have already appeared, regardless of their exact frequencies.',
    type: AttributeType.DOUBLE,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: true,
    example: 0.5,
    aliases: ['ai.presence_penalty'],
  },
  [AttributeName.GEN_AI_REQUEST_SEED]: {
    brief: 'The seed, ideally models given the same seed and same other parameters will produce the exact same output.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: '1234567890',
    aliases: ['ai.seed'],
  },
  [AttributeName.GEN_AI_REQUEST_TEMPERATURE]: {
    brief:
      'For an AI model call, the temperature parameter. Temperature essentially means how random the output will be.',
    type: AttributeType.DOUBLE,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: true,
    example: 0.1,
    aliases: ['ai.temperature'],
  },
  [AttributeName.GEN_AI_REQUEST_TOP_K]: {
    brief:
      'Limits the model to only consider the K most likely next tokens, where K is an integer (e.g., top_k=20 means only the 20 highest probability tokens are considered).',
    type: AttributeType.INTEGER,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: true,
    example: 35,
    aliases: ['ai.top_k'],
  },
  [AttributeName.GEN_AI_REQUEST_TOP_P]: {
    brief:
      'Limits the model to only consider tokens whose cumulative probability mass adds up to p, where p is a float between 0 and 1 (e.g., top_p=0.7 means only tokens that sum up to 70% of the probability mass are considered).',
    type: AttributeType.DOUBLE,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: true,
    example: 0.7,
    aliases: ['ai.top_p'],
  },
  [AttributeName.GEN_AI_RESPONSE_FINISH_REASONS]: {
    brief: 'The reason why the model stopped generating.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: 'COMPLETE',
    aliases: ['ai.finish_reason'],
  },
  [AttributeName.GEN_AI_RESPONSE_ID]: {
    brief: 'Unique identifier for the completion.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: 'gen_123abc',
    aliases: ['ai.generation_id'],
  },
  [AttributeName.GEN_AI_RESPONSE_MODEL]: {
    brief: 'The vendor-specific ID of the model used.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: 'gpt-4',
    aliases: ['ai.model_id'],
  },
  [AttributeName.GEN_AI_RESPONSE_STREAMING]: {
    brief: "Whether or not the AI model call's response was streamed back asynchronously",
    type: AttributeType.BOOLEAN,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: true,
    aliases: ['ai.streaming'],
  },
  [AttributeName.GEN_AI_RESPONSE_TEXT]: {
    brief:
      "The model's response text messages. It has to be a stringified version of an array of response text messages.",
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: false,
    example:
      '["The weather in Paris is rainy and overcast, with temperatures around 57°F", "The weather in London is sunny and warm, with temperatures around 65°F"]',
  },
  [AttributeName.GEN_AI_RESPONSE_TOKENS_PER_SECOND]: {
    brief: 'The total output tokens per seconds throughput',
    type: AttributeType.DOUBLE,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: 12345.67,
  },
  [AttributeName.GEN_AI_RESPONSE_TOOL_CALLS]: {
    brief: "The tool calls in the model's response. It has to be a stringified version of an array of objects.",
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: false,
    example: '[{"name": "get_weather", "arguments": {"location": "Paris"}}]',
  },
  [AttributeName.GEN_AI_SYSTEM]: {
    brief: 'The provider of the model.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: 'openai',
    aliases: ['ai.model.provider'],
  },
  [AttributeName.GEN_AI_SYSTEM_MESSAGE]: {
    brief: 'The system instructions passed to the model.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.TRUE,
    },
    isInOtel: false,
    example: 'You are a helpful assistant',
  },
  [AttributeName.GEN_AI_TOOL_DESCRIPTION]: {
    brief: 'The description of the tool being used.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: 'Searches the web for current information about a topic',
  },
  [AttributeName.GEN_AI_TOOL_INPUT]: {
    brief: 'The input of the tool being used. It has to be a stringified version of the input to the tool.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: false,
    example: '{"location": "Paris"}',
  },
  [AttributeName.GEN_AI_TOOL_MESSAGE]: {
    brief: 'The response from a tool or function call passed to the model.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.TRUE,
    },
    isInOtel: false,
    example: 'rainy, 57°F',
  },
  [AttributeName.GEN_AI_TOOL_NAME]: {
    brief: 'Name of the tool utilized by the agent.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: 'Flights',
    aliases: ['ai.function_call'],
  },
  [AttributeName.GEN_AI_TOOL_OUTPUT]: {
    brief: 'The output of the tool being used. It has to be a stringified version of the output of the tool.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: false,
    example: 'rainy, 57°F',
  },
  [AttributeName.GEN_AI_TOOL_TYPE]: {
    brief: 'The type of tool being used.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: 'function',
  },
  [AttributeName.GEN_AI_USAGE_COMPLETION_TOKENS]: {
    brief: 'The number of tokens used in the GenAI response (completion).',
    type: AttributeType.INTEGER,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: true,
    example: 10,
    deprecation: {
      replacement: 'gen_ai.usage.output_tokens',
    },
    aliases: ['ai.completion_tokens.used', 'gen_ai.usage.output_tokens'],
  },
  [AttributeName.GEN_AI_USAGE_INPUT_TOKENS]: {
    brief: 'The number of tokens used to process the AI input (prompt) without cached input tokens.',
    type: AttributeType.INTEGER,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: true,
    example: 10,
    aliases: ['ai.prompt_tokens.used', 'gen_ai.usage.prompt_tokens'],
  },
  [AttributeName.GEN_AI_USAGE_INPUT_TOKENS_CACHED]: {
    brief: 'The number of cached tokens used to process the AI input (prompt).',
    type: AttributeType.INTEGER,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: 50,
  },
  [AttributeName.GEN_AI_USAGE_OUTPUT_TOKENS]: {
    brief: 'The number of tokens used for creating the AI output (without reasoning tokens).',
    type: AttributeType.INTEGER,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: true,
    example: 10,
    aliases: ['ai.completion_tokens.used', 'gen_ai.usage.completion_tokens'],
  },
  [AttributeName.GEN_AI_USAGE_OUTPUT_TOKENS_REASONING]: {
    brief: 'The number of tokens used for reasoning to create the AI output.',
    type: AttributeType.INTEGER,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: 75,
  },
  [AttributeName.GEN_AI_USAGE_PROMPT_TOKENS]: {
    brief: 'The number of tokens used in the GenAI input (prompt).',
    type: AttributeType.INTEGER,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: true,
    example: 20,
    deprecation: {
      replacement: 'gen_ai.usage.input_tokens',
    },
    aliases: ['ai.prompt_tokens.used', 'gen_ai.usage.input_tokens'],
  },
  [AttributeName.GEN_AI_USAGE_TOTAL_COST]: {
    brief: 'The total cost for the tokens used.',
    type: AttributeType.DOUBLE,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: 12.34,
    deprecation: {
      replacement: 'gen_ai.cost.total_tokens',
    },
  },
  [AttributeName.GEN_AI_USAGE_TOTAL_TOKENS]: {
    brief: 'The total number of tokens used to process the prompt. (input tokens plus output todkens)',
    type: AttributeType.INTEGER,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: 20,
    aliases: ['ai.total_tokens.used'],
  },
  [AttributeName.GEN_AI_USER_MESSAGE]: {
    brief: 'The user message passed to the model.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.TRUE,
    },
    isInOtel: false,
    example: "What's the weather in Paris?",
  },
  [AttributeName.GRAPHQL_OPERATION_NAME]: {
    brief: 'The name of the operation being executed.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: 'findBookById',
  },
  [AttributeName.GRAPHQL_OPERATION_TYPE]: {
    brief: 'The type of the operation being executed.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: 'query',
  },
  [AttributeName.HTTP_CLIENT_IP]: {
    brief:
      'Client address - domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.TRUE,
    },
    isInOtel: true,
    example: 'example.com',
    deprecation: {
      replacement: 'client.address',
    },
    aliases: ['client.address'],
  },
  [AttributeName.HTTP_DECODED_RESPONSE_CONTENT_LENGTH]: {
    brief: 'The decoded body size of the response (in bytes).',
    type: AttributeType.INTEGER,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: 456,
    sdks: ['javascript-browser'],
  },
  [AttributeName.HTTP_FLAVOR]: {
    brief: 'The actual version of the protocol used for network communication.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: '1.1',
    deprecation: {
      replacement: 'network.protocol.version',
    },
    aliases: ['network.protocol.version', 'net.protocol.version'],
  },
  [AttributeName.HTTP_FRAGMENT]: {
    brief:
      'The fragments present in the URI. Note that this contains the leading # character, while the `url.fragment` attribute does not.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: false,
    example: '#details',
  },
  [AttributeName.HTTP_HOST]: {
    brief: 'The domain name.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: 'example.com',
    deprecation: {
      replacement: 'server.address',
      reason: 'Deprecated, use one of `server.address` or `client.address`, depending on the usage',
    },
    aliases: ['server.address', 'client.address', 'http.server_name', 'net.host.name'],
  },
  [AttributeName.HTTP_METHOD]: {
    brief: 'The HTTP method used.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: 'GET',
    deprecation: {
      replacement: 'http.request.method',
    },
    aliases: ['http.request.method'],
  },
  [AttributeName.HTTP_QUERY]: {
    brief:
      'The query string present in the URL. Note that this contains the leading ? character, while the `url.query` attribute does not.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
      reason:
        'Query string values can contain sensitive information. Clients should attempt to scrub parameters that might contain sensitive information.',
    },
    isInOtel: false,
    example: '?foo=bar&bar=baz',
  },
  [AttributeName.HTTP_REQUEST_CONNECT_START]: {
    brief:
      'The UNIX timestamp representing the time immediately before the user agent starts establishing the connection to the server to retrieve the resource.',
    type: AttributeType.DOUBLE,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: 1732829555.111,
    sdks: ['javascript-browser'],
  },
  [AttributeName.HTTP_REQUEST_CONNECTION_END]: {
    brief:
      'The UNIX timestamp representing the time immediately after the browser finishes establishing the connection to the server to retrieve the resource. The timestamp value includes the time interval to establish the transport connection, as well as other time intervals such as TLS handshake and SOCKS authentication.',
    type: AttributeType.DOUBLE,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: 1732829555.15,
    sdks: ['javascript-browser'],
  },
  [AttributeName.HTTP_REQUEST_DOMAIN_LOOKUP_END]: {
    brief:
      'The UNIX timestamp representing the time immediately after the browser finishes the domain-name lookup for the resource.',
    type: AttributeType.DOUBLE,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: 1732829555.201,
    sdks: ['javascript-browser'],
  },
  [AttributeName.HTTP_REQUEST_DOMAIN_LOOKUP_START]: {
    brief:
      'The UNIX timestamp representing the time immediately before the browser starts the domain name lookup for the resource.',
    type: AttributeType.DOUBLE,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: 1732829555.322,
    sdks: ['javascript-browser'],
  },
  [AttributeName.HTTP_REQUEST_FETCH_START]: {
    brief: 'The UNIX timestamp representing the time immediately before the browser starts to fetch the resource.',
    type: AttributeType.DOUBLE,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: 1732829555.389,
    sdks: ['javascript-browser'],
  },
  [AttributeName.HTTP_REQUEST_HEADER_KEY]: {
    brief:
      'HTTP request headers, <key> being the normalized HTTP Header name (lowercase), the value being the header values.',
    type: AttributeType.STRING_ARRAY,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    hasDynamicSuffix: true,
    example: "http.request.header.custom-header=['foo', 'bar']",
  },
  [AttributeName.HTTP_REQUEST_METHOD]: {
    brief: 'The HTTP method used.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: 'GET',
    aliases: ['method', 'http.method'],
  },
  [AttributeName.HTTP_REQUEST_REDIRECT_END]: {
    brief:
      'The UNIX timestamp representing the timestamp immediately after receiving the last byte of the response of the last redirect',
    type: AttributeType.DOUBLE,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: 1732829558.502,
    sdks: ['javascript-browser'],
  },
  [AttributeName.HTTP_REQUEST_REDIRECT_START]: {
    brief: 'The UNIX timestamp representing the start time of the fetch which that initiates the redirect.',
    type: AttributeType.DOUBLE,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: 1732829555.495,
    sdks: ['javascript-browser'],
  },
  [AttributeName.HTTP_REQUEST_REQUEST_START]: {
    brief:
      'The UNIX timestamp representing the time immediately before the browser starts requesting the resource from the server, cache, or local resource. If the transport connection fails and the browser retires the request, the value returned will be the start of the retry request.',
    type: AttributeType.DOUBLE,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: 1732829555.51,
    sdks: ['javascript-browser'],
  },
  [AttributeName.HTTP_REQUEST_RESEND_COUNT]: {
    brief: 'The ordinal number of request resending attempt (for any reason, including redirects).',
    type: AttributeType.INTEGER,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: 2,
  },
  [AttributeName.HTTP_REQUEST_RESPONSE_END]: {
    brief:
      'The UNIX timestamp representing the time immediately after the browser receives the last byte of the resource or immediately before the transport connection is closed, whichever comes first.',
    type: AttributeType.DOUBLE,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: 1732829555.89,
    sdks: ['javascript-browser'],
  },
  [AttributeName.HTTP_REQUEST_RESPONSE_START]: {
    brief:
      'The UNIX timestamp representing the time immediately before the browser starts requesting the resource from the server, cache, or local resource. If the transport connection fails and the browser retires the request, the value returned will be the start of the retry request.',
    type: AttributeType.DOUBLE,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: 1732829555.7,
    sdks: ['javascript-browser'],
  },
  [AttributeName.HTTP_REQUEST_SECURE_CONNECTION_START]: {
    brief:
      'The UNIX timestamp representing the time immediately before the browser starts the handshake process to secure the current connection. If a secure connection is not used, the property returns zero.',
    type: AttributeType.DOUBLE,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: 1732829555.73,
    sdks: ['javascript-browser'],
  },
  [AttributeName.HTTP_REQUEST_TIME_TO_FIRST_BYTE]: {
    brief:
      "The time in seconds from the browser's timeorigin to when the first byte of the request's response was received. See https://web.dev/articles/ttfb#measure-resource-requests",
    type: AttributeType.DOUBLE,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: 1.032,
    sdks: ['javascript-browser'],
  },
  [AttributeName.HTTP_REQUEST_WORKER_START]: {
    brief:
      'The UNIX timestamp representing the timestamp immediately before dispatching the FetchEvent if a Service Worker thread is already running, or immediately before starting the Service Worker thread if it is not already running.',
    type: AttributeType.DOUBLE,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: 1732829553.68,
    sdks: ['javascript-browser'],
  },
  [AttributeName.HTTP_RESPONSE_BODY_SIZE]: {
    brief: 'The encoded body size of the response (in bytes).',
    type: AttributeType.INTEGER,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: true,
    example: 123,
    aliases: ['http.response_content_length', 'http.response.header.content-length'],
  },
  [AttributeName.HTTP_RESPONSE_HEADER_KEY]: {
    brief:
      'HTTP response headers, <key> being the normalized HTTP Header name (lowercase), the value being the header values.',
    type: AttributeType.STRING_ARRAY,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    hasDynamicSuffix: true,
    example: "http.response.header.custom-header=['foo', 'bar']",
  },
  [AttributeName.HTTP_RESPONSE_HEADER_CONTENT_LENGTH]: {
    brief: 'The size of the message body sent to the recipient (in bytes)',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: "http.response.header.custom-header=['foo', 'bar']",
    aliases: ['http.response_content_length', 'http.response.body.size'],
  },
  [AttributeName.HTTP_RESPONSE_SIZE]: {
    brief: 'The transfer size of the response (in bytes).',
    type: AttributeType.INTEGER,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: true,
    example: 456,
    aliases: ['http.response_transfer_size'],
  },
  [AttributeName.HTTP_RESPONSE_STATUS_CODE]: {
    brief: 'The status code of the HTTP response.',
    type: AttributeType.INTEGER,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: true,
    example: 404,
    aliases: ['http.status_code'],
  },
  [AttributeName.HTTP_RESPONSE_CONTENT_LENGTH]: {
    brief: 'The encoded body size of the response (in bytes).',
    type: AttributeType.INTEGER,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: true,
    example: 123,
    deprecation: {
      replacement: 'http.response.body.size',
    },
    aliases: ['http.response.body.size', 'http.response.header.content-length'],
  },
  [AttributeName.HTTP_RESPONSE_TRANSFER_SIZE]: {
    brief: 'The transfer size of the response (in bytes).',
    type: AttributeType.INTEGER,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: 456,
    deprecation: {
      replacement: 'http.response.size',
    },
    aliases: ['http.response.size'],
  },
  [AttributeName.HTTP_ROUTE]: {
    brief: 'The matched route, that is, the path template in the format used by the respective server framework.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: '/users/:id',
    aliases: ['url.template'],
  },
  [AttributeName.HTTP_SCHEME]: {
    brief: 'The URI scheme component identifying the used protocol.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: 'https',
    deprecation: {
      replacement: 'url.scheme',
    },
    aliases: ['url.scheme'],
  },
  [AttributeName.HTTP_SERVER_NAME]: {
    brief: 'The server domain name',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: 'example.com',
    deprecation: {
      replacement: 'server.address',
    },
    aliases: ['server.address', 'net.host.name', 'http.host'],
  },
  [AttributeName.HTTP_STATUS_CODE]: {
    brief: 'The status code of the HTTP response.',
    type: AttributeType.INTEGER,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: true,
    example: 404,
    deprecation: {
      replacement: 'http.response.status_code',
    },
    aliases: ['http.response.status_code'],
  },
  [AttributeName.HTTP_TARGET]: {
    brief: 'The pathname and query string of the URL.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: '/test?foo=bar#buzz',
    deprecation: {
      replacement: 'url.path',
      reason: 'This attribute is being deprecated in favor of url.path and url.query',
    },
  },
  [AttributeName.HTTP_URL]: {
    brief: 'The URL of the resource that was fetched.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: 'https://example.com/test?foo=bar#buzz',
    deprecation: {
      replacement: 'url.full',
    },
    aliases: ['url.full', 'url'],
  },
  [AttributeName.HTTP_USER_AGENT]: {
    brief: 'Value of the HTTP User-Agent header sent by the client.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Mobile/15E148 Safari/604.1',
    deprecation: {
      replacement: 'user_agent.original',
    },
    aliases: ['user_agent.original'],
  },
  [AttributeName.ID]: {
    brief: 'A unique identifier for the span.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: 'f47ac10b58cc4372a5670e02b2c3d479',
    sdks: ['php-laravel'],
  },
  [AttributeName.JVM_GC_ACTION]: {
    brief: 'Name of the garbage collector action.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: 'end of minor GC',
  },
  [AttributeName.JVM_GC_NAME]: {
    brief: 'Name of the garbage collector.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: 'G1 Young Generation',
  },
  [AttributeName.JVM_MEMORY_POOL_NAME]: {
    brief: 'Name of the memory pool.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: 'G1 Old Gen',
  },
  [AttributeName.JVM_MEMORY_TYPE]: {
    brief: 'Name of the memory pool.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: 'G1 Old Gen',
  },
  [AttributeName.JVM_THREAD_DAEMON]: {
    brief: 'Whether the thread is daemon or not.',
    type: AttributeType.BOOLEAN,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: true,
    example: true,
  },
  [AttributeName.JVM_THREAD_STATE]: {
    brief: 'State of the thread.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: 'blocked',
  },
  [AttributeName.LCP_ELEMENT]: {
    brief: 'The dom element responsible for the largest contentful paint.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: false,
    example: 'img',
  },
  [AttributeName.LCP_ID]: {
    brief: 'The id of the dom element responsible for the largest contentful paint.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: false,
    example: '#hero',
  },
  [AttributeName.LCP_SIZE]: {
    brief: 'The size of the largest contentful paint element.',
    type: AttributeType.INTEGER,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: 1234,
  },
  [AttributeName.LCP_URL]: {
    brief: 'The url of the dom element responsible for the largest contentful paint.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: false,
    example: 'https://example.com',
  },
  [AttributeName.LOGGER_NAME]: {
    brief: 'The name of the logger that generated this event.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: false,
    example: 'myLogger',
  },
  [AttributeName.MESSAGING_DESTINATION_CONNECTION]: {
    brief: 'The message destination connection.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: false,
    example: 'BestTopic',
    sdks: ['php-laravel'],
  },
  [AttributeName.MESSAGING_DESTINATION_NAME]: {
    brief: 'The message destination name.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: 'BestTopic',
    sdks: ['php-laravel'],
  },
  [AttributeName.MESSAGING_MESSAGE_BODY_SIZE]: {
    brief: 'The size of the message body in bytes.',
    type: AttributeType.INTEGER,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: true,
    example: 839,
    sdks: ['php-laravel'],
  },
  [AttributeName.MESSAGING_MESSAGE_ENVELOPE_SIZE]: {
    brief: 'The size of the message body and metadata in bytes.',
    type: AttributeType.INTEGER,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: true,
    example: 1045,
    sdks: ['php-laravel'],
  },
  [AttributeName.MESSAGING_MESSAGE_ID]: {
    brief: 'A value used by the messaging system as an identifier for the message, represented as a string.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: 'f47ac10b58cc4372a5670e02b2c3d479',
    sdks: ['php-laravel'],
  },
  [AttributeName.MESSAGING_MESSAGE_RECEIVE_LATENCY]: {
    brief: 'The latency between when the message was published and received.',
    type: AttributeType.INTEGER,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: 1732847252,
    sdks: ['php-laravel'],
  },
  [AttributeName.MESSAGING_MESSAGE_RETRY_COUNT]: {
    brief: 'The amount of attempts to send the message.',
    type: AttributeType.INTEGER,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: 2,
    sdks: ['php-laravel'],
  },
  [AttributeName.MESSAGING_OPERATION_TYPE]: {
    brief: 'A string identifying the type of the messaging operation',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: 'create',
  },
  [AttributeName.MESSAGING_SYSTEM]: {
    brief: 'The messaging system as identified by the client instrumentation.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: 'activemq',
    sdks: ['php-laravel'],
  },
  [AttributeName.METHOD]: {
    brief: 'The HTTP method used.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: false,
    example: 'GET',
    deprecation: {
      replacement: 'http.request.method',
    },
    aliases: ['http.request.method'],
    sdks: ['javascript-browser', 'javascript-node'],
  },
  [AttributeName.NAVIGATION_TYPE]: {
    brief: 'The type of navigation done by a client-side router.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: false,
    example: 'router.push',
  },
  [AttributeName.NEL_ELAPSED_TIME]: {
    brief:
      'The elapsed number of milliseconds between the start of the resource fetch and when it was completed or aborted by the user agent.',
    type: AttributeType.INTEGER,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: 100,
  },
  [AttributeName.NEL_PHASE]: {
    brief: 'If request failed, the phase of its network error. If request succeeded, "application".',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: false,
    example: 'application',
  },
  [AttributeName.NEL_REFERRER]: {
    brief: "request's referrer, as determined by the referrer policy associated with its client.",
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: false,
    example: 'https://example.com/foo?bar=baz',
  },
  [AttributeName.NEL_SAMPLING_FUNCTION]: {
    brief: 'The sampling function used to determine if the request should be sampled.',
    type: AttributeType.DOUBLE,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: 0.5,
  },
  [AttributeName.NEL_TYPE]: {
    brief: 'If request failed, the type of its network error. If request succeeded, "ok".',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: false,
    example: 'dns.unreachable',
  },
  [AttributeName.NET_HOST_IP]: {
    brief: 'Local address of the network connection - IP address or Unix domain socket name.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: '192.168.0.1',
    deprecation: {
      replacement: 'network.local.address',
    },
    aliases: ['network.local.address', 'net.sock.host.addr'],
  },
  [AttributeName.NET_HOST_NAME]: {
    brief:
      'Server domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: 'example.com',
    deprecation: {
      replacement: 'server.address',
    },
    aliases: ['server.address', 'http.server_name', 'http.host'],
  },
  [AttributeName.NET_HOST_PORT]: {
    brief: 'Server port number.',
    type: AttributeType.INTEGER,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: true,
    example: 1337,
    deprecation: {
      replacement: 'server.port',
    },
    aliases: ['server.port'],
  },
  [AttributeName.NET_PEER_IP]: {
    brief: 'Peer address of the network connection - IP address or Unix domain socket name.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: '192.168.0.1',
    deprecation: {
      replacement: 'network.peer.address',
    },
    aliases: ['network.peer.address', 'net.sock.peer.addr'],
  },
  [AttributeName.NET_PEER_NAME]: {
    brief:
      'Server domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: 'example.com',
    deprecation: {
      replacement: 'server.address',
      reason: 'Deprecated, use server.address on client spans and client.address on server spans.',
    },
  },
  [AttributeName.NET_PEER_PORT]: {
    brief: 'Peer port number.',
    type: AttributeType.INTEGER,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: true,
    example: 1337,
    deprecation: {
      replacement: 'server.port',
      reason: 'Deprecated, use server.port on client spans and client.port on server spans.',
    },
  },
  [AttributeName.NET_PROTOCOL_NAME]: {
    brief: 'OSI application layer or non-OSI equivalent.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: 'http',
    deprecation: {
      replacement: 'network.protocol.name',
    },
    aliases: ['network.protocol.name'],
  },
  [AttributeName.NET_PROTOCOL_VERSION]: {
    brief: 'The actual version of the protocol used for network communication.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: '1.1',
    deprecation: {
      replacement: 'network.protocol.version',
    },
    aliases: ['network.protocol.version', 'http.flavor'],
  },
  [AttributeName.NET_SOCK_FAMILY]: {
    brief: 'OSI transport and network layer',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: 'inet',
    deprecation: {
      replacement: 'network.transport',
      reason: 'Deprecated, use network.transport and network.type.',
    },
  },
  [AttributeName.NET_SOCK_HOST_ADDR]: {
    brief: 'Local address of the network connection mapping to Unix domain socket name.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: '/var/my.sock',
    deprecation: {
      replacement: 'network.local.address',
    },
    aliases: ['network.local.address', 'net.host.ip'],
  },
  [AttributeName.NET_SOCK_HOST_PORT]: {
    brief: 'Local port number of the network connection.',
    type: AttributeType.INTEGER,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: true,
    example: 8080,
    deprecation: {
      replacement: 'network.local.port',
    },
    aliases: ['network.local.port'],
  },
  [AttributeName.NET_SOCK_PEER_ADDR]: {
    brief: 'Peer address of the network connection - IP address',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: '192.168.0.1',
    deprecation: {
      replacement: 'network.peer.address',
    },
    aliases: ['network.peer.address', 'net.peer.ip'],
  },
  [AttributeName.NET_SOCK_PEER_NAME]: {
    brief: 'Peer address of the network connection - Unix domain socket name',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: '/var/my.sock',
    deprecation: {
      reason: 'Deprecated from OTEL, no replacement at this time',
    },
  },
  [AttributeName.NET_SOCK_PEER_PORT]: {
    brief: 'Peer port number of the network connection.',
    type: AttributeType.INTEGER,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: true,
    example: 8080,
    deprecation: {
      replacement: 'network.peer.port',
    },
  },
  [AttributeName.NET_TRANSPORT]: {
    brief: 'OSI transport layer or inter-process communication method.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: 'tcp',
    deprecation: {
      replacement: 'network.transport',
    },
    aliases: ['network.transport'],
  },
  [AttributeName.NETWORK_LOCAL_ADDRESS]: {
    brief: 'Local address of the network connection - IP address or Unix domain socket name.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: '10.1.2.80',
    aliases: ['net.host.ip', 'net.sock.host.addr'],
  },
  [AttributeName.NETWORK_LOCAL_PORT]: {
    brief: 'Local port number of the network connection.',
    type: AttributeType.INTEGER,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: true,
    example: 65400,
    aliases: ['net.sock.host.port'],
  },
  [AttributeName.NETWORK_PEER_ADDRESS]: {
    brief: 'Peer address of the network connection - IP address or Unix domain socket name.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: '10.1.2.80',
    aliases: ['net.peer.ip', 'net.sock.peer.addr'],
  },
  [AttributeName.NETWORK_PEER_PORT]: {
    brief: 'Peer port number of the network connection.',
    type: AttributeType.INTEGER,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: true,
    example: 65400,
  },
  [AttributeName.NETWORK_PROTOCOL_NAME]: {
    brief: 'OSI application layer or non-OSI equivalent.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: 'http',
    aliases: ['net.protocol.name'],
  },
  [AttributeName.NETWORK_PROTOCOL_VERSION]: {
    brief: 'The actual version of the protocol used for network communication.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: '1.1',
    aliases: ['http.flavor', 'net.protocol.version'],
  },
  [AttributeName.NETWORK_TRANSPORT]: {
    brief: 'OSI transport layer or inter-process communication method.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: 'tcp',
    aliases: ['net.transport'],
  },
  [AttributeName.NETWORK_TYPE]: {
    brief: 'OSI network layer or non-OSI equivalent.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: 'ipv4',
  },
  [AttributeName.OS_BUILD_ID]: {
    brief: 'The build ID of the operating system.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: '1234567890',
  },
  [AttributeName.OS_DESCRIPTION]: {
    brief:
      'Human readable (not intended to be parsed) OS version information, like e.g. reported by ver or lsb_release -a commands.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: 'Ubuntu 18.04.1 LTS',
  },
  [AttributeName.OS_NAME]: {
    brief: 'Human readable operating system name.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: 'Ubuntu',
  },
  [AttributeName.OS_TYPE]: {
    brief: 'The operating system type.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: 'linux',
  },
  [AttributeName.OS_VERSION]: {
    brief: 'The version of the operating system.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: '18.04.2',
  },
  [AttributeName.OTEL_SCOPE_NAME]: {
    brief: 'The name of the instrumentation scope - (InstrumentationScope.Name in OTLP).',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: 'io.opentelemetry.contrib.mongodb',
  },
  [AttributeName.OTEL_SCOPE_VERSION]: {
    brief: 'The version of the instrumentation scope - (InstrumentationScope.Version in OTLP).',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: '2.4.5',
  },
  [AttributeName.OTEL_STATUS_CODE]: {
    brief: 'Name of the code, either “OK” or “ERROR”. MUST NOT be set if the status code is UNSET.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: 'OK',
  },
  [AttributeName.OTEL_STATUS_DESCRIPTION]: {
    brief: 'Description of the Status if it has a value, otherwise not set.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: 'resource not found',
  },
  [AttributeName.PARAMS_KEY]: {
    brief:
      'Decoded parameters extracted from a URL path. Usually added by client-side routing frameworks like vue-router.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: false,
    hasDynamicSuffix: true,
    example: "params.id='123'",
    aliases: ['url.path.parameter.<key>'],
  },
  [AttributeName.PREVIOUS_ROUTE]: {
    brief: 'Also used by mobile SDKs to indicate the previous route in the application.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: false,
    example: 'HomeScreen',
    sdks: ['javascript-reactnative'],
  },
  [AttributeName.PROCESS_EXECUTABLE_NAME]: {
    brief: 'The name of the executable that started the process.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: 'getsentry',
  },
  [AttributeName.PROCESS_PID]: {
    brief: 'The process ID of the running process.',
    type: AttributeType.INTEGER,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: true,
    example: 12345,
  },
  [AttributeName.PROCESS_RUNTIME_DESCRIPTION]: {
    brief:
      'An additional description about the runtime of the process, for example a specific vendor customization of the runtime environment. Equivalent to `raw_description` in the Sentry runtime context.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: 'Eclipse OpenJ9 VM openj9-0.21.0',
  },
  [AttributeName.PROCESS_RUNTIME_NAME]: {
    brief: 'The name of the runtime. Equivalent to `name` in the Sentry runtime context.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: 'node',
  },
  [AttributeName.PROCESS_RUNTIME_VERSION]: {
    brief:
      'The version of the runtime of this process, as returned by the runtime without modification. Equivalent to `version` in the Sentry runtime context.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: '18.04.2',
  },
  [AttributeName.PROFILE_ID]: {
    brief: 'The id of the sentry profile.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: '123e4567e89b12d3a456426614174000',
    deprecation: {
      replacement: 'sentry.profile_id',
    },
    aliases: ['sentry.profile_id'],
  },
  [AttributeName.QUERY_KEY]: {
    brief: 'An item in a query string. Usually added by client-side routing frameworks like vue-router.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: false,
    hasDynamicSuffix: true,
    example: "query.id='123'",
    deprecation: {
      replacement: 'url.query',
      reason: 'Instead of sending items individually in query.<key>, they should be sent all together with url.query.',
    },
  },
  [AttributeName.RELEASE]: {
    brief: 'The sentry release.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: false,
    example: 'production',
    deprecation: {
      replacement: 'sentry.release',
    },
    aliases: ['sentry.release'],
  },
  [AttributeName.REMIX_ACTION_FORM_DATA_KEY]: {
    brief: 'Remix form data, <key> being the form data key, the value being the form data value.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: false,
    hasDynamicSuffix: true,
    example: "http.response.header.text='test'",
    sdks: ['javascript-remix'],
  },
  [AttributeName.REPLAY_ID]: {
    brief: 'The id of the sentry replay.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: '123e4567e89b12d3a456426614174000',
    deprecation: {
      replacement: 'sentry.replay_id',
    },
    aliases: ['sentry.replay_id'],
  },
  [AttributeName.RESOURCE_RENDER_BLOCKING_STATUS]: {
    brief: 'The render blocking status of the resource.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: false,
    example: 'non-blocking',
    sdks: ['javascript-browser'],
  },
  [AttributeName.ROUTE]: {
    brief:
      'The matched route, that is, the path template in the format used by the respective server framework. Also used by mobile SDKs to indicate the current route in the application.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: false,
    example: 'App\\Controller::indexAction',
    deprecation: {
      replacement: 'http.route',
    },
    aliases: ['http.route'],
    sdks: ['php-laravel', 'javascript-reactnative'],
  },
  [AttributeName.RPC_GRPC_STATUS_CODE]: {
    brief: 'The numeric status code of the gRPC request.',
    type: AttributeType.INTEGER,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: true,
    example: 2,
  },
  [AttributeName.RPC_SERVICE]: {
    brief: 'The full (logical) name of the service being called, including its package name, if applicable.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: 'myService.BestService',
  },
  [AttributeName.SENTRY_INTERNAL_DSC_ENVIRONMENT]: {
    brief: 'The environment from the dynamic sampling context.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: 'prod',
  },
  [AttributeName.SENTRY_INTERNAL_DSC_ORG_ID]: {
    brief: 'The organization ID from the dynamic sampling context.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: '1',
  },
  [AttributeName.SENTRY_INTERNAL_DSC_PUBLIC_KEY]: {
    brief: 'The public key from the dynamic sampling context.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: false,
    example: 'c51734c603c4430eb57cb0a5728a479d',
  },
  [AttributeName.SENTRY_INTERNAL_DSC_RELEASE]: {
    brief: 'The release identifier from the dynamic sampling context.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: 'frontend@e8211be71b214afab5b85de4b4c54be3714952bb',
  },
  [AttributeName.SENTRY_INTERNAL_DSC_SAMPLE_RAND]: {
    brief: 'The random sampling value from the dynamic sampling context.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: '0.8286147972820134',
  },
  [AttributeName.SENTRY_INTERNAL_DSC_SAMPLE_RATE]: {
    brief: 'The sample rate from the dynamic sampling context.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: '1.0',
  },
  [AttributeName.SENTRY_INTERNAL_DSC_SAMPLED]: {
    brief: 'Whether the event was sampled according to the dynamic sampling context.',
    type: AttributeType.BOOLEAN,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: true,
  },
  [AttributeName.SENTRY_INTERNAL_DSC_TRACE_ID]: {
    brief: 'The trace ID from the dynamic sampling context.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: '047372980460430cbc78d9779df33a46',
  },
  [AttributeName.SENTRY_INTERNAL_DSC_TRANSACTION]: {
    brief: 'The transaction name from the dynamic sampling context.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: '/issues/errors-outages/',
  },
  [AttributeName.SENTRY_INTERNAL_OBSERVED_TIMESTAMP_NANOS]: {
    brief: 'The timestamp at which an envelope was received by Relay, in nanoseconds.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: '1544712660300000000',
    aliases: ['sentry.observed_timestamp_nanos'],
  },
  [AttributeName.SENTRY_INTERNAL_REPLAY_IS_BUFFERING]: {
    brief:
      'A sentinel attribute on log events indicating whether the current Session Replay is being buffered (onErrorSampleRate).',
    type: AttributeType.BOOLEAN,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: true,
  },
  [AttributeName.SENTRY_BROWSER_NAME]: {
    brief: 'The name of the browser.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: false,
    example: 'Chrome',
    deprecation: {
      replacement: 'browser.name',
    },
    aliases: ['browser.name'],
  },
  [AttributeName.SENTRY_BROWSER_VERSION]: {
    brief: 'The version of the browser.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: false,
    example: '120.0.6099.130',
    deprecation: {
      replacement: 'browser.version',
    },
    aliases: ['browser.version'],
  },
  [AttributeName.SENTRY_CANCELLATION_REASON]: {
    brief: 'The reason why a span ended early.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: 'document.hidden',
  },
  [AttributeName.SENTRY_CLIENT_SAMPLE_RATE]: {
    brief: 'Rate at which a span was sampled in the SDK.',
    type: AttributeType.DOUBLE,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: 0.5,
  },
  [AttributeName.SENTRY_DESCRIPTION]: {
    brief: 'The human-readable description of a span.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: false,
    example: 'index view query',
  },
  [AttributeName.SENTRY_DIST]: {
    brief: 'The sentry dist.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: '1.0',
  },
  [AttributeName.SENTRY_ENVIRONMENT]: {
    brief: 'The sentry environment.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: 'production',
    aliases: ['environment'],
  },
  [AttributeName.SENTRY_EXCLUSIVE_TIME]: {
    brief: 'The exclusive time duration of the span.',
    type: AttributeType.INTEGER,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: 1234,
  },
  [AttributeName.SENTRY_HTTP_PREFETCH]: {
    brief: 'If an http request was a prefetch request.',
    type: AttributeType.BOOLEAN,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: true,
  },
  [AttributeName.SENTRY_IDLE_SPAN_FINISH_REASON]: {
    brief: 'The reason why an idle span ended early.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: 'idleTimeout',
  },
  [AttributeName.SENTRY_MESSAGE_PARAMETER_KEY]: {
    brief:
      "A parameter used in the message template. <key> can either be the number that represent the parameter's position in the template string (sentry.message.parameter.0, sentry.message.parameter.1, etc) or the parameter's name (sentry.message.parameter.item_id, sentry.message.parameter.user_id, etc)",
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: false,
    example: "sentry.message.parameter.0='123'",
  },
  [AttributeName.SENTRY_MESSAGE_TEMPLATE]: {
    brief: 'The parameterized template string.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: false,
    example: 'Hello, {name}!',
  },
  [AttributeName.SENTRY_MODULE_KEY]: {
    brief: 'A module that was loaded in the process. The key is the name of the module.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: false,
    hasDynamicSuffix: true,
    example: "sentry.module.brianium/paratest='v7.7.0'",
  },
  [AttributeName.SENTRY_NEXTJS_SSR_FUNCTION_ROUTE]: {
    brief:
      'A parameterized route for a function in Next.js that contributes to Server-Side Rendering. Should be present on spans that track such functions when the file location of the function is known.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: '/posts/[id]/layout',
    sdks: ['javascript'],
  },
  [AttributeName.SENTRY_NEXTJS_SSR_FUNCTION_TYPE]: {
    brief:
      'A descriptor for a for a function in Next.js that contributes to Server-Side Rendering. Should be present on spans that track such functions.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: 'generateMetadata',
    sdks: ['javascript'],
  },
  [AttributeName.SENTRY_OBSERVED_TIMESTAMP_NANOS]: {
    brief: 'The timestamp at which an envelope was received by Relay, in nanoseconds.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: '1544712660300000000',
    deprecation: {
      replacement: 'sentry._internal.observed_timestamp_nanos',
    },
    aliases: ['sentry._internal.observed_timestamp_nanos'],
  },
  [AttributeName.SENTRY_OP]: {
    brief: 'The operation of a span.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: 'http.client',
  },
  [AttributeName.SENTRY_ORIGIN]: {
    brief: 'The origin of the instrumentation (e.g. span, log, etc.)',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: 'auto.http.otel.fastify',
  },
  [AttributeName.SENTRY_PLATFORM]: {
    brief: 'The sdk platform that generated the event.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: 'php',
  },
  [AttributeName.SENTRY_PROFILE_ID]: {
    brief: 'The id of the sentry profile.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: '123e4567e89b12d3a456426614174000',
    aliases: ['profile_id'],
  },
  [AttributeName.SENTRY_RELEASE]: {
    brief: 'The sentry release.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: '7.0.0',
    aliases: ['service.version', 'release'],
  },
  [AttributeName.SENTRY_REPLAY_ID]: {
    brief: 'The id of the sentry replay.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: '123e4567e89b12d3a456426614174000',
    aliases: ['replay_id'],
  },
  [AttributeName.SENTRY_SDK_INTEGRATIONS]: {
    brief:
      'A list of names identifying enabled integrations. The list shouldhave all enabled integrations, including default integrations. Defaultintegrations are included because different SDK releases may contain differentdefault integrations.',
    type: AttributeType.STRING_ARRAY,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: ['InboundFilters', 'FunctionToString', 'BrowserApiErrors', 'Breadcrumbs'],
  },
  [AttributeName.SENTRY_SDK_NAME]: {
    brief: 'The sentry sdk name.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: '@sentry/react',
  },
  [AttributeName.SENTRY_SDK_VERSION]: {
    brief: 'The sentry sdk version.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: '7.0.0',
  },
  [AttributeName.SENTRY_SEGMENT_ID]: {
    brief: 'The segment ID of a span',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: '051581bf3cb55c13',
    aliases: ['sentry.segment_id'],
  },
  [AttributeName.SENTRY_SEGMENT_NAME]: {
    brief: 'The segment name of a span',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: false,
    example: 'GET /user',
  },
  [AttributeName._SENTRY_SEGMENT_ID]: {
    brief: 'The segment ID of a span',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: '051581bf3cb55c13',
    deprecation: {
      replacement: 'sentry.segment.id',
    },
    aliases: ['sentry.segment.id'],
  },
  [AttributeName.SENTRY_SERVER_SAMPLE_RATE]: {
    brief: 'Rate at which a span was sampled in Relay.',
    type: AttributeType.DOUBLE,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: 0.5,
  },
  [AttributeName.SENTRY_SPAN_SOURCE]: {
    brief: 'The source of a span, also referred to as transaction source.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: 'route',
  },
  [AttributeName.SENTRY_TRACE_PARENT_SPAN_ID]: {
    brief:
      'The span id of the span that was active when the log was collected. This should not be set if there was no active span.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: 'b0e6f15b45c36b12',
  },
  [AttributeName.SENTRY_TRANSACTION]: {
    brief: 'The sentry transaction (segment name).',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: 'GET /',
    aliases: ['transaction'],
  },
  [AttributeName.SERVER_ADDRESS]: {
    brief:
      'Server domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: 'example.com',
    aliases: ['http.server_name', 'net.host.name', 'http.host'],
  },
  [AttributeName.SERVER_PORT]: {
    brief: 'Server port number.',
    type: AttributeType.INTEGER,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: true,
    example: 1337,
    aliases: ['net.host.port'],
  },
  [AttributeName.SERVICE_NAME]: {
    brief: 'Logical name of the service.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: 'omegastar',
  },
  [AttributeName.SERVICE_VERSION]: {
    brief: 'The version string of the service API or implementation. The format is not defined by these conventions.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: '5.0.0',
    aliases: ['sentry.release'],
  },
  [AttributeName.THREAD_ID]: {
    brief: 'Current “managed” thread ID.',
    type: AttributeType.INTEGER,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: true,
    example: 56,
  },
  [AttributeName.THREAD_NAME]: {
    brief: 'Current thread name.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: 'main',
  },
  [AttributeName.TRANSACTION]: {
    brief: 'The sentry transaction (segment name).',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: false,
    example: 'GET /',
    deprecation: {
      replacement: 'sentry.transaction',
    },
    aliases: ['sentry.transaction'],
  },
  [AttributeName.TYPE]: {
    brief: 'More granular type of the operation happening.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: 'fetch',
    sdks: ['javascript-browser', 'javascript-node'],
  },
  [AttributeName.UI_COMPONENT_NAME]: {
    brief: 'The name of the associated component.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: false,
    example: 'HomeButton',
  },
  [AttributeName.UI_CONTRIBUTES_TO_TTFD]: {
    brief: 'Whether the span execution contributed to the TTFD (time to fully drawn) metric.',
    type: AttributeType.BOOLEAN,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: true,
  },
  [AttributeName.UI_CONTRIBUTES_TO_TTID]: {
    brief: 'Whether the span execution contributed to the TTID (time to initial display) metric.',
    type: AttributeType.BOOLEAN,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: false,
    example: true,
  },
  [AttributeName.URL_DOMAIN]: {
    brief:
      'Server domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: 'example.com',
  },
  [AttributeName.URL_FRAGMENT]: {
    brief:
      'The fragments present in the URI. Note that this does not contain the leading # character, while the `http.fragment` attribute does.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: 'details',
  },
  [AttributeName.URL_FULL]: {
    brief: 'The URL of the resource that was fetched.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: 'https://example.com/test?foo=bar#buzz',
    aliases: ['http.url', 'url'],
  },
  [AttributeName.URL_PATH]: {
    brief: 'The URI path component.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: '/foo',
  },
  [AttributeName.URL_PATH_PARAMETER_KEY]: {
    brief:
      'Decoded parameters extracted from a URL path. Usually added by client-side routing frameworks like vue-router.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: false,
    hasDynamicSuffix: true,
    example: "url.path.parameter.id='123'",
    aliases: ['params.<key>'],
  },
  [AttributeName.URL_PORT]: {
    brief: 'Server port number.',
    type: AttributeType.INTEGER,
    pii: {
      isPii: IsPii.FALSE,
    },
    isInOtel: true,
    example: 1337,
  },
  [AttributeName.URL_QUERY]: {
    brief:
      'The query string present in the URL. Note that this does not contain the leading ? character, while the `http.query` attribute does.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
      reason:
        'Query string values can contain sensitive information. Clients should attempt to scrub parameters that might contain sensitive information.',
    },
    isInOtel: true,
    example: 'foo=bar&bar=baz',
  },
  [AttributeName.URL_SCHEME]: {
    brief: 'The URI scheme component identifying the used protocol.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: 'https',
    aliases: ['http.scheme'],
  },
  [AttributeName.URL_TEMPLATE]: {
    brief: 'The low-cardinality template of an absolute path reference.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example: '/users/:id',
    aliases: ['http.route'],
  },
  [AttributeName.URL]: {
    brief: 'The URL of the resource that was fetched.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: false,
    example: 'https://example.com/test?foo=bar#buzz',
    deprecation: {
      replacement: 'url.full',
    },
    aliases: ['url.full', 'http.url'],
    sdks: ['javascript-browser', 'javascript-node'],
  },
  [AttributeName.USER_EMAIL]: {
    brief: 'User email address.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.TRUE,
    },
    isInOtel: true,
    example: 'test@example.com',
  },
  [AttributeName.USER_FULL_NAME]: {
    brief: "User's full name.",
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.TRUE,
    },
    isInOtel: true,
    example: 'John Smith',
  },
  [AttributeName.USER_GEO_CITY]: {
    brief: 'Human readable city name.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: false,
    example: 'Toronto',
  },
  [AttributeName.USER_GEO_COUNTRY_CODE]: {
    brief: 'Two-letter country code (ISO 3166-1 alpha-2).',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: false,
    example: 'CA',
  },
  [AttributeName.USER_GEO_REGION]: {
    brief: 'Human readable region name or code.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: false,
    example: 'Canada',
  },
  [AttributeName.USER_GEO_SUBDIVISION]: {
    brief: 'Human readable subdivision name.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: false,
    example: 'Ontario',
  },
  [AttributeName.USER_HASH]: {
    brief: 'Unique user hash to correlate information for a user in anonymized form.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.TRUE,
    },
    isInOtel: true,
    example: '8ae4c2993e0f4f3b8b2d1b1f3b5e8f4d',
  },
  [AttributeName.USER_ID]: {
    brief: 'Unique identifier of the user.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.TRUE,
    },
    isInOtel: true,
    example: 'S-1-5-21-202424912787-2692429404-2351956786-1000',
  },
  [AttributeName.USER_IP_ADDRESS]: {
    brief: 'The IP address of the user.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.TRUE,
    },
    isInOtel: false,
    example: '192.168.1.1',
  },
  [AttributeName.USER_NAME]: {
    brief: 'Short name or login/username of the user.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.TRUE,
    },
    isInOtel: true,
    example: 'j.smith',
  },
  [AttributeName.USER_ROLES]: {
    brief: 'Array of user roles at the time of the event.',
    type: AttributeType.STRING_ARRAY,
    pii: {
      isPii: IsPii.TRUE,
    },
    isInOtel: true,
    example: ['admin', 'editor'],
  },
  [AttributeName.USER_AGENT_ORIGINAL]: {
    brief: 'Value of the HTTP User-Agent header sent by the client.',
    type: AttributeType.STRING,
    pii: {
      isPii: IsPii.MAYBE,
    },
    isInOtel: true,
    example:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Mobile/15E148 Safari/604.1',
    aliases: ['http.user_agent'],
  },
};

export type AttributeValue = string | number | boolean | Array<string> | Array<number> | Array<boolean>;

export type Attributes = {
  [AttributeName.AI_CITATIONS]?: AI_CITATIONS_TYPE;
  [AttributeName.AI_COMPLETION_TOKENS_USED]?: AI_COMPLETION_TOKENS_USED_TYPE;
  [AttributeName.AI_DOCUMENTS]?: AI_DOCUMENTS_TYPE;
  [AttributeName.AI_FINISH_REASON]?: AI_FINISH_REASON_TYPE;
  [AttributeName.AI_FREQUENCY_PENALTY]?: AI_FREQUENCY_PENALTY_TYPE;
  [AttributeName.AI_FUNCTION_CALL]?: AI_FUNCTION_CALL_TYPE;
  [AttributeName.AI_GENERATION_ID]?: AI_GENERATION_ID_TYPE;
  [AttributeName.AI_INPUT_MESSAGES]?: AI_INPUT_MESSAGES_TYPE;
  [AttributeName.AI_IS_SEARCH_REQUIRED]?: AI_IS_SEARCH_REQUIRED_TYPE;
  [AttributeName.AI_METADATA]?: AI_METADATA_TYPE;
  [AttributeName.AI_MODEL_PROVIDER]?: AI_MODEL_PROVIDER_TYPE;
  [AttributeName.AI_MODEL_ID]?: AI_MODEL_ID_TYPE;
  [AttributeName.AI_PIPELINE_NAME]?: AI_PIPELINE_NAME_TYPE;
  [AttributeName.AI_PREAMBLE]?: AI_PREAMBLE_TYPE;
  [AttributeName.AI_PRESENCE_PENALTY]?: AI_PRESENCE_PENALTY_TYPE;
  [AttributeName.AI_PROMPT_TOKENS_USED]?: AI_PROMPT_TOKENS_USED_TYPE;
  [AttributeName.AI_RAW_PROMPTING]?: AI_RAW_PROMPTING_TYPE;
  [AttributeName.AI_RESPONSE_FORMAT]?: AI_RESPONSE_FORMAT_TYPE;
  [AttributeName.AI_RESPONSES]?: AI_RESPONSES_TYPE;
  [AttributeName.AI_SEARCH_QUERIES]?: AI_SEARCH_QUERIES_TYPE;
  [AttributeName.AI_SEARCH_RESULTS]?: AI_SEARCH_RESULTS_TYPE;
  [AttributeName.AI_SEED]?: AI_SEED_TYPE;
  [AttributeName.AI_STREAMING]?: AI_STREAMING_TYPE;
  [AttributeName.AI_TAGS]?: AI_TAGS_TYPE;
  [AttributeName.AI_TEMPERATURE]?: AI_TEMPERATURE_TYPE;
  [AttributeName.AI_TEXTS]?: AI_TEXTS_TYPE;
  [AttributeName.AI_TOOL_CALLS]?: AI_TOOL_CALLS_TYPE;
  [AttributeName.AI_TOOLS]?: AI_TOOLS_TYPE;
  [AttributeName.AI_TOP_K]?: AI_TOP_K_TYPE;
  [AttributeName.AI_TOP_P]?: AI_TOP_P_TYPE;
  [AttributeName.AI_TOTAL_COST]?: AI_TOTAL_COST_TYPE;
  [AttributeName.AI_TOTAL_TOKENS_USED]?: AI_TOTAL_TOKENS_USED_TYPE;
  [AttributeName.AI_WARNINGS]?: AI_WARNINGS_TYPE;
  [AttributeName.APP_START_TYPE]?: APP_START_TYPE_TYPE;
  [AttributeName.BLOCKED_MAIN_THREAD]?: BLOCKED_MAIN_THREAD_TYPE;
  [AttributeName.BROWSER_NAME]?: BROWSER_NAME_TYPE;
  [AttributeName.BROWSER_REPORT_TYPE]?: BROWSER_REPORT_TYPE_TYPE;
  [AttributeName.BROWSER_SCRIPT_INVOKER]?: BROWSER_SCRIPT_INVOKER_TYPE;
  [AttributeName.BROWSER_SCRIPT_INVOKER_TYPE]?: BROWSER_SCRIPT_INVOKER_TYPE_TYPE;
  [AttributeName.BROWSER_SCRIPT_SOURCE_CHAR_POSITION]?: BROWSER_SCRIPT_SOURCE_CHAR_POSITION_TYPE;
  [AttributeName.BROWSER_VERSION]?: BROWSER_VERSION_TYPE;
  [AttributeName.CACHE_HIT]?: CACHE_HIT_TYPE;
  [AttributeName.CACHE_ITEM_SIZE]?: CACHE_ITEM_SIZE_TYPE;
  [AttributeName.CACHE_KEY]?: CACHE_KEY_TYPE;
  [AttributeName.CACHE_OPERATION]?: CACHE_OPERATION_TYPE;
  [AttributeName.CACHE_TTL]?: CACHE_TTL_TYPE;
  [AttributeName.CHANNEL]?: CHANNEL_TYPE;
  [AttributeName.CLIENT_ADDRESS]?: CLIENT_ADDRESS_TYPE;
  [AttributeName.CLIENT_PORT]?: CLIENT_PORT_TYPE;
  [AttributeName.CLOUDFLARE_D1_DURATION]?: CLOUDFLARE_D1_DURATION_TYPE;
  [AttributeName.CLOUDFLARE_D1_ROWS_READ]?: CLOUDFLARE_D1_ROWS_READ_TYPE;
  [AttributeName.CLOUDFLARE_D1_ROWS_WRITTEN]?: CLOUDFLARE_D1_ROWS_WRITTEN_TYPE;
  [AttributeName.CODE_FILE_PATH]?: CODE_FILE_PATH_TYPE;
  [AttributeName.CODE_FILEPATH]?: CODE_FILEPATH_TYPE;
  [AttributeName.CODE_FUNCTION]?: CODE_FUNCTION_TYPE;
  [AttributeName.CODE_FUNCTION_NAME]?: CODE_FUNCTION_NAME_TYPE;
  [AttributeName.CODE_LINE_NUMBER]?: CODE_LINE_NUMBER_TYPE;
  [AttributeName.CODE_LINENO]?: CODE_LINENO_TYPE;
  [AttributeName.CODE_NAMESPACE]?: CODE_NAMESPACE_TYPE;
  [AttributeName.DB_COLLECTION_NAME]?: DB_COLLECTION_NAME_TYPE;
  [AttributeName.DB_NAME]?: DB_NAME_TYPE;
  [AttributeName.DB_NAMESPACE]?: DB_NAMESPACE_TYPE;
  [AttributeName.DB_OPERATION]?: DB_OPERATION_TYPE;
  [AttributeName.DB_OPERATION_NAME]?: DB_OPERATION_NAME_TYPE;
  [AttributeName.DB_QUERY_PARAMETER_KEY]?: DB_QUERY_PARAMETER_KEY_TYPE;
  [AttributeName.DB_QUERY_SUMMARY]?: DB_QUERY_SUMMARY_TYPE;
  [AttributeName.DB_QUERY_TEXT]?: DB_QUERY_TEXT_TYPE;
  [AttributeName.DB_REDIS_CONNECTION]?: DB_REDIS_CONNECTION_TYPE;
  [AttributeName.DB_REDIS_PARAMETERS]?: DB_REDIS_PARAMETERS_TYPE;
  [AttributeName.DB_SQL_BINDINGS]?: DB_SQL_BINDINGS_TYPE;
  [AttributeName.DB_STATEMENT]?: DB_STATEMENT_TYPE;
  [AttributeName.DB_SYSTEM]?: DB_SYSTEM_TYPE;
  [AttributeName.DB_SYSTEM_NAME]?: DB_SYSTEM_NAME_TYPE;
  [AttributeName.DB_USER]?: DB_USER_TYPE;
  [AttributeName.DEVICE_BRAND]?: DEVICE_BRAND_TYPE;
  [AttributeName.DEVICE_FAMILY]?: DEVICE_FAMILY_TYPE;
  [AttributeName.DEVICE_MODEL]?: DEVICE_MODEL_TYPE;
  [AttributeName.ENVIRONMENT]?: ENVIRONMENT_TYPE;
  [AttributeName.ERROR_TYPE]?: ERROR_TYPE_TYPE;
  [AttributeName.EVENT_ID]?: EVENT_ID_TYPE;
  [AttributeName.EVENT_NAME]?: EVENT_NAME_TYPE;
  [AttributeName.EXCEPTION_ESCAPED]?: EXCEPTION_ESCAPED_TYPE;
  [AttributeName.EXCEPTION_MESSAGE]?: EXCEPTION_MESSAGE_TYPE;
  [AttributeName.EXCEPTION_STACKTRACE]?: EXCEPTION_STACKTRACE_TYPE;
  [AttributeName.EXCEPTION_TYPE]?: EXCEPTION_TYPE_TYPE;
  [AttributeName.FAAS_COLDSTART]?: FAAS_COLDSTART_TYPE;
  [AttributeName.FAAS_CRON]?: FAAS_CRON_TYPE;
  [AttributeName.FAAS_TIME]?: FAAS_TIME_TYPE;
  [AttributeName.FAAS_TRIGGER]?: FAAS_TRIGGER_TYPE;
  [AttributeName.FLAG_EVALUATION_KEY]?: FLAG_EVALUATION_KEY_TYPE;
  [AttributeName.FRAMES_DELAY]?: FRAMES_DELAY_TYPE;
  [AttributeName.FRAMES_FROZEN]?: FRAMES_FROZEN_TYPE;
  [AttributeName.FRAMES_SLOW]?: FRAMES_SLOW_TYPE;
  [AttributeName.FRAMES_TOTAL]?: FRAMES_TOTAL_TYPE;
  [AttributeName.FS_ERROR]?: FS_ERROR_TYPE;
  [AttributeName.GEN_AI_AGENT_NAME]?: GEN_AI_AGENT_NAME_TYPE;
  [AttributeName.GEN_AI_ASSISTANT_MESSAGE]?: GEN_AI_ASSISTANT_MESSAGE_TYPE;
  [AttributeName.GEN_AI_CHOICE]?: GEN_AI_CHOICE_TYPE;
  [AttributeName.GEN_AI_COST_INPUT_TOKENS]?: GEN_AI_COST_INPUT_TOKENS_TYPE;
  [AttributeName.GEN_AI_COST_OUTPUT_TOKENS]?: GEN_AI_COST_OUTPUT_TOKENS_TYPE;
  [AttributeName.GEN_AI_COST_TOTAL_TOKENS]?: GEN_AI_COST_TOTAL_TOKENS_TYPE;
  [AttributeName.GEN_AI_OPERATION_NAME]?: GEN_AI_OPERATION_NAME_TYPE;
  [AttributeName.GEN_AI_OPERATION_TYPE]?: GEN_AI_OPERATION_TYPE_TYPE;
  [AttributeName.GEN_AI_PIPELINE_NAME]?: GEN_AI_PIPELINE_NAME_TYPE;
  [AttributeName.GEN_AI_PROMPT]?: GEN_AI_PROMPT_TYPE;
  [AttributeName.GEN_AI_REQUEST_AVAILABLE_TOOLS]?: GEN_AI_REQUEST_AVAILABLE_TOOLS_TYPE;
  [AttributeName.GEN_AI_REQUEST_FREQUENCY_PENALTY]?: GEN_AI_REQUEST_FREQUENCY_PENALTY_TYPE;
  [AttributeName.GEN_AI_REQUEST_MAX_TOKENS]?: GEN_AI_REQUEST_MAX_TOKENS_TYPE;
  [AttributeName.GEN_AI_REQUEST_MESSAGES]?: GEN_AI_REQUEST_MESSAGES_TYPE;
  [AttributeName.GEN_AI_REQUEST_MODEL]?: GEN_AI_REQUEST_MODEL_TYPE;
  [AttributeName.GEN_AI_REQUEST_PRESENCE_PENALTY]?: GEN_AI_REQUEST_PRESENCE_PENALTY_TYPE;
  [AttributeName.GEN_AI_REQUEST_SEED]?: GEN_AI_REQUEST_SEED_TYPE;
  [AttributeName.GEN_AI_REQUEST_TEMPERATURE]?: GEN_AI_REQUEST_TEMPERATURE_TYPE;
  [AttributeName.GEN_AI_REQUEST_TOP_K]?: GEN_AI_REQUEST_TOP_K_TYPE;
  [AttributeName.GEN_AI_REQUEST_TOP_P]?: GEN_AI_REQUEST_TOP_P_TYPE;
  [AttributeName.GEN_AI_RESPONSE_FINISH_REASONS]?: GEN_AI_RESPONSE_FINISH_REASONS_TYPE;
  [AttributeName.GEN_AI_RESPONSE_ID]?: GEN_AI_RESPONSE_ID_TYPE;
  [AttributeName.GEN_AI_RESPONSE_MODEL]?: GEN_AI_RESPONSE_MODEL_TYPE;
  [AttributeName.GEN_AI_RESPONSE_STREAMING]?: GEN_AI_RESPONSE_STREAMING_TYPE;
  [AttributeName.GEN_AI_RESPONSE_TEXT]?: GEN_AI_RESPONSE_TEXT_TYPE;
  [AttributeName.GEN_AI_RESPONSE_TOKENS_PER_SECOND]?: GEN_AI_RESPONSE_TOKENS_PER_SECOND_TYPE;
  [AttributeName.GEN_AI_RESPONSE_TOOL_CALLS]?: GEN_AI_RESPONSE_TOOL_CALLS_TYPE;
  [AttributeName.GEN_AI_SYSTEM]?: GEN_AI_SYSTEM_TYPE;
  [AttributeName.GEN_AI_SYSTEM_MESSAGE]?: GEN_AI_SYSTEM_MESSAGE_TYPE;
  [AttributeName.GEN_AI_TOOL_DESCRIPTION]?: GEN_AI_TOOL_DESCRIPTION_TYPE;
  [AttributeName.GEN_AI_TOOL_INPUT]?: GEN_AI_TOOL_INPUT_TYPE;
  [AttributeName.GEN_AI_TOOL_MESSAGE]?: GEN_AI_TOOL_MESSAGE_TYPE;
  [AttributeName.GEN_AI_TOOL_NAME]?: GEN_AI_TOOL_NAME_TYPE;
  [AttributeName.GEN_AI_TOOL_OUTPUT]?: GEN_AI_TOOL_OUTPUT_TYPE;
  [AttributeName.GEN_AI_TOOL_TYPE]?: GEN_AI_TOOL_TYPE_TYPE;
  [AttributeName.GEN_AI_USAGE_COMPLETION_TOKENS]?: GEN_AI_USAGE_COMPLETION_TOKENS_TYPE;
  [AttributeName.GEN_AI_USAGE_INPUT_TOKENS]?: GEN_AI_USAGE_INPUT_TOKENS_TYPE;
  [AttributeName.GEN_AI_USAGE_INPUT_TOKENS_CACHED]?: GEN_AI_USAGE_INPUT_TOKENS_CACHED_TYPE;
  [AttributeName.GEN_AI_USAGE_OUTPUT_TOKENS]?: GEN_AI_USAGE_OUTPUT_TOKENS_TYPE;
  [AttributeName.GEN_AI_USAGE_OUTPUT_TOKENS_REASONING]?: GEN_AI_USAGE_OUTPUT_TOKENS_REASONING_TYPE;
  [AttributeName.GEN_AI_USAGE_PROMPT_TOKENS]?: GEN_AI_USAGE_PROMPT_TOKENS_TYPE;
  [AttributeName.GEN_AI_USAGE_TOTAL_COST]?: GEN_AI_USAGE_TOTAL_COST_TYPE;
  [AttributeName.GEN_AI_USAGE_TOTAL_TOKENS]?: GEN_AI_USAGE_TOTAL_TOKENS_TYPE;
  [AttributeName.GEN_AI_USER_MESSAGE]?: GEN_AI_USER_MESSAGE_TYPE;
  [AttributeName.GRAPHQL_OPERATION_NAME]?: GRAPHQL_OPERATION_NAME_TYPE;
  [AttributeName.GRAPHQL_OPERATION_TYPE]?: GRAPHQL_OPERATION_TYPE_TYPE;
  [AttributeName.HTTP_CLIENT_IP]?: HTTP_CLIENT_IP_TYPE;
  [AttributeName.HTTP_DECODED_RESPONSE_CONTENT_LENGTH]?: HTTP_DECODED_RESPONSE_CONTENT_LENGTH_TYPE;
  [AttributeName.HTTP_FLAVOR]?: HTTP_FLAVOR_TYPE;
  [AttributeName.HTTP_FRAGMENT]?: HTTP_FRAGMENT_TYPE;
  [AttributeName.HTTP_HOST]?: HTTP_HOST_TYPE;
  [AttributeName.HTTP_METHOD]?: HTTP_METHOD_TYPE;
  [AttributeName.HTTP_QUERY]?: HTTP_QUERY_TYPE;
  [AttributeName.HTTP_REQUEST_CONNECT_START]?: HTTP_REQUEST_CONNECT_START_TYPE;
  [AttributeName.HTTP_REQUEST_CONNECTION_END]?: HTTP_REQUEST_CONNECTION_END_TYPE;
  [AttributeName.HTTP_REQUEST_DOMAIN_LOOKUP_END]?: HTTP_REQUEST_DOMAIN_LOOKUP_END_TYPE;
  [AttributeName.HTTP_REQUEST_DOMAIN_LOOKUP_START]?: HTTP_REQUEST_DOMAIN_LOOKUP_START_TYPE;
  [AttributeName.HTTP_REQUEST_FETCH_START]?: HTTP_REQUEST_FETCH_START_TYPE;
  [AttributeName.HTTP_REQUEST_HEADER_KEY]?: HTTP_REQUEST_HEADER_KEY_TYPE;
  [AttributeName.HTTP_REQUEST_METHOD]?: HTTP_REQUEST_METHOD_TYPE;
  [AttributeName.HTTP_REQUEST_REDIRECT_END]?: HTTP_REQUEST_REDIRECT_END_TYPE;
  [AttributeName.HTTP_REQUEST_REDIRECT_START]?: HTTP_REQUEST_REDIRECT_START_TYPE;
  [AttributeName.HTTP_REQUEST_REQUEST_START]?: HTTP_REQUEST_REQUEST_START_TYPE;
  [AttributeName.HTTP_REQUEST_RESEND_COUNT]?: HTTP_REQUEST_RESEND_COUNT_TYPE;
  [AttributeName.HTTP_REQUEST_RESPONSE_END]?: HTTP_REQUEST_RESPONSE_END_TYPE;
  [AttributeName.HTTP_REQUEST_RESPONSE_START]?: HTTP_REQUEST_RESPONSE_START_TYPE;
  [AttributeName.HTTP_REQUEST_SECURE_CONNECTION_START]?: HTTP_REQUEST_SECURE_CONNECTION_START_TYPE;
  [AttributeName.HTTP_REQUEST_TIME_TO_FIRST_BYTE]?: HTTP_REQUEST_TIME_TO_FIRST_BYTE_TYPE;
  [AttributeName.HTTP_REQUEST_WORKER_START]?: HTTP_REQUEST_WORKER_START_TYPE;
  [AttributeName.HTTP_RESPONSE_BODY_SIZE]?: HTTP_RESPONSE_BODY_SIZE_TYPE;
  [AttributeName.HTTP_RESPONSE_HEADER_KEY]?: HTTP_RESPONSE_HEADER_KEY_TYPE;
  [AttributeName.HTTP_RESPONSE_HEADER_CONTENT_LENGTH]?: HTTP_RESPONSE_HEADER_CONTENT_LENGTH_TYPE;
  [AttributeName.HTTP_RESPONSE_SIZE]?: HTTP_RESPONSE_SIZE_TYPE;
  [AttributeName.HTTP_RESPONSE_STATUS_CODE]?: HTTP_RESPONSE_STATUS_CODE_TYPE;
  [AttributeName.HTTP_RESPONSE_CONTENT_LENGTH]?: HTTP_RESPONSE_CONTENT_LENGTH_TYPE;
  [AttributeName.HTTP_RESPONSE_TRANSFER_SIZE]?: HTTP_RESPONSE_TRANSFER_SIZE_TYPE;
  [AttributeName.HTTP_ROUTE]?: HTTP_ROUTE_TYPE;
  [AttributeName.HTTP_SCHEME]?: HTTP_SCHEME_TYPE;
  [AttributeName.HTTP_SERVER_NAME]?: HTTP_SERVER_NAME_TYPE;
  [AttributeName.HTTP_STATUS_CODE]?: HTTP_STATUS_CODE_TYPE;
  [AttributeName.HTTP_TARGET]?: HTTP_TARGET_TYPE;
  [AttributeName.HTTP_URL]?: HTTP_URL_TYPE;
  [AttributeName.HTTP_USER_AGENT]?: HTTP_USER_AGENT_TYPE;
  [AttributeName.ID]?: ID_TYPE;
  [AttributeName.JVM_GC_ACTION]?: JVM_GC_ACTION_TYPE;
  [AttributeName.JVM_GC_NAME]?: JVM_GC_NAME_TYPE;
  [AttributeName.JVM_MEMORY_POOL_NAME]?: JVM_MEMORY_POOL_NAME_TYPE;
  [AttributeName.JVM_MEMORY_TYPE]?: JVM_MEMORY_TYPE_TYPE;
  [AttributeName.JVM_THREAD_DAEMON]?: JVM_THREAD_DAEMON_TYPE;
  [AttributeName.JVM_THREAD_STATE]?: JVM_THREAD_STATE_TYPE;
  [AttributeName.LCP_ELEMENT]?: LCP_ELEMENT_TYPE;
  [AttributeName.LCP_ID]?: LCP_ID_TYPE;
  [AttributeName.LCP_SIZE]?: LCP_SIZE_TYPE;
  [AttributeName.LCP_URL]?: LCP_URL_TYPE;
  [AttributeName.LOGGER_NAME]?: LOGGER_NAME_TYPE;
  [AttributeName.MESSAGING_DESTINATION_CONNECTION]?: MESSAGING_DESTINATION_CONNECTION_TYPE;
  [AttributeName.MESSAGING_DESTINATION_NAME]?: MESSAGING_DESTINATION_NAME_TYPE;
  [AttributeName.MESSAGING_MESSAGE_BODY_SIZE]?: MESSAGING_MESSAGE_BODY_SIZE_TYPE;
  [AttributeName.MESSAGING_MESSAGE_ENVELOPE_SIZE]?: MESSAGING_MESSAGE_ENVELOPE_SIZE_TYPE;
  [AttributeName.MESSAGING_MESSAGE_ID]?: MESSAGING_MESSAGE_ID_TYPE;
  [AttributeName.MESSAGING_MESSAGE_RECEIVE_LATENCY]?: MESSAGING_MESSAGE_RECEIVE_LATENCY_TYPE;
  [AttributeName.MESSAGING_MESSAGE_RETRY_COUNT]?: MESSAGING_MESSAGE_RETRY_COUNT_TYPE;
  [AttributeName.MESSAGING_OPERATION_TYPE]?: MESSAGING_OPERATION_TYPE_TYPE;
  [AttributeName.MESSAGING_SYSTEM]?: MESSAGING_SYSTEM_TYPE;
  [AttributeName.METHOD]?: METHOD_TYPE;
  [AttributeName.NAVIGATION_TYPE]?: NAVIGATION_TYPE_TYPE;
  [AttributeName.NEL_ELAPSED_TIME]?: NEL_ELAPSED_TIME_TYPE;
  [AttributeName.NEL_PHASE]?: NEL_PHASE_TYPE;
  [AttributeName.NEL_REFERRER]?: NEL_REFERRER_TYPE;
  [AttributeName.NEL_SAMPLING_FUNCTION]?: NEL_SAMPLING_FUNCTION_TYPE;
  [AttributeName.NEL_TYPE]?: NEL_TYPE_TYPE;
  [AttributeName.NET_HOST_IP]?: NET_HOST_IP_TYPE;
  [AttributeName.NET_HOST_NAME]?: NET_HOST_NAME_TYPE;
  [AttributeName.NET_HOST_PORT]?: NET_HOST_PORT_TYPE;
  [AttributeName.NET_PEER_IP]?: NET_PEER_IP_TYPE;
  [AttributeName.NET_PEER_NAME]?: NET_PEER_NAME_TYPE;
  [AttributeName.NET_PEER_PORT]?: NET_PEER_PORT_TYPE;
  [AttributeName.NET_PROTOCOL_NAME]?: NET_PROTOCOL_NAME_TYPE;
  [AttributeName.NET_PROTOCOL_VERSION]?: NET_PROTOCOL_VERSION_TYPE;
  [AttributeName.NET_SOCK_FAMILY]?: NET_SOCK_FAMILY_TYPE;
  [AttributeName.NET_SOCK_HOST_ADDR]?: NET_SOCK_HOST_ADDR_TYPE;
  [AttributeName.NET_SOCK_HOST_PORT]?: NET_SOCK_HOST_PORT_TYPE;
  [AttributeName.NET_SOCK_PEER_ADDR]?: NET_SOCK_PEER_ADDR_TYPE;
  [AttributeName.NET_SOCK_PEER_NAME]?: NET_SOCK_PEER_NAME_TYPE;
  [AttributeName.NET_SOCK_PEER_PORT]?: NET_SOCK_PEER_PORT_TYPE;
  [AttributeName.NET_TRANSPORT]?: NET_TRANSPORT_TYPE;
  [AttributeName.NETWORK_LOCAL_ADDRESS]?: NETWORK_LOCAL_ADDRESS_TYPE;
  [AttributeName.NETWORK_LOCAL_PORT]?: NETWORK_LOCAL_PORT_TYPE;
  [AttributeName.NETWORK_PEER_ADDRESS]?: NETWORK_PEER_ADDRESS_TYPE;
  [AttributeName.NETWORK_PEER_PORT]?: NETWORK_PEER_PORT_TYPE;
  [AttributeName.NETWORK_PROTOCOL_NAME]?: NETWORK_PROTOCOL_NAME_TYPE;
  [AttributeName.NETWORK_PROTOCOL_VERSION]?: NETWORK_PROTOCOL_VERSION_TYPE;
  [AttributeName.NETWORK_TRANSPORT]?: NETWORK_TRANSPORT_TYPE;
  [AttributeName.NETWORK_TYPE]?: NETWORK_TYPE_TYPE;
  [AttributeName.OS_BUILD_ID]?: OS_BUILD_ID_TYPE;
  [AttributeName.OS_DESCRIPTION]?: OS_DESCRIPTION_TYPE;
  [AttributeName.OS_NAME]?: OS_NAME_TYPE;
  [AttributeName.OS_TYPE]?: OS_TYPE_TYPE;
  [AttributeName.OS_VERSION]?: OS_VERSION_TYPE;
  [AttributeName.OTEL_SCOPE_NAME]?: OTEL_SCOPE_NAME_TYPE;
  [AttributeName.OTEL_SCOPE_VERSION]?: OTEL_SCOPE_VERSION_TYPE;
  [AttributeName.OTEL_STATUS_CODE]?: OTEL_STATUS_CODE_TYPE;
  [AttributeName.OTEL_STATUS_DESCRIPTION]?: OTEL_STATUS_DESCRIPTION_TYPE;
  [AttributeName.PARAMS_KEY]?: PARAMS_KEY_TYPE;
  [AttributeName.PREVIOUS_ROUTE]?: PREVIOUS_ROUTE_TYPE;
  [AttributeName.PROCESS_EXECUTABLE_NAME]?: PROCESS_EXECUTABLE_NAME_TYPE;
  [AttributeName.PROCESS_PID]?: PROCESS_PID_TYPE;
  [AttributeName.PROCESS_RUNTIME_DESCRIPTION]?: PROCESS_RUNTIME_DESCRIPTION_TYPE;
  [AttributeName.PROCESS_RUNTIME_NAME]?: PROCESS_RUNTIME_NAME_TYPE;
  [AttributeName.PROCESS_RUNTIME_VERSION]?: PROCESS_RUNTIME_VERSION_TYPE;
  [AttributeName.PROFILE_ID]?: PROFILE_ID_TYPE;
  [AttributeName.QUERY_KEY]?: QUERY_KEY_TYPE;
  [AttributeName.RELEASE]?: RELEASE_TYPE;
  [AttributeName.REMIX_ACTION_FORM_DATA_KEY]?: REMIX_ACTION_FORM_DATA_KEY_TYPE;
  [AttributeName.REPLAY_ID]?: REPLAY_ID_TYPE;
  [AttributeName.RESOURCE_RENDER_BLOCKING_STATUS]?: RESOURCE_RENDER_BLOCKING_STATUS_TYPE;
  [AttributeName.ROUTE]?: ROUTE_TYPE;
  [AttributeName.RPC_GRPC_STATUS_CODE]?: RPC_GRPC_STATUS_CODE_TYPE;
  [AttributeName.RPC_SERVICE]?: RPC_SERVICE_TYPE;
  [AttributeName.SENTRY_INTERNAL_DSC_ENVIRONMENT]?: SENTRY_INTERNAL_DSC_ENVIRONMENT_TYPE;
  [AttributeName.SENTRY_INTERNAL_DSC_ORG_ID]?: SENTRY_INTERNAL_DSC_ORG_ID_TYPE;
  [AttributeName.SENTRY_INTERNAL_DSC_PUBLIC_KEY]?: SENTRY_INTERNAL_DSC_PUBLIC_KEY_TYPE;
  [AttributeName.SENTRY_INTERNAL_DSC_RELEASE]?: SENTRY_INTERNAL_DSC_RELEASE_TYPE;
  [AttributeName.SENTRY_INTERNAL_DSC_SAMPLE_RAND]?: SENTRY_INTERNAL_DSC_SAMPLE_RAND_TYPE;
  [AttributeName.SENTRY_INTERNAL_DSC_SAMPLE_RATE]?: SENTRY_INTERNAL_DSC_SAMPLE_RATE_TYPE;
  [AttributeName.SENTRY_INTERNAL_DSC_SAMPLED]?: SENTRY_INTERNAL_DSC_SAMPLED_TYPE;
  [AttributeName.SENTRY_INTERNAL_DSC_TRACE_ID]?: SENTRY_INTERNAL_DSC_TRACE_ID_TYPE;
  [AttributeName.SENTRY_INTERNAL_DSC_TRANSACTION]?: SENTRY_INTERNAL_DSC_TRANSACTION_TYPE;
  [AttributeName.SENTRY_INTERNAL_OBSERVED_TIMESTAMP_NANOS]?: SENTRY_INTERNAL_OBSERVED_TIMESTAMP_NANOS_TYPE;
  [AttributeName.SENTRY_INTERNAL_REPLAY_IS_BUFFERING]?: SENTRY_INTERNAL_REPLAY_IS_BUFFERING_TYPE;
  [AttributeName.SENTRY_BROWSER_NAME]?: SENTRY_BROWSER_NAME_TYPE;
  [AttributeName.SENTRY_BROWSER_VERSION]?: SENTRY_BROWSER_VERSION_TYPE;
  [AttributeName.SENTRY_CANCELLATION_REASON]?: SENTRY_CANCELLATION_REASON_TYPE;
  [AttributeName.SENTRY_CLIENT_SAMPLE_RATE]?: SENTRY_CLIENT_SAMPLE_RATE_TYPE;
  [AttributeName.SENTRY_DESCRIPTION]?: SENTRY_DESCRIPTION_TYPE;
  [AttributeName.SENTRY_DIST]?: SENTRY_DIST_TYPE;
  [AttributeName.SENTRY_ENVIRONMENT]?: SENTRY_ENVIRONMENT_TYPE;
  [AttributeName.SENTRY_EXCLUSIVE_TIME]?: SENTRY_EXCLUSIVE_TIME_TYPE;
  [AttributeName.SENTRY_HTTP_PREFETCH]?: SENTRY_HTTP_PREFETCH_TYPE;
  [AttributeName.SENTRY_IDLE_SPAN_FINISH_REASON]?: SENTRY_IDLE_SPAN_FINISH_REASON_TYPE;
  [AttributeName.SENTRY_MESSAGE_PARAMETER_KEY]?: SENTRY_MESSAGE_PARAMETER_KEY_TYPE;
  [AttributeName.SENTRY_MESSAGE_TEMPLATE]?: SENTRY_MESSAGE_TEMPLATE_TYPE;
  [AttributeName.SENTRY_MODULE_KEY]?: SENTRY_MODULE_KEY_TYPE;
  [AttributeName.SENTRY_NEXTJS_SSR_FUNCTION_ROUTE]?: SENTRY_NEXTJS_SSR_FUNCTION_ROUTE_TYPE;
  [AttributeName.SENTRY_NEXTJS_SSR_FUNCTION_TYPE]?: SENTRY_NEXTJS_SSR_FUNCTION_TYPE_TYPE;
  [AttributeName.SENTRY_OBSERVED_TIMESTAMP_NANOS]?: SENTRY_OBSERVED_TIMESTAMP_NANOS_TYPE;
  [AttributeName.SENTRY_OP]?: SENTRY_OP_TYPE;
  [AttributeName.SENTRY_ORIGIN]?: SENTRY_ORIGIN_TYPE;
  [AttributeName.SENTRY_PLATFORM]?: SENTRY_PLATFORM_TYPE;
  [AttributeName.SENTRY_PROFILE_ID]?: SENTRY_PROFILE_ID_TYPE;
  [AttributeName.SENTRY_RELEASE]?: SENTRY_RELEASE_TYPE;
  [AttributeName.SENTRY_REPLAY_ID]?: SENTRY_REPLAY_ID_TYPE;
  [AttributeName.SENTRY_SDK_INTEGRATIONS]?: SENTRY_SDK_INTEGRATIONS_TYPE;
  [AttributeName.SENTRY_SDK_NAME]?: SENTRY_SDK_NAME_TYPE;
  [AttributeName.SENTRY_SDK_VERSION]?: SENTRY_SDK_VERSION_TYPE;
  [AttributeName.SENTRY_SEGMENT_ID]?: SENTRY_SEGMENT_ID_TYPE;
  [AttributeName.SENTRY_SEGMENT_NAME]?: SENTRY_SEGMENT_NAME_TYPE;
  [AttributeName._SENTRY_SEGMENT_ID]?: _SENTRY_SEGMENT_ID_TYPE;
  [AttributeName.SENTRY_SERVER_SAMPLE_RATE]?: SENTRY_SERVER_SAMPLE_RATE_TYPE;
  [AttributeName.SENTRY_SPAN_SOURCE]?: SENTRY_SPAN_SOURCE_TYPE;
  [AttributeName.SENTRY_TRACE_PARENT_SPAN_ID]?: SENTRY_TRACE_PARENT_SPAN_ID_TYPE;
  [AttributeName.SENTRY_TRANSACTION]?: SENTRY_TRANSACTION_TYPE;
  [AttributeName.SERVER_ADDRESS]?: SERVER_ADDRESS_TYPE;
  [AttributeName.SERVER_PORT]?: SERVER_PORT_TYPE;
  [AttributeName.SERVICE_NAME]?: SERVICE_NAME_TYPE;
  [AttributeName.SERVICE_VERSION]?: SERVICE_VERSION_TYPE;
  [AttributeName.THREAD_ID]?: THREAD_ID_TYPE;
  [AttributeName.THREAD_NAME]?: THREAD_NAME_TYPE;
  [AttributeName.TRANSACTION]?: TRANSACTION_TYPE;
  [AttributeName.TYPE]?: TYPE_TYPE;
  [AttributeName.UI_COMPONENT_NAME]?: UI_COMPONENT_NAME_TYPE;
  [AttributeName.UI_CONTRIBUTES_TO_TTFD]?: UI_CONTRIBUTES_TO_TTFD_TYPE;
  [AttributeName.UI_CONTRIBUTES_TO_TTID]?: UI_CONTRIBUTES_TO_TTID_TYPE;
  [AttributeName.URL_DOMAIN]?: URL_DOMAIN_TYPE;
  [AttributeName.URL_FRAGMENT]?: URL_FRAGMENT_TYPE;
  [AttributeName.URL_FULL]?: URL_FULL_TYPE;
  [AttributeName.URL_PATH]?: URL_PATH_TYPE;
  [AttributeName.URL_PATH_PARAMETER_KEY]?: URL_PATH_PARAMETER_KEY_TYPE;
  [AttributeName.URL_PORT]?: URL_PORT_TYPE;
  [AttributeName.URL_QUERY]?: URL_QUERY_TYPE;
  [AttributeName.URL_SCHEME]?: URL_SCHEME_TYPE;
  [AttributeName.URL_TEMPLATE]?: URL_TEMPLATE_TYPE;
  [AttributeName.URL]?: URL_TYPE;
  [AttributeName.USER_EMAIL]?: USER_EMAIL_TYPE;
  [AttributeName.USER_FULL_NAME]?: USER_FULL_NAME_TYPE;
  [AttributeName.USER_GEO_CITY]?: USER_GEO_CITY_TYPE;
  [AttributeName.USER_GEO_COUNTRY_CODE]?: USER_GEO_COUNTRY_CODE_TYPE;
  [AttributeName.USER_GEO_REGION]?: USER_GEO_REGION_TYPE;
  [AttributeName.USER_GEO_SUBDIVISION]?: USER_GEO_SUBDIVISION_TYPE;
  [AttributeName.USER_HASH]?: USER_HASH_TYPE;
  [AttributeName.USER_ID]?: USER_ID_TYPE;
  [AttributeName.USER_IP_ADDRESS]?: USER_IP_ADDRESS_TYPE;
  [AttributeName.USER_NAME]?: USER_NAME_TYPE;
  [AttributeName.USER_ROLES]?: USER_ROLES_TYPE;
  [AttributeName.USER_AGENT_ORIGINAL]?: USER_AGENT_ORIGINAL_TYPE;
} & Record<string, AttributeValue | undefined>;
