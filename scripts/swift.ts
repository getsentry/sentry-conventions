import * as fs from 'node:fs';
import * as path from 'node:path';
interface Constant {
  key: string;
  brief?: string;
  deprecated?: string;
  dynamic?: boolean;
}

// Swift uses braced Unicode escapes, unlike JSON.
function swiftString(value: string): string {
  return JSON.stringify(value).replace(/\\u([0-9a-fA-F]{4})/g, '\\u{$1}');
}

function identifier(key: string): string {
  const name = key
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter(Boolean)
    .map((word, index) => (index === 0 ? word : word[0]!.toUpperCase() + word.slice(1)))
    .join('');
  return /^\d/.test(name) ? `_${name}` : name;
}

function render(name: string, constants: Constant[]): string {
  let content = `// This is an auto-generated file. Do not edit!\n\npublic struct ${name} {\n    private init() {}\n`;
  const used = new Set<string>();
  const entries = constants.toSorted(
    (a, b) =>
      Number(a.deprecated !== undefined) - Number(b.deprecated !== undefined) ||
      (a.key < b.key ? -1 : a.key > b.key ? 1 : 0),
  );
  for (const entry of entries) {
    let member = identifier(entry.key);
    while (used.has(member)) {
      if (entry.deprecated === undefined) {
        throw new Error(`Swift identifier collision: ${name}.${member} (${entry.key})`);
      }
      member = `_${member}`;
    }
    const properties = [{ member, value: entry.key }];
    if (entry.dynamic) {
      properties.push({ member: `${member}Base`, value: entry.key.slice(0, -'.<key>'.length) });
    }
    for (const property of properties) {
      if (used.has(property.member)) {
        throw new Error(`Swift identifier collision: ${name}.${property.member}`);
      }
      used.add(property.member);
      content += '\n';
      if (entry.brief) {
        content += entry.brief
          .split(/\r?\n/)
          .map((line) => `    /// ${line}\n`)
          .join('');
      }
      if (entry.deprecated !== undefined) {
        content += `    @available(*, deprecated, message: ${swiftString(entry.deprecated || 'Deprecated')})\n`;
      }
      // @inlinable alone leaves public getters marked no-dead-strip on Darwin.
      // Client emission avoids retaining those symbols and their string literals.
      // See swift/README.md#inlining-and-dead-code-stripping for rationale and verification.
      content += `    @_alwaysEmitIntoClient\n    @inlinable\n    public static var ${property.member}: String { ${swiftString(property.value)} }\n`;
    }
  }
  return `${content}}\n`;
}

export function writeSwiftConstants(outputFilePath: string, name: string, constants: Constant[]): void {
  const source = render(name, constants);
  fs.mkdirSync(path.dirname(outputFilePath), { recursive: true });
  fs.writeFileSync(outputFilePath, source);
}
