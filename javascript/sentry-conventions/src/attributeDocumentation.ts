// This is an auto-generated file. Do not edit!

import type { AttributeName, AttributeValue } from './attributes';

export interface ChangelogEntry {
  /** The sentry-conventions release version */
  version: string;
  /** GitHub PR numbers */
  prs?: number[];
  /** Optional description of what changed */
  description?: string;
}

export interface AttributeDocumentation {
  /** A description of the attribute */
  brief: string;
  /** An example value of the attribute */
  example?: AttributeValue;
  /** Example values of the attribute */
  examples?: AttributeValue[];
  /** Changelog entries tracking how this attribute has changed across versions */
  changelog?: ChangelogEntry[];
  /** A list of freeform notes providing additional context about how this attribute behaves, common pitfalls, or query-time nuances */
  additionalContext?: string[];
}

export const ADDRESS_BRIEF = 'The destination hostname or IP address for a TCP connection.';

export const AI_CITATIONS_BRIEF = 'References or sources cited by the AI model in its response.';

export const AI_COMPLETION_TOKENS_USED_BRIEF = 'The number of tokens used to respond to the message.';

export const AI_DOCUMENTS_BRIEF = 'Documents or content chunks used as context for the AI model.';

export const AI_FINISH_REASON_BRIEF = 'The reason why the model stopped generating.';

export const AI_FREQUENCY_PENALTY_BRIEF =
  'Used to reduce repetitiveness of generated tokens. The higher the value, the stronger a penalty is applied to previously present tokens, proportional to how many times they have already appeared in the prompt or prior generation.';

export const AI_FUNCTION_CALL_BRIEF =
  'For an AI model call, the function that was called. This is deprecated for OpenAI, and replaced by tool_calls';

export const AI_GENERATION_ID_BRIEF = 'Unique identifier for the completion.';

export const AI_INPUT_MESSAGES_BRIEF = 'The input messages sent to the model';

export const AI_IS_SEARCH_REQUIRED_BRIEF = 'Boolean indicating if the model needs to perform a search.';

export const AI_METADATA_BRIEF = 'Extra metadata passed to an AI pipeline step.';

export const AI_MODEL_ID_BRIEF = 'The vendor-specific ID of the model used.';

export const AI_MODEL_PROVIDER_BRIEF = 'The provider of the model.';

export const AI_PIPELINE_NAME_BRIEF = 'The name of the AI pipeline.';

export const AI_PREAMBLE_BRIEF =
  "For an AI model call, the preamble parameter. Preambles are a part of the prompt used to adjust the model's overall behavior and conversation style.";

export const AI_PRESENCE_PENALTY_BRIEF =
  'Used to reduce repetitiveness of generated tokens. Similar to frequency_penalty, except that this penalty is applied equally to all tokens that have already appeared, regardless of their exact frequencies.';

export const AI_PROMPT_MESSAGES_BRIEF = 'The input messages sent to the AI model.';

export const AI_PROMPT_TOKENS_USED_BRIEF = 'The number of tokens used to process just the prompt.';

export const AI_RAW_PROMPTING_BRIEF =
  'When enabled, the user’s prompt will be sent to the model without any pre-processing.';

export const AI_RESPONSES_BRIEF = 'The response messages sent back by the AI model.';

export const AI_RESPONSE_FORMAT_BRIEF = 'For an AI model call, the format of the response';

export const AI_RESPONSE_TEXT_BRIEF = 'The text response from the AI model.';

export const AI_RESPONSE_TOOLCALLS_BRIEF = 'The tool calls in the AI model response.';

export const AI_SEARCH_QUERIES_BRIEF = 'Queries used to search for relevant context or documents.';

export const AI_SEARCH_RESULTS_BRIEF = 'Results returned from search queries for context.';

export const AI_SEED_BRIEF =
  'The seed, ideally models given the same seed and same other parameters will produce the exact same output.';

export const AI_STREAMING_BRIEF = 'Whether the request was streamed back.';

export const AI_TAGS_BRIEF = 'Tags that describe an AI pipeline step.';

export const AI_TEMPERATURE_BRIEF =
  'For an AI model call, the temperature parameter. Temperature essentially means how random the output will be.';

export const AI_TEXTS_BRIEF = 'Raw text inputs provided to the model.';

export const AI_TOOLCALL_ARGS_BRIEF = 'The arguments of the tool call.';

export const AI_TOOLCALL_RESULT_BRIEF = 'The result of the tool call.';

export const AI_TOOLS_BRIEF = 'For an AI model call, the functions that are available';

export const AI_TOOL_CALLS_BRIEF = 'For an AI model call, the tool calls that were made.';

export const AI_TOP_K_BRIEF =
  'Limits the model to only consider the K most likely next tokens, where K is an integer (e.g., top_k=20 means only the 20 highest probability tokens are considered).';

export const AI_TOP_P_BRIEF =
  'Limits the model to only consider tokens whose cumulative probability mass adds up to p, where p is a float between 0 and 1 (e.g., top_p=0.7 means only tokens that sum up to 70% of the probability mass are considered).';

export const AI_TOTAL_COST_BRIEF = 'The total cost for the tokens used.';

export const AI_TOTAL_TOKENS_USED_BRIEF = 'The total number of tokens used to process the prompt.';

export const AI_WARNINGS_BRIEF = 'Warning messages generated during model execution.';

export const ANGULAR_VERSION_BRIEF = 'The version of the Angular framework';

export const APP_APP_BUILD_BRIEF = 'Internal build identifier, as it appears on the platform.';

export const APP_APP_IDENTIFIER_BRIEF = 'Version-independent application identifier, often a dotted bundle ID.';

export const APP_APP_NAME_BRIEF = 'Human readable application name, as it appears on the platform.';

export const APP_APP_START_TIME_BRIEF = 'Formatted UTC timestamp when the user started the application.';

export const APP_APP_VERSION_BRIEF = 'Human readable application version, as it appears on the platform.';

export const APP_BUILD_BRIEF = 'Internal build identifier, as it appears on the platform.';

export const APP_IDENTIFIER_BRIEF = 'Version-independent application identifier, often a dotted bundle ID.';

export const APP_IN_FOREGROUND_BRIEF = 'Whether the application is currently in the foreground.';

export const APP_NAME_BRIEF = 'Human readable application name, as it appears on the platform.';

export const APP_START_COLD_BRIEF = 'The duration of a cold app start in milliseconds';

export const APP_START_TIME_BRIEF = 'Formatted UTC timestamp when the user started the application.';

export const APP_START_TYPE_BRIEF = 'Mobile app start variant. Either cold or warm.';

export const APP_START_WARM_BRIEF = 'The duration of a warm app start in milliseconds';

export const APP_VERSION_BRIEF = 'Human readable application version, as it appears on the platform.';

export const APP_VITALS_FRAMES_DELAY_VALUE_BRIEF =
  'The sum of all delayed frame durations in seconds during the lifetime of the span. For more information see [frames delay](https://develop.sentry.dev/sdk/performance/frames-delay/).';

export const APP_VITALS_FRAMES_FROZEN_COUNT_BRIEF =
  'The number of frozen frames rendered during the lifetime of the span.';

export const APP_VITALS_FRAMES_FROZEN_RATE_BRIEF =
  'The fraction of rendered frames that were frozen, calculated as `app.vitals.frames.frozen.count` divided by `app.vitals.frames.total.count`. This is computed by Relay.';

export const APP_VITALS_FRAMES_SLOW_COUNT_BRIEF = 'The number of slow frames rendered during the lifetime of the span.';

export const APP_VITALS_FRAMES_SLOW_RATE_BRIEF =
  'The fraction of rendered frames that were slow, calculated as `app.vitals.frames.slow.count` divided by `app.vitals.frames.total.count`. This is computed by Relay.';

export const APP_VITALS_FRAMES_TOTAL_COUNT_BRIEF =
  'The number of total frames rendered during the lifetime of the span.';

export const APP_VITALS_STALL_DURATION_BRIEF =
  'The combined duration of all stalls in milliseconds. Only applies to React Native. This is computed by Relay.';

export const APP_VITALS_STALL_PERCENTAGE_BRIEF =
  'The fraction of transaction duration during which the app was stalled, between 0.0 and 1.0. For example, 0.8 represents 80%. Only applies to React Native. This is computed by Relay.';

export const APP_VITALS_START_COLD_VALUE_BRIEF = 'The duration of a cold app start in milliseconds';

export const APP_VITALS_START_PREWARMED_BRIEF = 'Whether the app start was prewarmed.';

export const APP_VITALS_START_REASON_BRIEF = 'The reason that triggered the app start.';

export const APP_VITALS_START_SCREEN_BRIEF =
  'The screen that is rendered when the app start is complete. This is the screen the user first sees and can interact with after launch. The absence of this attribute on the app start span indicates a background app start where no UI was rendered.';

export const APP_VITALS_START_TYPE_BRIEF = 'The type of app start, for example `cold` or `warm`';

export const APP_VITALS_START_WARM_VALUE_BRIEF = 'The duration of a warm app start in milliseconds';

export const APP_VITALS_TTFD_VALUE_BRIEF = 'The duration of time to full display in milliseconds';

export const APP_VITALS_TTID_VALUE_BRIEF = 'The duration of time to initial display in milliseconds';

export const ART_GC_BLOCKING_COUNT_BRIEF =
  'Total number of blocking (stop-the-world) garbage collections performed by the Android Runtime';

export const ART_GC_BLOCKING_TIME_BRIEF =
  'Total time spent in blocking (stop-the-world) garbage collections by the Android Runtime, in milliseconds';

export const ART_GC_PRE_OOME_COUNT_BRIEF =
  'Total number of garbage collections triggered as a last resort before an OutOfMemoryError by the Android Runtime';

export const ART_GC_TOTAL_COUNT_BRIEF = 'Total number of garbage collections performed by the Android Runtime';

export const ART_GC_TOTAL_TIME_BRIEF = 'Total time spent in garbage collection by the Android Runtime, in milliseconds';

export const ART_GC_WAITING_TIME_BRIEF =
  'Total time threads spent waiting for garbage collection to complete in the Android Runtime, in milliseconds';

export const ART_MEMORY_FREE_BRIEF =
  'Free memory available to the process as reported by the Android Runtime, in bytes';

export const ART_MEMORY_FREE_UNTIL_GC_BRIEF =
  'Free memory available before a garbage collection would be triggered by the Android Runtime, in bytes';

export const ART_MEMORY_FREE_UNTIL_OOME_BRIEF =
  'Free memory available before an OutOfMemoryError would be thrown by the Android Runtime, in bytes';

export const ART_MEMORY_MAX_BRIEF =
  'Maximum memory the process is allowed to use as reported by the Android Runtime, in bytes';

export const ART_MEMORY_TOTAL_BRIEF =
  'Total memory currently allocated to the process by the Android Runtime, in bytes';

export const AWS_CLOUDWATCH_LOGS_LOG_GROUP_BRIEF = 'The name of the CloudWatch Logs log group';

export const AWS_CLOUDWATCH_LOGS_LOG_STREAM_BRIEF = 'The name of the CloudWatch Logs log stream';

export const AWS_CLOUDWATCH_LOGS_URL_BRIEF = 'The URL to the CloudWatch Logs log group';

export const AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS_BRIEF =
  'The JSON-serialized value of each item in the `AttributeDefinitions` request field.';

export const AWS_DYNAMODB_CONSISTENT_READ_BRIEF = 'The value of the `ConsistentRead` request parameter.';

export const AWS_DYNAMODB_CONSUMED_CAPACITY_BRIEF =
  'The JSON-serialized value of each item in the `ConsumedCapacity` response field.';

export const AWS_DYNAMODB_COUNT_BRIEF = 'The value of the `Count` response parameter.';

export const AWS_DYNAMODB_EXCLUSIVE_START_TABLE_BRIEF = 'The value of the `ExclusiveStartTableName` request parameter.';

export const AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES_BRIEF =
  'The JSON-serialized value of each item of the `GlobalSecondaryIndexes` request field.';

export const AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES_BRIEF =
  'The JSON-serialized value of each item in the `GlobalSecondaryIndexUpdates` request field.';

export const AWS_DYNAMODB_INDEX_NAME_BRIEF = 'The value of the `IndexName` request parameter.';

export const AWS_DYNAMODB_ITEM_COLLECTION_METRICS_BRIEF =
  'The JSON-serialized value of the `ItemCollectionMetrics` response field.';

export const AWS_DYNAMODB_LIMIT_BRIEF = 'The value of the `Limit` request parameter.';

export const AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES_BRIEF =
  'The JSON-serialized value of each item of the `LocalSecondaryIndexes` request field.';

export const AWS_DYNAMODB_PROJECTION_BRIEF = 'The value of the `ProjectionExpression` request parameter.';

export const AWS_DYNAMODB_PROVISIONED_READ_CAPACITY_BRIEF =
  'The value of the `ProvisionedThroughput.ReadCapacityUnits` request parameter.';

export const AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY_BRIEF =
  'The value of the `ProvisionedThroughput.WriteCapacityUnits` request parameter.';

export const AWS_DYNAMODB_SCANNED_COUNT_BRIEF = 'The value of the `ScannedCount` response parameter.';

export const AWS_DYNAMODB_SCAN_FORWARD_BRIEF = 'The value of the `ScanIndexForward` request parameter.';

export const AWS_DYNAMODB_SEGMENT_BRIEF = 'The value of the `Segment` request parameter.';

export const AWS_DYNAMODB_SELECT_BRIEF = 'The value of the `Select` request parameter.';

export const AWS_DYNAMODB_TABLE_COUNT_BRIEF = 'The number of items in the `TableNames` response parameter.';

export const AWS_DYNAMODB_TABLE_NAMES_BRIEF = 'The keys in the `RequestItems` object field.';

export const AWS_DYNAMODB_TOTAL_SEGMENTS_BRIEF = 'The value of the `TotalSegments` request parameter.';

export const AWS_EXTENDED_REQUEST_ID_BRIEF = 'The AWS extended request ID as returned in the response headers.';

export const AWS_KINESIS_STREAM_NAME_BRIEF = 'The name of the AWS Kinesis stream the request refers to.';

export const _AWS_KINESIS_STREAM_NAME_BRIEF = 'The name of the AWS Kinesis stream the request refers to.';

export const AWS_LAMBDA_AWS_REQUEST_ID_BRIEF = 'The AWS request ID as received by the Lambda function runtime';

export const AWS_LAMBDA_EXECUTION_DURATION_IN_MILLIS_BRIEF =
  'The execution duration of the Lambda function invocation in milliseconds';

export const AWS_LAMBDA_FUNCTION_NAME_BRIEF = 'The name of the Lambda function';

export const AWS_LAMBDA_FUNCTION_VERSION_BRIEF = 'The version of the Lambda function';

export const AWS_LAMBDA_INVOKED_ARN_BRIEF = 'The full ARN of the Lambda function that was invoked';

export const AWS_LAMBDA_INVOKED_FUNCTION_ARN_BRIEF = 'The full ARN of the Lambda function that was invoked';

export const AWS_LAMBDA_REMAINING_TIME_IN_MILLIS_BRIEF =
  'The remaining time in milliseconds before the Lambda function times out';

export const AWS_LOG_GROUP_NAMES_BRIEF = 'The name(s) of the AWS log group(s) an application is writing to.';

export const AWS_LOG_STREAM_NAMES_BRIEF = 'The name(s) of the AWS log stream(s) an application is writing to.';

export const AWS_OPERATION_NAME_BRIEF = 'The name of the API operation invoked on an AWS service.';

export const AWS_REGION_BRIEF = 'The geographical region the AWS resource is running';

export const AWS_REQUEST_EXTENDED_ID_BRIEF = 'The AWS extended request ID as returned in the response headers.';

export const AWS_REQUEST_ID_BRIEF = 'The AWS request ID as returned in the response headers.';

export const _AWS_REQUEST_ID_BRIEF = 'The AWS request ID as returned in the response headers.';

export const AWS_REQUEST_URL_BRIEF = 'The URL of the AWS API request.';

export const AWS_S3_BUCKET_BRIEF = 'The S3 bucket name the request refers to.';

export const AWS_SECRETSMANAGER_SECRET_ARN_BRIEF = 'The ARN of the Secret stored in Secrets Manager.';

export const AWS_SNS_TOPIC_ARN_BRIEF =
  'The ARN of the AWS SNS Topic. An Amazon SNS topic is a logical access point that acts as a communication channel.';

export const AWS_STEP_FUNCTIONS_ACTIVITY_ARN_BRIEF = 'The ARN of the AWS Step Functions Activity.';

export const AWS_STEP_FUNCTIONS_STATE_MACHINE_ARN_BRIEF = 'The ARN of the AWS Step Functions State Machine.';

export const BLOCKED_MAIN_THREAD_BRIEF = 'Whether the main thread was blocked by the span.';

export const BROWSER_BFCACHE_FRAME_BRIEF =
  "Which frame in the page's frame tree a back/forward cache not-restored reason originated from: the top document or a child frame.";

export const BROWSER_BFCACHE_NOT_RESTORED_REASON_COUNT_BRIEF =
  'The number of reported reasons a page was not restored from the back/forward cache on a back/forward navigation. 0 when the browser reported no reasons (e.g. non-Chromium browsers).';

export const BROWSER_BFCACHE_OUTCOME_BRIEF =
  "Whether a back/forward navigation was restored from the browser's back/forward cache (bfcache). 'hit' means the page was restored; 'miss' means it was reloaded.";

export const BROWSER_BFCACHE_REASON_BRIEF =
  'A browser-reported reason a page was not restored from the back/forward cache on a back/forward navigation, taken from the notRestoredReasons API. Reported per reason (a single miss can have several). Currently Chromium-only.';

export const BROWSER_NAME_BRIEF = 'The name of the browser.';

export const BROWSER_PERFORMANCE_NAVIGATION_ACTIVATION_START_BRIEF =
  'The time between initiating a navigation to a page and the browser activating the page';

export const BROWSER_PERFORMANCE_TIME_ORIGIN_BRIEF =
  "The browser's performance.timeOrigin timestamp representing the time when the pageload was initiated";

export const BROWSER_REPORT_TYPE_BRIEF = 'A browser report sent via reporting API..';

export const BROWSER_SCRIPT_INVOKER_BRIEF = 'How a script was called in the browser.';

export const BROWSER_SCRIPT_INVOKER_TYPE_BRIEF = 'Browser script entry point type.';

export const BROWSER_SCRIPT_SOURCE_CHAR_POSITION_BRIEF =
  'A number representing the script character position of the script.';

export const BROWSER_VERSION_BRIEF = 'The version of the browser.';

export const BROWSER_WEB_VITAL_CLS_REPORT_EVENT_BRIEF =
  'The event that caused the SDK to report CLS (pagehide or navigation)';

export const BROWSER_WEB_VITAL_CLS_SOURCE_KEY_BRIEF =
  'The HTML elements or components responsible for the layout shift. <key> is a numeric index from 1 to N';

export const BROWSER_WEB_VITAL_CLS_VALUE_BRIEF = 'The value of the recorded Cumulative Layout Shift (CLS) web vital';

export const BROWSER_WEB_VITAL_FCP_VALUE_BRIEF =
  'The time it takes for the browser to render the first piece of meaningful content on the screen';

export const BROWSER_WEB_VITAL_FP_VALUE_BRIEF =
  'The time in milliseconds it takes for the browser to render the first pixel on the screen';

export const BROWSER_WEB_VITAL_INP_VALUE_BRIEF = 'The value of the recorded Interaction to Next Paint (INP) web vital';

export const BROWSER_WEB_VITAL_LCP_ELEMENT_BRIEF =
  'The HTML element selector or component name for which LCP was reported';

export const BROWSER_WEB_VITAL_LCP_ID_BRIEF = 'The id of the dom element responsible for the largest contentful paint';

export const BROWSER_WEB_VITAL_LCP_LOAD_TIME_BRIEF = 'The time it took for the LCP element to be loaded';

export const BROWSER_WEB_VITAL_LCP_RENDER_TIME_BRIEF = 'The time it took for the LCP element to be rendered';

export const BROWSER_WEB_VITAL_LCP_REPORT_EVENT_BRIEF =
  'The event that caused the SDK to report LCP (pagehide or navigation)';

export const BROWSER_WEB_VITAL_LCP_SIZE_BRIEF = 'The size of the largest contentful paint element';

export const BROWSER_WEB_VITAL_LCP_URL_BRIEF =
  'The url of the dom element responsible for the largest contentful paint';

export const BROWSER_WEB_VITAL_LCP_VALUE_BRIEF = 'The value of the recorded Largest Contentful Paint (LCP) web vital';

export const BROWSER_WEB_VITAL_TTFB_REQUEST_TIME_BRIEF =
  "The time it takes for the server to process the initial request and send the first byte of a response to the user's browser";

export const BROWSER_WEB_VITAL_TTFB_VALUE_BRIEF =
  'The value of the recorded Time To First Byte (TTFB) web vital in Milliseconds';

export const CACHE_HIT_BRIEF = 'If the cache was hit during this span.';

export const CACHE_ITEM_SIZE_BRIEF = 'The size of the requested item in the cache. In bytes.';

export const CACHE_KEY_BRIEF = 'The key of the cache accessed.';

export const CACHE_OPERATION_BRIEF = 'The operation being performed on the cache.';

export const CACHE_TTL_BRIEF = 'The ttl of the cache in seconds';

export const CACHE_WRITE_BRIEF = 'If the cache operation resulted in a write to the cache.';

export const CHANNEL_BRIEF = 'The channel name that is being used.';

export const CLIENT_ADDRESS_BRIEF =
  'Client address - domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.';

export const CLIENT_PORT_BRIEF = 'Client port number.';

export const CLOUDFLARE_D1_DURATION_BRIEF = 'The duration of a Cloudflare D1 operation.';

export const CLOUDFLARE_D1_QUERY_TYPE_BRIEF = 'The type of query executed in a Cloudflare D1 operation';

export const CLOUDFLARE_D1_ROWS_READ_BRIEF = 'The number of rows read in a Cloudflare D1 operation.';

export const CLOUDFLARE_D1_ROWS_WRITTEN_BRIEF = 'The number of rows written in a Cloudflare D1 operation.';

export const CLOUDFLARE_DURABLE_OBJECT_QUERY_BINDINGS_BRIEF =
  'The number of bound parameters passed to the SQL exec call.';

export const CLOUDFLARE_DURABLE_OBJECT_RESPONSE_ROWS_READ_BRIEF =
  'The number of rows read by a Cloudflare Durable Object SQL operation.';

export const CLOUDFLARE_DURABLE_OBJECT_RESPONSE_ROWS_WRITTEN_BRIEF =
  'The number of rows written by a Cloudflare Durable Object SQL operation.';

export const CLOUDFLARE_R2_BUCKET_BRIEF = 'The name of the Cloudflare R2 bucket binding';

export const CLOUDFLARE_R2_OPERATION_BRIEF = 'The R2 API operation being performed';

export const CLOUDFLARE_R2_REQUEST_DELIMITER_BRIEF = 'The delimiter used to group objects in an R2 list operation';

export const CLOUDFLARE_R2_REQUEST_KEY_BRIEF = 'The object key used in the R2 operation';

export const CLOUDFLARE_R2_REQUEST_PART_NUMBER_BRIEF = 'The part number in a multipart upload operation';

export const CLOUDFLARE_R2_REQUEST_PREFIX_BRIEF = 'The prefix used to filter objects in an R2 list operation';

export const CLOUDFLARE_WORKFLOW_ATTEMPT_BRIEF = 'The current attempt number for a Cloudflare Workflow step';

export const CLOUDFLARE_WORKFLOW_RETRIES_BACKOFF_BRIEF = 'The backoff strategy for Cloudflare Workflow step retries';

export const CLOUDFLARE_WORKFLOW_RETRIES_DELAY_BRIEF = 'The delay between Cloudflare Workflow step retries';

export const CLOUDFLARE_WORKFLOW_RETRIES_LIMIT_BRIEF = 'The maximum number of retries for a Cloudflare Workflow step';

export const CLOUDFLARE_WORKFLOW_TIMEOUT_BRIEF = 'The timeout duration for a Cloudflare Workflow step';

export const CLOUD_ACCOUNT_ID_BRIEF = 'The cloud account ID the resource is assigned to';

export const CLOUD_AVAILABILITY_ZONE_BRIEF =
  'Cloud regions often have multiple, isolated locations known as zones to increase availability';

export const CLOUD_PLATFORM_BRIEF = 'The cloud platform in use';

export const CLOUD_PROVIDER_BRIEF = 'Name of the cloud provider';

export const CLOUD_REGION_BRIEF = 'The geographical region the resource is running';

export const CLOUD_RESOURCE_ID_BRIEF = 'Cloud provider-specific native identifier of the monitored cloud resource';

export const CLS_BRIEF = 'The value of the recorded Cumulative Layout Shift (CLS) web vital';

export const CLS_SOURCE_KEY_BRIEF =
  'The HTML elements or components responsible for the layout shift. <key> is a numeric index from 1 to N';

export const CODE_BRIEF = 'Status code of the RPC returned by the RPC server or generated by the client.';

export const CODE_FILEPATH_BRIEF =
  'The source code file name that identifies the code unit as uniquely as possible (preferably an absolute file path).';

export const CODE_FILE_PATH_BRIEF =
  'The source code file name that identifies the code unit as uniquely as possible (preferably an absolute file path).';

export const CODE_FUNCTION_BRIEF =
  "The method or function name, or equivalent (usually rightmost part of the code unit's name).";

export const CODE_FUNCTION_NAME_BRIEF = 'The method or function fully-qualified name without arguments.';

export const CODE_LINENO_BRIEF =
  'The line number in code.filepath best representing the operation. It SHOULD point within the code unit named in code.function';

export const CODE_LINE_NUMBER_BRIEF =
  'The line number in code.filepath best representing the operation. It SHOULD point within the code unit named in code.function';

export const CODE_NAMESPACE_BRIEF =
  "The 'namespace' within which code.function is defined. Usually the qualified class or module name, such that code.namespace + some separator + code.function form a unique identifier for the code unit.";

export const CONNECTIONTYPE_BRIEF =
  'Specifies the type of the current connection (e.g. wifi, ethernet, cellular , etc).';

export const CONNECTION_RTT_BRIEF =
  'Specifies the estimated effective round-trip time of the current connection, in milliseconds.';

export const CULTURE_CALENDAR_BRIEF = 'The calendar system used by the culture.';

export const CULTURE_DISPLAY_NAME_BRIEF = 'Human readable name of the culture.';

export const CULTURE_IS_24_HOUR_FORMAT_BRIEF = 'Whether the culture uses 24-hour time format.';

export const CULTURE_LOCALE_BRIEF = 'The locale identifier following RFC 4646.';

export const CULTURE_TIMEZONE_BRIEF = 'The timezone of the culture, as a geographic timezone identifier.';

export const DB_COLLECTION_NAME_BRIEF = 'The name of a collection (table, container) within the database.';

export const DB_DRIVER_NAME_BRIEF = 'The name of the driver used for the database connection.';

export const DB_MONGODB_COLLECTION_BRIEF = 'The MongoDB collection being accessed.';

export const DB_NAME_BRIEF = 'The name of the database being accessed.';

export const DB_NAMESPACE_BRIEF = 'The name of the database being accessed.';

export const DB_OPERATION_BRIEF = 'The name of the operation being executed.';

export const DB_OPERATION_BATCH_SIZE_BRIEF =
  'The number of queries included in a batch operation. Operations are only considered batches when they contain two or more operations, and so db.operation.batch.size SHOULD never be 1.';

export const DB_OPERATION_NAME_BRIEF = 'The name of the operation being executed.';

export const DB_PARAMS_BRIEF = 'The query bindings for a database request.';

export const DB_QUERY_PARAMETER_KEY_BRIEF =
  'A query parameter used in db.query.text, with <key> being the parameter name, and the attribute value being a string representation of the parameter value.';

export const DB_QUERY_SUMMARY_BRIEF =
  'A shortened representation of operation(s) in the full query. This attribute must be low-cardinality and should only contain the operation table names.';

export const DB_QUERY_TEXT_BRIEF =
  'The database parameterized query being executed. Any parameter values (filters, insertion values, etc) should be replaced with parameter placeholders. If applicable, use `db.query.parameter.<key>` to add the parameter value.';

export const DB_REDIS_CONNECTION_BRIEF = 'The redis connection name.';

export const DB_REDIS_KEY_BRIEF = 'The key the Redis command is operating on.';

export const DB_REDIS_PARAMETERS_BRIEF = 'The array of command parameters given to a redis command.';

export const DB_RESPONSE_STATUS_CODE_BRIEF =
  'Database response status code. The status code returned by the database. Usually it represents an error code, but may also represent partial success, warning, or differentiate between various types of successful outcomes.';

export const DB_SQL_BINDINGS_BRIEF = 'The array of query bindings.';

export const DB_STATEMENT_BRIEF = 'The database statement being executed.';

export const DB_STORED_PROCEDURE_NAME_BRIEF = 'The name of a stored procedure being called.';

export const DB_SYSTEM_BRIEF =
  'An identifier for the database management system (DBMS) product being used. See [OpenTelemetry docs](https://github.com/open-telemetry/semantic-conventions/blob/main/docs/database/database-spans.md#notes-and-well-known-identifiers-for-dbsystem) for a list of well-known identifiers.';

export const DB_SYSTEM_NAME_BRIEF =
  'An identifier for the database management system (DBMS) product being used. See [OpenTelemetry docs](https://github.com/open-telemetry/semantic-conventions/blob/main/docs/database/database-spans.md#notes-and-well-known-identifiers-for-dbsystem) for a list of well-known identifiers.';

export const DB_USER_BRIEF = 'The database user.';

export const DEVICEMEMORY_BRIEF =
  'The estimated total memory capacity of the device, only a rough estimation in gigabytes.';

export const DEVICE_ARCHS_BRIEF = 'The CPU architectures of the device.';

export const DEVICE_BATTERY_LEVEL_BRIEF = 'The battery level of the device as a percentage (0-100).';

export const DEVICE_BATTERY_TEMPERATURE_BRIEF = 'The battery temperature of the device in Celsius.';

export const DEVICE_BOOT_TIME_BRIEF = 'A formatted UTC timestamp when the system was booted.';

export const DEVICE_BRAND_BRIEF = 'The brand of the device.';

export const DEVICE_CHARGING_BRIEF = 'Whether the device was charging or not.';

export const DEVICE_CHIPSET_BRIEF = 'The chipset of the device.';

export const DEVICE_CLASS_BRIEF =
  'The classification of the device. For example, `low`, `medium`, or `high`. Typically inferred by Relay - SDKs generally do not need to set this directly.';

export const DEVICE_CONNECTION_TYPE_BRIEF = 'The internet connection type currently being used by the device.';

export const DEVICE_CPU_DESCRIPTION_BRIEF = 'A description of the CPU of the device.';

export const DEVICE_EXTERNAL_FREE_STORAGE_BRIEF = 'External storage free size in bytes.';

export const DEVICE_EXTERNAL_STORAGE_SIZE_BRIEF = 'External storage total size in bytes.';

export const DEVICE_FAMILY_BRIEF = 'The family of the device.';

export const DEVICE_FREE_MEMORY_BRIEF = 'Free system memory in bytes.';

export const DEVICE_FREE_STORAGE_BRIEF = 'Free device storage in bytes.';

export const DEVICE_ID_BRIEF = 'Unique device identifier.';

export const DEVICE_LOCALE_BRIEF = 'The locale of the device.';

export const DEVICE_LOW_MEMORY_BRIEF = 'Whether the device was low on memory.';

export const DEVICE_LOW_POWER_MODE_BRIEF = 'Whether the device is in Low Power Mode.';

export const DEVICE_MANUFACTURER_BRIEF = 'The manufacturer of the device.';

export const DEVICE_MEMORY_ESTIMATED_CAPACITY_BRIEF =
  'The estimated total memory capacity of the device, only a rough estimation in gigabytes. Browsers report estimations in buckets of powers of 2, mostly capped at 8 GB';

export const DEVICE_MEMORY_SIZE_BRIEF = 'Total system memory available in bytes.';

export const DEVICE_MODEL_BRIEF = 'The model of the device.';

export const DEVICE_MODEL_ID_BRIEF = 'An internal hardware revision to identify the device exactly.';

export const DEVICE_NAME_BRIEF =
  'The name of the device. On mobile, this is the user-assigned device name. On servers and desktops, this is typically the hostname.';

export const DEVICE_ONLINE_BRIEF = 'Whether the device was online or not.';

export const DEVICE_ORIENTATION_BRIEF = 'The orientation of the device, either "portrait" or "landscape".';

export const DEVICE_PROCESSOR_COUNT_BRIEF = 'Number of "logical processors".';

export const DEVICE_PROCESSOR_FREQUENCY_BRIEF = 'Processor frequency in MHz.';

export const DEVICE_SCREEN_DENSITY_BRIEF = 'The screen density of the device.';

export const DEVICE_SCREEN_DPI_BRIEF = 'The screen density in dots-per-inch (DPI) of the device.';

export const DEVICE_SCREEN_HEIGHT_PIXELS_BRIEF = 'The height of the device screen in pixels.';

export const DEVICE_SCREEN_WIDTH_PIXELS_BRIEF = 'The width of the device screen in pixels.';

export const DEVICE_SIMULATOR_BRIEF = 'Whether the device is a simulator or an actual device.';

export const DEVICE_STORAGE_SIZE_BRIEF = 'Total device storage in bytes.';

export const DEVICE_THERMAL_STATE_BRIEF =
  "The thermal state of the device. Based on Apple's `ProcessInfo.ThermalState` enum: `nominal`, `fair`, `serious`, or `critical`.";

export const DEVICE_TIMEZONE_BRIEF = 'The timezone of the device.';

export const DEVICE_USABLE_MEMORY_BRIEF = 'Memory usable for the app in bytes.';

export const DIST_BRIEF = 'The sentry dist.';

export const DJANGO_FUNCTION_NAME_BRIEF = 'The fully qualified name of a function used in a Django context.';

export const DJANGO_MIDDLEWARE_NAME_BRIEF = 'The name of the Django middleware.';

export const EFFECTIVECONNECTIONTYPE_BRIEF =
  'Specifies the estimated effective type of the current connection (e.g. slow-2g, 2g, 3g, 4g).';

export const ENVIRONMENT_BRIEF = 'The sentry environment.';

export const ERROR_TYPE_BRIEF = 'Describes a class of error the operation ended with.';

export const EVENT_ID_BRIEF = 'The unique identifier for this event (log record)';

export const EVENT_NAME_BRIEF = 'The name that uniquely identifies this event (log record)';

export const EXCEPTION_ESCAPED_BRIEF =
  'SHOULD be set to true if the exception event is recorded at a point where it is known that the exception is escaping the scope of the span.';

export const EXCEPTION_MESSAGE_BRIEF = 'The error message.';

export const EXCEPTION_STACKTRACE_BRIEF =
  'A stacktrace as a string in the natural representation for the language runtime. The representation is to be determined and documented by each language SIG.';

export const EXCEPTION_TYPE_BRIEF =
  'The type of the exception (its fully-qualified class name, if applicable). The dynamic type of the exception should be preferred over the static type in languages that support it.';

export const FAAS_COLDSTART_BRIEF =
  'A boolean that is true if the serverless function is executed for the first time (aka cold-start).';

export const FAAS_CRON_BRIEF = 'A string containing the schedule period as Cron Expression.';

export const FAAS_DURATION_IN_MS_BRIEF = 'The duration a function took to run, in milliseconds.';

export const FAAS_ENTRY_POINT_BRIEF = "The code that's run when the cloud provider invokes your function.";

export const FAAS_EXECUTION_BRIEF = 'The execution ID of the current function execution.';

export const FAAS_ID_BRIEF = 'The unique ID of the single function that this runtime instance executes.';

export const FAAS_IDENTITY_BRIEF =
  'The Service Account (GCP), IAM Execution Role (AWS), or Managed Identity (Azure) used by the serverless function when interacting with other cloud services';

export const FAAS_INVOCATION_ID_BRIEF = 'The invocation ID of the current function invocation.';

export const FAAS_INVOKED_NAME_BRIEF = 'The name of the invoked function.';

export const FAAS_INVOKED_PROVIDER_BRIEF = 'The cloud provider of the invoked function.';

