import * as fs from 'node:fs';
import * as path from 'node:path';
import type { AttributeJson } from './types';

export async function generateAttributes() {
  const attributesDir = path.join(__dirname, '..', 'model', 'attributes');

  // Get all JSON files recursively
  const attributeFiles = await getAllJsonFiles(attributesDir);

  // Generate and write JavaScript code
  writeToJs(attributesDir, attributeFiles);

  // Generate and write Python code
  writeToPython(attributesDir, attributeFiles);
}

async function getAllJsonFiles(dir: string): Promise<string[]> {
  const allFiles: string[] = [];

  async function scanDir(currentDir: string, relativePath = '') {
    const entries = await fs.promises.readdir(currentDir, { withFileTypes: true });

    for (const entry of entries) {
      const entryPath = path.join(currentDir, entry.name);
      const entryRelativePath = path.join(relativePath, entry.name);

      if (entry.isDirectory()) {
        await scanDir(entryPath, entryRelativePath);
      } else if (entry.isFile() && path.extname(entry.name) === '.json') {
        allFiles.push(entryRelativePath);
      }
    }
  }

  await scanDir(dir);
  return allFiles;
}

function writeToJs(attributesDir: string, attributeFiles: string[]) {
  let attributesContent = '// This is an auto-generated file. Do not edit!\n\n';

  let attributeTypeMap = '';

  // Build the explicit type map for Attributes
  for (const file of attributeFiles) {
    const attributePath = path.join(attributesDir, file);
    const attributeJson = JSON.parse(fs.readFileSync(attributePath, 'utf-8')) as AttributeJson;
    const { key, type, deprecation } = attributeJson;

    const constantName = getConstantName(key, !!deprecation);
    const tsType = getTsType(type);
    attributeTypeMap += `\n  [AttributeName.${constantName}]?: ${tsType};`;
  }

  // Generate metadata types and interfaces
  attributesContent += generateMetadataTypes();

  // Generate metadata dictionary
  attributesContent += generateMetadataDict(attributesDir, attributeFiles);

  attributesContent +=
    'export type AttributeValue = string | number | boolean | Array<string> | Array<number> | Array<boolean>;\n\n';

  attributesContent += `export type Attributes = {${attributeTypeMap}
} & Record<string, AttributeValue | undefined>;\n\n`;

  // Write the generated content to the file
  const outputFilePath = path.join(__dirname, '..', 'javascript', 'sentry-conventions', 'src', 'attributes.ts');
  fs.writeFileSync(outputFilePath, attributesContent);

  console.log(`Generated attributes file at: ${outputFilePath}`);
}

const constantNameMemo = new Map<string, string>();
const usedConstantNames = new Set<string>();

function getConstantName(key: string, isDeprecated: boolean): string {
  if (constantNameMemo.has(key)) {
    return constantNameMemo.get(key) as string;
  }

  let constantName = key
    .toUpperCase()
    .replaceAll('.', '_')
    .replaceAll('-', '_')
    .replaceAll('<', '__') // Replace opening angle bracket with underscore
    .replaceAll('>', '') // Remove closing angle bracket
    .replace(/__+/g, '_'); // Replace multiple consecutive underscores with a single one

  // If this key is deprecated and there's another key that maps to the same name, append underscores
  if (isDeprecated) {
    while (usedConstantNames.has(constantName)) {
      constantName = `_${constantName}`;
    }
  }

  constantNameMemo.set(key, constantName);
  usedConstantNames.add(constantName);
  return constantName;
}

function getTsType(type: AttributeJson['type']): string {
  switch (type) {
    case 'string':
      return 'string';
    case 'boolean':
      return 'boolean';
    case 'integer':
      return 'number';
    case 'double':
      return 'number';
    case 'string[]':
      return 'Array<string>';
    case 'boolean[]':
      return 'Array<boolean>';
    case 'integer[]':
      return 'Array<number>';
    case 'double[]':
      return 'Array<number>';
    default:
      throw new Error(`Unknown attribute type: ${type}`);
  }
}

