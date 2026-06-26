import json

import pytest

from sentry_conventions.attributes import ATTRIBUTE_NAMES
from sentry_conventions.migrations import (
    migrate_attribute_value,
    migrate_deprecated_attributes,
)


def migrated_request_messages(value):
    return json.loads(migrate_attribute_value("gen_ai.request.messages", value))


def output_messages(attributes):
    return json.loads(attributes[ATTRIBUTE_NAMES.GEN_AI_OUTPUT_MESSAGES])


@pytest.mark.parametrize(
    ("value", "expected"),
    [
        (
            "hello",
            [{"role": "user", "parts": [{"type": "text", "content": "hello"}]}],
        ),
        (
            json.dumps(["hello", "world"]),
            [
                {"role": "user", "parts": [{"type": "text", "content": "hello"}]},
                {"role": "user", "parts": [{"type": "text", "content": "world"}]},
            ],
        ),
        (
            json.dumps([{"role": "user", "content": "hello"}]),
            [{"role": "user", "parts": [{"type": "text", "content": "hello"}]}],
        ),
        (
            json.dumps(
                [{"role": "system", "content": "hello", "response_metadata": {}}]
            ),
            [
                {
                    "role": "system",
                    "response_metadata": {},
                    "parts": [{"type": "text", "content": "hello"}],
                }
            ],
        ),
        (
            json.dumps([{"role": "user", "content": [{"type": "text", "text": "hello"}]}]),
            [{"role": "user", "parts": [{"type": "text", "text": "hello", "content": "hello"}]}],
        ),
        (
            json.dumps([{"role": "user", "parts": [{"type": "text", "content": "hello"}]}]),
            [{"role": "user", "parts": [{"type": "text", "content": "hello"}]}],
        ),
    ],
)
def test_migrate_gen_ai_request_messages_to_input_messages_value(value, expected):
    assert migrated_request_messages(value) == expected


@pytest.mark.parametrize("value", [42, True, ["hello"]])
def test_migrate_gen_ai_request_messages_leaves_non_string_values_unchanged(value):
    assert migrate_attribute_value("gen_ai.request.messages", value) == value


def test_migrate_deprecated_attributes_applies_request_message_migration():
    attributes = {"gen_ai.request.messages": json.dumps(["hello"])}

    migrate_deprecated_attributes(attributes)

    assert "gen_ai.request.messages" not in attributes
    assert json.loads(attributes[ATTRIBUTE_NAMES.GEN_AI_INPUT_MESSAGES]) == [
        {"role": "user", "parts": [{"type": "text", "content": "hello"}]}
    ]


@pytest.mark.parametrize(
    ("text", "expected_parts"),
    [
        (
            "The capital of France is Paris.",
            [{"type": "text", "content": "The capital of France is Paris."}],
        ),
        (
            json.dumps(["The capital of France is Paris."]),
            [{"type": "text", "content": "The capital of France is Paris."}],
        ),
        (
            json.dumps({"content": "Paris.", "role": "assistant", "tool_calls": "None"}),
            [{"type": "text", "content": "Paris."}],
        ),
        (
            json.dumps(
                {
                    "content": "Paris.",
                    "role": "assistant",
                    "annotations": [],
                    "audio": "None",
                    "refusal": "None",
                }
            ),
            [{"type": "text", "content": "Paris."}],
        ),
        (
            json.dumps([{"role": "assistant", "content": "The capital of France is Paris."}]),
            [{"type": "text", "content": "The capital of France is Paris."}],
        ),
        (
            json.dumps([{"role": "assistant", "parts": [{"type": "text", "content": "hello"}]}]),
            [{"type": "text", "content": "hello"}],
        ),
    ],
)
def test_migrate_gen_ai_response_text_to_output_messages(text, expected_parts):
    attributes = {"gen_ai.response.text": text}

    migrate_deprecated_attributes(attributes)

    assert "gen_ai.response.text" not in attributes
    assert output_messages(attributes) == [{"role": "assistant", "parts": expected_parts}]


def test_migrate_gen_ai_response_tool_calls_to_output_messages():
    attributes = {
        "gen_ai.response.tool_calls": json.dumps(
            [{"name": "get_weather", "arguments": {"location": "Paris"}}]
        )
    }

    migrate_deprecated_attributes(attributes)

    assert "gen_ai.response.tool_calls" not in attributes
    assert output_messages(attributes) == [
        {
            "role": "assistant",
            "parts": [
                {
                    "type": "tool_call",
                    "name": "get_weather",
                    "arguments": {"location": "Paris"},
                }
            ],
        }
    ]


def test_migrate_gen_ai_response_text_and_tool_calls_to_output_messages():
    attributes = {
        "gen_ai.response.text": json.dumps(["The weather is rainy."]),
        "gen_ai.response.tool_calls": json.dumps(
            [{"name": "get_weather", "arguments": {"location": "Paris"}}]
        ),
    }

    migrate_deprecated_attributes(attributes)

    assert "gen_ai.response.text" not in attributes
    assert "gen_ai.response.tool_calls" not in attributes
    assert output_messages(attributes) == [
        {
            "role": "assistant",
            "parts": [
                {"type": "text", "content": "The weather is rainy."},
                {
                    "type": "tool_call",
                    "name": "get_weather",
                    "arguments": {"location": "Paris"},
                },
            ],
        }
    ]


def test_migrate_deprecated_attributes_does_not_overwrite_existing_replacement():
    existing = json.dumps(
        [{"role": "assistant", "parts": [{"type": "text", "content": "existing"}]}]
    )
    attributes = {
        "gen_ai.response.text": json.dumps(["new"]),
        ATTRIBUTE_NAMES.GEN_AI_OUTPUT_MESSAGES: existing,
    }

    migrate_deprecated_attributes(attributes)

    assert "gen_ai.response.text" not in attributes
    assert attributes[ATTRIBUTE_NAMES.GEN_AI_OUTPUT_MESSAGES] == existing


def test_migrate_attribute_value_leaves_unknown_attributes_unchanged():
    assert migrate_attribute_value("unknown", "x") == "x"


def test_migrate_deprecated_attributes_preserves_unrelated_attributes():
    attributes = {
        "unrelated": "kept",
        "gen_ai.request.messages": json.dumps(["hello"]),
    }

    migrate_deprecated_attributes(attributes)

    assert attributes["unrelated"] == "kept"
