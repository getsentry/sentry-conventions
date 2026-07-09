// This is an auto-generated file. Do not edit!

// Path: model/attributes/ai/ai__citations.json

/**
 * References or sources cited by the AI model in its response. `ai.citations`
 *
 * Attribute Value Type: `Array<string>` {@link AI_CITATIONS_TYPE}
 *
 * Apply Scrubbing: auto
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @deprecated
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * Apply Scrubbing: auto
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @deprecated
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link GEN_AI_RESPONSE_FINISH_REASONS} `gen_ai.response.finish_reasons`
 *
 * @deprecated Use {@link GEN_AI_RESPONSE_FINISH_REASONS} (gen_ai.response.finish_reasons) instead
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * Apply Scrubbing: auto
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link GEN_AI_TOOL_NAME} `gen_ai.tool.name`, {@link MCP_TOOL_NAME} `mcp.tool.name`
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link GEN_AI_REQUEST_MESSAGES} `gen_ai.request.messages`
 *
 * @deprecated Use {@link GEN_AI_INPUT_MESSAGES} (gen_ai.input.messages) instead
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @deprecated
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @deprecated
 * @example "{\"user_id\": 123, \"session_id\": \"abc123\"}"
 */
export const AI_METADATA = 'ai.metadata';

/**
 * Type for {@link AI_METADATA} ai.metadata
 */
export type AI_METADATA_TYPE = string;

// Path: model/attributes/ai/ai__model_id.json

/**
 * The vendor-specific ID of the model used. `ai.model_id`
 *
 * Attribute Value Type: `string` {@link AI_MODEL_ID_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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

// Path: model/attributes/ai/ai__model__provider.json

/**
 * The provider of the model. `ai.model.provider`
 *
 * Attribute Value Type: `string` {@link AI_MODEL_PROVIDER_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link GEN_AI_PROVIDER_NAME} `gen_ai.provider.name`, {@link GEN_AI_SYSTEM} `gen_ai.system`
 *
 * @deprecated Use {@link GEN_AI_PROVIDER_NAME} (gen_ai.provider.name) instead
 * @example "openai"
 */
export const AI_MODEL_PROVIDER = 'ai.model.provider';

/**
 * Type for {@link AI_MODEL_PROVIDER} ai.model.provider
 */
export type AI_MODEL_PROVIDER_TYPE = string;

// Path: model/attributes/ai/ai__pipeline__name.json

/**
 * The name of the AI pipeline. `ai.pipeline.name`
 *
 * Attribute Value Type: `string` {@link AI_PIPELINE_NAME_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * Apply Scrubbing: auto
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link GEN_AI_SYSTEM_INSTRUCTIONS} `gen_ai.system_instructions`
 *
 * @deprecated Use {@link GEN_AI_SYSTEM_INSTRUCTIONS} (gen_ai.system_instructions) instead
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @deprecated
 * @example true
 */
export const AI_RAW_PROMPTING = 'ai.raw_prompting';

/**
 * Type for {@link AI_RAW_PROMPTING} ai.raw_prompting
 */
export type AI_RAW_PROMPTING_TYPE = boolean;

// Path: model/attributes/ai/ai__responses.json

/**
 * The response messages sent back by the AI model. `ai.responses`
 *
 * Attribute Value Type: `Array<string>` {@link AI_RESPONSES_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @deprecated Use {@link GEN_AI_OUTPUT_MESSAGES} (gen_ai.output.messages) instead
 * @example ["hello","world"]
 */
export const AI_RESPONSES = 'ai.responses';

/**
 * Type for {@link AI_RESPONSES} ai.responses
 */
export type AI_RESPONSES_TYPE = Array<string>;

// Path: model/attributes/ai/ai__response_format.json

/**
 * For an AI model call, the format of the response `ai.response_format`
 *
 * Attribute Value Type: `string` {@link AI_RESPONSE_FORMAT_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @deprecated
 * @example "json_object"
 */
export const AI_RESPONSE_FORMAT = 'ai.response_format';

/**
 * Type for {@link AI_RESPONSE_FORMAT} ai.response_format
 */
export type AI_RESPONSE_FORMAT_TYPE = string;

// Path: model/attributes/ai/ai__search_queries.json

/**
 * Queries used to search for relevant context or documents. `ai.search_queries`
 *
 * Attribute Value Type: `Array<string>` {@link AI_SEARCH_QUERIES_TYPE}
 *
 * Apply Scrubbing: auto
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @deprecated
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
 * Apply Scrubbing: auto
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @deprecated
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @deprecated
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * Apply Scrubbing: auto
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link GEN_AI_INPUT_MESSAGES} `gen_ai.input.messages`
 *
 * @deprecated Use {@link GEN_AI_INPUT_MESSAGES} (gen_ai.input.messages) instead
 * @example ["Hello, how are you?","What is the capital of France?"]
 */
export const AI_TEXTS = 'ai.texts';

/**
 * Type for {@link AI_TEXTS} ai.texts
 */
export type AI_TEXTS_TYPE = Array<string>;

// Path: model/attributes/ai/ai__tools.json

/**
 * For an AI model call, the functions that are available `ai.tools`
 *
 * Attribute Value Type: `Array<string>` {@link AI_TOOLS_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @deprecated Use {@link GEN_AI_TOOL_DEFINITIONS} (gen_ai.tool.definitions) instead
 * @example ["function_1","function_2"]
 */
export const AI_TOOLS = 'ai.tools';

/**
 * Type for {@link AI_TOOLS} ai.tools
 */
export type AI_TOOLS_TYPE = Array<string>;

// Path: model/attributes/ai/ai__tool_calls.json

/**
 * For an AI model call, the tool calls that were made. `ai.tool_calls`
 *
 * Attribute Value Type: `Array<string>` {@link AI_TOOL_CALLS_TYPE}
 *
 * Apply Scrubbing: auto
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @deprecated Use {@link GEN_AI_OUTPUT_MESSAGES} (gen_ai.output.messages) instead
 * @example ["tool_call_1","tool_call_2"]
 */
export const AI_TOOL_CALLS = 'ai.tool_calls';

/**
 * Type for {@link AI_TOOL_CALLS} ai.tool_calls
 */
export type AI_TOOL_CALLS_TYPE = Array<string>;

// Path: model/attributes/ai/ai__top_k.json

/**
 * Limits the model to only consider the K most likely next tokens, where K is an integer (e.g., top_k=20 means only the 20 highest probability tokens are considered). `ai.top_k`
 *
 * Attribute Value Type: `number` {@link AI_TOP_K_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link GEN_AI_COST_TOTAL_TOKENS} `gen_ai.cost.total_tokens`
 *
 * @deprecated Use {@link GEN_AI_COST_TOTAL_TOKENS} (gen_ai.cost.total_tokens) instead
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * Apply Scrubbing: auto
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @deprecated
 * @example ["Token limit exceeded"]
 */
export const AI_WARNINGS = 'ai.warnings';

/**
 * Type for {@link AI_WARNINGS} ai.warnings
 */
export type AI_WARNINGS_TYPE = Array<string>;

// Path: model/attributes/angular/angular__version.json

/**
 * The version of the Angular framework `angular.version`
 *
 * Attribute Value Type: `string` {@link ANGULAR_VERSION_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "17.1.0"
 */
export const ANGULAR_VERSION = 'angular.version';

/**
 * Type for {@link ANGULAR_VERSION} angular.version
 */
export type ANGULAR_VERSION_TYPE = string;

// Path: model/attributes/app/app__app_build.json

/**
 * Internal build identifier, as it appears on the platform. `app.app_build`
 *
 * Attribute Value Type: `string` {@link APP_APP_BUILD_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link APP_BUILD} `app.build`
 *
 * @deprecated Use {@link APP_BUILD} (app.build) instead - Deprecated in favor of app.build
 * @example "1"
 */
export const APP_APP_BUILD = 'app.app_build';

/**
 * Type for {@link APP_APP_BUILD} app.app_build
 */
export type APP_APP_BUILD_TYPE = string;

// Path: model/attributes/app/app__app_identifier.json

/**
 * Version-independent application identifier, often a dotted bundle ID. `app.app_identifier`
 *
 * Attribute Value Type: `string` {@link APP_APP_IDENTIFIER_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link APP_IDENTIFIER} `app.identifier`
 *
 * @deprecated Use {@link APP_IDENTIFIER} (app.identifier) instead - Deprecated in favor of app.identifier
 * @example "com.example.myapp"
 */
export const APP_APP_IDENTIFIER = 'app.app_identifier';

/**
 * Type for {@link APP_APP_IDENTIFIER} app.app_identifier
 */
export type APP_APP_IDENTIFIER_TYPE = string;

// Path: model/attributes/app/app__app_name.json

/**
 * Human readable application name, as it appears on the platform. `app.app_name`
 *
 * Attribute Value Type: `string` {@link APP_APP_NAME_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link APP_NAME} `app.name`
 *
 * @deprecated Use {@link APP_NAME} (app.name) instead - Deprecated in favor of app.name
 * @example "My App"
 */
export const APP_APP_NAME = 'app.app_name';

/**
 * Type for {@link APP_APP_NAME} app.app_name
 */
export type APP_APP_NAME_TYPE = string;

// Path: model/attributes/app/app__app_start_time.json

/**
 * Formatted UTC timestamp when the user started the application. `app.app_start_time`
 *
 * Attribute Value Type: `string` {@link APP_APP_START_TIME_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link APP_START_TIME} `app.start_time`
 *
 * @deprecated Use {@link APP_START_TIME} (app.start_time) instead - Deprecated in favor of app.start_time
 * @example "2025-01-01T00:00:00.000Z"
 */
export const APP_APP_START_TIME = 'app.app_start_time';

/**
 * Type for {@link APP_APP_START_TIME} app.app_start_time
 */
export type APP_APP_START_TIME_TYPE = string;

// Path: model/attributes/app/app__app_version.json

/**
 * Human readable application version, as it appears on the platform. `app.app_version`
 *
 * Attribute Value Type: `string` {@link APP_APP_VERSION_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link APP_VERSION} `app.version`
 *
 * @deprecated Use {@link APP_VERSION} (app.version) instead - Deprecated in favor of app.version
 * @example "1.0.0"
 */
export const APP_APP_VERSION = 'app.app_version';

/**
 * Type for {@link APP_APP_VERSION} app.app_version
 */
export type APP_APP_VERSION_TYPE = string;

// Path: model/attributes/app/app__build.json

/**
 * Internal build identifier, as it appears on the platform. `app.build`
 *
 * Attribute Value Type: `string` {@link APP_BUILD_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link APP_APP_BUILD} `app.app_build`
 *
 * @example "1"
 */
export const APP_BUILD = 'app.build';

/**
 * Type for {@link APP_BUILD} app.build
 */
export type APP_BUILD_TYPE = string;

// Path: model/attributes/app/app__identifier.json

/**
 * Version-independent application identifier, often a dotted bundle ID. `app.identifier`
 *
 * Attribute Value Type: `string` {@link APP_IDENTIFIER_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link APP_APP_IDENTIFIER} `app.app_identifier`
 *
 * @example "com.example.myapp"
 */
export const APP_IDENTIFIER = 'app.identifier';

/**
 * Type for {@link APP_IDENTIFIER} app.identifier
 */
export type APP_IDENTIFIER_TYPE = string;

// Path: model/attributes/app/app__in_foreground.json

/**
 * Whether the application is currently in the foreground. `app.in_foreground`
 *
 * Attribute Value Type: `boolean` {@link APP_IN_FOREGROUND_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example true
 */
export const APP_IN_FOREGROUND = 'app.in_foreground';

/**
 * Type for {@link APP_IN_FOREGROUND} app.in_foreground
 */
export type APP_IN_FOREGROUND_TYPE = boolean;

// Path: model/attributes/app/app__name.json

/**
 * Human readable application name, as it appears on the platform. `app.name`
 *
 * Attribute Value Type: `string` {@link APP_NAME_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link APP_APP_NAME} `app.app_name`
 *
 * @example "My App"
 */
export const APP_NAME = 'app.name';

/**
 * Type for {@link APP_NAME} app.name
 */
export type APP_NAME_TYPE = string;

// Path: model/attributes/app_start_cold.json

/**
 * The duration of a cold app start in milliseconds `app_start_cold`
 *
 * Attribute Value Type: `number` {@link APP_START_COLD_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link APP_VITALS_START_COLD_VALUE} `app.vitals.start.cold.value`
 *
 * @deprecated Use {@link APP_VITALS_START_COLD_VALUE} (app.vitals.start.cold.value) instead - Replaced by app.vitals.start.cold.value to align with the app.vitals.* namespace for mobile performance attributes
 * @example 1234.56
 */
export const APP_START_COLD = 'app_start_cold';

/**
 * Type for {@link APP_START_COLD} app_start_cold
 */
export type APP_START_COLD_TYPE = number;

// Path: model/attributes/app/app__start_time.json

/**
 * Formatted UTC timestamp when the user started the application. `app.start_time`
 *
 * Attribute Value Type: `string` {@link APP_START_TIME_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link APP_APP_START_TIME} `app.app_start_time`
 *
 * @example "2025-01-01T00:00:00.000Z"
 */
export const APP_START_TIME = 'app.start_time';

/**
 * Type for {@link APP_START_TIME} app.start_time
 */
export type APP_START_TIME_TYPE = string;

// Path: model/attributes/app_start_type.json

/**
 * Mobile app start variant. Either cold or warm. `app_start_type`
 *
 * Attribute Value Type: `string` {@link APP_START_TYPE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link APP_VITALS_START_TYPE} `app.vitals.start.type`
 *
 * @deprecated Use {@link APP_VITALS_START_TYPE} (app.vitals.start.type) instead - Replaced by app.vitals.start.type to align with the app.vitals.* namespace for mobile performance attributes
 * @example "cold"
 */
export const APP_START_TYPE = 'app_start_type';

/**
 * Type for {@link APP_START_TYPE} app_start_type
 */
export type APP_START_TYPE_TYPE = string;

// Path: model/attributes/app_start_warm.json

/**
 * The duration of a warm app start in milliseconds `app_start_warm`
 *
 * Attribute Value Type: `number` {@link APP_START_WARM_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link APP_VITALS_START_WARM_VALUE} `app.vitals.start.warm.value`
 *
 * @deprecated Use {@link APP_VITALS_START_WARM_VALUE} (app.vitals.start.warm.value) instead - Replaced by app.vitals.start.warm.value to align with the app.vitals.* namespace for mobile performance attributes
 * @example 1234.56
 */
export const APP_START_WARM = 'app_start_warm';

/**
 * Type for {@link APP_START_WARM} app_start_warm
 */
export type APP_START_WARM_TYPE = number;

// Path: model/attributes/app/app__version.json

/**
 * Human readable application version, as it appears on the platform. `app.version`
 *
 * Attribute Value Type: `string` {@link APP_VERSION_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link APP_APP_VERSION} `app.app_version`
 *
 * @example "1.0.0"
 */
export const APP_VERSION = 'app.version';

/**
 * Type for {@link APP_VERSION} app.version
 */
export type APP_VERSION_TYPE = string;

// Path: model/attributes/app/app__vitals__frames__delay__value.json

/**
 * The sum of all delayed frame durations in seconds during the lifetime of the span. For more information see [frames delay](https://develop.sentry.dev/sdk/performance/frames-delay/). `app.vitals.frames.delay.value`
 *
 * Attribute Value Type: `number` {@link APP_VITALS_FRAMES_DELAY_VALUE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link FRAMES_DELAY} `frames.delay`
 *
 * @example 5
 */
export const APP_VITALS_FRAMES_DELAY_VALUE = 'app.vitals.frames.delay.value';

/**
 * Type for {@link APP_VITALS_FRAMES_DELAY_VALUE} app.vitals.frames.delay.value
 */
export type APP_VITALS_FRAMES_DELAY_VALUE_TYPE = number;

// Path: model/attributes/app/app__vitals__frames__frozen__count.json

/**
 * The number of frozen frames rendered during the lifetime of the span. `app.vitals.frames.frozen.count`
 *
 * Attribute Value Type: `number` {@link APP_VITALS_FRAMES_FROZEN_COUNT_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link FRAMES_FROZEN} `frames.frozen`
 *
 * @example 3
 */
export const APP_VITALS_FRAMES_FROZEN_COUNT = 'app.vitals.frames.frozen.count';

/**
 * Type for {@link APP_VITALS_FRAMES_FROZEN_COUNT} app.vitals.frames.frozen.count
 */
export type APP_VITALS_FRAMES_FROZEN_COUNT_TYPE = number;

// Path: model/attributes/app/app__vitals__frames__slow__count.json

/**
 * The number of slow frames rendered during the lifetime of the span. `app.vitals.frames.slow.count`
 *
 * Attribute Value Type: `number` {@link APP_VITALS_FRAMES_SLOW_COUNT_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link FRAMES_SLOW} `frames.slow`
 *
 * @example 1
 */
export const APP_VITALS_FRAMES_SLOW_COUNT = 'app.vitals.frames.slow.count';

/**
 * Type for {@link APP_VITALS_FRAMES_SLOW_COUNT} app.vitals.frames.slow.count
 */
export type APP_VITALS_FRAMES_SLOW_COUNT_TYPE = number;

// Path: model/attributes/app/app__vitals__frames__total__count.json

/**
 * The number of total frames rendered during the lifetime of the span. `app.vitals.frames.total.count`
 *
 * Attribute Value Type: `number` {@link APP_VITALS_FRAMES_TOTAL_COUNT_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link FRAMES_TOTAL} `frames.total`
 *
 * @example 60
 */
export const APP_VITALS_FRAMES_TOTAL_COUNT = 'app.vitals.frames.total.count';

/**
 * Type for {@link APP_VITALS_FRAMES_TOTAL_COUNT} app.vitals.frames.total.count
 */
export type APP_VITALS_FRAMES_TOTAL_COUNT_TYPE = number;

// Path: model/attributes/app/app__vitals__start__cold__value.json

/**
 * The duration of a cold app start in milliseconds `app.vitals.start.cold.value`
 *
 * Attribute Value Type: `number` {@link APP_VITALS_START_COLD_VALUE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link APP_START_COLD} `app_start_cold`
 *
 * @example 1234.56
 */
export const APP_VITALS_START_COLD_VALUE = 'app.vitals.start.cold.value';

/**
 * Type for {@link APP_VITALS_START_COLD_VALUE} app.vitals.start.cold.value
 */
export type APP_VITALS_START_COLD_VALUE_TYPE = number;

// Path: model/attributes/app/app__vitals__start__prewarmed.json

/**
 * Whether the app start was prewarmed. `app.vitals.start.prewarmed`
 *
 * Attribute Value Type: `boolean` {@link APP_VITALS_START_PREWARMED_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example true
 */
export const APP_VITALS_START_PREWARMED = 'app.vitals.start.prewarmed';

/**
 * Type for {@link APP_VITALS_START_PREWARMED} app.vitals.start.prewarmed
 */
export type APP_VITALS_START_PREWARMED_TYPE = boolean;

// Path: model/attributes/app/app__vitals__start__reason.json

/**
 * The reason that triggered the app start. `app.vitals.start.reason`
 *
 * Attribute Value Type: `string` {@link APP_VITALS_START_REASON_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "push"
 */
export const APP_VITALS_START_REASON = 'app.vitals.start.reason';

/**
 * Type for {@link APP_VITALS_START_REASON} app.vitals.start.reason
 */
export type APP_VITALS_START_REASON_TYPE = string;

// Path: model/attributes/app/app__vitals__start__screen.json

/**
 * The screen that is rendered when the app start is complete. This is the screen the user first sees and can interact with after launch. The absence of this attribute on the app start span indicates a background app start where no UI was rendered. `app.vitals.start.screen`
 *
 * Attribute Value Type: `string` {@link APP_VITALS_START_SCREEN_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "MainActivity"
 */
export const APP_VITALS_START_SCREEN = 'app.vitals.start.screen';

/**
 * Type for {@link APP_VITALS_START_SCREEN} app.vitals.start.screen
 */
export type APP_VITALS_START_SCREEN_TYPE = string;

// Path: model/attributes/app/app__vitals__start__type.json

/**
 * The type of app start, for example `cold` or `warm` `app.vitals.start.type`
 *
 * Attribute Value Type: `string` {@link APP_VITALS_START_TYPE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link APP_START_TYPE} `app_start_type`
 *
 * @example "cold"
 */
export const APP_VITALS_START_TYPE = 'app.vitals.start.type';

/**
 * Type for {@link APP_VITALS_START_TYPE} app.vitals.start.type
 */
export type APP_VITALS_START_TYPE_TYPE = string;

// Path: model/attributes/app/app__vitals__start__warm__value.json

/**
 * The duration of a warm app start in milliseconds `app.vitals.start.warm.value`
 *
 * Attribute Value Type: `number` {@link APP_VITALS_START_WARM_VALUE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link APP_START_WARM} `app_start_warm`
 *
 * @example 1234.56
 */
export const APP_VITALS_START_WARM_VALUE = 'app.vitals.start.warm.value';

/**
 * Type for {@link APP_VITALS_START_WARM_VALUE} app.vitals.start.warm.value
 */
export type APP_VITALS_START_WARM_VALUE_TYPE = number;

// Path: model/attributes/app/app__vitals__ttfd__value.json

/**
 * The duration of time to full display in milliseconds `app.vitals.ttfd.value`
 *
 * Attribute Value Type: `number` {@link APP_VITALS_TTFD_VALUE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link TIME_TO_FULL_DISPLAY} `time_to_full_display`
 *
 * @example 1234.56
 */
export const APP_VITALS_TTFD_VALUE = 'app.vitals.ttfd.value';

/**
 * Type for {@link APP_VITALS_TTFD_VALUE} app.vitals.ttfd.value
 */
export type APP_VITALS_TTFD_VALUE_TYPE = number;

// Path: model/attributes/app/app__vitals__ttid__value.json

/**
 * The duration of time to initial display in milliseconds `app.vitals.ttid.value`
 *
 * Attribute Value Type: `number` {@link APP_VITALS_TTID_VALUE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link TIME_TO_INITIAL_DISPLAY} `time_to_initial_display`
 *
 * @example 1234.56
 */
export const APP_VITALS_TTID_VALUE = 'app.vitals.ttid.value';

/**
 * Type for {@link APP_VITALS_TTID_VALUE} app.vitals.ttid.value
 */
export type APP_VITALS_TTID_VALUE_TYPE = number;

// Path: model/attributes/art/art__gc__blocking_count.json

/**
 * Total number of blocking (stop-the-world) garbage collections performed by the Android Runtime `art.gc.blocking_count`
 *
 * Attribute Value Type: `number` {@link ART_GC_BLOCKING_COUNT_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example 1
 */
export const ART_GC_BLOCKING_COUNT = 'art.gc.blocking_count';

/**
 * Type for {@link ART_GC_BLOCKING_COUNT} art.gc.blocking_count
 */
export type ART_GC_BLOCKING_COUNT_TYPE = number;

// Path: model/attributes/art/art__gc__blocking_time.json

/**
 * Total time spent in blocking (stop-the-world) garbage collections by the Android Runtime, in milliseconds `art.gc.blocking_time`
 *
 * Attribute Value Type: `number` {@link ART_GC_BLOCKING_TIME_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example 11.873
 */
export const ART_GC_BLOCKING_TIME = 'art.gc.blocking_time';

/**
 * Type for {@link ART_GC_BLOCKING_TIME} art.gc.blocking_time
 */
export type ART_GC_BLOCKING_TIME_TYPE = number;

// Path: model/attributes/art/art__gc__pre_oome_count.json

/**
 * Total number of garbage collections triggered as a last resort before an OutOfMemoryError by the Android Runtime `art.gc.pre_oome_count`
 *
 * Attribute Value Type: `number` {@link ART_GC_PRE_OOME_COUNT_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example 0
 */
export const ART_GC_PRE_OOME_COUNT = 'art.gc.pre_oome_count';

/**
 * Type for {@link ART_GC_PRE_OOME_COUNT} art.gc.pre_oome_count
 */
export type ART_GC_PRE_OOME_COUNT_TYPE = number;

// Path: model/attributes/art/art__gc__total_count.json

/**
 * Total number of garbage collections performed by the Android Runtime `art.gc.total_count`
 *
 * Attribute Value Type: `number` {@link ART_GC_TOTAL_COUNT_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example 1
 */
export const ART_GC_TOTAL_COUNT = 'art.gc.total_count';

/**
 * Type for {@link ART_GC_TOTAL_COUNT} art.gc.total_count
 */
export type ART_GC_TOTAL_COUNT_TYPE = number;

// Path: model/attributes/art/art__gc__total_time.json

/**
 * Total time spent in garbage collection by the Android Runtime, in milliseconds `art.gc.total_time`
 *
 * Attribute Value Type: `number` {@link ART_GC_TOTAL_TIME_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example 11.807
 */
export const ART_GC_TOTAL_TIME = 'art.gc.total_time';

/**
 * Type for {@link ART_GC_TOTAL_TIME} art.gc.total_time
 */
export type ART_GC_TOTAL_TIME_TYPE = number;

// Path: model/attributes/art/art__gc__waiting_time.json

/**
 * Total time threads spent waiting for garbage collection to complete in the Android Runtime, in milliseconds `art.gc.waiting_time`
 *
 * Attribute Value Type: `number` {@link ART_GC_WAITING_TIME_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example 8.054
 */
export const ART_GC_WAITING_TIME = 'art.gc.waiting_time';

/**
 * Type for {@link ART_GC_WAITING_TIME} art.gc.waiting_time
 */
export type ART_GC_WAITING_TIME_TYPE = number;

// Path: model/attributes/art/art__memory__free.json

/**
 * Free memory available to the process as reported by the Android Runtime, in bytes `art.memory.free`
 *
 * Attribute Value Type: `number` {@link ART_MEMORY_FREE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example 3181568
 */
export const ART_MEMORY_FREE = 'art.memory.free';

/**
 * Type for {@link ART_MEMORY_FREE} art.memory.free
 */
export type ART_MEMORY_FREE_TYPE = number;

// Path: model/attributes/art/art__memory__free_until_gc.json

/**
 * Free memory available before a garbage collection would be triggered by the Android Runtime, in bytes `art.memory.free_until_gc`
 *
 * Attribute Value Type: `number` {@link ART_MEMORY_FREE_UNTIL_GC_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example 3181568
 */
export const ART_MEMORY_FREE_UNTIL_GC = 'art.memory.free_until_gc';

/**
 * Type for {@link ART_MEMORY_FREE_UNTIL_GC} art.memory.free_until_gc
 */
export type ART_MEMORY_FREE_UNTIL_GC_TYPE = number;

// Path: model/attributes/art/art__memory__free_until_oome.json

/**
 * Free memory available before an OutOfMemoryError would be thrown by the Android Runtime, in bytes `art.memory.free_until_oome`
 *
 * Attribute Value Type: `number` {@link ART_MEMORY_FREE_UNTIL_OOME_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example 196083712
 */
export const ART_MEMORY_FREE_UNTIL_OOME = 'art.memory.free_until_oome';

/**
 * Type for {@link ART_MEMORY_FREE_UNTIL_OOME} art.memory.free_until_oome
 */
export type ART_MEMORY_FREE_UNTIL_OOME_TYPE = number;

// Path: model/attributes/art/art__memory__max.json

/**
 * Maximum memory the process is allowed to use as reported by the Android Runtime, in bytes `art.memory.max`
 *
 * Attribute Value Type: `number` {@link ART_MEMORY_MAX_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example 201326592
 */
export const ART_MEMORY_MAX = 'art.memory.max';

/**
 * Type for {@link ART_MEMORY_MAX} art.memory.max
 */
export type ART_MEMORY_MAX_TYPE = number;

// Path: model/attributes/art/art__memory__total.json

/**
 * Total memory currently allocated to the process by the Android Runtime, in bytes `art.memory.total`
 *
 * Attribute Value Type: `number` {@link ART_MEMORY_TOTAL_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example 7774208
 */
export const ART_MEMORY_TOTAL = 'art.memory.total';

/**
 * Type for {@link ART_MEMORY_TOTAL} art.memory.total
 */
export type ART_MEMORY_TOTAL_TYPE = number;

// Path: model/attributes/aws/aws__cloudwatch__logs__log_group.json

/**
 * The name of the CloudWatch Logs log group `aws.cloudwatch.logs.log_group`
 *
 * Attribute Value Type: `string` {@link AWS_CLOUDWATCH_LOGS_LOG_GROUP_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "/aws/lambda/my-function"
 */
export const AWS_CLOUDWATCH_LOGS_LOG_GROUP = 'aws.cloudwatch.logs.log_group';

/**
 * Type for {@link AWS_CLOUDWATCH_LOGS_LOG_GROUP} aws.cloudwatch.logs.log_group
 */
export type AWS_CLOUDWATCH_LOGS_LOG_GROUP_TYPE = string;

// Path: model/attributes/aws/aws__cloudwatch__logs__log_stream.json

/**
 * The name of the CloudWatch Logs log stream `aws.cloudwatch.logs.log_stream`
 *
 * Attribute Value Type: `string` {@link AWS_CLOUDWATCH_LOGS_LOG_STREAM_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "2024/01/01/[$LATEST]abcdef1234567890"
 */
export const AWS_CLOUDWATCH_LOGS_LOG_STREAM = 'aws.cloudwatch.logs.log_stream';

/**
 * Type for {@link AWS_CLOUDWATCH_LOGS_LOG_STREAM} aws.cloudwatch.logs.log_stream
 */
export type AWS_CLOUDWATCH_LOGS_LOG_STREAM_TYPE = string;

// Path: model/attributes/aws/aws__cloudwatch__logs__url.json

/**
 * The URL to the CloudWatch Logs log group `aws.cloudwatch.logs.url`
 *
 * Attribute Value Type: `string` {@link AWS_CLOUDWATCH_LOGS_URL_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "https://console.aws.amazon.com/cloudwatch/home?region=us-east-1#logsV2:log-groups/log-group/my-log-group"
 */
export const AWS_CLOUDWATCH_LOGS_URL = 'aws.cloudwatch.logs.url';

/**
 * Type for {@link AWS_CLOUDWATCH_LOGS_URL} aws.cloudwatch.logs.url
 */
export type AWS_CLOUDWATCH_LOGS_URL_TYPE = string;

// Path: model/attributes/aws/aws__lambda__aws_request_id.json

/**
 * The AWS request ID as received by the Lambda function runtime `aws.lambda.aws_request_id`
 *
 * Attribute Value Type: `string` {@link AWS_LAMBDA_AWS_REQUEST_ID_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link FAAS_INVOCATION_ID} `faas.invocation_id`
 *
 * @deprecated Use {@link FAAS_INVOCATION_ID} (faas.invocation_id) instead - This attribute is being deprecated in favor of faas.invocation_id
 * @example "8476a536-e9f4-11e8-9739-2dfe598c3fcd"
 */
export const AWS_LAMBDA_AWS_REQUEST_ID = 'aws.lambda.aws_request_id';

/**
 * Type for {@link AWS_LAMBDA_AWS_REQUEST_ID} aws.lambda.aws_request_id
 */
export type AWS_LAMBDA_AWS_REQUEST_ID_TYPE = string;

// Path: model/attributes/aws/aws__lambda__execution_duration_in_millis.json

/**
 * The execution duration of the Lambda function invocation in milliseconds `aws.lambda.execution_duration_in_millis`
 *
 * Attribute Value Type: `number` {@link AWS_LAMBDA_EXECUTION_DURATION_IN_MILLIS_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example 1234.56
 */
export const AWS_LAMBDA_EXECUTION_DURATION_IN_MILLIS = 'aws.lambda.execution_duration_in_millis';

/**
 * Type for {@link AWS_LAMBDA_EXECUTION_DURATION_IN_MILLIS} aws.lambda.execution_duration_in_millis
 */
export type AWS_LAMBDA_EXECUTION_DURATION_IN_MILLIS_TYPE = number;

// Path: model/attributes/aws/aws__lambda__function_name.json

/**
 * The name of the Lambda function `aws.lambda.function_name`
 *
 * Attribute Value Type: `string` {@link AWS_LAMBDA_FUNCTION_NAME_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link FAAS_NAME} `faas.name`
 *
 * @deprecated Use {@link FAAS_NAME} (faas.name) instead - Use the OTel-aligned faas.name attribute instead
 * @example "my-function"
 */
export const AWS_LAMBDA_FUNCTION_NAME = 'aws.lambda.function_name';

/**
 * Type for {@link AWS_LAMBDA_FUNCTION_NAME} aws.lambda.function_name
 */
export type AWS_LAMBDA_FUNCTION_NAME_TYPE = string;

// Path: model/attributes/aws/aws__lambda__function_version.json

/**
 * The version of the Lambda function `aws.lambda.function_version`
 *
 * Attribute Value Type: `string` {@link AWS_LAMBDA_FUNCTION_VERSION_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link FAAS_VERSION} `faas.version`
 *
 * @deprecated Use {@link FAAS_VERSION} (faas.version) instead - Use the OTel-aligned faas.version attribute instead
 * @example "$LATEST"
 */
export const AWS_LAMBDA_FUNCTION_VERSION = 'aws.lambda.function_version';

/**
 * Type for {@link AWS_LAMBDA_FUNCTION_VERSION} aws.lambda.function_version
 */
export type AWS_LAMBDA_FUNCTION_VERSION_TYPE = string;

// Path: model/attributes/aws/aws__lambda__invoked_arn.json

/**
 * The full ARN of the Lambda function that was invoked `aws.lambda.invoked_arn`
 *
 * Attribute Value Type: `string` {@link AWS_LAMBDA_INVOKED_ARN_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * Aliases: {@link AWS_LAMBDA_INVOKED_FUNCTION_ARN} `aws.lambda.invoked_function_arn`
 *
 * @example "arn:aws:lambda:us-east-1:123456789012:function:my-function"
 */
export const AWS_LAMBDA_INVOKED_ARN = 'aws.lambda.invoked_arn';

/**
 * Type for {@link AWS_LAMBDA_INVOKED_ARN} aws.lambda.invoked_arn
 */
export type AWS_LAMBDA_INVOKED_ARN_TYPE = string;

// Path: model/attributes/aws/aws__lambda__invoked_function_arn.json

/**
 * The full ARN of the Lambda function that was invoked `aws.lambda.invoked_function_arn`
 *
 * Attribute Value Type: `string` {@link AWS_LAMBDA_INVOKED_FUNCTION_ARN_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link AWS_LAMBDA_INVOKED_ARN} `aws.lambda.invoked_arn`
 *
 * @deprecated Use {@link AWS_LAMBDA_INVOKED_ARN} (aws.lambda.invoked_arn) instead - This attribute is being deprecated in favor of aws.lambda.invoked_arn
 * @example "arn:aws:lambda:us-east-1:123456789012:function:my-function"
 */
export const AWS_LAMBDA_INVOKED_FUNCTION_ARN = 'aws.lambda.invoked_function_arn';

/**
 * Type for {@link AWS_LAMBDA_INVOKED_FUNCTION_ARN} aws.lambda.invoked_function_arn
 */
export type AWS_LAMBDA_INVOKED_FUNCTION_ARN_TYPE = string;

// Path: model/attributes/aws/aws__lambda__remaining_time_in_millis.json

/**
 * The remaining time in milliseconds before the Lambda function times out `aws.lambda.remaining_time_in_millis`
 *
 * Attribute Value Type: `number` {@link AWS_LAMBDA_REMAINING_TIME_IN_MILLIS_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example 5000
 */
export const AWS_LAMBDA_REMAINING_TIME_IN_MILLIS = 'aws.lambda.remaining_time_in_millis';

/**
 * Type for {@link AWS_LAMBDA_REMAINING_TIME_IN_MILLIS} aws.lambda.remaining_time_in_millis
 */
export type AWS_LAMBDA_REMAINING_TIME_IN_MILLIS_TYPE = number;

// Path: model/attributes/aws/aws__log__group__names.json

/**
 * The name(s) of the AWS log group(s) an application is writing to. `aws.log.group.names`
 *
 * Attribute Value Type: `Array<string>` {@link AWS_LOG_GROUP_NAMES_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * @example ["/aws/lambda/my-function","opentelemetry-service"]
 */
export const AWS_LOG_GROUP_NAMES = 'aws.log.group.names';

/**
 * Type for {@link AWS_LOG_GROUP_NAMES} aws.log.group.names
 */
export type AWS_LOG_GROUP_NAMES_TYPE = Array<string>;

// Path: model/attributes/aws/aws__log__stream__names.json

/**
 * The name(s) of the AWS log stream(s) an application is writing to. `aws.log.stream.names`
 *
 * Attribute Value Type: `Array<string>` {@link AWS_LOG_STREAM_NAMES_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * @example ["logs/main/10838bed-421f-43ef-870a-f43feacbbb5b"]
 */
export const AWS_LOG_STREAM_NAMES = 'aws.log.stream.names';

/**
 * Type for {@link AWS_LOG_STREAM_NAMES} aws.log.stream.names
 */
export type AWS_LOG_STREAM_NAMES_TYPE = Array<string>;

// Path: model/attributes/blocked_main_thread.json

/**
 * Whether the main thread was blocked by the span. `blocked_main_thread`
 *
 * Attribute Value Type: `boolean` {@link BLOCKED_MAIN_THREAD_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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

// Path: model/attributes/browser/browser__performance__navigation__activation_start.json

/**
 * The time between initiating a navigation to a page and the browser activating the page `browser.performance.navigation.activation_start`
 *
 * Attribute Value Type: `number` {@link BROWSER_PERFORMANCE_NAVIGATION_ACTIVATION_START_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link PERFORMANCE_ACTIVATIONSTART} `performance.activationStart`
 *
 * @example 1.983
 */
export const BROWSER_PERFORMANCE_NAVIGATION_ACTIVATION_START = 'browser.performance.navigation.activation_start';

/**
 * Type for {@link BROWSER_PERFORMANCE_NAVIGATION_ACTIVATION_START} browser.performance.navigation.activation_start
 */
export type BROWSER_PERFORMANCE_NAVIGATION_ACTIVATION_START_TYPE = number;

// Path: model/attributes/browser/browser__performance__time_origin.json

/**
 * The browser's performance.timeOrigin timestamp representing the time when the pageload was initiated `browser.performance.time_origin`
 *
 * Attribute Value Type: `number` {@link BROWSER_PERFORMANCE_TIME_ORIGIN_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link PERFORMANCE_TIMEORIGIN} `performance.timeOrigin`
 *
 * @example 1776185678.886
 */
export const BROWSER_PERFORMANCE_TIME_ORIGIN = 'browser.performance.time_origin';

/**
 * Type for {@link BROWSER_PERFORMANCE_TIME_ORIGIN} browser.performance.time_origin
 */
export type BROWSER_PERFORMANCE_TIME_ORIGIN_TYPE = number;

// Path: model/attributes/browser/browser__report__type.json

/**
 * A browser report sent via reporting API.. `browser.report.type`
 *
 * Attribute Value Type: `string` {@link BROWSER_REPORT_TYPE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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

// Path: model/attributes/browser/browser__web_vital__cls__report_event.json

/**
 * The event that caused the SDK to report CLS (pagehide or navigation) `browser.web_vital.cls.report_event`
 *
 * Attribute Value Type: `string` {@link BROWSER_WEB_VITAL_CLS_REPORT_EVENT_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "navigation"
 */
export const BROWSER_WEB_VITAL_CLS_REPORT_EVENT = 'browser.web_vital.cls.report_event';

/**
 * Type for {@link BROWSER_WEB_VITAL_CLS_REPORT_EVENT} browser.web_vital.cls.report_event
 */
export type BROWSER_WEB_VITAL_CLS_REPORT_EVENT_TYPE = string;

// Path: model/attributes/browser/browser__web_vital__cls__source__[key].json

/**
 * The HTML elements or components responsible for the layout shift. <key> is a numeric index from 1 to N `browser.web_vital.cls.source.<key>`
 *
 * Attribute Value Type: `string` {@link BROWSER_WEB_VITAL_CLS_SOURCE_KEY_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Has Dynamic Suffix: true
 *
 * Aliases: {@link CLS_SOURCE_KEY} `cls.source.<key>`
 *
 * @example "body > div#app"
 */
export const BROWSER_WEB_VITAL_CLS_SOURCE_KEY = 'browser.web_vital.cls.source.<key>';

/**
 * Base key for {@link BROWSER_WEB_VITAL_CLS_SOURCE_KEY}. Use with a dynamic suffix, e.g. `${BROWSER_WEB_VITAL_CLS_SOURCE_KEY_BASE}.${key}`.
 */
export const BROWSER_WEB_VITAL_CLS_SOURCE_KEY_BASE = 'browser.web_vital.cls.source';

/**
 * Type for {@link BROWSER_WEB_VITAL_CLS_SOURCE_KEY} browser.web_vital.cls.source.<key>
 */
export type BROWSER_WEB_VITAL_CLS_SOURCE_KEY_TYPE = string;

// Path: model/attributes/browser/browser__web_vital__cls__value.json

/**
 * The value of the recorded Cumulative Layout Shift (CLS) web vital `browser.web_vital.cls.value`
 *
 * Attribute Value Type: `number` {@link BROWSER_WEB_VITAL_CLS_VALUE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link CLS} `cls`
 *
 * @example 0.2361
 */
export const BROWSER_WEB_VITAL_CLS_VALUE = 'browser.web_vital.cls.value';

/**
 * Type for {@link BROWSER_WEB_VITAL_CLS_VALUE} browser.web_vital.cls.value
 */
export type BROWSER_WEB_VITAL_CLS_VALUE_TYPE = number;

// Path: model/attributes/browser/browser__web_vital__fcp__value.json

/**
 * The time it takes for the browser to render the first piece of meaningful content on the screen `browser.web_vital.fcp.value`
 *
 * Attribute Value Type: `number` {@link BROWSER_WEB_VITAL_FCP_VALUE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link FCP} `fcp`
 *
 * @example 547.6951
 */
export const BROWSER_WEB_VITAL_FCP_VALUE = 'browser.web_vital.fcp.value';

/**
 * Type for {@link BROWSER_WEB_VITAL_FCP_VALUE} browser.web_vital.fcp.value
 */
export type BROWSER_WEB_VITAL_FCP_VALUE_TYPE = number;

// Path: model/attributes/browser/browser__web_vital__fp__value.json

/**
 * The time in milliseconds it takes for the browser to render the first pixel on the screen `browser.web_vital.fp.value`
 *
 * Attribute Value Type: `number` {@link BROWSER_WEB_VITAL_FP_VALUE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link FP} `fp`
 *
 * @example 477.1926
 */
export const BROWSER_WEB_VITAL_FP_VALUE = 'browser.web_vital.fp.value';

/**
 * Type for {@link BROWSER_WEB_VITAL_FP_VALUE} browser.web_vital.fp.value
 */
export type BROWSER_WEB_VITAL_FP_VALUE_TYPE = number;

// Path: model/attributes/browser/browser__web_vital__inp__value.json

/**
 * The value of the recorded Interaction to Next Paint (INP) web vital `browser.web_vital.inp.value`
 *
 * Attribute Value Type: `number` {@link BROWSER_WEB_VITAL_INP_VALUE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link INP} `inp`
 *
 * @example 200
 */
export const BROWSER_WEB_VITAL_INP_VALUE = 'browser.web_vital.inp.value';

/**
 * Type for {@link BROWSER_WEB_VITAL_INP_VALUE} browser.web_vital.inp.value
 */
export type BROWSER_WEB_VITAL_INP_VALUE_TYPE = number;

// Path: model/attributes/browser/browser__web_vital__lcp__element.json

/**
 * The HTML element selector or component name for which LCP was reported `browser.web_vital.lcp.element`
 *
 * Attribute Value Type: `string` {@link BROWSER_WEB_VITAL_LCP_ELEMENT_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link LCP_ELEMENT} `lcp.element`
 *
 * @example "body > div#app > div#container > div"
 */
export const BROWSER_WEB_VITAL_LCP_ELEMENT = 'browser.web_vital.lcp.element';

/**
 * Type for {@link BROWSER_WEB_VITAL_LCP_ELEMENT} browser.web_vital.lcp.element
 */
export type BROWSER_WEB_VITAL_LCP_ELEMENT_TYPE = string;

// Path: model/attributes/browser/browser__web_vital__lcp__id.json

/**
 * The id of the dom element responsible for the largest contentful paint `browser.web_vital.lcp.id`
 *
 * Attribute Value Type: `string` {@link BROWSER_WEB_VITAL_LCP_ID_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link LCP_ID} `lcp.id`
 *
 * @example "#gero"
 */
export const BROWSER_WEB_VITAL_LCP_ID = 'browser.web_vital.lcp.id';

/**
 * Type for {@link BROWSER_WEB_VITAL_LCP_ID} browser.web_vital.lcp.id
 */
export type BROWSER_WEB_VITAL_LCP_ID_TYPE = string;

// Path: model/attributes/browser/browser__web_vital__lcp__load_time.json

/**
 * The time it took for the LCP element to be loaded `browser.web_vital.lcp.load_time`
 *
 * Attribute Value Type: `number` {@link BROWSER_WEB_VITAL_LCP_LOAD_TIME_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link LCP_LOADTIME} `lcp.loadTime`
 *
 * @example 1402
 */
export const BROWSER_WEB_VITAL_LCP_LOAD_TIME = 'browser.web_vital.lcp.load_time';

/**
 * Type for {@link BROWSER_WEB_VITAL_LCP_LOAD_TIME} browser.web_vital.lcp.load_time
 */
export type BROWSER_WEB_VITAL_LCP_LOAD_TIME_TYPE = number;

// Path: model/attributes/browser/browser__web_vital__lcp__render_time.json

/**
 * The time it took for the LCP element to be rendered `browser.web_vital.lcp.render_time`
 *
 * Attribute Value Type: `number` {@link BROWSER_WEB_VITAL_LCP_RENDER_TIME_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link LCP_RENDERTIME} `lcp.renderTime`
 *
 * @example 1685
 */
export const BROWSER_WEB_VITAL_LCP_RENDER_TIME = 'browser.web_vital.lcp.render_time';

/**
 * Type for {@link BROWSER_WEB_VITAL_LCP_RENDER_TIME} browser.web_vital.lcp.render_time
 */
export type BROWSER_WEB_VITAL_LCP_RENDER_TIME_TYPE = number;

// Path: model/attributes/browser/browser__web_vital__lcp__report_event.json

/**
 * The event that caused the SDK to report LCP (pagehide or navigation) `browser.web_vital.lcp.report_event`
 *
 * Attribute Value Type: `string` {@link BROWSER_WEB_VITAL_LCP_REPORT_EVENT_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "pagehide"
 */
export const BROWSER_WEB_VITAL_LCP_REPORT_EVENT = 'browser.web_vital.lcp.report_event';

/**
 * Type for {@link BROWSER_WEB_VITAL_LCP_REPORT_EVENT} browser.web_vital.lcp.report_event
 */
export type BROWSER_WEB_VITAL_LCP_REPORT_EVENT_TYPE = string;

// Path: model/attributes/browser/browser__web_vital__lcp__size.json

/**
 * The size of the largest contentful paint element `browser.web_vital.lcp.size`
 *
 * Attribute Value Type: `number` {@link BROWSER_WEB_VITAL_LCP_SIZE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link LCP_SIZE} `lcp.size`
 *
 * @example 1024
 */
export const BROWSER_WEB_VITAL_LCP_SIZE = 'browser.web_vital.lcp.size';

/**
 * Type for {@link BROWSER_WEB_VITAL_LCP_SIZE} browser.web_vital.lcp.size
 */
export type BROWSER_WEB_VITAL_LCP_SIZE_TYPE = number;

// Path: model/attributes/browser/browser__web_vital__lcp__url.json

/**
 * The url of the dom element responsible for the largest contentful paint `browser.web_vital.lcp.url`
 *
 * Attribute Value Type: `string` {@link BROWSER_WEB_VITAL_LCP_URL_TYPE}
 *
 * Apply Scrubbing: auto
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link LCP_URL} `lcp.url`
 *
 * @example "https://example.com/static/img.png"
 */
export const BROWSER_WEB_VITAL_LCP_URL = 'browser.web_vital.lcp.url';

/**
 * Type for {@link BROWSER_WEB_VITAL_LCP_URL} browser.web_vital.lcp.url
 */
export type BROWSER_WEB_VITAL_LCP_URL_TYPE = string;

// Path: model/attributes/browser/browser__web_vital__lcp__value.json

/**
 * The value of the recorded Largest Contentful Paint (LCP) web vital `browser.web_vital.lcp.value`
 *
 * Attribute Value Type: `number` {@link BROWSER_WEB_VITAL_LCP_VALUE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link LCP} `lcp`
 *
 * @example 2500
 */
export const BROWSER_WEB_VITAL_LCP_VALUE = 'browser.web_vital.lcp.value';

/**
 * Type for {@link BROWSER_WEB_VITAL_LCP_VALUE} browser.web_vital.lcp.value
 */
export type BROWSER_WEB_VITAL_LCP_VALUE_TYPE = number;

// Path: model/attributes/browser/browser__web_vital__ttfb__request_time.json

/**
 * The time it takes for the server to process the initial request and send the first byte of a response to the user's browser `browser.web_vital.ttfb.request_time`
 *
 * Attribute Value Type: `number` {@link BROWSER_WEB_VITAL_TTFB_REQUEST_TIME_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link TTFB_REQUESTTIME} `ttfb.requestTime`
 *
 * @example 1554.5814
 */
export const BROWSER_WEB_VITAL_TTFB_REQUEST_TIME = 'browser.web_vital.ttfb.request_time';

/**
 * Type for {@link BROWSER_WEB_VITAL_TTFB_REQUEST_TIME} browser.web_vital.ttfb.request_time
 */
export type BROWSER_WEB_VITAL_TTFB_REQUEST_TIME_TYPE = number;

// Path: model/attributes/browser/browser__web_vital__ttfb__value.json

/**
 * The value of the recorded Time To First Byte (TTFB) web vital in Milliseconds `browser.web_vital.ttfb.value`
 *
 * Attribute Value Type: `number` {@link BROWSER_WEB_VITAL_TTFB_VALUE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link TTFB} `ttfb`
 *
 * @example 194.3322
 */
export const BROWSER_WEB_VITAL_TTFB_VALUE = 'browser.web_vital.ttfb.value';

/**
 * Type for {@link BROWSER_WEB_VITAL_TTFB_VALUE} browser.web_vital.ttfb.value
 */
export type BROWSER_WEB_VITAL_TTFB_VALUE_TYPE = number;

// Path: model/attributes/cache/cache__hit.json

/**
 * If the cache was hit during this span. `cache.hit`
 *
 * Attribute Value Type: `boolean` {@link CACHE_HIT_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example 120
 */
export const CACHE_TTL = 'cache.ttl';

/**
 * Type for {@link CACHE_TTL} cache.ttl
 */
export type CACHE_TTL_TYPE = number;

// Path: model/attributes/cache/cache__write.json

/**
 * If the cache operation resulted in a write to the cache. `cache.write`
 *
 * Attribute Value Type: `boolean` {@link CACHE_WRITE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example true
 */
export const CACHE_WRITE = 'cache.write';

/**
 * Type for {@link CACHE_WRITE} cache.write
 */
export type CACHE_WRITE_TYPE = boolean;

// Path: model/attributes/channel.json

/**
 * The channel name that is being used. `channel`
 *
 * Attribute Value Type: `string` {@link CHANNEL_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * Apply Scrubbing: auto
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example 543
 */
export const CLOUDFLARE_D1_DURATION = 'cloudflare.d1.duration';

/**
 * Type for {@link CLOUDFLARE_D1_DURATION} cloudflare.d1.duration
 */
export type CLOUDFLARE_D1_DURATION_TYPE = number;

// Path: model/attributes/cloudflare/cloudflare__d1__query_type.json

/**
 * The type of query executed in a Cloudflare D1 operation `cloudflare.d1.query_type`
 *
 * Attribute Value Type: `string` {@link CLOUDFLARE_D1_QUERY_TYPE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link DB_OPERATION_NAME} `db.operation.name`, {@link DB_OPERATION} `db.operation`
 *
 * @deprecated Use {@link DB_OPERATION_NAME} (db.operation.name) instead
 * @example "run"
 */
export const CLOUDFLARE_D1_QUERY_TYPE = 'cloudflare.d1.query_type';

/**
 * Type for {@link CLOUDFLARE_D1_QUERY_TYPE} cloudflare.d1.query_type
 */
export type CLOUDFLARE_D1_QUERY_TYPE_TYPE = string;

// Path: model/attributes/cloudflare/cloudflare__d1__rows_read.json

/**
 * The number of rows read in a Cloudflare D1 operation. `cloudflare.d1.rows_read`
 *
 * Attribute Value Type: `number` {@link CLOUDFLARE_D1_ROWS_READ_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example 12
 */
export const CLOUDFLARE_D1_ROWS_WRITTEN = 'cloudflare.d1.rows_written';

/**
 * Type for {@link CLOUDFLARE_D1_ROWS_WRITTEN} cloudflare.d1.rows_written
 */
export type CLOUDFLARE_D1_ROWS_WRITTEN_TYPE = number;

// Path: model/attributes/cloudflare/cloudflare__durable_object__query__bindings.json

/**
 * The number of bound parameters passed to the SQL exec call. `cloudflare.durable_object.query.bindings`
 *
 * Attribute Value Type: `number` {@link CLOUDFLARE_DURABLE_OBJECT_QUERY_BINDINGS_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example 2
 */
export const CLOUDFLARE_DURABLE_OBJECT_QUERY_BINDINGS = 'cloudflare.durable_object.query.bindings';

/**
 * Type for {@link CLOUDFLARE_DURABLE_OBJECT_QUERY_BINDINGS} cloudflare.durable_object.query.bindings
 */
export type CLOUDFLARE_DURABLE_OBJECT_QUERY_BINDINGS_TYPE = number;

// Path: model/attributes/cloudflare/cloudflare__durable_object__response__rows_read.json

/**
 * The number of rows read by a Cloudflare Durable Object SQL operation. `cloudflare.durable_object.response.rows_read`
 *
 * Attribute Value Type: `number` {@link CLOUDFLARE_DURABLE_OBJECT_RESPONSE_ROWS_READ_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example 12
 */
export const CLOUDFLARE_DURABLE_OBJECT_RESPONSE_ROWS_READ = 'cloudflare.durable_object.response.rows_read';

/**
 * Type for {@link CLOUDFLARE_DURABLE_OBJECT_RESPONSE_ROWS_READ} cloudflare.durable_object.response.rows_read
 */
export type CLOUDFLARE_DURABLE_OBJECT_RESPONSE_ROWS_READ_TYPE = number;

// Path: model/attributes/cloudflare/cloudflare__durable_object__response__rows_written.json

/**
 * The number of rows written by a Cloudflare Durable Object SQL operation. `cloudflare.durable_object.response.rows_written`
 *
 * Attribute Value Type: `number` {@link CLOUDFLARE_DURABLE_OBJECT_RESPONSE_ROWS_WRITTEN_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example 1
 */
export const CLOUDFLARE_DURABLE_OBJECT_RESPONSE_ROWS_WRITTEN = 'cloudflare.durable_object.response.rows_written';

/**
 * Type for {@link CLOUDFLARE_DURABLE_OBJECT_RESPONSE_ROWS_WRITTEN} cloudflare.durable_object.response.rows_written
 */
export type CLOUDFLARE_DURABLE_OBJECT_RESPONSE_ROWS_WRITTEN_TYPE = number;

// Path: model/attributes/cloudflare/cloudflare__r2__bucket.json

/**
 * The name of the Cloudflare R2 bucket binding `cloudflare.r2.bucket`
 *
 * Attribute Value Type: `string` {@link CLOUDFLARE_R2_BUCKET_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "MY_BUCKET"
 */
export const CLOUDFLARE_R2_BUCKET = 'cloudflare.r2.bucket';

/**
 * Type for {@link CLOUDFLARE_R2_BUCKET} cloudflare.r2.bucket
 */
export type CLOUDFLARE_R2_BUCKET_TYPE = string;

// Path: model/attributes/cloudflare/cloudflare__r2__operation.json

/**
 * The R2 API operation being performed `cloudflare.r2.operation`
 *
 * Attribute Value Type: `string` {@link CLOUDFLARE_R2_OPERATION_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "GetObject"
 */
export const CLOUDFLARE_R2_OPERATION = 'cloudflare.r2.operation';

/**
 * Type for {@link CLOUDFLARE_R2_OPERATION} cloudflare.r2.operation
 */
export type CLOUDFLARE_R2_OPERATION_TYPE = string;

// Path: model/attributes/cloudflare/cloudflare__r2__request__delimiter.json

/**
 * The delimiter used to group objects in an R2 list operation `cloudflare.r2.request.delimiter`
 *
 * Attribute Value Type: `string` {@link CLOUDFLARE_R2_REQUEST_DELIMITER_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "/"
 */
export const CLOUDFLARE_R2_REQUEST_DELIMITER = 'cloudflare.r2.request.delimiter';

/**
 * Type for {@link CLOUDFLARE_R2_REQUEST_DELIMITER} cloudflare.r2.request.delimiter
 */
export type CLOUDFLARE_R2_REQUEST_DELIMITER_TYPE = string;

// Path: model/attributes/cloudflare/cloudflare__r2__request__key.json

/**
 * The object key used in the R2 operation `cloudflare.r2.request.key`
 *
 * Attribute Value Type: `string` {@link CLOUDFLARE_R2_REQUEST_KEY_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "my-file.txt"
 */
export const CLOUDFLARE_R2_REQUEST_KEY = 'cloudflare.r2.request.key';

/**
 * Type for {@link CLOUDFLARE_R2_REQUEST_KEY} cloudflare.r2.request.key
 */
export type CLOUDFLARE_R2_REQUEST_KEY_TYPE = string;

// Path: model/attributes/cloudflare/cloudflare__r2__request__part_number.json

/**
 * The part number in a multipart upload operation `cloudflare.r2.request.part_number`
 *
 * Attribute Value Type: `number` {@link CLOUDFLARE_R2_REQUEST_PART_NUMBER_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example 1
 */
export const CLOUDFLARE_R2_REQUEST_PART_NUMBER = 'cloudflare.r2.request.part_number';

/**
 * Type for {@link CLOUDFLARE_R2_REQUEST_PART_NUMBER} cloudflare.r2.request.part_number
 */
export type CLOUDFLARE_R2_REQUEST_PART_NUMBER_TYPE = number;

// Path: model/attributes/cloudflare/cloudflare__r2__request__prefix.json

/**
 * The prefix used to filter objects in an R2 list operation `cloudflare.r2.request.prefix`
 *
 * Attribute Value Type: `string` {@link CLOUDFLARE_R2_REQUEST_PREFIX_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "images/"
 */
export const CLOUDFLARE_R2_REQUEST_PREFIX = 'cloudflare.r2.request.prefix';

/**
 * Type for {@link CLOUDFLARE_R2_REQUEST_PREFIX} cloudflare.r2.request.prefix
 */
export type CLOUDFLARE_R2_REQUEST_PREFIX_TYPE = string;

// Path: model/attributes/cloudflare/cloudflare__workflow__attempt.json

/**
 * The current attempt number for a Cloudflare Workflow step `cloudflare.workflow.attempt`
 *
 * Attribute Value Type: `number` {@link CLOUDFLARE_WORKFLOW_ATTEMPT_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example 1
 */
export const CLOUDFLARE_WORKFLOW_ATTEMPT = 'cloudflare.workflow.attempt';

/**
 * Type for {@link CLOUDFLARE_WORKFLOW_ATTEMPT} cloudflare.workflow.attempt
 */
export type CLOUDFLARE_WORKFLOW_ATTEMPT_TYPE = number;

// Path: model/attributes/cloudflare/cloudflare__workflow__retries__backoff.json

/**
 * The backoff strategy for Cloudflare Workflow step retries `cloudflare.workflow.retries.backoff`
 *
 * Attribute Value Type: `string` {@link CLOUDFLARE_WORKFLOW_RETRIES_BACKOFF_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "exponential"
 */
export const CLOUDFLARE_WORKFLOW_RETRIES_BACKOFF = 'cloudflare.workflow.retries.backoff';

/**
 * Type for {@link CLOUDFLARE_WORKFLOW_RETRIES_BACKOFF} cloudflare.workflow.retries.backoff
 */
export type CLOUDFLARE_WORKFLOW_RETRIES_BACKOFF_TYPE = string;

// Path: model/attributes/cloudflare/cloudflare__workflow__retries__delay.json

/**
 * The delay between Cloudflare Workflow step retries `cloudflare.workflow.retries.delay`
 *
 * Attribute Value Type: `string` {@link CLOUDFLARE_WORKFLOW_RETRIES_DELAY_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "5 seconds"
 */
export const CLOUDFLARE_WORKFLOW_RETRIES_DELAY = 'cloudflare.workflow.retries.delay';

/**
 * Type for {@link CLOUDFLARE_WORKFLOW_RETRIES_DELAY} cloudflare.workflow.retries.delay
 */
export type CLOUDFLARE_WORKFLOW_RETRIES_DELAY_TYPE = string;

// Path: model/attributes/cloudflare/cloudflare__workflow__retries__limit.json

/**
 * The maximum number of retries for a Cloudflare Workflow step `cloudflare.workflow.retries.limit`
 *
 * Attribute Value Type: `number` {@link CLOUDFLARE_WORKFLOW_RETRIES_LIMIT_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example 3
 */
export const CLOUDFLARE_WORKFLOW_RETRIES_LIMIT = 'cloudflare.workflow.retries.limit';

/**
 * Type for {@link CLOUDFLARE_WORKFLOW_RETRIES_LIMIT} cloudflare.workflow.retries.limit
 */
export type CLOUDFLARE_WORKFLOW_RETRIES_LIMIT_TYPE = number;

// Path: model/attributes/cloudflare/cloudflare__workflow__timeout.json

/**
 * The timeout duration for a Cloudflare Workflow step `cloudflare.workflow.timeout`
 *
 * Attribute Value Type: `string` {@link CLOUDFLARE_WORKFLOW_TIMEOUT_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "1 minute"
 */
export const CLOUDFLARE_WORKFLOW_TIMEOUT = 'cloudflare.workflow.timeout';

/**
 * Type for {@link CLOUDFLARE_WORKFLOW_TIMEOUT} cloudflare.workflow.timeout
 */
export type CLOUDFLARE_WORKFLOW_TIMEOUT_TYPE = string;

// Path: model/attributes/cloud/cloud__account__id.json

/**
 * The cloud account ID the resource is assigned to `cloud.account.id`
 *
 * Attribute Value Type: `string` {@link CLOUD_ACCOUNT_ID_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * @example "123456789012"
 */
export const CLOUD_ACCOUNT_ID = 'cloud.account.id';

/**
 * Type for {@link CLOUD_ACCOUNT_ID} cloud.account.id
 */
export type CLOUD_ACCOUNT_ID_TYPE = string;

// Path: model/attributes/cloud/cloud__availability_zone.json

/**
 * Cloud regions often have multiple, isolated locations known as zones to increase availability `cloud.availability_zone`
 *
 * Attribute Value Type: `string` {@link CLOUD_AVAILABILITY_ZONE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * @example "us-east-1c"
 */
export const CLOUD_AVAILABILITY_ZONE = 'cloud.availability_zone';

/**
 * Type for {@link CLOUD_AVAILABILITY_ZONE} cloud.availability_zone
 */
export type CLOUD_AVAILABILITY_ZONE_TYPE = string;

// Path: model/attributes/cloud/cloud__platform.json

/**
 * The cloud platform in use `cloud.platform`
 *
 * Attribute Value Type: `string` {@link CLOUD_PLATFORM_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * @example "aws_lambda"
 */
export const CLOUD_PLATFORM = 'cloud.platform';

/**
 * Type for {@link CLOUD_PLATFORM} cloud.platform
 */
export type CLOUD_PLATFORM_TYPE = string;

// Path: model/attributes/cloud/cloud__provider.json

/**
 * Name of the cloud provider `cloud.provider`
 *
 * Attribute Value Type: `string` {@link CLOUD_PROVIDER_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * @example "aws"
 */
export const CLOUD_PROVIDER = 'cloud.provider';

/**
 * Type for {@link CLOUD_PROVIDER} cloud.provider
 */
export type CLOUD_PROVIDER_TYPE = string;

// Path: model/attributes/cloud/cloud__region.json

/**
 * The geographical region the resource is running `cloud.region`
 *
 * Attribute Value Type: `string` {@link CLOUD_REGION_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * @example "us-east-1"
 */
export const CLOUD_REGION = 'cloud.region';

/**
 * Type for {@link CLOUD_REGION} cloud.region
 */
export type CLOUD_REGION_TYPE = string;

// Path: model/attributes/cloud/cloud__resource_id.json

/**
 * Cloud provider-specific native identifier of the monitored cloud resource `cloud.resource_id`
 *
 * Attribute Value Type: `string` {@link CLOUD_RESOURCE_ID_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * @example "arn:aws:lambda:REGION:ACCOUNT_ID:function:my-function"
 */
export const CLOUD_RESOURCE_ID = 'cloud.resource_id';

/**
 * Type for {@link CLOUD_RESOURCE_ID} cloud.resource_id
 */
export type CLOUD_RESOURCE_ID_TYPE = string;

// Path: model/attributes/cls.json

/**
 * The value of the recorded Cumulative Layout Shift (CLS) web vital `cls`
 *
 * Attribute Value Type: `number` {@link CLS_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link BROWSER_WEB_VITAL_CLS_VALUE} `browser.web_vital.cls.value`
 *
 * @deprecated Use {@link BROWSER_WEB_VITAL_CLS_VALUE} (browser.web_vital.cls.value) instead - The CLS web vital is now recorded as a browser.web_vital.cls.value attribute.
 * @example 0.2361
 */
export const CLS = 'cls';

/**
 * Type for {@link CLS} cls
 */
export type CLS_TYPE = number;

// Path: model/attributes/cls/cls__source__[key].json

/**
 * The HTML elements or components responsible for the layout shift. <key> is a numeric index from 1 to N `cls.source.<key>`
 *
 * Attribute Value Type: `string` {@link CLS_SOURCE_KEY_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Has Dynamic Suffix: true
 *
 * Aliases: {@link BROWSER_WEB_VITAL_CLS_SOURCE_KEY} `browser.web_vital.cls.source.<key>`
 *
 * @deprecated Use {@link BROWSER_WEB_VITAL_CLS_SOURCE_KEY} (browser.web_vital.cls.source.<key>) instead - The CLS source is now recorded as a browser.web_vital.cls.source.<key> attribute.
 * @example "body > div#app"
 */
export const CLS_SOURCE_KEY = 'cls.source.<key>';

/**
 * Base key for {@link CLS_SOURCE_KEY}. Use with a dynamic suffix, e.g. `${CLS_SOURCE_KEY_BASE}.${key}`.
 *
 * @deprecated Use {@link BROWSER_WEB_VITAL_CLS_SOURCE_KEY_BASE} (browser.web_vital.cls.source) instead - The CLS source is now recorded as a browser.web_vital.cls.source.<key> attribute.
 */
export const CLS_SOURCE_KEY_BASE = 'cls.source';

/**
 * Type for {@link CLS_SOURCE_KEY} cls.source.<key>
 */
export type CLS_SOURCE_KEY_TYPE = string;

// Path: model/attributes/code/code__filepath.json

/**
 * The source code file name that identifies the code unit as uniquely as possible (preferably an absolute file path). `code.filepath`
 *
 * Attribute Value Type: `string` {@link CODE_FILEPATH_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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

// Path: model/attributes/code/code__file__path.json

/**
 * The source code file name that identifies the code unit as uniquely as possible (preferably an absolute file path). `code.file.path`
 *
 * Attribute Value Type: `string` {@link CODE_FILE_PATH_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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

// Path: model/attributes/code/code__function.json

/**
 * The method or function name, or equivalent (usually rightmost part of the code unit's name). `code.function`
 *
 * Attribute Value Type: `string` {@link CODE_FUNCTION_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * Aliases: {@link CODE_FUNCTION_NAME} `code.function.name`
 *
 * @example "server_request"
 */
export const CODE_FUNCTION = 'code.function';

/**
 * Type for {@link CODE_FUNCTION} code.function
 */
export type CODE_FUNCTION_TYPE = string;

// Path: model/attributes/code/code__function__name.json

/**
 * The method or function fully-qualified name without arguments. `code.function.name`
 *
 * Attribute Value Type: `string` {@link CODE_FUNCTION_NAME_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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

// Path: model/attributes/code/code__lineno.json

/**
 * The line number in code.filepath best representing the operation. It SHOULD point within the code unit named in code.function `code.lineno`
 *
 * Attribute Value Type: `number` {@link CODE_LINENO_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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

// Path: model/attributes/code/code__line__number.json

/**
 * The line number in code.filepath best representing the operation. It SHOULD point within the code unit named in code.function `code.line.number`
 *
 * Attribute Value Type: `number` {@link CODE_LINE_NUMBER_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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

// Path: model/attributes/code/code__namespace.json

/**
 * The 'namespace' within which code.function is defined. Usually the qualified class or module name, such that code.namespace + some separator + code.function form a unique identifier for the code unit. `code.namespace`
 *
 * Attribute Value Type: `string` {@link CODE_NAMESPACE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * @example "http.handler"
 */
export const CODE_NAMESPACE = 'code.namespace';

/**
 * Type for {@link CODE_NAMESPACE} code.namespace
 */
export type CODE_NAMESPACE_TYPE = string;

// Path: model/attributes/connectionType.json

/**
 * Specifies the type of the current connection (e.g. wifi, ethernet, cellular , etc). `connectionType`
 *
 * Attribute Value Type: `string` {@link CONNECTIONTYPE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link NETWORK_CONNECTION_TYPE} `network.connection.type`, {@link DEVICE_CONNECTION_TYPE} `device.connection_type`
 *
 * @deprecated Use {@link NETWORK_CONNECTION_TYPE} (network.connection.type) instead - Old namespace-less attribute, to be replaced with network.connection.type for span-first future
 * @example "wifi"
 */
export const CONNECTIONTYPE = 'connectionType';

/**
 * Type for {@link CONNECTIONTYPE} connectionType
 */
export type CONNECTIONTYPE_TYPE = string;

// Path: model/attributes/connection/connection__rtt.json

/**
 * Specifies the estimated effective round-trip time of the current connection, in milliseconds. `connection.rtt`
 *
 * Attribute Value Type: `number` {@link CONNECTION_RTT_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link NETWORK_CONNECTION_RTT} `network.connection.rtt`
 *
 * @deprecated Use {@link NETWORK_CONNECTION_RTT} (network.connection.rtt) instead - Old attribute name (no official namespace), to be replaced with network.connection.rtt for span-first future
 * @example 100
 */
export const CONNECTION_RTT = 'connection.rtt';

/**
 * Type for {@link CONNECTION_RTT} connection.rtt
 */
export type CONNECTION_RTT_TYPE = number;

// Path: model/attributes/culture/culture__calendar.json

/**
 * The calendar system used by the culture. `culture.calendar`
 *
 * Attribute Value Type: `string` {@link CULTURE_CALENDAR_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "GregorianCalendar"
 */
export const CULTURE_CALENDAR = 'culture.calendar';

/**
 * Type for {@link CULTURE_CALENDAR} culture.calendar
 */
export type CULTURE_CALENDAR_TYPE = string;

// Path: model/attributes/culture/culture__display_name.json

/**
 * Human readable name of the culture. `culture.display_name`
 *
 * Attribute Value Type: `string` {@link CULTURE_DISPLAY_NAME_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "English (United States)"
 */
export const CULTURE_DISPLAY_NAME = 'culture.display_name';

/**
 * Type for {@link CULTURE_DISPLAY_NAME} culture.display_name
 */
export type CULTURE_DISPLAY_NAME_TYPE = string;

// Path: model/attributes/culture/culture__is_24_hour_format.json

/**
 * Whether the culture uses 24-hour time format. `culture.is_24_hour_format`
 *
 * Attribute Value Type: `boolean` {@link CULTURE_IS_24_HOUR_FORMAT_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example true
 */
export const CULTURE_IS_24_HOUR_FORMAT = 'culture.is_24_hour_format';

/**
 * Type for {@link CULTURE_IS_24_HOUR_FORMAT} culture.is_24_hour_format
 */
export type CULTURE_IS_24_HOUR_FORMAT_TYPE = boolean;

// Path: model/attributes/culture/culture__locale.json

/**
 * The locale identifier following RFC 4646. `culture.locale`
 *
 * Attribute Value Type: `string` {@link CULTURE_LOCALE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "en-US"
 */
export const CULTURE_LOCALE = 'culture.locale';

/**
 * Type for {@link CULTURE_LOCALE} culture.locale
 */
export type CULTURE_LOCALE_TYPE = string;

// Path: model/attributes/culture/culture__timezone.json

/**
 * The timezone of the culture, as a geographic timezone identifier. `culture.timezone`
 *
 * Attribute Value Type: `string` {@link CULTURE_TIMEZONE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "Europe/Vienna"
 */
export const CULTURE_TIMEZONE = 'culture.timezone';

/**
 * Type for {@link CULTURE_TIMEZONE} culture.timezone
 */
export type CULTURE_TIMEZONE_TYPE = string;

// Path: model/attributes/db/db__collection__name.json

/**
 * The name of a collection (table, container) within the database. `db.collection.name`
 *
 * Attribute Value Type: `string` {@link DB_COLLECTION_NAME_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * @example "users"
 */
export const DB_COLLECTION_NAME = 'db.collection.name';

/**
 * Type for {@link DB_COLLECTION_NAME} db.collection.name
 */
export type DB_COLLECTION_NAME_TYPE = string;

// Path: model/attributes/db/db__driver__name.json

/**
 * The name of the driver used for the database connection. `db.driver.name`
 *
 * Attribute Value Type: `string` {@link DB_DRIVER_NAME_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "psycopg2"
 */
export const DB_DRIVER_NAME = 'db.driver.name';

/**
 * Type for {@link DB_DRIVER_NAME} db.driver.name
 */
export type DB_DRIVER_NAME_TYPE = string;

// Path: model/attributes/db/db__name.json

/**
 * The name of the database being accessed. `db.name`
 *
 * Attribute Value Type: `string` {@link DB_NAME_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * Aliases: {@link DB_OPERATION_NAME} `db.operation.name`, {@link CLOUDFLARE_D1_QUERY_TYPE} `cloudflare.d1.query_type`
 *
 * @deprecated Use {@link DB_OPERATION_NAME} (db.operation.name) instead
 * @example "SELECT"
 */
export const DB_OPERATION = 'db.operation';

/**
 * Type for {@link DB_OPERATION} db.operation
 */
export type DB_OPERATION_TYPE = string;

// Path: model/attributes/db/db__operation__batch__size.json

/**
 * The number of queries included in a batch operation. Operations are only considered batches when they contain two or more operations, and so db.operation.batch.size SHOULD never be 1. `db.operation.batch.size`
 *
 * Attribute Value Type: `number` {@link DB_OPERATION_BATCH_SIZE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * @example 3
 */
export const DB_OPERATION_BATCH_SIZE = 'db.operation.batch.size';

/**
 * Type for {@link DB_OPERATION_BATCH_SIZE} db.operation.batch.size
 */
export type DB_OPERATION_BATCH_SIZE_TYPE = number;

// Path: model/attributes/db/db__operation__name.json

/**
 * The name of the operation being executed. `db.operation.name`
 *
 * Attribute Value Type: `string` {@link DB_OPERATION_NAME_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * Aliases: {@link DB_OPERATION} `db.operation`, {@link CLOUDFLARE_D1_QUERY_TYPE} `cloudflare.d1.query_type`
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
 * Apply Scrubbing: auto
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * Has Dynamic Suffix: true
 *
 * @example "db.query.parameter.foo='123'"
 */
export const DB_QUERY_PARAMETER_KEY = 'db.query.parameter.<key>';

/**
 * Base key for {@link DB_QUERY_PARAMETER_KEY}. Use with a dynamic suffix, e.g. `${DB_QUERY_PARAMETER_KEY_BASE}.${key}`.
 */
export const DB_QUERY_PARAMETER_KEY_BASE = 'db.query.parameter';

/**
 * Type for {@link DB_QUERY_PARAMETER_KEY} db.query.parameter.<key>
 */
export type DB_QUERY_PARAMETER_KEY_TYPE = string;

// Path: model/attributes/db/db__query__summary.json

/**
 * A shortened representation of operation(s) in the full query. This attribute must be low-cardinality and should only contain the operation table names. `db.query.summary`
 *
 * Attribute Value Type: `string` {@link DB_QUERY_SUMMARY_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * @example "SELECT users"
 */
export const DB_QUERY_SUMMARY = 'db.query.summary';

/**
 * Type for {@link DB_QUERY_SUMMARY} db.query.summary
 */
export type DB_QUERY_SUMMARY_TYPE = string;

// Path: model/attributes/db/db__query__text.json

/**
 * The database parameterized query being executed. Any parameter values (filters, insertion values, etc) should be replaced with parameter placeholders. If applicable, use `db.query.parameter.<key>` to add the parameter value. `db.query.text`
 *
 * Attribute Value Type: `string` {@link DB_QUERY_TEXT_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * Aliases: {@link DB_STATEMENT} `db.statement`
 *
 * @example "SELECT * FROM users WHERE id = $1"
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "my-redis-instance"
 */
export const DB_REDIS_CONNECTION = 'db.redis.connection';

/**
 * Type for {@link DB_REDIS_CONNECTION} db.redis.connection
 */
export type DB_REDIS_CONNECTION_TYPE = string;

// Path: model/attributes/db/db__redis__key.json

/**
 * The key the Redis command is operating on. `db.redis.key`
 *
 * Attribute Value Type: `string` {@link DB_REDIS_KEY_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "user:2047:city"
 */
export const DB_REDIS_KEY = 'db.redis.key';

/**
 * Type for {@link DB_REDIS_KEY} db.redis.key
 */
export type DB_REDIS_KEY_TYPE = string;

// Path: model/attributes/db/db__redis__parameters.json

/**
 * The array of command parameters given to a redis command. `db.redis.parameters`
 *
 * Attribute Value Type: `Array<string>` {@link DB_REDIS_PARAMETERS_TYPE}
 *
 * Apply Scrubbing: auto
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example ["test","*"]
 */
export const DB_REDIS_PARAMETERS = 'db.redis.parameters';

/**
 * Type for {@link DB_REDIS_PARAMETERS} db.redis.parameters
 */
export type DB_REDIS_PARAMETERS_TYPE = Array<string>;

// Path: model/attributes/db/db__response__status_code.json

/**
 * Database response status code. The status code returned by the database. Usually it represents an error code, but may also represent partial success, warning, or differentiate between various types of successful outcomes. `db.response.status_code`
 *
 * Attribute Value Type: `string` {@link DB_RESPONSE_STATUS_CODE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * @example "ORA-17002"
 */
export const DB_RESPONSE_STATUS_CODE = 'db.response.status_code';

/**
 * Type for {@link DB_RESPONSE_STATUS_CODE} db.response.status_code
 */
export type DB_RESPONSE_STATUS_CODE_TYPE = string;

// Path: model/attributes/db/db__sql__bindings.json

/**
 * The array of query bindings. `db.sql.bindings`
 *
 * Attribute Value Type: `Array<string>` {@link DB_SQL_BINDINGS_TYPE}
 *
 * Apply Scrubbing: auto
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * Apply Scrubbing: auto
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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

// Path: model/attributes/db/db__stored_procedure__name.json

/**
 * The name of a stored procedure being called. `db.stored_procedure.name`
 *
 * Attribute Value Type: `string` {@link DB_STORED_PROCEDURE_NAME_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * @example "GetUserById"
 */
export const DB_STORED_PROCEDURE_NAME = 'db.stored_procedure.name';

/**
 * Type for {@link DB_STORED_PROCEDURE_NAME} db.stored_procedure.name
 */
export type DB_STORED_PROCEDURE_NAME_TYPE = string;

// Path: model/attributes/db/db__system.json

/**
 * An identifier for the database management system (DBMS) product being used. See [OpenTelemetry docs](https://github.com/open-telemetry/semantic-conventions/blob/main/docs/database/database-spans.md#notes-and-well-known-identifiers-for-dbsystem) for a list of well-known identifiers. `db.system`
 *
 * Attribute Value Type: `string` {@link DB_SYSTEM_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * @example "fancy_user"
 */
export const DB_USER = 'db.user';

/**
 * Type for {@link DB_USER} db.user
 */
export type DB_USER_TYPE = string;

// Path: model/attributes/deviceMemory.json

/**
 * The estimated total memory capacity of the device, only a rough estimation in gigabytes. `deviceMemory`
 *
 * Attribute Value Type: `string` {@link DEVICEMEMORY_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link DEVICE_MEMORY_ESTIMATED_CAPACITY} `device.memory.estimated_capacity`
 *
 * @deprecated Use {@link DEVICE_MEMORY_ESTIMATED_CAPACITY} (device.memory.estimated_capacity) instead - Old namespace-less attribute, to be replaced with device.memory.estimated_capacity for span-first future
 * @example "8 GB"
 */
export const DEVICEMEMORY = 'deviceMemory';

/**
 * Type for {@link DEVICEMEMORY} deviceMemory
 */
export type DEVICEMEMORY_TYPE = string;

// Path: model/attributes/device/device__archs.json

/**
 * The CPU architectures of the device. `device.archs`
 *
 * Attribute Value Type: `Array<string>` {@link DEVICE_ARCHS_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example ["arm64-v8a","armeabi-v7a","armeabi"]
 */
export const DEVICE_ARCHS = 'device.archs';

/**
 * Type for {@link DEVICE_ARCHS} device.archs
 */
export type DEVICE_ARCHS_TYPE = Array<string>;

// Path: model/attributes/device/device__battery_level.json

/**
 * The battery level of the device as a percentage (0-100). `device.battery_level`
 *
 * Attribute Value Type: `number` {@link DEVICE_BATTERY_LEVEL_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example 100
 */
export const DEVICE_BATTERY_LEVEL = 'device.battery_level';

/**
 * Type for {@link DEVICE_BATTERY_LEVEL} device.battery_level
 */
export type DEVICE_BATTERY_LEVEL_TYPE = number;

// Path: model/attributes/device/device__battery_temperature.json

/**
 * The battery temperature of the device in Celsius. `device.battery_temperature`
 *
 * Attribute Value Type: `number` {@link DEVICE_BATTERY_TEMPERATURE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example 25
 */
export const DEVICE_BATTERY_TEMPERATURE = 'device.battery_temperature';

/**
 * Type for {@link DEVICE_BATTERY_TEMPERATURE} device.battery_temperature
 */
export type DEVICE_BATTERY_TEMPERATURE_TYPE = number;

// Path: model/attributes/device/device__boot_time.json

/**
 * A formatted UTC timestamp when the system was booted. `device.boot_time`
 *
 * Attribute Value Type: `string` {@link DEVICE_BOOT_TIME_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "2018-02-08T12:52:12Z"
 */
export const DEVICE_BOOT_TIME = 'device.boot_time';

/**
 * Type for {@link DEVICE_BOOT_TIME} device.boot_time
 */
export type DEVICE_BOOT_TIME_TYPE = string;

// Path: model/attributes/device/device__brand.json

/**
 * The brand of the device. `device.brand`
 *
 * Attribute Value Type: `string` {@link DEVICE_BRAND_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "Apple"
 */
export const DEVICE_BRAND = 'device.brand';

/**
 * Type for {@link DEVICE_BRAND} device.brand
 */
export type DEVICE_BRAND_TYPE = string;

// Path: model/attributes/device/device__charging.json

/**
 * Whether the device was charging or not. `device.charging`
 *
 * Attribute Value Type: `boolean` {@link DEVICE_CHARGING_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example false
 */
export const DEVICE_CHARGING = 'device.charging';

/**
 * Type for {@link DEVICE_CHARGING} device.charging
 */
export type DEVICE_CHARGING_TYPE = boolean;

// Path: model/attributes/device/device__chipset.json

/**
 * The chipset of the device. `device.chipset`
 *
 * Attribute Value Type: `string` {@link DEVICE_CHIPSET_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "Qualcomm SM8550"
 */
export const DEVICE_CHIPSET = 'device.chipset';

/**
 * Type for {@link DEVICE_CHIPSET} device.chipset
 */
export type DEVICE_CHIPSET_TYPE = string;

// Path: model/attributes/device/device__class.json

/**
 * The classification of the device. For example, `low`, `medium`, or `high`. Typically inferred by Relay - SDKs generally do not need to set this directly. `device.class`
 *
 * Attribute Value Type: `string` {@link DEVICE_CLASS_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "medium"
 */
export const DEVICE_CLASS = 'device.class';

/**
 * Type for {@link DEVICE_CLASS} device.class
 */
export type DEVICE_CLASS_TYPE = string;

// Path: model/attributes/device/device__connection_type.json

/**
 * The internet connection type currently being used by the device. `device.connection_type`
 *
 * Attribute Value Type: `string` {@link DEVICE_CONNECTION_TYPE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link NETWORK_CONNECTION_TYPE} `network.connection.type`, {@link CONNECTIONTYPE} `connectionType`
 *
 * @deprecated Use {@link NETWORK_CONNECTION_TYPE} (network.connection.type) instead - This attribute is being deprecated in favor of network.connection.type
 * @example "wifi"
 */
export const DEVICE_CONNECTION_TYPE = 'device.connection_type';

/**
 * Type for {@link DEVICE_CONNECTION_TYPE} device.connection_type
 */
export type DEVICE_CONNECTION_TYPE_TYPE = string;

// Path: model/attributes/device/device__cpu_description.json

/**
 * A description of the CPU of the device. `device.cpu_description`
 *
 * Attribute Value Type: `string` {@link DEVICE_CPU_DESCRIPTION_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "Intel(R) Core(TM)2 Quad CPU Q6600 @ 2.40GHz"
 */
export const DEVICE_CPU_DESCRIPTION = 'device.cpu_description';

/**
 * Type for {@link DEVICE_CPU_DESCRIPTION} device.cpu_description
 */
export type DEVICE_CPU_DESCRIPTION_TYPE = string;

// Path: model/attributes/device/device__external_free_storage.json

/**
 * External storage free size in bytes. `device.external_free_storage`
 *
 * Attribute Value Type: `number` {@link DEVICE_EXTERNAL_FREE_STORAGE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example 67108864000
 */
export const DEVICE_EXTERNAL_FREE_STORAGE = 'device.external_free_storage';

/**
 * Type for {@link DEVICE_EXTERNAL_FREE_STORAGE} device.external_free_storage
 */
export type DEVICE_EXTERNAL_FREE_STORAGE_TYPE = number;

// Path: model/attributes/device/device__external_storage_size.json

/**
 * External storage total size in bytes. `device.external_storage_size`
 *
 * Attribute Value Type: `number` {@link DEVICE_EXTERNAL_STORAGE_SIZE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example 134217728000
 */
export const DEVICE_EXTERNAL_STORAGE_SIZE = 'device.external_storage_size';

/**
 * Type for {@link DEVICE_EXTERNAL_STORAGE_SIZE} device.external_storage_size
 */
export type DEVICE_EXTERNAL_STORAGE_SIZE_TYPE = number;

// Path: model/attributes/device/device__family.json

/**
 * The family of the device. `device.family`
 *
 * Attribute Value Type: `string` {@link DEVICE_FAMILY_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "iPhone"
 */
export const DEVICE_FAMILY = 'device.family';

/**
 * Type for {@link DEVICE_FAMILY} device.family
 */
export type DEVICE_FAMILY_TYPE = string;

// Path: model/attributes/device/device__free_memory.json

/**
 * Free system memory in bytes. `device.free_memory`
 *
 * Attribute Value Type: `number` {@link DEVICE_FREE_MEMORY_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example 2147483648
 */
export const DEVICE_FREE_MEMORY = 'device.free_memory';

/**
 * Type for {@link DEVICE_FREE_MEMORY} device.free_memory
 */
export type DEVICE_FREE_MEMORY_TYPE = number;

// Path: model/attributes/device/device__free_storage.json

/**
 * Free device storage in bytes. `device.free_storage`
 *
 * Attribute Value Type: `number` {@link DEVICE_FREE_STORAGE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example 107374182400
 */
export const DEVICE_FREE_STORAGE = 'device.free_storage';

/**
 * Type for {@link DEVICE_FREE_STORAGE} device.free_storage
 */
export type DEVICE_FREE_STORAGE_TYPE = number;

// Path: model/attributes/device/device__id.json

/**
 * Unique device identifier. `device.id`
 *
 * Attribute Value Type: `string` {@link DEVICE_ID_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * @example "a1b2c3d4-e5f6-7890-abcd-ef1234567890"
 */
export const DEVICE_ID = 'device.id';

/**
 * Type for {@link DEVICE_ID} device.id
 */
export type DEVICE_ID_TYPE = string;

// Path: model/attributes/device/device__locale.json

/**
 * The locale of the device. `device.locale`
 *
 * Attribute Value Type: `string` {@link DEVICE_LOCALE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "en-US"
 */
export const DEVICE_LOCALE = 'device.locale';

/**
 * Type for {@link DEVICE_LOCALE} device.locale
 */
export type DEVICE_LOCALE_TYPE = string;

// Path: model/attributes/device/device__low_memory.json

/**
 * Whether the device was low on memory. `device.low_memory`
 *
 * Attribute Value Type: `boolean` {@link DEVICE_LOW_MEMORY_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example false
 */
export const DEVICE_LOW_MEMORY = 'device.low_memory';

/**
 * Type for {@link DEVICE_LOW_MEMORY} device.low_memory
 */
export type DEVICE_LOW_MEMORY_TYPE = boolean;

// Path: model/attributes/device/device__low_power_mode.json

/**
 * Whether the device is in Low Power Mode. `device.low_power_mode`
 *
 * Attribute Value Type: `boolean` {@link DEVICE_LOW_POWER_MODE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example true
 */
export const DEVICE_LOW_POWER_MODE = 'device.low_power_mode';

/**
 * Type for {@link DEVICE_LOW_POWER_MODE} device.low_power_mode
 */
export type DEVICE_LOW_POWER_MODE_TYPE = boolean;

// Path: model/attributes/device/device__manufacturer.json

/**
 * The manufacturer of the device. `device.manufacturer`
 *
 * Attribute Value Type: `string` {@link DEVICE_MANUFACTURER_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * @example "Google"
 */
export const DEVICE_MANUFACTURER = 'device.manufacturer';

/**
 * Type for {@link DEVICE_MANUFACTURER} device.manufacturer
 */
export type DEVICE_MANUFACTURER_TYPE = string;

// Path: model/attributes/device/device__memory__estimated_capacity.json

/**
 * The estimated total memory capacity of the device, only a rough estimation in gigabytes. Browsers report estimations in buckets of powers of 2, mostly capped at 8 GB `device.memory.estimated_capacity`
 *
 * Attribute Value Type: `number` {@link DEVICE_MEMORY_ESTIMATED_CAPACITY_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link DEVICEMEMORY} `deviceMemory`
 *
 * @example 8
 */
export const DEVICE_MEMORY_ESTIMATED_CAPACITY = 'device.memory.estimated_capacity';

/**
 * Type for {@link DEVICE_MEMORY_ESTIMATED_CAPACITY} device.memory.estimated_capacity
 */
export type DEVICE_MEMORY_ESTIMATED_CAPACITY_TYPE = number;

// Path: model/attributes/device/device__memory_size.json

/**
 * Total system memory available in bytes. `device.memory_size`
 *
 * Attribute Value Type: `number` {@link DEVICE_MEMORY_SIZE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example 17179869184
 */
export const DEVICE_MEMORY_SIZE = 'device.memory_size';

/**
 * Type for {@link DEVICE_MEMORY_SIZE} device.memory_size
 */
export type DEVICE_MEMORY_SIZE_TYPE = number;

// Path: model/attributes/device/device__model.json

/**
 * The model of the device. `device.model`
 *
 * Attribute Value Type: `string` {@link DEVICE_MODEL_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "iPhone 15 Pro Max"
 */
export const DEVICE_MODEL = 'device.model';

/**
 * Type for {@link DEVICE_MODEL} device.model
 */
export type DEVICE_MODEL_TYPE = string;

// Path: model/attributes/device/device__model_id.json

/**
 * An internal hardware revision to identify the device exactly. `device.model_id`
 *
 * Attribute Value Type: `string` {@link DEVICE_MODEL_ID_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "N861AP"
 */
export const DEVICE_MODEL_ID = 'device.model_id';

/**
 * Type for {@link DEVICE_MODEL_ID} device.model_id
 */
export type DEVICE_MODEL_ID_TYPE = string;

// Path: model/attributes/device/device__name.json

/**
 * The name of the device. On mobile, this is the user-assigned device name. On servers and desktops, this is typically the hostname. `device.name`
 *
 * Attribute Value Type: `string` {@link DEVICE_NAME_TYPE}
 *
 * Apply Scrubbing: auto
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "localhost"
 */
export const DEVICE_NAME = 'device.name';

/**
 * Type for {@link DEVICE_NAME} device.name
 */
export type DEVICE_NAME_TYPE = string;

// Path: model/attributes/device/device__online.json

/**
 * Whether the device was online or not. `device.online`
 *
 * Attribute Value Type: `boolean` {@link DEVICE_ONLINE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example true
 */
export const DEVICE_ONLINE = 'device.online';

/**
 * Type for {@link DEVICE_ONLINE} device.online
 */
export type DEVICE_ONLINE_TYPE = boolean;

// Path: model/attributes/device/device__orientation.json

/**
 * The orientation of the device, either "portrait" or "landscape". `device.orientation`
 *
 * Attribute Value Type: `string` {@link DEVICE_ORIENTATION_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "portrait"
 */
export const DEVICE_ORIENTATION = 'device.orientation';

/**
 * Type for {@link DEVICE_ORIENTATION} device.orientation
 */
export type DEVICE_ORIENTATION_TYPE = string;

// Path: model/attributes/device/device__processor_count.json

/**
 * Number of "logical processors". `device.processor_count`
 *
 * Attribute Value Type: `number` {@link DEVICE_PROCESSOR_COUNT_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link HARDWARECONCURRENCY} `hardwareConcurrency`
 *
 * @example 8
 */
export const DEVICE_PROCESSOR_COUNT = 'device.processor_count';

/**
 * Type for {@link DEVICE_PROCESSOR_COUNT} device.processor_count
 */
export type DEVICE_PROCESSOR_COUNT_TYPE = number;

// Path: model/attributes/device/device__processor_frequency.json

/**
 * Processor frequency in MHz. `device.processor_frequency`
 *
 * Attribute Value Type: `number` {@link DEVICE_PROCESSOR_FREQUENCY_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example 2400
 */
export const DEVICE_PROCESSOR_FREQUENCY = 'device.processor_frequency';

/**
 * Type for {@link DEVICE_PROCESSOR_FREQUENCY} device.processor_frequency
 */
export type DEVICE_PROCESSOR_FREQUENCY_TYPE = number;

// Path: model/attributes/device/device__screen_density.json

/**
 * The screen density of the device. `device.screen_density`
 *
 * Attribute Value Type: `number` {@link DEVICE_SCREEN_DENSITY_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example 2.625
 */
export const DEVICE_SCREEN_DENSITY = 'device.screen_density';

/**
 * Type for {@link DEVICE_SCREEN_DENSITY} device.screen_density
 */
export type DEVICE_SCREEN_DENSITY_TYPE = number;

// Path: model/attributes/device/device__screen_dpi.json

/**
 * The screen density in dots-per-inch (DPI) of the device. `device.screen_dpi`
 *
 * Attribute Value Type: `number` {@link DEVICE_SCREEN_DPI_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example 420
 */
export const DEVICE_SCREEN_DPI = 'device.screen_dpi';

/**
 * Type for {@link DEVICE_SCREEN_DPI} device.screen_dpi
 */
export type DEVICE_SCREEN_DPI_TYPE = number;

// Path: model/attributes/device/device__screen_height_pixels.json

/**
 * The height of the device screen in pixels. `device.screen_height_pixels`
 *
 * Attribute Value Type: `number` {@link DEVICE_SCREEN_HEIGHT_PIXELS_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example 2400
 */
export const DEVICE_SCREEN_HEIGHT_PIXELS = 'device.screen_height_pixels';

/**
 * Type for {@link DEVICE_SCREEN_HEIGHT_PIXELS} device.screen_height_pixels
 */
export type DEVICE_SCREEN_HEIGHT_PIXELS_TYPE = number;

// Path: model/attributes/device/device__screen_width_pixels.json

/**
 * The width of the device screen in pixels. `device.screen_width_pixels`
 *
 * Attribute Value Type: `number` {@link DEVICE_SCREEN_WIDTH_PIXELS_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example 1080
 */
export const DEVICE_SCREEN_WIDTH_PIXELS = 'device.screen_width_pixels';

/**
 * Type for {@link DEVICE_SCREEN_WIDTH_PIXELS} device.screen_width_pixels
 */
export type DEVICE_SCREEN_WIDTH_PIXELS_TYPE = number;

// Path: model/attributes/device/device__simulator.json

/**
 * Whether the device is a simulator or an actual device. `device.simulator`
 *
 * Attribute Value Type: `boolean` {@link DEVICE_SIMULATOR_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example false
 */
export const DEVICE_SIMULATOR = 'device.simulator';

/**
 * Type for {@link DEVICE_SIMULATOR} device.simulator
 */
export type DEVICE_SIMULATOR_TYPE = boolean;

// Path: model/attributes/device/device__storage_size.json

/**
 * Total device storage in bytes. `device.storage_size`
 *
 * Attribute Value Type: `number` {@link DEVICE_STORAGE_SIZE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example 274877906944
 */
export const DEVICE_STORAGE_SIZE = 'device.storage_size';

/**
 * Type for {@link DEVICE_STORAGE_SIZE} device.storage_size
 */
export type DEVICE_STORAGE_SIZE_TYPE = number;

// Path: model/attributes/device/device__thermal_state.json

/**
 * The thermal state of the device. Based on Apple's `ProcessInfo.ThermalState` enum: `nominal`, `fair`, `serious`, or `critical`. `device.thermal_state`
 *
 * Attribute Value Type: `string` {@link DEVICE_THERMAL_STATE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "nominal"
 */
export const DEVICE_THERMAL_STATE = 'device.thermal_state';

/**
 * Type for {@link DEVICE_THERMAL_STATE} device.thermal_state
 */
export type DEVICE_THERMAL_STATE_TYPE = string;

// Path: model/attributes/device/device__timezone.json

/**
 * The timezone of the device. `device.timezone`
 *
 * Attribute Value Type: `string` {@link DEVICE_TIMEZONE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "Europe/Vienna"
 */
export const DEVICE_TIMEZONE = 'device.timezone';

/**
 * Type for {@link DEVICE_TIMEZONE} device.timezone
 */
export type DEVICE_TIMEZONE_TYPE = string;

// Path: model/attributes/device/device__usable_memory.json

/**
 * Memory usable for the app in bytes. `device.usable_memory`
 *
 * Attribute Value Type: `number` {@link DEVICE_USABLE_MEMORY_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example 2147483648
 */
export const DEVICE_USABLE_MEMORY = 'device.usable_memory';

/**
 * Type for {@link DEVICE_USABLE_MEMORY} device.usable_memory
 */
export type DEVICE_USABLE_MEMORY_TYPE = number;

// Path: model/attributes/effectiveConnectionType.json

/**
 * Specifies the estimated effective type of the current connection (e.g. slow-2g, 2g, 3g, 4g). `effectiveConnectionType`
 *
 * Attribute Value Type: `string` {@link EFFECTIVECONNECTIONTYPE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link NETWORK_CONNECTION_EFFECTIVE_TYPE} `network.connection.effective_type`
 *
 * @deprecated Use {@link NETWORK_CONNECTION_EFFECTIVE_TYPE} (network.connection.effective_type) instead - Old namespace-less attribute, to be replaced with network.connection.effective_type for span-first future
 * @example "4g"
 */
export const EFFECTIVECONNECTIONTYPE = 'effectiveConnectionType';

/**
 * Type for {@link EFFECTIVECONNECTIONTYPE} effectiveConnectionType
 */
export type EFFECTIVECONNECTIONTYPE_TYPE = string;

// Path: model/attributes/environment.json

/**
 * The sentry environment. `environment`
 *
 * Attribute Value Type: `string` {@link ENVIRONMENT_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: auto
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: auto
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * @example "0/5 * * * ? *"
 */
export const FAAS_CRON = 'faas.cron';

/**
 * Type for {@link FAAS_CRON} faas.cron
 */
export type FAAS_CRON_TYPE = string;

// Path: model/attributes/faas/faas__duration_in_ms.json

/**
 * The duration a function took to run, in milliseconds. `faas.duration_in_ms`
 *
 * Attribute Value Type: `number` {@link FAAS_DURATION_IN_MS_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example 120
 */
export const FAAS_DURATION_IN_MS = 'faas.duration_in_ms';

/**
 * Type for {@link FAAS_DURATION_IN_MS} faas.duration_in_ms
 */
export type FAAS_DURATION_IN_MS_TYPE = number;

// Path: model/attributes/faas/faas__entry_point.json

/**
 * The code that's run when the cloud provider invokes your function. `faas.entry_point`
 *
 * Attribute Value Type: `string` {@link FAAS_ENTRY_POINT_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "my_main_function"
 */
export const FAAS_ENTRY_POINT = 'faas.entry_point';

/**
 * Type for {@link FAAS_ENTRY_POINT} faas.entry_point
 */
export type FAAS_ENTRY_POINT_TYPE = string;

// Path: model/attributes/faas/faas__identity.json

/**
 * The Service Account (GCP), IAM Execution Role (AWS), or Managed Identity (Azure) used by the serverless function when interacting with other cloud services `faas.identity`
 *
 * Attribute Value Type: `string` {@link FAAS_IDENTITY_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "name@project.iam.gserviceaccount.com (GCP), arn:aws:iam::123456789012:role/role-name (AWS), 00000000-0000-0000-0000-000000000000 (Azure)"
 */
export const FAAS_IDENTITY = 'faas.identity';

/**
 * Type for {@link FAAS_IDENTITY} faas.identity
 */
export type FAAS_IDENTITY_TYPE = string;

// Path: model/attributes/faas/faas__invocation_id.json

/**
 * The invocation ID of the current function invocation. `faas.invocation_id`
 *
 * Attribute Value Type: `string` {@link FAAS_INVOCATION_ID_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * Aliases: {@link AWS_LAMBDA_AWS_REQUEST_ID} `aws.lambda.aws_request_id`
 *
 * @example "af9d5aa4-a685-4c5f-a22b-444f80b3cc28"
 */
export const FAAS_INVOCATION_ID = 'faas.invocation_id';

/**
 * Type for {@link FAAS_INVOCATION_ID} faas.invocation_id
 */
export type FAAS_INVOCATION_ID_TYPE = string;

// Path: model/attributes/faas/faas__name.json

/**
 * The name of the serverless function `faas.name`
 *
 * Attribute Value Type: `string` {@link FAAS_NAME_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * Aliases: {@link AWS_LAMBDA_FUNCTION_NAME} `aws.lambda.function_name`
 *
 * @example "my_function"
 */
export const FAAS_NAME = 'faas.name';

/**
 * Type for {@link FAAS_NAME} faas.name
 */
export type FAAS_NAME_TYPE = string;

// Path: model/attributes/faas/faas__time.json

/**
 * A string containing the function invocation time in the ISO 8601 format expressed in UTC. `faas.time`
 *
 * Attribute Value Type: `string` {@link FAAS_TIME_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * @example "timer"
 */
export const FAAS_TRIGGER = 'faas.trigger';

/**
 * Type for {@link FAAS_TRIGGER} faas.trigger
 */
export type FAAS_TRIGGER_TYPE = string;

// Path: model/attributes/faas/faas__version.json

/**
 * The version of the function that was invoked `faas.version`
 *
 * Attribute Value Type: `string` {@link FAAS_VERSION_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * Aliases: {@link AWS_LAMBDA_FUNCTION_VERSION} `aws.lambda.function_version`
 *
 * @example "$LATEST"
 */
export const FAAS_VERSION = 'faas.version';

/**
 * Type for {@link FAAS_VERSION} faas.version
 */
export type FAAS_VERSION_TYPE = string;

// Path: model/attributes/fcp.json

/**
 * The time it takes for the browser to render the first piece of meaningful content on the screen `fcp`
 *
 * Attribute Value Type: `number` {@link FCP_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link BROWSER_WEB_VITAL_FCP_VALUE} `browser.web_vital.fcp.value`
 *
 * @deprecated Use {@link BROWSER_WEB_VITAL_FCP_VALUE} (browser.web_vital.fcp.value) instead - This attribute is being deprecated in favor of browser.web_vital.fcp.value
 * @example 547.6951
 */
export const FCP = 'fcp';

/**
 * Type for {@link FCP} fcp
 */
export type FCP_TYPE = number;

// Path: model/attributes/flag/flag__evaluation__[key].json

/**
 * An instance of a feature flag evaluation. The value of this attribute is the boolean representing the evaluation result. The <key> suffix is the name of the feature flag. `flag.evaluation.<key>`
 *
 * Attribute Value Type: `boolean` {@link FLAG_EVALUATION_KEY_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Has Dynamic Suffix: true
 *
 * @example "flag.evaluation.is_new_ui=true"
 */
export const FLAG_EVALUATION_KEY = 'flag.evaluation.<key>';

/**
 * Base key for {@link FLAG_EVALUATION_KEY}. Use with a dynamic suffix, e.g. `${FLAG_EVALUATION_KEY_BASE}.${key}`.
 */
export const FLAG_EVALUATION_KEY_BASE = 'flag.evaluation';

/**
 * Type for {@link FLAG_EVALUATION_KEY} flag.evaluation.<key>
 */
export type FLAG_EVALUATION_KEY_TYPE = boolean;

// Path: model/attributes/fp.json

/**
 * The time it takes for the browser to render the first pixel on the screen `fp`
 *
 * Attribute Value Type: `number` {@link FP_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link BROWSER_WEB_VITAL_FP_VALUE} `browser.web_vital.fp.value`
 *
 * @deprecated Use {@link BROWSER_WEB_VITAL_FP_VALUE} (browser.web_vital.fp.value) instead - This attribute is being deprecated in favor of browser.web_vital.fp.value
 * @example 477.1926
 */
export const FP = 'fp';

/**
 * Type for {@link FP} fp
 */
export type FP_TYPE = number;

// Path: model/attributes/frames/frames__delay.json

/**
 * The sum of all delayed frame durations in seconds during the lifetime of the span. For more information see [frames delay](https://develop.sentry.dev/sdk/performance/frames-delay/). `frames.delay`
 *
 * Attribute Value Type: `number` {@link FRAMES_DELAY_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link APP_VITALS_FRAMES_DELAY_VALUE} `app.vitals.frames.delay.value`
 *
 * @deprecated Use {@link APP_VITALS_FRAMES_DELAY_VALUE} (app.vitals.frames.delay.value) instead - Replaced by app.vitals.frames.delay.value to align with the app.vitals.* namespace for mobile performance attributes
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link APP_VITALS_FRAMES_FROZEN_COUNT} `app.vitals.frames.frozen.count`
 *
 * @deprecated Use {@link APP_VITALS_FRAMES_FROZEN_COUNT} (app.vitals.frames.frozen.count) instead - Replaced by app.vitals.frames.frozen.count to align with the app.vitals.* namespace for mobile performance attributes
 * @example 3
 */
export const FRAMES_FROZEN = 'frames.frozen';

/**
 * Type for {@link FRAMES_FROZEN} frames.frozen
 */
export type FRAMES_FROZEN_TYPE = number;

// Path: model/attributes/frames_frozen_rate.json

/**
 * The rate of frozen frames, or `app_vitals.frames.frozen.count` divided by `app_vitals.frames.total.count`. This is computed by Relay. `frames_frozen_rate`
 *
 * Attribute Value Type: `number` {@link FRAMES_FROZEN_RATE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 */
export const FRAMES_FROZEN_RATE = 'frames_frozen_rate';

/**
 * Type for {@link FRAMES_FROZEN_RATE} frames_frozen_rate
 */
export type FRAMES_FROZEN_RATE_TYPE = number;

// Path: model/attributes/frames/frames__slow.json

/**
 * The number of slow frames rendered during the lifetime of the span. `frames.slow`
 *
 * Attribute Value Type: `number` {@link FRAMES_SLOW_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link APP_VITALS_FRAMES_SLOW_COUNT} `app.vitals.frames.slow.count`
 *
 * @deprecated Use {@link APP_VITALS_FRAMES_SLOW_COUNT} (app.vitals.frames.slow.count) instead - Replaced by app.vitals.frames.slow.count to align with the app.vitals.* namespace for mobile performance attributes
 * @example 1
 */
export const FRAMES_SLOW = 'frames.slow';

/**
 * Type for {@link FRAMES_SLOW} frames.slow
 */
export type FRAMES_SLOW_TYPE = number;

// Path: model/attributes/frames_slow_rate.json

/**
 * The rate of slow frames, or `app_vitals.frames.slow.count` divided by `app_vitals.frames.total.count`. This is computed by Relay. `frames_slow_rate`
 *
 * Attribute Value Type: `number` {@link FRAMES_SLOW_RATE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 */
export const FRAMES_SLOW_RATE = 'frames_slow_rate';

/**
 * Type for {@link FRAMES_SLOW_RATE} frames_slow_rate
 */
export type FRAMES_SLOW_RATE_TYPE = number;

// Path: model/attributes/frames/frames__total.json

/**
 * The number of total frames rendered during the lifetime of the span. `frames.total`
 *
 * Attribute Value Type: `number` {@link FRAMES_TOTAL_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link APP_VITALS_FRAMES_TOTAL_COUNT} `app.vitals.frames.total.count`
 *
 * @deprecated Use {@link APP_VITALS_FRAMES_TOTAL_COUNT} (app.vitals.frames.total.count) instead - Replaced by app.vitals.frames.total.count to align with the app.vitals.* namespace for mobile performance attributes
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @deprecated Use {@link ERROR_TYPE} (error.type) instead - This attribute is not part of the OpenTelemetry specification and error.type fits much better.
 * @example "ENOENT: no such file or directory"
 */
export const FS_ERROR = 'fs_error';

/**
 * Type for {@link FS_ERROR} fs_error
 */
export type FS_ERROR_TYPE = string;

// Path: model/attributes/gcp/gcp__function__context__event_id.json

/**
 * The event ID from the legacy GCP Cloud Function context (1st gen) `gcp.function.context.event_id`
 *
 * Attribute Value Type: `string` {@link GCP_FUNCTION_CONTEXT_EVENT_ID_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "1234567890"
 */
export const GCP_FUNCTION_CONTEXT_EVENT_ID = 'gcp.function.context.event_id';

/**
 * Type for {@link GCP_FUNCTION_CONTEXT_EVENT_ID} gcp.function.context.event_id
 */
export type GCP_FUNCTION_CONTEXT_EVENT_ID_TYPE = string;

// Path: model/attributes/gcp/gcp__function__context__event_type.json

/**
 * The type of the GCP Cloud Function event `gcp.function.context.event_type`
 *
 * Attribute Value Type: `string` {@link GCP_FUNCTION_CONTEXT_EVENT_TYPE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "google.pubsub.topic.publish"
 */
export const GCP_FUNCTION_CONTEXT_EVENT_TYPE = 'gcp.function.context.event_type';

/**
 * Type for {@link GCP_FUNCTION_CONTEXT_EVENT_TYPE} gcp.function.context.event_type
 */
export type GCP_FUNCTION_CONTEXT_EVENT_TYPE_TYPE = string;

// Path: model/attributes/gcp/gcp__function__context__id.json

/**
 * The unique event ID from the GCP CloudEvents context (2nd gen Cloud Functions) `gcp.function.context.id`
 *
 * Attribute Value Type: `string` {@link GCP_FUNCTION_CONTEXT_ID_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "1234567890"
 */
export const GCP_FUNCTION_CONTEXT_ID = 'gcp.function.context.id';

/**
 * Type for {@link GCP_FUNCTION_CONTEXT_ID} gcp.function.context.id
 */
export type GCP_FUNCTION_CONTEXT_ID_TYPE = string;

// Path: model/attributes/gcp/gcp__function__context__resource.json

/**
 * The resource that triggered the GCP Cloud Function event `gcp.function.context.resource`
 *
 * Attribute Value Type: `string` {@link GCP_FUNCTION_CONTEXT_RESOURCE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "projects/my-project/topics/my-topic"
 */
export const GCP_FUNCTION_CONTEXT_RESOURCE = 'gcp.function.context.resource';

/**
 * Type for {@link GCP_FUNCTION_CONTEXT_RESOURCE} gcp.function.context.resource
 */
export type GCP_FUNCTION_CONTEXT_RESOURCE_TYPE = string;

// Path: model/attributes/gcp/gcp__function__context__source.json

/**
 * The source of the GCP Cloud Function event `gcp.function.context.source`
 *
 * Attribute Value Type: `string` {@link GCP_FUNCTION_CONTEXT_SOURCE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "//pubsub.googleapis.com/projects/my-project/topics/my-topic"
 */
export const GCP_FUNCTION_CONTEXT_SOURCE = 'gcp.function.context.source';

/**
 * Type for {@link GCP_FUNCTION_CONTEXT_SOURCE} gcp.function.context.source
 */
export type GCP_FUNCTION_CONTEXT_SOURCE_TYPE = string;

// Path: model/attributes/gcp/gcp__function__context__specversion.json

/**
 * The CloudEvents specification version of the GCP Cloud Function event `gcp.function.context.specversion`
 *
 * Attribute Value Type: `string` {@link GCP_FUNCTION_CONTEXT_SPECVERSION_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "1.0"
 */
export const GCP_FUNCTION_CONTEXT_SPECVERSION = 'gcp.function.context.specversion';

/**
 * Type for {@link GCP_FUNCTION_CONTEXT_SPECVERSION} gcp.function.context.specversion
 */
export type GCP_FUNCTION_CONTEXT_SPECVERSION_TYPE = string;

// Path: model/attributes/gcp/gcp__function__context__time.json

/**
 * The timestamp of the GCP Cloud Function event `gcp.function.context.time`
 *
 * Attribute Value Type: `string` {@link GCP_FUNCTION_CONTEXT_TIME_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "2024-01-01T00:00:00.000Z"
 */
export const GCP_FUNCTION_CONTEXT_TIME = 'gcp.function.context.time';

/**
 * Type for {@link GCP_FUNCTION_CONTEXT_TIME} gcp.function.context.time
 */
export type GCP_FUNCTION_CONTEXT_TIME_TYPE = string;

// Path: model/attributes/gcp/gcp__function__context__timestamp.json

/**
 * The legacy timestamp of the GCP Cloud Function event `gcp.function.context.timestamp`
 *
 * Attribute Value Type: `string` {@link GCP_FUNCTION_CONTEXT_TIMESTAMP_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "2024-01-01T00:00:00.000Z"
 */
export const GCP_FUNCTION_CONTEXT_TIMESTAMP = 'gcp.function.context.timestamp';

/**
 * Type for {@link GCP_FUNCTION_CONTEXT_TIMESTAMP} gcp.function.context.timestamp
 */
export type GCP_FUNCTION_CONTEXT_TIMESTAMP_TYPE = string;

// Path: model/attributes/gcp/gcp__function__context__type.json

/**
 * The type of the GCP Cloud Function event context `gcp.function.context.type`
 *
 * Attribute Value Type: `string` {@link GCP_FUNCTION_CONTEXT_TYPE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "cloud_functions.context"
 */
export const GCP_FUNCTION_CONTEXT_TYPE = 'gcp.function.context.type';

/**
 * Type for {@link GCP_FUNCTION_CONTEXT_TYPE} gcp.function.context.type
 */
export type GCP_FUNCTION_CONTEXT_TYPE_TYPE = string;

// Path: model/attributes/gcp/gcp__project__id.json

/**
 * The ID of the project in GCP that this resource is associated with `gcp.project.id`
 *
 * Attribute Value Type: `string` {@link GCP_PROJECT_ID_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "my-project-123"
 */
export const GCP_PROJECT_ID = 'gcp.project.id';

/**
 * Type for {@link GCP_PROJECT_ID} gcp.project.id
 */
export type GCP_PROJECT_ID_TYPE = string;

// Path: model/attributes/gen_ai/gen_ai__agent__name.json

/**
 * The name of the agent being used. `gen_ai.agent.name`
 *
 * Attribute Value Type: `string` {@link GEN_AI_AGENT_NAME_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * @example "ResearchAssistant"
 */
export const GEN_AI_AGENT_NAME = 'gen_ai.agent.name';

/**
 * Type for {@link GEN_AI_AGENT_NAME} gen_ai.agent.name
 */
export type GEN_AI_AGENT_NAME_TYPE = string;

// Path: model/attributes/gen_ai/gen_ai__context__utilization.json

/**
 * The fraction of the model context window utilized by this generation. `gen_ai.context.utilization`
 *
 * Attribute Value Type: `number` {@link GEN_AI_CONTEXT_UTILIZATION_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example 0.75
 */
export const GEN_AI_CONTEXT_UTILIZATION = 'gen_ai.context.utilization';

/**
 * Type for {@link GEN_AI_CONTEXT_UTILIZATION} gen_ai.context.utilization
 */
export type GEN_AI_CONTEXT_UTILIZATION_TYPE = number;

// Path: model/attributes/gen_ai/gen_ai__context__window_size.json

/**
 * The maximum context window size supported by the model for this generation. `gen_ai.context.window_size`
 *
 * Attribute Value Type: `number` {@link GEN_AI_CONTEXT_WINDOW_SIZE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example 128000
 */
export const GEN_AI_CONTEXT_WINDOW_SIZE = 'gen_ai.context.window_size';

/**
 * Type for {@link GEN_AI_CONTEXT_WINDOW_SIZE} gen_ai.context.window_size
 */
export type GEN_AI_CONTEXT_WINDOW_SIZE_TYPE = number;

// Path: model/attributes/gen_ai/gen_ai__conversation__id.json

/**
 * The unique identifier for a conversation (session, thread), used to store and correlate messages within this conversation. `gen_ai.conversation.id`
 *
 * Attribute Value Type: `string` {@link GEN_AI_CONVERSATION_ID_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * @example "conv_5j66UpCpwteGg4YSxUnt7lPY"
 */
export const GEN_AI_CONVERSATION_ID = 'gen_ai.conversation.id';

/**
 * Type for {@link GEN_AI_CONVERSATION_ID} gen_ai.conversation.id
 */
export type GEN_AI_CONVERSATION_ID_TYPE = string;

// Path: model/attributes/gen_ai/gen_ai__cost__cache_creation__input_tokens.json

/**
 * The cost of input tokens written to cache in USD. `gen_ai.cost.cache_creation.input_tokens`
 *
 * Attribute Value Type: `number` {@link GEN_AI_COST_CACHE_CREATION_INPUT_TOKENS_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example 12.34
 */
export const GEN_AI_COST_CACHE_CREATION_INPUT_TOKENS = 'gen_ai.cost.cache_creation.input_tokens';

/**
 * Type for {@link GEN_AI_COST_CACHE_CREATION_INPUT_TOKENS} gen_ai.cost.cache_creation.input_tokens
 */
export type GEN_AI_COST_CACHE_CREATION_INPUT_TOKENS_TYPE = number;

// Path: model/attributes/gen_ai/gen_ai__cost__cache_read__input_tokens.json

/**
 * The cost of cached input tokens in USD. `gen_ai.cost.cache_read.input_tokens`
 *
 * Attribute Value Type: `number` {@link GEN_AI_COST_CACHE_READ_INPUT_TOKENS_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example 12.34
 */
export const GEN_AI_COST_CACHE_READ_INPUT_TOKENS = 'gen_ai.cost.cache_read.input_tokens';

/**
 * Type for {@link GEN_AI_COST_CACHE_READ_INPUT_TOKENS} gen_ai.cost.cache_read.input_tokens
 */
export type GEN_AI_COST_CACHE_READ_INPUT_TOKENS_TYPE = number;

// Path: model/attributes/gen_ai/gen_ai__cost__input_tokens.json

/**
 * The total cost of all input tokens in USD (includes cached and cache creation tokens). `gen_ai.cost.input_tokens`
 *
 * Attribute Value Type: `number` {@link GEN_AI_COST_INPUT_TOKENS_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * The total cost of all output tokens in USD (includes reasoning tokens). `gen_ai.cost.output_tokens`
 *
 * Attribute Value Type: `number` {@link GEN_AI_COST_OUTPUT_TOKENS_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example 123.45
 */
export const GEN_AI_COST_OUTPUT_TOKENS = 'gen_ai.cost.output_tokens';

/**
 * Type for {@link GEN_AI_COST_OUTPUT_TOKENS} gen_ai.cost.output_tokens
 */
export type GEN_AI_COST_OUTPUT_TOKENS_TYPE = number;

// Path: model/attributes/gen_ai/gen_ai__cost__reasoning__output_tokens.json

/**
 * The cost of reasoning output tokens in USD. `gen_ai.cost.reasoning.output_tokens`
 *
 * Attribute Value Type: `number` {@link GEN_AI_COST_REASONING_OUTPUT_TOKENS_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example 12.34
 */
export const GEN_AI_COST_REASONING_OUTPUT_TOKENS = 'gen_ai.cost.reasoning.output_tokens';

/**
 * Type for {@link GEN_AI_COST_REASONING_OUTPUT_TOKENS} gen_ai.cost.reasoning.output_tokens
 */
export type GEN_AI_COST_REASONING_OUTPUT_TOKENS_TYPE = number;

// Path: model/attributes/gen_ai/gen_ai__cost__total_tokens.json

/**
 * The total cost for the tokens used. `gen_ai.cost.total_tokens`
 *
 * Attribute Value Type: `number` {@link GEN_AI_COST_TOTAL_TOKENS_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link AI_TOTAL_COST} `ai.total_cost`
 *
 * @example 12.34
 */
export const GEN_AI_COST_TOTAL_TOKENS = 'gen_ai.cost.total_tokens';

/**
 * Type for {@link GEN_AI_COST_TOTAL_TOKENS} gen_ai.cost.total_tokens
 */
export type GEN_AI_COST_TOTAL_TOKENS_TYPE = number;

// Path: model/attributes/gen_ai/gen_ai__embeddings__input.json

/**
 * The input to the embeddings model. `gen_ai.embeddings.input`
 *
 * Attribute Value Type: `string` {@link GEN_AI_EMBEDDINGS_INPUT_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "What's the weather in Paris?"
 */
export const GEN_AI_EMBEDDINGS_INPUT = 'gen_ai.embeddings.input';

/**
 * Type for {@link GEN_AI_EMBEDDINGS_INPUT} gen_ai.embeddings.input
 */
export type GEN_AI_EMBEDDINGS_INPUT_TYPE = string;

// Path: model/attributes/gen_ai/gen_ai__function_id.json

/**
 * Framework-specific tracing label for the execution of a function or other unit of execution in a generative AI system. `gen_ai.function_id`
 *
 * Attribute Value Type: `string` {@link GEN_AI_FUNCTION_ID_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "my-awesome-function"
 */
export const GEN_AI_FUNCTION_ID = 'gen_ai.function_id';

/**
 * Type for {@link GEN_AI_FUNCTION_ID} gen_ai.function_id
 */
export type GEN_AI_FUNCTION_ID_TYPE = string;

// Path: model/attributes/gen_ai/gen_ai__input__messages.json

/**
 * The messages passed to the model. It has to be a stringified version of an array of objects. The `role` attribute of each object must be `"user"`, `"assistant"`, `"tool"`, or `"system"`. For messages of the role `"tool"`, the `content` can be a string or an arbitrary object with information about the tool call. For other messages the `content` can be either a string or a list of objects in the format `{type: "text", text:"..."}`. `gen_ai.input.messages`
 *
 * Attribute Value Type: `string` {@link GEN_AI_INPUT_MESSAGES_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * Aliases: {@link AI_TEXTS} `ai.texts`
 *
 * @example "[{\"role\": \"user\", \"parts\": [{\"type\": \"text\", \"content\": \"Weather in Paris?\"}]}, {\"role\": \"assistant\", \"parts\": [{\"type\": \"tool_call\", \"id\": \"call_VSPygqKTWdrhaFErNvMV18Yl\", \"name\": \"get_weather\", \"arguments\": {\"location\": \"Paris\"}}]}, {\"role\": \"tool\", \"parts\": [{\"type\": \"tool_call_response\", \"id\": \"call_VSPygqKTWdrhaFErNvMV18Yl\", \"result\": \"rainy, 57°F\"}]}]"
 */
export const GEN_AI_INPUT_MESSAGES = 'gen_ai.input.messages';

/**
 * Type for {@link GEN_AI_INPUT_MESSAGES} gen_ai.input.messages
 */
export type GEN_AI_INPUT_MESSAGES_TYPE = string;

// Path: model/attributes/gen_ai/gen_ai__operation__name.json

/**
 * The name of the operation being performed. It has the following list of well-known values: 'chat', 'create_agent', 'embeddings', 'execute_tool', 'generate_content', 'invoke_agent', 'text_completion'. If one of them applies, then that value MUST be used. Otherwise a custom value MAY be used. `gen_ai.operation.name`
 *
 * Attribute Value Type: `string` {@link GEN_AI_OPERATION_NAME_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * The type of AI operation. Must be one of 'agent' (invoke_agent and create_agent spans), 'ai_client' (any LLM call), 'tool' (execute_tool spans), 'handoff' (handoff spans), 'other' (input and output processors, skill loading, guardrails etc.) . Added during ingestion based on span.op and gen_ai.operation.type. Used to filter and aggregate data in the UI `gen_ai.operation.type`
 *
 * Attribute Value Type: `string` {@link GEN_AI_OPERATION_TYPE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "tool"
 */
export const GEN_AI_OPERATION_TYPE = 'gen_ai.operation.type';

/**
 * Type for {@link GEN_AI_OPERATION_TYPE} gen_ai.operation.type
 */
export type GEN_AI_OPERATION_TYPE_TYPE = string;

// Path: model/attributes/gen_ai/gen_ai__output__messages.json

/**
 * The model's response messages. It has to be a stringified version of an array of message objects, which can include text responses and tool calls. `gen_ai.output.messages`
 *
 * Attribute Value Type: `string` {@link GEN_AI_OUTPUT_MESSAGES_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * @example "[{\"role\": \"assistant\", \"parts\": [{\"type\": \"text\", \"content\": \"The weather in Paris is currently rainy with a temperature of 57°F.\"}], \"finish_reason\": \"stop\"}]"
 */
export const GEN_AI_OUTPUT_MESSAGES = 'gen_ai.output.messages';

/**
 * Type for {@link GEN_AI_OUTPUT_MESSAGES} gen_ai.output.messages
 */
export type GEN_AI_OUTPUT_MESSAGES_TYPE = string;

// Path: model/attributes/gen_ai/gen_ai__pipeline__name.json

/**
 * Name of the AI pipeline or chain being executed. `gen_ai.pipeline.name`
 *
 * Attribute Value Type: `string` {@link GEN_AI_PIPELINE_NAME_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * @deprecated  - Deprecated from OTEL, use gen_ai.input.messages with the new format instead.
 * @example "[{\"role\": \"user\", \"message\": \"hello\"}]"
 */
export const GEN_AI_PROMPT = 'gen_ai.prompt';

/**
 * Type for {@link GEN_AI_PROMPT} gen_ai.prompt
 */
export type GEN_AI_PROMPT_TYPE = string;

// Path: model/attributes/gen_ai/gen_ai__prompt__name.json

/**
 * The name of the prompt that uniquely identifies it. `gen_ai.prompt.name`
 *
 * Attribute Value Type: `string` {@link GEN_AI_PROMPT_NAME_TYPE}
 *
 * Apply Scrubbing: manual - Prompt names may reveal user behavior patterns or sensitive operations
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * Aliases: {@link MCP_PROMPT_NAME} `mcp.prompt.name`
 *
 * @example "summarize_text"
 */
export const GEN_AI_PROMPT_NAME = 'gen_ai.prompt.name';

/**
 * Type for {@link GEN_AI_PROMPT_NAME} gen_ai.prompt.name
 */
export type GEN_AI_PROMPT_NAME_TYPE = string;

// Path: model/attributes/gen_ai/gen_ai__provider__name.json

/**
 * The Generative AI provider as identified by the client or server instrumentation. `gen_ai.provider.name`
 *
 * Attribute Value Type: `string` {@link GEN_AI_PROVIDER_NAME_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * Aliases: {@link AI_MODEL_PROVIDER} `ai.model.provider`, {@link GEN_AI_SYSTEM} `gen_ai.system`
 *
 * @example "openai"
 */
export const GEN_AI_PROVIDER_NAME = 'gen_ai.provider.name';

/**
 * Type for {@link GEN_AI_PROVIDER_NAME} gen_ai.provider.name
 */
export type GEN_AI_PROVIDER_NAME_TYPE = string;

// Path: model/attributes/gen_ai/gen_ai__request__available_tools.json

/**
 * The available tools for the model. It has to be a stringified version of an array of objects. `gen_ai.request.available_tools`
 *
 * Attribute Value Type: `string` {@link GEN_AI_REQUEST_AVAILABLE_TOOLS_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @deprecated Use {@link GEN_AI_TOOL_DEFINITIONS} (gen_ai.tool.definitions) instead
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link AI_INPUT_MESSAGES} `ai.input_messages`
 *
 * @deprecated Use {@link GEN_AI_INPUT_MESSAGES} (gen_ai.input.messages) instead
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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

// Path: model/attributes/gen_ai/gen_ai__request__reasoning_effort.json

/**
 * Constrains the effort on reasoning for reasoning models. Supported values vary by provider. `gen_ai.request.reasoning_effort`
 *
 * Attribute Value Type: `string` {@link GEN_AI_REQUEST_REASONING_EFFORT_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "high"
 */
export const GEN_AI_REQUEST_REASONING_EFFORT = 'gen_ai.request.reasoning_effort';

/**
 * Type for {@link GEN_AI_REQUEST_REASONING_EFFORT} gen_ai.request.reasoning_effort
 */
export type GEN_AI_REQUEST_REASONING_EFFORT_TYPE = string;

// Path: model/attributes/gen_ai/gen_ai__request__seed.json

/**
 * The seed, ideally models given the same seed and same other parameters will produce the exact same output. `gen_ai.request.seed`
 *
 * Attribute Value Type: `string` {@link GEN_AI_REQUEST_SEED_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @deprecated Use {@link GEN_AI_OUTPUT_MESSAGES} (gen_ai.output.messages) instead
 * @example "[\"The weather in Paris is rainy and overcast, with temperatures around 57°F\", \"The weather in London is sunny and warm, with temperatures around 65°F\"]"
 */
export const GEN_AI_RESPONSE_TEXT = 'gen_ai.response.text';

/**
 * Type for {@link GEN_AI_RESPONSE_TEXT} gen_ai.response.text
 */
export type GEN_AI_RESPONSE_TEXT_TYPE = string;

// Path: model/attributes/gen_ai/gen_ai__response__time_to_first_chunk.json

/**
 * Time in seconds when the first response content chunk arrived in streaming responses. `gen_ai.response.time_to_first_chunk`
 *
 * Attribute Value Type: `number` {@link GEN_AI_RESPONSE_TIME_TO_FIRST_CHUNK_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * Aliases: {@link GEN_AI_RESPONSE_TIME_TO_FIRST_TOKEN} `gen_ai.response.time_to_first_token`
 *
 * @example 0.6853435
 */
export const GEN_AI_RESPONSE_TIME_TO_FIRST_CHUNK = 'gen_ai.response.time_to_first_chunk';

/**
 * Type for {@link GEN_AI_RESPONSE_TIME_TO_FIRST_CHUNK} gen_ai.response.time_to_first_chunk
 */
export type GEN_AI_RESPONSE_TIME_TO_FIRST_CHUNK_TYPE = number;

// Path: model/attributes/gen_ai/gen_ai__response__time_to_first_token.json

/**
 * Time in seconds when the first response content chunk arrived in streaming responses. `gen_ai.response.time_to_first_token`
 *
 * Attribute Value Type: `number` {@link GEN_AI_RESPONSE_TIME_TO_FIRST_TOKEN_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link GEN_AI_RESPONSE_TIME_TO_FIRST_CHUNK} `gen_ai.response.time_to_first_chunk`
 *
 * @deprecated Use {@link GEN_AI_RESPONSE_TIME_TO_FIRST_CHUNK} (gen_ai.response.time_to_first_chunk) instead
 * @example 0.6853435
 */
export const GEN_AI_RESPONSE_TIME_TO_FIRST_TOKEN = 'gen_ai.response.time_to_first_token';

/**
 * Type for {@link GEN_AI_RESPONSE_TIME_TO_FIRST_TOKEN} gen_ai.response.time_to_first_token
 */
export type GEN_AI_RESPONSE_TIME_TO_FIRST_TOKEN_TYPE = number;

// Path: model/attributes/gen_ai/gen_ai__response__tokens_per_second.json

/**
 * The total output tokens per seconds throughput `gen_ai.response.tokens_per_second`
 *
 * Attribute Value Type: `number` {@link GEN_AI_RESPONSE_TOKENS_PER_SECOND_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @deprecated Use {@link GEN_AI_OUTPUT_MESSAGES} (gen_ai.output.messages) instead
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * Aliases: {@link AI_MODEL_PROVIDER} `ai.model.provider`, {@link GEN_AI_PROVIDER_NAME} `gen_ai.provider.name`
 *
 * @deprecated Use {@link GEN_AI_PROVIDER_NAME} (gen_ai.provider.name) instead
 * @example "openai"
 */
export const GEN_AI_SYSTEM = 'gen_ai.system';

/**
 * Type for {@link GEN_AI_SYSTEM} gen_ai.system
 */
export type GEN_AI_SYSTEM_TYPE = string;

// Path: model/attributes/gen_ai/gen_ai__system_instructions.json

/**
 * The system instructions passed to the model. `gen_ai.system_instructions`
 *
 * Attribute Value Type: `string` {@link GEN_AI_SYSTEM_INSTRUCTIONS_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * Aliases: {@link AI_PREAMBLE} `ai.preamble`
 *
 * @example "You are a helpful assistant"
 */
export const GEN_AI_SYSTEM_INSTRUCTIONS = 'gen_ai.system_instructions';

/**
 * Type for {@link GEN_AI_SYSTEM_INSTRUCTIONS} gen_ai.system_instructions
 */
export type GEN_AI_SYSTEM_INSTRUCTIONS_TYPE = string;

// Path: model/attributes/gen_ai/gen_ai__system__message.json

/**
 * The system instructions passed to the model. `gen_ai.system.message`
 *
 * Attribute Value Type: `string` {@link GEN_AI_SYSTEM_MESSAGE_TYPE}
 *
 * Apply Scrubbing: auto
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @deprecated Use {@link GEN_AI_SYSTEM_INSTRUCTIONS} (gen_ai.system_instructions) instead
 * @example "You are a helpful assistant"
 */
export const GEN_AI_SYSTEM_MESSAGE = 'gen_ai.system.message';

/**
 * Type for {@link GEN_AI_SYSTEM_MESSAGE} gen_ai.system.message
 */
export type GEN_AI_SYSTEM_MESSAGE_TYPE = string;

// Path: model/attributes/gen_ai/gen_ai__tool__call__arguments.json

/**
 * The arguments of the tool call. It has to be a stringified version of the arguments to the tool. `gen_ai.tool.call.arguments`
 *
 * Attribute Value Type: `string` {@link GEN_AI_TOOL_CALL_ARGUMENTS_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * Aliases: {@link GEN_AI_TOOL_INPUT} `gen_ai.tool.input`
 *
 * @example "{\"location\": \"Paris\"}"
 */
export const GEN_AI_TOOL_CALL_ARGUMENTS = 'gen_ai.tool.call.arguments';

/**
 * Type for {@link GEN_AI_TOOL_CALL_ARGUMENTS} gen_ai.tool.call.arguments
 */
export type GEN_AI_TOOL_CALL_ARGUMENTS_TYPE = string;

// Path: model/attributes/gen_ai/gen_ai__tool__call__result.json

/**
 * The result of the tool call. It has to be a stringified version of the result of the tool. `gen_ai.tool.call.result`
 *
 * Attribute Value Type: `string` {@link GEN_AI_TOOL_CALL_RESULT_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * Aliases: {@link GEN_AI_TOOL_OUTPUT} `gen_ai.tool.output`, {@link GEN_AI_TOOL_MESSAGE} `gen_ai.tool.message`, {@link MCP_TOOL_RESULT_CONTENT} `mcp.tool.result.content`
 *
 * @example "rainy, 57°F"
 */
export const GEN_AI_TOOL_CALL_RESULT = 'gen_ai.tool.call.result';

/**
 * Type for {@link GEN_AI_TOOL_CALL_RESULT} gen_ai.tool.call.result
 */
export type GEN_AI_TOOL_CALL_RESULT_TYPE = string;

// Path: model/attributes/gen_ai/gen_ai__tool__definitions.json

/**
 * The list of source system tool definitions available to the GenAI agent or model. `gen_ai.tool.definitions`
 *
 * Attribute Value Type: `string` {@link GEN_AI_TOOL_DEFINITIONS_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * @example "[{\"type\": \"function\", \"name\": \"get_current_weather\", \"description\": \"Get the current weather in a given location\", \"parameters\": {\"type\": \"object\", \"properties\": {\"location\": {\"type\": \"string\", \"description\": \"The city and state, e.g. San Francisco, CA\"}, \"unit\": {\"type\": \"string\", \"enum\": [\"celsius\", \"fahrenheit\"]}}, \"required\": [\"location\", \"unit\"]}}]"
 */
export const GEN_AI_TOOL_DEFINITIONS = 'gen_ai.tool.definitions';

/**
 * Type for {@link GEN_AI_TOOL_DEFINITIONS} gen_ai.tool.definitions
 */
export type GEN_AI_TOOL_DEFINITIONS_TYPE = string;

// Path: model/attributes/gen_ai/gen_ai__tool__description.json

/**
 * The description of the tool being used. `gen_ai.tool.description`
 *
 * Attribute Value Type: `string` {@link GEN_AI_TOOL_DESCRIPTION_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link GEN_AI_TOOL_CALL_ARGUMENTS} `gen_ai.tool.call.arguments`
 *
 * @deprecated Use {@link GEN_AI_TOOL_CALL_ARGUMENTS} (gen_ai.tool.call.arguments) instead
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
 * Apply Scrubbing: auto
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link GEN_AI_TOOL_CALL_RESULT} `gen_ai.tool.call.result`, {@link GEN_AI_TOOL_OUTPUT} `gen_ai.tool.output`, {@link MCP_TOOL_RESULT_CONTENT} `mcp.tool.result.content`
 *
 * @deprecated Use {@link GEN_AI_TOOL_CALL_RESULT} (gen_ai.tool.call.result) instead
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * Aliases: {@link AI_FUNCTION_CALL} `ai.function_call`, {@link MCP_TOOL_NAME} `mcp.tool.name`
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link GEN_AI_TOOL_CALL_RESULT} `gen_ai.tool.call.result`, {@link GEN_AI_TOOL_MESSAGE} `gen_ai.tool.message`, {@link MCP_TOOL_RESULT_CONTENT} `mcp.tool.result.content`
 *
 * @deprecated Use {@link GEN_AI_TOOL_CALL_RESULT} (gen_ai.tool.call.result) instead
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * @deprecated  - The gen_ai.tool.type attribute is deprecated and should no longer be set.
 * @example "function"
 */
export const GEN_AI_TOOL_TYPE = 'gen_ai.tool.type';

/**
 * Type for {@link GEN_AI_TOOL_TYPE} gen_ai.tool.type
 */
export type GEN_AI_TOOL_TYPE_TYPE = string;

// Path: model/attributes/gen_ai/gen_ai__usage__cache_creation__input_tokens.json

/**
 * The number of tokens written to the cache when processing the AI input (prompt). `gen_ai.usage.cache_creation.input_tokens`
 *
 * Attribute Value Type: `number` {@link GEN_AI_USAGE_CACHE_CREATION_INPUT_TOKENS_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * Aliases: {@link GEN_AI_USAGE_INPUT_TOKENS_CACHE_WRITE} `gen_ai.usage.input_tokens.cache_write`
 *
 * @example 100
 */
export const GEN_AI_USAGE_CACHE_CREATION_INPUT_TOKENS = 'gen_ai.usage.cache_creation.input_tokens';

/**
 * Type for {@link GEN_AI_USAGE_CACHE_CREATION_INPUT_TOKENS} gen_ai.usage.cache_creation.input_tokens
 */
export type GEN_AI_USAGE_CACHE_CREATION_INPUT_TOKENS_TYPE = number;

// Path: model/attributes/gen_ai/gen_ai__usage__cache_read__input_tokens.json

/**
 * The number of cached tokens used to process the AI input (prompt). `gen_ai.usage.cache_read.input_tokens`
 *
 * Attribute Value Type: `number` {@link GEN_AI_USAGE_CACHE_READ_INPUT_TOKENS_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * Aliases: {@link GEN_AI_USAGE_INPUT_TOKENS_CACHED} `gen_ai.usage.input_tokens.cached`
 *
 * @example 50
 */
export const GEN_AI_USAGE_CACHE_READ_INPUT_TOKENS = 'gen_ai.usage.cache_read.input_tokens';

/**
 * Type for {@link GEN_AI_USAGE_CACHE_READ_INPUT_TOKENS} gen_ai.usage.cache_read.input_tokens
 */
export type GEN_AI_USAGE_CACHE_READ_INPUT_TOKENS_TYPE = number;

// Path: model/attributes/gen_ai/gen_ai__usage__completion_tokens.json

/**
 * The number of tokens used in the GenAI response (completion). `gen_ai.usage.completion_tokens`
 *
 * Attribute Value Type: `number` {@link GEN_AI_USAGE_COMPLETION_TOKENS_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * The number of tokens used to process the AI input (prompt) including cached input tokens. `gen_ai.usage.input_tokens`
 *
 * Attribute Value Type: `number` {@link GEN_AI_USAGE_INPUT_TOKENS_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link GEN_AI_USAGE_CACHE_READ_INPUT_TOKENS} `gen_ai.usage.cache_read.input_tokens`
 *
 * @deprecated Use {@link GEN_AI_USAGE_CACHE_READ_INPUT_TOKENS} (gen_ai.usage.cache_read.input_tokens) instead
 * @example 50
 */
export const GEN_AI_USAGE_INPUT_TOKENS_CACHED = 'gen_ai.usage.input_tokens.cached';

/**
 * Type for {@link GEN_AI_USAGE_INPUT_TOKENS_CACHED} gen_ai.usage.input_tokens.cached
 */
export type GEN_AI_USAGE_INPUT_TOKENS_CACHED_TYPE = number;

// Path: model/attributes/gen_ai/gen_ai__usage__input_tokens__cache_write.json

/**
 * The number of tokens written to the cache when processing the AI input (prompt). `gen_ai.usage.input_tokens.cache_write`
 *
 * Attribute Value Type: `number` {@link GEN_AI_USAGE_INPUT_TOKENS_CACHE_WRITE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link GEN_AI_USAGE_CACHE_CREATION_INPUT_TOKENS} `gen_ai.usage.cache_creation.input_tokens`
 *
 * @deprecated Use {@link GEN_AI_USAGE_CACHE_CREATION_INPUT_TOKENS} (gen_ai.usage.cache_creation.input_tokens) instead
 * @example 100
 */
export const GEN_AI_USAGE_INPUT_TOKENS_CACHE_WRITE = 'gen_ai.usage.input_tokens.cache_write';

/**
 * Type for {@link GEN_AI_USAGE_INPUT_TOKENS_CACHE_WRITE} gen_ai.usage.input_tokens.cache_write
 */
export type GEN_AI_USAGE_INPUT_TOKENS_CACHE_WRITE_TYPE = number;

// Path: model/attributes/gen_ai/gen_ai__usage__output_tokens.json

/**
 * The number of tokens used for creating the AI output (including reasoning tokens). `gen_ai.usage.output_tokens`
 *
 * Attribute Value Type: `number` {@link GEN_AI_USAGE_OUTPUT_TOKENS_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link GEN_AI_USAGE_REASONING_OUTPUT_TOKENS} `gen_ai.usage.reasoning.output_tokens`
 *
 * @deprecated Use {@link GEN_AI_USAGE_REASONING_OUTPUT_TOKENS} (gen_ai.usage.reasoning.output_tokens) instead
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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

// Path: model/attributes/gen_ai/gen_ai__usage__reasoning__output_tokens.json

/**
 * The number of tokens used for reasoning to create the AI output. `gen_ai.usage.reasoning.output_tokens`
 *
 * Attribute Value Type: `number` {@link GEN_AI_USAGE_REASONING_OUTPUT_TOKENS_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * Aliases: {@link GEN_AI_USAGE_OUTPUT_TOKENS_REASONING} `gen_ai.usage.output_tokens.reasoning`
 *
 * @example 75
 */
export const GEN_AI_USAGE_REASONING_OUTPUT_TOKENS = 'gen_ai.usage.reasoning.output_tokens';

/**
 * Type for {@link GEN_AI_USAGE_REASONING_OUTPUT_TOKENS} gen_ai.usage.reasoning.output_tokens
 */
export type GEN_AI_USAGE_REASONING_OUTPUT_TOKENS_TYPE = number;

// Path: model/attributes/gen_ai/gen_ai__usage__total_tokens.json

/**
 * The total number of tokens used to process the prompt. (input tokens plus output todkens) `gen_ai.usage.total_tokens`
 *
 * Attribute Value Type: `number` {@link GEN_AI_USAGE_TOTAL_TOKENS_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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

// Path: model/attributes/graphql/graphql__document.json

/**
 * The GraphQL document being executed. `graphql.document`
 *
 * Attribute Value Type: `string` {@link GRAPHQL_DOCUMENT_TYPE}
 *
 * Apply Scrubbing: auto - The document may contain sensitive information in arguments or variables. Instrumentation should redact sensitive information when possible.
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * @example "query findBookById { bookById(id: ?) { name } }"
 */
export const GRAPHQL_DOCUMENT = 'graphql.document';

/**
 * Type for {@link GRAPHQL_DOCUMENT} graphql.document
 */
export type GRAPHQL_DOCUMENT_TYPE = string;

// Path: model/attributes/graphql/graphql__operation__name.json

/**
 * The name of the operation being executed. `graphql.operation.name`
 *
 * Attribute Value Type: `string` {@link GRAPHQL_OPERATION_NAME_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * @example "query"
 */
export const GRAPHQL_OPERATION_TYPE = 'graphql.operation.type';

/**
 * Type for {@link GRAPHQL_OPERATION_TYPE} graphql.operation.type
 */
export type GRAPHQL_OPERATION_TYPE_TYPE = string;

// Path: model/attributes/hardwareConcurrency.json

/**
 * The number of logical CPU cores available. `hardwareConcurrency`
 *
 * Attribute Value Type: `string` {@link HARDWARECONCURRENCY_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link DEVICE_PROCESSOR_COUNT} `device.processor_count`
 *
 * @deprecated Use {@link DEVICE_PROCESSOR_COUNT} (device.processor_count) instead - Old namespace-less attribute, to be replaced with device.processor_count for span-first future
 * @example "14"
 */
export const HARDWARECONCURRENCY = 'hardwareConcurrency';

/**
 * Type for {@link HARDWARECONCURRENCY} hardwareConcurrency
 */
export type HARDWARECONCURRENCY_TYPE = string;

// Path: model/attributes/http/http__client_ip.json

/**
 * Client address - domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name. `http.client_ip`
 *
 * Attribute Value Type: `string` {@link HTTP_CLIENT_IP_TYPE}
 *
 * Apply Scrubbing: auto
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: auto
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * Aliases: {@link HTTP_REQUEST_METHOD} `http.request.method`, {@link _HTTP_REQUEST_METHOD} `http.request_method`, {@link METHOD} `method`
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
 * Apply Scrubbing: auto - Query string values can contain sensitive information. Clients should attempt to scrub parameters that might contain sensitive information.
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "?foo=bar&bar=baz"
 */
export const HTTP_QUERY = 'http.query';

/**
 * Type for {@link HTTP_QUERY} http.query
 */
export type HTTP_QUERY_TYPE = string;

// Path: model/attributes/http/http__request__body__data.json

/**
 * HTTP request body data. Can be given as string or structural data of any format. `http.request.body.data`
 *
 * Attribute Value Type: `string` {@link HTTP_REQUEST_BODY_DATA_TYPE}
 *
 * Apply Scrubbing: auto
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "[{\"role\": \"user\", \"message\": \"hello\"}]"
 */
export const HTTP_REQUEST_BODY_DATA = 'http.request.body.data';

/**
 * Type for {@link HTTP_REQUEST_BODY_DATA} http.request.body.data
 */
export type HTTP_REQUEST_BODY_DATA_TYPE = string;

// Path: model/attributes/http/http__request__connection_end.json

/**
 * The UNIX timestamp representing the time immediately after the browser finishes establishing the connection to the server to retrieve the resource. The timestamp value includes the time interval to establish the transport connection, as well as other time intervals such as TLS handshake and SOCKS authentication. `http.request.connection_end`
 *
 * Attribute Value Type: `number` {@link HTTP_REQUEST_CONNECTION_END_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example 1732829555.15
 */
export const HTTP_REQUEST_CONNECTION_END = 'http.request.connection_end';

/**
 * Type for {@link HTTP_REQUEST_CONNECTION_END} http.request.connection_end
 */
export type HTTP_REQUEST_CONNECTION_END_TYPE = number;

// Path: model/attributes/http/http__request__connect_start.json

/**
 * The UNIX timestamp representing the time immediately before the user agent starts establishing the connection to the server to retrieve the resource. `http.request.connect_start`
 *
 * Attribute Value Type: `number` {@link HTTP_REQUEST_CONNECT_START_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example 1732829555.111
 */
export const HTTP_REQUEST_CONNECT_START = 'http.request.connect_start';

/**
 * Type for {@link HTTP_REQUEST_CONNECT_START} http.request.connect_start
 */
export type HTTP_REQUEST_CONNECT_START_TYPE = number;

// Path: model/attributes/http/http__request__domain_lookup_end.json

/**
 * The UNIX timestamp representing the time immediately after the browser finishes the domain-name lookup for the resource. `http.request.domain_lookup_end`
 *
 * Attribute Value Type: `number` {@link HTTP_REQUEST_DOMAIN_LOOKUP_END_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * Apply Scrubbing: auto
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * Has Dynamic Suffix: true
 *
 * @example "http.request.header.custom-header=['foo', 'bar']"
 */
export const HTTP_REQUEST_HEADER_KEY = 'http.request.header.<key>';

/**
 * Base key for {@link HTTP_REQUEST_HEADER_KEY}. Use with a dynamic suffix, e.g. `${HTTP_REQUEST_HEADER_KEY_BASE}.${key}`.
 */
export const HTTP_REQUEST_HEADER_KEY_BASE = 'http.request.header';

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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * Aliases: {@link METHOD} `method`, {@link HTTP_METHOD} `http.method`, {@link _HTTP_REQUEST_METHOD} `http.request_method`
 *
 * @example "GET"
 */
export const HTTP_REQUEST_METHOD = 'http.request.method';

/**
 * Type for {@link HTTP_REQUEST_METHOD} http.request.method
 */
export type HTTP_REQUEST_METHOD_TYPE = string;

// Path: model/attributes/http/http__request_method.json

/**
 * The HTTP method used. `http.request_method`
 *
 * Attribute Value Type: `string` {@link _HTTP_REQUEST_METHOD_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link METHOD} `method`, {@link HTTP_METHOD} `http.method`, {@link HTTP_REQUEST_METHOD} `http.request.method`
 *
 * @deprecated Use {@link HTTP_REQUEST_METHOD} (http.request.method) instead
 * @example "GET"
 */
export const _HTTP_REQUEST_METHOD = 'http.request_method';

/**
 * Type for {@link _HTTP_REQUEST_METHOD} http.request_method
 */
export type _HTTP_REQUEST_METHOD_TYPE = string;

// Path: model/attributes/http/http__request__redirect_end.json

/**
 * The UNIX timestamp representing the timestamp immediately after receiving the last byte of the response of the last redirect `http.request.redirect_end`
 *
 * Attribute Value Type: `number` {@link HTTP_REQUEST_REDIRECT_END_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example 1732829555.7
 */
export const HTTP_REQUEST_RESPONSE_START = 'http.request.response_start';

/**
 * Type for {@link HTTP_REQUEST_RESPONSE_START} http.request.response_start
 */
export type HTTP_REQUEST_RESPONSE_START_TYPE = number;

// Path: model/attributes/http/http__request__same_origin.json

/**
 * Indicates that a URL has the same origin as the current page's origin in the browser. `http.request.same_origin`
 *
 * Attribute Value Type: `boolean` {@link HTTP_REQUEST_SAME_ORIGIN_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link URL_SAME_ORIGIN} `url.same_origin`
 *
 * @example true
 */
export const HTTP_REQUEST_SAME_ORIGIN = 'http.request.same_origin';

/**
 * Type for {@link HTTP_REQUEST_SAME_ORIGIN} http.request.same_origin
 */
export type HTTP_REQUEST_SAME_ORIGIN_TYPE = boolean;

// Path: model/attributes/http/http__request__secure_connection_start.json

/**
 * The UNIX timestamp representing the time immediately before the browser starts the handshake process to secure the current connection. If a secure connection is not used, the property returns zero. `http.request.secure_connection_start`
 *
 * Attribute Value Type: `number` {@link HTTP_REQUEST_SECURE_CONNECTION_START_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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

// Path: model/attributes/http/http__response_content_length.json

/**
 * The encoded body size of the response (in bytes). `http.response_content_length`
 *
 * Attribute Value Type: `number` {@link HTTP_RESPONSE_CONTENT_LENGTH_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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

// Path: model/attributes/http/http__response__header__content-length.json

/**
 * The size of the message body sent to the recipient (in bytes) `http.response.header.content-length`
 *
 * Attribute Value Type: `string` {@link HTTP_RESPONSE_HEADER_CONTENT_LENGTH_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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

// Path: model/attributes/http/http__response__header__[key].json

/**
 * HTTP response headers, <key> being the normalized HTTP Header name (lowercase), the value being the header values. `http.response.header.<key>`
 *
 * Attribute Value Type: `Array<string>` {@link HTTP_RESPONSE_HEADER_KEY_TYPE}
 *
 * Apply Scrubbing: auto
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * Has Dynamic Suffix: true
 *
 * @example "http.response.header.custom-header=['foo', 'bar']"
 */
export const HTTP_RESPONSE_HEADER_KEY = 'http.response.header.<key>';

/**
 * Base key for {@link HTTP_RESPONSE_HEADER_KEY}. Use with a dynamic suffix, e.g. `${HTTP_RESPONSE_HEADER_KEY_BASE}.${key}`.
 */
export const HTTP_RESPONSE_HEADER_KEY_BASE = 'http.response.header';

/**
 * Type for {@link HTTP_RESPONSE_HEADER_KEY} http.response.header.<key>
 */
export type HTTP_RESPONSE_HEADER_KEY_TYPE = Array<string>;

// Path: model/attributes/http/http__response__size.json

/**
 * The transfer size of the response (in bytes). `http.response.size`
 *
 * Attribute Value Type: `number` {@link HTTP_RESPONSE_SIZE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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

// Path: model/attributes/http/http__response_transfer_size.json

/**
 * The transfer size of the response (in bytes). `http.response_transfer_size`
 *
 * Attribute Value Type: `number` {@link HTTP_RESPONSE_TRANSFER_SIZE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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

// Path: model/attributes/http/http__server__request__time_in_queue.json

/**
 * The time in milliseconds the request spent in the server queue before processing began. Measured from the X-Request-Start header set by reverse proxies (e.g., Nginx, HAProxy, Heroku) to when the application started handling the request. `http.server.request.time_in_queue`
 *
 * Attribute Value Type: `number` {@link HTTP_SERVER_REQUEST_TIME_IN_QUEUE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example 50
 */
export const HTTP_SERVER_REQUEST_TIME_IN_QUEUE = 'http.server.request.time_in_queue';

/**
 * Type for {@link HTTP_SERVER_REQUEST_TIME_IN_QUEUE} http.server.request.time_in_queue
 */
export type HTTP_SERVER_REQUEST_TIME_IN_QUEUE_TYPE = number;

// Path: model/attributes/http/http__status_code.json

/**
 * The status code of the HTTP response. `http.status_code`
 *
 * Attribute Value Type: `number` {@link HTTP_STATUS_CODE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: auto
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: auto
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: never
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "f47ac10b58cc4372a5670e02b2c3d479"
 */
export const ID = 'id';

/**
 * Type for {@link ID} id
 */
export type ID_TYPE = string;

// Path: model/attributes/inp.json

/**
 * The value of the recorded Interaction to Next Paint (INP) web vital `inp`
 *
 * Attribute Value Type: `number` {@link INP_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link BROWSER_WEB_VITAL_INP_VALUE} `browser.web_vital.inp.value`
 *
 * @deprecated Use {@link BROWSER_WEB_VITAL_INP_VALUE} (browser.web_vital.inp.value) instead - The INP web vital is now recorded as a browser.web_vital.inp.value attribute.
 * @example 200
 */
export const INP = 'inp';

/**
 * Type for {@link INP} inp
 */
export type INP_TYPE = number;

// Path: model/attributes/jsonrpc/jsonrpc__protocol__version.json

/**
 * The version of the JSON-RPC protocol used. `jsonrpc.protocol.version`
 *
 * Attribute Value Type: `string` {@link JSONRPC_PROTOCOL_VERSION_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * @example "2.0"
 */
export const JSONRPC_PROTOCOL_VERSION = 'jsonrpc.protocol.version';

/**
 * Type for {@link JSONRPC_PROTOCOL_VERSION} jsonrpc.protocol.version
 */
export type JSONRPC_PROTOCOL_VERSION_TYPE = string;

// Path: model/attributes/jsonrpc/jsonrpc__request__id.json

/**
 * The JSON-RPC request identifier. Unique within the session. `jsonrpc.request.id`
 *
 * Attribute Value Type: `string` {@link JSONRPC_REQUEST_ID_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * Aliases: {@link MCP_REQUEST_ID} `mcp.request.id`
 *
 * @example "1"
 */
export const JSONRPC_REQUEST_ID = 'jsonrpc.request.id';

/**
 * Type for {@link JSONRPC_REQUEST_ID} jsonrpc.request.id
 */
export type JSONRPC_REQUEST_ID_TYPE = string;

// Path: model/attributes/jvm/jvm__gc__action.json

/**
 * Name of the garbage collector action. `jvm.gc.action`
 *
 * Attribute Value Type: `string` {@link JVM_GC_ACTION_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * @example "blocked"
 */
export const JVM_THREAD_STATE = 'jvm.thread.state';

/**
 * Type for {@link JVM_THREAD_STATE} jvm.thread.state
 */
export type JVM_THREAD_STATE_TYPE = string;

// Path: model/attributes/lcp.json

/**
 * The value of the recorded Largest Contentful Paint (LCP) web vital `lcp`
 *
 * Attribute Value Type: `number` {@link LCP_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link BROWSER_WEB_VITAL_LCP_VALUE} `browser.web_vital.lcp.value`
 *
 * @deprecated Use {@link BROWSER_WEB_VITAL_LCP_VALUE} (browser.web_vital.lcp.value) instead - The LCP web vital is now recorded as a browser.web_vital.lcp.value attribute.
 * @example 2500
 */
export const LCP = 'lcp';

/**
 * Type for {@link LCP} lcp
 */
export type LCP_TYPE = number;

// Path: model/attributes/lcp/lcp__element.json

/**
 * The dom element responsible for the largest contentful paint. `lcp.element`
 *
 * Attribute Value Type: `string` {@link LCP_ELEMENT_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link BROWSER_WEB_VITAL_LCP_ELEMENT} `browser.web_vital.lcp.element`
 *
 * @deprecated Use {@link BROWSER_WEB_VITAL_LCP_ELEMENT} (browser.web_vital.lcp.element) instead - The LCP element is now recorded as a browser.web_vital.lcp.element attribute.
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link BROWSER_WEB_VITAL_LCP_ID} `browser.web_vital.lcp.id`
 *
 * @deprecated Use {@link BROWSER_WEB_VITAL_LCP_ID} (browser.web_vital.lcp.id) instead - The LCP id is now recorded as a browser.web_vital.lcp.id attribute.
 * @example "#hero"
 */
export const LCP_ID = 'lcp.id';

/**
 * Type for {@link LCP_ID} lcp.id
 */
export type LCP_ID_TYPE = string;

// Path: model/attributes/lcp/lcp__loadTime.json

/**
 * The time it took for the LCP element to be loaded `lcp.loadTime`
 *
 * Attribute Value Type: `number` {@link LCP_LOADTIME_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link BROWSER_WEB_VITAL_LCP_LOAD_TIME} `browser.web_vital.lcp.load_time`
 *
 * @deprecated Use {@link BROWSER_WEB_VITAL_LCP_LOAD_TIME} (browser.web_vital.lcp.load_time) instead - The LCP load time is now recorded as a browser.web_vital.lcp.load_time attribute.
 * @example 1402
 */
export const LCP_LOADTIME = 'lcp.loadTime';

/**
 * Type for {@link LCP_LOADTIME} lcp.loadTime
 */
export type LCP_LOADTIME_TYPE = number;

// Path: model/attributes/lcp/lcp__renderTime.json

/**
 * The time it took for the LCP element to be rendered `lcp.renderTime`
 *
 * Attribute Value Type: `number` {@link LCP_RENDERTIME_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link BROWSER_WEB_VITAL_LCP_RENDER_TIME} `browser.web_vital.lcp.render_time`
 *
 * @deprecated Use {@link BROWSER_WEB_VITAL_LCP_RENDER_TIME} (browser.web_vital.lcp.render_time) instead - The LCP render time is now recorded as a browser.web_vital.lcp.render_time attribute.
 * @example 1685
 */
export const LCP_RENDERTIME = 'lcp.renderTime';

/**
 * Type for {@link LCP_RENDERTIME} lcp.renderTime
 */
export type LCP_RENDERTIME_TYPE = number;

// Path: model/attributes/lcp/lcp__size.json

/**
 * The size of the largest contentful paint element. `lcp.size`
 *
 * Attribute Value Type: `number` {@link LCP_SIZE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link BROWSER_WEB_VITAL_LCP_SIZE} `browser.web_vital.lcp.size`
 *
 * @deprecated Use {@link BROWSER_WEB_VITAL_LCP_SIZE} (browser.web_vital.lcp.size) instead - The LCP size is now recorded as a browser.web_vital.lcp.size attribute.
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
 * Apply Scrubbing: auto
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link BROWSER_WEB_VITAL_LCP_URL} `browser.web_vital.lcp.url`
 *
 * @deprecated Use {@link BROWSER_WEB_VITAL_LCP_URL} (browser.web_vital.lcp.url) instead - The LCP url is now recorded as a browser.web_vital.lcp.url attribute.
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "myLogger"
 */
export const LOGGER_NAME = 'logger.name';

/**
 * Type for {@link LOGGER_NAME} logger.name
 */
export type LOGGER_NAME_TYPE = string;

// Path: model/attributes/mcp/mcp__cancelled__reason.json

/**
 * Reason for the cancellation of an MCP operation. `mcp.cancelled.reason`
 *
 * Attribute Value Type: `string` {@link MCP_CANCELLED_REASON_TYPE}
 *
 * Apply Scrubbing: manual - Cancellation reasons may contain user-specific or sensitive information
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "User cancelled the request"
 */
export const MCP_CANCELLED_REASON = 'mcp.cancelled.reason';

/**
 * Type for {@link MCP_CANCELLED_REASON} mcp.cancelled.reason
 */
export type MCP_CANCELLED_REASON_TYPE = string;

// Path: model/attributes/mcp/mcp__cancelled__request_id.json

/**
 * Request ID of the cancelled MCP operation. `mcp.cancelled.request_id`
 *
 * Attribute Value Type: `string` {@link MCP_CANCELLED_REQUEST_ID_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "123"
 */
export const MCP_CANCELLED_REQUEST_ID = 'mcp.cancelled.request_id';

/**
 * Type for {@link MCP_CANCELLED_REQUEST_ID} mcp.cancelled.request_id
 */
export type MCP_CANCELLED_REQUEST_ID_TYPE = string;

// Path: model/attributes/mcp/mcp__client__name.json

/**
 * Name of the MCP client application. `mcp.client.name`
 *
 * Attribute Value Type: `string` {@link MCP_CLIENT_NAME_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "claude-desktop"
 */
export const MCP_CLIENT_NAME = 'mcp.client.name';

/**
 * Type for {@link MCP_CLIENT_NAME} mcp.client.name
 */
export type MCP_CLIENT_NAME_TYPE = string;

// Path: model/attributes/mcp/mcp__client__title.json

/**
 * Display title of the MCP client application. `mcp.client.title`
 *
 * Attribute Value Type: `string` {@link MCP_CLIENT_TITLE_TYPE}
 *
 * Apply Scrubbing: manual - Client titles may reveal user-specific application configurations or custom setups
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "Claude Desktop"
 */
export const MCP_CLIENT_TITLE = 'mcp.client.title';

/**
 * Type for {@link MCP_CLIENT_TITLE} mcp.client.title
 */
export type MCP_CLIENT_TITLE_TYPE = string;

// Path: model/attributes/mcp/mcp__client__version.json

/**
 * Version of the MCP client application. `mcp.client.version`
 *
 * Attribute Value Type: `string` {@link MCP_CLIENT_VERSION_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "1.0.0"
 */
export const MCP_CLIENT_VERSION = 'mcp.client.version';

/**
 * Type for {@link MCP_CLIENT_VERSION} mcp.client.version
 */
export type MCP_CLIENT_VERSION_TYPE = string;

// Path: model/attributes/mcp/mcp__lifecycle__phase.json

/**
 * Lifecycle phase indicator for MCP operations. `mcp.lifecycle.phase`
 *
 * Attribute Value Type: `string` {@link MCP_LIFECYCLE_PHASE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "initialization_complete"
 */
export const MCP_LIFECYCLE_PHASE = 'mcp.lifecycle.phase';

/**
 * Type for {@link MCP_LIFECYCLE_PHASE} mcp.lifecycle.phase
 */
export type MCP_LIFECYCLE_PHASE_TYPE = string;

// Path: model/attributes/mcp/mcp__logging__data_type.json

/**
 * Data type of the logged message content. `mcp.logging.data_type`
 *
 * Attribute Value Type: `string` {@link MCP_LOGGING_DATA_TYPE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "string"
 */
export const MCP_LOGGING_DATA_TYPE = 'mcp.logging.data_type';

/**
 * Type for {@link MCP_LOGGING_DATA_TYPE} mcp.logging.data_type
 */
export type MCP_LOGGING_DATA_TYPE_TYPE = string;

// Path: model/attributes/mcp/mcp__logging__level.json

/**
 * Log level for MCP logging operations. `mcp.logging.level`
 *
 * Attribute Value Type: `string` {@link MCP_LOGGING_LEVEL_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "info"
 */
export const MCP_LOGGING_LEVEL = 'mcp.logging.level';

/**
 * Type for {@link MCP_LOGGING_LEVEL} mcp.logging.level
 */
export type MCP_LOGGING_LEVEL_TYPE = string;

// Path: model/attributes/mcp/mcp__logging__logger.json

/**
 * Logger name for MCP logging operations. `mcp.logging.logger`
 *
 * Attribute Value Type: `string` {@link MCP_LOGGING_LOGGER_TYPE}
 *
 * Apply Scrubbing: manual - Logger names may be user-defined and could contain sensitive information
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "mcp_server"
 */
export const MCP_LOGGING_LOGGER = 'mcp.logging.logger';

/**
 * Type for {@link MCP_LOGGING_LOGGER} mcp.logging.logger
 */
export type MCP_LOGGING_LOGGER_TYPE = string;

// Path: model/attributes/mcp/mcp__logging__message.json

/**
 * Log message content from MCP logging operations. `mcp.logging.message`
 *
 * Attribute Value Type: `string` {@link MCP_LOGGING_MESSAGE_TYPE}
 *
 * Apply Scrubbing: auto - Log messages can contain user data
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "Tool execution completed successfully"
 */
export const MCP_LOGGING_MESSAGE = 'mcp.logging.message';

/**
 * Type for {@link MCP_LOGGING_MESSAGE} mcp.logging.message
 */
export type MCP_LOGGING_MESSAGE_TYPE = string;

// Path: model/attributes/mcp/mcp__method__name.json

/**
 * The name of the MCP request or notification method being called. `mcp.method.name`
 *
 * Attribute Value Type: `string` {@link MCP_METHOD_NAME_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * @example "tools/call"
 */
export const MCP_METHOD_NAME = 'mcp.method.name';

/**
 * Type for {@link MCP_METHOD_NAME} mcp.method.name
 */
export type MCP_METHOD_NAME_TYPE = string;

// Path: model/attributes/mcp/mcp__progress__current.json

/**
 * Current progress value of an MCP operation. `mcp.progress.current`
 *
 * Attribute Value Type: `number` {@link MCP_PROGRESS_CURRENT_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example 50
 */
export const MCP_PROGRESS_CURRENT = 'mcp.progress.current';

/**
 * Type for {@link MCP_PROGRESS_CURRENT} mcp.progress.current
 */
export type MCP_PROGRESS_CURRENT_TYPE = number;

// Path: model/attributes/mcp/mcp__progress__message.json

/**
 * Progress message describing the current state of an MCP operation. `mcp.progress.message`
 *
 * Attribute Value Type: `string` {@link MCP_PROGRESS_MESSAGE_TYPE}
 *
 * Apply Scrubbing: manual - Progress messages may contain user-specific or sensitive information
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "Processing 50 of 100 items"
 */
export const MCP_PROGRESS_MESSAGE = 'mcp.progress.message';

/**
 * Type for {@link MCP_PROGRESS_MESSAGE} mcp.progress.message
 */
export type MCP_PROGRESS_MESSAGE_TYPE = string;

// Path: model/attributes/mcp/mcp__progress__percentage.json

/**
 * Calculated progress percentage of an MCP operation. Computed from current/total * 100. `mcp.progress.percentage`
 *
 * Attribute Value Type: `number` {@link MCP_PROGRESS_PERCENTAGE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example 50
 */
export const MCP_PROGRESS_PERCENTAGE = 'mcp.progress.percentage';

/**
 * Type for {@link MCP_PROGRESS_PERCENTAGE} mcp.progress.percentage
 */
export type MCP_PROGRESS_PERCENTAGE_TYPE = number;

// Path: model/attributes/mcp/mcp__progress__token.json

/**
 * Token for tracking progress of an MCP operation. `mcp.progress.token`
 *
 * Attribute Value Type: `string` {@link MCP_PROGRESS_TOKEN_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "progress-token-123"
 */
export const MCP_PROGRESS_TOKEN = 'mcp.progress.token';

/**
 * Type for {@link MCP_PROGRESS_TOKEN} mcp.progress.token
 */
export type MCP_PROGRESS_TOKEN_TYPE = string;

// Path: model/attributes/mcp/mcp__progress__total.json

/**
 * Total progress target value of an MCP operation. `mcp.progress.total`
 *
 * Attribute Value Type: `number` {@link MCP_PROGRESS_TOTAL_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example 100
 */
export const MCP_PROGRESS_TOTAL = 'mcp.progress.total';

/**
 * Type for {@link MCP_PROGRESS_TOTAL} mcp.progress.total
 */
export type MCP_PROGRESS_TOTAL_TYPE = number;

// Path: model/attributes/mcp/mcp__prompt__name.json

/**
 * Name of the MCP prompt template being used. `mcp.prompt.name`
 *
 * Attribute Value Type: `string` {@link MCP_PROMPT_NAME_TYPE}
 *
 * Apply Scrubbing: manual - Prompt names may reveal user behavior patterns or sensitive operations
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link GEN_AI_PROMPT_NAME} `gen_ai.prompt.name`
 *
 * @deprecated Use {@link GEN_AI_PROMPT_NAME} (gen_ai.prompt.name) instead - OTel uses gen_ai.prompt.name for MCP prompt names
 * @example "summarize"
 */
export const MCP_PROMPT_NAME = 'mcp.prompt.name';

/**
 * Type for {@link MCP_PROMPT_NAME} mcp.prompt.name
 */
export type MCP_PROMPT_NAME_TYPE = string;

// Path: model/attributes/mcp/mcp__prompt__result__description.json

/**
 * Description of the prompt result. `mcp.prompt.result.description`
 *
 * Attribute Value Type: `string` {@link MCP_PROMPT_RESULT_DESCRIPTION_TYPE}
 *
 * Apply Scrubbing: auto
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "A summary of the requested information"
 */
export const MCP_PROMPT_RESULT_DESCRIPTION = 'mcp.prompt.result.description';

/**
 * Type for {@link MCP_PROMPT_RESULT_DESCRIPTION} mcp.prompt.result.description
 */
export type MCP_PROMPT_RESULT_DESCRIPTION_TYPE = string;

// Path: model/attributes/mcp/mcp__prompt__result__message_content.json

/**
 * Content of the message in the prompt result. Used for single message results only. `mcp.prompt.result.message_content`
 *
 * Attribute Value Type: `string` {@link MCP_PROMPT_RESULT_MESSAGE_CONTENT_TYPE}
 *
 * Apply Scrubbing: auto
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "Please provide a summary of the document"
 */
export const MCP_PROMPT_RESULT_MESSAGE_CONTENT = 'mcp.prompt.result.message_content';

/**
 * Type for {@link MCP_PROMPT_RESULT_MESSAGE_CONTENT} mcp.prompt.result.message_content
 */
export type MCP_PROMPT_RESULT_MESSAGE_CONTENT_TYPE = string;

// Path: model/attributes/mcp/mcp__prompt__result__message_count.json

/**
 * Number of messages in the prompt result. `mcp.prompt.result.message_count`
 *
 * Attribute Value Type: `number` {@link MCP_PROMPT_RESULT_MESSAGE_COUNT_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example 3
 */
export const MCP_PROMPT_RESULT_MESSAGE_COUNT = 'mcp.prompt.result.message_count';

/**
 * Type for {@link MCP_PROMPT_RESULT_MESSAGE_COUNT} mcp.prompt.result.message_count
 */
export type MCP_PROMPT_RESULT_MESSAGE_COUNT_TYPE = number;

// Path: model/attributes/mcp/mcp__prompt__result__message_role.json

/**
 * Role of the message in the prompt result. Used for single message results only. `mcp.prompt.result.message_role`
 *
 * Attribute Value Type: `string` {@link MCP_PROMPT_RESULT_MESSAGE_ROLE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "user"
 */
export const MCP_PROMPT_RESULT_MESSAGE_ROLE = 'mcp.prompt.result.message_role';

/**
 * Type for {@link MCP_PROMPT_RESULT_MESSAGE_ROLE} mcp.prompt.result.message_role
 */
export type MCP_PROMPT_RESULT_MESSAGE_ROLE_TYPE = string;

// Path: model/attributes/mcp/mcp__protocol__ready.json

/**
 * Protocol readiness indicator for MCP session. Non-zero value indicates the protocol is ready. `mcp.protocol.ready`
 *
 * Attribute Value Type: `number` {@link MCP_PROTOCOL_READY_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example 1
 */
export const MCP_PROTOCOL_READY = 'mcp.protocol.ready';

/**
 * Type for {@link MCP_PROTOCOL_READY} mcp.protocol.ready
 */
export type MCP_PROTOCOL_READY_TYPE = number;

// Path: model/attributes/mcp/mcp__protocol__version.json

/**
 * MCP protocol version used in the session. `mcp.protocol.version`
 *
 * Attribute Value Type: `string` {@link MCP_PROTOCOL_VERSION_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * @example "2024-11-05"
 */
export const MCP_PROTOCOL_VERSION = 'mcp.protocol.version';

/**
 * Type for {@link MCP_PROTOCOL_VERSION} mcp.protocol.version
 */
export type MCP_PROTOCOL_VERSION_TYPE = string;

// Path: model/attributes/mcp/mcp__request__argument__[key].json

/**
 * MCP request argument with dynamic key suffix. The <key> is replaced with the actual argument name. The value is a JSON-stringified representation of the argument value. `mcp.request.argument.<key>`
 *
 * Attribute Value Type: `string` {@link MCP_REQUEST_ARGUMENT_KEY_TYPE}
 *
 * Apply Scrubbing: auto - Arguments contain user input
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Has Dynamic Suffix: true
 *
 * @example "mcp.request.argument.query='weather in Paris'"
 */
export const MCP_REQUEST_ARGUMENT_KEY = 'mcp.request.argument.<key>';

/**
 * Base key for {@link MCP_REQUEST_ARGUMENT_KEY}. Use with a dynamic suffix, e.g. `${MCP_REQUEST_ARGUMENT_KEY_BASE}.${key}`.
 */
export const MCP_REQUEST_ARGUMENT_KEY_BASE = 'mcp.request.argument';

/**
 * Type for {@link MCP_REQUEST_ARGUMENT_KEY} mcp.request.argument.<key>
 */
export type MCP_REQUEST_ARGUMENT_KEY_TYPE = string;

// Path: model/attributes/mcp/mcp__request__argument__name.json

/**
 * Name argument from prompts/get MCP request. `mcp.request.argument.name`
 *
 * Attribute Value Type: `string` {@link MCP_REQUEST_ARGUMENT_NAME_TYPE}
 *
 * Apply Scrubbing: auto - Prompt names can contain user input
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "summarize"
 */
export const MCP_REQUEST_ARGUMENT_NAME = 'mcp.request.argument.name';

/**
 * Type for {@link MCP_REQUEST_ARGUMENT_NAME} mcp.request.argument.name
 */
export type MCP_REQUEST_ARGUMENT_NAME_TYPE = string;

// Path: model/attributes/mcp/mcp__request__argument__uri.json

/**
 * URI argument from resources/read MCP request. `mcp.request.argument.uri`
 *
 * Attribute Value Type: `string` {@link MCP_REQUEST_ARGUMENT_URI_TYPE}
 *
 * Apply Scrubbing: auto - URIs can contain user file paths
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "file:///path/to/resource"
 */
export const MCP_REQUEST_ARGUMENT_URI = 'mcp.request.argument.uri';

/**
 * Type for {@link MCP_REQUEST_ARGUMENT_URI} mcp.request.argument.uri
 */
export type MCP_REQUEST_ARGUMENT_URI_TYPE = string;

// Path: model/attributes/mcp/mcp__request__id.json

/**
 * JSON-RPC request identifier for the MCP request. Unique within the MCP session. `mcp.request.id`
 *
 * Attribute Value Type: `string` {@link MCP_REQUEST_ID_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link JSONRPC_REQUEST_ID} `jsonrpc.request.id`
 *
 * @deprecated Use {@link JSONRPC_REQUEST_ID} (jsonrpc.request.id) instead - OTel models MCP as JSON-RPC, uses jsonrpc.request.id
 * @example "1"
 */
export const MCP_REQUEST_ID = 'mcp.request.id';

/**
 * Type for {@link MCP_REQUEST_ID} mcp.request.id
 */
export type MCP_REQUEST_ID_TYPE = string;

// Path: model/attributes/mcp/mcp__resource__protocol.json

/**
 * Protocol of the resource URI being accessed, extracted from the URI. `mcp.resource.protocol`
 *
 * Attribute Value Type: `string` {@link MCP_RESOURCE_PROTOCOL_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link NETWORK_PROTOCOL_NAME} `network.protocol.name`, {@link NET_PROTOCOL_NAME} `net.protocol.name`
 *
 * @deprecated Use {@link NETWORK_PROTOCOL_NAME} (network.protocol.name) instead - OTel uses the generic network.protocol.name attribute
 * @example "file"
 */
export const MCP_RESOURCE_PROTOCOL = 'mcp.resource.protocol';

/**
 * Type for {@link MCP_RESOURCE_PROTOCOL} mcp.resource.protocol
 */
export type MCP_RESOURCE_PROTOCOL_TYPE = string;

// Path: model/attributes/mcp/mcp__resource__uri.json

/**
 * The resource URI being accessed in an MCP operation. `mcp.resource.uri`
 *
 * Attribute Value Type: `string` {@link MCP_RESOURCE_URI_TYPE}
 *
 * Apply Scrubbing: auto - URIs can contain sensitive file paths
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * @example "file:///path/to/file.txt"
 */
export const MCP_RESOURCE_URI = 'mcp.resource.uri';

/**
 * Type for {@link MCP_RESOURCE_URI} mcp.resource.uri
 */
export type MCP_RESOURCE_URI_TYPE = string;

// Path: model/attributes/mcp/mcp__server__name.json

/**
 * Name of the MCP server application. `mcp.server.name`
 *
 * Attribute Value Type: `string` {@link MCP_SERVER_NAME_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "sentry-mcp-server"
 */
export const MCP_SERVER_NAME = 'mcp.server.name';

/**
 * Type for {@link MCP_SERVER_NAME} mcp.server.name
 */
export type MCP_SERVER_NAME_TYPE = string;

// Path: model/attributes/mcp/mcp__server__title.json

/**
 * Display title of the MCP server application. `mcp.server.title`
 *
 * Attribute Value Type: `string` {@link MCP_SERVER_TITLE_TYPE}
 *
 * Apply Scrubbing: manual - Server titles may reveal user-specific application configurations or custom setups
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "Sentry MCP Server"
 */
export const MCP_SERVER_TITLE = 'mcp.server.title';

/**
 * Type for {@link MCP_SERVER_TITLE} mcp.server.title
 */
export type MCP_SERVER_TITLE_TYPE = string;

// Path: model/attributes/mcp/mcp__server__version.json

/**
 * Version of the MCP server application. `mcp.server.version`
 *
 * Attribute Value Type: `string` {@link MCP_SERVER_VERSION_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "0.1.0"
 */
export const MCP_SERVER_VERSION = 'mcp.server.version';

/**
 * Type for {@link MCP_SERVER_VERSION} mcp.server.version
 */
export type MCP_SERVER_VERSION_TYPE = string;

// Path: model/attributes/mcp/mcp__session__id.json

/**
 * Identifier for the MCP session. `mcp.session.id`
 *
 * Attribute Value Type: `string` {@link MCP_SESSION_ID_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * @example "550e8400-e29b-41d4-a716-446655440000"
 */
export const MCP_SESSION_ID = 'mcp.session.id';

/**
 * Type for {@link MCP_SESSION_ID} mcp.session.id
 */
export type MCP_SESSION_ID_TYPE = string;

// Path: model/attributes/mcp/mcp__tool__name.json

/**
 * Name of the MCP tool being called. `mcp.tool.name`
 *
 * Attribute Value Type: `string` {@link MCP_TOOL_NAME_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link GEN_AI_TOOL_NAME} `gen_ai.tool.name`, {@link AI_FUNCTION_CALL} `ai.function_call`
 *
 * @deprecated Use {@link GEN_AI_TOOL_NAME} (gen_ai.tool.name) instead - OTel uses gen_ai.tool.name for MCP tool names
 * @example "calculator"
 */
export const MCP_TOOL_NAME = 'mcp.tool.name';

/**
 * Type for {@link MCP_TOOL_NAME} mcp.tool.name
 */
export type MCP_TOOL_NAME_TYPE = string;

// Path: model/attributes/mcp/mcp__tool__result__content.json

/**
 * The content of the tool result. `mcp.tool.result.content`
 *
 * Attribute Value Type: `string` {@link MCP_TOOL_RESULT_CONTENT_TYPE}
 *
 * Apply Scrubbing: auto - Tool results can contain user data
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link GEN_AI_TOOL_CALL_RESULT} `gen_ai.tool.call.result`, {@link GEN_AI_TOOL_MESSAGE} `gen_ai.tool.message`, {@link GEN_AI_TOOL_OUTPUT} `gen_ai.tool.output`
 *
 * @deprecated Use {@link GEN_AI_TOOL_CALL_RESULT} (gen_ai.tool.call.result) instead - OTel uses gen_ai.tool.call.result for MCP tool results
 * @example "{\"output\": \"rainy\", \"toolCallId\": \"1\"}"
 */
export const MCP_TOOL_RESULT_CONTENT = 'mcp.tool.result.content';

/**
 * Type for {@link MCP_TOOL_RESULT_CONTENT} mcp.tool.result.content
 */
export type MCP_TOOL_RESULT_CONTENT_TYPE = string;

// Path: model/attributes/mcp/mcp__tool__result__content_count.json

/**
 * Number of content items in the tool result. `mcp.tool.result.content_count`
 *
 * Attribute Value Type: `number` {@link MCP_TOOL_RESULT_CONTENT_COUNT_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example 1
 */
export const MCP_TOOL_RESULT_CONTENT_COUNT = 'mcp.tool.result.content_count';

/**
 * Type for {@link MCP_TOOL_RESULT_CONTENT_COUNT} mcp.tool.result.content_count
 */
export type MCP_TOOL_RESULT_CONTENT_COUNT_TYPE = number;

// Path: model/attributes/mcp/mcp__tool__result__is_error.json

/**
 * Whether a tool execution resulted in an error. `mcp.tool.result.is_error`
 *
 * Attribute Value Type: `boolean` {@link MCP_TOOL_RESULT_IS_ERROR_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @deprecated Use {@link ERROR_TYPE} (error.type) instead - OTel uses error.type set to 'tool_error' when isError is true. Cannot be automatically backfilled due to type mismatch (boolean vs string).
 * @example false
 */
export const MCP_TOOL_RESULT_IS_ERROR = 'mcp.tool.result.is_error';

/**
 * Type for {@link MCP_TOOL_RESULT_IS_ERROR} mcp.tool.result.is_error
 */
export type MCP_TOOL_RESULT_IS_ERROR_TYPE = boolean;

// Path: model/attributes/mcp/mcp__transport.json

/**
 * Transport method used for MCP communication. `mcp.transport`
 *
 * Attribute Value Type: `string` {@link MCP_TRANSPORT_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link NETWORK_TRANSPORT} `network.transport`, {@link NET_TRANSPORT} `net.transport`
 *
 * @deprecated Use {@link NETWORK_TRANSPORT} (network.transport) instead - OTel uses the generic network.transport attribute
 * @example "stdio"
 */
export const MCP_TRANSPORT = 'mcp.transport';

/**
 * Type for {@link MCP_TRANSPORT} mcp.transport
 */
export type MCP_TRANSPORT_TYPE = string;

// Path: model/attributes/mdc/mdc__[key].json

/**
 * Attributes from the Mapped Diagnostic Context (MDC) present at the moment the log record was created. The MDC is supported by all the most popular logging solutions in the Java ecosystem, and it's usually implemented as a thread-local map that stores context for e.g. a specific request. `mdc.<key>`
 *
 * Attribute Value Type: `string` {@link MDC_KEY_TYPE}
 *
 * Apply Scrubbing: auto
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Has Dynamic Suffix: true
 *
 * @example "mdc.some_key='some_value'"
 */
export const MDC_KEY = 'mdc.<key>';

/**
 * Base key for {@link MDC_KEY}. Use with a dynamic suffix, e.g. `${MDC_KEY_BASE}.${key}`.
 */
export const MDC_KEY_BASE = 'mdc';

/**
 * Type for {@link MDC_KEY} mdc.<key>
 */
export type MDC_KEY_TYPE = string;

// Path: model/attributes/messaging/messaging__batch__message_count.json

/**
 * The number of messages sent, received, or processed in the scope of the batching operation. `messaging.batch.message_count`
 *
 * Attribute Value Type: `number` {@link MESSAGING_BATCH_MESSAGE_COUNT_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * @example 10
 */
export const MESSAGING_BATCH_MESSAGE_COUNT = 'messaging.batch.message_count';

/**
 * Type for {@link MESSAGING_BATCH_MESSAGE_COUNT} messaging.batch.message_count
 */
export type MESSAGING_BATCH_MESSAGE_COUNT_TYPE = number;

// Path: model/attributes/messaging/messaging__destination__connection.json

/**
 * The message destination connection. `messaging.destination.connection`
 *
 * Attribute Value Type: `string` {@link MESSAGING_DESTINATION_CONNECTION_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * @example 839
 */
export const MESSAGING_MESSAGE_BODY_SIZE = 'messaging.message.body.size';

/**
 * Type for {@link MESSAGING_MESSAGE_BODY_SIZE} messaging.message.body.size
 */
export type MESSAGING_MESSAGE_BODY_SIZE_TYPE = number;

// Path: model/attributes/messaging/messaging__message__conversation_id.json

/**
 * The conversation ID identifying the conversation to which the message belongs, represented as a string. Sometimes called "Correlation ID". `messaging.message.conversation_id`
 *
 * Attribute Value Type: `string` {@link MESSAGING_MESSAGE_CONVERSATION_ID_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * @example "MyConversationId"
 */
export const MESSAGING_MESSAGE_CONVERSATION_ID = 'messaging.message.conversation_id';

/**
 * Type for {@link MESSAGING_MESSAGE_CONVERSATION_ID} messaging.message.conversation_id
 */
export type MESSAGING_MESSAGE_CONVERSATION_ID_TYPE = string;

// Path: model/attributes/messaging/messaging__message__envelope__size.json

/**
 * The size of the message body and metadata in bytes. `messaging.message.envelope.size`
 *
 * Attribute Value Type: `number` {@link MESSAGING_MESSAGE_ENVELOPE_SIZE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example 2
 */
export const MESSAGING_MESSAGE_RETRY_COUNT = 'messaging.message.retry.count';

/**
 * Type for {@link MESSAGING_MESSAGE_RETRY_COUNT} messaging.message.retry.count
 */
export type MESSAGING_MESSAGE_RETRY_COUNT_TYPE = number;

// Path: model/attributes/messaging/messaging__operation__name.json

/**
 * The name of the messaging operation being performed `messaging.operation.name`
 *
 * Attribute Value Type: `string` {@link MESSAGING_OPERATION_NAME_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * @example "send"
 */
export const MESSAGING_OPERATION_NAME = 'messaging.operation.name';

/**
 * Type for {@link MESSAGING_OPERATION_NAME} messaging.operation.name
 */
export type MESSAGING_OPERATION_NAME_TYPE = string;

// Path: model/attributes/messaging/messaging__operation__type.json

/**
 * A string identifying the type of the messaging operation `messaging.operation.type`
 *
 * Attribute Value Type: `string` {@link MESSAGING_OPERATION_TYPE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * @example "create"
 */
export const MESSAGING_OPERATION_TYPE = 'messaging.operation.type';

/**
 * Type for {@link MESSAGING_OPERATION_TYPE} messaging.operation.type
 */
export type MESSAGING_OPERATION_TYPE_TYPE = string;

// Path: model/attributes/messaging/messaging__rabbitmq__destination__routing_key.json

/**
 * RabbitMQ message routing key. `messaging.rabbitmq.destination.routing_key`
 *
 * Attribute Value Type: `string` {@link MESSAGING_RABBITMQ_DESTINATION_ROUTING_KEY_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * @example "myKey"
 */
export const MESSAGING_RABBITMQ_DESTINATION_ROUTING_KEY = 'messaging.rabbitmq.destination.routing_key';

/**
 * Type for {@link MESSAGING_RABBITMQ_DESTINATION_ROUTING_KEY} messaging.rabbitmq.destination.routing_key
 */
export type MESSAGING_RABBITMQ_DESTINATION_ROUTING_KEY_TYPE = string;

// Path: model/attributes/messaging/messaging__system.json

/**
 * The messaging system as identified by the client instrumentation. `messaging.system`
 *
 * Attribute Value Type: `string` {@link MESSAGING_SYSTEM_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link HTTP_REQUEST_METHOD} `http.request.method`, {@link _HTTP_REQUEST_METHOD} `http.request_method`, {@link HTTP_METHOD} `http.method`
 *
 * @deprecated Use {@link HTTP_REQUEST_METHOD} (http.request.method) instead
 * @example "GET"
 */
export const METHOD = 'method';

/**
 * Type for {@link METHOD} method
 */
export type METHOD_TYPE = string;

// Path: model/attributes/middleware/middleware__name.json

/**
 * The name of the middleware. `middleware.name`
 *
 * Attribute Value Type: `string` {@link MIDDLEWARE_NAME_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "AuthenticationMiddleware"
 */
export const MIDDLEWARE_NAME = 'middleware.name';

/**
 * Type for {@link MIDDLEWARE_NAME} middleware.name
 */
export type MIDDLEWARE_NAME_TYPE = string;

// Path: model/attributes/navigation/navigation__type.json

/**
 * The type of navigation done by a client-side router. `navigation.type`
 *
 * Attribute Value Type: `string` {@link NAVIGATION_TYPE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * Apply Scrubbing: auto
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "dns.unreachable"
 */
export const NEL_TYPE = 'nel.type';

/**
 * Type for {@link NEL_TYPE} nel.type
 */
export type NEL_TYPE_TYPE = string;

// Path: model/attributes/network/network__connection__effective_type.json

/**
 * Specifies the effective type of the current connection (e.g. slow-2g, 2g, 3g, 4g). `network.connection.effective_type`
 *
 * Attribute Value Type: `string` {@link NETWORK_CONNECTION_EFFECTIVE_TYPE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link EFFECTIVECONNECTIONTYPE} `effectiveConnectionType`
 *
 * @example "4g"
 */
export const NETWORK_CONNECTION_EFFECTIVE_TYPE = 'network.connection.effective_type';

/**
 * Type for {@link NETWORK_CONNECTION_EFFECTIVE_TYPE} network.connection.effective_type
 */
export type NETWORK_CONNECTION_EFFECTIVE_TYPE_TYPE = string;

// Path: model/attributes/network/network__connection__rtt.json

/**
 * Specifies the estimated effective round-trip time of the current connection, in milliseconds. `network.connection.rtt`
 *
 * Attribute Value Type: `number` {@link NETWORK_CONNECTION_RTT_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link CONNECTION_RTT} `connection.rtt`
 *
 * @example 100
 */
export const NETWORK_CONNECTION_RTT = 'network.connection.rtt';

/**
 * Type for {@link NETWORK_CONNECTION_RTT} network.connection.rtt
 */
export type NETWORK_CONNECTION_RTT_TYPE = number;

// Path: model/attributes/network/network__connection__type.json

/**
 * Specifies the type of the current connection (e.g. wifi, ethernet, cellular , etc). `network.connection.type`
 *
 * Attribute Value Type: `string` {@link NETWORK_CONNECTION_TYPE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * Aliases: {@link DEVICE_CONNECTION_TYPE} `device.connection_type`, {@link CONNECTIONTYPE} `connectionType`
 *
 * @example "wifi"
 */
export const NETWORK_CONNECTION_TYPE = 'network.connection.type';

/**
 * Type for {@link NETWORK_CONNECTION_TYPE} network.connection.type
 */
export type NETWORK_CONNECTION_TYPE_TYPE = string;

// Path: model/attributes/network/network__local__address.json

/**
 * Local address of the network connection - IP address or Unix domain socket name. `network.local.address`
 *
 * Attribute Value Type: `string` {@link NETWORK_LOCAL_ADDRESS_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: auto
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * Aliases: {@link NET_PROTOCOL_NAME} `net.protocol.name`, {@link MCP_RESOURCE_PROTOCOL} `mcp.resource.protocol`
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * Aliases: {@link NET_TRANSPORT} `net.transport`, {@link MCP_TRANSPORT} `mcp.transport`
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * @example "ipv4"
 */
export const NETWORK_TYPE = 'network.type';

/**
 * Type for {@link NETWORK_TYPE} network.type
 */
export type NETWORK_TYPE_TYPE = string;

// Path: model/attributes/net/net__host__ip.json

/**
 * Local address of the network connection - IP address or Unix domain socket name. `net.host.ip`
 *
 * Attribute Value Type: `string` {@link NET_HOST_IP_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: auto
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: auto
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * Aliases: {@link NETWORK_PROTOCOL_NAME} `network.protocol.name`, {@link MCP_RESOURCE_PROTOCOL} `mcp.resource.protocol`
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: auto
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: auto
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * Aliases: {@link NETWORK_TRANSPORT} `network.transport`, {@link MCP_TRANSPORT} `mcp.transport`
 *
 * @deprecated Use {@link NETWORK_TRANSPORT} (network.transport) instead
 * @example "tcp"
 */
export const NET_TRANSPORT = 'net.transport';

/**
 * Type for {@link NET_TRANSPORT} net.transport
 */
export type NET_TRANSPORT_TYPE = string;

// Path: model/attributes/os/os__build.json

/**
 * The build ID of the operating system. `os.build`
 *
 * Attribute Value Type: `string` {@link OS_BUILD_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link OS_BUILD_ID} `os.build_id`
 *
 * @deprecated Use {@link OS_BUILD_ID} (os.build_id) instead
 * @example "1234567890"
 */
export const OS_BUILD = 'os.build';

/**
 * Type for {@link OS_BUILD} os.build
 */
export type OS_BUILD_TYPE = string;

// Path: model/attributes/os/os__build_id.json

/**
 * The build ID of the operating system. `os.build_id`
 *
 * Attribute Value Type: `string` {@link OS_BUILD_ID_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * Aliases: {@link OS_BUILD} `os.build`
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * @example "Ubuntu 18.04.1 LTS"
 */
export const OS_DESCRIPTION = 'os.description';

/**
 * Type for {@link OS_DESCRIPTION} os.description
 */
export type OS_DESCRIPTION_TYPE = string;

// Path: model/attributes/os/os__kernel_version.json

/**
 * An independent kernel version string. Typically the entire output of the `uname` syscall. `os.kernel_version`
 *
 * Attribute Value Type: `string` {@link OS_KERNEL_VERSION_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "20.2.0"
 */
export const OS_KERNEL_VERSION = 'os.kernel_version';

/**
 * Type for {@link OS_KERNEL_VERSION} os.kernel_version
 */
export type OS_KERNEL_VERSION_TYPE = string;

// Path: model/attributes/os/os__name.json

/**
 * Human readable operating system name. `os.name`
 *
 * Attribute Value Type: `string` {@link OS_NAME_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * @example "Ubuntu"
 */
export const OS_NAME = 'os.name';

/**
 * Type for {@link OS_NAME} os.name
 */
export type OS_NAME_TYPE = string;

// Path: model/attributes/os/os__raw_description.json

/**
 * An unprocessed description string obtained by the operating system. For some well-known runtimes, Sentry will attempt to parse `name` and `version` from this string, if they are not explicitly given. `os.raw_description`
 *
 * Attribute Value Type: `string` {@link OS_RAW_DESCRIPTION_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "Ubuntu 22.04.4 LTS (Jammy Jellyfish)"
 */
export const OS_RAW_DESCRIPTION = 'os.raw_description';

/**
 * Type for {@link OS_RAW_DESCRIPTION} os.raw_description
 */
export type OS_RAW_DESCRIPTION_TYPE = string;

// Path: model/attributes/os/os__rooted.json

/**
 * Whether the operating system has been jailbroken or rooted. `os.rooted`
 *
 * Attribute Value Type: `boolean` {@link OS_ROOTED_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example true
 */
export const OS_ROOTED = 'os.rooted';

/**
 * Type for {@link OS_ROOTED} os.rooted
 */
export type OS_ROOTED_TYPE = boolean;

// Path: model/attributes/os/os__theme.json

/**
 * Whether the OS runs in dark mode or light mode. `os.theme`
 *
 * Attribute Value Type: `string` {@link OS_THEME_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "dark"
 */
export const OS_THEME = 'os.theme';

/**
 * Type for {@link OS_THEME} os.theme
 */
export type OS_THEME_TYPE = string;

// Path: model/attributes/os/os__type.json

/**
 * The operating system type. `os.type`
 *
 * Attribute Value Type: `string` {@link OS_TYPE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * @example "18.04.2"
 */
export const OS_VERSION = 'os.version';

/**
 * Type for {@link OS_VERSION} os.version
 */
export type OS_VERSION_TYPE = string;

// Path: model/attributes/otel/otel__kind.json

/**
 * The span kind (https://opentelemetry.io/docs/concepts/signals/traces/#span-kind). Deprecated, use `sentry.kind` instead. `otel.kind`
 *
 * Attribute Value Type: `string` {@link OTEL_KIND_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link SENTRY_KIND} `sentry.kind`
 *
 * @deprecated Use {@link SENTRY_KIND} (sentry.kind) instead - Deprecated in favor of sentry.kind
 * @example "SERVER"
 */
export const OTEL_KIND = 'otel.kind';

/**
 * Type for {@link OTEL_KIND} otel.kind
 */
export type OTEL_KIND_TYPE = string;

// Path: model/attributes/otel/otel__scope__name.json

/**
 * The name of the instrumentation scope - (InstrumentationScope.Name in OTLP). `otel.scope.name`
 *
 * Attribute Value Type: `string` {@link OTEL_SCOPE_NAME_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: auto
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: auto
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Has Dynamic Suffix: true
 *
 * Aliases: {@link URL_PATH_PARAMETER_KEY} `url.path.parameter.<key>`
 *
 * @example "params.id='123'"
 */
export const PARAMS_KEY = 'params.<key>';

/**
 * Base key for {@link PARAMS_KEY}. Use with a dynamic suffix, e.g. `${PARAMS_KEY_BASE}.${key}`.
 */
export const PARAMS_KEY_BASE = 'params';

/**
 * Type for {@link PARAMS_KEY} params.<key>
 */
export type PARAMS_KEY_TYPE = string;

// Path: model/attributes/performance/performance__activationStart.json

/**
 * The time between initiating a navigation to a page and the browser activating the page `performance.activationStart`
 *
 * Attribute Value Type: `number` {@link PERFORMANCE_ACTIVATIONSTART_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link BROWSER_PERFORMANCE_NAVIGATION_ACTIVATION_START} `browser.performance.navigation.activation_start`
 *
 * @deprecated Use {@link BROWSER_PERFORMANCE_NAVIGATION_ACTIVATION_START} (browser.performance.navigation.activation_start) instead - The activationStart is now recorded as the browser.performance.navigation.activation_start attribute.
 * @example 1.983
 */
export const PERFORMANCE_ACTIVATIONSTART = 'performance.activationStart';

/**
 * Type for {@link PERFORMANCE_ACTIVATIONSTART} performance.activationStart
 */
export type PERFORMANCE_ACTIVATIONSTART_TYPE = number;

// Path: model/attributes/performance/performance__timeOrigin.json

/**
 * The browser's performance.timeOrigin timestamp representing the time when the pageload was initiated `performance.timeOrigin`
 *
 * Attribute Value Type: `number` {@link PERFORMANCE_TIMEORIGIN_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link BROWSER_PERFORMANCE_TIME_ORIGIN} `browser.performance.time_origin`
 *
 * @deprecated Use {@link BROWSER_PERFORMANCE_TIME_ORIGIN} (browser.performance.time_origin) instead - The timeOrigin is now recorded as the browser.performance.time_origin attribute.
 * @example 1776185678.886
 */
export const PERFORMANCE_TIMEORIGIN = 'performance.timeOrigin';

/**
 * Type for {@link PERFORMANCE_TIMEORIGIN} performance.timeOrigin
 */
export type PERFORMANCE_TIMEORIGIN_TYPE = number;

// Path: model/attributes/previous_route.json

/**
 * Also used by mobile SDKs to indicate the previous route in the application. `previous_route`
 *
 * Attribute Value Type: `string` {@link PREVIOUS_ROUTE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "HomeScreen"
 */
export const PREVIOUS_ROUTE = 'previous_route';

/**
 * Type for {@link PREVIOUS_ROUTE} previous_route
 */
export type PREVIOUS_ROUTE_TYPE = string;

// Path: model/attributes/process/process__command_args.json

/**
 * All the command arguments (including the command/executable itself) as received by the process. `process.command_args`
 *
 * Attribute Value Type: `Array<string>` {@link PROCESS_COMMAND_ARGS_TYPE}
 *
 * Apply Scrubbing: auto
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * @example ["cmd/otecol","--config=config.yaml"]
 */
export const PROCESS_COMMAND_ARGS = 'process.command_args';

/**
 * Type for {@link PROCESS_COMMAND_ARGS} process.command_args
 */
export type PROCESS_COMMAND_ARGS_TYPE = Array<string>;

// Path: model/attributes/process/process__executable__name.json

/**
 * The name of the executable that started the process. `process.executable.name`
 *
 * Attribute Value Type: `string` {@link PROCESS_EXECUTABLE_NAME_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * Aliases: {@link RUNTIME_RAW_DESCRIPTION} `runtime.raw_description`
 *
 * @example "Eclipse OpenJ9 VM openj9-0.21.0"
 */
export const PROCESS_RUNTIME_DESCRIPTION = 'process.runtime.description';

/**
 * Type for {@link PROCESS_RUNTIME_DESCRIPTION} process.runtime.description
 */
export type PROCESS_RUNTIME_DESCRIPTION_TYPE = string;

// Path: model/attributes/process/process__runtime__engine__name.json

/**
 * The name of the runtime engine. `process.runtime.engine.name`
 *
 * Attribute Value Type: `string` {@link PROCESS_RUNTIME_ENGINE_NAME_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "v8"
 */
export const PROCESS_RUNTIME_ENGINE_NAME = 'process.runtime.engine.name';

/**
 * Type for {@link PROCESS_RUNTIME_ENGINE_NAME} process.runtime.engine.name
 */
export type PROCESS_RUNTIME_ENGINE_NAME_TYPE = string;

// Path: model/attributes/process/process__runtime__engine__version.json

/**
 * The version of the runtime engine. `process.runtime.engine.version`
 *
 * Attribute Value Type: `string` {@link PROCESS_RUNTIME_ENGINE_VERSION_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "12.9.202.13-rusty"
 */
export const PROCESS_RUNTIME_ENGINE_VERSION = 'process.runtime.engine.version';

/**
 * Type for {@link PROCESS_RUNTIME_ENGINE_VERSION} process.runtime.engine.version
 */
export type PROCESS_RUNTIME_ENGINE_VERSION_TYPE = string;

// Path: model/attributes/process/process__runtime__name.json

/**
 * The name of the runtime. Equivalent to `name` in the Sentry runtime context. `process.runtime.name`
 *
 * Attribute Value Type: `string` {@link PROCESS_RUNTIME_NAME_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * Aliases: {@link RUNTIME_NAME} `runtime.name`
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * Aliases: {@link RUNTIME_VERSION} `runtime.version`
 *
 * @example "18.04.2"
 */
export const PROCESS_RUNTIME_VERSION = 'process.runtime.version';

/**
 * Type for {@link PROCESS_RUNTIME_VERSION} process.runtime.version
 */
export type PROCESS_RUNTIME_VERSION_TYPE = string;

// Path: model/attributes/query/query__[key].json

/**
 * An item in a query string. Usually added by client-side routing frameworks like vue-router. `query.<key>`
 *
 * Attribute Value Type: `string` {@link QUERY_KEY_TYPE}
 *
 * Apply Scrubbing: auto
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Has Dynamic Suffix: true
 *
 * @deprecated Use {@link URL_QUERY} (url.query) instead - Instead of sending items individually in query.<key>, they should be sent all together with url.query.
 * @example "query.id='123'"
 */
export const QUERY_KEY = 'query.<key>';

/**
 * Base key for {@link QUERY_KEY}. Use with a dynamic suffix, e.g. `${QUERY_KEY_BASE}.${key}`.
 *
 * @deprecated Use {@link URL_QUERY} (url.query) instead - Instead of sending items individually in query.<key>, they should be sent all together with url.query.
 */
export const QUERY_KEY_BASE = 'query';

/**
 * Type for {@link QUERY_KEY} query.<key>
 */
export type QUERY_KEY_TYPE = string;

// Path: model/attributes/react/react__version.json

/**
 * The version of the React framework `react.version`
 *
 * Attribute Value Type: `string` {@link REACT_VERSION_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "18.2.0"
 */
export const REACT_VERSION = 'react.version';

/**
 * Type for {@link REACT_VERSION} react.version
 */
export type REACT_VERSION_TYPE = string;

// Path: model/attributes/release.json

/**
 * The sentry release. `release`
 *
 * Attribute Value Type: `string` {@link RELEASE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * Apply Scrubbing: auto
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Has Dynamic Suffix: true
 *
 * @example "http.response.header.text='test'"
 */
export const REMIX_ACTION_FORM_DATA_KEY = 'remix.action_form_data.<key>';

/**
 * Base key for {@link REMIX_ACTION_FORM_DATA_KEY}. Use with a dynamic suffix, e.g. `${REMIX_ACTION_FORM_DATA_KEY_BASE}.${key}`.
 */
export const REMIX_ACTION_FORM_DATA_KEY_BASE = 'remix.action_form_data';

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
 * Apply Scrubbing: never
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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

// Path: model/attributes/resource/resource__deployment__environment.json

/**
 * The software deployment environment name. `resource.deployment.environment`
 *
 * Attribute Value Type: `string` {@link RESOURCE_DEPLOYMENT_ENVIRONMENT_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * @deprecated Use {@link SENTRY_ENVIRONMENT} (sentry.environment) instead
 * @example "production"
 */
export const RESOURCE_DEPLOYMENT_ENVIRONMENT = 'resource.deployment.environment';

/**
 * Type for {@link RESOURCE_DEPLOYMENT_ENVIRONMENT} resource.deployment.environment
 */
export type RESOURCE_DEPLOYMENT_ENVIRONMENT_TYPE = string;

// Path: model/attributes/resource/resource__deployment__environment__name.json

/**
 * The software deployment environment name. `resource.deployment.environment.name`
 *
 * Attribute Value Type: `string` {@link RESOURCE_DEPLOYMENT_ENVIRONMENT_NAME_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * @deprecated Use {@link SENTRY_ENVIRONMENT} (sentry.environment) instead
 * @example "production"
 */
export const RESOURCE_DEPLOYMENT_ENVIRONMENT_NAME = 'resource.deployment.environment.name';

/**
 * Type for {@link RESOURCE_DEPLOYMENT_ENVIRONMENT_NAME} resource.deployment.environment.name
 */
export type RESOURCE_DEPLOYMENT_ENVIRONMENT_NAME_TYPE = string;

// Path: model/attributes/resource/resource__render_blocking_status.json

/**
 * The render blocking status of the resource. `resource.render_blocking_status`
 *
 * Attribute Value Type: `string` {@link RESOURCE_RENDER_BLOCKING_STATUS_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * @example 2
 */
export const RPC_GRPC_STATUS_CODE = 'rpc.grpc.status_code';

/**
 * Type for {@link RPC_GRPC_STATUS_CODE} rpc.grpc.status_code
 */
export type RPC_GRPC_STATUS_CODE_TYPE = number;

// Path: model/attributes/rpc/rpc__method.json

/**
 * The fully-qualified logical name of the method from the RPC interface perspective. `rpc.method`
 *
 * Attribute Value Type: `string` {@link RPC_METHOD_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * @example "com.example.ExampleService/exampleMethod"
 */
export const RPC_METHOD = 'rpc.method';

/**
 * Type for {@link RPC_METHOD} rpc.method
 */
export type RPC_METHOD_TYPE = string;

// Path: model/attributes/rpc/rpc__response__status_code.json

/**
 * Status code of the RPC returned by the RPC server or generated by the client. `rpc.response.status_code`
 *
 * Attribute Value Type: `string` {@link RPC_RESPONSE_STATUS_CODE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * @example "DEADLINE_EXCEEDED"
 */
export const RPC_RESPONSE_STATUS_CODE = 'rpc.response.status_code';

/**
 * Type for {@link RPC_RESPONSE_STATUS_CODE} rpc.response.status_code
 */
export type RPC_RESPONSE_STATUS_CODE_TYPE = string;

// Path: model/attributes/rpc/rpc__service.json

/**
 * The full (logical) name of the service being called, including its package name, if applicable. `rpc.service`
 *
 * Attribute Value Type: `string` {@link RPC_SERVICE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * @example "myService.BestService"
 */
export const RPC_SERVICE = 'rpc.service';

/**
 * Type for {@link RPC_SERVICE} rpc.service
 */
export type RPC_SERVICE_TYPE = string;

// Path: model/attributes/runtime/runtime__build.json

/**
 * The application build string, when it is separate from the version. `runtime.build`
 *
 * Attribute Value Type: `string` {@link RUNTIME_BUILD_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @deprecated  - The runtime.* namespace is deprecated in favor of process.runtime.*. No direct OTel equivalent exists for this attribute.
 * @example "stable"
 */
export const RUNTIME_BUILD = 'runtime.build';

/**
 * Type for {@link RUNTIME_BUILD} runtime.build
 */
export type RUNTIME_BUILD_TYPE = string;

// Path: model/attributes/runtime/runtime__name.json

/**
 * The name of the runtime. For example node, CPython, or rustc. `runtime.name`
 *
 * Attribute Value Type: `string` {@link RUNTIME_NAME_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link PROCESS_RUNTIME_NAME} `process.runtime.name`
 *
 * @deprecated Use {@link PROCESS_RUNTIME_NAME} (process.runtime.name) instead - Prefer OTel-aligned process.runtime.name
 * @example "node"
 */
export const RUNTIME_NAME = 'runtime.name';

/**
 * Type for {@link RUNTIME_NAME} runtime.name
 */
export type RUNTIME_NAME_TYPE = string;

// Path: model/attributes/runtime/runtime__raw_description.json

/**
 * Unprocessed description string as obtained from the runtime. Used to extract name and version for well-known runtimes. `runtime.raw_description`
 *
 * Attribute Value Type: `string` {@link RUNTIME_RAW_DESCRIPTION_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link PROCESS_RUNTIME_DESCRIPTION} `process.runtime.description`
 *
 * @deprecated Use {@link PROCESS_RUNTIME_DESCRIPTION} (process.runtime.description) instead - Prefer OTel-aligned process.runtime.description
 * @example "Eclipse OpenJ9 VM openj9-0.21.0"
 */
export const RUNTIME_RAW_DESCRIPTION = 'runtime.raw_description';

/**
 * Type for {@link RUNTIME_RAW_DESCRIPTION} runtime.raw_description
 */
export type RUNTIME_RAW_DESCRIPTION_TYPE = string;

// Path: model/attributes/runtime/runtime__version.json

/**
 * The version of the runtime. `runtime.version`
 *
 * Attribute Value Type: `string` {@link RUNTIME_VERSION_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link PROCESS_RUNTIME_VERSION} `process.runtime.version`
 *
 * @deprecated Use {@link PROCESS_RUNTIME_VERSION} (process.runtime.version) instead - Prefer OTel-aligned process.runtime.version
 * @example "18.04.2"
 */
export const RUNTIME_VERSION = 'runtime.version';

/**
 * Type for {@link RUNTIME_VERSION} runtime.version
 */
export type RUNTIME_VERSION_TYPE = string;

// Path: model/attributes/score/score__[key].json

/**
 * The weighted performance score for a web vital. This is defined as `score.weight.<key>` * `score.ratio.<key>`. `score.<key>`
 *
 * Attribute Value Type: `number` {@link SCORE_KEY_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Has Dynamic Suffix: true
 *
 * @example "score.cls=0.1723"
 */
export const SCORE_KEY = 'score.<key>';

/**
 * Base key for {@link SCORE_KEY}. Use with a dynamic suffix, e.g. `${SCORE_KEY_BASE}.${key}`.
 */
export const SCORE_KEY_BASE = 'score';

/**
 * Type for {@link SCORE_KEY} score.<key>
 */
export type SCORE_KEY_TYPE = number;

// Path: model/attributes/score/score__ratio__[key].json

/**
 * The score for a web vital, normalized to a number between 0 and 1. `score.ratio.<key>`
 *
 * Attribute Value Type: `number` {@link SCORE_RATIO_KEY_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Has Dynamic Suffix: true
 *
 * @example "score.ratio.inp=0.7748"
 */
export const SCORE_RATIO_KEY = 'score.ratio.<key>';

/**
 * Base key for {@link SCORE_RATIO_KEY}. Use with a dynamic suffix, e.g. `${SCORE_RATIO_KEY_BASE}.${key}`.
 */
export const SCORE_RATIO_KEY_BASE = 'score.ratio';

/**
 * Type for {@link SCORE_RATIO_KEY} score.ratio.<key>
 */
export type SCORE_RATIO_KEY_TYPE = number;

// Path: model/attributes/score/score__total.json

/**
 * The total performance score of a span. This is the sum of individual weighted web vital scores (see `score.<key>`). `score.total`
 *
 * Attribute Value Type: `number` {@link SCORE_TOTAL_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 */
export const SCORE_TOTAL = 'score.total';

/**
 * Type for {@link SCORE_TOTAL} score.total
 */
export type SCORE_TOTAL_TYPE = number;

// Path: model/attributes/score/score__weight__[key].json

/**
 * The relative weight of a web vital in a span's performance score. `score.weight.<key>`
 *
 * Attribute Value Type: `number` {@link SCORE_WEIGHT_KEY_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Has Dynamic Suffix: true
 *
 * @example "score.weight.fcp=0.25"
 */
export const SCORE_WEIGHT_KEY = 'score.weight.<key>';

/**
 * Base key for {@link SCORE_WEIGHT_KEY}. Use with a dynamic suffix, e.g. `${SCORE_WEIGHT_KEY_BASE}.${key}`.
 */
export const SCORE_WEIGHT_KEY_BASE = 'score.weight';

/**
 * Type for {@link SCORE_WEIGHT_KEY} score.weight.<key>
 */
export type SCORE_WEIGHT_KEY_TYPE = number;

// Path: model/attributes/sentry/sentry__action.json

/**
 * Used as a generic attribute representing the action depending on the type of span. For instance, this is the database query operation for DB spans, and the request method for HTTP spans. `sentry.action`
 *
 * Attribute Value Type: `string` {@link SENTRY_ACTION_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "SELECT"
 */
export const SENTRY_ACTION = 'sentry.action';

/**
 * Type for {@link SENTRY_ACTION} sentry.action
 */
export type SENTRY_ACTION_TYPE = string;

// Path: model/attributes/sentry/sentry__browser__name.json

/**
 * The name of the browser. `sentry.browser.name`
 *
 * Attribute Value Type: `string` {@link SENTRY_BROWSER_NAME_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * Apply Scrubbing: never
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "document.hidden"
 */
export const SENTRY_CANCELLATION_REASON = 'sentry.cancellation_reason';

/**
 * Type for {@link SENTRY_CANCELLATION_REASON} sentry.cancellation_reason
 */
export type SENTRY_CANCELLATION_REASON_TYPE = string;

// Path: model/attributes/sentry/sentry__category.json

/**
 * The high-level category of a span, derived from the span operation or span attributes. This categorizes spans by their general purpose (e.g., database, HTTP, UI). Known values include: 'ai', 'ai.pipeline', 'app', 'browser', 'cache', 'console', 'db', 'event', 'file', 'function.aws', 'function.azure', 'function.gcp', 'function.nextjs', 'function.remix', 'graphql', 'grpc', 'http', 'measure', 'middleware', 'navigation', 'pageload', 'queue', 'resource', 'rpc', 'serialize', 'subprocess', 'template', 'topic', 'ui', 'ui.angular', 'ui.ember', 'ui.react', 'ui.svelte', 'ui.vue', 'view', 'websocket'. `sentry.category`
 *
 * Attribute Value Type: `string` {@link SENTRY_CATEGORY_TYPE}
 *
 * Apply Scrubbing: never
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "db"
 */
export const SENTRY_CATEGORY = 'sentry.category';

/**
 * Type for {@link SENTRY_CATEGORY} sentry.category
 */
export type SENTRY_CATEGORY_TYPE = string;

// Path: model/attributes/sentry/sentry__client_sample_rate.json

/**
 * Rate at which a span was sampled in the SDK. `sentry.client_sample_rate`
 *
 * Attribute Value Type: `number` {@link SENTRY_CLIENT_SAMPLE_RATE_TYPE}
 *
 * Apply Scrubbing: never
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * Apply Scrubbing: auto
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * Apply Scrubbing: never
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "1.0"
 */
export const SENTRY_DIST = 'sentry.dist';

/**
 * Type for {@link SENTRY_DIST} sentry.dist
 */
export type SENTRY_DIST_TYPE = string;

// Path: model/attributes/sentry/sentry__domain.json

/**
 * Used as a generic attribute representing the domain depending on the type of span. For instance, this is the collection/table name for database spans, and the server address for HTTP spans. `sentry.domain`
 *
 * Attribute Value Type: `string` {@link SENTRY_DOMAIN_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "example.com"
 */
export const SENTRY_DOMAIN = 'sentry.domain';

/**
 * Type for {@link SENTRY_DOMAIN} sentry.domain
 */
export type SENTRY_DOMAIN_TYPE = string;

// Path: model/attributes/sentry/sentry__dsc__environment.json

/**
 * The environment from the dynamic sampling context. `sentry.dsc.environment`
 *
 * Attribute Value Type: `string` {@link SENTRY_DSC_ENVIRONMENT_TYPE}
 *
 * Apply Scrubbing: never
 *
 * Attribute defined in OTEL: No
 * Visibility: internal
 *
 * @example "prod"
 */
export const SENTRY_DSC_ENVIRONMENT = 'sentry.dsc.environment';

/**
 * Type for {@link SENTRY_DSC_ENVIRONMENT} sentry.dsc.environment
 */
export type SENTRY_DSC_ENVIRONMENT_TYPE = string;

// Path: model/attributes/sentry/sentry__dsc__project_id.json

/**
 * The ID of the project where the trace originated (i.e. the project of the SDK that started the trace). Propagated through the dynamic sampling context and set by Relay during ingestion. `sentry.dsc.project_id`
 *
 * Attribute Value Type: `string` {@link SENTRY_DSC_PROJECT_ID_TYPE}
 *
 * Apply Scrubbing: never
 *
 * Attribute defined in OTEL: No
 * Visibility: internal
 *
 * @example "12345"
 */
export const SENTRY_DSC_PROJECT_ID = 'sentry.dsc.project_id';

/**
 * Type for {@link SENTRY_DSC_PROJECT_ID} sentry.dsc.project_id
 */
export type SENTRY_DSC_PROJECT_ID_TYPE = string;

// Path: model/attributes/sentry/sentry__dsc__public_key.json

/**
 * The public key from the dynamic sampling context. `sentry.dsc.public_key`
 *
 * Attribute Value Type: `string` {@link SENTRY_DSC_PUBLIC_KEY_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: internal
 *
 * @example "c51734c603c4430eb57cb0a5728a479d"
 */
export const SENTRY_DSC_PUBLIC_KEY = 'sentry.dsc.public_key';

/**
 * Type for {@link SENTRY_DSC_PUBLIC_KEY} sentry.dsc.public_key
 */
export type SENTRY_DSC_PUBLIC_KEY_TYPE = string;

// Path: model/attributes/sentry/sentry__dsc__release.json

/**
 * The release identifier from the dynamic sampling context. `sentry.dsc.release`
 *
 * Attribute Value Type: `string` {@link SENTRY_DSC_RELEASE_TYPE}
 *
 * Apply Scrubbing: never
 *
 * Attribute defined in OTEL: No
 * Visibility: internal
 *
 * @example "frontend@e8211be71b214afab5b85de4b4c54be3714952bb"
 */
export const SENTRY_DSC_RELEASE = 'sentry.dsc.release';

/**
 * Type for {@link SENTRY_DSC_RELEASE} sentry.dsc.release
 */
export type SENTRY_DSC_RELEASE_TYPE = string;

// Path: model/attributes/sentry/sentry__dsc__sampled.json

/**
 * Whether the event was sampled according to the dynamic sampling context. `sentry.dsc.sampled`
 *
 * Attribute Value Type: `boolean` {@link SENTRY_DSC_SAMPLED_TYPE}
 *
 * Apply Scrubbing: never
 *
 * Attribute defined in OTEL: No
 * Visibility: internal
 *
 * @example true
 */
export const SENTRY_DSC_SAMPLED = 'sentry.dsc.sampled';

/**
 * Type for {@link SENTRY_DSC_SAMPLED} sentry.dsc.sampled
 */
export type SENTRY_DSC_SAMPLED_TYPE = boolean;

// Path: model/attributes/sentry/sentry__dsc__sample_rate.json

/**
 * The sample rate from the dynamic sampling context. `sentry.dsc.sample_rate`
 *
 * Attribute Value Type: `string` {@link SENTRY_DSC_SAMPLE_RATE_TYPE}
 *
 * Apply Scrubbing: never
 *
 * Attribute defined in OTEL: No
 * Visibility: internal
 *
 * @example "1.0"
 */
export const SENTRY_DSC_SAMPLE_RATE = 'sentry.dsc.sample_rate';

/**
 * Type for {@link SENTRY_DSC_SAMPLE_RATE} sentry.dsc.sample_rate
 */
export type SENTRY_DSC_SAMPLE_RATE_TYPE = string;

// Path: model/attributes/sentry/sentry__dsc__trace_id.json

/**
 * The trace ID from the dynamic sampling context. `sentry.dsc.trace_id`
 *
 * Attribute Value Type: `string` {@link SENTRY_DSC_TRACE_ID_TYPE}
 *
 * Apply Scrubbing: never
 *
 * Attribute defined in OTEL: No
 * Visibility: internal
 *
 * @example "047372980460430cbc78d9779df33a46"
 */
export const SENTRY_DSC_TRACE_ID = 'sentry.dsc.trace_id';

/**
 * Type for {@link SENTRY_DSC_TRACE_ID} sentry.dsc.trace_id
 */
export type SENTRY_DSC_TRACE_ID_TYPE = string;

// Path: model/attributes/sentry/sentry__dsc__transaction.json

/**
 * The transaction name from the dynamic sampling context. `sentry.dsc.transaction`
 *
 * Attribute Value Type: `string` {@link SENTRY_DSC_TRANSACTION_TYPE}
 *
 * Apply Scrubbing: never
 *
 * Attribute defined in OTEL: No
 * Visibility: internal
 *
 * @example "/issues/errors-outages/"
 */
export const SENTRY_DSC_TRANSACTION = 'sentry.dsc.transaction';

/**
 * Type for {@link SENTRY_DSC_TRANSACTION} sentry.dsc.transaction
 */
export type SENTRY_DSC_TRANSACTION_TYPE = string;

// Path: model/attributes/sentry/sentry__environment.json

/**
 * The sentry environment. `sentry.environment`
 *
 * Attribute Value Type: `string` {@link SENTRY_ENVIRONMENT_TYPE}
 *
 * Apply Scrubbing: never
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * The exclusive time duration of the span in milliseconds. `sentry.exclusive_time`
 *
 * Attribute Value Type: `number` {@link SENTRY_EXCLUSIVE_TIME_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example 1234
 */
export const SENTRY_EXCLUSIVE_TIME = 'sentry.exclusive_time';

/**
 * Type for {@link SENTRY_EXCLUSIVE_TIME} sentry.exclusive_time
 */
export type SENTRY_EXCLUSIVE_TIME_TYPE = number;

// Path: model/attributes/sentry/sentry__graphql__operation.json

/**
 * Indicates the type of graphql operation, emitted by the Javascript SDK. `sentry.graphql.operation`
 *
 * Attribute Value Type: `string` {@link SENTRY_GRAPHQL_OPERATION_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "getUserById"
 */
export const SENTRY_GRAPHQL_OPERATION = 'sentry.graphql.operation';

/**
 * Type for {@link SENTRY_GRAPHQL_OPERATION} sentry.graphql.operation
 */
export type SENTRY_GRAPHQL_OPERATION_TYPE = string;

// Path: model/attributes/sentry/sentry__group.json

/**
 * Stores the hash of `sentry.normalized_description`. This is primarily used for grouping spans in the product end. `sentry.group`
 *
 * Attribute Value Type: `string` {@link SENTRY_GROUP_TYPE}
 *
 * Apply Scrubbing: never
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 */
export const SENTRY_GROUP = 'sentry.group';

/**
 * Type for {@link SENTRY_GROUP} sentry.group
 */
export type SENTRY_GROUP_TYPE = string;

// Path: model/attributes/sentry/sentry__http__prefetch.json

/**
 * If an http request was a prefetch request. `sentry.http.prefetch`
 *
 * Attribute Value Type: `boolean` {@link SENTRY_HTTP_PREFETCH_TYPE}
 *
 * Apply Scrubbing: never
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * Apply Scrubbing: never
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "idleTimeout"
 */
export const SENTRY_IDLE_SPAN_FINISH_REASON = 'sentry.idle_span_finish_reason';

/**
 * Type for {@link SENTRY_IDLE_SPAN_FINISH_REASON} sentry.idle_span_finish_reason
 */
export type SENTRY_IDLE_SPAN_FINISH_REASON_TYPE = string;

// Path: model/attributes/sentry/sentry__is_remote.json

/**
 * Indicates whether a span's parent is remote. `sentry.is_remote`
 *
 * Attribute Value Type: `boolean` {@link SENTRY_IS_REMOTE_TYPE}
 *
 * Apply Scrubbing: never
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example true
 */
export const SENTRY_IS_REMOTE = 'sentry.is_remote';

/**
 * Type for {@link SENTRY_IS_REMOTE} sentry.is_remote
 */
export type SENTRY_IS_REMOTE_TYPE = boolean;

// Path: model/attributes/sentry/sentry__kind.json

/**
 * Used to clarify the relationship between parents and children, or to distinguish between spans, e.g. a `server` and `client` span with the same name. `sentry.kind`
 *
 * Attribute Value Type: `string` {@link SENTRY_KIND_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link OTEL_KIND} `otel.kind`
 *
 * @example "server"
 */
export const SENTRY_KIND = 'sentry.kind';

/**
 * Type for {@link SENTRY_KIND} sentry.kind
 */
export type SENTRY_KIND_TYPE = string;

// Path: model/attributes/sentry/sentry__main_thread.json

/**
 * Whether the span or event occurred on the main thread. Computed by Relay and should not be set by SDKs. `sentry.main_thread`
 *
 * Attribute Value Type: `boolean` {@link SENTRY_MAIN_THREAD_TYPE}
 *
 * Apply Scrubbing: never
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example true
 */
export const SENTRY_MAIN_THREAD = 'sentry.main_thread';

/**
 * Type for {@link SENTRY_MAIN_THREAD} sentry.main_thread
 */
export type SENTRY_MAIN_THREAD_TYPE = boolean;

// Path: model/attributes/sentry/sentry__message__parameter__[key].json

/**
 * A parameter used in the message template. <key> can either be the number that represent the parameter's position in the template string (sentry.message.parameter.0, sentry.message.parameter.1, etc) or the parameter's name (sentry.message.parameter.item_id, sentry.message.parameter.user_id, etc) `sentry.message.parameter.<key>`
 *
 * Attribute Value Type: `string` {@link SENTRY_MESSAGE_PARAMETER_KEY_TYPE}
 *
 * Apply Scrubbing: auto
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "Hello, {name}!"
 */
export const SENTRY_MESSAGE_TEMPLATE = 'sentry.message.template';

/**
 * Type for {@link SENTRY_MESSAGE_TEMPLATE} sentry.message.template
 */
export type SENTRY_MESSAGE_TEMPLATE_TYPE = string;

// Path: model/attributes/sentry/sentry__mobile.json

/**
 * Whether the application is using a mobile SDK. Computed by Relay and should not be set by SDKs. `sentry.mobile`
 *
 * Attribute Value Type: `boolean` {@link SENTRY_MOBILE_TYPE}
 *
 * Apply Scrubbing: never
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example true
 */
export const SENTRY_MOBILE = 'sentry.mobile';

/**
 * Type for {@link SENTRY_MOBILE} sentry.mobile
 */
export type SENTRY_MOBILE_TYPE = boolean;

// Path: model/attributes/sentry/sentry__module__[key].json

/**
 * A module that was loaded in the process. The key is the name of the module. `sentry.module.<key>`
 *
 * Attribute Value Type: `string` {@link SENTRY_MODULE_KEY_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Has Dynamic Suffix: true
 *
 * @example "sentry.module.brianium/paratest='v7.7.0'"
 */
export const SENTRY_MODULE_KEY = 'sentry.module.<key>';

/**
 * Base key for {@link SENTRY_MODULE_KEY}. Use with a dynamic suffix, e.g. `${SENTRY_MODULE_KEY_BASE}.${key}`.
 */
export const SENTRY_MODULE_KEY_BASE = 'sentry.module';

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
 * Apply Scrubbing: never
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * Apply Scrubbing: never
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "generateMetadata"
 */
export const SENTRY_NEXTJS_SSR_FUNCTION_TYPE = 'sentry.nextjs.ssr.function.type';

/**
 * Type for {@link SENTRY_NEXTJS_SSR_FUNCTION_TYPE} sentry.nextjs.ssr.function.type
 */
export type SENTRY_NEXTJS_SSR_FUNCTION_TYPE_TYPE = string;

// Path: model/attributes/sentry/sentry__normalized_db_query.json

/**
 * The normalized version of `db.query.text`. `sentry.normalized_db_query`
 *
 * Attribute Value Type: `string` {@link SENTRY_NORMALIZED_DB_QUERY_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "SELECT .. FROM sentry_project WHERE (project_id = %s)"
 */
export const SENTRY_NORMALIZED_DB_QUERY = 'sentry.normalized_db_query';

/**
 * Type for {@link SENTRY_NORMALIZED_DB_QUERY} sentry.normalized_db_query
 */
export type SENTRY_NORMALIZED_DB_QUERY_TYPE = string;

// Path: model/attributes/sentry/sentry__normalized_db_query__hash.json

/**
 * The hash of `sentry.normalized_db_query`. `sentry.normalized_db_query.hash`
 *
 * Attribute Value Type: `string` {@link SENTRY_NORMALIZED_DB_QUERY_HASH_TYPE}
 *
 * Apply Scrubbing: never
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 */
export const SENTRY_NORMALIZED_DB_QUERY_HASH = 'sentry.normalized_db_query.hash';

/**
 * Type for {@link SENTRY_NORMALIZED_DB_QUERY_HASH} sentry.normalized_db_query.hash
 */
export type SENTRY_NORMALIZED_DB_QUERY_HASH_TYPE = string;

// Path: model/attributes/sentry/sentry__normalized_description.json

/**
 * Used as a generic attribute representing the normalized `sentry.description`. This refers to the legacy use case of `sentry.description` where it holds relevant data depending on the type of span (e.g. database query, resource url, http request description, etc). `sentry.normalized_description`
 *
 * Attribute Value Type: `string` {@link SENTRY_NORMALIZED_DESCRIPTION_TYPE}
 *
 * Apply Scrubbing: auto
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "SELECT .. FROM sentry_project WHERE (project_id = %s)"
 */
export const SENTRY_NORMALIZED_DESCRIPTION = 'sentry.normalized_description';

/**
 * Type for {@link SENTRY_NORMALIZED_DESCRIPTION} sentry.normalized_description
 */
export type SENTRY_NORMALIZED_DESCRIPTION_TYPE = string;

// Path: model/attributes/sentry/sentry__observed_timestamp_nanos.json

/**
 * The timestamp at which an envelope was received by Relay, in nanoseconds. `sentry.observed_timestamp_nanos`
 *
 * Attribute Value Type: `string` {@link SENTRY_OBSERVED_TIMESTAMP_NANOS_TYPE}
 *
 * Apply Scrubbing: never
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
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
 * Apply Scrubbing: never
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * Apply Scrubbing: never
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * Apply Scrubbing: never
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "php"
 */
export const SENTRY_PLATFORM = 'sentry.platform';

/**
 * Type for {@link SENTRY_PLATFORM} sentry.platform
 */
export type SENTRY_PLATFORM_TYPE = string;

// Path: model/attributes/sentry/sentry__profiler_id.json

/**
 * The id of the currently running profiler (continuous profiling) `sentry.profiler_id`
 *
 * Attribute Value Type: `string` {@link SENTRY_PROFILER_ID_TYPE}
 *
 * Apply Scrubbing: never
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "18779b64dd35d1a538e7ce2dd2d3fad3"
 */
export const SENTRY_PROFILER_ID = 'sentry.profiler_id';

/**
 * Type for {@link SENTRY_PROFILER_ID} sentry.profiler_id
 */
export type SENTRY_PROFILER_ID_TYPE = string;

// Path: model/attributes/sentry/sentry__profile_id.json

/**
 * The ID of the Sentry profile the span is associated with. This is only meaningful for transaction-based profiling. `sentry.profile_id`
 *
 * Attribute Value Type: `string` {@link SENTRY_PROFILE_ID_TYPE}
 *
 * Apply Scrubbing: never
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * Apply Scrubbing: never
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * Apply Scrubbing: never
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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

// Path: model/attributes/sentry/sentry__replay_is_buffering.json

/**
 * A sentinel attribute on log events indicating whether the current Session Replay is being buffered (onErrorSampleRate). `sentry.replay_is_buffering`
 *
 * Attribute Value Type: `boolean` {@link SENTRY_REPLAY_IS_BUFFERING_TYPE}
 *
 * Apply Scrubbing: never
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example true
 */
export const SENTRY_REPLAY_IS_BUFFERING = 'sentry.replay_is_buffering';

/**
 * Type for {@link SENTRY_REPLAY_IS_BUFFERING} sentry.replay_is_buffering
 */
export type SENTRY_REPLAY_IS_BUFFERING_TYPE = boolean;

// Path: model/attributes/sentry/sentry__report_event.json

/**
 * (Deprecated) The event that caused the SDK to report CLS or LCP (pagehide or navigation) `sentry.report_event`
 *
 * Attribute Value Type: `string` {@link SENTRY_REPORT_EVENT_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @deprecated  - The report event is now recorded as a browser.web_vital.lcp.report_event or browser.web_vital.cls.report_event attribute. No backfill required.
 * @example "pagehide"
 */
export const SENTRY_REPORT_EVENT = 'sentry.report_event';

/**
 * Type for {@link SENTRY_REPORT_EVENT} sentry.report_event
 */
export type SENTRY_REPORT_EVENT_TYPE = string;

// Path: model/attributes/sentry/sentry__sdk__integrations.json

/**
 * A list of names identifying enabled integrations. The list shouldhave all enabled integrations, including default integrations. Defaultintegrations are included because different SDK releases may contain differentdefault integrations. `sentry.sdk.integrations`
 *
 * Attribute Value Type: `Array<string>` {@link SENTRY_SDK_INTEGRATIONS_TYPE}
 *
 * Apply Scrubbing: never
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * Apply Scrubbing: never
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * Apply Scrubbing: never
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * Apply Scrubbing: never
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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

// Path: model/attributes/sentry/sentry__segment_id.json

/**
 * The segment ID of a span `sentry.segment_id`
 *
 * Attribute Value Type: `string` {@link _SENTRY_SEGMENT_ID_TYPE}
 *
 * Apply Scrubbing: never
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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

// Path: model/attributes/sentry/sentry__segment__name.json

/**
 * The segment name of a span `sentry.segment.name`
 *
 * Attribute Value Type: `string` {@link SENTRY_SEGMENT_NAME_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link SENTRY_TRANSACTION} `sentry.transaction`, {@link TRANSACTION} `transaction`
 *
 * @example "GET /user"
 */
export const SENTRY_SEGMENT_NAME = 'sentry.segment.name';

/**
 * Type for {@link SENTRY_SEGMENT_NAME} sentry.segment.name
 */
export type SENTRY_SEGMENT_NAME_TYPE = string;

// Path: model/attributes/sentry/sentry__server_sample_rate.json

/**
 * Rate at which a span was sampled in Relay. `sentry.server_sample_rate`
 *
 * Attribute Value Type: `number` {@link SENTRY_SERVER_SAMPLE_RATE_TYPE}
 *
 * Apply Scrubbing: never
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example 0.5
 */
export const SENTRY_SERVER_SAMPLE_RATE = 'sentry.server_sample_rate';

/**
 * Type for {@link SENTRY_SERVER_SAMPLE_RATE} sentry.server_sample_rate
 */
export type SENTRY_SERVER_SAMPLE_RATE_TYPE = number;

// Path: model/attributes/sentry/sentry__source.json

/**
 * The source of a span, also referred to as transaction source. Known values are:  `'custom'`, `'url'`, `'route'`, `'component'`, `'view'`, `'task'`. '`source`' describes a parametrized route, while `'url'` describes the full URL, potentially containing identifiers. `sentry.source`
 *
 * Attribute Value Type: `string` {@link SENTRY_SOURCE_TYPE}
 *
 * Apply Scrubbing: never
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @deprecated Use {@link SENTRY_SPAN_SOURCE} (sentry.span.source) instead - This attribute is being deprecated in favor of sentry.span.source
 * @example "route"
 */
export const SENTRY_SOURCE = 'sentry.source';

/**
 * Type for {@link SENTRY_SOURCE} sentry.source
 */
export type SENTRY_SOURCE_TYPE = string;

// Path: model/attributes/sentry/sentry__span__source.json

/**
 * The source of a span, also referred to as transaction source. Known values are:  `'custom'`, `'url'`, `'route'`, `'component'`, `'view'`, `'task'`. '`source`' describes a parametrized route, while `'url'` describes the full URL, potentially containing identifiers. `sentry.span.source`
 *
 * Attribute Value Type: `string` {@link SENTRY_SPAN_SOURCE_TYPE}
 *
 * Apply Scrubbing: never
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "route"
 */
export const SENTRY_SPAN_SOURCE = 'sentry.span.source';

/**
 * Type for {@link SENTRY_SPAN_SOURCE} sentry.span.source
 */
export type SENTRY_SPAN_SOURCE_TYPE = string;

// Path: model/attributes/sentry/sentry__status.json

/**
 * The span's status (either "ok" or "error"). Older SDKs may set this to a more specific error, but this behaviour is deprecated. `sentry.status`
 *
 * Attribute Value Type: `string` {@link SENTRY_STATUS_TYPE}
 *
 * Apply Scrubbing: never
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "ok"
 */
export const SENTRY_STATUS = 'sentry.status';

/**
 * Type for {@link SENTRY_STATUS} sentry.status
 */
export type SENTRY_STATUS_TYPE = string;

// Path: model/attributes/sentry/sentry__status_code.json

/**
 * The HTTP status code used in Sentry Insights. Typically set by Sentry during ingestion, rather than by clients. `sentry.status_code`
 *
 * Attribute Value Type: `number` {@link SENTRY_STATUS_CODE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example 200
 */
export const SENTRY_STATUS_CODE = 'sentry.status_code';

/**
 * Type for {@link SENTRY_STATUS_CODE} sentry.status_code
 */
export type SENTRY_STATUS_CODE_TYPE = number;

// Path: model/attributes/sentry/sentry__status__message.json

/**
 * The from OTLP extracted status message. `sentry.status.message`
 *
 * Attribute Value Type: `string` {@link SENTRY_STATUS_MESSAGE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "foobar"
 */
export const SENTRY_STATUS_MESSAGE = 'sentry.status.message';

/**
 * Type for {@link SENTRY_STATUS_MESSAGE} sentry.status.message
 */
export type SENTRY_STATUS_MESSAGE_TYPE = string;

// Path: model/attributes/sentry/sentry__thread__id.json

/**
 * Current “managed” thread ID. `sentry.thread.id`
 *
 * Attribute Value Type: `number` {@link SENTRY_THREAD_ID_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @deprecated Use {@link THREAD_ID} (thread.id) instead - This attribute is being deprecated in favor of the OTel-standard thread.id
 * @example 56
 */
export const SENTRY_THREAD_ID = 'sentry.thread.id';

/**
 * Type for {@link SENTRY_THREAD_ID} sentry.thread.id
 */
export type SENTRY_THREAD_ID_TYPE = number;

// Path: model/attributes/sentry/sentry__timestamp__sequence.json

/**
 * A sequencing counter for deterministic ordering of logs or metrics when timestamps share the same integer millisecond. Starts at 0 on SDK initialization, increments by 1 for each captured item, and resets to 0 when the integer millisecond of the current item differs from the previous one. `sentry.timestamp.sequence`
 *
 * Attribute Value Type: `number` {@link SENTRY_TIMESTAMP_SEQUENCE_TYPE}
 *
 * Apply Scrubbing: never
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example 0
 */
export const SENTRY_TIMESTAMP_SEQUENCE = 'sentry.timestamp.sequence';

/**
 * Type for {@link SENTRY_TIMESTAMP_SEQUENCE} sentry.timestamp.sequence
 */
export type SENTRY_TIMESTAMP_SEQUENCE_TYPE = number;

// Path: model/attributes/sentry/sentry__trace_lifecycle.json

/**
 * Indicates the chosen trace lifecycle mode of the SDK (stream or static) `sentry.trace_lifecycle`
 *
 * Attribute Value Type: `string` {@link SENTRY_TRACE_LIFECYCLE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "stream"
 */
export const SENTRY_TRACE_LIFECYCLE = 'sentry.trace_lifecycle';

/**
 * Type for {@link SENTRY_TRACE_LIFECYCLE} sentry.trace_lifecycle
 */
export type SENTRY_TRACE_LIFECYCLE_TYPE = string;

// Path: model/attributes/sentry/sentry__trace__parent_span_id.json

/**
 * The span id of the span that was active when the log was collected. This should not be set if there was no active span. `sentry.trace.parent_span_id`
 *
 * Attribute Value Type: `string` {@link SENTRY_TRACE_PARENT_SPAN_ID_TYPE}
 *
 * Apply Scrubbing: never
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @deprecated
 * @example "b0e6f15b45c36b12"
 */
export const SENTRY_TRACE_PARENT_SPAN_ID = 'sentry.trace.parent_span_id';

/**
 * Type for {@link SENTRY_TRACE_PARENT_SPAN_ID} sentry.trace.parent_span_id
 */
export type SENTRY_TRACE_PARENT_SPAN_ID_TYPE = string;

// Path: model/attributes/sentry/sentry__trace__status.json

/**
 * The segment's status (either "ok" or "error"). Older SDKs may set this to a more specific error, but this behaviour is deprecated. `sentry.trace.status`
 *
 * Attribute Value Type: `string` {@link SENTRY_TRACE_STATUS_TYPE}
 *
 * Apply Scrubbing: never
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "ok"
 */
export const SENTRY_TRACE_STATUS = 'sentry.trace.status';

/**
 * Type for {@link SENTRY_TRACE_STATUS} sentry.trace.status
 */
export type SENTRY_TRACE_STATUS_TYPE = string;

// Path: model/attributes/sentry/sentry__transaction.json

/**
 * The sentry transaction (segment name). `sentry.transaction`
 *
 * Attribute Value Type: `string` {@link SENTRY_TRANSACTION_TYPE}
 *
 * Apply Scrubbing: never
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link SENTRY_SEGMENT_NAME} `sentry.segment.name`, {@link TRANSACTION} `transaction`
 *
 * @deprecated Use {@link SENTRY_SEGMENT_NAME} (sentry.segment.name) instead - This attribute is being deprecated in favor of sentry.segment.name
 * @example "GET /"
 */
export const SENTRY_TRANSACTION = 'sentry.transaction';

/**
 * Type for {@link SENTRY_TRANSACTION} sentry.transaction
 */
export type SENTRY_TRANSACTION_TYPE = string;

// Path: model/attributes/sentry/sentry__user__email.json

/**
 * User email address. `sentry.user.email`
 *
 * Attribute Value Type: `string` {@link SENTRY_USER_EMAIL_TYPE}
 *
 * Apply Scrubbing: auto
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link USER_EMAIL} `user.email`
 *
 * @deprecated Use {@link USER_EMAIL} (user.email) instead
 */
export const SENTRY_USER_EMAIL = 'sentry.user.email';

/**
 * Type for {@link SENTRY_USER_EMAIL} sentry.user.email
 */
export type SENTRY_USER_EMAIL_TYPE = string;

// Path: model/attributes/sentry/sentry__user__geo__city.json

/**
 * Human readable city name. `sentry.user.geo.city`
 *
 * Attribute Value Type: `string` {@link SENTRY_USER_GEO_CITY_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link USER_GEO_CITY} `user.geo.city`
 *
 * @deprecated Use {@link USER_GEO_CITY} (user.geo.city) instead
 */
export const SENTRY_USER_GEO_CITY = 'sentry.user.geo.city';

/**
 * Type for {@link SENTRY_USER_GEO_CITY} sentry.user.geo.city
 */
export type SENTRY_USER_GEO_CITY_TYPE = string;

// Path: model/attributes/sentry/sentry__user__geo__country_code.json

/**
 * Two-letter country code (ISO 3166-1 alpha-2). `sentry.user.geo.country_code`
 *
 * Attribute Value Type: `string` {@link SENTRY_USER_GEO_COUNTRY_CODE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link USER_GEO_COUNTRY_CODE} `user.geo.country_code`
 *
 * @deprecated Use {@link USER_GEO_COUNTRY_CODE} (user.geo.country_code) instead
 */
export const SENTRY_USER_GEO_COUNTRY_CODE = 'sentry.user.geo.country_code';

/**
 * Type for {@link SENTRY_USER_GEO_COUNTRY_CODE} sentry.user.geo.country_code
 */
export type SENTRY_USER_GEO_COUNTRY_CODE_TYPE = string;

// Path: model/attributes/sentry/sentry__user__geo__region.json

/**
 * Human readable region name or code. `sentry.user.geo.region`
 *
 * Attribute Value Type: `string` {@link SENTRY_USER_GEO_REGION_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link USER_GEO_REGION} `user.geo.region`
 *
 * @deprecated Use {@link USER_GEO_REGION} (user.geo.region) instead
 */
export const SENTRY_USER_GEO_REGION = 'sentry.user.geo.region';

/**
 * Type for {@link SENTRY_USER_GEO_REGION} sentry.user.geo.region
 */
export type SENTRY_USER_GEO_REGION_TYPE = string;

// Path: model/attributes/sentry/sentry__user__geo__subdivision.json

/**
 * Human readable subdivision name. `sentry.user.geo.subdivision`
 *
 * Attribute Value Type: `string` {@link SENTRY_USER_GEO_SUBDIVISION_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link USER_GEO_SUBDIVISION} `user.geo.subdivision`
 *
 * @deprecated Use {@link USER_GEO_SUBDIVISION} (user.geo.subdivision) instead
 */
export const SENTRY_USER_GEO_SUBDIVISION = 'sentry.user.geo.subdivision';

/**
 * Type for {@link SENTRY_USER_GEO_SUBDIVISION} sentry.user.geo.subdivision
 */
export type SENTRY_USER_GEO_SUBDIVISION_TYPE = string;

// Path: model/attributes/sentry/sentry__user__id.json

/**
 * Unique identifier of the user. `sentry.user.id`
 *
 * Attribute Value Type: `string` {@link SENTRY_USER_ID_TYPE}
 *
 * Apply Scrubbing: auto
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link USER_ID} `user.id`
 *
 * @deprecated Use {@link USER_ID} (user.id) instead
 */
export const SENTRY_USER_ID = 'sentry.user.id';

/**
 * Type for {@link SENTRY_USER_ID} sentry.user.id
 */
export type SENTRY_USER_ID_TYPE = string;

// Path: model/attributes/sentry/sentry__user__ip.json

/**
 * The IP address of the user. `sentry.user.ip`
 *
 * Attribute Value Type: `string` {@link SENTRY_USER_IP_TYPE}
 *
 * Apply Scrubbing: auto
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link USER_IP_ADDRESS} `user.ip_address`
 *
 * @deprecated Use {@link USER_IP_ADDRESS} (user.ip_address) instead
 */
export const SENTRY_USER_IP = 'sentry.user.ip';

/**
 * Type for {@link SENTRY_USER_IP} sentry.user.ip
 */
export type SENTRY_USER_IP_TYPE = string;

// Path: model/attributes/sentry/sentry__user__username.json

/**
 * Short name or login/username of the user. `sentry.user.username`
 *
 * Attribute Value Type: `string` {@link SENTRY_USER_USERNAME_TYPE}
 *
 * Apply Scrubbing: auto
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link USER_NAME} `user.name`
 *
 * @deprecated Use {@link USER_NAME} (user.name) instead
 */
export const SENTRY_USER_USERNAME = 'sentry.user.username';

/**
 * Type for {@link SENTRY_USER_USERNAME} sentry.user.username
 */
export type SENTRY_USER_USERNAME_TYPE = string;

// Path: model/attributes/server/server__address.json

/**
 * Server domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name. `server.address`
 *
 * Attribute Value Type: `string` {@link SERVER_ADDRESS_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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

// Path: model/attributes/session/session__id.json

/**
 * A unique id identifying the active session at the time of setting this attribute `session.id`
 *
 * Attribute Value Type: `string` {@link SESSION_ID_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * @example "00112233-4455-6677-8899-aabbccddeeff"
 */
export const SESSION_ID = 'session.id';

/**
 * Type for {@link SESSION_ID} session.id
 */
export type SESSION_ID_TYPE = string;

// Path: model/attributes/stall_percentage.json

/**
 * The fraction of time the app was stalled. Only applies to React Native. This is computed by Relay. `stall_percentage`
 *
 * Attribute Value Type: `number` {@link STALL_PERCENTAGE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 */
export const STALL_PERCENTAGE = 'stall_percentage';

/**
 * Type for {@link STALL_PERCENTAGE} stall_percentage
 */
export type STALL_PERCENTAGE_TYPE = number;

// Path: model/attributes/stall_total_time.json

/**
 * The combined duration of all stalls in milliseconds. Only applies to React Native. This is computed by Relay. `stall_total_time`
 *
 * Attribute Value Type: `number` {@link STALL_TOTAL_TIME_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 */
export const STALL_TOTAL_TIME = 'stall_total_time';

/**
 * Type for {@link STALL_TOTAL_TIME} stall_total_time
 */
export type STALL_TOTAL_TIME_TYPE = number;

// Path: model/attributes/state/state__type.json

/**
 * The type of state management library `state.type`
 *
 * Attribute Value Type: `string` {@link STATE_TYPE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "redux"
 */
export const STATE_TYPE = 'state.type';

/**
 * Type for {@link STATE_TYPE} state.type
 */
export type STATE_TYPE_TYPE = string;

// Path: model/attributes/thread/thread__id.json

/**
 * Current “managed” thread ID. `thread.id`
 *
 * Attribute Value Type: `number` {@link THREAD_ID_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * @example "main"
 */
export const THREAD_NAME = 'thread.name';

/**
 * Type for {@link THREAD_NAME} thread.name
 */
export type THREAD_NAME_TYPE = string;

// Path: model/attributes/timber/timber__tag.json

/**
 * The log tag provided by the timber logging framework. `timber.tag`
 *
 * Attribute Value Type: `string` {@link TIMBER_TAG_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "MyTag"
 */
export const TIMBER_TAG = 'timber.tag';

/**
 * Type for {@link TIMBER_TAG} timber.tag
 */
export type TIMBER_TAG_TYPE = string;

// Path: model/attributes/time_to_full_display.json

/**
 * The duration of time to full display in milliseconds `time_to_full_display`
 *
 * Attribute Value Type: `number` {@link TIME_TO_FULL_DISPLAY_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link APP_VITALS_TTFD_VALUE} `app.vitals.ttfd.value`
 *
 * @deprecated Use {@link APP_VITALS_TTFD_VALUE} (app.vitals.ttfd.value) instead - Replaced by app.vitals.ttfd.value to align with the app.vitals.* namespace for mobile performance attributes
 * @example 1234.56
 */
export const TIME_TO_FULL_DISPLAY = 'time_to_full_display';

/**
 * Type for {@link TIME_TO_FULL_DISPLAY} time_to_full_display
 */
export type TIME_TO_FULL_DISPLAY_TYPE = number;

// Path: model/attributes/time_to_initial_display.json

/**
 * The duration of time to initial display in milliseconds `time_to_initial_display`
 *
 * Attribute Value Type: `number` {@link TIME_TO_INITIAL_DISPLAY_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link APP_VITALS_TTID_VALUE} `app.vitals.ttid.value`
 *
 * @deprecated Use {@link APP_VITALS_TTID_VALUE} (app.vitals.ttid.value) instead - Replaced by app.vitals.ttid.value to align with the app.vitals.* namespace for mobile performance attributes
 * @example 1234.56
 */
export const TIME_TO_INITIAL_DISPLAY = 'time_to_initial_display';

/**
 * Type for {@link TIME_TO_INITIAL_DISPLAY} time_to_initial_display
 */
export type TIME_TO_INITIAL_DISPLAY_TYPE = number;

// Path: model/attributes/transaction.json

/**
 * The sentry transaction (segment name). `transaction`
 *
 * Attribute Value Type: `string` {@link TRANSACTION_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link SENTRY_SEGMENT_NAME} `sentry.segment.name`, {@link SENTRY_TRANSACTION} `sentry.transaction`
 *
 * @deprecated Use {@link SENTRY_SEGMENT_NAME} (sentry.segment.name) instead
 * @example "GET /"
 */
export const TRANSACTION = 'transaction';

/**
 * Type for {@link TRANSACTION} transaction
 */
export type TRANSACTION_TYPE = string;

// Path: model/attributes/trpc/trpc__procedure_path.json

/**
 * The path of the tRPC procedure being called `trpc.procedure_path`
 *
 * Attribute Value Type: `string` {@link TRPC_PROCEDURE_PATH_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "user.getById"
 */
export const TRPC_PROCEDURE_PATH = 'trpc.procedure_path';

/**
 * Type for {@link TRPC_PROCEDURE_PATH} trpc.procedure_path
 */
export type TRPC_PROCEDURE_PATH_TYPE = string;

// Path: model/attributes/trpc/trpc__procedure_type.json

/**
 * The type of the tRPC procedure `trpc.procedure_type`
 *
 * Attribute Value Type: `string` {@link TRPC_PROCEDURE_TYPE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "query"
 */
export const TRPC_PROCEDURE_TYPE = 'trpc.procedure_type';

/**
 * Type for {@link TRPC_PROCEDURE_TYPE} trpc.procedure_type
 */
export type TRPC_PROCEDURE_TYPE_TYPE = string;

// Path: model/attributes/ttfb.json

/**
 * The value of the recorded Time To First Byte (TTFB) web vital in milliseconds `ttfb`
 *
 * Attribute Value Type: `number` {@link TTFB_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link BROWSER_WEB_VITAL_TTFB_VALUE} `browser.web_vital.ttfb.value`
 *
 * @deprecated Use {@link BROWSER_WEB_VITAL_TTFB_VALUE} (browser.web_vital.ttfb.value) instead - This attribute is being deprecated in favor of browser.web_vital.ttfb.value
 * @example 194
 */
export const TTFB = 'ttfb';

/**
 * Type for {@link TTFB} ttfb
 */
export type TTFB_TYPE = number;

// Path: model/attributes/ttfb/ttfb__requestTime.json

/**
 * The time it takes for the server to process the initial request and send the first byte of a response to the user's browser `ttfb.requestTime`
 *
 * Attribute Value Type: `number` {@link TTFB_REQUESTTIME_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link BROWSER_WEB_VITAL_TTFB_REQUEST_TIME} `browser.web_vital.ttfb.request_time`
 *
 * @deprecated Use {@link BROWSER_WEB_VITAL_TTFB_REQUEST_TIME} (browser.web_vital.ttfb.request_time) instead - This attribute is being deprecated in favor of browser.web_vital.ttfb.request_time
 * @example 1554.5814
 */
export const TTFB_REQUESTTIME = 'ttfb.requestTime';

/**
 * Type for {@link TTFB_REQUESTTIME} ttfb.requestTime
 */
export type TTFB_REQUESTTIME_TYPE = number;

// Path: model/attributes/type.json

/**
 * More granular type of the operation happening. `type`
 *
 * Attribute Value Type: `string` {@link TYPE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example true
 */
export const UI_CONTRIBUTES_TO_TTID = 'ui.contributes_to_ttid';

/**
 * Type for {@link UI_CONTRIBUTES_TO_TTID} ui.contributes_to_ttid
 */
export type UI_CONTRIBUTES_TO_TTID_TYPE = boolean;

// Path: model/attributes/ui/ui__element__height.json

/**
 * The height of the UI element (for Html in pixels) `ui.element.height`
 *
 * Attribute Value Type: `number` {@link UI_ELEMENT_HEIGHT_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example 256
 */
export const UI_ELEMENT_HEIGHT = 'ui.element.height';

/**
 * Type for {@link UI_ELEMENT_HEIGHT} ui.element.height
 */
export type UI_ELEMENT_HEIGHT_TYPE = number;

// Path: model/attributes/ui/ui__element__id.json

/**
 * The id of the UI element `ui.element.id`
 *
 * Attribute Value Type: `string` {@link UI_ELEMENT_ID_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "btn-login"
 */
export const UI_ELEMENT_ID = 'ui.element.id';

/**
 * Type for {@link UI_ELEMENT_ID} ui.element.id
 */
export type UI_ELEMENT_ID_TYPE = string;

// Path: model/attributes/ui/ui__element__identifier.json

/**
 * The identifier used to measure the UI element timing `ui.element.identifier`
 *
 * Attribute Value Type: `string` {@link UI_ELEMENT_IDENTIFIER_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "heroImage"
 */
export const UI_ELEMENT_IDENTIFIER = 'ui.element.identifier';

/**
 * Type for {@link UI_ELEMENT_IDENTIFIER} ui.element.identifier
 */
export type UI_ELEMENT_IDENTIFIER_TYPE = string;

// Path: model/attributes/ui/ui__element__load_time.json

/**
 * The loading time of a UI element (from time origin to finished loading) `ui.element.load_time`
 *
 * Attribute Value Type: `number` {@link UI_ELEMENT_LOAD_TIME_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example 998.2234
 */
export const UI_ELEMENT_LOAD_TIME = 'ui.element.load_time';

/**
 * Type for {@link UI_ELEMENT_LOAD_TIME} ui.element.load_time
 */
export type UI_ELEMENT_LOAD_TIME_TYPE = number;

// Path: model/attributes/ui/ui__element__paint_type.json

/**
 * The type of element paint. Can either be 'image-paint' or 'text-paint' `ui.element.paint_type`
 *
 * Attribute Value Type: `string` {@link UI_ELEMENT_PAINT_TYPE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "image-paint"
 */
export const UI_ELEMENT_PAINT_TYPE = 'ui.element.paint_type';

/**
 * Type for {@link UI_ELEMENT_PAINT_TYPE} ui.element.paint_type
 */
export type UI_ELEMENT_PAINT_TYPE_TYPE = string;

// Path: model/attributes/ui/ui__element__render_time.json

/**
 * The rendering time of the UI element (from time origin to finished rendering) `ui.element.render_time`
 *
 * Attribute Value Type: `number` {@link UI_ELEMENT_RENDER_TIME_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example 1023.1124
 */
export const UI_ELEMENT_RENDER_TIME = 'ui.element.render_time';

/**
 * Type for {@link UI_ELEMENT_RENDER_TIME} ui.element.render_time
 */
export type UI_ELEMENT_RENDER_TIME_TYPE = number;

// Path: model/attributes/ui/ui__element__type.json

/**
 * type of the UI element `ui.element.type`
 *
 * Attribute Value Type: `string` {@link UI_ELEMENT_TYPE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "img"
 */
export const UI_ELEMENT_TYPE = 'ui.element.type';

/**
 * Type for {@link UI_ELEMENT_TYPE} ui.element.type
 */
export type UI_ELEMENT_TYPE_TYPE = string;

// Path: model/attributes/ui/ui__element__url.json

/**
 * The URL of the UI element (e.g. an img src) `ui.element.url`
 *
 * Attribute Value Type: `string` {@link UI_ELEMENT_URL_TYPE}
 *
 * Apply Scrubbing: auto
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "https://assets.myapp.com/hero.png"
 */
export const UI_ELEMENT_URL = 'ui.element.url';

/**
 * Type for {@link UI_ELEMENT_URL} ui.element.url
 */
export type UI_ELEMENT_URL_TYPE = string;

// Path: model/attributes/ui/ui__element__width.json

/**
 * The width of the UI element (for HTML in pixels) `ui.element.width`
 *
 * Attribute Value Type: `number` {@link UI_ELEMENT_WIDTH_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example 512
 */
export const UI_ELEMENT_WIDTH = 'ui.element.width';

/**
 * Type for {@link UI_ELEMENT_WIDTH} ui.element.width
 */
export type UI_ELEMENT_WIDTH_TYPE = number;

// Path: model/attributes/url.json

/**
 * The URL of the resource that was fetched. `url`
 *
 * Attribute Value Type: `string` {@link URL_TYPE}
 *
 * Apply Scrubbing: auto
 *
 * Attribute defined in OTEL: No
 * Visibility: public
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

// Path: model/attributes/url/url__domain.json

/**
 * Server domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name. `url.domain`
 *
 * Attribute Value Type: `string` {@link URL_DOMAIN_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: auto
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: auto
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: auto
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: auto
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Has Dynamic Suffix: true
 *
 * Aliases: {@link PARAMS_KEY} `params.<key>`
 *
 * @example "url.path.parameter.id='123'"
 */
export const URL_PATH_PARAMETER_KEY = 'url.path.parameter.<key>';

/**
 * Base key for {@link URL_PATH_PARAMETER_KEY}. Use with a dynamic suffix, e.g. `${URL_PATH_PARAMETER_KEY_BASE}.${key}`.
 */
export const URL_PATH_PARAMETER_KEY_BASE = 'url.path.parameter';

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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: auto - Query string values can contain sensitive information. Clients should attempt to scrub parameters that might contain sensitive information.
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * @example "foo=bar&bar=baz"
 */
export const URL_QUERY = 'url.query';

/**
 * Type for {@link URL_QUERY} url.query
 */
export type URL_QUERY_TYPE = string;

// Path: model/attributes/url/url__same_origin.json

/**
 * Indicates that a URL has the same origin as the current page's origin in the browser. `url.same_origin`
 *
 * Attribute Value Type: `boolean` {@link URL_SAME_ORIGIN_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link HTTP_REQUEST_SAME_ORIGIN} `http.request.same_origin`
 *
 * @deprecated Use {@link HTTP_REQUEST_SAME_ORIGIN} (http.request.same_origin) instead - This attribute is being deprecated in favor of http.request.same_origin.
 * @example true
 */
export const URL_SAME_ORIGIN = 'url.same_origin';

/**
 * Type for {@link URL_SAME_ORIGIN} url.same_origin
 */
export type URL_SAME_ORIGIN_TYPE = boolean;

// Path: model/attributes/url/url__scheme.json

/**
 * The URI scheme component identifying the used protocol. `url.scheme`
 *
 * Attribute Value Type: `string` {@link URL_SCHEME_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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

// Path: model/attributes/user_agent/user_agent__original.json

/**
 * Value of the HTTP User-Agent header sent by the client. `user_agent.original`
 *
 * Attribute Value Type: `string` {@link USER_AGENT_ORIGINAL_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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

// Path: model/attributes/user/user__email.json

/**
 * User email address. `user.email`
 *
 * Attribute Value Type: `string` {@link USER_EMAIL_TYPE}
 *
 * Apply Scrubbing: auto
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * Aliases: {@link SENTRY_USER_EMAIL} `sentry.user.email`
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
 * Apply Scrubbing: auto
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link SENTRY_USER_GEO_CITY} `sentry.user.geo.city`
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link SENTRY_USER_GEO_COUNTRY_CODE} `sentry.user.geo.country_code`
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link SENTRY_USER_GEO_REGION} `sentry.user.geo.region`
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
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link SENTRY_USER_GEO_SUBDIVISION} `sentry.user.geo.subdivision`
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
 * Apply Scrubbing: auto
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
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
 * Apply Scrubbing: auto
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * Aliases: {@link SENTRY_USER_ID} `sentry.user.id`
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
 * Apply Scrubbing: auto
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * Aliases: {@link SENTRY_USER_IP} `sentry.user.ip`
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
 * Apply Scrubbing: auto
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * Aliases: {@link SENTRY_USER_USERNAME} `sentry.user.username`
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
 * Apply Scrubbing: auto
 *
 * Attribute defined in OTEL: Yes
 * Visibility: public
 *
 * @example ["admin","editor"]
 */
export const USER_ROLES = 'user.roles';

/**
 * Type for {@link USER_ROLES} user.roles
 */
export type USER_ROLES_TYPE = Array<string>;

// Path: model/attributes/vercel/vercel__branch.json

/**
 * Git branch name for Vercel project `vercel.branch`
 *
 * Attribute Value Type: `string` {@link VERCEL_BRANCH_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "main"
 */
export const VERCEL_BRANCH = 'vercel.branch';

/**
 * Type for {@link VERCEL_BRANCH} vercel.branch
 */
export type VERCEL_BRANCH_TYPE = string;

// Path: model/attributes/vercel/vercel__build_id.json

/**
 * Identifier for the Vercel build (only present on build logs) `vercel.build_id`
 *
 * Attribute Value Type: `string` {@link VERCEL_BUILD_ID_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "bld_cotnkcr76"
 */
export const VERCEL_BUILD_ID = 'vercel.build_id';

/**
 * Type for {@link VERCEL_BUILD_ID} vercel.build_id
 */
export type VERCEL_BUILD_ID_TYPE = string;

// Path: model/attributes/vercel/vercel__deployment_id.json

/**
 * Identifier for the Vercel deployment `vercel.deployment_id`
 *
 * Attribute Value Type: `string` {@link VERCEL_DEPLOYMENT_ID_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "dpl_233NRGRjVZX1caZrXWtz5g1TAksD"
 */
export const VERCEL_DEPLOYMENT_ID = 'vercel.deployment_id';

/**
 * Type for {@link VERCEL_DEPLOYMENT_ID} vercel.deployment_id
 */
export type VERCEL_DEPLOYMENT_ID_TYPE = string;

// Path: model/attributes/vercel/vercel__destination.json

/**
 * Origin of the external content in Vercel (only on external logs) `vercel.destination`
 *
 * Attribute Value Type: `string` {@link VERCEL_DESTINATION_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "https://vitals.vercel-insights.com/v1"
 */
export const VERCEL_DESTINATION = 'vercel.destination';

/**
 * Type for {@link VERCEL_DESTINATION} vercel.destination
 */
export type VERCEL_DESTINATION_TYPE = string;

// Path: model/attributes/vercel/vercel__edge_type.json

/**
 * Type of edge runtime in Vercel `vercel.edge_type`
 *
 * Attribute Value Type: `string` {@link VERCEL_EDGE_TYPE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "edge-function"
 */
export const VERCEL_EDGE_TYPE = 'vercel.edge_type';

/**
 * Type for {@link VERCEL_EDGE_TYPE} vercel.edge_type
 */
export type VERCEL_EDGE_TYPE_TYPE = string;

// Path: model/attributes/vercel/vercel__entrypoint.json

/**
 * Entrypoint for the request in Vercel `vercel.entrypoint`
 *
 * Attribute Value Type: `string` {@link VERCEL_ENTRYPOINT_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "api/index.js"
 */
export const VERCEL_ENTRYPOINT = 'vercel.entrypoint';

/**
 * Type for {@link VERCEL_ENTRYPOINT} vercel.entrypoint
 */
export type VERCEL_ENTRYPOINT_TYPE = string;

// Path: model/attributes/vercel/vercel__execution_region.json

/**
 * Region where the request is executed `vercel.execution_region`
 *
 * Attribute Value Type: `string` {@link VERCEL_EXECUTION_REGION_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "sfo1"
 */
export const VERCEL_EXECUTION_REGION = 'vercel.execution_region';

/**
 * Type for {@link VERCEL_EXECUTION_REGION} vercel.execution_region
 */
export type VERCEL_EXECUTION_REGION_TYPE = string;

// Path: model/attributes/vercel/vercel__id.json

/**
 * Unique identifier for the log entry in Vercel `vercel.id`
 *
 * Attribute Value Type: `string` {@link VERCEL_ID_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "1573817187330377061717300000"
 */
export const VERCEL_ID = 'vercel.id';

/**
 * Type for {@link VERCEL_ID} vercel.id
 */
export type VERCEL_ID_TYPE = string;

// Path: model/attributes/vercel/vercel__ja3_digest.json

/**
 * JA3 fingerprint digest of Vercel request `vercel.ja3_digest`
 *
 * Attribute Value Type: `string` {@link VERCEL_JA3_DIGEST_TYPE}
 *
 * Apply Scrubbing: auto
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "769,47-53-5-10-49161-49162-49171-49172-50-56-19-4,0-10-11,23-24-25,0"
 */
export const VERCEL_JA3_DIGEST = 'vercel.ja3_digest';

/**
 * Type for {@link VERCEL_JA3_DIGEST} vercel.ja3_digest
 */
export type VERCEL_JA3_DIGEST_TYPE = string;

// Path: model/attributes/vercel/vercel__ja4_digest.json

/**
 * JA4 fingerprint digest `vercel.ja4_digest`
 *
 * Attribute Value Type: `string` {@link VERCEL_JA4_DIGEST_TYPE}
 *
 * Apply Scrubbing: auto
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "t13d1516h2_8daaf6152771_02713d6af862"
 */
export const VERCEL_JA4_DIGEST = 'vercel.ja4_digest';

/**
 * Type for {@link VERCEL_JA4_DIGEST} vercel.ja4_digest
 */
export type VERCEL_JA4_DIGEST_TYPE = string;

// Path: model/attributes/vercel/vercel__log_type.json

/**
 * Vercel log output type `vercel.log_type`
 *
 * Attribute Value Type: `string` {@link VERCEL_LOG_TYPE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "stdout"
 */
export const VERCEL_LOG_TYPE = 'vercel.log_type';

/**
 * Type for {@link VERCEL_LOG_TYPE} vercel.log_type
 */
export type VERCEL_LOG_TYPE_TYPE = string;

// Path: model/attributes/vercel/vercel__path.json

/**
 * Function or dynamic path of the request in Vercel. `vercel.path`
 *
 * Attribute Value Type: `string` {@link VERCEL_PATH_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "/dynamic/[route].json"
 */
export const VERCEL_PATH = 'vercel.path';

/**
 * Type for {@link VERCEL_PATH} vercel.path
 */
export type VERCEL_PATH_TYPE = string;

// Path: model/attributes/vercel/vercel__project_id.json

/**
 * Identifier for the Vercel project `vercel.project_id`
 *
 * Attribute Value Type: `string` {@link VERCEL_PROJECT_ID_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "gdufoJxB6b9b1fEqr1jUtFkyavUU"
 */
export const VERCEL_PROJECT_ID = 'vercel.project_id';

/**
 * Type for {@link VERCEL_PROJECT_ID} vercel.project_id
 */
export type VERCEL_PROJECT_ID_TYPE = string;

// Path: model/attributes/vercel/vercel__project_name.json

/**
 * Name of the Vercel project `vercel.project_name`
 *
 * Attribute Value Type: `string` {@link VERCEL_PROJECT_NAME_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "my-app"
 */
export const VERCEL_PROJECT_NAME = 'vercel.project_name';

/**
 * Type for {@link VERCEL_PROJECT_NAME} vercel.project_name
 */
export type VERCEL_PROJECT_NAME_TYPE = string;

// Path: model/attributes/vercel/vercel__proxy__cache_id.json

/**
 * Original request ID when request is served from cache `vercel.proxy.cache_id`
 *
 * Attribute Value Type: `string` {@link VERCEL_PROXY_CACHE_ID_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "pdx1::v8g4b-1744143786684-93dafbc0f70d"
 */
export const VERCEL_PROXY_CACHE_ID = 'vercel.proxy.cache_id';

/**
 * Type for {@link VERCEL_PROXY_CACHE_ID} vercel.proxy.cache_id
 */
export type VERCEL_PROXY_CACHE_ID_TYPE = string;

// Path: model/attributes/vercel/vercel__proxy__client_ip.json

/**
 * Client IP address `vercel.proxy.client_ip`
 *
 * Attribute Value Type: `string` {@link VERCEL_PROXY_CLIENT_IP_TYPE}
 *
 * Apply Scrubbing: auto
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "120.75.16.101"
 */
export const VERCEL_PROXY_CLIENT_IP = 'vercel.proxy.client_ip';

/**
 * Type for {@link VERCEL_PROXY_CLIENT_IP} vercel.proxy.client_ip
 */
export type VERCEL_PROXY_CLIENT_IP_TYPE = string;

// Path: model/attributes/vercel/vercel__proxy__host.json

/**
 * Hostname of the request `vercel.proxy.host`
 *
 * Attribute Value Type: `string` {@link VERCEL_PROXY_HOST_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "test.vercel.app"
 */
export const VERCEL_PROXY_HOST = 'vercel.proxy.host';

/**
 * Type for {@link VERCEL_PROXY_HOST} vercel.proxy.host
 */
export type VERCEL_PROXY_HOST_TYPE = string;

// Path: model/attributes/vercel/vercel__proxy__lambda_region.json

/**
 * Region where lambda function executed `vercel.proxy.lambda_region`
 *
 * Attribute Value Type: `string` {@link VERCEL_PROXY_LAMBDA_REGION_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "sfo1"
 */
export const VERCEL_PROXY_LAMBDA_REGION = 'vercel.proxy.lambda_region';

/**
 * Type for {@link VERCEL_PROXY_LAMBDA_REGION} vercel.proxy.lambda_region
 */
export type VERCEL_PROXY_LAMBDA_REGION_TYPE = string;

// Path: model/attributes/vercel/vercel__proxy__method.json

/**
 * HTTP method of the request `vercel.proxy.method`
 *
 * Attribute Value Type: `string` {@link VERCEL_PROXY_METHOD_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "GET"
 */
export const VERCEL_PROXY_METHOD = 'vercel.proxy.method';

/**
 * Type for {@link VERCEL_PROXY_METHOD} vercel.proxy.method
 */
export type VERCEL_PROXY_METHOD_TYPE = string;

// Path: model/attributes/vercel/vercel__proxy__path.json

/**
 * Request path with query parameters `vercel.proxy.path`
 *
 * Attribute Value Type: `string` {@link VERCEL_PROXY_PATH_TYPE}
 *
 * Apply Scrubbing: auto
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "/dynamic/some-value.json?route=some-value"
 */
export const VERCEL_PROXY_PATH = 'vercel.proxy.path';

/**
 * Type for {@link VERCEL_PROXY_PATH} vercel.proxy.path
 */
export type VERCEL_PROXY_PATH_TYPE = string;

// Path: model/attributes/vercel/vercel__proxy__path_type.json

/**
 * How the request was served based on its path and project configuration `vercel.proxy.path_type`
 *
 * Attribute Value Type: `string` {@link VERCEL_PROXY_PATH_TYPE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "func"
 */
export const VERCEL_PROXY_PATH_TYPE = 'vercel.proxy.path_type';

/**
 * Type for {@link VERCEL_PROXY_PATH_TYPE} vercel.proxy.path_type
 */
export type VERCEL_PROXY_PATH_TYPE_TYPE = string;

// Path: model/attributes/vercel/vercel__proxy__path_type_variant.json

/**
 * Variant of the path type `vercel.proxy.path_type_variant`
 *
 * Attribute Value Type: `string` {@link VERCEL_PROXY_PATH_TYPE_VARIANT_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "api"
 */
export const VERCEL_PROXY_PATH_TYPE_VARIANT = 'vercel.proxy.path_type_variant';

/**
 * Type for {@link VERCEL_PROXY_PATH_TYPE_VARIANT} vercel.proxy.path_type_variant
 */
export type VERCEL_PROXY_PATH_TYPE_VARIANT_TYPE = string;

// Path: model/attributes/vercel/vercel__proxy__referer.json

/**
 * Referer of the request `vercel.proxy.referer`
 *
 * Attribute Value Type: `string` {@link VERCEL_PROXY_REFERER_TYPE}
 *
 * Apply Scrubbing: auto
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "*.vercel.app"
 */
export const VERCEL_PROXY_REFERER = 'vercel.proxy.referer';

/**
 * Type for {@link VERCEL_PROXY_REFERER} vercel.proxy.referer
 */
export type VERCEL_PROXY_REFERER_TYPE = string;

// Path: model/attributes/vercel/vercel__proxy__region.json

/**
 * Region where the request is processed `vercel.proxy.region`
 *
 * Attribute Value Type: `string` {@link VERCEL_PROXY_REGION_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "sfo1"
 */
export const VERCEL_PROXY_REGION = 'vercel.proxy.region';

/**
 * Type for {@link VERCEL_PROXY_REGION} vercel.proxy.region
 */
export type VERCEL_PROXY_REGION_TYPE = string;

// Path: model/attributes/vercel/vercel__proxy__response_byte_size.json

/**
 * Size of the response in bytes `vercel.proxy.response_byte_size`
 *
 * Attribute Value Type: `number` {@link VERCEL_PROXY_RESPONSE_BYTE_SIZE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example 1024
 */
export const VERCEL_PROXY_RESPONSE_BYTE_SIZE = 'vercel.proxy.response_byte_size';

/**
 * Type for {@link VERCEL_PROXY_RESPONSE_BYTE_SIZE} vercel.proxy.response_byte_size
 */
export type VERCEL_PROXY_RESPONSE_BYTE_SIZE_TYPE = number;

// Path: model/attributes/vercel/vercel__proxy__scheme.json

/**
 * Protocol of the request `vercel.proxy.scheme`
 *
 * Attribute Value Type: `string` {@link VERCEL_PROXY_SCHEME_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "https"
 */
export const VERCEL_PROXY_SCHEME = 'vercel.proxy.scheme';

/**
 * Type for {@link VERCEL_PROXY_SCHEME} vercel.proxy.scheme
 */
export type VERCEL_PROXY_SCHEME_TYPE = string;

// Path: model/attributes/vercel/vercel__proxy__status_code.json

/**
 * HTTP status code of the proxy request `vercel.proxy.status_code`
 *
 * Attribute Value Type: `number` {@link VERCEL_PROXY_STATUS_CODE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example 200
 */
export const VERCEL_PROXY_STATUS_CODE = 'vercel.proxy.status_code';

/**
 * Type for {@link VERCEL_PROXY_STATUS_CODE} vercel.proxy.status_code
 */
export type VERCEL_PROXY_STATUS_CODE_TYPE = number;

// Path: model/attributes/vercel/vercel__proxy__timestamp.json

/**
 * Unix timestamp when the proxy request was made `vercel.proxy.timestamp`
 *
 * Attribute Value Type: `number` {@link VERCEL_PROXY_TIMESTAMP_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example 1573817250172
 */
export const VERCEL_PROXY_TIMESTAMP = 'vercel.proxy.timestamp';

/**
 * Type for {@link VERCEL_PROXY_TIMESTAMP} vercel.proxy.timestamp
 */
export type VERCEL_PROXY_TIMESTAMP_TYPE = number;

// Path: model/attributes/vercel/vercel__proxy__user_agent.json

/**
 * User agent strings of the request `vercel.proxy.user_agent`
 *
 * Attribute Value Type: `Array<string>` {@link VERCEL_PROXY_USER_AGENT_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example ["Mozilla/5.0..."]
 */
export const VERCEL_PROXY_USER_AGENT = 'vercel.proxy.user_agent';

/**
 * Type for {@link VERCEL_PROXY_USER_AGENT} vercel.proxy.user_agent
 */
export type VERCEL_PROXY_USER_AGENT_TYPE = Array<string>;

// Path: model/attributes/vercel/vercel__proxy__vercel_cache.json

/**
 * Cache status sent to the browser `vercel.proxy.vercel_cache`
 *
 * Attribute Value Type: `string` {@link VERCEL_PROXY_VERCEL_CACHE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "REVALIDATED"
 */
export const VERCEL_PROXY_VERCEL_CACHE = 'vercel.proxy.vercel_cache';

/**
 * Type for {@link VERCEL_PROXY_VERCEL_CACHE} vercel.proxy.vercel_cache
 */
export type VERCEL_PROXY_VERCEL_CACHE_TYPE = string;

// Path: model/attributes/vercel/vercel__proxy__vercel_id.json

/**
 * Vercel-specific identifier `vercel.proxy.vercel_id`
 *
 * Attribute Value Type: `string` {@link VERCEL_PROXY_VERCEL_ID_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "sfo1::abc123"
 */
export const VERCEL_PROXY_VERCEL_ID = 'vercel.proxy.vercel_id';

/**
 * Type for {@link VERCEL_PROXY_VERCEL_ID} vercel.proxy.vercel_id
 */
export type VERCEL_PROXY_VERCEL_ID_TYPE = string;

// Path: model/attributes/vercel/vercel__proxy__waf_action.json

/**
 * Action taken by firewall rules `vercel.proxy.waf_action`
 *
 * Attribute Value Type: `string` {@link VERCEL_PROXY_WAF_ACTION_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "deny"
 */
export const VERCEL_PROXY_WAF_ACTION = 'vercel.proxy.waf_action';

/**
 * Type for {@link VERCEL_PROXY_WAF_ACTION} vercel.proxy.waf_action
 */
export type VERCEL_PROXY_WAF_ACTION_TYPE = string;

// Path: model/attributes/vercel/vercel__proxy__waf_rule_id.json

/**
 * ID of the firewall rule that matched `vercel.proxy.waf_rule_id`
 *
 * Attribute Value Type: `string` {@link VERCEL_PROXY_WAF_RULE_ID_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "rule_gAHz8jtSB1Gy"
 */
export const VERCEL_PROXY_WAF_RULE_ID = 'vercel.proxy.waf_rule_id';

/**
 * Type for {@link VERCEL_PROXY_WAF_RULE_ID} vercel.proxy.waf_rule_id
 */
export type VERCEL_PROXY_WAF_RULE_ID_TYPE = string;

// Path: model/attributes/vercel/vercel__request_id.json

/**
 * Identifier of the Vercel request `vercel.request_id`
 *
 * Attribute Value Type: `string` {@link VERCEL_REQUEST_ID_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "643af4e3-975a-4cc7-9e7a-1eda11539d90"
 */
export const VERCEL_REQUEST_ID = 'vercel.request_id';

/**
 * Type for {@link VERCEL_REQUEST_ID} vercel.request_id
 */
export type VERCEL_REQUEST_ID_TYPE = string;

// Path: model/attributes/vercel/vercel__source.json

/**
 * Origin of the Vercel log (build, edge, lambda, static, external, or firewall) `vercel.source`
 *
 * Attribute Value Type: `string` {@link VERCEL_SOURCE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example "build"
 */
export const VERCEL_SOURCE = 'vercel.source';

/**
 * Type for {@link VERCEL_SOURCE} vercel.source
 */
export type VERCEL_SOURCE_TYPE = string;

// Path: model/attributes/vercel/vercel__status_code.json

/**
 * HTTP status code of the request (-1 means no response returned and the lambda crashed) `vercel.status_code`
 *
 * Attribute Value Type: `number` {@link VERCEL_STATUS_CODE_TYPE}
 *
 * Apply Scrubbing: manual
 *
 * Attribute defined in OTEL: No
 * Visibility: public
 *
 * @example 200
 */
export const VERCEL_STATUS_CODE = 'vercel.status_code';

/**
 * Type for {@link VERCEL_STATUS_CODE} vercel.status_code
 */
export type VERCEL_STATUS_CODE_TYPE = number;

export type AttributeType =
  | 'string'
  | 'boolean'
  | 'integer'
  | 'double'
  | 'string[]'
  | 'boolean[]'
  | 'integer[]'
  | 'double[]'
  | 'any';

export type ApplyScrubbing = 'auto' | 'manual' | 'never';

export type AttributeVisibility = 'public' | 'internal';

export interface ApplyScrubbingInfo {
  /** How PII scrubbing should be applied to the attribute value */
  key: ApplyScrubbing;
  /** Reason why this scrubbing mode applies */
  reason?: string;
}

export interface DeprecationInfo {
  /** What this attribute was replaced with */
  replacement?: string;
  /** Reason for deprecation */
  reason?: string;
}

export interface ChangelogEntry {
  /** The sentry-conventions release version */
  version: string;
  /** GitHub PR numbers */
  prs?: number[];
  /** Optional description of what changed */
  description?: string;
}

export interface AttributeMetadata {
  /** A description of the attribute */
  brief: string;
  /** The type of the attribute value */
  type: AttributeType;
  /** How PII scrubbing should be applied to the attribute value */
  applyScrubbing: ApplyScrubbingInfo;
  /** Whether the attribute is defined in OpenTelemetry Semantic Conventions */
  isInOtel: boolean;
  /** Whether the attribute is public or internal to Sentry */
  visibility: AttributeVisibility;
  /** If an attribute has a dynamic suffix */
  hasDynamicSuffix?: boolean;
  /** An example value of the attribute */
  example?: AttributeValue;
  /** If an attribute was deprecated, and what it was replaced with */
  deprecation?: DeprecationInfo;
  /** If there are attributes that alias to this attribute */
  aliases?: AttributeName[];
  /** Changelog entries tracking how this attribute has changed across versions */
  changelog?: ChangelogEntry[];
  /** A list of freeform notes providing additional context about how this attribute behaves, common pitfalls, or query-time nuances */
  additionalContext?: string[];
}

export const ATTRIBUTE_TYPE: Record<string, AttributeType> = {
  'ai.citations': 'string[]',
  'ai.completion_tokens.used': 'integer',
  'ai.documents': 'string[]',
  'ai.finish_reason': 'string',
  'ai.frequency_penalty': 'double',
  'ai.function_call': 'string',
  'ai.generation_id': 'string',
  'ai.input_messages': 'string',
  'ai.is_search_required': 'boolean',
  'ai.metadata': 'string',
  'ai.model_id': 'string',
  'ai.model.provider': 'string',
  'ai.pipeline.name': 'string',
  'ai.preamble': 'string',
  'ai.presence_penalty': 'double',
  'ai.prompt_tokens.used': 'integer',
  'ai.raw_prompting': 'boolean',
  'ai.responses': 'string[]',
  'ai.response_format': 'string',
  'ai.search_queries': 'string[]',
  'ai.search_results': 'string[]',
  'ai.seed': 'string',
  'ai.streaming': 'boolean',
  'ai.tags': 'string',
  'ai.temperature': 'double',
  'ai.texts': 'string[]',
  'ai.tools': 'string[]',
  'ai.tool_calls': 'string[]',
  'ai.top_k': 'integer',
  'ai.top_p': 'double',
  'ai.total_cost': 'double',
  'ai.total_tokens.used': 'integer',
  'ai.warnings': 'string[]',
  'angular.version': 'string',
  'app.app_build': 'string',
  'app.app_identifier': 'string',
  'app.app_name': 'string',
  'app.app_start_time': 'string',
  'app.app_version': 'string',
  'app.build': 'string',
  'app.identifier': 'string',
  'app.in_foreground': 'boolean',
  'app.name': 'string',
  app_start_cold: 'double',
  'app.start_time': 'string',
  app_start_type: 'string',
  app_start_warm: 'double',
  'app.version': 'string',
  'app.vitals.frames.delay.value': 'integer',
  'app.vitals.frames.frozen.count': 'integer',
  'app.vitals.frames.slow.count': 'integer',
  'app.vitals.frames.total.count': 'integer',
  'app.vitals.start.cold.value': 'double',
  'app.vitals.start.prewarmed': 'boolean',
  'app.vitals.start.reason': 'string',
  'app.vitals.start.screen': 'string',
  'app.vitals.start.type': 'string',
  'app.vitals.start.warm.value': 'double',
  'app.vitals.ttfd.value': 'double',
  'app.vitals.ttid.value': 'double',
  'art.gc.blocking_count': 'integer',
  'art.gc.blocking_time': 'double',
  'art.gc.pre_oome_count': 'integer',
  'art.gc.total_count': 'integer',
  'art.gc.total_time': 'double',
  'art.gc.waiting_time': 'double',
  'art.memory.free': 'integer',
  'art.memory.free_until_gc': 'integer',
  'art.memory.free_until_oome': 'integer',
  'art.memory.max': 'integer',
  'art.memory.total': 'integer',
  'aws.cloudwatch.logs.log_group': 'string',
  'aws.cloudwatch.logs.log_stream': 'string',
  'aws.cloudwatch.logs.url': 'string',
  'aws.lambda.aws_request_id': 'string',
  'aws.lambda.execution_duration_in_millis': 'double',
  'aws.lambda.function_name': 'string',
  'aws.lambda.function_version': 'string',
  'aws.lambda.invoked_arn': 'string',
  'aws.lambda.invoked_function_arn': 'string',
  'aws.lambda.remaining_time_in_millis': 'double',
  'aws.log.group.names': 'string[]',
  'aws.log.stream.names': 'string[]',
  blocked_main_thread: 'boolean',
  'browser.name': 'string',
  'browser.performance.navigation.activation_start': 'double',
  'browser.performance.time_origin': 'double',
  'browser.report.type': 'string',
  'browser.script.invoker': 'string',
  'browser.script.invoker_type': 'string',
  'browser.script.source_char_position': 'integer',
  'browser.version': 'string',
  'browser.web_vital.cls.report_event': 'string',
  'browser.web_vital.cls.source.<key>': 'string',
  'browser.web_vital.cls.value': 'double',
  'browser.web_vital.fcp.value': 'double',
  'browser.web_vital.fp.value': 'double',
  'browser.web_vital.inp.value': 'double',
  'browser.web_vital.lcp.element': 'string',
  'browser.web_vital.lcp.id': 'string',
  'browser.web_vital.lcp.load_time': 'integer',
  'browser.web_vital.lcp.render_time': 'integer',
  'browser.web_vital.lcp.report_event': 'string',
  'browser.web_vital.lcp.size': 'integer',
  'browser.web_vital.lcp.url': 'string',
  'browser.web_vital.lcp.value': 'double',
  'browser.web_vital.ttfb.request_time': 'double',
  'browser.web_vital.ttfb.value': 'double',
  'cache.hit': 'boolean',
  'cache.item_size': 'integer',
  'cache.key': 'string[]',
  'cache.operation': 'string',
  'cache.ttl': 'integer',
  'cache.write': 'boolean',
  channel: 'string',
  'client.address': 'string',
  'client.port': 'integer',
  'cloudflare.d1.duration': 'integer',
  'cloudflare.d1.query_type': 'string',
  'cloudflare.d1.rows_read': 'integer',
  'cloudflare.d1.rows_written': 'integer',
  'cloudflare.durable_object.query.bindings': 'integer',
  'cloudflare.durable_object.response.rows_read': 'integer',
  'cloudflare.durable_object.response.rows_written': 'integer',
  'cloudflare.r2.bucket': 'string',
  'cloudflare.r2.operation': 'string',
  'cloudflare.r2.request.delimiter': 'string',
  'cloudflare.r2.request.key': 'string',
  'cloudflare.r2.request.part_number': 'integer',
  'cloudflare.r2.request.prefix': 'string',
  'cloudflare.workflow.attempt': 'integer',
  'cloudflare.workflow.retries.backoff': 'string',
  'cloudflare.workflow.retries.delay': 'string',
  'cloudflare.workflow.retries.limit': 'integer',
  'cloudflare.workflow.timeout': 'string',
  'cloud.account.id': 'string',
  'cloud.availability_zone': 'string',
  'cloud.platform': 'string',
  'cloud.provider': 'string',
  'cloud.region': 'string',
  'cloud.resource_id': 'string',
  cls: 'double',
  'cls.source.<key>': 'string',
  'code.filepath': 'string',
  'code.file.path': 'string',
  'code.function': 'string',
  'code.function.name': 'string',
  'code.lineno': 'integer',
  'code.line.number': 'integer',
  'code.namespace': 'string',
  connectionType: 'string',
  'connection.rtt': 'integer',
  'culture.calendar': 'string',
  'culture.display_name': 'string',
  'culture.is_24_hour_format': 'boolean',
  'culture.locale': 'string',
  'culture.timezone': 'string',
  'db.collection.name': 'string',
  'db.driver.name': 'string',
  'db.name': 'string',
  'db.namespace': 'string',
  'db.operation': 'string',
  'db.operation.batch.size': 'integer',
  'db.operation.name': 'string',
  'db.query.parameter.<key>': 'string',
  'db.query.summary': 'string',
  'db.query.text': 'string',
  'db.redis.connection': 'string',
  'db.redis.key': 'string',
  'db.redis.parameters': 'string[]',
  'db.response.status_code': 'string',
  'db.sql.bindings': 'string[]',
  'db.statement': 'string',
  'db.stored_procedure.name': 'string',
  'db.system': 'string',
  'db.system.name': 'string',
  'db.user': 'string',
  deviceMemory: 'string',
  'device.archs': 'string[]',
  'device.battery_level': 'double',
  'device.battery_temperature': 'double',
  'device.boot_time': 'string',
  'device.brand': 'string',
  'device.charging': 'boolean',
  'device.chipset': 'string',
  'device.class': 'string',
  'device.connection_type': 'string',
  'device.cpu_description': 'string',
  'device.external_free_storage': 'integer',
  'device.external_storage_size': 'integer',
  'device.family': 'string',
  'device.free_memory': 'integer',
  'device.free_storage': 'integer',
  'device.id': 'string',
  'device.locale': 'string',
  'device.low_memory': 'boolean',
  'device.low_power_mode': 'boolean',
  'device.manufacturer': 'string',
  'device.memory.estimated_capacity': 'integer',
  'device.memory_size': 'integer',
  'device.model': 'string',
  'device.model_id': 'string',
  'device.name': 'string',
  'device.online': 'boolean',
  'device.orientation': 'string',
  'device.processor_count': 'integer',
  'device.processor_frequency': 'double',
  'device.screen_density': 'double',
  'device.screen_dpi': 'integer',
  'device.screen_height_pixels': 'integer',
  'device.screen_width_pixels': 'integer',
  'device.simulator': 'boolean',
  'device.storage_size': 'integer',
  'device.thermal_state': 'string',
  'device.timezone': 'string',
  'device.usable_memory': 'integer',
  effectiveConnectionType: 'string',
  environment: 'string',
  'error.type': 'string',
  'event.id': 'integer',
  'event.name': 'string',
  'exception.escaped': 'boolean',
  'exception.message': 'string',
  'exception.stacktrace': 'string',
  'exception.type': 'string',
  'faas.coldstart': 'boolean',
  'faas.cron': 'string',
  'faas.duration_in_ms': 'integer',
  'faas.entry_point': 'string',
  'faas.identity': 'string',
  'faas.invocation_id': 'string',
  'faas.name': 'string',
  'faas.time': 'string',
  'faas.trigger': 'string',
  'faas.version': 'string',
  fcp: 'double',
  'flag.evaluation.<key>': 'boolean',
  fp: 'double',
  'frames.delay': 'integer',
  'frames.frozen': 'integer',
  frames_frozen_rate: 'double',
  'frames.slow': 'integer',
  frames_slow_rate: 'double',
  'frames.total': 'integer',
  fs_error: 'string',
  'gcp.function.context.event_id': 'string',
  'gcp.function.context.event_type': 'string',
  'gcp.function.context.id': 'string',
  'gcp.function.context.resource': 'string',
  'gcp.function.context.source': 'string',
  'gcp.function.context.specversion': 'string',
  'gcp.function.context.time': 'string',
  'gcp.function.context.timestamp': 'string',
  'gcp.function.context.type': 'string',
  'gcp.project.id': 'string',
  'gen_ai.agent.name': 'string',
  'gen_ai.context.utilization': 'double',
  'gen_ai.context.window_size': 'integer',
  'gen_ai.conversation.id': 'string',
  'gen_ai.cost.cache_creation.input_tokens': 'double',
  'gen_ai.cost.cache_read.input_tokens': 'double',
  'gen_ai.cost.input_tokens': 'double',
  'gen_ai.cost.output_tokens': 'double',
  'gen_ai.cost.reasoning.output_tokens': 'double',
  'gen_ai.cost.total_tokens': 'double',
  'gen_ai.embeddings.input': 'string',
  'gen_ai.function_id': 'string',
  'gen_ai.input.messages': 'string',
  'gen_ai.operation.name': 'string',
  'gen_ai.operation.type': 'string',
  'gen_ai.output.messages': 'string',
  'gen_ai.pipeline.name': 'string',
  'gen_ai.prompt': 'string',
  'gen_ai.prompt.name': 'string',
  'gen_ai.provider.name': 'string',
  'gen_ai.request.available_tools': 'string',
  'gen_ai.request.frequency_penalty': 'double',
  'gen_ai.request.max_tokens': 'integer',
  'gen_ai.request.messages': 'string',
  'gen_ai.request.model': 'string',
  'gen_ai.request.presence_penalty': 'double',
  'gen_ai.request.reasoning_effort': 'string',
  'gen_ai.request.seed': 'string',
  'gen_ai.request.temperature': 'double',
  'gen_ai.request.top_k': 'integer',
  'gen_ai.request.top_p': 'double',
  'gen_ai.response.finish_reasons': 'string',
  'gen_ai.response.id': 'string',
  'gen_ai.response.model': 'string',
  'gen_ai.response.streaming': 'boolean',
  'gen_ai.response.text': 'string',
  'gen_ai.response.time_to_first_chunk': 'double',
  'gen_ai.response.time_to_first_token': 'double',
  'gen_ai.response.tokens_per_second': 'double',
  'gen_ai.response.tool_calls': 'string',
  'gen_ai.system': 'string',
  'gen_ai.system_instructions': 'string',
  'gen_ai.system.message': 'string',
  'gen_ai.tool.call.arguments': 'string',
  'gen_ai.tool.call.result': 'string',
  'gen_ai.tool.definitions': 'string',
  'gen_ai.tool.description': 'string',
  'gen_ai.tool.input': 'string',
  'gen_ai.tool.message': 'string',
  'gen_ai.tool.name': 'string',
  'gen_ai.tool.output': 'string',
  'gen_ai.tool.type': 'string',
  'gen_ai.usage.cache_creation.input_tokens': 'integer',
  'gen_ai.usage.cache_read.input_tokens': 'integer',
  'gen_ai.usage.completion_tokens': 'integer',
  'gen_ai.usage.input_tokens': 'integer',
  'gen_ai.usage.input_tokens.cached': 'integer',
  'gen_ai.usage.input_tokens.cache_write': 'integer',
  'gen_ai.usage.output_tokens': 'integer',
  'gen_ai.usage.output_tokens.reasoning': 'integer',
  'gen_ai.usage.prompt_tokens': 'integer',
  'gen_ai.usage.reasoning.output_tokens': 'integer',
  'gen_ai.usage.total_tokens': 'integer',
  'graphql.document': 'string',
  'graphql.operation.name': 'string',
  'graphql.operation.type': 'string',
  hardwareConcurrency: 'string',
  'http.client_ip': 'string',
  'http.decoded_response_content_length': 'integer',
  'http.flavor': 'string',
  'http.fragment': 'string',
  'http.host': 'string',
  'http.method': 'string',
  'http.query': 'string',
  'http.request.body.data': 'string',
  'http.request.connection_end': 'double',
  'http.request.connect_start': 'double',
  'http.request.domain_lookup_end': 'double',
  'http.request.domain_lookup_start': 'double',
  'http.request.fetch_start': 'double',
  'http.request.header.<key>': 'string[]',
  'http.request.method': 'string',
  'http.request_method': 'string',
  'http.request.redirect_end': 'double',
  'http.request.redirect_start': 'double',
  'http.request.request_start': 'double',
  'http.request.resend_count': 'integer',
  'http.request.response_end': 'double',
  'http.request.response_start': 'double',
  'http.request.same_origin': 'boolean',
  'http.request.secure_connection_start': 'double',
  'http.request.time_to_first_byte': 'double',
  'http.request.worker_start': 'double',
  'http.response.body.size': 'integer',
  'http.response_content_length': 'integer',
  'http.response.header.content-length': 'string',
  'http.response.header.<key>': 'string[]',
  'http.response.size': 'integer',
  'http.response.status_code': 'integer',
  'http.response_transfer_size': 'integer',
  'http.route': 'string',
  'http.scheme': 'string',
  'http.server_name': 'string',
  'http.server.request.time_in_queue': 'double',
  'http.status_code': 'integer',
  'http.target': 'string',
  'http.url': 'string',
  'http.user_agent': 'string',
  id: 'string',
  inp: 'double',
  'jsonrpc.protocol.version': 'string',
  'jsonrpc.request.id': 'string',
  'jvm.gc.action': 'string',
  'jvm.gc.name': 'string',
  'jvm.memory.pool.name': 'string',
  'jvm.memory.type': 'string',
  'jvm.thread.daemon': 'boolean',
  'jvm.thread.state': 'string',
  lcp: 'double',
  'lcp.element': 'string',
  'lcp.id': 'string',
  'lcp.loadTime': 'integer',
  'lcp.renderTime': 'integer',
  'lcp.size': 'integer',
  'lcp.url': 'string',
  'logger.name': 'string',
  'mcp.cancelled.reason': 'string',
  'mcp.cancelled.request_id': 'string',
  'mcp.client.name': 'string',
  'mcp.client.title': 'string',
  'mcp.client.version': 'string',
  'mcp.lifecycle.phase': 'string',
  'mcp.logging.data_type': 'string',
  'mcp.logging.level': 'string',
  'mcp.logging.logger': 'string',
  'mcp.logging.message': 'string',
  'mcp.method.name': 'string',
  'mcp.progress.current': 'integer',
  'mcp.progress.message': 'string',
  'mcp.progress.percentage': 'double',
  'mcp.progress.token': 'string',
  'mcp.progress.total': 'integer',
  'mcp.prompt.name': 'string',
  'mcp.prompt.result.description': 'string',
  'mcp.prompt.result.message_content': 'string',
  'mcp.prompt.result.message_count': 'integer',
  'mcp.prompt.result.message_role': 'string',
  'mcp.protocol.ready': 'integer',
  'mcp.protocol.version': 'string',
  'mcp.request.argument.<key>': 'string',
  'mcp.request.argument.name': 'string',
  'mcp.request.argument.uri': 'string',
  'mcp.request.id': 'string',
  'mcp.resource.protocol': 'string',
  'mcp.resource.uri': 'string',
  'mcp.server.name': 'string',
  'mcp.server.title': 'string',
  'mcp.server.version': 'string',
  'mcp.session.id': 'string',
  'mcp.tool.name': 'string',
  'mcp.tool.result.content': 'string',
  'mcp.tool.result.content_count': 'integer',
  'mcp.tool.result.is_error': 'boolean',
  'mcp.transport': 'string',
  'mdc.<key>': 'string',
  'messaging.batch.message_count': 'integer',
  'messaging.destination.connection': 'string',
  'messaging.destination.name': 'string',
  'messaging.message.body.size': 'integer',
  'messaging.message.conversation_id': 'string',
  'messaging.message.envelope.size': 'integer',
  'messaging.message.id': 'string',
  'messaging.message.receive.latency': 'integer',
  'messaging.message.retry.count': 'integer',
  'messaging.operation.name': 'string',
  'messaging.operation.type': 'string',
  'messaging.rabbitmq.destination.routing_key': 'string',
  'messaging.system': 'string',
  method: 'string',
  'middleware.name': 'string',
  'navigation.type': 'string',
  'nel.elapsed_time': 'integer',
  'nel.phase': 'string',
  'nel.referrer': 'string',
  'nel.sampling_function': 'double',
  'nel.type': 'string',
  'network.connection.effective_type': 'string',
  'network.connection.rtt': 'integer',
  'network.connection.type': 'string',
  'network.local.address': 'string',
  'network.local.port': 'integer',
  'network.peer.address': 'string',
  'network.peer.port': 'integer',
  'network.protocol.name': 'string',
  'network.protocol.version': 'string',
  'network.transport': 'string',
  'network.type': 'string',
  'net.host.ip': 'string',
  'net.host.name': 'string',
  'net.host.port': 'integer',
  'net.peer.ip': 'string',
  'net.peer.name': 'string',
  'net.peer.port': 'integer',
  'net.protocol.name': 'string',
  'net.protocol.version': 'string',
  'net.sock.family': 'string',
  'net.sock.host.addr': 'string',
  'net.sock.host.port': 'integer',
  'net.sock.peer.addr': 'string',
  'net.sock.peer.name': 'string',
  'net.sock.peer.port': 'integer',
  'net.transport': 'string',
  'os.build': 'string',
  'os.build_id': 'string',
  'os.description': 'string',
  'os.kernel_version': 'string',
  'os.name': 'string',
  'os.raw_description': 'string',
  'os.rooted': 'boolean',
  'os.theme': 'string',
  'os.type': 'string',
  'os.version': 'string',
  'otel.kind': 'string',
  'otel.scope.name': 'string',
  'otel.scope.version': 'string',
  'otel.status_code': 'string',
  'otel.status_description': 'string',
  'params.<key>': 'string',
  'performance.activationStart': 'double',
  'performance.timeOrigin': 'double',
  previous_route: 'string',
  'process.command_args': 'string[]',
  'process.executable.name': 'string',
  'process.pid': 'integer',
  'process.runtime.description': 'string',
  'process.runtime.engine.name': 'string',
  'process.runtime.engine.version': 'string',
  'process.runtime.name': 'string',
  'process.runtime.version': 'string',
  'query.<key>': 'string',
  'react.version': 'string',
  release: 'string',
  'remix.action_form_data.<key>': 'string',
  replay_id: 'string',
  'resource.deployment.environment': 'string',
  'resource.deployment.environment.name': 'string',
  'resource.render_blocking_status': 'string',
  route: 'string',
  'rpc.grpc.status_code': 'integer',
  'rpc.method': 'string',
  'rpc.response.status_code': 'string',
  'rpc.service': 'string',
  'runtime.build': 'string',
  'runtime.name': 'string',
  'runtime.raw_description': 'string',
  'runtime.version': 'string',
  'score.<key>': 'double',
  'score.ratio.<key>': 'double',
  'score.total': 'double',
  'score.weight.<key>': 'double',
  'sentry.action': 'string',
  'sentry.browser.name': 'string',
  'sentry.browser.version': 'string',
  'sentry.cancellation_reason': 'string',
  'sentry.category': 'string',
  'sentry.client_sample_rate': 'double',
  'sentry.description': 'string',
  'sentry.dist': 'string',
  'sentry.domain': 'string',
  'sentry.dsc.environment': 'string',
  'sentry.dsc.project_id': 'string',
  'sentry.dsc.public_key': 'string',
  'sentry.dsc.release': 'string',
  'sentry.dsc.sampled': 'boolean',
  'sentry.dsc.sample_rate': 'string',
  'sentry.dsc.trace_id': 'string',
  'sentry.dsc.transaction': 'string',
  'sentry.environment': 'string',
  'sentry.exclusive_time': 'double',
  'sentry.graphql.operation': 'string',
  'sentry.group': 'string',
  'sentry.http.prefetch': 'boolean',
  'sentry.idle_span_finish_reason': 'string',
  'sentry.is_remote': 'boolean',
  'sentry.kind': 'string',
  'sentry.main_thread': 'boolean',
  'sentry.message.parameter.<key>': 'string',
  'sentry.message.template': 'string',
  'sentry.mobile': 'boolean',
  'sentry.module.<key>': 'string',
  'sentry.nextjs.ssr.function.route': 'string',
  'sentry.nextjs.ssr.function.type': 'string',
  'sentry.normalized_db_query': 'string',
  'sentry.normalized_db_query.hash': 'string',
  'sentry.normalized_description': 'string',
  'sentry.observed_timestamp_nanos': 'string',
  'sentry.op': 'string',
  'sentry.origin': 'string',
  'sentry.platform': 'string',
  'sentry.profiler_id': 'string',
  'sentry.profile_id': 'string',
  'sentry.release': 'string',
  'sentry.replay_id': 'string',
  'sentry.replay_is_buffering': 'boolean',
  'sentry.report_event': 'string',
  'sentry.sdk.integrations': 'string[]',
  'sentry.sdk.name': 'string',
  'sentry.sdk.version': 'string',
  'sentry.segment.id': 'string',
  'sentry.segment_id': 'string',
  'sentry.segment.name': 'string',
  'sentry.server_sample_rate': 'double',
  'sentry.source': 'string',
  'sentry.span.source': 'string',
  'sentry.status': 'string',
  'sentry.status_code': 'integer',
  'sentry.status.message': 'string',
  'sentry.thread.id': 'integer',
  'sentry.timestamp.sequence': 'integer',
  'sentry.trace_lifecycle': 'string',
  'sentry.trace.parent_span_id': 'string',
  'sentry.trace.status': 'string',
  'sentry.transaction': 'string',
  'sentry.user.email': 'string',
  'sentry.user.geo.city': 'string',
  'sentry.user.geo.country_code': 'string',
  'sentry.user.geo.region': 'string',
  'sentry.user.geo.subdivision': 'string',
  'sentry.user.id': 'string',
  'sentry.user.ip': 'string',
  'sentry.user.username': 'string',
  'server.address': 'string',
  'server.port': 'integer',
  'service.name': 'string',
  'service.version': 'string',
  'session.id': 'string',
  stall_percentage: 'double',
  stall_total_time: 'double',
  'state.type': 'string',
  'thread.id': 'integer',
  'thread.name': 'string',
  'timber.tag': 'string',
  time_to_full_display: 'double',
  time_to_initial_display: 'double',
  transaction: 'string',
  'trpc.procedure_path': 'string',
  'trpc.procedure_type': 'string',
  ttfb: 'double',
  'ttfb.requestTime': 'double',
  type: 'string',
  'ui.component_name': 'string',
  'ui.contributes_to_ttfd': 'boolean',
  'ui.contributes_to_ttid': 'boolean',
  'ui.element.height': 'integer',
  'ui.element.id': 'string',
  'ui.element.identifier': 'string',
  'ui.element.load_time': 'double',
  'ui.element.paint_type': 'string',
  'ui.element.render_time': 'double',
  'ui.element.type': 'string',
  'ui.element.url': 'string',
  'ui.element.width': 'integer',
  url: 'string',
  'url.domain': 'string',
  'url.fragment': 'string',
  'url.full': 'string',
  'url.path': 'string',
  'url.path.parameter.<key>': 'string',
  'url.port': 'integer',
  'url.query': 'string',
  'url.same_origin': 'boolean',
  'url.scheme': 'string',
  'url.template': 'string',
  'user_agent.original': 'string',
  'user.email': 'string',
  'user.full_name': 'string',
  'user.geo.city': 'string',
  'user.geo.country_code': 'string',
  'user.geo.region': 'string',
  'user.geo.subdivision': 'string',
  'user.hash': 'string',
  'user.id': 'string',
  'user.ip_address': 'string',
  'user.name': 'string',
  'user.roles': 'string[]',
  'vercel.branch': 'string',
  'vercel.build_id': 'string',
  'vercel.deployment_id': 'string',
  'vercel.destination': 'string',
  'vercel.edge_type': 'string',
  'vercel.entrypoint': 'string',
  'vercel.execution_region': 'string',
  'vercel.id': 'string',
  'vercel.ja3_digest': 'string',
  'vercel.ja4_digest': 'string',
  'vercel.log_type': 'string',
  'vercel.path': 'string',
  'vercel.project_id': 'string',
  'vercel.project_name': 'string',
  'vercel.proxy.cache_id': 'string',
  'vercel.proxy.client_ip': 'string',
  'vercel.proxy.host': 'string',
  'vercel.proxy.lambda_region': 'string',
  'vercel.proxy.method': 'string',
  'vercel.proxy.path': 'string',
  'vercel.proxy.path_type': 'string',
  'vercel.proxy.path_type_variant': 'string',
  'vercel.proxy.referer': 'string',
  'vercel.proxy.region': 'string',
  'vercel.proxy.response_byte_size': 'integer',
  'vercel.proxy.scheme': 'string',
  'vercel.proxy.status_code': 'integer',
  'vercel.proxy.timestamp': 'integer',
  'vercel.proxy.user_agent': 'string[]',
  'vercel.proxy.vercel_cache': 'string',
  'vercel.proxy.vercel_id': 'string',
  'vercel.proxy.waf_action': 'string',
  'vercel.proxy.waf_rule_id': 'string',
  'vercel.request_id': 'string',
  'vercel.source': 'string',
  'vercel.status_code': 'integer',
};

export type AttributeName =
  | typeof AI_CITATIONS
  | typeof AI_COMPLETION_TOKENS_USED
  | typeof AI_DOCUMENTS
  | typeof AI_FINISH_REASON
  | typeof AI_FREQUENCY_PENALTY
  | typeof AI_FUNCTION_CALL
  | typeof AI_GENERATION_ID
  | typeof AI_INPUT_MESSAGES
  | typeof AI_IS_SEARCH_REQUIRED
  | typeof AI_METADATA
  | typeof AI_MODEL_ID
  | typeof AI_MODEL_PROVIDER
  | typeof AI_PIPELINE_NAME
  | typeof AI_PREAMBLE
  | typeof AI_PRESENCE_PENALTY
  | typeof AI_PROMPT_TOKENS_USED
  | typeof AI_RAW_PROMPTING
  | typeof AI_RESPONSES
  | typeof AI_RESPONSE_FORMAT
  | typeof AI_SEARCH_QUERIES
  | typeof AI_SEARCH_RESULTS
  | typeof AI_SEED
  | typeof AI_STREAMING
  | typeof AI_TAGS
  | typeof AI_TEMPERATURE
  | typeof AI_TEXTS
  | typeof AI_TOOLS
  | typeof AI_TOOL_CALLS
  | typeof AI_TOP_K
  | typeof AI_TOP_P
  | typeof AI_TOTAL_COST
  | typeof AI_TOTAL_TOKENS_USED
  | typeof AI_WARNINGS
  | typeof ANGULAR_VERSION
  | typeof APP_APP_BUILD
  | typeof APP_APP_IDENTIFIER
  | typeof APP_APP_NAME
  | typeof APP_APP_START_TIME
  | typeof APP_APP_VERSION
  | typeof APP_BUILD
  | typeof APP_IDENTIFIER
  | typeof APP_IN_FOREGROUND
  | typeof APP_NAME
  | typeof APP_START_COLD
  | typeof APP_START_TIME
  | typeof APP_START_TYPE
  | typeof APP_START_WARM
  | typeof APP_VERSION
  | typeof APP_VITALS_FRAMES_DELAY_VALUE
  | typeof APP_VITALS_FRAMES_FROZEN_COUNT
  | typeof APP_VITALS_FRAMES_SLOW_COUNT
  | typeof APP_VITALS_FRAMES_TOTAL_COUNT
  | typeof APP_VITALS_START_COLD_VALUE
  | typeof APP_VITALS_START_PREWARMED
  | typeof APP_VITALS_START_REASON
  | typeof APP_VITALS_START_SCREEN
  | typeof APP_VITALS_START_TYPE
  | typeof APP_VITALS_START_WARM_VALUE
  | typeof APP_VITALS_TTFD_VALUE
  | typeof APP_VITALS_TTID_VALUE
  | typeof ART_GC_BLOCKING_COUNT
  | typeof ART_GC_BLOCKING_TIME
  | typeof ART_GC_PRE_OOME_COUNT
  | typeof ART_GC_TOTAL_COUNT
  | typeof ART_GC_TOTAL_TIME
  | typeof ART_GC_WAITING_TIME
  | typeof ART_MEMORY_FREE
  | typeof ART_MEMORY_FREE_UNTIL_GC
  | typeof ART_MEMORY_FREE_UNTIL_OOME
  | typeof ART_MEMORY_MAX
  | typeof ART_MEMORY_TOTAL
  | typeof AWS_CLOUDWATCH_LOGS_LOG_GROUP
  | typeof AWS_CLOUDWATCH_LOGS_LOG_STREAM
  | typeof AWS_CLOUDWATCH_LOGS_URL
  | typeof AWS_LAMBDA_AWS_REQUEST_ID
  | typeof AWS_LAMBDA_EXECUTION_DURATION_IN_MILLIS
  | typeof AWS_LAMBDA_FUNCTION_NAME
  | typeof AWS_LAMBDA_FUNCTION_VERSION
  | typeof AWS_LAMBDA_INVOKED_ARN
  | typeof AWS_LAMBDA_INVOKED_FUNCTION_ARN
  | typeof AWS_LAMBDA_REMAINING_TIME_IN_MILLIS
  | typeof AWS_LOG_GROUP_NAMES
  | typeof AWS_LOG_STREAM_NAMES
  | typeof BLOCKED_MAIN_THREAD
  | typeof BROWSER_NAME
  | typeof BROWSER_PERFORMANCE_NAVIGATION_ACTIVATION_START
  | typeof BROWSER_PERFORMANCE_TIME_ORIGIN
  | typeof BROWSER_REPORT_TYPE
  | typeof BROWSER_SCRIPT_INVOKER
  | typeof BROWSER_SCRIPT_INVOKER_TYPE
  | typeof BROWSER_SCRIPT_SOURCE_CHAR_POSITION
  | typeof BROWSER_VERSION
  | typeof BROWSER_WEB_VITAL_CLS_REPORT_EVENT
  | typeof BROWSER_WEB_VITAL_CLS_SOURCE_KEY
  | typeof BROWSER_WEB_VITAL_CLS_VALUE
  | typeof BROWSER_WEB_VITAL_FCP_VALUE
  | typeof BROWSER_WEB_VITAL_FP_VALUE
  | typeof BROWSER_WEB_VITAL_INP_VALUE
  | typeof BROWSER_WEB_VITAL_LCP_ELEMENT
  | typeof BROWSER_WEB_VITAL_LCP_ID
  | typeof BROWSER_WEB_VITAL_LCP_LOAD_TIME
  | typeof BROWSER_WEB_VITAL_LCP_RENDER_TIME
  | typeof BROWSER_WEB_VITAL_LCP_REPORT_EVENT
  | typeof BROWSER_WEB_VITAL_LCP_SIZE
  | typeof BROWSER_WEB_VITAL_LCP_URL
  | typeof BROWSER_WEB_VITAL_LCP_VALUE
  | typeof BROWSER_WEB_VITAL_TTFB_REQUEST_TIME
  | typeof BROWSER_WEB_VITAL_TTFB_VALUE
  | typeof CACHE_HIT
  | typeof CACHE_ITEM_SIZE
  | typeof CACHE_KEY
  | typeof CACHE_OPERATION
  | typeof CACHE_TTL
  | typeof CACHE_WRITE
  | typeof CHANNEL
  | typeof CLIENT_ADDRESS
  | typeof CLIENT_PORT
  | typeof CLOUDFLARE_D1_DURATION
  | typeof CLOUDFLARE_D1_QUERY_TYPE
  | typeof CLOUDFLARE_D1_ROWS_READ
  | typeof CLOUDFLARE_D1_ROWS_WRITTEN
  | typeof CLOUDFLARE_DURABLE_OBJECT_QUERY_BINDINGS
  | typeof CLOUDFLARE_DURABLE_OBJECT_RESPONSE_ROWS_READ
  | typeof CLOUDFLARE_DURABLE_OBJECT_RESPONSE_ROWS_WRITTEN
  | typeof CLOUDFLARE_R2_BUCKET
  | typeof CLOUDFLARE_R2_OPERATION
  | typeof CLOUDFLARE_R2_REQUEST_DELIMITER
  | typeof CLOUDFLARE_R2_REQUEST_KEY
  | typeof CLOUDFLARE_R2_REQUEST_PART_NUMBER
  | typeof CLOUDFLARE_R2_REQUEST_PREFIX
  | typeof CLOUDFLARE_WORKFLOW_ATTEMPT
  | typeof CLOUDFLARE_WORKFLOW_RETRIES_BACKOFF
  | typeof CLOUDFLARE_WORKFLOW_RETRIES_DELAY
  | typeof CLOUDFLARE_WORKFLOW_RETRIES_LIMIT
  | typeof CLOUDFLARE_WORKFLOW_TIMEOUT
  | typeof CLOUD_ACCOUNT_ID
  | typeof CLOUD_AVAILABILITY_ZONE
  | typeof CLOUD_PLATFORM
  | typeof CLOUD_PROVIDER
  | typeof CLOUD_REGION
  | typeof CLOUD_RESOURCE_ID
  | typeof CLS
  | typeof CLS_SOURCE_KEY
  | typeof CODE_FILEPATH
  | typeof CODE_FILE_PATH
  | typeof CODE_FUNCTION
  | typeof CODE_FUNCTION_NAME
  | typeof CODE_LINENO
  | typeof CODE_LINE_NUMBER
  | typeof CODE_NAMESPACE
  | typeof CONNECTIONTYPE
  | typeof CONNECTION_RTT
  | typeof CULTURE_CALENDAR
  | typeof CULTURE_DISPLAY_NAME
  | typeof CULTURE_IS_24_HOUR_FORMAT
  | typeof CULTURE_LOCALE
  | typeof CULTURE_TIMEZONE
  | typeof DB_COLLECTION_NAME
  | typeof DB_DRIVER_NAME
  | typeof DB_NAME
  | typeof DB_NAMESPACE
  | typeof DB_OPERATION
  | typeof DB_OPERATION_BATCH_SIZE
  | typeof DB_OPERATION_NAME
  | typeof DB_QUERY_PARAMETER_KEY
  | typeof DB_QUERY_SUMMARY
  | typeof DB_QUERY_TEXT
  | typeof DB_REDIS_CONNECTION
  | typeof DB_REDIS_KEY
  | typeof DB_REDIS_PARAMETERS
  | typeof DB_RESPONSE_STATUS_CODE
  | typeof DB_SQL_BINDINGS
  | typeof DB_STATEMENT
  | typeof DB_STORED_PROCEDURE_NAME
  | typeof DB_SYSTEM
  | typeof DB_SYSTEM_NAME
  | typeof DB_USER
  | typeof DEVICEMEMORY
  | typeof DEVICE_ARCHS
  | typeof DEVICE_BATTERY_LEVEL
  | typeof DEVICE_BATTERY_TEMPERATURE
  | typeof DEVICE_BOOT_TIME
  | typeof DEVICE_BRAND
  | typeof DEVICE_CHARGING
  | typeof DEVICE_CHIPSET
  | typeof DEVICE_CLASS
  | typeof DEVICE_CONNECTION_TYPE
  | typeof DEVICE_CPU_DESCRIPTION
  | typeof DEVICE_EXTERNAL_FREE_STORAGE
  | typeof DEVICE_EXTERNAL_STORAGE_SIZE
  | typeof DEVICE_FAMILY
  | typeof DEVICE_FREE_MEMORY
  | typeof DEVICE_FREE_STORAGE
  | typeof DEVICE_ID
  | typeof DEVICE_LOCALE
  | typeof DEVICE_LOW_MEMORY
  | typeof DEVICE_LOW_POWER_MODE
  | typeof DEVICE_MANUFACTURER
  | typeof DEVICE_MEMORY_ESTIMATED_CAPACITY
  | typeof DEVICE_MEMORY_SIZE
  | typeof DEVICE_MODEL
  | typeof DEVICE_MODEL_ID
  | typeof DEVICE_NAME
  | typeof DEVICE_ONLINE
  | typeof DEVICE_ORIENTATION
  | typeof DEVICE_PROCESSOR_COUNT
  | typeof DEVICE_PROCESSOR_FREQUENCY
  | typeof DEVICE_SCREEN_DENSITY
  | typeof DEVICE_SCREEN_DPI
  | typeof DEVICE_SCREEN_HEIGHT_PIXELS
  | typeof DEVICE_SCREEN_WIDTH_PIXELS
  | typeof DEVICE_SIMULATOR
  | typeof DEVICE_STORAGE_SIZE
  | typeof DEVICE_THERMAL_STATE
  | typeof DEVICE_TIMEZONE
  | typeof DEVICE_USABLE_MEMORY
  | typeof EFFECTIVECONNECTIONTYPE
  | typeof ENVIRONMENT
  | typeof ERROR_TYPE
  | typeof EVENT_ID
  | typeof EVENT_NAME
  | typeof EXCEPTION_ESCAPED
  | typeof EXCEPTION_MESSAGE
  | typeof EXCEPTION_STACKTRACE
  | typeof EXCEPTION_TYPE
  | typeof FAAS_COLDSTART
  | typeof FAAS_CRON
  | typeof FAAS_DURATION_IN_MS
  | typeof FAAS_ENTRY_POINT
  | typeof FAAS_IDENTITY
  | typeof FAAS_INVOCATION_ID
  | typeof FAAS_NAME
  | typeof FAAS_TIME
  | typeof FAAS_TRIGGER
  | typeof FAAS_VERSION
  | typeof FCP
  | typeof FLAG_EVALUATION_KEY
  | typeof FP
  | typeof FRAMES_DELAY
  | typeof FRAMES_FROZEN
  | typeof FRAMES_FROZEN_RATE
  | typeof FRAMES_SLOW
  | typeof FRAMES_SLOW_RATE
  | typeof FRAMES_TOTAL
  | typeof FS_ERROR
  | typeof GCP_FUNCTION_CONTEXT_EVENT_ID
  | typeof GCP_FUNCTION_CONTEXT_EVENT_TYPE
  | typeof GCP_FUNCTION_CONTEXT_ID
  | typeof GCP_FUNCTION_CONTEXT_RESOURCE
  | typeof GCP_FUNCTION_CONTEXT_SOURCE
  | typeof GCP_FUNCTION_CONTEXT_SPECVERSION
  | typeof GCP_FUNCTION_CONTEXT_TIME
  | typeof GCP_FUNCTION_CONTEXT_TIMESTAMP
  | typeof GCP_FUNCTION_CONTEXT_TYPE
  | typeof GCP_PROJECT_ID
  | typeof GEN_AI_AGENT_NAME
  | typeof GEN_AI_CONTEXT_UTILIZATION
  | typeof GEN_AI_CONTEXT_WINDOW_SIZE
  | typeof GEN_AI_CONVERSATION_ID
  | typeof GEN_AI_COST_CACHE_CREATION_INPUT_TOKENS
  | typeof GEN_AI_COST_CACHE_READ_INPUT_TOKENS
  | typeof GEN_AI_COST_INPUT_TOKENS
  | typeof GEN_AI_COST_OUTPUT_TOKENS
  | typeof GEN_AI_COST_REASONING_OUTPUT_TOKENS
  | typeof GEN_AI_COST_TOTAL_TOKENS
  | typeof GEN_AI_EMBEDDINGS_INPUT
  | typeof GEN_AI_FUNCTION_ID
  | typeof GEN_AI_INPUT_MESSAGES
  | typeof GEN_AI_OPERATION_NAME
  | typeof GEN_AI_OPERATION_TYPE
  | typeof GEN_AI_OUTPUT_MESSAGES
  | typeof GEN_AI_PIPELINE_NAME
  | typeof GEN_AI_PROMPT
  | typeof GEN_AI_PROMPT_NAME
  | typeof GEN_AI_PROVIDER_NAME
  | typeof GEN_AI_REQUEST_AVAILABLE_TOOLS
  | typeof GEN_AI_REQUEST_FREQUENCY_PENALTY
  | typeof GEN_AI_REQUEST_MAX_TOKENS
  | typeof GEN_AI_REQUEST_MESSAGES
  | typeof GEN_AI_REQUEST_MODEL
  | typeof GEN_AI_REQUEST_PRESENCE_PENALTY
  | typeof GEN_AI_REQUEST_REASONING_EFFORT
  | typeof GEN_AI_REQUEST_SEED
  | typeof GEN_AI_REQUEST_TEMPERATURE
  | typeof GEN_AI_REQUEST_TOP_K
  | typeof GEN_AI_REQUEST_TOP_P
  | typeof GEN_AI_RESPONSE_FINISH_REASONS
  | typeof GEN_AI_RESPONSE_ID
  | typeof GEN_AI_RESPONSE_MODEL
  | typeof GEN_AI_RESPONSE_STREAMING
  | typeof GEN_AI_RESPONSE_TEXT
  | typeof GEN_AI_RESPONSE_TIME_TO_FIRST_CHUNK
  | typeof GEN_AI_RESPONSE_TIME_TO_FIRST_TOKEN
  | typeof GEN_AI_RESPONSE_TOKENS_PER_SECOND
  | typeof GEN_AI_RESPONSE_TOOL_CALLS
  | typeof GEN_AI_SYSTEM
  | typeof GEN_AI_SYSTEM_INSTRUCTIONS
  | typeof GEN_AI_SYSTEM_MESSAGE
  | typeof GEN_AI_TOOL_CALL_ARGUMENTS
  | typeof GEN_AI_TOOL_CALL_RESULT
  | typeof GEN_AI_TOOL_DEFINITIONS
  | typeof GEN_AI_TOOL_DESCRIPTION
  | typeof GEN_AI_TOOL_INPUT
  | typeof GEN_AI_TOOL_MESSAGE
  | typeof GEN_AI_TOOL_NAME
  | typeof GEN_AI_TOOL_OUTPUT
  | typeof GEN_AI_TOOL_TYPE
  | typeof GEN_AI_USAGE_CACHE_CREATION_INPUT_TOKENS
  | typeof GEN_AI_USAGE_CACHE_READ_INPUT_TOKENS
  | typeof GEN_AI_USAGE_COMPLETION_TOKENS
  | typeof GEN_AI_USAGE_INPUT_TOKENS
  | typeof GEN_AI_USAGE_INPUT_TOKENS_CACHED
  | typeof GEN_AI_USAGE_INPUT_TOKENS_CACHE_WRITE
  | typeof GEN_AI_USAGE_OUTPUT_TOKENS
  | typeof GEN_AI_USAGE_OUTPUT_TOKENS_REASONING
  | typeof GEN_AI_USAGE_PROMPT_TOKENS
  | typeof GEN_AI_USAGE_REASONING_OUTPUT_TOKENS
  | typeof GEN_AI_USAGE_TOTAL_TOKENS
  | typeof GRAPHQL_DOCUMENT
  | typeof GRAPHQL_OPERATION_NAME
  | typeof GRAPHQL_OPERATION_TYPE
  | typeof HARDWARECONCURRENCY
  | typeof HTTP_CLIENT_IP
  | typeof HTTP_DECODED_RESPONSE_CONTENT_LENGTH
  | typeof HTTP_FLAVOR
  | typeof HTTP_FRAGMENT
  | typeof HTTP_HOST
  | typeof HTTP_METHOD
  | typeof HTTP_QUERY
  | typeof HTTP_REQUEST_BODY_DATA
  | typeof HTTP_REQUEST_CONNECTION_END
  | typeof HTTP_REQUEST_CONNECT_START
  | typeof HTTP_REQUEST_DOMAIN_LOOKUP_END
  | typeof HTTP_REQUEST_DOMAIN_LOOKUP_START
  | typeof HTTP_REQUEST_FETCH_START
  | typeof HTTP_REQUEST_HEADER_KEY
  | typeof HTTP_REQUEST_METHOD
  | typeof _HTTP_REQUEST_METHOD
  | typeof HTTP_REQUEST_REDIRECT_END
  | typeof HTTP_REQUEST_REDIRECT_START
  | typeof HTTP_REQUEST_REQUEST_START
  | typeof HTTP_REQUEST_RESEND_COUNT
  | typeof HTTP_REQUEST_RESPONSE_END
  | typeof HTTP_REQUEST_RESPONSE_START
  | typeof HTTP_REQUEST_SAME_ORIGIN
  | typeof HTTP_REQUEST_SECURE_CONNECTION_START
  | typeof HTTP_REQUEST_TIME_TO_FIRST_BYTE
  | typeof HTTP_REQUEST_WORKER_START
  | typeof HTTP_RESPONSE_BODY_SIZE
  | typeof HTTP_RESPONSE_CONTENT_LENGTH
  | typeof HTTP_RESPONSE_HEADER_CONTENT_LENGTH
  | typeof HTTP_RESPONSE_HEADER_KEY
  | typeof HTTP_RESPONSE_SIZE
  | typeof HTTP_RESPONSE_STATUS_CODE
  | typeof HTTP_RESPONSE_TRANSFER_SIZE
  | typeof HTTP_ROUTE
  | typeof HTTP_SCHEME
  | typeof HTTP_SERVER_NAME
  | typeof HTTP_SERVER_REQUEST_TIME_IN_QUEUE
  | typeof HTTP_STATUS_CODE
  | typeof HTTP_TARGET
  | typeof HTTP_URL
  | typeof HTTP_USER_AGENT
  | typeof ID
  | typeof INP
  | typeof JSONRPC_PROTOCOL_VERSION
  | typeof JSONRPC_REQUEST_ID
  | typeof JVM_GC_ACTION
  | typeof JVM_GC_NAME
  | typeof JVM_MEMORY_POOL_NAME
  | typeof JVM_MEMORY_TYPE
  | typeof JVM_THREAD_DAEMON
  | typeof JVM_THREAD_STATE
  | typeof LCP
  | typeof LCP_ELEMENT
  | typeof LCP_ID
  | typeof LCP_LOADTIME
  | typeof LCP_RENDERTIME
  | typeof LCP_SIZE
  | typeof LCP_URL
  | typeof LOGGER_NAME
  | typeof MCP_CANCELLED_REASON
  | typeof MCP_CANCELLED_REQUEST_ID
  | typeof MCP_CLIENT_NAME
  | typeof MCP_CLIENT_TITLE
  | typeof MCP_CLIENT_VERSION
  | typeof MCP_LIFECYCLE_PHASE
  | typeof MCP_LOGGING_DATA_TYPE
  | typeof MCP_LOGGING_LEVEL
  | typeof MCP_LOGGING_LOGGER
  | typeof MCP_LOGGING_MESSAGE
  | typeof MCP_METHOD_NAME
  | typeof MCP_PROGRESS_CURRENT
  | typeof MCP_PROGRESS_MESSAGE
  | typeof MCP_PROGRESS_PERCENTAGE
  | typeof MCP_PROGRESS_TOKEN
  | typeof MCP_PROGRESS_TOTAL
  | typeof MCP_PROMPT_NAME
  | typeof MCP_PROMPT_RESULT_DESCRIPTION
  | typeof MCP_PROMPT_RESULT_MESSAGE_CONTENT
  | typeof MCP_PROMPT_RESULT_MESSAGE_COUNT
  | typeof MCP_PROMPT_RESULT_MESSAGE_ROLE
  | typeof MCP_PROTOCOL_READY
  | typeof MCP_PROTOCOL_VERSION
  | typeof MCP_REQUEST_ARGUMENT_KEY
  | typeof MCP_REQUEST_ARGUMENT_NAME
  | typeof MCP_REQUEST_ARGUMENT_URI
  | typeof MCP_REQUEST_ID
  | typeof MCP_RESOURCE_PROTOCOL
  | typeof MCP_RESOURCE_URI
  | typeof MCP_SERVER_NAME
  | typeof MCP_SERVER_TITLE
  | typeof MCP_SERVER_VERSION
  | typeof MCP_SESSION_ID
  | typeof MCP_TOOL_NAME
  | typeof MCP_TOOL_RESULT_CONTENT
  | typeof MCP_TOOL_RESULT_CONTENT_COUNT
  | typeof MCP_TOOL_RESULT_IS_ERROR
  | typeof MCP_TRANSPORT
  | typeof MDC_KEY
  | typeof MESSAGING_BATCH_MESSAGE_COUNT
  | typeof MESSAGING_DESTINATION_CONNECTION
  | typeof MESSAGING_DESTINATION_NAME
  | typeof MESSAGING_MESSAGE_BODY_SIZE
  | typeof MESSAGING_MESSAGE_CONVERSATION_ID
  | typeof MESSAGING_MESSAGE_ENVELOPE_SIZE
  | typeof MESSAGING_MESSAGE_ID
  | typeof MESSAGING_MESSAGE_RECEIVE_LATENCY
  | typeof MESSAGING_MESSAGE_RETRY_COUNT
  | typeof MESSAGING_OPERATION_NAME
  | typeof MESSAGING_OPERATION_TYPE
  | typeof MESSAGING_RABBITMQ_DESTINATION_ROUTING_KEY
  | typeof MESSAGING_SYSTEM
  | typeof METHOD
  | typeof MIDDLEWARE_NAME
  | typeof NAVIGATION_TYPE
  | typeof NEL_ELAPSED_TIME
  | typeof NEL_PHASE
  | typeof NEL_REFERRER
  | typeof NEL_SAMPLING_FUNCTION
  | typeof NEL_TYPE
  | typeof NETWORK_CONNECTION_EFFECTIVE_TYPE
  | typeof NETWORK_CONNECTION_RTT
  | typeof NETWORK_CONNECTION_TYPE
  | typeof NETWORK_LOCAL_ADDRESS
  | typeof NETWORK_LOCAL_PORT
  | typeof NETWORK_PEER_ADDRESS
  | typeof NETWORK_PEER_PORT
  | typeof NETWORK_PROTOCOL_NAME
  | typeof NETWORK_PROTOCOL_VERSION
  | typeof NETWORK_TRANSPORT
  | typeof NETWORK_TYPE
  | typeof NET_HOST_IP
  | typeof NET_HOST_NAME
  | typeof NET_HOST_PORT
  | typeof NET_PEER_IP
  | typeof NET_PEER_NAME
  | typeof NET_PEER_PORT
  | typeof NET_PROTOCOL_NAME
  | typeof NET_PROTOCOL_VERSION
  | typeof NET_SOCK_FAMILY
  | typeof NET_SOCK_HOST_ADDR
  | typeof NET_SOCK_HOST_PORT
  | typeof NET_SOCK_PEER_ADDR
  | typeof NET_SOCK_PEER_NAME
  | typeof NET_SOCK_PEER_PORT
  | typeof NET_TRANSPORT
  | typeof OS_BUILD
  | typeof OS_BUILD_ID
  | typeof OS_DESCRIPTION
  | typeof OS_KERNEL_VERSION
  | typeof OS_NAME
  | typeof OS_RAW_DESCRIPTION
  | typeof OS_ROOTED
  | typeof OS_THEME
  | typeof OS_TYPE
  | typeof OS_VERSION
  | typeof OTEL_KIND
  | typeof OTEL_SCOPE_NAME
  | typeof OTEL_SCOPE_VERSION
  | typeof OTEL_STATUS_CODE
  | typeof OTEL_STATUS_DESCRIPTION
  | typeof PARAMS_KEY
  | typeof PERFORMANCE_ACTIVATIONSTART
  | typeof PERFORMANCE_TIMEORIGIN
  | typeof PREVIOUS_ROUTE
  | typeof PROCESS_COMMAND_ARGS
  | typeof PROCESS_EXECUTABLE_NAME
  | typeof PROCESS_PID
  | typeof PROCESS_RUNTIME_DESCRIPTION
  | typeof PROCESS_RUNTIME_ENGINE_NAME
  | typeof PROCESS_RUNTIME_ENGINE_VERSION
  | typeof PROCESS_RUNTIME_NAME
  | typeof PROCESS_RUNTIME_VERSION
  | typeof QUERY_KEY
  | typeof REACT_VERSION
  | typeof RELEASE
  | typeof REMIX_ACTION_FORM_DATA_KEY
  | typeof REPLAY_ID
  | typeof RESOURCE_DEPLOYMENT_ENVIRONMENT
  | typeof RESOURCE_DEPLOYMENT_ENVIRONMENT_NAME
  | typeof RESOURCE_RENDER_BLOCKING_STATUS
  | typeof ROUTE
  | typeof RPC_GRPC_STATUS_CODE
  | typeof RPC_METHOD
  | typeof RPC_RESPONSE_STATUS_CODE
  | typeof RPC_SERVICE
  | typeof RUNTIME_BUILD
  | typeof RUNTIME_NAME
  | typeof RUNTIME_RAW_DESCRIPTION
  | typeof RUNTIME_VERSION
  | typeof SCORE_KEY
  | typeof SCORE_RATIO_KEY
  | typeof SCORE_TOTAL
  | typeof SCORE_WEIGHT_KEY
  | typeof SENTRY_ACTION
  | typeof SENTRY_BROWSER_NAME
  | typeof SENTRY_BROWSER_VERSION
  | typeof SENTRY_CANCELLATION_REASON
  | typeof SENTRY_CATEGORY
  | typeof SENTRY_CLIENT_SAMPLE_RATE
  | typeof SENTRY_DESCRIPTION
  | typeof SENTRY_DIST
  | typeof SENTRY_DOMAIN
  | typeof SENTRY_DSC_ENVIRONMENT
  | typeof SENTRY_DSC_PROJECT_ID
  | typeof SENTRY_DSC_PUBLIC_KEY
  | typeof SENTRY_DSC_RELEASE
  | typeof SENTRY_DSC_SAMPLED
  | typeof SENTRY_DSC_SAMPLE_RATE
  | typeof SENTRY_DSC_TRACE_ID
  | typeof SENTRY_DSC_TRANSACTION
  | typeof SENTRY_ENVIRONMENT
  | typeof SENTRY_EXCLUSIVE_TIME
  | typeof SENTRY_GRAPHQL_OPERATION
  | typeof SENTRY_GROUP
  | typeof SENTRY_HTTP_PREFETCH
  | typeof SENTRY_IDLE_SPAN_FINISH_REASON
  | typeof SENTRY_IS_REMOTE
  | typeof SENTRY_KIND
  | typeof SENTRY_MAIN_THREAD
  | typeof SENTRY_MESSAGE_PARAMETER_KEY
  | typeof SENTRY_MESSAGE_TEMPLATE
  | typeof SENTRY_MOBILE
  | typeof SENTRY_MODULE_KEY
  | typeof SENTRY_NEXTJS_SSR_FUNCTION_ROUTE
  | typeof SENTRY_NEXTJS_SSR_FUNCTION_TYPE
  | typeof SENTRY_NORMALIZED_DB_QUERY
  | typeof SENTRY_NORMALIZED_DB_QUERY_HASH
  | typeof SENTRY_NORMALIZED_DESCRIPTION
  | typeof SENTRY_OBSERVED_TIMESTAMP_NANOS
  | typeof SENTRY_OP
  | typeof SENTRY_ORIGIN
  | typeof SENTRY_PLATFORM
  | typeof SENTRY_PROFILER_ID
  | typeof SENTRY_PROFILE_ID
  | typeof SENTRY_RELEASE
  | typeof SENTRY_REPLAY_ID
  | typeof SENTRY_REPLAY_IS_BUFFERING
  | typeof SENTRY_REPORT_EVENT
  | typeof SENTRY_SDK_INTEGRATIONS
  | typeof SENTRY_SDK_NAME
  | typeof SENTRY_SDK_VERSION
  | typeof SENTRY_SEGMENT_ID
  | typeof _SENTRY_SEGMENT_ID
  | typeof SENTRY_SEGMENT_NAME
  | typeof SENTRY_SERVER_SAMPLE_RATE
  | typeof SENTRY_SOURCE
  | typeof SENTRY_SPAN_SOURCE
  | typeof SENTRY_STATUS
  | typeof SENTRY_STATUS_CODE
  | typeof SENTRY_STATUS_MESSAGE
  | typeof SENTRY_THREAD_ID
  | typeof SENTRY_TIMESTAMP_SEQUENCE
  | typeof SENTRY_TRACE_LIFECYCLE
  | typeof SENTRY_TRACE_PARENT_SPAN_ID
  | typeof SENTRY_TRACE_STATUS
  | typeof SENTRY_TRANSACTION
  | typeof SENTRY_USER_EMAIL
  | typeof SENTRY_USER_GEO_CITY
  | typeof SENTRY_USER_GEO_COUNTRY_CODE
  | typeof SENTRY_USER_GEO_REGION
  | typeof SENTRY_USER_GEO_SUBDIVISION
  | typeof SENTRY_USER_ID
  | typeof SENTRY_USER_IP
  | typeof SENTRY_USER_USERNAME
  | typeof SERVER_ADDRESS
  | typeof SERVER_PORT
  | typeof SERVICE_NAME
  | typeof SERVICE_VERSION
  | typeof SESSION_ID
  | typeof STALL_PERCENTAGE
  | typeof STALL_TOTAL_TIME
  | typeof STATE_TYPE
  | typeof THREAD_ID
  | typeof THREAD_NAME
  | typeof TIMBER_TAG
  | typeof TIME_TO_FULL_DISPLAY
  | typeof TIME_TO_INITIAL_DISPLAY
  | typeof TRANSACTION
  | typeof TRPC_PROCEDURE_PATH
  | typeof TRPC_PROCEDURE_TYPE
  | typeof TTFB
  | typeof TTFB_REQUESTTIME
  | typeof TYPE
  | typeof UI_COMPONENT_NAME
  | typeof UI_CONTRIBUTES_TO_TTFD
  | typeof UI_CONTRIBUTES_TO_TTID
  | typeof UI_ELEMENT_HEIGHT
  | typeof UI_ELEMENT_ID
  | typeof UI_ELEMENT_IDENTIFIER
  | typeof UI_ELEMENT_LOAD_TIME
  | typeof UI_ELEMENT_PAINT_TYPE
  | typeof UI_ELEMENT_RENDER_TIME
  | typeof UI_ELEMENT_TYPE
  | typeof UI_ELEMENT_URL
  | typeof UI_ELEMENT_WIDTH
  | typeof URL
  | typeof URL_DOMAIN
  | typeof URL_FRAGMENT
  | typeof URL_FULL
  | typeof URL_PATH
  | typeof URL_PATH_PARAMETER_KEY
  | typeof URL_PORT
  | typeof URL_QUERY
  | typeof URL_SAME_ORIGIN
  | typeof URL_SCHEME
  | typeof URL_TEMPLATE
  | typeof USER_AGENT_ORIGINAL
  | typeof USER_EMAIL
  | typeof USER_FULL_NAME
  | typeof USER_GEO_CITY
  | typeof USER_GEO_COUNTRY_CODE
  | typeof USER_GEO_REGION
  | typeof USER_GEO_SUBDIVISION
  | typeof USER_HASH
  | typeof USER_ID
  | typeof USER_IP_ADDRESS
  | typeof USER_NAME
  | typeof USER_ROLES
  | typeof VERCEL_BRANCH
  | typeof VERCEL_BUILD_ID
  | typeof VERCEL_DEPLOYMENT_ID
  | typeof VERCEL_DESTINATION
  | typeof VERCEL_EDGE_TYPE
  | typeof VERCEL_ENTRYPOINT
  | typeof VERCEL_EXECUTION_REGION
  | typeof VERCEL_ID
  | typeof VERCEL_JA3_DIGEST
  | typeof VERCEL_JA4_DIGEST
  | typeof VERCEL_LOG_TYPE
  | typeof VERCEL_PATH
  | typeof VERCEL_PROJECT_ID
  | typeof VERCEL_PROJECT_NAME
  | typeof VERCEL_PROXY_CACHE_ID
  | typeof VERCEL_PROXY_CLIENT_IP
  | typeof VERCEL_PROXY_HOST
  | typeof VERCEL_PROXY_LAMBDA_REGION
  | typeof VERCEL_PROXY_METHOD
  | typeof VERCEL_PROXY_PATH
  | typeof VERCEL_PROXY_PATH_TYPE
  | typeof VERCEL_PROXY_PATH_TYPE_VARIANT
  | typeof VERCEL_PROXY_REFERER
  | typeof VERCEL_PROXY_REGION
  | typeof VERCEL_PROXY_RESPONSE_BYTE_SIZE
  | typeof VERCEL_PROXY_SCHEME
  | typeof VERCEL_PROXY_STATUS_CODE
  | typeof VERCEL_PROXY_TIMESTAMP
  | typeof VERCEL_PROXY_USER_AGENT
  | typeof VERCEL_PROXY_VERCEL_CACHE
  | typeof VERCEL_PROXY_VERCEL_ID
  | typeof VERCEL_PROXY_WAF_ACTION
  | typeof VERCEL_PROXY_WAF_RULE_ID
  | typeof VERCEL_REQUEST_ID
  | typeof VERCEL_SOURCE
  | typeof VERCEL_STATUS_CODE;

export const ATTRIBUTE_METADATA: Record<AttributeName, AttributeMetadata> = {
  'ai.citations': {
    brief: 'References or sources cited by the AI model in its response.',
    type: 'string[]',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    example: ['Citation 1', 'Citation 2'],
    deprecation: {},
    changelog: [
      { version: '0.5.0', prs: [264] },
      { version: '0.1.0', prs: [55] },
    ],
  },
  'ai.completion_tokens.used': {
    brief: 'The number of tokens used to respond to the message.',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 10,
    deprecation: {
      replacement: 'gen_ai.usage.output_tokens',
    },
    aliases: ['gen_ai.usage.output_tokens', 'gen_ai.usage.completion_tokens'],
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.1.0', prs: [57, 61] }, { version: '0.0.0' }],
  },
  'ai.documents': {
    brief: 'Documents or content chunks used as context for the AI model.',
    type: 'string[]',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    example: ['document1.txt', 'document2.pdf'],
    deprecation: {},
    changelog: [
      { version: '0.5.0', prs: [264] },
      { version: '0.1.0', prs: [55] },
    ],
  },
  'ai.finish_reason': {
    brief: 'The reason why the model stopped generating.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'COMPLETE',
    deprecation: {
      replacement: 'gen_ai.response.finish_reasons',
    },
    aliases: ['gen_ai.response.finish_reasons'],
    changelog: [{ version: '0.1.0', prs: [55, 57, 61, 108, 127] }],
  },
  'ai.frequency_penalty': {
    brief:
      'Used to reduce repetitiveness of generated tokens. The higher the value, the stronger a penalty is applied to previously present tokens, proportional to how many times they have already appeared in the prompt or prior generation.',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 0.5,
    deprecation: {
      replacement: 'gen_ai.request.frequency_penalty',
    },
    aliases: ['gen_ai.request.frequency_penalty'],
    changelog: [
      { version: '0.4.0', prs: [228] },
      { version: '0.1.0', prs: [55, 57, 61, 108] },
    ],
  },
  'ai.function_call': {
    brief:
      'For an AI model call, the function that was called. This is deprecated for OpenAI, and replaced by tool_calls',
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'function_name',
    deprecation: {
      replacement: 'gen_ai.tool.name',
    },
    aliases: ['gen_ai.tool.name', 'mcp.tool.name'],
    changelog: [{ version: '0.1.0', prs: [55, 57, 61, 108] }],
  },
  'ai.generation_id': {
    brief: 'Unique identifier for the completion.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'gen_123abc',
    deprecation: {
      replacement: 'gen_ai.response.id',
    },
    aliases: ['gen_ai.response.id'],
    changelog: [{ version: '0.1.0', prs: [55, 57, 61, 108, 127] }],
  },
  'ai.input_messages': {
    brief: 'The input messages sent to the model',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: '[{"role": "user", "message": "hello"}]',
    deprecation: {
      replacement: 'gen_ai.input.messages',
    },
    aliases: ['gen_ai.request.messages'],
    changelog: [{ version: '0.1.0', prs: [65, 119] }, { version: '0.0.0' }],
  },
  'ai.is_search_required': {
    brief: 'Boolean indicating if the model needs to perform a search.',
    type: 'boolean',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: false,
    deprecation: {},
    changelog: [
      { version: '0.5.0', prs: [264] },
      { version: '0.1.0', prs: [55] },
    ],
  },
  'ai.metadata': {
    brief: 'Extra metadata passed to an AI pipeline step.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: '{"user_id": 123, "session_id": "abc123"}',
    deprecation: {},
    changelog: [
      { version: '0.5.0', prs: [264] },
      { version: '0.1.0', prs: [55, 127] },
    ],
  },
  'ai.model_id': {
    brief: 'The vendor-specific ID of the model used.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'gpt-4',
    deprecation: {
      replacement: 'gen_ai.response.model',
    },
    aliases: ['gen_ai.response.model'],
    changelog: [{ version: '0.1.0', prs: [57, 61, 127] }, { version: '0.0.0' }],
  },
  'ai.model.provider': {
    brief: 'The provider of the model.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'openai',
    deprecation: {
      replacement: 'gen_ai.provider.name',
    },
    aliases: ['gen_ai.provider.name', 'gen_ai.system'],
    changelog: [
      { version: '0.4.0', prs: [253] },
      { version: '0.1.0', prs: [57, 61, 108, 127] },
    ],
  },
  'ai.pipeline.name': {
    brief: 'The name of the AI pipeline.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'Autofix Pipeline',
    deprecation: {
      replacement: 'gen_ai.pipeline.name',
    },
    aliases: ['gen_ai.pipeline.name'],
    changelog: [{ version: '0.1.0', prs: [53, 76, 108, 127] }],
  },
  'ai.preamble': {
    brief:
      "For an AI model call, the preamble parameter. Preambles are a part of the prompt used to adjust the model's overall behavior and conversation style.",
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'You are now a clown.',
    deprecation: {
      replacement: 'gen_ai.system_instructions',
    },
    aliases: ['gen_ai.system_instructions'],
    changelog: [
      { version: '0.5.0', prs: [264] },
      { version: '0.1.0', prs: [55] },
    ],
  },
  'ai.presence_penalty': {
    brief:
      'Used to reduce repetitiveness of generated tokens. Similar to frequency_penalty, except that this penalty is applied equally to all tokens that have already appeared, regardless of their exact frequencies.',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 0.5,
    deprecation: {
      replacement: 'gen_ai.request.presence_penalty',
    },
    aliases: ['gen_ai.request.presence_penalty'],
    changelog: [
      { version: '0.4.0', prs: [228] },
      { version: '0.1.0', prs: [55, 57, 61, 108] },
    ],
  },
  'ai.prompt_tokens.used': {
    brief: 'The number of tokens used to process just the prompt.',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 20,
    deprecation: {
      replacement: 'gen_ai.usage.input_tokens',
    },
    aliases: ['gen_ai.usage.prompt_tokens', 'gen_ai.usage.input_tokens'],
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.1.0', prs: [57, 61] }, { version: '0.0.0' }],
  },
  'ai.raw_prompting': {
    brief: 'When enabled, the user’s prompt will be sent to the model without any pre-processing.',
    type: 'boolean',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: true,
    deprecation: {},
    changelog: [
      { version: '0.5.0', prs: [264] },
      { version: '0.1.0', prs: [55] },
    ],
  },
  'ai.responses': {
    brief: 'The response messages sent back by the AI model.',
    type: 'string[]',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: ['hello', 'world'],
    deprecation: {
      replacement: 'gen_ai.output.messages',
    },
    changelog: [{ version: '0.1.0', prs: [65, 127] }, { version: '0.0.0' }],
  },
  'ai.response_format': {
    brief: 'For an AI model call, the format of the response',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'json_object',
    deprecation: {},
    changelog: [
      { version: '0.5.0', prs: [264] },
      { version: '0.1.0', prs: [55, 127] },
    ],
  },
  'ai.search_queries': {
    brief: 'Queries used to search for relevant context or documents.',
    type: 'string[]',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    example: ['climate change effects', 'renewable energy'],
    deprecation: {},
    changelog: [
      { version: '0.5.0', prs: [264] },
      { version: '0.1.0', prs: [55] },
    ],
  },
  'ai.search_results': {
    brief: 'Results returned from search queries for context.',
    type: 'string[]',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    example: ['search_result_1, search_result_2'],
    deprecation: {},
    changelog: [
      { version: '0.5.0', prs: [264] },
      { version: '0.1.0', prs: [55] },
    ],
  },
  'ai.seed': {
    brief: 'The seed, ideally models given the same seed and same other parameters will produce the exact same output.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: '1234567890',
    deprecation: {
      replacement: 'gen_ai.request.seed',
    },
    aliases: ['gen_ai.request.seed'],
    changelog: [{ version: '0.1.0', prs: [55, 57, 61, 108, 127] }],
  },
  'ai.streaming': {
    brief: 'Whether the request was streamed back.',
    type: 'boolean',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: true,
    deprecation: {
      replacement: 'gen_ai.response.streaming',
    },
    aliases: ['gen_ai.response.streaming'],
    changelog: [{ version: '0.1.0', prs: [76, 108] }, { version: '0.0.0' }],
  },
  'ai.tags': {
    brief: 'Tags that describe an AI pipeline step.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: '{"executed_function": "add_integers"}',
    deprecation: {},
    changelog: [
      { version: '0.5.0', prs: [264] },
      { version: '0.1.0', prs: [55, 127] },
    ],
  },
  'ai.temperature': {
    brief:
      'For an AI model call, the temperature parameter. Temperature essentially means how random the output will be.',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 0.1,
    deprecation: {
      replacement: 'gen_ai.request.temperature',
    },
    aliases: ['gen_ai.request.temperature'],
    changelog: [
      { version: '0.4.0', prs: [228] },
      { version: '0.1.0', prs: [55, 57, 61, 108] },
    ],
  },
  'ai.texts': {
    brief: 'Raw text inputs provided to the model.',
    type: 'string[]',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    example: ['Hello, how are you?', 'What is the capital of France?'],
    deprecation: {
      replacement: 'gen_ai.input.messages',
    },
    aliases: ['gen_ai.input.messages'],
    changelog: [
      { version: '0.5.0', prs: [264] },
      { version: '0.1.0', prs: [55] },
    ],
  },
  'ai.tools': {
    brief: 'For an AI model call, the functions that are available',
    type: 'string[]',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: ['function_1', 'function_2'],
    deprecation: {
      replacement: 'gen_ai.tool.definitions',
    },
    changelog: [{ version: '0.1.0', prs: [55, 65, 127] }],
  },
  'ai.tool_calls': {
    brief: 'For an AI model call, the tool calls that were made.',
    type: 'string[]',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    example: ['tool_call_1', 'tool_call_2'],
    deprecation: {
      replacement: 'gen_ai.output.messages',
    },
    changelog: [{ version: '0.1.0', prs: [55, 65] }],
  },
  'ai.top_k': {
    brief:
      'Limits the model to only consider the K most likely next tokens, where K is an integer (e.g., top_k=20 means only the 20 highest probability tokens are considered).',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 35,
    deprecation: {
      replacement: 'gen_ai.request.top_k',
    },
    aliases: ['gen_ai.request.top_k'],
    changelog: [
      { version: '0.4.0', prs: [228] },
      { version: '0.1.0', prs: [55, 57, 61, 108] },
    ],
  },
  'ai.top_p': {
    brief:
      'Limits the model to only consider tokens whose cumulative probability mass adds up to p, where p is a float between 0 and 1 (e.g., top_p=0.7 means only tokens that sum up to 70% of the probability mass are considered).',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 0.7,
    deprecation: {
      replacement: 'gen_ai.request.top_p',
    },
    aliases: ['gen_ai.request.top_p'],
    changelog: [
      { version: '0.4.0', prs: [228] },
      { version: '0.1.0', prs: [55, 57, 61, 108] },
    ],
  },
  'ai.total_cost': {
    brief: 'The total cost for the tokens used.',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 12.34,
    deprecation: {
      replacement: 'gen_ai.cost.total_tokens',
    },
    aliases: ['gen_ai.cost.total_tokens'],
    changelog: [
      { version: '0.5.0', prs: [264] },
      { version: '0.4.0', prs: [228] },
      { version: '0.1.0', prs: [53] },
    ],
  },
  'ai.total_tokens.used': {
    brief: 'The total number of tokens used to process the prompt.',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 30,
    deprecation: {
      replacement: 'gen_ai.usage.total_tokens',
    },
    aliases: ['gen_ai.usage.total_tokens'],
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.1.0', prs: [57, 61, 108] }, { version: '0.0.0' }],
  },
  'ai.warnings': {
    brief: 'Warning messages generated during model execution.',
    type: 'string[]',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    example: ['Token limit exceeded'],
    deprecation: {},
    changelog: [
      { version: '0.5.0', prs: [264] },
      { version: '0.1.0', prs: [55] },
    ],
  },
  'angular.version': {
    brief: 'The version of the Angular framework',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: '17.1.0',
    changelog: [{ version: '0.7.0', prs: [367], description: 'Added angular.version attribute' }],
  },
  'app.app_build': {
    brief: 'Internal build identifier, as it appears on the platform.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: '1',
    deprecation: {
      replacement: 'app.build',
      reason: 'Deprecated in favor of app.build',
    },
    aliases: ['app.build'],
    changelog: [
      { version: '0.5.0', prs: [296], description: 'Added and deprecated app.app_build in favor of app.build' },
    ],
  },
  'app.app_identifier': {
    brief: 'Version-independent application identifier, often a dotted bundle ID.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'com.example.myapp',
    deprecation: {
      replacement: 'app.identifier',
      reason: 'Deprecated in favor of app.identifier',
    },
    aliases: ['app.identifier'],
    changelog: [
      {
        version: '0.5.0',
        prs: [296],
        description: 'Added and deprecated app.app_identifier in favor of app.identifier',
      },
    ],
  },
  'app.app_name': {
    brief: 'Human readable application name, as it appears on the platform.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'My App',
    deprecation: {
      replacement: 'app.name',
      reason: 'Deprecated in favor of app.name',
    },
    aliases: ['app.name'],
    changelog: [
      { version: '0.5.0', prs: [296], description: 'Added and deprecated app.app_name in favor of app.name' },
    ],
  },
  'app.app_start_time': {
    brief: 'Formatted UTC timestamp when the user started the application.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: '2025-01-01T00:00:00.000Z',
    deprecation: {
      replacement: 'app.start_time',
      reason: 'Deprecated in favor of app.start_time',
    },
    aliases: ['app.start_time'],
    changelog: [
      {
        version: '0.5.0',
        prs: [296],
        description: 'Added and deprecated app.app_start_time in favor of app.start_time',
      },
    ],
  },
  'app.app_version': {
    brief: 'Human readable application version, as it appears on the platform.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: '1.0.0',
    deprecation: {
      replacement: 'app.version',
      reason: 'Deprecated in favor of app.version',
    },
    aliases: ['app.version'],
    changelog: [
      { version: '0.5.0', prs: [296], description: 'Added and deprecated app.app_version in favor of app.version' },
    ],
  },
  'app.build': {
    brief: 'Internal build identifier, as it appears on the platform.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: '1',
    aliases: ['app.app_build'],
    changelog: [{ version: '0.5.0', prs: [296], description: 'Added app.build attribute' }],
  },
  'app.identifier': {
    brief: 'Version-independent application identifier, often a dotted bundle ID.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'com.example.myapp',
    aliases: ['app.app_identifier'],
    changelog: [{ version: '0.5.0', prs: [296], description: 'Added app.identifier attribute' }],
  },
  'app.in_foreground': {
    brief: 'Whether the application is currently in the foreground.',
    type: 'boolean',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: true,
    changelog: [{ version: '0.5.0', prs: [296], description: 'Added app.in_foreground attribute' }],
  },
  'app.name': {
    brief: 'Human readable application name, as it appears on the platform.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'My App',
    aliases: ['app.app_name'],
    changelog: [{ version: '0.5.0', prs: [296], description: 'Added app.name attribute' }],
  },
  app_start_cold: {
    brief: 'The duration of a cold app start in milliseconds',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 1234.56,
    deprecation: {
      replacement: 'app.vitals.start.cold.value',
      reason:
        'Replaced by app.vitals.start.cold.value to align with the app.vitals.* namespace for mobile performance attributes',
    },
    aliases: ['app.vitals.start.cold.value'],
    changelog: [
      { version: '0.5.0', prs: [323], description: 'Added and deprecated in favor of app.vitals.start.cold.value' },
    ],
  },
  'app.start_time': {
    brief: 'Formatted UTC timestamp when the user started the application.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: '2025-01-01T00:00:00.000Z',
    aliases: ['app.app_start_time'],
    changelog: [{ version: '0.5.0', prs: [296], description: 'Added app.start_time attribute' }],
  },
  app_start_type: {
    brief: 'Mobile app start variant. Either cold or warm.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'cold',
    deprecation: {
      replacement: 'app.vitals.start.type',
      reason:
        'Replaced by app.vitals.start.type to align with the app.vitals.* namespace for mobile performance attributes',
    },
    aliases: ['app.vitals.start.type'],
    changelog: [
      { version: '0.5.0', prs: [313], description: 'Deprecated in favor of app.vitals.start.type' },
      { version: '0.1.0', prs: [127] },
      { version: '0.0.0' },
    ],
  },
  app_start_warm: {
    brief: 'The duration of a warm app start in milliseconds',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 1234.56,
    deprecation: {
      replacement: 'app.vitals.start.warm.value',
      reason:
        'Replaced by app.vitals.start.warm.value to align with the app.vitals.* namespace for mobile performance attributes',
    },
    aliases: ['app.vitals.start.warm.value'],
    changelog: [
      { version: '0.5.0', prs: [323], description: 'Added and deprecated in favor of app.vitals.start.warm.value' },
    ],
  },
  'app.version': {
    brief: 'Human readable application version, as it appears on the platform.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: '1.0.0',
    aliases: ['app.app_version'],
    changelog: [{ version: '0.5.0', prs: [296], description: 'Added app.version attribute' }],
  },
  'app.vitals.frames.delay.value': {
    brief:
      'The sum of all delayed frame durations in seconds during the lifetime of the span. For more information see [frames delay](https://develop.sentry.dev/sdk/performance/frames-delay/).',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 5,
    aliases: ['frames.delay'],
    changelog: [
      { version: '0.5.0', prs: [313], description: 'Added app.vitals.frames.delay.value to replace frames.delay' },
    ],
  },
  'app.vitals.frames.frozen.count': {
    brief: 'The number of frozen frames rendered during the lifetime of the span.',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 3,
    aliases: ['frames.frozen'],
    changelog: [
      { version: '0.5.0', prs: [313], description: 'Added app.vitals.frames.frozen.count to replace frames.frozen' },
    ],
  },
  'app.vitals.frames.slow.count': {
    brief: 'The number of slow frames rendered during the lifetime of the span.',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 1,
    aliases: ['frames.slow'],
    changelog: [
      { version: '0.5.0', prs: [313], description: 'Added app.vitals.frames.slow.count to replace frames.slow' },
    ],
  },
  'app.vitals.frames.total.count': {
    brief: 'The number of total frames rendered during the lifetime of the span.',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 60,
    aliases: ['frames.total'],
    changelog: [
      { version: '0.5.0', prs: [313], description: 'Added app.vitals.frames.total.count to replace frames.total' },
    ],
  },
  'app.vitals.start.cold.value': {
    brief: 'The duration of a cold app start in milliseconds',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 1234.56,
    aliases: ['app_start_cold'],
    changelog: [{ version: '0.5.0', prs: [313], description: 'Added app.vitals.start.cold.value attribute' }],
  },
  'app.vitals.start.prewarmed': {
    brief: 'Whether the app start was prewarmed.',
    type: 'boolean',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: true,
    changelog: [{ version: '0.11.0', prs: [379], description: 'Added app.vitals.start.prewarmed attribute' }],
  },
  'app.vitals.start.reason': {
    brief: 'The reason that triggered the app start.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'push',
    changelog: [{ version: '0.7.0', prs: [353], description: 'Added app.vitals.start.reason attribute' }],
  },
  'app.vitals.start.screen': {
    brief:
      'The screen that is rendered when the app start is complete. This is the screen the user first sees and can interact with after launch. The absence of this attribute on the app start span indicates a background app start where no UI was rendered.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'MainActivity',
    changelog: [{ version: '0.7.0', prs: [353], description: 'Added app.vitals.start.screen attribute' }],
  },
  'app.vitals.start.type': {
    brief: 'The type of app start, for example `cold` or `warm`',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'cold',
    aliases: ['app_start_type'],
    changelog: [{ version: '0.5.0', prs: [313], description: 'Added app.vitals.start.type attribute' }],
  },
  'app.vitals.start.warm.value': {
    brief: 'The duration of a warm app start in milliseconds',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 1234.56,
    aliases: ['app_start_warm'],
    changelog: [{ version: '0.5.0', prs: [313], description: 'Added app.vitals.start.warm.value attribute' }],
  },
  'app.vitals.ttfd.value': {
    brief: 'The duration of time to full display in milliseconds',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 1234.56,
    aliases: ['time_to_full_display'],
    changelog: [{ version: '0.5.0', prs: [313], description: 'Added app.vitals.ttfd.value attribute' }],
  },
  'app.vitals.ttid.value': {
    brief: 'The duration of time to initial display in milliseconds',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 1234.56,
    aliases: ['time_to_initial_display'],
    changelog: [{ version: '0.5.0', prs: [313], description: 'Added app.vitals.ttid.value attribute' }],
  },
  'art.gc.blocking_count': {
    brief: 'Total number of blocking (stop-the-world) garbage collections performed by the Android Runtime',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 1,
    changelog: [{ version: '0.11.0', prs: [382], description: 'Added art.gc.blocking_count attribute' }],
  },
  'art.gc.blocking_time': {
    brief: 'Total time spent in blocking (stop-the-world) garbage collections by the Android Runtime, in milliseconds',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 11.873,
    changelog: [{ version: '0.11.0', prs: [382], description: 'Added art.gc.blocking_time attribute' }],
  },
  'art.gc.pre_oome_count': {
    brief:
      'Total number of garbage collections triggered as a last resort before an OutOfMemoryError by the Android Runtime',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 0,
    changelog: [{ version: '0.11.0', prs: [382], description: 'Added art.gc.pre_oome_count attribute' }],
  },
  'art.gc.total_count': {
    brief: 'Total number of garbage collections performed by the Android Runtime',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 1,
    changelog: [{ version: '0.11.0', prs: [382], description: 'Added art.gc.total_count attribute' }],
  },
  'art.gc.total_time': {
    brief: 'Total time spent in garbage collection by the Android Runtime, in milliseconds',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 11.807,
    changelog: [{ version: '0.11.0', prs: [382], description: 'Added art.gc.total_time attribute' }],
  },
  'art.gc.waiting_time': {
    brief:
      'Total time threads spent waiting for garbage collection to complete in the Android Runtime, in milliseconds',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 8.054,
    changelog: [{ version: '0.11.0', prs: [382], description: 'Added art.gc.waiting_time attribute' }],
  },
  'art.memory.free': {
    brief: 'Free memory available to the process as reported by the Android Runtime, in bytes',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 3181568,
    changelog: [{ version: '0.11.0', prs: [382], description: 'Added art.memory.free attribute' }],
  },
  'art.memory.free_until_gc': {
    brief: 'Free memory available before a garbage collection would be triggered by the Android Runtime, in bytes',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 3181568,
    changelog: [{ version: '0.11.0', prs: [382], description: 'Added art.memory.free_until_gc attribute' }],
  },
  'art.memory.free_until_oome': {
    brief: 'Free memory available before an OutOfMemoryError would be thrown by the Android Runtime, in bytes',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 196083712,
    changelog: [{ version: '0.11.0', prs: [382], description: 'Added art.memory.free_until_oome attribute' }],
  },
  'art.memory.max': {
    brief: 'Maximum memory the process is allowed to use as reported by the Android Runtime, in bytes',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 201326592,
    changelog: [{ version: '0.11.0', prs: [382], description: 'Added art.memory.max attribute' }],
  },
  'art.memory.total': {
    brief: 'Total memory currently allocated to the process by the Android Runtime, in bytes',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 7774208,
    changelog: [{ version: '0.11.0', prs: [382], description: 'Added art.memory.total attribute' }],
  },
  'aws.cloudwatch.logs.log_group': {
    brief: 'The name of the CloudWatch Logs log group',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: '/aws/lambda/my-function',
    changelog: [{ version: '0.7.0', prs: [369], description: 'Added aws.cloudwatch.logs.log_group attribute' }],
  },
  'aws.cloudwatch.logs.log_stream': {
    brief: 'The name of the CloudWatch Logs log stream',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: '2024/01/01/[$LATEST]abcdef1234567890',
    changelog: [{ version: '0.7.0', prs: [369], description: 'Added aws.cloudwatch.logs.log_stream attribute' }],
  },
  'aws.cloudwatch.logs.url': {
    brief: 'The URL to the CloudWatch Logs log group',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'https://console.aws.amazon.com/cloudwatch/home?region=us-east-1#logsV2:log-groups/log-group/my-log-group',
    changelog: [{ version: '0.7.0', prs: [369], description: 'Added aws.cloudwatch.logs.url attribute' }],
  },
  'aws.lambda.aws_request_id': {
    brief: 'The AWS request ID as received by the Lambda function runtime',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: '8476a536-e9f4-11e8-9739-2dfe598c3fcd',
    deprecation: {
      replacement: 'faas.invocation_id',
      reason: 'This attribute is being deprecated in favor of faas.invocation_id',
    },
    aliases: ['faas.invocation_id'],
    changelog: [
      {
        version: '0.11.1',
        prs: [414, 424],
        description: 'Deprecated aws.lambda.aws_request_id in favor of faas.invocation_id',
      },
      { version: '0.7.0', prs: [369], description: 'Added aws.lambda.aws_request_id attribute' },
    ],
  },
  'aws.lambda.execution_duration_in_millis': {
    brief: 'The execution duration of the Lambda function invocation in milliseconds',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 1234.56,
    changelog: [
      { version: '0.7.0', prs: [369], description: 'Added aws.lambda.execution_duration_in_millis attribute' },
    ],
  },
  'aws.lambda.function_name': {
    brief: 'The name of the Lambda function',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'my-function',
    deprecation: {
      replacement: 'faas.name',
      reason: 'Use the OTel-aligned faas.name attribute instead',
    },
    aliases: ['faas.name'],
    changelog: [
      { version: '0.11.1', prs: [414], description: 'Deprecated aws.lambda.function_name in favor of faas.name' },
      { version: '0.7.0', prs: [369], description: 'Added aws.lambda.function_name attribute' },
    ],
  },
  'aws.lambda.function_version': {
    brief: 'The version of the Lambda function',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: '$LATEST',
    deprecation: {
      replacement: 'faas.version',
      reason: 'Use the OTel-aligned faas.version attribute instead',
    },
    aliases: ['faas.version'],
    changelog: [
      {
        version: '0.11.1',
        prs: [414, 424],
        description: 'Deprecated aws.lambda.function_version in favor of faas.version',
      },
      { version: '0.7.0', prs: [369], description: 'Added aws.lambda.function_version attribute' },
    ],
  },
  'aws.lambda.invoked_arn': {
    brief: 'The full ARN of the Lambda function that was invoked',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'arn:aws:lambda:us-east-1:123456789012:function:my-function',
    aliases: ['aws.lambda.invoked_function_arn'],
    changelog: [{ version: '0.11.1', prs: [414] }],
  },
  'aws.lambda.invoked_function_arn': {
    brief: 'The full ARN of the Lambda function that was invoked',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'arn:aws:lambda:us-east-1:123456789012:function:my-function',
    deprecation: {
      replacement: 'aws.lambda.invoked_arn',
      reason: 'This attribute is being deprecated in favor of aws.lambda.invoked_arn',
    },
    aliases: ['aws.lambda.invoked_arn'],
    changelog: [
      {
        version: '0.11.1',
        prs: [414],
        description: 'Deprecated aws.lambda.invoked_function_arn in favor of aws.lambda.invoked_arn',
      },
      { version: '0.7.0', prs: [369], description: 'Added aws.lambda.invoked_function_arn attribute' },
    ],
  },
  'aws.lambda.remaining_time_in_millis': {
    brief: 'The remaining time in milliseconds before the Lambda function times out',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 5000,
    changelog: [{ version: '0.7.0', prs: [369], description: 'Added aws.lambda.remaining_time_in_millis attribute' }],
  },
  'aws.log.group.names': {
    brief: 'The name(s) of the AWS log group(s) an application is writing to.',
    type: 'string[]',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: ['/aws/lambda/my-function', 'opentelemetry-service'],
    changelog: [{ version: '0.11.1', prs: [414] }],
  },
  'aws.log.stream.names': {
    brief: 'The name(s) of the AWS log stream(s) an application is writing to.',
    type: 'string[]',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: ['logs/main/10838bed-421f-43ef-870a-f43feacbbb5b'],
    changelog: [{ version: '0.11.1', prs: [414] }],
  },
  blocked_main_thread: {
    brief: 'Whether the main thread was blocked by the span.',
    type: 'boolean',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: true,
    changelog: [{ version: '0.0.0' }],
  },
  'browser.name': {
    brief: 'The name of the browser.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'Chrome',
    aliases: ['sentry.browser.name'],
    changelog: [{ version: '0.1.0', prs: [127, 139] }, { version: '0.0.0' }],
  },
  'browser.performance.navigation.activation_start': {
    brief: 'The time between initiating a navigation to a page and the browser activating the page',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 1.983,
    aliases: ['performance.activationStart'],
    changelog: [
      { version: '0.5.0', prs: [321], description: 'Added browser.performance.navigation.activation_start attribute' },
    ],
  },
  'browser.performance.time_origin': {
    brief: "The browser's performance.timeOrigin timestamp representing the time when the pageload was initiated",
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 1776185678.886,
    aliases: ['performance.timeOrigin'],
    changelog: [
      { version: '0.5.0', prs: [321], description: 'Added browser.performance.time_origin attribute attribute' },
    ],
  },
  'browser.report.type': {
    brief: 'A browser report sent via reporting API..',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'network-error',
    changelog: [{ version: '0.1.0', prs: [68, 127] }],
  },
  'browser.script.invoker': {
    brief: 'How a script was called in the browser.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'Window.requestAnimationFrame',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'browser.script.invoker_type': {
    brief: 'Browser script entry point type.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'event-listener',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'browser.script.source_char_position': {
    brief: 'A number representing the script character position of the script.',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 678,
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.0.0' }],
  },
  'browser.version': {
    brief: 'The version of the browser.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: '120.0.6099.130',
    aliases: ['sentry.browser.version'],
    changelog: [{ version: '0.1.0', prs: [59, 127, 139] }],
  },
  'browser.web_vital.cls.report_event': {
    brief: 'The event that caused the SDK to report CLS (pagehide or navigation)',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'navigation',
    changelog: [{ version: '0.5.0', prs: [319], description: 'Added browser.web_vital.cls.report_event attribute' }],
  },
  'browser.web_vital.cls.source.<key>': {
    brief: 'The HTML elements or components responsible for the layout shift. <key> is a numeric index from 1 to N',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    hasDynamicSuffix: true,
    example: 'body > div#app',
    aliases: ['cls.source.<key>'],
    changelog: [{ version: '0.5.0', prs: [234] }],
  },
  'browser.web_vital.cls.value': {
    brief: 'The value of the recorded Cumulative Layout Shift (CLS) web vital',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 0.2361,
    aliases: ['cls'],
    changelog: [{ version: '0.5.0', prs: [229], description: 'Added browser.web_vital.cls.value attribute' }],
  },
  'browser.web_vital.fcp.value': {
    brief: 'The time it takes for the browser to render the first piece of meaningful content on the screen',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 547.6951,
    aliases: ['fcp'],
    changelog: [{ version: '0.5.0', prs: [235] }],
  },
  'browser.web_vital.fp.value': {
    brief: 'The time in milliseconds it takes for the browser to render the first pixel on the screen',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 477.1926,
    aliases: ['fp'],
    changelog: [{ version: '0.5.0', prs: [235] }],
  },
  'browser.web_vital.inp.value': {
    brief: 'The value of the recorded Interaction to Next Paint (INP) web vital',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 200,
    aliases: ['inp'],
    changelog: [{ version: '0.5.0', prs: [229], description: 'Added browser.web_vital.inp.value attribute' }],
  },
  'browser.web_vital.lcp.element': {
    brief: 'The HTML element selector or component name for which LCP was reported',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'body > div#app > div#container > div',
    aliases: ['lcp.element'],
    changelog: [{ version: '0.5.0', prs: [233] }],
  },
  'browser.web_vital.lcp.id': {
    brief: 'The id of the dom element responsible for the largest contentful paint',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: '#gero',
    aliases: ['lcp.id'],
    changelog: [{ version: '0.5.0', prs: [233] }],
  },
  'browser.web_vital.lcp.load_time': {
    brief: 'The time it took for the LCP element to be loaded',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 1402,
    aliases: ['lcp.loadTime'],
    changelog: [{ version: '0.5.0', prs: [233] }],
  },
  'browser.web_vital.lcp.render_time': {
    brief: 'The time it took for the LCP element to be rendered',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 1685,
    aliases: ['lcp.renderTime'],
    changelog: [{ version: '0.5.0', prs: [233] }],
  },
  'browser.web_vital.lcp.report_event': {
    brief: 'The event that caused the SDK to report LCP (pagehide or navigation)',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'pagehide',
    changelog: [{ version: '0.5.0', prs: [319], description: 'Added browser.web_vital.lcp.report_event attribute' }],
  },
  'browser.web_vital.lcp.size': {
    brief: 'The size of the largest contentful paint element',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 1024,
    aliases: ['lcp.size'],
    changelog: [{ version: '0.5.0', prs: [233] }],
  },
  'browser.web_vital.lcp.url': {
    brief: 'The url of the dom element responsible for the largest contentful paint',
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'https://example.com/static/img.png',
    aliases: ['lcp.url'],
    changelog: [{ version: '0.5.0', prs: [233] }],
  },
  'browser.web_vital.lcp.value': {
    brief: 'The value of the recorded Largest Contentful Paint (LCP) web vital',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 2500,
    aliases: ['lcp'],
    changelog: [{ version: '0.5.0', prs: [229], description: 'Added browser.web_vital.lcp.value attribute' }],
  },
  'browser.web_vital.ttfb.request_time': {
    brief:
      "The time it takes for the server to process the initial request and send the first byte of a response to the user's browser",
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 1554.5814,
    aliases: ['ttfb.requestTime'],
    changelog: [{ version: '0.5.0', prs: [235] }],
  },
  'browser.web_vital.ttfb.value': {
    brief: 'The value of the recorded Time To First Byte (TTFB) web vital in Milliseconds',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 194.3322,
    aliases: ['ttfb'],
    changelog: [{ version: '0.5.0', prs: [235] }],
  },
  'cache.hit': {
    brief: 'If the cache was hit during this span.',
    type: 'boolean',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: true,
    changelog: [{ version: '0.0.0' }],
  },
  'cache.item_size': {
    brief: 'The size of the requested item in the cache. In bytes.',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 58,
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.0.0' }],
  },
  'cache.key': {
    brief: 'The key of the cache accessed.',
    type: 'string[]',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: ['my-cache-key', 'my-other-cache-key'],
    changelog: [{ version: '0.0.0' }],
  },
  'cache.operation': {
    brief: 'The operation being performed on the cache.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'get',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'cache.ttl': {
    brief: 'The ttl of the cache in seconds',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 120,
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.0.0' }],
  },
  'cache.write': {
    brief: 'If the cache operation resulted in a write to the cache.',
    type: 'boolean',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: true,
    changelog: [{ version: '0.5.0' }],
  },
  channel: {
    brief: 'The channel name that is being used.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'mail',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'client.address': {
    brief:
      'Client address - domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.',
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'example.com',
    aliases: ['http.client_ip'],
    changelog: [{ version: '0.1.0', prs: [106, 127] }, { version: '0.0.0' }],
  },
  'client.port': {
    brief: 'Client port number.',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 5432,
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.0.0' }],
  },
  'cloudflare.d1.duration': {
    brief: 'The duration of a Cloudflare D1 operation.',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 543,
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.0.0' }],
  },
  'cloudflare.d1.query_type': {
    brief: 'The type of query executed in a Cloudflare D1 operation',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'run',
    deprecation: {
      replacement: 'db.operation.name',
    },
    aliases: ['db.operation.name', 'db.operation'],
    changelog: [{ version: '0.11.0', prs: [392], description: 'Added cloudflare.d1.query_type attribute' }],
  },
  'cloudflare.d1.rows_read': {
    brief: 'The number of rows read in a Cloudflare D1 operation.',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 12,
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.0.0' }],
  },
  'cloudflare.d1.rows_written': {
    brief: 'The number of rows written in a Cloudflare D1 operation.',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 12,
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.0.0' }],
  },
  'cloudflare.durable_object.query.bindings': {
    brief: 'The number of bound parameters passed to the SQL exec call.',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 2,
    changelog: [
      { version: '0.13.0', prs: [435], description: 'Added cloudflare.durable_object.query.bindings attribute' },
    ],
  },
  'cloudflare.durable_object.response.rows_read': {
    brief: 'The number of rows read by a Cloudflare Durable Object SQL operation.',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 12,
    changelog: [
      { version: '0.13.0', prs: [435], description: 'Added cloudflare.durable_object.response.rows_read attribute' },
    ],
  },
  'cloudflare.durable_object.response.rows_written': {
    brief: 'The number of rows written by a Cloudflare Durable Object SQL operation.',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 1,
    changelog: [
      { version: '0.13.0', prs: [435], description: 'Added cloudflare.durable_object.response.rows_written attribute' },
    ],
  },
  'cloudflare.r2.bucket': {
    brief: 'The name of the Cloudflare R2 bucket binding',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'MY_BUCKET',
    changelog: [{ version: '0.11.1', prs: [413], description: 'Added cloudflare.r2.bucket attribute' }],
  },
  'cloudflare.r2.operation': {
    brief: 'The R2 API operation being performed',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'GetObject',
    changelog: [{ version: '0.11.1', prs: [413], description: 'Added cloudflare.r2.operation attribute' }],
  },
  'cloudflare.r2.request.delimiter': {
    brief: 'The delimiter used to group objects in an R2 list operation',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: '/',
    changelog: [{ version: '0.11.1', prs: [413], description: 'Added cloudflare.r2.request.delimiter attribute' }],
  },
  'cloudflare.r2.request.key': {
    brief: 'The object key used in the R2 operation',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'my-file.txt',
    changelog: [{ version: '0.11.1', prs: [413], description: 'Added cloudflare.r2.request.key attribute' }],
  },
  'cloudflare.r2.request.part_number': {
    brief: 'The part number in a multipart upload operation',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 1,
    changelog: [{ version: '0.11.1', prs: [413], description: 'Added cloudflare.r2.request.part_number attribute' }],
  },
  'cloudflare.r2.request.prefix': {
    brief: 'The prefix used to filter objects in an R2 list operation',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'images/',
    changelog: [{ version: '0.11.1', prs: [413], description: 'Added cloudflare.r2.request.prefix attribute' }],
  },
  'cloudflare.workflow.attempt': {
    brief: 'The current attempt number for a Cloudflare Workflow step',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 1,
    changelog: [{ version: '0.11.0', prs: [392], description: 'Added cloudflare.workflow.attempt attribute' }],
  },
  'cloudflare.workflow.retries.backoff': {
    brief: 'The backoff strategy for Cloudflare Workflow step retries',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'exponential',
    changelog: [{ version: '0.11.0', prs: [392], description: 'Added cloudflare.workflow.retries.backoff attribute' }],
  },
  'cloudflare.workflow.retries.delay': {
    brief: 'The delay between Cloudflare Workflow step retries',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: '5 seconds',
    changelog: [{ version: '0.11.0', prs: [392], description: 'Added cloudflare.workflow.retries.delay attribute' }],
  },
  'cloudflare.workflow.retries.limit': {
    brief: 'The maximum number of retries for a Cloudflare Workflow step',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 3,
    changelog: [{ version: '0.11.0', prs: [392], description: 'Added cloudflare.workflow.retries.limit attribute' }],
  },
  'cloudflare.workflow.timeout': {
    brief: 'The timeout duration for a Cloudflare Workflow step',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: '1 minute',
    changelog: [{ version: '0.11.0', prs: [392], description: 'Added cloudflare.workflow.timeout attribute' }],
  },
  'cloud.account.id': {
    brief: 'The cloud account ID the resource is assigned to',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: '123456789012',
    changelog: [{ version: '0.7.0', prs: [364], description: 'Added cloud.account.id attribute' }],
  },
  'cloud.availability_zone': {
    brief: 'Cloud regions often have multiple, isolated locations known as zones to increase availability',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'us-east-1c',
    changelog: [{ version: '0.7.0', prs: [364], description: 'Added cloud.availability_zone attribute' }],
  },
  'cloud.platform': {
    brief: 'The cloud platform in use',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'aws_lambda',
    changelog: [{ version: '0.7.0', prs: [364], description: 'Added cloud.platform attribute' }],
  },
  'cloud.provider': {
    brief: 'Name of the cloud provider',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'aws',
    changelog: [{ version: '0.7.0', prs: [364], description: 'Added cloud.provider attribute' }],
  },
  'cloud.region': {
    brief: 'The geographical region the resource is running',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'us-east-1',
    changelog: [{ version: '0.7.0', prs: [364], description: 'Added cloud.region attribute' }],
  },
  'cloud.resource_id': {
    brief: 'Cloud provider-specific native identifier of the monitored cloud resource',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'arn:aws:lambda:REGION:ACCOUNT_ID:function:my-function',
    changelog: [{ version: '0.11.1', prs: [414] }],
    additionalContext: [
      'This can be an identifier for a resource in AWS, GCP, or Azure. There may be some overlap in values found here with other attributes. For instance, an AWS lambda ARN may be found here as well as in `aws.lambda.invoked_arn`. OTEL recommends setting them alongside each other.',
    ],
  },
  cls: {
    brief: 'The value of the recorded Cumulative Layout Shift (CLS) web vital',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 0.2361,
    deprecation: {
      replacement: 'browser.web_vital.cls.value',
      reason: 'The CLS web vital is now recorded as a browser.web_vital.cls.value attribute.',
    },
    aliases: ['browser.web_vital.cls.value'],
    changelog: [
      {
        version: '0.5.0',
        prs: [229],
        description: "Added and deprecated attribute to document JS SDK's current behaviour",
      },
    ],
  },
  'cls.source.<key>': {
    brief: 'The HTML elements or components responsible for the layout shift. <key> is a numeric index from 1 to N',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    hasDynamicSuffix: true,
    example: 'body > div#app',
    deprecation: {
      replacement: 'browser.web_vital.cls.source.<key>',
      reason: 'The CLS source is now recorded as a browser.web_vital.cls.source.<key> attribute.',
    },
    aliases: ['browser.web_vital.cls.source.<key>'],
    changelog: [{ version: '0.5.0', prs: [234] }],
  },
  'code.filepath': {
    brief:
      'The source code file name that identifies the code unit as uniquely as possible (preferably an absolute file path).',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: '/app/myapplication/http/handler/server.py',
    deprecation: {
      replacement: 'code.file.path',
    },
    aliases: ['code.file.path'],
    changelog: [{ version: '0.1.0', prs: [61] }, { version: '0.0.0' }],
  },
  'code.file.path': {
    brief:
      'The source code file name that identifies the code unit as uniquely as possible (preferably an absolute file path).',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: '/app/myapplication/http/handler/server.py',
    aliases: ['code.filepath'],
    changelog: [{ version: '0.0.0' }],
  },
  'code.function': {
    brief: "The method or function name, or equivalent (usually rightmost part of the code unit's name).",
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'server_request',
    aliases: ['code.function.name'],
    changelog: [{ version: '0.1.0', prs: [61, 74] }, { version: '0.0.0' }],
  },
  'code.function.name': {
    brief: 'The method or function fully-qualified name without arguments.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'server_request',
    aliases: ['code.function'],
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'code.lineno': {
    brief:
      'The line number in code.filepath best representing the operation. It SHOULD point within the code unit named in code.function',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 42,
    deprecation: {
      replacement: 'code.line.number',
    },
    aliases: ['code.line.number'],
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.1.0', prs: [61, 108] }, { version: '0.0.0' }],
  },
  'code.line.number': {
    brief:
      'The line number in code.filepath best representing the operation. It SHOULD point within the code unit named in code.function',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 42,
    aliases: ['code.lineno'],
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.0.0' }],
  },
  'code.namespace': {
    brief:
      "The 'namespace' within which code.function is defined. Usually the qualified class or module name, such that code.namespace + some separator + code.function form a unique identifier for the code unit.",
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'http.handler',
    changelog: [{ version: '0.1.0', prs: [61, 74] }, { version: '0.0.0' }],
  },
  connectionType: {
    brief: 'Specifies the type of the current connection (e.g. wifi, ethernet, cellular , etc).',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'wifi',
    deprecation: {
      replacement: 'network.connection.type',
      reason: 'Old namespace-less attribute, to be replaced with network.connection.type for span-first future',
    },
    aliases: ['network.connection.type', 'device.connection_type'],
    changelog: [
      {
        version: '0.5.0',
        prs: [279],
        description: "Added and deprecated attribute to document JS SDK's current behaviour",
      },
    ],
  },
  'connection.rtt': {
    brief: 'Specifies the estimated effective round-trip time of the current connection, in milliseconds.',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 100,
    deprecation: {
      replacement: 'network.connection.rtt',
      reason:
        'Old attribute name (no official namespace), to be replaced with network.connection.rtt for span-first future',
    },
    aliases: ['network.connection.rtt'],
    changelog: [
      {
        version: '0.5.0',
        prs: [279],
        description: "Added and deprecated attribute to document JS SDK's current behaviour",
      },
    ],
  },
  'culture.calendar': {
    brief: 'The calendar system used by the culture.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'GregorianCalendar',
    changelog: [{ version: '0.4.0', prs: [243] }],
  },
  'culture.display_name': {
    brief: 'Human readable name of the culture.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'English (United States)',
    changelog: [{ version: '0.4.0', prs: [243] }],
  },
  'culture.is_24_hour_format': {
    brief: 'Whether the culture uses 24-hour time format.',
    type: 'boolean',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: true,
    changelog: [{ version: '0.4.0', prs: [243] }],
  },
  'culture.locale': {
    brief: 'The locale identifier following RFC 4646.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'en-US',
    changelog: [{ version: '0.4.0', prs: [243] }],
  },
  'culture.timezone': {
    brief: 'The timezone of the culture, as a geographic timezone identifier.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'Europe/Vienna',
    changelog: [{ version: '0.4.0', prs: [243] }],
  },
  'db.collection.name': {
    brief: 'The name of a collection (table, container) within the database.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'users',
    changelog: [{ version: '0.1.0', prs: [106, 127] }, { version: '0.0.0' }],
  },
  'db.driver.name': {
    brief: 'The name of the driver used for the database connection.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'psycopg2',
    changelog: [{ version: '0.5.0', prs: [297], description: 'Added db.driver.name attribute' }],
  },
  'db.name': {
    brief: 'The name of the database being accessed.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'customers',
    deprecation: {
      replacement: 'db.namespace',
    },
    aliases: ['db.namespace'],
    changelog: [{ version: '0.1.0', prs: [61, 127] }, { version: '0.0.0' }],
  },
  'db.namespace': {
    brief: 'The name of the database being accessed.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'customers',
    aliases: ['db.name'],
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'db.operation': {
    brief: 'The name of the operation being executed.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'SELECT',
    deprecation: {
      replacement: 'db.operation.name',
    },
    aliases: ['db.operation.name', 'cloudflare.d1.query_type'],
    changelog: [{ version: '0.4.0', prs: [199] }, { version: '0.1.0', prs: [61, 127] }, { version: '0.0.0' }],
  },
  'db.operation.batch.size': {
    brief:
      'The number of queries included in a batch operation. Operations are only considered batches when they contain two or more operations, and so db.operation.batch.size SHOULD never be 1.',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 3,
    changelog: [{ version: '0.11.0', prs: [407], description: 'Added db.operation.batch.size attribute' }],
  },
  'db.operation.name': {
    brief: 'The name of the operation being executed.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'SELECT',
    aliases: ['db.operation', 'cloudflare.d1.query_type'],
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'db.query.parameter.<key>': {
    brief:
      'A query parameter used in db.query.text, with <key> being the parameter name, and the attribute value being a string representation of the parameter value.',
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: true,
    visibility: 'public',
    hasDynamicSuffix: true,
    example: "db.query.parameter.foo='123'",
    changelog: [{ version: '0.1.0', prs: [103, 127] }],
  },
  'db.query.summary': {
    brief:
      'A shortened representation of operation(s) in the full query. This attribute must be low-cardinality and should only contain the operation table names.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'SELECT users',
    changelog: [{ version: '0.4.0', prs: [208] }, { version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'db.query.text': {
    brief:
      'The database parameterized query being executed. Any parameter values (filters, insertion values, etc) should be replaced with parameter placeholders. If applicable, use `db.query.parameter.<key>` to add the parameter value.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'SELECT * FROM users WHERE id = $1',
    aliases: ['db.statement'],
    changelog: [{ version: '0.4.0', prs: [208] }, { version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'db.redis.connection': {
    brief: 'The redis connection name.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'my-redis-instance',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'db.redis.key': {
    brief: 'The key the Redis command is operating on.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'user:2047:city',
    changelog: [{ version: '0.6.0', prs: [326], description: 'Added db.redis.key attribute' }],
  },
  'db.redis.parameters': {
    brief: 'The array of command parameters given to a redis command.',
    type: 'string[]',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    example: ['test', '*'],
    changelog: [{ version: '0.0.0' }],
  },
  'db.response.status_code': {
    brief:
      'Database response status code. The status code returned by the database. Usually it represents an error code, but may also represent partial success, warning, or differentiate between various types of successful outcomes.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'ORA-17002',
    changelog: [{ version: 'next', prs: [462], description: 'Added db.response.status_code attribute' }],
  },
  'db.sql.bindings': {
    brief: 'The array of query bindings.',
    type: 'string[]',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    example: ['1', 'foo'],
    deprecation: {
      replacement: 'db.query.parameter.<key>',
      reason:
        'Instead of adding every binding in the db.sql.bindings attribute, add them as individual entires with db.query.parameter.<key>.',
    },
    changelog: [{ version: '0.1.0', prs: [61] }, { version: '0.0.0' }],
  },
  'db.statement': {
    brief: 'The database statement being executed.',
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'SELECT * FROM users',
    deprecation: {
      replacement: 'db.query.text',
    },
    aliases: ['db.query.text'],
    changelog: [{ version: '0.4.0', prs: [199] }, { version: '0.1.0', prs: [61, 127] }, { version: '0.0.0' }],
  },
  'db.stored_procedure.name': {
    brief: 'The name of a stored procedure being called.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'GetUserById',
    changelog: [{ version: '0.11.0', prs: [398] }],
  },
  'db.system': {
    brief:
      'An identifier for the database management system (DBMS) product being used. See [OpenTelemetry docs](https://github.com/open-telemetry/semantic-conventions/blob/main/docs/database/database-spans.md#notes-and-well-known-identifiers-for-dbsystem) for a list of well-known identifiers.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'postgresql',
    deprecation: {
      replacement: 'db.system.name',
    },
    aliases: ['db.system.name'],
    changelog: [{ version: '0.4.0', prs: [199, 224] }, { version: '0.1.0', prs: [61, 127] }, { version: '0.0.0' }],
  },
  'db.system.name': {
    brief:
      'An identifier for the database management system (DBMS) product being used. See [OpenTelemetry docs](https://github.com/open-telemetry/semantic-conventions/blob/main/docs/database/database-spans.md#notes-and-well-known-identifiers-for-dbsystem) for a list of well-known identifiers.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'postgresql',
    aliases: ['db.system'],
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'db.user': {
    brief: 'The database user.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'fancy_user',
    changelog: [{ version: '0.0.0' }],
  },
  deviceMemory: {
    brief: 'The estimated total memory capacity of the device, only a rough estimation in gigabytes.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: '8 GB',
    deprecation: {
      replacement: 'device.memory.estimated_capacity',
      reason:
        'Old namespace-less attribute, to be replaced with device.memory.estimated_capacity for span-first future',
    },
    aliases: ['device.memory.estimated_capacity'],
    changelog: [
      {
        version: '0.5.0',
        prs: [281],
        description: "Added and deprecated attribute to document JS SDK's current behaviour",
      },
    ],
  },
  'device.archs': {
    brief: 'The CPU architectures of the device.',
    type: 'string[]',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: ['arm64-v8a', 'armeabi-v7a', 'armeabi'],
    changelog: [{ version: '0.5.0', prs: [303], description: 'Added device.archs attribute' }],
  },
  'device.battery_level': {
    brief: 'The battery level of the device as a percentage (0-100).',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 100,
    changelog: [{ version: '0.5.0', prs: [303], description: 'Added device.battery_level attribute' }],
  },
  'device.battery_temperature': {
    brief: 'The battery temperature of the device in Celsius.',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 25,
    changelog: [{ version: '0.5.0', prs: [303], description: 'Added device.battery_temperature attribute' }],
  },
  'device.boot_time': {
    brief: 'A formatted UTC timestamp when the system was booted.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: '2018-02-08T12:52:12Z',
    changelog: [{ version: '0.5.0', prs: [303], description: 'Added device.boot_time attribute' }],
  },
  'device.brand': {
    brief: 'The brand of the device.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'Apple',
    changelog: [{ version: '0.1.0', prs: [116, 127] }],
  },
  'device.charging': {
    brief: 'Whether the device was charging or not.',
    type: 'boolean',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: false,
    changelog: [{ version: '0.5.0', prs: [303], description: 'Added device.charging attribute' }],
  },
  'device.chipset': {
    brief: 'The chipset of the device.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'Qualcomm SM8550',
    changelog: [{ version: '0.5.0', prs: [303], description: 'Added device.chipset attribute' }],
  },
  'device.class': {
    brief:
      'The classification of the device. For example, `low`, `medium`, or `high`. Typically inferred by Relay - SDKs generally do not need to set this directly.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'medium',
    changelog: [{ version: '0.5.0', prs: [300], description: 'Added device.class attribute' }],
  },
  'device.connection_type': {
    brief: 'The internet connection type currently being used by the device.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'wifi',
    deprecation: {
      replacement: 'network.connection.type',
      reason: 'This attribute is being deprecated in favor of network.connection.type',
    },
    aliases: ['network.connection.type', 'connectionType'],
    changelog: [
      {
        version: '0.5.0',
        prs: [303],
        description: 'Added and deprecated device.connection_type in favor of network.connection.type',
      },
    ],
  },
  'device.cpu_description': {
    brief: 'A description of the CPU of the device.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'Intel(R) Core(TM)2 Quad CPU Q6600 @ 2.40GHz',
    changelog: [{ version: '0.5.0', prs: [303], description: 'Added device.cpu_description attribute' }],
  },
  'device.external_free_storage': {
    brief: 'External storage free size in bytes.',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 67108864000,
    changelog: [{ version: '0.5.0', prs: [303], description: 'Added device.external_free_storage attribute' }],
  },
  'device.external_storage_size': {
    brief: 'External storage total size in bytes.',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 134217728000,
    changelog: [{ version: '0.5.0', prs: [303], description: 'Added device.external_storage_size attribute' }],
  },
  'device.family': {
    brief: 'The family of the device.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'iPhone',
    changelog: [{ version: '0.1.0', prs: [116, 127] }],
  },
  'device.free_memory': {
    brief: 'Free system memory in bytes.',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 2147483648,
    changelog: [{ version: '0.5.0', prs: [300], description: 'Added device.free_memory attribute' }],
  },
  'device.free_storage': {
    brief: 'Free device storage in bytes.',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 107374182400,
    changelog: [{ version: '0.5.0', prs: [303], description: 'Added device.free_storage attribute' }],
  },
  'device.id': {
    brief: 'Unique device identifier.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
    changelog: [{ version: '0.5.0', prs: [303], description: 'Added device.id attribute' }],
  },
  'device.locale': {
    brief: 'The locale of the device.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'en-US',
    changelog: [{ version: '0.5.0', prs: [303], description: 'Added device.locale attribute' }],
  },
  'device.low_memory': {
    brief: 'Whether the device was low on memory.',
    type: 'boolean',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: false,
    changelog: [{ version: '0.5.0', prs: [303], description: 'Added device.low_memory attribute' }],
  },
  'device.low_power_mode': {
    brief: 'Whether the device is in Low Power Mode.',
    type: 'boolean',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: true,
    changelog: [{ version: '0.6.0', prs: [314], description: 'Added device.low_power_mode attribute' }],
  },
  'device.manufacturer': {
    brief: 'The manufacturer of the device.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'Google',
    changelog: [{ version: '0.5.0', prs: [303], description: 'Added device.manufacturer attribute' }],
  },
  'device.memory.estimated_capacity': {
    brief:
      'The estimated total memory capacity of the device, only a rough estimation in gigabytes. Browsers report estimations in buckets of powers of 2, mostly capped at 8 GB',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 8,
    aliases: ['deviceMemory'],
    changelog: [
      {
        version: '0.5.0',
        prs: [281],
        description: 'Added attribute device.memory.estimated_capacity to be used instead of deviceMemory',
      },
    ],
  },
  'device.memory_size': {
    brief: 'Total system memory available in bytes.',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 17179869184,
    changelog: [{ version: '0.5.0', prs: [300], description: 'Added device.memory_size attribute' }],
  },
  'device.model': {
    brief: 'The model of the device.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'iPhone 15 Pro Max',
    changelog: [{ version: '0.1.0', prs: [116, 127] }],
  },
  'device.model_id': {
    brief: 'An internal hardware revision to identify the device exactly.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'N861AP',
    changelog: [{ version: '0.5.0', prs: [300], description: 'Added device.model_id attribute' }],
  },
  'device.name': {
    brief:
      'The name of the device. On mobile, this is the user-assigned device name. On servers and desktops, this is typically the hostname.',
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'localhost',
    changelog: [{ version: '0.5.0', prs: [303], description: 'Added device.name attribute' }],
  },
  'device.online': {
    brief: 'Whether the device was online or not.',
    type: 'boolean',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: true,
    changelog: [{ version: '0.5.0', prs: [303], description: 'Added device.online attribute' }],
  },
  'device.orientation': {
    brief: 'The orientation of the device, either "portrait" or "landscape".',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'portrait',
    changelog: [{ version: '0.5.0', prs: [303], description: 'Added device.orientation attribute' }],
  },
  'device.processor_count': {
    brief: 'Number of "logical processors".',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 8,
    aliases: ['hardwareConcurrency'],
    changelog: [
      {
        version: '0.5.0',
        prs: [300],
        description: 'Added and deprecated attribute device.processor_count in favor of device.cpu.logical_core_count',
      },
    ],
  },
  'device.processor_frequency': {
    brief: 'Processor frequency in MHz.',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 2400,
    changelog: [{ version: '0.5.0', prs: [303], description: 'Added device.processor_frequency attribute' }],
  },
  'device.screen_density': {
    brief: 'The screen density of the device.',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 2.625,
    changelog: [{ version: '0.5.0', prs: [303], description: 'Added device.screen_density attribute' }],
  },
  'device.screen_dpi': {
    brief: 'The screen density in dots-per-inch (DPI) of the device.',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 420,
    changelog: [{ version: '0.5.0', prs: [303], description: 'Added device.screen_dpi attribute' }],
  },
  'device.screen_height_pixels': {
    brief: 'The height of the device screen in pixels.',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 2400,
    changelog: [{ version: '0.5.0', prs: [303], description: 'Added device.screen_height_pixels attribute' }],
  },
  'device.screen_width_pixels': {
    brief: 'The width of the device screen in pixels.',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 1080,
    changelog: [{ version: '0.5.0', prs: [303], description: 'Added device.screen_width_pixels attribute' }],
  },
  'device.simulator': {
    brief: 'Whether the device is a simulator or an actual device.',
    type: 'boolean',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: false,
    changelog: [{ version: '0.5.0', prs: [300], description: 'Added device.simulator attribute' }],
  },
  'device.storage_size': {
    brief: 'Total device storage in bytes.',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 274877906944,
    changelog: [{ version: '0.5.0', prs: [303], description: 'Added device.storage_size attribute' }],
  },
  'device.thermal_state': {
    brief:
      "The thermal state of the device. Based on Apple's `ProcessInfo.ThermalState` enum: `nominal`, `fair`, `serious`, or `critical`.",
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'nominal',
    changelog: [{ version: '0.5.0', prs: [303], description: 'Added device.thermal_state attribute' }],
  },
  'device.timezone': {
    brief: 'The timezone of the device.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'Europe/Vienna',
    changelog: [{ version: '0.5.0', prs: [303], description: 'Added device.timezone attribute' }],
  },
  'device.usable_memory': {
    brief: 'Memory usable for the app in bytes.',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 2147483648,
    changelog: [{ version: '0.5.0', prs: [303], description: 'Added device.usable_memory attribute' }],
  },
  effectiveConnectionType: {
    brief: 'Specifies the estimated effective type of the current connection (e.g. slow-2g, 2g, 3g, 4g).',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: '4g',
    deprecation: {
      replacement: 'network.connection.effective_type',
      reason:
        'Old namespace-less attribute, to be replaced with network.connection.effective_type for span-first future',
    },
    aliases: ['network.connection.effective_type'],
    changelog: [
      {
        version: '0.5.0',
        prs: [279],
        description: "Added and deprecated attribute to document JS SDK's current behaviour",
      },
    ],
  },
  environment: {
    brief: 'The sentry environment.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'production',
    deprecation: {
      replacement: 'sentry.environment',
    },
    aliases: ['sentry.environment'],
    changelog: [{ version: '0.1.0', prs: [61, 127] }, { version: '0.0.0' }],
  },
  'error.type': {
    brief: 'Describes a class of error the operation ended with.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'timeout',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'event.id': {
    brief: 'The unique identifier for this event (log record)',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 1234567890,
    changelog: [{ version: '0.1.0', prs: [101] }],
  },
  'event.name': {
    brief: 'The name that uniquely identifies this event (log record)',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'Process Payload',
    changelog: [{ version: '0.1.0', prs: [101, 127] }],
  },
  'exception.escaped': {
    brief:
      'SHOULD be set to true if the exception event is recorded at a point where it is known that the exception is escaping the scope of the span.',
    type: 'boolean',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: true,
    changelog: [{ version: '0.0.0' }],
  },
  'exception.message': {
    brief: 'The error message.',
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'ENOENT: no such file or directory',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'exception.stacktrace': {
    brief:
      'A stacktrace as a string in the natural representation for the language runtime. The representation is to be determined and documented by each language SIG.',
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: true,
    visibility: 'public',
    example:
      'Exception in thread "main" java.lang.RuntimeException: Test exception\n at com.example.GenerateTrace.methodB(GenerateTrace.java:13)\n at com.example.GenerateTrace.methodA(GenerateTrace.java:9)\n at com.example.GenerateTrace.main(GenerateTrace.java:5)',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'exception.type': {
    brief:
      'The type of the exception (its fully-qualified class name, if applicable). The dynamic type of the exception should be preferred over the static type in languages that support it.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'OSError',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'faas.coldstart': {
    brief: 'A boolean that is true if the serverless function is executed for the first time (aka cold-start).',
    type: 'boolean',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: true,
    changelog: [{ version: '0.0.0' }],
  },
  'faas.cron': {
    brief: 'A string containing the schedule period as Cron Expression.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: '0/5 * * * ? *',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'faas.duration_in_ms': {
    brief: 'The duration a function took to run, in milliseconds.',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 120,
    changelog: [{ version: '0.11.0', prs: [403] }],
  },
  'faas.entry_point': {
    brief: "The code that's run when the cloud provider invokes your function.",
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'my_main_function',
    changelog: [{ version: '0.11.0', prs: [403, 415] }],
  },
  'faas.identity': {
    brief:
      'The Service Account (GCP), IAM Execution Role (AWS), or Managed Identity (Azure) used by the serverless function when interacting with other cloud services',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example:
      'name@project.iam.gserviceaccount.com (GCP), arn:aws:iam::123456789012:role/role-name (AWS), 00000000-0000-0000-0000-000000000000 (Azure)',
    changelog: [{ version: '0.11.0', prs: [403] }],
  },
  'faas.invocation_id': {
    brief: 'The invocation ID of the current function invocation.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'af9d5aa4-a685-4c5f-a22b-444f80b3cc28',
    aliases: ['aws.lambda.aws_request_id'],
    changelog: [{ version: '0.11.1', prs: [414, 424] }],
  },
  'faas.name': {
    brief: 'The name of the serverless function',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'my_function',
    aliases: ['aws.lambda.function_name'],
    changelog: [{ version: '0.11.0', prs: [403, 415] }],
  },
  'faas.time': {
    brief: 'A string containing the function invocation time in the ISO 8601 format expressed in UTC.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: '2020-01-23T13:47:06Z',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'faas.trigger': {
    brief: 'Type of the trigger which caused this function invocation.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'timer',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'faas.version': {
    brief: 'The version of the function that was invoked',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: '$LATEST',
    aliases: ['aws.lambda.function_version'],
    changelog: [{ version: '0.11.1', prs: [414, 424] }],
  },
  fcp: {
    brief: 'The time it takes for the browser to render the first piece of meaningful content on the screen',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 547.6951,
    deprecation: {
      replacement: 'browser.web_vital.fcp.value',
      reason: 'This attribute is being deprecated in favor of browser.web_vital.fcp.value',
    },
    aliases: ['browser.web_vital.fcp.value'],
    changelog: [{ version: '0.5.0', prs: [235] }],
  },
  'flag.evaluation.<key>': {
    brief:
      'An instance of a feature flag evaluation. The value of this attribute is the boolean representing the evaluation result. The <key> suffix is the name of the feature flag.',
    type: 'boolean',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    hasDynamicSuffix: true,
    example: 'flag.evaluation.is_new_ui=true',
    changelog: [{ version: '0.1.0', prs: [103] }],
  },
  fp: {
    brief: 'The time it takes for the browser to render the first pixel on the screen',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 477.1926,
    deprecation: {
      replacement: 'browser.web_vital.fp.value',
      reason: 'This attribute is being deprecated in favor of browser.web_vital.fp.value',
    },
    aliases: ['browser.web_vital.fp.value'],
    changelog: [{ version: '0.5.0', prs: [235] }],
  },
  'frames.delay': {
    brief:
      'The sum of all delayed frame durations in seconds during the lifetime of the span. For more information see [frames delay](https://develop.sentry.dev/sdk/performance/frames-delay/).',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 5,
    deprecation: {
      replacement: 'app.vitals.frames.delay.value',
      reason:
        'Replaced by app.vitals.frames.delay.value to align with the app.vitals.* namespace for mobile performance attributes',
    },
    aliases: ['app.vitals.frames.delay.value'],
    changelog: [
      { version: '0.5.0', prs: [313], description: 'Deprecated in favor of app.vitals.frames.delay.value' },
      { version: '0.4.0', prs: [228] },
      { version: '0.0.0' },
    ],
  },
  'frames.frozen': {
    brief: 'The number of frozen frames rendered during the lifetime of the span.',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 3,
    deprecation: {
      replacement: 'app.vitals.frames.frozen.count',
      reason:
        'Replaced by app.vitals.frames.frozen.count to align with the app.vitals.* namespace for mobile performance attributes',
    },
    aliases: ['app.vitals.frames.frozen.count'],
    changelog: [
      { version: '0.5.0', prs: [313], description: 'Deprecated in favor of app.vitals.frames.frozen.count' },
      { version: '0.4.0', prs: [228] },
      { version: '0.0.0' },
    ],
  },
  frames_frozen_rate: {
    brief:
      'The rate of frozen frames, or `app_vitals.frames.frozen.count` divided by `app_vitals.frames.total.count`. This is computed by Relay.',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    changelog: [{ version: '0.7.0', prs: [362], description: 'Added frames_frozen_rate attribute' }],
  },
  'frames.slow': {
    brief: 'The number of slow frames rendered during the lifetime of the span.',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 1,
    deprecation: {
      replacement: 'app.vitals.frames.slow.count',
      reason:
        'Replaced by app.vitals.frames.slow.count to align with the app.vitals.* namespace for mobile performance attributes',
    },
    aliases: ['app.vitals.frames.slow.count'],
    changelog: [
      { version: '0.5.0', prs: [313], description: 'Deprecated in favor of app.vitals.frames.slow.count' },
      { version: '0.4.0', prs: [228] },
      { version: '0.0.0' },
    ],
  },
  frames_slow_rate: {
    brief:
      'The rate of slow frames, or `app_vitals.frames.slow.count` divided by `app_vitals.frames.total.count`. This is computed by Relay.',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    changelog: [{ version: '0.7.0', prs: [362], description: 'Added frames_slow_rate attribute' }],
  },
  'frames.total': {
    brief: 'The number of total frames rendered during the lifetime of the span.',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 60,
    deprecation: {
      replacement: 'app.vitals.frames.total.count',
      reason:
        'Replaced by app.vitals.frames.total.count to align with the app.vitals.* namespace for mobile performance attributes',
    },
    aliases: ['app.vitals.frames.total.count'],
    changelog: [
      { version: '0.5.0', prs: [313], description: 'Deprecated in favor of app.vitals.frames.total.count' },
      { version: '0.4.0', prs: [228] },
      { version: '0.0.0' },
    ],
  },
  fs_error: {
    brief: 'The error message of a file system error.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'ENOENT: no such file or directory',
    deprecation: {
      replacement: 'error.type',
      reason: 'This attribute is not part of the OpenTelemetry specification and error.type fits much better.',
    },
    changelog: [{ version: '0.1.0', prs: [61, 127] }, { version: '0.0.0' }],
  },
  'gcp.function.context.event_id': {
    brief: 'The event ID from the legacy GCP Cloud Function context (1st gen)',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: '1234567890',
    changelog: [{ version: '0.7.0', prs: [371], description: 'Added gcp.function.context.event_id attribute' }],
  },
  'gcp.function.context.event_type': {
    brief: 'The type of the GCP Cloud Function event',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'google.pubsub.topic.publish',
    changelog: [{ version: '0.7.0', prs: [371], description: 'Added gcp.function.context.event_type attribute' }],
  },
  'gcp.function.context.id': {
    brief: 'The unique event ID from the GCP CloudEvents context (2nd gen Cloud Functions)',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: '1234567890',
    changelog: [{ version: '0.7.0', prs: [371], description: 'Added gcp.function.context.id attribute' }],
  },
  'gcp.function.context.resource': {
    brief: 'The resource that triggered the GCP Cloud Function event',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'projects/my-project/topics/my-topic',
    changelog: [{ version: '0.7.0', prs: [371], description: 'Added gcp.function.context.resource attribute' }],
  },
  'gcp.function.context.source': {
    brief: 'The source of the GCP Cloud Function event',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: '//pubsub.googleapis.com/projects/my-project/topics/my-topic',
    changelog: [{ version: '0.7.0', prs: [371], description: 'Added gcp.function.context.source attribute' }],
  },
  'gcp.function.context.specversion': {
    brief: 'The CloudEvents specification version of the GCP Cloud Function event',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: '1.0',
    changelog: [{ version: '0.7.0', prs: [371], description: 'Added gcp.function.context.specversion attribute' }],
  },
  'gcp.function.context.time': {
    brief: 'The timestamp of the GCP Cloud Function event',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: '2024-01-01T00:00:00.000Z',
    changelog: [{ version: '0.7.0', prs: [371], description: 'Added gcp.function.context.time attribute' }],
  },
  'gcp.function.context.timestamp': {
    brief: 'The legacy timestamp of the GCP Cloud Function event',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: '2024-01-01T00:00:00.000Z',
    changelog: [{ version: '0.7.0', prs: [371], description: 'Added gcp.function.context.timestamp attribute' }],
  },
  'gcp.function.context.type': {
    brief: 'The type of the GCP Cloud Function event context',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'cloud_functions.context',
    changelog: [{ version: '0.7.0', prs: [371], description: 'Added gcp.function.context.type attribute' }],
  },
  'gcp.project.id': {
    brief: 'The ID of the project in GCP that this resource is associated with',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'my-project-123',
    changelog: [{ version: '0.11.0', prs: [403] }],
  },
  'gen_ai.agent.name': {
    brief: 'The name of the agent being used.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'ResearchAssistant',
    changelog: [{ version: '0.1.0', prs: [62, 127] }],
  },
  'gen_ai.context.utilization': {
    brief: 'The fraction of the model context window utilized by this generation.',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 0.75,
    changelog: [{ version: '0.5.0', prs: [315], description: 'Added gen_ai.context.utilization attribute' }],
  },
  'gen_ai.context.window_size': {
    brief: 'The maximum context window size supported by the model for this generation.',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 128000,
    changelog: [{ version: '0.5.0', prs: [315], description: 'Added gen_ai.context.window_size attribute' }],
  },
  'gen_ai.conversation.id': {
    brief:
      'The unique identifier for a conversation (session, thread), used to store and correlate messages within this conversation.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'conv_5j66UpCpwteGg4YSxUnt7lPY',
    changelog: [{ version: '0.4.0', prs: [250] }],
  },
  'gen_ai.cost.cache_creation.input_tokens': {
    brief: 'The cost of input tokens written to cache in USD.',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 12.34,
    changelog: [{ version: '0.16.0', description: 'Added gen_ai.cost.cache_creation.input_tokens attribute' }],
    additionalContext: [
      'This attribute appears on both agent parent spans (aggregated totals) and LLM child spans (per-call values). When using sum() to calculate total cost, filter to gen_ai.operation.type:ai_client to avoid double-counting hierarchical spans.',
      "Despite the name 'cost.cache_creation.input_tokens', this value is cost in USD, not a token count. For token counts, use gen_ai.usage.cache_creation.input_tokens.",
      'This is a subset of gen_ai.cost.input_tokens, not an independent cost. Do not sum this with gen_ai.cost.input_tokens — it is already included.',
    ],
  },
  'gen_ai.cost.cache_read.input_tokens': {
    brief: 'The cost of cached input tokens in USD.',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 12.34,
    changelog: [{ version: '0.16.0', description: 'Added gen_ai.cost.cache_read.input_tokens attribute' }],
    additionalContext: [
      'This attribute appears on both agent parent spans (aggregated totals) and LLM child spans (per-call values). When using sum() to calculate total cost, filter to gen_ai.operation.type:ai_client to avoid double-counting hierarchical spans.',
      "Despite the name 'cost.cache_read.input_tokens', this value is cost in USD, not a token count. For token counts, use gen_ai.usage.cache_read.input_tokens.",
      'This is a subset of gen_ai.cost.input_tokens, not an independent cost. Do not sum this with gen_ai.cost.input_tokens — it is already included.',
    ],
  },
  'gen_ai.cost.input_tokens': {
    brief: 'The total cost of all input tokens in USD (includes cached and cache creation tokens).',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 123.45,
    changelog: [
      { version: '0.9.0', prs: [397], description: 'Add additional_context' },
      { version: '0.4.0', prs: [228] },
      { version: '0.1.0', prs: [112] },
    ],
    additionalContext: [
      'This attribute appears on both agent parent spans (aggregated totals) and LLM child spans (per-call values). When using sum() to calculate total cost, filter to gen_ai.operation.type:ai_client to avoid double-counting hierarchical spans.',
      "Despite the name 'cost.input_tokens', this value is cost in USD, not a token count. For token counts, use gen_ai.usage.input_tokens.",
      'This is the total cost of all input tokens, including cached and cache creation tokens at their respective rates. For the cached portion, see gen_ai.cost.cache_read.input_tokens. For the cache creation portion, see gen_ai.cost.cache_creation.input_tokens.',
    ],
  },
  'gen_ai.cost.output_tokens': {
    brief: 'The total cost of all output tokens in USD (includes reasoning tokens).',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 123.45,
    changelog: [
      { version: '0.9.0', prs: [397], description: 'Add additional_context' },
      { version: '0.4.0', prs: [228] },
      { version: '0.1.0', prs: [112] },
    ],
    additionalContext: [
      'This attribute appears on both agent parent spans (aggregated totals) and LLM child spans (per-call values). When using sum() to calculate total cost, filter to gen_ai.operation.type:ai_client to avoid double-counting hierarchical spans.',
      "Despite the name 'cost.output_tokens', this value is cost in USD, not a token count. For token counts, use gen_ai.usage.output_tokens.",
      'This is the total cost of all output tokens, including reasoning tokens at their respective rate. For the reasoning portion, see gen_ai.cost.reasoning.output_tokens.',
    ],
  },
  'gen_ai.cost.reasoning.output_tokens': {
    brief: 'The cost of reasoning output tokens in USD.',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 12.34,
    changelog: [{ version: '0.16.0', description: 'Added gen_ai.cost.reasoning.output_tokens attribute' }],
    additionalContext: [
      'This attribute appears on both agent parent spans (aggregated totals) and LLM child spans (per-call values). When using sum() to calculate total cost, filter to gen_ai.operation.type:ai_client to avoid double-counting hierarchical spans.',
      "Despite the name 'cost.reasoning.output_tokens', this value is cost in USD, not a token count. For token counts, use gen_ai.usage.reasoning.output_tokens.",
      'This is a subset of gen_ai.cost.output_tokens, not an independent cost. Do not sum this with gen_ai.cost.output_tokens — it is already included.',
    ],
  },
  'gen_ai.cost.total_tokens': {
    brief: 'The total cost for the tokens used.',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 12.34,
    aliases: ['ai.total_cost'],
    changelog: [
      { version: '0.9.0', prs: [397], description: 'Add additional_context' },
      { version: '0.5.0', prs: [264] },
      { version: '0.4.0', prs: [228] },
      { version: '0.1.0', prs: [126] },
    ],
    additionalContext: [
      'This attribute appears on both agent parent spans (aggregated totals) and LLM child spans (per-call values). When using sum() to calculate total cost, filter to gen_ai.operation.type:ai_client to avoid double-counting hierarchical spans.',
      "Despite the name 'cost.total_tokens', this value is cost in USD, not a token count. For token counts, use gen_ai.usage.total_tokens.",
    ],
  },
  'gen_ai.embeddings.input': {
    brief: 'The input to the embeddings model.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: "What's the weather in Paris?",
    changelog: [{ version: '0.3.1', prs: [195] }],
  },
  'gen_ai.function_id': {
    brief:
      'Framework-specific tracing label for the execution of a function or other unit of execution in a generative AI system.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'my-awesome-function',
    changelog: [{ version: '0.5.0', prs: [308], description: 'Added gen_ai.function_id attribute' }],
  },
  'gen_ai.input.messages': {
    brief:
      'The messages passed to the model. It has to be a stringified version of an array of objects. The `role` attribute of each object must be `"user"`, `"assistant"`, `"tool"`, or `"system"`. For messages of the role `"tool"`, the `content` can be a string or an arbitrary object with information about the tool call. For other messages the `content` can be either a string or a list of objects in the format `{type: "text", text:"..."}`.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example:
      '[{"role": "user", "parts": [{"type": "text", "content": "Weather in Paris?"}]}, {"role": "assistant", "parts": [{"type": "tool_call", "id": "call_VSPygqKTWdrhaFErNvMV18Yl", "name": "get_weather", "arguments": {"location": "Paris"}}]}, {"role": "tool", "parts": [{"type": "tool_call_response", "id": "call_VSPygqKTWdrhaFErNvMV18Yl", "result": "rainy, 57°F"}]}]',
    aliases: ['ai.texts'],
    changelog: [
      { version: '0.5.0', prs: [264] },
      { version: '0.4.0', prs: [221] },
    ],
  },
  'gen_ai.operation.name': {
    brief:
      "The name of the operation being performed. It has the following list of well-known values: 'chat', 'create_agent', 'embeddings', 'execute_tool', 'generate_content', 'invoke_agent', 'text_completion'. If one of them applies, then that value MUST be used. Otherwise a custom value MAY be used.",
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'chat',
    changelog: [
      { version: '0.4.0', prs: [225] },
      { version: '0.1.0', prs: [62, 127] },
    ],
  },
  'gen_ai.operation.type': {
    brief:
      "The type of AI operation. Must be one of 'agent' (invoke_agent and create_agent spans), 'ai_client' (any LLM call), 'tool' (execute_tool spans), 'handoff' (handoff spans), 'other' (input and output processors, skill loading, guardrails etc.) . Added during ingestion based on span.op and gen_ai.operation.type. Used to filter and aggregate data in the UI",
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'tool',
    changelog: [
      { version: '0.4.0', prs: [257] },
      { version: '0.1.0', prs: [113, 127] },
    ],
  },
  'gen_ai.output.messages': {
    brief:
      "The model's response messages. It has to be a stringified version of an array of message objects, which can include text responses and tool calls.",
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example:
      '[{"role": "assistant", "parts": [{"type": "text", "content": "The weather in Paris is currently rainy with a temperature of 57°F."}], "finish_reason": "stop"}]',
    changelog: [{ version: '0.4.0', prs: [221] }],
  },
  'gen_ai.pipeline.name': {
    brief: 'Name of the AI pipeline or chain being executed.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'Autofix Pipeline',
    aliases: ['ai.pipeline.name'],
    changelog: [{ version: '0.1.0', prs: [76, 127] }],
  },
  'gen_ai.prompt': {
    brief: 'The input messages sent to the model',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: '[{"role": "user", "message": "hello"}]',
    deprecation: {
      reason: 'Deprecated from OTEL, use gen_ai.input.messages with the new format instead.',
    },
    changelog: [{ version: '0.1.0', prs: [74, 108, 119] }, { version: '0.0.0' }],
  },
  'gen_ai.prompt.name': {
    brief: 'The name of the prompt that uniquely identifies it.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
      reason: 'Prompt names may reveal user behavior patterns or sensitive operations',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'summarize_text',
    aliases: ['mcp.prompt.name'],
    changelog: [{ version: '0.12.0', prs: [420], description: 'Added gen_ai.prompt.name attribute' }],
  },
  'gen_ai.provider.name': {
    brief: 'The Generative AI provider as identified by the client or server instrumentation.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'openai',
    aliases: ['ai.model.provider', 'gen_ai.system'],
    changelog: [{ version: '0.4.0', prs: [253] }],
  },
  'gen_ai.request.available_tools': {
    brief: 'The available tools for the model. It has to be a stringified version of an array of objects.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example:
      '[{"name": "get_weather", "description": "Get the weather for a given location"}, {"name": "get_news", "description": "Get the news for a given topic"}]',
    deprecation: {
      replacement: 'gen_ai.tool.definitions',
    },
    changelog: [
      { version: '0.4.0', prs: [221] },
      { version: '0.1.0', prs: [63, 127] },
    ],
  },
  'gen_ai.request.frequency_penalty': {
    brief:
      'Used to reduce repetitiveness of generated tokens. The higher the value, the stronger a penalty is applied to previously present tokens, proportional to how many times they have already appeared in the prompt or prior generation.',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 0.5,
    aliases: ['ai.frequency_penalty'],
    changelog: [
      { version: '0.4.0', prs: [228] },
      { version: '0.1.0', prs: [57] },
    ],
  },
  'gen_ai.request.max_tokens': {
    brief: 'The maximum number of tokens to generate in the response.',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 2048,
    changelog: [
      { version: '0.4.0', prs: [228] },
      { version: '0.1.0', prs: [62] },
    ],
  },
  'gen_ai.request.messages': {
    brief:
      'The messages passed to the model. It has to be a stringified version of an array of objects. The `role` attribute of each object must be `"user"`, `"assistant"`, `"tool"`, or `"system"`. For messages of the role `"tool"`, the `content` can be a string or an arbitrary object with information about the tool call. For other messages the `content` can be either a string or a list of objects in the format `{type: "text", text:"..."}`.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example:
      '[{"role": "system", "content": "Generate a random number."}, {"role": "user", "content": [{"text": "Generate a random number between 0 and 10.", "type": "text"}]}, {"role": "tool", "content": {"toolCallId": "1", "toolName": "Weather", "output": "rainy"}}]',
    deprecation: {
      replacement: 'gen_ai.input.messages',
    },
    aliases: ['ai.input_messages'],
    changelog: [
      { version: '0.4.0', prs: [221] },
      { version: '0.1.0', prs: [63, 74, 108, 119, 122] },
    ],
  },
  'gen_ai.request.model': {
    brief: 'The model identifier being used for the request.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'gpt-4-turbo-preview',
    changelog: [{ version: '0.1.0', prs: [62, 127] }],
  },
  'gen_ai.request.presence_penalty': {
    brief:
      'Used to reduce repetitiveness of generated tokens. Similar to frequency_penalty, except that this penalty is applied equally to all tokens that have already appeared, regardless of their exact frequencies.',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 0.5,
    aliases: ['ai.presence_penalty'],
    changelog: [
      { version: '0.4.0', prs: [228] },
      { version: '0.1.0', prs: [57] },
    ],
  },
  'gen_ai.request.reasoning_effort': {
    brief: 'Constrains the effort on reasoning for reasoning models. Supported values vary by provider.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'high',
    changelog: [{ version: '0.13.0', prs: [334], description: 'Added gen_ai.request.reasoning_effort attribute' }],
  },
  'gen_ai.request.seed': {
    brief: 'The seed, ideally models given the same seed and same other parameters will produce the exact same output.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: '1234567890',
    aliases: ['ai.seed'],
    changelog: [{ version: '0.1.0', prs: [57, 127] }],
  },
  'gen_ai.request.temperature': {
    brief:
      'For an AI model call, the temperature parameter. Temperature essentially means how random the output will be.',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 0.1,
    aliases: ['ai.temperature'],
    changelog: [
      { version: '0.4.0', prs: [228] },
      { version: '0.1.0', prs: [57] },
    ],
  },
  'gen_ai.request.top_k': {
    brief:
      'Limits the model to only consider the K most likely next tokens, where K is an integer (e.g., top_k=20 means only the 20 highest probability tokens are considered).',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 35,
    aliases: ['ai.top_k'],
    changelog: [
      { version: '0.4.0', prs: [228] },
      { version: '0.1.0', prs: [57] },
    ],
  },
  'gen_ai.request.top_p': {
    brief:
      'Limits the model to only consider tokens whose cumulative probability mass adds up to p, where p is a float between 0 and 1 (e.g., top_p=0.7 means only tokens that sum up to 70% of the probability mass are considered).',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 0.7,
    aliases: ['ai.top_p'],
    changelog: [
      { version: '0.4.0', prs: [228] },
      { version: '0.1.0', prs: [57] },
    ],
  },
  'gen_ai.response.finish_reasons': {
    brief: 'The reason why the model stopped generating.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'COMPLETE',
    aliases: ['ai.finish_reason'],
    changelog: [{ version: '0.1.0', prs: [57, 127] }],
  },
  'gen_ai.response.id': {
    brief: 'Unique identifier for the completion.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'gen_123abc',
    aliases: ['ai.generation_id'],
    changelog: [{ version: '0.1.0', prs: [57, 127] }],
  },
  'gen_ai.response.model': {
    brief: 'The vendor-specific ID of the model used.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'gpt-4',
    aliases: ['ai.model_id'],
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'gen_ai.response.streaming': {
    brief: "Whether or not the AI model call's response was streamed back asynchronously",
    type: 'boolean',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: true,
    aliases: ['ai.streaming'],
    changelog: [{ version: '0.1.0', prs: [76] }],
  },
  'gen_ai.response.text': {
    brief:
      "The model's response text messages. It has to be a stringified version of an array of response text messages.",
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example:
      '["The weather in Paris is rainy and overcast, with temperatures around 57°F", "The weather in London is sunny and warm, with temperatures around 65°F"]',
    deprecation: {
      replacement: 'gen_ai.output.messages',
    },
    changelog: [
      { version: '0.4.0', prs: [221] },
      { version: '0.1.0', prs: [63, 74] },
    ],
  },
  'gen_ai.response.time_to_first_chunk': {
    brief: 'Time in seconds when the first response content chunk arrived in streaming responses.',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 0.6853435,
    aliases: ['gen_ai.response.time_to_first_token'],
    changelog: [{ version: '0.11.0', prs: [418], description: 'Added gen_ai.response.time_to_first_chunk attribute' }],
  },
  'gen_ai.response.time_to_first_token': {
    brief: 'Time in seconds when the first response content chunk arrived in streaming responses.',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 0.6853435,
    deprecation: {
      replacement: 'gen_ai.response.time_to_first_chunk',
    },
    aliases: ['gen_ai.response.time_to_first_chunk'],
    changelog: [
      { version: '0.11.0', prs: [418], description: 'Deprecate in favor of gen_ai.response.time_to_first_chunk' },
      { version: '0.4.0', prs: [227] },
    ],
  },
  'gen_ai.response.tokens_per_second': {
    brief: 'The total output tokens per seconds throughput',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 12345.67,
    changelog: [
      { version: '0.4.0', prs: [228] },
      { version: '0.1.0', prs: [66] },
    ],
  },
  'gen_ai.response.tool_calls': {
    brief: "The tool calls in the model's response. It has to be a stringified version of an array of objects.",
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: '[{"name": "get_weather", "arguments": {"location": "Paris"}}]',
    deprecation: {
      replacement: 'gen_ai.output.messages',
    },
    changelog: [
      { version: '0.4.0', prs: [221] },
      { version: '0.1.0', prs: [63, 74] },
    ],
  },
  'gen_ai.system': {
    brief: 'The provider of the model.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'openai',
    deprecation: {
      replacement: 'gen_ai.provider.name',
    },
    aliases: ['ai.model.provider', 'gen_ai.provider.name'],
    changelog: [
      { version: '0.4.0', prs: [253] },
      { version: '0.1.0', prs: [57, 127] },
    ],
  },
  'gen_ai.system_instructions': {
    brief: 'The system instructions passed to the model.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'You are a helpful assistant',
    aliases: ['ai.preamble'],
    changelog: [
      { version: '0.5.0', prs: [264] },
      { version: '0.4.0', prs: [221] },
    ],
  },
  'gen_ai.system.message': {
    brief: 'The system instructions passed to the model.',
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'You are a helpful assistant',
    deprecation: {
      replacement: 'gen_ai.system_instructions',
    },
    changelog: [
      { version: '0.4.0', prs: [221] },
      { version: '0.1.0', prs: [62] },
    ],
  },
  'gen_ai.tool.call.arguments': {
    brief: 'The arguments of the tool call. It has to be a stringified version of the arguments to the tool.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: '{"location": "Paris"}',
    aliases: ['gen_ai.tool.input'],
    changelog: [
      { version: '0.5.0', prs: [265] },
      { version: '0.4.0', prs: [221] },
    ],
  },
  'gen_ai.tool.call.result': {
    brief: 'The result of the tool call. It has to be a stringified version of the result of the tool.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'rainy, 57°F',
    aliases: ['gen_ai.tool.output', 'gen_ai.tool.message', 'mcp.tool.result.content'],
    changelog: [
      { version: '0.5.0', prs: [265] },
      { version: '0.4.0', prs: [221] },
    ],
  },
  'gen_ai.tool.definitions': {
    brief: 'The list of source system tool definitions available to the GenAI agent or model.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example:
      '[{"type": "function", "name": "get_current_weather", "description": "Get the current weather in a given location", "parameters": {"type": "object", "properties": {"location": {"type": "string", "description": "The city and state, e.g. San Francisco, CA"}, "unit": {"type": "string", "enum": ["celsius", "fahrenheit"]}}, "required": ["location", "unit"]}}]',
    changelog: [{ version: '0.4.0', prs: [221] }],
  },
  'gen_ai.tool.description': {
    brief: 'The description of the tool being used.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'Searches the web for current information about a topic',
    changelog: [{ version: '0.1.0', prs: [62, 127] }],
  },
  'gen_ai.tool.input': {
    brief: 'The input of the tool being used. It has to be a stringified version of the input to the tool.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: '{"location": "Paris"}',
    deprecation: {
      replacement: 'gen_ai.tool.call.arguments',
    },
    aliases: ['gen_ai.tool.call.arguments'],
    changelog: [
      { version: '0.5.0', prs: [265] },
      { version: '0.1.0', prs: [63, 74] },
    ],
  },
  'gen_ai.tool.message': {
    brief: 'The response from a tool or function call passed to the model.',
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'rainy, 57°F',
    deprecation: {
      replacement: 'gen_ai.tool.call.result',
    },
    aliases: ['gen_ai.tool.call.result', 'gen_ai.tool.output', 'mcp.tool.result.content'],
    changelog: [
      { version: '0.5.0', prs: [265] },
      { version: '0.1.0', prs: [62] },
    ],
  },
  'gen_ai.tool.name': {
    brief: 'Name of the tool utilized by the agent.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'Flights',
    aliases: ['ai.function_call', 'mcp.tool.name'],
    changelog: [{ version: '0.1.0', prs: [57, 127] }],
  },
  'gen_ai.tool.output': {
    brief: 'The output of the tool being used. It has to be a stringified version of the output of the tool.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'rainy, 57°F',
    deprecation: {
      replacement: 'gen_ai.tool.call.result',
    },
    aliases: ['gen_ai.tool.call.result', 'gen_ai.tool.message', 'mcp.tool.result.content'],
    changelog: [
      { version: '0.5.0', prs: [265] },
      { version: '0.1.0', prs: [63, 74] },
    ],
  },
  'gen_ai.tool.type': {
    brief: 'The type of tool being used.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'function',
    deprecation: {
      reason: 'The gen_ai.tool.type attribute is deprecated and should no longer be set.',
    },
    changelog: [{ version: '0.1.0', prs: [62, 127] }],
  },
  'gen_ai.usage.cache_creation.input_tokens': {
    brief: 'The number of tokens written to the cache when processing the AI input (prompt).',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 100,
    aliases: ['gen_ai.usage.input_tokens.cache_write'],
    changelog: [
      { version: '0.11.0', prs: [418], description: 'Added gen_ai.usage.cache_creation.input_tokens attribute' },
    ],
    additionalContext: [
      'This attribute appears on both agent parent spans (aggregated totals) and LLM child spans (per-call values). When using sum() to count tokens, filter to gen_ai.operation.type:ai_client to avoid double-counting hierarchical spans.',
    ],
  },
  'gen_ai.usage.cache_read.input_tokens': {
    brief: 'The number of cached tokens used to process the AI input (prompt).',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 50,
    aliases: ['gen_ai.usage.input_tokens.cached'],
    changelog: [{ version: '0.11.0', prs: [418], description: 'Added gen_ai.usage.cache_read.input_tokens attribute' }],
    additionalContext: [
      'This attribute appears on both agent parent spans (aggregated totals) and LLM child spans (per-call values). When using sum() to count tokens, filter to gen_ai.operation.type:ai_client to avoid double-counting hierarchical spans.',
      'This is a subset of gen_ai.usage.input_tokens, not an independent count. Do not sum this with gen_ai.usage.input_tokens — it is already included.',
    ],
  },
  'gen_ai.usage.completion_tokens': {
    brief: 'The number of tokens used in the GenAI response (completion).',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 10,
    deprecation: {
      replacement: 'gen_ai.usage.output_tokens',
    },
    aliases: ['ai.completion_tokens.used', 'gen_ai.usage.output_tokens'],
    changelog: [
      { version: '0.9.0', prs: [397], description: 'Add additional_context' },
      { version: '0.4.0', prs: [228] },
      { version: '0.1.0', prs: [61] },
      { version: '0.0.0' },
    ],
    additionalContext: [
      'This attribute appears on both agent parent spans (aggregated totals) and LLM child spans (per-call values). When using sum() to count tokens, filter to gen_ai.operation.type:ai_client to avoid double-counting hierarchical spans.',
    ],
  },
  'gen_ai.usage.input_tokens': {
    brief: 'The number of tokens used to process the AI input (prompt) including cached input tokens.',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 10,
    aliases: ['ai.prompt_tokens.used', 'gen_ai.usage.prompt_tokens'],
    changelog: [
      {
        version: '0.11.0',
        prs: [418],
        description: 'Update additional_context to reference gen_ai.usage.cache_read.input_tokens',
      },
      { version: '0.9.0', prs: [397], description: 'Add additional_context' },
      { version: '0.5.0', prs: [261] },
      { version: '0.4.0', prs: [228] },
      { version: '0.1.0', prs: [112] },
      { version: '0.0.0' },
    ],
    additionalContext: [
      'This attribute appears on both agent parent spans (aggregated totals) and LLM child spans (per-call values). When using sum() to count tokens, filter to gen_ai.operation.type:ai_client to avoid double-counting hierarchical spans.',
      'This count includes cached input tokens. gen_ai.usage.cache_read.input_tokens is a subset of this value, not an independent count — do not sum them together.',
    ],
  },
  'gen_ai.usage.input_tokens.cached': {
    brief: 'The number of cached tokens used to process the AI input (prompt).',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 50,
    deprecation: {
      replacement: 'gen_ai.usage.cache_read.input_tokens',
    },
    aliases: ['gen_ai.usage.cache_read.input_tokens'],
    changelog: [
      { version: '0.11.0', prs: [418], description: 'Deprecate in favor of gen_ai.usage.cache_read.input_tokens' },
      { version: '0.9.0', prs: [397], description: 'Add additional_context' },
      { version: '0.4.0', prs: [228] },
      { version: '0.1.0', prs: [62, 112] },
    ],
    additionalContext: [
      'This attribute appears on both agent parent spans (aggregated totals) and LLM child spans (per-call values). When using sum() to count tokens, filter to gen_ai.operation.type:ai_client to avoid double-counting hierarchical spans.',
      'This is a subset of gen_ai.usage.input_tokens, not an independent count. Do not sum this with gen_ai.usage.input_tokens — it is already included.',
    ],
  },
  'gen_ai.usage.input_tokens.cache_write': {
    brief: 'The number of tokens written to the cache when processing the AI input (prompt).',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 100,
    deprecation: {
      replacement: 'gen_ai.usage.cache_creation.input_tokens',
    },
    aliases: ['gen_ai.usage.cache_creation.input_tokens'],
    changelog: [
      { version: '0.11.0', prs: [418], description: 'Deprecate in favor of gen_ai.usage.cache_creation.input_tokens' },
      { version: '0.9.0', prs: [397], description: 'Add additional_context' },
      { version: '0.4.0', prs: [217, 228] },
    ],
    additionalContext: [
      'This attribute appears on both agent parent spans (aggregated totals) and LLM child spans (per-call values). When using sum() to count tokens, filter to gen_ai.operation.type:ai_client to avoid double-counting hierarchical spans.',
    ],
  },
  'gen_ai.usage.output_tokens': {
    brief: 'The number of tokens used for creating the AI output (including reasoning tokens).',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 10,
    aliases: ['ai.completion_tokens.used', 'gen_ai.usage.completion_tokens'],
    changelog: [
      {
        version: '0.11.0',
        prs: [418],
        description: 'Update additional_context to reference gen_ai.usage.reasoning.output_tokens',
      },
      { version: '0.9.0', prs: [397], description: 'Add additional_context' },
      { version: '0.5.0', prs: [261] },
      { version: '0.4.0', prs: [228] },
      { version: '0.1.0', prs: [112] },
      { version: '0.0.0' },
    ],
    additionalContext: [
      'This attribute appears on both agent parent spans (aggregated totals) and LLM child spans (per-call values). When using sum() to count tokens, filter to gen_ai.operation.type:ai_client to avoid double-counting hierarchical spans.',
      'This count includes reasoning tokens. gen_ai.usage.reasoning.output_tokens is a subset of this value, not an independent count — do not sum them together.',
    ],
  },
  'gen_ai.usage.output_tokens.reasoning': {
    brief: 'The number of tokens used for reasoning to create the AI output.',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 75,
    deprecation: {
      replacement: 'gen_ai.usage.reasoning.output_tokens',
    },
    aliases: ['gen_ai.usage.reasoning.output_tokens'],
    changelog: [
      { version: '0.11.0', prs: [418], description: 'Deprecate in favor of gen_ai.usage.reasoning.output_tokens' },
      { version: '0.9.0', prs: [397], description: 'Add additional_context' },
      { version: '0.4.0', prs: [228] },
      { version: '0.1.0', prs: [62, 112] },
    ],
    additionalContext: [
      'This attribute appears on both agent parent spans (aggregated totals) and LLM child spans (per-call values). When using sum() to count tokens, filter to gen_ai.operation.type:ai_client to avoid double-counting hierarchical spans.',
      'This is a subset of gen_ai.usage.output_tokens, not an independent count. Do not sum this with gen_ai.usage.output_tokens — it is already included.',
    ],
  },
  'gen_ai.usage.prompt_tokens': {
    brief: 'The number of tokens used in the GenAI input (prompt).',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 20,
    deprecation: {
      replacement: 'gen_ai.usage.input_tokens',
    },
    aliases: ['ai.prompt_tokens.used', 'gen_ai.usage.input_tokens'],
    changelog: [
      { version: '0.9.0', prs: [397], description: 'Add additional_context' },
      { version: '0.4.0', prs: [228] },
      { version: '0.1.0', prs: [61] },
      { version: '0.0.0' },
    ],
    additionalContext: [
      'This attribute appears on both agent parent spans (aggregated totals) and LLM child spans (per-call values). When using sum() to count tokens, filter to gen_ai.operation.type:ai_client to avoid double-counting hierarchical spans.',
    ],
  },
  'gen_ai.usage.reasoning.output_tokens': {
    brief: 'The number of tokens used for reasoning to create the AI output.',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 75,
    aliases: ['gen_ai.usage.output_tokens.reasoning'],
    changelog: [{ version: '0.11.0', prs: [418], description: 'Added gen_ai.usage.reasoning.output_tokens attribute' }],
    additionalContext: [
      'This attribute appears on both agent parent spans (aggregated totals) and LLM child spans (per-call values). When using sum() to count tokens, filter to gen_ai.operation.type:ai_client to avoid double-counting hierarchical spans.',
      'This is a subset of gen_ai.usage.output_tokens, not an independent count. Do not sum this with gen_ai.usage.output_tokens — it is already included.',
    ],
  },
  'gen_ai.usage.total_tokens': {
    brief: 'The total number of tokens used to process the prompt. (input tokens plus output todkens)',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 20,
    aliases: ['ai.total_tokens.used'],
    changelog: [
      { version: '0.9.0', prs: [397], description: 'Add additional_context' },
      { version: '0.4.0', prs: [228] },
      { version: '0.1.0', prs: [57] },
    ],
    additionalContext: [
      'This attribute appears on both agent parent spans (aggregated totals) and LLM child spans (per-call values). When using sum() to count tokens, filter to gen_ai.operation.type:ai_client to avoid double-counting hierarchical spans.',
      'This is the sum of gen_ai.usage.input_tokens and gen_ai.usage.output_tokens. Do not sum this with either of them — they are already included.',
    ],
  },
  'graphql.document': {
    brief: 'The GraphQL document being executed.',
    type: 'string',
    applyScrubbing: {
      key: 'auto',
      reason:
        'The document may contain sensitive information in arguments or variables. Instrumentation should redact sensitive information when possible.',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'query findBookById { bookById(id: ?) { name } }',
    changelog: [
      {
        version: '0.7.0',
        description: 'Adds the `graphql.document` attribute to track the GraphQL document being executed.',
      },
    ],
  },
  'graphql.operation.name': {
    brief: 'The name of the operation being executed.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'findBookById',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'graphql.operation.type': {
    brief: 'The type of the operation being executed.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'query',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  hardwareConcurrency: {
    brief: 'The number of logical CPU cores available.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: '14',
    deprecation: {
      replacement: 'device.processor_count',
      reason: 'Old namespace-less attribute, to be replaced with device.processor_count for span-first future',
    },
    aliases: ['device.processor_count'],
    changelog: [
      {
        version: '0.5.0',
        prs: [281, 300],
        description: "Added and deprecated attribute to document JS SDK's current behaviour",
      },
    ],
  },
  'http.client_ip': {
    brief:
      'Client address - domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.',
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'example.com',
    deprecation: {
      replacement: 'client.address',
    },
    aliases: ['client.address'],
    changelog: [{ version: '0.1.0', prs: [61, 106, 127] }, { version: '0.0.0' }],
  },
  'http.decoded_response_content_length': {
    brief: 'The decoded body size of the response (in bytes).',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 456,
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.0.0' }],
  },
  'http.flavor': {
    brief: 'The actual version of the protocol used for network communication.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: '1.1',
    deprecation: {
      replacement: 'network.protocol.version',
    },
    aliases: ['network.protocol.version', 'net.protocol.version'],
    changelog: [{ version: '0.1.0', prs: [61, 108, 127] }, { version: '0.0.0' }],
  },
  'http.fragment': {
    brief:
      'The fragments present in the URI. Note that this contains the leading # character, while the `url.fragment` attribute does not.',
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    example: '#details',
    changelog: [{ version: '0.0.0' }],
  },
  'http.host': {
    brief: 'The domain name.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'example.com',
    deprecation: {
      replacement: 'server.address',
      reason: 'Deprecated, use one of `server.address` or `client.address`, depending on the usage',
    },
    aliases: ['server.address', 'client.address', 'http.server_name', 'net.host.name'],
    changelog: [{ version: '0.1.0', prs: [61, 108, 127] }, { version: '0.0.0' }],
  },
  'http.method': {
    brief: 'The HTTP method used.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'GET',
    deprecation: {
      replacement: 'http.request.method',
    },
    aliases: ['http.request.method', 'http.request_method', 'method'],
    changelog: [{ version: '0.1.0', prs: [61, 127] }, { version: '0.0.0' }],
  },
  'http.query': {
    brief:
      'The query string present in the URL. Note that this contains the leading ? character, while the `url.query` attribute does not.',
    type: 'string',
    applyScrubbing: {
      key: 'auto',
      reason:
        'Query string values can contain sensitive information. Clients should attempt to scrub parameters that might contain sensitive information.',
    },
    isInOtel: false,
    visibility: 'public',
    example: '?foo=bar&bar=baz',
    changelog: [{ version: '0.0.0' }],
  },
  'http.request.body.data': {
    brief: 'HTTP request body data. Can be given as string or structural data of any format.',
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    example: '[{"role": "user", "message": "hello"}]',
    changelog: [{ version: '0.6.0', prs: [336], description: 'Added http.request.body.data attribute' }],
  },
  'http.request.connection_end': {
    brief:
      'The UNIX timestamp representing the time immediately after the browser finishes establishing the connection to the server to retrieve the resource. The timestamp value includes the time interval to establish the transport connection, as well as other time intervals such as TLS handshake and SOCKS authentication.',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 1732829555.15,
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.1.0', prs: [134] }, { version: '0.0.0' }],
  },
  'http.request.connect_start': {
    brief:
      'The UNIX timestamp representing the time immediately before the user agent starts establishing the connection to the server to retrieve the resource.',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 1732829555.111,
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.1.0', prs: [134] }, { version: '0.0.0' }],
  },
  'http.request.domain_lookup_end': {
    brief:
      'The UNIX timestamp representing the time immediately after the browser finishes the domain-name lookup for the resource.',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 1732829555.201,
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.1.0', prs: [134] }, { version: '0.0.0' }],
  },
  'http.request.domain_lookup_start': {
    brief:
      'The UNIX timestamp representing the time immediately before the browser starts the domain name lookup for the resource.',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 1732829555.322,
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.1.0', prs: [134] }, { version: '0.0.0' }],
  },
  'http.request.fetch_start': {
    brief: 'The UNIX timestamp representing the time immediately before the browser starts to fetch the resource.',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 1732829555.389,
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.1.0', prs: [134] }, { version: '0.0.0' }],
  },
  'http.request.header.<key>': {
    brief:
      'HTTP request headers, <key> being the normalized HTTP Header name (lowercase), the value being the header values.',
    type: 'string[]',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: true,
    visibility: 'public',
    hasDynamicSuffix: true,
    example: "http.request.header.custom-header=['foo', 'bar']",
    changelog: [
      { version: '0.4.0', prs: [201, 204] },
      { version: '0.1.0', prs: [103] },
    ],
  },
  'http.request.method': {
    brief: 'The HTTP method used.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'GET',
    aliases: ['method', 'http.method', 'http.request_method'],
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'http.request_method': {
    brief: 'The HTTP method used.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'GET',
    deprecation: {
      replacement: 'http.request.method',
    },
    aliases: ['method', 'http.method', 'http.request.method'],
    changelog: [{ version: '0.6.0', prs: [343], description: 'Added http.request_method attribute' }],
  },
  'http.request.redirect_end': {
    brief:
      'The UNIX timestamp representing the timestamp immediately after receiving the last byte of the response of the last redirect',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 1732829558.502,
    changelog: [
      { version: '0.4.0', prs: [228] },
      { version: '0.1.0', prs: [130, 134] },
    ],
  },
  'http.request.redirect_start': {
    brief: 'The UNIX timestamp representing the start time of the fetch which that initiates the redirect.',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 1732829555.495,
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.1.0', prs: [134] }, { version: '0.0.0' }],
  },
  'http.request.request_start': {
    brief:
      'The UNIX timestamp representing the time immediately before the browser starts requesting the resource from the server, cache, or local resource. If the transport connection fails and the browser retires the request, the value returned will be the start of the retry request.',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 1732829555.51,
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.1.0', prs: [134] }, { version: '0.0.0' }],
  },
  'http.request.resend_count': {
    brief: 'The ordinal number of request resending attempt (for any reason, including redirects).',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 2,
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.0.0' }],
  },
  'http.request.response_end': {
    brief:
      'The UNIX timestamp representing the time immediately after the browser receives the last byte of the resource or immediately before the transport connection is closed, whichever comes first.',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 1732829555.89,
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.1.0', prs: [134] }, { version: '0.0.0' }],
  },
  'http.request.response_start': {
    brief:
      'The UNIX timestamp representing the time immediately before the browser starts requesting the resource from the server, cache, or local resource. If the transport connection fails and the browser retires the request, the value returned will be the start of the retry request.',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 1732829555.7,
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.1.0', prs: [134] }, { version: '0.0.0' }],
  },
  'http.request.same_origin': {
    brief: "Indicates that a URL has the same origin as the current page's origin in the browser.",
    type: 'boolean',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: true,
    aliases: ['url.same_origin'],
    changelog: [{ version: 'next', prs: [456], description: 'Added http.request.same_origin attribute' }],
  },
  'http.request.secure_connection_start': {
    brief:
      'The UNIX timestamp representing the time immediately before the browser starts the handshake process to secure the current connection. If a secure connection is not used, the property returns zero.',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 1732829555.73,
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.1.0', prs: [134] }, { version: '0.0.0' }],
  },
  'http.request.time_to_first_byte': {
    brief:
      "The time in seconds from the browser's timeorigin to when the first byte of the request's response was received. See https://web.dev/articles/ttfb#measure-resource-requests",
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 1.032,
    changelog: [
      { version: '0.4.0', prs: [228] },
      { version: '0.1.0', prs: [131] },
    ],
  },
  'http.request.worker_start': {
    brief:
      'The UNIX timestamp representing the timestamp immediately before dispatching the FetchEvent if a Service Worker thread is already running, or immediately before starting the Service Worker thread if it is not already running.',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 1732829553.68,
    changelog: [
      { version: '0.4.0', prs: [228] },
      { version: '0.1.0', prs: [130, 134] },
    ],
  },
  'http.response.body.size': {
    brief: 'The encoded body size of the response (in bytes).',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 123,
    aliases: ['http.response_content_length', 'http.response.header.content-length'],
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.1.0', prs: [106] }, { version: '0.0.0' }],
  },
  'http.response_content_length': {
    brief: 'The encoded body size of the response (in bytes).',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 123,
    deprecation: {
      replacement: 'http.response.body.size',
    },
    aliases: ['http.response.body.size', 'http.response.header.content-length'],
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.1.0', prs: [61, 106] }, { version: '0.0.0' }],
  },
  'http.response.header.content-length': {
    brief: 'The size of the message body sent to the recipient (in bytes)',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: "http.response.header.custom-header=['foo', 'bar']",
    aliases: ['http.response_content_length', 'http.response.body.size'],
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'http.response.header.<key>': {
    brief:
      'HTTP response headers, <key> being the normalized HTTP Header name (lowercase), the value being the header values.',
    type: 'string[]',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: true,
    visibility: 'public',
    hasDynamicSuffix: true,
    example: "http.response.header.custom-header=['foo', 'bar']",
    changelog: [
      { version: '0.4.0', prs: [201, 204] },
      { version: '0.1.0', prs: [103] },
    ],
  },
  'http.response.size': {
    brief: 'The transfer size of the response (in bytes).',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 456,
    aliases: ['http.response_transfer_size'],
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.0.0' }],
  },
  'http.response.status_code': {
    brief: 'The status code of the HTTP response.',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 404,
    aliases: ['http.status_code'],
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.0.0' }],
  },
  'http.response_transfer_size': {
    brief: 'The transfer size of the response (in bytes).',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 456,
    deprecation: {
      replacement: 'http.response.size',
    },
    aliases: ['http.response.size'],
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.1.0', prs: [61] }, { version: '0.0.0' }],
  },
  'http.route': {
    brief: 'The matched route, that is, the path template in the format used by the respective server framework.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: '/users/:id',
    aliases: ['url.template'],
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'http.scheme': {
    brief: 'The URI scheme component identifying the used protocol.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'https',
    deprecation: {
      replacement: 'url.scheme',
    },
    aliases: ['url.scheme'],
    changelog: [{ version: '0.1.0', prs: [61, 127] }, { version: '0.0.0' }],
  },
  'http.server_name': {
    brief: 'The server domain name',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'example.com',
    deprecation: {
      replacement: 'server.address',
    },
    aliases: ['server.address', 'net.host.name', 'http.host'],
    changelog: [{ version: '0.1.0', prs: [61, 108, 127] }, { version: '0.0.0' }],
  },
  'http.server.request.time_in_queue': {
    brief:
      'The time in milliseconds the request spent in the server queue before processing began. Measured from the X-Request-Start header set by reverse proxies (e.g., Nginx, HAProxy, Heroku) to when the application started handling the request.',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 50,
    changelog: [{ version: '0.5.0', prs: [267] }],
  },
  'http.status_code': {
    brief: 'The status code of the HTTP response.',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 404,
    deprecation: {
      replacement: 'http.response.status_code',
    },
    aliases: ['http.response.status_code'],
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.1.0', prs: [61] }, { version: '0.0.0' }],
  },
  'http.target': {
    brief: 'The pathname and query string of the URL.',
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: true,
    visibility: 'public',
    example: '/test?foo=bar#buzz',
    deprecation: {
      replacement: 'url.path',
      reason: 'This attribute is being deprecated in favor of url.path and url.query',
    },
    changelog: [{ version: '0.1.0', prs: [61] }, { version: '0.0.0' }],
  },
  'http.url': {
    brief: 'The URL of the resource that was fetched.',
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'https://example.com/test?foo=bar#buzz',
    deprecation: {
      replacement: 'url.full',
    },
    aliases: ['url.full', 'url'],
    changelog: [{ version: '0.1.0', prs: [61, 108] }, { version: '0.0.0' }],
  },
  'http.user_agent': {
    brief: 'Value of the HTTP User-Agent header sent by the client.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Mobile/15E148 Safari/604.1',
    deprecation: {
      replacement: 'user_agent.original',
    },
    aliases: ['user_agent.original'],
    changelog: [{ version: '0.1.0', prs: [61, 127] }, { version: '0.0.0' }],
  },
  id: {
    brief: 'A unique identifier for the span.',
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'f47ac10b58cc4372a5670e02b2c3d479',
    changelog: [{ version: '0.0.0' }],
  },
  inp: {
    brief: 'The value of the recorded Interaction to Next Paint (INP) web vital',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 200,
    deprecation: {
      replacement: 'browser.web_vital.inp.value',
      reason: 'The INP web vital is now recorded as a browser.web_vital.inp.value attribute.',
    },
    aliases: ['browser.web_vital.inp.value'],
    changelog: [
      {
        version: '0.5.0',
        prs: [229],
        description: "Added and deprecated attribute to document JS SDK's current behaviour",
      },
    ],
  },
  'jsonrpc.protocol.version': {
    brief: 'The version of the JSON-RPC protocol used.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: '2.0',
    changelog: [{ version: '0.12.0', prs: [420], description: 'Added jsonrpc.protocol.version attribute' }],
  },
  'jsonrpc.request.id': {
    brief: 'The JSON-RPC request identifier. Unique within the session.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: '1',
    aliases: ['mcp.request.id'],
    changelog: [{ version: '0.12.0', prs: [420], description: 'Added jsonrpc.request.id attribute' }],
  },
  'jvm.gc.action': {
    brief: 'Name of the garbage collector action.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'end of minor GC',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'jvm.gc.name': {
    brief: 'Name of the garbage collector.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'G1 Young Generation',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'jvm.memory.pool.name': {
    brief: 'Name of the memory pool.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'G1 Old Gen',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'jvm.memory.type': {
    brief: 'Name of the memory pool.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'G1 Old Gen',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'jvm.thread.daemon': {
    brief: 'Whether the thread is daemon or not.',
    type: 'boolean',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: true,
    changelog: [{ version: '0.0.0' }],
  },
  'jvm.thread.state': {
    brief: 'State of the thread.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'blocked',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  lcp: {
    brief: 'The value of the recorded Largest Contentful Paint (LCP) web vital',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 2500,
    deprecation: {
      replacement: 'browser.web_vital.lcp.value',
      reason: 'The LCP web vital is now recorded as a browser.web_vital.lcp.value attribute.',
    },
    aliases: ['browser.web_vital.lcp.value'],
    changelog: [
      {
        version: '0.5.0',
        prs: [229],
        description: "Added and deprecated attribute to document JS SDK's current behaviour",
      },
    ],
  },
  'lcp.element': {
    brief: 'The dom element responsible for the largest contentful paint.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'img',
    deprecation: {
      replacement: 'browser.web_vital.lcp.element',
      reason: 'The LCP element is now recorded as a browser.web_vital.lcp.element attribute.',
    },
    aliases: ['browser.web_vital.lcp.element'],
    changelog: [{ version: '0.5.0', prs: [233] }, { version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'lcp.id': {
    brief: 'The id of the dom element responsible for the largest contentful paint.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: '#hero',
    deprecation: {
      replacement: 'browser.web_vital.lcp.id',
      reason: 'The LCP id is now recorded as a browser.web_vital.lcp.id attribute.',
    },
    aliases: ['browser.web_vital.lcp.id'],
    changelog: [{ version: '0.5.0', prs: [233] }, { version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'lcp.loadTime': {
    brief: 'The time it took for the LCP element to be loaded',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 1402,
    deprecation: {
      replacement: 'browser.web_vital.lcp.load_time',
      reason: 'The LCP load time is now recorded as a browser.web_vital.lcp.load_time attribute.',
    },
    aliases: ['browser.web_vital.lcp.load_time'],
    changelog: [{ version: '0.5.0', prs: [233] }],
  },
  'lcp.renderTime': {
    brief: 'The time it took for the LCP element to be rendered',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 1685,
    deprecation: {
      replacement: 'browser.web_vital.lcp.render_time',
      reason: 'The LCP render time is now recorded as a browser.web_vital.lcp.render_time attribute.',
    },
    aliases: ['browser.web_vital.lcp.render_time'],
    changelog: [{ version: '0.5.0', prs: [233] }],
  },
  'lcp.size': {
    brief: 'The size of the largest contentful paint element.',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 1234,
    deprecation: {
      replacement: 'browser.web_vital.lcp.size',
      reason: 'The LCP size is now recorded as a browser.web_vital.lcp.size attribute.',
    },
    aliases: ['browser.web_vital.lcp.size'],
    changelog: [{ version: '0.5.0', prs: [233] }, { version: '0.4.0', prs: [228] }, { version: '0.0.0' }],
  },
  'lcp.url': {
    brief: 'The url of the dom element responsible for the largest contentful paint.',
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'https://example.com',
    deprecation: {
      replacement: 'browser.web_vital.lcp.url',
      reason: 'The LCP url is now recorded as a browser.web_vital.lcp.url attribute.',
    },
    aliases: ['browser.web_vital.lcp.url'],
    changelog: [{ version: '0.5.0', prs: [233] }, { version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'logger.name': {
    brief: 'The name of the logger that generated this event.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'myLogger',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'mcp.cancelled.reason': {
    brief: 'Reason for the cancellation of an MCP operation.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
      reason: 'Cancellation reasons may contain user-specific or sensitive information',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'User cancelled the request',
    changelog: [{ version: '0.3.0', prs: [171] }],
  },
  'mcp.cancelled.request_id': {
    brief: 'Request ID of the cancelled MCP operation.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: '123',
    changelog: [{ version: '0.3.0', prs: [171] }],
  },
  'mcp.client.name': {
    brief: 'Name of the MCP client application.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'claude-desktop',
    changelog: [{ version: '0.3.0', prs: [171] }],
  },
  'mcp.client.title': {
    brief: 'Display title of the MCP client application.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
      reason: 'Client titles may reveal user-specific application configurations or custom setups',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'Claude Desktop',
    changelog: [{ version: '0.3.0', prs: [171] }],
  },
  'mcp.client.version': {
    brief: 'Version of the MCP client application.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: '1.0.0',
    changelog: [{ version: '0.3.0', prs: [171] }],
  },
  'mcp.lifecycle.phase': {
    brief: 'Lifecycle phase indicator for MCP operations.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'initialization_complete',
    changelog: [{ version: '0.3.0', prs: [171] }],
  },
  'mcp.logging.data_type': {
    brief: 'Data type of the logged message content.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'string',
    changelog: [{ version: '0.3.0', prs: [171] }],
  },
  'mcp.logging.level': {
    brief: 'Log level for MCP logging operations.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'info',
    changelog: [{ version: '0.3.0', prs: [171] }],
  },
  'mcp.logging.logger': {
    brief: 'Logger name for MCP logging operations.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
      reason: 'Logger names may be user-defined and could contain sensitive information',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'mcp_server',
    changelog: [{ version: '0.3.0', prs: [171] }],
  },
  'mcp.logging.message': {
    brief: 'Log message content from MCP logging operations.',
    type: 'string',
    applyScrubbing: {
      key: 'auto',
      reason: 'Log messages can contain user data',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'Tool execution completed successfully',
    changelog: [{ version: '0.3.0', prs: [171] }],
  },
  'mcp.method.name': {
    brief: 'The name of the MCP request or notification method being called.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'tools/call',
    changelog: [
      { version: '0.12.0', prs: [420], description: 'Set is_in_otel=true, attribute exists in OTel MCP registry' },
      { version: '0.3.0', prs: [171] },
    ],
  },
  'mcp.progress.current': {
    brief: 'Current progress value of an MCP operation.',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 50,
    changelog: [
      { version: '0.4.0', prs: [228] },
      { version: '0.3.0', prs: [171] },
    ],
  },
  'mcp.progress.message': {
    brief: 'Progress message describing the current state of an MCP operation.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
      reason: 'Progress messages may contain user-specific or sensitive information',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'Processing 50 of 100 items',
    changelog: [{ version: '0.3.0', prs: [171] }],
  },
  'mcp.progress.percentage': {
    brief: 'Calculated progress percentage of an MCP operation. Computed from current/total * 100.',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 50,
    changelog: [
      { version: '0.4.0', prs: [228] },
      { version: '0.3.0', prs: [171] },
    ],
  },
  'mcp.progress.token': {
    brief: 'Token for tracking progress of an MCP operation.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'progress-token-123',
    changelog: [{ version: '0.3.0', prs: [171] }],
  },
  'mcp.progress.total': {
    brief: 'Total progress target value of an MCP operation.',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 100,
    changelog: [
      { version: '0.4.0', prs: [228] },
      { version: '0.3.0', prs: [171] },
    ],
  },
  'mcp.prompt.name': {
    brief: 'Name of the MCP prompt template being used.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
      reason: 'Prompt names may reveal user behavior patterns or sensitive operations',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'summarize',
    deprecation: {
      replacement: 'gen_ai.prompt.name',
      reason: 'OTel uses gen_ai.prompt.name for MCP prompt names',
    },
    aliases: ['gen_ai.prompt.name'],
    changelog: [
      { version: '0.12.0', prs: [420], description: 'Deprecated in favor of gen_ai.prompt.name' },
      { version: '0.3.0', prs: [171] },
    ],
  },
  'mcp.prompt.result.description': {
    brief: 'Description of the prompt result.',
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'A summary of the requested information',
    changelog: [{ version: '0.3.0', prs: [171] }],
  },
  'mcp.prompt.result.message_content': {
    brief: 'Content of the message in the prompt result. Used for single message results only.',
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'Please provide a summary of the document',
    changelog: [{ version: '0.3.0', prs: [171] }],
  },
  'mcp.prompt.result.message_count': {
    brief: 'Number of messages in the prompt result.',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 3,
    changelog: [
      { version: '0.4.0', prs: [228] },
      { version: '0.3.0', prs: [171] },
    ],
  },
  'mcp.prompt.result.message_role': {
    brief: 'Role of the message in the prompt result. Used for single message results only.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'user',
    changelog: [{ version: '0.3.0', prs: [171] }],
  },
  'mcp.protocol.ready': {
    brief: 'Protocol readiness indicator for MCP session. Non-zero value indicates the protocol is ready.',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 1,
    changelog: [
      { version: '0.4.0', prs: [228] },
      { version: '0.3.0', prs: [171] },
    ],
  },
  'mcp.protocol.version': {
    brief: 'MCP protocol version used in the session.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: '2024-11-05',
    changelog: [
      { version: '0.12.0', prs: [420], description: 'Set is_in_otel=true, attribute exists in OTel MCP registry' },
      { version: '0.3.0', prs: [171] },
    ],
  },
  'mcp.request.argument.<key>': {
    brief:
      'MCP request argument with dynamic key suffix. The <key> is replaced with the actual argument name. The value is a JSON-stringified representation of the argument value.',
    type: 'string',
    applyScrubbing: {
      key: 'auto',
      reason: 'Arguments contain user input',
    },
    isInOtel: false,
    visibility: 'public',
    hasDynamicSuffix: true,
    example: "mcp.request.argument.query='weather in Paris'",
    changelog: [{ version: '0.3.0', prs: [176] }],
  },
  'mcp.request.argument.name': {
    brief: 'Name argument from prompts/get MCP request.',
    type: 'string',
    applyScrubbing: {
      key: 'auto',
      reason: 'Prompt names can contain user input',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'summarize',
    changelog: [{ version: '0.3.0', prs: [171] }],
  },
  'mcp.request.argument.uri': {
    brief: 'URI argument from resources/read MCP request.',
    type: 'string',
    applyScrubbing: {
      key: 'auto',
      reason: 'URIs can contain user file paths',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'file:///path/to/resource',
    changelog: [{ version: '0.3.0', prs: [171] }],
  },
  'mcp.request.id': {
    brief: 'JSON-RPC request identifier for the MCP request. Unique within the MCP session.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: '1',
    deprecation: {
      replacement: 'jsonrpc.request.id',
      reason: 'OTel models MCP as JSON-RPC, uses jsonrpc.request.id',
    },
    aliases: ['jsonrpc.request.id'],
    changelog: [
      { version: '0.12.0', prs: [420], description: 'Deprecated in favor of jsonrpc.request.id' },
      { version: '0.3.0', prs: [171] },
    ],
  },
  'mcp.resource.protocol': {
    brief: 'Protocol of the resource URI being accessed, extracted from the URI.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'file',
    deprecation: {
      replacement: 'network.protocol.name',
      reason: 'OTel uses the generic network.protocol.name attribute',
    },
    aliases: ['network.protocol.name', 'net.protocol.name'],
    changelog: [
      { version: '0.12.0', prs: [420], description: 'Deprecated in favor of network.protocol.name' },
      { version: '0.3.0', prs: [171] },
    ],
  },
  'mcp.resource.uri': {
    brief: 'The resource URI being accessed in an MCP operation.',
    type: 'string',
    applyScrubbing: {
      key: 'auto',
      reason: 'URIs can contain sensitive file paths',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'file:///path/to/file.txt',
    changelog: [
      { version: '0.12.0', prs: [420], description: 'Set is_in_otel=true, attribute exists in OTel MCP registry' },
      { version: '0.3.0', prs: [171] },
    ],
  },
  'mcp.server.name': {
    brief: 'Name of the MCP server application.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'sentry-mcp-server',
    changelog: [{ version: '0.3.0', prs: [171] }],
  },
  'mcp.server.title': {
    brief: 'Display title of the MCP server application.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
      reason: 'Server titles may reveal user-specific application configurations or custom setups',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'Sentry MCP Server',
    changelog: [{ version: '0.3.0', prs: [171] }],
  },
  'mcp.server.version': {
    brief: 'Version of the MCP server application.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: '0.1.0',
    changelog: [{ version: '0.3.0', prs: [171] }],
  },
  'mcp.session.id': {
    brief: 'Identifier for the MCP session.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: '550e8400-e29b-41d4-a716-446655440000',
    changelog: [
      { version: '0.12.0', prs: [420], description: 'Set is_in_otel=true, attribute exists in OTel MCP registry' },
      { version: '0.3.0', prs: [171] },
    ],
  },
  'mcp.tool.name': {
    brief: 'Name of the MCP tool being called.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'calculator',
    deprecation: {
      replacement: 'gen_ai.tool.name',
      reason: 'OTel uses gen_ai.tool.name for MCP tool names',
    },
    aliases: ['gen_ai.tool.name', 'ai.function_call'],
    changelog: [
      { version: '0.12.0', prs: [420], description: 'Deprecated in favor of gen_ai.tool.name' },
      { version: '0.3.0', prs: [171] },
    ],
  },
  'mcp.tool.result.content': {
    brief: 'The content of the tool result.',
    type: 'string',
    applyScrubbing: {
      key: 'auto',
      reason: 'Tool results can contain user data',
    },
    isInOtel: false,
    visibility: 'public',
    example: '{"output": "rainy", "toolCallId": "1"}',
    deprecation: {
      replacement: 'gen_ai.tool.call.result',
      reason: 'OTel uses gen_ai.tool.call.result for MCP tool results',
    },
    aliases: ['gen_ai.tool.call.result', 'gen_ai.tool.message', 'gen_ai.tool.output'],
    changelog: [
      { version: '0.12.0', prs: [420], description: 'Deprecated in favor of gen_ai.tool.call.result' },
      { version: '0.3.0', prs: [171] },
      { version: '0.2.0', prs: [164] },
    ],
  },
  'mcp.tool.result.content_count': {
    brief: 'Number of content items in the tool result.',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 1,
    changelog: [
      { version: '0.4.0', prs: [228] },
      { version: '0.3.0', prs: [171] },
    ],
  },
  'mcp.tool.result.is_error': {
    brief: 'Whether a tool execution resulted in an error.',
    type: 'boolean',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: false,
    deprecation: {
      replacement: 'error.type',
      reason:
        "OTel uses error.type set to 'tool_error' when isError is true. Cannot be automatically backfilled due to type mismatch (boolean vs string).",
    },
    changelog: [
      { version: '0.12.0', prs: [420], description: 'Deprecated in favor of error.type' },
      { version: '0.3.0', prs: [171] },
    ],
  },
  'mcp.transport': {
    brief: 'Transport method used for MCP communication.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'stdio',
    deprecation: {
      replacement: 'network.transport',
      reason: 'OTel uses the generic network.transport attribute',
    },
    aliases: ['network.transport', 'net.transport'],
    changelog: [
      { version: '0.12.0', prs: [420], description: 'Deprecated in favor of network.transport' },
      { version: '0.3.0', prs: [171] },
    ],
  },
  'mdc.<key>': {
    brief:
      "Attributes from the Mapped Diagnostic Context (MDC) present at the moment the log record was created. The MDC is supported by all the most popular logging solutions in the Java ecosystem, and it's usually implemented as a thread-local map that stores context for e.g. a specific request.",
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    hasDynamicSuffix: true,
    example: "mdc.some_key='some_value'",
    changelog: [{ version: '0.3.0', prs: [176] }],
  },
  'messaging.batch.message_count': {
    brief: 'The number of messages sent, received, or processed in the scope of the batching operation.',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 10,
    changelog: [{ version: '0.6.0', prs: [341], description: 'Added messaging.batch.message_count attribute' }],
  },
  'messaging.destination.connection': {
    brief: 'The message destination connection.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'BestTopic',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'messaging.destination.name': {
    brief: 'The message destination name.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'BestTopic',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'messaging.message.body.size': {
    brief: 'The size of the message body in bytes.',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 839,
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.0.0' }],
  },
  'messaging.message.conversation_id': {
    brief:
      'The conversation ID identifying the conversation to which the message belongs, represented as a string. Sometimes called "Correlation ID".',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'MyConversationId',
    changelog: [{ version: 'next', prs: [468], description: 'Added messaging.message.conversation_id attribute' }],
  },
  'messaging.message.envelope.size': {
    brief: 'The size of the message body and metadata in bytes.',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 1045,
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.0.0' }],
  },
  'messaging.message.id': {
    brief: 'A value used by the messaging system as an identifier for the message, represented as a string.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'f47ac10b58cc4372a5670e02b2c3d479',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'messaging.message.receive.latency': {
    brief: 'The latency between when the message was published and received.',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 1732847252,
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.0.0' }],
  },
  'messaging.message.retry.count': {
    brief: 'The amount of attempts to send the message.',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 2,
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.0.0' }],
  },
  'messaging.operation.name': {
    brief: 'The name of the messaging operation being performed',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'send',
    changelog: [{ version: '0.11.0', prs: [392], description: 'Added messaging.operation.name attribute' }],
  },
  'messaging.operation.type': {
    brief: 'A string identifying the type of the messaging operation',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'create',
    changelog: [{ version: '0.1.0', prs: [51, 127] }],
  },
  'messaging.rabbitmq.destination.routing_key': {
    brief: 'RabbitMQ message routing key.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'myKey',
    changelog: [
      { version: 'next', prs: [468], description: 'Added messaging.rabbitmq.destination.routing_key attribute' },
    ],
  },
  'messaging.system': {
    brief: 'The messaging system as identified by the client instrumentation.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'activemq',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  method: {
    brief: 'The HTTP method used.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'GET',
    deprecation: {
      replacement: 'http.request.method',
    },
    aliases: ['http.request.method', 'http.request_method', 'http.method'],
    changelog: [{ version: '0.1.0', prs: [61, 127] }, { version: '0.0.0' }],
  },
  'middleware.name': {
    brief: 'The name of the middleware.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'AuthenticationMiddleware',
    changelog: [{ version: '0.6.0', prs: [336], description: 'Added middleware.name attribute' }],
  },
  'navigation.type': {
    brief: 'The type of navigation done by a client-side router.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'router.push',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'nel.elapsed_time': {
    brief:
      'The elapsed number of milliseconds between the start of the resource fetch and when it was completed or aborted by the user agent.',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 100,
    changelog: [
      { version: '0.4.0', prs: [228] },
      { version: '0.1.0', prs: [68] },
    ],
  },
  'nel.phase': {
    brief: 'If request failed, the phase of its network error. If request succeeded, "application".',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'application',
    changelog: [{ version: '0.1.0', prs: [68, 127] }],
  },
  'nel.referrer': {
    brief: "request's referrer, as determined by the referrer policy associated with its client.",
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'https://example.com/foo?bar=baz',
    changelog: [{ version: '0.1.0', prs: [68, 127] }],
  },
  'nel.sampling_function': {
    brief: 'The sampling function used to determine if the request should be sampled.',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 0.5,
    changelog: [
      { version: '0.4.0', prs: [228] },
      { version: '0.1.0', prs: [68] },
    ],
  },
  'nel.type': {
    brief: 'If request failed, the type of its network error. If request succeeded, "ok".',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'dns.unreachable',
    changelog: [{ version: '0.1.0', prs: [68, 127] }],
  },
  'network.connection.effective_type': {
    brief: 'Specifies the effective type of the current connection (e.g. slow-2g, 2g, 3g, 4g).',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: '4g',
    aliases: ['effectiveConnectionType'],
    changelog: [
      {
        version: '0.5.0',
        prs: [279],
        description: 'Added attribute network.connection.effective_type to be used instead of effectiveConnectionType',
      },
    ],
  },
  'network.connection.rtt': {
    brief: 'Specifies the estimated effective round-trip time of the current connection, in milliseconds.',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 100,
    aliases: ['connection.rtt'],
    changelog: [
      {
        version: '0.5.0',
        prs: [279],
        description: 'Added attribute network.connection.rtt to be used instead of connection.rtt',
      },
    ],
  },
  'network.connection.type': {
    brief: 'Specifies the type of the current connection (e.g. wifi, ethernet, cellular , etc).',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'wifi',
    aliases: ['device.connection_type', 'connectionType'],
    changelog: [
      {
        version: '0.5.0',
        prs: [279],
        description: 'Added attribute network.connection.type to be used instead of connectionType',
      },
    ],
  },
  'network.local.address': {
    brief: 'Local address of the network connection - IP address or Unix domain socket name.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: '10.1.2.80',
    aliases: ['net.host.ip', 'net.sock.host.addr'],
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'network.local.port': {
    brief: 'Local port number of the network connection.',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 65400,
    aliases: ['net.sock.host.port'],
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.0.0' }],
  },
  'network.peer.address': {
    brief: 'Peer address of the network connection - IP address or Unix domain socket name.',
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: true,
    visibility: 'public',
    example: '10.1.2.80',
    aliases: ['net.peer.ip', 'net.sock.peer.addr'],
    changelog: [{ version: '0.1.0', prs: [108, 127] }, { version: '0.0.0' }],
  },
  'network.peer.port': {
    brief: 'Peer port number of the network connection.',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 65400,
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.0.0' }],
  },
  'network.protocol.name': {
    brief: 'OSI application layer or non-OSI equivalent.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'http',
    aliases: ['net.protocol.name', 'mcp.resource.protocol'],
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'network.protocol.version': {
    brief: 'The actual version of the protocol used for network communication.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: '1.1',
    aliases: ['http.flavor', 'net.protocol.version'],
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'network.transport': {
    brief: 'OSI transport layer or inter-process communication method.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'tcp',
    aliases: ['net.transport', 'mcp.transport'],
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'network.type': {
    brief: 'OSI network layer or non-OSI equivalent.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'ipv4',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'net.host.ip': {
    brief: 'Local address of the network connection - IP address or Unix domain socket name.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: '192.168.0.1',
    deprecation: {
      replacement: 'network.local.address',
    },
    aliases: ['network.local.address', 'net.sock.host.addr'],
    changelog: [{ version: '0.1.0', prs: [61, 108, 127] }, { version: '0.0.0' }],
  },
  'net.host.name': {
    brief:
      'Server domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'example.com',
    deprecation: {
      replacement: 'server.address',
    },
    aliases: ['server.address', 'http.server_name', 'http.host'],
    changelog: [{ version: '0.1.0', prs: [61, 108, 127] }, { version: '0.0.0' }],
  },
  'net.host.port': {
    brief: 'Server port number.',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 1337,
    deprecation: {
      replacement: 'server.port',
    },
    aliases: ['server.port'],
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.1.0', prs: [61] }, { version: '0.0.0' }],
  },
  'net.peer.ip': {
    brief: 'Peer address of the network connection - IP address or Unix domain socket name.',
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: true,
    visibility: 'public',
    example: '192.168.0.1',
    deprecation: {
      replacement: 'network.peer.address',
    },
    aliases: ['network.peer.address', 'net.sock.peer.addr'],
    changelog: [{ version: '0.1.0', prs: [61, 108, 127] }, { version: '0.0.0' }],
  },
  'net.peer.name': {
    brief:
      'Server domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.',
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'example.com',
    deprecation: {
      replacement: 'server.address',
      reason: 'Deprecated, use server.address on client spans and client.address on server spans.',
    },
    changelog: [{ version: '0.1.0', prs: [61, 127] }, { version: '0.0.0' }],
  },
  'net.peer.port': {
    brief: 'Peer port number.',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 1337,
    deprecation: {
      replacement: 'server.port',
      reason: 'Deprecated, use server.port on client spans and client.port on server spans.',
    },
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.1.0', prs: [61] }, { version: '0.0.0' }],
  },
  'net.protocol.name': {
    brief: 'OSI application layer or non-OSI equivalent.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'http',
    deprecation: {
      replacement: 'network.protocol.name',
    },
    aliases: ['network.protocol.name', 'mcp.resource.protocol'],
    changelog: [{ version: '0.1.0', prs: [61, 127] }, { version: '0.0.0' }],
  },
  'net.protocol.version': {
    brief: 'The actual version of the protocol used for network communication.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: '1.1',
    deprecation: {
      replacement: 'network.protocol.version',
    },
    aliases: ['network.protocol.version', 'http.flavor'],
    changelog: [{ version: '0.1.0', prs: [61, 108, 127] }, { version: '0.0.0' }],
  },
  'net.sock.family': {
    brief: 'OSI transport and network layer',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'inet',
    deprecation: {
      replacement: 'network.transport',
      reason: 'Deprecated, use network.transport and network.type.',
    },
    changelog: [{ version: '0.1.0', prs: [61, 127] }, { version: '0.0.0' }],
  },
  'net.sock.host.addr': {
    brief: 'Local address of the network connection mapping to Unix domain socket name.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: '/var/my.sock',
    deprecation: {
      replacement: 'network.local.address',
    },
    aliases: ['network.local.address', 'net.host.ip'],
    changelog: [{ version: '0.1.0', prs: [61, 108, 127] }, { version: '0.0.0' }],
  },
  'net.sock.host.port': {
    brief: 'Local port number of the network connection.',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 8080,
    deprecation: {
      replacement: 'network.local.port',
    },
    aliases: ['network.local.port'],
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.1.0', prs: [61] }, { version: '0.0.0' }],
  },
  'net.sock.peer.addr': {
    brief: 'Peer address of the network connection - IP address',
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: true,
    visibility: 'public',
    example: '192.168.0.1',
    deprecation: {
      replacement: 'network.peer.address',
    },
    aliases: ['network.peer.address', 'net.peer.ip'],
    changelog: [{ version: '0.1.0', prs: [61, 108, 127] }, { version: '0.0.0' }],
  },
  'net.sock.peer.name': {
    brief: 'Peer address of the network connection - Unix domain socket name',
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: true,
    visibility: 'public',
    example: '/var/my.sock',
    deprecation: {
      reason: 'Deprecated from OTEL, no replacement at this time',
    },
    changelog: [{ version: '0.1.0', prs: [61, 119, 127] }, { version: '0.0.0' }],
  },
  'net.sock.peer.port': {
    brief: 'Peer port number of the network connection.',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 8080,
    deprecation: {
      replacement: 'network.peer.port',
    },
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.1.0', prs: [61] }, { version: '0.0.0' }],
  },
  'net.transport': {
    brief: 'OSI transport layer or inter-process communication method.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'tcp',
    deprecation: {
      replacement: 'network.transport',
    },
    aliases: ['network.transport', 'mcp.transport'],
    changelog: [{ version: '0.1.0', prs: [61, 127] }, { version: '0.0.0' }],
  },
  'os.build': {
    brief: 'The build ID of the operating system.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: '1234567890',
    deprecation: {
      replacement: 'os.build_id',
    },
    aliases: ['os.build_id'],
    changelog: [
      { version: '0.5.0', prs: [301], description: 'Added os.build attribute, deprecated in favor of os.build_id' },
    ],
  },
  'os.build_id': {
    brief: 'The build ID of the operating system.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: '1234567890',
    aliases: ['os.build'],
    changelog: [
      { version: '0.5.0', prs: [301], description: 'Added os.build as alias' },
      { version: '0.1.0', prs: [127] },
      { version: '0.0.0' },
    ],
  },
  'os.description': {
    brief:
      'Human readable (not intended to be parsed) OS version information, like e.g. reported by ver or lsb_release -a commands.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'Ubuntu 18.04.1 LTS',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'os.kernel_version': {
    brief: 'An independent kernel version string. Typically the entire output of the `uname` syscall.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: '20.2.0',
    changelog: [{ version: '0.5.0', prs: [301], description: 'Added os.kernel_version attribute' }],
  },
  'os.name': {
    brief: 'Human readable operating system name.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'Ubuntu',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'os.raw_description': {
    brief:
      'An unprocessed description string obtained by the operating system. For some well-known runtimes, Sentry will attempt to parse `name` and `version` from this string, if they are not explicitly given.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'Ubuntu 22.04.4 LTS (Jammy Jellyfish)',
    changelog: [{ version: '0.5.0', prs: [301], description: 'Added os.raw_description attribute' }],
  },
  'os.rooted': {
    brief: 'Whether the operating system has been jailbroken or rooted.',
    type: 'boolean',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: true,
    changelog: [{ version: '0.5.0', prs: [301], description: 'Added os.rooted attribute' }],
  },
  'os.theme': {
    brief: 'Whether the OS runs in dark mode or light mode.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'dark',
    changelog: [{ version: '0.5.0', prs: [301], description: 'Added os.theme attribute' }],
  },
  'os.type': {
    brief: 'The operating system type.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'linux',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'os.version': {
    brief: 'The version of the operating system.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: '18.04.2',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'otel.kind': {
    brief:
      'The span kind (https://opentelemetry.io/docs/concepts/signals/traces/#span-kind). Deprecated, use `sentry.kind` instead.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'SERVER',
    deprecation: {
      replacement: 'sentry.kind',
      reason: 'Deprecated in favor of sentry.kind',
    },
    aliases: ['sentry.kind'],
    changelog: [{ version: '0.13.0', prs: [440], description: 'Added otel.kind attribute' }],
  },
  'otel.scope.name': {
    brief: 'The name of the instrumentation scope - (InstrumentationScope.Name in OTLP).',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'io.opentelemetry.contrib.mongodb',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'otel.scope.version': {
    brief: 'The version of the instrumentation scope - (InstrumentationScope.Version in OTLP).',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: '2.4.5',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'otel.status_code': {
    brief: 'Name of the code, either “OK” or “ERROR”. MUST NOT be set if the status code is UNSET.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'OK',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'otel.status_description': {
    brief: 'Description of the Status if it has a value, otherwise not set.',
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'resource not found',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'params.<key>': {
    brief:
      'Decoded parameters extracted from a URL path. Usually added by client-side routing frameworks like vue-router.',
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    hasDynamicSuffix: true,
    example: "params.id='123'",
    aliases: ['url.path.parameter.<key>'],
    changelog: [{ version: '0.1.0', prs: [103] }],
  },
  'performance.activationStart': {
    brief: 'The time between initiating a navigation to a page and the browser activating the page',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 1.983,
    deprecation: {
      replacement: 'browser.performance.navigation.activation_start',
      reason: 'The activationStart is now recorded as the browser.performance.navigation.activation_start attribute.',
    },
    aliases: ['browser.performance.navigation.activation_start'],
    changelog: [{ version: '0.5.0', prs: [321], description: 'Added performance.activationStart attribute' }],
  },
  'performance.timeOrigin': {
    brief: "The browser's performance.timeOrigin timestamp representing the time when the pageload was initiated",
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 1776185678.886,
    deprecation: {
      replacement: 'browser.performance.time_origin',
      reason: 'The timeOrigin is now recorded as the browser.performance.time_origin attribute.',
    },
    aliases: ['browser.performance.time_origin'],
    changelog: [{ version: '0.5.0', prs: [321], description: 'Added performance.timeOrigin attribute' }],
  },
  previous_route: {
    brief: 'Also used by mobile SDKs to indicate the previous route in the application.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'HomeScreen',
    changelog: [{ version: '0.1.0', prs: [74] }, { version: '0.0.0' }],
  },
  'process.command_args': {
    brief: 'All the command arguments (including the command/executable itself) as received by the process.',
    type: 'string[]',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: true,
    visibility: 'public',
    example: ['cmd/otecol', '--config=config.yaml'],
    changelog: [{ version: '0.6.0', prs: [327], description: 'Added process.command_args attribute' }],
  },
  'process.executable.name': {
    brief: 'The name of the executable that started the process.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'getsentry',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'process.pid': {
    brief: 'The process ID of the running process.',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 12345,
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.0.0' }],
  },
  'process.runtime.description': {
    brief:
      'An additional description about the runtime of the process, for example a specific vendor customization of the runtime environment. Equivalent to `raw_description` in the Sentry runtime context.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'Eclipse OpenJ9 VM openj9-0.21.0',
    aliases: ['runtime.raw_description'],
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'process.runtime.engine.name': {
    brief: 'The name of the runtime engine.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'v8',
    changelog: [{ version: '0.0.0' }],
  },
  'process.runtime.engine.version': {
    brief: 'The version of the runtime engine.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: '12.9.202.13-rusty',
    changelog: [{ version: '0.0.0' }],
  },
  'process.runtime.name': {
    brief: 'The name of the runtime. Equivalent to `name` in the Sentry runtime context.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'node',
    aliases: ['runtime.name'],
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'process.runtime.version': {
    brief:
      'The version of the runtime of this process, as returned by the runtime without modification. Equivalent to `version` in the Sentry runtime context.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: '18.04.2',
    aliases: ['runtime.version'],
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'query.<key>': {
    brief: 'An item in a query string. Usually added by client-side routing frameworks like vue-router.',
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    hasDynamicSuffix: true,
    example: "query.id='123'",
    deprecation: {
      replacement: 'url.query',
      reason: 'Instead of sending items individually in query.<key>, they should be sent all together with url.query.',
    },
    changelog: [{ version: '0.1.0', prs: [103] }],
  },
  'react.version': {
    brief: 'The version of the React framework',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: '18.2.0',
    changelog: [{ version: '0.7.0', prs: [368], description: 'Added react.version attribute' }],
  },
  release: {
    brief: 'The sentry release.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'production',
    deprecation: {
      replacement: 'sentry.release',
    },
    aliases: ['sentry.release'],
    changelog: [{ version: '0.1.0', prs: [61, 127] }, { version: '0.0.0' }],
  },
  'remix.action_form_data.<key>': {
    brief: 'Remix form data, <key> being the form data key, the value being the form data value.',
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    hasDynamicSuffix: true,
    example: "http.response.header.text='test'",
    changelog: [{ version: '0.1.0', prs: [103] }],
  },
  replay_id: {
    brief: 'The id of the sentry replay.',
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
    example: '123e4567e89b12d3a456426614174000',
    deprecation: {
      replacement: 'sentry.replay_id',
    },
    aliases: ['sentry.replay_id'],
    changelog: [{ version: '0.1.0', prs: [61] }, { version: '0.0.0' }],
  },
  'resource.deployment.environment': {
    brief: 'The software deployment environment name.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'production',
    deprecation: {
      replacement: 'sentry.environment',
    },
    changelog: [{ version: '0.5.0', prs: [266] }],
  },
  'resource.deployment.environment.name': {
    brief: 'The software deployment environment name.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'production',
    deprecation: {
      replacement: 'sentry.environment',
    },
    changelog: [{ version: '0.3.1', prs: [196] }],
  },
  'resource.render_blocking_status': {
    brief: 'The render blocking status of the resource.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'non-blocking',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  route: {
    brief:
      'The matched route, that is, the path template in the format used by the respective server framework. Also used by mobile SDKs to indicate the current route in the application.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'App\\Controller::indexAction',
    deprecation: {
      replacement: 'http.route',
    },
    aliases: ['http.route'],
    changelog: [{ version: '0.1.0', prs: [61, 74] }, { version: '0.0.0' }],
  },
  'rpc.grpc.status_code': {
    brief: 'The numeric status code of the gRPC request.',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 2,
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.0.0' }],
  },
  'rpc.method': {
    brief: 'The fully-qualified logical name of the method from the RPC interface perspective.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'com.example.ExampleService/exampleMethod',
    changelog: [{ version: '0.7.0', prs: [351], description: 'Added rpc.method attribute' }],
  },
  'rpc.response.status_code': {
    brief: 'Status code of the RPC returned by the RPC server or generated by the client.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'DEADLINE_EXCEEDED',
    changelog: [{ version: '0.7.0', prs: [352], description: 'Added rpc.response.status_code attribute' }],
  },
  'rpc.service': {
    brief: 'The full (logical) name of the service being called, including its package name, if applicable.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'myService.BestService',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'runtime.build': {
    brief: 'The application build string, when it is separate from the version.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'stable',
    deprecation: {
      reason:
        'The runtime.* namespace is deprecated in favor of process.runtime.*. No direct OTel equivalent exists for this attribute.',
    },
    changelog: [{ version: '0.11.0', prs: [383], description: 'Added and deprecated runtime.build attribute' }],
  },
  'runtime.name': {
    brief: 'The name of the runtime. For example node, CPython, or rustc.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'node',
    deprecation: {
      replacement: 'process.runtime.name',
      reason: 'Prefer OTel-aligned process.runtime.name',
    },
    aliases: ['process.runtime.name'],
    changelog: [
      {
        version: '0.11.0',
        prs: [383],
        description: 'Added and deprecated runtime.name attribute in favor of process.runtime.name',
      },
    ],
  },
  'runtime.raw_description': {
    brief:
      'Unprocessed description string as obtained from the runtime. Used to extract name and version for well-known runtimes.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'Eclipse OpenJ9 VM openj9-0.21.0',
    deprecation: {
      replacement: 'process.runtime.description',
      reason: 'Prefer OTel-aligned process.runtime.description',
    },
    aliases: ['process.runtime.description'],
    changelog: [
      {
        version: '0.11.0',
        prs: [383],
        description: 'Added and deprecated runtime.raw_description attribute in favor of process.runtime.description',
      },
    ],
  },
  'runtime.version': {
    brief: 'The version of the runtime.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: '18.04.2',
    deprecation: {
      replacement: 'process.runtime.version',
      reason: 'Prefer OTel-aligned process.runtime.version',
    },
    aliases: ['process.runtime.version'],
    changelog: [
      {
        version: '0.11.0',
        prs: [383],
        description: 'Added and deprecated runtime.version attribute in favor of process.runtime.version',
      },
    ],
  },
  'score.<key>': {
    brief:
      'The weighted performance score for a web vital. This is defined as `score.weight.<key>` * `score.ratio.<key>`.',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    hasDynamicSuffix: true,
    example: 'score.cls=0.1723',
    changelog: [{ version: '0.7.0', prs: [355], description: 'Added score.<key> attribute' }],
  },
  'score.ratio.<key>': {
    brief: 'The score for a web vital, normalized to a number between 0 and 1.',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    hasDynamicSuffix: true,
    example: 'score.ratio.inp=0.7748',
    changelog: [{ version: '0.7.0', prs: [355], description: 'Added score.ratio.<key> attribute' }],
  },
  'score.total': {
    brief:
      'The total performance score of a span. This is the sum of individual weighted web vital scores (see `score.<key>`).',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    changelog: [{ version: '0.7.0', prs: [355], description: 'Added score.total attribute' }],
  },
  'score.weight.<key>': {
    brief: "The relative weight of a web vital in a span's performance score.",
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    hasDynamicSuffix: true,
    example: 'score.weight.fcp=0.25',
    changelog: [{ version: '0.7.0', prs: [355], description: 'Added score.weight.<key> attribute' }],
  },
  'sentry.action': {
    brief:
      'Used as a generic attribute representing the action depending on the type of span. For instance, this is the database query operation for DB spans, and the request method for HTTP spans.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'SELECT',
    changelog: [{ version: '0.4.0', prs: [212] }],
  },
  'sentry.browser.name': {
    brief: 'The name of the browser.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'Chrome',
    deprecation: {
      replacement: 'browser.name',
    },
    aliases: ['browser.name'],
    changelog: [{ version: '0.1.0', prs: [139] }],
  },
  'sentry.browser.version': {
    brief: 'The version of the browser.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: '120.0.6099.130',
    deprecation: {
      replacement: 'browser.version',
    },
    aliases: ['browser.version'],
    changelog: [{ version: '0.1.0', prs: [139] }],
  },
  'sentry.cancellation_reason': {
    brief: 'The reason why a span ended early.',
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'document.hidden',
    changelog: [{ version: '0.0.0' }],
  },
  'sentry.category': {
    brief:
      "The high-level category of a span, derived from the span operation or span attributes. This categorizes spans by their general purpose (e.g., database, HTTP, UI). Known values include: 'ai', 'ai.pipeline', 'app', 'browser', 'cache', 'console', 'db', 'event', 'file', 'function.aws', 'function.azure', 'function.gcp', 'function.nextjs', 'function.remix', 'graphql', 'grpc', 'http', 'measure', 'middleware', 'navigation', 'pageload', 'queue', 'resource', 'rpc', 'serialize', 'subprocess', 'template', 'topic', 'ui', 'ui.angular', 'ui.ember', 'ui.react', 'ui.svelte', 'ui.vue', 'view', 'websocket'.",
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'db',
    changelog: [{ version: '0.4.0', prs: [218] }],
  },
  'sentry.client_sample_rate': {
    brief: 'Rate at which a span was sampled in the SDK.',
    type: 'double',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
    example: 0.5,
    changelog: [{ version: '0.1.0', prs: [102] }],
  },
  'sentry.description': {
    brief: 'The human-readable description of a span.',
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'index view query',
    changelog: [{ version: '0.1.0', prs: [135] }],
  },
  'sentry.dist': {
    brief: 'The sentry dist.',
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
    example: '1.0',
    changelog: [{ version: '0.0.0' }],
  },
  'sentry.domain': {
    brief:
      'Used as a generic attribute representing the domain depending on the type of span. For instance, this is the collection/table name for database spans, and the server address for HTTP spans.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'example.com',
    changelog: [{ version: '0.4.0', prs: [212] }],
  },
  'sentry.dsc.environment': {
    brief: 'The environment from the dynamic sampling context.',
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'internal',
    example: 'prod',
    changelog: [{ version: '0.3.0', prs: [185] }],
  },
  'sentry.dsc.project_id': {
    brief:
      'The ID of the project where the trace originated (i.e. the project of the SDK that started the trace). Propagated through the dynamic sampling context and set by Relay during ingestion.',
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'internal',
    example: '12345',
    changelog: [{ version: '0.7.0', prs: [358], description: 'Add sentry.dsc.project_id as an attribute' }],
  },
  'sentry.dsc.public_key': {
    brief: 'The public key from the dynamic sampling context.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'internal',
    example: 'c51734c603c4430eb57cb0a5728a479d',
    changelog: [{ version: '0.3.0', prs: [185] }],
  },
  'sentry.dsc.release': {
    brief: 'The release identifier from the dynamic sampling context.',
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'internal',
    example: 'frontend@e8211be71b214afab5b85de4b4c54be3714952bb',
    changelog: [{ version: '0.3.0', prs: [185] }],
  },
  'sentry.dsc.sampled': {
    brief: 'Whether the event was sampled according to the dynamic sampling context.',
    type: 'boolean',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'internal',
    example: true,
    changelog: [{ version: '0.3.0', prs: [185] }],
  },
  'sentry.dsc.sample_rate': {
    brief: 'The sample rate from the dynamic sampling context.',
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'internal',
    example: '1.0',
    changelog: [{ version: '0.3.0', prs: [185] }],
  },
  'sentry.dsc.trace_id': {
    brief: 'The trace ID from the dynamic sampling context.',
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'internal',
    example: '047372980460430cbc78d9779df33a46',
    changelog: [{ version: '0.3.0', prs: [185] }],
  },
  'sentry.dsc.transaction': {
    brief: 'The transaction name from the dynamic sampling context.',
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'internal',
    example: '/issues/errors-outages/',
    changelog: [{ version: '0.3.0', prs: [185] }],
  },
  'sentry.environment': {
    brief: 'The sentry environment.',
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'production',
    aliases: ['environment'],
    changelog: [{ version: '0.0.0' }],
  },
  'sentry.exclusive_time': {
    brief: 'The exclusive time duration of the span in milliseconds.',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 1234,
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.3.0', prs: [160] }, { version: '0.0.0' }],
  },
  'sentry.graphql.operation': {
    brief: 'Indicates the type of graphql operation, emitted by the Javascript SDK.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'getUserById',
    changelog: [{ version: '0.3.1', prs: [190] }],
  },
  'sentry.group': {
    brief:
      'Stores the hash of `sentry.normalized_description`. This is primarily used for grouping spans in the product end.',
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
    changelog: [{ version: '0.4.0', prs: [212] }],
  },
  'sentry.http.prefetch': {
    brief: 'If an http request was a prefetch request.',
    type: 'boolean',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
    example: true,
    changelog: [{ version: '0.0.0' }],
  },
  'sentry.idle_span_finish_reason': {
    brief: 'The reason why an idle span ended early.',
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'idleTimeout',
    changelog: [{ version: '0.0.0' }],
  },
  'sentry.is_remote': {
    brief: "Indicates whether a span's parent is remote.",
    type: 'boolean',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
    example: true,
    changelog: [{ version: '0.3.1', prs: [190] }],
  },
  'sentry.kind': {
    brief:
      'Used to clarify the relationship between parents and children, or to distinguish between spans, e.g. a `server` and `client` span with the same name.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'server',
    aliases: ['otel.kind'],
    changelog: [{ version: '0.3.1', prs: [190] }],
  },
  'sentry.main_thread': {
    brief: 'Whether the span or event occurred on the main thread. Computed by Relay and should not be set by SDKs.',
    type: 'boolean',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
    example: true,
    changelog: [{ version: '0.5.0' }],
  },
  'sentry.message.parameter.<key>': {
    brief:
      "A parameter used in the message template. <key> can either be the number that represent the parameter's position in the template string (sentry.message.parameter.0, sentry.message.parameter.1, etc) or the parameter's name (sentry.message.parameter.item_id, sentry.message.parameter.user_id, etc)",
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    example: "sentry.message.parameter.0='123'",
    changelog: [{ version: '0.1.0', prs: [116] }],
  },
  'sentry.message.template': {
    brief: 'The parameterized template string.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'Hello, {name}!',
    changelog: [{ version: '0.1.0', prs: [116] }],
  },
  'sentry.mobile': {
    brief: 'Whether the application is using a mobile SDK. Computed by Relay and should not be set by SDKs.',
    type: 'boolean',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
    example: true,
    changelog: [{ version: '0.5.0' }],
  },
  'sentry.module.<key>': {
    brief: 'A module that was loaded in the process. The key is the name of the module.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    hasDynamicSuffix: true,
    example: "sentry.module.brianium/paratest='v7.7.0'",
    changelog: [{ version: '0.1.0', prs: [103] }],
  },
  'sentry.nextjs.ssr.function.route': {
    brief:
      'A parameterized route for a function in Next.js that contributes to Server-Side Rendering. Should be present on spans that track such functions when the file location of the function is known.',
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
    example: '/posts/[id]/layout',
    changelog: [{ version: '0.1.0', prs: [54, 106] }],
  },
  'sentry.nextjs.ssr.function.type': {
    brief:
      'A descriptor for a for a function in Next.js that contributes to Server-Side Rendering. Should be present on spans that track such functions.',
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'generateMetadata',
    changelog: [{ version: '0.1.0', prs: [54, 106] }],
  },
  'sentry.normalized_db_query': {
    brief: 'The normalized version of `db.query.text`.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'SELECT .. FROM sentry_project WHERE (project_id = %s)',
    changelog: [{ version: '0.3.1', prs: [194] }],
  },
  'sentry.normalized_db_query.hash': {
    brief: 'The hash of `sentry.normalized_db_query`.',
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
    changelog: [{ version: '0.4.0', prs: [200] }],
  },
  'sentry.normalized_description': {
    brief:
      'Used as a generic attribute representing the normalized `sentry.description`. This refers to the legacy use case of `sentry.description` where it holds relevant data depending on the type of span (e.g. database query, resource url, http request description, etc).',
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'SELECT .. FROM sentry_project WHERE (project_id = %s)',
    changelog: [{ version: '0.4.0', prs: [212] }],
  },
  'sentry.observed_timestamp_nanos': {
    brief: 'The timestamp at which an envelope was received by Relay, in nanoseconds.',
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
    example: '1544712660300000000',
    changelog: [
      { version: '0.3.0', prs: [174] },
      { version: '0.2.0', prs: [137] },
    ],
  },
  'sentry.op': {
    brief: 'The operation of a span.',
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'http.client',
    changelog: [{ version: '0.0.0' }],
  },
  'sentry.origin': {
    brief: 'The origin of the instrumentation (e.g. span, log, etc.)',
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'auto.http.otel.fastify',
    changelog: [{ version: '0.1.0', prs: [68] }, { version: '0.0.0' }],
  },
  'sentry.platform': {
    brief: 'The sdk platform that generated the event.',
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'php',
    changelog: [{ version: '0.0.0' }],
  },
  'sentry.profiler_id': {
    brief: 'The id of the currently running profiler (continuous profiling)',
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
    example: '18779b64dd35d1a538e7ce2dd2d3fad3',
    changelog: [{ version: '0.4.0', prs: [242] }],
  },
  'sentry.profile_id': {
    brief:
      'The ID of the Sentry profile the span is associated with. This is only meaningful for transaction-based profiling.',
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
    example: '123e4567e89b12d3a456426614174000',
    changelog: [{ version: '0.6.0', prs: [344], description: 'Added sentry.profile_id attribute' }],
  },
  'sentry.release': {
    brief: 'The sentry release.',
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
    example: '7.0.0',
    aliases: ['service.version', 'release'],
    changelog: [{ version: '0.0.0' }],
  },
  'sentry.replay_id': {
    brief: 'The id of the sentry replay.',
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
    example: '123e4567e89b12d3a456426614174000',
    aliases: ['replay_id'],
    changelog: [{ version: '0.0.0' }],
  },
  'sentry.replay_is_buffering': {
    brief:
      'A sentinel attribute on log events indicating whether the current Session Replay is being buffered (onErrorSampleRate).',
    type: 'boolean',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
    example: true,
    changelog: [{ version: '0.3.0', prs: [185] }],
  },
  'sentry.report_event': {
    brief: '(Deprecated) The event that caused the SDK to report CLS or LCP (pagehide or navigation)',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'pagehide',
    deprecation: {
      reason:
        'The report event is now recorded as a browser.web_vital.lcp.report_event or browser.web_vital.cls.report_event attribute. No backfill required.',
    },
    changelog: [{ version: '0.5.0', prs: [320], description: 'Added sentry.report_event attribute' }],
  },
  'sentry.sdk.integrations': {
    brief:
      'A list of names identifying enabled integrations. The list shouldhave all enabled integrations, including default integrations. Defaultintegrations are included because different SDK releases may contain differentdefault integrations.',
    type: 'string[]',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
    example: ['InboundFilters', 'FunctionToString', 'BrowserApiErrors', 'Breadcrumbs'],
    changelog: [{ version: '0.0.0', prs: [42] }],
  },
  'sentry.sdk.name': {
    brief: 'The sentry sdk name.',
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
    example: '@sentry/react',
    changelog: [{ version: '0.0.0' }],
  },
  'sentry.sdk.version': {
    brief: 'The sentry sdk version.',
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
    example: '7.0.0',
    changelog: [{ version: '0.0.0' }],
  },
  'sentry.segment.id': {
    brief: 'The segment ID of a span',
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
    example: '051581bf3cb55c13',
    aliases: ['sentry.segment_id'],
    changelog: [{ version: '0.1.0', prs: [107, 124] }],
  },
  'sentry.segment_id': {
    brief: 'The segment ID of a span',
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
    example: '051581bf3cb55c13',
    deprecation: {
      replacement: 'sentry.segment.id',
    },
    aliases: ['sentry.segment.id'],
    changelog: [{ version: '0.1.0', prs: [124] }],
  },
  'sentry.segment.name': {
    brief: 'The segment name of a span',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'GET /user',
    aliases: ['sentry.transaction', 'transaction'],
    changelog: [
      { version: '0.6.0', prs: [345], description: 'Added sentry.transaction and transaction aliases' },
      { version: '0.1.0', prs: [104] },
    ],
  },
  'sentry.server_sample_rate': {
    brief: 'Rate at which a span was sampled in Relay.',
    type: 'double',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
    example: 0.5,
    changelog: [{ version: '0.1.0', prs: [102] }],
  },
  'sentry.source': {
    brief:
      "The source of a span, also referred to as transaction source. Known values are:  `'custom'`, `'url'`, `'route'`, `'component'`, `'view'`, `'task'`. '`source`' describes a parametrized route, while `'url'` describes the full URL, potentially containing identifiers.",
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'route',
    deprecation: {
      replacement: 'sentry.span.source',
      reason: 'This attribute is being deprecated in favor of sentry.span.source',
    },
    changelog: [{ version: '0.5.0' }],
  },
  'sentry.span.source': {
    brief:
      "The source of a span, also referred to as transaction source. Known values are:  `'custom'`, `'url'`, `'route'`, `'component'`, `'view'`, `'task'`. '`source`' describes a parametrized route, while `'url'` describes the full URL, potentially containing identifiers.",
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'route',
    changelog: [{ version: '0.4.0', prs: [214] }, { version: '0.0.0' }],
  },
  'sentry.status': {
    brief:
      'The span\'s status (either "ok" or "error"). Older SDKs may set this to a more specific error, but this behaviour is deprecated.',
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'ok',
    changelog: [{ version: '0.14.0', prs: [453] }],
  },
  'sentry.status_code': {
    brief:
      'The HTTP status code used in Sentry Insights. Typically set by Sentry during ingestion, rather than by clients.',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 200,
    changelog: [{ version: '0.4.0', prs: [223, 228] }],
  },
  'sentry.status.message': {
    brief: 'The from OTLP extracted status message.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'foobar',
    changelog: [{ version: '0.3.1', prs: [190] }],
  },
  'sentry.thread.id': {
    brief: 'Current “managed” thread ID.',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 56,
    deprecation: {
      replacement: 'thread.id',
      reason: 'This attribute is being deprecated in favor of the OTel-standard thread.id',
    },
    changelog: [{ version: '0.13.0', prs: [451] }],
  },
  'sentry.timestamp.sequence': {
    brief:
      'A sequencing counter for deterministic ordering of logs or metrics when timestamps share the same integer millisecond. Starts at 0 on SDK initialization, increments by 1 for each captured item, and resets to 0 when the integer millisecond of the current item differs from the previous one.',
    type: 'integer',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
    example: 0,
    changelog: [{ version: '0.5.0', prs: [262] }],
  },
  'sentry.trace_lifecycle': {
    brief: 'Indicates the chosen trace lifecycle mode of the SDK (stream or static)',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'stream',
    changelog: [{ version: '0.13.0', prs: [442], description: 'Added sentry.trace_lifecycle attribute' }],
  },
  'sentry.trace.parent_span_id': {
    brief:
      'The span id of the span that was active when the log was collected. This should not be set if there was no active span.',
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'b0e6f15b45c36b12',
    deprecation: {},
    changelog: [
      { version: '0.5.0', prs: [287], description: 'Deprecate `sentry.trace.parent_span_id`' },
      { version: '0.1.0', prs: [116] },
    ],
  },
  'sentry.trace.status': {
    brief:
      'The segment\'s status (either "ok" or "error"). Older SDKs may set this to a more specific error, but this behaviour is deprecated.',
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'ok',
    changelog: [{ version: '0.14.0', prs: [453] }],
  },
  'sentry.transaction': {
    brief: 'The sentry transaction (segment name).',
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'GET /',
    deprecation: {
      replacement: 'sentry.segment.name',
      reason: 'This attribute is being deprecated in favor of sentry.segment.name',
    },
    aliases: ['sentry.segment.name', 'transaction'],
    changelog: [
      { version: '0.6.0', prs: [345], description: 'Deprecated sentry.transaction in favor of sentry.segment.name' },
      { version: '0.0.0' },
    ],
  },
  'sentry.user.email': {
    brief: 'User email address.',
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'user.email',
    },
    aliases: ['user.email'],
    changelog: [{ version: '0.10.0', prs: [406] }],
  },
  'sentry.user.geo.city': {
    brief: 'Human readable city name.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'user.geo.city',
    },
    aliases: ['user.geo.city'],
    changelog: [{ version: '0.10.0', prs: [406] }],
  },
  'sentry.user.geo.country_code': {
    brief: 'Two-letter country code (ISO 3166-1 alpha-2).',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'user.geo.country_code',
    },
    aliases: ['user.geo.country_code'],
    changelog: [{ version: '0.10.0', prs: [406] }],
  },
  'sentry.user.geo.region': {
    brief: 'Human readable region name or code.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'user.geo.region',
    },
    aliases: ['user.geo.region'],
    changelog: [{ version: '0.10.0', prs: [406] }],
  },
  'sentry.user.geo.subdivision': {
    brief: 'Human readable subdivision name.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'user.geo.subdivision',
    },
    aliases: ['user.geo.subdivision'],
    changelog: [{ version: '0.10.0', prs: [406] }],
  },
  'sentry.user.id': {
    brief: 'Unique identifier of the user.',
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'user.id',
    },
    aliases: ['user.id'],
    changelog: [{ version: '0.10.0', prs: [406] }],
  },
  'sentry.user.ip': {
    brief: 'The IP address of the user.',
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'user.ip_address',
    },
    aliases: ['user.ip_address'],
    changelog: [{ version: '0.10.0', prs: [406] }],
  },
  'sentry.user.username': {
    brief: 'Short name or login/username of the user.',
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'user.name',
    },
    aliases: ['user.name'],
    changelog: [{ version: '0.10.0', prs: [406] }],
  },
  'server.address': {
    brief:
      'Server domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'example.com',
    aliases: ['http.server_name', 'net.host.name', 'http.host'],
    changelog: [{ version: '0.1.0', prs: [108, 127] }, { version: '0.0.0' }],
  },
  'server.port': {
    brief: 'Server port number.',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 1337,
    aliases: ['net.host.port'],
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.0.0' }],
  },
  'service.name': {
    brief: 'Logical name of the service.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'omegastar',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'service.version': {
    brief: 'The version string of the service API or implementation. The format is not defined by these conventions.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: '5.0.0',
    aliases: ['sentry.release'],
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'session.id': {
    brief: 'A unique id identifying the active session at the time of setting this attribute',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: '00112233-4455-6677-8899-aabbccddeeff',
    changelog: [{ version: '0.11.0', prs: [412], description: 'Added session.id attribute' }],
  },
  stall_percentage: {
    brief: 'The fraction of time the app was stalled. Only applies to React Native. This is computed by Relay.',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    changelog: [{ version: '0.7.0', prs: [362], description: 'Added stall_percentage attribute' }],
  },
  stall_total_time: {
    brief:
      'The combined duration of all stalls in milliseconds. Only applies to React Native. This is computed by Relay.',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    changelog: [{ version: '0.7.0', prs: [362], description: 'Added stall_total_time attribute' }],
  },
  'state.type': {
    brief: 'The type of state management library',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'redux',
    changelog: [{ version: '0.7.0', prs: [365], description: 'Added state.type attribute' }],
  },
  'thread.id': {
    brief: 'Current “managed” thread ID.',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 56,
    changelog: [{ version: '0.0.0' }],
  },
  'thread.name': {
    brief: 'Current thread name.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'main',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'timber.tag': {
    brief: 'The log tag provided by the timber logging framework.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'MyTag',
    changelog: [{ version: '0.3.0', prs: [183] }],
  },
  time_to_full_display: {
    brief: 'The duration of time to full display in milliseconds',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 1234.56,
    deprecation: {
      replacement: 'app.vitals.ttfd.value',
      reason:
        'Replaced by app.vitals.ttfd.value to align with the app.vitals.* namespace for mobile performance attributes',
    },
    aliases: ['app.vitals.ttfd.value'],
    changelog: [
      { version: '0.5.0', prs: [313], description: 'Added and deprecated in favor of app.vitals.ttfd.value' },
    ],
  },
  time_to_initial_display: {
    brief: 'The duration of time to initial display in milliseconds',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 1234.56,
    deprecation: {
      replacement: 'app.vitals.ttid.value',
      reason:
        'Replaced by app.vitals.ttid.value to align with the app.vitals.* namespace for mobile performance attributes',
    },
    aliases: ['app.vitals.ttid.value'],
    changelog: [
      { version: '0.5.0', prs: [313], description: 'Added and deprecated in favor of app.vitals.ttid.value' },
    ],
  },
  transaction: {
    brief: 'The sentry transaction (segment name).',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'GET /',
    deprecation: {
      replacement: 'sentry.segment.name',
    },
    aliases: ['sentry.segment.name', 'sentry.transaction'],
    changelog: [
      {
        version: '0.6.0',
        prs: [345],
        description: 'Updated transaction deprecation replacement to sentry.segment.name',
      },
      { version: '0.1.0', prs: [61, 127] },
      { version: '0.0.0' },
    ],
  },
  'trpc.procedure_path': {
    brief: 'The path of the tRPC procedure being called',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'user.getById',
    changelog: [{ version: '0.7.0', prs: [370], description: 'Added trpc.procedure_path attribute' }],
  },
  'trpc.procedure_type': {
    brief: 'The type of the tRPC procedure',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'query',
    changelog: [{ version: '0.7.0', prs: [370], description: 'Added trpc.procedure_type attribute' }],
  },
  ttfb: {
    brief: 'The value of the recorded Time To First Byte (TTFB) web vital in milliseconds',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 194,
    deprecation: {
      replacement: 'browser.web_vital.ttfb.value',
      reason: 'This attribute is being deprecated in favor of browser.web_vital.ttfb.value',
    },
    aliases: ['browser.web_vital.ttfb.value'],
    changelog: [{ version: '0.5.0', prs: [235] }],
  },
  'ttfb.requestTime': {
    brief:
      "The time it takes for the server to process the initial request and send the first byte of a response to the user's browser",
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 1554.5814,
    deprecation: {
      replacement: 'browser.web_vital.ttfb.request_time',
      reason: 'This attribute is being deprecated in favor of browser.web_vital.ttfb.request_time',
    },
    aliases: ['browser.web_vital.ttfb.request_time'],
    changelog: [{ version: '0.5.0', prs: [235] }],
  },
  type: {
    brief: 'More granular type of the operation happening.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'fetch',
    changelog: [{ version: '0.0.0' }],
  },
  'ui.component_name': {
    brief: 'The name of the associated component.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'HomeButton',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'ui.contributes_to_ttfd': {
    brief: 'Whether the span execution contributed to the TTFD (time to fully drawn) metric.',
    type: 'boolean',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: true,
    changelog: [{ version: '0.0.0' }],
  },
  'ui.contributes_to_ttid': {
    brief: 'Whether the span execution contributed to the TTID (time to initial display) metric.',
    type: 'boolean',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: true,
    changelog: [{ version: '0.0.0' }],
  },
  'ui.element.height': {
    brief: 'The height of the UI element (for Html in pixels)',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 256,
    changelog: [{ version: '0.5.0', prs: [284], description: 'Added ui.element.height attribute' }],
  },
  'ui.element.id': {
    brief: 'The id of the UI element',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'btn-login',
    changelog: [{ version: '0.5.0', prs: [284], description: 'Added ui.element.id attribute' }],
  },
  'ui.element.identifier': {
    brief: 'The identifier used to measure the UI element timing',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'heroImage',
    changelog: [{ version: '0.5.0', prs: [284], description: 'Added ui.element.identifier attribute' }],
  },
  'ui.element.load_time': {
    brief: 'The loading time of a UI element (from time origin to finished loading)',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 998.2234,
    changelog: [{ version: '0.5.0', prs: [284], description: 'Added ui.element.load_time attribute' }],
  },
  'ui.element.paint_type': {
    brief: "The type of element paint. Can either be 'image-paint' or 'text-paint'",
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'image-paint',
    changelog: [{ version: '0.5.0', prs: [284], description: 'Added ui.element.paint_type attribute' }],
  },
  'ui.element.render_time': {
    brief: 'The rendering time of the UI element (from time origin to finished rendering)',
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 1023.1124,
    changelog: [{ version: '0.5.0', prs: [284], description: 'Added ui.element.render_time attribute' }],
  },
  'ui.element.type': {
    brief: 'type of the UI element',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'img',
    changelog: [{ version: '0.5.0', prs: [284], description: 'Added ui.element.type attribute' }],
  },
  'ui.element.url': {
    brief: 'The URL of the UI element (e.g. an img src)',
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'https://assets.myapp.com/hero.png',
    changelog: [{ version: '0.5.0', prs: [284], description: 'Added ui.element.url attribute' }],
  },
  'ui.element.width': {
    brief: 'The width of the UI element (for HTML in pixels)',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 512,
    changelog: [{ version: '0.5.0', prs: [284], description: 'Added ui.element.width attribute' }],
  },
  url: {
    brief: 'The URL of the resource that was fetched.',
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'https://example.com/test?foo=bar#buzz',
    deprecation: {
      replacement: 'url.full',
    },
    aliases: ['url.full', 'http.url'],
    changelog: [{ version: '0.1.0', prs: [61] }, { version: '0.0.0' }],
  },
  'url.domain': {
    brief:
      'Server domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'example.com',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'url.fragment': {
    brief:
      'The fragments present in the URI. Note that this does not contain the leading # character, while the `http.fragment` attribute does.',
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'details',
    changelog: [{ version: '0.0.0' }],
  },
  'url.full': {
    brief: 'The URL of the resource that was fetched.',
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'https://example.com/test?foo=bar#buzz',
    aliases: ['http.url', 'url'],
    changelog: [{ version: '0.1.0', prs: [108] }, { version: '0.0.0' }],
  },
  'url.path': {
    brief: 'The URI path component.',
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: true,
    visibility: 'public',
    example: '/foo',
    changelog: [{ version: '0.0.0' }],
  },
  'url.path.parameter.<key>': {
    brief:
      'Decoded parameters extracted from a URL path. Usually added by client-side routing frameworks like vue-router.',
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    hasDynamicSuffix: true,
    example: "url.path.parameter.id='123'",
    aliases: ['params.<key>'],
    changelog: [{ version: '0.1.0', prs: [103] }],
  },
  'url.port': {
    brief: 'Server port number.',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 1337,
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.0.0' }],
  },
  'url.query': {
    brief:
      'The query string present in the URL. Note that this does not contain the leading ? character, while the `http.query` attribute does.',
    type: 'string',
    applyScrubbing: {
      key: 'auto',
      reason:
        'Query string values can contain sensitive information. Clients should attempt to scrub parameters that might contain sensitive information.',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'foo=bar&bar=baz',
    changelog: [{ version: '0.0.0' }],
  },
  'url.same_origin': {
    brief: "Indicates that a URL has the same origin as the current page's origin in the browser.",
    type: 'boolean',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: true,
    deprecation: {
      replacement: 'http.request.same_origin',
      reason: 'This attribute is being deprecated in favor of http.request.same_origin.',
    },
    aliases: ['http.request.same_origin'],
    changelog: [
      {
        version: 'next',
        prs: [456],
        description: 'Added url.same_origin attribute, deprecated in favor of http.request.same_origin',
      },
    ],
  },
  'url.scheme': {
    brief: 'The URI scheme component identifying the used protocol.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'https',
    aliases: ['http.scheme'],
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'url.template': {
    brief: 'The low-cardinality template of an absolute path reference.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example: '/users/:id',
    aliases: ['http.route'],
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'user_agent.original': {
    brief: 'Value of the HTTP User-Agent header sent by the client.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    example:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Mobile/15E148 Safari/604.1',
    aliases: ['http.user_agent'],
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'user.email': {
    brief: 'User email address.',
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'test@example.com',
    aliases: ['sentry.user.email'],
    changelog: [{ version: '0.0.0' }],
  },
  'user.full_name': {
    brief: "User's full name.",
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'John Smith',
    changelog: [{ version: '0.0.0' }],
  },
  'user.geo.city': {
    brief: 'Human readable city name.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'Toronto',
    aliases: ['sentry.user.geo.city'],
    changelog: [{ version: '0.0.0' }],
  },
  'user.geo.country_code': {
    brief: 'Two-letter country code (ISO 3166-1 alpha-2).',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'CA',
    aliases: ['sentry.user.geo.country_code'],
    changelog: [{ version: '0.0.0' }],
  },
  'user.geo.region': {
    brief: 'Human readable region name or code.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'Canada',
    aliases: ['sentry.user.geo.region'],
    changelog: [{ version: '0.0.0' }],
  },
  'user.geo.subdivision': {
    brief: 'Human readable subdivision name.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'Ontario',
    aliases: ['sentry.user.geo.subdivision'],
    changelog: [{ version: '0.0.0' }],
  },
  'user.hash': {
    brief: 'Unique user hash to correlate information for a user in anonymized form.',
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: true,
    visibility: 'public',
    example: '8ae4c2993e0f4f3b8b2d1b1f3b5e8f4d',
    changelog: [{ version: '0.0.0' }],
  },
  'user.id': {
    brief: 'Unique identifier of the user.',
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'S-1-5-21-202424912787-2692429404-2351956786-1000',
    aliases: ['sentry.user.id'],
    changelog: [{ version: '0.0.0' }],
  },
  'user.ip_address': {
    brief: 'The IP address of the user.',
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    example: '192.168.1.1',
    aliases: ['sentry.user.ip'],
    changelog: [{ version: '0.1.0', prs: [75] }],
  },
  'user.name': {
    brief: 'Short name or login/username of the user.',
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: true,
    visibility: 'public',
    example: 'j.smith',
    aliases: ['sentry.user.username'],
    changelog: [{ version: '0.0.0' }],
  },
  'user.roles': {
    brief: 'Array of user roles at the time of the event.',
    type: 'string[]',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: true,
    visibility: 'public',
    example: ['admin', 'editor'],
    changelog: [{ version: '0.0.0' }],
  },
  'vercel.branch': {
    brief: 'Git branch name for Vercel project',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'main',
    changelog: [{ version: '0.2.0', prs: [163] }],
  },
  'vercel.build_id': {
    brief: 'Identifier for the Vercel build (only present on build logs)',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'bld_cotnkcr76',
    changelog: [{ version: '0.2.0', prs: [163] }],
  },
  'vercel.deployment_id': {
    brief: 'Identifier for the Vercel deployment',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'dpl_233NRGRjVZX1caZrXWtz5g1TAksD',
    changelog: [{ version: '0.2.0', prs: [163] }],
  },
  'vercel.destination': {
    brief: 'Origin of the external content in Vercel (only on external logs)',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'https://vitals.vercel-insights.com/v1',
    changelog: [{ version: '0.2.0', prs: [163] }],
  },
  'vercel.edge_type': {
    brief: 'Type of edge runtime in Vercel',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'edge-function',
    changelog: [{ version: '0.2.0', prs: [163] }],
  },
  'vercel.entrypoint': {
    brief: 'Entrypoint for the request in Vercel',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'api/index.js',
    changelog: [{ version: '0.2.0', prs: [163] }],
  },
  'vercel.execution_region': {
    brief: 'Region where the request is executed',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'sfo1',
    changelog: [{ version: '0.2.0', prs: [163] }],
  },
  'vercel.id': {
    brief: 'Unique identifier for the log entry in Vercel',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: '1573817187330377061717300000',
    changelog: [{ version: '0.2.0', prs: [163] }],
  },
  'vercel.ja3_digest': {
    brief: 'JA3 fingerprint digest of Vercel request',
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    example: '769,47-53-5-10-49161-49162-49171-49172-50-56-19-4,0-10-11,23-24-25,0',
    changelog: [{ version: '0.2.0', prs: [163] }],
  },
  'vercel.ja4_digest': {
    brief: 'JA4 fingerprint digest',
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    example: 't13d1516h2_8daaf6152771_02713d6af862',
    changelog: [{ version: '0.2.0', prs: [163] }],
  },
  'vercel.log_type': {
    brief: 'Vercel log output type',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'stdout',
    changelog: [{ version: '0.2.0', prs: [163] }],
  },
  'vercel.path': {
    brief: 'Function or dynamic path of the request in Vercel.',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: '/dynamic/[route].json',
    changelog: [{ version: '0.6.0', prs: [349], description: 'Added vercel.path attribute' }],
  },
  'vercel.project_id': {
    brief: 'Identifier for the Vercel project',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'gdufoJxB6b9b1fEqr1jUtFkyavUU',
    changelog: [{ version: '0.2.0', prs: [163] }],
  },
  'vercel.project_name': {
    brief: 'Name of the Vercel project',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'my-app',
    changelog: [{ version: '0.2.0', prs: [163] }],
  },
  'vercel.proxy.cache_id': {
    brief: 'Original request ID when request is served from cache',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'pdx1::v8g4b-1744143786684-93dafbc0f70d',
    changelog: [{ version: '0.2.0', prs: [163] }],
  },
  'vercel.proxy.client_ip': {
    brief: 'Client IP address',
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    example: '120.75.16.101',
    changelog: [{ version: '0.2.0', prs: [163] }],
  },
  'vercel.proxy.host': {
    brief: 'Hostname of the request',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'test.vercel.app',
    changelog: [{ version: '0.2.0', prs: [163] }],
  },
  'vercel.proxy.lambda_region': {
    brief: 'Region where lambda function executed',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'sfo1',
    changelog: [{ version: '0.2.0', prs: [163] }],
  },
  'vercel.proxy.method': {
    brief: 'HTTP method of the request',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'GET',
    changelog: [{ version: '0.2.0', prs: [163] }],
  },
  'vercel.proxy.path': {
    brief: 'Request path with query parameters',
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    example: '/dynamic/some-value.json?route=some-value',
    changelog: [{ version: '0.2.0', prs: [163] }],
  },
  'vercel.proxy.path_type': {
    brief: 'How the request was served based on its path and project configuration',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'func',
    changelog: [{ version: '0.2.0', prs: [163] }],
  },
  'vercel.proxy.path_type_variant': {
    brief: 'Variant of the path type',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'api',
    changelog: [{ version: '0.2.0', prs: [163] }],
  },
  'vercel.proxy.referer': {
    brief: 'Referer of the request',
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    example: '*.vercel.app',
    changelog: [{ version: '0.2.0', prs: [163] }],
  },
  'vercel.proxy.region': {
    brief: 'Region where the request is processed',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'sfo1',
    changelog: [{ version: '0.2.0', prs: [163] }],
  },
  'vercel.proxy.response_byte_size': {
    brief: 'Size of the response in bytes',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 1024,
    changelog: [
      { version: '0.4.0', prs: [228] },
      { version: '0.2.0', prs: [163] },
    ],
  },
  'vercel.proxy.scheme': {
    brief: 'Protocol of the request',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'https',
    changelog: [{ version: '0.2.0', prs: [163] }],
  },
  'vercel.proxy.status_code': {
    brief: 'HTTP status code of the proxy request',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 200,
    changelog: [
      { version: '0.4.0', prs: [228] },
      { version: '0.2.0', prs: [163] },
    ],
  },
  'vercel.proxy.timestamp': {
    brief: 'Unix timestamp when the proxy request was made',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 1573817250172,
    changelog: [
      { version: '0.4.0', prs: [228] },
      { version: '0.2.0', prs: [163] },
    ],
  },
  'vercel.proxy.user_agent': {
    brief: 'User agent strings of the request',
    type: 'string[]',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: ['Mozilla/5.0...'],
    changelog: [{ version: '0.2.0', prs: [163] }],
  },
  'vercel.proxy.vercel_cache': {
    brief: 'Cache status sent to the browser',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'REVALIDATED',
    changelog: [{ version: '0.2.0', prs: [163] }],
  },
  'vercel.proxy.vercel_id': {
    brief: 'Vercel-specific identifier',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'sfo1::abc123',
    changelog: [{ version: '0.2.0', prs: [163] }],
  },
  'vercel.proxy.waf_action': {
    brief: 'Action taken by firewall rules',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'deny',
    changelog: [{ version: '0.2.0', prs: [163] }],
  },
  'vercel.proxy.waf_rule_id': {
    brief: 'ID of the firewall rule that matched',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'rule_gAHz8jtSB1Gy',
    changelog: [{ version: '0.2.0', prs: [163] }],
  },
  'vercel.request_id': {
    brief: 'Identifier of the Vercel request',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: '643af4e3-975a-4cc7-9e7a-1eda11539d90',
    changelog: [{ version: '0.2.0', prs: [163] }],
  },
  'vercel.source': {
    brief: 'Origin of the Vercel log (build, edge, lambda, static, external, or firewall)',
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 'build',
    changelog: [{ version: '0.2.0', prs: [163] }],
  },
  'vercel.status_code': {
    brief: 'HTTP status code of the request (-1 means no response returned and the lambda crashed)',
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    example: 200,
    changelog: [
      { version: '0.4.0', prs: [228] },
      { version: '0.2.0', prs: [163] },
    ],
  },
};

export type AttributeValue = string | number | boolean | Array<string> | Array<number> | Array<boolean>;

export type Attributes = {
  [AI_CITATIONS]?: AI_CITATIONS_TYPE;
  [AI_COMPLETION_TOKENS_USED]?: AI_COMPLETION_TOKENS_USED_TYPE;
  [AI_DOCUMENTS]?: AI_DOCUMENTS_TYPE;
  [AI_FINISH_REASON]?: AI_FINISH_REASON_TYPE;
  [AI_FREQUENCY_PENALTY]?: AI_FREQUENCY_PENALTY_TYPE;
  [AI_FUNCTION_CALL]?: AI_FUNCTION_CALL_TYPE;
  [AI_GENERATION_ID]?: AI_GENERATION_ID_TYPE;
  [AI_INPUT_MESSAGES]?: AI_INPUT_MESSAGES_TYPE;
  [AI_IS_SEARCH_REQUIRED]?: AI_IS_SEARCH_REQUIRED_TYPE;
  [AI_METADATA]?: AI_METADATA_TYPE;
  [AI_MODEL_ID]?: AI_MODEL_ID_TYPE;
  [AI_MODEL_PROVIDER]?: AI_MODEL_PROVIDER_TYPE;
  [AI_PIPELINE_NAME]?: AI_PIPELINE_NAME_TYPE;
  [AI_PREAMBLE]?: AI_PREAMBLE_TYPE;
  [AI_PRESENCE_PENALTY]?: AI_PRESENCE_PENALTY_TYPE;
  [AI_PROMPT_TOKENS_USED]?: AI_PROMPT_TOKENS_USED_TYPE;
  [AI_RAW_PROMPTING]?: AI_RAW_PROMPTING_TYPE;
  [AI_RESPONSES]?: AI_RESPONSES_TYPE;
  [AI_RESPONSE_FORMAT]?: AI_RESPONSE_FORMAT_TYPE;
  [AI_SEARCH_QUERIES]?: AI_SEARCH_QUERIES_TYPE;
  [AI_SEARCH_RESULTS]?: AI_SEARCH_RESULTS_TYPE;
  [AI_SEED]?: AI_SEED_TYPE;
  [AI_STREAMING]?: AI_STREAMING_TYPE;
  [AI_TAGS]?: AI_TAGS_TYPE;
  [AI_TEMPERATURE]?: AI_TEMPERATURE_TYPE;
  [AI_TEXTS]?: AI_TEXTS_TYPE;
  [AI_TOOLS]?: AI_TOOLS_TYPE;
  [AI_TOOL_CALLS]?: AI_TOOL_CALLS_TYPE;
  [AI_TOP_K]?: AI_TOP_K_TYPE;
  [AI_TOP_P]?: AI_TOP_P_TYPE;
  [AI_TOTAL_COST]?: AI_TOTAL_COST_TYPE;
  [AI_TOTAL_TOKENS_USED]?: AI_TOTAL_TOKENS_USED_TYPE;
  [AI_WARNINGS]?: AI_WARNINGS_TYPE;
  [ANGULAR_VERSION]?: ANGULAR_VERSION_TYPE;
  [APP_APP_BUILD]?: APP_APP_BUILD_TYPE;
  [APP_APP_IDENTIFIER]?: APP_APP_IDENTIFIER_TYPE;
  [APP_APP_NAME]?: APP_APP_NAME_TYPE;
  [APP_APP_START_TIME]?: APP_APP_START_TIME_TYPE;
  [APP_APP_VERSION]?: APP_APP_VERSION_TYPE;
  [APP_BUILD]?: APP_BUILD_TYPE;
  [APP_IDENTIFIER]?: APP_IDENTIFIER_TYPE;
  [APP_IN_FOREGROUND]?: APP_IN_FOREGROUND_TYPE;
  [APP_NAME]?: APP_NAME_TYPE;
  [APP_START_COLD]?: APP_START_COLD_TYPE;
  [APP_START_TIME]?: APP_START_TIME_TYPE;
  [APP_START_TYPE]?: APP_START_TYPE_TYPE;
  [APP_START_WARM]?: APP_START_WARM_TYPE;
  [APP_VERSION]?: APP_VERSION_TYPE;
  [APP_VITALS_FRAMES_DELAY_VALUE]?: APP_VITALS_FRAMES_DELAY_VALUE_TYPE;
  [APP_VITALS_FRAMES_FROZEN_COUNT]?: APP_VITALS_FRAMES_FROZEN_COUNT_TYPE;
  [APP_VITALS_FRAMES_SLOW_COUNT]?: APP_VITALS_FRAMES_SLOW_COUNT_TYPE;
  [APP_VITALS_FRAMES_TOTAL_COUNT]?: APP_VITALS_FRAMES_TOTAL_COUNT_TYPE;
  [APP_VITALS_START_COLD_VALUE]?: APP_VITALS_START_COLD_VALUE_TYPE;
  [APP_VITALS_START_PREWARMED]?: APP_VITALS_START_PREWARMED_TYPE;
  [APP_VITALS_START_REASON]?: APP_VITALS_START_REASON_TYPE;
  [APP_VITALS_START_SCREEN]?: APP_VITALS_START_SCREEN_TYPE;
  [APP_VITALS_START_TYPE]?: APP_VITALS_START_TYPE_TYPE;
  [APP_VITALS_START_WARM_VALUE]?: APP_VITALS_START_WARM_VALUE_TYPE;
  [APP_VITALS_TTFD_VALUE]?: APP_VITALS_TTFD_VALUE_TYPE;
  [APP_VITALS_TTID_VALUE]?: APP_VITALS_TTID_VALUE_TYPE;
  [ART_GC_BLOCKING_COUNT]?: ART_GC_BLOCKING_COUNT_TYPE;
  [ART_GC_BLOCKING_TIME]?: ART_GC_BLOCKING_TIME_TYPE;
  [ART_GC_PRE_OOME_COUNT]?: ART_GC_PRE_OOME_COUNT_TYPE;
  [ART_GC_TOTAL_COUNT]?: ART_GC_TOTAL_COUNT_TYPE;
  [ART_GC_TOTAL_TIME]?: ART_GC_TOTAL_TIME_TYPE;
  [ART_GC_WAITING_TIME]?: ART_GC_WAITING_TIME_TYPE;
  [ART_MEMORY_FREE]?: ART_MEMORY_FREE_TYPE;
  [ART_MEMORY_FREE_UNTIL_GC]?: ART_MEMORY_FREE_UNTIL_GC_TYPE;
  [ART_MEMORY_FREE_UNTIL_OOME]?: ART_MEMORY_FREE_UNTIL_OOME_TYPE;
  [ART_MEMORY_MAX]?: ART_MEMORY_MAX_TYPE;
  [ART_MEMORY_TOTAL]?: ART_MEMORY_TOTAL_TYPE;
  [AWS_CLOUDWATCH_LOGS_LOG_GROUP]?: AWS_CLOUDWATCH_LOGS_LOG_GROUP_TYPE;
  [AWS_CLOUDWATCH_LOGS_LOG_STREAM]?: AWS_CLOUDWATCH_LOGS_LOG_STREAM_TYPE;
  [AWS_CLOUDWATCH_LOGS_URL]?: AWS_CLOUDWATCH_LOGS_URL_TYPE;
  [AWS_LAMBDA_AWS_REQUEST_ID]?: AWS_LAMBDA_AWS_REQUEST_ID_TYPE;
  [AWS_LAMBDA_EXECUTION_DURATION_IN_MILLIS]?: AWS_LAMBDA_EXECUTION_DURATION_IN_MILLIS_TYPE;
  [AWS_LAMBDA_FUNCTION_NAME]?: AWS_LAMBDA_FUNCTION_NAME_TYPE;
  [AWS_LAMBDA_FUNCTION_VERSION]?: AWS_LAMBDA_FUNCTION_VERSION_TYPE;
  [AWS_LAMBDA_INVOKED_ARN]?: AWS_LAMBDA_INVOKED_ARN_TYPE;
  [AWS_LAMBDA_INVOKED_FUNCTION_ARN]?: AWS_LAMBDA_INVOKED_FUNCTION_ARN_TYPE;
  [AWS_LAMBDA_REMAINING_TIME_IN_MILLIS]?: AWS_LAMBDA_REMAINING_TIME_IN_MILLIS_TYPE;
  [AWS_LOG_GROUP_NAMES]?: AWS_LOG_GROUP_NAMES_TYPE;
  [AWS_LOG_STREAM_NAMES]?: AWS_LOG_STREAM_NAMES_TYPE;
  [BLOCKED_MAIN_THREAD]?: BLOCKED_MAIN_THREAD_TYPE;
  [BROWSER_NAME]?: BROWSER_NAME_TYPE;
  [BROWSER_PERFORMANCE_NAVIGATION_ACTIVATION_START]?: BROWSER_PERFORMANCE_NAVIGATION_ACTIVATION_START_TYPE;
  [BROWSER_PERFORMANCE_TIME_ORIGIN]?: BROWSER_PERFORMANCE_TIME_ORIGIN_TYPE;
  [BROWSER_REPORT_TYPE]?: BROWSER_REPORT_TYPE_TYPE;
  [BROWSER_SCRIPT_INVOKER]?: BROWSER_SCRIPT_INVOKER_TYPE;
  [BROWSER_SCRIPT_INVOKER_TYPE]?: BROWSER_SCRIPT_INVOKER_TYPE_TYPE;
  [BROWSER_SCRIPT_SOURCE_CHAR_POSITION]?: BROWSER_SCRIPT_SOURCE_CHAR_POSITION_TYPE;
  [BROWSER_VERSION]?: BROWSER_VERSION_TYPE;
  [BROWSER_WEB_VITAL_CLS_REPORT_EVENT]?: BROWSER_WEB_VITAL_CLS_REPORT_EVENT_TYPE;
  [BROWSER_WEB_VITAL_CLS_SOURCE_KEY]?: BROWSER_WEB_VITAL_CLS_SOURCE_KEY_TYPE;
  [BROWSER_WEB_VITAL_CLS_VALUE]?: BROWSER_WEB_VITAL_CLS_VALUE_TYPE;
  [BROWSER_WEB_VITAL_FCP_VALUE]?: BROWSER_WEB_VITAL_FCP_VALUE_TYPE;
  [BROWSER_WEB_VITAL_FP_VALUE]?: BROWSER_WEB_VITAL_FP_VALUE_TYPE;
  [BROWSER_WEB_VITAL_INP_VALUE]?: BROWSER_WEB_VITAL_INP_VALUE_TYPE;
  [BROWSER_WEB_VITAL_LCP_ELEMENT]?: BROWSER_WEB_VITAL_LCP_ELEMENT_TYPE;
  [BROWSER_WEB_VITAL_LCP_ID]?: BROWSER_WEB_VITAL_LCP_ID_TYPE;
  [BROWSER_WEB_VITAL_LCP_LOAD_TIME]?: BROWSER_WEB_VITAL_LCP_LOAD_TIME_TYPE;
  [BROWSER_WEB_VITAL_LCP_RENDER_TIME]?: BROWSER_WEB_VITAL_LCP_RENDER_TIME_TYPE;
  [BROWSER_WEB_VITAL_LCP_REPORT_EVENT]?: BROWSER_WEB_VITAL_LCP_REPORT_EVENT_TYPE;
  [BROWSER_WEB_VITAL_LCP_SIZE]?: BROWSER_WEB_VITAL_LCP_SIZE_TYPE;
  [BROWSER_WEB_VITAL_LCP_URL]?: BROWSER_WEB_VITAL_LCP_URL_TYPE;
  [BROWSER_WEB_VITAL_LCP_VALUE]?: BROWSER_WEB_VITAL_LCP_VALUE_TYPE;
  [BROWSER_WEB_VITAL_TTFB_REQUEST_TIME]?: BROWSER_WEB_VITAL_TTFB_REQUEST_TIME_TYPE;
  [BROWSER_WEB_VITAL_TTFB_VALUE]?: BROWSER_WEB_VITAL_TTFB_VALUE_TYPE;
  [CACHE_HIT]?: CACHE_HIT_TYPE;
  [CACHE_ITEM_SIZE]?: CACHE_ITEM_SIZE_TYPE;
  [CACHE_KEY]?: CACHE_KEY_TYPE;
  [CACHE_OPERATION]?: CACHE_OPERATION_TYPE;
  [CACHE_TTL]?: CACHE_TTL_TYPE;
  [CACHE_WRITE]?: CACHE_WRITE_TYPE;
  [CHANNEL]?: CHANNEL_TYPE;
  [CLIENT_ADDRESS]?: CLIENT_ADDRESS_TYPE;
  [CLIENT_PORT]?: CLIENT_PORT_TYPE;
  [CLOUDFLARE_D1_DURATION]?: CLOUDFLARE_D1_DURATION_TYPE;
  [CLOUDFLARE_D1_QUERY_TYPE]?: CLOUDFLARE_D1_QUERY_TYPE_TYPE;
  [CLOUDFLARE_D1_ROWS_READ]?: CLOUDFLARE_D1_ROWS_READ_TYPE;
  [CLOUDFLARE_D1_ROWS_WRITTEN]?: CLOUDFLARE_D1_ROWS_WRITTEN_TYPE;
  [CLOUDFLARE_DURABLE_OBJECT_QUERY_BINDINGS]?: CLOUDFLARE_DURABLE_OBJECT_QUERY_BINDINGS_TYPE;
  [CLOUDFLARE_DURABLE_OBJECT_RESPONSE_ROWS_READ]?: CLOUDFLARE_DURABLE_OBJECT_RESPONSE_ROWS_READ_TYPE;
  [CLOUDFLARE_DURABLE_OBJECT_RESPONSE_ROWS_WRITTEN]?: CLOUDFLARE_DURABLE_OBJECT_RESPONSE_ROWS_WRITTEN_TYPE;
  [CLOUDFLARE_R2_BUCKET]?: CLOUDFLARE_R2_BUCKET_TYPE;
  [CLOUDFLARE_R2_OPERATION]?: CLOUDFLARE_R2_OPERATION_TYPE;
  [CLOUDFLARE_R2_REQUEST_DELIMITER]?: CLOUDFLARE_R2_REQUEST_DELIMITER_TYPE;
  [CLOUDFLARE_R2_REQUEST_KEY]?: CLOUDFLARE_R2_REQUEST_KEY_TYPE;
  [CLOUDFLARE_R2_REQUEST_PART_NUMBER]?: CLOUDFLARE_R2_REQUEST_PART_NUMBER_TYPE;
  [CLOUDFLARE_R2_REQUEST_PREFIX]?: CLOUDFLARE_R2_REQUEST_PREFIX_TYPE;
  [CLOUDFLARE_WORKFLOW_ATTEMPT]?: CLOUDFLARE_WORKFLOW_ATTEMPT_TYPE;
  [CLOUDFLARE_WORKFLOW_RETRIES_BACKOFF]?: CLOUDFLARE_WORKFLOW_RETRIES_BACKOFF_TYPE;
  [CLOUDFLARE_WORKFLOW_RETRIES_DELAY]?: CLOUDFLARE_WORKFLOW_RETRIES_DELAY_TYPE;
  [CLOUDFLARE_WORKFLOW_RETRIES_LIMIT]?: CLOUDFLARE_WORKFLOW_RETRIES_LIMIT_TYPE;
  [CLOUDFLARE_WORKFLOW_TIMEOUT]?: CLOUDFLARE_WORKFLOW_TIMEOUT_TYPE;
  [CLOUD_ACCOUNT_ID]?: CLOUD_ACCOUNT_ID_TYPE;
  [CLOUD_AVAILABILITY_ZONE]?: CLOUD_AVAILABILITY_ZONE_TYPE;
  [CLOUD_PLATFORM]?: CLOUD_PLATFORM_TYPE;
  [CLOUD_PROVIDER]?: CLOUD_PROVIDER_TYPE;
  [CLOUD_REGION]?: CLOUD_REGION_TYPE;
  [CLOUD_RESOURCE_ID]?: CLOUD_RESOURCE_ID_TYPE;
  [CLS]?: CLS_TYPE;
  [CLS_SOURCE_KEY]?: CLS_SOURCE_KEY_TYPE;
  [CODE_FILEPATH]?: CODE_FILEPATH_TYPE;
  [CODE_FILE_PATH]?: CODE_FILE_PATH_TYPE;
  [CODE_FUNCTION]?: CODE_FUNCTION_TYPE;
  [CODE_FUNCTION_NAME]?: CODE_FUNCTION_NAME_TYPE;
  [CODE_LINENO]?: CODE_LINENO_TYPE;
  [CODE_LINE_NUMBER]?: CODE_LINE_NUMBER_TYPE;
  [CODE_NAMESPACE]?: CODE_NAMESPACE_TYPE;
  [CONNECTIONTYPE]?: CONNECTIONTYPE_TYPE;
  [CONNECTION_RTT]?: CONNECTION_RTT_TYPE;
  [CULTURE_CALENDAR]?: CULTURE_CALENDAR_TYPE;
  [CULTURE_DISPLAY_NAME]?: CULTURE_DISPLAY_NAME_TYPE;
  [CULTURE_IS_24_HOUR_FORMAT]?: CULTURE_IS_24_HOUR_FORMAT_TYPE;
  [CULTURE_LOCALE]?: CULTURE_LOCALE_TYPE;
  [CULTURE_TIMEZONE]?: CULTURE_TIMEZONE_TYPE;
  [DB_COLLECTION_NAME]?: DB_COLLECTION_NAME_TYPE;
  [DB_DRIVER_NAME]?: DB_DRIVER_NAME_TYPE;
  [DB_NAME]?: DB_NAME_TYPE;
  [DB_NAMESPACE]?: DB_NAMESPACE_TYPE;
  [DB_OPERATION]?: DB_OPERATION_TYPE;
  [DB_OPERATION_BATCH_SIZE]?: DB_OPERATION_BATCH_SIZE_TYPE;
  [DB_OPERATION_NAME]?: DB_OPERATION_NAME_TYPE;
  [DB_QUERY_PARAMETER_KEY]?: DB_QUERY_PARAMETER_KEY_TYPE;
  [DB_QUERY_SUMMARY]?: DB_QUERY_SUMMARY_TYPE;
  [DB_QUERY_TEXT]?: DB_QUERY_TEXT_TYPE;
  [DB_REDIS_CONNECTION]?: DB_REDIS_CONNECTION_TYPE;
  [DB_REDIS_KEY]?: DB_REDIS_KEY_TYPE;
  [DB_REDIS_PARAMETERS]?: DB_REDIS_PARAMETERS_TYPE;
  [DB_RESPONSE_STATUS_CODE]?: DB_RESPONSE_STATUS_CODE_TYPE;
  [DB_SQL_BINDINGS]?: DB_SQL_BINDINGS_TYPE;
  [DB_STATEMENT]?: DB_STATEMENT_TYPE;
  [DB_STORED_PROCEDURE_NAME]?: DB_STORED_PROCEDURE_NAME_TYPE;
  [DB_SYSTEM]?: DB_SYSTEM_TYPE;
  [DB_SYSTEM_NAME]?: DB_SYSTEM_NAME_TYPE;
  [DB_USER]?: DB_USER_TYPE;
  [DEVICEMEMORY]?: DEVICEMEMORY_TYPE;
  [DEVICE_ARCHS]?: DEVICE_ARCHS_TYPE;
  [DEVICE_BATTERY_LEVEL]?: DEVICE_BATTERY_LEVEL_TYPE;
  [DEVICE_BATTERY_TEMPERATURE]?: DEVICE_BATTERY_TEMPERATURE_TYPE;
  [DEVICE_BOOT_TIME]?: DEVICE_BOOT_TIME_TYPE;
  [DEVICE_BRAND]?: DEVICE_BRAND_TYPE;
  [DEVICE_CHARGING]?: DEVICE_CHARGING_TYPE;
  [DEVICE_CHIPSET]?: DEVICE_CHIPSET_TYPE;
  [DEVICE_CLASS]?: DEVICE_CLASS_TYPE;
  [DEVICE_CONNECTION_TYPE]?: DEVICE_CONNECTION_TYPE_TYPE;
  [DEVICE_CPU_DESCRIPTION]?: DEVICE_CPU_DESCRIPTION_TYPE;
  [DEVICE_EXTERNAL_FREE_STORAGE]?: DEVICE_EXTERNAL_FREE_STORAGE_TYPE;
  [DEVICE_EXTERNAL_STORAGE_SIZE]?: DEVICE_EXTERNAL_STORAGE_SIZE_TYPE;
  [DEVICE_FAMILY]?: DEVICE_FAMILY_TYPE;
  [DEVICE_FREE_MEMORY]?: DEVICE_FREE_MEMORY_TYPE;
  [DEVICE_FREE_STORAGE]?: DEVICE_FREE_STORAGE_TYPE;
  [DEVICE_ID]?: DEVICE_ID_TYPE;
  [DEVICE_LOCALE]?: DEVICE_LOCALE_TYPE;
  [DEVICE_LOW_MEMORY]?: DEVICE_LOW_MEMORY_TYPE;
  [DEVICE_LOW_POWER_MODE]?: DEVICE_LOW_POWER_MODE_TYPE;
  [DEVICE_MANUFACTURER]?: DEVICE_MANUFACTURER_TYPE;
  [DEVICE_MEMORY_ESTIMATED_CAPACITY]?: DEVICE_MEMORY_ESTIMATED_CAPACITY_TYPE;
  [DEVICE_MEMORY_SIZE]?: DEVICE_MEMORY_SIZE_TYPE;
  [DEVICE_MODEL]?: DEVICE_MODEL_TYPE;
  [DEVICE_MODEL_ID]?: DEVICE_MODEL_ID_TYPE;
  [DEVICE_NAME]?: DEVICE_NAME_TYPE;
  [DEVICE_ONLINE]?: DEVICE_ONLINE_TYPE;
  [DEVICE_ORIENTATION]?: DEVICE_ORIENTATION_TYPE;
  [DEVICE_PROCESSOR_COUNT]?: DEVICE_PROCESSOR_COUNT_TYPE;
  [DEVICE_PROCESSOR_FREQUENCY]?: DEVICE_PROCESSOR_FREQUENCY_TYPE;
  [DEVICE_SCREEN_DENSITY]?: DEVICE_SCREEN_DENSITY_TYPE;
  [DEVICE_SCREEN_DPI]?: DEVICE_SCREEN_DPI_TYPE;
  [DEVICE_SCREEN_HEIGHT_PIXELS]?: DEVICE_SCREEN_HEIGHT_PIXELS_TYPE;
  [DEVICE_SCREEN_WIDTH_PIXELS]?: DEVICE_SCREEN_WIDTH_PIXELS_TYPE;
  [DEVICE_SIMULATOR]?: DEVICE_SIMULATOR_TYPE;
  [DEVICE_STORAGE_SIZE]?: DEVICE_STORAGE_SIZE_TYPE;
  [DEVICE_THERMAL_STATE]?: DEVICE_THERMAL_STATE_TYPE;
  [DEVICE_TIMEZONE]?: DEVICE_TIMEZONE_TYPE;
  [DEVICE_USABLE_MEMORY]?: DEVICE_USABLE_MEMORY_TYPE;
  [EFFECTIVECONNECTIONTYPE]?: EFFECTIVECONNECTIONTYPE_TYPE;
  [ENVIRONMENT]?: ENVIRONMENT_TYPE;
  [ERROR_TYPE]?: ERROR_TYPE_TYPE;
  [EVENT_ID]?: EVENT_ID_TYPE;
  [EVENT_NAME]?: EVENT_NAME_TYPE;
  [EXCEPTION_ESCAPED]?: EXCEPTION_ESCAPED_TYPE;
  [EXCEPTION_MESSAGE]?: EXCEPTION_MESSAGE_TYPE;
  [EXCEPTION_STACKTRACE]?: EXCEPTION_STACKTRACE_TYPE;
  [EXCEPTION_TYPE]?: EXCEPTION_TYPE_TYPE;
  [FAAS_COLDSTART]?: FAAS_COLDSTART_TYPE;
  [FAAS_CRON]?: FAAS_CRON_TYPE;
  [FAAS_DURATION_IN_MS]?: FAAS_DURATION_IN_MS_TYPE;
  [FAAS_ENTRY_POINT]?: FAAS_ENTRY_POINT_TYPE;
  [FAAS_IDENTITY]?: FAAS_IDENTITY_TYPE;
  [FAAS_INVOCATION_ID]?: FAAS_INVOCATION_ID_TYPE;
  [FAAS_NAME]?: FAAS_NAME_TYPE;
  [FAAS_TIME]?: FAAS_TIME_TYPE;
  [FAAS_TRIGGER]?: FAAS_TRIGGER_TYPE;
  [FAAS_VERSION]?: FAAS_VERSION_TYPE;
  [FCP]?: FCP_TYPE;
  [FLAG_EVALUATION_KEY]?: FLAG_EVALUATION_KEY_TYPE;
  [FP]?: FP_TYPE;
  [FRAMES_DELAY]?: FRAMES_DELAY_TYPE;
  [FRAMES_FROZEN]?: FRAMES_FROZEN_TYPE;
  [FRAMES_FROZEN_RATE]?: FRAMES_FROZEN_RATE_TYPE;
  [FRAMES_SLOW]?: FRAMES_SLOW_TYPE;
  [FRAMES_SLOW_RATE]?: FRAMES_SLOW_RATE_TYPE;
  [FRAMES_TOTAL]?: FRAMES_TOTAL_TYPE;
  [FS_ERROR]?: FS_ERROR_TYPE;
  [GCP_FUNCTION_CONTEXT_EVENT_ID]?: GCP_FUNCTION_CONTEXT_EVENT_ID_TYPE;
  [GCP_FUNCTION_CONTEXT_EVENT_TYPE]?: GCP_FUNCTION_CONTEXT_EVENT_TYPE_TYPE;
  [GCP_FUNCTION_CONTEXT_ID]?: GCP_FUNCTION_CONTEXT_ID_TYPE;
  [GCP_FUNCTION_CONTEXT_RESOURCE]?: GCP_FUNCTION_CONTEXT_RESOURCE_TYPE;
  [GCP_FUNCTION_CONTEXT_SOURCE]?: GCP_FUNCTION_CONTEXT_SOURCE_TYPE;
  [GCP_FUNCTION_CONTEXT_SPECVERSION]?: GCP_FUNCTION_CONTEXT_SPECVERSION_TYPE;
  [GCP_FUNCTION_CONTEXT_TIME]?: GCP_FUNCTION_CONTEXT_TIME_TYPE;
  [GCP_FUNCTION_CONTEXT_TIMESTAMP]?: GCP_FUNCTION_CONTEXT_TIMESTAMP_TYPE;
  [GCP_FUNCTION_CONTEXT_TYPE]?: GCP_FUNCTION_CONTEXT_TYPE_TYPE;
  [GCP_PROJECT_ID]?: GCP_PROJECT_ID_TYPE;
  [GEN_AI_AGENT_NAME]?: GEN_AI_AGENT_NAME_TYPE;
  [GEN_AI_CONTEXT_UTILIZATION]?: GEN_AI_CONTEXT_UTILIZATION_TYPE;
  [GEN_AI_CONTEXT_WINDOW_SIZE]?: GEN_AI_CONTEXT_WINDOW_SIZE_TYPE;
  [GEN_AI_CONVERSATION_ID]?: GEN_AI_CONVERSATION_ID_TYPE;
  [GEN_AI_COST_CACHE_CREATION_INPUT_TOKENS]?: GEN_AI_COST_CACHE_CREATION_INPUT_TOKENS_TYPE;
  [GEN_AI_COST_CACHE_READ_INPUT_TOKENS]?: GEN_AI_COST_CACHE_READ_INPUT_TOKENS_TYPE;
  [GEN_AI_COST_INPUT_TOKENS]?: GEN_AI_COST_INPUT_TOKENS_TYPE;
  [GEN_AI_COST_OUTPUT_TOKENS]?: GEN_AI_COST_OUTPUT_TOKENS_TYPE;
  [GEN_AI_COST_REASONING_OUTPUT_TOKENS]?: GEN_AI_COST_REASONING_OUTPUT_TOKENS_TYPE;
  [GEN_AI_COST_TOTAL_TOKENS]?: GEN_AI_COST_TOTAL_TOKENS_TYPE;
  [GEN_AI_EMBEDDINGS_INPUT]?: GEN_AI_EMBEDDINGS_INPUT_TYPE;
  [GEN_AI_FUNCTION_ID]?: GEN_AI_FUNCTION_ID_TYPE;
  [GEN_AI_INPUT_MESSAGES]?: GEN_AI_INPUT_MESSAGES_TYPE;
  [GEN_AI_OPERATION_NAME]?: GEN_AI_OPERATION_NAME_TYPE;
  [GEN_AI_OPERATION_TYPE]?: GEN_AI_OPERATION_TYPE_TYPE;
  [GEN_AI_OUTPUT_MESSAGES]?: GEN_AI_OUTPUT_MESSAGES_TYPE;
  [GEN_AI_PIPELINE_NAME]?: GEN_AI_PIPELINE_NAME_TYPE;
  [GEN_AI_PROMPT]?: GEN_AI_PROMPT_TYPE;
  [GEN_AI_PROMPT_NAME]?: GEN_AI_PROMPT_NAME_TYPE;
  [GEN_AI_PROVIDER_NAME]?: GEN_AI_PROVIDER_NAME_TYPE;
  [GEN_AI_REQUEST_AVAILABLE_TOOLS]?: GEN_AI_REQUEST_AVAILABLE_TOOLS_TYPE;
  [GEN_AI_REQUEST_FREQUENCY_PENALTY]?: GEN_AI_REQUEST_FREQUENCY_PENALTY_TYPE;
  [GEN_AI_REQUEST_MAX_TOKENS]?: GEN_AI_REQUEST_MAX_TOKENS_TYPE;
  [GEN_AI_REQUEST_MESSAGES]?: GEN_AI_REQUEST_MESSAGES_TYPE;
  [GEN_AI_REQUEST_MODEL]?: GEN_AI_REQUEST_MODEL_TYPE;
  [GEN_AI_REQUEST_PRESENCE_PENALTY]?: GEN_AI_REQUEST_PRESENCE_PENALTY_TYPE;
  [GEN_AI_REQUEST_REASONING_EFFORT]?: GEN_AI_REQUEST_REASONING_EFFORT_TYPE;
  [GEN_AI_REQUEST_SEED]?: GEN_AI_REQUEST_SEED_TYPE;
  [GEN_AI_REQUEST_TEMPERATURE]?: GEN_AI_REQUEST_TEMPERATURE_TYPE;
  [GEN_AI_REQUEST_TOP_K]?: GEN_AI_REQUEST_TOP_K_TYPE;
  [GEN_AI_REQUEST_TOP_P]?: GEN_AI_REQUEST_TOP_P_TYPE;
  [GEN_AI_RESPONSE_FINISH_REASONS]?: GEN_AI_RESPONSE_FINISH_REASONS_TYPE;
  [GEN_AI_RESPONSE_ID]?: GEN_AI_RESPONSE_ID_TYPE;
  [GEN_AI_RESPONSE_MODEL]?: GEN_AI_RESPONSE_MODEL_TYPE;
  [GEN_AI_RESPONSE_STREAMING]?: GEN_AI_RESPONSE_STREAMING_TYPE;
  [GEN_AI_RESPONSE_TEXT]?: GEN_AI_RESPONSE_TEXT_TYPE;
  [GEN_AI_RESPONSE_TIME_TO_FIRST_CHUNK]?: GEN_AI_RESPONSE_TIME_TO_FIRST_CHUNK_TYPE;
  [GEN_AI_RESPONSE_TIME_TO_FIRST_TOKEN]?: GEN_AI_RESPONSE_TIME_TO_FIRST_TOKEN_TYPE;
  [GEN_AI_RESPONSE_TOKENS_PER_SECOND]?: GEN_AI_RESPONSE_TOKENS_PER_SECOND_TYPE;
  [GEN_AI_RESPONSE_TOOL_CALLS]?: GEN_AI_RESPONSE_TOOL_CALLS_TYPE;
  [GEN_AI_SYSTEM]?: GEN_AI_SYSTEM_TYPE;
  [GEN_AI_SYSTEM_INSTRUCTIONS]?: GEN_AI_SYSTEM_INSTRUCTIONS_TYPE;
  [GEN_AI_SYSTEM_MESSAGE]?: GEN_AI_SYSTEM_MESSAGE_TYPE;
  [GEN_AI_TOOL_CALL_ARGUMENTS]?: GEN_AI_TOOL_CALL_ARGUMENTS_TYPE;
  [GEN_AI_TOOL_CALL_RESULT]?: GEN_AI_TOOL_CALL_RESULT_TYPE;
  [GEN_AI_TOOL_DEFINITIONS]?: GEN_AI_TOOL_DEFINITIONS_TYPE;
  [GEN_AI_TOOL_DESCRIPTION]?: GEN_AI_TOOL_DESCRIPTION_TYPE;
  [GEN_AI_TOOL_INPUT]?: GEN_AI_TOOL_INPUT_TYPE;
  [GEN_AI_TOOL_MESSAGE]?: GEN_AI_TOOL_MESSAGE_TYPE;
  [GEN_AI_TOOL_NAME]?: GEN_AI_TOOL_NAME_TYPE;
  [GEN_AI_TOOL_OUTPUT]?: GEN_AI_TOOL_OUTPUT_TYPE;
  [GEN_AI_TOOL_TYPE]?: GEN_AI_TOOL_TYPE_TYPE;
  [GEN_AI_USAGE_CACHE_CREATION_INPUT_TOKENS]?: GEN_AI_USAGE_CACHE_CREATION_INPUT_TOKENS_TYPE;
  [GEN_AI_USAGE_CACHE_READ_INPUT_TOKENS]?: GEN_AI_USAGE_CACHE_READ_INPUT_TOKENS_TYPE;
  [GEN_AI_USAGE_COMPLETION_TOKENS]?: GEN_AI_USAGE_COMPLETION_TOKENS_TYPE;
  [GEN_AI_USAGE_INPUT_TOKENS]?: GEN_AI_USAGE_INPUT_TOKENS_TYPE;
  [GEN_AI_USAGE_INPUT_TOKENS_CACHED]?: GEN_AI_USAGE_INPUT_TOKENS_CACHED_TYPE;
  [GEN_AI_USAGE_INPUT_TOKENS_CACHE_WRITE]?: GEN_AI_USAGE_INPUT_TOKENS_CACHE_WRITE_TYPE;
  [GEN_AI_USAGE_OUTPUT_TOKENS]?: GEN_AI_USAGE_OUTPUT_TOKENS_TYPE;
  [GEN_AI_USAGE_OUTPUT_TOKENS_REASONING]?: GEN_AI_USAGE_OUTPUT_TOKENS_REASONING_TYPE;
  [GEN_AI_USAGE_PROMPT_TOKENS]?: GEN_AI_USAGE_PROMPT_TOKENS_TYPE;
  [GEN_AI_USAGE_REASONING_OUTPUT_TOKENS]?: GEN_AI_USAGE_REASONING_OUTPUT_TOKENS_TYPE;
  [GEN_AI_USAGE_TOTAL_TOKENS]?: GEN_AI_USAGE_TOTAL_TOKENS_TYPE;
  [GRAPHQL_DOCUMENT]?: GRAPHQL_DOCUMENT_TYPE;
  [GRAPHQL_OPERATION_NAME]?: GRAPHQL_OPERATION_NAME_TYPE;
  [GRAPHQL_OPERATION_TYPE]?: GRAPHQL_OPERATION_TYPE_TYPE;
  [HARDWARECONCURRENCY]?: HARDWARECONCURRENCY_TYPE;
  [HTTP_CLIENT_IP]?: HTTP_CLIENT_IP_TYPE;
  [HTTP_DECODED_RESPONSE_CONTENT_LENGTH]?: HTTP_DECODED_RESPONSE_CONTENT_LENGTH_TYPE;
  [HTTP_FLAVOR]?: HTTP_FLAVOR_TYPE;
  [HTTP_FRAGMENT]?: HTTP_FRAGMENT_TYPE;
  [HTTP_HOST]?: HTTP_HOST_TYPE;
  [HTTP_METHOD]?: HTTP_METHOD_TYPE;
  [HTTP_QUERY]?: HTTP_QUERY_TYPE;
  [HTTP_REQUEST_BODY_DATA]?: HTTP_REQUEST_BODY_DATA_TYPE;
  [HTTP_REQUEST_CONNECTION_END]?: HTTP_REQUEST_CONNECTION_END_TYPE;
  [HTTP_REQUEST_CONNECT_START]?: HTTP_REQUEST_CONNECT_START_TYPE;
  [HTTP_REQUEST_DOMAIN_LOOKUP_END]?: HTTP_REQUEST_DOMAIN_LOOKUP_END_TYPE;
  [HTTP_REQUEST_DOMAIN_LOOKUP_START]?: HTTP_REQUEST_DOMAIN_LOOKUP_START_TYPE;
  [HTTP_REQUEST_FETCH_START]?: HTTP_REQUEST_FETCH_START_TYPE;
  [HTTP_REQUEST_HEADER_KEY]?: HTTP_REQUEST_HEADER_KEY_TYPE;
  [HTTP_REQUEST_METHOD]?: HTTP_REQUEST_METHOD_TYPE;
  [_HTTP_REQUEST_METHOD]?: _HTTP_REQUEST_METHOD_TYPE;
  [HTTP_REQUEST_REDIRECT_END]?: HTTP_REQUEST_REDIRECT_END_TYPE;
  [HTTP_REQUEST_REDIRECT_START]?: HTTP_REQUEST_REDIRECT_START_TYPE;
  [HTTP_REQUEST_REQUEST_START]?: HTTP_REQUEST_REQUEST_START_TYPE;
  [HTTP_REQUEST_RESEND_COUNT]?: HTTP_REQUEST_RESEND_COUNT_TYPE;
  [HTTP_REQUEST_RESPONSE_END]?: HTTP_REQUEST_RESPONSE_END_TYPE;
  [HTTP_REQUEST_RESPONSE_START]?: HTTP_REQUEST_RESPONSE_START_TYPE;
  [HTTP_REQUEST_SAME_ORIGIN]?: HTTP_REQUEST_SAME_ORIGIN_TYPE;
  [HTTP_REQUEST_SECURE_CONNECTION_START]?: HTTP_REQUEST_SECURE_CONNECTION_START_TYPE;
  [HTTP_REQUEST_TIME_TO_FIRST_BYTE]?: HTTP_REQUEST_TIME_TO_FIRST_BYTE_TYPE;
  [HTTP_REQUEST_WORKER_START]?: HTTP_REQUEST_WORKER_START_TYPE;
  [HTTP_RESPONSE_BODY_SIZE]?: HTTP_RESPONSE_BODY_SIZE_TYPE;
  [HTTP_RESPONSE_CONTENT_LENGTH]?: HTTP_RESPONSE_CONTENT_LENGTH_TYPE;
  [HTTP_RESPONSE_HEADER_CONTENT_LENGTH]?: HTTP_RESPONSE_HEADER_CONTENT_LENGTH_TYPE;
  [HTTP_RESPONSE_HEADER_KEY]?: HTTP_RESPONSE_HEADER_KEY_TYPE;
  [HTTP_RESPONSE_SIZE]?: HTTP_RESPONSE_SIZE_TYPE;
  [HTTP_RESPONSE_STATUS_CODE]?: HTTP_RESPONSE_STATUS_CODE_TYPE;
  [HTTP_RESPONSE_TRANSFER_SIZE]?: HTTP_RESPONSE_TRANSFER_SIZE_TYPE;
  [HTTP_ROUTE]?: HTTP_ROUTE_TYPE;
  [HTTP_SCHEME]?: HTTP_SCHEME_TYPE;
  [HTTP_SERVER_NAME]?: HTTP_SERVER_NAME_TYPE;
  [HTTP_SERVER_REQUEST_TIME_IN_QUEUE]?: HTTP_SERVER_REQUEST_TIME_IN_QUEUE_TYPE;
  [HTTP_STATUS_CODE]?: HTTP_STATUS_CODE_TYPE;
  [HTTP_TARGET]?: HTTP_TARGET_TYPE;
  [HTTP_URL]?: HTTP_URL_TYPE;
  [HTTP_USER_AGENT]?: HTTP_USER_AGENT_TYPE;
  [ID]?: ID_TYPE;
  [INP]?: INP_TYPE;
  [JSONRPC_PROTOCOL_VERSION]?: JSONRPC_PROTOCOL_VERSION_TYPE;
  [JSONRPC_REQUEST_ID]?: JSONRPC_REQUEST_ID_TYPE;
  [JVM_GC_ACTION]?: JVM_GC_ACTION_TYPE;
  [JVM_GC_NAME]?: JVM_GC_NAME_TYPE;
  [JVM_MEMORY_POOL_NAME]?: JVM_MEMORY_POOL_NAME_TYPE;
  [JVM_MEMORY_TYPE]?: JVM_MEMORY_TYPE_TYPE;
  [JVM_THREAD_DAEMON]?: JVM_THREAD_DAEMON_TYPE;
  [JVM_THREAD_STATE]?: JVM_THREAD_STATE_TYPE;
  [LCP]?: LCP_TYPE;
  [LCP_ELEMENT]?: LCP_ELEMENT_TYPE;
  [LCP_ID]?: LCP_ID_TYPE;
  [LCP_LOADTIME]?: LCP_LOADTIME_TYPE;
  [LCP_RENDERTIME]?: LCP_RENDERTIME_TYPE;
  [LCP_SIZE]?: LCP_SIZE_TYPE;
  [LCP_URL]?: LCP_URL_TYPE;
  [LOGGER_NAME]?: LOGGER_NAME_TYPE;
  [MCP_CANCELLED_REASON]?: MCP_CANCELLED_REASON_TYPE;
  [MCP_CANCELLED_REQUEST_ID]?: MCP_CANCELLED_REQUEST_ID_TYPE;
  [MCP_CLIENT_NAME]?: MCP_CLIENT_NAME_TYPE;
  [MCP_CLIENT_TITLE]?: MCP_CLIENT_TITLE_TYPE;
  [MCP_CLIENT_VERSION]?: MCP_CLIENT_VERSION_TYPE;
  [MCP_LIFECYCLE_PHASE]?: MCP_LIFECYCLE_PHASE_TYPE;
  [MCP_LOGGING_DATA_TYPE]?: MCP_LOGGING_DATA_TYPE_TYPE;
  [MCP_LOGGING_LEVEL]?: MCP_LOGGING_LEVEL_TYPE;
  [MCP_LOGGING_LOGGER]?: MCP_LOGGING_LOGGER_TYPE;
  [MCP_LOGGING_MESSAGE]?: MCP_LOGGING_MESSAGE_TYPE;
  [MCP_METHOD_NAME]?: MCP_METHOD_NAME_TYPE;
  [MCP_PROGRESS_CURRENT]?: MCP_PROGRESS_CURRENT_TYPE;
  [MCP_PROGRESS_MESSAGE]?: MCP_PROGRESS_MESSAGE_TYPE;
  [MCP_PROGRESS_PERCENTAGE]?: MCP_PROGRESS_PERCENTAGE_TYPE;
  [MCP_PROGRESS_TOKEN]?: MCP_PROGRESS_TOKEN_TYPE;
  [MCP_PROGRESS_TOTAL]?: MCP_PROGRESS_TOTAL_TYPE;
  [MCP_PROMPT_NAME]?: MCP_PROMPT_NAME_TYPE;
  [MCP_PROMPT_RESULT_DESCRIPTION]?: MCP_PROMPT_RESULT_DESCRIPTION_TYPE;
  [MCP_PROMPT_RESULT_MESSAGE_CONTENT]?: MCP_PROMPT_RESULT_MESSAGE_CONTENT_TYPE;
  [MCP_PROMPT_RESULT_MESSAGE_COUNT]?: MCP_PROMPT_RESULT_MESSAGE_COUNT_TYPE;
  [MCP_PROMPT_RESULT_MESSAGE_ROLE]?: MCP_PROMPT_RESULT_MESSAGE_ROLE_TYPE;
  [MCP_PROTOCOL_READY]?: MCP_PROTOCOL_READY_TYPE;
  [MCP_PROTOCOL_VERSION]?: MCP_PROTOCOL_VERSION_TYPE;
  [MCP_REQUEST_ARGUMENT_KEY]?: MCP_REQUEST_ARGUMENT_KEY_TYPE;
  [MCP_REQUEST_ARGUMENT_NAME]?: MCP_REQUEST_ARGUMENT_NAME_TYPE;
  [MCP_REQUEST_ARGUMENT_URI]?: MCP_REQUEST_ARGUMENT_URI_TYPE;
  [MCP_REQUEST_ID]?: MCP_REQUEST_ID_TYPE;
  [MCP_RESOURCE_PROTOCOL]?: MCP_RESOURCE_PROTOCOL_TYPE;
  [MCP_RESOURCE_URI]?: MCP_RESOURCE_URI_TYPE;
  [MCP_SERVER_NAME]?: MCP_SERVER_NAME_TYPE;
  [MCP_SERVER_TITLE]?: MCP_SERVER_TITLE_TYPE;
  [MCP_SERVER_VERSION]?: MCP_SERVER_VERSION_TYPE;
  [MCP_SESSION_ID]?: MCP_SESSION_ID_TYPE;
  [MCP_TOOL_NAME]?: MCP_TOOL_NAME_TYPE;
  [MCP_TOOL_RESULT_CONTENT]?: MCP_TOOL_RESULT_CONTENT_TYPE;
  [MCP_TOOL_RESULT_CONTENT_COUNT]?: MCP_TOOL_RESULT_CONTENT_COUNT_TYPE;
  [MCP_TOOL_RESULT_IS_ERROR]?: MCP_TOOL_RESULT_IS_ERROR_TYPE;
  [MCP_TRANSPORT]?: MCP_TRANSPORT_TYPE;
  [MDC_KEY]?: MDC_KEY_TYPE;
  [MESSAGING_BATCH_MESSAGE_COUNT]?: MESSAGING_BATCH_MESSAGE_COUNT_TYPE;
  [MESSAGING_DESTINATION_CONNECTION]?: MESSAGING_DESTINATION_CONNECTION_TYPE;
  [MESSAGING_DESTINATION_NAME]?: MESSAGING_DESTINATION_NAME_TYPE;
  [MESSAGING_MESSAGE_BODY_SIZE]?: MESSAGING_MESSAGE_BODY_SIZE_TYPE;
  [MESSAGING_MESSAGE_CONVERSATION_ID]?: MESSAGING_MESSAGE_CONVERSATION_ID_TYPE;
  [MESSAGING_MESSAGE_ENVELOPE_SIZE]?: MESSAGING_MESSAGE_ENVELOPE_SIZE_TYPE;
  [MESSAGING_MESSAGE_ID]?: MESSAGING_MESSAGE_ID_TYPE;
  [MESSAGING_MESSAGE_RECEIVE_LATENCY]?: MESSAGING_MESSAGE_RECEIVE_LATENCY_TYPE;
  [MESSAGING_MESSAGE_RETRY_COUNT]?: MESSAGING_MESSAGE_RETRY_COUNT_TYPE;
  [MESSAGING_OPERATION_NAME]?: MESSAGING_OPERATION_NAME_TYPE;
  [MESSAGING_OPERATION_TYPE]?: MESSAGING_OPERATION_TYPE_TYPE;
  [MESSAGING_RABBITMQ_DESTINATION_ROUTING_KEY]?: MESSAGING_RABBITMQ_DESTINATION_ROUTING_KEY_TYPE;
  [MESSAGING_SYSTEM]?: MESSAGING_SYSTEM_TYPE;
  [METHOD]?: METHOD_TYPE;
  [MIDDLEWARE_NAME]?: MIDDLEWARE_NAME_TYPE;
  [NAVIGATION_TYPE]?: NAVIGATION_TYPE_TYPE;
  [NEL_ELAPSED_TIME]?: NEL_ELAPSED_TIME_TYPE;
  [NEL_PHASE]?: NEL_PHASE_TYPE;
  [NEL_REFERRER]?: NEL_REFERRER_TYPE;
  [NEL_SAMPLING_FUNCTION]?: NEL_SAMPLING_FUNCTION_TYPE;
  [NEL_TYPE]?: NEL_TYPE_TYPE;
  [NETWORK_CONNECTION_EFFECTIVE_TYPE]?: NETWORK_CONNECTION_EFFECTIVE_TYPE_TYPE;
  [NETWORK_CONNECTION_RTT]?: NETWORK_CONNECTION_RTT_TYPE;
  [NETWORK_CONNECTION_TYPE]?: NETWORK_CONNECTION_TYPE_TYPE;
  [NETWORK_LOCAL_ADDRESS]?: NETWORK_LOCAL_ADDRESS_TYPE;
  [NETWORK_LOCAL_PORT]?: NETWORK_LOCAL_PORT_TYPE;
  [NETWORK_PEER_ADDRESS]?: NETWORK_PEER_ADDRESS_TYPE;
  [NETWORK_PEER_PORT]?: NETWORK_PEER_PORT_TYPE;
  [NETWORK_PROTOCOL_NAME]?: NETWORK_PROTOCOL_NAME_TYPE;
  [NETWORK_PROTOCOL_VERSION]?: NETWORK_PROTOCOL_VERSION_TYPE;
  [NETWORK_TRANSPORT]?: NETWORK_TRANSPORT_TYPE;
  [NETWORK_TYPE]?: NETWORK_TYPE_TYPE;
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
  [OS_BUILD]?: OS_BUILD_TYPE;
  [OS_BUILD_ID]?: OS_BUILD_ID_TYPE;
  [OS_DESCRIPTION]?: OS_DESCRIPTION_TYPE;
  [OS_KERNEL_VERSION]?: OS_KERNEL_VERSION_TYPE;
  [OS_NAME]?: OS_NAME_TYPE;
  [OS_RAW_DESCRIPTION]?: OS_RAW_DESCRIPTION_TYPE;
  [OS_ROOTED]?: OS_ROOTED_TYPE;
  [OS_THEME]?: OS_THEME_TYPE;
  [OS_TYPE]?: OS_TYPE_TYPE;
  [OS_VERSION]?: OS_VERSION_TYPE;
  [OTEL_KIND]?: OTEL_KIND_TYPE;
  [OTEL_SCOPE_NAME]?: OTEL_SCOPE_NAME_TYPE;
  [OTEL_SCOPE_VERSION]?: OTEL_SCOPE_VERSION_TYPE;
  [OTEL_STATUS_CODE]?: OTEL_STATUS_CODE_TYPE;
  [OTEL_STATUS_DESCRIPTION]?: OTEL_STATUS_DESCRIPTION_TYPE;
  [PARAMS_KEY]?: PARAMS_KEY_TYPE;
  [PERFORMANCE_ACTIVATIONSTART]?: PERFORMANCE_ACTIVATIONSTART_TYPE;
  [PERFORMANCE_TIMEORIGIN]?: PERFORMANCE_TIMEORIGIN_TYPE;
  [PREVIOUS_ROUTE]?: PREVIOUS_ROUTE_TYPE;
  [PROCESS_COMMAND_ARGS]?: PROCESS_COMMAND_ARGS_TYPE;
  [PROCESS_EXECUTABLE_NAME]?: PROCESS_EXECUTABLE_NAME_TYPE;
  [PROCESS_PID]?: PROCESS_PID_TYPE;
  [PROCESS_RUNTIME_DESCRIPTION]?: PROCESS_RUNTIME_DESCRIPTION_TYPE;
  [PROCESS_RUNTIME_ENGINE_NAME]?: PROCESS_RUNTIME_ENGINE_NAME_TYPE;
  [PROCESS_RUNTIME_ENGINE_VERSION]?: PROCESS_RUNTIME_ENGINE_VERSION_TYPE;
  [PROCESS_RUNTIME_NAME]?: PROCESS_RUNTIME_NAME_TYPE;
  [PROCESS_RUNTIME_VERSION]?: PROCESS_RUNTIME_VERSION_TYPE;
  [QUERY_KEY]?: QUERY_KEY_TYPE;
  [REACT_VERSION]?: REACT_VERSION_TYPE;
  [RELEASE]?: RELEASE_TYPE;
  [REMIX_ACTION_FORM_DATA_KEY]?: REMIX_ACTION_FORM_DATA_KEY_TYPE;
  [REPLAY_ID]?: REPLAY_ID_TYPE;
  [RESOURCE_DEPLOYMENT_ENVIRONMENT]?: RESOURCE_DEPLOYMENT_ENVIRONMENT_TYPE;
  [RESOURCE_DEPLOYMENT_ENVIRONMENT_NAME]?: RESOURCE_DEPLOYMENT_ENVIRONMENT_NAME_TYPE;
  [RESOURCE_RENDER_BLOCKING_STATUS]?: RESOURCE_RENDER_BLOCKING_STATUS_TYPE;
  [ROUTE]?: ROUTE_TYPE;
  [RPC_GRPC_STATUS_CODE]?: RPC_GRPC_STATUS_CODE_TYPE;
  [RPC_METHOD]?: RPC_METHOD_TYPE;
  [RPC_RESPONSE_STATUS_CODE]?: RPC_RESPONSE_STATUS_CODE_TYPE;
  [RPC_SERVICE]?: RPC_SERVICE_TYPE;
  [RUNTIME_BUILD]?: RUNTIME_BUILD_TYPE;
  [RUNTIME_NAME]?: RUNTIME_NAME_TYPE;
  [RUNTIME_RAW_DESCRIPTION]?: RUNTIME_RAW_DESCRIPTION_TYPE;
  [RUNTIME_VERSION]?: RUNTIME_VERSION_TYPE;
  [SCORE_KEY]?: SCORE_KEY_TYPE;
  [SCORE_RATIO_KEY]?: SCORE_RATIO_KEY_TYPE;
  [SCORE_TOTAL]?: SCORE_TOTAL_TYPE;
  [SCORE_WEIGHT_KEY]?: SCORE_WEIGHT_KEY_TYPE;
  [SENTRY_ACTION]?: SENTRY_ACTION_TYPE;
  [SENTRY_BROWSER_NAME]?: SENTRY_BROWSER_NAME_TYPE;
  [SENTRY_BROWSER_VERSION]?: SENTRY_BROWSER_VERSION_TYPE;
  [SENTRY_CANCELLATION_REASON]?: SENTRY_CANCELLATION_REASON_TYPE;
  [SENTRY_CATEGORY]?: SENTRY_CATEGORY_TYPE;
  [SENTRY_CLIENT_SAMPLE_RATE]?: SENTRY_CLIENT_SAMPLE_RATE_TYPE;
  [SENTRY_DESCRIPTION]?: SENTRY_DESCRIPTION_TYPE;
  [SENTRY_DIST]?: SENTRY_DIST_TYPE;
  [SENTRY_DOMAIN]?: SENTRY_DOMAIN_TYPE;
  [SENTRY_DSC_ENVIRONMENT]?: SENTRY_DSC_ENVIRONMENT_TYPE;
  [SENTRY_DSC_PROJECT_ID]?: SENTRY_DSC_PROJECT_ID_TYPE;
  [SENTRY_DSC_PUBLIC_KEY]?: SENTRY_DSC_PUBLIC_KEY_TYPE;
  [SENTRY_DSC_RELEASE]?: SENTRY_DSC_RELEASE_TYPE;
  [SENTRY_DSC_SAMPLED]?: SENTRY_DSC_SAMPLED_TYPE;
  [SENTRY_DSC_SAMPLE_RATE]?: SENTRY_DSC_SAMPLE_RATE_TYPE;
  [SENTRY_DSC_TRACE_ID]?: SENTRY_DSC_TRACE_ID_TYPE;
  [SENTRY_DSC_TRANSACTION]?: SENTRY_DSC_TRANSACTION_TYPE;
  [SENTRY_ENVIRONMENT]?: SENTRY_ENVIRONMENT_TYPE;
  [SENTRY_EXCLUSIVE_TIME]?: SENTRY_EXCLUSIVE_TIME_TYPE;
  [SENTRY_GRAPHQL_OPERATION]?: SENTRY_GRAPHQL_OPERATION_TYPE;
  [SENTRY_GROUP]?: SENTRY_GROUP_TYPE;
  [SENTRY_HTTP_PREFETCH]?: SENTRY_HTTP_PREFETCH_TYPE;
  [SENTRY_IDLE_SPAN_FINISH_REASON]?: SENTRY_IDLE_SPAN_FINISH_REASON_TYPE;
  [SENTRY_IS_REMOTE]?: SENTRY_IS_REMOTE_TYPE;
  [SENTRY_KIND]?: SENTRY_KIND_TYPE;
  [SENTRY_MAIN_THREAD]?: SENTRY_MAIN_THREAD_TYPE;
  [SENTRY_MESSAGE_PARAMETER_KEY]?: SENTRY_MESSAGE_PARAMETER_KEY_TYPE;
  [SENTRY_MESSAGE_TEMPLATE]?: SENTRY_MESSAGE_TEMPLATE_TYPE;
  [SENTRY_MOBILE]?: SENTRY_MOBILE_TYPE;
  [SENTRY_MODULE_KEY]?: SENTRY_MODULE_KEY_TYPE;
  [SENTRY_NEXTJS_SSR_FUNCTION_ROUTE]?: SENTRY_NEXTJS_SSR_FUNCTION_ROUTE_TYPE;
  [SENTRY_NEXTJS_SSR_FUNCTION_TYPE]?: SENTRY_NEXTJS_SSR_FUNCTION_TYPE_TYPE;
  [SENTRY_NORMALIZED_DB_QUERY]?: SENTRY_NORMALIZED_DB_QUERY_TYPE;
  [SENTRY_NORMALIZED_DB_QUERY_HASH]?: SENTRY_NORMALIZED_DB_QUERY_HASH_TYPE;
  [SENTRY_NORMALIZED_DESCRIPTION]?: SENTRY_NORMALIZED_DESCRIPTION_TYPE;
  [SENTRY_OBSERVED_TIMESTAMP_NANOS]?: SENTRY_OBSERVED_TIMESTAMP_NANOS_TYPE;
  [SENTRY_OP]?: SENTRY_OP_TYPE;
  [SENTRY_ORIGIN]?: SENTRY_ORIGIN_TYPE;
  [SENTRY_PLATFORM]?: SENTRY_PLATFORM_TYPE;
  [SENTRY_PROFILER_ID]?: SENTRY_PROFILER_ID_TYPE;
  [SENTRY_PROFILE_ID]?: SENTRY_PROFILE_ID_TYPE;
  [SENTRY_RELEASE]?: SENTRY_RELEASE_TYPE;
  [SENTRY_REPLAY_ID]?: SENTRY_REPLAY_ID_TYPE;
  [SENTRY_REPLAY_IS_BUFFERING]?: SENTRY_REPLAY_IS_BUFFERING_TYPE;
  [SENTRY_REPORT_EVENT]?: SENTRY_REPORT_EVENT_TYPE;
  [SENTRY_SDK_INTEGRATIONS]?: SENTRY_SDK_INTEGRATIONS_TYPE;
  [SENTRY_SDK_NAME]?: SENTRY_SDK_NAME_TYPE;
  [SENTRY_SDK_VERSION]?: SENTRY_SDK_VERSION_TYPE;
  [SENTRY_SEGMENT_ID]?: SENTRY_SEGMENT_ID_TYPE;
  [_SENTRY_SEGMENT_ID]?: _SENTRY_SEGMENT_ID_TYPE;
  [SENTRY_SEGMENT_NAME]?: SENTRY_SEGMENT_NAME_TYPE;
  [SENTRY_SERVER_SAMPLE_RATE]?: SENTRY_SERVER_SAMPLE_RATE_TYPE;
  [SENTRY_SOURCE]?: SENTRY_SOURCE_TYPE;
  [SENTRY_SPAN_SOURCE]?: SENTRY_SPAN_SOURCE_TYPE;
  [SENTRY_STATUS]?: SENTRY_STATUS_TYPE;
  [SENTRY_STATUS_CODE]?: SENTRY_STATUS_CODE_TYPE;
  [SENTRY_STATUS_MESSAGE]?: SENTRY_STATUS_MESSAGE_TYPE;
  [SENTRY_THREAD_ID]?: SENTRY_THREAD_ID_TYPE;
  [SENTRY_TIMESTAMP_SEQUENCE]?: SENTRY_TIMESTAMP_SEQUENCE_TYPE;
  [SENTRY_TRACE_LIFECYCLE]?: SENTRY_TRACE_LIFECYCLE_TYPE;
  [SENTRY_TRACE_PARENT_SPAN_ID]?: SENTRY_TRACE_PARENT_SPAN_ID_TYPE;
  [SENTRY_TRACE_STATUS]?: SENTRY_TRACE_STATUS_TYPE;
  [SENTRY_TRANSACTION]?: SENTRY_TRANSACTION_TYPE;
  [SENTRY_USER_EMAIL]?: SENTRY_USER_EMAIL_TYPE;
  [SENTRY_USER_GEO_CITY]?: SENTRY_USER_GEO_CITY_TYPE;
  [SENTRY_USER_GEO_COUNTRY_CODE]?: SENTRY_USER_GEO_COUNTRY_CODE_TYPE;
  [SENTRY_USER_GEO_REGION]?: SENTRY_USER_GEO_REGION_TYPE;
  [SENTRY_USER_GEO_SUBDIVISION]?: SENTRY_USER_GEO_SUBDIVISION_TYPE;
  [SENTRY_USER_ID]?: SENTRY_USER_ID_TYPE;
  [SENTRY_USER_IP]?: SENTRY_USER_IP_TYPE;
  [SENTRY_USER_USERNAME]?: SENTRY_USER_USERNAME_TYPE;
  [SERVER_ADDRESS]?: SERVER_ADDRESS_TYPE;
  [SERVER_PORT]?: SERVER_PORT_TYPE;
  [SERVICE_NAME]?: SERVICE_NAME_TYPE;
  [SERVICE_VERSION]?: SERVICE_VERSION_TYPE;
  [SESSION_ID]?: SESSION_ID_TYPE;
  [STALL_PERCENTAGE]?: STALL_PERCENTAGE_TYPE;
  [STALL_TOTAL_TIME]?: STALL_TOTAL_TIME_TYPE;
  [STATE_TYPE]?: STATE_TYPE_TYPE;
  [THREAD_ID]?: THREAD_ID_TYPE;
  [THREAD_NAME]?: THREAD_NAME_TYPE;
  [TIMBER_TAG]?: TIMBER_TAG_TYPE;
  [TIME_TO_FULL_DISPLAY]?: TIME_TO_FULL_DISPLAY_TYPE;
  [TIME_TO_INITIAL_DISPLAY]?: TIME_TO_INITIAL_DISPLAY_TYPE;
  [TRANSACTION]?: TRANSACTION_TYPE;
  [TRPC_PROCEDURE_PATH]?: TRPC_PROCEDURE_PATH_TYPE;
  [TRPC_PROCEDURE_TYPE]?: TRPC_PROCEDURE_TYPE_TYPE;
  [TTFB]?: TTFB_TYPE;
  [TTFB_REQUESTTIME]?: TTFB_REQUESTTIME_TYPE;
  [TYPE]?: TYPE_TYPE;
  [UI_COMPONENT_NAME]?: UI_COMPONENT_NAME_TYPE;
  [UI_CONTRIBUTES_TO_TTFD]?: UI_CONTRIBUTES_TO_TTFD_TYPE;
  [UI_CONTRIBUTES_TO_TTID]?: UI_CONTRIBUTES_TO_TTID_TYPE;
  [UI_ELEMENT_HEIGHT]?: UI_ELEMENT_HEIGHT_TYPE;
  [UI_ELEMENT_ID]?: UI_ELEMENT_ID_TYPE;
  [UI_ELEMENT_IDENTIFIER]?: UI_ELEMENT_IDENTIFIER_TYPE;
  [UI_ELEMENT_LOAD_TIME]?: UI_ELEMENT_LOAD_TIME_TYPE;
  [UI_ELEMENT_PAINT_TYPE]?: UI_ELEMENT_PAINT_TYPE_TYPE;
  [UI_ELEMENT_RENDER_TIME]?: UI_ELEMENT_RENDER_TIME_TYPE;
  [UI_ELEMENT_TYPE]?: UI_ELEMENT_TYPE_TYPE;
  [UI_ELEMENT_URL]?: UI_ELEMENT_URL_TYPE;
  [UI_ELEMENT_WIDTH]?: UI_ELEMENT_WIDTH_TYPE;
  [URL]?: URL_TYPE;
  [URL_DOMAIN]?: URL_DOMAIN_TYPE;
  [URL_FRAGMENT]?: URL_FRAGMENT_TYPE;
  [URL_FULL]?: URL_FULL_TYPE;
  [URL_PATH]?: URL_PATH_TYPE;
  [URL_PATH_PARAMETER_KEY]?: URL_PATH_PARAMETER_KEY_TYPE;
  [URL_PORT]?: URL_PORT_TYPE;
  [URL_QUERY]?: URL_QUERY_TYPE;
  [URL_SAME_ORIGIN]?: URL_SAME_ORIGIN_TYPE;
  [URL_SCHEME]?: URL_SCHEME_TYPE;
  [URL_TEMPLATE]?: URL_TEMPLATE_TYPE;
  [USER_AGENT_ORIGINAL]?: USER_AGENT_ORIGINAL_TYPE;
  [USER_EMAIL]?: USER_EMAIL_TYPE;
  [USER_FULL_NAME]?: USER_FULL_NAME_TYPE;
  [USER_GEO_CITY]?: USER_GEO_CITY_TYPE;
  [USER_GEO_COUNTRY_CODE]?: USER_GEO_COUNTRY_CODE_TYPE;
  [USER_GEO_REGION]?: USER_GEO_REGION_TYPE;
  [USER_GEO_SUBDIVISION]?: USER_GEO_SUBDIVISION_TYPE;
  [USER_HASH]?: USER_HASH_TYPE;
  [USER_ID]?: USER_ID_TYPE;
  [USER_IP_ADDRESS]?: USER_IP_ADDRESS_TYPE;
  [USER_NAME]?: USER_NAME_TYPE;
  [USER_ROLES]?: USER_ROLES_TYPE;
  [VERCEL_BRANCH]?: VERCEL_BRANCH_TYPE;
  [VERCEL_BUILD_ID]?: VERCEL_BUILD_ID_TYPE;
  [VERCEL_DEPLOYMENT_ID]?: VERCEL_DEPLOYMENT_ID_TYPE;
  [VERCEL_DESTINATION]?: VERCEL_DESTINATION_TYPE;
  [VERCEL_EDGE_TYPE]?: VERCEL_EDGE_TYPE_TYPE;
  [VERCEL_ENTRYPOINT]?: VERCEL_ENTRYPOINT_TYPE;
  [VERCEL_EXECUTION_REGION]?: VERCEL_EXECUTION_REGION_TYPE;
  [VERCEL_ID]?: VERCEL_ID_TYPE;
  [VERCEL_JA3_DIGEST]?: VERCEL_JA3_DIGEST_TYPE;
  [VERCEL_JA4_DIGEST]?: VERCEL_JA4_DIGEST_TYPE;
  [VERCEL_LOG_TYPE]?: VERCEL_LOG_TYPE_TYPE;
  [VERCEL_PATH]?: VERCEL_PATH_TYPE;
  [VERCEL_PROJECT_ID]?: VERCEL_PROJECT_ID_TYPE;
  [VERCEL_PROJECT_NAME]?: VERCEL_PROJECT_NAME_TYPE;
  [VERCEL_PROXY_CACHE_ID]?: VERCEL_PROXY_CACHE_ID_TYPE;
  [VERCEL_PROXY_CLIENT_IP]?: VERCEL_PROXY_CLIENT_IP_TYPE;
  [VERCEL_PROXY_HOST]?: VERCEL_PROXY_HOST_TYPE;
  [VERCEL_PROXY_LAMBDA_REGION]?: VERCEL_PROXY_LAMBDA_REGION_TYPE;
  [VERCEL_PROXY_METHOD]?: VERCEL_PROXY_METHOD_TYPE;
  [VERCEL_PROXY_PATH]?: VERCEL_PROXY_PATH_TYPE;
  [VERCEL_PROXY_PATH_TYPE]?: VERCEL_PROXY_PATH_TYPE_TYPE;
  [VERCEL_PROXY_PATH_TYPE_VARIANT]?: VERCEL_PROXY_PATH_TYPE_VARIANT_TYPE;
  [VERCEL_PROXY_REFERER]?: VERCEL_PROXY_REFERER_TYPE;
  [VERCEL_PROXY_REGION]?: VERCEL_PROXY_REGION_TYPE;
  [VERCEL_PROXY_RESPONSE_BYTE_SIZE]?: VERCEL_PROXY_RESPONSE_BYTE_SIZE_TYPE;
  [VERCEL_PROXY_SCHEME]?: VERCEL_PROXY_SCHEME_TYPE;
  [VERCEL_PROXY_STATUS_CODE]?: VERCEL_PROXY_STATUS_CODE_TYPE;
  [VERCEL_PROXY_TIMESTAMP]?: VERCEL_PROXY_TIMESTAMP_TYPE;
  [VERCEL_PROXY_USER_AGENT]?: VERCEL_PROXY_USER_AGENT_TYPE;
  [VERCEL_PROXY_VERCEL_CACHE]?: VERCEL_PROXY_VERCEL_CACHE_TYPE;
  [VERCEL_PROXY_VERCEL_ID]?: VERCEL_PROXY_VERCEL_ID_TYPE;
  [VERCEL_PROXY_WAF_ACTION]?: VERCEL_PROXY_WAF_ACTION_TYPE;
  [VERCEL_PROXY_WAF_RULE_ID]?: VERCEL_PROXY_WAF_RULE_ID_TYPE;
  [VERCEL_REQUEST_ID]?: VERCEL_REQUEST_ID_TYPE;
  [VERCEL_SOURCE]?: VERCEL_SOURCE_TYPE;
  [VERCEL_STATUS_CODE]?: VERCEL_STATUS_CODE_TYPE;
} & Record<string, AttributeValue | undefined>;
