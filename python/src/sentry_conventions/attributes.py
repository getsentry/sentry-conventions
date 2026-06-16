"""A collection of attribute names with helpers to retrieve an attribute's metadata, as defined in the Sentry Semantic Conventions registry."""

# This is an auto-generated file. Do not edit!

import warnings
from dataclasses import dataclass
from enum import Enum
from typing import Dict, List, Literal, Optional, TypedDict, Union

AttributeValue = Union[
    str, int, float, bool, List[str], List[int], List[float], List[bool]
]


class AttributeType(Enum):
    STRING = "string"
    BOOLEAN = "boolean"
    INTEGER = "integer"
    DOUBLE = "double"
    STRING_ARRAY = "string[]"
    BOOLEAN_ARRAY = "boolean[]"
    INTEGER_ARRAY = "integer[]"
    DOUBLE_ARRAY = "double[]"
    ANY = "any"


class IsPii(Enum):
    TRUE = "true"
    FALSE = "false"
    MAYBE = "maybe"


class Visibility(Enum):
    PUBLIC = "public"
    INTERNAL = "internal"


@dataclass
class PiiInfo:
    """Holds information about PII in an attribute's values."""

    isPii: IsPii
    reason: Optional[str] = None


class DeprecationStatus(Enum):
    BACKFILL = "backfill"
    NORMALIZE = "normalize"


@dataclass
class DeprecationInfo:
    """Holds information about a deprecation."""

    replacement: Optional[str] = None
    reason: Optional[str] = None
    status: Optional[DeprecationStatus] = None


@dataclass
class ChangelogEntry:
    """A changelog entry tracking a change to an attribute."""

    version: str
    """The sentry-conventions release version"""

    prs: Optional[List[int]] = None
    """GitHub PR numbers"""

    description: Optional[str] = None
    """Optional description of what changed"""


@dataclass
class AttributeMetadata:
    """The metadata for an attribute."""

    brief: str
    """A description of the attribute"""

    type: AttributeType
    """The type of the attribute value"""

    pii: PiiInfo
    """If an attribute can have pii. Is either true, false or maybe. Optionally include a reason about why it has PII or not"""

    is_in_otel: bool
    """Whether the attribute is defined in OpenTelemetry Semantic Conventions"""

    visibility: Visibility
    """Whether the attribute is public or internal to Sentry"""

    has_dynamic_suffix: Optional[bool] = None
    """If an attribute has a dynamic suffix, for example http.response.header.<key> where <key> is dynamic"""

    example: Optional[AttributeValue] = None
    """An example value of the attribute"""

    deprecation: Optional[DeprecationInfo] = None
    """If an attribute was deprecated, and what it was replaced with"""

    aliases: Optional[List[str]] = None
    """If there are attributes that alias to this attribute"""

    changelog: Optional[List[ChangelogEntry]] = None
    """Changelog entries tracking how this attribute has changed across versions"""

    additional_context: Optional[List[str]] = None
    """A list of freeform notes providing additional context about how this attribute behaves, common pitfalls, or query-time nuances"""


class _AttributeNamesMeta(type):
    _deprecated_names = {
        "AI_CITATIONS",
        "AI_COMPLETION_TOKENS_USED",
        "AI_DOCUMENTS",
        "AI_FINISH_REASON",
        "AI_FREQUENCY_PENALTY",
        "AI_FUNCTION_CALL",
        "AI_GENERATION_ID",
        "AI_INPUT_MESSAGES",
        "AI_IS_SEARCH_REQUIRED",
        "AI_METADATA",
        "AI_MODEL_PROVIDER",
        "AI_MODEL_ID",
        "AI_PIPELINE_NAME",
        "AI_PREAMBLE",
        "AI_PRESENCE_PENALTY",
        "AI_PROMPT_TOKENS_USED",
        "AI_RAW_PROMPTING",
        "AI_RESPONSE_FORMAT",
        "AI_RESPONSES",
        "AI_SEARCH_QUERIES",
        "AI_SEARCH_RESULTS",
        "AI_SEED",
        "AI_STREAMING",
        "AI_TAGS",
        "AI_TEMPERATURE",
        "AI_TEXTS",
        "AI_TOOL_CALLS",
        "AI_TOOLS",
        "AI_TOP_K",
        "AI_TOP_P",
        "AI_TOTAL_COST",
        "AI_TOTAL_TOKENS_USED",
        "AI_WARNINGS",
        "APP_APP_BUILD",
        "APP_APP_IDENTIFIER",
        "APP_APP_NAME",
        "APP_APP_START_TIME",
        "APP_APP_VERSION",
        "APP_START_COLD",
        "APP_START_TYPE",
        "APP_START_WARM",
        "AWS_LAMBDA_AWS_REQUEST_ID",
        "AWS_LAMBDA_FUNCTION_NAME",
        "AWS_LAMBDA_FUNCTION_VERSION",
        "AWS_LAMBDA_INVOKED_FUNCTION_ARN",
        "CLOUDFLARE_D1_QUERY_TYPE",
        "CLS_SOURCE_KEY",
        "CLS",
        "CODE_FILEPATH",
        "CODE_LINENO",
        "CONNECTION_RTT",
        "CONNECTIONTYPE",
        "DB_NAME",
        "DB_OPERATION",
        "DB_SQL_BINDINGS",
        "DB_STATEMENT",
        "DB_SYSTEM",
        "DEVICE_CONNECTION_TYPE",
        "DEVICEMEMORY",
        "EFFECTIVECONNECTIONTYPE",
        "ENVIRONMENT",
        "FCP",
        "FP",
        "FRAMES_DELAY",
        "FRAMES_FROZEN",
        "FRAMES_SLOW",
        "FRAMES_TOTAL",
        "FS_ERROR",
        "GEN_AI_PROMPT",
        "GEN_AI_REQUEST_AVAILABLE_TOOLS",
        "GEN_AI_REQUEST_MESSAGES",
        "GEN_AI_RESPONSE_TEXT",
        "GEN_AI_RESPONSE_TIME_TO_FIRST_TOKEN",
        "GEN_AI_RESPONSE_TOOL_CALLS",
        "GEN_AI_SYSTEM",
        "GEN_AI_SYSTEM_MESSAGE",
        "GEN_AI_TOOL_INPUT",
        "GEN_AI_TOOL_MESSAGE",
        "GEN_AI_TOOL_OUTPUT",
        "GEN_AI_TOOL_TYPE",
        "GEN_AI_USAGE_COMPLETION_TOKENS",
        "GEN_AI_USAGE_INPUT_TOKENS_CACHE_WRITE",
        "GEN_AI_USAGE_INPUT_TOKENS_CACHED",
        "GEN_AI_USAGE_OUTPUT_TOKENS_REASONING",
        "GEN_AI_USAGE_PROMPT_TOKENS",
        "HARDWARECONCURRENCY",
        "HTTP_CLIENT_IP",
        "HTTP_FLAVOR",
        "HTTP_HOST",
        "HTTP_METHOD",
        "_HTTP_REQUEST_METHOD",
        "HTTP_RESPONSE_CONTENT_LENGTH",
        "HTTP_RESPONSE_TRANSFER_SIZE",
        "HTTP_SCHEME",
        "HTTP_SERVER_NAME",
        "HTTP_STATUS_CODE",
        "HTTP_TARGET",
        "HTTP_URL",
        "HTTP_USER_AGENT",
        "INP",
        "LCP_ELEMENT",
        "LCP_ID",
        "LCP_LOADTIME",
        "LCP_RENDERTIME",
        "LCP_SIZE",
        "LCP_URL",
        "LCP",
        "MCP_PROMPT_NAME",
        "MCP_REQUEST_ID",
        "MCP_RESOURCE_PROTOCOL",
        "MCP_TOOL_NAME",
        "MCP_TOOL_RESULT_CONTENT",
        "MCP_TOOL_RESULT_IS_ERROR",
        "MCP_TRANSPORT",
        "METHOD",
        "NET_HOST_IP",
        "NET_HOST_NAME",
        "NET_HOST_PORT",
        "NET_PEER_IP",
        "NET_PEER_NAME",
        "NET_PEER_PORT",
        "NET_PROTOCOL_NAME",
        "NET_PROTOCOL_VERSION",
        "NET_SOCK_FAMILY",
        "NET_SOCK_HOST_ADDR",
        "NET_SOCK_HOST_PORT",
        "NET_SOCK_PEER_ADDR",
        "NET_SOCK_PEER_NAME",
        "NET_SOCK_PEER_PORT",
        "NET_TRANSPORT",
        "OS_BUILD",
        "PERFORMANCE_ACTIVATIONSTART",
        "PERFORMANCE_TIMEORIGIN",
        "QUERY_KEY",
        "RELEASE",
        "REPLAY_ID",
        "RESOURCE_DEPLOYMENT_ENVIRONMENT",
        "RESOURCE_DEPLOYMENT_ENVIRONMENT_NAME",
        "ROUTE",
        "RUNTIME_BUILD",
        "RUNTIME_NAME",
        "RUNTIME_RAW_DESCRIPTION",
        "RUNTIME_VERSION",
        "SENTRY_BROWSER_NAME",
        "SENTRY_BROWSER_VERSION",
        "SENTRY_REPORT_EVENT",
        "_SENTRY_SEGMENT_ID",
        "SENTRY_SOURCE",
        "SENTRY_TRACE_PARENT_SPAN_ID",
        "SENTRY_TRANSACTION",
        "SENTRY_USER_EMAIL",
        "SENTRY_USER_GEO_CITY",
        "SENTRY_USER_GEO_COUNTRY_CODE",
        "SENTRY_USER_GEO_REGION",
        "SENTRY_USER_GEO_SUBDIVISION",
        "SENTRY_USER_ID",
        "SENTRY_USER_IP",
        "SENTRY_USER_USERNAME",
        "TIME_TO_FULL_DISPLAY",
        "TIME_TO_INITIAL_DISPLAY",
        "TRANSACTION",
        "TTFB_REQUESTTIME",
        "TTFB",
        "URL",
    }

    def __getattribute__(cls, name: str):
        if name == "_deprecated_names":
            return super().__getattribute__(name)
        if name in cls._deprecated_names:
            warnings.warn(
                f"{cls.__name__}.{name} is deprecated.",
                DeprecationWarning,
                stacklevel=2,
            )
        return super().__getattribute__(name)


class ATTRIBUTE_NAMES(metaclass=_AttributeNamesMeta):
    """Contains all attribute names as class attributes with their documentation."""

    # Path: model/attributes/ai/ai__citations.json
    AI_CITATIONS: Literal["ai.citations"] = "ai.citations"
    """References or sources cited by the AI model in its response.

    Type: List[str]
    Contains PII: true
    Defined in OTEL: No
    Visibility: public
    DEPRECATED: No replacement at this time
    Example: ["Citation 1","Citation 2"]
    """

    # Path: model/attributes/ai/ai__completion_tokens__used.json
    AI_COMPLETION_TOKENS_USED: Literal["ai.completion_tokens.used"] = (
        "ai.completion_tokens.used"
    )
    """The number of tokens used to respond to the message.

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: gen_ai.usage.output_tokens, gen_ai.usage.completion_tokens
    DEPRECATED: Use gen_ai.usage.output_tokens instead
    Example: 10
    """

    # Path: model/attributes/ai/ai__documents.json
    AI_DOCUMENTS: Literal["ai.documents"] = "ai.documents"
    """Documents or content chunks used as context for the AI model.

    Type: List[str]
    Contains PII: true
    Defined in OTEL: No
    Visibility: public
    DEPRECATED: No replacement at this time
    Example: ["document1.txt","document2.pdf"]
    """

    # Path: model/attributes/ai/ai__finish_reason.json
    AI_FINISH_REASON: Literal["ai.finish_reason"] = "ai.finish_reason"
    """The reason why the model stopped generating.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: gen_ai.response.finish_reasons
    DEPRECATED: Use gen_ai.response.finish_reasons instead
    Example: "COMPLETE"
    """

    # Path: model/attributes/ai/ai__frequency_penalty.json
    AI_FREQUENCY_PENALTY: Literal["ai.frequency_penalty"] = "ai.frequency_penalty"
    """Used to reduce repetitiveness of generated tokens. The higher the value, the stronger a penalty is applied to previously present tokens, proportional to how many times they have already appeared in the prompt or prior generation.

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: gen_ai.request.frequency_penalty
    DEPRECATED: Use gen_ai.request.frequency_penalty instead
    Example: 0.5
    """

    # Path: model/attributes/ai/ai__function_call.json
    AI_FUNCTION_CALL: Literal["ai.function_call"] = "ai.function_call"
    """For an AI model call, the function that was called. This is deprecated for OpenAI, and replaced by tool_calls

    Type: str
    Contains PII: true
    Defined in OTEL: No
    Visibility: public
    Aliases: gen_ai.tool.name, mcp.tool.name
    DEPRECATED: Use gen_ai.tool.name instead
    Example: "function_name"
    """

    # Path: model/attributes/ai/ai__generation_id.json
    AI_GENERATION_ID: Literal["ai.generation_id"] = "ai.generation_id"
    """Unique identifier for the completion.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: gen_ai.response.id
    DEPRECATED: Use gen_ai.response.id instead
    Example: "gen_123abc"
    """

    # Path: model/attributes/ai/ai__input_messages.json
    AI_INPUT_MESSAGES: Literal["ai.input_messages"] = "ai.input_messages"
    """The input messages sent to the model

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: gen_ai.request.messages
    DEPRECATED: Use gen_ai.input.messages instead
    Example: "[{\"role\": \"user\", \"message\": \"hello\"}]"
    """

    # Path: model/attributes/ai/ai__is_search_required.json
    AI_IS_SEARCH_REQUIRED: Literal["ai.is_search_required"] = "ai.is_search_required"
    """Boolean indicating if the model needs to perform a search.

    Type: bool
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    DEPRECATED: No replacement at this time
    Example: false
    """

    # Path: model/attributes/ai/ai__metadata.json
    AI_METADATA: Literal["ai.metadata"] = "ai.metadata"
    """Extra metadata passed to an AI pipeline step.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    DEPRECATED: No replacement at this time
    Example: "{\"user_id\": 123, \"session_id\": \"abc123\"}"
    """

    # Path: model/attributes/ai/ai__model__provider.json
    AI_MODEL_PROVIDER: Literal["ai.model.provider"] = "ai.model.provider"
    """The provider of the model.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: gen_ai.provider.name, gen_ai.system
    DEPRECATED: Use gen_ai.provider.name instead
    Example: "openai"
    """

    # Path: model/attributes/ai/ai__model_id.json
    AI_MODEL_ID: Literal["ai.model_id"] = "ai.model_id"
    """The vendor-specific ID of the model used.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: gen_ai.response.model
    DEPRECATED: Use gen_ai.response.model instead
    Example: "gpt-4"
    """

    # Path: model/attributes/ai/ai__pipeline__name.json
    AI_PIPELINE_NAME: Literal["ai.pipeline.name"] = "ai.pipeline.name"
    """The name of the AI pipeline.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: gen_ai.pipeline.name
    DEPRECATED: Use gen_ai.pipeline.name instead
    Example: "Autofix Pipeline"
    """

    # Path: model/attributes/ai/ai__preamble.json
    AI_PREAMBLE: Literal["ai.preamble"] = "ai.preamble"
    """For an AI model call, the preamble parameter. Preambles are a part of the prompt used to adjust the model's overall behavior and conversation style.

    Type: str
    Contains PII: true
    Defined in OTEL: No
    Visibility: public
    Aliases: gen_ai.system_instructions
    DEPRECATED: Use gen_ai.system_instructions instead
    Example: "You are now a clown."
    """

    # Path: model/attributes/ai/ai__presence_penalty.json
    AI_PRESENCE_PENALTY: Literal["ai.presence_penalty"] = "ai.presence_penalty"
    """Used to reduce repetitiveness of generated tokens. Similar to frequency_penalty, except that this penalty is applied equally to all tokens that have already appeared, regardless of their exact frequencies.

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: gen_ai.request.presence_penalty
    DEPRECATED: Use gen_ai.request.presence_penalty instead
    Example: 0.5
    """

    # Path: model/attributes/ai/ai__prompt_tokens__used.json
    AI_PROMPT_TOKENS_USED: Literal["ai.prompt_tokens.used"] = "ai.prompt_tokens.used"
    """The number of tokens used to process just the prompt.

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: gen_ai.usage.prompt_tokens, gen_ai.usage.input_tokens
    DEPRECATED: Use gen_ai.usage.input_tokens instead
    Example: 20
    """

    # Path: model/attributes/ai/ai__raw_prompting.json
    AI_RAW_PROMPTING: Literal["ai.raw_prompting"] = "ai.raw_prompting"
    """When enabled, the user’s prompt will be sent to the model without any pre-processing.

    Type: bool
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    DEPRECATED: No replacement at this time
    Example: true
    """

    # Path: model/attributes/ai/ai__response_format.json
    AI_RESPONSE_FORMAT: Literal["ai.response_format"] = "ai.response_format"
    """For an AI model call, the format of the response

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    DEPRECATED: No replacement at this time
    Example: "json_object"
    """

    # Path: model/attributes/ai/ai__responses.json
    AI_RESPONSES: Literal["ai.responses"] = "ai.responses"
    """The response messages sent back by the AI model.

    Type: List[str]
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    DEPRECATED: Use gen_ai.output.messages instead
    Example: ["hello","world"]
    """

    # Path: model/attributes/ai/ai__search_queries.json
    AI_SEARCH_QUERIES: Literal["ai.search_queries"] = "ai.search_queries"
    """Queries used to search for relevant context or documents.

    Type: List[str]
    Contains PII: true
    Defined in OTEL: No
    Visibility: public
    DEPRECATED: No replacement at this time
    Example: ["climate change effects","renewable energy"]
    """

    # Path: model/attributes/ai/ai__search_results.json
    AI_SEARCH_RESULTS: Literal["ai.search_results"] = "ai.search_results"
    """Results returned from search queries for context.

    Type: List[str]
    Contains PII: true
    Defined in OTEL: No
    Visibility: public
    DEPRECATED: No replacement at this time
    Example: ["search_result_1, search_result_2"]
    """

    # Path: model/attributes/ai/ai__seed.json
    AI_SEED: Literal["ai.seed"] = "ai.seed"
    """The seed, ideally models given the same seed and same other parameters will produce the exact same output.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: gen_ai.request.seed
    DEPRECATED: Use gen_ai.request.seed instead
    Example: "1234567890"
    """

    # Path: model/attributes/ai/ai__streaming.json
    AI_STREAMING: Literal["ai.streaming"] = "ai.streaming"
    """Whether the request was streamed back.

    Type: bool
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: gen_ai.response.streaming
    DEPRECATED: Use gen_ai.response.streaming instead
    Example: true
    """

    # Path: model/attributes/ai/ai__tags.json
    AI_TAGS: Literal["ai.tags"] = "ai.tags"
    """Tags that describe an AI pipeline step.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    DEPRECATED: No replacement at this time
    Example: "{\"executed_function\": \"add_integers\"}"
    """

    # Path: model/attributes/ai/ai__temperature.json
    AI_TEMPERATURE: Literal["ai.temperature"] = "ai.temperature"
    """For an AI model call, the temperature parameter. Temperature essentially means how random the output will be.

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: gen_ai.request.temperature
    DEPRECATED: Use gen_ai.request.temperature instead
    Example: 0.1
    """

    # Path: model/attributes/ai/ai__texts.json
    AI_TEXTS: Literal["ai.texts"] = "ai.texts"
    """Raw text inputs provided to the model.

    Type: List[str]
    Contains PII: true
    Defined in OTEL: No
    Visibility: public
    Aliases: gen_ai.input.messages
    DEPRECATED: Use gen_ai.input.messages instead
    Example: ["Hello, how are you?","What is the capital of France?"]
    """

    # Path: model/attributes/ai/ai__tool_calls.json
    AI_TOOL_CALLS: Literal["ai.tool_calls"] = "ai.tool_calls"
    """For an AI model call, the tool calls that were made.

    Type: List[str]
    Contains PII: true
    Defined in OTEL: No
    Visibility: public
    DEPRECATED: Use gen_ai.output.messages instead
    Example: ["tool_call_1","tool_call_2"]
    """

    # Path: model/attributes/ai/ai__tools.json
    AI_TOOLS: Literal["ai.tools"] = "ai.tools"
    """For an AI model call, the functions that are available

    Type: List[str]
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    DEPRECATED: Use gen_ai.tool.definitions instead
    Example: ["function_1","function_2"]
    """

    # Path: model/attributes/ai/ai__top_k.json
    AI_TOP_K: Literal["ai.top_k"] = "ai.top_k"
    """Limits the model to only consider the K most likely next tokens, where K is an integer (e.g., top_k=20 means only the 20 highest probability tokens are considered).

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: gen_ai.request.top_k
    DEPRECATED: Use gen_ai.request.top_k instead
    Example: 35
    """

    # Path: model/attributes/ai/ai__top_p.json
    AI_TOP_P: Literal["ai.top_p"] = "ai.top_p"
    """Limits the model to only consider tokens whose cumulative probability mass adds up to p, where p is a float between 0 and 1 (e.g., top_p=0.7 means only tokens that sum up to 70% of the probability mass are considered).

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: gen_ai.request.top_p
    DEPRECATED: Use gen_ai.request.top_p instead
    Example: 0.7
    """

    # Path: model/attributes/ai/ai__total_cost.json
    AI_TOTAL_COST: Literal["ai.total_cost"] = "ai.total_cost"
    """The total cost for the tokens used.

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: gen_ai.cost.total_tokens
    DEPRECATED: Use gen_ai.cost.total_tokens instead
    Example: 12.34
    """

    # Path: model/attributes/ai/ai__total_tokens__used.json
    AI_TOTAL_TOKENS_USED: Literal["ai.total_tokens.used"] = "ai.total_tokens.used"
    """The total number of tokens used to process the prompt.

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: gen_ai.usage.total_tokens
    DEPRECATED: Use gen_ai.usage.total_tokens instead
    Example: 30
    """

    # Path: model/attributes/ai/ai__warnings.json
    AI_WARNINGS: Literal["ai.warnings"] = "ai.warnings"
    """Warning messages generated during model execution.

    Type: List[str]
    Contains PII: true
    Defined in OTEL: No
    Visibility: public
    DEPRECATED: No replacement at this time
    Example: ["Token limit exceeded"]
    """

    # Path: model/attributes/angular/angular__version.json
    ANGULAR_VERSION: Literal["angular.version"] = "angular.version"
    """The version of the Angular framework

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "17.1.0"
    """

    # Path: model/attributes/app/app__app_build.json
    APP_APP_BUILD: Literal["app.app_build"] = "app.app_build"
    """Internal build identifier, as it appears on the platform.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: app.build
    DEPRECATED: Use app.build instead - Deprecated in favor of app.build
    Example: "1"
    """

    # Path: model/attributes/app/app__app_identifier.json
    APP_APP_IDENTIFIER: Literal["app.app_identifier"] = "app.app_identifier"
    """Version-independent application identifier, often a dotted bundle ID.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: app.identifier
    DEPRECATED: Use app.identifier instead - Deprecated in favor of app.identifier
    Example: "com.example.myapp"
    """

    # Path: model/attributes/app/app__app_name.json
    APP_APP_NAME: Literal["app.app_name"] = "app.app_name"
    """Human readable application name, as it appears on the platform.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: app.name
    DEPRECATED: Use app.name instead - Deprecated in favor of app.name
    Example: "My App"
    """

    # Path: model/attributes/app/app__app_start_time.json
    APP_APP_START_TIME: Literal["app.app_start_time"] = "app.app_start_time"
    """Formatted UTC timestamp when the user started the application.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: app.start_time
    DEPRECATED: Use app.start_time instead - Deprecated in favor of app.start_time
    Example: "2025-01-01T00:00:00.000Z"
    """

    # Path: model/attributes/app/app__app_version.json
    APP_APP_VERSION: Literal["app.app_version"] = "app.app_version"
    """Human readable application version, as it appears on the platform.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: app.version
    DEPRECATED: Use app.version instead - Deprecated in favor of app.version
    Example: "1.0.0"
    """

    # Path: model/attributes/app/app__build.json
    APP_BUILD: Literal["app.build"] = "app.build"
    """Internal build identifier, as it appears on the platform.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: app.app_build
    Example: "1"
    """

    # Path: model/attributes/app/app__identifier.json
    APP_IDENTIFIER: Literal["app.identifier"] = "app.identifier"
    """Version-independent application identifier, often a dotted bundle ID.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: app.app_identifier
    Example: "com.example.myapp"
    """

    # Path: model/attributes/app/app__in_foreground.json
    APP_IN_FOREGROUND: Literal["app.in_foreground"] = "app.in_foreground"
    """Whether the application is currently in the foreground.

    Type: bool
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: true
    """

    # Path: model/attributes/app/app__name.json
    APP_NAME: Literal["app.name"] = "app.name"
    """Human readable application name, as it appears on the platform.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: app.app_name
    Example: "My App"
    """

    # Path: model/attributes/app/app__start_time.json
    APP_START_TIME: Literal["app.start_time"] = "app.start_time"
    """Formatted UTC timestamp when the user started the application.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: app.app_start_time
    Example: "2025-01-01T00:00:00.000Z"
    """

    # Path: model/attributes/app/app__version.json
    APP_VERSION: Literal["app.version"] = "app.version"
    """Human readable application version, as it appears on the platform.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: app.app_version
    Example: "1.0.0"
    """

    # Path: model/attributes/app/app__vitals__frames__delay__value.json
    APP_VITALS_FRAMES_DELAY_VALUE: Literal["app.vitals.frames.delay.value"] = (
        "app.vitals.frames.delay.value"
    )
    """The sum of all delayed frame durations in seconds during the lifetime of the span. For more information see [frames delay](https://develop.sentry.dev/sdk/performance/frames-delay/).

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: frames.delay
    Example: 5
    """

    # Path: model/attributes/app/app__vitals__frames__frozen__count.json
    APP_VITALS_FRAMES_FROZEN_COUNT: Literal["app.vitals.frames.frozen.count"] = (
        "app.vitals.frames.frozen.count"
    )
    """The number of frozen frames rendered during the lifetime of the span.

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: frames.frozen
    Example: 3
    """

    # Path: model/attributes/app/app__vitals__frames__slow__count.json
    APP_VITALS_FRAMES_SLOW_COUNT: Literal["app.vitals.frames.slow.count"] = (
        "app.vitals.frames.slow.count"
    )
    """The number of slow frames rendered during the lifetime of the span.

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: frames.slow
    Example: 1
    """

    # Path: model/attributes/app/app__vitals__frames__total__count.json
    APP_VITALS_FRAMES_TOTAL_COUNT: Literal["app.vitals.frames.total.count"] = (
        "app.vitals.frames.total.count"
    )
    """The number of total frames rendered during the lifetime of the span.

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: frames.total
    Example: 60
    """

    # Path: model/attributes/app/app__vitals__start__cold__value.json
    APP_VITALS_START_COLD_VALUE: Literal["app.vitals.start.cold.value"] = (
        "app.vitals.start.cold.value"
    )
    """The duration of a cold app start in milliseconds

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: app_start_cold
    Example: 1234.56
    """

    # Path: model/attributes/app/app__vitals__start__prewarmed.json
    APP_VITALS_START_PREWARMED: Literal["app.vitals.start.prewarmed"] = (
        "app.vitals.start.prewarmed"
    )
    """Whether the app start was prewarmed.

    Type: bool
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: true
    """

    # Path: model/attributes/app/app__vitals__start__reason.json
    APP_VITALS_START_REASON: Literal["app.vitals.start.reason"] = (
        "app.vitals.start.reason"
    )
    """The reason that triggered the app start.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "push"
    """

    # Path: model/attributes/app/app__vitals__start__screen.json
    APP_VITALS_START_SCREEN: Literal["app.vitals.start.screen"] = (
        "app.vitals.start.screen"
    )
    """The screen that is rendered when the app start is complete. This is the screen the user first sees and can interact with after launch. The absence of this attribute on the app start span indicates a background app start where no UI was rendered.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "MainActivity"
    """

    # Path: model/attributes/app/app__vitals__start__type.json
    APP_VITALS_START_TYPE: Literal["app.vitals.start.type"] = "app.vitals.start.type"
    """The type of app start, for example `cold` or `warm`

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: app_start_type
    Example: "cold"
    """

    # Path: model/attributes/app/app__vitals__start__warm__value.json
    APP_VITALS_START_WARM_VALUE: Literal["app.vitals.start.warm.value"] = (
        "app.vitals.start.warm.value"
    )
    """The duration of a warm app start in milliseconds

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: app_start_warm
    Example: 1234.56
    """

    # Path: model/attributes/app/app__vitals__ttfd__value.json
    APP_VITALS_TTFD_VALUE: Literal["app.vitals.ttfd.value"] = "app.vitals.ttfd.value"
    """The duration of time to full display in milliseconds

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: time_to_full_display
    Example: 1234.56
    """

    # Path: model/attributes/app/app__vitals__ttid__value.json
    APP_VITALS_TTID_VALUE: Literal["app.vitals.ttid.value"] = "app.vitals.ttid.value"
    """The duration of time to initial display in milliseconds

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: time_to_initial_display
    Example: 1234.56
    """

    # Path: model/attributes/app_start_cold.json
    APP_START_COLD: Literal["app_start_cold"] = "app_start_cold"
    """The duration of a cold app start in milliseconds

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: app.vitals.start.cold.value
    DEPRECATED: Use app.vitals.start.cold.value instead - Replaced by app.vitals.start.cold.value to align with the app.vitals.* namespace for mobile performance attributes
    Example: 1234.56
    """

    # Path: model/attributes/app_start_type.json
    APP_START_TYPE: Literal["app_start_type"] = "app_start_type"
    """Mobile app start variant. Either cold or warm.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: app.vitals.start.type
    DEPRECATED: Use app.vitals.start.type instead - Replaced by app.vitals.start.type to align with the app.vitals.* namespace for mobile performance attributes
    Example: "cold"
    """

    # Path: model/attributes/app_start_warm.json
    APP_START_WARM: Literal["app_start_warm"] = "app_start_warm"
    """The duration of a warm app start in milliseconds

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: app.vitals.start.warm.value
    DEPRECATED: Use app.vitals.start.warm.value instead - Replaced by app.vitals.start.warm.value to align with the app.vitals.* namespace for mobile performance attributes
    Example: 1234.56
    """

    # Path: model/attributes/art/art__gc__blocking_count.json
    ART_GC_BLOCKING_COUNT: Literal["art.gc.blocking_count"] = "art.gc.blocking_count"
    """Total number of blocking (stop-the-world) garbage collections performed by the Android Runtime

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 1
    """

    # Path: model/attributes/art/art__gc__blocking_time.json
    ART_GC_BLOCKING_TIME: Literal["art.gc.blocking_time"] = "art.gc.blocking_time"
    """Total time spent in blocking (stop-the-world) garbage collections by the Android Runtime, in milliseconds

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 11.873
    """

    # Path: model/attributes/art/art__gc__pre_oome_count.json
    ART_GC_PRE_OOME_COUNT: Literal["art.gc.pre_oome_count"] = "art.gc.pre_oome_count"
    """Total number of garbage collections triggered as a last resort before an OutOfMemoryError by the Android Runtime

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 0
    """

    # Path: model/attributes/art/art__gc__total_count.json
    ART_GC_TOTAL_COUNT: Literal["art.gc.total_count"] = "art.gc.total_count"
    """Total number of garbage collections performed by the Android Runtime

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 1
    """

    # Path: model/attributes/art/art__gc__total_time.json
    ART_GC_TOTAL_TIME: Literal["art.gc.total_time"] = "art.gc.total_time"
    """Total time spent in garbage collection by the Android Runtime, in milliseconds

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 11.807
    """

    # Path: model/attributes/art/art__gc__waiting_time.json
    ART_GC_WAITING_TIME: Literal["art.gc.waiting_time"] = "art.gc.waiting_time"
    """Total time threads spent waiting for garbage collection to complete in the Android Runtime, in milliseconds

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 8.054
    """

    # Path: model/attributes/art/art__memory__free.json
    ART_MEMORY_FREE: Literal["art.memory.free"] = "art.memory.free"
    """Free memory available to the process as reported by the Android Runtime, in bytes

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 3181568
    """

    # Path: model/attributes/art/art__memory__free_until_gc.json
    ART_MEMORY_FREE_UNTIL_GC: Literal["art.memory.free_until_gc"] = (
        "art.memory.free_until_gc"
    )
    """Free memory available before a garbage collection would be triggered by the Android Runtime, in bytes

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 3181568
    """

    # Path: model/attributes/art/art__memory__free_until_oome.json
    ART_MEMORY_FREE_UNTIL_OOME: Literal["art.memory.free_until_oome"] = (
        "art.memory.free_until_oome"
    )
    """Free memory available before an OutOfMemoryError would be thrown by the Android Runtime, in bytes

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 196083712
    """

    # Path: model/attributes/art/art__memory__max.json
    ART_MEMORY_MAX: Literal["art.memory.max"] = "art.memory.max"
    """Maximum memory the process is allowed to use as reported by the Android Runtime, in bytes

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 201326592
    """

    # Path: model/attributes/art/art__memory__total.json
    ART_MEMORY_TOTAL: Literal["art.memory.total"] = "art.memory.total"
    """Total memory currently allocated to the process by the Android Runtime, in bytes

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 7774208
    """

    # Path: model/attributes/aws/aws__cloudwatch__logs__log_group.json
    AWS_CLOUDWATCH_LOGS_LOG_GROUP: Literal["aws.cloudwatch.logs.log_group"] = (
        "aws.cloudwatch.logs.log_group"
    )
    """The name of the CloudWatch Logs log group

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "/aws/lambda/my-function"
    """

    # Path: model/attributes/aws/aws__cloudwatch__logs__log_stream.json
    AWS_CLOUDWATCH_LOGS_LOG_STREAM: Literal["aws.cloudwatch.logs.log_stream"] = (
        "aws.cloudwatch.logs.log_stream"
    )
    """The name of the CloudWatch Logs log stream

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "2024/01/01/[$LATEST]abcdef1234567890"
    """

    # Path: model/attributes/aws/aws__cloudwatch__logs__url.json
    AWS_CLOUDWATCH_LOGS_URL: Literal["aws.cloudwatch.logs.url"] = (
        "aws.cloudwatch.logs.url"
    )
    """The URL to the CloudWatch Logs log group

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "https://console.aws.amazon.com/cloudwatch/home?region=us-east-1#logsV2:log-groups/log-group/my-log-group"
    """

    # Path: model/attributes/aws/aws__lambda__aws_request_id.json
    AWS_LAMBDA_AWS_REQUEST_ID: Literal["aws.lambda.aws_request_id"] = (
        "aws.lambda.aws_request_id"
    )
    """The AWS request ID as received by the Lambda function runtime

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: faas.invocation_id
    DEPRECATED: Use faas.invocation_id instead - This attribute is being deprecated in favor of faas.invocation_id
    Example: "8476a536-e9f4-11e8-9739-2dfe598c3fcd"
    """

    # Path: model/attributes/aws/aws__lambda__execution_duration_in_millis.json
    AWS_LAMBDA_EXECUTION_DURATION_IN_MILLIS: Literal[
        "aws.lambda.execution_duration_in_millis"
    ] = "aws.lambda.execution_duration_in_millis"
    """The execution duration of the Lambda function invocation in milliseconds

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 1234.56
    """

    # Path: model/attributes/aws/aws__lambda__function_name.json
    AWS_LAMBDA_FUNCTION_NAME: Literal["aws.lambda.function_name"] = (
        "aws.lambda.function_name"
    )
    """The name of the Lambda function

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: faas.name
    DEPRECATED: Use faas.name instead - Use the OTel-aligned faas.name attribute instead
    Example: "my-function"
    """

    # Path: model/attributes/aws/aws__lambda__function_version.json
    AWS_LAMBDA_FUNCTION_VERSION: Literal["aws.lambda.function_version"] = (
        "aws.lambda.function_version"
    )
    """The version of the Lambda function

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: faas.version
    DEPRECATED: Use faas.version instead - Use the OTel-aligned faas.version attribute instead
    Example: "$LATEST"
    """

    # Path: model/attributes/aws/aws__lambda__invoked_arn.json
    AWS_LAMBDA_INVOKED_ARN: Literal["aws.lambda.invoked_arn"] = "aws.lambda.invoked_arn"
    """The full ARN of the Lambda function that was invoked

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: aws.lambda.invoked_function_arn
    Example: "arn:aws:lambda:us-east-1:123456789012:function:my-function"
    """

    # Path: model/attributes/aws/aws__lambda__invoked_function_arn.json
    AWS_LAMBDA_INVOKED_FUNCTION_ARN: Literal["aws.lambda.invoked_function_arn"] = (
        "aws.lambda.invoked_function_arn"
    )
    """The full ARN of the Lambda function that was invoked

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: aws.lambda.invoked_arn
    DEPRECATED: Use aws.lambda.invoked_arn instead - This attribute is being deprecated in favor of aws.lambda.invoked_arn
    Example: "arn:aws:lambda:us-east-1:123456789012:function:my-function"
    """

    # Path: model/attributes/aws/aws__lambda__remaining_time_in_millis.json
    AWS_LAMBDA_REMAINING_TIME_IN_MILLIS: Literal[
        "aws.lambda.remaining_time_in_millis"
    ] = "aws.lambda.remaining_time_in_millis"
    """The remaining time in milliseconds before the Lambda function times out

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 5000
    """

    # Path: model/attributes/aws/aws__log__group__names.json
    AWS_LOG_GROUP_NAMES: Literal["aws.log.group.names"] = "aws.log.group.names"
    """The name(s) of the AWS log group(s) an application is writing to.

    Type: List[str]
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: ["/aws/lambda/my-function","opentelemetry-service"]
    """

    # Path: model/attributes/aws/aws__log__stream__names.json
    AWS_LOG_STREAM_NAMES: Literal["aws.log.stream.names"] = "aws.log.stream.names"
    """The name(s) of the AWS log stream(s) an application is writing to.

    Type: List[str]
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: ["logs/main/10838bed-421f-43ef-870a-f43feacbbb5b"]
    """

    # Path: model/attributes/blocked_main_thread.json
    BLOCKED_MAIN_THREAD: Literal["blocked_main_thread"] = "blocked_main_thread"
    """Whether the main thread was blocked by the span.

    Type: bool
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: true
    """

    # Path: model/attributes/browser/browser__name.json
    BROWSER_NAME: Literal["browser.name"] = "browser.name"
    """The name of the browser.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: sentry.browser.name
    Example: "Chrome"
    """

    # Path: model/attributes/browser/browser__performance__navigation__activation_start.json
    BROWSER_PERFORMANCE_NAVIGATION_ACTIVATION_START: Literal[
        "browser.performance.navigation.activation_start"
    ] = "browser.performance.navigation.activation_start"
    """The time between initiating a navigation to a page and the browser activating the page

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: performance.activationStart
    Example: 1.983
    """

    # Path: model/attributes/browser/browser__performance__time_origin.json
    BROWSER_PERFORMANCE_TIME_ORIGIN: Literal["browser.performance.time_origin"] = (
        "browser.performance.time_origin"
    )
    """The browser's performance.timeOrigin timestamp representing the time when the pageload was initiated

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: performance.timeOrigin
    Example: 1776185678.886
    """

    # Path: model/attributes/browser/browser__report__type.json
    BROWSER_REPORT_TYPE: Literal["browser.report.type"] = "browser.report.type"
    """A browser report sent via reporting API..

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "network-error"
    """

    # Path: model/attributes/browser/browser__script__invoker.json
    BROWSER_SCRIPT_INVOKER: Literal["browser.script.invoker"] = "browser.script.invoker"
    """How a script was called in the browser.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "Window.requestAnimationFrame"
    """

    # Path: model/attributes/browser/browser__script__invoker_type.json
    BROWSER_SCRIPT_INVOKER_TYPE: Literal["browser.script.invoker_type"] = (
        "browser.script.invoker_type"
    )
    """Browser script entry point type.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "event-listener"
    """

    # Path: model/attributes/browser/browser__script__source_char_position.json
    BROWSER_SCRIPT_SOURCE_CHAR_POSITION: Literal[
        "browser.script.source_char_position"
    ] = "browser.script.source_char_position"
    """A number representing the script character position of the script.

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 678
    """

    # Path: model/attributes/browser/browser__version.json
    BROWSER_VERSION: Literal["browser.version"] = "browser.version"
    """The version of the browser.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: sentry.browser.version
    Example: "120.0.6099.130"
    """

    # Path: model/attributes/browser/browser__web_vital__cls__report_event.json
    BROWSER_WEB_VITAL_CLS_REPORT_EVENT: Literal[
        "browser.web_vital.cls.report_event"
    ] = "browser.web_vital.cls.report_event"
    """The event that caused the SDK to report CLS (pagehide or navigation)

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "navigation"
    """

    # Path: model/attributes/browser/browser__web_vital__cls__source__[key].json
    BROWSER_WEB_VITAL_CLS_SOURCE_KEY: Literal["browser.web_vital.cls.source.<key>"] = (
        "browser.web_vital.cls.source.<key>"
    )
    """The HTML elements or components responsible for the layout shift. <key> is a numeric index from 1 to N

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Has Dynamic Suffix: true
    Aliases: cls.source.<key>
    Example: "body > div#app"
    """

    # Path: model/attributes/browser/browser__web_vital__cls__value.json
    BROWSER_WEB_VITAL_CLS_VALUE: Literal["browser.web_vital.cls.value"] = (
        "browser.web_vital.cls.value"
    )
    """The value of the recorded Cumulative Layout Shift (CLS) web vital

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: cls
    Example: 0.2361
    """

    # Path: model/attributes/browser/browser__web_vital__fcp__value.json
    BROWSER_WEB_VITAL_FCP_VALUE: Literal["browser.web_vital.fcp.value"] = (
        "browser.web_vital.fcp.value"
    )
    """The time it takes for the browser to render the first piece of meaningful content on the screen

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: fcp
    Example: 547.6951
    """

    # Path: model/attributes/browser/browser__web_vital__fp__value.json
    BROWSER_WEB_VITAL_FP_VALUE: Literal["browser.web_vital.fp.value"] = (
        "browser.web_vital.fp.value"
    )
    """The time in milliseconds it takes for the browser to render the first pixel on the screen

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: fp
    Example: 477.1926
    """

    # Path: model/attributes/browser/browser__web_vital__inp__value.json
    BROWSER_WEB_VITAL_INP_VALUE: Literal["browser.web_vital.inp.value"] = (
        "browser.web_vital.inp.value"
    )
    """The value of the recorded Interaction to Next Paint (INP) web vital

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: inp
    Example: 200
    """

    # Path: model/attributes/browser/browser__web_vital__lcp__element.json
    BROWSER_WEB_VITAL_LCP_ELEMENT: Literal["browser.web_vital.lcp.element"] = (
        "browser.web_vital.lcp.element"
    )
    """The HTML element selector or component name for which LCP was reported

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: lcp.element
    Example: "body > div#app > div#container > div"
    """

    # Path: model/attributes/browser/browser__web_vital__lcp__id.json
    BROWSER_WEB_VITAL_LCP_ID: Literal["browser.web_vital.lcp.id"] = (
        "browser.web_vital.lcp.id"
    )
    """The id of the dom element responsible for the largest contentful paint

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: lcp.id
    Example: "#gero"
    """

    # Path: model/attributes/browser/browser__web_vital__lcp__load_time.json
    BROWSER_WEB_VITAL_LCP_LOAD_TIME: Literal["browser.web_vital.lcp.load_time"] = (
        "browser.web_vital.lcp.load_time"
    )
    """The time it took for the LCP element to be loaded

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: lcp.loadTime
    Example: 1402
    """

    # Path: model/attributes/browser/browser__web_vital__lcp__render_time.json
    BROWSER_WEB_VITAL_LCP_RENDER_TIME: Literal["browser.web_vital.lcp.render_time"] = (
        "browser.web_vital.lcp.render_time"
    )
    """The time it took for the LCP element to be rendered

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: lcp.renderTime
    Example: 1685
    """

    # Path: model/attributes/browser/browser__web_vital__lcp__report_event.json
    BROWSER_WEB_VITAL_LCP_REPORT_EVENT: Literal[
        "browser.web_vital.lcp.report_event"
    ] = "browser.web_vital.lcp.report_event"
    """The event that caused the SDK to report LCP (pagehide or navigation)

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "pagehide"
    """

    # Path: model/attributes/browser/browser__web_vital__lcp__size.json
    BROWSER_WEB_VITAL_LCP_SIZE: Literal["browser.web_vital.lcp.size"] = (
        "browser.web_vital.lcp.size"
    )
    """The size of the largest contentful paint element

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: lcp.size
    Example: 1024
    """

    # Path: model/attributes/browser/browser__web_vital__lcp__url.json
    BROWSER_WEB_VITAL_LCP_URL: Literal["browser.web_vital.lcp.url"] = (
        "browser.web_vital.lcp.url"
    )
    """The url of the dom element responsible for the largest contentful paint

    Type: str
    Contains PII: true
    Defined in OTEL: No
    Visibility: public
    Aliases: lcp.url
    Example: "https://example.com/static/img.png"
    """

    # Path: model/attributes/browser/browser__web_vital__lcp__value.json
    BROWSER_WEB_VITAL_LCP_VALUE: Literal["browser.web_vital.lcp.value"] = (
        "browser.web_vital.lcp.value"
    )
    """The value of the recorded Largest Contentful Paint (LCP) web vital

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: lcp
    Example: 2500
    """

    # Path: model/attributes/browser/browser__web_vital__ttfb__request_time.json
    BROWSER_WEB_VITAL_TTFB_REQUEST_TIME: Literal[
        "browser.web_vital.ttfb.request_time"
    ] = "browser.web_vital.ttfb.request_time"
    """The time it takes for the server to process the initial request and send the first byte of a response to the user's browser

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: ttfb.requestTime
    Example: 1554.5814
    """

    # Path: model/attributes/browser/browser__web_vital__ttfb__value.json
    BROWSER_WEB_VITAL_TTFB_VALUE: Literal["browser.web_vital.ttfb.value"] = (
        "browser.web_vital.ttfb.value"
    )
    """The value of the recorded Time To First Byte (TTFB) web vital in Milliseconds

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: ttfb
    Example: 194.3322
    """

    # Path: model/attributes/cache/cache__hit.json
    CACHE_HIT: Literal["cache.hit"] = "cache.hit"
    """If the cache was hit during this span.

    Type: bool
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: true
    """

    # Path: model/attributes/cache/cache__item_size.json
    CACHE_ITEM_SIZE: Literal["cache.item_size"] = "cache.item_size"
    """The size of the requested item in the cache. In bytes.

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 58
    """

    # Path: model/attributes/cache/cache__key.json
    CACHE_KEY: Literal["cache.key"] = "cache.key"
    """The key of the cache accessed.

    Type: List[str]
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: ["my-cache-key","my-other-cache-key"]
    """

    # Path: model/attributes/cache/cache__operation.json
    CACHE_OPERATION: Literal["cache.operation"] = "cache.operation"
    """The operation being performed on the cache.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "get"
    """

    # Path: model/attributes/cache/cache__ttl.json
    CACHE_TTL: Literal["cache.ttl"] = "cache.ttl"
    """The ttl of the cache in seconds

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 120
    """

    # Path: model/attributes/cache/cache__write.json
    CACHE_WRITE: Literal["cache.write"] = "cache.write"
    """If the cache operation resulted in a write to the cache.

    Type: bool
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: true
    """

    # Path: model/attributes/channel.json
    CHANNEL: Literal["channel"] = "channel"
    """The channel name that is being used.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "mail"
    """

    # Path: model/attributes/client/client__address.json
    CLIENT_ADDRESS: Literal["client.address"] = "client.address"
    """Client address - domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.

    Type: str
    Contains PII: true
    Defined in OTEL: Yes
    Visibility: public
    Aliases: http.client_ip
    Example: "example.com"
    """

    # Path: model/attributes/client/client__port.json
    CLIENT_PORT: Literal["client.port"] = "client.port"
    """Client port number.

    Type: int
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: 5432
    """

    # Path: model/attributes/cloud/cloud__account__id.json
    CLOUD_ACCOUNT_ID: Literal["cloud.account.id"] = "cloud.account.id"
    """The cloud account ID the resource is assigned to

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: "123456789012"
    """

    # Path: model/attributes/cloud/cloud__availability_zone.json
    CLOUD_AVAILABILITY_ZONE: Literal["cloud.availability_zone"] = (
        "cloud.availability_zone"
    )
    """Cloud regions often have multiple, isolated locations known as zones to increase availability

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: "us-east-1c"
    """

    # Path: model/attributes/cloud/cloud__platform.json
    CLOUD_PLATFORM: Literal["cloud.platform"] = "cloud.platform"
    """The cloud platform in use

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: "aws_lambda"
    """

    # Path: model/attributes/cloud/cloud__provider.json
    CLOUD_PROVIDER: Literal["cloud.provider"] = "cloud.provider"
    """Name of the cloud provider

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: "aws"
    """

    # Path: model/attributes/cloud/cloud__region.json
    CLOUD_REGION: Literal["cloud.region"] = "cloud.region"
    """The geographical region the resource is running

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: "us-east-1"
    """

    # Path: model/attributes/cloud/cloud__resource_id.json
    CLOUD_RESOURCE_ID: Literal["cloud.resource_id"] = "cloud.resource_id"
    """Cloud provider-specific native identifier of the monitored cloud resource

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: "arn:aws:lambda:REGION:ACCOUNT_ID:function:my-function"
    """

    # Path: model/attributes/cloudflare/cloudflare__d1__duration.json
    CLOUDFLARE_D1_DURATION: Literal["cloudflare.d1.duration"] = "cloudflare.d1.duration"
    """The duration of a Cloudflare D1 operation.

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 543
    """

    # Path: model/attributes/cloudflare/cloudflare__d1__query_type.json
    CLOUDFLARE_D1_QUERY_TYPE: Literal["cloudflare.d1.query_type"] = (
        "cloudflare.d1.query_type"
    )
    """The type of query executed in a Cloudflare D1 operation

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: db.operation.name, db.operation
    DEPRECATED: Use db.operation.name instead
    Example: "run"
    """

    # Path: model/attributes/cloudflare/cloudflare__d1__rows_read.json
    CLOUDFLARE_D1_ROWS_READ: Literal["cloudflare.d1.rows_read"] = (
        "cloudflare.d1.rows_read"
    )
    """The number of rows read in a Cloudflare D1 operation.

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 12
    """

    # Path: model/attributes/cloudflare/cloudflare__d1__rows_written.json
    CLOUDFLARE_D1_ROWS_WRITTEN: Literal["cloudflare.d1.rows_written"] = (
        "cloudflare.d1.rows_written"
    )
    """The number of rows written in a Cloudflare D1 operation.

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 12
    """

    # Path: model/attributes/cloudflare/cloudflare__r2__bucket.json
    CLOUDFLARE_R2_BUCKET: Literal["cloudflare.r2.bucket"] = "cloudflare.r2.bucket"
    """The name of the Cloudflare R2 bucket binding

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "MY_BUCKET"
    """

    # Path: model/attributes/cloudflare/cloudflare__r2__operation.json
    CLOUDFLARE_R2_OPERATION: Literal["cloudflare.r2.operation"] = (
        "cloudflare.r2.operation"
    )
    """The R2 API operation being performed

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "GetObject"
    """

    # Path: model/attributes/cloudflare/cloudflare__r2__request__delimiter.json
    CLOUDFLARE_R2_REQUEST_DELIMITER: Literal["cloudflare.r2.request.delimiter"] = (
        "cloudflare.r2.request.delimiter"
    )
    """The delimiter used to group objects in an R2 list operation

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "/"
    """

    # Path: model/attributes/cloudflare/cloudflare__r2__request__key.json
    CLOUDFLARE_R2_REQUEST_KEY: Literal["cloudflare.r2.request.key"] = (
        "cloudflare.r2.request.key"
    )
    """The object key used in the R2 operation

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "my-file.txt"
    """

    # Path: model/attributes/cloudflare/cloudflare__r2__request__part_number.json
    CLOUDFLARE_R2_REQUEST_PART_NUMBER: Literal["cloudflare.r2.request.part_number"] = (
        "cloudflare.r2.request.part_number"
    )
    """The part number in a multipart upload operation

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 1
    """

    # Path: model/attributes/cloudflare/cloudflare__r2__request__prefix.json
    CLOUDFLARE_R2_REQUEST_PREFIX: Literal["cloudflare.r2.request.prefix"] = (
        "cloudflare.r2.request.prefix"
    )
    """The prefix used to filter objects in an R2 list operation

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "images/"
    """

    # Path: model/attributes/cloudflare/cloudflare__workflow__attempt.json
    CLOUDFLARE_WORKFLOW_ATTEMPT: Literal["cloudflare.workflow.attempt"] = (
        "cloudflare.workflow.attempt"
    )
    """The current attempt number for a Cloudflare Workflow step

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 1
    """

    # Path: model/attributes/cloudflare/cloudflare__workflow__retries__backoff.json
    CLOUDFLARE_WORKFLOW_RETRIES_BACKOFF: Literal[
        "cloudflare.workflow.retries.backoff"
    ] = "cloudflare.workflow.retries.backoff"
    """The backoff strategy for Cloudflare Workflow step retries

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "exponential"
    """

    # Path: model/attributes/cloudflare/cloudflare__workflow__retries__delay.json
    CLOUDFLARE_WORKFLOW_RETRIES_DELAY: Literal["cloudflare.workflow.retries.delay"] = (
        "cloudflare.workflow.retries.delay"
    )
    """The delay between Cloudflare Workflow step retries

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "5 seconds"
    """

    # Path: model/attributes/cloudflare/cloudflare__workflow__retries__limit.json
    CLOUDFLARE_WORKFLOW_RETRIES_LIMIT: Literal["cloudflare.workflow.retries.limit"] = (
        "cloudflare.workflow.retries.limit"
    )
    """The maximum number of retries for a Cloudflare Workflow step

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 3
    """

    # Path: model/attributes/cloudflare/cloudflare__workflow__timeout.json
    CLOUDFLARE_WORKFLOW_TIMEOUT: Literal["cloudflare.workflow.timeout"] = (
        "cloudflare.workflow.timeout"
    )
    """The timeout duration for a Cloudflare Workflow step

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "1 minute"
    """

    # Path: model/attributes/cls/cls__source__[key].json
    CLS_SOURCE_KEY: Literal["cls.source.<key>"] = "cls.source.<key>"
    """The HTML elements or components responsible for the layout shift. <key> is a numeric index from 1 to N

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Has Dynamic Suffix: true
    Aliases: browser.web_vital.cls.source.<key>
    DEPRECATED: Use browser.web_vital.cls.source.<key> instead - The CLS source is now recorded as a browser.web_vital.cls.source.<key> attribute.
    Example: "body > div#app"
    """

    # Path: model/attributes/cls.json
    CLS: Literal["cls"] = "cls"
    """The value of the recorded Cumulative Layout Shift (CLS) web vital

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: browser.web_vital.cls.value
    DEPRECATED: Use browser.web_vital.cls.value instead - The CLS web vital is now recorded as a browser.web_vital.cls.value attribute.
    Example: 0.2361
    """

    # Path: model/attributes/code/code__file__path.json
    CODE_FILE_PATH: Literal["code.file.path"] = "code.file.path"
    """The source code file name that identifies the code unit as uniquely as possible (preferably an absolute file path).

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: code.filepath
    Example: "/app/myapplication/http/handler/server.py"
    """

    # Path: model/attributes/code/code__filepath.json
    CODE_FILEPATH: Literal["code.filepath"] = "code.filepath"
    """The source code file name that identifies the code unit as uniquely as possible (preferably an absolute file path).

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: code.file.path
    DEPRECATED: Use code.file.path instead
    Example: "/app/myapplication/http/handler/server.py"
    """

    # Path: model/attributes/code/code__function.json
    CODE_FUNCTION: Literal["code.function"] = "code.function"
    """The method or function name, or equivalent (usually rightmost part of the code unit's name).

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: code.function.name
    Example: "server_request"
    """

    # Path: model/attributes/code/code__function__name.json
    CODE_FUNCTION_NAME: Literal["code.function.name"] = "code.function.name"
    """The method or function fully-qualified name without arguments.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: code.function
    Example: "server_request"
    """

    # Path: model/attributes/code/code__line__number.json
    CODE_LINE_NUMBER: Literal["code.line.number"] = "code.line.number"
    """The line number in code.filepath best representing the operation. It SHOULD point within the code unit named in code.function

    Type: int
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: code.lineno
    Example: 42
    """

    # Path: model/attributes/code/code__lineno.json
    CODE_LINENO: Literal["code.lineno"] = "code.lineno"
    """The line number in code.filepath best representing the operation. It SHOULD point within the code unit named in code.function

    Type: int
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: code.line.number
    DEPRECATED: Use code.line.number instead
    Example: 42
    """

    # Path: model/attributes/code/code__namespace.json
    CODE_NAMESPACE: Literal["code.namespace"] = "code.namespace"
    """The 'namespace' within which code.function is defined. Usually the qualified class or module name, such that code.namespace + some separator + code.function form a unique identifier for the code unit.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: "http.handler"
    """

    # Path: model/attributes/connection/connection__rtt.json
    CONNECTION_RTT: Literal["connection.rtt"] = "connection.rtt"
    """Specifies the estimated effective round-trip time of the current connection, in milliseconds.

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: network.connection.rtt
    DEPRECATED: Use network.connection.rtt instead - Old attribute name (no official namespace), to be replaced with network.connection.rtt for span-first future
    Example: 100
    """

    # Path: model/attributes/connectionType.json
    CONNECTIONTYPE: Literal["connectionType"] = "connectionType"
    """Specifies the type of the current connection (e.g. wifi, ethernet, cellular , etc).

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: network.connection.type, device.connection_type
    DEPRECATED: Use network.connection.type instead - Old namespace-less attribute, to be replaced with network.connection.type for span-first future
    Example: "wifi"
    """

    # Path: model/attributes/culture/culture__calendar.json
    CULTURE_CALENDAR: Literal["culture.calendar"] = "culture.calendar"
    """The calendar system used by the culture.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "GregorianCalendar"
    """

    # Path: model/attributes/culture/culture__display_name.json
    CULTURE_DISPLAY_NAME: Literal["culture.display_name"] = "culture.display_name"
    """Human readable name of the culture.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "English (United States)"
    """

    # Path: model/attributes/culture/culture__is_24_hour_format.json
    CULTURE_IS_24_HOUR_FORMAT: Literal["culture.is_24_hour_format"] = (
        "culture.is_24_hour_format"
    )
    """Whether the culture uses 24-hour time format.

    Type: bool
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: true
    """

    # Path: model/attributes/culture/culture__locale.json
    CULTURE_LOCALE: Literal["culture.locale"] = "culture.locale"
    """The locale identifier following RFC 4646.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "en-US"
    """

    # Path: model/attributes/culture/culture__timezone.json
    CULTURE_TIMEZONE: Literal["culture.timezone"] = "culture.timezone"
    """The timezone of the culture, as a geographic timezone identifier.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "Europe/Vienna"
    """

    # Path: model/attributes/db/db__collection__name.json
    DB_COLLECTION_NAME: Literal["db.collection.name"] = "db.collection.name"
    """The name of a collection (table, container) within the database.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: "users"
    """

    # Path: model/attributes/db/db__driver__name.json
    DB_DRIVER_NAME: Literal["db.driver.name"] = "db.driver.name"
    """The name of the driver used for the database connection.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "psycopg2"
    """

    # Path: model/attributes/db/db__name.json
    DB_NAME: Literal["db.name"] = "db.name"
    """The name of the database being accessed.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: db.namespace
    DEPRECATED: Use db.namespace instead
    Example: "customers"
    """

    # Path: model/attributes/db/db__namespace.json
    DB_NAMESPACE: Literal["db.namespace"] = "db.namespace"
    """The name of the database being accessed.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: db.name
    Example: "customers"
    """

    # Path: model/attributes/db/db__operation.json
    DB_OPERATION: Literal["db.operation"] = "db.operation"
    """The name of the operation being executed.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: db.operation.name, cloudflare.d1.query_type
    DEPRECATED: Use db.operation.name instead
    Example: "SELECT"
    """

    # Path: model/attributes/db/db__operation__batch__size.json
    DB_OPERATION_BATCH_SIZE: Literal["db.operation.batch.size"] = (
        "db.operation.batch.size"
    )
    """The number of queries included in a batch operation. Operations are only considered batches when they contain two or more operations, and so db.operation.batch.size SHOULD never be 1.

    Type: int
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: 3
    """

    # Path: model/attributes/db/db__operation__name.json
    DB_OPERATION_NAME: Literal["db.operation.name"] = "db.operation.name"
    """The name of the operation being executed.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: db.operation, cloudflare.d1.query_type
    Example: "SELECT"
    """

    # Path: model/attributes/db/db__query__parameter__[key].json
    DB_QUERY_PARAMETER_KEY: Literal["db.query.parameter.<key>"] = (
        "db.query.parameter.<key>"
    )
    """A query parameter used in db.query.text, with <key> being the parameter name, and the attribute value being a string representation of the parameter value.

    Type: str
    Contains PII: true
    Defined in OTEL: Yes
    Visibility: public
    Has Dynamic Suffix: true
    Example: "db.query.parameter.foo='123'"
    """

    # Path: model/attributes/db/db__query__summary.json
    DB_QUERY_SUMMARY: Literal["db.query.summary"] = "db.query.summary"
    """A shortened representation of operation(s) in the full query. This attribute must be low-cardinality and should only contain the operation table names.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: "SELECT users;"
    """

    # Path: model/attributes/db/db__query__text.json
    DB_QUERY_TEXT: Literal["db.query.text"] = "db.query.text"
    """The database parameterized query being executed. Any parameter values (filters, insertion values, etc) should be replaced with parameter placeholders. If applicable, use `db.query.parameter.<key>` to add the parameter value.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: db.statement
    Example: "SELECT * FROM users WHERE id = $1"
    """

    # Path: model/attributes/db/db__redis__connection.json
    DB_REDIS_CONNECTION: Literal["db.redis.connection"] = "db.redis.connection"
    """The redis connection name.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "my-redis-instance"
    """

    # Path: model/attributes/db/db__redis__key.json
    DB_REDIS_KEY: Literal["db.redis.key"] = "db.redis.key"
    """The key the Redis command is operating on.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "user:2047:city"
    """

    # Path: model/attributes/db/db__redis__parameters.json
    DB_REDIS_PARAMETERS: Literal["db.redis.parameters"] = "db.redis.parameters"
    """The array of command parameters given to a redis command.

    Type: List[str]
    Contains PII: true
    Defined in OTEL: No
    Visibility: public
    Example: ["test","*"]
    """

    # Path: model/attributes/db/db__sql__bindings.json
    DB_SQL_BINDINGS: Literal["db.sql.bindings"] = "db.sql.bindings"
    """The array of query bindings.

    Type: List[str]
    Contains PII: true
    Defined in OTEL: No
    Visibility: public
    DEPRECATED: Use db.query.parameter.<key> instead - Instead of adding every binding in the db.sql.bindings attribute, add them as individual entires with db.query.parameter.<key>.
    Example: ["1","foo"]
    """

    # Path: model/attributes/db/db__statement.json
    DB_STATEMENT: Literal["db.statement"] = "db.statement"
    """The database statement being executed.

    Type: str
    Contains PII: true
    Defined in OTEL: Yes
    Visibility: public
    Aliases: db.query.text
    DEPRECATED: Use db.query.text instead
    Example: "SELECT * FROM users"
    """

    # Path: model/attributes/db/db__stored_procedure__name.json
    DB_STORED_PROCEDURE_NAME: Literal["db.stored_procedure.name"] = (
        "db.stored_procedure.name"
    )
    """The name of a stored procedure being called.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: "GetUserById"
    """

    # Path: model/attributes/db/db__system.json
    DB_SYSTEM: Literal["db.system"] = "db.system"
    """An identifier for the database management system (DBMS) product being used. See [OpenTelemetry docs](https://github.com/open-telemetry/semantic-conventions/blob/main/docs/database/database-spans.md#notes-and-well-known-identifiers-for-dbsystem) for a list of well-known identifiers.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: db.system.name
    DEPRECATED: Use db.system.name instead
    Example: "postgresql"
    """

    # Path: model/attributes/db/db__system__name.json
    DB_SYSTEM_NAME: Literal["db.system.name"] = "db.system.name"
    """An identifier for the database management system (DBMS) product being used. See [OpenTelemetry docs](https://github.com/open-telemetry/semantic-conventions/blob/main/docs/database/database-spans.md#notes-and-well-known-identifiers-for-dbsystem) for a list of well-known identifiers.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: db.system
    Example: "postgresql"
    """

    # Path: model/attributes/db/db__user.json
    DB_USER: Literal["db.user"] = "db.user"
    """The database user.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: "fancy_user"
    """

    # Path: model/attributes/device/device__archs.json
    DEVICE_ARCHS: Literal["device.archs"] = "device.archs"
    """The CPU architectures of the device.

    Type: List[str]
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: ["arm64-v8a","armeabi-v7a","armeabi"]
    """

    # Path: model/attributes/device/device__battery_level.json
    DEVICE_BATTERY_LEVEL: Literal["device.battery_level"] = "device.battery_level"
    """The battery level of the device as a percentage (0-100).

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 100
    """

    # Path: model/attributes/device/device__battery_temperature.json
    DEVICE_BATTERY_TEMPERATURE: Literal["device.battery_temperature"] = (
        "device.battery_temperature"
    )
    """The battery temperature of the device in Celsius.

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 25
    """

    # Path: model/attributes/device/device__boot_time.json
    DEVICE_BOOT_TIME: Literal["device.boot_time"] = "device.boot_time"
    """A formatted UTC timestamp when the system was booted.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "2018-02-08T12:52:12Z"
    """

    # Path: model/attributes/device/device__brand.json
    DEVICE_BRAND: Literal["device.brand"] = "device.brand"
    """The brand of the device.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "Apple"
    """

    # Path: model/attributes/device/device__charging.json
    DEVICE_CHARGING: Literal["device.charging"] = "device.charging"
    """Whether the device was charging or not.

    Type: bool
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: false
    """

    # Path: model/attributes/device/device__chipset.json
    DEVICE_CHIPSET: Literal["device.chipset"] = "device.chipset"
    """The chipset of the device.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "Qualcomm SM8550"
    """

    # Path: model/attributes/device/device__class.json
    DEVICE_CLASS: Literal["device.class"] = "device.class"
    """The classification of the device. For example, `low`, `medium`, or `high`. Typically inferred by Relay - SDKs generally do not need to set this directly.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "medium"
    """

    # Path: model/attributes/device/device__connection_type.json
    DEVICE_CONNECTION_TYPE: Literal["device.connection_type"] = "device.connection_type"
    """The internet connection type currently being used by the device.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: network.connection.type, connectionType
    DEPRECATED: Use network.connection.type instead - This attribute is being deprecated in favor of network.connection.type
    Example: "wifi"
    """

    # Path: model/attributes/device/device__cpu_description.json
    DEVICE_CPU_DESCRIPTION: Literal["device.cpu_description"] = "device.cpu_description"
    """A description of the CPU of the device.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "Intel(R) Core(TM)2 Quad CPU Q6600 @ 2.40GHz"
    """

    # Path: model/attributes/device/device__external_free_storage.json
    DEVICE_EXTERNAL_FREE_STORAGE: Literal["device.external_free_storage"] = (
        "device.external_free_storage"
    )
    """External storage free size in bytes.

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 67108864000
    """

    # Path: model/attributes/device/device__external_storage_size.json
    DEVICE_EXTERNAL_STORAGE_SIZE: Literal["device.external_storage_size"] = (
        "device.external_storage_size"
    )
    """External storage total size in bytes.

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 134217728000
    """

    # Path: model/attributes/device/device__family.json
    DEVICE_FAMILY: Literal["device.family"] = "device.family"
    """The family of the device.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "iPhone"
    """

    # Path: model/attributes/device/device__free_memory.json
    DEVICE_FREE_MEMORY: Literal["device.free_memory"] = "device.free_memory"
    """Free system memory in bytes.

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 2147483648
    """

    # Path: model/attributes/device/device__free_storage.json
    DEVICE_FREE_STORAGE: Literal["device.free_storage"] = "device.free_storage"
    """Free device storage in bytes.

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 107374182400
    """

    # Path: model/attributes/device/device__id.json
    DEVICE_ID: Literal["device.id"] = "device.id"
    """Unique device identifier.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: "a1b2c3d4-e5f6-7890-abcd-ef1234567890"
    """

    # Path: model/attributes/device/device__locale.json
    DEVICE_LOCALE: Literal["device.locale"] = "device.locale"
    """The locale of the device.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "en-US"
    """

    # Path: model/attributes/device/device__low_memory.json
    DEVICE_LOW_MEMORY: Literal["device.low_memory"] = "device.low_memory"
    """Whether the device was low on memory.

    Type: bool
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: false
    """

    # Path: model/attributes/device/device__low_power_mode.json
    DEVICE_LOW_POWER_MODE: Literal["device.low_power_mode"] = "device.low_power_mode"
    """Whether the device is in Low Power Mode.

    Type: bool
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: true
    """

    # Path: model/attributes/device/device__manufacturer.json
    DEVICE_MANUFACTURER: Literal["device.manufacturer"] = "device.manufacturer"
    """The manufacturer of the device.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: "Google"
    """

    # Path: model/attributes/device/device__memory__estimated_capacity.json
    DEVICE_MEMORY_ESTIMATED_CAPACITY: Literal["device.memory.estimated_capacity"] = (
        "device.memory.estimated_capacity"
    )
    """The estimated total memory capacity of the device, only a rough estimation in gigabytes. Browsers report estimations in buckets of powers of 2, mostly capped at 8 GB

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: deviceMemory
    Example: 8
    """

    # Path: model/attributes/device/device__memory_size.json
    DEVICE_MEMORY_SIZE: Literal["device.memory_size"] = "device.memory_size"
    """Total system memory available in bytes.

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 17179869184
    """

    # Path: model/attributes/device/device__model.json
    DEVICE_MODEL: Literal["device.model"] = "device.model"
    """The model of the device.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "iPhone 15 Pro Max"
    """

    # Path: model/attributes/device/device__model_id.json
    DEVICE_MODEL_ID: Literal["device.model_id"] = "device.model_id"
    """An internal hardware revision to identify the device exactly.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "N861AP"
    """

    # Path: model/attributes/device/device__name.json
    DEVICE_NAME: Literal["device.name"] = "device.name"
    """The name of the device. On mobile, this is the user-assigned device name. On servers and desktops, this is typically the hostname.

    Type: str
    Contains PII: true
    Defined in OTEL: No
    Visibility: public
    Example: "localhost"
    """

    # Path: model/attributes/device/device__online.json
    DEVICE_ONLINE: Literal["device.online"] = "device.online"
    """Whether the device was online or not.

    Type: bool
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: true
    """

    # Path: model/attributes/device/device__orientation.json
    DEVICE_ORIENTATION: Literal["device.orientation"] = "device.orientation"
    """The orientation of the device, either "portrait" or "landscape".

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "portrait"
    """

    # Path: model/attributes/device/device__processor_count.json
    DEVICE_PROCESSOR_COUNT: Literal["device.processor_count"] = "device.processor_count"
    """Number of "logical processors".

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: hardwareConcurrency
    Example: 8
    """

    # Path: model/attributes/device/device__processor_frequency.json
    DEVICE_PROCESSOR_FREQUENCY: Literal["device.processor_frequency"] = (
        "device.processor_frequency"
    )
    """Processor frequency in MHz.

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 2400
    """

    # Path: model/attributes/device/device__screen_density.json
    DEVICE_SCREEN_DENSITY: Literal["device.screen_density"] = "device.screen_density"
    """The screen density of the device.

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 2.625
    """

    # Path: model/attributes/device/device__screen_dpi.json
    DEVICE_SCREEN_DPI: Literal["device.screen_dpi"] = "device.screen_dpi"
    """The screen density in dots-per-inch (DPI) of the device.

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 420
    """

    # Path: model/attributes/device/device__screen_height_pixels.json
    DEVICE_SCREEN_HEIGHT_PIXELS: Literal["device.screen_height_pixels"] = (
        "device.screen_height_pixels"
    )
    """The height of the device screen in pixels.

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 2400
    """

    # Path: model/attributes/device/device__screen_width_pixels.json
    DEVICE_SCREEN_WIDTH_PIXELS: Literal["device.screen_width_pixels"] = (
        "device.screen_width_pixels"
    )
    """The width of the device screen in pixels.

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 1080
    """

    # Path: model/attributes/device/device__simulator.json
    DEVICE_SIMULATOR: Literal["device.simulator"] = "device.simulator"
    """Whether the device is a simulator or an actual device.

    Type: bool
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: false
    """

    # Path: model/attributes/device/device__storage_size.json
    DEVICE_STORAGE_SIZE: Literal["device.storage_size"] = "device.storage_size"
    """Total device storage in bytes.

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 274877906944
    """

    # Path: model/attributes/device/device__thermal_state.json
    DEVICE_THERMAL_STATE: Literal["device.thermal_state"] = "device.thermal_state"
    """The thermal state of the device. Based on Apple's `ProcessInfo.ThermalState` enum: `nominal`, `fair`, `serious`, or `critical`.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "nominal"
    """

    # Path: model/attributes/device/device__timezone.json
    DEVICE_TIMEZONE: Literal["device.timezone"] = "device.timezone"
    """The timezone of the device.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "Europe/Vienna"
    """

    # Path: model/attributes/device/device__usable_memory.json
    DEVICE_USABLE_MEMORY: Literal["device.usable_memory"] = "device.usable_memory"
    """Memory usable for the app in bytes.

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 2147483648
    """

    # Path: model/attributes/deviceMemory.json
    DEVICEMEMORY: Literal["deviceMemory"] = "deviceMemory"
    """The estimated total memory capacity of the device, only a rough estimation in gigabytes.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: device.memory.estimated_capacity
    DEPRECATED: Use device.memory.estimated_capacity instead - Old namespace-less attribute, to be replaced with device.memory.estimated_capacity for span-first future
    Example: "8 GB"
    """

    # Path: model/attributes/effectiveConnectionType.json
    EFFECTIVECONNECTIONTYPE: Literal["effectiveConnectionType"] = (
        "effectiveConnectionType"
    )
    """Specifies the estimated effective type of the current connection (e.g. slow-2g, 2g, 3g, 4g).

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: network.connection.effective_type
    DEPRECATED: Use network.connection.effective_type instead - Old namespace-less attribute, to be replaced with network.connection.effective_type for span-first future
    Example: "4g"
    """

    # Path: model/attributes/environment.json
    ENVIRONMENT: Literal["environment"] = "environment"
    """The sentry environment.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: sentry.environment
    DEPRECATED: Use sentry.environment instead
    Example: "production"
    """

    # Path: model/attributes/error/error__type.json
    ERROR_TYPE: Literal["error.type"] = "error.type"
    """Describes a class of error the operation ended with.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: "timeout"
    """

    # Path: model/attributes/event/event__id.json
    EVENT_ID: Literal["event.id"] = "event.id"
    """The unique identifier for this event (log record)

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 1234567890
    """

    # Path: model/attributes/event/event__name.json
    EVENT_NAME: Literal["event.name"] = "event.name"
    """The name that uniquely identifies this event (log record)

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "Process Payload"
    """

    # Path: model/attributes/exception/exception__escaped.json
    EXCEPTION_ESCAPED: Literal["exception.escaped"] = "exception.escaped"
    """SHOULD be set to true if the exception event is recorded at a point where it is known that the exception is escaping the scope of the span.

    Type: bool
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: true
    """

    # Path: model/attributes/exception/exception__message.json
    EXCEPTION_MESSAGE: Literal["exception.message"] = "exception.message"
    """The error message.

    Type: str
    Contains PII: true
    Defined in OTEL: Yes
    Visibility: public
    Example: "ENOENT: no such file or directory"
    """

    # Path: model/attributes/exception/exception__stacktrace.json
    EXCEPTION_STACKTRACE: Literal["exception.stacktrace"] = "exception.stacktrace"
    """A stacktrace as a string in the natural representation for the language runtime. The representation is to be determined and documented by each language SIG.

    Type: str
    Contains PII: true
    Defined in OTEL: Yes
    Visibility: public
    Example: "Exception in thread \"main\" java.lang.RuntimeException: Test exception\n at com.example.GenerateTrace.methodB(GenerateTrace.java:13)\n at com.example.GenerateTrace.methodA(GenerateTrace.java:9)\n at com.example.GenerateTrace.main(GenerateTrace.java:5)"
    """

    # Path: model/attributes/exception/exception__type.json
    EXCEPTION_TYPE: Literal["exception.type"] = "exception.type"
    """The type of the exception (its fully-qualified class name, if applicable). The dynamic type of the exception should be preferred over the static type in languages that support it.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: "OSError"
    """

    # Path: model/attributes/faas/faas__coldstart.json
    FAAS_COLDSTART: Literal["faas.coldstart"] = "faas.coldstart"
    """A boolean that is true if the serverless function is executed for the first time (aka cold-start).

    Type: bool
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: true
    """

    # Path: model/attributes/faas/faas__cron.json
    FAAS_CRON: Literal["faas.cron"] = "faas.cron"
    """A string containing the schedule period as Cron Expression.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: "0/5 * * * ? *"
    """

    # Path: model/attributes/faas/faas__duration_in_ms.json
    FAAS_DURATION_IN_MS: Literal["faas.duration_in_ms"] = "faas.duration_in_ms"
    """The duration a function took to run, in milliseconds.

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 120
    """

    # Path: model/attributes/faas/faas__entry_point.json
    FAAS_ENTRY_POINT: Literal["faas.entry_point"] = "faas.entry_point"
    """The code that's run when the cloud provider invokes your function.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "my_main_function"
    """

    # Path: model/attributes/faas/faas__identity.json
    FAAS_IDENTITY: Literal["faas.identity"] = "faas.identity"
    """The Service Account (GCP), IAM Execution Role (AWS), or Managed Identity (Azure) used by the serverless function when interacting with other cloud services

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "name@project.iam.gserviceaccount.com (GCP), arn:aws:iam::123456789012:role/role-name (AWS), 00000000-0000-0000-0000-000000000000 (Azure)"
    """

    # Path: model/attributes/faas/faas__invocation_id.json
    FAAS_INVOCATION_ID: Literal["faas.invocation_id"] = "faas.invocation_id"
    """The invocation ID of the current function invocation.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: aws.lambda.aws_request_id
    Example: "af9d5aa4-a685-4c5f-a22b-444f80b3cc28"
    """

    # Path: model/attributes/faas/faas__name.json
    FAAS_NAME: Literal["faas.name"] = "faas.name"
    """The name of the serverless function

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: aws.lambda.function_name
    Example: "my_function"
    """

    # Path: model/attributes/faas/faas__time.json
    FAAS_TIME: Literal["faas.time"] = "faas.time"
    """A string containing the function invocation time in the ISO 8601 format expressed in UTC.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: "2020-01-23T13:47:06Z"
    """

    # Path: model/attributes/faas/faas__trigger.json
    FAAS_TRIGGER: Literal["faas.trigger"] = "faas.trigger"
    """Type of the trigger which caused this function invocation.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: "timer"
    """

    # Path: model/attributes/faas/faas__version.json
    FAAS_VERSION: Literal["faas.version"] = "faas.version"
    """The version of the function that was invoked

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: aws.lambda.function_version
    Example: "$LATEST"
    """

    # Path: model/attributes/fcp.json
    FCP: Literal["fcp"] = "fcp"
    """The time it takes for the browser to render the first piece of meaningful content on the screen

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: browser.web_vital.fcp.value
    DEPRECATED: Use browser.web_vital.fcp.value instead - This attribute is being deprecated in favor of browser.web_vital.fcp.value
    Example: 547.6951
    """

    # Path: model/attributes/flag/flag__evaluation__[key].json
    FLAG_EVALUATION_KEY: Literal["flag.evaluation.<key>"] = "flag.evaluation.<key>"
    """An instance of a feature flag evaluation. The value of this attribute is the boolean representing the evaluation result. The <key> suffix is the name of the feature flag.

    Type: bool
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Has Dynamic Suffix: true
    Example: "flag.evaluation.is_new_ui=true"
    """

    # Path: model/attributes/fp.json
    FP: Literal["fp"] = "fp"
    """The time it takes for the browser to render the first pixel on the screen

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: browser.web_vital.fp.value
    DEPRECATED: Use browser.web_vital.fp.value instead - This attribute is being deprecated in favor of browser.web_vital.fp.value
    Example: 477.1926
    """

    # Path: model/attributes/frames/frames__delay.json
    FRAMES_DELAY: Literal["frames.delay"] = "frames.delay"
    """The sum of all delayed frame durations in seconds during the lifetime of the span. For more information see [frames delay](https://develop.sentry.dev/sdk/performance/frames-delay/).

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: app.vitals.frames.delay.value
    DEPRECATED: Use app.vitals.frames.delay.value instead - Replaced by app.vitals.frames.delay.value to align with the app.vitals.* namespace for mobile performance attributes
    Example: 5
    """

    # Path: model/attributes/frames/frames__frozen.json
    FRAMES_FROZEN: Literal["frames.frozen"] = "frames.frozen"
    """The number of frozen frames rendered during the lifetime of the span.

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: app.vitals.frames.frozen.count
    DEPRECATED: Use app.vitals.frames.frozen.count instead - Replaced by app.vitals.frames.frozen.count to align with the app.vitals.* namespace for mobile performance attributes
    Example: 3
    """

    # Path: model/attributes/frames/frames__slow.json
    FRAMES_SLOW: Literal["frames.slow"] = "frames.slow"
    """The number of slow frames rendered during the lifetime of the span.

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: app.vitals.frames.slow.count
    DEPRECATED: Use app.vitals.frames.slow.count instead - Replaced by app.vitals.frames.slow.count to align with the app.vitals.* namespace for mobile performance attributes
    Example: 1
    """

    # Path: model/attributes/frames/frames__total.json
    FRAMES_TOTAL: Literal["frames.total"] = "frames.total"
    """The number of total frames rendered during the lifetime of the span.

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: app.vitals.frames.total.count
    DEPRECATED: Use app.vitals.frames.total.count instead - Replaced by app.vitals.frames.total.count to align with the app.vitals.* namespace for mobile performance attributes
    Example: 60
    """

    # Path: model/attributes/frames_frozen_rate.json
    FRAMES_FROZEN_RATE: Literal["frames_frozen_rate"] = "frames_frozen_rate"
    """The rate of frozen frames, or `app_vitals.frames.frozen.count` divided by `app_vitals.frames.total.count`. This is computed by Relay.

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    """

    # Path: model/attributes/frames_slow_rate.json
    FRAMES_SLOW_RATE: Literal["frames_slow_rate"] = "frames_slow_rate"
    """The rate of slow frames, or `app_vitals.frames.slow.count` divided by `app_vitals.frames.total.count`. This is computed by Relay.

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    """

    # Path: model/attributes/fs_error.json
    FS_ERROR: Literal["fs_error"] = "fs_error"
    """The error message of a file system error.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    DEPRECATED: Use error.type instead - This attribute is not part of the OpenTelemetry specification and error.type fits much better.
    Example: "ENOENT: no such file or directory"
    """

    # Path: model/attributes/gcp/gcp__function__context__event_id.json
    GCP_FUNCTION_CONTEXT_EVENT_ID: Literal["gcp.function.context.event_id"] = (
        "gcp.function.context.event_id"
    )
    """The event ID from the legacy GCP Cloud Function context (1st gen)

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "1234567890"
    """

    # Path: model/attributes/gcp/gcp__function__context__event_type.json
    GCP_FUNCTION_CONTEXT_EVENT_TYPE: Literal["gcp.function.context.event_type"] = (
        "gcp.function.context.event_type"
    )
    """The type of the GCP Cloud Function event

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "google.pubsub.topic.publish"
    """

    # Path: model/attributes/gcp/gcp__function__context__id.json
    GCP_FUNCTION_CONTEXT_ID: Literal["gcp.function.context.id"] = (
        "gcp.function.context.id"
    )
    """The unique event ID from the GCP CloudEvents context (2nd gen Cloud Functions)

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "1234567890"
    """

    # Path: model/attributes/gcp/gcp__function__context__resource.json
    GCP_FUNCTION_CONTEXT_RESOURCE: Literal["gcp.function.context.resource"] = (
        "gcp.function.context.resource"
    )
    """The resource that triggered the GCP Cloud Function event

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "projects/my-project/topics/my-topic"
    """

    # Path: model/attributes/gcp/gcp__function__context__source.json
    GCP_FUNCTION_CONTEXT_SOURCE: Literal["gcp.function.context.source"] = (
        "gcp.function.context.source"
    )
    """The source of the GCP Cloud Function event

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "//pubsub.googleapis.com/projects/my-project/topics/my-topic"
    """

    # Path: model/attributes/gcp/gcp__function__context__specversion.json
    GCP_FUNCTION_CONTEXT_SPECVERSION: Literal["gcp.function.context.specversion"] = (
        "gcp.function.context.specversion"
    )
    """The CloudEvents specification version of the GCP Cloud Function event

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "1.0"
    """

    # Path: model/attributes/gcp/gcp__function__context__time.json
    GCP_FUNCTION_CONTEXT_TIME: Literal["gcp.function.context.time"] = (
        "gcp.function.context.time"
    )
    """The timestamp of the GCP Cloud Function event

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "2024-01-01T00:00:00.000Z"
    """

    # Path: model/attributes/gcp/gcp__function__context__timestamp.json
    GCP_FUNCTION_CONTEXT_TIMESTAMP: Literal["gcp.function.context.timestamp"] = (
        "gcp.function.context.timestamp"
    )
    """The legacy timestamp of the GCP Cloud Function event

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "2024-01-01T00:00:00.000Z"
    """

    # Path: model/attributes/gcp/gcp__function__context__type.json
    GCP_FUNCTION_CONTEXT_TYPE: Literal["gcp.function.context.type"] = (
        "gcp.function.context.type"
    )
    """The type of the GCP Cloud Function event context

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "cloud_functions.context"
    """

    # Path: model/attributes/gcp/gcp__project__id.json
    GCP_PROJECT_ID: Literal["gcp.project.id"] = "gcp.project.id"
    """The ID of the project in GCP that this resource is associated with

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "my-project-123"
    """

    # Path: model/attributes/gen_ai/gen_ai__agent__name.json
    GEN_AI_AGENT_NAME: Literal["gen_ai.agent.name"] = "gen_ai.agent.name"
    """The name of the agent being used.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: "ResearchAssistant"
    """

    # Path: model/attributes/gen_ai/gen_ai__context__utilization.json
    GEN_AI_CONTEXT_UTILIZATION: Literal["gen_ai.context.utilization"] = (
        "gen_ai.context.utilization"
    )
    """The fraction of the model context window utilized by this generation.

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 0.75
    """

    # Path: model/attributes/gen_ai/gen_ai__context__window_size.json
    GEN_AI_CONTEXT_WINDOW_SIZE: Literal["gen_ai.context.window_size"] = (
        "gen_ai.context.window_size"
    )
    """The maximum context window size supported by the model for this generation.

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 128000
    """

    # Path: model/attributes/gen_ai/gen_ai__conversation__id.json
    GEN_AI_CONVERSATION_ID: Literal["gen_ai.conversation.id"] = "gen_ai.conversation.id"
    """The unique identifier for a conversation (session, thread), used to store and correlate messages within this conversation.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: "conv_5j66UpCpwteGg4YSxUnt7lPY"
    """

    # Path: model/attributes/gen_ai/gen_ai__cost__input_tokens.json
    GEN_AI_COST_INPUT_TOKENS: Literal["gen_ai.cost.input_tokens"] = (
        "gen_ai.cost.input_tokens"
    )
    """The cost of tokens used to process the AI input (prompt) in USD (without cached input tokens).

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 123.45
    """

    # Path: model/attributes/gen_ai/gen_ai__cost__output_tokens.json
    GEN_AI_COST_OUTPUT_TOKENS: Literal["gen_ai.cost.output_tokens"] = (
        "gen_ai.cost.output_tokens"
    )
    """The cost of tokens used for creating the AI output in USD (without reasoning tokens).

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 123.45
    """

    # Path: model/attributes/gen_ai/gen_ai__cost__total_tokens.json
    GEN_AI_COST_TOTAL_TOKENS: Literal["gen_ai.cost.total_tokens"] = (
        "gen_ai.cost.total_tokens"
    )
    """The total cost for the tokens used.

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: ai.total_cost
    Example: 12.34
    """

    # Path: model/attributes/gen_ai/gen_ai__embeddings__input.json
    GEN_AI_EMBEDDINGS_INPUT: Literal["gen_ai.embeddings.input"] = (
        "gen_ai.embeddings.input"
    )
    """The input to the embeddings model.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "What's the weather in Paris?"
    """

    # Path: model/attributes/gen_ai/gen_ai__function_id.json
    GEN_AI_FUNCTION_ID: Literal["gen_ai.function_id"] = "gen_ai.function_id"
    """Framework-specific tracing label for the execution of a function or other unit of execution in a generative AI system.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "my-awesome-function"
    """

    # Path: model/attributes/gen_ai/gen_ai__input__messages.json
    GEN_AI_INPUT_MESSAGES: Literal["gen_ai.input.messages"] = "gen_ai.input.messages"
    """The messages passed to the model. It has to be a stringified version of an array of objects. The `role` attribute of each object must be `"user"`, `"assistant"`, `"tool"`, or `"system"`. For messages of the role `"tool"`, the `content` can be a string or an arbitrary object with information about the tool call. For other messages the `content` can be either a string or a list of objects in the format `{type: "text", text:"..."}`.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: ai.texts
    Example: "[{\"role\": \"user\", \"parts\": [{\"type\": \"text\", \"content\": \"Weather in Paris?\"}]}, {\"role\": \"assistant\", \"parts\": [{\"type\": \"tool_call\", \"id\": \"call_VSPygqKTWdrhaFErNvMV18Yl\", \"name\": \"get_weather\", \"arguments\": {\"location\": \"Paris\"}}]}, {\"role\": \"tool\", \"parts\": [{\"type\": \"tool_call_response\", \"id\": \"call_VSPygqKTWdrhaFErNvMV18Yl\", \"result\": \"rainy, 57°F\"}]}]"
    """

    # Path: model/attributes/gen_ai/gen_ai__operation__name.json
    GEN_AI_OPERATION_NAME: Literal["gen_ai.operation.name"] = "gen_ai.operation.name"
    """The name of the operation being performed. It has the following list of well-known values: 'chat', 'create_agent', 'embeddings', 'execute_tool', 'generate_content', 'invoke_agent', 'text_completion'. If one of them applies, then that value MUST be used. Otherwise a custom value MAY be used.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: "chat"
    """

    # Path: model/attributes/gen_ai/gen_ai__operation__type.json
    GEN_AI_OPERATION_TYPE: Literal["gen_ai.operation.type"] = "gen_ai.operation.type"
    """The type of AI operation. Must be one of 'agent' (invoke_agent and create_agent spans), 'ai_client' (any LLM call), 'tool' (execute_tool spans), 'handoff' (handoff spans), 'other' (input and output processors, skill loading, guardrails etc.) . Added during ingestion based on span.op and gen_ai.operation.type. Used to filter and aggregate data in the UI

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "tool"
    """

    # Path: model/attributes/gen_ai/gen_ai__output__messages.json
    GEN_AI_OUTPUT_MESSAGES: Literal["gen_ai.output.messages"] = "gen_ai.output.messages"
    """The model's response messages. It has to be a stringified version of an array of message objects, which can include text responses and tool calls.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: "[{\"role\": \"assistant\", \"parts\": [{\"type\": \"text\", \"content\": \"The weather in Paris is currently rainy with a temperature of 57°F.\"}], \"finish_reason\": \"stop\"}]"
    """

    # Path: model/attributes/gen_ai/gen_ai__pipeline__name.json
    GEN_AI_PIPELINE_NAME: Literal["gen_ai.pipeline.name"] = "gen_ai.pipeline.name"
    """Name of the AI pipeline or chain being executed.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: ai.pipeline.name
    Example: "Autofix Pipeline"
    """

    # Path: model/attributes/gen_ai/gen_ai__prompt.json
    GEN_AI_PROMPT: Literal["gen_ai.prompt"] = "gen_ai.prompt"
    """The input messages sent to the model

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    DEPRECATED: No replacement at this time - Deprecated from OTEL, use gen_ai.input.messages with the new format instead.
    Example: "[{\"role\": \"user\", \"message\": \"hello\"}]"
    """

    # Path: model/attributes/gen_ai/gen_ai__prompt__name.json
    GEN_AI_PROMPT_NAME: Literal["gen_ai.prompt.name"] = "gen_ai.prompt.name"
    """The name of the prompt that uniquely identifies it.

    Type: str
    Contains PII: maybe - Prompt names may reveal user behavior patterns or sensitive operations
    Defined in OTEL: Yes
    Visibility: public
    Aliases: mcp.prompt.name
    Example: "summarize_text"
    """

    # Path: model/attributes/gen_ai/gen_ai__provider__name.json
    GEN_AI_PROVIDER_NAME: Literal["gen_ai.provider.name"] = "gen_ai.provider.name"
    """The Generative AI provider as identified by the client or server instrumentation.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: ai.model.provider, gen_ai.system
    Example: "openai"
    """

    # Path: model/attributes/gen_ai/gen_ai__request__available_tools.json
    GEN_AI_REQUEST_AVAILABLE_TOOLS: Literal["gen_ai.request.available_tools"] = (
        "gen_ai.request.available_tools"
    )
    """The available tools for the model. It has to be a stringified version of an array of objects.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    DEPRECATED: Use gen_ai.tool.definitions instead
    Example: "[{\"name\": \"get_weather\", \"description\": \"Get the weather for a given location\"}, {\"name\": \"get_news\", \"description\": \"Get the news for a given topic\"}]"
    """

    # Path: model/attributes/gen_ai/gen_ai__request__frequency_penalty.json
    GEN_AI_REQUEST_FREQUENCY_PENALTY: Literal["gen_ai.request.frequency_penalty"] = (
        "gen_ai.request.frequency_penalty"
    )
    """Used to reduce repetitiveness of generated tokens. The higher the value, the stronger a penalty is applied to previously present tokens, proportional to how many times they have already appeared in the prompt or prior generation.

    Type: float
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: ai.frequency_penalty
    Example: 0.5
    """

    # Path: model/attributes/gen_ai/gen_ai__request__max_tokens.json
    GEN_AI_REQUEST_MAX_TOKENS: Literal["gen_ai.request.max_tokens"] = (
        "gen_ai.request.max_tokens"
    )
    """The maximum number of tokens to generate in the response.

    Type: int
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: 2048
    """

    # Path: model/attributes/gen_ai/gen_ai__request__messages.json
    GEN_AI_REQUEST_MESSAGES: Literal["gen_ai.request.messages"] = (
        "gen_ai.request.messages"
    )
    """The messages passed to the model. It has to be a stringified version of an array of objects. The `role` attribute of each object must be `"user"`, `"assistant"`, `"tool"`, or `"system"`. For messages of the role `"tool"`, the `content` can be a string or an arbitrary object with information about the tool call. For other messages the `content` can be either a string or a list of objects in the format `{type: "text", text:"..."}`.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: ai.input_messages
    DEPRECATED: Use gen_ai.input.messages instead
    Example: "[{\"role\": \"system\", \"content\": \"Generate a random number.\"}, {\"role\": \"user\", \"content\": [{\"text\": \"Generate a random number between 0 and 10.\", \"type\": \"text\"}]}, {\"role\": \"tool\", \"content\": {\"toolCallId\": \"1\", \"toolName\": \"Weather\", \"output\": \"rainy\"}}]"
    """

    # Path: model/attributes/gen_ai/gen_ai__request__model.json
    GEN_AI_REQUEST_MODEL: Literal["gen_ai.request.model"] = "gen_ai.request.model"
    """The model identifier being used for the request.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: "gpt-4-turbo-preview"
    """

    # Path: model/attributes/gen_ai/gen_ai__request__presence_penalty.json
    GEN_AI_REQUEST_PRESENCE_PENALTY: Literal["gen_ai.request.presence_penalty"] = (
        "gen_ai.request.presence_penalty"
    )
    """Used to reduce repetitiveness of generated tokens. Similar to frequency_penalty, except that this penalty is applied equally to all tokens that have already appeared, regardless of their exact frequencies.

    Type: float
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: ai.presence_penalty
    Example: 0.5
    """

    # Path: model/attributes/gen_ai/gen_ai__request__seed.json
    GEN_AI_REQUEST_SEED: Literal["gen_ai.request.seed"] = "gen_ai.request.seed"
    """The seed, ideally models given the same seed and same other parameters will produce the exact same output.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: ai.seed
    Example: "1234567890"
    """

    # Path: model/attributes/gen_ai/gen_ai__request__temperature.json
    GEN_AI_REQUEST_TEMPERATURE: Literal["gen_ai.request.temperature"] = (
        "gen_ai.request.temperature"
    )
    """For an AI model call, the temperature parameter. Temperature essentially means how random the output will be.

    Type: float
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: ai.temperature
    Example: 0.1
    """

    # Path: model/attributes/gen_ai/gen_ai__request__top_k.json
    GEN_AI_REQUEST_TOP_K: Literal["gen_ai.request.top_k"] = "gen_ai.request.top_k"
    """Limits the model to only consider the K most likely next tokens, where K is an integer (e.g., top_k=20 means only the 20 highest probability tokens are considered).

    Type: int
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: ai.top_k
    Example: 35
    """

    # Path: model/attributes/gen_ai/gen_ai__request__top_p.json
    GEN_AI_REQUEST_TOP_P: Literal["gen_ai.request.top_p"] = "gen_ai.request.top_p"
    """Limits the model to only consider tokens whose cumulative probability mass adds up to p, where p is a float between 0 and 1 (e.g., top_p=0.7 means only tokens that sum up to 70% of the probability mass are considered).

    Type: float
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: ai.top_p
    Example: 0.7
    """

    # Path: model/attributes/gen_ai/gen_ai__response__finish_reasons.json
    GEN_AI_RESPONSE_FINISH_REASONS: Literal["gen_ai.response.finish_reasons"] = (
        "gen_ai.response.finish_reasons"
    )
    """The reason why the model stopped generating.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: ai.finish_reason
    Example: "COMPLETE"
    """

    # Path: model/attributes/gen_ai/gen_ai__response__id.json
    GEN_AI_RESPONSE_ID: Literal["gen_ai.response.id"] = "gen_ai.response.id"
    """Unique identifier for the completion.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: ai.generation_id
    Example: "gen_123abc"
    """

    # Path: model/attributes/gen_ai/gen_ai__response__model.json
    GEN_AI_RESPONSE_MODEL: Literal["gen_ai.response.model"] = "gen_ai.response.model"
    """The vendor-specific ID of the model used.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: ai.model_id
    Example: "gpt-4"
    """

    # Path: model/attributes/gen_ai/gen_ai__response__streaming.json
    GEN_AI_RESPONSE_STREAMING: Literal["gen_ai.response.streaming"] = (
        "gen_ai.response.streaming"
    )
    """Whether or not the AI model call's response was streamed back asynchronously

    Type: bool
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: ai.streaming
    Example: true
    """

    # Path: model/attributes/gen_ai/gen_ai__response__text.json
    GEN_AI_RESPONSE_TEXT: Literal["gen_ai.response.text"] = "gen_ai.response.text"
    """The model's response text messages. It has to be a stringified version of an array of response text messages.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    DEPRECATED: Use gen_ai.output.messages instead
    Example: "[\"The weather in Paris is rainy and overcast, with temperatures around 57°F\", \"The weather in London is sunny and warm, with temperatures around 65°F\"]"
    """

    # Path: model/attributes/gen_ai/gen_ai__response__time_to_first_chunk.json
    GEN_AI_RESPONSE_TIME_TO_FIRST_CHUNK: Literal[
        "gen_ai.response.time_to_first_chunk"
    ] = "gen_ai.response.time_to_first_chunk"
    """Time in seconds when the first response content chunk arrived in streaming responses.

    Type: float
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: gen_ai.response.time_to_first_token
    Example: 0.6853435
    """

    # Path: model/attributes/gen_ai/gen_ai__response__time_to_first_token.json
    GEN_AI_RESPONSE_TIME_TO_FIRST_TOKEN: Literal[
        "gen_ai.response.time_to_first_token"
    ] = "gen_ai.response.time_to_first_token"
    """Time in seconds when the first response content chunk arrived in streaming responses.

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: gen_ai.response.time_to_first_chunk
    DEPRECATED: Use gen_ai.response.time_to_first_chunk instead
    Example: 0.6853435
    """

    # Path: model/attributes/gen_ai/gen_ai__response__tokens_per_second.json
    GEN_AI_RESPONSE_TOKENS_PER_SECOND: Literal["gen_ai.response.tokens_per_second"] = (
        "gen_ai.response.tokens_per_second"
    )
    """The total output tokens per seconds throughput

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 12345.67
    """

    # Path: model/attributes/gen_ai/gen_ai__response__tool_calls.json
    GEN_AI_RESPONSE_TOOL_CALLS: Literal["gen_ai.response.tool_calls"] = (
        "gen_ai.response.tool_calls"
    )
    """The tool calls in the model's response. It has to be a stringified version of an array of objects.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    DEPRECATED: Use gen_ai.output.messages instead
    Example: "[{\"name\": \"get_weather\", \"arguments\": {\"location\": \"Paris\"}}]"
    """

    # Path: model/attributes/gen_ai/gen_ai__system.json
    GEN_AI_SYSTEM: Literal["gen_ai.system"] = "gen_ai.system"
    """The provider of the model.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: ai.model.provider, gen_ai.provider.name
    DEPRECATED: Use gen_ai.provider.name instead
    Example: "openai"
    """

    # Path: model/attributes/gen_ai/gen_ai__system__message.json
    GEN_AI_SYSTEM_MESSAGE: Literal["gen_ai.system.message"] = "gen_ai.system.message"
    """The system instructions passed to the model.

    Type: str
    Contains PII: true
    Defined in OTEL: No
    Visibility: public
    DEPRECATED: Use gen_ai.system_instructions instead
    Example: "You are a helpful assistant"
    """

    # Path: model/attributes/gen_ai/gen_ai__system_instructions.json
    GEN_AI_SYSTEM_INSTRUCTIONS: Literal["gen_ai.system_instructions"] = (
        "gen_ai.system_instructions"
    )
    """The system instructions passed to the model.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: ai.preamble
    Example: "You are a helpful assistant"
    """

    # Path: model/attributes/gen_ai/gen_ai__tool__call__arguments.json
    GEN_AI_TOOL_CALL_ARGUMENTS: Literal["gen_ai.tool.call.arguments"] = (
        "gen_ai.tool.call.arguments"
    )
    """The arguments of the tool call. It has to be a stringified version of the arguments to the tool.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: gen_ai.tool.input
    Example: "{\"location\": \"Paris\"}"
    """

    # Path: model/attributes/gen_ai/gen_ai__tool__call__result.json
    GEN_AI_TOOL_CALL_RESULT: Literal["gen_ai.tool.call.result"] = (
        "gen_ai.tool.call.result"
    )
    """The result of the tool call. It has to be a stringified version of the result of the tool.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: gen_ai.tool.output, gen_ai.tool.message, mcp.tool.result.content
    Example: "rainy, 57°F"
    """

    # Path: model/attributes/gen_ai/gen_ai__tool__definitions.json
    GEN_AI_TOOL_DEFINITIONS: Literal["gen_ai.tool.definitions"] = (
        "gen_ai.tool.definitions"
    )
    """The list of source system tool definitions available to the GenAI agent or model.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: "[{\"type\": \"function\", \"name\": \"get_current_weather\", \"description\": \"Get the current weather in a given location\", \"parameters\": {\"type\": \"object\", \"properties\": {\"location\": {\"type\": \"string\", \"description\": \"The city and state, e.g. San Francisco, CA\"}, \"unit\": {\"type\": \"string\", \"enum\": [\"celsius\", \"fahrenheit\"]}}, \"required\": [\"location\", \"unit\"]}}]"
    """

    # Path: model/attributes/gen_ai/gen_ai__tool__description.json
    GEN_AI_TOOL_DESCRIPTION: Literal["gen_ai.tool.description"] = (
        "gen_ai.tool.description"
    )
    """The description of the tool being used.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: "Searches the web for current information about a topic"
    """

    # Path: model/attributes/gen_ai/gen_ai__tool__input.json
    GEN_AI_TOOL_INPUT: Literal["gen_ai.tool.input"] = "gen_ai.tool.input"
    """The input of the tool being used. It has to be a stringified version of the input to the tool.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: gen_ai.tool.call.arguments
    DEPRECATED: Use gen_ai.tool.call.arguments instead
    Example: "{\"location\": \"Paris\"}"
    """

    # Path: model/attributes/gen_ai/gen_ai__tool__message.json
    GEN_AI_TOOL_MESSAGE: Literal["gen_ai.tool.message"] = "gen_ai.tool.message"
    """The response from a tool or function call passed to the model.

    Type: str
    Contains PII: true
    Defined in OTEL: No
    Visibility: public
    Aliases: gen_ai.tool.call.result, gen_ai.tool.output, mcp.tool.result.content
    DEPRECATED: Use gen_ai.tool.call.result instead
    Example: "rainy, 57°F"
    """

    # Path: model/attributes/gen_ai/gen_ai__tool__name.json
    GEN_AI_TOOL_NAME: Literal["gen_ai.tool.name"] = "gen_ai.tool.name"
    """Name of the tool utilized by the agent.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: ai.function_call, mcp.tool.name
    Example: "Flights"
    """

    # Path: model/attributes/gen_ai/gen_ai__tool__output.json
    GEN_AI_TOOL_OUTPUT: Literal["gen_ai.tool.output"] = "gen_ai.tool.output"
    """The output of the tool being used. It has to be a stringified version of the output of the tool.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: gen_ai.tool.call.result, gen_ai.tool.message, mcp.tool.result.content
    DEPRECATED: Use gen_ai.tool.call.result instead
    Example: "rainy, 57°F"
    """

    # Path: model/attributes/gen_ai/gen_ai__tool__type.json
    GEN_AI_TOOL_TYPE: Literal["gen_ai.tool.type"] = "gen_ai.tool.type"
    """The type of tool being used.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    DEPRECATED: No replacement at this time - The gen_ai.tool.type attribute is deprecated and should no longer be set.
    Example: "function"
    """

    # Path: model/attributes/gen_ai/gen_ai__usage__cache_creation__input_tokens.json
    GEN_AI_USAGE_CACHE_CREATION_INPUT_TOKENS: Literal[
        "gen_ai.usage.cache_creation.input_tokens"
    ] = "gen_ai.usage.cache_creation.input_tokens"
    """The number of tokens written to the cache when processing the AI input (prompt).

    Type: int
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: gen_ai.usage.input_tokens.cache_write
    Example: 100
    """

    # Path: model/attributes/gen_ai/gen_ai__usage__cache_read__input_tokens.json
    GEN_AI_USAGE_CACHE_READ_INPUT_TOKENS: Literal[
        "gen_ai.usage.cache_read.input_tokens"
    ] = "gen_ai.usage.cache_read.input_tokens"
    """The number of cached tokens used to process the AI input (prompt).

    Type: int
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: gen_ai.usage.input_tokens.cached
    Example: 50
    """

    # Path: model/attributes/gen_ai/gen_ai__usage__completion_tokens.json
    GEN_AI_USAGE_COMPLETION_TOKENS: Literal["gen_ai.usage.completion_tokens"] = (
        "gen_ai.usage.completion_tokens"
    )
    """The number of tokens used in the GenAI response (completion).

    Type: int
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: ai.completion_tokens.used, gen_ai.usage.output_tokens
    DEPRECATED: Use gen_ai.usage.output_tokens instead
    Example: 10
    """

    # Path: model/attributes/gen_ai/gen_ai__usage__input_tokens.json
    GEN_AI_USAGE_INPUT_TOKENS: Literal["gen_ai.usage.input_tokens"] = (
        "gen_ai.usage.input_tokens"
    )
    """The number of tokens used to process the AI input (prompt) including cached input tokens.

    Type: int
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: ai.prompt_tokens.used, gen_ai.usage.prompt_tokens
    Example: 10
    """

    # Path: model/attributes/gen_ai/gen_ai__usage__input_tokens__cache_write.json
    GEN_AI_USAGE_INPUT_TOKENS_CACHE_WRITE: Literal[
        "gen_ai.usage.input_tokens.cache_write"
    ] = "gen_ai.usage.input_tokens.cache_write"
    """The number of tokens written to the cache when processing the AI input (prompt).

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: gen_ai.usage.cache_creation.input_tokens
    DEPRECATED: Use gen_ai.usage.cache_creation.input_tokens instead
    Example: 100
    """

    # Path: model/attributes/gen_ai/gen_ai__usage__input_tokens__cached.json
    GEN_AI_USAGE_INPUT_TOKENS_CACHED: Literal["gen_ai.usage.input_tokens.cached"] = (
        "gen_ai.usage.input_tokens.cached"
    )
    """The number of cached tokens used to process the AI input (prompt).

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: gen_ai.usage.cache_read.input_tokens
    DEPRECATED: Use gen_ai.usage.cache_read.input_tokens instead
    Example: 50
    """

    # Path: model/attributes/gen_ai/gen_ai__usage__output_tokens.json
    GEN_AI_USAGE_OUTPUT_TOKENS: Literal["gen_ai.usage.output_tokens"] = (
        "gen_ai.usage.output_tokens"
    )
    """The number of tokens used for creating the AI output (including reasoning tokens).

    Type: int
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: ai.completion_tokens.used, gen_ai.usage.completion_tokens
    Example: 10
    """

    # Path: model/attributes/gen_ai/gen_ai__usage__output_tokens__reasoning.json
    GEN_AI_USAGE_OUTPUT_TOKENS_REASONING: Literal[
        "gen_ai.usage.output_tokens.reasoning"
    ] = "gen_ai.usage.output_tokens.reasoning"
    """The number of tokens used for reasoning to create the AI output.

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: gen_ai.usage.reasoning.output_tokens
    DEPRECATED: Use gen_ai.usage.reasoning.output_tokens instead
    Example: 75
    """

    # Path: model/attributes/gen_ai/gen_ai__usage__prompt_tokens.json
    GEN_AI_USAGE_PROMPT_TOKENS: Literal["gen_ai.usage.prompt_tokens"] = (
        "gen_ai.usage.prompt_tokens"
    )
    """The number of tokens used in the GenAI input (prompt).

    Type: int
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: ai.prompt_tokens.used, gen_ai.usage.input_tokens
    DEPRECATED: Use gen_ai.usage.input_tokens instead
    Example: 20
    """

    # Path: model/attributes/gen_ai/gen_ai__usage__reasoning__output_tokens.json
    GEN_AI_USAGE_REASONING_OUTPUT_TOKENS: Literal[
        "gen_ai.usage.reasoning.output_tokens"
    ] = "gen_ai.usage.reasoning.output_tokens"
    """The number of tokens used for reasoning to create the AI output.

    Type: int
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: gen_ai.usage.output_tokens.reasoning
    Example: 75
    """

    # Path: model/attributes/gen_ai/gen_ai__usage__total_tokens.json
    GEN_AI_USAGE_TOTAL_TOKENS: Literal["gen_ai.usage.total_tokens"] = (
        "gen_ai.usage.total_tokens"
    )
    """The total number of tokens used to process the prompt. (input tokens plus output todkens)

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: ai.total_tokens.used
    Example: 20
    """

    # Path: model/attributes/graphql/graphql__document.json
    GRAPHQL_DOCUMENT: Literal["graphql.document"] = "graphql.document"
    """The GraphQL document being executed.

    Type: str
    Contains PII: true - The document may contain sensitive information in arguments or variables. Instrumentation should redact sensitive information when possible.
    Defined in OTEL: Yes
    Visibility: public
    Example: "query findBookById { bookById(id: ?) { name } }"
    """

    # Path: model/attributes/graphql/graphql__operation__name.json
    GRAPHQL_OPERATION_NAME: Literal["graphql.operation.name"] = "graphql.operation.name"
    """The name of the operation being executed.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: "findBookById"
    """

    # Path: model/attributes/graphql/graphql__operation__type.json
    GRAPHQL_OPERATION_TYPE: Literal["graphql.operation.type"] = "graphql.operation.type"
    """The type of the operation being executed.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: "query"
    """

    # Path: model/attributes/hardwareConcurrency.json
    HARDWARECONCURRENCY: Literal["hardwareConcurrency"] = "hardwareConcurrency"
    """The number of logical CPU cores available.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: device.processor_count
    DEPRECATED: Use device.processor_count instead - Old namespace-less attribute, to be replaced with device.processor_count for span-first future
    Example: "14"
    """

    # Path: model/attributes/http/http__client_ip.json
    HTTP_CLIENT_IP: Literal["http.client_ip"] = "http.client_ip"
    """Client address - domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.

    Type: str
    Contains PII: true
    Defined in OTEL: Yes
    Visibility: public
    Aliases: client.address
    DEPRECATED: Use client.address instead
    Example: "example.com"
    """

    # Path: model/attributes/http/http__decoded_response_content_length.json
    HTTP_DECODED_RESPONSE_CONTENT_LENGTH: Literal[
        "http.decoded_response_content_length"
    ] = "http.decoded_response_content_length"
    """The decoded body size of the response (in bytes).

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 456
    """

    # Path: model/attributes/http/http__flavor.json
    HTTP_FLAVOR: Literal["http.flavor"] = "http.flavor"
    """The actual version of the protocol used for network communication.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: network.protocol.version, net.protocol.version
    DEPRECATED: Use network.protocol.version instead
    Example: "1.1"
    """

    # Path: model/attributes/http/http__fragment.json
    HTTP_FRAGMENT: Literal["http.fragment"] = "http.fragment"
    """The fragments present in the URI. Note that this contains the leading # character, while the `url.fragment` attribute does not.

    Type: str
    Contains PII: true
    Defined in OTEL: No
    Visibility: public
    Example: "#details"
    """

    # Path: model/attributes/http/http__host.json
    HTTP_HOST: Literal["http.host"] = "http.host"
    """The domain name.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: server.address, client.address, http.server_name, net.host.name
    DEPRECATED: Use server.address instead - Deprecated, use one of `server.address` or `client.address`, depending on the usage
    Example: "example.com"
    """

    # Path: model/attributes/http/http__method.json
    HTTP_METHOD: Literal["http.method"] = "http.method"
    """The HTTP method used.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: http.request.method, http.request_method, method
    DEPRECATED: Use http.request.method instead
    Example: "GET"
    """

    # Path: model/attributes/http/http__query.json
    HTTP_QUERY: Literal["http.query"] = "http.query"
    """The query string present in the URL. Note that this contains the leading ? character, while the `url.query` attribute does not.

    Type: str
    Contains PII: true - Query string values can contain sensitive information. Clients should attempt to scrub parameters that might contain sensitive information.
    Defined in OTEL: No
    Visibility: public
    Example: "?foo=bar&bar=baz"
    """

    # Path: model/attributes/http/http__request__body__data.json
    HTTP_REQUEST_BODY_DATA: Literal["http.request.body.data"] = "http.request.body.data"
    """HTTP request body data. Can be given as string or structural data of any format.

    Type: str
    Contains PII: true
    Defined in OTEL: No
    Visibility: public
    Example: "[{\"role\": \"user\", \"message\": \"hello\"}]"
    """

    # Path: model/attributes/http/http__request__connect_start.json
    HTTP_REQUEST_CONNECT_START: Literal["http.request.connect_start"] = (
        "http.request.connect_start"
    )
    """The UNIX timestamp representing the time immediately before the user agent starts establishing the connection to the server to retrieve the resource.

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 1732829555.111
    """

    # Path: model/attributes/http/http__request__connection_end.json
    HTTP_REQUEST_CONNECTION_END: Literal["http.request.connection_end"] = (
        "http.request.connection_end"
    )
    """The UNIX timestamp representing the time immediately after the browser finishes establishing the connection to the server to retrieve the resource. The timestamp value includes the time interval to establish the transport connection, as well as other time intervals such as TLS handshake and SOCKS authentication.

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 1732829555.15
    """

    # Path: model/attributes/http/http__request__domain_lookup_end.json
    HTTP_REQUEST_DOMAIN_LOOKUP_END: Literal["http.request.domain_lookup_end"] = (
        "http.request.domain_lookup_end"
    )
    """The UNIX timestamp representing the time immediately after the browser finishes the domain-name lookup for the resource.

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 1732829555.201
    """

    # Path: model/attributes/http/http__request__domain_lookup_start.json
    HTTP_REQUEST_DOMAIN_LOOKUP_START: Literal["http.request.domain_lookup_start"] = (
        "http.request.domain_lookup_start"
    )
    """The UNIX timestamp representing the time immediately before the browser starts the domain name lookup for the resource.

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 1732829555.322
    """

    # Path: model/attributes/http/http__request__fetch_start.json
    HTTP_REQUEST_FETCH_START: Literal["http.request.fetch_start"] = (
        "http.request.fetch_start"
    )
    """The UNIX timestamp representing the time immediately before the browser starts to fetch the resource.

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 1732829555.389
    """

    # Path: model/attributes/http/http__request__header__[key].json
    HTTP_REQUEST_HEADER_KEY: Literal["http.request.header.<key>"] = (
        "http.request.header.<key>"
    )
    """HTTP request headers, <key> being the normalized HTTP Header name (lowercase), the value being the header values.

    Type: List[str]
    Contains PII: true
    Defined in OTEL: Yes
    Visibility: public
    Has Dynamic Suffix: true
    Example: "http.request.header.custom-header=['foo', 'bar']"
    """

    # Path: model/attributes/http/http__request__method.json
    HTTP_REQUEST_METHOD: Literal["http.request.method"] = "http.request.method"
    """The HTTP method used.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: method, http.method, http.request_method
    Example: "GET"
    """

    # Path: model/attributes/http/http__request__redirect_end.json
    HTTP_REQUEST_REDIRECT_END: Literal["http.request.redirect_end"] = (
        "http.request.redirect_end"
    )
    """The UNIX timestamp representing the timestamp immediately after receiving the last byte of the response of the last redirect

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 1732829558.502
    """

    # Path: model/attributes/http/http__request__redirect_start.json
    HTTP_REQUEST_REDIRECT_START: Literal["http.request.redirect_start"] = (
        "http.request.redirect_start"
    )
    """The UNIX timestamp representing the start time of the fetch which that initiates the redirect.

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 1732829555.495
    """

    # Path: model/attributes/http/http__request__request_start.json
    HTTP_REQUEST_REQUEST_START: Literal["http.request.request_start"] = (
        "http.request.request_start"
    )
    """The UNIX timestamp representing the time immediately before the browser starts requesting the resource from the server, cache, or local resource. If the transport connection fails and the browser retires the request, the value returned will be the start of the retry request.

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 1732829555.51
    """

    # Path: model/attributes/http/http__request__resend_count.json
    HTTP_REQUEST_RESEND_COUNT: Literal["http.request.resend_count"] = (
        "http.request.resend_count"
    )
    """The ordinal number of request resending attempt (for any reason, including redirects).

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 2
    """

    # Path: model/attributes/http/http__request__response_end.json
    HTTP_REQUEST_RESPONSE_END: Literal["http.request.response_end"] = (
        "http.request.response_end"
    )
    """The UNIX timestamp representing the time immediately after the browser receives the last byte of the resource or immediately before the transport connection is closed, whichever comes first.

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 1732829555.89
    """

    # Path: model/attributes/http/http__request__response_start.json
    HTTP_REQUEST_RESPONSE_START: Literal["http.request.response_start"] = (
        "http.request.response_start"
    )
    """The UNIX timestamp representing the time immediately before the browser starts requesting the resource from the server, cache, or local resource. If the transport connection fails and the browser retires the request, the value returned will be the start of the retry request.

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 1732829555.7
    """

    # Path: model/attributes/http/http__request__secure_connection_start.json
    HTTP_REQUEST_SECURE_CONNECTION_START: Literal[
        "http.request.secure_connection_start"
    ] = "http.request.secure_connection_start"
    """The UNIX timestamp representing the time immediately before the browser starts the handshake process to secure the current connection. If a secure connection is not used, the property returns zero.

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 1732829555.73
    """

    # Path: model/attributes/http/http__request__time_to_first_byte.json
    HTTP_REQUEST_TIME_TO_FIRST_BYTE: Literal["http.request.time_to_first_byte"] = (
        "http.request.time_to_first_byte"
    )
    """The time in seconds from the browser's timeorigin to when the first byte of the request's response was received. See https://web.dev/articles/ttfb#measure-resource-requests

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 1.032
    """

    # Path: model/attributes/http/http__request__worker_start.json
    HTTP_REQUEST_WORKER_START: Literal["http.request.worker_start"] = (
        "http.request.worker_start"
    )
    """The UNIX timestamp representing the timestamp immediately before dispatching the FetchEvent if a Service Worker thread is already running, or immediately before starting the Service Worker thread if it is not already running.

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 1732829553.68
    """

    # Path: model/attributes/http/http__request_method.json
    _HTTP_REQUEST_METHOD: Literal["http.request_method"] = "http.request_method"
    """The HTTP method used.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: method, http.method, http.request.method
    DEPRECATED: Use http.request.method instead
    Example: "GET"
    """

    # Path: model/attributes/http/http__response__body__size.json
    HTTP_RESPONSE_BODY_SIZE: Literal["http.response.body.size"] = (
        "http.response.body.size"
    )
    """The encoded body size of the response (in bytes).

    Type: int
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: http.response_content_length, http.response.header.content-length
    Example: 123
    """

    # Path: model/attributes/http/http__response__header__[key].json
    HTTP_RESPONSE_HEADER_KEY: Literal["http.response.header.<key>"] = (
        "http.response.header.<key>"
    )
    """HTTP response headers, <key> being the normalized HTTP Header name (lowercase), the value being the header values.

    Type: List[str]
    Contains PII: true
    Defined in OTEL: Yes
    Visibility: public
    Has Dynamic Suffix: true
    Example: "http.response.header.custom-header=['foo', 'bar']"
    """

    # Path: model/attributes/http/http__response__header__content-length.json
    HTTP_RESPONSE_HEADER_CONTENT_LENGTH: Literal[
        "http.response.header.content-length"
    ] = "http.response.header.content-length"
    """The size of the message body sent to the recipient (in bytes)

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: http.response_content_length, http.response.body.size
    Example: "http.response.header.custom-header=['foo', 'bar']"
    """

    # Path: model/attributes/http/http__response__size.json
    HTTP_RESPONSE_SIZE: Literal["http.response.size"] = "http.response.size"
    """The transfer size of the response (in bytes).

    Type: int
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: http.response_transfer_size
    Example: 456
    """

    # Path: model/attributes/http/http__response__status_code.json
    HTTP_RESPONSE_STATUS_CODE: Literal["http.response.status_code"] = (
        "http.response.status_code"
    )
    """The status code of the HTTP response.

    Type: int
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: http.status_code
    Example: 404
    """

    # Path: model/attributes/http/http__response_content_length.json
    HTTP_RESPONSE_CONTENT_LENGTH: Literal["http.response_content_length"] = (
        "http.response_content_length"
    )
    """The encoded body size of the response (in bytes).

    Type: int
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: http.response.body.size, http.response.header.content-length
    DEPRECATED: Use http.response.body.size instead
    Example: 123
    """

    # Path: model/attributes/http/http__response_transfer_size.json
    HTTP_RESPONSE_TRANSFER_SIZE: Literal["http.response_transfer_size"] = (
        "http.response_transfer_size"
    )
    """The transfer size of the response (in bytes).

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: http.response.size
    DEPRECATED: Use http.response.size instead
    Example: 456
    """

    # Path: model/attributes/http/http__route.json
    HTTP_ROUTE: Literal["http.route"] = "http.route"
    """The matched route, that is, the path template in the format used by the respective server framework.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: url.template
    Example: "/users/:id"
    """

    # Path: model/attributes/http/http__scheme.json
    HTTP_SCHEME: Literal["http.scheme"] = "http.scheme"
    """The URI scheme component identifying the used protocol.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: url.scheme
    DEPRECATED: Use url.scheme instead
    Example: "https"
    """

    # Path: model/attributes/http/http__server__request__time_in_queue.json
    HTTP_SERVER_REQUEST_TIME_IN_QUEUE: Literal["http.server.request.time_in_queue"] = (
        "http.server.request.time_in_queue"
    )
    """The time in milliseconds the request spent in the server queue before processing began. Measured from the X-Request-Start header set by reverse proxies (e.g., Nginx, HAProxy, Heroku) to when the application started handling the request.

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 50
    """

    # Path: model/attributes/http/http__server_name.json
    HTTP_SERVER_NAME: Literal["http.server_name"] = "http.server_name"
    """The server domain name

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: server.address, net.host.name, http.host
    DEPRECATED: Use server.address instead
    Example: "example.com"
    """

    # Path: model/attributes/http/http__status_code.json
    HTTP_STATUS_CODE: Literal["http.status_code"] = "http.status_code"
    """The status code of the HTTP response.

    Type: int
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: http.response.status_code
    DEPRECATED: Use http.response.status_code instead
    Example: 404
    """

    # Path: model/attributes/http/http__target.json
    HTTP_TARGET: Literal["http.target"] = "http.target"
    """The pathname and query string of the URL.

    Type: str
    Contains PII: true
    Defined in OTEL: Yes
    Visibility: public
    DEPRECATED: Use url.path instead - This attribute is being deprecated in favor of url.path and url.query
    Example: "/test?foo=bar#buzz"
    """

    # Path: model/attributes/http/http__url.json
    HTTP_URL: Literal["http.url"] = "http.url"
    """The URL of the resource that was fetched.

    Type: str
    Contains PII: true
    Defined in OTEL: Yes
    Visibility: public
    Aliases: url.full, url
    DEPRECATED: Use url.full instead
    Example: "https://example.com/test?foo=bar#buzz"
    """

    # Path: model/attributes/http/http__user_agent.json
    HTTP_USER_AGENT: Literal["http.user_agent"] = "http.user_agent"
    """Value of the HTTP User-Agent header sent by the client.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: user_agent.original
    DEPRECATED: Use user_agent.original instead
    Example: "Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Mobile/15E148 Safari/604.1"
    """

    # Path: model/attributes/id.json
    ID: Literal["id"] = "id"
    """A unique identifier for the span.

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Visibility: public
    Example: "f47ac10b58cc4372a5670e02b2c3d479"
    """

    # Path: model/attributes/inp.json
    INP: Literal["inp"] = "inp"
    """The value of the recorded Interaction to Next Paint (INP) web vital

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: browser.web_vital.inp.value
    DEPRECATED: Use browser.web_vital.inp.value instead - The INP web vital is now recorded as a browser.web_vital.inp.value attribute.
    Example: 200
    """

    # Path: model/attributes/jsonrpc/jsonrpc__protocol__version.json
    JSONRPC_PROTOCOL_VERSION: Literal["jsonrpc.protocol.version"] = (
        "jsonrpc.protocol.version"
    )
    """The version of the JSON-RPC protocol used.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: "2.0"
    """

    # Path: model/attributes/jsonrpc/jsonrpc__request__id.json
    JSONRPC_REQUEST_ID: Literal["jsonrpc.request.id"] = "jsonrpc.request.id"
    """The JSON-RPC request identifier. Unique within the session.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: mcp.request.id
    Example: "1"
    """

    # Path: model/attributes/jvm/jvm__gc__action.json
    JVM_GC_ACTION: Literal["jvm.gc.action"] = "jvm.gc.action"
    """Name of the garbage collector action.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: "end of minor GC"
    """

    # Path: model/attributes/jvm/jvm__gc__name.json
    JVM_GC_NAME: Literal["jvm.gc.name"] = "jvm.gc.name"
    """Name of the garbage collector.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: "G1 Young Generation"
    """

    # Path: model/attributes/jvm/jvm__memory__pool__name.json
    JVM_MEMORY_POOL_NAME: Literal["jvm.memory.pool.name"] = "jvm.memory.pool.name"
    """Name of the memory pool.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: "G1 Old Gen"
    """

    # Path: model/attributes/jvm/jvm__memory__type.json
    JVM_MEMORY_TYPE: Literal["jvm.memory.type"] = "jvm.memory.type"
    """Name of the memory pool.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: "G1 Old Gen"
    """

    # Path: model/attributes/jvm/jvm__thread__daemon.json
    JVM_THREAD_DAEMON: Literal["jvm.thread.daemon"] = "jvm.thread.daemon"
    """Whether the thread is daemon or not.

    Type: bool
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: true
    """

    # Path: model/attributes/jvm/jvm__thread__state.json
    JVM_THREAD_STATE: Literal["jvm.thread.state"] = "jvm.thread.state"
    """State of the thread.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: "blocked"
    """

    # Path: model/attributes/lcp/lcp__element.json
    LCP_ELEMENT: Literal["lcp.element"] = "lcp.element"
    """The dom element responsible for the largest contentful paint.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: browser.web_vital.lcp.element
    DEPRECATED: Use browser.web_vital.lcp.element instead - The LCP element is now recorded as a browser.web_vital.lcp.element attribute.
    Example: "img"
    """

    # Path: model/attributes/lcp/lcp__id.json
    LCP_ID: Literal["lcp.id"] = "lcp.id"
    """The id of the dom element responsible for the largest contentful paint.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: browser.web_vital.lcp.id
    DEPRECATED: Use browser.web_vital.lcp.id instead - The LCP id is now recorded as a browser.web_vital.lcp.id attribute.
    Example: "#hero"
    """

    # Path: model/attributes/lcp/lcp__loadTime.json
    LCP_LOADTIME: Literal["lcp.loadTime"] = "lcp.loadTime"
    """The time it took for the LCP element to be loaded

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: browser.web_vital.lcp.load_time
    DEPRECATED: Use browser.web_vital.lcp.load_time instead - The LCP load time is now recorded as a browser.web_vital.lcp.load_time attribute.
    Example: 1402
    """

    # Path: model/attributes/lcp/lcp__renderTime.json
    LCP_RENDERTIME: Literal["lcp.renderTime"] = "lcp.renderTime"
    """The time it took for the LCP element to be rendered

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: browser.web_vital.lcp.render_time
    DEPRECATED: Use browser.web_vital.lcp.render_time instead - The LCP render time is now recorded as a browser.web_vital.lcp.render_time attribute.
    Example: 1685
    """

    # Path: model/attributes/lcp/lcp__size.json
    LCP_SIZE: Literal["lcp.size"] = "lcp.size"
    """The size of the largest contentful paint element.

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: browser.web_vital.lcp.size
    DEPRECATED: Use browser.web_vital.lcp.size instead - The LCP size is now recorded as a browser.web_vital.lcp.size attribute.
    Example: 1234
    """

    # Path: model/attributes/lcp/lcp__url.json
    LCP_URL: Literal["lcp.url"] = "lcp.url"
    """The url of the dom element responsible for the largest contentful paint.

    Type: str
    Contains PII: true
    Defined in OTEL: No
    Visibility: public
    Aliases: browser.web_vital.lcp.url
    DEPRECATED: Use browser.web_vital.lcp.url instead - The LCP url is now recorded as a browser.web_vital.lcp.url attribute.
    Example: "https://example.com"
    """

    # Path: model/attributes/lcp.json
    LCP: Literal["lcp"] = "lcp"
    """The value of the recorded Largest Contentful Paint (LCP) web vital

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: browser.web_vital.lcp.value
    DEPRECATED: Use browser.web_vital.lcp.value instead - The LCP web vital is now recorded as a browser.web_vital.lcp.value attribute.
    Example: 2500
    """

    # Path: model/attributes/logger/logger__name.json
    LOGGER_NAME: Literal["logger.name"] = "logger.name"
    """The name of the logger that generated this event.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "myLogger"
    """

    # Path: model/attributes/mcp/mcp__cancelled__reason.json
    MCP_CANCELLED_REASON: Literal["mcp.cancelled.reason"] = "mcp.cancelled.reason"
    """Reason for the cancellation of an MCP operation.

    Type: str
    Contains PII: maybe - Cancellation reasons may contain user-specific or sensitive information
    Defined in OTEL: No
    Visibility: public
    Example: "User cancelled the request"
    """

    # Path: model/attributes/mcp/mcp__cancelled__request_id.json
    MCP_CANCELLED_REQUEST_ID: Literal["mcp.cancelled.request_id"] = (
        "mcp.cancelled.request_id"
    )
    """Request ID of the cancelled MCP operation.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "123"
    """

    # Path: model/attributes/mcp/mcp__client__name.json
    MCP_CLIENT_NAME: Literal["mcp.client.name"] = "mcp.client.name"
    """Name of the MCP client application.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "claude-desktop"
    """

    # Path: model/attributes/mcp/mcp__client__title.json
    MCP_CLIENT_TITLE: Literal["mcp.client.title"] = "mcp.client.title"
    """Display title of the MCP client application.

    Type: str
    Contains PII: maybe - Client titles may reveal user-specific application configurations or custom setups
    Defined in OTEL: No
    Visibility: public
    Example: "Claude Desktop"
    """

    # Path: model/attributes/mcp/mcp__client__version.json
    MCP_CLIENT_VERSION: Literal["mcp.client.version"] = "mcp.client.version"
    """Version of the MCP client application.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "1.0.0"
    """

    # Path: model/attributes/mcp/mcp__lifecycle__phase.json
    MCP_LIFECYCLE_PHASE: Literal["mcp.lifecycle.phase"] = "mcp.lifecycle.phase"
    """Lifecycle phase indicator for MCP operations.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "initialization_complete"
    """

    # Path: model/attributes/mcp/mcp__logging__data_type.json
    MCP_LOGGING_DATA_TYPE: Literal["mcp.logging.data_type"] = "mcp.logging.data_type"
    """Data type of the logged message content.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "string"
    """

    # Path: model/attributes/mcp/mcp__logging__level.json
    MCP_LOGGING_LEVEL: Literal["mcp.logging.level"] = "mcp.logging.level"
    """Log level for MCP logging operations.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "info"
    """

    # Path: model/attributes/mcp/mcp__logging__logger.json
    MCP_LOGGING_LOGGER: Literal["mcp.logging.logger"] = "mcp.logging.logger"
    """Logger name for MCP logging operations.

    Type: str
    Contains PII: maybe - Logger names may be user-defined and could contain sensitive information
    Defined in OTEL: No
    Visibility: public
    Example: "mcp_server"
    """

    # Path: model/attributes/mcp/mcp__logging__message.json
    MCP_LOGGING_MESSAGE: Literal["mcp.logging.message"] = "mcp.logging.message"
    """Log message content from MCP logging operations.

    Type: str
    Contains PII: true - Log messages can contain user data
    Defined in OTEL: No
    Visibility: public
    Example: "Tool execution completed successfully"
    """

    # Path: model/attributes/mcp/mcp__method__name.json
    MCP_METHOD_NAME: Literal["mcp.method.name"] = "mcp.method.name"
    """The name of the MCP request or notification method being called.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: "tools/call"
    """

    # Path: model/attributes/mcp/mcp__progress__current.json
    MCP_PROGRESS_CURRENT: Literal["mcp.progress.current"] = "mcp.progress.current"
    """Current progress value of an MCP operation.

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 50
    """

    # Path: model/attributes/mcp/mcp__progress__message.json
    MCP_PROGRESS_MESSAGE: Literal["mcp.progress.message"] = "mcp.progress.message"
    """Progress message describing the current state of an MCP operation.

    Type: str
    Contains PII: maybe - Progress messages may contain user-specific or sensitive information
    Defined in OTEL: No
    Visibility: public
    Example: "Processing 50 of 100 items"
    """

    # Path: model/attributes/mcp/mcp__progress__percentage.json
    MCP_PROGRESS_PERCENTAGE: Literal["mcp.progress.percentage"] = (
        "mcp.progress.percentage"
    )
    """Calculated progress percentage of an MCP operation. Computed from current/total * 100.

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 50
    """

    # Path: model/attributes/mcp/mcp__progress__token.json
    MCP_PROGRESS_TOKEN: Literal["mcp.progress.token"] = "mcp.progress.token"
    """Token for tracking progress of an MCP operation.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "progress-token-123"
    """

    # Path: model/attributes/mcp/mcp__progress__total.json
    MCP_PROGRESS_TOTAL: Literal["mcp.progress.total"] = "mcp.progress.total"
    """Total progress target value of an MCP operation.

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 100
    """

    # Path: model/attributes/mcp/mcp__prompt__name.json
    MCP_PROMPT_NAME: Literal["mcp.prompt.name"] = "mcp.prompt.name"
    """Name of the MCP prompt template being used.

    Type: str
    Contains PII: maybe - Prompt names may reveal user behavior patterns or sensitive operations
    Defined in OTEL: No
    Visibility: public
    Aliases: gen_ai.prompt.name
    DEPRECATED: Use gen_ai.prompt.name instead - OTel uses gen_ai.prompt.name for MCP prompt names
    Example: "summarize"
    """

    # Path: model/attributes/mcp/mcp__prompt__result__description.json
    MCP_PROMPT_RESULT_DESCRIPTION: Literal["mcp.prompt.result.description"] = (
        "mcp.prompt.result.description"
    )
    """Description of the prompt result.

    Type: str
    Contains PII: true
    Defined in OTEL: No
    Visibility: public
    Example: "A summary of the requested information"
    """

    # Path: model/attributes/mcp/mcp__prompt__result__message_content.json
    MCP_PROMPT_RESULT_MESSAGE_CONTENT: Literal["mcp.prompt.result.message_content"] = (
        "mcp.prompt.result.message_content"
    )
    """Content of the message in the prompt result. Used for single message results only.

    Type: str
    Contains PII: true
    Defined in OTEL: No
    Visibility: public
    Example: "Please provide a summary of the document"
    """

    # Path: model/attributes/mcp/mcp__prompt__result__message_count.json
    MCP_PROMPT_RESULT_MESSAGE_COUNT: Literal["mcp.prompt.result.message_count"] = (
        "mcp.prompt.result.message_count"
    )
    """Number of messages in the prompt result.

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 3
    """

    # Path: model/attributes/mcp/mcp__prompt__result__message_role.json
    MCP_PROMPT_RESULT_MESSAGE_ROLE: Literal["mcp.prompt.result.message_role"] = (
        "mcp.prompt.result.message_role"
    )
    """Role of the message in the prompt result. Used for single message results only.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "user"
    """

    # Path: model/attributes/mcp/mcp__protocol__ready.json
    MCP_PROTOCOL_READY: Literal["mcp.protocol.ready"] = "mcp.protocol.ready"
    """Protocol readiness indicator for MCP session. Non-zero value indicates the protocol is ready.

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 1
    """

    # Path: model/attributes/mcp/mcp__protocol__version.json
    MCP_PROTOCOL_VERSION: Literal["mcp.protocol.version"] = "mcp.protocol.version"
    """MCP protocol version used in the session.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: "2024-11-05"
    """

    # Path: model/attributes/mcp/mcp__request__argument__[key].json
    MCP_REQUEST_ARGUMENT_KEY: Literal["mcp.request.argument.<key>"] = (
        "mcp.request.argument.<key>"
    )
    """MCP request argument with dynamic key suffix. The <key> is replaced with the actual argument name. The value is a JSON-stringified representation of the argument value.

    Type: str
    Contains PII: true - Arguments contain user input
    Defined in OTEL: No
    Visibility: public
    Has Dynamic Suffix: true
    Example: "mcp.request.argument.query='weather in Paris'"
    """

    # Path: model/attributes/mcp/mcp__request__argument__name.json
    MCP_REQUEST_ARGUMENT_NAME: Literal["mcp.request.argument.name"] = (
        "mcp.request.argument.name"
    )
    """Name argument from prompts/get MCP request.

    Type: str
    Contains PII: true - Prompt names can contain user input
    Defined in OTEL: No
    Visibility: public
    Example: "summarize"
    """

    # Path: model/attributes/mcp/mcp__request__argument__uri.json
    MCP_REQUEST_ARGUMENT_URI: Literal["mcp.request.argument.uri"] = (
        "mcp.request.argument.uri"
    )
    """URI argument from resources/read MCP request.

    Type: str
    Contains PII: true - URIs can contain user file paths
    Defined in OTEL: No
    Visibility: public
    Example: "file:///path/to/resource"
    """

    # Path: model/attributes/mcp/mcp__request__id.json
    MCP_REQUEST_ID: Literal["mcp.request.id"] = "mcp.request.id"
    """JSON-RPC request identifier for the MCP request. Unique within the MCP session.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: jsonrpc.request.id
    DEPRECATED: Use jsonrpc.request.id instead - OTel models MCP as JSON-RPC, uses jsonrpc.request.id
    Example: "1"
    """

    # Path: model/attributes/mcp/mcp__resource__protocol.json
    MCP_RESOURCE_PROTOCOL: Literal["mcp.resource.protocol"] = "mcp.resource.protocol"
    """Protocol of the resource URI being accessed, extracted from the URI.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: network.protocol.name, net.protocol.name
    DEPRECATED: Use network.protocol.name instead - OTel uses the generic network.protocol.name attribute
    Example: "file"
    """

    # Path: model/attributes/mcp/mcp__resource__uri.json
    MCP_RESOURCE_URI: Literal["mcp.resource.uri"] = "mcp.resource.uri"
    """The resource URI being accessed in an MCP operation.

    Type: str
    Contains PII: true - URIs can contain sensitive file paths
    Defined in OTEL: Yes
    Visibility: public
    Example: "file:///path/to/file.txt"
    """

    # Path: model/attributes/mcp/mcp__server__name.json
    MCP_SERVER_NAME: Literal["mcp.server.name"] = "mcp.server.name"
    """Name of the MCP server application.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "sentry-mcp-server"
    """

    # Path: model/attributes/mcp/mcp__server__title.json
    MCP_SERVER_TITLE: Literal["mcp.server.title"] = "mcp.server.title"
    """Display title of the MCP server application.

    Type: str
    Contains PII: maybe - Server titles may reveal user-specific application configurations or custom setups
    Defined in OTEL: No
    Visibility: public
    Example: "Sentry MCP Server"
    """

    # Path: model/attributes/mcp/mcp__server__version.json
    MCP_SERVER_VERSION: Literal["mcp.server.version"] = "mcp.server.version"
    """Version of the MCP server application.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "0.1.0"
    """

    # Path: model/attributes/mcp/mcp__session__id.json
    MCP_SESSION_ID: Literal["mcp.session.id"] = "mcp.session.id"
    """Identifier for the MCP session.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: "550e8400-e29b-41d4-a716-446655440000"
    """

    # Path: model/attributes/mcp/mcp__tool__name.json
    MCP_TOOL_NAME: Literal["mcp.tool.name"] = "mcp.tool.name"
    """Name of the MCP tool being called.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: gen_ai.tool.name, ai.function_call
    DEPRECATED: Use gen_ai.tool.name instead - OTel uses gen_ai.tool.name for MCP tool names
    Example: "calculator"
    """

    # Path: model/attributes/mcp/mcp__tool__result__content.json
    MCP_TOOL_RESULT_CONTENT: Literal["mcp.tool.result.content"] = (
        "mcp.tool.result.content"
    )
    """The content of the tool result.

    Type: str
    Contains PII: true - Tool results can contain user data
    Defined in OTEL: No
    Visibility: public
    Aliases: gen_ai.tool.call.result, gen_ai.tool.message, gen_ai.tool.output
    DEPRECATED: Use gen_ai.tool.call.result instead - OTel uses gen_ai.tool.call.result for MCP tool results
    Example: "{\"output\": \"rainy\", \"toolCallId\": \"1\"}"
    """

    # Path: model/attributes/mcp/mcp__tool__result__content_count.json
    MCP_TOOL_RESULT_CONTENT_COUNT: Literal["mcp.tool.result.content_count"] = (
        "mcp.tool.result.content_count"
    )
    """Number of content items in the tool result.

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 1
    """

    # Path: model/attributes/mcp/mcp__tool__result__is_error.json
    MCP_TOOL_RESULT_IS_ERROR: Literal["mcp.tool.result.is_error"] = (
        "mcp.tool.result.is_error"
    )
    """Whether a tool execution resulted in an error.

    Type: bool
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    DEPRECATED: Use error.type instead - OTel uses error.type set to 'tool_error' when isError is true. Cannot be automatically backfilled due to type mismatch (boolean vs string).
    Example: false
    """

    # Path: model/attributes/mcp/mcp__transport.json
    MCP_TRANSPORT: Literal["mcp.transport"] = "mcp.transport"
    """Transport method used for MCP communication.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: network.transport, net.transport
    DEPRECATED: Use network.transport instead - OTel uses the generic network.transport attribute
    Example: "stdio"
    """

    # Path: model/attributes/mdc/mdc__[key].json
    MDC_KEY: Literal["mdc.<key>"] = "mdc.<key>"
    """Attributes from the Mapped Diagnostic Context (MDC) present at the moment the log record was created. The MDC is supported by all the most popular logging solutions in the Java ecosystem, and it's usually implemented as a thread-local map that stores context for e.g. a specific request.

    Type: str
    Contains PII: true
    Defined in OTEL: No
    Visibility: public
    Has Dynamic Suffix: true
    Example: "mdc.some_key='some_value'"
    """

    # Path: model/attributes/messaging/messaging__batch__message_count.json
    MESSAGING_BATCH_MESSAGE_COUNT: Literal["messaging.batch.message_count"] = (
        "messaging.batch.message_count"
    )
    """The number of messages sent, received, or processed in the scope of the batching operation.

    Type: int
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: 10
    """

    # Path: model/attributes/messaging/messaging__destination__connection.json
    MESSAGING_DESTINATION_CONNECTION: Literal["messaging.destination.connection"] = (
        "messaging.destination.connection"
    )
    """The message destination connection.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "BestTopic"
    """

    # Path: model/attributes/messaging/messaging__destination__name.json
    MESSAGING_DESTINATION_NAME: Literal["messaging.destination.name"] = (
        "messaging.destination.name"
    )
    """The message destination name.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: "BestTopic"
    """

    # Path: model/attributes/messaging/messaging__message__body__size.json
    MESSAGING_MESSAGE_BODY_SIZE: Literal["messaging.message.body.size"] = (
        "messaging.message.body.size"
    )
    """The size of the message body in bytes.

    Type: int
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: 839
    """

    # Path: model/attributes/messaging/messaging__message__envelope__size.json
    MESSAGING_MESSAGE_ENVELOPE_SIZE: Literal["messaging.message.envelope.size"] = (
        "messaging.message.envelope.size"
    )
    """The size of the message body and metadata in bytes.

    Type: int
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: 1045
    """

    # Path: model/attributes/messaging/messaging__message__id.json
    MESSAGING_MESSAGE_ID: Literal["messaging.message.id"] = "messaging.message.id"
    """A value used by the messaging system as an identifier for the message, represented as a string.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: "f47ac10b58cc4372a5670e02b2c3d479"
    """

    # Path: model/attributes/messaging/messaging__message__receive__latency.json
    MESSAGING_MESSAGE_RECEIVE_LATENCY: Literal["messaging.message.receive.latency"] = (
        "messaging.message.receive.latency"
    )
    """The latency between when the message was published and received.

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 1732847252
    """

    # Path: model/attributes/messaging/messaging__message__retry__count.json
    MESSAGING_MESSAGE_RETRY_COUNT: Literal["messaging.message.retry.count"] = (
        "messaging.message.retry.count"
    )
    """The amount of attempts to send the message.

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 2
    """

    # Path: model/attributes/messaging/messaging__operation__name.json
    MESSAGING_OPERATION_NAME: Literal["messaging.operation.name"] = (
        "messaging.operation.name"
    )
    """The name of the messaging operation being performed

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: "send"
    """

    # Path: model/attributes/messaging/messaging__operation__type.json
    MESSAGING_OPERATION_TYPE: Literal["messaging.operation.type"] = (
        "messaging.operation.type"
    )
    """A string identifying the type of the messaging operation

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: "create"
    """

    # Path: model/attributes/messaging/messaging__system.json
    MESSAGING_SYSTEM: Literal["messaging.system"] = "messaging.system"
    """The messaging system as identified by the client instrumentation.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: "activemq"
    """

    # Path: model/attributes/method.json
    METHOD: Literal["method"] = "method"
    """The HTTP method used.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: http.request.method, http.request_method, http.method
    DEPRECATED: Use http.request.method instead
    Example: "GET"
    """

    # Path: model/attributes/middleware/middleware__name.json
    MIDDLEWARE_NAME: Literal["middleware.name"] = "middleware.name"
    """The name of the middleware.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "AuthenticationMiddleware"
    """

    # Path: model/attributes/navigation/navigation__type.json
    NAVIGATION_TYPE: Literal["navigation.type"] = "navigation.type"
    """The type of navigation done by a client-side router.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "router.push"
    """

    # Path: model/attributes/nel/nel__elapsed_time.json
    NEL_ELAPSED_TIME: Literal["nel.elapsed_time"] = "nel.elapsed_time"
    """The elapsed number of milliseconds between the start of the resource fetch and when it was completed or aborted by the user agent.

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 100
    """

    # Path: model/attributes/nel/nel__phase.json
    NEL_PHASE: Literal["nel.phase"] = "nel.phase"
    """If request failed, the phase of its network error. If request succeeded, "application".

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "application"
    """

    # Path: model/attributes/nel/nel__referrer.json
    NEL_REFERRER: Literal["nel.referrer"] = "nel.referrer"
    """request's referrer, as determined by the referrer policy associated with its client.

    Type: str
    Contains PII: true
    Defined in OTEL: No
    Visibility: public
    Example: "https://example.com/foo?bar=baz"
    """

    # Path: model/attributes/nel/nel__sampling_function.json
    NEL_SAMPLING_FUNCTION: Literal["nel.sampling_function"] = "nel.sampling_function"
    """The sampling function used to determine if the request should be sampled.

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 0.5
    """

    # Path: model/attributes/nel/nel__type.json
    NEL_TYPE: Literal["nel.type"] = "nel.type"
    """If request failed, the type of its network error. If request succeeded, "ok".

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "dns.unreachable"
    """

    # Path: model/attributes/net/net__host__ip.json
    NET_HOST_IP: Literal["net.host.ip"] = "net.host.ip"
    """Local address of the network connection - IP address or Unix domain socket name.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: network.local.address, net.sock.host.addr
    DEPRECATED: Use network.local.address instead
    Example: "192.168.0.1"
    """

    # Path: model/attributes/net/net__host__name.json
    NET_HOST_NAME: Literal["net.host.name"] = "net.host.name"
    """Server domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: server.address, http.server_name, http.host
    DEPRECATED: Use server.address instead
    Example: "example.com"
    """

    # Path: model/attributes/net/net__host__port.json
    NET_HOST_PORT: Literal["net.host.port"] = "net.host.port"
    """Server port number.

    Type: int
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: server.port
    DEPRECATED: Use server.port instead
    Example: 1337
    """

    # Path: model/attributes/net/net__peer__ip.json
    NET_PEER_IP: Literal["net.peer.ip"] = "net.peer.ip"
    """Peer address of the network connection - IP address or Unix domain socket name.

    Type: str
    Contains PII: true
    Defined in OTEL: Yes
    Visibility: public
    Aliases: network.peer.address, net.sock.peer.addr
    DEPRECATED: Use network.peer.address instead
    Example: "192.168.0.1"
    """

    # Path: model/attributes/net/net__peer__name.json
    NET_PEER_NAME: Literal["net.peer.name"] = "net.peer.name"
    """Server domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.

    Type: str
    Contains PII: true
    Defined in OTEL: Yes
    Visibility: public
    DEPRECATED: Use server.address instead - Deprecated, use server.address on client spans and client.address on server spans.
    Example: "example.com"
    """

    # Path: model/attributes/net/net__peer__port.json
    NET_PEER_PORT: Literal["net.peer.port"] = "net.peer.port"
    """Peer port number.

    Type: int
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    DEPRECATED: Use server.port instead - Deprecated, use server.port on client spans and client.port on server spans.
    Example: 1337
    """

    # Path: model/attributes/net/net__protocol__name.json
    NET_PROTOCOL_NAME: Literal["net.protocol.name"] = "net.protocol.name"
    """OSI application layer or non-OSI equivalent.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: network.protocol.name, mcp.resource.protocol
    DEPRECATED: Use network.protocol.name instead
    Example: "http"
    """

    # Path: model/attributes/net/net__protocol__version.json
    NET_PROTOCOL_VERSION: Literal["net.protocol.version"] = "net.protocol.version"
    """The actual version of the protocol used for network communication.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: network.protocol.version, http.flavor
    DEPRECATED: Use network.protocol.version instead
    Example: "1.1"
    """

    # Path: model/attributes/net/net__sock__family.json
    NET_SOCK_FAMILY: Literal["net.sock.family"] = "net.sock.family"
    """OSI transport and network layer

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    DEPRECATED: Use network.transport instead - Deprecated, use network.transport and network.type.
    Example: "inet"
    """

    # Path: model/attributes/net/net__sock__host__addr.json
    NET_SOCK_HOST_ADDR: Literal["net.sock.host.addr"] = "net.sock.host.addr"
    """Local address of the network connection mapping to Unix domain socket name.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: network.local.address, net.host.ip
    DEPRECATED: Use network.local.address instead
    Example: "/var/my.sock"
    """

    # Path: model/attributes/net/net__sock__host__port.json
    NET_SOCK_HOST_PORT: Literal["net.sock.host.port"] = "net.sock.host.port"
    """Local port number of the network connection.

    Type: int
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: network.local.port
    DEPRECATED: Use network.local.port instead
    Example: 8080
    """

    # Path: model/attributes/net/net__sock__peer__addr.json
    NET_SOCK_PEER_ADDR: Literal["net.sock.peer.addr"] = "net.sock.peer.addr"
    """Peer address of the network connection - IP address

    Type: str
    Contains PII: true
    Defined in OTEL: Yes
    Visibility: public
    Aliases: network.peer.address, net.peer.ip
    DEPRECATED: Use network.peer.address instead
    Example: "192.168.0.1"
    """

    # Path: model/attributes/net/net__sock__peer__name.json
    NET_SOCK_PEER_NAME: Literal["net.sock.peer.name"] = "net.sock.peer.name"
    """Peer address of the network connection - Unix domain socket name

    Type: str
    Contains PII: true
    Defined in OTEL: Yes
    Visibility: public
    DEPRECATED: No replacement at this time - Deprecated from OTEL, no replacement at this time
    Example: "/var/my.sock"
    """

    # Path: model/attributes/net/net__sock__peer__port.json
    NET_SOCK_PEER_PORT: Literal["net.sock.peer.port"] = "net.sock.peer.port"
    """Peer port number of the network connection.

    Type: int
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    DEPRECATED: Use network.peer.port instead
    Example: 8080
    """

    # Path: model/attributes/net/net__transport.json
    NET_TRANSPORT: Literal["net.transport"] = "net.transport"
    """OSI transport layer or inter-process communication method.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: network.transport, mcp.transport
    DEPRECATED: Use network.transport instead
    Example: "tcp"
    """

    # Path: model/attributes/network/network__connection__effective_type.json
    NETWORK_CONNECTION_EFFECTIVE_TYPE: Literal["network.connection.effective_type"] = (
        "network.connection.effective_type"
    )
    """Specifies the effective type of the current connection (e.g. slow-2g, 2g, 3g, 4g).

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: effectiveConnectionType
    Example: "4g"
    """

    # Path: model/attributes/network/network__connection__rtt.json
    NETWORK_CONNECTION_RTT: Literal["network.connection.rtt"] = "network.connection.rtt"
    """Specifies the estimated effective round-trip time of the current connection, in milliseconds.

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: connection.rtt
    Example: 100
    """

    # Path: model/attributes/network/network__connection__type.json
    NETWORK_CONNECTION_TYPE: Literal["network.connection.type"] = (
        "network.connection.type"
    )
    """Specifies the type of the current connection (e.g. wifi, ethernet, cellular , etc).

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: device.connection_type, connectionType
    Example: "wifi"
    """

    # Path: model/attributes/network/network__local__address.json
    NETWORK_LOCAL_ADDRESS: Literal["network.local.address"] = "network.local.address"
    """Local address of the network connection - IP address or Unix domain socket name.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: net.host.ip, net.sock.host.addr
    Example: "10.1.2.80"
    """

    # Path: model/attributes/network/network__local__port.json
    NETWORK_LOCAL_PORT: Literal["network.local.port"] = "network.local.port"
    """Local port number of the network connection.

    Type: int
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: net.sock.host.port
    Example: 65400
    """

    # Path: model/attributes/network/network__peer__address.json
    NETWORK_PEER_ADDRESS: Literal["network.peer.address"] = "network.peer.address"
    """Peer address of the network connection - IP address or Unix domain socket name.

    Type: str
    Contains PII: true
    Defined in OTEL: Yes
    Visibility: public
    Aliases: net.peer.ip, net.sock.peer.addr
    Example: "10.1.2.80"
    """

    # Path: model/attributes/network/network__peer__port.json
    NETWORK_PEER_PORT: Literal["network.peer.port"] = "network.peer.port"
    """Peer port number of the network connection.

    Type: int
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: 65400
    """

    # Path: model/attributes/network/network__protocol__name.json
    NETWORK_PROTOCOL_NAME: Literal["network.protocol.name"] = "network.protocol.name"
    """OSI application layer or non-OSI equivalent.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: net.protocol.name, mcp.resource.protocol
    Example: "http"
    """

    # Path: model/attributes/network/network__protocol__version.json
    NETWORK_PROTOCOL_VERSION: Literal["network.protocol.version"] = (
        "network.protocol.version"
    )
    """The actual version of the protocol used for network communication.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: http.flavor, net.protocol.version
    Example: "1.1"
    """

    # Path: model/attributes/network/network__transport.json
    NETWORK_TRANSPORT: Literal["network.transport"] = "network.transport"
    """OSI transport layer or inter-process communication method.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: net.transport, mcp.transport
    Example: "tcp"
    """

    # Path: model/attributes/network/network__type.json
    NETWORK_TYPE: Literal["network.type"] = "network.type"
    """OSI network layer or non-OSI equivalent.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: "ipv4"
    """

    # Path: model/attributes/os/os__build.json
    OS_BUILD: Literal["os.build"] = "os.build"
    """The build ID of the operating system.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: os.build_id
    DEPRECATED: Use os.build_id instead
    Example: "1234567890"
    """

    # Path: model/attributes/os/os__build_id.json
    OS_BUILD_ID: Literal["os.build_id"] = "os.build_id"
    """The build ID of the operating system.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: os.build
    Example: "1234567890"
    """

    # Path: model/attributes/os/os__description.json
    OS_DESCRIPTION: Literal["os.description"] = "os.description"
    """Human readable (not intended to be parsed) OS version information, like e.g. reported by ver or lsb_release -a commands.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: "Ubuntu 18.04.1 LTS"
    """

    # Path: model/attributes/os/os__kernel_version.json
    OS_KERNEL_VERSION: Literal["os.kernel_version"] = "os.kernel_version"
    """An independent kernel version string. Typically the entire output of the `uname` syscall.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "20.2.0"
    """

    # Path: model/attributes/os/os__name.json
    OS_NAME: Literal["os.name"] = "os.name"
    """Human readable operating system name.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: "Ubuntu"
    """

    # Path: model/attributes/os/os__raw_description.json
    OS_RAW_DESCRIPTION: Literal["os.raw_description"] = "os.raw_description"
    """An unprocessed description string obtained by the operating system. For some well-known runtimes, Sentry will attempt to parse `name` and `version` from this string, if they are not explicitly given.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "Ubuntu 22.04.4 LTS (Jammy Jellyfish)"
    """

    # Path: model/attributes/os/os__rooted.json
    OS_ROOTED: Literal["os.rooted"] = "os.rooted"
    """Whether the operating system has been jailbroken or rooted.

    Type: bool
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: true
    """

    # Path: model/attributes/os/os__theme.json
    OS_THEME: Literal["os.theme"] = "os.theme"
    """Whether the OS runs in dark mode or light mode.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "dark"
    """

    # Path: model/attributes/os/os__type.json
    OS_TYPE: Literal["os.type"] = "os.type"
    """The operating system type.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: "linux"
    """

    # Path: model/attributes/os/os__version.json
    OS_VERSION: Literal["os.version"] = "os.version"
    """The version of the operating system.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: "18.04.2"
    """

    # Path: model/attributes/otel/otel__scope__name.json
    OTEL_SCOPE_NAME: Literal["otel.scope.name"] = "otel.scope.name"
    """The name of the instrumentation scope - (InstrumentationScope.Name in OTLP).

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: "io.opentelemetry.contrib.mongodb"
    """

    # Path: model/attributes/otel/otel__scope__version.json
    OTEL_SCOPE_VERSION: Literal["otel.scope.version"] = "otel.scope.version"
    """The version of the instrumentation scope - (InstrumentationScope.Version in OTLP).

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: "2.4.5"
    """

    # Path: model/attributes/otel/otel__status_code.json
    OTEL_STATUS_CODE: Literal["otel.status_code"] = "otel.status_code"
    """Name of the code, either “OK” or “ERROR”. MUST NOT be set if the status code is UNSET.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: "OK"
    """

    # Path: model/attributes/otel/otel__status_description.json
    OTEL_STATUS_DESCRIPTION: Literal["otel.status_description"] = (
        "otel.status_description"
    )
    """Description of the Status if it has a value, otherwise not set.

    Type: str
    Contains PII: true
    Defined in OTEL: Yes
    Visibility: public
    Example: "resource not found"
    """

    # Path: model/attributes/params/params__[key].json
    PARAMS_KEY: Literal["params.<key>"] = "params.<key>"
    """Decoded parameters extracted from a URL path. Usually added by client-side routing frameworks like vue-router.

    Type: str
    Contains PII: true
    Defined in OTEL: No
    Visibility: public
    Has Dynamic Suffix: true
    Aliases: url.path.parameter.<key>
    Example: "params.id='123'"
    """

    # Path: model/attributes/performance/performance__activationStart.json
    PERFORMANCE_ACTIVATIONSTART: Literal["performance.activationStart"] = (
        "performance.activationStart"
    )
    """The time between initiating a navigation to a page and the browser activating the page

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: browser.performance.navigation.activation_start
    DEPRECATED: Use browser.performance.navigation.activation_start instead - The activationStart is now recorded as the browser.performance.navigation.activation_start attribute.
    Example: 1.983
    """

    # Path: model/attributes/performance/performance__timeOrigin.json
    PERFORMANCE_TIMEORIGIN: Literal["performance.timeOrigin"] = "performance.timeOrigin"
    """The browser's performance.timeOrigin timestamp representing the time when the pageload was initiated

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: browser.performance.time_origin
    DEPRECATED: Use browser.performance.time_origin instead - The timeOrigin is now recorded as the browser.performance.time_origin attribute.
    Example: 1776185678.886
    """

    # Path: model/attributes/previous_route.json
    PREVIOUS_ROUTE: Literal["previous_route"] = "previous_route"
    """Also used by mobile SDKs to indicate the previous route in the application.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "HomeScreen"
    """

    # Path: model/attributes/process/process__command_args.json
    PROCESS_COMMAND_ARGS: Literal["process.command_args"] = "process.command_args"
    """All the command arguments (including the command/executable itself) as received by the process.

    Type: List[str]
    Contains PII: true
    Defined in OTEL: Yes
    Visibility: public
    Example: ["cmd/otecol","--config=config.yaml"]
    """

    # Path: model/attributes/process/process__executable__name.json
    PROCESS_EXECUTABLE_NAME: Literal["process.executable.name"] = (
        "process.executable.name"
    )
    """The name of the executable that started the process.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: "getsentry"
    """

    # Path: model/attributes/process/process__pid.json
    PROCESS_PID: Literal["process.pid"] = "process.pid"
    """The process ID of the running process.

    Type: int
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: 12345
    """

    # Path: model/attributes/process/process__runtime__description.json
    PROCESS_RUNTIME_DESCRIPTION: Literal["process.runtime.description"] = (
        "process.runtime.description"
    )
    """An additional description about the runtime of the process, for example a specific vendor customization of the runtime environment. Equivalent to `raw_description` in the Sentry runtime context.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: runtime.raw_description
    Example: "Eclipse OpenJ9 VM openj9-0.21.0"
    """

    # Path: model/attributes/process/process__runtime__engine__name.json
    PROCESS_RUNTIME_ENGINE_NAME: Literal["process.runtime.engine.name"] = (
        "process.runtime.engine.name"
    )
    """The name of the runtime engine.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "v8"
    """

    # Path: model/attributes/process/process__runtime__engine__version.json
    PROCESS_RUNTIME_ENGINE_VERSION: Literal["process.runtime.engine.version"] = (
        "process.runtime.engine.version"
    )
    """The version of the runtime engine.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "12.9.202.13-rusty"
    """

    # Path: model/attributes/process/process__runtime__name.json
    PROCESS_RUNTIME_NAME: Literal["process.runtime.name"] = "process.runtime.name"
    """The name of the runtime. Equivalent to `name` in the Sentry runtime context.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: runtime.name
    Example: "node"
    """

    # Path: model/attributes/process/process__runtime__version.json
    PROCESS_RUNTIME_VERSION: Literal["process.runtime.version"] = (
        "process.runtime.version"
    )
    """The version of the runtime of this process, as returned by the runtime without modification. Equivalent to `version` in the Sentry runtime context.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: runtime.version
    Example: "18.04.2"
    """

    # Path: model/attributes/query/query__[key].json
    QUERY_KEY: Literal["query.<key>"] = "query.<key>"
    """An item in a query string. Usually added by client-side routing frameworks like vue-router.

    Type: str
    Contains PII: true
    Defined in OTEL: No
    Visibility: public
    Has Dynamic Suffix: true
    DEPRECATED: Use url.query instead - Instead of sending items individually in query.<key>, they should be sent all together with url.query.
    Example: "query.id='123'"
    """

    # Path: model/attributes/react/react__version.json
    REACT_VERSION: Literal["react.version"] = "react.version"
    """The version of the React framework

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "18.2.0"
    """

    # Path: model/attributes/release.json
    RELEASE: Literal["release"] = "release"
    """The sentry release.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: sentry.release
    DEPRECATED: Use sentry.release instead
    Example: "production"
    """

    # Path: model/attributes/remix/remix__action_form_data__[key].json
    REMIX_ACTION_FORM_DATA_KEY: Literal["remix.action_form_data.<key>"] = (
        "remix.action_form_data.<key>"
    )
    """Remix form data, <key> being the form data key, the value being the form data value.

    Type: str
    Contains PII: true
    Defined in OTEL: No
    Visibility: public
    Has Dynamic Suffix: true
    Example: "http.response.header.text='test'"
    """

    # Path: model/attributes/replay_id.json
    REPLAY_ID: Literal["replay_id"] = "replay_id"
    """The id of the sentry replay.

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Visibility: public
    Aliases: sentry.replay_id
    DEPRECATED: Use sentry.replay_id instead
    Example: "123e4567e89b12d3a456426614174000"
    """

    # Path: model/attributes/resource/resource__deployment__environment.json
    RESOURCE_DEPLOYMENT_ENVIRONMENT: Literal["resource.deployment.environment"] = (
        "resource.deployment.environment"
    )
    """The software deployment environment name.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    DEPRECATED: Use sentry.environment instead
    Example: "production"
    """

    # Path: model/attributes/resource/resource__deployment__environment__name.json
    RESOURCE_DEPLOYMENT_ENVIRONMENT_NAME: Literal[
        "resource.deployment.environment.name"
    ] = "resource.deployment.environment.name"
    """The software deployment environment name.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    DEPRECATED: Use sentry.environment instead
    Example: "production"
    """

    # Path: model/attributes/resource/resource__render_blocking_status.json
    RESOURCE_RENDER_BLOCKING_STATUS: Literal["resource.render_blocking_status"] = (
        "resource.render_blocking_status"
    )
    """The render blocking status of the resource.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "non-blocking"
    """

    # Path: model/attributes/route.json
    ROUTE: Literal["route"] = "route"
    """The matched route, that is, the path template in the format used by the respective server framework. Also used by mobile SDKs to indicate the current route in the application.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: http.route
    DEPRECATED: Use http.route instead
    Example: "App\\Controller::indexAction"
    """

    # Path: model/attributes/rpc/rpc__grpc__status_code.json
    RPC_GRPC_STATUS_CODE: Literal["rpc.grpc.status_code"] = "rpc.grpc.status_code"
    """The numeric status code of the gRPC request.

    Type: int
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: 2
    """

    # Path: model/attributes/rpc/rpc__method.json
    RPC_METHOD: Literal["rpc.method"] = "rpc.method"
    """The fully-qualified logical name of the method from the RPC interface perspective.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: "com.example.ExampleService/exampleMethod"
    """

    # Path: model/attributes/rpc/rpc__response__status_code.json
    RPC_RESPONSE_STATUS_CODE: Literal["rpc.response.status_code"] = (
        "rpc.response.status_code"
    )
    """Status code of the RPC returned by the RPC server or generated by the client.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: "DEADLINE_EXCEEDED"
    """

    # Path: model/attributes/rpc/rpc__service.json
    RPC_SERVICE: Literal["rpc.service"] = "rpc.service"
    """The full (logical) name of the service being called, including its package name, if applicable.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: "myService.BestService"
    """

    # Path: model/attributes/runtime/runtime__build.json
    RUNTIME_BUILD: Literal["runtime.build"] = "runtime.build"
    """The application build string, when it is separate from the version.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    DEPRECATED: No replacement at this time - The runtime.* namespace is deprecated in favor of process.runtime.*. No direct OTel equivalent exists for this attribute.
    Example: "stable"
    """

    # Path: model/attributes/runtime/runtime__name.json
    RUNTIME_NAME: Literal["runtime.name"] = "runtime.name"
    """The name of the runtime. For example node, CPython, or rustc.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: process.runtime.name
    DEPRECATED: Use process.runtime.name instead - Prefer OTel-aligned process.runtime.name
    Example: "node"
    """

    # Path: model/attributes/runtime/runtime__raw_description.json
    RUNTIME_RAW_DESCRIPTION: Literal["runtime.raw_description"] = (
        "runtime.raw_description"
    )
    """Unprocessed description string as obtained from the runtime. Used to extract name and version for well-known runtimes.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: process.runtime.description
    DEPRECATED: Use process.runtime.description instead - Prefer OTel-aligned process.runtime.description
    Example: "Eclipse OpenJ9 VM openj9-0.21.0"
    """

    # Path: model/attributes/runtime/runtime__version.json
    RUNTIME_VERSION: Literal["runtime.version"] = "runtime.version"
    """The version of the runtime.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: process.runtime.version
    DEPRECATED: Use process.runtime.version instead - Prefer OTel-aligned process.runtime.version
    Example: "18.04.2"
    """

    # Path: model/attributes/score/score__[key].json
    SCORE_KEY: Literal["score.<key>"] = "score.<key>"
    """The weighted performance score for a web vital. This is defined as `score.weight.<key>` * `score.ratio.<key>`.

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Has Dynamic Suffix: true
    Example: "score.cls=0.1723"
    """

    # Path: model/attributes/score/score__ratio__[key].json
    SCORE_RATIO_KEY: Literal["score.ratio.<key>"] = "score.ratio.<key>"
    """The score for a web vital, normalized to a number between 0 and 1.

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Has Dynamic Suffix: true
    Example: "score.ratio.inp=0.7748"
    """

    # Path: model/attributes/score/score__total.json
    SCORE_TOTAL: Literal["score.total"] = "score.total"
    """The total performance score of a span. This is the sum of individual weighted web vital scores (see `score.<key>`).

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    """

    # Path: model/attributes/score/score__weight__[key].json
    SCORE_WEIGHT_KEY: Literal["score.weight.<key>"] = "score.weight.<key>"
    """The relative weight of a web vital in a span's performance score.

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Has Dynamic Suffix: true
    Example: "score.weight.fcp=0.25"
    """

    # Path: model/attributes/sentry/sentry__action.json
    SENTRY_ACTION: Literal["sentry.action"] = "sentry.action"
    """Used as a generic attribute representing the action depending on the type of span. For instance, this is the database query operation for DB spans, and the request method for HTTP spans.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "SELECT"
    """

    # Path: model/attributes/sentry/sentry__browser__name.json
    SENTRY_BROWSER_NAME: Literal["sentry.browser.name"] = "sentry.browser.name"
    """The name of the browser.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: browser.name
    DEPRECATED: Use browser.name instead
    Example: "Chrome"
    """

    # Path: model/attributes/sentry/sentry__browser__version.json
    SENTRY_BROWSER_VERSION: Literal["sentry.browser.version"] = "sentry.browser.version"
    """The version of the browser.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: browser.version
    DEPRECATED: Use browser.version instead
    Example: "120.0.6099.130"
    """

    # Path: model/attributes/sentry/sentry__cancellation_reason.json
    SENTRY_CANCELLATION_REASON: Literal["sentry.cancellation_reason"] = (
        "sentry.cancellation_reason"
    )
    """The reason why a span ended early.

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Visibility: public
    Example: "document.hidden"
    """

    # Path: model/attributes/sentry/sentry__category.json
    SENTRY_CATEGORY: Literal["sentry.category"] = "sentry.category"
    """The high-level category of a span, derived from the span operation or span attributes. This categorizes spans by their general purpose (e.g., database, HTTP, UI). Known values include: 'ai', 'ai.pipeline', 'app', 'browser', 'cache', 'console', 'db', 'event', 'file', 'function.aws', 'function.azure', 'function.gcp', 'function.nextjs', 'function.remix', 'graphql', 'grpc', 'http', 'measure', 'middleware', 'navigation', 'pageload', 'queue', 'resource', 'rpc', 'serialize', 'subprocess', 'template', 'topic', 'ui', 'ui.angular', 'ui.ember', 'ui.react', 'ui.svelte', 'ui.vue', 'view', 'websocket'.

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Visibility: public
    Example: "db"
    """

    # Path: model/attributes/sentry/sentry__client_sample_rate.json
    SENTRY_CLIENT_SAMPLE_RATE: Literal["sentry.client_sample_rate"] = (
        "sentry.client_sample_rate"
    )
    """Rate at which a span was sampled in the SDK.

    Type: float
    Contains PII: false
    Defined in OTEL: No
    Visibility: public
    Example: 0.5
    """

    # Path: model/attributes/sentry/sentry__description.json
    SENTRY_DESCRIPTION: Literal["sentry.description"] = "sentry.description"
    """The human-readable description of a span.

    Type: str
    Contains PII: true
    Defined in OTEL: No
    Visibility: public
    Example: "index view query"
    """

    # Path: model/attributes/sentry/sentry__dist.json
    SENTRY_DIST: Literal["sentry.dist"] = "sentry.dist"
    """The sentry dist.

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Visibility: public
    Example: "1.0"
    """

    # Path: model/attributes/sentry/sentry__domain.json
    SENTRY_DOMAIN: Literal["sentry.domain"] = "sentry.domain"
    """Used as a generic attribute representing the domain depending on the type of span. For instance, this is the collection/table name for database spans, and the server address for HTTP spans.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "example.com"
    """

    # Path: model/attributes/sentry/sentry__dsc__environment.json
    SENTRY_DSC_ENVIRONMENT: Literal["sentry.dsc.environment"] = "sentry.dsc.environment"
    """The environment from the dynamic sampling context.

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Visibility: internal
    Example: "prod"
    """

    # Path: model/attributes/sentry/sentry__dsc__project_id.json
    SENTRY_DSC_PROJECT_ID: Literal["sentry.dsc.project_id"] = "sentry.dsc.project_id"
    """The ID of the project where the trace originated (i.e. the project of the SDK that started the trace). Propagated through the dynamic sampling context and set by Relay during ingestion.

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Visibility: internal
    Example: "12345"
    """

    # Path: model/attributes/sentry/sentry__dsc__public_key.json
    SENTRY_DSC_PUBLIC_KEY: Literal["sentry.dsc.public_key"] = "sentry.dsc.public_key"
    """The public key from the dynamic sampling context.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: internal
    Example: "c51734c603c4430eb57cb0a5728a479d"
    """

    # Path: model/attributes/sentry/sentry__dsc__release.json
    SENTRY_DSC_RELEASE: Literal["sentry.dsc.release"] = "sentry.dsc.release"
    """The release identifier from the dynamic sampling context.

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Visibility: internal
    Example: "frontend@e8211be71b214afab5b85de4b4c54be3714952bb"
    """

    # Path: model/attributes/sentry/sentry__dsc__sample_rate.json
    SENTRY_DSC_SAMPLE_RATE: Literal["sentry.dsc.sample_rate"] = "sentry.dsc.sample_rate"
    """The sample rate from the dynamic sampling context.

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Visibility: internal
    Example: "1.0"
    """

    # Path: model/attributes/sentry/sentry__dsc__sampled.json
    SENTRY_DSC_SAMPLED: Literal["sentry.dsc.sampled"] = "sentry.dsc.sampled"
    """Whether the event was sampled according to the dynamic sampling context.

    Type: bool
    Contains PII: false
    Defined in OTEL: No
    Visibility: internal
    Example: true
    """

    # Path: model/attributes/sentry/sentry__dsc__trace_id.json
    SENTRY_DSC_TRACE_ID: Literal["sentry.dsc.trace_id"] = "sentry.dsc.trace_id"
    """The trace ID from the dynamic sampling context.

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Visibility: internal
    Example: "047372980460430cbc78d9779df33a46"
    """

    # Path: model/attributes/sentry/sentry__dsc__transaction.json
    SENTRY_DSC_TRANSACTION: Literal["sentry.dsc.transaction"] = "sentry.dsc.transaction"
    """The transaction name from the dynamic sampling context.

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Visibility: internal
    Example: "/issues/errors-outages/"
    """

    # Path: model/attributes/sentry/sentry__environment.json
    SENTRY_ENVIRONMENT: Literal["sentry.environment"] = "sentry.environment"
    """The sentry environment.

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Visibility: public
    Aliases: environment
    Example: "production"
    """

    # Path: model/attributes/sentry/sentry__exclusive_time.json
    SENTRY_EXCLUSIVE_TIME: Literal["sentry.exclusive_time"] = "sentry.exclusive_time"
    """The exclusive time duration of the span in milliseconds.

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 1234
    """

    # Path: model/attributes/sentry/sentry__graphql__operation.json
    SENTRY_GRAPHQL_OPERATION: Literal["sentry.graphql.operation"] = (
        "sentry.graphql.operation"
    )
    """Indicates the type of graphql operation, emitted by the Javascript SDK.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "getUserById"
    """

    # Path: model/attributes/sentry/sentry__group.json
    SENTRY_GROUP: Literal["sentry.group"] = "sentry.group"
    """Stores the hash of `sentry.normalized_description`. This is primarily used for grouping spans in the product end.

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Visibility: public
    """

    # Path: model/attributes/sentry/sentry__http__prefetch.json
    SENTRY_HTTP_PREFETCH: Literal["sentry.http.prefetch"] = "sentry.http.prefetch"
    """If an http request was a prefetch request.

    Type: bool
    Contains PII: false
    Defined in OTEL: No
    Visibility: public
    Example: true
    """

    # Path: model/attributes/sentry/sentry__idle_span_finish_reason.json
    SENTRY_IDLE_SPAN_FINISH_REASON: Literal["sentry.idle_span_finish_reason"] = (
        "sentry.idle_span_finish_reason"
    )
    """The reason why an idle span ended early.

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Visibility: public
    Example: "idleTimeout"
    """

    # Path: model/attributes/sentry/sentry__is_remote.json
    SENTRY_IS_REMOTE: Literal["sentry.is_remote"] = "sentry.is_remote"
    """Indicates whether a span's parent is remote.

    Type: bool
    Contains PII: false
    Defined in OTEL: No
    Visibility: public
    Example: true
    """

    # Path: model/attributes/sentry/sentry__kind.json
    SENTRY_KIND: Literal["sentry.kind"] = "sentry.kind"
    """Used to clarify the relationship between parents and children, or to distinguish between spans, e.g. a `server` and `client` span with the same name.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "server"
    """

    # Path: model/attributes/sentry/sentry__main_thread.json
    SENTRY_MAIN_THREAD: Literal["sentry.main_thread"] = "sentry.main_thread"
    """Whether the span or event occurred on the main thread. Computed by Relay and should not be set by SDKs.

    Type: bool
    Contains PII: false
    Defined in OTEL: No
    Visibility: public
    Example: true
    """

    # Path: model/attributes/sentry/sentry__message__parameter__[key].json
    SENTRY_MESSAGE_PARAMETER_KEY: Literal["sentry.message.parameter.<key>"] = (
        "sentry.message.parameter.<key>"
    )
    """A parameter used in the message template. <key> can either be the number that represent the parameter's position in the template string (sentry.message.parameter.0, sentry.message.parameter.1, etc) or the parameter's name (sentry.message.parameter.item_id, sentry.message.parameter.user_id, etc)

    Type: str
    Contains PII: true
    Defined in OTEL: No
    Visibility: public
    Example: "sentry.message.parameter.0='123'"
    """

    # Path: model/attributes/sentry/sentry__message__template.json
    SENTRY_MESSAGE_TEMPLATE: Literal["sentry.message.template"] = (
        "sentry.message.template"
    )
    """The parameterized template string.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "Hello, {name}!"
    """

    # Path: model/attributes/sentry/sentry__mobile.json
    SENTRY_MOBILE: Literal["sentry.mobile"] = "sentry.mobile"
    """Whether the application is using a mobile SDK. Computed by Relay and should not be set by SDKs.

    Type: bool
    Contains PII: false
    Defined in OTEL: No
    Visibility: public
    Example: true
    """

    # Path: model/attributes/sentry/sentry__module__[key].json
    SENTRY_MODULE_KEY: Literal["sentry.module.<key>"] = "sentry.module.<key>"
    """A module that was loaded in the process. The key is the name of the module.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Has Dynamic Suffix: true
    Example: "sentry.module.brianium/paratest='v7.7.0'"
    """

    # Path: model/attributes/sentry/sentry__nextjs__ssr__function__route.json
    SENTRY_NEXTJS_SSR_FUNCTION_ROUTE: Literal["sentry.nextjs.ssr.function.route"] = (
        "sentry.nextjs.ssr.function.route"
    )
    """A parameterized route for a function in Next.js that contributes to Server-Side Rendering. Should be present on spans that track such functions when the file location of the function is known.

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Visibility: public
    Example: "/posts/[id]/layout"
    """

    # Path: model/attributes/sentry/sentry__nextjs__ssr__function__type.json
    SENTRY_NEXTJS_SSR_FUNCTION_TYPE: Literal["sentry.nextjs.ssr.function.type"] = (
        "sentry.nextjs.ssr.function.type"
    )
    """A descriptor for a for a function in Next.js that contributes to Server-Side Rendering. Should be present on spans that track such functions.

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Visibility: public
    Example: "generateMetadata"
    """

    # Path: model/attributes/sentry/sentry__normalized_db_query.json
    SENTRY_NORMALIZED_DB_QUERY: Literal["sentry.normalized_db_query"] = (
        "sentry.normalized_db_query"
    )
    """The normalized version of `db.query.text`.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "SELECT .. FROM sentry_project WHERE (project_id = %s)"
    """

    # Path: model/attributes/sentry/sentry__normalized_db_query__hash.json
    SENTRY_NORMALIZED_DB_QUERY_HASH: Literal["sentry.normalized_db_query.hash"] = (
        "sentry.normalized_db_query.hash"
    )
    """The hash of `sentry.normalized_db_query`.

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Visibility: public
    """

    # Path: model/attributes/sentry/sentry__normalized_description.json
    SENTRY_NORMALIZED_DESCRIPTION: Literal["sentry.normalized_description"] = (
        "sentry.normalized_description"
    )
    """Used as a generic attribute representing the normalized `sentry.description`. This refers to the legacy use case of `sentry.description` where it holds relevant data depending on the type of span (e.g. database query, resource url, http request description, etc).

    Type: str
    Contains PII: true
    Defined in OTEL: No
    Visibility: public
    Example: "SELECT .. FROM sentry_project WHERE (project_id = %s)"
    """

    # Path: model/attributes/sentry/sentry__observed_timestamp_nanos.json
    SENTRY_OBSERVED_TIMESTAMP_NANOS: Literal["sentry.observed_timestamp_nanos"] = (
        "sentry.observed_timestamp_nanos"
    )
    """The timestamp at which an envelope was received by Relay, in nanoseconds.

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Visibility: public
    Example: "1544712660300000000"
    """

    # Path: model/attributes/sentry/sentry__op.json
    SENTRY_OP: Literal["sentry.op"] = "sentry.op"
    """The operation of a span.

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Visibility: public
    Example: "http.client"
    """

    # Path: model/attributes/sentry/sentry__origin.json
    SENTRY_ORIGIN: Literal["sentry.origin"] = "sentry.origin"
    """The origin of the instrumentation (e.g. span, log, etc.)

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Visibility: public
    Example: "auto.http.otel.fastify"
    """

    # Path: model/attributes/sentry/sentry__platform.json
    SENTRY_PLATFORM: Literal["sentry.platform"] = "sentry.platform"
    """The sdk platform that generated the event.

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Visibility: public
    Example: "php"
    """

    # Path: model/attributes/sentry/sentry__profile_id.json
    SENTRY_PROFILE_ID: Literal["sentry.profile_id"] = "sentry.profile_id"
    """The ID of the Sentry profile the span is associated with. This is only meaningful for transaction-based profiling.

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Visibility: public
    Example: "123e4567e89b12d3a456426614174000"
    """

    # Path: model/attributes/sentry/sentry__profiler_id.json
    SENTRY_PROFILER_ID: Literal["sentry.profiler_id"] = "sentry.profiler_id"
    """The id of the currently running profiler (continuous profiling)

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Visibility: public
    Example: "18779b64dd35d1a538e7ce2dd2d3fad3"
    """

    # Path: model/attributes/sentry/sentry__release.json
    SENTRY_RELEASE: Literal["sentry.release"] = "sentry.release"
    """The sentry release.

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Visibility: public
    Aliases: service.version, release
    Example: "7.0.0"
    """

    # Path: model/attributes/sentry/sentry__replay_id.json
    SENTRY_REPLAY_ID: Literal["sentry.replay_id"] = "sentry.replay_id"
    """The id of the sentry replay.

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Visibility: public
    Aliases: replay_id
    Example: "123e4567e89b12d3a456426614174000"
    """

    # Path: model/attributes/sentry/sentry__replay_is_buffering.json
    SENTRY_REPLAY_IS_BUFFERING: Literal["sentry.replay_is_buffering"] = (
        "sentry.replay_is_buffering"
    )
    """A sentinel attribute on log events indicating whether the current Session Replay is being buffered (onErrorSampleRate).

    Type: bool
    Contains PII: false
    Defined in OTEL: No
    Visibility: public
    Example: true
    """

    # Path: model/attributes/sentry/sentry__report_event.json
    SENTRY_REPORT_EVENT: Literal["sentry.report_event"] = "sentry.report_event"
    """(Deprecated) The event that caused the SDK to report CLS or LCP (pagehide or navigation)

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    DEPRECATED: No replacement at this time - The report event is now recorded as a browser.web_vital.lcp.report_event or browser.web_vital.cls.report_event attribute. No backfill required.
    Example: "pagehide"
    """

    # Path: model/attributes/sentry/sentry__sdk__integrations.json
    SENTRY_SDK_INTEGRATIONS: Literal["sentry.sdk.integrations"] = (
        "sentry.sdk.integrations"
    )
    """A list of names identifying enabled integrations. The list shouldhave all enabled integrations, including default integrations. Defaultintegrations are included because different SDK releases may contain differentdefault integrations.

    Type: List[str]
    Contains PII: false
    Defined in OTEL: No
    Visibility: public
    Example: ["InboundFilters","FunctionToString","BrowserApiErrors","Breadcrumbs"]
    """

    # Path: model/attributes/sentry/sentry__sdk__name.json
    SENTRY_SDK_NAME: Literal["sentry.sdk.name"] = "sentry.sdk.name"
    """The sentry sdk name.

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Visibility: public
    Example: "@sentry/react"
    """

    # Path: model/attributes/sentry/sentry__sdk__version.json
    SENTRY_SDK_VERSION: Literal["sentry.sdk.version"] = "sentry.sdk.version"
    """The sentry sdk version.

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Visibility: public
    Example: "7.0.0"
    """

    # Path: model/attributes/sentry/sentry__segment__id.json
    SENTRY_SEGMENT_ID: Literal["sentry.segment.id"] = "sentry.segment.id"
    """The segment ID of a span

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Visibility: public
    Aliases: sentry.segment_id
    Example: "051581bf3cb55c13"
    """

    # Path: model/attributes/sentry/sentry__segment__name.json
    SENTRY_SEGMENT_NAME: Literal["sentry.segment.name"] = "sentry.segment.name"
    """The segment name of a span

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: sentry.transaction, transaction
    Example: "GET /user"
    """

    # Path: model/attributes/sentry/sentry__segment_id.json
    _SENTRY_SEGMENT_ID: Literal["sentry.segment_id"] = "sentry.segment_id"
    """The segment ID of a span

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Visibility: public
    Aliases: sentry.segment.id
    DEPRECATED: Use sentry.segment.id instead
    Example: "051581bf3cb55c13"
    """

    # Path: model/attributes/sentry/sentry__server_sample_rate.json
    SENTRY_SERVER_SAMPLE_RATE: Literal["sentry.server_sample_rate"] = (
        "sentry.server_sample_rate"
    )
    """Rate at which a span was sampled in Relay.

    Type: float
    Contains PII: false
    Defined in OTEL: No
    Visibility: public
    Example: 0.5
    """

    # Path: model/attributes/sentry/sentry__source.json
    SENTRY_SOURCE: Literal["sentry.source"] = "sentry.source"
    """The source of a span, also referred to as transaction source. Known values are:  `'custom'`, `'url'`, `'route'`, `'component'`, `'view'`, `'task'`. '`source`' describes a parametrized route, while `'url'` describes the full URL, potentially containing identifiers.

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Visibility: public
    DEPRECATED: Use sentry.span.source instead - This attribute is being deprecated in favor of sentry.span.source
    Example: "route"
    """

    # Path: model/attributes/sentry/sentry__span__source.json
    SENTRY_SPAN_SOURCE: Literal["sentry.span.source"] = "sentry.span.source"
    """The source of a span, also referred to as transaction source. Known values are:  `'custom'`, `'url'`, `'route'`, `'component'`, `'view'`, `'task'`. '`source`' describes a parametrized route, while `'url'` describes the full URL, potentially containing identifiers.

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Visibility: public
    Example: "route"
    """

    # Path: model/attributes/sentry/sentry__status__message.json
    SENTRY_STATUS_MESSAGE: Literal["sentry.status.message"] = "sentry.status.message"
    """The from OTLP extracted status message.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "foobar"
    """

    # Path: model/attributes/sentry/sentry__status_code.json
    SENTRY_STATUS_CODE: Literal["sentry.status_code"] = "sentry.status_code"
    """The HTTP status code used in Sentry Insights. Typically set by Sentry during ingestion, rather than by clients.

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 200
    """

    # Path: model/attributes/sentry/sentry__timestamp__sequence.json
    SENTRY_TIMESTAMP_SEQUENCE: Literal["sentry.timestamp.sequence"] = (
        "sentry.timestamp.sequence"
    )
    """A sequencing counter for deterministic ordering of logs or metrics when timestamps share the same integer millisecond. Starts at 0 on SDK initialization, increments by 1 for each captured item, and resets to 0 when the integer millisecond of the current item differs from the previous one.

    Type: int
    Contains PII: false
    Defined in OTEL: No
    Visibility: public
    Example: 0
    """

    # Path: model/attributes/sentry/sentry__trace__parent_span_id.json
    SENTRY_TRACE_PARENT_SPAN_ID: Literal["sentry.trace.parent_span_id"] = (
        "sentry.trace.parent_span_id"
    )
    """The span id of the span that was active when the log was collected. This should not be set if there was no active span.

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Visibility: public
    DEPRECATED: No replacement at this time
    Example: "b0e6f15b45c36b12"
    """

    # Path: model/attributes/sentry/sentry__transaction.json
    SENTRY_TRANSACTION: Literal["sentry.transaction"] = "sentry.transaction"
    """The sentry transaction (segment name).

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Visibility: public
    Aliases: sentry.segment.name, transaction
    DEPRECATED: Use sentry.segment.name instead - This attribute is being deprecated in favor of sentry.segment.name
    Example: "GET /"
    """

    # Path: model/attributes/sentry/sentry__user__email.json
    SENTRY_USER_EMAIL: Literal["sentry.user.email"] = "sentry.user.email"
    """User email address.

    Type: str
    Contains PII: true
    Defined in OTEL: No
    Visibility: public
    Aliases: user.email
    DEPRECATED: Use user.email instead
    """

    # Path: model/attributes/sentry/sentry__user__geo__city.json
    SENTRY_USER_GEO_CITY: Literal["sentry.user.geo.city"] = "sentry.user.geo.city"
    """Human readable city name.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: user.geo.city
    DEPRECATED: Use user.geo.city instead
    """

    # Path: model/attributes/sentry/sentry__user__geo__country_code.json
    SENTRY_USER_GEO_COUNTRY_CODE: Literal["sentry.user.geo.country_code"] = (
        "sentry.user.geo.country_code"
    )
    """Two-letter country code (ISO 3166-1 alpha-2).

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: user.geo.country_code
    DEPRECATED: Use user.geo.country_code instead
    """

    # Path: model/attributes/sentry/sentry__user__geo__region.json
    SENTRY_USER_GEO_REGION: Literal["sentry.user.geo.region"] = "sentry.user.geo.region"
    """Human readable region name or code.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: user.geo.region
    DEPRECATED: Use user.geo.region instead
    """

    # Path: model/attributes/sentry/sentry__user__geo__subdivision.json
    SENTRY_USER_GEO_SUBDIVISION: Literal["sentry.user.geo.subdivision"] = (
        "sentry.user.geo.subdivision"
    )
    """Human readable subdivision name.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: user.geo.subdivision
    DEPRECATED: Use user.geo.subdivision instead
    """

    # Path: model/attributes/sentry/sentry__user__id.json
    SENTRY_USER_ID: Literal["sentry.user.id"] = "sentry.user.id"
    """Unique identifier of the user.

    Type: str
    Contains PII: true
    Defined in OTEL: No
    Visibility: public
    Aliases: user.id
    DEPRECATED: Use user.id instead
    """

    # Path: model/attributes/sentry/sentry__user__ip.json
    SENTRY_USER_IP: Literal["sentry.user.ip"] = "sentry.user.ip"
    """The IP address of the user.

    Type: str
    Contains PII: true
    Defined in OTEL: No
    Visibility: public
    Aliases: user.ip_address
    DEPRECATED: Use user.ip_address instead
    """

    # Path: model/attributes/sentry/sentry__user__username.json
    SENTRY_USER_USERNAME: Literal["sentry.user.username"] = "sentry.user.username"
    """Short name or login/username of the user.

    Type: str
    Contains PII: true
    Defined in OTEL: No
    Visibility: public
    Aliases: user.name
    DEPRECATED: Use user.name instead
    """

    # Path: model/attributes/server/server__address.json
    SERVER_ADDRESS: Literal["server.address"] = "server.address"
    """Server domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: http.server_name, net.host.name, http.host
    Example: "example.com"
    """

    # Path: model/attributes/server/server__port.json
    SERVER_PORT: Literal["server.port"] = "server.port"
    """Server port number.

    Type: int
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: net.host.port
    Example: 1337
    """

    # Path: model/attributes/service/service__name.json
    SERVICE_NAME: Literal["service.name"] = "service.name"
    """Logical name of the service.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: "omegastar"
    """

    # Path: model/attributes/service/service__version.json
    SERVICE_VERSION: Literal["service.version"] = "service.version"
    """The version string of the service API or implementation. The format is not defined by these conventions.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: sentry.release
    Example: "5.0.0"
    """

    # Path: model/attributes/session/session__id.json
    SESSION_ID: Literal["session.id"] = "session.id"
    """A unique id identifying the active session at the time of setting this attribute

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: "00112233-4455-6677-8899-aabbccddeeff"
    """

    # Path: model/attributes/stall_percentage.json
    STALL_PERCENTAGE: Literal["stall_percentage"] = "stall_percentage"
    """The fraction of time the app was stalled. Only applies to React Native. This is computed by Relay.

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    """

    # Path: model/attributes/stall_total_time.json
    STALL_TOTAL_TIME: Literal["stall_total_time"] = "stall_total_time"
    """The combined duration of all stalls in milliseconds. Only applies to React Native. This is computed by Relay.

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    """

    # Path: model/attributes/state/state__type.json
    STATE_TYPE: Literal["state.type"] = "state.type"
    """The type of state management library

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "redux"
    """

    # Path: model/attributes/thread/thread__id.json
    THREAD_ID: Literal["thread.id"] = "thread.id"
    """Current “managed” thread ID.

    Type: int
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: 56
    """

    # Path: model/attributes/thread/thread__name.json
    THREAD_NAME: Literal["thread.name"] = "thread.name"
    """Current thread name.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: "main"
    """

    # Path: model/attributes/timber/timber__tag.json
    TIMBER_TAG: Literal["timber.tag"] = "timber.tag"
    """The log tag provided by the timber logging framework.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "MyTag"
    """

    # Path: model/attributes/time_to_full_display.json
    TIME_TO_FULL_DISPLAY: Literal["time_to_full_display"] = "time_to_full_display"
    """The duration of time to full display in milliseconds

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: app.vitals.ttfd.value
    DEPRECATED: Use app.vitals.ttfd.value instead - Replaced by app.vitals.ttfd.value to align with the app.vitals.* namespace for mobile performance attributes
    Example: 1234.56
    """

    # Path: model/attributes/time_to_initial_display.json
    TIME_TO_INITIAL_DISPLAY: Literal["time_to_initial_display"] = (
        "time_to_initial_display"
    )
    """The duration of time to initial display in milliseconds

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: app.vitals.ttid.value
    DEPRECATED: Use app.vitals.ttid.value instead - Replaced by app.vitals.ttid.value to align with the app.vitals.* namespace for mobile performance attributes
    Example: 1234.56
    """

    # Path: model/attributes/transaction.json
    TRANSACTION: Literal["transaction"] = "transaction"
    """The sentry transaction (segment name).

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: sentry.segment.name, sentry.transaction
    DEPRECATED: Use sentry.segment.name instead
    Example: "GET /"
    """

    # Path: model/attributes/trpc/trpc__procedure_path.json
    TRPC_PROCEDURE_PATH: Literal["trpc.procedure_path"] = "trpc.procedure_path"
    """The path of the tRPC procedure being called

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "user.getById"
    """

    # Path: model/attributes/trpc/trpc__procedure_type.json
    TRPC_PROCEDURE_TYPE: Literal["trpc.procedure_type"] = "trpc.procedure_type"
    """The type of the tRPC procedure

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "query"
    """

    # Path: model/attributes/ttfb/ttfb__requestTime.json
    TTFB_REQUESTTIME: Literal["ttfb.requestTime"] = "ttfb.requestTime"
    """The time it takes for the server to process the initial request and send the first byte of a response to the user's browser

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: browser.web_vital.ttfb.request_time
    DEPRECATED: Use browser.web_vital.ttfb.request_time instead - This attribute is being deprecated in favor of browser.web_vital.ttfb.request_time
    Example: 1554.5814
    """

    # Path: model/attributes/ttfb.json
    TTFB: Literal["ttfb"] = "ttfb"
    """The value of the recorded Time To First Byte (TTFB) web vital in milliseconds

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: browser.web_vital.ttfb.value
    DEPRECATED: Use browser.web_vital.ttfb.value instead - This attribute is being deprecated in favor of browser.web_vital.ttfb.value
    Example: 194
    """

    # Path: model/attributes/type.json
    TYPE: Literal["type"] = "type"
    """More granular type of the operation happening.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "fetch"
    """

    # Path: model/attributes/ui/ui__component_name.json
    UI_COMPONENT_NAME: Literal["ui.component_name"] = "ui.component_name"
    """The name of the associated component.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "HomeButton"
    """

    # Path: model/attributes/ui/ui__contributes_to_ttfd.json
    UI_CONTRIBUTES_TO_TTFD: Literal["ui.contributes_to_ttfd"] = "ui.contributes_to_ttfd"
    """Whether the span execution contributed to the TTFD (time to fully drawn) metric.

    Type: bool
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: true
    """

    # Path: model/attributes/ui/ui__contributes_to_ttid.json
    UI_CONTRIBUTES_TO_TTID: Literal["ui.contributes_to_ttid"] = "ui.contributes_to_ttid"
    """Whether the span execution contributed to the TTID (time to initial display) metric.

    Type: bool
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: true
    """

    # Path: model/attributes/ui/ui__element__height.json
    UI_ELEMENT_HEIGHT: Literal["ui.element.height"] = "ui.element.height"
    """The height of the UI element (for Html in pixels)

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 256
    """

    # Path: model/attributes/ui/ui__element__id.json
    UI_ELEMENT_ID: Literal["ui.element.id"] = "ui.element.id"
    """The id of the UI element

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "btn-login"
    """

    # Path: model/attributes/ui/ui__element__identifier.json
    UI_ELEMENT_IDENTIFIER: Literal["ui.element.identifier"] = "ui.element.identifier"
    """The identifier used to measure the UI element timing

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "heroImage"
    """

    # Path: model/attributes/ui/ui__element__load_time.json
    UI_ELEMENT_LOAD_TIME: Literal["ui.element.load_time"] = "ui.element.load_time"
    """The loading time of a UI element (from time origin to finished loading)

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 998.2234
    """

    # Path: model/attributes/ui/ui__element__paint_type.json
    UI_ELEMENT_PAINT_TYPE: Literal["ui.element.paint_type"] = "ui.element.paint_type"
    """The type of element paint. Can either be 'image-paint' or 'text-paint'

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "image-paint"
    """

    # Path: model/attributes/ui/ui__element__render_time.json
    UI_ELEMENT_RENDER_TIME: Literal["ui.element.render_time"] = "ui.element.render_time"
    """The rendering time of the UI element (from time origin to finished rendering)

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 1023.1124
    """

    # Path: model/attributes/ui/ui__element__type.json
    UI_ELEMENT_TYPE: Literal["ui.element.type"] = "ui.element.type"
    """type of the UI element

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "img"
    """

    # Path: model/attributes/ui/ui__element__url.json
    UI_ELEMENT_URL: Literal["ui.element.url"] = "ui.element.url"
    """The URL of the UI element (e.g. an img src)

    Type: str
    Contains PII: true
    Defined in OTEL: No
    Visibility: public
    Example: "https://assets.myapp.com/hero.png"
    """

    # Path: model/attributes/ui/ui__element__width.json
    UI_ELEMENT_WIDTH: Literal["ui.element.width"] = "ui.element.width"
    """The width of the UI element (for HTML in pixels)

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 512
    """

    # Path: model/attributes/url/url__domain.json
    URL_DOMAIN: Literal["url.domain"] = "url.domain"
    """Server domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: "example.com"
    """

    # Path: model/attributes/url/url__fragment.json
    URL_FRAGMENT: Literal["url.fragment"] = "url.fragment"
    """The fragments present in the URI. Note that this does not contain the leading # character, while the `http.fragment` attribute does.

    Type: str
    Contains PII: true
    Defined in OTEL: Yes
    Visibility: public
    Example: "details"
    """

    # Path: model/attributes/url/url__full.json
    URL_FULL: Literal["url.full"] = "url.full"
    """The URL of the resource that was fetched.

    Type: str
    Contains PII: true
    Defined in OTEL: Yes
    Visibility: public
    Aliases: http.url, url
    Example: "https://example.com/test?foo=bar#buzz"
    """

    # Path: model/attributes/url/url__path.json
    URL_PATH: Literal["url.path"] = "url.path"
    """The URI path component.

    Type: str
    Contains PII: true
    Defined in OTEL: Yes
    Visibility: public
    Example: "/foo"
    """

    # Path: model/attributes/url/url__path__parameter__[key].json
    URL_PATH_PARAMETER_KEY: Literal["url.path.parameter.<key>"] = (
        "url.path.parameter.<key>"
    )
    """Decoded parameters extracted from a URL path. Usually added by client-side routing frameworks like vue-router.

    Type: str
    Contains PII: true
    Defined in OTEL: No
    Visibility: public
    Has Dynamic Suffix: true
    Aliases: params.<key>
    Example: "url.path.parameter.id='123'"
    """

    # Path: model/attributes/url/url__port.json
    URL_PORT: Literal["url.port"] = "url.port"
    """Server port number.

    Type: int
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Example: 1337
    """

    # Path: model/attributes/url/url__query.json
    URL_QUERY: Literal["url.query"] = "url.query"
    """The query string present in the URL. Note that this does not contain the leading ? character, while the `http.query` attribute does.

    Type: str
    Contains PII: true - Query string values can contain sensitive information. Clients should attempt to scrub parameters that might contain sensitive information.
    Defined in OTEL: Yes
    Visibility: public
    Example: "foo=bar&bar=baz"
    """

    # Path: model/attributes/url/url__scheme.json
    URL_SCHEME: Literal["url.scheme"] = "url.scheme"
    """The URI scheme component identifying the used protocol.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: http.scheme
    Example: "https"
    """

    # Path: model/attributes/url/url__template.json
    URL_TEMPLATE: Literal["url.template"] = "url.template"
    """The low-cardinality template of an absolute path reference.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: http.route
    Example: "/users/:id"
    """

    # Path: model/attributes/url.json
    URL: Literal["url"] = "url"
    """The URL of the resource that was fetched.

    Type: str
    Contains PII: true
    Defined in OTEL: No
    Visibility: public
    Aliases: url.full, http.url
    DEPRECATED: Use url.full instead
    Example: "https://example.com/test?foo=bar#buzz"
    """

    # Path: model/attributes/user/user__email.json
    USER_EMAIL: Literal["user.email"] = "user.email"
    """User email address.

    Type: str
    Contains PII: true
    Defined in OTEL: Yes
    Visibility: public
    Aliases: sentry.user.email
    Example: "test@example.com"
    """

    # Path: model/attributes/user/user__full_name.json
    USER_FULL_NAME: Literal["user.full_name"] = "user.full_name"
    """User's full name.

    Type: str
    Contains PII: true
    Defined in OTEL: Yes
    Visibility: public
    Example: "John Smith"
    """

    # Path: model/attributes/user/user__geo__city.json
    USER_GEO_CITY: Literal["user.geo.city"] = "user.geo.city"
    """Human readable city name.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: sentry.user.geo.city
    Example: "Toronto"
    """

    # Path: model/attributes/user/user__geo__country_code.json
    USER_GEO_COUNTRY_CODE: Literal["user.geo.country_code"] = "user.geo.country_code"
    """Two-letter country code (ISO 3166-1 alpha-2).

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: sentry.user.geo.country_code
    Example: "CA"
    """

    # Path: model/attributes/user/user__geo__region.json
    USER_GEO_REGION: Literal["user.geo.region"] = "user.geo.region"
    """Human readable region name or code.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: sentry.user.geo.region
    Example: "Canada"
    """

    # Path: model/attributes/user/user__geo__subdivision.json
    USER_GEO_SUBDIVISION: Literal["user.geo.subdivision"] = "user.geo.subdivision"
    """Human readable subdivision name.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Aliases: sentry.user.geo.subdivision
    Example: "Ontario"
    """

    # Path: model/attributes/user/user__hash.json
    USER_HASH: Literal["user.hash"] = "user.hash"
    """Unique user hash to correlate information for a user in anonymized form.

    Type: str
    Contains PII: true
    Defined in OTEL: Yes
    Visibility: public
    Example: "8ae4c2993e0f4f3b8b2d1b1f3b5e8f4d"
    """

    # Path: model/attributes/user/user__id.json
    USER_ID: Literal["user.id"] = "user.id"
    """Unique identifier of the user.

    Type: str
    Contains PII: true
    Defined in OTEL: Yes
    Visibility: public
    Aliases: sentry.user.id
    Example: "S-1-5-21-202424912787-2692429404-2351956786-1000"
    """

    # Path: model/attributes/user/user__ip_address.json
    USER_IP_ADDRESS: Literal["user.ip_address"] = "user.ip_address"
    """The IP address of the user.

    Type: str
    Contains PII: true
    Defined in OTEL: No
    Visibility: public
    Aliases: sentry.user.ip
    Example: "192.168.1.1"
    """

    # Path: model/attributes/user/user__name.json
    USER_NAME: Literal["user.name"] = "user.name"
    """Short name or login/username of the user.

    Type: str
    Contains PII: true
    Defined in OTEL: Yes
    Visibility: public
    Aliases: sentry.user.username
    Example: "j.smith"
    """

    # Path: model/attributes/user/user__roles.json
    USER_ROLES: Literal["user.roles"] = "user.roles"
    """Array of user roles at the time of the event.

    Type: List[str]
    Contains PII: true
    Defined in OTEL: Yes
    Visibility: public
    Example: ["admin","editor"]
    """

    # Path: model/attributes/user_agent/user_agent__original.json
    USER_AGENT_ORIGINAL: Literal["user_agent.original"] = "user_agent.original"
    """Value of the HTTP User-Agent header sent by the client.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Visibility: public
    Aliases: http.user_agent
    Example: "Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Mobile/15E148 Safari/604.1"
    """

    # Path: model/attributes/vercel/vercel__branch.json
    VERCEL_BRANCH: Literal["vercel.branch"] = "vercel.branch"
    """Git branch name for Vercel project

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "main"
    """

    # Path: model/attributes/vercel/vercel__build_id.json
    VERCEL_BUILD_ID: Literal["vercel.build_id"] = "vercel.build_id"
    """Identifier for the Vercel build (only present on build logs)

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "bld_cotnkcr76"
    """

    # Path: model/attributes/vercel/vercel__deployment_id.json
    VERCEL_DEPLOYMENT_ID: Literal["vercel.deployment_id"] = "vercel.deployment_id"
    """Identifier for the Vercel deployment

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "dpl_233NRGRjVZX1caZrXWtz5g1TAksD"
    """

    # Path: model/attributes/vercel/vercel__destination.json
    VERCEL_DESTINATION: Literal["vercel.destination"] = "vercel.destination"
    """Origin of the external content in Vercel (only on external logs)

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "https://vitals.vercel-insights.com/v1"
    """

    # Path: model/attributes/vercel/vercel__edge_type.json
    VERCEL_EDGE_TYPE: Literal["vercel.edge_type"] = "vercel.edge_type"
    """Type of edge runtime in Vercel

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "edge-function"
    """

    # Path: model/attributes/vercel/vercel__entrypoint.json
    VERCEL_ENTRYPOINT: Literal["vercel.entrypoint"] = "vercel.entrypoint"
    """Entrypoint for the request in Vercel

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "api/index.js"
    """

    # Path: model/attributes/vercel/vercel__execution_region.json
    VERCEL_EXECUTION_REGION: Literal["vercel.execution_region"] = (
        "vercel.execution_region"
    )
    """Region where the request is executed

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "sfo1"
    """

    # Path: model/attributes/vercel/vercel__id.json
    VERCEL_ID: Literal["vercel.id"] = "vercel.id"
    """Unique identifier for the log entry in Vercel

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "1573817187330377061717300000"
    """

    # Path: model/attributes/vercel/vercel__ja3_digest.json
    VERCEL_JA3_DIGEST: Literal["vercel.ja3_digest"] = "vercel.ja3_digest"
    """JA3 fingerprint digest of Vercel request

    Type: str
    Contains PII: true
    Defined in OTEL: No
    Visibility: public
    Example: "769,47-53-5-10-49161-49162-49171-49172-50-56-19-4,0-10-11,23-24-25,0"
    """

    # Path: model/attributes/vercel/vercel__ja4_digest.json
    VERCEL_JA4_DIGEST: Literal["vercel.ja4_digest"] = "vercel.ja4_digest"
    """JA4 fingerprint digest

    Type: str
    Contains PII: true
    Defined in OTEL: No
    Visibility: public
    Example: "t13d1516h2_8daaf6152771_02713d6af862"
    """

    # Path: model/attributes/vercel/vercel__log_type.json
    VERCEL_LOG_TYPE: Literal["vercel.log_type"] = "vercel.log_type"
    """Vercel log output type

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "stdout"
    """

    # Path: model/attributes/vercel/vercel__path.json
    VERCEL_PATH: Literal["vercel.path"] = "vercel.path"
    """Function or dynamic path of the request in Vercel.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "/dynamic/[route].json"
    """

    # Path: model/attributes/vercel/vercel__project_id.json
    VERCEL_PROJECT_ID: Literal["vercel.project_id"] = "vercel.project_id"
    """Identifier for the Vercel project

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "gdufoJxB6b9b1fEqr1jUtFkyavUU"
    """

    # Path: model/attributes/vercel/vercel__project_name.json
    VERCEL_PROJECT_NAME: Literal["vercel.project_name"] = "vercel.project_name"
    """Name of the Vercel project

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "my-app"
    """

    # Path: model/attributes/vercel/vercel__proxy__cache_id.json
    VERCEL_PROXY_CACHE_ID: Literal["vercel.proxy.cache_id"] = "vercel.proxy.cache_id"
    """Original request ID when request is served from cache

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "pdx1::v8g4b-1744143786684-93dafbc0f70d"
    """

    # Path: model/attributes/vercel/vercel__proxy__client_ip.json
    VERCEL_PROXY_CLIENT_IP: Literal["vercel.proxy.client_ip"] = "vercel.proxy.client_ip"
    """Client IP address

    Type: str
    Contains PII: true
    Defined in OTEL: No
    Visibility: public
    Example: "120.75.16.101"
    """

    # Path: model/attributes/vercel/vercel__proxy__host.json
    VERCEL_PROXY_HOST: Literal["vercel.proxy.host"] = "vercel.proxy.host"
    """Hostname of the request

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "test.vercel.app"
    """

    # Path: model/attributes/vercel/vercel__proxy__lambda_region.json
    VERCEL_PROXY_LAMBDA_REGION: Literal["vercel.proxy.lambda_region"] = (
        "vercel.proxy.lambda_region"
    )
    """Region where lambda function executed

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "sfo1"
    """

    # Path: model/attributes/vercel/vercel__proxy__method.json
    VERCEL_PROXY_METHOD: Literal["vercel.proxy.method"] = "vercel.proxy.method"
    """HTTP method of the request

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "GET"
    """

    # Path: model/attributes/vercel/vercel__proxy__path.json
    VERCEL_PROXY_PATH: Literal["vercel.proxy.path"] = "vercel.proxy.path"
    """Request path with query parameters

    Type: str
    Contains PII: true
    Defined in OTEL: No
    Visibility: public
    Example: "/dynamic/some-value.json?route=some-value"
    """

    # Path: model/attributes/vercel/vercel__proxy__path_type.json
    VERCEL_PROXY_PATH_TYPE: Literal["vercel.proxy.path_type"] = "vercel.proxy.path_type"
    """How the request was served based on its path and project configuration

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "func"
    """

    # Path: model/attributes/vercel/vercel__proxy__path_type_variant.json
    VERCEL_PROXY_PATH_TYPE_VARIANT: Literal["vercel.proxy.path_type_variant"] = (
        "vercel.proxy.path_type_variant"
    )
    """Variant of the path type

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "api"
    """

    # Path: model/attributes/vercel/vercel__proxy__referer.json
    VERCEL_PROXY_REFERER: Literal["vercel.proxy.referer"] = "vercel.proxy.referer"
    """Referer of the request

    Type: str
    Contains PII: true
    Defined in OTEL: No
    Visibility: public
    Example: "*.vercel.app"
    """

    # Path: model/attributes/vercel/vercel__proxy__region.json
    VERCEL_PROXY_REGION: Literal["vercel.proxy.region"] = "vercel.proxy.region"
    """Region where the request is processed

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "sfo1"
    """

    # Path: model/attributes/vercel/vercel__proxy__response_byte_size.json
    VERCEL_PROXY_RESPONSE_BYTE_SIZE: Literal["vercel.proxy.response_byte_size"] = (
        "vercel.proxy.response_byte_size"
    )
    """Size of the response in bytes

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 1024
    """

    # Path: model/attributes/vercel/vercel__proxy__scheme.json
    VERCEL_PROXY_SCHEME: Literal["vercel.proxy.scheme"] = "vercel.proxy.scheme"
    """Protocol of the request

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "https"
    """

    # Path: model/attributes/vercel/vercel__proxy__status_code.json
    VERCEL_PROXY_STATUS_CODE: Literal["vercel.proxy.status_code"] = (
        "vercel.proxy.status_code"
    )
    """HTTP status code of the proxy request

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 200
    """

    # Path: model/attributes/vercel/vercel__proxy__timestamp.json
    VERCEL_PROXY_TIMESTAMP: Literal["vercel.proxy.timestamp"] = "vercel.proxy.timestamp"
    """Unix timestamp when the proxy request was made

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 1573817250172
    """

    # Path: model/attributes/vercel/vercel__proxy__user_agent.json
    VERCEL_PROXY_USER_AGENT: Literal["vercel.proxy.user_agent"] = (
        "vercel.proxy.user_agent"
    )
    """User agent strings of the request

    Type: List[str]
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: ["Mozilla/5.0..."]
    """

    # Path: model/attributes/vercel/vercel__proxy__vercel_cache.json
    VERCEL_PROXY_VERCEL_CACHE: Literal["vercel.proxy.vercel_cache"] = (
        "vercel.proxy.vercel_cache"
    )
    """Cache status sent to the browser

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "REVALIDATED"
    """

    # Path: model/attributes/vercel/vercel__proxy__vercel_id.json
    VERCEL_PROXY_VERCEL_ID: Literal["vercel.proxy.vercel_id"] = "vercel.proxy.vercel_id"
    """Vercel-specific identifier

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "sfo1::abc123"
    """

    # Path: model/attributes/vercel/vercel__proxy__waf_action.json
    VERCEL_PROXY_WAF_ACTION: Literal["vercel.proxy.waf_action"] = (
        "vercel.proxy.waf_action"
    )
    """Action taken by firewall rules

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "deny"
    """

    # Path: model/attributes/vercel/vercel__proxy__waf_rule_id.json
    VERCEL_PROXY_WAF_RULE_ID: Literal["vercel.proxy.waf_rule_id"] = (
        "vercel.proxy.waf_rule_id"
    )
    """ID of the firewall rule that matched

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "rule_gAHz8jtSB1Gy"
    """

    # Path: model/attributes/vercel/vercel__request_id.json
    VERCEL_REQUEST_ID: Literal["vercel.request_id"] = "vercel.request_id"
    """Identifier of the Vercel request

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "643af4e3-975a-4cc7-9e7a-1eda11539d90"
    """

    # Path: model/attributes/vercel/vercel__source.json
    VERCEL_SOURCE: Literal["vercel.source"] = "vercel.source"
    """Origin of the Vercel log (build, edge, lambda, static, external, or firewall)

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: "build"
    """

    # Path: model/attributes/vercel/vercel__status_code.json
    VERCEL_STATUS_CODE: Literal["vercel.status_code"] = "vercel.status_code"
    """HTTP status code of the request (-1 means no response returned and the lambda crashed)

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Visibility: public
    Example: 200
    """


ATTRIBUTE_METADATA: Dict[str, AttributeMetadata] = {
    "ai.citations": AttributeMetadata(
        brief="References or sources cited by the AI model in its response.",
        type=AttributeType.STRING_ARRAY,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=["Citation 1", "Citation 2"],
        deprecation=DeprecationInfo(),
        changelog=[
            ChangelogEntry(version="0.5.0", prs=[264]),
            ChangelogEntry(version="0.1.0", prs=[55]),
        ],
    ),
    "ai.completion_tokens.used": AttributeMetadata(
        brief="The number of tokens used to respond to the message.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=10,
        deprecation=DeprecationInfo(
            replacement="gen_ai.usage.output_tokens", status=DeprecationStatus.BACKFILL
        ),
        aliases=["gen_ai.usage.output_tokens", "gen_ai.usage.completion_tokens"],
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.1.0", prs=[57, 61]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "ai.documents": AttributeMetadata(
        brief="Documents or content chunks used as context for the AI model.",
        type=AttributeType.STRING_ARRAY,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=["document1.txt", "document2.pdf"],
        deprecation=DeprecationInfo(),
        changelog=[
            ChangelogEntry(version="0.5.0", prs=[264]),
            ChangelogEntry(version="0.1.0", prs=[55]),
        ],
    ),
    "ai.finish_reason": AttributeMetadata(
        brief="The reason why the model stopped generating.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="COMPLETE",
        deprecation=DeprecationInfo(
            replacement="gen_ai.response.finish_reasons",
            status=DeprecationStatus.BACKFILL,
        ),
        aliases=["gen_ai.response.finish_reasons"],
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[55, 57, 61, 108, 127]),
        ],
    ),
    "ai.frequency_penalty": AttributeMetadata(
        brief="Used to reduce repetitiveness of generated tokens. The higher the value, the stronger a penalty is applied to previously present tokens, proportional to how many times they have already appeared in the prompt or prior generation.",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=0.5,
        deprecation=DeprecationInfo(
            replacement="gen_ai.request.frequency_penalty",
            status=DeprecationStatus.BACKFILL,
        ),
        aliases=["gen_ai.request.frequency_penalty"],
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.1.0", prs=[55, 57, 61, 108]),
        ],
    ),
    "ai.function_call": AttributeMetadata(
        brief="For an AI model call, the function that was called. This is deprecated for OpenAI, and replaced by tool_calls",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="function_name",
        deprecation=DeprecationInfo(
            replacement="gen_ai.tool.name", status=DeprecationStatus.BACKFILL
        ),
        aliases=["gen_ai.tool.name", "mcp.tool.name"],
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[55, 57, 61, 108]),
        ],
    ),
    "ai.generation_id": AttributeMetadata(
        brief="Unique identifier for the completion.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="gen_123abc",
        deprecation=DeprecationInfo(
            replacement="gen_ai.response.id", status=DeprecationStatus.BACKFILL
        ),
        aliases=["gen_ai.response.id"],
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[55, 57, 61, 108, 127]),
        ],
    ),
    "ai.input_messages": AttributeMetadata(
        brief="The input messages sent to the model",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example='[{"role": "user", "message": "hello"}]',
        deprecation=DeprecationInfo(
            replacement="gen_ai.input.messages", status=DeprecationStatus.BACKFILL
        ),
        aliases=["gen_ai.request.messages"],
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[65, 119]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "ai.is_search_required": AttributeMetadata(
        brief="Boolean indicating if the model needs to perform a search.",
        type=AttributeType.BOOLEAN,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=False,
        deprecation=DeprecationInfo(),
        changelog=[
            ChangelogEntry(version="0.5.0", prs=[264]),
            ChangelogEntry(version="0.1.0", prs=[55]),
        ],
    ),
    "ai.metadata": AttributeMetadata(
        brief="Extra metadata passed to an AI pipeline step.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example='{"user_id": 123, "session_id": "abc123"}',
        deprecation=DeprecationInfo(),
        changelog=[
            ChangelogEntry(version="0.5.0", prs=[264]),
            ChangelogEntry(version="0.1.0", prs=[55, 127]),
        ],
    ),
    "ai.model.provider": AttributeMetadata(
        brief="The provider of the model.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="openai",
        deprecation=DeprecationInfo(
            replacement="gen_ai.provider.name", status=DeprecationStatus.BACKFILL
        ),
        aliases=["gen_ai.provider.name", "gen_ai.system"],
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[253]),
            ChangelogEntry(version="0.1.0", prs=[57, 61, 108, 127]),
        ],
    ),
    "ai.model_id": AttributeMetadata(
        brief="The vendor-specific ID of the model used.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="gpt-4",
        deprecation=DeprecationInfo(
            replacement="gen_ai.response.model", status=DeprecationStatus.BACKFILL
        ),
        aliases=["gen_ai.response.model"],
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[57, 61, 127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "ai.pipeline.name": AttributeMetadata(
        brief="The name of the AI pipeline.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="Autofix Pipeline",
        deprecation=DeprecationInfo(
            replacement="gen_ai.pipeline.name", status=DeprecationStatus.BACKFILL
        ),
        aliases=["gen_ai.pipeline.name"],
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[53, 76, 108, 127]),
        ],
    ),
    "ai.preamble": AttributeMetadata(
        brief="For an AI model call, the preamble parameter. Preambles are a part of the prompt used to adjust the model's overall behavior and conversation style.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="You are now a clown.",
        deprecation=DeprecationInfo(
            replacement="gen_ai.system_instructions", status=DeprecationStatus.BACKFILL
        ),
        aliases=["gen_ai.system_instructions"],
        changelog=[
            ChangelogEntry(version="0.5.0", prs=[264]),
            ChangelogEntry(version="0.1.0", prs=[55]),
        ],
    ),
    "ai.presence_penalty": AttributeMetadata(
        brief="Used to reduce repetitiveness of generated tokens. Similar to frequency_penalty, except that this penalty is applied equally to all tokens that have already appeared, regardless of their exact frequencies.",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=0.5,
        deprecation=DeprecationInfo(
            replacement="gen_ai.request.presence_penalty",
            status=DeprecationStatus.BACKFILL,
        ),
        aliases=["gen_ai.request.presence_penalty"],
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.1.0", prs=[55, 57, 61, 108]),
        ],
    ),
    "ai.prompt_tokens.used": AttributeMetadata(
        brief="The number of tokens used to process just the prompt.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=20,
        deprecation=DeprecationInfo(
            replacement="gen_ai.usage.input_tokens", status=DeprecationStatus.BACKFILL
        ),
        aliases=["gen_ai.usage.prompt_tokens", "gen_ai.usage.input_tokens"],
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.1.0", prs=[57, 61]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "ai.raw_prompting": AttributeMetadata(
        brief="When enabled, the user’s prompt will be sent to the model without any pre-processing.",
        type=AttributeType.BOOLEAN,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=True,
        deprecation=DeprecationInfo(),
        changelog=[
            ChangelogEntry(version="0.5.0", prs=[264]),
            ChangelogEntry(version="0.1.0", prs=[55]),
        ],
    ),
    "ai.response_format": AttributeMetadata(
        brief="For an AI model call, the format of the response",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="json_object",
        deprecation=DeprecationInfo(),
        changelog=[
            ChangelogEntry(version="0.5.0", prs=[264]),
            ChangelogEntry(version="0.1.0", prs=[55, 127]),
        ],
    ),
    "ai.responses": AttributeMetadata(
        brief="The response messages sent back by the AI model.",
        type=AttributeType.STRING_ARRAY,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=["hello", "world"],
        deprecation=DeprecationInfo(
            replacement="gen_ai.output.messages", status=DeprecationStatus.BACKFILL
        ),
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[65, 127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "ai.search_queries": AttributeMetadata(
        brief="Queries used to search for relevant context or documents.",
        type=AttributeType.STRING_ARRAY,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=["climate change effects", "renewable energy"],
        deprecation=DeprecationInfo(),
        changelog=[
            ChangelogEntry(version="0.5.0", prs=[264]),
            ChangelogEntry(version="0.1.0", prs=[55]),
        ],
    ),
    "ai.search_results": AttributeMetadata(
        brief="Results returned from search queries for context.",
        type=AttributeType.STRING_ARRAY,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=["search_result_1, search_result_2"],
        deprecation=DeprecationInfo(),
        changelog=[
            ChangelogEntry(version="0.5.0", prs=[264]),
            ChangelogEntry(version="0.1.0", prs=[55]),
        ],
    ),
    "ai.seed": AttributeMetadata(
        brief="The seed, ideally models given the same seed and same other parameters will produce the exact same output.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="1234567890",
        deprecation=DeprecationInfo(
            replacement="gen_ai.request.seed", status=DeprecationStatus.BACKFILL
        ),
        aliases=["gen_ai.request.seed"],
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[55, 57, 61, 108, 127]),
        ],
    ),
    "ai.streaming": AttributeMetadata(
        brief="Whether the request was streamed back.",
        type=AttributeType.BOOLEAN,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=True,
        deprecation=DeprecationInfo(
            replacement="gen_ai.response.streaming", status=DeprecationStatus.BACKFILL
        ),
        aliases=["gen_ai.response.streaming"],
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[76, 108]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "ai.tags": AttributeMetadata(
        brief="Tags that describe an AI pipeline step.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example='{"executed_function": "add_integers"}',
        deprecation=DeprecationInfo(),
        changelog=[
            ChangelogEntry(version="0.5.0", prs=[264]),
            ChangelogEntry(version="0.1.0", prs=[55, 127]),
        ],
    ),
    "ai.temperature": AttributeMetadata(
        brief="For an AI model call, the temperature parameter. Temperature essentially means how random the output will be.",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=0.1,
        deprecation=DeprecationInfo(
            replacement="gen_ai.request.temperature", status=DeprecationStatus.BACKFILL
        ),
        aliases=["gen_ai.request.temperature"],
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.1.0", prs=[55, 57, 61, 108]),
        ],
    ),
    "ai.texts": AttributeMetadata(
        brief="Raw text inputs provided to the model.",
        type=AttributeType.STRING_ARRAY,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=["Hello, how are you?", "What is the capital of France?"],
        deprecation=DeprecationInfo(
            replacement="gen_ai.input.messages", status=DeprecationStatus.BACKFILL
        ),
        aliases=["gen_ai.input.messages"],
        changelog=[
            ChangelogEntry(version="0.5.0", prs=[264]),
            ChangelogEntry(version="0.1.0", prs=[55]),
        ],
    ),
    "ai.tool_calls": AttributeMetadata(
        brief="For an AI model call, the tool calls that were made.",
        type=AttributeType.STRING_ARRAY,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=["tool_call_1", "tool_call_2"],
        deprecation=DeprecationInfo(
            replacement="gen_ai.output.messages", status=DeprecationStatus.BACKFILL
        ),
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[55, 65]),
        ],
    ),
    "ai.tools": AttributeMetadata(
        brief="For an AI model call, the functions that are available",
        type=AttributeType.STRING_ARRAY,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=["function_1", "function_2"],
        deprecation=DeprecationInfo(
            replacement="gen_ai.tool.definitions", status=DeprecationStatus.BACKFILL
        ),
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[55, 65, 127]),
        ],
    ),
    "ai.top_k": AttributeMetadata(
        brief="Limits the model to only consider the K most likely next tokens, where K is an integer (e.g., top_k=20 means only the 20 highest probability tokens are considered).",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=35,
        deprecation=DeprecationInfo(
            replacement="gen_ai.request.top_k", status=DeprecationStatus.BACKFILL
        ),
        aliases=["gen_ai.request.top_k"],
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.1.0", prs=[55, 57, 61, 108]),
        ],
    ),
    "ai.top_p": AttributeMetadata(
        brief="Limits the model to only consider tokens whose cumulative probability mass adds up to p, where p is a float between 0 and 1 (e.g., top_p=0.7 means only tokens that sum up to 70% of the probability mass are considered).",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=0.7,
        deprecation=DeprecationInfo(
            replacement="gen_ai.request.top_p", status=DeprecationStatus.BACKFILL
        ),
        aliases=["gen_ai.request.top_p"],
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.1.0", prs=[55, 57, 61, 108]),
        ],
    ),
    "ai.total_cost": AttributeMetadata(
        brief="The total cost for the tokens used.",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=12.34,
        deprecation=DeprecationInfo(
            replacement="gen_ai.cost.total_tokens", status=DeprecationStatus.BACKFILL
        ),
        aliases=["gen_ai.cost.total_tokens"],
        changelog=[
            ChangelogEntry(version="0.5.0", prs=[264]),
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.1.0", prs=[53]),
        ],
    ),
    "ai.total_tokens.used": AttributeMetadata(
        brief="The total number of tokens used to process the prompt.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=30,
        deprecation=DeprecationInfo(
            replacement="gen_ai.usage.total_tokens", status=DeprecationStatus.BACKFILL
        ),
        aliases=["gen_ai.usage.total_tokens"],
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.1.0", prs=[57, 61, 108]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "ai.warnings": AttributeMetadata(
        brief="Warning messages generated during model execution.",
        type=AttributeType.STRING_ARRAY,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=["Token limit exceeded"],
        deprecation=DeprecationInfo(),
        changelog=[
            ChangelogEntry(version="0.5.0", prs=[264]),
            ChangelogEntry(version="0.1.0", prs=[55]),
        ],
    ),
    "angular.version": AttributeMetadata(
        brief="The version of the Angular framework",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="17.1.0",
        changelog=[
            ChangelogEntry(
                version="0.7.0",
                prs=[367],
                description="Added angular.version attribute",
            ),
        ],
    ),
    "app.app_build": AttributeMetadata(
        brief="Internal build identifier, as it appears on the platform.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="1",
        deprecation=DeprecationInfo(
            replacement="app.build",
            reason="Deprecated in favor of app.build",
            status=DeprecationStatus.BACKFILL,
        ),
        aliases=["app.build"],
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[296],
                description="Added and deprecated app.app_build in favor of app.build",
            ),
        ],
    ),
    "app.app_identifier": AttributeMetadata(
        brief="Version-independent application identifier, often a dotted bundle ID.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="com.example.myapp",
        deprecation=DeprecationInfo(
            replacement="app.identifier",
            reason="Deprecated in favor of app.identifier",
            status=DeprecationStatus.BACKFILL,
        ),
        aliases=["app.identifier"],
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[296],
                description="Added and deprecated app.app_identifier in favor of app.identifier",
            ),
        ],
    ),
    "app.app_name": AttributeMetadata(
        brief="Human readable application name, as it appears on the platform.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="My App",
        deprecation=DeprecationInfo(
            replacement="app.name",
            reason="Deprecated in favor of app.name",
            status=DeprecationStatus.BACKFILL,
        ),
        aliases=["app.name"],
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[296],
                description="Added and deprecated app.app_name in favor of app.name",
            ),
        ],
    ),
    "app.app_start_time": AttributeMetadata(
        brief="Formatted UTC timestamp when the user started the application.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="2025-01-01T00:00:00.000Z",
        deprecation=DeprecationInfo(
            replacement="app.start_time",
            reason="Deprecated in favor of app.start_time",
            status=DeprecationStatus.BACKFILL,
        ),
        aliases=["app.start_time"],
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[296],
                description="Added and deprecated app.app_start_time in favor of app.start_time",
            ),
        ],
    ),
    "app.app_version": AttributeMetadata(
        brief="Human readable application version, as it appears on the platform.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="1.0.0",
        deprecation=DeprecationInfo(
            replacement="app.version",
            reason="Deprecated in favor of app.version",
            status=DeprecationStatus.BACKFILL,
        ),
        aliases=["app.version"],
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[296],
                description="Added and deprecated app.app_version in favor of app.version",
            ),
        ],
    ),
    "app.build": AttributeMetadata(
        brief="Internal build identifier, as it appears on the platform.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="1",
        aliases=["app.app_build"],
        changelog=[
            ChangelogEntry(
                version="0.5.0", prs=[296], description="Added app.build attribute"
            ),
        ],
    ),
    "app.identifier": AttributeMetadata(
        brief="Version-independent application identifier, often a dotted bundle ID.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="com.example.myapp",
        aliases=["app.app_identifier"],
        changelog=[
            ChangelogEntry(
                version="0.5.0", prs=[296], description="Added app.identifier attribute"
            ),
        ],
    ),
    "app.in_foreground": AttributeMetadata(
        brief="Whether the application is currently in the foreground.",
        type=AttributeType.BOOLEAN,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=True,
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[296],
                description="Added app.in_foreground attribute",
            ),
        ],
    ),
    "app.name": AttributeMetadata(
        brief="Human readable application name, as it appears on the platform.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="My App",
        aliases=["app.app_name"],
        changelog=[
            ChangelogEntry(
                version="0.5.0", prs=[296], description="Added app.name attribute"
            ),
        ],
    ),
    "app.start_time": AttributeMetadata(
        brief="Formatted UTC timestamp when the user started the application.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="2025-01-01T00:00:00.000Z",
        aliases=["app.app_start_time"],
        changelog=[
            ChangelogEntry(
                version="0.5.0", prs=[296], description="Added app.start_time attribute"
            ),
        ],
    ),
    "app.version": AttributeMetadata(
        brief="Human readable application version, as it appears on the platform.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="1.0.0",
        aliases=["app.app_version"],
        changelog=[
            ChangelogEntry(
                version="0.5.0", prs=[296], description="Added app.version attribute"
            ),
        ],
    ),
    "app.vitals.frames.delay.value": AttributeMetadata(
        brief="The sum of all delayed frame durations in seconds during the lifetime of the span. For more information see [frames delay](https://develop.sentry.dev/sdk/performance/frames-delay/).",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=5,
        aliases=["frames.delay"],
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[313],
                description="Added app.vitals.frames.delay.value to replace frames.delay",
            ),
        ],
    ),
    "app.vitals.frames.frozen.count": AttributeMetadata(
        brief="The number of frozen frames rendered during the lifetime of the span.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=3,
        aliases=["frames.frozen"],
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[313],
                description="Added app.vitals.frames.frozen.count to replace frames.frozen",
            ),
        ],
    ),
    "app.vitals.frames.slow.count": AttributeMetadata(
        brief="The number of slow frames rendered during the lifetime of the span.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=1,
        aliases=["frames.slow"],
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[313],
                description="Added app.vitals.frames.slow.count to replace frames.slow",
            ),
        ],
    ),
    "app.vitals.frames.total.count": AttributeMetadata(
        brief="The number of total frames rendered during the lifetime of the span.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=60,
        aliases=["frames.total"],
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[313],
                description="Added app.vitals.frames.total.count to replace frames.total",
            ),
        ],
    ),
    "app.vitals.start.cold.value": AttributeMetadata(
        brief="The duration of a cold app start in milliseconds",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=1234.56,
        aliases=["app_start_cold"],
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[313],
                description="Added app.vitals.start.cold.value attribute",
            ),
        ],
    ),
    "app.vitals.start.prewarmed": AttributeMetadata(
        brief="Whether the app start was prewarmed.",
        type=AttributeType.BOOLEAN,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=True,
        changelog=[
            ChangelogEntry(
                version="0.11.0",
                prs=[379],
                description="Added app.vitals.start.prewarmed attribute",
            ),
        ],
    ),
    "app.vitals.start.reason": AttributeMetadata(
        brief="The reason that triggered the app start.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="push",
        changelog=[
            ChangelogEntry(
                version="0.7.0",
                prs=[353],
                description="Added app.vitals.start.reason attribute",
            ),
        ],
    ),
    "app.vitals.start.screen": AttributeMetadata(
        brief="The screen that is rendered when the app start is complete. This is the screen the user first sees and can interact with after launch. The absence of this attribute on the app start span indicates a background app start where no UI was rendered.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="MainActivity",
        changelog=[
            ChangelogEntry(
                version="0.7.0",
                prs=[353],
                description="Added app.vitals.start.screen attribute",
            ),
        ],
    ),
    "app.vitals.start.type": AttributeMetadata(
        brief="The type of app start, for example `cold` or `warm`",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="cold",
        aliases=["app_start_type"],
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[313],
                description="Added app.vitals.start.type attribute",
            ),
        ],
    ),
    "app.vitals.start.warm.value": AttributeMetadata(
        brief="The duration of a warm app start in milliseconds",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=1234.56,
        aliases=["app_start_warm"],
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[313],
                description="Added app.vitals.start.warm.value attribute",
            ),
        ],
    ),
    "app.vitals.ttfd.value": AttributeMetadata(
        brief="The duration of time to full display in milliseconds",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=1234.56,
        aliases=["time_to_full_display"],
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[313],
                description="Added app.vitals.ttfd.value attribute",
            ),
        ],
    ),
    "app.vitals.ttid.value": AttributeMetadata(
        brief="The duration of time to initial display in milliseconds",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=1234.56,
        aliases=["time_to_initial_display"],
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[313],
                description="Added app.vitals.ttid.value attribute",
            ),
        ],
    ),
    "app_start_cold": AttributeMetadata(
        brief="The duration of a cold app start in milliseconds",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=1234.56,
        deprecation=DeprecationInfo(
            replacement="app.vitals.start.cold.value",
            reason="Replaced by app.vitals.start.cold.value to align with the app.vitals.* namespace for mobile performance attributes",
            status=DeprecationStatus.BACKFILL,
        ),
        aliases=["app.vitals.start.cold.value"],
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[323],
                description="Added and deprecated in favor of app.vitals.start.cold.value",
            ),
        ],
    ),
    "app_start_type": AttributeMetadata(
        brief="Mobile app start variant. Either cold or warm.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="cold",
        deprecation=DeprecationInfo(
            replacement="app.vitals.start.type",
            reason="Replaced by app.vitals.start.type to align with the app.vitals.* namespace for mobile performance attributes",
            status=DeprecationStatus.BACKFILL,
        ),
        aliases=["app.vitals.start.type"],
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[313],
                description="Deprecated in favor of app.vitals.start.type",
            ),
            ChangelogEntry(version="0.1.0", prs=[127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "app_start_warm": AttributeMetadata(
        brief="The duration of a warm app start in milliseconds",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=1234.56,
        deprecation=DeprecationInfo(
            replacement="app.vitals.start.warm.value",
            reason="Replaced by app.vitals.start.warm.value to align with the app.vitals.* namespace for mobile performance attributes",
            status=DeprecationStatus.BACKFILL,
        ),
        aliases=["app.vitals.start.warm.value"],
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[323],
                description="Added and deprecated in favor of app.vitals.start.warm.value",
            ),
        ],
    ),
    "art.gc.blocking_count": AttributeMetadata(
        brief="Total number of blocking (stop-the-world) garbage collections performed by the Android Runtime",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=1,
        changelog=[
            ChangelogEntry(
                version="0.11.0",
                prs=[382],
                description="Added art.gc.blocking_count attribute",
            ),
        ],
    ),
    "art.gc.blocking_time": AttributeMetadata(
        brief="Total time spent in blocking (stop-the-world) garbage collections by the Android Runtime, in milliseconds",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=11.873,
        changelog=[
            ChangelogEntry(
                version="0.11.0",
                prs=[382],
                description="Added art.gc.blocking_time attribute",
            ),
        ],
    ),
    "art.gc.pre_oome_count": AttributeMetadata(
        brief="Total number of garbage collections triggered as a last resort before an OutOfMemoryError by the Android Runtime",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=0,
        changelog=[
            ChangelogEntry(
                version="0.11.0",
                prs=[382],
                description="Added art.gc.pre_oome_count attribute",
            ),
        ],
    ),
    "art.gc.total_count": AttributeMetadata(
        brief="Total number of garbage collections performed by the Android Runtime",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=1,
        changelog=[
            ChangelogEntry(
                version="0.11.0",
                prs=[382],
                description="Added art.gc.total_count attribute",
            ),
        ],
    ),
    "art.gc.total_time": AttributeMetadata(
        brief="Total time spent in garbage collection by the Android Runtime, in milliseconds",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=11.807,
        changelog=[
            ChangelogEntry(
                version="0.11.0",
                prs=[382],
                description="Added art.gc.total_time attribute",
            ),
        ],
    ),
    "art.gc.waiting_time": AttributeMetadata(
        brief="Total time threads spent waiting for garbage collection to complete in the Android Runtime, in milliseconds",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=8.054,
        changelog=[
            ChangelogEntry(
                version="0.11.0",
                prs=[382],
                description="Added art.gc.waiting_time attribute",
            ),
        ],
    ),
    "art.memory.free": AttributeMetadata(
        brief="Free memory available to the process as reported by the Android Runtime, in bytes",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=3181568,
        changelog=[
            ChangelogEntry(
                version="0.11.0",
                prs=[382],
                description="Added art.memory.free attribute",
            ),
        ],
    ),
    "art.memory.free_until_gc": AttributeMetadata(
        brief="Free memory available before a garbage collection would be triggered by the Android Runtime, in bytes",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=3181568,
        changelog=[
            ChangelogEntry(
                version="0.11.0",
                prs=[382],
                description="Added art.memory.free_until_gc attribute",
            ),
        ],
    ),
    "art.memory.free_until_oome": AttributeMetadata(
        brief="Free memory available before an OutOfMemoryError would be thrown by the Android Runtime, in bytes",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=196083712,
        changelog=[
            ChangelogEntry(
                version="0.11.0",
                prs=[382],
                description="Added art.memory.free_until_oome attribute",
            ),
        ],
    ),
    "art.memory.max": AttributeMetadata(
        brief="Maximum memory the process is allowed to use as reported by the Android Runtime, in bytes",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=201326592,
        changelog=[
            ChangelogEntry(
                version="0.11.0",
                prs=[382],
                description="Added art.memory.max attribute",
            ),
        ],
    ),
    "art.memory.total": AttributeMetadata(
        brief="Total memory currently allocated to the process by the Android Runtime, in bytes",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=7774208,
        changelog=[
            ChangelogEntry(
                version="0.11.0",
                prs=[382],
                description="Added art.memory.total attribute",
            ),
        ],
    ),
    "aws.cloudwatch.logs.log_group": AttributeMetadata(
        brief="The name of the CloudWatch Logs log group",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="/aws/lambda/my-function",
        changelog=[
            ChangelogEntry(
                version="0.7.0",
                prs=[369],
                description="Added aws.cloudwatch.logs.log_group attribute",
            ),
        ],
    ),
    "aws.cloudwatch.logs.log_stream": AttributeMetadata(
        brief="The name of the CloudWatch Logs log stream",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="2024/01/01/[$LATEST]abcdef1234567890",
        changelog=[
            ChangelogEntry(
                version="0.7.0",
                prs=[369],
                description="Added aws.cloudwatch.logs.log_stream attribute",
            ),
        ],
    ),
    "aws.cloudwatch.logs.url": AttributeMetadata(
        brief="The URL to the CloudWatch Logs log group",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="https://console.aws.amazon.com/cloudwatch/home?region=us-east-1#logsV2:log-groups/log-group/my-log-group",
        changelog=[
            ChangelogEntry(
                version="0.7.0",
                prs=[369],
                description="Added aws.cloudwatch.logs.url attribute",
            ),
        ],
    ),
    "aws.lambda.aws_request_id": AttributeMetadata(
        brief="The AWS request ID as received by the Lambda function runtime",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="8476a536-e9f4-11e8-9739-2dfe598c3fcd",
        deprecation=DeprecationInfo(
            replacement="faas.invocation_id",
            reason="This attribute is being deprecated in favor of faas.invocation_id",
            status=DeprecationStatus.BACKFILL,
        ),
        aliases=["faas.invocation_id"],
        changelog=[
            ChangelogEntry(
                version="0.11.1",
                prs=[414, 424],
                description="Deprecated aws.lambda.aws_request_id in favor of faas.invocation_id",
            ),
            ChangelogEntry(
                version="0.7.0",
                prs=[369],
                description="Added aws.lambda.aws_request_id attribute",
            ),
        ],
    ),
    "aws.lambda.execution_duration_in_millis": AttributeMetadata(
        brief="The execution duration of the Lambda function invocation in milliseconds",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=1234.56,
        changelog=[
            ChangelogEntry(
                version="0.7.0",
                prs=[369],
                description="Added aws.lambda.execution_duration_in_millis attribute",
            ),
        ],
    ),
    "aws.lambda.function_name": AttributeMetadata(
        brief="The name of the Lambda function",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="my-function",
        deprecation=DeprecationInfo(
            replacement="faas.name",
            reason="Use the OTel-aligned faas.name attribute instead",
            status=DeprecationStatus.BACKFILL,
        ),
        aliases=["faas.name"],
        changelog=[
            ChangelogEntry(
                version="0.11.1",
                prs=[414],
                description="Deprecated aws.lambda.function_name in favor of faas.name",
            ),
            ChangelogEntry(
                version="0.7.0",
                prs=[369],
                description="Added aws.lambda.function_name attribute",
            ),
        ],
    ),
    "aws.lambda.function_version": AttributeMetadata(
        brief="The version of the Lambda function",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="$LATEST",
        deprecation=DeprecationInfo(
            replacement="faas.version",
            reason="Use the OTel-aligned faas.version attribute instead",
            status=DeprecationStatus.BACKFILL,
        ),
        aliases=["faas.version"],
        changelog=[
            ChangelogEntry(
                version="0.11.1",
                prs=[414, 424],
                description="Deprecated aws.lambda.function_version in favor of faas.version",
            ),
            ChangelogEntry(
                version="0.7.0",
                prs=[369],
                description="Added aws.lambda.function_version attribute",
            ),
        ],
    ),
    "aws.lambda.invoked_arn": AttributeMetadata(
        brief="The full ARN of the Lambda function that was invoked",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="arn:aws:lambda:us-east-1:123456789012:function:my-function",
        aliases=["aws.lambda.invoked_function_arn"],
        changelog=[
            ChangelogEntry(version="0.11.1", prs=[414]),
        ],
    ),
    "aws.lambda.invoked_function_arn": AttributeMetadata(
        brief="The full ARN of the Lambda function that was invoked",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="arn:aws:lambda:us-east-1:123456789012:function:my-function",
        deprecation=DeprecationInfo(
            replacement="aws.lambda.invoked_arn",
            reason="This attribute is being deprecated in favor of aws.lambda.invoked_arn",
            status=DeprecationStatus.BACKFILL,
        ),
        aliases=["aws.lambda.invoked_arn"],
        changelog=[
            ChangelogEntry(
                version="0.11.1",
                prs=[414],
                description="Deprecated aws.lambda.invoked_function_arn in favor of aws.lambda.invoked_arn",
            ),
            ChangelogEntry(
                version="0.7.0",
                prs=[369],
                description="Added aws.lambda.invoked_function_arn attribute",
            ),
        ],
    ),
    "aws.lambda.remaining_time_in_millis": AttributeMetadata(
        brief="The remaining time in milliseconds before the Lambda function times out",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=5000,
        changelog=[
            ChangelogEntry(
                version="0.7.0",
                prs=[369],
                description="Added aws.lambda.remaining_time_in_millis attribute",
            ),
        ],
    ),
    "aws.log.group.names": AttributeMetadata(
        brief="The name(s) of the AWS log group(s) an application is writing to.",
        type=AttributeType.STRING_ARRAY,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example=["/aws/lambda/my-function", "opentelemetry-service"],
        changelog=[
            ChangelogEntry(version="0.11.1", prs=[414]),
        ],
    ),
    "aws.log.stream.names": AttributeMetadata(
        brief="The name(s) of the AWS log stream(s) an application is writing to.",
        type=AttributeType.STRING_ARRAY,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example=["logs/main/10838bed-421f-43ef-870a-f43feacbbb5b"],
        changelog=[
            ChangelogEntry(version="0.11.1", prs=[414]),
        ],
    ),
    "blocked_main_thread": AttributeMetadata(
        brief="Whether the main thread was blocked by the span.",
        type=AttributeType.BOOLEAN,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=True,
        changelog=[
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "browser.name": AttributeMetadata(
        brief="The name of the browser.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="Chrome",
        aliases=["sentry.browser.name"],
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[127, 139]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "browser.performance.navigation.activation_start": AttributeMetadata(
        brief="The time between initiating a navigation to a page and the browser activating the page",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=1.983,
        aliases=["performance.activationStart"],
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[321],
                description="Added browser.performance.navigation.activation_start attribute",
            ),
        ],
    ),
    "browser.performance.time_origin": AttributeMetadata(
        brief="The browser's performance.timeOrigin timestamp representing the time when the pageload was initiated",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=1776185678.886,
        aliases=["performance.timeOrigin"],
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[321],
                description="Added browser.performance.time_origin attribute attribute",
            ),
        ],
    ),
    "browser.report.type": AttributeMetadata(
        brief="A browser report sent via reporting API..",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="network-error",
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[68, 127]),
        ],
    ),
    "browser.script.invoker": AttributeMetadata(
        brief="How a script was called in the browser.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="Window.requestAnimationFrame",
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "browser.script.invoker_type": AttributeMetadata(
        brief="Browser script entry point type.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="event-listener",
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "browser.script.source_char_position": AttributeMetadata(
        brief="A number representing the script character position of the script.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=678,
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "browser.version": AttributeMetadata(
        brief="The version of the browser.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="120.0.6099.130",
        aliases=["sentry.browser.version"],
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[59, 127, 139]),
        ],
    ),
    "browser.web_vital.cls.report_event": AttributeMetadata(
        brief="The event that caused the SDK to report CLS (pagehide or navigation)",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="navigation",
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[319],
                description="Added browser.web_vital.cls.report_event attribute",
            ),
        ],
    ),
    "browser.web_vital.cls.source.<key>": AttributeMetadata(
        brief="The HTML elements or components responsible for the layout shift. <key> is a numeric index from 1 to N",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        has_dynamic_suffix=True,
        example="body > div#app",
        aliases=["cls.source.<key>"],
        changelog=[
            ChangelogEntry(version="0.5.0", prs=[234]),
        ],
    ),
    "browser.web_vital.cls.value": AttributeMetadata(
        brief="The value of the recorded Cumulative Layout Shift (CLS) web vital",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=0.2361,
        aliases=["cls"],
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[229],
                description="Added browser.web_vital.cls.value attribute",
            ),
        ],
    ),
    "browser.web_vital.fcp.value": AttributeMetadata(
        brief="The time it takes for the browser to render the first piece of meaningful content on the screen",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=547.6951,
        aliases=["fcp"],
        changelog=[
            ChangelogEntry(version="0.5.0", prs=[235]),
        ],
    ),
    "browser.web_vital.fp.value": AttributeMetadata(
        brief="The time in milliseconds it takes for the browser to render the first pixel on the screen",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=477.1926,
        aliases=["fp"],
        changelog=[
            ChangelogEntry(version="0.5.0", prs=[235]),
        ],
    ),
    "browser.web_vital.inp.value": AttributeMetadata(
        brief="The value of the recorded Interaction to Next Paint (INP) web vital",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=200,
        aliases=["inp"],
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[229],
                description="Added browser.web_vital.inp.value attribute",
            ),
        ],
    ),
    "browser.web_vital.lcp.element": AttributeMetadata(
        brief="The HTML element selector or component name for which LCP was reported",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="body > div#app > div#container > div",
        aliases=["lcp.element"],
        changelog=[
            ChangelogEntry(version="0.5.0", prs=[233]),
        ],
    ),
    "browser.web_vital.lcp.id": AttributeMetadata(
        brief="The id of the dom element responsible for the largest contentful paint",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="#gero",
        aliases=["lcp.id"],
        changelog=[
            ChangelogEntry(version="0.5.0", prs=[233]),
        ],
    ),
    "browser.web_vital.lcp.load_time": AttributeMetadata(
        brief="The time it took for the LCP element to be loaded",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=1402,
        aliases=["lcp.loadTime"],
        changelog=[
            ChangelogEntry(version="0.5.0", prs=[233]),
        ],
    ),
    "browser.web_vital.lcp.render_time": AttributeMetadata(
        brief="The time it took for the LCP element to be rendered",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=1685,
        aliases=["lcp.renderTime"],
        changelog=[
            ChangelogEntry(version="0.5.0", prs=[233]),
        ],
    ),
    "browser.web_vital.lcp.report_event": AttributeMetadata(
        brief="The event that caused the SDK to report LCP (pagehide or navigation)",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="pagehide",
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[319],
                description="Added browser.web_vital.lcp.report_event attribute",
            ),
        ],
    ),
    "browser.web_vital.lcp.size": AttributeMetadata(
        brief="The size of the largest contentful paint element",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=1024,
        aliases=["lcp.size"],
        changelog=[
            ChangelogEntry(version="0.5.0", prs=[233]),
        ],
    ),
    "browser.web_vital.lcp.url": AttributeMetadata(
        brief="The url of the dom element responsible for the largest contentful paint",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="https://example.com/static/img.png",
        aliases=["lcp.url"],
        changelog=[
            ChangelogEntry(version="0.5.0", prs=[233]),
        ],
    ),
    "browser.web_vital.lcp.value": AttributeMetadata(
        brief="The value of the recorded Largest Contentful Paint (LCP) web vital",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=2500,
        aliases=["lcp"],
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[229],
                description="Added browser.web_vital.lcp.value attribute",
            ),
        ],
    ),
    "browser.web_vital.ttfb.request_time": AttributeMetadata(
        brief="The time it takes for the server to process the initial request and send the first byte of a response to the user's browser",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=1554.5814,
        aliases=["ttfb.requestTime"],
        changelog=[
            ChangelogEntry(version="0.5.0", prs=[235]),
        ],
    ),
    "browser.web_vital.ttfb.value": AttributeMetadata(
        brief="The value of the recorded Time To First Byte (TTFB) web vital in Milliseconds",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=194.3322,
        aliases=["ttfb"],
        changelog=[
            ChangelogEntry(version="0.5.0", prs=[235]),
        ],
    ),
    "cache.hit": AttributeMetadata(
        brief="If the cache was hit during this span.",
        type=AttributeType.BOOLEAN,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=True,
        changelog=[
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "cache.item_size": AttributeMetadata(
        brief="The size of the requested item in the cache. In bytes.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=58,
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "cache.key": AttributeMetadata(
        brief="The key of the cache accessed.",
        type=AttributeType.STRING_ARRAY,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=["my-cache-key", "my-other-cache-key"],
        changelog=[
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "cache.operation": AttributeMetadata(
        brief="The operation being performed on the cache.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="get",
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "cache.ttl": AttributeMetadata(
        brief="The ttl of the cache in seconds",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=120,
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "cache.write": AttributeMetadata(
        brief="If the cache operation resulted in a write to the cache.",
        type=AttributeType.BOOLEAN,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=True,
        changelog=[
            ChangelogEntry(version="0.5.0"),
        ],
    ),
    "channel": AttributeMetadata(
        brief="The channel name that is being used.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="mail",
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "client.address": AttributeMetadata(
        brief="Client address - domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="example.com",
        aliases=["http.client_ip"],
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[106, 127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "client.port": AttributeMetadata(
        brief="Client port number.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example=5432,
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "cloud.account.id": AttributeMetadata(
        brief="The cloud account ID the resource is assigned to",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="123456789012",
        changelog=[
            ChangelogEntry(
                version="0.7.0",
                prs=[364],
                description="Added cloud.account.id attribute",
            ),
        ],
    ),
    "cloud.availability_zone": AttributeMetadata(
        brief="Cloud regions often have multiple, isolated locations known as zones to increase availability",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="us-east-1c",
        changelog=[
            ChangelogEntry(
                version="0.7.0",
                prs=[364],
                description="Added cloud.availability_zone attribute",
            ),
        ],
    ),
    "cloud.platform": AttributeMetadata(
        brief="The cloud platform in use",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="aws_lambda",
        changelog=[
            ChangelogEntry(
                version="0.7.0", prs=[364], description="Added cloud.platform attribute"
            ),
        ],
    ),
    "cloud.provider": AttributeMetadata(
        brief="Name of the cloud provider",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="aws",
        changelog=[
            ChangelogEntry(
                version="0.7.0", prs=[364], description="Added cloud.provider attribute"
            ),
        ],
    ),
    "cloud.region": AttributeMetadata(
        brief="The geographical region the resource is running",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="us-east-1",
        changelog=[
            ChangelogEntry(
                version="0.7.0", prs=[364], description="Added cloud.region attribute"
            ),
        ],
    ),
    "cloud.resource_id": AttributeMetadata(
        brief="Cloud provider-specific native identifier of the monitored cloud resource",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="arn:aws:lambda:REGION:ACCOUNT_ID:function:my-function",
        changelog=[
            ChangelogEntry(version="0.11.1", prs=[414]),
        ],
        additional_context=[
            "This can be an identifier for a resource in AWS, GCP, or Azure. There may be some overlap in values found here with other attributes. For instance, an AWS lambda ARN may be found here as well as in `aws.lambda.invoked_arn`. OTEL recommends setting them alongside each other."
        ],
    ),
    "cloudflare.d1.duration": AttributeMetadata(
        brief="The duration of a Cloudflare D1 operation.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=543,
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "cloudflare.d1.query_type": AttributeMetadata(
        brief="The type of query executed in a Cloudflare D1 operation",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="run",
        deprecation=DeprecationInfo(
            replacement="db.operation.name", status=DeprecationStatus.BACKFILL
        ),
        aliases=["db.operation.name", "db.operation"],
        changelog=[
            ChangelogEntry(
                version="0.11.0",
                prs=[392],
                description="Added cloudflare.d1.query_type attribute",
            ),
        ],
    ),
    "cloudflare.d1.rows_read": AttributeMetadata(
        brief="The number of rows read in a Cloudflare D1 operation.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=12,
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "cloudflare.d1.rows_written": AttributeMetadata(
        brief="The number of rows written in a Cloudflare D1 operation.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=12,
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "cloudflare.r2.bucket": AttributeMetadata(
        brief="The name of the Cloudflare R2 bucket binding",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="MY_BUCKET",
        changelog=[
            ChangelogEntry(
                version="0.11.1",
                prs=[413],
                description="Added cloudflare.r2.bucket attribute",
            ),
        ],
    ),
    "cloudflare.r2.operation": AttributeMetadata(
        brief="The R2 API operation being performed",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="GetObject",
        changelog=[
            ChangelogEntry(
                version="0.11.1",
                prs=[413],
                description="Added cloudflare.r2.operation attribute",
            ),
        ],
    ),
    "cloudflare.r2.request.delimiter": AttributeMetadata(
        brief="The delimiter used to group objects in an R2 list operation",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="/",
        changelog=[
            ChangelogEntry(
                version="0.11.1",
                prs=[413],
                description="Added cloudflare.r2.request.delimiter attribute",
            ),
        ],
    ),
    "cloudflare.r2.request.key": AttributeMetadata(
        brief="The object key used in the R2 operation",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="my-file.txt",
        changelog=[
            ChangelogEntry(
                version="0.11.1",
                prs=[413],
                description="Added cloudflare.r2.request.key attribute",
            ),
        ],
    ),
    "cloudflare.r2.request.part_number": AttributeMetadata(
        brief="The part number in a multipart upload operation",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=1,
        changelog=[
            ChangelogEntry(
                version="0.11.1",
                prs=[413],
                description="Added cloudflare.r2.request.part_number attribute",
            ),
        ],
    ),
    "cloudflare.r2.request.prefix": AttributeMetadata(
        brief="The prefix used to filter objects in an R2 list operation",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="images/",
        changelog=[
            ChangelogEntry(
                version="0.11.1",
                prs=[413],
                description="Added cloudflare.r2.request.prefix attribute",
            ),
        ],
    ),
    "cloudflare.workflow.attempt": AttributeMetadata(
        brief="The current attempt number for a Cloudflare Workflow step",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=1,
        changelog=[
            ChangelogEntry(
                version="0.11.0",
                prs=[392],
                description="Added cloudflare.workflow.attempt attribute",
            ),
        ],
    ),
    "cloudflare.workflow.retries.backoff": AttributeMetadata(
        brief="The backoff strategy for Cloudflare Workflow step retries",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="exponential",
        changelog=[
            ChangelogEntry(
                version="0.11.0",
                prs=[392],
                description="Added cloudflare.workflow.retries.backoff attribute",
            ),
        ],
    ),
    "cloudflare.workflow.retries.delay": AttributeMetadata(
        brief="The delay between Cloudflare Workflow step retries",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="5 seconds",
        changelog=[
            ChangelogEntry(
                version="0.11.0",
                prs=[392],
                description="Added cloudflare.workflow.retries.delay attribute",
            ),
        ],
    ),
    "cloudflare.workflow.retries.limit": AttributeMetadata(
        brief="The maximum number of retries for a Cloudflare Workflow step",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=3,
        changelog=[
            ChangelogEntry(
                version="0.11.0",
                prs=[392],
                description="Added cloudflare.workflow.retries.limit attribute",
            ),
        ],
    ),
    "cloudflare.workflow.timeout": AttributeMetadata(
        brief="The timeout duration for a Cloudflare Workflow step",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="1 minute",
        changelog=[
            ChangelogEntry(
                version="0.11.0",
                prs=[392],
                description="Added cloudflare.workflow.timeout attribute",
            ),
        ],
    ),
    "cls.source.<key>": AttributeMetadata(
        brief="The HTML elements or components responsible for the layout shift. <key> is a numeric index from 1 to N",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        has_dynamic_suffix=True,
        example="body > div#app",
        deprecation=DeprecationInfo(
            replacement="browser.web_vital.cls.source.<key>",
            reason="The CLS source is now recorded as a browser.web_vital.cls.source.<key> attribute.",
            status=DeprecationStatus.BACKFILL,
        ),
        aliases=["browser.web_vital.cls.source.<key>"],
        changelog=[
            ChangelogEntry(version="0.5.0", prs=[234]),
        ],
    ),
    "cls": AttributeMetadata(
        brief="The value of the recorded Cumulative Layout Shift (CLS) web vital",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=0.2361,
        deprecation=DeprecationInfo(
            replacement="browser.web_vital.cls.value",
            reason="The CLS web vital is now recorded as a browser.web_vital.cls.value attribute.",
            status=DeprecationStatus.BACKFILL,
        ),
        aliases=["browser.web_vital.cls.value"],
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[229],
                description="Added and deprecated attribute to document JS SDK's current behaviour",
            ),
        ],
    ),
    "code.file.path": AttributeMetadata(
        brief="The source code file name that identifies the code unit as uniquely as possible (preferably an absolute file path).",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="/app/myapplication/http/handler/server.py",
        aliases=["code.filepath"],
        changelog=[
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "code.filepath": AttributeMetadata(
        brief="The source code file name that identifies the code unit as uniquely as possible (preferably an absolute file path).",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="/app/myapplication/http/handler/server.py",
        deprecation=DeprecationInfo(replacement="code.file.path"),
        aliases=["code.file.path"],
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[61]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "code.function": AttributeMetadata(
        brief="The method or function name, or equivalent (usually rightmost part of the code unit's name).",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="server_request",
        aliases=["code.function.name"],
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[61, 74]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "code.function.name": AttributeMetadata(
        brief="The method or function fully-qualified name without arguments.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="server_request",
        aliases=["code.function"],
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "code.line.number": AttributeMetadata(
        brief="The line number in code.filepath best representing the operation. It SHOULD point within the code unit named in code.function",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example=42,
        aliases=["code.lineno"],
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "code.lineno": AttributeMetadata(
        brief="The line number in code.filepath best representing the operation. It SHOULD point within the code unit named in code.function",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example=42,
        deprecation=DeprecationInfo(replacement="code.line.number"),
        aliases=["code.line.number"],
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.1.0", prs=[61, 108]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "code.namespace": AttributeMetadata(
        brief="The 'namespace' within which code.function is defined. Usually the qualified class or module name, such that code.namespace + some separator + code.function form a unique identifier for the code unit.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="http.handler",
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[61, 74]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "connection.rtt": AttributeMetadata(
        brief="Specifies the estimated effective round-trip time of the current connection, in milliseconds.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=100,
        deprecation=DeprecationInfo(
            replacement="network.connection.rtt",
            reason="Old attribute name (no official namespace), to be replaced with network.connection.rtt for span-first future",
            status=DeprecationStatus.BACKFILL,
        ),
        aliases=["network.connection.rtt"],
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[279],
                description="Added and deprecated attribute to document JS SDK's current behaviour",
            ),
        ],
    ),
    "connectionType": AttributeMetadata(
        brief="Specifies the type of the current connection (e.g. wifi, ethernet, cellular , etc).",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="wifi",
        deprecation=DeprecationInfo(
            replacement="network.connection.type",
            reason="Old namespace-less attribute, to be replaced with network.connection.type for span-first future",
            status=DeprecationStatus.BACKFILL,
        ),
        aliases=["network.connection.type", "device.connection_type"],
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[279],
                description="Added and deprecated attribute to document JS SDK's current behaviour",
            ),
        ],
    ),
    "culture.calendar": AttributeMetadata(
        brief="The calendar system used by the culture.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="GregorianCalendar",
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[243]),
        ],
    ),
    "culture.display_name": AttributeMetadata(
        brief="Human readable name of the culture.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="English (United States)",
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[243]),
        ],
    ),
    "culture.is_24_hour_format": AttributeMetadata(
        brief="Whether the culture uses 24-hour time format.",
        type=AttributeType.BOOLEAN,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=True,
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[243]),
        ],
    ),
    "culture.locale": AttributeMetadata(
        brief="The locale identifier following RFC 4646.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="en-US",
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[243]),
        ],
    ),
    "culture.timezone": AttributeMetadata(
        brief="The timezone of the culture, as a geographic timezone identifier.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="Europe/Vienna",
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[243]),
        ],
    ),
    "db.collection.name": AttributeMetadata(
        brief="The name of a collection (table, container) within the database.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="users",
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[106, 127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "db.driver.name": AttributeMetadata(
        brief="The name of the driver used for the database connection.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="psycopg2",
        changelog=[
            ChangelogEntry(
                version="0.5.0", prs=[297], description="Added db.driver.name attribute"
            ),
        ],
    ),
    "db.name": AttributeMetadata(
        brief="The name of the database being accessed.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="customers",
        deprecation=DeprecationInfo(replacement="db.namespace"),
        aliases=["db.namespace"],
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[61, 127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "db.namespace": AttributeMetadata(
        brief="The name of the database being accessed.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="customers",
        aliases=["db.name"],
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "db.operation": AttributeMetadata(
        brief="The name of the operation being executed.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="SELECT",
        deprecation=DeprecationInfo(
            replacement="db.operation.name", status=DeprecationStatus.NORMALIZE
        ),
        aliases=["db.operation.name", "cloudflare.d1.query_type"],
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[199]),
            ChangelogEntry(version="0.1.0", prs=[61, 127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "db.operation.batch.size": AttributeMetadata(
        brief="The number of queries included in a batch operation. Operations are only considered batches when they contain two or more operations, and so db.operation.batch.size SHOULD never be 1.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example=3,
        changelog=[
            ChangelogEntry(
                version="0.11.0",
                prs=[407],
                description="Added db.operation.batch.size attribute",
            ),
        ],
    ),
    "db.operation.name": AttributeMetadata(
        brief="The name of the operation being executed.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="SELECT",
        aliases=["db.operation", "cloudflare.d1.query_type"],
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "db.query.parameter.<key>": AttributeMetadata(
        brief="A query parameter used in db.query.text, with <key> being the parameter name, and the attribute value being a string representation of the parameter value.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        has_dynamic_suffix=True,
        example="db.query.parameter.foo='123'",
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[103, 127]),
        ],
    ),
    "db.query.summary": AttributeMetadata(
        brief="A shortened representation of operation(s) in the full query. This attribute must be low-cardinality and should only contain the operation table names.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="SELECT users;",
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[208]),
            ChangelogEntry(version="0.1.0", prs=[127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "db.query.text": AttributeMetadata(
        brief="The database parameterized query being executed. Any parameter values (filters, insertion values, etc) should be replaced with parameter placeholders. If applicable, use `db.query.parameter.<key>` to add the parameter value.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="SELECT * FROM users WHERE id = $1",
        aliases=["db.statement"],
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[208]),
            ChangelogEntry(version="0.1.0", prs=[127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "db.redis.connection": AttributeMetadata(
        brief="The redis connection name.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="my-redis-instance",
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "db.redis.key": AttributeMetadata(
        brief="The key the Redis command is operating on.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="user:2047:city",
        changelog=[
            ChangelogEntry(
                version="0.6.0", prs=[326], description="Added db.redis.key attribute"
            ),
        ],
    ),
    "db.redis.parameters": AttributeMetadata(
        brief="The array of command parameters given to a redis command.",
        type=AttributeType.STRING_ARRAY,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=["test", "*"],
        changelog=[
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "db.sql.bindings": AttributeMetadata(
        brief="The array of query bindings.",
        type=AttributeType.STRING_ARRAY,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=["1", "foo"],
        deprecation=DeprecationInfo(
            replacement="db.query.parameter.<key>",
            reason="Instead of adding every binding in the db.sql.bindings attribute, add them as individual entires with db.query.parameter.<key>.",
        ),
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[61]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "db.statement": AttributeMetadata(
        brief="The database statement being executed.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="SELECT * FROM users",
        deprecation=DeprecationInfo(
            replacement="db.query.text", status=DeprecationStatus.NORMALIZE
        ),
        aliases=["db.query.text"],
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[199]),
            ChangelogEntry(version="0.1.0", prs=[61, 127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "db.stored_procedure.name": AttributeMetadata(
        brief="The name of a stored procedure being called.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="GetUserById",
        changelog=[
            ChangelogEntry(version="0.11.0", prs=[398]),
        ],
    ),
    "db.system": AttributeMetadata(
        brief="An identifier for the database management system (DBMS) product being used. See [OpenTelemetry docs](https://github.com/open-telemetry/semantic-conventions/blob/main/docs/database/database-spans.md#notes-and-well-known-identifiers-for-dbsystem) for a list of well-known identifiers.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="postgresql",
        deprecation=DeprecationInfo(
            replacement="db.system.name", status=DeprecationStatus.BACKFILL
        ),
        aliases=["db.system.name"],
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[199, 224]),
            ChangelogEntry(version="0.1.0", prs=[61, 127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "db.system.name": AttributeMetadata(
        brief="An identifier for the database management system (DBMS) product being used. See [OpenTelemetry docs](https://github.com/open-telemetry/semantic-conventions/blob/main/docs/database/database-spans.md#notes-and-well-known-identifiers-for-dbsystem) for a list of well-known identifiers.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="postgresql",
        aliases=["db.system"],
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "db.user": AttributeMetadata(
        brief="The database user.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="fancy_user",
        changelog=[
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "device.archs": AttributeMetadata(
        brief="The CPU architectures of the device.",
        type=AttributeType.STRING_ARRAY,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=["arm64-v8a", "armeabi-v7a", "armeabi"],
        changelog=[
            ChangelogEntry(
                version="0.5.0", prs=[303], description="Added device.archs attribute"
            ),
        ],
    ),
    "device.battery_level": AttributeMetadata(
        brief="The battery level of the device as a percentage (0-100).",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=100,
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[303],
                description="Added device.battery_level attribute",
            ),
        ],
    ),
    "device.battery_temperature": AttributeMetadata(
        brief="The battery temperature of the device in Celsius.",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=25,
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[303],
                description="Added device.battery_temperature attribute",
            ),
        ],
    ),
    "device.boot_time": AttributeMetadata(
        brief="A formatted UTC timestamp when the system was booted.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="2018-02-08T12:52:12Z",
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[303],
                description="Added device.boot_time attribute",
            ),
        ],
    ),
    "device.brand": AttributeMetadata(
        brief="The brand of the device.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="Apple",
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[116, 127]),
        ],
    ),
    "device.charging": AttributeMetadata(
        brief="Whether the device was charging or not.",
        type=AttributeType.BOOLEAN,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=False,
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[303],
                description="Added device.charging attribute",
            ),
        ],
    ),
    "device.chipset": AttributeMetadata(
        brief="The chipset of the device.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="Qualcomm SM8550",
        changelog=[
            ChangelogEntry(
                version="0.5.0", prs=[303], description="Added device.chipset attribute"
            ),
        ],
    ),
    "device.class": AttributeMetadata(
        brief="The classification of the device. For example, `low`, `medium`, or `high`. Typically inferred by Relay - SDKs generally do not need to set this directly.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="medium",
        changelog=[
            ChangelogEntry(
                version="0.5.0", prs=[300], description="Added device.class attribute"
            ),
        ],
    ),
    "device.connection_type": AttributeMetadata(
        brief="The internet connection type currently being used by the device.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="wifi",
        deprecation=DeprecationInfo(
            replacement="network.connection.type",
            reason="This attribute is being deprecated in favor of network.connection.type",
            status=DeprecationStatus.BACKFILL,
        ),
        aliases=["network.connection.type", "connectionType"],
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[303],
                description="Added and deprecated device.connection_type in favor of network.connection.type",
            ),
        ],
    ),
    "device.cpu_description": AttributeMetadata(
        brief="A description of the CPU of the device.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="Intel(R) Core(TM)2 Quad CPU Q6600 @ 2.40GHz",
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[303],
                description="Added device.cpu_description attribute",
            ),
        ],
    ),
    "device.external_free_storage": AttributeMetadata(
        brief="External storage free size in bytes.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=67108864000,
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[303],
                description="Added device.external_free_storage attribute",
            ),
        ],
    ),
    "device.external_storage_size": AttributeMetadata(
        brief="External storage total size in bytes.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=134217728000,
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[303],
                description="Added device.external_storage_size attribute",
            ),
        ],
    ),
    "device.family": AttributeMetadata(
        brief="The family of the device.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="iPhone",
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[116, 127]),
        ],
    ),
    "device.free_memory": AttributeMetadata(
        brief="Free system memory in bytes.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=2147483648,
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[300],
                description="Added device.free_memory attribute",
            ),
        ],
    ),
    "device.free_storage": AttributeMetadata(
        brief="Free device storage in bytes.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=107374182400,
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[303],
                description="Added device.free_storage attribute",
            ),
        ],
    ),
    "device.id": AttributeMetadata(
        brief="Unique device identifier.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="a1b2c3d4-e5f6-7890-abcd-ef1234567890",
        changelog=[
            ChangelogEntry(
                version="0.5.0", prs=[303], description="Added device.id attribute"
            ),
        ],
    ),
    "device.locale": AttributeMetadata(
        brief="The locale of the device.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="en-US",
        changelog=[
            ChangelogEntry(
                version="0.5.0", prs=[303], description="Added device.locale attribute"
            ),
        ],
    ),
    "device.low_memory": AttributeMetadata(
        brief="Whether the device was low on memory.",
        type=AttributeType.BOOLEAN,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=False,
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[303],
                description="Added device.low_memory attribute",
            ),
        ],
    ),
    "device.low_power_mode": AttributeMetadata(
        brief="Whether the device is in Low Power Mode.",
        type=AttributeType.BOOLEAN,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=True,
        changelog=[
            ChangelogEntry(
                version="0.6.0",
                prs=[314],
                description="Added device.low_power_mode attribute",
            ),
        ],
    ),
    "device.manufacturer": AttributeMetadata(
        brief="The manufacturer of the device.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="Google",
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[303],
                description="Added device.manufacturer attribute",
            ),
        ],
    ),
    "device.memory.estimated_capacity": AttributeMetadata(
        brief="The estimated total memory capacity of the device, only a rough estimation in gigabytes. Browsers report estimations in buckets of powers of 2, mostly capped at 8 GB",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=8,
        aliases=["deviceMemory"],
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[281],
                description="Added attribute device.memory.estimated_capacity to be used instead of deviceMemory",
            ),
        ],
    ),
    "device.memory_size": AttributeMetadata(
        brief="Total system memory available in bytes.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=17179869184,
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[300],
                description="Added device.memory_size attribute",
            ),
        ],
    ),
    "device.model": AttributeMetadata(
        brief="The model of the device.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="iPhone 15 Pro Max",
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[116, 127]),
        ],
    ),
    "device.model_id": AttributeMetadata(
        brief="An internal hardware revision to identify the device exactly.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="N861AP",
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[300],
                description="Added device.model_id attribute",
            ),
        ],
    ),
    "device.name": AttributeMetadata(
        brief="The name of the device. On mobile, this is the user-assigned device name. On servers and desktops, this is typically the hostname.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="localhost",
        changelog=[
            ChangelogEntry(
                version="0.5.0", prs=[303], description="Added device.name attribute"
            ),
        ],
    ),
    "device.online": AttributeMetadata(
        brief="Whether the device was online or not.",
        type=AttributeType.BOOLEAN,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=True,
        changelog=[
            ChangelogEntry(
                version="0.5.0", prs=[303], description="Added device.online attribute"
            ),
        ],
    ),
    "device.orientation": AttributeMetadata(
        brief='The orientation of the device, either "portrait" or "landscape".',
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="portrait",
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[303],
                description="Added device.orientation attribute",
            ),
        ],
    ),
    "device.processor_count": AttributeMetadata(
        brief='Number of "logical processors".',
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=8,
        aliases=["hardwareConcurrency"],
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[300],
                description="Added and deprecated attribute device.processor_count in favor of device.cpu.logical_core_count",
            ),
        ],
    ),
    "device.processor_frequency": AttributeMetadata(
        brief="Processor frequency in MHz.",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=2400,
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[303],
                description="Added device.processor_frequency attribute",
            ),
        ],
    ),
    "device.screen_density": AttributeMetadata(
        brief="The screen density of the device.",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=2.625,
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[303],
                description="Added device.screen_density attribute",
            ),
        ],
    ),
    "device.screen_dpi": AttributeMetadata(
        brief="The screen density in dots-per-inch (DPI) of the device.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=420,
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[303],
                description="Added device.screen_dpi attribute",
            ),
        ],
    ),
    "device.screen_height_pixels": AttributeMetadata(
        brief="The height of the device screen in pixels.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=2400,
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[303],
                description="Added device.screen_height_pixels attribute",
            ),
        ],
    ),
    "device.screen_width_pixels": AttributeMetadata(
        brief="The width of the device screen in pixels.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=1080,
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[303],
                description="Added device.screen_width_pixels attribute",
            ),
        ],
    ),
    "device.simulator": AttributeMetadata(
        brief="Whether the device is a simulator or an actual device.",
        type=AttributeType.BOOLEAN,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=False,
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[300],
                description="Added device.simulator attribute",
            ),
        ],
    ),
    "device.storage_size": AttributeMetadata(
        brief="Total device storage in bytes.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=274877906944,
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[303],
                description="Added device.storage_size attribute",
            ),
        ],
    ),
    "device.thermal_state": AttributeMetadata(
        brief="The thermal state of the device. Based on Apple's `ProcessInfo.ThermalState` enum: `nominal`, `fair`, `serious`, or `critical`.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="nominal",
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[303],
                description="Added device.thermal_state attribute",
            ),
        ],
    ),
    "device.timezone": AttributeMetadata(
        brief="The timezone of the device.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="Europe/Vienna",
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[303],
                description="Added device.timezone attribute",
            ),
        ],
    ),
    "device.usable_memory": AttributeMetadata(
        brief="Memory usable for the app in bytes.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=2147483648,
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[303],
                description="Added device.usable_memory attribute",
            ),
        ],
    ),
    "deviceMemory": AttributeMetadata(
        brief="The estimated total memory capacity of the device, only a rough estimation in gigabytes.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="8 GB",
        deprecation=DeprecationInfo(
            replacement="device.memory.estimated_capacity",
            reason="Old namespace-less attribute, to be replaced with device.memory.estimated_capacity for span-first future",
            status=DeprecationStatus.BACKFILL,
        ),
        aliases=["device.memory.estimated_capacity"],
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[281],
                description="Added and deprecated attribute to document JS SDK's current behaviour",
            ),
        ],
    ),
    "effectiveConnectionType": AttributeMetadata(
        brief="Specifies the estimated effective type of the current connection (e.g. slow-2g, 2g, 3g, 4g).",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="4g",
        deprecation=DeprecationInfo(
            replacement="network.connection.effective_type",
            reason="Old namespace-less attribute, to be replaced with network.connection.effective_type for span-first future",
            status=DeprecationStatus.BACKFILL,
        ),
        aliases=["network.connection.effective_type"],
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[279],
                description="Added and deprecated attribute to document JS SDK's current behaviour",
            ),
        ],
    ),
    "environment": AttributeMetadata(
        brief="The sentry environment.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="production",
        deprecation=DeprecationInfo(replacement="sentry.environment"),
        aliases=["sentry.environment"],
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[61, 127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "error.type": AttributeMetadata(
        brief="Describes a class of error the operation ended with.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="timeout",
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "event.id": AttributeMetadata(
        brief="The unique identifier for this event (log record)",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=1234567890,
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[101]),
        ],
    ),
    "event.name": AttributeMetadata(
        brief="The name that uniquely identifies this event (log record)",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="Process Payload",
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[101, 127]),
        ],
    ),
    "exception.escaped": AttributeMetadata(
        brief="SHOULD be set to true if the exception event is recorded at a point where it is known that the exception is escaping the scope of the span.",
        type=AttributeType.BOOLEAN,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example=True,
        changelog=[
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "exception.message": AttributeMetadata(
        brief="The error message.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="ENOENT: no such file or directory",
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "exception.stacktrace": AttributeMetadata(
        brief="A stacktrace as a string in the natural representation for the language runtime. The representation is to be determined and documented by each language SIG.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example='Exception in thread "main" java.lang.RuntimeException: Test exception\n at com.example.GenerateTrace.methodB(GenerateTrace.java:13)\n at com.example.GenerateTrace.methodA(GenerateTrace.java:9)\n at com.example.GenerateTrace.main(GenerateTrace.java:5)',
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "exception.type": AttributeMetadata(
        brief="The type of the exception (its fully-qualified class name, if applicable). The dynamic type of the exception should be preferred over the static type in languages that support it.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="OSError",
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "faas.coldstart": AttributeMetadata(
        brief="A boolean that is true if the serverless function is executed for the first time (aka cold-start).",
        type=AttributeType.BOOLEAN,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example=True,
        changelog=[
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "faas.cron": AttributeMetadata(
        brief="A string containing the schedule period as Cron Expression.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="0/5 * * * ? *",
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "faas.duration_in_ms": AttributeMetadata(
        brief="The duration a function took to run, in milliseconds.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=120,
        changelog=[
            ChangelogEntry(version="0.11.0", prs=[403]),
        ],
    ),
    "faas.entry_point": AttributeMetadata(
        brief="The code that's run when the cloud provider invokes your function.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="my_main_function",
        changelog=[
            ChangelogEntry(version="0.11.0", prs=[403, 415]),
        ],
    ),
    "faas.identity": AttributeMetadata(
        brief="The Service Account (GCP), IAM Execution Role (AWS), or Managed Identity (Azure) used by the serverless function when interacting with other cloud services",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="name@project.iam.gserviceaccount.com (GCP), arn:aws:iam::123456789012:role/role-name (AWS), 00000000-0000-0000-0000-000000000000 (Azure)",
        changelog=[
            ChangelogEntry(version="0.11.0", prs=[403]),
        ],
    ),
    "faas.invocation_id": AttributeMetadata(
        brief="The invocation ID of the current function invocation.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="af9d5aa4-a685-4c5f-a22b-444f80b3cc28",
        aliases=["aws.lambda.aws_request_id"],
        changelog=[
            ChangelogEntry(version="0.11.1", prs=[414, 424]),
        ],
    ),
    "faas.name": AttributeMetadata(
        brief="The name of the serverless function",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="my_function",
        aliases=["aws.lambda.function_name"],
        changelog=[
            ChangelogEntry(version="0.11.0", prs=[403, 415]),
        ],
    ),
    "faas.time": AttributeMetadata(
        brief="A string containing the function invocation time in the ISO 8601 format expressed in UTC.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="2020-01-23T13:47:06Z",
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "faas.trigger": AttributeMetadata(
        brief="Type of the trigger which caused this function invocation.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="timer",
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "faas.version": AttributeMetadata(
        brief="The version of the function that was invoked",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="$LATEST",
        aliases=["aws.lambda.function_version"],
        changelog=[
            ChangelogEntry(version="0.11.1", prs=[414, 424]),
        ],
    ),
    "fcp": AttributeMetadata(
        brief="The time it takes for the browser to render the first piece of meaningful content on the screen",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=547.6951,
        deprecation=DeprecationInfo(
            replacement="browser.web_vital.fcp.value",
            reason="This attribute is being deprecated in favor of browser.web_vital.fcp.value",
            status=DeprecationStatus.BACKFILL,
        ),
        aliases=["browser.web_vital.fcp.value"],
        changelog=[
            ChangelogEntry(version="0.5.0", prs=[235]),
        ],
    ),
    "flag.evaluation.<key>": AttributeMetadata(
        brief="An instance of a feature flag evaluation. The value of this attribute is the boolean representing the evaluation result. The <key> suffix is the name of the feature flag.",
        type=AttributeType.BOOLEAN,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        has_dynamic_suffix=True,
        example="flag.evaluation.is_new_ui=true",
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[103]),
        ],
    ),
    "fp": AttributeMetadata(
        brief="The time it takes for the browser to render the first pixel on the screen",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=477.1926,
        deprecation=DeprecationInfo(
            replacement="browser.web_vital.fp.value",
            reason="This attribute is being deprecated in favor of browser.web_vital.fp.value",
            status=DeprecationStatus.BACKFILL,
        ),
        aliases=["browser.web_vital.fp.value"],
        changelog=[
            ChangelogEntry(version="0.5.0", prs=[235]),
        ],
    ),
    "frames.delay": AttributeMetadata(
        brief="The sum of all delayed frame durations in seconds during the lifetime of the span. For more information see [frames delay](https://develop.sentry.dev/sdk/performance/frames-delay/).",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=5,
        deprecation=DeprecationInfo(
            replacement="app.vitals.frames.delay.value",
            reason="Replaced by app.vitals.frames.delay.value to align with the app.vitals.* namespace for mobile performance attributes",
            status=DeprecationStatus.BACKFILL,
        ),
        aliases=["app.vitals.frames.delay.value"],
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[313],
                description="Deprecated in favor of app.vitals.frames.delay.value",
            ),
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "frames.frozen": AttributeMetadata(
        brief="The number of frozen frames rendered during the lifetime of the span.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=3,
        deprecation=DeprecationInfo(
            replacement="app.vitals.frames.frozen.count",
            reason="Replaced by app.vitals.frames.frozen.count to align with the app.vitals.* namespace for mobile performance attributes",
            status=DeprecationStatus.BACKFILL,
        ),
        aliases=["app.vitals.frames.frozen.count"],
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[313],
                description="Deprecated in favor of app.vitals.frames.frozen.count",
            ),
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "frames.slow": AttributeMetadata(
        brief="The number of slow frames rendered during the lifetime of the span.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=1,
        deprecation=DeprecationInfo(
            replacement="app.vitals.frames.slow.count",
            reason="Replaced by app.vitals.frames.slow.count to align with the app.vitals.* namespace for mobile performance attributes",
            status=DeprecationStatus.BACKFILL,
        ),
        aliases=["app.vitals.frames.slow.count"],
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[313],
                description="Deprecated in favor of app.vitals.frames.slow.count",
            ),
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "frames.total": AttributeMetadata(
        brief="The number of total frames rendered during the lifetime of the span.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=60,
        deprecation=DeprecationInfo(
            replacement="app.vitals.frames.total.count",
            reason="Replaced by app.vitals.frames.total.count to align with the app.vitals.* namespace for mobile performance attributes",
            status=DeprecationStatus.BACKFILL,
        ),
        aliases=["app.vitals.frames.total.count"],
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[313],
                description="Deprecated in favor of app.vitals.frames.total.count",
            ),
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "frames_frozen_rate": AttributeMetadata(
        brief="The rate of frozen frames, or `app_vitals.frames.frozen.count` divided by `app_vitals.frames.total.count`. This is computed by Relay.",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        changelog=[
            ChangelogEntry(
                version="0.7.0",
                prs=[362],
                description="Added frames_frozen_rate attribute",
            ),
        ],
    ),
    "frames_slow_rate": AttributeMetadata(
        brief="The rate of slow frames, or `app_vitals.frames.slow.count` divided by `app_vitals.frames.total.count`. This is computed by Relay.",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        changelog=[
            ChangelogEntry(
                version="0.7.0",
                prs=[362],
                description="Added frames_slow_rate attribute",
            ),
        ],
    ),
    "fs_error": AttributeMetadata(
        brief="The error message of a file system error.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="ENOENT: no such file or directory",
        deprecation=DeprecationInfo(
            replacement="error.type",
            reason="This attribute is not part of the OpenTelemetry specification and error.type fits much better.",
        ),
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[61, 127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "gcp.function.context.event_id": AttributeMetadata(
        brief="The event ID from the legacy GCP Cloud Function context (1st gen)",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="1234567890",
        changelog=[
            ChangelogEntry(
                version="0.7.0",
                prs=[371],
                description="Added gcp.function.context.event_id attribute",
            ),
        ],
    ),
    "gcp.function.context.event_type": AttributeMetadata(
        brief="The type of the GCP Cloud Function event",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="google.pubsub.topic.publish",
        changelog=[
            ChangelogEntry(
                version="0.7.0",
                prs=[371],
                description="Added gcp.function.context.event_type attribute",
            ),
        ],
    ),
    "gcp.function.context.id": AttributeMetadata(
        brief="The unique event ID from the GCP CloudEvents context (2nd gen Cloud Functions)",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="1234567890",
        changelog=[
            ChangelogEntry(
                version="0.7.0",
                prs=[371],
                description="Added gcp.function.context.id attribute",
            ),
        ],
    ),
    "gcp.function.context.resource": AttributeMetadata(
        brief="The resource that triggered the GCP Cloud Function event",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="projects/my-project/topics/my-topic",
        changelog=[
            ChangelogEntry(
                version="0.7.0",
                prs=[371],
                description="Added gcp.function.context.resource attribute",
            ),
        ],
    ),
    "gcp.function.context.source": AttributeMetadata(
        brief="The source of the GCP Cloud Function event",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="//pubsub.googleapis.com/projects/my-project/topics/my-topic",
        changelog=[
            ChangelogEntry(
                version="0.7.0",
                prs=[371],
                description="Added gcp.function.context.source attribute",
            ),
        ],
    ),
    "gcp.function.context.specversion": AttributeMetadata(
        brief="The CloudEvents specification version of the GCP Cloud Function event",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="1.0",
        changelog=[
            ChangelogEntry(
                version="0.7.0",
                prs=[371],
                description="Added gcp.function.context.specversion attribute",
            ),
        ],
    ),
    "gcp.function.context.time": AttributeMetadata(
        brief="The timestamp of the GCP Cloud Function event",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="2024-01-01T00:00:00.000Z",
        changelog=[
            ChangelogEntry(
                version="0.7.0",
                prs=[371],
                description="Added gcp.function.context.time attribute",
            ),
        ],
    ),
    "gcp.function.context.timestamp": AttributeMetadata(
        brief="The legacy timestamp of the GCP Cloud Function event",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="2024-01-01T00:00:00.000Z",
        changelog=[
            ChangelogEntry(
                version="0.7.0",
                prs=[371],
                description="Added gcp.function.context.timestamp attribute",
            ),
        ],
    ),
    "gcp.function.context.type": AttributeMetadata(
        brief="The type of the GCP Cloud Function event context",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="cloud_functions.context",
        changelog=[
            ChangelogEntry(
                version="0.7.0",
                prs=[371],
                description="Added gcp.function.context.type attribute",
            ),
        ],
    ),
    "gcp.project.id": AttributeMetadata(
        brief="The ID of the project in GCP that this resource is associated with",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="my-project-123",
        changelog=[
            ChangelogEntry(version="0.11.0", prs=[403]),
        ],
    ),
    "gen_ai.agent.name": AttributeMetadata(
        brief="The name of the agent being used.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="ResearchAssistant",
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[62, 127]),
        ],
    ),
    "gen_ai.context.utilization": AttributeMetadata(
        brief="The fraction of the model context window utilized by this generation.",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=0.75,
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[315],
                description="Added gen_ai.context.utilization attribute",
            ),
        ],
    ),
    "gen_ai.context.window_size": AttributeMetadata(
        brief="The maximum context window size supported by the model for this generation.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=128000,
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[315],
                description="Added gen_ai.context.window_size attribute",
            ),
        ],
    ),
    "gen_ai.conversation.id": AttributeMetadata(
        brief="The unique identifier for a conversation (session, thread), used to store and correlate messages within this conversation.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="conv_5j66UpCpwteGg4YSxUnt7lPY",
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[250]),
        ],
    ),
    "gen_ai.cost.input_tokens": AttributeMetadata(
        brief="The cost of tokens used to process the AI input (prompt) in USD (without cached input tokens).",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=123.45,
        changelog=[
            ChangelogEntry(
                version="0.9.0", prs=[397], description="Add additional_context"
            ),
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.1.0", prs=[112]),
        ],
        additional_context=[
            "This attribute appears on both agent parent spans (aggregated totals) and LLM child spans (per-call values). When using sum() to calculate total cost, filter to gen_ai.operation.type:ai_client to avoid double-counting hierarchical spans.",
            "Despite the name 'cost.input_tokens', this value is cost in USD, not a token count. For token counts, use gen_ai.usage.input_tokens.",
            "This is the cost of non-cached input tokens only. The cost of cached tokens is excluded from this value.",
        ],
    ),
    "gen_ai.cost.output_tokens": AttributeMetadata(
        brief="The cost of tokens used for creating the AI output in USD (without reasoning tokens).",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=123.45,
        changelog=[
            ChangelogEntry(
                version="0.9.0", prs=[397], description="Add additional_context"
            ),
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.1.0", prs=[112]),
        ],
        additional_context=[
            "This attribute appears on both agent parent spans (aggregated totals) and LLM child spans (per-call values). When using sum() to calculate total cost, filter to gen_ai.operation.type:ai_client to avoid double-counting hierarchical spans.",
            "Despite the name 'cost.output_tokens', this value is cost in USD, not a token count. For token counts, use gen_ai.usage.output_tokens.",
            "This is the cost of non-reasoning output tokens only. The cost of reasoning tokens is excluded from this value.",
        ],
    ),
    "gen_ai.cost.total_tokens": AttributeMetadata(
        brief="The total cost for the tokens used.",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=12.34,
        aliases=["ai.total_cost"],
        changelog=[
            ChangelogEntry(
                version="0.9.0", prs=[397], description="Add additional_context"
            ),
            ChangelogEntry(version="0.5.0", prs=[264]),
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.1.0", prs=[126]),
        ],
        additional_context=[
            "This attribute appears on both agent parent spans (aggregated totals) and LLM child spans (per-call values). When using sum() to calculate total cost, filter to gen_ai.operation.type:ai_client to avoid double-counting hierarchical spans.",
            "Despite the name 'cost.total_tokens', this value is cost in USD, not a token count. For token counts, use gen_ai.usage.total_tokens.",
        ],
    ),
    "gen_ai.embeddings.input": AttributeMetadata(
        brief="The input to the embeddings model.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="What's the weather in Paris?",
        changelog=[
            ChangelogEntry(version="0.3.1", prs=[195]),
        ],
    ),
    "gen_ai.function_id": AttributeMetadata(
        brief="Framework-specific tracing label for the execution of a function or other unit of execution in a generative AI system.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="my-awesome-function",
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[308],
                description="Added gen_ai.function_id attribute",
            ),
        ],
    ),
    "gen_ai.input.messages": AttributeMetadata(
        brief='The messages passed to the model. It has to be a stringified version of an array of objects. The `role` attribute of each object must be `"user"`, `"assistant"`, `"tool"`, or `"system"`. For messages of the role `"tool"`, the `content` can be a string or an arbitrary object with information about the tool call. For other messages the `content` can be either a string or a list of objects in the format `{type: "text", text:"..."}`.',
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example='[{"role": "user", "parts": [{"type": "text", "content": "Weather in Paris?"}]}, {"role": "assistant", "parts": [{"type": "tool_call", "id": "call_VSPygqKTWdrhaFErNvMV18Yl", "name": "get_weather", "arguments": {"location": "Paris"}}]}, {"role": "tool", "parts": [{"type": "tool_call_response", "id": "call_VSPygqKTWdrhaFErNvMV18Yl", "result": "rainy, 57°F"}]}]',
        aliases=["ai.texts"],
        changelog=[
            ChangelogEntry(version="0.5.0", prs=[264]),
            ChangelogEntry(version="0.4.0", prs=[221]),
        ],
    ),
    "gen_ai.operation.name": AttributeMetadata(
        brief="The name of the operation being performed. It has the following list of well-known values: 'chat', 'create_agent', 'embeddings', 'execute_tool', 'generate_content', 'invoke_agent', 'text_completion'. If one of them applies, then that value MUST be used. Otherwise a custom value MAY be used.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="chat",
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[225]),
            ChangelogEntry(version="0.1.0", prs=[62, 127]),
        ],
    ),
    "gen_ai.operation.type": AttributeMetadata(
        brief="The type of AI operation. Must be one of 'agent' (invoke_agent and create_agent spans), 'ai_client' (any LLM call), 'tool' (execute_tool spans), 'handoff' (handoff spans), 'other' (input and output processors, skill loading, guardrails etc.) . Added during ingestion based on span.op and gen_ai.operation.type. Used to filter and aggregate data in the UI",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="tool",
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[257]),
            ChangelogEntry(version="0.1.0", prs=[113, 127]),
        ],
    ),
    "gen_ai.output.messages": AttributeMetadata(
        brief="The model's response messages. It has to be a stringified version of an array of message objects, which can include text responses and tool calls.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example='[{"role": "assistant", "parts": [{"type": "text", "content": "The weather in Paris is currently rainy with a temperature of 57°F."}], "finish_reason": "stop"}]',
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[221]),
        ],
    ),
    "gen_ai.pipeline.name": AttributeMetadata(
        brief="Name of the AI pipeline or chain being executed.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="Autofix Pipeline",
        aliases=["ai.pipeline.name"],
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[76, 127]),
        ],
    ),
    "gen_ai.prompt": AttributeMetadata(
        brief="The input messages sent to the model",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example='[{"role": "user", "message": "hello"}]',
        deprecation=DeprecationInfo(
            reason="Deprecated from OTEL, use gen_ai.input.messages with the new format instead."
        ),
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[74, 108, 119]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "gen_ai.prompt.name": AttributeMetadata(
        brief="The name of the prompt that uniquely identifies it.",
        type=AttributeType.STRING,
        pii=PiiInfo(
            isPii=IsPii.MAYBE,
            reason="Prompt names may reveal user behavior patterns or sensitive operations",
        ),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="summarize_text",
        aliases=["mcp.prompt.name"],
        changelog=[
            ChangelogEntry(
                version="next", description="Added gen_ai.prompt.name attribute"
            ),
        ],
    ),
    "gen_ai.provider.name": AttributeMetadata(
        brief="The Generative AI provider as identified by the client or server instrumentation.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="openai",
        aliases=["ai.model.provider", "gen_ai.system"],
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[253]),
        ],
    ),
    "gen_ai.request.available_tools": AttributeMetadata(
        brief="The available tools for the model. It has to be a stringified version of an array of objects.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example='[{"name": "get_weather", "description": "Get the weather for a given location"}, {"name": "get_news", "description": "Get the news for a given topic"}]',
        deprecation=DeprecationInfo(
            replacement="gen_ai.tool.definitions", status=DeprecationStatus.NORMALIZE
        ),
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[221]),
            ChangelogEntry(version="0.1.0", prs=[63, 127]),
        ],
    ),
    "gen_ai.request.frequency_penalty": AttributeMetadata(
        brief="Used to reduce repetitiveness of generated tokens. The higher the value, the stronger a penalty is applied to previously present tokens, proportional to how many times they have already appeared in the prompt or prior generation.",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example=0.5,
        aliases=["ai.frequency_penalty"],
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.1.0", prs=[57]),
        ],
    ),
    "gen_ai.request.max_tokens": AttributeMetadata(
        brief="The maximum number of tokens to generate in the response.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example=2048,
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.1.0", prs=[62]),
        ],
    ),
    "gen_ai.request.messages": AttributeMetadata(
        brief='The messages passed to the model. It has to be a stringified version of an array of objects. The `role` attribute of each object must be `"user"`, `"assistant"`, `"tool"`, or `"system"`. For messages of the role `"tool"`, the `content` can be a string or an arbitrary object with information about the tool call. For other messages the `content` can be either a string or a list of objects in the format `{type: "text", text:"..."}`.',
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example='[{"role": "system", "content": "Generate a random number."}, {"role": "user", "content": [{"text": "Generate a random number between 0 and 10.", "type": "text"}]}, {"role": "tool", "content": {"toolCallId": "1", "toolName": "Weather", "output": "rainy"}}]',
        deprecation=DeprecationInfo(
            replacement="gen_ai.input.messages", status=DeprecationStatus.NORMALIZE
        ),
        aliases=["ai.input_messages"],
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[221]),
            ChangelogEntry(version="0.1.0", prs=[63, 74, 108, 119, 122]),
        ],
    ),
    "gen_ai.request.model": AttributeMetadata(
        brief="The model identifier being used for the request.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="gpt-4-turbo-preview",
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[62, 127]),
        ],
    ),
    "gen_ai.request.presence_penalty": AttributeMetadata(
        brief="Used to reduce repetitiveness of generated tokens. Similar to frequency_penalty, except that this penalty is applied equally to all tokens that have already appeared, regardless of their exact frequencies.",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example=0.5,
        aliases=["ai.presence_penalty"],
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.1.0", prs=[57]),
        ],
    ),
    "gen_ai.request.seed": AttributeMetadata(
        brief="The seed, ideally models given the same seed and same other parameters will produce the exact same output.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="1234567890",
        aliases=["ai.seed"],
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[57, 127]),
        ],
    ),
    "gen_ai.request.temperature": AttributeMetadata(
        brief="For an AI model call, the temperature parameter. Temperature essentially means how random the output will be.",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example=0.1,
        aliases=["ai.temperature"],
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.1.0", prs=[57]),
        ],
    ),
    "gen_ai.request.top_k": AttributeMetadata(
        brief="Limits the model to only consider the K most likely next tokens, where K is an integer (e.g., top_k=20 means only the 20 highest probability tokens are considered).",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example=35,
        aliases=["ai.top_k"],
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.1.0", prs=[57]),
        ],
    ),
    "gen_ai.request.top_p": AttributeMetadata(
        brief="Limits the model to only consider tokens whose cumulative probability mass adds up to p, where p is a float between 0 and 1 (e.g., top_p=0.7 means only tokens that sum up to 70% of the probability mass are considered).",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example=0.7,
        aliases=["ai.top_p"],
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.1.0", prs=[57]),
        ],
    ),
    "gen_ai.response.finish_reasons": AttributeMetadata(
        brief="The reason why the model stopped generating.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="COMPLETE",
        aliases=["ai.finish_reason"],
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[57, 127]),
        ],
    ),
    "gen_ai.response.id": AttributeMetadata(
        brief="Unique identifier for the completion.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="gen_123abc",
        aliases=["ai.generation_id"],
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[57, 127]),
        ],
    ),
    "gen_ai.response.model": AttributeMetadata(
        brief="The vendor-specific ID of the model used.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="gpt-4",
        aliases=["ai.model_id"],
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "gen_ai.response.streaming": AttributeMetadata(
        brief="Whether or not the AI model call's response was streamed back asynchronously",
        type=AttributeType.BOOLEAN,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=True,
        aliases=["ai.streaming"],
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[76]),
        ],
    ),
    "gen_ai.response.text": AttributeMetadata(
        brief="The model's response text messages. It has to be a stringified version of an array of response text messages.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example='["The weather in Paris is rainy and overcast, with temperatures around 57°F", "The weather in London is sunny and warm, with temperatures around 65°F"]',
        deprecation=DeprecationInfo(
            replacement="gen_ai.output.messages", status=DeprecationStatus.NORMALIZE
        ),
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[221]),
            ChangelogEntry(version="0.1.0", prs=[63, 74]),
        ],
    ),
    "gen_ai.response.time_to_first_chunk": AttributeMetadata(
        brief="Time in seconds when the first response content chunk arrived in streaming responses.",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example=0.6853435,
        aliases=["gen_ai.response.time_to_first_token"],
        changelog=[
            ChangelogEntry(
                version="0.11.0",
                prs=[418],
                description="Added gen_ai.response.time_to_first_chunk attribute",
            ),
        ],
    ),
    "gen_ai.response.time_to_first_token": AttributeMetadata(
        brief="Time in seconds when the first response content chunk arrived in streaming responses.",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=0.6853435,
        deprecation=DeprecationInfo(
            replacement="gen_ai.response.time_to_first_chunk",
            status=DeprecationStatus.BACKFILL,
        ),
        aliases=["gen_ai.response.time_to_first_chunk"],
        changelog=[
            ChangelogEntry(
                version="0.11.0",
                prs=[418],
                description="Deprecate in favor of gen_ai.response.time_to_first_chunk",
            ),
            ChangelogEntry(version="0.4.0", prs=[227]),
        ],
    ),
    "gen_ai.response.tokens_per_second": AttributeMetadata(
        brief="The total output tokens per seconds throughput",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=12345.67,
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.1.0", prs=[66]),
        ],
    ),
    "gen_ai.response.tool_calls": AttributeMetadata(
        brief="The tool calls in the model's response. It has to be a stringified version of an array of objects.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example='[{"name": "get_weather", "arguments": {"location": "Paris"}}]',
        deprecation=DeprecationInfo(
            replacement="gen_ai.output.messages", status=DeprecationStatus.NORMALIZE
        ),
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[221]),
            ChangelogEntry(version="0.1.0", prs=[63, 74]),
        ],
    ),
    "gen_ai.system": AttributeMetadata(
        brief="The provider of the model.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="openai",
        deprecation=DeprecationInfo(
            replacement="gen_ai.provider.name", status=DeprecationStatus.NORMALIZE
        ),
        aliases=["ai.model.provider", "gen_ai.provider.name"],
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[253]),
            ChangelogEntry(version="0.1.0", prs=[57, 127]),
        ],
    ),
    "gen_ai.system.message": AttributeMetadata(
        brief="The system instructions passed to the model.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="You are a helpful assistant",
        deprecation=DeprecationInfo(
            replacement="gen_ai.system_instructions", status=DeprecationStatus.BACKFILL
        ),
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[221]),
            ChangelogEntry(version="0.1.0", prs=[62]),
        ],
    ),
    "gen_ai.system_instructions": AttributeMetadata(
        brief="The system instructions passed to the model.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="You are a helpful assistant",
        aliases=["ai.preamble"],
        changelog=[
            ChangelogEntry(version="0.5.0", prs=[264]),
            ChangelogEntry(version="0.4.0", prs=[221]),
        ],
    ),
    "gen_ai.tool.call.arguments": AttributeMetadata(
        brief="The arguments of the tool call. It has to be a stringified version of the arguments to the tool.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example='{"location": "Paris"}',
        aliases=["gen_ai.tool.input"],
        changelog=[
            ChangelogEntry(version="0.5.0", prs=[265]),
            ChangelogEntry(version="0.4.0", prs=[221]),
        ],
    ),
    "gen_ai.tool.call.result": AttributeMetadata(
        brief="The result of the tool call. It has to be a stringified version of the result of the tool.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="rainy, 57°F",
        aliases=[
            "gen_ai.tool.output",
            "gen_ai.tool.message",
            "mcp.tool.result.content",
        ],
        changelog=[
            ChangelogEntry(version="0.5.0", prs=[265]),
            ChangelogEntry(version="0.4.0", prs=[221]),
        ],
    ),
    "gen_ai.tool.definitions": AttributeMetadata(
        brief="The list of source system tool definitions available to the GenAI agent or model.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example='[{"type": "function", "name": "get_current_weather", "description": "Get the current weather in a given location", "parameters": {"type": "object", "properties": {"location": {"type": "string", "description": "The city and state, e.g. San Francisco, CA"}, "unit": {"type": "string", "enum": ["celsius", "fahrenheit"]}}, "required": ["location", "unit"]}}]',
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[221]),
        ],
    ),
    "gen_ai.tool.description": AttributeMetadata(
        brief="The description of the tool being used.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="Searches the web for current information about a topic",
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[62, 127]),
        ],
    ),
    "gen_ai.tool.input": AttributeMetadata(
        brief="The input of the tool being used. It has to be a stringified version of the input to the tool.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example='{"location": "Paris"}',
        deprecation=DeprecationInfo(
            replacement="gen_ai.tool.call.arguments", status=DeprecationStatus.NORMALIZE
        ),
        aliases=["gen_ai.tool.call.arguments"],
        changelog=[
            ChangelogEntry(version="0.5.0", prs=[265]),
            ChangelogEntry(version="0.1.0", prs=[63, 74]),
        ],
    ),
    "gen_ai.tool.message": AttributeMetadata(
        brief="The response from a tool or function call passed to the model.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="rainy, 57°F",
        deprecation=DeprecationInfo(
            replacement="gen_ai.tool.call.result", status=DeprecationStatus.NORMALIZE
        ),
        aliases=[
            "gen_ai.tool.call.result",
            "gen_ai.tool.output",
            "mcp.tool.result.content",
        ],
        changelog=[
            ChangelogEntry(version="0.5.0", prs=[265]),
            ChangelogEntry(version="0.1.0", prs=[62]),
        ],
    ),
    "gen_ai.tool.name": AttributeMetadata(
        brief="Name of the tool utilized by the agent.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="Flights",
        aliases=["ai.function_call", "mcp.tool.name"],
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[57, 127]),
        ],
    ),
    "gen_ai.tool.output": AttributeMetadata(
        brief="The output of the tool being used. It has to be a stringified version of the output of the tool.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="rainy, 57°F",
        deprecation=DeprecationInfo(
            replacement="gen_ai.tool.call.result", status=DeprecationStatus.NORMALIZE
        ),
        aliases=[
            "gen_ai.tool.call.result",
            "gen_ai.tool.message",
            "mcp.tool.result.content",
        ],
        changelog=[
            ChangelogEntry(version="0.5.0", prs=[265]),
            ChangelogEntry(version="0.1.0", prs=[63, 74]),
        ],
    ),
    "gen_ai.tool.type": AttributeMetadata(
        brief="The type of tool being used.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="function",
        deprecation=DeprecationInfo(
            reason="The gen_ai.tool.type attribute is deprecated and should no longer be set."
        ),
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[62, 127]),
        ],
    ),
    "gen_ai.usage.cache_creation.input_tokens": AttributeMetadata(
        brief="The number of tokens written to the cache when processing the AI input (prompt).",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example=100,
        aliases=["gen_ai.usage.input_tokens.cache_write"],
        changelog=[
            ChangelogEntry(
                version="0.11.0",
                prs=[418],
                description="Added gen_ai.usage.cache_creation.input_tokens attribute",
            ),
        ],
        additional_context=[
            "This attribute appears on both agent parent spans (aggregated totals) and LLM child spans (per-call values). When using sum() to count tokens, filter to gen_ai.operation.type:ai_client to avoid double-counting hierarchical spans."
        ],
    ),
    "gen_ai.usage.cache_read.input_tokens": AttributeMetadata(
        brief="The number of cached tokens used to process the AI input (prompt).",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example=50,
        aliases=["gen_ai.usage.input_tokens.cached"],
        changelog=[
            ChangelogEntry(
                version="0.11.0",
                prs=[418],
                description="Added gen_ai.usage.cache_read.input_tokens attribute",
            ),
        ],
        additional_context=[
            "This attribute appears on both agent parent spans (aggregated totals) and LLM child spans (per-call values). When using sum() to count tokens, filter to gen_ai.operation.type:ai_client to avoid double-counting hierarchical spans.",
            "This is a subset of gen_ai.usage.input_tokens, not an independent count. Do not sum this with gen_ai.usage.input_tokens — it is already included.",
        ],
    ),
    "gen_ai.usage.completion_tokens": AttributeMetadata(
        brief="The number of tokens used in the GenAI response (completion).",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example=10,
        deprecation=DeprecationInfo(
            replacement="gen_ai.usage.output_tokens", status=DeprecationStatus.BACKFILL
        ),
        aliases=["ai.completion_tokens.used", "gen_ai.usage.output_tokens"],
        changelog=[
            ChangelogEntry(
                version="0.9.0", prs=[397], description="Add additional_context"
            ),
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.1.0", prs=[61]),
            ChangelogEntry(version="0.0.0"),
        ],
        additional_context=[
            "This attribute appears on both agent parent spans (aggregated totals) and LLM child spans (per-call values). When using sum() to count tokens, filter to gen_ai.operation.type:ai_client to avoid double-counting hierarchical spans."
        ],
    ),
    "gen_ai.usage.input_tokens": AttributeMetadata(
        brief="The number of tokens used to process the AI input (prompt) including cached input tokens.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example=10,
        aliases=["ai.prompt_tokens.used", "gen_ai.usage.prompt_tokens"],
        changelog=[
            ChangelogEntry(
                version="0.11.0",
                prs=[418],
                description="Update additional_context to reference gen_ai.usage.cache_read.input_tokens",
            ),
            ChangelogEntry(
                version="0.9.0", prs=[397], description="Add additional_context"
            ),
            ChangelogEntry(version="0.5.0", prs=[261]),
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.1.0", prs=[112]),
            ChangelogEntry(version="0.0.0"),
        ],
        additional_context=[
            "This attribute appears on both agent parent spans (aggregated totals) and LLM child spans (per-call values). When using sum() to count tokens, filter to gen_ai.operation.type:ai_client to avoid double-counting hierarchical spans.",
            "This count includes cached input tokens. gen_ai.usage.cache_read.input_tokens is a subset of this value, not an independent count — do not sum them together.",
        ],
    ),
    "gen_ai.usage.input_tokens.cache_write": AttributeMetadata(
        brief="The number of tokens written to the cache when processing the AI input (prompt).",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=100,
        deprecation=DeprecationInfo(
            replacement="gen_ai.usage.cache_creation.input_tokens",
            status=DeprecationStatus.BACKFILL,
        ),
        aliases=["gen_ai.usage.cache_creation.input_tokens"],
        changelog=[
            ChangelogEntry(
                version="0.11.0",
                prs=[418],
                description="Deprecate in favor of gen_ai.usage.cache_creation.input_tokens",
            ),
            ChangelogEntry(
                version="0.9.0", prs=[397], description="Add additional_context"
            ),
            ChangelogEntry(version="0.4.0", prs=[217, 228]),
        ],
        additional_context=[
            "This attribute appears on both agent parent spans (aggregated totals) and LLM child spans (per-call values). When using sum() to count tokens, filter to gen_ai.operation.type:ai_client to avoid double-counting hierarchical spans."
        ],
    ),
    "gen_ai.usage.input_tokens.cached": AttributeMetadata(
        brief="The number of cached tokens used to process the AI input (prompt).",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=50,
        deprecation=DeprecationInfo(
            replacement="gen_ai.usage.cache_read.input_tokens",
            status=DeprecationStatus.BACKFILL,
        ),
        aliases=["gen_ai.usage.cache_read.input_tokens"],
        changelog=[
            ChangelogEntry(
                version="0.11.0",
                prs=[418],
                description="Deprecate in favor of gen_ai.usage.cache_read.input_tokens",
            ),
            ChangelogEntry(
                version="0.9.0", prs=[397], description="Add additional_context"
            ),
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.1.0", prs=[62, 112]),
        ],
        additional_context=[
            "This attribute appears on both agent parent spans (aggregated totals) and LLM child spans (per-call values). When using sum() to count tokens, filter to gen_ai.operation.type:ai_client to avoid double-counting hierarchical spans.",
            "This is a subset of gen_ai.usage.input_tokens, not an independent count. Do not sum this with gen_ai.usage.input_tokens — it is already included.",
        ],
    ),
    "gen_ai.usage.output_tokens": AttributeMetadata(
        brief="The number of tokens used for creating the AI output (including reasoning tokens).",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example=10,
        aliases=["ai.completion_tokens.used", "gen_ai.usage.completion_tokens"],
        changelog=[
            ChangelogEntry(
                version="0.11.0",
                prs=[418],
                description="Update additional_context to reference gen_ai.usage.reasoning.output_tokens",
            ),
            ChangelogEntry(
                version="0.9.0", prs=[397], description="Add additional_context"
            ),
            ChangelogEntry(version="0.5.0", prs=[261]),
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.1.0", prs=[112]),
            ChangelogEntry(version="0.0.0"),
        ],
        additional_context=[
            "This attribute appears on both agent parent spans (aggregated totals) and LLM child spans (per-call values). When using sum() to count tokens, filter to gen_ai.operation.type:ai_client to avoid double-counting hierarchical spans.",
            "This count includes reasoning tokens. gen_ai.usage.reasoning.output_tokens is a subset of this value, not an independent count — do not sum them together.",
        ],
    ),
    "gen_ai.usage.output_tokens.reasoning": AttributeMetadata(
        brief="The number of tokens used for reasoning to create the AI output.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=75,
        deprecation=DeprecationInfo(
            replacement="gen_ai.usage.reasoning.output_tokens",
            status=DeprecationStatus.BACKFILL,
        ),
        aliases=["gen_ai.usage.reasoning.output_tokens"],
        changelog=[
            ChangelogEntry(
                version="0.11.0",
                prs=[418],
                description="Deprecate in favor of gen_ai.usage.reasoning.output_tokens",
            ),
            ChangelogEntry(
                version="0.9.0", prs=[397], description="Add additional_context"
            ),
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.1.0", prs=[62, 112]),
        ],
        additional_context=[
            "This attribute appears on both agent parent spans (aggregated totals) and LLM child spans (per-call values). When using sum() to count tokens, filter to gen_ai.operation.type:ai_client to avoid double-counting hierarchical spans.",
            "This is a subset of gen_ai.usage.output_tokens, not an independent count. Do not sum this with gen_ai.usage.output_tokens — it is already included.",
        ],
    ),
    "gen_ai.usage.prompt_tokens": AttributeMetadata(
        brief="The number of tokens used in the GenAI input (prompt).",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example=20,
        deprecation=DeprecationInfo(
            replacement="gen_ai.usage.input_tokens", status=DeprecationStatus.BACKFILL
        ),
        aliases=["ai.prompt_tokens.used", "gen_ai.usage.input_tokens"],
        changelog=[
            ChangelogEntry(
                version="0.9.0", prs=[397], description="Add additional_context"
            ),
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.1.0", prs=[61]),
            ChangelogEntry(version="0.0.0"),
        ],
        additional_context=[
            "This attribute appears on both agent parent spans (aggregated totals) and LLM child spans (per-call values). When using sum() to count tokens, filter to gen_ai.operation.type:ai_client to avoid double-counting hierarchical spans."
        ],
    ),
    "gen_ai.usage.reasoning.output_tokens": AttributeMetadata(
        brief="The number of tokens used for reasoning to create the AI output.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example=75,
        aliases=["gen_ai.usage.output_tokens.reasoning"],
        changelog=[
            ChangelogEntry(
                version="0.11.0",
                prs=[418],
                description="Added gen_ai.usage.reasoning.output_tokens attribute",
            ),
        ],
        additional_context=[
            "This attribute appears on both agent parent spans (aggregated totals) and LLM child spans (per-call values). When using sum() to count tokens, filter to gen_ai.operation.type:ai_client to avoid double-counting hierarchical spans.",
            "This is a subset of gen_ai.usage.output_tokens, not an independent count. Do not sum this with gen_ai.usage.output_tokens — it is already included.",
        ],
    ),
    "gen_ai.usage.total_tokens": AttributeMetadata(
        brief="The total number of tokens used to process the prompt. (input tokens plus output todkens)",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=20,
        aliases=["ai.total_tokens.used"],
        changelog=[
            ChangelogEntry(
                version="0.9.0", prs=[397], description="Add additional_context"
            ),
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.1.0", prs=[57]),
        ],
        additional_context=[
            "This attribute appears on both agent parent spans (aggregated totals) and LLM child spans (per-call values). When using sum() to count tokens, filter to gen_ai.operation.type:ai_client to avoid double-counting hierarchical spans.",
            "This is the sum of gen_ai.usage.input_tokens and gen_ai.usage.output_tokens. Do not sum this with either of them — they are already included.",
        ],
    ),
    "graphql.document": AttributeMetadata(
        brief="The GraphQL document being executed.",
        type=AttributeType.STRING,
        pii=PiiInfo(
            isPii=IsPii.TRUE,
            reason="The document may contain sensitive information in arguments or variables. Instrumentation should redact sensitive information when possible.",
        ),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="query findBookById { bookById(id: ?) { name } }",
        changelog=[
            ChangelogEntry(
                version="0.7.0",
                description="Adds the `graphql.document` attribute to track the GraphQL document being executed.",
            ),
        ],
    ),
    "graphql.operation.name": AttributeMetadata(
        brief="The name of the operation being executed.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="findBookById",
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "graphql.operation.type": AttributeMetadata(
        brief="The type of the operation being executed.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="query",
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "hardwareConcurrency": AttributeMetadata(
        brief="The number of logical CPU cores available.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="14",
        deprecation=DeprecationInfo(
            replacement="device.processor_count",
            reason="Old namespace-less attribute, to be replaced with device.processor_count for span-first future",
            status=DeprecationStatus.BACKFILL,
        ),
        aliases=["device.processor_count"],
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[281, 300],
                description="Added and deprecated attribute to document JS SDK's current behaviour",
            ),
        ],
    ),
    "http.client_ip": AttributeMetadata(
        brief="Client address - domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="example.com",
        deprecation=DeprecationInfo(replacement="client.address"),
        aliases=["client.address"],
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[61, 106, 127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "http.decoded_response_content_length": AttributeMetadata(
        brief="The decoded body size of the response (in bytes).",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=456,
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "http.flavor": AttributeMetadata(
        brief="The actual version of the protocol used for network communication.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="1.1",
        deprecation=DeprecationInfo(replacement="network.protocol.version"),
        aliases=["network.protocol.version", "net.protocol.version"],
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[61, 108, 127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "http.fragment": AttributeMetadata(
        brief="The fragments present in the URI. Note that this contains the leading # character, while the `url.fragment` attribute does not.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="#details",
        changelog=[
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "http.host": AttributeMetadata(
        brief="The domain name.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="example.com",
        deprecation=DeprecationInfo(
            replacement="server.address",
            reason="Deprecated, use one of `server.address` or `client.address`, depending on the usage",
        ),
        aliases=[
            "server.address",
            "client.address",
            "http.server_name",
            "net.host.name",
        ],
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[61, 108, 127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "http.method": AttributeMetadata(
        brief="The HTTP method used.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="GET",
        deprecation=DeprecationInfo(
            replacement="http.request.method", status=DeprecationStatus.BACKFILL
        ),
        aliases=["http.request.method", "http.request_method", "method"],
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[61, 127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "http.query": AttributeMetadata(
        brief="The query string present in the URL. Note that this contains the leading ? character, while the `url.query` attribute does not.",
        type=AttributeType.STRING,
        pii=PiiInfo(
            isPii=IsPii.TRUE,
            reason="Query string values can contain sensitive information. Clients should attempt to scrub parameters that might contain sensitive information.",
        ),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="?foo=bar&bar=baz",
        changelog=[
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "http.request.body.data": AttributeMetadata(
        brief="HTTP request body data. Can be given as string or structural data of any format.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example='[{"role": "user", "message": "hello"}]',
        changelog=[
            ChangelogEntry(
                version="0.6.0",
                prs=[336],
                description="Added http.request.body.data attribute",
            ),
        ],
    ),
    "http.request.connect_start": AttributeMetadata(
        brief="The UNIX timestamp representing the time immediately before the user agent starts establishing the connection to the server to retrieve the resource.",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=1732829555.111,
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.1.0", prs=[134]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "http.request.connection_end": AttributeMetadata(
        brief="The UNIX timestamp representing the time immediately after the browser finishes establishing the connection to the server to retrieve the resource. The timestamp value includes the time interval to establish the transport connection, as well as other time intervals such as TLS handshake and SOCKS authentication.",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=1732829555.15,
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.1.0", prs=[134]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "http.request.domain_lookup_end": AttributeMetadata(
        brief="The UNIX timestamp representing the time immediately after the browser finishes the domain-name lookup for the resource.",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=1732829555.201,
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.1.0", prs=[134]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "http.request.domain_lookup_start": AttributeMetadata(
        brief="The UNIX timestamp representing the time immediately before the browser starts the domain name lookup for the resource.",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=1732829555.322,
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.1.0", prs=[134]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "http.request.fetch_start": AttributeMetadata(
        brief="The UNIX timestamp representing the time immediately before the browser starts to fetch the resource.",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=1732829555.389,
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.1.0", prs=[134]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "http.request.header.<key>": AttributeMetadata(
        brief="HTTP request headers, <key> being the normalized HTTP Header name (lowercase), the value being the header values.",
        type=AttributeType.STRING_ARRAY,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        has_dynamic_suffix=True,
        example="http.request.header.custom-header=['foo', 'bar']",
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[201, 204]),
            ChangelogEntry(version="0.1.0", prs=[103]),
        ],
    ),
    "http.request.method": AttributeMetadata(
        brief="The HTTP method used.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="GET",
        aliases=["method", "http.method", "http.request_method"],
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "http.request.redirect_end": AttributeMetadata(
        brief="The UNIX timestamp representing the timestamp immediately after receiving the last byte of the response of the last redirect",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=1732829558.502,
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.1.0", prs=[130, 134]),
        ],
    ),
    "http.request.redirect_start": AttributeMetadata(
        brief="The UNIX timestamp representing the start time of the fetch which that initiates the redirect.",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=1732829555.495,
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.1.0", prs=[134]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "http.request.request_start": AttributeMetadata(
        brief="The UNIX timestamp representing the time immediately before the browser starts requesting the resource from the server, cache, or local resource. If the transport connection fails and the browser retires the request, the value returned will be the start of the retry request.",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=1732829555.51,
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.1.0", prs=[134]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "http.request.resend_count": AttributeMetadata(
        brief="The ordinal number of request resending attempt (for any reason, including redirects).",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=2,
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "http.request.response_end": AttributeMetadata(
        brief="The UNIX timestamp representing the time immediately after the browser receives the last byte of the resource or immediately before the transport connection is closed, whichever comes first.",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=1732829555.89,
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.1.0", prs=[134]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "http.request.response_start": AttributeMetadata(
        brief="The UNIX timestamp representing the time immediately before the browser starts requesting the resource from the server, cache, or local resource. If the transport connection fails and the browser retires the request, the value returned will be the start of the retry request.",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=1732829555.7,
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.1.0", prs=[134]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "http.request.secure_connection_start": AttributeMetadata(
        brief="The UNIX timestamp representing the time immediately before the browser starts the handshake process to secure the current connection. If a secure connection is not used, the property returns zero.",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=1732829555.73,
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.1.0", prs=[134]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "http.request.time_to_first_byte": AttributeMetadata(
        brief="The time in seconds from the browser's timeorigin to when the first byte of the request's response was received. See https://web.dev/articles/ttfb#measure-resource-requests",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=1.032,
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.1.0", prs=[131]),
        ],
    ),
    "http.request.worker_start": AttributeMetadata(
        brief="The UNIX timestamp representing the timestamp immediately before dispatching the FetchEvent if a Service Worker thread is already running, or immediately before starting the Service Worker thread if it is not already running.",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=1732829553.68,
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.1.0", prs=[130, 134]),
        ],
    ),
    "http.request_method": AttributeMetadata(
        brief="The HTTP method used.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="GET",
        deprecation=DeprecationInfo(
            replacement="http.request.method", status=DeprecationStatus.BACKFILL
        ),
        aliases=["method", "http.method", "http.request.method"],
        changelog=[
            ChangelogEntry(
                version="0.6.0",
                prs=[343],
                description="Added http.request_method attribute",
            ),
        ],
    ),
    "http.response.body.size": AttributeMetadata(
        brief="The encoded body size of the response (in bytes).",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example=123,
        aliases=["http.response_content_length", "http.response.header.content-length"],
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.1.0", prs=[106]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "http.response.header.<key>": AttributeMetadata(
        brief="HTTP response headers, <key> being the normalized HTTP Header name (lowercase), the value being the header values.",
        type=AttributeType.STRING_ARRAY,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        has_dynamic_suffix=True,
        example="http.response.header.custom-header=['foo', 'bar']",
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[201, 204]),
            ChangelogEntry(version="0.1.0", prs=[103]),
        ],
    ),
    "http.response.header.content-length": AttributeMetadata(
        brief="The size of the message body sent to the recipient (in bytes)",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="http.response.header.custom-header=['foo', 'bar']",
        aliases=["http.response_content_length", "http.response.body.size"],
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "http.response.size": AttributeMetadata(
        brief="The transfer size of the response (in bytes).",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example=456,
        aliases=["http.response_transfer_size"],
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "http.response.status_code": AttributeMetadata(
        brief="The status code of the HTTP response.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example=404,
        aliases=["http.status_code"],
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "http.response_content_length": AttributeMetadata(
        brief="The encoded body size of the response (in bytes).",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example=123,
        deprecation=DeprecationInfo(
            replacement="http.response.body.size", status=DeprecationStatus.BACKFILL
        ),
        aliases=["http.response.body.size", "http.response.header.content-length"],
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.1.0", prs=[61, 106]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "http.response_transfer_size": AttributeMetadata(
        brief="The transfer size of the response (in bytes).",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=456,
        deprecation=DeprecationInfo(
            replacement="http.response.size", status=DeprecationStatus.BACKFILL
        ),
        aliases=["http.response.size"],
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.1.0", prs=[61]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "http.route": AttributeMetadata(
        brief="The matched route, that is, the path template in the format used by the respective server framework.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="/users/:id",
        aliases=["url.template"],
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "http.scheme": AttributeMetadata(
        brief="The URI scheme component identifying the used protocol.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="https",
        deprecation=DeprecationInfo(replacement="url.scheme"),
        aliases=["url.scheme"],
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[61, 127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "http.server.request.time_in_queue": AttributeMetadata(
        brief="The time in milliseconds the request spent in the server queue before processing began. Measured from the X-Request-Start header set by reverse proxies (e.g., Nginx, HAProxy, Heroku) to when the application started handling the request.",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=50,
        changelog=[
            ChangelogEntry(version="0.5.0", prs=[267]),
        ],
    ),
    "http.server_name": AttributeMetadata(
        brief="The server domain name",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="example.com",
        deprecation=DeprecationInfo(replacement="server.address"),
        aliases=["server.address", "net.host.name", "http.host"],
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[61, 108, 127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "http.status_code": AttributeMetadata(
        brief="The status code of the HTTP response.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example=404,
        deprecation=DeprecationInfo(replacement="http.response.status_code"),
        aliases=["http.response.status_code"],
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.1.0", prs=[61]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "http.target": AttributeMetadata(
        brief="The pathname and query string of the URL.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="/test?foo=bar#buzz",
        deprecation=DeprecationInfo(
            replacement="url.path",
            reason="This attribute is being deprecated in favor of url.path and url.query",
        ),
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[61]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "http.url": AttributeMetadata(
        brief="The URL of the resource that was fetched.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="https://example.com/test?foo=bar#buzz",
        deprecation=DeprecationInfo(replacement="url.full"),
        aliases=["url.full", "url"],
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[61, 108]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "http.user_agent": AttributeMetadata(
        brief="Value of the HTTP User-Agent header sent by the client.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Mobile/15E148 Safari/604.1",
        deprecation=DeprecationInfo(replacement="user_agent.original"),
        aliases=["user_agent.original"],
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[61, 127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "id": AttributeMetadata(
        brief="A unique identifier for the span.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="f47ac10b58cc4372a5670e02b2c3d479",
        changelog=[
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "inp": AttributeMetadata(
        brief="The value of the recorded Interaction to Next Paint (INP) web vital",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=200,
        deprecation=DeprecationInfo(
            replacement="browser.web_vital.inp.value",
            reason="The INP web vital is now recorded as a browser.web_vital.inp.value attribute.",
            status=DeprecationStatus.BACKFILL,
        ),
        aliases=["browser.web_vital.inp.value"],
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[229],
                description="Added and deprecated attribute to document JS SDK's current behaviour",
            ),
        ],
    ),
    "jsonrpc.protocol.version": AttributeMetadata(
        brief="The version of the JSON-RPC protocol used.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="2.0",
        changelog=[
            ChangelogEntry(
                version="next", description="Added jsonrpc.protocol.version attribute"
            ),
        ],
    ),
    "jsonrpc.request.id": AttributeMetadata(
        brief="The JSON-RPC request identifier. Unique within the session.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="1",
        aliases=["mcp.request.id"],
        changelog=[
            ChangelogEntry(
                version="next", description="Added jsonrpc.request.id attribute"
            ),
        ],
    ),
    "jvm.gc.action": AttributeMetadata(
        brief="Name of the garbage collector action.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="end of minor GC",
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "jvm.gc.name": AttributeMetadata(
        brief="Name of the garbage collector.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="G1 Young Generation",
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "jvm.memory.pool.name": AttributeMetadata(
        brief="Name of the memory pool.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="G1 Old Gen",
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "jvm.memory.type": AttributeMetadata(
        brief="Name of the memory pool.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="G1 Old Gen",
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "jvm.thread.daemon": AttributeMetadata(
        brief="Whether the thread is daemon or not.",
        type=AttributeType.BOOLEAN,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example=True,
        changelog=[
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "jvm.thread.state": AttributeMetadata(
        brief="State of the thread.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="blocked",
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "lcp.element": AttributeMetadata(
        brief="The dom element responsible for the largest contentful paint.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="img",
        deprecation=DeprecationInfo(
            replacement="browser.web_vital.lcp.element",
            reason="The LCP element is now recorded as a browser.web_vital.lcp.element attribute.",
            status=DeprecationStatus.BACKFILL,
        ),
        aliases=["browser.web_vital.lcp.element"],
        changelog=[
            ChangelogEntry(version="0.5.0", prs=[233]),
            ChangelogEntry(version="0.1.0", prs=[127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "lcp.id": AttributeMetadata(
        brief="The id of the dom element responsible for the largest contentful paint.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="#hero",
        deprecation=DeprecationInfo(
            replacement="browser.web_vital.lcp.id",
            reason="The LCP id is now recorded as a browser.web_vital.lcp.id attribute.",
            status=DeprecationStatus.BACKFILL,
        ),
        aliases=["browser.web_vital.lcp.id"],
        changelog=[
            ChangelogEntry(version="0.5.0", prs=[233]),
            ChangelogEntry(version="0.1.0", prs=[127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "lcp.loadTime": AttributeMetadata(
        brief="The time it took for the LCP element to be loaded",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=1402,
        deprecation=DeprecationInfo(
            replacement="browser.web_vital.lcp.load_time",
            reason="The LCP load time is now recorded as a browser.web_vital.lcp.load_time attribute.",
            status=DeprecationStatus.BACKFILL,
        ),
        aliases=["browser.web_vital.lcp.load_time"],
        changelog=[
            ChangelogEntry(version="0.5.0", prs=[233]),
        ],
    ),
    "lcp.renderTime": AttributeMetadata(
        brief="The time it took for the LCP element to be rendered",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=1685,
        deprecation=DeprecationInfo(
            replacement="browser.web_vital.lcp.render_time",
            reason="The LCP render time is now recorded as a browser.web_vital.lcp.render_time attribute.",
            status=DeprecationStatus.BACKFILL,
        ),
        aliases=["browser.web_vital.lcp.render_time"],
        changelog=[
            ChangelogEntry(version="0.5.0", prs=[233]),
        ],
    ),
    "lcp.size": AttributeMetadata(
        brief="The size of the largest contentful paint element.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=1234,
        deprecation=DeprecationInfo(
            replacement="browser.web_vital.lcp.size",
            reason="The LCP size is now recorded as a browser.web_vital.lcp.size attribute.",
            status=DeprecationStatus.BACKFILL,
        ),
        aliases=["browser.web_vital.lcp.size"],
        changelog=[
            ChangelogEntry(version="0.5.0", prs=[233]),
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "lcp.url": AttributeMetadata(
        brief="The url of the dom element responsible for the largest contentful paint.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="https://example.com",
        deprecation=DeprecationInfo(
            replacement="browser.web_vital.lcp.url",
            reason="The LCP url is now recorded as a browser.web_vital.lcp.url attribute.",
            status=DeprecationStatus.BACKFILL,
        ),
        aliases=["browser.web_vital.lcp.url"],
        changelog=[
            ChangelogEntry(version="0.5.0", prs=[233]),
            ChangelogEntry(version="0.1.0", prs=[127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "lcp": AttributeMetadata(
        brief="The value of the recorded Largest Contentful Paint (LCP) web vital",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=2500,
        deprecation=DeprecationInfo(
            replacement="browser.web_vital.lcp.value",
            reason="The LCP web vital is now recorded as a browser.web_vital.lcp.value attribute.",
            status=DeprecationStatus.BACKFILL,
        ),
        aliases=["browser.web_vital.lcp.value"],
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[229],
                description="Added and deprecated attribute to document JS SDK's current behaviour",
            ),
        ],
    ),
    "logger.name": AttributeMetadata(
        brief="The name of the logger that generated this event.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="myLogger",
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "mcp.cancelled.reason": AttributeMetadata(
        brief="Reason for the cancellation of an MCP operation.",
        type=AttributeType.STRING,
        pii=PiiInfo(
            isPii=IsPii.MAYBE,
            reason="Cancellation reasons may contain user-specific or sensitive information",
        ),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="User cancelled the request",
        changelog=[
            ChangelogEntry(version="0.3.0", prs=[171]),
        ],
    ),
    "mcp.cancelled.request_id": AttributeMetadata(
        brief="Request ID of the cancelled MCP operation.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="123",
        changelog=[
            ChangelogEntry(version="0.3.0", prs=[171]),
        ],
    ),
    "mcp.client.name": AttributeMetadata(
        brief="Name of the MCP client application.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="claude-desktop",
        changelog=[
            ChangelogEntry(version="0.3.0", prs=[171]),
        ],
    ),
    "mcp.client.title": AttributeMetadata(
        brief="Display title of the MCP client application.",
        type=AttributeType.STRING,
        pii=PiiInfo(
            isPii=IsPii.MAYBE,
            reason="Client titles may reveal user-specific application configurations or custom setups",
        ),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="Claude Desktop",
        changelog=[
            ChangelogEntry(version="0.3.0", prs=[171]),
        ],
    ),
    "mcp.client.version": AttributeMetadata(
        brief="Version of the MCP client application.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="1.0.0",
        changelog=[
            ChangelogEntry(version="0.3.0", prs=[171]),
        ],
    ),
    "mcp.lifecycle.phase": AttributeMetadata(
        brief="Lifecycle phase indicator for MCP operations.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="initialization_complete",
        changelog=[
            ChangelogEntry(version="0.3.0", prs=[171]),
        ],
    ),
    "mcp.logging.data_type": AttributeMetadata(
        brief="Data type of the logged message content.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="string",
        changelog=[
            ChangelogEntry(version="0.3.0", prs=[171]),
        ],
    ),
    "mcp.logging.level": AttributeMetadata(
        brief="Log level for MCP logging operations.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="info",
        changelog=[
            ChangelogEntry(version="0.3.0", prs=[171]),
        ],
    ),
    "mcp.logging.logger": AttributeMetadata(
        brief="Logger name for MCP logging operations.",
        type=AttributeType.STRING,
        pii=PiiInfo(
            isPii=IsPii.MAYBE,
            reason="Logger names may be user-defined and could contain sensitive information",
        ),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="mcp_server",
        changelog=[
            ChangelogEntry(version="0.3.0", prs=[171]),
        ],
    ),
    "mcp.logging.message": AttributeMetadata(
        brief="Log message content from MCP logging operations.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE, reason="Log messages can contain user data"),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="Tool execution completed successfully",
        changelog=[
            ChangelogEntry(version="0.3.0", prs=[171]),
        ],
    ),
    "mcp.method.name": AttributeMetadata(
        brief="The name of the MCP request or notification method being called.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="tools/call",
        changelog=[
            ChangelogEntry(
                version="next",
                description="Set is_in_otel=true, attribute exists in OTel MCP registry",
            ),
            ChangelogEntry(version="0.3.0", prs=[171]),
        ],
    ),
    "mcp.progress.current": AttributeMetadata(
        brief="Current progress value of an MCP operation.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=50,
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.3.0", prs=[171]),
        ],
    ),
    "mcp.progress.message": AttributeMetadata(
        brief="Progress message describing the current state of an MCP operation.",
        type=AttributeType.STRING,
        pii=PiiInfo(
            isPii=IsPii.MAYBE,
            reason="Progress messages may contain user-specific or sensitive information",
        ),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="Processing 50 of 100 items",
        changelog=[
            ChangelogEntry(version="0.3.0", prs=[171]),
        ],
    ),
    "mcp.progress.percentage": AttributeMetadata(
        brief="Calculated progress percentage of an MCP operation. Computed from current/total * 100.",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=50,
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.3.0", prs=[171]),
        ],
    ),
    "mcp.progress.token": AttributeMetadata(
        brief="Token for tracking progress of an MCP operation.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="progress-token-123",
        changelog=[
            ChangelogEntry(version="0.3.0", prs=[171]),
        ],
    ),
    "mcp.progress.total": AttributeMetadata(
        brief="Total progress target value of an MCP operation.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=100,
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.3.0", prs=[171]),
        ],
    ),
    "mcp.prompt.name": AttributeMetadata(
        brief="Name of the MCP prompt template being used.",
        type=AttributeType.STRING,
        pii=PiiInfo(
            isPii=IsPii.MAYBE,
            reason="Prompt names may reveal user behavior patterns or sensitive operations",
        ),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="summarize",
        deprecation=DeprecationInfo(
            replacement="gen_ai.prompt.name",
            reason="OTel uses gen_ai.prompt.name for MCP prompt names",
            status=DeprecationStatus.BACKFILL,
        ),
        aliases=["gen_ai.prompt.name"],
        changelog=[
            ChangelogEntry(
                version="next", description="Deprecated in favor of gen_ai.prompt.name"
            ),
            ChangelogEntry(version="0.3.0", prs=[171]),
        ],
    ),
    "mcp.prompt.result.description": AttributeMetadata(
        brief="Description of the prompt result.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="A summary of the requested information",
        changelog=[
            ChangelogEntry(version="0.3.0", prs=[171]),
        ],
    ),
    "mcp.prompt.result.message_content": AttributeMetadata(
        brief="Content of the message in the prompt result. Used for single message results only.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="Please provide a summary of the document",
        changelog=[
            ChangelogEntry(version="0.3.0", prs=[171]),
        ],
    ),
    "mcp.prompt.result.message_count": AttributeMetadata(
        brief="Number of messages in the prompt result.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=3,
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.3.0", prs=[171]),
        ],
    ),
    "mcp.prompt.result.message_role": AttributeMetadata(
        brief="Role of the message in the prompt result. Used for single message results only.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="user",
        changelog=[
            ChangelogEntry(version="0.3.0", prs=[171]),
        ],
    ),
    "mcp.protocol.ready": AttributeMetadata(
        brief="Protocol readiness indicator for MCP session. Non-zero value indicates the protocol is ready.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=1,
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.3.0", prs=[171]),
        ],
    ),
    "mcp.protocol.version": AttributeMetadata(
        brief="MCP protocol version used in the session.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="2024-11-05",
        changelog=[
            ChangelogEntry(
                version="next",
                description="Set is_in_otel=true, attribute exists in OTel MCP registry",
            ),
            ChangelogEntry(version="0.3.0", prs=[171]),
        ],
    ),
    "mcp.request.argument.<key>": AttributeMetadata(
        brief="MCP request argument with dynamic key suffix. The <key> is replaced with the actual argument name. The value is a JSON-stringified representation of the argument value.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE, reason="Arguments contain user input"),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        has_dynamic_suffix=True,
        example="mcp.request.argument.query='weather in Paris'",
        changelog=[
            ChangelogEntry(version="0.3.0", prs=[176]),
        ],
    ),
    "mcp.request.argument.name": AttributeMetadata(
        brief="Name argument from prompts/get MCP request.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE, reason="Prompt names can contain user input"),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="summarize",
        changelog=[
            ChangelogEntry(version="0.3.0", prs=[171]),
        ],
    ),
    "mcp.request.argument.uri": AttributeMetadata(
        brief="URI argument from resources/read MCP request.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE, reason="URIs can contain user file paths"),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="file:///path/to/resource",
        changelog=[
            ChangelogEntry(version="0.3.0", prs=[171]),
        ],
    ),
    "mcp.request.id": AttributeMetadata(
        brief="JSON-RPC request identifier for the MCP request. Unique within the MCP session.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="1",
        deprecation=DeprecationInfo(
            replacement="jsonrpc.request.id",
            reason="OTel models MCP as JSON-RPC, uses jsonrpc.request.id",
            status=DeprecationStatus.BACKFILL,
        ),
        aliases=["jsonrpc.request.id"],
        changelog=[
            ChangelogEntry(
                version="next", description="Deprecated in favor of jsonrpc.request.id"
            ),
            ChangelogEntry(version="0.3.0", prs=[171]),
        ],
    ),
    "mcp.resource.protocol": AttributeMetadata(
        brief="Protocol of the resource URI being accessed, extracted from the URI.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="file",
        deprecation=DeprecationInfo(
            replacement="network.protocol.name",
            reason="OTel uses the generic network.protocol.name attribute",
            status=DeprecationStatus.BACKFILL,
        ),
        aliases=["network.protocol.name", "net.protocol.name"],
        changelog=[
            ChangelogEntry(
                version="next",
                description="Deprecated in favor of network.protocol.name",
            ),
            ChangelogEntry(version="0.3.0", prs=[171]),
        ],
    ),
    "mcp.resource.uri": AttributeMetadata(
        brief="The resource URI being accessed in an MCP operation.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE, reason="URIs can contain sensitive file paths"),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="file:///path/to/file.txt",
        changelog=[
            ChangelogEntry(
                version="next",
                description="Set is_in_otel=true, attribute exists in OTel MCP registry",
            ),
            ChangelogEntry(version="0.3.0", prs=[171]),
        ],
    ),
    "mcp.server.name": AttributeMetadata(
        brief="Name of the MCP server application.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="sentry-mcp-server",
        changelog=[
            ChangelogEntry(version="0.3.0", prs=[171]),
        ],
    ),
    "mcp.server.title": AttributeMetadata(
        brief="Display title of the MCP server application.",
        type=AttributeType.STRING,
        pii=PiiInfo(
            isPii=IsPii.MAYBE,
            reason="Server titles may reveal user-specific application configurations or custom setups",
        ),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="Sentry MCP Server",
        changelog=[
            ChangelogEntry(version="0.3.0", prs=[171]),
        ],
    ),
    "mcp.server.version": AttributeMetadata(
        brief="Version of the MCP server application.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="0.1.0",
        changelog=[
            ChangelogEntry(version="0.3.0", prs=[171]),
        ],
    ),
    "mcp.session.id": AttributeMetadata(
        brief="Identifier for the MCP session.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="550e8400-e29b-41d4-a716-446655440000",
        changelog=[
            ChangelogEntry(
                version="next",
                description="Set is_in_otel=true, attribute exists in OTel MCP registry",
            ),
            ChangelogEntry(version="0.3.0", prs=[171]),
        ],
    ),
    "mcp.tool.name": AttributeMetadata(
        brief="Name of the MCP tool being called.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="calculator",
        deprecation=DeprecationInfo(
            replacement="gen_ai.tool.name",
            reason="OTel uses gen_ai.tool.name for MCP tool names",
            status=DeprecationStatus.BACKFILL,
        ),
        aliases=["gen_ai.tool.name", "ai.function_call"],
        changelog=[
            ChangelogEntry(
                version="next", description="Deprecated in favor of gen_ai.tool.name"
            ),
            ChangelogEntry(version="0.3.0", prs=[171]),
        ],
    ),
    "mcp.tool.result.content": AttributeMetadata(
        brief="The content of the tool result.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE, reason="Tool results can contain user data"),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example='{"output": "rainy", "toolCallId": "1"}',
        deprecation=DeprecationInfo(
            replacement="gen_ai.tool.call.result",
            reason="OTel uses gen_ai.tool.call.result for MCP tool results",
            status=DeprecationStatus.BACKFILL,
        ),
        aliases=[
            "gen_ai.tool.call.result",
            "gen_ai.tool.message",
            "gen_ai.tool.output",
        ],
        changelog=[
            ChangelogEntry(
                version="next",
                description="Deprecated in favor of gen_ai.tool.call.result",
            ),
            ChangelogEntry(version="0.3.0", prs=[171]),
            ChangelogEntry(version="0.2.0", prs=[164]),
        ],
    ),
    "mcp.tool.result.content_count": AttributeMetadata(
        brief="Number of content items in the tool result.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=1,
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.3.0", prs=[171]),
        ],
    ),
    "mcp.tool.result.is_error": AttributeMetadata(
        brief="Whether a tool execution resulted in an error.",
        type=AttributeType.BOOLEAN,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=False,
        deprecation=DeprecationInfo(
            replacement="error.type",
            reason="OTel uses error.type set to 'tool_error' when isError is true. Cannot be automatically backfilled due to type mismatch (boolean vs string).",
        ),
        changelog=[
            ChangelogEntry(
                version="next", description="Deprecated in favor of error.type"
            ),
            ChangelogEntry(version="0.3.0", prs=[171]),
        ],
    ),
    "mcp.transport": AttributeMetadata(
        brief="Transport method used for MCP communication.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="stdio",
        deprecation=DeprecationInfo(
            replacement="network.transport",
            reason="OTel uses the generic network.transport attribute",
            status=DeprecationStatus.BACKFILL,
        ),
        aliases=["network.transport", "net.transport"],
        changelog=[
            ChangelogEntry(
                version="next", description="Deprecated in favor of network.transport"
            ),
            ChangelogEntry(version="0.3.0", prs=[171]),
        ],
    ),
    "mdc.<key>": AttributeMetadata(
        brief="Attributes from the Mapped Diagnostic Context (MDC) present at the moment the log record was created. The MDC is supported by all the most popular logging solutions in the Java ecosystem, and it's usually implemented as a thread-local map that stores context for e.g. a specific request.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        has_dynamic_suffix=True,
        example="mdc.some_key='some_value'",
        changelog=[
            ChangelogEntry(version="0.3.0", prs=[176]),
        ],
    ),
    "messaging.batch.message_count": AttributeMetadata(
        brief="The number of messages sent, received, or processed in the scope of the batching operation.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example=10,
        changelog=[
            ChangelogEntry(
                version="0.6.0",
                prs=[341],
                description="Added messaging.batch.message_count attribute",
            ),
        ],
    ),
    "messaging.destination.connection": AttributeMetadata(
        brief="The message destination connection.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="BestTopic",
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "messaging.destination.name": AttributeMetadata(
        brief="The message destination name.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="BestTopic",
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "messaging.message.body.size": AttributeMetadata(
        brief="The size of the message body in bytes.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example=839,
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "messaging.message.envelope.size": AttributeMetadata(
        brief="The size of the message body and metadata in bytes.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example=1045,
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "messaging.message.id": AttributeMetadata(
        brief="A value used by the messaging system as an identifier for the message, represented as a string.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="f47ac10b58cc4372a5670e02b2c3d479",
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "messaging.message.receive.latency": AttributeMetadata(
        brief="The latency between when the message was published and received.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=1732847252,
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "messaging.message.retry.count": AttributeMetadata(
        brief="The amount of attempts to send the message.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=2,
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "messaging.operation.name": AttributeMetadata(
        brief="The name of the messaging operation being performed",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="send",
        changelog=[
            ChangelogEntry(
                version="0.11.0",
                prs=[392],
                description="Added messaging.operation.name attribute",
            ),
        ],
    ),
    "messaging.operation.type": AttributeMetadata(
        brief="A string identifying the type of the messaging operation",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="create",
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[51, 127]),
        ],
    ),
    "messaging.system": AttributeMetadata(
        brief="The messaging system as identified by the client instrumentation.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="activemq",
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "method": AttributeMetadata(
        brief="The HTTP method used.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="GET",
        deprecation=DeprecationInfo(replacement="http.request.method"),
        aliases=["http.request.method", "http.request_method", "http.method"],
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[61, 127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "middleware.name": AttributeMetadata(
        brief="The name of the middleware.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="AuthenticationMiddleware",
        changelog=[
            ChangelogEntry(
                version="0.6.0",
                prs=[336],
                description="Added middleware.name attribute",
            ),
        ],
    ),
    "navigation.type": AttributeMetadata(
        brief="The type of navigation done by a client-side router.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="router.push",
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "nel.elapsed_time": AttributeMetadata(
        brief="The elapsed number of milliseconds between the start of the resource fetch and when it was completed or aborted by the user agent.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=100,
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.1.0", prs=[68]),
        ],
    ),
    "nel.phase": AttributeMetadata(
        brief='If request failed, the phase of its network error. If request succeeded, "application".',
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="application",
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[68, 127]),
        ],
    ),
    "nel.referrer": AttributeMetadata(
        brief="request's referrer, as determined by the referrer policy associated with its client.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="https://example.com/foo?bar=baz",
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[68, 127]),
        ],
    ),
    "nel.sampling_function": AttributeMetadata(
        brief="The sampling function used to determine if the request should be sampled.",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=0.5,
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.1.0", prs=[68]),
        ],
    ),
    "nel.type": AttributeMetadata(
        brief='If request failed, the type of its network error. If request succeeded, "ok".',
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="dns.unreachable",
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[68, 127]),
        ],
    ),
    "net.host.ip": AttributeMetadata(
        brief="Local address of the network connection - IP address or Unix domain socket name.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="192.168.0.1",
        deprecation=DeprecationInfo(replacement="network.local.address"),
        aliases=["network.local.address", "net.sock.host.addr"],
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[61, 108, 127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "net.host.name": AttributeMetadata(
        brief="Server domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="example.com",
        deprecation=DeprecationInfo(replacement="server.address"),
        aliases=["server.address", "http.server_name", "http.host"],
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[61, 108, 127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "net.host.port": AttributeMetadata(
        brief="Server port number.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example=1337,
        deprecation=DeprecationInfo(replacement="server.port"),
        aliases=["server.port"],
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.1.0", prs=[61]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "net.peer.ip": AttributeMetadata(
        brief="Peer address of the network connection - IP address or Unix domain socket name.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="192.168.0.1",
        deprecation=DeprecationInfo(replacement="network.peer.address"),
        aliases=["network.peer.address", "net.sock.peer.addr"],
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[61, 108, 127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "net.peer.name": AttributeMetadata(
        brief="Server domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="example.com",
        deprecation=DeprecationInfo(
            replacement="server.address",
            reason="Deprecated, use server.address on client spans and client.address on server spans.",
        ),
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[61, 127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "net.peer.port": AttributeMetadata(
        brief="Peer port number.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example=1337,
        deprecation=DeprecationInfo(
            replacement="server.port",
            reason="Deprecated, use server.port on client spans and client.port on server spans.",
        ),
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.1.0", prs=[61]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "net.protocol.name": AttributeMetadata(
        brief="OSI application layer or non-OSI equivalent.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="http",
        deprecation=DeprecationInfo(replacement="network.protocol.name"),
        aliases=["network.protocol.name", "mcp.resource.protocol"],
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[61, 127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "net.protocol.version": AttributeMetadata(
        brief="The actual version of the protocol used for network communication.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="1.1",
        deprecation=DeprecationInfo(replacement="network.protocol.version"),
        aliases=["network.protocol.version", "http.flavor"],
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[61, 108, 127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "net.sock.family": AttributeMetadata(
        brief="OSI transport and network layer",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="inet",
        deprecation=DeprecationInfo(
            replacement="network.transport",
            reason="Deprecated, use network.transport and network.type.",
        ),
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[61, 127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "net.sock.host.addr": AttributeMetadata(
        brief="Local address of the network connection mapping to Unix domain socket name.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="/var/my.sock",
        deprecation=DeprecationInfo(replacement="network.local.address"),
        aliases=["network.local.address", "net.host.ip"],
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[61, 108, 127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "net.sock.host.port": AttributeMetadata(
        brief="Local port number of the network connection.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example=8080,
        deprecation=DeprecationInfo(replacement="network.local.port"),
        aliases=["network.local.port"],
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.1.0", prs=[61]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "net.sock.peer.addr": AttributeMetadata(
        brief="Peer address of the network connection - IP address",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="192.168.0.1",
        deprecation=DeprecationInfo(replacement="network.peer.address"),
        aliases=["network.peer.address", "net.peer.ip"],
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[61, 108, 127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "net.sock.peer.name": AttributeMetadata(
        brief="Peer address of the network connection - Unix domain socket name",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="/var/my.sock",
        deprecation=DeprecationInfo(
            reason="Deprecated from OTEL, no replacement at this time"
        ),
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[61, 119, 127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "net.sock.peer.port": AttributeMetadata(
        brief="Peer port number of the network connection.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example=8080,
        deprecation=DeprecationInfo(replacement="network.peer.port"),
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.1.0", prs=[61]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "net.transport": AttributeMetadata(
        brief="OSI transport layer or inter-process communication method.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="tcp",
        deprecation=DeprecationInfo(replacement="network.transport"),
        aliases=["network.transport", "mcp.transport"],
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[61, 127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "network.connection.effective_type": AttributeMetadata(
        brief="Specifies the effective type of the current connection (e.g. slow-2g, 2g, 3g, 4g).",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="4g",
        aliases=["effectiveConnectionType"],
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[279],
                description="Added attribute network.connection.effective_type to be used instead of effectiveConnectionType",
            ),
        ],
    ),
    "network.connection.rtt": AttributeMetadata(
        brief="Specifies the estimated effective round-trip time of the current connection, in milliseconds.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=100,
        aliases=["connection.rtt"],
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[279],
                description="Added attribute network.connection.rtt to be used instead of connection.rtt",
            ),
        ],
    ),
    "network.connection.type": AttributeMetadata(
        brief="Specifies the type of the current connection (e.g. wifi, ethernet, cellular , etc).",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="wifi",
        aliases=["device.connection_type", "connectionType"],
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[279],
                description="Added attribute network.connection.type to be used instead of connectionType",
            ),
        ],
    ),
    "network.local.address": AttributeMetadata(
        brief="Local address of the network connection - IP address or Unix domain socket name.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="10.1.2.80",
        aliases=["net.host.ip", "net.sock.host.addr"],
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "network.local.port": AttributeMetadata(
        brief="Local port number of the network connection.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example=65400,
        aliases=["net.sock.host.port"],
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "network.peer.address": AttributeMetadata(
        brief="Peer address of the network connection - IP address or Unix domain socket name.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="10.1.2.80",
        aliases=["net.peer.ip", "net.sock.peer.addr"],
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[108, 127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "network.peer.port": AttributeMetadata(
        brief="Peer port number of the network connection.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example=65400,
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "network.protocol.name": AttributeMetadata(
        brief="OSI application layer or non-OSI equivalent.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="http",
        aliases=["net.protocol.name", "mcp.resource.protocol"],
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "network.protocol.version": AttributeMetadata(
        brief="The actual version of the protocol used for network communication.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="1.1",
        aliases=["http.flavor", "net.protocol.version"],
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "network.transport": AttributeMetadata(
        brief="OSI transport layer or inter-process communication method.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="tcp",
        aliases=["net.transport", "mcp.transport"],
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "network.type": AttributeMetadata(
        brief="OSI network layer or non-OSI equivalent.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="ipv4",
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "os.build": AttributeMetadata(
        brief="The build ID of the operating system.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="1234567890",
        deprecation=DeprecationInfo(
            replacement="os.build_id", status=DeprecationStatus.BACKFILL
        ),
        aliases=["os.build_id"],
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[301],
                description="Added os.build attribute, deprecated in favor of os.build_id",
            ),
        ],
    ),
    "os.build_id": AttributeMetadata(
        brief="The build ID of the operating system.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="1234567890",
        aliases=["os.build"],
        changelog=[
            ChangelogEntry(
                version="0.5.0", prs=[301], description="Added os.build as alias"
            ),
            ChangelogEntry(version="0.1.0", prs=[127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "os.description": AttributeMetadata(
        brief="Human readable (not intended to be parsed) OS version information, like e.g. reported by ver or lsb_release -a commands.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="Ubuntu 18.04.1 LTS",
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "os.kernel_version": AttributeMetadata(
        brief="An independent kernel version string. Typically the entire output of the `uname` syscall.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="20.2.0",
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[301],
                description="Added os.kernel_version attribute",
            ),
        ],
    ),
    "os.name": AttributeMetadata(
        brief="Human readable operating system name.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="Ubuntu",
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "os.raw_description": AttributeMetadata(
        brief="An unprocessed description string obtained by the operating system. For some well-known runtimes, Sentry will attempt to parse `name` and `version` from this string, if they are not explicitly given.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="Ubuntu 22.04.4 LTS (Jammy Jellyfish)",
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[301],
                description="Added os.raw_description attribute",
            ),
        ],
    ),
    "os.rooted": AttributeMetadata(
        brief="Whether the operating system has been jailbroken or rooted.",
        type=AttributeType.BOOLEAN,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=True,
        changelog=[
            ChangelogEntry(
                version="0.5.0", prs=[301], description="Added os.rooted attribute"
            ),
        ],
    ),
    "os.theme": AttributeMetadata(
        brief="Whether the OS runs in dark mode or light mode.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="dark",
        changelog=[
            ChangelogEntry(
                version="0.5.0", prs=[301], description="Added os.theme attribute"
            ),
        ],
    ),
    "os.type": AttributeMetadata(
        brief="The operating system type.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="linux",
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "os.version": AttributeMetadata(
        brief="The version of the operating system.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="18.04.2",
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "otel.scope.name": AttributeMetadata(
        brief="The name of the instrumentation scope - (InstrumentationScope.Name in OTLP).",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="io.opentelemetry.contrib.mongodb",
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "otel.scope.version": AttributeMetadata(
        brief="The version of the instrumentation scope - (InstrumentationScope.Version in OTLP).",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="2.4.5",
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "otel.status_code": AttributeMetadata(
        brief="Name of the code, either “OK” or “ERROR”. MUST NOT be set if the status code is UNSET.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="OK",
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "otel.status_description": AttributeMetadata(
        brief="Description of the Status if it has a value, otherwise not set.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="resource not found",
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "params.<key>": AttributeMetadata(
        brief="Decoded parameters extracted from a URL path. Usually added by client-side routing frameworks like vue-router.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        has_dynamic_suffix=True,
        example="params.id='123'",
        aliases=["url.path.parameter.<key>"],
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[103]),
        ],
    ),
    "performance.activationStart": AttributeMetadata(
        brief="The time between initiating a navigation to a page and the browser activating the page",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=1.983,
        deprecation=DeprecationInfo(
            replacement="browser.performance.navigation.activation_start",
            reason="The activationStart is now recorded as the browser.performance.navigation.activation_start attribute.",
            status=DeprecationStatus.BACKFILL,
        ),
        aliases=["browser.performance.navigation.activation_start"],
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[321],
                description="Added performance.activationStart attribute",
            ),
        ],
    ),
    "performance.timeOrigin": AttributeMetadata(
        brief="The browser's performance.timeOrigin timestamp representing the time when the pageload was initiated",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=1776185678.886,
        deprecation=DeprecationInfo(
            replacement="browser.performance.time_origin",
            reason="The timeOrigin is now recorded as the browser.performance.time_origin attribute.",
            status=DeprecationStatus.BACKFILL,
        ),
        aliases=["browser.performance.time_origin"],
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[321],
                description="Added performance.timeOrigin attribute",
            ),
        ],
    ),
    "previous_route": AttributeMetadata(
        brief="Also used by mobile SDKs to indicate the previous route in the application.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="HomeScreen",
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[74]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "process.command_args": AttributeMetadata(
        brief="All the command arguments (including the command/executable itself) as received by the process.",
        type=AttributeType.STRING_ARRAY,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example=["cmd/otecol", "--config=config.yaml"],
        changelog=[
            ChangelogEntry(
                version="0.6.0",
                prs=[327],
                description="Added process.command_args attribute",
            ),
        ],
    ),
    "process.executable.name": AttributeMetadata(
        brief="The name of the executable that started the process.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="getsentry",
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "process.pid": AttributeMetadata(
        brief="The process ID of the running process.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example=12345,
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "process.runtime.description": AttributeMetadata(
        brief="An additional description about the runtime of the process, for example a specific vendor customization of the runtime environment. Equivalent to `raw_description` in the Sentry runtime context.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="Eclipse OpenJ9 VM openj9-0.21.0",
        aliases=["runtime.raw_description"],
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "process.runtime.engine.name": AttributeMetadata(
        brief="The name of the runtime engine.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="v8",
        changelog=[
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "process.runtime.engine.version": AttributeMetadata(
        brief="The version of the runtime engine.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="12.9.202.13-rusty",
        changelog=[
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "process.runtime.name": AttributeMetadata(
        brief="The name of the runtime. Equivalent to `name` in the Sentry runtime context.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="node",
        aliases=["runtime.name"],
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "process.runtime.version": AttributeMetadata(
        brief="The version of the runtime of this process, as returned by the runtime without modification. Equivalent to `version` in the Sentry runtime context.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="18.04.2",
        aliases=["runtime.version"],
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "query.<key>": AttributeMetadata(
        brief="An item in a query string. Usually added by client-side routing frameworks like vue-router.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        has_dynamic_suffix=True,
        example="query.id='123'",
        deprecation=DeprecationInfo(
            replacement="url.query",
            reason="Instead of sending items individually in query.<key>, they should be sent all together with url.query.",
        ),
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[103]),
        ],
    ),
    "react.version": AttributeMetadata(
        brief="The version of the React framework",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="18.2.0",
        changelog=[
            ChangelogEntry(
                version="0.7.0", prs=[368], description="Added react.version attribute"
            ),
        ],
    ),
    "release": AttributeMetadata(
        brief="The sentry release.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="production",
        deprecation=DeprecationInfo(replacement="sentry.release"),
        aliases=["sentry.release"],
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[61, 127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "remix.action_form_data.<key>": AttributeMetadata(
        brief="Remix form data, <key> being the form data key, the value being the form data value.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        has_dynamic_suffix=True,
        example="http.response.header.text='test'",
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[103]),
        ],
    ),
    "replay_id": AttributeMetadata(
        brief="The id of the sentry replay.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="123e4567e89b12d3a456426614174000",
        deprecation=DeprecationInfo(replacement="sentry.replay_id"),
        aliases=["sentry.replay_id"],
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[61]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "resource.deployment.environment": AttributeMetadata(
        brief="The software deployment environment name.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="production",
        deprecation=DeprecationInfo(
            replacement="sentry.environment", status=DeprecationStatus.BACKFILL
        ),
        changelog=[
            ChangelogEntry(version="0.5.0", prs=[266]),
        ],
    ),
    "resource.deployment.environment.name": AttributeMetadata(
        brief="The software deployment environment name.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="production",
        deprecation=DeprecationInfo(
            replacement="sentry.environment", status=DeprecationStatus.BACKFILL
        ),
        changelog=[
            ChangelogEntry(version="0.3.1", prs=[196]),
        ],
    ),
    "resource.render_blocking_status": AttributeMetadata(
        brief="The render blocking status of the resource.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="non-blocking",
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "route": AttributeMetadata(
        brief="The matched route, that is, the path template in the format used by the respective server framework. Also used by mobile SDKs to indicate the current route in the application.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="App\\Controller::indexAction",
        deprecation=DeprecationInfo(replacement="http.route"),
        aliases=["http.route"],
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[61, 74]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "rpc.grpc.status_code": AttributeMetadata(
        brief="The numeric status code of the gRPC request.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example=2,
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "rpc.method": AttributeMetadata(
        brief="The fully-qualified logical name of the method from the RPC interface perspective.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="com.example.ExampleService/exampleMethod",
        changelog=[
            ChangelogEntry(
                version="0.7.0", prs=[351], description="Added rpc.method attribute"
            ),
        ],
    ),
    "rpc.response.status_code": AttributeMetadata(
        brief="Status code of the RPC returned by the RPC server or generated by the client.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="DEADLINE_EXCEEDED",
        changelog=[
            ChangelogEntry(
                version="0.7.0",
                prs=[352],
                description="Added rpc.response.status_code attribute",
            ),
        ],
    ),
    "rpc.service": AttributeMetadata(
        brief="The full (logical) name of the service being called, including its package name, if applicable.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="myService.BestService",
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "runtime.build": AttributeMetadata(
        brief="The application build string, when it is separate from the version.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="stable",
        deprecation=DeprecationInfo(
            reason="The runtime.* namespace is deprecated in favor of process.runtime.*. No direct OTel equivalent exists for this attribute."
        ),
        changelog=[
            ChangelogEntry(
                version="0.11.0",
                prs=[383],
                description="Added and deprecated runtime.build attribute",
            ),
        ],
    ),
    "runtime.name": AttributeMetadata(
        brief="The name of the runtime. For example node, CPython, or rustc.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="node",
        deprecation=DeprecationInfo(
            replacement="process.runtime.name",
            reason="Prefer OTel-aligned process.runtime.name",
        ),
        aliases=["process.runtime.name"],
        changelog=[
            ChangelogEntry(
                version="0.11.0",
                prs=[383],
                description="Added and deprecated runtime.name attribute in favor of process.runtime.name",
            ),
        ],
    ),
    "runtime.raw_description": AttributeMetadata(
        brief="Unprocessed description string as obtained from the runtime. Used to extract name and version for well-known runtimes.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="Eclipse OpenJ9 VM openj9-0.21.0",
        deprecation=DeprecationInfo(
            replacement="process.runtime.description",
            reason="Prefer OTel-aligned process.runtime.description",
        ),
        aliases=["process.runtime.description"],
        changelog=[
            ChangelogEntry(
                version="0.11.0",
                prs=[383],
                description="Added and deprecated runtime.raw_description attribute in favor of process.runtime.description",
            ),
        ],
    ),
    "runtime.version": AttributeMetadata(
        brief="The version of the runtime.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="18.04.2",
        deprecation=DeprecationInfo(
            replacement="process.runtime.version",
            reason="Prefer OTel-aligned process.runtime.version",
        ),
        aliases=["process.runtime.version"],
        changelog=[
            ChangelogEntry(
                version="0.11.0",
                prs=[383],
                description="Added and deprecated runtime.version attribute in favor of process.runtime.version",
            ),
        ],
    ),
    "score.<key>": AttributeMetadata(
        brief="The weighted performance score for a web vital. This is defined as `score.weight.<key>` * `score.ratio.<key>`.",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        has_dynamic_suffix=True,
        example="score.cls=0.1723",
        changelog=[
            ChangelogEntry(
                version="0.7.0", prs=[355], description="Added score.<key> attribute"
            ),
        ],
    ),
    "score.ratio.<key>": AttributeMetadata(
        brief="The score for a web vital, normalized to a number between 0 and 1.",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        has_dynamic_suffix=True,
        example="score.ratio.inp=0.7748",
        changelog=[
            ChangelogEntry(
                version="0.7.0",
                prs=[355],
                description="Added score.ratio.<key> attribute",
            ),
        ],
    ),
    "score.total": AttributeMetadata(
        brief="The total performance score of a span. This is the sum of individual weighted web vital scores (see `score.<key>`).",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        changelog=[
            ChangelogEntry(
                version="0.7.0", prs=[355], description="Added score.total attribute"
            ),
        ],
    ),
    "score.weight.<key>": AttributeMetadata(
        brief="The relative weight of a web vital in a span's performance score.",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        has_dynamic_suffix=True,
        example="score.weight.fcp=0.25",
        changelog=[
            ChangelogEntry(
                version="0.7.0",
                prs=[355],
                description="Added score.weight.<key> attribute",
            ),
        ],
    ),
    "sentry.action": AttributeMetadata(
        brief="Used as a generic attribute representing the action depending on the type of span. For instance, this is the database query operation for DB spans, and the request method for HTTP spans.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="SELECT",
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[212]),
        ],
    ),
    "sentry.browser.name": AttributeMetadata(
        brief="The name of the browser.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="Chrome",
        deprecation=DeprecationInfo(replacement="browser.name"),
        aliases=["browser.name"],
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[139]),
        ],
    ),
    "sentry.browser.version": AttributeMetadata(
        brief="The version of the browser.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="120.0.6099.130",
        deprecation=DeprecationInfo(replacement="browser.version"),
        aliases=["browser.version"],
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[139]),
        ],
    ),
    "sentry.cancellation_reason": AttributeMetadata(
        brief="The reason why a span ended early.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="document.hidden",
        changelog=[
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "sentry.category": AttributeMetadata(
        brief="The high-level category of a span, derived from the span operation or span attributes. This categorizes spans by their general purpose (e.g., database, HTTP, UI). Known values include: 'ai', 'ai.pipeline', 'app', 'browser', 'cache', 'console', 'db', 'event', 'file', 'function.aws', 'function.azure', 'function.gcp', 'function.nextjs', 'function.remix', 'graphql', 'grpc', 'http', 'measure', 'middleware', 'navigation', 'pageload', 'queue', 'resource', 'rpc', 'serialize', 'subprocess', 'template', 'topic', 'ui', 'ui.angular', 'ui.ember', 'ui.react', 'ui.svelte', 'ui.vue', 'view', 'websocket'.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="db",
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[218]),
        ],
    ),
    "sentry.client_sample_rate": AttributeMetadata(
        brief="Rate at which a span was sampled in the SDK.",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=0.5,
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[102]),
        ],
    ),
    "sentry.description": AttributeMetadata(
        brief="The human-readable description of a span.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="index view query",
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[135]),
        ],
    ),
    "sentry.dist": AttributeMetadata(
        brief="The sentry dist.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="1.0",
        changelog=[
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "sentry.domain": AttributeMetadata(
        brief="Used as a generic attribute representing the domain depending on the type of span. For instance, this is the collection/table name for database spans, and the server address for HTTP spans.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="example.com",
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[212]),
        ],
    ),
    "sentry.dsc.environment": AttributeMetadata(
        brief="The environment from the dynamic sampling context.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        visibility=Visibility.INTERNAL,
        example="prod",
        changelog=[
            ChangelogEntry(version="0.3.0", prs=[185]),
        ],
    ),
    "sentry.dsc.project_id": AttributeMetadata(
        brief="The ID of the project where the trace originated (i.e. the project of the SDK that started the trace). Propagated through the dynamic sampling context and set by Relay during ingestion.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        visibility=Visibility.INTERNAL,
        example="12345",
        changelog=[
            ChangelogEntry(
                version="0.7.0",
                prs=[358],
                description="Add sentry.dsc.project_id as an attribute",
            ),
        ],
    ),
    "sentry.dsc.public_key": AttributeMetadata(
        brief="The public key from the dynamic sampling context.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.INTERNAL,
        example="c51734c603c4430eb57cb0a5728a479d",
        changelog=[
            ChangelogEntry(version="0.3.0", prs=[185]),
        ],
    ),
    "sentry.dsc.release": AttributeMetadata(
        brief="The release identifier from the dynamic sampling context.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        visibility=Visibility.INTERNAL,
        example="frontend@e8211be71b214afab5b85de4b4c54be3714952bb",
        changelog=[
            ChangelogEntry(version="0.3.0", prs=[185]),
        ],
    ),
    "sentry.dsc.sample_rate": AttributeMetadata(
        brief="The sample rate from the dynamic sampling context.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        visibility=Visibility.INTERNAL,
        example="1.0",
        changelog=[
            ChangelogEntry(version="0.3.0", prs=[185]),
        ],
    ),
    "sentry.dsc.sampled": AttributeMetadata(
        brief="Whether the event was sampled according to the dynamic sampling context.",
        type=AttributeType.BOOLEAN,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        visibility=Visibility.INTERNAL,
        example=True,
        changelog=[
            ChangelogEntry(version="0.3.0", prs=[185]),
        ],
    ),
    "sentry.dsc.trace_id": AttributeMetadata(
        brief="The trace ID from the dynamic sampling context.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        visibility=Visibility.INTERNAL,
        example="047372980460430cbc78d9779df33a46",
        changelog=[
            ChangelogEntry(version="0.3.0", prs=[185]),
        ],
    ),
    "sentry.dsc.transaction": AttributeMetadata(
        brief="The transaction name from the dynamic sampling context.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        visibility=Visibility.INTERNAL,
        example="/issues/errors-outages/",
        changelog=[
            ChangelogEntry(version="0.3.0", prs=[185]),
        ],
    ),
    "sentry.environment": AttributeMetadata(
        brief="The sentry environment.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="production",
        aliases=["environment"],
        changelog=[
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "sentry.exclusive_time": AttributeMetadata(
        brief="The exclusive time duration of the span in milliseconds.",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=1234,
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.3.0", prs=[160]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "sentry.graphql.operation": AttributeMetadata(
        brief="Indicates the type of graphql operation, emitted by the Javascript SDK.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="getUserById",
        changelog=[
            ChangelogEntry(version="0.3.1", prs=[190]),
        ],
    ),
    "sentry.group": AttributeMetadata(
        brief="Stores the hash of `sentry.normalized_description`. This is primarily used for grouping spans in the product end.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[212]),
        ],
    ),
    "sentry.http.prefetch": AttributeMetadata(
        brief="If an http request was a prefetch request.",
        type=AttributeType.BOOLEAN,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=True,
        changelog=[
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "sentry.idle_span_finish_reason": AttributeMetadata(
        brief="The reason why an idle span ended early.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="idleTimeout",
        changelog=[
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "sentry.is_remote": AttributeMetadata(
        brief="Indicates whether a span's parent is remote.",
        type=AttributeType.BOOLEAN,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=True,
        changelog=[
            ChangelogEntry(version="0.3.1", prs=[190]),
        ],
    ),
    "sentry.kind": AttributeMetadata(
        brief="Used to clarify the relationship between parents and children, or to distinguish between spans, e.g. a `server` and `client` span with the same name.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="server",
        changelog=[
            ChangelogEntry(version="0.3.1", prs=[190]),
        ],
    ),
    "sentry.main_thread": AttributeMetadata(
        brief="Whether the span or event occurred on the main thread. Computed by Relay and should not be set by SDKs.",
        type=AttributeType.BOOLEAN,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=True,
        changelog=[
            ChangelogEntry(version="0.5.0"),
        ],
    ),
    "sentry.message.parameter.<key>": AttributeMetadata(
        brief="A parameter used in the message template. <key> can either be the number that represent the parameter's position in the template string (sentry.message.parameter.0, sentry.message.parameter.1, etc) or the parameter's name (sentry.message.parameter.item_id, sentry.message.parameter.user_id, etc)",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="sentry.message.parameter.0='123'",
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[116]),
        ],
    ),
    "sentry.message.template": AttributeMetadata(
        brief="The parameterized template string.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="Hello, {name}!",
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[116]),
        ],
    ),
    "sentry.mobile": AttributeMetadata(
        brief="Whether the application is using a mobile SDK. Computed by Relay and should not be set by SDKs.",
        type=AttributeType.BOOLEAN,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=True,
        changelog=[
            ChangelogEntry(version="0.5.0"),
        ],
    ),
    "sentry.module.<key>": AttributeMetadata(
        brief="A module that was loaded in the process. The key is the name of the module.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        has_dynamic_suffix=True,
        example="sentry.module.brianium/paratest='v7.7.0'",
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[103]),
        ],
    ),
    "sentry.nextjs.ssr.function.route": AttributeMetadata(
        brief="A parameterized route for a function in Next.js that contributes to Server-Side Rendering. Should be present on spans that track such functions when the file location of the function is known.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="/posts/[id]/layout",
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[54, 106]),
        ],
    ),
    "sentry.nextjs.ssr.function.type": AttributeMetadata(
        brief="A descriptor for a for a function in Next.js that contributes to Server-Side Rendering. Should be present on spans that track such functions.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="generateMetadata",
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[54, 106]),
        ],
    ),
    "sentry.normalized_db_query": AttributeMetadata(
        brief="The normalized version of `db.query.text`.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="SELECT .. FROM sentry_project WHERE (project_id = %s)",
        changelog=[
            ChangelogEntry(version="0.3.1", prs=[194]),
        ],
    ),
    "sentry.normalized_db_query.hash": AttributeMetadata(
        brief="The hash of `sentry.normalized_db_query`.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[200]),
        ],
    ),
    "sentry.normalized_description": AttributeMetadata(
        brief="Used as a generic attribute representing the normalized `sentry.description`. This refers to the legacy use case of `sentry.description` where it holds relevant data depending on the type of span (e.g. database query, resource url, http request description, etc).",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="SELECT .. FROM sentry_project WHERE (project_id = %s)",
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[212]),
        ],
    ),
    "sentry.observed_timestamp_nanos": AttributeMetadata(
        brief="The timestamp at which an envelope was received by Relay, in nanoseconds.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="1544712660300000000",
        changelog=[
            ChangelogEntry(version="0.3.0", prs=[174]),
            ChangelogEntry(version="0.2.0", prs=[137]),
        ],
    ),
    "sentry.op": AttributeMetadata(
        brief="The operation of a span.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="http.client",
        changelog=[
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "sentry.origin": AttributeMetadata(
        brief="The origin of the instrumentation (e.g. span, log, etc.)",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="auto.http.otel.fastify",
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[68]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "sentry.platform": AttributeMetadata(
        brief="The sdk platform that generated the event.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="php",
        changelog=[
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "sentry.profile_id": AttributeMetadata(
        brief="The ID of the Sentry profile the span is associated with. This is only meaningful for transaction-based profiling.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="123e4567e89b12d3a456426614174000",
        changelog=[
            ChangelogEntry(
                version="0.6.0",
                prs=[344],
                description="Added sentry.profile_id attribute",
            ),
        ],
    ),
    "sentry.profiler_id": AttributeMetadata(
        brief="The id of the currently running profiler (continuous profiling)",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="18779b64dd35d1a538e7ce2dd2d3fad3",
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[242]),
        ],
    ),
    "sentry.release": AttributeMetadata(
        brief="The sentry release.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="7.0.0",
        aliases=["service.version", "release"],
        changelog=[
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "sentry.replay_id": AttributeMetadata(
        brief="The id of the sentry replay.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="123e4567e89b12d3a456426614174000",
        aliases=["replay_id"],
        changelog=[
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "sentry.replay_is_buffering": AttributeMetadata(
        brief="A sentinel attribute on log events indicating whether the current Session Replay is being buffered (onErrorSampleRate).",
        type=AttributeType.BOOLEAN,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=True,
        changelog=[
            ChangelogEntry(version="0.3.0", prs=[185]),
        ],
    ),
    "sentry.report_event": AttributeMetadata(
        brief="(Deprecated) The event that caused the SDK to report CLS or LCP (pagehide or navigation)",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="pagehide",
        deprecation=DeprecationInfo(
            reason="The report event is now recorded as a browser.web_vital.lcp.report_event or browser.web_vital.cls.report_event attribute. No backfill required."
        ),
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[320],
                description="Added sentry.report_event attribute",
            ),
        ],
    ),
    "sentry.sdk.integrations": AttributeMetadata(
        brief="A list of names identifying enabled integrations. The list shouldhave all enabled integrations, including default integrations. Defaultintegrations are included because different SDK releases may contain differentdefault integrations.",
        type=AttributeType.STRING_ARRAY,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=[
            "InboundFilters",
            "FunctionToString",
            "BrowserApiErrors",
            "Breadcrumbs",
        ],
        changelog=[
            ChangelogEntry(version="0.0.0", prs=[42]),
        ],
    ),
    "sentry.sdk.name": AttributeMetadata(
        brief="The sentry sdk name.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="@sentry/react",
        changelog=[
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "sentry.sdk.version": AttributeMetadata(
        brief="The sentry sdk version.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="7.0.0",
        changelog=[
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "sentry.segment.id": AttributeMetadata(
        brief="The segment ID of a span",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="051581bf3cb55c13",
        aliases=["sentry.segment_id"],
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[107, 124]),
        ],
    ),
    "sentry.segment.name": AttributeMetadata(
        brief="The segment name of a span",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="GET /user",
        aliases=["sentry.transaction", "transaction"],
        changelog=[
            ChangelogEntry(
                version="0.6.0",
                prs=[345],
                description="Added sentry.transaction and transaction aliases",
            ),
            ChangelogEntry(version="0.1.0", prs=[104]),
        ],
    ),
    "sentry.segment_id": AttributeMetadata(
        brief="The segment ID of a span",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="051581bf3cb55c13",
        deprecation=DeprecationInfo(
            replacement="sentry.segment.id", status=DeprecationStatus.BACKFILL
        ),
        aliases=["sentry.segment.id"],
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[124]),
        ],
    ),
    "sentry.server_sample_rate": AttributeMetadata(
        brief="Rate at which a span was sampled in Relay.",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=0.5,
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[102]),
        ],
    ),
    "sentry.source": AttributeMetadata(
        brief="The source of a span, also referred to as transaction source. Known values are:  `'custom'`, `'url'`, `'route'`, `'component'`, `'view'`, `'task'`. '`source`' describes a parametrized route, while `'url'` describes the full URL, potentially containing identifiers.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="route",
        deprecation=DeprecationInfo(
            replacement="sentry.span.source",
            reason="This attribute is being deprecated in favor of sentry.span.source",
            status=DeprecationStatus.BACKFILL,
        ),
        changelog=[
            ChangelogEntry(version="0.5.0"),
        ],
    ),
    "sentry.span.source": AttributeMetadata(
        brief="The source of a span, also referred to as transaction source. Known values are:  `'custom'`, `'url'`, `'route'`, `'component'`, `'view'`, `'task'`. '`source`' describes a parametrized route, while `'url'` describes the full URL, potentially containing identifiers.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="route",
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[214]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "sentry.status.message": AttributeMetadata(
        brief="The from OTLP extracted status message.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="foobar",
        changelog=[
            ChangelogEntry(version="0.3.1", prs=[190]),
        ],
    ),
    "sentry.status_code": AttributeMetadata(
        brief="The HTTP status code used in Sentry Insights. Typically set by Sentry during ingestion, rather than by clients.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=200,
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[223, 228]),
        ],
    ),
    "sentry.timestamp.sequence": AttributeMetadata(
        brief="A sequencing counter for deterministic ordering of logs or metrics when timestamps share the same integer millisecond. Starts at 0 on SDK initialization, increments by 1 for each captured item, and resets to 0 when the integer millisecond of the current item differs from the previous one.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=0,
        changelog=[
            ChangelogEntry(version="0.5.0", prs=[262]),
        ],
    ),
    "sentry.trace.parent_span_id": AttributeMetadata(
        brief="The span id of the span that was active when the log was collected. This should not be set if there was no active span.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="b0e6f15b45c36b12",
        deprecation=DeprecationInfo(),
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[287],
                description="Deprecate `sentry.trace.parent_span_id`",
            ),
            ChangelogEntry(version="0.1.0", prs=[116]),
        ],
    ),
    "sentry.transaction": AttributeMetadata(
        brief="The sentry transaction (segment name).",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="GET /",
        deprecation=DeprecationInfo(
            replacement="sentry.segment.name",
            reason="This attribute is being deprecated in favor of sentry.segment.name",
            status=DeprecationStatus.BACKFILL,
        ),
        aliases=["sentry.segment.name", "transaction"],
        changelog=[
            ChangelogEntry(
                version="0.6.0",
                prs=[345],
                description="Deprecated sentry.transaction in favor of sentry.segment.name",
            ),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "sentry.user.email": AttributeMetadata(
        brief="User email address.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        deprecation=DeprecationInfo(replacement="user.email"),
        aliases=["user.email"],
        changelog=[
            ChangelogEntry(version="0.10.0", prs=[406]),
        ],
    ),
    "sentry.user.geo.city": AttributeMetadata(
        brief="Human readable city name.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        deprecation=DeprecationInfo(replacement="user.geo.city"),
        aliases=["user.geo.city"],
        changelog=[
            ChangelogEntry(version="0.10.0", prs=[406]),
        ],
    ),
    "sentry.user.geo.country_code": AttributeMetadata(
        brief="Two-letter country code (ISO 3166-1 alpha-2).",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        deprecation=DeprecationInfo(replacement="user.geo.country_code"),
        aliases=["user.geo.country_code"],
        changelog=[
            ChangelogEntry(version="0.10.0", prs=[406]),
        ],
    ),
    "sentry.user.geo.region": AttributeMetadata(
        brief="Human readable region name or code.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        deprecation=DeprecationInfo(replacement="user.geo.region"),
        aliases=["user.geo.region"],
        changelog=[
            ChangelogEntry(version="0.10.0", prs=[406]),
        ],
    ),
    "sentry.user.geo.subdivision": AttributeMetadata(
        brief="Human readable subdivision name.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        deprecation=DeprecationInfo(replacement="user.geo.subdivision"),
        aliases=["user.geo.subdivision"],
        changelog=[
            ChangelogEntry(version="0.10.0", prs=[406]),
        ],
    ),
    "sentry.user.id": AttributeMetadata(
        brief="Unique identifier of the user.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        deprecation=DeprecationInfo(replacement="user.id"),
        aliases=["user.id"],
        changelog=[
            ChangelogEntry(version="0.10.0", prs=[406]),
        ],
    ),
    "sentry.user.ip": AttributeMetadata(
        brief="The IP address of the user.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        deprecation=DeprecationInfo(replacement="user.ip_address"),
        aliases=["user.ip_address"],
        changelog=[
            ChangelogEntry(version="0.10.0", prs=[406]),
        ],
    ),
    "sentry.user.username": AttributeMetadata(
        brief="Short name or login/username of the user.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        deprecation=DeprecationInfo(replacement="user.name"),
        aliases=["user.name"],
        changelog=[
            ChangelogEntry(version="0.10.0", prs=[406]),
        ],
    ),
    "server.address": AttributeMetadata(
        brief="Server domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="example.com",
        aliases=["http.server_name", "net.host.name", "http.host"],
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[108, 127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "server.port": AttributeMetadata(
        brief="Server port number.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example=1337,
        aliases=["net.host.port"],
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "service.name": AttributeMetadata(
        brief="Logical name of the service.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="omegastar",
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "service.version": AttributeMetadata(
        brief="The version string of the service API or implementation. The format is not defined by these conventions.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="5.0.0",
        aliases=["sentry.release"],
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "session.id": AttributeMetadata(
        brief="A unique id identifying the active session at the time of setting this attribute",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="00112233-4455-6677-8899-aabbccddeeff",
        changelog=[
            ChangelogEntry(
                version="0.11.0", prs=[412], description="Added session.id attribute"
            ),
        ],
    ),
    "stall_percentage": AttributeMetadata(
        brief="The fraction of time the app was stalled. Only applies to React Native. This is computed by Relay.",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        changelog=[
            ChangelogEntry(
                version="0.7.0",
                prs=[362],
                description="Added stall_percentage attribute",
            ),
        ],
    ),
    "stall_total_time": AttributeMetadata(
        brief="The combined duration of all stalls in milliseconds. Only applies to React Native. This is computed by Relay.",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        changelog=[
            ChangelogEntry(
                version="0.7.0",
                prs=[362],
                description="Added stall_total_time attribute",
            ),
        ],
    ),
    "state.type": AttributeMetadata(
        brief="The type of state management library",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="redux",
        changelog=[
            ChangelogEntry(
                version="0.7.0", prs=[365], description="Added state.type attribute"
            ),
        ],
    ),
    "thread.id": AttributeMetadata(
        brief="Current “managed” thread ID.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example=56,
        changelog=[
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "thread.name": AttributeMetadata(
        brief="Current thread name.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="main",
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "timber.tag": AttributeMetadata(
        brief="The log tag provided by the timber logging framework.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="MyTag",
        changelog=[
            ChangelogEntry(version="0.3.0", prs=[183]),
        ],
    ),
    "time_to_full_display": AttributeMetadata(
        brief="The duration of time to full display in milliseconds",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=1234.56,
        deprecation=DeprecationInfo(
            replacement="app.vitals.ttfd.value",
            reason="Replaced by app.vitals.ttfd.value to align with the app.vitals.* namespace for mobile performance attributes",
            status=DeprecationStatus.BACKFILL,
        ),
        aliases=["app.vitals.ttfd.value"],
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[313],
                description="Added and deprecated in favor of app.vitals.ttfd.value",
            ),
        ],
    ),
    "time_to_initial_display": AttributeMetadata(
        brief="The duration of time to initial display in milliseconds",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=1234.56,
        deprecation=DeprecationInfo(
            replacement="app.vitals.ttid.value",
            reason="Replaced by app.vitals.ttid.value to align with the app.vitals.* namespace for mobile performance attributes",
            status=DeprecationStatus.BACKFILL,
        ),
        aliases=["app.vitals.ttid.value"],
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[313],
                description="Added and deprecated in favor of app.vitals.ttid.value",
            ),
        ],
    ),
    "transaction": AttributeMetadata(
        brief="The sentry transaction (segment name).",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="GET /",
        deprecation=DeprecationInfo(
            replacement="sentry.segment.name", status=DeprecationStatus.BACKFILL
        ),
        aliases=["sentry.segment.name", "sentry.transaction"],
        changelog=[
            ChangelogEntry(
                version="0.6.0",
                prs=[345],
                description="Updated transaction deprecation replacement to sentry.segment.name",
            ),
            ChangelogEntry(version="0.1.0", prs=[61, 127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "trpc.procedure_path": AttributeMetadata(
        brief="The path of the tRPC procedure being called",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="user.getById",
        changelog=[
            ChangelogEntry(
                version="0.7.0",
                prs=[370],
                description="Added trpc.procedure_path attribute",
            ),
        ],
    ),
    "trpc.procedure_type": AttributeMetadata(
        brief="The type of the tRPC procedure",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="query",
        changelog=[
            ChangelogEntry(
                version="0.7.0",
                prs=[370],
                description="Added trpc.procedure_type attribute",
            ),
        ],
    ),
    "ttfb.requestTime": AttributeMetadata(
        brief="The time it takes for the server to process the initial request and send the first byte of a response to the user's browser",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=1554.5814,
        deprecation=DeprecationInfo(
            replacement="browser.web_vital.ttfb.request_time",
            reason="This attribute is being deprecated in favor of browser.web_vital.ttfb.request_time",
            status=DeprecationStatus.BACKFILL,
        ),
        aliases=["browser.web_vital.ttfb.request_time"],
        changelog=[
            ChangelogEntry(version="0.5.0", prs=[235]),
        ],
    ),
    "ttfb": AttributeMetadata(
        brief="The value of the recorded Time To First Byte (TTFB) web vital in milliseconds",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=194,
        deprecation=DeprecationInfo(
            replacement="browser.web_vital.ttfb.value",
            reason="This attribute is being deprecated in favor of browser.web_vital.ttfb.value",
            status=DeprecationStatus.BACKFILL,
        ),
        aliases=["browser.web_vital.ttfb.value"],
        changelog=[
            ChangelogEntry(version="0.5.0", prs=[235]),
        ],
    ),
    "type": AttributeMetadata(
        brief="More granular type of the operation happening.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="fetch",
        changelog=[
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "ui.component_name": AttributeMetadata(
        brief="The name of the associated component.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="HomeButton",
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "ui.contributes_to_ttfd": AttributeMetadata(
        brief="Whether the span execution contributed to the TTFD (time to fully drawn) metric.",
        type=AttributeType.BOOLEAN,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=True,
        changelog=[
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "ui.contributes_to_ttid": AttributeMetadata(
        brief="Whether the span execution contributed to the TTID (time to initial display) metric.",
        type=AttributeType.BOOLEAN,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=True,
        changelog=[
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "ui.element.height": AttributeMetadata(
        brief="The height of the UI element (for Html in pixels)",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=256,
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[284],
                description="Added ui.element.height attribute",
            ),
        ],
    ),
    "ui.element.id": AttributeMetadata(
        brief="The id of the UI element",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="btn-login",
        changelog=[
            ChangelogEntry(
                version="0.5.0", prs=[284], description="Added ui.element.id attribute"
            ),
        ],
    ),
    "ui.element.identifier": AttributeMetadata(
        brief="The identifier used to measure the UI element timing",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="heroImage",
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[284],
                description="Added ui.element.identifier attribute",
            ),
        ],
    ),
    "ui.element.load_time": AttributeMetadata(
        brief="The loading time of a UI element (from time origin to finished loading)",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=998.2234,
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[284],
                description="Added ui.element.load_time attribute",
            ),
        ],
    ),
    "ui.element.paint_type": AttributeMetadata(
        brief="The type of element paint. Can either be 'image-paint' or 'text-paint'",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="image-paint",
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[284],
                description="Added ui.element.paint_type attribute",
            ),
        ],
    ),
    "ui.element.render_time": AttributeMetadata(
        brief="The rendering time of the UI element (from time origin to finished rendering)",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=1023.1124,
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[284],
                description="Added ui.element.render_time attribute",
            ),
        ],
    ),
    "ui.element.type": AttributeMetadata(
        brief="type of the UI element",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="img",
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[284],
                description="Added ui.element.type attribute",
            ),
        ],
    ),
    "ui.element.url": AttributeMetadata(
        brief="The URL of the UI element (e.g. an img src)",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="https://assets.myapp.com/hero.png",
        changelog=[
            ChangelogEntry(
                version="0.5.0", prs=[284], description="Added ui.element.url attribute"
            ),
        ],
    ),
    "ui.element.width": AttributeMetadata(
        brief="The width of the UI element (for HTML in pixels)",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=512,
        changelog=[
            ChangelogEntry(
                version="0.5.0",
                prs=[284],
                description="Added ui.element.width attribute",
            ),
        ],
    ),
    "url.domain": AttributeMetadata(
        brief="Server domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="example.com",
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "url.fragment": AttributeMetadata(
        brief="The fragments present in the URI. Note that this does not contain the leading # character, while the `http.fragment` attribute does.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="details",
        changelog=[
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "url.full": AttributeMetadata(
        brief="The URL of the resource that was fetched.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="https://example.com/test?foo=bar#buzz",
        aliases=["http.url", "url"],
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[108]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "url.path": AttributeMetadata(
        brief="The URI path component.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="/foo",
        changelog=[
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "url.path.parameter.<key>": AttributeMetadata(
        brief="Decoded parameters extracted from a URL path. Usually added by client-side routing frameworks like vue-router.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        has_dynamic_suffix=True,
        example="url.path.parameter.id='123'",
        aliases=["params.<key>"],
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[103]),
        ],
    ),
    "url.port": AttributeMetadata(
        brief="Server port number.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example=1337,
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "url.query": AttributeMetadata(
        brief="The query string present in the URL. Note that this does not contain the leading ? character, while the `http.query` attribute does.",
        type=AttributeType.STRING,
        pii=PiiInfo(
            isPii=IsPii.TRUE,
            reason="Query string values can contain sensitive information. Clients should attempt to scrub parameters that might contain sensitive information.",
        ),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="foo=bar&bar=baz",
        changelog=[
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "url.scheme": AttributeMetadata(
        brief="The URI scheme component identifying the used protocol.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="https",
        aliases=["http.scheme"],
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "url.template": AttributeMetadata(
        brief="The low-cardinality template of an absolute path reference.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="/users/:id",
        aliases=["http.route"],
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "url": AttributeMetadata(
        brief="The URL of the resource that was fetched.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="https://example.com/test?foo=bar#buzz",
        deprecation=DeprecationInfo(replacement="url.full"),
        aliases=["url.full", "http.url"],
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[61]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "user.email": AttributeMetadata(
        brief="User email address.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="test@example.com",
        aliases=["sentry.user.email"],
        changelog=[
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "user.full_name": AttributeMetadata(
        brief="User's full name.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="John Smith",
        changelog=[
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "user.geo.city": AttributeMetadata(
        brief="Human readable city name.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="Toronto",
        aliases=["sentry.user.geo.city"],
        changelog=[
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "user.geo.country_code": AttributeMetadata(
        brief="Two-letter country code (ISO 3166-1 alpha-2).",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="CA",
        aliases=["sentry.user.geo.country_code"],
        changelog=[
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "user.geo.region": AttributeMetadata(
        brief="Human readable region name or code.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="Canada",
        aliases=["sentry.user.geo.region"],
        changelog=[
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "user.geo.subdivision": AttributeMetadata(
        brief="Human readable subdivision name.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="Ontario",
        aliases=["sentry.user.geo.subdivision"],
        changelog=[
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "user.hash": AttributeMetadata(
        brief="Unique user hash to correlate information for a user in anonymized form.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="8ae4c2993e0f4f3b8b2d1b1f3b5e8f4d",
        changelog=[
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "user.id": AttributeMetadata(
        brief="Unique identifier of the user.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="S-1-5-21-202424912787-2692429404-2351956786-1000",
        aliases=["sentry.user.id"],
        changelog=[
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "user.ip_address": AttributeMetadata(
        brief="The IP address of the user.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="192.168.1.1",
        aliases=["sentry.user.ip"],
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[75]),
        ],
    ),
    "user.name": AttributeMetadata(
        brief="Short name or login/username of the user.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="j.smith",
        aliases=["sentry.user.username"],
        changelog=[
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "user.roles": AttributeMetadata(
        brief="Array of user roles at the time of the event.",
        type=AttributeType.STRING_ARRAY,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example=["admin", "editor"],
        changelog=[
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "user_agent.original": AttributeMetadata(
        brief="Value of the HTTP User-Agent header sent by the client.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        visibility=Visibility.PUBLIC,
        example="Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Mobile/15E148 Safari/604.1",
        aliases=["http.user_agent"],
        changelog=[
            ChangelogEntry(version="0.1.0", prs=[127]),
            ChangelogEntry(version="0.0.0"),
        ],
    ),
    "vercel.branch": AttributeMetadata(
        brief="Git branch name for Vercel project",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="main",
        changelog=[
            ChangelogEntry(version="0.2.0", prs=[163]),
        ],
    ),
    "vercel.build_id": AttributeMetadata(
        brief="Identifier for the Vercel build (only present on build logs)",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="bld_cotnkcr76",
        changelog=[
            ChangelogEntry(version="0.2.0", prs=[163]),
        ],
    ),
    "vercel.deployment_id": AttributeMetadata(
        brief="Identifier for the Vercel deployment",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="dpl_233NRGRjVZX1caZrXWtz5g1TAksD",
        changelog=[
            ChangelogEntry(version="0.2.0", prs=[163]),
        ],
    ),
    "vercel.destination": AttributeMetadata(
        brief="Origin of the external content in Vercel (only on external logs)",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="https://vitals.vercel-insights.com/v1",
        changelog=[
            ChangelogEntry(version="0.2.0", prs=[163]),
        ],
    ),
    "vercel.edge_type": AttributeMetadata(
        brief="Type of edge runtime in Vercel",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="edge-function",
        changelog=[
            ChangelogEntry(version="0.2.0", prs=[163]),
        ],
    ),
    "vercel.entrypoint": AttributeMetadata(
        brief="Entrypoint for the request in Vercel",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="api/index.js",
        changelog=[
            ChangelogEntry(version="0.2.0", prs=[163]),
        ],
    ),
    "vercel.execution_region": AttributeMetadata(
        brief="Region where the request is executed",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="sfo1",
        changelog=[
            ChangelogEntry(version="0.2.0", prs=[163]),
        ],
    ),
    "vercel.id": AttributeMetadata(
        brief="Unique identifier for the log entry in Vercel",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="1573817187330377061717300000",
        changelog=[
            ChangelogEntry(version="0.2.0", prs=[163]),
        ],
    ),
    "vercel.ja3_digest": AttributeMetadata(
        brief="JA3 fingerprint digest of Vercel request",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="769,47-53-5-10-49161-49162-49171-49172-50-56-19-4,0-10-11,23-24-25,0",
        changelog=[
            ChangelogEntry(version="0.2.0", prs=[163]),
        ],
    ),
    "vercel.ja4_digest": AttributeMetadata(
        brief="JA4 fingerprint digest",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="t13d1516h2_8daaf6152771_02713d6af862",
        changelog=[
            ChangelogEntry(version="0.2.0", prs=[163]),
        ],
    ),
    "vercel.log_type": AttributeMetadata(
        brief="Vercel log output type",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="stdout",
        changelog=[
            ChangelogEntry(version="0.2.0", prs=[163]),
        ],
    ),
    "vercel.path": AttributeMetadata(
        brief="Function or dynamic path of the request in Vercel.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="/dynamic/[route].json",
        changelog=[
            ChangelogEntry(
                version="0.6.0", prs=[349], description="Added vercel.path attribute"
            ),
        ],
    ),
    "vercel.project_id": AttributeMetadata(
        brief="Identifier for the Vercel project",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="gdufoJxB6b9b1fEqr1jUtFkyavUU",
        changelog=[
            ChangelogEntry(version="0.2.0", prs=[163]),
        ],
    ),
    "vercel.project_name": AttributeMetadata(
        brief="Name of the Vercel project",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="my-app",
        changelog=[
            ChangelogEntry(version="0.2.0", prs=[163]),
        ],
    ),
    "vercel.proxy.cache_id": AttributeMetadata(
        brief="Original request ID when request is served from cache",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="pdx1::v8g4b-1744143786684-93dafbc0f70d",
        changelog=[
            ChangelogEntry(version="0.2.0", prs=[163]),
        ],
    ),
    "vercel.proxy.client_ip": AttributeMetadata(
        brief="Client IP address",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="120.75.16.101",
        changelog=[
            ChangelogEntry(version="0.2.0", prs=[163]),
        ],
    ),
    "vercel.proxy.host": AttributeMetadata(
        brief="Hostname of the request",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="test.vercel.app",
        changelog=[
            ChangelogEntry(version="0.2.0", prs=[163]),
        ],
    ),
    "vercel.proxy.lambda_region": AttributeMetadata(
        brief="Region where lambda function executed",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="sfo1",
        changelog=[
            ChangelogEntry(version="0.2.0", prs=[163]),
        ],
    ),
    "vercel.proxy.method": AttributeMetadata(
        brief="HTTP method of the request",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="GET",
        changelog=[
            ChangelogEntry(version="0.2.0", prs=[163]),
        ],
    ),
    "vercel.proxy.path": AttributeMetadata(
        brief="Request path with query parameters",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="/dynamic/some-value.json?route=some-value",
        changelog=[
            ChangelogEntry(version="0.2.0", prs=[163]),
        ],
    ),
    "vercel.proxy.path_type": AttributeMetadata(
        brief="How the request was served based on its path and project configuration",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="func",
        changelog=[
            ChangelogEntry(version="0.2.0", prs=[163]),
        ],
    ),
    "vercel.proxy.path_type_variant": AttributeMetadata(
        brief="Variant of the path type",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="api",
        changelog=[
            ChangelogEntry(version="0.2.0", prs=[163]),
        ],
    ),
    "vercel.proxy.referer": AttributeMetadata(
        brief="Referer of the request",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="*.vercel.app",
        changelog=[
            ChangelogEntry(version="0.2.0", prs=[163]),
        ],
    ),
    "vercel.proxy.region": AttributeMetadata(
        brief="Region where the request is processed",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="sfo1",
        changelog=[
            ChangelogEntry(version="0.2.0", prs=[163]),
        ],
    ),
    "vercel.proxy.response_byte_size": AttributeMetadata(
        brief="Size of the response in bytes",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=1024,
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.2.0", prs=[163]),
        ],
    ),
    "vercel.proxy.scheme": AttributeMetadata(
        brief="Protocol of the request",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="https",
        changelog=[
            ChangelogEntry(version="0.2.0", prs=[163]),
        ],
    ),
    "vercel.proxy.status_code": AttributeMetadata(
        brief="HTTP status code of the proxy request",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=200,
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.2.0", prs=[163]),
        ],
    ),
    "vercel.proxy.timestamp": AttributeMetadata(
        brief="Unix timestamp when the proxy request was made",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=1573817250172,
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.2.0", prs=[163]),
        ],
    ),
    "vercel.proxy.user_agent": AttributeMetadata(
        brief="User agent strings of the request",
        type=AttributeType.STRING_ARRAY,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=["Mozilla/5.0..."],
        changelog=[
            ChangelogEntry(version="0.2.0", prs=[163]),
        ],
    ),
    "vercel.proxy.vercel_cache": AttributeMetadata(
        brief="Cache status sent to the browser",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="REVALIDATED",
        changelog=[
            ChangelogEntry(version="0.2.0", prs=[163]),
        ],
    ),
    "vercel.proxy.vercel_id": AttributeMetadata(
        brief="Vercel-specific identifier",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="sfo1::abc123",
        changelog=[
            ChangelogEntry(version="0.2.0", prs=[163]),
        ],
    ),
    "vercel.proxy.waf_action": AttributeMetadata(
        brief="Action taken by firewall rules",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="deny",
        changelog=[
            ChangelogEntry(version="0.2.0", prs=[163]),
        ],
    ),
    "vercel.proxy.waf_rule_id": AttributeMetadata(
        brief="ID of the firewall rule that matched",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="rule_gAHz8jtSB1Gy",
        changelog=[
            ChangelogEntry(version="0.2.0", prs=[163]),
        ],
    ),
    "vercel.request_id": AttributeMetadata(
        brief="Identifier of the Vercel request",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="643af4e3-975a-4cc7-9e7a-1eda11539d90",
        changelog=[
            ChangelogEntry(version="0.2.0", prs=[163]),
        ],
    ),
    "vercel.source": AttributeMetadata(
        brief="Origin of the Vercel log (build, edge, lambda, static, external, or firewall)",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example="build",
        changelog=[
            ChangelogEntry(version="0.2.0", prs=[163]),
        ],
    ),
    "vercel.status_code": AttributeMetadata(
        brief="HTTP status code of the request (-1 means no response returned and the lambda crashed)",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        visibility=Visibility.PUBLIC,
        example=200,
        changelog=[
            ChangelogEntry(version="0.4.0", prs=[228]),
            ChangelogEntry(version="0.2.0", prs=[163]),
        ],
    ),
}

"""
A dictionary that maps each attribute's name to its metadata.
If a key is not present in this dictionary, it means that attribute is not defined in the Sentry Semantic Conventions.
"""

Attributes = TypedDict(
    "Attributes",
    {
        "ai.citations": List[str],
        "ai.completion_tokens.used": int,
        "ai.documents": List[str],
        "ai.finish_reason": str,
        "ai.frequency_penalty": float,
        "ai.function_call": str,
        "ai.generation_id": str,
        "ai.input_messages": str,
        "ai.is_search_required": bool,
        "ai.metadata": str,
        "ai.model.provider": str,
        "ai.model_id": str,
        "ai.pipeline.name": str,
        "ai.preamble": str,
        "ai.presence_penalty": float,
        "ai.prompt_tokens.used": int,
        "ai.raw_prompting": bool,
        "ai.response_format": str,
        "ai.responses": List[str],
        "ai.search_queries": List[str],
        "ai.search_results": List[str],
        "ai.seed": str,
        "ai.streaming": bool,
        "ai.tags": str,
        "ai.temperature": float,
        "ai.texts": List[str],
        "ai.tool_calls": List[str],
        "ai.tools": List[str],
        "ai.top_k": int,
        "ai.top_p": float,
        "ai.total_cost": float,
        "ai.total_tokens.used": int,
        "ai.warnings": List[str],
        "angular.version": str,
        "app.app_build": str,
        "app.app_identifier": str,
        "app.app_name": str,
        "app.app_start_time": str,
        "app.app_version": str,
        "app.build": str,
        "app.identifier": str,
        "app.in_foreground": bool,
        "app.name": str,
        "app.start_time": str,
        "app.version": str,
        "app.vitals.frames.delay.value": int,
        "app.vitals.frames.frozen.count": int,
        "app.vitals.frames.slow.count": int,
        "app.vitals.frames.total.count": int,
        "app.vitals.start.cold.value": float,
        "app.vitals.start.prewarmed": bool,
        "app.vitals.start.reason": str,
        "app.vitals.start.screen": str,
        "app.vitals.start.type": str,
        "app.vitals.start.warm.value": float,
        "app.vitals.ttfd.value": float,
        "app.vitals.ttid.value": float,
        "app_start_cold": float,
        "app_start_type": str,
        "app_start_warm": float,
        "art.gc.blocking_count": int,
        "art.gc.blocking_time": float,
        "art.gc.pre_oome_count": int,
        "art.gc.total_count": int,
        "art.gc.total_time": float,
        "art.gc.waiting_time": float,
        "art.memory.free": int,
        "art.memory.free_until_gc": int,
        "art.memory.free_until_oome": int,
        "art.memory.max": int,
        "art.memory.total": int,
        "aws.cloudwatch.logs.log_group": str,
        "aws.cloudwatch.logs.log_stream": str,
        "aws.cloudwatch.logs.url": str,
        "aws.lambda.aws_request_id": str,
        "aws.lambda.execution_duration_in_millis": float,
        "aws.lambda.function_name": str,
        "aws.lambda.function_version": str,
        "aws.lambda.invoked_arn": str,
        "aws.lambda.invoked_function_arn": str,
        "aws.lambda.remaining_time_in_millis": float,
        "aws.log.group.names": List[str],
        "aws.log.stream.names": List[str],
        "blocked_main_thread": bool,
        "browser.name": str,
        "browser.performance.navigation.activation_start": float,
        "browser.performance.time_origin": float,
        "browser.report.type": str,
        "browser.script.invoker": str,
        "browser.script.invoker_type": str,
        "browser.script.source_char_position": int,
        "browser.version": str,
        "browser.web_vital.cls.report_event": str,
        "browser.web_vital.cls.source.<key>": str,
        "browser.web_vital.cls.value": float,
        "browser.web_vital.fcp.value": float,
        "browser.web_vital.fp.value": float,
        "browser.web_vital.inp.value": float,
        "browser.web_vital.lcp.element": str,
        "browser.web_vital.lcp.id": str,
        "browser.web_vital.lcp.load_time": int,
        "browser.web_vital.lcp.render_time": int,
        "browser.web_vital.lcp.report_event": str,
        "browser.web_vital.lcp.size": int,
        "browser.web_vital.lcp.url": str,
        "browser.web_vital.lcp.value": float,
        "browser.web_vital.ttfb.request_time": float,
        "browser.web_vital.ttfb.value": float,
        "cache.hit": bool,
        "cache.item_size": int,
        "cache.key": List[str],
        "cache.operation": str,
        "cache.ttl": int,
        "cache.write": bool,
        "channel": str,
        "client.address": str,
        "client.port": int,
        "cloud.account.id": str,
        "cloud.availability_zone": str,
        "cloud.platform": str,
        "cloud.provider": str,
        "cloud.region": str,
        "cloud.resource_id": str,
        "cloudflare.d1.duration": int,
        "cloudflare.d1.query_type": str,
        "cloudflare.d1.rows_read": int,
        "cloudflare.d1.rows_written": int,
        "cloudflare.r2.bucket": str,
        "cloudflare.r2.operation": str,
        "cloudflare.r2.request.delimiter": str,
        "cloudflare.r2.request.key": str,
        "cloudflare.r2.request.part_number": int,
        "cloudflare.r2.request.prefix": str,
        "cloudflare.workflow.attempt": int,
        "cloudflare.workflow.retries.backoff": str,
        "cloudflare.workflow.retries.delay": str,
        "cloudflare.workflow.retries.limit": int,
        "cloudflare.workflow.timeout": str,
        "cls.source.<key>": str,
        "cls": float,
        "code.file.path": str,
        "code.filepath": str,
        "code.function": str,
        "code.function.name": str,
        "code.line.number": int,
        "code.lineno": int,
        "code.namespace": str,
        "connection.rtt": int,
        "connectionType": str,
        "culture.calendar": str,
        "culture.display_name": str,
        "culture.is_24_hour_format": bool,
        "culture.locale": str,
        "culture.timezone": str,
        "db.collection.name": str,
        "db.driver.name": str,
        "db.name": str,
        "db.namespace": str,
        "db.operation": str,
        "db.operation.batch.size": int,
        "db.operation.name": str,
        "db.query.parameter.<key>": str,
        "db.query.summary": str,
        "db.query.text": str,
        "db.redis.connection": str,
        "db.redis.key": str,
        "db.redis.parameters": List[str],
        "db.sql.bindings": List[str],
        "db.statement": str,
        "db.stored_procedure.name": str,
        "db.system": str,
        "db.system.name": str,
        "db.user": str,
        "device.archs": List[str],
        "device.battery_level": float,
        "device.battery_temperature": float,
        "device.boot_time": str,
        "device.brand": str,
        "device.charging": bool,
        "device.chipset": str,
        "device.class": str,
        "device.connection_type": str,
        "device.cpu_description": str,
        "device.external_free_storage": int,
        "device.external_storage_size": int,
        "device.family": str,
        "device.free_memory": int,
        "device.free_storage": int,
        "device.id": str,
        "device.locale": str,
        "device.low_memory": bool,
        "device.low_power_mode": bool,
        "device.manufacturer": str,
        "device.memory.estimated_capacity": int,
        "device.memory_size": int,
        "device.model": str,
        "device.model_id": str,
        "device.name": str,
        "device.online": bool,
        "device.orientation": str,
        "device.processor_count": int,
        "device.processor_frequency": float,
        "device.screen_density": float,
        "device.screen_dpi": int,
        "device.screen_height_pixels": int,
        "device.screen_width_pixels": int,
        "device.simulator": bool,
        "device.storage_size": int,
        "device.thermal_state": str,
        "device.timezone": str,
        "device.usable_memory": int,
        "deviceMemory": str,
        "effectiveConnectionType": str,
        "environment": str,
        "error.type": str,
        "event.id": int,
        "event.name": str,
        "exception.escaped": bool,
        "exception.message": str,
        "exception.stacktrace": str,
        "exception.type": str,
        "faas.coldstart": bool,
        "faas.cron": str,
        "faas.duration_in_ms": int,
        "faas.entry_point": str,
        "faas.identity": str,
        "faas.invocation_id": str,
        "faas.name": str,
        "faas.time": str,
        "faas.trigger": str,
        "faas.version": str,
        "fcp": float,
        "flag.evaluation.<key>": bool,
        "fp": float,
        "frames.delay": int,
        "frames.frozen": int,
        "frames.slow": int,
        "frames.total": int,
        "frames_frozen_rate": float,
        "frames_slow_rate": float,
        "fs_error": str,
        "gcp.function.context.event_id": str,
        "gcp.function.context.event_type": str,
        "gcp.function.context.id": str,
        "gcp.function.context.resource": str,
        "gcp.function.context.source": str,
        "gcp.function.context.specversion": str,
        "gcp.function.context.time": str,
        "gcp.function.context.timestamp": str,
        "gcp.function.context.type": str,
        "gcp.project.id": str,
        "gen_ai.agent.name": str,
        "gen_ai.context.utilization": float,
        "gen_ai.context.window_size": int,
        "gen_ai.conversation.id": str,
        "gen_ai.cost.input_tokens": float,
        "gen_ai.cost.output_tokens": float,
        "gen_ai.cost.total_tokens": float,
        "gen_ai.embeddings.input": str,
        "gen_ai.function_id": str,
        "gen_ai.input.messages": str,
        "gen_ai.operation.name": str,
        "gen_ai.operation.type": str,
        "gen_ai.output.messages": str,
        "gen_ai.pipeline.name": str,
        "gen_ai.prompt": str,
        "gen_ai.prompt.name": str,
        "gen_ai.provider.name": str,
        "gen_ai.request.available_tools": str,
        "gen_ai.request.frequency_penalty": float,
        "gen_ai.request.max_tokens": int,
        "gen_ai.request.messages": str,
        "gen_ai.request.model": str,
        "gen_ai.request.presence_penalty": float,
        "gen_ai.request.seed": str,
        "gen_ai.request.temperature": float,
        "gen_ai.request.top_k": int,
        "gen_ai.request.top_p": float,
        "gen_ai.response.finish_reasons": str,
        "gen_ai.response.id": str,
        "gen_ai.response.model": str,
        "gen_ai.response.streaming": bool,
        "gen_ai.response.text": str,
        "gen_ai.response.time_to_first_chunk": float,
        "gen_ai.response.time_to_first_token": float,
        "gen_ai.response.tokens_per_second": float,
        "gen_ai.response.tool_calls": str,
        "gen_ai.system": str,
        "gen_ai.system.message": str,
        "gen_ai.system_instructions": str,
        "gen_ai.tool.call.arguments": str,
        "gen_ai.tool.call.result": str,
        "gen_ai.tool.definitions": str,
        "gen_ai.tool.description": str,
        "gen_ai.tool.input": str,
        "gen_ai.tool.message": str,
        "gen_ai.tool.name": str,
        "gen_ai.tool.output": str,
        "gen_ai.tool.type": str,
        "gen_ai.usage.cache_creation.input_tokens": int,
        "gen_ai.usage.cache_read.input_tokens": int,
        "gen_ai.usage.completion_tokens": int,
        "gen_ai.usage.input_tokens": int,
        "gen_ai.usage.input_tokens.cache_write": int,
        "gen_ai.usage.input_tokens.cached": int,
        "gen_ai.usage.output_tokens": int,
        "gen_ai.usage.output_tokens.reasoning": int,
        "gen_ai.usage.prompt_tokens": int,
        "gen_ai.usage.reasoning.output_tokens": int,
        "gen_ai.usage.total_tokens": int,
        "graphql.document": str,
        "graphql.operation.name": str,
        "graphql.operation.type": str,
        "hardwareConcurrency": str,
        "http.client_ip": str,
        "http.decoded_response_content_length": int,
        "http.flavor": str,
        "http.fragment": str,
        "http.host": str,
        "http.method": str,
        "http.query": str,
        "http.request.body.data": str,
        "http.request.connect_start": float,
        "http.request.connection_end": float,
        "http.request.domain_lookup_end": float,
        "http.request.domain_lookup_start": float,
        "http.request.fetch_start": float,
        "http.request.header.<key>": List[str],
        "http.request.method": str,
        "http.request.redirect_end": float,
        "http.request.redirect_start": float,
        "http.request.request_start": float,
        "http.request.resend_count": int,
        "http.request.response_end": float,
        "http.request.response_start": float,
        "http.request.secure_connection_start": float,
        "http.request.time_to_first_byte": float,
        "http.request.worker_start": float,
        "http.request_method": str,
        "http.response.body.size": int,
        "http.response.header.<key>": List[str],
        "http.response.header.content-length": str,
        "http.response.size": int,
        "http.response.status_code": int,
        "http.response_content_length": int,
        "http.response_transfer_size": int,
        "http.route": str,
        "http.scheme": str,
        "http.server.request.time_in_queue": float,
        "http.server_name": str,
        "http.status_code": int,
        "http.target": str,
        "http.url": str,
        "http.user_agent": str,
        "id": str,
        "inp": float,
        "jsonrpc.protocol.version": str,
        "jsonrpc.request.id": str,
        "jvm.gc.action": str,
        "jvm.gc.name": str,
        "jvm.memory.pool.name": str,
        "jvm.memory.type": str,
        "jvm.thread.daemon": bool,
        "jvm.thread.state": str,
        "lcp.element": str,
        "lcp.id": str,
        "lcp.loadTime": int,
        "lcp.renderTime": int,
        "lcp.size": int,
        "lcp.url": str,
        "lcp": float,
        "logger.name": str,
        "mcp.cancelled.reason": str,
        "mcp.cancelled.request_id": str,
        "mcp.client.name": str,
        "mcp.client.title": str,
        "mcp.client.version": str,
        "mcp.lifecycle.phase": str,
        "mcp.logging.data_type": str,
        "mcp.logging.level": str,
        "mcp.logging.logger": str,
        "mcp.logging.message": str,
        "mcp.method.name": str,
        "mcp.progress.current": int,
        "mcp.progress.message": str,
        "mcp.progress.percentage": float,
        "mcp.progress.token": str,
        "mcp.progress.total": int,
        "mcp.prompt.name": str,
        "mcp.prompt.result.description": str,
        "mcp.prompt.result.message_content": str,
        "mcp.prompt.result.message_count": int,
        "mcp.prompt.result.message_role": str,
        "mcp.protocol.ready": int,
        "mcp.protocol.version": str,
        "mcp.request.argument.<key>": str,
        "mcp.request.argument.name": str,
        "mcp.request.argument.uri": str,
        "mcp.request.id": str,
        "mcp.resource.protocol": str,
        "mcp.resource.uri": str,
        "mcp.server.name": str,
        "mcp.server.title": str,
        "mcp.server.version": str,
        "mcp.session.id": str,
        "mcp.tool.name": str,
        "mcp.tool.result.content": str,
        "mcp.tool.result.content_count": int,
        "mcp.tool.result.is_error": bool,
        "mcp.transport": str,
        "mdc.<key>": str,
        "messaging.batch.message_count": int,
        "messaging.destination.connection": str,
        "messaging.destination.name": str,
        "messaging.message.body.size": int,
        "messaging.message.envelope.size": int,
        "messaging.message.id": str,
        "messaging.message.receive.latency": int,
        "messaging.message.retry.count": int,
        "messaging.operation.name": str,
        "messaging.operation.type": str,
        "messaging.system": str,
        "method": str,
        "middleware.name": str,
        "navigation.type": str,
        "nel.elapsed_time": int,
        "nel.phase": str,
        "nel.referrer": str,
        "nel.sampling_function": float,
        "nel.type": str,
        "net.host.ip": str,
        "net.host.name": str,
        "net.host.port": int,
        "net.peer.ip": str,
        "net.peer.name": str,
        "net.peer.port": int,
        "net.protocol.name": str,
        "net.protocol.version": str,
        "net.sock.family": str,
        "net.sock.host.addr": str,
        "net.sock.host.port": int,
        "net.sock.peer.addr": str,
        "net.sock.peer.name": str,
        "net.sock.peer.port": int,
        "net.transport": str,
        "network.connection.effective_type": str,
        "network.connection.rtt": int,
        "network.connection.type": str,
        "network.local.address": str,
        "network.local.port": int,
        "network.peer.address": str,
        "network.peer.port": int,
        "network.protocol.name": str,
        "network.protocol.version": str,
        "network.transport": str,
        "network.type": str,
        "os.build": str,
        "os.build_id": str,
        "os.description": str,
        "os.kernel_version": str,
        "os.name": str,
        "os.raw_description": str,
        "os.rooted": bool,
        "os.theme": str,
        "os.type": str,
        "os.version": str,
        "otel.scope.name": str,
        "otel.scope.version": str,
        "otel.status_code": str,
        "otel.status_description": str,
        "params.<key>": str,
        "performance.activationStart": float,
        "performance.timeOrigin": float,
        "previous_route": str,
        "process.command_args": List[str],
        "process.executable.name": str,
        "process.pid": int,
        "process.runtime.description": str,
        "process.runtime.engine.name": str,
        "process.runtime.engine.version": str,
        "process.runtime.name": str,
        "process.runtime.version": str,
        "query.<key>": str,
        "react.version": str,
        "release": str,
        "remix.action_form_data.<key>": str,
        "replay_id": str,
        "resource.deployment.environment": str,
        "resource.deployment.environment.name": str,
        "resource.render_blocking_status": str,
        "route": str,
        "rpc.grpc.status_code": int,
        "rpc.method": str,
        "rpc.response.status_code": str,
        "rpc.service": str,
        "runtime.build": str,
        "runtime.name": str,
        "runtime.raw_description": str,
        "runtime.version": str,
        "score.<key>": float,
        "score.ratio.<key>": float,
        "score.total": float,
        "score.weight.<key>": float,
        "sentry.action": str,
        "sentry.browser.name": str,
        "sentry.browser.version": str,
        "sentry.cancellation_reason": str,
        "sentry.category": str,
        "sentry.client_sample_rate": float,
        "sentry.description": str,
        "sentry.dist": str,
        "sentry.domain": str,
        "sentry.dsc.environment": str,
        "sentry.dsc.project_id": str,
        "sentry.dsc.public_key": str,
        "sentry.dsc.release": str,
        "sentry.dsc.sample_rate": str,
        "sentry.dsc.sampled": bool,
        "sentry.dsc.trace_id": str,
        "sentry.dsc.transaction": str,
        "sentry.environment": str,
        "sentry.exclusive_time": float,
        "sentry.graphql.operation": str,
        "sentry.group": str,
        "sentry.http.prefetch": bool,
        "sentry.idle_span_finish_reason": str,
        "sentry.is_remote": bool,
        "sentry.kind": str,
        "sentry.main_thread": bool,
        "sentry.message.parameter.<key>": str,
        "sentry.message.template": str,
        "sentry.mobile": bool,
        "sentry.module.<key>": str,
        "sentry.nextjs.ssr.function.route": str,
        "sentry.nextjs.ssr.function.type": str,
        "sentry.normalized_db_query": str,
        "sentry.normalized_db_query.hash": str,
        "sentry.normalized_description": str,
        "sentry.observed_timestamp_nanos": str,
        "sentry.op": str,
        "sentry.origin": str,
        "sentry.platform": str,
        "sentry.profile_id": str,
        "sentry.profiler_id": str,
        "sentry.release": str,
        "sentry.replay_id": str,
        "sentry.replay_is_buffering": bool,
        "sentry.report_event": str,
        "sentry.sdk.integrations": List[str],
        "sentry.sdk.name": str,
        "sentry.sdk.version": str,
        "sentry.segment.id": str,
        "sentry.segment.name": str,
        "sentry.segment_id": str,
        "sentry.server_sample_rate": float,
        "sentry.source": str,
        "sentry.span.source": str,
        "sentry.status.message": str,
        "sentry.status_code": int,
        "sentry.timestamp.sequence": int,
        "sentry.trace.parent_span_id": str,
        "sentry.transaction": str,
        "sentry.user.email": str,
        "sentry.user.geo.city": str,
        "sentry.user.geo.country_code": str,
        "sentry.user.geo.region": str,
        "sentry.user.geo.subdivision": str,
        "sentry.user.id": str,
        "sentry.user.ip": str,
        "sentry.user.username": str,
        "server.address": str,
        "server.port": int,
        "service.name": str,
        "service.version": str,
        "session.id": str,
        "stall_percentage": float,
        "stall_total_time": float,
        "state.type": str,
        "thread.id": int,
        "thread.name": str,
        "timber.tag": str,
        "time_to_full_display": float,
        "time_to_initial_display": float,
        "transaction": str,
        "trpc.procedure_path": str,
        "trpc.procedure_type": str,
        "ttfb.requestTime": float,
        "ttfb": float,
        "type": str,
        "ui.component_name": str,
        "ui.contributes_to_ttfd": bool,
        "ui.contributes_to_ttid": bool,
        "ui.element.height": int,
        "ui.element.id": str,
        "ui.element.identifier": str,
        "ui.element.load_time": float,
        "ui.element.paint_type": str,
        "ui.element.render_time": float,
        "ui.element.type": str,
        "ui.element.url": str,
        "ui.element.width": int,
        "url.domain": str,
        "url.fragment": str,
        "url.full": str,
        "url.path": str,
        "url.path.parameter.<key>": str,
        "url.port": int,
        "url.query": str,
        "url.scheme": str,
        "url.template": str,
        "url": str,
        "user.email": str,
        "user.full_name": str,
        "user.geo.city": str,
        "user.geo.country_code": str,
        "user.geo.region": str,
        "user.geo.subdivision": str,
        "user.hash": str,
        "user.id": str,
        "user.ip_address": str,
        "user.name": str,
        "user.roles": List[str],
        "user_agent.original": str,
        "vercel.branch": str,
        "vercel.build_id": str,
        "vercel.deployment_id": str,
        "vercel.destination": str,
        "vercel.edge_type": str,
        "vercel.entrypoint": str,
        "vercel.execution_region": str,
        "vercel.id": str,
        "vercel.ja3_digest": str,
        "vercel.ja4_digest": str,
        "vercel.log_type": str,
        "vercel.path": str,
        "vercel.project_id": str,
        "vercel.project_name": str,
        "vercel.proxy.cache_id": str,
        "vercel.proxy.client_ip": str,
        "vercel.proxy.host": str,
        "vercel.proxy.lambda_region": str,
        "vercel.proxy.method": str,
        "vercel.proxy.path": str,
        "vercel.proxy.path_type": str,
        "vercel.proxy.path_type_variant": str,
        "vercel.proxy.referer": str,
        "vercel.proxy.region": str,
        "vercel.proxy.response_byte_size": int,
        "vercel.proxy.scheme": str,
        "vercel.proxy.status_code": int,
        "vercel.proxy.timestamp": int,
        "vercel.proxy.user_agent": List[str],
        "vercel.proxy.vercel_cache": str,
        "vercel.proxy.vercel_id": str,
        "vercel.proxy.waf_action": str,
        "vercel.proxy.waf_rule_id": str,
        "vercel.request_id": str,
        "vercel.source": str,
        "vercel.status_code": int,
    },
    total=False,
)
"""TypedDict representing a collection of attributes, including deprecated and non-deprecated ones."""

__all__ = [
    "ATTRIBUTE_METADATA",
    "Attributes",
    "ATTRIBUTE_NAMES",
]
