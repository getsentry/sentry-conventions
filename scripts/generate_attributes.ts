import * as fs from 'node:fs';
import * as path from 'node:path';
import type { AttributeJson } from './types';

type AttributeDefinition = {
  key: string;
  attributeJson: AttributeJson;
};

export function deriveAttributeKeyChains(attributes: AttributeDefinition[]): Map<string, string[]> {
  const attributesByKey = new Map(attributes.map((attribute) => [attribute.key, attribute]));
  const predecessorsByKey = new Map<string, string[]>();

  for (const { key, attributeJson } of attributes) {
    const replacement = attributeJson.deprecation?.replacement;
    if (!replacement) {
      continue;
    }

    const replacementAttribute = attributesByKey.get(replacement);
    if (!replacementAttribute) {
      throw new Error(`Replacement target "${replacement}" for deprecated attribute "${key}" does not exist`);
    }
    if (replacementAttribute.attributeJson.deprecation) {
      throw new Error(`Replacement target "${replacement}" for deprecated attribute "${key}" must not be deprecated`);
    }

    const predecessors = predecessorsByKey.get(replacement) ?? [];
    predecessors.push(key);
    predecessorsByKey.set(replacement, predecessors);
  }

  const chains = new Map<string, string[]>();
  for (const { key, attributeJson } of attributes) {
    const replacement = attributeJson.deprecation?.replacement;
    const stableKey = replacement ?? key;
    const predecessors = predecessorsByKey.get(stableKey);
    const chain = predecessors ? [stableKey, ...predecessors.toSorted()] : [key];
    chains.set(key, chain);
  }

  return chains;
}

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

  // Reset memoization for fresh calculation
  constantNameMemo.clear();
  constantNameInnerMemo.clear();
  usedConstantNames.clear();

  // First pass: collect all attributes
  const allAttributesPartial: Array<{
    file: string;
    key: string;
    attributeJson: AttributeJson;
    isDeprecated: boolean;
  }> = [];

  for (const file of attributeFiles) {
    const attributePath = path.join(attributesDir, file);
    const attributeJson = JSON.parse(fs.readFileSync(attributePath, 'utf-8')) as AttributeJson;
    const isDeprecated = !!attributeJson.deprecation;

    allAttributesPartial.push({
      file,
      key: attributeJson.key,
      attributeJson,
      isDeprecated,
    });
  }

  // Sort by what the constant name would be, but put non-deprecated attributes before deprecated ones
  allAttributesPartial.sort((a, b) => {
    const aName = getConstantNameInner(a.key);
    const bName = getConstantNameInner(b.key);
    if (aName < bName) {
      return -1;
    }
    if (aName > bName) {
      return 1;
    }
    if (a.isDeprecated === b.isDeprecated) {
      return 0;
    }
    if (a.isDeprecated) {
      return 1;
    }
    return -1;
  });

  // Second pass: compute constant names
  const allAttributes: Array<{
    file: string;
    key: string;
    constantName: string;
    attributeJson: AttributeJson;
    isDeprecated: boolean;
  }> = [];

  for (const { file, key, attributeJson, isDeprecated } of allAttributesPartial) {
    const constantName = getConstantName(key, isDeprecated);

    allAttributes.push({
      file,
      key,
      constantName,
      attributeJson,
      isDeprecated,
    });
  }

  const attributeKeyChains = deriveAttributeKeyChains(allAttributes);
  let attributeTypeMap = '';
  let individualConstants = '';

  // Generate individual attribute constants with documentation AND build the explicit type map
  for (const { file, key, constantName, attributeJson, _isDeprecated } of allAttributes) {
    const { brief, type, apply_scrubbing, is_in_otel, example, has_dynamic_suffix, deprecation, alias } = attributeJson;
    const visibility = getVisibility(attributeJson);

    const tsType = getTsType(type);
    attributeTypeMap += `\n  [${constantName}]?: ${constantName}_TYPE;`;

    // Generate individual constant with documentation
    individualConstants += `// Path: model/attributes/${file}\n\n`;
    individualConstants += '/**\n';
    individualConstants += ` * ${brief} \`${key}\`\n`;
    individualConstants += ' *\n';
    individualConstants += ` * Attribute Value Type: \`${tsType}\` {@link ${constantName}_TYPE}\n`;
    individualConstants += ' *\n';

    // Scrubbing info
    individualConstants += ` * Apply Scrubbing: ${apply_scrubbing.key}`;
    if (apply_scrubbing.reason) {
      individualConstants += ` - ${apply_scrubbing.reason}`;
    }
    individualConstants += '\n';
    individualConstants += ' *\n';
    individualConstants += ` * Attribute defined in OTEL: ${is_in_otel ? 'Yes' : 'No'}\n`;
    individualConstants += ` * Visibility: ${visibility}\n`;

    if (has_dynamic_suffix) {
      individualConstants += ' *\n';
      individualConstants += ' * Has Dynamic Suffix: true\n';
    }

    // Aliases
    if (alias && alias.length > 0) {
      individualConstants += ' *\n';
      const aliasLinks = alias
        .map((aliasKey) => {
          // Find the constant name for this alias from our processed attributes
          const aliasAttr = allAttributes.find((attr) => attr.key === aliasKey);
          const aliasConstantName = aliasAttr ? aliasAttr.constantName : getConstantName(aliasKey, false);
          return `{@link ${aliasConstantName}} \`${aliasKey}\``;
        })
        .join(', ');
      individualConstants += ` * Aliases: ${aliasLinks}\n`;
    }

    // Deprecation
    if (deprecation) {
      individualConstants += formatDeprecationJsdoc(deprecation, allAttributes, false);
    }

    // Example
    if (example !== undefined) {
      if (!deprecation) {
        individualConstants += ' *\n';
      }
      individualConstants += ` * @example ${JSON.stringify(example)}\n`;
    }

    individualConstants += ' */\n';
    individualConstants += `export const ${constantName} = '${key}';\n\n`;
    individualConstants += `export const ${constantName}_KEYS = ${JSON.stringify(attributeKeyChains.get(key))} as const;\n\n`;

    if (has_dynamic_suffix) {
      const keyBase = getDynamicSuffixBase(key);
      const constantNameBase = `${constantName}_BASE`;
      individualConstants += '/**\n';
      individualConstants += ` * Base key for {@link ${constantName}}. Use with a dynamic suffix, e.g. \`\${${constantNameBase}}.\${key}\`.\n`;
      if (deprecation) {
        individualConstants += formatDeprecationJsdoc(deprecation, allAttributes, true);
      }
      individualConstants += ' */\n';
      individualConstants += `export const ${constantNameBase} = '${keyBase}';\n\n`;
    }

    // Generate type constant
    individualConstants += '/**\n';
    individualConstants += ` * Type for {@link ${constantName}} ${key}\n`;
    individualConstants += ' */\n';
    individualConstants += `export type ${constantName}_TYPE = ${tsType};\n\n`;
  }

  // Add individual constants first
  attributesContent += individualConstants;

  // Generate metadata types and interfaces
  attributesContent += generateMetadataTypes();

  // Generate metadata dictionary
  attributesContent += generateMetadataDict(attributesDir, attributeFiles, allAttributes);

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
const constantNameInnerMemo = new Map<string, string>();
const usedConstantNames = new Set<string>();

