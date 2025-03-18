import * as fs from 'node:fs';
import * as path from 'node:path';

export async function generateAttributes() {
  const attributesDir = path.join(__dirname, '..', 'model', 'attributes');
  
  // Get all JSON files recursively
  const attributeFiles = await getAllJsonFiles(attributesDir);
  
  // Generate and write JavaScript code
  writeToJs(attributesDir, attributeFiles);
}

async function getAllJsonFiles(dir: string): Promise<string[]> {
  const allFiles: string[] = [];
  
  async function scanDir(currentDir: string, relativePath: string = '') {
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
  
  for (const file of attributeFiles) {
    const attributePath = path.join(attributesDir, file);
    const attributeJson = JSON.parse(fs.readFileSync(attributePath, 'utf-8'));
    
    const { 
      key, 
      brief, 
      type, 
      pii, 
      is_in_otel, 
      example, 
      has_dynamic_suffix, 
      deprecation, 
      alias,
    } = attributeJson;
    
    attributesContent += `// Path: model/attributes/${file}\n\n`;
    
    // Generate JSDoc comment
    attributesContent += '/**\n';
    attributesContent += ` * @description ${brief}\n`;

    attributesContent += ' *\n';
    
    // Add type information
    attributesContent += ` * Type: ${type}\n`;
    
    // Add PII information
    attributesContent += ` * PII: ${pii.key}${pii.reason ? ` - ${pii.reason}` : ''}\n`;
    
    // Add OTEL information
    attributesContent += ` * is in OTEL: ${is_in_otel ? 'Yes' : 'No'}\n`;
    
    // Add has_dynamic_suffix if present
    if (has_dynamic_suffix) {
      attributesContent += ` * Has Dynamic Suffix: true\n`;
    }
    
    // Add aliases if present
    if (alias && alias.length > 0) {
      attributesContent += ` * Aliases: ${alias.join(', ')}\n`;
    }

    attributesContent += ' *\n';

    // Add deprecation info if present
    if (deprecation) {
      attributesContent += ` * @deprecated Use ${deprecation.replacement} instead${deprecation.reason ? ` - ${deprecation.reason}` : ''}\n`;
    }

    // Add example if present
    if (example !== undefined) {
      attributesContent += ` * @example ${JSON.stringify(example)}\n`;
    }
    
    attributesContent += ' */\n';
    
    // Convert attribute key to a valid JavaScript constant name
    const constantName = getConstantName(key);
    
    attributesContent += `export const ${constantName} = "${key}";\n\n`;
  }
  
  // Write the generated content to the file
  const outputFilePath = path.join(__dirname, '..', 'packages', 'sentry-conventions', 'src', 'attributes.ts');
  fs.writeFileSync(outputFilePath, attributesContent);
  
  // Update the index.ts file to export the attributes
  const indexPath = path.join(__dirname, '..', 'packages', 'sentry-conventions', 'src', 'index.ts');
  let indexContent = fs.readFileSync(indexPath, 'utf-8');
  
  // Check if the export already exists
  if (!indexContent.includes("export * from './attributes';")) {
    // Add the export if it doesn't exist
    indexContent += "export * from './attributes';\n";
    fs.writeFileSync(indexPath, indexContent);
  }
  
  console.log(`Generated attributes file at: ${outputFilePath}`);
}


function getConstantName(key: string) {
  return key
    .toUpperCase()
    .replaceAll('.', '_')
    .replaceAll('-', '_')
    .replaceAll('<', '__')  // Replace opening angle bracket with underscore
    .replaceAll('>', '')   // Remove closing angle bracket
    .replace(/__+/g, '_'); // Replace multiple consecutive underscores with a single one
}