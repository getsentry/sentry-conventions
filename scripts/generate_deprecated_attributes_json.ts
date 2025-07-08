import { execSync } from 'node:child_process';
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
    _status?: string;
  };
  alias?: string[];
  sdks?: string[];
}

// Function to read and parse a JSON file
function readJsonFile(filePath: string): AttributeJson {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContent) as AttributeJson;
}

// Main function to generate all markdown docs
export async function generateDeprecatedAttributesJSON() {
  const baseDir = 'model/attributes';
  const outputDir = 'shared';
  const categories: Record<string, AttributeJson[]> = {};
  const allDeprecatedAttributes: Record<string, unknown> = {
    _generated: 'This file is generated. Do not modify it directly. See scripts/generate_deprecated_attributes_json.ts',
    attributes: [],
  };

  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Process top-level files (they go into a "general" category)
  const topLevelFiles = fs
    .readdirSync(baseDir)
    .filter((file) => file.endsWith('.json'))
    .map((file) => path.join(baseDir, file));

  if (topLevelFiles.length > 0) {
    categories.general = topLevelFiles.map((file) => readJsonFile(file));
  }

  // Process subdirectories
  const subdirs = fs
    .readdirSync(baseDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  for (const subdir of subdirs) {
    const categoryDir = path.join(baseDir, subdir);
    const files = fs
      .readdirSync(categoryDir)
      .filter((file) => file.endsWith('.json'))
      .map((file) => path.join(categoryDir, file));

    if (files.length > 0) {
      categories[subdir] = files.map((file) => readJsonFile(file));
    }
  }

  for (const [_category, attributes] of Object.entries(categories)) {
    const deprecatedAttributes = attributes.filter((attr) => attr.deprecation);

    // Add all deprecated attributes to JSON
    for (const attribute of deprecatedAttributes) {
      (allDeprecatedAttributes.attributes as AttributeJson[]).push(attribute);
    }
  }

  const deprecatedAttributesFile = path.join(outputDir, 'deprecated_attributes.json');
  fs.writeFileSync(deprecatedAttributesFile, JSON.stringify(allDeprecatedAttributes, null, 2));
  console.log(`Generated deprecated attributes json: ${deprecatedAttributesFile}`);

  // Format the generated file with biome
  try {
    execSync(`npx biome check --write ${deprecatedAttributesFile}`, { stdio: 'inherit' });
    console.log(`Formatted ${deprecatedAttributesFile} with biome`);
  } catch (error) {
    console.warn(`Warning: Could not format ${deprecatedAttributesFile} with biome:`, error);
  }

  console.log('Deprecated attributes generation complete!');
}
