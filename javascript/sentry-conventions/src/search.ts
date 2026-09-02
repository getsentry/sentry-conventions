// This is an auto-generated file. Do not edit!

import type * as attributes from './attributes';

export type AttributeSearchType = attributes.AttributeType | attributes.SearchAliasType;

export interface AttributeSearchMetadata {
  /** The original attribute key before it is exposed under its search name */
  canonicalName: attributes.AttributeName;
  /** The type exposed by Sentry search */
  type: AttributeSearchType;
  /** A description of the attribute */
  brief: string;
  /** Whether the attribute is internal to Sentry */
  internal?: true;
  /** Every key under which the attribute's value is readable, preferred key first */
  deprecationChain: readonly string[];
}

/**
 * Search name for {@link attributes.SENTRY_ACTION}. `action`
 *
 * @deprecated Use {@link SEARCH_SPAN_ACTION} (`span.action`) instead
 */
export const SEARCH_ACTION = 'action';

/**
 * Search name for {@link attributes.ADDRESS}. `address`
 *
 * @deprecated Use {@link SEARCH_SERVER_ADDRESS} (`server.address`) instead
 */
export const SEARCH_ADDRESS = 'address';

/**
 * Search name for {@link attributes.AI_CITATIONS}. `ai.citations`
 *
 * @deprecated
 */
export const SEARCH_AI_CITATIONS = 'ai.citations';

/**
 * Search name for {@link attributes.AI_COMPLETION_TOKENS_USED}. `ai.completion_tokens.used`
 *
 * @deprecated Use {@link SEARCH_GEN__AI_USAGE_OUTPUT__TOKENS} (`gen_ai.usage.output_tokens`) instead
 */
export const SEARCH_AI_COMPLETION__TOKENS_USED = 'ai.completion_tokens.used';

/**
 * Search name for {@link attributes.AI_DOCUMENTS}. `ai.documents`
 *
 * @deprecated
 */
export const SEARCH_AI_DOCUMENTS = 'ai.documents';

/**
 * Search name for {@link attributes.AI_FINISH_REASON}. `ai.finish_reason`
 *
 * @deprecated Use {@link SEARCH_GEN__AI_RESPONSE_FINISH__REASONS} (`gen_ai.response.finish_reasons`) instead
 */
export const SEARCH_AI_FINISH__REASON = 'ai.finish_reason';

/**
 * Search name for {@link attributes.AI_FREQUENCY_PENALTY}. `ai.frequency_penalty`
 *
 * @deprecated Use {@link SEARCH_GEN__AI_REQUEST_FREQUENCY__PENALTY} (`gen_ai.request.frequency_penalty`) instead
 */
export const SEARCH_AI_FREQUENCY__PENALTY = 'ai.frequency_penalty';

/**
 * Search name for {@link attributes.AI_FUNCTION_CALL}. `ai.function_call`
 *
 * @deprecated Use {@link SEARCH_GEN__AI_TOOL_NAME} (`gen_ai.tool.name`) instead
 */
export const SEARCH_AI_FUNCTION__CALL = 'ai.function_call';

/**
 * Search name for {@link attributes.AI_GENERATION_ID}. `ai.generation_id`
 *
 * @deprecated Use {@link SEARCH_GEN__AI_RESPONSE_ID} (`gen_ai.response.id`) instead
 */
export const SEARCH_AI_GENERATION__ID = 'ai.generation_id';

/**
 * Search name for {@link attributes.AI_INPUT_MESSAGES}. `ai.input_messages`
 *
 * @deprecated Use {@link SEARCH_GEN__AI_INPUT_MESSAGES} (`gen_ai.input.messages`) instead
 */
export const SEARCH_AI_INPUT__MESSAGES = 'ai.input_messages';

/**
 * Search name for {@link attributes.AI_IS_SEARCH_REQUIRED}. `ai.is_search_required`
 *
 * @deprecated
 */
export const SEARCH_AI_IS__SEARCH__REQUIRED = 'ai.is_search_required';

/**
 * Search name for {@link attributes.AI_METADATA}. `ai.metadata`
 *
 * @deprecated
 */
export const SEARCH_AI_METADATA = 'ai.metadata';

/**
 * Search name for {@link attributes.AI_MODEL_ID}. `ai.model.id`
 *
 * @deprecated Use {@link SEARCH_GEN__AI_REQUEST_MODEL} (`gen_ai.request.model`) instead
 */
export const SEARCH_AI_MODEL_ID = 'ai.model.id';

/**
 * Search name for {@link attributes.AI_MODEL_PROVIDER}. `ai.model.provider`
 *
 * @deprecated Use {@link SEARCH_GEN__AI_PROVIDER_NAME} (`gen_ai.provider.name`) instead
 */
export const SEARCH_AI_MODEL_PROVIDER = 'ai.model.provider';

/**
 * Search name for {@link attributes._AI_MODEL_ID}. `ai.model_id`
 *
 * @deprecated Use {@link SEARCH_GEN__AI_REQUEST_MODEL} (`gen_ai.request.model`) instead
 */
export const SEARCH_AI_MODEL__ID = 'ai.model_id';

/**
 * Search name for {@link attributes.AI_PIPELINE_NAME}. `ai.pipeline.name`
 *
 * @deprecated Use {@link SEARCH_GEN__AI_PIPELINE_NAME} (`gen_ai.pipeline.name`) instead
 */
export const SEARCH_AI_PIPELINE_NAME = 'ai.pipeline.name';

/**
 * Search name for {@link attributes.AI_PREAMBLE}. `ai.preamble`
 *
 * @deprecated Use {@link SEARCH_GEN__AI_SYSTEM__INSTRUCTIONS} (`gen_ai.system_instructions`) instead
 */
export const SEARCH_AI_PREAMBLE = 'ai.preamble';

/**
 * Search name for {@link attributes.AI_PRESENCE_PENALTY}. `ai.presence_penalty`
 *
 * @deprecated Use {@link SEARCH_GEN__AI_REQUEST_PRESENCE__PENALTY} (`gen_ai.request.presence_penalty`) instead
 */
export const SEARCH_AI_PRESENCE__PENALTY = 'ai.presence_penalty';

/**
 * Search name for {@link attributes.AI_PROMPT}. `ai.prompt`
 *
 * @deprecated Use {@link SEARCH_GEN__AI_INPUT_MESSAGES} (`gen_ai.input.messages`) instead
 */
export const SEARCH_AI_PROMPT = 'ai.prompt';

/**
 * Search name for {@link attributes.AI_PROMPT_MESSAGES}. `ai.prompt.messages`
 *
 * @deprecated Use {@link SEARCH_GEN__AI_INPUT_MESSAGES} (`gen_ai.input.messages`) instead
 */
export const SEARCH_AI_PROMPT_MESSAGES = 'ai.prompt.messages';

/**
 * Search name for {@link attributes.AI_PROMPT_TOOLS}. `ai.prompt.tools`
 *
 * @deprecated Use {@link SEARCH_GEN__AI_TOOL_DEFINITIONS} (`gen_ai.tool.definitions`) instead
 */
export const SEARCH_AI_PROMPT_TOOLS = 'ai.prompt.tools';

/**
 * Search name for {@link attributes.AI_PROMPT_TOKENS_USED}. `ai.prompt_tokens.used`
 *
 * @deprecated Use {@link SEARCH_GEN__AI_USAGE_INPUT__TOKENS} (`gen_ai.usage.input_tokens`) instead
 */
export const SEARCH_AI_PROMPT__TOKENS_USED = 'ai.prompt_tokens.used';

/**
 * Search name for {@link attributes.AI_RAW_PROMPTING}. `ai.raw_prompting`
 *
 * @deprecated
 */
export const SEARCH_AI_RAW__PROMPTING = 'ai.raw_prompting';

/**
 * Search name for {@link attributes.AI_RESPONSE_ID}. `ai.response.id`
 *
 * @deprecated Use {@link SEARCH_GEN__AI_RESPONSE_ID} (`gen_ai.response.id`) instead
 */
export const SEARCH_AI_RESPONSE_ID = 'ai.response.id';

/**
 * Search name for {@link attributes.AI_RESPONSE_MODEL}. `ai.response.model`
 *
 * @deprecated Use {@link SEARCH_GEN__AI_RESPONSE_MODEL} (`gen_ai.response.model`) instead
 */
export const SEARCH_AI_RESPONSE_MODEL = 'ai.response.model';

/**
 * Search name for {@link attributes.AI_RESPONSE_OBJECT}. `ai.response.object`
 *
 * @deprecated
 */
export const SEARCH_AI_RESPONSE_OBJECT = 'ai.response.object';

/**
 * Search name for {@link attributes.AI_RESPONSE_TEXT}. `ai.response.text`
 *
 * @deprecated Use {@link SEARCH_GEN__AI_OUTPUT_MESSAGES} (`gen_ai.output.messages`) instead
 */
export const SEARCH_AI_RESPONSE_TEXT = 'ai.response.text';

/**
 * Search name for {@link attributes.AI_RESPONSE_TIMESTAMP}. `ai.response.timestamp`
 *
 * @deprecated
 */
export const SEARCH_AI_RESPONSE_TIMESTAMP = 'ai.response.timestamp';

/**
 * Search name for {@link attributes.AI_RESPONSE_TOOLCALLS}. `ai.response.toolCalls`
 *
 * @deprecated Use {@link SEARCH_GEN__AI_OUTPUT_MESSAGES} (`gen_ai.output.messages`) instead
 */
export const SEARCH_AI_RESPONSE_TOOLCALLS = 'ai.response.toolCalls';

/**
 * Search name for {@link attributes.AI_RESPONSE_FORMAT}. `ai.response_format`
 *
 * @deprecated
 */
export const SEARCH_AI_RESPONSE__FORMAT = 'ai.response_format';

/**
 * Search name for {@link attributes.AI_RESPONSES}. `ai.responses`
 *
 * @deprecated Use {@link SEARCH_GEN__AI_OUTPUT_MESSAGES} (`gen_ai.output.messages`) instead
 */
export const SEARCH_AI_RESPONSES = 'ai.responses';

/**
 * Search name for {@link attributes.AI_SCHEMA}. `ai.schema`
 *
 * @deprecated
 */
export const SEARCH_AI_SCHEMA = 'ai.schema';

/**
 * Search name for {@link attributes.AI_SEARCH_QUERIES}. `ai.search_queries`
 *
 * @deprecated
 */
export const SEARCH_AI_SEARCH__QUERIES = 'ai.search_queries';

/**
 * Search name for {@link attributes.AI_SEARCH_RESULTS}. `ai.search_results`
 *
 * @deprecated
 */
export const SEARCH_AI_SEARCH__RESULTS = 'ai.search_results';

/**
 * Search name for {@link attributes.AI_SEED}. `ai.seed`
 *
 * @deprecated Use {@link SEARCH_GEN__AI_REQUEST_SEED} (`gen_ai.request.seed`) instead
 */
export const SEARCH_AI_SEED = 'ai.seed';

/**
 * Search name for {@link attributes.AI_STREAMING}. `ai.streaming`
 *
 * @deprecated Use {@link SEARCH_GEN__AI_RESPONSE_STREAMING} (`gen_ai.response.streaming`) instead
 */
export const SEARCH_AI_STREAMING = 'ai.streaming';

/**
 * Search name for {@link attributes.AI_TAGS}. `ai.tags`
 *
 * @deprecated
 */
export const SEARCH_AI_TAGS = 'ai.tags';

/**
 * Search name for {@link attributes.AI_TEMPERATURE}. `ai.temperature`
 *
 * @deprecated Use {@link SEARCH_GEN__AI_REQUEST_TEMPERATURE} (`gen_ai.request.temperature`) instead
 */
export const SEARCH_AI_TEMPERATURE = 'ai.temperature';

/**
 * Search name for {@link attributes.AI_TEXTS}. `ai.texts`
 *
 * @deprecated Use {@link SEARCH_GEN__AI_INPUT_MESSAGES} (`gen_ai.input.messages`) instead
 */
export const SEARCH_AI_TEXTS = 'ai.texts';

/**
 * Search name for {@link attributes.AI_TOOLCALL_ARGS}. `ai.toolCall.args`
 *
 * @deprecated Use {@link SEARCH_GEN__AI_TOOL_CALL_ARGUMENTS} (`gen_ai.tool.call.arguments`) instead
 */
export const SEARCH_AI_TOOLCALL_ARGS = 'ai.toolCall.args';

/**
 * Search name for {@link attributes.AI_TOOLCALL_RESULT}. `ai.toolCall.result`
 *
 * @deprecated Use {@link SEARCH_GEN__AI_TOOL_CALL_RESULT} (`gen_ai.tool.call.result`) instead
 */
export const SEARCH_AI_TOOLCALL_RESULT = 'ai.toolCall.result';

/**
 * Search name for {@link attributes.AI_TOOL_CALLS}. `ai.tool_calls`
 *
 * @deprecated Use {@link SEARCH_GEN__AI_OUTPUT_MESSAGES} (`gen_ai.output.messages`) instead
 */
export const SEARCH_AI_TOOL__CALLS = 'ai.tool_calls';

/**
 * Search name for {@link attributes.AI_TOOLS}. `ai.tools`
 *
 * @deprecated Use {@link SEARCH_GEN__AI_TOOL_DEFINITIONS} (`gen_ai.tool.definitions`) instead
 */
export const SEARCH_AI_TOOLS = 'ai.tools';

/**
 * Search name for {@link attributes.AI_TOP_K}. `ai.top_k`
 *
 * @deprecated Use {@link SEARCH_GEN__AI_REQUEST_TOP__K} (`gen_ai.request.top_k`) instead
 */
export const SEARCH_AI_TOP__K = 'ai.top_k';

/**
 * Search name for {@link attributes.AI_TOP_P}. `ai.top_p`
 *
 * @deprecated Use {@link SEARCH_GEN__AI_REQUEST_TOP__P} (`gen_ai.request.top_p`) instead
 */
export const SEARCH_AI_TOP__P = 'ai.top_p';

/**
 * Search name for {@link attributes.AI_TOTAL_COST}. `ai.total_cost`
 */
export const SEARCH_AI_TOTAL__COST = 'ai.total_cost';

/**
 * Search name for {@link attributes.AI_TOTAL_TOKENS_USED}. `ai.total_tokens.used`
 *
 * @deprecated Use {@link SEARCH_GEN__AI_USAGE_TOTAL__TOKENS} (`gen_ai.usage.total_tokens`) instead
 */
export const SEARCH_AI_TOTAL__TOKENS_USED = 'ai.total_tokens.used';

/**
 * Search name for {@link attributes.AI_USAGE_TOKENS}. `ai.usage.tokens`
 *
 * @deprecated Use {@link SEARCH_GEN__AI_USAGE_TOTAL__TOKENS} (`gen_ai.usage.total_tokens`) instead
 */
export const SEARCH_AI_USAGE_TOKENS = 'ai.usage.tokens';

/**
 * Search name for {@link attributes.AI_VALUES}. `ai.values`
 *
 * @deprecated
 */
export const SEARCH_AI_VALUES = 'ai.values';

/**
 * Search name for {@link attributes.AI_WARNINGS}. `ai.warnings`
 *
 * @deprecated
 */
export const SEARCH_AI_WARNINGS = 'ai.warnings';

/**
 * Search name for {@link attributes.ANGULAR_VERSION}. `angular.version`
 */
export const SEARCH_ANGULAR_VERSION = 'angular.version';

/**
 * Search name for {@link attributes.APP_APP_BUILD}. `app.app_build`
 *
 * @deprecated Use {@link SEARCH_APP_BUILD} (`app.build`) instead
 */
export const SEARCH_APP_APP__BUILD = 'app.app_build';

/**
 * Search name for {@link attributes.APP_APP_IDENTIFIER}. `app.app_identifier`
 *
 * @deprecated Use {@link SEARCH_APP_IDENTIFIER} (`app.identifier`) instead
 */
export const SEARCH_APP_APP__IDENTIFIER = 'app.app_identifier';

/**
 * Search name for {@link attributes.APP_APP_NAME}. `app.app_name`
 *
 * @deprecated Use {@link SEARCH_APP_NAME} (`app.name`) instead
 */
export const SEARCH_APP_APP__NAME = 'app.app_name';

/**
 * Search name for {@link attributes.APP_APP_START_TIME}. `app.app_start_time`
 *
 * @deprecated Use {@link SEARCH_APP_START__TIME} (`app.start_time`) instead
 */
export const SEARCH_APP_APP__START__TIME = 'app.app_start_time';

/**
 * Search name for {@link attributes.APP_APP_VERSION}. `app.app_version`
 *
 * @deprecated Use {@link SEARCH_APP_VERSION} (`app.version`) instead
 */
export const SEARCH_APP_APP__VERSION = 'app.app_version';

/**
 * Search name for {@link attributes.APP_BUILD}. `app.build`
 */
export const SEARCH_APP_BUILD = 'app.build';

/**
 * Search name for {@link attributes.APP_IDENTIFIER}. `app.identifier`
 */
export const SEARCH_APP_IDENTIFIER = 'app.identifier';

/**
 * Search name for {@link attributes.APP_IN_FOREGROUND}. `app.in_foreground`
 */
export const SEARCH_APP_IN__FOREGROUND = 'app.in_foreground';

/**
 * Search name for {@link attributes.APP_NAME}. `app.name`
 */
export const SEARCH_APP_NAME = 'app.name';

/**
 * Search name for {@link attributes.APP_START_TIME}. `app.start_time`
 */
export const SEARCH_APP_START__TIME = 'app.start_time';

/**
 * Search name for {@link attributes.APP_VERSION}. `app.version`
 */
export const SEARCH_APP_VERSION = 'app.version';

/**
 * Search name for {@link attributes.APP_VITALS_FRAMES_DELAY_VALUE}. `app.vitals.frames.delay.value`
 */
export const SEARCH_APP_VITALS_FRAMES_DELAY_VALUE = 'app.vitals.frames.delay.value';

/**
 * Search name for {@link attributes.APP_VITALS_FRAMES_FROZEN_COUNT}. `app.vitals.frames.frozen.count`
 */
export const SEARCH_APP_VITALS_FRAMES_FROZEN_COUNT = 'app.vitals.frames.frozen.count';

/**
 * Search name for {@link attributes.APP_VITALS_FRAMES_FROZEN_RATE}. `app.vitals.frames.frozen.rate`
 */
export const SEARCH_APP_VITALS_FRAMES_FROZEN_RATE = 'app.vitals.frames.frozen.rate';

/**
 * Search name for {@link attributes.APP_VITALS_FRAMES_SLOW_COUNT}. `app.vitals.frames.slow.count`
 */
export const SEARCH_APP_VITALS_FRAMES_SLOW_COUNT = 'app.vitals.frames.slow.count';

/**
 * Search name for {@link attributes.APP_VITALS_FRAMES_SLOW_RATE}. `app.vitals.frames.slow.rate`
 */
export const SEARCH_APP_VITALS_FRAMES_SLOW_RATE = 'app.vitals.frames.slow.rate';

/**
 * Search name for {@link attributes.APP_VITALS_FRAMES_TOTAL_COUNT}. `app.vitals.frames.total.count`
 */
export const SEARCH_APP_VITALS_FRAMES_TOTAL_COUNT = 'app.vitals.frames.total.count';

/**
 * Search name for {@link attributes.APP_VITALS_STALL_DURATION}. `app.vitals.stall.duration`
 */
export const SEARCH_APP_VITALS_STALL_DURATION = 'app.vitals.stall.duration';

/**
 * Search name for {@link attributes.APP_VITALS_STALL_PERCENTAGE}. `app.vitals.stall.percentage`
 */
export const SEARCH_APP_VITALS_STALL_PERCENTAGE = 'app.vitals.stall.percentage';

/**
 * Search name for {@link attributes.APP_VITALS_START_COLD_VALUE}. `app.vitals.start.cold.value`
 */
export const SEARCH_APP_VITALS_START_COLD_VALUE = 'app.vitals.start.cold.value';

/**
 * Search name for {@link attributes.APP_VITALS_START_PREWARMED}. `app.vitals.start.prewarmed`
 */
export const SEARCH_APP_VITALS_START_PREWARMED = 'app.vitals.start.prewarmed';

/**
 * Search name for {@link attributes.APP_VITALS_START_REASON}. `app.vitals.start.reason`
 */
export const SEARCH_APP_VITALS_START_REASON = 'app.vitals.start.reason';

/**
 * Search name for {@link attributes.APP_VITALS_START_SCREEN}. `app.vitals.start.screen`
 */
export const SEARCH_APP_VITALS_START_SCREEN = 'app.vitals.start.screen';

/**
 * Search name for {@link attributes.APP_VITALS_START_TYPE}. `app.vitals.start.type`
 */
export const SEARCH_APP_VITALS_START_TYPE = 'app.vitals.start.type';

/**
 * Search name for {@link attributes.APP_VITALS_START_WARM_VALUE}. `app.vitals.start.warm.value`
 */
export const SEARCH_APP_VITALS_START_WARM_VALUE = 'app.vitals.start.warm.value';

/**
 * Search name for {@link attributes.APP_VITALS_TTFD_VALUE}. `app.vitals.ttfd.value`
 */
export const SEARCH_APP_VITALS_TTFD_VALUE = 'app.vitals.ttfd.value';

/**
 * Search name for {@link attributes.APP_VITALS_TTID_VALUE}. `app.vitals.ttid.value`
 */
export const SEARCH_APP_VITALS_TTID_VALUE = 'app.vitals.ttid.value';

/**
 * Search name for {@link attributes.APP_START_COLD}. `app_start_cold`
 *
 * @deprecated Use {@link SEARCH_APP_VITALS_START_COLD_VALUE} (`app.vitals.start.cold.value`) instead
 */
export const SEARCH_APP__START__COLD = 'app_start_cold';

/**
 * Search name for {@link attributes.APP_START_TYPE}. `app_start_type`
 *
 * @deprecated Use {@link SEARCH_APP_VITALS_START_TYPE} (`app.vitals.start.type`) instead
 */
export const SEARCH_APP__START__TYPE = 'app_start_type';

/**
 * Search name for {@link attributes.APP_START_WARM}. `app_start_warm`
 *
 * @deprecated Use {@link SEARCH_APP_VITALS_START_WARM_VALUE} (`app.vitals.start.warm.value`) instead
 */
export const SEARCH_APP__START__WARM = 'app_start_warm';

/**
 * Search name for {@link attributes.ART_GC_BLOCKING_COUNT}. `art.gc.blocking_count`
 */
export const SEARCH_ART_GC_BLOCKING__COUNT = 'art.gc.blocking_count';

/**
 * Search name for {@link attributes.ART_GC_BLOCKING_TIME}. `art.gc.blocking_time`
 */
export const SEARCH_ART_GC_BLOCKING__TIME = 'art.gc.blocking_time';

/**
 * Search name for {@link attributes.ART_GC_PRE_OOME_COUNT}. `art.gc.pre_oome_count`
 */
export const SEARCH_ART_GC_PRE__OOME__COUNT = 'art.gc.pre_oome_count';

/**
 * Search name for {@link attributes.ART_GC_TOTAL_COUNT}. `art.gc.total_count`
 */
export const SEARCH_ART_GC_TOTAL__COUNT = 'art.gc.total_count';

/**
 * Search name for {@link attributes.ART_GC_TOTAL_TIME}. `art.gc.total_time`
 */
export const SEARCH_ART_GC_TOTAL__TIME = 'art.gc.total_time';

/**
 * Search name for {@link attributes.ART_GC_WAITING_TIME}. `art.gc.waiting_time`
 */
export const SEARCH_ART_GC_WAITING__TIME = 'art.gc.waiting_time';

/**
 * Search name for {@link attributes.ART_MEMORY_FREE}. `art.memory.free`
 */
export const SEARCH_ART_MEMORY_FREE = 'art.memory.free';

/**
 * Search name for {@link attributes.ART_MEMORY_FREE_UNTIL_GC}. `art.memory.free_until_gc`
 */
export const SEARCH_ART_MEMORY_FREE__UNTIL__GC = 'art.memory.free_until_gc';

/**
 * Search name for {@link attributes.ART_MEMORY_FREE_UNTIL_OOME}. `art.memory.free_until_oome`
 */
export const SEARCH_ART_MEMORY_FREE__UNTIL__OOME = 'art.memory.free_until_oome';

/**
 * Search name for {@link attributes.ART_MEMORY_MAX}. `art.memory.max`
 */
export const SEARCH_ART_MEMORY_MAX = 'art.memory.max';

/**
 * Search name for {@link attributes.ART_MEMORY_TOTAL}. `art.memory.total`
 */
export const SEARCH_ART_MEMORY_TOTAL = 'art.memory.total';

/**
 * Search name for {@link attributes.AWS_CLOUDWATCH_LOGS_LOG_GROUP}. `aws.cloudwatch.logs.log_group`
 */
export const SEARCH_AWS_CLOUDWATCH_LOGS_LOG__GROUP = 'aws.cloudwatch.logs.log_group';

/**
 * Search name for {@link attributes.AWS_CLOUDWATCH_LOGS_LOG_STREAM}. `aws.cloudwatch.logs.log_stream`
 */
export const SEARCH_AWS_CLOUDWATCH_LOGS_LOG__STREAM = 'aws.cloudwatch.logs.log_stream';

/**
 * Search name for {@link attributes.AWS_CLOUDWATCH_LOGS_URL}. `aws.cloudwatch.logs.url`
 */
export const SEARCH_AWS_CLOUDWATCH_LOGS_URL = 'aws.cloudwatch.logs.url';

/**
 * Search name for {@link attributes.AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS}. `aws.dynamodb.attribute_definitions`
 */
export const SEARCH_AWS_DYNAMODB_ATTRIBUTE__DEFINITIONS = 'aws.dynamodb.attribute_definitions';

/**
 * Search name for {@link attributes.AWS_DYNAMODB_CONSISTENT_READ}. `aws.dynamodb.consistent_read`
 */
export const SEARCH_AWS_DYNAMODB_CONSISTENT__READ = 'aws.dynamodb.consistent_read';

/**
 * Search name for {@link attributes.AWS_DYNAMODB_CONSUMED_CAPACITY}. `aws.dynamodb.consumed_capacity`
 */
export const SEARCH_AWS_DYNAMODB_CONSUMED__CAPACITY = 'aws.dynamodb.consumed_capacity';

/**
 * Search name for {@link attributes.AWS_DYNAMODB_COUNT}. `aws.dynamodb.count`
 */
export const SEARCH_AWS_DYNAMODB_COUNT = 'aws.dynamodb.count';

/**
 * Search name for {@link attributes.AWS_DYNAMODB_EXCLUSIVE_START_TABLE}. `aws.dynamodb.exclusive_start_table`
 */
export const SEARCH_AWS_DYNAMODB_EXCLUSIVE__START__TABLE = 'aws.dynamodb.exclusive_start_table';

/**
 * Search name for {@link attributes.AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES}. `aws.dynamodb.global_secondary_index_updates`
 */
export const SEARCH_AWS_DYNAMODB_GLOBAL__SECONDARY__INDEX__UPDATES = 'aws.dynamodb.global_secondary_index_updates';

/**
 * Search name for {@link attributes.AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES}. `aws.dynamodb.global_secondary_indexes`
 */
export const SEARCH_AWS_DYNAMODB_GLOBAL__SECONDARY__INDEXES = 'aws.dynamodb.global_secondary_indexes';

/**
 * Search name for {@link attributes.AWS_DYNAMODB_INDEX_NAME}. `aws.dynamodb.index_name`
 */
export const SEARCH_AWS_DYNAMODB_INDEX__NAME = 'aws.dynamodb.index_name';

/**
 * Search name for {@link attributes.AWS_DYNAMODB_ITEM_COLLECTION_METRICS}. `aws.dynamodb.item_collection_metrics`
 */
export const SEARCH_AWS_DYNAMODB_ITEM__COLLECTION__METRICS = 'aws.dynamodb.item_collection_metrics';

/**
 * Search name for {@link attributes.AWS_DYNAMODB_LIMIT}. `aws.dynamodb.limit`
 */
export const SEARCH_AWS_DYNAMODB_LIMIT = 'aws.dynamodb.limit';

/**
 * Search name for {@link attributes.AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES}. `aws.dynamodb.local_secondary_indexes`
 */
export const SEARCH_AWS_DYNAMODB_LOCAL__SECONDARY__INDEXES = 'aws.dynamodb.local_secondary_indexes';

/**
 * Search name for {@link attributes.AWS_DYNAMODB_PROJECTION}. `aws.dynamodb.projection`
 */
export const SEARCH_AWS_DYNAMODB_PROJECTION = 'aws.dynamodb.projection';

/**
 * Search name for {@link attributes.AWS_DYNAMODB_PROVISIONED_READ_CAPACITY}. `aws.dynamodb.provisioned_read_capacity`
 */
export const SEARCH_AWS_DYNAMODB_PROVISIONED__READ__CAPACITY = 'aws.dynamodb.provisioned_read_capacity';

/**
 * Search name for {@link attributes.AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY}. `aws.dynamodb.provisioned_write_capacity`
 */
export const SEARCH_AWS_DYNAMODB_PROVISIONED__WRITE__CAPACITY = 'aws.dynamodb.provisioned_write_capacity';

/**
 * Search name for {@link attributes.AWS_DYNAMODB_SCAN_FORWARD}. `aws.dynamodb.scan_forward`
 */
export const SEARCH_AWS_DYNAMODB_SCAN__FORWARD = 'aws.dynamodb.scan_forward';

/**
 * Search name for {@link attributes.AWS_DYNAMODB_SCANNED_COUNT}. `aws.dynamodb.scanned_count`
 */
export const SEARCH_AWS_DYNAMODB_SCANNED__COUNT = 'aws.dynamodb.scanned_count';

/**
 * Search name for {@link attributes.AWS_DYNAMODB_SEGMENT}. `aws.dynamodb.segment`
 */
export const SEARCH_AWS_DYNAMODB_SEGMENT = 'aws.dynamodb.segment';

/**
 * Search name for {@link attributes.AWS_DYNAMODB_SELECT}. `aws.dynamodb.select`
 */
export const SEARCH_AWS_DYNAMODB_SELECT = 'aws.dynamodb.select';

/**
 * Search name for {@link attributes.AWS_DYNAMODB_TABLE_COUNT}. `aws.dynamodb.table_count`
 */
export const SEARCH_AWS_DYNAMODB_TABLE__COUNT = 'aws.dynamodb.table_count';

/**
 * Search name for {@link attributes.AWS_DYNAMODB_TABLE_NAMES}. `aws.dynamodb.table_names`
 */
export const SEARCH_AWS_DYNAMODB_TABLE__NAMES = 'aws.dynamodb.table_names';

/**
 * Search name for {@link attributes.AWS_DYNAMODB_TOTAL_SEGMENTS}. `aws.dynamodb.total_segments`
 */
export const SEARCH_AWS_DYNAMODB_TOTAL__SEGMENTS = 'aws.dynamodb.total_segments';

/**
 * Search name for {@link attributes.AWS_EXTENDED_REQUEST_ID}. `aws.extended_request_id`
 */
export const SEARCH_AWS_EXTENDED__REQUEST__ID = 'aws.extended_request_id';

/**
 * Search name for {@link attributes._AWS_KINESIS_STREAM_NAME}. `aws.kinesis.stream.name`
 *
 * @deprecated Use {@link SEARCH_AWS_KINESIS_STREAM__NAME} (`aws.kinesis.stream_name`) instead
 */
export const SEARCH_AWS_KINESIS_STREAM_NAME = 'aws.kinesis.stream.name';

/**
 * Search name for {@link attributes.AWS_KINESIS_STREAM_NAME}. `aws.kinesis.stream_name`
 */
export const SEARCH_AWS_KINESIS_STREAM__NAME = 'aws.kinesis.stream_name';

/**
 * Search name for {@link attributes.AWS_LAMBDA_AWS_REQUEST_ID}. `aws.lambda.aws_request_id`
 *
 * @deprecated Use {@link SEARCH_FAAS_INVOCATION__ID} (`faas.invocation_id`) instead
 */
export const SEARCH_AWS_LAMBDA_AWS__REQUEST__ID = 'aws.lambda.aws_request_id';

/**
 * Search name for {@link attributes.AWS_LAMBDA_EXECUTION_DURATION_IN_MILLIS}. `aws.lambda.execution_duration_in_millis`
 */
export const SEARCH_AWS_LAMBDA_EXECUTION__DURATION__IN__MILLIS = 'aws.lambda.execution_duration_in_millis';

/**
 * Search name for {@link attributes.AWS_LAMBDA_FUNCTION_NAME}. `aws.lambda.function_name`
 *
 * @deprecated Use {@link SEARCH_FAAS_NAME} (`faas.name`) instead
 */
export const SEARCH_AWS_LAMBDA_FUNCTION__NAME = 'aws.lambda.function_name';

/**
 * Search name for {@link attributes.AWS_LAMBDA_FUNCTION_VERSION}. `aws.lambda.function_version`
 *
 * @deprecated Use {@link SEARCH_FAAS_VERSION} (`faas.version`) instead
 */
export const SEARCH_AWS_LAMBDA_FUNCTION__VERSION = 'aws.lambda.function_version';

/**
 * Search name for {@link attributes.AWS_LAMBDA_INVOKED_ARN}. `aws.lambda.invoked_arn`
 */
export const SEARCH_AWS_LAMBDA_INVOKED__ARN = 'aws.lambda.invoked_arn';

/**
 * Search name for {@link attributes.AWS_LAMBDA_INVOKED_FUNCTION_ARN}. `aws.lambda.invoked_function_arn`
 *
 * @deprecated Use {@link SEARCH_AWS_LAMBDA_INVOKED__ARN} (`aws.lambda.invoked_arn`) instead
 */
export const SEARCH_AWS_LAMBDA_INVOKED__FUNCTION__ARN = 'aws.lambda.invoked_function_arn';

/**
 * Search name for {@link attributes.AWS_LAMBDA_REMAINING_TIME_IN_MILLIS}. `aws.lambda.remaining_time_in_millis`
 */
export const SEARCH_AWS_LAMBDA_REMAINING__TIME__IN__MILLIS = 'aws.lambda.remaining_time_in_millis';

/**
 * Search name for {@link attributes.AWS_LOG_GROUP_NAMES}. `aws.log.group.names`
 */
export const SEARCH_AWS_LOG_GROUP_NAMES = 'aws.log.group.names';

/**
 * Search name for {@link attributes.AWS_LOG_STREAM_NAMES}. `aws.log.stream.names`
 */
export const SEARCH_AWS_LOG_STREAM_NAMES = 'aws.log.stream.names';

/**
 * Search name for {@link attributes.AWS_OPERATION_NAME}. `aws.operation_name`
 *
 * @deprecated Use {@link SEARCH_RPC_METHOD} (`rpc.method`) instead
 */
export const SEARCH_AWS_OPERATION__NAME = 'aws.operation_name';

/**
 * Search name for {@link attributes.AWS_REQUEST_EXTENDED_ID}. `aws.request.extended_id`
 *
 * @deprecated Use {@link SEARCH_AWS_EXTENDED__REQUEST__ID} (`aws.extended_request_id`) instead
 */
export const SEARCH_AWS_REQUEST_EXTENDED__ID = 'aws.request.extended_id';

/**
 * Search name for {@link attributes._AWS_REQUEST_ID}. `aws.request.id`
 *
 * @deprecated Use {@link SEARCH_AWS_REQUEST__ID} (`aws.request_id`) instead
 */
export const SEARCH_AWS_REQUEST_ID = 'aws.request.id';

/**
 * Search name for {@link attributes.AWS_REQUEST_URL}. `aws.request.url`
 *
 * @deprecated Use {@link SEARCH_URL_FULL} (`url.full`) instead
 */
export const SEARCH_AWS_REQUEST_URL = 'aws.request.url';

/**
 * Search name for {@link attributes.AWS_REQUEST_ID}. `aws.request_id`
 */
export const SEARCH_AWS_REQUEST__ID = 'aws.request_id';

/**
 * Search name for {@link attributes.AWS_S3_BUCKET}. `aws.s3.bucket`
 */
export const SEARCH_AWS_S3_BUCKET = 'aws.s3.bucket';

/**
 * Search name for {@link attributes.AWS_SECRETSMANAGER_SECRET_ARN}. `aws.secretsmanager.secret.arn`
 */
export const SEARCH_AWS_SECRETSMANAGER_SECRET_ARN = 'aws.secretsmanager.secret.arn';

/**
 * Search name for {@link attributes.AWS_SNS_TOPIC_ARN}. `aws.sns.topic.arn`
 */
export const SEARCH_AWS_SNS_TOPIC_ARN = 'aws.sns.topic.arn';

/**
 * Search name for {@link attributes.AWS_STEP_FUNCTIONS_ACTIVITY_ARN}. `aws.step_functions.activity.arn`
 */
export const SEARCH_AWS_STEP__FUNCTIONS_ACTIVITY_ARN = 'aws.step_functions.activity.arn';

/**
 * Search name for {@link attributes.AWS_STEP_FUNCTIONS_STATE_MACHINE_ARN}. `aws.step_functions.state_machine.arn`
 */
export const SEARCH_AWS_STEP__FUNCTIONS_STATE__MACHINE_ARN = 'aws.step_functions.state_machine.arn';

/**
 * Search name for {@link attributes.AWS_REGION}. `aws_region`
 *
 * @deprecated Use {@link SEARCH_CLOUD_REGION} (`cloud.region`) instead
 */
export const SEARCH_AWS__REGION = 'aws_region';

/**
 * Search name for {@link attributes.BLOCKED_MAIN_THREAD}. `blocked_main_thread`
 */
export const SEARCH_BLOCKED__MAIN__THREAD = 'blocked_main_thread';

/**
 * Search name for {@link attributes.BROWSER_BFCACHE_FRAME}. `browser.bfcache.frame`
 */
export const SEARCH_BROWSER_BFCACHE_FRAME = 'browser.bfcache.frame';

/**
 * Search name for {@link attributes.BROWSER_BFCACHE_NOT_RESTORED_REASON_COUNT}. `browser.bfcache.not_restored_reason_count`
 */
export const SEARCH_BROWSER_BFCACHE_NOT__RESTORED__REASON__COUNT = 'browser.bfcache.not_restored_reason_count';

/**
 * Search name for {@link attributes.BROWSER_BFCACHE_OUTCOME}. `browser.bfcache.outcome`
 */
export const SEARCH_BROWSER_BFCACHE_OUTCOME = 'browser.bfcache.outcome';

/**
 * Search name for {@link attributes.BROWSER_BFCACHE_REASON}. `browser.bfcache.reason`
 */
export const SEARCH_BROWSER_BFCACHE_REASON = 'browser.bfcache.reason';

/**
 * Search name for {@link attributes.BROWSER_NAME}. `browser.name`
 */
export const SEARCH_BROWSER_NAME = 'browser.name';

/**
 * Search name for {@link attributes.BROWSER_NAVIGATION_TYPE}. `browser.navigation.type`
 */
export const SEARCH_BROWSER_NAVIGATION_TYPE = 'browser.navigation.type';

/**
 * Search name for {@link attributes.BROWSER_PAINT_TYPE}. `browser.paint.type`
 */
export const SEARCH_BROWSER_PAINT_TYPE = 'browser.paint.type';

/**
 * Search name for {@link attributes.BROWSER_PERFORMANCE_NAVIGATION_ACTIVATION_START}. `browser.performance.navigation.activation_start`
 */
export const SEARCH_BROWSER_PERFORMANCE_NAVIGATION_ACTIVATION__START =
  'browser.performance.navigation.activation_start';

/**
 * Search name for {@link attributes.BROWSER_PERFORMANCE_TIME_ORIGIN}. `browser.performance.time_origin`
 */
export const SEARCH_BROWSER_PERFORMANCE_TIME__ORIGIN = 'browser.performance.time_origin';

/**
 * Search name for {@link attributes.BROWSER_REPORT_TYPE}. `browser.report.type`
 */
export const SEARCH_BROWSER_REPORT_TYPE = 'browser.report.type';

/**
 * Search name for {@link attributes.BROWSER_SCRIPT_INVOKER}. `browser.script.invoker`
 */
export const SEARCH_BROWSER_SCRIPT_INVOKER = 'browser.script.invoker';

/**
 * Search name for {@link attributes.BROWSER_SCRIPT_INVOKER_TYPE}. `browser.script.invoker_type`
 */
export const SEARCH_BROWSER_SCRIPT_INVOKER__TYPE = 'browser.script.invoker_type';

/**
 * Search name for {@link attributes.BROWSER_SCRIPT_SOURCE_CHAR_POSITION}. `browser.script.source_char_position`
 */
export const SEARCH_BROWSER_SCRIPT_SOURCE__CHAR__POSITION = 'browser.script.source_char_position';

/**
 * Search name for {@link attributes.BROWSER_VERSION}. `browser.version`
 */
export const SEARCH_BROWSER_VERSION = 'browser.version';

/**
 * Search name for {@link attributes.BROWSER_WEB_VITAL_CLS_REPORT_EVENT}. `browser.web_vital.cls.report_event`
 */
export const SEARCH_BROWSER_WEB__VITAL_CLS_REPORT__EVENT = 'browser.web_vital.cls.report_event';

/**
 * Search name for {@link attributes.BROWSER_WEB_VITAL_CLS_SOURCE_KEY}. `browser.web_vital.cls.source.<key>`
 */
export const SEARCH_BROWSER_WEB__VITAL_CLS_SOURCE_KEY = 'browser.web_vital.cls.source.<key>';

/**
 * Search name for {@link attributes.BROWSER_WEB_VITAL_CLS_VALUE}. `browser.web_vital.cls.value`
 */
export const SEARCH_BROWSER_WEB__VITAL_CLS_VALUE = 'browser.web_vital.cls.value';

/**
 * Search name for {@link attributes.BROWSER_WEB_VITAL_FCP_VALUE}. `browser.web_vital.fcp.value`
 */
export const SEARCH_BROWSER_WEB__VITAL_FCP_VALUE = 'browser.web_vital.fcp.value';

/**
 * Search name for {@link attributes.BROWSER_WEB_VITAL_FP_VALUE}. `browser.web_vital.fp.value`
 */
export const SEARCH_BROWSER_WEB__VITAL_FP_VALUE = 'browser.web_vital.fp.value';

/**
 * Search name for {@link attributes.BROWSER_WEB_VITAL_INP_VALUE}. `browser.web_vital.inp.value`
 */
export const SEARCH_BROWSER_WEB__VITAL_INP_VALUE = 'browser.web_vital.inp.value';

/**
 * Search name for {@link attributes.BROWSER_WEB_VITAL_LCP_ELEMENT}. `browser.web_vital.lcp.element`
 */
export const SEARCH_BROWSER_WEB__VITAL_LCP_ELEMENT = 'browser.web_vital.lcp.element';

/**
 * Search name for {@link attributes.BROWSER_WEB_VITAL_LCP_ID}. `browser.web_vital.lcp.id`
 */
export const SEARCH_BROWSER_WEB__VITAL_LCP_ID = 'browser.web_vital.lcp.id';

/**
 * Search name for {@link attributes.BROWSER_WEB_VITAL_LCP_LOAD_TIME}. `browser.web_vital.lcp.load_time`
 */
export const SEARCH_BROWSER_WEB__VITAL_LCP_LOAD__TIME = 'browser.web_vital.lcp.load_time';

/**
 * Search name for {@link attributes.BROWSER_WEB_VITAL_LCP_RENDER_TIME}. `browser.web_vital.lcp.render_time`
 */
export const SEARCH_BROWSER_WEB__VITAL_LCP_RENDER__TIME = 'browser.web_vital.lcp.render_time';

/**
 * Search name for {@link attributes.BROWSER_WEB_VITAL_LCP_REPORT_EVENT}. `browser.web_vital.lcp.report_event`
 */
export const SEARCH_BROWSER_WEB__VITAL_LCP_REPORT__EVENT = 'browser.web_vital.lcp.report_event';

/**
 * Search name for {@link attributes.BROWSER_WEB_VITAL_LCP_SIZE}. `browser.web_vital.lcp.size`
 */
export const SEARCH_BROWSER_WEB__VITAL_LCP_SIZE = 'browser.web_vital.lcp.size';

/**
 * Search name for {@link attributes.BROWSER_WEB_VITAL_LCP_URL}. `browser.web_vital.lcp.url`
 */
export const SEARCH_BROWSER_WEB__VITAL_LCP_URL = 'browser.web_vital.lcp.url';

/**
 * Search name for {@link attributes.BROWSER_WEB_VITAL_LCP_VALUE}. `browser.web_vital.lcp.value`
 */
export const SEARCH_BROWSER_WEB__VITAL_LCP_VALUE = 'browser.web_vital.lcp.value';

/**
 * Search name for {@link attributes.BROWSER_WEB_VITAL_TTFB_REQUEST_TIME}. `browser.web_vital.ttfb.request_time`
 */
export const SEARCH_BROWSER_WEB__VITAL_TTFB_REQUEST__TIME = 'browser.web_vital.ttfb.request_time';

/**
 * Search name for {@link attributes.BROWSER_WEB_VITAL_TTFB_VALUE}. `browser.web_vital.ttfb.value`
 */
export const SEARCH_BROWSER_WEB__VITAL_TTFB_VALUE = 'browser.web_vital.ttfb.value';

/**
 * Search name for {@link attributes.CACHE_HIT}. `cache.hit`
 */
export const SEARCH_CACHE_HIT = 'cache.hit';

/**
 * Search name for {@link attributes.CACHE_ITEM_SIZE}. `cache.item_size`
 */
export const SEARCH_CACHE_ITEM__SIZE = 'cache.item_size';

/**
 * Search name for {@link attributes.CACHE_KEY}. `cache.key`
 */
export const SEARCH_CACHE_KEY = 'cache.key';

/**
 * Search name for {@link attributes.CACHE_OPERATION}. `cache.operation`
 */
export const SEARCH_CACHE_OPERATION = 'cache.operation';

/**
 * Search name for {@link attributes.CACHE_TTL}. `cache.ttl`
 */
export const SEARCH_CACHE_TTL = 'cache.ttl';

/**
 * Search name for {@link attributes.CACHE_WRITE}. `cache.write`
 */
export const SEARCH_CACHE_WRITE = 'cache.write';

/**
 * Search name for {@link attributes.SENTRY_CANCELLATION_REASON}. `cancellation_reason`
 */
export const SEARCH_CANCELLATION__REASON = 'cancellation_reason';

/**
 * Search name for {@link attributes.SENTRY_CATEGORY}. `category`
 *
 * @deprecated Use {@link SEARCH_SPAN_CATEGORY} (`span.category`) instead
 */
export const SEARCH_CATEGORY = 'category';

/**
 * Search name for {@link attributes.CHANNEL}. `channel`
 */
export const SEARCH_CHANNEL = 'channel';

/**
 * Search name for {@link attributes.CLIENT_ADDRESS}. `client.address`
 */
export const SEARCH_CLIENT_ADDRESS = 'client.address';

/**
 * Search name for {@link attributes.CLIENT_PORT}. `client.port`
 */
export const SEARCH_CLIENT_PORT = 'client.port';

/**
 * Search name for {@link attributes.SENTRY_CLIENT_SAMPLE_RATE}. `client_sample_rate`
 */
export const SEARCH_CLIENT__SAMPLE__RATE = 'client_sample_rate';

/**
 * Search name for {@link attributes.CLOUD_ACCOUNT_ID}. `cloud.account.id`
 */
export const SEARCH_CLOUD_ACCOUNT_ID = 'cloud.account.id';

/**
 * Search name for {@link attributes.CLOUD_AVAILABILITY_ZONE}. `cloud.availability_zone`
 */
export const SEARCH_CLOUD_AVAILABILITY__ZONE = 'cloud.availability_zone';

/**
 * Search name for {@link attributes.CLOUD_PLATFORM}. `cloud.platform`
 */
export const SEARCH_CLOUD_PLATFORM = 'cloud.platform';

/**
 * Search name for {@link attributes.CLOUD_PROVIDER}. `cloud.provider`
 */
export const SEARCH_CLOUD_PROVIDER = 'cloud.provider';

/**
 * Search name for {@link attributes.CLOUD_REGION}. `cloud.region`
 */
export const SEARCH_CLOUD_REGION = 'cloud.region';

/**
 * Search name for {@link attributes.CLOUD_RESOURCE_ID}. `cloud.resource_id`
 */
export const SEARCH_CLOUD_RESOURCE__ID = 'cloud.resource_id';

/**
 * Search name for {@link attributes.CLOUDFLARE_D1_DURATION}. `cloudflare.d1.duration`
 */
export const SEARCH_CLOUDFLARE_D1_DURATION = 'cloudflare.d1.duration';

/**
 * Search name for {@link attributes.CLOUDFLARE_D1_QUERY_TYPE}. `cloudflare.d1.query_type`
 *
 * @deprecated Use {@link SEARCH_DB_OPERATION_NAME} (`db.operation.name`) instead
 */
export const SEARCH_CLOUDFLARE_D1_QUERY__TYPE = 'cloudflare.d1.query_type';

/**
 * Search name for {@link attributes.CLOUDFLARE_D1_ROWS_READ}. `cloudflare.d1.rows_read`
 */
export const SEARCH_CLOUDFLARE_D1_ROWS__READ = 'cloudflare.d1.rows_read';

/**
 * Search name for {@link attributes.CLOUDFLARE_D1_ROWS_WRITTEN}. `cloudflare.d1.rows_written`
 */
export const SEARCH_CLOUDFLARE_D1_ROWS__WRITTEN = 'cloudflare.d1.rows_written';

/**
 * Search name for {@link attributes.CLOUDFLARE_DURABLE_OBJECT_QUERY_BINDINGS}. `cloudflare.durable_object.query.bindings`
 */
export const SEARCH_CLOUDFLARE_DURABLE__OBJECT_QUERY_BINDINGS = 'cloudflare.durable_object.query.bindings';

/**
 * Search name for {@link attributes.CLOUDFLARE_DURABLE_OBJECT_RESPONSE_ROWS_READ}. `cloudflare.durable_object.response.rows_read`
 */
export const SEARCH_CLOUDFLARE_DURABLE__OBJECT_RESPONSE_ROWS__READ = 'cloudflare.durable_object.response.rows_read';

/**
 * Search name for {@link attributes.CLOUDFLARE_DURABLE_OBJECT_RESPONSE_ROWS_WRITTEN}. `cloudflare.durable_object.response.rows_written`
 */
export const SEARCH_CLOUDFLARE_DURABLE__OBJECT_RESPONSE_ROWS__WRITTEN =
  'cloudflare.durable_object.response.rows_written';

/**
 * Search name for {@link attributes.CLOUDFLARE_R2_BUCKET}. `cloudflare.r2.bucket`
 */
export const SEARCH_CLOUDFLARE_R2_BUCKET = 'cloudflare.r2.bucket';

/**
 * Search name for {@link attributes.CLOUDFLARE_R2_OPERATION}. `cloudflare.r2.operation`
 */
export const SEARCH_CLOUDFLARE_R2_OPERATION = 'cloudflare.r2.operation';

/**
 * Search name for {@link attributes.CLOUDFLARE_R2_REQUEST_DELIMITER}. `cloudflare.r2.request.delimiter`
 */
export const SEARCH_CLOUDFLARE_R2_REQUEST_DELIMITER = 'cloudflare.r2.request.delimiter';

/**
 * Search name for {@link attributes.CLOUDFLARE_R2_REQUEST_KEY}. `cloudflare.r2.request.key`
 */
export const SEARCH_CLOUDFLARE_R2_REQUEST_KEY = 'cloudflare.r2.request.key';

/**
 * Search name for {@link attributes.CLOUDFLARE_R2_REQUEST_PART_NUMBER}. `cloudflare.r2.request.part_number`
 */
export const SEARCH_CLOUDFLARE_R2_REQUEST_PART__NUMBER = 'cloudflare.r2.request.part_number';

/**
 * Search name for {@link attributes.CLOUDFLARE_R2_REQUEST_PREFIX}. `cloudflare.r2.request.prefix`
 */
export const SEARCH_CLOUDFLARE_R2_REQUEST_PREFIX = 'cloudflare.r2.request.prefix';

/**
 * Search name for {@link attributes.CLOUDFLARE_WORKFLOW_ATTEMPT}. `cloudflare.workflow.attempt`
 */
export const SEARCH_CLOUDFLARE_WORKFLOW_ATTEMPT = 'cloudflare.workflow.attempt';

/**
 * Search name for {@link attributes.CLOUDFLARE_WORKFLOW_RETRIES_BACKOFF}. `cloudflare.workflow.retries.backoff`
 */
export const SEARCH_CLOUDFLARE_WORKFLOW_RETRIES_BACKOFF = 'cloudflare.workflow.retries.backoff';

/**
 * Search name for {@link attributes.CLOUDFLARE_WORKFLOW_RETRIES_DELAY}. `cloudflare.workflow.retries.delay`
 */
export const SEARCH_CLOUDFLARE_WORKFLOW_RETRIES_DELAY = 'cloudflare.workflow.retries.delay';

/**
 * Search name for {@link attributes.CLOUDFLARE_WORKFLOW_RETRIES_LIMIT}. `cloudflare.workflow.retries.limit`
 */
export const SEARCH_CLOUDFLARE_WORKFLOW_RETRIES_LIMIT = 'cloudflare.workflow.retries.limit';

/**
 * Search name for {@link attributes.CLOUDFLARE_WORKFLOW_TIMEOUT}. `cloudflare.workflow.timeout`
 */
export const SEARCH_CLOUDFLARE_WORKFLOW_TIMEOUT = 'cloudflare.workflow.timeout';

/**
 * Search name for {@link attributes.CLS}. `cls`
 *
 * @deprecated Use {@link SEARCH_BROWSER_WEB__VITAL_CLS_VALUE} (`browser.web_vital.cls.value`) instead
 */
export const SEARCH_CLS = 'cls';

/**
 * Search name for {@link attributes.CLS_SOURCE_KEY}. `cls.source.<key>`
 *
 * @deprecated Use {@link SEARCH_BROWSER_WEB__VITAL_CLS_SOURCE_KEY} (`browser.web_vital.cls.source.<key>`) instead
 */
export const SEARCH_CLS_SOURCE_KEY = 'cls.source.<key>';

/**
 * Search name for {@link attributes.CODE}. `code`
 *
 * @deprecated Use {@link SEARCH_RPC_RESPONSE_STATUS__CODE} (`rpc.response.status_code`) instead
 */
export const SEARCH_CODE = 'code';

/**
 * Search name for {@link attributes.CODE_FILE_PATH}. `code.file.path`
 */
export const SEARCH_CODE_FILE_PATH = 'code.file.path';

/**
 * Search name for {@link attributes.CODE_FILEPATH}. `code.filepath`
 *
 * @deprecated Use {@link SEARCH_CODE_FILE_PATH} (`code.file.path`) instead
 */
export const SEARCH_CODE_FILEPATH = 'code.filepath';

/**
 * Search name for {@link attributes.CODE_FUNCTION}. `code.function`
 */
export const SEARCH_CODE_FUNCTION = 'code.function';

/**
 * Search name for {@link attributes.CODE_FUNCTION_NAME}. `code.function.name`
 */
export const SEARCH_CODE_FUNCTION_NAME = 'code.function.name';

/**
 * Search name for {@link attributes.CODE_LINE_NUMBER}. `code.line.number`
 */
export const SEARCH_CODE_LINE_NUMBER = 'code.line.number';

/**
 * Search name for {@link attributes.CODE_LINENO}. `code.lineno`
 *
 * @deprecated Use {@link SEARCH_CODE_LINE_NUMBER} (`code.line.number`) instead
 */
export const SEARCH_CODE_LINENO = 'code.lineno';

/**
 * Search name for {@link attributes.CODE_NAMESPACE}. `code.namespace`
 */
export const SEARCH_CODE_NAMESPACE = 'code.namespace';

/**
 * Search name for {@link attributes.CONNECTION_RTT}. `connection.rtt`
 *
 * @deprecated Use {@link SEARCH_NETWORK_CONNECTION_RTT} (`network.connection.rtt`) instead
 */
export const SEARCH_CONNECTION_RTT = 'connection.rtt';

/**
 * Search name for {@link attributes.CONNECTIONTYPE}. `connectionType`
 *
 * @deprecated Use {@link SEARCH_NETWORK_CONNECTION_TYPE} (`network.connection.type`) instead
 */
export const SEARCH_CONNECTIONTYPE = 'connectionType';

/**
 * Search name for {@link attributes.CULTURE_CALENDAR}. `culture.calendar`
 */
export const SEARCH_CULTURE_CALENDAR = 'culture.calendar';

/**
 * Search name for {@link attributes.CULTURE_DISPLAY_NAME}. `culture.display_name`
 */
export const SEARCH_CULTURE_DISPLAY__NAME = 'culture.display_name';

/**
 * Search name for {@link attributes.CULTURE_IS_24_HOUR_FORMAT}. `culture.is_24_hour_format`
 */
export const SEARCH_CULTURE_IS__24__HOUR__FORMAT = 'culture.is_24_hour_format';

/**
 * Search name for {@link attributes.CULTURE_LOCALE}. `culture.locale`
 */
export const SEARCH_CULTURE_LOCALE = 'culture.locale';

/**
 * Search name for {@link attributes.CULTURE_TIMEZONE}. `culture.timezone`
 */
export const SEARCH_CULTURE_TIMEZONE = 'culture.timezone';

/**
 * Search name for {@link attributes.DB_COLLECTION_NAME}. `db.collection.name`
 */
export const SEARCH_DB_COLLECTION_NAME = 'db.collection.name';

/**
 * Search name for {@link attributes.DB_CONNECTION_STRING}. `db.connection_string`
 *
 * @deprecated
 */
export const SEARCH_DB_CONNECTION__STRING = 'db.connection_string';

/**
 * Search name for {@link attributes.DB_DRIVER_NAME}. `db.driver.name`
 */
export const SEARCH_DB_DRIVER_NAME = 'db.driver.name';

/**
 * Search name for {@link attributes.DB_MONGODB_COLLECTION}. `db.mongodb.collection`
 *
 * @deprecated Use {@link SEARCH_DB_COLLECTION_NAME} (`db.collection.name`) instead
 */
export const SEARCH_DB_MONGODB_COLLECTION = 'db.mongodb.collection';

/**
 * Search name for {@link attributes.DB_NAME}. `db.name`
 *
 * @deprecated Use {@link SEARCH_DB_NAMESPACE} (`db.namespace`) instead
 */
export const SEARCH_DB_NAME = 'db.name';

/**
 * Search name for {@link attributes.DB_NAMESPACE}. `db.namespace`
 */
export const SEARCH_DB_NAMESPACE = 'db.namespace';

/**
 * Search name for {@link attributes.DB_OPERATION}. `db.operation`
 *
 * @deprecated Use {@link SEARCH_DB_OPERATION_NAME} (`db.operation.name`) instead
 */
export const SEARCH_DB_OPERATION = 'db.operation';

/**
 * Search name for {@link attributes.DB_OPERATION_BATCH_SIZE}. `db.operation.batch.size`
 */
export const SEARCH_DB_OPERATION_BATCH_SIZE = 'db.operation.batch.size';

/**
 * Search name for {@link attributes.DB_OPERATION_NAME}. `db.operation.name`
 */
export const SEARCH_DB_OPERATION_NAME = 'db.operation.name';

/**
 * Search name for {@link attributes.DB_PARAMS}. `db.params`
 *
 * @deprecated Use {@link SEARCH_DB_QUERY_PARAMETER_KEY} (`db.query.parameter.<key>`) instead
 */
export const SEARCH_DB_PARAMS = 'db.params';

/**
 * Search name for {@link attributes.DB_QUERY_PARAMETER_KEY}. `db.query.parameter.<key>`
 */
export const SEARCH_DB_QUERY_PARAMETER_KEY = 'db.query.parameter.<key>';

/**
 * Search name for {@link attributes.DB_QUERY_SUMMARY}. `db.query.summary`
 */
export const SEARCH_DB_QUERY_SUMMARY = 'db.query.summary';

/**
 * Search name for {@link attributes.DB_QUERY_TEXT}. `db.query.text`
 */
export const SEARCH_DB_QUERY_TEXT = 'db.query.text';

/**
 * Search name for {@link attributes.DB_REDIS_CONNECTION}. `db.redis.connection`
 */
export const SEARCH_DB_REDIS_CONNECTION = 'db.redis.connection';

/**
 * Search name for {@link attributes.DB_REDIS_KEY}. `db.redis.key`
 */
export const SEARCH_DB_REDIS_KEY = 'db.redis.key';

/**
 * Search name for {@link attributes.DB_REDIS_PARAMETERS}. `db.redis.parameters`
 */
export const SEARCH_DB_REDIS_PARAMETERS = 'db.redis.parameters';

/**
 * Search name for {@link attributes.DB_RESPONSE_STATUS_CODE}. `db.response.status_code`
 */
export const SEARCH_DB_RESPONSE_STATUS__CODE = 'db.response.status_code';

/**
 * Search name for {@link attributes.DB_SQL_BINDINGS}. `db.sql.bindings`
 *
 * @deprecated Use {@link SEARCH_DB_QUERY_PARAMETER_KEY} (`db.query.parameter.<key>`) instead
 */
export const SEARCH_DB_SQL_BINDINGS = 'db.sql.bindings';

/**
 * Search name for {@link attributes.DB_STATEMENT}. `db.statement`
 *
 * @deprecated Use {@link SEARCH_DB_QUERY_TEXT} (`db.query.text`) instead
 */
export const SEARCH_DB_STATEMENT = 'db.statement';

/**
 * Search name for {@link attributes.DB_STORED_PROCEDURE_NAME}. `db.stored_procedure.name`
 */
export const SEARCH_DB_STORED__PROCEDURE_NAME = 'db.stored_procedure.name';

/**
 * Search name for {@link attributes.DB_SYSTEM}. `db.system`
 */
export const SEARCH_DB_SYSTEM = 'db.system';

/**
 * Search name for {@link attributes.DB_SYSTEM_NAME}. `db.system.name`
 */
export const SEARCH_DB_SYSTEM_NAME = 'db.system.name';

/**
 * Search name for {@link attributes.DB_USER}. `db.user`
 */
export const SEARCH_DB_USER = 'db.user';

/**
 * Search name for {@link attributes.SENTRY_DESCRIPTION}. `description`
 */
export const SEARCH_DESCRIPTION = 'description';

/**
 * Search name for {@link attributes.DEVICE_ARCHS}. `device.archs`
 */
export const SEARCH_DEVICE_ARCHS = 'device.archs';

/**
 * Search name for {@link attributes.DEVICE_BATTERY_LEVEL}. `device.battery_level`
 */
export const SEARCH_DEVICE_BATTERY__LEVEL = 'device.battery_level';

/**
 * Search name for {@link attributes.DEVICE_BATTERY_TEMPERATURE}. `device.battery_temperature`
 */
export const SEARCH_DEVICE_BATTERY__TEMPERATURE = 'device.battery_temperature';

/**
 * Search name for {@link attributes.DEVICE_BOOT_TIME}. `device.boot_time`
 */
export const SEARCH_DEVICE_BOOT__TIME = 'device.boot_time';

/**
 * Search name for {@link attributes.DEVICE_BRAND}. `device.brand`
 */
export const SEARCH_DEVICE_BRAND = 'device.brand';

/**
 * Search name for {@link attributes.DEVICE_CHARGING}. `device.charging`
 */
export const SEARCH_DEVICE_CHARGING = 'device.charging';

/**
 * Search name for {@link attributes.DEVICE_CHIPSET}. `device.chipset`
 */
export const SEARCH_DEVICE_CHIPSET = 'device.chipset';

/**
 * Search name for {@link attributes.DEVICE_CLASS}. `device.class`
 */
export const SEARCH_DEVICE_CLASS = 'device.class';

/**
 * Search name for {@link attributes.DEVICE_CONNECTION_TYPE}. `device.connection_type`
 *
 * @deprecated Use {@link SEARCH_NETWORK_CONNECTION_TYPE} (`network.connection.type`) instead
 */
export const SEARCH_DEVICE_CONNECTION__TYPE = 'device.connection_type';

/**
 * Search name for {@link attributes.DEVICE_CPU_DESCRIPTION}. `device.cpu_description`
 */
export const SEARCH_DEVICE_CPU__DESCRIPTION = 'device.cpu_description';

/**
 * Search name for {@link attributes.DEVICE_EXTERNAL_FREE_STORAGE}. `device.external_free_storage`
 */
export const SEARCH_DEVICE_EXTERNAL__FREE__STORAGE = 'device.external_free_storage';

/**
 * Search name for {@link attributes.DEVICE_EXTERNAL_STORAGE_SIZE}. `device.external_storage_size`
 */
export const SEARCH_DEVICE_EXTERNAL__STORAGE__SIZE = 'device.external_storage_size';

/**
 * Search name for {@link attributes.DEVICE_FAMILY}. `device.family`
 */
export const SEARCH_DEVICE_FAMILY = 'device.family';

/**
 * Search name for {@link attributes.DEVICE_FREE_MEMORY}. `device.free_memory`
 */
export const SEARCH_DEVICE_FREE__MEMORY = 'device.free_memory';

/**
 * Search name for {@link attributes.DEVICE_FREE_STORAGE}. `device.free_storage`
 */
export const SEARCH_DEVICE_FREE__STORAGE = 'device.free_storage';

/**
 * Search name for {@link attributes.DEVICE_ID}. `device.id`
 */
export const SEARCH_DEVICE_ID = 'device.id';

/**
 * Search name for {@link attributes.DEVICE_LOCALE}. `device.locale`
 */
export const SEARCH_DEVICE_LOCALE = 'device.locale';

/**
 * Search name for {@link attributes.DEVICE_LOW_MEMORY}. `device.low_memory`
 */
export const SEARCH_DEVICE_LOW__MEMORY = 'device.low_memory';

/**
 * Search name for {@link attributes.DEVICE_LOW_POWER_MODE}. `device.low_power_mode`
 */
export const SEARCH_DEVICE_LOW__POWER__MODE = 'device.low_power_mode';

/**
 * Search name for {@link attributes.DEVICE_MANUFACTURER}. `device.manufacturer`
 */
export const SEARCH_DEVICE_MANUFACTURER = 'device.manufacturer';

/**
 * Search name for {@link attributes.DEVICE_MEMORY_ESTIMATED_CAPACITY}. `device.memory.estimated_capacity`
 */
export const SEARCH_DEVICE_MEMORY_ESTIMATED__CAPACITY = 'device.memory.estimated_capacity';

/**
 * Search name for {@link attributes.DEVICE_MEMORY_SIZE}. `device.memory_size`
 */
export const SEARCH_DEVICE_MEMORY__SIZE = 'device.memory_size';

/**
 * Search name for {@link attributes.DEVICE_MODEL}. `device.model`
 */
export const SEARCH_DEVICE_MODEL = 'device.model';

/**
 * Search name for {@link attributes.DEVICE_MODEL_ID}. `device.model_id`
 */
export const SEARCH_DEVICE_MODEL__ID = 'device.model_id';

/**
 * Search name for {@link attributes.DEVICE_NAME}. `device.name`
 */
export const SEARCH_DEVICE_NAME = 'device.name';

/**
 * Search name for {@link attributes.DEVICE_ONLINE}. `device.online`
 */
export const SEARCH_DEVICE_ONLINE = 'device.online';

/**
 * Search name for {@link attributes.DEVICE_ORIENTATION}. `device.orientation`
 */
export const SEARCH_DEVICE_ORIENTATION = 'device.orientation';

/**
 * Search name for {@link attributes.DEVICE_PROCESSOR_COUNT}. `device.processor_count`
 */
export const SEARCH_DEVICE_PROCESSOR__COUNT = 'device.processor_count';

/**
 * Search name for {@link attributes.DEVICE_PROCESSOR_FREQUENCY}. `device.processor_frequency`
 */
export const SEARCH_DEVICE_PROCESSOR__FREQUENCY = 'device.processor_frequency';

/**
 * Search name for {@link attributes.DEVICE_SCREEN_DENSITY}. `device.screen_density`
 */
export const SEARCH_DEVICE_SCREEN__DENSITY = 'device.screen_density';

/**
 * Search name for {@link attributes.DEVICE_SCREEN_DPI}. `device.screen_dpi`
 */
export const SEARCH_DEVICE_SCREEN__DPI = 'device.screen_dpi';

/**
 * Search name for {@link attributes.DEVICE_SCREEN_HEIGHT_PIXELS}. `device.screen_height_pixels`
 */
export const SEARCH_DEVICE_SCREEN__HEIGHT__PIXELS = 'device.screen_height_pixels';

/**
 * Search name for {@link attributes.DEVICE_SCREEN_WIDTH_PIXELS}. `device.screen_width_pixels`
 */
export const SEARCH_DEVICE_SCREEN__WIDTH__PIXELS = 'device.screen_width_pixels';

/**
 * Search name for {@link attributes.DEVICE_SIMULATOR}. `device.simulator`
 */
export const SEARCH_DEVICE_SIMULATOR = 'device.simulator';

/**
 * Search name for {@link attributes.DEVICE_STORAGE_SIZE}. `device.storage_size`
 */
export const SEARCH_DEVICE_STORAGE__SIZE = 'device.storage_size';

/**
 * Search name for {@link attributes.DEVICE_THERMAL_STATE}. `device.thermal_state`
 */
export const SEARCH_DEVICE_THERMAL__STATE = 'device.thermal_state';

/**
 * Search name for {@link attributes.DEVICE_TIMEZONE}. `device.timezone`
 */
export const SEARCH_DEVICE_TIMEZONE = 'device.timezone';

/**
 * Search name for {@link attributes.DEVICE_USABLE_MEMORY}. `device.usable_memory`
 */
export const SEARCH_DEVICE_USABLE__MEMORY = 'device.usable_memory';

/**
 * Search name for {@link attributes.DEVICEMEMORY}. `deviceMemory`
 *
 * @deprecated Use {@link SEARCH_DEVICE_MEMORY_ESTIMATED__CAPACITY} (`device.memory.estimated_capacity`) instead
 */
export const SEARCH_DEVICEMEMORY = 'deviceMemory';

/**
 * Search name for {@link attributes.SENTRY_DIST}. `dist`
 */
export const SEARCH_DIST = 'dist';

/**
 * Search name for {@link attributes.DJANGO_FUNCTION_NAME}. `django.function_name`
 *
 * @deprecated Use {@link SEARCH_CODE_FUNCTION_NAME} (`code.function.name`) instead
 */
export const SEARCH_DJANGO_FUNCTION__NAME = 'django.function_name';

/**
 * Search name for {@link attributes.DJANGO_MIDDLEWARE_NAME}. `django.middleware_name`
 *
 * @deprecated Use {@link SEARCH_MIDDLEWARE_NAME} (`middleware.name`) instead
 */
export const SEARCH_DJANGO_MIDDLEWARE__NAME = 'django.middleware_name';

/**
 * Search name for {@link attributes.SENTRY_DOMAIN}. `domain`
 *
 * @deprecated Use {@link SEARCH_SPAN_DOMAIN} (`span.domain`) instead
 */
export const SEARCH_DOMAIN = 'domain';

/**
 * Search name for {@link attributes.SENTRY_DSC_ENVIRONMENT}. `dsc.environment`
 */
export const SEARCH_DSC_ENVIRONMENT = 'dsc.environment';

/**
 * Search name for {@link attributes.SENTRY_DSC_PROJECT_ID}. `dsc.project_id`
 */
export const SEARCH_DSC_PROJECT__ID = 'dsc.project_id';

/**
 * Search name for {@link attributes.SENTRY_DSC_PUBLIC_KEY}. `dsc.public_key`
 */
export const SEARCH_DSC_PUBLIC__KEY = 'dsc.public_key';

/**
 * Search name for {@link attributes.SENTRY_DSC_RELEASE}. `dsc.release`
 */
export const SEARCH_DSC_RELEASE = 'dsc.release';

/**
 * Search name for {@link attributes.SENTRY_DSC_SAMPLE_RATE}. `dsc.sample_rate`
 */
export const SEARCH_DSC_SAMPLE__RATE = 'dsc.sample_rate';

/**
 * Search name for {@link attributes.SENTRY_DSC_SAMPLED}. `dsc.sampled`
 */
export const SEARCH_DSC_SAMPLED = 'dsc.sampled';

/**
 * Search name for {@link attributes.SENTRY_DSC_TRACE_ID}. `dsc.trace_id`
 */
export const SEARCH_DSC_TRACE__ID = 'dsc.trace_id';

/**
 * Search name for {@link attributes.SENTRY_DSC_TRANSACTION}. `dsc.transaction`
 */
export const SEARCH_DSC_TRANSACTION = 'dsc.transaction';

/**
 * Search name for {@link attributes.EFFECTIVECONNECTIONTYPE}. `effectiveConnectionType`
 *
 * @deprecated Use {@link SEARCH_NETWORK_CONNECTION_EFFECTIVE__TYPE} (`network.connection.effective_type`) instead
 */
export const SEARCH_EFFECTIVECONNECTIONTYPE = 'effectiveConnectionType';

/**
 * Search name for {@link attributes.SENTRY_ENVIRONMENT}. `environment`
 */
export const SEARCH_ENVIRONMENT = 'environment';

/**
 * Search name for {@link attributes.ERROR_TYPE}. `error.type`
 */
export const SEARCH_ERROR_TYPE = 'error.type';

/**
 * Search name for {@link attributes.EVENT_ID}. `event.id`
 */
export const SEARCH_EVENT_ID = 'event.id';

/**
 * Search name for {@link attributes.EVENT_NAME}. `event.name`
 */
export const SEARCH_EVENT_NAME = 'event.name';

/**
 * Search name for {@link attributes.SENTRY_EVENT_SERIALIZED_BREADCRUMBS}. `event.serialized_breadcrumbs`
 */
export const SEARCH_EVENT_SERIALIZED__BREADCRUMBS = 'event.serialized_breadcrumbs';

/**
 * Search name for {@link attributes.SENTRY_EVENT_SERIALIZED_CONTEXTS}. `event.serialized_contexts`
 */
export const SEARCH_EVENT_SERIALIZED__CONTEXTS = 'event.serialized_contexts';

/**
 * Search name for {@link attributes.SENTRY_EVENT_SERIALIZED_EXTRA}. `event.serialized_extra`
 */
export const SEARCH_EVENT_SERIALIZED__EXTRA = 'event.serialized_extra';

/**
 * Search name for {@link attributes.SENTRY_EVENT_SERIALIZED_META}. `event.serialized_meta`
 */
export const SEARCH_EVENT_SERIALIZED__META = 'event.serialized_meta';

/**
 * Search name for {@link attributes.EXCEPTION_ESCAPED}. `exception.escaped`
 */
export const SEARCH_EXCEPTION_ESCAPED = 'exception.escaped';

/**
 * Search name for {@link attributes.EXCEPTION_MESSAGE}. `exception.message`
 */
export const SEARCH_EXCEPTION_MESSAGE = 'exception.message';

/**
 * Search name for {@link attributes.EXCEPTION_STACKTRACE}. `exception.stacktrace`
 */
export const SEARCH_EXCEPTION_STACKTRACE = 'exception.stacktrace';

/**
 * Search name for {@link attributes.EXCEPTION_TYPE}. `exception.type`
 */
export const SEARCH_EXCEPTION_TYPE = 'exception.type';

/**
 * Search name for {@link attributes.SENTRY_EXCLUSIVE_TIME}. `exclusive_time`
 */
export const SEARCH_EXCLUSIVE__TIME = 'exclusive_time';

/**
 * Search name for {@link attributes.FAAS_COLDSTART}. `faas.coldstart`
 */
export const SEARCH_FAAS_COLDSTART = 'faas.coldstart';

/**
 * Search name for {@link attributes.FAAS_CRON}. `faas.cron`
 */
export const SEARCH_FAAS_CRON = 'faas.cron';

/**
 * Search name for {@link attributes.FAAS_DURATION_IN_MS}. `faas.duration_in_ms`
 */
export const SEARCH_FAAS_DURATION__IN__MS = 'faas.duration_in_ms';

/**
 * Search name for {@link attributes.FAAS_ENTRY_POINT}. `faas.entry_point`
 */
export const SEARCH_FAAS_ENTRY__POINT = 'faas.entry_point';

/**
 * Search name for {@link attributes.FAAS_EXECUTION}. `faas.execution`
 *
 * @deprecated Use {@link SEARCH_FAAS_INVOCATION__ID} (`faas.invocation_id`) instead
 */
export const SEARCH_FAAS_EXECUTION = 'faas.execution';

/**
 * Search name for {@link attributes.FAAS_ID}. `faas.id`
 *
 * @deprecated Use {@link SEARCH_CLOUD_RESOURCE__ID} (`cloud.resource_id`) instead
 */
export const SEARCH_FAAS_ID = 'faas.id';

/**
 * Search name for {@link attributes.FAAS_IDENTITY}. `faas.identity`
 */
export const SEARCH_FAAS_IDENTITY = 'faas.identity';

/**
 * Search name for {@link attributes.FAAS_INVOCATION_ID}. `faas.invocation_id`
 */
export const SEARCH_FAAS_INVOCATION__ID = 'faas.invocation_id';

/**
 * Search name for {@link attributes.FAAS_INVOKED_NAME}. `faas.invoked_name`
 */
export const SEARCH_FAAS_INVOKED__NAME = 'faas.invoked_name';

/**
 * Search name for {@link attributes.FAAS_INVOKED_PROVIDER}. `faas.invoked_provider`
 */
export const SEARCH_FAAS_INVOKED__PROVIDER = 'faas.invoked_provider';

/**
 * Search name for {@link attributes.FAAS_INVOKED_REGION}. `faas.invoked_region`
 */
export const SEARCH_FAAS_INVOKED__REGION = 'faas.invoked_region';

/**
 * Search name for {@link attributes.FAAS_NAME}. `faas.name`
 */
export const SEARCH_FAAS_NAME = 'faas.name';

/**
 * Search name for {@link attributes.FAAS_TIME}. `faas.time`
 */
export const SEARCH_FAAS_TIME = 'faas.time';

/**
 * Search name for {@link attributes.FAAS_TRIGGER}. `faas.trigger`
 */
export const SEARCH_FAAS_TRIGGER = 'faas.trigger';

/**
 * Search name for {@link attributes.FAAS_VERSION}. `faas.version`
 */
export const SEARCH_FAAS_VERSION = 'faas.version';

/**
 * Search name for {@link attributes.FCP}. `fcp`
 *
 * @deprecated Use {@link SEARCH_BROWSER_WEB__VITAL_FCP_VALUE} (`browser.web_vital.fcp.value`) instead
 */
export const SEARCH_FCP = 'fcp';

/**
 * Search name for {@link attributes.FILE_PATH}. `file.path`
 */
export const SEARCH_FILE_PATH = 'file.path';

/**
 * Search name for {@link attributes.FILE_SIZE}. `file.size`
 */
export const SEARCH_FILE_SIZE = 'file.size';

/**
 * Search name for {@link attributes.FLAG_EVALUATION_KEY}. `flag.evaluation.<key>`
 */
export const SEARCH_FLAG_EVALUATION_KEY = 'flag.evaluation.<key>';

/**
 * Search name for {@link attributes.FP}. `fp`
 *
 * @deprecated Use {@link SEARCH_BROWSER_WEB__VITAL_FP_VALUE} (`browser.web_vital.fp.value`) instead
 */
export const SEARCH_FP = 'fp';

/**
 * Search name for {@link attributes.FRAMES_DELAY}. `frames.delay`
 *
 * @deprecated Use {@link SEARCH_MOBILE_FRAMES__DELAY} (`mobile.frames_delay`) instead
 */
export const SEARCH_FRAMES_DELAY = 'frames.delay';

/**
 * Search name for {@link attributes.FRAMES_FROZEN}. `frames.frozen`
 *
 * @deprecated Use {@link SEARCH_MOBILE_FROZEN__FRAMES} (`mobile.frozen_frames`) instead
 */
export const SEARCH_FRAMES_FROZEN = 'frames.frozen';

/**
 * Search name for {@link attributes.FRAMES_SLOW}. `frames.slow`
 *
 * @deprecated Use {@link SEARCH_MOBILE_SLOW__FRAMES} (`mobile.slow_frames`) instead
 */
export const SEARCH_FRAMES_SLOW = 'frames.slow';

/**
 * Search name for {@link attributes.FRAMES_TOTAL}. `frames.total`
 *
 * @deprecated Use {@link SEARCH_MOBILE_TOTAL__FRAMES} (`mobile.total_frames`) instead
 */
export const SEARCH_FRAMES_TOTAL = 'frames.total';

/**
 * Search name for {@link attributes.FRAMES_FROZEN_RATE}. `frames_frozen_rate`
 *
 * @deprecated Use {@link SEARCH_APP_VITALS_FRAMES_FROZEN_RATE} (`app.vitals.frames.frozen.rate`) instead
 */
export const SEARCH_FRAMES__FROZEN__RATE = 'frames_frozen_rate';

/**
 * Search name for {@link attributes.FRAMES_SLOW_RATE}. `frames_slow_rate`
 *
 * @deprecated Use {@link SEARCH_APP_VITALS_FRAMES_SLOW_RATE} (`app.vitals.frames.slow.rate`) instead
 */
export const SEARCH_FRAMES__SLOW__RATE = 'frames_slow_rate';

/**
 * Search name for {@link attributes.FS_ERROR}. `fs_error`
 *
 * @deprecated Use {@link SEARCH_ERROR_TYPE} (`error.type`) instead
 */
export const SEARCH_FS__ERROR = 'fs_error';

/**
 * Search name for {@link attributes.GCP_FUNCTION_CONTEXT_EVENT_ID}. `gcp.function.context.event_id`
 */
export const SEARCH_GCP_FUNCTION_CONTEXT_EVENT__ID = 'gcp.function.context.event_id';

/**
 * Search name for {@link attributes.GCP_FUNCTION_CONTEXT_EVENT_TYPE}. `gcp.function.context.event_type`
 */
export const SEARCH_GCP_FUNCTION_CONTEXT_EVENT__TYPE = 'gcp.function.context.event_type';

/**
 * Search name for {@link attributes.GCP_FUNCTION_CONTEXT_ID}. `gcp.function.context.id`
 */
export const SEARCH_GCP_FUNCTION_CONTEXT_ID = 'gcp.function.context.id';

/**
 * Search name for {@link attributes.GCP_FUNCTION_CONTEXT_RESOURCE}. `gcp.function.context.resource`
 */
export const SEARCH_GCP_FUNCTION_CONTEXT_RESOURCE = 'gcp.function.context.resource';

/**
 * Search name for {@link attributes.GCP_FUNCTION_CONTEXT_SOURCE}. `gcp.function.context.source`
 */
export const SEARCH_GCP_FUNCTION_CONTEXT_SOURCE = 'gcp.function.context.source';

/**
 * Search name for {@link attributes.GCP_FUNCTION_CONTEXT_SPECVERSION}. `gcp.function.context.specversion`
 */
export const SEARCH_GCP_FUNCTION_CONTEXT_SPECVERSION = 'gcp.function.context.specversion';

/**
 * Search name for {@link attributes.GCP_FUNCTION_CONTEXT_TIME}. `gcp.function.context.time`
 */
export const SEARCH_GCP_FUNCTION_CONTEXT_TIME = 'gcp.function.context.time';

/**
 * Search name for {@link attributes.GCP_FUNCTION_CONTEXT_TIMESTAMP}. `gcp.function.context.timestamp`
 */
export const SEARCH_GCP_FUNCTION_CONTEXT_TIMESTAMP = 'gcp.function.context.timestamp';

/**
 * Search name for {@link attributes.GCP_FUNCTION_CONTEXT_TYPE}. `gcp.function.context.type`
 */
export const SEARCH_GCP_FUNCTION_CONTEXT_TYPE = 'gcp.function.context.type';

/**
 * Search name for {@link attributes.GCP_PROJECT_ID}. `gcp.project.id`
 */
export const SEARCH_GCP_PROJECT_ID = 'gcp.project.id';

/**
 * Search name for {@link attributes.GCP_REGION}. `gcp_region`
 *
 * @deprecated Use {@link SEARCH_CLOUD_REGION} (`cloud.region`) instead
 */
export const SEARCH_GCP__REGION = 'gcp_region';

/**
 * Search name for {@link attributes.GEN_AI_AGENT_NAME}. `gen_ai.agent.name`
 */
export const SEARCH_GEN__AI_AGENT_NAME = 'gen_ai.agent.name';

/**
 * Search name for {@link attributes.GEN_AI_CONTEXT_UTILIZATION}. `gen_ai.context.utilization`
 */
export const SEARCH_GEN__AI_CONTEXT_UTILIZATION = 'gen_ai.context.utilization';

/**
 * Search name for {@link attributes.GEN_AI_CONTEXT_WINDOW_SIZE}. `gen_ai.context.window_size`
 */
export const SEARCH_GEN__AI_CONTEXT_WINDOW__SIZE = 'gen_ai.context.window_size';

/**
 * Search name for {@link attributes.GEN_AI_CONVERSATION_ID}. `gen_ai.conversation.id`
 */
export const SEARCH_GEN__AI_CONVERSATION_ID = 'gen_ai.conversation.id';

/**
 * Search name for {@link attributes.GEN_AI_COST_CACHE_CREATION_INPUT_TOKENS}. `gen_ai.cost.cache_creation.input_tokens`
 */
export const SEARCH_GEN__AI_COST_CACHE__CREATION_INPUT__TOKENS = 'gen_ai.cost.cache_creation.input_tokens';

/**
 * Search name for {@link attributes.GEN_AI_COST_CACHE_READ_INPUT_TOKENS}. `gen_ai.cost.cache_read.input_tokens`
 */
export const SEARCH_GEN__AI_COST_CACHE__READ_INPUT__TOKENS = 'gen_ai.cost.cache_read.input_tokens';

/**
 * Search name for {@link attributes.GEN_AI_COST_INPUT_TOKENS}. `gen_ai.cost.input_tokens`
 */
export const SEARCH_GEN__AI_COST_INPUT__TOKENS = 'gen_ai.cost.input_tokens';

/**
 * Search name for {@link attributes.GEN_AI_COST_OUTPUT_TOKENS}. `gen_ai.cost.output_tokens`
 */
export const SEARCH_GEN__AI_COST_OUTPUT__TOKENS = 'gen_ai.cost.output_tokens';

/**
 * Search name for {@link attributes.GEN_AI_COST_REASONING_OUTPUT_TOKENS}. `gen_ai.cost.reasoning.output_tokens`
 */
export const SEARCH_GEN__AI_COST_REASONING_OUTPUT__TOKENS = 'gen_ai.cost.reasoning.output_tokens';

/**
 * Search name for {@link attributes.GEN_AI_COST_TOTAL_TOKENS}. `gen_ai.cost.total_tokens`
 */
export const SEARCH_GEN__AI_COST_TOTAL__TOKENS = 'gen_ai.cost.total_tokens';

/**
 * Search name for {@link attributes.GEN_AI_EMBEDDINGS_INPUT}. `gen_ai.embeddings.input`
 */
export const SEARCH_GEN__AI_EMBEDDINGS_INPUT = 'gen_ai.embeddings.input';

/**
 * Search name for {@link attributes.GEN_AI_FUNCTION_ID}. `gen_ai.function_id`
 */
export const SEARCH_GEN__AI_FUNCTION__ID = 'gen_ai.function_id';

/**
 * Search name for {@link attributes.GEN_AI_INPUT_MESSAGES}. `gen_ai.input.messages`
 */
export const SEARCH_GEN__AI_INPUT_MESSAGES = 'gen_ai.input.messages';

/**
 * Search name for {@link attributes.GEN_AI_OPERATION_NAME}. `gen_ai.operation.name`
 */
export const SEARCH_GEN__AI_OPERATION_NAME = 'gen_ai.operation.name';

/**
 * Search name for {@link attributes.GEN_AI_OPERATION_TYPE}. `gen_ai.operation.type`
 */
export const SEARCH_GEN__AI_OPERATION_TYPE = 'gen_ai.operation.type';

/**
 * Search name for {@link attributes.GEN_AI_OUTPUT_MESSAGES}. `gen_ai.output.messages`
 */
export const SEARCH_GEN__AI_OUTPUT_MESSAGES = 'gen_ai.output.messages';

/**
 * Search name for {@link attributes.GEN_AI_PIPELINE_NAME}. `gen_ai.pipeline.name`
 */
export const SEARCH_GEN__AI_PIPELINE_NAME = 'gen_ai.pipeline.name';

/**
 * Search name for {@link attributes.GEN_AI_PROMPT}. `gen_ai.prompt`
 *
 * @deprecated Use {@link SEARCH_GEN__AI_INPUT_MESSAGES} (`gen_ai.input.messages`) instead
 */
export const SEARCH_GEN__AI_PROMPT = 'gen_ai.prompt';

/**
 * Search name for {@link attributes.GEN_AI_PROMPT_NAME}. `gen_ai.prompt.name`
 */
export const SEARCH_GEN__AI_PROMPT_NAME = 'gen_ai.prompt.name';

/**
 * Search name for {@link attributes.GEN_AI_PROVIDER_NAME}. `gen_ai.provider.name`
 */
export const SEARCH_GEN__AI_PROVIDER_NAME = 'gen_ai.provider.name';

/**
 * Search name for {@link attributes.GEN_AI_REQUEST_AVAILABLE_TOOLS}. `gen_ai.request.available_tools`
 *
 * @deprecated Use {@link SEARCH_GEN__AI_TOOL_DEFINITIONS} (`gen_ai.tool.definitions`) instead
 */
export const SEARCH_GEN__AI_REQUEST_AVAILABLE__TOOLS = 'gen_ai.request.available_tools';

/**
 * Search name for {@link attributes.GEN_AI_REQUEST_FREQUENCY_PENALTY}. `gen_ai.request.frequency_penalty`
 */
export const SEARCH_GEN__AI_REQUEST_FREQUENCY__PENALTY = 'gen_ai.request.frequency_penalty';

/**
 * Search name for {@link attributes.GEN_AI_REQUEST_MAX_TOKENS}. `gen_ai.request.max_tokens`
 */
export const SEARCH_GEN__AI_REQUEST_MAX__TOKENS = 'gen_ai.request.max_tokens';

/**
 * Search name for {@link attributes.GEN_AI_REQUEST_MESSAGES}. `gen_ai.request.messages`
 *
 * @deprecated Use {@link SEARCH_GEN__AI_INPUT_MESSAGES} (`gen_ai.input.messages`) instead
 */
export const SEARCH_GEN__AI_REQUEST_MESSAGES = 'gen_ai.request.messages';

/**
 * Search name for {@link attributes.GEN_AI_REQUEST_MODEL}. `gen_ai.request.model`
 */
export const SEARCH_GEN__AI_REQUEST_MODEL = 'gen_ai.request.model';

/**
 * Search name for {@link attributes.GEN_AI_REQUEST_PRESENCE_PENALTY}. `gen_ai.request.presence_penalty`
 */
export const SEARCH_GEN__AI_REQUEST_PRESENCE__PENALTY = 'gen_ai.request.presence_penalty';

/**
 * Search name for {@link attributes.GEN_AI_REQUEST_REASONING_LEVEL}. `gen_ai.request.reasoning.level`
 */
export const SEARCH_GEN__AI_REQUEST_REASONING_LEVEL = 'gen_ai.request.reasoning.level';

/**
 * Search name for {@link attributes.GEN_AI_REQUEST_SCHEMA}. `gen_ai.request.schema`
 *
 * @deprecated
 */
export const SEARCH_GEN__AI_REQUEST_SCHEMA = 'gen_ai.request.schema';

/**
 * Search name for {@link attributes.GEN_AI_REQUEST_SEED}. `gen_ai.request.seed`
 */
export const SEARCH_GEN__AI_REQUEST_SEED = 'gen_ai.request.seed';

/**
 * Search name for {@link attributes.GEN_AI_REQUEST_STOP_SEQUENCES}. `gen_ai.request.stop_sequences`
 */
export const SEARCH_GEN__AI_REQUEST_STOP__SEQUENCES = 'gen_ai.request.stop_sequences';

/**
 * Search name for {@link attributes.GEN_AI_REQUEST_TEMPERATURE}. `gen_ai.request.temperature`
 */
export const SEARCH_GEN__AI_REQUEST_TEMPERATURE = 'gen_ai.request.temperature';

/**
 * Search name for {@link attributes.GEN_AI_REQUEST_TOP_K}. `gen_ai.request.top_k`
 */
export const SEARCH_GEN__AI_REQUEST_TOP__K = 'gen_ai.request.top_k';

/**
 * Search name for {@link attributes.GEN_AI_REQUEST_TOP_P}. `gen_ai.request.top_p`
 */
export const SEARCH_GEN__AI_REQUEST_TOP__P = 'gen_ai.request.top_p';

/**
 * Search name for {@link attributes.GEN_AI_RESPONSE_FINISH_REASON}. `gen_ai.response.finish_reason`
 *
 * @deprecated Use {@link SEARCH_GEN__AI_RESPONSE_FINISH__REASONS} (`gen_ai.response.finish_reasons`) instead
 */
export const SEARCH_GEN__AI_RESPONSE_FINISH__REASON = 'gen_ai.response.finish_reason';

/**
 * Search name for {@link attributes.GEN_AI_RESPONSE_FINISH_REASONS}. `gen_ai.response.finish_reasons`
 */
export const SEARCH_GEN__AI_RESPONSE_FINISH__REASONS = 'gen_ai.response.finish_reasons';

/**
 * Search name for {@link attributes.GEN_AI_RESPONSE_ID}. `gen_ai.response.id`
 */
export const SEARCH_GEN__AI_RESPONSE_ID = 'gen_ai.response.id';

/**
 * Search name for {@link attributes.GEN_AI_RESPONSE_MODEL}. `gen_ai.response.model`
 */
export const SEARCH_GEN__AI_RESPONSE_MODEL = 'gen_ai.response.model';

/**
 * Search name for {@link attributes.GEN_AI_RESPONSE_OBJECT}. `gen_ai.response.object`
 *
 * @deprecated
 */
export const SEARCH_GEN__AI_RESPONSE_OBJECT = 'gen_ai.response.object';

/**
 * Search name for {@link attributes.GEN_AI_RESPONSE_STREAMING}. `gen_ai.response.streaming`
 */
export const SEARCH_GEN__AI_RESPONSE_STREAMING = 'gen_ai.response.streaming';

/**
 * Search name for {@link attributes.GEN_AI_RESPONSE_TEXT}. `gen_ai.response.text`
 *
 * @deprecated Use {@link SEARCH_GEN__AI_OUTPUT_MESSAGES} (`gen_ai.output.messages`) instead
 */
export const SEARCH_GEN__AI_RESPONSE_TEXT = 'gen_ai.response.text';

/**
 * Search name for {@link attributes.GEN_AI_RESPONSE_TIME_TO_FIRST_CHUNK}. `gen_ai.response.time_to_first_chunk`
 */
export const SEARCH_GEN__AI_RESPONSE_TIME__TO__FIRST__CHUNK = 'gen_ai.response.time_to_first_chunk';

/**
 * Search name for {@link attributes.GEN_AI_RESPONSE_TIME_TO_FIRST_TOKEN}. `gen_ai.response.time_to_first_token`
 *
 * @deprecated Use {@link SEARCH_GEN__AI_RESPONSE_TIME__TO__FIRST__CHUNK} (`gen_ai.response.time_to_first_chunk`) instead
 */
export const SEARCH_GEN__AI_RESPONSE_TIME__TO__FIRST__TOKEN = 'gen_ai.response.time_to_first_token';

/**
 * Search name for {@link attributes.GEN_AI_RESPONSE_TOKENS_PER_SECOND}. `gen_ai.response.tokens_per_second`
 */
export const SEARCH_GEN__AI_RESPONSE_TOKENS__PER__SECOND = 'gen_ai.response.tokens_per_second';

/**
 * Search name for {@link attributes.GEN_AI_RESPONSE_TOOL_CALLS}. `gen_ai.response.tool_calls`
 *
 * @deprecated Use {@link SEARCH_GEN__AI_OUTPUT_MESSAGES} (`gen_ai.output.messages`) instead
 */
export const SEARCH_GEN__AI_RESPONSE_TOOL__CALLS = 'gen_ai.response.tool_calls';

/**
 * Search name for {@link attributes.GEN_AI_SYSTEM}. `gen_ai.system`
 *
 * @deprecated Use {@link SEARCH_GEN__AI_PROVIDER_NAME} (`gen_ai.provider.name`) instead
 */
export const SEARCH_GEN__AI_SYSTEM = 'gen_ai.system';

/**
 * Search name for {@link attributes.GEN_AI_SYSTEM_MESSAGE}. `gen_ai.system.message`
 *
 * @deprecated Use {@link SEARCH_GEN__AI_SYSTEM__INSTRUCTIONS} (`gen_ai.system_instructions`) instead
 */
export const SEARCH_GEN__AI_SYSTEM_MESSAGE = 'gen_ai.system.message';

/**
 * Search name for {@link attributes.GEN_AI_SYSTEM_INSTRUCTIONS}. `gen_ai.system_instructions`
 */
export const SEARCH_GEN__AI_SYSTEM__INSTRUCTIONS = 'gen_ai.system_instructions';

/**
 * Search name for {@link attributes.GEN_AI_TOOL_CALL_ARGUMENTS}. `gen_ai.tool.call.arguments`
 */
export const SEARCH_GEN__AI_TOOL_CALL_ARGUMENTS = 'gen_ai.tool.call.arguments';

/**
 * Search name for {@link attributes.GEN_AI_TOOL_CALL_RESULT}. `gen_ai.tool.call.result`
 */
export const SEARCH_GEN__AI_TOOL_CALL_RESULT = 'gen_ai.tool.call.result';

/**
 * Search name for {@link attributes.GEN_AI_TOOL_DEFINITIONS}. `gen_ai.tool.definitions`
 */
export const SEARCH_GEN__AI_TOOL_DEFINITIONS = 'gen_ai.tool.definitions';

/**
 * Search name for {@link attributes.GEN_AI_TOOL_DESCRIPTION}. `gen_ai.tool.description`
 */
export const SEARCH_GEN__AI_TOOL_DESCRIPTION = 'gen_ai.tool.description';

/**
 * Search name for {@link attributes.GEN_AI_TOOL_INPUT}. `gen_ai.tool.input`
 *
 * @deprecated Use {@link SEARCH_GEN__AI_TOOL_CALL_ARGUMENTS} (`gen_ai.tool.call.arguments`) instead
 */
export const SEARCH_GEN__AI_TOOL_INPUT = 'gen_ai.tool.input';

/**
 * Search name for {@link attributes.GEN_AI_TOOL_MESSAGE}. `gen_ai.tool.message`
 *
 * @deprecated Use {@link SEARCH_GEN__AI_TOOL_CALL_RESULT} (`gen_ai.tool.call.result`) instead
 */
export const SEARCH_GEN__AI_TOOL_MESSAGE = 'gen_ai.tool.message';

/**
 * Search name for {@link attributes.GEN_AI_TOOL_NAME}. `gen_ai.tool.name`
 */
export const SEARCH_GEN__AI_TOOL_NAME = 'gen_ai.tool.name';

/**
 * Search name for {@link attributes.GEN_AI_TOOL_OUTPUT}. `gen_ai.tool.output`
 *
 * @deprecated Use {@link SEARCH_GEN__AI_TOOL_CALL_RESULT} (`gen_ai.tool.call.result`) instead
 */
export const SEARCH_GEN__AI_TOOL_OUTPUT = 'gen_ai.tool.output';

/**
 * Search name for {@link attributes.GEN_AI_TOOL_TYPE}. `gen_ai.tool.type`
 *
 * @deprecated
 */
export const SEARCH_GEN__AI_TOOL_TYPE = 'gen_ai.tool.type';

/**
 * Search name for {@link attributes.GEN_AI_USAGE_CACHE_CREATION_INPUT_TOKENS}. `gen_ai.usage.cache_creation.input_tokens`
 */
export const SEARCH_GEN__AI_USAGE_CACHE__CREATION_INPUT__TOKENS = 'gen_ai.usage.cache_creation.input_tokens';

/**
 * Search name for {@link attributes.GEN_AI_USAGE_CACHE_READ_INPUT_TOKENS}. `gen_ai.usage.cache_read.input_tokens`
 */
export const SEARCH_GEN__AI_USAGE_CACHE__READ_INPUT__TOKENS = 'gen_ai.usage.cache_read.input_tokens';

/**
 * Search name for {@link attributes.GEN_AI_USAGE_COMPLETION_TOKENS}. `gen_ai.usage.completion_tokens`
 *
 * @deprecated Use {@link SEARCH_GEN__AI_USAGE_OUTPUT__TOKENS} (`gen_ai.usage.output_tokens`) instead
 */
export const SEARCH_GEN__AI_USAGE_COMPLETION__TOKENS = 'gen_ai.usage.completion_tokens';

/**
 * Search name for {@link attributes.GEN_AI_USAGE_INPUT_TOKENS}. `gen_ai.usage.input_tokens`
 */
export const SEARCH_GEN__AI_USAGE_INPUT__TOKENS = 'gen_ai.usage.input_tokens';

/**
 * Search name for {@link attributes.GEN_AI_USAGE_INPUT_TOKENS_CACHE_WRITE}. `gen_ai.usage.input_tokens.cache_write`
 *
 * @deprecated Use {@link SEARCH_GEN__AI_USAGE_CACHE__CREATION_INPUT__TOKENS} (`gen_ai.usage.cache_creation.input_tokens`) instead
 */
export const SEARCH_GEN__AI_USAGE_INPUT__TOKENS_CACHE__WRITE = 'gen_ai.usage.input_tokens.cache_write';

/**
 * Search name for {@link attributes.GEN_AI_USAGE_INPUT_TOKENS_CACHED}. `gen_ai.usage.input_tokens.cached`
 *
 * @deprecated Use {@link SEARCH_GEN__AI_USAGE_CACHE__READ_INPUT__TOKENS} (`gen_ai.usage.cache_read.input_tokens`) instead
 */
export const SEARCH_GEN__AI_USAGE_INPUT__TOKENS_CACHED = 'gen_ai.usage.input_tokens.cached';

/**
 * Search name for {@link attributes.GEN_AI_USAGE_OUTPUT_TOKENS}. `gen_ai.usage.output_tokens`
 */
export const SEARCH_GEN__AI_USAGE_OUTPUT__TOKENS = 'gen_ai.usage.output_tokens';

/**
 * Search name for {@link attributes.GEN_AI_USAGE_OUTPUT_TOKENS_REASONING}. `gen_ai.usage.output_tokens.reasoning`
 *
 * @deprecated Use {@link SEARCH_GEN__AI_USAGE_REASONING_OUTPUT__TOKENS} (`gen_ai.usage.reasoning.output_tokens`) instead
 */
export const SEARCH_GEN__AI_USAGE_OUTPUT__TOKENS_REASONING = 'gen_ai.usage.output_tokens.reasoning';

/**
 * Search name for {@link attributes.GEN_AI_USAGE_PROMPT_TOKENS}. `gen_ai.usage.prompt_tokens`
 *
 * @deprecated Use {@link SEARCH_GEN__AI_USAGE_INPUT__TOKENS} (`gen_ai.usage.input_tokens`) instead
 */
export const SEARCH_GEN__AI_USAGE_PROMPT__TOKENS = 'gen_ai.usage.prompt_tokens';

/**
 * Search name for {@link attributes.GEN_AI_USAGE_REASONING_OUTPUT_TOKENS}. `gen_ai.usage.reasoning.output_tokens`
 */
export const SEARCH_GEN__AI_USAGE_REASONING_OUTPUT__TOKENS = 'gen_ai.usage.reasoning.output_tokens';

/**
 * Search name for {@link attributes.GEN_AI_USAGE_TOTAL_TOKENS}. `gen_ai.usage.total_tokens`
 */
export const SEARCH_GEN__AI_USAGE_TOTAL__TOKENS = 'gen_ai.usage.total_tokens';

/**
 * Search name for {@link attributes.GRAPHQL_DOCUMENT}. `graphql.document`
 */
export const SEARCH_GRAPHQL_DOCUMENT = 'graphql.document';

/**
 * Search name for {@link attributes.SENTRY_GRAPHQL_OPERATION}. `graphql.operation`
 */
export const SEARCH_GRAPHQL_OPERATION = 'graphql.operation';

/**
 * Search name for {@link attributes.GRAPHQL_OPERATION_NAME}. `graphql.operation.name`
 */
export const SEARCH_GRAPHQL_OPERATION_NAME = 'graphql.operation.name';

/**
 * Search name for {@link attributes.GRAPHQL_OPERATION_TYPE}. `graphql.operation.type`
 */
export const SEARCH_GRAPHQL_OPERATION_TYPE = 'graphql.operation.type';

/**
 * Search name for {@link attributes.GRAPHQL_PROCESSING_TYPE}. `graphql.processing.type`
 */
export const SEARCH_GRAPHQL_PROCESSING_TYPE = 'graphql.processing.type';

/**
 * Search name for {@link attributes.GRAPHQL_SOURCE}. `graphql.source`
 *
 * @deprecated Use {@link SEARCH_GRAPHQL_DOCUMENT} (`graphql.document`) instead
 */
export const SEARCH_GRAPHQL_SOURCE = 'graphql.source';

/**
 * Search name for {@link attributes.SENTRY_GROUP}. `group`
 *
 * @deprecated Use {@link SEARCH_SPAN_GROUP} (`span.group`) instead
 */
export const SEARCH_GROUP = 'group';

/**
 * Search name for {@link attributes.GRPC_ERROR_BAD_REQUEST_FIELD_VIOLATIONS}. `grpc.error.bad_request.field_violations`
 */
export const SEARCH_GRPC_ERROR_BAD__REQUEST_FIELD__VIOLATIONS = 'grpc.error.bad_request.field_violations';

/**
 * Search name for {@link attributes.GRPC_ERROR_DEBUG_INFO_DETAIL}. `grpc.error.debug_info.detail`
 */
export const SEARCH_GRPC_ERROR_DEBUG__INFO_DETAIL = 'grpc.error.debug_info.detail';

/**
 * Search name for {@link attributes.GRPC_ERROR_DEBUG_INFO_STACK_ENTRIES}. `grpc.error.debug_info.stack_entries`
 */
export const SEARCH_GRPC_ERROR_DEBUG__INFO_STACK__ENTRIES = 'grpc.error.debug_info.stack_entries';

/**
 * Search name for {@link attributes.GRPC_ERROR_ERROR_INFO_DOMAIN}. `grpc.error.error_info.domain`
 */
export const SEARCH_GRPC_ERROR_ERROR__INFO_DOMAIN = 'grpc.error.error_info.domain';

/**
 * Search name for {@link attributes.GRPC_ERROR_ERROR_INFO_METADATA_KEY}. `grpc.error.error_info.metadata.<key>`
 */
export const SEARCH_GRPC_ERROR_ERROR__INFO_METADATA_KEY = 'grpc.error.error_info.metadata.<key>';

/**
 * Search name for {@link attributes.GRPC_ERROR_ERROR_INFO_REASON}. `grpc.error.error_info.reason`
 */
export const SEARCH_GRPC_ERROR_ERROR__INFO_REASON = 'grpc.error.error_info.reason';

/**
 * Search name for {@link attributes.GRPC_ERROR_PRECONDITION_FAILURE_VIOLATIONS}. `grpc.error.precondition_failure.violations`
 */
export const SEARCH_GRPC_ERROR_PRECONDITION__FAILURE_VIOLATIONS = 'grpc.error.precondition_failure.violations';

/**
 * Search name for {@link attributes.GRPC_ERROR_QUOTA_FAILURE_VIOLATIONS}. `grpc.error.quota_failure.violations`
 */
export const SEARCH_GRPC_ERROR_QUOTA__FAILURE_VIOLATIONS = 'grpc.error.quota_failure.violations';

/**
 * Search name for {@link attributes.GRPC_ERROR_RESOURCE_INFO_DESCRIPTION}. `grpc.error.resource_info.description`
 */
export const SEARCH_GRPC_ERROR_RESOURCE__INFO_DESCRIPTION = 'grpc.error.resource_info.description';

/**
 * Search name for {@link attributes.GRPC_ERROR_RESOURCE_INFO_OWNER}. `grpc.error.resource_info.owner`
 */
export const SEARCH_GRPC_ERROR_RESOURCE__INFO_OWNER = 'grpc.error.resource_info.owner';

/**
 * Search name for {@link attributes.GRPC_ERROR_RESOURCE_INFO_RESOURCE_NAME}. `grpc.error.resource_info.resource_name`
 */
export const SEARCH_GRPC_ERROR_RESOURCE__INFO_RESOURCE__NAME = 'grpc.error.resource_info.resource_name';

/**
 * Search name for {@link attributes.GRPC_ERROR_RESOURCE_INFO_RESOURCE_TYPE}. `grpc.error.resource_info.resource_type`
 */
export const SEARCH_GRPC_ERROR_RESOURCE__INFO_RESOURCE__TYPE = 'grpc.error.resource_info.resource_type';

/**
 * Search name for {@link attributes.GRPC_ERROR_RETRY_INFO_RETRY_DELAY_MS}. `grpc.error.retry_info.retry_delay_ms`
 */
export const SEARCH_GRPC_ERROR_RETRY__INFO_RETRY__DELAY__MS = 'grpc.error.retry_info.retry_delay_ms';

/**
 * Search name for {@link attributes.HARDWARECONCURRENCY}. `hardwareConcurrency`
 *
 * @deprecated Use {@link SEARCH_DEVICE_PROCESSOR__COUNT} (`device.processor_count`) instead
 */
export const SEARCH_HARDWARECONCURRENCY = 'hardwareConcurrency';

/**
 * Search name for {@link attributes.HTTP_CLIENT_IP}. `http.client_ip`
 *
 * @deprecated Use {@link SEARCH_CLIENT_ADDRESS} (`client.address`) instead
 */
export const SEARCH_HTTP_CLIENT__IP = 'http.client_ip';

/**
 * Search name for {@link attributes.HTTP_DECODED_RESPONSE_CONTENT_LENGTH}. `http.decoded_response_content_length`
 */
export const SEARCH_HTTP_DECODED__RESPONSE__CONTENT__LENGTH = 'http.decoded_response_content_length';

/**
 * Search name for {@link attributes.HTTP_FLAVOR}. `http.flavor`
 *
 * @deprecated Use {@link SEARCH_NETWORK_PROTOCOL_VERSION} (`network.protocol.version`) instead
 */
export const SEARCH_HTTP_FLAVOR = 'http.flavor';

/**
 * Search name for {@link attributes.HTTP_FRAGMENT}. `http.fragment`
 */
export const SEARCH_HTTP_FRAGMENT = 'http.fragment';

/**
 * Search name for {@link attributes.HTTP_HOST}. `http.host`
 *
 * @deprecated Use {@link SEARCH_SERVER_ADDRESS} (`server.address`) instead
 */
export const SEARCH_HTTP_HOST = 'http.host';

/**
 * Search name for {@link attributes.HTTP_METHOD}. `http.method`
 *
 * @deprecated Use {@link SEARCH_HTTP_REQUEST_METHOD} (`http.request.method`) instead
 */
export const SEARCH_HTTP_METHOD = 'http.method';

/**
 * Search name for {@link attributes.SENTRY_HTTP_PREFETCH}. `http.prefetch`
 */
export const SEARCH_HTTP_PREFETCH = 'http.prefetch';

/**
 * Search name for {@link attributes.HTTP_QUERY}. `http.query`
 */
export const SEARCH_HTTP_QUERY = 'http.query';

/**
 * Search name for {@link attributes.HTTP_REQUEST_BODY_DATA}. `http.request.body.data`
 */
export const SEARCH_HTTP_REQUEST_BODY_DATA = 'http.request.body.data';

/**
 * Search name for {@link attributes.HTTP_REQUEST_BODY_DECODED_SIZE}. `http.request.body.decoded_size`
 */
export const SEARCH_HTTP_REQUEST_BODY_DECODED__SIZE = 'http.request.body.decoded_size';

/**
 * Search name for {@link attributes.HTTP_REQUEST_BODY_SIZE}. `http.request.body.size`
 */
export const SEARCH_HTTP_REQUEST_BODY_SIZE = 'http.request.body.size';

/**
 * Search name for {@link attributes.HTTP_REQUEST_CONNECT_START}. `http.request.connect_start`
 */
export const SEARCH_HTTP_REQUEST_CONNECT__START = 'http.request.connect_start';

/**
 * Search name for {@link attributes.HTTP_REQUEST_CONNECTION_END}. `http.request.connection_end`
 */
export const SEARCH_HTTP_REQUEST_CONNECTION__END = 'http.request.connection_end';

/**
 * Search name for {@link attributes.HTTP_REQUEST_DOMAIN_LOOKUP_END}. `http.request.domain_lookup_end`
 */
export const SEARCH_HTTP_REQUEST_DOMAIN__LOOKUP__END = 'http.request.domain_lookup_end';

/**
 * Search name for {@link attributes.HTTP_REQUEST_DOMAIN_LOOKUP_START}. `http.request.domain_lookup_start`
 */
export const SEARCH_HTTP_REQUEST_DOMAIN__LOOKUP__START = 'http.request.domain_lookup_start';

/**
 * Search name for {@link attributes.HTTP_REQUEST_FETCH_START}. `http.request.fetch_start`
 */
export const SEARCH_HTTP_REQUEST_FETCH__START = 'http.request.fetch_start';

/**
 * Search name for {@link attributes.HTTP_REQUEST_HEADER_KEY}. `http.request.header.<key>`
 */
export const SEARCH_HTTP_REQUEST_HEADER_KEY = 'http.request.header.<key>';

/**
 * Search name for {@link attributes.HTTP_REQUEST_METHOD}. `http.request.method`
 */
export const SEARCH_HTTP_REQUEST_METHOD = 'http.request.method';

/**
 * Search name for {@link attributes.HTTP_REQUEST_REDIRECT_END}. `http.request.redirect_end`
 */
export const SEARCH_HTTP_REQUEST_REDIRECT__END = 'http.request.redirect_end';

/**
 * Search name for {@link attributes.HTTP_REQUEST_REDIRECT_START}. `http.request.redirect_start`
 */
export const SEARCH_HTTP_REQUEST_REDIRECT__START = 'http.request.redirect_start';

/**
 * Search name for {@link attributes.HTTP_REQUEST_REQUEST_START}. `http.request.request_start`
 */
export const SEARCH_HTTP_REQUEST_REQUEST__START = 'http.request.request_start';

/**
 * Search name for {@link attributes.HTTP_REQUEST_RESEND_COUNT}. `http.request.resend_count`
 */
export const SEARCH_HTTP_REQUEST_RESEND__COUNT = 'http.request.resend_count';

/**
 * Search name for {@link attributes.HTTP_REQUEST_RESPONSE_END}. `http.request.response_end`
 */
export const SEARCH_HTTP_REQUEST_RESPONSE__END = 'http.request.response_end';

/**
 * Search name for {@link attributes.HTTP_REQUEST_RESPONSE_START}. `http.request.response_start`
 */
export const SEARCH_HTTP_REQUEST_RESPONSE__START = 'http.request.response_start';

/**
 * Search name for {@link attributes.HTTP_REQUEST_SAME_ORIGIN}. `http.request.same_origin`
 */
export const SEARCH_HTTP_REQUEST_SAME__ORIGIN = 'http.request.same_origin';

/**
 * Search name for {@link attributes.HTTP_REQUEST_SECURE_CONNECTION_START}. `http.request.secure_connection_start`
 */
export const SEARCH_HTTP_REQUEST_SECURE__CONNECTION__START = 'http.request.secure_connection_start';

/**
 * Search name for {@link attributes.HTTP_REQUEST_TIME_TO_FIRST_BYTE}. `http.request.time_to_first_byte`
 */
export const SEARCH_HTTP_REQUEST_TIME__TO__FIRST__BYTE = 'http.request.time_to_first_byte';

/**
 * Search name for {@link attributes.HTTP_REQUEST_WORKER_START}. `http.request.worker_start`
 */
export const SEARCH_HTTP_REQUEST_WORKER__START = 'http.request.worker_start';

/**
 * Search name for {@link attributes.HTTP_REQUEST_CONTENT_LENGTH}. `http.request_content_length`
 *
 * @deprecated Use {@link SEARCH_HTTP_REQUEST_BODY_SIZE} (`http.request.body.size`) instead
 */
export const SEARCH_HTTP_REQUEST__CONTENT__LENGTH = 'http.request_content_length';

/**
 * Search name for {@link attributes.HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED}. `http.request_content_length_uncompressed`
 *
 * @deprecated Use {@link SEARCH_HTTP_REQUEST_BODY_DECODED__SIZE} (`http.request.body.decoded_size`) instead
 */
export const SEARCH_HTTP_REQUEST__CONTENT__LENGTH__UNCOMPRESSED = 'http.request_content_length_uncompressed';

/**
 * Search name for {@link attributes._HTTP_REQUEST_METHOD}. `http.request_method`
 *
 * @deprecated Use {@link SEARCH_HTTP_REQUEST_METHOD} (`http.request.method`) instead
 */
export const SEARCH_HTTP_REQUEST__METHOD = 'http.request_method';

/**
 * Search name for {@link attributes.HTTP_RESPONSE_BODY_DECODED_SIZE}. `http.response.body.decoded_size`
 */
export const SEARCH_HTTP_RESPONSE_BODY_DECODED__SIZE = 'http.response.body.decoded_size';

/**
 * Search name for {@link attributes.HTTP_RESPONSE_BODY_SIZE}. `http.response.body.size`
 */
export const SEARCH_HTTP_RESPONSE_BODY_SIZE = 'http.response.body.size';

/**
 * Search name for {@link attributes.HTTP_RESPONSE_HEADER_KEY}. `http.response.header.<key>`
 */
export const SEARCH_HTTP_RESPONSE_HEADER_KEY = 'http.response.header.<key>';

/**
 * Search name for {@link attributes.HTTP_RESPONSE_CONTENT_LENGTH}. `http.response.header.content-length`
 *
 * @deprecated Use {@link SEARCH_HTTP_RESPONSE__CONTENT__LENGTH} (`http.response_content_length`) instead
 */
export const SEARCH_HTTP_RESPONSE_HEADER_CONTENT_LENGTH = 'http.response.header.content-length';

/**
 * Search name for {@link attributes.HTTP_RESPONSE_SIZE}. `http.response.size`
 */
export const SEARCH_HTTP_RESPONSE_SIZE = 'http.response.size';

/**
 * Search name for {@link attributes.HTTP_RESPONSE_STATUS_CODE}. `http.response.status_code`
 *
 * @deprecated Use {@link SEARCH_HTTP_RESPONSE__STATUS__CODE} (`http.response_status_code`) instead
 */
export const SEARCH_HTTP_RESPONSE_STATUS__CODE = 'http.response.status_code';

/**
 * Search name for {@link attributes.HTTP_RESPONSE_STATUS_TEXT}. `http.response.status_text`
 */
export const SEARCH_HTTP_RESPONSE_STATUS__TEXT = 'http.response.status_text';

/**
 * Search name for {@link attributes.HTTP_RESPONSE_CONTENT_LENGTH}. `http.response_content_length`
 */
export const SEARCH_HTTP_RESPONSE__CONTENT__LENGTH = 'http.response_content_length';

/**
 * Search name for {@link attributes.HTTP_DECODED_RESPONSE_CONTENT_LENGTH}. `http.response_content_length_uncompressed`
 *
 * @deprecated Use {@link SEARCH_HTTP_DECODED__RESPONSE__CONTENT__LENGTH} (`http.decoded_response_content_length`) instead
 */
export const SEARCH_HTTP_RESPONSE__CONTENT__LENGTH__UNCOMPRESSED = 'http.response_content_length_uncompressed';

/**
 * Search name for {@link attributes.HTTP_RESPONSE_STATUS_CODE}. `http.response_status_code`
 */
export const SEARCH_HTTP_RESPONSE__STATUS__CODE = 'http.response_status_code';

/**
 * Search name for {@link attributes.HTTP_RESPONSE_TRANSFER_SIZE}. `http.response_transfer_size`
 */
export const SEARCH_HTTP_RESPONSE__TRANSFER__SIZE = 'http.response_transfer_size';

/**
 * Search name for {@link attributes.HTTP_ROUTE}. `http.route`
 */
export const SEARCH_HTTP_ROUTE = 'http.route';

/**
 * Search name for {@link attributes.HTTP_SCHEME}. `http.scheme`
 *
 * @deprecated Use {@link SEARCH_URL_SCHEME} (`url.scheme`) instead
 */
export const SEARCH_HTTP_SCHEME = 'http.scheme';

/**
 * Search name for {@link attributes.HTTP_SERVER_REQUEST_TIME_IN_QUEUE}. `http.server.request.time_in_queue`
 */
export const SEARCH_HTTP_SERVER_REQUEST_TIME__IN__QUEUE = 'http.server.request.time_in_queue';

/**
 * Search name for {@link attributes.HTTP_SERVER_NAME}. `http.server_name`
 *
 * @deprecated Use {@link SEARCH_SERVER_ADDRESS} (`server.address`) instead
 */
export const SEARCH_HTTP_SERVER__NAME = 'http.server_name';

/**
 * Search name for {@link attributes.HTTP_RESPONSE_STATUS_CODE}. `http.status_code`
 *
 * @deprecated Use {@link SEARCH_HTTP_RESPONSE__STATUS__CODE} (`http.response_status_code`) instead
 */
export const SEARCH_HTTP_STATUS__CODE = 'http.status_code';

/**
 * Search name for {@link attributes.HTTP_STATUS_TEXT}. `http.status_text`
 *
 * @deprecated Use {@link SEARCH_HTTP_RESPONSE_STATUS__TEXT} (`http.response.status_text`) instead
 */
export const SEARCH_HTTP_STATUS__TEXT = 'http.status_text';

/**
 * Search name for {@link attributes.HTTP_TARGET}. `http.target`
 *
 * @deprecated
 */
export const SEARCH_HTTP_TARGET = 'http.target';

/**
 * Search name for {@link attributes.HTTP_URL}. `http.url`
 *
 * @deprecated Use {@link SEARCH_URL_FULL} (`url.full`) instead
 */
export const SEARCH_HTTP_URL = 'http.url';

/**
 * Search name for {@link attributes.HTTP_USER_AGENT}. `http.user_agent`
 *
 * @deprecated Use {@link SEARCH_USER__AGENT_ORIGINAL} (`user_agent.original`) instead
 */
export const SEARCH_HTTP_USER__AGENT = 'http.user_agent';

/**
 * Search name for {@link attributes.ID}. `id`
 */
export const SEARCH_ID = 'id';

/**
 * Search name for {@link attributes.SENTRY_IDLE_SPAN_FINISH_REASON}. `idle_span_finish_reason`
 */
export const SEARCH_IDLE__SPAN__FINISH__REASON = 'idle_span_finish_reason';

/**
 * Search name for {@link attributes.INP}. `inp`
 *
 * @deprecated Use {@link SEARCH_BROWSER_WEB__VITAL_INP_VALUE} (`browser.web_vital.inp.value`) instead
 */
export const SEARCH_INP = 'inp';

/**
 * Search name for {@link attributes.SENTRY_IS_REMOTE}. `is_remote`
 */
export const SEARCH_IS__REMOTE = 'is_remote';

/**
 * Search name for {@link attributes.JSONRPC_PROTOCOL_VERSION}. `jsonrpc.protocol.version`
 */
export const SEARCH_JSONRPC_PROTOCOL_VERSION = 'jsonrpc.protocol.version';

/**
 * Search name for {@link attributes.JSONRPC_REQUEST_ID}. `jsonrpc.request.id`
 */
export const SEARCH_JSONRPC_REQUEST_ID = 'jsonrpc.request.id';

/**
 * Search name for {@link attributes.JVM_GC_ACTION}. `jvm.gc.action`
 */
export const SEARCH_JVM_GC_ACTION = 'jvm.gc.action';

/**
 * Search name for {@link attributes.JVM_GC_NAME}. `jvm.gc.name`
 */
export const SEARCH_JVM_GC_NAME = 'jvm.gc.name';

/**
 * Search name for {@link attributes.JVM_MEMORY_POOL_NAME}. `jvm.memory.pool.name`
 */
export const SEARCH_JVM_MEMORY_POOL_NAME = 'jvm.memory.pool.name';

/**
 * Search name for {@link attributes.JVM_MEMORY_TYPE}. `jvm.memory.type`
 */
export const SEARCH_JVM_MEMORY_TYPE = 'jvm.memory.type';

/**
 * Search name for {@link attributes.JVM_THREAD_DAEMON}. `jvm.thread.daemon`
 */
export const SEARCH_JVM_THREAD_DAEMON = 'jvm.thread.daemon';

/**
 * Search name for {@link attributes.JVM_THREAD_STATE}. `jvm.thread.state`
 */
export const SEARCH_JVM_THREAD_STATE = 'jvm.thread.state';

/**
 * Search name for {@link attributes.SENTRY_KIND}. `kind`
 *
 * @deprecated Use {@link SEARCH_SPAN_KIND} (`span.kind`) instead
 */
export const SEARCH_KIND = 'kind';

/**
 * Search name for {@link attributes.KOA_NAME}. `koa.name`
 *
 * @deprecated
 */
export const SEARCH_KOA_NAME = 'koa.name';

/**
 * Search name for {@link attributes.KOA_TYPE}. `koa.type`
 */
export const SEARCH_KOA_TYPE = 'koa.type';

/**
 * Search name for {@link attributes.LANGCHAIN_CHAIN_NAME}. `langchain.chain.name`
 *
 * @deprecated Use {@link SEARCH_GEN__AI_PIPELINE_NAME} (`gen_ai.pipeline.name`) instead
 */
export const SEARCH_LANGCHAIN_CHAIN_NAME = 'langchain.chain.name';

/**
 * Search name for {@link attributes.LCP}. `lcp`
 *
 * @deprecated Use {@link SEARCH_BROWSER_WEB__VITAL_LCP_VALUE} (`browser.web_vital.lcp.value`) instead
 */
export const SEARCH_LCP = 'lcp';

/**
 * Search name for {@link attributes.LCP_ELEMENT}. `lcp.element`
 *
 * @deprecated Use {@link SEARCH_BROWSER_WEB__VITAL_LCP_ELEMENT} (`browser.web_vital.lcp.element`) instead
 */
export const SEARCH_LCP_ELEMENT = 'lcp.element';

/**
 * Search name for {@link attributes.LCP_ID}. `lcp.id`
 *
 * @deprecated Use {@link SEARCH_BROWSER_WEB__VITAL_LCP_ID} (`browser.web_vital.lcp.id`) instead
 */
export const SEARCH_LCP_ID = 'lcp.id';

/**
 * Search name for {@link attributes.LCP_LOADTIME}. `lcp.loadTime`
 *
 * @deprecated Use {@link SEARCH_BROWSER_WEB__VITAL_LCP_LOAD__TIME} (`browser.web_vital.lcp.load_time`) instead
 */
export const SEARCH_LCP_LOADTIME = 'lcp.loadTime';

/**
 * Search name for {@link attributes.LCP_RENDERTIME}. `lcp.renderTime`
 *
 * @deprecated Use {@link SEARCH_BROWSER_WEB__VITAL_LCP_RENDER__TIME} (`browser.web_vital.lcp.render_time`) instead
 */
export const SEARCH_LCP_RENDERTIME = 'lcp.renderTime';

/**
 * Search name for {@link attributes.LCP_SIZE}. `lcp.size`
 *
 * @deprecated Use {@link SEARCH_BROWSER_WEB__VITAL_LCP_SIZE} (`browser.web_vital.lcp.size`) instead
 */
export const SEARCH_LCP_SIZE = 'lcp.size';

/**
 * Search name for {@link attributes.LCP_URL}. `lcp.url`
 *
 * @deprecated Use {@link SEARCH_BROWSER_WEB__VITAL_LCP_URL} (`browser.web_vital.lcp.url`) instead
 */
export const SEARCH_LCP_URL = 'lcp.url';

/**
 * Search name for {@link attributes.LITESTAR_MIDDLEWARE_NAME}. `litestar.middleware_name`
 *
 * @deprecated Use {@link SEARCH_MIDDLEWARE_NAME} (`middleware.name`) instead
 */
export const SEARCH_LITESTAR_MIDDLEWARE__NAME = 'litestar.middleware_name';

/**
 * Search name for {@link attributes.LOGGER_NAME}. `logger.name`
 */
export const SEARCH_LOGGER_NAME = 'logger.name';

/**
 * Search name for {@link attributes.SENTRY_MAIN_THREAD}. `main_thread`
 */
export const SEARCH_MAIN__THREAD = 'main_thread';

/**
 * Search name for {@link attributes.MCP_CANCELLED_REASON}. `mcp.cancelled.reason`
 */
export const SEARCH_MCP_CANCELLED_REASON = 'mcp.cancelled.reason';

/**
 * Search name for {@link attributes.MCP_CANCELLED_REQUEST_ID}. `mcp.cancelled.request_id`
 */
export const SEARCH_MCP_CANCELLED_REQUEST__ID = 'mcp.cancelled.request_id';

/**
 * Search name for {@link attributes.MCP_CLIENT_NAME}. `mcp.client.name`
 */
export const SEARCH_MCP_CLIENT_NAME = 'mcp.client.name';

/**
 * Search name for {@link attributes.MCP_CLIENT_TITLE}. `mcp.client.title`
 */
export const SEARCH_MCP_CLIENT_TITLE = 'mcp.client.title';

/**
 * Search name for {@link attributes.MCP_CLIENT_VERSION}. `mcp.client.version`
 */
export const SEARCH_MCP_CLIENT_VERSION = 'mcp.client.version';

/**
 * Search name for {@link attributes.MCP_LIFECYCLE_PHASE}. `mcp.lifecycle.phase`
 */
export const SEARCH_MCP_LIFECYCLE_PHASE = 'mcp.lifecycle.phase';

/**
 * Search name for {@link attributes.MCP_LOGGING_DATA_TYPE}. `mcp.logging.data_type`
 */
export const SEARCH_MCP_LOGGING_DATA__TYPE = 'mcp.logging.data_type';

/**
 * Search name for {@link attributes.MCP_LOGGING_LEVEL}. `mcp.logging.level`
 */
export const SEARCH_MCP_LOGGING_LEVEL = 'mcp.logging.level';

/**
 * Search name for {@link attributes.MCP_LOGGING_LOGGER}. `mcp.logging.logger`
 */
export const SEARCH_MCP_LOGGING_LOGGER = 'mcp.logging.logger';

/**
 * Search name for {@link attributes.MCP_LOGGING_MESSAGE}. `mcp.logging.message`
 */
export const SEARCH_MCP_LOGGING_MESSAGE = 'mcp.logging.message';

/**
 * Search name for {@link attributes.MCP_METHOD_NAME}. `mcp.method.name`
 */
export const SEARCH_MCP_METHOD_NAME = 'mcp.method.name';

/**
 * Search name for {@link attributes.MCP_PROGRESS_CURRENT}. `mcp.progress.current`
 */
export const SEARCH_MCP_PROGRESS_CURRENT = 'mcp.progress.current';

/**
 * Search name for {@link attributes.MCP_PROGRESS_MESSAGE}. `mcp.progress.message`
 */
export const SEARCH_MCP_PROGRESS_MESSAGE = 'mcp.progress.message';

/**
 * Search name for {@link attributes.MCP_PROGRESS_PERCENTAGE}. `mcp.progress.percentage`
 */
export const SEARCH_MCP_PROGRESS_PERCENTAGE = 'mcp.progress.percentage';

/**
 * Search name for {@link attributes.MCP_PROGRESS_TOKEN}. `mcp.progress.token`
 */
export const SEARCH_MCP_PROGRESS_TOKEN = 'mcp.progress.token';

/**
 * Search name for {@link attributes.MCP_PROGRESS_TOTAL}. `mcp.progress.total`
 */
export const SEARCH_MCP_PROGRESS_TOTAL = 'mcp.progress.total';

/**
 * Search name for {@link attributes.MCP_PROMPT_NAME}. `mcp.prompt.name`
 *
 * @deprecated Use {@link SEARCH_GEN__AI_PROMPT_NAME} (`gen_ai.prompt.name`) instead
 */
export const SEARCH_MCP_PROMPT_NAME = 'mcp.prompt.name';

/**
 * Search name for {@link attributes.MCP_PROMPT_RESULT_DESCRIPTION}. `mcp.prompt.result.description`
 */
export const SEARCH_MCP_PROMPT_RESULT_DESCRIPTION = 'mcp.prompt.result.description';

/**
 * Search name for {@link attributes.MCP_PROMPT_RESULT_MESSAGE_CONTENT}. `mcp.prompt.result.message_content`
 */
export const SEARCH_MCP_PROMPT_RESULT_MESSAGE__CONTENT = 'mcp.prompt.result.message_content';

/**
 * Search name for {@link attributes.MCP_PROMPT_RESULT_MESSAGE_COUNT}. `mcp.prompt.result.message_count`
 */
export const SEARCH_MCP_PROMPT_RESULT_MESSAGE__COUNT = 'mcp.prompt.result.message_count';

/**
 * Search name for {@link attributes.MCP_PROMPT_RESULT_MESSAGE_ROLE}. `mcp.prompt.result.message_role`
 */
export const SEARCH_MCP_PROMPT_RESULT_MESSAGE__ROLE = 'mcp.prompt.result.message_role';

/**
 * Search name for {@link attributes.MCP_PROTOCOL_READY}. `mcp.protocol.ready`
 */
export const SEARCH_MCP_PROTOCOL_READY = 'mcp.protocol.ready';

/**
 * Search name for {@link attributes.MCP_PROTOCOL_VERSION}. `mcp.protocol.version`
 */
export const SEARCH_MCP_PROTOCOL_VERSION = 'mcp.protocol.version';

/**
 * Search name for {@link attributes.MCP_REQUEST_ARGUMENT_KEY}. `mcp.request.argument.<key>`
 */
export const SEARCH_MCP_REQUEST_ARGUMENT_KEY = 'mcp.request.argument.<key>';

/**
 * Search name for {@link attributes.MCP_REQUEST_ARGUMENT_NAME}. `mcp.request.argument.name`
 */
export const SEARCH_MCP_REQUEST_ARGUMENT_NAME = 'mcp.request.argument.name';

/**
 * Search name for {@link attributes.MCP_REQUEST_ARGUMENT_URI}. `mcp.request.argument.uri`
 */
export const SEARCH_MCP_REQUEST_ARGUMENT_URI = 'mcp.request.argument.uri';

/**
 * Search name for {@link attributes.MCP_REQUEST_ID}. `mcp.request.id`
 *
 * @deprecated Use {@link SEARCH_JSONRPC_REQUEST_ID} (`jsonrpc.request.id`) instead
 */
export const SEARCH_MCP_REQUEST_ID = 'mcp.request.id';

/**
 * Search name for {@link attributes.MCP_RESOURCE_PROTOCOL}. `mcp.resource.protocol`
 *
 * @deprecated Use {@link SEARCH_NETWORK_PROTOCOL_NAME} (`network.protocol.name`) instead
 */
export const SEARCH_MCP_RESOURCE_PROTOCOL = 'mcp.resource.protocol';

/**
 * Search name for {@link attributes.MCP_RESOURCE_URI}. `mcp.resource.uri`
 */
export const SEARCH_MCP_RESOURCE_URI = 'mcp.resource.uri';

/**
 * Search name for {@link attributes.MCP_SERVER_NAME}. `mcp.server.name`
 */
export const SEARCH_MCP_SERVER_NAME = 'mcp.server.name';

/**
 * Search name for {@link attributes.MCP_SERVER_TITLE}. `mcp.server.title`
 */
export const SEARCH_MCP_SERVER_TITLE = 'mcp.server.title';

/**
 * Search name for {@link attributes.MCP_SERVER_VERSION}. `mcp.server.version`
 */
export const SEARCH_MCP_SERVER_VERSION = 'mcp.server.version';

/**
 * Search name for {@link attributes.MCP_SESSION_ID}. `mcp.session.id`
 */
export const SEARCH_MCP_SESSION_ID = 'mcp.session.id';

/**
 * Search name for {@link attributes.MCP_TOOL_NAME}. `mcp.tool.name`
 *
 * @deprecated Use {@link SEARCH_GEN__AI_TOOL_NAME} (`gen_ai.tool.name`) instead
 */
export const SEARCH_MCP_TOOL_NAME = 'mcp.tool.name';

/**
 * Search name for {@link attributes.MCP_TOOL_RESULT_CONTENT}. `mcp.tool.result.content`
 *
 * @deprecated Use {@link SEARCH_GEN__AI_TOOL_CALL_RESULT} (`gen_ai.tool.call.result`) instead
 */
export const SEARCH_MCP_TOOL_RESULT_CONTENT = 'mcp.tool.result.content';

/**
 * Search name for {@link attributes.MCP_TOOL_RESULT_CONTENT_COUNT}. `mcp.tool.result.content_count`
 */
export const SEARCH_MCP_TOOL_RESULT_CONTENT__COUNT = 'mcp.tool.result.content_count';

/**
 * Search name for {@link attributes.MCP_TOOL_RESULT_IS_ERROR}. `mcp.tool.result.is_error`
 *
 * @deprecated Use {@link SEARCH_ERROR_TYPE} (`error.type`) instead
 */
export const SEARCH_MCP_TOOL_RESULT_IS__ERROR = 'mcp.tool.result.is_error';

/**
 * Search name for {@link attributes.MCP_TRANSPORT}. `mcp.transport`
 *
 * @deprecated Use {@link SEARCH_NETWORK_TRANSPORT} (`network.transport`) instead
 */
export const SEARCH_MCP_TRANSPORT = 'mcp.transport';

/**
 * Search name for {@link attributes.MDC_KEY}. `mdc.<key>`
 */
export const SEARCH_MDC_KEY = 'mdc.<key>';

/**
 * Search name for {@link attributes.SENTRY_MESSAGE_PARAMETER_KEY}. `message.parameter.<key>`
 */
export const SEARCH_MESSAGE_PARAMETER_KEY = 'message.parameter.<key>';

/**
 * Search name for {@link attributes.SENTRY_MESSAGE_TEMPLATE}. `message.template`
 */
export const SEARCH_MESSAGE_TEMPLATE = 'message.template';

/**
 * Search name for {@link attributes.MESSAGING_BATCH_MESSAGE_COUNT}. `messaging.batch.message_count`
 */
export const SEARCH_MESSAGING_BATCH_MESSAGE__COUNT = 'messaging.batch.message_count';

/**
 * Search name for {@link attributes.MESSAGING_CONVERSATION_ID}. `messaging.conversation_id`
 *
 * @deprecated Use {@link SEARCH_MESSAGING_MESSAGE_CONVERSATION__ID} (`messaging.message.conversation_id`) instead
 */
export const SEARCH_MESSAGING_CONVERSATION__ID = 'messaging.conversation_id';

/**
 * Search name for {@link attributes.MESSAGING_DESTINATION}. `messaging.destination`
 *
 * @deprecated Use {@link SEARCH_MESSAGING_DESTINATION_NAME} (`messaging.destination.name`) instead
 */
export const SEARCH_MESSAGING_DESTINATION = 'messaging.destination';

/**
 * Search name for {@link attributes.MESSAGING_DESTINATION_CONNECTION}. `messaging.destination.connection`
 */
export const SEARCH_MESSAGING_DESTINATION_CONNECTION = 'messaging.destination.connection';

/**
 * Search name for {@link attributes.MESSAGING_DESTINATION_NAME}. `messaging.destination.name`
 */
export const SEARCH_MESSAGING_DESTINATION_NAME = 'messaging.destination.name';

/**
 * Search name for {@link attributes.MESSAGING_DESTINATION_PARTITION_ID}. `messaging.destination.partition.id`
 */
export const SEARCH_MESSAGING_DESTINATION_PARTITION_ID = 'messaging.destination.partition.id';

/**
 * Search name for {@link attributes.MESSAGING_DESTINATION_KIND}. `messaging.destination_kind`
 *
 * @deprecated
 */
export const SEARCH_MESSAGING_DESTINATION__KIND = 'messaging.destination_kind';

/**
 * Search name for {@link attributes.MESSAGING_KAFKA_MESSAGE_KEY}. `messaging.kafka.message.key`
 */
export const SEARCH_MESSAGING_KAFKA_MESSAGE_KEY = 'messaging.kafka.message.key';

/**
 * Search name for {@link attributes.MESSAGING_KAFKA_MESSAGE_TOMBSTONE}. `messaging.kafka.message.tombstone`
 */
export const SEARCH_MESSAGING_KAFKA_MESSAGE_TOMBSTONE = 'messaging.kafka.message.tombstone';

/**
 * Search name for {@link attributes.MESSAGING_KAFKA_OFFSET}. `messaging.kafka.offset`
 */
export const SEARCH_MESSAGING_KAFKA_OFFSET = 'messaging.kafka.offset';

/**
 * Search name for {@link attributes.MESSAGING_MESSAGE_BODY_SIZE}. `messaging.message.body.size`
 */
export const SEARCH_MESSAGING_MESSAGE_BODY_SIZE = 'messaging.message.body.size';

/**
 * Search name for {@link attributes.MESSAGING_MESSAGE_CONVERSATION_ID}. `messaging.message.conversation_id`
 */
export const SEARCH_MESSAGING_MESSAGE_CONVERSATION__ID = 'messaging.message.conversation_id';

/**
 * Search name for {@link attributes.MESSAGING_MESSAGE_ENVELOPE_SIZE}. `messaging.message.envelope.size`
 */
export const SEARCH_MESSAGING_MESSAGE_ENVELOPE_SIZE = 'messaging.message.envelope.size';

/**
 * Search name for {@link attributes.MESSAGING_MESSAGE_ID}. `messaging.message.id`
 */
export const SEARCH_MESSAGING_MESSAGE_ID = 'messaging.message.id';

/**
 * Search name for {@link attributes.MESSAGING_MESSAGE_RECEIVE_LATENCY}. `messaging.message.receive.latency`
 */
export const SEARCH_MESSAGING_MESSAGE_RECEIVE_LATENCY = 'messaging.message.receive.latency';

/**
 * Search name for {@link attributes.MESSAGING_MESSAGE_RETRY_COUNT}. `messaging.message.retry.count`
 */
export const SEARCH_MESSAGING_MESSAGE_RETRY_COUNT = 'messaging.message.retry.count';

/**
 * Search name for {@link attributes._MESSAGING_MESSAGE_ID}. `messaging.message_id`
 *
 * @deprecated Use {@link SEARCH_MESSAGING_MESSAGE_ID} (`messaging.message.id`) instead
 */
export const SEARCH_MESSAGING_MESSAGE__ID = 'messaging.message_id';

/**
 * Search name for {@link attributes.MESSAGING_OPERATION}. `messaging.operation`
 *
 * @deprecated Use {@link SEARCH_MESSAGING_OPERATION_NAME} (`messaging.operation.name`) instead
 */
export const SEARCH_MESSAGING_OPERATION = 'messaging.operation';

/**
 * Search name for {@link attributes.MESSAGING_OPERATION_NAME}. `messaging.operation.name`
 */
export const SEARCH_MESSAGING_OPERATION_NAME = 'messaging.operation.name';

/**
 * Search name for {@link attributes.MESSAGING_OPERATION_TYPE}. `messaging.operation.type`
 */
export const SEARCH_MESSAGING_OPERATION_TYPE = 'messaging.operation.type';

/**
 * Search name for {@link attributes.MESSAGING_PROTOCOL}. `messaging.protocol`
 *
 * @deprecated Use {@link SEARCH_NETWORK_PROTOCOL_NAME} (`network.protocol.name`) instead
 */
export const SEARCH_MESSAGING_PROTOCOL = 'messaging.protocol';

/**
 * Search name for {@link attributes.MESSAGING_PROTOCOL_VERSION}. `messaging.protocol_version`
 *
 * @deprecated Use {@link SEARCH_NETWORK_PROTOCOL_VERSION} (`network.protocol.version`) instead
 */
export const SEARCH_MESSAGING_PROTOCOL__VERSION = 'messaging.protocol_version';

/**
 * Search name for {@link attributes.MESSAGING_RABBITMQ_DESTINATION_ROUTING_KEY}. `messaging.rabbitmq.destination.routing_key`
 */
export const SEARCH_MESSAGING_RABBITMQ_DESTINATION_ROUTING__KEY = 'messaging.rabbitmq.destination.routing_key';

/**
 * Search name for {@link attributes.MESSAGING_RABBITMQ_ROUTING_KEY}. `messaging.rabbitmq.routing_key`
 *
 * @deprecated Use {@link SEARCH_MESSAGING_RABBITMQ_DESTINATION_ROUTING__KEY} (`messaging.rabbitmq.destination.routing_key`) instead
 */
export const SEARCH_MESSAGING_RABBITMQ_ROUTING__KEY = 'messaging.rabbitmq.routing_key';

/**
 * Search name for {@link attributes.MESSAGING_SYSTEM}. `messaging.system`
 */
export const SEARCH_MESSAGING_SYSTEM = 'messaging.system';

/**
 * Search name for {@link attributes.MESSAGING_URL}. `messaging.url`
 *
 * @deprecated Use {@link SEARCH_URL_FULL} (`url.full`) instead
 */
export const SEARCH_MESSAGING_URL = 'messaging.url';

/**
 * Search name for {@link attributes.METHOD}. `method`
 *
 * @deprecated Use {@link SEARCH_HTTP_REQUEST_METHOD} (`http.request.method`) instead
 */
export const SEARCH_METHOD = 'method';

/**
 * Search name for {@link attributes.SENTRY_METRIC_SOURCE}. `metric.source`
 */
export const SEARCH_METRIC_SOURCE = 'metric.source';

/**
 * Search name for {@link attributes.MIDDLEWARE_NAME}. `middleware.name`
 */
export const SEARCH_MIDDLEWARE_NAME = 'middleware.name';

/**
 * Search name for {@link attributes.SENTRY_MOBILE}. `mobile`
 */
export const SEARCH_MOBILE = 'mobile';

/**
 * Search name for {@link attributes.FRAMES_DELAY}. `mobile.frames_delay`
 */
export const SEARCH_MOBILE_FRAMES__DELAY = 'mobile.frames_delay';

/**
 * Search name for {@link attributes.FRAMES_FROZEN}. `mobile.frozen_frames`
 */
export const SEARCH_MOBILE_FROZEN__FRAMES = 'mobile.frozen_frames';

/**
 * Search name for {@link attributes.FRAMES_SLOW}. `mobile.slow_frames`
 */
export const SEARCH_MOBILE_SLOW__FRAMES = 'mobile.slow_frames';

/**
 * Search name for {@link attributes.FRAMES_TOTAL}. `mobile.total_frames`
 */
export const SEARCH_MOBILE_TOTAL__FRAMES = 'mobile.total_frames';

/**
 * Search name for {@link attributes.SENTRY_MODULE_KEY}. `module.<key>`
 */
export const SEARCH_MODULE_KEY = 'module.<key>';

/**
 * Search name for {@link attributes.NAVIGATION_ORIGIN}. `navigation.origin`
 *
 * @deprecated Use {@link SEARCH_ROUTER_NAVIGATION_ORIGIN} (`router.navigation.origin`) instead
 */
export const SEARCH_NAVIGATION_ORIGIN = 'navigation.origin';

/**
 * Search name for {@link attributes.NAVIGATION_ROUTE_ID}. `navigation.route.id`
 *
 * @deprecated Use {@link SEARCH_ROUTER_NAVIGATION_ROUTE_ID} (`router.navigation.route.id`) instead
 */
export const SEARCH_NAVIGATION_ROUTE_ID = 'navigation.route.id';

/**
 * Search name for {@link attributes.NAVIGATION_TYPE}. `navigation.type`
 *
 * @deprecated Use {@link SEARCH_ROUTER_NAVIGATION_TYPE} (`router.navigation.type`) instead
 */
export const SEARCH_NAVIGATION_TYPE = 'navigation.type';

/**
 * Search name for {@link attributes.NEL_ELAPSED_TIME}. `nel.elapsed_time`
 */
export const SEARCH_NEL_ELAPSED__TIME = 'nel.elapsed_time';

/**
 * Search name for {@link attributes.NEL_PHASE}. `nel.phase`
 */
export const SEARCH_NEL_PHASE = 'nel.phase';

/**
 * Search name for {@link attributes.NEL_REFERRER}. `nel.referrer`
 */
export const SEARCH_NEL_REFERRER = 'nel.referrer';

/**
 * Search name for {@link attributes.NEL_SAMPLING_FUNCTION}. `nel.sampling_function`
 */
export const SEARCH_NEL_SAMPLING__FUNCTION = 'nel.sampling_function';

/**
 * Search name for {@link attributes.NEL_TYPE}. `nel.type`
 */
export const SEARCH_NEL_TYPE = 'nel.type';

/**
 * Search name for {@link attributes.NET_HOST_IP}. `net.host.ip`
 *
 * @deprecated Use {@link SEARCH_NETWORK_LOCAL_ADDRESS} (`network.local.address`) instead
 */
export const SEARCH_NET_HOST_IP = 'net.host.ip';

/**
 * Search name for {@link attributes.NET_HOST_NAME}. `net.host.name`
 *
 * @deprecated Use {@link SEARCH_SERVER_ADDRESS} (`server.address`) instead
 */
export const SEARCH_NET_HOST_NAME = 'net.host.name';

/**
 * Search name for {@link attributes.NET_HOST_PORT}. `net.host.port`
 *
 * @deprecated Use {@link SEARCH_SERVER_PORT} (`server.port`) instead
 */
export const SEARCH_NET_HOST_PORT = 'net.host.port';

/**
 * Search name for {@link attributes.NET_PEER_IP}. `net.peer.ip`
 *
 * @deprecated Use {@link SEARCH_NETWORK_PEER_ADDRESS} (`network.peer.address`) instead
 */
export const SEARCH_NET_PEER_IP = 'net.peer.ip';

/**
 * Search name for {@link attributes.NET_PEER_NAME}. `net.peer.name`
 *
 * @deprecated Use {@link SEARCH_SERVER_ADDRESS} (`server.address`) instead
 */
export const SEARCH_NET_PEER_NAME = 'net.peer.name';

/**
 * Search name for {@link attributes.NET_PEER_PORT}. `net.peer.port`
 *
 * @deprecated Use {@link SEARCH_SERVER_PORT} (`server.port`) instead
 */
export const SEARCH_NET_PEER_PORT = 'net.peer.port';

/**
 * Search name for {@link attributes.NET_PROTOCOL_NAME}. `net.protocol.name`
 *
 * @deprecated Use {@link SEARCH_NETWORK_PROTOCOL_NAME} (`network.protocol.name`) instead
 */
export const SEARCH_NET_PROTOCOL_NAME = 'net.protocol.name';

/**
 * Search name for {@link attributes.NET_PROTOCOL_VERSION}. `net.protocol.version`
 *
 * @deprecated Use {@link SEARCH_NETWORK_PROTOCOL_VERSION} (`network.protocol.version`) instead
 */
export const SEARCH_NET_PROTOCOL_VERSION = 'net.protocol.version';

/**
 * Search name for {@link attributes.NET_SOCK_FAMILY}. `net.sock.family`
 *
 * @deprecated Use {@link SEARCH_NETWORK_TRANSPORT} (`network.transport`) instead
 */
export const SEARCH_NET_SOCK_FAMILY = 'net.sock.family';

/**
 * Search name for {@link attributes.NET_SOCK_HOST_ADDR}. `net.sock.host.addr`
 *
 * @deprecated Use {@link SEARCH_NETWORK_LOCAL_ADDRESS} (`network.local.address`) instead
 */
export const SEARCH_NET_SOCK_HOST_ADDR = 'net.sock.host.addr';

/**
 * Search name for {@link attributes.NET_SOCK_HOST_PORT}. `net.sock.host.port`
 *
 * @deprecated Use {@link SEARCH_NETWORK_LOCAL_PORT} (`network.local.port`) instead
 */
export const SEARCH_NET_SOCK_HOST_PORT = 'net.sock.host.port';

/**
 * Search name for {@link attributes.NET_SOCK_PEER_ADDR}. `net.sock.peer.addr`
 *
 * @deprecated Use {@link SEARCH_NETWORK_PEER_ADDRESS} (`network.peer.address`) instead
 */
export const SEARCH_NET_SOCK_PEER_ADDR = 'net.sock.peer.addr';

/**
 * Search name for {@link attributes.NET_SOCK_PEER_NAME}. `net.sock.peer.name`
 *
 * @deprecated
 */
export const SEARCH_NET_SOCK_PEER_NAME = 'net.sock.peer.name';

/**
 * Search name for {@link attributes.NET_SOCK_PEER_PORT}. `net.sock.peer.port`
 *
 * @deprecated Use {@link SEARCH_NETWORK_PEER_PORT} (`network.peer.port`) instead
 */
export const SEARCH_NET_SOCK_PEER_PORT = 'net.sock.peer.port';

/**
 * Search name for {@link attributes.NET_TRANSPORT}. `net.transport`
 *
 * @deprecated Use {@link SEARCH_NETWORK_TRANSPORT} (`network.transport`) instead
 */
export const SEARCH_NET_TRANSPORT = 'net.transport';

/**
 * Search name for {@link attributes.NETWORK_CONNECTION_EFFECTIVE_TYPE}. `network.connection.effective_type`
 */
export const SEARCH_NETWORK_CONNECTION_EFFECTIVE__TYPE = 'network.connection.effective_type';

/**
 * Search name for {@link attributes.NETWORK_CONNECTION_RTT}. `network.connection.rtt`
 */
export const SEARCH_NETWORK_CONNECTION_RTT = 'network.connection.rtt';

/**
 * Search name for {@link attributes.NETWORK_CONNECTION_TYPE}. `network.connection.type`
 */
export const SEARCH_NETWORK_CONNECTION_TYPE = 'network.connection.type';

/**
 * Search name for {@link attributes.NETWORK_LOCAL_ADDRESS}. `network.local.address`
 */
export const SEARCH_NETWORK_LOCAL_ADDRESS = 'network.local.address';

/**
 * Search name for {@link attributes.NETWORK_LOCAL_PORT}. `network.local.port`
 */
export const SEARCH_NETWORK_LOCAL_PORT = 'network.local.port';

/**
 * Search name for {@link attributes.NETWORK_PEER_ADDRESS}. `network.peer.address`
 */
export const SEARCH_NETWORK_PEER_ADDRESS = 'network.peer.address';

/**
 * Search name for {@link attributes.NETWORK_PEER_PORT}. `network.peer.port`
 */
export const SEARCH_NETWORK_PEER_PORT = 'network.peer.port';

/**
 * Search name for {@link attributes.NETWORK_PROTOCOL_NAME}. `network.protocol.name`
 */
export const SEARCH_NETWORK_PROTOCOL_NAME = 'network.protocol.name';

/**
 * Search name for {@link attributes.NETWORK_PROTOCOL_VERSION}. `network.protocol.version`
 */
export const SEARCH_NETWORK_PROTOCOL_VERSION = 'network.protocol.version';

/**
 * Search name for {@link attributes.NETWORK_TRANSPORT}. `network.transport`
 */
export const SEARCH_NETWORK_TRANSPORT = 'network.transport';

/**
 * Search name for {@link attributes.NETWORK_TYPE}. `network.type`
 */
export const SEARCH_NETWORK_TYPE = 'network.type';

/**
 * Search name for {@link attributes.SENTRY_NEXTJS_SSR_FUNCTION_ROUTE}. `nextjs.ssr.function.route`
 */
export const SEARCH_NEXTJS_SSR_FUNCTION_ROUTE = 'nextjs.ssr.function.route';

/**
 * Search name for {@link attributes.SENTRY_NEXTJS_SSR_FUNCTION_TYPE}. `nextjs.ssr.function.type`
 */
export const SEARCH_NEXTJS_SSR_FUNCTION_TYPE = 'nextjs.ssr.function.type';

/**
 * Search name for {@link attributes.SENTRY_NORMALIZED_DB_QUERY}. `normalized_db_query`
 */
export const SEARCH_NORMALIZED__DB__QUERY = 'normalized_db_query';

/**
 * Search name for {@link attributes.SENTRY_NORMALIZED_DB_QUERY_HASH}. `normalized_db_query.hash`
 */
export const SEARCH_NORMALIZED__DB__QUERY_HASH = 'normalized_db_query.hash';

/**
 * Search name for {@link attributes.SENTRY_NORMALIZED_DESCRIPTION}. `normalized_description`
 */
export const SEARCH_NORMALIZED__DESCRIPTION = 'normalized_description';

/**
 * Search name for {@link attributes.SENTRY_OBSERVED_TIMESTAMP_NANOS}. `observed_timestamp_nanos`
 */
export const SEARCH_OBSERVED__TIMESTAMP__NANOS = 'observed_timestamp_nanos';

/**
 * Search name for {@link attributes.SENTRY_OP}. `op`
 *
 * @deprecated Use {@link SEARCH_SPAN_OP} (`span.op`) instead
 */
export const SEARCH_OP = 'op';

/**
 * Search name for {@link attributes.SENTRY_ORIGIN}. `origin`
 */
export const SEARCH_ORIGIN = 'origin';

/**
 * Search name for {@link attributes.OS_BUILD}. `os.build`
 *
 * @deprecated Use {@link SEARCH_OS_BUILD__ID} (`os.build_id`) instead
 */
export const SEARCH_OS_BUILD = 'os.build';

/**
 * Search name for {@link attributes.OS_BUILD_ID}. `os.build_id`
 */
export const SEARCH_OS_BUILD__ID = 'os.build_id';

/**
 * Search name for {@link attributes.OS_DESCRIPTION}. `os.description`
 */
export const SEARCH_OS_DESCRIPTION = 'os.description';

/**
 * Search name for {@link attributes.OS_KERNEL_VERSION}. `os.kernel_version`
 */
export const SEARCH_OS_KERNEL__VERSION = 'os.kernel_version';

/**
 * Search name for {@link attributes.OS_NAME}. `os.name`
 */
export const SEARCH_OS_NAME = 'os.name';

/**
 * Search name for {@link attributes.OS_RAW_DESCRIPTION}. `os.raw_description`
 */
export const SEARCH_OS_RAW__DESCRIPTION = 'os.raw_description';

/**
 * Search name for {@link attributes.OS_ROOTED}. `os.rooted`
 */
export const SEARCH_OS_ROOTED = 'os.rooted';

/**
 * Search name for {@link attributes.OS_THEME}. `os.theme`
 */
export const SEARCH_OS_THEME = 'os.theme';

/**
 * Search name for {@link attributes.OS_TYPE}. `os.type`
 */
export const SEARCH_OS_TYPE = 'os.type';

/**
 * Search name for {@link attributes.OS_VERSION}. `os.version`
 */
export const SEARCH_OS_VERSION = 'os.version';

/**
 * Search name for {@link attributes.SENTRY_KIND}. `otel.kind`
 *
 * @deprecated Use {@link SEARCH_SPAN_KIND} (`span.kind`) instead
 */
export const SEARCH_OTEL_KIND = 'otel.kind';

/**
 * Search name for {@link attributes.OTEL_SCOPE_NAME}. `otel.scope.name`
 */
export const SEARCH_OTEL_SCOPE_NAME = 'otel.scope.name';

/**
 * Search name for {@link attributes.OTEL_SCOPE_VERSION}. `otel.scope.version`
 */
export const SEARCH_OTEL_SCOPE_VERSION = 'otel.scope.version';

/**
 * Search name for {@link attributes.OTEL_STATUS_CODE}. `otel.status_code`
 */
export const SEARCH_OTEL_STATUS__CODE = 'otel.status_code';

/**
 * Search name for {@link attributes.OTEL_STATUS_DESCRIPTION}. `otel.status_description`
 */
export const SEARCH_OTEL_STATUS__DESCRIPTION = 'otel.status_description';

/**
 * Search name for {@link attributes.SENTRY_PAGELOAD_SPAN_ID}. `pageload.span_id`
 */
export const SEARCH_PAGELOAD_SPAN__ID = 'pageload.span_id';

/**
 * Search name for {@link attributes.PARAMS_KEY}. `params.<key>`
 */
export const SEARCH_PARAMS_KEY = 'params.<key>';

/**
 * Search name for {@link attributes.PERFORMANCE_ACTIVATIONSTART}. `performance.activationStart`
 *
 * @deprecated Use {@link SEARCH_BROWSER_PERFORMANCE_NAVIGATION_ACTIVATION__START} (`browser.performance.navigation.activation_start`) instead
 */
export const SEARCH_PERFORMANCE_ACTIVATIONSTART = 'performance.activationStart';

/**
 * Search name for {@link attributes.PERFORMANCE_TIMEORIGIN}. `performance.timeOrigin`
 *
 * @deprecated Use {@link SEARCH_BROWSER_PERFORMANCE_TIME__ORIGIN} (`browser.performance.time_origin`) instead
 */
export const SEARCH_PERFORMANCE_TIMEORIGIN = 'performance.timeOrigin';

/**
 * Search name for {@link attributes.SENTRY_PLATFORM}. `platform`
 */
export const SEARCH_PLATFORM = 'platform';

/**
 * Search name for {@link attributes.PORT}. `port`
 *
 * @deprecated Use {@link SEARCH_SERVER_PORT} (`server.port`) instead
 */
export const SEARCH_PORT = 'port';

/**
 * Search name for {@link attributes.PREVIOUS_ROUTE}. `previous_route`
 */
export const SEARCH_PREVIOUS__ROUTE = 'previous_route';

/**
 * Search name for {@link attributes.PROCESS_COMMAND_ARGS}. `process.command_args`
 */
export const SEARCH_PROCESS_COMMAND__ARGS = 'process.command_args';

/**
 * Search name for {@link attributes.PROCESS_EXECUTABLE_NAME}. `process.executable.name`
 */
export const SEARCH_PROCESS_EXECUTABLE_NAME = 'process.executable.name';

/**
 * Search name for {@link attributes.PROCESS_PID}. `process.pid`
 */
export const SEARCH_PROCESS_PID = 'process.pid';

/**
 * Search name for {@link attributes.PROCESS_RUNTIME_DESCRIPTION}. `process.runtime.description`
 */
export const SEARCH_PROCESS_RUNTIME_DESCRIPTION = 'process.runtime.description';

/**
 * Search name for {@link attributes.PROCESS_RUNTIME_ENGINE_NAME}. `process.runtime.engine.name`
 */
export const SEARCH_PROCESS_RUNTIME_ENGINE_NAME = 'process.runtime.engine.name';

/**
 * Search name for {@link attributes.PROCESS_RUNTIME_ENGINE_VERSION}. `process.runtime.engine.version`
 */
export const SEARCH_PROCESS_RUNTIME_ENGINE_VERSION = 'process.runtime.engine.version';

/**
 * Search name for {@link attributes.PROCESS_RUNTIME_NAME}. `process.runtime.name`
 */
export const SEARCH_PROCESS_RUNTIME_NAME = 'process.runtime.name';

/**
 * Search name for {@link attributes.PROCESS_RUNTIME_VERSION}. `process.runtime.version`
 */
export const SEARCH_PROCESS_RUNTIME_VERSION = 'process.runtime.version';

/**
 * Search name for {@link attributes.SENTRY_PROFILE_ID}. `profile.id`
 */
export const SEARCH_PROFILE_ID = 'profile.id';

/**
 * Search name for {@link attributes.SENTRY_PROFILE_ID}. `profile_id`
 *
 * @deprecated Use {@link SEARCH_PROFILE_ID} (`profile.id`) instead
 */
export const SEARCH_PROFILE__ID = 'profile_id';

/**
 * Search name for {@link attributes.SENTRY_PROFILER_ID}. `profiler.id`
 */
export const SEARCH_PROFILER_ID = 'profiler.id';

/**
 * Search name for {@link attributes.SENTRY_PROFILER_ID}. `profiler_id`
 *
 * @deprecated Use {@link SEARCH_PROFILER_ID} (`profiler.id`) instead
 */
export const SEARCH_PROFILER__ID = 'profiler_id';

/**
 * Search name for {@link attributes.QUERY}. `query`
 *
 * @deprecated Use {@link SEARCH_DB_QUERY_TEXT} (`db.query.text`) instead
 */
export const SEARCH_QUERY = 'query';

/**
 * Search name for {@link attributes.QUERY_KEY}. `query.<key>`
 *
 * @deprecated Use {@link SEARCH_URL_QUERY} (`url.query`) instead
 */
export const SEARCH_QUERY_KEY = 'query.<key>';

/**
 * Search name for {@link attributes.REACT_VERSION}. `react.version`
 */
export const SEARCH_REACT_VERSION = 'react.version';

/**
 * Search name for {@link attributes.REDIS_COMMAND}. `redis.command`
 *
 * @deprecated Use {@link SEARCH_DB_OPERATION_NAME} (`db.operation.name`) instead
 */
export const SEARCH_REDIS_COMMAND = 'redis.command';

/**
 * Search name for {@link attributes.REDIS_KEY}. `redis.key`
 *
 * @deprecated Use {@link SEARCH_DB_REDIS_KEY} (`db.redis.key`) instead
 */
export const SEARCH_REDIS_KEY = 'redis.key';

/**
 * Search name for {@link attributes.SENTRY_RELAY_INGRESS}. `relay.ingress`
 */
export const SEARCH_RELAY_INGRESS = 'relay.ingress';

/**
 * Search name for {@link attributes.SENTRY_RELAY_PIPELINE}. `relay.pipeline`
 */
export const SEARCH_RELAY_PIPELINE = 'relay.pipeline';

/**
 * Search name for {@link attributes.SENTRY_RELEASE}. `release`
 */
export const SEARCH_RELEASE = 'release';

/**
 * Search name for {@link attributes.REMIX_ACTION_FORM_DATA_KEY}. `remix.action_form_data.<key>`
 */
export const SEARCH_REMIX_ACTION__FORM__DATA_KEY = 'remix.action_form_data.<key>';

/**
 * Search name for {@link attributes.SENTRY_REPLAY_ID}. `replay.id`
 */
export const SEARCH_REPLAY_ID = 'replay.id';

/**
 * Search name for {@link attributes.SENTRY_REPLAY_ID}. `replay_id`
 *
 * @deprecated Use {@link SEARCH_REPLAY_ID} (`replay.id`) instead
 */
export const SEARCH_REPLAY__ID = 'replay_id';

/**
 * Search name for {@link attributes.SENTRY_REPLAY_IS_BUFFERING}. `replay_is_buffering`
 */
export const SEARCH_REPLAY__IS__BUFFERING = 'replay_is_buffering';

/**
 * Search name for {@link attributes.SENTRY_REPORT_EVENT}. `report_event`
 *
 * @deprecated
 */
export const SEARCH_REPORT__EVENT = 'report_event';

/**
 * Search name for {@link attributes.SENTRY_ENVIRONMENT}. `resource.deployment.environment`
 *
 * @deprecated Use {@link SEARCH_ENVIRONMENT} (`environment`) instead
 */
export const SEARCH_RESOURCE_DEPLOYMENT_ENVIRONMENT = 'resource.deployment.environment';

/**
 * Search name for {@link attributes.SENTRY_ENVIRONMENT}. `resource.deployment.environment.name`
 *
 * @deprecated Use {@link SEARCH_ENVIRONMENT} (`environment`) instead
 */
export const SEARCH_RESOURCE_DEPLOYMENT_ENVIRONMENT_NAME = 'resource.deployment.environment.name';

/**
 * Search name for {@link attributes.RESOURCE_RENDER_BLOCKING_STATUS}. `resource.render_blocking_status`
 */
export const SEARCH_RESOURCE_RENDER__BLOCKING__STATUS = 'resource.render_blocking_status';

/**
 * Search name for {@link attributes.ROUTE}. `route`
 *
 * @deprecated Use {@link SEARCH_HTTP_ROUTE} (`http.route`) instead
 */
export const SEARCH_ROUTE = 'route';

/**
 * Search name for {@link attributes.ROUTER_NAVIGATION_ORIGIN}. `router.navigation.origin`
 */
export const SEARCH_ROUTER_NAVIGATION_ORIGIN = 'router.navigation.origin';

/**
 * Search name for {@link attributes.ROUTER_NAVIGATION_ROUTE_ID}. `router.navigation.route.id`
 */
export const SEARCH_ROUTER_NAVIGATION_ROUTE_ID = 'router.navigation.route.id';

/**
 * Search name for {@link attributes.ROUTER_NAVIGATION_TYPE}. `router.navigation.type`
 */
export const SEARCH_ROUTER_NAVIGATION_TYPE = 'router.navigation.type';

/**
 * Search name for {@link attributes.RPC_GRPC_STATUS_CODE}. `rpc.grpc.status_code`
 *
 * @deprecated Use {@link SEARCH_RPC_RESPONSE_STATUS__CODE} (`rpc.response.status_code`) instead
 */
export const SEARCH_RPC_GRPC_STATUS__CODE = 'rpc.grpc.status_code';

/**
 * Search name for {@link attributes.RPC_METHOD}. `rpc.method`
 */
export const SEARCH_RPC_METHOD = 'rpc.method';

/**
 * Search name for {@link attributes.RPC_RESPONSE_STATUS_CODE}. `rpc.response.status_code`
 */
export const SEARCH_RPC_RESPONSE_STATUS__CODE = 'rpc.response.status_code';

/**
 * Search name for {@link attributes.RPC_SERVICE}. `rpc.service`
 */
export const SEARCH_RPC_SERVICE = 'rpc.service';

/**
 * Search name for {@link attributes.RPC_SYSTEM}. `rpc.system`
 *
 * @deprecated Use {@link SEARCH_RPC_SYSTEM_NAME} (`rpc.system.name`) instead
 */
export const SEARCH_RPC_SYSTEM = 'rpc.system';

/**
 * Search name for {@link attributes.RPC_SYSTEM_NAME}. `rpc.system.name`
 */
export const SEARCH_RPC_SYSTEM_NAME = 'rpc.system.name';

/**
 * Search name for {@link attributes.RUNTIME_BUILD}. `runtime.build`
 *
 * @deprecated
 */
export const SEARCH_RUNTIME_BUILD = 'runtime.build';

/**
 * Search name for {@link attributes.RUNTIME_NAME}. `runtime.name`
 *
 * @deprecated Use {@link SEARCH_PROCESS_RUNTIME_NAME} (`process.runtime.name`) instead
 */
export const SEARCH_RUNTIME_NAME = 'runtime.name';

/**
 * Search name for {@link attributes.RUNTIME_RAW_DESCRIPTION}. `runtime.raw_description`
 *
 * @deprecated Use {@link SEARCH_PROCESS_RUNTIME_DESCRIPTION} (`process.runtime.description`) instead
 */
export const SEARCH_RUNTIME_RAW__DESCRIPTION = 'runtime.raw_description';

/**
 * Search name for {@link attributes.RUNTIME_VERSION}. `runtime.version`
 *
 * @deprecated Use {@link SEARCH_PROCESS_RUNTIME_VERSION} (`process.runtime.version`) instead
 */
export const SEARCH_RUNTIME_VERSION = 'runtime.version';

/**
 * Search name for {@link attributes.SCORE_KEY}. `score.<key>`
 */
export const SEARCH_SCORE_KEY = 'score.<key>';

/**
 * Search name for {@link attributes.SCORE_RATIO_KEY}. `score.ratio.<key>`
 */
export const SEARCH_SCORE_RATIO_KEY = 'score.ratio.<key>';

/**
 * Search name for {@link attributes.SCORE_TOTAL}. `score.total`
 */
export const SEARCH_SCORE_TOTAL = 'score.total';

/**
 * Search name for {@link attributes.SCORE_WEIGHT_KEY}. `score.weight.<key>`
 */
export const SEARCH_SCORE_WEIGHT_KEY = 'score.weight.<key>';

/**
 * Search name for {@link attributes.SENTRY_SDK_INTEGRATIONS}. `sdk.integrations`
 */
export const SEARCH_SDK_INTEGRATIONS = 'sdk.integrations';

/**
 * Search name for {@link attributes.SENTRY_SDK_NAME}. `sdk.name`
 */
export const SEARCH_SDK_NAME = 'sdk.name';

/**
 * Search name for {@link attributes.SENTRY_SDK_VERSION}. `sdk.version`
 */
export const SEARCH_SDK_VERSION = 'sdk.version';

/**
 * Search name for {@link attributes.SENTRY_SEGMENT_ID}. `segment.id`
 */
export const SEARCH_SEGMENT_ID = 'segment.id';

/**
 * Search name for {@link attributes.SENTRY_SEGMENT_NAME}. `segment.name`
 *
 * @deprecated Use {@link SEARCH_TRANSACTION} (`transaction`) instead
 */
export const SEARCH_SEGMENT_NAME = 'segment.name';

/**
 * Search name for {@link attributes.SENTRY_SEGMENT_NAME_SOURCE}. `segment.name.source`
 */
export const SEARCH_SEGMENT_NAME_SOURCE = 'segment.name.source';

/**
 * Search name for {@link attributes._SENTRY_SEGMENT_ID}. `segment_id`
 *
 * @deprecated Use {@link SEARCH_TRANSACTION_SPAN__ID} (`transaction.span_id`) instead
 */
export const SEARCH_SEGMENT__ID = 'segment_id';

/**
 * Search name for {@link attributes.SERVER_ADDRESS}. `server.address`
 */
export const SEARCH_SERVER_ADDRESS = 'server.address';

/**
 * Search name for {@link attributes.SERVER_PORT}. `server.port`
 */
export const SEARCH_SERVER_PORT = 'server.port';

/**
 * Search name for {@link attributes.SERVER_NAME}. `server_name`
 *
 * @deprecated Use {@link SEARCH_DEVICE_NAME} (`device.name`) instead
 */
export const SEARCH_SERVER__NAME = 'server_name';

/**
 * Search name for {@link attributes.SENTRY_SERVER_SAMPLE_RATE}. `server_sample_rate`
 */
export const SEARCH_SERVER__SAMPLE__RATE = 'server_sample_rate';

/**
 * Search name for {@link attributes.SERVICE_NAME}. `service.name`
 */
export const SEARCH_SERVICE_NAME = 'service.name';

/**
 * Search name for {@link attributes.SENTRY_RELEASE}. `service.version`
 *
 * @deprecated Use {@link SEARCH_RELEASE} (`release`) instead
 */
export const SEARCH_SERVICE_VERSION = 'service.version';

/**
 * Search name for {@link attributes.SESSION_ID}. `session.id`
 */
export const SEARCH_SESSION_ID = 'session.id';

/**
 * Search name for {@link attributes.SENTRY_SOURCE}. `source`
 *
 * @deprecated
 */
export const SEARCH_SOURCE = 'source';

/**
 * Search name for {@link attributes.SENTRY_ACTION}. `span.action`
 */
export const SEARCH_SPAN_ACTION = 'span.action';

/**
 * Search name for {@link attributes.SENTRY_CATEGORY}. `span.category`
 */
export const SEARCH_SPAN_CATEGORY = 'span.category';

/**
 * Search name for {@link attributes.SENTRY_DOMAIN}. `span.domain`
 */
export const SEARCH_SPAN_DOMAIN = 'span.domain';

/**
 * Search name for {@link attributes.SENTRY_GROUP}. `span.group`
 */
export const SEARCH_SPAN_GROUP = 'span.group';

/**
 * Search name for {@link attributes.SENTRY_KIND}. `span.kind`
 */
export const SEARCH_SPAN_KIND = 'span.kind';

/**
 * Search name for {@link attributes.SENTRY_OP}. `span.op`
 */
export const SEARCH_SPAN_OP = 'span.op';

/**
 * Search name for {@link attributes.SENTRY_SPAN_SOURCE}. `span.source`
 *
 * @deprecated
 */
export const SEARCH_SPAN_SOURCE = 'span.source';

/**
 * Search name for {@link attributes.SENTRY_STATUS}. `span.status`
 */
export const SEARCH_SPAN_STATUS = 'span.status';

/**
 * Search name for {@link attributes.SENTRY_STATUS_MESSAGE}. `span.status.message`
 */
export const SEARCH_SPAN_STATUS_MESSAGE = 'span.status.message';

/**
 * Search name for {@link attributes.SENTRY_STATUS_CODE}. `span.status_code`
 */
export const SEARCH_SPAN_STATUS__CODE = 'span.status_code';

/**
 * Search name for {@link attributes.DB_SYSTEM}. `span.system`
 *
 * @deprecated Use {@link SEARCH_DB_SYSTEM} (`db.system`) instead
 */
export const SEARCH_SPAN_SYSTEM = 'span.system';

/**
 * Search name for {@link attributes.STALL_PERCENTAGE}. `stall_percentage`
 *
 * @deprecated Use {@link SEARCH_APP_VITALS_STALL_PERCENTAGE} (`app.vitals.stall.percentage`) instead
 */
export const SEARCH_STALL__PERCENTAGE = 'stall_percentage';

/**
 * Search name for {@link attributes.STALL_TOTAL_TIME}. `stall_total_time`
 *
 * @deprecated Use {@link SEARCH_APP_VITALS_STALL_DURATION} (`app.vitals.stall.duration`) instead
 */
export const SEARCH_STALL__TOTAL__TIME = 'stall_total_time';

/**
 * Search name for {@link attributes.STARLETTE_MIDDLEWARE_NAME}. `starlette.middleware_name`
 *
 * @deprecated Use {@link SEARCH_MIDDLEWARE_NAME} (`middleware.name`) instead
 */
export const SEARCH_STARLETTE_MIDDLEWARE__NAME = 'starlette.middleware_name';

/**
 * Search name for {@link attributes.STARLITE_MIDDLEWARE_NAME}. `starlite.middleware_name`
 *
 * @deprecated Use {@link SEARCH_MIDDLEWARE_NAME} (`middleware.name`) instead
 */
export const SEARCH_STARLITE_MIDDLEWARE__NAME = 'starlite.middleware_name';

/**
 * Search name for {@link attributes.STATE_TYPE}. `state.type`
 */
export const SEARCH_STATE_TYPE = 'state.type';

/**
 * Search name for {@link attributes.SENTRY_STATUS}. `status`
 *
 * @deprecated Use {@link SEARCH_SPAN_STATUS} (`span.status`) instead
 */
export const SEARCH_STATUS = 'status';

/**
 * Search name for {@link attributes.SENTRY_STATUS_MESSAGE}. `status.message`
 *
 * @deprecated Use {@link SEARCH_SPAN_STATUS_MESSAGE} (`span.status.message`) instead
 */
export const SEARCH_STATUS_MESSAGE = 'status.message';

/**
 * Search name for {@link attributes.SENTRY_STATUS_CODE}. `status_code`
 *
 * @deprecated Use {@link SEARCH_SPAN_STATUS__CODE} (`span.status_code`) instead
 */
export const SEARCH_STATUS__CODE = 'status_code';

/**
 * Search name for {@link attributes.SUBPROCESS_PID}. `subprocess.pid`
 *
 * @deprecated Use {@link SEARCH_PROCESS_PID} (`process.pid`) instead
 */
export const SEARCH_SUBPROCESS_PID = 'subprocess.pid';

/**
 * Search name for {@link attributes.SENTRY_SVELTEKIT_NAVIGATION_FROM}. `sveltekit.navigation.from`
 *
 * @deprecated Use {@link SEARCH_ROUTER_NAVIGATION_ORIGIN} (`router.navigation.origin`) instead
 */
export const SEARCH_SVELTEKIT_NAVIGATION_FROM = 'sveltekit.navigation.from';

/**
 * Search name for {@link attributes.SENTRY_SVELTEKIT_NAVIGATION_TO}. `sveltekit.navigation.to`
 *
 * @deprecated
 */
export const SEARCH_SVELTEKIT_NAVIGATION_TO = 'sveltekit.navigation.to';

/**
 * Search name for {@link attributes.SENTRY_SVELTEKIT_NAVIGATION_TYPE}. `sveltekit.navigation.type`
 *
 * @deprecated Use {@link SEARCH_ROUTER_NAVIGATION_TYPE} (`router.navigation.type`) instead
 */
export const SEARCH_SVELTEKIT_NAVIGATION_TYPE = 'sveltekit.navigation.type';

/**
 * Search name for {@link attributes.THREAD_ID}. `thread.id`
 */
export const SEARCH_THREAD_ID = 'thread.id';

/**
 * Search name for {@link attributes.THREAD_NAME}. `thread.name`
 */
export const SEARCH_THREAD_NAME = 'thread.name';

/**
 * Search name for {@link attributes.TIMBER_TAG}. `timber.tag`
 */
export const SEARCH_TIMBER_TAG = 'timber.tag';

/**
 * Search name for {@link attributes.TIME_TO_FULL_DISPLAY}. `time_to_full_display`
 *
 * @deprecated Use {@link SEARCH_APP_VITALS_TTFD_VALUE} (`app.vitals.ttfd.value`) instead
 */
export const SEARCH_TIME__TO__FULL__DISPLAY = 'time_to_full_display';

/**
 * Search name for {@link attributes.TIME_TO_INITIAL_DISPLAY}. `time_to_initial_display`
 *
 * @deprecated Use {@link SEARCH_APP_VITALS_TTID_VALUE} (`app.vitals.ttid.value`) instead
 */
export const SEARCH_TIME__TO__INITIAL__DISPLAY = 'time_to_initial_display';

/**
 * Search name for {@link attributes.SENTRY_TIMESTAMP_SEQUENCE}. `timestamp.sequence`
 */
export const SEARCH_TIMESTAMP_SEQUENCE = 'timestamp.sequence';

/**
 * Search name for {@link attributes.SENTRY_TRACE_PARENT_SPAN_ID}. `trace.parent_span_id`
 *
 * @deprecated
 */
export const SEARCH_TRACE_PARENT__SPAN__ID = 'trace.parent_span_id';

/**
 * Search name for {@link attributes.SENTRY_TRACE_STATUS}. `trace.status`
 */
export const SEARCH_TRACE_STATUS = 'trace.status';

/**
 * Search name for {@link attributes.SENTRY_TRACE_LIFECYCLE}. `trace_lifecycle`
 */
export const SEARCH_TRACE__LIFECYCLE = 'trace_lifecycle';

/**
 * Search name for {@link attributes.SENTRY_SEGMENT_NAME}. `transaction`
 */
export const SEARCH_TRANSACTION = 'transaction';

/**
 * Search name for {@link attributes._SENTRY_SEGMENT_ID}. `transaction.span_id`
 */
export const SEARCH_TRANSACTION_SPAN__ID = 'transaction.span_id';

/**
 * Search name for {@link attributes.TRPC_PROCEDURE_PATH}. `trpc.procedure_path`
 */
export const SEARCH_TRPC_PROCEDURE__PATH = 'trpc.procedure_path';

/**
 * Search name for {@link attributes.TRPC_PROCEDURE_TYPE}. `trpc.procedure_type`
 */
export const SEARCH_TRPC_PROCEDURE__TYPE = 'trpc.procedure_type';

/**
 * Search name for {@link attributes.TTFB}. `ttfb`
 *
 * @deprecated Use {@link SEARCH_BROWSER_WEB__VITAL_TTFB_VALUE} (`browser.web_vital.ttfb.value`) instead
 */
export const SEARCH_TTFB = 'ttfb';

/**
 * Search name for {@link attributes.TTFB_REQUESTTIME}. `ttfb.requestTime`
 *
 * @deprecated Use {@link SEARCH_BROWSER_WEB__VITAL_TTFB_REQUEST__TIME} (`browser.web_vital.ttfb.request_time`) instead
 */
export const SEARCH_TTFB_REQUESTTIME = 'ttfb.requestTime';

/**
 * Search name for {@link attributes.TYPE}. `type`
 */
export const SEARCH_TYPE = 'type';

/**
 * Search name for {@link attributes.UI_COMPONENT_NAME}. `ui.component_name`
 */
export const SEARCH_UI_COMPONENT__NAME = 'ui.component_name';

/**
 * Search name for {@link attributes.UI_CONTRIBUTES_TO_TTFD}. `ui.contributes_to_ttfd`
 */
export const SEARCH_UI_CONTRIBUTES__TO__TTFD = 'ui.contributes_to_ttfd';

/**
 * Search name for {@link attributes.UI_CONTRIBUTES_TO_TTID}. `ui.contributes_to_ttid`
 */
export const SEARCH_UI_CONTRIBUTES__TO__TTID = 'ui.contributes_to_ttid';

/**
 * Search name for {@link attributes.UI_ELEMENT_HEIGHT}. `ui.element.height`
 */
export const SEARCH_UI_ELEMENT_HEIGHT = 'ui.element.height';

/**
 * Search name for {@link attributes.UI_ELEMENT_ID}. `ui.element.id`
 */
export const SEARCH_UI_ELEMENT_ID = 'ui.element.id';

/**
 * Search name for {@link attributes.UI_ELEMENT_IDENTIFIER}. `ui.element.identifier`
 */
export const SEARCH_UI_ELEMENT_IDENTIFIER = 'ui.element.identifier';

/**
 * Search name for {@link attributes.UI_ELEMENT_LOAD_TIME}. `ui.element.load_time`
 */
export const SEARCH_UI_ELEMENT_LOAD__TIME = 'ui.element.load_time';

/**
 * Search name for {@link attributes.UI_ELEMENT_PAINT_TYPE}. `ui.element.paint_type`
 */
export const SEARCH_UI_ELEMENT_PAINT__TYPE = 'ui.element.paint_type';

/**
 * Search name for {@link attributes.UI_ELEMENT_RENDER_TIME}. `ui.element.render_time`
 */
export const SEARCH_UI_ELEMENT_RENDER__TIME = 'ui.element.render_time';

/**
 * Search name for {@link attributes.UI_ELEMENT_TYPE}. `ui.element.type`
 */
export const SEARCH_UI_ELEMENT_TYPE = 'ui.element.type';

/**
 * Search name for {@link attributes.UI_ELEMENT_URL}. `ui.element.url`
 */
export const SEARCH_UI_ELEMENT_URL = 'ui.element.url';

/**
 * Search name for {@link attributes.UI_ELEMENT_WIDTH}. `ui.element.width`
 */
export const SEARCH_UI_ELEMENT_WIDTH = 'ui.element.width';

/**
 * Search name for {@link attributes.URL}. `url`
 *
 * @deprecated Use {@link SEARCH_URL_FULL} (`url.full`) instead
 */
export const SEARCH_URL = 'url';

/**
 * Search name for {@link attributes.URL_DOMAIN}. `url.domain`
 */
export const SEARCH_URL_DOMAIN = 'url.domain';

/**
 * Search name for {@link attributes.URL_FRAGMENT}. `url.fragment`
 */
export const SEARCH_URL_FRAGMENT = 'url.fragment';

/**
 * Search name for {@link attributes.URL_FULL}. `url.full`
 */
export const SEARCH_URL_FULL = 'url.full';

/**
 * Search name for {@link attributes.URL_PATH}. `url.path`
 */
export const SEARCH_URL_PATH = 'url.path';

/**
 * Search name for {@link attributes.URL_PATH_PARAMETER_KEY}. `url.path.parameter.<key>`
 */
export const SEARCH_URL_PATH_PARAMETER_KEY = 'url.path.parameter.<key>';

/**
 * Search name for {@link attributes.URL_PATH_PARAMS_KEY}. `url.path.params.<key>`
 *
 * @deprecated Use {@link SEARCH_URL_PATH_PARAMETER_KEY} (`url.path.parameter.<key>`) instead
 */
export const SEARCH_URL_PATH_PARAMS_KEY = 'url.path.params.<key>';

/**
 * Search name for {@link attributes.URL_PORT}. `url.port`
 */
export const SEARCH_URL_PORT = 'url.port';

/**
 * Search name for {@link attributes.URL_QUERY}. `url.query`
 */
export const SEARCH_URL_QUERY = 'url.query';

/**
 * Search name for {@link attributes.URL_SAME_ORIGIN}. `url.same_origin`
 *
 * @deprecated Use {@link SEARCH_HTTP_REQUEST_SAME__ORIGIN} (`http.request.same_origin`) instead
 */
export const SEARCH_URL_SAME__ORIGIN = 'url.same_origin';

/**
 * Search name for {@link attributes.URL_SCHEME}. `url.scheme`
 */
export const SEARCH_URL_SCHEME = 'url.scheme';

/**
 * Search name for {@link attributes.URL_TEMPLATE}. `url.template`
 */
export const SEARCH_URL_TEMPLATE = 'url.template';

/**
 * Search name for {@link attributes.USER_EMAIL}. `user.email`
 */
export const SEARCH_USER_EMAIL = 'user.email';

/**
 * Search name for {@link attributes.USER_FULL_NAME}. `user.full_name`
 */
export const SEARCH_USER_FULL__NAME = 'user.full_name';

/**
 * Search name for {@link attributes.USER_GEO_CITY}. `user.geo.city`
 */
export const SEARCH_USER_GEO_CITY = 'user.geo.city';

/**
 * Search name for {@link attributes.USER_GEO_COUNTRY_CODE}. `user.geo.country_code`
 */
export const SEARCH_USER_GEO_COUNTRY__CODE = 'user.geo.country_code';

/**
 * Search name for {@link attributes.USER_GEO_REGION}. `user.geo.region`
 */
export const SEARCH_USER_GEO_REGION = 'user.geo.region';

/**
 * Search name for {@link attributes.USER_GEO_SUBDIVISION}. `user.geo.subdivision`
 */
export const SEARCH_USER_GEO_SUBDIVISION = 'user.geo.subdivision';

/**
 * Search name for {@link attributes.USER_HASH}. `user.hash`
 */
export const SEARCH_USER_HASH = 'user.hash';

/**
 * Search name for {@link attributes.USER_ID}. `user.id`
 */
export const SEARCH_USER_ID = 'user.id';

/**
 * Search name for {@link attributes.SENTRY_USER_IP}. `user.ip`
 */
export const SEARCH_USER_IP = 'user.ip';

/**
 * Search name for {@link attributes.USER_IP_ADDRESS}. `user.ip_address`
 */
export const SEARCH_USER_IP__ADDRESS = 'user.ip_address';

/**
 * Search name for {@link attributes.USER_NAME}. `user.name`
 */
export const SEARCH_USER_NAME = 'user.name';

/**
 * Search name for {@link attributes.USER_ROLES}. `user.roles`
 */
export const SEARCH_USER_ROLES = 'user.roles';

/**
 * Search name for {@link attributes.SENTRY_USER_USERNAME}. `user.username`
 */
export const SEARCH_USER_USERNAME = 'user.username';

/**
 * Search name for {@link attributes.USER_AGENT_ORIGINAL}. `user_agent.original`
 */
export const SEARCH_USER__AGENT_ORIGINAL = 'user_agent.original';

/**
 * Search name for {@link attributes.VERCEL_BRANCH}. `vercel.branch`
 */
export const SEARCH_VERCEL_BRANCH = 'vercel.branch';

/**
 * Search name for {@link attributes.VERCEL_BUILD_ID}. `vercel.build_id`
 */
export const SEARCH_VERCEL_BUILD__ID = 'vercel.build_id';

/**
 * Search name for {@link attributes.VERCEL_DEPLOYMENT_ID}. `vercel.deployment_id`
 */
export const SEARCH_VERCEL_DEPLOYMENT__ID = 'vercel.deployment_id';

/**
 * Search name for {@link attributes.VERCEL_DESTINATION}. `vercel.destination`
 */
export const SEARCH_VERCEL_DESTINATION = 'vercel.destination';

/**
 * Search name for {@link attributes.VERCEL_EDGE_TYPE}. `vercel.edge_type`
 */
export const SEARCH_VERCEL_EDGE__TYPE = 'vercel.edge_type';

/**
 * Search name for {@link attributes.VERCEL_ENTRYPOINT}. `vercel.entrypoint`
 */
export const SEARCH_VERCEL_ENTRYPOINT = 'vercel.entrypoint';

/**
 * Search name for {@link attributes.VERCEL_EXECUTION_REGION}. `vercel.execution_region`
 */
export const SEARCH_VERCEL_EXECUTION__REGION = 'vercel.execution_region';

/**
 * Search name for {@link attributes.VERCEL_ID}. `vercel.id`
 */
export const SEARCH_VERCEL_ID = 'vercel.id';

/**
 * Search name for {@link attributes.VERCEL_JA3_DIGEST}. `vercel.ja3_digest`
 */
export const SEARCH_VERCEL_JA3__DIGEST = 'vercel.ja3_digest';

/**
 * Search name for {@link attributes.VERCEL_JA4_DIGEST}. `vercel.ja4_digest`
 */
export const SEARCH_VERCEL_JA4__DIGEST = 'vercel.ja4_digest';

/**
 * Search name for {@link attributes.VERCEL_LOG_TYPE}. `vercel.log_type`
 */
export const SEARCH_VERCEL_LOG__TYPE = 'vercel.log_type';

/**
 * Search name for {@link attributes.VERCEL_PATH}. `vercel.path`
 */
export const SEARCH_VERCEL_PATH = 'vercel.path';

/**
 * Search name for {@link attributes.VERCEL_PROJECT_ID}. `vercel.project_id`
 */
export const SEARCH_VERCEL_PROJECT__ID = 'vercel.project_id';

/**
 * Search name for {@link attributes.VERCEL_PROJECT_NAME}. `vercel.project_name`
 */
export const SEARCH_VERCEL_PROJECT__NAME = 'vercel.project_name';

/**
 * Search name for {@link attributes.VERCEL_PROXY_CACHE_ID}. `vercel.proxy.cache_id`
 */
export const SEARCH_VERCEL_PROXY_CACHE__ID = 'vercel.proxy.cache_id';

/**
 * Search name for {@link attributes.VERCEL_PROXY_CLIENT_IP}. `vercel.proxy.client_ip`
 */
export const SEARCH_VERCEL_PROXY_CLIENT__IP = 'vercel.proxy.client_ip';

/**
 * Search name for {@link attributes.VERCEL_PROXY_HOST}. `vercel.proxy.host`
 */
export const SEARCH_VERCEL_PROXY_HOST = 'vercel.proxy.host';

/**
 * Search name for {@link attributes.VERCEL_PROXY_LAMBDA_REGION}. `vercel.proxy.lambda_region`
 */
export const SEARCH_VERCEL_PROXY_LAMBDA__REGION = 'vercel.proxy.lambda_region';

/**
 * Search name for {@link attributes.VERCEL_PROXY_METHOD}. `vercel.proxy.method`
 */
export const SEARCH_VERCEL_PROXY_METHOD = 'vercel.proxy.method';

/**
 * Search name for {@link attributes.VERCEL_PROXY_PATH}. `vercel.proxy.path`
 */
export const SEARCH_VERCEL_PROXY_PATH = 'vercel.proxy.path';

/**
 * Search name for {@link attributes.VERCEL_PROXY_PATH_TYPE}. `vercel.proxy.path_type`
 */
export const SEARCH_VERCEL_PROXY_PATH__TYPE = 'vercel.proxy.path_type';

/**
 * Search name for {@link attributes.VERCEL_PROXY_PATH_TYPE_VARIANT}. `vercel.proxy.path_type_variant`
 */
export const SEARCH_VERCEL_PROXY_PATH__TYPE__VARIANT = 'vercel.proxy.path_type_variant';

/**
 * Search name for {@link attributes.VERCEL_PROXY_REFERER}. `vercel.proxy.referer`
 */
export const SEARCH_VERCEL_PROXY_REFERER = 'vercel.proxy.referer';

/**
 * Search name for {@link attributes.VERCEL_PROXY_REGION}. `vercel.proxy.region`
 */
export const SEARCH_VERCEL_PROXY_REGION = 'vercel.proxy.region';

/**
 * Search name for {@link attributes.VERCEL_PROXY_RESPONSE_BYTE_SIZE}. `vercel.proxy.response_byte_size`
 */
export const SEARCH_VERCEL_PROXY_RESPONSE__BYTE__SIZE = 'vercel.proxy.response_byte_size';

/**
 * Search name for {@link attributes.VERCEL_PROXY_SCHEME}. `vercel.proxy.scheme`
 */
export const SEARCH_VERCEL_PROXY_SCHEME = 'vercel.proxy.scheme';

/**
 * Search name for {@link attributes.VERCEL_PROXY_STATUS_CODE}. `vercel.proxy.status_code`
 */
export const SEARCH_VERCEL_PROXY_STATUS__CODE = 'vercel.proxy.status_code';

/**
 * Search name for {@link attributes.VERCEL_PROXY_TIMESTAMP}. `vercel.proxy.timestamp`
 */
export const SEARCH_VERCEL_PROXY_TIMESTAMP = 'vercel.proxy.timestamp';

/**
 * Search name for {@link attributes.VERCEL_PROXY_USER_AGENT}. `vercel.proxy.user_agent`
 */
export const SEARCH_VERCEL_PROXY_USER__AGENT = 'vercel.proxy.user_agent';

/**
 * Search name for {@link attributes.VERCEL_PROXY_VERCEL_CACHE}. `vercel.proxy.vercel_cache`
 */
export const SEARCH_VERCEL_PROXY_VERCEL__CACHE = 'vercel.proxy.vercel_cache';

/**
 * Search name for {@link attributes.VERCEL_PROXY_VERCEL_ID}. `vercel.proxy.vercel_id`
 */
export const SEARCH_VERCEL_PROXY_VERCEL__ID = 'vercel.proxy.vercel_id';

/**
 * Search name for {@link attributes.VERCEL_PROXY_WAF_ACTION}. `vercel.proxy.waf_action`
 */
export const SEARCH_VERCEL_PROXY_WAF__ACTION = 'vercel.proxy.waf_action';

/**
 * Search name for {@link attributes.VERCEL_PROXY_WAF_RULE_ID}. `vercel.proxy.waf_rule_id`
 */
export const SEARCH_VERCEL_PROXY_WAF__RULE__ID = 'vercel.proxy.waf_rule_id';

/**
 * Search name for {@link attributes.VERCEL_REQUEST_ID}. `vercel.request_id`
 */
export const SEARCH_VERCEL_REQUEST__ID = 'vercel.request_id';

/**
 * Search name for {@link attributes.VERCEL_SOURCE}. `vercel.source`
 */
export const SEARCH_VERCEL_SOURCE = 'vercel.source';

/**
 * Search name for {@link attributes.VERCEL_STATUS_CODE}. `vercel.status_code`
 */
export const SEARCH_VERCEL_STATUS__CODE = 'vercel.status_code';

export type AttributeSearchName =
  | typeof SEARCH_ACTION
  | typeof SEARCH_ADDRESS
  | typeof SEARCH_AI_CITATIONS
  | typeof SEARCH_AI_COMPLETION__TOKENS_USED
  | typeof SEARCH_AI_DOCUMENTS
  | typeof SEARCH_AI_FINISH__REASON
  | typeof SEARCH_AI_FREQUENCY__PENALTY
  | typeof SEARCH_AI_FUNCTION__CALL
  | typeof SEARCH_AI_GENERATION__ID
  | typeof SEARCH_AI_INPUT__MESSAGES
  | typeof SEARCH_AI_IS__SEARCH__REQUIRED
  | typeof SEARCH_AI_METADATA
  | typeof SEARCH_AI_MODEL_ID
  | typeof SEARCH_AI_MODEL_PROVIDER
  | typeof SEARCH_AI_MODEL__ID
  | typeof SEARCH_AI_PIPELINE_NAME
  | typeof SEARCH_AI_PREAMBLE
  | typeof SEARCH_AI_PRESENCE__PENALTY
  | typeof SEARCH_AI_PROMPT
  | typeof SEARCH_AI_PROMPT_MESSAGES
  | typeof SEARCH_AI_PROMPT_TOOLS
  | typeof SEARCH_AI_PROMPT__TOKENS_USED
  | typeof SEARCH_AI_RAW__PROMPTING
  | typeof SEARCH_AI_RESPONSE_ID
  | typeof SEARCH_AI_RESPONSE_MODEL
  | typeof SEARCH_AI_RESPONSE_OBJECT
  | typeof SEARCH_AI_RESPONSE_TEXT
  | typeof SEARCH_AI_RESPONSE_TIMESTAMP
  | typeof SEARCH_AI_RESPONSE_TOOLCALLS
  | typeof SEARCH_AI_RESPONSE__FORMAT
  | typeof SEARCH_AI_RESPONSES
  | typeof SEARCH_AI_SCHEMA
  | typeof SEARCH_AI_SEARCH__QUERIES
  | typeof SEARCH_AI_SEARCH__RESULTS
  | typeof SEARCH_AI_SEED
  | typeof SEARCH_AI_STREAMING
  | typeof SEARCH_AI_TAGS
  | typeof SEARCH_AI_TEMPERATURE
  | typeof SEARCH_AI_TEXTS
  | typeof SEARCH_AI_TOOLCALL_ARGS
  | typeof SEARCH_AI_TOOLCALL_RESULT
  | typeof SEARCH_AI_TOOL__CALLS
  | typeof SEARCH_AI_TOOLS
  | typeof SEARCH_AI_TOP__K
  | typeof SEARCH_AI_TOP__P
  | typeof SEARCH_AI_TOTAL__COST
  | typeof SEARCH_AI_TOTAL__TOKENS_USED
  | typeof SEARCH_AI_USAGE_TOKENS
  | typeof SEARCH_AI_VALUES
  | typeof SEARCH_AI_WARNINGS
  | typeof SEARCH_ANGULAR_VERSION
  | typeof SEARCH_APP_APP__BUILD
  | typeof SEARCH_APP_APP__IDENTIFIER
  | typeof SEARCH_APP_APP__NAME
  | typeof SEARCH_APP_APP__START__TIME
  | typeof SEARCH_APP_APP__VERSION
  | typeof SEARCH_APP_BUILD
  | typeof SEARCH_APP_IDENTIFIER
  | typeof SEARCH_APP_IN__FOREGROUND
  | typeof SEARCH_APP_NAME
  | typeof SEARCH_APP_START__TIME
  | typeof SEARCH_APP_VERSION
  | typeof SEARCH_APP_VITALS_FRAMES_DELAY_VALUE
  | typeof SEARCH_APP_VITALS_FRAMES_FROZEN_COUNT
  | typeof SEARCH_APP_VITALS_FRAMES_FROZEN_RATE
  | typeof SEARCH_APP_VITALS_FRAMES_SLOW_COUNT
  | typeof SEARCH_APP_VITALS_FRAMES_SLOW_RATE
  | typeof SEARCH_APP_VITALS_FRAMES_TOTAL_COUNT
  | typeof SEARCH_APP_VITALS_STALL_DURATION
  | typeof SEARCH_APP_VITALS_STALL_PERCENTAGE
  | typeof SEARCH_APP_VITALS_START_COLD_VALUE
  | typeof SEARCH_APP_VITALS_START_PREWARMED
  | typeof SEARCH_APP_VITALS_START_REASON
  | typeof SEARCH_APP_VITALS_START_SCREEN
  | typeof SEARCH_APP_VITALS_START_TYPE
  | typeof SEARCH_APP_VITALS_START_WARM_VALUE
  | typeof SEARCH_APP_VITALS_TTFD_VALUE
  | typeof SEARCH_APP_VITALS_TTID_VALUE
  | typeof SEARCH_APP__START__COLD
  | typeof SEARCH_APP__START__TYPE
  | typeof SEARCH_APP__START__WARM
  | typeof SEARCH_ART_GC_BLOCKING__COUNT
  | typeof SEARCH_ART_GC_BLOCKING__TIME
  | typeof SEARCH_ART_GC_PRE__OOME__COUNT
  | typeof SEARCH_ART_GC_TOTAL__COUNT
  | typeof SEARCH_ART_GC_TOTAL__TIME
  | typeof SEARCH_ART_GC_WAITING__TIME
  | typeof SEARCH_ART_MEMORY_FREE
  | typeof SEARCH_ART_MEMORY_FREE__UNTIL__GC
  | typeof SEARCH_ART_MEMORY_FREE__UNTIL__OOME
  | typeof SEARCH_ART_MEMORY_MAX
  | typeof SEARCH_ART_MEMORY_TOTAL
  | typeof SEARCH_AWS_CLOUDWATCH_LOGS_LOG__GROUP
  | typeof SEARCH_AWS_CLOUDWATCH_LOGS_LOG__STREAM
  | typeof SEARCH_AWS_CLOUDWATCH_LOGS_URL
  | typeof SEARCH_AWS_DYNAMODB_ATTRIBUTE__DEFINITIONS
  | typeof SEARCH_AWS_DYNAMODB_CONSISTENT__READ
  | typeof SEARCH_AWS_DYNAMODB_CONSUMED__CAPACITY
  | typeof SEARCH_AWS_DYNAMODB_COUNT
  | typeof SEARCH_AWS_DYNAMODB_EXCLUSIVE__START__TABLE
  | typeof SEARCH_AWS_DYNAMODB_GLOBAL__SECONDARY__INDEX__UPDATES
  | typeof SEARCH_AWS_DYNAMODB_GLOBAL__SECONDARY__INDEXES
  | typeof SEARCH_AWS_DYNAMODB_INDEX__NAME
  | typeof SEARCH_AWS_DYNAMODB_ITEM__COLLECTION__METRICS
  | typeof SEARCH_AWS_DYNAMODB_LIMIT
  | typeof SEARCH_AWS_DYNAMODB_LOCAL__SECONDARY__INDEXES
  | typeof SEARCH_AWS_DYNAMODB_PROJECTION
  | typeof SEARCH_AWS_DYNAMODB_PROVISIONED__READ__CAPACITY
  | typeof SEARCH_AWS_DYNAMODB_PROVISIONED__WRITE__CAPACITY
  | typeof SEARCH_AWS_DYNAMODB_SCAN__FORWARD
  | typeof SEARCH_AWS_DYNAMODB_SCANNED__COUNT
  | typeof SEARCH_AWS_DYNAMODB_SEGMENT
  | typeof SEARCH_AWS_DYNAMODB_SELECT
  | typeof SEARCH_AWS_DYNAMODB_TABLE__COUNT
  | typeof SEARCH_AWS_DYNAMODB_TABLE__NAMES
  | typeof SEARCH_AWS_DYNAMODB_TOTAL__SEGMENTS
  | typeof SEARCH_AWS_EXTENDED__REQUEST__ID
  | typeof SEARCH_AWS_KINESIS_STREAM_NAME
  | typeof SEARCH_AWS_KINESIS_STREAM__NAME
  | typeof SEARCH_AWS_LAMBDA_AWS__REQUEST__ID
  | typeof SEARCH_AWS_LAMBDA_EXECUTION__DURATION__IN__MILLIS
  | typeof SEARCH_AWS_LAMBDA_FUNCTION__NAME
  | typeof SEARCH_AWS_LAMBDA_FUNCTION__VERSION
  | typeof SEARCH_AWS_LAMBDA_INVOKED__ARN
  | typeof SEARCH_AWS_LAMBDA_INVOKED__FUNCTION__ARN
  | typeof SEARCH_AWS_LAMBDA_REMAINING__TIME__IN__MILLIS
  | typeof SEARCH_AWS_LOG_GROUP_NAMES
  | typeof SEARCH_AWS_LOG_STREAM_NAMES
  | typeof SEARCH_AWS_OPERATION__NAME
  | typeof SEARCH_AWS_REQUEST_EXTENDED__ID
  | typeof SEARCH_AWS_REQUEST_ID
  | typeof SEARCH_AWS_REQUEST_URL
  | typeof SEARCH_AWS_REQUEST__ID
  | typeof SEARCH_AWS_S3_BUCKET
  | typeof SEARCH_AWS_SECRETSMANAGER_SECRET_ARN
  | typeof SEARCH_AWS_SNS_TOPIC_ARN
  | typeof SEARCH_AWS_STEP__FUNCTIONS_ACTIVITY_ARN
  | typeof SEARCH_AWS_STEP__FUNCTIONS_STATE__MACHINE_ARN
  | typeof SEARCH_AWS__REGION
  | typeof SEARCH_BLOCKED__MAIN__THREAD
  | typeof SEARCH_BROWSER_BFCACHE_FRAME
  | typeof SEARCH_BROWSER_BFCACHE_NOT__RESTORED__REASON__COUNT
  | typeof SEARCH_BROWSER_BFCACHE_OUTCOME
  | typeof SEARCH_BROWSER_BFCACHE_REASON
  | typeof SEARCH_BROWSER_NAME
  | typeof SEARCH_BROWSER_NAVIGATION_TYPE
  | typeof SEARCH_BROWSER_PAINT_TYPE
  | typeof SEARCH_BROWSER_PERFORMANCE_NAVIGATION_ACTIVATION__START
  | typeof SEARCH_BROWSER_PERFORMANCE_TIME__ORIGIN
  | typeof SEARCH_BROWSER_REPORT_TYPE
  | typeof SEARCH_BROWSER_SCRIPT_INVOKER
  | typeof SEARCH_BROWSER_SCRIPT_INVOKER__TYPE
  | typeof SEARCH_BROWSER_SCRIPT_SOURCE__CHAR__POSITION
  | typeof SEARCH_BROWSER_VERSION
  | typeof SEARCH_BROWSER_WEB__VITAL_CLS_REPORT__EVENT
  | typeof SEARCH_BROWSER_WEB__VITAL_CLS_SOURCE_KEY
  | typeof SEARCH_BROWSER_WEB__VITAL_CLS_VALUE
  | typeof SEARCH_BROWSER_WEB__VITAL_FCP_VALUE
  | typeof SEARCH_BROWSER_WEB__VITAL_FP_VALUE
  | typeof SEARCH_BROWSER_WEB__VITAL_INP_VALUE
  | typeof SEARCH_BROWSER_WEB__VITAL_LCP_ELEMENT
  | typeof SEARCH_BROWSER_WEB__VITAL_LCP_ID
  | typeof SEARCH_BROWSER_WEB__VITAL_LCP_LOAD__TIME
  | typeof SEARCH_BROWSER_WEB__VITAL_LCP_RENDER__TIME
  | typeof SEARCH_BROWSER_WEB__VITAL_LCP_REPORT__EVENT
  | typeof SEARCH_BROWSER_WEB__VITAL_LCP_SIZE
  | typeof SEARCH_BROWSER_WEB__VITAL_LCP_URL
  | typeof SEARCH_BROWSER_WEB__VITAL_LCP_VALUE
  | typeof SEARCH_BROWSER_WEB__VITAL_TTFB_REQUEST__TIME
  | typeof SEARCH_BROWSER_WEB__VITAL_TTFB_VALUE
  | typeof SEARCH_CACHE_HIT
  | typeof SEARCH_CACHE_ITEM__SIZE
  | typeof SEARCH_CACHE_KEY
  | typeof SEARCH_CACHE_OPERATION
  | typeof SEARCH_CACHE_TTL
  | typeof SEARCH_CACHE_WRITE
  | typeof SEARCH_CANCELLATION__REASON
  | typeof SEARCH_CATEGORY
  | typeof SEARCH_CHANNEL
  | typeof SEARCH_CLIENT_ADDRESS
  | typeof SEARCH_CLIENT_PORT
  | typeof SEARCH_CLIENT__SAMPLE__RATE
  | typeof SEARCH_CLOUD_ACCOUNT_ID
  | typeof SEARCH_CLOUD_AVAILABILITY__ZONE
  | typeof SEARCH_CLOUD_PLATFORM
  | typeof SEARCH_CLOUD_PROVIDER
  | typeof SEARCH_CLOUD_REGION
  | typeof SEARCH_CLOUD_RESOURCE__ID
  | typeof SEARCH_CLOUDFLARE_D1_DURATION
  | typeof SEARCH_CLOUDFLARE_D1_QUERY__TYPE
  | typeof SEARCH_CLOUDFLARE_D1_ROWS__READ
  | typeof SEARCH_CLOUDFLARE_D1_ROWS__WRITTEN
  | typeof SEARCH_CLOUDFLARE_DURABLE__OBJECT_QUERY_BINDINGS
  | typeof SEARCH_CLOUDFLARE_DURABLE__OBJECT_RESPONSE_ROWS__READ
  | typeof SEARCH_CLOUDFLARE_DURABLE__OBJECT_RESPONSE_ROWS__WRITTEN
  | typeof SEARCH_CLOUDFLARE_R2_BUCKET
  | typeof SEARCH_CLOUDFLARE_R2_OPERATION
  | typeof SEARCH_CLOUDFLARE_R2_REQUEST_DELIMITER
  | typeof SEARCH_CLOUDFLARE_R2_REQUEST_KEY
  | typeof SEARCH_CLOUDFLARE_R2_REQUEST_PART__NUMBER
  | typeof SEARCH_CLOUDFLARE_R2_REQUEST_PREFIX
  | typeof SEARCH_CLOUDFLARE_WORKFLOW_ATTEMPT
  | typeof SEARCH_CLOUDFLARE_WORKFLOW_RETRIES_BACKOFF
  | typeof SEARCH_CLOUDFLARE_WORKFLOW_RETRIES_DELAY
  | typeof SEARCH_CLOUDFLARE_WORKFLOW_RETRIES_LIMIT
  | typeof SEARCH_CLOUDFLARE_WORKFLOW_TIMEOUT
  | typeof SEARCH_CLS
  | typeof SEARCH_CLS_SOURCE_KEY
  | typeof SEARCH_CODE
  | typeof SEARCH_CODE_FILE_PATH
  | typeof SEARCH_CODE_FILEPATH
  | typeof SEARCH_CODE_FUNCTION
  | typeof SEARCH_CODE_FUNCTION_NAME
  | typeof SEARCH_CODE_LINE_NUMBER
  | typeof SEARCH_CODE_LINENO
  | typeof SEARCH_CODE_NAMESPACE
  | typeof SEARCH_CONNECTION_RTT
  | typeof SEARCH_CONNECTIONTYPE
  | typeof SEARCH_CULTURE_CALENDAR
  | typeof SEARCH_CULTURE_DISPLAY__NAME
  | typeof SEARCH_CULTURE_IS__24__HOUR__FORMAT
  | typeof SEARCH_CULTURE_LOCALE
  | typeof SEARCH_CULTURE_TIMEZONE
  | typeof SEARCH_DB_COLLECTION_NAME
  | typeof SEARCH_DB_CONNECTION__STRING
  | typeof SEARCH_DB_DRIVER_NAME
  | typeof SEARCH_DB_MONGODB_COLLECTION
  | typeof SEARCH_DB_NAME
  | typeof SEARCH_DB_NAMESPACE
  | typeof SEARCH_DB_OPERATION
  | typeof SEARCH_DB_OPERATION_BATCH_SIZE
  | typeof SEARCH_DB_OPERATION_NAME
  | typeof SEARCH_DB_PARAMS
  | typeof SEARCH_DB_QUERY_PARAMETER_KEY
  | typeof SEARCH_DB_QUERY_SUMMARY
  | typeof SEARCH_DB_QUERY_TEXT
  | typeof SEARCH_DB_REDIS_CONNECTION
  | typeof SEARCH_DB_REDIS_KEY
  | typeof SEARCH_DB_REDIS_PARAMETERS
  | typeof SEARCH_DB_RESPONSE_STATUS__CODE
  | typeof SEARCH_DB_SQL_BINDINGS
  | typeof SEARCH_DB_STATEMENT
  | typeof SEARCH_DB_STORED__PROCEDURE_NAME
  | typeof SEARCH_DB_SYSTEM
  | typeof SEARCH_DB_SYSTEM_NAME
  | typeof SEARCH_DB_USER
  | typeof SEARCH_DESCRIPTION
  | typeof SEARCH_DEVICE_ARCHS
  | typeof SEARCH_DEVICE_BATTERY__LEVEL
  | typeof SEARCH_DEVICE_BATTERY__TEMPERATURE
  | typeof SEARCH_DEVICE_BOOT__TIME
  | typeof SEARCH_DEVICE_BRAND
  | typeof SEARCH_DEVICE_CHARGING
  | typeof SEARCH_DEVICE_CHIPSET
  | typeof SEARCH_DEVICE_CLASS
  | typeof SEARCH_DEVICE_CONNECTION__TYPE
  | typeof SEARCH_DEVICE_CPU__DESCRIPTION
  | typeof SEARCH_DEVICE_EXTERNAL__FREE__STORAGE
  | typeof SEARCH_DEVICE_EXTERNAL__STORAGE__SIZE
  | typeof SEARCH_DEVICE_FAMILY
  | typeof SEARCH_DEVICE_FREE__MEMORY
  | typeof SEARCH_DEVICE_FREE__STORAGE
  | typeof SEARCH_DEVICE_ID
  | typeof SEARCH_DEVICE_LOCALE
  | typeof SEARCH_DEVICE_LOW__MEMORY
  | typeof SEARCH_DEVICE_LOW__POWER__MODE
  | typeof SEARCH_DEVICE_MANUFACTURER
  | typeof SEARCH_DEVICE_MEMORY_ESTIMATED__CAPACITY
  | typeof SEARCH_DEVICE_MEMORY__SIZE
  | typeof SEARCH_DEVICE_MODEL
  | typeof SEARCH_DEVICE_MODEL__ID
  | typeof SEARCH_DEVICE_NAME
  | typeof SEARCH_DEVICE_ONLINE
  | typeof SEARCH_DEVICE_ORIENTATION
  | typeof SEARCH_DEVICE_PROCESSOR__COUNT
  | typeof SEARCH_DEVICE_PROCESSOR__FREQUENCY
  | typeof SEARCH_DEVICE_SCREEN__DENSITY
  | typeof SEARCH_DEVICE_SCREEN__DPI
  | typeof SEARCH_DEVICE_SCREEN__HEIGHT__PIXELS
  | typeof SEARCH_DEVICE_SCREEN__WIDTH__PIXELS
  | typeof SEARCH_DEVICE_SIMULATOR
  | typeof SEARCH_DEVICE_STORAGE__SIZE
  | typeof SEARCH_DEVICE_THERMAL__STATE
  | typeof SEARCH_DEVICE_TIMEZONE
  | typeof SEARCH_DEVICE_USABLE__MEMORY
  | typeof SEARCH_DEVICEMEMORY
  | typeof SEARCH_DIST
  | typeof SEARCH_DJANGO_FUNCTION__NAME
  | typeof SEARCH_DJANGO_MIDDLEWARE__NAME
  | typeof SEARCH_DOMAIN
  | typeof SEARCH_DSC_ENVIRONMENT
  | typeof SEARCH_DSC_PROJECT__ID
  | typeof SEARCH_DSC_PUBLIC__KEY
  | typeof SEARCH_DSC_RELEASE
  | typeof SEARCH_DSC_SAMPLE__RATE
  | typeof SEARCH_DSC_SAMPLED
  | typeof SEARCH_DSC_TRACE__ID
  | typeof SEARCH_DSC_TRANSACTION
  | typeof SEARCH_EFFECTIVECONNECTIONTYPE
  | typeof SEARCH_ENVIRONMENT
  | typeof SEARCH_ERROR_TYPE
  | typeof SEARCH_EVENT_ID
  | typeof SEARCH_EVENT_NAME
  | typeof SEARCH_EVENT_SERIALIZED__BREADCRUMBS
  | typeof SEARCH_EVENT_SERIALIZED__CONTEXTS
  | typeof SEARCH_EVENT_SERIALIZED__EXTRA
  | typeof SEARCH_EVENT_SERIALIZED__META
  | typeof SEARCH_EXCEPTION_ESCAPED
  | typeof SEARCH_EXCEPTION_MESSAGE
  | typeof SEARCH_EXCEPTION_STACKTRACE
  | typeof SEARCH_EXCEPTION_TYPE
  | typeof SEARCH_EXCLUSIVE__TIME
  | typeof SEARCH_FAAS_COLDSTART
  | typeof SEARCH_FAAS_CRON
  | typeof SEARCH_FAAS_DURATION__IN__MS
  | typeof SEARCH_FAAS_ENTRY__POINT
  | typeof SEARCH_FAAS_EXECUTION
  | typeof SEARCH_FAAS_ID
  | typeof SEARCH_FAAS_IDENTITY
  | typeof SEARCH_FAAS_INVOCATION__ID
  | typeof SEARCH_FAAS_INVOKED__NAME
  | typeof SEARCH_FAAS_INVOKED__PROVIDER
  | typeof SEARCH_FAAS_INVOKED__REGION
  | typeof SEARCH_FAAS_NAME
  | typeof SEARCH_FAAS_TIME
  | typeof SEARCH_FAAS_TRIGGER
  | typeof SEARCH_FAAS_VERSION
  | typeof SEARCH_FCP
  | typeof SEARCH_FILE_PATH
  | typeof SEARCH_FILE_SIZE
  | typeof SEARCH_FLAG_EVALUATION_KEY
  | typeof SEARCH_FP
  | typeof SEARCH_FRAMES_DELAY
  | typeof SEARCH_FRAMES_FROZEN
  | typeof SEARCH_FRAMES_SLOW
  | typeof SEARCH_FRAMES_TOTAL
  | typeof SEARCH_FRAMES__FROZEN__RATE
  | typeof SEARCH_FRAMES__SLOW__RATE
  | typeof SEARCH_FS__ERROR
  | typeof SEARCH_GCP_FUNCTION_CONTEXT_EVENT__ID
  | typeof SEARCH_GCP_FUNCTION_CONTEXT_EVENT__TYPE
  | typeof SEARCH_GCP_FUNCTION_CONTEXT_ID
  | typeof SEARCH_GCP_FUNCTION_CONTEXT_RESOURCE
  | typeof SEARCH_GCP_FUNCTION_CONTEXT_SOURCE
  | typeof SEARCH_GCP_FUNCTION_CONTEXT_SPECVERSION
  | typeof SEARCH_GCP_FUNCTION_CONTEXT_TIME
  | typeof SEARCH_GCP_FUNCTION_CONTEXT_TIMESTAMP
  | typeof SEARCH_GCP_FUNCTION_CONTEXT_TYPE
  | typeof SEARCH_GCP_PROJECT_ID
  | typeof SEARCH_GCP__REGION
  | typeof SEARCH_GEN__AI_AGENT_NAME
  | typeof SEARCH_GEN__AI_CONTEXT_UTILIZATION
  | typeof SEARCH_GEN__AI_CONTEXT_WINDOW__SIZE
  | typeof SEARCH_GEN__AI_CONVERSATION_ID
  | typeof SEARCH_GEN__AI_COST_CACHE__CREATION_INPUT__TOKENS
  | typeof SEARCH_GEN__AI_COST_CACHE__READ_INPUT__TOKENS
  | typeof SEARCH_GEN__AI_COST_INPUT__TOKENS
  | typeof SEARCH_GEN__AI_COST_OUTPUT__TOKENS
  | typeof SEARCH_GEN__AI_COST_REASONING_OUTPUT__TOKENS
  | typeof SEARCH_GEN__AI_COST_TOTAL__TOKENS
  | typeof SEARCH_GEN__AI_EMBEDDINGS_INPUT
  | typeof SEARCH_GEN__AI_FUNCTION__ID
  | typeof SEARCH_GEN__AI_INPUT_MESSAGES
  | typeof SEARCH_GEN__AI_OPERATION_NAME
  | typeof SEARCH_GEN__AI_OPERATION_TYPE
  | typeof SEARCH_GEN__AI_OUTPUT_MESSAGES
  | typeof SEARCH_GEN__AI_PIPELINE_NAME
  | typeof SEARCH_GEN__AI_PROMPT
  | typeof SEARCH_GEN__AI_PROMPT_NAME
  | typeof SEARCH_GEN__AI_PROVIDER_NAME
  | typeof SEARCH_GEN__AI_REQUEST_AVAILABLE__TOOLS
  | typeof SEARCH_GEN__AI_REQUEST_FREQUENCY__PENALTY
  | typeof SEARCH_GEN__AI_REQUEST_MAX__TOKENS
  | typeof SEARCH_GEN__AI_REQUEST_MESSAGES
  | typeof SEARCH_GEN__AI_REQUEST_MODEL
  | typeof SEARCH_GEN__AI_REQUEST_PRESENCE__PENALTY
  | typeof SEARCH_GEN__AI_REQUEST_REASONING_LEVEL
  | typeof SEARCH_GEN__AI_REQUEST_SCHEMA
  | typeof SEARCH_GEN__AI_REQUEST_SEED
  | typeof SEARCH_GEN__AI_REQUEST_STOP__SEQUENCES
  | typeof SEARCH_GEN__AI_REQUEST_TEMPERATURE
  | typeof SEARCH_GEN__AI_REQUEST_TOP__K
  | typeof SEARCH_GEN__AI_REQUEST_TOP__P
  | typeof SEARCH_GEN__AI_RESPONSE_FINISH__REASON
  | typeof SEARCH_GEN__AI_RESPONSE_FINISH__REASONS
  | typeof SEARCH_GEN__AI_RESPONSE_ID
  | typeof SEARCH_GEN__AI_RESPONSE_MODEL
  | typeof SEARCH_GEN__AI_RESPONSE_OBJECT
  | typeof SEARCH_GEN__AI_RESPONSE_STREAMING
  | typeof SEARCH_GEN__AI_RESPONSE_TEXT
  | typeof SEARCH_GEN__AI_RESPONSE_TIME__TO__FIRST__CHUNK
  | typeof SEARCH_GEN__AI_RESPONSE_TIME__TO__FIRST__TOKEN
  | typeof SEARCH_GEN__AI_RESPONSE_TOKENS__PER__SECOND
  | typeof SEARCH_GEN__AI_RESPONSE_TOOL__CALLS
  | typeof SEARCH_GEN__AI_SYSTEM
  | typeof SEARCH_GEN__AI_SYSTEM_MESSAGE
  | typeof SEARCH_GEN__AI_SYSTEM__INSTRUCTIONS
  | typeof SEARCH_GEN__AI_TOOL_CALL_ARGUMENTS
  | typeof SEARCH_GEN__AI_TOOL_CALL_RESULT
  | typeof SEARCH_GEN__AI_TOOL_DEFINITIONS
  | typeof SEARCH_GEN__AI_TOOL_DESCRIPTION
  | typeof SEARCH_GEN__AI_TOOL_INPUT
  | typeof SEARCH_GEN__AI_TOOL_MESSAGE
  | typeof SEARCH_GEN__AI_TOOL_NAME
  | typeof SEARCH_GEN__AI_TOOL_OUTPUT
  | typeof SEARCH_GEN__AI_TOOL_TYPE
  | typeof SEARCH_GEN__AI_USAGE_CACHE__CREATION_INPUT__TOKENS
  | typeof SEARCH_GEN__AI_USAGE_CACHE__READ_INPUT__TOKENS
  | typeof SEARCH_GEN__AI_USAGE_COMPLETION__TOKENS
  | typeof SEARCH_GEN__AI_USAGE_INPUT__TOKENS
  | typeof SEARCH_GEN__AI_USAGE_INPUT__TOKENS_CACHE__WRITE
  | typeof SEARCH_GEN__AI_USAGE_INPUT__TOKENS_CACHED
  | typeof SEARCH_GEN__AI_USAGE_OUTPUT__TOKENS
  | typeof SEARCH_GEN__AI_USAGE_OUTPUT__TOKENS_REASONING
  | typeof SEARCH_GEN__AI_USAGE_PROMPT__TOKENS
  | typeof SEARCH_GEN__AI_USAGE_REASONING_OUTPUT__TOKENS
  | typeof SEARCH_GEN__AI_USAGE_TOTAL__TOKENS
  | typeof SEARCH_GRAPHQL_DOCUMENT
  | typeof SEARCH_GRAPHQL_OPERATION
  | typeof SEARCH_GRAPHQL_OPERATION_NAME
  | typeof SEARCH_GRAPHQL_OPERATION_TYPE
  | typeof SEARCH_GRAPHQL_PROCESSING_TYPE
  | typeof SEARCH_GRAPHQL_SOURCE
  | typeof SEARCH_GROUP
  | typeof SEARCH_GRPC_ERROR_BAD__REQUEST_FIELD__VIOLATIONS
  | typeof SEARCH_GRPC_ERROR_DEBUG__INFO_DETAIL
  | typeof SEARCH_GRPC_ERROR_DEBUG__INFO_STACK__ENTRIES
  | typeof SEARCH_GRPC_ERROR_ERROR__INFO_DOMAIN
  | typeof SEARCH_GRPC_ERROR_ERROR__INFO_METADATA_KEY
  | typeof SEARCH_GRPC_ERROR_ERROR__INFO_REASON
  | typeof SEARCH_GRPC_ERROR_PRECONDITION__FAILURE_VIOLATIONS
  | typeof SEARCH_GRPC_ERROR_QUOTA__FAILURE_VIOLATIONS
  | typeof SEARCH_GRPC_ERROR_RESOURCE__INFO_DESCRIPTION
  | typeof SEARCH_GRPC_ERROR_RESOURCE__INFO_OWNER
  | typeof SEARCH_GRPC_ERROR_RESOURCE__INFO_RESOURCE__NAME
  | typeof SEARCH_GRPC_ERROR_RESOURCE__INFO_RESOURCE__TYPE
  | typeof SEARCH_GRPC_ERROR_RETRY__INFO_RETRY__DELAY__MS
  | typeof SEARCH_HARDWARECONCURRENCY
  | typeof SEARCH_HTTP_CLIENT__IP
  | typeof SEARCH_HTTP_DECODED__RESPONSE__CONTENT__LENGTH
  | typeof SEARCH_HTTP_FLAVOR
  | typeof SEARCH_HTTP_FRAGMENT
  | typeof SEARCH_HTTP_HOST
  | typeof SEARCH_HTTP_METHOD
  | typeof SEARCH_HTTP_PREFETCH
  | typeof SEARCH_HTTP_QUERY
  | typeof SEARCH_HTTP_REQUEST_BODY_DATA
  | typeof SEARCH_HTTP_REQUEST_BODY_DECODED__SIZE
  | typeof SEARCH_HTTP_REQUEST_BODY_SIZE
  | typeof SEARCH_HTTP_REQUEST_CONNECT__START
  | typeof SEARCH_HTTP_REQUEST_CONNECTION__END
  | typeof SEARCH_HTTP_REQUEST_DOMAIN__LOOKUP__END
  | typeof SEARCH_HTTP_REQUEST_DOMAIN__LOOKUP__START
  | typeof SEARCH_HTTP_REQUEST_FETCH__START
  | typeof SEARCH_HTTP_REQUEST_HEADER_KEY
  | typeof SEARCH_HTTP_REQUEST_METHOD
  | typeof SEARCH_HTTP_REQUEST_REDIRECT__END
  | typeof SEARCH_HTTP_REQUEST_REDIRECT__START
  | typeof SEARCH_HTTP_REQUEST_REQUEST__START
  | typeof SEARCH_HTTP_REQUEST_RESEND__COUNT
  | typeof SEARCH_HTTP_REQUEST_RESPONSE__END
  | typeof SEARCH_HTTP_REQUEST_RESPONSE__START
  | typeof SEARCH_HTTP_REQUEST_SAME__ORIGIN
  | typeof SEARCH_HTTP_REQUEST_SECURE__CONNECTION__START
  | typeof SEARCH_HTTP_REQUEST_TIME__TO__FIRST__BYTE
  | typeof SEARCH_HTTP_REQUEST_WORKER__START
  | typeof SEARCH_HTTP_REQUEST__CONTENT__LENGTH
  | typeof SEARCH_HTTP_REQUEST__CONTENT__LENGTH__UNCOMPRESSED
  | typeof SEARCH_HTTP_REQUEST__METHOD
  | typeof SEARCH_HTTP_RESPONSE_BODY_DECODED__SIZE
  | typeof SEARCH_HTTP_RESPONSE_BODY_SIZE
  | typeof SEARCH_HTTP_RESPONSE_HEADER_KEY
  | typeof SEARCH_HTTP_RESPONSE_HEADER_CONTENT_LENGTH
  | typeof SEARCH_HTTP_RESPONSE_SIZE
  | typeof SEARCH_HTTP_RESPONSE_STATUS__CODE
  | typeof SEARCH_HTTP_RESPONSE_STATUS__TEXT
  | typeof SEARCH_HTTP_RESPONSE__CONTENT__LENGTH
  | typeof SEARCH_HTTP_RESPONSE__CONTENT__LENGTH__UNCOMPRESSED
  | typeof SEARCH_HTTP_RESPONSE__STATUS__CODE
  | typeof SEARCH_HTTP_RESPONSE__TRANSFER__SIZE
  | typeof SEARCH_HTTP_ROUTE
  | typeof SEARCH_HTTP_SCHEME
  | typeof SEARCH_HTTP_SERVER_REQUEST_TIME__IN__QUEUE
  | typeof SEARCH_HTTP_SERVER__NAME
  | typeof SEARCH_HTTP_STATUS__CODE
  | typeof SEARCH_HTTP_STATUS__TEXT
  | typeof SEARCH_HTTP_TARGET
  | typeof SEARCH_HTTP_URL
  | typeof SEARCH_HTTP_USER__AGENT
  | typeof SEARCH_ID
  | typeof SEARCH_IDLE__SPAN__FINISH__REASON
  | typeof SEARCH_INP
  | typeof SEARCH_IS__REMOTE
  | typeof SEARCH_JSONRPC_PROTOCOL_VERSION
  | typeof SEARCH_JSONRPC_REQUEST_ID
  | typeof SEARCH_JVM_GC_ACTION
  | typeof SEARCH_JVM_GC_NAME
  | typeof SEARCH_JVM_MEMORY_POOL_NAME
  | typeof SEARCH_JVM_MEMORY_TYPE
  | typeof SEARCH_JVM_THREAD_DAEMON
  | typeof SEARCH_JVM_THREAD_STATE
  | typeof SEARCH_KIND
  | typeof SEARCH_KOA_NAME
  | typeof SEARCH_KOA_TYPE
  | typeof SEARCH_LANGCHAIN_CHAIN_NAME
  | typeof SEARCH_LCP
  | typeof SEARCH_LCP_ELEMENT
  | typeof SEARCH_LCP_ID
  | typeof SEARCH_LCP_LOADTIME
  | typeof SEARCH_LCP_RENDERTIME
  | typeof SEARCH_LCP_SIZE
  | typeof SEARCH_LCP_URL
  | typeof SEARCH_LITESTAR_MIDDLEWARE__NAME
  | typeof SEARCH_LOGGER_NAME
  | typeof SEARCH_MAIN__THREAD
  | typeof SEARCH_MCP_CANCELLED_REASON
  | typeof SEARCH_MCP_CANCELLED_REQUEST__ID
  | typeof SEARCH_MCP_CLIENT_NAME
  | typeof SEARCH_MCP_CLIENT_TITLE
  | typeof SEARCH_MCP_CLIENT_VERSION
  | typeof SEARCH_MCP_LIFECYCLE_PHASE
  | typeof SEARCH_MCP_LOGGING_DATA__TYPE
  | typeof SEARCH_MCP_LOGGING_LEVEL
  | typeof SEARCH_MCP_LOGGING_LOGGER
  | typeof SEARCH_MCP_LOGGING_MESSAGE
  | typeof SEARCH_MCP_METHOD_NAME
  | typeof SEARCH_MCP_PROGRESS_CURRENT
  | typeof SEARCH_MCP_PROGRESS_MESSAGE
  | typeof SEARCH_MCP_PROGRESS_PERCENTAGE
  | typeof SEARCH_MCP_PROGRESS_TOKEN
  | typeof SEARCH_MCP_PROGRESS_TOTAL
  | typeof SEARCH_MCP_PROMPT_NAME
  | typeof SEARCH_MCP_PROMPT_RESULT_DESCRIPTION
  | typeof SEARCH_MCP_PROMPT_RESULT_MESSAGE__CONTENT
  | typeof SEARCH_MCP_PROMPT_RESULT_MESSAGE__COUNT
  | typeof SEARCH_MCP_PROMPT_RESULT_MESSAGE__ROLE
  | typeof SEARCH_MCP_PROTOCOL_READY
  | typeof SEARCH_MCP_PROTOCOL_VERSION
  | typeof SEARCH_MCP_REQUEST_ARGUMENT_KEY
  | typeof SEARCH_MCP_REQUEST_ARGUMENT_NAME
  | typeof SEARCH_MCP_REQUEST_ARGUMENT_URI
  | typeof SEARCH_MCP_REQUEST_ID
  | typeof SEARCH_MCP_RESOURCE_PROTOCOL
  | typeof SEARCH_MCP_RESOURCE_URI
  | typeof SEARCH_MCP_SERVER_NAME
  | typeof SEARCH_MCP_SERVER_TITLE
  | typeof SEARCH_MCP_SERVER_VERSION
  | typeof SEARCH_MCP_SESSION_ID
  | typeof SEARCH_MCP_TOOL_NAME
  | typeof SEARCH_MCP_TOOL_RESULT_CONTENT
  | typeof SEARCH_MCP_TOOL_RESULT_CONTENT__COUNT
  | typeof SEARCH_MCP_TOOL_RESULT_IS__ERROR
  | typeof SEARCH_MCP_TRANSPORT
  | typeof SEARCH_MDC_KEY
  | typeof SEARCH_MESSAGE_PARAMETER_KEY
  | typeof SEARCH_MESSAGE_TEMPLATE
  | typeof SEARCH_MESSAGING_BATCH_MESSAGE__COUNT
  | typeof SEARCH_MESSAGING_CONVERSATION__ID
  | typeof SEARCH_MESSAGING_DESTINATION
  | typeof SEARCH_MESSAGING_DESTINATION_CONNECTION
  | typeof SEARCH_MESSAGING_DESTINATION_NAME
  | typeof SEARCH_MESSAGING_DESTINATION_PARTITION_ID
  | typeof SEARCH_MESSAGING_DESTINATION__KIND
  | typeof SEARCH_MESSAGING_KAFKA_MESSAGE_KEY
  | typeof SEARCH_MESSAGING_KAFKA_MESSAGE_TOMBSTONE
  | typeof SEARCH_MESSAGING_KAFKA_OFFSET
  | typeof SEARCH_MESSAGING_MESSAGE_BODY_SIZE
  | typeof SEARCH_MESSAGING_MESSAGE_CONVERSATION__ID
  | typeof SEARCH_MESSAGING_MESSAGE_ENVELOPE_SIZE
  | typeof SEARCH_MESSAGING_MESSAGE_ID
  | typeof SEARCH_MESSAGING_MESSAGE_RECEIVE_LATENCY
  | typeof SEARCH_MESSAGING_MESSAGE_RETRY_COUNT
  | typeof SEARCH_MESSAGING_MESSAGE__ID
  | typeof SEARCH_MESSAGING_OPERATION
  | typeof SEARCH_MESSAGING_OPERATION_NAME
  | typeof SEARCH_MESSAGING_OPERATION_TYPE
  | typeof SEARCH_MESSAGING_PROTOCOL
  | typeof SEARCH_MESSAGING_PROTOCOL__VERSION
  | typeof SEARCH_MESSAGING_RABBITMQ_DESTINATION_ROUTING__KEY
  | typeof SEARCH_MESSAGING_RABBITMQ_ROUTING__KEY
  | typeof SEARCH_MESSAGING_SYSTEM
  | typeof SEARCH_MESSAGING_URL
  | typeof SEARCH_METHOD
  | typeof SEARCH_METRIC_SOURCE
  | typeof SEARCH_MIDDLEWARE_NAME
  | typeof SEARCH_MOBILE
  | typeof SEARCH_MOBILE_FRAMES__DELAY
  | typeof SEARCH_MOBILE_FROZEN__FRAMES
  | typeof SEARCH_MOBILE_SLOW__FRAMES
  | typeof SEARCH_MOBILE_TOTAL__FRAMES
  | typeof SEARCH_MODULE_KEY
  | typeof SEARCH_NAVIGATION_ORIGIN
  | typeof SEARCH_NAVIGATION_ROUTE_ID
  | typeof SEARCH_NAVIGATION_TYPE
  | typeof SEARCH_NEL_ELAPSED__TIME
  | typeof SEARCH_NEL_PHASE
  | typeof SEARCH_NEL_REFERRER
  | typeof SEARCH_NEL_SAMPLING__FUNCTION
  | typeof SEARCH_NEL_TYPE
  | typeof SEARCH_NET_HOST_IP
  | typeof SEARCH_NET_HOST_NAME
  | typeof SEARCH_NET_HOST_PORT
  | typeof SEARCH_NET_PEER_IP
  | typeof SEARCH_NET_PEER_NAME
  | typeof SEARCH_NET_PEER_PORT
  | typeof SEARCH_NET_PROTOCOL_NAME
  | typeof SEARCH_NET_PROTOCOL_VERSION
  | typeof SEARCH_NET_SOCK_FAMILY
  | typeof SEARCH_NET_SOCK_HOST_ADDR
  | typeof SEARCH_NET_SOCK_HOST_PORT
  | typeof SEARCH_NET_SOCK_PEER_ADDR
  | typeof SEARCH_NET_SOCK_PEER_NAME
  | typeof SEARCH_NET_SOCK_PEER_PORT
  | typeof SEARCH_NET_TRANSPORT
  | typeof SEARCH_NETWORK_CONNECTION_EFFECTIVE__TYPE
  | typeof SEARCH_NETWORK_CONNECTION_RTT
  | typeof SEARCH_NETWORK_CONNECTION_TYPE
  | typeof SEARCH_NETWORK_LOCAL_ADDRESS
  | typeof SEARCH_NETWORK_LOCAL_PORT
  | typeof SEARCH_NETWORK_PEER_ADDRESS
  | typeof SEARCH_NETWORK_PEER_PORT
  | typeof SEARCH_NETWORK_PROTOCOL_NAME
  | typeof SEARCH_NETWORK_PROTOCOL_VERSION
  | typeof SEARCH_NETWORK_TRANSPORT
  | typeof SEARCH_NETWORK_TYPE
  | typeof SEARCH_NEXTJS_SSR_FUNCTION_ROUTE
  | typeof SEARCH_NEXTJS_SSR_FUNCTION_TYPE
  | typeof SEARCH_NORMALIZED__DB__QUERY
  | typeof SEARCH_NORMALIZED__DB__QUERY_HASH
  | typeof SEARCH_NORMALIZED__DESCRIPTION
  | typeof SEARCH_OBSERVED__TIMESTAMP__NANOS
  | typeof SEARCH_OP
  | typeof SEARCH_ORIGIN
  | typeof SEARCH_OS_BUILD
  | typeof SEARCH_OS_BUILD__ID
  | typeof SEARCH_OS_DESCRIPTION
  | typeof SEARCH_OS_KERNEL__VERSION
  | typeof SEARCH_OS_NAME
  | typeof SEARCH_OS_RAW__DESCRIPTION
  | typeof SEARCH_OS_ROOTED
  | typeof SEARCH_OS_THEME
  | typeof SEARCH_OS_TYPE
  | typeof SEARCH_OS_VERSION
  | typeof SEARCH_OTEL_KIND
  | typeof SEARCH_OTEL_SCOPE_NAME
  | typeof SEARCH_OTEL_SCOPE_VERSION
  | typeof SEARCH_OTEL_STATUS__CODE
  | typeof SEARCH_OTEL_STATUS__DESCRIPTION
  | typeof SEARCH_PAGELOAD_SPAN__ID
  | typeof SEARCH_PARAMS_KEY
  | typeof SEARCH_PERFORMANCE_ACTIVATIONSTART
  | typeof SEARCH_PERFORMANCE_TIMEORIGIN
  | typeof SEARCH_PLATFORM
  | typeof SEARCH_PORT
  | typeof SEARCH_PREVIOUS__ROUTE
  | typeof SEARCH_PROCESS_COMMAND__ARGS
  | typeof SEARCH_PROCESS_EXECUTABLE_NAME
  | typeof SEARCH_PROCESS_PID
  | typeof SEARCH_PROCESS_RUNTIME_DESCRIPTION
  | typeof SEARCH_PROCESS_RUNTIME_ENGINE_NAME
  | typeof SEARCH_PROCESS_RUNTIME_ENGINE_VERSION
  | typeof SEARCH_PROCESS_RUNTIME_NAME
  | typeof SEARCH_PROCESS_RUNTIME_VERSION
  | typeof SEARCH_PROFILE_ID
  | typeof SEARCH_PROFILE__ID
  | typeof SEARCH_PROFILER_ID
  | typeof SEARCH_PROFILER__ID
  | typeof SEARCH_QUERY
  | typeof SEARCH_QUERY_KEY
  | typeof SEARCH_REACT_VERSION
  | typeof SEARCH_REDIS_COMMAND
  | typeof SEARCH_REDIS_KEY
  | typeof SEARCH_RELAY_INGRESS
  | typeof SEARCH_RELAY_PIPELINE
  | typeof SEARCH_RELEASE
  | typeof SEARCH_REMIX_ACTION__FORM__DATA_KEY
  | typeof SEARCH_REPLAY_ID
  | typeof SEARCH_REPLAY__ID
  | typeof SEARCH_REPLAY__IS__BUFFERING
  | typeof SEARCH_REPORT__EVENT
  | typeof SEARCH_RESOURCE_DEPLOYMENT_ENVIRONMENT
  | typeof SEARCH_RESOURCE_DEPLOYMENT_ENVIRONMENT_NAME
  | typeof SEARCH_RESOURCE_RENDER__BLOCKING__STATUS
  | typeof SEARCH_ROUTE
  | typeof SEARCH_ROUTER_NAVIGATION_ORIGIN
  | typeof SEARCH_ROUTER_NAVIGATION_ROUTE_ID
  | typeof SEARCH_ROUTER_NAVIGATION_TYPE
  | typeof SEARCH_RPC_GRPC_STATUS__CODE
  | typeof SEARCH_RPC_METHOD
  | typeof SEARCH_RPC_RESPONSE_STATUS__CODE
  | typeof SEARCH_RPC_SERVICE
  | typeof SEARCH_RPC_SYSTEM
  | typeof SEARCH_RPC_SYSTEM_NAME
  | typeof SEARCH_RUNTIME_BUILD
  | typeof SEARCH_RUNTIME_NAME
  | typeof SEARCH_RUNTIME_RAW__DESCRIPTION
  | typeof SEARCH_RUNTIME_VERSION
  | typeof SEARCH_SCORE_KEY
  | typeof SEARCH_SCORE_RATIO_KEY
  | typeof SEARCH_SCORE_TOTAL
  | typeof SEARCH_SCORE_WEIGHT_KEY
  | typeof SEARCH_SDK_INTEGRATIONS
  | typeof SEARCH_SDK_NAME
  | typeof SEARCH_SDK_VERSION
  | typeof SEARCH_SEGMENT_ID
  | typeof SEARCH_SEGMENT_NAME
  | typeof SEARCH_SEGMENT_NAME_SOURCE
  | typeof SEARCH_SEGMENT__ID
  | typeof SEARCH_SERVER_ADDRESS
  | typeof SEARCH_SERVER_PORT
  | typeof SEARCH_SERVER__NAME
  | typeof SEARCH_SERVER__SAMPLE__RATE
  | typeof SEARCH_SERVICE_NAME
  | typeof SEARCH_SERVICE_VERSION
  | typeof SEARCH_SESSION_ID
  | typeof SEARCH_SOURCE
  | typeof SEARCH_SPAN_ACTION
  | typeof SEARCH_SPAN_CATEGORY
  | typeof SEARCH_SPAN_DOMAIN
  | typeof SEARCH_SPAN_GROUP
  | typeof SEARCH_SPAN_KIND
  | typeof SEARCH_SPAN_OP
  | typeof SEARCH_SPAN_SOURCE
  | typeof SEARCH_SPAN_STATUS
  | typeof SEARCH_SPAN_STATUS_MESSAGE
  | typeof SEARCH_SPAN_STATUS__CODE
  | typeof SEARCH_SPAN_SYSTEM
  | typeof SEARCH_STALL__PERCENTAGE
  | typeof SEARCH_STALL__TOTAL__TIME
  | typeof SEARCH_STARLETTE_MIDDLEWARE__NAME
  | typeof SEARCH_STARLITE_MIDDLEWARE__NAME
  | typeof SEARCH_STATE_TYPE
  | typeof SEARCH_STATUS
  | typeof SEARCH_STATUS_MESSAGE
  | typeof SEARCH_STATUS__CODE
  | typeof SEARCH_SUBPROCESS_PID
  | typeof SEARCH_SVELTEKIT_NAVIGATION_FROM
  | typeof SEARCH_SVELTEKIT_NAVIGATION_TO
  | typeof SEARCH_SVELTEKIT_NAVIGATION_TYPE
  | typeof SEARCH_THREAD_ID
  | typeof SEARCH_THREAD_NAME
  | typeof SEARCH_TIMBER_TAG
  | typeof SEARCH_TIME__TO__FULL__DISPLAY
  | typeof SEARCH_TIME__TO__INITIAL__DISPLAY
  | typeof SEARCH_TIMESTAMP_SEQUENCE
  | typeof SEARCH_TRACE_PARENT__SPAN__ID
  | typeof SEARCH_TRACE_STATUS
  | typeof SEARCH_TRACE__LIFECYCLE
  | typeof SEARCH_TRANSACTION
  | typeof SEARCH_TRANSACTION_SPAN__ID
  | typeof SEARCH_TRPC_PROCEDURE__PATH
  | typeof SEARCH_TRPC_PROCEDURE__TYPE
  | typeof SEARCH_TTFB
  | typeof SEARCH_TTFB_REQUESTTIME
  | typeof SEARCH_TYPE
  | typeof SEARCH_UI_COMPONENT__NAME
  | typeof SEARCH_UI_CONTRIBUTES__TO__TTFD
  | typeof SEARCH_UI_CONTRIBUTES__TO__TTID
  | typeof SEARCH_UI_ELEMENT_HEIGHT
  | typeof SEARCH_UI_ELEMENT_ID
  | typeof SEARCH_UI_ELEMENT_IDENTIFIER
  | typeof SEARCH_UI_ELEMENT_LOAD__TIME
  | typeof SEARCH_UI_ELEMENT_PAINT__TYPE
  | typeof SEARCH_UI_ELEMENT_RENDER__TIME
  | typeof SEARCH_UI_ELEMENT_TYPE
  | typeof SEARCH_UI_ELEMENT_URL
  | typeof SEARCH_UI_ELEMENT_WIDTH
  | typeof SEARCH_URL
  | typeof SEARCH_URL_DOMAIN
  | typeof SEARCH_URL_FRAGMENT
  | typeof SEARCH_URL_FULL
  | typeof SEARCH_URL_PATH
  | typeof SEARCH_URL_PATH_PARAMETER_KEY
  | typeof SEARCH_URL_PATH_PARAMS_KEY
  | typeof SEARCH_URL_PORT
  | typeof SEARCH_URL_QUERY
  | typeof SEARCH_URL_SAME__ORIGIN
  | typeof SEARCH_URL_SCHEME
  | typeof SEARCH_URL_TEMPLATE
  | typeof SEARCH_USER_EMAIL
  | typeof SEARCH_USER_FULL__NAME
  | typeof SEARCH_USER_GEO_CITY
  | typeof SEARCH_USER_GEO_COUNTRY__CODE
  | typeof SEARCH_USER_GEO_REGION
  | typeof SEARCH_USER_GEO_SUBDIVISION
  | typeof SEARCH_USER_HASH
  | typeof SEARCH_USER_ID
  | typeof SEARCH_USER_IP
  | typeof SEARCH_USER_IP__ADDRESS
  | typeof SEARCH_USER_NAME
  | typeof SEARCH_USER_ROLES
  | typeof SEARCH_USER_USERNAME
  | typeof SEARCH_USER__AGENT_ORIGINAL
  | typeof SEARCH_VERCEL_BRANCH
  | typeof SEARCH_VERCEL_BUILD__ID
  | typeof SEARCH_VERCEL_DEPLOYMENT__ID
  | typeof SEARCH_VERCEL_DESTINATION
  | typeof SEARCH_VERCEL_EDGE__TYPE
  | typeof SEARCH_VERCEL_ENTRYPOINT
  | typeof SEARCH_VERCEL_EXECUTION__REGION
  | typeof SEARCH_VERCEL_ID
  | typeof SEARCH_VERCEL_JA3__DIGEST
  | typeof SEARCH_VERCEL_JA4__DIGEST
  | typeof SEARCH_VERCEL_LOG__TYPE
  | typeof SEARCH_VERCEL_PATH
  | typeof SEARCH_VERCEL_PROJECT__ID
  | typeof SEARCH_VERCEL_PROJECT__NAME
  | typeof SEARCH_VERCEL_PROXY_CACHE__ID
  | typeof SEARCH_VERCEL_PROXY_CLIENT__IP
  | typeof SEARCH_VERCEL_PROXY_HOST
  | typeof SEARCH_VERCEL_PROXY_LAMBDA__REGION
  | typeof SEARCH_VERCEL_PROXY_METHOD
  | typeof SEARCH_VERCEL_PROXY_PATH
  | typeof SEARCH_VERCEL_PROXY_PATH__TYPE
  | typeof SEARCH_VERCEL_PROXY_PATH__TYPE__VARIANT
  | typeof SEARCH_VERCEL_PROXY_REFERER
  | typeof SEARCH_VERCEL_PROXY_REGION
  | typeof SEARCH_VERCEL_PROXY_RESPONSE__BYTE__SIZE
  | typeof SEARCH_VERCEL_PROXY_SCHEME
  | typeof SEARCH_VERCEL_PROXY_STATUS__CODE
  | typeof SEARCH_VERCEL_PROXY_TIMESTAMP
  | typeof SEARCH_VERCEL_PROXY_USER__AGENT
  | typeof SEARCH_VERCEL_PROXY_VERCEL__CACHE
  | typeof SEARCH_VERCEL_PROXY_VERCEL__ID
  | typeof SEARCH_VERCEL_PROXY_WAF__ACTION
  | typeof SEARCH_VERCEL_PROXY_WAF__RULE__ID
  | typeof SEARCH_VERCEL_REQUEST__ID
  | typeof SEARCH_VERCEL_SOURCE
  | typeof SEARCH_VERCEL_STATUS__CODE;

export const ATTRIBUTE_SEARCH_METADATA: Record<string, AttributeSearchMetadata> = {
  address: {
    canonicalName: 'server.address',
    type: 'string',
    brief: 'The destination hostname or IP address for a TCP connection.',
    deprecationChain: ['server.address', 'address', 'http.server_name', 'net.host.name'],
  },
  'ai.citations': {
    canonicalName: 'ai.citations',
    type: 'string[]',
    brief: 'References or sources cited by the AI model in its response.',
    deprecationChain: ['ai.citations'],
  },
  'ai.completion_tokens.used': {
    canonicalName: 'gen_ai.usage.output_tokens',
    type: 'integer',
    brief: 'The number of tokens used to respond to the message.',
    deprecationChain: ['gen_ai.usage.output_tokens', 'ai.completion_tokens.used', 'gen_ai.usage.completion_tokens'],
  },
  'ai.documents': {
    canonicalName: 'ai.documents',
    type: 'string[]',
    brief: 'Documents or content chunks used as context for the AI model.',
    deprecationChain: ['ai.documents'],
  },
  'ai.finish_reason': {
    canonicalName: 'gen_ai.response.finish_reasons',
    type: 'string',
    brief: 'The reason why the model stopped generating.',
    deprecationChain: ['gen_ai.response.finish_reasons', 'ai.finish_reason', 'gen_ai.response.finish_reason'],
  },
  'ai.frequency_penalty': {
    canonicalName: 'gen_ai.request.frequency_penalty',
    type: 'double',
    brief:
      'Used to reduce repetitiveness of generated tokens. The higher the value, the stronger a penalty is applied to previously present tokens, proportional to how many times they have already appeared in the prompt or prior generation.',
    deprecationChain: ['gen_ai.request.frequency_penalty', 'ai.frequency_penalty'],
  },
  'ai.function_call': {
    canonicalName: 'gen_ai.tool.name',
    type: 'string',
    brief:
      'For an AI model call, the function that was called. This is deprecated for OpenAI, and replaced by tool_calls',
    deprecationChain: ['gen_ai.tool.name', 'ai.function_call', 'mcp.tool.name'],
  },
  'ai.generation_id': {
    canonicalName: 'gen_ai.response.id',
    type: 'string',
    brief: 'Unique identifier for the completion.',
    deprecationChain: ['gen_ai.response.id', 'ai.generation_id', 'ai.response.id'],
  },
  'ai.input_messages': {
    canonicalName: 'gen_ai.input.messages',
    type: 'string',
    brief: 'The input messages sent to the model',
    deprecationChain: [
      'gen_ai.input.messages',
      'ai.input_messages',
      'ai.prompt',
      'ai.prompt.messages',
      'ai.texts',
      'gen_ai.prompt',
    ],
  },
  'ai.is_search_required': {
    canonicalName: 'ai.is_search_required',
    type: 'boolean',
    brief: 'Boolean indicating if the model needs to perform a search.',
    deprecationChain: ['ai.is_search_required'],
  },
  'ai.metadata': {
    canonicalName: 'ai.metadata',
    type: 'string',
    brief: 'Extra metadata passed to an AI pipeline step.',
    deprecationChain: ['ai.metadata'],
  },
  'ai.model.id': {
    canonicalName: 'gen_ai.request.model',
    type: 'string',
    brief: 'The id of the model used by the Vercel AI SDK.',
    deprecationChain: ['gen_ai.request.model', 'ai.model.id', 'ai.model_id'],
  },
  'ai.model.provider': {
    canonicalName: 'gen_ai.provider.name',
    type: 'string',
    brief: 'The provider of the model.',
    deprecationChain: ['gen_ai.provider.name', 'ai.model.provider', 'gen_ai.system'],
  },
  'ai.model_id': {
    canonicalName: 'gen_ai.request.model',
    type: 'string',
    brief: 'The vendor-specific ID of the model used.',
    deprecationChain: ['gen_ai.request.model', 'ai.model.id', 'ai.model_id'],
  },
  'ai.pipeline.name': {
    canonicalName: 'gen_ai.pipeline.name',
    type: 'string',
    brief: 'The name of the AI pipeline.',
    deprecationChain: ['gen_ai.pipeline.name', 'ai.pipeline.name', 'langchain.chain.name'],
  },
  'ai.preamble': {
    canonicalName: 'gen_ai.system_instructions',
    type: 'string',
    brief:
      "For an AI model call, the preamble parameter. Preambles are a part of the prompt used to adjust the model's overall behavior and conversation style.",
    deprecationChain: ['gen_ai.system_instructions', 'ai.preamble', 'gen_ai.system.message'],
  },
  'ai.presence_penalty': {
    canonicalName: 'gen_ai.request.presence_penalty',
    type: 'double',
    brief:
      'Used to reduce repetitiveness of generated tokens. Similar to frequency_penalty, except that this penalty is applied equally to all tokens that have already appeared, regardless of their exact frequencies.',
    deprecationChain: ['gen_ai.request.presence_penalty', 'ai.presence_penalty'],
  },
  'ai.prompt': {
    canonicalName: 'gen_ai.input.messages',
    type: 'string',
    brief: 'The prompt passed to the Vercel AI SDK, as a stringified object.',
    deprecationChain: [
      'gen_ai.input.messages',
      'ai.input_messages',
      'ai.prompt',
      'ai.prompt.messages',
      'ai.texts',
      'gen_ai.prompt',
    ],
  },
  'ai.prompt.messages': {
    canonicalName: 'gen_ai.input.messages',
    type: 'string',
    brief: 'The input messages sent to the AI model.',
    deprecationChain: [
      'gen_ai.input.messages',
      'ai.input_messages',
      'ai.prompt',
      'ai.prompt.messages',
      'ai.texts',
      'gen_ai.prompt',
    ],
  },
  'ai.prompt.tools': {
    canonicalName: 'gen_ai.tool.definitions',
    type: 'string[]',
    brief: 'The tools made available to the model, as an array of stringified tool definitions.',
    deprecationChain: ['gen_ai.tool.definitions', 'ai.prompt.tools', 'ai.tools', 'gen_ai.request.available_tools'],
  },
  'ai.prompt_tokens.used': {
    canonicalName: 'gen_ai.usage.input_tokens',
    type: 'integer',
    brief: 'The number of tokens used to process just the prompt.',
    deprecationChain: ['gen_ai.usage.input_tokens', 'ai.prompt_tokens.used', 'gen_ai.usage.prompt_tokens'],
  },
  'ai.raw_prompting': {
    canonicalName: 'ai.raw_prompting',
    type: 'boolean',
    brief: 'When enabled, the user’s prompt will be sent to the model without any pre-processing.',
    deprecationChain: ['ai.raw_prompting'],
  },
  'ai.response.id': {
    canonicalName: 'gen_ai.response.id',
    type: 'string',
    brief: 'The id of the response returned by the model.',
    deprecationChain: ['gen_ai.response.id', 'ai.generation_id', 'ai.response.id'],
  },
  'ai.response.model': {
    canonicalName: 'gen_ai.response.model',
    type: 'string',
    brief: 'The id of the model that produced the response.',
    deprecationChain: ['gen_ai.response.model', 'ai.response.model'],
  },
  'ai.response.object': {
    canonicalName: 'ai.response.object',
    type: 'string',
    brief: 'The type of the object returned by the model.',
    deprecationChain: ['ai.response.object'],
  },
  'ai.response.text': {
    canonicalName: 'gen_ai.output.messages',
    type: 'string',
    brief: 'The text response from the AI model.',
    deprecationChain: [
      'gen_ai.output.messages',
      'ai.response.text',
      'ai.response.toolCalls',
      'ai.responses',
      'ai.tool_calls',
    ],
  },
  'ai.response.timestamp': {
    canonicalName: 'ai.response.timestamp',
    type: 'string',
    brief: 'The ISO 8601 timestamp at which the response was produced.',
    deprecationChain: ['ai.response.timestamp'],
  },
  'ai.response.toolCalls': {
    canonicalName: 'gen_ai.output.messages',
    type: 'string',
    brief: 'The tool calls in the AI model response.',
    deprecationChain: [
      'gen_ai.output.messages',
      'ai.response.text',
      'ai.response.toolCalls',
      'ai.responses',
      'ai.tool_calls',
    ],
  },
  'ai.response_format': {
    canonicalName: 'ai.response_format',
    type: 'string',
    brief: 'For an AI model call, the format of the response',
    deprecationChain: ['ai.response_format'],
  },
  'ai.responses': {
    canonicalName: 'gen_ai.output.messages',
    type: 'string[]',
    brief: 'The response messages sent back by the AI model.',
    deprecationChain: [
      'gen_ai.output.messages',
      'ai.response.text',
      'ai.response.toolCalls',
      'ai.responses',
      'ai.tool_calls',
    ],
  },
  'ai.schema': {
    canonicalName: 'ai.schema',
    type: 'string',
    brief: 'The stringified JSON schema the model output must conform to.',
    deprecationChain: ['ai.schema'],
  },
  'ai.search_queries': {
    canonicalName: 'ai.search_queries',
    type: 'string[]',
    brief: 'Queries used to search for relevant context or documents.',
    deprecationChain: ['ai.search_queries'],
  },
  'ai.search_results': {
    canonicalName: 'ai.search_results',
    type: 'string[]',
    brief: 'Results returned from search queries for context.',
    deprecationChain: ['ai.search_results'],
  },
  'ai.seed': {
    canonicalName: 'gen_ai.request.seed',
    type: 'string',
    brief: 'The seed, ideally models given the same seed and same other parameters will produce the exact same output.',
    deprecationChain: ['gen_ai.request.seed', 'ai.seed'],
  },
  'ai.streaming': {
    canonicalName: 'gen_ai.response.streaming',
    type: 'boolean',
    brief: 'Whether the request was streamed back.',
    deprecationChain: ['gen_ai.response.streaming', 'ai.streaming'],
  },
  'ai.tags': {
    canonicalName: 'ai.tags',
    type: 'string',
    brief: 'Tags that describe an AI pipeline step.',
    deprecationChain: ['ai.tags'],
  },
  'ai.temperature': {
    canonicalName: 'gen_ai.request.temperature',
    type: 'double',
    brief:
      'For an AI model call, the temperature parameter. Temperature essentially means how random the output will be.',
    deprecationChain: ['gen_ai.request.temperature', 'ai.temperature'],
  },
  'ai.texts': {
    canonicalName: 'gen_ai.input.messages',
    type: 'string[]',
    brief: 'Raw text inputs provided to the model.',
    deprecationChain: [
      'gen_ai.input.messages',
      'ai.input_messages',
      'ai.prompt',
      'ai.prompt.messages',
      'ai.texts',
      'gen_ai.prompt',
    ],
  },
  'ai.toolCall.args': {
    canonicalName: 'gen_ai.tool.call.arguments',
    type: 'string',
    brief: 'The arguments of the tool call.',
    deprecationChain: ['gen_ai.tool.call.arguments', 'ai.toolCall.args', 'gen_ai.tool.input'],
  },
  'ai.toolCall.result': {
    canonicalName: 'gen_ai.tool.call.result',
    type: 'string',
    brief: 'The result of the tool call.',
    deprecationChain: [
      'gen_ai.tool.call.result',
      'ai.toolCall.result',
      'gen_ai.tool.message',
      'gen_ai.tool.output',
      'mcp.tool.result.content',
    ],
  },
  'ai.tool_calls': {
    canonicalName: 'gen_ai.output.messages',
    type: 'string[]',
    brief: 'For an AI model call, the tool calls that were made.',
    deprecationChain: [
      'gen_ai.output.messages',
      'ai.response.text',
      'ai.response.toolCalls',
      'ai.responses',
      'ai.tool_calls',
    ],
  },
  'ai.tools': {
    canonicalName: 'gen_ai.tool.definitions',
    type: 'string[]',
    brief: 'For an AI model call, the functions that are available',
    deprecationChain: ['gen_ai.tool.definitions', 'ai.prompt.tools', 'ai.tools', 'gen_ai.request.available_tools'],
  },
  'ai.top_k': {
    canonicalName: 'gen_ai.request.top_k',
    type: 'integer',
    brief:
      'Limits the model to only consider the K most likely next tokens, where K is an integer (e.g., top_k=20 means only the 20 highest probability tokens are considered).',
    deprecationChain: ['gen_ai.request.top_k', 'ai.top_k'],
  },
  'ai.top_p': {
    canonicalName: 'gen_ai.request.top_p',
    type: 'double',
    brief:
      'Limits the model to only consider tokens whose cumulative probability mass adds up to p, where p is a float between 0 and 1 (e.g., top_p=0.7 means only tokens that sum up to 70% of the probability mass are considered).',
    deprecationChain: ['gen_ai.request.top_p', 'ai.top_p'],
  },
  'ai.total_cost': {
    canonicalName: 'gen_ai.cost.total_tokens',
    type: 'currency',
    brief: 'The total cost for the tokens used.',
    deprecationChain: ['gen_ai.cost.total_tokens', 'ai.total_cost'],
  },
  'ai.total_tokens.used': {
    canonicalName: 'gen_ai.usage.total_tokens',
    type: 'integer',
    brief: 'The total number of tokens used to process the prompt.',
    deprecationChain: ['gen_ai.usage.total_tokens', 'ai.total_tokens.used', 'ai.usage.tokens'],
  },
  'ai.usage.tokens': {
    canonicalName: 'gen_ai.usage.total_tokens',
    type: 'integer',
    brief: 'The total number of tokens used for the request and the response.',
    deprecationChain: ['gen_ai.usage.total_tokens', 'ai.total_tokens.used', 'ai.usage.tokens'],
  },
  'ai.values': {
    canonicalName: 'ai.values',
    type: 'string',
    brief: 'The stringified values produced by a Vercel AI SDK object or array generation.',
    deprecationChain: ['ai.values'],
  },
  'ai.warnings': {
    canonicalName: 'ai.warnings',
    type: 'string[]',
    brief: 'Warning messages generated during model execution.',
    deprecationChain: ['ai.warnings'],
  },
  'angular.version': {
    canonicalName: 'angular.version',
    type: 'string',
    brief: 'The version of the Angular framework',
    deprecationChain: ['angular.version'],
  },
  'app.app_build': {
    canonicalName: 'app.build',
    type: 'string',
    brief: 'Internal build identifier, as it appears on the platform.',
    deprecationChain: ['app.build', 'app.app_build'],
  },
  'app.app_identifier': {
    canonicalName: 'app.identifier',
    type: 'string',
    brief: 'Version-independent application identifier, often a dotted bundle ID.',
    deprecationChain: ['app.identifier', 'app.app_identifier'],
  },
  'app.app_name': {
    canonicalName: 'app.name',
    type: 'string',
    brief: 'Human readable application name, as it appears on the platform.',
    deprecationChain: ['app.name', 'app.app_name'],
  },
  'app.app_start_time': {
    canonicalName: 'app.start_time',
    type: 'string',
    brief: 'Formatted UTC timestamp when the user started the application.',
    deprecationChain: ['app.start_time', 'app.app_start_time'],
  },
  'app.app_version': {
    canonicalName: 'app.version',
    type: 'string',
    brief: 'Human readable application version, as it appears on the platform.',
    deprecationChain: ['app.version', 'app.app_version'],
  },
  'app.build': {
    canonicalName: 'app.build',
    type: 'string',
    brief: 'Internal build identifier, as it appears on the platform.',
    deprecationChain: ['app.build', 'app.app_build'],
  },
  'app.identifier': {
    canonicalName: 'app.identifier',
    type: 'string',
    brief: 'Version-independent application identifier, often a dotted bundle ID.',
    deprecationChain: ['app.identifier', 'app.app_identifier'],
  },
  'app.in_foreground': {
    canonicalName: 'app.in_foreground',
    type: 'boolean',
    brief: 'Whether the application is currently in the foreground.',
    deprecationChain: ['app.in_foreground'],
  },
  'app.name': {
    canonicalName: 'app.name',
    type: 'string',
    brief: 'Human readable application name, as it appears on the platform.',
    deprecationChain: ['app.name', 'app.app_name'],
  },
  'app.start_time': {
    canonicalName: 'app.start_time',
    type: 'string',
    brief: 'Formatted UTC timestamp when the user started the application.',
    deprecationChain: ['app.start_time', 'app.app_start_time'],
  },
  'app.version': {
    canonicalName: 'app.version',
    type: 'string',
    brief: 'Human readable application version, as it appears on the platform.',
    deprecationChain: ['app.version', 'app.app_version'],
  },
  'app.vitals.frames.delay.value': {
    canonicalName: 'app.vitals.frames.delay.value',
    type: 'integer',
    brief:
      'The sum of all delayed frame durations in seconds during the lifetime of the span. For more information see [frames delay](https://develop.sentry.dev/sdk/performance/frames-delay/).',
    deprecationChain: ['app.vitals.frames.delay.value', 'frames.delay', 'mobile.frames_delay'],
  },
  'app.vitals.frames.frozen.count': {
    canonicalName: 'app.vitals.frames.frozen.count',
    type: 'integer',
    brief: 'The number of frozen frames rendered during the lifetime of the span.',
    deprecationChain: [
      'app.vitals.frames.frozen.count',
      'frames.frozen',
      'mobile.frozen_frames',
      'sentry.frames.frozen',
    ],
  },
  'app.vitals.frames.frozen.rate': {
    canonicalName: 'app.vitals.frames.frozen.rate',
    type: 'double',
    brief:
      'The fraction of rendered frames that were frozen, calculated as `app.vitals.frames.frozen.count` divided by `app.vitals.frames.total.count`. This is computed by Relay.',
    deprecationChain: ['app.vitals.frames.frozen.rate', 'frames_frozen_rate'],
  },
  'app.vitals.frames.slow.count': {
    canonicalName: 'app.vitals.frames.slow.count',
    type: 'integer',
    brief: 'The number of slow frames rendered during the lifetime of the span.',
    deprecationChain: ['app.vitals.frames.slow.count', 'frames.slow', 'mobile.slow_frames', 'sentry.frames.slow'],
  },
  'app.vitals.frames.slow.rate': {
    canonicalName: 'app.vitals.frames.slow.rate',
    type: 'double',
    brief:
      'The fraction of rendered frames that were slow, calculated as `app.vitals.frames.slow.count` divided by `app.vitals.frames.total.count`. This is computed by Relay.',
    deprecationChain: ['app.vitals.frames.slow.rate', 'frames_slow_rate'],
  },
  'app.vitals.frames.total.count': {
    canonicalName: 'app.vitals.frames.total.count',
    type: 'integer',
    brief: 'The number of total frames rendered during the lifetime of the span.',
    deprecationChain: ['app.vitals.frames.total.count', 'frames.total', 'mobile.total_frames', 'sentry.frames.total'],
  },
  'app.vitals.stall.duration': {
    canonicalName: 'app.vitals.stall.duration',
    type: 'double',
    brief:
      'The combined duration of all stalls in milliseconds. Only applies to React Native. This is computed by Relay.',
    deprecationChain: ['app.vitals.stall.duration', 'stall_total_time'],
  },
  'app.vitals.stall.percentage': {
    canonicalName: 'app.vitals.stall.percentage',
    type: 'double',
    brief:
      'The fraction of transaction duration during which the app was stalled, between 0.0 and 1.0. For example, 0.8 represents 80%. Only applies to React Native. This is computed by Relay.',
    deprecationChain: ['app.vitals.stall.percentage', 'stall_percentage'],
  },
  'app.vitals.start.cold.value': {
    canonicalName: 'app.vitals.start.cold.value',
    type: 'double',
    brief: 'The duration of a cold app start in milliseconds',
    deprecationChain: ['app.vitals.start.cold.value', 'app_start_cold'],
  },
  'app.vitals.start.prewarmed': {
    canonicalName: 'app.vitals.start.prewarmed',
    type: 'boolean',
    brief: 'Whether the app start was prewarmed.',
    deprecationChain: ['app.vitals.start.prewarmed'],
  },
  'app.vitals.start.reason': {
    canonicalName: 'app.vitals.start.reason',
    type: 'string',
    brief: 'The reason that triggered the app start.',
    deprecationChain: ['app.vitals.start.reason'],
  },
  'app.vitals.start.screen': {
    canonicalName: 'app.vitals.start.screen',
    type: 'string',
    brief:
      'The screen that is rendered when the app start is complete. This is the screen the user first sees and can interact with after launch. The absence of this attribute on the app start span indicates a background app start where no UI was rendered.',
    deprecationChain: ['app.vitals.start.screen'],
  },
  'app.vitals.start.type': {
    canonicalName: 'app.vitals.start.type',
    type: 'string',
    brief: 'The type of app start, for example `cold` or `warm`',
    deprecationChain: ['app.vitals.start.type', 'app_start_type'],
  },
  'app.vitals.start.warm.value': {
    canonicalName: 'app.vitals.start.warm.value',
    type: 'double',
    brief: 'The duration of a warm app start in milliseconds',
    deprecationChain: ['app.vitals.start.warm.value', 'app_start_warm'],
  },
  'app.vitals.ttfd.value': {
    canonicalName: 'app.vitals.ttfd.value',
    type: 'double',
    brief: 'The duration of time to full display in milliseconds',
    deprecationChain: ['app.vitals.ttfd.value', 'time_to_full_display'],
  },
  'app.vitals.ttid.value': {
    canonicalName: 'app.vitals.ttid.value',
    type: 'double',
    brief: 'The duration of time to initial display in milliseconds',
    deprecationChain: ['app.vitals.ttid.value', 'time_to_initial_display'],
  },
  app_start_cold: {
    canonicalName: 'app.vitals.start.cold.value',
    type: 'double',
    brief: 'The duration of a cold app start in milliseconds',
    deprecationChain: ['app.vitals.start.cold.value', 'app_start_cold'],
  },
  app_start_type: {
    canonicalName: 'app.vitals.start.type',
    type: 'string',
    brief: 'Mobile app start variant. Either cold or warm.',
    deprecationChain: ['app.vitals.start.type', 'app_start_type'],
  },
  app_start_warm: {
    canonicalName: 'app.vitals.start.warm.value',
    type: 'double',
    brief: 'The duration of a warm app start in milliseconds',
    deprecationChain: ['app.vitals.start.warm.value', 'app_start_warm'],
  },
  'art.gc.blocking_count': {
    canonicalName: 'art.gc.blocking_count',
    type: 'integer',
    brief: 'Total number of blocking (stop-the-world) garbage collections performed by the Android Runtime',
    deprecationChain: ['art.gc.blocking_count'],
  },
  'art.gc.blocking_time': {
    canonicalName: 'art.gc.blocking_time',
    type: 'double',
    brief: 'Total time spent in blocking (stop-the-world) garbage collections by the Android Runtime, in milliseconds',
    deprecationChain: ['art.gc.blocking_time'],
  },
  'art.gc.pre_oome_count': {
    canonicalName: 'art.gc.pre_oome_count',
    type: 'integer',
    brief:
      'Total number of garbage collections triggered as a last resort before an OutOfMemoryError by the Android Runtime',
    deprecationChain: ['art.gc.pre_oome_count'],
  },
  'art.gc.total_count': {
    canonicalName: 'art.gc.total_count',
    type: 'integer',
    brief: 'Total number of garbage collections performed by the Android Runtime',
    deprecationChain: ['art.gc.total_count'],
  },
  'art.gc.total_time': {
    canonicalName: 'art.gc.total_time',
    type: 'double',
    brief: 'Total time spent in garbage collection by the Android Runtime, in milliseconds',
    deprecationChain: ['art.gc.total_time'],
  },
  'art.gc.waiting_time': {
    canonicalName: 'art.gc.waiting_time',
    type: 'double',
    brief:
      'Total time threads spent waiting for garbage collection to complete in the Android Runtime, in milliseconds',
    deprecationChain: ['art.gc.waiting_time'],
  },
  'art.memory.free': {
    canonicalName: 'art.memory.free',
    type: 'integer',
    brief: 'Free memory available to the process as reported by the Android Runtime, in bytes',
    deprecationChain: ['art.memory.free'],
  },
  'art.memory.free_until_gc': {
    canonicalName: 'art.memory.free_until_gc',
    type: 'integer',
    brief: 'Free memory available before a garbage collection would be triggered by the Android Runtime, in bytes',
    deprecationChain: ['art.memory.free_until_gc'],
  },
  'art.memory.free_until_oome': {
    canonicalName: 'art.memory.free_until_oome',
    type: 'integer',
    brief: 'Free memory available before an OutOfMemoryError would be thrown by the Android Runtime, in bytes',
    deprecationChain: ['art.memory.free_until_oome'],
  },
  'art.memory.max': {
    canonicalName: 'art.memory.max',
    type: 'integer',
    brief: 'Maximum memory the process is allowed to use as reported by the Android Runtime, in bytes',
    deprecationChain: ['art.memory.max'],
  },
  'art.memory.total': {
    canonicalName: 'art.memory.total',
    type: 'integer',
    brief: 'Total memory currently allocated to the process by the Android Runtime, in bytes',
    deprecationChain: ['art.memory.total'],
  },
  'aws.cloudwatch.logs.log_group': {
    canonicalName: 'aws.cloudwatch.logs.log_group',
    type: 'string',
    brief: 'The name of the CloudWatch Logs log group',
    deprecationChain: ['aws.cloudwatch.logs.log_group'],
  },
  'aws.cloudwatch.logs.log_stream': {
    canonicalName: 'aws.cloudwatch.logs.log_stream',
    type: 'string',
    brief: 'The name of the CloudWatch Logs log stream',
    deprecationChain: ['aws.cloudwatch.logs.log_stream'],
  },
  'aws.cloudwatch.logs.url': {
    canonicalName: 'aws.cloudwatch.logs.url',
    type: 'string',
    brief: 'The URL to the CloudWatch Logs log group',
    deprecationChain: ['aws.cloudwatch.logs.url'],
  },
  'aws.dynamodb.attribute_definitions': {
    canonicalName: 'aws.dynamodb.attribute_definitions',
    type: 'string[]',
    brief: 'The JSON-serialized value of each item in the `AttributeDefinitions` request field.',
    deprecationChain: ['aws.dynamodb.attribute_definitions'],
  },
  'aws.dynamodb.consistent_read': {
    canonicalName: 'aws.dynamodb.consistent_read',
    type: 'boolean',
    brief: 'The value of the `ConsistentRead` request parameter.',
    deprecationChain: ['aws.dynamodb.consistent_read'],
  },
  'aws.dynamodb.consumed_capacity': {
    canonicalName: 'aws.dynamodb.consumed_capacity',
    type: 'string[]',
    brief: 'The JSON-serialized value of each item in the `ConsumedCapacity` response field.',
    deprecationChain: ['aws.dynamodb.consumed_capacity'],
  },
  'aws.dynamodb.count': {
    canonicalName: 'aws.dynamodb.count',
    type: 'integer',
    brief: 'The value of the `Count` response parameter.',
    deprecationChain: ['aws.dynamodb.count'],
  },
  'aws.dynamodb.exclusive_start_table': {
    canonicalName: 'aws.dynamodb.exclusive_start_table',
    type: 'string',
    brief: 'The value of the `ExclusiveStartTableName` request parameter.',
    deprecationChain: ['aws.dynamodb.exclusive_start_table'],
  },
  'aws.dynamodb.global_secondary_index_updates': {
    canonicalName: 'aws.dynamodb.global_secondary_index_updates',
    type: 'string[]',
    brief: 'The JSON-serialized value of each item in the `GlobalSecondaryIndexUpdates` request field.',
    deprecationChain: ['aws.dynamodb.global_secondary_index_updates'],
  },
  'aws.dynamodb.global_secondary_indexes': {
    canonicalName: 'aws.dynamodb.global_secondary_indexes',
    type: 'string[]',
    brief: 'The JSON-serialized value of each item of the `GlobalSecondaryIndexes` request field.',
    deprecationChain: ['aws.dynamodb.global_secondary_indexes'],
  },
  'aws.dynamodb.index_name': {
    canonicalName: 'aws.dynamodb.index_name',
    type: 'string',
    brief: 'The value of the `IndexName` request parameter.',
    deprecationChain: ['aws.dynamodb.index_name'],
  },
  'aws.dynamodb.item_collection_metrics': {
    canonicalName: 'aws.dynamodb.item_collection_metrics',
    type: 'string',
    brief: 'The JSON-serialized value of the `ItemCollectionMetrics` response field.',
    deprecationChain: ['aws.dynamodb.item_collection_metrics'],
  },
  'aws.dynamodb.limit': {
    canonicalName: 'aws.dynamodb.limit',
    type: 'integer',
    brief: 'The value of the `Limit` request parameter.',
    deprecationChain: ['aws.dynamodb.limit'],
  },
  'aws.dynamodb.local_secondary_indexes': {
    canonicalName: 'aws.dynamodb.local_secondary_indexes',
    type: 'string[]',
    brief: 'The JSON-serialized value of each item of the `LocalSecondaryIndexes` request field.',
    deprecationChain: ['aws.dynamodb.local_secondary_indexes'],
  },
  'aws.dynamodb.projection': {
    canonicalName: 'aws.dynamodb.projection',
    type: 'string',
    brief: 'The value of the `ProjectionExpression` request parameter.',
    deprecationChain: ['aws.dynamodb.projection'],
  },
  'aws.dynamodb.provisioned_read_capacity': {
    canonicalName: 'aws.dynamodb.provisioned_read_capacity',
    type: 'double',
    brief: 'The value of the `ProvisionedThroughput.ReadCapacityUnits` request parameter.',
    deprecationChain: ['aws.dynamodb.provisioned_read_capacity'],
  },
  'aws.dynamodb.provisioned_write_capacity': {
    canonicalName: 'aws.dynamodb.provisioned_write_capacity',
    type: 'double',
    brief: 'The value of the `ProvisionedThroughput.WriteCapacityUnits` request parameter.',
    deprecationChain: ['aws.dynamodb.provisioned_write_capacity'],
  },
  'aws.dynamodb.scan_forward': {
    canonicalName: 'aws.dynamodb.scan_forward',
    type: 'boolean',
    brief: 'The value of the `ScanIndexForward` request parameter.',
    deprecationChain: ['aws.dynamodb.scan_forward'],
  },
  'aws.dynamodb.scanned_count': {
    canonicalName: 'aws.dynamodb.scanned_count',
    type: 'integer',
    brief: 'The value of the `ScannedCount` response parameter.',
    deprecationChain: ['aws.dynamodb.scanned_count'],
  },
  'aws.dynamodb.segment': {
    canonicalName: 'aws.dynamodb.segment',
    type: 'integer',
    brief: 'The value of the `Segment` request parameter.',
    deprecationChain: ['aws.dynamodb.segment'],
  },
  'aws.dynamodb.select': {
    canonicalName: 'aws.dynamodb.select',
    type: 'string',
    brief: 'The value of the `Select` request parameter.',
    deprecationChain: ['aws.dynamodb.select'],
  },
  'aws.dynamodb.table_count': {
    canonicalName: 'aws.dynamodb.table_count',
    type: 'integer',
    brief: 'The number of items in the `TableNames` response parameter.',
    deprecationChain: ['aws.dynamodb.table_count'],
  },
  'aws.dynamodb.table_names': {
    canonicalName: 'aws.dynamodb.table_names',
    type: 'string[]',
    brief: 'The keys in the `RequestItems` object field.',
    deprecationChain: ['aws.dynamodb.table_names'],
  },
  'aws.dynamodb.total_segments': {
    canonicalName: 'aws.dynamodb.total_segments',
    type: 'integer',
    brief: 'The value of the `TotalSegments` request parameter.',
    deprecationChain: ['aws.dynamodb.total_segments'],
  },
  'aws.extended_request_id': {
    canonicalName: 'aws.extended_request_id',
    type: 'string',
    brief: 'The AWS extended request ID as returned in the response headers.',
    deprecationChain: ['aws.extended_request_id', 'aws.request.extended_id'],
  },
  'aws.kinesis.stream.name': {
    canonicalName: 'aws.kinesis.stream_name',
    type: 'string',
    brief: 'The name of the AWS Kinesis stream the request refers to.',
    deprecationChain: ['aws.kinesis.stream_name', 'aws.kinesis.stream.name'],
  },
  'aws.kinesis.stream_name': {
    canonicalName: 'aws.kinesis.stream_name',
    type: 'string',
    brief: 'The name of the AWS Kinesis stream the request refers to.',
    deprecationChain: ['aws.kinesis.stream_name', 'aws.kinesis.stream.name'],
  },
  'aws.lambda.aws_request_id': {
    canonicalName: 'faas.invocation_id',
    type: 'string',
    brief: 'The AWS request ID as received by the Lambda function runtime',
    deprecationChain: ['faas.invocation_id', 'aws.lambda.aws_request_id', 'faas.execution'],
  },
  'aws.lambda.execution_duration_in_millis': {
    canonicalName: 'aws.lambda.execution_duration_in_millis',
    type: 'double',
    brief: 'The execution duration of the Lambda function invocation in milliseconds',
    deprecationChain: ['aws.lambda.execution_duration_in_millis'],
  },
  'aws.lambda.function_name': {
    canonicalName: 'faas.name',
    type: 'string',
    brief: 'The name of the Lambda function',
    deprecationChain: ['faas.name', 'aws.lambda.function_name'],
  },
  'aws.lambda.function_version': {
    canonicalName: 'faas.version',
    type: 'string',
    brief: 'The version of the Lambda function',
    deprecationChain: ['faas.version', 'aws.lambda.function_version'],
  },
  'aws.lambda.invoked_arn': {
    canonicalName: 'aws.lambda.invoked_arn',
    type: 'string',
    brief: 'The full ARN of the Lambda function that was invoked',
    deprecationChain: ['aws.lambda.invoked_arn', 'aws.lambda.invoked_function_arn'],
  },
  'aws.lambda.invoked_function_arn': {
    canonicalName: 'aws.lambda.invoked_arn',
    type: 'string',
    brief: 'The full ARN of the Lambda function that was invoked',
    deprecationChain: ['aws.lambda.invoked_arn', 'aws.lambda.invoked_function_arn'],
  },
  'aws.lambda.remaining_time_in_millis': {
    canonicalName: 'aws.lambda.remaining_time_in_millis',
    type: 'double',
    brief: 'The remaining time in milliseconds before the Lambda function times out',
    deprecationChain: ['aws.lambda.remaining_time_in_millis'],
  },
  'aws.log.group.names': {
    canonicalName: 'aws.log.group.names',
    type: 'string[]',
    brief: 'The name(s) of the AWS log group(s) an application is writing to.',
    deprecationChain: ['aws.log.group.names'],
  },
  'aws.log.stream.names': {
    canonicalName: 'aws.log.stream.names',
    type: 'string[]',
    brief: 'The name(s) of the AWS log stream(s) an application is writing to.',
    deprecationChain: ['aws.log.stream.names'],
  },
  'aws.operation_name': {
    canonicalName: 'rpc.method',
    type: 'string',
    brief: 'The name of the API operation invoked on an AWS service.',
    deprecationChain: ['rpc.method', 'aws.operation_name'],
  },
  'aws.request.extended_id': {
    canonicalName: 'aws.extended_request_id',
    type: 'string',
    brief: 'The AWS extended request ID as returned in the response headers.',
    deprecationChain: ['aws.extended_request_id', 'aws.request.extended_id'],
  },
  'aws.request.id': {
    canonicalName: 'aws.request_id',
    type: 'string',
    brief: 'The AWS request ID as returned in the response headers.',
    deprecationChain: ['aws.request_id', 'aws.request.id'],
  },
  'aws.request.url': {
    canonicalName: 'url.full',
    type: 'string',
    brief: 'The URL of the AWS API request.',
    deprecationChain: ['url.full', 'aws.request.url', 'http.url', 'messaging.url', 'url'],
  },
  'aws.request_id': {
    canonicalName: 'aws.request_id',
    type: 'string',
    brief: 'The AWS request ID as returned in the response headers.',
    deprecationChain: ['aws.request_id', 'aws.request.id'],
  },
  'aws.s3.bucket': {
    canonicalName: 'aws.s3.bucket',
    type: 'string',
    brief: 'The S3 bucket name the request refers to.',
    deprecationChain: ['aws.s3.bucket'],
  },
  'aws.secretsmanager.secret.arn': {
    canonicalName: 'aws.secretsmanager.secret.arn',
    type: 'string',
    brief: 'The ARN of the Secret stored in Secrets Manager.',
    deprecationChain: ['aws.secretsmanager.secret.arn'],
  },
  'aws.sns.topic.arn': {
    canonicalName: 'aws.sns.topic.arn',
    type: 'string',
    brief:
      'The ARN of the AWS SNS Topic. An Amazon SNS topic is a logical access point that acts as a communication channel.',
    deprecationChain: ['aws.sns.topic.arn'],
  },
  'aws.step_functions.activity.arn': {
    canonicalName: 'aws.step_functions.activity.arn',
    type: 'string',
    brief: 'The ARN of the AWS Step Functions Activity.',
    deprecationChain: ['aws.step_functions.activity.arn'],
  },
  'aws.step_functions.state_machine.arn': {
    canonicalName: 'aws.step_functions.state_machine.arn',
    type: 'string',
    brief: 'The ARN of the AWS Step Functions State Machine.',
    deprecationChain: ['aws.step_functions.state_machine.arn'],
  },
  aws_region: {
    canonicalName: 'cloud.region',
    type: 'string',
    brief: 'The geographical region the AWS resource is running',
    deprecationChain: ['cloud.region', 'aws_region', 'gcp_region'],
  },
  blocked_main_thread: {
    canonicalName: 'blocked_main_thread',
    type: 'boolean',
    brief: 'Whether the main thread was blocked by the span.',
    deprecationChain: ['blocked_main_thread'],
  },
  'browser.bfcache.frame': {
    canonicalName: 'browser.bfcache.frame',
    type: 'string',
    brief:
      "Which frame in the page's frame tree a back/forward cache not-restored reason originated from: the top document or a child frame.",
    deprecationChain: ['browser.bfcache.frame'],
  },
  'browser.bfcache.not_restored_reason_count': {
    canonicalName: 'browser.bfcache.not_restored_reason_count',
    type: 'integer',
    brief:
      'The number of reported reasons a page was not restored from the back/forward cache on a back/forward navigation. 0 when the browser reported no reasons (e.g. non-Chromium browsers).',
    deprecationChain: ['browser.bfcache.not_restored_reason_count'],
  },
  'browser.bfcache.outcome': {
    canonicalName: 'browser.bfcache.outcome',
    type: 'string',
    brief:
      "Whether a back/forward navigation was restored from the browser's back/forward cache (bfcache). 'hit' means the page was restored; 'miss' means it was reloaded.",
    deprecationChain: ['browser.bfcache.outcome'],
  },
  'browser.bfcache.reason': {
    canonicalName: 'browser.bfcache.reason',
    type: 'string',
    brief:
      'A browser-reported reason a page was not restored from the back/forward cache on a back/forward navigation, taken from the notRestoredReasons API. Reported per reason (a single miss can have several). Currently Chromium-only.',
    deprecationChain: ['browser.bfcache.reason'],
  },
  'browser.name': {
    canonicalName: 'browser.name',
    type: 'string',
    brief: 'The name of the browser.',
    deprecationChain: ['browser.name', 'sentry.browser.name'],
  },
  'browser.navigation.type': {
    canonicalName: 'browser.navigation.type',
    type: 'string',
    brief: 'The type of navigation the browser performed to arrive at the page the metrics were measured on.',
    deprecationChain: ['browser.navigation.type'],
  },
  'browser.paint.type': {
    canonicalName: 'browser.paint.type',
    type: 'string',
    brief: 'The type of paint timing entry reported by the browser.',
    deprecationChain: ['browser.paint.type'],
  },
  'browser.performance.navigation.activation_start': {
    canonicalName: 'browser.performance.navigation.activation_start',
    type: 'double',
    brief: 'The time between initiating a navigation to a page and the browser activating the page',
    deprecationChain: ['browser.performance.navigation.activation_start', 'performance.activationStart'],
  },
  'browser.performance.time_origin': {
    canonicalName: 'browser.performance.time_origin',
    type: 'double',
    brief: "The browser's performance.timeOrigin timestamp representing the time when the pageload was initiated",
    deprecationChain: ['browser.performance.time_origin', 'performance.timeOrigin'],
  },
  'browser.report.type': {
    canonicalName: 'browser.report.type',
    type: 'string',
    brief: 'A browser report sent via reporting API..',
    deprecationChain: ['browser.report.type'],
  },
  'browser.script.invoker': {
    canonicalName: 'browser.script.invoker',
    type: 'string',
    brief: 'How a script was called in the browser.',
    deprecationChain: ['browser.script.invoker'],
  },
  'browser.script.invoker_type': {
    canonicalName: 'browser.script.invoker_type',
    type: 'string',
    brief: 'Browser script entry point type.',
    deprecationChain: ['browser.script.invoker_type'],
  },
  'browser.script.source_char_position': {
    canonicalName: 'browser.script.source_char_position',
    type: 'integer',
    brief: 'A number representing the script character position of the script.',
    deprecationChain: ['browser.script.source_char_position'],
  },
  'browser.version': {
    canonicalName: 'browser.version',
    type: 'string',
    brief: 'The version of the browser.',
    deprecationChain: ['browser.version', 'sentry.browser.version'],
  },
  'browser.web_vital.cls.report_event': {
    canonicalName: 'browser.web_vital.cls.report_event',
    type: 'string',
    brief: 'The event that caused the SDK to report CLS (pagehide or navigation)',
    deprecationChain: ['browser.web_vital.cls.report_event'],
  },
  'browser.web_vital.cls.source.<key>': {
    canonicalName: 'browser.web_vital.cls.source.<key>',
    type: 'string',
    brief: 'The HTML elements or components responsible for the layout shift. <key> is a numeric index from 1 to N',
    deprecationChain: ['browser.web_vital.cls.source.<key>', 'cls.source.<key>'],
  },
  'browser.web_vital.cls.value': {
    canonicalName: 'browser.web_vital.cls.value',
    type: 'double',
    brief: 'The value of the recorded Cumulative Layout Shift (CLS) web vital',
    deprecationChain: ['browser.web_vital.cls.value', 'cls'],
  },
  'browser.web_vital.fcp.value': {
    canonicalName: 'browser.web_vital.fcp.value',
    type: 'double',
    brief: 'The time it takes for the browser to render the first piece of meaningful content on the screen',
    deprecationChain: ['browser.web_vital.fcp.value', 'fcp'],
  },
  'browser.web_vital.fp.value': {
    canonicalName: 'browser.web_vital.fp.value',
    type: 'double',
    brief: 'The time in milliseconds it takes for the browser to render the first pixel on the screen',
    deprecationChain: ['browser.web_vital.fp.value', 'fp'],
  },
  'browser.web_vital.inp.value': {
    canonicalName: 'browser.web_vital.inp.value',
    type: 'double',
    brief: 'The value of the recorded Interaction to Next Paint (INP) web vital',
    deprecationChain: ['browser.web_vital.inp.value', 'inp'],
  },
  'browser.web_vital.lcp.element': {
    canonicalName: 'browser.web_vital.lcp.element',
    type: 'string',
    brief: 'The HTML element selector or component name for which LCP was reported',
    deprecationChain: ['browser.web_vital.lcp.element', 'lcp.element'],
  },
  'browser.web_vital.lcp.id': {
    canonicalName: 'browser.web_vital.lcp.id',
    type: 'string',
    brief: 'The id of the dom element responsible for the largest contentful paint',
    deprecationChain: ['browser.web_vital.lcp.id', 'lcp.id'],
  },
  'browser.web_vital.lcp.load_time': {
    canonicalName: 'browser.web_vital.lcp.load_time',
    type: 'integer',
    brief: 'The time it took for the LCP element to be loaded',
    deprecationChain: ['browser.web_vital.lcp.load_time', 'lcp.loadTime'],
  },
  'browser.web_vital.lcp.render_time': {
    canonicalName: 'browser.web_vital.lcp.render_time',
    type: 'integer',
    brief: 'The time it took for the LCP element to be rendered',
    deprecationChain: ['browser.web_vital.lcp.render_time', 'lcp.renderTime'],
  },
  'browser.web_vital.lcp.report_event': {
    canonicalName: 'browser.web_vital.lcp.report_event',
    type: 'string',
    brief: 'The event that caused the SDK to report LCP (pagehide or navigation)',
    deprecationChain: ['browser.web_vital.lcp.report_event'],
  },
  'browser.web_vital.lcp.size': {
    canonicalName: 'browser.web_vital.lcp.size',
    type: 'integer',
    brief: 'The size of the largest contentful paint element',
    deprecationChain: ['browser.web_vital.lcp.size', 'lcp.size'],
  },
  'browser.web_vital.lcp.url': {
    canonicalName: 'browser.web_vital.lcp.url',
    type: 'string',
    brief: 'The url of the dom element responsible for the largest contentful paint',
    deprecationChain: ['browser.web_vital.lcp.url', 'lcp.url'],
  },
  'browser.web_vital.lcp.value': {
    canonicalName: 'browser.web_vital.lcp.value',
    type: 'double',
    brief: 'The value of the recorded Largest Contentful Paint (LCP) web vital',
    deprecationChain: ['browser.web_vital.lcp.value', 'lcp'],
  },
  'browser.web_vital.ttfb.request_time': {
    canonicalName: 'browser.web_vital.ttfb.request_time',
    type: 'double',
    brief:
      "The time it takes for the server to process the initial request and send the first byte of a response to the user's browser",
    deprecationChain: ['browser.web_vital.ttfb.request_time', 'ttfb.requestTime'],
  },
  'browser.web_vital.ttfb.value': {
    canonicalName: 'browser.web_vital.ttfb.value',
    type: 'double',
    brief: 'The value of the recorded Time To First Byte (TTFB) web vital in Milliseconds',
    deprecationChain: ['browser.web_vital.ttfb.value', 'ttfb'],
  },
  'cache.hit': {
    canonicalName: 'cache.hit',
    type: 'boolean',
    brief: 'If the cache was hit during this span.',
    deprecationChain: ['cache.hit'],
  },
  'cache.item_size': {
    canonicalName: 'cache.item_size',
    type: 'byte',
    brief: 'The size of the requested item in the cache. In bytes.',
    deprecationChain: ['cache.item_size'],
  },
  'cache.key': {
    canonicalName: 'cache.key',
    type: 'string[]',
    brief: 'The key of the cache accessed.',
    deprecationChain: ['cache.key'],
  },
  'cache.operation': {
    canonicalName: 'cache.operation',
    type: 'string',
    brief: 'The operation being performed on the cache.',
    deprecationChain: ['cache.operation'],
  },
  'cache.ttl': {
    canonicalName: 'cache.ttl',
    type: 'integer',
    brief: 'The ttl of the cache in seconds',
    deprecationChain: ['cache.ttl'],
  },
  'cache.write': {
    canonicalName: 'cache.write',
    type: 'boolean',
    brief: 'If the cache operation resulted in a write to the cache.',
    deprecationChain: ['cache.write'],
  },
  cancellation_reason: {
    canonicalName: 'sentry.cancellation_reason',
    type: 'string',
    brief: 'The reason why a span ended early.',
    deprecationChain: ['sentry.cancellation_reason'],
  },
  channel: {
    canonicalName: 'channel',
    type: 'string',
    brief: 'The channel name that is being used.',
    deprecationChain: ['channel'],
  },
  'client.address': {
    canonicalName: 'client.address',
    type: 'string',
    brief:
      'Client address - domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.',
    deprecationChain: ['client.address', 'http.client_ip'],
  },
  'client.port': {
    canonicalName: 'client.port',
    type: 'integer',
    brief: 'Client port number.',
    deprecationChain: ['client.port'],
  },
  client_sample_rate: {
    canonicalName: 'sentry.client_sample_rate',
    type: 'double',
    brief: 'Rate at which a span was sampled in the SDK.',
    deprecationChain: ['sentry.client_sample_rate', 'client_sample_rate'],
  },
  'cloud.account.id': {
    canonicalName: 'cloud.account.id',
    type: 'string',
    brief: 'The cloud account ID the resource is assigned to',
    deprecationChain: ['cloud.account.id'],
  },
  'cloud.availability_zone': {
    canonicalName: 'cloud.availability_zone',
    type: 'string',
    brief: 'Cloud regions often have multiple, isolated locations known as zones to increase availability',
    deprecationChain: ['cloud.availability_zone'],
  },
  'cloud.platform': {
    canonicalName: 'cloud.platform',
    type: 'string',
    brief: 'The cloud platform in use',
    deprecationChain: ['cloud.platform'],
  },
  'cloud.provider': {
    canonicalName: 'cloud.provider',
    type: 'string',
    brief: 'Name of the cloud provider',
    deprecationChain: ['cloud.provider'],
  },
  'cloud.region': {
    canonicalName: 'cloud.region',
    type: 'string',
    brief: 'The geographical region the resource is running',
    deprecationChain: ['cloud.region', 'aws_region', 'gcp_region'],
  },
  'cloud.resource_id': {
    canonicalName: 'cloud.resource_id',
    type: 'string',
    brief: 'Cloud provider-specific native identifier of the monitored cloud resource',
    deprecationChain: ['cloud.resource_id', 'faas.id'],
  },
  'cloudflare.d1.duration': {
    canonicalName: 'cloudflare.d1.duration',
    type: 'integer',
    brief: 'The duration of a Cloudflare D1 operation.',
    deprecationChain: ['cloudflare.d1.duration'],
  },
  'cloudflare.d1.query_type': {
    canonicalName: 'db.operation.name',
    type: 'string',
    brief: 'The type of query executed in a Cloudflare D1 operation',
    deprecationChain: ['db.operation.name', 'cloudflare.d1.query_type', 'db.operation', 'redis.command'],
  },
  'cloudflare.d1.rows_read': {
    canonicalName: 'cloudflare.d1.rows_read',
    type: 'integer',
    brief: 'The number of rows read in a Cloudflare D1 operation.',
    deprecationChain: ['cloudflare.d1.rows_read'],
  },
  'cloudflare.d1.rows_written': {
    canonicalName: 'cloudflare.d1.rows_written',
    type: 'integer',
    brief: 'The number of rows written in a Cloudflare D1 operation.',
    deprecationChain: ['cloudflare.d1.rows_written'],
  },
  'cloudflare.durable_object.query.bindings': {
    canonicalName: 'cloudflare.durable_object.query.bindings',
    type: 'integer',
    brief: 'The number of bound parameters passed to the SQL exec call.',
    deprecationChain: ['cloudflare.durable_object.query.bindings'],
  },
  'cloudflare.durable_object.response.rows_read': {
    canonicalName: 'cloudflare.durable_object.response.rows_read',
    type: 'integer',
    brief: 'The number of rows read by a Cloudflare Durable Object SQL operation.',
    deprecationChain: ['cloudflare.durable_object.response.rows_read'],
  },
  'cloudflare.durable_object.response.rows_written': {
    canonicalName: 'cloudflare.durable_object.response.rows_written',
    type: 'integer',
    brief: 'The number of rows written by a Cloudflare Durable Object SQL operation.',
    deprecationChain: ['cloudflare.durable_object.response.rows_written'],
  },
  'cloudflare.r2.bucket': {
    canonicalName: 'cloudflare.r2.bucket',
    type: 'string',
    brief: 'The name of the Cloudflare R2 bucket binding',
    deprecationChain: ['cloudflare.r2.bucket'],
  },
  'cloudflare.r2.operation': {
    canonicalName: 'cloudflare.r2.operation',
    type: 'string',
    brief: 'The R2 API operation being performed',
    deprecationChain: ['cloudflare.r2.operation'],
  },
  'cloudflare.r2.request.delimiter': {
    canonicalName: 'cloudflare.r2.request.delimiter',
    type: 'string',
    brief: 'The delimiter used to group objects in an R2 list operation',
    deprecationChain: ['cloudflare.r2.request.delimiter'],
  },
  'cloudflare.r2.request.key': {
    canonicalName: 'cloudflare.r2.request.key',
    type: 'string',
    brief: 'The object key used in the R2 operation',
    deprecationChain: ['cloudflare.r2.request.key'],
  },
  'cloudflare.r2.request.part_number': {
    canonicalName: 'cloudflare.r2.request.part_number',
    type: 'integer',
    brief: 'The part number in a multipart upload operation',
    deprecationChain: ['cloudflare.r2.request.part_number'],
  },
  'cloudflare.r2.request.prefix': {
    canonicalName: 'cloudflare.r2.request.prefix',
    type: 'string',
    brief: 'The prefix used to filter objects in an R2 list operation',
    deprecationChain: ['cloudflare.r2.request.prefix'],
  },
  'cloudflare.workflow.attempt': {
    canonicalName: 'cloudflare.workflow.attempt',
    type: 'integer',
    brief: 'The current attempt number for a Cloudflare Workflow step',
    deprecationChain: ['cloudflare.workflow.attempt'],
  },
  'cloudflare.workflow.retries.backoff': {
    canonicalName: 'cloudflare.workflow.retries.backoff',
    type: 'string',
    brief: 'The backoff strategy for Cloudflare Workflow step retries',
    deprecationChain: ['cloudflare.workflow.retries.backoff'],
  },
  'cloudflare.workflow.retries.delay': {
    canonicalName: 'cloudflare.workflow.retries.delay',
    type: 'string',
    brief: 'The delay between Cloudflare Workflow step retries',
    deprecationChain: ['cloudflare.workflow.retries.delay'],
  },
  'cloudflare.workflow.retries.limit': {
    canonicalName: 'cloudflare.workflow.retries.limit',
    type: 'integer',
    brief: 'The maximum number of retries for a Cloudflare Workflow step',
    deprecationChain: ['cloudflare.workflow.retries.limit'],
  },
  'cloudflare.workflow.timeout': {
    canonicalName: 'cloudflare.workflow.timeout',
    type: 'string',
    brief: 'The timeout duration for a Cloudflare Workflow step',
    deprecationChain: ['cloudflare.workflow.timeout'],
  },
  cls: {
    canonicalName: 'browser.web_vital.cls.value',
    type: 'double',
    brief: 'The value of the recorded Cumulative Layout Shift (CLS) web vital',
    deprecationChain: ['browser.web_vital.cls.value', 'cls'],
  },
  'cls.source.<key>': {
    canonicalName: 'browser.web_vital.cls.source.<key>',
    type: 'string',
    brief: 'The HTML elements or components responsible for the layout shift. <key> is a numeric index from 1 to N',
    deprecationChain: ['browser.web_vital.cls.source.<key>', 'cls.source.<key>'],
  },
  code: {
    canonicalName: 'rpc.response.status_code',
    type: 'string',
    brief: 'Status code of the RPC returned by the RPC server or generated by the client.',
    deprecationChain: ['rpc.response.status_code', 'code'],
  },
  'code.file.path': {
    canonicalName: 'code.file.path',
    type: 'string',
    brief:
      'The source code file name that identifies the code unit as uniquely as possible (preferably an absolute file path).',
    deprecationChain: ['code.file.path', 'code.filepath'],
  },
  'code.filepath': {
    canonicalName: 'code.file.path',
    type: 'string',
    brief:
      'The source code file name that identifies the code unit as uniquely as possible (preferably an absolute file path).',
    deprecationChain: ['code.file.path', 'code.filepath'],
  },
  'code.function': {
    canonicalName: 'code.function',
    type: 'string',
    brief: "The method or function name, or equivalent (usually rightmost part of the code unit's name).",
    deprecationChain: ['code.function', 'code.function.name', 'django.function_name'],
  },
  'code.function.name': {
    canonicalName: 'code.function.name',
    type: 'string',
    brief: 'The method or function fully-qualified name without arguments.',
    deprecationChain: ['code.function.name', 'code.function', 'django.function_name'],
  },
  'code.line.number': {
    canonicalName: 'code.line.number',
    type: 'integer',
    brief:
      'The line number in code.filepath best representing the operation. It SHOULD point within the code unit named in code.function',
    deprecationChain: ['code.line.number', 'code.lineno'],
  },
  'code.lineno': {
    canonicalName: 'code.line.number',
    type: 'integer',
    brief:
      'The line number in code.filepath best representing the operation. It SHOULD point within the code unit named in code.function',
    deprecationChain: ['code.line.number', 'code.lineno'],
  },
  'code.namespace': {
    canonicalName: 'code.namespace',
    type: 'string',
    brief:
      "The 'namespace' within which code.function is defined. Usually the qualified class or module name, such that code.namespace + some separator + code.function form a unique identifier for the code unit.",
    deprecationChain: ['code.namespace'],
  },
  'connection.rtt': {
    canonicalName: 'network.connection.rtt',
    type: 'integer',
    brief: 'Specifies the estimated effective round-trip time of the current connection, in milliseconds.',
    deprecationChain: ['network.connection.rtt', 'connection.rtt'],
  },
  connectionType: {
    canonicalName: 'network.connection.type',
    type: 'string',
    brief: 'Specifies the type of the current connection (e.g. wifi, ethernet, cellular , etc).',
    deprecationChain: ['network.connection.type', 'connectionType', 'device.connection_type'],
  },
  'culture.calendar': {
    canonicalName: 'culture.calendar',
    type: 'string',
    brief: 'The calendar system used by the culture.',
    deprecationChain: ['culture.calendar'],
  },
  'culture.display_name': {
    canonicalName: 'culture.display_name',
    type: 'string',
    brief: 'Human readable name of the culture.',
    deprecationChain: ['culture.display_name'],
  },
  'culture.is_24_hour_format': {
    canonicalName: 'culture.is_24_hour_format',
    type: 'boolean',
    brief: 'Whether the culture uses 24-hour time format.',
    deprecationChain: ['culture.is_24_hour_format'],
  },
  'culture.locale': {
    canonicalName: 'culture.locale',
    type: 'string',
    brief: 'The locale identifier following RFC 4646.',
    deprecationChain: ['culture.locale'],
  },
  'culture.timezone': {
    canonicalName: 'culture.timezone',
    type: 'string',
    brief: 'The timezone of the culture, as a geographic timezone identifier.',
    deprecationChain: ['culture.timezone'],
  },
  'db.collection.name': {
    canonicalName: 'db.collection.name',
    type: 'string',
    brief: 'The name of a collection (table, container) within the database.',
    deprecationChain: ['db.collection.name', 'db.mongodb.collection'],
  },
  'db.connection_string': {
    canonicalName: 'db.connection_string',
    type: 'string',
    brief: 'The connection string used to connect to the database.',
    deprecationChain: ['db.connection_string'],
  },
  'db.driver.name': {
    canonicalName: 'db.driver.name',
    type: 'string',
    brief: 'The name of the driver used for the database connection.',
    deprecationChain: ['db.driver.name'],
  },
  'db.mongodb.collection': {
    canonicalName: 'db.collection.name',
    type: 'string',
    brief: 'The MongoDB collection being accessed.',
    deprecationChain: ['db.collection.name', 'db.mongodb.collection'],
  },
  'db.name': {
    canonicalName: 'db.namespace',
    type: 'string',
    brief: 'The name of the database being accessed.',
    deprecationChain: ['db.namespace', 'db.name'],
  },
  'db.namespace': {
    canonicalName: 'db.namespace',
    type: 'string',
    brief: 'The name of the database being accessed.',
    deprecationChain: ['db.namespace', 'db.name'],
  },
  'db.operation': {
    canonicalName: 'db.operation.name',
    type: 'string',
    brief: 'The name of the operation being executed.',
    deprecationChain: ['db.operation.name', 'cloudflare.d1.query_type', 'db.operation', 'redis.command'],
  },
  'db.operation.batch.size': {
    canonicalName: 'db.operation.batch.size',
    type: 'integer',
    brief:
      'The number of queries included in a batch operation. Operations are only considered batches when they contain two or more operations, and so db.operation.batch.size SHOULD never be 1.',
    deprecationChain: ['db.operation.batch.size'],
  },
  'db.operation.name': {
    canonicalName: 'db.operation.name',
    type: 'string',
    brief: 'The name of the operation being executed.',
    deprecationChain: ['db.operation.name', 'cloudflare.d1.query_type', 'db.operation', 'redis.command'],
  },
  'db.params': {
    canonicalName: 'db.query.parameter.<key>',
    type: 'string',
    brief: 'The query bindings for a database request.',
    deprecationChain: ['db.params'],
  },
  'db.query.parameter.<key>': {
    canonicalName: 'db.query.parameter.<key>',
    type: 'string',
    brief:
      'A query parameter used in db.query.text, with <key> being the parameter name, and the attribute value being a string representation of the parameter value.',
    deprecationChain: ['db.query.parameter.<key>'],
  },
  'db.query.summary': {
    canonicalName: 'db.query.summary',
    type: 'string',
    brief:
      'A shortened representation of operation(s) in the full query. This attribute must be low-cardinality and should only contain the operation table names.',
    deprecationChain: ['db.query.summary'],
  },
  'db.query.text': {
    canonicalName: 'db.query.text',
    type: 'string',
    brief:
      'The database parameterized query being executed. Any parameter values (filters, insertion values, etc) should be replaced with parameter placeholders. If applicable, use `db.query.parameter.<key>` to add the parameter value.',
    deprecationChain: ['db.query.text', 'db.statement', 'query'],
  },
  'db.redis.connection': {
    canonicalName: 'db.redis.connection',
    type: 'string',
    brief: 'The redis connection name.',
    deprecationChain: ['db.redis.connection'],
  },
  'db.redis.key': {
    canonicalName: 'db.redis.key',
    type: 'string',
    brief: 'The key the Redis command is operating on.',
    deprecationChain: ['db.redis.key', 'redis.key'],
  },
  'db.redis.parameters': {
    canonicalName: 'db.redis.parameters',
    type: 'string[]',
    brief: 'The array of command parameters given to a redis command.',
    deprecationChain: ['db.redis.parameters'],
  },
  'db.response.status_code': {
    canonicalName: 'db.response.status_code',
    type: 'string',
    brief:
      'Database response status code. The status code returned by the database. Usually it represents an error code, but may also represent partial success, warning, or differentiate between various types of successful outcomes.',
    deprecationChain: ['db.response.status_code'],
  },
  'db.sql.bindings': {
    canonicalName: 'db.query.parameter.<key>',
    type: 'string[]',
    brief: 'The array of query bindings.',
    deprecationChain: ['db.sql.bindings'],
  },
  'db.statement': {
    canonicalName: 'db.query.text',
    type: 'string',
    brief: 'The database statement being executed.',
    deprecationChain: ['db.query.text', 'db.statement', 'query'],
  },
  'db.stored_procedure.name': {
    canonicalName: 'db.stored_procedure.name',
    type: 'string',
    brief: 'The name of a stored procedure being called.',
    deprecationChain: ['db.stored_procedure.name'],
  },
  'db.system': {
    canonicalName: 'db.system.name',
    type: 'string',
    brief:
      'An identifier for the database management system (DBMS) product being used. See [OpenTelemetry docs](https://github.com/open-telemetry/semantic-conventions/blob/main/docs/database/database-spans.md#notes-and-well-known-identifiers-for-dbsystem) for a list of well-known identifiers.',
    deprecationChain: ['db.system.name', 'db.system', 'span.system'],
  },
  'db.system.name': {
    canonicalName: 'db.system.name',
    type: 'string',
    brief:
      'An identifier for the database management system (DBMS) product being used. See [OpenTelemetry docs](https://github.com/open-telemetry/semantic-conventions/blob/main/docs/database/database-spans.md#notes-and-well-known-identifiers-for-dbsystem) for a list of well-known identifiers.',
    deprecationChain: ['db.system.name', 'db.system', 'span.system'],
  },
  'db.user': {
    canonicalName: 'db.user',
    type: 'string',
    brief: 'The database user.',
    deprecationChain: ['db.user'],
  },
  description: {
    canonicalName: 'sentry.description',
    type: 'string',
    brief: 'The human-readable description of a span.',
    deprecationChain: ['sentry.description'],
  },
  'device.archs': {
    canonicalName: 'device.archs',
    type: 'string[]',
    brief: 'The CPU architectures of the device.',
    deprecationChain: ['device.archs'],
  },
  'device.battery_level': {
    canonicalName: 'device.battery_level',
    type: 'double',
    brief: 'The battery level of the device as a percentage (0-100).',
    deprecationChain: ['device.battery_level'],
  },
  'device.battery_temperature': {
    canonicalName: 'device.battery_temperature',
    type: 'double',
    brief: 'The battery temperature of the device in Celsius.',
    deprecationChain: ['device.battery_temperature'],
  },
  'device.boot_time': {
    canonicalName: 'device.boot_time',
    type: 'string',
    brief: 'A formatted UTC timestamp when the system was booted.',
    deprecationChain: ['device.boot_time'],
  },
  'device.brand': {
    canonicalName: 'device.brand',
    type: 'string',
    brief: 'The brand of the device.',
    deprecationChain: ['device.brand'],
  },
  'device.charging': {
    canonicalName: 'device.charging',
    type: 'boolean',
    brief: 'Whether the device was charging or not.',
    deprecationChain: ['device.charging'],
  },
  'device.chipset': {
    canonicalName: 'device.chipset',
    type: 'string',
    brief: 'The chipset of the device.',
    deprecationChain: ['device.chipset'],
  },
  'device.class': {
    canonicalName: 'device.class',
    type: 'string',
    brief:
      'The classification of the device. For example, `low`, `medium`, or `high`. Typically inferred by Relay - SDKs generally do not need to set this directly.',
    deprecationChain: ['device.class'],
  },
  'device.connection_type': {
    canonicalName: 'network.connection.type',
    type: 'string',
    brief: 'The internet connection type currently being used by the device.',
    deprecationChain: ['network.connection.type', 'connectionType', 'device.connection_type'],
  },
  'device.cpu_description': {
    canonicalName: 'device.cpu_description',
    type: 'string',
    brief: 'A description of the CPU of the device.',
    deprecationChain: ['device.cpu_description'],
  },
  'device.external_free_storage': {
    canonicalName: 'device.external_free_storage',
    type: 'integer',
    brief: 'External storage free size in bytes.',
    deprecationChain: ['device.external_free_storage'],
  },
  'device.external_storage_size': {
    canonicalName: 'device.external_storage_size',
    type: 'integer',
    brief: 'External storage total size in bytes.',
    deprecationChain: ['device.external_storage_size'],
  },
  'device.family': {
    canonicalName: 'device.family',
    type: 'string',
    brief: 'The family of the device.',
    deprecationChain: ['device.family'],
  },
  'device.free_memory': {
    canonicalName: 'device.free_memory',
    type: 'integer',
    brief: 'Free system memory in bytes.',
    deprecationChain: ['device.free_memory'],
  },
  'device.free_storage': {
    canonicalName: 'device.free_storage',
    type: 'integer',
    brief: 'Free device storage in bytes.',
    deprecationChain: ['device.free_storage'],
  },
  'device.id': {
    canonicalName: 'device.id',
    type: 'string',
    brief: 'Unique device identifier.',
    deprecationChain: ['device.id'],
  },
  'device.locale': {
    canonicalName: 'device.locale',
    type: 'string',
    brief: 'The locale of the device.',
    deprecationChain: ['device.locale'],
  },
  'device.low_memory': {
    canonicalName: 'device.low_memory',
    type: 'boolean',
    brief: 'Whether the device was low on memory.',
    deprecationChain: ['device.low_memory'],
  },
  'device.low_power_mode': {
    canonicalName: 'device.low_power_mode',
    type: 'boolean',
    brief: 'Whether the device is in Low Power Mode.',
    deprecationChain: ['device.low_power_mode'],
  },
  'device.manufacturer': {
    canonicalName: 'device.manufacturer',
    type: 'string',
    brief: 'The manufacturer of the device.',
    deprecationChain: ['device.manufacturer'],
  },
  'device.memory.estimated_capacity': {
    canonicalName: 'device.memory.estimated_capacity',
    type: 'integer',
    brief:
      'The estimated total memory capacity of the device, only a rough estimation in gigabytes. Browsers report estimations in buckets of powers of 2, mostly capped at 8 GB',
    deprecationChain: ['device.memory.estimated_capacity', 'deviceMemory'],
  },
  'device.memory_size': {
    canonicalName: 'device.memory_size',
    type: 'integer',
    brief: 'Total system memory available in bytes.',
    deprecationChain: ['device.memory_size'],
  },
  'device.model': {
    canonicalName: 'device.model',
    type: 'string',
    brief: 'The model of the device.',
    deprecationChain: ['device.model'],
  },
  'device.model_id': {
    canonicalName: 'device.model_id',
    type: 'string',
    brief: 'An internal hardware revision to identify the device exactly.',
    deprecationChain: ['device.model_id'],
  },
  'device.name': {
    canonicalName: 'device.name',
    type: 'string',
    brief:
      'The name of the device. On mobile, this is the user-assigned device name. On servers and desktops, this is typically the hostname.',
    deprecationChain: ['device.name', 'server_name'],
  },
  'device.online': {
    canonicalName: 'device.online',
    type: 'boolean',
    brief: 'Whether the device was online or not.',
    deprecationChain: ['device.online'],
  },
  'device.orientation': {
    canonicalName: 'device.orientation',
    type: 'string',
    brief: 'The orientation of the device, either "portrait" or "landscape".',
    deprecationChain: ['device.orientation'],
  },
  'device.processor_count': {
    canonicalName: 'device.processor_count',
    type: 'integer',
    brief: 'Number of "logical processors".',
    deprecationChain: ['device.processor_count', 'hardwareConcurrency'],
  },
  'device.processor_frequency': {
    canonicalName: 'device.processor_frequency',
    type: 'double',
    brief: 'Processor frequency in MHz.',
    deprecationChain: ['device.processor_frequency'],
  },
  'device.screen_density': {
    canonicalName: 'device.screen_density',
    type: 'double',
    brief: 'The screen density of the device.',
    deprecationChain: ['device.screen_density'],
  },
  'device.screen_dpi': {
    canonicalName: 'device.screen_dpi',
    type: 'integer',
    brief: 'The screen density in dots-per-inch (DPI) of the device.',
    deprecationChain: ['device.screen_dpi'],
  },
  'device.screen_height_pixels': {
    canonicalName: 'device.screen_height_pixels',
    type: 'integer',
    brief: 'The height of the device screen in pixels.',
    deprecationChain: ['device.screen_height_pixels'],
  },
  'device.screen_width_pixels': {
    canonicalName: 'device.screen_width_pixels',
    type: 'integer',
    brief: 'The width of the device screen in pixels.',
    deprecationChain: ['device.screen_width_pixels'],
  },
  'device.simulator': {
    canonicalName: 'device.simulator',
    type: 'boolean',
    brief: 'Whether the device is a simulator or an actual device.',
    deprecationChain: ['device.simulator'],
  },
  'device.storage_size': {
    canonicalName: 'device.storage_size',
    type: 'integer',
    brief: 'Total device storage in bytes.',
    deprecationChain: ['device.storage_size'],
  },
  'device.thermal_state': {
    canonicalName: 'device.thermal_state',
    type: 'string',
    brief:
      "The thermal state of the device. Based on Apple's `ProcessInfo.ThermalState` enum: `nominal`, `fair`, `serious`, or `critical`.",
    deprecationChain: ['device.thermal_state'],
  },
  'device.timezone': {
    canonicalName: 'device.timezone',
    type: 'string',
    brief: 'The timezone of the device.',
    deprecationChain: ['device.timezone'],
  },
  'device.usable_memory': {
    canonicalName: 'device.usable_memory',
    type: 'integer',
    brief: 'Memory usable for the app in bytes.',
    deprecationChain: ['device.usable_memory'],
  },
  deviceMemory: {
    canonicalName: 'device.memory.estimated_capacity',
    type: 'string',
    brief: 'The estimated total memory capacity of the device, only a rough estimation in gigabytes.',
    deprecationChain: ['device.memory.estimated_capacity', 'deviceMemory'],
  },
  dist: {
    canonicalName: 'sentry.dist',
    type: 'string',
    brief: 'The sentry dist.',
    deprecationChain: ['sentry.dist', 'dist'],
  },
  'django.function_name': {
    canonicalName: 'code.function.name',
    type: 'string',
    brief: 'The fully qualified name of a function used in a Django context.',
    deprecationChain: ['code.function.name', 'code.function', 'django.function_name'],
  },
  'django.middleware_name': {
    canonicalName: 'middleware.name',
    type: 'string',
    brief: 'The name of the Django middleware.',
    deprecationChain: [
      'middleware.name',
      'django.middleware_name',
      'litestar.middleware_name',
      'starlette.middleware_name',
      'starlite.middleware_name',
    ],
  },
  'dsc.environment': {
    canonicalName: 'sentry.dsc.environment',
    type: 'string',
    brief: 'The environment from the dynamic sampling context.',
    internal: true,
    deprecationChain: ['sentry.dsc.environment'],
  },
  'dsc.project_id': {
    canonicalName: 'sentry.dsc.project_id',
    type: 'string',
    brief:
      'The ID of the project where the trace originated (i.e. the project of the SDK that started the trace). Propagated through the dynamic sampling context and set by Relay during ingestion.',
    internal: true,
    deprecationChain: ['sentry.dsc.project_id'],
  },
  'dsc.public_key': {
    canonicalName: 'sentry.dsc.public_key',
    type: 'string',
    brief: 'The public key from the dynamic sampling context.',
    internal: true,
    deprecationChain: ['sentry.dsc.public_key'],
  },
  'dsc.release': {
    canonicalName: 'sentry.dsc.release',
    type: 'string',
    brief: 'The release identifier from the dynamic sampling context.',
    internal: true,
    deprecationChain: ['sentry.dsc.release'],
  },
  'dsc.sample_rate': {
    canonicalName: 'sentry.dsc.sample_rate',
    type: 'string',
    brief: 'The sample rate from the dynamic sampling context.',
    internal: true,
    deprecationChain: ['sentry.dsc.sample_rate'],
  },
  'dsc.sampled': {
    canonicalName: 'sentry.dsc.sampled',
    type: 'boolean',
    brief: 'Whether the event was sampled according to the dynamic sampling context.',
    internal: true,
    deprecationChain: ['sentry.dsc.sampled'],
  },
  'dsc.trace_id': {
    canonicalName: 'sentry.dsc.trace_id',
    type: 'string',
    brief: 'The trace ID from the dynamic sampling context.',
    internal: true,
    deprecationChain: ['sentry.dsc.trace_id'],
  },
  'dsc.transaction': {
    canonicalName: 'sentry.dsc.transaction',
    type: 'string',
    brief: 'The transaction name from the dynamic sampling context.',
    internal: true,
    deprecationChain: ['sentry.dsc.transaction'],
  },
  effectiveConnectionType: {
    canonicalName: 'network.connection.effective_type',
    type: 'string',
    brief: 'Specifies the estimated effective type of the current connection (e.g. slow-2g, 2g, 3g, 4g).',
    deprecationChain: ['network.connection.effective_type', 'effectiveConnectionType'],
  },
  environment: {
    canonicalName: 'sentry.environment',
    type: 'string',
    brief: 'The sentry environment.',
    deprecationChain: [
      'sentry.environment',
      'environment',
      'resource.deployment.environment',
      'resource.deployment.environment.name',
    ],
  },
  'error.type': {
    canonicalName: 'error.type',
    type: 'string',
    brief: 'Describes a class of error the operation ended with.',
    deprecationChain: ['error.type'],
  },
  'event.id': {
    canonicalName: 'event.id',
    type: 'integer',
    brief: 'The unique identifier for this event (log record)',
    deprecationChain: ['event.id'],
  },
  'event.name': {
    canonicalName: 'event.name',
    type: 'string',
    brief: 'The name that uniquely identifies this event (log record)',
    deprecationChain: ['event.name'],
  },
  'event.serialized_breadcrumbs': {
    canonicalName: 'sentry.event.serialized_breadcrumbs',
    type: 'string',
    brief: 'JSON-serialized `breadcrumbs` property from a Sentry event.',
    internal: true,
    deprecationChain: ['sentry.event.serialized_breadcrumbs'],
  },
  'event.serialized_contexts': {
    canonicalName: 'sentry.event.serialized_contexts',
    type: 'string',
    brief: 'JSON-serialized `contexts` property from a Sentry event.',
    internal: true,
    deprecationChain: ['sentry.event.serialized_contexts'],
  },
  'event.serialized_extra': {
    canonicalName: 'sentry.event.serialized_extra',
    type: 'string',
    brief: 'JSON-serialized `extra` property from a Sentry event.',
    internal: true,
    deprecationChain: ['sentry.event.serialized_extra'],
  },
  'event.serialized_meta': {
    canonicalName: 'sentry.event.serialized_meta',
    type: 'string',
    brief: 'JSON-serialized `_meta` for the `sentry.event.serialized_*` properties from a Sentry event.',
    internal: true,
    deprecationChain: ['sentry.event.serialized_meta'],
  },
  'exception.escaped': {
    canonicalName: 'exception.escaped',
    type: 'boolean',
    brief:
      'SHOULD be set to true if the exception event is recorded at a point where it is known that the exception is escaping the scope of the span.',
    deprecationChain: ['exception.escaped'],
  },
  'exception.message': {
    canonicalName: 'exception.message',
    type: 'string',
    brief: 'The error message.',
    deprecationChain: ['exception.message'],
  },
  'exception.stacktrace': {
    canonicalName: 'exception.stacktrace',
    type: 'string',
    brief:
      'A stacktrace as a string in the natural representation for the language runtime. The representation is to be determined and documented by each language SIG.',
    deprecationChain: ['exception.stacktrace'],
  },
  'exception.type': {
    canonicalName: 'exception.type',
    type: 'string',
    brief:
      'The type of the exception (its fully-qualified class name, if applicable). The dynamic type of the exception should be preferred over the static type in languages that support it.',
    deprecationChain: ['exception.type'],
  },
  exclusive_time: {
    canonicalName: 'sentry.exclusive_time',
    type: 'double',
    brief: 'The exclusive time duration of the span in milliseconds.',
    deprecationChain: ['sentry.exclusive_time'],
  },
  'faas.coldstart': {
    canonicalName: 'faas.coldstart',
    type: 'boolean',
    brief: 'A boolean that is true if the serverless function is executed for the first time (aka cold-start).',
    deprecationChain: ['faas.coldstart'],
  },
  'faas.cron': {
    canonicalName: 'faas.cron',
    type: 'string',
    brief: 'A string containing the schedule period as Cron Expression.',
    deprecationChain: ['faas.cron'],
  },
  'faas.duration_in_ms': {
    canonicalName: 'faas.duration_in_ms',
    type: 'integer',
    brief: 'The duration a function took to run, in milliseconds.',
    deprecationChain: ['faas.duration_in_ms'],
  },
  'faas.entry_point': {
    canonicalName: 'faas.entry_point',
    type: 'string',
    brief: "The code that's run when the cloud provider invokes your function.",
    deprecationChain: ['faas.entry_point'],
  },
  'faas.execution': {
    canonicalName: 'faas.invocation_id',
    type: 'string',
    brief: 'The execution ID of the current function execution.',
    deprecationChain: ['faas.invocation_id', 'aws.lambda.aws_request_id', 'faas.execution'],
  },
  'faas.id': {
    canonicalName: 'cloud.resource_id',
    type: 'string',
    brief: 'The unique ID of the single function that this runtime instance executes.',
    deprecationChain: ['cloud.resource_id', 'faas.id'],
  },
  'faas.identity': {
    canonicalName: 'faas.identity',
    type: 'string',
    brief:
      'The Service Account (GCP), IAM Execution Role (AWS), or Managed Identity (Azure) used by the serverless function when interacting with other cloud services',
    deprecationChain: ['faas.identity'],
  },
  'faas.invocation_id': {
    canonicalName: 'faas.invocation_id',
    type: 'string',
    brief: 'The invocation ID of the current function invocation.',
    deprecationChain: ['faas.invocation_id', 'aws.lambda.aws_request_id', 'faas.execution'],
  },
  'faas.invoked_name': {
    canonicalName: 'faas.invoked_name',
    type: 'string',
    brief: 'The name of the invoked function.',
    deprecationChain: ['faas.invoked_name'],
  },
  'faas.invoked_provider': {
    canonicalName: 'faas.invoked_provider',
    type: 'string',
    brief: 'The cloud provider of the invoked function.',
    deprecationChain: ['faas.invoked_provider'],
  },
  'faas.invoked_region': {
    canonicalName: 'faas.invoked_region',
    type: 'string',
    brief: 'The cloud region of the invoked function.',
    deprecationChain: ['faas.invoked_region'],
  },
  'faas.name': {
    canonicalName: 'faas.name',
    type: 'string',
    brief: 'The name of the serverless function',
    deprecationChain: ['faas.name', 'aws.lambda.function_name'],
  },
  'faas.time': {
    canonicalName: 'faas.time',
    type: 'string',
    brief: 'A string containing the function invocation time in the ISO 8601 format expressed in UTC.',
    deprecationChain: ['faas.time'],
  },
  'faas.trigger': {
    canonicalName: 'faas.trigger',
    type: 'string',
    brief: 'Type of the trigger which caused this function invocation.',
    deprecationChain: ['faas.trigger'],
  },
  'faas.version': {
    canonicalName: 'faas.version',
    type: 'string',
    brief: 'The version of the function that was invoked',
    deprecationChain: ['faas.version', 'aws.lambda.function_version'],
  },
  fcp: {
    canonicalName: 'browser.web_vital.fcp.value',
    type: 'double',
    brief: 'The time it takes for the browser to render the first piece of meaningful content on the screen',
    deprecationChain: ['browser.web_vital.fcp.value', 'fcp'],
  },
  'file.path': {
    canonicalName: 'file.path',
    type: 'string',
    brief: 'Path to the file.',
    deprecationChain: ['file.path'],
  },
  'file.size': {
    canonicalName: 'file.size',
    type: 'integer',
    brief: 'File size in bytes.',
    deprecationChain: ['file.size'],
  },
  'flag.evaluation.<key>': {
    canonicalName: 'flag.evaluation.<key>',
    type: 'boolean',
    brief:
      'An instance of a feature flag evaluation. The value of this attribute is the boolean representing the evaluation result. The <key> suffix is the name of the feature flag.',
    deprecationChain: ['flag.evaluation.<key>'],
  },
  fp: {
    canonicalName: 'browser.web_vital.fp.value',
    type: 'double',
    brief: 'The time it takes for the browser to render the first pixel on the screen',
    deprecationChain: ['browser.web_vital.fp.value', 'fp'],
  },
  'frames.frozen': {
    canonicalName: 'app.vitals.frames.frozen.count',
    type: 'integer',
    brief: 'The number of frozen frames rendered during the lifetime of the span.',
    deprecationChain: [
      'app.vitals.frames.frozen.count',
      'frames.frozen',
      'mobile.frozen_frames',
      'sentry.frames.frozen',
    ],
  },
  'frames.slow': {
    canonicalName: 'app.vitals.frames.slow.count',
    type: 'integer',
    brief: 'The number of slow frames rendered during the lifetime of the span.',
    deprecationChain: ['app.vitals.frames.slow.count', 'frames.slow', 'mobile.slow_frames', 'sentry.frames.slow'],
  },
  'frames.total': {
    canonicalName: 'app.vitals.frames.total.count',
    type: 'integer',
    brief: 'The number of total frames rendered during the lifetime of the span.',
    deprecationChain: ['app.vitals.frames.total.count', 'frames.total', 'mobile.total_frames', 'sentry.frames.total'],
  },
  frames_frozen_rate: {
    canonicalName: 'app.vitals.frames.frozen.rate',
    type: 'double',
    brief:
      'The rate of frozen frames, or `app.vitals.frames.frozen.count` divided by `app.vitals.frames.total.count`. This is computed by Relay.',
    deprecationChain: ['app.vitals.frames.frozen.rate', 'frames_frozen_rate'],
  },
  frames_slow_rate: {
    canonicalName: 'app.vitals.frames.slow.rate',
    type: 'double',
    brief:
      'The rate of slow frames, or `app.vitals.frames.slow.count` divided by `app.vitals.frames.total.count`. This is computed by Relay.',
    deprecationChain: ['app.vitals.frames.slow.rate', 'frames_slow_rate'],
  },
  fs_error: {
    canonicalName: 'error.type',
    type: 'string',
    brief: 'The error message of a file system error.',
    deprecationChain: ['fs_error'],
  },
  'gcp.function.context.event_id': {
    canonicalName: 'gcp.function.context.event_id',
    type: 'string',
    brief: 'The event ID from the legacy GCP Cloud Function context (1st gen)',
    deprecationChain: ['gcp.function.context.event_id'],
  },
  'gcp.function.context.event_type': {
    canonicalName: 'gcp.function.context.event_type',
    type: 'string',
    brief: 'The type of the GCP Cloud Function event',
    deprecationChain: ['gcp.function.context.event_type'],
  },
  'gcp.function.context.id': {
    canonicalName: 'gcp.function.context.id',
    type: 'string',
    brief: 'The unique event ID from the GCP CloudEvents context (2nd gen Cloud Functions)',
    deprecationChain: ['gcp.function.context.id'],
  },
  'gcp.function.context.resource': {
    canonicalName: 'gcp.function.context.resource',
    type: 'string',
    brief: 'The resource that triggered the GCP Cloud Function event',
    deprecationChain: ['gcp.function.context.resource'],
  },
  'gcp.function.context.source': {
    canonicalName: 'gcp.function.context.source',
    type: 'string',
    brief: 'The source of the GCP Cloud Function event',
    deprecationChain: ['gcp.function.context.source'],
  },
  'gcp.function.context.specversion': {
    canonicalName: 'gcp.function.context.specversion',
    type: 'string',
    brief: 'The CloudEvents specification version of the GCP Cloud Function event',
    deprecationChain: ['gcp.function.context.specversion'],
  },
  'gcp.function.context.time': {
    canonicalName: 'gcp.function.context.time',
    type: 'string',
    brief: 'The timestamp of the GCP Cloud Function event',
    deprecationChain: ['gcp.function.context.time'],
  },
  'gcp.function.context.timestamp': {
    canonicalName: 'gcp.function.context.timestamp',
    type: 'string',
    brief: 'The legacy timestamp of the GCP Cloud Function event',
    deprecationChain: ['gcp.function.context.timestamp'],
  },
  'gcp.function.context.type': {
    canonicalName: 'gcp.function.context.type',
    type: 'string',
    brief: 'The type of the GCP Cloud Function event context',
    deprecationChain: ['gcp.function.context.type'],
  },
  'gcp.project.id': {
    canonicalName: 'gcp.project.id',
    type: 'string',
    brief: 'The ID of the project in GCP that this resource is associated with',
    deprecationChain: ['gcp.project.id'],
  },
  gcp_region: {
    canonicalName: 'cloud.region',
    type: 'string',
    brief: 'The geographical region the GCP resource is running',
    deprecationChain: ['cloud.region', 'aws_region', 'gcp_region'],
  },
  'gen_ai.agent.name': {
    canonicalName: 'gen_ai.agent.name',
    type: 'string',
    brief: 'The name of the agent being used.',
    deprecationChain: ['gen_ai.agent.name'],
  },
  'gen_ai.context.utilization': {
    canonicalName: 'gen_ai.context.utilization',
    type: 'double',
    brief: 'The fraction of the model context window utilized by this generation.',
    deprecationChain: ['gen_ai.context.utilization'],
  },
  'gen_ai.context.window_size': {
    canonicalName: 'gen_ai.context.window_size',
    type: 'integer',
    brief: 'The maximum context window size supported by the model for this generation.',
    deprecationChain: ['gen_ai.context.window_size'],
  },
  'gen_ai.conversation.id': {
    canonicalName: 'gen_ai.conversation.id',
    type: 'string',
    brief:
      'The unique identifier for a conversation (session, thread), used to store and correlate messages within this conversation.',
    deprecationChain: ['gen_ai.conversation.id'],
  },
  'gen_ai.cost.cache_creation.input_tokens': {
    canonicalName: 'gen_ai.cost.cache_creation.input_tokens',
    type: 'double',
    brief: 'The cost of input tokens written to cache in USD.',
    deprecationChain: ['gen_ai.cost.cache_creation.input_tokens'],
  },
  'gen_ai.cost.cache_read.input_tokens': {
    canonicalName: 'gen_ai.cost.cache_read.input_tokens',
    type: 'double',
    brief: 'The cost of cached input tokens in USD.',
    deprecationChain: ['gen_ai.cost.cache_read.input_tokens'],
  },
  'gen_ai.cost.input_tokens': {
    canonicalName: 'gen_ai.cost.input_tokens',
    type: 'double',
    brief: 'The total cost of all input tokens in USD (includes cached and cache creation tokens).',
    deprecationChain: ['gen_ai.cost.input_tokens'],
  },
  'gen_ai.cost.output_tokens': {
    canonicalName: 'gen_ai.cost.output_tokens',
    type: 'double',
    brief: 'The total cost of all output tokens in USD (includes reasoning tokens).',
    deprecationChain: ['gen_ai.cost.output_tokens'],
  },
  'gen_ai.cost.reasoning.output_tokens': {
    canonicalName: 'gen_ai.cost.reasoning.output_tokens',
    type: 'double',
    brief: 'The cost of reasoning output tokens in USD.',
    deprecationChain: ['gen_ai.cost.reasoning.output_tokens'],
  },
  'gen_ai.cost.total_tokens': {
    canonicalName: 'gen_ai.cost.total_tokens',
    type: 'double',
    brief: 'The total cost for the tokens used.',
    deprecationChain: ['gen_ai.cost.total_tokens', 'ai.total_cost'],
  },
  'gen_ai.embeddings.input': {
    canonicalName: 'gen_ai.embeddings.input',
    type: 'string',
    brief: 'The input to the embeddings model.',
    deprecationChain: ['gen_ai.embeddings.input'],
  },
  'gen_ai.function_id': {
    canonicalName: 'gen_ai.function_id',
    type: 'string',
    brief:
      'Framework-specific tracing label for the execution of a function or other unit of execution in a generative AI system.',
    deprecationChain: ['gen_ai.function_id'],
  },
  'gen_ai.input.messages': {
    canonicalName: 'gen_ai.input.messages',
    type: 'string',
    brief:
      'The messages passed to the model. It has to be a stringified version of an array of objects. The `role` attribute of each object must be `"user"`, `"assistant"`, `"tool"`, or `"system"`. For messages of the role `"tool"`, the `content` can be a string or an arbitrary object with information about the tool call. For other messages the `content` can be either a string or a list of objects in the format `{type: "text", text:"..."}`.',
    deprecationChain: [
      'gen_ai.input.messages',
      'ai.input_messages',
      'ai.prompt',
      'ai.prompt.messages',
      'ai.texts',
      'gen_ai.prompt',
    ],
  },
  'gen_ai.operation.name': {
    canonicalName: 'gen_ai.operation.name',
    type: 'string',
    brief:
      "The name of the operation being performed. It has the following list of well-known values: 'chat', 'create_agent', 'embeddings', 'execute_tool', 'generate_content', 'invoke_agent', 'text_completion'. If one of them applies, then that value MUST be used. Otherwise a custom value MAY be used.",
    deprecationChain: ['gen_ai.operation.name'],
  },
  'gen_ai.operation.type': {
    canonicalName: 'gen_ai.operation.type',
    type: 'string',
    brief:
      "The type of AI operation. Must be one of 'agent' (invoke_agent and create_agent spans), 'ai_client' (any LLM call), 'tool' (execute_tool spans), 'handoff' (handoff spans), 'other' (input and output processors, skill loading, guardrails etc.) . Added during ingestion based on span.op and gen_ai.operation.type. Used to filter and aggregate data in the UI",
    deprecationChain: ['gen_ai.operation.type'],
  },
  'gen_ai.output.messages': {
    canonicalName: 'gen_ai.output.messages',
    type: 'string',
    brief:
      "The model's response messages. It has to be a stringified version of an array of message objects, which can include text responses and tool calls.",
    deprecationChain: [
      'gen_ai.output.messages',
      'ai.response.text',
      'ai.response.toolCalls',
      'ai.responses',
      'ai.tool_calls',
    ],
  },
  'gen_ai.pipeline.name': {
    canonicalName: 'gen_ai.pipeline.name',
    type: 'string',
    brief: 'Name of the AI pipeline or chain being executed.',
    deprecationChain: ['gen_ai.pipeline.name', 'ai.pipeline.name', 'langchain.chain.name'],
  },
  'gen_ai.prompt': {
    canonicalName: 'gen_ai.input.messages',
    type: 'string',
    brief: 'The input messages sent to the model',
    deprecationChain: [
      'gen_ai.input.messages',
      'ai.input_messages',
      'ai.prompt',
      'ai.prompt.messages',
      'ai.texts',
      'gen_ai.prompt',
    ],
  },
  'gen_ai.prompt.name': {
    canonicalName: 'gen_ai.prompt.name',
    type: 'string',
    brief: 'The name of the prompt that uniquely identifies it.',
    deprecationChain: ['gen_ai.prompt.name', 'mcp.prompt.name'],
  },
  'gen_ai.provider.name': {
    canonicalName: 'gen_ai.provider.name',
    type: 'string',
    brief: 'The Generative AI provider as identified by the client or server instrumentation.',
    deprecationChain: ['gen_ai.provider.name', 'ai.model.provider', 'gen_ai.system'],
  },
  'gen_ai.request.available_tools': {
    canonicalName: 'gen_ai.tool.definitions',
    type: 'string',
    brief: 'The available tools for the model. It has to be a stringified version of an array of objects.',
    deprecationChain: ['gen_ai.tool.definitions', 'ai.prompt.tools', 'ai.tools', 'gen_ai.request.available_tools'],
  },
  'gen_ai.request.frequency_penalty': {
    canonicalName: 'gen_ai.request.frequency_penalty',
    type: 'double',
    brief:
      'Used to reduce repetitiveness of generated tokens. The higher the value, the stronger a penalty is applied to previously present tokens, proportional to how many times they have already appeared in the prompt or prior generation.',
    deprecationChain: ['gen_ai.request.frequency_penalty', 'ai.frequency_penalty'],
  },
  'gen_ai.request.max_tokens': {
    canonicalName: 'gen_ai.request.max_tokens',
    type: 'integer',
    brief: 'The maximum number of tokens to generate in the response.',
    deprecationChain: ['gen_ai.request.max_tokens'],
  },
  'gen_ai.request.messages': {
    canonicalName: 'gen_ai.input.messages',
    type: 'string',
    brief:
      'The messages passed to the model. It has to be a stringified version of an array of objects. The `role` attribute of each object must be `"user"`, `"assistant"`, `"tool"`, or `"system"`. For messages of the role `"tool"`, the `content` can be a string or an arbitrary object with information about the tool call. For other messages the `content` can be either a string or a list of objects in the format `{type: "text", text:"..."}`.',
    deprecationChain: ['gen_ai.request.messages'],
  },
  'gen_ai.request.model': {
    canonicalName: 'gen_ai.request.model',
    type: 'string',
    brief: 'The model identifier being used for the request.',
    deprecationChain: ['gen_ai.request.model', 'ai.model.id', 'ai.model_id'],
  },
  'gen_ai.request.presence_penalty': {
    canonicalName: 'gen_ai.request.presence_penalty',
    type: 'double',
    brief:
      'Used to reduce repetitiveness of generated tokens. Similar to frequency_penalty, except that this penalty is applied equally to all tokens that have already appeared, regardless of their exact frequencies.',
    deprecationChain: ['gen_ai.request.presence_penalty', 'ai.presence_penalty'],
  },
  'gen_ai.request.reasoning.level': {
    canonicalName: 'gen_ai.request.reasoning.level',
    type: 'string',
    brief: 'The reasoning or thinking effort level requested for a GenAI model.',
    deprecationChain: ['gen_ai.request.reasoning.level'],
  },
  'gen_ai.request.schema': {
    canonicalName: 'gen_ai.request.schema',
    type: 'string',
    brief: 'The stringified JSON schema the model output must conform to.',
    deprecationChain: ['gen_ai.request.schema'],
  },
  'gen_ai.request.seed': {
    canonicalName: 'gen_ai.request.seed',
    type: 'string',
    brief: 'The seed, ideally models given the same seed and same other parameters will produce the exact same output.',
    deprecationChain: ['gen_ai.request.seed', 'ai.seed'],
  },
  'gen_ai.request.stop_sequences': {
    canonicalName: 'gen_ai.request.stop_sequences',
    type: 'string[]',
    brief: 'List of sequences that the model will use to stop generating further tokens.',
    deprecationChain: ['gen_ai.request.stop_sequences'],
  },
  'gen_ai.request.temperature': {
    canonicalName: 'gen_ai.request.temperature',
    type: 'double',
    brief:
      'For an AI model call, the temperature parameter. Temperature essentially means how random the output will be.',
    deprecationChain: ['gen_ai.request.temperature', 'ai.temperature'],
  },
  'gen_ai.request.top_k': {
    canonicalName: 'gen_ai.request.top_k',
    type: 'integer',
    brief:
      'Limits the model to only consider the K most likely next tokens, where K is an integer (e.g., top_k=20 means only the 20 highest probability tokens are considered).',
    deprecationChain: ['gen_ai.request.top_k', 'ai.top_k'],
  },
  'gen_ai.request.top_p': {
    canonicalName: 'gen_ai.request.top_p',
    type: 'double',
    brief:
      'Limits the model to only consider tokens whose cumulative probability mass adds up to p, where p is a float between 0 and 1 (e.g., top_p=0.7 means only tokens that sum up to 70% of the probability mass are considered).',
    deprecationChain: ['gen_ai.request.top_p', 'ai.top_p'],
  },
  'gen_ai.response.finish_reason': {
    canonicalName: 'gen_ai.response.finish_reasons',
    type: 'string',
    brief: 'The reason why the model stopped generating (singular form).',
    deprecationChain: ['gen_ai.response.finish_reasons', 'ai.finish_reason', 'gen_ai.response.finish_reason'],
  },
  'gen_ai.response.finish_reasons': {
    canonicalName: 'gen_ai.response.finish_reasons',
    type: 'string',
    brief: 'The reason why the model stopped generating.',
    deprecationChain: ['gen_ai.response.finish_reasons', 'ai.finish_reason', 'gen_ai.response.finish_reason'],
  },
  'gen_ai.response.id': {
    canonicalName: 'gen_ai.response.id',
    type: 'string',
    brief: 'Unique identifier for the completion.',
    deprecationChain: ['gen_ai.response.id', 'ai.generation_id', 'ai.response.id'],
  },
  'gen_ai.response.model': {
    canonicalName: 'gen_ai.response.model',
    type: 'string',
    brief: 'The vendor-specific ID of the model used.',
    deprecationChain: ['gen_ai.response.model', 'ai.response.model'],
  },
  'gen_ai.response.object': {
    canonicalName: 'gen_ai.response.object',
    type: 'string',
    brief: 'The type of the object returned by the model.',
    deprecationChain: ['gen_ai.response.object'],
  },
  'gen_ai.response.streaming': {
    canonicalName: 'gen_ai.response.streaming',
    type: 'boolean',
    brief: "Whether or not the AI model call's response was streamed back asynchronously",
    deprecationChain: ['gen_ai.response.streaming', 'ai.streaming'],
  },
  'gen_ai.response.text': {
    canonicalName: 'gen_ai.output.messages',
    type: 'string',
    brief:
      "The model's response text messages. It has to be a stringified version of an array of response text messages.",
    deprecationChain: ['gen_ai.response.text'],
  },
  'gen_ai.response.time_to_first_chunk': {
    canonicalName: 'gen_ai.response.time_to_first_chunk',
    type: 'double',
    brief: 'Time in seconds when the first response content chunk arrived in streaming responses.',
    deprecationChain: ['gen_ai.response.time_to_first_chunk', 'gen_ai.response.time_to_first_token'],
  },
  'gen_ai.response.time_to_first_token': {
    canonicalName: 'gen_ai.response.time_to_first_chunk',
    type: 'double',
    brief: 'Time in seconds when the first response content chunk arrived in streaming responses.',
    deprecationChain: ['gen_ai.response.time_to_first_chunk', 'gen_ai.response.time_to_first_token'],
  },
  'gen_ai.response.tokens_per_second': {
    canonicalName: 'gen_ai.response.tokens_per_second',
    type: 'double',
    brief: 'The total output tokens per seconds throughput',
    deprecationChain: ['gen_ai.response.tokens_per_second'],
  },
  'gen_ai.response.tool_calls': {
    canonicalName: 'gen_ai.output.messages',
    type: 'string',
    brief: "The tool calls in the model's response. It has to be a stringified version of an array of objects.",
    deprecationChain: ['gen_ai.response.tool_calls'],
  },
  'gen_ai.system': {
    canonicalName: 'gen_ai.provider.name',
    type: 'string',
    brief: 'The provider of the model.',
    deprecationChain: ['gen_ai.provider.name', 'ai.model.provider', 'gen_ai.system'],
  },
  'gen_ai.system.message': {
    canonicalName: 'gen_ai.system_instructions',
    type: 'string',
    brief: 'The system instructions passed to the model.',
    deprecationChain: ['gen_ai.system_instructions', 'ai.preamble', 'gen_ai.system.message'],
  },
  'gen_ai.system_instructions': {
    canonicalName: 'gen_ai.system_instructions',
    type: 'string',
    brief: 'The system instructions passed to the model.',
    deprecationChain: ['gen_ai.system_instructions', 'ai.preamble', 'gen_ai.system.message'],
  },
  'gen_ai.tool.call.arguments': {
    canonicalName: 'gen_ai.tool.call.arguments',
    type: 'string',
    brief: 'The arguments of the tool call. It has to be a stringified version of the arguments to the tool.',
    deprecationChain: ['gen_ai.tool.call.arguments', 'ai.toolCall.args', 'gen_ai.tool.input'],
  },
  'gen_ai.tool.call.result': {
    canonicalName: 'gen_ai.tool.call.result',
    type: 'string',
    brief: 'The result of the tool call. It has to be a stringified version of the result of the tool.',
    deprecationChain: [
      'gen_ai.tool.call.result',
      'ai.toolCall.result',
      'gen_ai.tool.message',
      'gen_ai.tool.output',
      'mcp.tool.result.content',
    ],
  },
  'gen_ai.tool.definitions': {
    canonicalName: 'gen_ai.tool.definitions',
    type: 'string',
    brief: 'The list of source system tool definitions available to the GenAI agent or model.',
    deprecationChain: ['gen_ai.tool.definitions', 'ai.prompt.tools', 'ai.tools', 'gen_ai.request.available_tools'],
  },
  'gen_ai.tool.description': {
    canonicalName: 'gen_ai.tool.description',
    type: 'string',
    brief: 'The description of the tool being used.',
    deprecationChain: ['gen_ai.tool.description'],
  },
  'gen_ai.tool.input': {
    canonicalName: 'gen_ai.tool.call.arguments',
    type: 'string',
    brief: 'The input of the tool being used. It has to be a stringified version of the input to the tool.',
    deprecationChain: ['gen_ai.tool.call.arguments', 'ai.toolCall.args', 'gen_ai.tool.input'],
  },
  'gen_ai.tool.message': {
    canonicalName: 'gen_ai.tool.call.result',
    type: 'string',
    brief: 'The response from a tool or function call passed to the model.',
    deprecationChain: [
      'gen_ai.tool.call.result',
      'ai.toolCall.result',
      'gen_ai.tool.message',
      'gen_ai.tool.output',
      'mcp.tool.result.content',
    ],
  },
  'gen_ai.tool.name': {
    canonicalName: 'gen_ai.tool.name',
    type: 'string',
    brief: 'Name of the tool utilized by the agent.',
    deprecationChain: ['gen_ai.tool.name', 'ai.function_call', 'mcp.tool.name'],
  },
  'gen_ai.tool.output': {
    canonicalName: 'gen_ai.tool.call.result',
    type: 'string',
    brief: 'The output of the tool being used. It has to be a stringified version of the output of the tool.',
    deprecationChain: [
      'gen_ai.tool.call.result',
      'ai.toolCall.result',
      'gen_ai.tool.message',
      'gen_ai.tool.output',
      'mcp.tool.result.content',
    ],
  },
  'gen_ai.tool.type': {
    canonicalName: 'gen_ai.tool.type',
    type: 'string',
    brief: 'The type of tool being used.',
    deprecationChain: ['gen_ai.tool.type'],
  },
  'gen_ai.usage.cache_creation.input_tokens': {
    canonicalName: 'gen_ai.usage.cache_creation.input_tokens',
    type: 'integer',
    brief: 'The number of tokens written to the cache when processing the AI input (prompt).',
    deprecationChain: ['gen_ai.usage.cache_creation.input_tokens', 'gen_ai.usage.input_tokens.cache_write'],
  },
  'gen_ai.usage.cache_read.input_tokens': {
    canonicalName: 'gen_ai.usage.cache_read.input_tokens',
    type: 'integer',
    brief: 'The number of cached tokens used to process the AI input (prompt).',
    deprecationChain: ['gen_ai.usage.cache_read.input_tokens', 'gen_ai.usage.input_tokens.cached'],
  },
  'gen_ai.usage.completion_tokens': {
    canonicalName: 'gen_ai.usage.output_tokens',
    type: 'integer',
    brief: 'The number of tokens used in the GenAI response (completion).',
    deprecationChain: ['gen_ai.usage.output_tokens', 'ai.completion_tokens.used', 'gen_ai.usage.completion_tokens'],
  },
  'gen_ai.usage.input_tokens': {
    canonicalName: 'gen_ai.usage.input_tokens',
    type: 'integer',
    brief: 'The number of tokens used to process the AI input (prompt) including cached input tokens.',
    deprecationChain: ['gen_ai.usage.input_tokens', 'ai.prompt_tokens.used', 'gen_ai.usage.prompt_tokens'],
  },
  'gen_ai.usage.input_tokens.cache_write': {
    canonicalName: 'gen_ai.usage.cache_creation.input_tokens',
    type: 'integer',
    brief: 'The number of tokens written to the cache when processing the AI input (prompt).',
    deprecationChain: ['gen_ai.usage.cache_creation.input_tokens', 'gen_ai.usage.input_tokens.cache_write'],
  },
  'gen_ai.usage.input_tokens.cached': {
    canonicalName: 'gen_ai.usage.cache_read.input_tokens',
    type: 'integer',
    brief: 'The number of cached tokens used to process the AI input (prompt).',
    deprecationChain: ['gen_ai.usage.cache_read.input_tokens', 'gen_ai.usage.input_tokens.cached'],
  },
  'gen_ai.usage.output_tokens': {
    canonicalName: 'gen_ai.usage.output_tokens',
    type: 'integer',
    brief: 'The number of tokens used for creating the AI output (including reasoning tokens).',
    deprecationChain: ['gen_ai.usage.output_tokens', 'ai.completion_tokens.used', 'gen_ai.usage.completion_tokens'],
  },
  'gen_ai.usage.output_tokens.reasoning': {
    canonicalName: 'gen_ai.usage.reasoning.output_tokens',
    type: 'integer',
    brief: 'The number of tokens used for reasoning to create the AI output.',
    deprecationChain: ['gen_ai.usage.reasoning.output_tokens', 'gen_ai.usage.output_tokens.reasoning'],
  },
  'gen_ai.usage.prompt_tokens': {
    canonicalName: 'gen_ai.usage.input_tokens',
    type: 'integer',
    brief: 'The number of tokens used in the GenAI input (prompt).',
    deprecationChain: ['gen_ai.usage.input_tokens', 'ai.prompt_tokens.used', 'gen_ai.usage.prompt_tokens'],
  },
  'gen_ai.usage.reasoning.output_tokens': {
    canonicalName: 'gen_ai.usage.reasoning.output_tokens',
    type: 'integer',
    brief: 'The number of tokens used for reasoning to create the AI output.',
    deprecationChain: ['gen_ai.usage.reasoning.output_tokens', 'gen_ai.usage.output_tokens.reasoning'],
  },
  'gen_ai.usage.total_tokens': {
    canonicalName: 'gen_ai.usage.total_tokens',
    type: 'integer',
    brief: 'The total number of tokens used to process the prompt. (input tokens plus output todkens)',
    deprecationChain: ['gen_ai.usage.total_tokens', 'ai.total_tokens.used', 'ai.usage.tokens'],
  },
  'graphql.document': {
    canonicalName: 'graphql.document',
    type: 'string',
    brief: 'The GraphQL document being executed.',
    deprecationChain: ['graphql.document', 'graphql.source'],
  },
  'graphql.operation': {
    canonicalName: 'sentry.graphql.operation',
    type: 'string',
    brief: 'Indicates the type of graphql operation, emitted by the Javascript SDK.',
    deprecationChain: ['sentry.graphql.operation'],
  },
  'graphql.operation.name': {
    canonicalName: 'graphql.operation.name',
    type: 'string',
    brief: 'The name of the operation being executed.',
    deprecationChain: ['graphql.operation.name'],
  },
  'graphql.operation.type': {
    canonicalName: 'graphql.operation.type',
    type: 'string',
    brief: 'The type of the operation being executed.',
    deprecationChain: ['graphql.operation.type'],
  },
  'graphql.processing.type': {
    canonicalName: 'graphql.processing.type',
    type: 'string',
    brief: 'The type of processing represented by this span.',
    deprecationChain: ['graphql.processing.type'],
  },
  'graphql.source': {
    canonicalName: 'graphql.document',
    type: 'string',
    brief: 'The GraphQL document being executed.',
    deprecationChain: ['graphql.document', 'graphql.source'],
  },
  'grpc.error.bad_request.field_violations': {
    canonicalName: 'grpc.error.bad_request.field_violations',
    type: 'string[]',
    brief:
      'The individual field violations from a google.rpc.BadRequest error detail. Each entry is a JSON-encoded object with field, description, reason, and (optional) localized_message keys, mirroring google.rpc.BadRequest.FieldViolation.',
    deprecationChain: ['grpc.error.bad_request.field_violations'],
  },
  'grpc.error.debug_info.detail': {
    canonicalName: 'grpc.error.debug_info.detail',
    type: 'string',
    brief:
      'Additional debugging information, such as a server-side stack trace, from a google.rpc.DebugInfo error detail. SDKs should only send this attribute when sendDefaultPii is enabled or dataCollection is configured accordingly.',
    deprecationChain: ['grpc.error.debug_info.detail'],
  },
  'grpc.error.debug_info.stack_entries': {
    canonicalName: 'grpc.error.debug_info.stack_entries',
    type: 'string[]',
    brief:
      'The server-side stack trace entries from a google.rpc.DebugInfo error detail. SDKs should only send this attribute when sendDefaultPii is enabled or dataCollection is configured accordingly.',
    deprecationChain: ['grpc.error.debug_info.stack_entries'],
  },
  'grpc.error.error_info.domain': {
    canonicalName: 'grpc.error.error_info.domain',
    type: 'string',
    brief: 'The logical grouping to which the gRPC error reason belongs, from the google.rpc.ErrorInfo error detail.',
    deprecationChain: ['grpc.error.error_info.domain'],
  },
  'grpc.error.error_info.metadata.<key>': {
    canonicalName: 'grpc.error.error_info.metadata.<key>',
    type: 'string',
    brief:
      'Additional structured metadata attached to a google.rpc.ErrorInfo error detail, with <key> being the metadata key name. SDKs should only send this attribute when sendDefaultPii is enabled or dataCollection is configured accordingly.',
    deprecationChain: ['grpc.error.error_info.metadata.<key>'],
  },
  'grpc.error.error_info.reason': {
    canonicalName: 'grpc.error.error_info.reason',
    type: 'string',
    brief:
      'The reason for the gRPC error, as defined by the service that generated it, from the google.rpc.ErrorInfo error detail.',
    deprecationChain: ['grpc.error.error_info.reason'],
  },
  'grpc.error.precondition_failure.violations': {
    canonicalName: 'grpc.error.precondition_failure.violations',
    type: 'string[]',
    brief:
      'The individual precondition violations from a google.rpc.PreconditionFailure error detail. Each entry is a JSON-encoded object with type, subject, and description keys. SDKs should only send this attribute when sendDefaultPii is enabled or dataCollection is configured accordingly, since violation subjects may identify specific resources or users.',
    deprecationChain: ['grpc.error.precondition_failure.violations'],
  },
  'grpc.error.quota_failure.violations': {
    canonicalName: 'grpc.error.quota_failure.violations',
    type: 'string[]',
    brief:
      'The individual quota violations from a google.rpc.QuotaFailure error detail. Each entry is a JSON-encoded object with subject, description, api_service, quota_metric, quota_id, quota_dimensions, quota_value, and (optional) future_quota_value keys, mirroring google.rpc.QuotaFailure.Violation. SDKs should only send this attribute when sendDefaultPii is enabled or dataCollection is configured accordingly, since violation subjects may identify specific resources or users.',
    deprecationChain: ['grpc.error.quota_failure.violations'],
  },
  'grpc.error.resource_info.description': {
    canonicalName: 'grpc.error.resource_info.description',
    type: 'string',
    brief:
      'A description of the error that occurred while accessing the resource, from a google.rpc.ResourceInfo error detail.',
    deprecationChain: ['grpc.error.resource_info.description'],
  },
  'grpc.error.resource_info.owner': {
    canonicalName: 'grpc.error.resource_info.owner',
    type: 'string',
    brief:
      'The owner of the resource being accessed (e.g. project or account owning it), from a google.rpc.ResourceInfo error detail. SDKs should only send this attribute when sendDefaultPii is enabled or dataCollection is configured accordingly.',
    deprecationChain: ['grpc.error.resource_info.owner'],
  },
  'grpc.error.resource_info.resource_name': {
    canonicalName: 'grpc.error.resource_info.resource_name',
    type: 'string',
    brief:
      'The name of the resource being accessed, from a google.rpc.ResourceInfo error detail. SDKs should only send this attribute when sendDefaultPii is enabled or dataCollection is configured accordingly.',
    deprecationChain: ['grpc.error.resource_info.resource_name'],
  },
  'grpc.error.resource_info.resource_type': {
    canonicalName: 'grpc.error.resource_info.resource_type',
    type: 'string',
    brief: 'The type of resource being accessed, from a google.rpc.ResourceInfo error detail.',
    deprecationChain: ['grpc.error.resource_info.resource_type'],
  },
  'grpc.error.retry_info.retry_delay_ms': {
    canonicalName: 'grpc.error.retry_info.retry_delay_ms',
    type: 'integer',
    brief:
      'How long the client should wait before retrying the gRPC call, in milliseconds, from the google.rpc.RetryInfo error detail.',
    deprecationChain: ['grpc.error.retry_info.retry_delay_ms'],
  },
  hardwareConcurrency: {
    canonicalName: 'device.processor_count',
    type: 'string',
    brief: 'The number of logical CPU cores available.',
    deprecationChain: ['device.processor_count', 'hardwareConcurrency'],
  },
  'http.client_ip': {
    canonicalName: 'client.address',
    type: 'string',
    brief:
      'Client address - domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.',
    deprecationChain: ['client.address', 'http.client_ip'],
  },
  'http.decoded_response_content_length': {
    canonicalName: 'http.response.body.decoded_size',
    type: 'byte',
    brief: 'The decoded body size of the response (in bytes).',
    deprecationChain: [
      'http.response.body.decoded_size',
      'http.decoded_response_content_length',
      'http.response_content_length_uncompressed',
    ],
  },
  'http.flavor': {
    canonicalName: 'network.protocol.version',
    type: 'string',
    brief: 'The actual version of the protocol used for network communication.',
    deprecationChain: ['network.protocol.version', 'http.flavor', 'messaging.protocol_version', 'net.protocol.version'],
  },
  'http.fragment': {
    canonicalName: 'http.fragment',
    type: 'string',
    brief:
      'The fragments present in the URI. Note that this contains the leading # character, while the `url.fragment` attribute does not.',
    deprecationChain: ['http.fragment'],
  },
  'http.host': {
    canonicalName: 'server.address',
    type: 'string',
    brief: 'The domain name.',
    deprecationChain: ['http.host'],
  },
  'http.method': {
    canonicalName: 'http.request.method',
    type: 'string',
    brief: 'The HTTP method used.',
    deprecationChain: ['http.request.method', 'http.method', 'http.request_method', 'method'],
  },
  'http.prefetch': {
    canonicalName: 'sentry.http.prefetch',
    type: 'boolean',
    brief: 'If an http request was a prefetch request.',
    deprecationChain: ['sentry.http.prefetch'],
  },
  'http.query': {
    canonicalName: 'http.query',
    type: 'string',
    brief:
      'The query string present in the URL. Note that this contains the leading ? character, while the `url.query` attribute does not.',
    deprecationChain: ['http.query'],
  },
  'http.request.body.data': {
    canonicalName: 'http.request.body.data',
    type: 'string',
    brief: 'HTTP request body data. Can be given as string or structural data of any format.',
    deprecationChain: ['http.request.body.data'],
  },
  'http.request.body.decoded_size': {
    canonicalName: 'http.request.body.decoded_size',
    type: 'integer',
    brief: 'The decoded body size of the request (in bytes).',
    deprecationChain: ['http.request.body.decoded_size', 'http.request_content_length_uncompressed'],
  },
  'http.request.body.size': {
    canonicalName: 'http.request.body.size',
    type: 'integer',
    brief: 'The encoded body size of the request (in bytes).',
    deprecationChain: ['http.request.body.size', 'http.request_content_length'],
  },
  'http.request.connect_start': {
    canonicalName: 'http.request.connect_start',
    type: 'double',
    brief:
      'The UNIX timestamp representing the time immediately before the user agent starts establishing the connection to the server to retrieve the resource.',
    deprecationChain: ['http.request.connect_start'],
  },
  'http.request.connection_end': {
    canonicalName: 'http.request.connection_end',
    type: 'double',
    brief:
      'The UNIX timestamp representing the time immediately after the browser finishes establishing the connection to the server to retrieve the resource. The timestamp value includes the time interval to establish the transport connection, as well as other time intervals such as TLS handshake and SOCKS authentication.',
    deprecationChain: ['http.request.connection_end'],
  },
  'http.request.domain_lookup_end': {
    canonicalName: 'http.request.domain_lookup_end',
    type: 'double',
    brief:
      'The UNIX timestamp representing the time immediately after the browser finishes the domain-name lookup for the resource.',
    deprecationChain: ['http.request.domain_lookup_end'],
  },
  'http.request.domain_lookup_start': {
    canonicalName: 'http.request.domain_lookup_start',
    type: 'double',
    brief:
      'The UNIX timestamp representing the time immediately before the browser starts the domain name lookup for the resource.',
    deprecationChain: ['http.request.domain_lookup_start'],
  },
  'http.request.fetch_start': {
    canonicalName: 'http.request.fetch_start',
    type: 'double',
    brief: 'The UNIX timestamp representing the time immediately before the browser starts to fetch the resource.',
    deprecationChain: ['http.request.fetch_start'],
  },
  'http.request.header.<key>': {
    canonicalName: 'http.request.header.<key>',
    type: 'string[]',
    brief:
      'HTTP request headers, <key> being the normalized HTTP Header name (lowercase), the value being the header values.',
    deprecationChain: ['http.request.header.<key>'],
  },
  'http.request.method': {
    canonicalName: 'http.request.method',
    type: 'string',
    brief: 'The HTTP method used.',
    deprecationChain: ['http.request.method', 'http.method', 'http.request_method', 'method'],
  },
  'http.request.redirect_end': {
    canonicalName: 'http.request.redirect_end',
    type: 'double',
    brief:
      'The UNIX timestamp representing the timestamp immediately after receiving the last byte of the response of the last redirect',
    deprecationChain: ['http.request.redirect_end'],
  },
  'http.request.redirect_start': {
    canonicalName: 'http.request.redirect_start',
    type: 'double',
    brief: 'The UNIX timestamp representing the start time of the fetch which that initiates the redirect.',
    deprecationChain: ['http.request.redirect_start'],
  },
  'http.request.request_start': {
    canonicalName: 'http.request.request_start',
    type: 'double',
    brief:
      'The UNIX timestamp representing the time immediately before the browser starts requesting the resource from the server, cache, or local resource. If the transport connection fails and the browser retires the request, the value returned will be the start of the retry request.',
    deprecationChain: ['http.request.request_start'],
  },
  'http.request.resend_count': {
    canonicalName: 'http.request.resend_count',
    type: 'integer',
    brief: 'The ordinal number of request resending attempt (for any reason, including redirects).',
    deprecationChain: ['http.request.resend_count'],
  },
  'http.request.response_end': {
    canonicalName: 'http.request.response_end',
    type: 'double',
    brief:
      'The UNIX timestamp representing the time immediately after the browser receives the last byte of the resource or immediately before the transport connection is closed, whichever comes first.',
    deprecationChain: ['http.request.response_end'],
  },
  'http.request.response_start': {
    canonicalName: 'http.request.response_start',
    type: 'double',
    brief:
      'The UNIX timestamp representing the time immediately before the browser starts requesting the resource from the server, cache, or local resource. If the transport connection fails and the browser retires the request, the value returned will be the start of the retry request.',
    deprecationChain: ['http.request.response_start'],
  },
  'http.request.same_origin': {
    canonicalName: 'http.request.same_origin',
    type: 'boolean',
    brief: "Indicates that a URL has the same origin as the current page's origin in the browser.",
    deprecationChain: ['http.request.same_origin', 'url.same_origin'],
  },
  'http.request.secure_connection_start': {
    canonicalName: 'http.request.secure_connection_start',
    type: 'double',
    brief:
      'The UNIX timestamp representing the time immediately before the browser starts the handshake process to secure the current connection. If a secure connection is not used, the property returns zero.',
    deprecationChain: ['http.request.secure_connection_start'],
  },
  'http.request.time_to_first_byte': {
    canonicalName: 'http.request.time_to_first_byte',
    type: 'double',
    brief:
      "The time in seconds from the browser's timeorigin to when the first byte of the request's response was received. See https://web.dev/articles/ttfb#measure-resource-requests",
    deprecationChain: ['http.request.time_to_first_byte'],
  },
  'http.request.worker_start': {
    canonicalName: 'http.request.worker_start',
    type: 'double',
    brief:
      'The UNIX timestamp representing the timestamp immediately before dispatching the FetchEvent if a Service Worker thread is already running, or immediately before starting the Service Worker thread if it is not already running.',
    deprecationChain: ['http.request.worker_start'],
  },
  'http.request_content_length': {
    canonicalName: 'http.request.body.size',
    type: 'integer',
    brief: 'The encoded body size of the request (in bytes).',
    deprecationChain: ['http.request.body.size', 'http.request_content_length'],
  },
  'http.request_content_length_uncompressed': {
    canonicalName: 'http.request.body.decoded_size',
    type: 'integer',
    brief: 'The decoded body size of the request (in bytes).',
    deprecationChain: ['http.request.body.decoded_size', 'http.request_content_length_uncompressed'],
  },
  'http.request_method': {
    canonicalName: 'http.request.method',
    type: 'string',
    brief: 'The HTTP method used.',
    deprecationChain: ['http.request.method', 'http.method', 'http.request_method', 'method'],
  },
  'http.response.body.decoded_size': {
    canonicalName: 'http.response.body.decoded_size',
    type: 'integer',
    brief: 'The decoded body size of the response (in bytes).',
    deprecationChain: [
      'http.response.body.decoded_size',
      'http.decoded_response_content_length',
      'http.response_content_length_uncompressed',
    ],
  },
  'http.response.body.size': {
    canonicalName: 'http.response.body.size',
    type: 'integer',
    brief: 'The encoded body size of the response (in bytes).',
    deprecationChain: [
      'http.response.body.size',
      'http.response.header.content-length',
      'http.response_content_length',
    ],
  },
  'http.response.header.<key>': {
    canonicalName: 'http.response.header.<key>',
    type: 'string[]',
    brief:
      'HTTP response headers, <key> being the normalized HTTP Header name (lowercase), the value being the header values.',
    deprecationChain: ['http.response.header.<key>'],
  },
  'http.response.header.content-length': {
    canonicalName: 'http.response.header.content-length',
    type: 'string',
    brief: 'The size of the message body sent to the recipient (in bytes)',
    deprecationChain: [
      'http.response.header.content-length',
      'http.response.body.size',
      'http.response_content_length',
    ],
  },
  'http.response.size': {
    canonicalName: 'http.response.size',
    type: 'integer',
    brief: 'The transfer size of the response (in bytes).',
    deprecationChain: ['http.response.size', 'http.response_transfer_size'],
  },
  'http.response.status_text': {
    canonicalName: 'http.response.status_text',
    type: 'string',
    brief: 'The reason phrase of the HTTP response.',
    deprecationChain: ['http.response.status_text', 'http.status_text'],
  },
  'http.response_content_length': {
    canonicalName: 'http.response.body.size',
    type: 'byte',
    brief: 'The encoded body size of the response (in bytes).',
    deprecationChain: [
      'http.response.body.size',
      'http.response.header.content-length',
      'http.response_content_length',
    ],
  },
  'http.response_content_length_uncompressed': {
    canonicalName: 'http.response.body.decoded_size',
    type: 'integer',
    brief: 'The decoded body size of the response (in bytes).',
    deprecationChain: [
      'http.response.body.decoded_size',
      'http.decoded_response_content_length',
      'http.response_content_length_uncompressed',
    ],
  },
  'http.response_status_code': {
    canonicalName: 'http.response.status_code',
    type: 'integer',
    brief: 'The status code of the HTTP response.',
    deprecationChain: ['http.response.status_code', 'http.response_status_code', 'http.status_code'],
  },
  'http.response_transfer_size': {
    canonicalName: 'http.response.size',
    type: 'byte',
    brief: 'The transfer size of the response (in bytes).',
    deprecationChain: ['http.response.size', 'http.response_transfer_size'],
  },
  'http.route': {
    canonicalName: 'http.route',
    type: 'string',
    brief: 'The matched route, that is, the path template in the format used by the respective server framework.',
    deprecationChain: ['http.route'],
  },
  'http.scheme': {
    canonicalName: 'url.scheme',
    type: 'string',
    brief: 'The URI scheme component identifying the used protocol.',
    deprecationChain: ['url.scheme', 'http.scheme'],
  },
  'http.server.request.time_in_queue': {
    canonicalName: 'http.server.request.time_in_queue',
    type: 'double',
    brief:
      'The time in milliseconds the request spent in the server queue before processing began. Measured from the X-Request-Start header set by reverse proxies (e.g., Nginx, HAProxy, Heroku) to when the application started handling the request.',
    deprecationChain: ['http.server.request.time_in_queue'],
  },
  'http.server_name': {
    canonicalName: 'server.address',
    type: 'string',
    brief: 'The server domain name',
    deprecationChain: ['server.address', 'address', 'http.server_name', 'net.host.name'],
  },
  'http.status_code': {
    canonicalName: 'http.response.status_code',
    type: 'integer',
    brief: 'The status code of the HTTP response.',
    deprecationChain: ['http.response.status_code', 'http.response_status_code', 'http.status_code'],
  },
  'http.status_text': {
    canonicalName: 'http.response.status_text',
    type: 'string',
    brief: 'The reason phrase of the HTTP response',
    deprecationChain: ['http.response.status_text', 'http.status_text'],
  },
  'http.target': {
    canonicalName: 'http.target',
    type: 'string',
    brief: 'The pathname and query string of the URL.',
    deprecationChain: ['http.target'],
  },
  'http.url': {
    canonicalName: 'url.full',
    type: 'string',
    brief: 'The URL of the resource that was fetched.',
    deprecationChain: ['url.full', 'aws.request.url', 'http.url', 'messaging.url', 'url'],
  },
  'http.user_agent': {
    canonicalName: 'user_agent.original',
    type: 'string',
    brief: 'Value of the HTTP User-Agent header sent by the client.',
    deprecationChain: ['user_agent.original', 'http.user_agent'],
  },
  id: {
    canonicalName: 'id',
    type: 'string',
    brief: 'A unique identifier for the span.',
    deprecationChain: ['id'],
  },
  idle_span_finish_reason: {
    canonicalName: 'sentry.idle_span_finish_reason',
    type: 'string',
    brief: 'The reason why an idle span ended early.',
    deprecationChain: ['sentry.idle_span_finish_reason'],
  },
  inp: {
    canonicalName: 'browser.web_vital.inp.value',
    type: 'double',
    brief: 'The value of the recorded Interaction to Next Paint (INP) web vital',
    deprecationChain: ['browser.web_vital.inp.value', 'inp'],
  },
  is_remote: {
    canonicalName: 'sentry.is_remote',
    type: 'boolean',
    brief: "Indicates whether a span's parent is remote.",
    deprecationChain: ['sentry.is_remote'],
  },
  'jsonrpc.protocol.version': {
    canonicalName: 'jsonrpc.protocol.version',
    type: 'string',
    brief: 'The version of the JSON-RPC protocol used.',
    deprecationChain: ['jsonrpc.protocol.version'],
  },
  'jsonrpc.request.id': {
    canonicalName: 'jsonrpc.request.id',
    type: 'string',
    brief: 'The JSON-RPC request identifier. Unique within the session.',
    deprecationChain: ['jsonrpc.request.id', 'mcp.request.id'],
  },
  'jvm.gc.action': {
    canonicalName: 'jvm.gc.action',
    type: 'string',
    brief: 'Name of the garbage collector action.',
    deprecationChain: ['jvm.gc.action'],
  },
  'jvm.gc.name': {
    canonicalName: 'jvm.gc.name',
    type: 'string',
    brief: 'Name of the garbage collector.',
    deprecationChain: ['jvm.gc.name'],
  },
  'jvm.memory.pool.name': {
    canonicalName: 'jvm.memory.pool.name',
    type: 'string',
    brief: 'Name of the memory pool.',
    deprecationChain: ['jvm.memory.pool.name'],
  },
  'jvm.memory.type': {
    canonicalName: 'jvm.memory.type',
    type: 'string',
    brief: 'Name of the memory pool.',
    deprecationChain: ['jvm.memory.type'],
  },
  'jvm.thread.daemon': {
    canonicalName: 'jvm.thread.daemon',
    type: 'boolean',
    brief: 'Whether the thread is daemon or not.',
    deprecationChain: ['jvm.thread.daemon'],
  },
  'jvm.thread.state': {
    canonicalName: 'jvm.thread.state',
    type: 'string',
    brief: 'State of the thread.',
    deprecationChain: ['jvm.thread.state'],
  },
  'koa.name': {
    canonicalName: 'koa.name',
    type: 'string',
    brief: 'The name of the Koa middleware or matched route that handled the request.',
    deprecationChain: ['koa.name'],
  },
  'koa.type': {
    canonicalName: 'koa.type',
    type: 'string',
    brief: 'The type of the Koa layer that handled the request.',
    deprecationChain: ['koa.type'],
  },
  'langchain.chain.name': {
    canonicalName: 'gen_ai.pipeline.name',
    type: 'string',
    brief: 'The name of the LangChain chain being executed.',
    deprecationChain: ['gen_ai.pipeline.name', 'ai.pipeline.name', 'langchain.chain.name'],
  },
  lcp: {
    canonicalName: 'browser.web_vital.lcp.value',
    type: 'double',
    brief: 'The value of the recorded Largest Contentful Paint (LCP) web vital',
    deprecationChain: ['browser.web_vital.lcp.value', 'lcp'],
  },
  'lcp.element': {
    canonicalName: 'browser.web_vital.lcp.element',
    type: 'string',
    brief: 'The dom element responsible for the largest contentful paint.',
    deprecationChain: ['browser.web_vital.lcp.element', 'lcp.element'],
  },
  'lcp.id': {
    canonicalName: 'browser.web_vital.lcp.id',
    type: 'string',
    brief: 'The id of the dom element responsible for the largest contentful paint.',
    deprecationChain: ['browser.web_vital.lcp.id', 'lcp.id'],
  },
  'lcp.loadTime': {
    canonicalName: 'browser.web_vital.lcp.load_time',
    type: 'integer',
    brief: 'The time it took for the LCP element to be loaded',
    deprecationChain: ['browser.web_vital.lcp.load_time', 'lcp.loadTime'],
  },
  'lcp.renderTime': {
    canonicalName: 'browser.web_vital.lcp.render_time',
    type: 'integer',
    brief: 'The time it took for the LCP element to be rendered',
    deprecationChain: ['browser.web_vital.lcp.render_time', 'lcp.renderTime'],
  },
  'lcp.size': {
    canonicalName: 'browser.web_vital.lcp.size',
    type: 'integer',
    brief: 'The size of the largest contentful paint element.',
    deprecationChain: ['browser.web_vital.lcp.size', 'lcp.size'],
  },
  'lcp.url': {
    canonicalName: 'browser.web_vital.lcp.url',
    type: 'string',
    brief: 'The url of the dom element responsible for the largest contentful paint.',
    deprecationChain: ['browser.web_vital.lcp.url', 'lcp.url'],
  },
  'litestar.middleware_name': {
    canonicalName: 'middleware.name',
    type: 'string',
    brief: 'The name of the Litestar middleware.',
    deprecationChain: [
      'middleware.name',
      'django.middleware_name',
      'litestar.middleware_name',
      'starlette.middleware_name',
      'starlite.middleware_name',
    ],
  },
  'logger.name': {
    canonicalName: 'logger.name',
    type: 'string',
    brief: 'The name of the logger that generated this event.',
    deprecationChain: ['logger.name'],
  },
  main_thread: {
    canonicalName: 'sentry.main_thread',
    type: 'boolean',
    brief: 'Whether the span or event occurred on the main thread. Computed by Relay and should not be set by SDKs.',
    deprecationChain: ['sentry.main_thread'],
  },
  'mcp.cancelled.reason': {
    canonicalName: 'mcp.cancelled.reason',
    type: 'string',
    brief: 'Reason for the cancellation of an MCP operation.',
    deprecationChain: ['mcp.cancelled.reason'],
  },
  'mcp.cancelled.request_id': {
    canonicalName: 'mcp.cancelled.request_id',
    type: 'string',
    brief: 'Request ID of the cancelled MCP operation.',
    deprecationChain: ['mcp.cancelled.request_id'],
  },
  'mcp.client.name': {
    canonicalName: 'mcp.client.name',
    type: 'string',
    brief: 'Name of the MCP client application.',
    deprecationChain: ['mcp.client.name'],
  },
  'mcp.client.title': {
    canonicalName: 'mcp.client.title',
    type: 'string',
    brief: 'Display title of the MCP client application.',
    deprecationChain: ['mcp.client.title'],
  },
  'mcp.client.version': {
    canonicalName: 'mcp.client.version',
    type: 'string',
    brief: 'Version of the MCP client application.',
    deprecationChain: ['mcp.client.version'],
  },
  'mcp.lifecycle.phase': {
    canonicalName: 'mcp.lifecycle.phase',
    type: 'string',
    brief: 'Lifecycle phase indicator for MCP operations.',
    deprecationChain: ['mcp.lifecycle.phase'],
  },
  'mcp.logging.data_type': {
    canonicalName: 'mcp.logging.data_type',
    type: 'string',
    brief: 'Data type of the logged message content.',
    deprecationChain: ['mcp.logging.data_type'],
  },
  'mcp.logging.level': {
    canonicalName: 'mcp.logging.level',
    type: 'string',
    brief: 'Log level for MCP logging operations.',
    deprecationChain: ['mcp.logging.level'],
  },
  'mcp.logging.logger': {
    canonicalName: 'mcp.logging.logger',
    type: 'string',
    brief: 'Logger name for MCP logging operations.',
    deprecationChain: ['mcp.logging.logger'],
  },
  'mcp.logging.message': {
    canonicalName: 'mcp.logging.message',
    type: 'string',
    brief: 'Log message content from MCP logging operations.',
    deprecationChain: ['mcp.logging.message'],
  },
  'mcp.method.name': {
    canonicalName: 'mcp.method.name',
    type: 'string',
    brief: 'The name of the MCP request or notification method being called.',
    deprecationChain: ['mcp.method.name'],
  },
  'mcp.progress.current': {
    canonicalName: 'mcp.progress.current',
    type: 'integer',
    brief: 'Current progress value of an MCP operation.',
    deprecationChain: ['mcp.progress.current'],
  },
  'mcp.progress.message': {
    canonicalName: 'mcp.progress.message',
    type: 'string',
    brief: 'Progress message describing the current state of an MCP operation.',
    deprecationChain: ['mcp.progress.message'],
  },
  'mcp.progress.percentage': {
    canonicalName: 'mcp.progress.percentage',
    type: 'double',
    brief: 'Calculated progress percentage of an MCP operation. Computed from current/total * 100.',
    deprecationChain: ['mcp.progress.percentage'],
  },
  'mcp.progress.token': {
    canonicalName: 'mcp.progress.token',
    type: 'string',
    brief: 'Token for tracking progress of an MCP operation.',
    deprecationChain: ['mcp.progress.token'],
  },
  'mcp.progress.total': {
    canonicalName: 'mcp.progress.total',
    type: 'integer',
    brief: 'Total progress target value of an MCP operation.',
    deprecationChain: ['mcp.progress.total'],
  },
  'mcp.prompt.name': {
    canonicalName: 'gen_ai.prompt.name',
    type: 'string',
    brief: 'Name of the MCP prompt template being used.',
    deprecationChain: ['gen_ai.prompt.name', 'mcp.prompt.name'],
  },
  'mcp.prompt.result.description': {
    canonicalName: 'mcp.prompt.result.description',
    type: 'string',
    brief: 'Description of the prompt result.',
    deprecationChain: ['mcp.prompt.result.description'],
  },
  'mcp.prompt.result.message_content': {
    canonicalName: 'mcp.prompt.result.message_content',
    type: 'string',
    brief: 'Content of the message in the prompt result. Used for single message results only.',
    deprecationChain: ['mcp.prompt.result.message_content'],
  },
  'mcp.prompt.result.message_count': {
    canonicalName: 'mcp.prompt.result.message_count',
    type: 'integer',
    brief: 'Number of messages in the prompt result.',
    deprecationChain: ['mcp.prompt.result.message_count'],
  },
  'mcp.prompt.result.message_role': {
    canonicalName: 'mcp.prompt.result.message_role',
    type: 'string',
    brief: 'Role of the message in the prompt result. Used for single message results only.',
    deprecationChain: ['mcp.prompt.result.message_role'],
  },
  'mcp.protocol.ready': {
    canonicalName: 'mcp.protocol.ready',
    type: 'integer',
    brief: 'Protocol readiness indicator for MCP session. Non-zero value indicates the protocol is ready.',
    deprecationChain: ['mcp.protocol.ready'],
  },
  'mcp.protocol.version': {
    canonicalName: 'mcp.protocol.version',
    type: 'string',
    brief: 'MCP protocol version used in the session.',
    deprecationChain: ['mcp.protocol.version'],
  },
  'mcp.request.argument.<key>': {
    canonicalName: 'mcp.request.argument.<key>',
    type: 'string',
    brief:
      'MCP request argument with dynamic key suffix. The <key> is replaced with the actual argument name. The value is a JSON-stringified representation of the argument value.',
    deprecationChain: ['mcp.request.argument.<key>'],
  },
  'mcp.request.argument.name': {
    canonicalName: 'mcp.request.argument.name',
    type: 'string',
    brief: 'Name argument from prompts/get MCP request.',
    deprecationChain: ['mcp.request.argument.name'],
  },
  'mcp.request.argument.uri': {
    canonicalName: 'mcp.request.argument.uri',
    type: 'string',
    brief: 'URI argument from resources/read MCP request.',
    deprecationChain: ['mcp.request.argument.uri'],
  },
  'mcp.request.id': {
    canonicalName: 'jsonrpc.request.id',
    type: 'string',
    brief: 'JSON-RPC request identifier for the MCP request. Unique within the MCP session.',
    deprecationChain: ['jsonrpc.request.id', 'mcp.request.id'],
  },
  'mcp.resource.protocol': {
    canonicalName: 'network.protocol.name',
    type: 'string',
    brief: 'Protocol of the resource URI being accessed, extracted from the URI.',
    deprecationChain: ['network.protocol.name', 'mcp.resource.protocol', 'messaging.protocol', 'net.protocol.name'],
  },
  'mcp.resource.uri': {
    canonicalName: 'mcp.resource.uri',
    type: 'string',
    brief: 'The resource URI being accessed in an MCP operation.',
    deprecationChain: ['mcp.resource.uri'],
  },
  'mcp.server.name': {
    canonicalName: 'mcp.server.name',
    type: 'string',
    brief: 'Name of the MCP server application.',
    deprecationChain: ['mcp.server.name'],
  },
  'mcp.server.title': {
    canonicalName: 'mcp.server.title',
    type: 'string',
    brief: 'Display title of the MCP server application.',
    deprecationChain: ['mcp.server.title'],
  },
  'mcp.server.version': {
    canonicalName: 'mcp.server.version',
    type: 'string',
    brief: 'Version of the MCP server application.',
    deprecationChain: ['mcp.server.version'],
  },
  'mcp.session.id': {
    canonicalName: 'mcp.session.id',
    type: 'string',
    brief: 'Identifier for the MCP session.',
    deprecationChain: ['mcp.session.id'],
  },
  'mcp.tool.name': {
    canonicalName: 'gen_ai.tool.name',
    type: 'string',
    brief: 'Name of the MCP tool being called.',
    deprecationChain: ['gen_ai.tool.name', 'ai.function_call', 'mcp.tool.name'],
  },
  'mcp.tool.result.content': {
    canonicalName: 'gen_ai.tool.call.result',
    type: 'string',
    brief: 'The content of the tool result.',
    deprecationChain: [
      'gen_ai.tool.call.result',
      'ai.toolCall.result',
      'gen_ai.tool.message',
      'gen_ai.tool.output',
      'mcp.tool.result.content',
    ],
  },
  'mcp.tool.result.content_count': {
    canonicalName: 'mcp.tool.result.content_count',
    type: 'integer',
    brief: 'Number of content items in the tool result.',
    deprecationChain: ['mcp.tool.result.content_count'],
  },
  'mcp.tool.result.is_error': {
    canonicalName: 'error.type',
    type: 'boolean',
    brief: 'Whether a tool execution resulted in an error.',
    deprecationChain: ['mcp.tool.result.is_error'],
  },
  'mcp.transport': {
    canonicalName: 'network.transport',
    type: 'string',
    brief: 'Transport method used for MCP communication.',
    deprecationChain: ['network.transport', 'mcp.transport'],
  },
  'mdc.<key>': {
    canonicalName: 'mdc.<key>',
    type: 'string',
    brief:
      "Attributes from the Mapped Diagnostic Context (MDC) present at the moment the log record was created. The MDC is supported by all the most popular logging solutions in the Java ecosystem, and it's usually implemented as a thread-local map that stores context for e.g. a specific request.",
    deprecationChain: ['mdc.<key>'],
  },
  'message.parameter.<key>': {
    canonicalName: 'sentry.message.parameter.<key>',
    type: 'string',
    brief:
      "A parameter used in the message template. <key> can either be the number that represent the parameter's position in the template string (sentry.message.parameter.0, sentry.message.parameter.1, etc) or the parameter's name (sentry.message.parameter.item_id, sentry.message.parameter.user_id, etc)",
    deprecationChain: ['sentry.message.parameter.<key>'],
  },
  'message.template': {
    canonicalName: 'sentry.message.template',
    type: 'string',
    brief: 'The parameterized template string.',
    deprecationChain: ['sentry.message.template'],
  },
  'messaging.batch.message_count': {
    canonicalName: 'messaging.batch.message_count',
    type: 'integer',
    brief: 'The number of messages sent, received, or processed in the scope of the batching operation.',
    deprecationChain: ['messaging.batch.message_count'],
  },
  'messaging.conversation_id': {
    canonicalName: 'messaging.message.conversation_id',
    type: 'string',
    brief:
      'The conversation ID identifying the conversation to which the message belongs, represented as a string. Sometimes called "Correlation ID".',
    deprecationChain: ['messaging.message.conversation_id', 'messaging.conversation_id'],
  },
  'messaging.destination': {
    canonicalName: 'messaging.destination.name',
    type: 'string',
    brief: 'The message destination name.',
    deprecationChain: ['messaging.destination.name', 'messaging.destination'],
  },
  'messaging.destination.connection': {
    canonicalName: 'messaging.destination.connection',
    type: 'string',
    brief: 'The message destination connection.',
    deprecationChain: ['messaging.destination.connection'],
  },
  'messaging.destination.name': {
    canonicalName: 'messaging.destination.name',
    type: 'string',
    brief: 'The message destination name.',
    deprecationChain: ['messaging.destination.name', 'messaging.destination'],
  },
  'messaging.destination.partition.id': {
    canonicalName: 'messaging.destination.partition.id',
    type: 'string',
    brief:
      'The identifier of the partition messages are sent to or received from, unique within the messaging.destination.name.',
    deprecationChain: ['messaging.destination.partition.id'],
  },
  'messaging.destination_kind': {
    canonicalName: 'messaging.destination_kind',
    type: 'string',
    brief: 'The kind of message destination.',
    deprecationChain: ['messaging.destination_kind'],
  },
  'messaging.kafka.message.key': {
    canonicalName: 'messaging.kafka.message.key',
    type: 'string',
    brief:
      "Message keys in Kafka are used for grouping alike messages to ensure they're processed on the same partition. They differ from messaging.message.id in that they're not unique. If the key is null, the attribute MUST NOT be set.",
    deprecationChain: ['messaging.kafka.message.key'],
  },
  'messaging.kafka.message.tombstone': {
    canonicalName: 'messaging.kafka.message.tombstone',
    type: 'boolean',
    brief: 'A boolean that is true if the message is a tombstone.',
    deprecationChain: ['messaging.kafka.message.tombstone'],
  },
  'messaging.kafka.offset': {
    canonicalName: 'messaging.kafka.offset',
    type: 'integer',
    brief: 'The offset of a record in the corresponding Kafka partition.',
    deprecationChain: ['messaging.kafka.offset'],
  },
  'messaging.message.body.size': {
    canonicalName: 'messaging.message.body.size',
    type: 'byte',
    brief: 'The size of the message body in bytes.',
    deprecationChain: ['messaging.message.body.size'],
  },
  'messaging.message.conversation_id': {
    canonicalName: 'messaging.message.conversation_id',
    type: 'string',
    brief:
      'The conversation ID identifying the conversation to which the message belongs, represented as a string. Sometimes called "Correlation ID".',
    deprecationChain: ['messaging.message.conversation_id', 'messaging.conversation_id'],
  },
  'messaging.message.envelope.size': {
    canonicalName: 'messaging.message.envelope.size',
    type: 'integer',
    brief: 'The size of the message body and metadata in bytes.',
    deprecationChain: ['messaging.message.envelope.size'],
  },
  'messaging.message.id': {
    canonicalName: 'messaging.message.id',
    type: 'string',
    brief: 'A value used by the messaging system as an identifier for the message, represented as a string.',
    deprecationChain: ['messaging.message.id', 'messaging.message_id'],
  },
  'messaging.message.receive.latency': {
    canonicalName: 'messaging.message.receive.latency',
    type: 'millisecond',
    brief: 'The latency between when the message was published and received.',
    deprecationChain: ['messaging.message.receive.latency'],
  },
  'messaging.message.retry.count': {
    canonicalName: 'messaging.message.retry.count',
    type: 'integer',
    brief: 'The amount of attempts to send the message.',
    deprecationChain: ['messaging.message.retry.count'],
  },
  'messaging.message_id': {
    canonicalName: 'messaging.message.id',
    type: 'string',
    brief: 'A value used by the messaging system as an identifier for the message, represented as a string.',
    deprecationChain: ['messaging.message.id', 'messaging.message_id'],
  },
  'messaging.operation': {
    canonicalName: 'messaging.operation.name',
    type: 'string',
    brief: 'The name of the messaging operation being performed.',
    deprecationChain: ['messaging.operation.name', 'messaging.operation'],
  },
  'messaging.operation.name': {
    canonicalName: 'messaging.operation.name',
    type: 'string',
    brief: 'The name of the messaging operation being performed',
    deprecationChain: ['messaging.operation.name', 'messaging.operation'],
  },
  'messaging.operation.type': {
    canonicalName: 'messaging.operation.type',
    type: 'string',
    brief: 'A string identifying the type of the messaging operation',
    deprecationChain: ['messaging.operation.type'],
  },
  'messaging.protocol': {
    canonicalName: 'network.protocol.name',
    type: 'string',
    brief: 'OSI application layer or non-OSI equivalent.',
    deprecationChain: ['network.protocol.name', 'mcp.resource.protocol', 'messaging.protocol', 'net.protocol.name'],
  },
  'messaging.protocol_version': {
    canonicalName: 'network.protocol.version',
    type: 'string',
    brief: 'The actual version of the protocol used for network communication.',
    deprecationChain: ['network.protocol.version', 'http.flavor', 'messaging.protocol_version', 'net.protocol.version'],
  },
  'messaging.rabbitmq.destination.routing_key': {
    canonicalName: 'messaging.rabbitmq.destination.routing_key',
    type: 'string',
    brief: 'RabbitMQ message routing key.',
    deprecationChain: ['messaging.rabbitmq.destination.routing_key', 'messaging.rabbitmq.routing_key'],
  },
  'messaging.rabbitmq.routing_key': {
    canonicalName: 'messaging.rabbitmq.destination.routing_key',
    type: 'string',
    brief: 'RabbitMQ message routing key.',
    deprecationChain: ['messaging.rabbitmq.destination.routing_key', 'messaging.rabbitmq.routing_key'],
  },
  'messaging.system': {
    canonicalName: 'messaging.system',
    type: 'string',
    brief: 'The messaging system as identified by the client instrumentation.',
    deprecationChain: ['messaging.system'],
  },
  'messaging.url': {
    canonicalName: 'url.full',
    type: 'string',
    brief: 'The connection string of the messaging broker.',
    deprecationChain: ['url.full', 'aws.request.url', 'http.url', 'messaging.url', 'url'],
  },
  method: {
    canonicalName: 'http.request.method',
    type: 'string',
    brief: 'The HTTP method used.',
    deprecationChain: ['http.request.method', 'http.method', 'http.request_method', 'method'],
  },
  'metric.source': {
    canonicalName: 'sentry.metric.source',
    type: 'string',
    brief:
      'The provenance of a metric.  For example, this can be set to indicate if a metric was generated by Relay from a span.',
    deprecationChain: ['sentry.metric.source'],
  },
  'middleware.name': {
    canonicalName: 'middleware.name',
    type: 'string',
    brief: 'The name of the middleware.',
    deprecationChain: [
      'middleware.name',
      'django.middleware_name',
      'litestar.middleware_name',
      'starlette.middleware_name',
      'starlite.middleware_name',
    ],
  },
  mobile: {
    canonicalName: 'sentry.mobile',
    type: 'boolean',
    brief: 'Whether the application is using a mobile SDK. Computed by Relay and should not be set by SDKs.',
    deprecationChain: ['sentry.mobile'],
  },
  'mobile.frames_delay': {
    canonicalName: 'app.vitals.frames.delay.value',
    type: 'second',
    brief:
      'The sum of all delayed frame durations in seconds during the lifetime of the span. For more information see [frames delay](https://develop.sentry.dev/sdk/performance/frames-delay/).',
    deprecationChain: ['app.vitals.frames.delay.value', 'frames.delay', 'mobile.frames_delay'],
  },
  'mobile.frozen_frames': {
    canonicalName: 'app.vitals.frames.frozen.count',
    type: 'integer',
    brief: 'The number of frozen frames rendered during the lifetime of the span.',
    deprecationChain: [
      'app.vitals.frames.frozen.count',
      'frames.frozen',
      'mobile.frozen_frames',
      'sentry.frames.frozen',
    ],
  },
  'mobile.slow_frames': {
    canonicalName: 'app.vitals.frames.slow.count',
    type: 'integer',
    brief: 'The number of slow frames rendered during the lifetime of the span.',
    deprecationChain: ['app.vitals.frames.slow.count', 'frames.slow', 'mobile.slow_frames', 'sentry.frames.slow'],
  },
  'mobile.total_frames': {
    canonicalName: 'app.vitals.frames.total.count',
    type: 'integer',
    brief: 'The number of total frames rendered during the lifetime of the span.',
    deprecationChain: ['app.vitals.frames.total.count', 'frames.total', 'mobile.total_frames', 'sentry.frames.total'],
  },
  'module.<key>': {
    canonicalName: 'sentry.module.<key>',
    type: 'string',
    brief: 'A module that was loaded in the process. The key is the name of the module.',
    deprecationChain: ['sentry.module.<key>'],
  },
  'navigation.origin': {
    canonicalName: 'router.navigation.origin',
    type: 'string',
    brief:
      'The origin of the navigation (usually client side router navigations). Should preferrably parameterized template (like url.template) or a URL path otherwise.',
    deprecationChain: ['router.navigation.origin', 'navigation.origin', 'sentry.sveltekit.navigation.from'],
  },
  'navigation.route.id': {
    canonicalName: 'router.navigation.route.id',
    type: 'string',
    brief:
      'The identifier of the matched client-side route, as assigned by the routing framework (e.g., vue-router name, react-router id).',
    deprecationChain: ['router.navigation.route.id', 'navigation.route.id'],
  },
  'navigation.type': {
    canonicalName: 'router.navigation.type',
    type: 'string',
    brief: 'The type of navigation done by a client-side router.',
    deprecationChain: ['router.navigation.type', 'navigation.type', 'sentry.sveltekit.navigation.type'],
  },
  'nel.elapsed_time': {
    canonicalName: 'nel.elapsed_time',
    type: 'integer',
    brief:
      'The elapsed number of milliseconds between the start of the resource fetch and when it was completed or aborted by the user agent.',
    deprecationChain: ['nel.elapsed_time'],
  },
  'nel.phase': {
    canonicalName: 'nel.phase',
    type: 'string',
    brief: 'If request failed, the phase of its network error. If request succeeded, "application".',
    deprecationChain: ['nel.phase'],
  },
  'nel.referrer': {
    canonicalName: 'nel.referrer',
    type: 'string',
    brief: "request's referrer, as determined by the referrer policy associated with its client.",
    deprecationChain: ['nel.referrer'],
  },
  'nel.sampling_function': {
    canonicalName: 'nel.sampling_function',
    type: 'double',
    brief: 'The sampling function used to determine if the request should be sampled.',
    deprecationChain: ['nel.sampling_function'],
  },
  'nel.type': {
    canonicalName: 'nel.type',
    type: 'string',
    brief: 'If request failed, the type of its network error. If request succeeded, "ok".',
    deprecationChain: ['nel.type'],
  },
  'net.host.ip': {
    canonicalName: 'network.local.address',
    type: 'string',
    brief: 'Local address of the network connection - IP address or Unix domain socket name.',
    deprecationChain: ['network.local.address', 'net.host.ip', 'net.sock.host.addr'],
  },
  'net.host.name': {
    canonicalName: 'server.address',
    type: 'string',
    brief:
      'Server domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.',
    deprecationChain: ['server.address', 'address', 'http.server_name', 'net.host.name'],
  },
  'net.host.port': {
    canonicalName: 'server.port',
    type: 'integer',
    brief: 'Server port number.',
    deprecationChain: ['server.port', 'net.host.port', 'port'],
  },
  'net.peer.ip': {
    canonicalName: 'network.peer.address',
    type: 'string',
    brief: 'Peer address of the network connection - IP address or Unix domain socket name.',
    deprecationChain: ['network.peer.address', 'net.peer.ip', 'net.sock.peer.addr'],
  },
  'net.peer.name': {
    canonicalName: 'server.address',
    type: 'string',
    brief:
      'Server domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.',
    deprecationChain: ['net.peer.name'],
  },
  'net.peer.port': {
    canonicalName: 'server.port',
    type: 'integer',
    brief: 'Peer port number.',
    deprecationChain: ['net.peer.port'],
  },
  'net.protocol.name': {
    canonicalName: 'network.protocol.name',
    type: 'string',
    brief: 'OSI application layer or non-OSI equivalent.',
    deprecationChain: ['network.protocol.name', 'mcp.resource.protocol', 'messaging.protocol', 'net.protocol.name'],
  },
  'net.protocol.version': {
    canonicalName: 'network.protocol.version',
    type: 'string',
    brief: 'The actual version of the protocol used for network communication.',
    deprecationChain: ['network.protocol.version', 'http.flavor', 'messaging.protocol_version', 'net.protocol.version'],
  },
  'net.sock.family': {
    canonicalName: 'network.transport',
    type: 'string',
    brief: 'OSI transport and network layer',
    deprecationChain: ['net.sock.family'],
  },
  'net.sock.host.addr': {
    canonicalName: 'network.local.address',
    type: 'string',
    brief: 'Local address of the network connection mapping to Unix domain socket name.',
    deprecationChain: ['network.local.address', 'net.host.ip', 'net.sock.host.addr'],
  },
  'net.sock.host.port': {
    canonicalName: 'network.local.port',
    type: 'integer',
    brief: 'Local port number of the network connection.',
    deprecationChain: ['network.local.port', 'net.sock.host.port'],
  },
  'net.sock.peer.addr': {
    canonicalName: 'network.peer.address',
    type: 'string',
    brief: 'Peer address of the network connection - IP address',
    deprecationChain: ['network.peer.address', 'net.peer.ip', 'net.sock.peer.addr'],
  },
  'net.sock.peer.name': {
    canonicalName: 'net.sock.peer.name',
    type: 'string',
    brief: 'Peer address of the network connection - Unix domain socket name',
    deprecationChain: ['net.sock.peer.name'],
  },
  'net.sock.peer.port': {
    canonicalName: 'network.peer.port',
    type: 'integer',
    brief: 'Peer port number of the network connection.',
    deprecationChain: ['network.peer.port', 'net.sock.peer.port'],
  },
  'net.transport': {
    canonicalName: 'network.transport',
    type: 'string',
    brief: 'OSI transport layer or inter-process communication method.',
    deprecationChain: ['net.transport'],
  },
  'network.connection.effective_type': {
    canonicalName: 'network.connection.effective_type',
    type: 'string',
    brief: 'Specifies the effective type of the current connection (e.g. slow-2g, 2g, 3g, 4g).',
    deprecationChain: ['network.connection.effective_type', 'effectiveConnectionType'],
  },
  'network.connection.rtt': {
    canonicalName: 'network.connection.rtt',
    type: 'integer',
    brief: 'Specifies the estimated effective round-trip time of the current connection, in milliseconds.',
    deprecationChain: ['network.connection.rtt', 'connection.rtt'],
  },
  'network.connection.type': {
    canonicalName: 'network.connection.type',
    type: 'string',
    brief: 'Specifies the type of the current connection (e.g. wifi, ethernet, cellular , etc).',
    deprecationChain: ['network.connection.type', 'connectionType', 'device.connection_type'],
  },
  'network.local.address': {
    canonicalName: 'network.local.address',
    type: 'string',
    brief: 'Local address of the network connection - IP address or Unix domain socket name.',
    deprecationChain: ['network.local.address', 'net.host.ip', 'net.sock.host.addr'],
  },
  'network.local.port': {
    canonicalName: 'network.local.port',
    type: 'integer',
    brief: 'Local port number of the network connection.',
    deprecationChain: ['network.local.port', 'net.sock.host.port'],
  },
  'network.peer.address': {
    canonicalName: 'network.peer.address',
    type: 'string',
    brief: 'Peer address of the network connection - IP address or Unix domain socket name.',
    deprecationChain: ['network.peer.address', 'net.peer.ip', 'net.sock.peer.addr'],
  },
  'network.peer.port': {
    canonicalName: 'network.peer.port',
    type: 'integer',
    brief: 'Peer port number of the network connection.',
    deprecationChain: ['network.peer.port', 'net.sock.peer.port'],
  },
  'network.protocol.name': {
    canonicalName: 'network.protocol.name',
    type: 'string',
    brief: 'OSI application layer or non-OSI equivalent.',
    deprecationChain: ['network.protocol.name', 'mcp.resource.protocol', 'messaging.protocol', 'net.protocol.name'],
  },
  'network.protocol.version': {
    canonicalName: 'network.protocol.version',
    type: 'string',
    brief: 'The actual version of the protocol used for network communication.',
    deprecationChain: ['network.protocol.version', 'http.flavor', 'messaging.protocol_version', 'net.protocol.version'],
  },
  'network.transport': {
    canonicalName: 'network.transport',
    type: 'string',
    brief: 'OSI transport layer or inter-process communication method.',
    deprecationChain: ['network.transport', 'mcp.transport'],
  },
  'network.type': {
    canonicalName: 'network.type',
    type: 'string',
    brief: 'OSI network layer or non-OSI equivalent.',
    deprecationChain: ['network.type'],
  },
  'nextjs.ssr.function.route': {
    canonicalName: 'sentry.nextjs.ssr.function.route',
    type: 'string',
    brief:
      'A parameterized route for a function in Next.js that contributes to Server-Side Rendering. Should be present on spans that track such functions when the file location of the function is known.',
    deprecationChain: ['sentry.nextjs.ssr.function.route'],
  },
  'nextjs.ssr.function.type': {
    canonicalName: 'sentry.nextjs.ssr.function.type',
    type: 'string',
    brief:
      'A descriptor for a for a function in Next.js that contributes to Server-Side Rendering. Should be present on spans that track such functions.',
    deprecationChain: ['sentry.nextjs.ssr.function.type'],
  },
  normalized_db_query: {
    canonicalName: 'sentry.normalized_db_query',
    type: 'string',
    brief: 'The normalized version of `db.query.text`.',
    deprecationChain: ['sentry.normalized_db_query'],
  },
  'normalized_db_query.hash': {
    canonicalName: 'sentry.normalized_db_query.hash',
    type: 'string',
    brief: 'The hash of `sentry.normalized_db_query`.',
    deprecationChain: ['sentry.normalized_db_query.hash'],
  },
  normalized_description: {
    canonicalName: 'sentry.normalized_description',
    type: 'string',
    brief:
      'Used as a generic attribute representing the normalized `sentry.description`. This refers to the legacy use case of `sentry.description` where it holds relevant data depending on the type of span (e.g. database query, resource url, http request description, etc).',
    deprecationChain: ['sentry.normalized_description'],
  },
  observed_timestamp_nanos: {
    canonicalName: 'sentry.observed_timestamp_nanos',
    type: 'string',
    brief: 'The timestamp at which an envelope was received by Relay, in nanoseconds.',
    deprecationChain: ['sentry.observed_timestamp_nanos'],
  },
  origin: {
    canonicalName: 'sentry.origin',
    type: 'string',
    brief: 'The origin of the instrumentation (e.g. span, log, etc.)',
    deprecationChain: ['sentry.origin', 'origin'],
  },
  'os.build': {
    canonicalName: 'os.build_id',
    type: 'string',
    brief: 'The build ID of the operating system.',
    deprecationChain: ['os.build_id', 'os.build'],
  },
  'os.build_id': {
    canonicalName: 'os.build_id',
    type: 'string',
    brief: 'The build ID of the operating system.',
    deprecationChain: ['os.build_id', 'os.build'],
  },
  'os.description': {
    canonicalName: 'os.description',
    type: 'string',
    brief:
      'Human readable (not intended to be parsed) OS version information, like e.g. reported by ver or lsb_release -a commands.',
    deprecationChain: ['os.description'],
  },
  'os.kernel_version': {
    canonicalName: 'os.kernel_version',
    type: 'string',
    brief: 'An independent kernel version string. Typically the entire output of the `uname` syscall.',
    deprecationChain: ['os.kernel_version'],
  },
  'os.name': {
    canonicalName: 'os.name',
    type: 'string',
    brief: 'Human readable operating system name.',
    deprecationChain: ['os.name'],
  },
  'os.raw_description': {
    canonicalName: 'os.raw_description',
    type: 'string',
    brief:
      'An unprocessed description string obtained by the operating system. For some well-known runtimes, Sentry will attempt to parse `name` and `version` from this string, if they are not explicitly given.',
    deprecationChain: ['os.raw_description'],
  },
  'os.rooted': {
    canonicalName: 'os.rooted',
    type: 'boolean',
    brief: 'Whether the operating system has been jailbroken or rooted.',
    deprecationChain: ['os.rooted'],
  },
  'os.theme': {
    canonicalName: 'os.theme',
    type: 'string',
    brief: 'Whether the OS runs in dark mode or light mode.',
    deprecationChain: ['os.theme'],
  },
  'os.type': {
    canonicalName: 'os.type',
    type: 'string',
    brief: 'The operating system type.',
    deprecationChain: ['os.type'],
  },
  'os.version': {
    canonicalName: 'os.version',
    type: 'string',
    brief: 'The version of the operating system.',
    deprecationChain: ['os.version'],
  },
  'otel.kind': {
    canonicalName: 'sentry.kind',
    type: 'string',
    brief:
      'The span kind (https://opentelemetry.io/docs/concepts/signals/traces/#span-kind). Deprecated, use `sentry.kind` instead.',
    deprecationChain: ['sentry.kind', 'span.kind', 'otel.kind'],
  },
  'otel.scope.name': {
    canonicalName: 'otel.scope.name',
    type: 'string',
    brief: 'The name of the instrumentation scope - (InstrumentationScope.Name in OTLP).',
    deprecationChain: ['otel.scope.name'],
  },
  'otel.scope.version': {
    canonicalName: 'otel.scope.version',
    type: 'string',
    brief: 'The version of the instrumentation scope - (InstrumentationScope.Version in OTLP).',
    deprecationChain: ['otel.scope.version'],
  },
  'otel.status_code': {
    canonicalName: 'otel.status_code',
    type: 'string',
    brief: 'Name of the code, either “OK” or “ERROR”. MUST NOT be set if the status code is UNSET.',
    deprecationChain: ['otel.status_code'],
  },
  'otel.status_description': {
    canonicalName: 'otel.status_description',
    type: 'string',
    brief: 'Description of the Status if it has a value, otherwise not set.',
    deprecationChain: ['otel.status_description'],
  },
  'pageload.span_id': {
    canonicalName: 'sentry.pageload.span_id',
    type: 'string',
    brief: 'The id of the pageload span, set by web vital spans and metrics',
    deprecationChain: ['sentry.pageload.span_id'],
  },
  'params.<key>': {
    canonicalName: 'params.<key>',
    type: 'string',
    brief:
      'Decoded parameters extracted from a URL path. Usually added by client-side routing frameworks like vue-router.',
    deprecationChain: ['params.<key>', 'url.path.parameter.<key>', 'url.path.params.<key>'],
  },
  'performance.activationStart': {
    canonicalName: 'browser.performance.navigation.activation_start',
    type: 'double',
    brief: 'The time between initiating a navigation to a page and the browser activating the page',
    deprecationChain: ['browser.performance.navigation.activation_start', 'performance.activationStart'],
  },
  'performance.timeOrigin': {
    canonicalName: 'browser.performance.time_origin',
    type: 'double',
    brief: "The browser's performance.timeOrigin timestamp representing the time when the pageload was initiated",
    deprecationChain: ['browser.performance.time_origin', 'performance.timeOrigin'],
  },
  platform: {
    canonicalName: 'sentry.platform',
    type: 'string',
    brief: 'The sdk platform that generated the event.',
    deprecationChain: ['sentry.platform', 'platform'],
  },
  port: {
    canonicalName: 'server.port',
    type: 'integer',
    brief: 'The destination port for a TCP connection.',
    deprecationChain: ['server.port', 'net.host.port', 'port'],
  },
  previous_route: {
    canonicalName: 'previous_route',
    type: 'string',
    brief: 'Also used by mobile SDKs to indicate the previous route in the application.',
    deprecationChain: ['previous_route'],
  },
  'process.command_args': {
    canonicalName: 'process.command_args',
    type: 'string[]',
    brief: 'All the command arguments (including the command/executable itself) as received by the process.',
    deprecationChain: ['process.command_args'],
  },
  'process.executable.name': {
    canonicalName: 'process.executable.name',
    type: 'string',
    brief: 'The name of the executable that started the process.',
    deprecationChain: ['process.executable.name'],
  },
  'process.pid': {
    canonicalName: 'process.pid',
    type: 'integer',
    brief: 'The process ID of the running process.',
    deprecationChain: ['process.pid', 'subprocess.pid'],
  },
  'process.runtime.description': {
    canonicalName: 'process.runtime.description',
    type: 'string',
    brief:
      'An additional description about the runtime of the process, for example a specific vendor customization of the runtime environment. Equivalent to `raw_description` in the Sentry runtime context.',
    deprecationChain: ['process.runtime.description', 'runtime.raw_description'],
  },
  'process.runtime.engine.name': {
    canonicalName: 'process.runtime.engine.name',
    type: 'string',
    brief: 'The name of the runtime engine.',
    deprecationChain: ['process.runtime.engine.name'],
  },
  'process.runtime.engine.version': {
    canonicalName: 'process.runtime.engine.version',
    type: 'string',
    brief: 'The version of the runtime engine.',
    deprecationChain: ['process.runtime.engine.version'],
  },
  'process.runtime.name': {
    canonicalName: 'process.runtime.name',
    type: 'string',
    brief: 'The name of the runtime. Equivalent to `name` in the Sentry runtime context.',
    deprecationChain: ['process.runtime.name', 'runtime.name'],
  },
  'process.runtime.version': {
    canonicalName: 'process.runtime.version',
    type: 'string',
    brief:
      'The version of the runtime of this process, as returned by the runtime without modification. Equivalent to `version` in the Sentry runtime context.',
    deprecationChain: ['process.runtime.version', 'runtime.version'],
  },
  'profile.id': {
    canonicalName: 'sentry.profile_id',
    type: 'string',
    brief:
      'The ID of the Sentry profile the span is associated with. This is only meaningful for transaction-based profiling.',
    deprecationChain: ['sentry.profile_id', 'profile.id', 'profile_id'],
  },
  profile_id: {
    canonicalName: 'sentry.profile_id',
    type: 'string',
    brief:
      'The ID of the Sentry profile the span is associated with. This is only meaningful for transaction-based profiling.',
    deprecationChain: ['sentry.profile_id', 'profile.id', 'profile_id'],
  },
  'profiler.id': {
    canonicalName: 'sentry.profiler_id',
    type: 'string',
    brief: 'The id of the currently running profiler (continuous profiling)',
    deprecationChain: ['sentry.profiler_id', 'profiler.id'],
  },
  query: {
    canonicalName: 'db.query.text',
    type: 'string',
    brief: 'The database query being executed.',
    deprecationChain: ['db.query.text', 'db.statement', 'query'],
  },
  'query.<key>': {
    canonicalName: 'url.query',
    type: 'string',
    brief: 'An item in a query string. Usually added by client-side routing frameworks like vue-router.',
    deprecationChain: ['query.<key>'],
  },
  'react.version': {
    canonicalName: 'react.version',
    type: 'string',
    brief: 'The version of the React framework',
    deprecationChain: ['react.version'],
  },
  'redis.command': {
    canonicalName: 'db.operation.name',
    type: 'string',
    brief: 'The name of the Redis operation being executed.',
    deprecationChain: ['db.operation.name', 'cloudflare.d1.query_type', 'db.operation', 'redis.command'],
  },
  'redis.key': {
    canonicalName: 'db.redis.key',
    type: 'string',
    brief: 'The key the Redis command is operating on.',
    deprecationChain: ['db.redis.key', 'redis.key'],
  },
  'relay.ingress': {
    canonicalName: 'sentry.relay.ingress',
    type: 'string',
    brief: 'How an item (span, log, &c.) entered Relay.',
    internal: true,
    deprecationChain: ['sentry.relay.ingress'],
  },
  'relay.pipeline': {
    canonicalName: 'sentry.relay.pipeline',
    type: 'string',
    brief: 'An internal descriptor of which processing pipeline an item went through in Relay.',
    internal: true,
    deprecationChain: ['sentry.relay.pipeline'],
  },
  release: {
    canonicalName: 'sentry.release',
    type: 'string',
    brief: 'The sentry release.',
    deprecationChain: ['sentry.release', 'release', 'service.version'],
  },
  'remix.action_form_data.<key>': {
    canonicalName: 'remix.action_form_data.<key>',
    type: 'string',
    brief: 'Remix form data, <key> being the form data key, the value being the form data value.',
    deprecationChain: ['remix.action_form_data.<key>'],
  },
  'replay.id': {
    canonicalName: 'sentry.replay_id',
    type: 'string',
    brief: 'The id of the sentry replay.',
    deprecationChain: ['sentry.replay_id', 'replay.id', 'replay_id'],
  },
  replay_id: {
    canonicalName: 'sentry.replay_id',
    type: 'string',
    brief: 'The id of the sentry replay.',
    deprecationChain: ['sentry.replay_id', 'replay.id', 'replay_id'],
  },
  replay_is_buffering: {
    canonicalName: 'sentry.replay_is_buffering',
    type: 'boolean',
    brief:
      'A sentinel attribute on log events indicating whether the current Session Replay is being buffered (onErrorSampleRate).',
    deprecationChain: ['sentry.replay_is_buffering'],
  },
  report_event: {
    canonicalName: 'sentry.report_event',
    type: 'string',
    brief: '(Deprecated) The event that caused the SDK to report CLS or LCP (pagehide or navigation)',
    deprecationChain: ['sentry.report_event'],
  },
  'resource.deployment.environment': {
    canonicalName: 'sentry.environment',
    type: 'string',
    brief: 'The software deployment environment name.',
    deprecationChain: [
      'sentry.environment',
      'environment',
      'resource.deployment.environment',
      'resource.deployment.environment.name',
    ],
  },
  'resource.deployment.environment.name': {
    canonicalName: 'sentry.environment',
    type: 'string',
    brief: 'The software deployment environment name.',
    deprecationChain: [
      'sentry.environment',
      'environment',
      'resource.deployment.environment',
      'resource.deployment.environment.name',
    ],
  },
  'resource.render_blocking_status': {
    canonicalName: 'resource.render_blocking_status',
    type: 'string',
    brief: 'The render blocking status of the resource.',
    deprecationChain: ['resource.render_blocking_status'],
  },
  route: {
    canonicalName: 'http.route',
    type: 'string',
    brief:
      'The matched route, that is, the path template in the format used by the respective server framework. Also used by mobile SDKs to indicate the current route in the application.',
    deprecationChain: ['route'],
  },
  'router.navigation.origin': {
    canonicalName: 'router.navigation.origin',
    type: 'string',
    brief:
      'The origin of the navigation (usually client side router navigations). Should preferably be a parameterized template (like url.template) or a URL path otherwise.',
    deprecationChain: ['router.navigation.origin', 'navigation.origin', 'sentry.sveltekit.navigation.from'],
  },
  'router.navigation.route.id': {
    canonicalName: 'router.navigation.route.id',
    type: 'string',
    brief:
      'The identifier of the matched client-side route, as assigned by the routing framework (e.g., vue-router name, react-router id).',
    deprecationChain: ['router.navigation.route.id', 'navigation.route.id'],
  },
  'router.navigation.type': {
    canonicalName: 'router.navigation.type',
    type: 'string',
    brief: 'The type of navigation done by a client-side router.',
    deprecationChain: ['router.navigation.type', 'navigation.type', 'sentry.sveltekit.navigation.type'],
  },
  'rpc.grpc.status_code': {
    canonicalName: 'rpc.response.status_code',
    type: 'integer',
    brief: 'The numeric status code of the gRPC request.',
    deprecationChain: ['rpc.grpc.status_code'],
  },
  'rpc.method': {
    canonicalName: 'rpc.method',
    type: 'string',
    brief: 'The fully-qualified logical name of the method from the RPC interface perspective.',
    deprecationChain: ['rpc.method', 'aws.operation_name'],
  },
  'rpc.response.status_code': {
    canonicalName: 'rpc.response.status_code',
    type: 'string',
    brief: 'Status code of the RPC returned by the RPC server or generated by the client.',
    deprecationChain: ['rpc.response.status_code', 'code'],
  },
  'rpc.service': {
    canonicalName: 'rpc.service',
    type: 'string',
    brief: 'The full (logical) name of the service being called, including its package name, if applicable.',
    deprecationChain: ['rpc.service'],
  },
  'rpc.system': {
    canonicalName: 'rpc.system.name',
    type: 'string',
    brief: 'A string identifying the remoting system.',
    deprecationChain: ['rpc.system.name', 'rpc.system'],
  },
  'rpc.system.name': {
    canonicalName: 'rpc.system.name',
    type: 'string',
    brief: 'A string identifying the remoting system.',
    deprecationChain: ['rpc.system.name', 'rpc.system'],
  },
  'runtime.build': {
    canonicalName: 'runtime.build',
    type: 'string',
    brief: 'The application build string, when it is separate from the version.',
    deprecationChain: ['runtime.build'],
  },
  'runtime.name': {
    canonicalName: 'process.runtime.name',
    type: 'string',
    brief: 'The name of the runtime. For example node, CPython, or rustc.',
    deprecationChain: ['process.runtime.name', 'runtime.name'],
  },
  'runtime.raw_description': {
    canonicalName: 'process.runtime.description',
    type: 'string',
    brief:
      'Unprocessed description string as obtained from the runtime. Used to extract name and version for well-known runtimes.',
    deprecationChain: ['process.runtime.description', 'runtime.raw_description'],
  },
  'runtime.version': {
    canonicalName: 'process.runtime.version',
    type: 'string',
    brief: 'The version of the runtime.',
    deprecationChain: ['process.runtime.version', 'runtime.version'],
  },
  'score.<key>': {
    canonicalName: 'score.<key>',
    type: 'double',
    brief:
      'The weighted performance score for a web vital. This is defined as `score.weight.<key>` * `score.ratio.<key>`.',
    deprecationChain: ['score.<key>'],
  },
  'score.ratio.<key>': {
    canonicalName: 'score.ratio.<key>',
    type: 'double',
    brief: 'The score for a web vital, normalized to a number between 0 and 1.',
    deprecationChain: ['score.ratio.<key>'],
  },
  'score.total': {
    canonicalName: 'score.total',
    type: 'double',
    brief:
      'The total performance score of a span. This is the sum of individual weighted web vital scores (see `score.<key>`).',
    deprecationChain: ['score.total'],
  },
  'score.weight.<key>': {
    canonicalName: 'score.weight.<key>',
    type: 'double',
    brief: "The relative weight of a web vital in a span's performance score.",
    deprecationChain: ['score.weight.<key>'],
  },
  'sdk.integrations': {
    canonicalName: 'sentry.sdk.integrations',
    type: 'string[]',
    brief:
      'A list of names identifying enabled integrations. The list shouldhave all enabled integrations, including default integrations. Defaultintegrations are included because different SDK releases may contain differentdefault integrations.',
    deprecationChain: ['sentry.sdk.integrations'],
  },
  'sdk.name': {
    canonicalName: 'sentry.sdk.name',
    type: 'string',
    brief: 'The sentry sdk name.',
    deprecationChain: ['sentry.sdk.name', 'sdk.name'],
  },
  'sdk.version': {
    canonicalName: 'sentry.sdk.version',
    type: 'string',
    brief: 'The sentry sdk version.',
    deprecationChain: ['sentry.sdk.version', 'sdk.version'],
  },
  'segment.id': {
    canonicalName: 'sentry.segment.id',
    type: 'string',
    brief: 'The segment ID of a span',
    deprecationChain: ['sentry.segment.id', 'sentry.segment_id', 'transaction.span_id'],
  },
  'segment.name.source': {
    canonicalName: 'sentry.segment.name.source',
    type: 'string',
    brief:
      "The source of the segment span name. Should only be set on segment spans. Known values are:  `'custom'`, `'url'`, `'route'`, `'component'`, `'view'`, `'task'`.",
    internal: true,
    deprecationChain: ['sentry.segment.name.source'],
  },
  'server.address': {
    canonicalName: 'server.address',
    type: 'string',
    brief:
      'Server domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.',
    deprecationChain: ['server.address', 'address', 'http.server_name', 'net.host.name'],
  },
  'server.port': {
    canonicalName: 'server.port',
    type: 'integer',
    brief: 'Server port number.',
    deprecationChain: ['server.port', 'net.host.port', 'port'],
  },
  server_name: {
    canonicalName: 'device.name',
    type: 'string',
    brief: 'The name of the device. On servers and desktops, this is typically the hostname.',
    deprecationChain: ['device.name', 'server_name'],
  },
  server_sample_rate: {
    canonicalName: 'sentry.server_sample_rate',
    type: 'double',
    brief: 'Rate at which a span was sampled in Relay.',
    deprecationChain: ['sentry.server_sample_rate', 'server_sample_rate'],
  },
  'service.name': {
    canonicalName: 'service.name',
    type: 'string',
    brief: 'Logical name of the service.',
    deprecationChain: ['service.name'],
  },
  'service.version': {
    canonicalName: 'service.version',
    type: 'string',
    brief: 'The version string of the service API or implementation. The format is not defined by these conventions.',
    deprecationChain: ['service.version', 'sentry.release', 'release'],
  },
  'session.id': {
    canonicalName: 'session.id',
    type: 'string',
    brief: 'A unique id identifying the active session at the time of setting this attribute',
    deprecationChain: ['session.id'],
  },
  source: {
    canonicalName: 'sentry.source',
    type: 'string',
    brief:
      "The source of a span, also referred to as transaction source. Known values are:  `'custom'`, `'url'`, `'route'`, `'component'`, `'view'`, `'task'`. '`source`' describes a parametrized route, while `'url'` describes the full URL, potentially containing identifiers.",
    deprecationChain: ['sentry.source'],
  },
  'span.action': {
    canonicalName: 'sentry.action',
    type: 'string',
    brief:
      'Used as a generic attribute representing the action depending on the type of span. For instance, this is the database query operation for DB spans, and the request method for HTTP spans.',
    deprecationChain: ['sentry.action', 'span.action'],
  },
  'span.category': {
    canonicalName: 'sentry.category',
    type: 'string',
    brief:
      "The high-level category of a span, derived from the span operation or span attributes. This categorizes spans by their general purpose (e.g., database, HTTP, UI). Known values include: 'ai', 'ai.pipeline', 'app', 'browser', 'cache', 'console', 'db', 'event', 'file', 'function.aws', 'function.azure', 'function.gcp', 'function.nextjs', 'function.remix', 'graphql', 'grpc', 'http', 'measure', 'middleware', 'navigation', 'pageload', 'queue', 'resource', 'rpc', 'serialize', 'subprocess', 'template', 'topic', 'ui', 'ui.angular', 'ui.ember', 'ui.react', 'ui.svelte', 'ui.vue', 'view', 'websocket'.",
    deprecationChain: ['sentry.category', 'span.category'],
  },
  'span.domain': {
    canonicalName: 'sentry.domain',
    type: 'string',
    brief:
      'Used as a generic attribute representing the domain depending on the type of span. For instance, this is the collection/table name for database spans, and the server address for HTTP spans.',
    deprecationChain: ['sentry.domain', 'span.domain'],
  },
  'span.group': {
    canonicalName: 'sentry.group',
    type: 'string',
    brief:
      'Stores the hash of `sentry.normalized_description`. This is primarily used for grouping spans in the product end.',
    deprecationChain: ['sentry.group', 'span.group'],
  },
  'span.kind': {
    canonicalName: 'sentry.kind',
    type: 'string',
    brief:
      'Used to clarify the relationship between parents and children, or to distinguish between spans, e.g. a `server` and `client` span with the same name.',
    deprecationChain: ['sentry.kind', 'span.kind', 'otel.kind'],
  },
  'span.op': {
    canonicalName: 'sentry.op',
    type: 'string',
    brief: 'The operation of a span.',
    deprecationChain: ['sentry.op', 'span.op'],
  },
  'span.source': {
    canonicalName: 'sentry.span.source',
    type: 'string',
    brief:
      "The source of a span, also referred to as transaction source. Known values are:  `'custom'`, `'url'`, `'route'`, `'component'`, `'view'`, `'task'`. '`source`' describes a parametrized route, while `'url'` describes the full URL, potentially containing identifiers.",
    deprecationChain: ['sentry.span.source'],
  },
  'span.status': {
    canonicalName: 'sentry.status',
    type: 'string',
    brief:
      'The span\'s status (either "ok" or "error"). Older SDKs may set this to a more specific error, but this behaviour is deprecated.',
    deprecationChain: ['sentry.status', 'span.status'],
  },
  'span.status.message': {
    canonicalName: 'sentry.status.message',
    type: 'string',
    brief: 'The from OTLP extracted status message.',
    deprecationChain: ['sentry.status.message', 'span.status.message'],
  },
  'span.status_code': {
    canonicalName: 'sentry.status_code',
    type: 'integer',
    brief:
      'The HTTP status code used in Sentry Insights. Typically set by Sentry during ingestion, rather than by clients.',
    deprecationChain: ['sentry.status_code', 'span.status_code'],
  },
  stall_percentage: {
    canonicalName: 'app.vitals.stall.percentage',
    type: 'double',
    brief: 'The fraction of time the app was stalled. Only applies to React Native. This is computed by Relay.',
    deprecationChain: ['app.vitals.stall.percentage', 'stall_percentage'],
  },
  stall_total_time: {
    canonicalName: 'app.vitals.stall.duration',
    type: 'double',
    brief:
      'The combined duration of all stalls in milliseconds. Only applies to React Native. This is computed by Relay.',
    deprecationChain: ['app.vitals.stall.duration', 'stall_total_time'],
  },
  'starlette.middleware_name': {
    canonicalName: 'middleware.name',
    type: 'string',
    brief: 'The name of the Starlette middleware.',
    deprecationChain: [
      'middleware.name',
      'django.middleware_name',
      'litestar.middleware_name',
      'starlette.middleware_name',
      'starlite.middleware_name',
    ],
  },
  'starlite.middleware_name': {
    canonicalName: 'middleware.name',
    type: 'string',
    brief: 'The name of the Starlite middleware.',
    deprecationChain: [
      'middleware.name',
      'django.middleware_name',
      'litestar.middleware_name',
      'starlette.middleware_name',
      'starlite.middleware_name',
    ],
  },
  'state.type': {
    canonicalName: 'state.type',
    type: 'string',
    brief: 'The type of state management library',
    deprecationChain: ['state.type'],
  },
  'subprocess.pid': {
    canonicalName: 'process.pid',
    type: 'integer',
    brief: 'The process ID of a subprocess.',
    deprecationChain: ['process.pid', 'subprocess.pid'],
  },
  'sveltekit.navigation.from': {
    canonicalName: 'router.navigation.origin',
    type: 'string',
    brief: 'the navigation origin (sveltekit router)',
    deprecationChain: ['router.navigation.origin', 'navigation.origin', 'sentry.sveltekit.navigation.from'],
  },
  'sveltekit.navigation.to': {
    canonicalName: 'sentry.sveltekit.navigation.to',
    type: 'string',
    brief: 'the navigation destination',
    deprecationChain: ['sentry.sveltekit.navigation.to'],
  },
  'sveltekit.navigation.type': {
    canonicalName: 'router.navigation.type',
    type: 'string',
    brief: 'The type of navigation event emitted from the sveltekit client router',
    deprecationChain: ['router.navigation.type', 'navigation.type', 'sentry.sveltekit.navigation.type'],
  },
  'thread.id': {
    canonicalName: 'thread.id',
    type: 'integer',
    brief: 'Current “managed” thread ID.',
    deprecationChain: ['thread.id', 'sentry.thread.id'],
  },
  'thread.name': {
    canonicalName: 'thread.name',
    type: 'string',
    brief: 'Current thread name.',
    deprecationChain: ['thread.name'],
  },
  'timber.tag': {
    canonicalName: 'timber.tag',
    type: 'string',
    brief: 'The log tag provided by the timber logging framework.',
    deprecationChain: ['timber.tag'],
  },
  time_to_full_display: {
    canonicalName: 'app.vitals.ttfd.value',
    type: 'double',
    brief: 'The duration of time to full display in milliseconds',
    deprecationChain: ['app.vitals.ttfd.value', 'time_to_full_display'],
  },
  time_to_initial_display: {
    canonicalName: 'app.vitals.ttid.value',
    type: 'double',
    brief: 'The duration of time to initial display in milliseconds',
    deprecationChain: ['app.vitals.ttid.value', 'time_to_initial_display'],
  },
  'timestamp.sequence': {
    canonicalName: 'sentry.timestamp.sequence',
    type: 'integer',
    brief:
      'A sequencing counter for deterministic ordering of logs or metrics when timestamps share the same integer millisecond. Starts at 0 on SDK initialization, increments by 1 for each captured item, and resets to 0 when the integer millisecond of the current item differs from the previous one.',
    deprecationChain: ['sentry.timestamp.sequence'],
  },
  'trace.parent_span_id': {
    canonicalName: 'sentry.trace.parent_span_id',
    type: 'string',
    brief:
      'The span id of the span that was active when the log was collected. This should not be set if there was no active span.',
    deprecationChain: ['sentry.trace.parent_span_id'],
  },
  'trace.status': {
    canonicalName: 'sentry.trace.status',
    type: 'string',
    brief:
      'The segment\'s status (either "ok" or "error"). Older SDKs may set this to a more specific error, but this behaviour is deprecated.',
    deprecationChain: ['sentry.trace.status', 'trace.status'],
  },
  trace_lifecycle: {
    canonicalName: 'sentry.trace_lifecycle',
    type: 'string',
    brief: 'Indicates the chosen trace lifecycle mode of the SDK (stream or static)',
    deprecationChain: ['sentry.trace_lifecycle', 'trace_lifecycle'],
  },
  transaction: {
    canonicalName: 'sentry.segment.name',
    type: 'string',
    brief: 'The segment name of a span',
    deprecationChain: ['sentry.segment.name', 'transaction', 'sentry.transaction'],
  },
  'transaction.span_id': {
    canonicalName: 'sentry.segment.id',
    type: 'string',
    brief: 'The segment ID of a span',
    deprecationChain: ['sentry.segment.id', 'sentry.segment_id', 'transaction.span_id'],
  },
  'trpc.procedure_path': {
    canonicalName: 'trpc.procedure_path',
    type: 'string',
    brief: 'The path of the tRPC procedure being called',
    deprecationChain: ['trpc.procedure_path'],
  },
  'trpc.procedure_type': {
    canonicalName: 'trpc.procedure_type',
    type: 'string',
    brief: 'The type of the tRPC procedure',
    deprecationChain: ['trpc.procedure_type'],
  },
  ttfb: {
    canonicalName: 'browser.web_vital.ttfb.value',
    type: 'double',
    brief: 'The value of the recorded Time To First Byte (TTFB) web vital in milliseconds',
    deprecationChain: ['browser.web_vital.ttfb.value', 'ttfb'],
  },
  'ttfb.requestTime': {
    canonicalName: 'browser.web_vital.ttfb.request_time',
    type: 'double',
    brief:
      "The time it takes for the server to process the initial request and send the first byte of a response to the user's browser",
    deprecationChain: ['browser.web_vital.ttfb.request_time', 'ttfb.requestTime'],
  },
  type: {
    canonicalName: 'type',
    type: 'string',
    brief: 'More granular type of the operation happening.',
    deprecationChain: ['type'],
  },
  'ui.component_name': {
    canonicalName: 'ui.component_name',
    type: 'string',
    brief: 'The name of the associated component.',
    deprecationChain: ['ui.component_name'],
  },
  'ui.contributes_to_ttfd': {
    canonicalName: 'ui.contributes_to_ttfd',
    type: 'boolean',
    brief: 'Whether the span execution contributed to the TTFD (time to fully drawn) metric.',
    deprecationChain: ['ui.contributes_to_ttfd'],
  },
  'ui.contributes_to_ttid': {
    canonicalName: 'ui.contributes_to_ttid',
    type: 'boolean',
    brief: 'Whether the span execution contributed to the TTID (time to initial display) metric.',
    deprecationChain: ['ui.contributes_to_ttid'],
  },
  'ui.element.height': {
    canonicalName: 'ui.element.height',
    type: 'integer',
    brief: 'The height of the UI element (for Html in pixels)',
    deprecationChain: ['ui.element.height'],
  },
  'ui.element.id': {
    canonicalName: 'ui.element.id',
    type: 'string',
    brief: 'The id of the UI element',
    deprecationChain: ['ui.element.id'],
  },
  'ui.element.identifier': {
    canonicalName: 'ui.element.identifier',
    type: 'string',
    brief: 'The identifier used to measure the UI element timing',
    deprecationChain: ['ui.element.identifier'],
  },
  'ui.element.load_time': {
    canonicalName: 'ui.element.load_time',
    type: 'double',
    brief: 'The loading time of a UI element (from time origin to finished loading)',
    deprecationChain: ['ui.element.load_time'],
  },
  'ui.element.paint_type': {
    canonicalName: 'ui.element.paint_type',
    type: 'string',
    brief: "The type of element paint. Can either be 'image-paint' or 'text-paint'",
    deprecationChain: ['ui.element.paint_type'],
  },
  'ui.element.render_time': {
    canonicalName: 'ui.element.render_time',
    type: 'double',
    brief: 'The rendering time of the UI element (from time origin to finished rendering)',
    deprecationChain: ['ui.element.render_time'],
  },
  'ui.element.type': {
    canonicalName: 'ui.element.type',
    type: 'string',
    brief: 'type of the UI element',
    deprecationChain: ['ui.element.type'],
  },
  'ui.element.url': {
    canonicalName: 'ui.element.url',
    type: 'string',
    brief: 'The URL of the UI element (e.g. an img src)',
    deprecationChain: ['ui.element.url'],
  },
  'ui.element.width': {
    canonicalName: 'ui.element.width',
    type: 'integer',
    brief: 'The width of the UI element (for HTML in pixels)',
    deprecationChain: ['ui.element.width'],
  },
  url: {
    canonicalName: 'url.full',
    type: 'string',
    brief: 'The URL of the resource that was fetched.',
    deprecationChain: ['url.full', 'aws.request.url', 'http.url', 'messaging.url', 'url'],
  },
  'url.domain': {
    canonicalName: 'url.domain',
    type: 'string',
    brief:
      'Server domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.',
    deprecationChain: ['url.domain'],
  },
  'url.fragment': {
    canonicalName: 'url.fragment',
    type: 'string',
    brief:
      'The fragments present in the URI. Note that this does not contain the leading # character, while the `http.fragment` attribute does.',
    deprecationChain: ['url.fragment'],
  },
  'url.full': {
    canonicalName: 'url.full',
    type: 'string',
    brief: 'The URL of the resource that was fetched.',
    deprecationChain: ['url.full', 'aws.request.url', 'http.url', 'messaging.url', 'url'],
  },
  'url.path': {
    canonicalName: 'url.path',
    type: 'string',
    brief: 'The URI path component.',
    deprecationChain: ['url.path'],
  },
  'url.path.parameter.<key>': {
    canonicalName: 'url.path.parameter.<key>',
    type: 'string',
    brief:
      'Decoded parameters extracted from a URL path. Usually added by client-side routing frameworks like vue-router.',
    deprecationChain: ['url.path.parameter.<key>', 'params.<key>', 'url.path.params.<key>'],
  },
  'url.path.params.<key>': {
    canonicalName: 'url.path.parameter.<key>',
    type: 'string',
    brief:
      'Decoded parameters extracted from a URL path. Usually added by client-side routing frameworks like vue-router.',
    deprecationChain: ['url.path.parameter.<key>', 'params.<key>', 'url.path.params.<key>'],
  },
  'url.port': {
    canonicalName: 'url.port',
    type: 'integer',
    brief: 'Server port number.',
    deprecationChain: ['url.port'],
  },
  'url.query': {
    canonicalName: 'url.query',
    type: 'string',
    brief:
      'The query string present in the URL. Note that this does not contain the leading ? character, while the `http.query` attribute does.',
    deprecationChain: ['url.query'],
  },
  'url.same_origin': {
    canonicalName: 'http.request.same_origin',
    type: 'boolean',
    brief: "Indicates that a URL has the same origin as the current page's origin in the browser.",
    deprecationChain: ['http.request.same_origin', 'url.same_origin'],
  },
  'url.scheme': {
    canonicalName: 'url.scheme',
    type: 'string',
    brief: 'The URI scheme component identifying the used protocol.',
    deprecationChain: ['url.scheme', 'http.scheme'],
  },
  'url.template': {
    canonicalName: 'url.template',
    type: 'string',
    brief: 'The low-cardinality template of an absolute URL path reference.',
    deprecationChain: ['url.template'],
  },
  'user.email': {
    canonicalName: 'user.email',
    type: 'string',
    brief: 'User email address.',
    deprecationChain: ['user.email', 'sentry.user.email'],
  },
  'user.full_name': {
    canonicalName: 'user.full_name',
    type: 'string',
    brief: "User's full name.",
    deprecationChain: ['user.full_name'],
  },
  'user.geo.city': {
    canonicalName: 'user.geo.city',
    type: 'string',
    brief: 'Human readable city name.',
    deprecationChain: ['user.geo.city', 'sentry.user.geo.city'],
  },
  'user.geo.country_code': {
    canonicalName: 'user.geo.country_code',
    type: 'string',
    brief: 'Two-letter country code (ISO 3166-1 alpha-2).',
    deprecationChain: ['user.geo.country_code', 'sentry.user.geo.country_code'],
  },
  'user.geo.region': {
    canonicalName: 'user.geo.region',
    type: 'string',
    brief: 'Human readable region name or code.',
    deprecationChain: ['user.geo.region', 'sentry.user.geo.region'],
  },
  'user.geo.subdivision': {
    canonicalName: 'user.geo.subdivision',
    type: 'string',
    brief: 'Human readable subdivision name.',
    deprecationChain: ['user.geo.subdivision', 'sentry.user.geo.subdivision'],
  },
  'user.hash': {
    canonicalName: 'user.hash',
    type: 'string',
    brief: 'Unique user hash to correlate information for a user in anonymized form.',
    deprecationChain: ['user.hash'],
  },
  'user.id': {
    canonicalName: 'user.id',
    type: 'string',
    brief: 'Unique identifier of the user.',
    deprecationChain: ['user.id', 'sentry.user.id'],
  },
  'user.ip': {
    canonicalName: 'user.ip_address',
    type: 'string',
    brief: 'The IP address of the user.',
    deprecationChain: ['user.ip_address', 'sentry.user.ip', 'user.ip'],
  },
  'user.ip_address': {
    canonicalName: 'user.ip_address',
    type: 'string',
    brief: 'The IP address of the user.',
    deprecationChain: ['user.ip_address', 'sentry.user.ip', 'user.ip'],
  },
  'user.name': {
    canonicalName: 'user.name',
    type: 'string',
    brief: 'Short name or login/username of the user.',
    deprecationChain: ['user.name', 'sentry.user.username', 'user.username'],
  },
  'user.roles': {
    canonicalName: 'user.roles',
    type: 'string[]',
    brief: 'Array of user roles at the time of the event.',
    deprecationChain: ['user.roles'],
  },
  'user.username': {
    canonicalName: 'user.name',
    type: 'string',
    brief: 'Short name or login/username of the user.',
    deprecationChain: ['user.name', 'sentry.user.username', 'user.username'],
  },
  'user_agent.original': {
    canonicalName: 'user_agent.original',
    type: 'string',
    brief: 'Value of the HTTP User-Agent header sent by the client.',
    deprecationChain: ['user_agent.original', 'http.user_agent'],
  },
  'vercel.branch': {
    canonicalName: 'vercel.branch',
    type: 'string',
    brief: 'Git branch name for Vercel project',
    deprecationChain: ['vercel.branch'],
  },
  'vercel.build_id': {
    canonicalName: 'vercel.build_id',
    type: 'string',
    brief: 'Identifier for the Vercel build (only present on build logs)',
    deprecationChain: ['vercel.build_id'],
  },
  'vercel.deployment_id': {
    canonicalName: 'vercel.deployment_id',
    type: 'string',
    brief: 'Identifier for the Vercel deployment',
    deprecationChain: ['vercel.deployment_id'],
  },
  'vercel.destination': {
    canonicalName: 'vercel.destination',
    type: 'string',
    brief: 'Origin of the external content in Vercel (only on external logs)',
    deprecationChain: ['vercel.destination'],
  },
  'vercel.edge_type': {
    canonicalName: 'vercel.edge_type',
    type: 'string',
    brief: 'Type of edge runtime in Vercel',
    deprecationChain: ['vercel.edge_type'],
  },
  'vercel.entrypoint': {
    canonicalName: 'vercel.entrypoint',
    type: 'string',
    brief: 'Entrypoint for the request in Vercel',
    deprecationChain: ['vercel.entrypoint'],
  },
  'vercel.execution_region': {
    canonicalName: 'vercel.execution_region',
    type: 'string',
    brief: 'Region where the request is executed',
    deprecationChain: ['vercel.execution_region'],
  },
  'vercel.id': {
    canonicalName: 'vercel.id',
    type: 'string',
    brief: 'Unique identifier for the log entry in Vercel',
    deprecationChain: ['vercel.id'],
  },
  'vercel.ja3_digest': {
    canonicalName: 'vercel.ja3_digest',
    type: 'string',
    brief: 'JA3 fingerprint digest of Vercel request',
    deprecationChain: ['vercel.ja3_digest'],
  },
  'vercel.ja4_digest': {
    canonicalName: 'vercel.ja4_digest',
    type: 'string',
    brief: 'JA4 fingerprint digest',
    deprecationChain: ['vercel.ja4_digest'],
  },
  'vercel.log_type': {
    canonicalName: 'vercel.log_type',
    type: 'string',
    brief: 'Vercel log output type',
    deprecationChain: ['vercel.log_type'],
  },
  'vercel.path': {
    canonicalName: 'vercel.path',
    type: 'string',
    brief: 'Function or dynamic path of the request in Vercel.',
    deprecationChain: ['vercel.path'],
  },
  'vercel.project_id': {
    canonicalName: 'vercel.project_id',
    type: 'string',
    brief: 'Identifier for the Vercel project',
    deprecationChain: ['vercel.project_id'],
  },
  'vercel.project_name': {
    canonicalName: 'vercel.project_name',
    type: 'string',
    brief: 'Name of the Vercel project',
    deprecationChain: ['vercel.project_name'],
  },
  'vercel.proxy.cache_id': {
    canonicalName: 'vercel.proxy.cache_id',
    type: 'string',
    brief: 'Original request ID when request is served from cache',
    deprecationChain: ['vercel.proxy.cache_id'],
  },
  'vercel.proxy.client_ip': {
    canonicalName: 'vercel.proxy.client_ip',
    type: 'string',
    brief: 'Client IP address',
    deprecationChain: ['vercel.proxy.client_ip'],
  },
  'vercel.proxy.host': {
    canonicalName: 'vercel.proxy.host',
    type: 'string',
    brief: 'Hostname of the request',
    deprecationChain: ['vercel.proxy.host'],
  },
  'vercel.proxy.lambda_region': {
    canonicalName: 'vercel.proxy.lambda_region',
    type: 'string',
    brief: 'Region where lambda function executed',
    deprecationChain: ['vercel.proxy.lambda_region'],
  },
  'vercel.proxy.method': {
    canonicalName: 'vercel.proxy.method',
    type: 'string',
    brief: 'HTTP method of the request',
    deprecationChain: ['vercel.proxy.method'],
  },
  'vercel.proxy.path': {
    canonicalName: 'vercel.proxy.path',
    type: 'string',
    brief: 'Request path with query parameters',
    deprecationChain: ['vercel.proxy.path'],
  },
  'vercel.proxy.path_type': {
    canonicalName: 'vercel.proxy.path_type',
    type: 'string',
    brief: 'How the request was served based on its path and project configuration',
    deprecationChain: ['vercel.proxy.path_type'],
  },
  'vercel.proxy.path_type_variant': {
    canonicalName: 'vercel.proxy.path_type_variant',
    type: 'string',
    brief: 'Variant of the path type',
    deprecationChain: ['vercel.proxy.path_type_variant'],
  },
  'vercel.proxy.referer': {
    canonicalName: 'vercel.proxy.referer',
    type: 'string',
    brief: 'Referer of the request',
    deprecationChain: ['vercel.proxy.referer'],
  },
  'vercel.proxy.region': {
    canonicalName: 'vercel.proxy.region',
    type: 'string',
    brief: 'Region where the request is processed',
    deprecationChain: ['vercel.proxy.region'],
  },
  'vercel.proxy.response_byte_size': {
    canonicalName: 'vercel.proxy.response_byte_size',
    type: 'integer',
    brief: 'Size of the response in bytes',
    deprecationChain: ['vercel.proxy.response_byte_size'],
  },
  'vercel.proxy.scheme': {
    canonicalName: 'vercel.proxy.scheme',
    type: 'string',
    brief: 'Protocol of the request',
    deprecationChain: ['vercel.proxy.scheme'],
  },
  'vercel.proxy.status_code': {
    canonicalName: 'vercel.proxy.status_code',
    type: 'integer',
    brief: 'HTTP status code of the proxy request',
    deprecationChain: ['vercel.proxy.status_code'],
  },
  'vercel.proxy.timestamp': {
    canonicalName: 'vercel.proxy.timestamp',
    type: 'integer',
    brief: 'Unix timestamp when the proxy request was made',
    deprecationChain: ['vercel.proxy.timestamp'],
  },
  'vercel.proxy.user_agent': {
    canonicalName: 'vercel.proxy.user_agent',
    type: 'string[]',
    brief: 'User agent strings of the request',
    deprecationChain: ['vercel.proxy.user_agent'],
  },
  'vercel.proxy.vercel_cache': {
    canonicalName: 'vercel.proxy.vercel_cache',
    type: 'string',
    brief: 'Cache status sent to the browser',
    deprecationChain: ['vercel.proxy.vercel_cache'],
  },
  'vercel.proxy.vercel_id': {
    canonicalName: 'vercel.proxy.vercel_id',
    type: 'string',
    brief: 'Vercel-specific identifier',
    deprecationChain: ['vercel.proxy.vercel_id'],
  },
  'vercel.proxy.waf_action': {
    canonicalName: 'vercel.proxy.waf_action',
    type: 'string',
    brief: 'Action taken by firewall rules',
    deprecationChain: ['vercel.proxy.waf_action'],
  },
  'vercel.proxy.waf_rule_id': {
    canonicalName: 'vercel.proxy.waf_rule_id',
    type: 'string',
    brief: 'ID of the firewall rule that matched',
    deprecationChain: ['vercel.proxy.waf_rule_id'],
  },
  'vercel.request_id': {
    canonicalName: 'vercel.request_id',
    type: 'string',
    brief: 'Identifier of the Vercel request',
    deprecationChain: ['vercel.request_id'],
  },
  'vercel.source': {
    canonicalName: 'vercel.source',
    type: 'string',
    brief: 'Origin of the Vercel log (build, edge, lambda, static, external, or firewall)',
    deprecationChain: ['vercel.source'],
  },
  'vercel.status_code': {
    canonicalName: 'vercel.status_code',
    type: 'integer',
    brief: 'HTTP status code of the request (-1 means no response returned and the lambda crashed)',
    deprecationChain: ['vercel.status_code'],
  },
};
