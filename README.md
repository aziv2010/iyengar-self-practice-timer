# Iyengar Practice Timer — PWA v1.3.1

## Critical fix from v1.3

PWA v1.3 had an initialization-order bug:
`loadState()` ran before the pronunciation override dictionary had been initialized.

That JavaScript error stopped the rest of the app initialization, which could make the
sequence area empty and prevent voice/settings controls from populating normally.

PWA v1.3.1 fixes the initialization order.

## Your existing data

The v1.3 bug occurred during page startup and did not intentionally erase localStorage.
Your previously saved sequence/settings should therefore still be present on the phone.

Pronunciation corrections remain persistent and separate:
- Edit any pose's `Say` field.
- The correction is saved for that asana.
- It is reused when the pose is added again or loaded from a preset.
- Export/Import pronunciation backup remains available.

## Deploy

Replace the GitHub repository files with this package and commit/push.

Then:
1. Open the hosted URL in Chrome.
2. Verify `PWA v1.3.1` appears under Sequence timer.
3. Tap `Refresh app files`.
4. Fully close the installed PWA.
5. Reopen it.

Do not clear site data or uninstall the PWA before checking whether your previous local
settings have returned.
