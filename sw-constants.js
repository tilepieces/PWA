const CACHEFILES = "cacheFiles";
const CACHEDIRECTORY = "/www/";
const resourcePath = location.pathname.split("/").filter((v, i, a) => i < a.length - 1).join("/");
const CACHEPATH = location.origin + CACHEDIRECTORY;