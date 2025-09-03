<!-- THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. -->

# Params Attributes

- [Deprecated Attributes](#deprecated-attributes)
  - [params.\<key\>](#paramskey)

## Deprecated Attributes

These attributes are deprecated and will be removed in a future version. Please use the recommended replacements.

### params.\<key\>

Decoded parameters extracted from a URL path. Usually added by client-side routing frameworks like vue-router.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Has dynamic suffix | Yes |
| Example | `params.id='123'` |
| Deprecated | Yes, use `url.path.parameter.\<key\>` instead |
| Aliases | `url.path.parameter.\<key\>` |

