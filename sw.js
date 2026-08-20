const CACHE = "iyengar-practice-timer-pwa-v1-3";
const CORE = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(CORE))
  );
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("message", event => {
  if(event.data && event.data.type === "SKIP_WAITING"){
    self.skipWaiting();
  }
});

self.addEventListener("fetch", event => {
  if(event.request.method !== "GET") return;

  const isNavigation = event.request.mode === "navigate";

  if(isNavigation){
    // Always prefer the newest HTML from GitHub Pages.
    event.respondWith(
      fetch(event.request, {cache:"no-store"})
        .then(response => {
          const copy=response.clone();
          caches.open(CACHE).then(cache => cache.put("./index.html", copy));
          return response;
        })
        .catch(() => caches.match("./index.html"))
    );
    return;
  }

  // Static files: return cached copy immediately, update cache in background.
  event.respondWith(
    caches.match(event.request).then(cached => {
      const network = fetch(event.request).then(response => {
        const copy=response.clone();
        caches.open(CACHE).then(cache => cache.put(event.request, copy));
        return response;
      }).catch(() => cached);
      return cached || network;
    })
  );
});
