import { generateSchemas } from './generate_schemas';
import { generateAttributes } from './generate_attributes';
import { generateOps } from './generate_op';

async function generate() {
  generateSchemas();
  await generateOps();
  await generateAttributes();
}

generate().catch((error) => {
  console.error(error);
  process.exit(1);
});
