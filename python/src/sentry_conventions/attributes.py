from typing import TYPE_CHECKING

from ._attributes import ATTRIBUTE_METADATA, ATTRIBUTE_NAMES
from ._metadata_types import (
    ApplyScrubbing,
    ApplyScrubbingInfo,
    AttributeMetadata,
    AttributeType,
    AttributeValue,
    ChangelogEntry,
    DeprecationInfo,
    DeprecationStatus,
    SearchAlias,
    SearchAliasType,
    Visibility,
)

if TYPE_CHECKING:
    from ._schemas.gen_ai_input_messages import (
        ChoiceQuestion,
        DecideRequest,
        ExtractField,
        ExtractFieldType,
        ExtractRequest,
        InputMessages,
        NoulCriteria,
        NoulQuestion,
        Question,
        ScoreQuestion,
    )
    from ._schemas.gen_ai_output_messages import (
        Answer,
        ChoiceAnswer,
        DecideResponse,
        ExtractAnswer,
        ExtractResponse,
        ExtractSpan,
        NoulAnswer,
        OutputMessages,
        ScoreAnswer,
    )
    from ._schemas.gen_ai_system_instructions import SystemInstructions
    from ._schemas.gen_ai_tool_call_arguments import ToolCallArguments
    from ._schemas.gen_ai_tool_call_result import ToolCallResult
    from ._schemas.gen_ai_tool_definitions import (
        FunctionToolDefinition,
        ServerSideToolDefinition,
        ToolDefinition,
        ToolDefinitions,
    )
    from ._schemas.shared.gen_ai_chat_message import ChatMessage, Role
    from ._schemas.shared.gen_ai_parts import (
        BlobPart,
        CompactionPart,
        FilePart,
        GenericPart,
        Modality,
        ReasoningPart,
        TextPart,
        ToolCallRequestPart,
        ToolCallResponsePart,
        UriPart,
    )

__all__ = [
    "ATTRIBUTE_METADATA",
    "ATTRIBUTE_NAMES",
    "ApplyScrubbing",
    "ApplyScrubbingInfo",
    "AttributeMetadata",
    "AttributeType",
    "AttributeValue",
    "ChangelogEntry",
    "DeprecationInfo",
    "DeprecationStatus",
    "SearchAlias",
    "SearchAliasType",
    "Visibility",
]

if TYPE_CHECKING:
    __all__ += [
        "SystemInstructions",
        "TextPart",
        "InputMessages",
        "DecideRequest",
        "Question",
        "NoulQuestion",
        "NoulCriteria",
        "ChoiceQuestion",
        "ScoreQuestion",
        "ExtractRequest",
        "ExtractField",
        "ExtractFieldType",
        "OutputMessages",
        "DecideResponse",
        "Answer",
        "NoulAnswer",
        "ChoiceAnswer",
        "ScoreAnswer",
        "ExtractResponse",
        "ExtractAnswer",
        "ExtractSpan",
        "BlobPart",
        "ChatMessage",
        "CompactionPart",
        "FilePart",
        "GenericPart",
        "Modality",
        "ReasoningPart",
        "Role",
        "ToolCallRequestPart",
        "ToolCallResponsePart",
        "UriPart",
        "ToolCallArguments",
        "ToolCallResult",
        "ToolDefinitions",
        "ToolDefinition",
        "FunctionToolDefinition",
        "ServerSideToolDefinition",
    ]
