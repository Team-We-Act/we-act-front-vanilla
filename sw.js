let cacheName = "my-first-pwa";
let contentToCache = ["/classPage.html"];


console.log('bbbb')
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
self.addEventListener('fetch', (e) => {
    e.respondWith(
      caches.match(e.request).then((r) => {
        // 캐싱된 리소스가 있다면 이를 반환
        return r || (
          // 없다면, fetch진행
          fetch(e.request)
            .then((response)=> {
              return caches
                .open(cacheName)
                .then((cache) => {
                  console.log('[Service Worker] Caching new resource: '+e.request.url);
                  // 캐시에 응답 저장
                  cache.put(e.request, response.clone());
                  // 응답 반환
                  return response;
                })
            })
        )
    })
)
})