function writeToPython(attributesDir: string, attributeFiles: string[]) {
  let content = `"""`;
  content +=
    "A collection of attribute names with helpers to retrieve an attribute's metadata, as defined in the Sentry Semantic Conventions registry.";
  content += '"""\n\n';
  content += '# This is an auto-generated file. Do not edit!\n\n';
  content += 'import warnings\n';
  content += 'from dataclasses import dataclass\n';
  content += 'from enum import Enum\n';
  content += 'from typing import List, Union, Literal, Optional, Dict, TypedDict\n\n';

  content += 'AttributeValue = Union[str, int, float, bool, List[str], List[int], List[float], List[bool]]\n\n';

  content += 'class AttributeType(Enum):\n';
  content += '    STRING = "string"\n';
  content += '    BOOLEAN = "boolean"\n';
  content += '    INTEGER = "integer"\n';
  content += '    DOUBLE = "double"\n';
  content += '    STRING_ARRAY = "string[]"\n';
  content += '    BOOLEAN_ARRAY = "boolean[]"\n';
  content += '    INTEGER_ARRAY = "integer[]"\n';
  content += '    DOUBLE_ARRAY = "double[]"\n\n';

  content += 'class IsPii(Enum):\n';
  content += '    TRUE = "true"\n';
  content += '    FALSE = "false"\n';
  content += '    MAYBE = "maybe"\n\n';

  content += '@dataclass\n';
  content += 'class PiiInfo:\n';
  content += `    """Holds information about PII in an attribute's values."""\n`;
  content += '    isPii: IsPii\n';
  content += '    reason: Optional[str] = None\n\n';

  content += 'class DeprecationStatus(Enum):\n';
  content += '    BACKFILL = "backfill"\n';
  content += '    NORMALIZE = "normalize"\n\n';

  content += '@dataclass\n';
  content += 'class DeprecationInfo:\n';
  content += '    """Holds information about a deprecation."""\n';
  content += '    replacement: Optional[str] = None\n';
  content += '    reason: Optional[str] = None\n';
  content += '    status: Optional[DeprecationStatus] = None\n\n';

  content += '@dataclass\n';
  content += 'class AttributeMetadata:\n';
  content += '    """The metadata for an attribute."""\n\n';
  content += '    brief: str\n';
  content += '    """A description of the attribute"""\n';
  content += '    \n';
  content += '    type: AttributeType\n';
  content += '    """The type of the attribute value"""\n';
  content += '    \n';
  content += '    pii: PiiInfo\n';
  content +=
    '    """If an attribute can have pii. Is either true, false or maybe. Optionally include a reason about why it has PII or not"""\n';
  content += '    \n';
  content += '    is_in_otel: bool\n';
  content += '    """Whether the attribute is defined in OpenTelemetry Semantic Conventions"""\n';
  content += '    \n';
  content += '    has_dynamic_suffix: Optional[bool] = None\n';
  content +=
    '    """If an attribute has a dynamic suffix, for example http.response.header.<key> where <key> is dynamic"""\n';
  content += '    \n';
  content += '    example: Optional[AttributeValue] = None\n';
  content += '    """An example value of the attribute"""\n';
  content += '    \n';
  content += '    deprecation: Optional[DeprecationInfo] = None\n';
  content += '    """If an attribute was deprecated, and what it was replaced with"""\n';
  content += '    \n';
  content += '    aliases: Optional[List[str]] = None\n';
  content += '    """If there are attributes that alias to this attribute"""\n';
  content += '    \n';
  content += '    sdks: Optional[List[str]] = None\n';
  content +=
    '    """If an attribute is SDK specific, list the SDKs that use this attribute. This is not an exhaustive list, there might be SDKs that send this attribute that are is not documented here."""\n\n';

  let attributesTypeMembers = '';
  let deprecatedAttributesTypeMembers = '';
  let fullAttributesTypeMembers = '';
  let metadataDict = '';
  const attributeNames: string[] = [];
  const deprecatedAttributes: { name: string; replacement?: string }[] = [];

  // First pass: collect deprecated attributes
  for (const file of attributeFiles) {
    const attributePath = path.join(attributesDir, file);
    const attributeJson = JSON.parse(fs.readFileSync(attributePath, 'utf-8')) as AttributeJson;

    if (attributeJson.deprecation) {
      const constantName = getConstantName(attributeJson.key, true);
      deprecatedAttributes.push({
        name: constantName,
        replacement: attributeJson.deprecation.replacement,
      });
    }
  }

  // Generate metaclass for deprecation warnings
  content += 'class _AttributeNamesMeta(type):\n';
  content += '    _deprecated_names = {\n';

  // Generate the set of deprecated attribute names
  for (const deprecatedAttr of deprecatedAttributes) {
    content += `        "${deprecatedAttr.name}",\n`;
  }

  content += '    }\n\n';
  content += '    def __getattribute__(cls, name: str):\n';
  content += '        if name == "_deprecated_names":\n';
  content += '            return super().__getattribute__(name)\n';
  content += '        if name in cls._deprecated_names:\n';
  content += '            warnings.warn(\n';
  content += '                f"{cls.__name__}.{name} is deprecated.",\n';
  content += '                DeprecationWarning,\n';
  content += '                stacklevel=2,\n';
  content += '            )\n';
  content += '        return super().__getattribute__(name)\n\n';

  // Generate ATTRIBUTE_NAMES class
  content += 'class ATTRIBUTE_NAMES(metaclass=_AttributeNamesMeta):\n';
  content += '    """Contains all attribute names as class attributes with their documentation."""\n\n';

  // Generate class attributes instead of top-level constants
  for (const file of attributeFiles) {
    const attributePath = path.join(attributesDir, file);
    const attributeJson = JSON.parse(fs.readFileSync(attributePath, 'utf-8')) as AttributeJson;

    const { key, brief, type, pii, is_in_otel, example, has_dynamic_suffix, deprecation, alias } = attributeJson;

    // Convert attribute key to a valid Python constant name
    const isDeprecated = !!deprecation;
    const constantName = getConstantName(key, isDeprecated);
    const pythonType = getPythonType(type);

    content += `    # Path: model/attributes/${file}\n`;

    content += `    ${constantName}: Literal["${key}"] = "${key}"\n`;
    content += `    """${brief}\n\n`;
    content += `    Type: ${pythonType}\n`;
    content += `    Contains PII: ${pii.key}${pii.reason ? ` - ${pii.reason}` : ''}\n`;
    content += `    Defined in OTEL: ${is_in_otel ? 'Yes' : 'No'}\n`;

    if (has_dynamic_suffix) {
      content += '    Has Dynamic Suffix: true\n';
    }

    if (alias && alias.length > 0) {
      content += `    Aliases: ${alias.join(', ')}\n`;
    }

    if (deprecation) {
      if (deprecation.replacement) {
        content += `    DEPRECATED: Use ${deprecation.replacement} instead${deprecation.reason ? ` - ${deprecation.reason}` : ''}\n`;
      } else {
        content += `    DEPRECATED: No replacement at this time${deprecation.reason ? ` - ${deprecation.reason}` : ''}\n`;
      }
    }

    if (example !== undefined) {
      content += `    Example: ${JSON.stringify(example)}\n`;
    }

    content += '    """\n\n';

    // Collect attribute names for the literal type
    attributeNames.push(constantName);

    // Build type members using ATTRIBUTE_NAMES class attributes for TypedDict
    const typeMember = `    "${key}": ${pythonType}`;

    if (deprecation) {
      deprecatedAttributesTypeMembers += `${typeMember},\n`;
    } else {
      attributesTypeMembers += `${typeMember},\n`;
    }
    fullAttributesTypeMembers += `${typeMember},\n`;

    // Build metadata dictionary entry using hardcoded string keys
    metadataDict += `    "${key}": AttributeMetadata(\n`;
    metadataDict += `        brief=${JSON.stringify(brief)},\n`;
    metadataDict += `        type=${getAttributeTypeEnum(type)},\n`;

    // Build PII info structure
    const piiStatus = pii.key === 'true' ? 'IsPii.TRUE' : pii.key === 'false' ? 'IsPii.FALSE' : 'IsPii.MAYBE';
    metadataDict += '        pii=PiiInfo(\n';
    metadataDict += `            isPii=${piiStatus}`;
    if (pii.reason) {
      metadataDict += `,\n            reason=${JSON.stringify(pii.reason)}`;
    }
    metadataDict += '\n        ),\n';

    metadataDict += `        is_in_otel=${is_in_otel ? 'True' : 'False'},\n`;

    if (has_dynamic_suffix) {
      metadataDict += '        has_dynamic_suffix=True,\n';
    }

    if (example !== undefined) {
      const pythonExample = convertToPythonLiteral(example);
      metadataDict += `        example=${pythonExample},\n`;
    }

    // Build deprecation info structure if present
    if (deprecation) {
      metadataDict += '        deprecation=DeprecationInfo(';
      const deprecationFields: string[] = [];
      if (deprecation.replacement) {
        deprecationFields.push(`\n            replacement=${JSON.stringify(deprecation.replacement)}`);
      }
      if (deprecation.reason) {
        deprecationFields.push(`\n            reason=${JSON.stringify(deprecation.reason)}`);
      }
      if (deprecation._status) {
        const deprecationStatus =
          deprecation._status === 'backfill' ? 'DeprecationStatus.BACKFILL' : 'DeprecationStatus.NORMALIZE';
        deprecationFields.push(`\n            status=${deprecationStatus}`);
      }
      if (deprecationFields.length > 0) {
        metadataDict += deprecationFields.join(',');
        metadataDict += '\n        ),\n';
      } else {
        metadataDict += '),\n';
      }
    }

    if (alias && alias.length > 0) {
      metadataDict += `        aliases=${JSON.stringify(alias)},\n`;
    }

    if (attributeJson.sdks && attributeJson.sdks.length > 0) {
      metadataDict += `        sdks=${JSON.stringify(attributeJson.sdks)},\n`;
    }

    metadataDict += '    ),\n';
  }

  // All attribute constants are now defined in the ATTRIBUTE_NAMES class
  content += '\n';

  // Add metadata dictionary
  content += '_ATTRIBUTE_METADATA: Dict[str, AttributeMetadata] = {\n';
  content += metadataDict;
  content += '}\n\n';
  content += '"""\n';
  content += `A dictionary that maps each attribute's name to its metadata.\n`;
  content +=
    'If a key is not present in this dictionary, it means that attribute is not defined in the Sentry Semantic Conventions.\n';
  content += '"""\n\n';

  // Add TypedDict definitions using hardcoded string keys
  content += 'Attributes = TypedDict("Attributes", {\n';
  content += fullAttributesTypeMembers;
  content += '}, total=False)\n';
  content +=
    '"""TypedDict representing a collection of attributes, including deprecated and non-deprecated ones."""\n\n';

  // Add __all__ list for exports
  content += '__all__ = [\n';
  content += '    "_ATTRIBUTE_METADATA",\n';
  content += '    "Attributes",\n';
  content += '    "ATTRIBUTE_NAMES",\n';
  content += ']\n\n';

  // Write the generated content to the file
  const outputFilePath = path.join(__dirname, '..', 'python', 'src', 'sentry_conventions', 'attributes.py');
  fs.writeFileSync(outputFilePath, content);

  console.log(`Generated Python attributes file at: ${outputFilePath}`);
}

