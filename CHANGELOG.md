## 0.16.0

### New Features ✨

#### Attributes

- Add dist (deprecated) by @alexander-alderman-webb in [#489](https://github.com/getsentry/sentry-conventions/pull/489)
- Add `server_name` (deprecated) by @cleptric in [#477](https://github.com/getsentry/sentry-conventions/pull/477)
- Add `navigation.origin` attribute and deprecate SvelteKit routing attributes by @Lms24 in [#467](https://github.com/getsentry/sentry-conventions/pull/467)
- Add AWS service instrumentation attributes by @andreiborza in [#480](https://github.com/getsentry/sentry-conventions/pull/480)
- Add messaging, rpc and gen_ai attributes by @andreiborza in [#482](https://github.com/getsentry/sentry-conventions/pull/482)
- Add faas.invoked\_\* attributes by @andreiborza in [#481](https://github.com/getsentry/sentry-conventions/pull/481)
- Add AWS DynamoDB instrumentation attributes by @andreiborza in [#479](https://github.com/getsentry/sentry-conventions/pull/479)
- Add `sentry.metric.source` by @klochek in [#476](https://github.com/getsentry/sentry-conventions/pull/476)
- Add `faas.id` (deprecated) in favor of `cloud.resource_id` by @andreiborza in [#475](https://github.com/getsentry/sentry-conventions/pull/475)
- Add `faas.execution` (deprecated) in favor of `faas.invocation_id` by @andreiborza in [#473](https://github.com/getsentry/sentry-conventions/pull/473)
- Add messaging attributes by @s1gr1d in [#469](https://github.com/getsentry/sentry-conventions/pull/469)
- Add `url.same_origin` (deprecated) and `http.request.same_origin` (replacement) attributes by @Lms24 in [#456](https://github.com/getsentry/sentry-conventions/pull/456)
- Add `db.response.status_code` by @s1gr1d in [#462](https://github.com/getsentry/sentry-conventions/pull/462)

#### Other

- (ai) Add granular cost attributes for cache and reasoning by @vgrozdanic in [#461](https://github.com/getsentry/sentry-conventions/pull/461)
- (attribute) Add `koa.type` and (deprecated) `koa.name` by @s1gr1d in [#472](https://github.com/getsentry/sentry-conventions/pull/472)
- (js) Add `_BASE` attribute key exports for dynamic attribute keys by @Lms24 in [#471](https://github.com/getsentry/sentry-conventions/pull/471)
- (queues) Add Python `sentry.op` values for queues by @alexander-alderman-webb in [#470](https://github.com/getsentry/sentry-conventions/pull/470)
- Add `navigation.route.id` and adjust pageload and navigation description rules by @Lms24 in [#468](https://github.com/getsentry/sentry-conventions/pull/468)

### Internal Changes 🔧

- (ci) Stop inheriting secrets for `changelog-preview` by @tobias-wilfert in [#463](https://github.com/getsentry/sentry-conventions/pull/463)
- (repo) Remove socket registry from yarn lock by @Lms24 in [#490](https://github.com/getsentry/sentry-conventions/pull/490)

## 0.15.1

### Bug Fixes 🐛

- (build/js) Add subpath export shims for legacy bundlers by @Lms24 in [#459](https://github.com/getsentry/sentry-conventions/pull/459)

## 0.15.0

### New Features ✨

- (description) Add cache and resource description models by @cleptric in [#444](https://github.com/getsentry/sentry-conventions/pull/444)
- (name) Add resource span name model by @cleptric in [#445](https://github.com/getsentry/sentry-conventions/pull/445)
- Add queue name, description, and op models by @cleptric in [#446](https://github.com/getsentry/sentry-conventions/pull/446)
- Add name and description models for browser and url.template for HTTP server by @cleptric in [#448](https://github.com/getsentry/sentry-conventions/pull/448)

## 0.14.0

### New Features ✨

- (attributes) Add sentry.status and sentry.trace.status by @mjq in [#453](https://github.com/getsentry/sentry-conventions/pull/453)

### Bug Fixes 🐛

- (build) Do not reference const in object by @JPeer264 in [#457](https://github.com/getsentry/sentry-conventions/pull/457)

## 0.13.0

### New Features ✨

#### Attributes

- Add `sentry.trace_lifecycle` attribute by @Lms24 in [#442](https://github.com/getsentry/sentry-conventions/pull/442)
- Add Cloudflare DO sql attributes by @JPeer264 in [#435](https://github.com/getsentry/sentry-conventions/pull/435)
- Add `gen_ai.request.reasoning_effort` attribute by @cleptric in [#334](https://github.com/getsentry/sentry-conventions/pull/334)
- Add deprecated `otel.kind` attribute by @Lms24 in [#440](https://github.com/getsentry/sentry-conventions/pull/440)

#### Docs

- Add span operations reference page by @Lms24 in [#452](https://github.com/getsentry/sentry-conventions/pull/452)
- Make span name and description cards linkable by @Lms24 in [#433](https://github.com/getsentry/sentry-conventions/pull/433)

### Bug Fixes 🐛

- (attributes) Add deprecated `sentry.thread.id` by @mjq in [#451](https://github.com/getsentry/sentry-conventions/pull/451)

### Documentation 📚

- (contributing) Improve releasing and downstream update instructions by @constantinius in [#434](https://github.com/getsentry/sentry-conventions/pull/434)
- Remove semicolon in db.query.summary example by @JPeer264 in [#439](https://github.com/getsentry/sentry-conventions/pull/439)

### Internal Changes 🔧

#### Deps

- Bump dompurify from 3.4.10 to 3.4.11 by @dependabot in [#438](https://github.com/getsentry/sentry-conventions/pull/438)
- Bump astro from 6.1.10 to 6.4.6 in /docs by @dependabot in [#432](https://github.com/getsentry/sentry-conventions/pull/432)

#### Other

- (attributes) Rename pii field to apply_scrubbing by @cleptric in [#426](https://github.com/getsentry/sentry-conventions/pull/426)
- (test) Exit vitest when running `yarn test` by @Lms24 in [#441](https://github.com/getsentry/sentry-conventions/pull/441)
- Exclude formatting changes from git blame by @Lms24 in [#450](https://github.com/getsentry/sentry-conventions/pull/450)
- Use oxfmt and oxlint for formatting and linting by @Lms24 in [#449](https://github.com/getsentry/sentry-conventions/pull/449)
- Update yarn.lock file by @JPeer264 in [#436](https://github.com/getsentry/sentry-conventions/pull/436)
- Bump all dependencies to fix esbuild security issues by @cleptric in [#431](https://github.com/getsentry/sentry-conventions/pull/431)

### Other

- Update blame ignore revs for pii field renaming by @cleptric in [#437](https://github.com/getsentry/sentry-conventions/pull/437)

## 0.12.0

### New Features ✨

- (mcp) Align MCP attributes with OTel semantic conventions by @constantinius in [#420](https://github.com/getsentry/sentry-conventions/pull/420)

## 0.11.1

### New Features ✨

#### Attributes

- Deprecate cloudflare.d1.query_type by @JPeer264 in [#411](https://github.com/getsentry/sentry-conventions/pull/411)
- Add Cloudflare R2 attributes by @JPeer264 in [#413](https://github.com/getsentry/sentry-conventions/pull/413)
- Add FaaS/AWS conventions and deprecate Lambda-specific attributes by @ericapisani in [#414](https://github.com/getsentry/sentry-conventions/pull/414)

#### Other

- (description) Add span description conventions by @mjq in [#422](https://github.com/getsentry/sentry-conventions/pull/422)
- Add span name conventions for MCP server spans by @gggritso in [#377](https://github.com/getsentry/sentry-conventions/pull/377)

### Internal Changes 🔧

#### Pii

- Review pii settings for attributes part 2 by @Dav1dde in [#425](https://github.com/getsentry/sentry-conventions/pull/425)
- Review pii settings for attributes by @Dav1dde in [#424](https://github.com/getsentry/sentry-conventions/pull/424)

#### Other

- (name) Disallow replaced attributes by @mjq in [#423](https://github.com/getsentry/sentry-conventions/pull/423)

## 0.11.0

### New Features ✨

#### Attributes

- Add `session.id` attribute by @Lms24 in [#412](https://github.com/getsentry/sentry-conventions/pull/412)
- Update several attributes to their lates OTel representation by @constantinius in [#418](https://github.com/getsentry/sentry-conventions/pull/418)
- Add db.operation.batch.size by @isaacs in [#407](https://github.com/getsentry/sentry-conventions/pull/407)
- Add `app.vitals.start.prewarmed` attribute by @itaybre in [#379](https://github.com/getsentry/sentry-conventions/pull/379)
- Add and deprecate runtime context attributes by @markushi in [#383](https://github.com/getsentry/sentry-conventions/pull/383)
- Add Android Runtime (ART) GC and memory attributes by @markushi in [#382](https://github.com/getsentry/sentry-conventions/pull/382)
- Add `db.stored_procedure.name` and ensure span name attribute consistency by @Lms24 in [#398](https://github.com/getsentry/sentry-conventions/pull/398)
- Add Cloudflare SDK attributes by @JPeer264 in [#392](https://github.com/getsentry/sentry-conventions/pull/392)

#### Other

- Add missing GCP and FaaS attributes by @ericapisani in [#403](https://github.com/getsentry/sentry-conventions/pull/403)

### Bug Fixes 🐛

- (attributes) Set `pii: 'maybe'` on `faas` string attributes by @Lms24 in [#415](https://github.com/getsentry/sentry-conventions/pull/415)
- (cloudfare) Add missing visibility attributes by @markushi in [#408](https://github.com/getsentry/sentry-conventions/pull/408)

### Internal Changes 🔧

- (conventions) Remove `sdks` field from attribute schema and definitions by @Lms24 in [#410](https://github.com/getsentry/sentry-conventions/pull/410)
- (deps-dev) Bump vitest from 3.2.4 to 4.1.0 by @dependabot in [#409](https://github.com/getsentry/sentry-conventions/pull/409)
- Add note about updating conventions in Relay by @loewenheim in [#419](https://github.com/getsentry/sentry-conventions/pull/419)

## 0.10.0

### New Features ✨

#### Docs

- Add links to deprecated and aliased attributes by @Lms24 in [#396](https://github.com/getsentry/sentry-conventions/pull/396)
- Add filtering capability by @nsdeschenes in [#395](https://github.com/getsentry/sentry-conventions/pull/395)

#### Other

- (user) Add deprecated `sentry.user.*` attributes by @mjq in [#406](https://github.com/getsentry/sentry-conventions/pull/406)

### Bug Fixes 🐛

- Change type of sentry.dsc.project_id to string by @elramen in [#400](https://github.com/getsentry/sentry-conventions/pull/400)

### Internal Changes 🔧

- (generate) Remove deprecated attributes JSON generation by @mjq in [#404](https://github.com/getsentry/sentry-conventions/pull/404)
- (publish) Automatically add PR numbers to attribute changelogs by @Lms24 in [#402](https://github.com/getsentry/sentry-conventions/pull/402)

## 0.9.0

### New Features ✨

- (attributes) Add additional_context to gen_ai cost and usage attributes by @matejminar in [#397](https://github.com/getsentry/sentry-conventions/pull/397)
- (docs) Render additional_context in attribute cards and LLM export by @matejminar in [#399](https://github.com/getsentry/sentry-conventions/pull/399)
- (schema) Add `additional_context` field to attribute definitions by @matejminar in [#393](https://github.com/getsentry/sentry-conventions/pull/393)

## 0.8.0

### New Features ✨

- (attributes) Add visibility field to attributes by @nsdeschenes in [#394](https://github.com/getsentry/sentry-conventions/pull/394)

## 0.7.0

### New Features ✨

#### Attributes

- Ensure replacements aren't deprecated by @mjq in [#391](https://github.com/getsentry/sentry-conventions/pull/391)
- Add graphql.document attribute by @ericapisani in [#390](https://github.com/getsentry/sentry-conventions/pull/390)
- Add several measurement attributes by @loewenheim in [#362](https://github.com/getsentry/sentry-conventions/pull/362)
- Add `gcp.function.context.*` span attributes by @chargome in [#371](https://github.com/getsentry/sentry-conventions/pull/371)
- Add sentry.dsc.project_id as an attribute by @constantinius in [#358](https://github.com/getsentry/sentry-conventions/pull/358)
- Add `trpc.*` attributes by @chargome in [#370](https://github.com/getsentry/sentry-conventions/pull/370)
- Add `angular.version` attribute by @chargome in [#367](https://github.com/getsentry/sentry-conventions/pull/367)
- Add `aws.lambda.*` and `aws.cloudwatch.logs.*` attributes by @chargome in [#369](https://github.com/getsentry/sentry-conventions/pull/369)
- Add `react.version` attribute by @chargome in [#368](https://github.com/getsentry/sentry-conventions/pull/368)
- Add `state.type` attribute by @chargome in [#365](https://github.com/getsentry/sentry-conventions/pull/365)
- Add `cloud.*` span attributes by @chargome in [#364](https://github.com/getsentry/sentry-conventions/pull/364)
- Add calculated performance scores by @loewenheim in [#355](https://github.com/getsentry/sentry-conventions/pull/355)
- Add `rpc.response.status_code` attribute by @alexander-alderman-webb in [#352](https://github.com/getsentry/sentry-conventions/pull/352)
- Add `rpc.method` attribute by @alexander-alderman-webb in [#351](https://github.com/getsentry/sentry-conventions/pull/351)
- Add app vitals start attributes by @buenaflor in [#353](https://github.com/getsentry/sentry-conventions/pull/353)
- Add `process.runtime.engine.*` attributes by @chargome in [#347](https://github.com/getsentry/sentry-conventions/pull/347)

#### Other

- (docs) Add measurements page by @Lms24 in [#389](https://github.com/getsentry/sentry-conventions/pull/389)
- (measurements) Add attribute field by @loewenheim in [#388](https://github.com/getsentry/sentry-conventions/pull/388)

### Bug Fixes 🐛

#### Attributes

- Correct PR references in attribute changelogs by @chargome in [#384](https://github.com/getsentry/sentry-conventions/pull/384)
- Increase some PII values by @loewenheim in [#373](https://github.com/getsentry/sentry-conventions/pull/373)
- Change several deprecation statuses to `normalize` to align with ingestion paths by @constantinius in [#350](https://github.com/getsentry/sentry-conventions/pull/350)

#### Other

- (create) Replace angle brackets in file names by @loewenheim in [#356](https://github.com/getsentry/sentry-conventions/pull/356)

### Internal Changes 🔧

#### Deps

- Bump astro from 6.1.6 to 6.1.10 by @dependabot in [#374](https://github.com/getsentry/sentry-conventions/pull/374)
- Bump svelte from 5.53.5 to 5.55.7 by @dependabot in [#381](https://github.com/getsentry/sentry-conventions/pull/381)

#### Other

- (gh) Remove myself from CODEOWNERS by @lcian in [#354](https://github.com/getsentry/sentry-conventions/pull/354)
- Bump vulnerable pytest by @alexander-alderman-webb in [#360](https://github.com/getsentry/sentry-conventions/pull/360)
- Bump vulnerable js packages by @chargome in [#359](https://github.com/getsentry/sentry-conventions/pull/359)

## 0.6.0

### New Features ✨

#### Attributes

- Deprecate sentry.transaction by @buenaflor in [#345](https://github.com/getsentry/sentry-conventions/pull/345)
- Add `vercel.path` by @loewenheim in [#349](https://github.com/getsentry/sentry-conventions/pull/349)
- Add sentry.profile_id by @loewenheim in [#344](https://github.com/getsentry/sentry-conventions/pull/344)
- Add http.request_method by @loewenheim in [#343](https://github.com/getsentry/sentry-conventions/pull/343)
- Add middleware.name attribute by @ericapisani in [#337](https://github.com/getsentry/sentry-conventions/pull/337)
- Add http.request.body.data attribute by @ericapisani in [#336](https://github.com/getsentry/sentry-conventions/pull/336)
- Add device.low_power_mode attribute for iOS by @itaybre in [#314](https://github.com/getsentry/sentry-conventions/pull/314)

#### Other

- Add messaging.batch.message_count by @JPeer264 in [#341](https://github.com/getsentry/sentry-conventions/pull/341)
- Add `db.redis.key` by @sentrivana in [#326](https://github.com/getsentry/sentry-conventions/pull/326)
- Add `process.command_args` by @sentrivana in [#327](https://github.com/getsentry/sentry-conventions/pull/327)

### Bug Fixes 🐛

- Align `code.function.name` description with OTel by @alexander-alderman-webb in [#335](https://github.com/getsentry/sentry-conventions/pull/335)
- Don't backfill `sentry.browser.*` attributes by @loewenheim in [#339](https://github.com/getsentry/sentry-conventions/pull/339)
- Backfill several deprecated attributes by @loewenheim in [#332](https://github.com/getsentry/sentry-conventions/pull/332)

### Internal Changes 🔧

#### Deps

- Bump black from 24.8.0 to 26.3.1 by @tobias-wilfert in [#342](https://github.com/getsentry/sentry-conventions/pull/342)
- Bump astro from 6.0.2 to 6.1.6 in /docs by @dependabot in [#330](https://github.com/getsentry/sentry-conventions/pull/330)

#### Other

- (attributes) Mark deprecated gen_ai and ai attributes as backfill by @vgrozdanic in [#333](https://github.com/getsentry/sentry-conventions/pull/333)
- (code) Undeprecate the `code.namespace` and `code.function` attributes by @alexander-alderman-webb in [#340](https://github.com/getsentry/sentry-conventions/pull/340)

## 0.5.0

### New Features ✨

#### Attributes

- Add LCP and CLS web vital report event attribute by @Lms24 in [#319](https://github.com/getsentry/sentry-conventions/pull/319)
- Deprecate app_start_cold and app_start_warm by @buenaflor in [#323](https://github.com/getsentry/sentry-conventions/pull/323)
- Add app.vitals.\* attributes for mobile performance by @buenaflor in [#313](https://github.com/getsentry/sentry-conventions/pull/313)
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
