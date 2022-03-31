// SOME BROWSERS (eg. safari) DON'T TAKE IN CONSIDERATION SCRIPT IMPORTED -> VERSION 0.1.4
importScripts('sw-constants.js');
importScripts('sw-handleRequest.js');
importScripts('APPFILES.js'); // WHERE TO PUT APP DATA
self.addEventListener('install', function (event) {
  console.log('[sw ' + VERSION + '] installing…');
  event.waitUntil(
    caches.open(CACHEAPP).then(
      cache => cache.addAll(appFiles)
    ));
});
self.addEventListener('activate', event => {
  self.clients.claim();
  event.waitUntil(
    caches.keys().then(function (keyList) {
      return Promise.all(keyList.map(function (key) {
        if (key.startsWith(CACHEAPPBASE) && key != CACHEAPP) {
          return caches.delete(key);
        }
      }));
    })
  );
});
self.addEventListener('fetch', async evt => {
  var request = evt.request;
  evt.respondWith(handleRequest(request));
});
self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});