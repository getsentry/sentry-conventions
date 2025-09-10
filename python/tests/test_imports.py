def test_imports() -> None:
    """Test that the package and its members can be imported."""
    from sentry_conventions import attributes
    from sentry_conventions.attributes import (
        _ATTRIBUTE_METADATA,
        ATTRIBUTE_NAMES,
        Attributes,
    )
