import * as fs from 'node:fs';
import * as path from 'node:path';

interface NameJson {
  brief: string;
  is_in_otel: boolean;
  op: string[];
  template: string[];
  example?: string[];
}

// Main function to generate all markdown docs
export async function generateNameDocs() {
  const baseDir = 'model/name';
  const outputDir = 'generated/name';
  const categories: Record<string, NameJson> = {};

  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Process every file in the directory, there is no nesting
  const topLevelFiles = fs
    .readdirSync(baseDir)
    .filter((file) => file.endsWith('.json'))
    .map((file) => path.join(baseDir, file));

  if (topLevelFiles.length === 0) {
    console.error(`No files found in ${baseDir}, could not generate name docs.`);
    process.exit(1);
  }

  for (const file of topLevelFiles) {
    const nameJSON = readJsonFile(file);
    const categoryName = path.basename(file, '.json');
    categories[categoryName] = nameJSON;
  }

  // Create index.md file that links to all categories
  let indexContent = '<!-- THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. -->\n\n';
  indexContent += '{% raw %}\n'; // GitHub pages use Jekyll which parsed and interpolates `"{{"` and `"}}"`. Since we're using double curlies to indicate placeholder in our template, we need to wrap the document in Jekyll Liquid escape tags
  indexContent += '# Name Documentation\n\n';
  indexContent +=
    "This page contains documentation for known span names. You can use this documentation to understand how to create the `name` attribute for a span, when you have the span's other attributes. This is useful for SDK development, as well as in-product when deriving the span name.\n\n";

  indexContent += '## Generating Names\n\n';
  indexContent +=
    "Span names are generated via string template. Each span category has a set of templates for the span name. Curly brackets in the template indicate that the contents inside the curly brackets should be replaced with the contents of the span attribute of the name within the brackets. The templates should be evaluated in order of appearance. At least one template must be provided that doesn't require any attributes.\n\n";

  indexContent += '## Available Categories\n\n';

  // Generate documentation for each category
  for (const category of Object.keys(categories).sort()) {
    indexContent += `## \`${category}\`\n\n`;
    const nameJSON = categories[category];
    if (nameJSON) {
      indexContent += `${generateCategoryDocs(nameJSON)}`;
    }
  }

  // Write the index.md file
  const indexFile = path.join(outputDir, 'index.md');
  fs.writeFileSync(indexFile, indexContent);
  console.log(`Generated index file: ${indexFile}`);

  console.log('Documentation generation complete!');
}

// Function to read and parse a JSON file
function readJsonFile(filePath: string): NameJson {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContent) as NameJson;
}

// Function to generate text content for a category
function generateCategoryDocs(nameJSON: NameJson): string {
  let content = '';

  content += `${nameJSON.brief}\n\n`;

  if (!nameJSON.is_in_otel) {
    content +=
      '> [!NOTE]\n> Names for this category of span are not specified in OpenTelemetry Semantic Conventions.\n\n';
  }

  content += '### Affected `op`s\n\n';

  for (const op of nameJSON.op) {
    content += `- \`"${op}"\`\n`;
  }

  content += '\n';

  content += '### Name Templates\n\n';

  for (const template of nameJSON.template) {
    content += `- \`"${template}"\`\n`;
  }

  content += '\n';

  if (nameJSON.example?.length) {
    content += '### Examples\n\n';

    for (const example of nameJSON.example) {
      content += `- \`"${example}"\`\n`;
    }

    content += '\n';
  }

  content += '{% endraw %}';

  return content;
}
