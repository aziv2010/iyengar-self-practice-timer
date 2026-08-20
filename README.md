# Iyengar Practice Timer — PWA v1.1

This fixes the duplicate preparation countdown in PWA v1.

PWA v1 inherited two mechanisms:
1. per-pose `Setup sec`
2. global `Delay after pose name`

That produced:
`Setup countdown → Get Ready countdown → pose timer`

PWA v1.1 removes the separate Setup interval completely.

The flow is now:
`Pose name spoken → one configurable countdown in the clock face → pose timer`

The single preparation control is **Delay after pose name**.

The working screen-wake behavior is unchanged.

## Update GitHub Pages
Replace the existing repository files with this package and commit/push.

The service-worker cache version has been bumped. If the installed app still shows the old behavior:
1. Open the GitHub Pages URL in Chrome while online.
2. Refresh once.
3. Close the installed PWA completely.
4. Reopen it from the home screen.

The Setup screen should display `PWA v1.1`.
