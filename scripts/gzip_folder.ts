import { createReadStream, createWriteStream } from 'node:fs';
import { join } from 'node:path';
import { pipeline } from 'node:stream';
import { promisify } from 'node:util';
import { createGzip } from 'node:zlib';
import * as tar from 'tar';

const pipelineAsync = promisify(pipeline);

async function createTarball(inputDir: string, outputPath: string): Promise<void> {
  const gzip = createGzip();
  const source = tar.c(
    {
      gzip: false,
      cwd: inputDir,
    },
    ['.'],
  );
  const destination = createWriteStream(outputPath);

  await pipelineAsync(source, gzip, destination);
}

function ensureTgzExtension(path: string): string {
  return path.endsWith('.tgz') ? path : `${path}.tgz`;
}

async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.error('Please provide the input directory path as an argument');
    console.error('Usage: ts-node gzip_folder.ts <input_directory> [output_path]');
    process.exit(1);
  }

  const inputDir = args[0] as string;
  const outputPath = ensureTgzExtension(args[1] || `${inputDir}`);

  try {
    console.log(`Starting to create tarball of directory: ${inputDir}`);
    console.log(`Output will be saved to: ${outputPath}`);
    await createTarball(inputDir, outputPath);
    console.log(`Successfully created tarball at ${outputPath}`);
  } catch (error) {
    console.error('Error creating tarball:', error);
    process.exit(1);
  }
}

main();
