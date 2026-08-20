# Iyengar Practice Timer — PWA v1

This package is the Progressive Web App version of the HTML timer.

## Why this version
The local `file://` HTML page could not reliably keep the Samsung screen awake.
A hosted PWA runs from an HTTPS secure context, which is what the browser Screen Wake Lock API requires.

## Files
- `index.html`
- `manifest.webmanifest`
- `sw.js`
- `icons/icon-192.png`
- `icons/icon-512.png`

The three user-provided gong/bell sounds remain embedded directly inside `index.html`.

## Publish with GitHub Pages

1. Create a new **public** GitHub repository, for example:
   `iyengar-practice-timer`

2. Upload **all files and folders from this package to the root of the repository**.
   The repository root should show:
   - index.html
   - manifest.webmanifest
   - sw.js
   - icons/

3. In GitHub open:
   **Settings → Pages**

4. Under **Build and deployment** choose:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/(root)**

5. Save. GitHub will publish an HTTPS address, normally:
   `https://YOUR-USERNAME.github.io/iyengar-practice-timer/`

6. Open that HTTPS address in Chrome on the Samsung phone.

7. Use the app's **Install app** button, or Chrome menu:
   **Install app / Add to Home screen**

8. Launch the installed app from the phone's home screen and test that the screen remains awake during practice.

## Offline use
After the PWA has loaded once, its core files are cached by the service worker so it can open offline.

## Updates
When a newer version is uploaded to GitHub Pages, reopen the hosted page while online.
The service worker will update the cached files.

## Important Samsung test
Test a practice longer than the normal Android screen timeout without touching the phone.
The intended behavior is that the installed PWA remains visible and the display does not sleep while a practice is running.
