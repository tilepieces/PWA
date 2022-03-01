(()=>{
(()=>{var t={623:t=>{"use strict";function e(t,e,i){t instanceof RegExp&&(t=r(t,i)),e instanceof RegExp&&(e=r(e,i));var o=n(t,e,i);return o&&{start:o[0],end:o[1],pre:i.slice(0,o[0]),body:i.slice(o[0]+t.length,o[1]),post:i.slice(o[1]+e.length)}}function r(t,e){var r=e.match(t);return r?r[0]:null}function n(t,e,r){var n,i,o,s,a,h=r.indexOf(t),c=r.indexOf(e,h+1),u=h;if(h>=0&&c>0){if(t===e)return[h,c];for(n=[],o=r.length;u>=0&&!a;)u==h?(n.push(u),h=r.indexOf(t,u+1)):1==n.length?a=[n.pop(),c]:((i=n.pop())<o&&(o=i,s=c),c=r.indexOf(e,u+1)),u=h<c&&h>=0?h:c;n.length&&(a=[o,s])}return a}t.exports=e,e.range=n},644:(t,e,r)=>{var n=r(48),i=r(623);t.exports=function(t){return t?("{}"===t.substr(0,2)&&(t="\\{\\}"+t.substr(2)),b(function(t){return t.split("\\\\").join(o).split("\\{").join(s).split("\\}").join(a).split("\\,").join(h).split("\\.").join(c)}(t),!0).map(l)):[]};var o="\0SLASH"+Math.random()+"\0",s="\0OPEN"+Math.random()+"\0",a="\0CLOSE"+Math.random()+"\0",h="\0COMMA"+Math.random()+"\0",c="\0PERIOD"+Math.random()+"\0";function u(t){return parseInt(t,10)==t?parseInt(t,10):t.charCodeAt(0)}function l(t){return t.split(o).join("\\").split(s).join("{").split(a).join("}").split(h).join(",").split(c).join(".")}function f(t){if(!t)return[""];var e=[],r=i("{","}",t);if(!r)return t.split(",");var n=r.pre,o=r.body,s=r.post,a=n.split(",");a[a.length-1]+="{"+o+"}";var h=f(s);return s.length&&(a[a.length-1]+=h.shift(),a.push.apply(a,h)),e.push.apply(e,a),e}function p(t){return"{"+t+"}"}function g(t){return/^-?0\d/.test(t)}function d(t,e){return t<=e}function v(t,e){return t>=e}function b(t,e){var r=[],o=i("{","}",t);if(!o||/\$$/.test(o.pre))return[t];var s,h=/^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(o.body),c=/^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(o.body),l=h||c,m=o.body.indexOf(",")>=0;if(!l&&!m)return o.post.match(/,.*\}/)?b(t=o.pre+"{"+o.body+a+o.post):[t];if(l)s=o.body.split(/\.\./);else if(1===(s=f(o.body)).length&&1===(s=b(s[0],!1).map(p)).length)return(A=o.post.length?b(o.post,!1):[""]).map((function(t){return o.pre+s[0]+t}));var y,x=o.pre,A=o.post.length?b(o.post,!1):[""];if(l){var w=u(s[0]),j=u(s[1]),C=Math.max(s[0].length,s[1].length),O=3==s.length?Math.abs(u(s[2])):1,E=d;j<w&&(O*=-1,E=v);var k=s.some(g);y=[];for(var S=w;E(S,j);S+=O){var R;if(c)"\\"===(R=String.fromCharCode(S))&&(R="");else if(R=String(S),k){var $=C-R.length;if($>0){var M=new Array($+1).join("0");R=S<0?"-"+M+R.slice(1):M+R}}y.push(R)}}else y=n(s,(function(t){return b(t,!1)}));for(var T=0;T<y.length;T++)for(var L=0;L<A.length;L++){var N=x+y[T]+A[L];(!e||l||N)&&r.push(N)}return r}},48:t=>{t.exports=function(t,r){for(var n=[],i=0;i<t.length;i++){var o=r(t[i],i);e(o)?n.push.apply(n,o):n.push(o)}return n};var e=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},171:(t,e,r)=>{t.exports=f,f.Minimatch=p;var n={sep:"/"};try{n=r(470)}catch(t){}var i=f.GLOBSTAR=p.GLOBSTAR={},o=r(644),s={"!":{open:"(?:(?!(?:",close:"))[^/]*?)"},"?":{open:"(?:",close:")?"},"+":{open:"(?:",close:")+"},"*":{open:"(?:",close:")*"},"@":{open:"(?:",close:")"}},a="[^/]",h="[^/]*?",c="().*{}+?[]^$\\!".split("").reduce((function(t,e){return t[e]=!0,t}),{}),u=/\/+/;function l(t,e){t=t||{},e=e||{};var r={};return Object.keys(e).forEach((function(t){r[t]=e[t]})),Object.keys(t).forEach((function(e){r[e]=t[e]})),r}function f(t,e,r){if("string"!=typeof e)throw new TypeError("glob pattern string required");return r||(r={}),!(!r.nocomment&&"#"===e.charAt(0))&&(""===e.trim()?""===t:new p(e,r).match(t))}function p(t,e){if(!(this instanceof p))return new p(t,e);if("string"!=typeof t)throw new TypeError("glob pattern string required");e||(e={}),t=t.trim(),"/"!==n.sep&&(t=t.split(n.sep).join("/")),this.options=e,this.set=[],this.pattern=t,this.regexp=null,this.negate=!1,this.comment=!1,this.empty=!1,this.make()}function g(t,e){if(e||(e=this instanceof p?this.options:{}),void 0===(t=void 0===t?this.pattern:t))throw new TypeError("undefined pattern");return e.nobrace||!t.match(/\{.*\}/)?[t]:o(t)}f.filter=function(t,e){return e=e||{},function(r,n,i){return f(r,t,e)}},f.defaults=function(t){if(!t||!Object.keys(t).length)return f;var e=f,r=function(r,n,i){return e.minimatch(r,n,l(t,i))};return r.Minimatch=function(r,n){return new e.Minimatch(r,l(t,n))},r},p.defaults=function(t){return t&&Object.keys(t).length?f.defaults(t).Minimatch:p},p.prototype.debug=function(){},p.prototype.make=function(){if(!this._made){var t=this.pattern,e=this.options;if(e.nocomment||"#"!==t.charAt(0))if(t){this.parseNegate();var r=this.globSet=this.braceExpand();e.debug&&(this.debug=console.error),this.debug(this.pattern,r),r=this.globParts=r.map((function(t){return t.split(u)})),this.debug(this.pattern,r),r=r.map((function(t,e,r){return t.map(this.parse,this)}),this),this.debug(this.pattern,r),r=r.filter((function(t){return-1===t.indexOf(!1)})),this.debug(this.pattern,r),this.set=r}else this.empty=!0;else this.comment=!0}},p.prototype.parseNegate=function(){var t=this.pattern,e=!1,r=0;if(!this.options.nonegate){for(var n=0,i=t.length;n<i&&"!"===t.charAt(n);n++)e=!e,r++;r&&(this.pattern=t.substr(r)),this.negate=e}},f.braceExpand=function(t,e){return g(t,e)},p.prototype.braceExpand=g,p.prototype.parse=function(t,e){if(t.length>65536)throw new TypeError("pattern is too long");var r=this.options;if(!r.noglobstar&&"**"===t)return i;if(""===t)return"";var n,o="",u=!!r.nocase,l=!1,f=[],p=[],g=!1,v=-1,b=-1,m="."===t.charAt(0)?"":r.dot?"(?!(?:^|\\/)\\.{1,2}(?:$|\\/))":"(?!\\.)",y=this;function x(){if(n){switch(n){case"*":o+=h,u=!0;break;case"?":o+=a,u=!0;break;default:o+="\\"+n}y.debug("clearStateChar %j %j",n,o),n=!1}}for(var A,w=0,j=t.length;w<j&&(A=t.charAt(w));w++)if(this.debug("%s\t%s %s %j",t,w,o,A),l&&c[A])o+="\\"+A,l=!1;else switch(A){case"/":return!1;case"\\":x(),l=!0;continue;case"?":case"*":case"+":case"@":case"!":if(this.debug("%s\t%s %s %j <-- stateChar",t,w,o,A),g){this.debug("  in class"),"!"===A&&w===b+1&&(A="^"),o+=A;continue}y.debug("call clearStateChar %j",n),x(),n=A,r.noext&&x();continue;case"(":if(g){o+="(";continue}if(!n){o+="\\(";continue}f.push({type:n,start:w-1,reStart:o.length,open:s[n].open,close:s[n].close}),o+="!"===n?"(?:(?!(?:":"(?:",this.debug("plType %j %j",n,o),n=!1;continue;case")":if(g||!f.length){o+="\\)";continue}x(),u=!0;var C=f.pop();o+=C.close,"!"===C.type&&p.push(C),C.reEnd=o.length;continue;case"|":if(g||!f.length||l){o+="\\|",l=!1;continue}x(),o+="|";continue;case"[":if(x(),g){o+="\\"+A;continue}g=!0,b=w,v=o.length,o+=A;continue;case"]":if(w===b+1||!g){o+="\\"+A,l=!1;continue}if(g){var O=t.substring(b+1,w);try{RegExp("["+O+"]")}catch(t){var E=this.parse(O,d);o=o.substr(0,v)+"\\["+E[0]+"\\]",u=u||E[1],g=!1;continue}}u=!0,g=!1,o+=A;continue;default:x(),l?l=!1:!c[A]||"^"===A&&g||(o+="\\"),o+=A}for(g&&(O=t.substr(b+1),E=this.parse(O,d),o=o.substr(0,v)+"\\["+E[0],u=u||E[1]),C=f.pop();C;C=f.pop()){var k=o.slice(C.reStart+C.open.length);this.debug("setting tail",o,C),k=k.replace(/((?:\\{2}){0,64})(\\?)\|/g,(function(t,e,r){return r||(r="\\"),e+e+r+"|"})),this.debug("tail=%j\n   %s",k,k,C,o);var S="*"===C.type?h:"?"===C.type?a:"\\"+C.type;u=!0,o=o.slice(0,C.reStart)+S+"\\("+k}x(),l&&(o+="\\\\");var R=!1;switch(o.charAt(0)){case".":case"[":case"(":R=!0}for(var $=p.length-1;$>-1;$--){var M=p[$],T=o.slice(0,M.reStart),L=o.slice(M.reStart,M.reEnd-8),N=o.slice(M.reEnd-8,M.reEnd),I=o.slice(M.reEnd);N+=I;var _=T.split("(").length-1,z=I;for(w=0;w<_;w++)z=z.replace(/\)[+*?]?/,"");var B="";""===(I=z)&&e!==d&&(B="$"),o=T+L+I+B+N}if(""!==o&&u&&(o="(?=.)"+o),R&&(o=m+o),e===d)return[o,u];if(!u)return t.replace(/\\(.)/g,"$1");var P=r.nocase?"i":"";try{var G=new RegExp("^"+o+"$",P)}catch(t){return new RegExp("$.")}return G._glob=t,G._src=o,G};var d={};f.makeRe=function(t,e){return new p(t,e||{}).makeRe()},p.prototype.makeRe=function(){if(this.regexp||!1===this.regexp)return this.regexp;var t=this.set;if(!t.length)return this.regexp=!1,this.regexp;var e=this.options,r=e.noglobstar?h:e.dot?"(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?":"(?:(?!(?:\\/|^)\\.).)*?",n=e.nocase?"i":"",o=t.map((function(t){return t.map((function(t){return t===i?r:"string"==typeof t?t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"):t._src})).join("\\/")})).join("|");o="^(?:"+o+")$",this.negate&&(o="^(?!"+o+").*$");try{this.regexp=new RegExp(o,n)}catch(t){this.regexp=!1}return this.regexp},f.match=function(t,e,r){var n=new p(e,r=r||{});return t=t.filter((function(t){return n.match(t)})),n.options.nonull&&!t.length&&t.push(e),t},p.prototype.match=function(t,e){if(this.debug("match",t,this.pattern),this.comment)return!1;if(this.empty)return""===t;if("/"===t&&e)return!0;var r=this.options;"/"!==n.sep&&(t=t.split(n.sep).join("/")),t=t.split(u),this.debug(this.pattern,"split",t);var i,o,s=this.set;for(this.debug(this.pattern,"set",s),o=t.length-1;o>=0&&!(i=t[o]);o--);for(o=0;o<s.length;o++){var a=s[o],h=t;if(r.matchBase&&1===a.length&&(h=[i]),this.matchOne(h,a,e))return!!r.flipNegate||!this.negate}return!r.flipNegate&&this.negate},p.prototype.matchOne=function(t,e,r){var n=this.options;this.debug("matchOne",{this:this,file:t,pattern:e}),this.debug("matchOne",t.length,e.length);for(var o=0,s=0,a=t.length,h=e.length;o<a&&s<h;o++,s++){this.debug("matchOne loop");var c,u=e[s],l=t[o];if(this.debug(e,u,l),!1===u)return!1;if(u===i){this.debug("GLOBSTAR",[e,u,l]);var f=o,p=s+1;if(p===h){for(this.debug("** at the end");o<a;o++)if("."===t[o]||".."===t[o]||!n.dot&&"."===t[o].charAt(0))return!1;return!0}for(;f<a;){var g=t[f];if(this.debug("\nglobstar while",t,f,e,p,g),this.matchOne(t.slice(f),e.slice(p),r))return this.debug("globstar found match!",f,a,g),!0;if("."===g||".."===g||!n.dot&&"."===g.charAt(0)){this.debug("dot detected!",t,f,e,p);break}this.debug("globstar swallow a segment, and continue"),f++}return!(!r||(this.debug("\n>>> no match, partial?",t,f,e,p),f!==a))}if("string"==typeof u?(c=n.nocase?l.toLowerCase()===u.toLowerCase():l===u,this.debug("string match",u,l,c)):(c=l.match(u),this.debug("pattern match",u,l,c)),!c)return!1}if(o===a&&s===h)return!0;if(o===a)return r;if(s===h)return o===a-1&&""===t[o];throw new Error("wtf?")}},470:t=>{"use strict";function e(t){if("string"!=typeof t)throw new TypeError("Path must be a string. Received "+JSON.stringify(t))}function r(t,e){for(var r,n="",i=0,o=-1,s=0,a=0;a<=t.length;++a){if(a<t.length)r=t.charCodeAt(a);else{if(47===r)break;r=47}if(47===r){if(o===a-1||1===s);else if(o!==a-1&&2===s){if(n.length<2||2!==i||46!==n.charCodeAt(n.length-1)||46!==n.charCodeAt(n.length-2))if(n.length>2){var h=n.lastIndexOf("/");if(h!==n.length-1){-1===h?(n="",i=0):i=(n=n.slice(0,h)).length-1-n.lastIndexOf("/"),o=a,s=0;continue}}else if(2===n.length||1===n.length){n="",i=0,o=a,s=0;continue}e&&(n.length>0?n+="/..":n="..",i=2)}else n.length>0?n+="/"+t.slice(o+1,a):n=t.slice(o+1,a),i=a-o-1;o=a,s=0}else 46===r&&-1!==s?++s:s=-1}return n}var n={resolve:function(){for(var t,n="",i=!1,o=arguments.length-1;o>=-1&&!i;o--){var s;o>=0?s=arguments[o]:(void 0===t&&(t=process.cwd()),s=t),e(s),0!==s.length&&(n=s+"/"+n,i=47===s.charCodeAt(0))}return n=r(n,!i),i?n.length>0?"/"+n:"/":n.length>0?n:"."},normalize:function(t){if(e(t),0===t.length)return".";var n=47===t.charCodeAt(0),i=47===t.charCodeAt(t.length-1);return 0!==(t=r(t,!n)).length||n||(t="."),t.length>0&&i&&(t+="/"),n?"/"+t:t},isAbsolute:function(t){return e(t),t.length>0&&47===t.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var t,r=0;r<arguments.length;++r){var i=arguments[r];e(i),i.length>0&&(void 0===t?t=i:t+="/"+i)}return void 0===t?".":n.normalize(t)},relative:function(t,r){if(e(t),e(r),t===r)return"";if((t=n.resolve(t))===(r=n.resolve(r)))return"";for(var i=1;i<t.length&&47===t.charCodeAt(i);++i);for(var o=t.length,s=o-i,a=1;a<r.length&&47===r.charCodeAt(a);++a);for(var h=r.length-a,c=s<h?s:h,u=-1,l=0;l<=c;++l){if(l===c){if(h>c){if(47===r.charCodeAt(a+l))return r.slice(a+l+1);if(0===l)return r.slice(a+l)}else s>c&&(47===t.charCodeAt(i+l)?u=l:0===l&&(u=0));break}var f=t.charCodeAt(i+l);if(f!==r.charCodeAt(a+l))break;47===f&&(u=l)}var p="";for(l=i+u+1;l<=o;++l)l!==o&&47!==t.charCodeAt(l)||(0===p.length?p+="..":p+="/..");return p.length>0?p+r.slice(a+u):(a+=u,47===r.charCodeAt(a)&&++a,r.slice(a))},_makeLong:function(t){return t},dirname:function(t){if(e(t),0===t.length)return".";for(var r=t.charCodeAt(0),n=47===r,i=-1,o=!0,s=t.length-1;s>=1;--s)if(47===(r=t.charCodeAt(s))){if(!o){i=s;break}}else o=!1;return-1===i?n?"/":".":n&&1===i?"//":t.slice(0,i)},basename:function(t,r){if(void 0!==r&&"string"!=typeof r)throw new TypeError('"ext" argument must be a string');e(t);var n,i=0,o=-1,s=!0;if(void 0!==r&&r.length>0&&r.length<=t.length){if(r.length===t.length&&r===t)return"";var a=r.length-1,h=-1;for(n=t.length-1;n>=0;--n){var c=t.charCodeAt(n);if(47===c){if(!s){i=n+1;break}}else-1===h&&(s=!1,h=n+1),a>=0&&(c===r.charCodeAt(a)?-1==--a&&(o=n):(a=-1,o=h))}return i===o?o=h:-1===o&&(o=t.length),t.slice(i,o)}for(n=t.length-1;n>=0;--n)if(47===t.charCodeAt(n)){if(!s){i=n+1;break}}else-1===o&&(s=!1,o=n+1);return-1===o?"":t.slice(i,o)},extname:function(t){e(t);for(var r=-1,n=0,i=-1,o=!0,s=0,a=t.length-1;a>=0;--a){var h=t.charCodeAt(a);if(47!==h)-1===i&&(o=!1,i=a+1),46===h?-1===r?r=a:1!==s&&(s=1):-1!==r&&(s=-1);else if(!o){n=a+1;break}}return-1===r||-1===i||0===s||1===s&&r===i-1&&r===n+1?"":t.slice(r,i)},format:function(t){if(null===t||"object"!=typeof t)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof t);return function(t,e){var r=e.dir||e.root,n=e.base||(e.name||"")+(e.ext||"");return r?r===e.root?r+n:r+"/"+n:n}(0,t)},parse:function(t){e(t);var r={root:"",dir:"",base:"",ext:"",name:""};if(0===t.length)return r;var n,i=t.charCodeAt(0),o=47===i;o?(r.root="/",n=1):n=0;for(var s=-1,a=0,h=-1,c=!0,u=t.length-1,l=0;u>=n;--u)if(47!==(i=t.charCodeAt(u)))-1===h&&(c=!1,h=u+1),46===i?-1===s?s=u:1!==l&&(l=1):-1!==s&&(l=-1);else if(!c){a=u+1;break}return-1===s||-1===h||0===l||1===l&&s===h-1&&s===a+1?-1!==h&&(r.base=r.name=0===a&&o?t.slice(1,h):t.slice(a,h)):(0===a&&o?(r.name=t.slice(1,s),r.base=t.slice(1,h)):(r.name=t.slice(a,s),r.base=t.slice(a,h)),r.ext=t.slice(s,h)),a>0?r.dir=t.slice(0,a-1):o&&(r.dir="/"),r},sep:"/",delimiter:":",win32:null,posix:null};n.posix=n,t.exports=n}},e={};window.minimatch=function r(n){var i=e[n];if(void 0!==i)return i.exports;var o=e[n]={exports:{}};return t[n](o,o.exports,r),o.exports}(171)})();
const CACHEFILES = "cacheFiles";
const CACHEDIRECTORY = "/www/";
const resourcePath = location.pathname.split("/").filter((v, i, a) => i < a.length - 1).join("/");
const CACHEPATH = location.origin + CACHEDIRECTORY;
async function copy(path, newPath, move = false) {
  path = path ?
    path[0] == "/" ? path : "/" + path :
    "";
  newPath = newPath ?
    newPath[0] == "/" ? newPath : "/" + newPath :
    "";
  await swStart();
  var splitPath = path.split("/");
  var resourceName = splitPath.pop();
  if (await caches.match(CACHEPATH + tilepieces.currentProject + newPath)) {
    var slicePath = newPath.split(".");
    var number = slicePath[0].match(/\d+$/);
    var newNumber = number ? +number[0]++ : 0;
    newPath = slicePath[0] + newNumber + "." + slicePath[1];
    while (await caches.match(CACHEPATH + tilepieces.currentProject + newPath)) {
      newPath = slicePath[0] + newNumber++ + "." + slicePath[1];
    }
  }
  //newPath = newPath ? newPath + "/" + resourceName : resourceName;
  var isdir = await isDir(path);
  if (isdir) {
    await update(newPath);
    var pathsToDelete = [];
    pathsToDelete.push(path);
    var dirFiles = await getFiles(path);
    dirFiles.sort((b, a) => { // sort from the superficial one to the deep level
      return b.path.split("/").length - a.path.split("/").length;
    });
    for (var i = 0; i < dirFiles.length; i++) {
      var file = dirFiles[i];
      var newRelativePath = file.path.replace(path, newPath);
      var wasThisPathADir = await isDir(file.path);
      var value = null;
      if (!wasThisPathADir) {
        var filePath = file.path[0] == "/" ? file.path : "/" + file.path;
        var bodyReq = await caches.match(CACHEPATH + tilepieces.currentProject + filePath);
        value = await bodyReq.blob();
      }
      await update(newRelativePath, value);
      move && pathsToDelete.push(file.path);
    }
    if (move)
      for (var p = 0; p < pathsToDelete.length; p++)
        await del(pathsToDelete[p]);
  } // file case
  else {
    await update(newPath, await read(path));
    if (move)
      await del(path);
  }
  if (move) {
    var parentDirectory = splitPath.length ? "/" + splitPath.join("/") : "";
    var parentDirectoryRes = await read(parentDirectory);
    var parentDirectoryData = parentDirectoryRes.value;
    delete parentDirectoryData[resourceName];
    var newParentDirectory = new Blob([JSON.stringify(parentDirectoryData)], {type: 'application/json'});
    var cache = await caches.open(CACHEFILES);
    await cache.put(CACHEPATH + tilepieces.currentProject + parentDirectory.replace(/\/\//g, "/"),
      new Response(newParentDirectory));
  }
  return {
    newPath: newPath.slice(1),
    result: 1
  }
}
async function create(projectName) {
  var refSw = await swStart();
  var cacheFiles = await caches.open(CACHEFILES);
  var projectPath = CACHEPATH + projectName;
  var projects = await fetch("/projects.json");
  var newEntry = {name: projectName, path: projectPath.replace(location.origin + "/", "")};
  var projectsBlob;
  var projectJson = await projects.json();
  var pAlreadyPresentIndex = projectJson.findIndex(v => v.name == projectName);
  if (pAlreadyPresentIndex > -1)
    projectJson.splice(pAlreadyPresentIndex, 1);
  projectJson.unshift(newEntry);
  projectsBlob = new Blob([JSON.stringify(projectJson)], {type: 'application/json'});
  await cacheFiles.put("/projects.json", new Response(projectsBlob));
  var schema = await cacheFiles.match(new Request(projectPath));
  if (schema) {
    schema = await schema.json();
  } else {
    await cacheFiles.put(projectPath, new Response(new Blob(["{}"], {type: 'application/json'})));
    schema = {};
  }
  tilepieces.currentProject = projectName;
  var innerProjectConfPath = projectPath + "/tilepieces.project.json";
  var innerProjectConf = await cacheFiles.match(new Request(innerProjectConfPath));
  if (!innerProjectConf)
    await update("tilepieces.project.json",
      new Blob([JSON.stringify({name: projectName, components: {}}, null, 2)],
        {type: 'application/json'}));
  return {
    name: projectName,
    schema
  }
}
async function createComponent(newSettings, files = []) {
  var refSw = await swStart();
  // get top components, projects and settings
  var cacheFiles = await caches.open(CACHEFILES);
  var components = await readComponents();
  var component = newSettings.component;
  var projects = await readProjects();
  var settingsCacheFile = await fetch("/settings.json");
  var globalSettings = await settingsCacheFile.json();
  console.log("enter ", newSettings, " creation. local -> " + newSettings.local)
  if (newSettings.local) {
    // getting currentProject
    var project = projects.find(p => p.name == tilepieces.currentProject);
    if (!project.components)
      project.components = {};
    component.path = component.path ? slashDir(component.path) :
      ("/" + (project.componentPath || globalSettings.componentPath) + "/" + component.name);
    // save the component json
    var componentPathJSON = component.path + "/tilepieces.component.json";
    var currentJson;
    try {
      var currentJsonRaw = await read(componentPathJSON)
      currentJson = JSON.parse(currentJsonRaw);
    } catch (e) {
    }
    var componentToSave = Object.assign({}, component);
    if (currentJson)
      componentToSave.components = currentJson.components;
    if (!componentToSave.components)
      componentToSave.components = {};
    delete componentToSave.path;
    await update(componentPathJSON,
      new Blob([JSON.stringify(componentToSave, null, 2)]));
    console.log("saving ->", componentPathJSON, componentToSave);
    // now save the 'upper' json: if subcomponent, we save the reference to the component in the parent component. Else, we save in the main project json
    var nameSplitted = component.name.split("/")
    var isSubComponent = nameSplitted.length > 1;
    if (isSubComponent) {
      console.log("is sub component");
      nameSplitted.pop();
      var isComponent = components[project.name];
      if (isComponent) {
        project.components[project.name] = Object.assign({}, isComponent);
        project.components[project.name].path = "";
      }
      var openComponents = await readComponentsInner(project.components, project.path + "/");
      var componentsFlat = getComponentsFlat(openComponents);
      var parent = componentsFlat[nameSplitted.join("/")]
      if (!parent.components ||
        typeof parent.components !== "object" ||
        Array.isArray(parent.components)) {
        parent.components = {}
      }
      parent.components[component.name] =
        {
          name: component.name,
          path: component.path
        };
      for (var k in parent.components) {
        var newObj = {};
        var pc = parent.components[k];
        newObj.path = pc.path.replace(parent.path, "");
        newObj.name = pc.name;
        parent.components[k] = newObj;
      }
      var getParentJsonPath = parent.path
        + "/tilepieces.component.json";
      delete parent.path;
      await update(getParentJsonPath, JSON.stringify(parent, null, 2));
      console.log("saving ->", getParentJsonPath, parent);
    } else {
      console.log("is not sub component");
      if (!project.components ||
        typeof project.components !== "object" ||
        Array.isArray(project.components)) {
        project.components = {}
      }
      project.components[component.name] = {name: component.name, path: component.path}
      delete project.path;
      await update("/tilepieces.project.json",
        JSON.stringify(project, null, 2));
      console.log("saving ->", "/tilepieces.project.json", project);
    }
  } else {
    // if path is not provided, maybe it is current Proj?
    component.path = component.path ||
      projects.find(v => v.name == tilepieces.currentProject).path;
    component.components = components.components || components[component.name]?.components || {};
    components[component.name] = {name: component.name, path: component.path};
    var componentToSave = Object.assign({}, component);
    for (var k in componentToSave.components) {
      var c = componentToSave.components[k];
      componentToSave.components[k] = {name: c.name, path: c.path}
    }
    delete componentToSave.path;
    await cacheFiles.put(component.path + "/tilepieces.component.json",
      new Response(new Blob([JSON.stringify(componentToSave, null, 2)], {type: 'application/json'})));
    var dir = await cacheFiles.match(new Request(component.path));
    var jsonDir = dir ? await dir.json() : {};
    jsonDir["tilepieces.component.json"] = "tilepieces.component.json";
    await cacheFiles.put(component.path,
      new Response(new Blob([JSON.stringify(jsonDir, null, 2)], {type: 'application/json'})));
    var newComponents = Object.assign({}, components);
    for (var k in newComponents) {
      var c = newComponents[k];
      newComponents[k] = {name: c.name, path: c.path}
    }
    await cacheFiles.put("/components.json",
      new Response(new Blob([JSON.stringify(newComponents, null, 2)], {type: 'application/json'})));
  }
  for (var i = 0; i < files.length; i++) {
    var fileData = files[i];
    var componentRootPath = slashDir(component.path);
    if (!newSettings.local) {
      var responseRoot = await cacheFiles.match(new Request(componentRootPath));
      if (!responseRoot)
        await cacheFiles.put(componentRootPath, new Response(new Blob(["{}"], {type: 'application/json'})));
    }
    var newPath = newSettings.local ?
      component.path + slashDir(fileData.path) :
      fileData.path.replace(component.name, "");
    await update(slashDir(newPath), fileData.blob, !newSettings.local ? component.name : null)
  }
  return {};
}
async function del(path, project, component) {
  project = project || tilepieces.currentProject;
  await swStart();
  var cache = await caches.open(CACHEFILES);
  var parentDirectoryAsArray = path.split("/");
  var name = parentDirectoryAsArray.pop();
  var parentDirectory = parentDirectoryAsArray.length ? parentDirectoryAsArray.join("/") : "";
  var isdir = await isDir(path, component, component ? null : project);
  if (isdir) {
    var dirFiles = await getFiles(path, component, component ? null : project);
    dirFiles.sort((a, b) => { // sort from the deep level to the superficial one, to avoid deleting the folder the directory before its subfolders and files
      return b.path.split("/").length - a.path.split("/").length;
    });
    for (var i = 0; i < dirFiles.length; i++)
      await deletePath(cache,
        component ? null : project,
        dirFiles[i].path,
        component
      )
  }
  var parentDirectoryRes = await read(parentDirectory, component, component ? null : project);
  var parentDirectoryData = parentDirectoryRes.value;
  delete parentDirectoryData[name];
  var newParentDirectory = new Blob([JSON.stringify(parentDirectoryData)], {type: 'application/json'});
  parentDirectory = parentDirectory ?
    parentDirectory[0] == "/" ? parentDirectory : "/" + parentDirectory :
    "";
  if (component) {
    var components = await fetch("/components.json");
    components = components ? await components.json() : {};
    var componentPath = (components[component].path.indexOf('http://') === 0 ||
      components[component].path.indexOf('https://') === 0) ?
      components[component].path :
      slashDir(components[component].path);
  }
  var pathWhereToDelete = component ? componentPath : CACHEPATH + project;
  await cache.put(pathWhereToDelete + parentDirectory.replace(/\/\//g, "/"),
    new Response(newParentDirectory));
  await deletePath(cache, component ? null : project, path, component);
  if ((!path || path == "/") && !component) {
    var projectsMatch = await fetch("/projects.json");
    var projectJson = await projectsMatch.json();
    var pAlreadyPresentIndex = projectJson.findIndex(v => v.name == project);
    projectJson.splice(pAlreadyPresentIndex, 1);
    var projectsBlob = new Blob([JSON.stringify(projectJson)], {type: 'application/json'});
    await cache.put("/projects.json", new Response(projectsBlob));
    var componentsMatch = await cache.match(new Request("/components.json"));
    var components = await componentsMatch.json();
    if (components[project]) {
      delete components[project];
      var compsBlob = new Blob([JSON.stringify(components)], {type: 'application/json'});
      await cache.put("/components.json", new Response(compsBlob));
    }
  }
  return {path};
}
async function deleteComponent(newSettings) {
  await swStart();
  var cache = await caches.open(CACHEFILES);
  var components = await readComponents();
  var component = newSettings.component;
  if (newSettings.local) {
    var projects = await readProjects();
    var project = projects.find(v => v.name == tilepieces.currentProject);
    var currentComponent = Object.values(components).find(c => c.path == project.path);
    var isSavedComponent = false;
    if (!project.components || typeof project.components !== "object" || Array.isArray(project.components)) {
      project.components = {}
    }
    var nameSplitted = component.name.split("/")
    var isSubComponent = nameSplitted.length > 1;
    var parentComponentIsCurrentComponent = currentComponent && nameSplitted.length == 2 && nameSplitted[0] == currentComponent.name;
    var deletedPath = null;
    for (var k in project.components)
      if (k == component.name) {
        if (newSettings.deleteFiles) {
          deletedPath = await del(project.components[k].path);
        }
        delete project.components[k];
      }
    if (currentComponent) {
      for (var ki in currentComponent.components)
        if (ki == component.name) {
          if (newSettings.deleteFiles && !deletedPath) {
            await del(currentComponent.components[ki].path);
          }
          delete currentComponent.components[ki];
          isSavedComponent = true;
        }
    }
    if (!isSubComponent) {
      var projectToSave = Object.assign({}, project);
      delete projectToSave.path;
      // update project data
      await update("tilepieces.project.json",
        JSON.stringify(projectToSave, null, 2));
    } else if (!parentComponentIsCurrentComponent) { // save the correct record in the parent component
      var openComponents = nameSplitted[0] == currentComponent.name ?
        components :
        await readComponentsInner(project.components, project.path + "/");
      var componentsFlat = getComponentsFlat(openComponents);
      var pathToDelete = componentsFlat[nameSplitted.join("/")].path;
      nameSplitted.pop();
      var pathParent = componentsFlat[nameSplitted.join("/")].path;
      if (newSettings.deleteFiles) {
        await del(nameSplitted[0] == currentComponent.name ? pathToDelete.replace(currentComponent.path,"") : pathToDelete);
      }
      var getParentJsonPath = (nameSplitted[0] == currentComponent.name ? pathParent.replace(currentComponent.path,"") : pathParent) + "/tilepieces.component.json";
      var getParentJsonRaw = await read(getParentJsonPath);
      var getParentJson = JSON.parse(getParentJsonRaw);
      delete getParentJson.components[component.name]
      await update(getParentJsonPath, JSON.stringify(getParentJson, null, 2));
    }
    // save the main component json
    var componentToSave = Object.assign({}, currentComponent);
    for (var k in componentToSave.components) {
      var c = componentToSave.components[k];
      componentToSave.components[k] = {name: c.name, path: c.path}
    }
    delete componentToSave.path;
    isSavedComponent && await cache.put(project.path + "/tilepieces.component.json",
      new Response(new Blob([JSON.stringify(componentToSave, null, 2)], {type: 'application/json'})));
  } else {
    if (components[component.name]) {
      if (newSettings.deleteFiles) {
        await del("", null, component.name);
      }
      delete components[component.name];
    }
    var newComponents = Object.assign({}, components);
    for (var k in newComponents) {
      var c = newComponents[k];
      newComponents[k] = {name: c.name, path: c.path}
    }
    await cache.put("/components.json",
      new Response(new Blob([JSON.stringify(newComponents)], {type: 'application/json'})));
  }
  return {result: 1} // TODO
}
async function getSettings() {
  await swStart();
  var settings = {};
  var cache = await caches.open(CACHEFILES);
  var globalSettings = await fetch("/settings.json");
  settings.globalSettings = await globalSettings.json();
  settings.projects = await readProjects();
  var components = await readComponents();
  for (var projectsI = 0; projectsI < settings.projects.length; projectsI++) {
    var project = settings.projects[projectsI];
    project.localComponents = {};
    var isComponent = components[project.name];
    project.isComponent = isComponent && Object.assign({}, isComponent);
    project.componentPackage = project.isComponent;
    if (project.isComponent) {
      project.components[project.name] = Object.assign({}, isComponent);
      project.components[project.name].path = "";
    }
    project.localComponents = await readComponentsInner(project.components, project.path + "/");
    if (project.isComponent)
      delete project.isComponent.path;
    delete project.path;
    project.components = project.localComponents;
    project.componentsFlat = getComponentsFlat(project.localComponents);
    project.localComponents[project.name] && delete project.localComponents[project.name].path;
  }
  for (var k in components)
    delete components[k].path
  settings.components = components;
  return {settings};
}
function read(path, component, project, raw = false) {
  return new Promise(async (resolve, reject) => {
    try {
      await swStart();
      var proxyToComp = component && !project;
      var cache = await caches.open(CACHEFILES);
      if (proxyToComp) {
        var components = await fetch("/components.json");
        components = components ? await components.json() : {};
      }
      project = project || tilepieces.currentProject;
      path = path ? path[0] == "/" ? path : "/" + path : "";
      if (path.endsWith("/"))
        path = path.slice(0, path.length - 1);
      try {
        var isdir = await isDir(path, component, component ? null : project);
      } catch (e) {
      }
      var componentPath = proxyToComp && components[component].path;
      var proxyPath = proxyToComp ?
        (componentPath.indexOf('http://') === 0 || componentPath.indexOf('https://') === 0) ?
          componentPath + path :
          ("/" + componentPath + path).replace(/\/\//g, "/") :
        CACHEPATH + (project + path).replace(/\/\//g, "/");
      var responseObj = await cache.match(new Request(proxyPath));
      if (responseObj) {
        if (raw)
          return resolve(responseObj);
        contentTypeRepresentation(responseObj.headers.get('Content-Type'), responseObj)
          .then(res => {
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
              dirs.sort((a, b) => a.key.localeCompare(b.key))
                .forEach(v => objDir[v.key] = {});
              files.sort((a, b) => a.key.localeCompare(b.key))
                .forEach(v => objDir[v.key] = v.value);
              resolve({value: objDir, path});
            } else resolve(res)
          }, reject);
      } else
        reject({
          path,
          proxyPath,
          error: "not found",
          component,
          project
        })
    } catch (e) {
      reject(e)
    }
  })
}
async function search(dir, match = [], rgFile = null, componentName = null, projectName = "") {
  await swStart();
  projectName = componentName ? null : projectName || tilepieces.currentProject;
  dir = dir[0] == "/" ? dir : "/" + dir;
  dir = dir.endsWith("/") ? dir : dir + "/";
  var matches = Array.isArray(match) ? match : [match];
  var files = [], searchResult = [];
  for (var i = 0; i < matches.length; i++) {
    var search = matches[i];
    var path = dir + search;
    var isdir;
    try {
      isdir = await isDir(path, componentName, projectName);
    } catch (e) {
    }
    if (isdir) {
      var newFiles = await getFiles(path, componentName, projectName);
      files = files.concat(newFiles.filter(v => v.type == "file").map(v => v.path));
      continue;
    }
    var fileRead;
    try {
      fileRead = await read(path, componentName, projectName);
    } catch (e) {
    }
    if (fileRead) {
      files.push(path);
      continue;
    }
    var allFiles = await getFiles(dir, componentName, projectName);
    allFiles = allFiles.filter(v => v.type == "file").map(v => v.path);
    for (var ind = 0; ind < allFiles.length; ind++) {
      var file = allFiles[ind];
      if (file[0] == "/") {
        file = file.slice(1)
      }
      var globFile = window.minimatch(file, search);
      if (globFile)
        files.push(file)
    }
  }
  if (rgFile) {
    var rg = new RegExp(rgFile.pattern, rgFile.flags);
    for (var fileIndex = 0; fileIndex < files.length; fileIndex++) {
      var filePath = files[fileIndex];
      try {
        var fileContent = await read(filePath, componentName, projectName, true);
      } catch (e) {
        console.error("[search] a path ", filePath, " not found.");
        continue;
      }
      var text = await fileContent.text();
      if (text.match(rg))
        searchResult.push(filePath.startsWith("/") ? filePath.slice(1) : filePath)
    }
  } else searchResult = files.map(v => {
    if (v.startsWith("/"))
      return v.slice(1);
    return v;
  });
  return {searchResult}
}
async function setSettings(newSettings) {
  await swStart();
  var cacheApp = await caches.open(CACHEFILES);
  var globalSettings = await fetch("/settings.json");
  var oldSettings = await globalSettings.json();
  var projects = await readProjects();
  var project = projects.find(v => v.name == tilepieces.currentProject);
  if (newSettings.projectSettings) {
    project = Object.assign(project, newSettings.projectSettings);
    await cacheApp.put((project.path + "/tilepieces.project.json").replace(/\/\//g, "/"),
      new Response(new Blob([JSON.stringify(project)], {type: 'application/json'})));
  }
  // this keys must not be updated
  if (newSettings.settings) {
    delete newSettings.settings.workspace;
    delete newSettings.settings.components;
    delete newSettings.settings.trash;
    delete newSettings.settings.applicationName;
    delete newSettings.settings.controllersInterface;
    var settings = Object.assign(oldSettings, newSettings.settings);
    //console.log(settings,oldSettings,newSettings)
    await cacheApp.put("/settings.json",
      new Response(new Blob([JSON.stringify(settings)], {type: 'application/json'})));
  }
  return {}
}
async function update(path, blob, component) {
  if (!tilepieces.currentProject)
    throw "[update]Invalid call: no tilepieces.project setted";
  await swStart();
  var parentDirectoryAsArray = path.split("/");
  var name = parentDirectoryAsArray.pop();
  var parentDirectory = parentDirectoryAsArray.length ? parentDirectoryAsArray.join("/") : "";
  try {
    var parentDirectoryRes = await read(parentDirectory, component);
  } catch (e) { // if not exists, create it
    if (e.error != "not found")
      throw e;
    for (var i = 0; i < parentDirectoryAsArray.length; i++) {
      var upParentDirectory = parentDirectoryAsArray.filter((v, index) => index <= i).join("/");
      try {
        parentDirectoryRes = await read(upParentDirectory, component);
      } catch (e) {
        if (e.error != "not found")
          throw e;
        parentDirectoryRes = null;
        await update(upParentDirectory, null, component)
      }
    }
  }
  if (path[0] != "/")
    path = "/" + path;
  var file, isDirectory;
  // update the resource
  if (typeof blob == "undefined" || blob === false || blob === null) {
    isDirectory = true;
    file = new File(["{}"], name, {
      type: "application/json"
    });
  } else {
    isDirectory = false;
    file = new File([blob], name, {
      type: contentTypes[path.split(".").pop()] || "text/plain"
    });
  }
  var cache = await caches.open(CACHEFILES);
  //add directory
  parentDirectoryRes = parentDirectoryRes || await read(parentDirectory, component);
  var parentDirectoryData = parentDirectoryRes.value;
  parentDirectoryData[name] = isDirectory ? {} : name;
  var newParentDirectory = new Blob([JSON.stringify(parentDirectoryData)], {type: 'application/json'});
  parentDirectory = parentDirectory ?
    parentDirectory[0] == "/" ? parentDirectory : "/" + parentDirectory :
    "";
  if (component) {
    var components = await fetch("/components.json");
    components = components ? await components.json() : {};
    var componentPath = (components[component].path.indexOf('http://') === 0 || components[component].path.indexOf('https://') === 0) ?
      components[component].path :
      slashDir(components[component].path);
  }
  var pathWhereToPut = component ? componentPath : CACHEPATH + tilepieces.currentProject;
  await cache.put(pathWhereToPut + parentDirectory.replace(/\/\//g, "/"),
    new Response(newParentDirectory));
  // add file
  var newPath = pathWhereToPut + path;
  await cache.put(newPath, new Response(file));
  window.dispatchEvent(new CustomEvent("tilepieces-file-updating", {
    detail: {
      path,
      isDirectory
    }
  }));
  return {path: newPath};
}
window.storageInterface = {
  create,
  delete: del,
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
if (window.tilepieces) {
  window.tilepieces.storageInterface = storageInterface;
  window.tilepieces.imageTypeProcess = 0;
}

const contentTypeRepresentation = (type, response) => {
  if (!type)
    return false;
  return new Promise((res, rej) => {
    if (
      type.startsWith("text/") ||
      type.startsWith("application/xml") ||
      type.startsWith("application/xhtml+xml") ||
      type.startsWith("application/json") ||
      type.indexOf("+xml") > -1
    )
      response.text().then(res, rej);
    else
      response.blob().then(res, rej);
  })
};
const contentTypes = {
  "html": "text/html;charset=UTF-8",
  "css": "text/css;charset=UTF-8",
  "js": "text/javascript;charset=UTF-8",
  "jpg": "image/jpeg",
  "jpeg": "image/jpeg",
  "gif": "image/gif",
  "png": "image/png",
  "svg": "image/svg+xml",
  "webp": "image/webp",
  "ico": "image/x-icon",
  "collection": "font/collection",
  "otf": "font/otf",
  "sfnt": "font/sfnt",
  "ttf": "font/ttf",
  "woff": "font/woff",
  "woff2": "font/woff2",
  "json": "application/json;charset=UTF-8",
  "mp3": "audio/mpeg",
  "ogg": "video/ogg",
  "mp4": "video/mp4",
  "avi": "video/avi",
  "webm": "video/webm"
};
function deletePath(cache, project, path, component) {
  return new Promise(async (resolve, reject) => {
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

      cache.delete(proxyPath).then(delres => {
        if (delres) {
          resolve({
            path,
            result: 1
          });
        } else reject({
          path,
          result: 0,
          error: "file not found",
          proxyPath,
          project,
          component
        });
      }, reject)
    } catch (e) {
      reject(e)
    }
  })
}
function getComponentsFlat(components = {}, total = {}, path = "") {
  for (var k in components) {
    var c = components[k]
    total[k] = c;
    var componentPath = path + c.path;
    total[k].path = componentPath;
    getComponentsFlat(c.components, total, componentPath)
  }
  return total;
}
async function getFiles(path, component, project) {
  await swStart();
  var response = [];
  if (path.endsWith("/"))
    path = path.slice(0, path.length - 1);
  var readJson = await read(path, component, project);
  var json = readJson.value;
  for (var k in json) {
    var value = json[k];
    if (typeof value === "object") {
      var dirPath = path ? path + "/" + k : k;
      response.push({
        name: k,
        path: path ? path + "/" + k : k,
        type: "dir"
      });
      var dirFiles = await getFiles(dirPath, component, project);
      response = response.concat(dirFiles);
    } else {
      response.push({
        name: k,
        path: path ? path + "/" + json[k] : json[k],
        type: "file"
      });
    }
  }
  return response;
}
function invokeServiceWorkerUpdateFlow(registration) {
  // TODO implement your own UI notification element
  if (confirm("New version of the app is available. Refresh now?")) {
    if (registration.waiting) {
      // let waiting Service Worker know it should became active
      registration.waiting.postMessage('SKIP_WAITING')
    }
  }
}
async function isDir(path, component, project) {
  var proxyToComp = component && !project;
  if (proxyToComp) {
    var components = await fetch("/components.json");
    components = components ? await components.json() : {};
  }
  project = project || tilepieces.currentProject;
  path = path[0] == "/" ? path.slice(1) : path;
  if (!path)
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
      (componentPath + parentDirectory).replace(/\/\//g, "/") :
    CACHEPATH + (project + parentDirectory).replace(/\/\//g, "/");
  var readParent = await cache.match(new Request(cacheToMatch));
  if (!readParent) {
    throw new Error("[isDir] error in reading parent path (path,cacheToMatch,parentDirectory) ->"
      + path + " , " + cacheToMatch + " , " + parentDirectory);
  }
  var json = await readParent.json();
  if (typeof json[resourceName] === "object")
    return true;
}
async function readComponentsInner(components, startingPath = "") {
  var cacheFiles = await caches.open(CACHEFILES);
  for (var k in components) {
    var c = components[k];
    var startPath = startingPath + c.path;
    var componentPathJSON = (startPath + "/tilepieces.component.json").replace(/\/\//g, "/");
    try {
      var componentFile = await cacheFiles.match(new Request(componentPathJSON));
      var component = await componentFile.json();
    } catch (e) {
      console.error("[error on trying to read file component] ->", c.name);
      console.error(e);
      continue;
    }
    component.components = await readComponentsInner(component.components, startPath);
    components[k] = Object.assign({}, component, c);
  }
  return components;
}

async function readComponents() {
  var componentsCacheFile = await fetch("/components.json");
  var cRaw = await componentsCacheFile.json();
  return await readComponentsInner(cRaw, "");
}
async function readProjects() {
  var cacheFiles = await caches.open(CACHEFILES);
  var projectsCacheFile = await fetch("/projects.json");
  var projects = await projectsCacheFile.json();
  for (var i = 0; i < projects.length; i++) {
    var p = projects[i];
    var projectPathJSON = (p.path + "/tilepieces.project.json");
    var projectFile = await cacheFiles.match(new Request(projectPathJSON));
    projects[i] = Object.assign({}, await projectFile.json(), p);
  }
  return projects;
}
function setLocalComponentsTree(componentsToExpand) {
  var components = {};
  for (var name in componentsToExpand) {
    var splittedName = name.split("/");
    if (!components[splittedName[0]])
      components[splittedName[0]] = componentsToExpand[splittedName[0]];
    var parent = components[splittedName[0]];
    for (var i = 1; i < splittedName.length; i++) {
      if (!parent.components ||
        typeof parent.components != "object" ||
        Array.isArray(parent.components))
        parent.components = {};
      var cName = splittedName.slice(0, i + 1).join("/");
      parent.components[cName] = componentsToExpand[cName];
      parent = parent.components[cName];
    }
  }
  return components;
}
function slashDir(string) {
  if (string[0] != "/")
    string = "/" + string;
  if (string.endsWith("/"))
    string = string.slice(0, string.length - 1);
  return string;
}
// https://whatwebcando.today/articles/handling-service-worker-updates/
let sw;

function swStart() {
  return new Promise((resolve, reject) => {
    if (sw)
      return resolve(sw);
    return navigator.serviceWorker.register(
      'sw.js'
    ).then(serviceWorker => {
      window.navigator.serviceWorker.ready
        .then(function (registration) {
          // ensure the case when the updatefound event was missed is also handled
          // by re-invoking the prompt when there's a waiting Service Worker
          if (registration.waiting) {
            invokeServiceWorkerUpdateFlow(registration)
          } else if (!navigator.serviceWorker.controller) { // this should be an hard-refresh
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
    }, error => {
      console.error(error);
      reject(error);
    });
  })
}

})();