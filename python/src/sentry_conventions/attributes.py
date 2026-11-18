from typing import TYPE_CHECKING

from ._attributes import (
    ATTRIBUTE_METADATA,
    ATTRIBUTE_NAMES,
    Attributes,
)
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
    from ._schemas.gen_ai_system_instructions import SystemInstructions, TextPart
    from ._schemas.gen_ai_tool_call_arguments import ToolCallArguments
    from ._schemas.gen_ai_tool_call_result import ToolCallResult
    from ._schemas.gen_ai_tool_definitions import (
        FunctionToolDefinition,
        ServerSideToolDefinition,
        ToolDefinition,
        ToolDefinitions,
    )

__all__ = [
    "ATTRIBUTE_METADATA",
    "ATTRIBUTE_NAMES",
    "Attributes",
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
        "ToolCallArguments",
        "ToolCallResult",
        "ToolDefinitions",
        "ToolDefinition",
        "FunctionToolDefinition",
        "ServerSideToolDefinition",
    ]
