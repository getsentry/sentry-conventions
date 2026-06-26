//! Data migrations for deprecated Sentry semantic convention attributes.
//!
//! SDKs can use [`migrate_attribute_value`] when they need to migrate a single attribute value in
//! isolation. Relay should use [`migrate_deprecated_attributes`] with the full attribute map during
//! normalization so multi-source migrations can be applied and source attributes can be removed once
//! their deprecation status switches to `normalize`.

use serde_json::{Map, Value};

#[derive(Clone, Copy)]
pub struct AttributeMigration {
    /// Stable identifier referenced by attribute metadata.
    pub id: &'static str,
    /// Deprecated attributes consumed by this migration.
    pub sources: &'static [&'static str],
    /// Attribute written by this migration.
    pub replacement: &'static str,
    /// Whether source attributes should be removed after writing the replacement.
    ///
    /// Keep this `false` during the backfill period and set it to `true` once all source attributes
    /// are normalized away.
    pub remove_sources: bool,
    /// Computes the replacement value from the current attribute map.
    function: fn(&Map<String, Value>) -> Option<Value>,
}

pub const ATTRIBUTE_MIGRATIONS: &[AttributeMigration] = &[];

/// Migrates a single deprecated attribute value when the migration only depends on that attribute.
///
/// Multi-source migrations cannot be applied through this API because they need the full attribute
/// map; use [`migrate_deprecated_attributes`] for those.
pub fn migrate_attribute_value(attribute_name: &str, value: Value) -> Value {
    for migration in ATTRIBUTE_MIGRATIONS {
        if migration.sources == [attribute_name] {
            let attributes = Map::from_iter([(attribute_name.to_owned(), value.clone())]);
            return (migration.function)(&attributes).unwrap_or(value);
        }
    }

    value
}

/// Applies all deprecated attribute migrations to an attribute map in-place.
///
/// If a replacement attribute is already present, it is preserved. Source attributes are removed only
/// after at least one source has deprecation status `normalize`; during `backfill`, both the source
/// and replacement are kept.
pub fn migrate_deprecated_attributes(attributes: &mut Map<String, Value>) {
    for migration in ATTRIBUTE_MIGRATIONS {
        if !migration
            .sources
            .iter()
            .any(|source| attributes.contains_key(*source))
        {
            continue;
        }

        if !attributes.contains_key(migration.replacement) {
            if let Some(value) = (migration.function)(attributes) {
                attributes.insert(migration.replacement.to_owned(), value);
            }
        }

        if migration.remove_sources {
            for source in migration.sources {
                attributes.remove(*source);
            }
        }
    }
}
