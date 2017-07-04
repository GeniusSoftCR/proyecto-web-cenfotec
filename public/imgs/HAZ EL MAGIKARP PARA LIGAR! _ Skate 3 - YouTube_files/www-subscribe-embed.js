(function(){for(var l,aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ba="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ca="undefined"!=typeof Reflect&&Reflect.construct||function(a,b,c){void 0===c&&(c=a);
c=ba(c.prototype||Object.prototype);return Function.prototype.apply.call(a,c,b)||c},da="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,ea=["Reflect",
"construct"],fa=0;fa<ea.length-1;fa++){var ha=ea[fa];ha in da||(da[ha]={});da=da[ha]}var ia=ea[ea.length-1],ja=da[ia],ka;ka=ja||ca;ka!=ja&&null!=ka&&aa(da,ia,{configurable:!0,writable:!0,value:ka});var m=this;function ma(a){return void 0!==a}
function p(a){return"string"==typeof a}
function na(a){return"number"==typeof a}
function q(a){a=a.split(".");for(var b=m,c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b}
function oa(){}
function pa(a){a.ea=void 0;a.A=function(){return a.ea?a.ea:a.ea=new a}}
function qa(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function ra(a){var b=qa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function sa(a){return"function"==qa(a)}
function ta(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function ua(a){return a[va]||(a[va]=++wa)}
var va="closure_uid_"+(1E9*Math.random()>>>0),wa=0;function xa(a,b,c){return a.call.apply(a.bind,arguments)}
function ya(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function r(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?r=xa:r=ya;return r.apply(null,arguments)}
function za(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var Aa=Date.now||function(){return+new Date};
function t(a,b){var c=a.split("."),d=m;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&ma(b)?d[e]=b:d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}}
function v(a,b){function c(){}
c.prototype=b.prototype;a.D=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ub=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var Ba=window,Ca=document,Da=Ba.location;function Ea(){}
var Fa=/\[native code\]/;function x(a,b,c){return a[b]=a[b]||c}
function Ga(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}
function Ha(){var a;if((a=Object.create)&&Fa.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var Ia=x(Ba,"gapi",{});var z;z=x(Ba,"___jsl",Ha());x(z,"I",0);x(z,"hel",10);function Ja(){var a=Da.href;if(z.dpo)var b=z.h;else{b=z.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}
function Ka(a){var b=x(z,"PQ",[]);z.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}
function La(a){return x(x(z,"H",Ha()),a,Ha())}
;var Ma=x(z,"perf",Ha());x(Ma,"g",Ha());var Na=x(Ma,"i",Ha());x(Ma,"r",[]);Ha();Ha();function Oa(a,b,c){b&&0<b.length&&(b=Pa(b),c&&0<c.length&&(b+="___"+Pa(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=x(Na,"_p",Ha()),x(b,c,Ha())[a]=(new Date).getTime(),b=Ma.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function Pa(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/\,/g,"_")}
;var Qa=Ha(),Ra=[];function Sa(a){throw Error("Bad hint"+(a?": "+a:""));}
Ra.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?z[b]=x(z,b,[]).concat(c):x(z,b,c)}if(b=a.u)a=x(z,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);
var Ta=/^(\/[a-zA-Z0-9_\-]+)+$/,Ua=[/\/amp\//,/\/amp$/,/^\/amp$/],Va=/^[a-zA-Z0-9\-_\.,!]+$/,Wa=/^gapi\.loaded_[0-9]+$/,Xa=/^[a-zA-Z0-9,._-]+$/;function Ya(a,b,c,d){var e=a.split(";"),f=e.shift(),g=Qa[f],h=null;g?h=g(e,b,c,d):Sa("no hint processor for: "+f);h||Sa("failed to generate load url");b=h;c=b.match(Za);(d=b.match($a))&&1===d.length&&ab.test(b)&&c&&1===c.length||Sa("failed sanity: "+a);return h}
function bb(a,b,c,d){function e(a){return encodeURIComponent(a).replace(/%2C/g,",")}
a=cb(a);Wa.test(c)||Sa("invalid_callback");b=db(b);d=d&&d.length?db(d):null;return[encodeURIComponent(a.Cb).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.na?"/am="+e(a.na):"",a.Ha?"/rs="+e(a.Ha):"",a.Ra?"/t="+e(a.Ra):"","/cb=",e(c)].join("")}
function cb(a){"/"!==a.charAt(0)&&Sa("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))Sa("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),g=decodeURIComponent(f[0]),h=decodeURIComponent(f[1]);2==f.length&&g&&h&&(a[g]=a[g]||h)}b="/"+c.join("/");Ta.test(b)||Sa("invalid_prefix");c=0;for(d=Ua.length;c<d;++c)Ua[c].test(b)&&Sa("invalid_prefix");c=eb(a,
"k",!0);d=eb(a,"am");e=eb(a,"rs");a=eb(a,"t");return{Cb:b,version:c,na:d,Ha:e,Ra:a}}
function db(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");Xa.test(e)&&b.push(e)}return b.join(",")}
function eb(a,b,c){a=a[b];!a&&c&&Sa("missing: "+b);if(a){if(Va.test(a))return a;Sa("invalid: "+b)}return null}
var ab=/^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,$a=/\/cb=/g,Za=/\/\//g;function fb(){var a=Ja();if(!a)throw Error("Bad hint");return a}
Qa.m=function(a,b,c,d){(a=a[0])||Sa("missing_hint");return"https://apis.google.com"+bb(a,b,c,d)};
var gb=decodeURI("%73cript"),hb=/^[-+_0-9\/A-Za-z]+={0,2}$/;function ib(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d],f;if(f=e){a:{for(f=0;f<b.length;f++)if(b[f]===e)break a;f=-1}f=0>f}f&&c.push(e)}return c}
function jb(){var a=z.nonce;if(void 0!==a)return a&&a===String(a)&&a.match(hb)?a:z.nonce=null;var b=x(z,"us",[]);if(!b||!b.length)return z.nonce=null;for(var c=Ca.getElementsByTagName(gb),d=0,e=c.length;d<e;++d){var f=c[d];if(f.src&&(a=String(f.nonce||f.getAttribute("nonce")||"")||null)){for(var g=0,h=b.length;g<h&&b[g]!==f.src;++g);if(g!==h&&a&&a===String(a)&&a.match(hb))return z.nonce=a}}return null}
function kb(a){if("loading"!=Ca.readyState)lb(a);else{var b=jb(),c="";null!==b&&(c=' nonce="'+b+'"');Ca.write("<"+gb+' src="'+encodeURI(a)+'"'+c+"></"+gb+">")}}
function lb(a){var b=Ca.createElement(gb);b.setAttribute("src",a);a=jb();null!==a&&b.setAttribute("nonce",a);b.async="true";(a=Ca.getElementsByTagName(gb)[0])?a.parentNode.insertBefore(b,a):(Ca.head||Ca.body||Ca.documentElement).appendChild(b)}
function mb(a,b){var c=b&&b._c;if(c)for(var d=0;d<Ra.length;d++){var e=Ra[d][0],f=Ra[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}
function nb(a,b,c){ob(function(){var c=b===Ja()?x(Ia,"_",Ha()):Ha();c=x(La(b),"_",c);a(c)},c)}
function pb(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);mb(a,c);var d=a?a.split(":"):[],e=c.h||fb(),f=x(z,"ah",Ha());if(f["::"]&&d.length){for(var g=[],h=null;h=d.shift();){var k=h.split("."),k=f[h]||f[k[1]&&"ns:"+k[0]||""]||e,n=g.length&&g[g.length-1]||null,w=n;n&&n.hint==k||(w={hint:k,features:[]},g.push(w));w.features.push(h)}var y=g.length;if(1<y){var Q=c.callback;Q&&(c.callback=function(){0==--y&&Q()})}for(;d=g.shift();)qb(d.features,c,d.hint)}else qb(d||[],c,e)}
function qb(a,b,c){function d(a,b){if(y)return 0;Ba.clearTimeout(w);Q.push.apply(Q,u);var d=((Ia||{}).config||{}).update;d?d(f):f&&x(z,"cu",[]).push(f);if(b){Oa("me0",a,G);try{nb(b,c,n)}finally{Oa("me1",a,G)}}return 1}
a=Ga(a)||[];var e=b.callback,f=b.config,g=b.timeout,h=b.ontimeout,k=b.onerror,n=void 0;"function"==typeof k&&(n=k);var w=null,y=!1;if(g&&!h||!g&&h)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var k=x(La(c),"r",[]).sort(),Q=x(La(c),"L",[]).sort(),G=[].concat(k);0<g&&(w=Ba.setTimeout(function(){y=!0;h()},g));
var u=ib(a,Q);if(u.length){var u=ib(a,k),la=x(z,"CP",[]),S=la.length;la[S]=function(a){function b(){var a=la[S+1];a&&a()}
function c(b){la[S]=null;d(u,a)&&Ka(function(){e&&e();b()})}
if(!a)return 0;Oa("ml1",u,G);0<S&&la[S-1]?la[S]=function(){c(b)}:c(b)};
if(u.length){var nc="loaded_"+z.I++;Ia[nc]=function(a){la[S](a);Ia[nc]=null};
a=Ya(c,u,"gapi."+nc,k);k.push.apply(k,u);Oa("ml0",u,G);b.sync||Ba.___gapisync?kb(a):lb(a)}else la[S](Ea)}else d(u)&&e&&e()}
function ob(a,b){if(z.hee&&0<z.hel)try{return a()}catch(c){b&&b(c),z.hel--,pb("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
Ia.load=function(a,b){return ob(function(){return pb(a,b)})};function rb(a){if(Error.captureStackTrace)Error.captureStackTrace(this,rb);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
v(rb,Error);rb.prototype.name="CustomError";var sb;var tb=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},ub=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};
function vb(a){a=ma(void 0)?a.toFixed(void 0):String(a);var b=a.indexOf(".");-1==b&&(b=a.length);return ub("0",Math.max(0,2-b))+a}
function wb(a,b){for(var c=0,d=tb(String(a)).split("."),e=tb(String(b)).split("."),f=Math.max(d.length,e.length),g=0;0==c&&g<f;g++){var h=d[g]||"",k=e[g]||"";do{h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];if(0==h[0].length&&0==k[0].length)break;c=xb(0==h[1].length?0:parseInt(h[1],10),0==k[1].length?0:parseInt(k[1],10))||xb(0==h[2].length,0==k[2].length)||xb(h[2],k[2]);h=h[3];k=k[3]}while(0==c)}return c}
function xb(a,b){return a<b?-1:a>b?1:0}
function yb(a){return String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()})}
function zb(a){var b=p(void 0)?"undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08"):"\\s";return a.replace(new RegExp("(^"+(b?"|["+b+"]+":"")+")([a-z])","g"),function(a,b,e){return b+e.toUpperCase()})}
;var Ab=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(p(a))return p(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},A=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Bb=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=p(a)?a.split(""):a,h=0;h<d;h++)if(h in g){var k=g[h];
b.call(c,k,h,a)&&(e[f++]=k)}return e},Cb=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=p(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));
return e},Db=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1};
function Eb(a,b){a:{var c=a.length;for(var d=p(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:p(a)?a.charAt(c):a[c]}
function Fb(a,b){return 0<=Ab(a,b)}
function Gb(a){return Array.prototype.concat.apply([],arguments)}
function Hb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Ib(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(ra(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
function Jb(a,b,c,d){return Array.prototype.splice.apply(a,Kb(arguments,1))}
function Kb(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
function Lb(a){for(var b=[],c=0;c<arguments.length;c++){var d=arguments[c];if("array"==qa(d))for(var e=0;e<d.length;e+=8192)for(var f=Lb.apply(null,Kb(d,e,e+8192)),g=0;g<f.length;g++)b.push(f[g]);else b.push(d)}return b}
;function Mb(a,b,c){this.o=c;this.i=a;this.v=b;this.f=0;this.b=null}
Mb.prototype.get=function(){if(0<this.f){this.f--;var a=this.b;this.b=a.next;a.next=null}else a=this.i();return a};
function Nb(a,b){a.v(b);a.f<a.o&&(a.f++,b.next=a.b,a.b=b)}
;var Ob;a:{var Pb=m.navigator;if(Pb){var Qb=Pb.userAgent;if(Qb){Ob=Qb;break a}}Ob=""}function B(a){return-1!=Ob.indexOf(a)}
;function Rb(a,b,c){for(var d in a)b.call(c,a[d],d,a)}
function Sb(a,b){var c={},d;for(d in a)c[d]=b.call(void 0,a[d],d,a);return c}
function Tb(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}
function Ub(a){var b=Vb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Wb(a){for(var b in a)return!1;return!0}
var Xb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Yb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Xb.length;f++)c=Xb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function Zb(){return B("Safari")&&!($b()||B("Coast")||B("Opera")||B("Edge")||B("Silk")||B("Android"))}
function $b(){return(B("Chrome")||B("CriOS"))&&!B("Edge")}
;function ac(a){m.setTimeout(function(){throw a;},0)}
var bc;
function cc(){var a=m.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!B("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=r(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!B("Trident")&&!B("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(ma(c.next)){c=c.next;var a=c.pa;c.pa=null;a()}};
return function(a){d.next={pa:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){m.setTimeout(a,0)}}
;function dc(){this.f=this.b=null}
var fc=new Mb(function(){return new ec},function(a){a.reset()},100);
dc.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};
function ec(){this.next=this.scope=this.b=null}
ec.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
ec.prototype.reset=function(){this.next=this.scope=this.b=null};function gc(a,b){hc||ic();jc||(hc(),jc=!0);var c=kc,d=fc.get();d.set(a,b);c.f?c.f.next=d:c.b=d;c.f=d}
var hc;function ic(){if(-1!=String(m.Promise).indexOf("[native code]")){var a=m.Promise.resolve(void 0);hc=function(){a.then(lc)}}else hc=function(){var a=lc;
!sa(m.setImmediate)||m.Window&&m.Window.prototype&&!B("Edge")&&m.Window.prototype.setImmediate==m.setImmediate?(bc||(bc=cc()),bc(a)):m.setImmediate(a)}}
var jc=!1,kc=new dc;function lc(){for(var a;a=kc.remove();){try{a.b.call(a.scope)}catch(b){ac(b)}Nb(fc,a)}jc=!1}
;function mc(){return B("iPhone")&&!B("iPod")&&!B("iPad")}
;function oc(a){oc[" "](a);return a}
oc[" "]=oa;function pc(a,b){var c=qc;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;var rc=B("Opera"),C=B("Trident")||B("MSIE"),sc=B("Edge"),tc=sc||C,uc=B("Gecko")&&!(-1!=Ob.toLowerCase().indexOf("webkit")&&!B("Edge"))&&!(B("Trident")||B("MSIE"))&&!B("Edge"),vc=-1!=Ob.toLowerCase().indexOf("webkit")&&!B("Edge"),wc=B("Windows");function xc(){var a=m.document;return a?a.documentMode:void 0}
var yc;a:{var zc="",Ac=function(){var a=Ob;if(uc)return/rv\:([^\);]+)(\)|;)/.exec(a);if(sc)return/Edge\/([\d\.]+)/.exec(a);if(C)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(vc)return/WebKit\/(\S+)/.exec(a);if(rc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Ac&&(zc=Ac?Ac[1]:"");if(C){var Bc=xc();if(null!=Bc&&Bc>parseFloat(zc)){yc=String(Bc);break a}}yc=zc}var Cc=yc,qc={};function Dc(a){return pc(a,function(){return 0<=wb(Cc,a)})}
var Ec;var Fc=m.document;Ec=Fc&&C?xc()||("CSS1Compat"==Fc.compatMode?parseInt(Cc,10):5):void 0;var Gc=B("Firefox"),Hc=mc()||B("iPod"),Ic=B("iPad"),Jc=B("Android")&&!($b()||B("Firefox")||B("Opera")||B("Silk")),Kc=$b(),Lc=Zb()&&!(mc()||B("iPad")||B("iPod"));function Mc(a,b,c){na(a)?(this.date=Nc(a,b||0,c||1),Oc(this,c||1)):ta(a)?(this.date=Nc(a.getFullYear(),a.getMonth(),a.getDate()),Oc(this,a.getDate())):(this.date=new Date(Aa()),a=this.date.getDate(),this.date.setHours(0),this.date.setMinutes(0),this.date.setSeconds(0),this.date.setMilliseconds(0),Oc(this,a))}
function Nc(a,b,c){b=new Date(a,b,c);0<=a&&100>a&&b.setFullYear(b.getFullYear()-1900);return b}
l=Mc.prototype;l.getFullYear=function(){return this.date.getFullYear()};
l.getMonth=function(){return this.date.getMonth()};
l.getDate=function(){return this.date.getDate()};
l.getTime=function(){return this.date.getTime()};
function Pc(a){a=a.date.getTimezoneOffset();if(0==a)a="Z";else{var b=Math.abs(a)/60,c=Math.floor(b),b=60*(b-c);a=(0<a?"-":"+")+vb(c)+":"+vb(b)}return a}
l.set=function(a){this.date=new Date(a.getFullYear(),a.getMonth(),a.getDate())};
l.Y=function(a,b){return[this.getFullYear(),vb(this.getMonth()+1),vb(this.getDate())].join(a?"-":"")+(b?Pc(this):"")};
l.equals=function(a){return!(!a||this.getFullYear()!=a.getFullYear()||this.getMonth()!=a.getMonth()||this.getDate()!=a.getDate())};
l.toString=function(){return this.Y()};
function Oc(a,b){a.getDate()!=b&&a.date.setUTCHours(a.date.getUTCHours()+(a.getDate()<b?1:-1))}
l.valueOf=function(){return this.date.valueOf()};
function Qc(a,b,c,d,e,f,g){this.date=na(a)?new Date(a,b||0,c||1,d||0,e||0,f||0,g||0):new Date(a&&a.getTime?a.getTime():Aa())}
v(Qc,Mc);Qc.prototype.Y=function(a,b){var c=Mc.prototype.Y.call(this,a);return a?c+" "+vb(this.date.getHours())+":"+vb(this.date.getMinutes())+":"+vb(this.date.getSeconds())+(b?Pc(this):""):c+"T"+vb(this.date.getHours())+vb(this.date.getMinutes())+vb(this.date.getSeconds())+(b?Pc(this):"")};
Qc.prototype.equals=function(a){return this.getTime()==a.getTime()};
Qc.prototype.toString=function(){return this.Y()};function Rc(){this.i=this.i;this.o=this.o}
Rc.prototype.i=!1;Rc.prototype.W=function(){return this.i};
Rc.prototype.dispose=function(){this.i||(this.i=!0,this.ba())};
Rc.prototype.ba=function(){if(this.o)for(;this.o.length;)this.o.shift()()};
function Sc(a){a&&"function"==typeof a.dispose&&a.dispose()}
;var Tc=!uc&&!C||C&&9<=Number(Ec)||uc&&Dc("1.9.1"),Uc=C&&!Dc("9");function Vc(a){if(a.classList)return a.classList;a=a.className;return p(a)&&a.match(/\S+/g)||[]}
function D(a,b){return a.classList?a.classList.contains(b):Fb(Vc(a),b)}
function E(a,b){a.classList?a.classList.add(b):D(a,b)||(a.className+=0<a.className.length?" "+b:b)}
function Wc(a,b){if(a.classList)A(b,function(b){E(a,b)});
else{var c={};A(Vc(a),function(a){c[a]=!0});
A(b,function(a){c[a]=!0});
a.className="";for(var d in c)a.className+=0<a.className.length?" "+d:d}}
function F(a,b){a.classList?a.classList.remove(b):D(a,b)&&(a.className=Bb(Vc(a),function(a){return a!=b}).join(" "))}
function Xc(a,b){a.classList?A(b,function(b){F(a,b)}):a.className=Bb(Vc(a),function(a){return!Fb(b,a)}).join(" ")}
function Yc(a,b,c){c?E(a,b):F(a,b)}
function Zc(a,b,c){D(a,b)&&(F(a,b),E(a,c))}
function $c(a,b){var c=!D(a,b);Yc(a,b,c)}
;var ad=!C&&!Zb();function bd(a,b){return ad&&a.dataset?b in a.dataset?a.dataset[b]:null:a.getAttribute("data-"+String(b).replace(/([A-Z])/g,"-$1").toLowerCase())}
;function cd(){this.b="";this.f=dd}
cd.prototype.da=!0;cd.prototype.ca=function(){return this.b};
var ed=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,dd={};function fd(a){var b=new cd;b.b=a;return b}
fd("about:blank");function gd(){this.b="";this.f=hd}
gd.prototype.da=!0;gd.prototype.ca=function(){return this.b};
function id(a){if(a instanceof gd&&a.constructor===gd&&a.f===hd)return a.b;qa(a);return"type_error:SafeHtml"}
var hd={};function jd(a){var b=new gd;b.b=a;return b}
jd("<!DOCTYPE html>");jd("");jd("<br>");function H(a,b){this.j=ma(a)?a:0;this.l=ma(b)?b:0}
H.prototype.equals=function(a){return a instanceof H&&(this==a?!0:this&&a?this.j==a.j&&this.l==a.l:!1)};
function kd(a,b){return new H(a.j-b.j,a.l-b.l)}
H.prototype.ceil=function(){this.j=Math.ceil(this.j);this.l=Math.ceil(this.l);return this};
H.prototype.floor=function(){this.j=Math.floor(this.j);this.l=Math.floor(this.l);return this};
H.prototype.round=function(){this.j=Math.round(this.j);this.l=Math.round(this.l);return this};function ld(a,b){this.width=a;this.height=b}
l=ld.prototype;l.ib=function(){return this.width*this.height};
l.aspectRatio=function(){return this.width/this.height};
l.isEmpty=function(){return!this.ib()};
l.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
l.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
l.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function md(a){return a?new nd(od(a)):sb||(sb=new nd)}
function I(a){return p(a)?document.getElementById(a):a}
function pd(a,b){var c=b||document;return c.querySelectorAll&&c.querySelector?c.querySelectorAll("."+a):qd(document,"*",a,b)}
function J(a,b){var c=b||document;if(c.getElementsByClassName)c=c.getElementsByClassName(a)[0];else var c=document,d=b||c,c=d.querySelectorAll&&d.querySelector&&a?d.querySelector(""+(a?"."+a:"")):qd(c,"*",a,b)[0]||null;return c||null}
function qd(a,b,c,d){a=d||a;var e=b&&"*"!=b?String(b).toUpperCase():"";if(a.querySelectorAll&&a.querySelector&&(e||c))return a.querySelectorAll(e+(c?"."+c:""));if(c&&a.getElementsByClassName){d=a.getElementsByClassName(c);if(e){a={};for(var f=b=0,g;g=d[f];f++)e==g.nodeName&&(a[b++]=g);a.length=b;return a}return d}d=a.getElementsByTagName(e||"*");if(c){a={};for(f=b=0;g=d[f];f++)e=g.className,"function"==typeof e.split&&Fb(e.split(/\s+/),c)&&(a[b++]=g);a.length=b;return a}return d}
function rd(a,b){Rb(b,function(b,d){b&&b.da&&(b=b.ca());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:sd.hasOwnProperty(d)?a.setAttribute(sd[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}
var sd={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function td(a){a=a.document;a=ud(a)?a.documentElement:a.body;return new ld(a.clientWidth,a.clientHeight)}
function vd(a){var b=wd(a);a=xd(a);return C&&Dc("10")&&a.pageYOffset!=b.scrollTop?new H(b.scrollLeft,b.scrollTop):new H(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)}
function wd(a){return a.scrollingElement?a.scrollingElement:!vc&&ud(a)?a.documentElement:a.body||a.documentElement}
function xd(a){return a.parentWindow||a.defaultView}
function ud(a){return"CSS1Compat"==a.compatMode}
function yd(a){a&&a.parentNode&&a.parentNode.removeChild(a)}
function zd(a){return Tc&&void 0!=a.children?a.children:Bb(a.childNodes,function(a){return 1==a.nodeType})}
function Ad(a){return ta(a)&&1==a.nodeType}
function Bd(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function od(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function Cd(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=String(b);else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=String(b)}else{for(var c;c=a.firstChild;)a.removeChild(c);a.appendChild(od(a).createTextNode(String(b)))}}
function Dd(a,b){var c=[];return Ed(a,b,c,!0)?c[0]:void 0}
function Ed(a,b,c,d){if(null!=a)for(a=a.firstChild;a;){if(b(a)&&(c.push(a),d)||Ed(a,b,c,d))return!0;a=a.nextSibling}return!1}
var Fd={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},Gd={IMG:" ",BR:"\n"};function Hd(a){var b;if((b="A"==a.tagName||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?!a.disabled&&(!Id(a)||Jd(a)):Id(a)&&Jd(a))&&C){var c;!sa(a.getBoundingClientRect)||C&&null==a.parentElement?c={height:a.offsetHeight,width:a.offsetWidth}:c=a.getBoundingClientRect();a=null!=c&&0<c.height&&0<c.width}else a=b;return a}
function Id(a){return C&&!Dc("9")?(a=a.getAttributeNode("tabindex"),null!=a&&a.specified):a.hasAttribute("tabindex")}
function Jd(a){a=a.tabIndex;return na(a)&&0<=a&&32768>a}
function Kd(a){if(Uc&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];Ld(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");Uc||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function Ld(a,b,c){if(!(a.nodeName in Fd))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in Gd)b.push(Gd[a.nodeName]);else for(a=a.firstChild;a;)Ld(a,b,c),a=a.nextSibling}
function Md(a,b,c,d){if(!b&&!c)return null;var e=b?String(b).toUpperCase():null;return Nd(a,function(a){return(!e||a.nodeName==e)&&(!c||p(a.className)&&Fb(a.className.split(/\s+/),c))},!0,d)}
function K(a,b){return Md(a,null,b,void 0)}
function Nd(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null}
function nd(a){this.b=a||m.document||document}
nd.prototype.getElementsByTagName=function(a,b){return(b||this.b).getElementsByTagName(String(a))};
nd.prototype.createElement=function(a){return this.b.createElement(String(a))};
nd.prototype.appendChild=function(a,b){a.appendChild(b)};
nd.prototype.isElement=Ad;var Od="StopIteration"in m?m.StopIteration:{message:"StopIteration",stack:""};function Pd(){}
Pd.prototype.next=function(){throw Od;};
Pd.prototype.T=function(){return this};
function Qd(a){if(a instanceof Pd)return a;if("function"==typeof a.T)return a.T(!1);if(ra(a)){var b=0,c=new Pd;c.next=function(){for(;;){if(b>=a.length)throw Od;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Rd(a,b){if(ra(a))try{A(a,b,void 0)}catch(c){if(c!==Od)throw c;}else{a=Qd(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==Od)throw c;}}}
function Sd(a){if(ra(a))return Hb(a);a=Qd(a);var b=[];Rd(a,function(a){b.push(a)});
return b}
;function Td(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}
Td.prototype.getHeight=function(){return this.bottom-this.top};
Td.prototype.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
Td.prototype.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
Td.prototype.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function Ud(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}
Ud.prototype.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
Ud.prototype.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
Ud.prototype.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Vd(a,b,c){if(p(b))(b=Wd(a,b))&&(a.style[b]=c);else for(var d in b){c=a;var e=b[d],f=Wd(c,d);f&&(c.style[f]=e)}}
var Xd={};function Wd(a,b){var c=Xd[b];if(!c){var d=yb(b),c=d;void 0===a.style[d]&&(d=(vc?"Webkit":uc?"Moz":C?"ms":rc?"O":null)+zb(d),void 0!==a.style[d]&&(c=d));Xd[b]=c}return c}
function Yd(a,b){var c=od(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}
function Zd(a,b){return Yd(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}
function $d(a){try{var b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}C&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function ae(a){if(C&&!(8<=Number(Ec)))return a.offsetParent;var b=od(a),c=Zd(a,"position"),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(11==a.nodeType&&a.host&&(a=a.host),c=Zd(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return null}
function be(a){for(var b=new Td(0,Infinity,Infinity,0),c=md(a),d=c.b.body,e=c.b.documentElement,f=wd(c.b);a=ae(a);)if(!(C&&0==a.clientWidth||vc&&0==a.clientHeight&&a==d)&&a!=d&&a!=e&&"visible"!=Zd(a,"overflow")){var g=ce(a),h=new H(a.clientLeft,a.clientTop);g.j+=h.j;g.l+=h.l;b.top=Math.max(b.top,g.l);b.right=Math.min(b.right,g.j+a.clientWidth);b.bottom=Math.min(b.bottom,g.l+a.clientHeight);b.left=Math.max(b.left,g.j)}d=f.scrollLeft;f=f.scrollTop;b.left=Math.max(b.left,d);b.top=Math.max(b.top,f);c=
td(xd(c.b)||window);b.right=Math.min(b.right,d+c.width);b.bottom=Math.min(b.bottom,f+c.height);return 0<=b.top&&0<=b.left&&b.bottom>b.top&&b.right>b.left?b:null}
function ce(a){var b=od(a),c=new H(0,0);var d=b?od(b):document;d=!C||9<=Number(Ec)||ud(md(d).b)?d.documentElement:d.body;if(a==d)return c;a=$d(a);b=vd(md(b).b);c.j=a.left+b.j;c.l=a.top+b.l;return c}
function de(a){a=$d(a);return new H(a.left,a.top)}
function ee(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}
function fe(a){var b=ge;if("none"!=Zd(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function ge(a){var b=a.offsetWidth,c=a.offsetHeight,d=vc&&!b&&!c;return ma(b)&&!d||!a.getBoundingClientRect?new ld(b,c):(a=$d(a),new ld(a.right-a.left,a.bottom-a.top))}
function he(a){var b=ce(a);a=fe(a);return new Ud(b.j,b.l,a.width,a.height)}
function ie(a){return"rtl"==Zd(a,"direction")}
function je(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return+e}
function ke(a,b){var c=a.currentStyle?a.currentStyle[b]:null;return c?je(a,c):0}
var le={thin:2,medium:4,thick:6};function me(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in le?le[c]:je(a,c)}
;function ne(a){return(a=a.exec(Ob))?a[1]:""}
var oe=function(){if(Gc)return ne(/Firefox\/([0-9.]+)/);if(C||sc||rc)return Cc;if(Kc)return mc()||B("iPad")||B("iPod")?ne(/CriOS\/([0-9.]+)/):ne(/Chrome\/([0-9.]+)/);if(Lc&&!(mc()||B("iPad")||B("iPod")))return ne(/Version\/([0-9.]+)/);if(Hc||Ic){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(Ob);if(a)return a[1]+"."+a[2]}else if(Jc)return(a=ne(/Android\s+([0-9.]+)/))?a:ne(/Version\/([0-9.]+)/);return""}();function pe(a,b,c,d,e,f,g){var h;if(h=c.offsetParent){var k="HTML"==h.tagName||"BODY"==h.tagName;if(!k||"static"!=Zd(h,"position")){var n=ce(h);if(!k){var k=ie(h),w=Lc&&0<=wb(oe,10),k=k&&(uc||w)?-h.scrollLeft:!k||tc&&Dc("8")||"visible"==Zd(h,"overflowX")?h.scrollLeft:h.scrollWidth-h.clientWidth-h.scrollLeft;n=kd(n,new H(k,h.scrollTop))}}}h=n||new H;n=he(a);if(k=be(a)){var y=new Ud(k.left,k.top,k.right-k.left,k.bottom-k.top),k=Math.max(n.left,y.left),w=Math.min(n.left+n.width,y.left+y.width);if(k<=
w){var Q=Math.max(n.top,y.top),y=Math.min(n.top+n.height,y.top+y.height);Q<=y&&(n.left=k,n.top=Q,n.width=w-k,n.height=y-Q)}}k=md(a);Q=md(c);if(k.b!=Q.b){var w=k.b.body;var Q=xd(Q.b),y=new H(0,0);var G=(G=od(w))?xd(G):window;b:{try{oc(G.parent);var u=!0;break b}catch(nc){}u=!1}if(u){u=w;do{var la=G==Q?ce(u):de(u);y.j+=la.j;y.l+=la.l}while(G&&G!=Q&&G!=G.parent&&(u=G.frameElement)&&(G=G.parent))}u=kd(y,ce(w));!C||9<=Number(Ec)||ud(k.b)||(u=kd(u,vd(k.b)));n.left+=u.j;n.top+=u.l}a=qe(a,b);b=n.left;a&4?
b+=n.width:a&2&&(b+=n.width/2);b=new H(b,n.top+(a&1?n.height:0));b=kd(b,h);e&&(b.j+=(a&4?-1:1)*e.j,b.l+=(a&1?-1:1)*e.l);var S;g&&(S=be(c))&&(S.top-=h.l,S.right-=h.j,S.bottom-=h.l,S.left-=h.j);return re(b,c,d,f,S,g,void 0)}
function re(a,b,c,d,e,f,g){a=new H(a.j,a.l);var h=qe(b,c);c=fe(b);g=g?new ld(g.width,g.height):new ld(c.width,c.height);a=new H(a.j,a.l);g=new ld(g.width,g.height);var k=0;if(d||0!=h)h&4?a.j-=g.width+(d?d.right:0):h&2?a.j-=g.width/2:d&&(a.j+=d.left),h&1?a.l-=g.height+(d?d.bottom:0):d&&(a.l+=d.top);if(f){if(e){d=a;h=g;k=0;65==(f&65)&&(d.j<e.left||d.j>=e.right)&&(f&=-2);132==(f&132)&&(d.l<e.top||d.l>=e.bottom)&&(f&=-5);d.j<e.left&&f&1&&(d.j=e.left,k|=1);if(f&16){var n=d.j;d.j<e.left&&(d.j=e.left,k|=
4);d.j+h.width>e.right&&(h.width=Math.min(e.right-d.j,n+h.width-e.left),h.width=Math.max(h.width,0),k|=4)}d.j+h.width>e.right&&f&1&&(d.j=Math.max(e.right-h.width,e.left),k|=1);f&2&&(k|=(d.j<e.left?16:0)|(d.j+h.width>e.right?32:0));d.l<e.top&&f&4&&(d.l=e.top,k|=2);f&32&&(n=d.l,d.l<e.top&&(d.l=e.top,k|=8),d.l+h.height>e.bottom&&(h.height=Math.min(e.bottom-d.l,n+h.height-e.top),h.height=Math.max(h.height,0),k|=8));d.l+h.height>e.bottom&&f&4&&(d.l=Math.max(e.bottom-h.height,e.top),k|=2);f&8&&(k|=(d.l<
e.top?64:0)|(d.l+h.height>e.bottom?128:0));e=k}else e=256;k=e}f=new Ud(0,0,0,0);f.left=a.j;f.top=a.l;f.width=g.width;f.height=g.height;e=k;if(e&496)return e;g=new H(f.left,f.top);g instanceof H?(a=g.j,g=g.l):(a=g,g=void 0);b.style.left=ee(a,!1);b.style.top=ee(g,!1);g=new ld(f.width,f.height);c==g||c&&g&&c.width==g.width&&c.height==g.height||(c=g,g=ud(md(od(b)).b),!C||Dc("10")||g&&Dc("8")?(b=b.style,uc?b.MozBoxSizing="border-box":vc?b.WebkitBoxSizing="border-box":b.boxSizing="border-box",b.width=Math.max(c.width,
0)+"px",b.height=Math.max(c.height,0)+"px"):(a=b.style,g?(C?(h=ke(b,"paddingLeft"),d=ke(b,"paddingRight"),f=ke(b,"paddingTop"),g=ke(b,"paddingBottom"),g=new Td(f,d,g,h)):(h=Yd(b,"paddingLeft"),d=Yd(b,"paddingRight"),f=Yd(b,"paddingTop"),g=Yd(b,"paddingBottom"),g=new Td(parseFloat(f),parseFloat(d),parseFloat(g),parseFloat(h))),!C||9<=Number(Ec)?(h=Yd(b,"borderLeftWidth"),d=Yd(b,"borderRightWidth"),f=Yd(b,"borderTopWidth"),b=Yd(b,"borderBottomWidth"),b=new Td(parseFloat(f),parseFloat(d),parseFloat(b),
parseFloat(h))):(h=me(b,"borderLeft"),d=me(b,"borderRight"),f=me(b,"borderTop"),b=me(b,"borderBottom"),b=new Td(f,d,b,h)),a.pixelWidth=c.width-b.left-g.left-g.right-b.right,a.pixelHeight=c.height-b.top-g.top-g.bottom-b.bottom):(a.pixelWidth=c.width,a.pixelHeight=c.height)));return e}
function qe(a,b){return(b&8&&ie(a)?b^4:b)&-9}
;function se(a,b){this.b=0;this.B=void 0;this.o=this.f=this.i=null;this.v=this.w=!1;if(a!=oa)try{var c=this;a.call(b,function(a){te(c,2,a)},function(a){te(c,3,a)})}catch(d){te(this,3,d)}}
function ue(){this.next=this.context=this.f=this.i=this.b=null;this.o=!1}
ue.prototype.reset=function(){this.context=this.f=this.i=this.b=null;this.o=!1};
var ve=new Mb(function(){return new ue},function(a){a.reset()},100);
function we(a,b,c){var d=ve.get();d.i=a;d.f=b;d.context=c;return d}
se.prototype.then=function(a,b,c){return xe(this,sa(a)?a:null,sa(b)?b:null,c)};
se.prototype.then=se.prototype.then;se.prototype.$goog_Thenable=!0;se.prototype.cancel=function(a){0==this.b&&gc(function(){var b=new ye(a);ze(this,b)},this)};
function ze(a,b){if(0==a.b)if(a.i){var c=a.i;if(c.f){for(var d=0,e=null,f=null,g=c.f;g&&(g.o||(d++,g.b==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.b&&1==d?ze(c,b):(f?(d=f,d.next==c.o&&(c.o=d),d.next=d.next.next):Ae(c),Be(c,e,3,b)))}a.i=null}else te(a,3,b)}
function Ce(a,b){a.f||2!=a.b&&3!=a.b||De(a);a.o?a.o.next=b:a.f=b;a.o=b}
function xe(a,b,c,d){var e=we(null,null,null);e.b=new se(function(a,g){e.i=b?function(c){try{var e=b.call(d,c);a(e)}catch(n){g(n)}}:a;
e.f=c?function(b){try{var e=c.call(d,b);!ma(e)&&b instanceof ye?g(b):a(e)}catch(n){g(n)}}:g});
e.b.i=a;Ce(a,e);return e.b}
se.prototype.J=function(a){this.b=0;te(this,2,a)};
se.prototype.R=function(a){this.b=0;te(this,3,a)};
function te(a,b,c){if(0==a.b){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.b=1;a:{var d=c,e=a.J,f=a.R;if(d instanceof se){Ce(d,we(e||oa,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(n){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(ta(d))try{var k=d.then;if(sa(k)){Ee(d,k,e,f,a);g=!0;break a}}catch(n){f.call(a,n);g=!0;break a}g=!1}}}g||(a.B=c,a.b=b,a.i=null,De(a),3!=b||c instanceof ye||Fe(a,c))}}
function Ee(a,b,c,d,e){function f(a){h||(h=!0,d.call(e,a))}
function g(a){h||(h=!0,c.call(e,a))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function De(a){a.w||(a.w=!0,gc(a.F,a))}
function Ae(a){var b=null;a.f&&(b=a.f,a.f=b.next,b.next=null);a.f||(a.o=null);return b}
se.prototype.F=function(){for(var a;a=Ae(this);)Be(this,a,this.b,this.B);this.w=!1};
function Be(a,b,c,d){if(3==c&&b.f&&!b.o)for(;a&&a.v;a=a.i)a.v=!1;if(b.b)b.b.i=null,Ge(b,c,d);else try{b.o?b.i.call(b.context):Ge(b,c,d)}catch(e){He.call(null,e)}Nb(ve,b)}
function Ge(a,b,c){2==b?a.i.call(a.context,c):a.f&&a.f.call(a.context,c)}
function Fe(a,b){a.v=!0;gc(function(){a.v&&He.call(null,b)})}
var He=ac;function ye(a){rb.call(this,a)}
v(ye,rb);ye.prototype.name="cancel";function L(a){Rc.call(this);this.B=1;this.v=[];this.w=0;this.b=[];this.f={};this.F=!!a}
v(L,Rc);l=L.prototype;l.subscribe=function(a,b,c){var d=this.f[a];d||(d=this.f[a]=[]);var e=this.B;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.B=e+3;d.push(e);return e};
function Ie(a,b){var c=!1,d=a.subscribe("ROOT_MENU_REMOVED",function(){c||(c=!0,this.P(d),b.apply(void 0,arguments))},a)}
function Je(a,b,c){if(b=a.f[b]){var d=a.b;(b=Eb(b,function(a){return d[a+1]==c&&void 0==d[a+2]}))&&a.P(b)}}
l.P=function(a){var b=this.b[a];if(b){var c=this.f[b];if(0!=this.w)this.v.push(a),this.b[a+1]=oa;else{if(c){var d=Ab(c,a);0<=d&&Array.prototype.splice.call(c,d,1)}delete this.b[a];delete this.b[a+1];delete this.b[a+2]}}return!!b};
l.H=function(a){var b=this.f[a];if(b){for(var c=Array(arguments.length-1),d=1,e=arguments.length;d<e;d++)c[d-1]=arguments[d];if(this.F)for(d=0;d<b.length;d++){var f=b[d];Ke(this.b[f+1],this.b[f+2],c)}else{this.w++;try{for(d=0,e=b.length;d<e;d++)f=b[d],this.b[f+1].apply(this.b[f+2],c)}finally{if(this.w--,0<this.v.length&&0==this.w)for(;f=this.v.pop();)this.P(f)}}return 0!=d}return!1};
function Ke(a,b,c){gc(function(){a.apply(b,c)})}
l.clear=function(a){if(a){var b=this.f[a];b&&(A(b,this.P,this),delete this.f[a])}else this.b.length=0,this.f={}};
function Le(a,b){if(b){var c=a.f[b];return c?c.length:0}var c=0,d;for(d in a.f)c+=Le(a,d);return c}
l.ba=function(){L.D.ba.call(this);this.clear();this.v.length=0};function Me(){}
;function Ne(){}
v(Ne,Me);Ne.prototype.clear=function(){var a=Sd(this.T(!0)),b=this;A(a,function(a){b.remove(a)})};function Oe(a){this.b=a}
v(Oe,Ne);l=Oe.prototype;l.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
l.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
l.get=function(a){a=this.b.getItem(a);if(!p(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.b.removeItem(a)};
l.T=function(a){var b=0,c=this.b,d=new Pd;d.next=function(){if(b>=c.length)throw Od;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!p(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
l.clear=function(){this.b.clear()};
l.key=function(a){return this.b.key(a)};function Pe(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
v(Pe,Oe);function Qe(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.b=a}
v(Qe,Oe);var Re=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Se(a){return a?decodeURI(a):a}
function Te(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);c=[a.substr(0,d),e,a.substr(c)];d=c[1];c[1]=b?d?d+"&"+b:b:d;return c[0]+(c[1]?"?"+c[1]:"")+c[2]}
function Ue(a,b,c){if("array"==qa(b))for(var d=0;d<b.length;d++)Ue(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Ve(a,b){for(var c=[],d=b||0;d<a.length;d+=2)Ue(a[d],a[d+1],c);return c.join("&")}
function We(a){var b=[],c;for(c in a)Ue(c,a[c],b);return b.join("&")}
function Xe(a,b){var c=2==arguments.length?Ve(arguments[1],0):Ve(arguments,1);return Te(a,c)}
function Ye(a,b){var c=We(b);return Te(a,c)}
;var Ze=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};t("yt.config_",Ze);function $e(a){var b=arguments;if(1<b.length)Ze[b[0]]=b[1];else{var b=b[0],c;for(c in b)Ze[c]=b[c]}}
function M(a,b){return a in Ze?Ze[a]:b}
;function af(a){var b=q("yt.logging.errors.log");b?b(a,void 0,void 0,void 0,void 0):(b=M("ERRORS",[]),b.push([a,void 0,void 0,void 0,void 0]),$e("ERRORS",b))}
function bf(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){af(b)}}:a}
;function N(a,b){sa(a)&&(a=bf(a));return window.setTimeout(a,b)}
;var cf=q("ytPubsubPubsubInstance")||new L;L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.P;L.prototype.publish=L.prototype.H;L.prototype.clear=L.prototype.clear;t("ytPubsubPubsubInstance",cf);var df=q("ytPubsubPubsubSubscribedKeys")||{};t("ytPubsubPubsubSubscribedKeys",df);var ef=q("ytPubsubPubsubTopicToKeys")||{};t("ytPubsubPubsubTopicToKeys",ef);var ff=q("ytPubsubPubsubIsSynchronous")||{};t("ytPubsubPubsubIsSynchronous",ff);
function gf(a,b,c){var d=hf();if(d){var e=d.subscribe(a,function(){var d=arguments;var g=function(){df[e]&&b.apply(c||window,d)};
try{ff[a]?g():N(g,0)}catch(h){af(h)}},c);
df[e]=!0;ef[a]||(ef[a]=[]);ef[a].push(e);return e}return 0}
function hf(){return q("ytPubsubPubsubInstance")}
function O(a,b){var c=hf();return c?c.publish.apply(c,arguments):!1}
function jf(a,b){ff[a]=!0;var c=hf();c&&c.publish.apply(c,arguments);ff[a]=!1}
function kf(a){var b=hf();b&&(na(a)?a=[a]:p(a)&&(a=[parseInt(a,10)]),A(a,function(a){b.unsubscribeByKey(a);delete df[a]}))}
;function lf(a,b){return a?a.dataset?a.dataset[mf(b)]:a.getAttribute("data-"+b):null}
var nf={};function mf(a){return nf[a]||(nf[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
function of(a,b){a&&(a.dataset?delete a.dataset[mf(b)]:a.removeAttribute("data-"+b))}
function pf(a,b,c){a&&(a.dataset?a.dataset[mf(b)]=String(c):a.setAttribute("data-"+b,c))}
;function P(a,b){this.version=a;this.args=b}
function qf(a,b){if(!b.args||!b.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!a.Ma){var c=new a;a.Ma=c.version}var d=a.Ma}catch(e){}if(!d||b.version!=d)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{return Reflect.construct(a,Hb(b.args))}catch(e){throw e.message="yt.pubsub2.Data.deserialize(): "+e.message,e;}}
P.prototype.Eb=function(){return{version:this.version,args:this.args}};function R(a,b){this.topic=a;this.U=b}
R.prototype.toString=function(){return this.topic};function rf(a){var b=void 0;isNaN(b)&&(b=void 0);var c=q("yt.scheduler.instance.addJob");c?c(a,1,b):void 0===b?a():N(a,b||0)}
;var sf=q("ytPubsub2Pubsub2Instance")||new L;L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.P;L.prototype.publish=L.prototype.H;L.prototype.clear=L.prototype.clear;t("ytPubsub2Pubsub2Instance",sf);var tf=q("ytPubsub2Pubsub2SubscribedKeys")||{};t("ytPubsub2Pubsub2SubscribedKeys",tf);var uf=q("ytPubsub2Pubsub2TopicToKeys")||{};t("ytPubsub2Pubsub2TopicToKeys",uf);var vf=q("ytPubsub2Pubsub2IsAsync")||{};t("ytPubsub2Pubsub2IsAsync",vf);
t("ytPubsub2Pubsub2SkipSubKey",null);function T(a,b){var c=wf();return c?c.publish.call(c,a.toString(),a,b):!1}
function U(a,b,c){var d=wf();if(!d)return 0;var e=d.subscribe(a.toString(),function(d,g){var f=q("ytPubsub2Pubsub2SkipSubKey");f&&f==e||(f=function(){if(tf[e])try{if(g&&a instanceof R&&a!=d)try{g=qf(a.U,g)}catch(k){throw k.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+a.toString()+": "+k.message,k;}b.call(c||window,g)}catch(k){af(k)}},vf[a.toString()]?q("yt.scheduler.instance")?rf(f):N(f,0):f())});
tf[e]=!0;uf[a.toString()]||(uf[a.toString()]=[]);uf[a.toString()].push(e);return e}
function wf(){return q("ytPubsub2Pubsub2Instance")}
function xf(a,b,c){window.ytPubsub2Pubsub2SkipSubKey=a;T.call(null,b,c);window.ytPubsub2Pubsub2SkipSubKey=null}
function yf(a){var b=wf();b&&(na(a)&&(a=[a]),A(a,function(a){b.unsubscribeByKey(a);delete tf[a]}))}
;var zf=0;function Af(a,b){var c=qd(document,a,null,b);return c.length?c[0]:null}
var Bf=q("ytDomDomGetNextId")||function(){return++zf};
t("ytDomDomGetNextId",Bf);function Cf(){var a=document,b;Db(["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],function(c){b=a[c];return!!b});
return b}
function Df(a){var b=a.__yt_uid_key;b||(b=Bf(),a.__yt_uid_key=b);return b}
function Ef(a,b){a=I(a);b=I(b);return!!Nd(a,function(a){return a===b},!0,void 0)}
function Ff(){Yc(document.body,"hide-players",!1);A(pd("preserve-players"),function(a){F(a,"preserve-players")})}
;var Gf={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Hf(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in Gf||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:
"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
Hf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Hf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Hf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Vb=q("ytEventsEventsListeners")||{};t("ytEventsEventsListeners",Vb);var If=q("ytEventsEventsCounter")||{count:0};t("ytEventsEventsCounter",If);function Jf(a,b,c,d){d=void 0===d?!1:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Ub(function(e){return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})}
function V(a,b,c,d){d=void 0===d?!1:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Jf(a,b,c,d);if(e)return e;var e=++If.count+"",f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(d){d=new Hf(d);if(!Nd(d.relatedTarget,function(b){return b==a},!0))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new Hf(b);
b.currentTarget=a;return c.call(a,b)};
g=bf(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,g,d)):a.attachEvent("on"+b,g);Vb[e]=[a,b,c,g,d];return e}
function Kf(a,b,c){var d=a||document;return V(d,"click",function(a){var e=Nd(a.target,function(a){return a===d||c(a)},!0);
e&&e!==d&&!e.disabled&&(a.currentTarget=e,b.call(e,a))})}
function Lf(a){a=a||window.event;a=a.target||a.srcElement;3==a.nodeType&&(a=a.parentNode);return a}
function Mf(a,b,c){return Kf(a,b,function(a){return D(a,c)})}
function Nf(a){if(document.createEvent){var b=document.createEvent("HTMLEvents");b.initEvent("click",!0,!0);a.dispatchEvent(b)}else b=document.createEventObject(),a.fireEvent("onclick",b)}
function W(a){a&&("string"==typeof a&&(a=[a]),A(a,function(a){if(a in Vb){var b=Vb[a],d=b[0],e=b[1],f=b[3],b=b[4];d.removeEventListener?d.removeEventListener(e,f,b):d.detachEvent&&d.detachEvent("on"+e,f);delete Vb[a]}}))}
;var Of={},Pf="ontouchstart"in document;function Qf(a,b,c){switch(a){case "mouseover":case "mouseout":var d=3;break;case "mouseenter":case "mouseleave":d=9}return Nd(c,function(a){return D(a,b)},!0,d)}
function Rf(a){var b,c="mouseover"==a.type&&"mouseenter"in Of||"mouseout"==a.type&&"mouseleave"in Of,d=a.type in Of||c;if("HTML"!=a.target.tagName&&d){if(c){var c="mouseover"==a.type?"mouseenter":"mouseleave",d=Of[c],e;for(e in d.f)(b=Qf(c,e,a.target))&&!Nd(a.relatedTarget,function(a){return a==b},!0)&&d.H(e,b,c,a)}if(c=Of[a.type])for(e in c.f)(b=Qf(a.type,e,a.target))&&c.H(e,b,a.type,a)}}
V(document,"blur",Rf,!0);V(document,"change",Rf,!0);V(document,"click",Rf);V(document,"focus",Rf,!0);V(document,"mouseover",Rf);V(document,"mouseout",Rf);V(document,"mousedown",Rf);V(document,"keydown",Rf);V(document,"keyup",Rf);V(document,"keypress",Rf);V(document,"cut",Rf);V(document,"paste",Rf);Pf&&(V(document,"touchstart",Rf),V(document,"touchend",Rf),V(document,"touchcancel",Rf));function Sf(a){this.v=a;this.B={};this.J=[];this.F=[]}
l=Sf.prototype;l.C=function(a){return K(a,X(this))};
function X(a,b){return"yt-uix"+(a.v?"-"+a.v:"")+(b?"-"+b:"")}
l.unregister=function(){kf(this.J);this.J.length=0;yf(this.F);this.F.length=0};
l.init=oa;l.dispose=oa;function Tf(a,b,c){a.J.push(gf(b,c,a))}
function Uf(a,b,c){a.F.push(U(b,c,a))}
function Y(a,b,c,d){d=X(a,d);var e=r(c,a);b in Of||(Of[b]=new L);Of[b].subscribe(d,e);a.B[c]=e}
function Z(a,b,c,d){if(b in Of){var e=Of[b];Je(e,X(a,d),a.B[c]);0>=Le(e)&&(e.dispose(),delete Of[b])}delete a.B[c]}
l.N=function(a,b){var c=this.g(a,b);if(c&&(c=q(c))){var d=Kb(arguments,2);Jb(d,0,0,a);c.apply(null,d)}};
l.g=function(a,b){return lf(a,b)};
function Vf(a,b){pf(a,"tooltip-text",b)}
;var Wf=window.yt&&window.yt.uix&&window.yt.uix.widgets_||{};t("yt.uix.widgets_",Wf);function Xf(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?"array"==qa(b[f])?Ib(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function Yf(a,b){var c=a.split("#",2);a=c[0];var c=1<c.length?"#"+c[1]:"",d=a.split("?",2);a=d[0];var d=Xf(d[1]||""),e;for(e in b)d[e]=b[e];return Ye(a,d)+c}
;function Zf(a){a=void 0===a?{}:a;sa(a)&&(a={callback:a});if(a.gapiHintOverride||M("GAPI_HINT_OVERRIDE")){var b=document.location.href;-1!=b.indexOf("?")?(b=(b||"").split("#")[0],b=b.split("?",2),b=Xf(1<b.length?b[1]:b[0])):b={};(b=b.gapi_jsh)&&Yb(a,{_c:{jsl:{h:b}}})}pb("gapi.iframes:gapi.iframes.style.common",a)}
;function $f(){return q("gapi.iframes.getContext")()}
function ag(){return $f().getParentIframe()}
function bg(a,b){var c=c||$f();c.addOnConnectHandler("yt",a,void 0,b)}
function cg(a){var b=$f(),b=b||$f();b.connectIframes(a)}
;Aa();var dg=ma(XMLHttpRequest)?function(){return new XMLHttpRequest}:ma(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function eg(){if(!dg)return null;var a=dg();return"open"in a?a:null}
;var fg={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},gg=!1;
function hg(a,b){b=void 0===b?{}:b;var c=void 0;c=window.location.href;var d=a.match(Re)[1]||null,e=Se(a.match(Re)[3]||null);d&&e?(d=c,c=a.match(Re),d=d.match(Re),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?Se(c.match(Re)[3]||null)==e&&(Number(c.match(Re)[4]||null)||null)==(Number(a.match(Re)[4]||null)||null):!0;for(var f in fg){if((e=d=M(fg[f]))&&!(e=c)){var g=a,e=f,h=M("CORS_HEADER_WHITELIST")||{};e=(g=Se(g.match(Re)[3]||null))?(h=h[g])?Fb(h,e):!1:!0}e&&(b[f]=d)}return b}
function ig(a,b){var c=M("XSRF_FIELD_NAME",void 0),d;b.headers&&(d=b.headers["Content-Type"]);return!b.Wb&&(!Se(a.match(Re)[3]||null)||b.withCredentials||Se(a.match(Re)[3]||null)==document.location.hostname)&&"POST"==b.method&&(!d||"application/x-www-form-urlencoded"==d)&&!(b.L&&b.L[c])}
function jg(a,b){var c=b.format||"JSON";b.Xb&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var d=M("XSRF_FIELD_NAME",void 0),e=M("XSRF_TOKEN",void 0),f=b.La;f&&(f[d]&&delete f[d],a=Yf(a,f||{}));var f=b.postBody||"",g=b.L;ig(a,b)&&(g||(g={}),g[d]=e);g&&p(f)&&(d=Xf(f),Yb(d,g),f=b.Db&&"JSON"==b.Db?JSON.stringify(d):We(d));d=f||g&&!Wb(g);!gg&&d&&"POST"!=b.method&&(gg=!0,af(Error("AJAX request with postData should use POST")));
var h=!1,k,n=kg(a,function(a){if(!h){h=!0;k&&window.clearTimeout(k);a:switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var d=!0;break a;default:d=!1}var e=null;if(d||400<=a.status&&500>a.status)e=lg(c,a,b.Vb);if(d)a:if(204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(e&&e.return_code,10);break a;case "RAW":d=!0;break a}d=!!e}var e=e||{},f=b.context||m;d?b.O&&b.O.call(f,a,e):b.onError&&b.onError.call(f,a,e);b.fa&&b.fa.call(f,a,e)}},
b.method,f,b.headers,b.responseType,b.withCredentials);
b.Ab&&0<b.timeout&&(k=N(function(){h||(h=!0,n.abort(),window.clearTimeout(k),b.Ab.call(b.context||m,n))},b.timeout))}
function lg(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?mg(b):null)d={},A(b.getElementsByTagName("*"),function(a){d[a.tagName]=ng(a)})}c&&og(d);
return d}
function og(a){if(ta(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=jd(a[b]);a[c]=d}else og(a[b])}}
function mg(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function ng(a){var b="";A(a.childNodes,function(a){b+=a.nodeValue});
return b}
function kg(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&bf(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=eg();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c;if(e=hg(a,e))for(var n in e)k.setRequestHeader(n,e[n]),"content-type"==n.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);return k}
;var pg={},qg=0;function rg(a){var b=new Image,c=""+qg++;pg[c]=b;b.onload=b.onerror=function(){delete pg[c]};
b.src=a}
;function sg(a){P.call(this,1,arguments);this.b=a}
v(sg,P);function tg(a){P.call(this,1,arguments);this.b=a}
v(tg,P);function ug(a,b,c){P.call(this,3,arguments);this.i=a;this.f=b;this.b=null!=c?!!c:null}
v(ug,P);function vg(a,b,c,d,e){P.call(this,2,arguments);this.f=a;this.b=b;this.o=c||null;this.i=d||null;this.source=e||null}
v(vg,P);function wg(a,b,c){P.call(this,1,arguments);this.b=a;this.f=b}
v(wg,P);function xg(a,b,c,d,e,f,g){P.call(this,1,arguments);this.f=a;this.v=b;this.b=c;this.w=d||null;this.o=e||null;this.i=f||null;this.source=g||null}
v(xg,P);
var yg=new R("subscription-batch-subscribe",sg),zg=new R("subscription-batch-unsubscribe",sg),Ag=new R("subscription-subscribe",vg),Bg=new R("subscription-subscribe-loading",tg),Cg=new R("subscription-subscribe-loaded",tg),Dg=new R("subscription-subscribe-success",wg),Eg=new R("subscription-subscribe-external",vg),Fg=new R("subscription-unsubscribe",xg),Gg=new R("subscription-unsubscirbe-loading",tg),Hg=new R("subscription-unsubscribe-loaded",tg),Ig=new R("subscription-unsubscribe-success",tg),Jg=
new R("subscription-external-unsubscribe",xg),Kg=new R("subscription-enable-ypc",tg),Lg=new R("subscription-disable-ypc",tg),Mg=new R("subscription-prefs",ug),Ng=new R("subscription-prefs-success",ug),Og=new R("subscription-prefs-failure",ug);var Pg="http://www.youtube.com https://www.youtube.com https://plus.google.com https://plus.googleapis.com https://plus.sandbox.google.com https://plusone.google.com https://plusone.sandbox.google.com https://apis.google.com https://apis.sandbox.google.com https://web-ppg.corp.google.com https://web-green-qa.youtube.com https://web-release-qa.youtube.com".split(" "),Qg=[Bg,Cg,Dg,Gg,Hg,Ig,Eg,Jg],Rg=[Bg,Cg,Dg,Gg,Hg,Ig,Kg,Lg];function Sg(){var a=Cf();return a?a:null}
;function Tg(a,b){(a=I(a))&&a.style&&(a.style.display=b?"":"none",Yc(a,"hid",!b))}
function Ug(a){return(a=I(a))?"none"!=a.style.display&&!D(a,"hid"):!1}
function Vg(a){A(arguments,function(a){!ra(a)||a instanceof Element?Tg(a,!0):A(a,function(a){Vg(a)})})}
function Wg(a){A(arguments,function(a){!ra(a)||a instanceof Element?Tg(a,!1):A(a,function(a){Wg(a)})})}
;function Xg(){Sf.call(this,"tooltip");this.b=0;this.f={}}
v(Xg,Sf);pa(Xg);l=Xg.prototype;l.register=function(){Y(this,"mouseover",this.X);Y(this,"mouseout",this.K);Y(this,"focus",this.ta);Y(this,"blur",this.oa);Y(this,"click",this.K);Y(this,"touchstart",this.Ka);Y(this,"touchend",this.Z);Y(this,"touchcancel",this.Z)};
l.unregister=function(){Z(this,"mouseover",this.X);Z(this,"mouseout",this.K);Z(this,"focus",this.ta);Z(this,"blur",this.oa);Z(this,"click",this.K);Z(this,"touchstart",this.Ka);Z(this,"touchend",this.Z);Z(this,"touchcancel",this.Z);this.dispose();Xg.D.unregister.call(this)};
l.dispose=function(){for(var a in this.f)this.K(this.f[a]);this.f={}};
l.X=function(a){if(!(this.b&&1E3>Aa()-this.b)){var b=parseInt(this.g(a,"tooltip-hide-timer"),10);b&&(of(a,"tooltip-hide-timer"),window.clearTimeout(b));var b=r(function(){Yg(this,a);of(a,"tooltip-show-timer")},this),c=parseInt(this.g(a,"tooltip-show-delay"),10)||0,b=N(b,c);
pf(a,"tooltip-show-timer",b.toString());a.title&&(Vf(a,Zg(this,a)),a.title="");b=ua(a).toString();this.f[b]=a}};
l.K=function(a){var b=parseInt(this.g(a,"tooltip-show-timer"),10);b&&(window.clearTimeout(b),of(a,"tooltip-show-timer"));b=r(function(){if(a){var b=I($g(this,a));b&&(ah(b),yd(b),of(a,"content-id"));b=I($g(this,a,"arialabel"));yd(b)}of(a,"tooltip-hide-timer")},this);
b=N(b,50);pf(a,"tooltip-hide-timer",b.toString());if(b=this.g(a,"tooltip-text"))a.title=b;b=ua(a).toString();delete this.f[b]};
l.ta=function(a){this.b=0;this.X(a)};
l.oa=function(a){this.b=0;this.K(a)};
l.Ka=function(a,b,c){c.changedTouches&&(this.b=0,(a=Qf(b,X(this),c.changedTouches[0].target))&&this.X(a))};
l.Z=function(a,b,c){c.changedTouches&&(this.b=Aa(),(a=Qf(b,X(this),c.changedTouches[0].target))&&this.K(a))};
function bh(a,b,c){Vf(b,c);a=a.g(b,"content-id");(a=I(a))&&Cd(a,c)}
function Zg(a,b){return a.g(b,"tooltip-text")||b.title}
function Yg(a,b){if(b){var c=Zg(a,b);if(c){var d=I($g(a,b));if(!d){d=document.createElement("div");d.id=$g(a,b);d.className=X(a,"tip");var e=document.createElement("div");e.className=X(a,"tip-body");var f=document.createElement("div");f.className=X(a,"tip-arrow");var g=document.createElement("div");g.setAttribute("aria-hidden","true");g.className=X(a,"tip-content");var h=ch(a,b),k=$g(a,b,"content");g.id=k;pf(b,"content-id",k);e.appendChild(g);h&&d.appendChild(h);d.appendChild(e);d.appendChild(f);
var n=Kd(b);k=$g(a,b,"arialabel");f=document.createElement("div");E(f,X(a,"arialabel"));f.id=k;n=b.hasAttribute("aria-label")?b.getAttribute("aria-label"):"rtl"==document.body.getAttribute("dir")?c+" "+n:n+" "+c;Cd(f,n);b.setAttribute("aria-labelledby",k);k=Sg()||document.body;k.appendChild(f);k.appendChild(d);bh(a,b,c);(c=parseInt(a.g(b,"tooltip-max-width"),10))&&e.offsetWidth>c&&(e.style.width=c+"px",E(g,X(a,"normal-wrap")));g=D(b,X(a,"reverse"));dh(a,b,d,e,h,g)||dh(a,b,d,e,h,!g);var w=X(a,"tip-visible");
N(function(){E(d,w)},0)}}}}
function dh(a,b,c,d,e,f){Yc(c,X(a,"tip-reverse"),f);var g=0;f&&(g=1);var h=fe(b);f=new H((h.width-10)/2,f?h.height:0);var k=ce(b);re(new H(k.j+f.j,k.l+f.l),c,g);f=td(window);if(1==c.nodeType)var n=de(c);else c=c.changedTouches?c.changedTouches[0]:c,n=new H(c.clientX,c.clientY);c=fe(d);var w=Math.floor(c.width/2),g=!!(f.height<n.l+h.height),h=!!(n.l<h.height),k=!!(n.j<w);f=!!(f.width<n.j+w);n=(c.width+3)/-2- -5;a=a.g(b,"force-tooltip-direction");if("left"==a||k)n=-5;else if("right"==a||f)n=20-c.width-
3;a=Math.floor(n)+"px";d.style.left=a;e&&(e.style.left=a,e.style.height=c.height+"px",e.style.width=c.width+"px");return!(g||h)}
function $g(a,b,c){a=X(a)+Df(b);c&&(a+="-"+c);return a}
function ch(a,b){var c=null;wc&&D(b,X(a,"masked"))&&((c=I("yt-uix-tooltip-shared-mask"))?(c.parentNode.removeChild(c),Vg(c)):(c=document.createElement("iframe"),c.src='javascript:""',c.id="yt-uix-tooltip-shared-mask",c.className=X(a,"tip-mask")));return c}
function ah(a){var b=I("yt-uix-tooltip-shared-mask"),c=b&&Nd(b,function(b){return b==a},!1,2);
b&&c&&(b.parentNode.removeChild(b),Wg(b),document.body.appendChild(b))}
;function eh(a){var b=document.location.protocol+"//"+document.domain+"/post_login",b=Xe(b,"mode","subscribe"),b=Xe("/signin?context=popup","next",b),b=Xe(b,"feature","sub_button");if(b=window.open(b,"loginPopup","width=375,height=440,resizable=yes,scrollbars=yes",!0)){var c=gf("LOGGED_IN",function(b){kf(M("LOGGED_IN_PUBSUB_KEY",void 0));$e("LOGGED_IN",!0);a(b)});
$e("LOGGED_IN_PUBSUB_KEY",c);b.moveTo((screen.width-375)/2,(screen.height-440)/2)}}
t("yt.pubsub.publish",O);var fh=Object.create(null);fh.log_event="GENERIC_EVENT_LOGGING";fh.log_event2="GENERIC_EVENT_LOGGING";fh.log_interaction="INTERACTION_LOGGING";var gh=q("ytLoggingTransportLogPayloadsQueue_")||{};t("ytLoggingTransportLogPayloadsQueue_",gh);var hh=q("ytLoggingTransportTokensToCttTargetIds_")||{};t("ytLoggingTransportTokensToCttTargetIds_",hh);var ih=q("ytLoggingTransportDispatchedStats_")||{};t("ytLoggingTransportDispatchedStats_",ih);var jh=q("ytLoggingTransportCapturedTime_")||{};
t("ytytLoggingTransportCapturedTime_",jh);(new Pe).isAvailable();(new Qe).isAvailable();function kh(){Sf.call(this,"button");this.b=null;this.i=[];this.f={}}
v(kh,Sf);pa(kh);l=kh.prototype;l.register=function(){Y(this,"click",this.Na);Y(this,"keydown",this.xa);Y(this,"keypress",this.ya);Tf(this,"page-scroll",this.ob)};
l.unregister=function(){Z(this,"click",this.Na);Z(this,"keydown",this.xa);Z(this,"keypress",this.ya);lh(this);this.f={};kh.D.unregister.call(this)};
l.Na=function(a){a&&!a.disabled&&(mh(this,a),this.click(a))};
l.xa=function(a,b,c){if(!(c.altKey||c.ctrlKey||c.shiftKey)&&(b=nh(this,a))){var d=function(a){var b="";a.tagName&&(b=a.tagName.toLowerCase());return"ul"==b||"table"==b},e;
d(b)?e=b:e=Dd(b,d);if(e){e=e.tagName.toLowerCase();if("ul"==e)var f=this.vb;else"table"==e&&(f=this.ub);f&&oh(this,a,b,c,r(f,this))}}};
l.ob=function(){var a=this.f,b=0;for(d in a)b++;if(0!=b)for(var c in a){b=a[c];var d=K(b.activeButtonNode||b.parentNode,X(this));if(void 0==d||void 0==b)break;ph(this,d,b,!0)}};
function oh(a,b,c,d,e){var f=Ug(c),g=9==d.keyCode;if(g||32==d.keyCode||13==d.keyCode)if(d=qh(a,c)){if(ma(d.firstElementChild))b=d.firstElementChild;else for(b=d.firstChild;b&&1!=b.nodeType;)b=b.nextSibling;if("a"==b.tagName.toLowerCase()){var h=void 0===h?{}:h;var k=void 0===k?"":k;var n=void 0===n?window:n;n=n.location;h=Ye(b.href,h)+k;h instanceof cd||h instanceof cd||(h=h.da?h.ca():String(h),ed.test(h)||(h="about:invalid#zClosurez"),h=fd(h));h instanceof cd&&h.constructor===cd&&h.f===dd?h=h.b:
(qa(h),h="type_error:SafeUrl");n.href=h}else Nf(b)}else g&&rh(a,b);else f?27==d.keyCode?(qh(a,c),rh(a,b)):e(b,c,d):(h=D(b,X(a,"reverse"))?38:40,d.keyCode==h&&(Nf(b),d.preventDefault()))}
l.ya=function(a,b,c){c.altKey||c.ctrlKey||c.shiftKey||(a=nh(this,a),Ug(a)&&c.preventDefault())};
function qh(a,b){var c=X(a,"menu-item-highlight"),d=J(c,b);d&&F(d,c);return d}
function sh(a,b,c){E(c,X(a,"menu-item-highlight"));var d=c.getAttribute("id");d||(d=X(a,"item-id-"+ua(c)),c.setAttribute("id",d));b.setAttribute("aria-activedescendant",d)}
l.ub=function(a,b,c){var d=qh(this,b);if(d){var e=Af("table",b);b=qd(document,"td",null,e);d=th(d,b,qd(document,"td",null,Af("tr",e)).length,c);-1!=d&&(sh(this,a,b[d]),c.preventDefault())}};
l.vb=function(a,b,c){if(40==c.keyCode||38==c.keyCode){var d=qh(this,b);d&&(b=Bb(qd(document,"li",null,b),Ug),sh(this,a,b[th(d,b,1,c)]),c.preventDefault())}};
function th(a,b,c,d){var e=b.length;a=Ab(b,a);if(-1==a)if(38==d.keyCode)a=e-c;else{if(37==d.keyCode||38==d.keyCode||40==d.keyCode)a=0}else 39==d.keyCode?(a%c==c-1&&(a-=c),a+=1):37==d.keyCode?(0==a%c&&(a+=c),--a):38==d.keyCode?(a<c&&(a+=e),a-=c):40==d.keyCode&&(a>=e-c&&(a-=e),a+=c);return a}
function uh(a,b){var c=b.iframeMask;c||(c=document.createElement("iframe"),c.src='javascript:""',c.className=X(a,"menu-mask"),Wg(c),b.iframeMask=c);return c}
function ph(a,b,c,d){var e=K(b,X(a,"group")),f=!!a.g(b,"button-menu-ignore-group"),e=e&&!f?e:b,f=9,g=8,h=he(b);if(D(b,X(a,"reverse"))){f=8;g=9;h=h.top+"px";try{c.style.maxHeight=h}catch(w){}}D(b,"flip")&&(D(b,X(a,"reverse"))?(f=12,g=13):(f=13,g=12));var k;a.g(b,"button-has-sibling-menu")?k=ae(e):a.g(b,"button-menu-root-container")&&(k=vh(a,b));C&&!Dc("8")&&(k=null);if(k){var n=he(k);n=new Td(-n.top,n.left,n.top,-n.left)}k=new H(0,1);D(b,X(a,"center-menu"))&&(k.j-=Math.round((fe(c).width-fe(b).width)/
2));d&&(k.l+=vd(document).l);if(a=uh(a,b))b=fe(c),a.style.width=b.width+"px",a.style.height=b.height+"px",pe(e,f,a,g,k,n,197),d&&Vd(a,"position","fixed");pe(e,f,c,g,k,n,197)}
function vh(a,b){if(a.g(b,"button-menu-root-container")){var c=a.g(b,"button-menu-root-container");return K(b,c)}return document.body}
l.Pa=function(a){if(a){var b=nh(this,a);if(b){a.setAttribute("aria-pressed","true");a.setAttribute("aria-expanded","true");b.originalParentNode=b.parentNode;b.activeButtonNode=a;b.parentNode.removeChild(b);var c;this.g(a,"button-has-sibling-menu")?c=a.parentNode:c=vh(this,a);c.appendChild(b);b.style.minWidth=a.offsetWidth-2+"px";var d=uh(this,a);d&&c.appendChild(d);(c=!!this.g(a,"button-menu-fixed"))&&(this.f[Df(a).toString()]=b);ph(this,a,b,c);jf("yt-uix-button-menu-before-show",a,b);Vg(b);d&&Vg(d);
this.N(a,"button-menu-action",!0);E(a,X(this,"active"));b=r(this.Oa,this,a,!1);d=r(this.Oa,this,a,!0);c=r(this.Gb,this,a,void 0);this.b&&nh(this,this.b)==nh(this,a)||lh(this);O("yt-uix-button-menu-show",a);W(this.i);this.i=[V(document,"click",d),V(document,"contextmenu",b),V(window,"resize",c)];this.b=a}}};
function rh(a,b){if(b){var c=nh(a,b);if(c){a.b=null;b.setAttribute("aria-pressed","false");b.setAttribute("aria-expanded","false");b.removeAttribute("aria-activedescendant");Wg(c);a.N(b,"button-menu-action",!1);var d=uh(a,b),e=Df(c).toString();delete a.f[e];N(function(){d&&d.parentNode&&(Wg(d),d.parentNode.removeChild(d));c.originalParentNode&&(c.parentNode.removeChild(c),c.originalParentNode.appendChild(c),c.originalParentNode=null,c.activeButtonNode=null)},1)}var e=K(b,X(a,"group")),f=[X(a,"active")];
e&&f.push(X(a,"group-active"));Xc(b,f);O("yt-uix-button-menu-hide",b);W(a.i);a.i.length=0}}
l.Gb=function(a,b){var c=nh(this,a);if(c){b&&(b instanceof gd?c.innerHTML=id(b):Cd(c,b));var d=!!this.g(a,"button-menu-fixed");ph(this,a,c,d)}};
l.Oa=function(a,b,c){c=Lf(c);var d=K(c,X(this));if(d){var d=nh(this,d),e=nh(this,a);if(d==e)return}var d=K(c,X(this,"menu")),e=d==nh(this,a),f=D(c,X(this,"menu-item")),g=D(c,X(this,"menu-close"));if(!d||e&&(f||g))rh(this,a),d&&b&&this.g(a,"button-menu-indicate-selected")&&((a=J(X(this,"content"),a))&&Cd(a,Kd(c)),wh(this,d,c))};
function wh(a,b,c){var d=X(a,"menu-item-selected");A(pd(d,b),function(a){F(a,d)});
E(c.parentNode,d)}
function nh(a,b){if(!b.widgetMenu){var c=a.g(b,"button-menu-id"),c=c&&I(c),d=X(a,"menu");c?Wc(c,[d,X(a,"menu-external")]):c=J(d,b);b.widgetMenu=c}return b.widgetMenu}
l.isToggled=function(a){return D(a,X(this,"toggled"))};
function mh(a,b){if(a.g(b,"button-toggle")){var c=K(b,X(a,"group")),d=X(a,"toggled"),e=D(b,d);if(c&&a.g(c,"button-toggle-group")){var f=a.g(c,"button-toggle-group");A(pd(X(a),c),function(a){a!=b||"optional"==f&&e?(F(a,d),a.removeAttribute("aria-pressed")):(E(b,d),a.setAttribute("aria-pressed","true"))})}else e?b.removeAttribute("aria-pressed"):b.setAttribute("aria-pressed","true"),$c(b,d)}}
l.click=function(a){if(nh(this,a)){var b=nh(this,a);if(b){var c=K(b.activeButtonNode||b.parentNode,X(this));c&&c!=a?(rh(this,c),N(r(this.Pa,this,a),1)):Ug(b)?rh(this,a):this.Pa(a)}a.focus()}this.N(a,"button-action")};
function lh(a){a.b&&rh(a,a.b)}
;function xh(a){Sf.call(this,a);this.i=null}
v(xh,Sf);l=xh.prototype;l.C=function(a){var b=Sf.prototype.C.call(this,a);return b?b:a};
l.register=function(){Tf(this,"yt-uix-kbd-nav-move-out-done",this.hide)};
l.dispose=function(){yh(this);xh.D.dispose.call(this)};
l.g=function(a,b){var c=xh.D.g.call(this,a,b);return c?c:(c=xh.D.g.call(this,a,"card-config"))&&(c=q(c))&&c[b]?c[b]:null};
l.show=function(a){var b=this.C(a);if(b){E(b,X(this,"active"));var c=zh(this,a,b);if(c){c.cardTargetNode=a;c.cardRootNode=b;Ah(this,a,c);var d=X(this,"card-visible"),e=this.g(a,"card-delegate-show")&&this.g(b,"card-action");this.N(b,"card-action",a);this.i=a;Wg(c);N(r(function(){e||(Vg(c),O("yt-uix-card-show",b,a,c));Bh(c);E(c,d);O("yt-uix-kbd-nav-move-in-to",c)},this),10)}}};
function zh(a,b,c){var d=c||b,e=X(a,"card");c=Ch(a,d);var f=I(X(a,"card")+Df(d));if(f)return a=J(X(a,"card-body"),f),Bd(a,c)||(yd(c),a.appendChild(c)),f;f=document.createElement("div");f.id=X(a,"card")+Df(d);f.className=e;(d=a.g(d,"card-class"))&&Wc(f,d.split(/\s+/));d=document.createElement("div");d.className=X(a,"card-border");b=a.g(b,"orientation")||"horizontal";e=document.createElement("div");e.className="yt-uix-card-border-arrow yt-uix-card-border-arrow-"+b;var g=document.createElement("div");
g.className=X(a,"card-body");a=document.createElement("div");a.className="yt-uix-card-body-arrow yt-uix-card-body-arrow-"+b;yd(c);g.appendChild(c);d.appendChild(a);d.appendChild(g);f.appendChild(e);f.appendChild(d);document.body.appendChild(f);return f}
function Ah(a,b,c){var d=a.g(b,"orientation")||"horizontal",e=J(X(a,"anchor"),b)||b,f=a.g(b,"position"),g=!!a.g(b,"force-position"),h=a.g(b,"position-fixed"),d="horizontal"==d,k="bottomright"==f||"bottomleft"==f,n="topright"==f||"bottomright"==f;if(n&&k){var w=13;var y=8}else n&&!k?(w=12,y=9):!n&&k?(w=9,y=12):(w=8,y=13);var Q=ie(document.body),f=ie(b);Q!=f&&(w^=4);if(d){f=b.offsetHeight/2-12;var G=new H(-12,b.offsetHeight+6)}else f=b.offsetWidth/2-6,G=new H(b.offsetWidth+6,-12);var u=fe(c),f=Math.min(f,
(d?u.height:u.width)-24-6);6>f&&(f=6,d?G.l+=12-b.offsetHeight/2:G.j+=12-b.offsetWidth/2);u=null;g||(u=10);b=X(a,"card-flip");a=X(a,"card-reverse");Yc(c,b,n);Yc(c,a,k);u=pe(e,w,c,y,G,null,u);!g&&u&&(u&48&&(n=!n,w^=4,y^=4),u&192&&(k=!k,w^=1,y^=1),Yc(c,b,n),Yc(c,a,k),pe(e,w,c,y,G));h&&(e=parseInt(c.style.top,10),g=vd(document).l,Vd(c,"position","fixed"),Vd(c,"top",e-g+"px"));Q&&(c.style.right="",e=he(c),e.left=e.left||parseInt(c.style.left,10),g=td(window),c.style.left="",c.style.right=g.width-e.left-
e.width+"px");e=J("yt-uix-card-body-arrow",c);g=J("yt-uix-card-border-arrow",c);d=d?k?"top":"bottom":!Q&&n||Q&&!n?"left":"right";e.setAttribute("style","");g.setAttribute("style","");e.style[d]=f+"px";g.style[d]=f+"px";k=J("yt-uix-card-arrow",c);n=J("yt-uix-card-arrow-background",c);k&&n&&(c="right"==d?fe(c).width-f-13:f+11,f=c/Math.sqrt(2),k.style.left=c+"px",k.style.marginLeft="1px",n.style.marginLeft=-f+"px",n.style.marginTop=f+"px")}
l.hide=function(a){if(a=this.C(a)){var b=I(X(this,"card")+Df(a));b&&(F(a,X(this,"active")),F(b,X(this,"card-visible")),Wg(b),this.i=null,b.cardTargetNode=null,b.cardRootNode=null,b.cardMask&&(yd(b.cardMask),b.cardMask=null))}};
function yh(a){a.i&&a.hide(a.i)}
l.Fb=function(a,b){var c=this.C(a);if(c){if(b){var d=Ch(this,c);if(!d)return;b instanceof gd?d.innerHTML=id(b):Cd(d,b)}D(c,X(this,"active"))&&(c=zh(this,a,c),Ah(this,a,c),Vg(c),Bh(c))}};
l.isActive=function(a){return(a=this.C(a))?D(a,X(this,"active")):!1};
function Ch(a,b){var c=b.cardContentNode;if(!c){var d=X(a,"content"),e=X(a,"card-content");(c=(c=a.g(b,"card-id"))?I(c):J(d,b))||(c=document.createElement("div"));var f=c;F(f,d);E(f,e);b.cardContentNode=c}return c}
function Bh(a){var b=a.cardMask;b||(b=document.createElement("iframe"),b.src='javascript:""',Wc(b,["yt-uix-card-iframe-mask"]),a.cardMask=b);b.style.position=a.style.position;b.style.top=a.style.top;b.style.left=a.offsetLeft+"px";b.style.height=a.clientHeight+"px";b.style.width=a.clientWidth+"px";document.body.appendChild(b)}
;function Dh(){Sf.call(this,"kbd-nav")}
var Eh;v(Dh,Sf);pa(Dh);l=Dh.prototype;l.register=function(){Y(this,"keydown",this.va);Tf(this,"yt-uix-kbd-nav-move-in",this.Da);Tf(this,"yt-uix-kbd-nav-move-in-to",this.wb);Tf(this,"yt-uix-kbd-move-next",this.Ea);Tf(this,"yt-uix-kbd-nav-move-to",this.V)};
l.unregister=function(){Z(this,"keydown",this.va);W(Eh)};
l.va=function(a,b,c){var d=c.keyCode;if(a=K(a,X(this)))switch(d){case 13:case 32:this.Da(a);break;case 27:c.preventDefault();c.stopImmediatePropagation();a:{for(c=bd(a,"kbdNavMoveOut");!c;){c=K(a.parentElement,X(this));if(!c)break a;c=bd(c,"kbdNavMoveOut")}c=I(c);this.V(c);O("yt-uix-kbd-nav-move-out-done",c)}break;case 40:case 38:if((b=c.target)&&D(a,X(this,"list")))switch(d){case 40:this.Ea(b,a);break;case 38:d=document.activeElement==a,a=Fh(a),b=a.indexOf(b),0>b&&!d||(b=d?a.length-1:(a.length+b-
1)%a.length,a[b].focus(),Gh(this,a[b]))}c.preventDefault()}};
l.Da=function(a){var b=bd(a,"kbdNavMoveIn"),b=I(b);Hh(this,a,b);this.V(b)};
l.wb=function(a){a:{var b=document;try{var c=b&&b.activeElement;break a}catch(d){}c=null}Hh(this,c,a);this.V(a)};
l.V=function(a){if(a)if(Hd(a))a.focus();else{var b=Dd(a,function(a){return Ad(a)?Hd(a):!1});
b?b.focus():(a.setAttribute("tabindex","-1"),a.focus())}};
function Hh(a,b,c){b&&c&&(E(c,X(a)),a=b.id,a||(a="kbd-nav-"+Math.floor(1E6*Math.random()+1),b.id=a),b=a,ad&&c.dataset?c.dataset.kbdNavMoveOut=b:c.setAttribute("data-"+"kbdNavMoveOut".replace(/([A-Z])/g,"-$1").toLowerCase(),b))}
l.Ea=function(a,b){var c=document.activeElement==b,d=Fh(b),e=d.indexOf(a);0>e&&!c||(c=c?0:(e+1)%d.length,d[c].focus(),Gh(this,d[c]))};
function Gh(a,b){if(b){var c=Md(b,"LI");c&&(E(c,X(a,"highlight")),Eh=V(b,"blur",r(function(a){F(a,X(this,"highlight"));W(Eh)},a,c)))}}
function Fh(a){if("UL"!=a.tagName.toUpperCase())return[];a=Bb(zd(a),function(a){return"LI"==a.tagName.toUpperCase()});
return Bb(Cb(a,function(a){return Ug(a)?Dd(a,function(a){return Ad(a)?Hd(a):!1}):!1}),function(a){return!!a})}
;function Ih(){Sf.call(this,"menu");this.f=this.b=null;this.i={};this.w={};this.o=null}
v(Ih,Sf);pa(Ih);function Jh(a){var b=Ih.A();if(D(a,X(b)))return a;var c=b.C(a);return c?c:K(a,X(b,"content"))==b.b?b.f:null}
l=Ih.prototype;l.register=function(){Y(this,"click",this.ua);Y(this,"mouseenter",this.mb);Tf(this,"page-scroll",this.pb);Tf(this,"yt-uix-kbd-nav-move-out-done",function(a){a=this.C(a);Kh(this,a)});
this.o=new L};
l.unregister=function(){Z(this,"click",this.ua);this.f=this.b=null;W(Lb(Tb(this.i)));this.i={};Rb(this.w,function(a){yd(a)},this);
this.w={};Sc(this.o);this.o=null;Ih.D.unregister.call(this)};
l.ua=function(a,b,c){a&&(b=Lh(this,a),!b.disabled&&Ef(c.target,b)&&Mh(this,a))};
l.mb=function(a,b,c){a&&D(a,X(this,"hover"))&&Ef(c.target,Lh(this,a))&&Mh(this,a,!0)};
l.pb=function(){this.b&&this.f&&Nh(this,this.f,this.b)};
function Nh(a,b,c){var d=Oh(a,b);if(d){var e=fe(c);if(e instanceof ld){var f=e.height;e=e.width}else throw Error("missing height argument");d.style.width=ee(e,!0);d.style.height=ee(f,!0)}c==a.b&&(e=9,f=8,D(b,X(a,"reversed"))&&(e^=1,f^=1),D(b,X(a,"flipped"))&&(e^=4,f^=4),a=new H(0,1),d&&pe(b,e,d,f,a,null,197),pe(b,e,c,f,a,null,197))}
function Mh(a,b,c){Ph(a,b)&&!c?Kh(a,b):(Qh(a,b),!a.b||Ef(b,a.b)?a.Qa(b):Ie(a.o,r(a.Qa,a,b)))}
l.Qa=function(a){if(a){var b=Rh(this,a);if(b){jf("yt-uix-menu-before-show",a,b);this.b?Ef(a,this.b)||Kh(this,this.f):(this.f=a,this.b=b,D(a,X(this,"sibling-content"))||(yd(b),document.body.appendChild(b)),b.style.minWidth=Lh(this,a).offsetWidth-2+"px");var c=Oh(this,a);c&&b.parentNode&&b.parentNode.insertBefore(c,b.nextSibling);F(b,X(this,"content-hidden"));Nh(this,a,b);Wc(Lh(this,a),[X(this,"trigger-selected"),"yt-uix-button-toggled"]);O("yt-uix-menu-show",a);Sh(b);Th(this,a);O("yt-uix-kbd-nav-move-in-to",
b);var d=r(this.Hb,this,a),e=r(this.sb,this,a),c=ua(a).toString();this.i[c]=[V(b,"click",e),V(document,"click",d)];D(a,X(this,"indicate-selected"))&&(d=r(this.tb,this,a),this.i[c].push(V(b,"click",d)));D(a,X(this,"hover"))&&(a=r(this.nb,this,a),this.i[c].push(V(document,"mousemove",a)))}}};
l.nb=function(a,b){var c=Lf(b);c&&(Ef(c,Lh(this,a))||Uh(this,c)||Vh(this,a))};
l.Hb=function(a,b){var c=Lf(b);if(c){if(Uh(this,c)){var d=K(c,X(this,"content"));var e=Md(c,"LI");e&&d&&Bd(d,e)&&jf("yt-uix-menu-item-clicked",c);c=K(c,X(this,"close-on-select"));if(!c)return;d=Jh(c)}Kh(this,d||a)}};
function Qh(a,b){if(b){var c=K(b,X(a,"content"));c&&A(pd(X(a),c),function(a){!Ef(a,b)&&Ph(this,a)&&Vh(this,a)},a)}}
function Kh(a,b){if(b){var c=[];c.push(b);var d=Rh(a,b);d&&(d=pd(X(a),d),d=Hb(d),c=c.concat(d),A(c,function(a){Ph(this,a)&&Vh(this,a)},a))}}
function Vh(a,b){if(b){var c=Rh(a,b);Xc(Lh(a,b),[X(a,"trigger-selected"),"yt-uix-button-toggled"]);E(c,X(a,"content-hidden"));var d=Rh(a,b);d&&rd(d,{"aria-expanded":"false"});(d=Oh(a,b))&&d.parentNode&&yd(d);c&&c==a.b&&(a.f.appendChild(c),a.b=null,a.f=null,a.o&&a.o.H("ROOT_MENU_REMOVED"));O("yt-uix-menu-hide",b);c=ua(b).toString();W(a.i[c]);delete a.i[c]}}
l.sb=function(a,b){var c=Lf(b);c&&Wh(this,a,c)};
l.tb=function(a,b){var c=Lf(b);if(c){var d=Lh(this,a);if(d&&(c=Md(c,"LI")))if(c=Kd(c).trim(),d.hasChildNodes()){var e=kh.A();(d=J(X(e,"content"),d))&&Cd(d,c)}else Cd(d,c)}};
function Th(a,b){var c=Rh(a,b);if(c){A(c.children,function(a){"LI"==a.tagName&&rd(a,{role:"menuitem"})});
rd(c,{"aria-expanded":"true"});var d=c.id;d||(d="aria-menu-id-"+ua(c),c.id=d);(c=Lh(a,b))&&rd(c,{"aria-controls":d})}}
function Wh(a,b,c){var d=Rh(a,b);d&&D(b,X(a,"checked"))&&(a=Md(c,"LI"))&&(a=J("yt-ui-menu-item-checked-hid",a))&&(A(pd("yt-ui-menu-item-checked",d),function(a){Zc(a,"yt-ui-menu-item-checked","yt-ui-menu-item-checked-hid")}),Zc(a,"yt-ui-menu-item-checked-hid","yt-ui-menu-item-checked"))}
function Ph(a,b){var c=Rh(a,b);return c?!D(c,X(a,"content-hidden")):!1}
function Sh(a){A(qd(document,"UL",null,a),function(a){a.tabIndex=0;var b=Dh.A();Wc(a,[X(b),X(b,"list")])})}
function Rh(a,b){var c=lf(b,"menu-content-id");return c&&(c=I(c))?(Wc(c,[X(a,"content"),X(a,"content-external")]),c):b==a.f?a.b:J(X(a,"content"),b)}
function Oh(a,b){var c=ua(b).toString(),d=a.w[c];if(!d){d=document.createElement("IFRAME");d.src='javascript:""';var e=[X(a,"mask")];A(Vc(b),function(a){e.push(a+"-mask")});
Wc(d,e);a.w[c]=d}return d||null}
function Lh(a,b){return J(X(a,"trigger"),b)}
function Uh(a,b){return Ef(b,a.b)||Ef(b,a.f)}
;function Xh(){xh.call(this,"clickcard");this.b={};this.f={}}
v(Xh,xh);pa(Xh);l=Xh.prototype;l.register=function(){Xh.D.register.call(this);Y(this,"click",this.ra,"target");Y(this,"click",this.qa,"close")};
l.unregister=function(){Xh.D.unregister.call(this);Z(this,"click",this.ra,"target");Z(this,"click",this.qa,"close");for(var a in this.b)W(this.b[a]);this.b={};for(a in this.f)W(this.f[a]);this.f={}};
l.ra=function(a,b,c){c.preventDefault();b=Md(c.target,"button");if(!b||!b.disabled){if(b=this.g(a,"card-target"))a=document,a=p(b)?a.getElementById(b):b;b=this.C(a);this.g(b,"disabled")||(D(b,X(this,"active"))?(this.hide(a),F(b,X(this,"active"))):(this.show(a),E(b,X(this,"active"))))}};
l.show=function(a){Xh.D.show.call(this,a);var b=this.C(a),c=ua(a).toString();if(!lf(b,"click-outside-persists")){if(this.b[c])return;var b=V(document,"click",r(this.sa,this,a)),d=V(window,"blur",r(this.sa,this,a));this.b[c]=[b,d]}a=V(window,"resize",r(this.Fb,this,a,void 0));this.f[c]=a};
l.hide=function(a){Xh.D.hide.call(this,a);a=ua(a).toString();var b=this.b[a];b&&(W(b),this.b[a]=null);if(b=this.f[a])W(b),delete this.f[a]};
l.sa=function(a,b){var c="yt-uix"+(this.v?"-"+this.v:"")+"-card",d=null;b.target&&(d=K(b.target,c)||K(Jh(b.target),c));(d=d||K(document.activeElement,c)||K(Jh(document.activeElement),c))||this.hide(a)};
l.qa=function(a){(a=K(a,X(this,"card")))&&(a=a.cardTargetNode)&&this.hide(a)};function Yh(){xh.call(this,"hovercard")}
v(Yh,xh);pa(Yh);l=Yh.prototype;l.register=function(){Y(this,"mouseenter",this.za,"target");Y(this,"mouseleave",this.Ba,"target");Y(this,"mouseenter",this.Aa,"card");Y(this,"mouseleave",this.Ca,"card")};
l.unregister=function(){Z(this,"mouseenter",this.za,"target");Z(this,"mouseleave",this.Ba,"target");Z(this,"mouseenter",this.Aa,"card");Z(this,"mouseleave",this.Ca,"card")};
l.za=function(a){if(Zh!=a){Zh&&(this.hide(Zh),Zh=null);var b=r(this.show,this,a),c=parseInt(this.g(a,"delay-show"),10),b=N(b,-1<c?c:200);pf(a,"card-timer",b.toString());Zh=a;a.alt&&(pf(a,"card-alt",a.alt),a.alt="");a.title&&(pf(a,"card-title",a.title),a.title="")}};
l.Ba=function(a){var b=parseInt(this.g(a,"card-timer"),10);window.clearTimeout(b);this.C(a).isCardHidable=!0;b=parseInt(this.g(a,"delay-hide"),10);b=-1<b?b:200;N(r(this.qb,this,a),b);if(b=this.g(a,"card-alt"))a.alt=b;if(b=this.g(a,"card-title"))a.title=b};
l.qb=function(a){this.C(a).isCardHidable&&(this.hide(a),Zh=null)};
l.Aa=function(a){a&&(a.cardRootNode.isCardHidable=!1)};
l.Ca=function(a){a&&this.hide(a.cardTargetNode)};
var Zh=null;function $h(a,b,c,d,e,f){this.b=a;this.B=null;this.i=J("yt-dialog-fg",this.b)||this.b;if(a=J("yt-dialog-title",this.i)){var g="yt-dialog-title-"+ua(this.i);a.setAttribute("id",g);this.i.setAttribute("aria-labelledby",g)}this.i.setAttribute("tabindex","-1");this.R=J("yt-dialog-focus-trap",this.b);this.ia=!1;this.o=new L;this.F=[];this.F.push(Mf(this.b,r(this.xb,this),"yt-dialog-dismiss"));this.F.push(V(this.R,"focus",r(this.lb,this),!0));ai(this);this.Ua=b;this.bb=c;this.ab=d;this.J=e;this.cb=f;this.w=
this.v=null}
var bi={LOADING:"loading",Mb:"content",Tb:"working"};function ci(a,b){a.W()||a.o.subscribe("post-all",b)}
function ai(a){a=J("yt-dialog-fg-content",a.b);var b=[];Rb(bi,function(a){b.push("yt-dialog-show-"+a)});
Xc(a,b);E(a,"yt-dialog-show-content")}
l=$h.prototype;
l.show=function(){if(!this.W()){this.B=document.activeElement;if(!this.ab){this.f||(this.f=I("yt-dialog-bg"),this.f||(this.f=document.createElement("div"),this.f.id="yt-dialog-bg",this.f.className="yt-dialog-bg",document.body.appendChild(this.f)));var a=window,b=a.document;var c=0;if(b){c=b.body;var d=b.documentElement;if(d&&c)if(a=td(a).height,ud(b)&&d.scrollHeight)c=d.scrollHeight!=a?d.scrollHeight:d.offsetHeight;else{var b=d.scrollHeight,e=d.offsetHeight;d.clientHeight!=e&&(b=c.scrollHeight,e=
c.offsetHeight);c=b>a?b>e?b:e:b<e?b:e}else c=0}this.f.style.height=c+"px";Vg(this.f)}this.wa();c=di(this);ei(c);this.v=V(document,"keydown",r(this.rb,this));c=this.b;d=gf("player-added",this.wa,this);pf(c,"player-ready-pubsub-key",d);this.bb&&(this.w=V(document,"click",r(this.Bb,this)));Vg(this.b);this.i.setAttribute("tabindex","0");fi(this);this.J||E(document.body,"yt-dialog-active");lh(kh.A());yh(Xh.A());yh(Yh.A());O("yt-ui-dialog-show-complete",this)}};
function gi(){return Db(pd("yt-dialog"),function(a){return Ug(a)})}
l.wa=function(){if(!this.cb){var a=this.b;Yc(document.body,"hide-players",!0);a&&Yc(a,"preserve-players",!0)}};
function di(a){var b=qd(document,"iframe",null,a.b);A(b,function(a){var b=lf(a,"onload");b&&(b=q(b))&&V(a,"load",b);if(b=lf(a,"src"))a.src=b},a);
return Hb(b)}
function ei(a){A(document.getElementsByTagName("iframe"),function(b){-1==Ab(a,b)&&E(b,"iframe-hid")})}
function hi(){A(pd("iframe-hid"),function(a){F(a,"iframe-hid")})}
l.xb=function(a){a=a.currentTarget;a.disabled||(a=lf(a,"action")||"",this.dismiss(a))};
l.dismiss=function(a){if(!this.W()){this.o.H("pre-all");this.o.H("pre-"+a);Wg(this.b);yh(Xh.A());yh(Yh.A());this.i.setAttribute("tabindex","-1");gi()||(Wg(this.f),this.J||F(document.body,"yt-dialog-active"),Ff(),hi());this.v&&(W(this.v),this.v=null);this.w&&(W(this.w),this.w=null);var b=this.b;if(b){var c=lf(b,"player-ready-pubsub-key");c&&(kf(c),of(b,"player-ready-pubsub-key"))}this.o.H("post-all");O("yt-ui-dialog-hide-complete",this);"cancel"==a&&O("yt-ui-dialog-cancelled",this);this.o&&this.o.H("post-"+
a);this.B&&this.B.focus()}};
l.setTitle=function(a){Cd(J("yt-dialog-title",this.b),a)};
l.rb=function(a){N(r(function(){this.Ua||27!=a.keyCode||this.dismiss("cancel")},this),0);
9==a.keyCode&&a.shiftKey&&D(document.activeElement,"yt-dialog-fg")&&a.preventDefault()};
l.Bb=function(a){"yt-dialog-base"==a.target.className&&this.dismiss("cancel")};
l.W=function(){return this.ia};
l.dispose=function(){Ug(this.b)&&this.dismiss("dispose");W(this.F);this.F.length=0;N(r(function(){this.B=null},this),0);
this.R=this.i=null;this.o.dispose();this.o=null;this.ia=!0};
l.lb=function(a){a.stopPropagation();fi(this)};
function fi(a){N(r(function(){this.i&&this.i.focus()},a),0)}
t("yt.ui.Dialog",$h);function ii(){Sf.call(this,"overlay");this.o=this.f=this.i=this.b=null}
v(ii,Sf);pa(ii);l=ii.prototype;l.register=function(){Y(this,"click",this.ga,"target");Y(this,"click",this.hide,"close");ji(this)};
l.unregister=function(){ii.D.unregister.call(this);Z(this,"click",this.ga,"target");Z(this,"click",this.hide,"close");this.o&&(kf(this.o),this.o=null);this.f&&(W(this.f),this.f=null)};
l.ga=function(a){if(!this.b||!Ug(this.b.b)){var b=this.C(a);a=ki(b,a);b||(b=a?a.overlayParentNode:null);if(b&&a){var c=!!this.g(b,"disable-shortcuts")||!1,d=!!this.g(b,"disable-outside-click-dismiss")||!1;this.b=new $h(a,c);this.i=b;var e=J("yt-dialog-fg",a);if(e){var f=this.g(b,"overlay-class")||"",g=this.g(b,"overlay-style")||"default",h=this.g(b,"overlay-shape")||"default",f=f?f.split(" "):[];f.push(X(this,g));f.push(X(this,h));Wc(e,f)}this.b.show();O("yt-uix-kbd-nav-move-to",e||a);ji(this);c||
d||(c=r(function(a){D(a.target,"yt-dialog-base")&&li(this)},this),this.f=V(J("yt-dialog-base",a),"click",c));
this.N(b,"overlay-shown");O("yt-uix-overlay-shown",b)}}};
function ji(a){a.o||(a.o=gf("yt-uix-overlay-hide",mi));a.b&&ci(a.b,function(){var a=ii.A();a.i=null;a.b.dispose();a.b=null})}
function li(a){if(a.b){var b=a.i;a.b.dismiss("overlayhide");b&&a.N(b,"overlay-hidden");a.i=null;a.f&&(W(a.f),a.f=null);a.b=null}}
function ki(a,b){var c;if(a)if(c=J("yt-dialog",a)){var d=I("body-container");d&&(d.appendChild(c),a.overlayContentNode=c,c.overlayParentNode=a)}else c=a.overlayContentNode;else b&&(c=K(b,"yt-dialog"));return c}
function ni(){var a=ii.A();if(a.i)a=J("yt-dialog-fg-content",a.i.overlayContentNode);else a:{if(a=pd("yt-dialog-fg-content"))for(var b=0;b<a.length;b++){var c=K(a[b],"yt-dialog");if(Ug(c)){a=a[b];break a}}a=null}return a}
l.hide=function(a){a&&a.disabled||O("yt-uix-overlay-hide")};
function mi(){li(ii.A())}
l.show=function(a){this.ga(a)};var oi={},pi=[];function qi(a){a=K(a,"yt-uix-button-subscription-container");return J("yt-dialog",J("unsubscribe-confirmation-overlay-container",a))}
function ri(a,b){W(pi);pi.length=0;oi[b]||(oi[b]=qi(a));ii.A().show(oi[b]);var c=ni();return new se(function(a){pi.push(Mf(c,function(){a()},"overlay-confirmation-unsubscribe-button"))})}
;function si(){var a=M("PLAYER_CONFIG");return a&&a.args&&void 0!==a.args.authuser?!0:!(!M("SESSION_INDEX")&&!M("LOGGED_IN"))}
;function ti(){Sf.call(this,"subscription-button");this.b=this.f=!1}
v(ti,Sf);pa(ti);ti.prototype.register=function(){Y(this,"click",this.ha);Uf(this,Bg,this.Ga);Uf(this,Cg,this.Fa);Uf(this,Dg,this.Ib);Uf(this,Gg,this.Ga);Uf(this,Hg,this.Fa);Uf(this,Ig,this.Jb);Uf(this,Kg,this.zb);Uf(this,Lg,this.yb)};
ti.prototype.unregister=function(){Z(this,"click",this.ha);ti.D.unregister.call(this)};
ti.prototype.i=function(a){return!!this.g(a,"is-subscribed")};
var ui={ja:"hover-enabled",Sa:"yt-uix-button-subscribe",Ta:"yt-uix-button-subscribed",Kb:"ypc-enabled",Va:"yt-uix-button-subscription-container",Wa:"yt-subscription-button-disabled-mask-container"},vi={Lb:"channel-external-id",Xa:"subscriber-count-show-when-subscribed",Ya:"subscriber-count-tooltip",Za:"subscriber-count-title",Nb:"href",Ob:"insecure",ka:"is-subscribed",Pb:"parent-url",Qb:"clicktracking",eb:"show-unsub-confirm-dialog",Rb:"show-unsub-confirm-time-frame",fb:"style-type",la:"subscribed-timestamp",
ma:"subscription-id",Sb:"target",gb:"ypc-enabled"};l=ti.prototype;
l.ha=function(a){var b=this.g(a,"href"),c=this.g(a,"insecure"),d=si(),e=!(this.f&&d),c=c&&!this.b;if(b&&(e||c))a=this.g(a,"target")||"_self",window.open(b,a);else if(!c)if(d)if(b=this.g(a,"channel-external-id"),d=this.g(a,"clicktracking"),e=wi(this,a),c=this.g(a,"parent-url"),this.g(a,"is-subscribed")){var f=this.g(a,"subscription-id"),g=new xg(b,f,e,a,d,c);xi(this,a)?ri(a,b).then(function(){T(Fg,g)}):T(Fg,g)}else T(Ag,new vg(b,e,d,c));
else yi(this,a)};
l.Ga=function(a){this.M(a.b,this.Ia,!0)};
l.Fa=function(a){this.M(a.b,this.Ia,!1)};
l.Ib=function(a){this.M(a.b,this.Ja,!0,a.f)};
l.Jb=function(a){this.M(a.b,this.Ja,!1)};
l.zb=function(a){this.M(a.b,this.kb)};
l.yb=function(a){this.M(a.b,this.jb)};
l.Ja=function(a,b,c){b?(pf(a,vi.ka,"true"),c&&pf(a,vi.ma,c),this.g(a,vi.eb)&&(b=new Qc,pf(a,vi.la,(b.getTime()/1E3).toString()))):(of(a,vi.ka),of(a,vi.la),of(a,vi.ma));zi(this,a)};
function wi(a,b){if(!a.g(b,"ypc-enabled"))return null;var c=a.g(b,"ypc-item-type"),d=a.g(b,"ypc-item-id");return{itemType:c,itemId:d,subscriptionElement:b}}
l.Ia=function(a,b){var c=K(a,ui.Va);Yc(c,ui.Wa,b);a.setAttribute("aria-busy",b?"true":"false");a.disabled=b};
function zi(a,b){var c=a.g(b,vi.fb),d=!!a.g(b,"is-subscribed"),c="-"+c,e=ui.Ta+c;Yc(b,ui.Sa+c,!d);Yc(b,e,d);a.g(b,vi.Ya)&&!a.g(b,vi.Xa)&&(c=X(Xg.A()),Yc(b,c,!d),b.title=d?"":a.g(b,vi.Za));d?N(function(){E(b,ui.ja)},1E3):F(b,ui.ja)}
l.kb=function(a){var b=!!this.g(a,"ypc-item-type"),c=!!this.g(a,"ypc-item-id");!this.g(a,"ypc-enabled")&&b&&c&&(E(a,"ypc-enabled"),pf(a,vi.gb,"true"))};
l.jb=function(a){this.g(a,"ypc-enabled")&&(F(a,"ypc-enabled"),of(a,"ypc-enabled"))};
function Ai(a,b){return Bb(pd(X(a)),function(a){return b==this.g(a,"channel-external-id")},a)}
l.hb=function(a,b,c){var d=Kb(arguments,2);A(a,function(a){b.apply(this,Gb(a,d))},this)};
l.M=function(a,b,c){var d=Ai(this,a);this.hb.apply(this,Gb([d],Kb(arguments,1)))};
function yi(a,b){var c=r(function(a){a.discoverable_subscriptions&&$e("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS",a.discoverable_subscriptions);this.ha(b)},a);
eh(c)}
function xi(a,b){if(a.b||!a.g(b,"show-unsub-confirm-dialog"))return!1;var c=a.g(b,"show-unsub-confirm-time-frame");return"always"==c||"ten_minutes"==c&&(c=parseInt(a.g(b,"subscribed-timestamp"),10),(new Qc).getTime()<1E3*(c+600))?!0:!1}
;function Bi(a){this.b=a;this.G=null;M("SUBSCRIBE_EMBED_HOVERCARD_URL")&&(Ci(this),V(this.b,"mouseover",r(this.o,this)),V(this.b,"mouseout",r(this.aa,this)),V(this.b,"click",r(this.aa,this)),U(Dg,za(this.f,!0),this),U(Ig,za(this.f,!1),this),Di(this))}
function Ci(a){var b={url:M("SUBSCRIBE_EMBED_HOVERCARD_URL"),style:"bubble",hideClickDetection:!0,show:!1,anchor:a.b,relayOpen:"-1"};a=r(a.i,a);$f().open(b,a)}
function Di(a){si()||gf("LOGGED_IN",function(){this.G&&(this.aa(),this.G.close(),this.G=null,Ci(this))},a)}
Bi.prototype.i=function(a){this.G=a;a=ti.A().i(this.b);this.f(a)};
Bi.prototype.o=function(){this.G&&this.G.restyle({show:!0})};
Bi.prototype.aa=function(){this.G&&this.G.restyle({show:!1})};
Bi.prototype.f=function(a){if(this.G){a={isSubscribed:a};try{var b=q("gapi.iframes.SAME_ORIGIN_IFRAMES_FILTER");this.G.send("msg-hovercard-subscription",a,void 0,b)}catch(c){}}};function Ei(a){if(ra(a))return Fi(a);if(ta(a)&&!sa(a)&&!(ta(a)&&0<a.nodeType))return Gi(a);try{return m.JSON.stringify(a),a}catch(b){}}
function Gi(a){return Sb(a,function(a){return Ei(a)})}
function Fi(a){return Cb(a,function(a){return Ei(a)})}
;function Hi(a){this.f=null;this.b=a;a=ag();var b=Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Aa()).toString(36);a&&(cg({role:"ytsubscribe",iframe:a,data:{id:b}}),bg(r(function(a){this.f=a},this),this.b))}
Hi.prototype.register=function(a,b){if(this.f)this.f.register(a,b,this.b);else{var c=r(this.register,this,a,b,this.b);bg(c,this.b)}};
Hi.prototype.send=function(a,b){if(this.f)this.f.send(a,b,void 0,this.b);else{var c=r(this.send,this,a,b);bg(c,this.b)}};function Ii(){this.b=this.f=null}
function Ji(a,b){var c=q("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER");try{var d=c||Ki(a),e=ag();e&&e.send("onytevent",b,void 0,d)}catch(f){}}
Ii.prototype.i=function(a,b){if("pubsub2"==b.eventType){var c=b.topicString;c&&a(c,b.serializedData||null)}};
function Ki(a){if(!a.f){var b=q("gapi.iframes.makeWhiteListIframesFilter")(Pg);a.f=b}return a.f}
;function Li(){this.b=new Ii;this.i=!1;this.f={}}
function Mi(a){A(Qg,function(a){if(!this.f[a.toString()]){var b=U(a,function(b){var c=b?b.Eb():null;b=this.b;b.b&&(c={eventType:"pubsub2",topicString:a.toString(),serializedData:Ei(c)},b.b.send("msg-youtube-pubsub",c))},this);
b&&(this.f[a.toString()]=b)}},a)}
Li.prototype.o=function(a,b){var c=Eb(Rg,function(b){return b.toString()==a});
if(c&&(!c.U||b)){if(c.U)try{var d=qf(c.U,b)}catch(f){return}var e=this.f[c.toString()];e?xf(e,c,d):T(c,d)}};
Li.prototype.v=function(a){Ni(this)&&Ji(this.b,{eventType:"subscribe",channelExternalId:a.b})};
Li.prototype.w=function(a){Ni(this)&&Ji(this.b,{eventType:"unsubscribe",channelExternalId:a.b})};
function Ni(a){return a.i||!!M("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS")}
;function Oi(){Zf(function(){var a=fe(I("yt-subscribe"));a={width:a.width,height:a.height};var b=Pi;$f().ready(a,null,b)})}
function Pi(a){if(a.length&&a[a.length-1]){var b=a[a.length-1];a=b.eurl;var b=b.notificationsPipeSupported,c=I("yt-subscribe"),d=ti.A(),c=J(X(d),c);a&&c&&(ti.A(),pf(c,"parent-url",a));Qi()?(ti.A().b=!0,b&&(ti.A().f=!0)):c&&new Bi(c);a=new Li;U(Dg,a.v,a);U(Ig,a.w,a);if(Qi()){b=a.b;b.b=new Hi(Ki(b));Mi(a);b=a.b;c=r(a.o,a);if(b.b)try{b.b.register("cmd-youtube-pubsub",za(b.i,c))}catch(e){}a.i=!0}}}
function Qi(){var a=ag().getOrigin();return Fb(Pg,a)}
;function Ri(a){for(var b=0;b<a.length;b++){var c=a[b];"send_follow_on_ping_action"==c.name&&c.data&&c.data.follow_on_url&&(c=c.data.follow_on_url)&&(M("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)?kg(c,void 0):rg(c))}}
;function Si(a){P.call(this,1,arguments);this.b=a}
v(Si,P);function Ti(a,b){P.call(this,2,arguments);this.f=a;this.b=b}
v(Ti,P);function Ui(a,b,c,d){P.call(this,1,arguments);this.b=b;this.f=c||null;this.itemId=d||null}
v(Ui,P);function Vi(a,b){P.call(this,1,arguments);this.f=a;this.b=b||null}
v(Vi,P);function Wi(a){P.call(this,1,arguments)}
v(Wi,P);var Xi=new R("ypc-core-load",Si),Yi=new R("ypc-guide-sync-success",Ti),Zi=new R("ypc-purchase-success",Ui),$i=new R("ypc-subscription-cancel",Wi),aj=new R("ypc-subscription-cancel-success",Vi),bj=new R("ypc-init-subscription",Wi);var cj=!1,dj=[];function ej(a){a.b?cj?T(Eg,a):T(Xi,new Si(function(){T(bj,new Wi(a.b))})):fj(a.f,a.o,a.i,a.source)}
function gj(a){a.b?cj?T(Jg,a):T(Xi,new Si(function(){T($i,new Wi(a.b))})):hj(a.f,a.v,a.o,a.i,a.source)}
function ij(a){jj(Hb(a.b))}
function kj(a){lj(Hb(a.b))}
function mj(a){nj(a.i,a.f,a.b)}
function oj(a){var b=a.itemId,c=a.b.subscriptionId;b&&c&&T(Dg,new wg(b,c,a.b.channelInfo))}
function pj(a){var b=a.b;Rb(a.f,function(a,d){T(Dg,new wg(d,a,b[d]))})}
function qj(a){T(Ig,new tg(a.f.itemId));a.b&&a.b.length&&(rj(a.b,Ig),rj(a.b,Kg))}
function fj(a,b,c,d){var e=new tg(a);T(Bg,e);var f={};f.c=a;c&&(f.eurl=c);d&&(f.source=d);c={};(d=M("PLAYBACK_ID"))&&(c.plid=d);(d=M("EVENT_ID"))&&(c.ei=d);b&&sj(b,c);jg("/subscription_ajax?action_create_subscription_to_channel=1",{method:"POST",La:f,L:c,O:function(b,c){var d=c.response;T(Dg,new wg(a,d.id,d.channel_info));d.show_feed_privacy_dialog&&O("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG",a);d.actions&&Ri(d.actions)},
fa:function(){T(Cg,e)}})}
function hj(a,b,c,d,e){var f=new tg(a);T(Gg,f);var g={};g.c=a;d&&(g.eurl=d);e&&(g.source=e);d={};d.c=a;d.s=b;(a=M("PLAYBACK_ID"))&&(d.plid=a);(a=M("EVENT_ID"))&&(d.ei=a);c&&sj(c,d);jg("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",La:g,L:d,O:function(a,b){var c=b.response;T(Ig,f);c.actions&&Ri(c.actions)},
fa:function(){T(Hg,f)}})}
function nj(a,b,c){if(a){var d={};d.channel_id=a;switch(b){case "receive-all-updates":d.receive_all_updates=!0;break;case "receive-no-updates":d.receive_no_updates=!0;d.receive_post_updates=!1;break;case "receive-highlight-updates":d.receive_all_updates=!1;d.receive_no_updates=!1;break;default:return}null===c||d.receive_no_updates||(d.receive_post_updates=c);var e=new ug(a,b,c);jg("/subscription_ajax?action_update_subscription_preferences=1",{method:"POST",L:d,onError:function(){T(Og,e)},
O:function(){T(Ng,e)}})}}
function jj(a){if(a.length){var b=Jb(a,0,40);T("subscription-batch-subscribe-loading");rj(b,Bg);var c={};c.a=b.join(",");var d=function(){T("subscription-batch-subscribe-loaded");rj(b,Cg)};
jg("/subscription_ajax?action_create_subscription_to_all=1",{method:"POST",L:c,O:function(c,f){d();var e=f.response,h=e.id;if("array"==qa(h)&&h.length==b.length){var k=e.channel_info_map;A(h,function(a,c){var d=b[c];T(Dg,new wg(d,a,k[d]))});
a.length?jj(a):T("subscription-batch-subscribe-finished")}},
onError:function(){d();T("subscription-batch-subscribe-failure")}})}}
function lj(a){if(a.length){var b=Jb(a,0,40);T("subscription-batch-unsubscribe-loading");rj(b,Gg);var c={};c.c=b.join(",");var d=function(){T("subscription-batch-unsubscribe-loaded");rj(b,Hg)};
jg("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",L:c,O:function(){d();rj(b,Ig);a.length&&lj(a)},
onError:function(){d()}})}}
function rj(a,b){A(a,function(a){T(b,new tg(a))})}
function sj(a,b){var c=Xf(a),d;for(d in c)b[d]=c[d]}
;t("yt.setConfig",$e);t("yt.config.set",$e);t("ytbin.www.subscribeembed.init",function(){cj=!0;dj.push(U(Ag,ej),U(Fg,gj));cj||dj.push(U(Eg,ej),U(Jg,gj),U(yg,ij),U(zg,kj),U(Mg,mj),U(Zi,oj),U(aj,qj),U(Yi,pj));var a=ti.A(),b=X(a);b in Wf||(a.register(),Tf(a,"yt-uix-init-"+b,a.init),Tf(a,"yt-uix-dispose-"+b,a.dispose),Wf[b]=a);Oi()});}).call(this);
