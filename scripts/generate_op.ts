import * as fs from 'node:fs';
import * as path from 'node:path';

interface OpField {
  name: string;
  description?: string;
}

interface OpCategory {
  file: string;
  name: string;
  description?: string;
  fields: OpField[];
}

export async function generateOps() {
  const opDir = path.join(__dirname, '..', 'model', 'op');

  const opFiles = await fs.promises.readdir(opDir);
  const categories = readCategories(opDir, opFiles);
  const owners = resolveConstantOwners(categories);

  writeToJs(categories, owners);
  writeToRust(categories, owners);
}

function readCategories(opDir: string, opFiles: string[]): OpCategory[] {
  // Sort for deterministic output: the file order decides both the order of the emitted blocks and,
  // for ops defined in multiple categories without a description, which category owns the constant.
  return [...opFiles].sort().map((file) => {
    const opJson = JSON.parse(fs.readFileSync(path.join(opDir, file), 'utf-8'));
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

/** The fields of `category` whose constant is emitted in this category. */
function ownedFields(category: OpCategory, owners: Map<string, string>): OpField[] {
  return category.fields.filter((field) => owners.get(field.name) === category.file);
}

function writeToRust(categories: OpCategory[], owners: Map<string, string>) {
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
      opContent += `pub const ${constantName(field.name)}: &str = "${field.name}";\n\n`;
    }
  }

  // Remove the trailing newline character
  opContent = opContent.trimEnd();

  const opFilePath = path.join(__dirname, '..', 'rust', 'src', 'op.rs');

  fs.writeFileSync(opFilePath, opContent);
}

function writeToJs(categories: OpCategory[], owners: Map<string, string>) {
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
      if (field.description) {
        opContent += '\n/**\n';
        opContent += ` * ${field.description}\n`;
        opContent += ' */\n';
      } else {
        opContent += '\n';
      }
      opContent += `export const ${constantName(field.name)} = '${field.name}';\n`;
    }
  }

  const opFilePath = path.join(__dirname, '..', 'javascript', 'sentry-conventions', 'src', 'op.ts');

  fs.writeFileSync(opFilePath, opContent);
}
