from sentry_conventions.migrations import (
    migrate_attribute_value,
    migrate_deprecated_attributes,
)


def test_migrate_attribute_value_leaves_unknown_attribute_unchanged():
    assert migrate_attribute_value("unknown.attribute", "value") == "value"


def test_migrate_deprecated_attributes_leaves_unknown_attributes_unchanged():
    attributes = {"unknown.attribute": "value"}

    migrate_deprecated_attributes(attributes)

    assert attributes == {"unknown.attribute": "value"}
