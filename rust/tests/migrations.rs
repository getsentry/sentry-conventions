use sentry_conventions::migrations::{migrate_attribute_value, migrate_deprecated_attributes};
use serde_json::{json, Map, Value};

#[test]
fn migrate_attribute_value_leaves_unknown_attribute_unchanged() {
    assert_eq!(
        migrate_attribute_value("unknown.attribute", json!("value")),
        json!("value")
    );
}

#[test]
fn migrate_deprecated_attributes_leaves_unknown_attributes_unchanged() {
    let mut attributes = Map::from_iter([("unknown.attribute".to_owned(), json!("value"))]);

    migrate_deprecated_attributes(&mut attributes);

    assert_eq!(
        attributes,
        Map::from_iter([(
            "unknown.attribute".to_owned(),
            Value::String("value".to_owned())
        )])
    );
}
