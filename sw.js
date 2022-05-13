// SOME BROWSERS (eg. safari) DON'T TAKE IN CONSIDERATION SCRIPT IMPORTED -> VERSION 0.1.15
importScripts('sw-constants.js');
importScripts('sw-handleRequest.js');
importScripts('APPFILES.js'); // WHERE TO PUT APP DATA
self.addEventListener('install', function (event) {
  console.log('[sw ' + VERSION + '] installing…');
  event.waitUntil(
    caches.open(CACHEAPP).then(
      cache => cache.addAll(appFiles)
    ).then(async ()=>{
      try {
        var cacheFiles = await caches.open(CACHEFILES);
        var matchCacheFiles = await cacheFiles.match(new Request("/settings.json"));
        if (!matchCacheFiles)
          return true;
        var json = await matchCacheFiles.json();
        var settingsJSONRaw = await fetch(new Request("/settings.json"));
        var settingsJSON = await settingsJSONRaw.json();
        var newSettings = Object.assign({}, settingsJSON, json);
        newSettings.version = settingsJSON.version;
        await cacheFiles.put("settings.json", new Response(new Blob([JSON.stringify(newSettings)], {type: 'application/json'})));
        return await cacheFiles.match(new Request("settings.json"));
      }
      catch(e){
        console.error("PWA installation settings.json file error",e)
        return true;
      }
    })
  );
});
self.addEventListener('activate', event => {
  self.clients.claim();
  event.waitUntil(
    caches.keys().then(function (keyList) {
      return Promise.all(keyList.map(function (key) {
        if (key.startsWith(CACHEAPPBASE) && key != CACHEAPP) {
          return caches.delete(key);
        }
      }))
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