export const FAAS_INVOKED_REGION_BRIEF = 'The cloud region of the invoked function.';

export const FAAS_NAME_BRIEF = 'The name of the serverless function';

export const FAAS_TIME_BRIEF =
  'A string containing the function invocation time in the ISO 8601 format expressed in UTC.';

export const FAAS_TRIGGER_BRIEF = 'Type of the trigger which caused this function invocation.';

export const FAAS_VERSION_BRIEF = 'The version of the function that was invoked';

export const FCP_BRIEF =
  'The time it takes for the browser to render the first piece of meaningful content on the screen';

export const FILE_PATH_BRIEF = 'Path to the file.';

export const FILE_SIZE_BRIEF = 'File size in bytes.';

export const FLAG_EVALUATION_KEY_BRIEF =
  'An instance of a feature flag evaluation. The value of this attribute is the boolean representing the evaluation result. The <key> suffix is the name of the feature flag.';

export const FP_BRIEF = 'The time it takes for the browser to render the first pixel on the screen';

export const FRAMES_DELAY_BRIEF =
  'The sum of all delayed frame durations in seconds during the lifetime of the span. For more information see [frames delay](https://develop.sentry.dev/sdk/performance/frames-delay/).';

export const FRAMES_FROZEN_BRIEF = 'The number of frozen frames rendered during the lifetime of the span.';

export const FRAMES_FROZEN_RATE_BRIEF =
  'The rate of frozen frames, or `app.vitals.frames.frozen.count` divided by `app.vitals.frames.total.count`. This is computed by Relay.';

export const FRAMES_SLOW_BRIEF = 'The number of slow frames rendered during the lifetime of the span.';

export const FRAMES_SLOW_RATE_BRIEF =
  'The rate of slow frames, or `app.vitals.frames.slow.count` divided by `app.vitals.frames.total.count`. This is computed by Relay.';

export const FRAMES_TOTAL_BRIEF = 'The number of total frames rendered during the lifetime of the span.';

export const FS_ERROR_BRIEF = 'The error message of a file system error.';

export const GCP_FUNCTION_CONTEXT_EVENT_ID_BRIEF = 'The event ID from the legacy GCP Cloud Function context (1st gen)';

export const GCP_FUNCTION_CONTEXT_EVENT_TYPE_BRIEF = 'The type of the GCP Cloud Function event';

export const GCP_FUNCTION_CONTEXT_ID_BRIEF =
  'The unique event ID from the GCP CloudEvents context (2nd gen Cloud Functions)';

export const GCP_FUNCTION_CONTEXT_RESOURCE_BRIEF = 'The resource that triggered the GCP Cloud Function event';

export const GCP_FUNCTION_CONTEXT_SOURCE_BRIEF = 'The source of the GCP Cloud Function event';

export const GCP_FUNCTION_CONTEXT_SPECVERSION_BRIEF =
  'The CloudEvents specification version of the GCP Cloud Function event';

export const GCP_FUNCTION_CONTEXT_TIME_BRIEF = 'The timestamp of the GCP Cloud Function event';

export const GCP_FUNCTION_CONTEXT_TIMESTAMP_BRIEF = 'The legacy timestamp of the GCP Cloud Function event';

export const GCP_FUNCTION_CONTEXT_TYPE_BRIEF = 'The type of the GCP Cloud Function event context';

export const GCP_PROJECT_ID_BRIEF = 'The ID of the project in GCP that this resource is associated with';

export const GCP_REGION_BRIEF = 'The geographical region the GCP resource is running';

export const GEN_AI_AGENT_NAME_BRIEF = 'The name of the agent being used.';

export const GEN_AI_CONTEXT_UTILIZATION_BRIEF = 'The fraction of the model context window utilized by this generation.';

export const GEN_AI_CONTEXT_WINDOW_SIZE_BRIEF =
  'The maximum context window size supported by the model for this generation.';

export const GEN_AI_CONVERSATION_ID_BRIEF =
  'The unique identifier for a conversation (session, thread), used to store and correlate messages within this conversation.';

export const GEN_AI_COST_CACHE_CREATION_INPUT_TOKENS_BRIEF = 'The cost of input tokens written to cache in USD.';

export const GEN_AI_COST_CACHE_READ_INPUT_TOKENS_BRIEF = 'The cost of cached input tokens in USD.';

export const GEN_AI_COST_INPUT_TOKENS_BRIEF =
  'The total cost of all input tokens in USD (includes cached and cache creation tokens).';

export const GEN_AI_COST_OUTPUT_TOKENS_BRIEF =
  'The total cost of all output tokens in USD (includes reasoning tokens).';

export const GEN_AI_COST_REASONING_OUTPUT_TOKENS_BRIEF = 'The cost of reasoning output tokens in USD.';

export const GEN_AI_COST_TOTAL_TOKENS_BRIEF = 'The total cost for the tokens used.';

export const GEN_AI_EMBEDDINGS_INPUT_BRIEF = 'The input to the embeddings model.';

export const GEN_AI_FUNCTION_ID_BRIEF =
  'Framework-specific tracing label for the execution of a function or other unit of execution in a generative AI system.';

export const GEN_AI_INPUT_MESSAGES_BRIEF =
  'The messages passed to the model. It has to be a stringified version of an array of objects. The `role` attribute of each object must be `"user"`, `"assistant"`, `"tool"`, or `"system"`. For messages of the role `"tool"`, the `content` can be a string or an arbitrary object with information about the tool call. For other messages the `content` can be either a string or a list of objects in the format `{type: "text", text:"..."}`.';

export const GEN_AI_OPERATION_NAME_BRIEF =
  "The name of the operation being performed. It has the following list of well-known values: 'chat', 'create_agent', 'embeddings', 'execute_tool', 'generate_content', 'invoke_agent', 'text_completion'. If one of them applies, then that value MUST be used. Otherwise a custom value MAY be used.";

export const GEN_AI_OPERATION_TYPE_BRIEF =
  "The type of AI operation. Must be one of 'agent' (invoke_agent and create_agent spans), 'ai_client' (any LLM call), 'tool' (execute_tool spans), 'handoff' (handoff spans), 'other' (input and output processors, skill loading, guardrails etc.) . Added during ingestion based on span.op and gen_ai.operation.type. Used to filter and aggregate data in the UI";

export const GEN_AI_OUTPUT_MESSAGES_BRIEF =
  "The model's response messages. It has to be a stringified version of an array of message objects, which can include text responses and tool calls.";

export const GEN_AI_PIPELINE_NAME_BRIEF = 'Name of the AI pipeline or chain being executed.';

export const GEN_AI_PROMPT_BRIEF = 'The input messages sent to the model';

export const GEN_AI_PROMPT_NAME_BRIEF = 'The name of the prompt that uniquely identifies it.';

export const GEN_AI_PROVIDER_NAME_BRIEF =
  'The Generative AI provider as identified by the client or server instrumentation.';

export const GEN_AI_REQUEST_AVAILABLE_TOOLS_BRIEF =
  'The available tools for the model. It has to be a stringified version of an array of objects.';

export const GEN_AI_REQUEST_FREQUENCY_PENALTY_BRIEF =
  'Used to reduce repetitiveness of generated tokens. The higher the value, the stronger a penalty is applied to previously present tokens, proportional to how many times they have already appeared in the prompt or prior generation.';

export const GEN_AI_REQUEST_MAX_TOKENS_BRIEF = 'The maximum number of tokens to generate in the response.';

export const GEN_AI_REQUEST_MESSAGES_BRIEF =
  'The messages passed to the model. It has to be a stringified version of an array of objects. The `role` attribute of each object must be `"user"`, `"assistant"`, `"tool"`, or `"system"`. For messages of the role `"tool"`, the `content` can be a string or an arbitrary object with information about the tool call. For other messages the `content` can be either a string or a list of objects in the format `{type: "text", text:"..."}`.';

export const GEN_AI_REQUEST_MODEL_BRIEF = 'The model identifier being used for the request.';

export const GEN_AI_REQUEST_PRESENCE_PENALTY_BRIEF =
  'Used to reduce repetitiveness of generated tokens. Similar to frequency_penalty, except that this penalty is applied equally to all tokens that have already appeared, regardless of their exact frequencies.';

export const GEN_AI_REQUEST_REASONING_LEVEL_BRIEF =
  'The reasoning or thinking effort level requested for a GenAI model.';

export const GEN_AI_REQUEST_SEED_BRIEF =
  'The seed, ideally models given the same seed and same other parameters will produce the exact same output.';

export const GEN_AI_REQUEST_STOP_SEQUENCES_BRIEF =
  'List of sequences that the model will use to stop generating further tokens.';

export const GEN_AI_REQUEST_TEMPERATURE_BRIEF =
  'For an AI model call, the temperature parameter. Temperature essentially means how random the output will be.';

export const GEN_AI_REQUEST_TOP_K_BRIEF =
  'Limits the model to only consider the K most likely next tokens, where K is an integer (e.g., top_k=20 means only the 20 highest probability tokens are considered).';

export const GEN_AI_REQUEST_TOP_P_BRIEF =
  'Limits the model to only consider tokens whose cumulative probability mass adds up to p, where p is a float between 0 and 1 (e.g., top_p=0.7 means only tokens that sum up to 70% of the probability mass are considered).';

export const GEN_AI_RESPONSE_FINISH_REASON_BRIEF = 'The reason why the model stopped generating (singular form).';

export const GEN_AI_RESPONSE_FINISH_REASONS_BRIEF = 'The reason why the model stopped generating.';

export const GEN_AI_RESPONSE_ID_BRIEF = 'Unique identifier for the completion.';

export const GEN_AI_RESPONSE_MODEL_BRIEF = 'The vendor-specific ID of the model used.';

export const GEN_AI_RESPONSE_STREAMING_BRIEF =
  "Whether or not the AI model call's response was streamed back asynchronously";

export const GEN_AI_RESPONSE_TEXT_BRIEF =
  "The model's response text messages. It has to be a stringified version of an array of response text messages.";

export const GEN_AI_RESPONSE_TIME_TO_FIRST_CHUNK_BRIEF =
  'Time in seconds when the first response content chunk arrived in streaming responses.';

export const GEN_AI_RESPONSE_TIME_TO_FIRST_TOKEN_BRIEF =
  'Time in seconds when the first response content chunk arrived in streaming responses.';

export const GEN_AI_RESPONSE_TOKENS_PER_SECOND_BRIEF = 'The total output tokens per seconds throughput';

export const GEN_AI_RESPONSE_TOOL_CALLS_BRIEF =
  "The tool calls in the model's response. It has to be a stringified version of an array of objects.";

export const GEN_AI_SYSTEM_BRIEF = 'The provider of the model.';

export const GEN_AI_SYSTEM_INSTRUCTIONS_BRIEF = 'The system instructions passed to the model.';

export const GEN_AI_SYSTEM_MESSAGE_BRIEF = 'The system instructions passed to the model.';

export const GEN_AI_TOOL_CALL_ARGUMENTS_BRIEF =
  'The arguments of the tool call. It has to be a stringified version of the arguments to the tool.';

export const GEN_AI_TOOL_CALL_RESULT_BRIEF =
  'The result of the tool call. It has to be a stringified version of the result of the tool.';

export const GEN_AI_TOOL_DEFINITIONS_BRIEF =
  'The list of source system tool definitions available to the GenAI agent or model.';

export const GEN_AI_TOOL_DESCRIPTION_BRIEF = 'The description of the tool being used.';

export const GEN_AI_TOOL_INPUT_BRIEF =
  'The input of the tool being used. It has to be a stringified version of the input to the tool.';

export const GEN_AI_TOOL_MESSAGE_BRIEF = 'The response from a tool or function call passed to the model.';

export const GEN_AI_TOOL_NAME_BRIEF = 'Name of the tool utilized by the agent.';

export const GEN_AI_TOOL_OUTPUT_BRIEF =
  'The output of the tool being used. It has to be a stringified version of the output of the tool.';

export const GEN_AI_TOOL_TYPE_BRIEF = 'The type of tool being used.';

export const GEN_AI_USAGE_CACHE_CREATION_INPUT_TOKENS_BRIEF =
  'The number of tokens written to the cache when processing the AI input (prompt).';

export const GEN_AI_USAGE_CACHE_READ_INPUT_TOKENS_BRIEF =
  'The number of cached tokens used to process the AI input (prompt).';

export const GEN_AI_USAGE_COMPLETION_TOKENS_BRIEF = 'The number of tokens used in the GenAI response (completion).';

export const GEN_AI_USAGE_INPUT_TOKENS_BRIEF =
  'The number of tokens used to process the AI input (prompt) including cached input tokens.';

export const GEN_AI_USAGE_INPUT_TOKENS_CACHED_BRIEF =
  'The number of cached tokens used to process the AI input (prompt).';

export const GEN_AI_USAGE_INPUT_TOKENS_CACHE_WRITE_BRIEF =
  'The number of tokens written to the cache when processing the AI input (prompt).';

export const GEN_AI_USAGE_OUTPUT_TOKENS_BRIEF =
  'The number of tokens used for creating the AI output (including reasoning tokens).';

export const GEN_AI_USAGE_OUTPUT_TOKENS_REASONING_BRIEF =
  'The number of tokens used for reasoning to create the AI output.';

export const GEN_AI_USAGE_PROMPT_TOKENS_BRIEF = 'The number of tokens used in the GenAI input (prompt).';

export const GEN_AI_USAGE_REASONING_OUTPUT_TOKENS_BRIEF =
  'The number of tokens used for reasoning to create the AI output.';

export const GEN_AI_USAGE_TOTAL_TOKENS_BRIEF =
  'The total number of tokens used to process the prompt. (input tokens plus output todkens)';

export const GRAPHQL_DOCUMENT_BRIEF = 'The GraphQL document being executed.';

export const GRAPHQL_OPERATION_NAME_BRIEF = 'The name of the operation being executed.';

export const GRAPHQL_OPERATION_TYPE_BRIEF = 'The type of the operation being executed.';

export const GRPC_ERROR_BAD_REQUEST_FIELD_VIOLATIONS_BRIEF =
  'The individual field violations from a google.rpc.BadRequest error detail. Each entry is a JSON-encoded object with field, description, reason, and (optional) localized_message keys, mirroring google.rpc.BadRequest.FieldViolation.';

export const GRPC_ERROR_DEBUG_INFO_DETAIL_BRIEF =
  'Additional debugging information, such as a server-side stack trace, from a google.rpc.DebugInfo error detail. SDKs should only send this attribute when sendDefaultPii is enabled or dataCollection is configured accordingly.';

export const GRPC_ERROR_DEBUG_INFO_STACK_ENTRIES_BRIEF =
  'The server-side stack trace entries from a google.rpc.DebugInfo error detail. SDKs should only send this attribute when sendDefaultPii is enabled or dataCollection is configured accordingly.';

export const GRPC_ERROR_ERROR_INFO_DOMAIN_BRIEF =
  'The logical grouping to which the gRPC error reason belongs, from the google.rpc.ErrorInfo error detail.';

export const GRPC_ERROR_ERROR_INFO_METADATA_KEY_BRIEF =
  'Additional structured metadata attached to a google.rpc.ErrorInfo error detail, with <key> being the metadata key name. SDKs should only send this attribute when sendDefaultPii is enabled or dataCollection is configured accordingly.';

export const GRPC_ERROR_ERROR_INFO_REASON_BRIEF =
  'The reason for the gRPC error, as defined by the service that generated it, from the google.rpc.ErrorInfo error detail.';

export const GRPC_ERROR_PRECONDITION_FAILURE_VIOLATIONS_BRIEF =
  'The individual precondition violations from a google.rpc.PreconditionFailure error detail. Each entry is a JSON-encoded object with type, subject, and description keys. SDKs should only send this attribute when sendDefaultPii is enabled or dataCollection is configured accordingly, since violation subjects may identify specific resources or users.';

export const GRPC_ERROR_QUOTA_FAILURE_VIOLATIONS_BRIEF =
  'The individual quota violations from a google.rpc.QuotaFailure error detail. Each entry is a JSON-encoded object with subject, description, api_service, quota_metric, quota_id, quota_dimensions, quota_value, and (optional) future_quota_value keys, mirroring google.rpc.QuotaFailure.Violation. SDKs should only send this attribute when sendDefaultPii is enabled or dataCollection is configured accordingly, since violation subjects may identify specific resources or users.';

export const GRPC_ERROR_RESOURCE_INFO_DESCRIPTION_BRIEF =
  'A description of the error that occurred while accessing the resource, from a google.rpc.ResourceInfo error detail.';

export const GRPC_ERROR_RESOURCE_INFO_OWNER_BRIEF =
  'The owner of the resource being accessed (e.g. project or account owning it), from a google.rpc.ResourceInfo error detail. SDKs should only send this attribute when sendDefaultPii is enabled or dataCollection is configured accordingly.';

export const GRPC_ERROR_RESOURCE_INFO_RESOURCE_NAME_BRIEF =
  'The name of the resource being accessed, from a google.rpc.ResourceInfo error detail. SDKs should only send this attribute when sendDefaultPii is enabled or dataCollection is configured accordingly.';

export const GRPC_ERROR_RESOURCE_INFO_RESOURCE_TYPE_BRIEF =
  'The type of resource being accessed, from a google.rpc.ResourceInfo error detail.';

export const GRPC_ERROR_RETRY_INFO_RETRY_DELAY_MS_BRIEF =
  'How long the client should wait before retrying the gRPC call, in milliseconds, from the google.rpc.RetryInfo error detail.';

export const HARDWARECONCURRENCY_BRIEF = 'The number of logical CPU cores available.';

export const HTTP_CLIENT_IP_BRIEF =
  'Client address - domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.';

export const HTTP_DECODED_RESPONSE_CONTENT_LENGTH_BRIEF = 'The decoded body size of the response (in bytes).';

export const HTTP_FLAVOR_BRIEF = 'The actual version of the protocol used for network communication.';

export const HTTP_FRAGMENT_BRIEF =
  'The fragments present in the URI. Note that this contains the leading # character, while the `url.fragment` attribute does not.';

export const HTTP_HOST_BRIEF = 'The domain name.';

export const HTTP_METHOD_BRIEF = 'The HTTP method used.';

export const HTTP_QUERY_BRIEF =
  'The query string present in the URL. Note that this contains the leading ? character, while the `url.query` attribute does not.';

export const HTTP_REQUEST_BODY_DATA_BRIEF =
  'HTTP request body data. Can be given as string or structural data of any format.';

export const HTTP_REQUEST_CONNECTION_END_BRIEF =
  'The UNIX timestamp representing the time immediately after the browser finishes establishing the connection to the server to retrieve the resource. The timestamp value includes the time interval to establish the transport connection, as well as other time intervals such as TLS handshake and SOCKS authentication.';

export const HTTP_REQUEST_CONNECT_START_BRIEF =
  'The UNIX timestamp representing the time immediately before the user agent starts establishing the connection to the server to retrieve the resource.';

export const HTTP_REQUEST_DOMAIN_LOOKUP_END_BRIEF =
  'The UNIX timestamp representing the time immediately after the browser finishes the domain-name lookup for the resource.';

export const HTTP_REQUEST_DOMAIN_LOOKUP_START_BRIEF =
  'The UNIX timestamp representing the time immediately before the browser starts the domain name lookup for the resource.';

export const HTTP_REQUEST_FETCH_START_BRIEF =
  'The UNIX timestamp representing the time immediately before the browser starts to fetch the resource.';

export const HTTP_REQUEST_HEADER_KEY_BRIEF =
  'HTTP request headers, <key> being the normalized HTTP Header name (lowercase), the value being the header values.';

export const HTTP_REQUEST_METHOD_BRIEF = 'The HTTP method used.';

export const _HTTP_REQUEST_METHOD_BRIEF = 'The HTTP method used.';

export const HTTP_REQUEST_REDIRECT_END_BRIEF =
  'The UNIX timestamp representing the timestamp immediately after receiving the last byte of the response of the last redirect';

export const HTTP_REQUEST_REDIRECT_START_BRIEF =
  'The UNIX timestamp representing the start time of the fetch which that initiates the redirect.';

export const HTTP_REQUEST_REQUEST_START_BRIEF =
  'The UNIX timestamp representing the time immediately before the browser starts requesting the resource from the server, cache, or local resource. If the transport connection fails and the browser retires the request, the value returned will be the start of the retry request.';

export const HTTP_REQUEST_RESEND_COUNT_BRIEF =
  'The ordinal number of request resending attempt (for any reason, including redirects).';

export const HTTP_REQUEST_RESPONSE_END_BRIEF =
  'The UNIX timestamp representing the time immediately after the browser receives the last byte of the resource or immediately before the transport connection is closed, whichever comes first.';

export const HTTP_REQUEST_RESPONSE_START_BRIEF =
  'The UNIX timestamp representing the time immediately before the browser starts requesting the resource from the server, cache, or local resource. If the transport connection fails and the browser retires the request, the value returned will be the start of the retry request.';

export const HTTP_REQUEST_SAME_ORIGIN_BRIEF =
  "Indicates that a URL has the same origin as the current page's origin in the browser.";

export const HTTP_REQUEST_SECURE_CONNECTION_START_BRIEF =
  'The UNIX timestamp representing the time immediately before the browser starts the handshake process to secure the current connection. If a secure connection is not used, the property returns zero.';

export const HTTP_REQUEST_TIME_TO_FIRST_BYTE_BRIEF =
  "The time in seconds from the browser's timeorigin to when the first byte of the request's response was received. See https://web.dev/articles/ttfb#measure-resource-requests";

export const HTTP_REQUEST_WORKER_START_BRIEF =
  'The UNIX timestamp representing the timestamp immediately before dispatching the FetchEvent if a Service Worker thread is already running, or immediately before starting the Service Worker thread if it is not already running.';

export const HTTP_RESPONSE_BODY_SIZE_BRIEF = 'The encoded body size of the response (in bytes).';

export const HTTP_RESPONSE_CONTENT_LENGTH_BRIEF = 'The encoded body size of the response (in bytes).';

export const HTTP_RESPONSE_HEADER_CONTENT_LENGTH_BRIEF =
  'The size of the message body sent to the recipient (in bytes)';

export const HTTP_RESPONSE_HEADER_KEY_BRIEF =
  'HTTP response headers, <key> being the normalized HTTP Header name (lowercase), the value being the header values.';

export const HTTP_RESPONSE_SIZE_BRIEF = 'The transfer size of the response (in bytes).';

export const HTTP_RESPONSE_STATUS_CODE_BRIEF = 'The status code of the HTTP response.';

export const HTTP_RESPONSE_TRANSFER_SIZE_BRIEF = 'The transfer size of the response (in bytes).';

export const HTTP_ROUTE_BRIEF =
  'The matched route, that is, the path template in the format used by the respective server framework.';

export const HTTP_SCHEME_BRIEF = 'The URI scheme component identifying the used protocol.';

export const HTTP_SERVER_NAME_BRIEF = 'The server domain name';

export const HTTP_SERVER_REQUEST_TIME_IN_QUEUE_BRIEF =
  'The time in milliseconds the request spent in the server queue before processing began. Measured from the X-Request-Start header set by reverse proxies (e.g., Nginx, HAProxy, Heroku) to when the application started handling the request.';

export const HTTP_STATUS_CODE_BRIEF = 'The status code of the HTTP response.';

export const HTTP_TARGET_BRIEF = 'The pathname and query string of the URL.';

export const HTTP_URL_BRIEF = 'The URL of the resource that was fetched.';

export const HTTP_USER_AGENT_BRIEF = 'Value of the HTTP User-Agent header sent by the client.';

export const ID_BRIEF = 'A unique identifier for the span.';

export const INP_BRIEF = 'The value of the recorded Interaction to Next Paint (INP) web vital';

export const JSONRPC_PROTOCOL_VERSION_BRIEF = 'The version of the JSON-RPC protocol used.';

export const JSONRPC_REQUEST_ID_BRIEF = 'The JSON-RPC request identifier. Unique within the session.';

export const JVM_GC_ACTION_BRIEF = 'Name of the garbage collector action.';

export const JVM_GC_NAME_BRIEF = 'Name of the garbage collector.';

export const JVM_MEMORY_POOL_NAME_BRIEF = 'Name of the memory pool.';

export const JVM_MEMORY_TYPE_BRIEF = 'Name of the memory pool.';

export const JVM_THREAD_DAEMON_BRIEF = 'Whether the thread is daemon or not.';

export const JVM_THREAD_STATE_BRIEF = 'State of the thread.';

export const KOA_NAME_BRIEF = 'The name of the Koa middleware or matched route that handled the request.';

export const KOA_TYPE_BRIEF = 'The type of the Koa layer that handled the request.';

export const LCP_BRIEF = 'The value of the recorded Largest Contentful Paint (LCP) web vital';

export const LCP_ELEMENT_BRIEF = 'The dom element responsible for the largest contentful paint.';

export const LCP_ID_BRIEF = 'The id of the dom element responsible for the largest contentful paint.';

export const LCP_LOADTIME_BRIEF = 'The time it took for the LCP element to be loaded';

export const LCP_RENDERTIME_BRIEF = 'The time it took for the LCP element to be rendered';

export const LCP_SIZE_BRIEF = 'The size of the largest contentful paint element.';

export const LCP_URL_BRIEF = 'The url of the dom element responsible for the largest contentful paint.';

export const LITESTAR_MIDDLEWARE_NAME_BRIEF = 'The name of the Litestar middleware.';

export const LOGGER_NAME_BRIEF = 'The name of the logger that generated this event.';

export const MCP_CANCELLED_REASON_BRIEF = 'Reason for the cancellation of an MCP operation.';

export const MCP_CANCELLED_REQUEST_ID_BRIEF = 'Request ID of the cancelled MCP operation.';

export const MCP_CLIENT_NAME_BRIEF = 'Name of the MCP client application.';

export const MCP_CLIENT_TITLE_BRIEF = 'Display title of the MCP client application.';

export const MCP_CLIENT_VERSION_BRIEF = 'Version of the MCP client application.';

export const MCP_LIFECYCLE_PHASE_BRIEF = 'Lifecycle phase indicator for MCP operations.';

export const MCP_LOGGING_DATA_TYPE_BRIEF = 'Data type of the logged message content.';

export const MCP_LOGGING_LEVEL_BRIEF = 'Log level for MCP logging operations.';

export const MCP_LOGGING_LOGGER_BRIEF = 'Logger name for MCP logging operations.';

export const MCP_LOGGING_MESSAGE_BRIEF = 'Log message content from MCP logging operations.';

export const MCP_METHOD_NAME_BRIEF = 'The name of the MCP request or notification method being called.';

export const MCP_PROGRESS_CURRENT_BRIEF = 'Current progress value of an MCP operation.';

export const MCP_PROGRESS_MESSAGE_BRIEF = 'Progress message describing the current state of an MCP operation.';

export const MCP_PROGRESS_PERCENTAGE_BRIEF =
  'Calculated progress percentage of an MCP operation. Computed from current/total * 100.';

export const MCP_PROGRESS_TOKEN_BRIEF = 'Token for tracking progress of an MCP operation.';

export const MCP_PROGRESS_TOTAL_BRIEF = 'Total progress target value of an MCP operation.';

export const MCP_PROMPT_NAME_BRIEF = 'Name of the MCP prompt template being used.';

export const MCP_PROMPT_RESULT_DESCRIPTION_BRIEF = 'Description of the prompt result.';

export const MCP_PROMPT_RESULT_MESSAGE_CONTENT_BRIEF =
  'Content of the message in the prompt result. Used for single message results only.';

export const MCP_PROMPT_RESULT_MESSAGE_COUNT_BRIEF = 'Number of messages in the prompt result.';

export const MCP_PROMPT_RESULT_MESSAGE_ROLE_BRIEF =
  'Role of the message in the prompt result. Used for single message results only.';

export const MCP_PROTOCOL_READY_BRIEF =
  'Protocol readiness indicator for MCP session. Non-zero value indicates the protocol is ready.';

export const MCP_PROTOCOL_VERSION_BRIEF = 'MCP protocol version used in the session.';

export const MCP_REQUEST_ARGUMENT_KEY_BRIEF =
  'MCP request argument with dynamic key suffix. The <key> is replaced with the actual argument name. The value is a JSON-stringified representation of the argument value.';

export const MCP_REQUEST_ARGUMENT_NAME_BRIEF = 'Name argument from prompts/get MCP request.';

export const MCP_REQUEST_ARGUMENT_URI_BRIEF = 'URI argument from resources/read MCP request.';

export const MCP_REQUEST_ID_BRIEF = 'JSON-RPC request identifier for the MCP request. Unique within the MCP session.';

export const MCP_RESOURCE_PROTOCOL_BRIEF = 'Protocol of the resource URI being accessed, extracted from the URI.';

export const MCP_RESOURCE_URI_BRIEF = 'The resource URI being accessed in an MCP operation.';

export const MCP_SERVER_NAME_BRIEF = 'Name of the MCP server application.';

export const MCP_SERVER_TITLE_BRIEF = 'Display title of the MCP server application.';

export const MCP_SERVER_VERSION_BRIEF = 'Version of the MCP server application.';

export const MCP_SESSION_ID_BRIEF = 'Identifier for the MCP session.';

export const MCP_TOOL_NAME_BRIEF = 'Name of the MCP tool being called.';

export const MCP_TOOL_RESULT_CONTENT_BRIEF = 'The content of the tool result.';

export const MCP_TOOL_RESULT_CONTENT_COUNT_BRIEF = 'Number of content items in the tool result.';

export const MCP_TOOL_RESULT_IS_ERROR_BRIEF = 'Whether a tool execution resulted in an error.';

export const MCP_TRANSPORT_BRIEF = 'Transport method used for MCP communication.';

export const MDC_KEY_BRIEF =
  "Attributes from the Mapped Diagnostic Context (MDC) present at the moment the log record was created. The MDC is supported by all the most popular logging solutions in the Java ecosystem, and it's usually implemented as a thread-local map that stores context for e.g. a specific request.";

export const MESSAGING_BATCH_MESSAGE_COUNT_BRIEF =
  'The number of messages sent, received, or processed in the scope of the batching operation.';

export const MESSAGING_DESTINATION_BRIEF = 'The message destination name.';

export const MESSAGING_DESTINATION_CONNECTION_BRIEF = 'The message destination connection.';

export const MESSAGING_DESTINATION_KIND_BRIEF = 'The kind of message destination.';

export const MESSAGING_DESTINATION_NAME_BRIEF = 'The message destination name.';

export const MESSAGING_DESTINATION_PARTITION_ID_BRIEF =
  'The identifier of the partition messages are sent to or received from, unique within the messaging.destination.name.';

export const MESSAGING_KAFKA_MESSAGE_KEY_BRIEF =
  "Message keys in Kafka are used for grouping alike messages to ensure they're processed on the same partition. They differ from messaging.message.id in that they're not unique. If the key is null, the attribute MUST NOT be set.";

export const MESSAGING_KAFKA_MESSAGE_TOMBSTONE_BRIEF = 'A boolean that is true if the message is a tombstone.';

export const MESSAGING_KAFKA_OFFSET_BRIEF = 'The offset of a record in the corresponding Kafka partition.';

export const MESSAGING_MESSAGE_BODY_SIZE_BRIEF = 'The size of the message body in bytes.';

export const MESSAGING_MESSAGE_CONVERSATION_ID_BRIEF =
  'The conversation ID identifying the conversation to which the message belongs, represented as a string. Sometimes called "Correlation ID".';

export const MESSAGING_MESSAGE_ENVELOPE_SIZE_BRIEF = 'The size of the message body and metadata in bytes.';

export const MESSAGING_MESSAGE_ID_BRIEF =
  'A value used by the messaging system as an identifier for the message, represented as a string.';

export const MESSAGING_MESSAGE_RECEIVE_LATENCY_BRIEF =
  'The latency between when the message was published and received.';

export const MESSAGING_MESSAGE_RETRY_COUNT_BRIEF = 'The amount of attempts to send the message.';

export const MESSAGING_OPERATION_NAME_BRIEF = 'The name of the messaging operation being performed';

export const MESSAGING_OPERATION_TYPE_BRIEF = 'A string identifying the type of the messaging operation';

export const MESSAGING_RABBITMQ_DESTINATION_ROUTING_KEY_BRIEF = 'RabbitMQ message routing key.';

export const MESSAGING_SYSTEM_BRIEF = 'The messaging system as identified by the client instrumentation.';

export const METHOD_BRIEF = 'The HTTP method used.';

export const MIDDLEWARE_NAME_BRIEF = 'The name of the middleware.';

export const NAVIGATION_ORIGIN_BRIEF =
  'The origin of the navigation (usually client side router navigations). Should preferrably parameterized template (like url.template) or a URL path otherwise.';

export const NAVIGATION_ROUTE_ID_BRIEF =
  'The identifier of the matched client-side route, as assigned by the routing framework (e.g., vue-router name, react-router id).';

export const NAVIGATION_TYPE_BRIEF = 'The type of navigation done by a client-side router.';

export const NEL_ELAPSED_TIME_BRIEF =
  'The elapsed number of milliseconds between the start of the resource fetch and when it was completed or aborted by the user agent.';

export const NEL_PHASE_BRIEF =
  'If request failed, the phase of its network error. If request succeeded, "application".';

export const NEL_REFERRER_BRIEF =
  "request's referrer, as determined by the referrer policy associated with its client.";

export const NEL_SAMPLING_FUNCTION_BRIEF = 'The sampling function used to determine if the request should be sampled.';

export const NEL_TYPE_BRIEF = 'If request failed, the type of its network error. If request succeeded, "ok".';

export const NETWORK_CONNECTION_EFFECTIVE_TYPE_BRIEF =
  'Specifies the effective type of the current connection (e.g. slow-2g, 2g, 3g, 4g).';

export const NETWORK_CONNECTION_RTT_BRIEF =
  'Specifies the estimated effective round-trip time of the current connection, in milliseconds.';

export const NETWORK_CONNECTION_TYPE_BRIEF =
  'Specifies the type of the current connection (e.g. wifi, ethernet, cellular , etc).';

export const NETWORK_LOCAL_ADDRESS_BRIEF =
  'Local address of the network connection - IP address or Unix domain socket name.';

export const NETWORK_LOCAL_PORT_BRIEF = 'Local port number of the network connection.';

export const NETWORK_PEER_ADDRESS_BRIEF =
  'Peer address of the network connection - IP address or Unix domain socket name.';

export const NETWORK_PEER_PORT_BRIEF = 'Peer port number of the network connection.';

export const NETWORK_PROTOCOL_NAME_BRIEF = 'OSI application layer or non-OSI equivalent.';

export const NETWORK_PROTOCOL_VERSION_BRIEF = 'The actual version of the protocol used for network communication.';

export const NETWORK_TRANSPORT_BRIEF = 'OSI transport layer or inter-process communication method.';

export const NETWORK_TYPE_BRIEF = 'OSI network layer or non-OSI equivalent.';

export const NET_HOST_IP_BRIEF = 'Local address of the network connection - IP address or Unix domain socket name.';

export const NET_HOST_NAME_BRIEF =
  'Server domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.';

export const NET_HOST_PORT_BRIEF = 'Server port number.';

export const NET_PEER_IP_BRIEF = 'Peer address of the network connection - IP address or Unix domain socket name.';

export const NET_PEER_NAME_BRIEF =
  'Server domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.';

export const NET_PEER_PORT_BRIEF = 'Peer port number.';

export const NET_PROTOCOL_NAME_BRIEF = 'OSI application layer or non-OSI equivalent.';

export const NET_PROTOCOL_VERSION_BRIEF = 'The actual version of the protocol used for network communication.';

export const NET_SOCK_FAMILY_BRIEF = 'OSI transport and network layer';

export const NET_SOCK_HOST_ADDR_BRIEF = 'Local address of the network connection mapping to Unix domain socket name.';

export const NET_SOCK_HOST_PORT_BRIEF = 'Local port number of the network connection.';

export const NET_SOCK_PEER_ADDR_BRIEF = 'Peer address of the network connection - IP address';

export const NET_SOCK_PEER_NAME_BRIEF = 'Peer address of the network connection - Unix domain socket name';

export const NET_SOCK_PEER_PORT_BRIEF = 'Peer port number of the network connection.';

export const NET_TRANSPORT_BRIEF = 'OSI transport layer or inter-process communication method.';

