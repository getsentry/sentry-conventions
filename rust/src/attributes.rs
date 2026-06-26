// This is an auto-generated file. Do not edit!

// Path: model/attributes/ai/ai__citations.json
/// References or sources cited by the AI model in its response.
#[deprecated]
pub const AI_CITATIONS: &str = "ai.citations";

// Path: model/attributes/ai/ai__completion_tokens__used.json
/// The number of tokens used to respond to the message.
#[deprecated(note = "Use gen_ai.usage.output_tokens instead.")]
pub const AI_COMPLETION_TOKENS_USED: &str = "ai.completion_tokens.used";

// Path: model/attributes/ai/ai__documents.json
/// Documents or content chunks used as context for the AI model.
#[deprecated]
pub const AI_DOCUMENTS: &str = "ai.documents";

// Path: model/attributes/ai/ai__finish_reason.json
/// The reason why the model stopped generating.
#[deprecated(note = "Use gen_ai.response.finish_reasons instead.")]
pub const AI_FINISH_REASON: &str = "ai.finish_reason";

// Path: model/attributes/ai/ai__frequency_penalty.json
/// Used to reduce repetitiveness of generated tokens. The higher the value, the stronger a penalty is applied to previously present tokens, proportional to how many times they have already appeared in the prompt or prior generation.
#[deprecated(note = "Use gen_ai.request.frequency_penalty instead.")]
pub const AI_FREQUENCY_PENALTY: &str = "ai.frequency_penalty";

// Path: model/attributes/ai/ai__function_call.json
/// For an AI model call, the function that was called. This is deprecated for OpenAI, and replaced by tool_calls
#[deprecated(note = "Use gen_ai.tool.name instead.")]
pub const AI_FUNCTION_CALL: &str = "ai.function_call";

// Path: model/attributes/ai/ai__generation_id.json
/// Unique identifier for the completion.
#[deprecated(note = "Use gen_ai.response.id instead.")]
pub const AI_GENERATION_ID: &str = "ai.generation_id";

// Path: model/attributes/ai/ai__input_messages.json
/// The input messages sent to the model
#[deprecated(note = "Use gen_ai.input.messages instead.")]
pub const AI_INPUT_MESSAGES: &str = "ai.input_messages";

// Path: model/attributes/ai/ai__is_search_required.json
/// Boolean indicating if the model needs to perform a search.
#[deprecated]
pub const AI_IS_SEARCH_REQUIRED: &str = "ai.is_search_required";

// Path: model/attributes/ai/ai__metadata.json
/// Extra metadata passed to an AI pipeline step.
#[deprecated]
pub const AI_METADATA: &str = "ai.metadata";

// Path: model/attributes/ai/ai__model_id.json
/// The vendor-specific ID of the model used.
#[deprecated(note = "Use gen_ai.response.model instead.")]
pub const AI_MODEL_ID: &str = "ai.model_id";

// Path: model/attributes/ai/ai__model__provider.json
/// The provider of the model.
#[deprecated(note = "Use gen_ai.provider.name instead.")]
pub const AI_MODEL_PROVIDER: &str = "ai.model.provider";

// Path: model/attributes/ai/ai__pipeline__name.json
/// The name of the AI pipeline.
#[deprecated(note = "Use gen_ai.pipeline.name instead.")]
pub const AI_PIPELINE_NAME: &str = "ai.pipeline.name";

// Path: model/attributes/ai/ai__preamble.json
/// For an AI model call, the preamble parameter. Preambles are a part of the prompt used to adjust the model's overall behavior and conversation style.
#[deprecated(note = "Use gen_ai.system_instructions instead.")]
pub const AI_PREAMBLE: &str = "ai.preamble";

// Path: model/attributes/ai/ai__presence_penalty.json
/// Used to reduce repetitiveness of generated tokens. Similar to frequency_penalty, except that this penalty is applied equally to all tokens that have already appeared, regardless of their exact frequencies.
#[deprecated(note = "Use gen_ai.request.presence_penalty instead.")]
pub const AI_PRESENCE_PENALTY: &str = "ai.presence_penalty";

// Path: model/attributes/ai/ai__prompt_tokens__used.json
/// The number of tokens used to process just the prompt.
#[deprecated(note = "Use gen_ai.usage.input_tokens instead.")]
pub const AI_PROMPT_TOKENS_USED: &str = "ai.prompt_tokens.used";

// Path: model/attributes/ai/ai__raw_prompting.json
/// When enabled, the user’s prompt will be sent to the model without any pre-processing.
#[deprecated]
pub const AI_RAW_PROMPTING: &str = "ai.raw_prompting";

// Path: model/attributes/ai/ai__responses.json
/// The response messages sent back by the AI model.
#[deprecated(note = "Use gen_ai.output.messages instead.")]
pub const AI_RESPONSES: &str = "ai.responses";

// Path: model/attributes/ai/ai__response_format.json
/// For an AI model call, the format of the response
#[deprecated]
pub const AI_RESPONSE_FORMAT: &str = "ai.response_format";

// Path: model/attributes/ai/ai__search_queries.json
/// Queries used to search for relevant context or documents.
#[deprecated]
pub const AI_SEARCH_QUERIES: &str = "ai.search_queries";

// Path: model/attributes/ai/ai__search_results.json
/// Results returned from search queries for context.
#[deprecated]
pub const AI_SEARCH_RESULTS: &str = "ai.search_results";

// Path: model/attributes/ai/ai__seed.json
/// The seed, ideally models given the same seed and same other parameters will produce the exact same output.
#[deprecated(note = "Use gen_ai.request.seed instead.")]
pub const AI_SEED: &str = "ai.seed";

// Path: model/attributes/ai/ai__streaming.json
/// Whether the request was streamed back.
#[deprecated(note = "Use gen_ai.response.streaming instead.")]
pub const AI_STREAMING: &str = "ai.streaming";

// Path: model/attributes/ai/ai__tags.json
/// Tags that describe an AI pipeline step.
#[deprecated]
pub const AI_TAGS: &str = "ai.tags";

// Path: model/attributes/ai/ai__temperature.json
/// For an AI model call, the temperature parameter. Temperature essentially means how random the output will be.
#[deprecated(note = "Use gen_ai.request.temperature instead.")]
pub const AI_TEMPERATURE: &str = "ai.temperature";

// Path: model/attributes/ai/ai__texts.json
/// Raw text inputs provided to the model.
#[deprecated(note = "Use gen_ai.input.messages instead.")]
pub const AI_TEXTS: &str = "ai.texts";

// Path: model/attributes/ai/ai__tools.json
/// For an AI model call, the functions that are available
#[deprecated(note = "Use gen_ai.tool.definitions instead.")]
pub const AI_TOOLS: &str = "ai.tools";

// Path: model/attributes/ai/ai__tool_calls.json
/// For an AI model call, the tool calls that were made.
#[deprecated(note = "Use gen_ai.output.messages instead.")]
pub const AI_TOOL_CALLS: &str = "ai.tool_calls";

// Path: model/attributes/ai/ai__top_k.json
/// Limits the model to only consider the K most likely next tokens, where K is an integer (e.g., top_k=20 means only the 20 highest probability tokens are considered).
#[deprecated(note = "Use gen_ai.request.top_k instead.")]
pub const AI_TOP_K: &str = "ai.top_k";

// Path: model/attributes/ai/ai__top_p.json
/// Limits the model to only consider tokens whose cumulative probability mass adds up to p, where p is a float between 0 and 1 (e.g., top_p=0.7 means only tokens that sum up to 70% of the probability mass are considered).
#[deprecated(note = "Use gen_ai.request.top_p instead.")]
pub const AI_TOP_P: &str = "ai.top_p";

// Path: model/attributes/ai/ai__total_cost.json
/// The total cost for the tokens used.
#[deprecated(note = "Use gen_ai.cost.total_tokens instead.")]
pub const AI_TOTAL_COST: &str = "ai.total_cost";

// Path: model/attributes/ai/ai__total_tokens__used.json
/// The total number of tokens used to process the prompt.
#[deprecated(note = "Use gen_ai.usage.total_tokens instead.")]
pub const AI_TOTAL_TOKENS_USED: &str = "ai.total_tokens.used";

// Path: model/attributes/ai/ai__warnings.json
/// Warning messages generated during model execution.
#[deprecated]
pub const AI_WARNINGS: &str = "ai.warnings";

// Path: model/attributes/angular/angular__version.json
/// The version of the Angular framework
pub const ANGULAR_VERSION: &str = "angular.version";

// Path: model/attributes/app/app__app_build.json
/// Internal build identifier, as it appears on the platform.
#[deprecated(note = "Use app.build instead.")]
pub const APP_APP_BUILD: &str = "app.app_build";

// Path: model/attributes/app/app__app_identifier.json
/// Version-independent application identifier, often a dotted bundle ID.
#[deprecated(note = "Use app.identifier instead.")]
pub const APP_APP_IDENTIFIER: &str = "app.app_identifier";

// Path: model/attributes/app/app__app_name.json
/// Human readable application name, as it appears on the platform.
#[deprecated(note = "Use app.name instead.")]
pub const APP_APP_NAME: &str = "app.app_name";

// Path: model/attributes/app/app__app_start_time.json
/// Formatted UTC timestamp when the user started the application.
#[deprecated(note = "Use app.start_time instead.")]
pub const APP_APP_START_TIME: &str = "app.app_start_time";

// Path: model/attributes/app/app__app_version.json
/// Human readable application version, as it appears on the platform.
#[deprecated(note = "Use app.version instead.")]
pub const APP_APP_VERSION: &str = "app.app_version";

// Path: model/attributes/app/app__build.json
/// Internal build identifier, as it appears on the platform.
pub const APP_BUILD: &str = "app.build";

// Path: model/attributes/app/app__identifier.json
/// Version-independent application identifier, often a dotted bundle ID.
pub const APP_IDENTIFIER: &str = "app.identifier";

// Path: model/attributes/app/app__in_foreground.json
/// Whether the application is currently in the foreground.
pub const APP_IN_FOREGROUND: &str = "app.in_foreground";

// Path: model/attributes/app/app__name.json
/// Human readable application name, as it appears on the platform.
pub const APP_NAME: &str = "app.name";

// Path: model/attributes/app_start_cold.json
/// The duration of a cold app start in milliseconds
#[deprecated(note = "Use app.vitals.start.cold.value instead.")]
pub const APP_START_COLD: &str = "app_start_cold";

// Path: model/attributes/app/app__start_time.json
/// Formatted UTC timestamp when the user started the application.
pub const APP_START_TIME: &str = "app.start_time";

// Path: model/attributes/app_start_type.json
/// Mobile app start variant. Either cold or warm.
#[deprecated(note = "Use app.vitals.start.type instead.")]
pub const APP_START_TYPE: &str = "app_start_type";

// Path: model/attributes/app_start_warm.json
/// The duration of a warm app start in milliseconds
#[deprecated(note = "Use app.vitals.start.warm.value instead.")]
pub const APP_START_WARM: &str = "app_start_warm";

// Path: model/attributes/app/app__version.json
/// Human readable application version, as it appears on the platform.
pub const APP_VERSION: &str = "app.version";

// Path: model/attributes/app/app__vitals__frames__delay__value.json
/// The sum of all delayed frame durations in seconds during the lifetime of the span. For more information see [frames delay](https://develop.sentry.dev/sdk/performance/frames-delay/).
pub const APP_VITALS_FRAMES_DELAY_VALUE: &str = "app.vitals.frames.delay.value";

// Path: model/attributes/app/app__vitals__frames__frozen__count.json
/// The number of frozen frames rendered during the lifetime of the span.
pub const APP_VITALS_FRAMES_FROZEN_COUNT: &str = "app.vitals.frames.frozen.count";

// Path: model/attributes/app/app__vitals__frames__slow__count.json
/// The number of slow frames rendered during the lifetime of the span.
pub const APP_VITALS_FRAMES_SLOW_COUNT: &str = "app.vitals.frames.slow.count";

// Path: model/attributes/app/app__vitals__frames__total__count.json
/// The number of total frames rendered during the lifetime of the span.
pub const APP_VITALS_FRAMES_TOTAL_COUNT: &str = "app.vitals.frames.total.count";

// Path: model/attributes/app/app__vitals__start__cold__value.json
/// The duration of a cold app start in milliseconds
pub const APP_VITALS_START_COLD_VALUE: &str = "app.vitals.start.cold.value";

// Path: model/attributes/app/app__vitals__start__prewarmed.json
/// Whether the app start was prewarmed.
pub const APP_VITALS_START_PREWARMED: &str = "app.vitals.start.prewarmed";

// Path: model/attributes/app/app__vitals__start__reason.json
/// The reason that triggered the app start.
pub const APP_VITALS_START_REASON: &str = "app.vitals.start.reason";

// Path: model/attributes/app/app__vitals__start__screen.json
/// The screen that is rendered when the app start is complete. This is the screen the user first sees and can interact with after launch. The absence of this attribute on the app start span indicates a background app start where no UI was rendered.
pub const APP_VITALS_START_SCREEN: &str = "app.vitals.start.screen";

// Path: model/attributes/app/app__vitals__start__type.json
/// The type of app start, for example `cold` or `warm`
pub const APP_VITALS_START_TYPE: &str = "app.vitals.start.type";

// Path: model/attributes/app/app__vitals__start__warm__value.json
/// The duration of a warm app start in milliseconds
pub const APP_VITALS_START_WARM_VALUE: &str = "app.vitals.start.warm.value";

// Path: model/attributes/app/app__vitals__ttfd__value.json
/// The duration of time to full display in milliseconds
pub const APP_VITALS_TTFD_VALUE: &str = "app.vitals.ttfd.value";

// Path: model/attributes/app/app__vitals__ttid__value.json
/// The duration of time to initial display in milliseconds
pub const APP_VITALS_TTID_VALUE: &str = "app.vitals.ttid.value";

// Path: model/attributes/art/art__gc__blocking_count.json
/// Total number of blocking (stop-the-world) garbage collections performed by the Android Runtime
pub const ART_GC_BLOCKING_COUNT: &str = "art.gc.blocking_count";

// Path: model/attributes/art/art__gc__blocking_time.json
/// Total time spent in blocking (stop-the-world) garbage collections by the Android Runtime, in milliseconds
pub const ART_GC_BLOCKING_TIME: &str = "art.gc.blocking_time";

// Path: model/attributes/art/art__gc__pre_oome_count.json
/// Total number of garbage collections triggered as a last resort before an OutOfMemoryError by the Android Runtime
pub const ART_GC_PRE_OOME_COUNT: &str = "art.gc.pre_oome_count";

// Path: model/attributes/art/art__gc__total_count.json
/// Total number of garbage collections performed by the Android Runtime
pub const ART_GC_TOTAL_COUNT: &str = "art.gc.total_count";

// Path: model/attributes/art/art__gc__total_time.json
/// Total time spent in garbage collection by the Android Runtime, in milliseconds
pub const ART_GC_TOTAL_TIME: &str = "art.gc.total_time";

// Path: model/attributes/art/art__gc__waiting_time.json
/// Total time threads spent waiting for garbage collection to complete in the Android Runtime, in milliseconds
pub const ART_GC_WAITING_TIME: &str = "art.gc.waiting_time";

// Path: model/attributes/art/art__memory__free.json
/// Free memory available to the process as reported by the Android Runtime, in bytes
pub const ART_MEMORY_FREE: &str = "art.memory.free";

// Path: model/attributes/art/art__memory__free_until_gc.json
/// Free memory available before a garbage collection would be triggered by the Android Runtime, in bytes
pub const ART_MEMORY_FREE_UNTIL_GC: &str = "art.memory.free_until_gc";

// Path: model/attributes/art/art__memory__free_until_oome.json
/// Free memory available before an OutOfMemoryError would be thrown by the Android Runtime, in bytes
pub const ART_MEMORY_FREE_UNTIL_OOME: &str = "art.memory.free_until_oome";

// Path: model/attributes/art/art__memory__max.json
/// Maximum memory the process is allowed to use as reported by the Android Runtime, in bytes
pub const ART_MEMORY_MAX: &str = "art.memory.max";

// Path: model/attributes/art/art__memory__total.json
/// Total memory currently allocated to the process by the Android Runtime, in bytes
pub const ART_MEMORY_TOTAL: &str = "art.memory.total";

// Path: model/attributes/aws/aws__cloudwatch__logs__log_group.json
/// The name of the CloudWatch Logs log group
pub const AWS_CLOUDWATCH_LOGS_LOG_GROUP: &str = "aws.cloudwatch.logs.log_group";

// Path: model/attributes/aws/aws__cloudwatch__logs__log_stream.json
/// The name of the CloudWatch Logs log stream
pub const AWS_CLOUDWATCH_LOGS_LOG_STREAM: &str = "aws.cloudwatch.logs.log_stream";

// Path: model/attributes/aws/aws__cloudwatch__logs__url.json
/// The URL to the CloudWatch Logs log group
pub const AWS_CLOUDWATCH_LOGS_URL: &str = "aws.cloudwatch.logs.url";

// Path: model/attributes/aws/aws__lambda__aws_request_id.json
/// The AWS request ID as received by the Lambda function runtime
#[deprecated(note = "Use faas.invocation_id instead.")]
pub const AWS_LAMBDA_AWS_REQUEST_ID: &str = "aws.lambda.aws_request_id";

// Path: model/attributes/aws/aws__lambda__execution_duration_in_millis.json
/// The execution duration of the Lambda function invocation in milliseconds
pub const AWS_LAMBDA_EXECUTION_DURATION_IN_MILLIS: &str = "aws.lambda.execution_duration_in_millis";

// Path: model/attributes/aws/aws__lambda__function_name.json
/// The name of the Lambda function
#[deprecated(note = "Use faas.name instead.")]
pub const AWS_LAMBDA_FUNCTION_NAME: &str = "aws.lambda.function_name";

// Path: model/attributes/aws/aws__lambda__function_version.json
/// The version of the Lambda function
#[deprecated(note = "Use faas.version instead.")]
pub const AWS_LAMBDA_FUNCTION_VERSION: &str = "aws.lambda.function_version";

