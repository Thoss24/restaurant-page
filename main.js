(()=>{"use strict";var e={398:(e,n,t)=>{t.d(n,{Z:()=>p});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),s=t.n(c),d=new URL(t(830),t.b),l=i()(o()),u=s()(d);l.push([e.id,"html, body {\n    padding: 0;\n    margin: 0;\n    background: lightgrey;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n#bodyArea {\n    display: flex;\n    height: 80vh;\n    width: 60vw;\n    background: url("+u+");\n    background-size: 100% 100%;\n}\n\n",""]);const p=l},856:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,"\n#header {\n    display: flex;\n    justify-content: center;\n    flex-direction: row;\n    align-items: center;\n    height: 10vh;\n    width: 60vw;\n    background: black;\n    color: white;\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    gap: 50px\n}\n\nul {\n    list-style-type: none;\n    display: flex;\n    gap: 20px;\n}\n\nli:hover {\n    color: grey;\n    cursor: pointer;\n    background: rgb(17, 14, 14)\n}",""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var h=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},830:(e,n,t)=>{e.exports=t.p+"45bdc76680708ac1d1e6.jpg"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),s=t.n(c),d=t(216),l=t.n(d),u=t(589),p=t.n(u),f=t(856),h={};h.styleTagTransform=p(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),n()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;var m=t(398),v={};v.styleTagTransform=p(),v.setAttributes=s(),v.insert=i().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=l(),n()(m.Z,v),m.Z&&m.Z.locals&&m.Z.locals,function(){const e=document.querySelector("#content"),n=function(){const e=document.createElement("div");e.id="header";const n=document.createElement("h1");n.textContent="MY RESTAURANT";const t=document.createElement("ul");t.id="headerList";const r=document.createElement("li"),o=document.createElement("li"),a=document.createElement("li");return r.textContent="MENU",o.textContent="ABOUT",a.textContent="CONTACT",t.appendChild(r),t.appendChild(o),t.appendChild(a),e.appendChild(n),e.appendChild(t),e}(),t=function(){const e=document.createElement("div");e.id="bodyArea";const n=document.createElement("div");n.id="mainDiv";const t=document.createElement("div");t.id="mainDivTitleArea";const r=document.createElement("h2");return r.textContent="Restaurant menu",e.appendChild(n),n.appendChild(t),t.appendChild(r),e}(),r=function(){const e=document.createElement("footer");e.id="footerArea";const n=document.createElement("div");n.id="footerAreaContent";const t=document.createElement("h2");return t.textContent="Restaurant footer",e.appendChild(n),n.appendChild(t),e}();e.appendChild(n),e.appendChild(t),e.appendChild(r)}()})()})();