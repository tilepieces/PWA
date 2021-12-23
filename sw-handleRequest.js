async function handleRequest(request){
  var matchParams = request.url.match(/\?|#/);
  if(matchParams)
    request = new Request(request.url.substring(0,matchParams.index));
  var ref = request.referrer.replace(resourcePath,"");
  var url = request.url.replace(resourcePath,"");
  if(ref.startsWith(CACHEPATH) || url.startsWith(CACHEPATH)){
    if(url.endsWith("/")){
      var newRequestURL = url + "index.html";
      var response = new Response(null,{"status":302});
      response.headers.append("Location",newRequestURL);
      return response;
    }
    if(url == CACHEPATH )
      return new Response('');
    var urlToProject = url.startsWith(CACHEPATH);
    if(!urlToProject){
      var project = ref.replace(CACHEPATH,"").split("/").shift();
      newRequestURL = CACHEPATH+project+url.replace(
          location.origin,"");

      response = new Response(null,{"status":302});
      response.headers.append("Location",newRequestURL);
      return response;
      //return response.redirect(newRequestURL)
    }
    var cacheFiles = await caches.open(CACHEFILES);
    var matchCacheFiles = await cacheFiles.match(request);
    if(matchCacheFiles) {
      return matchCacheFiles;
    }
    else
      return new Response(new Blob(["[www sw] "+ url + " - Can't find the resource"]),{ "status" : 404 , "statusText" : "Error" });
  }
  else {
    var newUrl = url.replace(location.origin,"");
    var urlRelative = url.replace(location.origin+"/","");
    if(urlRelative.match(/^(settings\.json|components\.json|projects\.json)/)) {
      var cacheFiles = await caches.open(CACHEFILES);
      var matchCacheFiles = await cacheFiles.match(request);
      if(matchCacheFiles) {
        return matchCacheFiles;
      }
      else{
        var req = await fetch(new Request(newUrl));
        await cacheFiles.put(newUrl,req);
        return await cacheFiles.match(request);
      }
    }
    if(newUrl.endsWith("/"))
      request = new Request(newUrl + "index.html"); // problem in cloning the request.
    else
      request = new Request(newUrl);
    var cacheApp = await caches.open(CACHEAPP);
    var matchCacheApp = await cacheApp.match(request);
    if (matchCacheApp)
      return matchCacheApp;
    else {
      return new Response(new Blob(["[main sw] " + newUrl + " - Can't find the resource"]), {
        "status": 404,
        "statusText": "Error"
      });
    }
  }
}