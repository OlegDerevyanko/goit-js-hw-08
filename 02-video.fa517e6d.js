!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequire4c75;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequire4c75=i),i.register("7M9cu",(function(t,n){var r=i("dCfNN"),o=document.querySelector("iframe"),u="videoplayer-current-time",f=new Vimeo.Player(o);f.on("timeupdate",e(r)((function(e){localStorage.setItem(u,e.seconds)}),1e3));var a=localStorage.getItem(u);null!=a&&f.setCurrentTime(a)})),i.register("dCfNN",(function(n,r){var o=i("l5bVx"),u="Expected a function",f=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,l=/^0o[0-7]+$/i,d=parseInt,s="object"==typeof t&&t&&t.Object===Object&&t,p="object"==typeof self&&self&&self.Object===Object&&self,v=s||p||Function("return this")(),y=Object.prototype.toString,m=Math.max,b=Math.min,g=function(){return v.Date.now()};function x(e,t,n){var r,i,o,f,a,c,l=0,d=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError(u);function v(t){var n=r,o=i;return r=i=void 0,l=t,f=e.apply(o,n)}function y(e){return l=e,a=setTimeout(O,t),d?v(e):f}function x(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=o}function O(){var e=g();if(x(e))return T(e);a=setTimeout(O,function(e){var n=t-(e-c);return s?b(n,o-(e-l)):n}(e))}function T(e){return a=void 0,p&&r?v(e):(r=i=void 0,f)}function h(){var e=g(),n=x(e);if(r=arguments,i=this,c=e,n){if(void 0===a)return y(c);if(s)return a=setTimeout(O,t),v(c)}return void 0===a&&(a=setTimeout(O,t)),f}return t=j(t)||0,w(n)&&(d=!!n.leading,o=(s="maxWait"in n)?m(j(n.maxWait)||0,t):o,p="trailing"in n?!!n.trailing:p),h.cancel=function(){void 0!==a&&clearTimeout(a),l=0,r=c=i=a=void 0},h.flush=function(){return void 0===a?f:T(g())},h}function w(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==y.call(t)}(t))return NaN;if(w(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=w(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(f,"");var r=c.test(t);return r||l.test(t)?d(t.slice(2),r?2:8):a.test(t)?NaN:+t}n.exports=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(u);return w(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),x(e,t,{leading:r,maxWait:t,trailing:i})}})),i.register("l5bVx",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e}})),i("7M9cu")}();
//# sourceMappingURL=02-video.fa517e6d.js.map