export const OS_BUILD_BRIEF = 'The build ID of the operating system.';

export const OS_BUILD_ID_BRIEF = 'The build ID of the operating system.';

export const OS_DESCRIPTION_BRIEF =
  'Human readable (not intended to be parsed) OS version information, like e.g. reported by ver or lsb_release -a commands.';

export const OS_KERNEL_VERSION_BRIEF =
  'An independent kernel version string. Typically the entire output of the `uname` syscall.';

export const OS_NAME_BRIEF = 'Human readable operating system name.';

export const OS_RAW_DESCRIPTION_BRIEF =
  'An unprocessed description string obtained by the operating system. For some well-known runtimes, Sentry will attempt to parse `name` and `version` from this string, if they are not explicitly given.';

export const OS_ROOTED_BRIEF = 'Whether the operating system has been jailbroken or rooted.';

export const OS_THEME_BRIEF = 'Whether the OS runs in dark mode or light mode.';

export const OS_TYPE_BRIEF = 'The operating system type.';

export const OS_VERSION_BRIEF = 'The version of the operating system.';

export const OTEL_KIND_BRIEF =
  'The span kind (https://opentelemetry.io/docs/concepts/signals/traces/#span-kind). Deprecated, use `sentry.kind` instead.';

export const OTEL_SCOPE_NAME_BRIEF = 'The name of the instrumentation scope - (InstrumentationScope.Name in OTLP).';

export const OTEL_SCOPE_VERSION_BRIEF =
  'The version of the instrumentation scope - (InstrumentationScope.Version in OTLP).';

export const OTEL_STATUS_CODE_BRIEF =
  'Name of the code, either “OK” or “ERROR”. MUST NOT be set if the status code is UNSET.';

export const OTEL_STATUS_DESCRIPTION_BRIEF = 'Description of the Status if it has a value, otherwise not set.';

export const PARAMS_KEY_BRIEF =
  'Decoded parameters extracted from a URL path. Usually added by client-side routing frameworks like vue-router.';

export const PERFORMANCE_ACTIVATIONSTART_BRIEF =
  'The time between initiating a navigation to a page and the browser activating the page';

export const PERFORMANCE_TIMEORIGIN_BRIEF =
  "The browser's performance.timeOrigin timestamp representing the time when the pageload was initiated";

export const PORT_BRIEF = 'The destination port for a TCP connection.';

export const PREVIOUS_ROUTE_BRIEF = 'Also used by mobile SDKs to indicate the previous route in the application.';

export const PROCESS_COMMAND_ARGS_BRIEF =
  'All the command arguments (including the command/executable itself) as received by the process.';

export const PROCESS_EXECUTABLE_NAME_BRIEF = 'The name of the executable that started the process.';

export const PROCESS_PID_BRIEF = 'The process ID of the running process.';

export const PROCESS_RUNTIME_DESCRIPTION_BRIEF =
  'An additional description about the runtime of the process, for example a specific vendor customization of the runtime environment. Equivalent to `raw_description` in the Sentry runtime context.';

export const PROCESS_RUNTIME_ENGINE_NAME_BRIEF = 'The name of the runtime engine.';

export const PROCESS_RUNTIME_ENGINE_VERSION_BRIEF = 'The version of the runtime engine.';

export const PROCESS_RUNTIME_NAME_BRIEF =
  'The name of the runtime. Equivalent to `name` in the Sentry runtime context.';

export const PROCESS_RUNTIME_VERSION_BRIEF =
  'The version of the runtime of this process, as returned by the runtime without modification. Equivalent to `version` in the Sentry runtime context.';

export const PROFILE_ID_BRIEF =
  'The ID of the Sentry profile the span is associated with. This is only meaningful for transaction-based profiling.';

export const QUERY_BRIEF = 'The database query being executed.';

export const QUERY_KEY_BRIEF =
  'An item in a query string. Usually added by client-side routing frameworks like vue-router.';

export const REACT_VERSION_BRIEF = 'The version of the React framework';

export const REDIS_COMMAND_BRIEF = 'The name of the Redis operation being executed.';

export const REDIS_KEY_BRIEF = 'The key the Redis command is operating on.';

export const RELEASE_BRIEF = 'The sentry release.';

export const REMIX_ACTION_FORM_DATA_KEY_BRIEF =
  'Remix form data, <key> being the form data key, the value being the form data value.';

export const REPLAY_ID_BRIEF = 'The id of the sentry replay.';

export const RESOURCE_DEPLOYMENT_ENVIRONMENT_BRIEF = 'The software deployment environment name.';

export const RESOURCE_DEPLOYMENT_ENVIRONMENT_NAME_BRIEF = 'The software deployment environment name.';

export const RESOURCE_RENDER_BLOCKING_STATUS_BRIEF = 'The render blocking status of the resource.';

export const ROUTE_BRIEF =
  'The matched route, that is, the path template in the format used by the respective server framework. Also used by mobile SDKs to indicate the current route in the application.';

export const RPC_GRPC_STATUS_CODE_BRIEF = 'The numeric status code of the gRPC request.';

export const RPC_METHOD_BRIEF = 'The fully-qualified logical name of the method from the RPC interface perspective.';

export const RPC_RESPONSE_STATUS_CODE_BRIEF =
  'Status code of the RPC returned by the RPC server or generated by the client.';

export const RPC_SERVICE_BRIEF =
  'The full (logical) name of the service being called, including its package name, if applicable.';

export const RPC_SYSTEM_BRIEF = 'A string identifying the remoting system.';

export const RPC_SYSTEM_NAME_BRIEF = 'A string identifying the remoting system.';

export const RUNTIME_BUILD_BRIEF = 'The application build string, when it is separate from the version.';

export const RUNTIME_NAME_BRIEF = 'The name of the runtime. For example node, CPython, or rustc.';

export const RUNTIME_RAW_DESCRIPTION_BRIEF =
  'Unprocessed description string as obtained from the runtime. Used to extract name and version for well-known runtimes.';

export const RUNTIME_VERSION_BRIEF = 'The version of the runtime.';

export const SCORE_KEY_BRIEF =
  'The weighted performance score for a web vital. This is defined as `score.weight.<key>` * `score.ratio.<key>`.';

export const SCORE_RATIO_KEY_BRIEF = 'The score for a web vital, normalized to a number between 0 and 1.';

export const SCORE_TOTAL_BRIEF =
  'The total performance score of a span. This is the sum of individual weighted web vital scores (see `score.<key>`).';

export const SCORE_WEIGHT_KEY_BRIEF = "The relative weight of a web vital in a span's performance score.";

export const SENTRY_ACTION_BRIEF =
  'Used as a generic attribute representing the action depending on the type of span. For instance, this is the database query operation for DB spans, and the request method for HTTP spans.';

export const SENTRY_BROWSER_NAME_BRIEF = 'The name of the browser.';

export const SENTRY_BROWSER_VERSION_BRIEF = 'The version of the browser.';

export const SENTRY_CANCELLATION_REASON_BRIEF = 'The reason why a span ended early.';

export const SENTRY_CATEGORY_BRIEF =
  "The high-level category of a span, derived from the span operation or span attributes. This categorizes spans by their general purpose (e.g., database, HTTP, UI). Known values include: 'ai', 'ai.pipeline', 'app', 'browser', 'cache', 'console', 'db', 'event', 'file', 'function.aws', 'function.azure', 'function.gcp', 'function.nextjs', 'function.remix', 'graphql', 'grpc', 'http', 'measure', 'middleware', 'navigation', 'pageload', 'queue', 'resource', 'rpc', 'serialize', 'subprocess', 'template', 'topic', 'ui', 'ui.angular', 'ui.ember', 'ui.react', 'ui.svelte', 'ui.vue', 'view', 'websocket'.";

export const SENTRY_CLIENT_SAMPLE_RATE_BRIEF = 'Rate at which a span was sampled in the SDK.';

export const SENTRY_DESCRIPTION_BRIEF = 'The human-readable description of a span.';

export const SENTRY_DIST_BRIEF = 'The sentry dist.';

export const SENTRY_DOMAIN_BRIEF =
  'Used as a generic attribute representing the domain depending on the type of span. For instance, this is the collection/table name for database spans, and the server address for HTTP spans.';

export const SENTRY_DSC_ENVIRONMENT_BRIEF = 'The environment from the dynamic sampling context.';

export const SENTRY_DSC_PROJECT_ID_BRIEF =
  'The ID of the project where the trace originated (i.e. the project of the SDK that started the trace). Propagated through the dynamic sampling context and set by Relay during ingestion.';

export const SENTRY_DSC_PUBLIC_KEY_BRIEF = 'The public key from the dynamic sampling context.';

export const SENTRY_DSC_RELEASE_BRIEF = 'The release identifier from the dynamic sampling context.';

export const SENTRY_DSC_SAMPLED_BRIEF = 'Whether the event was sampled according to the dynamic sampling context.';

export const SENTRY_DSC_SAMPLE_RATE_BRIEF = 'The sample rate from the dynamic sampling context.';

export const SENTRY_DSC_TRACE_ID_BRIEF = 'The trace ID from the dynamic sampling context.';

export const SENTRY_DSC_TRANSACTION_BRIEF = 'The transaction name from the dynamic sampling context.';

export const SENTRY_ENVIRONMENT_BRIEF = 'The sentry environment.';

export const SENTRY_EVENT_SERIALIZED_BREADCRUMBS_BRIEF = 'JSON-serialized `breadcrumbs` property from a Sentry event.';

export const SENTRY_EVENT_SERIALIZED_CONTEXTS_BRIEF = 'JSON-serialized `contexts` property from a Sentry event.';

export const SENTRY_EVENT_SERIALIZED_EXTRA_BRIEF = 'JSON-serialized `extra` property from a Sentry event.';

export const SENTRY_EXCLUSIVE_TIME_BRIEF = 'The exclusive time duration of the span in milliseconds.';

export const SENTRY_FRAMES_FROZEN_BRIEF = 'The number of frozen frames rendered during the lifetime of the span.';

export const SENTRY_FRAMES_SLOW_BRIEF = 'The number of slow frames rendered during the lifetime of the span.';

export const SENTRY_FRAMES_TOTAL_BRIEF = 'The number of total frames rendered during the lifetime of the span.';

export const SENTRY_GRAPHQL_OPERATION_BRIEF = 'Indicates the type of graphql operation, emitted by the Javascript SDK.';

export const SENTRY_GROUP_BRIEF =
  'Stores the hash of `sentry.normalized_description`. This is primarily used for grouping spans in the product end.';

export const SENTRY_HTTP_PREFETCH_BRIEF = 'If an http request was a prefetch request.';

export const SENTRY_IDLE_SPAN_FINISH_REASON_BRIEF = 'The reason why an idle span ended early.';

export const SENTRY_IS_REMOTE_BRIEF = "Indicates whether a span's parent is remote.";

export const SENTRY_KIND_BRIEF =
  'Used to clarify the relationship between parents and children, or to distinguish between spans, e.g. a `server` and `client` span with the same name.';

export const SENTRY_MAIN_THREAD_BRIEF =
  'Whether the span or event occurred on the main thread. Computed by Relay and should not be set by SDKs.';

export const SENTRY_MESSAGE_PARAMETER_KEY_BRIEF =
  "A parameter used in the message template. <key> can either be the number that represent the parameter's position in the template string (sentry.message.parameter.0, sentry.message.parameter.1, etc) or the parameter's name (sentry.message.parameter.item_id, sentry.message.parameter.user_id, etc)";

export const SENTRY_MESSAGE_TEMPLATE_BRIEF = 'The parameterized template string.';

export const SENTRY_METRIC_SOURCE_BRIEF =
  'The provenance of a metric.  For example, this can be set to indicate if a metric was generated by Relay from a span.';

export const SENTRY_MOBILE_BRIEF =
  'Whether the application is using a mobile SDK. Computed by Relay and should not be set by SDKs.';

export const SENTRY_MODULE_KEY_BRIEF = 'A module that was loaded in the process. The key is the name of the module.';

export const SENTRY_NEXTJS_SSR_FUNCTION_ROUTE_BRIEF =
  'A parameterized route for a function in Next.js that contributes to Server-Side Rendering. Should be present on spans that track such functions when the file location of the function is known.';

export const SENTRY_NEXTJS_SSR_FUNCTION_TYPE_BRIEF =
  'A descriptor for a for a function in Next.js that contributes to Server-Side Rendering. Should be present on spans that track such functions.';

export const SENTRY_NORMALIZED_DB_QUERY_BRIEF = 'The normalized version of `db.query.text`.';

export const SENTRY_NORMALIZED_DB_QUERY_HASH_BRIEF = 'The hash of `sentry.normalized_db_query`.';

export const SENTRY_NORMALIZED_DESCRIPTION_BRIEF =
  'Used as a generic attribute representing the normalized `sentry.description`. This refers to the legacy use case of `sentry.description` where it holds relevant data depending on the type of span (e.g. database query, resource url, http request description, etc).';

export const SENTRY_OBSERVED_TIMESTAMP_NANOS_BRIEF =
  'The timestamp at which an envelope was received by Relay, in nanoseconds.';

export const SENTRY_OP_BRIEF = 'The operation of a span.';

export const SENTRY_ORIGIN_BRIEF = 'The origin of the instrumentation (e.g. span, log, etc.)';

export const SENTRY_PAGELOAD_SPAN_ID_BRIEF = 'The id of the pageload span, set by web vital spans and metrics';

export const SENTRY_PLATFORM_BRIEF = 'The sdk platform that generated the event.';

export const SENTRY_PROFILER_ID_BRIEF = 'The id of the currently running profiler (continuous profiling)';

export const SENTRY_PROFILE_ID_BRIEF =
  'The ID of the Sentry profile the span is associated with. This is only meaningful for transaction-based profiling.';

export const SENTRY_RELAY_INGRESS_BRIEF = 'How an item (span, log, &c.) entered Relay.';

export const SENTRY_RELAY_PIPELINE_BRIEF =
  'An internal descriptor of which processing pipeline an item went through in Relay.';

export const SENTRY_RELEASE_BRIEF = 'The sentry release.';

export const SENTRY_REPLAY_ID_BRIEF = 'The id of the sentry replay.';

export const SENTRY_REPLAY_IS_BUFFERING_BRIEF =
  'A sentinel attribute on log events indicating whether the current Session Replay is being buffered (onErrorSampleRate).';

export const SENTRY_REPORT_EVENT_BRIEF =
  '(Deprecated) The event that caused the SDK to report CLS or LCP (pagehide or navigation)';

export const SENTRY_SDK_INTEGRATIONS_BRIEF =
  'A list of names identifying enabled integrations. The list shouldhave all enabled integrations, including default integrations. Defaultintegrations are included because different SDK releases may contain differentdefault integrations.';

export const SENTRY_SDK_NAME_BRIEF = 'The sentry sdk name.';

export const SENTRY_SDK_VERSION_BRIEF = 'The sentry sdk version.';

export const SENTRY_SEGMENT_ID_BRIEF = 'The segment ID of a span';

export const _SENTRY_SEGMENT_ID_BRIEF = 'The segment ID of a span';

export const SENTRY_SEGMENT_NAME_BRIEF = 'The segment name of a span';

export const SENTRY_SEGMENT_NAME_SOURCE_BRIEF =
  "The source of the segment span name. Should only be set on segment spans. Known values are:  `'custom'`, `'url'`, `'route'`, `'component'`, `'view'`, `'task'`.";

export const SENTRY_SERVER_SAMPLE_RATE_BRIEF = 'Rate at which a span was sampled in Relay.';

export const SENTRY_SOURCE_BRIEF =
  "The source of a span, also referred to as transaction source. Known values are:  `'custom'`, `'url'`, `'route'`, `'component'`, `'view'`, `'task'`. '`source`' describes a parametrized route, while `'url'` describes the full URL, potentially containing identifiers.";

export const SENTRY_SPAN_SOURCE_BRIEF =
  "The source of a span, also referred to as transaction source. Known values are:  `'custom'`, `'url'`, `'route'`, `'component'`, `'view'`, `'task'`. '`source`' describes a parametrized route, while `'url'` describes the full URL, potentially containing identifiers.";

export const SENTRY_STATUS_BRIEF =
  'The span\'s status (either "ok" or "error"). Older SDKs may set this to a more specific error, but this behaviour is deprecated.';

export const SENTRY_STATUS_CODE_BRIEF =
  'The HTTP status code used in Sentry Insights. Typically set by Sentry during ingestion, rather than by clients.';

export const SENTRY_STATUS_MESSAGE_BRIEF = 'The from OTLP extracted status message.';

export const SENTRY_SVELTEKIT_NAVIGATION_FROM_BRIEF = 'the navigation origin (sveltekit router)';

export const SENTRY_SVELTEKIT_NAVIGATION_TO_BRIEF = 'the navigation destination';

export const SENTRY_SVELTEKIT_NAVIGATION_TYPE_BRIEF =
  'The type of navigation event emitted from the sveltekit client router';

export const SENTRY_THREAD_ID_BRIEF = 'Current “managed” thread ID.';

export const SENTRY_TIMESTAMP_SEQUENCE_BRIEF =
  'A sequencing counter for deterministic ordering of logs or metrics when timestamps share the same integer millisecond. Starts at 0 on SDK initialization, increments by 1 for each captured item, and resets to 0 when the integer millisecond of the current item differs from the previous one.';

export const SENTRY_TRACE_LIFECYCLE_BRIEF = 'Indicates the chosen trace lifecycle mode of the SDK (stream or static)';

export const SENTRY_TRACE_PARENT_SPAN_ID_BRIEF =
  'The span id of the span that was active when the log was collected. This should not be set if there was no active span.';

export const SENTRY_TRACE_STATUS_BRIEF =
  'The segment\'s status (either "ok" or "error"). Older SDKs may set this to a more specific error, but this behaviour is deprecated.';

export const SENTRY_TRANSACTION_BRIEF = 'The sentry transaction (segment name).';

export const SENTRY_USER_EMAIL_BRIEF = 'User email address.';

export const SENTRY_USER_GEO_CITY_BRIEF = 'Human readable city name.';

export const SENTRY_USER_GEO_COUNTRY_CODE_BRIEF = 'Two-letter country code (ISO 3166-1 alpha-2).';

export const SENTRY_USER_GEO_REGION_BRIEF = 'Human readable region name or code.';

export const SENTRY_USER_GEO_SUBDIVISION_BRIEF = 'Human readable subdivision name.';

export const SENTRY_USER_ID_BRIEF = 'Unique identifier of the user.';

export const SENTRY_USER_IP_BRIEF = 'The IP address of the user.';

export const SENTRY_USER_USERNAME_BRIEF = 'Short name or login/username of the user.';

export const SERVER_ADDRESS_BRIEF =
  'Server domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.';

export const SERVER_NAME_BRIEF =
  'Server domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.';

export const SERVER_PORT_BRIEF = 'Server port number.';

export const SERVICE_NAME_BRIEF = 'Logical name of the service.';

export const SERVICE_VERSION_BRIEF =
  'The version string of the service API or implementation. The format is not defined by these conventions.';

export const SESSION_ID_BRIEF = 'A unique id identifying the active session at the time of setting this attribute';

export const STALL_PERCENTAGE_BRIEF =
  'The fraction of time the app was stalled. Only applies to React Native. This is computed by Relay.';

export const STALL_TOTAL_TIME_BRIEF =
  'The combined duration of all stalls in milliseconds. Only applies to React Native. This is computed by Relay.';

export const STARLETTE_MIDDLEWARE_NAME_BRIEF = 'The name of the Starlette middleware.';

export const STARLITE_MIDDLEWARE_NAME_BRIEF = 'The name of the Starlite middleware.';

export const STATE_TYPE_BRIEF = 'The type of state management library';

export const SUBPROCESS_PID_BRIEF = 'The process ID of a subprocess.';

export const THREAD_ID_BRIEF = 'Current “managed” thread ID.';

export const THREAD_NAME_BRIEF = 'Current thread name.';

export const TIMBER_TAG_BRIEF = 'The log tag provided by the timber logging framework.';

export const TIME_TO_FULL_DISPLAY_BRIEF = 'The duration of time to full display in milliseconds';

export const TIME_TO_INITIAL_DISPLAY_BRIEF = 'The duration of time to initial display in milliseconds';

export const TRANSACTION_BRIEF = 'The sentry transaction (segment name).';

export const TRPC_PROCEDURE_PATH_BRIEF = 'The path of the tRPC procedure being called';

export const TRPC_PROCEDURE_TYPE_BRIEF = 'The type of the tRPC procedure';

export const TTFB_BRIEF = 'The value of the recorded Time To First Byte (TTFB) web vital in milliseconds';

export const TTFB_REQUESTTIME_BRIEF =
  "The time it takes for the server to process the initial request and send the first byte of a response to the user's browser";

export const TYPE_BRIEF = 'More granular type of the operation happening.';

export const UI_COMPONENT_NAME_BRIEF = 'The name of the associated component.';

export const UI_CONTRIBUTES_TO_TTFD_BRIEF =
  'Whether the span execution contributed to the TTFD (time to fully drawn) metric.';

export const UI_CONTRIBUTES_TO_TTID_BRIEF =
  'Whether the span execution contributed to the TTID (time to initial display) metric.';

export const UI_ELEMENT_HEIGHT_BRIEF = 'The height of the UI element (for Html in pixels)';

export const UI_ELEMENT_ID_BRIEF = 'The id of the UI element';

export const UI_ELEMENT_IDENTIFIER_BRIEF = 'The identifier used to measure the UI element timing';

export const UI_ELEMENT_LOAD_TIME_BRIEF = 'The loading time of a UI element (from time origin to finished loading)';

export const UI_ELEMENT_PAINT_TYPE_BRIEF = "The type of element paint. Can either be 'image-paint' or 'text-paint'";

export const UI_ELEMENT_RENDER_TIME_BRIEF =
  'The rendering time of the UI element (from time origin to finished rendering)';

export const UI_ELEMENT_TYPE_BRIEF = 'type of the UI element';

export const UI_ELEMENT_URL_BRIEF = 'The URL of the UI element (e.g. an img src)';

export const UI_ELEMENT_WIDTH_BRIEF = 'The width of the UI element (for HTML in pixels)';

export const URL_BRIEF = 'The URL of the resource that was fetched.';

export const URL_DOMAIN_BRIEF =
  'Server domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.';

export const URL_FRAGMENT_BRIEF =
  'The fragments present in the URI. Note that this does not contain the leading # character, while the `http.fragment` attribute does.';

export const URL_FULL_BRIEF = 'The URL of the resource that was fetched.';

export const URL_PATH_BRIEF = 'The URI path component.';

export const URL_PATH_PARAMETER_KEY_BRIEF =
  'Decoded parameters extracted from a URL path. Usually added by client-side routing frameworks like vue-router.';

export const URL_PORT_BRIEF = 'Server port number.';

export const URL_QUERY_BRIEF =
  'The query string present in the URL. Note that this does not contain the leading ? character, while the `http.query` attribute does.';

export const URL_SAME_ORIGIN_BRIEF =
  "Indicates that a URL has the same origin as the current page's origin in the browser.";

export const URL_SCHEME_BRIEF = 'The URI scheme component identifying the used protocol.';

export const URL_TEMPLATE_BRIEF = 'The low-cardinality template of an absolute URL path reference.';

export const USER_AGENT_ORIGINAL_BRIEF = 'Value of the HTTP User-Agent header sent by the client.';

export const USER_EMAIL_BRIEF = 'User email address.';

export const USER_FULL_NAME_BRIEF = "User's full name.";

export const USER_GEO_CITY_BRIEF = 'Human readable city name.';

export const USER_GEO_COUNTRY_CODE_BRIEF = 'Two-letter country code (ISO 3166-1 alpha-2).';

export const USER_GEO_REGION_BRIEF = 'Human readable region name or code.';

export const USER_GEO_SUBDIVISION_BRIEF = 'Human readable subdivision name.';

export const USER_HASH_BRIEF = 'Unique user hash to correlate information for a user in anonymized form.';

export const USER_ID_BRIEF = 'Unique identifier of the user.';

export const USER_IP_ADDRESS_BRIEF = 'The IP address of the user.';

export const USER_NAME_BRIEF = 'Short name or login/username of the user.';

export const USER_ROLES_BRIEF = 'Array of user roles at the time of the event.';

export const VERCEL_BRANCH_BRIEF = 'Git branch name for Vercel project';

export const VERCEL_BUILD_ID_BRIEF = 'Identifier for the Vercel build (only present on build logs)';

export const VERCEL_DEPLOYMENT_ID_BRIEF = 'Identifier for the Vercel deployment';

export const VERCEL_DESTINATION_BRIEF = 'Origin of the external content in Vercel (only on external logs)';

export const VERCEL_EDGE_TYPE_BRIEF = 'Type of edge runtime in Vercel';

export const VERCEL_ENTRYPOINT_BRIEF = 'Entrypoint for the request in Vercel';

export const VERCEL_EXECUTION_REGION_BRIEF = 'Region where the request is executed';

export const VERCEL_ID_BRIEF = 'Unique identifier for the log entry in Vercel';

export const VERCEL_JA3_DIGEST_BRIEF = 'JA3 fingerprint digest of Vercel request';

export const VERCEL_JA4_DIGEST_BRIEF = 'JA4 fingerprint digest';

export const VERCEL_LOG_TYPE_BRIEF = 'Vercel log output type';

export const VERCEL_PATH_BRIEF = 'Function or dynamic path of the request in Vercel.';

export const VERCEL_PROJECT_ID_BRIEF = 'Identifier for the Vercel project';

export const VERCEL_PROJECT_NAME_BRIEF = 'Name of the Vercel project';

export const VERCEL_PROXY_CACHE_ID_BRIEF = 'Original request ID when request is served from cache';

export const VERCEL_PROXY_CLIENT_IP_BRIEF = 'Client IP address';

export const VERCEL_PROXY_HOST_BRIEF = 'Hostname of the request';

export const VERCEL_PROXY_LAMBDA_REGION_BRIEF = 'Region where lambda function executed';

export const VERCEL_PROXY_METHOD_BRIEF = 'HTTP method of the request';

export const VERCEL_PROXY_PATH_BRIEF = 'Request path with query parameters';

export const VERCEL_PROXY_PATH_TYPE_BRIEF = 'How the request was served based on its path and project configuration';

export const VERCEL_PROXY_PATH_TYPE_VARIANT_BRIEF = 'Variant of the path type';

export const VERCEL_PROXY_REFERER_BRIEF = 'Referer of the request';

export const VERCEL_PROXY_REGION_BRIEF = 'Region where the request is processed';

export const VERCEL_PROXY_RESPONSE_BYTE_SIZE_BRIEF = 'Size of the response in bytes';

export const VERCEL_PROXY_SCHEME_BRIEF = 'Protocol of the request';

export const VERCEL_PROXY_STATUS_CODE_BRIEF = 'HTTP status code of the proxy request';

export const VERCEL_PROXY_TIMESTAMP_BRIEF = 'Unix timestamp when the proxy request was made';

export const VERCEL_PROXY_USER_AGENT_BRIEF = 'User agent strings of the request';

export const VERCEL_PROXY_VERCEL_CACHE_BRIEF = 'Cache status sent to the browser';

export const VERCEL_PROXY_VERCEL_ID_BRIEF = 'Vercel-specific identifier';

export const VERCEL_PROXY_WAF_ACTION_BRIEF = 'Action taken by firewall rules';

export const VERCEL_PROXY_WAF_RULE_ID_BRIEF = 'ID of the firewall rule that matched';

export const VERCEL_REQUEST_ID_BRIEF = 'Identifier of the Vercel request';

export const VERCEL_SOURCE_BRIEF = 'Origin of the Vercel log (build, edge, lambda, static, external, or firewall)';

export const VERCEL_STATUS_CODE_BRIEF =
  'HTTP status code of the request (-1 means no response returned and the lambda crashed)';

