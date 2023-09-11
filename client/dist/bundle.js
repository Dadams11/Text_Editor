(()=>{"use strict";var n={935:(n,e,t)=>{t.d(e,{Z:()=>a});var r=t(645),o=t.n(r)()((function(n){return n[1]}));o.push([n.id,"/* app shell CSS */\n:root {\n  --primary: #31a9e1;\n  --gray: #ececec;\n  --whitesmoke: #f5f5f5;\n  --dark: #222;\n  --monoaki: #272822;\n  --navbar-height: 50px;\n}\n\nbody {\n  margin: 0;\n  background-color: var(--monoaki);\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n    Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n}\n\nh1 {\n  font-size: 22px;\n}\n\n#navbar {\n  height: var(--navbar-height);\n  background-color: var(--primary);\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  color: white;\n  font-size: 22px;\n  font-weight: 550;\n  letter-spacing: 0.9px;\n}\n\n.navbar-brand img {\n  padding-top: 10px;\n}\n\n.loading-spinner {\n  animation-duration: 0.75s;\n  animation-iteration-count: infinite;\n  animation-name: rotate-forever;\n  animation-timing-function: linear;\n  height: 30px;\n  width: 30px;\n  border: 3px solid var(--primary);\n  border-right-color: transparent;\n  border-radius: 50%;\n}\n\n.loading-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: calc(100vh - var(--navbar-height));\n}\n\n@keyframes rotate-forever {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.app-update {\n  display: none;\n  position: absolute;\n  right: 10px;\n}\n\n.app-update.show {\n  display: block;\n}\n\n.nav-btn {\n  margin: 25px;\n}\n\n.btn {\n  text-align: center;\n  display: inline-block;\n  padding: 0.5rem 1.2rem;\n  margin: 0;\n  text-decoration: none;\n  font-size: 1rem;\n  border-radius: 0.3rem;\n  border: 1px solid transparent;\n  outline: none;\n  color: #1a1a1a;\n  background-color: #aeaeae;\n  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;\n}\n\n.btn:hover {\n  background-color: #cecece;\n  cursor: pointer;\n}\n\n.btn.btn-squared {\n  border-radius: 0;\n}\n\n.btn.btn-sm {\n  font-size: 0.85rem;\n  padding: 0.3rem 0.9rem;\n}\n\n.btn.btn-lg {\n  font-size: 1.25rem;\n  padding: 0.8rem 1.4rem;\n}\n\n.btn.btn-block {\n  width: 100%;\n  display: block;\n  text-align: center;\n}\n\n.btn.btn-primary {\n  background-color: #2d3e50;\n  color: #d9e9e8;\n}\n\n.btn.btn-primary:hover {\n  background-color: #57779a;\n}\n\n.btn.btn-danger {\n  background-color: #e64c66;\n  color: #ffffff;\n}\n\n.btn.btn-danger:hover {\n  background-color: #ee8294;\n}\n\n.btn.btn-info {\n  background-color: #1bbc9b;\n  color: #ffffff;\n}\n\n.btn.btn-info:hover {\n  background-color: #31e1bd;\n}\n\n.btn.btn-light {\n  background-color: #d9e9e8;\n  color: #1a1a1a;\n}\n\n.btn.btn-light:hover {\n  background-color: #84b8b4;\n}\n\n.btn.btn-dark {\n  background-color: #1a1a1a;\n  color: #d9e9e8;\n}\n\n.btn.btn-dark:hover {\n  background-color: #5f5f5f;\n}\n\n.btn.btn-white {\n  background-color: #ffffff;\n  color: #1a1a1a;\n}\n\n.btn.btn-white:hover {\n  background-color: #cccccc;\n}\n\n.btn.btn-black {\n  background-color: #000000;\n  color: #ffffff;\n}\n\n.btn.btn-black:hover {\n  background-color: #666666;\n}\n\n.btn.btn-link {\n  background-color: #1b89bc;\n  color: #ffffff;\n}\n\n.btn.btn-link:hover {\n  background-color: #31a9e1;\n}\n\n@media only screen and (max-width: 600px) {\n  .nav-btn {\n    display: none;\n  }\n\n  .navbar-brand {\n    display: none;\n  }\n\n  #navbar {\n    justify-content: center;\n  }\n\n  h1 {\n    font-size: 18px;\n  }\n}\n",""]);const a=o},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);r&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),e.push(s))}},e}},379:(n,e,t)=>{var r,o=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),a=[];function i(n){for(var e=-1,t=0;t<a.length;t++)if(a[t].identifier===n){e=t;break}return e}function c(n,e){for(var t={},r=[],o=0;o<n.length;o++){var c=n[o],s=e.base?c[0]+e.base:c[0],u=t[s]||0,d="".concat(s," ").concat(u);t[s]=u+1;var l=i(d),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==l?(a[l].references++,a[l].updater(f)):a.push({identifier:d,updater:h(f,e),references:1}),r.push(d)}return r}function s(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var a=t.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var i=o(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var u,d=(u=[],function(n,e){return u[n]=e,u.filter(Boolean).join("\n")});function l(n,e,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=d(e,o);else{var a=document.createTextNode(o),i=n.childNodes;i[e]&&n.removeChild(i[e]),i.length?n.insertBefore(a,i[e]):n.appendChild(a)}}function f(n,e,t){var r=t.css,o=t.media,a=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var p=null,v=0;function h(n,e){var t,r,o;if(e.singleton){var a=v++;t=p||(p=s(e)),r=l.bind(null,t,a,!1),o=l.bind(null,t,a,!0)}else t=s(e),r=f.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=c(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var o=i(t[r]);a[o].references--}for(var s=c(n,e),u=0;u<t.length;u++){var d=i(t[u]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}t=s}}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{try{self["workbox:window:7.0.0"]&&_()}catch(n){}function n(n,e){return new Promise((function(t){var r=new MessageChannel;r.port1.onmessage=function(n){t(n.data)},n.postMessage(e,[r.port2])}))}function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function r(n,t){var r;if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(r=function(n,t){if(n){if("string"==typeof n)return e(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(n,t):void 0}}(n))||t&&n&&"number"==typeof n.length){r&&(n=r);var o=0;return function(){return o>=n.length?{done:!0}:{done:!1,value:n[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=n[Symbol.iterator]()).next.bind(r)}try{self["workbox:core:7.0.0"]&&_()}catch(n){}var o=function(){var n=this;this.promise=new Promise((function(e,t){n.resolve=e,n.reject=t}))};function a(n,e){var t=location.href;return new URL(n,t).href===new URL(e,t).href}var i=function(n,e){this.type=n,Object.assign(this,e)};function c(n,e,t){return t?e?e(n):n:(n&&n.then||(n=Promise.resolve(n)),e?n.then(e):n)}function s(){}var u={type:"SKIP_WAITING"};function d(n,e){if(!e)return n&&n.then?n.then(s):Promise.resolve()}var l=function(e){var t,r;function s(n,t){var r,s;return void 0===t&&(t={}),(r=e.call(this)||this).nn={},r.tn=0,r.rn=new o,r.en=new o,r.on=new o,r.un=0,r.an=new Set,r.cn=function(){var n=r.fn,e=n.installing;r.tn>0||!a(e.scriptURL,r.sn.toString())||performance.now()>r.un+6e4?(r.vn=e,n.removeEventListener("updatefound",r.cn)):(r.hn=e,r.an.add(e),r.rn.resolve(e)),++r.tn,e.addEventListener("statechange",r.ln)},r.ln=function(n){var e=r.fn,t=n.target,o=t.state,a=t===r.vn,c={sw:t,isExternal:a,originalEvent:n};!a&&r.mn&&(c.isUpdate=!0),r.dispatchEvent(new i(o,c)),"installed"===o?r.wn=self.setTimeout((function(){"installed"===o&&e.waiting===t&&r.dispatchEvent(new i("waiting",c))}),200):"activating"===o&&(clearTimeout(r.wn),a||r.en.resolve(t))},r.dn=function(n){var e=r.hn,t=e!==navigator.serviceWorker.controller;r.dispatchEvent(new i("controlling",{isExternal:t,originalEvent:n,sw:e,isUpdate:r.mn})),t||r.on.resolve(e)},r.gn=(s=function(n){var e=n.data,t=n.ports,o=n.source;return c(r.getSW(),(function(){r.an.has(o)&&r.dispatchEvent(new i("message",{data:e,originalEvent:n,ports:t,sw:o}))}))},function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];try{return Promise.resolve(s.apply(this,n))}catch(n){return Promise.reject(n)}}),r.sn=n,r.nn=t,navigator.serviceWorker.addEventListener("message",r.gn),r}r=e,(t=s).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var l,f=s.prototype;return f.register=function(n){var e=(void 0===n?{}:n).immediate,t=void 0!==e&&e;try{var r=this;return function(n,e){var t=n();return t&&t.then?t.then(e):e()}((function(){if(!t&&"complete"!==document.readyState)return d(new Promise((function(n){return window.addEventListener("load",n)})))}),(function(){return r.mn=Boolean(navigator.serviceWorker.controller),r.yn=r.pn(),c(r.bn(),(function(n){r.fn=n,r.yn&&(r.hn=r.yn,r.en.resolve(r.yn),r.on.resolve(r.yn),r.yn.addEventListener("statechange",r.ln,{once:!0}));var e=r.fn.waiting;return e&&a(e.scriptURL,r.sn.toString())&&(r.hn=e,Promise.resolve().then((function(){r.dispatchEvent(new i("waiting",{sw:e,wasWaitingBeforeRegister:!0}))})).then((function(){}))),r.hn&&(r.rn.resolve(r.hn),r.an.add(r.hn)),r.fn.addEventListener("updatefound",r.cn),navigator.serviceWorker.addEventListener("controllerchange",r.dn),r.fn}))}))}catch(n){return Promise.reject(n)}},f.update=function(){try{return this.fn?d(this.fn.update()):void 0}catch(n){return Promise.reject(n)}},f.getSW=function(){return void 0!==this.hn?Promise.resolve(this.hn):this.rn.promise},f.messageSW=function(e){try{return c(this.getSW(),(function(t){return n(t,e)}))}catch(n){return Promise.reject(n)}},f.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&n(this.fn.waiting,u)},f.pn=function(){var n=navigator.serviceWorker.controller;return n&&a(n.scriptURL,this.sn.toString())?n:void 0},f.bn=function(){try{var n=this;return function(n,e){try{var t=n()}catch(n){return e(n)}return t&&t.then?t.then(void 0,e):t}((function(){return c(navigator.serviceWorker.register(n.sn,n.nn),(function(e){return n.un=performance.now(),e}))}),(function(n){throw n}))}catch(n){return Promise.reject(n)}},(l=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&function(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}(s.prototype,l),s}(function(){function n(){this.Pn=new Map}var e=n.prototype;return e.addEventListener=function(n,e){this.Sn(n).add(e)},e.removeEventListener=function(n,e){this.Sn(n).delete(e)},e.dispatchEvent=function(n){n.target=this;for(var e,t=r(this.Sn(n.type));!(e=t()).done;)(0,e.value)(n)},e.Sn=function(n){return this.Pn.has(n)||this.Pn.set(n,new Set),this.Pn.get(n)},n}());const f=(n,e)=>e.some((e=>n instanceof e));let p,v;const h=new WeakMap,b=new WeakMap,g=new WeakMap,m=new WeakMap,y=new WeakMap;let w={get(n,e,t){if(n instanceof IDBTransaction){if("done"===e)return b.get(n);if("objectStoreNames"===e)return n.objectStoreNames||g.get(n);if("store"===e)return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return S(n[e])},set:(n,e,t)=>(n[e]=t,!0),has:(n,e)=>n instanceof IDBTransaction&&("done"===e||"store"===e)||e in n};function k(n){return"function"==typeof n?(e=n)!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(v||(v=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...n){return e.apply(x(this),n),S(h.get(this))}:function(...n){return S(e.apply(x(this),n))}:function(n,...t){const r=e.call(x(this),n,...t);return g.set(r,n.sort?n.sort():[n]),S(r)}:(n instanceof IDBTransaction&&function(n){if(b.has(n))return;const e=new Promise(((e,t)=>{const r=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),r()},a=()=>{t(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)}));b.set(n,e)}(n),f(n,p||(p=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(n,w):n);var e}function S(n){if(n instanceof IDBRequest)return function(n){const e=new Promise(((e,t)=>{const r=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(S(n.result)),r()},a=()=>{t(n.error),r()};n.addEventListener("success",o),n.addEventListener("error",a)}));return e.then((e=>{e instanceof IDBCursor&&h.set(e,n)})).catch((()=>{})),y.set(e,n),e}(n);if(m.has(n))return m.get(n);const e=k(n);return e!==n&&(m.set(n,e),y.set(e,n)),e}const x=n=>y.get(n),j=["get","getKey","getAll","getAllKeys","count"],E=["put","add","delete","clear"],I=new Map;function L(n,e){if(!(n instanceof IDBDatabase)||e in n||"string"!=typeof e)return;if(I.get(e))return I.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,o=E.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!o&&!j.includes(t))return;const a=async function(n,...e){const a=this.transaction(n,o?"readwrite":"readonly");let i=a.store;r&&(i=i.index(e.shift()));const c=await i[t](...e);return o&&await a.done,c};return I.set(e,a),a}var B;B=w,w={...B,get:(n,e,t)=>L(n,e)||B.get(n,e,t),has:(n,e)=>!!L(n,e)||B.has(n,e)};const D=async()=>function(n,e,{blocked:t,upgrade:r,blocking:o,terminated:a}={}){const i=indexedDB.open(n,e),c=S(i);return r&&i.addEventListener("upgradeneeded",(n=>{r(S(i.result),n.oldVersion,n.newVersion,S(i.transaction))})),t&&i.addEventListener("blocked",(()=>t())),c.then((n=>{a&&n.addEventListener("close",(()=>a())),o&&n.addEventListener("versionchange",(()=>o()))})).catch((()=>{})),c}("jate",1,{upgrade(n){n.objectStoreNames.contains("jate")||n.createObjectStore("jate",{keyPath:"id"})}});D();var P=t(379),M=t.n(P),C=t(935);M()(C.Z,{insert:"head",singleton:!1}),C.Z.locals;const W=document.querySelector("#main");W.innerHTML="",void 0===new class{constructor(){const n=localStorage.getItem("content");if("undefined"==typeof CodeMirror)throw new Error("CodeMirror is not loaded");this.editor=CodeMirror(document.querySelector("#main"),{value:"",mode:"javascript",theme:"monokai",lineNumbers:!0,lineWrapping:!0,autofocus:!0,indentUnit:2,tabSize:2}),(async()=>{const n=(await D()).transaction("jate","readonly"),e=n.objectStore("jate"),t=await e.get(1);return await n.done,t?t.content:null})().then((e=>{console.info("Loaded data from IndexedDB, injecting into editor"),this.editor.setValue(e||n||"\n/*\n       _____  ____________\n      / /   |/_  __/ ____/\n __  / / /| | / / / __/   \n/ /_/ / ___ |/ / / /___   \n ____/_/  |_/_/ /_____/   \njust another text editor\n*/                          \n")})),this.editor.on("change",(()=>{localStorage.setItem("content",this.editor.getValue())})),this.editor.on("blur",(()=>{console.log("The editor has lost focus"),(async n=>{const e=(await D()).transaction("jate","readwrite"),t=e.objectStore("jate");await t.put({id:1,content:n}),await e.done})(localStorage.getItem("content"))}))}}&&(()=>{const n=document.createElement("div");n.classList.add("spinner"),n.innerHTML='\n  <div class="loading-container">\n  <div class="loading-spinner" />\n  </div>\n  ',W.appendChild(n)})(),"serviceWorker"in navigator?new l("/src-sw.js").register():console.error("Service workers are not supported in this browser.")})()})();