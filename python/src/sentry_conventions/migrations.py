"""Data migrations for deprecated Sentry semantic convention attributes.

SDKs can use :func:`migrate_attribute_value` when they need to migrate a single
attribute value in isolation. Relay should use :func:`migrate_deprecated_attributes`
with the full attribute map during normalization so multi-source migrations can be
applied and source attributes can be removed once their deprecation status switches
to ``normalize``.
"""

import json
from dataclasses import dataclass
from typing import Callable, Dict, List, Optional, cast

from sentry_conventions.attributes import (
    ATTRIBUTE_METADATA,
    ATTRIBUTE_NAMES,
    AttributeValue,
    DeprecationStatus,
)

AttributeMap = Dict[str, AttributeValue]
AttributeMigrationFn = Callable[[AttributeMap], Optional[AttributeValue]]

GEN_AI_REQUEST_MESSAGES = "gen_ai.request.messages"
GEN_AI_RESPONSE_TEXT = "gen_ai.response.text"
GEN_AI_RESPONSE_TOOL_CALLS = "gen_ai.response.tool_calls"


@dataclass(frozen=True)
class AttributeMigration:
    """A data migration from deprecated source attributes to one replacement attribute."""

    id: str
    """Stable identifier referenced by attribute metadata."""

    sources: List[str]
    """Deprecated attributes consumed by this migration."""

    replacement: str
    """Attribute written by this migration."""

    migrate: AttributeMigrationFn
    """Computes the replacement value from the current attribute map."""


ATTRIBUTE_MIGRATIONS: List[AttributeMigration] = []


def attribute_migration(
    *, id: str, sources: List[str], replacement: str
) -> Callable[[AttributeMigrationFn], AttributeMigrationFn]:
    """Registers a data migration for deprecated attributes."""

    def register(function: AttributeMigrationFn) -> AttributeMigrationFn:
        ATTRIBUTE_MIGRATIONS.append(
            AttributeMigration(
                id=id,
                sources=sources,
                replacement=replacement,
                migrate=function,
            )
        )
        return function

    return register


# Utilities


def _parse_json(value: AttributeValue) -> Optional[object]:
    if not isinstance(value, str):
        return None

    try:
        return json.loads(value)
    except ValueError:
        return None


def _parse_json_array(value: AttributeValue) -> Optional[List[object]]:
    parsed = _parse_json(value)
    if isinstance(parsed, list):
        return parsed
    return None


def _text_part(content: str) -> Dict[str, object]:
    return {"type": "text", "content": content}


def _normalize_message_content(content: object) -> List[object]:
    if isinstance(content, str):
        return [_text_part(content)]

    if isinstance(content, list):
        parts: List[object] = []
        for part in content:
            if isinstance(part, str):
                parts.append(_text_part(part))
            elif isinstance(part, dict) and "text" in part and "content" not in part:
                normalized = dict(part)
                normalized["content"] = normalized["text"]
                parts.append(normalized)
            else:
                parts.append(part)
        return parts

    return [content]


def _migrate_gen_ai_request_messages_value(value: AttributeValue) -> AttributeValue:
    if isinstance(value, str) and _parse_json(value) is None:
        return json.dumps(
            [{"role": "user", "parts": [_text_part(value)]}], separators=(",", ":")
        )

    messages = _parse_json_array(value)
    if messages is None:
        return value

    if all(isinstance(message, str) for message in messages):
        string_messages = cast(List[str], messages)
        return json.dumps(
            [
                {"role": "user", "parts": [_text_part(message)]}
                for message in string_messages
            ],
            separators=(",", ":"),
        )

    if all(isinstance(message, dict) for message in messages):
        dict_messages = cast(List[Dict[str, object]], messages)
        normalized_messages = []
        for message in dict_messages:
            normalized = dict(message)
            if "parts" not in normalized and "content" in normalized:
                content = normalized.pop("content")
                normalized["parts"] = _normalize_message_content(content)
            normalized_messages.append(normalized)
        return json.dumps(normalized_messages, separators=(",", ":"))

    return value


