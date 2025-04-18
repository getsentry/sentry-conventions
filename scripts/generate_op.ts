import * as fs from 'node:fs';
import * as path from 'node:path';

export async function generateOps() {
  const opDir = path.join(__dirname, '..', 'model', 'op');

  const opFiles = await fs.promises.readdir(opDir);
  writeToJs(opDir, opFiles);
  writeToRust(opDir, opFiles);
}

function writeToRust(opDir: string, opFiles: string[]) {
  let opContent = '// This is an auto-generated file. Do not edit!\n\n';

  for (const file of opFiles) {
    const opPath = path.join(opDir, file);
    const opJson = JSON.parse(fs.readFileSync(opPath, 'utf-8'));

    const { name, description, fields } = opJson;

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
      opContent += `pub const ${name.toUpperCase().replaceAll('.', '_')}_${field.name
        .toUpperCase()
        .replaceAll('.', '_')}_SPAN_OP: &str = "${field.name}";\n\n`;
    }
  }

  // Remove the trailing newline character
  opContent = opContent.trimEnd();

  const opFilePath = path.join(__dirname, '..', 'rust', 'src', 'op.rs');

  fs.writeFileSync(opFilePath, opContent);
}

function writeToJs(opDir: string, opFiles: string[]) {
  let opContent = '// This is an auto-generated file. Do not edit!\n';

  for (const file of opFiles) {
    const opPath = path.join(opDir, file);
    const opJson = JSON.parse(fs.readFileSync(opPath, 'utf-8'));

    const { name, description, fields } = opJson;

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
      opContent += `export const ${name.toUpperCase().replaceAll('.', '_')}_${field.name
        .toUpperCase()
        .replaceAll('.', '_')}_SPAN_OP = '${field.name}';\n`;
    }
  }

  const opFilePath = path.join(__dirname, '..', 'javascript', 'sentry-conventions', 'src', 'op.ts');

  fs.writeFileSync(opFilePath, opContent);
}