function getPythonType(type: AttributeJson['type']): string {
  switch (type) {
    case 'string':
      return 'str';
    case 'boolean':
      return 'bool';
    case 'integer':
      return 'int';
    case 'double':
      return 'float';
    case 'string[]':
      return 'List[str]';
    case 'boolean[]':
      return 'List[bool]';
    case 'integer[]':
      return 'List[int]';
    case 'double[]':
      return 'List[float]';
    default:
      throw new Error(`Unknown attribute type: ${type}`);
  }
}

function getAttributeTypeEnum(type: AttributeJson['type']): string {
  switch (type) {
    case 'string':
      return 'AttributeType.STRING';
    case 'boolean':
      return 'AttributeType.BOOLEAN';
    case 'integer':
      return 'AttributeType.INTEGER';
    case 'double':
      return 'AttributeType.DOUBLE';
    case 'string[]':
      return 'AttributeType.STRING_ARRAY';
    case 'boolean[]':
      return 'AttributeType.BOOLEAN_ARRAY';
    case 'integer[]':
      return 'AttributeType.INTEGER_ARRAY';
    case 'double[]':
      return 'AttributeType.DOUBLE_ARRAY';
    default:
      throw new Error(`Unknown attribute type: ${type}`);
  }
}

function convertToPythonLiteral(value: AttributeJson['example']): string {
  if (value === null) return 'None';
  if (typeof value === 'boolean') return value ? 'True' : 'False';
  if (typeof value === 'string') return JSON.stringify(value);
  if (typeof value === 'number') return value.toString();
  if (Array.isArray(value)) {
    const items = value.map(convertToPythonLiteral);
    return `[${items.join(', ')}]`;
  }
  return JSON.stringify(value);
}

