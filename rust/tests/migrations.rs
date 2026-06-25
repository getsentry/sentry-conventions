use sentry_conventions::attributes::{GEN_AI_INPUT_MESSAGES, GEN_AI_OUTPUT_MESSAGES};
use sentry_conventions::migrations::{migrate_attribute_value, migrate_deprecated_attributes};
use serde_json::{json, Map, Value};

fn json_string(value: Value) -> Value {
    Value::String(serde_json::to_string(&value).unwrap())
}

fn migrated_request_messages(value: Value) -> Value {
    let migrated = migrate_attribute_value("gen_ai.request.messages", value);
    serde_json::from_str(migrated.as_str().unwrap()).unwrap()
}

fn output_messages(attributes: &Map<String, Value>) -> Value {
    serde_json::from_str(
        attributes
            .get(GEN_AI_OUTPUT_MESSAGES)
            .unwrap()
            .as_str()
            .unwrap(),
    )
    .unwrap()
}

#[test]
fn migrates_gen_ai_request_messages_shapes() {
    let cases = [
        (
            Value::String("hello".to_owned()),
            json!([{ "role": "user", "parts": [{ "type": "text", "content": "hello" }] }]),
        ),
        (
            json_string(json!(["hello", "world"])),
            json!([
                { "role": "user", "parts": [{ "type": "text", "content": "hello" }] },
                { "role": "user", "parts": [{ "type": "text", "content": "world" }] }
            ]),
        ),
        (
            json_string(json!([{ "role": "user", "content": "hello" }])),
            json!([{ "role": "user", "parts": [{ "type": "text", "content": "hello" }] }]),
        ),
        (
            json_string(json!([{ "role": "system", "content": "hello", "response_metadata": {} }])),
            json!([{ "role": "system", "response_metadata": {}, "parts": [{ "type": "text", "content": "hello" }] }]),
        ),
        (
            json_string(
                json!([{ "role": "user", "content": [{ "type": "text", "text": "hello" }] }]),
            ),
            json!([{ "role": "user", "parts": [{ "type": "text", "text": "hello", "content": "hello" }] }]),
        ),
        (
            json_string(
                json!([{ "role": "user", "parts": [{ "type": "text", "content": "hello" }] }]),
            ),
            json!([{ "role": "user", "parts": [{ "type": "text", "content": "hello" }] }]),
        ),
    ];

    for (input, expected) in cases {
        assert_eq!(migrated_request_messages(input), expected);
    }
}

#[test]
fn leaves_non_string_request_message_values_unchanged() {
    for value in [json!(42), json!(true), json!(["hello"])] {
        assert_eq!(
            migrate_attribute_value("gen_ai.request.messages", value.clone()),
            value
        );
    }
}

#[test]
fn migrate_deprecated_attributes_applies_request_message_migration() {
    let mut attributes = Map::from_iter([(
        "gen_ai.request.messages".to_owned(),
        json_string(json!(["hello"])),
    )]);

    migrate_deprecated_attributes(&mut attributes);

    assert!(!attributes.contains_key("gen_ai.request.messages"));
    assert_eq!(
        serde_json::from_str::<Value>(
            attributes
                .get(GEN_AI_INPUT_MESSAGES)
                .unwrap()
                .as_str()
                .unwrap()
        )
        .unwrap(),
        json!([{ "role": "user", "parts": [{ "type": "text", "content": "hello" }] }])
    );
}

