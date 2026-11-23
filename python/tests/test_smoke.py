"""Smoke test to verify package functionality."""

import pytest

from sentry_conventions.attributes import (
    ATTRIBUTE_METADATA,
    ATTRIBUTE_NAMES,
)


def test_full_attributes() -> None:
    with pytest.warns(DeprecationWarning, match="TOKENS_USED"):
        attributes = {
            ATTRIBUTE_NAMES.AI_COMPLETION_TOKENS_USED: 10,
        }

        tokens_used = attributes.get(ATTRIBUTE_NAMES.AI_COMPLETION_TOKENS_USED)
        assert tokens_used == 10


def test_attribute_search_alias_metadata() -> None:
    search_alias = ATTRIBUTE_METADATA[ATTRIBUTE_NAMES.SENTRY_OP].search_alias
    assert search_alias is not None
    assert search_alias.name == "span.op"
    assert search_alias.type is None
