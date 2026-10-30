import * as fs from 'node:fs';
import * as path from 'node:path';
import type { MetricJson } from './types';

interface GenerateMetricsOptions {
  metricsDir: string;
  jsOutputFilePath: string;
  rustOutputFilePath: string;
}

interface Metric extends MetricJson {
  file: string;
}

export async function generateMetrics(options?: Partial<GenerateMetricsOptions>) {
  const repositoryRoot = path.join(__dirname, '..');
  const metricsDir = options?.metricsDir ?? path.join(repositoryRoot, 'model', 'metrics');
  const jsOutputFilePath =
    options?.jsOutputFilePath ?? path.join(repositoryRoot, 'javascript', 'sentry-conventions', 'src', 'metrics.ts');
  const rustOutputFilePath = options?.rustOutputFilePath ?? path.join(repositoryRoot, 'rust', 'src', 'metrics.rs');

  const metrics = await readMetrics(metricsDir);

  writeToJs(metrics, jsOutputFilePath);
  writeToRust(metrics, rustOutputFilePath);
}

async function readMetrics(metricsDir: string): Promise<Metric[]> {
  const files = await Array.fromAsync(fs.promises.glob('**/*.json', { cwd: metricsDir }));

  // Sort for deterministic output, since glob order depends on the file system.
  return files.sort().map((file) => {
    const metricJson = JSON.parse(fs.readFileSync(path.join(metricsDir, file), 'utf-8')) as MetricJson;
    return { ...metricJson, file: file.split(path.sep).join('/') };
  });
}

function constantName(key: string): string {
  return key.toUpperCase().replaceAll('.', '_');
}

/** The lines documenting `metric`, shared by the JavaScript and Rust output. */
function docLines(metric: Metric): string[] {
  const lines = [...metric.brief.split('\n'), '', `Instrument: ${metric.instrument}`, `Unit: ${metric.unit}`];
  if (metric.attributes?.length) {
    lines.push(`Attributes: ${metric.attributes.map((attribute) => `\`${attribute}\``).join(', ')}`);
  }

  return lines;
}

function writeToJs(metrics: Metric[], metricsFilePath: string) {
  let content = '// This is an auto-generated file. Do not edit!\n';

  for (const metric of metrics) {
    content += `\n// Path: model/metrics/${metric.file}\n\n/**\n`;
    content += docLines(metric)
      .map((line) => (line ? ` * ${line}\n` : ' *\n'))
      .join('');
    content += ` */\nexport const ${constantName(metric.key)} = '${metric.key}';\n`;
  }

  fs.writeFileSync(metricsFilePath, content);
}

function writeToRust(metrics: Metric[], metricsFilePath: string) {
  let content = '// This is an auto-generated file. Do not edit!\n\n';

  for (const metric of metrics) {
    content += `// Path: model/metrics/${metric.file}\n\n`;
    content += docLines(metric)
      .map((line) => (line ? `/// ${line}\n` : '///\n'))
      .join('');
    content += `pub const ${constantName(metric.key)}: &str = "${metric.key}";\n\n`;
  }

  fs.writeFileSync(metricsFilePath, content.trimEnd());
}
