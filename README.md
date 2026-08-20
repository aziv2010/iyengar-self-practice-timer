# Iyengar Practice Timer — PWA v1.3

## New: persistent pronunciation corrections

Any edit to a pose's `Say` field is now saved automatically in a separate pronunciation dictionary.

Example:
- Vrksasana default: `Vrik, shah, sah, nah`
- User correction: `Vreek, shah, sah, nah`

Once corrected, the app will reuse `Vreek, shah, sah, nah` whenever Vrksasana is:
- already in the current sequence
- added again from the Level 1 library
- loaded through a preset
- restored after Reset Defaults

Pronunciation overrides are stored separately from the current sequence.

## Backup / restore

The Setup screen now includes:
- Export pronunciations
- Import pronunciations

Export creates `iyengar-pronunciations.json`.
This protects your corrections in case browser/PWA storage is ever cleared.

## Updating GitHub Pages

Replace the repository files with this package and commit/push them.

Then:
1. Open the hosted URL in Chrome.
2. Confirm `PWA v1.3` is shown.
3. Tap `Refresh app files`.
4. Reopen the installed PWA.

Existing local sequence/settings should remain in browser storage.
