export type {
  AttributeName,
  AttributeType,
  AttributeValue,
  Attributes,
  ApplyScrubbing,
  ApplyScrubbingInfo,
  DeprecationInfo,
  DeprecationStatus,
  AttributeMetadata,
} from './attributes';

export { ATTRIBUTE_METADATA, ATTRIBUTE_TYPE } from './attributes';
export type { AttributeMigrationId } from './migrations';
export { migrateAttributeValue, migrateDeprecatedAttributes } from './migrations';
