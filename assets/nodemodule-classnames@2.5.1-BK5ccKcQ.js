var p=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function l(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var f={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(n){(function(){var a={}.hasOwnProperty;function r(){for(var t="",e=0;e<arguments.length;e++){var o=arguments[e];o&&(t=s(t,i(o)))}return t}function i(t){if(typeof t=="string"||typeof t=="number")return t;if(typeof t!="object")return"";if(Array.isArray(t))return r.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var e="";for(var o in t)a.call(t,o)&&t[o]&&(e=s(e,o));return e}function s(t,e){return e?t?t+" "+e:t+e:t}n.exports?(r.default=r,n.exports=r):window.classNames=r})()})(f);var u=f.exports;const c=l(u);export{p as a,c,l as g};
