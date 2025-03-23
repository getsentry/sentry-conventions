<!-- THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. -->

# Query Attributes

## query.\<key\>

An item in a query string. Usually added by client-side routing frameworks like vue-router.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Has dynamic suffix | Yes |
| Example | `query.id='123'` |
| Deprecated | Yes, use `url.query` instead |
| Deprecation Reason | Instead of sending items individually in query.\<key\>, they should be sent all together with url.query. |

