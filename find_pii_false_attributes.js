#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

async function getAllJsonFiles(dir, files = []) {
  const entries = await fs.promises.readdir(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await getAllJsonFiles(fullPath, files);
    } else if (entry.name.endsWith('.json')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

async function findProblematicAttributes() {
  const traceFolders = path.resolve(__dirname, 'model/attributes');
  const files = await getAllJsonFiles(traceFolders);
  
  const problematicAttributes = [];
  
  for (const file of files) {
    try {
      const content = JSON.parse(await fs.promises.readFile(file, 'utf-8'));
      
      // Check if pii is false and not in sentry namespace
      if (content.pii && content.pii.key === 'false' && !content.key.startsWith('sentry.')) {
        problematicAttributes.push({
          file: path.relative(process.cwd(), file),
          key: content.key,
          namespace: content.key.split('.')[0] || 'root'
        });
      }
    } catch (error) {
      console.error(`Error reading ${file}:`, error.message);
    }
  }
  
  if (problematicAttributes.length === 0) {
    console.log('✅ No attributes found with pii: false outside the sentry namespace!');
    return;
  }
  
  console.log(`🔍 Found ${problematicAttributes.length} attributes with pii: false outside the sentry namespace:\n`);
  
  // Group by namespace for easier reading
  const byNamespace = {};
  problematicAttributes.forEach(attr => {
    if (!byNamespace[attr.namespace]) {
      byNamespace[attr.namespace] = [];
    }
    byNamespace[attr.namespace].push(attr);
  });
  
  Object.keys(byNamespace).sort().forEach(namespace => {
    console.log(`📁 ${namespace} namespace:`);
    byNamespace[namespace].forEach(attr => {
      console.log(`   - ${attr.key} (${attr.file})`);
    });
    console.log('');
  });
  
  console.log('💡 To fix these, you can either:');
  console.log('   1. Change pii: "false" to pii: "maybe"');
  console.log('   2. Move the attribute to the sentry.* namespace');
  console.log('');
  console.log('📝 Files to update:');
  problematicAttributes.forEach(attr => {
    console.log(`   ${attr.file}`);
  });
}

findProblematicAttributes().catch(console.error);