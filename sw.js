let cacheName = "my-first-pwa";
let contentToCache = ["/", "/index.html", "/index.css", "/js/main.js"];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
  
    e.waitUntil(
      caches.open(cacheName).then((cache) => {
        console.log('[Service Worker] Caching all: contentToChache');
  
        return cache.addAll(contentToCache);
      })
    );
  });

/* Serve cached content when offline */
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});