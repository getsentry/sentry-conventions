"""Smoke test to verify package functionality."""

import pytest

from sentry_conventions.attributes import (
    ATTRIBUTE_NAMES,
    Attributes,
    FullAttributes,
)


def test_attributes_typeddict() -> None:
    attributes = Attributes(
        {
            ATTRIBUTE_NAMES.AI_CITATIONS: ["source1", "source2"],
            ATTRIBUTE_NAMES.DB_OPERATION_NAME: "SELECT",
            ATTRIBUTE_NAMES.HTTP_REQUEST_METHOD: "GET",
        }
    )

    citations = attributes.get(ATTRIBUTE_NAMES.AI_CITATIONS)
    assert citations == ["source1", "source2"]

    db_operation = attributes.get(ATTRIBUTE_NAMES.DB_OPERATION_NAME)
    assert db_operation == "SELECT"

    http_method = attributes.get(ATTRIBUTE_NAMES.HTTP_REQUEST_METHOD)
    assert http_method == "GET"

    port = attributes.get(ATTRIBUTE_NAMES.SERVER_PORT)
    assert port is None


def test_full_attributes_typeddict() -> None:
    with pytest.warns(DeprecationWarning, match="TOKENS_USED"):
        attributes = FullAttributes(
            {
                ATTRIBUTE_NAMES.AI_COMPLETION_TOKENS_USED: 10,
            }
        )

        tokens_used = attributes.get(ATTRIBUTE_NAMES.AI_COMPLETION_TOKENS_USED)
        assert tokens_used == 10
