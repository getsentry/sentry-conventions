from sentry_conventions.attributes import ATTRIBUTE_METADATA, DeprecationStatus

HTTP_METHOD_ATTRIBUTE_KEYS = (
    "http.request.method",
    "http.method",
    "http.request_method",
    "method",
)


def test_every_attribute_has_a_key_chain() -> None:
    missing_key_chains = [key for key, metadata in ATTRIBUTE_METADATA.items() if not metadata.keys]
    # Every attribute is readable under its own key, so it always appears in its own chain.
    chains_missing_their_own_key = [
        key for key, metadata in ATTRIBUTE_METADATA.items() if key not in metadata.keys
    ]

    assert ATTRIBUTE_METADATA
    assert missing_key_chains == []
    assert chains_missing_their_own_key == []


def test_chains_only_contain_keys_holding_the_same_value() -> None:
    # A non-rewriting deprecation keeps its value under its own key, so it must never appear in
    # another attribute's chain, and its own chain must not reach for a replacement or alias.
    rewriting = {DeprecationStatus.BACKFILL, DeprecationStatus.NORMALIZE}
    leaked = [
        f"{key} -> {chain_key}"
        for key, metadata in ATTRIBUTE_METADATA.items()
        for chain_key in metadata.keys
        if chain_key != key
        and (chain_metadata := ATTRIBUTE_METADATA.get(chain_key)) is not None
        and chain_metadata.deprecation is not None
        and chain_metadata.deprecation.status not in rewriting
    ]

    assert leaked == []


def test_non_rewriting_deprecation_chain_holds_only_its_own_names() -> None:
    # http.url names url.full as its replacement and also lists it under alias, but its value is
    # never rewritten there, so the chain stops at itself.
    assert ATTRIBUTE_METADATA["http.url"].keys == ("http.url",)
    assert "http.url" not in ATTRIBUTE_METADATA["url.full"].keys
    # http.host aliases both server.address and client.address; neither is a substitute.
    assert ATTRIBUTE_METADATA["http.host"].keys == ("http.host",)


def test_family_members_share_one_key_chain() -> None:
    for key in HTTP_METHOD_ATTRIBUTE_KEYS:
        assert ATTRIBUTE_METADATA[key].keys == HTTP_METHOD_ATTRIBUTE_KEYS


def test_standalone_attribute_key_chain() -> None:
    # Its search alias repeats its key, so the chain collapses to a single entry.
    assert ATTRIBUTE_METADATA["cache.item_size"].keys == ("cache.item_size",)


def test_key_chain_includes_search_aliases() -> None:
    # sentry.replay_id is exposed as replay.id in search, and replaces replay_id.
    replay_id_keys = ("sentry.replay_id", "replay.id", "replay_id")

    assert ATTRIBUTE_METADATA["sentry.replay_id"].keys == replay_id_keys
    assert ATTRIBUTE_METADATA["replay_id"].keys == replay_id_keys


def test_key_chain_includes_deprecated_search_aliases() -> None:
    # db.system carries the deprecated search alias span.system, and is replaced by db.system.name.
    db_system_keys = ("db.system.name", "db.system", "span.system")

    assert ATTRIBUTE_METADATA["db.system.name"].keys == db_system_keys
    assert ATTRIBUTE_METADATA["db.system"].keys == db_system_keys


def test_key_chain_omits_deprecated_aliases_outside_the_family() -> None:
    # address aliases several deprecated attributes replaced by other keys; only its own
    # replacement and its fellow predecessor belong in the chain.
    assert ATTRIBUTE_METADATA["address"].keys == (
        "server.address",
        "address",
        "server_name",
    )
