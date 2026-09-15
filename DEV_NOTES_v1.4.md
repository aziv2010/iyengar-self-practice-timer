# Iyengar Practice Timer v1.4 — development notes

This file is intentionally added first so development can proceed in small, reviewable steps without touching the working v1.3.1 application code.

## Planned v1.4 scope

1. Configurable end-of-pose warning.
2. Insert pose at a specific location in the sequence.
3. Human-readable text sequence import/export.
4. Named saved sequences.

## Compatibility requirements

- Preserve the current v1.3.1 practice behavior.
- Preserve local pronunciation overrides and their import/export.
- Preserve wake lock behavior.
- Preserve current sequence/settings local storage unless a deliberate migration is added.
- Bump the visible app version and service-worker cache only when the release is ready.

## Development approach

Changes will be made in small commits so the code can be reviewed between stages.