#[test]
fn migrates_gen_ai_response_text_shapes() {
    let cases = [
        (
            Value::String("The capital of France is Paris.".to_owned()),
            json!([{ "type": "text", "content": "The capital of France is Paris." }]),
        ),
        (
            json_string(json!(["The capital of France is Paris."])),
            json!([{ "type": "text", "content": "The capital of France is Paris." }]),
        ),
        (
            json_string(json!({ "content": "Paris.", "role": "assistant", "tool_calls": "None" })),
            json!([{ "type": "text", "content": "Paris." }]),
        ),
        (
            json_string(
                json!({ "content": "Paris.", "role": "assistant", "annotations": [], "audio": "None", "refusal": "None" }),
            ),
            json!([{ "type": "text", "content": "Paris." }]),
        ),
        (
            json_string(
                json!([{ "role": "assistant", "content": "The capital of France is Paris." }]),
            ),
            json!([{ "type": "text", "content": "The capital of France is Paris." }]),
        ),
        (
            json_string(
                json!([{ "role": "assistant", "parts": [{ "type": "text", "content": "hello" }] }]),
            ),
            json!([{ "type": "text", "content": "hello" }]),
        ),
    ];

    for (input, expected_parts) in cases {
        let mut attributes = Map::from_iter([("gen_ai.response.text".to_owned(), input)]);
        migrate_deprecated_attributes(&mut attributes);
        assert!(!attributes.contains_key("gen_ai.response.text"));
        assert_eq!(
            output_messages(&attributes),
            json!([{ "role": "assistant", "parts": expected_parts }])
        );
    }
}

#[test]
fn migrates_gen_ai_response_tool_calls_to_output_messages() {
    let mut attributes = Map::from_iter([(
        "gen_ai.response.tool_calls".to_owned(),
        json_string(json!([{ "name": "get_weather", "arguments": { "location": "Paris" } }])),
    )]);

    migrate_deprecated_attributes(&mut attributes);

    assert!(!attributes.contains_key("gen_ai.response.tool_calls"));
    assert_eq!(
        output_messages(&attributes),
        json!([{ "role": "assistant", "parts": [{ "type": "tool_call", "name": "get_weather", "arguments": { "location": "Paris" } }] }])
    );
}

#[test]
fn migrates_gen_ai_response_text_and_tool_calls_to_output_messages() {
    let mut attributes = Map::from_iter([
        (
            "gen_ai.response.text".to_owned(),
            json_string(json!(["The weather is rainy."])),
        ),
        (
            "gen_ai.response.tool_calls".to_owned(),
            json_string(json!([{ "name": "get_weather", "arguments": { "location": "Paris" } }])),
        ),
    ]);

    migrate_deprecated_attributes(&mut attributes);

    assert!(!attributes.contains_key("gen_ai.response.text"));
    assert!(!attributes.contains_key("gen_ai.response.tool_calls"));
    assert_eq!(
        output_messages(&attributes),
        json!([{ "role": "assistant", "parts": [
            { "type": "text", "content": "The weather is rainy." },
            { "type": "tool_call", "name": "get_weather", "arguments": { "location": "Paris" } }
        ] }])
    );
}

#[test]
fn does_not_overwrite_existing_replacement() {
    let existing = serde_json::to_string(
        &json!([{ "role": "assistant", "parts": [{ "type": "text", "content": "existing" }] }]),
    )
    .unwrap();
    let mut attributes = Map::from_iter([
        (
            "gen_ai.response.text".to_owned(),
            json_string(json!(["new"])),
        ),
        (
            GEN_AI_OUTPUT_MESSAGES.to_owned(),
            Value::String(existing.clone()),
        ),
    ]);

    migrate_deprecated_attributes(&mut attributes);

    assert!(!attributes.contains_key("gen_ai.response.text"));
    assert_eq!(
        attributes.get(GEN_AI_OUTPUT_MESSAGES).unwrap().as_str(),
        Some(existing.as_str())
    );
}

#[test]
fn unknown_attribute_value_migration_is_unchanged() {
    assert_eq!(migrate_attribute_value("unknown", json!("x")), json!("x"));
}

#[test]
fn unrelated_attributes_are_preserved() {
    let mut attributes = Map::from_iter([
        ("unrelated".to_owned(), json!("kept")),
        (
            "gen_ai.request.messages".to_owned(),
            json_string(json!(["hello"])),
        ),
    ]);

    migrate_deprecated_attributes(&mut attributes);

    assert_eq!(attributes.get("unrelated"), Some(&json!("kept")));
}
