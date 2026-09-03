import * as fs from 'node:fs';
import * as path from 'node:path';
import type { OpFieldJson, OpJson } from './types';

interface GenerateOpsOptions {
  opDir: string;
  jsOutputFilePath: string;
  rustOutputFilePath: string;
}

interface OpCategory extends OpJson {
  file: string;
}

type OpDeprecation = NonNullable<OpFieldJson['deprecation']>;

export async function generateOps(options?: Partial<GenerateOpsOptions>) {
  const repositoryRoot = path.join(__dirname, '..');
  const opDir = options?.opDir ?? path.join(repositoryRoot, 'model', 'op');
  const jsOutputFilePath =
    options?.jsOutputFilePath ?? path.join(repositoryRoot, 'javascript', 'sentry-conventions', 'src', 'op.ts');
  const rustOutputFilePath = options?.rustOutputFilePath ?? path.join(repositoryRoot, 'rust', 'src', 'op.rs');

  const opFiles = await fs.promises.readdir(opDir);
  const categories = readCategories(opDir, opFiles);
  const owners = resolveConstantOwners(categories);
  const deprecations = resolveDeprecations(categories);

  writeToJs(categories, owners, deprecations, jsOutputFilePath);
  writeToRust(categories, owners, deprecations, rustOutputFilePath);
}

function readCategories(opDir: string, opFiles: string[]): OpCategory[] {
  // Sort for deterministic output: the file order decides both the order of the emitted blocks and,
  // for ops defined in multiple categories without a description, which category owns the constant.
  return [...opFiles].sort().map((file) => {
    const opJson = JSON.parse(fs.readFileSync(path.join(opDir, file), 'utf-8')) as OpJson;
    return { file, name: opJson.name, description: opJson.description, fields: opJson.fields };
  });
}

function constantName(fieldName: string): string {
  return fieldName.toUpperCase().replaceAll('.', '_');
}

/**
 * Constant names don't include the op's category, so the same op defined in multiple categories
 * (e.g. `http` in `faas`, `mobile` and `web_server`) would yield duplicate constants. Emit each op
 * exactly once, in the category that documents it, falling back to the first category defining it.
 *
 * Returns a map of op name -> file that owns its constant.
 */
function resolveConstantOwners(categories: OpCategory[]): Map<string, string> {
  const owners = new Map<string, { file: string; described: boolean }>();

  for (const category of categories) {
    for (const field of category.fields) {
      const owner = owners.get(field.name);
      if (!owner || (!owner.described && !!field.description)) {
        owners.set(field.name, { file: category.file, described: !!field.description });
      }
    }
  }

  return new Map([...owners].map(([name, { file }]) => [name, file]));
}

/**
 * An op defined in multiple categories only yields one constant, so its deprecation is looked up by
 * op name rather than per definition. Every definition of an op must declare the same deprecation
 * (enforced by the test suite), which makes the first one found authoritative.
 *
 * Returns a map of op name -> deprecation, for deprecated ops only.
 */
function resolveDeprecations(categories: OpCategory[]): Map<string, OpDeprecation> {
  const deprecations = new Map<string, OpDeprecation>();

  for (const category of categories) {
    for (const field of category.fields) {
      if (field.deprecation && !deprecations.has(field.name)) {
        deprecations.set(field.name, field.deprecation);
      }
    }
  }

  return deprecations;
}

/** The fields of `category` whose constant is emitted in this category. */
function ownedFields(category: OpCategory, owners: Map<string, string>): OpFieldJson[] {
  return category.fields.filter((field) => owners.get(field.name) === category.file);
}

/** The `Use X instead - reason` part of a deprecation notice, with the replacement constant linked as `link`. */
function deprecationNote(deprecation: OpDeprecation, link: (replacement: string) => string): string {
  const parts: string[] = [];
  if (deprecation.replacement) {
    parts.push(`Use ${link(deprecation.replacement)} (${deprecation.replacement}) instead`);
  }
  if (deprecation.reason) {
    parts.push(deprecation.reason);
  }
  return parts.join(' - ');
}

function writeToRust(
  categories: OpCategory[],
  owners: Map<string, string>,
  deprecations: Map<string, OpDeprecation>,
  opFilePath: string,
) {
  let opContent = '// This is an auto-generated file. Do not edit!\n\n';

  for (const category of categories) {
    const fields = ownedFields(category, owners);
    if (fields.length === 0) {
      continue;
    }

    const { file, name, description } = category;

    opContent += `// Path: model/op/${file}\n// Name: ${name}\n\n`;
    if (description) {
      opContent += `// Description: ${description}\n`;
    }

    for (const field of fields) {
      if (field.description) {
        opContent += '/// ';
        opContent += field.description.split('\n').join('\n/// ');
        opContent += '\n';
      }
      const deprecation = deprecations.get(field.name);
      if (deprecation) {
        const note = deprecationNote(deprecation, (replacement) => `\`${constantName(replacement)}\``);
        opContent += note ? `#[deprecated(note = "${escapeRustString(note)}")]\n` : '#[deprecated]\n';
      }
      opContent += `pub const ${constantName(field.name)}: &str = "${field.name}";\n\n`;
    }
  }

  // Remove the trailing newline character
  opContent = opContent.trimEnd();

  fs.writeFileSync(opFilePath, opContent);
}

function escapeRustString(value: string): string {
  return value.replaceAll('\\', '\\\\').replaceAll('"', '\\"');
}

function writeToJs(
  categories: OpCategory[],
  owners: Map<string, string>,
  deprecations: Map<string, OpDeprecation>,
  opFilePath: string,
) {
  let opContent = '// This is an auto-generated file. Do not edit!\n';

  for (const category of categories) {
    const fields = ownedFields(category, owners);
    if (fields.length === 0) {
      continue;
    }

    const { file, name, description } = category;

    opContent += `\n// Path: model/op/${file}\n// Name: ${name}\n`;
    if (description) {
      opContent += `\n// Description: ${description}\n`;
    }

    for (const field of fields) {
      const deprecation = deprecations.get(field.name);
      if (field.description || deprecation) {
        opContent += '\n/**\n';
        if (field.description) {
          opContent += ` * ${field.description}\n`;
        }
        if (deprecation) {
          if (field.description) {
            opContent += ' *\n';
          }
          const note = deprecationNote(deprecation, (replacement) => `{@link ${constantName(replacement)}}`);
          opContent += ` * @deprecated${note ? ` ${note}` : ''}\n`;
        }
        opContent += ' */\n';
      } else {
        opContent += '\n';
      }
      opContent += `export const ${constantName(field.name)} = '${field.name}';\n`;
    }
  }

  fs.writeFileSync(opFilePath, opContent);
}
