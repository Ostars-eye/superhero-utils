!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.superheroUtils=e():t.superheroUtils=e()}(self,(function(){return(()=>{var t={228:t=>{t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}},858:t=>{t.exports=function(t){if(Array.isArray(t))return t}},926:t=>{function e(t,e,r,n,o,i,a){try{var u=t[i](a),s=u.value}catch(t){return void r(t)}u.done?e(s):Promise.resolve(s).then(n,o)}t.exports=function(t){return function(){var r=this,n=arguments;return new Promise((function(o,i){var a=t.apply(r,n);function u(t){e(a,o,i,u,s,"next",t)}function s(t){e(a,o,i,u,s,"throw",t)}u(void 0)}))}}},713:t=>{t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}},884:t=>{t.exports=function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return r}}},521:t=>{t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},479:(t,e,r)=>{var n=r(316);t.exports=function(t,e){if(null==t)return{};var r,o,i=n(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}},316:t=>{t.exports=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}},38:(t,e,r)=>{var n=r(858),o=r(884),i=r(323),a=r(521);t.exports=function(t,e){return n(t)||o(t,e)||i(t,e)||a()}},323:(t,e,r)=>{var n=r(228);t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}},757:(t,e,r)=>{t.exports=r(666)},677:(t,e,r)=>{"use strict";r.r(e),r.d(e,{createButton:()=>N,ensurePaid:()=>P});var n=r(379),o=r.n(n),i=r(525);o()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;var a=r(713),u=r.n(a),s=r(757),c=r.n(s),l=r(926),p=r.n(l),f=r(38),d=r.n(f),h=r(479),m=r.n(h),g=r(358);o()(g.Z,{insert:"head",singleton:!1}),g.Z.locals;const v="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMjkgMjMiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+ZmF2aWNvbjwvdGl0bGU+CiAgICA8ZyBpZD0iUGFnZS01IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj4KICAgICAgICA8ZyBpZD0iZmF2aWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMyLjAwMDAwMCwgMS4wMDAwMDApIiBmaWxsPSIjMTE2MUZFIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0iIzExNjFGRSIgc3Ryb2tlLXdpZHRoPSIwLjMiPgogICAgICAgICAgICA8cGF0aCBkPSJNMzkuNTU0NzAzMSw0LjcwNzM0NTYyZS0xNCBMNTIuOTcxNzkzLDAuMDA0NDUxMDYxNyBMNjAuNTI2NTE5MSw3LjA2NjMzNTgxIEw1NS43MzM2Mjc0LDExLjc2MTM5MjYgTDU1LjY2Mzg0NzYsMTEuODgwNTI1NiBMNTUuNjEyODI0NSwxMS44Nzk5NDQ0IEw0Ni4zMDU3NDE0LDIxIEwzMiw3LjA2MTIzMDI0IEwzOS41NTQ3MDMxLDQuNzA3MzQ1NjJlLTE0IFogTTQwLjQxMTAzNzYsMi4xNjg2Mzk3MyBMMzUuMTQwNTkxNSw3LjA5NDgyMDU2IEw0Ni4zMDA0NzY1LDE3Ljk2ODQzMTcgTDUzLjI5MjgxMDEsMTEuMTE2ODYwOCBMNDQuNTEyNDcxLDIuMTY5OTQ4NzkgTDQwLjQxMTAzNzYsMi4xNjg2Mzk3MyBaIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K";function y(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function b(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?y(Object(r),!0).forEach((function(e){u()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var x,w=function(t){var e=t.url,r=m()(t,["url"]),n=new URL("https://wallet.superhero.com/tip");return n.searchParams.set("url",e),n.searchParams.set("x-success",e),n.searchParams.set("x-cancel",e),Object.entries(r).filter((function(t){var e=d()(t,2)[1];return![void 0,null].includes(e)})).forEach((function(t){var e=d()(t,2),r=e[0],o=e[1];return n.searchParams.set(r,o)})),n},M=function(){var t=p()(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(x){t.next=6;break}return t.next=3,fetch("https://raendom-backend.z52da5wt.xyz/cache/stats");case 3:return t.next=5,t.sent.json();case 5:x=t.sent.by_url;case 6:return t.abrupt("return",(null===(r=x.find((function(t){return t.url===e})))||void 0===r?void 0:r.total_amount_ae)||0);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(t){var e=t.size,r=void 0===e?"icon":e,n=t.url,o=void 0===n?window.location.href:n,i=t.account,a=m()(t,["size","url","account"]),u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return'\n    <a\n      href="'.concat(w(b({url:o},a)),'"\n      ').concat(i?'data-account="'.concat(i,'"'):"",'\n    >\n      <img alt="Superhero Icon" src="').concat(v,'" />\n      ').concat(t&&"<span>".concat(t,"</span>"),"\n    </a>")},s='\n    <div class="tips-amount">\n      <span class="tips">0</span>\n      <span class="ae">AE</span>\n    </div>',l={icon:u(),small:u("Donate")+s,medium:u("Donate Now")+s,large:s+u("Donate Now")};if(!l[r])throw new Error("Unsupported size");var f=document.createElement("div");return f.innerHTML=l[r],f.className="superhero-utils-button ".concat(r),p()(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e=f.querySelector(".tips"))){t.next=5;break}return t.next=4,M(o);case 4:e.innerHTML=t.sent;case 5:case"end":return t.stop()}}),t)})))(),f};const N=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r="string"==typeof t?document.querySelectorAll(t):t,n=function(t){var r=j(e);return t.replaceWith(r),r};return NodeList.prototype.isPrototypeOf(r)?Array.from(r).map(n):n(r)};var I=r(647);o()(I.Z,{insert:"head",singleton:!1}),I.Z.locals;var L="superhero-paywall-paid-urls",S="superhero-paywall-tip-result",O="success",E=function(t){var e=new URL(t);return e.searchParams.delete(S),e.toString()},T=function(){return localStorage[L]?JSON.parse(localStorage[L]):[]},z=function(t){var e=T();e.includes(t)||(e.push(t),localStorage[L]=JSON.stringify(e))};const P=function(){var t=p()(c().mark((function t(){var e,r,n,o,i,a=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=a.length>0&&void 0!==a[0]?a[0]:{},r=e.url,n=void 0===r?E(window.location.href):r,new URL(window.location).searchParams.get(S)===O&&z(n),!T().includes(n)){t.next=4;break}return t.abrupt("return");case 4:(o=document.createElement("div")).className="superhero-utils-paywall",o.innerHTML='\n    <div class="modal">\n      You need to leave a tip to continue\n      <br />\n      <div class="button" />\n    </div>\n  ',(i=new URL(n)).searchParams.set(S,O),N(o.querySelector(".button"),{size:"small",url:n,"x-success":i}),document.body.style.overflow="hidden",document.body.appendChild(o);case 12:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},358:(t,e,r)=>{"use strict";r.d(e,{Z:()=>i});var n=r(645),o=r.n(n)()((function(t){return t[1]}));o.push([t.id,'.superhero-utils-button{padding:0;border:none;background:transparent;display:inline-block;font-family:"IBM Plex Sans",sans-serif}.superhero-utils-button .tips-amount{font-size:32px;line-height:22px;position:relative;text-align:center;padding:19px 0;border:1px solid #babac0;border-radius:5px;margin-bottom:14px;background-color:#fff;color:#000}.superhero-utils-button .tips-amount .ae{color:#1161fe}.superhero-utils-button .tips-amount:after{content:"";width:12px;height:12px;position:absolute;bottom:-7.2px;left:50%;background:#fff;border-left:1px solid #babac0;border-bottom:1px solid #babac0;transform:translateX(-50%) rotate(-45deg);-webkit-transform:translateX(-50%) rotate(-45deg);-ms-transform:translateX(-50%) rotate(-45deg)}.superhero-utils-button a{background:#000;color:#fff;border:none;outline:none;padding:10px 16px 10px 13px;border-radius:5px;font-size:15px;font-weight:700;line-height:20px;display:flex;align-items:center;cursor:pointer;text-decoration:none}.superhero-utils-button a img{height:21px}.superhero-utils-button a span{margin-left:7px}.superhero-utils-button.medium,.superhero-utils-button.small{display:inline-flex;align-items:stretch}.superhero-utils-button.medium .tips-amount:after,.superhero-utils-button.small .tips-amount:after{transform:translateY(-50%) rotate(-45deg);-webkit-transform:translateY(-50%) rotate(-45deg);-ms-transform:translateY(-50%) rotate(-45deg);border:none;border-left:1px solid #babac0;border-top:1px solid #babac0;bottom:auto}.superhero-utils-button.medium .tips-amount{display:inline-block;font-size:15px;padding:11px 10px;margin-bottom:0;margin-left:15px;line-height:17px}.superhero-utils-button.medium .tips-amount:after{width:9px;height:9px;left:-6px;top:50%}.superhero-utils-button.small .tips-amount{display:inline-block;font-size:13px;line-height:13px;padding:8px 5px;margin-bottom:0;margin-left:15px}.superhero-utils-button.small .tips-amount:after{width:9px;height:9px;left:-6px;top:50%}.superhero-utils-button.small a{font-size:13px;padding:7px 13px 7px 8px}.superhero-utils-button.small a img{height:14px}.superhero-utils-button.icon{width:40px;height:40px}.superhero-utils-button.icon a{padding:9px 7px}',""]);const i=o},525:(t,e,r)=>{"use strict";r.d(e,{Z:()=>i});var n=r(645),o=r.n(n)()((function(t){return t[1]}));o.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;700&display=swap);"]),o.push([t.id,"",""]);const i=o},647:(t,e,r)=>{"use strict";r.d(e,{Z:()=>i});var n=r(645),o=r.n(n)()((function(t){return t[1]}));o.push([t.id,'.superhero-utils-paywall{display:flex;position:fixed;top:0;right:0;bottom:0;left:0;background-color:rgba(128,128,128,.5);z-index:100;backdrop-filter:blur(3px)}.superhero-utils-paywall .modal{margin:auto;padding:1rem;background-color:#fff;font-family:"IBM Plex Sans",sans-serif;border:1px solid #babac0;border-radius:5px;text-align:center}.superhero-utils-paywall .modal .superhero-utils-button{margin-top:1rem}',""]);const i=o},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r=t(e);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(t,r,n){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(n)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var u=0;u<t.length;u++){var s=[].concat(t[u]);n&&o[s[0]]||(r&&(s[2]?s[2]="".concat(r," and ").concat(s[2]):s[2]=r),e.push(s))}},e}},666:t=>{var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function c(t,e,r,n){var o=e&&e.prototype instanceof g?e:g,i=Object.create(o.prototype),a=new O(n||[]);return i._invoke=function(t,e,r){var n=p;return function(o,i){if(n===d)throw new Error("Generator is already running");if(n===h){if("throw"===o)throw i;return T()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=I(a,r);if(u){if(u===m)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===p)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var s=l(t,e,r);if("normal"===s.type){if(n=r.done?h:f,s.arg===m)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=h,r.method="throw",r.arg=s.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var p="suspendedStart",f="suspendedYield",d="executing",h="completed",m={};function g(){}function v(){}function y(){}var b={};b[i]=function(){return this};var x=Object.getPrototypeOf,w=x&&x(x(E([])));w&&w!==r&&n.call(w,i)&&(b=w);var M=y.prototype=g.prototype=Object.create(b);function j(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function N(t,e){function r(o,i,a,u){var s=l(t[o],t,i);if("throw"!==s.type){var c=s.arg,p=c.value;return p&&"object"==typeof p&&n.call(p,"__await")?e.resolve(p.__await).then((function(t){r("next",t,a,u)}),(function(t){r("throw",t,a,u)})):e.resolve(p).then((function(t){c.value=t,a(c)}),(function(t){return r("throw",t,a,u)}))}u(s.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function I(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,I(t,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,m;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function E(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:T}}function T(){return{value:e,done:!0}}return v.prototype=M.constructor=y,y.constructor=v,v.displayName=s(y,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,u,"GeneratorFunction")),t.prototype=Object.create(M),t},t.awrap=function(t){return{__await:t}},j(N.prototype),N.prototype[a]=function(){return this},t.AsyncIterator=N,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new N(c(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(M),s(M,u,"Generator"),M[i]=function(){return this},M.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=E,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return u.type="throw",u.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),c=n.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:E(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}},379:(t,e,r)=>{"use strict";var n,o=function(){var t={};return function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}t[e]=r}return t[e]}}(),i=[];function a(t){for(var e=-1,r=0;r<i.length;r++)if(i[r].identifier===t){e=r;break}return e}function u(t,e){for(var r={},n=[],o=0;o<t.length;o++){var u=t[o],s=e.base?u[0]+e.base:u[0],c=r[s]||0,l="".concat(s," ").concat(c);r[s]=c+1;var p=a(l),f={css:u[1],media:u[2],sourceMap:u[3]};-1!==p?(i[p].references++,i[p].updater(f)):i.push({identifier:l,updater:m(f,e),references:1}),n.push(l)}return n}function s(t){var e=document.createElement("style"),n=t.attributes||{};if(void 0===n.nonce){var i=r.nc;i&&(n.nonce=i)}if(Object.keys(n).forEach((function(t){e.setAttribute(t,n[t])})),"function"==typeof t.insert)t.insert(e);else{var a=o(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var c,l=(c=[],function(t,e){return c[t]=e,c.filter(Boolean).join("\n")});function p(t,e,r,n){var o=r?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(t.styleSheet)t.styleSheet.cssText=l(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function f(t,e,r){var n=r.css,o=r.media,i=r.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var d=null,h=0;function m(t,e){var r,n,o;if(e.singleton){var i=h++;r=d||(d=s(e)),n=p.bind(null,r,i,!1),o=p.bind(null,r,i,!0)}else r=s(e),n=f.bind(null,r,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(r)};return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n));var r=u(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var n=0;n<r.length;n++){var o=a(r[n]);i[o].references--}for(var s=u(t,e),c=0;c<r.length;c++){var l=a(r[c]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}r=s}}}}},e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={id:n,exports:{}};return t[n](o,o.exports,r),o.exports}return r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r(677)})()}));