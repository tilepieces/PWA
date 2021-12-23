importScripts('sw-constants.js');
importScripts('sw-handleRequest.js');
self.addEventListener('install', function(event) {
  console.log('[sw '+ VERSION + '] installing…');
  event.waitUntil(
  caches.open(CACHEAPP).then(
        cache=>cache.addAll(appFiles)
  ));
});
self.addEventListener('activate', event => {
  self.clients.claim();
  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key.startsWith(CACHEAPPBASE) && key!=CACHEAPP) {
          return caches.delete(key);
        }
      }));
    })
  );
});
self.addEventListener('fetch', async evt=>{
  var request = evt.request;
  evt.respondWith(handleRequest(request));
});
self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});