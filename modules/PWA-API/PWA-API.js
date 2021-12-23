(()=>{
!function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){window.minimatch=r(1)},function(t,e,r){t.exports=g,g.Minimatch=d;var n={sep:"/"};try{n=r(2)}catch(t){}var i=g.GLOBSTAR=d.GLOBSTAR={},o=r(4),s={"!":{open:"(?:(?!(?:",close:"))[^/]*?)"},"?":{open:"(?:",close:")?"},"+":{open:"(?:",close:")+"},"*":{open:"(?:",close:")*"},"@":{open:"(?:",close:")"}},a="[^/]",u=a+"*?",c="(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?",f="(?:(?!(?:\\/|^)\\.).)*?",h="().*{}+?[]^$\\!".split("").reduce(function(t,e){return t[e]=!0,t},{});var l=/\/+/;function p(t,e){t=t||{},e=e||{};var r={};return Object.keys(e).forEach(function(t){r[t]=e[t]}),Object.keys(t).forEach(function(e){r[e]=t[e]}),r}function g(t,e,r){if("string"!=typeof e)throw new TypeError("glob pattern string required");return r||(r={}),!(!r.nocomment&&"#"===e.charAt(0))&&(""===e.trim()?""===t:new d(e,r).match(t))}function d(t,e){if(!(this instanceof d))return new d(t,e);if("string"!=typeof t)throw new TypeError("glob pattern string required");e||(e={}),t=t.trim(),"/"!==n.sep&&(t=t.split(n.sep).join("/")),this.options=e,this.set=[],this.pattern=t,this.regexp=null,this.negate=!1,this.comment=!1,this.empty=!1,this.make()}function v(t,e){if(e||(e=this instanceof d?this.options:{}),void 0===(t=void 0===t?this.pattern:t))throw new TypeError("undefined pattern");return e.nobrace||!t.match(/\{.*\}/)?[t]:o(t)}g.filter=function(t,e){return e=e||{},function(r,n,i){return g(r,t,e)}},g.defaults=function(t){if(!t||!Object.keys(t).length)return g;var e=g,r=function(r,n,i){return e.minimatch(r,n,p(t,i))};return r.Minimatch=function(r,n){return new e.Minimatch(r,p(t,n))},r},d.defaults=function(t){return t&&Object.keys(t).length?g.defaults(t).Minimatch:d},d.prototype.debug=function(){},d.prototype.make=function(){if(this._made)return;var t=this.pattern,e=this.options;if(!e.nocomment&&"#"===t.charAt(0))return void(this.comment=!0);if(!t)return void(this.empty=!0);this.parseNegate();var r=this.globSet=this.braceExpand();e.debug&&(this.debug=console.error);this.debug(this.pattern,r),r=this.globParts=r.map(function(t){return t.split(l)}),this.debug(this.pattern,r),r=r.map(function(t,e,r){return t.map(this.parse,this)},this),this.debug(this.pattern,r),r=r.filter(function(t){return-1===t.indexOf(!1)}),this.debug(this.pattern,r),this.set=r},d.prototype.parseNegate=function(){var t=this.pattern,e=!1,r=this.options,n=0;if(r.nonegate)return;for(var i=0,o=t.length;i<o&&"!"===t.charAt(i);i++)e=!e,n++;n&&(this.pattern=t.substr(n));this.negate=e},g.braceExpand=function(t,e){return v(t,e)},d.prototype.braceExpand=v,d.prototype.parse=function(t,e){if(t.length>65536)throw new TypeError("pattern is too long");var r=this.options;if(!r.noglobstar&&"**"===t)return i;if(""===t)return"";var n,o="",c=!!r.nocase,f=!1,l=[],p=[],g=!1,d=-1,v=-1,m="."===t.charAt(0)?"":r.dot?"(?!(?:^|\\/)\\.{1,2}(?:$|\\/))":"(?!\\.)",y=this;function w(){if(n){switch(n){case"*":o+=u,c=!0;break;case"?":o+=a,c=!0;break;default:o+="\\"+n}y.debug("clearStateChar %j %j",n,o),n=!1}}for(var j,x=0,A=t.length;x<A&&(j=t.charAt(x));x++)if(this.debug("%s\t%s %s %j",t,x,o,j),f&&h[j])o+="\\"+j,f=!1;else switch(j){case"/":return!1;case"\\":w(),f=!0;continue;case"?":case"*":case"+":case"@":case"!":if(this.debug("%s\t%s %s %j <-- stateChar",t,x,o,j),g){this.debug("  in class"),"!"===j&&x===v+1&&(j="^"),o+=j;continue}y.debug("call clearStateChar %j",n),w(),n=j,r.noext&&w();continue;case"(":if(g){o+="(";continue}if(!n){o+="\\(";continue}l.push({type:n,start:x-1,reStart:o.length,open:s[n].open,close:s[n].close}),o+="!"===n?"(?:(?!(?:":"(?:",this.debug("plType %j %j",n,o),n=!1;continue;case")":if(g||!l.length){o+="\\)";continue}w(),c=!0;var O=l.pop();o+=O.close,"!"===O.type&&p.push(O),O.reEnd=o.length;continue;case"|":if(g||!l.length||f){o+="\\|",f=!1;continue}w(),o+="|";continue;case"[":if(w(),g){o+="\\"+j;continue}g=!0,v=x,d=o.length,o+=j;continue;case"]":if(x===v+1||!g){o+="\\"+j,f=!1;continue}if(g){var E=t.substring(v+1,x);try{RegExp("["+E+"]")}catch(t){var T=this.parse(E,b);o=o.substr(0,d)+"\\["+T[0]+"\\]",c=c||T[1],g=!1;continue}}c=!0,g=!1,o+=j;continue;default:w(),f?f=!1:!h[j]||"^"===j&&g||(o+="\\"),o+=j}g&&(E=t.substr(v+1),T=this.parse(E,b),o=o.substr(0,d)+"\\["+T[0],c=c||T[1]);for(O=l.pop();O;O=l.pop()){var S=o.slice(O.reStart+O.open.length);this.debug("setting tail",o,O),S=S.replace(/((?:\\{2}){0,64})(\\?)\|/g,function(t,e,r){return r||(r="\\"),e+e+r+"|"}),this.debug("tail=%j\n   %s",S,S,O,o);var k="*"===O.type?u:"?"===O.type?a:"\\"+O.type;c=!0,o=o.slice(0,O.reStart)+k+"\\("+S}w(),f&&(o+="\\\\");var M=!1;switch(o.charAt(0)){case".":case"[":case"(":M=!0}for(var $=p.length-1;$>-1;$--){var C=p[$],R=o.slice(0,C.reStart),L=o.slice(C.reStart,C.reEnd-8),_=o.slice(C.reEnd-8,C.reEnd),P=o.slice(C.reEnd);_+=P;var N=R.split("(").length-1,z=P;for(x=0;x<N;x++)z=z.replace(/\)[+*?]?/,"");var B="";""===(P=z)&&e!==b&&(B="$"),o=R+L+P+B+_}""!==o&&c&&(o="(?=.)"+o);M&&(o=m+o);if(e===b)return[o,c];if(!c)return function(t){return t.replace(/\\(.)/g,"$1")}(t);var G=r.nocase?"i":"";try{var I=new RegExp("^"+o+"$",G)}catch(t){return new RegExp("$.")}return I._glob=t,I._src=o,I};var b={};g.makeRe=function(t,e){return new d(t,e||{}).makeRe()},d.prototype.makeRe=function(){if(this.regexp||!1===this.regexp)return this.regexp;var t=this.set;if(!t.length)return this.regexp=!1,this.regexp;var e=this.options,r=e.noglobstar?u:e.dot?c:f,n=e.nocase?"i":"",o=t.map(function(t){return t.map(function(t){return t===i?r:"string"==typeof t?function(t){return t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")}(t):t._src}).join("\\/")}).join("|");o="^(?:"+o+")$",this.negate&&(o="^(?!"+o+").*$");try{this.regexp=new RegExp(o,n)}catch(t){this.regexp=!1}return this.regexp},g.match=function(t,e,r){var n=new d(e,r=r||{});return t=t.filter(function(t){return n.match(t)}),n.options.nonull&&!t.length&&t.push(e),t},d.prototype.match=function(t,e){if(this.debug("match",t,this.pattern),this.comment)return!1;if(this.empty)return""===t;if("/"===t&&e)return!0;var r=this.options;"/"!==n.sep&&(t=t.split(n.sep).join("/"));t=t.split(l),this.debug(this.pattern,"split",t);var i,o,s=this.set;for(this.debug(this.pattern,"set",s),o=t.length-1;o>=0&&!(i=t[o]);o--);for(o=0;o<s.length;o++){var a=s[o],u=t;if(r.matchBase&&1===a.length&&(u=[i]),this.matchOne(u,a,e))return!!r.flipNegate||!this.negate}return!r.flipNegate&&this.negate},d.prototype.matchOne=function(t,e,r){var n=this.options;this.debug("matchOne",{this:this,file:t,pattern:e}),this.debug("matchOne",t.length,e.length);for(var o=0,s=0,a=t.length,u=e.length;o<a&&s<u;o++,s++){this.debug("matchOne loop");var c,f=e[s],h=t[o];if(this.debug(e,f,h),!1===f)return!1;if(f===i){this.debug("GLOBSTAR",[e,f,h]);var l=o,p=s+1;if(p===u){for(this.debug("** at the end");o<a;o++)if("."===t[o]||".."===t[o]||!n.dot&&"."===t[o].charAt(0))return!1;return!0}for(;l<a;){var g=t[l];if(this.debug("\nglobstar while",t,l,e,p,g),this.matchOne(t.slice(l),e.slice(p),r))return this.debug("globstar found match!",l,a,g),!0;if("."===g||".."===g||!n.dot&&"."===g.charAt(0)){this.debug("dot detected!",t,l,e,p);break}this.debug("globstar swallow a segment, and continue"),l++}return!(!r||(this.debug("\n>>> no match, partial?",t,l,e,p),l!==a))}if("string"==typeof f?(c=n.nocase?h.toLowerCase()===f.toLowerCase():h===f,this.debug("string match",f,h,c)):(c=h.match(f),this.debug("pattern match",f,h,c)),!c)return!1}if(o===a&&s===u)return!0;if(o===a)return r;if(s===u)return o===a-1&&""===t[o];throw new Error("wtf?")}},function(t,e,r){(function(t){function r(t,e){for(var r=0,n=t.length-1;n>=0;n--){var i=t[n];"."===i?t.splice(n,1):".."===i?(t.splice(n,1),r++):r&&(t.splice(n,1),r--)}if(e)for(;r--;r)t.unshift("..");return t}function n(t,e){if(t.filter)return t.filter(e);for(var r=[],n=0;n<t.length;n++)e(t[n],n,t)&&r.push(t[n]);return r}e.resolve=function(){for(var e="",i=!1,o=arguments.length-1;o>=-1&&!i;o--){var s=o>=0?arguments[o]:t.cwd();if("string"!=typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(e=s+"/"+e,i="/"===s.charAt(0))}return(i?"/":"")+(e=r(n(e.split("/"),function(t){return!!t}),!i).join("/"))||"."},e.normalize=function(t){var o=e.isAbsolute(t),s="/"===i(t,-1);return(t=r(n(t.split("/"),function(t){return!!t}),!o).join("/"))||o||(t="."),t&&s&&(t+="/"),(o?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(n(t,function(t,e){if("string"!=typeof t)throw new TypeError("Arguments to path.join must be strings");return t}).join("/"))},e.relative=function(t,r){function n(t){for(var e=0;e<t.length&&""===t[e];e++);for(var r=t.length-1;r>=0&&""===t[r];r--);return e>r?[]:t.slice(e,r-e+1)}t=e.resolve(t).substr(1),r=e.resolve(r).substr(1);for(var i=n(t.split("/")),o=n(r.split("/")),s=Math.min(i.length,o.length),a=s,u=0;u<s;u++)if(i[u]!==o[u]){a=u;break}var c=[];for(u=a;u<i.length;u++)c.push("..");return(c=c.concat(o.slice(a))).join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!=typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),r=47===e,n=-1,i=!0,o=t.length-1;o>=1;--o)if(47===(e=t.charCodeAt(o))){if(!i){n=o;break}}else i=!1;return-1===n?r?"/":".":r&&1===n?"/":t.slice(0,n)},e.basename=function(t,e){var r=function(t){"string"!=typeof t&&(t+="");var e,r=0,n=-1,i=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!i){r=e+1;break}}else-1===n&&(i=!1,n=e+1);return-1===n?"":t.slice(r,n)}(t);return e&&r.substr(-1*e.length)===e&&(r=r.substr(0,r.length-e.length)),r},e.extname=function(t){"string"!=typeof t&&(t+="");for(var e=-1,r=0,n=-1,i=!0,o=0,s=t.length-1;s>=0;--s){var a=t.charCodeAt(s);if(47!==a)-1===n&&(i=!1,n=s+1),46===a?-1===e?e=s:1!==o&&(o=1):-1!==e&&(o=-1);else if(!i){r=s+1;break}}return-1===e||-1===n||0===o||1===o&&e===n-1&&e===r+1?"":t.slice(e,n)};var i="b"==="ab".substr(-1)?function(t,e,r){return t.substr(e,r)}:function(t,e,r){return e<0&&(e=t.length+e),t.substr(e,r)}}).call(this,r(3))},function(t,e){var r,n,i=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(t){if(r===setTimeout)return setTimeout(t,0);if((r===o||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0);try{return r(t,0)}catch(e){try{return r.call(null,t,0)}catch(e){return r.call(this,t,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:o}catch(t){r=o}try{n="function"==typeof clearTimeout?clearTimeout:s}catch(t){n=s}}();var u,c=[],f=!1,h=-1;function l(){f&&u&&(f=!1,u.length?c=u.concat(c):h=-1,c.length&&p())}function p(){if(!f){var t=a(l);f=!0;for(var e=c.length;e;){for(u=c,c=[];++h<e;)u&&u[h].run();h=-1,e=c.length}u=null,f=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function g(t,e){this.fun=t,this.array=e}function d(){}i.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];c.push(new g(t,e)),1!==c.length||f||a(p)},g.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=d,i.addListener=d,i.once=d,i.off=d,i.removeListener=d,i.removeAllListeners=d,i.emit=d,i.prependListener=d,i.prependOnceListener=d,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(t,e,r){var n=r(5),i=r(6);t.exports=function(t){if(!t)return[];"{}"===t.substr(0,2)&&(t="\\{\\}"+t.substr(2));return function t(e,r){var o=[];var s=i("{","}",e);if(!s||/\$$/.test(s.pre))return[e];var u=/^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(s.body);var c=/^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(s.body);var h=u||c;var v=s.body.indexOf(",")>=0;if(!h&&!v)return s.post.match(/,.*\}/)?(e=s.pre+"{"+s.body+a+s.post,t(e)):[e];var b;if(h)b=s.body.split(/\.\./);else{if(1===(b=function t(e){if(!e)return[""];var r=[];var n=i("{","}",e);if(!n)return e.split(",");var o=n.pre;var s=n.body;var a=n.post;var u=o.split(",");u[u.length-1]+="{"+s+"}";var c=t(a);a.length&&(u[u.length-1]+=c.shift(),u.push.apply(u,c));r.push.apply(r,u);return r}(s.body)).length)if(1===(b=t(b[0],!1).map(l)).length)return(y=s.post.length?t(s.post,!1):[""]).map(function(t){return s.pre+b[0]+t})}var m=s.pre;var y=s.post.length?t(s.post,!1):[""];var w;if(h){var j=f(b[0]),x=f(b[1]),A=Math.max(b[0].length,b[1].length),O=3==b.length?Math.abs(f(b[2])):1,E=g;x<j&&(O*=-1,E=d);var T=b.some(p);w=[];for(var S=j;E(S,x);S+=O){var k;if(c)"\\"===(k=String.fromCharCode(S))&&(k="");else if(k=String(S),T){var M=A-k.length;if(M>0){var $=new Array(M+1).join("0");k=S<0?"-"+$+k.slice(1):$+k}}w.push(k)}}else w=n(b,function(e){return t(e,!1)});for(var C=0;C<w.length;C++)for(var R=0;R<y.length;R++){var L=m+w[C]+y[R];(!r||h||L)&&o.push(L)}return o}(function(t){return t.split("\\\\").join(o).split("\\{").join(s).split("\\}").join(a).split("\\,").join(u).split("\\.").join(c)}(t),!0).map(h)};var o="\0SLASH"+Math.random()+"\0",s="\0OPEN"+Math.random()+"\0",a="\0CLOSE"+Math.random()+"\0",u="\0COMMA"+Math.random()+"\0",c="\0PERIOD"+Math.random()+"\0";function f(t){return parseInt(t,10)==t?parseInt(t,10):t.charCodeAt(0)}function h(t){return t.split(o).join("\\").split(s).join("{").split(a).join("}").split(u).join(",").split(c).join(".")}function l(t){return"{"+t+"}"}function p(t){return/^-?0\d/.test(t)}function g(t,e){return t<=e}function d(t,e){return t>=e}},function(t,e){t.exports=function(t,e){for(var n=[],i=0;i<t.length;i++){var o=e(t[i],i);r(o)?n.push.apply(n,o):n.push(o)}return n};var r=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},function(t,e,r){"use strict";function n(t,e,r){t instanceof RegExp&&(t=i(t,r)),e instanceof RegExp&&(e=i(e,r));var n=o(t,e,r);return n&&{start:n[0],end:n[1],pre:r.slice(0,n[0]),body:r.slice(n[0]+t.length,n[1]),post:r.slice(n[1]+e.length)}}function i(t,e){var r=e.match(t);return r?r[0]:null}function o(t,e,r){var n,i,o,s,a,u=r.indexOf(t),c=r.indexOf(e,u+1),f=u;if(u>=0&&c>0){for(n=[],o=r.length;f>=0&&!a;)f==u?(n.push(f),u=r.indexOf(t,f+1)):1==n.length?a=[n.pop(),c]:((i=n.pop())<o&&(o=i,s=c),c=r.indexOf(e,f+1)),f=u<c&&u>=0?u:c;n.length&&(a=[o,s])}return a}t.exports=n,n.range=o}]);
const VERSION = "0.0.44";
const CACHEFILES = "cacheFiles";
const CACHEAPPBASE = "cacheApp";
const CACHEAPP = "cacheApp" + VERSION;
const CACHEDIRECTORY = "/www/";
const resourcePath = location.pathname.split("/").filter((v,i,a)=>i<a.length-1).join("/");
const CACHEPATH = location.origin + CACHEDIRECTORY;
const appFiles = [
  "/_sw_test_1.html",
  "/_sw_test_2.html",
  "/src/utils/swStart.js",
  "/test-js.js",
  "/index.html",
  "/index2.html",
  "/test.js",
  "/cache_API.js"
];
async function copy(path,newPath,move = false){
    path = path ?
        path[0] == "/" ? path : "/" + path :
        "";
    newPath = newPath ?
    newPath[0] == "/" ? newPath : "/" + newPath :
    "";
    await swStart();
    var splitPath = path.split("/");
    var resourceName = splitPath.pop();
    //newPath = newPath ? newPath + "/" + resourceName : resourceName;
    var isdir = await isDir(path);
    if (isdir){
        await update(newPath);
        var pathsToDelete = [];
        pathsToDelete.push(path);
        var dirFiles = await getFiles(path);
        dirFiles.sort((b, a)=>{ // sort from the superficial one to the deep level
            return b.path.split("/").length - a.path.split("/").length ;
        });
        for(var i = 0;i<dirFiles.length;i++){
            var file = dirFiles[i];
            var newRelativePath = file.path.replace(path,newPath);
            var wasThisPathADir = await isDir(file.path);
            var value = null;
            if(!wasThisPathADir) {
                var filePath = file.path[0] == "/" ? file.path : "/" + file.path;
                var bodyReq = await caches.match(CACHEPATH + tilepieces.currentProject + filePath);
                value = await bodyReq.blob();
            }
            await update(newRelativePath,value);
            move && pathsToDelete.push(file.path);
        }
        if(move)
            for(var p=0;p<pathsToDelete.length;p++)
                await del(pathsToDelete[p]);
    } // file case
    else{
        await update(newPath,await read(path));
        if(move)
            await del(path);
    }
    if(move){
        var parentDirectory = splitPath.length ? "/" + splitPath.join("/") : "";
        var parentDirectoryRes = await read(parentDirectory);
        var parentDirectoryData = parentDirectoryRes.value;
        delete parentDirectoryData[resourceName];
        var newParentDirectory = new Blob([JSON.stringify(parentDirectoryData)], {type: 'application/json'});
        var cache = await caches.open(CACHEFILES);
        await cache.put(CACHEPATH + tilepieces.currentProject + parentDirectory.replace(/\/\//g,"/"),
            new Response(newParentDirectory));
    }
    return {
        path:newPath,
        result:1
    }
}
async function create(projectName){
  var refSw = await swStart();
  var cacheFiles = await caches.open(CACHEFILES);
  var projectPath = CACHEPATH + projectName;
  var projects = await fetch("/projects.json");
  var newEntry = {name:projectName,path:projectPath.replace(location.origin + "/","")};
  var projectsBlob;
  var projectJson = await projects.json();
  var pAlreadyPresentIndex = projectJson.findIndex(v=>v.name == projectName);
  if(pAlreadyPresentIndex>-1)
      projectJson.splice(pAlreadyPresentIndex,1);
  projectJson.push(newEntry);
  projectsBlob = new Blob([JSON.stringify(projectJson)], {type: 'application/json'});
  await cacheFiles.put("/projects.json", new Response(projectsBlob));
  var schema = await cacheFiles.match(new Request(projectPath));
  if(schema){
      schema = await schema.json();
  }
  else{
      await cacheFiles.put(projectPath, new Response(new Blob(["{}"], {type: 'application/json'})));
      schema = {};
  }
  tilepieces.currentProject = projectName;
  var innerProjectConfPath = projectPath + "/tilepieces.project.json";
  var innerProjectConf = await cacheFiles.match(new Request(innerProjectConfPath));
  if(!innerProjectConf)
    await update("tilepieces.project.json",
      new Blob([JSON.stringify({name:projectName,components:{}},null,2)],
        {type: 'application/json'}));
  return{
      name : projectName,
      schema
  }
}
async function createComponent(newSettings,files = []){
  var refSw = await swStart();
  // get top components, projects and settings
  var cacheFiles = await caches.open(CACHEFILES);
  var components = await readComponents();
  var component = newSettings.component;
  var projects = await readProjects();
  var settingsCacheFile = await fetch("/settings.json");
  var globalSettings = await settingsCacheFile.json();
  console.log("enter " , newSettings , " creation. local -> " + newSettings.local)
  if(newSettings.local){
    // getting currentProject
    var project = projects.find(p=>p.name == tilepieces.currentProject);
    if(!project.components)
        project.components = {};
    component.path = component.path ? slashDir(component.path) :
        ("/" + (project.componentPath || globalSettings.componentPath) + "/" + component.name);
    // save the component json
    var componentPathJSON = component.path + "/tilepieces.component.json";
    var currentJson;
    try {
      var currentJsonRaw = await read(componentPathJSON)
      currentJson = JSON.parse(currentJsonRaw);
    }
    catch(e){}
    var componentToSave = Object.assign({},component);
    if(currentJson)
      componentToSave.components = currentJson.components;
    if(!componentToSave.components)
      componentToSave.components = {};
    delete componentToSave.path;
    await update(componentPathJSON,
      new Blob([JSON.stringify(componentToSave,null,2)]));
    console.log("saving ->", componentPathJSON, componentToSave);
    // now save the 'upper' json: if subcomponent, we save the reference to the component in the parent component. Else, we save in the main project json
    var nameSplitted = component.name.split("/")
    var isSubComponent = nameSplitted.length > 1;
    if(isSubComponent){
      console.log("is sub component");
      nameSplitted.pop();
      var isComponent = components[project.name];
      if(isComponent){
        project.components[project.name] = Object.assign({}, isComponent);
        project.components[project.name].path = "";
      }
      var openComponents = await readComponentsInner(project.components,project.path + "/");
      var componentsFlat = getComponentsFlat(openComponents);
      var parent = componentsFlat[nameSplitted.join("/")]
      if (!parent.components ||
        typeof parent.components !== "object" ||
        Array.isArray(parent.components)) {
        parent.components = {}
      }
      parent.components[component.name] =
        {name:component.name,
          path:component.path};
      for(var k in parent.components){
        var newObj = {};
        var pc = parent.components[k];
        newObj.path = pc.path.replace(parent.path,"");
        newObj.name = pc.name;
        parent.components[k] = newObj;
      }
      var getParentJsonPath = parent.path
        + "/tilepieces.component.json";
      delete parent.path;
      await update(getParentJsonPath,JSON.stringify(parent,null,2));
      console.log("saving ->", getParentJsonPath, parent);
    }
    else{
      console.log("is not sub component");
      if (!project.components ||
        typeof project.components !== "object" ||
        Array.isArray(project.components)) {
        project.components = {}
      }
      project.components[component.name] = {name:component.name,path:component.path}
      delete project.path;
      await update("/tilepieces.project.json",
        JSON.stringify(project, null, 2));
      console.log("saving ->", "/tilepieces.project.json", project);
    }
  }
  else{
    // if path is not provided, maybe it is current Proj?
    component.path = component.path ||
        projects.find(v=>v.name == tilepieces.currentProject).path;
    components[component.name] = {name:component.name,path:component.path};
    var componentToSave = Object.assign({},component);
    for(var k in componentToSave.components){
      var c = componentToSave.components[k];
      componentToSave.components[k] = {name:c.name,path:c.path}
    }
    delete componentToSave.path;
    await cacheFiles.put(component.path + "/tilepieces.component.json",
      new Response(new Blob([JSON.stringify(componentToSave,null,2)], {type: 'application/json'})));
    var dir = await cacheFiles.match(new Request(component.path));
    var jsonDir = dir ? await dir.json() : {};
    jsonDir["tilepieces.component.json"] = "tilepieces.component.json";
    await cacheFiles.put(component.path,
      new Response(new Blob([JSON.stringify(jsonDir,null,2)], {type: 'application/json'})));
    var newComponents = Object.assign({},components);
    for(var k in newComponents){
      var c = newComponents[k];
      newComponents[k] = {name:c.name,path:c.path}
    }
    await cacheFiles.put("/components.json",
      new Response(new Blob([JSON.stringify(newComponents,null,2)], {type: 'application/json'})));
  }
  for(var i = 0;i<files.length;i++){
      var fileData = files[i];
      var componentRootPath = slashDir(component.path);
      if(!newSettings.local) {
          var responseRoot = await cacheFiles.match(new Request(componentRootPath));
          if (!responseRoot)
              await cacheFiles.put(componentRootPath, new Response(new Blob(["{}"], {type: 'application/json'})));
      }
      var newPath = newSettings.local ?
          component.path + slashDir(fileData.path) :
          fileData.path.replace(component.name,"");
      await update(slashDir(newPath),fileData.blob,!newSettings.local ? component.name : null)
  }
  return {};
}
async function del(path,project,component){
    project = project || tilepieces.currentProject;
    await swStart();
    var cache = await caches.open(CACHEFILES);
    var parentDirectoryAsArray = path.split("/");
    var name = parentDirectoryAsArray.pop();
    var parentDirectory = parentDirectoryAsArray.length ? parentDirectoryAsArray.join("/") : "";
    var isdir = await isDir(path,component,component ? null : project);
    if (isdir) {
        var dirFiles = await getFiles(path,component,component ? null : project);
        dirFiles.sort((a, b)=> { // sort from the deep level to the superficial one, to avoiding to delete the directory before its subfolders and files
            return b.path.split("/").length - a.path.split("/").length;
        });
        for (var i = 0; i < dirFiles.length; i++)
            await deletePath(cache,
                component? null : project,
                dirFiles[i].path,
                component
            )
    }
    var parentDirectoryRes = await read(parentDirectory,component,component ? null : project);
    var parentDirectoryData = parentDirectoryRes.value;
    delete parentDirectoryData[name];
    var newParentDirectory = new Blob([JSON.stringify(parentDirectoryData)], {type: 'application/json'});
    parentDirectory = parentDirectory ?
        parentDirectory[0] == "/" ? parentDirectory : "/" + parentDirectory :
        "";
    if(component){
        var components = await fetch("/components.json");
        components = components ? await components.json() : {};
        var componentPath = (components[component].path.indexOf('http://') === 0 ||
        components[component].path.indexOf('https://') === 0) ?
            components[component].path :
            slashDir(components[component].path);
    }
    var pathWhereToDelete = component ? componentPath : CACHEPATH + project;
    await cache.put(pathWhereToDelete + parentDirectory.replace(/\/\//g,"/"),
        new Response(newParentDirectory));
    await deletePath(cache, component? null : project, path,component);
    if((!path || path == "/") && !component){
        var projectsMatch = await fetch("/projects.json");
        var projectJson = await projectsMatch.json();
        var pAlreadyPresentIndex = projectJson.findIndex(v=>v.name == project);
        projectJson.splice(pAlreadyPresentIndex,1);
        var projectsBlob = new Blob([JSON.stringify(projectJson)], {type: 'application/json'});
        await cache.put("/projects.json", new Response(projectsBlob));
        var componentsMatch = await cache.match(new Request("/components.json"));
        var components = await componentsMatch.json();
        if(components[project]){
            delete components[project];
            var compsBlob = new Blob([JSON.stringify(components)], {type: 'application/json'});
            await cache.put("/components.json", new Response(compsBlob));
        }
    }
    return{path};
}
async function deleteComponent(newSettings) {
  await swStart();
  var cache = await caches.open(CACHEFILES);
  var components = await readComponents();
  var component = newSettings.component;
  if (newSettings.local) {
    var projects = await readProjects();
    var project = projects.find(v=>v.name == tilepieces.currentProject);
    var currentComponent = Object.values(components).find(c=>c.path == project.path);
    var isSavedComponent = false;
    if (!project.components || typeof project.components !== "object" || Array.isArray(project.components)) {
        project.components = {}
    }
    var nameSplitted = component.name.split("/")
    var isSubComponent = nameSplitted.length > 1;
    var parentComponentIsCurrentComponent = currentComponent && nameSplitted.length == 2 && nameSplitted[0] == currentComponent.name;
    var deletedPath = null;
    for(var k in project.components)
      if(k == component.name) {
        if(newSettings.deleteFiles){
          deletedPath = await del(project.components[k].path);
        }
        delete project.components[k];
      }
    if(currentComponent){
      for(var ki in currentComponent.components)
        if(ki == component.name) {
          if(newSettings.deleteFiles && !deletedPath){
            await del(currentComponent.components[ki].path);
          }
          delete currentComponent.components[ki];
          isSavedComponent = true;
        }
    }
    if(!isSubComponent) {
      var projectToSave = Object.assign({}, project);
      delete projectToSave.path;
      // update project data
      await update("tilepieces.project.json",
        JSON.stringify(projectToSave, null, 2));
    }
    else if(!parentComponentIsCurrentComponent){ // save the correct record in the parent component
      var openComponents = await readComponentsInner(project.components,project.path + "/");
      var componentsFlat = getComponentsFlat(openComponents);
      var pathToDelete = componentsFlat[nameSplitted.join("/")].path;
      nameSplitted.pop();
      var pathParent = componentsFlat[nameSplitted.join("/")].path;
      if(newSettings.deleteFiles){
        console.log("delete component at path " + newSettings.deleteFiles);
        await del(pathToDelete);
      }
      var getParentJsonPath = pathParent + "/tilepieces.component.json";
      var getParentJsonRaw = await read(getParentJsonPath);
      var getParentJson = JSON.parse(getParentJsonRaw);
      delete getParentJson.components[component.name]
      await update(getParentJsonPath,JSON.stringify(getParentJson,null,2));
    }
    // save the main component json
    var componentToSave = Object.assign({},currentComponent);
    for(var k in componentToSave.components){
      var c = componentToSave.components[k];
      componentToSave.components[k] = {name:c.name,path:c.path}
    }
    delete componentToSave.path;
    isSavedComponent && await cache.put(project.path + "/tilepieces.component.json",
      new Response(new Blob([JSON.stringify(componentToSave,null,2)], {type: 'application/json'})));
  }
  else {
    if (components[component.name]) {
      if(newSettings.deleteFiles){
        await del("",null,component.name);
      }
      delete components[component.name];
    }
    var newComponents = Object.assign({},components);
    for(var k in newComponents){
      var c = newComponents[k];
      newComponents[k] = {name:c.name,path:c.path}
    }
    await cache.put("/components.json",
        new Response(new Blob([JSON.stringify(newComponents)], {type: 'application/json'})));
  }
}
async function getSettings(){
  await swStart();
  var settings = {};
  var cache = await caches.open(CACHEFILES);
  var globalSettings = await fetch("/settings.json");
  settings.globalSettings = await globalSettings.json();
  settings.projects = await readProjects();
  var components = await readComponents();
  for(var projectsI = 0;projectsI<settings.projects.length;projectsI++){
    var project = settings.projects[projectsI];
    project.localComponents = {};
    var isComponent = components[project.name];
    project.isComponent = isComponent && Object.assign({},isComponent);
    project.componentPackage = project.isComponent;
    if(project.isComponent) {
      project.components[project.name] = Object.assign({}, isComponent);
      project.components[project.name].path = "";
    }
    project.localComponents = await readComponentsInner(project.components,project.path + "/");
    if(project.isComponent)
      delete project.isComponent.path;
    delete project.path;
    project.components = project.localComponents;
    project.componentsFlat = getComponentsFlat(project.localComponents);
    project.localComponents[project.name] && delete project.localComponents[project.name].path;
  }
  for(var k in components)
    delete components[k].path
  settings.components = components;
  return {settings};
}
function read(path,component,project,raw = false){
  return new Promise(async (resolve,reject)=> {
    try {
      await swStart();
      var proxyToComp = component && !project;
      var cache = await caches.open(CACHEFILES);
      if(proxyToComp){
          var components = await fetch("/components.json");
          components = components ? await components.json() : {};
      }
      project = project || tilepieces.currentProject;
      path = path ? path[0] == "/" ? path : "/" + path : "";
      if (path.endsWith("/"))
          path = path.slice(0, path.length - 1);
      try {
        var isdir = await isDir(path, component, component ? null : project);
      }
      catch(e){}
      var componentPath = proxyToComp && components[component].path;
      var proxyPath = proxyToComp ?
          (componentPath.indexOf('http://') === 0 || componentPath.indexOf('https://') === 0) ?
              componentPath + path :
              ("/" + componentPath + path).replace(/\/\//g,"/") :
          CACHEPATH + (project + path).replace(/\/\//g,"/");
      var responseObj = await cache.match(new Request(proxyPath));
      if (responseObj) {
          if (raw)
              return resolve(responseObj);
          contentTypeRepresentation(responseObj.headers.get('Content-Type'), responseObj)
              .then(res=> {
                  if (isdir) {
                    var json = JSON.parse(res);
                    var dirs = [];
                    var files = [];
                    var objDir = {};
                    for (const [key, value] of Object.entries(json)) {
                        if (typeof value == "object")
                            dirs.push({key, value});
                        else
                            files.push({key, value})
                    }
                    dirs.sort((a, b)=>a.key.localeCompare(b.key))
                        .forEach(v=>objDir[v.key] = {});
                    files.sort((a, b)=>a.key.localeCompare(b.key))
                        .forEach(v=>objDir[v.key] = v.value);
                    resolve({value:objDir,path});
                  }
                  else resolve(res)
              }, reject);
      }
      else
          reject({
              path,
              proxyPath,
              error: "not found",
              component,
              project
          })
    }
    catch(e){reject(e)}
  })
}
async function search(dir,match = [],rgFile=null,componentName = null,projectName = ""){
    await swStart();
    projectName = componentName ? null : projectName || tilepieces.currentProject;
    dir = dir[0] == "/" ? dir : "/" + dir;
    dir = dir.endsWith("/") ? dir : dir + "/";
    var matches = Array.isArray(match) ? match : [match];
    var files = [], searchResult = [];
    for(var i=0;i<matches.length;i++){
        var search = matches[i];
        var path = dir + search;
        var isdir;
        try {
            isdir = await isDir(path,componentName,projectName);
        }
        catch(e){}
        if(isdir) {
            var newFiles = await getFiles(path,componentName,projectName);
            files = files.concat(newFiles.filter(v=>v.type=="file").map(v=>v.path));
            continue;
        }
        var fileRead;
        try{
            fileRead = await read(path,componentName,projectName);
        }
        catch(e){}
        if(fileRead){
            files.push(path);
            continue;
        }
        var allFiles = await getFiles(dir,componentName,projectName);
        allFiles = allFiles.filter(v=>v.type=="file").map(v=>v.path);
        for(var ind = 0;ind<allFiles.length;ind++){
            var file = allFiles[ind];
            if(file[0] == "/"){
                file = file.slice(1)
            }
            var globFile = window.minimatch(file, search);
            if(globFile)
                files.push(file)
        }
    }
    if(rgFile){
        var rg = new RegExp(rgFile.pattern, rgFile.flags);
        for(var fileIndex = 0;fileIndex<files.length;fileIndex++){
            var filePath = files[fileIndex];
            try {
                var fileContent = await read(filePath,componentName,projectName,true);
            }
            catch(e){
                console.error("[search] a path ",filePath," not found.");
                continue;
            }
            var text = await fileContent.text();
            if(text.match(rg))
                searchResult.push(filePath.startsWith("/") ? filePath.slice(1) : filePath )
            }
    }
    else searchResult = files.map(v=>{
        if(v.startsWith("/"))
            return v.slice(1);
        return v;
    });
    return {searchResult}
}
async function setSettings(newSettings){
    await swStart();
    var cacheApp = await caches.open(CACHEFILES);
    var globalSettings = await fetch("/settings.json");
    var oldSettings = await globalSettings.json();
    var projects = await readProjects();
    var project = projects.find(v=>v.name == tilepieces.currentProject);
    if(newSettings.projectSettings){
        project = Object.assign(project,newSettings.projectSettings);
        await cacheApp.put((project.path + "/tilepieces.project.json").replace(/\/\//g,"/"),
            new Response(new Blob([JSON.stringify(project)], {type: 'application/json'})));
    }
  // this keys must not be updated
    if(newSettings.settings) {
        delete newSettings.settings.workspace;
        delete newSettings.settings.components;
        delete newSettings.settings.trash;
        delete newSettings.settings.applicationName;
        delete newSettings.settings.controllersInterface;
        var settings = Object.assign(oldSettings,newSettings.settings);
        //console.log(settings,oldSettings,newSettings)
        await cacheApp.put("/settings.json",
            new Response(new Blob([JSON.stringify(settings)], {type: 'application/json'})));
    }
    return {}
}
async function update(path,blob,component){
    if(!tilepieces.currentProject)
        throw "[update]Invalid call: no tilepieces.project setted";
    await swStart();
    var parentDirectoryAsArray = path.split("/");
    var name = parentDirectoryAsArray.pop();
    var parentDirectory = parentDirectoryAsArray.length ? parentDirectoryAsArray.join("/") : "";
    try {
        var parentDirectoryRes = await read(parentDirectory,component);
    }
    catch(e){ // if not exists, create it
        if(e.error != "not found")
            throw e;
        for(var i = 0;i<parentDirectoryAsArray.length;i++){
            var upParentDirectory = parentDirectoryAsArray.filter((v,index)=>index<=i).join("/");
            try {
                parentDirectoryRes = await read(upParentDirectory,component);
            }
            catch(e){
                if(e.error != "not found")
                    throw e;
                parentDirectoryRes = null;
                await update(upParentDirectory,null,component)
            }
        }
    }
    if(path[0] != "/")
        path = "/" + path;
    var file,isDirectory;
    // update the resource
    if(typeof blob == "undefined" || blob === false || blob === null){
        isDirectory = true;
        file = new File(["{}"], name, {
            type: "application/json"
        });
    }
    else{
        isDirectory = false;
        file = new File([blob], name, {
            type: contentTypes[path.split(".").pop()] || "text/plain"
        });
    }
    var cache = await caches.open(CACHEFILES);
    //add directory
    parentDirectoryRes = parentDirectoryRes || await read(parentDirectory,component);
    var parentDirectoryData = parentDirectoryRes.value;
    parentDirectoryData[name] = isDirectory ? {} : name;
    var newParentDirectory = new Blob([JSON.stringify(parentDirectoryData)], {type: 'application/json'});
    parentDirectory = parentDirectory ?
        parentDirectory[0] == "/" ? parentDirectory : "/" + parentDirectory :
        "";
    if(component){
        var components = await fetch("/components.json");
        components = components ? await components.json() : {};
        var componentPath = (components[component].path.indexOf('http://') === 0 || components[component].path.indexOf('https://') === 0) ?
            components[component].path :
            slashDir(components[component].path);
    }
    var pathWhereToPut = component ? componentPath : CACHEPATH + tilepieces.currentProject;
    await cache.put(pathWhereToPut + parentDirectory.replace(/\/\//g,"/"),
        new Response(newParentDirectory));
    // add file
    var newPath = pathWhereToPut + path;
    await cache.put(newPath, new Response(file));
    window.dispatchEvent(new CustomEvent("tilepieces-file-updating",{detail:{
        path,
        isDirectory
    }}));
    return {path: newPath};
}
window.storageInterface = {
    create,
    delete:del,
    read,
    update,
    copy,
    search,
    getFiles,
    createComponent,
    deleteComponent,
    getSettings,
    setSettings,
    isDir
}
if(window.tilepieces) {
    window.tilepieces.storageInterface = storageInterface;
    window.tilepieces.imageTypeProcess = 0;
}

const contentTypeRepresentation = (type,response)=>{
  if(!type)
    return false;
  return new Promise((res,rej)=>{
    if(
      type.startsWith("text/") ||
      type.startsWith("application/xml") ||
      type.startsWith("application/xhtml+xml") ||
      type.startsWith("application/json") ||
      type.indexOf("+xml")>-1
    )
      response.text().then(res,rej);
    else
      response.blob().then(res,rej);
  })
};
const contentTypes = {
    "html" : "text/html;charset=UTF-8",
    "css" : "text/css;charset=UTF-8",
    "js" : "text/javascript;charset=UTF-8",
    "jpg" : "image/jpeg",
    "jpeg" : "image/jpeg",
    "gif" : "image/gif",
    "png" : "image/png",
    "svg" : "image/svg+xml",
    "webp" : "image/webp",
    "ico" : "image/x-icon",
    "collection":"font/collection",
    "otf" :"font/otf",
    "sfnt"	:"font/sfnt",
    "ttf":	"font/ttf",
    "woff":"font/woff",
    "woff2":"font/woff2",
    "json" : "application/json;charset=UTF-8",
    "mp3" : "audio/mpeg",
    "ogg" : "video/ogg",
    "mp4" : "video/mp4",
    "avi" : "video/avi",
    "webm" : "video/webm"
};
function deletePath(cache,project,path,component) {
    return new Promise(async (resolve,reject)=> {
        try {
            var proxyToComp = component && !project;
            if (proxyToComp) {
                var components = await fetch("/components.json");
                components = components ? await components.json() : {};
            }
            var componentPath = proxyToComp && components[component].path;
            path = path ? path[0] == "/" ? path : "/" + path : "";
            if (path.endsWith("/"))
                path = path.slice(0, path.length - 1);
            var proxyPath = proxyToComp ?
                (componentPath.indexOf('http://') === 0 || componentPath.indexOf('https://') === 0) ?
                componentPath + path :
                    ("/" + componentPath + path).replace(/\/\//g, "/") :
            CACHEPATH + (project + path).replace(/\/\//g, "/");

            cache.delete(proxyPath).then(delres=> {
                if (delres) {
                    resolve({
                        path,
                        result: 1
                    });
                }
                else reject({
                    path,
                    result: 0,
                    error: "file not found",
                    proxyPath,
                    project,
                    component
                });
            }, reject)
        }
        catch(e){reject(e)}
    })
}
function getComponentsFlat(components = {},total = {},path = ""){
  for(var k in components){
    var c = components[k]
    total[k] = c;
    var componentPath = path + c.path;
    total[k].path = componentPath;
    getComponentsFlat(c.components,total,componentPath)
  }
  return total;
}
async function getFiles(path,component,project){
    await swStart();
    var response = [];
    if(path.endsWith("/"))
        path = path.slice(0,path.length-1);
    var readJson = await read(path,component,project);
    var json = readJson.value;
    for(var k in json){
        var value = json[k];
        if(typeof value === "object") {
            var dirPath = path ? path + "/" + k : k;
            response.push({
                name : k,
                path : path ? path + "/" + k : k,
                type : "dir"
            });
            var dirFiles = await getFiles(dirPath,component,project);
            response = response.concat(dirFiles);
        }
        else{
            response.push({
                name : k,
                path : path ? path + "/" + json[k] : json[k],
                type : "file"
            });
        }
    }
    return response;
}
function invokeServiceWorkerUpdateFlow(registration) {
  // TODO implement your own UI notification element
  if(confirm("New version of the app is available. Refresh now?")) {
    if (registration.waiting) {
      // let waiting Service Worker know it should became active
      registration.waiting.postMessage('SKIP_WAITING')
    }
  }
}
async function isDir(path,component,project){
        var proxyToComp = component && !project;
    if(proxyToComp){
        var components = await fetch("/components.json");
        components = components ? await components.json() : {};
    }
    project = project || tilepieces.currentProject;
    path = path[0] == "/" ? path.slice(1) : path;
    if(!path)
        return true;
    var parentDirectoryAsArray = path.split("/");
    var resourceName = parentDirectoryAsArray.pop();
    var parentDirectory = parentDirectoryAsArray.length ? "/" + parentDirectoryAsArray.join("/") : "";
    var cache = await caches.open(CACHEFILES);
    parentDirectory = parentDirectory ?
        parentDirectory[0] == "/" ? parentDirectory : "/" + parentDirectory :
        "";
    var componentPath = proxyToComp && components[component].path;
    var cacheToMatch = proxyToComp ? (componentPath.indexOf('http://') === 0 || componentPath.indexOf('https://') === 0) ?
        componentPath + parentDirectory :
        (componentPath + parentDirectory).replace(/\/\//g,"/") :
    CACHEPATH + (project + parentDirectory).replace(/\/\//g,"/");
    var readParent = await cache.match(new Request(cacheToMatch));
    if(!readParent) {
        throw new Error("[isDir] error in reading parent path (path,cacheToMatch,parentDirectory) ->"
          +path+" , "+cacheToMatch+" , "+parentDirectory);
    }
    var json = await readParent.json();
    if(typeof json[resourceName] === "object")
        return true;
}
async function readComponentsInner(components,startingPath = ""){
  var cacheFiles = await caches.open(CACHEFILES);
  for(var k in components){
    var c = components[k];
    var startPath = startingPath + c.path;
    var componentPathJSON = (startPath + "/tilepieces.component.json").replace(/\/\//g,"/");
    try {
      var componentFile = await cacheFiles.match(new Request(componentPathJSON));
      var component = await componentFile.json();
    }
    catch(e){
      console.error("[error on trying to read file component] ->",c.name);
      console.error("[error on trying to read file component] ->",componentPathJSON);
      console.error("[error on trying to read file component] ->",componentFile);
      console.error("[error on trying to read file component] ->",component);
      console.error(e);
      continue;
    }
    component.components = await readComponentsInner(component.components,startPath);
    components[k] = Object.assign({},component,c);
  }
  return components;
}
async function readComponents(){
  var componentsCacheFile = await fetch("/components.json");
  var cRaw = await componentsCacheFile.json();
  return await readComponentsInner(cRaw,"");
}
async function readProjects(){
  var cacheFiles = await caches.open(CACHEFILES);
  var projectsCacheFile = await fetch("/projects.json");
  var projects = await projectsCacheFile.json();
  for(var i = 0;i<projects.length;i++){
    var p = projects[i];
    var projectPathJSON = (p.path + "/tilepieces.project.json");
    var projectFile = await cacheFiles.match(new Request(projectPathJSON));
    projects[i] = Object.assign({},await projectFile.json(),p);
  }
  return projects;
}
function setLocalComponentsTree(componentsToExpand){
    var components = {};
    for(var name in componentsToExpand){
        var splittedName = name.split("/");
        if(!components[splittedName[0]])
            components[splittedName[0]] = componentsToExpand[splittedName[0]];
        var parent = components[splittedName[0]];
        for(var i = 1;i<splittedName.length;i++){
            if(!parent.components ||
                typeof parent.components != "object" ||
                Array.isArray(parent.components))
                parent.components = {};
            var cName = splittedName.slice(0,i+1).join("/");
            parent.components[cName] = componentsToExpand[cName];
            parent = parent.components[cName];
        }
    }
    return components;
}
function slashDir(string){
    if(string[0] != "/")
        string = "/" + string;
    if(string.endsWith("/"))
        string = string.slice(0,string.length-1);
    return string;
}
// https://whatwebcando.today/articles/handling-service-worker-updates/
let sw;
function swStart(){
  return new Promise((resolve,reject)=>{
    if(sw)
      return resolve(sw);
    return navigator.serviceWorker.register(
      'sw.js'
    ).then( serviceWorker => {
      window.navigator.serviceWorker.ready
        .then(function(registration) {
        // ensure the case when the updatefound event was missed is also handled
        // by re-invoking the prompt when there's a waiting Service Worker
        if (registration.waiting) {
          invokeServiceWorkerUpdateFlow(registration)
        }
        else if(!navigator.serviceWorker.controller){ // this should be an hard-refresh
          window.location.reload();
          return;
        }
        // detect Service Worker update available and wait for it to become installed
        registration.addEventListener('updatefound', () => {
          if (registration.installing) {
            // wait until the new Service worker is actually installed (ready to take over)
            registration.installing.addEventListener('statechange', () => {
              if (registration.waiting) {
                // if there's an existing controller (previous Service Worker), show the prompt
                if (navigator.serviceWorker.controller) {
                  invokeServiceWorkerUpdateFlow(registration)
                } else {
                  // otherwise it's the first install, nothing to do
                  console.log('Service Worker initialized for the first time')
                }
              }
            })
          }
        });
        let refreshing = false;
        // detect controller change and refresh the page
        navigator.serviceWorker.addEventListener('controllerchange', () => {
          if (!refreshing) {
            window.location.reload();
            refreshing = true
          }
        });
        console.log('main sw is active:', registration.active);
        sw = registration;
        resolve(sw);
        // TODO to change
        document.body.hidden = false;
        });
    },error => {
      console.error(error);
      reject(error);
    });
  })
}

})();