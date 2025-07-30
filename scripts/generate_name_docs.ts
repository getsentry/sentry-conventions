import * as fs from 'node:fs';
import * as path from 'node:path';

interface NameJson {
  brief: string;
  operations: Array<{
    name: string;
    brief: string;
    is_in_otel: boolean;
    ops: string[];
    templates: string[];
    examples?: string[];
  }>;
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
  indexContent += '# Span Name Documentation\n\n';
  indexContent +=
    "This page contains documentation for known span names. You can use this documentation to understand how to create the `name` attribute for a span, when you have the span's other attributes. This is useful for SDK development, as well as in-product when deriving the span name. The documentation is organized by general category of work that spans represent, and further broken down by specific kinds of work.\n\n";

  indexContent += '## Generating Names\n\n';
  indexContent +=
    'Span names are generated via string template. Each span category of work has a set of templates for the span name. Curly brackets in the template indicate that the contents inside the curly brackets should be replaced with the contents of the span attribute of the name within the brackets. The templates should be evaluated in order of appearance. A few notes:\n\n';

  indexContent += `1. An \`op\` string is period-delimited, and usually has 2-3 parts. The first part is called the "category". The second part is the called the "action". The third part is called the "subaction". e.g., in \`"db.query"\` the "category" is \`"db"\`, the "action" is \`"query"\`. In \`"ui.react.mount"\` the "category" is \`"ui"\`, the "action" is \`"react"\`, and the "subaction" is \`"mount"\`. In \`"ui.ember.route.before_model"\` the "category" is \`"ui"\`, the "action" is \`"ember"\`, and the "subaction" is \`"route.before_model"\`. References to \`"span.action"\` imply the action of the span, which should have been extracted to an attribute.\n`;

  indexContent +=
    '2. The last template in the list should not require any attributes. This is meant to be a failsafe fallback, in case attributes are not available, which could happen for a number of reasons (e.g., truncation due to span size).\n';

  indexContent += '\n';

  // Generate documentation for each category
  for (const category of Object.keys(categories).sort()) {
    indexContent += `## \`${category}\`\n\n`;
    const nameJSON = categories[category];
    if (nameJSON) {
      indexContent += `${generateCategoryDocs(nameJSON)}`;
    }
  }

  indexContent += '{% endraw %}';

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

  for (const operation of nameJSON.operations) {
    content += `### ${operation.name}\n\n`;
    content += `${operation.brief}`;

    if (!operation.is_in_otel) {
      content += ' NOTE: Names for this category of span are **not** specified in OpenTelemetry Semantic Conventions.';
    }

    content += '\n\n';

    content += '#### Affected `op`s\n\n';

    for (const op of operation.ops) {
      content += `- \`"${op}"\`\n`;
    }

    content += '\n';

    content += '#### Templates\n\n';

    for (const template of operation.templates) {
      content += `- \`"${template}"\`\n`;
    }

    content += '\n';

    if (operation.examples?.length) {
      content += '#### Examples\n\n';

      for (const example of operation.examples) {
        content += `- \`"${example}"\`\n`;
      }

      content += '\n';
    }
  }

  return content;
}
