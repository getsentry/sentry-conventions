<!-- THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. -->

# Cls Attributes

- [Deprecated Attributes](#deprecated-attributes)
  - [cls.source.\<key\>](#clssourcekey)

## Deprecated Attributes

These attributes are deprecated and will be removed in a future version. Please use the recommended replacements.

### cls.source.\<key\>

The HTML elements or components responsible for the layout shift. \<key\> is a numeric index from 1 to N

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Has dynamic suffix | Yes |
| Example | `body > div#app` |
| Deprecated | Yes, use `browser.web_vital.cls.source.\<key\>` instead |
| Deprecation Reason | The CLS source is now recorded as a browser.web_vital.cls.source.\<key\> attribute. |
| Aliases | `browser.web_vital.cls.source.\<key\>` |