// Path: model/attributes/aws/aws__lambda__invoked_arn.json
/// The full ARN of the Lambda function that was invoked
pub const AWS_LAMBDA_INVOKED_ARN: &str = "aws.lambda.invoked_arn";

// Path: model/attributes/aws/aws__lambda__invoked_function_arn.json
/// The full ARN of the Lambda function that was invoked
#[deprecated(note = "Use aws.lambda.invoked_arn instead.")]
pub const AWS_LAMBDA_INVOKED_FUNCTION_ARN: &str = "aws.lambda.invoked_function_arn";

// Path: model/attributes/aws/aws__lambda__remaining_time_in_millis.json
/// The remaining time in milliseconds before the Lambda function times out
pub const AWS_LAMBDA_REMAINING_TIME_IN_MILLIS: &str = "aws.lambda.remaining_time_in_millis";

// Path: model/attributes/aws/aws__log__group__names.json
/// The name(s) of the AWS log group(s) an application is writing to.
pub const AWS_LOG_GROUP_NAMES: &str = "aws.log.group.names";

// Path: model/attributes/aws/aws__log__stream__names.json
/// The name(s) of the AWS log stream(s) an application is writing to.
pub const AWS_LOG_STREAM_NAMES: &str = "aws.log.stream.names";

// Path: model/attributes/blocked_main_thread.json
/// Whether the main thread was blocked by the span.
pub const BLOCKED_MAIN_THREAD: &str = "blocked_main_thread";

// Path: model/attributes/browser/browser__name.json
/// The name of the browser.
pub const BROWSER_NAME: &str = "browser.name";

// Path: model/attributes/browser/browser__performance__navigation__activation_start.json
/// The time between initiating a navigation to a page and the browser activating the page
pub const BROWSER_PERFORMANCE_NAVIGATION_ACTIVATION_START: &str =
    "browser.performance.navigation.activation_start";

// Path: model/attributes/browser/browser__performance__time_origin.json
/// The browser's performance.timeOrigin timestamp representing the time when the pageload was initiated
pub const BROWSER_PERFORMANCE_TIME_ORIGIN: &str = "browser.performance.time_origin";

// Path: model/attributes/browser/browser__report__type.json
/// A browser report sent via reporting API..
pub const BROWSER_REPORT_TYPE: &str = "browser.report.type";

// Path: model/attributes/browser/browser__script__invoker.json
/// How a script was called in the browser.
pub const BROWSER_SCRIPT_INVOKER: &str = "browser.script.invoker";

// Path: model/attributes/browser/browser__script__invoker_type.json
/// Browser script entry point type.
pub const BROWSER_SCRIPT_INVOKER_TYPE: &str = "browser.script.invoker_type";

// Path: model/attributes/browser/browser__script__source_char_position.json
/// A number representing the script character position of the script.
pub const BROWSER_SCRIPT_SOURCE_CHAR_POSITION: &str = "browser.script.source_char_position";

// Path: model/attributes/browser/browser__version.json
/// The version of the browser.
pub const BROWSER_VERSION: &str = "browser.version";

// Path: model/attributes/browser/browser__web_vital__cls__report_event.json
/// The event that caused the SDK to report CLS (pagehide or navigation)
pub const BROWSER_WEB_VITAL_CLS_REPORT_EVENT: &str = "browser.web_vital.cls.report_event";

// Path: model/attributes/browser/browser__web_vital__cls__source__[key].json
/// The HTML elements or components responsible for the layout shift. <key> is a numeric index from 1 to N
pub const BROWSER_WEB_VITAL_CLS_SOURCE_KEY: &str = "browser.web_vital.cls.source.<key>";

// Path: model/attributes/browser/browser__web_vital__cls__value.json
/// The value of the recorded Cumulative Layout Shift (CLS) web vital
pub const BROWSER_WEB_VITAL_CLS_VALUE: &str = "browser.web_vital.cls.value";

// Path: model/attributes/browser/browser__web_vital__fcp__value.json
/// The time it takes for the browser to render the first piece of meaningful content on the screen
pub const BROWSER_WEB_VITAL_FCP_VALUE: &str = "browser.web_vital.fcp.value";

// Path: model/attributes/browser/browser__web_vital__fp__value.json
/// The time in milliseconds it takes for the browser to render the first pixel on the screen
pub const BROWSER_WEB_VITAL_FP_VALUE: &str = "browser.web_vital.fp.value";

// Path: model/attributes/browser/browser__web_vital__inp__value.json
/// The value of the recorded Interaction to Next Paint (INP) web vital
pub const BROWSER_WEB_VITAL_INP_VALUE: &str = "browser.web_vital.inp.value";

// Path: model/attributes/browser/browser__web_vital__lcp__element.json
/// The HTML element selector or component name for which LCP was reported
pub const BROWSER_WEB_VITAL_LCP_ELEMENT: &str = "browser.web_vital.lcp.element";

// Path: model/attributes/browser/browser__web_vital__lcp__id.json
/// The id of the dom element responsible for the largest contentful paint
pub const BROWSER_WEB_VITAL_LCP_ID: &str = "browser.web_vital.lcp.id";

// Path: model/attributes/browser/browser__web_vital__lcp__load_time.json
/// The time it took for the LCP element to be loaded
pub const BROWSER_WEB_VITAL_LCP_LOAD_TIME: &str = "browser.web_vital.lcp.load_time";

// Path: model/attributes/browser/browser__web_vital__lcp__render_time.json
/// The time it took for the LCP element to be rendered
pub const BROWSER_WEB_VITAL_LCP_RENDER_TIME: &str = "browser.web_vital.lcp.render_time";

// Path: model/attributes/browser/browser__web_vital__lcp__report_event.json
/// The event that caused the SDK to report LCP (pagehide or navigation)
pub const BROWSER_WEB_VITAL_LCP_REPORT_EVENT: &str = "browser.web_vital.lcp.report_event";

// Path: model/attributes/browser/browser__web_vital__lcp__size.json
/// The size of the largest contentful paint element
pub const BROWSER_WEB_VITAL_LCP_SIZE: &str = "browser.web_vital.lcp.size";

// Path: model/attributes/browser/browser__web_vital__lcp__url.json
/// The url of the dom element responsible for the largest contentful paint
pub const BROWSER_WEB_VITAL_LCP_URL: &str = "browser.web_vital.lcp.url";

// Path: model/attributes/browser/browser__web_vital__lcp__value.json
/// The value of the recorded Largest Contentful Paint (LCP) web vital
pub const BROWSER_WEB_VITAL_LCP_VALUE: &str = "browser.web_vital.lcp.value";

// Path: model/attributes/browser/browser__web_vital__ttfb__request_time.json
/// The time it takes for the server to process the initial request and send the first byte of a response to the user's browser
pub const BROWSER_WEB_VITAL_TTFB_REQUEST_TIME: &str = "browser.web_vital.ttfb.request_time";

// Path: model/attributes/browser/browser__web_vital__ttfb__value.json
/// The value of the recorded Time To First Byte (TTFB) web vital in Milliseconds
pub const BROWSER_WEB_VITAL_TTFB_VALUE: &str = "browser.web_vital.ttfb.value";

// Path: model/attributes/cache/cache__hit.json
/// If the cache was hit during this span.
pub const CACHE_HIT: &str = "cache.hit";

// Path: model/attributes/cache/cache__item_size.json
/// The size of the requested item in the cache. In bytes.
pub const CACHE_ITEM_SIZE: &str = "cache.item_size";

// Path: model/attributes/cache/cache__key.json
/// The key of the cache accessed.
pub const CACHE_KEY: &str = "cache.key";

// Path: model/attributes/cache/cache__operation.json
/// The operation being performed on the cache.
pub const CACHE_OPERATION: &str = "cache.operation";

// Path: model/attributes/cache/cache__ttl.json
/// The ttl of the cache in seconds
pub const CACHE_TTL: &str = "cache.ttl";

// Path: model/attributes/cache/cache__write.json
/// If the cache operation resulted in a write to the cache.
pub const CACHE_WRITE: &str = "cache.write";

// Path: model/attributes/channel.json
/// The channel name that is being used.
pub const CHANNEL: &str = "channel";

// Path: model/attributes/client/client__address.json
/// Client address - domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.
pub const CLIENT_ADDRESS: &str = "client.address";

// Path: model/attributes/client/client__port.json
/// Client port number.
pub const CLIENT_PORT: &str = "client.port";

// Path: model/attributes/cloudflare/cloudflare__d1__duration.json
/// The duration of a Cloudflare D1 operation.
pub const CLOUDFLARE_D1_DURATION: &str = "cloudflare.d1.duration";

// Path: model/attributes/cloudflare/cloudflare__d1__query_type.json
/// The type of query executed in a Cloudflare D1 operation
#[deprecated(note = "Use db.operation.name instead.")]
pub const CLOUDFLARE_D1_QUERY_TYPE: &str = "cloudflare.d1.query_type";

// Path: model/attributes/cloudflare/cloudflare__d1__rows_read.json
/// The number of rows read in a Cloudflare D1 operation.
pub const CLOUDFLARE_D1_ROWS_READ: &str = "cloudflare.d1.rows_read";

// Path: model/attributes/cloudflare/cloudflare__d1__rows_written.json
/// The number of rows written in a Cloudflare D1 operation.
pub const CLOUDFLARE_D1_ROWS_WRITTEN: &str = "cloudflare.d1.rows_written";

// Path: model/attributes/cloudflare/cloudflare__durable_object__query__bindings.json
/// The number of bound parameters passed to the SQL exec call.
pub const CLOUDFLARE_DURABLE_OBJECT_QUERY_BINDINGS: &str =
    "cloudflare.durable_object.query.bindings";

// Path: model/attributes/cloudflare/cloudflare__durable_object__response__rows_read.json
/// The number of rows read by a Cloudflare Durable Object SQL operation.
pub const CLOUDFLARE_DURABLE_OBJECT_RESPONSE_ROWS_READ: &str =
    "cloudflare.durable_object.response.rows_read";

// Path: model/attributes/cloudflare/cloudflare__durable_object__response__rows_written.json
/// The number of rows written by a Cloudflare Durable Object SQL operation.
pub const CLOUDFLARE_DURABLE_OBJECT_RESPONSE_ROWS_WRITTEN: &str =
    "cloudflare.durable_object.response.rows_written";

// Path: model/attributes/cloudflare/cloudflare__r2__bucket.json
/// The name of the Cloudflare R2 bucket binding
pub const CLOUDFLARE_R2_BUCKET: &str = "cloudflare.r2.bucket";

// Path: model/attributes/cloudflare/cloudflare__r2__operation.json
/// The R2 API operation being performed
pub const CLOUDFLARE_R2_OPERATION: &str = "cloudflare.r2.operation";

// Path: model/attributes/cloudflare/cloudflare__r2__request__delimiter.json
/// The delimiter used to group objects in an R2 list operation
pub const CLOUDFLARE_R2_REQUEST_DELIMITER: &str = "cloudflare.r2.request.delimiter";

// Path: model/attributes/cloudflare/cloudflare__r2__request__key.json
/// The object key used in the R2 operation
pub const CLOUDFLARE_R2_REQUEST_KEY: &str = "cloudflare.r2.request.key";

// Path: model/attributes/cloudflare/cloudflare__r2__request__part_number.json
/// The part number in a multipart upload operation
pub const CLOUDFLARE_R2_REQUEST_PART_NUMBER: &str = "cloudflare.r2.request.part_number";

// Path: model/attributes/cloudflare/cloudflare__r2__request__prefix.json
/// The prefix used to filter objects in an R2 list operation
pub const CLOUDFLARE_R2_REQUEST_PREFIX: &str = "cloudflare.r2.request.prefix";

// Path: model/attributes/cloudflare/cloudflare__workflow__attempt.json
/// The current attempt number for a Cloudflare Workflow step
pub const CLOUDFLARE_WORKFLOW_ATTEMPT: &str = "cloudflare.workflow.attempt";

// Path: model/attributes/cloudflare/cloudflare__workflow__retries__backoff.json
/// The backoff strategy for Cloudflare Workflow step retries
pub const CLOUDFLARE_WORKFLOW_RETRIES_BACKOFF: &str = "cloudflare.workflow.retries.backoff";

// Path: model/attributes/cloudflare/cloudflare__workflow__retries__delay.json
/// The delay between Cloudflare Workflow step retries
pub const CLOUDFLARE_WORKFLOW_RETRIES_DELAY: &str = "cloudflare.workflow.retries.delay";

// Path: model/attributes/cloudflare/cloudflare__workflow__retries__limit.json
/// The maximum number of retries for a Cloudflare Workflow step
pub const CLOUDFLARE_WORKFLOW_RETRIES_LIMIT: &str = "cloudflare.workflow.retries.limit";

// Path: model/attributes/cloudflare/cloudflare__workflow__timeout.json
/// The timeout duration for a Cloudflare Workflow step
pub const CLOUDFLARE_WORKFLOW_TIMEOUT: &str = "cloudflare.workflow.timeout";

// Path: model/attributes/cloud/cloud__account__id.json
/// The cloud account ID the resource is assigned to
pub const CLOUD_ACCOUNT_ID: &str = "cloud.account.id";

// Path: model/attributes/cloud/cloud__availability_zone.json
/// Cloud regions often have multiple, isolated locations known as zones to increase availability
pub const CLOUD_AVAILABILITY_ZONE: &str = "cloud.availability_zone";

// Path: model/attributes/cloud/cloud__platform.json
/// The cloud platform in use
pub const CLOUD_PLATFORM: &str = "cloud.platform";

// Path: model/attributes/cloud/cloud__provider.json
/// Name of the cloud provider
pub const CLOUD_PROVIDER: &str = "cloud.provider";

// Path: model/attributes/cloud/cloud__region.json
/// The geographical region the resource is running
pub const CLOUD_REGION: &str = "cloud.region";

// Path: model/attributes/cloud/cloud__resource_id.json
/// Cloud provider-specific native identifier of the monitored cloud resource
pub const CLOUD_RESOURCE_ID: &str = "cloud.resource_id";

// Path: model/attributes/cls.json
/// The value of the recorded Cumulative Layout Shift (CLS) web vital
#[deprecated(note = "Use browser.web_vital.cls.value instead.")]
pub const CLS: &str = "cls";

// Path: model/attributes/cls/cls__source__[key].json
/// The HTML elements or components responsible for the layout shift. <key> is a numeric index from 1 to N
#[deprecated(note = "Use browser.web_vital.cls.source.<key> instead.")]
pub const CLS_SOURCE_KEY: &str = "cls.source.<key>";

// Path: model/attributes/code/code__filepath.json
/// The source code file name that identifies the code unit as uniquely as possible (preferably an absolute file path).
#[deprecated(note = "Use code.file.path instead.")]
pub const CODE_FILEPATH: &str = "code.filepath";

// Path: model/attributes/code/code__file__path.json
/// The source code file name that identifies the code unit as uniquely as possible (preferably an absolute file path).
pub const CODE_FILE_PATH: &str = "code.file.path";

// Path: model/attributes/code/code__function.json
/// The method or function name, or equivalent (usually rightmost part of the code unit's name).
pub const CODE_FUNCTION: &str = "code.function";

// Path: model/attributes/code/code__function__name.json
/// The method or function fully-qualified name without arguments.
pub const CODE_FUNCTION_NAME: &str = "code.function.name";

// Path: model/attributes/code/code__lineno.json
/// The line number in code.filepath best representing the operation. It SHOULD point within the code unit named in code.function
#[deprecated(note = "Use code.line.number instead.")]
pub const CODE_LINENO: &str = "code.lineno";

// Path: model/attributes/code/code__line__number.json
/// The line number in code.filepath best representing the operation. It SHOULD point within the code unit named in code.function
pub const CODE_LINE_NUMBER: &str = "code.line.number";

// Path: model/attributes/code/code__namespace.json
/// The 'namespace' within which code.function is defined. Usually the qualified class or module name, such that code.namespace + some separator + code.function form a unique identifier for the code unit.
pub const CODE_NAMESPACE: &str = "code.namespace";

// Path: model/attributes/connectionType.json
/// Specifies the type of the current connection (e.g. wifi, ethernet, cellular , etc).
#[deprecated(note = "Use network.connection.type instead.")]
pub const CONNECTIONTYPE: &str = "connectionType";

// Path: model/attributes/connection/connection__rtt.json
/// Specifies the estimated effective round-trip time of the current connection, in milliseconds.
#[deprecated(note = "Use network.connection.rtt instead.")]
pub const CONNECTION_RTT: &str = "connection.rtt";

// Path: model/attributes/culture/culture__calendar.json
/// The calendar system used by the culture.
pub const CULTURE_CALENDAR: &str = "culture.calendar";

// Path: model/attributes/culture/culture__display_name.json
/// Human readable name of the culture.
pub const CULTURE_DISPLAY_NAME: &str = "culture.display_name";

// Path: model/attributes/culture/culture__is_24_hour_format.json
/// Whether the culture uses 24-hour time format.
pub const CULTURE_IS_24_HOUR_FORMAT: &str = "culture.is_24_hour_format";

// Path: model/attributes/culture/culture__locale.json
/// The locale identifier following RFC 4646.
pub const CULTURE_LOCALE: &str = "culture.locale";

// Path: model/attributes/culture/culture__timezone.json
/// The timezone of the culture, as a geographic timezone identifier.
pub const CULTURE_TIMEZONE: &str = "culture.timezone";

// Path: model/attributes/db/db__collection__name.json
/// The name of a collection (table, container) within the database.
pub const DB_COLLECTION_NAME: &str = "db.collection.name";

// Path: model/attributes/db/db__driver__name.json
/// The name of the driver used for the database connection.
pub const DB_DRIVER_NAME: &str = "db.driver.name";

// Path: model/attributes/db/db__name.json
/// The name of the database being accessed.
#[deprecated(note = "Use db.namespace instead.")]
pub const DB_NAME: &str = "db.name";

// Path: model/attributes/db/db__namespace.json
/// The name of the database being accessed.
pub const DB_NAMESPACE: &str = "db.namespace";

// Path: model/attributes/db/db__operation.json
/// The name of the operation being executed.
#[deprecated(note = "Use db.operation.name instead.")]
pub const DB_OPERATION: &str = "db.operation";

