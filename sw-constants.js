importScripts('APPFILES.js'); // WHERE TO PUT APP DATA
const CACHEFILES = "cacheFiles";
const CACHEAPPBASE = "cacheApp";
const CACHEAPP = "cacheApp" + VERSION;
const CACHEDIRECTORY = "/www/";
const resourcePath = location.pathname.split("/").filter((v,i,a)=>i<a.length-1).join("/");
const CACHEPATH = location.origin + CACHEDIRECTORY;