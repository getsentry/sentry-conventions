"""Data migrations for deprecated Sentry semantic convention attributes.

SDKs can use :func:`migrate_attribute_value` when they need to migrate a single
attribute value in isolation. Relay should use :func:`migrate_deprecated_attributes`
with the full attribute map during normalization so multi-source migrations can be
applied and source attributes can be removed once their deprecation status switches
to ``normalize``.
"""

from dataclasses import dataclass
from typing import Callable, Dict, List, Optional

from sentry_conventions.attributes import (
    ATTRIBUTE_METADATA,
    AttributeValue,
    DeprecationStatus,
)

AttributeMap = Dict[str, AttributeValue]
AttributeMigrationFn = Callable[[AttributeMap], Optional[AttributeValue]]


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


def _should_normalize_source(attribute_name: str) -> bool:
    metadata = ATTRIBUTE_METADATA.get(attribute_name)
    if not metadata or not metadata.deprecation:
        return False
    return metadata.deprecation.status == DeprecationStatus.NORMALIZE


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
