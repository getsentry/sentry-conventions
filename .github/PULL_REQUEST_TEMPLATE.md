## Description
<!-- Describe your changes -->

## PR Checklist
<!-- Check these to make sure the PR is ready for review -->
- [ ] I have run `yarn test` and verified that the tests pass.
- [ ] I have run `yarn generate && yarn format` to generate and format code and docs.

If an attribute was added:
- [ ] The attribute is in a namespace (e.g. `nextjs.function_id`, not `function_id`)
- [ ] I have used the correct value for `pii` (i.e. `maybe` or `true`. Use `false` only for values that should never be scrubbed such as IDs)

If an attribute was deprecated:
- [ ] I've followed the policies described in [CONTRIBUTING.md](https://github.com/getsentry/sentry-python/blob/master/CONTRIBUTING.md)
