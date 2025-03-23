<!-- THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. -->

# Faas Attributes

## faas.coldstart

A boolean that is true if the serverless function is executed for the first time (aka cold-start).

| Property | Value |
| --- | --- |
| Type | `boolean` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `true` |

## faas.cron

A string containing the schedule period as Cron Expression.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `0/5 * * * ? *` |

## faas.time

A string containing the function invocation time in the ISO 8601 format expressed in UTC.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `2020-01-23T13:47:06Z` |

## faas.trigger

Type of the trigger which caused this function invocation.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `timer` |

