import * as fs from 'node:fs';
import * as path from 'node:path';
import type { AttributeJson } from './types';
import { getAllJsonFiles } from './generate_attribute_changelog';

const attributesDir = path.join(__dirname, '..', 'model', 'attributes');

async function clearAll(): Promise<void> {
  const files = await getAllJsonFiles(attributesDir);
  let count = 0;

  for (const relativeFile of files) {
    const filePath = path.join(attributesDir, relativeFile);
    const content = await fs.promises.readFile(filePath, 'utf-8');
    const json: AttributeJson = JSON.parse(content);

    if ('changelog' in json) {
      delete json.changelog;
      await fs.promises.writeFile(filePath, `${JSON.stringify(json, null, 2)}\n`, 'utf-8');
      count++;
    }
  }

  console.log(`Cleared changelog from ${count} file(s).`);
}

async function clearByKey(key: string): Promise<void> {
  const files = await getAllJsonFiles(attributesDir);

  for (const relativeFile of files) {
    const filePath = path.join(attributesDir, relativeFile);
    const content = await fs.promises.readFile(filePath, 'utf-8');
    const json: AttributeJson = JSON.parse(content);

    if (json.key === key) {
      if ('changelog' in json) {
        delete json.changelog;
        await fs.promises.writeFile(filePath, `${JSON.stringify(json, null, 2)}\n`, 'utf-8');
        console.log(`Cleared changelog from ${relativeFile}`);
      } else {
        console.log(`No changelog found for key "${key}" in ${relativeFile}`);
      }
      return;
    }
  }

  console.error(`No attribute found with key "${key}"`);
  process.exit(1);
}

const args = process.argv.slice(2);

if (args.includes('--all')) {
  clearAll().catch((err) => {
    console.error(err);
    process.exit(1);
  });
} else {
  const keyIndex = args.indexOf('--key');
  if (keyIndex !== -1 && args[keyIndex + 1]) {
    const key = args[keyIndex + 1];
    clearByKey(key).catch((err) => {
      console.error(err);
      process.exit(1);
    });
  } else {
    console.error('Usage:');
    console.error('  tsx scripts/clear_attribute_changelog.ts --all');
    console.error('  tsx scripts/clear_attribute_changelog.ts --key <attribute-key>');
    process.exit(1);
  }
}
