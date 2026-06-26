import { ATTRIBUTE_METADATA, type AttributeValue } from './attributes';

export type AttributeMigrationId = string;

type AttributeMap = Record<string, AttributeValue | undefined>;
type AttributeMigrationFn = (attributes: AttributeMap) => AttributeValue | undefined;

export interface AttributeMigration {
  /** Stable identifier referenced by attribute metadata. */
  id: AttributeMigrationId;
  /** Deprecated attributes consumed by this migration. */
  sources: string[];
  /** Attribute written by this migration. */
  replacement: string;
  /** Computes the replacement value from the current attribute map. */
  migrate: AttributeMigrationFn;
}

const attributeMigrations: AttributeMigration[] = [];

function defineAttributeMigration(
  metadata: Omit<AttributeMigration, 'migrate'>,
  migrate: AttributeMigrationFn,
): AttributeMigrationFn {
  attributeMigrations.push({ ...metadata, migrate });
  return migrate;
}

export const ATTRIBUTE_MIGRATIONS = attributeMigrations as readonly AttributeMigration[];

/**
 * Migrates a single deprecated attribute value when the migration only depends on that attribute.
 *
 * SDKs can use this helper when they see one deprecated attribute in isolation and want to emit the
 * replacement value instead. Multi-source migrations cannot be applied through this API because they
 * need the full attribute map; use {@link migrateDeprecatedAttributes} for those.
 */
export function migrateAttributeValue(attributeName: string, value: AttributeValue): AttributeValue {
  const migration = ATTRIBUTE_MIGRATIONS.find(
    (candidate) => candidate.sources.length === 1 && candidate.sources[0] === attributeName,
  );
  if (!migration) {
    return value;
  }

  return migration.migrate({ [attributeName]: value }) ?? value;
}

/**
 * Applies deprecated attribute migrations to an attribute map in-place.
 *
 * Relay should use this during normalization after SDK-provided attributes are collected. For each
 * configured migration, this helper writes the replacement attribute if it is missing. Source
 * attributes are removed only when at least one source attribute has deprecation status `normalize`;
 * during `backfill`, both the source and replacement are kept.
 */
export function migrateDeprecatedAttributes(attributes: AttributeMap): void {
  for (const migration of ATTRIBUTE_MIGRATIONS) {
    if (!migration.sources.some((source) => attributes[source] !== undefined)) {
      continue;
    }

    if (attributes[migration.replacement] === undefined) {
      const migratedValue = migration.migrate(attributes);
      if (migratedValue !== undefined) {
        attributes[migration.replacement] = migratedValue;
      }
    }

    if (migration.sources.some((source) => ATTRIBUTE_METADATA[source]?.deprecation?.status === 'normalize')) {
      for (const source of migration.sources) {
        delete attributes[source];
      }
    }
  }
}