// Path: model/attributes/db/db__operation__batch__size.json
/// The number of queries included in a batch operation. Operations are only considered batches when they contain two or more operations, and so db.operation.batch.size SHOULD never be 1.
pub const DB_OPERATION_BATCH_SIZE: &str = "db.operation.batch.size";

// Path: model/attributes/db/db__operation__name.json
/// The name of the operation being executed.
pub const DB_OPERATION_NAME: &str = "db.operation.name";

// Path: model/attributes/db/db__query__parameter__[key].json
/// A query parameter used in db.query.text, with <key> being the parameter name, and the attribute value being a string representation of the parameter value.
pub const DB_QUERY_PARAMETER_KEY: &str = "db.query.parameter.<key>";

// Path: model/attributes/db/db__query__summary.json
/// A shortened representation of operation(s) in the full query. This attribute must be low-cardinality and should only contain the operation table names.
pub const DB_QUERY_SUMMARY: &str = "db.query.summary";

// Path: model/attributes/db/db__query__text.json
/// The database parameterized query being executed. Any parameter values (filters, insertion values, etc) should be replaced with parameter placeholders. If applicable, use `db.query.parameter.<key>` to add the parameter value.
pub const DB_QUERY_TEXT: &str = "db.query.text";

// Path: model/attributes/db/db__redis__connection.json
/// The redis connection name.
pub const DB_REDIS_CONNECTION: &str = "db.redis.connection";

// Path: model/attributes/db/db__redis__key.json
/// The key the Redis command is operating on.
pub const DB_REDIS_KEY: &str = "db.redis.key";

// Path: model/attributes/db/db__redis__parameters.json
/// The array of command parameters given to a redis command.
pub const DB_REDIS_PARAMETERS: &str = "db.redis.parameters";

// Path: model/attributes/db/db__sql__bindings.json
/// The array of query bindings.
#[deprecated(note = "Use db.query.parameter.<key> instead.")]
pub const DB_SQL_BINDINGS: &str = "db.sql.bindings";

// Path: model/attributes/db/db__statement.json
/// The database statement being executed.
#[deprecated(note = "Use db.query.text instead.")]
pub const DB_STATEMENT: &str = "db.statement";

// Path: model/attributes/db/db__stored_procedure__name.json
/// The name of a stored procedure being called.
pub const DB_STORED_PROCEDURE_NAME: &str = "db.stored_procedure.name";

// Path: model/attributes/db/db__system.json
/// An identifier for the database management system (DBMS) product being used. See [OpenTelemetry docs](https://github.com/open-telemetry/semantic-conventions/blob/main/docs/database/database-spans.md#notes-and-well-known-identifiers-for-dbsystem) for a list of well-known identifiers.
#[deprecated(note = "Use db.system.name instead.")]
pub const DB_SYSTEM: &str = "db.system";

// Path: model/attributes/db/db__system__name.json
/// An identifier for the database management system (DBMS) product being used. See [OpenTelemetry docs](https://github.com/open-telemetry/semantic-conventions/blob/main/docs/database/database-spans.md#notes-and-well-known-identifiers-for-dbsystem) for a list of well-known identifiers.
pub const DB_SYSTEM_NAME: &str = "db.system.name";

// Path: model/attributes/db/db__user.json
/// The database user.
pub const DB_USER: &str = "db.user";

// Path: model/attributes/deviceMemory.json
/// The estimated total memory capacity of the device, only a rough estimation in gigabytes.
#[deprecated(note = "Use device.memory.estimated_capacity instead.")]
pub const DEVICEMEMORY: &str = "deviceMemory";

// Path: model/attributes/device/device__archs.json
/// The CPU architectures of the device.
pub const DEVICE_ARCHS: &str = "device.archs";

// Path: model/attributes/device/device__battery_level.json
/// The battery level of the device as a percentage (0-100).
pub const DEVICE_BATTERY_LEVEL: &str = "device.battery_level";

// Path: model/attributes/device/device__battery_temperature.json
/// The battery temperature of the device in Celsius.
pub const DEVICE_BATTERY_TEMPERATURE: &str = "device.battery_temperature";

// Path: model/attributes/device/device__boot_time.json
/// A formatted UTC timestamp when the system was booted.
pub const DEVICE_BOOT_TIME: &str = "device.boot_time";

// Path: model/attributes/device/device__brand.json
/// The brand of the device.
pub const DEVICE_BRAND: &str = "device.brand";

// Path: model/attributes/device/device__charging.json
/// Whether the device was charging or not.
pub const DEVICE_CHARGING: &str = "device.charging";

// Path: model/attributes/device/device__chipset.json
/// The chipset of the device.
pub const DEVICE_CHIPSET: &str = "device.chipset";

// Path: model/attributes/device/device__class.json
/// The classification of the device. For example, `low`, `medium`, or `high`. Typically inferred by Relay - SDKs generally do not need to set this directly.
pub const DEVICE_CLASS: &str = "device.class";

// Path: model/attributes/device/device__connection_type.json
/// The internet connection type currently being used by the device.
#[deprecated(note = "Use network.connection.type instead.")]
pub const DEVICE_CONNECTION_TYPE: &str = "device.connection_type";

// Path: model/attributes/device/device__cpu_description.json
/// A description of the CPU of the device.
pub const DEVICE_CPU_DESCRIPTION: &str = "device.cpu_description";

// Path: model/attributes/device/device__external_free_storage.json
/// External storage free size in bytes.
pub const DEVICE_EXTERNAL_FREE_STORAGE: &str = "device.external_free_storage";

// Path: model/attributes/device/device__external_storage_size.json
/// External storage total size in bytes.
pub const DEVICE_EXTERNAL_STORAGE_SIZE: &str = "device.external_storage_size";

// Path: model/attributes/device/device__family.json
/// The family of the device.
pub const DEVICE_FAMILY: &str = "device.family";

// Path: model/attributes/device/device__free_memory.json
/// Free system memory in bytes.
pub const DEVICE_FREE_MEMORY: &str = "device.free_memory";

// Path: model/attributes/device/device__free_storage.json
/// Free device storage in bytes.
pub const DEVICE_FREE_STORAGE: &str = "device.free_storage";

// Path: model/attributes/device/device__id.json
/// Unique device identifier.
pub const DEVICE_ID: &str = "device.id";

// Path: model/attributes/device/device__locale.json
/// The locale of the device.
pub const DEVICE_LOCALE: &str = "device.locale";

// Path: model/attributes/device/device__low_memory.json
/// Whether the device was low on memory.
pub const DEVICE_LOW_MEMORY: &str = "device.low_memory";

// Path: model/attributes/device/device__low_power_mode.json
/// Whether the device is in Low Power Mode.
pub const DEVICE_LOW_POWER_MODE: &str = "device.low_power_mode";

// Path: model/attributes/device/device__manufacturer.json
/// The manufacturer of the device.
pub const DEVICE_MANUFACTURER: &str = "device.manufacturer";

// Path: model/attributes/device/device__memory__estimated_capacity.json
/// The estimated total memory capacity of the device, only a rough estimation in gigabytes. Browsers report estimations in buckets of powers of 2, mostly capped at 8 GB
pub const DEVICE_MEMORY_ESTIMATED_CAPACITY: &str = "device.memory.estimated_capacity";

// Path: model/attributes/device/device__memory_size.json
/// Total system memory available in bytes.
pub const DEVICE_MEMORY_SIZE: &str = "device.memory_size";

// Path: model/attributes/device/device__model.json
/// The model of the device.
pub const DEVICE_MODEL: &str = "device.model";

// Path: model/attributes/device/device__model_id.json
/// An internal hardware revision to identify the device exactly.
pub const DEVICE_MODEL_ID: &str = "device.model_id";

// Path: model/attributes/device/device__name.json
/// The name of the device. On mobile, this is the user-assigned device name. On servers and desktops, this is typically the hostname.
pub const DEVICE_NAME: &str = "device.name";

// Path: model/attributes/device/device__online.json
/// Whether the device was online or not.
pub const DEVICE_ONLINE: &str = "device.online";

// Path: model/attributes/device/device__orientation.json
/// The orientation of the device, either "portrait" or "landscape".
pub const DEVICE_ORIENTATION: &str = "device.orientation";

// Path: model/attributes/device/device__processor_count.json
/// Number of "logical processors".
pub const DEVICE_PROCESSOR_COUNT: &str = "device.processor_count";

// Path: model/attributes/device/device__processor_frequency.json
/// Processor frequency in MHz.
pub const DEVICE_PROCESSOR_FREQUENCY: &str = "device.processor_frequency";

// Path: model/attributes/device/device__screen_density.json
/// The screen density of the device.
pub const DEVICE_SCREEN_DENSITY: &str = "device.screen_density";

// Path: model/attributes/device/device__screen_dpi.json
/// The screen density in dots-per-inch (DPI) of the device.
pub const DEVICE_SCREEN_DPI: &str = "device.screen_dpi";

// Path: model/attributes/device/device__screen_height_pixels.json
/// The height of the device screen in pixels.
pub const DEVICE_SCREEN_HEIGHT_PIXELS: &str = "device.screen_height_pixels";

// Path: model/attributes/device/device__screen_width_pixels.json
/// The width of the device screen in pixels.
pub const DEVICE_SCREEN_WIDTH_PIXELS: &str = "device.screen_width_pixels";

// Path: model/attributes/device/device__simulator.json
/// Whether the device is a simulator or an actual device.
pub const DEVICE_SIMULATOR: &str = "device.simulator";

// Path: model/attributes/device/device__storage_size.json
/// Total device storage in bytes.
pub const DEVICE_STORAGE_SIZE: &str = "device.storage_size";

// Path: model/attributes/device/device__thermal_state.json
/// The thermal state of the device. Based on Apple's `ProcessInfo.ThermalState` enum: `nominal`, `fair`, `serious`, or `critical`.
pub const DEVICE_THERMAL_STATE: &str = "device.thermal_state";

// Path: model/attributes/device/device__timezone.json
/// The timezone of the device.
pub const DEVICE_TIMEZONE: &str = "device.timezone";

// Path: model/attributes/device/device__usable_memory.json
/// Memory usable for the app in bytes.
pub const DEVICE_USABLE_MEMORY: &str = "device.usable_memory";

// Path: model/attributes/effectiveConnectionType.json
/// Specifies the estimated effective type of the current connection (e.g. slow-2g, 2g, 3g, 4g).
#[deprecated(note = "Use network.connection.effective_type instead.")]
pub const EFFECTIVECONNECTIONTYPE: &str = "effectiveConnectionType";

// Path: model/attributes/environment.json
/// The sentry environment.
#[deprecated(note = "Use sentry.environment instead.")]
pub const ENVIRONMENT: &str = "environment";

// Path: model/attributes/error/error__type.json
/// Describes a class of error the operation ended with.
pub const ERROR_TYPE: &str = "error.type";

// Path: model/attributes/event/event__id.json
/// The unique identifier for this event (log record)
pub const EVENT_ID: &str = "event.id";

// Path: model/attributes/event/event__name.json
/// The name that uniquely identifies this event (log record)
pub const EVENT_NAME: &str = "event.name";

// Path: model/attributes/exception/exception__escaped.json
/// SHOULD be set to true if the exception event is recorded at a point where it is known that the exception is escaping the scope of the span.
pub const EXCEPTION_ESCAPED: &str = "exception.escaped";

// Path: model/attributes/exception/exception__message.json
/// The error message.
pub const EXCEPTION_MESSAGE: &str = "exception.message";

// Path: model/attributes/exception/exception__stacktrace.json
/// A stacktrace as a string in the natural representation for the language runtime. The representation is to be determined and documented by each language SIG.
pub const EXCEPTION_STACKTRACE: &str = "exception.stacktrace";

// Path: model/attributes/exception/exception__type.json
/// The type of the exception (its fully-qualified class name, if applicable). The dynamic type of the exception should be preferred over the static type in languages that support it.
pub const EXCEPTION_TYPE: &str = "exception.type";

// Path: model/attributes/faas/faas__coldstart.json
/// A boolean that is true if the serverless function is executed for the first time (aka cold-start).
pub const FAAS_COLDSTART: &str = "faas.coldstart";

// Path: model/attributes/faas/faas__cron.json
/// A string containing the schedule period as Cron Expression.
pub const FAAS_CRON: &str = "faas.cron";

// Path: model/attributes/faas/faas__duration_in_ms.json
/// The duration a function took to run, in milliseconds.
pub const FAAS_DURATION_IN_MS: &str = "faas.duration_in_ms";

// Path: model/attributes/faas/faas__entry_point.json
/// The code that's run when the cloud provider invokes your function.
pub const FAAS_ENTRY_POINT: &str = "faas.entry_point";

// Path: model/attributes/faas/faas__identity.json
/// The Service Account (GCP), IAM Execution Role (AWS), or Managed Identity (Azure) used by the serverless function when interacting with other cloud services
pub const FAAS_IDENTITY: &str = "faas.identity";

// Path: model/attributes/faas/faas__invocation_id.json
/// The invocation ID of the current function invocation.
pub const FAAS_INVOCATION_ID: &str = "faas.invocation_id";

// Path: model/attributes/faas/faas__name.json
/// The name of the serverless function
pub const FAAS_NAME: &str = "faas.name";

// Path: model/attributes/faas/faas__time.json
/// A string containing the function invocation time in the ISO 8601 format expressed in UTC.
pub const FAAS_TIME: &str = "faas.time";

// Path: model/attributes/faas/faas__trigger.json
/// Type of the trigger which caused this function invocation.
pub const FAAS_TRIGGER: &str = "faas.trigger";

// Path: model/attributes/faas/faas__version.json
/// The version of the function that was invoked
pub const FAAS_VERSION: &str = "faas.version";

// Path: model/attributes/fcp.json
/// The time it takes for the browser to render the first piece of meaningful content on the screen
#[deprecated(note = "Use browser.web_vital.fcp.value instead.")]
pub const FCP: &str = "fcp";

// Path: model/attributes/flag/flag__evaluation__[key].json
/// An instance of a feature flag evaluation. The value of this attribute is the boolean representing the evaluation result. The <key> suffix is the name of the feature flag.
pub const FLAG_EVALUATION_KEY: &str = "flag.evaluation.<key>";

// Path: model/attributes/fp.json
/// The time it takes for the browser to render the first pixel on the screen
#[deprecated(note = "Use browser.web_vital.fp.value instead.")]
pub const FP: &str = "fp";

// Path: model/attributes/frames/frames__delay.json
/// The sum of all delayed frame durations in seconds during the lifetime of the span. For more information see [frames delay](https://develop.sentry.dev/sdk/performance/frames-delay/).
#[deprecated(note = "Use app.vitals.frames.delay.value instead.")]
pub const FRAMES_DELAY: &str = "frames.delay";

// Path: model/attributes/frames/frames__frozen.json
/// The number of frozen frames rendered during the lifetime of the span.
#[deprecated(note = "Use app.vitals.frames.frozen.count instead.")]
pub const FRAMES_FROZEN: &str = "frames.frozen";

// Path: model/attributes/frames_frozen_rate.json
/// The rate of frozen frames, or `app_vitals.frames.frozen.count` divided by `app_vitals.frames.total.count`. This is computed by Relay.
pub const FRAMES_FROZEN_RATE: &str = "frames_frozen_rate";

// Path: model/attributes/frames/frames__slow.json
/// The number of slow frames rendered during the lifetime of the span.
#[deprecated(note = "Use app.vitals.frames.slow.count instead.")]
pub const FRAMES_SLOW: &str = "frames.slow";

// Path: model/attributes/frames_slow_rate.json
/// The rate of slow frames, or `app_vitals.frames.slow.count` divided by `app_vitals.frames.total.count`. This is computed by Relay.
pub const FRAMES_SLOW_RATE: &str = "frames_slow_rate";

// Path: model/attributes/frames/frames__total.json
/// The number of total frames rendered during the lifetime of the span.
#[deprecated(note = "Use app.vitals.frames.total.count instead.")]
pub const FRAMES_TOTAL: &str = "frames.total";

// Path: model/attributes/fs_error.json
/// The error message of a file system error.
#[deprecated(note = "Use error.type instead.")]
pub const FS_ERROR: &str = "fs_error";

// Path: model/attributes/gcp/gcp__function__context__event_id.json
/// The event ID from the legacy GCP Cloud Function context (1st gen)
pub const GCP_FUNCTION_CONTEXT_EVENT_ID: &str = "gcp.function.context.event_id";

// Path: model/attributes/gcp/gcp__function__context__event_type.json
/// The type of the GCP Cloud Function event
pub const GCP_FUNCTION_CONTEXT_EVENT_TYPE: &str = "gcp.function.context.event_type";

// Path: model/attributes/gcp/gcp__function__context__id.json
/// The unique event ID from the GCP CloudEvents context (2nd gen Cloud Functions)
pub const GCP_FUNCTION_CONTEXT_ID: &str = "gcp.function.context.id";

// Path: model/attributes/gcp/gcp__function__context__resource.json
/// The resource that triggered the GCP Cloud Function event
pub const GCP_FUNCTION_CONTEXT_RESOURCE: &str = "gcp.function.context.resource";

// Path: model/attributes/gcp/gcp__function__context__source.json
/// The source of the GCP Cloud Function event
pub const GCP_FUNCTION_CONTEXT_SOURCE: &str = "gcp.function.context.source";

// Path: model/attributes/gcp/gcp__function__context__specversion.json
/// The CloudEvents specification version of the GCP Cloud Function event
pub const GCP_FUNCTION_CONTEXT_SPECVERSION: &str = "gcp.function.context.specversion";

// Path: model/attributes/gcp/gcp__function__context__time.json
/// The timestamp of the GCP Cloud Function event
pub const GCP_FUNCTION_CONTEXT_TIME: &str = "gcp.function.context.time";

// Path: model/attributes/gcp/gcp__function__context__timestamp.json
/// The legacy timestamp of the GCP Cloud Function event
pub const GCP_FUNCTION_CONTEXT_TIMESTAMP: &str = "gcp.function.context.timestamp";