function getDynamicSuffixBase(key: string): string {
  const suffix = '.<key>';
  if (!key.endsWith(suffix)) {
    throw new Error(`Expected dynamic suffix attribute key to end with "${suffix}", got "${key}"`);
  }
  return key.slice(0, -suffix.length);
}

function formatDeprecationJsdoc(
  deprecation: NonNullable<AttributeJson['deprecation']>,
  allAttributes: Array<{ key: string; attributeJson: AttributeJson }>,
  isBase: boolean,
): string {
  let replacement = '';
  if (deprecation.replacement) {
    const replacementAttr = allAttributes.find((attr) => attr.key === deprecation.replacement);
    const replacementConstantName = getConstantName(deprecation.replacement, false);
    const replacementHasDynamicSuffix = !!replacementAttr?.attributeJson.has_dynamic_suffix;
    const replacementLink =
      isBase && replacementHasDynamicSuffix ? `${replacementConstantName}_BASE` : replacementConstantName;
    const replacementDisplay =
      isBase && replacementHasDynamicSuffix ? getDynamicSuffixBase(deprecation.replacement) : deprecation.replacement;
    replacement = `Use {@link ${replacementLink}} (${replacementDisplay}) instead`;
  }
  return ` *\n * @deprecated ${replacement}${deprecation.reason ? ` - ${deprecation.reason}` : ''}\n`;
}