function generateMetadataTypes(): string {
  return `
export enum AttributeType {
  STRING = "string",
  BOOLEAN = "boolean",
  INTEGER = "integer",
  DOUBLE = "double",
  STRING_ARRAY = "string[]",
  BOOLEAN_ARRAY = "boolean[]",
  INTEGER_ARRAY = "integer[]",
  DOUBLE_ARRAY = "double[]",
}

export enum IsPii {
  TRUE = "true",
  FALSE = "false",
  MAYBE = "maybe",
}

export interface PiiInfo {
  /** Whether the attribute contains PII */
  isPii: IsPii;
  /** Reason why it has PII or not */
  reason?: string;
}

export interface DeprecationInfo {
  /** What this attribute was replaced with */
  replacement?: string;
  /** Reason for deprecation */
  reason?: string;
}

export interface AttributeMetadata {
  /** A description of the attribute */
  brief: string;
  /** The type of the attribute value */
  type: AttributeType;
  /** If an attribute can have PII */
  pii: PiiInfo;
  /** Whether the attribute is defined in OpenTelemetry Semantic Conventions */
  isInOtel: boolean;
  /** If an attribute has a dynamic suffix */
  hasDynamicSuffix?: boolean;
  /** An example value of the attribute */
  example?: AttributeValue;
  /** If an attribute was deprecated, and what it was replaced with */
  deprecation?: DeprecationInfo;
  /** If there are attributes that alias to this attribute */
  aliases?: AttributeName[];
  /** If an attribute is SDK specific, list the SDKs that use this attribute */
  sdks?: string[];
}

`;
}