// Path: model/attributes/gcp/gcp__function__context__type.json
/// The type of the GCP Cloud Function event context
pub const GCP_FUNCTION_CONTEXT_TYPE: &str = "gcp.function.context.type";

// Path: model/attributes/gcp/gcp__project__id.json
/// The ID of the project in GCP that this resource is associated with
pub const GCP_PROJECT_ID: &str = "gcp.project.id";

// Path: model/attributes/gen_ai/gen_ai__agent__name.json
/// The name of the agent being used.
pub const GEN_AI_AGENT_NAME: &str = "gen_ai.agent.name";

// Path: model/attributes/gen_ai/gen_ai__context__utilization.json
/// The fraction of the model context window utilized by this generation.
pub const GEN_AI_CONTEXT_UTILIZATION: &str = "gen_ai.context.utilization";

// Path: model/attributes/gen_ai/gen_ai__context__window_size.json
/// The maximum context window size supported by the model for this generation.
pub const GEN_AI_CONTEXT_WINDOW_SIZE: &str = "gen_ai.context.window_size";

// Path: model/attributes/gen_ai/gen_ai__conversation__id.json
/// The unique identifier for a conversation (session, thread), used to store and correlate messages within this conversation.
pub const GEN_AI_CONVERSATION_ID: &str = "gen_ai.conversation.id";

// Path: model/attributes/gen_ai/gen_ai__cost__input_tokens.json
/// The cost of tokens used to process the AI input (prompt) in USD (without cached input tokens).
pub const GEN_AI_COST_INPUT_TOKENS: &str = "gen_ai.cost.input_tokens";

// Path: model/attributes/gen_ai/gen_ai__cost__output_tokens.json
/// The cost of tokens used for creating the AI output in USD (without reasoning tokens).
pub const GEN_AI_COST_OUTPUT_TOKENS: &str = "gen_ai.cost.output_tokens";

// Path: model/attributes/gen_ai/gen_ai__cost__total_tokens.json
/// The total cost for the tokens used.
pub const GEN_AI_COST_TOTAL_TOKENS: &str = "gen_ai.cost.total_tokens";

// Path: model/attributes/gen_ai/gen_ai__embeddings__input.json
/// The input to the embeddings model.
pub const GEN_AI_EMBEDDINGS_INPUT: &str = "gen_ai.embeddings.input";

// Path: model/attributes/gen_ai/gen_ai__function_id.json
/// Framework-specific tracing label for the execution of a function or other unit of execution in a generative AI system.
pub const GEN_AI_FUNCTION_ID: &str = "gen_ai.function_id";

// Path: model/attributes/gen_ai/gen_ai__input__messages.json
/// The messages passed to the model. It has to be a stringified version of an array of objects. The `role` attribute of each object must be `"user"`, `"assistant"`, `"tool"`, or `"system"`. For messages of the role `"tool"`, the `content` can be a string or an arbitrary object with information about the tool call. For other messages the `content` can be either a string or a list of objects in the format `{type: "text", text:"..."}`.
pub const GEN_AI_INPUT_MESSAGES: &str = "gen_ai.input.messages";

// Path: model/attributes/gen_ai/gen_ai__operation__name.json
/// The name of the operation being performed. It has the following list of well-known values: 'chat', 'create_agent', 'embeddings', 'execute_tool', 'generate_content', 'invoke_agent', 'text_completion'. If one of them applies, then that value MUST be used. Otherwise a custom value MAY be used.
pub const GEN_AI_OPERATION_NAME: &str = "gen_ai.operation.name";

// Path: model/attributes/gen_ai/gen_ai__operation__type.json
/// The type of AI operation. Must be one of 'agent' (invoke_agent and create_agent spans), 'ai_client' (any LLM call), 'tool' (execute_tool spans), 'handoff' (handoff spans), 'other' (input and output processors, skill loading, guardrails etc.) . Added during ingestion based on span.op and gen_ai.operation.type. Used to filter and aggregate data in the UI
pub const GEN_AI_OPERATION_TYPE: &str = "gen_ai.operation.type";

// Path: model/attributes/gen_ai/gen_ai__output__messages.json
/// The model's response messages. It has to be a stringified version of an array of message objects, which can include text responses and tool calls.
pub const GEN_AI_OUTPUT_MESSAGES: &str = "gen_ai.output.messages";

// Path: model/attributes/gen_ai/gen_ai__pipeline__name.json
/// Name of the AI pipeline or chain being executed.
pub const GEN_AI_PIPELINE_NAME: &str = "gen_ai.pipeline.name";

// Path: model/attributes/gen_ai/gen_ai__prompt.json
/// The input messages sent to the model
#[deprecated]
pub const GEN_AI_PROMPT: &str = "gen_ai.prompt";

// Path: model/attributes/gen_ai/gen_ai__prompt__name.json
/// The name of the prompt that uniquely identifies it.
pub const GEN_AI_PROMPT_NAME: &str = "gen_ai.prompt.name";

// Path: model/attributes/gen_ai/gen_ai__provider__name.json
/// The Generative AI provider as identified by the client or server instrumentation.
pub const GEN_AI_PROVIDER_NAME: &str = "gen_ai.provider.name";

// Path: model/attributes/gen_ai/gen_ai__request__available_tools.json
/// The available tools for the model. It has to be a stringified version of an array of objects.
#[deprecated(note = "Use gen_ai.tool.definitions instead.")]
pub const GEN_AI_REQUEST_AVAILABLE_TOOLS: &str = "gen_ai.request.available_tools";

// Path: model/attributes/gen_ai/gen_ai__request__frequency_penalty.json
/// Used to reduce repetitiveness of generated tokens. The higher the value, the stronger a penalty is applied to previously present tokens, proportional to how many times they have already appeared in the prompt or prior generation.
pub const GEN_AI_REQUEST_FREQUENCY_PENALTY: &str = "gen_ai.request.frequency_penalty";

// Path: model/attributes/gen_ai/gen_ai__request__max_tokens.json
/// The maximum number of tokens to generate in the response.
pub const GEN_AI_REQUEST_MAX_TOKENS: &str = "gen_ai.request.max_tokens";

// Path: model/attributes/gen_ai/gen_ai__request__messages.json
/// The messages passed to the model. It has to be a stringified version of an array of objects. The `role` attribute of each object must be `"user"`, `"assistant"`, `"tool"`, or `"system"`. For messages of the role `"tool"`, the `content` can be a string or an arbitrary object with information about the tool call. For other messages the `content` can be either a string or a list of objects in the format `{type: "text", text:"..."}`.
#[deprecated(note = "Use gen_ai.input.messages instead.")]
pub const GEN_AI_REQUEST_MESSAGES: &str = "gen_ai.request.messages";

// Path: model/attributes/gen_ai/gen_ai__request__model.json
/// The model identifier being used for the request.
pub const GEN_AI_REQUEST_MODEL: &str = "gen_ai.request.model";

// Path: model/attributes/gen_ai/gen_ai__request__presence_penalty.json
/// Used to reduce repetitiveness of generated tokens. Similar to frequency_penalty, except that this penalty is applied equally to all tokens that have already appeared, regardless of their exact frequencies.
pub const GEN_AI_REQUEST_PRESENCE_PENALTY: &str = "gen_ai.request.presence_penalty";

// Path: model/attributes/gen_ai/gen_ai__request__reasoning_effort.json
/// Constrains the effort on reasoning for reasoning models. Supported values vary by provider.
pub const GEN_AI_REQUEST_REASONING_EFFORT: &str = "gen_ai.request.reasoning_effort";

// Path: model/attributes/gen_ai/gen_ai__request__seed.json
/// The seed, ideally models given the same seed and same other parameters will produce the exact same output.
pub const GEN_AI_REQUEST_SEED: &str = "gen_ai.request.seed";

// Path: model/attributes/gen_ai/gen_ai__request__temperature.json
/// For an AI model call, the temperature parameter. Temperature essentially means how random the output will be.
pub const GEN_AI_REQUEST_TEMPERATURE: &str = "gen_ai.request.temperature";

// Path: model/attributes/gen_ai/gen_ai__request__top_k.json
/// Limits the model to only consider the K most likely next tokens, where K is an integer (e.g., top_k=20 means only the 20 highest probability tokens are considered).
pub const GEN_AI_REQUEST_TOP_K: &str = "gen_ai.request.top_k";

// Path: model/attributes/gen_ai/gen_ai__request__top_p.json
/// Limits the model to only consider tokens whose cumulative probability mass adds up to p, where p is a float between 0 and 1 (e.g., top_p=0.7 means only tokens that sum up to 70% of the probability mass are considered).
pub const GEN_AI_REQUEST_TOP_P: &str = "gen_ai.request.top_p";

// Path: model/attributes/gen_ai/gen_ai__response__finish_reasons.json
/// The reason why the model stopped generating.
pub const GEN_AI_RESPONSE_FINISH_REASONS: &str = "gen_ai.response.finish_reasons";

// Path: model/attributes/gen_ai/gen_ai__response__id.json
/// Unique identifier for the completion.
pub const GEN_AI_RESPONSE_ID: &str = "gen_ai.response.id";

// Path: model/attributes/gen_ai/gen_ai__response__model.json
/// The vendor-specific ID of the model used.
pub const GEN_AI_RESPONSE_MODEL: &str = "gen_ai.response.model";

// Path: model/attributes/gen_ai/gen_ai__response__streaming.json
/// Whether or not the AI model call's response was streamed back asynchronously
pub const GEN_AI_RESPONSE_STREAMING: &str = "gen_ai.response.streaming";

// Path: model/attributes/gen_ai/gen_ai__response__text.json
/// The model's response text messages. It has to be a stringified version of an array of response text messages.
#[deprecated(note = "Use gen_ai.output.messages instead.")]
pub const GEN_AI_RESPONSE_TEXT: &str = "gen_ai.response.text";

// Path: model/attributes/gen_ai/gen_ai__response__time_to_first_chunk.json
/// Time in seconds when the first response content chunk arrived in streaming responses.
pub const GEN_AI_RESPONSE_TIME_TO_FIRST_CHUNK: &str = "gen_ai.response.time_to_first_chunk";

// Path: model/attributes/gen_ai/gen_ai__response__time_to_first_token.json
/// Time in seconds when the first response content chunk arrived in streaming responses.
#[deprecated(note = "Use gen_ai.response.time_to_first_chunk instead.")]
pub const GEN_AI_RESPONSE_TIME_TO_FIRST_TOKEN: &str = "gen_ai.response.time_to_first_token";

// Path: model/attributes/gen_ai/gen_ai__response__tokens_per_second.json
/// The total output tokens per seconds throughput
pub const GEN_AI_RESPONSE_TOKENS_PER_SECOND: &str = "gen_ai.response.tokens_per_second";

// Path: model/attributes/gen_ai/gen_ai__response__tool_calls.json
/// The tool calls in the model's response. It has to be a stringified version of an array of objects.
#[deprecated(note = "Use gen_ai.output.messages instead.")]
pub const GEN_AI_RESPONSE_TOOL_CALLS: &str = "gen_ai.response.tool_calls";

// Path: model/attributes/gen_ai/gen_ai__system.json
/// The provider of the model.
#[deprecated(note = "Use gen_ai.provider.name instead.")]
pub const GEN_AI_SYSTEM: &str = "gen_ai.system";

// Path: model/attributes/gen_ai/gen_ai__system_instructions.json
/// The system instructions passed to the model.
pub const GEN_AI_SYSTEM_INSTRUCTIONS: &str = "gen_ai.system_instructions";

// Path: model/attributes/gen_ai/gen_ai__system__message.json
/// The system instructions passed to the model.
#[deprecated(note = "Use gen_ai.system_instructions instead.")]
pub const GEN_AI_SYSTEM_MESSAGE: &str = "gen_ai.system.message";

// Path: model/attributes/gen_ai/gen_ai__tool__call__arguments.json
/// The arguments of the tool call. It has to be a stringified version of the arguments to the tool.
pub const GEN_AI_TOOL_CALL_ARGUMENTS: &str = "gen_ai.tool.call.arguments";

// Path: model/attributes/gen_ai/gen_ai__tool__call__result.json
/// The result of the tool call. It has to be a stringified version of the result of the tool.
pub const GEN_AI_TOOL_CALL_RESULT: &str = "gen_ai.tool.call.result";

// Path: model/attributes/gen_ai/gen_ai__tool__definitions.json
/// The list of source system tool definitions available to the GenAI agent or model.
pub const GEN_AI_TOOL_DEFINITIONS: &str = "gen_ai.tool.definitions";

// Path: model/attributes/gen_ai/gen_ai__tool__description.json
/// The description of the tool being used.
pub const GEN_AI_TOOL_DESCRIPTION: &str = "gen_ai.tool.description";

// Path: model/attributes/gen_ai/gen_ai__tool__input.json
/// The input of the tool being used. It has to be a stringified version of the input to the tool.
#[deprecated(note = "Use gen_ai.tool.call.arguments instead.")]
pub const GEN_AI_TOOL_INPUT: &str = "gen_ai.tool.input";

// Path: model/attributes/gen_ai/gen_ai__tool__message.json
/// The response from a tool or function call passed to the model.
#[deprecated(note = "Use gen_ai.tool.call.result instead.")]
pub const GEN_AI_TOOL_MESSAGE: &str = "gen_ai.tool.message";

// Path: model/attributes/gen_ai/gen_ai__tool__name.json
/// Name of the tool utilized by the agent.
pub const GEN_AI_TOOL_NAME: &str = "gen_ai.tool.name";

// Path: model/attributes/gen_ai/gen_ai__tool__output.json
/// The output of the tool being used. It has to be a stringified version of the output of the tool.
#[deprecated(note = "Use gen_ai.tool.call.result instead.")]
pub const GEN_AI_TOOL_OUTPUT: &str = "gen_ai.tool.output";

// Path: model/attributes/gen_ai/gen_ai__tool__type.json
/// The type of tool being used.
#[deprecated]
pub const GEN_AI_TOOL_TYPE: &str = "gen_ai.tool.type";

// Path: model/attributes/gen_ai/gen_ai__usage__cache_creation__input_tokens.json
/// The number of tokens written to the cache when processing the AI input (prompt).
pub const GEN_AI_USAGE_CACHE_CREATION_INPUT_TOKENS: &str =
    "gen_ai.usage.cache_creation.input_tokens";

// Path: model/attributes/gen_ai/gen_ai__usage__cache_read__input_tokens.json
/// The number of cached tokens used to process the AI input (prompt).
pub const GEN_AI_USAGE_CACHE_READ_INPUT_TOKENS: &str = "gen_ai.usage.cache_read.input_tokens";

// Path: model/attributes/gen_ai/gen_ai__usage__completion_tokens.json
/// The number of tokens used in the GenAI response (completion).
#[deprecated(note = "Use gen_ai.usage.output_tokens instead.")]
pub const GEN_AI_USAGE_COMPLETION_TOKENS: &str = "gen_ai.usage.completion_tokens";

// Path: model/attributes/gen_ai/gen_ai__usage__input_tokens.json
/// The number of tokens used to process the AI input (prompt) including cached input tokens.
pub const GEN_AI_USAGE_INPUT_TOKENS: &str = "gen_ai.usage.input_tokens";

// Path: model/attributes/gen_ai/gen_ai__usage__input_tokens__cached.json
/// The number of cached tokens used to process the AI input (prompt).
#[deprecated(note = "Use gen_ai.usage.cache_read.input_tokens instead.")]
pub const GEN_AI_USAGE_INPUT_TOKENS_CACHED: &str = "gen_ai.usage.input_tokens.cached";

// Path: model/attributes/gen_ai/gen_ai__usage__input_tokens__cache_write.json
/// The number of tokens written to the cache when processing the AI input (prompt).
#[deprecated(note = "Use gen_ai.usage.cache_creation.input_tokens instead.")]
pub const GEN_AI_USAGE_INPUT_TOKENS_CACHE_WRITE: &str = "gen_ai.usage.input_tokens.cache_write";

// Path: model/attributes/gen_ai/gen_ai__usage__output_tokens.json
/// The number of tokens used for creating the AI output (including reasoning tokens).
pub const GEN_AI_USAGE_OUTPUT_TOKENS: &str = "gen_ai.usage.output_tokens";

// Path: model/attributes/gen_ai/gen_ai__usage__output_tokens__reasoning.json
/// The number of tokens used for reasoning to create the AI output.
#[deprecated(note = "Use gen_ai.usage.reasoning.output_tokens instead.")]
pub const GEN_AI_USAGE_OUTPUT_TOKENS_REASONING: &str = "gen_ai.usage.output_tokens.reasoning";

// Path: model/attributes/gen_ai/gen_ai__usage__prompt_tokens.json
/// The number of tokens used in the GenAI input (prompt).
#[deprecated(note = "Use gen_ai.usage.input_tokens instead.")]
pub const GEN_AI_USAGE_PROMPT_TOKENS: &str = "gen_ai.usage.prompt_tokens";

// Path: model/attributes/gen_ai/gen_ai__usage__reasoning__output_tokens.json
/// The number of tokens used for reasoning to create the AI output.
pub const GEN_AI_USAGE_REASONING_OUTPUT_TOKENS: &str = "gen_ai.usage.reasoning.output_tokens";

// Path: model/attributes/gen_ai/gen_ai__usage__total_tokens.json
/// The total number of tokens used to process the prompt. (input tokens plus output todkens)
pub const GEN_AI_USAGE_TOTAL_TOKENS: &str = "gen_ai.usage.total_tokens";

// Path: model/attributes/graphql/graphql__document.json
/// The GraphQL document being executed.
pub const GRAPHQL_DOCUMENT: &str = "graphql.document";

// Path: model/attributes/graphql/graphql__operation__name.json
/// The name of the operation being executed.
pub const GRAPHQL_OPERATION_NAME: &str = "graphql.operation.name";

// Path: model/attributes/graphql/graphql__operation__type.json
/// The type of the operation being executed.
pub const GRAPHQL_OPERATION_TYPE: &str = "graphql.operation.type";

// Path: model/attributes/hardwareConcurrency.json
/// The number of logical CPU cores available.
#[deprecated(note = "Use device.processor_count instead.")]
pub const HARDWARECONCURRENCY: &str = "hardwareConcurrency";

