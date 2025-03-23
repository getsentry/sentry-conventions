<!-- THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. -->

# User Attributes

- [Stable Attributes](#stable-attributes)
  - [user.email](#useremail)
  - [user.full_name](#userfull_name)
  - [user.geo.city](#usergeocity)
  - [user.geo.country_code](#usergeocountry_code)
  - [user.geo.region](#usergeoregion)
  - [user.geo.subdivision](#usergeosubdivision)
  - [user.hash](#userhash)
  - [user.id](#userid)
  - [user.name](#username)
  - [user.roles](#userroles)

## Stable Attributes

### user.email

User email address.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | true |
| Exists in OpenTelemetry | Yes |
| Example | `test@example.com` |

### user.full_name

User's full name.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | true |
| Exists in OpenTelemetry | Yes |
| Example | `John Smith` |

### user.geo.city

Human readable city name.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Example | `Toronto` |

### user.geo.country_code

Two-letter country code (ISO 3166-1 alpha-2).

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Example | `CA` |

### user.geo.region

Human readable region name or code.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Example | `Canada` |

### user.geo.subdivision

Human readable subdivision name.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Example | `Ontario` |

### user.hash

Unique user hash to correlate information for a user in anonymized form.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | true |
| Exists in OpenTelemetry | Yes |
| Example | `8ae4c2993e0f4f3b8b2d1b1f3b5e8f4d` |

### user.id

Unique identifier of the user.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | true |
| Exists in OpenTelemetry | Yes |
| Example | `S-1-5-21-202424912787-2692429404-2351956786-1000` |

### user.name

Short name or login/username of the user.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | true |
| Exists in OpenTelemetry | Yes |
| Example | `j.smith` |

### user.roles

Array of user roles at the time of the event.

| Property | Value |
| --- | --- |
| Type | `string[]` |
| Has PII | true |
| Exists in OpenTelemetry | Yes |
| Example | `["admin","editor"]` |

