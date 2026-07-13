"""Smoke test to verify package functionality."""

import pytest

from sentry_conventions.attributes import (
    ATTRIBUTE_METADATA,
    ATTRIBUTE_NAMES,
    Attributes,
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
        attributes = Attributes(
            {
                ATTRIBUTE_NAMES.AI_COMPLETION_TOKENS_USED: 10,
            }
        )

        tokens_used = attributes.get(ATTRIBUTE_NAMES.AI_COMPLETION_TOKENS_USED)
        assert tokens_used == 10


def test_attribute_search_alias_metadata() -> None:
    aliases = ATTRIBUTE_METADATA[ATTRIBUTE_NAMES.SENTRY_OP].search_aliases

    assert aliases is not None
    assert len(aliases) == 1

    alias = aliases[0]
    assert alias.public_alias == "span.op"
    assert alias.internal_name == "sentry.op"
    assert alias.search_type == "string"
    assert alias.dataset_mappings.spans == "op"
    assert alias.dataset_mappings.eap == "attr_str[sentry.op]"