// Path: model/attributes/http/http__client_ip.json
/// Client address - domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.
#[deprecated(note = "Use client.address instead.")]
pub const HTTP_CLIENT_IP: &str = "http.client_ip";

// Path: model/attributes/http/http__decoded_response_content_length.json
/// The decoded body size of the response (in bytes).
pub const HTTP_DECODED_RESPONSE_CONTENT_LENGTH: &str = "http.decoded_response_content_length";

// Path: model/attributes/http/http__flavor.json
/// The actual version of the protocol used for network communication.
#[deprecated(note = "Use network.protocol.version instead.")]
pub const HTTP_FLAVOR: &str = "http.flavor";

// Path: model/attributes/http/http__fragment.json
/// The fragments present in the URI. Note that this contains the leading # character, while the `url.fragment` attribute does not.
pub const HTTP_FRAGMENT: &str = "http.fragment";

// Path: model/attributes/http/http__host.json
/// The domain name.
#[deprecated(note = "Use server.address instead.")]
pub const HTTP_HOST: &str = "http.host";

// Path: model/attributes/http/http__method.json
/// The HTTP method used.
#[deprecated(note = "Use http.request.method instead.")]
pub const HTTP_METHOD: &str = "http.method";

// Path: model/attributes/http/http__query.json
/// The query string present in the URL. Note that this contains the leading ? character, while the `url.query` attribute does not.
pub const HTTP_QUERY: &str = "http.query";

// Path: model/attributes/http/http__request__body__data.json
/// HTTP request body data. Can be given as string or structural data of any format.
pub const HTTP_REQUEST_BODY_DATA: &str = "http.request.body.data";

// Path: model/attributes/http/http__request__connection_end.json
/// The UNIX timestamp representing the time immediately after the browser finishes establishing the connection to the server to retrieve the resource. The timestamp value includes the time interval to establish the transport connection, as well as other time intervals such as TLS handshake and SOCKS authentication.
pub const HTTP_REQUEST_CONNECTION_END: &str = "http.request.connection_end";

// Path: model/attributes/http/http__request__connect_start.json
/// The UNIX timestamp representing the time immediately before the user agent starts establishing the connection to the server to retrieve the resource.
pub const HTTP_REQUEST_CONNECT_START: &str = "http.request.connect_start";

// Path: model/attributes/http/http__request__domain_lookup_end.json
/// The UNIX timestamp representing the time immediately after the browser finishes the domain-name lookup for the resource.
pub const HTTP_REQUEST_DOMAIN_LOOKUP_END: &str = "http.request.domain_lookup_end";

// Path: model/attributes/http/http__request__domain_lookup_start.json
/// The UNIX timestamp representing the time immediately before the browser starts the domain name lookup for the resource.
pub const HTTP_REQUEST_DOMAIN_LOOKUP_START: &str = "http.request.domain_lookup_start";

// Path: model/attributes/http/http__request__fetch_start.json
/// The UNIX timestamp representing the time immediately before the browser starts to fetch the resource.
pub const HTTP_REQUEST_FETCH_START: &str = "http.request.fetch_start";

// Path: model/attributes/http/http__request__header__[key].json
/// HTTP request headers, <key> being the normalized HTTP Header name (lowercase), the value being the header values.
pub const HTTP_REQUEST_HEADER_KEY: &str = "http.request.header.<key>";

// Path: model/attributes/http/http__request__method.json
/// The HTTP method used.
pub const HTTP_REQUEST_METHOD: &str = "http.request.method";

// Path: model/attributes/http/http__request_method.json
/// The HTTP method used.
#[deprecated(note = "Use http.request.method instead.")]
pub const _HTTP_REQUEST_METHOD: &str = "http.request_method";

// Path: model/attributes/http/http__request__redirect_end.json
/// The UNIX timestamp representing the timestamp immediately after receiving the last byte of the response of the last redirect
pub const HTTP_REQUEST_REDIRECT_END: &str = "http.request.redirect_end";

// Path: model/attributes/http/http__request__redirect_start.json
/// The UNIX timestamp representing the start time of the fetch which that initiates the redirect.
pub const HTTP_REQUEST_REDIRECT_START: &str = "http.request.redirect_start";

// Path: model/attributes/http/http__request__request_start.json
/// The UNIX timestamp representing the time immediately before the browser starts requesting the resource from the server, cache, or local resource. If the transport connection fails and the browser retires the request, the value returned will be the start of the retry request.
pub const HTTP_REQUEST_REQUEST_START: &str = "http.request.request_start";

// Path: model/attributes/http/http__request__resend_count.json
/// The ordinal number of request resending attempt (for any reason, including redirects).
pub const HTTP_REQUEST_RESEND_COUNT: &str = "http.request.resend_count";

// Path: model/attributes/http/http__request__response_end.json
/// The UNIX timestamp representing the time immediately after the browser receives the last byte of the resource or immediately before the transport connection is closed, whichever comes first.
pub const HTTP_REQUEST_RESPONSE_END: &str = "http.request.response_end";

// Path: model/attributes/http/http__request__response_start.json
/// The UNIX timestamp representing the time immediately before the browser starts requesting the resource from the server, cache, or local resource. If the transport connection fails and the browser retires the request, the value returned will be the start of the retry request.
pub const HTTP_REQUEST_RESPONSE_START: &str = "http.request.response_start";

// Path: model/attributes/http/http__request__secure_connection_start.json
/// The UNIX timestamp representing the time immediately before the browser starts the handshake process to secure the current connection. If a secure connection is not used, the property returns zero.
pub const HTTP_REQUEST_SECURE_CONNECTION_START: &str = "http.request.secure_connection_start";

// Path: model/attributes/http/http__request__time_to_first_byte.json
/// The time in seconds from the browser's timeorigin to when the first byte of the request's response was received. See https://web.dev/articles/ttfb#measure-resource-requests
pub const HTTP_REQUEST_TIME_TO_FIRST_BYTE: &str = "http.request.time_to_first_byte";

// Path: model/attributes/http/http__request__worker_start.json
/// The UNIX timestamp representing the timestamp immediately before dispatching the FetchEvent if a Service Worker thread is already running, or immediately before starting the Service Worker thread if it is not already running.
pub const HTTP_REQUEST_WORKER_START: &str = "http.request.worker_start";

// Path: model/attributes/http/http__response__body__size.json
/// The encoded body size of the response (in bytes).
pub const HTTP_RESPONSE_BODY_SIZE: &str = "http.response.body.size";

// Path: model/attributes/http/http__response_content_length.json
/// The encoded body size of the response (in bytes).
#[deprecated(note = "Use http.response.body.size instead.")]
pub const HTTP_RESPONSE_CONTENT_LENGTH: &str = "http.response_content_length";

// Path: model/attributes/http/http__response__header__content-length.json
/// The size of the message body sent to the recipient (in bytes)
pub const HTTP_RESPONSE_HEADER_CONTENT_LENGTH: &str = "http.response.header.content-length";

// Path: model/attributes/http/http__response__header__[key].json
/// HTTP response headers, <key> being the normalized HTTP Header name (lowercase), the value being the header values.
pub const HTTP_RESPONSE_HEADER_KEY: &str = "http.response.header.<key>";

// Path: model/attributes/http/http__response__size.json
/// The transfer size of the response (in bytes).
pub const HTTP_RESPONSE_SIZE: &str = "http.response.size";

// Path: model/attributes/http/http__response__status_code.json
/// The status code of the HTTP response.
pub const HTTP_RESPONSE_STATUS_CODE: &str = "http.response.status_code";

// Path: model/attributes/http/http__response_transfer_size.json
/// The transfer size of the response (in bytes).
#[deprecated(note = "Use http.response.size instead.")]
pub const HTTP_RESPONSE_TRANSFER_SIZE: &str = "http.response_transfer_size";

// Path: model/attributes/http/http__route.json
/// The matched route, that is, the path template in the format used by the respective server framework.
pub const HTTP_ROUTE: &str = "http.route";

// Path: model/attributes/http/http__scheme.json
/// The URI scheme component identifying the used protocol.
#[deprecated(note = "Use url.scheme instead.")]
pub const HTTP_SCHEME: &str = "http.scheme";

// Path: model/attributes/http/http__server_name.json
/// The server domain name
#[deprecated(note = "Use server.address instead.")]
pub const HTTP_SERVER_NAME: &str = "http.server_name";

// Path: model/attributes/http/http__server__request__time_in_queue.json
/// The time in milliseconds the request spent in the server queue before processing began. Measured from the X-Request-Start header set by reverse proxies (e.g., Nginx, HAProxy, Heroku) to when the application started handling the request.
pub const HTTP_SERVER_REQUEST_TIME_IN_QUEUE: &str = "http.server.request.time_in_queue";

// Path: model/attributes/http/http__status_code.json
/// The status code of the HTTP response.
#[deprecated(note = "Use http.response.status_code instead.")]
pub const HTTP_STATUS_CODE: &str = "http.status_code";

// Path: model/attributes/http/http__target.json
/// The pathname and query string of the URL.
#[deprecated(note = "Use url.path instead.")]
pub const HTTP_TARGET: &str = "http.target";

// Path: model/attributes/http/http__url.json
/// The URL of the resource that was fetched.
#[deprecated(note = "Use url.full instead.")]
pub const HTTP_URL: &str = "http.url";

// Path: model/attributes/http/http__user_agent.json
/// Value of the HTTP User-Agent header sent by the client.
#[deprecated(note = "Use user_agent.original instead.")]
pub const HTTP_USER_AGENT: &str = "http.user_agent";

// Path: model/attributes/id.json
/// A unique identifier for the span.
pub const ID: &str = "id";

// Path: model/attributes/inp.json
/// The value of the recorded Interaction to Next Paint (INP) web vital
#[deprecated(note = "Use browser.web_vital.inp.value instead.")]
pub const INP: &str = "inp";

// Path: model/attributes/jsonrpc/jsonrpc__protocol__version.json
/// The version of the JSON-RPC protocol used.
pub const JSONRPC_PROTOCOL_VERSION: &str = "jsonrpc.protocol.version";

// Path: model/attributes/jsonrpc/jsonrpc__request__id.json
/// The JSON-RPC request identifier. Unique within the session.
pub const JSONRPC_REQUEST_ID: &str = "jsonrpc.request.id";

// Path: model/attributes/jvm/jvm__gc__action.json
/// Name of the garbage collector action.
pub const JVM_GC_ACTION: &str = "jvm.gc.action";

// Path: model/attributes/jvm/jvm__gc__name.json
/// Name of the garbage collector.
pub const JVM_GC_NAME: &str = "jvm.gc.name";

// Path: model/attributes/jvm/jvm__memory__pool__name.json
/// Name of the memory pool.
pub const JVM_MEMORY_POOL_NAME: &str = "jvm.memory.pool.name";

// Path: model/attributes/jvm/jvm__memory__type.json
/// Name of the memory pool.
pub const JVM_MEMORY_TYPE: &str = "jvm.memory.type";

// Path: model/attributes/jvm/jvm__thread__daemon.json
/// Whether the thread is daemon or not.
pub const JVM_THREAD_DAEMON: &str = "jvm.thread.daemon";

// Path: model/attributes/jvm/jvm__thread__state.json
/// State of the thread.
pub const JVM_THREAD_STATE: &str = "jvm.thread.state";

// Path: model/attributes/lcp.json
/// The value of the recorded Largest Contentful Paint (LCP) web vital
#[deprecated(note = "Use browser.web_vital.lcp.value instead.")]
pub const LCP: &str = "lcp";

// Path: model/attributes/lcp/lcp__element.json
/// The dom element responsible for the largest contentful paint.
#[deprecated(note = "Use browser.web_vital.lcp.element instead.")]
pub const LCP_ELEMENT: &str = "lcp.element";

// Path: model/attributes/lcp/lcp__id.json
/// The id of the dom element responsible for the largest contentful paint.
#[deprecated(note = "Use browser.web_vital.lcp.id instead.")]
pub const LCP_ID: &str = "lcp.id";

// Path: model/attributes/lcp/lcp__loadTime.json
/// The time it took for the LCP element to be loaded
#[deprecated(note = "Use browser.web_vital.lcp.load_time instead.")]
pub const LCP_LOADTIME: &str = "lcp.loadTime";

// Path: model/attributes/lcp/lcp__renderTime.json
/// The time it took for the LCP element to be rendered
#[deprecated(note = "Use browser.web_vital.lcp.render_time instead.")]
pub const LCP_RENDERTIME: &str = "lcp.renderTime";

// Path: model/attributes/lcp/lcp__size.json
/// The size of the largest contentful paint element.
#[deprecated(note = "Use browser.web_vital.lcp.size instead.")]
pub const LCP_SIZE: &str = "lcp.size";

// Path: model/attributes/lcp/lcp__url.json
/// The url of the dom element responsible for the largest contentful paint.
#[deprecated(note = "Use browser.web_vital.lcp.url instead.")]
pub const LCP_URL: &str = "lcp.url";

// Path: model/attributes/logger/logger__name.json
/// The name of the logger that generated this event.
pub const LOGGER_NAME: &str = "logger.name";

// Path: model/attributes/mcp/mcp__cancelled__reason.json
/// Reason for the cancellation of an MCP operation.
pub const MCP_CANCELLED_REASON: &str = "mcp.cancelled.reason";

// Path: model/attributes/mcp/mcp__cancelled__request_id.json
/// Request ID of the cancelled MCP operation.
pub const MCP_CANCELLED_REQUEST_ID: &str = "mcp.cancelled.request_id";

// Path: model/attributes/mcp/mcp__client__name.json
/// Name of the MCP client application.
pub const MCP_CLIENT_NAME: &str = "mcp.client.name";

// Path: model/attributes/mcp/mcp__client__title.json
/// Display title of the MCP client application.
pub const MCP_CLIENT_TITLE: &str = "mcp.client.title";

// Path: model/attributes/mcp/mcp__client__version.json
/// Version of the MCP client application.
pub const MCP_CLIENT_VERSION: &str = "mcp.client.version";

// Path: model/attributes/mcp/mcp__lifecycle__phase.json
/// Lifecycle phase indicator for MCP operations.
pub const MCP_LIFECYCLE_PHASE: &str = "mcp.lifecycle.phase";

// Path: model/attributes/mcp/mcp__logging__data_type.json
/// Data type of the logged message content.
pub const MCP_LOGGING_DATA_TYPE: &str = "mcp.logging.data_type";

// Path: model/attributes/mcp/mcp__logging__level.json
/// Log level for MCP logging operations.
pub const MCP_LOGGING_LEVEL: &str = "mcp.logging.level";

// Path: model/attributes/mcp/mcp__logging__logger.json
/// Logger name for MCP logging operations.
pub const MCP_LOGGING_LOGGER: &str = "mcp.logging.logger";

// Path: model/attributes/mcp/mcp__logging__message.json
/// Log message content from MCP logging operations.
pub const MCP_LOGGING_MESSAGE: &str = "mcp.logging.message";

// Path: model/attributes/mcp/mcp__method__name.json
/// The name of the MCP request or notification method being called.
pub const MCP_METHOD_NAME: &str = "mcp.method.name";

// Path: model/attributes/mcp/mcp__progress__current.json
/// Current progress value of an MCP operation.
pub const MCP_PROGRESS_CURRENT: &str = "mcp.progress.current";

// Path: model/attributes/mcp/mcp__progress__message.json
/// Progress message describing the current state of an MCP operation.
pub const MCP_PROGRESS_MESSAGE: &str = "mcp.progress.message";

// Path: model/attributes/mcp/mcp__progress__percentage.json
/// Calculated progress percentage of an MCP operation. Computed from current/total * 100.
pub const MCP_PROGRESS_PERCENTAGE: &str = "mcp.progress.percentage";

// Path: model/attributes/mcp/mcp__progress__token.json
/// Token for tracking progress of an MCP operation.
pub const MCP_PROGRESS_TOKEN: &str = "mcp.progress.token";

// Path: model/attributes/mcp/mcp__progress__total.json
/// Total progress target value of an MCP operation.
pub const MCP_PROGRESS_TOTAL: &str = "mcp.progress.total";

// Path: model/attributes/mcp/mcp__prompt__name.json
/// Name of the MCP prompt template being used.
#[deprecated(note = "Use gen_ai.prompt.name instead.")]
pub const MCP_PROMPT_NAME: &str = "mcp.prompt.name";

// Path: model/attributes/mcp/mcp__prompt__result__description.json
/// Description of the prompt result.
pub const MCP_PROMPT_RESULT_DESCRIPTION: &str = "mcp.prompt.result.description";

// Path: model/attributes/mcp/mcp__prompt__result__message_content.json
/// Content of the message in the prompt result. Used for single message results only.
pub const MCP_PROMPT_RESULT_MESSAGE_CONTENT: &str = "mcp.prompt.result.message_content";

// Path: model/attributes/mcp/mcp__prompt__result__message_count.json
/// Number of messages in the prompt result.
pub const MCP_PROMPT_RESULT_MESSAGE_COUNT: &str = "mcp.prompt.result.message_count";

// Path: model/attributes/mcp/mcp__prompt__result__message_role.json
/// Role of the message in the prompt result. Used for single message results only.
pub const MCP_PROMPT_RESULT_MESSAGE_ROLE: &str = "mcp.prompt.result.message_role";

// Path: model/attributes/mcp/mcp__protocol__ready.json
/// Protocol readiness indicator for MCP session. Non-zero value indicates the protocol is ready.
pub const MCP_PROTOCOL_READY: &str = "mcp.protocol.ready";

// Path: model/attributes/mcp/mcp__protocol__version.json
/// MCP protocol version used in the session.
pub const MCP_PROTOCOL_VERSION: &str = "mcp.protocol.version";

// Path: model/attributes/mcp/mcp__request__argument__[key].json
/// MCP request argument with dynamic key suffix. The <key> is replaced with the actual argument name. The value is a JSON-stringified representation of the argument value.
pub const MCP_REQUEST_ARGUMENT_KEY: &str = "mcp.request.argument.<key>";

// Path: model/attributes/mcp/mcp__request__argument__name.json
/// Name argument from prompts/get MCP request.
pub const MCP_REQUEST_ARGUMENT_NAME: &str = "mcp.request.argument.name";

