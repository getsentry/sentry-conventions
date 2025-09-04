from sentry_conventions import attributes

attr_str = "ai.responses"

metadata = attributes._ATTRIBUTE_METADATA.get(attr_str)
ty = metadata.type if metadata else None
print(ty)  # "string[]"
deprecation = metadata.deprecation if metadata else None
replacement = deprecation.replacement if deprecation else None
print(replacement)  # "gen_ai.response.text"


attr_str = attributes.HTTP_RESPONSE_CONTENT_LENGTH

metadata = attributes._ATTRIBUTE_METADATA.get(attr_str)
deprecation = metadata.deprecation if metadata else None
status = deprecation.status if deprecation else None
print(status)  # attributes.DeprecationStatus.BACKFILL


attr_str = "not.in.conventions"

metadata = attributes._ATTRIBUTE_METADATA.get(attr_str)
print(metadata)  # None
