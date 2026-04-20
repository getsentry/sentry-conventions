## 0.5.0

### New Features ✨

#### Attributes

- Add LCP and CLS web vital report event attribute by @Lms24 in [#319](https://github.com/getsentry/sentry-conventions/pull/319)
- Deprecate app_start_cold and app_start_warm by @buenaflor in [#323](https://github.com/getsentry/sentry-conventions/pull/323)
- Add app.vitals.* attributes for mobile performance by @buenaflor in [#313](https://github.com/getsentry/sentry-conventions/pull/313)
- Add remaining app context attributes by @buenaflor in [#304](https://github.com/getsentry/sentry-conventions/pull/304)
- Add `sentry.mobile` and `sentry.main_thread` attributes by @buenaflor in [#317](https://github.com/getsentry/sentry-conventions/pull/317)
- Add more device context attributes by @buenaflor in [#303](https://github.com/getsentry/sentry-conventions/pull/303)
- Add OS context attributes by @buenaflor in [#301](https://github.com/getsentry/sentry-conventions/pull/301)
- Add `gen_ai.function_id` attribute by @constantinius in [#308](https://github.com/getsentry/sentry-conventions/pull/308)
- Add `gen_ai.context.window_size` and `gen_ai.context.utilization` for generation spans by @constantinius in [#315](https://github.com/getsentry/sentry-conventions/pull/315)
- Add `db.driver.name` attribute by @alexander-alderman-webb in [#295](https://github.com/getsentry/sentry-conventions/pull/295)
- Add network connection-related attributes by @Lms24 in [#279](https://github.com/getsentry/sentry-conventions/pull/279)
- Add cache.write attribute by @adinauer in [#292](https://github.com/getsentry/sentry-conventions/pull/292)
- Add device context attributes by @buenaflor in [#300](https://github.com/getsentry/sentry-conventions/pull/300)
- Add app context attributes for mobile by @buenaflor in [#296](https://github.com/getsentry/sentry-conventions/pull/296)
- Add device memory and core count attributes by @Lms24 in [#281](https://github.com/getsentry/sentry-conventions/pull/281)
- Add `ui.element.*` attributes by @Lms24 in [#284](https://github.com/getsentry/sentry-conventions/pull/284)
- Add remaining TTFB, FCP and FP web vital attributes by @Lms24 in [#235](https://github.com/getsentry/sentry-conventions/pull/235)
- Add LCP web vital meta attributes by @Lms24 in [#233](https://github.com/getsentry/sentry-conventions/pull/233)
- Add CLS web vital source attribute by @Lms24 in [#234](https://github.com/getsentry/sentry-conventions/pull/234)
- Add core web web vital value attributes by @Lms24 in [#229](https://github.com/getsentry/sentry-conventions/pull/229)
- Add allow_any_value field to attribute schema by @vgrozdanic in [#272](https://github.com/getsentry/sentry-conventions/pull/272)

#### Other

- (attribute) Add browser performance attributes by @Lms24 in [#321](https://github.com/getsentry/sentry-conventions/pull/321)
- (http) Add http.server.request.time_in_queue attribute by @dingsdax in [#267](https://github.com/getsentry/sentry-conventions/pull/267)
- (resource) Add resource.deployment.environment by @mjq in [#266](https://github.com/getsentry/sentry-conventions/pull/266)
- Add `sentry.timestamp.sequence` attribute to the spec by @logaretm in [#262](https://github.com/getsentry/sentry-conventions/pull/262)
- Add changelog tracking to attribute definitions by @ericapisani in [#270](https://github.com/getsentry/sentry-conventions/pull/270)

### Bug Fixes 🐛

- (attributes) Remove allow_any_value boolean attribute and allow `any` as type by @vgrozdanic in [#273](https://github.com/getsentry/sentry-conventions/pull/273)
- (gen_ai) Input and output token description by @obostjancic in [#261](https://github.com/getsentry/sentry-conventions/pull/261)
- (release) Run yarn install before yarn generate in pre-release script by @vgrozdanic in [#316](https://github.com/getsentry/sentry-conventions/pull/316)
- (sentry) Deprecate `sentry.trace.parent_span_id` by @mjq in [#287](https://github.com/getsentry/sentry-conventions/pull/287)
- Correct replacement for `"ai.finish_reason"` by @loewenheim in [#325](https://github.com/getsentry/sentry-conventions/pull/325)
- Don't run changelog generation on `yarn generate` by @Lms24 in [#277](https://github.com/getsentry/sentry-conventions/pull/277)
- Avoid changelog generation recursion by @Lms24 in [#274](https://github.com/getsentry/sentry-conventions/pull/274)

### Documentation 📚

- (sentry) Add deprecated `sentry.source` by @s1gr1d in [#288](https://github.com/getsentry/sentry-conventions/pull/288)
- Redirect from old `/generated` pages to new routes by @Lms24 in [#291](https://github.com/getsentry/sentry-conventions/pull/291)
- Remove extra `yarn run format` instruction by @mjq in [#289](https://github.com/getsentry/sentry-conventions/pull/289)
- Update README with up-to-date links by @ericapisani in [#258](https://github.com/getsentry/sentry-conventions/pull/258)

### Internal Changes 🔧

#### Deps

- Bump dompurify from 3.3.2 to 3.4.0 by @dependabot in [#324](https://github.com/getsentry/sentry-conventions/pull/324)
- Bump defu from 6.1.4 to 6.1.6 by @dependabot in [#309](https://github.com/getsentry/sentry-conventions/pull/309)
- Bump vite from 6.4.1 to 6.4.2 by @dependabot in [#310](https://github.com/getsentry/sentry-conventions/pull/310)
- Bump pygments from 2.19.2 to 2.20.0 in /python by @dependabot in [#307](https://github.com/getsentry/sentry-conventions/pull/307)
- Bump smol-toml from 1.6.0 to 1.6.1 by @dependabot in [#305](https://github.com/getsentry/sentry-conventions/pull/305)
- Bump h3 from 1.15.5 to 1.15.9 by @dependabot in [#299](https://github.com/getsentry/sentry-conventions/pull/299)
- Bump devalue from 5.6.3 to 5.6.4 by @dependabot in [#286](https://github.com/getsentry/sentry-conventions/pull/286)
- Bump dompurify from 3.3.1 to 3.3.2 by @dependabot in [#278](https://github.com/getsentry/sentry-conventions/pull/278)
- Bump svgo from 3.3.2 to 3.3.3 by @dependabot in [#275](https://github.com/getsentry/sentry-conventions/pull/275)
- Bump svelte from 5.51.5 to 5.53.5 by @dependabot in [#271](https://github.com/getsentry/sentry-conventions/pull/271)
- Bump rollup from 4.40.1 to 4.59.0 by @dependabot in [#269](https://github.com/getsentry/sentry-conventions/pull/269)
- Bump svelte from 5.48.1 to 5.51.5 by @dependabot in [#260](https://github.com/getsentry/sentry-conventions/pull/260)

#### Deps Dev

- Bump tar from 7.5.10 to 7.5.11 by @dependabot in [#285](https://github.com/getsentry/sentry-conventions/pull/285)
- Bump tar from 7.5.8 to 7.5.10 by @dependabot in [#276](https://github.com/getsentry/sentry-conventions/pull/276)
- Bump tar from 7.5.7 to 7.5.8 by @dependabot in [#259](https://github.com/getsentry/sentry-conventions/pull/259)

#### Other

- (ai) Deprecate rest of `ai.*` attributes by @constantinius in [#264](https://github.com/getsentry/sentry-conventions/pull/264)
- (attributes) Ensure each attribute json has a changelog entry by @Lms24 in [#282](https://github.com/getsentry/sentry-conventions/pull/282)
- (docs) Upgrade to Astro 6 by @Lms24 in [#283](https://github.com/getsentry/sentry-conventions/pull/283)
- (gen_ai) Deprecate gen_ai.tool.input, gen_ai.tool.message, gen_ai.tool.output by @constantinius in [#265](https://github.com/getsentry/sentry-conventions/pull/265)
- (publish) Bump `next` entries in changelog when releasing by @Lms24 in [#290](https://github.com/getsentry/sentry-conventions/pull/290)
- (repo) Populate `changelog` property when running `yarn create:attribute` by @Lms24 in [#280](https://github.com/getsentry/sentry-conventions/pull/280)
- Update CONTRIBUTING with process and minor changes by @Lms24 in [#255](https://github.com/getsentry/sentry-conventions/pull/255)
- Pin GitHub Actions to full-length commit SHAs by @joshuarli in [#302](https://github.com/getsentry/sentry-conventions/pull/302)
- Wrong link to CONTRIBUTING.md in PR template by @sentrivana in [#298](https://github.com/getsentry/sentry-conventions/pull/298)

### Other

- deprecate(attributes): Mark gen_ai.tool.type as deprecated by @ericapisani in [#312](https://github.com/getsentry/sentry-conventions/pull/312)

## 0.4.0

### Features

- Add page listing all attributes ([#207](https://github.com/getsentry/sentry-conventions/pull/207))
- add attribute `gen_ai.response.time_to_first_token` ([#227](https://github.com/getsentry/sentry-conventions/pull/227))

### Fixes

- migrating several numeric fields to `pii=maybe` ([#228](https://github.com/getsentry/sentry-conventions/pull/228))

#### Changes to attributes

- fix(attributes): improve gen_ai.operation.name description ([#225](https://github.com/getsentry/sentry-conventions/pull/225))
- feat(ai): Add gen_ai.usage.input_tokens.cache_write ([#217](https://github.com/getsentry/sentry-conventions/pull/217))
- feat(attributes): Add sentry.normalized_db_query.hash ([#200](https://github.com/getsentry/sentry-conventions/pull/200))
- feat(attributes): Add sentry.category attribute ([#218](https://github.com/getsentry/sentry-conventions/pull/218))
- Add new Gen AI attributes ([#221](https://github.com/getsentry/sentry-conventions/pull/221))
- Add sentry.status_code attribute ([#223](https://github.com/getsentry/sentry-conventions/pull/223))
- Backfill `db.system` attribute ([#224](https://github.com/getsentry/sentry-conventions/pull/224))
- Set PII to `maybe` for numeric attributes

## 0.3.1

### Features

#### Changes to attributes

- feat(attributes): Add sentry.normalized_db_query ([#194](https://github.com/getsentry/sentry-conventions/pull/194))
- double-write OpenTelemetry's `resource.deployment.environment.name` to `sentry.environment` ([#196](https://github.com/getsentry/sentry-conventions/pull/196))

## 0.3.0

### Features

#### Changes to attributes

- Timber logging attributes ([#183](https://github.com/getsentry/sentry-conventions/pull/183))
- MCP attributes ([#171](https://github.com/getsentry/sentry-conventions/pull/171))
- Make `sentry.exclusive_time` floating point milliseconds ([#160](https://github.com/getsentry/sentry-conventions/pull/160))
- Add `gen_ai.embeddings.input` ([#195](https://github.com/getsentry/sentry-conventions/pull/195))

#### Changes to generated packages

- (Python) Make ATTRIBUTE_METADATA public ([#189](https://github.com/getsentry/sentry-conventions/pull/189))

## 0.2.1

### Fixes

- fix(js): Export constants correctly ([#172](https://github.com/getsentry/sentry-conventions/pull/172))

## 0.2.0

### Features

#### Changes to generated packages

- feat: export metadata in JS package ([#161](https://github.com/getsentry/sentry-conventions/pull/161))
  - An `ATTRIBUTE_METADATA` map is now exported from the JS package to power in-product usecases such as search.

#### Changes to attributes

- feat(ai): Document `sentry._internal.segment.contains_gen_ai_spans` attribute ([#150](https://github.com/getsentry/sentry-conventions/pull/150))
- feat(sentry): Add sentry.observed_timestamp_nanos ([#137](https://github.com/getsentry/sentry-conventions/pull/137))
- dynamic-sampling: add field conventions for dynamic sampling context ([#128](https://github.com/getsentry/sentry-conventions/pull/128))
- chore(ai): Clean up of `sentry._internal.segment.contains_gen_ai_spans` ([#155](https://github.com/getsentry/sentry-conventions/pull/155))
- feat(attributes): Add sentry.\_internal.replay_is_buffering ([#159](https://github.com/getsentry/sentry-conventions/pull/159))
- feat: Add vercel log drain attributes ([#163](https://github.com/getsentry/sentry-conventions/pull/163))
- feat(attributes) add MCP related attributes ([#164](https://github.com/getsentry/sentry-conventions/pull/164))
- feat(attributes): Add MDC log attributes ([#167](https://github.com/getsentry/sentry-conventions/pull/167))

### Fixes

- fix(name): Remove duplicate GraphQL op ([#152](https://github.com/getsentry/sentry-conventions/pull/152))

### Internal

- test(name): verify attribute usage in template lists ([#153](https://github.com/getsentry/sentry-conventions/pull/153))
- build: Restructure scripts in package.json ([#166](https://github.com/getsentry/sentry-conventions/pull/166))
- docs: add PR template and more info to README and CONTRIBUTING ([#165](https://github.com/getsentry/sentry-conventions/pull/165))

## 0.1.1

This is a patch release with the sole purpose of releasing the Python package to our internal PyPI registry.

## 0.1.0

This is the first release of the Sentry Conventions packages.