// Path: model/attributes/mcp/mcp__request__argument__uri.json
/// URI argument from resources/read MCP request.
pub const MCP_REQUEST_ARGUMENT_URI: &str = "mcp.request.argument.uri";

// Path: model/attributes/mcp/mcp__request__id.json
/// JSON-RPC request identifier for the MCP request. Unique within the MCP session.
#[deprecated(note = "Use jsonrpc.request.id instead.")]
pub const MCP_REQUEST_ID: &str = "mcp.request.id";

// Path: model/attributes/mcp/mcp__resource__protocol.json
/// Protocol of the resource URI being accessed, extracted from the URI.
#[deprecated(note = "Use network.protocol.name instead.")]
pub const MCP_RESOURCE_PROTOCOL: &str = "mcp.resource.protocol";

// Path: model/attributes/mcp/mcp__resource__uri.json
/// The resource URI being accessed in an MCP operation.
pub const MCP_RESOURCE_URI: &str = "mcp.resource.uri";

// Path: model/attributes/mcp/mcp__server__name.json
/// Name of the MCP server application.
pub const MCP_SERVER_NAME: &str = "mcp.server.name";

// Path: model/attributes/mcp/mcp__server__title.json
/// Display title of the MCP server application.
pub const MCP_SERVER_TITLE: &str = "mcp.server.title";

// Path: model/attributes/mcp/mcp__server__version.json
/// Version of the MCP server application.
pub const MCP_SERVER_VERSION: &str = "mcp.server.version";

// Path: model/attributes/mcp/mcp__session__id.json
/// Identifier for the MCP session.
pub const MCP_SESSION_ID: &str = "mcp.session.id";

// Path: model/attributes/mcp/mcp__tool__name.json
/// Name of the MCP tool being called.
#[deprecated(note = "Use gen_ai.tool.name instead.")]
pub const MCP_TOOL_NAME: &str = "mcp.tool.name";

// Path: model/attributes/mcp/mcp__tool__result__content.json
/// The content of the tool result.
#[deprecated(note = "Use gen_ai.tool.call.result instead.")]
pub const MCP_TOOL_RESULT_CONTENT: &str = "mcp.tool.result.content";

// Path: model/attributes/mcp/mcp__tool__result__content_count.json
/// Number of content items in the tool result.
pub const MCP_TOOL_RESULT_CONTENT_COUNT: &str = "mcp.tool.result.content_count";

// Path: model/attributes/mcp/mcp__tool__result__is_error.json
/// Whether a tool execution resulted in an error.
#[deprecated(note = "Use error.type instead.")]
pub const MCP_TOOL_RESULT_IS_ERROR: &str = "mcp.tool.result.is_error";

// Path: model/attributes/mcp/mcp__transport.json
/// Transport method used for MCP communication.
#[deprecated(note = "Use network.transport instead.")]
pub const MCP_TRANSPORT: &str = "mcp.transport";

// Path: model/attributes/mdc/mdc__[key].json
/// Attributes from the Mapped Diagnostic Context (MDC) present at the moment the log record was created. The MDC is supported by all the most popular logging solutions in the Java ecosystem, and it's usually implemented as a thread-local map that stores context for e.g. a specific request.
pub const MDC_KEY: &str = "mdc.<key>";

// Path: model/attributes/messaging/messaging__batch__message_count.json
/// The number of messages sent, received, or processed in the scope of the batching operation.
pub const MESSAGING_BATCH_MESSAGE_COUNT: &str = "messaging.batch.message_count";

// Path: model/attributes/messaging/messaging__destination__connection.json
/// The message destination connection.
pub const MESSAGING_DESTINATION_CONNECTION: &str = "messaging.destination.connection";

// Path: model/attributes/messaging/messaging__destination__name.json
/// The message destination name.
pub const MESSAGING_DESTINATION_NAME: &str = "messaging.destination.name";

// Path: model/attributes/messaging/messaging__message__body__size.json
/// The size of the message body in bytes.
pub const MESSAGING_MESSAGE_BODY_SIZE: &str = "messaging.message.body.size";

// Path: model/attributes/messaging/messaging__message__envelope__size.json
/// The size of the message body and metadata in bytes.
pub const MESSAGING_MESSAGE_ENVELOPE_SIZE: &str = "messaging.message.envelope.size";

// Path: model/attributes/messaging/messaging__message__id.json
/// A value used by the messaging system as an identifier for the message, represented as a string.
pub const MESSAGING_MESSAGE_ID: &str = "messaging.message.id";

// Path: model/attributes/messaging/messaging__message__receive__latency.json
/// The latency between when the message was published and received.
pub const MESSAGING_MESSAGE_RECEIVE_LATENCY: &str = "messaging.message.receive.latency";

// Path: model/attributes/messaging/messaging__message__retry__count.json
/// The amount of attempts to send the message.
pub const MESSAGING_MESSAGE_RETRY_COUNT: &str = "messaging.message.retry.count";

// Path: model/attributes/messaging/messaging__operation__name.json
/// The name of the messaging operation being performed
pub const MESSAGING_OPERATION_NAME: &str = "messaging.operation.name";

// Path: model/attributes/messaging/messaging__operation__type.json
/// A string identifying the type of the messaging operation
pub const MESSAGING_OPERATION_TYPE: &str = "messaging.operation.type";

// Path: model/attributes/messaging/messaging__system.json
/// The messaging system as identified by the client instrumentation.
pub const MESSAGING_SYSTEM: &str = "messaging.system";

// Path: model/attributes/method.json
/// The HTTP method used.
#[deprecated(note = "Use http.request.method instead.")]
pub const METHOD: &str = "method";

// Path: model/attributes/middleware/middleware__name.json
/// The name of the middleware.
pub const MIDDLEWARE_NAME: &str = "middleware.name";

// Path: model/attributes/navigation/navigation__type.json
/// The type of navigation done by a client-side router.
pub const NAVIGATION_TYPE: &str = "navigation.type";

// Path: model/attributes/nel/nel__elapsed_time.json
/// The elapsed number of milliseconds between the start of the resource fetch and when it was completed or aborted by the user agent.
pub const NEL_ELAPSED_TIME: &str = "nel.elapsed_time";

// Path: model/attributes/nel/nel__phase.json
/// If request failed, the phase of its network error. If request succeeded, "application".
pub const NEL_PHASE: &str = "nel.phase";

// Path: model/attributes/nel/nel__referrer.json
/// request's referrer, as determined by the referrer policy associated with its client.
pub const NEL_REFERRER: &str = "nel.referrer";

// Path: model/attributes/nel/nel__sampling_function.json
/// The sampling function used to determine if the request should be sampled.
pub const NEL_SAMPLING_FUNCTION: &str = "nel.sampling_function";

// Path: model/attributes/nel/nel__type.json
/// If request failed, the type of its network error. If request succeeded, "ok".
pub const NEL_TYPE: &str = "nel.type";

// Path: model/attributes/network/network__connection__effective_type.json
/// Specifies the effective type of the current connection (e.g. slow-2g, 2g, 3g, 4g).
pub const NETWORK_CONNECTION_EFFECTIVE_TYPE: &str = "network.connection.effective_type";

// Path: model/attributes/network/network__connection__rtt.json
/// Specifies the estimated effective round-trip time of the current connection, in milliseconds.
pub const NETWORK_CONNECTION_RTT: &str = "network.connection.rtt";

// Path: model/attributes/network/network__connection__type.json
/// Specifies the type of the current connection (e.g. wifi, ethernet, cellular , etc).
pub const NETWORK_CONNECTION_TYPE: &str = "network.connection.type";

// Path: model/attributes/network/network__local__address.json
/// Local address of the network connection - IP address or Unix domain socket name.
pub const NETWORK_LOCAL_ADDRESS: &str = "network.local.address";

// Path: model/attributes/network/network__local__port.json
/// Local port number of the network connection.
pub const NETWORK_LOCAL_PORT: &str = "network.local.port";

// Path: model/attributes/network/network__peer__address.json
/// Peer address of the network connection - IP address or Unix domain socket name.
pub const NETWORK_PEER_ADDRESS: &str = "network.peer.address";

// Path: model/attributes/network/network__peer__port.json
/// Peer port number of the network connection.
pub const NETWORK_PEER_PORT: &str = "network.peer.port";

// Path: model/attributes/network/network__protocol__name.json
/// OSI application layer or non-OSI equivalent.
pub const NETWORK_PROTOCOL_NAME: &str = "network.protocol.name";

// Path: model/attributes/network/network__protocol__version.json
/// The actual version of the protocol used for network communication.
pub const NETWORK_PROTOCOL_VERSION: &str = "network.protocol.version";

// Path: model/attributes/network/network__transport.json
/// OSI transport layer or inter-process communication method.
pub const NETWORK_TRANSPORT: &str = "network.transport";

// Path: model/attributes/network/network__type.json
/// OSI network layer or non-OSI equivalent.
pub const NETWORK_TYPE: &str = "network.type";

// Path: model/attributes/net/net__host__ip.json
/// Local address of the network connection - IP address or Unix domain socket name.
#[deprecated(note = "Use network.local.address instead.")]
pub const NET_HOST_IP: &str = "net.host.ip";

// Path: model/attributes/net/net__host__name.json
/// Server domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.
#[deprecated(note = "Use server.address instead.")]
pub const NET_HOST_NAME: &str = "net.host.name";

// Path: model/attributes/net/net__host__port.json
/// Server port number.
#[deprecated(note = "Use server.port instead.")]
pub const NET_HOST_PORT: &str = "net.host.port";

// Path: model/attributes/net/net__peer__ip.json
/// Peer address of the network connection - IP address or Unix domain socket name.
#[deprecated(note = "Use network.peer.address instead.")]
pub const NET_PEER_IP: &str = "net.peer.ip";

// Path: model/attributes/net/net__peer__name.json
/// Server domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.
#[deprecated(note = "Use server.address instead.")]
pub const NET_PEER_NAME: &str = "net.peer.name";

// Path: model/attributes/net/net__peer__port.json
/// Peer port number.
#[deprecated(note = "Use server.port instead.")]
pub const NET_PEER_PORT: &str = "net.peer.port";

// Path: model/attributes/net/net__protocol__name.json
/// OSI application layer or non-OSI equivalent.
#[deprecated(note = "Use network.protocol.name instead.")]
pub const NET_PROTOCOL_NAME: &str = "net.protocol.name";

// Path: model/attributes/net/net__protocol__version.json
/// The actual version of the protocol used for network communication.
#[deprecated(note = "Use network.protocol.version instead.")]
pub const NET_PROTOCOL_VERSION: &str = "net.protocol.version";

// Path: model/attributes/net/net__sock__family.json
/// OSI transport and network layer
#[deprecated(note = "Use network.transport instead.")]
pub const NET_SOCK_FAMILY: &str = "net.sock.family";

// Path: model/attributes/net/net__sock__host__addr.json
/// Local address of the network connection mapping to Unix domain socket name.
#[deprecated(note = "Use network.local.address instead.")]
pub const NET_SOCK_HOST_ADDR: &str = "net.sock.host.addr";

// Path: model/attributes/net/net__sock__host__port.json
/// Local port number of the network connection.
#[deprecated(note = "Use network.local.port instead.")]
pub const NET_SOCK_HOST_PORT: &str = "net.sock.host.port";

// Path: model/attributes/net/net__sock__peer__addr.json
/// Peer address of the network connection - IP address
#[deprecated(note = "Use network.peer.address instead.")]
pub const NET_SOCK_PEER_ADDR: &str = "net.sock.peer.addr";

// Path: model/attributes/net/net__sock__peer__name.json
/// Peer address of the network connection - Unix domain socket name
#[deprecated]
pub const NET_SOCK_PEER_NAME: &str = "net.sock.peer.name";

// Path: model/attributes/net/net__sock__peer__port.json
/// Peer port number of the network connection.
#[deprecated(note = "Use network.peer.port instead.")]
pub const NET_SOCK_PEER_PORT: &str = "net.sock.peer.port";

// Path: model/attributes/net/net__transport.json
/// OSI transport layer or inter-process communication method.
#[deprecated(note = "Use network.transport instead.")]
pub const NET_TRANSPORT: &str = "net.transport";

// Path: model/attributes/os/os__build.json
/// The build ID of the operating system.
#[deprecated(note = "Use os.build_id instead.")]
pub const OS_BUILD: &str = "os.build";

// Path: model/attributes/os/os__build_id.json
/// The build ID of the operating system.
pub const OS_BUILD_ID: &str = "os.build_id";

// Path: model/attributes/os/os__description.json
/// Human readable (not intended to be parsed) OS version information, like e.g. reported by ver or lsb_release -a commands.
pub const OS_DESCRIPTION: &str = "os.description";

// Path: model/attributes/os/os__kernel_version.json
/// An independent kernel version string. Typically the entire output of the `uname` syscall.
pub const OS_KERNEL_VERSION: &str = "os.kernel_version";

// Path: model/attributes/os/os__name.json
/// Human readable operating system name.
pub const OS_NAME: &str = "os.name";

// Path: model/attributes/os/os__raw_description.json
/// An unprocessed description string obtained by the operating system. For some well-known runtimes, Sentry will attempt to parse `name` and `version` from this string, if they are not explicitly given.
pub const OS_RAW_DESCRIPTION: &str = "os.raw_description";

// Path: model/attributes/os/os__rooted.json
/// Whether the operating system has been jailbroken or rooted.
pub const OS_ROOTED: &str = "os.rooted";

// Path: model/attributes/os/os__theme.json
/// Whether the OS runs in dark mode or light mode.
pub const OS_THEME: &str = "os.theme";

// Path: model/attributes/os/os__type.json
/// The operating system type.
pub const OS_TYPE: &str = "os.type";

// Path: model/attributes/os/os__version.json
/// The version of the operating system.
pub const OS_VERSION: &str = "os.version";

// Path: model/attributes/otel/otel__kind.json
/// The span kind (https://opentelemetry.io/docs/concepts/signals/traces/#span-kind). Deprecated, use `sentry.kind` instead.
#[deprecated(note = "Use sentry.kind instead.")]
pub const OTEL_KIND: &str = "otel.kind";

// Path: model/attributes/otel/otel__scope__name.json
/// The name of the instrumentation scope - (InstrumentationScope.Name in OTLP).
pub const OTEL_SCOPE_NAME: &str = "otel.scope.name";

// Path: model/attributes/otel/otel__scope__version.json
/// The version of the instrumentation scope - (InstrumentationScope.Version in OTLP).
pub const OTEL_SCOPE_VERSION: &str = "otel.scope.version";

// Path: model/attributes/otel/otel__status_code.json
/// Name of the code, either “OK” or “ERROR”. MUST NOT be set if the status code is UNSET.
pub const OTEL_STATUS_CODE: &str = "otel.status_code";

// Path: model/attributes/otel/otel__status_description.json
/// Description of the Status if it has a value, otherwise not set.
pub const OTEL_STATUS_DESCRIPTION: &str = "otel.status_description";

// Path: model/attributes/params/params__[key].json
/// Decoded parameters extracted from a URL path. Usually added by client-side routing frameworks like vue-router.
pub const PARAMS_KEY: &str = "params.<key>";

// Path: model/attributes/performance/performance__activationStart.json
/// The time between initiating a navigation to a page and the browser activating the page
#[deprecated(note = "Use browser.performance.navigation.activation_start instead.")]
pub const PERFORMANCE_ACTIVATIONSTART: &str = "performance.activationStart";

// Path: model/attributes/performance/performance__timeOrigin.json
/// The browser's performance.timeOrigin timestamp representing the time when the pageload was initiated
#[deprecated(note = "Use browser.performance.time_origin instead.")]
pub const PERFORMANCE_TIMEORIGIN: &str = "performance.timeOrigin";

// Path: model/attributes/previous_route.json
/// Also used by mobile SDKs to indicate the previous route in the application.
pub const PREVIOUS_ROUTE: &str = "previous_route";

// Path: model/attributes/process/process__command_args.json
/// All the command arguments (including the command/executable itself) as received by the process.
pub const PROCESS_COMMAND_ARGS: &str = "process.command_args";

// Path: model/attributes/process/process__executable__name.json
/// The name of the executable that started the process.
pub const PROCESS_EXECUTABLE_NAME: &str = "process.executable.name";

// Path: model/attributes/process/process__pid.json
/// The process ID of the running process.
pub const PROCESS_PID: &str = "process.pid";

// Path: model/attributes/process/process__runtime__description.json
/// An additional description about the runtime of the process, for example a specific vendor customization of the runtime environment. Equivalent to `raw_description` in the Sentry runtime context.
pub const PROCESS_RUNTIME_DESCRIPTION: &str = "process.runtime.description";

// Path: model/attributes/process/process__runtime__engine__name.json
/// The name of the runtime engine.
pub const PROCESS_RUNTIME_ENGINE_NAME: &str = "process.runtime.engine.name";

// Path: model/attributes/process/process__runtime__engine__version.json
/// The version of the runtime engine.
pub const PROCESS_RUNTIME_ENGINE_VERSION: &str = "process.runtime.engine.version";

// Path: model/attributes/process/process__runtime__name.json
/// The name of the runtime. Equivalent to `name` in the Sentry runtime context.
pub const PROCESS_RUNTIME_NAME: &str = "process.runtime.name";

// Path: model/attributes/process/process__runtime__version.json
/// The version of the runtime of this process, as returned by the runtime without modification. Equivalent to `version` in the Sentry runtime context.
pub const PROCESS_RUNTIME_VERSION: &str = "process.runtime.version";

// Path: model/attributes/query/query__[key].json
/// An item in a query string. Usually added by client-side routing frameworks like vue-router.
#[deprecated(note = "Use url.query instead.")]
pub const QUERY_KEY: &str = "query.<key>";

// Path: model/attributes/react/react__version.json
/// The version of the React framework
pub const REACT_VERSION: &str = "react.version";

// Path: model/attributes/release.json
/// The sentry release.
#[deprecated(note = "Use sentry.release instead.")]
pub const RELEASE: &str = "release";

