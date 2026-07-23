import { z } from 'zod';

function mergePaths(parent: PropertyKey[], child: PropertyKey[]): PropertyKey[] {
  if (parent.every((segment, index) => child[index] === segment)) {
    return child;
  }
  return [...parent, ...child];
}

function formatPath(path: PropertyKey[]): string {
  if (path.length === 0) {
    return '(root)';
  }

  return path
    .map((segment, index) =>
      typeof segment === 'number' ? `[${segment}]` : `${index === 0 ? '' : '.'}${String(segment)}`,
    )
    .join('');
}

function collectLeafIssues(issue: z.core.$ZodIssue, parentPath: PropertyKey[], output: string[]): void {
  const path = mergePaths(parentPath, issue.path);
  if (issue.code === 'invalid_union') {
    for (const alternative of issue.errors) {
      for (const nestedIssue of alternative) {
        collectLeafIssues(nestedIssue, path, output);
      }
    }
    return;
  }

  output.push(`${formatPath(path)}: ${issue.message}`);
}

export function formatZodError(error: z.ZodError): string {
  const messages: string[] = [];
  for (const issue of error.issues) {
    collectLeafIssues(issue, [], messages);
  }
  return [...new Set(messages)].map((message) => `- ${message}`).join('\n');
}
