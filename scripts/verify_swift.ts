import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import * as fs from 'node:fs';
import * as os from 'node:os';
import * as path from 'node:path';

const packagePath = path.resolve(__dirname, '../swift/Verification');
const scratchPath = fs.mkdtempSync(path.join(os.tmpdir(), 'conventions-stripping-'));
const args = ['--package-path', packagePath, '--scratch-path', scratchPath, '-c', 'release'];
try {
  execFileSync('swift', ['build', ...args], { stdio: 'inherit' });
  const binPath = execFileSync('swift', ['build', ...args, '--show-bin-path'], { encoding: 'utf8' }).trim();
  const usedPath = path.join(binPath, 'UsedConstants');
  const controlPath = path.join(binPath, 'ControlConstants');
  assert.equal(
    execFileSync(usedPath, { encoding: 'utf8' }),
    'http.request.method\nhttp.client\nui.element.render_time\n',
  );
  const unusedKeys = [
    'mcp.request.argument.<key>',
    'mcp.notification.client_to_server',
    'process.runtime.elixir.process.utilization',
  ];
  assert.equal(execFileSync(controlPath, { encoding: 'utf8' }), `${unusedKeys.join('\n')}\n`);
  const used = fs.readFileSync(usedPath);
  const control = fs.readFileSync(controlPath);
  // Long literals avoid Swift's inline small-string representation. The control
  // proves these probes are actually detectable with this compiler and platform.
  for (const key of unusedKeys) {
    assert.ok(control.includes(Buffer.from(key)), `Control binary must contain ${key}`);
    assert.ok(!used.includes(Buffer.from(key)), `Unused constant retained in release binary: ${key}`);
  }
  assert.ok(used.includes(Buffer.from('http.request.method')), 'Used literal must remain in the binary');
  console.log(
    'Swift release verification passed: used constants work, unused probes from all three namespaces are stripped.',
  );
} finally {
  fs.rmSync(scratchPath, { recursive: true, force: true });
}