export const ATTRIBUTE_DOCUMENTATION: Record<AttributeName, AttributeDocumentation> = {
  address: {
    brief: 'The destination hostname or IP address for a TCP connection.',
    example: 'example.com',
    examples: ['example.com'],
    changelog: [{ version: '0.19.0', prs: [534], description: 'Added address attribute' }],
  },
  'ai.citations': {
    brief: 'References or sources cited by the AI model in its response.',
    example: ['Citation 1', 'Citation 2'],
    changelog: [
      { version: '0.5.0', prs: [264] },
      { version: '0.1.0', prs: [55] },
    ],
  },
  'ai.completion_tokens.used': {
    brief: 'The number of tokens used to respond to the message.',
    example: 10,
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.1.0', prs: [57, 61] }, { version: '0.0.0' }],
  },
  'ai.documents': {
    brief: 'Documents or content chunks used as context for the AI model.',
    example: ['document1.txt', 'document2.pdf'],
    changelog: [
      { version: '0.5.0', prs: [264] },
      { version: '0.1.0', prs: [55] },
    ],
  },
  'ai.finish_reason': {
    brief: 'The reason why the model stopped generating.',
    example: 'COMPLETE',
    changelog: [{ version: '0.1.0', prs: [55, 57, 61, 108, 127] }],
  },
  'ai.frequency_penalty': {
    brief:
      'Used to reduce repetitiveness of generated tokens. The higher the value, the stronger a penalty is applied to previously present tokens, proportional to how many times they have already appeared in the prompt or prior generation.',
    example: 0.5,
    changelog: [
      { version: '0.4.0', prs: [228] },
      { version: '0.1.0', prs: [55, 57, 61, 108] },
    ],
  },
  'ai.function_call': {
    brief:
      'For an AI model call, the function that was called. This is deprecated for OpenAI, and replaced by tool_calls',
    example: 'function_name',
    changelog: [{ version: '0.1.0', prs: [55, 57, 61, 108] }],
  },
  'ai.generation_id': {
    brief: 'Unique identifier for the completion.',
    example: 'gen_123abc',
    changelog: [{ version: '0.1.0', prs: [55, 57, 61, 108, 127] }],
  },
  'ai.input_messages': {
    brief: 'The input messages sent to the model',
    example: '[{"role": "user", "message": "hello"}]',
    changelog: [{ version: '0.1.0', prs: [65, 119] }, { version: '0.0.0' }],
  },
  'ai.is_search_required': {
    brief: 'Boolean indicating if the model needs to perform a search.',
    example: false,
    changelog: [
      { version: '0.5.0', prs: [264] },
      { version: '0.1.0', prs: [55] },
    ],
  },
  'ai.metadata': {
    brief: 'Extra metadata passed to an AI pipeline step.',
    example: '{"user_id": 123, "session_id": "abc123"}',
    changelog: [
      { version: '0.5.0', prs: [264] },
      { version: '0.1.0', prs: [55, 127] },
    ],
  },
  'ai.model_id': {
    brief: 'The vendor-specific ID of the model used.',
    example: 'gpt-4',
    changelog: [{ version: '0.1.0', prs: [57, 61, 127] }, { version: '0.0.0' }],
  },
  'ai.model.provider': {
    brief: 'The provider of the model.',
    example: 'openai',
    changelog: [
      { version: '0.4.0', prs: [253] },
      { version: '0.1.0', prs: [57, 61, 108, 127] },
    ],
  },
  'ai.pipeline.name': {
    brief: 'The name of the AI pipeline.',
    example: 'Autofix Pipeline',
    changelog: [{ version: '0.1.0', prs: [53, 76, 108, 127] }],
  },
  'ai.preamble': {
    brief:
      "For an AI model call, the preamble parameter. Preambles are a part of the prompt used to adjust the model's overall behavior and conversation style.",
    example: 'You are now a clown.',
    changelog: [
      { version: '0.5.0', prs: [264] },
      { version: '0.1.0', prs: [55] },
    ],
  },
  'ai.presence_penalty': {
    brief:
      'Used to reduce repetitiveness of generated tokens. Similar to frequency_penalty, except that this penalty is applied equally to all tokens that have already appeared, regardless of their exact frequencies.',
    example: 0.5,
    changelog: [
      { version: '0.4.0', prs: [228] },
      { version: '0.1.0', prs: [55, 57, 61, 108] },
    ],
  },
  'ai.prompt.messages': {
    brief: 'The input messages sent to the AI model.',
    example: '[{"role": "user", "message": "hello"}]',
    changelog: [{ version: '0.19.0', prs: [498], description: 'Added ai.prompt.messages attribute' }],
  },
  'ai.prompt_tokens.used': {
    brief: 'The number of tokens used to process just the prompt.',
    example: 20,
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.1.0', prs: [57, 61] }, { version: '0.0.0' }],
  },
  'ai.raw_prompting': {
    brief: 'When enabled, the user’s prompt will be sent to the model without any pre-processing.',
    example: true,
    changelog: [
      { version: '0.5.0', prs: [264] },
      { version: '0.1.0', prs: [55] },
    ],
  },
  'ai.responses': {
    brief: 'The response messages sent back by the AI model.',
    example: ['hello', 'world'],
    changelog: [{ version: '0.1.0', prs: [65, 127] }, { version: '0.0.0' }],
  },
  'ai.response_format': {
    brief: 'For an AI model call, the format of the response',
    example: 'json_object',
    changelog: [
      { version: '0.5.0', prs: [264] },
      { version: '0.1.0', prs: [55, 127] },
    ],
  },
  'ai.response.text': {
    brief: 'The text response from the AI model.',
    example: 'The weather in Paris is currently rainy.',
    changelog: [{ version: '0.19.0', prs: [498], description: 'Added ai.response.text attribute' }],
  },
  'ai.response.toolCalls': {
    brief: 'The tool calls in the AI model response.',
    example: '[{"name": "get_weather", "arguments": {"location": "Paris"}}]',
    changelog: [{ version: '0.19.0', prs: [498], description: 'Added ai.response.toolCalls attribute' }],
  },
  'ai.search_queries': {
    brief: 'Queries used to search for relevant context or documents.',
    example: ['climate change effects', 'renewable energy'],
    changelog: [
      { version: '0.5.0', prs: [264] },
      { version: '0.1.0', prs: [55] },
    ],
  },
  'ai.search_results': {
    brief: 'Results returned from search queries for context.',
    example: ['search_result_1, search_result_2'],
    changelog: [
      { version: '0.5.0', prs: [264] },
      { version: '0.1.0', prs: [55] },
    ],
  },
  'ai.seed': {
    brief: 'The seed, ideally models given the same seed and same other parameters will produce the exact same output.',
    example: '1234567890',
    changelog: [{ version: '0.1.0', prs: [55, 57, 61, 108, 127] }],
  },
  'ai.streaming': {
    brief: 'Whether the request was streamed back.',
    example: true,
    changelog: [{ version: '0.1.0', prs: [76, 108] }, { version: '0.0.0' }],
  },
  'ai.tags': {
    brief: 'Tags that describe an AI pipeline step.',
    example: '{"executed_function": "add_integers"}',
    changelog: [
      { version: '0.5.0', prs: [264] },
      { version: '0.1.0', prs: [55, 127] },
    ],
  },
  'ai.temperature': {
    brief:
      'For an AI model call, the temperature parameter. Temperature essentially means how random the output will be.',
    example: 0.1,
    changelog: [
      { version: '0.4.0', prs: [228] },
      { version: '0.1.0', prs: [55, 57, 61, 108] },
    ],
  },
  'ai.texts': {
    brief: 'Raw text inputs provided to the model.',
    example: ['Hello, how are you?', 'What is the capital of France?'],
    changelog: [
      { version: '0.5.0', prs: [264] },
      { version: '0.1.0', prs: [55] },
    ],
  },
  'ai.toolCall.args': {
    brief: 'The arguments of the tool call.',
    example: '{"location": "Paris"}',
    changelog: [{ version: '0.19.0', prs: [498], description: 'Added ai.toolCall.args attribute' }],
  },
  'ai.toolCall.result': {
    brief: 'The result of the tool call.',
    example: 'rainy, 57°F',
    changelog: [{ version: '0.19.0', prs: [498], description: 'Added ai.toolCall.result attribute' }],
  },
  'ai.tools': {
    brief: 'For an AI model call, the functions that are available',
    example: ['function_1', 'function_2'],
    changelog: [{ version: '0.1.0', prs: [55, 65, 127] }],
  },
  'ai.tool_calls': {
    brief: 'For an AI model call, the tool calls that were made.',
    example: ['tool_call_1', 'tool_call_2'],
    changelog: [{ version: '0.1.0', prs: [55, 65] }],
  },
  'ai.top_k': {
    brief:
      'Limits the model to only consider the K most likely next tokens, where K is an integer (e.g., top_k=20 means only the 20 highest probability tokens are considered).',
    example: 35,
    changelog: [
      { version: '0.4.0', prs: [228] },
      { version: '0.1.0', prs: [55, 57, 61, 108] },
    ],
  },
  'ai.top_p': {
    brief:
      'Limits the model to only consider tokens whose cumulative probability mass adds up to p, where p is a float between 0 and 1 (e.g., top_p=0.7 means only tokens that sum up to 70% of the probability mass are considered).',
    example: 0.7,
    changelog: [
      { version: '0.4.0', prs: [228] },
      { version: '0.1.0', prs: [55, 57, 61, 108] },
    ],
  },
  'ai.total_cost': {
    brief: 'The total cost for the tokens used.',
    example: 12.34,
    changelog: [
      { version: '0.5.0', prs: [264] },
      { version: '0.4.0', prs: [228] },
      { version: '0.1.0', prs: [53] },
    ],
  },
  'ai.total_tokens.used': {
    brief: 'The total number of tokens used to process the prompt.',
    example: 30,
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.1.0', prs: [57, 61, 108] }, { version: '0.0.0' }],
  },
  'ai.warnings': {
    brief: 'Warning messages generated during model execution.',
    example: ['Token limit exceeded'],
    changelog: [
      { version: '0.5.0', prs: [264] },
      { version: '0.1.0', prs: [55] },
    ],
  },
  'angular.version': {
    brief: 'The version of the Angular framework',
    example: '17.1.0',
    changelog: [{ version: '0.7.0', prs: [367], description: 'Added angular.version attribute' }],
  },
  'app.app_build': {
    brief: 'Internal build identifier, as it appears on the platform.',
    example: '1',
    changelog: [
      { version: '0.5.0', prs: [296], description: 'Added and deprecated app.app_build in favor of app.build' },
    ],
  },
  'app.app_identifier': {
    brief: 'Version-independent application identifier, often a dotted bundle ID.',
    example: 'com.example.myapp',
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
    example: 'My App',
    changelog: [
      { version: '0.5.0', prs: [296], description: 'Added and deprecated app.app_name in favor of app.name' },
    ],
  },
  'app.app_start_time': {
    brief: 'Formatted UTC timestamp when the user started the application.',
    example: '2025-01-01T00:00:00.000Z',
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
    example: '1.0.0',
    changelog: [
      { version: '0.5.0', prs: [296], description: 'Added and deprecated app.app_version in favor of app.version' },
    ],
  },
  'app.build': {
    brief: 'Internal build identifier, as it appears on the platform.',
    example: '1',
    changelog: [{ version: '0.5.0', prs: [296], description: 'Added app.build attribute' }],
  },
  'app.identifier': {
    brief: 'Version-independent application identifier, often a dotted bundle ID.',
    example: 'com.example.myapp',
    changelog: [{ version: '0.5.0', prs: [296], description: 'Added app.identifier attribute' }],
  },
  'app.in_foreground': {
    brief: 'Whether the application is currently in the foreground.',
    example: true,
    changelog: [{ version: '0.5.0', prs: [296], description: 'Added app.in_foreground attribute' }],
  },
  'app.name': {
    brief: 'Human readable application name, as it appears on the platform.',
    example: 'My App',
    changelog: [{ version: '0.5.0', prs: [296], description: 'Added app.name attribute' }],
  },
  app_start_cold: {
    brief: 'The duration of a cold app start in milliseconds',
    example: 1234.56,
    changelog: [
      { version: '0.5.0', prs: [323], description: 'Added and deprecated in favor of app.vitals.start.cold.value' },
    ],
  },
  'app.start_time': {
    brief: 'Formatted UTC timestamp when the user started the application.',
    example: '2025-01-01T00:00:00.000Z',
    changelog: [{ version: '0.5.0', prs: [296], description: 'Added app.start_time attribute' }],
  },
  app_start_type: {
    brief: 'Mobile app start variant. Either cold or warm.',
    example: 'cold',
    changelog: [
      { version: '0.5.0', prs: [313], description: 'Deprecated in favor of app.vitals.start.type' },
      { version: '0.1.0', prs: [127] },
      { version: '0.0.0' },
    ],
  },
  app_start_warm: {
    brief: 'The duration of a warm app start in milliseconds',
    example: 1234.56,
    changelog: [
      { version: '0.5.0', prs: [323], description: 'Added and deprecated in favor of app.vitals.start.warm.value' },
    ],
  },
  'app.version': {
    brief: 'Human readable application version, as it appears on the platform.',
    example: '1.0.0',
    changelog: [{ version: '0.5.0', prs: [296], description: 'Added app.version attribute' }],
  },
  'app.vitals.frames.delay.value': {
    brief:
      'The sum of all delayed frame durations in seconds during the lifetime of the span. For more information see [frames delay](https://develop.sentry.dev/sdk/performance/frames-delay/).',
    example: 5,
    changelog: [
      { version: '0.5.0', prs: [313], description: 'Added app.vitals.frames.delay.value to replace frames.delay' },
    ],
  },
  'app.vitals.frames.frozen.count': {
    brief: 'The number of frozen frames rendered during the lifetime of the span.',
    example: 3,
    changelog: [
      { version: '0.19.0', prs: [500], description: 'Added sentry.frames.frozen as an alias' },
      { version: '0.5.0', prs: [313], description: 'Added app.vitals.frames.frozen.count to replace frames.frozen' },
    ],
  },
  'app.vitals.frames.frozen.rate': {
    brief:
      'The fraction of rendered frames that were frozen, calculated as `app.vitals.frames.frozen.count` divided by `app.vitals.frames.total.count`. This is computed by Relay.',
    example: 0.5,
    changelog: [{ version: '0.19.0', prs: [493], description: 'Added app.vitals.frames.frozen.rate attribute' }],
  },
  'app.vitals.frames.slow.count': {
    brief: 'The number of slow frames rendered during the lifetime of the span.',
    example: 1,
    changelog: [
      { version: '0.19.0', prs: [500], description: 'Added sentry.frames.slow as an alias' },
      { version: '0.5.0', prs: [313], description: 'Added app.vitals.frames.slow.count to replace frames.slow' },
    ],
  },
  'app.vitals.frames.slow.rate': {
    brief:
      'The fraction of rendered frames that were slow, calculated as `app.vitals.frames.slow.count` divided by `app.vitals.frames.total.count`. This is computed by Relay.',
    example: 0.25,
    changelog: [{ version: '0.19.0', prs: [493], description: 'Added app.vitals.frames.slow.rate attribute' }],
  },
  'app.vitals.frames.total.count': {
    brief: 'The number of total frames rendered during the lifetime of the span.',
    example: 60,
    changelog: [
      { version: '0.19.0', prs: [500], description: 'Added sentry.frames.total as an alias' },
      { version: '0.5.0', prs: [313], description: 'Added app.vitals.frames.total.count to replace frames.total' },
    ],
  },
  'app.vitals.stall.duration': {
    brief:
      'The combined duration of all stalls in milliseconds. Only applies to React Native. This is computed by Relay.',
    example: 4000,
    changelog: [{ version: '0.19.0', prs: [493], description: 'Added app.vitals.stall.duration attribute' }],
  },
  'app.vitals.stall.percentage': {
    brief:
      'The fraction of transaction duration during which the app was stalled, between 0.0 and 1.0. For example, 0.8 represents 80%. Only applies to React Native. This is computed by Relay.',
    example: 0.8,
    changelog: [{ version: '0.19.0', prs: [493], description: 'Added app.vitals.stall.percentage attribute' }],
  },
  'app.vitals.start.cold.value': {
    brief: 'The duration of a cold app start in milliseconds',
    example: 1234.56,
    changelog: [{ version: '0.5.0', prs: [313], description: 'Added app.vitals.start.cold.value attribute' }],
  },
  'app.vitals.start.prewarmed': {
    brief: 'Whether the app start was prewarmed.',
    example: true,
    changelog: [{ version: '0.11.0', prs: [379], description: 'Added app.vitals.start.prewarmed attribute' }],
  },
  'app.vitals.start.reason': {
    brief: 'The reason that triggered the app start.',
    example: 'push',
    changelog: [{ version: '0.7.0', prs: [353], description: 'Added app.vitals.start.reason attribute' }],
  },
  'app.vitals.start.screen': {
    brief:
      'The screen that is rendered when the app start is complete. This is the screen the user first sees and can interact with after launch. The absence of this attribute on the app start span indicates a background app start where no UI was rendered.',
    example: 'MainActivity',
    changelog: [{ version: '0.7.0', prs: [353], description: 'Added app.vitals.start.screen attribute' }],
  },
  'app.vitals.start.type': {
    brief: 'The type of app start, for example `cold` or `warm`',
    example: 'cold',
    changelog: [{ version: '0.5.0', prs: [313], description: 'Added app.vitals.start.type attribute' }],
  },
  'app.vitals.start.warm.value': {
    brief: 'The duration of a warm app start in milliseconds',
    example: 1234.56,
    changelog: [{ version: '0.5.0', prs: [313], description: 'Added app.vitals.start.warm.value attribute' }],
  },
  'app.vitals.ttfd.value': {
    brief: 'The duration of time to full display in milliseconds',
    example: 1234.56,
    changelog: [{ version: '0.5.0', prs: [313], description: 'Added app.vitals.ttfd.value attribute' }],
  },
  'app.vitals.ttid.value': {
    brief: 'The duration of time to initial display in milliseconds',
    example: 1234.56,
    changelog: [{ version: '0.5.0', prs: [313], description: 'Added app.vitals.ttid.value attribute' }],
  },
  'art.gc.blocking_count': {
    brief: 'Total number of blocking (stop-the-world) garbage collections performed by the Android Runtime',
    example: 1,
    changelog: [{ version: '0.11.0', prs: [382], description: 'Added art.gc.blocking_count attribute' }],
  },
  'art.gc.blocking_time': {
    brief: 'Total time spent in blocking (stop-the-world) garbage collections by the Android Runtime, in milliseconds',
    example: 11.873,
    changelog: [{ version: '0.11.0', prs: [382], description: 'Added art.gc.blocking_time attribute' }],
  },
  'art.gc.pre_oome_count': {
    brief:
      'Total number of garbage collections triggered as a last resort before an OutOfMemoryError by the Android Runtime',
    example: 0,
    changelog: [{ version: '0.11.0', prs: [382], description: 'Added art.gc.pre_oome_count attribute' }],
  },
  'art.gc.total_count': {
    brief: 'Total number of garbage collections performed by the Android Runtime',
    example: 1,
    changelog: [{ version: '0.11.0', prs: [382], description: 'Added art.gc.total_count attribute' }],
  },
  'art.gc.total_time': {
    brief: 'Total time spent in garbage collection by the Android Runtime, in milliseconds',
    example: 11.807,
    changelog: [{ version: '0.11.0', prs: [382], description: 'Added art.gc.total_time attribute' }],
  },
  'art.gc.waiting_time': {
    brief:
      'Total time threads spent waiting for garbage collection to complete in the Android Runtime, in milliseconds',
    example: 8.054,
    changelog: [{ version: '0.11.0', prs: [382], description: 'Added art.gc.waiting_time attribute' }],
  },
  'art.memory.free': {
    brief: 'Free memory available to the process as reported by the Android Runtime, in bytes',
    example: 3181568,
    changelog: [{ version: '0.11.0', prs: [382], description: 'Added art.memory.free attribute' }],
  },
  'art.memory.free_until_gc': {
    brief: 'Free memory available before a garbage collection would be triggered by the Android Runtime, in bytes',
    example: 3181568,
    changelog: [{ version: '0.11.0', prs: [382], description: 'Added art.memory.free_until_gc attribute' }],
  },
  'art.memory.free_until_oome': {
    brief: 'Free memory available before an OutOfMemoryError would be thrown by the Android Runtime, in bytes',
    example: 196083712,
    changelog: [{ version: '0.11.0', prs: [382], description: 'Added art.memory.free_until_oome attribute' }],
  },
  'art.memory.max': {
    brief: 'Maximum memory the process is allowed to use as reported by the Android Runtime, in bytes',
    example: 201326592,
    changelog: [{ version: '0.11.0', prs: [382], description: 'Added art.memory.max attribute' }],
  },
  'art.memory.total': {
    brief: 'Total memory currently allocated to the process by the Android Runtime, in bytes',
    example: 7774208,
    changelog: [{ version: '0.11.0', prs: [382], description: 'Added art.memory.total attribute' }],
  },
  'aws.cloudwatch.logs.log_group': {
    brief: 'The name of the CloudWatch Logs log group',
    example: '/aws/lambda/my-function',
    changelog: [{ version: '0.7.0', prs: [369], description: 'Added aws.cloudwatch.logs.log_group attribute' }],
  },
  'aws.cloudwatch.logs.log_stream': {
    brief: 'The name of the CloudWatch Logs log stream',
    example: '2024/01/01/[$LATEST]abcdef1234567890',
    changelog: [{ version: '0.7.0', prs: [369], description: 'Added aws.cloudwatch.logs.log_stream attribute' }],
  },
  'aws.cloudwatch.logs.url': {
    brief: 'The URL to the CloudWatch Logs log group',
    example: 'https://console.aws.amazon.com/cloudwatch/home?region=us-east-1#logsV2:log-groups/log-group/my-log-group',
    changelog: [{ version: '0.7.0', prs: [369], description: 'Added aws.cloudwatch.logs.url attribute' }],
  },
  'aws.dynamodb.attribute_definitions': {
    brief: 'The JSON-serialized value of each item in the `AttributeDefinitions` request field.',
    example: ['{ "AttributeName": "string", "AttributeType": "string" }'],
    changelog: [{ version: '0.16.0', prs: [479], description: 'Added aws.dynamodb.attribute_definitions attribute' }],
  },
  'aws.dynamodb.consistent_read': {
    brief: 'The value of the `ConsistentRead` request parameter.',
    example: true,
    changelog: [{ version: '0.16.0', prs: [479], description: 'Added aws.dynamodb.consistent_read attribute' }],
  },
  'aws.dynamodb.consumed_capacity': {
    brief: 'The JSON-serialized value of each item in the `ConsumedCapacity` response field.',
    example: [
      '{ "CapacityUnits": number, "GlobalSecondaryIndexes": { "string" : { "CapacityUnits": number, "ReadCapacityUnits": number, "WriteCapacityUnits": number } }, "LocalSecondaryIndexes": { "string" : { "CapacityUnits": number, "ReadCapacityUnits": number, "WriteCapacityUnits": number } }, "ReadCapacityUnits": number, "Table": { "CapacityUnits": number, "ReadCapacityUnits": number, "WriteCapacityUnits": number }, "TableName": "string", "WriteCapacityUnits": number }',
    ],
    changelog: [{ version: '0.16.0', prs: [479], description: 'Added aws.dynamodb.consumed_capacity attribute' }],
  },
  'aws.dynamodb.count': {
    brief: 'The value of the `Count` response parameter.',
    example: 10,
    changelog: [{ version: '0.16.0', prs: [479], description: 'Added aws.dynamodb.count attribute' }],
  },
  'aws.dynamodb.exclusive_start_table': {
    brief: 'The value of the `ExclusiveStartTableName` request parameter.',
    example: 'Users',
    changelog: [{ version: '0.16.0', prs: [479], description: 'Added aws.dynamodb.exclusive_start_table attribute' }],
  },
  'aws.dynamodb.global_secondary_indexes': {
    brief: 'The JSON-serialized value of each item of the `GlobalSecondaryIndexes` request field.',
    example: [
      '{ "IndexName": "string", "KeySchema": [ { "AttributeName": "string", "KeyType": "string" } ], "Projection": { "NonKeyAttributes": [ "string" ], "ProjectionType": "string" }, "ProvisionedThroughput": { "ReadCapacityUnits": number, "WriteCapacityUnits": number } }',
    ],
    changelog: [
      { version: '0.16.0', prs: [479], description: 'Added aws.dynamodb.global_secondary_indexes attribute' },
    ],
  },
  'aws.dynamodb.global_secondary_index_updates': {
    brief: 'The JSON-serialized value of each item in the `GlobalSecondaryIndexUpdates` request field.',
    example: [
      '{ "Create": { "IndexName": "string", "KeySchema": [ { "AttributeName": "string", "KeyType": "string" } ], "Projection": { "NonKeyAttributes": [ "string" ], "ProjectionType": "string" }, "ProvisionedThroughput": { "ReadCapacityUnits": number, "WriteCapacityUnits": number } }',
    ],
    changelog: [
      { version: '0.16.0', prs: [479], description: 'Added aws.dynamodb.global_secondary_index_updates attribute' },
    ],
  },
  'aws.dynamodb.index_name': {
    brief: 'The value of the `IndexName` request parameter.',
    example: 'name_to_group',
    changelog: [{ version: '0.16.0', prs: [479], description: 'Added aws.dynamodb.index_name attribute' }],
  },
  'aws.dynamodb.item_collection_metrics': {
    brief: 'The JSON-serialized value of the `ItemCollectionMetrics` response field.',
    example:
      '{ "string" : [ { "ItemCollectionKey": { "string" : { "B": blob, "BOOL": boolean, "BS": [ blob ], "L": [ "AttributeValue" ], "M": { "string" : "AttributeValue" }, "N": "string", "NS": [ "string" ], "NULL": boolean, "S": "string", "SS": [ "string" ] } }, "SizeEstimateRangeGB": [ number ] } ] }',
    changelog: [{ version: '0.16.0', prs: [479], description: 'Added aws.dynamodb.item_collection_metrics attribute' }],
  },
  'aws.dynamodb.limit': {
    brief: 'The value of the `Limit` request parameter.',
    example: 10,
    changelog: [{ version: '0.16.0', prs: [479], description: 'Added aws.dynamodb.limit attribute' }],
  },
  'aws.dynamodb.local_secondary_indexes': {
    brief: 'The JSON-serialized value of each item of the `LocalSecondaryIndexes` request field.',
    example: [
      '{ "IndexArn": "string", "IndexName": "string", "IndexSizeBytes": number, "ItemCount": number, "KeySchema": [ { "AttributeName": "string", "KeyType": "string" } ], "Projection": { "NonKeyAttributes": [ "string" ], "ProjectionType": "string" } }',
    ],
    changelog: [{ version: '0.16.0', prs: [479], description: 'Added aws.dynamodb.local_secondary_indexes attribute' }],
  },
  'aws.dynamodb.projection': {
    brief: 'The value of the `ProjectionExpression` request parameter.',
    example: 'Title, Price, Color',
    changelog: [{ version: '0.16.0', prs: [479], description: 'Added aws.dynamodb.projection attribute' }],
  },
  'aws.dynamodb.provisioned_read_capacity': {
    brief: 'The value of the `ProvisionedThroughput.ReadCapacityUnits` request parameter.',
    example: 1,
    changelog: [
      { version: '0.16.0', prs: [479], description: 'Added aws.dynamodb.provisioned_read_capacity attribute' },
    ],
  },
  'aws.dynamodb.provisioned_write_capacity': {
    brief: 'The value of the `ProvisionedThroughput.WriteCapacityUnits` request parameter.',
    example: 2,
    changelog: [
      { version: '0.16.0', prs: [479], description: 'Added aws.dynamodb.provisioned_write_capacity attribute' },
    ],
  },
  'aws.dynamodb.scanned_count': {
    brief: 'The value of the `ScannedCount` response parameter.',
    example: 50,
    changelog: [{ version: '0.16.0', prs: [479], description: 'Added aws.dynamodb.scanned_count attribute' }],
  },
  'aws.dynamodb.scan_forward': {
    brief: 'The value of the `ScanIndexForward` request parameter.',
    example: true,
    changelog: [{ version: '0.16.0', prs: [479], description: 'Added aws.dynamodb.scan_forward attribute' }],
  },
  'aws.dynamodb.segment': {
    brief: 'The value of the `Segment` request parameter.',
    example: 10,
    changelog: [{ version: '0.16.0', prs: [479], description: 'Added aws.dynamodb.segment attribute' }],
  },
  'aws.dynamodb.select': {
    brief: 'The value of the `Select` request parameter.',
    example: 'ALL_ATTRIBUTES',
    changelog: [{ version: '0.16.0', prs: [479], description: 'Added aws.dynamodb.select attribute' }],
  },
  'aws.dynamodb.table_count': {
    brief: 'The number of items in the `TableNames` response parameter.',
    example: 20,
    changelog: [{ version: '0.16.0', prs: [479], description: 'Added aws.dynamodb.table_count attribute' }],
  },
  'aws.dynamodb.table_names': {
    brief: 'The keys in the `RequestItems` object field.',
    example: ['Users', 'Cats'],
    changelog: [{ version: '0.16.0', prs: [479], description: 'Added aws.dynamodb.table_names attribute' }],
  },
  'aws.dynamodb.total_segments': {
    brief: 'The value of the `TotalSegments` request parameter.',
    example: 100,
    changelog: [{ version: '0.16.0', prs: [479], description: 'Added aws.dynamodb.total_segments attribute' }],
  },
  'aws.extended_request_id': {
    brief: 'The AWS extended request ID as returned in the response headers.',
    example: 'wzHcyEWfmOGDIE5QOhTAqFDoDWP3y8IUvpNINCwL9N4TEHbUw0/gZJ+VZTmCNCWR7fezEN3eCiQ=',
    changelog: [{ version: '0.16.0', prs: [480], description: 'Added aws.extended_request_id attribute' }],
  },
  'aws.kinesis.stream_name': {
    brief: 'The name of the AWS Kinesis stream the request refers to.',
    example: 'some-stream-name',
    changelog: [{ version: '0.16.0', prs: [480], description: 'Added aws.kinesis.stream_name attribute' }],
  },
  'aws.kinesis.stream.name': {
    brief: 'The name of the AWS Kinesis stream the request refers to.',
    example: 'some-stream-name',
    changelog: [
      {
        version: '0.16.0',
        prs: [480],
        description: 'Added aws.kinesis.stream.name attribute, deprecated in favor of aws.kinesis.stream_name',
      },
    ],
  },
  'aws.lambda.aws_request_id': {
    brief: 'The AWS request ID as received by the Lambda function runtime',
    example: '8476a536-e9f4-11e8-9739-2dfe598c3fcd',
    changelog: [
      { version: '0.16.0', prs: [473], description: 'Added faas.execution as an alias' },
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
    example: 1234.56,
    changelog: [
      { version: '0.7.0', prs: [369], description: 'Added aws.lambda.execution_duration_in_millis attribute' },
    ],
  },
  'aws.lambda.function_name': {
    brief: 'The name of the Lambda function',
    example: 'my-function',
    changelog: [
      { version: '0.11.1', prs: [414], description: 'Deprecated aws.lambda.function_name in favor of faas.name' },
      { version: '0.7.0', prs: [369], description: 'Added aws.lambda.function_name attribute' },
    ],
  },
  'aws.lambda.function_version': {
    brief: 'The version of the Lambda function',
    example: '$LATEST',
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
    example: 'arn:aws:lambda:us-east-1:123456789012:function:my-function',
    changelog: [{ version: '0.11.1', prs: [414] }],
  },
  'aws.lambda.invoked_function_arn': {
    brief: 'The full ARN of the Lambda function that was invoked',
    example: 'arn:aws:lambda:us-east-1:123456789012:function:my-function',
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
    example: 5000,
    changelog: [{ version: '0.7.0', prs: [369], description: 'Added aws.lambda.remaining_time_in_millis attribute' }],
  },
  'aws.log.group.names': {
    brief: 'The name(s) of the AWS log group(s) an application is writing to.',
    example: ['/aws/lambda/my-function', 'opentelemetry-service'],
    changelog: [{ version: '0.11.1', prs: [414] }],
  },
  'aws.log.stream.names': {
    brief: 'The name(s) of the AWS log stream(s) an application is writing to.',
    example: ['logs/main/10838bed-421f-43ef-870a-f43feacbbb5b'],
    changelog: [{ version: '0.11.1', prs: [414] }],
  },
  'aws.operation_name': {
    brief: 'The name of the API operation invoked on an AWS service.',
    example: 'PutObject',
    examples: ['PutObject'],
    changelog: [{ version: '0.19.0', prs: [536], description: 'Added aws.operation_name attribute' }],
  },
  aws_region: {
    brief: 'The geographical region the AWS resource is running',
    example: 'us-east-1',
    examples: ['us-east-1'],
    changelog: [{ version: '0.19.0', prs: [537], description: 'Added aws_region attribute' }],
  },
  'aws.request.extended_id': {
    brief: 'The AWS extended request ID as returned in the response headers.',
    example: 'wzHcyEWfmOGDIE5QOhTAqFDoDWP3y8IUvpNINCwL9N4TEHbUw0/gZJ+VZTmCNCWR7fezEN3eCiQ=',
    changelog: [
      {
        version: '0.16.0',
        prs: [480],
        description: 'Added aws.request.extended_id attribute, deprecated in favor of aws.extended_request_id',
      },
    ],
  },
  'aws.request_id': {
    brief: 'The AWS request ID as returned in the response headers.',
    example: '79b9da39-b7ae-508a-a6bc-864b2829c622',
    changelog: [{ version: '0.16.0', prs: [480], description: 'Added aws.request_id attribute' }],
  },
  'aws.request.id': {
    brief: 'The AWS request ID as returned in the response headers.',
    example: '79b9da39-b7ae-508a-a6bc-864b2829c622',
    changelog: [
      {
        version: '0.16.0',
        prs: [480],
        description: 'Added aws.request.id attribute, deprecated in favor of aws.request_id',
      },
    ],
  },
  'aws.request.url': {
    brief: 'The URL of the AWS API request.',
    example: 'https://sqs.us-east-1.amazonaws.com/123456789/my-queue',
    changelog: [
      {
        version: '0.19.0',
        prs: [488],
        description: 'Added aws.request.url attribute, deprecated in favor of url.full',
      },
    ],
  },
  'aws.s3.bucket': {
    brief: 'The S3 bucket name the request refers to.',
    example: 'ot-demo-test',
    changelog: [{ version: '0.16.0', prs: [480], description: 'Added aws.s3.bucket attribute' }],
  },
  'aws.secretsmanager.secret.arn': {
    brief: 'The ARN of the Secret stored in Secrets Manager.',
    example: 'arn:aws:secretsmanager:us-east-1:123456789012:secret:SecretName-6RandomCharacters',
    changelog: [{ version: '0.16.0', prs: [480], description: 'Added aws.secretsmanager.secret.arn attribute' }],
  },
  'aws.sns.topic.arn': {
    brief:
      'The ARN of the AWS SNS Topic. An Amazon SNS topic is a logical access point that acts as a communication channel.',
    example: 'arn:aws:sns:us-east-1:123456789012:mystack-mytopic-NZJ5JSMVGFIE',
    changelog: [{ version: '0.16.0', prs: [480], description: 'Added aws.sns.topic.arn attribute' }],
  },
  'aws.step_functions.activity.arn': {
    brief: 'The ARN of the AWS Step Functions Activity.',
    example: 'arn:aws:states:us-east-1:123456789012:activity:get-greeting',
    changelog: [{ version: '0.16.0', prs: [480], description: 'Added aws.step_functions.activity.arn attribute' }],
  },
  'aws.step_functions.state_machine.arn': {
    brief: 'The ARN of the AWS Step Functions State Machine.',
    example: 'arn:aws:states:us-east-1:123456789012:stateMachine:myStateMachine:1',
    changelog: [{ version: '0.16.0', prs: [480], description: 'Added aws.step_functions.state_machine.arn attribute' }],
  },
  blocked_main_thread: {
    brief: 'Whether the main thread was blocked by the span.',
    example: true,
    changelog: [{ version: '0.0.0' }],
  },
  'browser.bfcache.frame': {
    brief:
      "Which frame in the page's frame tree a back/forward cache not-restored reason originated from: the top document or a child frame.",
    example: 'top',
    examples: ['top', 'child'],
    changelog: [{ version: '0.19.0', prs: [513], description: 'Added browser.bfcache.frame attribute' }],
  },
  'browser.bfcache.not_restored_reason_count': {
    brief:
      'The number of reported reasons a page was not restored from the back/forward cache on a back/forward navigation. 0 when the browser reported no reasons (e.g. non-Chromium browsers).',
    example: 2,
    examples: [2],
    changelog: [
      { version: '0.19.0', prs: [513], description: 'Added browser.bfcache.not_restored_reason_count attribute' },
    ],
  },
  'browser.bfcache.outcome': {
    brief:
      "Whether a back/forward navigation was restored from the browser's back/forward cache (bfcache). 'hit' means the page was restored; 'miss' means it was reloaded.",
    example: 'hit',
    examples: ['hit', 'miss'],
    changelog: [{ version: '0.19.0', prs: [513], description: 'Added browser.bfcache.outcome attribute' }],
  },
  'browser.bfcache.reason': {
    brief:
      'A browser-reported reason a page was not restored from the back/forward cache on a back/forward navigation, taken from the notRestoredReasons API. Reported per reason (a single miss can have several). Currently Chromium-only.',
    example: 'unload-listener',
    examples: ['unload-listener', 'websocket', 'idbversionchangeevent', 'response-cache-control-no-store'],
    changelog: [{ version: '0.19.0', prs: [513], description: 'Added browser.bfcache.reason attribute' }],
  },
  'browser.name': {
    brief: 'The name of the browser.',
    example: 'Chrome',
    changelog: [{ version: '0.1.0', prs: [127, 139] }, { version: '0.0.0' }],
  },
  'browser.performance.navigation.activation_start': {
    brief: 'The time between initiating a navigation to a page and the browser activating the page',
    example: 1.983,
    changelog: [
      { version: '0.5.0', prs: [321], description: 'Added browser.performance.navigation.activation_start attribute' },
    ],
  },
  'browser.performance.time_origin': {
    brief: "The browser's performance.timeOrigin timestamp representing the time when the pageload was initiated",
    example: 1776185678.886,
    changelog: [
      { version: '0.5.0', prs: [321], description: 'Added browser.performance.time_origin attribute attribute' },
    ],
  },
  'browser.report.type': {
    brief: 'A browser report sent via reporting API..',
    example: 'network-error',
    changelog: [{ version: '0.1.0', prs: [68, 127] }],
  },
  'browser.script.invoker': {
    brief: 'How a script was called in the browser.',
    example: 'Window.requestAnimationFrame',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'browser.script.invoker_type': {
    brief: 'Browser script entry point type.',
    example: 'event-listener',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'browser.script.source_char_position': {
    brief: 'A number representing the script character position of the script.',
    example: 678,
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.0.0' }],
  },
  'browser.version': {
    brief: 'The version of the browser.',
    example: '120.0.6099.130',
    changelog: [{ version: '0.1.0', prs: [59, 127, 139] }],
  },
  'browser.web_vital.cls.report_event': {
    brief: 'The event that caused the SDK to report CLS (pagehide or navigation)',
    example: 'navigation',
    changelog: [{ version: '0.5.0', prs: [319], description: 'Added browser.web_vital.cls.report_event attribute' }],
  },
  'browser.web_vital.cls.source.<key>': {
    brief: 'The HTML elements or components responsible for the layout shift. <key> is a numeric index from 1 to N',
    example: 'body > div#app',
    changelog: [{ version: '0.5.0', prs: [234] }],
  },
  'browser.web_vital.cls.value': {
    brief: 'The value of the recorded Cumulative Layout Shift (CLS) web vital',
    example: 0.2361,
    changelog: [{ version: '0.5.0', prs: [229], description: 'Added browser.web_vital.cls.value attribute' }],
  },
  'browser.web_vital.fcp.value': {
    brief: 'The time it takes for the browser to render the first piece of meaningful content on the screen',
    example: 547.6951,
    changelog: [{ version: '0.5.0', prs: [235] }],
  },
  'browser.web_vital.fp.value': {
    brief: 'The time in milliseconds it takes for the browser to render the first pixel on the screen',
    example: 477.1926,
    changelog: [{ version: '0.5.0', prs: [235] }],
  },
  'browser.web_vital.inp.value': {
    brief: 'The value of the recorded Interaction to Next Paint (INP) web vital',
    example: 200,
    changelog: [{ version: '0.5.0', prs: [229], description: 'Added browser.web_vital.inp.value attribute' }],
  },
  'browser.web_vital.lcp.element': {
    brief: 'The HTML element selector or component name for which LCP was reported',
    example: 'body > div#app > div#container > div',
    changelog: [{ version: '0.5.0', prs: [233] }],
  },
  'browser.web_vital.lcp.id': {
    brief: 'The id of the dom element responsible for the largest contentful paint',
    example: '#gero',
    changelog: [{ version: '0.5.0', prs: [233] }],
  },
  'browser.web_vital.lcp.load_time': {
    brief: 'The time it took for the LCP element to be loaded',
    example: 1402,
    changelog: [{ version: '0.5.0', prs: [233] }],
  },
  'browser.web_vital.lcp.render_time': {
    brief: 'The time it took for the LCP element to be rendered',
    example: 1685,
    changelog: [{ version: '0.5.0', prs: [233] }],
  },
  'browser.web_vital.lcp.report_event': {
    brief: 'The event that caused the SDK to report LCP (pagehide or navigation)',
    example: 'pagehide',
    changelog: [{ version: '0.5.0', prs: [319], description: 'Added browser.web_vital.lcp.report_event attribute' }],
  },
  'browser.web_vital.lcp.size': {
    brief: 'The size of the largest contentful paint element',
    example: 1024,
    changelog: [{ version: '0.5.0', prs: [233] }],
  },
  'browser.web_vital.lcp.url': {
    brief: 'The url of the dom element responsible for the largest contentful paint',
    example: 'https://example.com/static/img.png',
    changelog: [{ version: '0.5.0', prs: [233] }],
  },
  'browser.web_vital.lcp.value': {
    brief: 'The value of the recorded Largest Contentful Paint (LCP) web vital',
    example: 2500,
    changelog: [{ version: '0.5.0', prs: [229], description: 'Added browser.web_vital.lcp.value attribute' }],
  },
  'browser.web_vital.ttfb.request_time': {
    brief:
      "The time it takes for the server to process the initial request and send the first byte of a response to the user's browser",
    example: 1554.5814,
    changelog: [{ version: '0.5.0', prs: [235] }],
  },
  'browser.web_vital.ttfb.value': {
    brief: 'The value of the recorded Time To First Byte (TTFB) web vital in Milliseconds',
    example: 194.3322,
    changelog: [{ version: '0.5.0', prs: [235] }],
  },
  'cache.hit': {
    brief: 'If the cache was hit during this span.',
    example: true,
    changelog: [{ version: '0.0.0' }],
  },
  'cache.item_size': {
    brief: 'The size of the requested item in the cache. In bytes.',
    example: 58,
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.0.0' }],
  },
  'cache.key': {
    brief: 'The key of the cache accessed.',
    example: ['my-cache-key', 'my-other-cache-key'],
    changelog: [{ version: '0.0.0' }],
  },
  'cache.operation': {
    brief: 'The operation being performed on the cache.',
    example: 'get',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'cache.ttl': {
    brief: 'The ttl of the cache in seconds',
    example: 120,
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.0.0' }],
  },
  'cache.write': {
    brief: 'If the cache operation resulted in a write to the cache.',
    example: true,
    changelog: [{ version: '0.5.0' }],
  },
  channel: {
    brief: 'The channel name that is being used.',
    example: 'mail',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'client.address': {
    brief:
      'Client address - domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.',
    example: 'example.com',
    changelog: [{ version: '0.1.0', prs: [106, 127] }, { version: '0.0.0' }],
  },
  'client.port': {
    brief: 'Client port number.',
    example: 5432,
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.0.0' }],
  },
  'cloudflare.d1.duration': {
    brief: 'The duration of a Cloudflare D1 operation.',
    example: 543,
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.0.0' }],
  },
  'cloudflare.d1.query_type': {
    brief: 'The type of query executed in a Cloudflare D1 operation',
    example: 'run',
    changelog: [
      { version: '0.19.0', prs: [531], description: 'Added redis.command as an alias' },
      { version: '0.11.0', prs: [392], description: 'Added cloudflare.d1.query_type attribute' },
    ],
  },
  'cloudflare.d1.rows_read': {
    brief: 'The number of rows read in a Cloudflare D1 operation.',
    example: 12,
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.0.0' }],
  },
  'cloudflare.d1.rows_written': {
    brief: 'The number of rows written in a Cloudflare D1 operation.',
    example: 12,
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.0.0' }],
  },
  'cloudflare.durable_object.query.bindings': {
    brief: 'The number of bound parameters passed to the SQL exec call.',
    example: 2,
    changelog: [
      { version: '0.13.0', prs: [435], description: 'Added cloudflare.durable_object.query.bindings attribute' },
    ],
  },
  'cloudflare.durable_object.response.rows_read': {
    brief: 'The number of rows read by a Cloudflare Durable Object SQL operation.',
    example: 12,
    changelog: [
      { version: '0.13.0', prs: [435], description: 'Added cloudflare.durable_object.response.rows_read attribute' },
    ],
  },
  'cloudflare.durable_object.response.rows_written': {
    brief: 'The number of rows written by a Cloudflare Durable Object SQL operation.',
    example: 1,
    changelog: [
      { version: '0.13.0', prs: [435], description: 'Added cloudflare.durable_object.response.rows_written attribute' },
    ],
  },
  'cloudflare.r2.bucket': {
    brief: 'The name of the Cloudflare R2 bucket binding',
    example: 'MY_BUCKET',
    changelog: [{ version: '0.11.1', prs: [413], description: 'Added cloudflare.r2.bucket attribute' }],
  },
  'cloudflare.r2.operation': {
    brief: 'The R2 API operation being performed',
    example: 'GetObject',
    changelog: [{ version: '0.11.1', prs: [413], description: 'Added cloudflare.r2.operation attribute' }],
  },
  'cloudflare.r2.request.delimiter': {
    brief: 'The delimiter used to group objects in an R2 list operation',
    example: '/',
    changelog: [{ version: '0.11.1', prs: [413], description: 'Added cloudflare.r2.request.delimiter attribute' }],
  },
  'cloudflare.r2.request.key': {
    brief: 'The object key used in the R2 operation',
    example: 'my-file.txt',
    changelog: [{ version: '0.11.1', prs: [413], description: 'Added cloudflare.r2.request.key attribute' }],
  },
  'cloudflare.r2.request.part_number': {
    brief: 'The part number in a multipart upload operation',
    example: 1,
    changelog: [{ version: '0.11.1', prs: [413], description: 'Added cloudflare.r2.request.part_number attribute' }],
  },
  'cloudflare.r2.request.prefix': {
    brief: 'The prefix used to filter objects in an R2 list operation',
    example: 'images/',
    changelog: [{ version: '0.11.1', prs: [413], description: 'Added cloudflare.r2.request.prefix attribute' }],
  },
  'cloudflare.workflow.attempt': {
    brief: 'The current attempt number for a Cloudflare Workflow step',
    example: 1,
    changelog: [{ version: '0.11.0', prs: [392], description: 'Added cloudflare.workflow.attempt attribute' }],
  },
  'cloudflare.workflow.retries.backoff': {
    brief: 'The backoff strategy for Cloudflare Workflow step retries',
    example: 'exponential',
    changelog: [{ version: '0.11.0', prs: [392], description: 'Added cloudflare.workflow.retries.backoff attribute' }],
  },
  'cloudflare.workflow.retries.delay': {
    brief: 'The delay between Cloudflare Workflow step retries',
    example: '5 seconds',
    changelog: [{ version: '0.11.0', prs: [392], description: 'Added cloudflare.workflow.retries.delay attribute' }],
  },
  'cloudflare.workflow.retries.limit': {
    brief: 'The maximum number of retries for a Cloudflare Workflow step',
    example: 3,
    changelog: [{ version: '0.11.0', prs: [392], description: 'Added cloudflare.workflow.retries.limit attribute' }],
  },
  'cloudflare.workflow.timeout': {
    brief: 'The timeout duration for a Cloudflare Workflow step',
    example: '1 minute',
    changelog: [{ version: '0.11.0', prs: [392], description: 'Added cloudflare.workflow.timeout attribute' }],
  },
  'cloud.account.id': {
    brief: 'The cloud account ID the resource is assigned to',
    example: '123456789012',
    changelog: [{ version: '0.7.0', prs: [364], description: 'Added cloud.account.id attribute' }],
  },
  'cloud.availability_zone': {
    brief: 'Cloud regions often have multiple, isolated locations known as zones to increase availability',
    example: 'us-east-1c',
    changelog: [{ version: '0.7.0', prs: [364], description: 'Added cloud.availability_zone attribute' }],
  },
  'cloud.platform': {
    brief: 'The cloud platform in use',
    example: 'aws_lambda',
    changelog: [{ version: '0.7.0', prs: [364], description: 'Added cloud.platform attribute' }],
  },
  'cloud.provider': {
    brief: 'Name of the cloud provider',
    example: 'aws',
    changelog: [{ version: '0.7.0', prs: [364], description: 'Added cloud.provider attribute' }],
  },
  'cloud.region': {
    brief: 'The geographical region the resource is running',
    example: 'us-east-1',
    changelog: [
      { version: '0.19.0', prs: [535, 537], description: 'Added aws_region and gcp_region as aliases' },
      { version: '0.7.0', prs: [364], description: 'Added cloud.region attribute' },
    ],
  },
  'cloud.resource_id': {
    brief: 'Cloud provider-specific native identifier of the monitored cloud resource',
    example: 'arn:aws:lambda:REGION:ACCOUNT_ID:function:my-function',
    changelog: [
      { version: '0.16.0', prs: [475], description: 'Added faas.id as an alias' },
      { version: '0.11.1', prs: [414] },
    ],
    additionalContext: [
      'This can be an identifier for a resource in AWS, GCP, or Azure. There may be some overlap in values found here with other attributes. For instance, an AWS lambda ARN may be found here as well as in `aws.lambda.invoked_arn`. OTEL recommends setting them alongside each other.',
    ],
  },
  cls: {
    brief: 'The value of the recorded Cumulative Layout Shift (CLS) web vital',
    example: 0.2361,
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
    example: 'body > div#app',
    changelog: [{ version: '0.5.0', prs: [234] }],
  },
  code: {
    brief: 'Status code of the RPC returned by the RPC server or generated by the client.',
    example: 'DEADLINE_EXCEEDED',
    examples: ['DEADLINE_EXCEEDED'],
    changelog: [{ version: '0.19.0', prs: [533], description: 'Added code attribute' }],
  },
  'code.filepath': {
    brief:
      'The source code file name that identifies the code unit as uniquely as possible (preferably an absolute file path).',
    example: '/app/myapplication/http/handler/server.py',
    changelog: [{ version: '0.1.0', prs: [61] }, { version: '0.0.0' }],
  },
  'code.file.path': {
    brief:
      'The source code file name that identifies the code unit as uniquely as possible (preferably an absolute file path).',
    example: '/app/myapplication/http/handler/server.py',
    changelog: [{ version: '0.0.0' }],
  },
  'code.function': {
    brief: "The method or function name, or equivalent (usually rightmost part of the code unit's name).",
    example: 'server_request',
    changelog: [
      { version: '0.19.0', prs: [538], description: 'Added django.function_name as an alias' },
      { version: '0.1.0', prs: [61, 74] },
      { version: '0.0.0' },
    ],
  },
  'code.function.name': {
    brief: 'The method or function fully-qualified name without arguments.',
    example: 'server_request',
    changelog: [
      { version: '0.19.0', prs: [538], description: 'Added django.function_name as an alias' },
      { version: '0.1.0', prs: [127] },
      { version: '0.0.0' },
    ],
  },
  'code.lineno': {
    brief:
      'The line number in code.filepath best representing the operation. It SHOULD point within the code unit named in code.function',
    example: 42,
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.1.0', prs: [61, 108] }, { version: '0.0.0' }],
  },
  'code.line.number': {
    brief:
      'The line number in code.filepath best representing the operation. It SHOULD point within the code unit named in code.function',
    example: 42,
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.0.0' }],
  },
  'code.namespace': {
    brief:
      "The 'namespace' within which code.function is defined. Usually the qualified class or module name, such that code.namespace + some separator + code.function form a unique identifier for the code unit.",
    example: 'http.handler',
    changelog: [{ version: '0.1.0', prs: [61, 74] }, { version: '0.0.0' }],
  },
  connectionType: {
    brief: 'Specifies the type of the current connection (e.g. wifi, ethernet, cellular , etc).',
    example: 'wifi',
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
    example: 100,
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
    example: 'GregorianCalendar',
    changelog: [{ version: '0.4.0', prs: [243] }],
  },
  'culture.display_name': {
    brief: 'Human readable name of the culture.',
    example: 'English (United States)',
    changelog: [{ version: '0.4.0', prs: [243] }],
  },
  'culture.is_24_hour_format': {
    brief: 'Whether the culture uses 24-hour time format.',
    example: true,
    changelog: [{ version: '0.4.0', prs: [243] }],
  },
  'culture.locale': {
    brief: 'The locale identifier following RFC 4646.',
    example: 'en-US',
    changelog: [{ version: '0.4.0', prs: [243] }],
  },
  'culture.timezone': {
    brief: 'The timezone of the culture, as a geographic timezone identifier.',
    example: 'Europe/Vienna',
    changelog: [{ version: '0.4.0', prs: [243] }],
  },
  'db.collection.name': {
    brief: 'The name of a collection (table, container) within the database.',
    example: 'users',
    changelog: [
      { version: '0.19.0', prs: [483], description: 'Added db.mongodb.collection as an alias' },
      { version: '0.1.0', prs: [106, 127] },
      { version: '0.0.0' },
    ],
  },
  'db.driver.name': {
    brief: 'The name of the driver used for the database connection.',
    example: 'psycopg2',
    changelog: [{ version: '0.5.0', prs: [297], description: 'Added db.driver.name attribute' }],
  },
  'db.mongodb.collection': {
    brief: 'The MongoDB collection being accessed.',
    example: 'users',
    changelog: [
      {
        version: '0.19.0',
        prs: [483],
        description: 'Added db.mongodb.collection attribute, deprecated in favor of db.collection.name',
      },
    ],
  },
  'db.name': {
    brief: 'The name of the database being accessed.',
    example: 'customers',
    changelog: [{ version: '0.1.0', prs: [61, 127] }, { version: '0.0.0' }],
  },
  'db.namespace': {
    brief: 'The name of the database being accessed.',
    example: 'customers',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'db.operation': {
    brief: 'The name of the operation being executed.',
    example: 'SELECT',
    changelog: [
      { version: '0.19.0', prs: [531], description: 'Added redis.command as an alias' },
      { version: '0.4.0', prs: [199] },
      { version: '0.1.0', prs: [61, 127] },
      { version: '0.0.0' },
    ],
  },
  'db.operation.batch.size': {
    brief:
      'The number of queries included in a batch operation. Operations are only considered batches when they contain two or more operations, and so db.operation.batch.size SHOULD never be 1.',
    example: 3,
    changelog: [{ version: '0.11.0', prs: [407], description: 'Added db.operation.batch.size attribute' }],
  },
  'db.operation.name': {
    brief: 'The name of the operation being executed.',
    example: 'SELECT',
    changelog: [
      { version: '0.19.0', prs: [531], description: 'Added redis.command as an alias' },
      { version: '0.1.0', prs: [127] },
      { version: '0.0.0' },
    ],
  },
  'db.params': {
    brief: 'The query bindings for a database request.',
    example: '[{"x": 100}]',
    examples: ['[{"x": 100}]'],
    changelog: [{ version: '0.19.0', prs: [529], description: 'Added db.params attribute' }],
  },
  'db.query.parameter.<key>': {
    brief:
      'A query parameter used in db.query.text, with <key> being the parameter name, and the attribute value being a string representation of the parameter value.',
    example: "db.query.parameter.foo='123'",
    changelog: [{ version: '0.1.0', prs: [103, 127] }],
  },
  'db.query.summary': {
    brief:
      'A shortened representation of operation(s) in the full query. This attribute must be low-cardinality and should only contain the operation table names.',
    example: 'SELECT users',
    examples: ['SELECT users', 'INSERT products; UPDATE orders'],
    changelog: [
      { version: '0.19.0', prs: [505], description: 'Added multiple examples' },
      { version: '0.4.0', prs: [208] },
      { version: '0.1.0', prs: [127] },
      { version: '0.0.0' },
    ],
  },
  'db.query.text': {
    brief:
      'The database parameterized query being executed. Any parameter values (filters, insertion values, etc) should be replaced with parameter placeholders. If applicable, use `db.query.parameter.<key>` to add the parameter value.',
    example: 'SELECT * FROM users WHERE id = $1',
    changelog: [
      { version: '0.19.0', prs: [530], description: 'Added query as an alias' },
      { version: '0.4.0', prs: [208] },
      { version: '0.1.0', prs: [127] },
      { version: '0.0.0' },
    ],
  },
  'db.redis.connection': {
    brief: 'The redis connection name.',
    example: 'my-redis-instance',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'db.redis.key': {
    brief: 'The key the Redis command is operating on.',
    example: 'user:2047:city',
    changelog: [
      { version: '0.19.0', prs: [484], description: 'Added redis.key as an alias' },
      { version: '0.6.0', prs: [326], description: 'Added db.redis.key attribute' },
    ],
  },
  'db.redis.parameters': {
    brief: 'The array of command parameters given to a redis command.',
    example: ['test', '*'],
    changelog: [{ version: '0.0.0' }],
  },
  'db.response.status_code': {
    brief:
      'Database response status code. The status code returned by the database. Usually it represents an error code, but may also represent partial success, warning, or differentiate between various types of successful outcomes.',
    example: 'ORA-17002',
    changelog: [{ version: '0.16.0', prs: [462], description: 'Added db.response.status_code attribute' }],
  },
  'db.sql.bindings': {
    brief: 'The array of query bindings.',
    example: ['1', 'foo'],
    changelog: [{ version: '0.1.0', prs: [61] }, { version: '0.0.0' }],
  },
  'db.statement': {
    brief: 'The database statement being executed.',
    example: 'SELECT * FROM users WHERE id = $1',
    changelog: [
      {
        version: '0.19.0',
        prs: [501],
        description: 'Improved example, added deprecation reason, and added query as an alias',
      },
      { version: '0.4.0', prs: [199] },
      { version: '0.1.0', prs: [61, 127] },
      { version: '0.0.0' },
    ],
  },
  'db.stored_procedure.name': {
    brief: 'The name of a stored procedure being called.',
    example: 'GetUserById',
    changelog: [{ version: '0.11.0', prs: [398] }],
  },
  'db.system': {
    brief:
      'An identifier for the database management system (DBMS) product being used. See [OpenTelemetry docs](https://github.com/open-telemetry/semantic-conventions/blob/main/docs/database/database-spans.md#notes-and-well-known-identifiers-for-dbsystem) for a list of well-known identifiers.',
    example: 'postgresql',
    changelog: [{ version: '0.4.0', prs: [199, 224] }, { version: '0.1.0', prs: [61, 127] }, { version: '0.0.0' }],
  },
  'db.system.name': {
    brief:
      'An identifier for the database management system (DBMS) product being used. See [OpenTelemetry docs](https://github.com/open-telemetry/semantic-conventions/blob/main/docs/database/database-spans.md#notes-and-well-known-identifiers-for-dbsystem) for a list of well-known identifiers.',
    example: 'postgresql',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'db.user': {
    brief: 'The database user.',
    example: 'fancy_user',
    changelog: [{ version: '0.0.0' }],
  },
  deviceMemory: {
    brief: 'The estimated total memory capacity of the device, only a rough estimation in gigabytes.',
    example: '8 GB',
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
    example: ['arm64-v8a', 'armeabi-v7a', 'armeabi'],
    changelog: [{ version: '0.5.0', prs: [303], description: 'Added device.archs attribute' }],
  },
  'device.battery_level': {
    brief: 'The battery level of the device as a percentage (0-100).',
    example: 100,
    changelog: [{ version: '0.5.0', prs: [303], description: 'Added device.battery_level attribute' }],
  },
  'device.battery_temperature': {
    brief: 'The battery temperature of the device in Celsius.',
    example: 25,
    changelog: [{ version: '0.5.0', prs: [303], description: 'Added device.battery_temperature attribute' }],
  },
  'device.boot_time': {
    brief: 'A formatted UTC timestamp when the system was booted.',
    example: '2018-02-08T12:52:12Z',
    changelog: [{ version: '0.5.0', prs: [303], description: 'Added device.boot_time attribute' }],
  },
  'device.brand': {
    brief: 'The brand of the device.',
    example: 'Apple',
    changelog: [{ version: '0.1.0', prs: [116, 127] }],
  },
  'device.charging': {
    brief: 'Whether the device was charging or not.',
    example: false,
    changelog: [{ version: '0.5.0', prs: [303], description: 'Added device.charging attribute' }],
  },
  'device.chipset': {
    brief: 'The chipset of the device.',
    example: 'Qualcomm SM8550',
    changelog: [{ version: '0.5.0', prs: [303], description: 'Added device.chipset attribute' }],
  },
  'device.class': {
    brief:
      'The classification of the device. For example, `low`, `medium`, or `high`. Typically inferred by Relay - SDKs generally do not need to set this directly.',
    example: 'medium',
    changelog: [{ version: '0.5.0', prs: [300], description: 'Added device.class attribute' }],
  },
  'device.connection_type': {
    brief: 'The internet connection type currently being used by the device.',
    example: 'wifi',
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
    example: 'Intel(R) Core(TM)2 Quad CPU Q6600 @ 2.40GHz',
    changelog: [{ version: '0.5.0', prs: [303], description: 'Added device.cpu_description attribute' }],
  },
  'device.external_free_storage': {
    brief: 'External storage free size in bytes.',
    example: 67108864000,
    changelog: [{ version: '0.5.0', prs: [303], description: 'Added device.external_free_storage attribute' }],
  },
  'device.external_storage_size': {
    brief: 'External storage total size in bytes.',
    example: 134217728000,
    changelog: [{ version: '0.5.0', prs: [303], description: 'Added device.external_storage_size attribute' }],
  },
  'device.family': {
    brief: 'The family of the device.',
    example: 'iPhone',
    changelog: [{ version: '0.1.0', prs: [116, 127] }],
  },
  'device.free_memory': {
    brief: 'Free system memory in bytes.',
    example: 2147483648,
    changelog: [{ version: '0.5.0', prs: [300], description: 'Added device.free_memory attribute' }],
  },
  'device.free_storage': {
    brief: 'Free device storage in bytes.',
    example: 107374182400,
    changelog: [{ version: '0.5.0', prs: [303], description: 'Added device.free_storage attribute' }],
  },
  'device.id': {
    brief: 'Unique device identifier.',
    example: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
    changelog: [{ version: '0.5.0', prs: [303], description: 'Added device.id attribute' }],
  },
  'device.locale': {
    brief: 'The locale of the device.',
    example: 'en-US',
    changelog: [{ version: '0.5.0', prs: [303], description: 'Added device.locale attribute' }],
  },
  'device.low_memory': {
    brief: 'Whether the device was low on memory.',
    example: false,
    changelog: [{ version: '0.5.0', prs: [303], description: 'Added device.low_memory attribute' }],
  },
  'device.low_power_mode': {
    brief: 'Whether the device is in Low Power Mode.',
    example: true,
    changelog: [{ version: '0.6.0', prs: [314], description: 'Added device.low_power_mode attribute' }],
  },
  'device.manufacturer': {
    brief: 'The manufacturer of the device.',
    example: 'Google',
    changelog: [{ version: '0.5.0', prs: [303], description: 'Added device.manufacturer attribute' }],
  },
  'device.memory.estimated_capacity': {
    brief:
      'The estimated total memory capacity of the device, only a rough estimation in gigabytes. Browsers report estimations in buckets of powers of 2, mostly capped at 8 GB',
    example: 8,
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
    example: 17179869184,
    changelog: [{ version: '0.5.0', prs: [300], description: 'Added device.memory_size attribute' }],
  },
  'device.model': {
    brief: 'The model of the device.',
    example: 'iPhone 15 Pro Max',
    changelog: [{ version: '0.1.0', prs: [116, 127] }],
  },
  'device.model_id': {
    brief: 'An internal hardware revision to identify the device exactly.',
    example: 'N861AP',
    changelog: [{ version: '0.5.0', prs: [300], description: 'Added device.model_id attribute' }],
  },
  'device.name': {
    brief:
      'The name of the device. On mobile, this is the user-assigned device name. On servers and desktops, this is typically the hostname.',
    example: 'localhost',
    changelog: [{ version: '0.5.0', prs: [303], description: 'Added device.name attribute' }],
  },
  'device.online': {
    brief: 'Whether the device was online or not.',
    example: true,
    changelog: [{ version: '0.5.0', prs: [303], description: 'Added device.online attribute' }],
  },
  'device.orientation': {
    brief: 'The orientation of the device, either "portrait" or "landscape".',
    example: 'portrait',
    changelog: [{ version: '0.5.0', prs: [303], description: 'Added device.orientation attribute' }],
  },
  'device.processor_count': {
    brief: 'Number of "logical processors".',
    example: 8,
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
    example: 2400,
    changelog: [{ version: '0.5.0', prs: [303], description: 'Added device.processor_frequency attribute' }],
  },
  'device.screen_density': {
    brief: 'The screen density of the device.',
    example: 2.625,
    changelog: [{ version: '0.5.0', prs: [303], description: 'Added device.screen_density attribute' }],
  },
  'device.screen_dpi': {
    brief: 'The screen density in dots-per-inch (DPI) of the device.',
    example: 420,
    changelog: [{ version: '0.5.0', prs: [303], description: 'Added device.screen_dpi attribute' }],
  },
  'device.screen_height_pixels': {
    brief: 'The height of the device screen in pixels.',
    example: 2400,
    changelog: [{ version: '0.5.0', prs: [303], description: 'Added device.screen_height_pixels attribute' }],
  },
  'device.screen_width_pixels': {
    brief: 'The width of the device screen in pixels.',
    example: 1080,
    changelog: [{ version: '0.5.0', prs: [303], description: 'Added device.screen_width_pixels attribute' }],
  },
  'device.simulator': {
    brief: 'Whether the device is a simulator or an actual device.',
    example: false,
    changelog: [{ version: '0.5.0', prs: [300], description: 'Added device.simulator attribute' }],
  },
  'device.storage_size': {
    brief: 'Total device storage in bytes.',
    example: 274877906944,
    changelog: [{ version: '0.5.0', prs: [303], description: 'Added device.storage_size attribute' }],
  },
  'device.thermal_state': {
    brief:
      "The thermal state of the device. Based on Apple's `ProcessInfo.ThermalState` enum: `nominal`, `fair`, `serious`, or `critical`.",
    example: 'nominal',
    changelog: [{ version: '0.5.0', prs: [303], description: 'Added device.thermal_state attribute' }],
  },
  'device.timezone': {
    brief: 'The timezone of the device.',
    example: 'Europe/Vienna',
    changelog: [{ version: '0.5.0', prs: [303], description: 'Added device.timezone attribute' }],
  },
  'device.usable_memory': {
    brief: 'Memory usable for the app in bytes.',
    example: 2147483648,
    changelog: [{ version: '0.5.0', prs: [303], description: 'Added device.usable_memory attribute' }],
  },
  dist: {
    brief: 'The sentry dist.',
    example: '1.0',
    changelog: [{ version: '0.16.0', prs: [489], description: 'Added dist attribute' }],
  },
  'django.function_name': {
    brief: 'The fully qualified name of a function used in a Django context.',
    example: 'django.contrib.sessions.middleware.SessionMiddleware',
    examples: ['django.contrib.sessions.middleware.SessionMiddleware'],
    changelog: [{ version: '0.19.0', prs: [538], description: 'Added django.function_name attribute' }],
  },
  'django.middleware_name': {
    brief: 'The name of the Django middleware.',
    example: 'AuthenticationMiddleware',
    examples: ['AuthenticationMiddleware'],
    changelog: [{ version: '0.19.0', prs: [520], description: 'Added django.middleware_name attribute' }],
  },
  effectiveConnectionType: {
    brief: 'Specifies the estimated effective type of the current connection (e.g. slow-2g, 2g, 3g, 4g).',
    example: '4g',
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
    example: 'production',
    changelog: [
      { version: '0.19.0', prs: [427], description: 'Configured normalization' },
      { version: '0.1.0', prs: [61, 127] },
      { version: '0.0.0' },
    ],
  },
  'error.type': {
    brief: 'Describes a class of error the operation ended with.',
    example: 'timeout',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'event.id': {
    brief: 'The unique identifier for this event (log record)',
    example: 1234567890,
    changelog: [{ version: '0.1.0', prs: [101] }],
  },
  'event.name': {
    brief: 'The name that uniquely identifies this event (log record)',
    example: 'Process Payload',
    changelog: [{ version: '0.1.0', prs: [101, 127] }],
  },
  'exception.escaped': {
    brief:
      'SHOULD be set to true if the exception event is recorded at a point where it is known that the exception is escaping the scope of the span.',
    example: true,
    changelog: [{ version: '0.0.0' }],
  },
  'exception.message': {
    brief: 'The error message.',
    example: 'ENOENT: no such file or directory',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'exception.stacktrace': {
    brief:
      'A stacktrace as a string in the natural representation for the language runtime. The representation is to be determined and documented by each language SIG.',
    example:
      'Exception in thread "main" java.lang.RuntimeException: Test exception\n at com.example.GenerateTrace.methodB(GenerateTrace.java:13)\n at com.example.GenerateTrace.methodA(GenerateTrace.java:9)\n at com.example.GenerateTrace.main(GenerateTrace.java:5)',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'exception.type': {
    brief:
      'The type of the exception (its fully-qualified class name, if applicable). The dynamic type of the exception should be preferred over the static type in languages that support it.',
    example: 'OSError',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'faas.coldstart': {
    brief: 'A boolean that is true if the serverless function is executed for the first time (aka cold-start).',
    example: true,
    changelog: [{ version: '0.0.0' }],
  },
  'faas.cron': {
    brief: 'A string containing the schedule period as Cron Expression.',
    example: '0/5 * * * ? *',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'faas.duration_in_ms': {
    brief: 'The duration a function took to run, in milliseconds.',
    example: 120,
    changelog: [{ version: '0.11.0', prs: [403] }],
  },
  'faas.entry_point': {
    brief: "The code that's run when the cloud provider invokes your function.",
    example: 'my_main_function',
    changelog: [{ version: '0.11.0', prs: [403, 415] }],
  },
  'faas.execution': {
    brief: 'The execution ID of the current function execution.',
    example: 'af9d5aa4-a685-4c5f-a22b-444f80b3cc28',
    changelog: [
      {
        version: '0.16.0',
        prs: [473],
        description: 'Added faas.execution attribute, deprecated in favor of faas.invocation_id',
      },
    ],
  },
  'faas.id': {
    brief: 'The unique ID of the single function that this runtime instance executes.',
    example: 'arn:aws:lambda:REGION:ACCOUNT_ID:function:my-function',
    changelog: [
      {
        version: '0.16.0',
        prs: [475],
        description: 'Added faas.id attribute, deprecated in favor of cloud.resource_id',
      },
    ],
  },
  'faas.identity': {
    brief:
      'The Service Account (GCP), IAM Execution Role (AWS), or Managed Identity (Azure) used by the serverless function when interacting with other cloud services',
    example:
      'name@project.iam.gserviceaccount.com (GCP), arn:aws:iam::123456789012:role/role-name (AWS), 00000000-0000-0000-0000-000000000000 (Azure)',
    changelog: [{ version: '0.11.0', prs: [403] }],
  },
  'faas.invocation_id': {
    brief: 'The invocation ID of the current function invocation.',
    example: 'af9d5aa4-a685-4c5f-a22b-444f80b3cc28',
    changelog: [
      { version: '0.16.0', prs: [473], description: 'Added faas.execution as an alias' },
      { version: '0.11.1', prs: [414, 424] },
    ],
  },
  'faas.invoked_name': {
    brief: 'The name of the invoked function.',
    example: 'my-function',
    changelog: [{ version: '0.16.0', prs: [481], description: 'Added faas.invoked_name attribute' }],
  },
  'faas.invoked_provider': {
    brief: 'The cloud provider of the invoked function.',
    example: 'aws',
    changelog: [{ version: '0.16.0', prs: [481], description: 'Added faas.invoked_provider attribute' }],
  },
  'faas.invoked_region': {
    brief: 'The cloud region of the invoked function.',
    example: 'eu-central-1',
    changelog: [{ version: '0.16.0', prs: [481], description: 'Added faas.invoked_region attribute' }],
  },
  'faas.name': {
    brief: 'The name of the serverless function',
    example: 'my_function',
    changelog: [{ version: '0.11.0', prs: [403, 415] }],
  },
  'faas.time': {
    brief: 'A string containing the function invocation time in the ISO 8601 format expressed in UTC.',
    example: '2020-01-23T13:47:06Z',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'faas.trigger': {
    brief: 'Type of the trigger which caused this function invocation.',
    example: 'timer',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'faas.version': {
    brief: 'The version of the function that was invoked',
    example: '$LATEST',
    changelog: [{ version: '0.11.1', prs: [414, 424] }],
  },
  fcp: {
    brief: 'The time it takes for the browser to render the first piece of meaningful content on the screen',
    example: 547.6951,
    changelog: [{ version: '0.5.0', prs: [235] }],
  },
  'file.path': {
    brief: 'Path to the file.',
    example: '/home/user/example.txt',
    changelog: [{ version: '0.17.0', prs: [458], description: 'Added file.path attribute' }],
  },
  'file.size': {
    brief: 'File size in bytes.',
    example: 1024,
    changelog: [{ version: '0.17.0', prs: [458], description: 'Added file.size attribute' }],
  },
  'flag.evaluation.<key>': {
    brief:
      'An instance of a feature flag evaluation. The value of this attribute is the boolean representing the evaluation result. The <key> suffix is the name of the feature flag.',
    example: 'flag.evaluation.is_new_ui=true',
    changelog: [{ version: '0.1.0', prs: [103] }],
  },
  fp: {
    brief: 'The time it takes for the browser to render the first pixel on the screen',
    example: 477.1926,
    changelog: [{ version: '0.5.0', prs: [235] }],
  },
  'frames.delay': {
    brief:
      'The sum of all delayed frame durations in seconds during the lifetime of the span. For more information see [frames delay](https://develop.sentry.dev/sdk/performance/frames-delay/).',
    example: 5,
    changelog: [
      { version: '0.5.0', prs: [313], description: 'Deprecated in favor of app.vitals.frames.delay.value' },
      { version: '0.4.0', prs: [228] },
      { version: '0.0.0' },
    ],
  },
  'frames.frozen': {
    brief: 'The number of frozen frames rendered during the lifetime of the span.',
    example: 3,
    changelog: [
      { version: '0.19.0', prs: [500], description: 'Added sentry.frames.frozen as an alias' },
      { version: '0.5.0', prs: [313], description: 'Deprecated in favor of app.vitals.frames.frozen.count' },
      { version: '0.4.0', prs: [228] },
      { version: '0.0.0' },
    ],
  },
  frames_frozen_rate: {
    brief:
      'The rate of frozen frames, or `app.vitals.frames.frozen.count` divided by `app.vitals.frames.total.count`. This is computed by Relay.',
    changelog: [
      { version: '0.19.0', prs: [493], description: 'Deprecated in favor of app.vitals.frames.frozen.rate' },
      { version: '0.7.0', prs: [362], description: 'Added frames_frozen_rate attribute' },
    ],
  },
  'frames.slow': {
    brief: 'The number of slow frames rendered during the lifetime of the span.',
    example: 1,
    changelog: [
      { version: '0.19.0', prs: [500], description: 'Added sentry.frames.slow as an alias' },
      { version: '0.5.0', prs: [313], description: 'Deprecated in favor of app.vitals.frames.slow.count' },
      { version: '0.4.0', prs: [228] },
      { version: '0.0.0' },
    ],
  },
  frames_slow_rate: {
    brief:
      'The rate of slow frames, or `app.vitals.frames.slow.count` divided by `app.vitals.frames.total.count`. This is computed by Relay.',
    changelog: [
      { version: '0.19.0', prs: [493], description: 'Deprecated in favor of app.vitals.frames.slow.rate' },
      { version: '0.7.0', prs: [362], description: 'Added frames_slow_rate attribute' },
    ],
  },
  'frames.total': {
    brief: 'The number of total frames rendered during the lifetime of the span.',
    example: 60,
    changelog: [
      { version: '0.19.0', prs: [500], description: 'Added sentry.frames.total as an alias' },
      { version: '0.5.0', prs: [313], description: 'Deprecated in favor of app.vitals.frames.total.count' },
      { version: '0.4.0', prs: [228] },
      { version: '0.0.0' },
    ],
  },
  fs_error: {
    brief: 'The error message of a file system error.',
    example: 'ENOENT: no such file or directory',
    changelog: [{ version: '0.1.0', prs: [61, 127] }, { version: '0.0.0' }],
  },
  'gcp.function.context.event_id': {
    brief: 'The event ID from the legacy GCP Cloud Function context (1st gen)',
    example: '1234567890',
    changelog: [{ version: '0.7.0', prs: [371], description: 'Added gcp.function.context.event_id attribute' }],
  },
  'gcp.function.context.event_type': {
    brief: 'The type of the GCP Cloud Function event',
    example: 'google.pubsub.topic.publish',
    changelog: [{ version: '0.7.0', prs: [371], description: 'Added gcp.function.context.event_type attribute' }],
  },
  'gcp.function.context.id': {
    brief: 'The unique event ID from the GCP CloudEvents context (2nd gen Cloud Functions)',
    example: '1234567890',
    changelog: [{ version: '0.7.0', prs: [371], description: 'Added gcp.function.context.id attribute' }],
  },
  'gcp.function.context.resource': {
    brief: 'The resource that triggered the GCP Cloud Function event',
    example: 'projects/my-project/topics/my-topic',
    changelog: [{ version: '0.7.0', prs: [371], description: 'Added gcp.function.context.resource attribute' }],
  },
  'gcp.function.context.source': {
    brief: 'The source of the GCP Cloud Function event',
    example: '//pubsub.googleapis.com/projects/my-project/topics/my-topic',
    changelog: [{ version: '0.7.0', prs: [371], description: 'Added gcp.function.context.source attribute' }],
  },
  'gcp.function.context.specversion': {
    brief: 'The CloudEvents specification version of the GCP Cloud Function event',
    example: '1.0',
    changelog: [{ version: '0.7.0', prs: [371], description: 'Added gcp.function.context.specversion attribute' }],
  },
  'gcp.function.context.time': {
    brief: 'The timestamp of the GCP Cloud Function event',
    example: '2024-01-01T00:00:00.000Z',
    changelog: [{ version: '0.7.0', prs: [371], description: 'Added gcp.function.context.time attribute' }],
  },
  'gcp.function.context.timestamp': {
    brief: 'The legacy timestamp of the GCP Cloud Function event',
    example: '2024-01-01T00:00:00.000Z',
    changelog: [{ version: '0.7.0', prs: [371], description: 'Added gcp.function.context.timestamp attribute' }],
  },
  'gcp.function.context.type': {
    brief: 'The type of the GCP Cloud Function event context',
    example: 'cloud_functions.context',
    changelog: [{ version: '0.7.0', prs: [371], description: 'Added gcp.function.context.type attribute' }],
  },
  'gcp.project.id': {
    brief: 'The ID of the project in GCP that this resource is associated with',
    example: 'my-project-123',
    changelog: [{ version: '0.11.0', prs: [403] }],
  },
  gcp_region: {
    brief: 'The geographical region the GCP resource is running',
    example: 'us-east-1',
    examples: ['us-east-1'],
    changelog: [{ version: '0.19.0', prs: [535], description: 'Added gcp_region attribute' }],
  },
  'gen_ai.agent.name': {
    brief: 'The name of the agent being used.',
    example: 'ResearchAssistant',
    changelog: [{ version: '0.1.0', prs: [62, 127] }],
  },
  'gen_ai.context.utilization': {
    brief: 'The fraction of the model context window utilized by this generation.',
    example: 0.75,
    changelog: [{ version: '0.5.0', prs: [315], description: 'Added gen_ai.context.utilization attribute' }],
  },
  'gen_ai.context.window_size': {
    brief: 'The maximum context window size supported by the model for this generation.',
    example: 128000,
    changelog: [{ version: '0.5.0', prs: [315], description: 'Added gen_ai.context.window_size attribute' }],
  },
  'gen_ai.conversation.id': {
    brief:
      'The unique identifier for a conversation (session, thread), used to store and correlate messages within this conversation.',
    example: 'conv_5j66UpCpwteGg4YSxUnt7lPY',
    changelog: [{ version: '0.4.0', prs: [250] }],
  },
  'gen_ai.cost.cache_creation.input_tokens': {
    brief: 'The cost of input tokens written to cache in USD.',
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
    example: 12.34,
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
    example: "What's the weather in Paris?",
    changelog: [{ version: '0.3.1', prs: [195] }],
  },
  'gen_ai.function_id': {
    brief:
      'Framework-specific tracing label for the execution of a function or other unit of execution in a generative AI system.',
    example: 'my-awesome-function',
    changelog: [{ version: '0.5.0', prs: [308], description: 'Added gen_ai.function_id attribute' }],
  },
  'gen_ai.input.messages': {
    brief:
      'The messages passed to the model. It has to be a stringified version of an array of objects. The `role` attribute of each object must be `"user"`, `"assistant"`, `"tool"`, or `"system"`. For messages of the role `"tool"`, the `content` can be a string or an arbitrary object with information about the tool call. For other messages the `content` can be either a string or a list of objects in the format `{type: "text", text:"..."}`.',
    example:
      '[{"role": "user", "parts": [{"type": "text", "content": "Weather in Paris?"}]}, {"role": "assistant", "parts": [{"type": "tool_call", "id": "call_VSPygqKTWdrhaFErNvMV18Yl", "name": "get_weather", "arguments": {"location": "Paris"}}]}, {"role": "tool", "parts": [{"type": "tool_call_response", "id": "call_VSPygqKTWdrhaFErNvMV18Yl", "result": "rainy, 57°F"}]}]',
    changelog: [
      { version: '0.5.0', prs: [264] },
      { version: '0.4.0', prs: [221] },
    ],
  },
  'gen_ai.operation.name': {
    brief:
      "The name of the operation being performed. It has the following list of well-known values: 'chat', 'create_agent', 'embeddings', 'execute_tool', 'generate_content', 'invoke_agent', 'text_completion'. If one of them applies, then that value MUST be used. Otherwise a custom value MAY be used.",
    example: 'chat',
    changelog: [
      { version: '0.4.0', prs: [225] },
      { version: '0.1.0', prs: [62, 127] },
    ],
  },
  'gen_ai.operation.type': {
    brief:
      "The type of AI operation. Must be one of 'agent' (invoke_agent and create_agent spans), 'ai_client' (any LLM call), 'tool' (execute_tool spans), 'handoff' (handoff spans), 'other' (input and output processors, skill loading, guardrails etc.) . Added during ingestion based on span.op and gen_ai.operation.type. Used to filter and aggregate data in the UI",
    example: 'tool',
    changelog: [
      { version: '0.4.0', prs: [257] },
      { version: '0.1.0', prs: [113, 127] },
    ],
  },
  'gen_ai.output.messages': {
    brief:
      "The model's response messages. It has to be a stringified version of an array of message objects, which can include text responses and tool calls.",
    example:
      '[{"role": "assistant", "parts": [{"type": "text", "content": "The weather in Paris is currently rainy with a temperature of 57°F."}], "finish_reason": "stop"}]',
    changelog: [{ version: '0.4.0', prs: [221] }],
  },
  'gen_ai.pipeline.name': {
    brief: 'Name of the AI pipeline or chain being executed.',
    example: 'Autofix Pipeline',
    changelog: [{ version: '0.1.0', prs: [76, 127] }],
  },
  'gen_ai.prompt': {
    brief: 'The input messages sent to the model',
    example: '[{"role": "user", "message": "hello"}]',
    changelog: [{ version: '0.1.0', prs: [74, 108, 119] }, { version: '0.0.0' }],
  },
  'gen_ai.prompt.name': {
    brief: 'The name of the prompt that uniquely identifies it.',
    example: 'summarize_text',
    changelog: [{ version: '0.12.0', prs: [420], description: 'Added gen_ai.prompt.name attribute' }],
  },
  'gen_ai.provider.name': {
    brief: 'The Generative AI provider as identified by the client or server instrumentation.',
    example: 'openai',
    changelog: [{ version: '0.4.0', prs: [253] }],
  },
  'gen_ai.request.available_tools': {
    brief: 'The available tools for the model. It has to be a stringified version of an array of objects.',
    example:
      '[{"name": "get_weather", "description": "Get the weather for a given location"}, {"name": "get_news", "description": "Get the news for a given topic"}]',
    changelog: [
      { version: '0.4.0', prs: [221] },
      { version: '0.1.0', prs: [63, 127] },
    ],
  },
  'gen_ai.request.frequency_penalty': {
    brief:
      'Used to reduce repetitiveness of generated tokens. The higher the value, the stronger a penalty is applied to previously present tokens, proportional to how many times they have already appeared in the prompt or prior generation.',
    example: 0.5,
    changelog: [
      { version: '0.4.0', prs: [228] },
      { version: '0.1.0', prs: [57] },
    ],
  },
  'gen_ai.request.max_tokens': {
    brief: 'The maximum number of tokens to generate in the response.',
    example: 2048,
    changelog: [
      { version: '0.4.0', prs: [228] },
      { version: '0.1.0', prs: [62] },
    ],
  },
  'gen_ai.request.messages': {
    brief:
      'The messages passed to the model. It has to be a stringified version of an array of objects. The `role` attribute of each object must be `"user"`, `"assistant"`, `"tool"`, or `"system"`. For messages of the role `"tool"`, the `content` can be a string or an arbitrary object with information about the tool call. For other messages the `content` can be either a string or a list of objects in the format `{type: "text", text:"..."}`.',
    example:
      '[{"role": "system", "content": "Generate a random number."}, {"role": "user", "content": [{"text": "Generate a random number between 0 and 10.", "type": "text"}]}, {"role": "tool", "content": {"toolCallId": "1", "toolName": "Weather", "output": "rainy"}}]',
    changelog: [
      { version: '0.4.0', prs: [221] },
      { version: '0.1.0', prs: [63, 74, 108, 119, 122] },
    ],
  },
  'gen_ai.request.model': {
    brief: 'The model identifier being used for the request.',
    example: 'gpt-4-turbo-preview',
    changelog: [{ version: '0.1.0', prs: [62, 127] }],
  },
  'gen_ai.request.presence_penalty': {
    brief:
      'Used to reduce repetitiveness of generated tokens. Similar to frequency_penalty, except that this penalty is applied equally to all tokens that have already appeared, regardless of their exact frequencies.',
    example: 0.5,
    changelog: [
      { version: '0.4.0', prs: [228] },
      { version: '0.1.0', prs: [57] },
    ],
  },
  'gen_ai.request.reasoning.level': {
    brief: 'The reasoning or thinking effort level requested for a GenAI model.',
    example: 'high',
    changelog: [{ version: '0.17.0', prs: [502], description: 'Added gen_ai.request.reasoning.level attribute' }],
  },
  'gen_ai.request.seed': {
    brief: 'The seed, ideally models given the same seed and same other parameters will produce the exact same output.',
    example: '1234567890',
    changelog: [{ version: '0.1.0', prs: [57, 127] }],
  },
  'gen_ai.request.stop_sequences': {
    brief: 'List of sequences that the model will use to stop generating further tokens.',
    example: ['forest', 'lived'],
    changelog: [{ version: '0.16.0', prs: [482], description: 'Added gen_ai.request.stop_sequences attribute' }],
  },
  'gen_ai.request.temperature': {
    brief:
      'For an AI model call, the temperature parameter. Temperature essentially means how random the output will be.',
    example: 0.1,
    changelog: [
      { version: '0.4.0', prs: [228] },
      { version: '0.1.0', prs: [57] },
    ],
  },
  'gen_ai.request.top_k': {
    brief:
      'Limits the model to only consider the K most likely next tokens, where K is an integer (e.g., top_k=20 means only the 20 highest probability tokens are considered).',
    example: 35,
    changelog: [
      { version: '0.4.0', prs: [228] },
      { version: '0.1.0', prs: [57] },
    ],
  },
  'gen_ai.request.top_p': {
    brief:
      'Limits the model to only consider tokens whose cumulative probability mass adds up to p, where p is a float between 0 and 1 (e.g., top_p=0.7 means only tokens that sum up to 70% of the probability mass are considered).',
    example: 0.7,
    changelog: [
      { version: '0.4.0', prs: [228] },
      { version: '0.1.0', prs: [57] },
    ],
  },
  'gen_ai.response.finish_reason': {
    brief: 'The reason why the model stopped generating (singular form).',
    example: 'COMPLETE',
    changelog: [{ version: '0.19.0', prs: [498], description: 'Added gen_ai.response.finish_reason attribute' }],
  },
  'gen_ai.response.finish_reasons': {
    brief: 'The reason why the model stopped generating.',
    example: 'COMPLETE',
    changelog: [{ version: '0.1.0', prs: [57, 127] }],
  },
  'gen_ai.response.id': {
    brief: 'Unique identifier for the completion.',
    example: 'gen_123abc',
    changelog: [{ version: '0.1.0', prs: [57, 127] }],
  },
  'gen_ai.response.model': {
    brief: 'The vendor-specific ID of the model used.',
    example: 'gpt-4',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'gen_ai.response.streaming': {
    brief: "Whether or not the AI model call's response was streamed back asynchronously",
    example: true,
    changelog: [{ version: '0.1.0', prs: [76] }],
  },
  'gen_ai.response.text': {
    brief:
      "The model's response text messages. It has to be a stringified version of an array of response text messages.",
    example:
      '["The weather in Paris is rainy and overcast, with temperatures around 57°F", "The weather in London is sunny and warm, with temperatures around 65°F"]',
    changelog: [
      { version: '0.4.0', prs: [221] },
      { version: '0.1.0', prs: [63, 74] },
    ],
  },
  'gen_ai.response.time_to_first_chunk': {
    brief: 'Time in seconds when the first response content chunk arrived in streaming responses.',
    example: 0.6853435,
    changelog: [{ version: '0.11.0', prs: [418], description: 'Added gen_ai.response.time_to_first_chunk attribute' }],
  },
  'gen_ai.response.time_to_first_token': {
    brief: 'Time in seconds when the first response content chunk arrived in streaming responses.',
    example: 0.6853435,
    changelog: [
      { version: '0.11.0', prs: [418], description: 'Deprecate in favor of gen_ai.response.time_to_first_chunk' },
      { version: '0.4.0', prs: [227] },
    ],
  },
  'gen_ai.response.tokens_per_second': {
    brief: 'The total output tokens per seconds throughput',
    example: 12345.67,
    changelog: [
      { version: '0.4.0', prs: [228] },
      { version: '0.1.0', prs: [66] },
    ],
  },
  'gen_ai.response.tool_calls': {
    brief: "The tool calls in the model's response. It has to be a stringified version of an array of objects.",
    example: '[{"name": "get_weather", "arguments": {"location": "Paris"}}]',
    changelog: [
      { version: '0.4.0', prs: [221] },
      { version: '0.1.0', prs: [63, 74] },
    ],
  },
  'gen_ai.system': {
    brief: 'The provider of the model.',
    example: 'openai',
    changelog: [
      { version: '0.4.0', prs: [253] },
      { version: '0.1.0', prs: [57, 127] },
    ],
  },
  'gen_ai.system_instructions': {
    brief: 'The system instructions passed to the model.',
    example: 'You are a helpful assistant',
    changelog: [
      { version: '0.5.0', prs: [264] },
      { version: '0.4.0', prs: [221] },
    ],
  },
  'gen_ai.system.message': {
    brief: 'The system instructions passed to the model.',
    example: 'You are a helpful assistant',
    changelog: [
      { version: '0.4.0', prs: [221] },
      { version: '0.1.0', prs: [62] },
    ],
  },
  'gen_ai.tool.call.arguments': {
    brief: 'The arguments of the tool call. It has to be a stringified version of the arguments to the tool.',
    example: '{"location": "Paris"}',
    changelog: [
      { version: '0.5.0', prs: [265] },
      { version: '0.4.0', prs: [221] },
    ],
  },
  'gen_ai.tool.call.result': {
    brief: 'The result of the tool call. It has to be a stringified version of the result of the tool.',
    example: 'rainy, 57°F',
    changelog: [
      { version: '0.5.0', prs: [265] },
      { version: '0.4.0', prs: [221] },
    ],
  },
  'gen_ai.tool.definitions': {
    brief: 'The list of source system tool definitions available to the GenAI agent or model.',
    example:
      '[{"type": "function", "name": "get_current_weather", "description": "Get the current weather in a given location", "parameters": {"type": "object", "properties": {"location": {"type": "string", "description": "The city and state, e.g. San Francisco, CA"}, "unit": {"type": "string", "enum": ["celsius", "fahrenheit"]}}, "required": ["location", "unit"]}}]',
    changelog: [{ version: '0.4.0', prs: [221] }],
  },
  'gen_ai.tool.description': {
    brief: 'The description of the tool being used.',
    example: 'Searches the web for current information about a topic',
    changelog: [{ version: '0.1.0', prs: [62, 127] }],
  },
  'gen_ai.tool.input': {
    brief: 'The input of the tool being used. It has to be a stringified version of the input to the tool.',
    example: '{"location": "Paris"}',
    changelog: [
      { version: '0.5.0', prs: [265] },
      { version: '0.1.0', prs: [63, 74] },
    ],
  },
  'gen_ai.tool.message': {
    brief: 'The response from a tool or function call passed to the model.',
    example: 'rainy, 57°F',
    changelog: [
      { version: '0.5.0', prs: [265] },
      { version: '0.1.0', prs: [62] },
    ],
  },
  'gen_ai.tool.name': {
    brief: 'Name of the tool utilized by the agent.',
    example: 'Flights',
    changelog: [{ version: '0.1.0', prs: [57, 127] }],
  },
  'gen_ai.tool.output': {
    brief: 'The output of the tool being used. It has to be a stringified version of the output of the tool.',
    example: 'rainy, 57°F',
    changelog: [
      { version: '0.5.0', prs: [265] },
      { version: '0.1.0', prs: [63, 74] },
    ],
  },
  'gen_ai.tool.type': {
    brief: 'The type of tool being used.',
    example: 'function',
    changelog: [{ version: '0.1.0', prs: [62, 127] }],
  },
  'gen_ai.usage.cache_creation.input_tokens': {
    brief: 'The number of tokens written to the cache when processing the AI input (prompt).',
    example: 100,
    changelog: [
      { version: '0.11.0', prs: [418], description: 'Added gen_ai.usage.cache_creation.input_tokens attribute' },
    ],
    additionalContext: [
      'This attribute appears on both agent parent spans (aggregated totals) and LLM child spans (per-call values). When using sum() to count tokens, filter to gen_ai.operation.type:ai_client to avoid double-counting hierarchical spans.',
    ],
  },
  'gen_ai.usage.cache_read.input_tokens': {
    brief: 'The number of cached tokens used to process the AI input (prompt).',
    example: 50,
    changelog: [{ version: '0.11.0', prs: [418], description: 'Added gen_ai.usage.cache_read.input_tokens attribute' }],
    additionalContext: [
      'This attribute appears on both agent parent spans (aggregated totals) and LLM child spans (per-call values). When using sum() to count tokens, filter to gen_ai.operation.type:ai_client to avoid double-counting hierarchical spans.',
      'This is a subset of gen_ai.usage.input_tokens, not an independent count. Do not sum this with gen_ai.usage.input_tokens — it is already included.',
    ],
  },
  'gen_ai.usage.completion_tokens': {
    brief: 'The number of tokens used in the GenAI response (completion).',
    example: 10,
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
    example: 10,
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
    example: 50,
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
    example: 100,
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
    example: 10,
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
    example: 75,
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
    example: 20,
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
    example: 75,
    changelog: [{ version: '0.11.0', prs: [418], description: 'Added gen_ai.usage.reasoning.output_tokens attribute' }],
    additionalContext: [
      'This attribute appears on both agent parent spans (aggregated totals) and LLM child spans (per-call values). When using sum() to count tokens, filter to gen_ai.operation.type:ai_client to avoid double-counting hierarchical spans.',
      'This is a subset of gen_ai.usage.output_tokens, not an independent count. Do not sum this with gen_ai.usage.output_tokens — it is already included.',
    ],
  },
  'gen_ai.usage.total_tokens': {
    brief: 'The total number of tokens used to process the prompt. (input tokens plus output todkens)',
    example: 20,
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
    example: 'findBookById',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'graphql.operation.type': {
    brief: 'The type of the operation being executed.',
    example: 'query',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'grpc.error.bad_request.field_violations': {
    brief:
      'The individual field violations from a google.rpc.BadRequest error detail. Each entry is a JSON-encoded object with field, description, reason, and (optional) localized_message keys, mirroring google.rpc.BadRequest.FieldViolation.',
    example: [
      '{"field":"email","description":"must be a valid email address","reason":"FIELD_INVALID","localized_message":{"locale":"en-US","message":"Must be a valid email address"}}',
    ],
    changelog: [
      { version: '0.17.0', prs: [460], description: 'Added grpc.error.bad_request.field_violations attribute' },
    ],
  },
  'grpc.error.debug_info.detail': {
    brief:
      'Additional debugging information, such as a server-side stack trace, from a google.rpc.DebugInfo error detail. SDKs should only send this attribute when sendDefaultPii is enabled or dataCollection is configured accordingly.',
    example: 'at com.example.Service.method(Service.java:42)',
    changelog: [{ version: '0.17.0', prs: [460], description: 'Added grpc.error.debug_info.detail attribute' }],
  },
  'grpc.error.debug_info.stack_entries': {
    brief:
      'The server-side stack trace entries from a google.rpc.DebugInfo error detail. SDKs should only send this attribute when sendDefaultPii is enabled or dataCollection is configured accordingly.',
    example: ['com.example.Service.method(Service.java:42)', 'com.example.Server.handle(Server.java:100)'],
    changelog: [{ version: '0.17.0', prs: [460], description: 'Added grpc.error.debug_info.stack_entries attribute' }],
  },
  'grpc.error.error_info.domain': {
    brief: 'The logical grouping to which the gRPC error reason belongs, from the google.rpc.ErrorInfo error detail.',
    example: 'example.sentry.io',
    changelog: [{ version: '0.17.0', prs: [460], description: 'Added grpc.error.error_info.domain attribute' }],
  },
  'grpc.error.error_info.metadata.<key>': {
    brief:
      'Additional structured metadata attached to a google.rpc.ErrorInfo error detail, with <key> being the metadata key name. SDKs should only send this attribute when sendDefaultPii is enabled or dataCollection is configured accordingly.',
    example: "grpc.error.error_info.metadata.user_id='123'",
    changelog: [{ version: '0.17.0', prs: [460], description: 'Added grpc.error.error_info.metadata.<key> attribute' }],
  },
  'grpc.error.error_info.reason': {
    brief:
      'The reason for the gRPC error, as defined by the service that generated it, from the google.rpc.ErrorInfo error detail.',
    example: 'FIELD_INVALID',
    changelog: [{ version: '0.17.0', prs: [460], description: 'Added grpc.error.error_info.reason attribute' }],
  },
  'grpc.error.precondition_failure.violations': {
    brief:
      'The individual precondition violations from a google.rpc.PreconditionFailure error detail. Each entry is a JSON-encoded object with type, subject, and description keys. SDKs should only send this attribute when sendDefaultPii is enabled or dataCollection is configured accordingly, since violation subjects may identify specific resources or users.',
    example: ['{"type":"TOS","subject":"example.com/user/123","description":"User must accept the terms of service"}'],
    changelog: [
      { version: '0.17.0', prs: [460], description: 'Added grpc.error.precondition_failure.violations attribute' },
    ],
  },
  'grpc.error.quota_failure.violations': {
    brief:
      'The individual quota violations from a google.rpc.QuotaFailure error detail. Each entry is a JSON-encoded object with subject, description, api_service, quota_metric, quota_id, quota_dimensions, quota_value, and (optional) future_quota_value keys, mirroring google.rpc.QuotaFailure.Violation. SDKs should only send this attribute when sendDefaultPii is enabled or dataCollection is configured accordingly, since violation subjects may identify specific resources or users.',
    example: [
      '{"subject":"clientip:127.0.0.1","description":"Limit checks failed.","api_service":"example.googleapis.com","quota_metric":"example.googleapis.com/read_requests","quota_id":"ReadRequestsPerMinutePerProject","quota_dimensions":{"region":"us-central1"},"quota_value":1000}',
    ],
    changelog: [{ version: '0.17.0', prs: [460], description: 'Added grpc.error.quota_failure.violations attribute' }],
  },
  'grpc.error.resource_info.description': {
    brief:
      'A description of the error that occurred while accessing the resource, from a google.rpc.ResourceInfo error detail.',
    example: 'Instance is not ready for the request.',
    changelog: [{ version: '0.17.0', prs: [460], description: 'Added grpc.error.resource_info.description attribute' }],
  },
  'grpc.error.resource_info.owner': {
    brief:
      'The owner of the resource being accessed (e.g. project or account owning it), from a google.rpc.ResourceInfo error detail. SDKs should only send this attribute when sendDefaultPii is enabled or dataCollection is configured accordingly.',
    example: 'user@example.com',
    changelog: [{ version: '0.17.0', prs: [460], description: 'Added grpc.error.resource_info.owner attribute' }],
  },
  'grpc.error.resource_info.resource_name': {
    brief:
      'The name of the resource being accessed, from a google.rpc.ResourceInfo error detail. SDKs should only send this attribute when sendDefaultPii is enabled or dataCollection is configured accordingly.',
    example: 'projects/example/instances/example-instance',
    changelog: [
      { version: '0.17.0', prs: [460], description: 'Added grpc.error.resource_info.resource_name attribute' },
    ],
  },
  'grpc.error.resource_info.resource_type': {
    brief: 'The type of resource being accessed, from a google.rpc.ResourceInfo error detail.',
    example: 'database',
    changelog: [
      { version: '0.17.0', prs: [460], description: 'Added grpc.error.resource_info.resource_type attribute' },
    ],
  },
  'grpc.error.retry_info.retry_delay_ms': {
    brief:
      'How long the client should wait before retrying the gRPC call, in milliseconds, from the google.rpc.RetryInfo error detail.',
    example: 5000,
    changelog: [{ version: '0.17.0', prs: [460], description: 'Added grpc.error.retry_info.retry_delay_ms attribute' }],
  },
  hardwareConcurrency: {
    brief: 'The number of logical CPU cores available.',
    example: '14',
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
    example: 'example.com',
    changelog: [{ version: '0.1.0', prs: [61, 106, 127] }, { version: '0.0.0' }],
  },
  'http.decoded_response_content_length': {
    brief: 'The decoded body size of the response (in bytes).',
    example: 456,
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.0.0' }],
  },
  'http.flavor': {
    brief: 'The actual version of the protocol used for network communication.',
    example: '1.1',
    changelog: [{ version: '0.1.0', prs: [61, 108, 127] }, { version: '0.0.0' }],
  },
  'http.fragment': {
    brief:
      'The fragments present in the URI. Note that this contains the leading # character, while the `url.fragment` attribute does not.',
    example: '#details',
    changelog: [{ version: '0.0.0' }],
  },
  'http.host': {
    brief: 'The domain name.',
    example: 'example.com',
    changelog: [
      { version: '0.19.0', prs: [534], description: 'Added address as an alias' },
      { version: '0.1.0', prs: [61, 108, 127] },
      { version: '0.0.0' },
    ],
  },
  'http.method': {
    brief: 'The HTTP method used.',
    example: 'GET',
    changelog: [{ version: '0.1.0', prs: [61, 127] }, { version: '0.0.0' }],
  },
  'http.query': {
    brief:
      'The query string present in the URL. Note that this contains the leading ? character, while the `url.query` attribute does not.',
    example: '?foo=bar&bar=baz',
    changelog: [{ version: '0.0.0' }],
  },
  'http.request.body.data': {
    brief: 'HTTP request body data. Can be given as string or structural data of any format.',
    example: '[{"role": "user", "message": "hello"}]',
    changelog: [{ version: '0.6.0', prs: [336], description: 'Added http.request.body.data attribute' }],
  },
  'http.request.connection_end': {
    brief:
      'The UNIX timestamp representing the time immediately after the browser finishes establishing the connection to the server to retrieve the resource. The timestamp value includes the time interval to establish the transport connection, as well as other time intervals such as TLS handshake and SOCKS authentication.',
    example: 1732829555.15,
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.1.0', prs: [134] }, { version: '0.0.0' }],
  },
  'http.request.connect_start': {
    brief:
      'The UNIX timestamp representing the time immediately before the user agent starts establishing the connection to the server to retrieve the resource.',
    example: 1732829555.111,
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.1.0', prs: [134] }, { version: '0.0.0' }],
  },
  'http.request.domain_lookup_end': {
    brief:
      'The UNIX timestamp representing the time immediately after the browser finishes the domain-name lookup for the resource.',
    example: 1732829555.201,
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.1.0', prs: [134] }, { version: '0.0.0' }],
  },
  'http.request.domain_lookup_start': {
    brief:
      'The UNIX timestamp representing the time immediately before the browser starts the domain name lookup for the resource.',
    example: 1732829555.322,
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.1.0', prs: [134] }, { version: '0.0.0' }],
  },
  'http.request.fetch_start': {
    brief: 'The UNIX timestamp representing the time immediately before the browser starts to fetch the resource.',
    example: 1732829555.389,
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.1.0', prs: [134] }, { version: '0.0.0' }],
  },
  'http.request.header.<key>': {
    brief:
      'HTTP request headers, <key> being the normalized HTTP Header name (lowercase), the value being the header values.',
    example: "http.request.header.custom-header=['foo', 'bar']",
    changelog: [
      { version: '0.4.0', prs: [201, 204] },
      { version: '0.1.0', prs: [103] },
    ],
  },
  'http.request.method': {
    brief: 'The HTTP method used.',
    example: 'GET',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'http.request_method': {
    brief: 'The HTTP method used.',
    example: 'GET',
    changelog: [{ version: '0.6.0', prs: [343], description: 'Added http.request_method attribute' }],
  },
  'http.request.redirect_end': {
    brief:
      'The UNIX timestamp representing the timestamp immediately after receiving the last byte of the response of the last redirect',
    example: 1732829558.502,
    changelog: [
      { version: '0.4.0', prs: [228] },
      { version: '0.1.0', prs: [130, 134] },
    ],
  },
  'http.request.redirect_start': {
    brief: 'The UNIX timestamp representing the start time of the fetch which that initiates the redirect.',
    example: 1732829555.495,
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.1.0', prs: [134] }, { version: '0.0.0' }],
  },
  'http.request.request_start': {
    brief:
      'The UNIX timestamp representing the time immediately before the browser starts requesting the resource from the server, cache, or local resource. If the transport connection fails and the browser retires the request, the value returned will be the start of the retry request.',
    example: 1732829555.51,
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.1.0', prs: [134] }, { version: '0.0.0' }],
  },
  'http.request.resend_count': {
    brief: 'The ordinal number of request resending attempt (for any reason, including redirects).',
    example: 2,
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.0.0' }],
  },
  'http.request.response_end': {
    brief:
      'The UNIX timestamp representing the time immediately after the browser receives the last byte of the resource or immediately before the transport connection is closed, whichever comes first.',
    example: 1732829555.89,
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.1.0', prs: [134] }, { version: '0.0.0' }],
  },
  'http.request.response_start': {
    brief:
      'The UNIX timestamp representing the time immediately before the browser starts requesting the resource from the server, cache, or local resource. If the transport connection fails and the browser retires the request, the value returned will be the start of the retry request.',
    example: 1732829555.7,
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.1.0', prs: [134] }, { version: '0.0.0' }],
  },
  'http.request.same_origin': {
    brief: "Indicates that a URL has the same origin as the current page's origin in the browser.",
    example: true,
    changelog: [{ version: '0.16.0', prs: [456], description: 'Added http.request.same_origin attribute' }],
  },
  'http.request.secure_connection_start': {
    brief:
      'The UNIX timestamp representing the time immediately before the browser starts the handshake process to secure the current connection. If a secure connection is not used, the property returns zero.',
    example: 1732829555.73,
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.1.0', prs: [134] }, { version: '0.0.0' }],
  },
  'http.request.time_to_first_byte': {
    brief:
      "The time in seconds from the browser's timeorigin to when the first byte of the request's response was received. See https://web.dev/articles/ttfb#measure-resource-requests",
    example: 1.032,
    changelog: [
      { version: '0.4.0', prs: [228] },
      { version: '0.1.0', prs: [131] },
    ],
  },
  'http.request.worker_start': {
    brief:
      'The UNIX timestamp representing the timestamp immediately before dispatching the FetchEvent if a Service Worker thread is already running, or immediately before starting the Service Worker thread if it is not already running.',
    example: 1732829553.68,
    changelog: [
      { version: '0.4.0', prs: [228] },
      { version: '0.1.0', prs: [130, 134] },
    ],
  },
  'http.response.body.size': {
    brief: 'The encoded body size of the response (in bytes).',
    example: 123,
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.1.0', prs: [106] }, { version: '0.0.0' }],
  },
  'http.response_content_length': {
    brief: 'The encoded body size of the response (in bytes).',
    example: 123,
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.1.0', prs: [61, 106] }, { version: '0.0.0' }],
  },
  'http.response.header.content-length': {
    brief: 'The size of the message body sent to the recipient (in bytes)',
    example: "http.response.header.custom-header=['foo', 'bar']",
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'http.response.header.<key>': {
    brief:
      'HTTP response headers, <key> being the normalized HTTP Header name (lowercase), the value being the header values.',
    example: "http.response.header.custom-header=['foo', 'bar']",
    changelog: [
      { version: '0.4.0', prs: [201, 204] },
      { version: '0.1.0', prs: [103] },
    ],
  },
  'http.response.size': {
    brief: 'The transfer size of the response (in bytes).',
    example: 456,
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.0.0' }],
  },
  'http.response.status_code': {
    brief: 'The status code of the HTTP response.',
    example: 404,
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.0.0' }],
  },
  'http.response_transfer_size': {
    brief: 'The transfer size of the response (in bytes).',
    example: 456,
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.1.0', prs: [61] }, { version: '0.0.0' }],
  },
  'http.route': {
    brief: 'The matched route, that is, the path template in the format used by the respective server framework.',
    example: '/users/:id',
    examples: ['/users/:id', 'my-controller/my-action/{id}', '/posts'],
    changelog: [
      {
        version: '0.19.0',
        prs: [505, 521],
        description: 'Added multiple examples, removed alias to `url.template`, added additional context',
      },
      { version: '0.1.0', prs: [127] },
      { version: '0.0.0' },
    ],
    additionalContext: [
      'This attribute should primarily be set by server-side instrumentation that captures the framework route of an incoming request.',
      'For `http.client` spans and client-side routing, use `url.template` instead.',
    ],
  },
  'http.scheme': {
    brief: 'The URI scheme component identifying the used protocol.',
    example: 'https',
    changelog: [{ version: '0.1.0', prs: [61, 127] }, { version: '0.0.0' }],
  },
  'http.server_name': {
    brief: 'The server domain name',
    example: 'example.com',
    changelog: [
      { version: '0.19.0', prs: [534], description: 'Added address as an alias' },
      { version: '0.1.0', prs: [61, 108, 127] },
      { version: '0.0.0' },
    ],
  },
  'http.server.request.time_in_queue': {
    brief:
      'The time in milliseconds the request spent in the server queue before processing began. Measured from the X-Request-Start header set by reverse proxies (e.g., Nginx, HAProxy, Heroku) to when the application started handling the request.',
    example: 50,
    changelog: [{ version: '0.5.0', prs: [267] }],
  },
  'http.status_code': {
    brief: 'The status code of the HTTP response.',
    example: 404,
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.1.0', prs: [61] }, { version: '0.0.0' }],
  },
  'http.target': {
    brief: 'The pathname and query string of the URL.',
    example: '/test?foo=bar#buzz',
    changelog: [{ version: '0.1.0', prs: [61] }, { version: '0.0.0' }],
  },
  'http.url': {
    brief: 'The URL of the resource that was fetched.',
    example: 'https://example.com/test?foo=bar#buzz',
    changelog: [{ version: '0.1.0', prs: [61, 108] }, { version: '0.0.0' }],
  },
  'http.user_agent': {
    brief: 'Value of the HTTP User-Agent header sent by the client.',
    example:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Mobile/15E148 Safari/604.1',
    changelog: [{ version: '0.1.0', prs: [61, 127] }, { version: '0.0.0' }],
  },
  id: {
    brief: 'A unique identifier for the span.',
    example: 'f47ac10b58cc4372a5670e02b2c3d479',
    changelog: [{ version: '0.0.0' }],
  },
  inp: {
    brief: 'The value of the recorded Interaction to Next Paint (INP) web vital',
    example: 200,
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
    example: '2.0',
    changelog: [{ version: '0.12.0', prs: [420], description: 'Added jsonrpc.protocol.version attribute' }],
  },
  'jsonrpc.request.id': {
    brief: 'The JSON-RPC request identifier. Unique within the session.',
    example: '1',
    changelog: [{ version: '0.12.0', prs: [420], description: 'Added jsonrpc.request.id attribute' }],
  },
  'jvm.gc.action': {
    brief: 'Name of the garbage collector action.',
    example: 'end of minor GC',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'jvm.gc.name': {
    brief: 'Name of the garbage collector.',
    example: 'G1 Young Generation',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'jvm.memory.pool.name': {
    brief: 'Name of the memory pool.',
    example: 'G1 Old Gen',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'jvm.memory.type': {
    brief: 'Name of the memory pool.',
    example: 'G1 Old Gen',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'jvm.thread.daemon': {
    brief: 'Whether the thread is daemon or not.',
    example: true,
    changelog: [{ version: '0.0.0' }],
  },
  'jvm.thread.state': {
    brief: 'State of the thread.',
    example: 'blocked',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'koa.name': {
    brief: 'The name of the Koa middleware or matched route that handled the request.',
    example: '/users/:id',
    changelog: [{ version: '0.16.0', prs: [490], description: 'Added koa.name attribute as deprecated' }],
  },
  'koa.type': {
    brief: 'The type of the Koa layer that handled the request.',
    example: 'router',
    changelog: [{ version: '0.16.0', prs: [471], description: 'Added koa.type attribute' }],
  },
  lcp: {
    brief: 'The value of the recorded Largest Contentful Paint (LCP) web vital',
    example: 2500,
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
    example: 'img',
    changelog: [{ version: '0.5.0', prs: [233] }, { version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'lcp.id': {
    brief: 'The id of the dom element responsible for the largest contentful paint.',
    example: '#hero',
    changelog: [{ version: '0.5.0', prs: [233] }, { version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'lcp.loadTime': {
    brief: 'The time it took for the LCP element to be loaded',
    example: 1402,
    changelog: [{ version: '0.5.0', prs: [233] }],
  },
  'lcp.renderTime': {
    brief: 'The time it took for the LCP element to be rendered',
    example: 1685,
    changelog: [{ version: '0.5.0', prs: [233] }],
  },
  'lcp.size': {
    brief: 'The size of the largest contentful paint element.',
    example: 1234,
    changelog: [{ version: '0.5.0', prs: [233] }, { version: '0.4.0', prs: [228] }, { version: '0.0.0' }],
  },
  'lcp.url': {
    brief: 'The url of the dom element responsible for the largest contentful paint.',
    example: 'https://example.com',
    changelog: [{ version: '0.5.0', prs: [233] }, { version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'litestar.middleware_name': {
    brief: 'The name of the Litestar middleware.',
    example: 'AuthenticationMiddleware',
    changelog: [
      {
        version: '0.19.0',
        prs: [486],
        description: 'Added litestar.middleware_name attribute, deprecated in favor of middleware.name',
      },
    ],
  },
  'logger.name': {
    brief: 'The name of the logger that generated this event.',
    example: 'myLogger',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'mcp.cancelled.reason': {
    brief: 'Reason for the cancellation of an MCP operation.',
    example: 'User cancelled the request',
    changelog: [{ version: '0.3.0', prs: [171] }],
  },
  'mcp.cancelled.request_id': {
    brief: 'Request ID of the cancelled MCP operation.',
    example: '123',
    changelog: [{ version: '0.3.0', prs: [171] }],
  },
  'mcp.client.name': {
    brief: 'Name of the MCP client application.',
    example: 'claude-desktop',
    changelog: [{ version: '0.3.0', prs: [171] }],
  },
  'mcp.client.title': {
    brief: 'Display title of the MCP client application.',
    example: 'Claude Desktop',
    changelog: [{ version: '0.3.0', prs: [171] }],
  },
  'mcp.client.version': {
    brief: 'Version of the MCP client application.',
    example: '1.0.0',
    changelog: [{ version: '0.3.0', prs: [171] }],
  },
  'mcp.lifecycle.phase': {
    brief: 'Lifecycle phase indicator for MCP operations.',
    example: 'initialization_complete',
    changelog: [{ version: '0.3.0', prs: [171] }],
  },
  'mcp.logging.data_type': {
    brief: 'Data type of the logged message content.',
    example: 'string',
    changelog: [{ version: '0.3.0', prs: [171] }],
  },
  'mcp.logging.level': {
    brief: 'Log level for MCP logging operations.',
    example: 'info',
    changelog: [{ version: '0.3.0', prs: [171] }],
  },
  'mcp.logging.logger': {
    brief: 'Logger name for MCP logging operations.',
    example: 'mcp_server',
    changelog: [{ version: '0.3.0', prs: [171] }],
  },
  'mcp.logging.message': {
    brief: 'Log message content from MCP logging operations.',
    example: 'Tool execution completed successfully',
    changelog: [{ version: '0.3.0', prs: [171] }],
  },
  'mcp.method.name': {
    brief: 'The name of the MCP request or notification method being called.',
    example: 'tools/call',
    changelog: [
      { version: '0.12.0', prs: [420], description: 'Set is_in_otel=true, attribute exists in OTel MCP registry' },
      { version: '0.3.0', prs: [171] },
    ],
  },
  'mcp.progress.current': {
    brief: 'Current progress value of an MCP operation.',
    example: 50,
    changelog: [
      { version: '0.4.0', prs: [228] },
      { version: '0.3.0', prs: [171] },
    ],
  },
  'mcp.progress.message': {
    brief: 'Progress message describing the current state of an MCP operation.',
    example: 'Processing 50 of 100 items',
    changelog: [{ version: '0.3.0', prs: [171] }],
  },
  'mcp.progress.percentage': {
    brief: 'Calculated progress percentage of an MCP operation. Computed from current/total * 100.',
    example: 50,
    changelog: [
      { version: '0.4.0', prs: [228] },
      { version: '0.3.0', prs: [171] },
    ],
  },
  'mcp.progress.token': {
    brief: 'Token for tracking progress of an MCP operation.',
    example: 'progress-token-123',
    changelog: [{ version: '0.3.0', prs: [171] }],
  },
  'mcp.progress.total': {
    brief: 'Total progress target value of an MCP operation.',
    example: 100,
    changelog: [
      { version: '0.4.0', prs: [228] },
      { version: '0.3.0', prs: [171] },
    ],
  },
  'mcp.prompt.name': {
    brief: 'Name of the MCP prompt template being used.',
    example: 'summarize',
    changelog: [
      { version: '0.12.0', prs: [420], description: 'Deprecated in favor of gen_ai.prompt.name' },
      { version: '0.3.0', prs: [171] },
    ],
  },
  'mcp.prompt.result.description': {
    brief: 'Description of the prompt result.',
    example: 'A summary of the requested information',
    changelog: [{ version: '0.3.0', prs: [171] }],
  },
  'mcp.prompt.result.message_content': {
    brief: 'Content of the message in the prompt result. Used for single message results only.',
    example: 'Please provide a summary of the document',
    changelog: [{ version: '0.3.0', prs: [171] }],
  },
  'mcp.prompt.result.message_count': {
    brief: 'Number of messages in the prompt result.',
    example: 3,
    changelog: [
      { version: '0.4.0', prs: [228] },
      { version: '0.3.0', prs: [171] },
    ],
  },
  'mcp.prompt.result.message_role': {
    brief: 'Role of the message in the prompt result. Used for single message results only.',
    example: 'user',
    changelog: [{ version: '0.3.0', prs: [171] }],
  },
  'mcp.protocol.ready': {
    brief: 'Protocol readiness indicator for MCP session. Non-zero value indicates the protocol is ready.',
    example: 1,
    changelog: [
      { version: '0.4.0', prs: [228] },
      { version: '0.3.0', prs: [171] },
    ],
  },
  'mcp.protocol.version': {
    brief: 'MCP protocol version used in the session.',
    example: '2024-11-05',
    changelog: [
      { version: '0.12.0', prs: [420], description: 'Set is_in_otel=true, attribute exists in OTel MCP registry' },
      { version: '0.3.0', prs: [171] },
    ],
  },
  'mcp.request.argument.<key>': {
    brief:
      'MCP request argument with dynamic key suffix. The <key> is replaced with the actual argument name. The value is a JSON-stringified representation of the argument value.',
    example: "mcp.request.argument.query='weather in Paris'",
    changelog: [{ version: '0.3.0', prs: [176] }],
  },
  'mcp.request.argument.name': {
    brief: 'Name argument from prompts/get MCP request.',
    example: 'summarize',
    changelog: [{ version: '0.3.0', prs: [171] }],
  },
  'mcp.request.argument.uri': {
    brief: 'URI argument from resources/read MCP request.',
    example: 'file:///path/to/resource',
    changelog: [{ version: '0.3.0', prs: [171] }],
  },
  'mcp.request.id': {
    brief: 'JSON-RPC request identifier for the MCP request. Unique within the MCP session.',
    example: '1',
    changelog: [
      { version: '0.12.0', prs: [420], description: 'Deprecated in favor of jsonrpc.request.id' },
      { version: '0.3.0', prs: [171] },
    ],
  },
  'mcp.resource.protocol': {
    brief: 'Protocol of the resource URI being accessed, extracted from the URI.',
    example: 'file',
    changelog: [
      { version: '0.12.0', prs: [420], description: 'Deprecated in favor of network.protocol.name' },
      { version: '0.3.0', prs: [171] },
    ],
  },
  'mcp.resource.uri': {
    brief: 'The resource URI being accessed in an MCP operation.',
    example: 'file:///path/to/file.txt',
    changelog: [
      { version: '0.12.0', prs: [420], description: 'Set is_in_otel=true, attribute exists in OTel MCP registry' },
      { version: '0.3.0', prs: [171] },
    ],
  },
  'mcp.server.name': {
    brief: 'Name of the MCP server application.',
    example: 'sentry-mcp-server',
    changelog: [{ version: '0.3.0', prs: [171] }],
  },
  'mcp.server.title': {
    brief: 'Display title of the MCP server application.',
    example: 'Sentry MCP Server',
    changelog: [{ version: '0.3.0', prs: [171] }],
  },
  'mcp.server.version': {
    brief: 'Version of the MCP server application.',
    example: '0.1.0',
    changelog: [{ version: '0.3.0', prs: [171] }],
  },
  'mcp.session.id': {
    brief: 'Identifier for the MCP session.',
    example: '550e8400-e29b-41d4-a716-446655440000',
    changelog: [
      { version: '0.12.0', prs: [420], description: 'Set is_in_otel=true, attribute exists in OTel MCP registry' },
      { version: '0.3.0', prs: [171] },
    ],
  },
  'mcp.tool.name': {
    brief: 'Name of the MCP tool being called.',
    example: 'calculator',
    changelog: [
      { version: '0.12.0', prs: [420], description: 'Deprecated in favor of gen_ai.tool.name' },
      { version: '0.3.0', prs: [171] },
    ],
  },
  'mcp.tool.result.content': {
    brief: 'The content of the tool result.',
    example: '{"output": "rainy", "toolCallId": "1"}',
    changelog: [
      { version: '0.12.0', prs: [420], description: 'Deprecated in favor of gen_ai.tool.call.result' },
      { version: '0.3.0', prs: [171] },
      { version: '0.2.0', prs: [164] },
    ],
  },
  'mcp.tool.result.content_count': {
    brief: 'Number of content items in the tool result.',
    example: 1,
    changelog: [
      { version: '0.4.0', prs: [228] },
      { version: '0.3.0', prs: [171] },
    ],
  },
  'mcp.tool.result.is_error': {
    brief: 'Whether a tool execution resulted in an error.',
    example: false,
    changelog: [
      { version: '0.12.0', prs: [420], description: 'Deprecated in favor of error.type' },
      { version: '0.3.0', prs: [171] },
    ],
  },
  'mcp.transport': {
    brief: 'Transport method used for MCP communication.',
    example: 'stdio',
    changelog: [
      { version: '0.12.0', prs: [420], description: 'Deprecated in favor of network.transport' },
      { version: '0.3.0', prs: [171] },
    ],
  },
  'mdc.<key>': {
    brief:
      "Attributes from the Mapped Diagnostic Context (MDC) present at the moment the log record was created. The MDC is supported by all the most popular logging solutions in the Java ecosystem, and it's usually implemented as a thread-local map that stores context for e.g. a specific request.",
    example: "mdc.some_key='some_value'",
    changelog: [{ version: '0.3.0', prs: [176] }],
  },
  'messaging.batch.message_count': {
    brief: 'The number of messages sent, received, or processed in the scope of the batching operation.',
    example: 10,
    changelog: [{ version: '0.6.0', prs: [341], description: 'Added messaging.batch.message_count attribute' }],
  },
  'messaging.destination': {
    brief: 'The message destination name.',
    example: 'BestTopic',
    changelog: [
      {
        version: '0.16.0',
        prs: [482],
        description: 'Added messaging.destination attribute, deprecated in favor of messaging.destination.name',
      },
    ],
  },
  'messaging.destination.connection': {
    brief: 'The message destination connection.',
    example: 'BestTopic',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'messaging.destination_kind': {
    brief: 'The kind of message destination.',
    example: 'topic',
    changelog: [
      {
        version: '0.19.0',
        prs: [509],
        description:
          'Added deprecated messaging.destination_kind attribute for parity with legacy OTel instrumentations.',
      },
    ],
  },
  'messaging.destination.name': {
    brief: 'The message destination name.',
    example: 'BestTopic',
    changelog: [
      { version: '0.16.0', prs: [482], description: 'Added messaging.destination as an alias' },
      { version: '0.1.0', prs: [127] },
      { version: '0.0.0' },
    ],
  },
  'messaging.destination.partition.id': {
    brief:
      'The identifier of the partition messages are sent to or received from, unique within the messaging.destination.name.',
    example: '1',
    changelog: [{ version: '0.19.0', prs: [474], description: 'Added messaging.destination.partition.id attribute' }],
  },
  'messaging.kafka.message.key': {
    brief:
      "Message keys in Kafka are used for grouping alike messages to ensure they're processed on the same partition. They differ from messaging.message.id in that they're not unique. If the key is null, the attribute MUST NOT be set.",
    example: 'myKey',
    changelog: [{ version: '0.19.0', prs: [474], description: 'Added messaging.kafka.message.key attribute' }],
  },
  'messaging.kafka.message.tombstone': {
    brief: 'A boolean that is true if the message is a tombstone.',
    example: true,
    changelog: [{ version: '0.19.0', prs: [474], description: 'Added messaging.kafka.message.tombstone attribute' }],
  },
  'messaging.kafka.offset': {
    brief: 'The offset of a record in the corresponding Kafka partition.',
    example: 42,
    changelog: [{ version: '0.19.0', prs: [474], description: 'Added messaging.kafka.offset attribute' }],
  },
  'messaging.message.body.size': {
    brief: 'The size of the message body in bytes.',
    example: 839,
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.0.0' }],
  },
  'messaging.message.conversation_id': {
    brief:
      'The conversation ID identifying the conversation to which the message belongs, represented as a string. Sometimes called "Correlation ID".',
    example: 'MyConversationId',
    changelog: [{ version: '0.16.0', prs: [468], description: 'Added messaging.message.conversation_id attribute' }],
  },
  'messaging.message.envelope.size': {
    brief: 'The size of the message body and metadata in bytes.',
    example: 1045,
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.0.0' }],
  },
  'messaging.message.id': {
    brief: 'A value used by the messaging system as an identifier for the message, represented as a string.',
    example: 'f47ac10b58cc4372a5670e02b2c3d479',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'messaging.message.receive.latency': {
    brief: 'The latency between when the message was published and received.',
    example: 1732847252,
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.0.0' }],
  },
  'messaging.message.retry.count': {
    brief: 'The amount of attempts to send the message.',
    example: 2,
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.0.0' }],
  },
  'messaging.operation.name': {
    brief: 'The name of the messaging operation being performed',
    example: 'send',
    changelog: [{ version: '0.11.0', prs: [392], description: 'Added messaging.operation.name attribute' }],
  },
  'messaging.operation.type': {
    brief: 'A string identifying the type of the messaging operation',
    example: 'create',
    changelog: [{ version: '0.1.0', prs: [51, 127] }],
  },
  'messaging.rabbitmq.destination.routing_key': {
    brief: 'RabbitMQ message routing key.',
    example: 'myKey',
    changelog: [
      { version: '0.16.0', prs: [468], description: 'Added messaging.rabbitmq.destination.routing_key attribute' },
    ],
  },
  'messaging.system': {
    brief: 'The messaging system as identified by the client instrumentation.',
    example: 'activemq',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  method: {
    brief: 'The HTTP method used.',
    example: 'GET',
    changelog: [
      { version: '0.19.0', prs: [497], description: 'Configured normalization' },
      { version: '0.1.0', prs: [61, 127] },
      { version: '0.0.0' },
    ],
  },
  'middleware.name': {
    brief: 'The name of the middleware.',
    example: 'AuthenticationMiddleware',
    changelog: [
      {
        version: '0.19.0',
        prs: [485, 486, 519, 520],
        description:
          'Added django.middleware_name, starlite.middleware_name, litestar.middleware_name and starlette.middleware_name as aliases',
      },
      { version: '0.6.0', prs: [336], description: 'Added middleware.name attribute' },
    ],
  },
  'navigation.origin': {
    brief:
      'The origin of the navigation (usually client side router navigations). Should preferrably parameterized template (like url.template) or a URL path otherwise.',
    example: '/users/:id',
    changelog: [{ version: '0.16.0', prs: [467], description: 'Added navigation.origin attribute' }],
  },
  'navigation.route.id': {
    brief:
      'The identifier of the matched client-side route, as assigned by the routing framework (e.g., vue-router name, react-router id).',
    example: 'AboutView',
    changelog: [{ version: '0.16.0', prs: [468], description: 'Added navigation.route.id attribute' }],
  },
  'navigation.type': {
    brief: 'The type of navigation done by a client-side router.',
    example: 'router.push',
    changelog: [
      { version: '0.16.0', prs: [467], description: 'Added new deprecated alias' },
      { version: '0.1.0', prs: [127] },
      { version: '0.0.0' },
    ],
  },
  'nel.elapsed_time': {
    brief:
      'The elapsed number of milliseconds between the start of the resource fetch and when it was completed or aborted by the user agent.',
    example: 100,
    changelog: [
      { version: '0.4.0', prs: [228] },
      { version: '0.1.0', prs: [68] },
    ],
  },
  'nel.phase': {
    brief: 'If request failed, the phase of its network error. If request succeeded, "application".',
    example: 'application',
    changelog: [{ version: '0.1.0', prs: [68, 127] }],
  },
  'nel.referrer': {
    brief: "request's referrer, as determined by the referrer policy associated with its client.",
    example: 'https://example.com/foo?bar=baz',
    changelog: [{ version: '0.1.0', prs: [68, 127] }],
  },
  'nel.sampling_function': {
    brief: 'The sampling function used to determine if the request should be sampled.',
    example: 0.5,
    changelog: [
      { version: '0.4.0', prs: [228] },
      { version: '0.1.0', prs: [68] },
    ],
  },
  'nel.type': {
    brief: 'If request failed, the type of its network error. If request succeeded, "ok".',
    example: 'dns.unreachable',
    changelog: [{ version: '0.1.0', prs: [68, 127] }],
  },
  'network.connection.effective_type': {
    brief: 'Specifies the effective type of the current connection (e.g. slow-2g, 2g, 3g, 4g).',
    example: '4g',
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
    example: 100,
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
    example: 'wifi',
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
    example: '10.1.2.80',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'network.local.port': {
    brief: 'Local port number of the network connection.',
    example: 65400,
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.0.0' }],
  },
  'network.peer.address': {
    brief: 'Peer address of the network connection - IP address or Unix domain socket name.',
    example: '10.1.2.80',
    changelog: [{ version: '0.1.0', prs: [108, 127] }, { version: '0.0.0' }],
  },
  'network.peer.port': {
    brief: 'Peer port number of the network connection.',
    example: 65400,
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.0.0' }],
  },
  'network.protocol.name': {
    brief: 'OSI application layer or non-OSI equivalent.',
    example: 'http',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'network.protocol.version': {
    brief: 'The actual version of the protocol used for network communication.',
    example: '1.1',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'network.transport': {
    brief: 'OSI transport layer or inter-process communication method.',
    example: 'tcp',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'network.type': {
    brief: 'OSI network layer or non-OSI equivalent.',
    example: 'ipv4',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'net.host.ip': {
    brief: 'Local address of the network connection - IP address or Unix domain socket name.',
    example: '192.168.0.1',
    changelog: [{ version: '0.1.0', prs: [61, 108, 127] }, { version: '0.0.0' }],
  },
  'net.host.name': {
    brief:
      'Server domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.',
    example: 'example.com',
    changelog: [
      { version: '0.19.0', prs: [534], description: 'Added address as an alias' },
      { version: '0.1.0', prs: [61, 108, 127] },
      { version: '0.0.0' },
    ],
  },
  'net.host.port': {
    brief: 'Server port number.',
    example: 1337,
    changelog: [
      { version: '0.19.0', prs: [532], description: 'Added port as an alias' },
      { version: '0.4.0', prs: [228] },
      { version: '0.1.0', prs: [61] },
      { version: '0.0.0' },
    ],
  },
  'net.peer.ip': {
    brief: 'Peer address of the network connection - IP address or Unix domain socket name.',
    example: '192.168.0.1',
    changelog: [{ version: '0.1.0', prs: [61, 108, 127] }, { version: '0.0.0' }],
  },
  'net.peer.name': {
    brief:
      'Server domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.',
    example: 'example.com',
    changelog: [{ version: '0.1.0', prs: [61, 127] }, { version: '0.0.0' }],
  },
  'net.peer.port': {
    brief: 'Peer port number.',
    example: 1337,
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.1.0', prs: [61] }, { version: '0.0.0' }],
  },
  'net.protocol.name': {
    brief: 'OSI application layer or non-OSI equivalent.',
    example: 'http',
    changelog: [{ version: '0.1.0', prs: [61, 127] }, { version: '0.0.0' }],
  },
  'net.protocol.version': {
    brief: 'The actual version of the protocol used for network communication.',
    example: '1.1',
    changelog: [{ version: '0.1.0', prs: [61, 108, 127] }, { version: '0.0.0' }],
  },
  'net.sock.family': {
    brief: 'OSI transport and network layer',
    example: 'inet',
    changelog: [{ version: '0.1.0', prs: [61, 127] }, { version: '0.0.0' }],
  },
  'net.sock.host.addr': {
    brief: 'Local address of the network connection mapping to Unix domain socket name.',
    example: '/var/my.sock',
    changelog: [{ version: '0.1.0', prs: [61, 108, 127] }, { version: '0.0.0' }],
  },
  'net.sock.host.port': {
    brief: 'Local port number of the network connection.',
    example: 8080,
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.1.0', prs: [61] }, { version: '0.0.0' }],
  },
  'net.sock.peer.addr': {
    brief: 'Peer address of the network connection - IP address',
    example: '192.168.0.1',
    changelog: [{ version: '0.1.0', prs: [61, 108, 127] }, { version: '0.0.0' }],
  },
  'net.sock.peer.name': {
    brief: 'Peer address of the network connection - Unix domain socket name',
    example: '/var/my.sock',
    changelog: [{ version: '0.1.0', prs: [61, 119, 127] }, { version: '0.0.0' }],
  },
  'net.sock.peer.port': {
    brief: 'Peer port number of the network connection.',
    example: 8080,
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.1.0', prs: [61] }, { version: '0.0.0' }],
  },
  'net.transport': {
    brief: 'OSI transport layer or inter-process communication method.',
    example: 'tcp',
    changelog: [{ version: '0.1.0', prs: [61, 127] }, { version: '0.0.0' }],
  },
  'os.build': {
    brief: 'The build ID of the operating system.',
    example: '1234567890',
    changelog: [
      { version: '0.5.0', prs: [301], description: 'Added os.build attribute, deprecated in favor of os.build_id' },
    ],
  },
  'os.build_id': {
    brief: 'The build ID of the operating system.',
    example: '1234567890',
    changelog: [
      { version: '0.5.0', prs: [301], description: 'Added os.build as alias' },
      { version: '0.1.0', prs: [127] },
      { version: '0.0.0' },
    ],
  },
  'os.description': {
    brief:
      'Human readable (not intended to be parsed) OS version information, like e.g. reported by ver or lsb_release -a commands.',
    example: 'Ubuntu 18.04.1 LTS',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'os.kernel_version': {
    brief: 'An independent kernel version string. Typically the entire output of the `uname` syscall.',
    example: '20.2.0',
    changelog: [{ version: '0.5.0', prs: [301], description: 'Added os.kernel_version attribute' }],
  },
  'os.name': {
    brief: 'Human readable operating system name.',
    example: 'Ubuntu',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'os.raw_description': {
    brief:
      'An unprocessed description string obtained by the operating system. For some well-known runtimes, Sentry will attempt to parse `name` and `version` from this string, if they are not explicitly given.',
    example: 'Ubuntu 22.04.4 LTS (Jammy Jellyfish)',
    changelog: [{ version: '0.5.0', prs: [301], description: 'Added os.raw_description attribute' }],
  },
  'os.rooted': {
    brief: 'Whether the operating system has been jailbroken or rooted.',
    example: true,
    changelog: [{ version: '0.5.0', prs: [301], description: 'Added os.rooted attribute' }],
  },
  'os.theme': {
    brief: 'Whether the OS runs in dark mode or light mode.',
    example: 'dark',
    changelog: [{ version: '0.5.0', prs: [301], description: 'Added os.theme attribute' }],
  },
  'os.type': {
    brief: 'The operating system type.',
    example: 'linux',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'os.version': {
    brief: 'The version of the operating system.',
    example: '18.04.2',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'otel.kind': {
    brief:
      'The span kind (https://opentelemetry.io/docs/concepts/signals/traces/#span-kind). Deprecated, use `sentry.kind` instead.',
    example: 'SERVER',
    changelog: [{ version: '0.13.0', prs: [440], description: 'Added otel.kind attribute' }],
  },
  'otel.scope.name': {
    brief: 'The name of the instrumentation scope - (InstrumentationScope.Name in OTLP).',
    example: 'io.opentelemetry.contrib.mongodb',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'otel.scope.version': {
    brief: 'The version of the instrumentation scope - (InstrumentationScope.Version in OTLP).',
    example: '2.4.5',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'otel.status_code': {
    brief: 'Name of the code, either “OK” or “ERROR”. MUST NOT be set if the status code is UNSET.',
    example: 'OK',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'otel.status_description': {
    brief: 'Description of the Status if it has a value, otherwise not set.',
    example: 'resource not found',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'params.<key>': {
    brief:
      'Decoded parameters extracted from a URL path. Usually added by client-side routing frameworks like vue-router.',
    example: "params.id='123'",
    changelog: [{ version: '0.1.0', prs: [103] }],
  },
  'performance.activationStart': {
    brief: 'The time between initiating a navigation to a page and the browser activating the page',
    example: 1.983,
    changelog: [{ version: '0.5.0', prs: [321], description: 'Added performance.activationStart attribute' }],
  },
  'performance.timeOrigin': {
    brief: "The browser's performance.timeOrigin timestamp representing the time when the pageload was initiated",
    example: 1776185678.886,
    changelog: [{ version: '0.5.0', prs: [321], description: 'Added performance.timeOrigin attribute' }],
  },
  port: {
    brief: 'The destination port for a TCP connection.',
    example: 1337,
    examples: [1337],
    changelog: [{ version: '0.19.0', prs: [532], description: 'Added port attribute' }],
  },
  previous_route: {
    brief: 'Also used by mobile SDKs to indicate the previous route in the application.',
    example: 'HomeScreen',
    changelog: [{ version: '0.1.0', prs: [74] }, { version: '0.0.0' }],
  },
  'process.command_args': {
    brief: 'All the command arguments (including the command/executable itself) as received by the process.',
    example: ['cmd/otecol', '--config=config.yaml'],
    changelog: [{ version: '0.6.0', prs: [327], description: 'Added process.command_args attribute' }],
  },
  'process.executable.name': {
    brief: 'The name of the executable that started the process.',
    example: 'getsentry',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'process.pid': {
    brief: 'The process ID of the running process.',
    example: 12345,
    changelog: [
      { version: '0.19.0', prs: [487], description: 'Added subprocess.pid as an alias' },
      { version: '0.4.0', prs: [228] },
      { version: '0.0.0' },
    ],
  },
  'process.runtime.description': {
    brief:
      'An additional description about the runtime of the process, for example a specific vendor customization of the runtime environment. Equivalent to `raw_description` in the Sentry runtime context.',
    example: 'Eclipse OpenJ9 VM openj9-0.21.0',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'process.runtime.engine.name': {
    brief: 'The name of the runtime engine.',
    example: 'v8',
    changelog: [{ version: '0.0.0' }],
  },
  'process.runtime.engine.version': {
    brief: 'The version of the runtime engine.',
    example: '12.9.202.13-rusty',
    changelog: [{ version: '0.0.0' }],
  },
  'process.runtime.name': {
    brief: 'The name of the runtime. Equivalent to `name` in the Sentry runtime context.',
    example: 'node',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'process.runtime.version': {
    brief:
      'The version of the runtime of this process, as returned by the runtime without modification. Equivalent to `version` in the Sentry runtime context.',
    example: '18.04.2',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  profile_id: {
    brief:
      'The ID of the Sentry profile the span is associated with. This is only meaningful for transaction-based profiling.',
    example: '123e4567e89b12d3a456426614174000',
    changelog: [{ version: '0.19.0', prs: [497], description: 'Added profile_id attribute' }],
  },
  query: {
    brief: 'The database query being executed.',
    example: 'SELECT * FROM users WHERE id = $1',
    examples: ['SELECT * FROM users WHERE id = $1'],
    changelog: [{ version: '0.19.0', prs: [530], description: 'Added query attribute' }],
  },
  'query.<key>': {
    brief: 'An item in a query string. Usually added by client-side routing frameworks like vue-router.',
    example: "query.id='123'",
    changelog: [{ version: '0.1.0', prs: [103] }],
  },
  'react.version': {
    brief: 'The version of the React framework',
    example: '18.2.0',
    changelog: [{ version: '0.7.0', prs: [368], description: 'Added react.version attribute' }],
  },
  'redis.command': {
    brief: 'The name of the Redis operation being executed.',
    example: 'SELECT',
    examples: ['SELECT'],
    changelog: [{ version: '0.19.0', prs: [531], description: 'Added redis.command attribute' }],
  },
  'redis.key': {
    brief: 'The key the Redis command is operating on.',
    example: 'user:2047:city',
    changelog: [
      { version: '0.19.0', prs: [484], description: 'Added redis.key attribute, deprecated in favor of db.redis.key' },
    ],
  },
  release: {
    brief: 'The sentry release.',
    example: 'production',
    changelog: [
      { version: '0.19.0', prs: [497], description: 'Configured normalization' },
      { version: '0.1.0', prs: [61, 127] },
      { version: '0.0.0' },
    ],
  },
  'remix.action_form_data.<key>': {
    brief: 'Remix form data, <key> being the form data key, the value being the form data value.',
    example: "http.response.header.text='test'",
    changelog: [{ version: '0.1.0', prs: [103] }],
  },
  replay_id: {
    brief: 'The id of the sentry replay.',
    example: '123e4567e89b12d3a456426614174000',
    changelog: [
      { version: '0.19.0', prs: [497], description: 'Configured normalization' },
      { version: '0.1.0', prs: [61] },
      { version: '0.0.0' },
    ],
  },
  'resource.deployment.environment': {
    brief: 'The software deployment environment name.',
    example: 'production',
    changelog: [{ version: '0.5.0', prs: [266] }],
  },
  'resource.deployment.environment.name': {
    brief: 'The software deployment environment name.',
    example: 'production',
    changelog: [{ version: '0.3.1', prs: [196] }],
  },
  'resource.render_blocking_status': {
    brief: 'The render blocking status of the resource.',
    example: 'non-blocking',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  route: {
    brief:
      'The matched route, that is, the path template in the format used by the respective server framework. Also used by mobile SDKs to indicate the current route in the application.',
    example: 'App\\Controller::indexAction',
    changelog: [{ version: '0.1.0', prs: [61, 74] }, { version: '0.0.0' }],
  },
  'rpc.grpc.status_code': {
    brief: 'The numeric status code of the gRPC request.',
    example: 2,
    changelog: [
      {
        version: '0.19.0',
        prs: [494, 533],
        description: 'Deprecated rpc.grpc.status_code in favor of rpc.response.status_code',
      },
      { version: '0.4.0', prs: [228] },
      { version: '0.0.0' },
    ],
  },
  'rpc.method': {
    brief: 'The fully-qualified logical name of the method from the RPC interface perspective.',
    example: 'com.example.ExampleService/exampleMethod',
    changelog: [
      { version: '0.19.0', prs: [536], description: 'Added aws.operation_name as an alias' },
      { version: '0.7.0', prs: [351], description: 'Added rpc.method attribute' },
    ],
  },
  'rpc.response.status_code': {
    brief: 'Status code of the RPC returned by the RPC server or generated by the client.',
    example: 'DEADLINE_EXCEEDED',
    changelog: [
      { version: '0.19.0', prs: [494, 533], description: 'Added code and rpc.grpc.status_code as aliases' },
      { version: '0.7.0', prs: [352], description: 'Added rpc.response.status_code attribute' },
    ],
  },
  'rpc.service': {
    brief: 'The full (logical) name of the service being called, including its package name, if applicable.',
    example: 'myService.BestService',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'rpc.system': {
    brief: 'A string identifying the remoting system.',
    example: 'aws-api',
    changelog: [
      {
        version: '0.16.0',
        prs: [482],
        description: 'Added rpc.system attribute, deprecated in favor of rpc.system.name',
      },
    ],
  },
  'rpc.system.name': {
    brief: 'A string identifying the remoting system.',
    example: 'aws-api',
    changelog: [{ version: '0.16.0', prs: [482], description: 'Added rpc.system.name attribute' }],
  },
  'runtime.build': {
    brief: 'The application build string, when it is separate from the version.',
    example: 'stable',
    changelog: [{ version: '0.11.0', prs: [383], description: 'Added and deprecated runtime.build attribute' }],
  },
  'runtime.name': {
    brief: 'The name of the runtime. For example node, CPython, or rustc.',
    example: 'node',
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
    example: 'Eclipse OpenJ9 VM openj9-0.21.0',
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
    example: '18.04.2',
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
    example: 'score.cls=0.1723',
    changelog: [{ version: '0.7.0', prs: [355], description: 'Added score.<key> attribute' }],
  },
  'score.ratio.<key>': {
    brief: 'The score for a web vital, normalized to a number between 0 and 1.',
    example: 'score.ratio.inp=0.7748',
    changelog: [{ version: '0.7.0', prs: [355], description: 'Added score.ratio.<key> attribute' }],
  },
  'score.total': {
    brief:
      'The total performance score of a span. This is the sum of individual weighted web vital scores (see `score.<key>`).',
    changelog: [{ version: '0.7.0', prs: [355], description: 'Added score.total attribute' }],
  },
  'score.weight.<key>': {
    brief: "The relative weight of a web vital in a span's performance score.",
    example: 'score.weight.fcp=0.25',
    changelog: [{ version: '0.7.0', prs: [355], description: 'Added score.weight.<key> attribute' }],
  },
  'sentry.action': {
    brief:
      'Used as a generic attribute representing the action depending on the type of span. For instance, this is the database query operation for DB spans, and the request method for HTTP spans.',
    example: 'SELECT',
    changelog: [{ version: '0.4.0', prs: [212] }],
  },
  'sentry.browser.name': {
    brief: 'The name of the browser.',
    example: 'Chrome',
    changelog: [{ version: '0.1.0', prs: [139] }],
  },
  'sentry.browser.version': {
    brief: 'The version of the browser.',
    example: '120.0.6099.130',
    changelog: [{ version: '0.1.0', prs: [139] }],
  },
  'sentry.cancellation_reason': {
    brief: 'The reason why a span ended early.',
    example: 'document.hidden',
    changelog: [{ version: '0.0.0' }],
  },
  'sentry.category': {
    brief:
      "The high-level category of a span, derived from the span operation or span attributes. This categorizes spans by their general purpose (e.g., database, HTTP, UI). Known values include: 'ai', 'ai.pipeline', 'app', 'browser', 'cache', 'console', 'db', 'event', 'file', 'function.aws', 'function.azure', 'function.gcp', 'function.nextjs', 'function.remix', 'graphql', 'grpc', 'http', 'measure', 'middleware', 'navigation', 'pageload', 'queue', 'resource', 'rpc', 'serialize', 'subprocess', 'template', 'topic', 'ui', 'ui.angular', 'ui.ember', 'ui.react', 'ui.svelte', 'ui.vue', 'view', 'websocket'.",
    example: 'db',
    changelog: [{ version: '0.4.0', prs: [218] }],
  },
  'sentry.client_sample_rate': {
    brief: 'Rate at which a span was sampled in the SDK.',
    example: 0.5,
    changelog: [{ version: '0.1.0', prs: [102] }],
  },
  'sentry.description': {
    brief: 'The human-readable description of a span.',
    example: 'index view query',
    changelog: [{ version: '0.1.0', prs: [135] }],
  },
  'sentry.dist': {
    brief: 'The sentry dist.',
    example: '1.0',
    changelog: [{ version: '0.16.0', prs: [489], description: 'Added dist as an alias' }, { version: '0.0.0' }],
  },
  'sentry.domain': {
    brief:
      'Used as a generic attribute representing the domain depending on the type of span. For instance, this is the collection/table name for database spans, and the server address for HTTP spans.',
    example: 'example.com',
    changelog: [{ version: '0.4.0', prs: [212] }],
  },
  'sentry.dsc.environment': {
    brief: 'The environment from the dynamic sampling context.',
    example: 'prod',
    changelog: [{ version: '0.3.0', prs: [185] }],
  },
  'sentry.dsc.project_id': {
    brief:
      'The ID of the project where the trace originated (i.e. the project of the SDK that started the trace). Propagated through the dynamic sampling context and set by Relay during ingestion.',
    example: '12345',
    changelog: [{ version: '0.7.0', prs: [358], description: 'Add sentry.dsc.project_id as an attribute' }],
  },
  'sentry.dsc.public_key': {
    brief: 'The public key from the dynamic sampling context.',
    example: 'c51734c603c4430eb57cb0a5728a479d',
    changelog: [{ version: '0.3.0', prs: [185] }],
  },
  'sentry.dsc.release': {
    brief: 'The release identifier from the dynamic sampling context.',
    example: 'frontend@e8211be71b214afab5b85de4b4c54be3714952bb',
    changelog: [{ version: '0.3.0', prs: [185] }],
  },
  'sentry.dsc.sampled': {
    brief: 'Whether the event was sampled according to the dynamic sampling context.',
    example: true,
    changelog: [{ version: '0.3.0', prs: [185] }],
  },
  'sentry.dsc.sample_rate': {
    brief: 'The sample rate from the dynamic sampling context.',
    example: '1.0',
    changelog: [{ version: '0.3.0', prs: [185] }],
  },
  'sentry.dsc.trace_id': {
    brief: 'The trace ID from the dynamic sampling context.',
    example: '047372980460430cbc78d9779df33a46',
    changelog: [{ version: '0.3.0', prs: [185] }],
  },
  'sentry.dsc.transaction': {
    brief: 'The transaction name from the dynamic sampling context.',
    example: '/issues/errors-outages/',
    changelog: [{ version: '0.3.0', prs: [185] }],
  },
  'sentry.environment': {
    brief: 'The sentry environment.',
    example: 'production',
    changelog: [{ version: '0.0.0' }],
  },
  'sentry.event.serialized_breadcrumbs': {
    brief: 'JSON-serialized `breadcrumbs` property from a Sentry event.',
    changelog: [{ version: '0.19.0', prs: [556] }],
  },
  'sentry.event.serialized_contexts': {
    brief: 'JSON-serialized `contexts` property from a Sentry event.',
    changelog: [{ version: '0.19.0', prs: [556] }],
  },
  'sentry.event.serialized_extra': {
    brief: 'JSON-serialized `extra` property from a Sentry event.',
    changelog: [{ version: '0.19.0', prs: [556] }],
  },
  'sentry.exclusive_time': {
    brief: 'The exclusive time duration of the span in milliseconds.',
    example: 1234,
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.3.0', prs: [160] }, { version: '0.0.0' }],
  },
  'sentry.frames.frozen': {
    brief: 'The number of frozen frames rendered during the lifetime of the span.',
    example: 3,
    changelog: [{ version: '0.19.0', prs: [500], description: 'Added sentry.frames.frozen attribute' }],
  },
  'sentry.frames.slow': {
    brief: 'The number of slow frames rendered during the lifetime of the span.',
    example: 1,
    changelog: [{ version: '0.19.0', prs: [500], description: 'Added sentry.frames.slow attribute' }],
  },
  'sentry.frames.total': {
    brief: 'The number of total frames rendered during the lifetime of the span.',
    example: 60,
    changelog: [{ version: '0.19.0', prs: [500], description: 'Added sentry.frames.total attribute' }],
  },
  'sentry.graphql.operation': {
    brief: 'Indicates the type of graphql operation, emitted by the Javascript SDK.',
    example: 'getUserById',
    changelog: [{ version: '0.3.1', prs: [190] }],
  },
  'sentry.group': {
    brief:
      'Stores the hash of `sentry.normalized_description`. This is primarily used for grouping spans in the product end.',
    changelog: [{ version: '0.4.0', prs: [212] }],
  },
  'sentry.http.prefetch': {
    brief: 'If an http request was a prefetch request.',
    example: true,
    changelog: [{ version: '0.0.0' }],
  },
  'sentry.idle_span_finish_reason': {
    brief: 'The reason why an idle span ended early.',
    example: 'idleTimeout',
    changelog: [{ version: '0.0.0' }],
  },
  'sentry.is_remote': {
    brief: "Indicates whether a span's parent is remote.",
    example: true,
    changelog: [{ version: '0.3.1', prs: [190] }],
  },
  'sentry.kind': {
    brief:
      'Used to clarify the relationship between parents and children, or to distinguish between spans, e.g. a `server` and `client` span with the same name.',
    example: 'client',
    examples: ['client', 'server', 'producer', 'consumer', 'internal'],
    changelog: [
      { version: '0.19.0', prs: [517], description: 'Added more examples and additional_context to the attribute' },
      { version: '0.3.1', prs: [190] },
    ],
    additionalContext: ['Valid attribute values are: "client", "server", "producer", "consumer" and "internal"'],
  },
  'sentry.main_thread': {
    brief: 'Whether the span or event occurred on the main thread. Computed by Relay and should not be set by SDKs.',
    example: true,
    changelog: [{ version: '0.5.0' }],
  },
  'sentry.message.parameter.<key>': {
    brief:
      "A parameter used in the message template. <key> can either be the number that represent the parameter's position in the template string (sentry.message.parameter.0, sentry.message.parameter.1, etc) or the parameter's name (sentry.message.parameter.item_id, sentry.message.parameter.user_id, etc)",
    example: "sentry.message.parameter.0='123'",
    changelog: [{ version: '0.1.0', prs: [116] }],
  },
  'sentry.message.template': {
    brief: 'The parameterized template string.',
    example: 'Hello, {name}!',
    changelog: [{ version: '0.1.0', prs: [116] }],
  },
  'sentry.metric.source': {
    brief:
      'The provenance of a metric.  For example, this can be set to indicate if a metric was generated by Relay from a span.',
    example: 'span',
    changelog: [{ version: '0.16.0', prs: [476], description: 'Added sentry.metric.source attribute' }],
  },
  'sentry.mobile': {
    brief: 'Whether the application is using a mobile SDK. Computed by Relay and should not be set by SDKs.',
    example: true,
    changelog: [{ version: '0.5.0' }],
  },
  'sentry.module.<key>': {
    brief: 'A module that was loaded in the process. The key is the name of the module.',
    example: "sentry.module.brianium/paratest='v7.7.0'",
    changelog: [{ version: '0.1.0', prs: [103] }],
  },
  'sentry.nextjs.ssr.function.route': {
    brief:
      'A parameterized route for a function in Next.js that contributes to Server-Side Rendering. Should be present on spans that track such functions when the file location of the function is known.',
    example: '/posts/[id]/layout',
    changelog: [{ version: '0.1.0', prs: [54, 106] }],
  },
  'sentry.nextjs.ssr.function.type': {
    brief:
      'A descriptor for a for a function in Next.js that contributes to Server-Side Rendering. Should be present on spans that track such functions.',
    example: 'generateMetadata',
    changelog: [{ version: '0.1.0', prs: [54, 106] }],
  },
  'sentry.normalized_db_query': {
    brief: 'The normalized version of `db.query.text`.',
    example: 'SELECT .. FROM sentry_project WHERE (project_id = %s)',
    changelog: [{ version: '0.3.1', prs: [194] }],
  },
  'sentry.normalized_db_query.hash': {
    brief: 'The hash of `sentry.normalized_db_query`.',
    changelog: [{ version: '0.4.0', prs: [200] }],
  },
  'sentry.normalized_description': {
    brief:
      'Used as a generic attribute representing the normalized `sentry.description`. This refers to the legacy use case of `sentry.description` where it holds relevant data depending on the type of span (e.g. database query, resource url, http request description, etc).',
    example: 'SELECT .. FROM sentry_project WHERE (project_id = %s)',
    changelog: [{ version: '0.4.0', prs: [212] }],
  },
  'sentry.observed_timestamp_nanos': {
    brief: 'The timestamp at which an envelope was received by Relay, in nanoseconds.',
    example: '1544712660300000000',
    changelog: [
      { version: '0.3.0', prs: [174] },
      { version: '0.2.0', prs: [137] },
    ],
  },
  'sentry.op': {
    brief: 'The operation of a span.',
    example: 'http.client',
    changelog: [{ version: '0.0.0' }],
  },
  'sentry.origin': {
    brief: 'The origin of the instrumentation (e.g. span, log, etc.)',
    example: 'auto.http.otel.fastify',
    changelog: [{ version: '0.1.0', prs: [68] }, { version: '0.0.0' }],
  },
  'sentry.pageload.span_id': {
    brief: 'The id of the pageload span, set by web vital spans and metrics',
    example: 'bf2c8d3df84524de',
    changelog: [{ version: '0.17.0', prs: [495], description: 'Added sentry.pageload.span_id attribute' }],
  },
  'sentry.platform': {
    brief: 'The sdk platform that generated the event.',
    example: 'php',
    changelog: [{ version: '0.0.0' }],
  },
  'sentry.profiler_id': {
    brief: 'The id of the currently running profiler (continuous profiling)',
    example: '18779b64dd35d1a538e7ce2dd2d3fad3',
    changelog: [{ version: '0.4.0', prs: [242] }],
  },
  'sentry.profile_id': {
    brief:
      'The ID of the Sentry profile the span is associated with. This is only meaningful for transaction-based profiling.',
    example: '123e4567e89b12d3a456426614174000',
    changelog: [
      { version: '0.19.0', prs: [497], description: 'Added profile_id as an alias' },
      { version: '0.6.0', prs: [344], description: 'Added sentry.profile_id attribute' },
    ],
  },
  'sentry.relay.ingress': {
    brief: 'How an item (span, log, &c.) entered Relay.',
    example: 'OTEL',
    changelog: [{ version: '0.17.0', prs: [491], description: 'Added sentry.relay.ingress attribute' }],
  },
  'sentry.relay.pipeline': {
    brief: 'An internal descriptor of which processing pipeline an item went through in Relay.',
    example: 'span v2',
    changelog: [{ version: '0.17.0', prs: [491], description: 'Added sentry.relay.pipeline attribute' }],
  },
  'sentry.release': {
    brief: 'The sentry release.',
    example: '7.0.0',
    changelog: [{ version: '0.0.0' }],
  },
  'sentry.replay_id': {
    brief: 'The id of the sentry replay.',
    example: '123e4567e89b12d3a456426614174000',
    changelog: [{ version: '0.0.0' }],
  },
  'sentry.replay_is_buffering': {
    brief:
      'A sentinel attribute on log events indicating whether the current Session Replay is being buffered (onErrorSampleRate).',
    example: true,
    changelog: [{ version: '0.3.0', prs: [185] }],
  },
  'sentry.report_event': {
    brief: '(Deprecated) The event that caused the SDK to report CLS or LCP (pagehide or navigation)',
    example: 'pagehide',
    changelog: [{ version: '0.5.0', prs: [320], description: 'Added sentry.report_event attribute' }],
  },
  'sentry.sdk.integrations': {
    brief:
      'A list of names identifying enabled integrations. The list shouldhave all enabled integrations, including default integrations. Defaultintegrations are included because different SDK releases may contain differentdefault integrations.',
    example: ['InboundFilters', 'FunctionToString', 'BrowserApiErrors', 'Breadcrumbs'],
    changelog: [{ version: '0.0.0', prs: [42] }],
  },
  'sentry.sdk.name': {
    brief: 'The sentry sdk name.',
    example: '@sentry/react',
    changelog: [{ version: '0.0.0' }],
  },
  'sentry.sdk.version': {
    brief: 'The sentry sdk version.',
    example: '7.0.0',
    changelog: [{ version: '0.0.0' }],
  },
  'sentry.segment.id': {
    brief: 'The segment ID of a span',
    example: '051581bf3cb55c13',
    changelog: [{ version: '0.1.0', prs: [107, 124] }],
  },
  'sentry.segment_id': {
    brief: 'The segment ID of a span',
    example: '051581bf3cb55c13',
    changelog: [{ version: '0.1.0', prs: [124] }],
  },
  'sentry.segment.name': {
    brief: 'The segment name of a span',
    example: 'GET /user',
    changelog: [
      { version: '0.6.0', prs: [345], description: 'Added sentry.transaction and transaction aliases' },
      { version: '0.1.0', prs: [104] },
    ],
  },
  'sentry.segment.name.source': {
    brief:
      "The source of the segment span name. Should only be set on segment spans. Known values are:  `'custom'`, `'url'`, `'route'`, `'component'`, `'view'`, `'task'`.",
    example: 'route',
    examples: ['route', 'component', 'view', 'task', 'custom', 'url'],
    changelog: [{ version: '0.19.0', prs: [466], description: 'Added sentry.segment.name.source' }],
    additionalContext: [
      'This attribute is the replacement for `transaction_info.source` on transactions.',
      'Should we bring back clustering for segment names (like we do for transaction names), this attribute will be used to determine if a segment name should be clustered.',
    ],
  },
  'sentry.server_sample_rate': {
    brief: 'Rate at which a span was sampled in Relay.',
    example: 0.5,
    changelog: [{ version: '0.1.0', prs: [102] }],
  },
  'sentry.source': {
    brief:
      "The source of a span, also referred to as transaction source. Known values are:  `'custom'`, `'url'`, `'route'`, `'component'`, `'view'`, `'task'`. '`source`' describes a parametrized route, while `'url'` describes the full URL, potentially containing identifiers.",
    example: 'route',
    changelog: [
      { version: '0.19.0', prs: [510], description: 'Removed the sentry.span.source replacement' },
      { version: '0.5.0' },
    ],
  },
  'sentry.span.source': {
    brief:
      "The source of a span, also referred to as transaction source. Known values are:  `'custom'`, `'url'`, `'route'`, `'component'`, `'view'`, `'task'`. '`source`' describes a parametrized route, while `'url'` describes the full URL, potentially containing identifiers.",
    example: 'route',
    changelog: [
      {
        version: '0.19.0',
        prs: [510],
        description: 'Deprecated; superseded by sentry.segment.name.source on segment spans',
      },
      { version: '0.4.0', prs: [214] },
      { version: '0.0.0' },
    ],
  },
  'sentry.status': {
    brief:
      'The span\'s status (either "ok" or "error"). Older SDKs may set this to a more specific error, but this behaviour is deprecated.',
    example: 'ok',
    changelog: [{ version: '0.14.0', prs: [453] }],
  },
  'sentry.status_code': {
    brief:
      'The HTTP status code used in Sentry Insights. Typically set by Sentry during ingestion, rather than by clients.',
    example: 200,
    changelog: [{ version: '0.4.0', prs: [223, 228] }],
  },
  'sentry.status.message': {
    brief: 'The from OTLP extracted status message.',
    example: 'foobar',
    changelog: [{ version: '0.3.1', prs: [190] }],
  },
  'sentry.sveltekit.navigation.from': {
    brief: 'the navigation origin (sveltekit router)',
    example: '/home',
    changelog: [{ version: '0.16.0', prs: [467], description: 'Added sentry.sveltekit.navigation.from attribute' }],
  },
  'sentry.sveltekit.navigation.to': {
    brief: 'the navigation destination',
    example: '/users/:id',
    changelog: [{ version: '0.16.0', prs: [467], description: 'Added sentry.sveltekit.navigation.to attribute' }],
  },
  'sentry.sveltekit.navigation.type': {
    brief: 'The type of navigation event emitted from the sveltekit client router',
    example: 'link',
    changelog: [{ version: '0.16.0', prs: [467], description: 'Added sentry.sveltekit.navigation.type attribute' }],
  },
  'sentry.thread.id': {
    brief: 'Current “managed” thread ID.',
    example: 56,
    changelog: [{ version: '0.13.0', prs: [451] }],
  },
  'sentry.timestamp.sequence': {
    brief:
      'A sequencing counter for deterministic ordering of logs or metrics when timestamps share the same integer millisecond. Starts at 0 on SDK initialization, increments by 1 for each captured item, and resets to 0 when the integer millisecond of the current item differs from the previous one.',
    example: 0,
    changelog: [{ version: '0.5.0', prs: [262] }],
  },
  'sentry.trace_lifecycle': {
    brief: 'Indicates the chosen trace lifecycle mode of the SDK (stream or static)',
    example: 'stream',
    changelog: [{ version: '0.13.0', prs: [442], description: 'Added sentry.trace_lifecycle attribute' }],
  },
  'sentry.trace.parent_span_id': {
    brief:
      'The span id of the span that was active when the log was collected. This should not be set if there was no active span.',
    example: 'b0e6f15b45c36b12',
    changelog: [
      { version: '0.5.0', prs: [287], description: 'Deprecate `sentry.trace.parent_span_id`' },
      { version: '0.1.0', prs: [116] },
    ],
  },
  'sentry.trace.status': {
    brief:
      'The segment\'s status (either "ok" or "error"). Older SDKs may set this to a more specific error, but this behaviour is deprecated.',
    example: 'ok',
    changelog: [{ version: '0.14.0', prs: [453] }],
  },
  'sentry.transaction': {
    brief: 'The sentry transaction (segment name).',
    example: 'GET /',
    changelog: [
      { version: '0.6.0', prs: [345], description: 'Deprecated sentry.transaction in favor of sentry.segment.name' },
      { version: '0.0.0' },
    ],
  },
  'sentry.user.email': {
    brief: 'User email address.',
    changelog: [{ version: '0.10.0', prs: [406] }],
  },
  'sentry.user.geo.city': {
    brief: 'Human readable city name.',
    changelog: [{ version: '0.10.0', prs: [406] }],
  },
  'sentry.user.geo.country_code': {
    brief: 'Two-letter country code (ISO 3166-1 alpha-2).',
    changelog: [{ version: '0.10.0', prs: [406] }],
  },
  'sentry.user.geo.region': {
    brief: 'Human readable region name or code.',
    changelog: [{ version: '0.10.0', prs: [406] }],
  },
  'sentry.user.geo.subdivision': {
    brief: 'Human readable subdivision name.',
    changelog: [{ version: '0.10.0', prs: [406] }],
  },
  'sentry.user.id': {
    brief: 'Unique identifier of the user.',
    changelog: [{ version: '0.10.0', prs: [406] }],
  },
  'sentry.user.ip': {
    brief: 'The IP address of the user.',
    changelog: [{ version: '0.10.0', prs: [406] }],
  },
  'sentry.user.username': {
    brief: 'Short name or login/username of the user.',
    changelog: [{ version: '0.10.0', prs: [406] }],
  },
  'server.address': {
    brief:
      'Server domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.',
    example: 'example.com',
    changelog: [
      { version: '0.19.0', prs: [534], description: 'Added address as an alias' },
      { version: '0.1.0', prs: [108, 127] },
      { version: '0.0.0' },
    ],
  },
  server_name: {
    brief:
      'Server domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.',
    example: 'example.com',
    changelog: [
      { version: '0.19.0', prs: [534], description: 'Added address as an alias' },
      {
        version: '0.16.0',
        prs: [477],
        description: 'Added server_name attribute, deprecated in favor of server.address',
      },
    ],
  },
  'server.port': {
    brief: 'Server port number.',
    example: 1337,
    changelog: [
      { version: '0.19.0', prs: [532], description: 'Added port as an alias' },
      { version: '0.4.0', prs: [228] },
      { version: '0.0.0' },
    ],
  },
  'service.name': {
    brief: 'Logical name of the service.',
    example: 'omegastar',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'service.version': {
    brief: 'The version string of the service API or implementation. The format is not defined by these conventions.',
    example: '5.0.0',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'session.id': {
    brief: 'A unique id identifying the active session at the time of setting this attribute',
    example: '00112233-4455-6677-8899-aabbccddeeff',
    changelog: [{ version: '0.11.0', prs: [412], description: 'Added session.id attribute' }],
  },
  stall_percentage: {
    brief: 'The fraction of time the app was stalled. Only applies to React Native. This is computed by Relay.',
    changelog: [
      { version: '0.19.0', prs: [493], description: 'Deprecated in favor of app.vitals.stall.percentage' },
      { version: '0.7.0', prs: [362], description: 'Added stall_percentage attribute' },
    ],
  },
  stall_total_time: {
    brief:
      'The combined duration of all stalls in milliseconds. Only applies to React Native. This is computed by Relay.',
    changelog: [
      { version: '0.19.0', prs: [493], description: 'Deprecated in favor of app.vitals.stall.duration' },
      { version: '0.7.0', prs: [362], description: 'Added stall_total_time attribute' },
    ],
  },
  'starlette.middleware_name': {
    brief: 'The name of the Starlette middleware.',
    example: 'AuthenticationMiddleware',
    changelog: [
      {
        version: '0.19.0',
        prs: [485],
        description: 'Added starlette.middleware_name attribute, deprecated in favor of middleware.name',
      },
    ],
  },
  'starlite.middleware_name': {
    brief: 'The name of the Starlite middleware.',
    example: 'AuthenticationMiddleware',
    examples: ['AuthenticationMiddleware'],
    changelog: [{ version: '0.19.0', prs: [519], description: 'Added starlite.middleware_name attribute' }],
  },
  'state.type': {
    brief: 'The type of state management library',
    example: 'redux',
    changelog: [{ version: '0.7.0', prs: [365], description: 'Added state.type attribute' }],
  },
  'subprocess.pid': {
    brief: 'The process ID of a subprocess.',
    example: 12345,
    changelog: [
      {
        version: '0.19.0',
        prs: [487],
        description: 'Added subprocess.pid attribute, deprecated in favor of process.pid',
      },
    ],
  },
  'thread.id': {
    brief: 'Current “managed” thread ID.',
    example: 56,
    changelog: [{ version: '0.0.0' }],
  },
  'thread.name': {
    brief: 'Current thread name.',
    example: 'main',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'timber.tag': {
    brief: 'The log tag provided by the timber logging framework.',
    example: 'MyTag',
    changelog: [{ version: '0.3.0', prs: [183] }],
  },
  time_to_full_display: {
    brief: 'The duration of time to full display in milliseconds',
    example: 1234.56,
    changelog: [
      { version: '0.5.0', prs: [313], description: 'Added and deprecated in favor of app.vitals.ttfd.value' },
    ],
  },
  time_to_initial_display: {
    brief: 'The duration of time to initial display in milliseconds',
    example: 1234.56,
    changelog: [
      { version: '0.5.0', prs: [313], description: 'Added and deprecated in favor of app.vitals.ttid.value' },
    ],
  },
  transaction: {
    brief: 'The sentry transaction (segment name).',
    example: 'GET /',
    changelog: [
      { version: '0.19.0', prs: [497], description: 'Change deprecation from backfill to normalize' },
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
    example: 'user.getById',
    changelog: [{ version: '0.7.0', prs: [370], description: 'Added trpc.procedure_path attribute' }],
  },
  'trpc.procedure_type': {
    brief: 'The type of the tRPC procedure',
    example: 'query',
    changelog: [{ version: '0.7.0', prs: [370], description: 'Added trpc.procedure_type attribute' }],
  },
  ttfb: {
    brief: 'The value of the recorded Time To First Byte (TTFB) web vital in milliseconds',
    example: 194,
    changelog: [{ version: '0.5.0', prs: [235] }],
  },
  'ttfb.requestTime': {
    brief:
      "The time it takes for the server to process the initial request and send the first byte of a response to the user's browser",
    example: 1554.5814,
    changelog: [{ version: '0.5.0', prs: [235] }],
  },
  type: {
    brief: 'More granular type of the operation happening.',
    example: 'fetch',
    changelog: [{ version: '0.0.0' }],
  },
  'ui.component_name': {
    brief: 'The name of the associated component.',
    example: 'HomeButton',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'ui.contributes_to_ttfd': {
    brief: 'Whether the span execution contributed to the TTFD (time to fully drawn) metric.',
    example: true,
    changelog: [{ version: '0.0.0' }],
  },
  'ui.contributes_to_ttid': {
    brief: 'Whether the span execution contributed to the TTID (time to initial display) metric.',
    example: true,
    changelog: [{ version: '0.0.0' }],
  },
  'ui.element.height': {
    brief: 'The height of the UI element (for Html in pixels)',
    example: 256,
    changelog: [{ version: '0.5.0', prs: [284], description: 'Added ui.element.height attribute' }],
  },
  'ui.element.id': {
    brief: 'The id of the UI element',
    example: 'btn-login',
    changelog: [{ version: '0.5.0', prs: [284], description: 'Added ui.element.id attribute' }],
  },
  'ui.element.identifier': {
    brief: 'The identifier used to measure the UI element timing',
    example: 'heroImage',
    changelog: [{ version: '0.5.0', prs: [284], description: 'Added ui.element.identifier attribute' }],
  },
  'ui.element.load_time': {
    brief: 'The loading time of a UI element (from time origin to finished loading)',
    example: 998.2234,
    changelog: [{ version: '0.5.0', prs: [284], description: 'Added ui.element.load_time attribute' }],
  },
  'ui.element.paint_type': {
    brief: "The type of element paint. Can either be 'image-paint' or 'text-paint'",
    example: 'image-paint',
    changelog: [{ version: '0.5.0', prs: [284], description: 'Added ui.element.paint_type attribute' }],
  },
  'ui.element.render_time': {
    brief: 'The rendering time of the UI element (from time origin to finished rendering)',
    example: 1023.1124,
    changelog: [{ version: '0.5.0', prs: [284], description: 'Added ui.element.render_time attribute' }],
  },
  'ui.element.type': {
    brief: 'type of the UI element',
    example: 'img',
    changelog: [{ version: '0.5.0', prs: [284], description: 'Added ui.element.type attribute' }],
  },
  'ui.element.url': {
    brief: 'The URL of the UI element (e.g. an img src)',
    example: 'https://assets.myapp.com/hero.png',
    changelog: [{ version: '0.5.0', prs: [284], description: 'Added ui.element.url attribute' }],
  },
  'ui.element.width': {
    brief: 'The width of the UI element (for HTML in pixels)',
    example: 512,
    changelog: [{ version: '0.5.0', prs: [284], description: 'Added ui.element.width attribute' }],
  },
  url: {
    brief: 'The URL of the resource that was fetched.',
    example: 'https://example.com/test?foo=bar#buzz',
    changelog: [{ version: '0.1.0', prs: [61] }, { version: '0.0.0' }],
  },
  'url.domain': {
    brief:
      'Server domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.',
    example: 'example.com',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'url.fragment': {
    brief:
      'The fragments present in the URI. Note that this does not contain the leading # character, while the `http.fragment` attribute does.',
    example: 'details',
    changelog: [{ version: '0.0.0' }],
  },
  'url.full': {
    brief: 'The URL of the resource that was fetched.',
    example: 'https://example.com/test?foo=bar#buzz',
    changelog: [
      { version: '0.19.0', prs: [488], description: 'Added aws.request.url as an alias' },
      { version: '0.1.0', prs: [108] },
      { version: '0.0.0' },
    ],
  },
  'url.path': {
    brief: 'The URI path component.',
    example: '/foo',
    changelog: [{ version: '0.0.0' }],
  },
  'url.path.parameter.<key>': {
    brief:
      'Decoded parameters extracted from a URL path. Usually added by client-side routing frameworks like vue-router.',
    example: "url.path.parameter.id='123'",
    changelog: [{ version: '0.1.0', prs: [103] }],
  },
  'url.port': {
    brief: 'Server port number.',
    example: 1337,
    changelog: [{ version: '0.4.0', prs: [228] }, { version: '0.0.0' }],
  },
  'url.query': {
    brief:
      'The query string present in the URL. Note that this does not contain the leading ? character, while the `http.query` attribute does.',
    example: 'foo=bar&bar=baz',
    changelog: [{ version: '0.0.0' }],
  },
  'url.same_origin': {
    brief: "Indicates that a URL has the same origin as the current page's origin in the browser.",
    example: true,
    changelog: [
      {
        version: '0.16.0',
        prs: [456],
        description: 'Added url.same_origin attribute, deprecated in favor of http.request.same_origin',
      },
    ],
  },
  'url.scheme': {
    brief: 'The URI scheme component identifying the used protocol.',
    example: 'https',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'url.template': {
    brief: 'The low-cardinality template of an absolute URL path reference.',
    example: '/users/{id}',
    examples: ['/users/{id}', '/users/:id', '/about'],
    changelog: [
      {
        version: '0.19.0',
        prs: [505, 521],
        description: 'Added multiple examples, removed alias to `http.route`, added additional context',
      },
      { version: '0.1.0', prs: [127] },
      { version: '0.0.0' },
    ],
    additionalContext: [
      'This attribute should primarily be set by client-side routing instrumentation, or `http.client` spans (if applicable).',
      'Use `http.route` for server-side instrumentation that captures the framework route of an incoming request.',
    ],
  },
  'user_agent.original': {
    brief: 'Value of the HTTP User-Agent header sent by the client.',
    example:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Mobile/15E148 Safari/604.1',
    changelog: [{ version: '0.1.0', prs: [127] }, { version: '0.0.0' }],
  },
  'user.email': {
    brief: 'User email address.',
    example: 'test@example.com',
    changelog: [{ version: '0.0.0' }],
  },
  'user.full_name': {
    brief: "User's full name.",
    example: 'John Smith',
    changelog: [{ version: '0.0.0' }],
  },
  'user.geo.city': {
    brief: 'Human readable city name.',
    example: 'Toronto',
    changelog: [{ version: '0.0.0' }],
  },
  'user.geo.country_code': {
    brief: 'Two-letter country code (ISO 3166-1 alpha-2).',
    example: 'CA',
    changelog: [{ version: '0.0.0' }],
  },
  'user.geo.region': {
    brief: 'Human readable region name or code.',
    example: 'Canada',
    changelog: [{ version: '0.0.0' }],
  },
  'user.geo.subdivision': {
    brief: 'Human readable subdivision name.',
    example: 'Ontario',
    changelog: [{ version: '0.0.0' }],
  },
  'user.hash': {
    brief: 'Unique user hash to correlate information for a user in anonymized form.',
    example: '8ae4c2993e0f4f3b8b2d1b1f3b5e8f4d',
    changelog: [{ version: '0.0.0' }],
  },
  'user.id': {
    brief: 'Unique identifier of the user.',
    example: 'S-1-5-21-202424912787-2692429404-2351956786-1000',
    changelog: [{ version: '0.0.0' }],
  },
  'user.ip_address': {
    brief: 'The IP address of the user.',
    example: '192.168.1.1',
    changelog: [{ version: '0.1.0', prs: [75] }],
  },
  'user.name': {
    brief: 'Short name or login/username of the user.',
    example: 'j.smith',
    changelog: [{ version: '0.0.0' }],
  },
  'user.roles': {
    brief: 'Array of user roles at the time of the event.',
    example: ['admin', 'editor'],
    changelog: [{ version: '0.0.0' }],
  },
  'vercel.branch': {
    brief: 'Git branch name for Vercel project',
    example: 'main',
    changelog: [{ version: '0.2.0', prs: [163] }],
  },
  'vercel.build_id': {
    brief: 'Identifier for the Vercel build (only present on build logs)',
    example: 'bld_cotnkcr76',
    changelog: [{ version: '0.2.0', prs: [163] }],
  },
  'vercel.deployment_id': {
    brief: 'Identifier for the Vercel deployment',
    example: 'dpl_233NRGRjVZX1caZrXWtz5g1TAksD',
    changelog: [{ version: '0.2.0', prs: [163] }],
  },
  'vercel.destination': {
    brief: 'Origin of the external content in Vercel (only on external logs)',
    example: 'https://vitals.vercel-insights.com/v1',
    changelog: [{ version: '0.2.0', prs: [163] }],
  },
  'vercel.edge_type': {
    brief: 'Type of edge runtime in Vercel',
    example: 'edge-function',
    changelog: [{ version: '0.2.0', prs: [163] }],
  },
  'vercel.entrypoint': {
    brief: 'Entrypoint for the request in Vercel',
    example: 'api/index.js',
    changelog: [{ version: '0.2.0', prs: [163] }],
  },
  'vercel.execution_region': {
    brief: 'Region where the request is executed',
    example: 'sfo1',
    changelog: [{ version: '0.2.0', prs: [163] }],
  },
  'vercel.id': {
    brief: 'Unique identifier for the log entry in Vercel',
    example: '1573817187330377061717300000',
    changelog: [{ version: '0.2.0', prs: [163] }],
  },
  'vercel.ja3_digest': {
    brief: 'JA3 fingerprint digest of Vercel request',
    example: '769,47-53-5-10-49161-49162-49171-49172-50-56-19-4,0-10-11,23-24-25,0',
    changelog: [{ version: '0.2.0', prs: [163] }],
  },
  'vercel.ja4_digest': {
    brief: 'JA4 fingerprint digest',
    example: 't13d1516h2_8daaf6152771_02713d6af862',
    changelog: [{ version: '0.2.0', prs: [163] }],
  },
  'vercel.log_type': {
    brief: 'Vercel log output type',
    example: 'stdout',
    changelog: [{ version: '0.2.0', prs: [163] }],
  },
  'vercel.path': {
    brief: 'Function or dynamic path of the request in Vercel.',
    example: '/dynamic/[route].json',
    changelog: [{ version: '0.6.0', prs: [349], description: 'Added vercel.path attribute' }],
  },
  'vercel.project_id': {
    brief: 'Identifier for the Vercel project',
    example: 'gdufoJxB6b9b1fEqr1jUtFkyavUU',
    changelog: [{ version: '0.2.0', prs: [163] }],
  },
  'vercel.project_name': {
    brief: 'Name of the Vercel project',
    example: 'my-app',
    changelog: [{ version: '0.2.0', prs: [163] }],
  },
  'vercel.proxy.cache_id': {
    brief: 'Original request ID when request is served from cache',
    example: 'pdx1::v8g4b-1744143786684-93dafbc0f70d',
    changelog: [{ version: '0.2.0', prs: [163] }],
  },
  'vercel.proxy.client_ip': {
    brief: 'Client IP address',
    example: '120.75.16.101',
    changelog: [{ version: '0.2.0', prs: [163] }],
  },
  'vercel.proxy.host': {
    brief: 'Hostname of the request',
    example: 'test.vercel.app',
    changelog: [{ version: '0.2.0', prs: [163] }],
  },
  'vercel.proxy.lambda_region': {
    brief: 'Region where lambda function executed',
    example: 'sfo1',
    changelog: [{ version: '0.2.0', prs: [163] }],
  },
  'vercel.proxy.method': {
    brief: 'HTTP method of the request',
    example: 'GET',
    changelog: [{ version: '0.2.0', prs: [163] }],
  },
  'vercel.proxy.path': {
    brief: 'Request path with query parameters',
    example: '/dynamic/some-value.json?route=some-value',
    changelog: [{ version: '0.2.0', prs: [163] }],
  },
  'vercel.proxy.path_type': {
    brief: 'How the request was served based on its path and project configuration',
    example: 'func',
    changelog: [{ version: '0.2.0', prs: [163] }],
  },
  'vercel.proxy.path_type_variant': {
    brief: 'Variant of the path type',
    example: 'api',
    changelog: [{ version: '0.2.0', prs: [163] }],
  },
  'vercel.proxy.referer': {
    brief: 'Referer of the request',
    example: '*.vercel.app',
    changelog: [{ version: '0.2.0', prs: [163] }],
  },
  'vercel.proxy.region': {
    brief: 'Region where the request is processed',
    example: 'sfo1',
    changelog: [{ version: '0.2.0', prs: [163] }],
  },
  'vercel.proxy.response_byte_size': {
    brief: 'Size of the response in bytes',
    example: 1024,
    changelog: [
      { version: '0.4.0', prs: [228] },
      { version: '0.2.0', prs: [163] },
    ],
  },
  'vercel.proxy.scheme': {
    brief: 'Protocol of the request',
    example: 'https',
    changelog: [{ version: '0.2.0', prs: [163] }],
  },
  'vercel.proxy.status_code': {
    brief: 'HTTP status code of the proxy request',
    example: 200,
    changelog: [
      { version: '0.4.0', prs: [228] },
      { version: '0.2.0', prs: [163] },
    ],
  },
  'vercel.proxy.timestamp': {
    brief: 'Unix timestamp when the proxy request was made',
    example: 1573817250172,
    changelog: [
      { version: '0.4.0', prs: [228] },
      { version: '0.2.0', prs: [163] },
    ],
  },
  'vercel.proxy.user_agent': {
    brief: 'User agent strings of the request',
    example: ['Mozilla/5.0...'],
    changelog: [{ version: '0.2.0', prs: [163] }],
  },
  'vercel.proxy.vercel_cache': {
    brief: 'Cache status sent to the browser',
    example: 'REVALIDATED',
    changelog: [{ version: '0.2.0', prs: [163] }],
  },
  'vercel.proxy.vercel_id': {
    brief: 'Vercel-specific identifier',
    example: 'sfo1::abc123',
    changelog: [{ version: '0.2.0', prs: [163] }],
  },
  'vercel.proxy.waf_action': {
    brief: 'Action taken by firewall rules',
    example: 'deny',
    changelog: [{ version: '0.2.0', prs: [163] }],
  },
  'vercel.proxy.waf_rule_id': {
    brief: 'ID of the firewall rule that matched',
    example: 'rule_gAHz8jtSB1Gy',
    changelog: [{ version: '0.2.0', prs: [163] }],
  },
  'vercel.request_id': {
    brief: 'Identifier of the Vercel request',
    example: '643af4e3-975a-4cc7-9e7a-1eda11539d90',
    changelog: [{ version: '0.2.0', prs: [163] }],
  },
  'vercel.source': {
    brief: 'Origin of the Vercel log (build, edge, lambda, static, external, or firewall)',
    example: 'build',
    changelog: [{ version: '0.2.0', prs: [163] }],
  },
  'vercel.status_code': {
    brief: 'HTTP status code of the request (-1 means no response returned and the lambda crashed)',
    example: 200,
    changelog: [
      { version: '0.4.0', prs: [228] },
      { version: '0.2.0', prs: [163] },
    ],
  },
};
