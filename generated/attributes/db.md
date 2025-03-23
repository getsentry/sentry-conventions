<!-- THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. -->

# Db Attributes

## db.collection.name

The name of a collection (table, container) within the database.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `users` |
| Aliases | `db.collection` |

## db.name

The name of the database being accessed.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `customers` |
| Deprecated | Yes, use `db.namespace` instead |
| Aliases | `db.namespace` |

## db.namespace

The name of the database being accessed.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `customers` |
| Aliases | `db.name` |

## db.operation

The name of the operation being executed.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `SELECT` |
| Deprecated | Yes, use `db.operation.name` instead |
| Aliases | `db.operation.name` |

## db.operation.name

The name of the operation being executed.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `SELECT` |
| Aliases | `db.operation` |

## db.query.parameter.\<key\>

A query parameter used in db.query.text, with \<key\> being the parameter name, and the attribute value being a string representation of the parameter value.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Has dynamic suffix | Yes |
| Example | `db.query.parameter.foo='123'` |

## db.query.text

The database query being executed. Should be paramaterized

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `SELECT * FROM users` |
| Aliases | `db.statement` |

## db.redis.connection

The redis connection name.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `my-redis-instance` |

## db.redis.parameters

The array of command parameters given to a redis command.

| Property | Value |
| --- | --- |
| Type | `string[]` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Example | `["test","*"]` |

## db.sql.bindings

The array of query bindings.

| Property | Value |
| --- | --- |
| Type | `string[]` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Example | `["1","foo"]` |
| Deprecated | Yes, use `db.query.parameter.\<key\>` instead |
| Deprecation Reason | Instead of adding every binding in the db.sql.bindings attribute, add them as individual entires with db.query.parameter.\<key\>. |

## db.statement

The database statement being executed.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `SELECT * FROM users` |
| Deprecated | Yes, use `db.query.text` instead |
| Aliases | `db.query.text` |

## db.system

An identifier for the database management system (DBMS) product being used. See [OpenTelemetry docs](https://github.com/open-telemetry/semantic-conventions/blob/main/docs/database/database-spans.md#notes-and-well-known-identifiers-for-dbsystem) for a list of well-known identifiers.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `postgresql` |
| Deprecated | Yes, use `db.system.name` instead |
| Aliases | `db.system.name` |

## db.system.name

An identifier for the database management system (DBMS) product being used. See [OpenTelemetry docs](https://github.com/open-telemetry/semantic-conventions/blob/main/docs/database/database-spans.md#notes-and-well-known-identifiers-for-dbsystem) for a list of well-known identifiers.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `postgresql` |
| Aliases | `db.system` |

## db.user

The database user.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | true |
| Exists in OpenTelemetry | Yes |
| Example | `fancy_user` |

