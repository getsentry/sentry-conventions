"""Test that imports work successfully and don't crash."""

import warnings


def test_basic_imports():
    """Test that basic imports work without crashing."""
    try:
        from sentry_conventions import attributes

        assert attributes is not None
    except ImportError as e:
        raise AssertionError(f"Failed to import attributes: {e}")


def test_typed_dict_imports():
    """Test that TypedDict classes can be imported."""
    try:
        from sentry_conventions.attributes import Attributes, FullAttributes

        assert Attributes is not None
        assert FullAttributes is not None
    except ImportError as e:
        raise AssertionError(f"Failed to import TypedDict classes: {e}")


def test_constants_import():
    """Test that ATTRIBUTE_NAMES class can be imported and attributes accessed."""
    try:
        from sentry_conventions.attributes import ATTRIBUTE_NAMES

        assert ATTRIBUTE_NAMES.AI_CITATIONS == "ai.citations"
        assert ATTRIBUTE_NAMES.HTTP_REQUEST_METHOD == "http.request.method"
    except ImportError as e:
        raise AssertionError(f"Failed to import ATTRIBUTE_NAMES: {e}")


def test_metadata_import():
    """Test that metadata can be imported."""
    try:
        from sentry_conventions.attributes import _ATTRIBUTE_METADATA

        assert _ATTRIBUTE_METADATA is not None
        assert isinstance(_ATTRIBUTE_METADATA, dict)

        from sentry_conventions import attributes

        x = attributes.Attributes()
    except ImportError as e:
        raise AssertionError(f"Failed to import _ATTRIBUTE_METADATA: {e}")


def test_deprecation_warnings():
    """Test that accessing deprecated attributes via ATTRIBUTE_NAMES class emits warnings."""
    import warnings

    from sentry_conventions.attributes import ATTRIBUTE_NAMES

    # Test deprecated attribute - should emit warnings
    with warnings.catch_warnings(record=True) as w:
        warnings.simplefilter("always")
        _ = ATTRIBUTE_NAMES.HTTP_METHOD  # This is deprecated

        assert len(w) == 1, f"Expected 1 deprecation warning, got {len(w)}"
        assert issubclass(w[0].category, DeprecationWarning)
        assert "HTTP_METHOD is deprecated" in str(w[0].message)

    # Test non-deprecated attribute - should not emit warnings  
    with warnings.catch_warnings(record=True) as w:
        warnings.simplefilter("always")
        _ = ATTRIBUTE_NAMES.HTTP_REQUEST_METHOD  # This is not deprecated

        assert len(w) == 0, f"Expected no warnings for non-deprecated attribute, got {len(w)}"


def test_no_import_warnings():
    """Test that importing the module doesn't trigger deprecation warnings."""
    import warnings
    
    with warnings.catch_warnings(record=True) as w:
        warnings.simplefilter("always")
        from sentry_conventions import attributes
        
        # The import itself should not trigger warnings
        assert len(w) == 0, f"Expected no warnings on import, got {len(w)}"


if __name__ == "__main__":
    test_basic_imports()
    test_typed_dict_imports()
    test_constants_import()
    test_metadata_import()
    test_deprecation_warnings()
    test_no_import_warnings()
