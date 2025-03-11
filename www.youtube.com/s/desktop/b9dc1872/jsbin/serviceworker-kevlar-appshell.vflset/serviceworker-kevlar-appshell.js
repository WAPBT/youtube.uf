'use strict';var aa=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ba(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var ca=ba(this);function da(a,b){if(b)a:{var c=ca;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&b!=null&&aa(c,a,{configurable:!0,writable:!0,value:b})}}
function ea(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function r(a){return ea(a())}
da("globalThis",function(a){return a||ca});
da("Symbol.dispose",function(a){return a?a:Symbol("Symbol.dispose")});
da("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&c.push(b[d]);return c}});
da("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(c<0&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
da("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&c.push([d,b[d]]);return c}});
function fa(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
da("Array.prototype.values",function(a){return a?a:function(){return fa(this,function(b,c){return c})}});
da("String.prototype.matchAll",function(a){return a?a:function(b){if(b instanceof RegExp&&!b.global)throw new TypeError("RegExp passed into String.prototype.matchAll() must have global tag.");var c=new RegExp(b,b instanceof RegExp?void 0:"g"),d=this,e=!1,f={next:function(){if(e)return{value:void 0,done:!0};var g=c.exec(d);if(!g)return e=!0,{value:void 0,done:!0};g[0]===""&&(c.lastIndex+=1);return{value:g,done:!1}}};
f[Symbol.iterator]=function(){return f};
return f}});
da("Promise.prototype.finally",function(a){return a?a:function(b){return this.then(function(c){return Promise.resolve(b()).then(function(){return c})},function(c){return Promise.resolve(b()).then(function(){throw c;
})})}});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var t=this||self;function v(a,b){a=a.split(".");b=b||t;for(var c=0;c<a.length;c++)if(b=b[a[c]],b==null)return null;return b}
function ha(a){var b=typeof a;b=b!="object"?b:a?Array.isArray(a)?"array":b:"null";return b=="array"||b=="object"&&typeof a.length=="number"}
function ia(a,b,c){return a.call.apply(a.bind,arguments)}
function ja(a,b,c){if(!a)throw Error();if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function la(a,b,c){la=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ia:ja;return la.apply(null,arguments)}
function w(a,b){a=a.split(".");for(var c=t,d;a.length&&(d=a.shift());)a.length||b===void 0?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function ma(a){return a}
function na(a,b){function c(){}
c.prototype=b.prototype;a.La=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.ub=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
;function oa(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,oa);else{const c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));b!==void 0&&(this.cause=b)}
na(oa,Error);oa.prototype.name="CustomError";const pa=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};/*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
let qa=globalThis.trustedTypes,ra;function sa(){let a=null;if(!qa)return a;try{const b=c=>c;
a=qa.createPolicy("goog#html",{createHTML:b,createScript:b,createScriptURL:b})}catch(b){}return a}
;var ta=class{constructor(a){this.h=a}toString(){return this.h+""}};function ua(a,b=`unexpected value ${a}!`){throw Error(b);}
;function va(a,b){Array.prototype.forEach.call(a,b,void 0)}
function wa(a,b){return Array.prototype.map.call(a,b,void 0)}
function xa(a,b){b=Array.prototype.indexOf.call(a,b,void 0);b>=0&&Array.prototype.splice.call(a,b,1)}
function ya(a,b){for(let c=1;c<arguments.length;c++){const d=arguments[c];if(ha(d)){const e=a.length||0,f=d.length||0;a.length=e+f;for(let g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function za(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b}
;function Aa(a){var b=v("window.location.href");a==null&&(a='Unknown Error of type "null/undefined"');if(typeof a==="string")return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};let c,d;var e=!1;try{c=a.lineNumber||a.line||"Not available"}catch(f){c="Not available",e=!0}try{d=a.fileName||a.filename||a.sourceURL||t.$googDebugFname||b}catch(f){d="Not available",e=!0}b=Ba(a);if(!(!e&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){e=a.message;if(e==
null){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)e=a.constructor.name;else if(e=a.constructor,Ca[e])e=Ca[e];else{e=String(e);if(!Ca[e]){const f=/function\s+([^\(]+)/m.exec(e);Ca[e]=f?f[1]:"[Anonymous]"}e=Ca[e]}e='Unknown Error of type "'+e+'"'}else e="Unknown Error of unknown type";typeof a.toString==="function"&&Object.prototype.toString!==a.toString&&(e+=": "+a.toString())}return{message:e,name:a.name||"UnknownError",lineNumber:c,fileName:d,stack:b||"Not available"}}return{message:a.message,
name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:b}}
function Ba(a,b){b||(b={});b[Da(a)]=!0;let c=a.stack||"";var d=a.cause;d&&!b[Da(d)]&&(c+="\nCaused by: ",d.stack&&d.stack.indexOf(d.toString())==0||(c+=typeof d==="string"?d:d.message+"\n"),c+=Ba(d,b));a=a.errors;if(Array.isArray(a)){d=1;let e;for(e=0;e<a.length&&!(d>4);e++)b[Da(a[e])]||(c+="\nInner error "+d++ +": ",a[e].stack&&a[e].stack.indexOf(a[e].toString())==0||(c+=typeof a[e]==="string"?a[e]:a[e].message+"\n"),c+=Ba(a[e],b));e<a.length&&(c+="\n... "+(a.length-e)+" more inner errors")}return c}
function Da(a){let b="";typeof a.toString==="function"&&(b=""+a);return b+a.stack}
var Ca={};var Ea=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Fa(a){return a?decodeURI(a):a}
function Ga(a,b,c){if(Array.isArray(b))for(let d=0;d<b.length;d++)Ga(a,String(b[d]),c);else b!=null&&c.push(a+(b===""?"":"="+encodeURIComponent(String(b))))}
function Ha(a){const b=[];for(const c in a)Ga(c,a[c],b);return b.join("&")}
;function Ia(){throw Error("Invalid UTF8");}
function Ja(a,b){b=String.fromCharCode.apply(null,b);return a==null?b:a+b}
let Ka=void 0,La;const Ma=typeof TextDecoder!=="undefined";function Na(a){t.setTimeout(()=>{throw a;},0)}
;var Oa,Pa=v("CLOSURE_FLAGS"),Qa=Pa&&Pa[610401301];Oa=Qa!=null?Qa:!1;function Ra(){var a=t.navigator;return a&&(a=a.userAgent)?a:""}
var Sa;const Ta=t.navigator;Sa=Ta?Ta.userAgentData||null:null;function Ua(a){if(!Oa||!Sa)return!1;for(let b=0;b<Sa.brands.length;b++){const {brand:c}=Sa.brands[b];if(c&&c.indexOf(a)!=-1)return!0}return!1}
function x(a){return Ra().indexOf(a)!=-1}
;function Va(){return Oa?!!Sa&&Sa.brands.length>0:!1}
;var Wa=x("Safari")&&!((Va()?Ua("Chromium"):(x("Chrome")||x("CriOS"))&&(Va()||!x("Edge"))||x("Silk"))||(Va()?0:x("Coast"))||(Va()?0:x("Opera"))||(Va()?0:x("Edge"))||(Va()?Ua("Microsoft Edge"):x("Edg/"))||(Va()?Ua("Opera"):x("OPR"))||x("Firefox")||x("FxiOS")||x("Silk")||x("Android"))&&!(x("iPhone")&&!x("iPod")&&!x("iPad")||x("iPad")||x("iPod"));var Xa={},Ya=null;function Za(a,b){b===void 0&&(b=0);$a();b=Xa[b];const c=Array(Math.floor(a.length/3)),d=b[64]||"";let e=0,f=0;for(;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function ab(a){const b=a.length;let c=b*3/4;c%3?c=Math.floor(c):"=.".indexOf(a[b-1])!=-1&&(c="=.".indexOf(a[b-2])!=-1?c-2:c-1);const d=new Uint8Array(c);let e=0;bb(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function bb(a,b){function c(e){for(;d<a.length;){const f=a.charAt(d++),g=Ya[f];if(g!=null)return g;if(!/^[\s\xa0]*$/.test(f))throw Error("Unknown base64 encoding at char: "+f);}return e}
$a();let d=0;for(;;){const e=c(-1),f=c(0),g=c(64),h=c(64);if(h===64&&e===-1)break;b(e<<2|f>>4);g!=64&&(b(f<<4&240|g>>2),h!=64&&b(g<<6&192|h))}}
function $a(){if(!Ya){Ya={};var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"];for(let c=0;c<5;c++){const d=a.concat(b[c].split(""));Xa[c]=d;for(let e=0;e<d.length;e++){const f=d[e];Ya[f]===void 0&&(Ya[f]=e)}}}}
;var cb=typeof Uint8Array!=="undefined",db=!(Va()?0:x("Trident")||x("MSIE"))&&typeof btoa==="function";function eb(a){if(!db)return Za(a);let b="",c=0;const d=a.length-10240;for(;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);return btoa(b)}
const fb=/[-_.]/g,gb={"-":"+",_:"/",".":"="};function hb(a){return gb[a]||""}
function ib(a){if(!db)return ab(a);fb.test(a)&&(a=a.replace(fb,hb));a=atob(a);const b=new Uint8Array(a.length);for(let c=0;c<a.length;c++)b[c]=a.charCodeAt(c);return b}
function jb(a){return cb&&a!=null&&a instanceof Uint8Array}
var kb={};function lb(){return mb||(mb=new nb(null,kb))}
function ob(a){pb(kb);var b=a.h;b=b==null||jb(b)?b:typeof b==="string"?ib(b):null;return b==null?b:a.h=b}
var nb=class{sizeBytes(){const a=ob(this);return a?a.length:0}constructor(a,b){pb(b);this.h=a;if(a!=null&&a.length===0)throw Error("ByteString should be constructed with non-empty values");}};let mb;function pb(a){if(a!==kb)throw Error("illegal external caller");}
;let qb=void 0;function rb(a){a=Error(a);za(a,"warning");return a}
function sb(a){if(a!=null){var b;var c=(b=qb)!=null?b:qb={};b=c[a]||0;b>=5||(c[a]=b+1,a=Error(),za(a,"incident"),Na(a))}}
;var tb=typeof Symbol==="function"&&typeof Symbol()==="symbol";function ub(a,b,c=!1){return typeof Symbol==="function"&&typeof Symbol()==="symbol"?c&&Symbol.for&&a?Symbol.for(a):a!=null?Symbol(a):Symbol():b}
var vb=ub("jas",void 0,!0),wb=ub(void 0,"1oa"),xb=ub(void 0,Symbol()),yb=ub(void 0,"0actk"),zb=ub(void 0,"8utk");[...Object.values({eb:1,cb:2,bb:4,jb:8,ib:16,hb:32,Ra:64,pb:128,Za:256,Ya:512,Wa:1024,ob:2048,Xa:4096,Ua:8192,ab:16384})];const z=tb?vb:"Fa",Ab={Fa:{value:0,configurable:!0,writable:!0,enumerable:!1}},Bb=Object.defineProperties;function Cb(a,b){tb||z in a||Bb(a,Ab);a[z]|=b}
function A(a,b){tb||z in a||Bb(a,Ab);a[z]=b}
function Db(a,b){a[z]&=~b}
;const C=tb&&!1,D=C?Symbol():void 0;var Eb={};function Fb(a){return a!==null&&typeof a==="object"&&!Array.isArray(a)&&a.constructor===Object}
var Gb;const Hb=[];A(Hb,55);Gb=Object.freeze(Hb);function Ib(a){if(a&2)throw Error();}
var Jb=Object.freeze({});function Kb(a,b,c){const d=b&512?0:-1,e=a.length;b=b&64?b&256:!!e&&Fb(a[e-1]);const f=e+(b?-1:0);for(let g=0;g<f;g++)c(g-d,a[g]);if(b){a=a[e-1];for(const g in a)!isNaN(g)&&c(+g,a[g])}}
;function Lb(){return typeof BigInt==="function"}
;function Mb(a){a.Bb=!0;return a}
;var Nb=Mb(a=>typeof a==="number"),Ob=Mb(a=>typeof a==="string"),Pb=Mb(a=>typeof a==="boolean"),Qb=Mb(a=>a!=null&&typeof a==="object"&&typeof a.then==="function");var Rb=typeof t.BigInt==="function"&&typeof t.BigInt(0)==="bigint";var Xb=Mb(a=>Rb?a>=Sb&&a<=Tb:a[0]==="-"?Ub(a,Vb):Ub(a,Wb));
const Vb=Number.MIN_SAFE_INTEGER.toString(),Sb=Rb?BigInt(Number.MIN_SAFE_INTEGER):void 0,Wb=Number.MAX_SAFE_INTEGER.toString(),Tb=Rb?BigInt(Number.MAX_SAFE_INTEGER):void 0;function Ub(a,b){if(a.length>b.length)return!1;if(a.length<b.length||a===b)return!0;for(let c=0;c<a.length;c++){const d=a[c],e=b[c];if(d>e)return!1;if(d<e)return!0}}
;const Yb=typeof Uint8Array.prototype.slice==="function";let E=0,F=0;function $b(a){const b=a>>>0;E=b;F=(a-b)/4294967296>>>0}
function ac(a){if(a<0){$b(0-a);const [b,c]=bc(E,F);E=b>>>0;F=c>>>0}else $b(a)}
function cc(a,b){b>>>=0;a>>>=0;if(b<=2097151)var c=""+(4294967296*b+a);else Lb()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+c*6777216+b*6710656,c+=b*8147497,b*=2,a>=1E7&&(c+=a/1E7>>>0,a%=1E7),c>=1E7&&(b+=c/1E7>>>0,c%=1E7),c=b+dc(c)+dc(a));return c}
function dc(a){a=String(a);return"0000000".slice(a.length)+a}
function bc(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]}
;const ec=typeof BigInt==="function"?BigInt.asIntN:void 0,fc=Number.isSafeInteger,gc=Number.isFinite,hc=Math.trunc;function ic(a){return a.displayName||a.name||"unknown type name"}
const jc=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function kc(a){switch(typeof a){case "bigint":return!0;case "number":return gc(a);case "string":return jc.test(a);default:return!1}}
function lc(a){if(a!=null){if(!gc(a))throw rb("enum");a|=0}return a}
function mc(a){if(typeof a!=="number")throw rb("int32");if(!gc(a))throw rb("int32");return a|0}
function nc(a){if(a==null)return a;if(typeof a==="string"&&a)a=+a;else if(typeof a!=="number")return;return gc(a)?a|0:void 0}
function oc(a){if(!kc(a))throw rb("int64");switch(typeof a){case "string":kc(a);var b=hc(Number(a));if(fc(b))a=String(b);else if(b=a.indexOf("."),b!==-1&&(a=a.substring(0,b)),b=a.length,!(a[0]==="-"?b<20||b===20&&Number(a.substring(0,7))>-922337:b<19||b===19&&Number(a.substring(0,6))<922337)){if(a.length<16)ac(Number(a));else if(Lb())a=BigInt(a),E=Number(a&BigInt(4294967295))>>>0,F=Number(a>>BigInt(32)&BigInt(4294967295));else{b=+(a[0]==="-");F=E=0;var c=a.length;for(let e=0+b,f=(c-b)%6+b;f<=c;e=
f,f+=6){var d=Number(a.slice(e,f));F*=1E6;E=E*1E6+d;E>=4294967296&&(F+=Math.trunc(E/4294967296),F>>>=0,E>>>=0)}if(b){const [e,f]=bc(E,F);E=e;F=f}}a=E;b=F;if(b&2147483648)if(Lb())a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0));else{const [e,f]=bc(a,b);a="-"+cc(e,f)}else a=cc(a,b)}return a;case "bigint":b=a=ec(64,a);if(Ob(b)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(b))throw Error(String(b));}else if(Nb(b)&&!Number.isSafeInteger(b))throw Error(String(b));Rb?a=BigInt(a):a=Pb(a)?a?"1":"0":Ob(a)?a.trim()||"0":
String(a);return a;default:kc(a);a=hc(a);if(!fc(a)){ac(a);b=E;c=F;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,b==0&&(c=c+1>>>0);d=c*4294967296+(b>>>0);b=Number.isSafeInteger(d)?d:cc(b,c);a=typeof b==="number"?a?-b:b:a?"-"+b:b}return a}}
function pc(a){if(a!=null&&typeof a!=="string")throw Error();return a}
function qc(a,b){if(!(a instanceof b))throw Error(`Expected instanceof ${ic(b)} but got ${a&&ic(a.constructor)}`);return a}
function rc(a,b,c){if(a!=null&&typeof a==="object"&&a.T===Eb)return a;if(Array.isArray(a)){var d=a[z]|0,e=d;e===0&&(e|=c&32);e|=c&2;e!==d&&A(a,e);return new b(a)}}
;function sc(a){return a}
;function tc(a){const b=ma(xb);return b?a[b]:void 0}
function uc(a,b){for(const c in a)!isNaN(c)&&b(a,+c,a[c])}
function vc(a){const b=new wc;uc(a,(c,d,e)=>{b[d]=e.slice()});
b.h=a.h;return b}
var wc=class{};function xc(a,b,c,d,e){const f=d?!!(b&32):void 0;d=[];var g=a.length;let h,k,l,p=!1;if(b&64){if(b&256?(g--,h=a[g],k=g):(k=4294967295,h=void 0),!(e||b&512)){p=!0;var n;l=((n=yc)!=null?n:sc)(h?k- -1:b>>15&1023||536870912,-1,a,h);k=l+-1}}else k=4294967295,b&1||(h=g&&a[g-1],Fb(h)?(g--,k=g,l=0):h=void 0);n=void 0;for(let m=0;m<g;m++){let u=a[m];if(u!=null&&(u=c(u,f))!=null)if(m>=k){var q=void 0;((q=n)!=null?q:n={})[m- -1]=u}else d[m]=u}if(h)for(let m in h)if(q=h[m],q!=null&&(q=c(q,f))!=null)if(g=+m,g<
l)d[g+-1]=q;else{let u;((u=n)!=null?u:n={})[m]=q}n&&(p?d.push(n):d[k]=n);e&&(A(d,b&33522241|(n!=null?290:34)),ma(xb)&&(a=tc(a))&&a instanceof wc&&(d[xb]=vc(a)));return d}
function zc(a){switch(typeof a){case "number":return Number.isFinite(a)?a:""+a;case "bigint":return Xb(a)?Number(a):""+a;case "boolean":return a?1:0;case "object":if(Array.isArray(a)){var b=a[z]|0;return a.length===0&&b&1?void 0:xc(a,b,zc,!1,!1)}if(a.T===Eb)return Ac(a);if(a instanceof nb)return b=a.h,b==null?"":typeof b==="string"?b:a.h=eb(b);if(jb(a))return jb(a)&&sb(zb),eb(a);return}return a}
let yc;function Ac(a){a=C?a[D]:a.o;return xc(a,a[z]|0,zc,void 0,!1)}
;let Bc,Cc;function Dc(a){switch(typeof a){case "boolean":return Bc||(Bc=[0,void 0,!0]);case "number":return a>0?void 0:a===0?Cc||(Cc=[0,void 0]):[-a,void 0];case "string":return[0,a];case "object":return a}}
function Ec(a,b,c){a=Fc(a,b[0],b[1],c?1:2);b!==Bc&&c&&Cb(a,8192);return a}
function Fc(a,b,c,d){if(a==null){var e=96;c?(a=[c],e|=512):a=[];b&&(e=e&-33521665|(b&1023)<<15)}else{if(!Array.isArray(a))throw Error("narr");e=a[z]|0;8192&e||!(64&e)||2&e||Gc();if(e&1024)throw Error("farr");if(e&64)return d!==3||e&16384||A(a,e|16384),a;d===1||d===2||(e|=64);if(c&&(e|=512,c!==a[0]))throw Error("mid");a:{c=a;var f=c.length;if(f){var g=f-1;const k=c[g];if(Fb(k)){e|=256;b=e&512?0:-1;g-=b;if(g>=1024)throw Error("pvtlmt");for(var h in k)f=+h,f<g&&(c[f+b]=k[h],delete k[h]);e=e&-33521665|
(g&1023)<<15;break a}}if(b){h=Math.max(b,f-(e&512?0:-1));if(h>1024)throw Error("spvt");e=e&-33521665|(h&1023)<<15}}}d===3&&(e|=16384);A(a,e);return a}
function Gc(){sb(yb)}
;function Hc(a,b){if(typeof a!=="object")return a;if(Array.isArray(a)){const d=a[z]|0;if(a.length===0&&d&1)return;if(d&2)return a;var c;if(c=b)c=d===0||!!(d&32)&&!(d&64||!(d&16));return c?(Cb(a,34),d&4&&Object.freeze(a),a):xc(a,d,Hc,b!==void 0,!0)}if(a.T===Eb)return b=C?a[D]:a.o,c=b[z]|0,c&2?a:xc(b,c,Hc,!0,!0);if(a instanceof nb)return a;if(jb(a))return jb(a)&&sb(zb),new Uint8Array(a)}
function Ic(a){const b=C?a[D]:a.o;if(!((b[z]|0)&2))return a;a=new a.constructor(xc(b,b[z]|0,Hc,!0,!0));Db(C?a[D]:a.o,2);return a}
;function Jc(a,b){a=C?a[D]:a.o;return Kc(a,a[z]|0,b)}
function Kc(a,b,c){if(c===-1)return null;const d=c+(b&512?0:-1),e=a.length-1;if(d>=e&&b&256)return a[e][c];if(d<=e)return a[d]}
function G(a,b,c){const d=C?a[D]:a.o;let e=d[z]|0;Ib(e);H(d,e,b,c);return a}
function H(a,b,c,d){const e=b&512?0:-1,f=c+e;var g=a.length-1;if(f>=g&&b&256)return a[g][c]=d,b;if(f<=g)return a[f]=d,b;d!==void 0&&(g=b>>15&1023||536870912,c>=g?d!=null&&(a[g+e]={[c]:d},b|=256,A(a,b)):a[f]=d);return b}
function Lc(a,b,c){a=Kc(a,b,c);return Array.isArray(a)?a:Gb}
function Mc(a,b){a===0&&(a=Nc(a,b));return a|1}
function Oc(a){return!!(2&a)&&!!(4&a)||!!(1024&a)}
function Pc(a,b,c,d){const e=C?a[D]:a.o;var f=e[z]|0;Ib(f);if(d==null){var g=Qc(e);if(Rc(g,e,f,c)===b)g.set(c,0);else return a}else{c.includes(b);g=Qc(e);const h=Rc(g,e,f,c);h!==b&&(h&&(f=H(e,f,h)),g.set(c,b))}H(e,f,b,d);return a}
function Qc(a){if(tb){var b;return(b=a[wb])!=null?b:a[wb]=new Map}if(wb in a)return a[wb];b=new Map;Object.defineProperty(a,wb,{value:b});return b}
function Rc(a,b,c,d){let e=a.get(d);if(e!=null)return e;e=0;for(let f=0;f<d.length;f++){const g=d[f];Kc(b,c,g)!=null&&(e!==0&&(c=H(b,c,e)),e=g)}a.set(d,e);return e}
function Sc(a,b,c){let d=a[z]|0;const e=Kc(a,d,c);let f;if(e!=null&&e.T===Eb)return b=Ic(e),b!==e&&H(a,d,c,b),C?b[D]:b.o;if(Array.isArray(e)){const g=e[z]|0;g&2?(f=Ec(xc(e,g,Hc,!0,!0),b,!0),Db(f,2)):g&64?f=e:f=Ec(f,b,!0)}else f=Ec(void 0,b,!0);f!==e&&H(a,d,c,f);return f}
function Tc(a,b,c){var d=C?a[D]:a.o,e=d[z]|0,f=Kc(d,e,c);b=rc(f,b,e);b!==f&&b!=null&&H(d,e,c,b);d=b;if(d==null)return d;a=C?a[D]:a.o;e=a[z]|0;e&2||(f=Ic(d),f!==d&&(d=f,H(a,e,c,d)));return d}
function Uc(a,b,c,d,e,f,g){a=C?a[D]:a.o;var h=!!(2&b);const k=h?1:e;f=!!f;g&&(g=!h);e=Lc(a,b,d);var l=e[z]|0;h=!!(4&l);if(!h){l=Mc(l,b);var p=e,n=b;const q=!!(2&l);q&&(n|=2);let m=!q,u=!0,B=0,y=0;for(;B<p.length;B++){const I=rc(p[B],c,n);if(I instanceof c){if(!q){const ka=!!(((C?I[D]:I.o)[z]|0)&2);m&&(m=!ka);u&&(u=ka)}p[y++]=I}}y<B&&(p.length=y);l|=4;l=u?l|16:l&-17;l=m?l|8:l&-9;A(p,l);q&&Object.freeze(p)}if(g&&!(8&l||!e.length&&(k===1||k===4&&32&l))){Oc(l)&&(e=Array.prototype.slice.call(e),l=Nc(l,
b),b=H(a,b,d,e));c=e;g=l;for(p=0;p<c.length;p++)l=c[p],n=Ic(l),l!==n&&(c[p]=n);g|=8;g=c.length?g&-17:g|16;A(c,g);l=g}k===1||k===4&&32&l?Oc(l)||(b=l,l|=!e.length||16&l&&(!h||32&l)?2:1024,l!==b&&A(e,l),Object.freeze(e)):(k===2&&Oc(l)&&(e=Array.prototype.slice.call(e),l=Nc(l,b),l=Vc(l,b,f),A(e,l),b=H(a,b,d,e)),Oc(l)||(d=l,l=Vc(l,b,f),l!==d&&A(e,l)));return e}
function J(a,b,c,d){d!=null?qc(d,b):d=void 0;return G(a,c,d)}
function Nc(a,b){a=(2&b?a|2:a&-3)|32;return a&=-1025}
function Vc(a,b,c){32&b&&c||(a&=-33);return a}
function Wc(a,b,c,d){const e=(C?a[D]:a.o)[z]|0;Ib(e);a=Uc(a,e,c,b,2,!0);d=d!=null?qc(d,c):new c;a.push(d);((C?d[D]:d.o)[z]|0)&2?Db(a,8):Db(a,16)}
function Xc(a,b){a=Jc(a,b);return a==null||typeof a==="string"?a:void 0}
function Yc(a,b){let c;return(c=Xc(a,b))!=null?c:""}
function Zc(a,b){var c=$c;const d=C?a[D]:a.o;c=Rc(Qc(d),d,d[z]|0,c);return Xc(a,c===b?b:-1)}
function K(a,b,c){return G(a,b,pc(c))}
;function ad(a,b){return Error(`Invalid wire type: ${a} (at position ${b})`)}
function bd(){return Error("Failed to read varint, encoding is invalid.")}
function cd(a,b){return Error(`Tried to read past the end of the data ${b} > ${a}`)}
;function dd(a){if(typeof a==="string")return{buffer:ib(a),J:!1};if(Array.isArray(a))return{buffer:new Uint8Array(a),J:!1};if(a.constructor===Uint8Array)return{buffer:a,J:!1};if(a.constructor===ArrayBuffer)return{buffer:new Uint8Array(a),J:!1};if(a.constructor===nb)return{buffer:ob(a)||new Uint8Array(0),J:!0};if(a instanceof Uint8Array)return{buffer:new Uint8Array(a.buffer,a.byteOffset,a.byteLength),J:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers");
}
;function ed(a){const b=a.j;let c=a.h,d=b[c++],e=d&127;if(d&128&&(d=b[c++],e|=(d&127)<<7,d&128&&(d=b[c++],e|=(d&127)<<14,d&128&&(d=b[c++],e|=(d&127)<<21,d&128&&(d=b[c++],e|=d<<28,d&128&&b[c++]&128&&b[c++]&128&&b[c++]&128&&b[c++]&128&&b[c++]&128)))))throw bd();fd(a,c);return e}
function fd(a,b){a.h=b;if(b>a.i)throw cd(a.i,b);}
function gd(a,b){if(b<0)throw Error(`Tried to read a negative byte length: ${b}`);const c=a.h,d=c+b;if(d>a.i)throw cd(b,a.i-c);a.h=d;return c}
var hd=class{constructor(a,b,c,d){this.j=null;this.m=!1;this.h=this.i=this.l=0;this.init(a,b,c,d)}init(a,b,c,{Y:d=!1}={}){this.Y=d;a&&(a=dd(a),this.j=a.buffer,this.m=a.J,this.l=b||0,this.i=c!==void 0?this.l+c:this.j.length,this.h=this.l)}clear(){this.j=null;this.m=!1;this.h=this.i=this.l=0;this.Y=!1}reset(){this.h=this.l}},id=[];function jd(a,b,c,d){if(kd.length){const e=kd.pop();ld(e,d);e.h.init(a,b,c,d);return e}return new md(a,b,c,d)}
function ld(a,{ia:b=!1}={}){a.ia=b}
function nd(a){a.h.clear();a.l=-1;a.i=-1;kd.length<100&&kd.push(a)}
function od(a){var b=a.h;if(b.h==b.i)return!1;a.j=a.h.h;var c=ed(a.h)>>>0;b=c>>>3;c&=7;if(!(c>=0&&c<=5))throw ad(c,a.j);if(b<1)throw Error(`Invalid field number: ${b} (at position ${a.j})`);a.l=b;a.i=c;return!0}
function pd(a){switch(a.i){case 0:if(a.i!=0)pd(a);else a:{a=a.h;var b=a.h;const c=b+10,d=a.j;for(;b<c;)if((d[b++]&128)===0){fd(a,b);break a}throw bd();}break;case 1:a=a.h;fd(a,a.h+8);break;case 2:a.i!=2?pd(a):(b=ed(a.h)>>>0,a=a.h,fd(a,a.h+b));break;case 5:a=a.h;fd(a,a.h+4);break;case 3:b=a.l;do{if(!od(a))throw Error("Unmatched start-group tag: stream EOF");if(a.i==4){if(a.l!=b)throw Error("Unmatched end-group tag");break}pd(a)}while(1);break;default:throw ad(a.i,a.j);}}
function qd(a,b,c){const d=a.h.i,e=ed(a.h)>>>0,f=a.h.h+e;let g=f-d;g<=0&&(a.h.i=f,c(b,a,void 0,void 0,void 0),g=f-a.h.h);if(g)throw Error("Message parsing ended unexpectedly. Expected to read "+`${e} bytes, instead read ${e-g} bytes, either the `+"data ended unexpectedly or the message misreported its own length");a.h.h=f;a.h.i=d}
var md=class{constructor(a,b,c,d){if(id.length){const e=id.pop();e.init(a,b,c,d);a=e}else a=new hd(a,b,c,d);this.h=a;this.j=this.h.h;this.i=this.l=-1;ld(this,d)}reset(){this.h.reset();this.j=this.h.h;this.i=this.l=-1}},kd=[];var L=class{constructor(a,b,c){a=Fc(a,b,c,3);C?this[D]=a:this.o=a}toJSON(){return Ac(this)}clone(){var a=this;const b=C?a[D]:a.o;a=new a.constructor(xc(b,b[z]|0,Hc,!0,!0));Db(C?a[D]:a.o,2);return a}J(){return!!(((C?this[D]:this.o)[z]|0)&2)}};L.prototype.T=Eb;function rd(){const a=class{constructor(){throw Error();}};Object.setPrototypeOf(a,a.prototype);return a}
var sd=rd();var td=class{constructor(a,b){this.W=a;a=ma(sd);this.h=!!a&&b===a||!1}};const ud=new td(function(a,b,c,d,e){if(a.i!==2)return!1;qd(a,Sc(b,d,c),e);return!0},sd),vd=new td(function(a,b,c,d,e){if(a.i!==2)return!1;
qd(a,Sc(b,d,c),e);return!0},sd);
var wd=Symbol(),xd=Symbol(),yd=Symbol();let zd,Ad;
function Bd(a){var b=Cd,c=Dd,d=a[wd];if(d)return d;d={};d.wa=a;d.ca=Dc(a[0]);var e=a[1];let f=1;e&&e.constructor===Object&&(d.extensions=e,e=a[++f],typeof e==="function"&&(d.Ga=!0,zd!=null||(zd=e),Ad!=null||(Ad=a[f+1]),e=a[f+=2]));const g={};for(;e&&Array.isArray(e)&&e.length&&typeof e[0]==="number"&&e[0]>0;){for(var h=0;h<e.length;h++)g[e[h]]=e;e=a[++f]}for(h=1;e!==void 0;){typeof e==="number"&&(h+=e,e=a[++f]);let p;var k=void 0;e instanceof td?p=e:(p=ud,f--);let n;if((n=p)==null?0:n.h){e=a[++f];
k=a;var l=f;typeof e==="function"&&(e=e(),k[l]=e);k=e}e=a[++f];l=h+1;typeof e==="number"&&e<0&&(l-=e,e=a[++f]);for(;h<l;h++){const q=g[h];k?c(d,h,p,k,q):b(d,h,p,q)}}return a[wd]=d}
;function Cd(a,b,c,d){const e=c.W;a[b]=d?(f,g,h)=>e(f,g,h,d):e}
function Dd(a,b,c,d,e){const f=c.W;let g,h;a[b]=(k,l,p)=>f(k,l,p,h||(h=Bd(d).ca),g||(g=Ed(d)),e)}
function Ed(a){let b=a[xd];if(b!=null)return b;const c=Bd(a);b=c.Ga?(d,e)=>zd(d,e,c):(d,e)=>{const f=d[z]|0;
for(;od(e)&&e.i!=4;){var g=e.l,h=c[g];if(h==null){var k=c.extensions;k&&(k=k[g])&&(k=Fd(k),k!=null&&(h=c[g]=k))}if(h==null||!h(e,d,g)){k=e;h=k.j;pd(k);if(k.ia)var l=void 0;else{var p=k.h.h-h;k.h.h=h;k=k.h;h=p;if(h==0)l=lb();else{var n=gd(k,h);k.Y&&k.m?h=k.j.subarray(n,n+h):(k=k.j,p=n,h=n+h,h=p===h?new Uint8Array(0):Yb?k.slice(p,h):new Uint8Array(k.subarray(p,h)));l=h.length==0?lb():new nb(h,kb)}}p=k=h=void 0;n=d;l&&((h=(k=(p=n[xb])!=null?p:n[xb]=new wc)[g])!=null?h:k[g]=[]).push(l)}}if(e=tc(d))e.h=
c.wa[yd];f&8192&&Cb(d,34);return!0};
a[xd]=b;a[yd]=Gd.bind(a);return b}
function Gd(a,b,c){const d=this[wd],e=this[xd],f=Ec(void 0,d.ca,!1),g=tc(a);if(g){var h=!1,k=d.extensions;if(k&&(g==null||uc(g,(l,p,n)=>{if(n.length!==0)if(k[p])for(const q of n){l=jd(q);try{h=!0,e(f,l)}finally{nd(l)}}else c==null||c(a,p,n)}),h)){let l=a[z]|0;
if(l&2&&l&16384)throw Error();Kb(f,f[z]|0,(p,n)=>{if(Kc(a,l,p)!=null)switch(b==null?void 0:b.Mb){case 1:return;default:throw Error();}l=H(a,l,p,n);delete g[p]})}}}
function Fd(a){a=Array.isArray(a)?a[0]instanceof td?a:[vd,a]:[a,void 0];const b=a[0].W;if(a=a[1]){const c=Ed(a),d=Bd(a).ca;return(e,f,g)=>b(e,f,g,d,c)}return b}
;var Hd;
Hd=new td(function(a,b,c){if(a.i!==2)return!1;var d=ed(a.h)>>>0;a=a.h;var e=gd(a,d);a=a.j;if(Ma){var f=a,g;(g=La)||(g=La=new TextDecoder("utf-8",{fatal:!0}));d=e+d;f=e===0&&d===f.length?f:f.subarray(e,d);try{var h=g.decode(f)}catch(l){if(Ka===void 0){try{g.decode(new Uint8Array([128]))}catch(p){}try{g.decode(new Uint8Array([97])),Ka=!0}catch(p){Ka=!1}}!Ka&&(La=void 0);throw l;}}else{h=e;d=h+d;e=[];let l=null;let p;for(;h<d;){var k=a[h++];k<128?e.push(k):k<224?h>=d?Ia():(p=a[h++],k<194||(p&192)!==
128?(h--,Ia()):e.push((k&31)<<6|p&63)):k<240?h>=d-1?Ia():(p=a[h++],(p&192)!==128||k===224&&p<160||k===237&&p>=160||((g=a[h++])&192)!==128?(h--,Ia()):e.push((k&15)<<12|(p&63)<<6|g&63)):k<=244?h>=d-2?Ia():(p=a[h++],(p&192)!==128||(k<<28)+(p-144)>>30!==0||((g=a[h++])&192)!==128||((f=a[h++])&192)!==128?(h--,Ia()):(k=(k&7)<<18|(p&63)<<12|(g&63)<<6|f&63,k-=65536,e.push((k>>10&1023)+55296,(k&1023)+56320))):Ia();e.length>=8192&&(l=Ja(l,e),e.length=0)}h=Ja(l,e)}H(b,b[z]|0,c,h);return!0},rd());
var Id=function(a,b,c=sd){return new td(a,c)}(function(a,b,c,d,e){if(a.i!==2)return!1;
d=Ec(void 0,d,!0);var f=b[z]|0;Ib(f);let g=Lc(b,f,c);const h=g!==Gb;if(64&f||!(8192&f)||!h){const k=h?g[z]|0:0;let l=k;if(!h||2&l||Oc(l)||4&l&&!(32&l))g=Array.prototype.slice.call(g),l=Nc(l,f),f=H(b,f,c,g);l=Mc(l,f)&-13;l=Vc(l&-17,f,!0);l!==k&&A(g,l)}g.push(d);qd(a,d,e);return!0},function(a,b,c,d,e){if(Array.isArray(b))for(let l=0;l<b.length;l++){var f=e,g=a,h=g.h;
var k=b[l];k=k instanceof L?C?k[D]:k.o:Array.isArray(k)?Ec(k,d,!1):void 0;h.call(g,c,k,f)}});function Jd(){}
;function Kd(a){for(const b in a)return!1;return!0}
function Ld(a){if(!a||typeof a!=="object")return a;if(typeof a.clone==="function")return a.clone();if(typeof Map!=="undefined"&&a instanceof Map)return new Map(a);if(typeof Set!=="undefined"&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());const b=Array.isArray(a)?[]:typeof ArrayBuffer!=="function"||typeof ArrayBuffer.isView!=="function"||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length);for(const c in a)b[c]=Ld(a[c]);return b}
const Md="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Nd(a,b){let c,d;for(let e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(let f=0;f<Md.length;f++)c=Md[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function Od(a,b){this.h=a===Pd&&b||""}
Od.prototype.toString=function(){return this.h};
var Pd={};new Od(Pd,"");function Qd(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.indexOf("blob:")===0&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();a.indexOf("//")==0&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");c!=-1&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if(c!=="http"&&c!=="https"&&c!=="chrome-extension"&&
c!=="moz-extension"&&c!=="file"&&c!=="android-app"&&c!=="chrome-search"&&c!=="chrome-untrusted"&&c!=="chrome"&&c!=="app"&&c!=="devtools")throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(d!=-1){var e=b.substring(d+1);b=b.substring(0,d);if(c==="http"&&e!=="80"||c==="https"&&e!=="443")a=":"+e}return c+"://"+b+a}
;function Rd(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;p=l=0}
function b(n){for(var q=g,m=0;m<64;m+=4)q[m/4]=n[m]<<24|n[m+1]<<16|n[m+2]<<8|n[m+3];for(m=16;m<80;m++)n=q[m-3]^q[m-8]^q[m-14]^q[m-16],q[m]=(n<<1|n>>>31)&4294967295;n=e[0];var u=e[1],B=e[2],y=e[3],I=e[4];for(m=0;m<80;m++){if(m<40)if(m<20){var ka=y^u&(B^y);var Zb=1518500249}else ka=u^B^y,Zb=1859775393;else m<60?(ka=u&B|y&(u|B),Zb=2400959708):(ka=u^B^y,Zb=3395469782);ka=((n<<5|n>>>27)&4294967295)+ka+I+Zb+q[m]&4294967295;I=y;y=B;B=(u<<30|u>>>2)&4294967295;u=n;n=ka}e[0]=e[0]+n&4294967295;e[1]=e[1]+u&4294967295;
e[2]=e[2]+B&4294967295;e[3]=e[3]+y&4294967295;e[4]=e[4]+I&4294967295}
function c(n,q){if(typeof n==="string"){n=unescape(encodeURIComponent(n));for(var m=[],u=0,B=n.length;u<B;++u)m.push(n.charCodeAt(u));n=m}q||(q=n.length);m=0;if(l==0)for(;m+64<q;)b(n.slice(m,m+64)),m+=64,p+=64;for(;m<q;)if(f[l++]=n[m++],p++,l==64)for(l=0,b(f);m+64<q;)b(n.slice(m,m+64)),m+=64,p+=64}
function d(){var n=[],q=p*8;l<56?c(h,56-l):c(h,64-(l-56));for(var m=63;m>=56;m--)f[m]=q&255,q>>>=8;b(f);for(m=q=0;m<5;m++)for(var u=24;u>=0;u-=8)n[q++]=e[m]>>u&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;k<64;++k)h[k]=0;var l,p;a();return{reset:a,update:c,digest:d,za:function(){for(var n=d(),q="",m=0;m<n.length;m++)q+="0123456789ABCDEF".charAt(Math.floor(n[m]/16))+"0123456789ABCDEF".charAt(n[m]%16);return q}}}
;function Sd(a,b,c){var d=String(t.location.href);return d&&a&&b?[b,Td(Qd(d),a,c||null)].join(" "):null}
function Td(a,b,c){var d=[];let e=[];if((Array.isArray(c)?2:1)==1)return e=[b,a],va(d,function(h){e.push(h)}),Ud(e.join(" "));
const f=[],g=[];va(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=f.length==0?[c,b,a]:[f.join(":"),c,b,a];va(d,function(h){e.push(h)});
a=Ud(e.join(" "));a=[c,a];g.length==0||a.push(g.join(""));return a.join("_")}
function Ud(a){const b=Rd();b.update(a);return b.za().toLowerCase()}
;function Vd(){this.h=document||{cookie:""}}
Vd.prototype.isEnabled=function(){if(!t.navigator.cookieEnabled)return!1;if(this.h.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{la:60});if(this.get("TESTCOOKIESENABLED")!=="1")return!1;this.remove("TESTCOOKIESENABLED");return!0};
Vd.prototype.set=function(a,b,c){let d,e,f,g=!1,h;typeof c==="object"&&(h=c.Pb,g=c.Qb||!1,f=c.domain||void 0,e=c.path||void 0,d=c.la);if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');d===void 0&&(d=-1);this.h.cookie=a+"="+b+(f?";domain="+f:"")+(e?";path="+e:"")+(d<0?"":d==0?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+d*1E3)).toUTCString())+(g?";secure":"")+(h!=null?";samesite="+h:"")};
Vd.prototype.get=function(a,b){const c=a+"=",d=(this.h.cookie||"").split(";");for(let e=0,f;e<d.length;e++){f=pa(d[e]);if(f.lastIndexOf(c,0)==0)return f.slice(c.length);if(f==a)return""}return b};
Vd.prototype.remove=function(a,b,c){const d=this.get(a)!==void 0;this.set(a,"",{la:0,path:b,domain:c});return d};
Vd.prototype.clear=function(){var a=(this.h.cookie||"").split(";");const b=[],c=[];let d,e;for(let f=0;f<a.length;f++)e=pa(a[f]),d=e.indexOf("="),d==-1?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;a>=0;a--)this.remove(b[a])};function Wd(a,b,c,d){(a=t[a])||typeof document==="undefined"||(a=(new Vd).get(b));return a?Sd(a,c,d):null}
;var Xd=typeof AsyncContext!=="undefined"&&typeof AsyncContext.Snapshot==="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function Yd(){this.l=this.l;this.i=this.i}
Yd.prototype.l=!1;Yd.prototype.dispose=function(){this.l||(this.l=!0,this.m())};
Yd.prototype[Symbol.dispose]=function(){this.dispose()};
Yd.prototype.addOnDisposeCallback=function(a,b){this.l?b!==void 0?a.call(b):a():(this.i||(this.i=[]),b&&(a=a.bind(b)),this.i.push(a))};
Yd.prototype.m=function(){if(this.i)for(;this.i.length;)this.i.shift()()};function Zd(a,b){a.l(b);a.i<100&&(a.i++,b.next=a.h,a.h=b)}
class $d{constructor(a,b){this.j=a;this.l=b;this.i=0;this.h=null}get(){let a;this.i>0?(this.i--,a=this.h,this.h=a.next,a.next=null):a=this.j();return a}};class ae{constructor(){this.i=this.h=null}add(a,b){const c=be.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c}remove(){let a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a}}var be=new $d(()=>new ce,a=>a.reset());
class ce{constructor(){this.next=this.scope=this.h=null}set(a,b){this.h=a;this.scope=b;this.next=null}reset(){this.next=this.scope=this.h=null}};let de,ee=!1,fe=new ae,he=(a,b)=>{de||ge();ee||(de(),ee=!0);fe.add(a,b)},ge=()=>{const a=Promise.resolve(void 0);
de=()=>{a.then(ie)}};
function ie(){let a;for(;a=fe.remove();){try{a.h.call(a.scope)}catch(b){Na(b)}Zd(be,a)}ee=!1}
;function M(a){this.h=0;this.v=void 0;this.l=this.i=this.j=null;this.m=this.s=!1;if(a!=Jd)try{const b=this;a.call(void 0,function(c){je(b,2,c)},function(c){je(b,3,c)})}catch(b){je(this,3,b)}}
function ke(){this.next=this.context=this.i=this.j=this.h=null;this.l=!1}
ke.prototype.reset=function(){this.context=this.i=this.j=this.h=null;this.l=!1};
var le=new $d(function(){return new ke},function(a){a.reset()});
function me(a,b,c){const d=le.get();d.j=a;d.i=b;d.context=c;return d}
function ne(a){if(a instanceof M)return a;const b=new M(Jd);je(b,2,a);return b}
M.prototype.then=function(a,b,c){return oe(this,Xd(typeof a==="function"?a:null),Xd(typeof b==="function"?b:null),c)};
M.prototype.$goog_Thenable=!0;M.prototype.C=function(a,b){return oe(this,null,Xd(a),b)};
M.prototype.catch=M.prototype.C;M.prototype.cancel=function(a){if(this.h==0){const b=new pe(a);he(function(){qe(this,b)},this)}};
function qe(a,b){if(a.h==0)if(a.j){var c=a.j;if(c.i){var d=0,e=null,f=null;for(let g=c.i;g&&(g.l||(d++,g.h==a&&(e=g),!(e&&d>1)));g=g.next)e||(f=g);e&&(c.h==0&&d==1?qe(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):re(c),se(c,e,3,b)))}a.j=null}else je(a,3,b)}
function te(a,b){a.i||a.h!=2&&a.h!=3||ue(a);a.l?a.l.next=b:a.i=b;a.l=b}
function oe(a,b,c,d){const e=me(null,null,null);e.h=new M(function(f,g){e.j=b?function(h){try{const k=b.call(d,h);f(k)}catch(k){g(k)}}:f;
e.i=c?function(h){try{const k=c.call(d,h);k===void 0&&h instanceof pe?g(h):f(k)}catch(k){g(k)}}:g});
e.h.j=a;te(a,e);return e.h}
M.prototype.H=function(a){this.h=0;je(this,2,a)};
M.prototype.K=function(a){this.h=0;je(this,3,a)};
function je(a,b,c){if(a.h==0){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.H,f=a.K;if(d instanceof M){te(d,me(e||Jd,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(k){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{h=typeof d;if(h=="object"&&d!=null||h=="function")try{const k=d.then;if(typeof k==="function"){ve(d,k,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}}g||(a.v=c,a.h=b,a.j=null,ue(a),b!=3||c instanceof pe||we(a,c))}}
function ve(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
let h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function ue(a){a.s||(a.s=!0,he(a.B,a))}
function re(a){let b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
M.prototype.B=function(){let a;for(;a=re(this);)se(this,a,this.h,this.v);this.s=!1};
function se(a,b,c,d){if(c==3&&b.i&&!b.l)for(;a&&a.m;a=a.j)a.m=!1;if(b.h)b.h.j=null,xe(b,c,d);else try{b.l?b.j.call(b.context):xe(b,c,d)}catch(e){ye.call(null,e)}Zd(le,b)}
function xe(a,b,c){b==2?a.j.call(a.context,c):a.i&&a.i.call(a.context,c)}
function we(a,b){a.m=!0;he(function(){a.m&&ye.call(null,b)})}
var ye=Na;function pe(a){oa.call(this,a)}
na(pe,oa);pe.prototype.name="cancel";const ze=self;class Ae{constructor(){this.promise=new Promise((a,b)=>{this.resolve=a;this.reject=b})}}
;function N(a){Yd.call(this);this.H=1;this.s=[];this.v=0;this.h=[];this.j={};this.X=!!a}
na(N,Yd);N.prototype.K=function(a,b,c){let d=this.j[a];d||(d=this.j[a]=[]);const e=this.H;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.H=e+3;d.push(e);return e};
N.prototype.C=function(a){const b=this.h[a];if(b){const c=this.j[b];this.v!=0?(this.s.push(a),this.h[a+1]=()=>{}):(c&&xa(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
N.prototype.B=function(a,b){var c=this.j[a];if(c){const e=Array(arguments.length-1);var d=arguments.length;let f;for(f=1;f<d;f++)e[f-1]=arguments[f];if(this.X)for(f=0;f<c.length;f++)d=c[f],Be(this.h[d+1],this.h[d+2],e);else{this.v++;try{for(f=0,d=c.length;f<d&&!this.l;f++){const g=c[f];this.h[g+1].apply(this.h[g+2],e)}}finally{if(this.v--,this.s.length>0&&this.v==0)for(;c=this.s.pop();)this.C(c)}}return f!=0}return!1};
function Be(a,b,c){he(function(){a.apply(b,c)})}
N.prototype.clear=function(a){if(a){const b=this.j[a];b&&(b.forEach(this.C,this),delete this.j[a])}else this.h.length=0,this.j={}};
N.prototype.m=function(){N.La.m.call(this);this.clear();this.s.length=0};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
let O={};var Ce=typeof Uint8Array!=="undefined"&&typeof Uint16Array!=="undefined"&&typeof Int32Array!=="undefined";O.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if(typeof c!=="object")throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
O.Tb=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var De={va:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
Aa:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},Ee={va:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
Aa:function(a){return[].concat.apply([],a)}};
O.Ka=function(){Ce?(O.qa=Uint8Array,O.oa=Uint16Array,O.pa=Int32Array,O.assign(O,De)):(O.qa=Array,O.oa=Array,O.pa=Array,O.assign(O,Ee))};
O.Ka();try{new Uint8Array(1)}catch(a){};function Fe(a){for(var b=a.length;--b>=0;)a[b]=0}
Fe(Array(576));Fe(Array(60));Fe(Array(512));Fe(Array(256));Fe(Array(29));Fe(Array(30));/*

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
var Ge="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");var He=class{constructor(a){this.name=a}};var Ie=new He("rawColdConfigGroup");var Je=new He("rawHotConfigGroup");var Ke=class extends L{constructor(a){super(a)}};var Le=class extends L{constructor(a){super(a)}};var Me=class extends L{constructor(a){super(a)}};var Ne=class extends L{constructor(a){super(a)}getPlayerType(){var a=Jc(this,36);a=a==null?a:gc(a)?a|0:void 0;return a!=null?a:0}setHomeGroupInfo(a){return J(this,Me,81,a)}clearLocationPlayabilityToken(){return G(this,89)}};var Oe=class extends L{constructor(a){super(a)}getKey(){return Yc(this,1)}},Pe=[2,3,4,5,6];var Qe=class extends L{constructor(a){super(a)}setTrackingParams(a){if(a!=null)if(typeof a==="string")a=a?new nb(a,kb):lb();else if(a.constructor!==nb)if(jb(a))a=a.length?new nb(new Uint8Array(a),kb):lb();else throw Error();return G(this,1,a)}};var Re=class extends L{constructor(a){super(a)}};var Se=class extends L{constructor(a){super(a)}};var Te=class extends L{constructor(a){super(a)}};var Ue=class extends L{constructor(a){super(a)}setSafetyMode(a){return G(this,5,lc(a))}};var Ve=class extends L{constructor(a){super(a)}j(a){return J(this,Ne,1,a)}};var We=class extends L{constructor(a){super(a,500)}};var Xe=class extends L{constructor(a){super(a)}};var Ye=class extends L{constructor(a){super(a)}setVideoId(a){return Pc(this,1,$c,pc(a))}getPlaylistId(){return Zc(this,2)}},$c=[1,2];var Ze=class extends L{constructor(a){super(a)}};var $e=new He("recordNotificationInteractionsEndpoint");var af=["notification/convert_endpoint_to_url"],bf=["notification/record_interactions"],cf=["notification_registration/set_registration"];var df=a=>self.btoa(String.fromCharCode.apply(null,Array.from(new Uint8Array(a)))).replace(/\+/g,"-").replace(/\//g,"_");var ef=["notifications_register","notifications_check_registration"];var ff=class extends Error{constructor(a,...b){super(a);this.args=[...b];Object.setPrototypeOf(this,new.target.prototype)}};let gf=null;function P(a,b){const c={};c.key=a;c.value=b;return hf().then(d=>new Promise((e,f)=>{try{const g=d.transaction("swpushnotificationsstore","readwrite").objectStore("swpushnotificationsstore").put(c);g.onsuccess=()=>{e()};
g.onerror=()=>{f()}}catch(g){f(g)}}))}
function jf(){return P("IndexedDBCheck","testing IndexedDB").then(()=>kf("IndexedDBCheck")).then(a=>a==="testing IndexedDB"?Promise.resolve():Promise.reject()).then(()=>!0).catch(()=>!1)}
function kf(a){const b=new ff("Error accessing DB");return hf().then(c=>new Promise((d,e)=>{try{const f=c.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);f.onsuccess=()=>{const g=f.result;d(g?g.value:null)};
f.onerror=()=>{b.params={key:a,source:"onerror"};e(b)}}catch(f){b.params={key:a,
thrownError:String(f)},e(b)}}),()=>null)}
function hf(){return gf?Promise.resolve(gf):new Promise((a,b)=>{const c=self.indexedDB.open("swpushnotificationsdb");c.onerror=b;c.onsuccess=()=>{const d=c.result;if(d.objectStoreNames.contains("swpushnotificationsstore"))gf=d,a(gf);else return self.indexedDB.deleteDatabase("swpushnotificationsdb"),hf()};
c.onupgradeneeded=lf})}
function lf(a){a=a.target.result;a.objectStoreNames.contains("swpushnotificationsstore")&&a.deleteObjectStore("swpushnotificationsstore");a.createObjectStore("swpushnotificationsstore",{keyPath:"key"})}
;const mf={WEB_UNPLUGGED:"^unplugged/",WEB_UNPLUGGED_ONBOARDING:"^unplugged/",WEB_UNPLUGGED_OPS:"^unplugged/",WEB_UNPLUGGED_PUBLIC:"^unplugged/",WEB_CREATOR:"^creator/",WEB_KIDS:"^kids/",WEB_EXPERIMENTS:"^experiments/",WEB_MUSIC:"^music/",WEB_REMIX:"^music/",WEB_MUSIC_EMBEDDED_PLAYER:"^music/",WEB_MUSIC_EMBEDDED_PLAYER:"^main_app/|^sfv/"};
function nf(a){if(a.length===1)return a[0];var b=mf.UNKNOWN_INTERFACE;if(b){b=new RegExp(b);for(var c of a)if(b.exec(c))return c}const d=[];Object.entries(mf).forEach(([e,f])=>{"UNKNOWN_INTERFACE"!==e&&d.push(f)});
c=new RegExp(d.join("|"));a.sort((e,f)=>e.length-f.length);
for(const e of a)if(!c.exec(e))return e;return a[0]}
function of(a){return`/youtubei/v1/${nf(a)}`}
;var pf=class extends L{constructor(a){super(a)}};var qf=class extends L{constructor(a){super(a,0,"yt.sw.adr")}};const rf=t.window;let sf,tf;const uf=(rf==null?void 0:(sf=rf.yt)==null?void 0:sf.config_)||(rf==null?void 0:(tf=rf.ytcfg)==null?void 0:tf.data_)||{};w("yt.config_",uf);function Q(...a){a=arguments;a.length>1?uf[a[0]]=a[1]:a.length===1&&Object.assign(uf,a[0])}
function R(a,b){return a in uf?uf[a]:b}
;const vf=[];function wf(a){vf.forEach(b=>b(a))}
function xf(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){yf(b)}}:a}
function yf(a){var b=v("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=R("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),Q("ERRORS",b));wf(a)}
function zf(a){var b=v("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0,void 0,void 0):(b=R("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0,void 0,void 0]),Q("ERRORS",b))}
;const Af=/^[\w.]*$/,Bf={q:!0,search_query:!0};function Cf(a,b){b=a.split(b);const c={};for(let f=0,g=b.length;f<g;f++){const h=b[f].split("=");if(h.length===1&&h[0]||h.length===2)try{const k=Df(h[0]||""),l=Df(h[1]||"");if(k in c){const p=c[k];Array.isArray(p)?ya(p,l):c[k]=[p,l]}else c[k]=l}catch(k){var d=k,e=h[0];const l=String(Cf);d.args=[{key:e,value:h[1],query:a,method:Ef===l?"unchanged":l}];Bf.hasOwnProperty(e)||zf(d)}}return c}
const Ef=String(Cf);function Ff(a){a.charAt(0)==="?"&&(a=a.substring(1));return Cf(a,"&")}
function Gf(a,b){return Hf(a,b||{},!0)}
function Hf(a,b,c){var d=a.split("#",2);a=d[0];d=d.length>1?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Ff(e[1]||"");for(var f in b)!c&&e!==null&&f in e||(e[f]=b[f]);b=a;a=Ha(e);a?(c=b.indexOf("#"),c<0&&(c=b.length),f=b.indexOf("?"),f<0||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.slice(0,f),e,b.slice(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
function If(a){if(!b)var b=window.location.href;const c=a.match(Ea)[1]||null,d=Fa(a.match(Ea)[3]||null);c&&d?(a=a.match(Ea),b=b.match(Ea),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?Fa(b.match(Ea)[3]||null)===d&&(Number(b.match(Ea)[4]||null)||null)===(Number(a.match(Ea)[4]||null)||null):!0;return a}
function Df(a){return a&&a.match(Af)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function Jf(a,b){typeof a==="function"&&(a=xf(a));return window.setTimeout(a,b)}
;var Kf="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" "),Lf=[...Kf,"client_dev_set_cookie"];function S(a){a=Mf(a);return typeof a==="string"&&a==="false"?!1:!!a}
function T(a,b){a=Mf(a);return a===void 0&&b!==void 0?b:Number(a||0)}
function Nf(){return R("EXPERIMENTS_TOKEN","")}
function Mf(a){return R("EXPERIMENT_FLAGS",{})[a]}
function Of(){const a=[],b=R("EXPERIMENTS_FORCED_FLAGS",{});for(var c of Object.keys(b))a.push({key:c,value:String(b[c])});c=R("EXPERIMENT_FLAGS",{});for(const d of Object.keys(c))d.startsWith("force_")&&b[d]===void 0&&a.push({key:d,value:String(c[d])});return a}
;[...Kf];let Pf=!1;function Qf(a,b){const c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);b.priority&&(c.priority=b.priority);a=Rf(a,b);const d=Sf(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");const e=b.context||t;let f=!1,g;fetch(a,c).then(h=>{if(!f){f=!0;g&&window.clearTimeout(g);var k=h.ok,l=p=>{p=p||{};k?b.onSuccess&&b.onSuccess.call(e,p,h):b.onError&&b.onError.call(e,p,h);b.onFinish&&b.onFinish.call(e,p,h)};
(b.format||"JSON")==="JSON"&&(k||h.status>=400&&h.status<500)?h.json().then(l,()=>{l(null)}):l(null)}}).catch(()=>{b.onError&&b.onError.call(e,{},{})});
a=b.timeout||0;b.onFetchTimeout&&a>0&&(g=Jf(()=>{f||(f=!0,window.clearTimeout(g),b.onFetchTimeout.call(b.context||t))},a))}
function Rf(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);const c=R("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=Gf(a,b);return a}
function Sf(a,b){const c=R("XSRF_FIELD_NAME"),d=R("XSRF_TOKEN");var e=b.postBody||"",f=b.postParams;const g=R("XSRF_FIELD_NAME");let h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||Fa(a.match(Ea)[3]||null)&&!b.withCredentials&&Fa(a.match(Ea)[3]||null)!==document.location.hostname||b.method!=="POST"||h&&h!=="application/x-www-form-urlencoded"||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(S("ajax_parse_query_data_only_when_filled")&&f&&Object.keys(f).length>0||f)&&typeof e==="string"&&
(e=Ff(e),Nd(e,f),e=b.postBodyFormat&&b.postBodyFormat==="JSON"?JSON.stringify(e):Ha(e));f=e||f&&!Kd(f);!Pf&&f&&b.method!=="POST"&&(Pf=!0,yf(Error("AJAX request with postData should use POST")));return e}
;const Tf=[{ba:a=>`Cannot read property '${a.key}'`,
U:{Error:[{u:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{u:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{u:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{u:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{u:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{u:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{u:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{ba:a=>`Cannot call '${a.key}'`,
U:{TypeError:[{u:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{u:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{u:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{u:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{u:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,groups:["key"]},{u:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,
groups:["key"]}]}},{ba:a=>`${a.key} is not defined`,
U:{ReferenceError:[{u:/(.*) is not defined/,groups:["key"]},{u:/Can't find variable: (.*)/,groups:["key"]}]}}];var Vf={F:[],D:[{callback:Uf,weight:500}]};function Uf(a){if(a.name==="JavaException")return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Wf(){if(!Xf){var a=Xf=new Yf;a.F.length=0;a.D.length=0;Zf(a,Vf)}return Xf}
function Zf(a,b){b.F&&a.F.push.apply(a.F,b.F);b.D&&a.D.push.apply(a.D,b.D)}
var Yf=class{constructor(){this.D=[];this.F=[]}},Xf;const $f=new N;function ag(a){const b=a.length;let c=0;const d=()=>a.charCodeAt(c++);
do{var e=bg(d);if(e===Infinity)break;const f=e>>3;switch(e&7){case 0:e=bg(d);if(f===2)return e;break;case 1:if(f===2)return;c+=8;break;case 2:e=bg(d);if(f===2)return a.substr(c,e);c+=e;break;case 5:if(f===2)return;c+=4;break;default:return}}while(c<b)}
function bg(a){let b=a(),c=b&127;if(b<128)return c;b=a();c|=(b&127)<<7;if(b<128)return c;b=a();c|=(b&127)<<14;if(b<128)return c;b=a();return b<128?c|(b&127)<<21:Infinity}
;function cg(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=dg(d,a[d],b,c),e>500));d++);d=e}else if(typeof a==="object")for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f=typeof g!=="string"||f!=="clickTrackingParams"&&f!=="trackingParams"?0:(g=ag(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?dg(`${f}.ve`,g,h,k):0;d+=f;d+=dg(e,a[e],b,c);if(d>500)break}}else c[b]=eg(a),d+=c[b].length;else c[b]=eg(a),d+=c[b].length;return d}
function dg(a,b,c,d){c+=`.${a}`;a=eg(b);d[c]=a;return c.length+a.length}
function eg(a){try{return(typeof a==="string"?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return`unable to serialize ${typeof a} (${b.message})`}}
;function fg(){gg.instance||(gg.instance=new gg);return gg.instance}
function hg(a,b){a={};var c=[];"USER_SESSION_ID"in uf&&c.push({key:"u",value:R("USER_SESSION_ID")});var d=Qd(String(t.location.href));var e=[];var f;(f=t.__SAPISID||t.__APISID||t.__3PSAPISID||t.__1PSAPISID||t.__OVERRIDE_SID)?f=!0:(typeof document!=="undefined"&&(f=new Vd,f=f.get("SAPISID")||f.get("APISID")||f.get("__Secure-3PAPISID")||f.get("__Secure-1PAPISID")),f=!!f);f&&(f=(d=d.indexOf("https:")==0||d.indexOf("chrome-extension:")==0||d.indexOf("chrome-untrusted://new-tab-page")==0||d.indexOf("moz-extension:")==
0)?t.__SAPISID:t.__APISID,f||typeof document==="undefined"||(f=new Vd,f=f.get(d?"SAPISID":"APISID")||f.get("__Secure-3PAPISID")),(f=f?Sd(f,d?"SAPISIDHASH":"APISIDHASH",c):null)&&e.push(f),d&&((d=Wd("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",c))&&e.push(d),(c=Wd("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",c))&&e.push(c)));if(e=e.length==0?null:e.join(" "))a.Authorization=e,e=b=b==null?void 0:b.sessionIndex,e===void 0&&(e=Number(R("SESSION_INDEX",0)),e=isNaN(e)?0:e),S("voice_search_auth_header_removal")||
(a["X-Goog-AuthUser"]=e.toString()),"INNERTUBE_HOST_OVERRIDE"in uf||(a["X-Origin"]=window.location.origin),b===void 0&&"DELEGATED_SESSION_ID"in uf&&(a["X-Goog-PageId"]=R("DELEGATED_SESSION_ID"));return a}
var gg=class{constructor(){this.Ma=!0}};var ig={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function jg(a){switch(a){case "DESKTOP":return 1;case "UNKNOWN_PLATFORM":return 0;case "TV":return 2;case "GAME_CONSOLE":return 3;case "MOBILE":return 4;case "TABLET":return 5}}
;w("ytglobal.prefsUserPrefsPrefs_",v("ytglobal.prefsUserPrefsPrefs_")||{});function kg(){if(R("DATASYNC_ID")!==void 0)return R("DATASYNC_ID");throw new ff("Datasync ID not set","unknown");}
;function lg(a,b){return mg(a,0,b)}
function ng(a){const b=v("yt.scheduler.instance.addImmediateJob");b?b(a):a()}
var og=class{h(a){mg(a,1)}};function pg(){qg.instance||(qg.instance=new qg);return qg.instance}
function mg(a,b,c){c!==void 0&&Number.isNaN(Number(c))&&(c=void 0);const d=v("yt.scheduler.instance.addJob");return d?d(a,b,c):c===void 0?(a(),NaN):Jf(a,c||0)}
var qg=class extends og{R(a){if(a===void 0||!Number.isNaN(Number(a))){var b=v("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}}start(){const a=v("yt.scheduler.instance.start");a&&a()}},rg=pg();const sg=[];let tg,ug=!1;function vg(a){ug||(tg?tg.handleError(a):(sg.push({type:"ERROR",payload:a}),sg.length>10&&sg.shift()))}
function wg(a,b){ug||(tg?tg.S(a,b):(sg.push({type:"EVENT",eventType:a,payload:b}),sg.length>10&&sg.shift()))}
;function xg(a){if(a.indexOf(":")>=0)throw Error("Database name cannot contain ':'");}
function yg(a){return a.substr(0,a.indexOf(":"))||a}
;const zg={AUTH_INVALID:"No user identifier specified.",EXPLICIT_ABORT:"Transaction was explicitly aborted.",IDB_NOT_SUPPORTED:"IndexedDB is not supported.",MISSING_INDEX:"Index not created.",MISSING_OBJECT_STORES:"Object stores not created.",DB_DELETED_BY_MISSING_OBJECT_STORES:"Database is deleted because expected object stores were not created.",DB_REOPENED_BY_MISSING_OBJECT_STORES:"Database is reopened because expected object stores were not created.",UNKNOWN_ABORT:"Transaction was aborted for unknown reasons.",
QUOTA_EXCEEDED:"The current transaction exceeded its quota limitations.",QUOTA_MAYBE_EXCEEDED:"The current transaction may have failed because of exceeding quota limitations.",EXECUTE_TRANSACTION_ON_CLOSED_DB:"Can't start a transaction on a closed database",INCOMPATIBLE_DB_VERSION:"The binary is incompatible with the database version"},Ag={AUTH_INVALID:"ERROR",EXECUTE_TRANSACTION_ON_CLOSED_DB:"WARNING",EXPLICIT_ABORT:"IGNORED",IDB_NOT_SUPPORTED:"ERROR",MISSING_INDEX:"WARNING",MISSING_OBJECT_STORES:"ERROR",
DB_DELETED_BY_MISSING_OBJECT_STORES:"WARNING",DB_REOPENED_BY_MISSING_OBJECT_STORES:"WARNING",QUOTA_EXCEEDED:"WARNING",QUOTA_MAYBE_EXCEEDED:"WARNING",UNKNOWN_ABORT:"WARNING",INCOMPATIBLE_DB_VERSION:"WARNING"},Bg={AUTH_INVALID:!1,EXECUTE_TRANSACTION_ON_CLOSED_DB:!1,EXPLICIT_ABORT:!1,IDB_NOT_SUPPORTED:!1,MISSING_INDEX:!1,MISSING_OBJECT_STORES:!1,DB_DELETED_BY_MISSING_OBJECT_STORES:!1,DB_REOPENED_BY_MISSING_OBJECT_STORES:!1,QUOTA_EXCEEDED:!1,QUOTA_MAYBE_EXCEEDED:!0,UNKNOWN_ABORT:!0,INCOMPATIBLE_DB_VERSION:!1};
var U=class extends ff{constructor(a,b={},c=zg[a],d=Ag[a],e=Bg[a]){super(c,Object.assign({},{name:"YtIdbKnownError",isSw:self.document===void 0,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,U.prototype)}},Cg=class extends U{constructor(a,b){super("MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},zg.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Cg.prototype)}},Dg=class extends Error{constructor(a,b){super();this.index=
a;this.objectStore=b;Object.setPrototypeOf(this,Dg.prototype)}};const Eg=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Fg(a,b,c,d){b=yg(b);let e;e=a instanceof Error?a:Error(`Unexpected error: ${a}`);if(e instanceof U)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if(e.name==="QuotaExceededError")return new U("QUOTA_EXCEEDED",a);if(Wa&&e.name==="UnknownError")return new U("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Dg)return new U("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if(e.name==="InvalidStateError"&&Eg.some(f=>e.message.includes(f)))return new U("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if(e.name==="AbortError")return new U("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",Fb:e.name})];e.level="WARNING";return e}
function Gg(a,b,c){return new U("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:void 0}})}
;function Hg(a){if(!a)throw Error();throw a;}
function Ig(a){return a}
var Jg=class{constructor(a){this.h=a}};function Kg(a,b,c,d,e){try{if(a.state.status!=="FULFILLED")throw Error("calling handleResolve before the promise is fulfilled.");const f=c(a.state.value);f instanceof Lg?Mg(a,b,f,d,e):d(f)}catch(f){e(f)}}
function Ng(a,b,c,d,e){try{if(a.state.status!=="REJECTED")throw Error("calling handleReject before the promise is rejected.");const f=c(a.state.reason);f instanceof Lg?Mg(a,b,f,d,e):d(f)}catch(f){e(f)}}
function Mg(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(f=>{f instanceof Lg?Mg(a,b,f,d,e):d(f)},f=>{e(f)})}
var Lg=class{constructor(a){this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;const b=d=>{if(this.state.status==="PENDING"){this.state={status:"FULFILLED",value:d};for(const e of this.h)e()}},c=d=>{if(this.state.status==="PENDING"){this.state={status:"REJECTED",
reason:d};for(const e of this.i)e()}};
try{a(b,c)}catch(d){c(d)}}static all(a){return new Lg(new Jg((b,c)=>{const d=[];let e=a.length;e===0&&b(d);for(let f=0;f<a.length;++f)Lg.resolve(a[f]).then(g=>{d[f]=g;e--;e===0&&b(d)}).catch(g=>{c(g)})}))}static resolve(a){return new Lg(new Jg((b,c)=>{a instanceof Lg?a.then(b,c):b(a)}))}static reject(a){return new Lg(new Jg((b,c)=>{c(a)}))}then(a,b){const c=a!=null?a:Ig,d=b!=null?b:Hg;
return new Lg(new Jg((e,f)=>{this.state.status==="PENDING"?(this.h.push(()=>{Kg(this,this,c,e,f)}),this.i.push(()=>{Ng(this,this,d,e,f)})):this.state.status==="FULFILLED"?Kg(this,this,c,e,f):this.state.status==="REJECTED"&&Ng(this,this,d,e,f)}))}catch(a){return this.then(void 0,a)}};function Og(a,b,c){const d=()=>{try{a.removeEventListener("success",e),a.removeEventListener("error",f)}catch(g){}},e=()=>{b(a.result);
d()},f=()=>{c(a.error);
d()};
a.addEventListener("success",e);a.addEventListener("error",f)}
function Pg(a){return new Promise((b,c)=>{Og(a,b,c)})}
function V(a){return new Lg(new Jg((b,c)=>{Og(a,b,c)}))}
;function Qg(a,b){return new Lg(new Jg((c,d)=>{const e=()=>{const f=a?b(a):null;f?f.then(g=>{a=g;e()},d):c()};
e()}))}
;const Rg=window;var W=Rg.ytcsi&&Rg.ytcsi.now?Rg.ytcsi.now:Rg.performance&&Rg.performance.timing&&Rg.performance.now&&Rg.performance.timing.navigationStart?()=>Rg.performance.timing.navigationStart+Rg.performance.now():()=>(new Date).getTime();function X(a,b,c,d){return r(function*(){const e={mode:"readonly",A:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};typeof c==="string"?e.mode=c:Object.assign(e,c);a.transactionCount++;const f=e.A?3:1;let g=0,h;for(;!h;){g++;const p=Math.round(W());try{var k=a.h.transaction(b,e.mode),l=d;const n=new Sg(k),q=yield Tg(n,l),m=Math.round(W());Ug(a,p,m,g,void 0,b.join(),e);return q}catch(n){l=Math.round(W());const q=Fg(n,a.h.name,b.join(),a.h.version);if(q instanceof U&&!q.h||g>=f)Ug(a,p,l,g,q,b.join(),e),h=q}}return Promise.reject(h)})}
function Vg(a,b,c){a=a.h.createObjectStore(b,c);return new Wg(a)}
function Xg(a,b,c,d){return X(a,[b],{mode:"readwrite",A:!0},e=>{e=e.objectStore(b);return V(e.h.put(c,d))})}
function Ug(a,b,c,d,e,f,g){b=c-b;e?(e instanceof U&&(e.type==="QUOTA_EXCEEDED"||e.type==="QUOTA_MAYBE_EXCEEDED")&&wg("QUOTA_EXCEEDED",{dbName:yg(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof U&&e.type==="UNKNOWN_ABORT"&&(c-=a.j,c<0&&c>=2147483648&&(c=0),wg("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),Yg(a,!1,d,f,b,g.tag),vg(e)):Yg(a,!0,d,f,b,g.tag)}
function Yg(a,b,c,d,e,f="IDB_TRANSACTION_TAG_UNKNOWN"){wg("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:f})}
var Zg=class{constructor(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(W());this.i=!1}add(a,b,c){return X(this,[a],{mode:"readwrite",A:!0},d=>d.objectStore(a).add(b,c))}clear(a){return X(this,[a],{mode:"readwrite",
A:!0},b=>b.objectStore(a).clear())}close(){this.h.close();
let a;((a=this.options)==null?0:a.closed)&&this.options.closed()}count(a,b){return X(this,[a],{mode:"readonly",A:!0},c=>c.objectStore(a).count(b))}delete(a,b){return X(this,[a],{mode:"readwrite",
A:!0},c=>c.objectStore(a).delete(b))}get(a,b){return X(this,[a],{mode:"readonly",
A:!0},c=>c.objectStore(a).get(b))}getAll(a,b,c){return X(this,[a],{mode:"readonly",
A:!0},d=>d.objectStore(a).getAll(b,c))}objectStoreNames(){return Array.from(this.h.objectStoreNames)}getName(){return this.h.name}};
function $g(a,b,c){a=a.h.openCursor(b.query,b.direction);return ah(a).then(d=>Qg(d,c))}
function bh(a,b){return $g(a,{query:b},c=>c.delete().then(()=>ch(c))).then(()=>{})}
function dh(a,b,c){const d=[];return $g(a,{query:b},e=>{if(!(c!==void 0&&d.length>=c))return d.push(e.cursor.value),ch(e)}).then(()=>d)}
var Wg=class{constructor(a){this.h=a}add(a,b){return V(this.h.add(a,b))}autoIncrement(){return this.h.autoIncrement}clear(){return V(this.h.clear()).then(()=>{})}count(a){return V(this.h.count(a))}delete(a){return a instanceof IDBKeyRange?bh(this,a):V(this.h.delete(a))}get(a){return V(this.h.get(a))}getAll(a,b){return"getAll"in IDBObjectStore.prototype?V(this.h.getAll(a,b)):dh(this,a,b)}index(a){try{return new eh(this.h.index(a))}catch(b){if(b instanceof Error&&b.name==="NotFoundError")throw new Dg(a,
this.h.name);
throw b;}}getName(){return this.h.name}keyPath(){return this.h.keyPath}};function Tg(a,b){const c=new Promise((d,e)=>{try{b(a).then(f=>{d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(([d])=>d)}
var Sg=class{constructor(a){this.h=a;this.j=new Map;this.i=!1;this.done=new Promise((b,c)=>{this.h.addEventListener("complete",()=>{b()});
this.h.addEventListener("error",d=>{d.currentTarget===d.target&&c(this.h.error)});
this.h.addEventListener("abort",()=>{var d=this.h.error;if(d)c(d);else if(!this.i){d=U;var e=this.h.objectStoreNames;const f=[];for(let g=0;g<e.length;g++){const h=e.item(g);if(h===null)throw Error("Invariant: item in DOMStringList is null");f.push(h)}d=new d("UNKNOWN_ABORT",{objectStoreNames:f.join(),dbName:this.h.db.name,mode:this.h.mode});c(d)}})})}abort(){this.h.abort();
this.i=!0;throw new U("EXPLICIT_ABORT");}objectStore(a){a=this.h.objectStore(a);let b=this.j.get(a);b||(b=new Wg(a),this.j.set(a,b));return b}};function fh(a,b,c){const {query:d=null,direction:e="next"}=b;a=a.h.openCursor(d,e);return ah(a).then(f=>Qg(f,c))}
function gh(a,b,c){const d=[];return fh(a,{query:b},e=>{if(!(c!==void 0&&d.length>=c))return d.push(e.cursor.value),ch(e)}).then(()=>d)}
var eh=class{constructor(a){this.h=a}count(a){return V(this.h.count(a))}delete(a){return fh(this,{query:a},b=>b.delete().then(()=>ch(b)))}get(a){return V(this.h.get(a))}getAll(a,b){return"getAll"in IDBIndex.prototype?V(this.h.getAll(a,b)):gh(this,a,b)}getKey(a){return V(this.h.getKey(a))}keyPath(){return this.h.keyPath}unique(){return this.h.unique}};
function ah(a){return V(a).then(b=>b?new hh(a,b):null)}
function ch(a){a.cursor.continue(void 0);return ah(a.request)}
function ih(a){a.cursor.advance(5);return ah(a.request)}
var hh=class{constructor(a,b){this.request=a;this.cursor=b}delete(){return V(this.cursor.delete()).then(()=>{})}getKey(){return this.cursor.key}update(a){return V(this.cursor.update(a))}};function jh(a,b,c){return new Promise((d,e)=>{let f;f=b!==void 0?self.indexedDB.open(a,b):self.indexedDB.open(a);const g=c.xa,h=c.blocking,k=c.Na,l=c.upgrade,p=c.closed;let n;const q=()=>{n||(n=new Zg(f.result,{closed:p}));return n};
f.addEventListener("upgradeneeded",m=>{try{if(m.newVersion===null)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(f.transaction===null)throw Error("Invariant: transaction on IDbOpenDbRequest is null");m.dataLoss&&m.dataLoss!=="none"&&wg("IDB_DATA_CORRUPTED",{reason:m.dataLossMessage||"unknown reason",dbName:yg(a)});const u=q(),B=new Sg(f.transaction);l&&l(u,y=>m.oldVersion<y&&m.newVersion>=y,B);
B.done.catch(y=>{e(y)})}catch(u){e(u)}});
f.addEventListener("success",()=>{const m=f.result;h&&m.addEventListener("versionchange",()=>{h(q())});
m.addEventListener("close",()=>{wg("IDB_UNEXPECTEDLY_CLOSED",{dbName:yg(a),dbVersion:m.version});k&&k()});
d(q())});
f.addEventListener("error",()=>{e(f.error)});
g&&f.addEventListener("blocked",()=>{g()})})}
function kh(a,b,c={}){return jh(a,b,c)}
function lh(a,b={}){return r(function*(){try{const c=self.indexedDB.deleteDatabase(a),d=b.xa;d&&c.addEventListener("blocked",()=>{d()});
yield Pg(c)}catch(c){throw Fg(c,a,"",-1);}})}
;function mh(a,b){return new U("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function nh(a,b){if(!b)throw Gg("openWithToken",yg(a.name));return a.open()}
var oh=class{constructor(a,b){this.name=a;this.options=b;this.j=!0;this.m=this.l=0}i(a,b,c={}){return kh(a,b,c)}delete(a={}){return lh(this.name,a)}open(){if(!this.j)throw mh(this);if(this.h)return this.h;let a;const b=()=>{this.h===a&&(this.h=void 0)},c={blocking:e=>{e.close()},
closed:b,Na:b,upgrade:this.options.upgrade},d=()=>{const e=this;return r(function*(){var f,g=(f=Error().stack)!=null?f:"";try{const k=yield e.i(e.name,e.options.version,c);f=k;var h=e.options;const l=[];for(const p of Object.keys(h.M)){const {L:n,Kb:q=Number.MAX_VALUE}=h.M[p];!(f.h.version>=n)||f.h.version>=q||f.h.objectStoreNames.contains(p)||l.push(p)}if(l.length!==0){const p=Object.keys(e.options.M),n=k.objectStoreNames();if(e.m<T("ytidb_reopen_db_retries",0))return e.m++,k.close(),vg(new U("DB_REOPENED_BY_MISSING_OBJECT_STORES",
{dbName:e.name,expectedObjectStores:p,foundObjectStores:n})),d();if(e.l<T("ytidb_remake_db_retries",1))return e.l++,yield e.delete(),vg(new U("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:e.name,expectedObjectStores:p,foundObjectStores:n})),d();throw new Cg(n,p);}return k}catch(k){if(k instanceof DOMException?k.name==="VersionError":"DOMError"in self&&k instanceof DOMError?k.name==="VersionError":k instanceof Object&&"message"in k&&k.message==="An attempt was made to open a database using a lower version than the existing version."){g=
yield e.i(e.name,void 0,Object.assign({},c,{upgrade:void 0}));h=g.h.version;if(e.options.version!==void 0&&h>e.options.version+1)throw g.close(),e.j=!1,mh(e,h);return g}b();k instanceof Error&&!S("ytidb_async_stack_killswitch")&&(k.stack=`${k.stack}\n${g.substring(g.indexOf("\n")+1)}`);let l;throw Fg(k,e.name,"",(l=e.options.version)!=null?l:-1);}})};
return this.h=a=d()}};const ph=new oh("YtIdbMeta",{M:{databases:{L:1}},upgrade(a,b){b(1)&&Vg(a,"databases",{keyPath:"actualName"})}});function qh(a,b){return r(function*(){return X(yield nh(ph,b),["databases"],{A:!0,mode:"readwrite"},c=>{const d=c.objectStore("databases");return d.get(a.actualName).then(e=>{if(e?a.actualName!==e.actualName||a.publicName!==e.publicName||a.userIdentifier!==e.userIdentifier:1)return V(d.h.put(a,void 0)).then(()=>{})})})})}
function rh(a,b){return r(function*(){if(a)return(yield nh(ph,b)).delete("databases",a)})}
;let sh;const th=new class{constructor(){}}(new class{constructor(){}});function uh(){return r(function*(){return!0})}
function vh(){if(sh!==void 0)return sh;ug=!0;return sh=uh().then(a=>{ug=!1;return a})}
function wh(){return v("ytglobal.idbToken_")||void 0}
function xh(){const a=wh();return a?Promise.resolve(a):vh().then(b=>{(b=b?th:void 0)&&w("ytglobal.idbToken_",b);return b})}
;new Ae;function yh(a){try{kg();var b=!0}catch(c){b=!1}if(!b)throw a=new U("AUTH_INVALID",{dbName:a}),vg(a),a;b=kg();return{actualName:`${a}:${b}`,publicName:a,userIdentifier:b}}
function zh(a,b,c,d){return r(function*(){var e,f=(e=Error().stack)!=null?e:"";e=yield xh();if(!e)throw e=Gg("openDbImpl",a,b),S("ytidb_async_stack_killswitch")||(e.stack=`${e.stack}\n${f.substring(f.indexOf("\n")+1)}`),vg(e),e;xg(a);f=c?{actualName:a,publicName:a,userIdentifier:void 0}:yh(a);try{return yield qh(f,e),yield kh(f.actualName,b,d)}catch(g){try{yield rh(f.actualName,e)}catch(h){}throw g;}})}
function Ah(a,b,c={}){return zh(a,b,!1,c)}
function Bh(a,b,c={}){return zh(a,b,!0,c)}
function Ch(a,b={}){return r(function*(){const c=yield xh();if(c){xg(a);var d=yh(a);yield lh(d.actualName,b);yield rh(d.actualName,c)}})}
function Dh(a,b={}){return r(function*(){const c=yield xh();c&&(xg(a),yield lh(a,b),yield rh(a,c))})}
;function Eh(a,b){let c;return()=>{c||(c=new Fh(a,b));return c}}
var Fh=class extends oh{constructor(a,b){super(a,b);this.options=b;xg(a)}i(a,b,c={}){return(this.options.shared?Bh:Ah)(a,b,Object.assign({},c))}delete(a={}){return(this.options.shared?Dh:Ch)(this.name,a)}};function Gh(a,b){return Eh(a,b)}
;var Hh=Gh("ytGcfConfig",{M:{coldConfigStore:{L:1},hotConfigStore:{L:1}},shared:!1,upgrade(a,b){b(1)&&(Vg(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}).h.createIndex("hotTimestampIndex","timestamp",{unique:!1}),Vg(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}).h.createIndex("coldTimestampIndex","timestamp",{unique:!1}))},version:1});function Ih(a){return nh(Hh(),a)}
function Jh(a,b,c){return r(function*(){const d={config:a,hashData:b,timestamp:W()},e=yield Ih(c);yield e.clear("hotConfigStore");return yield Xg(e,"hotConfigStore",d)})}
function Kh(a,b,c,d){return r(function*(){const e={config:a,hashData:b,configData:c,timestamp:W()},f=yield Ih(d);yield f.clear("coldConfigStore");return yield Xg(f,"coldConfigStore",e)})}
function Lh(a){return r(function*(){let b=void 0;yield X(yield Ih(a),["coldConfigStore"],{mode:"readwrite",A:!0},c=>fh(c.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},d=>{b=d.cursor.value}));
return b})}
function Mh(a){return r(function*(){let b=void 0;yield X(yield Ih(a),["hotConfigStore"],{mode:"readwrite",A:!0},c=>fh(c.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},d=>{b=d.cursor.value}));
return b})}
;var Nh=class extends Yd{constructor(){super();this.j=[];this.h=[];const a=v("yt.gcf.config.hotUpdateCallbacks");a?(this.j=[...a],this.h=a):(this.h=[],w("yt.gcf.config.hotUpdateCallbacks",this.h))}m(){for(const b of this.j){var a=this.h;const c=a.indexOf(b);c>=0&&a.splice(c,1)}this.j.length=0;super.m()}};function Oh(a,b,c){return r(function*(){if(S("start_client_gcf")){c&&(a.j=c,w("yt.gcf.config.hotConfigGroup",a.j||null));a.hotHashData=b;w("yt.gcf.config.hotHashData",a.hotHashData||null);var d=wh();if(d){if(!c){var e;c=(e=yield Mh(d))==null?void 0:e.config}yield Jh(c,b,d)}if(c){d=a.i;e=c;for(const f of d.h)f(e)}}})}
function Ph(a,b,c){return r(function*(){if(S("start_client_gcf")){a.coldHashData=b;w("yt.gcf.config.coldHashData",a.coldHashData||null);const d=wh();if(d){if(!c){let e;c=(e=yield Lh(d))==null?void 0:e.config}c&&(yield Kh(c,b,c.configData,d))}}})}
var Qh=class{constructor(){this.h=0;this.i=new Nh}};function Rh(){return"INNERTUBE_API_KEY"in uf&&"INNERTUBE_API_VERSION"in uf}
function Sh(){return{innertubeApiKey:R("INNERTUBE_API_KEY"),innertubeApiVersion:R("INNERTUBE_API_VERSION"),Z:R("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Ba:R("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Ca:R("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:R("INNERTUBE_CONTEXT_CLIENT_VERSION"),ka:R("INNERTUBE_CONTEXT_HL"),ja:R("INNERTUBE_CONTEXT_GL"),Da:R("INNERTUBE_HOST_OVERRIDE")||"",Ea:!!R("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Ab:!!R("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:R("SERIALIZED_CLIENT_CONFIG_DATA")}}
function Th(a){const b={client:{hl:a.ka,gl:a.ja,clientName:a.Ba,clientVersion:a.innertubeContextClientVersion,configInfo:a.Z}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=t.devicePixelRatio;c&&c!=1&&(b.client.screenDensityFloat=String(c));c=Nf();c!==""&&(b.client.experimentsToken=c);c=Of();c.length>0&&(b.request={internalExperimentFlags:c});Uh(void 0,b);Vh(a,void 0,b);S("start_client_gcf")&&Wh(void 0,b);R("DELEGATED_SESSION_ID")&&!S("pageid_as_header_web")&&(b.user=
{onBehalfOfUser:R("DELEGATED_SESSION_ID")});!S("fill_delegate_context_in_gel_killswitch")&&(a=R("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=R("INNERTUBE_CONTEXT");var d;if(S("enable_persistent_device_token")&&(a==null?0:(d=a.client)==null?0:d.rolloutToken)){var e;b.client.rolloutToken=a==null?void 0:(e=a.client)==null?void 0:e.rolloutToken}d=Object;e=d.assign;a=b.client;var f=R("DEVICE","");c={};for(const [g,h]of Object.entries(Ff(f))){f=
g;const k=h;f==="cbrand"?c.deviceMake=k:f==="cmodel"?c.deviceModel=k:f==="cbr"?c.browserName=k:f==="cbrver"?c.browserVersion=k:f==="cos"?c.osName=k:f==="cosver"?c.osVersion=k:f==="cplatform"&&(c.platform=k)}b.client=e.call(d,a,c);return b}
function Uh(a,b){const c=v("yt.embedded_player.embed_url");c&&(a?(b=Tc(a,Se,7)||new Se,K(b,4,c),J(a,Se,7,b)):b&&(b.thirdParty={embedUrl:c}))}
function Vh(a,b,c){if(a.appInstallData)if(b){let d;c=(d=Tc(b,Le,62))!=null?d:new Le;K(c,6,a.appInstallData);J(b,Le,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function Xh(a,b,c={}){let d={};R("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":R("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||R("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.tb||R("AUTHORIZATION");b||(a?b=`Bearer ${v("gapi.auth.getToken")().sb}`:(a=hg(fg()),S("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
function Wh(a,b){if(!Qh.instance){var c=new Qh;Qh.instance=c}c=Qh.instance;var d=W()-c.h;if(c.h!==0&&d<T("send_config_hash_timer"))c=void 0;else{d=v("yt.gcf.config.coldConfigData");var e=v("yt.gcf.config.hotHashData"),f=v("yt.gcf.config.coldHashData");d&&e&&f&&(c.h=W());c={coldConfigData:d,hotHashData:e,coldHashData:f}}if(d=c)if(e=d.coldConfigData,c=d.coldHashData,d=d.hotHashData,a){var g;b=(g=Tc(a,Le,62))!=null?g:new Le;g=K(b,1,e);g=K(g,3,c);K(g,5,d);J(a,Le,62,b)}else b&&(b.client.configInfo=b.client.configInfo||
{},e&&(b.client.configInfo.coldConfigData=e),c&&(b.client.configInfo.coldHashData=c),d&&(b.client.configInfo.hotHashData=d))}
;typeof TextEncoder!=="undefined"&&new TextEncoder;function Yh(a){this.version=1;this.args=a}
;function Zh(){var a=$h;this.topic="screen-created";this.h=a}
Zh.prototype.toString=function(){return this.topic};const ai=v("ytPubsub2Pubsub2Instance")||new N;N.prototype.subscribe=N.prototype.K;N.prototype.unsubscribeByKey=N.prototype.C;N.prototype.publish=N.prototype.B;N.prototype.clear=N.prototype.clear;w("ytPubsub2Pubsub2Instance",ai);const bi=v("ytPubsub2Pubsub2SubscribedKeys")||{};w("ytPubsub2Pubsub2SubscribedKeys",bi);const ci=v("ytPubsub2Pubsub2TopicToKeys")||{};w("ytPubsub2Pubsub2TopicToKeys",ci);const di=v("ytPubsub2Pubsub2IsAsync")||{};w("ytPubsub2Pubsub2IsAsync",di);
w("ytPubsub2Pubsub2SkipSubKey",null);function ei(a,b){const c=fi();c&&c.publish.call(c,a.toString(),a,b)}
function gi(a){var b=hi;const c=fi();if(!c)return 0;const d=c.subscribe(b.toString(),(e,f)=>{var g=v("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=()=>{if(bi[d])try{if(f&&b instanceof Zh&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.na){const m=new h;h.na=m.version}var l=h.na}catch(m){}if(!l||k.version!=l)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{l=Reflect;var p=l.construct;
{var n=k.args;const m=n.length;if(m>0){const u=Array(m);for(k=0;k<m;k++)u[k]=n[k];var q=u}else q=[]}f=p.call(l,h,q)}catch(m){throw m.message="yt.pubsub2.Data.deserialize(): "+m.message,m;}}catch(m){throw m.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+m.message,m;}a.call(window,f)}catch(m){yf(m)}},di[b.toString()]?v("yt.scheduler.instance")?rg.h(g):Jf(g,0):g())});
bi[d]=!0;ci[b.toString()]||(ci[b.toString()]=[]);ci[b.toString()].push(d);return d}
function ii(){var a=ji;const b=gi(function(c){a.apply(void 0,arguments);ki(b)});
return b}
function ki(a){const b=fi();b&&(typeof a==="number"&&(a=[a]),va(a,c=>{b.unsubscribeByKey(c);delete bi[c]}))}
function fi(){return v("ytPubsub2Pubsub2Instance")}
;let li=void 0,mi=void 0;var ni={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrCowatchPartyEvent:492,vrCowatchUserStartOrJoinEvent:504,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,
mbsConnectionInitiated:138,mbsPlaybackInitiated:139,mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,
kidsParentalGateTracking:168,kidsSignedOutSettingsStatus:437,kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,
transactionFlowPaymentSubmitted:460,transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,
ypcPauseFlowSucceeded:190,ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,
ypcFamilyCreateFlowCancelled:259,ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,
accountRegistryChange:226,userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,
musicSideloadedPlaylistServiceCalled:246,embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,
yongleUsbSetup:271,touStrikeInterstitialEvent:272,liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,
notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,
tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,
iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,
mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,
mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,
clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,
mdeQosEvent:510,mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,mdeExporterEvent:497,genericClientExperimentEvent:423,homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,externalVideoShareToYoutubeAttempt:501,parentCodeEvent:502,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,
mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,
cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,producerProjectElementAdded:453,producerProjectElementRemoved:454,producerAppStateChange:509,producerProjectDiskInsufficientExportFailure:516,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,
miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490,
shortsCreationFallbackEvent:493,vssData:491,castMatch:494,miniAppPerformanceMetrics:495,userFeedbackEvent:496,kidsGuestSessionMismatch:498,musicSideloadedPlaylistMigrationEvent:499,sleepTimerSessionFinishEvent:500,watchEpPromoConflict:503,innertubeResponseCacheMetrics:505,miniAppAdEvent:506,dataPlanUpsellEvent:507,producerProjectRenamed:508,producerMediaSelectionEvent:511,embedsAutoplayStatusChanged:512,remoteConnectEvent:513,connectedSessionMisattributionEvent:514,producerProjectElementModified:515};const oi=["client.name","client.version"];function pi(a){if(!a.errorMetadata||!a.errorMetadata.kvPairs)return a;a.errorMetadata.kvPairs=a.errorMetadata.kvPairs.filter(b=>b.key?oi.includes(b.key):!1);
return a}
;var qi=Gh("ServiceWorkerLogsDatabase",{M:{SWHealthLog:{L:1}},shared:!0,upgrade:(a,b)=>{b(1)&&Vg(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).h.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:1});function ri(a,b){return r(function*(){var c=yield nh(qi(),b),d=R("INNERTUBE_CONTEXT_CLIENT_NAME",0);const e=Object.assign({},a);e.clientError&&(e.clientError=pi(e.clientError));e.interface=d;return Xg(c,"SWHealthLog",e)})}
;w("ytNetworklessLoggingInitializationOptions",t.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1});function si(a,b,c,d){!R("VISITOR_DATA")&&b!=="visitor_id"&&Math.random()<.01&&zf(new ff("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady())throw a=new ff("innertube xhrclient not ready",b,c,d),yf(a),a;c={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:()=>{d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:(h,k)=>{if(d.onSuccess)d.onSuccess(k)},
onFetchSuccess:h=>{if(d.onSuccess)d.onSuccess(h)},
onError:(h,k)=>{if(d.onError)d.onError(k)},
onFetchError:h=>{if(d.onError)d.onError(h)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};c.headers["Content-Type"]||(c.headers["Content-Type"]="application/json");let e="";var f=a.config_.Da;f&&(e=f);f=a.config_.Ea||!1;const g=Xh(f,e,d);Object.assign(c.headers,g);c.headers.Authorization&&!e&&f&&(c.headers["x-origin"]=window.location.origin);a=Gf(`${e}${`/${"youtubei"}/${a.config_.innertubeApiVersion}/${b}`}`,{alt:"json"});try{Qf(a,c)}catch(h){if(h.name==="InvalidAccessError")zf(Error("An extension is blocking network request."));
else throw h;}}
var ti=class{constructor(a){this.config_=null;a?this.config_=a:Rh()&&(this.config_=Sh())}isReady(){!this.config_&&Rh()&&(this.config_=Sh());return!!this.config_}};let ui=0;w("ytDomDomGetNextId",v("ytDomDomGetNextId")||(()=>++ui));w("ytEventsEventsListeners",t.ytEventsEventsListeners||{});w("ytEventsEventsCounter",t.ytEventsEventsCounter||{count:0});t.ytPubsubPubsubInstance||new N;var vi=Symbol("injectionDeps"),wi=class{constructor(){this.name="INNERTUBE_TRANSPORT_TOKEN"}toString(){return`InjectionToken(${this.name})`}},xi=class{constructor(){this.key=Qh}};function yi(a){var b={da:zi,ma:Ai.instance};a.i.set(b.da,b);const c=a.j.get(b.da);if(c)try{c.Nb(a.resolve(b.da))}catch(d){c.Jb(d)}}
function Bi(a,b,c,d=!1){if(c.indexOf(b)>-1)throw Error(`Deps cycle for: ${b}`);if(a.h.has(b))return a.h.get(b);if(!a.i.has(b)){if(d)return;throw Error(`No provider for: ${b}`);}d=a.i.get(b);c.push(b);if(d.ma!==void 0)var e=d.ma;else if(d.Pa)e=d[vi]?Ci(a,d[vi],c):[],e=d.Pa(...e);else if(d.Oa){e=d.Oa;const f=e[vi]?Ci(a,e[vi],c):[];e=new e(...f)}else throw Error(`Could not resolve providers for: ${b}`);c.pop();d.Ub||a.h.set(b,e);return e}
function Ci(a,b,c){return b?b.map(d=>d instanceof xi?Bi(a,d.key,c,!0):Bi(a,d,c)):[]}
var Di=class{constructor(){this.i=new Map;this.j=new Map;this.h=new Map}resolve(a){return a instanceof xi?Bi(this,a.key,[],!0):Bi(this,a,[])}};let Ei;function Fi(){Ei||(Ei=new Di);return Ei}
;let Gi=window;function Hi(){let a,b;return"h5vcc"in Gi&&((a=Gi.h5vcc.traceEvent)==null?0:a.traceBegin)&&((b=Gi.h5vcc.traceEvent)==null?0:b.traceEnd)?1:"performance"in Gi&&Gi.performance.mark&&Gi.performance.measure?2:0}
function Ii(a){const b=Hi();switch(b){case 1:Gi.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:Gi.performance.mark(`${a}-start`);break;case 0:break;default:ua(b,"unknown trace type")}}
function Ji(a){var b=Hi();switch(b){case 1:Gi.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:b=`${a}-start`;const c=`${a}-end`;Gi.performance.mark(c);Gi.performance.measure(a,b,c);break;case 0:break;default:ua(b,"unknown trace type")}}
;var Ki=S("web_enable_lifecycle_monitoring")&&Hi()!==0,Li=S("web_enable_lifecycle_monitoring");function Mi(a){let b,c;(c=(b=window).onerror)==null||c.call(b,a.message,"",0,0,a)}
;function Ni(a){let b;return(b=a.priority)!=null?b:0}
function Oi(a){var b=Array.from(a.h.keys()).sort((c,d)=>Ni(a.h[d])-Ni(a.h[c]));
for(const c of b)b=a.h[c],b.jobId===void 0||b.V||(a.scheduler.R(b.jobId),mg(b.aa,10))}
var Pi=class{constructor(a){this.scheduler=pg();this.i=new Ae;this.h=a;for(let b=0;b<this.h.length;b++){const c=this.h[b];a=()=>{c.aa();this.h[b].V=!0;this.h.every(e=>e.V===!0)&&this.i.resolve()};
const d=mg(a,Ni(c));this.h[b]=Object.assign({},c,{aa:a,jobId:d})}}cancel(){for(const a of this.h)a.jobId===void 0||a.V||this.scheduler.R(a.jobId),a.V=!0;this.i.resolve()}};function Qi(a,b,c){Li&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed(`[${a.constructor.name}] '${a.state}' to '${b}'`),console.log("with message: ",c),console.groupEnd())}
function Ri(a,b){const c=b.filter(e=>Si(a,e)===10),d=b.filter(e=>Si(a,e)!==10);
return a.l.Sb?(...e)=>r(function*(){yield Ti(c,...e);Ui(a,d,...e)}):(...e)=>{Vi(c,...e);
Ui(a,d,...e)}}
function Si(a,b){let c,d;return(d=(c=a.j)!=null?c:b.priority)!=null?d:0}
function Ti(a,...b){return r(function*(){pg();for(const c of a){let d;ng(()=>{Wi(c.name);const e=Xi(()=>c.callback(...b));
Qb(e)?d=S("web_lifecycle_error_handling_killswitch")?e.then(()=>{Yi(c.name)}):e.then(()=>{Yi(c.name)},f=>{Mi(f);
Yi(c.name)}):Yi(c.name)});
d&&(yield d)}})}
function Ui(a,b,...c){b=b.map(d=>({aa:()=>{Wi(d.name);Xi(()=>d.callback(...c));
Yi(d.name)},
priority:Si(a,d)}));
b.length&&(a.i=new Pi(b))}
function Vi(a,...b){pg();for(const c of a)ng(()=>{Wi(c.name);Xi(()=>c.callback(...b));
Yi(c.name)})}
function Wi(a){Ki&&a&&Ii(a)}
function Yi(a){Ki&&a&&Ji(a)}
var Zi=class{constructor(){this.state="none";this.plugins=[];this.j=void 0;this.l={};Ki&&Ii(this.state)}get currentState(){return this.state}install(a){this.plugins.push(a);return this}transition(a,b){Ki&&Ji(this.state);var c=this.transitions.find(d=>Array.isArray(d.from)?d.from.find(e=>e===this.state&&d.P===a):d.from===this.state&&d.P===a);
if(c){this.i&&(Oi(this.i),this.i=void 0);Qi(this,a,b);this.state=a;Ki&&Ii(this.state);c=c.action.bind(this);const d=this.plugins.filter(e=>e[a]).map(e=>e[a]);
c(Ri(this,d),b)}else throw Error(`no transition specified from ${this.state} to ${a}`);}};function Xi(a){if(S("web_lifecycle_error_handling_killswitch"))return a();try{return a()}catch(b){Mi(b)}}
;function $i(){aj||(aj=new bj);return aj}
var bj=class extends Zi{constructor(){super();this.h=null;this.j=10;this.transitions=[{from:"none",P:"application_navigating",action:this.m},{from:"application_navigating",P:"none",action:this.s},{from:"application_navigating",P:"application_navigating",action:()=>{}},
{from:"none",P:"none",action:()=>{}}]}m(a,b){this.h=lg(()=>{this.currentState==="application_navigating"&&this.transition("none")},5E3);
a(b==null?void 0:b.event)}s(a,b){this.h&&(rg.R(this.h),this.h=null);a(b==null?void 0:b.event)}},aj;let cj=[];w("yt.logging.transport.getScrapedGelPayloads",function(){return cj});function dj(a,b){const c=ej(b);if(a.h[c])return a.h[c];const d=Object.keys(a.store)||[];if(d.length<=1&&ej(b)===d[0])return d;const e=[];for(let g=0;g<d.length;g++){const h=d[g].split("/");if(fj(b.auth,h[0])){var f=b.isJspb;fj(f===void 0?"undefined":f?"true":"false",h[1])&&fj(b.cttAuthInfo,h[2])&&(f=b.tier,f=f===void 0?"undefined":JSON.stringify(f),fj(f,h[3])&&e.push(d[g]))}}return a.h[c]=e}
function fj(a,b){return a===void 0||a==="undefined"?!0:a===b}
var gj=class{constructor(){this.store={};this.h={}}storePayload(a,b){a=ej(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);S("more_accurate_gel_parser")&&(b=new CustomEvent("TRANSPORTING_NEW_EVENT"),window.dispatchEvent(b));return a}smartExtractMatchingEntries(a){if(!a.keys.length)return[];const b=dj(this,a.keys.splice(0,1)[0]),c=[];for(let d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push(...this.store[b[d]]),delete this.store[b[d]]):
c.push(...this.store[b[d]].splice(0,a.sizeLimit)));(a==null?0:a.sizeLimit)&&c.length<(a==null?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push(...this.smartExtractMatchingEntries(a)));return c}extractMatchingEntries(a){a=dj(this,a);const b=[];for(let c=0;c<a.length;c++)this.store[a[c]]&&(b.push(...this.store[a[c]]),delete this.store[a[c]]);return b}getSequenceCount(a){a=dj(this,a);let b=0;for(let c=0;c<a.length;c++){let d;b+=((d=this.store[a[c]])==null?void 0:d.length)||0}return b}};
gj.prototype.getSequenceCount=gj.prototype.getSequenceCount;gj.prototype.extractMatchingEntries=gj.prototype.extractMatchingEntries;gj.prototype.smartExtractMatchingEntries=gj.prototype.smartExtractMatchingEntries;gj.prototype.storePayload=gj.prototype.storePayload;function ej(a){return[a.auth===void 0?"undefined":a.auth,a.isJspb===void 0?"undefined":a.isJspb,a.cttAuthInfo===void 0?"undefined":a.cttAuthInfo,a.tier===void 0?"undefined":a.tier].join("/")}
;function hj(a,b){if(a)return a[b.name]}
;const ij=T("initial_gel_batch_timeout",2E3),jj=T("gel_queue_timeout_max_ms",6E4),kj=T("gel_min_batch_size",5);let lj=void 0;class mj{constructor(){this.l=this.h=this.i=0;this.j=!1}}const nj=new mj,oj=new mj,pj=new mj,qj=new mj;let rj,sj=!0,tj=1;const uj=new Map,vj=t.ytLoggingTransportTokensToCttTargetIds_||{},wj=t.ytLoggingTransportTokensToJspbCttTargetIds_||{};let xj={};function yj(){let a=v("yt.logging.ims");a||(a=new gj,w("yt.logging.ims",a));return a}
function zj(a,b){if(a.endpoint==="log_event"){Aj();var c=Bj(a),d=Cj(a.payload)||"";a:{if(S("enable_web_tiered_gel")){var e=ni[d||""];var f,g;if(Fi().resolve(new xi)==null)var h=void 0;else{let k;h=(k=v("yt.gcf.config.hotConfigGroup"))!=null?k:R("RAW_HOT_CONFIG_GROUP");h=h==null?void 0:(f=h.loggingHotConfig)==null?void 0:(g=f.eventLoggingConfig)==null?void 0:g.payloadPolicies}if(f=h)for(g=0;g<f.length;g++)if(f[g].payloadNumber===e){e=f[g];break a}}e=void 0}f=200;if(e){if(e.enabled===!1&&!S("web_payload_policy_disabled_killswitch"))return;
f=Dj(e.tier);if(f===400){Ej(a,b);return}}xj[c]=!0;c={cttAuthInfo:c,isJspb:!1,tier:f};yj().storePayload(c,a.payload);Fj(b,c,d==="gelDebuggingEvent")}}
function Fj(a,b,c=!1){a&&(lj=new a);a=T("tvhtml5_logging_max_batch_ads_fork")||T("tvhtml5_logging_max_batch")||T("web_logging_max_batch")||100;const d=W(),e=Gj(!1,b.tier),f=e.l;c&&(e.j=!0);c=0;b&&(c=yj().getSequenceCount(b));c>=1E3?Hj({writeThenSend:!0},!1,b.tier):c>=a?rj||(rj=Ij(()=>{Hj({writeThenSend:!0},!1,b.tier);rj=void 0},0)):d-f>=10&&(Jj(!1,b.tier),e.l=d)}
function Ej(a,b){if(a.endpoint==="log_event"){S("more_accurate_gel_parser")&&yj().storePayload({isJspb:!1},a.payload);Aj();var c=Bj(a),d=new Map;d.set(c,[a.payload]);var e=Cj(a.payload)||"";b&&(lj=new b);return new M((f,g)=>{lj&&lj.isReady()?Kj(d,lj,f,g,{bypassNetworkless:!0},!0,e==="gelDebuggingEvent"):f()})}}
function Bj(a){var b="";if(a.dangerousLogToVisitorSession)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;const c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);vj[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function Hj(a={},b=!1,c){new M((d,e)=>{const f=Gj(b,c),g=f.j;f.j=!1;Lj(f.i);Lj(f.h);f.h=0;lj&&lj.isReady()?c===void 0&&S("enable_web_tiered_gel")?Mj(d,e,a,b,300,g):Mj(d,e,a,b,c,g):(Jj(b,c),d())})}
function Mj(a,b,c={},d=!1,e=200,f=!1){var g=lj,h=new Map;const k=new Map,l={isJspb:d,cttAuthInfo:void 0,tier:e},p={isJspb:d,cttAuthInfo:void 0};if(d){for(const n of Object.keys(xj))b=S("enable_web_tiered_gel")?yj().smartExtractMatchingEntries({keys:[l,p],sizeLimit:1E3}):yj().extractMatchingEntries({isJspb:!0,cttAuthInfo:n}),b.length>0&&h.set(n,b),(S("web_fp_via_jspb_and_json")&&c.writeThenSend||!S("web_fp_via_jspb_and_json"))&&delete xj[n];Nj(h,g,a,c,f)}else{for(const n of Object.keys(xj))h=S("enable_web_tiered_gel")?
yj().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:n,tier:e},{isJspb:!1,cttAuthInfo:n}],sizeLimit:1E3}):yj().extractMatchingEntries({isJspb:!1,cttAuthInfo:n}),h.length>0&&k.set(n,h),(S("web_fp_via_jspb_and_json")&&c.writeThenSend||!S("web_fp_via_jspb_and_json"))&&delete xj[n];Kj(k,g,a,b,c,!1,f)}}
function Jj(a=!1,b=200){const c=()=>{Hj({writeThenSend:!0},a,b)},d=Gj(a,b);
var e=d===qj||d===pj?5E3:jj;S("web_gel_timeout_cap")&&!d.h&&(e=Ij(()=>{c()},e),d.h=e);
Lj(d.i);e=R("LOGGING_BATCH_TIMEOUT",T("web_gel_debounce_ms",1E4));S("shorten_initial_gel_batch_timeout")&&sj&&(e=ij);e=Ij(()=>{T("gel_min_batch_size")>0?yj().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=kj&&c():c()},e);
d.i=e}
function Kj(a,b,c,d,e={},f,g){const h=Math.round(W());let k=a.size;const l=Oj(g);for(const [p,n]of a){a=p;g=n;const q=Ld({context:Th(b.config_||Sh())});if(!ha(g)&&!S("throw_err_when_logevent_malformed_killswitch")){d();break}q.events=g;(g=vj[a])&&Pj(q,a,g);delete vj[a];const m=a==="visitorOnlyApprovedKey";Qj(q,h,m);Rj(e);const u=I=>{S("start_client_gcf")&&rg.h(()=>r(function*(){yield Sj(I)}));
k--;k||c()};
let B=0;const y=()=>{B++;if(e.bypassNetworkless&&B===1)try{si(b,l,q,Tj({writeThenSend:!0},m,u,y,f)),sj=!1}catch(I){yf(I),d()}k--;k||c()};
try{si(b,l,q,Tj(e,m,u,y,f)),sj=!1}catch(I){yf(I),d()}}}
function Nj(a,b,c,d={},e){const f=Math.round(W()),g={value:a.size};var h=new Map([...a]);for(const [B]of h){var k=B,l=a.get(k);h=new Ze;var p=b.config_||Sh(),n=new Ve,q=new Ne;K(q,1,p.ka);K(q,2,p.ja);G(q,16,lc(p.Ca));K(q,17,p.innertubeContextClientVersion);if(p.Z){var m=p.Z,u=new Le;m.coldConfigData&&K(u,1,m.coldConfigData);m.appInstallData&&K(u,6,m.appInstallData);m.coldHashData&&K(u,3,m.coldHashData);m.hotHashData&&K(u,5,m.hotHashData);J(q,Le,62,u)}if((m=t.devicePixelRatio)&&m!=1){if(m!=null&&typeof m!==
"number")throw Error(`Value of float/double field must be a number, found ${typeof m}: ${m}`);G(q,65,m)}m=Nf();m!==""&&K(q,54,m);m=Of();if(m.length>0){u=new Re;for(let y=0;y<m.length;y++){const I=new Oe;K(I,1,m[y].key);Pc(I,2,Pe,pc(m[y].value));Wc(u,15,Oe,I)}J(n,Re,5,u)}Uh(n);Vh(p,q);S("start_client_gcf")&&Wh(q);R("DELEGATED_SESSION_ID")&&!S("pageid_as_header_web")&&(p=new Ue,K(p,3,R("DELEGATED_SESSION_ID")));!S("fill_delegate_context_in_gel_killswitch")&&(m=R("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&
(u=Tc(n,Ue,3)||new Ue,p=n,m=K(u,18,m),J(p,Ue,3,m));p=q;m=R("DEVICE","");for(const [y,I]of Object.entries(Ff(m)))m=y,u=I,m==="cbrand"?K(p,12,u):m==="cmodel"?K(p,13,u):m==="cbr"?K(p,87,u):m==="cbrver"?K(p,88,u):m==="cos"?K(p,18,u):m==="cosver"?K(p,19,u):m==="cplatform"&&G(p,42,lc(jg(u)));n.j(q);J(h,Ve,1,n);if(q=wj[k])a:{if(Zc(q,1))n=1;else if(q.getPlaylistId())n=2;else break a;J(h,Ye,4,q);q=Tc(h,Ve,1)||new Ve;p=Tc(q,Ue,3)||new Ue;m=new Te;K(m,2,k);G(m,1,lc(n));Wc(p,12,Te,m);J(q,Ue,3,p)}delete wj[k];
k=k==="visitorOnlyApprovedKey";Uj()||G(h,2,f==null?f:oc(f));!k&&(n=R("EVENT_ID"))&&(q=Vj(),p=new Xe,K(p,1,n),G(p,2,q==null?q:oc(q)),J(h,Xe,5,p));Rj(d);if(S("jspb_serialize_with_worker")){mi||((n=R("WORKER_SERIALIZATION_URL"))?((n=n.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue)?(ra===void 0&&(ra=sa()),q=ra,n=new ta(q?q.createScriptURL(n):n)):n=null,mi=n):mi=null);q=mi||void 0;if(!li&&q!==void 0){n=Worker;if(q instanceof ta)q=q.h;else throw Error("");li=new n(q,void 0)}if((n=li)&&d.writeThenSend){uj.set(tj,
{client:b,resolve:c,networklessOptions:d,isIsolated:!1,useVSSEndpoint:e,dangerousLogToVisitorSession:k,requestsOutstanding:g});a=n;b=a.postMessage;c=Ac(h);b.call(a,{op:"gelBatchToSerialize",batchRequest:c,clientEvents:l,key:tj});tj++;break}}if(l){n=[];for(q=0;q<l.length;q++)try{n.push(new We(l[q]))}catch(y){yf(new ff("Transport failed to deserialize "+String(l[q])))}l=n}else l=[];for(const y of l)Wc(h,3,We,y);l={startTime:W(),ticks:{},infos:{}};h=JSON.stringify(Ac(h));l.ticks.geljspc=W();S("log_jspb_serialize_latency")&&
Math.random()<.001&&ei("meta_logging_csi_event",{timerName:"gel_jspb_serialize",Vb:l});Wj(h,b,c,d,e,k,g)}}
function Wj(a,b,c,d={},e,f,g={value:0}){e=Oj(e);d=Tj(d,f,h=>{S("start_client_gcf")&&rg.h(()=>r(function*(){yield Sj(h)}));
g.value--;g.value||c()},()=>{g.value--;
g.value||c()},!1);
d.headers["Content-Type"]="application/json+protobuf";d.postBodyFormat="JSPB";d.postBody=a;si(b,e,"",d);sj=!1}
function Rj(a){S("always_send_and_write")&&(a.writeThenSend=!1)}
function Tj(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,vb:!!e,headers:{},postBodyFormat:"",postBody:"",compress:S("compress_gel")||S("compress_gel_lr")};Uj()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(W())));return a}
function Qj(a,b,c){Uj()||(a.requestTimeMs=String(b));S("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=R("EVENT_ID"))&&(c=Vj(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function Vj(){let a=R("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*65535/2));a++;a>65535&&(a=1);Q("BATCH_CLIENT_COUNTER",a);return a}
function Pj(a,b,c){let d;if(c.videoId)d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Aj(){var a;(a=v("yt.logging.transport.enableScrapingForTest"))||(a=Mf("il_payload_scraping"),a=(a!==void 0?String(a):"")!=="enable_il_payload_scraping");a||(cj=[],w("yt.logging.transport.enableScrapingForTest",!0),w("yt.logging.transport.scrapedPayloadsForTesting",cj),w("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),w("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
w("yt.logging.transport.scrapeClientEvent",!0))}
function Uj(){return S("use_request_time_ms_header")||S("lr_use_request_time_ms_header")}
function Ij(a,b){return S("transport_use_scheduler")===!1?Jf(a,b):S("logging_avoid_blocking_during_navigation")||S("lr_logging_avoid_blocking_during_navigation")?lg(()=>{$i().currentState==="none"?a():$i().install({none:{callback:a}})},b):lg(a,b)}
function Lj(a){S("transport_use_scheduler")?rg.R(a):window.clearTimeout(a)}
function Sj(a){return r(function*(){var b,c=a==null?void 0:(b=a.responseContext)==null?void 0:b.globalConfigGroup;b=hj(c,Je);const d=c==null?void 0:c.hotHashData,e=hj(c,Ie);c=c==null?void 0:c.coldHashData;const f=Fi().resolve(new xi);f&&(d&&(b?yield Oh(f,d,b):yield Oh(f,d)),c&&(e?yield Ph(f,c,e):yield Ph(f,c)))})}
function Gj(a,b=200){return a?b===300?qj:oj:b===300?pj:nj}
function Cj(a){a=Object.keys(a);for(const b of a)if(ni[b])return b}
function Dj(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
function Oj(a=!1){return a&&S("vss_through_gel_video_stats")?"video_stats":"log_event"}
;const Xj=t.ytLoggingGelSequenceIdObj_||{};
function Yj(a,b,c,d={}){const e={},f=Math.round(d.timestamp||W());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=v("_lact",window);a=a==null?-1:Math.max(Date.now()-a,0);e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!S("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,Xj[b]=b in Xj?Xj[b]+1:0,a.sequence={index:Xj[b],groupKey:b},d.endOfSequence&&delete Xj[d.sequenceGroup]);(d.sendIsolatedPayload?Ej:zj)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,
dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},c)}
function Zj(a=!1){Hj(void 0,a)}
;let ak=[];function Y(a,b,c={}){let d=ti;R("ytLoggingEventsDefaultDisabled",!1)&&ti===ti&&(d=null);Yj(a,b,d,c)}
;var bk=new Set,ck=0,dk=0,ek=0,fk=[];const gk=[],hk=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function ik(a){jk(a)}
function kk(a){jk(a,"WARNING")}
function jk(a,b="ERROR"){var c={};c.name=R("INNERTUBE_CONTEXT_CLIENT_NAME",1);c.version=R("INNERTUBE_CONTEXT_CLIENT_VERSION");lk(a,c,b)}
function lk(a,b,c="ERROR"){if(a){a.hasOwnProperty("level")&&a.level&&(c=a.level);if(S("console_log_js_exceptions")){var d=[];d.push(`Name: ${a.name}`);d.push(`Message: ${a.message}`);a.hasOwnProperty("params")&&d.push(`Error Params: ${JSON.stringify(a.params)}`);a.hasOwnProperty("args")&&d.push(`Error args: ${JSON.stringify(a.args)}`);d.push(`File name: ${a.fileName}`);d.push(`Stacktrace: ${a.stack}`);window.console.log(d.join("\n"),a)}if(!(ck>=5)){d=[];for(e of gk)try{e()&&d.push(e())}catch(u){}var e=
d;e=[...fk,...e];var f=Aa(a);d=f.message||"Unknown Error";const q=f.name||"UnknownError";var g=f.stack||a.i||"Not available";if(g.startsWith(`${q}: ${d}`)){var h=g.split("\n");h.shift();g=h.join("\n")}h=f.lineNumber||"Not available";f=f.fileName||"Not available";let m=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var k=0;k<a.args.length&&!(m=cg(a.args[k],`params.${k}`,b,m),m>=500);k++);else if(a.hasOwnProperty("params")&&a.params){const u=a.params;if(typeof a.params==="object")for(k in u){if(!u[k])continue;
const B=`params.${k}`,y=eg(u[k]);b[B]=y;m+=B.length+y.length;if(m>500)break}else b.params=eg(u)}if(e.length)for(k=0;k<e.length&&!(m=cg(e[k],`params.context.${k}`,b,m),m>=500);k++);navigator.vendor&&!b.hasOwnProperty("vendor")&&(b["device.vendor"]=navigator.vendor);b={message:d,name:q,lineNumber:h,fileName:f,stack:g,params:b,sampleWeight:1};k=Number(a.columnNumber);isNaN(k)||(b.lineNumber=`${b.lineNumber}:${k}`);if(a.level==="IGNORED")var l=0;else a:{a=Wf();for(l of a.F)if(b.message&&b.message.match(l.Ha)){l=
l.weight;break a}for(var p of a.D)if(p.callback(b)){l=p.weight;break a}l=1}b.sampleWeight=l;l=b;for(var n of Tf)if(n.U[l.name]){p=n.U[l.name];for(const u of p)if(p=l.message.match(u.u)){l.params["params.error.original"]=p[0];a=u.groups;b={};for(k=0;k<a.length;k++)b[a[k]]=p[k+1],l.params[`params.error.${a[k]}`]=p[k+1];l.message=n.ba(b);break}}l.params||(l.params={});n=Wf();l.params["params.errorServiceSignature"]=`msg=${n.F.length}&cb=${n.D.length}`;l.params["params.serviceWorker"]="true";t.document&&
t.document.querySelectorAll&&(l.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));(new Od(Pd,"sample")).constructor!==Od&&(l.params["params.fconst"]="true");window.yterr&&typeof window.yterr==="function"&&window.yterr(l);l.sampleWeight===0||bk.has(l.message)||mk(l,c)}}}
function mk(a,b="ERROR"){if(b==="ERROR"){$f.B("handleError",a);if(S("record_app_crashed_web")&&ek===0&&a.sampleWeight===1){ek++;var c={appCrashType:"APP_CRASH_TYPE_BREAKPAD"};S("report_client_error_with_app_crash_ks")||(c.systemHealth={crashData:{clientError:{logMessage:{message:a.message}}}});Y("appCrashed",c)}dk++}else b==="WARNING"&&$f.B("handleWarning",a);c={};b:{for(e of hk){var d=Ra();if(d&&d.toLowerCase().indexOf(e.toLowerCase())>=0){var e=!0;break b}}e=!1}if(e)c=void 0;else{d={stackTrace:a.stack};
a.fileName&&(d.filename=a.fileName);e=a.lineNumber&&a.lineNumber.split?a.lineNumber.split(":"):[];e.length!==0&&(e.length!==1||isNaN(Number(e[0]))?e.length!==2||isNaN(Number(e[0]))||isNaN(Number(e[1]))||(d.lineNumber=Number(e[0]),d.columnNumber=Number(e[1])):d.lineNumber=Number(e[0]));e={level:"ERROR_LEVEL_UNKNOWN",message:a.message,errorClassName:a.name,sampleWeight:a.sampleWeight};b==="ERROR"?e.level="ERROR_LEVEL_ERROR":b==="WARNING"&&(e.level="ERROR_LEVEL_WARNNING");d={isObfuscated:!0,browserStackInfo:d};
c.pageUrl=window.location.href;c.kvPairs=[];R("FEXP_EXPERIMENTS")&&(c.experimentIds=R("FEXP_EXPERIMENTS"));var f=R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");const k=uf.EXPERIMENT_FLAGS;if((!k||!k.web_disable_gel_stp_ecatcher_killswitch)&&f)for(var g of Object.keys(f))c.kvPairs.push({key:g,value:String(f[g])});if(g=a.params)for(var h of Object.keys(g))c.kvPairs.push({key:`client.${h}`,value:String(g[h])});h=R("SERVER_NAME");g=R("SERVER_VERSION");h&&g&&(c.kvPairs.push({key:"server.name",value:h}),
c.kvPairs.push({key:"server.version",value:g}));c={errorMetadata:c,stackTrace:d,logMessage:e}}if(c&&(Y("clientError",c),b==="ERROR"||S("errors_flush_gel_always_killswitch")))a:{if(S("web_fp_via_jspb")){b=ak;ak=[];if(b)for(const k of b)Yj(k.N,k.payload,ti,k.options);Zj(!0);if(!S("web_fp_via_jspb_and_json"))break a}Zj()}try{bk.add(a.message)}catch(k){}ck++}
function nk(a,...b){a.args||(a.args=[]);Array.isArray(a.args)&&a.args.push(...b)}
;function ok(a){return r(function*(){var b=yield t.fetch(a.i);if(b.status!==200)return Promise.reject("Server error when retrieving AmbientData");b=yield b.text();if(!b.startsWith(")]}'\n"))return Promise.reject("Incorrect JSPB formatting");a:{b=JSON.parse(b.substring(5));for(let c=0;c<b.length;c++)if(b[c][0]==="yt.sw.adr"){b=new qf(b[c]);break a}b=null}return b?b:Promise.reject("AmbientData missing from response")})}
function pk(a=!1){const b=qk.instance;return r(function*(){if(a||!b.h)b.h=ok(b).then(b.j).catch(c=>{delete b.h;jk(c)});
return b.h})}
var qk=class{constructor(){this.i=rk("/sw.js_data")}j(a){const b=Tc(a,pf,2);if(b){var c=Yc(b,5);c&&(t.__SAPISID=c);Xc(b,10)!=null?Q("EOM_VISITOR_DATA",Yc(b,10)):Xc(b,7)!=null&&Q("VISITOR_DATA",Yc(b,7));if(nc(Jc(b,4))!=null){c=String;let e;var d=(e=nc(Jc(b,4)))!=null?e:0;Q("SESSION_INDEX",c(d))}Xc(b,8)!=null&&Q("DELEGATED_SESSION_ID",Yc(b,8));Xc(b,12)!=null&&Q("USER_SESSION_ID",Yc(b,12));Xc(b,11)!=null&&Q("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT",Yc(b,11))}return a}};function sk(a,b){b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,typeof b.expirationSeconds==="string"&&setTimeout(()=>{delete a.h[b.encryptedTokenJarContents]},Number(b.expirationSeconds)*1E3))}
var tk=class{constructor(){this.h={}}handleResponse(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");let c,d;b=((c=b.G.context)==null?void 0:(d=c.request)==null?void 0:d.consistencyTokenJars)||[];let e;if(a=(e=a.responseContext)==null?void 0:e.consistencyTokenJar){for(const f of b)delete this.h[f.encryptedTokenJarContents];sk(this,a)}}};let uk=Date.now().toString();function vk(){if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];return a}catch(d){}a=Array(16);for(b=0;b<16;b++){c=Date.now();for(let d=0;d<c%23;d++)a[b]=Math.random();a[b]=Math.floor(Math.random()*256)}if(uk)for(b=1,c=0;c<uk.length;c++)a[b%16]^=a[(b-1)%16]/4^uk.charCodeAt(c),b++;return a}
;var wk;let xk=t.ytLoggingDocDocumentNonce_;if(!xk){const a=vk(),b=[];for(let c=0;c<a.length;c++)b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c]&63));xk=b.join("")}wk=xk;var yk={Ta:0,Qa:1,Sa:2,fb:3,Va:4,rb:5,gb:6,nb:7,lb:8,mb:9,qb:10,kb:11,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS",7:"SHARE",8:"PUSH_NOTIFICATIONS",9:"RICH_GRID_WATCH",10:"UNPLUGGED_BROWSE",11:"PICTURE_IN_PICTURE"};let zk=1;function Ak(a){return new Bk({trackingParams:a})}
function Ck(a,b,c,d,e,f){const g=zk++;return new Bk({veType:a,veCounter:g,elementIndex:c,dataElement:b,youtubeData:d,jspbYoutubeData:e,loggingDirectives:f})}
var Bk=class{constructor(a){this.h=a}getAsJson(){const a={};this.h.trackingParams!==void 0?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,this.h.veCounter!==void 0&&(a.veCounter=this.h.veCounter),this.h.elementIndex!==void 0&&(a.elementIndex=this.h.elementIndex));this.h.dataElement!==void 0&&(a.dataElement=this.h.dataElement.getAsJson());this.h.youtubeData!==void 0&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a}getAsJspb(){const a=new Qe;
if(this.h.trackingParams!==void 0)a.setTrackingParams(this.h.trackingParams);else{if(this.h.veType!==void 0){var b=this.h.veType;G(a,2,b==null?b:mc(b))}this.h.veCounter!==void 0&&(b=this.h.veCounter,G(a,6,b==null?b:mc(b)));this.h.elementIndex!==void 0&&(b=this.h.elementIndex,G(a,3,b==null?b:mc(b)));this.h.isCounterfactual&&G(a,5,!0)}this.h.dataElement!==void 0&&(b=this.h.dataElement.getAsJspb(),J(a,Qe,7,b));this.h.youtubeData!==void 0&&J(a,Ke,8,this.h.jspbYoutubeData);return a}toString(){return JSON.stringify(this.getAsJson())}isClientVe(){return!this.h.trackingParams&&
!!this.h.veType}getLoggingDirectives(){return this.h.loggingDirectives}};function Dk(a=0){return R("client-screen-nonce-store",{})[a]}
function Ek(a,b=0){let c=R("client-screen-nonce-store");c||(c={},Q("client-screen-nonce-store",c));c[b]=a}
function Fk(a=0){return a===0?"ROOT_VE_TYPE":`${"ROOT_VE_TYPE"}.${a}`}
function Gk(a=0){return R(Fk(a))}
function Hk(a=0){return(a=Gk(a))?new Bk({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null}
function Ik(){let a=R("csn-to-ctt-auth-info");a||(a={},Q("csn-to-ctt-auth-info",a));return a}
function Jk(){return Object.values(R("client-screen-nonce-store",{})).filter(a=>a!==void 0)}
function Z(a=0){a=Dk(a);if(!a&&!R("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
function Kk(a){for(const b of Object.values(yk))if(Z(b)===a)return!0;return!1}
function Lk(a,b,c){const d=Ik();(c=Z(c))&&delete d[c];b&&(d[a]=b)}
function Mk(a){return Ik()[a]}
function Nk(a,b,c=0,d){if(a!==Dk(c)||b!==R(Fk(c)))if(Lk(a,d,c),Ek(a,c),Q(Fk(c),b),b=()=>{setTimeout(()=>{a&&Y("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:wk,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()}
;function Ok(){var a=R("INNERTUBE_CONTEXT");if(!a)return jk(Error("Error: No InnerTubeContext shell provided in ytconfig.")),{};a=Ld(a);S("web_no_tracking_params_in_shell_killswitch")||delete a.clickTracking;a.client||(a.client={});var b=a.client;b.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var c=Nf();c?b.experimentsToken=c:delete b.experimentsToken;tk.instance||(tk.instance=new tk);b=tk.instance.h;c=[];let d=0;for(var e in b)c[d++]=b[e];a.request=Object.assign({},a.request,{consistencyTokenJars:c});
a.user=Object.assign({},a.user);if(e=R("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))a.user.serializedDelegationContext=e;return a}
;function Pk(a){var b=a;if(a=R("INNERTUBE_HOST_OVERRIDE")){a=String(a);var c=String,d=b.match(Ea);b=d[5];var e=d[6];d=d[7];let f="";b&&(f+=b);e&&(f+="?"+e);d&&(f+="#"+d);b=a+c(f)}return b}
;function Qk(a){const b={"Content-Type":"application/json"};R("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=R("EOM_VISITOR_DATA"):R("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=R("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=R("LOGGED_IN",!1);R("DEBUG_SETTINGS_METADATA")&&(b["X-Debug-Settings-Metadata"]=R("DEBUG_SETTINGS_METADATA"));a!=="cors"&&((a=R("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=R("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=
R("CHROME_CONNECTED_HEADER"))&&(b["X-Youtube-Chrome-Connected"]=a),(a=R("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a),R("ENABLE_LAVA_HEADER_ON_IT_EXPANSION")&&(a=R("SERIALIZED_LAVA_DEVICE_CONTEXT"))&&(b["X-YouTube-Lava-Device-Context"]=a));return b}
;var Rk=class{constructor(){this.h={}}get(a){if(Object.prototype.hasOwnProperty.call(this.h,a))return this.h[a]}set(a,b){this.h[a]=b}remove(a){delete this.h[a]}};new class{constructor(){this.mappings=new Rk}get(a){a:{var b=this.mappings.get(a.toString());switch(b.type){case "mapping":a=b.value;break a;case "factory":b=b.value();this.mappings.set(a.toString(),{type:"mapping",value:b});a=b;break a;default:a=ua(b,void 0)}}return a}};var Sk=class{},Tk=class extends Sk{};const Uk={GET_DATASYNC_IDS:function(a){return()=>new a}(class extends Tk{})};class $h extends Yh{constructor(a){super(arguments);this.csn=a}}const hi=new Zh,Vk=[];let Xk=Wk,Yk=0;const Zk=new Map,$k=new Map,al=new Map;
function bl(a,b,c,d,e,f,g,h){const k=Xk(),l=new Bk({veType:b,youtubeData:f,jspbYoutubeData:void 0});f=cl({},k);e&&(f.cttAuthInfo=e);e={csn:k,pageVe:l.getAsJson()};S("expectation_logging")&&h&&h.screenCreatedLoggingExpectations&&(e.screenCreatedLoggingExpectations=h.screenCreatedLoggingExpectations);c&&c.visualElement?(e.implicitGesture={parentCsn:c.clientScreenNonce,gesturedVe:c.visualElement.getAsJson()},g&&(e.implicitGesture.gestureType=g)):c&&kk(new ff("newScreen() parent element does not have a VE - rootVe",
b));d&&(e.cloneCsn=d);a?Yj("screenCreated",e,a,f):Y("screenCreated",e,f);ei(hi,new $h(k));Zk.clear();$k.clear();al.clear();return k}
function dl(a,b,c,d,e=!1){el(a,b,c,[d],e)}
function el(a,b,c,d,e=!1){const f=cl({cttAuthInfo:Mk(b)||void 0},b);for(const h of d){var g=h.getAsJson();(Kd(g)||!g.trackingParams&&!g.veType)&&kk(Error("Child VE logged with no data"));if(S("no_client_ve_attach_unless_shown")){const k=fl(h,b);if(g.veType&&!$k.has(k)&&!al.has(k)&&!e){if(!S("il_attach_cache_limit")||Zk.size<1E3){Zk.set(k,[a,b,c,h]);return}S("il_attach_cache_limit")&&Zk.size>1E3&&kk(new ff("IL Attach cache exceeded limit"))}g=fl(c,b);Zk.has(g)?gl(c,b):al.set(g,!0)}}d=d.filter(h=>{h.csn!==
b?(h.csn=b,h=!0):h=!1;return h});
c={csn:b,parentVe:c.getAsJson(),childVes:wa(d,h=>h.getAsJson())};
b==="UNDEFINED_CSN"?hl("visualElementAttached",f,c):a?Yj("visualElementAttached",c,a,f):Y("visualElementAttached",c,f)}
function il(a,b,c,d,e){jl(a,b,c,e)}
function jl(a,b,c,d){kl(c,b);const e=cl({cttAuthInfo:Mk(b)||void 0},b);c={csn:b,ve:c.getAsJson(),eventType:1};d&&(c.clientData=d);b==="UNDEFINED_CSN"?hl("visualElementShown",e,c):a?Yj("visualElementShown",c,a,e):Y("visualElementShown",c,e)}
function ll(a,b,c,d=!1){const e=d?16:8;d=cl({cttAuthInfo:Mk(b)||void 0,endOfSequence:d},b);c={csn:b,ve:c.getAsJson(),eventType:e};b==="UNDEFINED_CSN"?hl("visualElementHidden",d,c):a?Yj("visualElementHidden",c,a,d):Y("visualElementHidden",c,d)}
function ml(a,b,c,d){var e=void 0;kl(c,b);e=e||"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";const f=cl({cttAuthInfo:Mk(b)||void 0},b);c={csn:b,ve:c.getAsJson(),gestureType:e};d&&(c.clientData=d);b==="UNDEFINED_CSN"?hl("visualElementGestured",f,c):a?Yj("visualElementGestured",c,a,f):Y("visualElementGestured",c,f)}
function Wk(){let a;a=vk();const b=[];for(let c=0;c<a.length;c++)b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c]&63));return b.join("")}
function hl(a,b,c){Vk.push({N:a,payload:c,Cb:void 0,options:b});Yk||(Yk=ii())}
function ji(a){if(Vk){for(const b of Vk)b.payload&&(b.payload.csn=a.csn,Y(b.N,b.payload,b.options));Vk.length=0}Yk=0}
function fl(a,b){return`${a.getAsJson().veType}${a.getAsJson().veCounter}${b}`}
function kl(a,b){if(S("no_client_ve_attach_unless_shown")){var c=fl(a,b);$k.set(c,!0);gl(a,b)}}
function gl(a,b){a=fl(a,b);Zk.has(a)&&(b=Zk.get(a)||[],dl(b[0],b[1],b[2],b[3],!0),Zk.delete(a))}
function cl(a,b){S("log_sequence_info_on_gel_web")&&(a.sequenceGroup=b);return a}
;Object.assign({auto_search:"LATENCY_ACTION_AUTO_SEARCH",ad_to_ad:"LATENCY_ACTION_AD_TO_AD",ad_to_video:"LATENCY_ACTION_AD_TO_VIDEO",app_startup:"LATENCY_ACTION_APP_STARTUP",browse:"LATENCY_ACTION_BROWSE",cast_splash:"LATENCY_ACTION_CAST_SPLASH",channel_activity:"LATENCY_ACTION_KIDS_CHANNEL_ACTIVITY",channels:"LATENCY_ACTION_CHANNELS",chips:"LATENCY_ACTION_CHIPS",commerce_transaction:"LATENCY_ACTION_COMMERCE_TRANSACTION",direct_playback:"LATENCY_ACTION_DIRECT_PLAYBACK",editor:"LATENCY_ACTION_EDITOR",
embed:"LATENCY_ACTION_EMBED",embed_no_video:"LATENCY_ACTION_EMBED_NO_VIDEO",entity_key_serialization_perf:"LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",entity_key_deserialization_perf:"LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",explore:"LATENCY_ACTION_EXPLORE",favorites:"LATENCY_ACTION_FAVORITES",home:"LATENCY_ACTION_HOME",inboarding:"LATENCY_ACTION_INBOARDING",library:"LATENCY_ACTION_LIBRARY",live:"LATENCY_ACTION_LIVE",live_pagination:"LATENCY_ACTION_LIVE_PAGINATION",management:"LATENCY_ACTION_MANAGEMENT",
mini_app:"LATENCY_ACTION_MINI_APP_PLAY",notification_settings:"LATENCY_ACTION_KIDS_NOTIFICATION_SETTINGS",onboarding:"LATENCY_ACTION_ONBOARDING",parent_profile_settings:"LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",parent_tools_collection:"LATENCY_ACTION_PARENT_TOOLS_COLLECTION",parent_tools_dashboard:"LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",player_att:"LATENCY_ACTION_PLAYER_ATTESTATION",prebuffer:"LATENCY_ACTION_PREBUFFER",prefetch:"LATENCY_ACTION_PREFETCH",profile_settings:"LATENCY_ACTION_KIDS_PROFILE_SETTINGS",
profile_switcher:"LATENCY_ACTION_LOGIN",projects:"LATENCY_ACTION_PROJECTS",reel_watch:"LATENCY_ACTION_REEL_WATCH",results:"LATENCY_ACTION_RESULTS",red:"LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",premium:"LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",privacy_policy:"LATENCY_ACTION_KIDS_PRIVACY_POLICY",review:"LATENCY_ACTION_REVIEW",search_overview_answer:"LATENCY_ACTION_SEARCH_OVERVIEW_ANSWER",search_ui:"LATENCY_ACTION_SEARCH_UI",search_suggest:"LATENCY_ACTION_SUGGEST",search_zero_state:"LATENCY_ACTION_SEARCH_ZERO_STATE",
secret_code:"LATENCY_ACTION_KIDS_SECRET_CODE",seek:"LATENCY_ACTION_PLAYER_SEEK",settings:"LATENCY_ACTION_SETTINGS",store:"LATENCY_ACTION_STORE",supervision_dashboard:"LATENCY_ACTION_KIDS_SUPERVISION_DASHBOARD",tenx:"LATENCY_ACTION_TENX",video_preview:"LATENCY_ACTION_VIDEO_PREVIEW",video_to_ad:"LATENCY_ACTION_VIDEO_TO_AD",watch:"LATENCY_ACTION_WATCH",watch_it_again:"LATENCY_ACTION_KIDS_WATCH_IT_AGAIN","watch,watch7":"LATENCY_ACTION_WATCH","watch,watch7_html5":"LATENCY_ACTION_WATCH","watch,watch7ad":"LATENCY_ACTION_WATCH",
"watch,watch7ad_html5":"LATENCY_ACTION_WATCH",wn_comments:"LATENCY_ACTION_LOAD_COMMENTS",ww_rqs:"LATENCY_ACTION_WHO_IS_WATCHING",voice_assistant:"LATENCY_ACTION_VOICE_ASSISTANT",cast_load_by_entity_to_watch:"LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",networkless_performance:"LATENCY_ACTION_NETWORKLESS_PERFORMANCE",gel_compression:"LATENCY_ACTION_GEL_COMPRESSION",gel_jspb_serialize:"LATENCY_ACTION_GEL_JSPB_SERIALIZE",attestation_challenge_fetch:"LATENCY_ACTION_ATTESTATION_CHALLENGE_FETCH"},{"analytics.explore":"LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",
"artist.analytics":"LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS","artist.events":"LATENCY_ACTION_CREATOR_ARTIST_CONCERTS","artist.presskit":"LATENCY_ACTION_CREATOR_ARTIST_PROFILE","asset.claimed_videos":"LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS","asset.composition":"LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION","asset.composition_ownership":"LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_OWNERSHIP","asset.composition_policy":"LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_POLICY","asset.embeds":"LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS",
"asset.history":"LATENCY_ACTION_CREATOR_CMS_ASSET_HISTORY","asset.issues":"LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES","asset.licenses":"LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES","asset.metadata":"LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA","asset.ownership":"LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP","asset.policy":"LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY","asset.references":"LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES","asset.shares":"LATENCY_ACTION_CREATOR_CMS_ASSET_SHARES","asset.sound_recordings":"LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS",
"asset_group.assets":"LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_ASSETS","asset_group.campaigns":"LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CAMPAIGNS","asset_group.claimed_videos":"LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CLAIMED_VIDEOS","asset_group.metadata":"LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_METADATA","song.analytics":"LATENCY_ACTION_CREATOR_SONG_ANALYTICS",creator_channel_dashboard:"LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD","channel.analytics":"LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS","channel.comments":"LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",
"channel.content":"LATENCY_ACTION_CREATOR_POST_LIST","channel.content.promotions":"LATENCY_ACTION_CREATOR_PROMOTION_LIST","channel.copyright":"LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT","channel.editing":"LATENCY_ACTION_CREATOR_CHANNEL_EDITING","channel.monetization":"LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION","channel.music":"LATENCY_ACTION_CREATOR_CHANNEL_MUSIC","channel.music_storefront":"LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT","channel.playlists":"LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",
"channel.translations":"LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS","channel.videos":"LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS","channel.live_streaming":"LATENCY_ACTION_CREATOR_LIVE_STREAMING","dialog.copyright_strikes":"LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES","dialog.video_copyright":"LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT","dialog.uploads":"LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",owner:"LATENCY_ACTION_CREATOR_CMS_DASHBOARD","owner.allowlist":"LATENCY_ACTION_CREATOR_CMS_ALLOWLIST","owner.analytics":"LATENCY_ACTION_CREATOR_CMS_ANALYTICS",
"owner.art_tracks":"LATENCY_ACTION_CREATOR_CMS_ART_TRACKS","owner.assets":"LATENCY_ACTION_CREATOR_CMS_ASSETS","owner.asset_groups":"LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS","owner.bulk":"LATENCY_ACTION_CREATOR_CMS_BULK_HISTORY","owner.campaigns":"LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS","owner.channel_invites":"LATENCY_ACTION_CREATOR_CMS_CHANNEL_INVITES","owner.channels":"LATENCY_ACTION_CREATOR_CMS_CHANNELS","owner.claimed_videos":"LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS","owner.claims":"LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",
"owner.claims.manual":"LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING","owner.delivery":"LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY","owner.delivery_templates":"LATENCY_ACTION_CREATOR_CMS_DELIVERY_TEMPLATES","owner.issues":"LATENCY_ACTION_CREATOR_CMS_ISSUES","owner.licenses":"LATENCY_ACTION_CREATOR_CMS_LICENSES","owner.pitch_music":"LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC","owner.policies":"LATENCY_ACTION_CREATOR_CMS_POLICIES","owner.releases":"LATENCY_ACTION_CREATOR_CMS_RELEASES","owner.reports":"LATENCY_ACTION_CREATOR_CMS_REPORTS",
"owner.videos":"LATENCY_ACTION_CREATOR_CMS_VIDEOS","playlist.videos":"LATENCY_ACTION_CREATOR_PLAYLIST_VIDEO_LIST","post.comments":"LATENCY_ACTION_CREATOR_POST_COMMENTS","post.edit":"LATENCY_ACTION_CREATOR_POST_EDIT","promotion.edit":"LATENCY_ACTION_CREATOR_PROMOTION_EDIT","video.analytics":"LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS","video.claims":"LATENCY_ACTION_CREATOR_VIDEO_CLAIMS","video.comments":"LATENCY_ACTION_CREATOR_VIDEO_COMMENTS","video.copyright":"LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT",
"video.edit":"LATENCY_ACTION_CREATOR_VIDEO_EDIT","video.editor":"LATENCY_ACTION_CREATOR_VIDEO_EDITOR","video.editor_async":"LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC","video.live_settings":"LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS","video.live_streaming":"LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING","video.monetization":"LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION","video.policy":"LATENCY_ACTION_CREATOR_VIDEO_POLICY","video.rights_management":"LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT","video.translations":"LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS"});w("ytLoggingLatencyUsageStats_",t.ytLoggingLatencyUsageStats_||{});const nl=window;class ol{constructor(){this.timing={};this.clearResourceTimings=()=>{};
this.webkitClearResourceTimings=()=>{};
this.mozClearResourceTimings=()=>{};
this.msClearResourceTimings=()=>{};
this.oClearResourceTimings=()=>{}}}
var pl=nl.performance||nl.mozPerformance||nl.msPerformance||nl.webkitPerformance||new ol;la(pl.clearResourceTimings||pl.webkitClearResourceTimings||pl.mozClearResourceTimings||pl.msClearResourceTimings||pl.oClearResourceTimings||Jd,pl);const ql=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse","type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.PlayerResponse"];function rl(a){var b={xb:{}},c=fg();if(Ai.instance!==void 0){const d=Ai.instance;a=[b!==d.m,a!==d.l,c!==d.j,!1,!1,!1,void 0!==d.i];if(a.some(e=>e))throw new ff("InnerTubeTransportService is already initialized",a);
}else Ai.instance=new Ai(b,a,c)}
function sl(a,b){return r(function*(){var c;const d=a==null?void 0:(c=a.fa)==null?void 0:c.sessionIndex;c=yield ne(hg(0,{sessionIndex:d}));return Promise.resolve(Object.assign({},Qk(b),c))})}
function tl(a,b,c,d=()=>{}){return r(function*(){var e;
if(b==null?0:(e=b.G)==null?0:e.context){e=b.G.context;for(var f of[])yield f.Ib(e)}var g;if((g=a.i)==null?0:g.Rb(b.input,b.G))return yield a.i.Eb(b.input,b.G);var h;if((g=(h=b.config)==null?void 0:h.Lb)&&a.h.has(g))var k=a.h.get(g);else{h=JSON.stringify(b.G);let q;f=(q=(k=b.O)==null?void 0:k.headers)!=null?q:{};b.O=Object.assign({},b.O,{headers:Object.assign({},f,c)});k=Object.assign({},b.O);b.O.method==="POST"&&(k=Object.assign({},k,{body:h}));k=a.l.fetch(b.input,k,b.config);g&&a.h.set(g,k)}k=yield k;
var l;let p;if(k&&"error"in k&&((l=k)==null?0:(p=l.error)==null?0:p.details)){l=k.error.details;for(const q of l)(l=q["@type"])&&ql.indexOf(l)>-1&&(delete q["@type"],k=q)}g&&a.h.has(g)&&a.h.delete(g);let n;!k&&((n=a.i)==null?0:n.wb(b.input,b.G))&&(k=yield a.i.Db(b.input,b.G));d();return k||void 0})}
function ul(a,b,c){var d={fa:{identity:ig}};let e=()=>{};
b.context||(b.context=Ok());return new M(f=>r(function*(){var g=Pk(c);g=If(g)?"same-origin":"cors";if(a.j.Ma){var h,k=d==null?void 0:(h=d.fa)==null?void 0:h.sessionIndex;h=hg(0,{sessionIndex:k});g=Object.assign({},Qk(g),h)}else g=yield sl(d,g);h=Pk(c);k={};S("json_condensed_response")&&(k.prettyPrint="false");h=Hf(h,k||{},!1);k={method:"POST",mode:If(h)?"same-origin":"cors",credentials:If(h)?"same-origin":"include"};var l={};const p={};for(const n of Object.keys(l))l[n]&&(p[n]=l[n]);Object.keys(p).length>
0&&(k.headers=p);f(tl(a,{input:h,O:k,G:b,config:d},g,e))}))}
var Ai=class{constructor(a,b,c){this.m=a;this.l=b;this.j=c;this.i=void 0;this.h=new Map;a.ea||(a.ea={});a.ea=Object.assign({},Uk,a.ea)}};var zi=new wi;let vl;function wl(){if(!vl){const a=Fi();rl({fetch:(b,c)=>ne(fetch(new Request(b,c)))});
yi(a);vl=a.resolve(zi)}return vl}
;function xl(a){return r(function*(){yield yl();kk(a)})}
function zl(a){return r(function*(){yield yl();jk(a)})}
function Al(a){r(function*(){var b=yield xh();b?yield ri(a,b):(yield pk(),b={timestamp:a.timestamp},b=a.appShellAssetLoadReport?{N:"appShellAssetLoadReport",payload:a.appShellAssetLoadReport,options:b}:a.clientError?{N:"clientError",payload:a.clientError,options:b}:void 0,b&&Y(b.N,b.payload))})}
function yl(){return r(function*(){try{yield pk()}catch(a){}})}
;var Bl=Symbol("trackingData"),Cl=new WeakMap;function Dl(){El.instance||(El.instance=new El);return El.instance}
function Fl(a){const b=Gl(a);let c,d;if(S("il_use_view_model_logging_context")&&(b==null?0:(c=b.context)==null?0:(d=c.loggingContext)==null?0:d.loggingDirectives))return b.context.loggingContext.loggingDirectives.trackingParams||"";let e,f;if(b==null?0:(e=b.rendererContext)==null?0:(f=e.loggingContext)==null?0:f.loggingDirectives)return b.rendererContext.loggingContext.loggingDirectives.trackingParams||"";if(b==null?0:b.loggingDirectives)return b.loggingDirectives.trackingParams||"";let g;return((g=
a.veContainer)==null?0:g.trackingParams)?a.veContainer.trackingParams:(b==null?void 0:b.trackingParams)||""}
function Hl(a,b,c){const d=Z(c);return a.csn===null||d===a.csn||c?d:(a=new ff("VisibilityLogger called before newScreen",{caller:b.tagName,previous_csn:a.csn,current_csn:d}),kk(a),null)}
function Il(a){let b;return!((b=Gl(a))==null||!b.loggingDirectives)}
function Jl(a){a=Gl(a);return Math.floor(Number(a&&a.loggingDirectives&&a.loggingDirectives.visibility&&a.loggingDirectives.visibility.types||""))||1}
function Gl(a){let b,c=a.data||((b=a.props)==null?void 0:b.data);if(a.isWebComponentWrapper){let d;c=(d=Cl.get(a))==null?void 0:d[Bl]}return c}
var El=class{constructor(){this.l=new Set;this.i=new Set;this.h=new Map;this.client=void 0;this.csn=null}j(a){this.client=a}m(){this.clear();this.csn=Z()}clear(){this.l.clear();this.i.clear();this.h.clear();this.csn=null}v(a,b,c){var d=Fl(a),e=a.visualElement?a.visualElement:d;b=this.l.has(e);var f=this.h.get(e);this.l.add(e);this.h.set(e,!0);a.impressionLog&&!b&&a.impressionLog();if(d||a.visualElement)if(c=Hl(this,a,c)){var g=Il(a);if(Jl(a)||g)e=a.visualElement?a.visualElement:Ak(d),d=a.interactionLoggingClientData,
g||b?Jl(a)&4?f||(a=this.client,kl(e,c),b=cl({cttAuthInfo:Mk(c)||void 0},c),f={csn:c,ve:e.getAsJson(),eventType:4},d&&(f.clientData=d),c==="UNDEFINED_CSN"?hl("visualElementShown",b,f):a?Yj("visualElementShown",f,a,b):Y("visualElementShown",f,b)):Jl(a)&1&&!b&&jl(this.client,c,e,d):jl(this.client,c,e,d)}}s(a,b,c){var d=Fl(a);const e=a.visualElement?a.visualElement:d;b=this.i.has(e);const f=this.h.get(e);this.i.add(e);this.h.set(e,!1);if(f===!1)return!0;if(!d&&!a.visualElement)return!1;c=Hl(this,a,c);
if(!c||!Jl(a)&&Il(a))return!1;d=a.visualElement?a.visualElement:Ak(d);Jl(a)&8?ll(this.client,c,d):Jl(a)&2&&!b&&(a=this.client,b=cl({cttAuthInfo:Mk(c)||void 0},c),d={csn:c,ve:d.getAsJson(),eventType:2},c==="UNDEFINED_CSN"?hl("visualElementHidden",b,d):a?Yj("visualElementHidden",d,a,b):Y("visualElementHidden",d,b));return!0}};function Kl(){Ll.instance||(Ll.instance=new Ll)}
function Ml(a){Kl();xf(Dl().v).bind(Dl())(a,void 0,8)}
function Nl(a){Kl();xf(Dl().s).bind(Dl())(a,void 0,8)}
var Ll=class{j(a){xf(Dl().j).bind(Dl())(a)}clear(){xf(Dl().clear).bind(Dl())()}};function Ol(){Pl.instance||(Pl.instance=new Pl);return Pl.instance}
function Ql(a,b,c={}){a.i.add(c.layer||0);a.m=()=>{Rl(a,b,c);const d=Hk(c.layer);if(d){for(const e of a.B)Sl(a,e[0],e[1]||d,c.layer);for(const e of a.C)Tl(a,e[0],e[1])}};
Z(c.layer)||a.m();if(c.ha)for(const d of c.ha)Ul(a,d,c.layer);else jk(Error("Delayed screen needs a data promise."))}
function Rl(a,b,c={}){var d=void 0;c.layer||(c.layer=0);d=c.Ia!==void 0?c.Ia:c.layer;const e=Z(d);d=Hk(d);let f;d&&(c.parentCsn!==void 0?f={clientScreenNonce:c.parentCsn,visualElement:d}:e&&e!=="UNDEFINED_CSN"&&(f={clientScreenNonce:e,visualElement:d}));let g;const h=R("EVENT_ID");e==="UNDEFINED_CSN"&&h&&(g={servletData:{serializedServletEventId:h}});S("combine_ve_grafts")&&e&&Vl(a,e);S("no_client_ve_attach_unless_shown")&&d&&e&&gl(d,e);let k;try{k=bl(a.client,b,f,c.ga,c.cttAuthInfo,g,c.zb,c.loggingExpectations)}catch(n){nk(n,
{Ob:b,rootVe:d,Hb:void 0,yb:e,Gb:f,ga:c.ga});jk(n);return}Nk(k,b,c.layer,c.cttAuthInfo);e&&e!=="UNDEFINED_CSN"&&d&&!Kk(e)&&ll(a.client,e,d,!0);a.h[a.h.length-1]&&!a.h[a.h.length-1].csn&&(a.h[a.h.length-1].csn=k||"");Kl();xf(Dl().m).bind(Dl())();const l=Hk(c.layer);e&&e!=="UNDEFINED_CSN"&&l&&(S("web_mark_root_visible")||S("music_web_mark_root_visible"))&&xf(il)(void 0,k,l,void 0,void 0,void 0);a.i.delete(c.layer||0);a.m=void 0;let p;(p=a.X.get(c.layer))==null||p.forEach((n,q)=>{n?Sl(a,q,n,c.layer):
l&&Sl(a,q,l,c.layer)});
Wl(a)}
function Xl(a){var b=28631,c={layer:8};xf(()=>{[28631].includes(b)||(kk(new ff("createClientScreen() called with a non-page VE",b)),b=83769);c.isHistoryNavigation||a.h.push({rootVe:b,key:c.key||""});a.B=[];a.C=[];c.ha?Ql(a,b,c):Rl(a,b,c)})()}
function Ul(a,b,c=0){xf(()=>{b.then(d=>{a.i.has(c)&&a.m&&a.m();const e=Z(c),f=Hk(c);if(e&&f){var g;(d==null?0:(g=d.response)==null?0:g.trackingParams)&&dl(a.client,e,f,Ak(d.response.trackingParams));var h;(d==null?0:(h=d.playerResponse)==null?0:h.trackingParams)&&dl(a.client,e,f,Ak(d.playerResponse.trackingParams))}})})()}
function Sl(a,b,c,d=0){return xf(()=>{if(a.i.has(d))return a.B.push([b,c]),!0;const e=Z(d),f=c||Hk(d);if(e&&f){if(S("combine_ve_grafts")){const g=a.l.get(f.toString());g?g.push(b):(a.v.set(f.toString(),f),a.l.set(f.toString(),[b]));a.K||(a.K=lg(()=>{Vl(a,e)},1200))}else dl(a.client,e,f,b);
return!0}return!1})()}
function Yl(a,b){return xf(()=>{const c=Ak(b);Sl(a,c,void 0,8);return c})()}
function Vl(a,b){if(b===void 0){const c=Jk();for(let d=0;d<c.length;d++)c[d]!==void 0&&Vl(a,c[d])}else a.l.forEach((c,d)=>{(d=a.v.get(d))&&el(a.client,b,d,c)}),a.l.clear(),a.v.clear(),a.K=void 0}
function Zl(a,b,c,d=0){if(!b)return!1;d=Z(d);if(!d)return!1;ml(a.client,d,Ak(b),c);return!0}
function Tl(a,b,c,d=0){const e=Z(d);b=b||Hk(d);e&&b&&(a=a.client,d=cl({cttAuthInfo:Mk(e)||void 0},e),c={csn:e,ve:b.getAsJson(),clientData:c},e==="UNDEFINED_CSN"?hl("visualElementStateChanged",d,c):a?Yj("visualElementStateChanged",c,a,d):Y("visualElementStateChanged",c,d))}
function Wl(a){for(var b=0;b<a.s.length;b++){var c=a.s[b];try{c()}catch(d){jk(d)}}a.s.length=0;for(b=0;b<a.H.length;b++){c=a.H[b];try{c()}catch(d){jk(d)}}}
var Pl=class{constructor(){this.B=[];this.C=[];this.h=[];this.s=[];this.H=[];this.l=new Map;this.v=new Map;this.i=new Set;this.X=new Map}j(a){this.client=a}clickCommand(a,b,c=0){return Zl(this,a.clickTrackingParams,b,c)}stateChanged(a,b,c=0){this.visualElementStateChanged(Ak(a),b,c)}visualElementStateChanged(a,b,c=0){c===0&&this.i.has(c)?this.C.push([a,b]):Tl(this,a,b,c)}};const $l={granted:"GRANTED",denied:"DENIED",unknown:"UNKNOWN"},am=RegExp("^(?:[a-z]+:)?//","i");function bm(a){var b=a.data;a=b.type;b=b.data;a==="notifications_register"?(P("IDToken",b),cm()):a==="notifications_check_registration"&&dm(b)}
function em(){return self.clients.matchAll({type:"window",includeUncontrolled:!0}).then(a=>{if(a)for(const b of a)b.postMessage({type:"update_unseen_notifications_count_signal"})})}
function fm(a){const b=[];a.forEach(c=>{b.push({key:c.key,value:c.value})});
return b}
function gm(a){return r(function*(){const b=fm(a.payload.chrome.extraUrlParams),c={recipientId:a.recipientId,endpoint:a.payload.chrome.endpoint,extraUrlParams:b},d=of(af);return hm().then(e=>ul(e,c,d).then(f=>{f.json().then(g=>g&&g.endpointUrl?im(a,g.endpointUrl):Promise.resolve()).catch(g=>{zl(g);
Promise.reject(g)})}))})}
function jm(a,b){var c=Z(8);if(c==null||!b)return a;a=am.test(a)?new URL(a):new URL(a,self.registration.scope);a.searchParams.set("parentCsn",c);a.searchParams.set("parentTrackingParams",b);return a.toString()}
function im(a,b){a.deviceId&&P("DeviceId",a.deviceId);a.timestampSec&&P("TimestampLowerBound",a.timestampSec);const c=a.payload.chrome,d=Ol();Xl(d);var e;const f=(e=c.postedEndpoint)==null?void 0:e.clickTrackingParams;e=c==null?void 0:c.loggingDirectives;const g=c.title,h={body:c.body,icon:c.iconUrl,data:{nav:jm(b,e==null?void 0:e.trackingParams),id:c.notificationId,attributionTag:c.attributionTag,clickEndpoint:c.clickEndpoint,postedEndpoint:c.postedEndpoint,clickTrackingParams:f,isDismissed:!0,loggingDirectives:e},
tag:c.notificationTag||c.title+c.body+c.iconUrl,requireInteraction:!0};return self.registration.showNotification(g,h).then(()=>{var k;((k=h.data)==null?0:k.postedEndpoint)&&km(h.data.postedEndpoint);let l;if((l=h.data)==null?0:l.loggingDirectives)k=h.data.loggingDirectives,S("enable_client_ve_spec")&&k.clientVeSpec?(k=Ck(k.clientVeSpec.uiType,void 0,k.clientVeSpec.elementIndex,k.clientVeSpec.clientYoutubeData,void 0,k),k=Sl(d,k,void 0,8)?k:null):k=k.trackingParams?Yl(d,k.trackingParams):null,Ml({screenLayer:8,
visualElement:k});lm(a.displayCap)}).catch(()=>{})}
function km(a){if(!hj(a,$e))return Promise.reject();const b={serializedRecordNotificationInteractionsRequest:hj(a,$e).serializedInteractionsRequest},c=of(bf);return hm().then(d=>ul(d,b,c)).then(d=>d)}
function lm(a){a!==-1&&self.registration.getNotifications().then(b=>{for(let d=0;d<b.length-a;d++){b[d].data.isDismissed=!1;b[d].close();let e,f;if((e=b[d].data)==null?0:(f=e.loggingDirectives)==null?0:f.trackingParams){var c=Ak(b[d].data.loggingDirectives.trackingParams);const g={screenLayer:8,visualElement:c},h=Ck(82046),k=Ol();Sl(k,h,c,8);Ml({screenLayer:8,visualElement:h});(c=Z(8))&&ml(k.client,c,h);Nl(g)}}})}
function dm(a){const b=[mm(a),kf("RegistrationTimestamp").then(nm),om(),pm(),qm()];Promise.all(b).catch(()=>{P("IDToken",a);cm();return Promise.resolve()})}
function nm(a){return Date.now()-(a||0)<=9E7?Promise.resolve():Promise.reject()}
function mm(a){return kf("IDToken").then(b=>a===b?Promise.resolve():Promise.reject())}
function om(){return kf("Permission").then(a=>Notification.permission===a?Promise.resolve():Promise.reject())}
function pm(){return kf("Endpoint").then(a=>rm().then(b=>a===b?Promise.resolve():Promise.reject()))}
function qm(){return kf("application_server_key").then(a=>sm().then(b=>a===b?Promise.resolve():Promise.reject()))}
function tm(){var a=Notification.permission;if($l[a])return $l[a]}
function cm(){P("RegistrationTimestamp",0);Promise.all([rm(),um(),vm(),sm()]).then(([a,b,c,d])=>{b=b?df(b):null;c=c?df(c):null;d=d?Za(new Uint8Array(d),4):null;wm(a,b,c,d)}).catch(()=>{wm()})}
function wm(a=null,b=null,c=null,d=null){jf().then(e=>{e&&(P("Endpoint",a),P("P256dhKey",b),P("AuthKey",c),P("application_server_key",d),P("Permission",Notification.permission),Promise.all([kf("DeviceId"),kf("NotificationsDisabled")]).then(([f,g])=>{if(f!=null)var h=f;else{f=[];var k;h=h||Ge.length;for(k=0;k<256;k++)f[k]=Ge[0|Math.random()*h];h=f.join("")}xm(h,a!=null?a:void 0,b!=null?b:void 0,c!=null?c:void 0,d!=null?d:void 0,g!=null?g:void 0)}))})}
function xm(a,b,c,d,e,f){r(function*(){const g={notificationRegistration:{chromeRegistration:{deviceId:a,pushParams:{applicationServerKey:e,authKey:d,p256dhKey:c,browserEndpoint:b},notificationsDisabledInApp:f,permission:tm()}}},h=of(cf);return hm().then(k=>ul(k,g,h).then(()=>{P("DeviceId",a);P("RegistrationTimestamp",Date.now());P("TimestampLowerBound",Date.now())},l=>{xl(l)}))})}
function rm(){return self.registration.pushManager.getSubscription().then(a=>a?Promise.resolve(a.endpoint):Promise.resolve(null))}
function um(){return self.registration.pushManager.getSubscription().then(a=>a&&a.getKey?Promise.resolve(a.getKey("p256dh")):Promise.resolve(null))}
function vm(){return self.registration.pushManager.getSubscription().then(a=>a&&a.getKey?Promise.resolve(a.getKey("auth")):Promise.resolve(null))}
function sm(){return self.registration.pushManager.getSubscription().then(a=>a?Promise.resolve(a.options.applicationServerKey):Promise.resolve(null))}
function hm(){return r(function*(){try{return yield pk(!0),wl()}catch(a){return yield xl(a),Promise.reject(a)}})}
;let ym=self.location.origin+"/";function rk(a){let b=typeof ServiceWorkerGlobalScope!=="undefined"&&self instanceof ServiceWorkerGlobalScope?ze.registration.scope:ym;b.endsWith("/")&&(b=b.slice(0,-1));return a==="/"?b:b+a}
;let zm=void 0;function Am(a){return r(function*(){zm||(zm=yield a.open("yt-appshell-assets"));return zm})}
function Bm(a,b){return r(function*(){const c=yield Am(a),d=b.map(e=>Cm(c,e));
return Promise.all(d)})}
function Dm(a,b){return r(function*(){let c;try{c=yield a.match(b,{cacheName:"yt-appshell-assets"})}catch(d){}return c})}
function Em(a,b){return r(function*(){const c=yield Am(a),d=(yield c.keys()).filter(e=>!b.includes(e.url)).map(e=>c.delete(e));
return Promise.all(d)})}
function Fm(a,b,c){return r(function*(){yield(yield Am(a)).put(b,c)})}
function Gm(a,b){r(function*(){yield(yield Am(a)).delete(b)})}
function Cm(a,b){return r(function*(){return(yield a.match(b))?Promise.resolve():a.add(b)})}
;var Hm=Gh("yt-serviceworker-metadata",{M:{auth:{L:1},["resource-manifest-assets"]:{L:2}},shared:!0,upgrade(a,b){b(1)&&Vg(a,"resource-manifest-assets");b(2)&&Vg(a,"auth")},version:2});let Im=null;function Jm(a){return nh(Hm(),a)}
function Km(){return r(function*(){const a=yield xh();if(a)return Lm.instance||(Lm.instance=new Lm(a)),Lm.instance})}
function Mm(a,b){return r(function*(){yield X(yield Jm(a.token),["resource-manifest-assets"],"readwrite",c=>{const d=c.objectStore("resource-manifest-assets"),e=Date.now();return V(d.h.put(b,e)).then(()=>{Im=e;let f=!0;return $g(d,{query:IDBKeyRange.bound(0,Date.now()),direction:"prev"},g=>f?(f=!1,ih(g)):d.delete(g.getKey()).then(()=>ch(g)))})})})}
function Nm(a,b){return r(function*(){let c=!1,d=0;yield X(yield Jm(a.token),["resource-manifest-assets"],"readonly",e=>$g(e.objectStore("resource-manifest-assets"),{query:IDBKeyRange.bound(0,Date.now()),direction:"prev"},f=>{if(f.cursor.value.includes(b))c=!0;else return d+=1,ch(f)}));
return c?d:-1})}
function Om(a){return r(function*(){Im||(yield X(yield Jm(a.token),["resource-manifest-assets"],"readonly",b=>$g(b.objectStore("resource-manifest-assets"),{query:IDBKeyRange.bound(0,Date.now()),direction:"prev"},c=>{Im=c.getKey()})));
return Im})}
var Lm=class{constructor(a){this.token=a}};function Pm(){return r(function*(){const a=yield xh();if(a)return Qm.instance||(Qm.instance=new Qm(a)),Qm.instance})}
function Rm(a,b){return r(function*(){yield Xg(yield Jm(a.token),"auth",b,"shell_identifier_key")})}
function Sm(a){return r(function*(){return(yield(yield Jm(a.token)).get("auth","shell_identifier_key"))||""})}
function Tm(a){return r(function*(){yield(yield Jm(a.token)).clear("auth")})}
var Qm=class{constructor(a){this.token=a}};function Um(){r(function*(){const a=yield Pm();a&&(yield Tm(a))})}
;var Vm=class extends L{constructor(a){super(a)}hasUrl(){return Xc(this,1)!=null}};function Wm(a){const b=(C?a[D]:a.o)[z]|0;return Uc(a,b,Vm,1,void 0===Jb?2:4,!1,!(2&b))}
var Xm=function(a,b){return(c,d)=>{c=jd(c,void 0,void 0,d);try{const f=new a,g=C?f[D]:f.o;Ed(b)(g,c);var e=f}finally{nd(c)}return e}}(class extends L{constructor(a){super(a)}},[0,
Id,[0,Hd]]);function Ym(a){return r(function*(){const b=a.headers.get("X-Resource-Manifest");return b?Promise.resolve(Zm(b)):Promise.reject(Error("No resource manifest header"))})}
function Zm(a){return Wm(Xm(decodeURIComponent(a))).reduce((b,c)=>{(c=Yc(c,1))&&b.push(c);return b},[])}
;function $m(a){return r(function*(){const b=yield pk();if(b&&Xc(b,3)!=null){var c=yield Pm();c&&(c=yield Sm(c),Xc(b,3)!==c&&(Gm(a.caches,a.I),Um()))}})}
function an(a){return r(function*(){let b,c;try{c=yield bn(a.h),b=yield Ym(c),yield Bm(a.caches,b)}catch(d){return Promise.reject(d)}try{yield cn(),yield Fm(a.caches,a.I,c)}catch(d){return Promise.reject(d)}if(b)try{yield dn(a,b,a.I)}catch(d){}return Promise.resolve()})}
function bn(a){return r(function*(){try{return yield t.fetch(new Request(a))}catch(b){return Promise.reject(b)}})}
function cn(){return r(function*(){var a=yield pk();let b;a&&Xc(a,3)!=null&&(b=Yc(a,3));return b?(a=yield Pm())?Promise.resolve(Rm(a,b)):Promise.reject(Error("Could not get AuthMonitor instance")):Promise.reject(Error("Could not get datasync ID"))})}
function dn(a,b,c){return r(function*(){const d=yield Km();if(d)try{yield Mm(d,b)}catch(e){yield xl(e)}b.push(c);try{yield Em(a.caches,b)}catch(e){yield xl(e)}return Promise.resolve()})}
function en(a,b){return r(function*(){return Dm(a.caches,b)})}
function fn(a){return r(function*(){return Dm(a.caches,a.I)})}
var gn=class{constructor(){var a=self.caches;let b;b=rk("/app_shell");S("service_worker_forward_exp_params")&&(b+=self.location.search);var c=rk("/app_shell_home");this.caches=a;this.h=b;this.I=c}initialize(){const a=this;return r(function*(){yield $m(a);return an(a)})}};var hn=class{constructor(){const a=this;this.stream=new ReadableStream({start(b){a.close=()=>void b.close();
a.h=c=>{const d=c.getReader();return d.read().then(function h({done:f,value:g}){if(f)return Promise.resolve();b.enqueue(g);return d.read().then(h)})};
a.i=()=>{const c=(new TextEncoder).encode("<script>if (window.fetchInitialData) { window.fetchInitialData(); } else { window.getInitialData = undefined; }\x3c/script>");b.enqueue(c)}}})}};function jn(a,b){return r(function*(){const c=b.request,d=yield en(a.h,c.url);if(d)return a.i&&Al({appShellAssetLoadReport:{assetPath:c.url,cacheHit:!0},timestamp:W()}),d;kn(a,c);return ln(b)})}
function mn(a,b){return r(function*(){const c=yield nn(b);if(c.response&&(c.response.ok||c.response.type==="opaqueredirect"||c.response.status===429||c.response.status===303||c.response.status>=300&&c.response.status<400))return c.response;const d=yield fn(a.h);if(d)return on(a),pn(d,b);qn(a);return c.response?c.response:Promise.reject(c.error)})}
function rn(a,b){b=new URL(b);if(!a.config.ra.includes(b.pathname))return!1;if(!b.search)return!0;b=new URLSearchParams(b.search);for(const c of a.config.ta){if(c.key==="*")return!0;a=b.get(c.key);if(c.value===void 0||a===c.value)if(b.delete(c.key),!b.toString())return!0}return!1}
function sn(a,b){return r(function*(){const c=yield fn(a.h);if(!c)return qn(a),ln(b);on(a);var d;a:{if(c.headers&&(d=c.headers.get("date"))&&(d=Date.parse(d),!isNaN(d))){d=Math.round(W()-d);break a}d=-1}if(!(d>-1&&d/864E5>=7))return pn(c,b);d=yield nn(b);return d.response&&d.response.ok?d.response:pn(c,b)})}
function ln(a){return Promise.resolve(a.preloadResponse).then(b=>b&&!tn(b)?b:t.fetch(a.request))}
function kn(a,b){if(a.i){var c={assetPath:b.url,cacheHit:!1};Km().then(d=>{if(d){var e=Om(d).then(f=>{f&&(c.currentAppBundleTimestampSec=String(Math.floor(f/1E3)))});
d=Nm(d,b.url).then(f=>{c.appBundleVersionDiffCount=f});
Promise.all([e,d]).catch(f=>{xl(f)}).finally(()=>{Al({appShellAssetLoadReport:c,
timestamp:W()})})}else Al({appShellAssetLoadReport:c,
timestamp:W()})})}}
function on(a){a.i&&Al({appShellAssetLoadReport:{assetPath:a.h.I,cacheHit:!0},timestamp:W()})}
function qn(a){a.i&&Al({appShellAssetLoadReport:{assetPath:a.h.I,cacheHit:!1},timestamp:W()})}
function pn(a,b){if(!S("sw_nav_preload_pbj"))return a;const c=new hn,d=c.h(a.body);Promise.resolve(b.preloadResponse).then(e=>{if(!e||!tn(e))throw Error("no pbj preload response available");d.then(()=>c.h(e.body)).then(()=>void c.close())}).catch(()=>{d.then(()=>{c.i();
c.close()})});
return new Response(c.stream,{status:a.status,statusText:a.statusText,headers:a.headers})}
function nn(a){return r(function*(){try{return{response:yield ln(a)}}catch(b){return{error:b}}})}
function tn(a){return a.headers.get("x-navigation-preload-response-type")==="pbj"}
var Cn=class{constructor(){var a=un;var b={ya:vn,Ja:wn([xn,/\/signin/,/\/logout/]),ra:["/","/feed/downloads"],ta:yn([{key:"feature",value:"ytca"}]),sa:zn(S("kevlar_sw_app_wide_fallback")?An:Bn)};this.h=a;this.config=b;a=T("app_shell_asset_log_fraction");this.i=!0;a&&(this.i=Math.random()<a)}};const Dn=/^\/$/,Bn=[Dn,/^\/feed\/downloads$/],An=[Dn,/^\/feed\/\w*/,/^\/results$/,/^\/playlist$/,/^\/watch$/,/^\/channel\/\w*/];function zn(a){return new RegExp(a.map(b=>b.source).join("|"))}
const En=/^https:\/\/([\w-]*\.)*youtube\.com.*/;function wn(a){a=zn(a);return new RegExp(`${En.source}(${a.source})`)}
const Fn=zn([/\.css$/,/\.js$/,/\.ico$/,/\/ytmweb\/_\/js\//,/\/ytmweb\/_\/ss\//,/\/kabuki\/_\/js\//,/\/kabuki\/_\/ss\//,/\/ytmainappweb\/_\/js\//,/\/ytmainappweb\/_\/ss\//]),vn=new RegExp(`${En.source}(${Fn.source})`),xn=/purge_shell=1/;function yn(a=[]){const b=[];for(const c of Lf)b.push({key:c});for(const c of a)b.push(c);return b}
wn([xn]);yn();var Hn=class{constructor(){var a=un,b=Gn,c=self;if(t.URLPattern){var d=[];S("service_worker_static_routing_exclude_embed")&&d.push({condition:{urlPattern:new URLPattern({pathname:"/embed*"})},source:"network"});S("service_worker_static_routing_exclude_innertube")&&d.push({condition:{urlPattern:new URLPattern({pathname:"/youtubei/v1/*"})},source:"network"})}else d=[];this.h=c;this.i=a;this.s=b;this.C=ef;this.j=d}init(){this.h.oninstall=this.v.bind(this);this.h.onactivate=this.l.bind(this);this.h.onfetch=
this.m.bind(this);this.h.onmessage=this.B.bind(this)}v(a){this.h.skipWaiting();if(S("service_worker_static_routing_registration")&&this.j.length>0&&a.addRoutes)try{a.addRoutes(this.j)}catch(c){}const b=this.i.initialize().catch(c=>{xl(c);return Promise.resolve()});
a.waitUntil(b)}l(a){const b=[this.h.clients.claim()],c=this.h.registration;c.navigationPreload&&(b.push(c.navigationPreload.enable()),S("sw_nav_preload_pbj")&&b.push(c.navigationPreload.setHeaderValue("pbj")));a.waitUntil(Promise.all(b))}m(a){const b=this;return r(function*(){var c=b.s,d=!!b.h.registration.navigationPreload;const e=a.request;if(c.config.Ja.test(e.url))qk.instance&&(delete qk.instance.h,t.__SAPISID=void 0,Q("VISITOR_DATA",void 0),Q("SESSION_INDEX",void 0),Q("DELEGATED_SESSION_ID",
void 0),Q("USER_SESSION_ID",void 0),Q("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT",void 0)),d=a.respondWith,c=c.h,Gm(c.caches,c.I),Um(),c=ln(a),d.call(a,c);else if(c.config.ya.test(e.url))a.respondWith(jn(c,a));else if(e.mode==="navigate"){const f=new URL(e.url);c.config.sa.test(f.pathname)?a.respondWith(mn(c,a)):rn(c,e.url)?a.respondWith(sn(c,a)):d&&a.respondWith(ln(a))}})}B(a){const b=a.data;
this.C.includes(b.type)?bm(a):b.type==="refresh_shell"&&an(this.i).catch(c=>{xl(c)})}};function In(){let a=v("ytglobal.storage_");a||(a=new Jn,w("ytglobal.storage_",a));return a}
var Jn=class{estimate(){return r(function*(){const a=navigator;let b;if((b=a.storage)==null?0:b.estimate)return a.storage.estimate();let c;if((c=a.webkitTemporaryStorage)==null?0:c.queryUsageAndQuota)return Kn()})}};
function Kn(){const a=navigator;return new Promise((b,c)=>{let d;(d=a.webkitTemporaryStorage)!=null&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota((e,f)=>{b({usage:e,quota:f})},e=>{c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
w("ytglobal.storageClass_",Jn);function Ln(a,b){In().estimate().then(c=>{c=Object.assign({},b,{isSw:self.document===void 0,isIframe:self!==self.top,deviceStorageUsageMbytes:Mn(c==null?void 0:c.usage),deviceStorageQuotaMbytes:Mn(c==null?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
class Nn{constructor(){var a=On;this.handleError=Pn;this.h=a;this.i=!1;self.document===void 0||self.addEventListener("beforeunload",()=>{this.i=!0});
this.j=Math.random()<=.2}S(a,b){switch(a){case "IDB_DATA_CORRUPTED":S("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":S("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":Ln(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=.1&&this.h("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign({},
b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}}}function Mn(a){return typeof a==="undefined"?"-1":String(Math.ceil(a/1048576))}
;Zf(Wf(),{F:[{Ha:/Failed to fetch/,weight:500}],D:[]});({handleError:Pn=ik,S:On=Y}={handleError:zl,S:function(a,b){return r(function*(){yield yl();Y(a,b)})}});
var On,Pn;for(tg=new Nn;sg.length>0;){const a=sg.shift();switch(a.type){case "ERROR":tg.handleError(a.payload);break;case "EVENT":tg.S(a.eventType,a.payload)}}qk.instance=new qk;self.onnotificationclick=function(a){a.notification.close();const b=a.notification.data;b.isDismissed=!1;const c=self.clients.matchAll({type:"window",includeUncontrolled:!0});c.then(d=>{a:{var e=b.nav;for(const f of d)if(f.url===e){f.focus();break a}self.clients.openWindow(e)}});
a.waitUntil(c);a.waitUntil(km(b.clickEndpoint))};
self.onnotificationclose=function(a){var b=a.notification.data,c;if(b==null?0:(c=b.loggingDirectives)==null?0:c.trackingParams){a=Ak(b.loggingDirectives.trackingParams);c={screenLayer:8,visualElement:a};if(b.isDismissed){b=Ck(74726);const d=Ol();Sl(d,b,a,8);Ml({screenLayer:8,visualElement:b});(a=Z(8))&&ml(d.client,a,b)}Nl(c)}};
self.onpush=function(a){a.waitUntil(kf("NotificationsDisabled").then(b=>{if(b)return Promise.resolve();if(a.data&&a.data.text().length)try{return gm(a.data.json())}catch(c){return Promise.resolve(c.message)}return Promise.resolve()}));
a.waitUntil(em())};
self.onpushsubscriptionchange=function(){cm()};
const un=new gn,Gn=new Cn;(new Hn).init();