// Computes a constant name for an attribute without regard for deprecation status.
function getConstantNameInner(key: string): string {
  if (constantNameInnerMemo.has(key)) {
    return constantNameInnerMemo.get(key) as string;
  }

  const constantName = key
    .toUpperCase()
    .replaceAll('.', '_')
    .replaceAll('-', '_')
    .replaceAll('<', '__') // Replace opening angle bracket with underscore
    .replaceAll('>', '') // Remove closing angle bracket
    .replace(/__+/g, '_'); // Replace multiple consecutive underscores with a single one

  constantNameInnerMemo.set(key, constantName);
  return constantName;
}

// Computes a constant name for an attribute, taking deprecation status into account.
function getConstantName(key: string, isDeprecated: boolean): string {
  if (constantNameMemo.has(key)) {
    return constantNameMemo.get(key) as string;
  }

  let constantName = getConstantNameInner(key);

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

function getVisibility(attributeJson: AttributeJson): 'public' | 'internal' {
  return attributeJson.visibility ?? 'public';
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
    case 'any':
      return 'unknown';
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
  content +=
    'from typing import Dict, List, Literal, Mapping, Optional, Sequence, Tuple, TypedDict, TypeVar, Union\n\n';

  content += 'AttributeValue = Union[str, int, float, bool, List[str], List[int], List[float], List[bool]]\n\n';
  content += 'T = TypeVar("T")\n\n';
  content += 'def get_attribute_value(attributes: Mapping[str, T], keys: Sequence[str]) -> Optional[T]:\n';
  content += '    """Return the value for the first attribute key present in attributes."""\n';
  content += '    for key in keys:\n';
  content += '        if key in attributes:\n';
  content += '            return attributes[key]\n';
  content += '    return None\n\n';

  content += 'class AttributeType(Enum):\n';
  content += '    STRING = "string"\n';
  content += '    BOOLEAN = "boolean"\n';
  content += '    INTEGER = "integer"\n';
  content += '    DOUBLE = "double"\n';
  content += '    STRING_ARRAY = "string[]"\n';
  content += '    BOOLEAN_ARRAY = "boolean[]"\n';
  content += '    INTEGER_ARRAY = "integer[]"\n';
  content += '    DOUBLE_ARRAY = "double[]"\n';
  content += '    ANY = "any"\n\n';

  content += 'class ApplyScrubbing(Enum):\n';
  content += '    AUTO = "auto"\n';
  content += '    MANUAL = "manual"\n';
  content += '    NEVER = "never"\n\n';

  content += 'class Visibility(Enum):\n';
  content += '    PUBLIC = "public"\n';
  content += '    INTERNAL = "internal"\n\n';

  content += '@dataclass\n';
  content += 'class ApplyScrubbingInfo:\n';
  content += `    """Holds information about how PII scrubbing should be applied to an attribute's values."""\n`;
  content += '    key: ApplyScrubbing\n';
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
  content += 'class ChangelogEntry:\n';
  content += '    """A changelog entry tracking a change to an attribute."""\n\n';
  content += '    version: str\n';
  content += '    """The sentry-conventions release version"""\n';
  content += '    \n';
  content += '    prs: Optional[List[int]] = None\n';
  content += '    """GitHub PR numbers"""\n';
  content += '    \n';
  content += '    description: Optional[str] = None\n';
  content += '    """Optional description of what changed"""\n\n';

  content += '@dataclass\n';
  content += 'class AttributeMetadata:\n';
  content += '    """The metadata for an attribute."""\n\n';
  content += '    brief: str\n';
  content += '    """A description of the attribute"""\n';
  content += '    \n';
  content += '    type: AttributeType\n';
  content += '    """The type of the attribute value"""\n';
  content += '    \n';
  content += '    apply_scrubbing: ApplyScrubbingInfo\n';
  content +=
    '    """How PII scrubbing should be applied to the attribute value. Is either auto, manual or never. Optionally include a reason about why this mode applies"""\n';
  content += '    \n';
  content += '    is_in_otel: bool\n';
  content += '    """Whether the attribute is defined in OpenTelemetry Semantic Conventions"""\n';
  content += '    \n';
  content += '    visibility: Visibility\n';
  content += '    """Whether the attribute is public or internal to Sentry"""\n';
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
  content += '    changelog: Optional[List[ChangelogEntry]] = None\n';
  content += '    """Changelog entries tracking how this attribute has changed across versions"""\n';
  content += '    \n';
  content += '    additional_context: Optional[List[str]] = None\n';
  content +=
    '    """A list of freeform notes providing additional context about how this attribute behaves, common pitfalls, or query-time nuances"""\n\n';

  let attributesTypeMembers = '';
  let deprecatedAttributesTypeMembers = '';
  let fullAttributesTypeMembers = '';
  let metadataDict = '';
  const attributeNames: string[] = [];
  const deprecatedAttributes: { name: string; replacement?: string }[] = [];
  const allAttributes: AttributeDefinition[] = attributeFiles.map((file) => {
    const attributePath = path.join(attributesDir, file);
    const attributeJson = JSON.parse(fs.readFileSync(attributePath, 'utf-8')) as AttributeJson;
    return {
      key: attributeJson.key,
      attributeJson,
    };
  });
  const attributeKeyChains = deriveAttributeKeyChains(allAttributes);

  // First pass: collect deprecated attributes
  for (const { key, attributeJson } of allAttributes) {
    if (attributeJson.deprecation) {
      const constantName = getConstantName(key, true);
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

    const { key, brief, type, apply_scrubbing, is_in_otel, example, has_dynamic_suffix, deprecation, alias } =
      attributeJson;
    const visibility = getVisibility(attributeJson);

    // Convert attribute key to a valid Python constant name
    const isDeprecated = !!deprecation;
    const constantName = getConstantName(key, isDeprecated);
    const pythonType = getPythonType(type);

    content += `    # Path: model/attributes/${file}\n`;

    content += `    ${constantName}: Literal["${key}"] = "${key}"\n`;
    content += `    """${brief}\n\n`;
    content += `    Type: ${pythonType}\n`;
    content += `    Apply Scrubbing: ${apply_scrubbing.key}${apply_scrubbing.reason ? ` - ${apply_scrubbing.reason}` : ''}\n`;
    content += `    Defined in OTEL: ${is_in_otel ? 'Yes' : 'No'}\n`;
    content += `    Visibility: ${visibility}\n`;

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
    const keyChain = attributeKeyChains.get(key);
    if (!keyChain) {
      throw new Error(`Attribute key chain for "${key}" does not exist`);
    }
    content += `    ${constantName}_KEYS: Tuple[str, ...] = (${keyChain.map((attributeKey) => JSON.stringify(attributeKey)).join(', ')},)\n\n`;

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
    metadataDict += `        type=AttributeType.${getAttributeTypeEnum(type)},\n`;

    // Build scrubbing info structure
    const scrubbingStatus =
      apply_scrubbing.key === 'auto'
        ? 'ApplyScrubbing.AUTO'
        : apply_scrubbing.key === 'never'
          ? 'ApplyScrubbing.NEVER'
          : 'ApplyScrubbing.MANUAL';
    metadataDict += '        apply_scrubbing=ApplyScrubbingInfo(\n';
    metadataDict += `            key=${scrubbingStatus}`;
    if (apply_scrubbing.reason) {
      metadataDict += `,\n            reason=${JSON.stringify(apply_scrubbing.reason)}`;
    }
    metadataDict += '\n        ),\n';

    metadataDict += `        is_in_otel=${is_in_otel ? 'True' : 'False'},\n`;
    metadataDict += `        visibility=Visibility.${visibility === 'public' ? 'PUBLIC' : 'INTERNAL'},\n`;

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

    if (attributeJson.changelog && attributeJson.changelog.length > 0) {
      metadataDict += '        changelog=[\n';
      for (const entry of attributeJson.changelog) {
        metadataDict += '            ChangelogEntry(';
        metadataDict += `version=${JSON.stringify(entry.version)}`;
        if (entry.prs && entry.prs.length > 0) {
          metadataDict += `, prs=[${entry.prs.join(', ')}]`;
        }
        if (entry.description) {
          metadataDict += `, description=${JSON.stringify(entry.description)}`;
        }
        metadataDict += '),\n';
      }
      metadataDict += '        ],\n';
    }

    if (attributeJson.additional_context && attributeJson.additional_context.length > 0) {
      metadataDict += `        additional_context=${JSON.stringify(attributeJson.additional_context)},\n`;
    }

    metadataDict += '    ),\n';
  }

  // All attribute constants are now defined in the ATTRIBUTE_NAMES class
  content += '\n';

  // Add metadata dictionary
  content += 'ATTRIBUTE_METADATA: Dict[str, AttributeMetadata] = {\n';
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
  content += '    "ATTRIBUTE_METADATA",\n';
  content += '    "Attributes",\n';
  content += '    "ATTRIBUTE_NAMES",\n';
  content += '    "get_attribute_value",\n';
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
    case 'any':
      return 'object';
    default:
      throw new Error(`Unknown attribute type: ${type}`);
  }
}

function getAttributeTypeEnum(type: AttributeJson['type']): string {
  switch (type) {
    case 'string':
      return 'STRING';
    case 'boolean':
      return 'BOOLEAN';
    case 'integer':
      return 'INTEGER';
    case 'double':
      return 'DOUBLE';
    case 'string[]':
      return 'STRING_ARRAY';
    case 'boolean[]':
      return 'BOOLEAN_ARRAY';
    case 'integer[]':
      return 'INTEGER_ARRAY';
    case 'double[]':
      return 'DOUBLE_ARRAY';
    case 'any':
      return 'ANY';
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
export type AttributeType =
  | 'string'
  | 'boolean'
  | 'integer'
  | 'double'
  | 'string[]'
  | 'boolean[]'
  | 'integer[]'
  | 'double[]'
  | 'any';

export type ApplyScrubbing =
  | 'auto'
  | 'manual'
  | 'never';

export type AttributeVisibility =
  | 'public'
  | 'internal';

export interface ApplyScrubbingInfo {
  /** How PII scrubbing should be applied to the attribute value */
  key: ApplyScrubbing;
  /** Reason why this scrubbing mode applies */
  reason?: string;
}

export interface DeprecationInfo {
  /** What this attribute was replaced with */
  replacement?: string;
  /** Reason for deprecation */
  reason?: string;
}

export interface ChangelogEntry {
  /** The sentry-conventions release version */
  version: string;
  /** GitHub PR numbers */
  prs?: number[];
  /** Optional description of what changed */
  description?: string;
}

export interface AttributeMetadata {
  /** A description of the attribute */
  brief: string;
  /** The type of the attribute value */
  type: AttributeType;
  /** How PII scrubbing should be applied to the attribute value */
  applyScrubbing: ApplyScrubbingInfo;
  /** Whether the attribute is defined in OpenTelemetry Semantic Conventions */
  isInOtel: boolean;
  /** Whether the attribute is public or internal to Sentry */
  visibility: AttributeVisibility;
  /** If an attribute has a dynamic suffix */
  hasDynamicSuffix?: boolean;
  /** An example value of the attribute */
  example?: AttributeValue;
  /** If an attribute was deprecated, and what it was replaced with */
  deprecation?: DeprecationInfo;
  /** If there are attributes that alias to this attribute */
  aliases?: AttributeName[];
  /** Changelog entries tracking how this attribute has changed across versions */
  changelog?: ChangelogEntry[];
  /** A list of freeform notes providing additional context about how this attribute behaves, common pitfalls, or query-time nuances */
  additionalContext?: string[];
}

`;
}

function generateMetadataDict(
  attributesDir: string,
  attributeFiles: string[],
  allAttributes: Array<{
    file: string;
    key: string;
    constantName: string;
    attributeJson: AttributeJson;
    isDeprecated: boolean;
  }>,
): string {
  // Use string literal keys so bundlers can tree-shake unused attribute constants.
  let attributeTypeMap = 'export const ATTRIBUTE_TYPE: Record<string, AttributeType> = {\n';

  for (const { key, attributeJson } of allAttributes) {
    const { type } = attributeJson;

    attributeTypeMap += `  ${JSON.stringify(key)}: '${type}',\n`;
  }

  attributeTypeMap += '};\n\n';

  // Generate type for the attribute names from the individual constants
  const allConstantNames = allAttributes.map((attr) => attr.constantName);
  const attributeNameType = `export type AttributeName = ${allConstantNames.map((name) => `typeof ${name}`).join(' | ')};\n\n`;

  let metadataDict = attributeTypeMap + attributeNameType;
  metadataDict += 'export const ATTRIBUTE_METADATA: Record<AttributeName, AttributeMetadata> = {\n';

  for (const { key, attributeJson } of allAttributes) {
    const { brief, type, apply_scrubbing, is_in_otel, example, has_dynamic_suffix, deprecation, alias } = attributeJson;
    const visibility = getVisibility(attributeJson);

    metadataDict += `  ${JSON.stringify(key)}: {\n`;
    metadataDict += `    brief: ${JSON.stringify(brief)},\n`;
    metadataDict += `    type: '${type}',\n`;

    // Build scrubbing info structure
    const scrubbingStatus =
      apply_scrubbing.key === 'auto' ? "'auto'" : apply_scrubbing.key === 'never' ? "'never'" : "'manual'";
    metadataDict += '    applyScrubbing: {\n';
    metadataDict += `      key: ${scrubbingStatus}`;
    if (apply_scrubbing.reason) {
      metadataDict += `,\n      reason: ${JSON.stringify(apply_scrubbing.reason)}`;
    }
    metadataDict += '\n    },\n';

    metadataDict += `    isInOtel: ${is_in_otel},\n`;
    metadataDict += `    visibility: '${visibility}',\n`;

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
      const stringAliases = alias
        .map((aliasKey) => {
          if (!allAttributes.some((attr) => attr.key === aliasKey)) {
            throw new Error(`Alias with key ${aliasKey} not found in allAttributes`);
          }
          return JSON.stringify(aliasKey);
        })
        .join(', ');
      metadataDict += `    aliases: [${stringAliases}],\n`;
    }

    if (attributeJson.changelog && attributeJson.changelog.length > 0) {
      metadataDict += '    changelog: [\n';
      for (const entry of attributeJson.changelog) {
        metadataDict += '      {';
        metadataDict += ` version: ${JSON.stringify(entry.version)}`;
        if (entry.prs && entry.prs.length > 0) {
          metadataDict += `, prs: [${entry.prs.join(', ')}]`;
        }
        if (entry.description) {
          metadataDict += `, description: ${JSON.stringify(entry.description)}`;
        }
        metadataDict += ' },\n';
      }
      metadataDict += '    ],\n';
    }

    if (attributeJson.additional_context && attributeJson.additional_context.length > 0) {
      metadataDict += `    additionalContext: ${JSON.stringify(attributeJson.additional_context)},\n`;
    }

    metadataDict += '  },\n';
  }

  metadataDict += '};\n\n';

  return metadataDict;
}
