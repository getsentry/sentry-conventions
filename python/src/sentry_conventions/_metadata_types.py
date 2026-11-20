from dataclasses import dataclass
from enum import Enum
from typing import TYPE_CHECKING, List, Optional, Tuple, Union

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


class ApplyScrubbing(Enum):
    AUTO = "auto"
    MANUAL = "manual"
    NEVER = "never"


class Visibility(Enum):
    PUBLIC = "public"
    INTERNAL = "internal"


@dataclass
class ApplyScrubbingInfo:
    """Holds information about how PII scrubbing should be applied to an attribute's values."""

    key: ApplyScrubbing
    reason: Optional[str] = None


class DeprecationStatus(Enum):
    BACKFILL = "backfill"
    NORMALIZE = "normalize"
    TRANSFORM = "transform"


@dataclass
class DeprecationInfo:
    """Holds information about a deprecation."""

    replacement: Optional[str] = None
    reason: Optional[str] = None
    status: Optional[DeprecationStatus] = None
    transformation: Optional[str] = None


@dataclass
class ChangelogEntry:
    """A changelog entry tracking a change to an attribute."""

    version: str
    """The sentry-conventions release version"""

    prs: Optional[List[int]] = None
    """GitHub PR numbers"""

    description: Optional[str] = None
    """Optional description of what changed"""


if TYPE_CHECKING:
    from typing import Literal

    SearchAliasType = Literal[
        "byte",
        "currency",
        "millisecond",
        "percentage",
        "second",
    ]
else:
    SearchAliasType = str


@dataclass
class SearchAlias:
    """How an attribute is exposed in Sentry search."""

    name: str
    """The public name exposed in Sentry search"""

    type: Optional[SearchAliasType] = None
    """The type exposed by Sentry search. Defaults to the attribute's primary type if omitted"""

    deprecated_aliases: Optional[List[str]] = None
    """Deprecated aliases still accepted in search queries"""


@dataclass
class AttributeMetadata:
    """The metadata for an attribute."""

    brief: str
    """A description of the attribute"""

    type: AttributeType
    """The type of the attribute value"""

    apply_scrubbing: ApplyScrubbingInfo
    """How PII scrubbing should be applied to the attribute value. Is either auto, manual or never. Optionally include a reason about why this mode applies"""

    is_in_otel: bool
    """Whether the attribute is defined in OpenTelemetry Semantic Conventions"""

    visibility: Visibility
    """Whether the attribute is public or internal to Sentry"""

    keys: Tuple[str, ...]
    """Every key this attribute's value may be readable under, preferred key first.

    All members of a family share one chain, so a read prefers the same key no matter
    which member you look up. Only ``backfill`` and ``normalize`` deprecations join their
    replacement's chain, because only for those is the value rewritten onto the replacement.
    An attribute with any other deprecation therefore has a chain of just its own names, and
    the first key is not guaranteed to be non-deprecated -- check ``deprecation`` if that
    matters.
    """

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

    examples: Optional[List[AttributeValue]] = None
    """Example values of the attribute"""

    search_alias: Optional[SearchAlias] = None
    """How this attribute is exposed in Sentry search"""
