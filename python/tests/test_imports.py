def test_imports() -> None:
    """Test that the package and its members can be imported."""
    from sentry_conventions import attributes
    from sentry_conventions.attributes import (
        ATTRIBUTE_NAMES,
        Attributes,
        FullAttributes,
    )
