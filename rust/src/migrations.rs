//! Data migrations for deprecated Sentry semantic convention attributes.
//!
//! SDKs can use [`migrate_attribute_value`] when they need to migrate a single attribute value in
//! isolation. Relay should use [`migrate_deprecated_attributes`] with the full attribute map during
//! normalization so multi-source migrations can be applied and source attributes can be removed once
//! their deprecation status switches to `normalize`.

use serde_json::{json, Map, Value};

use crate::attributes::{GEN_AI_INPUT_MESSAGES, GEN_AI_OUTPUT_MESSAGES};

const GEN_AI_REQUEST_MESSAGES: &str = "gen_ai.request.messages";
const GEN_AI_RESPONSE_TEXT: &str = "gen_ai.response.text";
const GEN_AI_RESPONSE_TOOL_CALLS: &str = "gen_ai.response.tool_calls";

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

// Utilities

fn parse_json(value: &Value) -> Option<Value> {
    value
        .as_str()
        .and_then(|s| serde_json::from_str::<Value>(s).ok())
}

fn parse_json_array(value: &Value) -> Option<Vec<Value>> {
    parse_json(value).and_then(|value| match value {
        Value::Array(items) => Some(items),
        _ => None,
    })
}

fn text_part(content: &str) -> Value {
    json!({ "type": "text", "content": content })
}

fn normalize_message_content(content: &Value) -> Vec<Value> {
    if let Some(content) = content.as_str() {
        return vec![text_part(content)];
    }

    if let Value::Array(parts) = content {
        return parts
            .iter()
            .map(|part| {
                if let Some(text) = part.as_str() {
                    text_part(text)
                } else if let Value::Object(object) = part {
                    let mut normalized = object.clone();
                    if !normalized.contains_key("content") {
                        if let Some(text) = normalized.get("text").cloned() {
                            normalized.insert("content".to_owned(), text);
                        }
                    }
                    Value::Object(normalized)
                } else {
                    part.clone()
                }
            })
            .collect();
    }

    vec![content.clone()]
}

fn migrate_gen_ai_request_messages_value(value: Value) -> Value {
    if value.is_string() && parse_json(&value).is_none() {
        return Value::String(
            serde_json::to_string(
                &json!([{ "role": "user", "parts": [text_part(value.as_str().unwrap())] }]),
            )
            .expect("gen_ai input message migration should serialize"),
        );
    }

    let Some(messages) = parse_json_array(&value) else {
        return value;
    };

    if messages.iter().all(Value::is_string) {
        return Value::String(
            serde_json::to_string(
                &messages
                    .iter()
                    .filter_map(Value::as_str)
                    .map(|message| json!({ "role": "user", "parts": [text_part(message)] }))
                    .collect::<Vec<_>>(),
            )
            .expect("gen_ai input message migration should serialize"),
        );
    }

    if messages.iter().all(Value::is_object) {
        let migrated = messages
            .iter()
            .filter_map(Value::as_object)
            .map(|message| {
                let mut normalized = message.clone();
                if !normalized.contains_key("parts") {
                    if let Some(content) = normalized.remove("content") {
                        normalized.insert(
                            "parts".to_owned(),
                            Value::Array(normalize_message_content(&content)),
                        );
                    }
                }
                Value::Object(normalized)
            })
            .collect::<Vec<_>>();

        return Value::String(
            serde_json::to_string(&migrated)
                .expect("gen_ai input message migration should serialize"),
        );
    }

    value
}

fn extract_response_text_parts(value: Option<&Value>) -> Vec<Value> {
    let Some(value) = value else {
        return Vec::new();
    };

    let parsed = parse_json(value);
    if value.is_string() && parsed.is_none() {
        return vec![text_part(value.as_str().unwrap())];
    }

    match parsed {
        Some(Value::String(text)) => vec![text_part(&text)],
        Some(Value::Array(messages)) => messages
            .iter()
            .flat_map(|message| {
                if let Some(message) = message.as_str() {
                    vec![text_part(message)]
                } else if let Some(message) = message.as_object() {
                    if let Some(content) = message.get("content").and_then(Value::as_str) {
                        vec![text_part(content)]
                    } else if let Some(parts) = message.get("parts").and_then(Value::as_array) {
                        parts.to_vec()
                    } else {
                        Vec::new()
                    }
                } else {
                    Vec::new()
                }
            })
            .collect(),
        Some(Value::Object(message)) => {
            if let Some(content) = message.get("content").and_then(Value::as_str) {
                vec![text_part(content)]
            } else if let Some(parts) = message.get("parts").and_then(Value::as_array) {
                parts.to_vec()
            } else {
                Vec::new()
            }
        }
        _ => Vec::new(),
    }
}

// Migrations

fn migrate_gen_ai_request_messages_to_input_messages(
    attributes: &Map<String, Value>,
) -> Option<Value> {
    attributes
        .get(GEN_AI_REQUEST_MESSAGES)
        .cloned()
        .map(migrate_gen_ai_request_messages_value)
}

fn migrate_gen_ai_response_to_output_messages(attributes: &Map<String, Value>) -> Option<Value> {
    let text_value = attributes.get(GEN_AI_RESPONSE_TEXT);
    let tool_calls_value = attributes.get(GEN_AI_RESPONSE_TOOL_CALLS);
    let mut parts = extract_response_text_parts(text_value);

    if let Some(tool_calls) = tool_calls_value.and_then(parse_json_array) {
        for tool_call in tool_calls {
            if let Some(tool_call) = tool_call.as_object() {
                let mut part = tool_call.clone();
                part.insert("type".to_owned(), Value::String("tool_call".to_owned()));
                parts.push(Value::Object(part));
            }
        }
    }

    if !parts.is_empty() {
        return Some(Value::String(
            serde_json::to_string(&json!([{ "role": "assistant", "parts": parts }]))
                .expect("gen_ai output message migration should serialize"),
        ));
    }

    text_value.or(tool_calls_value).cloned()
}

pub const ATTRIBUTE_MIGRATIONS: &[AttributeMigration] = &[
    AttributeMigration {
        id: "gen_ai_request_messages_to_input_messages",
        sources: &[GEN_AI_REQUEST_MESSAGES],
        replacement: GEN_AI_INPUT_MESSAGES,
        remove_sources: true,
        function: migrate_gen_ai_request_messages_to_input_messages,
    },
    AttributeMigration {
        id: "gen_ai_response_to_output_messages",
        sources: &[GEN_AI_RESPONSE_TEXT, GEN_AI_RESPONSE_TOOL_CALLS],
        replacement: GEN_AI_OUTPUT_MESSAGES,
        remove_sources: true,
        function: migrate_gen_ai_response_to_output_messages,
    },
];

// Public API

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
/// after the migration is configured for normalization; during backfill, both the source and
/// replacement are kept.
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