function generateMetadataDict(attributesDir: string, attributeFiles: string[]): string {
  // First, generate the AttributeName enum
  let attributeNameEnum = 'export enum AttributeName {\n';
  let attributeTypeMap = 'export const ATTRIBUTE_TYPE: Record<AttributeName, AttributeType> = {\n';

  for (const file of attributeFiles) {
    const attributePath = path.join(attributesDir, file);
    const attributeJson = JSON.parse(fs.readFileSync(attributePath, 'utf-8')) as AttributeJson;
    const { key, type } = attributeJson;
    const constantName = getConstantName(key, !!attributeJson.deprecation);

    attributeNameEnum += `  ${constantName} = "${key}",\n`;
    attributeTypeMap += `  [AttributeName.${constantName}]: ${getAttributeTypeEnumJs(type)},\n`;
  }
  attributeNameEnum += '}\n\n';
  attributeTypeMap += '};\n\n';

  let metadataDict = attributeNameEnum + attributeTypeMap;
  metadataDict += 'export const ATTRIBUTE_METADATA: Record<AttributeName, AttributeMetadata> = {\n';

  for (const file of attributeFiles) {
    const attributePath = path.join(attributesDir, file);
    const attributeJson = JSON.parse(fs.readFileSync(attributePath, 'utf-8')) as AttributeJson;
    const { key, brief, type, pii, is_in_otel, example, has_dynamic_suffix, deprecation, alias } = attributeJson;

    const constantName = getConstantName(key, !!deprecation);
    metadataDict += `  [AttributeName.${constantName}]: {\n`;
    metadataDict += `    brief: ${JSON.stringify(brief)},\n`;
    metadataDict += `    type: ${getAttributeTypeEnumJs(type)},\n`;

    // Build PII info structure
    const piiStatus = pii.key === 'true' ? 'IsPii.TRUE' : pii.key === 'false' ? 'IsPii.FALSE' : 'IsPii.MAYBE';
    metadataDict += '    pii: {\n';
    metadataDict += `      isPii: ${piiStatus}`;
    if (pii.reason) {
      metadataDict += `,\n      reason: ${JSON.stringify(pii.reason)}`;
    }
    metadataDict += '\n    },\n';

    metadataDict += `    isInOtel: ${is_in_otel},\n`;

    if (has_dynamic_suffix) {
      metadataDict += '    hasDynamicSuffix: true,\n';
    }

    if (example !== undefined) {
      metadataDict += `    example: ${JSON.stringify(example)},\n`;
    }

    // Build deprecation info structure if present
    if (deprecation) {
      metadataDict += '    deprecation: {';
      const deprecationFields: string[] = [];
      if (deprecation.replacement) {
        deprecationFields.push(`\n      replacement: ${JSON.stringify(deprecation.replacement)}`);
      }
      if (deprecation.reason) {
        deprecationFields.push(`\n      reason: ${JSON.stringify(deprecation.reason)}`);
      }
      if (deprecationFields.length > 0) {
        metadataDict += deprecationFields.join(',');
        metadataDict += '\n    },\n';
      } else {
        metadataDict += '},\n';
      }
    }

    if (alias && alias.length > 0) {
      metadataDict += `    aliases: ${JSON.stringify(alias)},\n`;
    }

    if (attributeJson.sdks && attributeJson.sdks.length > 0) {
      metadataDict += `    sdks: ${JSON.stringify(attributeJson.sdks)},\n`;
    }

    metadataDict += '  },\n';
  }

  metadataDict += '};\n\n';

  return metadataDict;
}

function getAttributeTypeEnumJs(type: AttributeJson['type']): string {
  switch (type) {
    case 'string':
      return 'AttributeType.STRING';
    case 'boolean':
      return 'AttributeType.BOOLEAN';
    case 'integer':
      return 'AttributeType.INTEGER';
    case 'double':
      return 'AttributeType.DOUBLE';
    case 'string[]':
      return 'AttributeType.STRING_ARRAY';
    case 'boolean[]':
      return 'AttributeType.BOOLEAN_ARRAY';
    case 'integer[]':
      return 'AttributeType.INTEGER_ARRAY';
    case 'double[]':
      return 'AttributeType.DOUBLE_ARRAY';
    default:
      throw new Error(`Unknown attribute type: ${type}`);
  }
}