def _extract_response_text_parts(
    value: Optional[AttributeValue],
) -> List[Dict[str, object]]:
    if value is None:
        return []

    parsed = _parse_json(value)
    if isinstance(value, str) and parsed is None:
        return [_text_part(value)]

    if isinstance(parsed, str):
        return [_text_part(parsed)]

    if isinstance(parsed, list):
        parts: List[Dict[str, object]] = []
        for message in parsed:
            if isinstance(message, str):
                parts.append(_text_part(message))
            elif isinstance(message, dict):
                content = message.get("content")
                message_parts = message.get("parts")
                if isinstance(content, str):
                    parts.append(_text_part(content))
                elif isinstance(message_parts, list):
                    parts.extend(message_parts)  # type: ignore[arg-type]
        return parts

    if isinstance(parsed, dict):
        content = parsed.get("content")
        message_parts = parsed.get("parts")
        if isinstance(content, str):
            return [_text_part(content)]
        if isinstance(message_parts, list):
            return message_parts  # type: ignore[return-value]

    return []


# Migrations


@attribute_migration(
    id="gen_ai_request_messages_to_input_messages",
    sources=[GEN_AI_REQUEST_MESSAGES],
    replacement=ATTRIBUTE_NAMES.GEN_AI_INPUT_MESSAGES,
)
def _migrate_gen_ai_request_messages_to_input_messages(
    attributes: AttributeMap,
) -> Optional[AttributeValue]:
    value = attributes.get(GEN_AI_REQUEST_MESSAGES)
    return None if value is None else _migrate_gen_ai_request_messages_value(value)


@attribute_migration(
    id="gen_ai_response_to_output_messages",
    sources=[GEN_AI_RESPONSE_TEXT, GEN_AI_RESPONSE_TOOL_CALLS],
    replacement=ATTRIBUTE_NAMES.GEN_AI_OUTPUT_MESSAGES,
)
def _migrate_gen_ai_response_to_output_messages(
    attributes: AttributeMap,
) -> Optional[AttributeValue]:
    text_value = attributes.get(GEN_AI_RESPONSE_TEXT)
    tool_calls_value = attributes.get(GEN_AI_RESPONSE_TOOL_CALLS)
    parts: List[Dict[str, object]] = _extract_response_text_parts(text_value)

    tool_calls = (
        _parse_json_array(tool_calls_value) if tool_calls_value is not None else None
    )
    if tool_calls is not None:
        for tool_call in tool_calls:
            if isinstance(tool_call, dict):
                part = dict(tool_call)
                part["type"] = "tool_call"
                parts.append(part)

    if parts:
        return json.dumps(
            [{"role": "assistant", "parts": parts}], separators=(",", ":")
        )

    return text_value if text_value is not None else tool_calls_value


# Public API


def migrate_attribute_value(
    attribute_name: str, value: AttributeValue
) -> AttributeValue:
    """Migrates a single deprecated attribute value when possible.

    This helper only applies migrations that depend on one source attribute. Use
    :func:`migrate_deprecated_attributes` for migrations that need the full attribute map.
    """
    for migration in ATTRIBUTE_MIGRATIONS:
        if len(migration.sources) == 1 and migration.sources[0] == attribute_name:
            return migration.migrate({attribute_name: value}) or value
    return value


def _should_normalize_source(source: str) -> bool:
    deprecation = ATTRIBUTE_METADATA[source].deprecation
    return deprecation is not None and deprecation.status == DeprecationStatus.NORMALIZE


def migrate_deprecated_attributes(attributes: AttributeMap) -> None:
    """Applies all deprecated attribute migrations in-place.

    If a replacement attribute is already present, it is preserved. Source attributes are
    removed only after at least one source has deprecation status ``normalize``; during
    ``backfill``, both the source and replacement are kept.
    """
    for migration in ATTRIBUTE_MIGRATIONS:
        if not any(source in attributes for source in migration.sources):
            continue

        if migration.replacement not in attributes:
            migrated_value = migration.migrate(attributes)
            if migrated_value is not None:
                attributes[migration.replacement] = migrated_value

        if any(_should_normalize_source(source) for source in migration.sources):
            for source in migration.sources:
                attributes.pop(source, None)


__all__ = [
    "ATTRIBUTE_MIGRATIONS",
    "migrate_attribute_value",
    "migrate_deprecated_attributes",
]