// Path: model/attributes/remix/remix__action_form_data__[key].json
/// Remix form data, <key> being the form data key, the value being the form data value.
pub const REMIX_ACTION_FORM_DATA_KEY: &str = "remix.action_form_data.<key>";

// Path: model/attributes/replay_id.json
/// The id of the sentry replay.
#[deprecated(note = "Use sentry.replay_id instead.")]
pub const REPLAY_ID: &str = "replay_id";

// Path: model/attributes/resource/resource__deployment__environment.json
/// The software deployment environment name.
#[deprecated(note = "Use sentry.environment instead.")]
pub const RESOURCE_DEPLOYMENT_ENVIRONMENT: &str = "resource.deployment.environment";

// Path: model/attributes/resource/resource__deployment__environment__name.json
/// The software deployment environment name.
#[deprecated(note = "Use sentry.environment instead.")]
pub const RESOURCE_DEPLOYMENT_ENVIRONMENT_NAME: &str = "resource.deployment.environment.name";

// Path: model/attributes/resource/resource__render_blocking_status.json
/// The render blocking status of the resource.
pub const RESOURCE_RENDER_BLOCKING_STATUS: &str = "resource.render_blocking_status";

// Path: model/attributes/route.json
/// The matched route, that is, the path template in the format used by the respective server framework. Also used by mobile SDKs to indicate the current route in the application.
#[deprecated(note = "Use http.route instead.")]
pub const ROUTE: &str = "route";

// Path: model/attributes/rpc/rpc__grpc__status_code.json
/// The numeric status code of the gRPC request.
pub const RPC_GRPC_STATUS_CODE: &str = "rpc.grpc.status_code";

// Path: model/attributes/rpc/rpc__method.json
/// The fully-qualified logical name of the method from the RPC interface perspective.
pub const RPC_METHOD: &str = "rpc.method";

// Path: model/attributes/rpc/rpc__response__status_code.json
/// Status code of the RPC returned by the RPC server or generated by the client.
pub const RPC_RESPONSE_STATUS_CODE: &str = "rpc.response.status_code";

// Path: model/attributes/rpc/rpc__service.json
/// The full (logical) name of the service being called, including its package name, if applicable.
pub const RPC_SERVICE: &str = "rpc.service";

// Path: model/attributes/runtime/runtime__build.json
/// The application build string, when it is separate from the version.
#[deprecated]
pub const RUNTIME_BUILD: &str = "runtime.build";

// Path: model/attributes/runtime/runtime__name.json
/// The name of the runtime. For example node, CPython, or rustc.
#[deprecated(note = "Use process.runtime.name instead.")]
pub const RUNTIME_NAME: &str = "runtime.name";

// Path: model/attributes/runtime/runtime__raw_description.json
/// Unprocessed description string as obtained from the runtime. Used to extract name and version for well-known runtimes.
#[deprecated(note = "Use process.runtime.description instead.")]
pub const RUNTIME_RAW_DESCRIPTION: &str = "runtime.raw_description";

// Path: model/attributes/runtime/runtime__version.json
/// The version of the runtime.
#[deprecated(note = "Use process.runtime.version instead.")]
pub const RUNTIME_VERSION: &str = "runtime.version";

// Path: model/attributes/score/score__[key].json
/// The weighted performance score for a web vital. This is defined as `score.weight.<key>` * `score.ratio.<key>`.
pub const SCORE_KEY: &str = "score.<key>";

// Path: model/attributes/score/score__ratio__[key].json
/// The score for a web vital, normalized to a number between 0 and 1.
pub const SCORE_RATIO_KEY: &str = "score.ratio.<key>";

// Path: model/attributes/score/score__total.json
/// The total performance score of a span. This is the sum of individual weighted web vital scores (see `score.<key>`).
pub const SCORE_TOTAL: &str = "score.total";

// Path: model/attributes/score/score__weight__[key].json
/// The relative weight of a web vital in a span's performance score.
pub const SCORE_WEIGHT_KEY: &str = "score.weight.<key>";

// Path: model/attributes/sentry/sentry__action.json
/// Used as a generic attribute representing the action depending on the type of span. For instance, this is the database query operation for DB spans, and the request method for HTTP spans.
pub const SENTRY_ACTION: &str = "sentry.action";

// Path: model/attributes/sentry/sentry__browser__name.json
/// The name of the browser.
#[deprecated(note = "Use browser.name instead.")]
pub const SENTRY_BROWSER_NAME: &str = "sentry.browser.name";

// Path: model/attributes/sentry/sentry__browser__version.json
/// The version of the browser.
#[deprecated(note = "Use browser.version instead.")]
pub const SENTRY_BROWSER_VERSION: &str = "sentry.browser.version";

// Path: model/attributes/sentry/sentry__cancellation_reason.json
/// The reason why a span ended early.
pub const SENTRY_CANCELLATION_REASON: &str = "sentry.cancellation_reason";

// Path: model/attributes/sentry/sentry__category.json
/// The high-level category of a span, derived from the span operation or span attributes. This categorizes spans by their general purpose (e.g., database, HTTP, UI). Known values include: 'ai', 'ai.pipeline', 'app', 'browser', 'cache', 'console', 'db', 'event', 'file', 'function.aws', 'function.azure', 'function.gcp', 'function.nextjs', 'function.remix', 'graphql', 'grpc', 'http', 'measure', 'middleware', 'navigation', 'pageload', 'queue', 'resource', 'rpc', 'serialize', 'subprocess', 'template', 'topic', 'ui', 'ui.angular', 'ui.ember', 'ui.react', 'ui.svelte', 'ui.vue', 'view', 'websocket'.
pub const SENTRY_CATEGORY: &str = "sentry.category";

// Path: model/attributes/sentry/sentry__client_sample_rate.json
/// Rate at which a span was sampled in the SDK.
pub const SENTRY_CLIENT_SAMPLE_RATE: &str = "sentry.client_sample_rate";

// Path: model/attributes/sentry/sentry__description.json
/// The human-readable description of a span.
pub const SENTRY_DESCRIPTION: &str = "sentry.description";

// Path: model/attributes/sentry/sentry__dist.json
/// The sentry dist.
pub const SENTRY_DIST: &str = "sentry.dist";

// Path: model/attributes/sentry/sentry__domain.json
/// Used as a generic attribute representing the domain depending on the type of span. For instance, this is the collection/table name for database spans, and the server address for HTTP spans.
pub const SENTRY_DOMAIN: &str = "sentry.domain";

// Path: model/attributes/sentry/sentry__dsc__environment.json
/// The environment from the dynamic sampling context.
pub const SENTRY_DSC_ENVIRONMENT: &str = "sentry.dsc.environment";

// Path: model/attributes/sentry/sentry__dsc__project_id.json
/// The ID of the project where the trace originated (i.e. the project of the SDK that started the trace). Propagated through the dynamic sampling context and set by Relay during ingestion.
pub const SENTRY_DSC_PROJECT_ID: &str = "sentry.dsc.project_id";

// Path: model/attributes/sentry/sentry__dsc__public_key.json
/// The public key from the dynamic sampling context.
pub const SENTRY_DSC_PUBLIC_KEY: &str = "sentry.dsc.public_key";

// Path: model/attributes/sentry/sentry__dsc__release.json
/// The release identifier from the dynamic sampling context.
pub const SENTRY_DSC_RELEASE: &str = "sentry.dsc.release";

// Path: model/attributes/sentry/sentry__dsc__sampled.json
/// Whether the event was sampled according to the dynamic sampling context.
pub const SENTRY_DSC_SAMPLED: &str = "sentry.dsc.sampled";

// Path: model/attributes/sentry/sentry__dsc__sample_rate.json
/// The sample rate from the dynamic sampling context.
pub const SENTRY_DSC_SAMPLE_RATE: &str = "sentry.dsc.sample_rate";

// Path: model/attributes/sentry/sentry__dsc__trace_id.json
/// The trace ID from the dynamic sampling context.
pub const SENTRY_DSC_TRACE_ID: &str = "sentry.dsc.trace_id";

// Path: model/attributes/sentry/sentry__dsc__transaction.json
/// The transaction name from the dynamic sampling context.
pub const SENTRY_DSC_TRANSACTION: &str = "sentry.dsc.transaction";

// Path: model/attributes/sentry/sentry__environment.json
/// The sentry environment.
pub const SENTRY_ENVIRONMENT: &str = "sentry.environment";

// Path: model/attributes/sentry/sentry__exclusive_time.json
/// The exclusive time duration of the span in milliseconds.
pub const SENTRY_EXCLUSIVE_TIME: &str = "sentry.exclusive_time";

// Path: model/attributes/sentry/sentry__graphql__operation.json
/// Indicates the type of graphql operation, emitted by the Javascript SDK.
pub const SENTRY_GRAPHQL_OPERATION: &str = "sentry.graphql.operation";

// Path: model/attributes/sentry/sentry__group.json
/// Stores the hash of `sentry.normalized_description`. This is primarily used for grouping spans in the product end.
pub const SENTRY_GROUP: &str = "sentry.group";

// Path: model/attributes/sentry/sentry__http__prefetch.json
/// If an http request was a prefetch request.
pub const SENTRY_HTTP_PREFETCH: &str = "sentry.http.prefetch";

// Path: model/attributes/sentry/sentry__idle_span_finish_reason.json
/// The reason why an idle span ended early.
pub const SENTRY_IDLE_SPAN_FINISH_REASON: &str = "sentry.idle_span_finish_reason";

// Path: model/attributes/sentry/sentry__is_remote.json
/// Indicates whether a span's parent is remote.
pub const SENTRY_IS_REMOTE: &str = "sentry.is_remote";

// Path: model/attributes/sentry/sentry__kind.json
/// Used to clarify the relationship between parents and children, or to distinguish between spans, e.g. a `server` and `client` span with the same name.
pub const SENTRY_KIND: &str = "sentry.kind";

// Path: model/attributes/sentry/sentry__main_thread.json
/// Whether the span or event occurred on the main thread. Computed by Relay and should not be set by SDKs.
pub const SENTRY_MAIN_THREAD: &str = "sentry.main_thread";

// Path: model/attributes/sentry/sentry__message__parameter__[key].json
/// A parameter used in the message template. <key> can either be the number that represent the parameter's position in the template string (sentry.message.parameter.0, sentry.message.parameter.1, etc) or the parameter's name (sentry.message.parameter.item_id, sentry.message.parameter.user_id, etc)
pub const SENTRY_MESSAGE_PARAMETER_KEY: &str = "sentry.message.parameter.<key>";

// Path: model/attributes/sentry/sentry__message__template.json
/// The parameterized template string.
pub const SENTRY_MESSAGE_TEMPLATE: &str = "sentry.message.template";

// Path: model/attributes/sentry/sentry__mobile.json
/// Whether the application is using a mobile SDK. Computed by Relay and should not be set by SDKs.
pub const SENTRY_MOBILE: &str = "sentry.mobile";

// Path: model/attributes/sentry/sentry__module__[key].json
/// A module that was loaded in the process. The key is the name of the module.
pub const SENTRY_MODULE_KEY: &str = "sentry.module.<key>";

// Path: model/attributes/sentry/sentry__nextjs__ssr__function__route.json
/// A parameterized route for a function in Next.js that contributes to Server-Side Rendering. Should be present on spans that track such functions when the file location of the function is known.
pub const SENTRY_NEXTJS_SSR_FUNCTION_ROUTE: &str = "sentry.nextjs.ssr.function.route";

// Path: model/attributes/sentry/sentry__nextjs__ssr__function__type.json
/// A descriptor for a for a function in Next.js that contributes to Server-Side Rendering. Should be present on spans that track such functions.
pub const SENTRY_NEXTJS_SSR_FUNCTION_TYPE: &str = "sentry.nextjs.ssr.function.type";

// Path: model/attributes/sentry/sentry__normalized_db_query.json
/// The normalized version of `db.query.text`.
pub const SENTRY_NORMALIZED_DB_QUERY: &str = "sentry.normalized_db_query";

// Path: model/attributes/sentry/sentry__normalized_db_query__hash.json
/// The hash of `sentry.normalized_db_query`.
pub const SENTRY_NORMALIZED_DB_QUERY_HASH: &str = "sentry.normalized_db_query.hash";

// Path: model/attributes/sentry/sentry__normalized_description.json
/// Used as a generic attribute representing the normalized `sentry.description`. This refers to the legacy use case of `sentry.description` where it holds relevant data depending on the type of span (e.g. database query, resource url, http request description, etc).
pub const SENTRY_NORMALIZED_DESCRIPTION: &str = "sentry.normalized_description";

// Path: model/attributes/sentry/sentry__observed_timestamp_nanos.json
/// The timestamp at which an envelope was received by Relay, in nanoseconds.
pub const SENTRY_OBSERVED_TIMESTAMP_NANOS: &str = "sentry.observed_timestamp_nanos";

// Path: model/attributes/sentry/sentry__op.json
/// The operation of a span.
pub const SENTRY_OP: &str = "sentry.op";

// Path: model/attributes/sentry/sentry__origin.json
/// The origin of the instrumentation (e.g. span, log, etc.)
pub const SENTRY_ORIGIN: &str = "sentry.origin";

// Path: model/attributes/sentry/sentry__platform.json
/// The sdk platform that generated the event.
pub const SENTRY_PLATFORM: &str = "sentry.platform";

// Path: model/attributes/sentry/sentry__profiler_id.json
/// The id of the currently running profiler (continuous profiling)
pub const SENTRY_PROFILER_ID: &str = "sentry.profiler_id";

// Path: model/attributes/sentry/sentry__profile_id.json
/// The ID of the Sentry profile the span is associated with. This is only meaningful for transaction-based profiling.
pub const SENTRY_PROFILE_ID: &str = "sentry.profile_id";

// Path: model/attributes/sentry/sentry__release.json
/// The sentry release.
pub const SENTRY_RELEASE: &str = "sentry.release";

// Path: model/attributes/sentry/sentry__replay_id.json
/// The id of the sentry replay.
pub const SENTRY_REPLAY_ID: &str = "sentry.replay_id";

// Path: model/attributes/sentry/sentry__replay_is_buffering.json
/// A sentinel attribute on log events indicating whether the current Session Replay is being buffered (onErrorSampleRate).
pub const SENTRY_REPLAY_IS_BUFFERING: &str = "sentry.replay_is_buffering";

// Path: model/attributes/sentry/sentry__report_event.json
/// (Deprecated) The event that caused the SDK to report CLS or LCP (pagehide or navigation)
#[deprecated]
pub const SENTRY_REPORT_EVENT: &str = "sentry.report_event";

// Path: model/attributes/sentry/sentry__sdk__integrations.json
/// A list of names identifying enabled integrations. The list shouldhave all enabled integrations, including default integrations. Defaultintegrations are included because different SDK releases may contain differentdefault integrations.
pub const SENTRY_SDK_INTEGRATIONS: &str = "sentry.sdk.integrations";

// Path: model/attributes/sentry/sentry__sdk__name.json
/// The sentry sdk name.
pub const SENTRY_SDK_NAME: &str = "sentry.sdk.name";

// Path: model/attributes/sentry/sentry__sdk__version.json
/// The sentry sdk version.
pub const SENTRY_SDK_VERSION: &str = "sentry.sdk.version";

// Path: model/attributes/sentry/sentry__segment__id.json
/// The segment ID of a span
pub const SENTRY_SEGMENT_ID: &str = "sentry.segment.id";

// Path: model/attributes/sentry/sentry__segment_id.json
/// The segment ID of a span
#[deprecated(note = "Use sentry.segment.id instead.")]
pub const _SENTRY_SEGMENT_ID: &str = "sentry.segment_id";

// Path: model/attributes/sentry/sentry__segment__name.json
/// The segment name of a span
pub const SENTRY_SEGMENT_NAME: &str = "sentry.segment.name";

// Path: model/attributes/sentry/sentry__server_sample_rate.json
/// Rate at which a span was sampled in Relay.
pub const SENTRY_SERVER_SAMPLE_RATE: &str = "sentry.server_sample_rate";

// Path: model/attributes/sentry/sentry__source.json
/// The source of a span, also referred to as transaction source. Known values are:  `'custom'`, `'url'`, `'route'`, `'component'`, `'view'`, `'task'`. '`source`' describes a parametrized route, while `'url'` describes the full URL, potentially containing identifiers.
#[deprecated(note = "Use sentry.span.source instead.")]
pub const SENTRY_SOURCE: &str = "sentry.source";

// Path: model/attributes/sentry/sentry__span__source.json
/// The source of a span, also referred to as transaction source. Known values are:  `'custom'`, `'url'`, `'route'`, `'component'`, `'view'`, `'task'`. '`source`' describes a parametrized route, while `'url'` describes the full URL, potentially containing identifiers.
pub const SENTRY_SPAN_SOURCE: &str = "sentry.span.source";

// Path: model/attributes/sentry/sentry__status_code.json
/// The HTTP status code used in Sentry Insights. Typically set by Sentry during ingestion, rather than by clients.
pub const SENTRY_STATUS_CODE: &str = "sentry.status_code";

// Path: model/attributes/sentry/sentry__status__message.json
/// The from OTLP extracted status message.
pub const SENTRY_STATUS_MESSAGE: &str = "sentry.status.message";

// Path: model/attributes/sentry/sentry__thread__id.json
/// Current “managed” thread ID.
#[deprecated(note = "Use thread.id instead.")]
pub const SENTRY_THREAD_ID: &str = "sentry.thread.id";

// Path: model/attributes/sentry/sentry__timestamp__sequence.json
/// A sequencing counter for deterministic ordering of logs or metrics when timestamps share the same integer millisecond. Starts at 0 on SDK initialization, increments by 1 for each captured item, and resets to 0 when the integer millisecond of the current item differs from the previous one.
pub const SENTRY_TIMESTAMP_SEQUENCE: &str = "sentry.timestamp.sequence";

// Path: model/attributes/sentry/sentry__trace_lifecycle.json
/// Indicates the chosen trace lifecycle mode of the SDK (stream or static)
pub const SENTRY_TRACE_LIFECYCLE: &str = "sentry.trace_lifecycle";

