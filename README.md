# Iyengar Practice Timer — PWA v1.2

This build addresses the stale-installed-app problem seen on Samsung/Chrome.

## What happened
The live GitHub Pages site had already been updated to PWA v1.1, but the installed PWA was still running the older cached app shell. The screenshots proved this because the installed app still showed:
- no version label under Sequence timer
- a separate SETUP stage
- spoken "Prepare for"

Those elements do not exist in the current source.

## What v1.2 changes
- Adds a visible `PWA v1.2` build label.
- Adds a `Refresh app files` button under Install on phone.
- Service worker now uses **network-first** for the HTML page.
- Service worker cache version is bumped again.
- Service-worker updates use `updateViaCache: "none"`.
- New workers call `skipWaiting()` and `clients.claim()` so updates activate promptly.
- Controller changes automatically reload the app.

## Intended practice flow
`pose name spoken → one numeric preparation countdown in the clock face → pose timer`

There is no separate Setup stage and no spoken "Prepare for".

## Deploy
Replace all repository files with this package and commit/push.

Then on Samsung:
1. Open the GitHub Pages URL in Chrome while online.
2. Confirm `PWA v1.2` appears under Sequence timer.
3. Tap `Refresh app files`.
4. Close the installed PWA completely.
5. Reopen it from the home screen.

If the installed PWA still does not show v1.2, uninstall the home-screen PWA and reinstall it from the hosted URL.
