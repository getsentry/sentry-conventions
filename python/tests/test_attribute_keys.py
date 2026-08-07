import pytest

from sentry_conventions.attributes import (
    ATTRIBUTE_NAMES,
    get_attribute_value,
)

HTTP_METHOD_ATTRIBUTE_KEYS = (
    "http.request.method",
    "http.method",
    "http.request_method",
    "method",
)


def test_every_attribute_has_a_key_tuple() -> None:
    attribute_namespace = vars(ATTRIBUTE_NAMES)
    attribute_names = [
        name
        for name, value in attribute_namespace.items()
        if name.isupper() and isinstance(value, str)
    ]

    missing_key_tuples = [
        name
        for name in attribute_names
        if not isinstance(attribute_namespace.get(f"{name}_KEYS"), tuple)
    ]
    assert missing_key_tuples == []


def test_http_request_method_key_tuple_ordering() -> None:
    assert ATTRIBUTE_NAMES.HTTP_REQUEST_METHOD_KEYS == HTTP_METHOD_ATTRIBUTE_KEYS
    assert ATTRIBUTE_NAMES.HTTP_METHOD_KEYS == HTTP_METHOD_ATTRIBUTE_KEYS
    assert ATTRIBUTE_NAMES._HTTP_REQUEST_METHOD_KEYS == HTTP_METHOD_ATTRIBUTE_KEYS
    assert ATTRIBUTE_NAMES.METHOD_KEYS == HTTP_METHOD_ATTRIBUTE_KEYS


def test_standalone_attribute_key_tuple() -> None:
    assert ATTRIBUTE_NAMES.CACHE_ITEM_SIZE_KEYS == ("cache.item_size",)


def test_key_tuple_includes_search_aliases() -> None:
    # sentry.replay_id is exposed as replay.id in search, and replaces replay_id.
    replay_id_keys = ("sentry.replay_id", "replay.id", "replay_id")

    assert ATTRIBUTE_NAMES.SENTRY_REPLAY_ID_KEYS == replay_id_keys
    assert ATTRIBUTE_NAMES.REPLAY_ID_KEYS == replay_id_keys


def test_key_tuple_includes_additional_search_alias_aliases() -> None:
    # db.system carries the extra search alias span.system, and is replaced by db.system.name.
    db_system_keys = ("db.system.name", "db.system", "span.system")

    assert ATTRIBUTE_NAMES.DB_SYSTEM_NAME_KEYS == db_system_keys
    assert ATTRIBUTE_NAMES.DB_SYSTEM_KEYS == db_system_keys


def test_key_tuple_omits_deprecated_aliases_outside_the_family() -> None:
    # address aliases several deprecated attributes replaced by other keys; only its own
    # replacement and its fellow predecessor belong in the chain.
    assert ATTRIBUTE_NAMES.ADDRESS_KEYS == ("server.address", "address", "server_name")


def test_get_attribute_value_prefers_canonical_key() -> None:
    attributes = {
        "http.request.method": "POST",
        "http.method": "GET",
        "http.request_method": "PUT",
        "method": "DELETE",
    }

    assert (
        get_attribute_value(attributes, ATTRIBUTE_NAMES.HTTP_REQUEST_METHOD_KEYS)
        == "POST"
    )


def test_get_attribute_value_falls_back_to_deprecated_predecessor() -> None:
    assert (
        get_attribute_value(
            {"http.method": "GET"},
            ATTRIBUTE_NAMES.HTTP_REQUEST_METHOD_KEYS,
        )
        == "GET"
    )


def test_get_attribute_value_returns_none_when_keys_are_missing() -> None:
    assert get_attribute_value({}, ATTRIBUTE_NAMES.HTTP_REQUEST_METHOD_KEYS) is None


@pytest.mark.parametrize("value", [False, 0, ""])
def test_get_attribute_value_preserves_falsy_values(value: object) -> None:
    result = get_attribute_value(
        {"http.request.method": value},
        ATTRIBUTE_NAMES.HTTP_REQUEST_METHOD_KEYS,
    )

    assert result is value