// Path: model/attributes/sentry/sentry__trace__parent_span_id.json
/// The span id of the span that was active when the log was collected. This should not be set if there was no active span.
#[deprecated]
pub const SENTRY_TRACE_PARENT_SPAN_ID: &str = "sentry.trace.parent_span_id";

// Path: model/attributes/sentry/sentry__transaction.json
/// The sentry transaction (segment name).
#[deprecated(note = "Use sentry.segment.name instead.")]
pub const SENTRY_TRANSACTION: &str = "sentry.transaction";

// Path: model/attributes/sentry/sentry__user__email.json
/// User email address.
#[deprecated(note = "Use user.email instead.")]
pub const SENTRY_USER_EMAIL: &str = "sentry.user.email";

// Path: model/attributes/sentry/sentry__user__geo__city.json
/// Human readable city name.
#[deprecated(note = "Use user.geo.city instead.")]
pub const SENTRY_USER_GEO_CITY: &str = "sentry.user.geo.city";

// Path: model/attributes/sentry/sentry__user__geo__country_code.json
/// Two-letter country code (ISO 3166-1 alpha-2).
#[deprecated(note = "Use user.geo.country_code instead.")]
pub const SENTRY_USER_GEO_COUNTRY_CODE: &str = "sentry.user.geo.country_code";

// Path: model/attributes/sentry/sentry__user__geo__region.json
/// Human readable region name or code.
#[deprecated(note = "Use user.geo.region instead.")]
pub const SENTRY_USER_GEO_REGION: &str = "sentry.user.geo.region";

// Path: model/attributes/sentry/sentry__user__geo__subdivision.json
/// Human readable subdivision name.
#[deprecated(note = "Use user.geo.subdivision instead.")]
pub const SENTRY_USER_GEO_SUBDIVISION: &str = "sentry.user.geo.subdivision";

// Path: model/attributes/sentry/sentry__user__id.json
/// Unique identifier of the user.
#[deprecated(note = "Use user.id instead.")]
pub const SENTRY_USER_ID: &str = "sentry.user.id";

// Path: model/attributes/sentry/sentry__user__ip.json
/// The IP address of the user.
#[deprecated(note = "Use user.ip_address instead.")]
pub const SENTRY_USER_IP: &str = "sentry.user.ip";

// Path: model/attributes/sentry/sentry__user__username.json
/// Short name or login/username of the user.
#[deprecated(note = "Use user.name instead.")]
pub const SENTRY_USER_USERNAME: &str = "sentry.user.username";

// Path: model/attributes/server/server__address.json
/// Server domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.
pub const SERVER_ADDRESS: &str = "server.address";

// Path: model/attributes/server/server__port.json
/// Server port number.
pub const SERVER_PORT: &str = "server.port";

// Path: model/attributes/service/service__name.json
/// Logical name of the service.
pub const SERVICE_NAME: &str = "service.name";

// Path: model/attributes/service/service__version.json
/// The version string of the service API or implementation. The format is not defined by these conventions.
pub const SERVICE_VERSION: &str = "service.version";

// Path: model/attributes/session/session__id.json
/// A unique id identifying the active session at the time of setting this attribute
pub const SESSION_ID: &str = "session.id";

// Path: model/attributes/stall_percentage.json
/// The fraction of time the app was stalled. Only applies to React Native. This is computed by Relay.
pub const STALL_PERCENTAGE: &str = "stall_percentage";

// Path: model/attributes/stall_total_time.json
/// The combined duration of all stalls in milliseconds. Only applies to React Native. This is computed by Relay.
pub const STALL_TOTAL_TIME: &str = "stall_total_time";

// Path: model/attributes/state/state__type.json
/// The type of state management library
pub const STATE_TYPE: &str = "state.type";

// Path: model/attributes/thread/thread__id.json
/// Current “managed” thread ID.
pub const THREAD_ID: &str = "thread.id";

// Path: model/attributes/thread/thread__name.json
/// Current thread name.
pub const THREAD_NAME: &str = "thread.name";

// Path: model/attributes/timber/timber__tag.json
/// The log tag provided by the timber logging framework.
pub const TIMBER_TAG: &str = "timber.tag";

// Path: model/attributes/time_to_full_display.json
/// The duration of time to full display in milliseconds
#[deprecated(note = "Use app.vitals.ttfd.value instead.")]
pub const TIME_TO_FULL_DISPLAY: &str = "time_to_full_display";

// Path: model/attributes/time_to_initial_display.json
/// The duration of time to initial display in milliseconds
#[deprecated(note = "Use app.vitals.ttid.value instead.")]
pub const TIME_TO_INITIAL_DISPLAY: &str = "time_to_initial_display";

// Path: model/attributes/transaction.json
/// The sentry transaction (segment name).
#[deprecated(note = "Use sentry.segment.name instead.")]
pub const TRANSACTION: &str = "transaction";

// Path: model/attributes/trpc/trpc__procedure_path.json
/// The path of the tRPC procedure being called
pub const TRPC_PROCEDURE_PATH: &str = "trpc.procedure_path";

// Path: model/attributes/trpc/trpc__procedure_type.json
/// The type of the tRPC procedure
pub const TRPC_PROCEDURE_TYPE: &str = "trpc.procedure_type";

// Path: model/attributes/ttfb.json
/// The value of the recorded Time To First Byte (TTFB) web vital in milliseconds
#[deprecated(note = "Use browser.web_vital.ttfb.value instead.")]
pub const TTFB: &str = "ttfb";

// Path: model/attributes/ttfb/ttfb__requestTime.json
/// The time it takes for the server to process the initial request and send the first byte of a response to the user's browser
#[deprecated(note = "Use browser.web_vital.ttfb.request_time instead.")]
pub const TTFB_REQUESTTIME: &str = "ttfb.requestTime";

// Path: model/attributes/type.json
/// More granular type of the operation happening.
pub const TYPE: &str = "type";

// Path: model/attributes/ui/ui__component_name.json
/// The name of the associated component.
pub const UI_COMPONENT_NAME: &str = "ui.component_name";

// Path: model/attributes/ui/ui__contributes_to_ttfd.json
/// Whether the span execution contributed to the TTFD (time to fully drawn) metric.
pub const UI_CONTRIBUTES_TO_TTFD: &str = "ui.contributes_to_ttfd";

// Path: model/attributes/ui/ui__contributes_to_ttid.json
/// Whether the span execution contributed to the TTID (time to initial display) metric.
pub const UI_CONTRIBUTES_TO_TTID: &str = "ui.contributes_to_ttid";

// Path: model/attributes/ui/ui__element__height.json
/// The height of the UI element (for Html in pixels)
pub const UI_ELEMENT_HEIGHT: &str = "ui.element.height";

// Path: model/attributes/ui/ui__element__id.json
/// The id of the UI element
pub const UI_ELEMENT_ID: &str = "ui.element.id";

// Path: model/attributes/ui/ui__element__identifier.json
/// The identifier used to measure the UI element timing
pub const UI_ELEMENT_IDENTIFIER: &str = "ui.element.identifier";

// Path: model/attributes/ui/ui__element__load_time.json
/// The loading time of a UI element (from time origin to finished loading)
pub const UI_ELEMENT_LOAD_TIME: &str = "ui.element.load_time";

// Path: model/attributes/ui/ui__element__paint_type.json
/// The type of element paint. Can either be 'image-paint' or 'text-paint'
pub const UI_ELEMENT_PAINT_TYPE: &str = "ui.element.paint_type";

// Path: model/attributes/ui/ui__element__render_time.json
/// The rendering time of the UI element (from time origin to finished rendering)
pub const UI_ELEMENT_RENDER_TIME: &str = "ui.element.render_time";

// Path: model/attributes/ui/ui__element__type.json
/// type of the UI element
pub const UI_ELEMENT_TYPE: &str = "ui.element.type";

// Path: model/attributes/ui/ui__element__url.json
/// The URL of the UI element (e.g. an img src)
pub const UI_ELEMENT_URL: &str = "ui.element.url";

// Path: model/attributes/ui/ui__element__width.json
/// The width of the UI element (for HTML in pixels)
pub const UI_ELEMENT_WIDTH: &str = "ui.element.width";

// Path: model/attributes/url.json
/// The URL of the resource that was fetched.
#[deprecated(note = "Use url.full instead.")]
pub const URL: &str = "url";

// Path: model/attributes/url/url__domain.json
/// Server domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.
pub const URL_DOMAIN: &str = "url.domain";

// Path: model/attributes/url/url__fragment.json
/// The fragments present in the URI. Note that this does not contain the leading # character, while the `http.fragment` attribute does.
pub const URL_FRAGMENT: &str = "url.fragment";

// Path: model/attributes/url/url__full.json
/// The URL of the resource that was fetched.
pub const URL_FULL: &str = "url.full";

// Path: model/attributes/url/url__path.json
/// The URI path component.
pub const URL_PATH: &str = "url.path";

// Path: model/attributes/url/url__path__parameter__[key].json
/// Decoded parameters extracted from a URL path. Usually added by client-side routing frameworks like vue-router.
pub const URL_PATH_PARAMETER_KEY: &str = "url.path.parameter.<key>";

// Path: model/attributes/url/url__port.json
/// Server port number.
pub const URL_PORT: &str = "url.port";

// Path: model/attributes/url/url__query.json
/// The query string present in the URL. Note that this does not contain the leading ? character, while the `http.query` attribute does.
pub const URL_QUERY: &str = "url.query";

// Path: model/attributes/url/url__scheme.json
/// The URI scheme component identifying the used protocol.
pub const URL_SCHEME: &str = "url.scheme";

// Path: model/attributes/url/url__template.json
/// The low-cardinality template of an absolute path reference.
pub const URL_TEMPLATE: &str = "url.template";

// Path: model/attributes/user_agent/user_agent__original.json
/// Value of the HTTP User-Agent header sent by the client.
pub const USER_AGENT_ORIGINAL: &str = "user_agent.original";

// Path: model/attributes/user/user__email.json
/// User email address.
pub const USER_EMAIL: &str = "user.email";

// Path: model/attributes/user/user__full_name.json
/// User's full name.
pub const USER_FULL_NAME: &str = "user.full_name";

// Path: model/attributes/user/user__geo__city.json
/// Human readable city name.
pub const USER_GEO_CITY: &str = "user.geo.city";

// Path: model/attributes/user/user__geo__country_code.json
/// Two-letter country code (ISO 3166-1 alpha-2).
pub const USER_GEO_COUNTRY_CODE: &str = "user.geo.country_code";

// Path: model/attributes/user/user__geo__region.json
/// Human readable region name or code.
pub const USER_GEO_REGION: &str = "user.geo.region";

// Path: model/attributes/user/user__geo__subdivision.json
/// Human readable subdivision name.
pub const USER_GEO_SUBDIVISION: &str = "user.geo.subdivision";

// Path: model/attributes/user/user__hash.json
/// Unique user hash to correlate information for a user in anonymized form.
pub const USER_HASH: &str = "user.hash";

// Path: model/attributes/user/user__id.json
/// Unique identifier of the user.
pub const USER_ID: &str = "user.id";

// Path: model/attributes/user/user__ip_address.json
/// The IP address of the user.
pub const USER_IP_ADDRESS: &str = "user.ip_address";

// Path: model/attributes/user/user__name.json
/// Short name or login/username of the user.
pub const USER_NAME: &str = "user.name";

// Path: model/attributes/user/user__roles.json
/// Array of user roles at the time of the event.
pub const USER_ROLES: &str = "user.roles";

// Path: model/attributes/vercel/vercel__branch.json
/// Git branch name for Vercel project
pub const VERCEL_BRANCH: &str = "vercel.branch";

// Path: model/attributes/vercel/vercel__build_id.json
/// Identifier for the Vercel build (only present on build logs)
pub const VERCEL_BUILD_ID: &str = "vercel.build_id";

// Path: model/attributes/vercel/vercel__deployment_id.json
/// Identifier for the Vercel deployment
pub const VERCEL_DEPLOYMENT_ID: &str = "vercel.deployment_id";

// Path: model/attributes/vercel/vercel__destination.json
/// Origin of the external content in Vercel (only on external logs)
pub const VERCEL_DESTINATION: &str = "vercel.destination";

// Path: model/attributes/vercel/vercel__edge_type.json
/// Type of edge runtime in Vercel
pub const VERCEL_EDGE_TYPE: &str = "vercel.edge_type";

// Path: model/attributes/vercel/vercel__entrypoint.json
/// Entrypoint for the request in Vercel
pub const VERCEL_ENTRYPOINT: &str = "vercel.entrypoint";

// Path: model/attributes/vercel/vercel__execution_region.json
/// Region where the request is executed
pub const VERCEL_EXECUTION_REGION: &str = "vercel.execution_region";

// Path: model/attributes/vercel/vercel__id.json
/// Unique identifier for the log entry in Vercel
pub const VERCEL_ID: &str = "vercel.id";

// Path: model/attributes/vercel/vercel__ja3_digest.json
/// JA3 fingerprint digest of Vercel request
pub const VERCEL_JA3_DIGEST: &str = "vercel.ja3_digest";

// Path: model/attributes/vercel/vercel__ja4_digest.json
/// JA4 fingerprint digest
pub const VERCEL_JA4_DIGEST: &str = "vercel.ja4_digest";

// Path: model/attributes/vercel/vercel__log_type.json
/// Vercel log output type
pub const VERCEL_LOG_TYPE: &str = "vercel.log_type";

// Path: model/attributes/vercel/vercel__path.json
/// Function or dynamic path of the request in Vercel.
pub const VERCEL_PATH: &str = "vercel.path";

// Path: model/attributes/vercel/vercel__project_id.json
/// Identifier for the Vercel project
pub const VERCEL_PROJECT_ID: &str = "vercel.project_id";

// Path: model/attributes/vercel/vercel__project_name.json
/// Name of the Vercel project
pub const VERCEL_PROJECT_NAME: &str = "vercel.project_name";

// Path: model/attributes/vercel/vercel__proxy__cache_id.json
/// Original request ID when request is served from cache
pub const VERCEL_PROXY_CACHE_ID: &str = "vercel.proxy.cache_id";

// Path: model/attributes/vercel/vercel__proxy__client_ip.json
/// Client IP address
pub const VERCEL_PROXY_CLIENT_IP: &str = "vercel.proxy.client_ip";

// Path: model/attributes/vercel/vercel__proxy__host.json
/// Hostname of the request
pub const VERCEL_PROXY_HOST: &str = "vercel.proxy.host";

// Path: model/attributes/vercel/vercel__proxy__lambda_region.json
/// Region where lambda function executed
pub const VERCEL_PROXY_LAMBDA_REGION: &str = "vercel.proxy.lambda_region";

// Path: model/attributes/vercel/vercel__proxy__method.json
/// HTTP method of the request
pub const VERCEL_PROXY_METHOD: &str = "vercel.proxy.method";

// Path: model/attributes/vercel/vercel__proxy__path.json
/// Request path with query parameters
pub const VERCEL_PROXY_PATH: &str = "vercel.proxy.path";

// Path: model/attributes/vercel/vercel__proxy__path_type.json
/// How the request was served based on its path and project configuration
pub const VERCEL_PROXY_PATH_TYPE: &str = "vercel.proxy.path_type";

// Path: model/attributes/vercel/vercel__proxy__path_type_variant.json
/// Variant of the path type
pub const VERCEL_PROXY_PATH_TYPE_VARIANT: &str = "vercel.proxy.path_type_variant";

// Path: model/attributes/vercel/vercel__proxy__referer.json
/// Referer of the request
pub const VERCEL_PROXY_REFERER: &str = "vercel.proxy.referer";

// Path: model/attributes/vercel/vercel__proxy__region.json
/// Region where the request is processed
pub const VERCEL_PROXY_REGION: &str = "vercel.proxy.region";

// Path: model/attributes/vercel/vercel__proxy__response_byte_size.json
/// Size of the response in bytes
pub const VERCEL_PROXY_RESPONSE_BYTE_SIZE: &str = "vercel.proxy.response_byte_size";

// Path: model/attributes/vercel/vercel__proxy__scheme.json
/// Protocol of the request
pub const VERCEL_PROXY_SCHEME: &str = "vercel.proxy.scheme";

// Path: model/attributes/vercel/vercel__proxy__status_code.json
/// HTTP status code of the proxy request
pub const VERCEL_PROXY_STATUS_CODE: &str = "vercel.proxy.status_code";

// Path: model/attributes/vercel/vercel__proxy__timestamp.json
/// Unix timestamp when the proxy request was made
pub const VERCEL_PROXY_TIMESTAMP: &str = "vercel.proxy.timestamp";

// Path: model/attributes/vercel/vercel__proxy__user_agent.json
/// User agent strings of the request
pub const VERCEL_PROXY_USER_AGENT: &str = "vercel.proxy.user_agent";

// Path: model/attributes/vercel/vercel__proxy__vercel_cache.json
/// Cache status sent to the browser
pub const VERCEL_PROXY_VERCEL_CACHE: &str = "vercel.proxy.vercel_cache";

// Path: model/attributes/vercel/vercel__proxy__vercel_id.json
/// Vercel-specific identifier
pub const VERCEL_PROXY_VERCEL_ID: &str = "vercel.proxy.vercel_id";

// Path: model/attributes/vercel/vercel__proxy__waf_action.json
/// Action taken by firewall rules
pub const VERCEL_PROXY_WAF_ACTION: &str = "vercel.proxy.waf_action";

// Path: model/attributes/vercel/vercel__proxy__waf_rule_id.json
/// ID of the firewall rule that matched
pub const VERCEL_PROXY_WAF_RULE_ID: &str = "vercel.proxy.waf_rule_id";

// Path: model/attributes/vercel/vercel__request_id.json
/// Identifier of the Vercel request
pub const VERCEL_REQUEST_ID: &str = "vercel.request_id";

// Path: model/attributes/vercel/vercel__source.json
/// Origin of the Vercel log (build, edge, lambda, static, external, or firewall)
pub const VERCEL_SOURCE: &str = "vercel.source";

// Path: model/attributes/vercel/vercel__status_code.json
/// HTTP status code of the request (-1 means no response returned and the lambda crashed)
pub const VERCEL_STATUS_CODE: &str = "vercel.status_code";
