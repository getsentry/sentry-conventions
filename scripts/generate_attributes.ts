import * as fs from 'node:fs';
import * as path from 'node:path';

interface AttributeJson {
  key: string;
  brief: string;
  has_dynamic_suffix?: boolean;
  type: 'string' | 'boolean' | 'integer' | 'double' | 'string[]' | 'boolean[]' | 'integer[]' | 'double[]';
  pii: {
    key: 'true' | 'maybe' | 'false';
    reason?: string;
  };
  is_in_otel: boolean;
  example?: string | boolean | number | string[] | boolean[] | number[];
  deprecation?: {
    replacement: string;
    reason?: string;
  };
  alias?: string[];
  sdks?: string[];
}

export async function generateAttributes() {
  const attributesDir = path.join(__dirname, '..', 'model', 'attributes');

  // Get all JSON files recursively
  const attributeFiles = await getAllJsonFiles(attributesDir);

  // Generate and write JavaScript code
  writeToJs(attributesDir, attributeFiles);
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
  let fullAttributeTypeMap = '';

  for (const file of attributeFiles) {
    const attributePath = path.join(attributesDir, file);
    const attributeJson = JSON.parse(fs.readFileSync(attributePath, 'utf-8')) as AttributeJson;

    const { key, brief, type, pii, is_in_otel, example, has_dynamic_suffix, deprecation, alias } = attributeJson;

    // Convert attribute key to a valid JavaScript constant name
    const constantName = getConstantName(key);
    const typeConstantName = `${constantName}_TYPE`;

    attributesContent += `// Path: model/attributes/${file}\n\n`;

    attributesContent += '/**\n';
    attributesContent += ` * ${brief} \`${key}\`\n`;

    attributesContent += ' *\n';

    // Add type information for the attribute
    const tsType = getTsType(type);

    // Add type information
    attributesContent += ` * Attribute Value Type: \`${tsType}\` {@link ${typeConstantName}}\n`;

    attributesContent += ' *\n';

    // Add PII information
    attributesContent += ` * Contains PII: ${pii.key}${pii.reason ? ` - ${pii.reason}` : ''}\n`;

    attributesContent += ' *\n';

    // Add OTEL information
    attributesContent += ` * Attribute defined in OTEL: ${is_in_otel ? 'Yes' : 'No'}\n`;

    // Add has_dynamic_suffix if present
    if (has_dynamic_suffix) {
      attributesContent += ' *\n';

      attributesContent += ' * Has Dynamic Suffix: true\n';
    }

    // Add aliases if present
    if (alias && alias.length > 0) {
      attributesContent += ' *\n';

      attributesContent += ` * Aliases: ${alias.map((alias) => `{@link ${getConstantName(alias)}} \`${alias}\``).join(', ')}\n`;
    }

    attributesContent += ' *\n';

    // Add deprecation info if present
    if (deprecation) {
      attributesContent += ` * @deprecated Use {@link ${getConstantName(deprecation.replacement)}} (${deprecation.replacement}) instead${deprecation.reason ? ` - ${deprecation.reason}` : ''}\n`;
      fullAttributeTypeMap += `\n  [${constantName}]?: ${typeConstantName};`;
    } else {
      fullAttributeTypeMap += `\n  [${constantName}]?: ${typeConstantName};`;
      attributeTypeMap += `\n  [${constantName}]?: ${typeConstantName};`;
    }

    // Add example if present
    if (example !== undefined) {
      attributesContent += ` * @example ${JSON.stringify(example)}\n`;
    }

    attributesContent += ' */\n';

    attributesContent += `export const ${constantName} = '${key}';\n\n`;

    attributesContent += '/**\n';
    attributesContent += ` * Type for {@link ${constantName}} ${key}\n`;
    attributesContent += ' */\n';

    attributesContent += `export type ${constantName}_TYPE = ${tsType};\n\n`;
  }

  attributesContent +=
    'export type AttributeValue = string | number | boolean | Array<string> | Array<number> | Array<boolean>;\n\n';

  attributesContent += `export type Attributes = {${attributeTypeMap}
} & Record<string, AttributeValue | undefined>;\n\n`;

  attributesContent += `export type FullAttributes = {${fullAttributeTypeMap}
} & Record<string, AttributeValue | undefined>;\n`;

  // Write the generated content to the file
  const outputFilePath = path.join(__dirname, '..', 'javascript', 'sentry-conventions', 'src', 'attributes.ts');
  fs.writeFileSync(outputFilePath, attributesContent);

  console.log(`Generated attributes file at: ${outputFilePath}`);
}

const constantNameMemo = new Map<string, string>();
function getConstantName(key: string): string {
  if (constantNameMemo.has(key)) {
    return constantNameMemo.get(key) as string;
  }

  const constantName = key
    .toUpperCase()
    .replaceAll('.', '_')
    .replaceAll('-', '_')
    .replaceAll('<', '__') // Replace opening angle bracket with underscore
    .replaceAll('>', '') // Remove closing angle bracket
    .replace(/__+/g, '_'); // Replace multiple consecutive underscores with a single one

  constantNameMemo.set(key, constantName);
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
