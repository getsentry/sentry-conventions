# Security Test — `.craft.env` LD_PRELOAD Injection

**This is a deliberate, sanctioned security test. It performs no data exfiltration, no network I/O, and no state mutation beyond a local trace file in /tmp.**

## Purpose

Reproduces the attack demonstrated in [getsentry/action-release#315](https://github.com/getsentry/action-release/pull/315) to verify that recent Craft hardening neutralises it:

- Craft 2.25.5 no longer reads `.craft.env` (PR #794).
- Craft strips `LD_PRELOAD` / `LD_LIBRARY_PATH` / `DYLD_*` from `process.env` at startup (PR #794).

## Payload

- `.craft.env` — sets `LD_PRELOAD=./preload.so` and `CRAFT_ATTACK_TEST_MARKER=triggered`.
- `preload.so` — minimal shared library. On load, writes to `/tmp/CRAFT_ATTACK_TRACE_<pid>.txt` and prints to stderr. No network, no read of sensitive data.
- `preload.c` — source of the .so (for audit / reproducibility).

## Expected outcome (if the fix holds)

The `changelog-preview` workflow runs `craft changelog --pr <N>` on the PR content. With Craft 2.25.5:

1. Craft **does not read** `.craft.env` → `LD_PRELOAD` is never set in `process.env` by Craft.
2. If `LD_PRELOAD` was somehow pre-set in the shell, `sanitizeDynamicLinkerEnv()` strips it at Craft startup.
3. The preload's constructor does NOT run inside any child process Craft spawns (git, etc.).
4. No `/tmp/CRAFT_ATTACK_TRACE_*.txt` files appear. No "CRAFT_ATTACK_TRACE" lines in the workflow stderr.
5. Craft emits a warning about a legacy `.craft.env` file being detected.

## Expected outcome (if the fix FAILED)

1. Craft reads `.craft.env` → populates `process.env.LD_PRELOAD=./preload.so`.
2. Every subprocess Craft spawns (git, etc.) loads `preload.so`.
3. "CRAFT_ATTACK_TRACE" appears in stderr.
4. Trace files appear in `/tmp/`.

## Cleanup

After observation, this branch is deleted and the fork is removed. No changes are ever merged.
