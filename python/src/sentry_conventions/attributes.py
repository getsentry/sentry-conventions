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


class IsPii(Enum):
    TRUE = "true"
    FALSE = "false"
    MAYBE = "maybe"


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

    has_dynamic_suffix: Optional[bool] = None
    """If an attribute has a dynamic suffix, for example http.response.header.<key> where <key> is dynamic"""

    example: Optional[AttributeValue] = None
    """An example value of the attribute"""

    deprecation: Optional[DeprecationInfo] = None
    """If an attribute was deprecated, and what it was replaced with"""

    aliases: Optional[List[str]] = None
    """If there are attributes that alias to this attribute"""

    sdks: Optional[List[str]] = None
    """If an attribute is SDK specific, list the SDKs that use this attribute. This is not an exhaustive list, there might be SDKs that send this attribute that are is not documented here."""


class _AttributeNamesMeta(type):
    _deprecated_names = {
        "AI_COMPLETION_TOKENS_USED",
        "AI_FINISH_REASON",
        "AI_FREQUENCY_PENALTY",
        "AI_FUNCTION_CALL",
        "AI_GENERATION_ID",
        "AI_INPUT_MESSAGES",
        "AI_MODEL_PROVIDER",
        "AI_MODEL_ID",
        "AI_PIPELINE_NAME",
        "AI_PRESENCE_PENALTY",
        "AI_PROMPT_TOKENS_USED",
        "AI_RESPONSES",
        "AI_SEED",
        "AI_STREAMING",
        "AI_TEMPERATURE",
        "AI_TOOL_CALLS",
        "AI_TOOLS",
        "AI_TOP_K",
        "AI_TOP_P",
        "AI_TOTAL_TOKENS_USED",
        "CODE_FILEPATH",
        "CODE_FUNCTION",
        "CODE_LINENO",
        "CODE_NAMESPACE",
        "DB_NAME",
        "DB_OPERATION",
        "DB_SQL_BINDINGS",
        "DB_STATEMENT",
        "DB_SYSTEM",
        "ENVIRONMENT",
        "FS_ERROR",
        "GEN_AI_PROMPT",
        "GEN_AI_REQUEST_AVAILABLE_TOOLS",
        "GEN_AI_REQUEST_MESSAGES",
        "GEN_AI_RESPONSE_TEXT",
        "GEN_AI_RESPONSE_TOOL_CALLS",
        "GEN_AI_SYSTEM",
        "GEN_AI_SYSTEM_MESSAGE",
        "GEN_AI_TOOL_INPUT",
        "GEN_AI_TOOL_MESSAGE",
        "GEN_AI_TOOL_OUTPUT",
        "GEN_AI_USAGE_COMPLETION_TOKENS",
        "GEN_AI_USAGE_PROMPT_TOKENS",
        "HTTP_CLIENT_IP",
        "HTTP_FLAVOR",
        "HTTP_HOST",
        "HTTP_METHOD",
        "HTTP_RESPONSE_CONTENT_LENGTH",
        "HTTP_RESPONSE_TRANSFER_SIZE",
        "HTTP_SCHEME",
        "HTTP_SERVER_NAME",
        "HTTP_STATUS_CODE",
        "HTTP_TARGET",
        "HTTP_URL",
        "HTTP_USER_AGENT",
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
        "QUERY_KEY",
        "RELEASE",
        "REPLAY_ID",
        "RESOURCE_DEPLOYMENT_ENVIRONMENT_NAME",
        "ROUTE",
        "SENTRY_BROWSER_NAME",
        "SENTRY_BROWSER_VERSION",
        "_SENTRY_SEGMENT_ID",
        "TRANSACTION",
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
    Example: ["document1.txt","document2.pdf"]
    """

    # Path: model/attributes/ai/ai__finish_reason.json
    AI_FINISH_REASON: Literal["ai.finish_reason"] = "ai.finish_reason"
    """The reason why the model stopped generating.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Aliases: gen_ai.response.finish_reasons
    DEPRECATED: Use gen_ai.response.finish_reason instead
    Example: "COMPLETE"
    """

    # Path: model/attributes/ai/ai__frequency_penalty.json
    AI_FREQUENCY_PENALTY: Literal["ai.frequency_penalty"] = "ai.frequency_penalty"
    """Used to reduce repetitiveness of generated tokens. The higher the value, the stronger a penalty is applied to previously present tokens, proportional to how many times they have already appeared in the prompt or prior generation.

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
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
    Aliases: gen_ai.tool.name
    DEPRECATED: Use gen_ai.tool.name instead
    Example: "function_name"
    """

    # Path: model/attributes/ai/ai__generation_id.json
    AI_GENERATION_ID: Literal["ai.generation_id"] = "ai.generation_id"
    """Unique identifier for the completion.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
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
    Aliases: gen_ai.request.messages
    DEPRECATED: Use gen_ai.request.messages instead
    Example: "[{\"role\": \"user\", \"message\": \"hello\"}]"
    """

    # Path: model/attributes/ai/ai__is_search_required.json
    AI_IS_SEARCH_REQUIRED: Literal["ai.is_search_required"] = "ai.is_search_required"
    """Boolean indicating if the model needs to perform a search.

    Type: bool
    Contains PII: false
    Defined in OTEL: No
    Example: false
    """

    # Path: model/attributes/ai/ai__metadata.json
    AI_METADATA: Literal["ai.metadata"] = "ai.metadata"
    """Extra metadata passed to an AI pipeline step.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Example: "{\"user_id\": 123, \"session_id\": \"abc123\"}"
    """

    # Path: model/attributes/ai/ai__model__provider.json
    AI_MODEL_PROVIDER: Literal["ai.model.provider"] = "ai.model.provider"
    """The provider of the model.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
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
    Example: "You are now a clown."
    """

    # Path: model/attributes/ai/ai__presence_penalty.json
    AI_PRESENCE_PENALTY: Literal["ai.presence_penalty"] = "ai.presence_penalty"
    """Used to reduce repetitiveness of generated tokens. Similar to frequency_penalty, except that this penalty is applied equally to all tokens that have already appeared, regardless of their exact frequencies.

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
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
    Aliases: gen_ai.usage.prompt_tokens, gen_ai.usage.input_tokens
    DEPRECATED: Use gen_ai.usage.input_tokens instead
    Example: 20
    """

    # Path: model/attributes/ai/ai__raw_prompting.json
    AI_RAW_PROMPTING: Literal["ai.raw_prompting"] = "ai.raw_prompting"
    """When enabled, the user’s prompt will be sent to the model without any pre-processing.

    Type: bool
    Contains PII: false
    Defined in OTEL: No
    Example: true
    """

    # Path: model/attributes/ai/ai__response_format.json
    AI_RESPONSE_FORMAT: Literal["ai.response_format"] = "ai.response_format"
    """For an AI model call, the format of the response

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Example: "json_object"
    """

    # Path: model/attributes/ai/ai__responses.json
    AI_RESPONSES: Literal["ai.responses"] = "ai.responses"
    """The response messages sent back by the AI model.

    Type: List[str]
    Contains PII: maybe
    Defined in OTEL: No
    DEPRECATED: Use gen_ai.response.text instead
    Example: ["hello","world"]
    """

    # Path: model/attributes/ai/ai__search_queries.json
    AI_SEARCH_QUERIES: Literal["ai.search_queries"] = "ai.search_queries"
    """Queries used to search for relevant context or documents.

    Type: List[str]
    Contains PII: true
    Defined in OTEL: No
    Example: ["climate change effects","renewable energy"]
    """

    # Path: model/attributes/ai/ai__search_results.json
    AI_SEARCH_RESULTS: Literal["ai.search_results"] = "ai.search_results"
    """Results returned from search queries for context.

    Type: List[str]
    Contains PII: true
    Defined in OTEL: No
    Example: ["search_result_1, search_result_2"]
    """

    # Path: model/attributes/ai/ai__seed.json
    AI_SEED: Literal["ai.seed"] = "ai.seed"
    """The seed, ideally models given the same seed and same other parameters will produce the exact same output.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Aliases: gen_ai.request.seed
    DEPRECATED: Use gen_ai.request.seed instead
    Example: "1234567890"
    """

    # Path: model/attributes/ai/ai__streaming.json
    AI_STREAMING: Literal["ai.streaming"] = "ai.streaming"
    """Whether the request was streamed back.

    Type: bool
    Contains PII: false
    Defined in OTEL: No
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
    Example: "{\"executed_function\": \"add_integers\"}"
    """

    # Path: model/attributes/ai/ai__temperature.json
    AI_TEMPERATURE: Literal["ai.temperature"] = "ai.temperature"
    """For an AI model call, the temperature parameter. Temperature essentially means how random the output will be.

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
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
    Example: ["Hello, how are you?","What is the capital of France?"]
    """

    # Path: model/attributes/ai/ai__tool_calls.json
    AI_TOOL_CALLS: Literal["ai.tool_calls"] = "ai.tool_calls"
    """For an AI model call, the tool calls that were made.

    Type: List[str]
    Contains PII: true
    Defined in OTEL: No
    DEPRECATED: Use gen_ai.response.tool_calls instead
    Example: ["tool_call_1","tool_call_2"]
    """

    # Path: model/attributes/ai/ai__tools.json
    AI_TOOLS: Literal["ai.tools"] = "ai.tools"
    """For an AI model call, the functions that are available

    Type: List[str]
    Contains PII: maybe
    Defined in OTEL: No
    DEPRECATED: Use gen_ai.request.available_tools instead
    Example: ["function_1","function_2"]
    """

    # Path: model/attributes/ai/ai__top_k.json
    AI_TOP_K: Literal["ai.top_k"] = "ai.top_k"
    """Limits the model to only consider the K most likely next tokens, where K is an integer (e.g., top_k=20 means only the 20 highest probability tokens are considered).

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
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
    Example: 12.34
    """

    # Path: model/attributes/ai/ai__total_tokens__used.json
    AI_TOTAL_TOKENS_USED: Literal["ai.total_tokens.used"] = "ai.total_tokens.used"
    """The total number of tokens used to process the prompt.

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
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
    Example: ["Token limit exceeded"]
    """

    # Path: model/attributes/app_start_type.json
    APP_START_TYPE: Literal["app_start_type"] = "app_start_type"
    """Mobile app start variant. Either cold or warm.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Example: "cold"
    """

    # Path: model/attributes/blocked_main_thread.json
    BLOCKED_MAIN_THREAD: Literal["blocked_main_thread"] = "blocked_main_thread"
    """Whether the main thread was blocked by the span.

    Type: bool
    Contains PII: false
    Defined in OTEL: No
    Example: true
    """

    # Path: model/attributes/browser/browser__name.json
    BROWSER_NAME: Literal["browser.name"] = "browser.name"
    """The name of the browser.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Aliases: sentry.browser.name
    Example: "Chrome"
    """

    # Path: model/attributes/browser/browser__report__type.json
    BROWSER_REPORT_TYPE: Literal["browser.report.type"] = "browser.report.type"
    """A browser report sent via reporting API..

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Example: "network-error"
    """

    # Path: model/attributes/browser/browser__script__invoker.json
    BROWSER_SCRIPT_INVOKER: Literal["browser.script.invoker"] = "browser.script.invoker"
    """How a script was called in the browser.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
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
    Example: 678
    """

    # Path: model/attributes/browser/browser__version.json
    BROWSER_VERSION: Literal["browser.version"] = "browser.version"
    """The version of the browser.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Aliases: sentry.browser.version
    Example: "120.0.6099.130"
    """

    # Path: model/attributes/cache/cache__hit.json
    CACHE_HIT: Literal["cache.hit"] = "cache.hit"
    """If the cache was hit during this span.

    Type: bool
    Contains PII: false
    Defined in OTEL: No
    Example: true
    """

    # Path: model/attributes/cache/cache__item_size.json
    CACHE_ITEM_SIZE: Literal["cache.item_size"] = "cache.item_size"
    """The size of the requested item in the cache. In bytes.

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Example: 58
    """

    # Path: model/attributes/cache/cache__key.json
    CACHE_KEY: Literal["cache.key"] = "cache.key"
    """The key of the cache accessed.

    Type: List[str]
    Contains PII: maybe
    Defined in OTEL: No
    Example: ["my-cache-key","my-other-cache-key"]
    """

    # Path: model/attributes/cache/cache__operation.json
    CACHE_OPERATION: Literal["cache.operation"] = "cache.operation"
    """The operation being performed on the cache.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Example: "get"
    """

    # Path: model/attributes/cache/cache__ttl.json
    CACHE_TTL: Literal["cache.ttl"] = "cache.ttl"
    """The ttl of the cache in seconds

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Example: 120
    """

    # Path: model/attributes/channel.json
    CHANNEL: Literal["channel"] = "channel"
    """The channel name that is being used.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Example: "mail"
    """

    # Path: model/attributes/client/client__address.json
    CLIENT_ADDRESS: Literal["client.address"] = "client.address"
    """Client address - domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.

    Type: str
    Contains PII: true
    Defined in OTEL: Yes
    Aliases: http.client_ip
    Example: "example.com"
    """

    # Path: model/attributes/client/client__port.json
    CLIENT_PORT: Literal["client.port"] = "client.port"
    """Client port number.

    Type: int
    Contains PII: maybe
    Defined in OTEL: Yes
    Example: 5432
    """

    # Path: model/attributes/cloudflare/cloudflare__d1__duration.json
    CLOUDFLARE_D1_DURATION: Literal["cloudflare.d1.duration"] = "cloudflare.d1.duration"
    """The duration of a Cloudflare D1 operation.

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Example: 543
    """

    # Path: model/attributes/cloudflare/cloudflare__d1__rows_read.json
    CLOUDFLARE_D1_ROWS_READ: Literal["cloudflare.d1.rows_read"] = (
        "cloudflare.d1.rows_read"
    )
    """The number of rows read in a Cloudflare D1 operation.

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
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
    Example: 12
    """

    # Path: model/attributes/code/code__file__path.json
    CODE_FILE_PATH: Literal["code.file.path"] = "code.file.path"
    """The source code file name that identifies the code unit as uniquely as possible (preferably an absolute file path).

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Aliases: code.filepath
    Example: "/app/myapplication/http/handler/server.py"
    """

    # Path: model/attributes/code/code__filepath.json
    CODE_FILEPATH: Literal["code.filepath"] = "code.filepath"
    """The source code file name that identifies the code unit as uniquely as possible (preferably an absolute file path).

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
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
    Aliases: code.function.name
    DEPRECATED: Use code.function.name instead
    Example: "server_request"
    """

    # Path: model/attributes/code/code__function__name.json
    CODE_FUNCTION_NAME: Literal["code.function.name"] = "code.function.name"
    """The method or function name, or equivalent (usually rightmost part of the code unit's name).

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Aliases: code.function
    Example: "server_request"
    """

    # Path: model/attributes/code/code__line__number.json
    CODE_LINE_NUMBER: Literal["code.line.number"] = "code.line.number"
    """The line number in code.filepath best representing the operation. It SHOULD point within the code unit named in code.function

    Type: int
    Contains PII: maybe
    Defined in OTEL: Yes
    Aliases: code.lineno
    Example: 42
    """

    # Path: model/attributes/code/code__lineno.json
    CODE_LINENO: Literal["code.lineno"] = "code.lineno"
    """The line number in code.filepath best representing the operation. It SHOULD point within the code unit named in code.function

    Type: int
    Contains PII: maybe
    Defined in OTEL: Yes
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
    DEPRECATED: Use code.function.name instead - code.function.name should include the namespace.
    Example: "http.handler"
    """

    # Path: model/attributes/culture/culture__calendar.json
    CULTURE_CALENDAR: Literal["culture.calendar"] = "culture.calendar"
    """The calendar system used by the culture.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Example: "GregorianCalendar"
    """

    # Path: model/attributes/culture/culture__display_name.json
    CULTURE_DISPLAY_NAME: Literal["culture.display_name"] = "culture.display_name"
    """Human readable name of the culture.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
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
    Example: true
    """

    # Path: model/attributes/culture/culture__locale.json
    CULTURE_LOCALE: Literal["culture.locale"] = "culture.locale"
    """The locale identifier following RFC 4646.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Example: "en-US"
    """

    # Path: model/attributes/culture/culture__timezone.json
    CULTURE_TIMEZONE: Literal["culture.timezone"] = "culture.timezone"
    """The timezone of the culture, as a geographic timezone identifier.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Example: "Europe/Vienna"
    """

    # Path: model/attributes/db/db__collection__name.json
    DB_COLLECTION_NAME: Literal["db.collection.name"] = "db.collection.name"
    """The name of a collection (table, container) within the database.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Example: "users"
    """

    # Path: model/attributes/db/db__name.json
    DB_NAME: Literal["db.name"] = "db.name"
    """The name of the database being accessed.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
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
    Aliases: db.name
    Example: "customers"
    """

    # Path: model/attributes/db/db__operation.json
    DB_OPERATION: Literal["db.operation"] = "db.operation"
    """The name of the operation being executed.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Aliases: db.operation.name
    DEPRECATED: Use db.operation.name instead
    Example: "SELECT"
    """

    # Path: model/attributes/db/db__operation__name.json
    DB_OPERATION_NAME: Literal["db.operation.name"] = "db.operation.name"
    """The name of the operation being executed.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Aliases: db.operation
    Example: "SELECT"
    """

    # Path: model/attributes/db/db__query__parameter__[key].json
    DB_QUERY_PARAMETER_KEY: Literal["db.query.parameter.<key>"] = (
        "db.query.parameter.<key>"
    )
    """A query parameter used in db.query.text, with <key> being the parameter name, and the attribute value being a string representation of the parameter value.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Has Dynamic Suffix: true
    Example: "db.query.parameter.foo='123'"
    """

    # Path: model/attributes/db/db__query__summary.json
    DB_QUERY_SUMMARY: Literal["db.query.summary"] = "db.query.summary"
    """A shortened representation of operation(s) in the full query. This attribute must be low-cardinality and should only contain the operation table names.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Example: "SELECT users;"
    """

    # Path: model/attributes/db/db__query__text.json
    DB_QUERY_TEXT: Literal["db.query.text"] = "db.query.text"
    """The database parameterized query being executed. Any parameter values (filters, insertion values, etc) should be replaced with parameter placeholders. If applicable, use `db.query.parameter.<key>` to add the parameter value.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Aliases: db.statement
    Example: "SELECT * FROM users WHERE id = $1"
    """

    # Path: model/attributes/db/db__redis__connection.json
    DB_REDIS_CONNECTION: Literal["db.redis.connection"] = "db.redis.connection"
    """The redis connection name.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Example: "my-redis-instance"
    """

    # Path: model/attributes/db/db__redis__parameters.json
    DB_REDIS_PARAMETERS: Literal["db.redis.parameters"] = "db.redis.parameters"
    """The array of command parameters given to a redis command.

    Type: List[str]
    Contains PII: maybe
    Defined in OTEL: No
    Example: ["test","*"]
    """

    # Path: model/attributes/db/db__sql__bindings.json
    DB_SQL_BINDINGS: Literal["db.sql.bindings"] = "db.sql.bindings"
    """The array of query bindings.

    Type: List[str]
    Contains PII: maybe
    Defined in OTEL: No
    DEPRECATED: Use db.query.parameter.<key> instead - Instead of adding every binding in the db.sql.bindings attribute, add them as individual entires with db.query.parameter.<key>.
    Example: ["1","foo"]
    """

    # Path: model/attributes/db/db__statement.json
    DB_STATEMENT: Literal["db.statement"] = "db.statement"
    """The database statement being executed.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Aliases: db.query.text
    DEPRECATED: Use db.query.text instead
    Example: "SELECT * FROM users"
    """

    # Path: model/attributes/db/db__system.json
    DB_SYSTEM: Literal["db.system"] = "db.system"
    """An identifier for the database management system (DBMS) product being used. See [OpenTelemetry docs](https://github.com/open-telemetry/semantic-conventions/blob/main/docs/database/database-spans.md#notes-and-well-known-identifiers-for-dbsystem) for a list of well-known identifiers.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
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
    Aliases: db.system
    Example: "postgresql"
    """

    # Path: model/attributes/db/db__user.json
    DB_USER: Literal["db.user"] = "db.user"
    """The database user.

    Type: str
    Contains PII: true
    Defined in OTEL: Yes
    Example: "fancy_user"
    """

    # Path: model/attributes/device/device__brand.json
    DEVICE_BRAND: Literal["device.brand"] = "device.brand"
    """The brand of the device.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Example: "Apple"
    """

    # Path: model/attributes/device/device__family.json
    DEVICE_FAMILY: Literal["device.family"] = "device.family"
    """The family of the device.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Example: "iPhone"
    """

    # Path: model/attributes/device/device__model.json
    DEVICE_MODEL: Literal["device.model"] = "device.model"
    """The model of the device.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Example: "iPhone 15 Pro Max"
    """

    # Path: model/attributes/environment.json
    ENVIRONMENT: Literal["environment"] = "environment"
    """The sentry environment.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
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
    Example: "timeout"
    """

    # Path: model/attributes/event/event__id.json
    EVENT_ID: Literal["event.id"] = "event.id"
    """The unique identifier for this event (log record)

    Type: int
    Contains PII: false
    Defined in OTEL: No
    Example: 1234567890
    """

    # Path: model/attributes/event/event__name.json
    EVENT_NAME: Literal["event.name"] = "event.name"
    """The name that uniquely identifies this event (log record)

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Example: "Process Payload"
    """

    # Path: model/attributes/exception/exception__escaped.json
    EXCEPTION_ESCAPED: Literal["exception.escaped"] = "exception.escaped"
    """SHOULD be set to true if the exception event is recorded at a point where it is known that the exception is escaping the scope of the span.

    Type: bool
    Contains PII: false
    Defined in OTEL: Yes
    Example: true
    """

    # Path: model/attributes/exception/exception__message.json
    EXCEPTION_MESSAGE: Literal["exception.message"] = "exception.message"
    """The error message.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Example: "ENOENT: no such file or directory"
    """

    # Path: model/attributes/exception/exception__stacktrace.json
    EXCEPTION_STACKTRACE: Literal["exception.stacktrace"] = "exception.stacktrace"
    """A stacktrace as a string in the natural representation for the language runtime. The representation is to be determined and documented by each language SIG.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Example: "Exception in thread \"main\" java.lang.RuntimeException: Test exception\n at com.example.GenerateTrace.methodB(GenerateTrace.java:13)\n at com.example.GenerateTrace.methodA(GenerateTrace.java:9)\n at com.example.GenerateTrace.main(GenerateTrace.java:5)"
    """

    # Path: model/attributes/exception/exception__type.json
    EXCEPTION_TYPE: Literal["exception.type"] = "exception.type"
    """The type of the exception (its fully-qualified class name, if applicable). The dynamic type of the exception should be preferred over the static type in languages that support it.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Example: "OSError"
    """

    # Path: model/attributes/faas/faas__coldstart.json
    FAAS_COLDSTART: Literal["faas.coldstart"] = "faas.coldstart"
    """A boolean that is true if the serverless function is executed for the first time (aka cold-start).

    Type: bool
    Contains PII: false
    Defined in OTEL: Yes
    Example: true
    """

    # Path: model/attributes/faas/faas__cron.json
    FAAS_CRON: Literal["faas.cron"] = "faas.cron"
    """A string containing the schedule period as Cron Expression.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Example: "0/5 * * * ? *"
    """

    # Path: model/attributes/faas/faas__time.json
    FAAS_TIME: Literal["faas.time"] = "faas.time"
    """A string containing the function invocation time in the ISO 8601 format expressed in UTC.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Example: "2020-01-23T13:47:06Z"
    """

    # Path: model/attributes/faas/faas__trigger.json
    FAAS_TRIGGER: Literal["faas.trigger"] = "faas.trigger"
    """Type of the trigger which caused this function invocation.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Example: "timer"
    """

    # Path: model/attributes/flag/flag__evaluation__[key].json
    FLAG_EVALUATION_KEY: Literal["flag.evaluation.<key>"] = "flag.evaluation.<key>"
    """An instance of a feature flag evaluation. The value of this attribute is the boolean representing the evaluation result. The <key> suffix is the name of the feature flag.

    Type: bool
    Contains PII: false
    Defined in OTEL: No
    Has Dynamic Suffix: true
    Example: "flag.evaluation.is_new_ui=true"
    """

    # Path: model/attributes/frames/frames__delay.json
    FRAMES_DELAY: Literal["frames.delay"] = "frames.delay"
    """The sum of all delayed frame durations in seconds during the lifetime of the span. For more information see [frames delay](https://develop.sentry.dev/sdk/performance/frames-delay/).

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Example: 5
    """

    # Path: model/attributes/frames/frames__frozen.json
    FRAMES_FROZEN: Literal["frames.frozen"] = "frames.frozen"
    """The number of frozen frames rendered during the lifetime of the span.

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Example: 3
    """

    # Path: model/attributes/frames/frames__slow.json
    FRAMES_SLOW: Literal["frames.slow"] = "frames.slow"
    """The number of slow frames rendered during the lifetime of the span.

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Example: 1
    """

    # Path: model/attributes/frames/frames__total.json
    FRAMES_TOTAL: Literal["frames.total"] = "frames.total"
    """The number of total frames rendered during the lifetime of the span.

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Example: 60
    """

    # Path: model/attributes/fs_error.json
    FS_ERROR: Literal["fs_error"] = "fs_error"
    """The error message of a file system error.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    DEPRECATED: Use error.type instead - This attribute is not part of the OpenTelemetry specification and error.type fits much better.
    Example: "ENOENT: no such file or directory"
    """

    # Path: model/attributes/gen_ai/gen_ai__agent__name.json
    GEN_AI_AGENT_NAME: Literal["gen_ai.agent.name"] = "gen_ai.agent.name"
    """The name of the agent being used.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Example: "ResearchAssistant"
    """

    # Path: model/attributes/gen_ai/gen_ai__conversation__id.json
    GEN_AI_CONVERSATION_ID: Literal["gen_ai.conversation.id"] = "gen_ai.conversation.id"
    """The unique identifier for a conversation (session, thread), used to store and correlate messages within this conversation.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
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
    Example: "What's the weather in Paris?"
    """

    # Path: model/attributes/gen_ai/gen_ai__input__messages.json
    GEN_AI_INPUT_MESSAGES: Literal["gen_ai.input.messages"] = "gen_ai.input.messages"
    """The messages passed to the model. It has to be a stringified version of an array of objects. The `role` attribute of each object must be `"user"`, `"assistant"`, `"tool"`, or `"system"`. For messages of the role `"tool"`, the `content` can be a string or an arbitrary object with information about the tool call. For other messages the `content` can be either a string or a list of objects in the format `{type: "text", text:"..."}`.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Example: "[{\"role\": \"user\", \"parts\": [{\"type\": \"text\", \"content\": \"Weather in Paris?\"}]}, {\"role\": \"assistant\", \"parts\": [{\"type\": \"tool_call\", \"id\": \"call_VSPygqKTWdrhaFErNvMV18Yl\", \"name\": \"get_weather\", \"arguments\": {\"location\": \"Paris\"}}]}, {\"role\": \"tool\", \"parts\": [{\"type\": \"tool_call_response\", \"id\": \"call_VSPygqKTWdrhaFErNvMV18Yl\", \"result\": \"rainy, 57°F\"}]}]"
    """

    # Path: model/attributes/gen_ai/gen_ai__operation__name.json
    GEN_AI_OPERATION_NAME: Literal["gen_ai.operation.name"] = "gen_ai.operation.name"
    """The name of the operation being performed. It has the following list of well-known values: 'chat', 'create_agent', 'embeddings', 'execute_tool', 'generate_content', 'invoke_agent', 'text_completion'. If one of them applies, then that value MUST be used. Otherwise a custom value MAY be used.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Example: "chat"
    """

    # Path: model/attributes/gen_ai/gen_ai__operation__type.json
    GEN_AI_OPERATION_TYPE: Literal["gen_ai.operation.type"] = "gen_ai.operation.type"
    """The type of AI operation. Must be one of 'agent' (invoke_agent and create_agent spans), 'ai_client' (any LLM call), 'tool' (execute_tool spans), 'handoff' (handoff spans), 'other' (input and output processors, skill loading, guardrails etc.) . Added during ingestion based on span.op and gen_ai.operation.type. Used to filter and aggregate data in the UI

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Example: "tool"
    """

    # Path: model/attributes/gen_ai/gen_ai__output__messages.json
    GEN_AI_OUTPUT_MESSAGES: Literal["gen_ai.output.messages"] = "gen_ai.output.messages"
    """The model's response messages. It has to be a stringified version of an array of message objects, which can include text responses and tool calls.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Example: "[{\"role\": \"assistant\", \"parts\": [{\"type\": \"text\", \"content\": \"The weather in Paris is currently rainy with a temperature of 57°F.\"}], \"finish_reason\": \"stop\"}]"
    """

    # Path: model/attributes/gen_ai/gen_ai__pipeline__name.json
    GEN_AI_PIPELINE_NAME: Literal["gen_ai.pipeline.name"] = "gen_ai.pipeline.name"
    """Name of the AI pipeline or chain being executed.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Aliases: ai.pipeline.name
    Example: "Autofix Pipeline"
    """

    # Path: model/attributes/gen_ai/gen_ai__prompt.json
    GEN_AI_PROMPT: Literal["gen_ai.prompt"] = "gen_ai.prompt"
    """The input messages sent to the model

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    DEPRECATED: No replacement at this time - Deprecated from OTEL, use gen_ai.input.messages with the new format instead.
    Example: "[{\"role\": \"user\", \"message\": \"hello\"}]"
    """

    # Path: model/attributes/gen_ai/gen_ai__provider__name.json
    GEN_AI_PROVIDER_NAME: Literal["gen_ai.provider.name"] = "gen_ai.provider.name"
    """The Generative AI provider as identified by the client or server instrumentation.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
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
    Aliases: ai.presence_penalty
    Example: 0.5
    """

    # Path: model/attributes/gen_ai/gen_ai__request__seed.json
    GEN_AI_REQUEST_SEED: Literal["gen_ai.request.seed"] = "gen_ai.request.seed"
    """The seed, ideally models given the same seed and same other parameters will produce the exact same output.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
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
    Aliases: ai.temperature
    Example: 0.1
    """

    # Path: model/attributes/gen_ai/gen_ai__request__top_k.json
    GEN_AI_REQUEST_TOP_K: Literal["gen_ai.request.top_k"] = "gen_ai.request.top_k"
    """Limits the model to only consider the K most likely next tokens, where K is an integer (e.g., top_k=20 means only the 20 highest probability tokens are considered).

    Type: int
    Contains PII: maybe
    Defined in OTEL: Yes
    Aliases: ai.top_k
    Example: 35
    """

    # Path: model/attributes/gen_ai/gen_ai__request__top_p.json
    GEN_AI_REQUEST_TOP_P: Literal["gen_ai.request.top_p"] = "gen_ai.request.top_p"
    """Limits the model to only consider tokens whose cumulative probability mass adds up to p, where p is a float between 0 and 1 (e.g., top_p=0.7 means only tokens that sum up to 70% of the probability mass are considered).

    Type: float
    Contains PII: maybe
    Defined in OTEL: Yes
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
    Aliases: ai.finish_reason
    Example: "COMPLETE"
    """

    # Path: model/attributes/gen_ai/gen_ai__response__id.json
    GEN_AI_RESPONSE_ID: Literal["gen_ai.response.id"] = "gen_ai.response.id"
    """Unique identifier for the completion.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Aliases: ai.generation_id
    Example: "gen_123abc"
    """

    # Path: model/attributes/gen_ai/gen_ai__response__model.json
    GEN_AI_RESPONSE_MODEL: Literal["gen_ai.response.model"] = "gen_ai.response.model"
    """The vendor-specific ID of the model used.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Aliases: ai.model_id
    Example: "gpt-4"
    """

    # Path: model/attributes/gen_ai/gen_ai__response__streaming.json
    GEN_AI_RESPONSE_STREAMING: Literal["gen_ai.response.streaming"] = (
        "gen_ai.response.streaming"
    )
    """Whether or not the AI model call's response was streamed back asynchronously

    Type: bool
    Contains PII: false
    Defined in OTEL: No
    Aliases: ai.streaming
    Example: true
    """

    # Path: model/attributes/gen_ai/gen_ai__response__text.json
    GEN_AI_RESPONSE_TEXT: Literal["gen_ai.response.text"] = "gen_ai.response.text"
    """The model's response text messages. It has to be a stringified version of an array of response text messages.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    DEPRECATED: Use gen_ai.output.messages instead
    Example: "[\"The weather in Paris is rainy and overcast, with temperatures around 57°F\", \"The weather in London is sunny and warm, with temperatures around 65°F\"]"
    """

    # Path: model/attributes/gen_ai/gen_ai__response__time_to_first_token.json
    GEN_AI_RESPONSE_TIME_TO_FIRST_TOKEN: Literal[
        "gen_ai.response.time_to_first_token"
    ] = "gen_ai.response.time_to_first_token"
    """Time in seconds when the first response content chunk arrived in streaming responses.

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
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
    DEPRECATED: Use gen_ai.output.messages instead
    Example: "[{\"name\": \"get_weather\", \"arguments\": {\"location\": \"Paris\"}}]"
    """

    # Path: model/attributes/gen_ai/gen_ai__system.json
    GEN_AI_SYSTEM: Literal["gen_ai.system"] = "gen_ai.system"
    """The provider of the model.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
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
    Aliases: gen_ai.tool.output, gen_ai.tool.message
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
    Example: "Searches the web for current information about a topic"
    """

    # Path: model/attributes/gen_ai/gen_ai__tool__input.json
    GEN_AI_TOOL_INPUT: Literal["gen_ai.tool.input"] = "gen_ai.tool.input"
    """The input of the tool being used. It has to be a stringified version of the input to the tool.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
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
    Aliases: gen_ai.tool.call.result, gen_ai.tool.output
    DEPRECATED: Use gen_ai.tool.call.result instead
    Example: "rainy, 57°F"
    """

    # Path: model/attributes/gen_ai/gen_ai__tool__name.json
    GEN_AI_TOOL_NAME: Literal["gen_ai.tool.name"] = "gen_ai.tool.name"
    """Name of the tool utilized by the agent.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Aliases: ai.function_call
    Example: "Flights"
    """

    # Path: model/attributes/gen_ai/gen_ai__tool__output.json
    GEN_AI_TOOL_OUTPUT: Literal["gen_ai.tool.output"] = "gen_ai.tool.output"
    """The output of the tool being used. It has to be a stringified version of the output of the tool.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Aliases: gen_ai.tool.call.result, gen_ai.tool.message
    DEPRECATED: Use gen_ai.tool.call.result instead
    Example: "rainy, 57°F"
    """

    # Path: model/attributes/gen_ai/gen_ai__tool__type.json
    GEN_AI_TOOL_TYPE: Literal["gen_ai.tool.type"] = "gen_ai.tool.type"
    """The type of tool being used.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Example: "function"
    """

    # Path: model/attributes/gen_ai/gen_ai__usage__completion_tokens.json
    GEN_AI_USAGE_COMPLETION_TOKENS: Literal["gen_ai.usage.completion_tokens"] = (
        "gen_ai.usage.completion_tokens"
    )
    """The number of tokens used in the GenAI response (completion).

    Type: int
    Contains PII: maybe
    Defined in OTEL: Yes
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
    Aliases: ai.prompt_tokens.used, gen_ai.usage.input_tokens
    DEPRECATED: Use gen_ai.usage.input_tokens instead
    Example: 20
    """

    # Path: model/attributes/gen_ai/gen_ai__usage__total_tokens.json
    GEN_AI_USAGE_TOTAL_TOKENS: Literal["gen_ai.usage.total_tokens"] = (
        "gen_ai.usage.total_tokens"
    )
    """The total number of tokens used to process the prompt. (input tokens plus output todkens)

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Aliases: ai.total_tokens.used
    Example: 20
    """

    # Path: model/attributes/graphql/graphql__operation__name.json
    GRAPHQL_OPERATION_NAME: Literal["graphql.operation.name"] = "graphql.operation.name"
    """The name of the operation being executed.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Example: "findBookById"
    """

    # Path: model/attributes/graphql/graphql__operation__type.json
    GRAPHQL_OPERATION_TYPE: Literal["graphql.operation.type"] = "graphql.operation.type"
    """The type of the operation being executed.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Example: "query"
    """

    # Path: model/attributes/http/http__client_ip.json
    HTTP_CLIENT_IP: Literal["http.client_ip"] = "http.client_ip"
    """Client address - domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.

    Type: str
    Contains PII: true
    Defined in OTEL: Yes
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
    Example: 456
    """

    # Path: model/attributes/http/http__flavor.json
    HTTP_FLAVOR: Literal["http.flavor"] = "http.flavor"
    """The actual version of the protocol used for network communication.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Aliases: network.protocol.version, net.protocol.version
    DEPRECATED: Use network.protocol.version instead
    Example: "1.1"
    """

    # Path: model/attributes/http/http__fragment.json
    HTTP_FRAGMENT: Literal["http.fragment"] = "http.fragment"
    """The fragments present in the URI. Note that this contains the leading # character, while the `url.fragment` attribute does not.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Example: "#details"
    """

    # Path: model/attributes/http/http__host.json
    HTTP_HOST: Literal["http.host"] = "http.host"
    """The domain name.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
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
    Aliases: http.request.method
    DEPRECATED: Use http.request.method instead
    Example: "GET"
    """

    # Path: model/attributes/http/http__query.json
    HTTP_QUERY: Literal["http.query"] = "http.query"
    """The query string present in the URL. Note that this contains the leading ? character, while the `url.query` attribute does not.

    Type: str
    Contains PII: maybe - Query string values can contain sensitive information. Clients should attempt to scrub parameters that might contain sensitive information.
    Defined in OTEL: No
    Example: "?foo=bar&bar=baz"
    """

    # Path: model/attributes/http/http__request__connect_start.json
    HTTP_REQUEST_CONNECT_START: Literal["http.request.connect_start"] = (
        "http.request.connect_start"
    )
    """The UNIX timestamp representing the time immediately before the user agent starts establishing the connection to the server to retrieve the resource.

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
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
    Example: 1732829555.389
    """

    # Path: model/attributes/http/http__request__header__[key].json
    HTTP_REQUEST_HEADER_KEY: Literal["http.request.header.<key>"] = (
        "http.request.header.<key>"
    )
    """HTTP request headers, <key> being the normalized HTTP Header name (lowercase), the value being the header values.

    Type: List[str]
    Contains PII: maybe
    Defined in OTEL: Yes
    Has Dynamic Suffix: true
    Example: "http.request.header.custom-header=['foo', 'bar']"
    """

    # Path: model/attributes/http/http__request__method.json
    HTTP_REQUEST_METHOD: Literal["http.request.method"] = "http.request.method"
    """The HTTP method used.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Aliases: method, http.method
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
    Example: 1732829553.68
    """

    # Path: model/attributes/http/http__response__body__size.json
    HTTP_RESPONSE_BODY_SIZE: Literal["http.response.body.size"] = (
        "http.response.body.size"
    )
    """The encoded body size of the response (in bytes).

    Type: int
    Contains PII: maybe
    Defined in OTEL: Yes
    Aliases: http.response_content_length, http.response.header.content-length
    Example: 123
    """

    # Path: model/attributes/http/http__response__header__[key].json
    HTTP_RESPONSE_HEADER_KEY: Literal["http.response.header.<key>"] = (
        "http.response.header.<key>"
    )
    """HTTP response headers, <key> being the normalized HTTP Header name (lowercase), the value being the header values.

    Type: List[str]
    Contains PII: maybe
    Defined in OTEL: Yes
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
    Aliases: http.response_content_length, http.response.body.size
    Example: "http.response.header.custom-header=['foo', 'bar']"
    """

    # Path: model/attributes/http/http__response__size.json
    HTTP_RESPONSE_SIZE: Literal["http.response.size"] = "http.response.size"
    """The transfer size of the response (in bytes).

    Type: int
    Contains PII: maybe
    Defined in OTEL: Yes
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
    Aliases: url.template
    Example: "/users/:id"
    """

    # Path: model/attributes/http/http__scheme.json
    HTTP_SCHEME: Literal["http.scheme"] = "http.scheme"
    """The URI scheme component identifying the used protocol.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Aliases: url.scheme
    DEPRECATED: Use url.scheme instead
    Example: "https"
    """

    # Path: model/attributes/http/http__server_name.json
    HTTP_SERVER_NAME: Literal["http.server_name"] = "http.server_name"
    """The server domain name

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
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
    Aliases: http.response.status_code
    DEPRECATED: Use http.response.status_code instead
    Example: 404
    """

    # Path: model/attributes/http/http__target.json
    HTTP_TARGET: Literal["http.target"] = "http.target"
    """The pathname and query string of the URL.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    DEPRECATED: Use url.path instead - This attribute is being deprecated in favor of url.path and url.query
    Example: "/test?foo=bar#buzz"
    """

    # Path: model/attributes/http/http__url.json
    HTTP_URL: Literal["http.url"] = "http.url"
    """The URL of the resource that was fetched.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
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
    Example: "f47ac10b58cc4372a5670e02b2c3d479"
    """

    # Path: model/attributes/jvm/jvm__gc__action.json
    JVM_GC_ACTION: Literal["jvm.gc.action"] = "jvm.gc.action"
    """Name of the garbage collector action.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Example: "end of minor GC"
    """

    # Path: model/attributes/jvm/jvm__gc__name.json
    JVM_GC_NAME: Literal["jvm.gc.name"] = "jvm.gc.name"
    """Name of the garbage collector.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Example: "G1 Young Generation"
    """

    # Path: model/attributes/jvm/jvm__memory__pool__name.json
    JVM_MEMORY_POOL_NAME: Literal["jvm.memory.pool.name"] = "jvm.memory.pool.name"
    """Name of the memory pool.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Example: "G1 Old Gen"
    """

    # Path: model/attributes/jvm/jvm__memory__type.json
    JVM_MEMORY_TYPE: Literal["jvm.memory.type"] = "jvm.memory.type"
    """Name of the memory pool.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Example: "G1 Old Gen"
    """

    # Path: model/attributes/jvm/jvm__thread__daemon.json
    JVM_THREAD_DAEMON: Literal["jvm.thread.daemon"] = "jvm.thread.daemon"
    """Whether the thread is daemon or not.

    Type: bool
    Contains PII: false
    Defined in OTEL: Yes
    Example: true
    """

    # Path: model/attributes/jvm/jvm__thread__state.json
    JVM_THREAD_STATE: Literal["jvm.thread.state"] = "jvm.thread.state"
    """State of the thread.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Example: "blocked"
    """

    # Path: model/attributes/lcp/lcp__element.json
    LCP_ELEMENT: Literal["lcp.element"] = "lcp.element"
    """The dom element responsible for the largest contentful paint.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Example: "img"
    """

    # Path: model/attributes/lcp/lcp__id.json
    LCP_ID: Literal["lcp.id"] = "lcp.id"
    """The id of the dom element responsible for the largest contentful paint.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Example: "#hero"
    """

    # Path: model/attributes/lcp/lcp__size.json
    LCP_SIZE: Literal["lcp.size"] = "lcp.size"
    """The size of the largest contentful paint element.

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Example: 1234
    """

    # Path: model/attributes/lcp/lcp__url.json
    LCP_URL: Literal["lcp.url"] = "lcp.url"
    """The url of the dom element responsible for the largest contentful paint.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Example: "https://example.com"
    """

    # Path: model/attributes/logger/logger__name.json
    LOGGER_NAME: Literal["logger.name"] = "logger.name"
    """The name of the logger that generated this event.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Example: "myLogger"
    """

    # Path: model/attributes/mcp/mcp__cancelled__reason.json
    MCP_CANCELLED_REASON: Literal["mcp.cancelled.reason"] = "mcp.cancelled.reason"
    """Reason for the cancellation of an MCP operation.

    Type: str
    Contains PII: maybe - Cancellation reasons may contain user-specific or sensitive information
    Defined in OTEL: No
    Example: "User cancelled the request"
    """

    # Path: model/attributes/mcp/mcp__cancelled__request_id.json
    MCP_CANCELLED_REQUEST_ID: Literal["mcp.cancelled.request_id"] = (
        "mcp.cancelled.request_id"
    )
    """Request ID of the cancelled MCP operation.

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Example: "123"
    """

    # Path: model/attributes/mcp/mcp__client__name.json
    MCP_CLIENT_NAME: Literal["mcp.client.name"] = "mcp.client.name"
    """Name of the MCP client application.

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Example: "claude-desktop"
    """

    # Path: model/attributes/mcp/mcp__client__title.json
    MCP_CLIENT_TITLE: Literal["mcp.client.title"] = "mcp.client.title"
    """Display title of the MCP client application.

    Type: str
    Contains PII: maybe - Client titles may reveal user-specific application configurations or custom setups
    Defined in OTEL: No
    Example: "Claude Desktop"
    """

    # Path: model/attributes/mcp/mcp__client__version.json
    MCP_CLIENT_VERSION: Literal["mcp.client.version"] = "mcp.client.version"
    """Version of the MCP client application.

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Example: "1.0.0"
    """

    # Path: model/attributes/mcp/mcp__lifecycle__phase.json
    MCP_LIFECYCLE_PHASE: Literal["mcp.lifecycle.phase"] = "mcp.lifecycle.phase"
    """Lifecycle phase indicator for MCP operations.

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Example: "initialization_complete"
    """

    # Path: model/attributes/mcp/mcp__logging__data_type.json
    MCP_LOGGING_DATA_TYPE: Literal["mcp.logging.data_type"] = "mcp.logging.data_type"
    """Data type of the logged message content.

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Example: "string"
    """

    # Path: model/attributes/mcp/mcp__logging__level.json
    MCP_LOGGING_LEVEL: Literal["mcp.logging.level"] = "mcp.logging.level"
    """Log level for MCP logging operations.

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Example: "info"
    """

    # Path: model/attributes/mcp/mcp__logging__logger.json
    MCP_LOGGING_LOGGER: Literal["mcp.logging.logger"] = "mcp.logging.logger"
    """Logger name for MCP logging operations.

    Type: str
    Contains PII: maybe - Logger names may be user-defined and could contain sensitive information
    Defined in OTEL: No
    Example: "mcp_server"
    """

    # Path: model/attributes/mcp/mcp__logging__message.json
    MCP_LOGGING_MESSAGE: Literal["mcp.logging.message"] = "mcp.logging.message"
    """Log message content from MCP logging operations.

    Type: str
    Contains PII: true - Log messages can contain user data
    Defined in OTEL: No
    Example: "Tool execution completed successfully"
    """

    # Path: model/attributes/mcp/mcp__method__name.json
    MCP_METHOD_NAME: Literal["mcp.method.name"] = "mcp.method.name"
    """The name of the MCP request or notification method being called.

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Example: "tools/call"
    """

    # Path: model/attributes/mcp/mcp__progress__current.json
    MCP_PROGRESS_CURRENT: Literal["mcp.progress.current"] = "mcp.progress.current"
    """Current progress value of an MCP operation.

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Example: 50
    """

    # Path: model/attributes/mcp/mcp__progress__message.json
    MCP_PROGRESS_MESSAGE: Literal["mcp.progress.message"] = "mcp.progress.message"
    """Progress message describing the current state of an MCP operation.

    Type: str
    Contains PII: maybe - Progress messages may contain user-specific or sensitive information
    Defined in OTEL: No
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
    Example: 50
    """

    # Path: model/attributes/mcp/mcp__progress__token.json
    MCP_PROGRESS_TOKEN: Literal["mcp.progress.token"] = "mcp.progress.token"
    """Token for tracking progress of an MCP operation.

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Example: "progress-token-123"
    """

    # Path: model/attributes/mcp/mcp__progress__total.json
    MCP_PROGRESS_TOTAL: Literal["mcp.progress.total"] = "mcp.progress.total"
    """Total progress target value of an MCP operation.

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Example: 100
    """

    # Path: model/attributes/mcp/mcp__prompt__name.json
    MCP_PROMPT_NAME: Literal["mcp.prompt.name"] = "mcp.prompt.name"
    """Name of the MCP prompt template being used.

    Type: str
    Contains PII: maybe - Prompt names may reveal user behavior patterns or sensitive operations
    Defined in OTEL: No
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
    Example: 3
    """

    # Path: model/attributes/mcp/mcp__prompt__result__message_role.json
    MCP_PROMPT_RESULT_MESSAGE_ROLE: Literal["mcp.prompt.result.message_role"] = (
        "mcp.prompt.result.message_role"
    )
    """Role of the message in the prompt result. Used for single message results only.

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Example: "user"
    """

    # Path: model/attributes/mcp/mcp__protocol__ready.json
    MCP_PROTOCOL_READY: Literal["mcp.protocol.ready"] = "mcp.protocol.ready"
    """Protocol readiness indicator for MCP session. Non-zero value indicates the protocol is ready.

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Example: 1
    """

    # Path: model/attributes/mcp/mcp__protocol__version.json
    MCP_PROTOCOL_VERSION: Literal["mcp.protocol.version"] = "mcp.protocol.version"
    """MCP protocol version used in the session.

    Type: str
    Contains PII: false
    Defined in OTEL: No
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
    Example: "file:///path/to/resource"
    """

    # Path: model/attributes/mcp/mcp__request__id.json
    MCP_REQUEST_ID: Literal["mcp.request.id"] = "mcp.request.id"
    """JSON-RPC request identifier for the MCP request. Unique within the MCP session.

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Example: "1"
    """

    # Path: model/attributes/mcp/mcp__resource__protocol.json
    MCP_RESOURCE_PROTOCOL: Literal["mcp.resource.protocol"] = "mcp.resource.protocol"
    """Protocol of the resource URI being accessed, extracted from the URI.

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Example: "file"
    """

    # Path: model/attributes/mcp/mcp__resource__uri.json
    MCP_RESOURCE_URI: Literal["mcp.resource.uri"] = "mcp.resource.uri"
    """The resource URI being accessed in an MCP operation.

    Type: str
    Contains PII: true - URIs can contain sensitive file paths
    Defined in OTEL: No
    Example: "file:///path/to/file.txt"
    """

    # Path: model/attributes/mcp/mcp__server__name.json
    MCP_SERVER_NAME: Literal["mcp.server.name"] = "mcp.server.name"
    """Name of the MCP server application.

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Example: "sentry-mcp-server"
    """

    # Path: model/attributes/mcp/mcp__server__title.json
    MCP_SERVER_TITLE: Literal["mcp.server.title"] = "mcp.server.title"
    """Display title of the MCP server application.

    Type: str
    Contains PII: maybe - Server titles may reveal user-specific application configurations or custom setups
    Defined in OTEL: No
    Example: "Sentry MCP Server"
    """

    # Path: model/attributes/mcp/mcp__server__version.json
    MCP_SERVER_VERSION: Literal["mcp.server.version"] = "mcp.server.version"
    """Version of the MCP server application.

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Example: "0.1.0"
    """

    # Path: model/attributes/mcp/mcp__session__id.json
    MCP_SESSION_ID: Literal["mcp.session.id"] = "mcp.session.id"
    """Identifier for the MCP session.

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Example: "550e8400-e29b-41d4-a716-446655440000"
    """

    # Path: model/attributes/mcp/mcp__tool__name.json
    MCP_TOOL_NAME: Literal["mcp.tool.name"] = "mcp.tool.name"
    """Name of the MCP tool being called.

    Type: str
    Contains PII: false
    Defined in OTEL: No
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
    Example: 1
    """

    # Path: model/attributes/mcp/mcp__tool__result__is_error.json
    MCP_TOOL_RESULT_IS_ERROR: Literal["mcp.tool.result.is_error"] = (
        "mcp.tool.result.is_error"
    )
    """Whether a tool execution resulted in an error.

    Type: bool
    Contains PII: false
    Defined in OTEL: No
    Example: false
    """

    # Path: model/attributes/mcp/mcp__transport.json
    MCP_TRANSPORT: Literal["mcp.transport"] = "mcp.transport"
    """Transport method used for MCP communication.

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Example: "stdio"
    """

    # Path: model/attributes/mdc/mdc__[key].json
    MDC_KEY: Literal["mdc.<key>"] = "mdc.<key>"
    """Attributes from the Mapped Diagnostic Context (MDC) present at the moment the log record was created. The MDC is supported by all the most popular logging solutions in the Java ecosystem, and it's usually implemented as a thread-local map that stores context for e.g. a specific request.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Has Dynamic Suffix: true
    Example: "mdc.some_key='some_value'"
    """

    # Path: model/attributes/messaging/messaging__destination__connection.json
    MESSAGING_DESTINATION_CONNECTION: Literal["messaging.destination.connection"] = (
        "messaging.destination.connection"
    )
    """The message destination connection.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
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
    Example: 1045
    """

    # Path: model/attributes/messaging/messaging__message__id.json
    MESSAGING_MESSAGE_ID: Literal["messaging.message.id"] = "messaging.message.id"
    """A value used by the messaging system as an identifier for the message, represented as a string.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
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
    Example: 2
    """

    # Path: model/attributes/messaging/messaging__operation__type.json
    MESSAGING_OPERATION_TYPE: Literal["messaging.operation.type"] = (
        "messaging.operation.type"
    )
    """A string identifying the type of the messaging operation

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Example: "create"
    """

    # Path: model/attributes/messaging/messaging__system.json
    MESSAGING_SYSTEM: Literal["messaging.system"] = "messaging.system"
    """The messaging system as identified by the client instrumentation.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Example: "activemq"
    """

    # Path: model/attributes/method.json
    METHOD: Literal["method"] = "method"
    """The HTTP method used.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Aliases: http.request.method
    DEPRECATED: Use http.request.method instead
    Example: "GET"
    """

    # Path: model/attributes/navigation/navigation__type.json
    NAVIGATION_TYPE: Literal["navigation.type"] = "navigation.type"
    """The type of navigation done by a client-side router.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Example: "router.push"
    """

    # Path: model/attributes/nel/nel__elapsed_time.json
    NEL_ELAPSED_TIME: Literal["nel.elapsed_time"] = "nel.elapsed_time"
    """The elapsed number of milliseconds between the start of the resource fetch and when it was completed or aborted by the user agent.

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Example: 100
    """

    # Path: model/attributes/nel/nel__phase.json
    NEL_PHASE: Literal["nel.phase"] = "nel.phase"
    """If request failed, the phase of its network error. If request succeeded, "application".

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Example: "application"
    """

    # Path: model/attributes/nel/nel__referrer.json
    NEL_REFERRER: Literal["nel.referrer"] = "nel.referrer"
    """request's referrer, as determined by the referrer policy associated with its client.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Example: "https://example.com/foo?bar=baz"
    """

    # Path: model/attributes/nel/nel__sampling_function.json
    NEL_SAMPLING_FUNCTION: Literal["nel.sampling_function"] = "nel.sampling_function"
    """The sampling function used to determine if the request should be sampled.

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
    Example: 0.5
    """

    # Path: model/attributes/nel/nel__type.json
    NEL_TYPE: Literal["nel.type"] = "nel.type"
    """If request failed, the type of its network error. If request succeeded, "ok".

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Example: "dns.unreachable"
    """

    # Path: model/attributes/net/net__host__ip.json
    NET_HOST_IP: Literal["net.host.ip"] = "net.host.ip"
    """Local address of the network connection - IP address or Unix domain socket name.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
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
    Aliases: server.port
    DEPRECATED: Use server.port instead
    Example: 1337
    """

    # Path: model/attributes/net/net__peer__ip.json
    NET_PEER_IP: Literal["net.peer.ip"] = "net.peer.ip"
    """Peer address of the network connection - IP address or Unix domain socket name.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Aliases: network.peer.address, net.sock.peer.addr
    DEPRECATED: Use network.peer.address instead
    Example: "192.168.0.1"
    """

    # Path: model/attributes/net/net__peer__name.json
    NET_PEER_NAME: Literal["net.peer.name"] = "net.peer.name"
    """Server domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    DEPRECATED: Use server.address instead - Deprecated, use server.address on client spans and client.address on server spans.
    Example: "example.com"
    """

    # Path: model/attributes/net/net__peer__port.json
    NET_PEER_PORT: Literal["net.peer.port"] = "net.peer.port"
    """Peer port number.

    Type: int
    Contains PII: maybe
    Defined in OTEL: Yes
    DEPRECATED: Use server.port instead - Deprecated, use server.port on client spans and client.port on server spans.
    Example: 1337
    """

    # Path: model/attributes/net/net__protocol__name.json
    NET_PROTOCOL_NAME: Literal["net.protocol.name"] = "net.protocol.name"
    """OSI application layer or non-OSI equivalent.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Aliases: network.protocol.name
    DEPRECATED: Use network.protocol.name instead
    Example: "http"
    """

    # Path: model/attributes/net/net__protocol__version.json
    NET_PROTOCOL_VERSION: Literal["net.protocol.version"] = "net.protocol.version"
    """The actual version of the protocol used for network communication.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
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
    DEPRECATED: Use network.transport instead - Deprecated, use network.transport and network.type.
    Example: "inet"
    """

    # Path: model/attributes/net/net__sock__host__addr.json
    NET_SOCK_HOST_ADDR: Literal["net.sock.host.addr"] = "net.sock.host.addr"
    """Local address of the network connection mapping to Unix domain socket name.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
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
    Aliases: network.local.port
    DEPRECATED: Use network.local.port instead
    Example: 8080
    """

    # Path: model/attributes/net/net__sock__peer__addr.json
    NET_SOCK_PEER_ADDR: Literal["net.sock.peer.addr"] = "net.sock.peer.addr"
    """Peer address of the network connection - IP address

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Aliases: network.peer.address, net.peer.ip
    DEPRECATED: Use network.peer.address instead
    Example: "192.168.0.1"
    """

    # Path: model/attributes/net/net__sock__peer__name.json
    NET_SOCK_PEER_NAME: Literal["net.sock.peer.name"] = "net.sock.peer.name"
    """Peer address of the network connection - Unix domain socket name

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    DEPRECATED: No replacement at this time - Deprecated from OTEL, no replacement at this time
    Example: "/var/my.sock"
    """

    # Path: model/attributes/net/net__sock__peer__port.json
    NET_SOCK_PEER_PORT: Literal["net.sock.peer.port"] = "net.sock.peer.port"
    """Peer port number of the network connection.

    Type: int
    Contains PII: maybe
    Defined in OTEL: Yes
    DEPRECATED: Use network.peer.port instead
    Example: 8080
    """

    # Path: model/attributes/net/net__transport.json
    NET_TRANSPORT: Literal["net.transport"] = "net.transport"
    """OSI transport layer or inter-process communication method.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Aliases: network.transport
    DEPRECATED: Use network.transport instead
    Example: "tcp"
    """

    # Path: model/attributes/network/network__local__address.json
    NETWORK_LOCAL_ADDRESS: Literal["network.local.address"] = "network.local.address"
    """Local address of the network connection - IP address or Unix domain socket name.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Aliases: net.host.ip, net.sock.host.addr
    Example: "10.1.2.80"
    """

    # Path: model/attributes/network/network__local__port.json
    NETWORK_LOCAL_PORT: Literal["network.local.port"] = "network.local.port"
    """Local port number of the network connection.

    Type: int
    Contains PII: maybe
    Defined in OTEL: Yes
    Aliases: net.sock.host.port
    Example: 65400
    """

    # Path: model/attributes/network/network__peer__address.json
    NETWORK_PEER_ADDRESS: Literal["network.peer.address"] = "network.peer.address"
    """Peer address of the network connection - IP address or Unix domain socket name.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Aliases: net.peer.ip, net.sock.peer.addr
    Example: "10.1.2.80"
    """

    # Path: model/attributes/network/network__peer__port.json
    NETWORK_PEER_PORT: Literal["network.peer.port"] = "network.peer.port"
    """Peer port number of the network connection.

    Type: int
    Contains PII: maybe
    Defined in OTEL: Yes
    Example: 65400
    """

    # Path: model/attributes/network/network__protocol__name.json
    NETWORK_PROTOCOL_NAME: Literal["network.protocol.name"] = "network.protocol.name"
    """OSI application layer or non-OSI equivalent.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Aliases: net.protocol.name
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
    Aliases: http.flavor, net.protocol.version
    Example: "1.1"
    """

    # Path: model/attributes/network/network__transport.json
    NETWORK_TRANSPORT: Literal["network.transport"] = "network.transport"
    """OSI transport layer or inter-process communication method.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Aliases: net.transport
    Example: "tcp"
    """

    # Path: model/attributes/network/network__type.json
    NETWORK_TYPE: Literal["network.type"] = "network.type"
    """OSI network layer or non-OSI equivalent.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Example: "ipv4"
    """

    # Path: model/attributes/os/os__build_id.json
    OS_BUILD_ID: Literal["os.build_id"] = "os.build_id"
    """The build ID of the operating system.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Example: "1234567890"
    """

    # Path: model/attributes/os/os__description.json
    OS_DESCRIPTION: Literal["os.description"] = "os.description"
    """Human readable (not intended to be parsed) OS version information, like e.g. reported by ver or lsb_release -a commands.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Example: "Ubuntu 18.04.1 LTS"
    """

    # Path: model/attributes/os/os__name.json
    OS_NAME: Literal["os.name"] = "os.name"
    """Human readable operating system name.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Example: "Ubuntu"
    """

    # Path: model/attributes/os/os__type.json
    OS_TYPE: Literal["os.type"] = "os.type"
    """The operating system type.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Example: "linux"
    """

    # Path: model/attributes/os/os__version.json
    OS_VERSION: Literal["os.version"] = "os.version"
    """The version of the operating system.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Example: "18.04.2"
    """

    # Path: model/attributes/otel/otel__scope__name.json
    OTEL_SCOPE_NAME: Literal["otel.scope.name"] = "otel.scope.name"
    """The name of the instrumentation scope - (InstrumentationScope.Name in OTLP).

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Example: "io.opentelemetry.contrib.mongodb"
    """

    # Path: model/attributes/otel/otel__scope__version.json
    OTEL_SCOPE_VERSION: Literal["otel.scope.version"] = "otel.scope.version"
    """The version of the instrumentation scope - (InstrumentationScope.Version in OTLP).

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Example: "2.4.5"
    """

    # Path: model/attributes/otel/otel__status_code.json
    OTEL_STATUS_CODE: Literal["otel.status_code"] = "otel.status_code"
    """Name of the code, either “OK” or “ERROR”. MUST NOT be set if the status code is UNSET.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Example: "OK"
    """

    # Path: model/attributes/otel/otel__status_description.json
    OTEL_STATUS_DESCRIPTION: Literal["otel.status_description"] = (
        "otel.status_description"
    )
    """Description of the Status if it has a value, otherwise not set.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Example: "resource not found"
    """

    # Path: model/attributes/params/params__[key].json
    PARAMS_KEY: Literal["params.<key>"] = "params.<key>"
    """Decoded parameters extracted from a URL path. Usually added by client-side routing frameworks like vue-router.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Has Dynamic Suffix: true
    Aliases: url.path.parameter.<key>
    Example: "params.id='123'"
    """

    # Path: model/attributes/previous_route.json
    PREVIOUS_ROUTE: Literal["previous_route"] = "previous_route"
    """Also used by mobile SDKs to indicate the previous route in the application.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Example: "HomeScreen"
    """

    # Path: model/attributes/process/process__executable__name.json
    PROCESS_EXECUTABLE_NAME: Literal["process.executable.name"] = (
        "process.executable.name"
    )
    """The name of the executable that started the process.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Example: "getsentry"
    """

    # Path: model/attributes/process/process__pid.json
    PROCESS_PID: Literal["process.pid"] = "process.pid"
    """The process ID of the running process.

    Type: int
    Contains PII: maybe
    Defined in OTEL: Yes
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
    Example: "Eclipse OpenJ9 VM openj9-0.21.0"
    """

    # Path: model/attributes/process/process__runtime__name.json
    PROCESS_RUNTIME_NAME: Literal["process.runtime.name"] = "process.runtime.name"
    """The name of the runtime. Equivalent to `name` in the Sentry runtime context.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
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
    Example: "18.04.2"
    """

    # Path: model/attributes/query/query__[key].json
    QUERY_KEY: Literal["query.<key>"] = "query.<key>"
    """An item in a query string. Usually added by client-side routing frameworks like vue-router.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Has Dynamic Suffix: true
    DEPRECATED: Use url.query instead - Instead of sending items individually in query.<key>, they should be sent all together with url.query.
    Example: "query.id='123'"
    """

    # Path: model/attributes/release.json
    RELEASE: Literal["release"] = "release"
    """The sentry release.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
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
    Contains PII: maybe
    Defined in OTEL: No
    Has Dynamic Suffix: true
    Example: "http.response.header.text='test'"
    """

    # Path: model/attributes/replay_id.json
    REPLAY_ID: Literal["replay_id"] = "replay_id"
    """The id of the sentry replay.

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Aliases: sentry.replay_id
    DEPRECATED: Use sentry.replay_id instead
    Example: "123e4567e89b12d3a456426614174000"
    """

    # Path: model/attributes/resource/resource__deployment__environment__name.json
    RESOURCE_DEPLOYMENT_ENVIRONMENT_NAME: Literal[
        "resource.deployment.environment.name"
    ] = "resource.deployment.environment.name"
    """The software deployment environment name.

    Type: str
    Contains PII: false
    Defined in OTEL: Yes
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
    Example: "non-blocking"
    """

    # Path: model/attributes/route.json
    ROUTE: Literal["route"] = "route"
    """The matched route, that is, the path template in the format used by the respective server framework. Also used by mobile SDKs to indicate the current route in the application.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
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
    Example: 2
    """

    # Path: model/attributes/rpc/rpc__service.json
    RPC_SERVICE: Literal["rpc.service"] = "rpc.service"
    """The full (logical) name of the service being called, including its package name, if applicable.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Example: "myService.BestService"
    """

    # Path: model/attributes/sentry/sentry__action.json
    SENTRY_ACTION: Literal["sentry.action"] = "sentry.action"
    """Used as a generic attribute representing the action depending on the type of span. For instance, this is the database query operation for DB spans, and the request method for HTTP spans.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Example: "SELECT"
    """

    # Path: model/attributes/sentry/sentry__browser__name.json
    SENTRY_BROWSER_NAME: Literal["sentry.browser.name"] = "sentry.browser.name"
    """The name of the browser.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
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
    Example: "document.hidden"
    """

    # Path: model/attributes/sentry/sentry__category.json
    SENTRY_CATEGORY: Literal["sentry.category"] = "sentry.category"
    """The high-level category of a span, derived from the span operation or span attributes. This categorizes spans by their general purpose (e.g., database, HTTP, UI). Known values include: 'ai', 'ai.pipeline', 'app', 'browser', 'cache', 'console', 'db', 'event', 'file', 'function.aws', 'function.azure', 'function.gcp', 'function.nextjs', 'function.remix', 'graphql', 'grpc', 'http', 'measure', 'middleware', 'navigation', 'pageload', 'queue', 'resource', 'rpc', 'serialize', 'subprocess', 'template', 'topic', 'ui', 'ui.angular', 'ui.ember', 'ui.react', 'ui.svelte', 'ui.vue', 'view', 'websocket'.

    Type: str
    Contains PII: false
    Defined in OTEL: No
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
    Example: 0.5
    """

    # Path: model/attributes/sentry/sentry__description.json
    SENTRY_DESCRIPTION: Literal["sentry.description"] = "sentry.description"
    """The human-readable description of a span.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Example: "index view query"
    """

    # Path: model/attributes/sentry/sentry__dist.json
    SENTRY_DIST: Literal["sentry.dist"] = "sentry.dist"
    """The sentry dist.

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Example: "1.0"
    """

    # Path: model/attributes/sentry/sentry__domain.json
    SENTRY_DOMAIN: Literal["sentry.domain"] = "sentry.domain"
    """Used as a generic attribute representing the domain depending on the type of span. For instance, this is the collection/table name for database spans, and the server address for HTTP spans.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Example: "example.com"
    """

    # Path: model/attributes/sentry/sentry__dsc__environment.json
    SENTRY_DSC_ENVIRONMENT: Literal["sentry.dsc.environment"] = "sentry.dsc.environment"
    """The environment from the dynamic sampling context.

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Example: "prod"
    """

    # Path: model/attributes/sentry/sentry__dsc__public_key.json
    SENTRY_DSC_PUBLIC_KEY: Literal["sentry.dsc.public_key"] = "sentry.dsc.public_key"
    """The public key from the dynamic sampling context.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Example: "c51734c603c4430eb57cb0a5728a479d"
    """

    # Path: model/attributes/sentry/sentry__dsc__release.json
    SENTRY_DSC_RELEASE: Literal["sentry.dsc.release"] = "sentry.dsc.release"
    """The release identifier from the dynamic sampling context.

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Example: "frontend@e8211be71b214afab5b85de4b4c54be3714952bb"
    """

    # Path: model/attributes/sentry/sentry__dsc__sample_rate.json
    SENTRY_DSC_SAMPLE_RATE: Literal["sentry.dsc.sample_rate"] = "sentry.dsc.sample_rate"
    """The sample rate from the dynamic sampling context.

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Example: "1.0"
    """

    # Path: model/attributes/sentry/sentry__dsc__sampled.json
    SENTRY_DSC_SAMPLED: Literal["sentry.dsc.sampled"] = "sentry.dsc.sampled"
    """Whether the event was sampled according to the dynamic sampling context.

    Type: bool
    Contains PII: false
    Defined in OTEL: No
    Example: true
    """

    # Path: model/attributes/sentry/sentry__dsc__trace_id.json
    SENTRY_DSC_TRACE_ID: Literal["sentry.dsc.trace_id"] = "sentry.dsc.trace_id"
    """The trace ID from the dynamic sampling context.

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Example: "047372980460430cbc78d9779df33a46"
    """

    # Path: model/attributes/sentry/sentry__dsc__transaction.json
    SENTRY_DSC_TRANSACTION: Literal["sentry.dsc.transaction"] = "sentry.dsc.transaction"
    """The transaction name from the dynamic sampling context.

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Example: "/issues/errors-outages/"
    """

    # Path: model/attributes/sentry/sentry__environment.json
    SENTRY_ENVIRONMENT: Literal["sentry.environment"] = "sentry.environment"
    """The sentry environment.

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Aliases: environment
    Example: "production"
    """

    # Path: model/attributes/sentry/sentry__exclusive_time.json
    SENTRY_EXCLUSIVE_TIME: Literal["sentry.exclusive_time"] = "sentry.exclusive_time"
    """The exclusive time duration of the span in milliseconds.

    Type: float
    Contains PII: maybe
    Defined in OTEL: No
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
    Example: "getUserById"
    """

    # Path: model/attributes/sentry/sentry__group.json
    SENTRY_GROUP: Literal["sentry.group"] = "sentry.group"
    """Stores the hash of `sentry.normalized_description`. This is primarily used for grouping spans in the product end.

    Type: str
    Contains PII: false
    Defined in OTEL: No
    """

    # Path: model/attributes/sentry/sentry__http__prefetch.json
    SENTRY_HTTP_PREFETCH: Literal["sentry.http.prefetch"] = "sentry.http.prefetch"
    """If an http request was a prefetch request.

    Type: bool
    Contains PII: false
    Defined in OTEL: No
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
    Example: "idleTimeout"
    """

    # Path: model/attributes/sentry/sentry__is_remote.json
    SENTRY_IS_REMOTE: Literal["sentry.is_remote"] = "sentry.is_remote"
    """Indicates whether a span's parent is remote.

    Type: bool
    Contains PII: false
    Defined in OTEL: No
    Example: true
    """

    # Path: model/attributes/sentry/sentry__kind.json
    SENTRY_KIND: Literal["sentry.kind"] = "sentry.kind"
    """Used to clarify the relationship between parents and children, or to distinguish between spans, e.g. a `server` and `client` span with the same name.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Example: "server"
    """

    # Path: model/attributes/sentry/sentry__message__parameter__[key].json
    SENTRY_MESSAGE_PARAMETER_KEY: Literal["sentry.message.parameter.<key>"] = (
        "sentry.message.parameter.<key>"
    )
    """A parameter used in the message template. <key> can either be the number that represent the parameter's position in the template string (sentry.message.parameter.0, sentry.message.parameter.1, etc) or the parameter's name (sentry.message.parameter.item_id, sentry.message.parameter.user_id, etc)

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
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
    Example: "Hello, {name}!"
    """

    # Path: model/attributes/sentry/sentry__module__[key].json
    SENTRY_MODULE_KEY: Literal["sentry.module.<key>"] = "sentry.module.<key>"
    """A module that was loaded in the process. The key is the name of the module.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
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
    """

    # Path: model/attributes/sentry/sentry__normalized_description.json
    SENTRY_NORMALIZED_DESCRIPTION: Literal["sentry.normalized_description"] = (
        "sentry.normalized_description"
    )
    """Used as a generic attribute representing the normalized `sentry.description`. This refers to the legacy use case of `sentry.description` where it holds relevant data depending on the type of span (e.g. database query, resource url, http request description, etc).

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
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
    Example: "1544712660300000000"
    """

    # Path: model/attributes/sentry/sentry__op.json
    SENTRY_OP: Literal["sentry.op"] = "sentry.op"
    """The operation of a span.

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Example: "http.client"
    """

    # Path: model/attributes/sentry/sentry__origin.json
    SENTRY_ORIGIN: Literal["sentry.origin"] = "sentry.origin"
    """The origin of the instrumentation (e.g. span, log, etc.)

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Example: "auto.http.otel.fastify"
    """

    # Path: model/attributes/sentry/sentry__platform.json
    SENTRY_PLATFORM: Literal["sentry.platform"] = "sentry.platform"
    """The sdk platform that generated the event.

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Example: "php"
    """

    # Path: model/attributes/sentry/sentry__profiler_id.json
    SENTRY_PROFILER_ID: Literal["sentry.profiler_id"] = "sentry.profiler_id"
    """The id of the currently running profiler (continuous profiling)

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Example: "18779b64dd35d1a538e7ce2dd2d3fad3"
    """

    # Path: model/attributes/sentry/sentry__release.json
    SENTRY_RELEASE: Literal["sentry.release"] = "sentry.release"
    """The sentry release.

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Aliases: service.version, release
    Example: "7.0.0"
    """

    # Path: model/attributes/sentry/sentry__replay_id.json
    SENTRY_REPLAY_ID: Literal["sentry.replay_id"] = "sentry.replay_id"
    """The id of the sentry replay.

    Type: str
    Contains PII: false
    Defined in OTEL: No
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
    Example: true
    """

    # Path: model/attributes/sentry/sentry__sdk__integrations.json
    SENTRY_SDK_INTEGRATIONS: Literal["sentry.sdk.integrations"] = (
        "sentry.sdk.integrations"
    )
    """A list of names identifying enabled integrations. The list shouldhave all enabled integrations, including default integrations. Defaultintegrations are included because different SDK releases may contain differentdefault integrations.

    Type: List[str]
    Contains PII: false
    Defined in OTEL: No
    Example: ["InboundFilters","FunctionToString","BrowserApiErrors","Breadcrumbs"]
    """

    # Path: model/attributes/sentry/sentry__sdk__name.json
    SENTRY_SDK_NAME: Literal["sentry.sdk.name"] = "sentry.sdk.name"
    """The sentry sdk name.

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Example: "@sentry/react"
    """

    # Path: model/attributes/sentry/sentry__sdk__version.json
    SENTRY_SDK_VERSION: Literal["sentry.sdk.version"] = "sentry.sdk.version"
    """The sentry sdk version.

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Example: "7.0.0"
    """

    # Path: model/attributes/sentry/sentry__segment__id.json
    SENTRY_SEGMENT_ID: Literal["sentry.segment.id"] = "sentry.segment.id"
    """The segment ID of a span

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Aliases: sentry.segment_id
    Example: "051581bf3cb55c13"
    """

    # Path: model/attributes/sentry/sentry__segment__name.json
    SENTRY_SEGMENT_NAME: Literal["sentry.segment.name"] = "sentry.segment.name"
    """The segment name of a span

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Example: "GET /user"
    """

    # Path: model/attributes/sentry/sentry__segment_id.json
    _SENTRY_SEGMENT_ID: Literal["sentry.segment_id"] = "sentry.segment_id"
    """The segment ID of a span

    Type: str
    Contains PII: false
    Defined in OTEL: No
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
    Example: 0.5
    """

    # Path: model/attributes/sentry/sentry__span__source.json
    SENTRY_SPAN_SOURCE: Literal["sentry.span.source"] = "sentry.span.source"
    """The source of a span, also referred to as transaction source. Known values are:  `'custom'`, `'url'`, `'route'`, `'component'`, `'view'`, `'task'`.

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Example: "route"
    """

    # Path: model/attributes/sentry/sentry__status__message.json
    SENTRY_STATUS_MESSAGE: Literal["sentry.status.message"] = "sentry.status.message"
    """The from OTLP extracted status message.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Example: "foobar"
    """

    # Path: model/attributes/sentry/sentry__status_code.json
    SENTRY_STATUS_CODE: Literal["sentry.status_code"] = "sentry.status_code"
    """The HTTP status code used in Sentry Insights. Typically set by Sentry during ingestion, rather than by clients.

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Example: 200
    """

    # Path: model/attributes/sentry/sentry__trace__parent_span_id.json
    SENTRY_TRACE_PARENT_SPAN_ID: Literal["sentry.trace.parent_span_id"] = (
        "sentry.trace.parent_span_id"
    )
    """The span id of the span that was active when the log was collected. This should not be set if there was no active span.

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Example: "b0e6f15b45c36b12"
    """

    # Path: model/attributes/sentry/sentry__transaction.json
    SENTRY_TRANSACTION: Literal["sentry.transaction"] = "sentry.transaction"
    """The sentry transaction (segment name).

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Aliases: transaction
    Example: "GET /"
    """

    # Path: model/attributes/server/server__address.json
    SERVER_ADDRESS: Literal["server.address"] = "server.address"
    """Server domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Aliases: http.server_name, net.host.name, http.host
    Example: "example.com"
    """

    # Path: model/attributes/server/server__port.json
    SERVER_PORT: Literal["server.port"] = "server.port"
    """Server port number.

    Type: int
    Contains PII: maybe
    Defined in OTEL: Yes
    Aliases: net.host.port
    Example: 1337
    """

    # Path: model/attributes/service/service__name.json
    SERVICE_NAME: Literal["service.name"] = "service.name"
    """Logical name of the service.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Example: "omegastar"
    """

    # Path: model/attributes/service/service__version.json
    SERVICE_VERSION: Literal["service.version"] = "service.version"
    """The version string of the service API or implementation. The format is not defined by these conventions.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Aliases: sentry.release
    Example: "5.0.0"
    """

    # Path: model/attributes/thread/thread__id.json
    THREAD_ID: Literal["thread.id"] = "thread.id"
    """Current “managed” thread ID.

    Type: int
    Contains PII: false
    Defined in OTEL: Yes
    Example: 56
    """

    # Path: model/attributes/thread/thread__name.json
    THREAD_NAME: Literal["thread.name"] = "thread.name"
    """Current thread name.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Example: "main"
    """

    # Path: model/attributes/timber/timber__tag.json
    TIMBER_TAG: Literal["timber.tag"] = "timber.tag"
    """The log tag provided by the timber logging framework.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Example: "MyTag"
    """

    # Path: model/attributes/transaction.json
    TRANSACTION: Literal["transaction"] = "transaction"
    """The sentry transaction (segment name).

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Aliases: sentry.transaction
    DEPRECATED: Use sentry.transaction instead
    Example: "GET /"
    """

    # Path: model/attributes/type.json
    TYPE: Literal["type"] = "type"
    """More granular type of the operation happening.

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Example: "fetch"
    """

    # Path: model/attributes/ui/ui__component_name.json
    UI_COMPONENT_NAME: Literal["ui.component_name"] = "ui.component_name"
    """The name of the associated component.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Example: "HomeButton"
    """

    # Path: model/attributes/ui/ui__contributes_to_ttfd.json
    UI_CONTRIBUTES_TO_TTFD: Literal["ui.contributes_to_ttfd"] = "ui.contributes_to_ttfd"
    """Whether the span execution contributed to the TTFD (time to fully drawn) metric.

    Type: bool
    Contains PII: false
    Defined in OTEL: No
    Example: true
    """

    # Path: model/attributes/ui/ui__contributes_to_ttid.json
    UI_CONTRIBUTES_TO_TTID: Literal["ui.contributes_to_ttid"] = "ui.contributes_to_ttid"
    """Whether the span execution contributed to the TTID (time to initial display) metric.

    Type: bool
    Contains PII: false
    Defined in OTEL: No
    Example: true
    """

    # Path: model/attributes/url/url__domain.json
    URL_DOMAIN: Literal["url.domain"] = "url.domain"
    """Server domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Example: "example.com"
    """

    # Path: model/attributes/url/url__fragment.json
    URL_FRAGMENT: Literal["url.fragment"] = "url.fragment"
    """The fragments present in the URI. Note that this does not contain the leading # character, while the `http.fragment` attribute does.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Example: "details"
    """

    # Path: model/attributes/url/url__full.json
    URL_FULL: Literal["url.full"] = "url.full"
    """The URL of the resource that was fetched.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Aliases: http.url, url
    Example: "https://example.com/test?foo=bar#buzz"
    """

    # Path: model/attributes/url/url__path.json
    URL_PATH: Literal["url.path"] = "url.path"
    """The URI path component.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Example: "/foo"
    """

    # Path: model/attributes/url/url__path__parameter__[key].json
    URL_PATH_PARAMETER_KEY: Literal["url.path.parameter.<key>"] = (
        "url.path.parameter.<key>"
    )
    """Decoded parameters extracted from a URL path. Usually added by client-side routing frameworks like vue-router.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
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
    Example: 1337
    """

    # Path: model/attributes/url/url__query.json
    URL_QUERY: Literal["url.query"] = "url.query"
    """The query string present in the URL. Note that this does not contain the leading ? character, while the `http.query` attribute does.

    Type: str
    Contains PII: maybe - Query string values can contain sensitive information. Clients should attempt to scrub parameters that might contain sensitive information.
    Defined in OTEL: Yes
    Example: "foo=bar&bar=baz"
    """

    # Path: model/attributes/url/url__scheme.json
    URL_SCHEME: Literal["url.scheme"] = "url.scheme"
    """The URI scheme component identifying the used protocol.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Aliases: http.scheme
    Example: "https"
    """

    # Path: model/attributes/url/url__template.json
    URL_TEMPLATE: Literal["url.template"] = "url.template"
    """The low-cardinality template of an absolute path reference.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Aliases: http.route
    Example: "/users/:id"
    """

    # Path: model/attributes/url.json
    URL: Literal["url"] = "url"
    """The URL of the resource that was fetched.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
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
    Example: "test@example.com"
    """

    # Path: model/attributes/user/user__full_name.json
    USER_FULL_NAME: Literal["user.full_name"] = "user.full_name"
    """User's full name.

    Type: str
    Contains PII: true
    Defined in OTEL: Yes
    Example: "John Smith"
    """

    # Path: model/attributes/user/user__geo__city.json
    USER_GEO_CITY: Literal["user.geo.city"] = "user.geo.city"
    """Human readable city name.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Example: "Toronto"
    """

    # Path: model/attributes/user/user__geo__country_code.json
    USER_GEO_COUNTRY_CODE: Literal["user.geo.country_code"] = "user.geo.country_code"
    """Two-letter country code (ISO 3166-1 alpha-2).

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Example: "CA"
    """

    # Path: model/attributes/user/user__geo__region.json
    USER_GEO_REGION: Literal["user.geo.region"] = "user.geo.region"
    """Human readable region name or code.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Example: "Canada"
    """

    # Path: model/attributes/user/user__geo__subdivision.json
    USER_GEO_SUBDIVISION: Literal["user.geo.subdivision"] = "user.geo.subdivision"
    """Human readable subdivision name.

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Example: "Ontario"
    """

    # Path: model/attributes/user/user__hash.json
    USER_HASH: Literal["user.hash"] = "user.hash"
    """Unique user hash to correlate information for a user in anonymized form.

    Type: str
    Contains PII: true
    Defined in OTEL: Yes
    Example: "8ae4c2993e0f4f3b8b2d1b1f3b5e8f4d"
    """

    # Path: model/attributes/user/user__id.json
    USER_ID: Literal["user.id"] = "user.id"
    """Unique identifier of the user.

    Type: str
    Contains PII: true
    Defined in OTEL: Yes
    Example: "S-1-5-21-202424912787-2692429404-2351956786-1000"
    """

    # Path: model/attributes/user/user__ip_address.json
    USER_IP_ADDRESS: Literal["user.ip_address"] = "user.ip_address"
    """The IP address of the user.

    Type: str
    Contains PII: true
    Defined in OTEL: No
    Example: "192.168.1.1"
    """

    # Path: model/attributes/user/user__name.json
    USER_NAME: Literal["user.name"] = "user.name"
    """Short name or login/username of the user.

    Type: str
    Contains PII: true
    Defined in OTEL: Yes
    Example: "j.smith"
    """

    # Path: model/attributes/user/user__roles.json
    USER_ROLES: Literal["user.roles"] = "user.roles"
    """Array of user roles at the time of the event.

    Type: List[str]
    Contains PII: true
    Defined in OTEL: Yes
    Example: ["admin","editor"]
    """

    # Path: model/attributes/user_agent/user_agent__original.json
    USER_AGENT_ORIGINAL: Literal["user_agent.original"] = "user_agent.original"
    """Value of the HTTP User-Agent header sent by the client.

    Type: str
    Contains PII: maybe
    Defined in OTEL: Yes
    Aliases: http.user_agent
    Example: "Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Mobile/15E148 Safari/604.1"
    """

    # Path: model/attributes/vercel/vercel__branch.json
    VERCEL_BRANCH: Literal["vercel.branch"] = "vercel.branch"
    """Git branch name for Vercel project

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Example: "main"
    """

    # Path: model/attributes/vercel/vercel__build_id.json
    VERCEL_BUILD_ID: Literal["vercel.build_id"] = "vercel.build_id"
    """Identifier for the Vercel build (only present on build logs)

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Example: "bld_cotnkcr76"
    """

    # Path: model/attributes/vercel/vercel__deployment_id.json
    VERCEL_DEPLOYMENT_ID: Literal["vercel.deployment_id"] = "vercel.deployment_id"
    """Identifier for the Vercel deployment

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Example: "dpl_233NRGRjVZX1caZrXWtz5g1TAksD"
    """

    # Path: model/attributes/vercel/vercel__destination.json
    VERCEL_DESTINATION: Literal["vercel.destination"] = "vercel.destination"
    """Origin of the external content in Vercel (only on external logs)

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Example: "https://vitals.vercel-insights.com/v1"
    """

    # Path: model/attributes/vercel/vercel__edge_type.json
    VERCEL_EDGE_TYPE: Literal["vercel.edge_type"] = "vercel.edge_type"
    """Type of edge runtime in Vercel

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Example: "edge-function"
    """

    # Path: model/attributes/vercel/vercel__entrypoint.json
    VERCEL_ENTRYPOINT: Literal["vercel.entrypoint"] = "vercel.entrypoint"
    """Entrypoint for the request in Vercel

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Example: "api/index.js"
    """

    # Path: model/attributes/vercel/vercel__execution_region.json
    VERCEL_EXECUTION_REGION: Literal["vercel.execution_region"] = (
        "vercel.execution_region"
    )
    """Region where the request is executed

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Example: "sfo1"
    """

    # Path: model/attributes/vercel/vercel__id.json
    VERCEL_ID: Literal["vercel.id"] = "vercel.id"
    """Unique identifier for the log entry in Vercel

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Example: "1573817187330377061717300000"
    """

    # Path: model/attributes/vercel/vercel__ja3_digest.json
    VERCEL_JA3_DIGEST: Literal["vercel.ja3_digest"] = "vercel.ja3_digest"
    """JA3 fingerprint digest of Vercel request

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Example: "769,47-53-5-10-49161-49162-49171-49172-50-56-19-4,0-10-11,23-24-25,0"
    """

    # Path: model/attributes/vercel/vercel__ja4_digest.json
    VERCEL_JA4_DIGEST: Literal["vercel.ja4_digest"] = "vercel.ja4_digest"
    """JA4 fingerprint digest

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Example: "t13d1516h2_8daaf6152771_02713d6af862"
    """

    # Path: model/attributes/vercel/vercel__log_type.json
    VERCEL_LOG_TYPE: Literal["vercel.log_type"] = "vercel.log_type"
    """Vercel log output type

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Example: "stdout"
    """

    # Path: model/attributes/vercel/vercel__project_id.json
    VERCEL_PROJECT_ID: Literal["vercel.project_id"] = "vercel.project_id"
    """Identifier for the Vercel project

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Example: "gdufoJxB6b9b1fEqr1jUtFkyavUU"
    """

    # Path: model/attributes/vercel/vercel__project_name.json
    VERCEL_PROJECT_NAME: Literal["vercel.project_name"] = "vercel.project_name"
    """Name of the Vercel project

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Example: "my-app"
    """

    # Path: model/attributes/vercel/vercel__proxy__cache_id.json
    VERCEL_PROXY_CACHE_ID: Literal["vercel.proxy.cache_id"] = "vercel.proxy.cache_id"
    """Original request ID when request is served from cache

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Example: "pdx1::v8g4b-1744143786684-93dafbc0f70d"
    """

    # Path: model/attributes/vercel/vercel__proxy__client_ip.json
    VERCEL_PROXY_CLIENT_IP: Literal["vercel.proxy.client_ip"] = "vercel.proxy.client_ip"
    """Client IP address

    Type: str
    Contains PII: true
    Defined in OTEL: No
    Example: "120.75.16.101"
    """

    # Path: model/attributes/vercel/vercel__proxy__host.json
    VERCEL_PROXY_HOST: Literal["vercel.proxy.host"] = "vercel.proxy.host"
    """Hostname of the request

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Example: "test.vercel.app"
    """

    # Path: model/attributes/vercel/vercel__proxy__lambda_region.json
    VERCEL_PROXY_LAMBDA_REGION: Literal["vercel.proxy.lambda_region"] = (
        "vercel.proxy.lambda_region"
    )
    """Region where lambda function executed

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Example: "sfo1"
    """

    # Path: model/attributes/vercel/vercel__proxy__method.json
    VERCEL_PROXY_METHOD: Literal["vercel.proxy.method"] = "vercel.proxy.method"
    """HTTP method of the request

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Example: "GET"
    """

    # Path: model/attributes/vercel/vercel__proxy__path.json
    VERCEL_PROXY_PATH: Literal["vercel.proxy.path"] = "vercel.proxy.path"
    """Request path with query parameters

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Example: "/dynamic/some-value.json?route=some-value"
    """

    # Path: model/attributes/vercel/vercel__proxy__path_type.json
    VERCEL_PROXY_PATH_TYPE: Literal["vercel.proxy.path_type"] = "vercel.proxy.path_type"
    """How the request was served based on its path and project configuration

    Type: str
    Contains PII: false
    Defined in OTEL: No
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
    Example: "api"
    """

    # Path: model/attributes/vercel/vercel__proxy__referer.json
    VERCEL_PROXY_REFERER: Literal["vercel.proxy.referer"] = "vercel.proxy.referer"
    """Referer of the request

    Type: str
    Contains PII: maybe
    Defined in OTEL: No
    Example: "*.vercel.app"
    """

    # Path: model/attributes/vercel/vercel__proxy__region.json
    VERCEL_PROXY_REGION: Literal["vercel.proxy.region"] = "vercel.proxy.region"
    """Region where the request is processed

    Type: str
    Contains PII: false
    Defined in OTEL: No
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
    Example: 1024
    """

    # Path: model/attributes/vercel/vercel__proxy__scheme.json
    VERCEL_PROXY_SCHEME: Literal["vercel.proxy.scheme"] = "vercel.proxy.scheme"
    """Protocol of the request

    Type: str
    Contains PII: false
    Defined in OTEL: No
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
    Example: 200
    """

    # Path: model/attributes/vercel/vercel__proxy__timestamp.json
    VERCEL_PROXY_TIMESTAMP: Literal["vercel.proxy.timestamp"] = "vercel.proxy.timestamp"
    """Unix timestamp when the proxy request was made

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
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
    Example: ["Mozilla/5.0..."]
    """

    # Path: model/attributes/vercel/vercel__proxy__vercel_cache.json
    VERCEL_PROXY_VERCEL_CACHE: Literal["vercel.proxy.vercel_cache"] = (
        "vercel.proxy.vercel_cache"
    )
    """Cache status sent to the browser

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Example: "REVALIDATED"
    """

    # Path: model/attributes/vercel/vercel__proxy__vercel_id.json
    VERCEL_PROXY_VERCEL_ID: Literal["vercel.proxy.vercel_id"] = "vercel.proxy.vercel_id"
    """Vercel-specific identifier

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Example: "sfo1::abc123"
    """

    # Path: model/attributes/vercel/vercel__proxy__waf_action.json
    VERCEL_PROXY_WAF_ACTION: Literal["vercel.proxy.waf_action"] = (
        "vercel.proxy.waf_action"
    )
    """Action taken by firewall rules

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Example: "deny"
    """

    # Path: model/attributes/vercel/vercel__proxy__waf_rule_id.json
    VERCEL_PROXY_WAF_RULE_ID: Literal["vercel.proxy.waf_rule_id"] = (
        "vercel.proxy.waf_rule_id"
    )
    """ID of the firewall rule that matched

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Example: "rule_gAHz8jtSB1Gy"
    """

    # Path: model/attributes/vercel/vercel__request_id.json
    VERCEL_REQUEST_ID: Literal["vercel.request_id"] = "vercel.request_id"
    """Identifier of the Vercel request

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Example: "643af4e3-975a-4cc7-9e7a-1eda11539d90"
    """

    # Path: model/attributes/vercel/vercel__source.json
    VERCEL_SOURCE: Literal["vercel.source"] = "vercel.source"
    """Origin of the Vercel log (build, edge, lambda, static, external, or firewall)

    Type: str
    Contains PII: false
    Defined in OTEL: No
    Example: "build"
    """

    # Path: model/attributes/vercel/vercel__status_code.json
    VERCEL_STATUS_CODE: Literal["vercel.status_code"] = "vercel.status_code"
    """HTTP status code of the request (-1 means no response returned and the lambda crashed)

    Type: int
    Contains PII: maybe
    Defined in OTEL: No
    Example: 200
    """


ATTRIBUTE_METADATA: Dict[str, AttributeMetadata] = {
    "ai.citations": AttributeMetadata(
        brief="References or sources cited by the AI model in its response.",
        type=AttributeType.STRING_ARRAY,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=False,
        example=["Citation 1", "Citation 2"],
    ),
    "ai.completion_tokens.used": AttributeMetadata(
        brief="The number of tokens used to respond to the message.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example=10,
        deprecation=DeprecationInfo(replacement="gen_ai.usage.output_tokens"),
        aliases=["gen_ai.usage.output_tokens", "gen_ai.usage.completion_tokens"],
        sdks=["python"],
    ),
    "ai.documents": AttributeMetadata(
        brief="Documents or content chunks used as context for the AI model.",
        type=AttributeType.STRING_ARRAY,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=False,
        example=["document1.txt", "document2.pdf"],
    ),
    "ai.finish_reason": AttributeMetadata(
        brief="The reason why the model stopped generating.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="COMPLETE",
        deprecation=DeprecationInfo(replacement="gen_ai.response.finish_reason"),
        aliases=["gen_ai.response.finish_reasons"],
    ),
    "ai.frequency_penalty": AttributeMetadata(
        brief="Used to reduce repetitiveness of generated tokens. The higher the value, the stronger a penalty is applied to previously present tokens, proportional to how many times they have already appeared in the prompt or prior generation.",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example=0.5,
        deprecation=DeprecationInfo(replacement="gen_ai.request.frequency_penalty"),
        aliases=["gen_ai.request.frequency_penalty"],
    ),
    "ai.function_call": AttributeMetadata(
        brief="For an AI model call, the function that was called. This is deprecated for OpenAI, and replaced by tool_calls",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=False,
        example="function_name",
        deprecation=DeprecationInfo(replacement="gen_ai.tool.name"),
        aliases=["gen_ai.tool.name"],
    ),
    "ai.generation_id": AttributeMetadata(
        brief="Unique identifier for the completion.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="gen_123abc",
        deprecation=DeprecationInfo(replacement="gen_ai.response.id"),
        aliases=["gen_ai.response.id"],
    ),
    "ai.input_messages": AttributeMetadata(
        brief="The input messages sent to the model",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example='[{"role": "user", "message": "hello"}]',
        deprecation=DeprecationInfo(replacement="gen_ai.request.messages"),
        aliases=["gen_ai.request.messages"],
        sdks=["python"],
    ),
    "ai.is_search_required": AttributeMetadata(
        brief="Boolean indicating if the model needs to perform a search.",
        type=AttributeType.BOOLEAN,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example=False,
    ),
    "ai.metadata": AttributeMetadata(
        brief="Extra metadata passed to an AI pipeline step.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example='{"user_id": 123, "session_id": "abc123"}',
    ),
    "ai.model.provider": AttributeMetadata(
        brief="The provider of the model.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="openai",
        deprecation=DeprecationInfo(replacement="gen_ai.provider.name"),
        aliases=["gen_ai.provider.name", "gen_ai.system"],
    ),
    "ai.model_id": AttributeMetadata(
        brief="The vendor-specific ID of the model used.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="gpt-4",
        deprecation=DeprecationInfo(replacement="gen_ai.response.model"),
        aliases=["gen_ai.response.model"],
        sdks=["python"],
    ),
    "ai.pipeline.name": AttributeMetadata(
        brief="The name of the AI pipeline.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="Autofix Pipeline",
        deprecation=DeprecationInfo(replacement="gen_ai.pipeline.name"),
        aliases=["gen_ai.pipeline.name"],
    ),
    "ai.preamble": AttributeMetadata(
        brief="For an AI model call, the preamble parameter. Preambles are a part of the prompt used to adjust the model's overall behavior and conversation style.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=False,
        example="You are now a clown.",
    ),
    "ai.presence_penalty": AttributeMetadata(
        brief="Used to reduce repetitiveness of generated tokens. Similar to frequency_penalty, except that this penalty is applied equally to all tokens that have already appeared, regardless of their exact frequencies.",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example=0.5,
        deprecation=DeprecationInfo(replacement="gen_ai.request.presence_penalty"),
        aliases=["gen_ai.request.presence_penalty"],
    ),
    "ai.prompt_tokens.used": AttributeMetadata(
        brief="The number of tokens used to process just the prompt.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example=20,
        deprecation=DeprecationInfo(replacement="gen_ai.usage.input_tokens"),
        aliases=["gen_ai.usage.prompt_tokens", "gen_ai.usage.input_tokens"],
        sdks=["python"],
    ),
    "ai.raw_prompting": AttributeMetadata(
        brief="When enabled, the user’s prompt will be sent to the model without any pre-processing.",
        type=AttributeType.BOOLEAN,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example=True,
    ),
    "ai.response_format": AttributeMetadata(
        brief="For an AI model call, the format of the response",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="json_object",
    ),
    "ai.responses": AttributeMetadata(
        brief="The response messages sent back by the AI model.",
        type=AttributeType.STRING_ARRAY,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example=["hello", "world"],
        deprecation=DeprecationInfo(replacement="gen_ai.response.text"),
        sdks=["python"],
    ),
    "ai.search_queries": AttributeMetadata(
        brief="Queries used to search for relevant context or documents.",
        type=AttributeType.STRING_ARRAY,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=False,
        example=["climate change effects", "renewable energy"],
    ),
    "ai.search_results": AttributeMetadata(
        brief="Results returned from search queries for context.",
        type=AttributeType.STRING_ARRAY,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=False,
        example=["search_result_1, search_result_2"],
    ),
    "ai.seed": AttributeMetadata(
        brief="The seed, ideally models given the same seed and same other parameters will produce the exact same output.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="1234567890",
        deprecation=DeprecationInfo(replacement="gen_ai.request.seed"),
        aliases=["gen_ai.request.seed"],
    ),
    "ai.streaming": AttributeMetadata(
        brief="Whether the request was streamed back.",
        type=AttributeType.BOOLEAN,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example=True,
        deprecation=DeprecationInfo(replacement="gen_ai.response.streaming"),
        aliases=["gen_ai.response.streaming"],
        sdks=["python"],
    ),
    "ai.tags": AttributeMetadata(
        brief="Tags that describe an AI pipeline step.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example='{"executed_function": "add_integers"}',
    ),
    "ai.temperature": AttributeMetadata(
        brief="For an AI model call, the temperature parameter. Temperature essentially means how random the output will be.",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example=0.1,
        deprecation=DeprecationInfo(replacement="gen_ai.request.temperature"),
        aliases=["gen_ai.request.temperature"],
    ),
    "ai.texts": AttributeMetadata(
        brief="Raw text inputs provided to the model.",
        type=AttributeType.STRING_ARRAY,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=False,
        example=["Hello, how are you?", "What is the capital of France?"],
    ),
    "ai.tool_calls": AttributeMetadata(
        brief="For an AI model call, the tool calls that were made.",
        type=AttributeType.STRING_ARRAY,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=False,
        example=["tool_call_1", "tool_call_2"],
        deprecation=DeprecationInfo(replacement="gen_ai.response.tool_calls"),
    ),
    "ai.tools": AttributeMetadata(
        brief="For an AI model call, the functions that are available",
        type=AttributeType.STRING_ARRAY,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example=["function_1", "function_2"],
        deprecation=DeprecationInfo(replacement="gen_ai.request.available_tools"),
    ),
    "ai.top_k": AttributeMetadata(
        brief="Limits the model to only consider the K most likely next tokens, where K is an integer (e.g., top_k=20 means only the 20 highest probability tokens are considered).",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example=35,
        deprecation=DeprecationInfo(replacement="gen_ai.request.top_k"),
        aliases=["gen_ai.request.top_k"],
    ),
    "ai.top_p": AttributeMetadata(
        brief="Limits the model to only consider tokens whose cumulative probability mass adds up to p, where p is a float between 0 and 1 (e.g., top_p=0.7 means only tokens that sum up to 70% of the probability mass are considered).",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example=0.7,
        deprecation=DeprecationInfo(replacement="gen_ai.request.top_p"),
        aliases=["gen_ai.request.top_p"],
    ),
    "ai.total_cost": AttributeMetadata(
        brief="The total cost for the tokens used.",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example=12.34,
    ),
    "ai.total_tokens.used": AttributeMetadata(
        brief="The total number of tokens used to process the prompt.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example=30,
        deprecation=DeprecationInfo(replacement="gen_ai.usage.total_tokens"),
        aliases=["gen_ai.usage.total_tokens"],
        sdks=["python"],
    ),
    "ai.warnings": AttributeMetadata(
        brief="Warning messages generated during model execution.",
        type=AttributeType.STRING_ARRAY,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=False,
        example=["Token limit exceeded"],
    ),
    "app_start_type": AttributeMetadata(
        brief="Mobile app start variant. Either cold or warm.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="cold",
    ),
    "blocked_main_thread": AttributeMetadata(
        brief="Whether the main thread was blocked by the span.",
        type=AttributeType.BOOLEAN,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example=True,
    ),
    "browser.name": AttributeMetadata(
        brief="The name of the browser.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="Chrome",
        aliases=["sentry.browser.name"],
    ),
    "browser.report.type": AttributeMetadata(
        brief="A browser report sent via reporting API..",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="network-error",
    ),
    "browser.script.invoker": AttributeMetadata(
        brief="How a script was called in the browser.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="Window.requestAnimationFrame",
        sdks=["browser"],
    ),
    "browser.script.invoker_type": AttributeMetadata(
        brief="Browser script entry point type.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="event-listener",
        sdks=["browser"],
    ),
    "browser.script.source_char_position": AttributeMetadata(
        brief="A number representing the script character position of the script.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example=678,
        sdks=["browser"],
    ),
    "browser.version": AttributeMetadata(
        brief="The version of the browser.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="120.0.6099.130",
        aliases=["sentry.browser.version"],
    ),
    "cache.hit": AttributeMetadata(
        brief="If the cache was hit during this span.",
        type=AttributeType.BOOLEAN,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example=True,
        sdks=["php-laravel"],
    ),
    "cache.item_size": AttributeMetadata(
        brief="The size of the requested item in the cache. In bytes.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example=58,
    ),
    "cache.key": AttributeMetadata(
        brief="The key of the cache accessed.",
        type=AttributeType.STRING_ARRAY,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example=["my-cache-key", "my-other-cache-key"],
        sdks=["php-laravel"],
    ),
    "cache.operation": AttributeMetadata(
        brief="The operation being performed on the cache.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="get",
        sdks=["php-laravel"],
    ),
    "cache.ttl": AttributeMetadata(
        brief="The ttl of the cache in seconds",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example=120,
        sdks=["php-laravel"],
    ),
    "channel": AttributeMetadata(
        brief="The channel name that is being used.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="mail",
        sdks=["php-laravel"],
    ),
    "client.address": AttributeMetadata(
        brief="Client address - domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=True,
        example="example.com",
        aliases=["http.client_ip"],
    ),
    "client.port": AttributeMetadata(
        brief="Client port number.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example=5432,
    ),
    "cloudflare.d1.duration": AttributeMetadata(
        brief="The duration of a Cloudflare D1 operation.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example=543,
        sdks=["javascript-cloudflare"],
    ),
    "cloudflare.d1.rows_read": AttributeMetadata(
        brief="The number of rows read in a Cloudflare D1 operation.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example=12,
        sdks=["javascript-cloudflare"],
    ),
    "cloudflare.d1.rows_written": AttributeMetadata(
        brief="The number of rows written in a Cloudflare D1 operation.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example=12,
        sdks=["javascript-cloudflare"],
    ),
    "code.file.path": AttributeMetadata(
        brief="The source code file name that identifies the code unit as uniquely as possible (preferably an absolute file path).",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="/app/myapplication/http/handler/server.py",
        aliases=["code.filepath"],
    ),
    "code.filepath": AttributeMetadata(
        brief="The source code file name that identifies the code unit as uniquely as possible (preferably an absolute file path).",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="/app/myapplication/http/handler/server.py",
        deprecation=DeprecationInfo(replacement="code.file.path"),
        aliases=["code.file.path"],
    ),
    "code.function": AttributeMetadata(
        brief="The method or function name, or equivalent (usually rightmost part of the code unit's name).",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="server_request",
        deprecation=DeprecationInfo(replacement="code.function.name"),
        aliases=["code.function.name"],
    ),
    "code.function.name": AttributeMetadata(
        brief="The method or function name, or equivalent (usually rightmost part of the code unit's name).",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="server_request",
        aliases=["code.function"],
    ),
    "code.line.number": AttributeMetadata(
        brief="The line number in code.filepath best representing the operation. It SHOULD point within the code unit named in code.function",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example=42,
        aliases=["code.lineno"],
    ),
    "code.lineno": AttributeMetadata(
        brief="The line number in code.filepath best representing the operation. It SHOULD point within the code unit named in code.function",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example=42,
        deprecation=DeprecationInfo(replacement="code.line.number"),
        aliases=["code.line.number"],
    ),
    "code.namespace": AttributeMetadata(
        brief="The 'namespace' within which code.function is defined. Usually the qualified class or module name, such that code.namespace + some separator + code.function form a unique identifier for the code unit.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="http.handler",
        deprecation=DeprecationInfo(
            replacement="code.function.name",
            reason="code.function.name should include the namespace.",
        ),
    ),
    "culture.calendar": AttributeMetadata(
        brief="The calendar system used by the culture.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="GregorianCalendar",
    ),
    "culture.display_name": AttributeMetadata(
        brief="Human readable name of the culture.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="English (United States)",
    ),
    "culture.is_24_hour_format": AttributeMetadata(
        brief="Whether the culture uses 24-hour time format.",
        type=AttributeType.BOOLEAN,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example=True,
    ),
    "culture.locale": AttributeMetadata(
        brief="The locale identifier following RFC 4646.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="en-US",
    ),
    "culture.timezone": AttributeMetadata(
        brief="The timezone of the culture, as a geographic timezone identifier.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="Europe/Vienna",
    ),
    "db.collection.name": AttributeMetadata(
        brief="The name of a collection (table, container) within the database.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="users",
    ),
    "db.name": AttributeMetadata(
        brief="The name of the database being accessed.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="customers",
        deprecation=DeprecationInfo(replacement="db.namespace"),
        aliases=["db.namespace"],
    ),
    "db.namespace": AttributeMetadata(
        brief="The name of the database being accessed.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="customers",
        aliases=["db.name"],
    ),
    "db.operation": AttributeMetadata(
        brief="The name of the operation being executed.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="SELECT",
        deprecation=DeprecationInfo(
            replacement="db.operation.name", status=DeprecationStatus.NORMALIZE
        ),
        aliases=["db.operation.name"],
    ),
    "db.operation.name": AttributeMetadata(
        brief="The name of the operation being executed.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="SELECT",
        aliases=["db.operation"],
    ),
    "db.query.parameter.<key>": AttributeMetadata(
        brief="A query parameter used in db.query.text, with <key> being the parameter name, and the attribute value being a string representation of the parameter value.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        has_dynamic_suffix=True,
        example="db.query.parameter.foo='123'",
    ),
    "db.query.summary": AttributeMetadata(
        brief="A shortened representation of operation(s) in the full query. This attribute must be low-cardinality and should only contain the operation table names.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="SELECT users;",
    ),
    "db.query.text": AttributeMetadata(
        brief="The database parameterized query being executed. Any parameter values (filters, insertion values, etc) should be replaced with parameter placeholders. If applicable, use `db.query.parameter.<key>` to add the parameter value.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="SELECT * FROM users WHERE id = $1",
        aliases=["db.statement"],
    ),
    "db.redis.connection": AttributeMetadata(
        brief="The redis connection name.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="my-redis-instance",
        sdks=["php-laravel"],
    ),
    "db.redis.parameters": AttributeMetadata(
        brief="The array of command parameters given to a redis command.",
        type=AttributeType.STRING_ARRAY,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example=["test", "*"],
        sdks=["php-laravel"],
    ),
    "db.sql.bindings": AttributeMetadata(
        brief="The array of query bindings.",
        type=AttributeType.STRING_ARRAY,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example=["1", "foo"],
        deprecation=DeprecationInfo(
            replacement="db.query.parameter.<key>",
            reason="Instead of adding every binding in the db.sql.bindings attribute, add them as individual entires with db.query.parameter.<key>.",
        ),
        sdks=["php-laravel"],
    ),
    "db.statement": AttributeMetadata(
        brief="The database statement being executed.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="SELECT * FROM users",
        deprecation=DeprecationInfo(
            replacement="db.query.text", status=DeprecationStatus.NORMALIZE
        ),
        aliases=["db.query.text"],
    ),
    "db.system": AttributeMetadata(
        brief="An identifier for the database management system (DBMS) product being used. See [OpenTelemetry docs](https://github.com/open-telemetry/semantic-conventions/blob/main/docs/database/database-spans.md#notes-and-well-known-identifiers-for-dbsystem) for a list of well-known identifiers.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="postgresql",
        deprecation=DeprecationInfo(
            replacement="db.system.name", status=DeprecationStatus.BACKFILL
        ),
        aliases=["db.system.name"],
    ),
    "db.system.name": AttributeMetadata(
        brief="An identifier for the database management system (DBMS) product being used. See [OpenTelemetry docs](https://github.com/open-telemetry/semantic-conventions/blob/main/docs/database/database-spans.md#notes-and-well-known-identifiers-for-dbsystem) for a list of well-known identifiers.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="postgresql",
        aliases=["db.system"],
    ),
    "db.user": AttributeMetadata(
        brief="The database user.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=True,
        example="fancy_user",
    ),
    "device.brand": AttributeMetadata(
        brief="The brand of the device.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="Apple",
    ),
    "device.family": AttributeMetadata(
        brief="The family of the device.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="iPhone",
    ),
    "device.model": AttributeMetadata(
        brief="The model of the device.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="iPhone 15 Pro Max",
    ),
    "environment": AttributeMetadata(
        brief="The sentry environment.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="production",
        deprecation=DeprecationInfo(replacement="sentry.environment"),
        aliases=["sentry.environment"],
    ),
    "error.type": AttributeMetadata(
        brief="Describes a class of error the operation ended with.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="timeout",
    ),
    "event.id": AttributeMetadata(
        brief="The unique identifier for this event (log record)",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example=1234567890,
    ),
    "event.name": AttributeMetadata(
        brief="The name that uniquely identifies this event (log record)",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="Process Payload",
    ),
    "exception.escaped": AttributeMetadata(
        brief="SHOULD be set to true if the exception event is recorded at a point where it is known that the exception is escaping the scope of the span.",
        type=AttributeType.BOOLEAN,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=True,
        example=True,
    ),
    "exception.message": AttributeMetadata(
        brief="The error message.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="ENOENT: no such file or directory",
    ),
    "exception.stacktrace": AttributeMetadata(
        brief="A stacktrace as a string in the natural representation for the language runtime. The representation is to be determined and documented by each language SIG.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example='Exception in thread "main" java.lang.RuntimeException: Test exception\n at com.example.GenerateTrace.methodB(GenerateTrace.java:13)\n at com.example.GenerateTrace.methodA(GenerateTrace.java:9)\n at com.example.GenerateTrace.main(GenerateTrace.java:5)',
    ),
    "exception.type": AttributeMetadata(
        brief="The type of the exception (its fully-qualified class name, if applicable). The dynamic type of the exception should be preferred over the static type in languages that support it.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="OSError",
    ),
    "faas.coldstart": AttributeMetadata(
        brief="A boolean that is true if the serverless function is executed for the first time (aka cold-start).",
        type=AttributeType.BOOLEAN,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=True,
        example=True,
    ),
    "faas.cron": AttributeMetadata(
        brief="A string containing the schedule period as Cron Expression.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="0/5 * * * ? *",
    ),
    "faas.time": AttributeMetadata(
        brief="A string containing the function invocation time in the ISO 8601 format expressed in UTC.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="2020-01-23T13:47:06Z",
    ),
    "faas.trigger": AttributeMetadata(
        brief="Type of the trigger which caused this function invocation.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="timer",
    ),
    "flag.evaluation.<key>": AttributeMetadata(
        brief="An instance of a feature flag evaluation. The value of this attribute is the boolean representing the evaluation result. The <key> suffix is the name of the feature flag.",
        type=AttributeType.BOOLEAN,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        has_dynamic_suffix=True,
        example="flag.evaluation.is_new_ui=true",
    ),
    "frames.delay": AttributeMetadata(
        brief="The sum of all delayed frame durations in seconds during the lifetime of the span. For more information see [frames delay](https://develop.sentry.dev/sdk/performance/frames-delay/).",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example=5,
    ),
    "frames.frozen": AttributeMetadata(
        brief="The number of frozen frames rendered during the lifetime of the span.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example=3,
    ),
    "frames.slow": AttributeMetadata(
        brief="The number of slow frames rendered during the lifetime of the span.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example=1,
    ),
    "frames.total": AttributeMetadata(
        brief="The number of total frames rendered during the lifetime of the span.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example=60,
    ),
    "fs_error": AttributeMetadata(
        brief="The error message of a file system error.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="ENOENT: no such file or directory",
        deprecation=DeprecationInfo(
            replacement="error.type",
            reason="This attribute is not part of the OpenTelemetry specification and error.type fits much better.",
        ),
        sdks=["javascript-node"],
    ),
    "gen_ai.agent.name": AttributeMetadata(
        brief="The name of the agent being used.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="ResearchAssistant",
    ),
    "gen_ai.conversation.id": AttributeMetadata(
        brief="The unique identifier for a conversation (session, thread), used to store and correlate messages within this conversation.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="conv_5j66UpCpwteGg4YSxUnt7lPY",
    ),
    "gen_ai.cost.input_tokens": AttributeMetadata(
        brief="The cost of tokens used to process the AI input (prompt) in USD (without cached input tokens).",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example=123.45,
    ),
    "gen_ai.cost.output_tokens": AttributeMetadata(
        brief="The cost of tokens used for creating the AI output in USD (without reasoning tokens).",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example=123.45,
    ),
    "gen_ai.cost.total_tokens": AttributeMetadata(
        brief="The total cost for the tokens used.",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example=12.34,
    ),
    "gen_ai.embeddings.input": AttributeMetadata(
        brief="The input to the embeddings model.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="What's the weather in Paris?",
    ),
    "gen_ai.input.messages": AttributeMetadata(
        brief='The messages passed to the model. It has to be a stringified version of an array of objects. The `role` attribute of each object must be `"user"`, `"assistant"`, `"tool"`, or `"system"`. For messages of the role `"tool"`, the `content` can be a string or an arbitrary object with information about the tool call. For other messages the `content` can be either a string or a list of objects in the format `{type: "text", text:"..."}`.',
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example='[{"role": "user", "parts": [{"type": "text", "content": "Weather in Paris?"}]}, {"role": "assistant", "parts": [{"type": "tool_call", "id": "call_VSPygqKTWdrhaFErNvMV18Yl", "name": "get_weather", "arguments": {"location": "Paris"}}]}, {"role": "tool", "parts": [{"type": "tool_call_response", "id": "call_VSPygqKTWdrhaFErNvMV18Yl", "result": "rainy, 57°F"}]}]',
    ),
    "gen_ai.operation.name": AttributeMetadata(
        brief="The name of the operation being performed. It has the following list of well-known values: 'chat', 'create_agent', 'embeddings', 'execute_tool', 'generate_content', 'invoke_agent', 'text_completion'. If one of them applies, then that value MUST be used. Otherwise a custom value MAY be used.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="chat",
    ),
    "gen_ai.operation.type": AttributeMetadata(
        brief="The type of AI operation. Must be one of 'agent' (invoke_agent and create_agent spans), 'ai_client' (any LLM call), 'tool' (execute_tool spans), 'handoff' (handoff spans), 'other' (input and output processors, skill loading, guardrails etc.) . Added during ingestion based on span.op and gen_ai.operation.type. Used to filter and aggregate data in the UI",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="tool",
    ),
    "gen_ai.output.messages": AttributeMetadata(
        brief="The model's response messages. It has to be a stringified version of an array of message objects, which can include text responses and tool calls.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example='[{"role": "assistant", "parts": [{"type": "text", "content": "The weather in Paris is currently rainy with a temperature of 57°F."}], "finish_reason": "stop"}]',
    ),
    "gen_ai.pipeline.name": AttributeMetadata(
        brief="Name of the AI pipeline or chain being executed.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="Autofix Pipeline",
        aliases=["ai.pipeline.name"],
    ),
    "gen_ai.prompt": AttributeMetadata(
        brief="The input messages sent to the model",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example='[{"role": "user", "message": "hello"}]',
        deprecation=DeprecationInfo(
            reason="Deprecated from OTEL, use gen_ai.input.messages with the new format instead."
        ),
    ),
    "gen_ai.provider.name": AttributeMetadata(
        brief="The Generative AI provider as identified by the client or server instrumentation.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="openai",
        aliases=["ai.model.provider", "gen_ai.system"],
    ),
    "gen_ai.request.available_tools": AttributeMetadata(
        brief="The available tools for the model. It has to be a stringified version of an array of objects.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example='[{"name": "get_weather", "description": "Get the weather for a given location"}, {"name": "get_news", "description": "Get the news for a given topic"}]',
        deprecation=DeprecationInfo(replacement="gen_ai.tool.definitions"),
    ),
    "gen_ai.request.frequency_penalty": AttributeMetadata(
        brief="Used to reduce repetitiveness of generated tokens. The higher the value, the stronger a penalty is applied to previously present tokens, proportional to how many times they have already appeared in the prompt or prior generation.",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example=0.5,
        aliases=["ai.frequency_penalty"],
    ),
    "gen_ai.request.max_tokens": AttributeMetadata(
        brief="The maximum number of tokens to generate in the response.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example=2048,
    ),
    "gen_ai.request.messages": AttributeMetadata(
        brief='The messages passed to the model. It has to be a stringified version of an array of objects. The `role` attribute of each object must be `"user"`, `"assistant"`, `"tool"`, or `"system"`. For messages of the role `"tool"`, the `content` can be a string or an arbitrary object with information about the tool call. For other messages the `content` can be either a string or a list of objects in the format `{type: "text", text:"..."}`.',
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example='[{"role": "system", "content": "Generate a random number."}, {"role": "user", "content": [{"text": "Generate a random number between 0 and 10.", "type": "text"}]}, {"role": "tool", "content": {"toolCallId": "1", "toolName": "Weather", "output": "rainy"}}]',
        deprecation=DeprecationInfo(replacement="gen_ai.input.messages"),
        aliases=["ai.input_messages"],
    ),
    "gen_ai.request.model": AttributeMetadata(
        brief="The model identifier being used for the request.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="gpt-4-turbo-preview",
    ),
    "gen_ai.request.presence_penalty": AttributeMetadata(
        brief="Used to reduce repetitiveness of generated tokens. Similar to frequency_penalty, except that this penalty is applied equally to all tokens that have already appeared, regardless of their exact frequencies.",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example=0.5,
        aliases=["ai.presence_penalty"],
    ),
    "gen_ai.request.seed": AttributeMetadata(
        brief="The seed, ideally models given the same seed and same other parameters will produce the exact same output.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="1234567890",
        aliases=["ai.seed"],
    ),
    "gen_ai.request.temperature": AttributeMetadata(
        brief="For an AI model call, the temperature parameter. Temperature essentially means how random the output will be.",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example=0.1,
        aliases=["ai.temperature"],
    ),
    "gen_ai.request.top_k": AttributeMetadata(
        brief="Limits the model to only consider the K most likely next tokens, where K is an integer (e.g., top_k=20 means only the 20 highest probability tokens are considered).",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example=35,
        aliases=["ai.top_k"],
    ),
    "gen_ai.request.top_p": AttributeMetadata(
        brief="Limits the model to only consider tokens whose cumulative probability mass adds up to p, where p is a float between 0 and 1 (e.g., top_p=0.7 means only tokens that sum up to 70% of the probability mass are considered).",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example=0.7,
        aliases=["ai.top_p"],
    ),
    "gen_ai.response.finish_reasons": AttributeMetadata(
        brief="The reason why the model stopped generating.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="COMPLETE",
        aliases=["ai.finish_reason"],
    ),
    "gen_ai.response.id": AttributeMetadata(
        brief="Unique identifier for the completion.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="gen_123abc",
        aliases=["ai.generation_id"],
    ),
    "gen_ai.response.model": AttributeMetadata(
        brief="The vendor-specific ID of the model used.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="gpt-4",
        aliases=["ai.model_id"],
    ),
    "gen_ai.response.streaming": AttributeMetadata(
        brief="Whether or not the AI model call's response was streamed back asynchronously",
        type=AttributeType.BOOLEAN,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example=True,
        aliases=["ai.streaming"],
    ),
    "gen_ai.response.text": AttributeMetadata(
        brief="The model's response text messages. It has to be a stringified version of an array of response text messages.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example='["The weather in Paris is rainy and overcast, with temperatures around 57°F", "The weather in London is sunny and warm, with temperatures around 65°F"]',
        deprecation=DeprecationInfo(replacement="gen_ai.output.messages"),
    ),
    "gen_ai.response.time_to_first_token": AttributeMetadata(
        brief="Time in seconds when the first response content chunk arrived in streaming responses.",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example=0.6853435,
    ),
    "gen_ai.response.tokens_per_second": AttributeMetadata(
        brief="The total output tokens per seconds throughput",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example=12345.67,
    ),
    "gen_ai.response.tool_calls": AttributeMetadata(
        brief="The tool calls in the model's response. It has to be a stringified version of an array of objects.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example='[{"name": "get_weather", "arguments": {"location": "Paris"}}]',
        deprecation=DeprecationInfo(replacement="gen_ai.output.messages"),
    ),
    "gen_ai.system": AttributeMetadata(
        brief="The provider of the model.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="openai",
        deprecation=DeprecationInfo(replacement="gen_ai.provider.name"),
        aliases=["ai.model.provider", "gen_ai.provider.name"],
    ),
    "gen_ai.system.message": AttributeMetadata(
        brief="The system instructions passed to the model.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=False,
        example="You are a helpful assistant",
        deprecation=DeprecationInfo(replacement="gen_ai.system_instructions"),
    ),
    "gen_ai.system_instructions": AttributeMetadata(
        brief="The system instructions passed to the model.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="You are a helpful assistant",
    ),
    "gen_ai.tool.call.arguments": AttributeMetadata(
        brief="The arguments of the tool call. It has to be a stringified version of the arguments to the tool.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example='{"location": "Paris"}',
        aliases=["gen_ai.tool.input"],
    ),
    "gen_ai.tool.call.result": AttributeMetadata(
        brief="The result of the tool call. It has to be a stringified version of the result of the tool.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="rainy, 57°F",
        aliases=["gen_ai.tool.output", "gen_ai.tool.message"],
    ),
    "gen_ai.tool.definitions": AttributeMetadata(
        brief="The list of source system tool definitions available to the GenAI agent or model.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example='[{"type": "function", "name": "get_current_weather", "description": "Get the current weather in a given location", "parameters": {"type": "object", "properties": {"location": {"type": "string", "description": "The city and state, e.g. San Francisco, CA"}, "unit": {"type": "string", "enum": ["celsius", "fahrenheit"]}}, "required": ["location", "unit"]}}]',
    ),
    "gen_ai.tool.description": AttributeMetadata(
        brief="The description of the tool being used.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="Searches the web for current information about a topic",
    ),
    "gen_ai.tool.input": AttributeMetadata(
        brief="The input of the tool being used. It has to be a stringified version of the input to the tool.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example='{"location": "Paris"}',
        deprecation=DeprecationInfo(replacement="gen_ai.tool.call.arguments"),
        aliases=["gen_ai.tool.call.arguments"],
    ),
    "gen_ai.tool.message": AttributeMetadata(
        brief="The response from a tool or function call passed to the model.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=False,
        example="rainy, 57°F",
        deprecation=DeprecationInfo(replacement="gen_ai.tool.call.result"),
        aliases=["gen_ai.tool.call.result", "gen_ai.tool.output"],
    ),
    "gen_ai.tool.name": AttributeMetadata(
        brief="Name of the tool utilized by the agent.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="Flights",
        aliases=["ai.function_call"],
    ),
    "gen_ai.tool.output": AttributeMetadata(
        brief="The output of the tool being used. It has to be a stringified version of the output of the tool.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="rainy, 57°F",
        deprecation=DeprecationInfo(replacement="gen_ai.tool.call.result"),
        aliases=["gen_ai.tool.call.result", "gen_ai.tool.message"],
    ),
    "gen_ai.tool.type": AttributeMetadata(
        brief="The type of tool being used.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="function",
    ),
    "gen_ai.usage.completion_tokens": AttributeMetadata(
        brief="The number of tokens used in the GenAI response (completion).",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example=10,
        deprecation=DeprecationInfo(replacement="gen_ai.usage.output_tokens"),
        aliases=["ai.completion_tokens.used", "gen_ai.usage.output_tokens"],
    ),
    "gen_ai.usage.input_tokens": AttributeMetadata(
        brief="The number of tokens used to process the AI input (prompt) including cached input tokens.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example=10,
        aliases=["ai.prompt_tokens.used", "gen_ai.usage.prompt_tokens"],
    ),
    "gen_ai.usage.input_tokens.cache_write": AttributeMetadata(
        brief="The number of tokens written to the cache when processing the AI input (prompt).",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example=100,
    ),
    "gen_ai.usage.input_tokens.cached": AttributeMetadata(
        brief="The number of cached tokens used to process the AI input (prompt).",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example=50,
    ),
    "gen_ai.usage.output_tokens": AttributeMetadata(
        brief="The number of tokens used for creating the AI output (including reasoning tokens).",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example=10,
        aliases=["ai.completion_tokens.used", "gen_ai.usage.completion_tokens"],
    ),
    "gen_ai.usage.output_tokens.reasoning": AttributeMetadata(
        brief="The number of tokens used for reasoning to create the AI output.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example=75,
    ),
    "gen_ai.usage.prompt_tokens": AttributeMetadata(
        brief="The number of tokens used in the GenAI input (prompt).",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example=20,
        deprecation=DeprecationInfo(replacement="gen_ai.usage.input_tokens"),
        aliases=["ai.prompt_tokens.used", "gen_ai.usage.input_tokens"],
    ),
    "gen_ai.usage.total_tokens": AttributeMetadata(
        brief="The total number of tokens used to process the prompt. (input tokens plus output todkens)",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example=20,
        aliases=["ai.total_tokens.used"],
    ),
    "graphql.operation.name": AttributeMetadata(
        brief="The name of the operation being executed.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="findBookById",
    ),
    "graphql.operation.type": AttributeMetadata(
        brief="The type of the operation being executed.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="query",
    ),
    "http.client_ip": AttributeMetadata(
        brief="Client address - domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=True,
        example="example.com",
        deprecation=DeprecationInfo(replacement="client.address"),
        aliases=["client.address"],
    ),
    "http.decoded_response_content_length": AttributeMetadata(
        brief="The decoded body size of the response (in bytes).",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example=456,
        sdks=["javascript-browser"],
    ),
    "http.flavor": AttributeMetadata(
        brief="The actual version of the protocol used for network communication.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="1.1",
        deprecation=DeprecationInfo(replacement="network.protocol.version"),
        aliases=["network.protocol.version", "net.protocol.version"],
    ),
    "http.fragment": AttributeMetadata(
        brief="The fragments present in the URI. Note that this contains the leading # character, while the `url.fragment` attribute does not.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="#details",
    ),
    "http.host": AttributeMetadata(
        brief="The domain name.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
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
    ),
    "http.method": AttributeMetadata(
        brief="The HTTP method used.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="GET",
        deprecation=DeprecationInfo(replacement="http.request.method"),
        aliases=["http.request.method"],
    ),
    "http.query": AttributeMetadata(
        brief="The query string present in the URL. Note that this contains the leading ? character, while the `url.query` attribute does not.",
        type=AttributeType.STRING,
        pii=PiiInfo(
            isPii=IsPii.MAYBE,
            reason="Query string values can contain sensitive information. Clients should attempt to scrub parameters that might contain sensitive information.",
        ),
        is_in_otel=False,
        example="?foo=bar&bar=baz",
    ),
    "http.request.connect_start": AttributeMetadata(
        brief="The UNIX timestamp representing the time immediately before the user agent starts establishing the connection to the server to retrieve the resource.",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example=1732829555.111,
        sdks=["javascript-browser"],
    ),
    "http.request.connection_end": AttributeMetadata(
        brief="The UNIX timestamp representing the time immediately after the browser finishes establishing the connection to the server to retrieve the resource. The timestamp value includes the time interval to establish the transport connection, as well as other time intervals such as TLS handshake and SOCKS authentication.",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example=1732829555.15,
        sdks=["javascript-browser"],
    ),
    "http.request.domain_lookup_end": AttributeMetadata(
        brief="The UNIX timestamp representing the time immediately after the browser finishes the domain-name lookup for the resource.",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example=1732829555.201,
        sdks=["javascript-browser"],
    ),
    "http.request.domain_lookup_start": AttributeMetadata(
        brief="The UNIX timestamp representing the time immediately before the browser starts the domain name lookup for the resource.",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example=1732829555.322,
        sdks=["javascript-browser"],
    ),
    "http.request.fetch_start": AttributeMetadata(
        brief="The UNIX timestamp representing the time immediately before the browser starts to fetch the resource.",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example=1732829555.389,
        sdks=["javascript-browser"],
    ),
    "http.request.header.<key>": AttributeMetadata(
        brief="HTTP request headers, <key> being the normalized HTTP Header name (lowercase), the value being the header values.",
        type=AttributeType.STRING_ARRAY,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        has_dynamic_suffix=True,
        example="http.request.header.custom-header=['foo', 'bar']",
    ),
    "http.request.method": AttributeMetadata(
        brief="The HTTP method used.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="GET",
        aliases=["method", "http.method"],
    ),
    "http.request.redirect_end": AttributeMetadata(
        brief="The UNIX timestamp representing the timestamp immediately after receiving the last byte of the response of the last redirect",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example=1732829558.502,
        sdks=["javascript-browser"],
    ),
    "http.request.redirect_start": AttributeMetadata(
        brief="The UNIX timestamp representing the start time of the fetch which that initiates the redirect.",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example=1732829555.495,
        sdks=["javascript-browser"],
    ),
    "http.request.request_start": AttributeMetadata(
        brief="The UNIX timestamp representing the time immediately before the browser starts requesting the resource from the server, cache, or local resource. If the transport connection fails and the browser retires the request, the value returned will be the start of the retry request.",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example=1732829555.51,
        sdks=["javascript-browser"],
    ),
    "http.request.resend_count": AttributeMetadata(
        brief="The ordinal number of request resending attempt (for any reason, including redirects).",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example=2,
    ),
    "http.request.response_end": AttributeMetadata(
        brief="The UNIX timestamp representing the time immediately after the browser receives the last byte of the resource or immediately before the transport connection is closed, whichever comes first.",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example=1732829555.89,
        sdks=["javascript-browser"],
    ),
    "http.request.response_start": AttributeMetadata(
        brief="The UNIX timestamp representing the time immediately before the browser starts requesting the resource from the server, cache, or local resource. If the transport connection fails and the browser retires the request, the value returned will be the start of the retry request.",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example=1732829555.7,
        sdks=["javascript-browser"],
    ),
    "http.request.secure_connection_start": AttributeMetadata(
        brief="The UNIX timestamp representing the time immediately before the browser starts the handshake process to secure the current connection. If a secure connection is not used, the property returns zero.",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example=1732829555.73,
        sdks=["javascript-browser"],
    ),
    "http.request.time_to_first_byte": AttributeMetadata(
        brief="The time in seconds from the browser's timeorigin to when the first byte of the request's response was received. See https://web.dev/articles/ttfb#measure-resource-requests",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example=1.032,
        sdks=["javascript-browser"],
    ),
    "http.request.worker_start": AttributeMetadata(
        brief="The UNIX timestamp representing the timestamp immediately before dispatching the FetchEvent if a Service Worker thread is already running, or immediately before starting the Service Worker thread if it is not already running.",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example=1732829553.68,
        sdks=["javascript-browser"],
    ),
    "http.response.body.size": AttributeMetadata(
        brief="The encoded body size of the response (in bytes).",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example=123,
        aliases=["http.response_content_length", "http.response.header.content-length"],
    ),
    "http.response.header.<key>": AttributeMetadata(
        brief="HTTP response headers, <key> being the normalized HTTP Header name (lowercase), the value being the header values.",
        type=AttributeType.STRING_ARRAY,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        has_dynamic_suffix=True,
        example="http.response.header.custom-header=['foo', 'bar']",
    ),
    "http.response.header.content-length": AttributeMetadata(
        brief="The size of the message body sent to the recipient (in bytes)",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="http.response.header.custom-header=['foo', 'bar']",
        aliases=["http.response_content_length", "http.response.body.size"],
    ),
    "http.response.size": AttributeMetadata(
        brief="The transfer size of the response (in bytes).",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example=456,
        aliases=["http.response_transfer_size"],
    ),
    "http.response.status_code": AttributeMetadata(
        brief="The status code of the HTTP response.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example=404,
        aliases=["http.status_code"],
    ),
    "http.response_content_length": AttributeMetadata(
        brief="The encoded body size of the response (in bytes).",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example=123,
        deprecation=DeprecationInfo(
            replacement="http.response.body.size", status=DeprecationStatus.BACKFILL
        ),
        aliases=["http.response.body.size", "http.response.header.content-length"],
    ),
    "http.response_transfer_size": AttributeMetadata(
        brief="The transfer size of the response (in bytes).",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example=456,
        deprecation=DeprecationInfo(
            replacement="http.response.size", status=DeprecationStatus.BACKFILL
        ),
        aliases=["http.response.size"],
    ),
    "http.route": AttributeMetadata(
        brief="The matched route, that is, the path template in the format used by the respective server framework.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="/users/:id",
        aliases=["url.template"],
    ),
    "http.scheme": AttributeMetadata(
        brief="The URI scheme component identifying the used protocol.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="https",
        deprecation=DeprecationInfo(replacement="url.scheme"),
        aliases=["url.scheme"],
    ),
    "http.server_name": AttributeMetadata(
        brief="The server domain name",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="example.com",
        deprecation=DeprecationInfo(replacement="server.address"),
        aliases=["server.address", "net.host.name", "http.host"],
    ),
    "http.status_code": AttributeMetadata(
        brief="The status code of the HTTP response.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example=404,
        deprecation=DeprecationInfo(replacement="http.response.status_code"),
        aliases=["http.response.status_code"],
    ),
    "http.target": AttributeMetadata(
        brief="The pathname and query string of the URL.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="/test?foo=bar#buzz",
        deprecation=DeprecationInfo(
            replacement="url.path",
            reason="This attribute is being deprecated in favor of url.path and url.query",
        ),
    ),
    "http.url": AttributeMetadata(
        brief="The URL of the resource that was fetched.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="https://example.com/test?foo=bar#buzz",
        deprecation=DeprecationInfo(replacement="url.full"),
        aliases=["url.full", "url"],
    ),
    "http.user_agent": AttributeMetadata(
        brief="Value of the HTTP User-Agent header sent by the client.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Mobile/15E148 Safari/604.1",
        deprecation=DeprecationInfo(replacement="user_agent.original"),
        aliases=["user_agent.original"],
    ),
    "id": AttributeMetadata(
        brief="A unique identifier for the span.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example="f47ac10b58cc4372a5670e02b2c3d479",
        sdks=["php-laravel"],
    ),
    "jvm.gc.action": AttributeMetadata(
        brief="Name of the garbage collector action.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="end of minor GC",
    ),
    "jvm.gc.name": AttributeMetadata(
        brief="Name of the garbage collector.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="G1 Young Generation",
    ),
    "jvm.memory.pool.name": AttributeMetadata(
        brief="Name of the memory pool.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="G1 Old Gen",
    ),
    "jvm.memory.type": AttributeMetadata(
        brief="Name of the memory pool.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="G1 Old Gen",
    ),
    "jvm.thread.daemon": AttributeMetadata(
        brief="Whether the thread is daemon or not.",
        type=AttributeType.BOOLEAN,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=True,
        example=True,
    ),
    "jvm.thread.state": AttributeMetadata(
        brief="State of the thread.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="blocked",
    ),
    "lcp.element": AttributeMetadata(
        brief="The dom element responsible for the largest contentful paint.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="img",
    ),
    "lcp.id": AttributeMetadata(
        brief="The id of the dom element responsible for the largest contentful paint.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="#hero",
    ),
    "lcp.size": AttributeMetadata(
        brief="The size of the largest contentful paint element.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example=1234,
    ),
    "lcp.url": AttributeMetadata(
        brief="The url of the dom element responsible for the largest contentful paint.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="https://example.com",
    ),
    "logger.name": AttributeMetadata(
        brief="The name of the logger that generated this event.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="myLogger",
    ),
    "mcp.cancelled.reason": AttributeMetadata(
        brief="Reason for the cancellation of an MCP operation.",
        type=AttributeType.STRING,
        pii=PiiInfo(
            isPii=IsPii.MAYBE,
            reason="Cancellation reasons may contain user-specific or sensitive information",
        ),
        is_in_otel=False,
        example="User cancelled the request",
    ),
    "mcp.cancelled.request_id": AttributeMetadata(
        brief="Request ID of the cancelled MCP operation.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example="123",
    ),
    "mcp.client.name": AttributeMetadata(
        brief="Name of the MCP client application.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example="claude-desktop",
    ),
    "mcp.client.title": AttributeMetadata(
        brief="Display title of the MCP client application.",
        type=AttributeType.STRING,
        pii=PiiInfo(
            isPii=IsPii.MAYBE,
            reason="Client titles may reveal user-specific application configurations or custom setups",
        ),
        is_in_otel=False,
        example="Claude Desktop",
    ),
    "mcp.client.version": AttributeMetadata(
        brief="Version of the MCP client application.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example="1.0.0",
    ),
    "mcp.lifecycle.phase": AttributeMetadata(
        brief="Lifecycle phase indicator for MCP operations.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example="initialization_complete",
    ),
    "mcp.logging.data_type": AttributeMetadata(
        brief="Data type of the logged message content.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example="string",
    ),
    "mcp.logging.level": AttributeMetadata(
        brief="Log level for MCP logging operations.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example="info",
    ),
    "mcp.logging.logger": AttributeMetadata(
        brief="Logger name for MCP logging operations.",
        type=AttributeType.STRING,
        pii=PiiInfo(
            isPii=IsPii.MAYBE,
            reason="Logger names may be user-defined and could contain sensitive information",
        ),
        is_in_otel=False,
        example="mcp_server",
    ),
    "mcp.logging.message": AttributeMetadata(
        brief="Log message content from MCP logging operations.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE, reason="Log messages can contain user data"),
        is_in_otel=False,
        example="Tool execution completed successfully",
    ),
    "mcp.method.name": AttributeMetadata(
        brief="The name of the MCP request or notification method being called.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example="tools/call",
    ),
    "mcp.progress.current": AttributeMetadata(
        brief="Current progress value of an MCP operation.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example=50,
    ),
    "mcp.progress.message": AttributeMetadata(
        brief="Progress message describing the current state of an MCP operation.",
        type=AttributeType.STRING,
        pii=PiiInfo(
            isPii=IsPii.MAYBE,
            reason="Progress messages may contain user-specific or sensitive information",
        ),
        is_in_otel=False,
        example="Processing 50 of 100 items",
    ),
    "mcp.progress.percentage": AttributeMetadata(
        brief="Calculated progress percentage of an MCP operation. Computed from current/total * 100.",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example=50,
    ),
    "mcp.progress.token": AttributeMetadata(
        brief="Token for tracking progress of an MCP operation.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example="progress-token-123",
    ),
    "mcp.progress.total": AttributeMetadata(
        brief="Total progress target value of an MCP operation.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example=100,
    ),
    "mcp.prompt.name": AttributeMetadata(
        brief="Name of the MCP prompt template being used.",
        type=AttributeType.STRING,
        pii=PiiInfo(
            isPii=IsPii.MAYBE,
            reason="Prompt names may reveal user behavior patterns or sensitive operations",
        ),
        is_in_otel=False,
        example="summarize",
    ),
    "mcp.prompt.result.description": AttributeMetadata(
        brief="Description of the prompt result.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=False,
        example="A summary of the requested information",
    ),
    "mcp.prompt.result.message_content": AttributeMetadata(
        brief="Content of the message in the prompt result. Used for single message results only.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=False,
        example="Please provide a summary of the document",
    ),
    "mcp.prompt.result.message_count": AttributeMetadata(
        brief="Number of messages in the prompt result.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example=3,
    ),
    "mcp.prompt.result.message_role": AttributeMetadata(
        brief="Role of the message in the prompt result. Used for single message results only.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example="user",
    ),
    "mcp.protocol.ready": AttributeMetadata(
        brief="Protocol readiness indicator for MCP session. Non-zero value indicates the protocol is ready.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example=1,
    ),
    "mcp.protocol.version": AttributeMetadata(
        brief="MCP protocol version used in the session.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example="2024-11-05",
    ),
    "mcp.request.argument.<key>": AttributeMetadata(
        brief="MCP request argument with dynamic key suffix. The <key> is replaced with the actual argument name. The value is a JSON-stringified representation of the argument value.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE, reason="Arguments contain user input"),
        is_in_otel=False,
        has_dynamic_suffix=True,
        example="mcp.request.argument.query='weather in Paris'",
    ),
    "mcp.request.argument.name": AttributeMetadata(
        brief="Name argument from prompts/get MCP request.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE, reason="Prompt names can contain user input"),
        is_in_otel=False,
        example="summarize",
    ),
    "mcp.request.argument.uri": AttributeMetadata(
        brief="URI argument from resources/read MCP request.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE, reason="URIs can contain user file paths"),
        is_in_otel=False,
        example="file:///path/to/resource",
    ),
    "mcp.request.id": AttributeMetadata(
        brief="JSON-RPC request identifier for the MCP request. Unique within the MCP session.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example="1",
    ),
    "mcp.resource.protocol": AttributeMetadata(
        brief="Protocol of the resource URI being accessed, extracted from the URI.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example="file",
    ),
    "mcp.resource.uri": AttributeMetadata(
        brief="The resource URI being accessed in an MCP operation.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE, reason="URIs can contain sensitive file paths"),
        is_in_otel=False,
        example="file:///path/to/file.txt",
    ),
    "mcp.server.name": AttributeMetadata(
        brief="Name of the MCP server application.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example="sentry-mcp-server",
    ),
    "mcp.server.title": AttributeMetadata(
        brief="Display title of the MCP server application.",
        type=AttributeType.STRING,
        pii=PiiInfo(
            isPii=IsPii.MAYBE,
            reason="Server titles may reveal user-specific application configurations or custom setups",
        ),
        is_in_otel=False,
        example="Sentry MCP Server",
    ),
    "mcp.server.version": AttributeMetadata(
        brief="Version of the MCP server application.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example="0.1.0",
    ),
    "mcp.session.id": AttributeMetadata(
        brief="Identifier for the MCP session.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example="550e8400-e29b-41d4-a716-446655440000",
    ),
    "mcp.tool.name": AttributeMetadata(
        brief="Name of the MCP tool being called.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example="calculator",
    ),
    "mcp.tool.result.content": AttributeMetadata(
        brief="The content of the tool result.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE, reason="Tool results can contain user data"),
        is_in_otel=False,
        example='{"output": "rainy", "toolCallId": "1"}',
    ),
    "mcp.tool.result.content_count": AttributeMetadata(
        brief="Number of content items in the tool result.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example=1,
    ),
    "mcp.tool.result.is_error": AttributeMetadata(
        brief="Whether a tool execution resulted in an error.",
        type=AttributeType.BOOLEAN,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example=False,
    ),
    "mcp.transport": AttributeMetadata(
        brief="Transport method used for MCP communication.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example="stdio",
    ),
    "mdc.<key>": AttributeMetadata(
        brief="Attributes from the Mapped Diagnostic Context (MDC) present at the moment the log record was created. The MDC is supported by all the most popular logging solutions in the Java ecosystem, and it's usually implemented as a thread-local map that stores context for e.g. a specific request.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        has_dynamic_suffix=True,
        example="mdc.some_key='some_value'",
        sdks=["java", "java.logback", "java.jul", "java.log4j2"],
    ),
    "messaging.destination.connection": AttributeMetadata(
        brief="The message destination connection.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="BestTopic",
        sdks=["php-laravel"],
    ),
    "messaging.destination.name": AttributeMetadata(
        brief="The message destination name.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="BestTopic",
        sdks=["php-laravel"],
    ),
    "messaging.message.body.size": AttributeMetadata(
        brief="The size of the message body in bytes.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example=839,
        sdks=["php-laravel"],
    ),
    "messaging.message.envelope.size": AttributeMetadata(
        brief="The size of the message body and metadata in bytes.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example=1045,
        sdks=["php-laravel"],
    ),
    "messaging.message.id": AttributeMetadata(
        brief="A value used by the messaging system as an identifier for the message, represented as a string.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="f47ac10b58cc4372a5670e02b2c3d479",
        sdks=["php-laravel"],
    ),
    "messaging.message.receive.latency": AttributeMetadata(
        brief="The latency between when the message was published and received.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example=1732847252,
        sdks=["php-laravel"],
    ),
    "messaging.message.retry.count": AttributeMetadata(
        brief="The amount of attempts to send the message.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example=2,
        sdks=["php-laravel"],
    ),
    "messaging.operation.type": AttributeMetadata(
        brief="A string identifying the type of the messaging operation",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="create",
    ),
    "messaging.system": AttributeMetadata(
        brief="The messaging system as identified by the client instrumentation.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="activemq",
        sdks=["php-laravel"],
    ),
    "method": AttributeMetadata(
        brief="The HTTP method used.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="GET",
        deprecation=DeprecationInfo(replacement="http.request.method"),
        aliases=["http.request.method"],
        sdks=["javascript-browser", "javascript-node"],
    ),
    "navigation.type": AttributeMetadata(
        brief="The type of navigation done by a client-side router.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="router.push",
    ),
    "nel.elapsed_time": AttributeMetadata(
        brief="The elapsed number of milliseconds between the start of the resource fetch and when it was completed or aborted by the user agent.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example=100,
    ),
    "nel.phase": AttributeMetadata(
        brief='If request failed, the phase of its network error. If request succeeded, "application".',
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="application",
    ),
    "nel.referrer": AttributeMetadata(
        brief="request's referrer, as determined by the referrer policy associated with its client.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="https://example.com/foo?bar=baz",
    ),
    "nel.sampling_function": AttributeMetadata(
        brief="The sampling function used to determine if the request should be sampled.",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example=0.5,
    ),
    "nel.type": AttributeMetadata(
        brief='If request failed, the type of its network error. If request succeeded, "ok".',
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="dns.unreachable",
    ),
    "net.host.ip": AttributeMetadata(
        brief="Local address of the network connection - IP address or Unix domain socket name.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="192.168.0.1",
        deprecation=DeprecationInfo(replacement="network.local.address"),
        aliases=["network.local.address", "net.sock.host.addr"],
    ),
    "net.host.name": AttributeMetadata(
        brief="Server domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="example.com",
        deprecation=DeprecationInfo(replacement="server.address"),
        aliases=["server.address", "http.server_name", "http.host"],
    ),
    "net.host.port": AttributeMetadata(
        brief="Server port number.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example=1337,
        deprecation=DeprecationInfo(replacement="server.port"),
        aliases=["server.port"],
    ),
    "net.peer.ip": AttributeMetadata(
        brief="Peer address of the network connection - IP address or Unix domain socket name.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="192.168.0.1",
        deprecation=DeprecationInfo(replacement="network.peer.address"),
        aliases=["network.peer.address", "net.sock.peer.addr"],
    ),
    "net.peer.name": AttributeMetadata(
        brief="Server domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="example.com",
        deprecation=DeprecationInfo(
            replacement="server.address",
            reason="Deprecated, use server.address on client spans and client.address on server spans.",
        ),
    ),
    "net.peer.port": AttributeMetadata(
        brief="Peer port number.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example=1337,
        deprecation=DeprecationInfo(
            replacement="server.port",
            reason="Deprecated, use server.port on client spans and client.port on server spans.",
        ),
    ),
    "net.protocol.name": AttributeMetadata(
        brief="OSI application layer or non-OSI equivalent.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="http",
        deprecation=DeprecationInfo(replacement="network.protocol.name"),
        aliases=["network.protocol.name"],
    ),
    "net.protocol.version": AttributeMetadata(
        brief="The actual version of the protocol used for network communication.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="1.1",
        deprecation=DeprecationInfo(replacement="network.protocol.version"),
        aliases=["network.protocol.version", "http.flavor"],
    ),
    "net.sock.family": AttributeMetadata(
        brief="OSI transport and network layer",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="inet",
        deprecation=DeprecationInfo(
            replacement="network.transport",
            reason="Deprecated, use network.transport and network.type.",
        ),
    ),
    "net.sock.host.addr": AttributeMetadata(
        brief="Local address of the network connection mapping to Unix domain socket name.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="/var/my.sock",
        deprecation=DeprecationInfo(replacement="network.local.address"),
        aliases=["network.local.address", "net.host.ip"],
    ),
    "net.sock.host.port": AttributeMetadata(
        brief="Local port number of the network connection.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example=8080,
        deprecation=DeprecationInfo(replacement="network.local.port"),
        aliases=["network.local.port"],
    ),
    "net.sock.peer.addr": AttributeMetadata(
        brief="Peer address of the network connection - IP address",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="192.168.0.1",
        deprecation=DeprecationInfo(replacement="network.peer.address"),
        aliases=["network.peer.address", "net.peer.ip"],
    ),
    "net.sock.peer.name": AttributeMetadata(
        brief="Peer address of the network connection - Unix domain socket name",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="/var/my.sock",
        deprecation=DeprecationInfo(
            reason="Deprecated from OTEL, no replacement at this time"
        ),
    ),
    "net.sock.peer.port": AttributeMetadata(
        brief="Peer port number of the network connection.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example=8080,
        deprecation=DeprecationInfo(replacement="network.peer.port"),
    ),
    "net.transport": AttributeMetadata(
        brief="OSI transport layer or inter-process communication method.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="tcp",
        deprecation=DeprecationInfo(replacement="network.transport"),
        aliases=["network.transport"],
    ),
    "network.local.address": AttributeMetadata(
        brief="Local address of the network connection - IP address or Unix domain socket name.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="10.1.2.80",
        aliases=["net.host.ip", "net.sock.host.addr"],
    ),
    "network.local.port": AttributeMetadata(
        brief="Local port number of the network connection.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example=65400,
        aliases=["net.sock.host.port"],
    ),
    "network.peer.address": AttributeMetadata(
        brief="Peer address of the network connection - IP address or Unix domain socket name.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="10.1.2.80",
        aliases=["net.peer.ip", "net.sock.peer.addr"],
    ),
    "network.peer.port": AttributeMetadata(
        brief="Peer port number of the network connection.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example=65400,
    ),
    "network.protocol.name": AttributeMetadata(
        brief="OSI application layer or non-OSI equivalent.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="http",
        aliases=["net.protocol.name"],
    ),
    "network.protocol.version": AttributeMetadata(
        brief="The actual version of the protocol used for network communication.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="1.1",
        aliases=["http.flavor", "net.protocol.version"],
    ),
    "network.transport": AttributeMetadata(
        brief="OSI transport layer or inter-process communication method.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="tcp",
        aliases=["net.transport"],
    ),
    "network.type": AttributeMetadata(
        brief="OSI network layer or non-OSI equivalent.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="ipv4",
    ),
    "os.build_id": AttributeMetadata(
        brief="The build ID of the operating system.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="1234567890",
    ),
    "os.description": AttributeMetadata(
        brief="Human readable (not intended to be parsed) OS version information, like e.g. reported by ver or lsb_release -a commands.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="Ubuntu 18.04.1 LTS",
    ),
    "os.name": AttributeMetadata(
        brief="Human readable operating system name.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="Ubuntu",
    ),
    "os.type": AttributeMetadata(
        brief="The operating system type.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="linux",
    ),
    "os.version": AttributeMetadata(
        brief="The version of the operating system.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="18.04.2",
    ),
    "otel.scope.name": AttributeMetadata(
        brief="The name of the instrumentation scope - (InstrumentationScope.Name in OTLP).",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="io.opentelemetry.contrib.mongodb",
    ),
    "otel.scope.version": AttributeMetadata(
        brief="The version of the instrumentation scope - (InstrumentationScope.Version in OTLP).",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="2.4.5",
    ),
    "otel.status_code": AttributeMetadata(
        brief="Name of the code, either “OK” or “ERROR”. MUST NOT be set if the status code is UNSET.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="OK",
    ),
    "otel.status_description": AttributeMetadata(
        brief="Description of the Status if it has a value, otherwise not set.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="resource not found",
    ),
    "params.<key>": AttributeMetadata(
        brief="Decoded parameters extracted from a URL path. Usually added by client-side routing frameworks like vue-router.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        has_dynamic_suffix=True,
        example="params.id='123'",
        aliases=["url.path.parameter.<key>"],
    ),
    "previous_route": AttributeMetadata(
        brief="Also used by mobile SDKs to indicate the previous route in the application.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="HomeScreen",
        sdks=["javascript-reactnative"],
    ),
    "process.executable.name": AttributeMetadata(
        brief="The name of the executable that started the process.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="getsentry",
    ),
    "process.pid": AttributeMetadata(
        brief="The process ID of the running process.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example=12345,
    ),
    "process.runtime.description": AttributeMetadata(
        brief="An additional description about the runtime of the process, for example a specific vendor customization of the runtime environment. Equivalent to `raw_description` in the Sentry runtime context.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="Eclipse OpenJ9 VM openj9-0.21.0",
    ),
    "process.runtime.name": AttributeMetadata(
        brief="The name of the runtime. Equivalent to `name` in the Sentry runtime context.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="node",
    ),
    "process.runtime.version": AttributeMetadata(
        brief="The version of the runtime of this process, as returned by the runtime without modification. Equivalent to `version` in the Sentry runtime context.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="18.04.2",
    ),
    "query.<key>": AttributeMetadata(
        brief="An item in a query string. Usually added by client-side routing frameworks like vue-router.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        has_dynamic_suffix=True,
        example="query.id='123'",
        deprecation=DeprecationInfo(
            replacement="url.query",
            reason="Instead of sending items individually in query.<key>, they should be sent all together with url.query.",
        ),
    ),
    "release": AttributeMetadata(
        brief="The sentry release.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="production",
        deprecation=DeprecationInfo(replacement="sentry.release"),
        aliases=["sentry.release"],
    ),
    "remix.action_form_data.<key>": AttributeMetadata(
        brief="Remix form data, <key> being the form data key, the value being the form data value.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        has_dynamic_suffix=True,
        example="http.response.header.text='test'",
        sdks=["javascript-remix"],
    ),
    "replay_id": AttributeMetadata(
        brief="The id of the sentry replay.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example="123e4567e89b12d3a456426614174000",
        deprecation=DeprecationInfo(replacement="sentry.replay_id"),
        aliases=["sentry.replay_id"],
    ),
    "resource.deployment.environment.name": AttributeMetadata(
        brief="The software deployment environment name.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=True,
        example="production",
        deprecation=DeprecationInfo(
            replacement="sentry.environment", status=DeprecationStatus.BACKFILL
        ),
    ),
    "resource.render_blocking_status": AttributeMetadata(
        brief="The render blocking status of the resource.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="non-blocking",
        sdks=["javascript-browser"],
    ),
    "route": AttributeMetadata(
        brief="The matched route, that is, the path template in the format used by the respective server framework. Also used by mobile SDKs to indicate the current route in the application.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="App\\Controller::indexAction",
        deprecation=DeprecationInfo(replacement="http.route"),
        aliases=["http.route"],
        sdks=["php-laravel", "javascript-reactnative"],
    ),
    "rpc.grpc.status_code": AttributeMetadata(
        brief="The numeric status code of the gRPC request.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example=2,
    ),
    "rpc.service": AttributeMetadata(
        brief="The full (logical) name of the service being called, including its package name, if applicable.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="myService.BestService",
    ),
    "sentry.action": AttributeMetadata(
        brief="Used as a generic attribute representing the action depending on the type of span. For instance, this is the database query operation for DB spans, and the request method for HTTP spans.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="SELECT",
    ),
    "sentry.browser.name": AttributeMetadata(
        brief="The name of the browser.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="Chrome",
        deprecation=DeprecationInfo(replacement="browser.name"),
        aliases=["browser.name"],
    ),
    "sentry.browser.version": AttributeMetadata(
        brief="The version of the browser.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="120.0.6099.130",
        deprecation=DeprecationInfo(replacement="browser.version"),
        aliases=["browser.version"],
    ),
    "sentry.cancellation_reason": AttributeMetadata(
        brief="The reason why a span ended early.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example="document.hidden",
    ),
    "sentry.category": AttributeMetadata(
        brief="The high-level category of a span, derived from the span operation or span attributes. This categorizes spans by their general purpose (e.g., database, HTTP, UI). Known values include: 'ai', 'ai.pipeline', 'app', 'browser', 'cache', 'console', 'db', 'event', 'file', 'function.aws', 'function.azure', 'function.gcp', 'function.nextjs', 'function.remix', 'graphql', 'grpc', 'http', 'measure', 'middleware', 'navigation', 'pageload', 'queue', 'resource', 'rpc', 'serialize', 'subprocess', 'template', 'topic', 'ui', 'ui.angular', 'ui.ember', 'ui.react', 'ui.svelte', 'ui.vue', 'view', 'websocket'.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example="db",
    ),
    "sentry.client_sample_rate": AttributeMetadata(
        brief="Rate at which a span was sampled in the SDK.",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example=0.5,
    ),
    "sentry.description": AttributeMetadata(
        brief="The human-readable description of a span.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="index view query",
    ),
    "sentry.dist": AttributeMetadata(
        brief="The sentry dist.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example="1.0",
    ),
    "sentry.domain": AttributeMetadata(
        brief="Used as a generic attribute representing the domain depending on the type of span. For instance, this is the collection/table name for database spans, and the server address for HTTP spans.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="example.com",
    ),
    "sentry.dsc.environment": AttributeMetadata(
        brief="The environment from the dynamic sampling context.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example="prod",
    ),
    "sentry.dsc.public_key": AttributeMetadata(
        brief="The public key from the dynamic sampling context.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="c51734c603c4430eb57cb0a5728a479d",
    ),
    "sentry.dsc.release": AttributeMetadata(
        brief="The release identifier from the dynamic sampling context.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example="frontend@e8211be71b214afab5b85de4b4c54be3714952bb",
    ),
    "sentry.dsc.sample_rate": AttributeMetadata(
        brief="The sample rate from the dynamic sampling context.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example="1.0",
    ),
    "sentry.dsc.sampled": AttributeMetadata(
        brief="Whether the event was sampled according to the dynamic sampling context.",
        type=AttributeType.BOOLEAN,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example=True,
    ),
    "sentry.dsc.trace_id": AttributeMetadata(
        brief="The trace ID from the dynamic sampling context.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example="047372980460430cbc78d9779df33a46",
    ),
    "sentry.dsc.transaction": AttributeMetadata(
        brief="The transaction name from the dynamic sampling context.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example="/issues/errors-outages/",
    ),
    "sentry.environment": AttributeMetadata(
        brief="The sentry environment.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example="production",
        aliases=["environment"],
    ),
    "sentry.exclusive_time": AttributeMetadata(
        brief="The exclusive time duration of the span in milliseconds.",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example=1234,
    ),
    "sentry.graphql.operation": AttributeMetadata(
        brief="Indicates the type of graphql operation, emitted by the Javascript SDK.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="getUserById",
    ),
    "sentry.group": AttributeMetadata(
        brief="Stores the hash of `sentry.normalized_description`. This is primarily used for grouping spans in the product end.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
    ),
    "sentry.http.prefetch": AttributeMetadata(
        brief="If an http request was a prefetch request.",
        type=AttributeType.BOOLEAN,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example=True,
    ),
    "sentry.idle_span_finish_reason": AttributeMetadata(
        brief="The reason why an idle span ended early.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example="idleTimeout",
    ),
    "sentry.is_remote": AttributeMetadata(
        brief="Indicates whether a span's parent is remote.",
        type=AttributeType.BOOLEAN,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example=True,
    ),
    "sentry.kind": AttributeMetadata(
        brief="Used to clarify the relationship between parents and children, or to distinguish between spans, e.g. a `server` and `client` span with the same name.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="server",
    ),
    "sentry.message.parameter.<key>": AttributeMetadata(
        brief="A parameter used in the message template. <key> can either be the number that represent the parameter's position in the template string (sentry.message.parameter.0, sentry.message.parameter.1, etc) or the parameter's name (sentry.message.parameter.item_id, sentry.message.parameter.user_id, etc)",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="sentry.message.parameter.0='123'",
    ),
    "sentry.message.template": AttributeMetadata(
        brief="The parameterized template string.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="Hello, {name}!",
    ),
    "sentry.module.<key>": AttributeMetadata(
        brief="A module that was loaded in the process. The key is the name of the module.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        has_dynamic_suffix=True,
        example="sentry.module.brianium/paratest='v7.7.0'",
    ),
    "sentry.nextjs.ssr.function.route": AttributeMetadata(
        brief="A parameterized route for a function in Next.js that contributes to Server-Side Rendering. Should be present on spans that track such functions when the file location of the function is known.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example="/posts/[id]/layout",
        sdks=["javascript"],
    ),
    "sentry.nextjs.ssr.function.type": AttributeMetadata(
        brief="A descriptor for a for a function in Next.js that contributes to Server-Side Rendering. Should be present on spans that track such functions.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example="generateMetadata",
        sdks=["javascript"],
    ),
    "sentry.normalized_db_query": AttributeMetadata(
        brief="The normalized version of `db.query.text`.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="SELECT .. FROM sentry_project WHERE (project_id = %s)",
    ),
    "sentry.normalized_db_query.hash": AttributeMetadata(
        brief="The hash of `sentry.normalized_db_query`.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
    ),
    "sentry.normalized_description": AttributeMetadata(
        brief="Used as a generic attribute representing the normalized `sentry.description`. This refers to the legacy use case of `sentry.description` where it holds relevant data depending on the type of span (e.g. database query, resource url, http request description, etc).",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="SELECT .. FROM sentry_project WHERE (project_id = %s)",
    ),
    "sentry.observed_timestamp_nanos": AttributeMetadata(
        brief="The timestamp at which an envelope was received by Relay, in nanoseconds.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example="1544712660300000000",
    ),
    "sentry.op": AttributeMetadata(
        brief="The operation of a span.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example="http.client",
    ),
    "sentry.origin": AttributeMetadata(
        brief="The origin of the instrumentation (e.g. span, log, etc.)",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example="auto.http.otel.fastify",
    ),
    "sentry.platform": AttributeMetadata(
        brief="The sdk platform that generated the event.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example="php",
    ),
    "sentry.profiler_id": AttributeMetadata(
        brief="The id of the currently running profiler (continuous profiling)",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example="18779b64dd35d1a538e7ce2dd2d3fad3",
    ),
    "sentry.release": AttributeMetadata(
        brief="The sentry release.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example="7.0.0",
        aliases=["service.version", "release"],
    ),
    "sentry.replay_id": AttributeMetadata(
        brief="The id of the sentry replay.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example="123e4567e89b12d3a456426614174000",
        aliases=["replay_id"],
    ),
    "sentry.replay_is_buffering": AttributeMetadata(
        brief="A sentinel attribute on log events indicating whether the current Session Replay is being buffered (onErrorSampleRate).",
        type=AttributeType.BOOLEAN,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example=True,
    ),
    "sentry.sdk.integrations": AttributeMetadata(
        brief="A list of names identifying enabled integrations. The list shouldhave all enabled integrations, including default integrations. Defaultintegrations are included because different SDK releases may contain differentdefault integrations.",
        type=AttributeType.STRING_ARRAY,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example=[
            "InboundFilters",
            "FunctionToString",
            "BrowserApiErrors",
            "Breadcrumbs",
        ],
    ),
    "sentry.sdk.name": AttributeMetadata(
        brief="The sentry sdk name.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example="@sentry/react",
    ),
    "sentry.sdk.version": AttributeMetadata(
        brief="The sentry sdk version.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example="7.0.0",
    ),
    "sentry.segment.id": AttributeMetadata(
        brief="The segment ID of a span",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example="051581bf3cb55c13",
        aliases=["sentry.segment_id"],
    ),
    "sentry.segment.name": AttributeMetadata(
        brief="The segment name of a span",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="GET /user",
    ),
    "sentry.segment_id": AttributeMetadata(
        brief="The segment ID of a span",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example="051581bf3cb55c13",
        deprecation=DeprecationInfo(replacement="sentry.segment.id"),
        aliases=["sentry.segment.id"],
    ),
    "sentry.server_sample_rate": AttributeMetadata(
        brief="Rate at which a span was sampled in Relay.",
        type=AttributeType.DOUBLE,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example=0.5,
    ),
    "sentry.span.source": AttributeMetadata(
        brief="The source of a span, also referred to as transaction source. Known values are:  `'custom'`, `'url'`, `'route'`, `'component'`, `'view'`, `'task'`.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example="route",
    ),
    "sentry.status.message": AttributeMetadata(
        brief="The from OTLP extracted status message.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="foobar",
    ),
    "sentry.status_code": AttributeMetadata(
        brief="The HTTP status code used in Sentry Insights. Typically set by Sentry during ingestion, rather than by clients.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example=200,
    ),
    "sentry.trace.parent_span_id": AttributeMetadata(
        brief="The span id of the span that was active when the log was collected. This should not be set if there was no active span.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example="b0e6f15b45c36b12",
    ),
    "sentry.transaction": AttributeMetadata(
        brief="The sentry transaction (segment name).",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example="GET /",
        aliases=["transaction"],
    ),
    "server.address": AttributeMetadata(
        brief="Server domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="example.com",
        aliases=["http.server_name", "net.host.name", "http.host"],
    ),
    "server.port": AttributeMetadata(
        brief="Server port number.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example=1337,
        aliases=["net.host.port"],
    ),
    "service.name": AttributeMetadata(
        brief="Logical name of the service.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="omegastar",
    ),
    "service.version": AttributeMetadata(
        brief="The version string of the service API or implementation. The format is not defined by these conventions.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="5.0.0",
        aliases=["sentry.release"],
    ),
    "thread.id": AttributeMetadata(
        brief="Current “managed” thread ID.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=True,
        example=56,
    ),
    "thread.name": AttributeMetadata(
        brief="Current thread name.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="main",
    ),
    "timber.tag": AttributeMetadata(
        brief="The log tag provided by the timber logging framework.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="MyTag",
        sdks=["sentry.java.android"],
    ),
    "transaction": AttributeMetadata(
        brief="The sentry transaction (segment name).",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="GET /",
        deprecation=DeprecationInfo(replacement="sentry.transaction"),
        aliases=["sentry.transaction"],
    ),
    "type": AttributeMetadata(
        brief="More granular type of the operation happening.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example="fetch",
        sdks=["javascript-browser", "javascript-node"],
    ),
    "ui.component_name": AttributeMetadata(
        brief="The name of the associated component.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="HomeButton",
    ),
    "ui.contributes_to_ttfd": AttributeMetadata(
        brief="Whether the span execution contributed to the TTFD (time to fully drawn) metric.",
        type=AttributeType.BOOLEAN,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example=True,
    ),
    "ui.contributes_to_ttid": AttributeMetadata(
        brief="Whether the span execution contributed to the TTID (time to initial display) metric.",
        type=AttributeType.BOOLEAN,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example=True,
    ),
    "url.domain": AttributeMetadata(
        brief="Server domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="example.com",
    ),
    "url.fragment": AttributeMetadata(
        brief="The fragments present in the URI. Note that this does not contain the leading # character, while the `http.fragment` attribute does.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="details",
    ),
    "url.full": AttributeMetadata(
        brief="The URL of the resource that was fetched.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="https://example.com/test?foo=bar#buzz",
        aliases=["http.url", "url"],
    ),
    "url.path": AttributeMetadata(
        brief="The URI path component.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="/foo",
    ),
    "url.path.parameter.<key>": AttributeMetadata(
        brief="Decoded parameters extracted from a URL path. Usually added by client-side routing frameworks like vue-router.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        has_dynamic_suffix=True,
        example="url.path.parameter.id='123'",
        aliases=["params.<key>"],
    ),
    "url.port": AttributeMetadata(
        brief="Server port number.",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example=1337,
    ),
    "url.query": AttributeMetadata(
        brief="The query string present in the URL. Note that this does not contain the leading ? character, while the `http.query` attribute does.",
        type=AttributeType.STRING,
        pii=PiiInfo(
            isPii=IsPii.MAYBE,
            reason="Query string values can contain sensitive information. Clients should attempt to scrub parameters that might contain sensitive information.",
        ),
        is_in_otel=True,
        example="foo=bar&bar=baz",
    ),
    "url.scheme": AttributeMetadata(
        brief="The URI scheme component identifying the used protocol.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="https",
        aliases=["http.scheme"],
    ),
    "url.template": AttributeMetadata(
        brief="The low-cardinality template of an absolute path reference.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="/users/:id",
        aliases=["http.route"],
    ),
    "url": AttributeMetadata(
        brief="The URL of the resource that was fetched.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="https://example.com/test?foo=bar#buzz",
        deprecation=DeprecationInfo(replacement="url.full"),
        aliases=["url.full", "http.url"],
        sdks=["javascript-browser", "javascript-node"],
    ),
    "user.email": AttributeMetadata(
        brief="User email address.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=True,
        example="test@example.com",
    ),
    "user.full_name": AttributeMetadata(
        brief="User's full name.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=True,
        example="John Smith",
    ),
    "user.geo.city": AttributeMetadata(
        brief="Human readable city name.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="Toronto",
    ),
    "user.geo.country_code": AttributeMetadata(
        brief="Two-letter country code (ISO 3166-1 alpha-2).",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="CA",
    ),
    "user.geo.region": AttributeMetadata(
        brief="Human readable region name or code.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="Canada",
    ),
    "user.geo.subdivision": AttributeMetadata(
        brief="Human readable subdivision name.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="Ontario",
    ),
    "user.hash": AttributeMetadata(
        brief="Unique user hash to correlate information for a user in anonymized form.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=True,
        example="8ae4c2993e0f4f3b8b2d1b1f3b5e8f4d",
    ),
    "user.id": AttributeMetadata(
        brief="Unique identifier of the user.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=True,
        example="S-1-5-21-202424912787-2692429404-2351956786-1000",
    ),
    "user.ip_address": AttributeMetadata(
        brief="The IP address of the user.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=False,
        example="192.168.1.1",
    ),
    "user.name": AttributeMetadata(
        brief="Short name or login/username of the user.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=True,
        example="j.smith",
    ),
    "user.roles": AttributeMetadata(
        brief="Array of user roles at the time of the event.",
        type=AttributeType.STRING_ARRAY,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=True,
        example=["admin", "editor"],
    ),
    "user_agent.original": AttributeMetadata(
        brief="Value of the HTTP User-Agent header sent by the client.",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=True,
        example="Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Mobile/15E148 Safari/604.1",
        aliases=["http.user_agent"],
    ),
    "vercel.branch": AttributeMetadata(
        brief="Git branch name for Vercel project",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example="main",
    ),
    "vercel.build_id": AttributeMetadata(
        brief="Identifier for the Vercel build (only present on build logs)",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example="bld_cotnkcr76",
    ),
    "vercel.deployment_id": AttributeMetadata(
        brief="Identifier for the Vercel deployment",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example="dpl_233NRGRjVZX1caZrXWtz5g1TAksD",
    ),
    "vercel.destination": AttributeMetadata(
        brief="Origin of the external content in Vercel (only on external logs)",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="https://vitals.vercel-insights.com/v1",
    ),
    "vercel.edge_type": AttributeMetadata(
        brief="Type of edge runtime in Vercel",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example="edge-function",
    ),
    "vercel.entrypoint": AttributeMetadata(
        brief="Entrypoint for the request in Vercel",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="api/index.js",
    ),
    "vercel.execution_region": AttributeMetadata(
        brief="Region where the request is executed",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example="sfo1",
    ),
    "vercel.id": AttributeMetadata(
        brief="Unique identifier for the log entry in Vercel",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example="1573817187330377061717300000",
    ),
    "vercel.ja3_digest": AttributeMetadata(
        brief="JA3 fingerprint digest of Vercel request",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example="769,47-53-5-10-49161-49162-49171-49172-50-56-19-4,0-10-11,23-24-25,0",
    ),
    "vercel.ja4_digest": AttributeMetadata(
        brief="JA4 fingerprint digest",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example="t13d1516h2_8daaf6152771_02713d6af862",
    ),
    "vercel.log_type": AttributeMetadata(
        brief="Vercel log output type",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example="stdout",
    ),
    "vercel.project_id": AttributeMetadata(
        brief="Identifier for the Vercel project",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example="gdufoJxB6b9b1fEqr1jUtFkyavUU",
    ),
    "vercel.project_name": AttributeMetadata(
        brief="Name of the Vercel project",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="my-app",
    ),
    "vercel.proxy.cache_id": AttributeMetadata(
        brief="Original request ID when request is served from cache",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example="pdx1::v8g4b-1744143786684-93dafbc0f70d",
    ),
    "vercel.proxy.client_ip": AttributeMetadata(
        brief="Client IP address",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.TRUE),
        is_in_otel=False,
        example="120.75.16.101",
    ),
    "vercel.proxy.host": AttributeMetadata(
        brief="Hostname of the request",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="test.vercel.app",
    ),
    "vercel.proxy.lambda_region": AttributeMetadata(
        brief="Region where lambda function executed",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example="sfo1",
    ),
    "vercel.proxy.method": AttributeMetadata(
        brief="HTTP method of the request",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example="GET",
    ),
    "vercel.proxy.path": AttributeMetadata(
        brief="Request path with query parameters",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="/dynamic/some-value.json?route=some-value",
    ),
    "vercel.proxy.path_type": AttributeMetadata(
        brief="How the request was served based on its path and project configuration",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example="func",
    ),
    "vercel.proxy.path_type_variant": AttributeMetadata(
        brief="Variant of the path type",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="api",
    ),
    "vercel.proxy.referer": AttributeMetadata(
        brief="Referer of the request",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example="*.vercel.app",
    ),
    "vercel.proxy.region": AttributeMetadata(
        brief="Region where the request is processed",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example="sfo1",
    ),
    "vercel.proxy.response_byte_size": AttributeMetadata(
        brief="Size of the response in bytes",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example=1024,
    ),
    "vercel.proxy.scheme": AttributeMetadata(
        brief="Protocol of the request",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example="https",
    ),
    "vercel.proxy.status_code": AttributeMetadata(
        brief="HTTP status code of the proxy request",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example=200,
    ),
    "vercel.proxy.timestamp": AttributeMetadata(
        brief="Unix timestamp when the proxy request was made",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example=1573817250172,
    ),
    "vercel.proxy.user_agent": AttributeMetadata(
        brief="User agent strings of the request",
        type=AttributeType.STRING_ARRAY,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example=["Mozilla/5.0..."],
    ),
    "vercel.proxy.vercel_cache": AttributeMetadata(
        brief="Cache status sent to the browser",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example="REVALIDATED",
    ),
    "vercel.proxy.vercel_id": AttributeMetadata(
        brief="Vercel-specific identifier",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example="sfo1::abc123",
    ),
    "vercel.proxy.waf_action": AttributeMetadata(
        brief="Action taken by firewall rules",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example="deny",
    ),
    "vercel.proxy.waf_rule_id": AttributeMetadata(
        brief="ID of the firewall rule that matched",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example="rule_gAHz8jtSB1Gy",
    ),
    "vercel.request_id": AttributeMetadata(
        brief="Identifier of the Vercel request",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example="643af4e3-975a-4cc7-9e7a-1eda11539d90",
    ),
    "vercel.source": AttributeMetadata(
        brief="Origin of the Vercel log (build, edge, lambda, static, external, or firewall)",
        type=AttributeType.STRING,
        pii=PiiInfo(isPii=IsPii.FALSE),
        is_in_otel=False,
        example="build",
    ),
    "vercel.status_code": AttributeMetadata(
        brief="HTTP status code of the request (-1 means no response returned and the lambda crashed)",
        type=AttributeType.INTEGER,
        pii=PiiInfo(isPii=IsPii.MAYBE),
        is_in_otel=False,
        example=200,
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
        "app_start_type": str,
        "blocked_main_thread": bool,
        "browser.name": str,
        "browser.report.type": str,
        "browser.script.invoker": str,
        "browser.script.invoker_type": str,
        "browser.script.source_char_position": int,
        "browser.version": str,
        "cache.hit": bool,
        "cache.item_size": int,
        "cache.key": List[str],
        "cache.operation": str,
        "cache.ttl": int,
        "channel": str,
        "client.address": str,
        "client.port": int,
        "cloudflare.d1.duration": int,
        "cloudflare.d1.rows_read": int,
        "cloudflare.d1.rows_written": int,
        "code.file.path": str,
        "code.filepath": str,
        "code.function": str,
        "code.function.name": str,
        "code.line.number": int,
        "code.lineno": int,
        "code.namespace": str,
        "culture.calendar": str,
        "culture.display_name": str,
        "culture.is_24_hour_format": bool,
        "culture.locale": str,
        "culture.timezone": str,
        "db.collection.name": str,
        "db.name": str,
        "db.namespace": str,
        "db.operation": str,
        "db.operation.name": str,
        "db.query.parameter.<key>": str,
        "db.query.summary": str,
        "db.query.text": str,
        "db.redis.connection": str,
        "db.redis.parameters": List[str],
        "db.sql.bindings": List[str],
        "db.statement": str,
        "db.system": str,
        "db.system.name": str,
        "db.user": str,
        "device.brand": str,
        "device.family": str,
        "device.model": str,
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
        "faas.time": str,
        "faas.trigger": str,
        "flag.evaluation.<key>": bool,
        "frames.delay": int,
        "frames.frozen": int,
        "frames.slow": int,
        "frames.total": int,
        "fs_error": str,
        "gen_ai.agent.name": str,
        "gen_ai.conversation.id": str,
        "gen_ai.cost.input_tokens": float,
        "gen_ai.cost.output_tokens": float,
        "gen_ai.cost.total_tokens": float,
        "gen_ai.embeddings.input": str,
        "gen_ai.input.messages": str,
        "gen_ai.operation.name": str,
        "gen_ai.operation.type": str,
        "gen_ai.output.messages": str,
        "gen_ai.pipeline.name": str,
        "gen_ai.prompt": str,
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
        "gen_ai.usage.completion_tokens": int,
        "gen_ai.usage.input_tokens": int,
        "gen_ai.usage.input_tokens.cache_write": int,
        "gen_ai.usage.input_tokens.cached": int,
        "gen_ai.usage.output_tokens": int,
        "gen_ai.usage.output_tokens.reasoning": int,
        "gen_ai.usage.prompt_tokens": int,
        "gen_ai.usage.total_tokens": int,
        "graphql.operation.name": str,
        "graphql.operation.type": str,
        "http.client_ip": str,
        "http.decoded_response_content_length": int,
        "http.flavor": str,
        "http.fragment": str,
        "http.host": str,
        "http.method": str,
        "http.query": str,
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
        "http.response.body.size": int,
        "http.response.header.<key>": List[str],
        "http.response.header.content-length": str,
        "http.response.size": int,
        "http.response.status_code": int,
        "http.response_content_length": int,
        "http.response_transfer_size": int,
        "http.route": str,
        "http.scheme": str,
        "http.server_name": str,
        "http.status_code": int,
        "http.target": str,
        "http.url": str,
        "http.user_agent": str,
        "id": str,
        "jvm.gc.action": str,
        "jvm.gc.name": str,
        "jvm.memory.pool.name": str,
        "jvm.memory.type": str,
        "jvm.thread.daemon": bool,
        "jvm.thread.state": str,
        "lcp.element": str,
        "lcp.id": str,
        "lcp.size": int,
        "lcp.url": str,
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
        "messaging.destination.connection": str,
        "messaging.destination.name": str,
        "messaging.message.body.size": int,
        "messaging.message.envelope.size": int,
        "messaging.message.id": str,
        "messaging.message.receive.latency": int,
        "messaging.message.retry.count": int,
        "messaging.operation.type": str,
        "messaging.system": str,
        "method": str,
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
        "network.local.address": str,
        "network.local.port": int,
        "network.peer.address": str,
        "network.peer.port": int,
        "network.protocol.name": str,
        "network.protocol.version": str,
        "network.transport": str,
        "network.type": str,
        "os.build_id": str,
        "os.description": str,
        "os.name": str,
        "os.type": str,
        "os.version": str,
        "otel.scope.name": str,
        "otel.scope.version": str,
        "otel.status_code": str,
        "otel.status_description": str,
        "params.<key>": str,
        "previous_route": str,
        "process.executable.name": str,
        "process.pid": int,
        "process.runtime.description": str,
        "process.runtime.name": str,
        "process.runtime.version": str,
        "query.<key>": str,
        "release": str,
        "remix.action_form_data.<key>": str,
        "replay_id": str,
        "resource.deployment.environment.name": str,
        "resource.render_blocking_status": str,
        "route": str,
        "rpc.grpc.status_code": int,
        "rpc.service": str,
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
        "sentry.message.parameter.<key>": str,
        "sentry.message.template": str,
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
        "sentry.profiler_id": str,
        "sentry.release": str,
        "sentry.replay_id": str,
        "sentry.replay_is_buffering": bool,
        "sentry.sdk.integrations": List[str],
        "sentry.sdk.name": str,
        "sentry.sdk.version": str,
        "sentry.segment.id": str,
        "sentry.segment.name": str,
        "sentry.segment_id": str,
        "sentry.server_sample_rate": float,
        "sentry.span.source": str,
        "sentry.status.message": str,
        "sentry.status_code": int,
        "sentry.trace.parent_span_id": str,
        "sentry.transaction": str,
        "server.address": str,
        "server.port": int,
        "service.name": str,
        "service.version": str,
        "thread.id": int,
        "thread.name": str,
        "timber.tag": str,
        "transaction": str,
        "type": str,
        "ui.component_name": str,
        "ui.contributes_to_ttfd": bool,
        "ui.contributes_to_ttid": bool,
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
