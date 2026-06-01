const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AdminDashboardPage-C8sNkmRt.js","assets/CustomDatePicker-CLaZw1jO.js","assets/UserDashboardPage-2ZMJOFRd.js"])))=>i.map(i=>d[i]);
function Qx(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var r2=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ey(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var v0={exports:{}},mc={},_0={exports:{}},Je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ca=Symbol.for("react.element"),ty=Symbol.for("react.portal"),ny=Symbol.for("react.fragment"),iy=Symbol.for("react.strict_mode"),ry=Symbol.for("react.profiler"),sy=Symbol.for("react.provider"),oy=Symbol.for("react.context"),ay=Symbol.for("react.forward_ref"),ly=Symbol.for("react.suspense"),cy=Symbol.for("react.memo"),uy=Symbol.for("react.lazy"),Pp=Symbol.iterator;function dy(t){return t===null||typeof t!="object"?null:(t=Pp&&t[Pp]||t["@@iterator"],typeof t=="function"?t:null)}var x0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y0=Object.assign,S0={};function eo(t,e,n){this.props=t,this.context=e,this.refs=S0,this.updater=n||x0}eo.prototype.isReactComponent={};eo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};eo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function M0(){}M0.prototype=eo.prototype;function Kf(t,e,n){this.props=t,this.context=e,this.refs=S0,this.updater=n||x0}var Zf=Kf.prototype=new M0;Zf.constructor=Kf;y0(Zf,eo.prototype);Zf.isPureReactComponent=!0;var Lp=Array.isArray,E0=Object.prototype.hasOwnProperty,Jf={current:null},w0={key:!0,ref:!0,__self:!0,__source:!0};function T0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)E0.call(e,i)&&!w0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ca,type:t,key:s,ref:o,props:r,_owner:Jf.current}}function fy(t,e){return{$$typeof:ca,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Qf(t){return typeof t=="object"&&t!==null&&t.$$typeof===ca}function hy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Np=/\/+/g;function Wc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?hy(""+t.key):e.toString(36)}function hl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ca:case ty:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Wc(o,0):i,Lp(r)?(n="",t!=null&&(n=t.replace(Np,"$&/")+"/"),hl(r,e,n,"",function(c){return c})):r!=null&&(Qf(r)&&(r=fy(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Np,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Lp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Wc(s,a);o+=hl(s,e,n,l,r)}else if(l=dy(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Wc(s,a++),o+=hl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Aa(t,e,n){if(t==null)return t;var i=[],r=0;return hl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function py(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var un={current:null},pl={transition:null},my={ReactCurrentDispatcher:un,ReactCurrentBatchConfig:pl,ReactCurrentOwner:Jf};function A0(){throw Error("act(...) is not supported in production builds of React.")}Je.Children={map:Aa,forEach:function(t,e,n){Aa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Aa(t,function(){e++}),e},toArray:function(t){return Aa(t,function(e){return e})||[]},only:function(t){if(!Qf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Je.Component=eo;Je.Fragment=ny;Je.Profiler=ry;Je.PureComponent=Kf;Je.StrictMode=iy;Je.Suspense=ly;Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=my;Je.act=A0;Je.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=y0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Jf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)E0.call(e,l)&&!w0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ca,type:t.type,key:r,ref:s,props:i,_owner:o}};Je.createContext=function(t){return t={$$typeof:oy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:sy,_context:t},t.Consumer=t};Je.createElement=T0;Je.createFactory=function(t){var e=T0.bind(null,t);return e.type=t,e};Je.createRef=function(){return{current:null}};Je.forwardRef=function(t){return{$$typeof:ay,render:t}};Je.isValidElement=Qf;Je.lazy=function(t){return{$$typeof:uy,_payload:{_status:-1,_result:t},_init:py}};Je.memo=function(t,e){return{$$typeof:cy,type:t,compare:e===void 0?null:e}};Je.startTransition=function(t){var e=pl.transition;pl.transition={};try{t()}finally{pl.transition=e}};Je.unstable_act=A0;Je.useCallback=function(t,e){return un.current.useCallback(t,e)};Je.useContext=function(t){return un.current.useContext(t)};Je.useDebugValue=function(){};Je.useDeferredValue=function(t){return un.current.useDeferredValue(t)};Je.useEffect=function(t,e){return un.current.useEffect(t,e)};Je.useId=function(){return un.current.useId()};Je.useImperativeHandle=function(t,e,n){return un.current.useImperativeHandle(t,e,n)};Je.useInsertionEffect=function(t,e){return un.current.useInsertionEffect(t,e)};Je.useLayoutEffect=function(t,e){return un.current.useLayoutEffect(t,e)};Je.useMemo=function(t,e){return un.current.useMemo(t,e)};Je.useReducer=function(t,e,n){return un.current.useReducer(t,e,n)};Je.useRef=function(t){return un.current.useRef(t)};Je.useState=function(t){return un.current.useState(t)};Je.useSyncExternalStore=function(t,e,n){return un.current.useSyncExternalStore(t,e,n)};Je.useTransition=function(){return un.current.useTransition()};Je.version="18.3.1";_0.exports=Je;var te=_0.exports;const b0=ey(te),gy=Qx({__proto__:null,default:b0},[te]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vy=te,_y=Symbol.for("react.element"),xy=Symbol.for("react.fragment"),yy=Object.prototype.hasOwnProperty,Sy=vy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,My={key:!0,ref:!0,__self:!0,__source:!0};function R0(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)yy.call(e,i)&&!My.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:_y,type:t,key:s,ref:o,props:r,_owner:Sy.current}}mc.Fragment=xy;mc.jsx=R0;mc.jsxs=R0;v0.exports=mc;var L=v0.exports,nd={},C0={exports:{}},Ln={},P0={exports:{}},L0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,X){var Z=O.length;O.push(X);e:for(;0<Z;){var ie=Z-1>>>1,le=O[ie];if(0<r(le,X))O[ie]=X,O[Z]=le,Z=ie;else break e}}function n(O){return O.length===0?null:O[0]}function i(O){if(O.length===0)return null;var X=O[0],Z=O.pop();if(Z!==X){O[0]=Z;e:for(var ie=0,le=O.length,Fe=le>>>1;ie<Fe;){var Ue=2*(ie+1)-1,ce=O[Ue],Y=Ue+1,oe=O[Y];if(0>r(ce,Z))Y<le&&0>r(oe,ce)?(O[ie]=oe,O[Y]=Z,ie=Y):(O[ie]=ce,O[Ue]=Z,ie=Ue);else if(Y<le&&0>r(oe,Z))O[ie]=oe,O[Y]=Z,ie=Y;else break e}}return X}function r(O,X){var Z=O.sortIndex-X.sortIndex;return Z!==0?Z:O.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,h=null,d=3,g=!1,v=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(O){for(var X=n(c);X!==null;){if(X.callback===null)i(c);else if(X.startTime<=O)i(c),X.sortIndex=X.expirationTime,e(l,X);else break;X=n(c)}}function M(O){if(y=!1,_(O),!v)if(n(l)!==null)v=!0,B(A);else{var X=n(c);X!==null&&G(M,X.startTime-O)}}function A(O,X){v=!1,y&&(y=!1,f(x),x=-1),g=!0;var Z=d;try{for(_(X),h=n(l);h!==null&&(!(h.expirationTime>X)||O&&!P());){var ie=h.callback;if(typeof ie=="function"){h.callback=null,d=h.priorityLevel;var le=ie(h.expirationTime<=X);X=t.unstable_now(),typeof le=="function"?h.callback=le:h===n(l)&&i(l),_(X)}else i(l);h=n(l)}if(h!==null)var Fe=!0;else{var Ue=n(c);Ue!==null&&G(M,Ue.startTime-X),Fe=!1}return Fe}finally{h=null,d=Z,g=!1}}var w=!1,R=null,x=-1,b=5,C=-1;function P(){return!(t.unstable_now()-C<b)}function U(){if(R!==null){var O=t.unstable_now();C=O;var X=!0;try{X=R(!0,O)}finally{X?$():(w=!1,R=null)}}else w=!1}var $;if(typeof p=="function")$=function(){p(U)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,I=q.port2;q.port1.onmessage=U,$=function(){I.postMessage(null)}}else $=function(){m(U,0)};function B(O){R=O,w||(w=!0,$())}function G(O,X){x=m(function(){O(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){v||g||(v=!0,B(A))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(O){switch(d){case 1:case 2:case 3:var X=3;break;default:X=d}var Z=d;d=X;try{return O()}finally{d=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,X){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var Z=d;d=O;try{return X()}finally{d=Z}},t.unstable_scheduleCallback=function(O,X,Z){var ie=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ie+Z:ie):Z=ie,O){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=Z+le,O={id:u++,callback:X,priorityLevel:O,startTime:Z,expirationTime:le,sortIndex:-1},Z>ie?(O.sortIndex=Z,e(c,O),n(l)===null&&O===n(c)&&(y?(f(x),x=-1):y=!0,G(M,Z-ie))):(O.sortIndex=le,e(l,O),v||g||(v=!0,B(A))),O},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(O){var X=d;return function(){var Z=d;d=X;try{return O.apply(this,arguments)}finally{d=Z}}}})(L0);P0.exports=L0;var Ey=P0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wy=te,Pn=Ey;function ae(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var N0=new Set,Vo={};function ns(t,e){Hs(t,e),Hs(t+"Capture",e)}function Hs(t,e){for(Vo[t]=e,t=0;t<e.length;t++)N0.add(e[t])}var ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),id=Object.prototype.hasOwnProperty,Ty=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Dp={},Ip={};function Ay(t){return id.call(Ip,t)?!0:id.call(Dp,t)?!1:Ty.test(t)?Ip[t]=!0:(Dp[t]=!0,!1)}function by(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Ry(t,e,n,i){if(e===null||typeof e>"u"||by(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function dn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var $t={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){$t[t]=new dn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];$t[e]=new dn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){$t[t]=new dn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){$t[t]=new dn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){$t[t]=new dn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){$t[t]=new dn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){$t[t]=new dn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){$t[t]=new dn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){$t[t]=new dn(t,5,!1,t.toLowerCase(),null,!1,!1)});var eh=/[\-:]([a-z])/g;function th(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(eh,th);$t[e]=new dn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(eh,th);$t[e]=new dn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(eh,th);$t[e]=new dn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){$t[t]=new dn(t,1,!1,t.toLowerCase(),null,!1,!1)});$t.xlinkHref=new dn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){$t[t]=new dn(t,1,!1,t.toLowerCase(),null,!0,!0)});function nh(t,e,n,i){var r=$t.hasOwnProperty(e)?$t[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Ry(e,n,r,i)&&(n=null),i||r===null?Ay(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var ji=wy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ba=Symbol.for("react.element"),Ms=Symbol.for("react.portal"),Es=Symbol.for("react.fragment"),ih=Symbol.for("react.strict_mode"),rd=Symbol.for("react.profiler"),D0=Symbol.for("react.provider"),I0=Symbol.for("react.context"),rh=Symbol.for("react.forward_ref"),sd=Symbol.for("react.suspense"),od=Symbol.for("react.suspense_list"),sh=Symbol.for("react.memo"),nr=Symbol.for("react.lazy"),U0=Symbol.for("react.offscreen"),Up=Symbol.iterator;function lo(t){return t===null||typeof t!="object"?null:(t=Up&&t[Up]||t["@@iterator"],typeof t=="function"?t:null)}var Et=Object.assign,jc;function To(t){if(jc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);jc=e&&e[1]||""}return`
`+jc+t}var Xc=!1;function qc(t,e){if(!t||Xc)return"";Xc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Xc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?To(t):""}function Cy(t){switch(t.tag){case 5:return To(t.type);case 16:return To("Lazy");case 13:return To("Suspense");case 19:return To("SuspenseList");case 0:case 2:case 15:return t=qc(t.type,!1),t;case 11:return t=qc(t.type.render,!1),t;case 1:return t=qc(t.type,!0),t;default:return""}}function ad(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Es:return"Fragment";case Ms:return"Portal";case rd:return"Profiler";case ih:return"StrictMode";case sd:return"Suspense";case od:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case I0:return(t.displayName||"Context")+".Consumer";case D0:return(t._context.displayName||"Context")+".Provider";case rh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case sh:return e=t.displayName||null,e!==null?e:ad(t.type)||"Memo";case nr:e=t._payload,t=t._init;try{return ad(t(e))}catch{}}return null}function Py(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ad(e);case 8:return e===ih?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function yr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function F0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Ly(t){var e=F0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ra(t){t._valueTracker||(t._valueTracker=Ly(t))}function O0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=F0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Fl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ld(t,e){var n=e.checked;return Et({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Fp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=yr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function B0(t,e){e=e.checked,e!=null&&nh(t,"checked",e,!1)}function cd(t,e){B0(t,e);var n=yr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ud(t,e.type,n):e.hasOwnProperty("defaultValue")&&ud(t,e.type,yr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Op(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ud(t,e,n){(e!=="number"||Fl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ao=Array.isArray;function Is(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+yr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function dd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ae(91));return Et({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Bp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ae(92));if(Ao(n)){if(1<n.length)throw Error(ae(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:yr(n)}}function k0(t,e){var n=yr(e.value),i=yr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function kp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function z0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?z0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ca,V0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ca=Ca||document.createElement("div"),Ca.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ca.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ho(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var No={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ny=["Webkit","ms","Moz","O"];Object.keys(No).forEach(function(t){Ny.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),No[e]=No[t]})});function H0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||No.hasOwnProperty(t)&&No[t]?(""+e).trim():e+"px"}function G0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=H0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Dy=Et({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hd(t,e){if(e){if(Dy[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ae(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ae(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ae(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ae(62))}}function pd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var md=null;function oh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var gd=null,Us=null,Fs=null;function zp(t){if(t=fa(t)){if(typeof gd!="function")throw Error(ae(280));var e=t.stateNode;e&&(e=yc(e),gd(t.stateNode,t.type,e))}}function W0(t){Us?Fs?Fs.push(t):Fs=[t]:Us=t}function j0(){if(Us){var t=Us,e=Fs;if(Fs=Us=null,zp(t),e)for(t=0;t<e.length;t++)zp(e[t])}}function X0(t,e){return t(e)}function q0(){}var $c=!1;function $0(t,e,n){if($c)return t(e,n);$c=!0;try{return X0(t,e,n)}finally{$c=!1,(Us!==null||Fs!==null)&&(q0(),j0())}}function Go(t,e){var n=t.stateNode;if(n===null)return null;var i=yc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ae(231,e,typeof n));return n}var vd=!1;if(ki)try{var co={};Object.defineProperty(co,"passive",{get:function(){vd=!0}}),window.addEventListener("test",co,co),window.removeEventListener("test",co,co)}catch{vd=!1}function Iy(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Do=!1,Ol=null,Bl=!1,_d=null,Uy={onError:function(t){Do=!0,Ol=t}};function Fy(t,e,n,i,r,s,o,a,l){Do=!1,Ol=null,Iy.apply(Uy,arguments)}function Oy(t,e,n,i,r,s,o,a,l){if(Fy.apply(this,arguments),Do){if(Do){var c=Ol;Do=!1,Ol=null}else throw Error(ae(198));Bl||(Bl=!0,_d=c)}}function is(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Y0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Vp(t){if(is(t)!==t)throw Error(ae(188))}function By(t){var e=t.alternate;if(!e){if(e=is(t),e===null)throw Error(ae(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Vp(r),t;if(s===i)return Vp(r),e;s=s.sibling}throw Error(ae(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ae(189))}}if(n.alternate!==i)throw Error(ae(190))}if(n.tag!==3)throw Error(ae(188));return n.stateNode.current===n?t:e}function K0(t){return t=By(t),t!==null?Z0(t):null}function Z0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Z0(t);if(e!==null)return e;t=t.sibling}return null}var J0=Pn.unstable_scheduleCallback,Hp=Pn.unstable_cancelCallback,ky=Pn.unstable_shouldYield,zy=Pn.unstable_requestPaint,Lt=Pn.unstable_now,Vy=Pn.unstable_getCurrentPriorityLevel,ah=Pn.unstable_ImmediatePriority,Q0=Pn.unstable_UserBlockingPriority,kl=Pn.unstable_NormalPriority,Hy=Pn.unstable_LowPriority,ev=Pn.unstable_IdlePriority,gc=null,vi=null;function Gy(t){if(vi&&typeof vi.onCommitFiberRoot=="function")try{vi.onCommitFiberRoot(gc,t,void 0,(t.current.flags&128)===128)}catch{}}var ei=Math.clz32?Math.clz32:Xy,Wy=Math.log,jy=Math.LN2;function Xy(t){return t>>>=0,t===0?32:31-(Wy(t)/jy|0)|0}var Pa=64,La=4194304;function bo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function zl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=bo(a):(s&=o,s!==0&&(i=bo(s)))}else o=n&~r,o!==0?i=bo(o):s!==0&&(i=bo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ei(e),r=1<<n,i|=t[n],e&=~r;return i}function qy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $y(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ei(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=qy(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function xd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function tv(){var t=Pa;return Pa<<=1,!(Pa&4194240)&&(Pa=64),t}function Yc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ua(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ei(e),t[e]=n}function Yy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ei(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function lh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ei(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var lt=0;function nv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var iv,ch,rv,sv,ov,yd=!1,Na=[],dr=null,fr=null,hr=null,Wo=new Map,jo=new Map,rr=[],Ky="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gp(t,e){switch(t){case"focusin":case"focusout":dr=null;break;case"dragenter":case"dragleave":fr=null;break;case"mouseover":case"mouseout":hr=null;break;case"pointerover":case"pointerout":Wo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":jo.delete(e.pointerId)}}function uo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=fa(e),e!==null&&ch(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Zy(t,e,n,i,r){switch(e){case"focusin":return dr=uo(dr,t,e,n,i,r),!0;case"dragenter":return fr=uo(fr,t,e,n,i,r),!0;case"mouseover":return hr=uo(hr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Wo.set(s,uo(Wo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,jo.set(s,uo(jo.get(s)||null,t,e,n,i,r)),!0}return!1}function av(t){var e=kr(t.target);if(e!==null){var n=is(e);if(n!==null){if(e=n.tag,e===13){if(e=Y0(n),e!==null){t.blockedOn=e,ov(t.priority,function(){rv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ml(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Sd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);md=i,n.target.dispatchEvent(i),md=null}else return e=fa(n),e!==null&&ch(e),t.blockedOn=n,!1;e.shift()}return!0}function Wp(t,e,n){ml(t)&&n.delete(e)}function Jy(){yd=!1,dr!==null&&ml(dr)&&(dr=null),fr!==null&&ml(fr)&&(fr=null),hr!==null&&ml(hr)&&(hr=null),Wo.forEach(Wp),jo.forEach(Wp)}function fo(t,e){t.blockedOn===e&&(t.blockedOn=null,yd||(yd=!0,Pn.unstable_scheduleCallback(Pn.unstable_NormalPriority,Jy)))}function Xo(t){function e(r){return fo(r,t)}if(0<Na.length){fo(Na[0],t);for(var n=1;n<Na.length;n++){var i=Na[n];i.blockedOn===t&&(i.blockedOn=null)}}for(dr!==null&&fo(dr,t),fr!==null&&fo(fr,t),hr!==null&&fo(hr,t),Wo.forEach(e),jo.forEach(e),n=0;n<rr.length;n++)i=rr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<rr.length&&(n=rr[0],n.blockedOn===null);)av(n),n.blockedOn===null&&rr.shift()}var Os=ji.ReactCurrentBatchConfig,Vl=!0;function Qy(t,e,n,i){var r=lt,s=Os.transition;Os.transition=null;try{lt=1,uh(t,e,n,i)}finally{lt=r,Os.transition=s}}function eS(t,e,n,i){var r=lt,s=Os.transition;Os.transition=null;try{lt=4,uh(t,e,n,i)}finally{lt=r,Os.transition=s}}function uh(t,e,n,i){if(Vl){var r=Sd(t,e,n,i);if(r===null)su(t,e,i,Hl,n),Gp(t,i);else if(Zy(r,t,e,n,i))i.stopPropagation();else if(Gp(t,i),e&4&&-1<Ky.indexOf(t)){for(;r!==null;){var s=fa(r);if(s!==null&&iv(s),s=Sd(t,e,n,i),s===null&&su(t,e,i,Hl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else su(t,e,i,null,n)}}var Hl=null;function Sd(t,e,n,i){if(Hl=null,t=oh(i),t=kr(t),t!==null)if(e=is(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Y0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Hl=t,null}function lv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Vy()){case ah:return 1;case Q0:return 4;case kl:case Hy:return 16;case ev:return 536870912;default:return 16}default:return 16}}var ar=null,dh=null,gl=null;function cv(){if(gl)return gl;var t,e=dh,n=e.length,i,r="value"in ar?ar.value:ar.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return gl=r.slice(t,1<i?1-i:void 0)}function vl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Da(){return!0}function jp(){return!1}function Nn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Da:jp,this.isPropagationStopped=jp,this}return Et(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Da)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Da)},persist:function(){},isPersistent:Da}),e}var to={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fh=Nn(to),da=Et({},to,{view:0,detail:0}),tS=Nn(da),Kc,Zc,ho,vc=Et({},da,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ho&&(ho&&t.type==="mousemove"?(Kc=t.screenX-ho.screenX,Zc=t.screenY-ho.screenY):Zc=Kc=0,ho=t),Kc)},movementY:function(t){return"movementY"in t?t.movementY:Zc}}),Xp=Nn(vc),nS=Et({},vc,{dataTransfer:0}),iS=Nn(nS),rS=Et({},da,{relatedTarget:0}),Jc=Nn(rS),sS=Et({},to,{animationName:0,elapsedTime:0,pseudoElement:0}),oS=Nn(sS),aS=Et({},to,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),lS=Nn(aS),cS=Et({},to,{data:0}),qp=Nn(cS),uS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=fS[t])?!!e[t]:!1}function hh(){return hS}var pS=Et({},da,{key:function(t){if(t.key){var e=uS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=vl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?dS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hh,charCode:function(t){return t.type==="keypress"?vl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?vl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),mS=Nn(pS),gS=Et({},vc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$p=Nn(gS),vS=Et({},da,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hh}),_S=Nn(vS),xS=Et({},to,{propertyName:0,elapsedTime:0,pseudoElement:0}),yS=Nn(xS),SS=Et({},vc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),MS=Nn(SS),ES=[9,13,27,32],ph=ki&&"CompositionEvent"in window,Io=null;ki&&"documentMode"in document&&(Io=document.documentMode);var wS=ki&&"TextEvent"in window&&!Io,uv=ki&&(!ph||Io&&8<Io&&11>=Io),Yp=" ",Kp=!1;function dv(t,e){switch(t){case"keyup":return ES.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ws=!1;function TS(t,e){switch(t){case"compositionend":return fv(e);case"keypress":return e.which!==32?null:(Kp=!0,Yp);case"textInput":return t=e.data,t===Yp&&Kp?null:t;default:return null}}function AS(t,e){if(ws)return t==="compositionend"||!ph&&dv(t,e)?(t=cv(),gl=dh=ar=null,ws=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return uv&&e.locale!=="ko"?null:e.data;default:return null}}var bS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!bS[t.type]:e==="textarea"}function hv(t,e,n,i){W0(i),e=Gl(e,"onChange"),0<e.length&&(n=new fh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Uo=null,qo=null;function RS(t){wv(t,0)}function _c(t){var e=bs(t);if(O0(e))return t}function CS(t,e){if(t==="change")return e}var pv=!1;if(ki){var Qc;if(ki){var eu="oninput"in document;if(!eu){var Jp=document.createElement("div");Jp.setAttribute("oninput","return;"),eu=typeof Jp.oninput=="function"}Qc=eu}else Qc=!1;pv=Qc&&(!document.documentMode||9<document.documentMode)}function Qp(){Uo&&(Uo.detachEvent("onpropertychange",mv),qo=Uo=null)}function mv(t){if(t.propertyName==="value"&&_c(qo)){var e=[];hv(e,qo,t,oh(t)),$0(RS,e)}}function PS(t,e,n){t==="focusin"?(Qp(),Uo=e,qo=n,Uo.attachEvent("onpropertychange",mv)):t==="focusout"&&Qp()}function LS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return _c(qo)}function NS(t,e){if(t==="click")return _c(e)}function DS(t,e){if(t==="input"||t==="change")return _c(e)}function IS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ni=typeof Object.is=="function"?Object.is:IS;function $o(t,e){if(ni(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!id.call(e,r)||!ni(t[r],e[r]))return!1}return!0}function em(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function tm(t,e){var n=em(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=em(n)}}function gv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?gv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function vv(){for(var t=window,e=Fl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Fl(t.document)}return e}function mh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function US(t){var e=vv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&gv(n.ownerDocument.documentElement,n)){if(i!==null&&mh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=tm(n,s);var o=tm(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var FS=ki&&"documentMode"in document&&11>=document.documentMode,Ts=null,Md=null,Fo=null,Ed=!1;function nm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ed||Ts==null||Ts!==Fl(i)||(i=Ts,"selectionStart"in i&&mh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Fo&&$o(Fo,i)||(Fo=i,i=Gl(Md,"onSelect"),0<i.length&&(e=new fh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ts)))}function Ia(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var As={animationend:Ia("Animation","AnimationEnd"),animationiteration:Ia("Animation","AnimationIteration"),animationstart:Ia("Animation","AnimationStart"),transitionend:Ia("Transition","TransitionEnd")},tu={},_v={};ki&&(_v=document.createElement("div").style,"AnimationEvent"in window||(delete As.animationend.animation,delete As.animationiteration.animation,delete As.animationstart.animation),"TransitionEvent"in window||delete As.transitionend.transition);function xc(t){if(tu[t])return tu[t];if(!As[t])return t;var e=As[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in _v)return tu[t]=e[n];return t}var xv=xc("animationend"),yv=xc("animationiteration"),Sv=xc("animationstart"),Mv=xc("transitionend"),Ev=new Map,im="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wr(t,e){Ev.set(t,e),ns(e,[t])}for(var nu=0;nu<im.length;nu++){var iu=im[nu],OS=iu.toLowerCase(),BS=iu[0].toUpperCase()+iu.slice(1);wr(OS,"on"+BS)}wr(xv,"onAnimationEnd");wr(yv,"onAnimationIteration");wr(Sv,"onAnimationStart");wr("dblclick","onDoubleClick");wr("focusin","onFocus");wr("focusout","onBlur");wr(Mv,"onTransitionEnd");Hs("onMouseEnter",["mouseout","mouseover"]);Hs("onMouseLeave",["mouseout","mouseover"]);Hs("onPointerEnter",["pointerout","pointerover"]);Hs("onPointerLeave",["pointerout","pointerover"]);ns("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ns("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ns("onBeforeInput",["compositionend","keypress","textInput","paste"]);ns("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ns("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ns("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ro));function rm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Oy(i,e,void 0,t),t.currentTarget=null}function wv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;rm(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;rm(r,a,c),s=l}}}if(Bl)throw t=_d,Bl=!1,_d=null,t}function _t(t,e){var n=e[Rd];n===void 0&&(n=e[Rd]=new Set);var i=t+"__bubble";n.has(i)||(Tv(e,t,2,!1),n.add(i))}function ru(t,e,n){var i=0;e&&(i|=4),Tv(n,t,i,e)}var Ua="_reactListening"+Math.random().toString(36).slice(2);function Yo(t){if(!t[Ua]){t[Ua]=!0,N0.forEach(function(n){n!=="selectionchange"&&(kS.has(n)||ru(n,!1,t),ru(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ua]||(e[Ua]=!0,ru("selectionchange",!1,e))}}function Tv(t,e,n,i){switch(lv(e)){case 1:var r=Qy;break;case 4:r=eS;break;default:r=uh}n=r.bind(null,e,n,t),r=void 0,!vd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function su(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=kr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}$0(function(){var c=s,u=oh(n),h=[];e:{var d=Ev.get(t);if(d!==void 0){var g=fh,v=t;switch(t){case"keypress":if(vl(n)===0)break e;case"keydown":case"keyup":g=mS;break;case"focusin":v="focus",g=Jc;break;case"focusout":v="blur",g=Jc;break;case"beforeblur":case"afterblur":g=Jc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Xp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=iS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=_S;break;case xv:case yv:case Sv:g=oS;break;case Mv:g=yS;break;case"scroll":g=tS;break;case"wheel":g=MS;break;case"copy":case"cut":case"paste":g=lS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=$p}var y=(e&4)!==0,m=!y&&t==="scroll",f=y?d!==null?d+"Capture":null:d;y=[];for(var p=c,_;p!==null;){_=p;var M=_.stateNode;if(_.tag===5&&M!==null&&(_=M,f!==null&&(M=Go(p,f),M!=null&&y.push(Ko(p,M,_)))),m)break;p=p.return}0<y.length&&(d=new g(d,v,null,n,u),h.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&n!==md&&(v=n.relatedTarget||n.fromElement)&&(kr(v)||v[zi]))break e;if((g||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=c,v=v?kr(v):null,v!==null&&(m=is(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=c),g!==v)){if(y=Xp,M="onMouseLeave",f="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(y=$p,M="onPointerLeave",f="onPointerEnter",p="pointer"),m=g==null?d:bs(g),_=v==null?d:bs(v),d=new y(M,p+"leave",g,n,u),d.target=m,d.relatedTarget=_,M=null,kr(u)===c&&(y=new y(f,p+"enter",v,n,u),y.target=_,y.relatedTarget=m,M=y),m=M,g&&v)t:{for(y=g,f=v,p=0,_=y;_;_=as(_))p++;for(_=0,M=f;M;M=as(M))_++;for(;0<p-_;)y=as(y),p--;for(;0<_-p;)f=as(f),_--;for(;p--;){if(y===f||f!==null&&y===f.alternate)break t;y=as(y),f=as(f)}y=null}else y=null;g!==null&&sm(h,d,g,y,!1),v!==null&&m!==null&&sm(h,m,v,y,!0)}}e:{if(d=c?bs(c):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var A=CS;else if(Zp(d))if(pv)A=DS;else{A=LS;var w=PS}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(A=NS);if(A&&(A=A(t,c))){hv(h,A,n,u);break e}w&&w(t,d,c),t==="focusout"&&(w=d._wrapperState)&&w.controlled&&d.type==="number"&&ud(d,"number",d.value)}switch(w=c?bs(c):window,t){case"focusin":(Zp(w)||w.contentEditable==="true")&&(Ts=w,Md=c,Fo=null);break;case"focusout":Fo=Md=Ts=null;break;case"mousedown":Ed=!0;break;case"contextmenu":case"mouseup":case"dragend":Ed=!1,nm(h,n,u);break;case"selectionchange":if(FS)break;case"keydown":case"keyup":nm(h,n,u)}var R;if(ph)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else ws?dv(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(uv&&n.locale!=="ko"&&(ws||x!=="onCompositionStart"?x==="onCompositionEnd"&&ws&&(R=cv()):(ar=u,dh="value"in ar?ar.value:ar.textContent,ws=!0)),w=Gl(c,x),0<w.length&&(x=new qp(x,t,null,n,u),h.push({event:x,listeners:w}),R?x.data=R:(R=fv(n),R!==null&&(x.data=R)))),(R=wS?TS(t,n):AS(t,n))&&(c=Gl(c,"onBeforeInput"),0<c.length&&(u=new qp("onBeforeInput","beforeinput",null,n,u),h.push({event:u,listeners:c}),u.data=R))}wv(h,e)})}function Ko(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Gl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Go(t,n),s!=null&&i.unshift(Ko(t,s,r)),s=Go(t,e),s!=null&&i.push(Ko(t,s,r))),t=t.return}return i}function as(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function sm(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Go(n,s),l!=null&&o.unshift(Ko(n,l,a))):r||(l=Go(n,s),l!=null&&o.push(Ko(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var zS=/\r\n?/g,VS=/\u0000|\uFFFD/g;function om(t){return(typeof t=="string"?t:""+t).replace(zS,`
`).replace(VS,"")}function Fa(t,e,n){if(e=om(e),om(t)!==e&&n)throw Error(ae(425))}function Wl(){}var wd=null,Td=null;function Ad(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var bd=typeof setTimeout=="function"?setTimeout:void 0,HS=typeof clearTimeout=="function"?clearTimeout:void 0,am=typeof Promise=="function"?Promise:void 0,GS=typeof queueMicrotask=="function"?queueMicrotask:typeof am<"u"?function(t){return am.resolve(null).then(t).catch(WS)}:bd;function WS(t){setTimeout(function(){throw t})}function ou(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Xo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Xo(e)}function pr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function lm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var no=Math.random().toString(36).slice(2),hi="__reactFiber$"+no,Zo="__reactProps$"+no,zi="__reactContainer$"+no,Rd="__reactEvents$"+no,jS="__reactListeners$"+no,XS="__reactHandles$"+no;function kr(t){var e=t[hi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[zi]||n[hi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=lm(t);t!==null;){if(n=t[hi])return n;t=lm(t)}return e}t=n,n=t.parentNode}return null}function fa(t){return t=t[hi]||t[zi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function bs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ae(33))}function yc(t){return t[Zo]||null}var Cd=[],Rs=-1;function Tr(t){return{current:t}}function xt(t){0>Rs||(t.current=Cd[Rs],Cd[Rs]=null,Rs--)}function vt(t,e){Rs++,Cd[Rs]=t.current,t.current=e}var Sr={},on=Tr(Sr),mn=Tr(!1),$r=Sr;function Gs(t,e){var n=t.type.contextTypes;if(!n)return Sr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function gn(t){return t=t.childContextTypes,t!=null}function jl(){xt(mn),xt(on)}function cm(t,e,n){if(on.current!==Sr)throw Error(ae(168));vt(on,e),vt(mn,n)}function Av(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ae(108,Py(t)||"Unknown",r));return Et({},n,i)}function Xl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Sr,$r=on.current,vt(on,t),vt(mn,mn.current),!0}function um(t,e,n){var i=t.stateNode;if(!i)throw Error(ae(169));n?(t=Av(t,e,$r),i.__reactInternalMemoizedMergedChildContext=t,xt(mn),xt(on),vt(on,t)):xt(mn),vt(mn,n)}var Ni=null,Sc=!1,au=!1;function bv(t){Ni===null?Ni=[t]:Ni.push(t)}function qS(t){Sc=!0,bv(t)}function Ar(){if(!au&&Ni!==null){au=!0;var t=0,e=lt;try{var n=Ni;for(lt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ni=null,Sc=!1}catch(r){throw Ni!==null&&(Ni=Ni.slice(t+1)),J0(ah,Ar),r}finally{lt=e,au=!1}}return null}var Cs=[],Ps=0,ql=null,$l=0,Bn=[],kn=0,Yr=null,Di=1,Ii="";function Ir(t,e){Cs[Ps++]=$l,Cs[Ps++]=ql,ql=t,$l=e}function Rv(t,e,n){Bn[kn++]=Di,Bn[kn++]=Ii,Bn[kn++]=Yr,Yr=t;var i=Di;t=Ii;var r=32-ei(i)-1;i&=~(1<<r),n+=1;var s=32-ei(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Di=1<<32-ei(e)+r|n<<r|i,Ii=s+t}else Di=1<<s|n<<r|i,Ii=t}function gh(t){t.return!==null&&(Ir(t,1),Rv(t,1,0))}function vh(t){for(;t===ql;)ql=Cs[--Ps],Cs[Ps]=null,$l=Cs[--Ps],Cs[Ps]=null;for(;t===Yr;)Yr=Bn[--kn],Bn[kn]=null,Ii=Bn[--kn],Bn[kn]=null,Di=Bn[--kn],Bn[kn]=null}var Rn=null,bn=null,yt=!1,Zn=null;function Cv(t,e){var n=Vn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function dm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Rn=t,bn=pr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Rn=t,bn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Yr!==null?{id:Di,overflow:Ii}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Vn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Rn=t,bn=null,!0):!1;default:return!1}}function Pd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ld(t){if(yt){var e=bn;if(e){var n=e;if(!dm(t,e)){if(Pd(t))throw Error(ae(418));e=pr(n.nextSibling);var i=Rn;e&&dm(t,e)?Cv(i,n):(t.flags=t.flags&-4097|2,yt=!1,Rn=t)}}else{if(Pd(t))throw Error(ae(418));t.flags=t.flags&-4097|2,yt=!1,Rn=t}}}function fm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Rn=t}function Oa(t){if(t!==Rn)return!1;if(!yt)return fm(t),yt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ad(t.type,t.memoizedProps)),e&&(e=bn)){if(Pd(t))throw Pv(),Error(ae(418));for(;e;)Cv(t,e),e=pr(e.nextSibling)}if(fm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ae(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){bn=pr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}bn=null}}else bn=Rn?pr(t.stateNode.nextSibling):null;return!0}function Pv(){for(var t=bn;t;)t=pr(t.nextSibling)}function Ws(){bn=Rn=null,yt=!1}function _h(t){Zn===null?Zn=[t]:Zn.push(t)}var $S=ji.ReactCurrentBatchConfig;function po(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ae(309));var i=n.stateNode}if(!i)throw Error(ae(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ae(284));if(!n._owner)throw Error(ae(290,t))}return t}function Ba(t,e){throw t=Object.prototype.toString.call(e),Error(ae(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function hm(t){var e=t._init;return e(t._payload)}function Lv(t){function e(f,p){if(t){var _=f.deletions;_===null?(f.deletions=[p],f.flags|=16):_.push(p)}}function n(f,p){if(!t)return null;for(;p!==null;)e(f,p),p=p.sibling;return null}function i(f,p){for(f=new Map;p!==null;)p.key!==null?f.set(p.key,p):f.set(p.index,p),p=p.sibling;return f}function r(f,p){return f=_r(f,p),f.index=0,f.sibling=null,f}function s(f,p,_){return f.index=_,t?(_=f.alternate,_!==null?(_=_.index,_<p?(f.flags|=2,p):_):(f.flags|=2,p)):(f.flags|=1048576,p)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,p,_,M){return p===null||p.tag!==6?(p=pu(_,f.mode,M),p.return=f,p):(p=r(p,_),p.return=f,p)}function l(f,p,_,M){var A=_.type;return A===Es?u(f,p,_.props.children,M,_.key):p!==null&&(p.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===nr&&hm(A)===p.type)?(M=r(p,_.props),M.ref=po(f,p,_),M.return=f,M):(M=wl(_.type,_.key,_.props,null,f.mode,M),M.ref=po(f,p,_),M.return=f,M)}function c(f,p,_,M){return p===null||p.tag!==4||p.stateNode.containerInfo!==_.containerInfo||p.stateNode.implementation!==_.implementation?(p=mu(_,f.mode,M),p.return=f,p):(p=r(p,_.children||[]),p.return=f,p)}function u(f,p,_,M,A){return p===null||p.tag!==7?(p=Xr(_,f.mode,M,A),p.return=f,p):(p=r(p,_),p.return=f,p)}function h(f,p,_){if(typeof p=="string"&&p!==""||typeof p=="number")return p=pu(""+p,f.mode,_),p.return=f,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ba:return _=wl(p.type,p.key,p.props,null,f.mode,_),_.ref=po(f,null,p),_.return=f,_;case Ms:return p=mu(p,f.mode,_),p.return=f,p;case nr:var M=p._init;return h(f,M(p._payload),_)}if(Ao(p)||lo(p))return p=Xr(p,f.mode,_,null),p.return=f,p;Ba(f,p)}return null}function d(f,p,_,M){var A=p!==null?p.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return A!==null?null:a(f,p,""+_,M);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ba:return _.key===A?l(f,p,_,M):null;case Ms:return _.key===A?c(f,p,_,M):null;case nr:return A=_._init,d(f,p,A(_._payload),M)}if(Ao(_)||lo(_))return A!==null?null:u(f,p,_,M,null);Ba(f,_)}return null}function g(f,p,_,M,A){if(typeof M=="string"&&M!==""||typeof M=="number")return f=f.get(_)||null,a(p,f,""+M,A);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case ba:return f=f.get(M.key===null?_:M.key)||null,l(p,f,M,A);case Ms:return f=f.get(M.key===null?_:M.key)||null,c(p,f,M,A);case nr:var w=M._init;return g(f,p,_,w(M._payload),A)}if(Ao(M)||lo(M))return f=f.get(_)||null,u(p,f,M,A,null);Ba(p,M)}return null}function v(f,p,_,M){for(var A=null,w=null,R=p,x=p=0,b=null;R!==null&&x<_.length;x++){R.index>x?(b=R,R=null):b=R.sibling;var C=d(f,R,_[x],M);if(C===null){R===null&&(R=b);break}t&&R&&C.alternate===null&&e(f,R),p=s(C,p,x),w===null?A=C:w.sibling=C,w=C,R=b}if(x===_.length)return n(f,R),yt&&Ir(f,x),A;if(R===null){for(;x<_.length;x++)R=h(f,_[x],M),R!==null&&(p=s(R,p,x),w===null?A=R:w.sibling=R,w=R);return yt&&Ir(f,x),A}for(R=i(f,R);x<_.length;x++)b=g(R,f,x,_[x],M),b!==null&&(t&&b.alternate!==null&&R.delete(b.key===null?x:b.key),p=s(b,p,x),w===null?A=b:w.sibling=b,w=b);return t&&R.forEach(function(P){return e(f,P)}),yt&&Ir(f,x),A}function y(f,p,_,M){var A=lo(_);if(typeof A!="function")throw Error(ae(150));if(_=A.call(_),_==null)throw Error(ae(151));for(var w=A=null,R=p,x=p=0,b=null,C=_.next();R!==null&&!C.done;x++,C=_.next()){R.index>x?(b=R,R=null):b=R.sibling;var P=d(f,R,C.value,M);if(P===null){R===null&&(R=b);break}t&&R&&P.alternate===null&&e(f,R),p=s(P,p,x),w===null?A=P:w.sibling=P,w=P,R=b}if(C.done)return n(f,R),yt&&Ir(f,x),A;if(R===null){for(;!C.done;x++,C=_.next())C=h(f,C.value,M),C!==null&&(p=s(C,p,x),w===null?A=C:w.sibling=C,w=C);return yt&&Ir(f,x),A}for(R=i(f,R);!C.done;x++,C=_.next())C=g(R,f,x,C.value,M),C!==null&&(t&&C.alternate!==null&&R.delete(C.key===null?x:C.key),p=s(C,p,x),w===null?A=C:w.sibling=C,w=C);return t&&R.forEach(function(U){return e(f,U)}),yt&&Ir(f,x),A}function m(f,p,_,M){if(typeof _=="object"&&_!==null&&_.type===Es&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case ba:e:{for(var A=_.key,w=p;w!==null;){if(w.key===A){if(A=_.type,A===Es){if(w.tag===7){n(f,w.sibling),p=r(w,_.props.children),p.return=f,f=p;break e}}else if(w.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===nr&&hm(A)===w.type){n(f,w.sibling),p=r(w,_.props),p.ref=po(f,w,_),p.return=f,f=p;break e}n(f,w);break}else e(f,w);w=w.sibling}_.type===Es?(p=Xr(_.props.children,f.mode,M,_.key),p.return=f,f=p):(M=wl(_.type,_.key,_.props,null,f.mode,M),M.ref=po(f,p,_),M.return=f,f=M)}return o(f);case Ms:e:{for(w=_.key;p!==null;){if(p.key===w)if(p.tag===4&&p.stateNode.containerInfo===_.containerInfo&&p.stateNode.implementation===_.implementation){n(f,p.sibling),p=r(p,_.children||[]),p.return=f,f=p;break e}else{n(f,p);break}else e(f,p);p=p.sibling}p=mu(_,f.mode,M),p.return=f,f=p}return o(f);case nr:return w=_._init,m(f,p,w(_._payload),M)}if(Ao(_))return v(f,p,_,M);if(lo(_))return y(f,p,_,M);Ba(f,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,p!==null&&p.tag===6?(n(f,p.sibling),p=r(p,_),p.return=f,f=p):(n(f,p),p=pu(_,f.mode,M),p.return=f,f=p),o(f)):n(f,p)}return m}var js=Lv(!0),Nv=Lv(!1),Yl=Tr(null),Kl=null,Ls=null,xh=null;function yh(){xh=Ls=Kl=null}function Sh(t){var e=Yl.current;xt(Yl),t._currentValue=e}function Nd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Bs(t,e){Kl=t,xh=Ls=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(pn=!0),t.firstContext=null)}function Gn(t){var e=t._currentValue;if(xh!==t)if(t={context:t,memoizedValue:e,next:null},Ls===null){if(Kl===null)throw Error(ae(308));Ls=t,Kl.dependencies={lanes:0,firstContext:t}}else Ls=Ls.next=t;return e}var zr=null;function Mh(t){zr===null?zr=[t]:zr.push(t)}function Dv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Mh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Vi(t,i)}function Vi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ir=!1;function Eh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Iv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Fi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function mr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,st&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Vi(t,n)}return r=i.interleaved,r===null?(e.next=e,Mh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Vi(t,n)}function _l(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,lh(t,n)}}function pm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Zl(t,e,n,i){var r=t.updateQueue;ir=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,u=c=l=null,a=s;do{var d=a.lane,g=a.eventTime;if((i&d)===d){u!==null&&(u=u.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,y=a;switch(d=e,g=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){h=v.call(g,h,d);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,d=typeof v=="function"?v.call(g,h,d):v,d==null)break e;h=Et({},h,d);break e;case 2:ir=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else g={eventTime:g,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=g,l=h):u=u.next=g,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(u===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Zr|=o,t.lanes=o,t.memoizedState=h}}function mm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ae(191,r));r.call(i)}}}var ha={},_i=Tr(ha),Jo=Tr(ha),Qo=Tr(ha);function Vr(t){if(t===ha)throw Error(ae(174));return t}function wh(t,e){switch(vt(Qo,e),vt(Jo,t),vt(_i,ha),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:fd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=fd(e,t)}xt(_i),vt(_i,e)}function Xs(){xt(_i),xt(Jo),xt(Qo)}function Uv(t){Vr(Qo.current);var e=Vr(_i.current),n=fd(e,t.type);e!==n&&(vt(Jo,t),vt(_i,n))}function Th(t){Jo.current===t&&(xt(_i),xt(Jo))}var St=Tr(0);function Jl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var lu=[];function Ah(){for(var t=0;t<lu.length;t++)lu[t]._workInProgressVersionPrimary=null;lu.length=0}var xl=ji.ReactCurrentDispatcher,cu=ji.ReactCurrentBatchConfig,Kr=0,Mt=null,Ot=null,Gt=null,Ql=!1,Oo=!1,ea=0,YS=0;function Kt(){throw Error(ae(321))}function bh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ni(t[n],e[n]))return!1;return!0}function Rh(t,e,n,i,r,s){if(Kr=s,Mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,xl.current=t===null||t.memoizedState===null?QS:eM,t=n(i,r),Oo){s=0;do{if(Oo=!1,ea=0,25<=s)throw Error(ae(301));s+=1,Gt=Ot=null,e.updateQueue=null,xl.current=tM,t=n(i,r)}while(Oo)}if(xl.current=ec,e=Ot!==null&&Ot.next!==null,Kr=0,Gt=Ot=Mt=null,Ql=!1,e)throw Error(ae(300));return t}function Ch(){var t=ea!==0;return ea=0,t}function di(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Gt===null?Mt.memoizedState=Gt=t:Gt=Gt.next=t,Gt}function Wn(){if(Ot===null){var t=Mt.alternate;t=t!==null?t.memoizedState:null}else t=Ot.next;var e=Gt===null?Mt.memoizedState:Gt.next;if(e!==null)Gt=e,Ot=t;else{if(t===null)throw Error(ae(310));Ot=t,t={memoizedState:Ot.memoizedState,baseState:Ot.baseState,baseQueue:Ot.baseQueue,queue:Ot.queue,next:null},Gt===null?Mt.memoizedState=Gt=t:Gt=Gt.next=t}return Gt}function ta(t,e){return typeof e=="function"?e(t):e}function uu(t){var e=Wn(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=Ot,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Kr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,Mt.lanes|=u,Zr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,ni(i,e.memoizedState)||(pn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Mt.lanes|=s,Zr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function du(t){var e=Wn(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ni(s,e.memoizedState)||(pn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Fv(){}function Ov(t,e){var n=Mt,i=Wn(),r=e(),s=!ni(i.memoizedState,r);if(s&&(i.memoizedState=r,pn=!0),i=i.queue,Ph(zv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Gt!==null&&Gt.memoizedState.tag&1){if(n.flags|=2048,na(9,kv.bind(null,n,i,r,e),void 0,null),Wt===null)throw Error(ae(349));Kr&30||Bv(n,e,r)}return r}function Bv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function kv(t,e,n,i){e.value=n,e.getSnapshot=i,Vv(e)&&Hv(t)}function zv(t,e,n){return n(function(){Vv(e)&&Hv(t)})}function Vv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ni(t,n)}catch{return!0}}function Hv(t){var e=Vi(t,1);e!==null&&ti(e,t,1,-1)}function gm(t){var e=di();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:t},e.queue=t,t=t.dispatch=JS.bind(null,Mt,t),[e.memoizedState,t]}function na(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Gv(){return Wn().memoizedState}function yl(t,e,n,i){var r=di();Mt.flags|=t,r.memoizedState=na(1|e,n,void 0,i===void 0?null:i)}function Mc(t,e,n,i){var r=Wn();i=i===void 0?null:i;var s=void 0;if(Ot!==null){var o=Ot.memoizedState;if(s=o.destroy,i!==null&&bh(i,o.deps)){r.memoizedState=na(e,n,s,i);return}}Mt.flags|=t,r.memoizedState=na(1|e,n,s,i)}function vm(t,e){return yl(8390656,8,t,e)}function Ph(t,e){return Mc(2048,8,t,e)}function Wv(t,e){return Mc(4,2,t,e)}function jv(t,e){return Mc(4,4,t,e)}function Xv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function qv(t,e,n){return n=n!=null?n.concat([t]):null,Mc(4,4,Xv.bind(null,e,t),n)}function Lh(){}function $v(t,e){var n=Wn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&bh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Yv(t,e){var n=Wn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&bh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Kv(t,e,n){return Kr&21?(ni(n,e)||(n=tv(),Mt.lanes|=n,Zr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,pn=!0),t.memoizedState=n)}function KS(t,e){var n=lt;lt=n!==0&&4>n?n:4,t(!0);var i=cu.transition;cu.transition={};try{t(!1),e()}finally{lt=n,cu.transition=i}}function Zv(){return Wn().memoizedState}function ZS(t,e,n){var i=vr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Jv(t))Qv(e,n);else if(n=Dv(t,e,n,i),n!==null){var r=cn();ti(n,t,i,r),e_(n,e,i)}}function JS(t,e,n){var i=vr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Jv(t))Qv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ni(a,o)){var l=e.interleaved;l===null?(r.next=r,Mh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Dv(t,e,r,i),n!==null&&(r=cn(),ti(n,t,i,r),e_(n,e,i))}}function Jv(t){var e=t.alternate;return t===Mt||e!==null&&e===Mt}function Qv(t,e){Oo=Ql=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function e_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,lh(t,n)}}var ec={readContext:Gn,useCallback:Kt,useContext:Kt,useEffect:Kt,useImperativeHandle:Kt,useInsertionEffect:Kt,useLayoutEffect:Kt,useMemo:Kt,useReducer:Kt,useRef:Kt,useState:Kt,useDebugValue:Kt,useDeferredValue:Kt,useTransition:Kt,useMutableSource:Kt,useSyncExternalStore:Kt,useId:Kt,unstable_isNewReconciler:!1},QS={readContext:Gn,useCallback:function(t,e){return di().memoizedState=[t,e===void 0?null:e],t},useContext:Gn,useEffect:vm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,yl(4194308,4,Xv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return yl(4194308,4,t,e)},useInsertionEffect:function(t,e){return yl(4,2,t,e)},useMemo:function(t,e){var n=di();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=di();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=ZS.bind(null,Mt,t),[i.memoizedState,t]},useRef:function(t){var e=di();return t={current:t},e.memoizedState=t},useState:gm,useDebugValue:Lh,useDeferredValue:function(t){return di().memoizedState=t},useTransition:function(){var t=gm(!1),e=t[0];return t=KS.bind(null,t[1]),di().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Mt,r=di();if(yt){if(n===void 0)throw Error(ae(407));n=n()}else{if(n=e(),Wt===null)throw Error(ae(349));Kr&30||Bv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,vm(zv.bind(null,i,s,t),[t]),i.flags|=2048,na(9,kv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=di(),e=Wt.identifierPrefix;if(yt){var n=Ii,i=Di;n=(i&~(1<<32-ei(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ea++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=YS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},eM={readContext:Gn,useCallback:$v,useContext:Gn,useEffect:Ph,useImperativeHandle:qv,useInsertionEffect:Wv,useLayoutEffect:jv,useMemo:Yv,useReducer:uu,useRef:Gv,useState:function(){return uu(ta)},useDebugValue:Lh,useDeferredValue:function(t){var e=Wn();return Kv(e,Ot.memoizedState,t)},useTransition:function(){var t=uu(ta)[0],e=Wn().memoizedState;return[t,e]},useMutableSource:Fv,useSyncExternalStore:Ov,useId:Zv,unstable_isNewReconciler:!1},tM={readContext:Gn,useCallback:$v,useContext:Gn,useEffect:Ph,useImperativeHandle:qv,useInsertionEffect:Wv,useLayoutEffect:jv,useMemo:Yv,useReducer:du,useRef:Gv,useState:function(){return du(ta)},useDebugValue:Lh,useDeferredValue:function(t){var e=Wn();return Ot===null?e.memoizedState=t:Kv(e,Ot.memoizedState,t)},useTransition:function(){var t=du(ta)[0],e=Wn().memoizedState;return[t,e]},useMutableSource:Fv,useSyncExternalStore:Ov,useId:Zv,unstable_isNewReconciler:!1};function Yn(t,e){if(t&&t.defaultProps){e=Et({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Dd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Et({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ec={isMounted:function(t){return(t=t._reactInternals)?is(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=cn(),r=vr(t),s=Fi(i,r);s.payload=e,n!=null&&(s.callback=n),e=mr(t,s,r),e!==null&&(ti(e,t,r,i),_l(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=cn(),r=vr(t),s=Fi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=mr(t,s,r),e!==null&&(ti(e,t,r,i),_l(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=cn(),i=vr(t),r=Fi(n,i);r.tag=2,e!=null&&(r.callback=e),e=mr(t,r,i),e!==null&&(ti(e,t,i,n),_l(e,t,i))}};function _m(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!$o(n,i)||!$o(r,s):!0}function t_(t,e,n){var i=!1,r=Sr,s=e.contextType;return typeof s=="object"&&s!==null?s=Gn(s):(r=gn(e)?$r:on.current,i=e.contextTypes,s=(i=i!=null)?Gs(t,r):Sr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ec,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function xm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Ec.enqueueReplaceState(e,e.state,null)}function Id(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Eh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Gn(s):(s=gn(e)?$r:on.current,r.context=Gs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Dd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Ec.enqueueReplaceState(r,r.state,null),Zl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function qs(t,e){try{var n="",i=e;do n+=Cy(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function fu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ud(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var nM=typeof WeakMap=="function"?WeakMap:Map;function n_(t,e,n){n=Fi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){nc||(nc=!0,jd=i),Ud(t,e)},n}function i_(t,e,n){n=Fi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Ud(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ud(t,e),typeof i!="function"&&(gr===null?gr=new Set([this]):gr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function ym(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new nM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=gM.bind(null,t,e,n),e.then(t,t))}function Sm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Mm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Fi(-1,1),e.tag=2,mr(n,e,1))),n.lanes|=1),t)}var iM=ji.ReactCurrentOwner,pn=!1;function ln(t,e,n,i){e.child=t===null?Nv(e,null,n,i):js(e,t.child,n,i)}function Em(t,e,n,i,r){n=n.render;var s=e.ref;return Bs(e,r),i=Rh(t,e,n,i,s,r),n=Ch(),t!==null&&!pn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Hi(t,e,r)):(yt&&n&&gh(e),e.flags|=1,ln(t,e,i,r),e.child)}function wm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!kh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,r_(t,e,s,i,r)):(t=wl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:$o,n(o,i)&&t.ref===e.ref)return Hi(t,e,r)}return e.flags|=1,t=_r(s,i),t.ref=e.ref,t.return=e,e.child=t}function r_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if($o(s,i)&&t.ref===e.ref)if(pn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(pn=!0);else return e.lanes=t.lanes,Hi(t,e,r)}return Fd(t,e,n,i,r)}function s_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},vt(Ds,Tn),Tn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,vt(Ds,Tn),Tn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,vt(Ds,Tn),Tn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,vt(Ds,Tn),Tn|=i;return ln(t,e,r,n),e.child}function o_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Fd(t,e,n,i,r){var s=gn(n)?$r:on.current;return s=Gs(e,s),Bs(e,r),n=Rh(t,e,n,i,s,r),i=Ch(),t!==null&&!pn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Hi(t,e,r)):(yt&&i&&gh(e),e.flags|=1,ln(t,e,n,r),e.child)}function Tm(t,e,n,i,r){if(gn(n)){var s=!0;Xl(e)}else s=!1;if(Bs(e,r),e.stateNode===null)Sl(t,e),t_(e,n,i),Id(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Gn(c):(c=gn(n)?$r:on.current,c=Gs(e,c));var u=n.getDerivedStateFromProps,h=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&xm(e,o,i,c),ir=!1;var d=e.memoizedState;o.state=d,Zl(e,i,o,r),l=e.memoizedState,a!==i||d!==l||mn.current||ir?(typeof u=="function"&&(Dd(e,n,u,i),l=e.memoizedState),(a=ir||_m(e,n,a,i,d,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Iv(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Yn(e.type,a),o.props=c,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Gn(l):(l=gn(n)?$r:on.current,l=Gs(e,l));var g=n.getDerivedStateFromProps;(u=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&xm(e,o,i,l),ir=!1,d=e.memoizedState,o.state=d,Zl(e,i,o,r);var v=e.memoizedState;a!==h||d!==v||mn.current||ir?(typeof g=="function"&&(Dd(e,n,g,i),v=e.memoizedState),(c=ir||_m(e,n,c,i,d,v,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Od(t,e,n,i,s,r)}function Od(t,e,n,i,r,s){o_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&um(e,n,!1),Hi(t,e,s);i=e.stateNode,iM.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=js(e,t.child,null,s),e.child=js(e,null,a,s)):ln(t,e,a,s),e.memoizedState=i.state,r&&um(e,n,!0),e.child}function a_(t){var e=t.stateNode;e.pendingContext?cm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&cm(t,e.context,!1),wh(t,e.containerInfo)}function Am(t,e,n,i,r){return Ws(),_h(r),e.flags|=256,ln(t,e,n,i),e.child}var Bd={dehydrated:null,treeContext:null,retryLane:0};function kd(t){return{baseLanes:t,cachePool:null,transitions:null}}function l_(t,e,n){var i=e.pendingProps,r=St.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),vt(St,r&1),t===null)return Ld(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ac(o,i,0,null),t=Xr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=kd(n),e.memoizedState=Bd,t):Nh(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return rM(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=_r(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=_r(a,s):(s=Xr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?kd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Bd,i}return s=t.child,t=s.sibling,i=_r(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Nh(t,e){return e=Ac({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ka(t,e,n,i){return i!==null&&_h(i),js(e,t.child,null,n),t=Nh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function rM(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=fu(Error(ae(422))),ka(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Ac({mode:"visible",children:i.children},r,0,null),s=Xr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&js(e,t.child,null,o),e.child.memoizedState=kd(o),e.memoizedState=Bd,s);if(!(e.mode&1))return ka(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ae(419)),i=fu(s,i,void 0),ka(t,e,o,i)}if(a=(o&t.childLanes)!==0,pn||a){if(i=Wt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Vi(t,r),ti(i,t,r,-1))}return Bh(),i=fu(Error(ae(421))),ka(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=vM.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,bn=pr(r.nextSibling),Rn=e,yt=!0,Zn=null,t!==null&&(Bn[kn++]=Di,Bn[kn++]=Ii,Bn[kn++]=Yr,Di=t.id,Ii=t.overflow,Yr=e),e=Nh(e,i.children),e.flags|=4096,e)}function bm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Nd(t.return,e,n)}function hu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function c_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(ln(t,e,i.children,n),i=St.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&bm(t,n,e);else if(t.tag===19)bm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(vt(St,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Jl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),hu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Jl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}hu(e,!0,n,null,s);break;case"together":hu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Sl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Hi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Zr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ae(153));if(e.child!==null){for(t=e.child,n=_r(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=_r(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function sM(t,e,n){switch(e.tag){case 3:a_(e),Ws();break;case 5:Uv(e);break;case 1:gn(e.type)&&Xl(e);break;case 4:wh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;vt(Yl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(vt(St,St.current&1),e.flags|=128,null):n&e.child.childLanes?l_(t,e,n):(vt(St,St.current&1),t=Hi(t,e,n),t!==null?t.sibling:null);vt(St,St.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return c_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),vt(St,St.current),i)break;return null;case 22:case 23:return e.lanes=0,s_(t,e,n)}return Hi(t,e,n)}var u_,zd,d_,f_;u_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};zd=function(){};d_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Vr(_i.current);var s=null;switch(n){case"input":r=ld(t,r),i=ld(t,i),s=[];break;case"select":r=Et({},r,{value:void 0}),i=Et({},i,{value:void 0}),s=[];break;case"textarea":r=dd(t,r),i=dd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Wl)}hd(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Vo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Vo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&_t("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};f_=function(t,e,n,i){n!==i&&(e.flags|=4)};function mo(t,e){if(!yt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Zt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function oM(t,e,n){var i=e.pendingProps;switch(vh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zt(e),null;case 1:return gn(e.type)&&jl(),Zt(e),null;case 3:return i=e.stateNode,Xs(),xt(mn),xt(on),Ah(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Oa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Zn!==null&&($d(Zn),Zn=null))),zd(t,e),Zt(e),null;case 5:Th(e);var r=Vr(Qo.current);if(n=e.type,t!==null&&e.stateNode!=null)d_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ae(166));return Zt(e),null}if(t=Vr(_i.current),Oa(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[hi]=e,i[Zo]=s,t=(e.mode&1)!==0,n){case"dialog":_t("cancel",i),_t("close",i);break;case"iframe":case"object":case"embed":_t("load",i);break;case"video":case"audio":for(r=0;r<Ro.length;r++)_t(Ro[r],i);break;case"source":_t("error",i);break;case"img":case"image":case"link":_t("error",i),_t("load",i);break;case"details":_t("toggle",i);break;case"input":Fp(i,s),_t("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},_t("invalid",i);break;case"textarea":Bp(i,s),_t("invalid",i)}hd(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Fa(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Fa(i.textContent,a,t),r=["children",""+a]):Vo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&_t("scroll",i)}switch(n){case"input":Ra(i),Op(i,s,!0);break;case"textarea":Ra(i),kp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Wl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=z0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[hi]=e,t[Zo]=i,u_(t,e,!1,!1),e.stateNode=t;e:{switch(o=pd(n,i),n){case"dialog":_t("cancel",t),_t("close",t),r=i;break;case"iframe":case"object":case"embed":_t("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ro.length;r++)_t(Ro[r],t);r=i;break;case"source":_t("error",t),r=i;break;case"img":case"image":case"link":_t("error",t),_t("load",t),r=i;break;case"details":_t("toggle",t),r=i;break;case"input":Fp(t,i),r=ld(t,i),_t("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Et({},i,{value:void 0}),_t("invalid",t);break;case"textarea":Bp(t,i),r=dd(t,i),_t("invalid",t);break;default:r=i}hd(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?G0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&V0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ho(t,l):typeof l=="number"&&Ho(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Vo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&_t("scroll",t):l!=null&&nh(t,s,l,o))}switch(n){case"input":Ra(t),Op(t,i,!1);break;case"textarea":Ra(t),kp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+yr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Is(t,!!i.multiple,s,!1):i.defaultValue!=null&&Is(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Wl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Zt(e),null;case 6:if(t&&e.stateNode!=null)f_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ae(166));if(n=Vr(Qo.current),Vr(_i.current),Oa(e)){if(i=e.stateNode,n=e.memoizedProps,i[hi]=e,(s=i.nodeValue!==n)&&(t=Rn,t!==null))switch(t.tag){case 3:Fa(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Fa(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[hi]=e,e.stateNode=i}return Zt(e),null;case 13:if(xt(St),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(yt&&bn!==null&&e.mode&1&&!(e.flags&128))Pv(),Ws(),e.flags|=98560,s=!1;else if(s=Oa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ae(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ae(317));s[hi]=e}else Ws(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Zt(e),s=!1}else Zn!==null&&($d(Zn),Zn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||St.current&1?Bt===0&&(Bt=3):Bh())),e.updateQueue!==null&&(e.flags|=4),Zt(e),null);case 4:return Xs(),zd(t,e),t===null&&Yo(e.stateNode.containerInfo),Zt(e),null;case 10:return Sh(e.type._context),Zt(e),null;case 17:return gn(e.type)&&jl(),Zt(e),null;case 19:if(xt(St),s=e.memoizedState,s===null)return Zt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)mo(s,!1);else{if(Bt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Jl(t),o!==null){for(e.flags|=128,mo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return vt(St,St.current&1|2),e.child}t=t.sibling}s.tail!==null&&Lt()>$s&&(e.flags|=128,i=!0,mo(s,!1),e.lanes=4194304)}else{if(!i)if(t=Jl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),mo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!yt)return Zt(e),null}else 2*Lt()-s.renderingStartTime>$s&&n!==1073741824&&(e.flags|=128,i=!0,mo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Lt(),e.sibling=null,n=St.current,vt(St,i?n&1|2:n&1),e):(Zt(e),null);case 22:case 23:return Oh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Tn&1073741824&&(Zt(e),e.subtreeFlags&6&&(e.flags|=8192)):Zt(e),null;case 24:return null;case 25:return null}throw Error(ae(156,e.tag))}function aM(t,e){switch(vh(e),e.tag){case 1:return gn(e.type)&&jl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Xs(),xt(mn),xt(on),Ah(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Th(e),null;case 13:if(xt(St),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ae(340));Ws()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return xt(St),null;case 4:return Xs(),null;case 10:return Sh(e.type._context),null;case 22:case 23:return Oh(),null;case 24:return null;default:return null}}var za=!1,en=!1,lM=typeof WeakSet=="function"?WeakSet:Set,Re=null;function Ns(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){At(t,e,i)}else n.current=null}function Vd(t,e,n){try{n()}catch(i){At(t,e,i)}}var Rm=!1;function cM(t,e){if(wd=Vl,t=vv(),mh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,h=t,d=null;t:for(;;){for(var g;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(g=h.firstChild)!==null;)d=h,h=g;for(;;){if(h===t)break t;if(d===n&&++c===r&&(a=o),d===s&&++u===i&&(l=o),(g=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Td={focusedElem:t,selectionRange:n},Vl=!1,Re=e;Re!==null;)if(e=Re,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Re=t;else for(;Re!==null;){e=Re;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,m=v.memoizedState,f=e.stateNode,p=f.getSnapshotBeforeUpdate(e.elementType===e.type?y:Yn(e.type,y),m);f.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ae(163))}}catch(M){At(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,Re=t;break}Re=e.return}return v=Rm,Rm=!1,v}function Bo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Vd(e,n,s)}r=r.next}while(r!==i)}}function wc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Hd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function h_(t){var e=t.alternate;e!==null&&(t.alternate=null,h_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[hi],delete e[Zo],delete e[Rd],delete e[jS],delete e[XS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function p_(t){return t.tag===5||t.tag===3||t.tag===4}function Cm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||p_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Gd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Wl));else if(i!==4&&(t=t.child,t!==null))for(Gd(t,e,n),t=t.sibling;t!==null;)Gd(t,e,n),t=t.sibling}function Wd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Wd(t,e,n),t=t.sibling;t!==null;)Wd(t,e,n),t=t.sibling}var jt=null,Kn=!1;function Yi(t,e,n){for(n=n.child;n!==null;)m_(t,e,n),n=n.sibling}function m_(t,e,n){if(vi&&typeof vi.onCommitFiberUnmount=="function")try{vi.onCommitFiberUnmount(gc,n)}catch{}switch(n.tag){case 5:en||Ns(n,e);case 6:var i=jt,r=Kn;jt=null,Yi(t,e,n),jt=i,Kn=r,jt!==null&&(Kn?(t=jt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):jt.removeChild(n.stateNode));break;case 18:jt!==null&&(Kn?(t=jt,n=n.stateNode,t.nodeType===8?ou(t.parentNode,n):t.nodeType===1&&ou(t,n),Xo(t)):ou(jt,n.stateNode));break;case 4:i=jt,r=Kn,jt=n.stateNode.containerInfo,Kn=!0,Yi(t,e,n),jt=i,Kn=r;break;case 0:case 11:case 14:case 15:if(!en&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Vd(n,e,o),r=r.next}while(r!==i)}Yi(t,e,n);break;case 1:if(!en&&(Ns(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){At(n,e,a)}Yi(t,e,n);break;case 21:Yi(t,e,n);break;case 22:n.mode&1?(en=(i=en)||n.memoizedState!==null,Yi(t,e,n),en=i):Yi(t,e,n);break;default:Yi(t,e,n)}}function Pm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new lM),e.forEach(function(i){var r=_M.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function jn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:jt=a.stateNode,Kn=!1;break e;case 3:jt=a.stateNode.containerInfo,Kn=!0;break e;case 4:jt=a.stateNode.containerInfo,Kn=!0;break e}a=a.return}if(jt===null)throw Error(ae(160));m_(s,o,r),jt=null,Kn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){At(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)g_(e,t),e=e.sibling}function g_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(jn(e,t),li(t),i&4){try{Bo(3,t,t.return),wc(3,t)}catch(y){At(t,t.return,y)}try{Bo(5,t,t.return)}catch(y){At(t,t.return,y)}}break;case 1:jn(e,t),li(t),i&512&&n!==null&&Ns(n,n.return);break;case 5:if(jn(e,t),li(t),i&512&&n!==null&&Ns(n,n.return),t.flags&32){var r=t.stateNode;try{Ho(r,"")}catch(y){At(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&B0(r,s),pd(a,o);var c=pd(a,s);for(o=0;o<l.length;o+=2){var u=l[o],h=l[o+1];u==="style"?G0(r,h):u==="dangerouslySetInnerHTML"?V0(r,h):u==="children"?Ho(r,h):nh(r,u,h,c)}switch(a){case"input":cd(r,s);break;case"textarea":k0(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Is(r,!!s.multiple,g,!1):d!==!!s.multiple&&(s.defaultValue!=null?Is(r,!!s.multiple,s.defaultValue,!0):Is(r,!!s.multiple,s.multiple?[]:"",!1))}r[Zo]=s}catch(y){At(t,t.return,y)}}break;case 6:if(jn(e,t),li(t),i&4){if(t.stateNode===null)throw Error(ae(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){At(t,t.return,y)}}break;case 3:if(jn(e,t),li(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Xo(e.containerInfo)}catch(y){At(t,t.return,y)}break;case 4:jn(e,t),li(t);break;case 13:jn(e,t),li(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Uh=Lt())),i&4&&Pm(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(en=(c=en)||u,jn(e,t),en=c):jn(e,t),li(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(Re=t,u=t.child;u!==null;){for(h=Re=u;Re!==null;){switch(d=Re,g=d.child,d.tag){case 0:case 11:case 14:case 15:Bo(4,d,d.return);break;case 1:Ns(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){At(i,n,y)}}break;case 5:Ns(d,d.return);break;case 22:if(d.memoizedState!==null){Nm(h);continue}}g!==null?(g.return=d,Re=g):Nm(h)}u=u.sibling}e:for(u=null,h=t;;){if(h.tag===5){if(u===null){u=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=H0("display",o))}catch(y){At(t,t.return,y)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(y){At(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:jn(e,t),li(t),i&4&&Pm(t);break;case 21:break;default:jn(e,t),li(t)}}function li(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(p_(n)){var i=n;break e}n=n.return}throw Error(ae(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ho(r,""),i.flags&=-33);var s=Cm(t);Wd(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Cm(t);Gd(t,a,o);break;default:throw Error(ae(161))}}catch(l){At(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function uM(t,e,n){Re=t,v_(t)}function v_(t,e,n){for(var i=(t.mode&1)!==0;Re!==null;){var r=Re,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||za;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||en;a=za;var c=en;if(za=o,(en=l)&&!c)for(Re=r;Re!==null;)o=Re,l=o.child,o.tag===22&&o.memoizedState!==null?Dm(r):l!==null?(l.return=o,Re=l):Dm(r);for(;s!==null;)Re=s,v_(s),s=s.sibling;Re=r,za=a,en=c}Lm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Re=s):Lm(t)}}function Lm(t){for(;Re!==null;){var e=Re;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:en||wc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!en)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Yn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&mm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}mm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&Xo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ae(163))}en||e.flags&512&&Hd(e)}catch(d){At(e,e.return,d)}}if(e===t){Re=null;break}if(n=e.sibling,n!==null){n.return=e.return,Re=n;break}Re=e.return}}function Nm(t){for(;Re!==null;){var e=Re;if(e===t){Re=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Re=n;break}Re=e.return}}function Dm(t){for(;Re!==null;){var e=Re;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{wc(4,e)}catch(l){At(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){At(e,r,l)}}var s=e.return;try{Hd(e)}catch(l){At(e,s,l)}break;case 5:var o=e.return;try{Hd(e)}catch(l){At(e,o,l)}}}catch(l){At(e,e.return,l)}if(e===t){Re=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Re=a;break}Re=e.return}}var dM=Math.ceil,tc=ji.ReactCurrentDispatcher,Dh=ji.ReactCurrentOwner,Hn=ji.ReactCurrentBatchConfig,st=0,Wt=null,Ft=null,qt=0,Tn=0,Ds=Tr(0),Bt=0,ia=null,Zr=0,Tc=0,Ih=0,ko=null,hn=null,Uh=0,$s=1/0,Li=null,nc=!1,jd=null,gr=null,Va=!1,lr=null,ic=0,zo=0,Xd=null,Ml=-1,El=0;function cn(){return st&6?Lt():Ml!==-1?Ml:Ml=Lt()}function vr(t){return t.mode&1?st&2&&qt!==0?qt&-qt:$S.transition!==null?(El===0&&(El=tv()),El):(t=lt,t!==0||(t=window.event,t=t===void 0?16:lv(t.type)),t):1}function ti(t,e,n,i){if(50<zo)throw zo=0,Xd=null,Error(ae(185));ua(t,n,i),(!(st&2)||t!==Wt)&&(t===Wt&&(!(st&2)&&(Tc|=n),Bt===4&&sr(t,qt)),vn(t,i),n===1&&st===0&&!(e.mode&1)&&($s=Lt()+500,Sc&&Ar()))}function vn(t,e){var n=t.callbackNode;$y(t,e);var i=zl(t,t===Wt?qt:0);if(i===0)n!==null&&Hp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Hp(n),e===1)t.tag===0?qS(Im.bind(null,t)):bv(Im.bind(null,t)),GS(function(){!(st&6)&&Ar()}),n=null;else{switch(nv(i)){case 1:n=ah;break;case 4:n=Q0;break;case 16:n=kl;break;case 536870912:n=ev;break;default:n=kl}n=T_(n,__.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function __(t,e){if(Ml=-1,El=0,st&6)throw Error(ae(327));var n=t.callbackNode;if(ks()&&t.callbackNode!==n)return null;var i=zl(t,t===Wt?qt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=rc(t,i);else{e=i;var r=st;st|=2;var s=y_();(Wt!==t||qt!==e)&&(Li=null,$s=Lt()+500,jr(t,e));do try{pM();break}catch(a){x_(t,a)}while(!0);yh(),tc.current=s,st=r,Ft!==null?e=0:(Wt=null,qt=0,e=Bt)}if(e!==0){if(e===2&&(r=xd(t),r!==0&&(i=r,e=qd(t,r))),e===1)throw n=ia,jr(t,0),sr(t,i),vn(t,Lt()),n;if(e===6)sr(t,i);else{if(r=t.current.alternate,!(i&30)&&!fM(r)&&(e=rc(t,i),e===2&&(s=xd(t),s!==0&&(i=s,e=qd(t,s))),e===1))throw n=ia,jr(t,0),sr(t,i),vn(t,Lt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ae(345));case 2:Ur(t,hn,Li);break;case 3:if(sr(t,i),(i&130023424)===i&&(e=Uh+500-Lt(),10<e)){if(zl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){cn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=bd(Ur.bind(null,t,hn,Li),e);break}Ur(t,hn,Li);break;case 4:if(sr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ei(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Lt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*dM(i/1960))-i,10<i){t.timeoutHandle=bd(Ur.bind(null,t,hn,Li),i);break}Ur(t,hn,Li);break;case 5:Ur(t,hn,Li);break;default:throw Error(ae(329))}}}return vn(t,Lt()),t.callbackNode===n?__.bind(null,t):null}function qd(t,e){var n=ko;return t.current.memoizedState.isDehydrated&&(jr(t,e).flags|=256),t=rc(t,e),t!==2&&(e=hn,hn=n,e!==null&&$d(e)),t}function $d(t){hn===null?hn=t:hn.push.apply(hn,t)}function fM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ni(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function sr(t,e){for(e&=~Ih,e&=~Tc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ei(e),i=1<<n;t[n]=-1,e&=~i}}function Im(t){if(st&6)throw Error(ae(327));ks();var e=zl(t,0);if(!(e&1))return vn(t,Lt()),null;var n=rc(t,e);if(t.tag!==0&&n===2){var i=xd(t);i!==0&&(e=i,n=qd(t,i))}if(n===1)throw n=ia,jr(t,0),sr(t,e),vn(t,Lt()),n;if(n===6)throw Error(ae(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ur(t,hn,Li),vn(t,Lt()),null}function Fh(t,e){var n=st;st|=1;try{return t(e)}finally{st=n,st===0&&($s=Lt()+500,Sc&&Ar())}}function Jr(t){lr!==null&&lr.tag===0&&!(st&6)&&ks();var e=st;st|=1;var n=Hn.transition,i=lt;try{if(Hn.transition=null,lt=1,t)return t()}finally{lt=i,Hn.transition=n,st=e,!(st&6)&&Ar()}}function Oh(){Tn=Ds.current,xt(Ds)}function jr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,HS(n)),Ft!==null)for(n=Ft.return;n!==null;){var i=n;switch(vh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&jl();break;case 3:Xs(),xt(mn),xt(on),Ah();break;case 5:Th(i);break;case 4:Xs();break;case 13:xt(St);break;case 19:xt(St);break;case 10:Sh(i.type._context);break;case 22:case 23:Oh()}n=n.return}if(Wt=t,Ft=t=_r(t.current,null),qt=Tn=e,Bt=0,ia=null,Ih=Tc=Zr=0,hn=ko=null,zr!==null){for(e=0;e<zr.length;e++)if(n=zr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}zr=null}return t}function x_(t,e){do{var n=Ft;try{if(yh(),xl.current=ec,Ql){for(var i=Mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ql=!1}if(Kr=0,Gt=Ot=Mt=null,Oo=!1,ea=0,Dh.current=null,n===null||n.return===null){Bt=1,ia=e,Ft=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=qt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var g=Sm(o);if(g!==null){g.flags&=-257,Mm(g,o,a,s,e),g.mode&1&&ym(s,c,e),e=g,l=c;var v=e.updateQueue;if(v===null){var y=new Set;y.add(l),e.updateQueue=y}else v.add(l);break e}else{if(!(e&1)){ym(s,c,e),Bh();break e}l=Error(ae(426))}}else if(yt&&a.mode&1){var m=Sm(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Mm(m,o,a,s,e),_h(qs(l,a));break e}}s=l=qs(l,a),Bt!==4&&(Bt=2),ko===null?ko=[s]:ko.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=n_(s,l,e);pm(s,f);break e;case 1:a=l;var p=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(gr===null||!gr.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=i_(s,a,e);pm(s,M);break e}}s=s.return}while(s!==null)}M_(n)}catch(A){e=A,Ft===n&&n!==null&&(Ft=n=n.return);continue}break}while(!0)}function y_(){var t=tc.current;return tc.current=ec,t===null?ec:t}function Bh(){(Bt===0||Bt===3||Bt===2)&&(Bt=4),Wt===null||!(Zr&268435455)&&!(Tc&268435455)||sr(Wt,qt)}function rc(t,e){var n=st;st|=2;var i=y_();(Wt!==t||qt!==e)&&(Li=null,jr(t,e));do try{hM();break}catch(r){x_(t,r)}while(!0);if(yh(),st=n,tc.current=i,Ft!==null)throw Error(ae(261));return Wt=null,qt=0,Bt}function hM(){for(;Ft!==null;)S_(Ft)}function pM(){for(;Ft!==null&&!ky();)S_(Ft)}function S_(t){var e=w_(t.alternate,t,Tn);t.memoizedProps=t.pendingProps,e===null?M_(t):Ft=e,Dh.current=null}function M_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=aM(n,e),n!==null){n.flags&=32767,Ft=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Bt=6,Ft=null;return}}else if(n=oM(n,e,Tn),n!==null){Ft=n;return}if(e=e.sibling,e!==null){Ft=e;return}Ft=e=t}while(e!==null);Bt===0&&(Bt=5)}function Ur(t,e,n){var i=lt,r=Hn.transition;try{Hn.transition=null,lt=1,mM(t,e,n,i)}finally{Hn.transition=r,lt=i}return null}function mM(t,e,n,i){do ks();while(lr!==null);if(st&6)throw Error(ae(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ae(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Yy(t,s),t===Wt&&(Ft=Wt=null,qt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Va||(Va=!0,T_(kl,function(){return ks(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Hn.transition,Hn.transition=null;var o=lt;lt=1;var a=st;st|=4,Dh.current=null,cM(t,n),g_(n,t),US(Td),Vl=!!wd,Td=wd=null,t.current=n,uM(n),zy(),st=a,lt=o,Hn.transition=s}else t.current=n;if(Va&&(Va=!1,lr=t,ic=r),s=t.pendingLanes,s===0&&(gr=null),Gy(n.stateNode),vn(t,Lt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(nc)throw nc=!1,t=jd,jd=null,t;return ic&1&&t.tag!==0&&ks(),s=t.pendingLanes,s&1?t===Xd?zo++:(zo=0,Xd=t):zo=0,Ar(),null}function ks(){if(lr!==null){var t=nv(ic),e=Hn.transition,n=lt;try{if(Hn.transition=null,lt=16>t?16:t,lr===null)var i=!1;else{if(t=lr,lr=null,ic=0,st&6)throw Error(ae(331));var r=st;for(st|=4,Re=t.current;Re!==null;){var s=Re,o=s.child;if(Re.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Re=c;Re!==null;){var u=Re;switch(u.tag){case 0:case 11:case 15:Bo(8,u,s)}var h=u.child;if(h!==null)h.return=u,Re=h;else for(;Re!==null;){u=Re;var d=u.sibling,g=u.return;if(h_(u),u===c){Re=null;break}if(d!==null){d.return=g,Re=d;break}Re=g}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}Re=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Re=o;else e:for(;Re!==null;){if(s=Re,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Bo(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,Re=f;break e}Re=s.return}}var p=t.current;for(Re=p;Re!==null;){o=Re;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,Re=_;else e:for(o=p;Re!==null;){if(a=Re,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:wc(9,a)}}catch(A){At(a,a.return,A)}if(a===o){Re=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,Re=M;break e}Re=a.return}}if(st=r,Ar(),vi&&typeof vi.onPostCommitFiberRoot=="function")try{vi.onPostCommitFiberRoot(gc,t)}catch{}i=!0}return i}finally{lt=n,Hn.transition=e}}return!1}function Um(t,e,n){e=qs(n,e),e=n_(t,e,1),t=mr(t,e,1),e=cn(),t!==null&&(ua(t,1,e),vn(t,e))}function At(t,e,n){if(t.tag===3)Um(t,t,n);else for(;e!==null;){if(e.tag===3){Um(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(gr===null||!gr.has(i))){t=qs(n,t),t=i_(e,t,1),e=mr(e,t,1),t=cn(),e!==null&&(ua(e,1,t),vn(e,t));break}}e=e.return}}function gM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=cn(),t.pingedLanes|=t.suspendedLanes&n,Wt===t&&(qt&n)===n&&(Bt===4||Bt===3&&(qt&130023424)===qt&&500>Lt()-Uh?jr(t,0):Ih|=n),vn(t,e)}function E_(t,e){e===0&&(t.mode&1?(e=La,La<<=1,!(La&130023424)&&(La=4194304)):e=1);var n=cn();t=Vi(t,e),t!==null&&(ua(t,e,n),vn(t,n))}function vM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),E_(t,n)}function _M(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ae(314))}i!==null&&i.delete(e),E_(t,n)}var w_;w_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||mn.current)pn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return pn=!1,sM(t,e,n);pn=!!(t.flags&131072)}else pn=!1,yt&&e.flags&1048576&&Rv(e,$l,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Sl(t,e),t=e.pendingProps;var r=Gs(e,on.current);Bs(e,n),r=Rh(null,e,i,t,r,n);var s=Ch();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,gn(i)?(s=!0,Xl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Eh(e),r.updater=Ec,e.stateNode=r,r._reactInternals=e,Id(e,i,t,n),e=Od(null,e,i,!0,s,n)):(e.tag=0,yt&&s&&gh(e),ln(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Sl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=yM(i),t=Yn(i,t),r){case 0:e=Fd(null,e,i,t,n);break e;case 1:e=Tm(null,e,i,t,n);break e;case 11:e=Em(null,e,i,t,n);break e;case 14:e=wm(null,e,i,Yn(i.type,t),n);break e}throw Error(ae(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),Fd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),Tm(t,e,i,r,n);case 3:e:{if(a_(e),t===null)throw Error(ae(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Iv(t,e),Zl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=qs(Error(ae(423)),e),e=Am(t,e,i,n,r);break e}else if(i!==r){r=qs(Error(ae(424)),e),e=Am(t,e,i,n,r);break e}else for(bn=pr(e.stateNode.containerInfo.firstChild),Rn=e,yt=!0,Zn=null,n=Nv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ws(),i===r){e=Hi(t,e,n);break e}ln(t,e,i,n)}e=e.child}return e;case 5:return Uv(e),t===null&&Ld(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Ad(i,r)?o=null:s!==null&&Ad(i,s)&&(e.flags|=32),o_(t,e),ln(t,e,o,n),e.child;case 6:return t===null&&Ld(e),null;case 13:return l_(t,e,n);case 4:return wh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=js(e,null,i,n):ln(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),Em(t,e,i,r,n);case 7:return ln(t,e,e.pendingProps,n),e.child;case 8:return ln(t,e,e.pendingProps.children,n),e.child;case 12:return ln(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,vt(Yl,i._currentValue),i._currentValue=o,s!==null)if(ni(s.value,o)){if(s.children===r.children&&!mn.current){e=Hi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Fi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Nd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ae(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Nd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ln(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Bs(e,n),r=Gn(r),i=i(r),e.flags|=1,ln(t,e,i,n),e.child;case 14:return i=e.type,r=Yn(i,e.pendingProps),r=Yn(i.type,r),wm(t,e,i,r,n);case 15:return r_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),Sl(t,e),e.tag=1,gn(i)?(t=!0,Xl(e)):t=!1,Bs(e,n),t_(e,i,r),Id(e,i,r,n),Od(null,e,i,!0,t,n);case 19:return c_(t,e,n);case 22:return s_(t,e,n)}throw Error(ae(156,e.tag))};function T_(t,e){return J0(t,e)}function xM(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vn(t,e,n,i){return new xM(t,e,n,i)}function kh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function yM(t){if(typeof t=="function")return kh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===rh)return 11;if(t===sh)return 14}return 2}function _r(t,e){var n=t.alternate;return n===null?(n=Vn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function wl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")kh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Es:return Xr(n.children,r,s,e);case ih:o=8,r|=8;break;case rd:return t=Vn(12,n,e,r|2),t.elementType=rd,t.lanes=s,t;case sd:return t=Vn(13,n,e,r),t.elementType=sd,t.lanes=s,t;case od:return t=Vn(19,n,e,r),t.elementType=od,t.lanes=s,t;case U0:return Ac(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case D0:o=10;break e;case I0:o=9;break e;case rh:o=11;break e;case sh:o=14;break e;case nr:o=16,i=null;break e}throw Error(ae(130,t==null?t:typeof t,""))}return e=Vn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Xr(t,e,n,i){return t=Vn(7,t,i,e),t.lanes=n,t}function Ac(t,e,n,i){return t=Vn(22,t,i,e),t.elementType=U0,t.lanes=n,t.stateNode={isHidden:!1},t}function pu(t,e,n){return t=Vn(6,t,null,e),t.lanes=n,t}function mu(t,e,n){return e=Vn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function SM(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yc(0),this.expirationTimes=Yc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function zh(t,e,n,i,r,s,o,a,l){return t=new SM(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Vn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Eh(s),t}function MM(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ms,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function A_(t){if(!t)return Sr;t=t._reactInternals;e:{if(is(t)!==t||t.tag!==1)throw Error(ae(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(gn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ae(171))}if(t.tag===1){var n=t.type;if(gn(n))return Av(t,n,e)}return e}function b_(t,e,n,i,r,s,o,a,l){return t=zh(n,i,!0,t,r,s,o,a,l),t.context=A_(null),n=t.current,i=cn(),r=vr(n),s=Fi(i,r),s.callback=e??null,mr(n,s,r),t.current.lanes=r,ua(t,r,i),vn(t,i),t}function bc(t,e,n,i){var r=e.current,s=cn(),o=vr(r);return n=A_(n),e.context===null?e.context=n:e.pendingContext=n,e=Fi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=mr(r,e,o),t!==null&&(ti(t,r,o,s),_l(t,r,o)),o}function sc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Fm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Vh(t,e){Fm(t,e),(t=t.alternate)&&Fm(t,e)}function EM(){return null}var R_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Hh(t){this._internalRoot=t}Rc.prototype.render=Hh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ae(409));bc(t,e,null,null)};Rc.prototype.unmount=Hh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Jr(function(){bc(null,t,null,null)}),e[zi]=null}};function Rc(t){this._internalRoot=t}Rc.prototype.unstable_scheduleHydration=function(t){if(t){var e=sv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<rr.length&&e!==0&&e<rr[n].priority;n++);rr.splice(n,0,t),n===0&&av(t)}};function Gh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Cc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Om(){}function wM(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=sc(o);s.call(c)}}var o=b_(e,i,t,0,null,!1,!1,"",Om);return t._reactRootContainer=o,t[zi]=o.current,Yo(t.nodeType===8?t.parentNode:t),Jr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=sc(l);a.call(c)}}var l=zh(t,0,!1,null,null,!1,!1,"",Om);return t._reactRootContainer=l,t[zi]=l.current,Yo(t.nodeType===8?t.parentNode:t),Jr(function(){bc(e,l,n,i)}),l}function Pc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=sc(o);a.call(l)}}bc(e,o,t,r)}else o=wM(n,e,t,r,i);return sc(o)}iv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=bo(e.pendingLanes);n!==0&&(lh(e,n|1),vn(e,Lt()),!(st&6)&&($s=Lt()+500,Ar()))}break;case 13:Jr(function(){var i=Vi(t,1);if(i!==null){var r=cn();ti(i,t,1,r)}}),Vh(t,1)}};ch=function(t){if(t.tag===13){var e=Vi(t,134217728);if(e!==null){var n=cn();ti(e,t,134217728,n)}Vh(t,134217728)}};rv=function(t){if(t.tag===13){var e=vr(t),n=Vi(t,e);if(n!==null){var i=cn();ti(n,t,e,i)}Vh(t,e)}};sv=function(){return lt};ov=function(t,e){var n=lt;try{return lt=t,e()}finally{lt=n}};gd=function(t,e,n){switch(e){case"input":if(cd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=yc(i);if(!r)throw Error(ae(90));O0(i),cd(i,r)}}}break;case"textarea":k0(t,n);break;case"select":e=n.value,e!=null&&Is(t,!!n.multiple,e,!1)}};X0=Fh;q0=Jr;var TM={usingClientEntryPoint:!1,Events:[fa,bs,yc,W0,j0,Fh]},go={findFiberByHostInstance:kr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},AM={bundleType:go.bundleType,version:go.version,rendererPackageName:go.rendererPackageName,rendererConfig:go.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ji.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=K0(t),t===null?null:t.stateNode},findFiberByHostInstance:go.findFiberByHostInstance||EM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ha=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ha.isDisabled&&Ha.supportsFiber)try{gc=Ha.inject(AM),vi=Ha}catch{}}Ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=TM;Ln.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gh(e))throw Error(ae(200));return MM(t,e,null,n)};Ln.createRoot=function(t,e){if(!Gh(t))throw Error(ae(299));var n=!1,i="",r=R_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=zh(t,1,!1,null,null,n,!1,i,r),t[zi]=e.current,Yo(t.nodeType===8?t.parentNode:t),new Hh(e)};Ln.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ae(188)):(t=Object.keys(t).join(","),Error(ae(268,t)));return t=K0(e),t=t===null?null:t.stateNode,t};Ln.flushSync=function(t){return Jr(t)};Ln.hydrate=function(t,e,n){if(!Cc(e))throw Error(ae(200));return Pc(null,t,e,!0,n)};Ln.hydrateRoot=function(t,e,n){if(!Gh(t))throw Error(ae(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=R_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=b_(e,null,t,1,n??null,r,!1,s,o),t[zi]=e.current,Yo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Rc(e)};Ln.render=function(t,e,n){if(!Cc(e))throw Error(ae(200));return Pc(null,t,e,!1,n)};Ln.unmountComponentAtNode=function(t){if(!Cc(t))throw Error(ae(40));return t._reactRootContainer?(Jr(function(){Pc(null,null,t,!1,function(){t._reactRootContainer=null,t[zi]=null})}),!0):!1};Ln.unstable_batchedUpdates=Fh;Ln.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Cc(n))throw Error(ae(200));if(t==null||t._reactInternals===void 0)throw Error(ae(38));return Pc(t,e,n,!1,i)};Ln.version="18.3.1-next-f1338f8080-20240426";function C_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(C_)}catch(t){console.error(t)}}C_(),C0.exports=Ln;var bM=C0.exports,Bm=bM;nd.createRoot=Bm.createRoot,nd.hydrateRoot=Bm.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ra(){return ra=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ra.apply(this,arguments)}var cr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(cr||(cr={}));const km="popstate";function RM(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:o,hash:a}=i.location;return Yd("",{pathname:s,search:o,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:oc(r)}return PM(e,n,null,t)}function Nt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Wh(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function CM(){return Math.random().toString(36).substr(2,8)}function zm(t,e){return{usr:t.state,key:t.key,idx:e}}function Yd(t,e,n,i){return n===void 0&&(n=null),ra({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?io(e):e,{state:n,key:e&&e.key||i||CM()})}function oc(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function io(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function PM(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,o=r.history,a=cr.Pop,l=null,c=u();c==null&&(c=0,o.replaceState(ra({},o.state,{idx:c}),""));function u(){return(o.state||{idx:null}).idx}function h(){a=cr.Pop;let m=u(),f=m==null?null:m-c;c=m,l&&l({action:a,location:y.location,delta:f})}function d(m,f){a=cr.Push;let p=Yd(y.location,m,f);c=u()+1;let _=zm(p,c),M=y.createHref(p);try{o.pushState(_,"",M)}catch(A){if(A instanceof DOMException&&A.name==="DataCloneError")throw A;r.location.assign(M)}s&&l&&l({action:a,location:y.location,delta:1})}function g(m,f){a=cr.Replace;let p=Yd(y.location,m,f);c=u();let _=zm(p,c),M=y.createHref(p);o.replaceState(_,"",M),s&&l&&l({action:a,location:y.location,delta:0})}function v(m){let f=r.location.origin!=="null"?r.location.origin:r.location.href,p=typeof m=="string"?m:oc(m);return p=p.replace(/ $/,"%20"),Nt(f,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,f)}let y={get action(){return a},get location(){return t(r,o)},listen(m){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(km,h),l=m,()=>{r.removeEventListener(km,h),l=null}},createHref(m){return e(r,m)},createURL:v,encodeLocation(m){let f=v(m);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:d,replace:g,go(m){return o.go(m)}};return y}var Vm;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Vm||(Vm={}));function LM(t,e,n){return n===void 0&&(n="/"),NM(t,e,n)}function NM(t,e,n,i){let r=typeof e=="string"?io(e):e,s=jh(r.pathname||"/",n);if(s==null)return null;let o=P_(t);DM(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=jM(s);a=HM(o[l],c)}return a}function P_(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Nt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=xr([i,l.relativePath]),u=n.concat(l);s.children&&s.children.length>0&&(Nt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),P_(s.children,e,u,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:zM(c,s.index),routesMeta:u})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))r(s,o);else for(let l of L_(s.path))r(s,o,l)}),e}function L_(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let o=L_(i.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),r&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function DM(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:VM(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const IM=/^:[\w-]+$/,UM=3,FM=2,OM=1,BM=10,kM=-2,Hm=t=>t==="*";function zM(t,e){let n=t.split("/"),i=n.length;return n.some(Hm)&&(i+=kM),e&&(i+=FM),n.filter(r=>!Hm(r)).reduce((r,s)=>r+(IM.test(s)?UM:s===""?OM:BM),i)}function VM(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function HM(t,e,n){let{routesMeta:i}=t,r={},s="/",o=[];for(let a=0;a<i.length;++a){let l=i[a],c=a===i.length-1,u=s==="/"?e:e.slice(s.length)||"/",h=GM({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u),d=l.route;if(!h)return null;Object.assign(r,h.params),o.push({params:r,pathname:xr([s,h.pathname]),pathnameBase:KM(xr([s,h.pathnameBase])),route:d}),h.pathnameBase!=="/"&&(s=xr([s,h.pathnameBase]))}return o}function GM(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=WM(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((c,u,h)=>{let{paramName:d,isOptional:g}=u;if(d==="*"){let y=a[h]||"";o=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const v=a[h];return g&&!v?c[d]=void 0:c[d]=(v||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function WM(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Wh(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(i.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function jM(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Wh(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function jh(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}const XM=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qM=t=>XM.test(t);function $M(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?io(t):t,s;if(n)if(qM(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Wh(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=Gm(n.substring(1),"/"):s=Gm(n,e)}else s=e;return{pathname:s,search:ZM(i),hash:JM(r)}}function Gm(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function gu(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function YM(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Xh(t,e){let n=YM(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function qh(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=io(t):(r=ra({},t),Nt(!r.pathname||!r.pathname.includes("?"),gu("?","pathname","search",r)),Nt(!r.pathname||!r.pathname.includes("#"),gu("#","pathname","hash",r)),Nt(!r.search||!r.search.includes("#"),gu("#","search","hash",r)));let s=t===""||r.pathname==="",o=s?"/":r.pathname,a;if(o==null)a=n;else{let h=e.length-1;if(!i&&o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;r.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=$M(r,a),c=o&&o!=="/"&&o.endsWith("/"),u=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}const xr=t=>t.join("/").replace(/\/\/+/g,"/"),KM=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),ZM=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,JM=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function QM(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const N_=["post","put","patch","delete"];new Set(N_);const eE=["get",...N_];new Set(eE);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sa(){return sa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},sa.apply(this,arguments)}const $h=te.createContext(null),tE=te.createContext(null),br=te.createContext(null),Lc=te.createContext(null),Rr=te.createContext({outlet:null,matches:[],isDataRoute:!1}),D_=te.createContext(null);function nE(t,e){let{relative:n}=e===void 0?{}:e;ro()||Nt(!1);let{basename:i,navigator:r}=te.useContext(br),{hash:s,pathname:o,search:a}=U_(t,{relative:n}),l=o;return i!=="/"&&(l=o==="/"?i:xr([i,o])),r.createHref({pathname:l,search:a,hash:s})}function ro(){return te.useContext(Lc)!=null}function pa(){return ro()||Nt(!1),te.useContext(Lc).location}function I_(t){te.useContext(br).static||te.useLayoutEffect(t)}function Nc(){let{isDataRoute:t}=te.useContext(Rr);return t?mE():iE()}function iE(){ro()||Nt(!1);let t=te.useContext($h),{basename:e,future:n,navigator:i}=te.useContext(br),{matches:r}=te.useContext(Rr),{pathname:s}=pa(),o=JSON.stringify(Xh(r,n.v7_relativeSplatPath)),a=te.useRef(!1);return I_(()=>{a.current=!0}),te.useCallback(function(c,u){if(u===void 0&&(u={}),!a.current)return;if(typeof c=="number"){i.go(c);return}let h=qh(c,JSON.parse(o),s,u.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:xr([e,h.pathname])),(u.replace?i.replace:i.push)(h,u.state,u)},[e,i,o,s,t])}function U_(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=te.useContext(br),{matches:r}=te.useContext(Rr),{pathname:s}=pa(),o=JSON.stringify(Xh(r,i.v7_relativeSplatPath));return te.useMemo(()=>qh(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function rE(t,e){return sE(t,e)}function sE(t,e,n,i){ro()||Nt(!1);let{navigator:r}=te.useContext(br),{matches:s}=te.useContext(Rr),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=pa(),u;if(e){var h;let m=typeof e=="string"?io(e):e;l==="/"||(h=m.pathname)!=null&&h.startsWith(l)||Nt(!1),u=m}else u=c;let d=u.pathname||"/",g=d;if(l!=="/"){let m=l.replace(/^\//,"").split("/");g="/"+d.replace(/^\//,"").split("/").slice(m.length).join("/")}let v=LM(t,{pathname:g}),y=uE(v&&v.map(m=>Object.assign({},m,{params:Object.assign({},a,m.params),pathname:xr([l,r.encodeLocation?r.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?l:xr([l,r.encodeLocation?r.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),s,n,i);return e&&y?te.createElement(Lc.Provider,{value:{location:sa({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:cr.Pop}},y):y}function oE(){let t=pE(),e=QM(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return te.createElement(te.Fragment,null,te.createElement("h2",null,"Unexpected Application Error!"),te.createElement("h3",{style:{fontStyle:"italic"}},e),n?te.createElement("pre",{style:r},n):null,null)}const aE=te.createElement(oE,null);class lE extends te.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?te.createElement(Rr.Provider,{value:this.props.routeContext},te.createElement(D_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function cE(t){let{routeContext:e,match:n,children:i}=t,r=te.useContext($h);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),te.createElement(Rr.Provider,{value:e},i)}function uE(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(r=n)==null?void 0:r.errors;if(a!=null){let u=o.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id])!==void 0);u>=0||Nt(!1),o=o.slice(0,Math.min(o.length,u+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let u=0;u<o.length;u++){let h=o[u];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(c=u),h.route.id){let{loaderData:d,errors:g}=n,v=h.route.loader&&d[h.route.id]===void 0&&(!g||g[h.route.id]===void 0);if(h.route.lazy||v){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((u,h,d)=>{let g,v=!1,y=null,m=null;n&&(g=a&&h.route.id?a[h.route.id]:void 0,y=h.route.errorElement||aE,l&&(c<0&&d===0?(gE("route-fallback"),v=!0,m=null):c===d&&(v=!0,m=h.route.hydrateFallbackElement||null)));let f=e.concat(o.slice(0,d+1)),p=()=>{let _;return g?_=y:v?_=m:h.route.Component?_=te.createElement(h.route.Component,null):h.route.element?_=h.route.element:_=u,te.createElement(cE,{match:h,routeContext:{outlet:u,matches:f,isDataRoute:n!=null},children:_})};return n&&(h.route.ErrorBoundary||h.route.errorElement||d===0)?te.createElement(lE,{location:n.location,revalidation:n.revalidation,component:y,error:g,children:p(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):p()},null)}var F_=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(F_||{}),O_=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(O_||{});function dE(t){let e=te.useContext($h);return e||Nt(!1),e}function fE(t){let e=te.useContext(tE);return e||Nt(!1),e}function hE(t){let e=te.useContext(Rr);return e||Nt(!1),e}function B_(t){let e=hE(),n=e.matches[e.matches.length-1];return n.route.id||Nt(!1),n.route.id}function pE(){var t;let e=te.useContext(D_),n=fE(),i=B_();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function mE(){let{router:t}=dE(F_.UseNavigateStable),e=B_(O_.UseNavigateStable),n=te.useRef(!1);return I_(()=>{n.current=!0}),te.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,sa({fromRouteId:e},s)))},[t,e])}const Wm={};function gE(t,e,n){Wm[t]||(Wm[t]=!0)}function vE(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function ac(t){let{to:e,replace:n,state:i,relative:r}=t;ro()||Nt(!1);let{future:s,static:o}=te.useContext(br),{matches:a}=te.useContext(Rr),{pathname:l}=pa(),c=Nc(),u=qh(e,Xh(a,s.v7_relativeSplatPath),l,r==="path"),h=JSON.stringify(u);return te.useEffect(()=>c(JSON.parse(h),{replace:n,state:i,relative:r}),[c,h,r,n,i]),null}function Pi(t){Nt(!1)}function _E(t){let{basename:e="/",children:n=null,location:i,navigationType:r=cr.Pop,navigator:s,static:o=!1,future:a}=t;ro()&&Nt(!1);let l=e.replace(/^\/*/,"/"),c=te.useMemo(()=>({basename:l,navigator:s,static:o,future:sa({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof i=="string"&&(i=io(i));let{pathname:u="/",search:h="",hash:d="",state:g=null,key:v="default"}=i,y=te.useMemo(()=>{let m=jh(u,l);return m==null?null:{location:{pathname:m,search:h,hash:d,state:g,key:v},navigationType:r}},[l,u,h,d,g,v,r]);return y==null?null:te.createElement(br.Provider,{value:c},te.createElement(Lc.Provider,{children:n,value:y}))}function xE(t){let{children:e,location:n}=t;return rE(Kd(e),n)}new Promise(()=>{});function Kd(t,e){e===void 0&&(e=[]);let n=[];return te.Children.forEach(t,(i,r)=>{if(!te.isValidElement(i))return;let s=[...e,r];if(i.type===te.Fragment){n.push.apply(n,Kd(i.props.children,s));return}i.type!==Pi&&Nt(!1),!i.props.index||!i.props.children||Nt(!1);let o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=Kd(i.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zd(){return Zd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Zd.apply(this,arguments)}function yE(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function SE(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function ME(t,e){return t.button===0&&(!e||e==="_self")&&!SE(t)}const EE=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],wE="6";try{window.__reactRouterVersion=wE}catch{}const TE="startTransition",jm=gy[TE];function AE(t){let{basename:e,children:n,future:i,window:r}=t,s=te.useRef();s.current==null&&(s.current=RM({window:r,v5Compat:!0}));let o=s.current,[a,l]=te.useState({action:o.action,location:o.location}),{v7_startTransition:c}=i||{},u=te.useCallback(h=>{c&&jm?jm(()=>l(h)):l(h)},[l,c]);return te.useLayoutEffect(()=>o.listen(u),[o,u]),te.useEffect(()=>vE(i),[i]),te.createElement(_E,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:i})}const bE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",RE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Xm=te.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:u,viewTransition:h}=e,d=yE(e,EE),{basename:g}=te.useContext(br),v,y=!1;if(typeof c=="string"&&RE.test(c)&&(v=c,bE))try{let _=new URL(window.location.href),M=c.startsWith("//")?new URL(_.protocol+c):new URL(c),A=jh(M.pathname,g);M.origin===_.origin&&A!=null?c=A+M.search+M.hash:y=!0}catch{}let m=nE(c,{relative:r}),f=CE(c,{replace:o,state:a,target:l,preventScrollReset:u,relative:r,viewTransition:h});function p(_){i&&i(_),_.defaultPrevented||f(_)}return te.createElement("a",Zd({},d,{href:v||m,onClick:y||s?i:p,ref:n,target:l}))});var qm;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(qm||(qm={}));var $m;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})($m||($m={}));function CE(t,e){let{target:n,replace:i,state:r,preventScrollReset:s,relative:o,viewTransition:a}=e===void 0?{}:e,l=Nc(),c=pa(),u=U_(t,{relative:o});return te.useCallback(h=>{if(ME(h,n)){h.preventDefault();let d=i!==void 0?i:oc(c)===oc(u);l(t,{replace:d,state:r,preventScrollReset:s,relative:o,viewTransition:a})}},[c,l,u,i,r,n,t,s,o,a])}const PE="modulepreload",LE=function(t){return"/"+t},Ym={},k_=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.allSettled(n.map(l=>{if(l=LE(l),l in Ym)return;Ym[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const h=document.createElement("link");if(h.rel=c?"stylesheet":PE,c||(h.as="script"),h.crossOrigin="",h.href=l,a&&h.setAttribute("nonce",a),document.head.appendChild(h),c)return new Promise((d,g)=>{h.addEventListener("load",d),h.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z_=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NE=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DE=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,i)=>i?i.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Km=t=>{const e=DE(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var IE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UE=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FE=te.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...a},l)=>te.createElement("svg",{ref:l,...IE,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:z_("lucide",r),...!s&&!UE(a)&&{"aria-hidden":"true"},...a},[...o.map(([c,u])=>te.createElement(c,u)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dn=(t,e)=>{const n=te.forwardRef(({className:i,...r},s)=>te.createElement(FE,{ref:s,iconNode:e,className:z_(`lucide-${NE(Km(t))}`,`lucide-${t}`,i),...r}));return n.displayName=Km(t),n};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OE=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],BE=Dn("arrow-left",OE);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kE=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Zm=Dn("arrow-right",kE);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zE=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],V_=Dn("circle-check",zE);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VE=[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z",key:"1f1r0c"}]],Tl=Dn("diamond",VE);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HE=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],vu=Dn("eye-off",HE);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GE=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],_u=Dn("eye",GE);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WE=[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",key:"1s6t7t"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]],jE=Dn("key-round",WE);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XE=[["path",{d:"m10 17 5-5-5-5",key:"1bsop3"}],["path",{d:"M15 12H3",key:"6jk70r"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}]],qE=Dn("log-in",XE);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $E=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],YE=Dn("mail",$E);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KE=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],ZE=Dn("moon",KE);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JE=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],QE=Dn("shield-alert",JE);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],t1=Dn("sun",e1);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Jm=Dn("x",n1);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yh="184",i1=0,Qm=1,r1=2,Al=1,s1=2,Co=3,Mr=0,_n=1,pi=2,Oi=0,zs=1,eg=2,tg=3,ng=4,o1=5,Or=100,a1=101,l1=102,c1=103,u1=104,d1=200,f1=201,h1=202,p1=203,Jd=204,Qd=205,m1=206,g1=207,v1=208,_1=209,x1=210,y1=211,S1=212,M1=213,E1=214,ef=0,tf=1,nf=2,Ys=3,rf=4,sf=5,of=6,af=7,H_=0,w1=1,T1=2,xi=0,G_=1,W_=2,j_=3,Kh=4,X_=5,q_=6,$_=7,Y_=300,Qr=301,Ks=302,bl=303,xu=304,Dc=306,lf=1e3,Ui=1001,cf=1002,Xt=1003,A1=1004,Ga=1005,nn=1006,yu=1007,Hr=1008,An=1009,K_=1010,Z_=1011,oa=1012,Zh=1013,Mi=1014,mi=1015,Gi=1016,Jh=1017,Qh=1018,aa=1020,J_=35902,Q_=35899,ex=1021,tx=1022,Qn=1023,Wi=1026,Gr=1027,nx=1028,ep=1029,es=1030,tp=1031,np=1033,Rl=33776,Cl=33777,Pl=33778,Ll=33779,uf=35840,df=35841,ff=35842,hf=35843,pf=36196,mf=37492,gf=37496,vf=37488,_f=37489,lc=37490,xf=37491,yf=37808,Sf=37809,Mf=37810,Ef=37811,wf=37812,Tf=37813,Af=37814,bf=37815,Rf=37816,Cf=37817,Pf=37818,Lf=37819,Nf=37820,Df=37821,If=36492,Uf=36494,Ff=36495,Of=36283,Bf=36284,cc=36285,kf=36286,b1=3200,zf=0,R1=1,or="",On="srgb",uc="srgb-linear",dc="linear",at="srgb",ls=7680,ig=519,C1=512,P1=513,L1=514,ip=515,N1=516,D1=517,rp=518,I1=519,rg=35044,sg="300 es",gi=2e3,la=2001;function U1(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function fc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function F1(){const t=fc("canvas");return t.style.display="block",t}const og={};function ag(...t){const e="THREE."+t.shift();console.log(e,...t)}function ix(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function ke(...t){t=ix(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function rt(...t){t=ix(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Vf(...t){const e=t.join(" ");e in og||(og[e]=!0,ke(...t))}function O1(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const B1={[ef]:tf,[nf]:of,[rf]:af,[Ys]:sf,[tf]:ef,[of]:nf,[af]:rf,[sf]:Ys};class rs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Su=Math.PI/180,Hf=180/Math.PI;function ma(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Jt[t&255]+Jt[t>>8&255]+Jt[t>>16&255]+Jt[t>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[n&63|128]+Jt[n>>8&255]+"-"+Jt[n>>16&255]+Jt[n>>24&255]+Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]).toLowerCase()}function Qe(t,e,n){return Math.max(e,Math.min(n,t))}function k1(t,e){return(t%e+e)%e}function Mu(t,e,n){return(1-n)*t+n*e}function vo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function fn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const vp=class vp{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};vp.prototype.isVector2=!0;let tt=vp;class so{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3],d=s[o+0],g=s[o+1],v=s[o+2],y=s[o+3];if(h!==y||l!==d||c!==g||u!==v){let m=l*d+c*g+u*v+h*y;m<0&&(d=-d,g=-g,v=-v,y=-y,m=-m);let f=1-a;if(m<.9995){const p=Math.acos(m),_=Math.sin(p);f=Math.sin(f*p)/_,a=Math.sin(a*p)/_,l=l*f+d*a,c=c*f+g*a,u=u*f+v*a,h=h*f+y*a}else{l=l*f+d*a,c=c*f+g*a,u=u*f+v*a,h=h*f+y*a;const p=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=p,c*=p,u*=p,h*=p}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],d=s[o+1],g=s[o+2],v=s[o+3];return e[n]=a*v+u*h+l*g-c*d,e[n+1]=l*v+u*d+c*h-a*g,e[n+2]=c*v+u*g+a*d-l*h,e[n+3]=u*v-a*h-l*d-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),d=l(i/2),g=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*g*v,this._y=c*g*h-d*u*v,this._z=c*u*v+d*g*h,this._w=c*u*h-d*g*v;break;case"YXZ":this._x=d*u*h+c*g*v,this._y=c*g*h-d*u*v,this._z=c*u*v-d*g*h,this._w=c*u*h+d*g*v;break;case"ZXY":this._x=d*u*h-c*g*v,this._y=c*g*h+d*u*v,this._z=c*u*v+d*g*h,this._w=c*u*h-d*g*v;break;case"ZYX":this._x=d*u*h-c*g*v,this._y=c*g*h+d*u*v,this._z=c*u*v-d*g*h,this._w=c*u*h+d*g*v;break;case"YZX":this._x=d*u*h+c*g*v,this._y=c*g*h+d*u*v,this._z=c*u*v-d*g*h,this._w=c*u*h-d*g*v;break;case"XZY":this._x=d*u*h-c*g*v,this._y=c*g*h-d*u*v,this._z=c*u*v+d*g*h,this._w=c*u*h+d*g*v;break;default:ke("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],h=n[10],d=i+a+h;if(d>0){const g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(u-l)*g,this._y=(s-c)*g,this._z=(o-r)*g}else if(i>a&&i>h){const g=2*Math.sqrt(1+i-a-h);this._w=(u-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+c)/g}else if(a>h){const g=2*Math.sqrt(1+a-i-h);this._w=(s-c)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+u)/g}else{const g=2*Math.sqrt(1+h-i-a);this._w=(o-r)/g,this._x=(s+c)/g,this._y=(l+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const _p=class _p{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(lg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(lg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this.z=Qe(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this.z=Qe(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Eu.copy(this).projectOnVector(e),this.sub(Eu)}reflect(e){return this.sub(Eu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};_p.prototype.isVector3=!0;let z=_p;const Eu=new z,lg=new so,xp=class xp{constructor(e,n,i,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],g=i[5],v=i[8],y=r[0],m=r[3],f=r[6],p=r[1],_=r[4],M=r[7],A=r[2],w=r[5],R=r[8];return s[0]=o*y+a*p+l*A,s[3]=o*m+a*_+l*w,s[6]=o*f+a*M+l*R,s[1]=c*y+u*p+h*A,s[4]=c*m+u*_+h*w,s[7]=c*f+u*M+h*R,s[2]=d*y+g*p+v*A,s[5]=d*m+g*_+v*w,s[8]=d*f+g*M+v*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,g=c*s-o*l,v=n*h+i*d+r*g;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return e[0]=h*y,e[1]=(r*c-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=d*y,e[4]=(u*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=g*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(wu.makeScale(e,n)),this}rotate(e){return this.premultiply(wu.makeRotation(-e)),this}translate(e,n){return this.premultiply(wu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};xp.prototype.isMatrix3=!0;let Ge=xp;const wu=new Ge,cg=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ug=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function z1(){const t={enabled:!0,workingColorSpace:uc,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===at&&(r.r=Bi(r.r),r.g=Bi(r.g),r.b=Bi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===at&&(r.r=Vs(r.r),r.g=Vs(r.g),r.b=Vs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===or?dc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Vf("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Vf("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[uc]:{primaries:e,whitePoint:i,transfer:dc,toXYZ:cg,fromXYZ:ug,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:On},outputColorSpaceConfig:{drawingBufferColorSpace:On}},[On]:{primaries:e,whitePoint:i,transfer:at,toXYZ:cg,fromXYZ:ug,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:On}}}),t}const et=z1();function Bi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Vs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let cs;class V1{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{cs===void 0&&(cs=fc("canvas")),cs.width=e.width,cs.height=e.height;const r=cs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=cs}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=fc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Bi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Bi(n[i]/255)*255):n[i]=Bi(n[i]);return{data:n,width:e.width,height:e.height}}else return ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let H1=0;class sp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:H1++}),this.uuid=ma(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Tu(r[o].image)):s.push(Tu(r[o]))}else s=Tu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Tu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?V1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(ke("Texture: Unable to serialize Texture."),{})}let G1=0;const Au=new z;class rn extends rs{constructor(e=rn.DEFAULT_IMAGE,n=rn.DEFAULT_MAPPING,i=Ui,r=Ui,s=nn,o=Hr,a=Qn,l=An,c=rn.DEFAULT_ANISOTROPY,u=or){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:G1++}),this.uuid=ma(),this.name="",this.source=new sp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Au).x}get height(){return this.source.getSize(Au).y}get depth(){return this.source.getSize(Au).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){ke(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){ke(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Y_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case lf:e.x=e.x-Math.floor(e.x);break;case Ui:e.x=e.x<0?0:1;break;case cf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case lf:e.y=e.y-Math.floor(e.y);break;case Ui:e.y=e.y<0?0:1;break;case cf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=Y_;rn.DEFAULT_ANISOTROPY=1;const yp=class yp{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],g=l[5],v=l[9],y=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-y)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+y)<.1&&Math.abs(v+m)<.1&&Math.abs(c+g+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,M=(g+1)/2,A=(f+1)/2,w=(u+d)/4,R=(h+y)/4,x=(v+m)/4;return _>M&&_>A?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=w/i,s=R/i):M>A?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=w/r,s=x/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=R/s,r=x/s),this.set(i,r,s,n),this}let p=Math.sqrt((m-v)*(m-v)+(h-y)*(h-y)+(d-u)*(d-u));return Math.abs(p)<.001&&(p=1),this.x=(m-v)/p,this.y=(h-y)/p,this.z=(d-u)/p,this.w=Math.acos((c+g+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this.z=Qe(this.z,e.z,n.z),this.w=Qe(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this.z=Qe(this.z,e,n),this.w=Qe(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};yp.prototype.isVector4=!0;let bt=yp;class W1 extends rs{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new bt(0,0,e,n),this.scissorTest=!1,this.viewport=new bt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new rn(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new sp(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yi extends W1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class rx extends rn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class j1 extends rn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const pc=class pc{constructor(e,n,i,r,s,o,a,l,c,u,h,d,g,v,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,h,d,g,v,y,m)}set(e,n,i,r,s,o,a,l,c,u,h,d,g,v,y,m){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=g,f[7]=v,f[11]=y,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pc().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/us.setFromMatrixColumn(e,0).length(),s=1/us.setFromMatrixColumn(e,1).length(),o=1/us.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,g=o*h,v=a*u,y=a*h;n[0]=l*u,n[4]=-l*h,n[8]=c,n[1]=g+v*c,n[5]=d-y*c,n[9]=-a*l,n[2]=y-d*c,n[6]=v+g*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,g=l*h,v=c*u,y=c*h;n[0]=d+y*a,n[4]=v*a-g,n[8]=o*c,n[1]=o*h,n[5]=o*u,n[9]=-a,n[2]=g*a-v,n[6]=y+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,g=l*h,v=c*u,y=c*h;n[0]=d-y*a,n[4]=-o*h,n[8]=v+g*a,n[1]=g+v*a,n[5]=o*u,n[9]=y-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,g=o*h,v=a*u,y=a*h;n[0]=l*u,n[4]=v*c-g,n[8]=d*c+y,n[1]=l*h,n[5]=y*c+d,n[9]=g*c-v,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,g=o*c,v=a*l,y=a*c;n[0]=l*u,n[4]=y-d*h,n[8]=v*h+g,n[1]=h,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=g*h+v,n[10]=d-y*h}else if(e.order==="XZY"){const d=o*l,g=o*c,v=a*l,y=a*c;n[0]=l*u,n[4]=-h,n[8]=c*u,n[1]=d*h+y,n[5]=o*u,n[9]=g*h-v,n[2]=v*h-g,n[6]=a*u,n[10]=y*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(X1,e,q1)}lookAt(e,n,i){const r=this.elements;return Mn.subVectors(e,n),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Ki.crossVectors(i,Mn),Ki.lengthSq()===0&&(Math.abs(i.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Ki.crossVectors(i,Mn)),Ki.normalize(),Wa.crossVectors(Mn,Ki),r[0]=Ki.x,r[4]=Wa.x,r[8]=Mn.x,r[1]=Ki.y,r[5]=Wa.y,r[9]=Mn.y,r[2]=Ki.z,r[6]=Wa.z,r[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],g=i[13],v=i[2],y=i[6],m=i[10],f=i[14],p=i[3],_=i[7],M=i[11],A=i[15],w=r[0],R=r[4],x=r[8],b=r[12],C=r[1],P=r[5],U=r[9],$=r[13],q=r[2],I=r[6],B=r[10],G=r[14],O=r[3],X=r[7],Z=r[11],ie=r[15];return s[0]=o*w+a*C+l*q+c*O,s[4]=o*R+a*P+l*I+c*X,s[8]=o*x+a*U+l*B+c*Z,s[12]=o*b+a*$+l*G+c*ie,s[1]=u*w+h*C+d*q+g*O,s[5]=u*R+h*P+d*I+g*X,s[9]=u*x+h*U+d*B+g*Z,s[13]=u*b+h*$+d*G+g*ie,s[2]=v*w+y*C+m*q+f*O,s[6]=v*R+y*P+m*I+f*X,s[10]=v*x+y*U+m*B+f*Z,s[14]=v*b+y*$+m*G+f*ie,s[3]=p*w+_*C+M*q+A*O,s[7]=p*R+_*P+M*I+A*X,s[11]=p*x+_*U+M*B+A*Z,s[15]=p*b+_*$+M*G+A*ie,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],g=e[14],v=e[3],y=e[7],m=e[11],f=e[15],p=l*g-c*d,_=a*g-c*h,M=a*d-l*h,A=o*g-c*u,w=o*d-l*u,R=o*h-a*u;return n*(y*p-m*_+f*M)-i*(v*p-m*A+f*w)+r*(v*_-y*A+f*R)-s*(v*M-y*w+m*R)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],g=e[11],v=e[12],y=e[13],m=e[14],f=e[15],p=n*a-i*o,_=n*l-r*o,M=n*c-s*o,A=i*l-r*a,w=i*c-s*a,R=r*c-s*l,x=u*y-h*v,b=u*m-d*v,C=u*f-g*v,P=h*m-d*y,U=h*f-g*y,$=d*f-g*m,q=p*$-_*U+M*P+A*C-w*b+R*x;if(q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/q;return e[0]=(a*$-l*U+c*P)*I,e[1]=(r*U-i*$-s*P)*I,e[2]=(y*R-m*w+f*A)*I,e[3]=(d*w-h*R-g*A)*I,e[4]=(l*C-o*$-c*b)*I,e[5]=(n*$-r*C+s*b)*I,e[6]=(m*M-v*R-f*_)*I,e[7]=(u*R-d*M+g*_)*I,e[8]=(o*U-a*C+c*x)*I,e[9]=(i*C-n*U-s*x)*I,e[10]=(v*w-y*M+f*p)*I,e[11]=(h*M-u*w-g*p)*I,e[12]=(a*b-o*P-l*x)*I,e[13]=(n*P-i*b+r*x)*I,e[14]=(y*_-v*A-m*p)*I,e[15]=(u*A-h*_+d*p)*I,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,h=a+a,d=s*c,g=s*u,v=s*h,y=o*u,m=o*h,f=a*h,p=l*c,_=l*u,M=l*h,A=i.x,w=i.y,R=i.z;return r[0]=(1-(y+f))*A,r[1]=(g+M)*A,r[2]=(v-_)*A,r[3]=0,r[4]=(g-M)*w,r[5]=(1-(d+f))*w,r[6]=(m+p)*w,r[7]=0,r[8]=(v+_)*R,r[9]=(m-p)*R,r[10]=(1-(d+y))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let o=us.set(r[0],r[1],r[2]).length();const a=us.set(r[4],r[5],r[6]).length(),l=us.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Xn.copy(this);const c=1/o,u=1/a,h=1/l;return Xn.elements[0]*=c,Xn.elements[1]*=c,Xn.elements[2]*=c,Xn.elements[4]*=u,Xn.elements[5]*=u,Xn.elements[6]*=u,Xn.elements[8]*=h,Xn.elements[9]*=h,Xn.elements[10]*=h,n.setFromRotationMatrix(Xn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,r,s,o,a=gi,l=!1){const c=this.elements,u=2*s/(n-e),h=2*s/(i-r),d=(n+e)/(n-e),g=(i+r)/(i-r);let v,y;if(l)v=s/(o-s),y=o*s/(o-s);else if(a===gi)v=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===la)v=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=g,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=gi,l=!1){const c=this.elements,u=2/(n-e),h=2/(i-r),d=-(n+e)/(n-e),g=-(i+r)/(i-r);let v,y;if(l)v=1/(o-s),y=o/(o-s);else if(a===gi)v=-2/(o-s),y=-(o+s)/(o-s);else if(a===la)v=-1/(o-s),y=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=g,c[2]=0,c[6]=0,c[10]=v,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};pc.prototype.isMatrix4=!0;let Dt=pc;const us=new z,Xn=new Dt,X1=new z(0,0,0),q1=new z(1,1,1),Ki=new z,Wa=new z,Mn=new z,dg=new Dt,fg=new so;class Er{constructor(e=0,n=0,i=0,r=Er.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,g),this._y=0);break;default:ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return dg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return fg.setFromEuler(this),this.setFromQuaternion(fg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Er.DEFAULT_ORDER="XYZ";class sx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $1=0;const hg=new z,ds=new so,Ti=new Dt,ja=new z,_o=new z,Y1=new z,K1=new so,pg=new z(1,0,0),mg=new z(0,1,0),gg=new z(0,0,1),vg={type:"added"},Z1={type:"removed"},fs={type:"childadded",child:null},bu={type:"childremoved",child:null};class sn extends rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$1++}),this.uuid=ma(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=sn.DEFAULT_UP.clone();const e=new z,n=new Er,i=new so,r=new z(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Dt},normalMatrix:{value:new Ge}}),this.matrix=new Dt,this.matrixWorld=new Dt,this.matrixAutoUpdate=sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ds.setFromAxisAngle(e,n),this.quaternion.multiply(ds),this}rotateOnWorldAxis(e,n){return ds.setFromAxisAngle(e,n),this.quaternion.premultiply(ds),this}rotateX(e){return this.rotateOnAxis(pg,e)}rotateY(e){return this.rotateOnAxis(mg,e)}rotateZ(e){return this.rotateOnAxis(gg,e)}translateOnAxis(e,n){return hg.copy(e).applyQuaternion(this.quaternion),this.position.add(hg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(pg,e)}translateY(e){return this.translateOnAxis(mg,e)}translateZ(e){return this.translateOnAxis(gg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ja.copy(e):ja.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),_o.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(_o,ja,this.up):Ti.lookAt(ja,_o,this.up),this.quaternion.setFromRotationMatrix(Ti),r&&(Ti.extractRotation(r.matrixWorld),ds.setFromRotationMatrix(Ti),this.quaternion.premultiply(ds.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vg),fs.child=e,this.dispatchEvent(fs),fs.child=null):rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Z1),bu.child=e,this.dispatchEvent(bu),bu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vg),fs.child=e,this.dispatchEvent(fs),fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_o,e,Y1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_o,K1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),g=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),g.length>0&&(i.animations=g),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}sn.DEFAULT_UP=new z(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Po extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const J1={type:"move"};class Ru{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Po,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Po,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Po,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),f=this._getHandJoint(c,y);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),g=.02,v=.005;c.inputState.pinching&&d>g+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=g-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(J1)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Po;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const ox={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zi={h:0,s:0,l:0},Xa={h:0,s:0,l:0};function Cu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class nt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=On){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=et.workingColorSpace){return this.r=e,this.g=n,this.b=i,et.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=et.workingColorSpace){if(e=k1(e,1),n=Qe(n,0,1),i=Qe(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Cu(o,s,e+1/3),this.g=Cu(o,s,e),this.b=Cu(o,s,e-1/3)}return et.colorSpaceToWorking(this,r),this}setStyle(e,n=On){function i(s){s!==void 0&&parseFloat(s)<1&&ke("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:ke("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=On){const i=ox[e.toLowerCase()];return i!==void 0?this.setHex(i,n):ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bi(e.r),this.g=Bi(e.g),this.b=Bi(e.b),this}copyLinearToSRGB(e){return this.r=Vs(e.r),this.g=Vs(e.g),this.b=Vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=On){return et.workingToColorSpace(Qt.copy(this),e),Math.round(Qe(Qt.r*255,0,255))*65536+Math.round(Qe(Qt.g*255,0,255))*256+Math.round(Qe(Qt.b*255,0,255))}getHexString(e=On){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=et.workingColorSpace){et.workingToColorSpace(Qt.copy(this),n);const i=Qt.r,r=Qt.g,s=Qt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=et.workingColorSpace){return et.workingToColorSpace(Qt.copy(this),n),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=On){et.workingToColorSpace(Qt.copy(this),e);const n=Qt.r,i=Qt.g,r=Qt.b;return e!==On?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Zi),this.setHSL(Zi.h+e,Zi.s+n,Zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Zi),e.getHSL(Xa);const i=Mu(Zi.h,Xa.h,n),r=Mu(Zi.s,Xa.s,n),s=Mu(Zi.l,Xa.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new nt;nt.NAMES=ox;class Q1 extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Er,this.environmentIntensity=1,this.environmentRotation=new Er,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const qn=new z,Ai=new z,Pu=new z,bi=new z,hs=new z,ps=new z,_g=new z,Lu=new z,Nu=new z,Du=new z,Iu=new bt,Uu=new bt,Fu=new bt;class Jn{constructor(e=new z,n=new z,i=new z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),qn.subVectors(e,n),r.cross(qn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){qn.subVectors(r,n),Ai.subVectors(i,n),Pu.subVectors(e,n);const o=qn.dot(qn),a=qn.dot(Ai),l=qn.dot(Pu),c=Ai.dot(Ai),u=Ai.dot(Pu),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,g=(c*l-a*u)*d,v=(o*u-a*l)*d;return s.set(1-g-v,v,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,bi)===null?!1:bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,bi.x),l.addScaledVector(o,bi.y),l.addScaledVector(a,bi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Iu.setScalar(0),Uu.setScalar(0),Fu.setScalar(0),Iu.fromBufferAttribute(e,n),Uu.fromBufferAttribute(e,i),Fu.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Iu,s.x),o.addScaledVector(Uu,s.y),o.addScaledVector(Fu,s.z),o}static isFrontFacing(e,n,i,r){return qn.subVectors(i,n),Ai.subVectors(e,n),qn.cross(Ai).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),qn.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Jn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Jn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;hs.subVectors(r,i),ps.subVectors(s,i),Lu.subVectors(e,i);const l=hs.dot(Lu),c=ps.dot(Lu);if(l<=0&&c<=0)return n.copy(i);Nu.subVectors(e,r);const u=hs.dot(Nu),h=ps.dot(Nu);if(u>=0&&h<=u)return n.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(hs,o);Du.subVectors(e,s);const g=hs.dot(Du),v=ps.dot(Du);if(v>=0&&g<=v)return n.copy(s);const y=g*c-l*v;if(y<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(i).addScaledVector(ps,a);const m=u*v-g*h;if(m<=0&&h-u>=0&&g-v>=0)return _g.subVectors(s,r),a=(h-u)/(h-u+(g-v)),n.copy(r).addScaledVector(_g,a);const f=1/(m+y+d);return o=y*f,a=d*f,n.copy(i).addScaledVector(hs,o).addScaledVector(ps,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ga{constructor(e=new z(1/0,1/0,1/0),n=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint($n.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint($n.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=$n.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,$n):$n.fromBufferAttribute(s,o),$n.applyMatrix4(e.matrixWorld),this.expandByPoint($n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),qa.copy(i.boundingBox)),qa.applyMatrix4(e.matrixWorld),this.union(qa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xo),$a.subVectors(this.max,xo),ms.subVectors(e.a,xo),gs.subVectors(e.b,xo),vs.subVectors(e.c,xo),Ji.subVectors(gs,ms),Qi.subVectors(vs,gs),Pr.subVectors(ms,vs);let n=[0,-Ji.z,Ji.y,0,-Qi.z,Qi.y,0,-Pr.z,Pr.y,Ji.z,0,-Ji.x,Qi.z,0,-Qi.x,Pr.z,0,-Pr.x,-Ji.y,Ji.x,0,-Qi.y,Qi.x,0,-Pr.y,Pr.x,0];return!Ou(n,ms,gs,vs,$a)||(n=[1,0,0,0,1,0,0,0,1],!Ou(n,ms,gs,vs,$a))?!1:(Ya.crossVectors(Ji,Qi),n=[Ya.x,Ya.y,Ya.z],Ou(n,ms,gs,vs,$a))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ri=[new z,new z,new z,new z,new z,new z,new z,new z],$n=new z,qa=new ga,ms=new z,gs=new z,vs=new z,Ji=new z,Qi=new z,Pr=new z,xo=new z,$a=new z,Ya=new z,Lr=new z;function Ou(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Lr.fromArray(t,s);const a=r.x*Math.abs(Lr.x)+r.y*Math.abs(Lr.y)+r.z*Math.abs(Lr.z),l=e.dot(Lr),c=n.dot(Lr),u=i.dot(Lr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Ut=new z,Ka=new tt;let ew=0;class Si extends rs{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ew++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=rg,this.updateRanges=[],this.gpuType=mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ka.fromBufferAttribute(this,n),Ka.applyMatrix3(e),this.setXY(n,Ka.x,Ka.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyMatrix3(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyMatrix4(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyNormalMatrix(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.transformDirection(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=vo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=fn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=vo(n,this.array)),n}setX(e,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=vo(n,this.array)),n}setY(e,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=vo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=vo(n,this.array)),n}setW(e,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=fn(n,this.array),i=fn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=fn(n,this.array),i=fn(i,this.array),r=fn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=fn(n,this.array),i=fn(i,this.array),r=fn(r,this.array),s=fn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==rg&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class ax extends Si{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class lx extends Si{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Cn extends Si{constructor(e,n,i){super(new Float32Array(e),n,i)}}const tw=new ga,yo=new z,Bu=new z;class op{constructor(e=new z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):tw.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yo.subVectors(e,this.center);const n=yo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(yo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yo.copy(e.center).add(Bu)),this.expandByPoint(yo.copy(e.center).sub(Bu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let nw=0;const Un=new Dt,ku=new sn,_s=new z,En=new ga,So=new ga,Vt=new z;class ri extends rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nw++}),this.uuid=ma(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(U1(e)?lx:ax)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,n,i){return Un.makeTranslation(e,n,i),this.applyMatrix4(Un),this}scale(e,n,i){return Un.makeScale(e,n,i),this.applyMatrix4(Un),this}lookAt(e){return ku.lookAt(e),ku.updateMatrix(),this.applyMatrix4(ku.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Cn(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ga);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];En.setFromBufferAttribute(s),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new op);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(En.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];So.setFromBufferAttribute(a),this.morphTargetsRelative?(Vt.addVectors(En.min,So.min),En.expandByPoint(Vt),Vt.addVectors(En.max,So.max),En.expandByPoint(Vt)):(En.expandByPoint(So.min),En.expandByPoint(So.max))}En.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Vt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Vt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Vt.fromBufferAttribute(a,c),l&&(_s.fromBufferAttribute(e,c),Vt.add(_s)),r=Math.max(r,i.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Si(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let x=0;x<i.count;x++)a[x]=new z,l[x]=new z;const c=new z,u=new z,h=new z,d=new tt,g=new tt,v=new tt,y=new z,m=new z;function f(x,b,C){c.fromBufferAttribute(i,x),u.fromBufferAttribute(i,b),h.fromBufferAttribute(i,C),d.fromBufferAttribute(s,x),g.fromBufferAttribute(s,b),v.fromBufferAttribute(s,C),u.sub(c),h.sub(c),g.sub(d),v.sub(d);const P=1/(g.x*v.y-v.x*g.y);isFinite(P)&&(y.copy(u).multiplyScalar(v.y).addScaledVector(h,-g.y).multiplyScalar(P),m.copy(h).multiplyScalar(g.x).addScaledVector(u,-v.x).multiplyScalar(P),a[x].add(y),a[b].add(y),a[C].add(y),l[x].add(m),l[b].add(m),l[C].add(m))}let p=this.groups;p.length===0&&(p=[{start:0,count:e.count}]);for(let x=0,b=p.length;x<b;++x){const C=p[x],P=C.start,U=C.count;for(let $=P,q=P+U;$<q;$+=3)f(e.getX($+0),e.getX($+1),e.getX($+2))}const _=new z,M=new z,A=new z,w=new z;function R(x){A.fromBufferAttribute(r,x),w.copy(A);const b=a[x];_.copy(b),_.sub(A.multiplyScalar(A.dot(b))).normalize(),M.crossVectors(w,b);const P=M.dot(l[x])<0?-1:1;o.setXYZW(x,_.x,_.y,_.z,P)}for(let x=0,b=p.length;x<b;++x){const C=p[x],P=C.start,U=C.count;for(let $=P,q=P+U;$<q;$+=3)R(e.getX($+0)),R(e.getX($+1)),R(e.getX($+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Si(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,g=i.count;d<g;d++)i.setXYZ(d,0,0,0);const r=new z,s=new z,o=new z,a=new z,l=new z,c=new z,u=new z,h=new z;if(e)for(let d=0,g=e.count;d<g;d+=3){const v=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,g=n.count;d<g;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Vt.fromBufferAttribute(e,n),Vt.normalize(),e.setXYZ(n,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let g=0,v=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?g=l[y]*a.data.stride+a.offset:g=l[y]*u;for(let f=0;f<u;f++)d[v++]=c[g++]}return new Si(d,u,h)}if(this.index===null)return ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ri,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],g=e(d,i);l.push(g)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const g=c[h];u.push(g.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,g=h.length;d<g;d++)u.push(h[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let iw=0;class va extends rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:iw++}),this.uuid=ma(),this.name="",this.type="Material",this.blending=zs,this.side=Mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jd,this.blendDst=Qd,this.blendEquation=Or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=Ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ig,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ls,this.stencilZFail=ls,this.stencilZPass=ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){ke(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){ke(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==zs&&(i.blending=this.blending),this.side!==Mr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Jd&&(i.blendSrc=this.blendSrc),this.blendDst!==Qd&&(i.blendDst=this.blendDst),this.blendEquation!==Or&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ys&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ig&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ls&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ls&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ls&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ci=new z,zu=new z,Za=new z,er=new z,Vu=new z,Ja=new z,Hu=new z;class rw{constructor(e=new z,n=new z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ci.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,n),Ci.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){zu.copy(e).add(n).multiplyScalar(.5),Za.copy(n).sub(e).normalize(),er.copy(this.origin).sub(zu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Za),a=er.dot(this.direction),l=-er.dot(Za),c=er.lengthSq(),u=Math.abs(1-o*o);let h,d,g,v;if(u>0)if(h=o*l-a,d=o*a-l,v=s*u,h>=0)if(d>=-v)if(d<=v){const y=1/u;h*=y,d*=y,g=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),g=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),g=-h*h+d*(d+2*l)+c;else d<=-v?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),g=-h*h+d*(d+2*l)+c):d<=v?(h=0,d=Math.min(Math.max(-s,-l),s),g=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),g=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),g=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(zu).addScaledVector(Za,d),g}intersectSphere(e,n){Ci.subVectors(e.center,this.origin);const i=Ci.dot(this.direction),r=Ci.dot(Ci)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,n,i,r,s){Vu.subVectors(n,e),Ja.subVectors(i,e),Hu.crossVectors(Vu,Ja);let o=this.direction.dot(Hu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;er.subVectors(this.origin,e);const l=a*this.direction.dot(Ja.crossVectors(er,Ja));if(l<0)return null;const c=a*this.direction.dot(Vu.cross(er));if(c<0||l+c>o)return null;const u=-a*er.dot(Hu);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ap extends va{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Er,this.combine=H_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xg=new Dt,Nr=new rw,Qa=new op,yg=new z,el=new z,tl=new z,nl=new z,Gu=new z,il=new z,Sg=new z,rl=new z;class ii extends sn{constructor(e=new ri,n=new ap){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){il.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Gu.fromBufferAttribute(h,e),o?il.addScaledVector(Gu,u):il.addScaledVector(Gu.sub(n),u))}n.add(il)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Qa.copy(i.boundingSphere),Qa.applyMatrix4(s),Nr.copy(e.ray).recast(e.near),!(Qa.containsPoint(Nr.origin)===!1&&(Nr.intersectSphere(Qa,yg)===null||Nr.origin.distanceToSquared(yg)>(e.far-e.near)**2))&&(xg.copy(s).invert(),Nr.copy(e.ray).applyMatrix4(xg),!(i.boundingBox!==null&&Nr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Nr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,y=d.length;v<y;v++){const m=d[v],f=o[m.materialIndex],p=Math.max(m.start,g.start),_=Math.min(a.count,Math.min(m.start+m.count,g.start+g.count));for(let M=p,A=_;M<A;M+=3){const w=a.getX(M),R=a.getX(M+1),x=a.getX(M+2);r=sl(this,f,e,i,c,u,h,w,R,x),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,g.start),y=Math.min(a.count,g.start+g.count);for(let m=v,f=y;m<f;m+=3){const p=a.getX(m),_=a.getX(m+1),M=a.getX(m+2);r=sl(this,o,e,i,c,u,h,p,_,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,y=d.length;v<y;v++){const m=d[v],f=o[m.materialIndex],p=Math.max(m.start,g.start),_=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let M=p,A=_;M<A;M+=3){const w=M,R=M+1,x=M+2;r=sl(this,f,e,i,c,u,h,w,R,x),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,g.start),y=Math.min(l.count,g.start+g.count);for(let m=v,f=y;m<f;m+=3){const p=m,_=m+1,M=m+2;r=sl(this,o,e,i,c,u,h,p,_,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function sw(t,e,n,i,r,s,o,a){let l;if(e.side===_n?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Mr,a),l===null)return null;rl.copy(a),rl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(rl);return c<n.near||c>n.far?null:{distance:c,point:rl.clone(),object:t}}function sl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,el),t.getVertexPosition(l,tl),t.getVertexPosition(c,nl);const u=sw(t,e,n,i,el,tl,nl,Sg);if(u){const h=new z;Jn.getBarycoord(Sg,el,tl,nl,h),r&&(u.uv=Jn.getInterpolatedAttribute(r,a,l,c,h,new tt)),s&&(u.uv1=Jn.getInterpolatedAttribute(s,a,l,c,h,new tt)),o&&(u.normal=Jn.getInterpolatedAttribute(o,a,l,c,h,new z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new z,materialIndex:0};Jn.getNormal(el,tl,nl,d.normal),u.face=d,u.barycoord=h}return u}class ow extends rn{constructor(e=null,n=1,i=1,r,s,o,a,l,c=Xt,u=Xt,h,d){super(null,o,a,l,c,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Wu=new z,aw=new z,lw=new Ge;class Fr{constructor(e=new z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Wu.subVectors(i,n).cross(aw.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(Wu),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||lw.getNormalMatrix(e),r=this.coplanarPoint(Wu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Dr=new op,cw=new tt(.5,.5),ol=new z;class lp{constructor(e=new Fr,n=new Fr,i=new Fr,r=new Fr,s=new Fr,o=new Fr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=gi,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],d=s[6],g=s[7],v=s[8],y=s[9],m=s[10],f=s[11],p=s[12],_=s[13],M=s[14],A=s[15];if(r[0].setComponents(c-o,g-u,f-v,A-p).normalize(),r[1].setComponents(c+o,g+u,f+v,A+p).normalize(),r[2].setComponents(c+a,g+h,f+y,A+_).normalize(),r[3].setComponents(c-a,g-h,f-y,A-_).normalize(),i)r[4].setComponents(l,d,m,M).normalize(),r[5].setComponents(c-l,g-d,f-m,A-M).normalize();else if(r[4].setComponents(c-l,g-d,f-m,A-M).normalize(),n===gi)r[5].setComponents(c+l,g+d,f+m,A+M).normalize();else if(n===la)r[5].setComponents(l,d,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Dr)}intersectsSprite(e){Dr.center.set(0,0,0);const n=cw.distanceTo(e.center);return Dr.radius=.7071067811865476+n,Dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Dr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ol.x=r.normal.x>0?e.max.x:e.min.x,ol.y=r.normal.y>0?e.max.y:e.min.y,ol.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ol)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class cx extends rn{constructor(e=[],n=Qr,i,r,s,o,a,l,c,u){super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class uw extends rn{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Zs extends rn{constructor(e,n,i=Mi,r,s,o,a=Xt,l=Xt,c,u=Wi,h=1){if(u!==Wi&&u!==Gr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:h};super(d,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new sp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class dw extends Zs{constructor(e,n=Mi,i=Qr,r,s,o=Xt,a=Xt,l,c=Wi){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,n,i,r,s,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ux extends rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class _a extends ri{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,g=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Cn(c,3)),this.setAttribute("normal",new Cn(u,3)),this.setAttribute("uv",new Cn(h,2));function v(y,m,f,p,_,M,A,w,R,x,b){const C=M/R,P=A/x,U=M/2,$=A/2,q=w/2,I=R+1,B=x+1;let G=0,O=0;const X=new z;for(let Z=0;Z<B;Z++){const ie=Z*P-$;for(let le=0;le<I;le++){const Fe=le*C-U;X[y]=Fe*p,X[m]=ie*_,X[f]=q,c.push(X.x,X.y,X.z),X[y]=0,X[m]=0,X[f]=w>0?1:-1,u.push(X.x,X.y,X.z),h.push(le/R),h.push(1-Z/x),G+=1}}for(let Z=0;Z<x;Z++)for(let ie=0;ie<R;ie++){const le=d+ie+I*Z,Fe=d+ie+I*(Z+1),Ue=d+(ie+1)+I*(Z+1),ce=d+(ie+1)+I*Z;l.push(le,Fe,ce),l.push(Fe,Ue,ce),O+=6}a.addGroup(g,O,b),g+=O,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _a(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class cp extends ri{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new Cn(s,3)),this.setAttribute("normal",new Cn(s.slice(),3)),this.setAttribute("uv",new Cn(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(p){const _=new z,M=new z,A=new z;for(let w=0;w<n.length;w+=3)g(n[w+0],_),g(n[w+1],M),g(n[w+2],A),l(_,M,A,p)}function l(p,_,M,A){const w=A+1,R=[];for(let x=0;x<=w;x++){R[x]=[];const b=p.clone().lerp(M,x/w),C=_.clone().lerp(M,x/w),P=w-x;for(let U=0;U<=P;U++)U===0&&x===w?R[x][U]=b:R[x][U]=b.clone().lerp(C,U/P)}for(let x=0;x<w;x++)for(let b=0;b<2*(w-x)-1;b++){const C=Math.floor(b/2);b%2===0?(d(R[x][C+1]),d(R[x+1][C]),d(R[x][C])):(d(R[x][C+1]),d(R[x+1][C+1]),d(R[x+1][C]))}}function c(p){const _=new z;for(let M=0;M<s.length;M+=3)_.x=s[M+0],_.y=s[M+1],_.z=s[M+2],_.normalize().multiplyScalar(p),s[M+0]=_.x,s[M+1]=_.y,s[M+2]=_.z}function u(){const p=new z;for(let _=0;_<s.length;_+=3){p.x=s[_+0],p.y=s[_+1],p.z=s[_+2];const M=m(p)/2/Math.PI+.5,A=f(p)/Math.PI+.5;o.push(M,1-A)}v(),h()}function h(){for(let p=0;p<o.length;p+=6){const _=o[p+0],M=o[p+2],A=o[p+4],w=Math.max(_,M,A),R=Math.min(_,M,A);w>.9&&R<.1&&(_<.2&&(o[p+0]+=1),M<.2&&(o[p+2]+=1),A<.2&&(o[p+4]+=1))}}function d(p){s.push(p.x,p.y,p.z)}function g(p,_){const M=p*3;_.x=e[M+0],_.y=e[M+1],_.z=e[M+2]}function v(){const p=new z,_=new z,M=new z,A=new z,w=new tt,R=new tt,x=new tt;for(let b=0,C=0;b<s.length;b+=9,C+=6){p.set(s[b+0],s[b+1],s[b+2]),_.set(s[b+3],s[b+4],s[b+5]),M.set(s[b+6],s[b+7],s[b+8]),w.set(o[C+0],o[C+1]),R.set(o[C+2],o[C+3]),x.set(o[C+4],o[C+5]),A.copy(p).add(_).add(M).divideScalar(3);const P=m(A);y(w,C+0,p,P),y(R,C+2,_,P),y(x,C+4,M,P)}}function y(p,_,M,A){A<0&&p.x===1&&(o[_]=p.x-1),M.x===0&&M.z===0&&(o[_]=A/2/Math.PI+.5)}function m(p){return Math.atan2(p.z,-p.x)}function f(p){return Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cp(e.vertices,e.indices,e.radius,e.detail)}}class up extends cp{constructor(e=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new up(e.radius,e.detail)}}class Ic extends ri{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,d=n/l,g=[],v=[],y=[],m=[];for(let f=0;f<u;f++){const p=f*d-o;for(let _=0;_<c;_++){const M=_*h-s;v.push(M,-p,0),y.push(0,0,1),m.push(_/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let p=0;p<a;p++){const _=p+c*f,M=p+c*(f+1),A=p+1+c*(f+1),w=p+1+c*f;g.push(_,M,w),g.push(M,A,w)}this.setIndex(g),this.setAttribute("position",new Cn(v,3)),this.setAttribute("normal",new Cn(y,3)),this.setAttribute("uv",new Cn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ic(e.width,e.height,e.widthSegments,e.heightSegments)}}function Js(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(Mg(r))r.isRenderTargetTexture?(ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(Mg(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function an(t){const e={};for(let n=0;n<t.length;n++){const i=Js(t[n]);for(const r in i)e[r]=i[r]}return e}function Mg(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function fw(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function dx(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const hw={clone:Js,merge:an};var pw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ei extends va{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pw,this.fragmentShader=mw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Js(e.uniforms),this.uniformsGroups=fw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class gw extends Ei{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class vw extends va{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zf,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Er,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _w extends vw{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new tt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new nt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new nt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new nt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class xw extends va{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=b1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class yw extends va{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class fx extends sn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new nt(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const ju=new Dt,Eg=new z,wg=new z;class Sw{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.mapType=An,this.map=null,this.mapPass=null,this.matrix=new Dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lp,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Eg.setFromMatrixPosition(e.matrixWorld),n.position.copy(Eg),wg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(wg),n.updateMatrixWorld(),ju.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ju,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===la||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ju)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const al=new z,ll=new so,ci=new z;class hx extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Dt,this.projectionMatrix=new Dt,this.projectionMatrixInverse=new Dt,this.coordinateSystem=gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(al,ll,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(al,ll,ci.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(al,ll,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(al,ll,ci.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const tr=new z,Tg=new tt,Ag=new tt;class zn extends hx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Hf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Su*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hf*2*Math.atan(Math.tan(Su*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){tr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(tr.x,tr.y).multiplyScalar(-e/tr.z),tr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(tr.x,tr.y).multiplyScalar(-e/tr.z)}getViewSize(e,n){return this.getViewBounds(e,Tg,Ag),n.subVectors(Ag,Tg)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Su*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class dp extends hx{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Mw extends Sw{constructor(){super(new dp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class cl extends fx{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.target=new sn,this.shadow=new Mw}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class Ew extends fx{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const xs=-90,ys=1;class ww extends sn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new zn(xs,ys,e,n);r.layers=this.layers,this.add(r);const s=new zn(xs,ys,e,n);s.layers=this.layers,this.add(s);const o=new zn(xs,ys,e,n);o.layers=this.layers,this.add(o);const a=new zn(xs,ys,e,n);a.layers=this.layers,this.add(a);const l=new zn(xs,ys,e,n);l.layers=this.layers,this.add(l);const c=new zn(xs,ys,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===gi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===la)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(h,d,g),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Tw extends zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Sp=class Sp{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};Sp.prototype.isMatrix2=!0;let bg=Sp;function Rg(t,e,n,i){const r=Aw(i);switch(n){case ex:return t*e;case nx:return t*e/r.components*r.byteLength;case ep:return t*e/r.components*r.byteLength;case es:return t*e*2/r.components*r.byteLength;case tp:return t*e*2/r.components*r.byteLength;case tx:return t*e*3/r.components*r.byteLength;case Qn:return t*e*4/r.components*r.byteLength;case np:return t*e*4/r.components*r.byteLength;case Rl:case Cl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Pl:case Ll:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case df:case hf:return Math.max(t,16)*Math.max(e,8)/4;case uf:case ff:return Math.max(t,8)*Math.max(e,8)/2;case pf:case mf:case vf:case _f:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case gf:case lc:case xf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case yf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Sf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Mf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Ef:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case wf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Tf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Af:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case bf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Rf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Cf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Pf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Lf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Nf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Df:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case If:case Uf:case Ff:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Of:case Bf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case cc:case kf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Aw(t){switch(t){case An:case K_:return{byteLength:1,components:1};case oa:case Z_:case Gi:return{byteLength:2,components:1};case Jh:case Qh:return{byteLength:2,components:4};case Mi:case Zh:case mi:return{byteLength:4,components:1};case J_:case Q_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yh}}));typeof window<"u"&&(window.__THREE__?ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function px(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function bw(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let g;if(c instanceof Float32Array)g=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)g=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?g=t.HALF_FLOAT:g=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=t.SHORT;else if(c instanceof Uint32Array)g=t.UNSIGNED_INT;else if(c instanceof Int32Array)g=t.INT;else if(c instanceof Int8Array)g=t.BYTE;else if(c instanceof Uint8Array)g=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(t.bindBuffer(c,a),h.length===0)t.bufferSubData(c,0,u);else{h.sort((g,v)=>g.start-v.start);let d=0;for(let g=1;g<h.length;g++){const v=h[d],y=h[g];y.start<=v.start+v.count+1?v.count=Math.max(v.count,y.start+y.count-v.start):(++d,h[d]=y)}h.length=d+1;for(let g=0,v=h.length;g<v;g++){const y=h[g];t.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Rw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cw=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Pw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Iw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Uw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fw=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Ow=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zw=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Vw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Hw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Gw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ww=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,$w=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Yw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Kw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Zw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Jw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Qw=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,eT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,iT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rT="gl_FragColor = linearToOutputTexel( gl_FragColor );",sT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,oT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,aT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,lT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,cT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,dT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,gT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_T=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,yT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ST=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,MT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ET=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,TT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,AT=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,RT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,CT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,PT=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,LT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,NT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,DT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,UT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,FT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,OT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,BT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,VT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,HT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,GT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,WT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,jT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,XT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,qT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$T=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ZT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,JT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,QT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,rA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,oA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,aA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,dA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,fA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,hA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,pA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,gA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_A=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,SA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,MA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,EA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,wA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,TA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,AA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,bA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const RA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,CA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,UA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,FA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,OA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,BA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,VA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,HA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,GA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,qA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$A=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,YA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,KA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,QA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ib=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ob=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ab=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qe={alphahash_fragment:Rw,alphahash_pars_fragment:Cw,alphamap_fragment:Pw,alphamap_pars_fragment:Lw,alphatest_fragment:Nw,alphatest_pars_fragment:Dw,aomap_fragment:Iw,aomap_pars_fragment:Uw,batching_pars_vertex:Fw,batching_vertex:Ow,begin_vertex:Bw,beginnormal_vertex:kw,bsdfs:zw,iridescence_fragment:Vw,bumpmap_pars_fragment:Hw,clipping_planes_fragment:Gw,clipping_planes_pars_fragment:Ww,clipping_planes_pars_vertex:jw,clipping_planes_vertex:Xw,color_fragment:qw,color_pars_fragment:$w,color_pars_vertex:Yw,color_vertex:Kw,common:Zw,cube_uv_reflection_fragment:Jw,defaultnormal_vertex:Qw,displacementmap_pars_vertex:eT,displacementmap_vertex:tT,emissivemap_fragment:nT,emissivemap_pars_fragment:iT,colorspace_fragment:rT,colorspace_pars_fragment:sT,envmap_fragment:oT,envmap_common_pars_fragment:aT,envmap_pars_fragment:lT,envmap_pars_vertex:cT,envmap_physical_pars_fragment:yT,envmap_vertex:uT,fog_vertex:dT,fog_pars_vertex:fT,fog_fragment:hT,fog_pars_fragment:pT,gradientmap_pars_fragment:mT,lightmap_pars_fragment:gT,lights_lambert_fragment:vT,lights_lambert_pars_fragment:_T,lights_pars_begin:xT,lights_toon_fragment:ST,lights_toon_pars_fragment:MT,lights_phong_fragment:ET,lights_phong_pars_fragment:wT,lights_physical_fragment:TT,lights_physical_pars_fragment:AT,lights_fragment_begin:bT,lights_fragment_maps:RT,lights_fragment_end:CT,lightprobes_pars_fragment:PT,logdepthbuf_fragment:LT,logdepthbuf_pars_fragment:NT,logdepthbuf_pars_vertex:DT,logdepthbuf_vertex:IT,map_fragment:UT,map_pars_fragment:FT,map_particle_fragment:OT,map_particle_pars_fragment:BT,metalnessmap_fragment:kT,metalnessmap_pars_fragment:zT,morphinstance_vertex:VT,morphcolor_vertex:HT,morphnormal_vertex:GT,morphtarget_pars_vertex:WT,morphtarget_vertex:jT,normal_fragment_begin:XT,normal_fragment_maps:qT,normal_pars_fragment:$T,normal_pars_vertex:YT,normal_vertex:KT,normalmap_pars_fragment:ZT,clearcoat_normal_fragment_begin:JT,clearcoat_normal_fragment_maps:QT,clearcoat_pars_fragment:eA,iridescence_pars_fragment:tA,opaque_fragment:nA,packing:iA,premultiplied_alpha_fragment:rA,project_vertex:sA,dithering_fragment:oA,dithering_pars_fragment:aA,roughnessmap_fragment:lA,roughnessmap_pars_fragment:cA,shadowmap_pars_fragment:uA,shadowmap_pars_vertex:dA,shadowmap_vertex:fA,shadowmask_pars_fragment:hA,skinbase_vertex:pA,skinning_pars_vertex:mA,skinning_vertex:gA,skinnormal_vertex:vA,specularmap_fragment:_A,specularmap_pars_fragment:xA,tonemapping_fragment:yA,tonemapping_pars_fragment:SA,transmission_fragment:MA,transmission_pars_fragment:EA,uv_pars_fragment:wA,uv_pars_vertex:TA,uv_vertex:AA,worldpos_vertex:bA,background_vert:RA,background_frag:CA,backgroundCube_vert:PA,backgroundCube_frag:LA,cube_vert:NA,cube_frag:DA,depth_vert:IA,depth_frag:UA,distance_vert:FA,distance_frag:OA,equirect_vert:BA,equirect_frag:kA,linedashed_vert:zA,linedashed_frag:VA,meshbasic_vert:HA,meshbasic_frag:GA,meshlambert_vert:WA,meshlambert_frag:jA,meshmatcap_vert:XA,meshmatcap_frag:qA,meshnormal_vert:$A,meshnormal_frag:YA,meshphong_vert:KA,meshphong_frag:ZA,meshphysical_vert:JA,meshphysical_frag:QA,meshtoon_vert:eb,meshtoon_frag:tb,points_vert:nb,points_frag:ib,shadow_vert:rb,shadow_frag:sb,sprite_vert:ob,sprite_frag:ab},_e={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},fi={basic:{uniforms:an([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:an([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new nt(0)},envMapIntensity:{value:1}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:an([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:an([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:an([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new nt(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:an([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:an([_e.points,_e.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:an([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:an([_e.common,_e.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:an([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:an([_e.sprite,_e.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distance:{uniforms:an([_e.common,_e.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distance_vert,fragmentShader:qe.distance_frag},shadow:{uniforms:an([_e.lights,_e.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};fi.physical={uniforms:an([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const ul={r:0,b:0,g:0},lb=new Dt,mx=new Ge;mx.set(-1,0,0,0,1,0,0,0,1);function cb(t,e,n,i,r,s){const o=new nt(0);let a=r===!0?0:1,l,c,u=null,h=0,d=null;function g(p){let _=p.isScene===!0?p.background:null;if(_&&_.isTexture){const M=p.backgroundBlurriness>0;_=e.get(_,M)}return _}function v(p){let _=!1;const M=g(p);M===null?m(o,a):M&&M.isColor&&(m(M,1),_=!0);const A=t.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function y(p,_){const M=g(_);M&&(M.isCubeTexture||M.mapping===Dc)?(c===void 0&&(c=new ii(new _a(1,1,1),new Ei({name:"BackgroundCubeMaterial",uniforms:Js(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(lb.makeRotationFromEuler(_.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(mx),c.material.toneMapped=et.getTransfer(M.colorSpace)!==at,(u!==M||h!==M.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,u=M,h=M.version,d=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new ii(new Ic(2,2),new Ei({name:"BackgroundMaterial",uniforms:Js(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:Mr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=et.getTransfer(M.colorSpace)!==at,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||h!==M.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,u=M,h=M.version,d=t.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function m(p,_){p.getRGB(ul,dx(t)),n.buffers.color.setClear(ul.r,ul.g,ul.b,_,s)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(p,_=1){o.set(p),a=_,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(p){a=p,m(o,a)},render:v,addToRenderList:y,dispose:f}}function ub(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(P,U,$,q,I){let B=!1;const G=h(P,q,$,U);s!==G&&(s=G,c(s.object)),B=g(P,q,$,I),B&&v(P,q,$,I),I!==null&&e.update(I,t.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,M(P,U,$,q),I!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function l(){return t.createVertexArray()}function c(P){return t.bindVertexArray(P)}function u(P){return t.deleteVertexArray(P)}function h(P,U,$,q){const I=q.wireframe===!0;let B=i[U.id];B===void 0&&(B={},i[U.id]=B);const G=P.isInstancedMesh===!0?P.id:0;let O=B[G];O===void 0&&(O={},B[G]=O);let X=O[$.id];X===void 0&&(X={},O[$.id]=X);let Z=X[I];return Z===void 0&&(Z=d(l()),X[I]=Z),Z}function d(P){const U=[],$=[],q=[];for(let I=0;I<n;I++)U[I]=0,$[I]=0,q[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:$,attributeDivisors:q,object:P,attributes:{},index:null}}function g(P,U,$,q){const I=s.attributes,B=U.attributes;let G=0;const O=$.getAttributes();for(const X in O)if(O[X].location>=0){const ie=I[X];let le=B[X];if(le===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&(le=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&(le=P.instanceColor)),ie===void 0||ie.attribute!==le||le&&ie.data!==le.data)return!0;G++}return s.attributesNum!==G||s.index!==q}function v(P,U,$,q){const I={},B=U.attributes;let G=0;const O=$.getAttributes();for(const X in O)if(O[X].location>=0){let ie=B[X];ie===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&(ie=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&(ie=P.instanceColor));const le={};le.attribute=ie,ie&&ie.data&&(le.data=ie.data),I[X]=le,G++}s.attributes=I,s.attributesNum=G,s.index=q}function y(){const P=s.newAttributes;for(let U=0,$=P.length;U<$;U++)P[U]=0}function m(P){f(P,0)}function f(P,U){const $=s.newAttributes,q=s.enabledAttributes,I=s.attributeDivisors;$[P]=1,q[P]===0&&(t.enableVertexAttribArray(P),q[P]=1),I[P]!==U&&(t.vertexAttribDivisor(P,U),I[P]=U)}function p(){const P=s.newAttributes,U=s.enabledAttributes;for(let $=0,q=U.length;$<q;$++)U[$]!==P[$]&&(t.disableVertexAttribArray($),U[$]=0)}function _(P,U,$,q,I,B,G){G===!0?t.vertexAttribIPointer(P,U,$,I,B):t.vertexAttribPointer(P,U,$,q,I,B)}function M(P,U,$,q){y();const I=q.attributes,B=$.getAttributes(),G=U.defaultAttributeValues;for(const O in B){const X=B[O];if(X.location>=0){let Z=I[O];if(Z===void 0&&(O==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),O==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor)),Z!==void 0){const ie=Z.normalized,le=Z.itemSize,Fe=e.get(Z);if(Fe===void 0)continue;const Ue=Fe.buffer,ce=Fe.type,Y=Fe.bytesPerElement,oe=ce===t.INT||ce===t.UNSIGNED_INT||Z.gpuType===Zh;if(Z.isInterleavedBufferAttribute){const re=Z.data,De=re.stride,ze=Z.offset;if(re.isInstancedInterleavedBuffer){for(let Oe=0;Oe<X.locationSize;Oe++)f(X.location+Oe,re.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Oe=0;Oe<X.locationSize;Oe++)m(X.location+Oe);t.bindBuffer(t.ARRAY_BUFFER,Ue);for(let Oe=0;Oe<X.locationSize;Oe++)_(X.location+Oe,le/X.locationSize,ce,ie,De*Y,(ze+le/X.locationSize*Oe)*Y,oe)}else{if(Z.isInstancedBufferAttribute){for(let re=0;re<X.locationSize;re++)f(X.location+re,Z.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let re=0;re<X.locationSize;re++)m(X.location+re);t.bindBuffer(t.ARRAY_BUFFER,Ue);for(let re=0;re<X.locationSize;re++)_(X.location+re,le/X.locationSize,ce,ie,le*Y,le/X.locationSize*re*Y,oe)}}else if(G!==void 0){const ie=G[O];if(ie!==void 0)switch(ie.length){case 2:t.vertexAttrib2fv(X.location,ie);break;case 3:t.vertexAttrib3fv(X.location,ie);break;case 4:t.vertexAttrib4fv(X.location,ie);break;default:t.vertexAttrib1fv(X.location,ie)}}}}p()}function A(){b();for(const P in i){const U=i[P];for(const $ in U){const q=U[$];for(const I in q){const B=q[I];for(const G in B)u(B[G].object),delete B[G];delete q[I]}}delete i[P]}}function w(P){if(i[P.id]===void 0)return;const U=i[P.id];for(const $ in U){const q=U[$];for(const I in q){const B=q[I];for(const G in B)u(B[G].object),delete B[G];delete q[I]}}delete i[P.id]}function R(P){for(const U in i){const $=i[U];for(const q in $){const I=$[q];if(I[P.id]===void 0)continue;const B=I[P.id];for(const G in B)u(B[G].object),delete B[G];delete I[P.id]}}}function x(P){for(const U in i){const $=i[U],q=P.isInstancedMesh===!0?P.id:0,I=$[q];if(I!==void 0){for(const B in I){const G=I[B];for(const O in G)u(G[O].object),delete G[O];delete I[B]}delete $[q],Object.keys($).length===0&&delete i[U]}}}function b(){C(),o=!0,s!==r&&(s=r,c(s.object))}function C(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:b,resetDefaultState:C,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:m,disableUnusedAttributes:p}}function db(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,u){u!==0&&(t.drawArraysInstanced(i,l,c,u),n.update(c,i,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let d=0;for(let g=0;g<u;g++)d+=c[g];n.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function fb(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==Qn&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const x=R===Gi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==An&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==mi&&!x)}function l(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(ke("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&d===!1&&ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const g=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=t.getParameter(t.MAX_SAMPLES),w=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:g,maxVertexTextures:v,maxTextureSize:y,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:M,maxSamples:A,samples:w}}function hb(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Fr,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const g=h.length!==0||d||i!==0||r;return r=d,i=h.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=u(h,d,0)},this.setState=function(h,d,g){const v=h.clippingPlanes,y=h.clipIntersection,m=h.clipShadows,f=t.get(h);if(!r||v===null||v.length===0||s&&!m)s?u(null):c();else{const p=s?0:i,_=p*4;let M=f.clippingState||null;l.value=M,M=u(v,d,_,g);for(let A=0;A!==_;++A)M[A]=n[A];f.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=p}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,g,v){const y=h!==null?h.length:0;let m=null;if(y!==0){if(m=l.value,v!==!0||m===null){const f=g+y*4,p=d.matrixWorldInverse;a.getNormalMatrix(p),(m===null||m.length<f)&&(m=new Float32Array(f));for(let _=0,M=g;_!==y;++_,M+=4)o.copy(h[_]).applyMatrix4(p,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}const ur=4,Cg=[.125,.215,.35,.446,.526,.582],Br=20,pb=256,Mo=new dp,Pg=new nt;let Xu=null,qu=0,$u=0,Yu=!1;const mb=new z;class Lg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=mb}=s;Xu=this._renderer.getRenderTarget(),qu=this._renderer.getActiveCubeFace(),$u=this._renderer.getActiveMipmapLevel(),Yu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ig(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Xu,qu,$u),this._renderer.xr.enabled=Yu,e.scissorTest=!1,Ss(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Qr||e.mapping===Ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xu=this._renderer.getRenderTarget(),qu=this._renderer.getActiveCubeFace(),$u=this._renderer.getActiveMipmapLevel(),Yu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:Gi,format:Qn,colorSpace:uc,depthBuffer:!1},r=Ng(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ng(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=gb(s)),this._blurMaterial=_b(s,e,n),this._ggxMaterial=vb(s,e,n)}return r}_compileMaterial(e){const n=new ii(new ri,e);this._renderer.compile(n,Mo)}_sceneToCubeUV(e,n,i,r,s){const l=new zn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,g=h.toneMapping;h.getClearColor(Pg),h.toneMapping=xi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ii(new _a,new ap({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,m=y.material;let f=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,f=!0):(m.color.copy(Pg),f=!0);for(let _=0;_<6;_++){const M=_%3;M===0?(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[_],s.y,s.z)):M===1?(l.up.set(0,0,c[_]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[_],s.z)):(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[_]));const A=this._cubeSize;Ss(r,M*A,_>2?A:0,A,A),h.setRenderTarget(r),f&&h.render(y,l),h.render(e,l)}h.toneMapping=g,h.autoClear=d,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Qr||e.mapping===Ks;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ig()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ss(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Mo)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),d=0+c*1.25,g=h*d,{_lodMax:v}=this,y=this._sizeLods[i],m=3*y*(i>v-ur?i-v+ur:0),f=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=g,l.mipInt.value=v-n,Ss(s,m,f,3*y,2*y),r.setRenderTarget(s),r.render(a,Mo),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-i,Ss(e,m,f,3*y,2*y),r.setRenderTarget(e),r.render(a,Mo)}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&rt("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[r];h.material=c;const d=c.uniforms,g=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Br-1),y=s/v,m=isFinite(s)?1+Math.floor(u*y):Br;m>Br&&ke(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Br}`);const f=[];let p=0;for(let R=0;R<Br;++R){const x=R/y,b=Math.exp(-x*x/2);f.push(b),R===0?p+=b:R<m&&(p+=2*b)}for(let R=0;R<f.length;R++)f[R]=f[R]/p;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=v,d.mipInt.value=_-i;const M=this._sizeLods[r],A=3*M*(r>_-ur?r-_+ur:0),w=4*(this._cubeSize-M);Ss(n,A,w,3*M,2*M),l.setRenderTarget(n),l.render(h,Mo)}}function gb(t){const e=[],n=[],i=[];let r=t;const s=t-ur+1+Cg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>t-ur?l=Cg[o-t+ur-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],g=6,v=6,y=3,m=2,f=1,p=new Float32Array(y*v*g),_=new Float32Array(m*v*g),M=new Float32Array(f*v*g);for(let w=0;w<g;w++){const R=w%3*2/3-1,x=w>2?0:-1,b=[R,x,0,R+2/3,x,0,R+2/3,x+1,0,R,x,0,R+2/3,x+1,0,R,x+1,0];p.set(b,y*v*w),_.set(d,m*v*w);const C=[w,w,w,w,w,w];M.set(C,f*v*w)}const A=new ri;A.setAttribute("position",new Si(p,y)),A.setAttribute("uv",new Si(_,m)),A.setAttribute("faceIndex",new Si(M,f)),i.push(new ii(A,null)),r>ur&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Ng(t,e,n){const i=new yi(t,e,n);return i.texture.mapping=Dc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ss(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function vb(t,e,n){return new Ei({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:pb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Uc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function _b(t,e,n){const i=new Float32Array(Br),r=new z(0,1,0);return new Ei({name:"SphericalGaussianBlur",defines:{n:Br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Dg(){return new Ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Ig(){return new Ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Uc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class gx extends yi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new cx(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new _a(5,5,5),s=new Ei({name:"CubemapFromEquirect",uniforms:Js(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_n,blending:Oi});s.uniforms.tEquirect.value=n;const o=new ii(r,s),a=n.minFilter;return n.minFilter===Hr&&(n.minFilter=nn),new ww(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}function xb(t){let e=new WeakMap,n=new WeakMap,i=null;function r(d,g=!1){return d==null?null:g?o(d):s(d)}function s(d){if(d&&d.isTexture){const g=d.mapping;if(g===bl||g===xu)if(e.has(d)){const v=e.get(d).texture;return a(v,d.mapping)}else{const v=d.image;if(v&&v.height>0){const y=new gx(v.height);return y.fromEquirectangularTexture(t,d),e.set(d,y),d.addEventListener("dispose",c),a(y.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){const g=d.mapping,v=g===bl||g===xu,y=g===Qr||g===Ks;if(v||y){let m=n.get(d);const f=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==f)return i===null&&(i=new Lg(t)),m=v?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,n.set(d,m),m.texture;if(m!==void 0)return m.texture;{const p=d.image;return v&&p&&p.height>0||y&&p&&l(p)?(i===null&&(i=new Lg(t)),m=v?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,n.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function a(d,g){return g===bl?d.mapping=Qr:g===xu&&(d.mapping=Ks),d}function l(d){let g=0;const v=6;for(let y=0;y<v;y++)d[y]!==void 0&&g++;return g===v}function c(d){const g=d.target;g.removeEventListener("dispose",c);const v=e.get(g);v!==void 0&&(e.delete(g),v.dispose())}function u(d){const g=d.target;g.removeEventListener("dispose",u);const v=n.get(g);v!==void 0&&(n.delete(g),v.dispose())}function h(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function yb(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Vf("WebGLRenderer: "+i+" extension not supported."),r}}}function Sb(t,e,n,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);d.removeEventListener("dispose",o),delete r[d.id];const g=s.get(d);g&&(e.remove(g),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],t.ARRAY_BUFFER)}function c(h){const d=[],g=h.index,v=h.attributes.position;let y=0;if(v===void 0)return;if(g!==null){const p=g.array;y=g.version;for(let _=0,M=p.length;_<M;_+=3){const A=p[_+0],w=p[_+1],R=p[_+2];d.push(A,w,w,R,R,A)}}else{const p=v.array;y=v.version;for(let _=0,M=p.length/3-1;_<M;_+=3){const A=_+0,w=_+1,R=_+2;d.push(A,w,w,R,R,A)}}const m=new(v.count>=65535?lx:ax)(d,1);m.version=y;const f=s.get(h);f&&e.remove(f),s.set(h,m)}function u(h){const d=s.get(h);if(d){const g=h.index;g!==null&&d.version<g.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Mb(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){t.drawElements(i,d,s,h*o),n.update(d,i,1)}function c(h,d,g){g!==0&&(t.drawElementsInstanced(i,d,s,h*o,g),n.update(d,i,g))}function u(h,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,g);let y=0;for(let m=0;m<g;m++)y+=d[m];n.update(y,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Eb(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:rt("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function wb(t,e,n){const i=new WeakMap,r=new bt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let b=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],p=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),v===!0&&(_=2),y===!0&&(_=3);let M=a.attributes.position.count*_,A=1;M>e.maxTextureSize&&(A=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const w=new Float32Array(M*A*4*h),R=new rx(w,M,A,h);R.type=mi,R.needsUpdate=!0;const x=_*4;for(let C=0;C<h;C++){const P=m[C],U=f[C],$=p[C],q=M*A*4*C;for(let I=0;I<P.count;I++){const B=I*x;g===!0&&(r.fromBufferAttribute(P,I),w[q+B+0]=r.x,w[q+B+1]=r.y,w[q+B+2]=r.z,w[q+B+3]=0),v===!0&&(r.fromBufferAttribute(U,I),w[q+B+4]=r.x,w[q+B+5]=r.y,w[q+B+6]=r.z,w[q+B+7]=0),y===!0&&(r.fromBufferAttribute($,I),w[q+B+8]=r.x,w[q+B+9]=r.y,w[q+B+10]=r.z,w[q+B+11]=$.itemSize===4?r.w:1)}}d={count:h,texture:R,size:new tt(M,A)},i.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let y=0;y<c.length;y++)g+=c[y];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function Tb(t,e,n,i,r){let s=new WeakMap;function o(c){const u=r.render.frame,h=c.geometry,d=e.get(c,h);if(s.get(d)!==u&&(e.update(d),s.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const g=c.skeleton;s.get(g)!==u&&(g.update(),s.set(g,u))}return d}function a(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:a}}const Ab={[G_]:"LINEAR_TONE_MAPPING",[W_]:"REINHARD_TONE_MAPPING",[j_]:"CINEON_TONE_MAPPING",[Kh]:"ACES_FILMIC_TONE_MAPPING",[q_]:"AGX_TONE_MAPPING",[$_]:"NEUTRAL_TONE_MAPPING",[X_]:"CUSTOM_TONE_MAPPING"};function bb(t,e,n,i,r){const s=new yi(e,n,{type:t,depthBuffer:i,stencilBuffer:r,depthTexture:i?new Zs(e,n):void 0}),o=new yi(e,n,{type:Gi,depthBuffer:!1,stencilBuffer:!1}),a=new ri;a.setAttribute("position",new Cn([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Cn([0,2,0,0,2,0],2));const l=new gw({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new ii(a,l),u=new dp(-1,1,1,-1,0,1);let h=null,d=null,g=!1,v,y=null,m=[],f=!1;this.setSize=function(p,_){s.setSize(p,_),o.setSize(p,_);for(let M=0;M<m.length;M++){const A=m[M];A.setSize&&A.setSize(p,_)}},this.setEffects=function(p){m=p,f=m.length>0&&m[0].isRenderPass===!0;const _=s.width,M=s.height;for(let A=0;A<m.length;A++){const w=m[A];w.setSize&&w.setSize(_,M)}},this.begin=function(p,_){if(g||p.toneMapping===xi&&m.length===0)return!1;if(y=_,_!==null){const M=_.width,A=_.height;(s.width!==M||s.height!==A)&&this.setSize(M,A)}return f===!1&&p.setRenderTarget(s),v=p.toneMapping,p.toneMapping=xi,!0},this.hasRenderPass=function(){return f},this.end=function(p,_){p.toneMapping=v,g=!0;let M=s,A=o;for(let w=0;w<m.length;w++){const R=m[w];if(R.enabled!==!1&&(R.render(p,A,M,_),R.needsSwap!==!1)){const x=M;M=A,A=x}}if(h!==p.outputColorSpace||d!==p.toneMapping){h=p.outputColorSpace,d=p.toneMapping,l.defines={},et.getTransfer(h)===at&&(l.defines.SRGB_TRANSFER="");const w=Ab[d];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,p.setRenderTarget(y),p.render(c,u),y=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const vx=new rn,Gf=new Zs(1,1),_x=new rx,xx=new j1,yx=new cx,Ug=[],Fg=[],Og=new Float32Array(16),Bg=new Float32Array(9),kg=new Float32Array(4);function oo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Ug[r];if(s===void 0&&(s=new Float32Array(r),Ug[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function kt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function zt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Fc(t,e){let n=Fg[e];n===void 0&&(n=new Int32Array(e),Fg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Rb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Cb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2fv(this.addr,e),zt(n,e)}}function Pb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(kt(n,e))return;t.uniform3fv(this.addr,e),zt(n,e)}}function Lb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4fv(this.addr,e),zt(n,e)}}function Nb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),zt(n,e)}else{if(kt(n,i))return;kg.set(i),t.uniformMatrix2fv(this.addr,!1,kg),zt(n,i)}}function Db(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),zt(n,e)}else{if(kt(n,i))return;Bg.set(i),t.uniformMatrix3fv(this.addr,!1,Bg),zt(n,i)}}function Ib(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),zt(n,e)}else{if(kt(n,i))return;Og.set(i),t.uniformMatrix4fv(this.addr,!1,Og),zt(n,i)}}function Ub(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Fb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2iv(this.addr,e),zt(n,e)}}function Ob(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(kt(n,e))return;t.uniform3iv(this.addr,e),zt(n,e)}}function Bb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4iv(this.addr,e),zt(n,e)}}function kb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function zb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2uiv(this.addr,e),zt(n,e)}}function Vb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(kt(n,e))return;t.uniform3uiv(this.addr,e),zt(n,e)}}function Hb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4uiv(this.addr,e),zt(n,e)}}function Gb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Gf.compareFunction=n.isReversedDepthBuffer()?rp:ip,s=Gf):s=vx,n.setTexture2D(e||s,r)}function Wb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||xx,r)}function jb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||yx,r)}function Xb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||_x,r)}function qb(t){switch(t){case 5126:return Rb;case 35664:return Cb;case 35665:return Pb;case 35666:return Lb;case 35674:return Nb;case 35675:return Db;case 35676:return Ib;case 5124:case 35670:return Ub;case 35667:case 35671:return Fb;case 35668:case 35672:return Ob;case 35669:case 35673:return Bb;case 5125:return kb;case 36294:return zb;case 36295:return Vb;case 36296:return Hb;case 35678:case 36198:case 36298:case 36306:case 35682:return Gb;case 35679:case 36299:case 36307:return Wb;case 35680:case 36300:case 36308:case 36293:return jb;case 36289:case 36303:case 36311:case 36292:return Xb}}function $b(t,e){t.uniform1fv(this.addr,e)}function Yb(t,e){const n=oo(e,this.size,2);t.uniform2fv(this.addr,n)}function Kb(t,e){const n=oo(e,this.size,3);t.uniform3fv(this.addr,n)}function Zb(t,e){const n=oo(e,this.size,4);t.uniform4fv(this.addr,n)}function Jb(t,e){const n=oo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Qb(t,e){const n=oo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function eR(t,e){const n=oo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function tR(t,e){t.uniform1iv(this.addr,e)}function nR(t,e){t.uniform2iv(this.addr,e)}function iR(t,e){t.uniform3iv(this.addr,e)}function rR(t,e){t.uniform4iv(this.addr,e)}function sR(t,e){t.uniform1uiv(this.addr,e)}function oR(t,e){t.uniform2uiv(this.addr,e)}function aR(t,e){t.uniform3uiv(this.addr,e)}function lR(t,e){t.uniform4uiv(this.addr,e)}function cR(t,e,n){const i=this.cache,r=e.length,s=Fc(n,r);kt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=Gf:o=vx;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||o,s[a])}function uR(t,e,n){const i=this.cache,r=e.length,s=Fc(n,r);kt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||xx,s[o])}function dR(t,e,n){const i=this.cache,r=e.length,s=Fc(n,r);kt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||yx,s[o])}function fR(t,e,n){const i=this.cache,r=e.length,s=Fc(n,r);kt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||_x,s[o])}function hR(t){switch(t){case 5126:return $b;case 35664:return Yb;case 35665:return Kb;case 35666:return Zb;case 35674:return Jb;case 35675:return Qb;case 35676:return eR;case 5124:case 35670:return tR;case 35667:case 35671:return nR;case 35668:case 35672:return iR;case 35669:case 35673:return rR;case 5125:return sR;case 36294:return oR;case 36295:return aR;case 36296:return lR;case 35678:case 36198:case 36298:case 36306:case 35682:return cR;case 35679:case 36299:case 36307:return uR;case 35680:case 36300:case 36308:case 36293:return dR;case 36289:case 36303:case 36311:case 36292:return fR}}class pR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=qb(n.type)}}class mR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=hR(n.type)}}class gR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Ku=/(\w+)(\])?(\[|\.)?/g;function zg(t,e){t.seq.push(e),t.map[e.id]=e}function vR(t,e,n){const i=t.name,r=i.length;for(Ku.lastIndex=0;;){const s=Ku.exec(i),o=Ku.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){zg(n,c===void 0?new pR(a,t,e):new mR(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new gR(a),zg(n,h)),n=h}}}class Nl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);vR(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Vg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const _R=37297;let xR=0;function yR(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Hg=new Ge;function SR(t){et._getMatrix(Hg,et.workingColorSpace,t);const e=`mat3( ${Hg.elements.map(n=>n.toFixed(4))} )`;switch(et.getTransfer(t)){case dc:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return ke("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Gg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+yR(t.getShaderSource(e),a)}else return s}function MR(t,e){const n=SR(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const ER={[G_]:"Linear",[W_]:"Reinhard",[j_]:"Cineon",[Kh]:"ACESFilmic",[q_]:"AgX",[$_]:"Neutral",[X_]:"Custom"};function wR(t,e){const n=ER[e];return n===void 0?(ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const dl=new z;function TR(){et.getLuminanceCoefficients(dl);const t=dl.x.toFixed(4),e=dl.y.toFixed(4),n=dl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function AR(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lo).join(`
`)}function bR(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function RR(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Lo(t){return t!==""}function Wg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const CR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wf(t){return t.replace(CR,LR)}const PR=new Map;function LR(t,e){let n=qe[e];if(n===void 0){const i=PR.get(e);if(i!==void 0)n=qe[i],ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Wf(n)}const NR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xg(t){return t.replace(NR,DR)}function DR(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function qg(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const IR={[Al]:"SHADOWMAP_TYPE_PCF",[Co]:"SHADOWMAP_TYPE_VSM"};function UR(t){return IR[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const FR={[Qr]:"ENVMAP_TYPE_CUBE",[Ks]:"ENVMAP_TYPE_CUBE",[Dc]:"ENVMAP_TYPE_CUBE_UV"};function OR(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":FR[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const BR={[Ks]:"ENVMAP_MODE_REFRACTION"};function kR(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":BR[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const zR={[H_]:"ENVMAP_BLENDING_MULTIPLY",[w1]:"ENVMAP_BLENDING_MIX",[T1]:"ENVMAP_BLENDING_ADD"};function VR(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":zR[t.combine]||"ENVMAP_BLENDING_NONE"}function HR(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function GR(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=UR(n),c=OR(n),u=kR(n),h=VR(n),d=HR(n),g=AR(n),v=bR(s),y=r.createProgram();let m,f,p=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Lo).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Lo).join(`
`),f.length>0&&(f+=`
`)):(m=[qg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lo).join(`
`),f=[qg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==xi?"#define TONE_MAPPING":"",n.toneMapping!==xi?qe.tonemapping_pars_fragment:"",n.toneMapping!==xi?wR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,MR("linearToOutputTexel",n.outputColorSpace),TR(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Lo).join(`
`)),o=Wf(o),o=Wg(o,n),o=jg(o,n),a=Wf(a),a=Wg(a,n),a=jg(a,n),o=Xg(o),a=Xg(a),n.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,m=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===sg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===sg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const _=p+m+o,M=p+f+a,A=Vg(r,r.VERTEX_SHADER,_),w=Vg(r,r.FRAGMENT_SHADER,M);r.attachShader(y,A),r.attachShader(y,w),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function R(P){if(t.debug.checkShaderErrors){const U=r.getProgramInfoLog(y)||"",$=r.getShaderInfoLog(A)||"",q=r.getShaderInfoLog(w)||"",I=U.trim(),B=$.trim(),G=q.trim();let O=!0,X=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(O=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,A,w);else{const Z=Gg(r,A,"vertex"),ie=Gg(r,w,"fragment");rt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+I+`
`+Z+`
`+ie)}else I!==""?ke("WebGLProgram: Program Info Log:",I):(B===""||G==="")&&(X=!1);X&&(P.diagnostics={runnable:O,programLog:I,vertexShader:{log:B,prefix:m},fragmentShader:{log:G,prefix:f}})}r.deleteShader(A),r.deleteShader(w),x=new Nl(r,y),b=RR(r,y)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(y,_R)),C},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=xR++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=A,this.fragmentShader=w,this}let WR=0;class jR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new XR(e),n.set(e,i)),i}}class XR{constructor(e){this.id=WR++,this.code=e,this.usedTimes=0}}function qR(t){return t===es||t===lc||t===cc}function $R(t,e,n,i,r,s){const o=new sx,a=new jR,l=new Set,c=[],u=new Map,h=i.logarithmicDepthBuffer;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return l.add(x),x===0?"uv":`uv${x}`}function y(x,b,C,P,U,$){const q=P.fog,I=U.geometry,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,O=e.get(x.envMap||B,G),X=O&&O.mapping===Dc?O.image.height:null,Z=g[x.type];x.precision!==null&&(d=i.getMaxPrecision(x.precision),d!==x.precision&&ke("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const ie=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,le=ie!==void 0?ie.length:0;let Fe=0;I.morphAttributes.position!==void 0&&(Fe=1),I.morphAttributes.normal!==void 0&&(Fe=2),I.morphAttributes.color!==void 0&&(Fe=3);let Ue,ce,Y,oe;if(Z){const We=fi[Z];Ue=We.vertexShader,ce=We.fragmentShader}else Ue=x.vertexShader,ce=x.fragmentShader,a.update(x),Y=a.getVertexShaderID(x),oe=a.getFragmentShaderID(x);const re=t.getRenderTarget(),De=t.state.buffers.depth.getReversed(),ze=U.isInstancedMesh===!0,Oe=U.isBatchedMesh===!0,pt=!!x.map,$e=!!x.matcap,Ee=!!O,Ce=!!x.aoMap,ue=!!x.lightMap,Ve=!!x.bumpMap,Se=!!x.normalMap,Ze=!!x.displacementMap,D=!!x.emissiveMap,mt=!!x.metalnessMap,Ye=!!x.roughnessMap,ct=x.anisotropy>0,ve=x.clearcoat>0,wt=x.dispersion>0,T=x.iridescence>0,S=x.sheen>0,k=x.transmission>0,Q=ct&&!!x.anisotropyMap,se=ve&&!!x.clearcoatMap,de=ve&&!!x.clearcoatNormalMap,ge=ve&&!!x.clearcoatRoughnessMap,K=T&&!!x.iridescenceMap,ee=T&&!!x.iridescenceThicknessMap,Me=S&&!!x.sheenColorMap,Ae=S&&!!x.sheenRoughnessMap,pe=!!x.specularMap,fe=!!x.specularColorMap,He=!!x.specularIntensityMap,Xe=k&&!!x.transmissionMap,ot=k&&!!x.thicknessMap,N=!!x.gradientMap,he=!!x.alphaMap,J=x.alphaTest>0,we=!!x.alphaHash,me=!!x.extensions;let ne=xi;x.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(ne=t.toneMapping);const Le={shaderID:Z,shaderType:x.type,shaderName:x.name,vertexShader:Ue,fragmentShader:ce,defines:x.defines,customVertexShaderID:Y,customFragmentShaderID:oe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:Oe,batchingColor:Oe&&U._colorsTexture!==null,instancing:ze,instancingColor:ze&&U.instanceColor!==null,instancingMorph:ze&&U.morphTexture!==null,outputColorSpace:re===null?t.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:et.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:pt,matcap:$e,envMap:Ee,envMapMode:Ee&&O.mapping,envMapCubeUVHeight:X,aoMap:Ce,lightMap:ue,bumpMap:Ve,normalMap:Se,displacementMap:Ze,emissiveMap:D,normalMapObjectSpace:Se&&x.normalMapType===R1,normalMapTangentSpace:Se&&x.normalMapType===zf,packedNormalMap:Se&&x.normalMapType===zf&&qR(x.normalMap.format),metalnessMap:mt,roughnessMap:Ye,anisotropy:ct,anisotropyMap:Q,clearcoat:ve,clearcoatMap:se,clearcoatNormalMap:de,clearcoatRoughnessMap:ge,dispersion:wt,iridescence:T,iridescenceMap:K,iridescenceThicknessMap:ee,sheen:S,sheenColorMap:Me,sheenRoughnessMap:Ae,specularMap:pe,specularColorMap:fe,specularIntensityMap:He,transmission:k,transmissionMap:Xe,thicknessMap:ot,gradientMap:N,opaque:x.transparent===!1&&x.blending===zs&&x.alphaToCoverage===!1,alphaMap:he,alphaTest:J,alphaHash:we,combine:x.combine,mapUv:pt&&v(x.map.channel),aoMapUv:Ce&&v(x.aoMap.channel),lightMapUv:ue&&v(x.lightMap.channel),bumpMapUv:Ve&&v(x.bumpMap.channel),normalMapUv:Se&&v(x.normalMap.channel),displacementMapUv:Ze&&v(x.displacementMap.channel),emissiveMapUv:D&&v(x.emissiveMap.channel),metalnessMapUv:mt&&v(x.metalnessMap.channel),roughnessMapUv:Ye&&v(x.roughnessMap.channel),anisotropyMapUv:Q&&v(x.anisotropyMap.channel),clearcoatMapUv:se&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:de&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&v(x.sheenRoughnessMap.channel),specularMapUv:pe&&v(x.specularMap.channel),specularColorMapUv:fe&&v(x.specularColorMap.channel),specularIntensityMapUv:He&&v(x.specularIntensityMap.channel),transmissionMapUv:Xe&&v(x.transmissionMap.channel),thicknessMapUv:ot&&v(x.thicknessMap.channel),alphaMapUv:he&&v(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Se||ct),vertexNormals:!!I.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!I.attributes.uv&&(pt||he),fog:!!q,useFog:x.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||I.attributes.normal===void 0&&Se===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:De,skinning:U.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:Fe,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:$.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&C.length>0,shadowMapType:t.shadowMap.type,toneMapping:ne,decodeVideoTexture:pt&&x.map.isVideoTexture===!0&&et.getTransfer(x.map.colorSpace)===at,decodeVideoTextureEmissive:D&&x.emissiveMap.isVideoTexture===!0&&et.getTransfer(x.emissiveMap.colorSpace)===at,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===pi,flipSided:x.side===_n,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:me&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&x.extensions.multiDraw===!0||Oe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Le.vertexUv1s=l.has(1),Le.vertexUv2s=l.has(2),Le.vertexUv3s=l.has(3),l.clear(),Le}function m(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const C in x.defines)b.push(C),b.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(f(b,x),p(b,x),b.push(t.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function f(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function p(x,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),x.push(o.mask)}function _(x){const b=g[x.type];let C;if(b){const P=fi[b];C=hw.clone(P.uniforms)}else C=x.uniforms;return C}function M(x,b){let C=u.get(b);return C!==void 0?++C.usedTimes:(C=new GR(t,b,x,r),c.push(C),u.set(b,C)),C}function A(x){if(--x.usedTimes===0){const b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function w(x){a.remove(x)}function R(){a.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:_,acquireProgram:M,releaseProgram:A,releaseShaderCache:w,programs:c,dispose:R}}function YR(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function KR(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function $g(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Yg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d){let g=0;return d.isInstancedMesh&&(g+=2),d.isSkinnedMesh&&(g+=1),g}function a(d,g,v,y,m,f){let p=t[e];return p===void 0?(p={id:d.id,object:d,geometry:g,material:v,materialVariant:o(d),groupOrder:y,renderOrder:d.renderOrder,z:m,group:f},t[e]=p):(p.id=d.id,p.object=d,p.geometry=g,p.material=v,p.materialVariant=o(d),p.groupOrder=y,p.renderOrder=d.renderOrder,p.z=m,p.group=f),e++,p}function l(d,g,v,y,m,f){const p=a(d,g,v,y,m,f);v.transmission>0?i.push(p):v.transparent===!0?r.push(p):n.push(p)}function c(d,g,v,y,m,f){const p=a(d,g,v,y,m,f);v.transmission>0?i.unshift(p):v.transparent===!0?r.unshift(p):n.unshift(p)}function u(d,g){n.length>1&&n.sort(d||KR),i.length>1&&i.sort(g||$g),r.length>1&&r.sort(g||$g)}function h(){for(let d=e,g=t.length;d<g;d++){const v=t[d];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:h,sort:u}}function ZR(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Yg,t.set(i,[o])):r>=s.length?(o=new Yg,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function JR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new z,color:new nt};break;case"SpotLight":n={position:new z,direction:new z,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new z,color:new nt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new z,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":n={color:new nt,position:new z,halfWidth:new z,halfHeight:new z};break}return t[e.id]=n,n}}}function QR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let eC=0;function tC(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function nC(t){const e=new JR,n=QR(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);const r=new z,s=new Dt,o=new Dt;function a(c){let u=0,h=0,d=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let g=0,v=0,y=0,m=0,f=0,p=0,_=0,M=0,A=0,w=0,R=0;c.sort(tC);for(let b=0,C=c.length;b<C;b++){const P=c[b],U=P.color,$=P.intensity,q=P.distance;let I=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===es?I=P.shadow.map.texture:I=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=U.r*$,h+=U.g*$,d+=U.b*$;else if(P.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(P.sh.coefficients[B],$);R++}else if(P.isDirectionalLight){const B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const G=P.shadow,O=n.get(P);O.shadowIntensity=G.intensity,O.shadowBias=G.bias,O.shadowNormalBias=G.normalBias,O.shadowRadius=G.radius,O.shadowMapSize=G.mapSize,i.directionalShadow[g]=O,i.directionalShadowMap[g]=I,i.directionalShadowMatrix[g]=P.shadow.matrix,p++}i.directional[g]=B,g++}else if(P.isSpotLight){const B=e.get(P);B.position.setFromMatrixPosition(P.matrixWorld),B.color.copy(U).multiplyScalar($),B.distance=q,B.coneCos=Math.cos(P.angle),B.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),B.decay=P.decay,i.spot[y]=B;const G=P.shadow;if(P.map&&(i.spotLightMap[A]=P.map,A++,G.updateMatrices(P),P.castShadow&&w++),i.spotLightMatrix[y]=G.matrix,P.castShadow){const O=n.get(P);O.shadowIntensity=G.intensity,O.shadowBias=G.bias,O.shadowNormalBias=G.normalBias,O.shadowRadius=G.radius,O.shadowMapSize=G.mapSize,i.spotShadow[y]=O,i.spotShadowMap[y]=I,M++}y++}else if(P.isRectAreaLight){const B=e.get(P);B.color.copy(U).multiplyScalar($),B.halfWidth.set(P.width*.5,0,0),B.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=B,m++}else if(P.isPointLight){const B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),B.distance=P.distance,B.decay=P.decay,P.castShadow){const G=P.shadow,O=n.get(P);O.shadowIntensity=G.intensity,O.shadowBias=G.bias,O.shadowNormalBias=G.normalBias,O.shadowRadius=G.radius,O.shadowMapSize=G.mapSize,O.shadowCameraNear=G.camera.near,O.shadowCameraFar=G.camera.far,i.pointShadow[v]=O,i.pointShadowMap[v]=I,i.pointShadowMatrix[v]=P.shadow.matrix,_++}i.point[v]=B,v++}else if(P.isHemisphereLight){const B=e.get(P);B.skyColor.copy(P.color).multiplyScalar($),B.groundColor.copy(P.groundColor).multiplyScalar($),i.hemi[f]=B,f++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const x=i.hash;(x.directionalLength!==g||x.pointLength!==v||x.spotLength!==y||x.rectAreaLength!==m||x.hemiLength!==f||x.numDirectionalShadows!==p||x.numPointShadows!==_||x.numSpotShadows!==M||x.numSpotMaps!==A||x.numLightProbes!==R)&&(i.directional.length=g,i.spot.length=y,i.rectArea.length=m,i.point.length=v,i.hemi.length=f,i.directionalShadow.length=p,i.directionalShadowMap.length=p,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=p,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=M+A-w,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=R,x.directionalLength=g,x.pointLength=v,x.spotLength=y,x.rectAreaLength=m,x.hemiLength=f,x.numDirectionalShadows=p,x.numPointShadows=_,x.numSpotShadows=M,x.numSpotMaps=A,x.numLightProbes=R,i.version=eC++)}function l(c,u){let h=0,d=0,g=0,v=0,y=0;const m=u.matrixWorldInverse;for(let f=0,p=c.length;f<p;f++){const _=c[f];if(_.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),h++}else if(_.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),g++}else if(_.isRectAreaLight){const M=i.rectArea[v];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(_.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),v++}else if(_.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){const M=i.hemi[y];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:i}}function Kg(t){const e=new nC(t),n=[],i=[],r=[];function s(d){h.camera=d,n.length=0,i.length=0,r.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function l(d){r.push(d)}function c(){e.setup(n)}function u(d){e.setupView(n,d)}const h={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function iC(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Kg(t),e.set(r,[a])):s>=o.length?(a=new Kg(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const rC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,oC=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],aC=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],Zg=new Dt,Eo=new z,Zu=new z;function lC(t,e,n){let i=new lp;const r=new tt,s=new tt,o=new bt,a=new xw,l=new yw,c={},u=n.maxTextureSize,h={[Mr]:_n,[_n]:Mr,[pi]:pi},d=new Ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:rC,fragmentShader:sC}),g=d.clone();g.defines.HORIZONTAL_PASS=1;const v=new ri;v.setAttribute("position",new Si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new ii(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Al;let f=this.type;this.render=function(w,R,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===s1&&(ke("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Al);const b=t.getRenderTarget(),C=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),U=t.state;U.setBlending(Oi),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const $=f!==this.type;$&&R.traverse(function(q){q.material&&(Array.isArray(q.material)?q.material.forEach(I=>I.needsUpdate=!0):q.material.needsUpdate=!0)});for(let q=0,I=w.length;q<I;q++){const B=w[q],G=B.shadow;if(G===void 0){ke("WebGLShadowMap:",B,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const O=G.getFrameExtents();r.multiply(O),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/O.x),r.x=s.x*O.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/O.y),r.y=s.y*O.y,G.mapSize.y=s.y));const X=t.state.buffers.depth.getReversed();if(G.camera._reversedDepth=X,G.map===null||$===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Co){if(B.isPointLight){ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new yi(r.x,r.y,{format:es,type:Gi,minFilter:nn,magFilter:nn,generateMipmaps:!1}),G.map.texture.name=B.name+".shadowMap",G.map.depthTexture=new Zs(r.x,r.y,mi),G.map.depthTexture.name=B.name+".shadowMapDepth",G.map.depthTexture.format=Wi,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Xt,G.map.depthTexture.magFilter=Xt}else B.isPointLight?(G.map=new gx(r.x),G.map.depthTexture=new dw(r.x,Mi)):(G.map=new yi(r.x,r.y),G.map.depthTexture=new Zs(r.x,r.y,Mi)),G.map.depthTexture.name=B.name+".shadowMap",G.map.depthTexture.format=Wi,this.type===Al?(G.map.depthTexture.compareFunction=X?rp:ip,G.map.depthTexture.minFilter=nn,G.map.depthTexture.magFilter=nn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Xt,G.map.depthTexture.magFilter=Xt);G.camera.updateProjectionMatrix()}const Z=G.map.isWebGLCubeRenderTarget?6:1;for(let ie=0;ie<Z;ie++){if(G.map.isWebGLCubeRenderTarget)t.setRenderTarget(G.map,ie),t.clear();else{ie===0&&(t.setRenderTarget(G.map),t.clear());const le=G.getViewport(ie);o.set(s.x*le.x,s.y*le.y,s.x*le.z,s.y*le.w),U.viewport(o)}if(B.isPointLight){const le=G.camera,Fe=G.matrix,Ue=B.distance||le.far;Ue!==le.far&&(le.far=Ue,le.updateProjectionMatrix()),Eo.setFromMatrixPosition(B.matrixWorld),le.position.copy(Eo),Zu.copy(le.position),Zu.add(oC[ie]),le.up.copy(aC[ie]),le.lookAt(Zu),le.updateMatrixWorld(),Fe.makeTranslation(-Eo.x,-Eo.y,-Eo.z),Zg.multiplyMatrices(le.projectionMatrix,le.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Zg,le.coordinateSystem,le.reversedDepth)}else G.updateMatrices(B);i=G.getFrustum(),M(R,x,G.camera,B,this.type)}G.isPointLightShadow!==!0&&this.type===Co&&p(G,x),G.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(b,C,P)};function p(w,R){const x=e.update(y);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,g.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new yi(r.x,r.y,{format:es,type:Gi})),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(R,null,x,d,y,null),g.uniforms.shadow_pass.value=w.mapPass.texture,g.uniforms.resolution.value=w.mapSize,g.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(R,null,x,g,y,null)}function _(w,R,x,b){let C=null;const P=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)C=P;else if(C=x.isPointLight===!0?l:a,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const U=C.uuid,$=R.uuid;let q=c[U];q===void 0&&(q={},c[U]=q);let I=q[$];I===void 0&&(I=C.clone(),q[$]=I,R.addEventListener("dispose",A)),C=I}if(C.visible=R.visible,C.wireframe=R.wireframe,b===Co?C.side=R.shadowSide!==null?R.shadowSide:R.side:C.side=R.shadowSide!==null?R.shadowSide:h[R.side],C.alphaMap=R.alphaMap,C.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,C.map=R.map,C.clipShadows=R.clipShadows,C.clippingPlanes=R.clippingPlanes,C.clipIntersection=R.clipIntersection,C.displacementMap=R.displacementMap,C.displacementScale=R.displacementScale,C.displacementBias=R.displacementBias,C.wireframeLinewidth=R.wireframeLinewidth,C.linewidth=R.linewidth,x.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const U=t.properties.get(C);U.light=x}return C}function M(w,R,x,b,C){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&C===Co)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);const $=e.update(w),q=w.material;if(Array.isArray(q)){const I=$.groups;for(let B=0,G=I.length;B<G;B++){const O=I[B],X=q[O.materialIndex];if(X&&X.visible){const Z=_(w,X,b,C);w.onBeforeShadow(t,w,R,x,$,Z,O),t.renderBufferDirect(x,null,$,Z,w,O),w.onAfterShadow(t,w,R,x,$,Z,O)}}}else if(q.visible){const I=_(w,q,b,C);w.onBeforeShadow(t,w,R,x,$,I,null),t.renderBufferDirect(x,null,$,I,w,null),w.onAfterShadow(t,w,R,x,$,I,null)}}const U=w.children;for(let $=0,q=U.length;$<q;$++)M(U[$],R,x,b,C)}function A(w){w.target.removeEventListener("dispose",A);for(const x in c){const b=c[x],C=w.target.uuid;C in b&&(b[C].dispose(),delete b[C])}}}function cC(t,e){function n(){let N=!1;const he=new bt;let J=null;const we=new bt(0,0,0,0);return{setMask:function(me){J!==me&&!N&&(t.colorMask(me,me,me,me),J=me)},setLocked:function(me){N=me},setClear:function(me,ne,Le,We,Rt){Rt===!0&&(me*=We,ne*=We,Le*=We),he.set(me,ne,Le,We),we.equals(he)===!1&&(t.clearColor(me,ne,Le,We),we.copy(he))},reset:function(){N=!1,J=null,we.set(-1,0,0,0)}}}function i(){let N=!1,he=!1,J=null,we=null,me=null;return{setReversed:function(ne){if(he!==ne){const Le=e.get("EXT_clip_control");ne?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),he=ne;const We=me;me=null,this.setClear(We)}},getReversed:function(){return he},setTest:function(ne){ne?re(t.DEPTH_TEST):De(t.DEPTH_TEST)},setMask:function(ne){J!==ne&&!N&&(t.depthMask(ne),J=ne)},setFunc:function(ne){if(he&&(ne=B1[ne]),we!==ne){switch(ne){case ef:t.depthFunc(t.NEVER);break;case tf:t.depthFunc(t.ALWAYS);break;case nf:t.depthFunc(t.LESS);break;case Ys:t.depthFunc(t.LEQUAL);break;case rf:t.depthFunc(t.EQUAL);break;case sf:t.depthFunc(t.GEQUAL);break;case of:t.depthFunc(t.GREATER);break;case af:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}we=ne}},setLocked:function(ne){N=ne},setClear:function(ne){me!==ne&&(me=ne,he&&(ne=1-ne),t.clearDepth(ne))},reset:function(){N=!1,J=null,we=null,me=null,he=!1}}}function r(){let N=!1,he=null,J=null,we=null,me=null,ne=null,Le=null,We=null,Rt=null;return{setTest:function(ut){N||(ut?re(t.STENCIL_TEST):De(t.STENCIL_TEST))},setMask:function(ut){he!==ut&&!N&&(t.stencilMask(ut),he=ut)},setFunc:function(ut,wi,oi){(J!==ut||we!==wi||me!==oi)&&(t.stencilFunc(ut,wi,oi),J=ut,we=wi,me=oi)},setOp:function(ut,wi,oi){(ne!==ut||Le!==wi||We!==oi)&&(t.stencilOp(ut,wi,oi),ne=ut,Le=wi,We=oi)},setLocked:function(ut){N=ut},setClear:function(ut){Rt!==ut&&(t.clearStencil(ut),Rt=ut)},reset:function(){N=!1,he=null,J=null,we=null,me=null,ne=null,Le=null,We=null,Rt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},h={},d={},g=new WeakMap,v=[],y=null,m=!1,f=null,p=null,_=null,M=null,A=null,w=null,R=null,x=new nt(0,0,0),b=0,C=!1,P=null,U=null,$=null,q=null,I=null;const B=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,O=0;const X=t.getParameter(t.VERSION);X.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(X)[1]),G=O>=1):X.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),G=O>=2);let Z=null,ie={};const le=t.getParameter(t.SCISSOR_BOX),Fe=t.getParameter(t.VIEWPORT),Ue=new bt().fromArray(le),ce=new bt().fromArray(Fe);function Y(N,he,J,we){const me=new Uint8Array(4),ne=t.createTexture();t.bindTexture(N,ne),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Le=0;Le<J;Le++)N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY?t.texImage3D(he,0,t.RGBA,1,1,we,0,t.RGBA,t.UNSIGNED_BYTE,me):t.texImage2D(he+Le,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,me);return ne}const oe={};oe[t.TEXTURE_2D]=Y(t.TEXTURE_2D,t.TEXTURE_2D,1),oe[t.TEXTURE_CUBE_MAP]=Y(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[t.TEXTURE_2D_ARRAY]=Y(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),oe[t.TEXTURE_3D]=Y(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),re(t.DEPTH_TEST),o.setFunc(Ys),Ve(!1),Se(Qm),re(t.CULL_FACE),Ce(Oi);function re(N){u[N]!==!0&&(t.enable(N),u[N]=!0)}function De(N){u[N]!==!1&&(t.disable(N),u[N]=!1)}function ze(N,he){return d[N]!==he?(t.bindFramebuffer(N,he),d[N]=he,N===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=he),N===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=he),!0):!1}function Oe(N,he){let J=v,we=!1;if(N){J=g.get(he),J===void 0&&(J=[],g.set(he,J));const me=N.textures;if(J.length!==me.length||J[0]!==t.COLOR_ATTACHMENT0){for(let ne=0,Le=me.length;ne<Le;ne++)J[ne]=t.COLOR_ATTACHMENT0+ne;J.length=me.length,we=!0}}else J[0]!==t.BACK&&(J[0]=t.BACK,we=!0);we&&t.drawBuffers(J)}function pt(N){return y!==N?(t.useProgram(N),y=N,!0):!1}const $e={[Or]:t.FUNC_ADD,[a1]:t.FUNC_SUBTRACT,[l1]:t.FUNC_REVERSE_SUBTRACT};$e[c1]=t.MIN,$e[u1]=t.MAX;const Ee={[d1]:t.ZERO,[f1]:t.ONE,[h1]:t.SRC_COLOR,[Jd]:t.SRC_ALPHA,[x1]:t.SRC_ALPHA_SATURATE,[v1]:t.DST_COLOR,[m1]:t.DST_ALPHA,[p1]:t.ONE_MINUS_SRC_COLOR,[Qd]:t.ONE_MINUS_SRC_ALPHA,[_1]:t.ONE_MINUS_DST_COLOR,[g1]:t.ONE_MINUS_DST_ALPHA,[y1]:t.CONSTANT_COLOR,[S1]:t.ONE_MINUS_CONSTANT_COLOR,[M1]:t.CONSTANT_ALPHA,[E1]:t.ONE_MINUS_CONSTANT_ALPHA};function Ce(N,he,J,we,me,ne,Le,We,Rt,ut){if(N===Oi){m===!0&&(De(t.BLEND),m=!1);return}if(m===!1&&(re(t.BLEND),m=!0),N!==o1){if(N!==f||ut!==C){if((p!==Or||A!==Or)&&(t.blendEquation(t.FUNC_ADD),p=Or,A=Or),ut)switch(N){case zs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case eg:t.blendFunc(t.ONE,t.ONE);break;case tg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ng:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:rt("WebGLState: Invalid blending: ",N);break}else switch(N){case zs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case eg:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case tg:rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ng:rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:rt("WebGLState: Invalid blending: ",N);break}_=null,M=null,w=null,R=null,x.set(0,0,0),b=0,f=N,C=ut}return}me=me||he,ne=ne||J,Le=Le||we,(he!==p||me!==A)&&(t.blendEquationSeparate($e[he],$e[me]),p=he,A=me),(J!==_||we!==M||ne!==w||Le!==R)&&(t.blendFuncSeparate(Ee[J],Ee[we],Ee[ne],Ee[Le]),_=J,M=we,w=ne,R=Le),(We.equals(x)===!1||Rt!==b)&&(t.blendColor(We.r,We.g,We.b,Rt),x.copy(We),b=Rt),f=N,C=!1}function ue(N,he){N.side===pi?De(t.CULL_FACE):re(t.CULL_FACE);let J=N.side===_n;he&&(J=!J),Ve(J),N.blending===zs&&N.transparent===!1?Ce(Oi):Ce(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);const we=N.stencilWrite;a.setTest(we),we&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),D(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?re(t.SAMPLE_ALPHA_TO_COVERAGE):De(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(N){P!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),P=N)}function Se(N){N!==i1?(re(t.CULL_FACE),N!==U&&(N===Qm?t.cullFace(t.BACK):N===r1?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):De(t.CULL_FACE),U=N}function Ze(N){N!==$&&(G&&t.lineWidth(N),$=N)}function D(N,he,J){N?(re(t.POLYGON_OFFSET_FILL),(q!==he||I!==J)&&(q=he,I=J,o.getReversed()&&(he=-he),t.polygonOffset(he,J))):De(t.POLYGON_OFFSET_FILL)}function mt(N){N?re(t.SCISSOR_TEST):De(t.SCISSOR_TEST)}function Ye(N){N===void 0&&(N=t.TEXTURE0+B-1),Z!==N&&(t.activeTexture(N),Z=N)}function ct(N,he,J){J===void 0&&(Z===null?J=t.TEXTURE0+B-1:J=Z);let we=ie[J];we===void 0&&(we={type:void 0,texture:void 0},ie[J]=we),(we.type!==N||we.texture!==he)&&(Z!==J&&(t.activeTexture(J),Z=J),t.bindTexture(N,he||oe[N]),we.type=N,we.texture=he)}function ve(){const N=ie[Z];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function wt(){try{t.compressedTexImage2D(...arguments)}catch(N){rt("WebGLState:",N)}}function T(){try{t.compressedTexImage3D(...arguments)}catch(N){rt("WebGLState:",N)}}function S(){try{t.texSubImage2D(...arguments)}catch(N){rt("WebGLState:",N)}}function k(){try{t.texSubImage3D(...arguments)}catch(N){rt("WebGLState:",N)}}function Q(){try{t.compressedTexSubImage2D(...arguments)}catch(N){rt("WebGLState:",N)}}function se(){try{t.compressedTexSubImage3D(...arguments)}catch(N){rt("WebGLState:",N)}}function de(){try{t.texStorage2D(...arguments)}catch(N){rt("WebGLState:",N)}}function ge(){try{t.texStorage3D(...arguments)}catch(N){rt("WebGLState:",N)}}function K(){try{t.texImage2D(...arguments)}catch(N){rt("WebGLState:",N)}}function ee(){try{t.texImage3D(...arguments)}catch(N){rt("WebGLState:",N)}}function Me(N){return h[N]!==void 0?h[N]:t.getParameter(N)}function Ae(N,he){h[N]!==he&&(t.pixelStorei(N,he),h[N]=he)}function pe(N){Ue.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),Ue.copy(N))}function fe(N){ce.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),ce.copy(N))}function He(N,he){let J=c.get(he);J===void 0&&(J=new WeakMap,c.set(he,J));let we=J.get(N);we===void 0&&(we=t.getUniformBlockIndex(he,N.name),J.set(N,we))}function Xe(N,he){const we=c.get(he).get(N);l.get(he)!==we&&(t.uniformBlockBinding(he,we,N.__bindingPointIndex),l.set(he,we))}function ot(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},h={},Z=null,ie={},d={},g=new WeakMap,v=[],y=null,m=!1,f=null,p=null,_=null,M=null,A=null,w=null,R=null,x=new nt(0,0,0),b=0,C=!1,P=null,U=null,$=null,q=null,I=null,Ue.set(0,0,t.canvas.width,t.canvas.height),ce.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:re,disable:De,bindFramebuffer:ze,drawBuffers:Oe,useProgram:pt,setBlending:Ce,setMaterial:ue,setFlipSided:Ve,setCullFace:Se,setLineWidth:Ze,setPolygonOffset:D,setScissorTest:mt,activeTexture:Ye,bindTexture:ct,unbindTexture:ve,compressedTexImage2D:wt,compressedTexImage3D:T,texImage2D:K,texImage3D:ee,pixelStorei:Ae,getParameter:Me,updateUBOMapping:He,uniformBlockBinding:Xe,texStorage2D:de,texStorage3D:ge,texSubImage2D:S,texSubImage3D:k,compressedTexSubImage2D:Q,compressedTexSubImage3D:se,scissor:pe,viewport:fe,reset:ot}}function uC(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new tt,u=new WeakMap,h=new Set;let d;const g=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(T,S){return v?new OffscreenCanvas(T,S):fc("canvas")}function m(T,S,k){let Q=1;const se=wt(T);if((se.width>k||se.height>k)&&(Q=k/Math.max(se.width,se.height)),Q<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const de=Math.floor(Q*se.width),ge=Math.floor(Q*se.height);d===void 0&&(d=y(de,ge));const K=S?y(de,ge):d;return K.width=de,K.height=ge,K.getContext("2d").drawImage(T,0,0,de,ge),ke("WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+de+"x"+ge+")."),K}else return"data"in T&&ke("WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),T;return T}function f(T){return T.generateMipmaps}function p(T){t.generateMipmap(T)}function _(T){return T.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?t.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function M(T,S,k,Q,se,de=!1){if(T!==null){if(t[T]!==void 0)return t[T];ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ge;Q&&(ge=e.get("EXT_texture_norm16"),ge||ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=S;if(S===t.RED&&(k===t.FLOAT&&(K=t.R32F),k===t.HALF_FLOAT&&(K=t.R16F),k===t.UNSIGNED_BYTE&&(K=t.R8),k===t.UNSIGNED_SHORT&&ge&&(K=ge.R16_EXT),k===t.SHORT&&ge&&(K=ge.R16_SNORM_EXT)),S===t.RED_INTEGER&&(k===t.UNSIGNED_BYTE&&(K=t.R8UI),k===t.UNSIGNED_SHORT&&(K=t.R16UI),k===t.UNSIGNED_INT&&(K=t.R32UI),k===t.BYTE&&(K=t.R8I),k===t.SHORT&&(K=t.R16I),k===t.INT&&(K=t.R32I)),S===t.RG&&(k===t.FLOAT&&(K=t.RG32F),k===t.HALF_FLOAT&&(K=t.RG16F),k===t.UNSIGNED_BYTE&&(K=t.RG8),k===t.UNSIGNED_SHORT&&ge&&(K=ge.RG16_EXT),k===t.SHORT&&ge&&(K=ge.RG16_SNORM_EXT)),S===t.RG_INTEGER&&(k===t.UNSIGNED_BYTE&&(K=t.RG8UI),k===t.UNSIGNED_SHORT&&(K=t.RG16UI),k===t.UNSIGNED_INT&&(K=t.RG32UI),k===t.BYTE&&(K=t.RG8I),k===t.SHORT&&(K=t.RG16I),k===t.INT&&(K=t.RG32I)),S===t.RGB_INTEGER&&(k===t.UNSIGNED_BYTE&&(K=t.RGB8UI),k===t.UNSIGNED_SHORT&&(K=t.RGB16UI),k===t.UNSIGNED_INT&&(K=t.RGB32UI),k===t.BYTE&&(K=t.RGB8I),k===t.SHORT&&(K=t.RGB16I),k===t.INT&&(K=t.RGB32I)),S===t.RGBA_INTEGER&&(k===t.UNSIGNED_BYTE&&(K=t.RGBA8UI),k===t.UNSIGNED_SHORT&&(K=t.RGBA16UI),k===t.UNSIGNED_INT&&(K=t.RGBA32UI),k===t.BYTE&&(K=t.RGBA8I),k===t.SHORT&&(K=t.RGBA16I),k===t.INT&&(K=t.RGBA32I)),S===t.RGB&&(k===t.UNSIGNED_SHORT&&ge&&(K=ge.RGB16_EXT),k===t.SHORT&&ge&&(K=ge.RGB16_SNORM_EXT),k===t.UNSIGNED_INT_5_9_9_9_REV&&(K=t.RGB9_E5),k===t.UNSIGNED_INT_10F_11F_11F_REV&&(K=t.R11F_G11F_B10F)),S===t.RGBA){const ee=de?dc:et.getTransfer(se);k===t.FLOAT&&(K=t.RGBA32F),k===t.HALF_FLOAT&&(K=t.RGBA16F),k===t.UNSIGNED_BYTE&&(K=ee===at?t.SRGB8_ALPHA8:t.RGBA8),k===t.UNSIGNED_SHORT&&ge&&(K=ge.RGBA16_EXT),k===t.SHORT&&ge&&(K=ge.RGBA16_SNORM_EXT),k===t.UNSIGNED_SHORT_4_4_4_4&&(K=t.RGBA4),k===t.UNSIGNED_SHORT_5_5_5_1&&(K=t.RGB5_A1)}return(K===t.R16F||K===t.R32F||K===t.RG16F||K===t.RG32F||K===t.RGBA16F||K===t.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function A(T,S){let k;return T?S===null||S===Mi||S===aa?k=t.DEPTH24_STENCIL8:S===mi?k=t.DEPTH32F_STENCIL8:S===oa&&(k=t.DEPTH24_STENCIL8,ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Mi||S===aa?k=t.DEPTH_COMPONENT24:S===mi?k=t.DEPTH_COMPONENT32F:S===oa&&(k=t.DEPTH_COMPONENT16),k}function w(T,S){return f(T)===!0||T.isFramebufferTexture&&T.minFilter!==Xt&&T.minFilter!==nn?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function R(T){const S=T.target;S.removeEventListener("dispose",R),b(S),S.isVideoTexture&&u.delete(S),S.isHTMLTexture&&h.delete(S)}function x(T){const S=T.target;S.removeEventListener("dispose",x),P(S)}function b(T){const S=i.get(T);if(S.__webglInit===void 0)return;const k=T.source,Q=g.get(k);if(Q){const se=Q[S.__cacheKey];se.usedTimes--,se.usedTimes===0&&C(T),Object.keys(Q).length===0&&g.delete(k)}i.remove(T)}function C(T){const S=i.get(T);t.deleteTexture(S.__webglTexture);const k=T.source,Q=g.get(k);delete Q[S.__cacheKey],o.memory.textures--}function P(T){const S=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(S.__webglFramebuffer[Q]))for(let se=0;se<S.__webglFramebuffer[Q].length;se++)t.deleteFramebuffer(S.__webglFramebuffer[Q][se]);else t.deleteFramebuffer(S.__webglFramebuffer[Q]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[Q])}else{if(Array.isArray(S.__webglFramebuffer))for(let Q=0;Q<S.__webglFramebuffer.length;Q++)t.deleteFramebuffer(S.__webglFramebuffer[Q]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Q=0;Q<S.__webglColorRenderbuffer.length;Q++)S.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[Q]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const k=T.textures;for(let Q=0,se=k.length;Q<se;Q++){const de=i.get(k[Q]);de.__webglTexture&&(t.deleteTexture(de.__webglTexture),o.memory.textures--),i.remove(k[Q])}i.remove(T)}let U=0;function $(){U=0}function q(){return U}function I(T){U=T}function B(){const T=U;return T>=r.maxTextures&&ke("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),U+=1,T}function G(T){const S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.colorSpace),S.join()}function O(T,S){const k=i.get(T);if(T.isVideoTexture&&ct(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&k.__version!==T.version){const Q=T.image;if(Q===null)ke("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)ke("WebGLRenderer: Texture marked for update but image is incomplete");else{De(k,T,S);return}}else T.isExternalTexture&&(k.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,k.__webglTexture,t.TEXTURE0+S)}function X(T,S){const k=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){De(k,T,S);return}else T.isExternalTexture&&(k.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,k.__webglTexture,t.TEXTURE0+S)}function Z(T,S){const k=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){De(k,T,S);return}n.bindTexture(t.TEXTURE_3D,k.__webglTexture,t.TEXTURE0+S)}function ie(T,S){const k=i.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&k.__version!==T.version){ze(k,T,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture,t.TEXTURE0+S)}const le={[lf]:t.REPEAT,[Ui]:t.CLAMP_TO_EDGE,[cf]:t.MIRRORED_REPEAT},Fe={[Xt]:t.NEAREST,[A1]:t.NEAREST_MIPMAP_NEAREST,[Ga]:t.NEAREST_MIPMAP_LINEAR,[nn]:t.LINEAR,[yu]:t.LINEAR_MIPMAP_NEAREST,[Hr]:t.LINEAR_MIPMAP_LINEAR},Ue={[C1]:t.NEVER,[I1]:t.ALWAYS,[P1]:t.LESS,[ip]:t.LEQUAL,[L1]:t.EQUAL,[rp]:t.GEQUAL,[N1]:t.GREATER,[D1]:t.NOTEQUAL};function ce(T,S){if(S.type===mi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===nn||S.magFilter===yu||S.magFilter===Ga||S.magFilter===Hr||S.minFilter===nn||S.minFilter===yu||S.minFilter===Ga||S.minFilter===Hr)&&ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(T,t.TEXTURE_WRAP_S,le[S.wrapS]),t.texParameteri(T,t.TEXTURE_WRAP_T,le[S.wrapT]),(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)&&t.texParameteri(T,t.TEXTURE_WRAP_R,le[S.wrapR]),t.texParameteri(T,t.TEXTURE_MAG_FILTER,Fe[S.magFilter]),t.texParameteri(T,t.TEXTURE_MIN_FILTER,Fe[S.minFilter]),S.compareFunction&&(t.texParameteri(T,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(T,t.TEXTURE_COMPARE_FUNC,Ue[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Xt||S.minFilter!==Ga&&S.minFilter!==Hr||S.type===mi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");t.texParameterf(T,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Y(T,S){let k=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",R));const Q=S.source;let se=g.get(Q);se===void 0&&(se={},g.set(Q,se));const de=G(S);if(de!==T.__cacheKey){se[de]===void 0&&(se[de]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,k=!0),se[de].usedTimes++;const ge=se[T.__cacheKey];ge!==void 0&&(se[T.__cacheKey].usedTimes--,ge.usedTimes===0&&C(S)),T.__cacheKey=de,T.__webglTexture=se[de].texture}return k}function oe(T,S,k){return Math.floor(Math.floor(T/k)/S)}function re(T,S,k,Q){const de=T.updateRanges;if(de.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,S.width,S.height,k,Q,S.data);else{de.sort((Ae,pe)=>Ae.start-pe.start);let ge=0;for(let Ae=1;Ae<de.length;Ae++){const pe=de[ge],fe=de[Ae],He=pe.start+pe.count,Xe=oe(fe.start,S.width,4),ot=oe(pe.start,S.width,4);fe.start<=He+1&&Xe===ot&&oe(fe.start+fe.count-1,S.width,4)===Xe?pe.count=Math.max(pe.count,fe.start+fe.count-pe.start):(++ge,de[ge]=fe)}de.length=ge+1;const K=n.getParameter(t.UNPACK_ROW_LENGTH),ee=n.getParameter(t.UNPACK_SKIP_PIXELS),Me=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,S.width);for(let Ae=0,pe=de.length;Ae<pe;Ae++){const fe=de[Ae],He=Math.floor(fe.start/4),Xe=Math.ceil(fe.count/4),ot=He%S.width,N=Math.floor(He/S.width),he=Xe,J=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,ot),n.pixelStorei(t.UNPACK_SKIP_ROWS,N),n.texSubImage2D(t.TEXTURE_2D,0,ot,N,he,J,k,Q,S.data)}T.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,K),n.pixelStorei(t.UNPACK_SKIP_PIXELS,ee),n.pixelStorei(t.UNPACK_SKIP_ROWS,Me)}}function De(T,S,k){let Q=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Q=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Q=t.TEXTURE_3D);const se=Y(T,S),de=S.source;n.bindTexture(Q,T.__webglTexture,t.TEXTURE0+k);const ge=i.get(de);if(de.version!==ge.__version||se===!0){if(n.activeTexture(t.TEXTURE0+k),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const J=et.getPrimaries(et.workingColorSpace),we=S.colorSpace===or?null:et.getPrimaries(S.colorSpace),me=S.colorSpace===or||J===we?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,me)}n.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment);let ee=m(S.image,!1,r.maxTextureSize);ee=ve(S,ee);const Me=s.convert(S.format,S.colorSpace),Ae=s.convert(S.type);let pe=M(S.internalFormat,Me,Ae,S.normalized,S.colorSpace,S.isVideoTexture);ce(Q,S);let fe;const He=S.mipmaps,Xe=S.isVideoTexture!==!0,ot=ge.__version===void 0||se===!0,N=de.dataReady,he=w(S,ee);if(S.isDepthTexture)pe=A(S.format===Gr,S.type),ot&&(Xe?n.texStorage2D(t.TEXTURE_2D,1,pe,ee.width,ee.height):n.texImage2D(t.TEXTURE_2D,0,pe,ee.width,ee.height,0,Me,Ae,null));else if(S.isDataTexture)if(He.length>0){Xe&&ot&&n.texStorage2D(t.TEXTURE_2D,he,pe,He[0].width,He[0].height);for(let J=0,we=He.length;J<we;J++)fe=He[J],Xe?N&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,fe.width,fe.height,Me,Ae,fe.data):n.texImage2D(t.TEXTURE_2D,J,pe,fe.width,fe.height,0,Me,Ae,fe.data);S.generateMipmaps=!1}else Xe?(ot&&n.texStorage2D(t.TEXTURE_2D,he,pe,ee.width,ee.height),N&&re(S,ee,Me,Ae)):n.texImage2D(t.TEXTURE_2D,0,pe,ee.width,ee.height,0,Me,Ae,ee.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Xe&&ot&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,pe,He[0].width,He[0].height,ee.depth);for(let J=0,we=He.length;J<we;J++)if(fe=He[J],S.format!==Qn)if(Me!==null)if(Xe){if(N)if(S.layerUpdates.size>0){const me=Rg(fe.width,fe.height,S.format,S.type);for(const ne of S.layerUpdates){const Le=fe.data.subarray(ne*me/fe.data.BYTES_PER_ELEMENT,(ne+1)*me/fe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,ne,fe.width,fe.height,1,Me,Le)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,fe.width,fe.height,ee.depth,Me,fe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,J,pe,fe.width,fe.height,ee.depth,0,fe.data,0,0);else ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xe?N&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,fe.width,fe.height,ee.depth,Me,Ae,fe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,J,pe,fe.width,fe.height,ee.depth,0,Me,Ae,fe.data)}else{Xe&&ot&&n.texStorage2D(t.TEXTURE_2D,he,pe,He[0].width,He[0].height);for(let J=0,we=He.length;J<we;J++)fe=He[J],S.format!==Qn?Me!==null?Xe?N&&n.compressedTexSubImage2D(t.TEXTURE_2D,J,0,0,fe.width,fe.height,Me,fe.data):n.compressedTexImage2D(t.TEXTURE_2D,J,pe,fe.width,fe.height,0,fe.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?N&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,fe.width,fe.height,Me,Ae,fe.data):n.texImage2D(t.TEXTURE_2D,J,pe,fe.width,fe.height,0,Me,Ae,fe.data)}else if(S.isDataArrayTexture)if(Xe){if(ot&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,pe,ee.width,ee.height,ee.depth),N)if(S.layerUpdates.size>0){const J=Rg(ee.width,ee.height,S.format,S.type);for(const we of S.layerUpdates){const me=ee.data.subarray(we*J/ee.data.BYTES_PER_ELEMENT,(we+1)*J/ee.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,we,ee.width,ee.height,1,Me,Ae,me)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,Me,Ae,ee.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,pe,ee.width,ee.height,ee.depth,0,Me,Ae,ee.data);else if(S.isData3DTexture)Xe?(ot&&n.texStorage3D(t.TEXTURE_3D,he,pe,ee.width,ee.height,ee.depth),N&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,Me,Ae,ee.data)):n.texImage3D(t.TEXTURE_3D,0,pe,ee.width,ee.height,ee.depth,0,Me,Ae,ee.data);else if(S.isFramebufferTexture){if(ot)if(Xe)n.texStorage2D(t.TEXTURE_2D,he,pe,ee.width,ee.height);else{let J=ee.width,we=ee.height;for(let me=0;me<he;me++)n.texImage2D(t.TEXTURE_2D,me,pe,J,we,0,Me,Ae,null),J>>=1,we>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in t){const J=t.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),ee.parentNode!==J){J.appendChild(ee),h.add(S),J.onpaint=We=>{const Rt=We.changedElements;for(const ut of h)Rt.includes(ut.image)&&(ut.needsUpdate=!0)},J.requestPaint();return}const we=0,me=t.RGBA,ne=t.RGBA,Le=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,we,me,ne,Le,ee),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(He.length>0){if(Xe&&ot){const J=wt(He[0]);n.texStorage2D(t.TEXTURE_2D,he,pe,J.width,J.height)}for(let J=0,we=He.length;J<we;J++)fe=He[J],Xe?N&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,Me,Ae,fe):n.texImage2D(t.TEXTURE_2D,J,pe,Me,Ae,fe);S.generateMipmaps=!1}else if(Xe){if(ot){const J=wt(ee);n.texStorage2D(t.TEXTURE_2D,he,pe,J.width,J.height)}N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Me,Ae,ee)}else n.texImage2D(t.TEXTURE_2D,0,pe,Me,Ae,ee);f(S)&&p(Q),ge.__version=de.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function ze(T,S,k){if(S.image.length!==6)return;const Q=Y(T,S),se=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,T.__webglTexture,t.TEXTURE0+k);const de=i.get(se);if(se.version!==de.__version||Q===!0){n.activeTexture(t.TEXTURE0+k);const ge=et.getPrimaries(et.workingColorSpace),K=S.colorSpace===or?null:et.getPrimaries(S.colorSpace),ee=S.colorSpace===or||ge===K?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const Me=S.isCompressedTexture||S.image[0].isCompressedTexture,Ae=S.image[0]&&S.image[0].isDataTexture,pe=[];for(let ne=0;ne<6;ne++)!Me&&!Ae?pe[ne]=m(S.image[ne],!0,r.maxCubemapSize):pe[ne]=Ae?S.image[ne].image:S.image[ne],pe[ne]=ve(S,pe[ne]);const fe=pe[0],He=s.convert(S.format,S.colorSpace),Xe=s.convert(S.type),ot=M(S.internalFormat,He,Xe,S.normalized,S.colorSpace),N=S.isVideoTexture!==!0,he=de.__version===void 0||Q===!0,J=se.dataReady;let we=w(S,fe);ce(t.TEXTURE_CUBE_MAP,S);let me;if(Me){N&&he&&n.texStorage2D(t.TEXTURE_CUBE_MAP,we,ot,fe.width,fe.height);for(let ne=0;ne<6;ne++){me=pe[ne].mipmaps;for(let Le=0;Le<me.length;Le++){const We=me[Le];S.format!==Qn?He!==null?N?J&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Le,0,0,We.width,We.height,He,We.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Le,ot,We.width,We.height,0,We.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Le,0,0,We.width,We.height,He,Xe,We.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Le,ot,We.width,We.height,0,He,Xe,We.data)}}}else{if(me=S.mipmaps,N&&he){me.length>0&&we++;const ne=wt(pe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,we,ot,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(Ae){N?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,pe[ne].width,pe[ne].height,He,Xe,pe[ne].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ot,pe[ne].width,pe[ne].height,0,He,Xe,pe[ne].data);for(let Le=0;Le<me.length;Le++){const Rt=me[Le].image[ne].image;N?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Le+1,0,0,Rt.width,Rt.height,He,Xe,Rt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Le+1,ot,Rt.width,Rt.height,0,He,Xe,Rt.data)}}else{N?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,He,Xe,pe[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ot,He,Xe,pe[ne]);for(let Le=0;Le<me.length;Le++){const We=me[Le];N?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Le+1,0,0,He,Xe,We.image[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Le+1,ot,He,Xe,We.image[ne])}}}f(S)&&p(t.TEXTURE_CUBE_MAP),de.__version=se.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function Oe(T,S,k,Q,se,de){const ge=s.convert(k.format,k.colorSpace),K=s.convert(k.type),ee=M(k.internalFormat,ge,K,k.normalized,k.colorSpace),Me=i.get(S),Ae=i.get(k);if(Ae.__renderTarget=S,!Me.__hasExternalTextures){const pe=Math.max(1,S.width>>de),fe=Math.max(1,S.height>>de);se===t.TEXTURE_3D||se===t.TEXTURE_2D_ARRAY?n.texImage3D(se,de,ee,pe,fe,S.depth,0,ge,K,null):n.texImage2D(se,de,ee,pe,fe,0,ge,K,null)}n.bindFramebuffer(t.FRAMEBUFFER,T),Ye(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,se,Ae.__webglTexture,0,mt(S)):(se===t.TEXTURE_2D||se>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Q,se,Ae.__webglTexture,de),n.bindFramebuffer(t.FRAMEBUFFER,null)}function pt(T,S,k){if(t.bindRenderbuffer(t.RENDERBUFFER,T),S.depthBuffer){const Q=S.depthTexture,se=Q&&Q.isDepthTexture?Q.type:null,de=A(S.stencilBuffer,se),ge=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Ye(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,mt(S),de,S.width,S.height):k?t.renderbufferStorageMultisample(t.RENDERBUFFER,mt(S),de,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,de,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ge,t.RENDERBUFFER,T)}else{const Q=S.textures;for(let se=0;se<Q.length;se++){const de=Q[se],ge=s.convert(de.format,de.colorSpace),K=s.convert(de.type),ee=M(de.internalFormat,ge,K,de.normalized,de.colorSpace);Ye(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,mt(S),ee,S.width,S.height):k?t.renderbufferStorageMultisample(t.RENDERBUFFER,mt(S),ee,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,ee,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function $e(T,S,k){const Q=S.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const se=i.get(S.depthTexture);if(se.__renderTarget=S,(!se.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Q){if(se.__webglInit===void 0&&(se.__webglInit=!0,S.depthTexture.addEventListener("dispose",R)),se.__webglTexture===void 0){se.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,se.__webglTexture),ce(t.TEXTURE_CUBE_MAP,S.depthTexture);const Me=s.convert(S.depthTexture.format),Ae=s.convert(S.depthTexture.type);let pe;S.depthTexture.format===Wi?pe=t.DEPTH_COMPONENT24:S.depthTexture.format===Gr&&(pe=t.DEPTH24_STENCIL8);for(let fe=0;fe<6;fe++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,pe,S.width,S.height,0,Me,Ae,null)}}else O(S.depthTexture,0);const de=se.__webglTexture,ge=mt(S),K=Q?t.TEXTURE_CUBE_MAP_POSITIVE_X+k:t.TEXTURE_2D,ee=S.depthTexture.format===Gr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(S.depthTexture.format===Wi)Ye(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,K,de,0,ge):t.framebufferTexture2D(t.FRAMEBUFFER,ee,K,de,0);else if(S.depthTexture.format===Gr)Ye(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,K,de,0,ge):t.framebufferTexture2D(t.FRAMEBUFFER,ee,K,de,0);else throw new Error("Unknown depthTexture format")}function Ee(T){const S=i.get(T),k=T.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==T.depthTexture){const Q=T.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Q){const se=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Q.removeEventListener("dispose",se)};Q.addEventListener("dispose",se),S.__depthDisposeCallback=se}S.__boundDepthTexture=Q}if(T.depthTexture&&!S.__autoAllocateDepthBuffer)if(k)for(let Q=0;Q<6;Q++)$e(S.__webglFramebuffer[Q],T,Q);else{const Q=T.texture.mipmaps;Q&&Q.length>0?$e(S.__webglFramebuffer[0],T,0):$e(S.__webglFramebuffer,T,0)}else if(k){S.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[Q]),S.__webglDepthbuffer[Q]===void 0)S.__webglDepthbuffer[Q]=t.createRenderbuffer(),pt(S.__webglDepthbuffer[Q],T,!1);else{const se=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=S.__webglDepthbuffer[Q];t.bindRenderbuffer(t.RENDERBUFFER,de),t.framebufferRenderbuffer(t.FRAMEBUFFER,se,t.RENDERBUFFER,de)}}else{const Q=T.texture.mipmaps;if(Q&&Q.length>0?n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),pt(S.__webglDepthbuffer,T,!1);else{const se=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,de),t.framebufferRenderbuffer(t.FRAMEBUFFER,se,t.RENDERBUFFER,de)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ce(T,S,k){const Q=i.get(T);S!==void 0&&Oe(Q.__webglFramebuffer,T,T.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),k!==void 0&&Ee(T)}function ue(T){const S=T.texture,k=i.get(T),Q=i.get(S);T.addEventListener("dispose",x);const se=T.textures,de=T.isWebGLCubeRenderTarget===!0,ge=se.length>1;if(ge||(Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture()),Q.__version=S.version,o.memory.textures++),de){k.__webglFramebuffer=[];for(let K=0;K<6;K++)if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[K]=[];for(let ee=0;ee<S.mipmaps.length;ee++)k.__webglFramebuffer[K][ee]=t.createFramebuffer()}else k.__webglFramebuffer[K]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let K=0;K<S.mipmaps.length;K++)k.__webglFramebuffer[K]=t.createFramebuffer()}else k.__webglFramebuffer=t.createFramebuffer();if(ge)for(let K=0,ee=se.length;K<ee;K++){const Me=i.get(se[K]);Me.__webglTexture===void 0&&(Me.__webglTexture=t.createTexture(),o.memory.textures++)}if(T.samples>0&&Ye(T)===!1){k.__webglMultisampledFramebuffer=t.createFramebuffer(),k.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let K=0;K<se.length;K++){const ee=se[K];k.__webglColorRenderbuffer[K]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,k.__webglColorRenderbuffer[K]);const Me=s.convert(ee.format,ee.colorSpace),Ae=s.convert(ee.type),pe=M(ee.internalFormat,Me,Ae,ee.normalized,ee.colorSpace,T.isXRRenderTarget===!0),fe=mt(T);t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,pe,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+K,t.RENDERBUFFER,k.__webglColorRenderbuffer[K])}t.bindRenderbuffer(t.RENDERBUFFER,null),T.depthBuffer&&(k.__webglDepthRenderbuffer=t.createRenderbuffer(),pt(k.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(de){n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),ce(t.TEXTURE_CUBE_MAP,S);for(let K=0;K<6;K++)if(S.mipmaps&&S.mipmaps.length>0)for(let ee=0;ee<S.mipmaps.length;ee++)Oe(k.__webglFramebuffer[K][ee],T,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+K,ee);else Oe(k.__webglFramebuffer[K],T,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);f(S)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ge){for(let K=0,ee=se.length;K<ee;K++){const Me=se[K],Ae=i.get(Me);let pe=t.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(pe=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(pe,Ae.__webglTexture),ce(pe,Me),Oe(k.__webglFramebuffer,T,Me,t.COLOR_ATTACHMENT0+K,pe,0),f(Me)&&p(pe)}n.unbindTexture()}else{let K=t.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(K=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(K,Q.__webglTexture),ce(K,S),S.mipmaps&&S.mipmaps.length>0)for(let ee=0;ee<S.mipmaps.length;ee++)Oe(k.__webglFramebuffer[ee],T,S,t.COLOR_ATTACHMENT0,K,ee);else Oe(k.__webglFramebuffer,T,S,t.COLOR_ATTACHMENT0,K,0);f(S)&&p(K),n.unbindTexture()}T.depthBuffer&&Ee(T)}function Ve(T){const S=T.textures;for(let k=0,Q=S.length;k<Q;k++){const se=S[k];if(f(se)){const de=_(T),ge=i.get(se).__webglTexture;n.bindTexture(de,ge),p(de),n.unbindTexture()}}}const Se=[],Ze=[];function D(T){if(T.samples>0){if(Ye(T)===!1){const S=T.textures,k=T.width,Q=T.height;let se=t.COLOR_BUFFER_BIT;const de=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ge=i.get(T),K=S.length>1;if(K)for(let Me=0;Me<S.length;Me++)n.bindFramebuffer(t.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ge.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer);const ee=T.texture.mipmaps;ee&&ee.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let Me=0;Me<S.length;Me++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(se|=t.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(se|=t.STENCIL_BUFFER_BIT)),K){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ge.__webglColorRenderbuffer[Me]);const Ae=i.get(S[Me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ae,0)}t.blitFramebuffer(0,0,k,Q,0,0,k,Q,se,t.NEAREST),l===!0&&(Se.length=0,Ze.length=0,Se.push(t.COLOR_ATTACHMENT0+Me),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Se.push(de),Ze.push(de),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ze)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Se))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),K)for(let Me=0;Me<S.length;Me++){n.bindFramebuffer(t.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.RENDERBUFFER,ge.__webglColorRenderbuffer[Me]);const Ae=i.get(S[Me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ge.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.TEXTURE_2D,Ae,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const S=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function mt(T){return Math.min(r.maxSamples,T.samples)}function Ye(T){const S=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ct(T){const S=o.render.frame;u.get(T)!==S&&(u.set(T,S),T.update())}function ve(T,S){const k=T.colorSpace,Q=T.format,se=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||k!==uc&&k!==or&&(et.getTransfer(k)===at?(Q!==Qn||se!==An)&&ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):rt("WebGLTextures: Unsupported texture color space:",k)),S}function wt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=$,this.getTextureUnits=q,this.setTextureUnits=I,this.setTexture2D=O,this.setTexture2DArray=X,this.setTexture3D=Z,this.setTextureCube=ie,this.rebindTextures=Ce,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=Ve,this.updateMultisampleRenderTarget=D,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=Ye,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function dC(t,e){function n(i,r=or){let s;const o=et.getTransfer(r);if(i===An)return t.UNSIGNED_BYTE;if(i===Jh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Qh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===J_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Q_)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===K_)return t.BYTE;if(i===Z_)return t.SHORT;if(i===oa)return t.UNSIGNED_SHORT;if(i===Zh)return t.INT;if(i===Mi)return t.UNSIGNED_INT;if(i===mi)return t.FLOAT;if(i===Gi)return t.HALF_FLOAT;if(i===ex)return t.ALPHA;if(i===tx)return t.RGB;if(i===Qn)return t.RGBA;if(i===Wi)return t.DEPTH_COMPONENT;if(i===Gr)return t.DEPTH_STENCIL;if(i===nx)return t.RED;if(i===ep)return t.RED_INTEGER;if(i===es)return t.RG;if(i===tp)return t.RG_INTEGER;if(i===np)return t.RGBA_INTEGER;if(i===Rl||i===Cl||i===Pl||i===Ll)if(o===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Rl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Cl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Pl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ll)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Rl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Cl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Pl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ll)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===uf||i===df||i===ff||i===hf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===uf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===df)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ff)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===hf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===pf||i===mf||i===gf||i===vf||i===_f||i===lc||i===xf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===pf||i===mf)return o===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===gf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===vf)return s.COMPRESSED_R11_EAC;if(i===_f)return s.COMPRESSED_SIGNED_R11_EAC;if(i===lc)return s.COMPRESSED_RG11_EAC;if(i===xf)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===yf||i===Sf||i===Mf||i===Ef||i===wf||i===Tf||i===Af||i===bf||i===Rf||i===Cf||i===Pf||i===Lf||i===Nf||i===Df)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===yf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Sf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Mf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ef)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===wf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Tf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Af)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===bf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Rf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Cf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Pf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Lf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Nf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Df)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===If||i===Uf||i===Ff)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===If)return o===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Uf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ff)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Of||i===Bf||i===cc||i===kf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Of)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Bf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===cc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===kf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===aa?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const fC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class pC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new ux(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ei({vertexShader:fC,fragmentShader:hC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ii(new Ic(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mC extends rs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,g=null,v=null;const y=typeof XRWebGLBinding<"u",m=new pC,f={},p=n.getContextAttributes();let _=null,M=null;const A=[],w=[],R=new tt;let x=null;const b=new zn;b.viewport=new bt;const C=new zn;C.viewport=new bt;const P=[b,C],U=new Tw;let $=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let oe=A[Y];return oe===void 0&&(oe=new Ru,A[Y]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(Y){let oe=A[Y];return oe===void 0&&(oe=new Ru,A[Y]=oe),oe.getGripSpace()},this.getHand=function(Y){let oe=A[Y];return oe===void 0&&(oe=new Ru,A[Y]=oe),oe.getHandSpace()};function I(Y){const oe=w.indexOf(Y.inputSource);if(oe===-1)return;const re=A[oe];re!==void 0&&(re.update(Y.inputSource,Y.frame,c||o),re.dispatchEvent({type:Y.type,data:Y.inputSource}))}function B(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",G);for(let Y=0;Y<A.length;Y++){const oe=w[Y];oe!==null&&(w[Y]=null,A[Y].disconnect(oe))}$=null,q=null,m.reset();for(const Y in f)delete f[Y];e.setRenderTarget(_),g=null,d=null,h=null,r=null,M=null,ce.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:g},this.getBinding=function(){return h===null&&y&&(h=new XRWebGLBinding(r,n)),h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",B),r.addEventListener("inputsourceschange",G),p.xrCompatible!==!0&&await n.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(R),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,De=null,ze=null;p.depth&&(ze=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,re=p.stencil?Gr:Wi,De=p.stencil?aa:Mi);const Oe={colorFormat:n.RGBA8,depthFormat:ze,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(Oe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new yi(d.textureWidth,d.textureHeight,{format:Qn,type:An,depthTexture:new Zs(d.textureWidth,d.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const re={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,re),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),M=new yi(g.framebufferWidth,g.framebufferHeight,{format:Qn,type:An,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ce.setContext(r),ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function G(Y){for(let oe=0;oe<Y.removed.length;oe++){const re=Y.removed[oe],De=w.indexOf(re);De>=0&&(w[De]=null,A[De].disconnect(re))}for(let oe=0;oe<Y.added.length;oe++){const re=Y.added[oe];let De=w.indexOf(re);if(De===-1){for(let Oe=0;Oe<A.length;Oe++)if(Oe>=w.length){w.push(re),De=Oe;break}else if(w[Oe]===null){w[Oe]=re,De=Oe;break}if(De===-1)break}const ze=A[De];ze&&ze.connect(re)}}const O=new z,X=new z;function Z(Y,oe,re){O.setFromMatrixPosition(oe.matrixWorld),X.setFromMatrixPosition(re.matrixWorld);const De=O.distanceTo(X),ze=oe.projectionMatrix.elements,Oe=re.projectionMatrix.elements,pt=ze[14]/(ze[10]-1),$e=ze[14]/(ze[10]+1),Ee=(ze[9]+1)/ze[5],Ce=(ze[9]-1)/ze[5],ue=(ze[8]-1)/ze[0],Ve=(Oe[8]+1)/Oe[0],Se=pt*ue,Ze=pt*Ve,D=De/(-ue+Ve),mt=D*-ue;if(oe.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(mt),Y.translateZ(D),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),ze[10]===-1)Y.projectionMatrix.copy(oe.projectionMatrix),Y.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const Ye=pt+D,ct=$e+D,ve=Se-mt,wt=Ze+(De-mt),T=Ee*$e/ct*Ye,S=Ce*$e/ct*Ye;Y.projectionMatrix.makePerspective(ve,wt,T,S,Ye,ct),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ie(Y,oe){oe===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(oe.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let oe=Y.near,re=Y.far;m.texture!==null&&(m.depthNear>0&&(oe=m.depthNear),m.depthFar>0&&(re=m.depthFar)),U.near=C.near=b.near=oe,U.far=C.far=b.far=re,($!==U.near||q!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),$=U.near,q=U.far),U.layers.mask=Y.layers.mask|6,b.layers.mask=U.layers.mask&-5,C.layers.mask=U.layers.mask&-3;const De=Y.parent,ze=U.cameras;ie(U,De);for(let Oe=0;Oe<ze.length;Oe++)ie(ze[Oe],De);ze.length===2?Z(U,b,C):U.projectionMatrix.copy(b.projectionMatrix),le(Y,U,De)};function le(Y,oe,re){re===null?Y.matrix.copy(oe.matrixWorld):(Y.matrix.copy(re.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(oe.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(oe.projectionMatrix),Y.projectionMatrixInverse.copy(oe.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Hf*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(d===null&&g===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(Y){return f[Y]};let Fe=null;function Ue(Y,oe){if(u=oe.getViewerPose(c||o),v=oe,u!==null){const re=u.views;g!==null&&(e.setRenderTargetFramebuffer(M,g.framebuffer),e.setRenderTarget(M));let De=!1;re.length!==U.cameras.length&&(U.cameras.length=0,De=!0);for(let $e=0;$e<re.length;$e++){const Ee=re[$e];let Ce=null;if(g!==null)Ce=g.getViewport(Ee);else{const Ve=h.getViewSubImage(d,Ee);Ce=Ve.viewport,$e===0&&(e.setRenderTargetTextures(M,Ve.colorTexture,Ve.depthStencilTexture),e.setRenderTarget(M))}let ue=P[$e];ue===void 0&&(ue=new zn,ue.layers.enable($e),ue.viewport=new bt,P[$e]=ue),ue.matrix.fromArray(Ee.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(Ee.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),$e===0&&(U.matrix.copy(ue.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),De===!0&&U.cameras.push(ue)}const ze=r.enabledFeatures;if(ze&&ze.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){h=i.getBinding();const $e=h.getDepthInformation(re[0]);$e&&$e.isValid&&$e.texture&&m.init($e,r.renderState)}if(ze&&ze.includes("camera-access")&&y){e.state.unbindTexture(),h=i.getBinding();for(let $e=0;$e<re.length;$e++){const Ee=re[$e].camera;if(Ee){let Ce=f[Ee];Ce||(Ce=new ux,f[Ee]=Ce);const ue=h.getCameraImage(Ee);Ce.sourceTexture=ue}}}}for(let re=0;re<A.length;re++){const De=w[re],ze=A[re];De!==null&&ze!==void 0&&ze.update(De,oe,c||o)}Fe&&Fe(Y,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),v=null}const ce=new px;ce.setAnimationLoop(Ue),this.setAnimationLoop=function(Y){Fe=Y},this.dispose=function(){}}}const gC=new Dt,Sx=new Ge;Sx.set(-1,0,0,0,1,0,0,0,1);function vC(t,e){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,dx(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,p,_,M){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(m,f):f.isMeshLambertMaterial?(s(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&g(m,f,M)):f.isMeshMatcapMaterial?(s(m,f),v(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),y(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,p,_):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===_n&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===_n&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const p=e.get(f),_=p.envMap,M=p.envMapRotation;_&&(m.envMap.value=_,m.envMapRotation.value.setFromMatrix4(gC.makeRotationFromEuler(M)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Sx),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,p,_){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*p,m.scale.value=_*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function g(m,f,p){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===_n&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=p.texture,m.transmissionSamplerSize.value.set(p.width,p.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,f){f.matcap&&(m.matcap.value=f.matcap)}function y(m,f){const p=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(p.matrixWorld),m.nearDistance.value=p.shadow.camera.near,m.farDistance.value=p.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function _C(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(p,_){const M=_.program;i.uniformBlockBinding(p,M)}function c(p,_){let M=r[p.id];M===void 0&&(v(p),M=u(p),r[p.id]=M,p.addEventListener("dispose",m));const A=_.program;i.updateUBOMapping(p,A);const w=e.render.frame;s[p.id]!==w&&(d(p),s[p.id]=w)}function u(p){const _=h();p.__bindingPointIndex=_;const M=t.createBuffer(),A=p.__size,w=p.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,A,w),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,M),M}function h(){for(let p=0;p<a;p++)if(o.indexOf(p)===-1)return o.push(p),p;return rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(p){const _=r[p.id],M=p.uniforms,A=p.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let w=0,R=M.length;w<R;w++){const x=Array.isArray(M[w])?M[w]:[M[w]];for(let b=0,C=x.length;b<C;b++){const P=x[b];if(g(P,w,b,A)===!0){const U=P.__offset,$=Array.isArray(P.value)?P.value:[P.value];let q=0;for(let I=0;I<$.length;I++){const B=$[I],G=y(B);typeof B=="number"||typeof B=="boolean"?(P.__data[0]=B,t.bufferSubData(t.UNIFORM_BUFFER,U+q,P.__data)):B.isMatrix3?(P.__data[0]=B.elements[0],P.__data[1]=B.elements[1],P.__data[2]=B.elements[2],P.__data[3]=0,P.__data[4]=B.elements[3],P.__data[5]=B.elements[4],P.__data[6]=B.elements[5],P.__data[7]=0,P.__data[8]=B.elements[6],P.__data[9]=B.elements[7],P.__data[10]=B.elements[8],P.__data[11]=0):ArrayBuffer.isView(B)?P.__data.set(new B.constructor(B.buffer,B.byteOffset,P.__data.length)):(B.toArray(P.__data,q),q+=G.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,U,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(p,_,M,A){const w=p.value,R=_+"_"+M;if(A[R]===void 0)return typeof w=="number"||typeof w=="boolean"?A[R]=w:ArrayBuffer.isView(w)?A[R]=w.slice():A[R]=w.clone(),!0;{const x=A[R];if(typeof w=="number"||typeof w=="boolean"){if(x!==w)return A[R]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(x.equals(w)===!1)return x.copy(w),!0}}return!1}function v(p){const _=p.uniforms;let M=0;const A=16;for(let R=0,x=_.length;R<x;R++){const b=Array.isArray(_[R])?_[R]:[_[R]];for(let C=0,P=b.length;C<P;C++){const U=b[C],$=Array.isArray(U.value)?U.value:[U.value];for(let q=0,I=$.length;q<I;q++){const B=$[q],G=y(B),O=M%A,X=O%G.boundary,Z=O+X;M+=X,Z!==0&&A-Z<G.storage&&(M+=A-Z),U.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=M,M+=G.storage}}}const w=M%A;return w>0&&(M+=A-w),p.__size=M,p.__cache={},this}function y(p){const _={boundary:0,storage:0};return typeof p=="number"||typeof p=="boolean"?(_.boundary=4,_.storage=4):p.isVector2?(_.boundary=8,_.storage=8):p.isVector3||p.isColor?(_.boundary=16,_.storage=12):p.isVector4?(_.boundary=16,_.storage=16):p.isMatrix3?(_.boundary=48,_.storage=48):p.isMatrix4?(_.boundary=64,_.storage=64):p.isTexture?ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(p)?(_.boundary=16,_.storage=p.byteLength):ke("WebGLRenderer: Unsupported uniform value type.",p),_}function m(p){const _=p.target;_.removeEventListener("dispose",m);const M=o.indexOf(_.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function f(){for(const p in r)t.deleteBuffer(r[p]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}const xC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ui=null;function yC(){return ui===null&&(ui=new ow(xC,16,16,es,Gi),ui.name="DFG_LUT",ui.minFilter=nn,ui.magFilter=nn,ui.wrapS=Ui,ui.wrapT=Ui,ui.generateMipmaps=!1,ui.needsUpdate=!0),ui}class SC{constructor(e={}){const{canvas:n=F1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:g=An}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=o;const y=g,m=new Set([np,tp,ep]),f=new Set([An,Mi,oa,aa,Jh,Qh]),p=new Uint32Array(4),_=new Int32Array(4),M=new z;let A=null,w=null;const R=[],x=[];let b=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let P=!1,U=null;this._outputColorSpace=On;let $=0,q=0,I=null,B=-1,G=null;const O=new bt,X=new bt;let Z=null;const ie=new nt(0);let le=0,Fe=n.width,Ue=n.height,ce=1,Y=null,oe=null;const re=new bt(0,0,Fe,Ue),De=new bt(0,0,Fe,Ue);let ze=!1;const Oe=new lp;let pt=!1,$e=!1;const Ee=new Dt,Ce=new z,ue=new bt,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Se=!1;function Ze(){return I===null?ce:1}let D=i;function mt(E,F){return n.getContext(E,F)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Yh}`),n.addEventListener("webglcontextlost",ne,!1),n.addEventListener("webglcontextrestored",Le,!1),n.addEventListener("webglcontextcreationerror",We,!1),D===null){const F="webgl2";if(D=mt(F,E),D===null)throw mt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw rt("WebGLRenderer: "+E.message),E}let Ye,ct,ve,wt,T,S,k,Q,se,de,ge,K,ee,Me,Ae,pe,fe,He,Xe,ot,N,he,J;function we(){Ye=new yb(D),Ye.init(),N=new dC(D,Ye),ct=new fb(D,Ye,e,N),ve=new cC(D,Ye),ct.reversedDepthBuffer&&d&&ve.buffers.depth.setReversed(!0),wt=new Eb(D),T=new YR,S=new uC(D,Ye,ve,T,ct,N,wt),k=new xb(C),Q=new bw(D),he=new ub(D,Q),se=new Sb(D,Q,wt,he),de=new Tb(D,se,Q,he,wt),He=new wb(D,ct,S),Ae=new hb(T),ge=new $R(C,k,Ye,ct,he,Ae),K=new vC(C,T),ee=new ZR,Me=new iC(Ye),fe=new cb(C,k,ve,de,v,l),pe=new lC(C,de,ct),J=new _C(D,wt,ct,ve),Xe=new db(D,Ye,wt),ot=new Mb(D,Ye,wt),wt.programs=ge.programs,C.capabilities=ct,C.extensions=Ye,C.properties=T,C.renderLists=ee,C.shadowMap=pe,C.state=ve,C.info=wt}we(),y!==An&&(b=new bb(y,n.width,n.height,r,s));const me=new mC(C,D);this.xr=me,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=Ye.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ye.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(E){E!==void 0&&(ce=E,this.setSize(Fe,Ue,!1))},this.getSize=function(E){return E.set(Fe,Ue)},this.setSize=function(E,F,W=!0){if(me.isPresenting){ke("WebGLRenderer: Can't change size while VR device is presenting.");return}Fe=E,Ue=F,n.width=Math.floor(E*ce),n.height=Math.floor(F*ce),W===!0&&(n.style.width=E+"px",n.style.height=F+"px"),b!==null&&b.setSize(n.width,n.height),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(Fe*ce,Ue*ce).floor()},this.setDrawingBufferSize=function(E,F,W){Fe=E,Ue=F,ce=W,n.width=Math.floor(E*W),n.height=Math.floor(F*W),this.setViewport(0,0,E,F)},this.setEffects=function(E){if(y===An){rt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let F=0;F<E.length;F++)if(E[F].isOutputPass===!0){ke("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(O)},this.getViewport=function(E){return E.copy(re)},this.setViewport=function(E,F,W,V){E.isVector4?re.set(E.x,E.y,E.z,E.w):re.set(E,F,W,V),ve.viewport(O.copy(re).multiplyScalar(ce).round())},this.getScissor=function(E){return E.copy(De)},this.setScissor=function(E,F,W,V){E.isVector4?De.set(E.x,E.y,E.z,E.w):De.set(E,F,W,V),ve.scissor(X.copy(De).multiplyScalar(ce).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(E){ve.setScissorTest(ze=E)},this.setOpaqueSort=function(E){Y=E},this.setTransparentSort=function(E){oe=E},this.getClearColor=function(E){return E.copy(fe.getClearColor())},this.setClearColor=function(){fe.setClearColor(...arguments)},this.getClearAlpha=function(){return fe.getClearAlpha()},this.setClearAlpha=function(){fe.setClearAlpha(...arguments)},this.clear=function(E=!0,F=!0,W=!0){let V=0;if(E){let H=!1;if(I!==null){const ye=I.texture.format;H=m.has(ye)}if(H){const ye=I.texture.type,be=f.has(ye),xe=fe.getClearColor(),Pe=fe.getClearAlpha(),Ne=xe.r,je=xe.g,Ke=xe.b;be?(p[0]=Ne,p[1]=je,p[2]=Ke,p[3]=Pe,D.clearBufferuiv(D.COLOR,0,p)):(_[0]=Ne,_[1]=je,_[2]=Ke,_[3]=Pe,D.clearBufferiv(D.COLOR,0,_))}else V|=D.COLOR_BUFFER_BIT}F&&(V|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(V|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&D.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),U=E},this.dispose=function(){n.removeEventListener("webglcontextlost",ne,!1),n.removeEventListener("webglcontextrestored",Le,!1),n.removeEventListener("webglcontextcreationerror",We,!1),fe.dispose(),ee.dispose(),Me.dispose(),T.dispose(),k.dispose(),de.dispose(),he.dispose(),J.dispose(),ge.dispose(),me.dispose(),me.removeEventListener("sessionstart",Mp),me.removeEventListener("sessionend",Ep),Cr.stop()};function ne(E){E.preventDefault(),ag("WebGLRenderer: Context Lost."),P=!0}function Le(){ag("WebGLRenderer: Context Restored."),P=!1;const E=wt.autoReset,F=pe.enabled,W=pe.autoUpdate,V=pe.needsUpdate,H=pe.type;we(),wt.autoReset=E,pe.enabled=F,pe.autoUpdate=W,pe.needsUpdate=V,pe.type=H}function We(E){rt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Rt(E){const F=E.target;F.removeEventListener("dispose",Rt),ut(F)}function ut(E){wi(E),T.remove(E)}function wi(E){const F=T.get(E).programs;F!==void 0&&(F.forEach(function(W){ge.releaseProgram(W)}),E.isShaderMaterial&&ge.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,W,V,H,ye){F===null&&(F=Ve);const be=H.isMesh&&H.matrixWorld.determinant()<0,xe=qx(E,F,W,V,H);ve.setMaterial(V,be);let Pe=W.index,Ne=1;if(V.wireframe===!0){if(Pe=se.getWireframeAttribute(W),Pe===void 0)return;Ne=2}const je=W.drawRange,Ke=W.attributes.position;let Ie=je.start*Ne,dt=(je.start+je.count)*Ne;ye!==null&&(Ie=Math.max(Ie,ye.start*Ne),dt=Math.min(dt,(ye.start+ye.count)*Ne)),Pe!==null?(Ie=Math.max(Ie,0),dt=Math.min(dt,Pe.count)):Ke!=null&&(Ie=Math.max(Ie,0),dt=Math.min(dt,Ke.count));const Ct=dt-Ie;if(Ct<0||Ct===1/0)return;he.setup(H,V,xe,W,Pe);let Tt,ft=Xe;if(Pe!==null&&(Tt=Q.get(Pe),ft=ot,ft.setIndex(Tt)),H.isMesh)V.wireframe===!0?(ve.setLineWidth(V.wireframeLinewidth*Ze()),ft.setMode(D.LINES)):ft.setMode(D.TRIANGLES);else if(H.isLine){let Yt=V.linewidth;Yt===void 0&&(Yt=1),ve.setLineWidth(Yt*Ze()),H.isLineSegments?ft.setMode(D.LINES):H.isLineLoop?ft.setMode(D.LINE_LOOP):ft.setMode(D.LINE_STRIP)}else H.isPoints?ft.setMode(D.POINTS):H.isSprite&&ft.setMode(D.TRIANGLES);if(H.isBatchedMesh)if(Ye.get("WEBGL_multi_draw"))ft.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Yt=H._multiDrawStarts,Te=H._multiDrawCounts,Sn=H._multiDrawCount,it=Pe?Q.get(Pe).bytesPerElement:1,In=T.get(V).currentProgram.getUniforms();for(let ai=0;ai<Sn;ai++)In.setValue(D,"_gl_DrawID",ai),ft.render(Yt[ai]/it,Te[ai])}else if(H.isInstancedMesh)ft.renderInstances(Ie,Ct,H.count);else if(W.isInstancedBufferGeometry){const Yt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Te=Math.min(W.instanceCount,Yt);ft.renderInstances(Ie,Ct,Te)}else ft.render(Ie,Ct)};function oi(E,F,W){E.transparent===!0&&E.side===pi&&E.forceSinglePass===!1?(E.side=_n,E.needsUpdate=!0,Ta(E,F,W),E.side=Mr,E.needsUpdate=!0,Ta(E,F,W),E.side=pi):Ta(E,F,W)}this.compile=function(E,F,W=null){W===null&&(W=E),w=Me.get(W),w.init(F),x.push(w),W.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),E!==W&&E.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),w.setupLights();const V=new Set;return E.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ye=H.material;if(ye)if(Array.isArray(ye))for(let be=0;be<ye.length;be++){const xe=ye[be];oi(xe,W,H),V.add(xe)}else oi(ye,W,H),V.add(ye)}),w=x.pop(),V},this.compileAsync=function(E,F,W=null){const V=this.compile(E,F,W);return new Promise(H=>{function ye(){if(V.forEach(function(be){T.get(be).currentProgram.isReady()&&V.delete(be)}),V.size===0){H(E);return}setTimeout(ye,10)}Ye.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let Hc=null;function jx(E){Hc&&Hc(E)}function Mp(){Cr.stop()}function Ep(){Cr.start()}const Cr=new px;Cr.setAnimationLoop(jx),typeof self<"u"&&Cr.setContext(self),this.setAnimationLoop=function(E){Hc=E,me.setAnimationLoop(E),E===null?Cr.stop():Cr.start()},me.addEventListener("sessionstart",Mp),me.addEventListener("sessionend",Ep),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;U!==null&&U.renderStart(E,F);const W=me.enabled===!0&&me.isPresenting===!0,V=b!==null&&(I===null||W)&&b.begin(C,I);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(me.cameraAutoUpdate===!0&&me.updateCamera(F),F=me.getCamera()),E.isScene===!0&&E.onBeforeRender(C,E,F,I),w=Me.get(E,x.length),w.init(F),w.state.textureUnits=S.getTextureUnits(),x.push(w),Ee.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Oe.setFromProjectionMatrix(Ee,gi,F.reversedDepth),$e=this.localClippingEnabled,pt=Ae.init(this.clippingPlanes,$e),A=ee.get(E,R.length),A.init(),R.push(A),me.enabled===!0&&me.isPresenting===!0){const be=C.xr.getDepthSensingMesh();be!==null&&Gc(be,F,-1/0,C.sortObjects)}Gc(E,F,0,C.sortObjects),A.finish(),C.sortObjects===!0&&A.sort(Y,oe),Se=me.enabled===!1||me.isPresenting===!1||me.hasDepthSensing()===!1,Se&&fe.addToRenderList(A,E),this.info.render.frame++,pt===!0&&Ae.beginShadows();const H=w.state.shadowsArray;if(pe.render(H,E,F),pt===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset(),(V&&b.hasRenderPass())===!1){const be=A.opaque,xe=A.transmissive;if(w.setupLights(),F.isArrayCamera){const Pe=F.cameras;if(xe.length>0)for(let Ne=0,je=Pe.length;Ne<je;Ne++){const Ke=Pe[Ne];Tp(be,xe,E,Ke)}Se&&fe.render(E);for(let Ne=0,je=Pe.length;Ne<je;Ne++){const Ke=Pe[Ne];wp(A,E,Ke,Ke.viewport)}}else xe.length>0&&Tp(be,xe,E,F),Se&&fe.render(E),wp(A,E,F)}I!==null&&q===0&&(S.updateMultisampleRenderTarget(I),S.updateRenderTargetMipmap(I)),V&&b.end(C),E.isScene===!0&&E.onAfterRender(C,E,F),he.resetDefaultState(),B=-1,G=null,x.pop(),x.length>0?(w=x[x.length-1],S.setTextureUnits(w.state.textureUnits),pt===!0&&Ae.setGlobalState(C.clippingPlanes,w.state.camera)):w=null,R.pop(),R.length>0?A=R[R.length-1]:A=null,U!==null&&U.renderEnd()};function Gc(E,F,W,V){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLightProbeGrid)w.pushLightProbeGrid(E);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Oe.intersectsSprite(E)){V&&ue.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ee);const be=de.update(E),xe=E.material;xe.visible&&A.push(E,be,xe,W,ue.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Oe.intersectsObject(E))){const be=de.update(E),xe=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ue.copy(E.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),ue.copy(be.boundingSphere.center)),ue.applyMatrix4(E.matrixWorld).applyMatrix4(Ee)),Array.isArray(xe)){const Pe=be.groups;for(let Ne=0,je=Pe.length;Ne<je;Ne++){const Ke=Pe[Ne],Ie=xe[Ke.materialIndex];Ie&&Ie.visible&&A.push(E,be,Ie,W,ue.z,Ke)}}else xe.visible&&A.push(E,be,xe,W,ue.z,null)}}const ye=E.children;for(let be=0,xe=ye.length;be<xe;be++)Gc(ye[be],F,W,V)}function wp(E,F,W,V){const{opaque:H,transmissive:ye,transparent:be}=E;w.setupLightsView(W),pt===!0&&Ae.setGlobalState(C.clippingPlanes,W),V&&ve.viewport(O.copy(V)),H.length>0&&wa(H,F,W),ye.length>0&&wa(ye,F,W),be.length>0&&wa(be,F,W),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Tp(E,F,W,V){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[V.id]===void 0){const Ie=Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[V.id]=new yi(1,1,{generateMipmaps:!0,type:Ie?Gi:An,minFilter:Hr,samples:Math.max(4,ct.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace})}const ye=w.state.transmissionRenderTarget[V.id],be=V.viewport||O;ye.setSize(be.z*C.transmissionResolutionScale,be.w*C.transmissionResolutionScale);const xe=C.getRenderTarget(),Pe=C.getActiveCubeFace(),Ne=C.getActiveMipmapLevel();C.setRenderTarget(ye),C.getClearColor(ie),le=C.getClearAlpha(),le<1&&C.setClearColor(16777215,.5),C.clear(),Se&&fe.render(W);const je=C.toneMapping;C.toneMapping=xi;const Ke=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),w.setupLightsView(V),pt===!0&&Ae.setGlobalState(C.clippingPlanes,V),wa(E,W,V),S.updateMultisampleRenderTarget(ye),S.updateRenderTargetMipmap(ye),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let dt=0,Ct=F.length;dt<Ct;dt++){const Tt=F[dt],{object:ft,geometry:Yt,material:Te,group:Sn}=Tt;if(Te.side===pi&&ft.layers.test(V.layers)){const it=Te.side;Te.side=_n,Te.needsUpdate=!0,Ap(ft,W,V,Yt,Te,Sn),Te.side=it,Te.needsUpdate=!0,Ie=!0}}Ie===!0&&(S.updateMultisampleRenderTarget(ye),S.updateRenderTargetMipmap(ye))}C.setRenderTarget(xe,Pe,Ne),C.setClearColor(ie,le),Ke!==void 0&&(V.viewport=Ke),C.toneMapping=je}function wa(E,F,W){const V=F.isScene===!0?F.overrideMaterial:null;for(let H=0,ye=E.length;H<ye;H++){const be=E[H],{object:xe,geometry:Pe,group:Ne}=be;let je=be.material;je.allowOverride===!0&&V!==null&&(je=V),xe.layers.test(W.layers)&&Ap(xe,F,W,Pe,je,Ne)}}function Ap(E,F,W,V,H,ye){E.onBeforeRender(C,F,W,V,H,ye),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),H.onBeforeRender(C,F,W,V,E,ye),H.transparent===!0&&H.side===pi&&H.forceSinglePass===!1?(H.side=_n,H.needsUpdate=!0,C.renderBufferDirect(W,F,V,H,E,ye),H.side=Mr,H.needsUpdate=!0,C.renderBufferDirect(W,F,V,H,E,ye),H.side=pi):C.renderBufferDirect(W,F,V,H,E,ye),E.onAfterRender(C,F,W,V,H,ye)}function Ta(E,F,W){F.isScene!==!0&&(F=Ve);const V=T.get(E),H=w.state.lights,ye=w.state.shadowsArray,be=H.state.version,xe=ge.getParameters(E,H.state,ye,F,W,w.state.lightProbeGridArray),Pe=ge.getProgramCacheKey(xe);let Ne=V.programs;V.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?F.environment:null,V.fog=F.fog;const je=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;V.envMap=k.get(E.envMap||V.environment,je),V.envMapRotation=V.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Ne===void 0&&(E.addEventListener("dispose",Rt),Ne=new Map,V.programs=Ne);let Ke=Ne.get(Pe);if(Ke!==void 0){if(V.currentProgram===Ke&&V.lightsStateVersion===be)return Rp(E,xe),Ke}else xe.uniforms=ge.getUniforms(E),U!==null&&E.isNodeMaterial&&U.build(E,W,xe),E.onBeforeCompile(xe,C),Ke=ge.acquireProgram(xe,Pe),Ne.set(Pe,Ke),V.uniforms=xe.uniforms;const Ie=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ie.clippingPlanes=Ae.uniform),Rp(E,xe),V.needsLights=Yx(E),V.lightsStateVersion=be,V.needsLights&&(Ie.ambientLightColor.value=H.state.ambient,Ie.lightProbe.value=H.state.probe,Ie.directionalLights.value=H.state.directional,Ie.directionalLightShadows.value=H.state.directionalShadow,Ie.spotLights.value=H.state.spot,Ie.spotLightShadows.value=H.state.spotShadow,Ie.rectAreaLights.value=H.state.rectArea,Ie.ltc_1.value=H.state.rectAreaLTC1,Ie.ltc_2.value=H.state.rectAreaLTC2,Ie.pointLights.value=H.state.point,Ie.pointLightShadows.value=H.state.pointShadow,Ie.hemisphereLights.value=H.state.hemi,Ie.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ie.spotLightMatrix.value=H.state.spotLightMatrix,Ie.spotLightMap.value=H.state.spotLightMap,Ie.pointShadowMatrix.value=H.state.pointShadowMatrix),V.lightProbeGrid=w.state.lightProbeGridArray.length>0,V.currentProgram=Ke,V.uniformsList=null,Ke}function bp(E){if(E.uniformsList===null){const F=E.currentProgram.getUniforms();E.uniformsList=Nl.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function Rp(E,F){const W=T.get(E);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function Xx(E,F){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;M.setFromMatrixPosition(F.matrixWorld);for(let W=0,V=E.length;W<V;W++){const H=E[W];if(H.texture!==null&&H.boundingBox.containsPoint(M))return H}return null}function qx(E,F,W,V,H){F.isScene!==!0&&(F=Ve),S.resetTextureUnits();const ye=F.fog,be=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?F.environment:null,xe=I===null?C.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:et.workingColorSpace,Pe=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Ne=k.get(V.envMap||be,Pe),je=V.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ke=!!W.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ie=!!W.morphAttributes.position,dt=!!W.morphAttributes.normal,Ct=!!W.morphAttributes.color;let Tt=xi;V.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Tt=C.toneMapping);const ft=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Yt=ft!==void 0?ft.length:0,Te=T.get(V),Sn=w.state.lights;if(pt===!0&&($e===!0||E!==G)){const gt=E===G&&V.id===B;Ae.setState(V,E,gt)}let it=!1;V.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==Sn.state.version||Te.outputColorSpace!==xe||H.isBatchedMesh&&Te.batching===!1||!H.isBatchedMesh&&Te.batching===!0||H.isBatchedMesh&&Te.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Te.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Te.instancing===!1||!H.isInstancedMesh&&Te.instancing===!0||H.isSkinnedMesh&&Te.skinning===!1||!H.isSkinnedMesh&&Te.skinning===!0||H.isInstancedMesh&&Te.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Te.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Te.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Te.instancingMorph===!1&&H.morphTexture!==null||Te.envMap!==Ne||V.fog===!0&&Te.fog!==ye||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==Ae.numPlanes||Te.numIntersection!==Ae.numIntersection)||Te.vertexAlphas!==je||Te.vertexTangents!==Ke||Te.morphTargets!==Ie||Te.morphNormals!==dt||Te.morphColors!==Ct||Te.toneMapping!==Tt||Te.morphTargetsCount!==Yt||!!Te.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(it=!0):(it=!0,Te.__version=V.version);let In=Te.currentProgram;it===!0&&(In=Ta(V,F,H),U&&V.isNodeMaterial&&U.onUpdateProgram(V,In,Te));let ai=!1,Xi=!1,ss=!1;const ht=In.getUniforms(),Pt=Te.uniforms;if(ve.useProgram(In.program)&&(ai=!0,Xi=!0,ss=!0),V.id!==B&&(B=V.id,Xi=!0),Te.needsLights){const gt=Xx(w.state.lightProbeGridArray,H);Te.lightProbeGrid!==gt&&(Te.lightProbeGrid=gt,Xi=!0)}if(ai||G!==E){ve.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ht.setValue(D,"projectionMatrix",E.projectionMatrix),ht.setValue(D,"viewMatrix",E.matrixWorldInverse);const $i=ht.map.cameraPosition;$i!==void 0&&$i.setValue(D,Ce.setFromMatrixPosition(E.matrixWorld)),ct.logarithmicDepthBuffer&&ht.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ht.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),G!==E&&(G=E,Xi=!0,ss=!0)}if(Te.needsLights&&(Sn.state.directionalShadowMap.length>0&&ht.setValue(D,"directionalShadowMap",Sn.state.directionalShadowMap,S),Sn.state.spotShadowMap.length>0&&ht.setValue(D,"spotShadowMap",Sn.state.spotShadowMap,S),Sn.state.pointShadowMap.length>0&&ht.setValue(D,"pointShadowMap",Sn.state.pointShadowMap,S)),H.isSkinnedMesh){ht.setOptional(D,H,"bindMatrix"),ht.setOptional(D,H,"bindMatrixInverse");const gt=H.skeleton;gt&&(gt.boneTexture===null&&gt.computeBoneTexture(),ht.setValue(D,"boneTexture",gt.boneTexture,S))}H.isBatchedMesh&&(ht.setOptional(D,H,"batchingTexture"),ht.setValue(D,"batchingTexture",H._matricesTexture,S),ht.setOptional(D,H,"batchingIdTexture"),ht.setValue(D,"batchingIdTexture",H._indirectTexture,S),ht.setOptional(D,H,"batchingColorTexture"),H._colorsTexture!==null&&ht.setValue(D,"batchingColorTexture",H._colorsTexture,S));const qi=W.morphAttributes;if((qi.position!==void 0||qi.normal!==void 0||qi.color!==void 0)&&He.update(H,W,In),(Xi||Te.receiveShadow!==H.receiveShadow)&&(Te.receiveShadow=H.receiveShadow,ht.setValue(D,"receiveShadow",H.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&F.environment!==null&&(Pt.envMapIntensity.value=F.environmentIntensity),Pt.dfgLUT!==void 0&&(Pt.dfgLUT.value=yC()),Xi){if(ht.setValue(D,"toneMappingExposure",C.toneMappingExposure),Te.needsLights&&$x(Pt,ss),ye&&V.fog===!0&&K.refreshFogUniforms(Pt,ye),K.refreshMaterialUniforms(Pt,V,ce,Ue,w.state.transmissionRenderTarget[E.id]),Te.needsLights&&Te.lightProbeGrid){const gt=Te.lightProbeGrid;Pt.probesSH.value=gt.texture,Pt.probesMin.value.copy(gt.boundingBox.min),Pt.probesMax.value.copy(gt.boundingBox.max),Pt.probesResolution.value.copy(gt.resolution)}Nl.upload(D,bp(Te),Pt,S)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Nl.upload(D,bp(Te),Pt,S),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ht.setValue(D,"center",H.center),ht.setValue(D,"modelViewMatrix",H.modelViewMatrix),ht.setValue(D,"normalMatrix",H.normalMatrix),ht.setValue(D,"modelMatrix",H.matrixWorld),V.uniformsGroups!==void 0){const gt=V.uniformsGroups;for(let $i=0,os=gt.length;$i<os;$i++){const Cp=gt[$i];J.update(Cp,In),J.bind(Cp,In)}}return In}function $x(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function Yx(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(E,F,W){const V=T.get(E);V.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),T.get(E.texture).__webglTexture=F,T.get(E.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:W,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,F){const W=T.get(E);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0};const Kx=D.createFramebuffer();this.setRenderTarget=function(E,F=0,W=0){I=E,$=F,q=W;let V=null,H=!1,ye=!1;if(E){const xe=T.get(E);if(xe.__useDefaultFramebuffer!==void 0){ve.bindFramebuffer(D.FRAMEBUFFER,xe.__webglFramebuffer),O.copy(E.viewport),X.copy(E.scissor),Z=E.scissorTest,ve.viewport(O),ve.scissor(X),ve.setScissorTest(Z),B=-1;return}else if(xe.__webglFramebuffer===void 0)S.setupRenderTarget(E);else if(xe.__hasExternalTextures)S.rebindTextures(E,T.get(E.texture).__webglTexture,T.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const je=E.depthTexture;if(xe.__boundDepthTexture!==je){if(je!==null&&T.has(je)&&(E.width!==je.image.width||E.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(E)}}const Pe=E.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(ye=!0);const Ne=T.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ne[F])?V=Ne[F][W]:V=Ne[F],H=!0):E.samples>0&&S.useMultisampledRTT(E)===!1?V=T.get(E).__webglMultisampledFramebuffer:Array.isArray(Ne)?V=Ne[W]:V=Ne,O.copy(E.viewport),X.copy(E.scissor),Z=E.scissorTest}else O.copy(re).multiplyScalar(ce).floor(),X.copy(De).multiplyScalar(ce).floor(),Z=ze;if(W!==0&&(V=Kx),ve.bindFramebuffer(D.FRAMEBUFFER,V)&&ve.drawBuffers(E,V),ve.viewport(O),ve.scissor(X),ve.setScissorTest(Z),H){const xe=T.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,xe.__webglTexture,W)}else if(ye){const xe=F;for(let Pe=0;Pe<E.textures.length;Pe++){const Ne=T.get(E.textures[Pe]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Pe,Ne.__webglTexture,W,xe)}}else if(E!==null&&W!==0){const xe=T.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,xe.__webglTexture,W)}B=-1},this.readRenderTargetPixels=function(E,F,W,V,H,ye,be,xe=0){if(!(E&&E.isWebGLRenderTarget)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=T.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&be!==void 0&&(Pe=Pe[be]),Pe){ve.bindFramebuffer(D.FRAMEBUFFER,Pe);try{const Ne=E.textures[xe],je=Ne.format,Ke=Ne.type;if(E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+xe),!ct.textureFormatReadable(je)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(Ke)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-V&&W>=0&&W<=E.height-H&&D.readPixels(F,W,V,H,N.convert(je),N.convert(Ke),ye)}finally{const Ne=I!==null?T.get(I).__webglFramebuffer:null;ve.bindFramebuffer(D.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(E,F,W,V,H,ye,be,xe=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=T.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&be!==void 0&&(Pe=Pe[be]),Pe)if(F>=0&&F<=E.width-V&&W>=0&&W<=E.height-H){ve.bindFramebuffer(D.FRAMEBUFFER,Pe);const Ne=E.textures[xe],je=Ne.format,Ke=Ne.type;if(E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+xe),!ct.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ie=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ie),D.bufferData(D.PIXEL_PACK_BUFFER,ye.byteLength,D.STREAM_READ),D.readPixels(F,W,V,H,N.convert(je),N.convert(Ke),0);const dt=I!==null?T.get(I).__webglFramebuffer:null;ve.bindFramebuffer(D.FRAMEBUFFER,dt);const Ct=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await O1(D,Ct,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ie),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ye),D.deleteBuffer(Ie),D.deleteSync(Ct),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,F=null,W=0){const V=Math.pow(2,-W),H=Math.floor(E.image.width*V),ye=Math.floor(E.image.height*V),be=F!==null?F.x:0,xe=F!==null?F.y:0;S.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,be,xe,H,ye),ve.unbindTexture()};const Zx=D.createFramebuffer(),Jx=D.createFramebuffer();this.copyTextureToTexture=function(E,F,W=null,V=null,H=0,ye=0){let be,xe,Pe,Ne,je,Ke,Ie,dt,Ct;const Tt=E.isCompressedTexture?E.mipmaps[ye]:E.image;if(W!==null)be=W.max.x-W.min.x,xe=W.max.y-W.min.y,Pe=W.isBox3?W.max.z-W.min.z:1,Ne=W.min.x,je=W.min.y,Ke=W.isBox3?W.min.z:0;else{const Pt=Math.pow(2,-H);be=Math.floor(Tt.width*Pt),xe=Math.floor(Tt.height*Pt),E.isDataArrayTexture?Pe=Tt.depth:E.isData3DTexture?Pe=Math.floor(Tt.depth*Pt):Pe=1,Ne=0,je=0,Ke=0}V!==null?(Ie=V.x,dt=V.y,Ct=V.z):(Ie=0,dt=0,Ct=0);const ft=N.convert(F.format),Yt=N.convert(F.type);let Te;F.isData3DTexture?(S.setTexture3D(F,0),Te=D.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(S.setTexture2DArray(F,0),Te=D.TEXTURE_2D_ARRAY):(S.setTexture2D(F,0),Te=D.TEXTURE_2D),ve.activeTexture(D.TEXTURE0),ve.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),ve.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),ve.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const Sn=ve.getParameter(D.UNPACK_ROW_LENGTH),it=ve.getParameter(D.UNPACK_IMAGE_HEIGHT),In=ve.getParameter(D.UNPACK_SKIP_PIXELS),ai=ve.getParameter(D.UNPACK_SKIP_ROWS),Xi=ve.getParameter(D.UNPACK_SKIP_IMAGES);ve.pixelStorei(D.UNPACK_ROW_LENGTH,Tt.width),ve.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Tt.height),ve.pixelStorei(D.UNPACK_SKIP_PIXELS,Ne),ve.pixelStorei(D.UNPACK_SKIP_ROWS,je),ve.pixelStorei(D.UNPACK_SKIP_IMAGES,Ke);const ss=E.isDataArrayTexture||E.isData3DTexture,ht=F.isDataArrayTexture||F.isData3DTexture;if(E.isDepthTexture){const Pt=T.get(E),qi=T.get(F),gt=T.get(Pt.__renderTarget),$i=T.get(qi.__renderTarget);ve.bindFramebuffer(D.READ_FRAMEBUFFER,gt.__webglFramebuffer),ve.bindFramebuffer(D.DRAW_FRAMEBUFFER,$i.__webglFramebuffer);for(let os=0;os<Pe;os++)ss&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,T.get(E).__webglTexture,H,Ke+os),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,T.get(F).__webglTexture,ye,Ct+os)),D.blitFramebuffer(Ne,je,be,xe,Ie,dt,be,xe,D.DEPTH_BUFFER_BIT,D.NEAREST);ve.bindFramebuffer(D.READ_FRAMEBUFFER,null),ve.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(H!==0||E.isRenderTargetTexture||T.has(E)){const Pt=T.get(E),qi=T.get(F);ve.bindFramebuffer(D.READ_FRAMEBUFFER,Zx),ve.bindFramebuffer(D.DRAW_FRAMEBUFFER,Jx);for(let gt=0;gt<Pe;gt++)ss?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Pt.__webglTexture,H,Ke+gt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Pt.__webglTexture,H),ht?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,qi.__webglTexture,ye,Ct+gt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,qi.__webglTexture,ye),H!==0?D.blitFramebuffer(Ne,je,be,xe,Ie,dt,be,xe,D.COLOR_BUFFER_BIT,D.NEAREST):ht?D.copyTexSubImage3D(Te,ye,Ie,dt,Ct+gt,Ne,je,be,xe):D.copyTexSubImage2D(Te,ye,Ie,dt,Ne,je,be,xe);ve.bindFramebuffer(D.READ_FRAMEBUFFER,null),ve.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ht?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(Te,ye,Ie,dt,Ct,be,xe,Pe,ft,Yt,Tt.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(Te,ye,Ie,dt,Ct,be,xe,Pe,ft,Tt.data):D.texSubImage3D(Te,ye,Ie,dt,Ct,be,xe,Pe,ft,Yt,Tt):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ye,Ie,dt,be,xe,ft,Yt,Tt.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ye,Ie,dt,Tt.width,Tt.height,ft,Tt.data):D.texSubImage2D(D.TEXTURE_2D,ye,Ie,dt,be,xe,ft,Yt,Tt);ve.pixelStorei(D.UNPACK_ROW_LENGTH,Sn),ve.pixelStorei(D.UNPACK_IMAGE_HEIGHT,it),ve.pixelStorei(D.UNPACK_SKIP_PIXELS,In),ve.pixelStorei(D.UNPACK_SKIP_ROWS,ai),ve.pixelStorei(D.UNPACK_SKIP_IMAGES,Xi),ye===0&&F.generateMipmaps&&D.generateMipmap(Te),ve.unbindTexture()},this.initRenderTarget=function(E){T.get(E).__webglFramebuffer===void 0&&S.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?S.setTextureCube(E,0):E.isData3DTexture?S.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?S.setTexture2DArray(E,0):S.setTexture2D(E,0),ve.unbindTexture()},this.resetState=function(){$=0,q=0,I=null,ve.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),n.unpackColorSpace=et._getUnpackColorSpace()}}function Mx(){const[t,e]=te.useState(localStorage.getItem("theme")||"dark");te.useEffect(()=>{document.documentElement.setAttribute("data-theme",t),localStorage.setItem("theme",t)},[t]);const n=i=>{if(!document.startViewTransition){e(l=>l==="light"?"dark":"light");return}const r=(i==null?void 0:i.clientX)||window.innerWidth/2,s=(i==null?void 0:i.clientY)||window.innerHeight/2,o=Math.hypot(Math.max(r,window.innerWidth-r),Math.max(s,window.innerHeight-s));document.documentElement.classList.add("theme-transition");const a=document.startViewTransition(()=>{e(l=>l==="light"?"dark":"light")});a.ready.then(()=>{const l=[`circle(0px at ${r}px ${s}px)`,`circle(${o}px at ${r}px ${s}px)`];document.documentElement.animate({clipPath:l},{duration:500,easing:"cubic-bezier(0.4, 0, 0.2, 1)",pseudoElement:"::view-transition-new(root)"})}),a.finished.then(()=>{document.documentElement.classList.remove("theme-transition")})};return L.jsx("button",{onClick:i=>n(i),className:"btn-icon theme-toggle",title:`Switch to ${t==="light"?"dark":"light"} mode`,style:{position:"relative",zIndex:10002},children:t==="light"?L.jsx(ZE,{size:18}):L.jsx(t1,{size:18})})}function Ex(t,e){return function(){return t.apply(e,arguments)}}const{toString:MC}=Object.prototype,{getPrototypeOf:fp}=Object,{iterator:Oc,toStringTag:wx}=Symbol,Bc=(t=>e=>{const n=MC.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),si=t=>(t=t.toLowerCase(),e=>Bc(e)===t),kc=t=>e=>typeof e===t,{isArray:ao}=Array,Qs=kc("undefined");function xa(t){return t!==null&&!Qs(t)&&t.constructor!==null&&!Qs(t.constructor)&&xn(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Tx=si("ArrayBuffer");function EC(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Tx(t.buffer),e}const wC=kc("string"),xn=kc("function"),Ax=kc("number"),ya=t=>t!==null&&typeof t=="object",TC=t=>t===!0||t===!1,Dl=t=>{if(Bc(t)!=="object")return!1;const e=fp(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(wx in t)&&!(Oc in t)},AC=t=>{if(!ya(t)||xa(t))return!1;try{return Object.keys(t).length===0&&Object.getPrototypeOf(t)===Object.prototype}catch{return!1}},bC=si("Date"),RC=si("File"),CC=t=>!!(t&&typeof t.uri<"u"),PC=t=>t&&typeof t.getParts<"u",LC=si("Blob"),NC=si("FileList"),DC=t=>ya(t)&&xn(t.pipe);function IC(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const Jg=IC(),Qg=typeof Jg.FormData<"u"?Jg.FormData:void 0,UC=t=>{let e;return t&&(Qg&&t instanceof Qg||xn(t.append)&&((e=Bc(t))==="formdata"||e==="object"&&xn(t.toString)&&t.toString()==="[object FormData]"))},FC=si("URLSearchParams"),[OC,BC,kC,zC]=["ReadableStream","Request","Response","Headers"].map(si),VC=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Sa(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let i,r;if(typeof t!="object"&&(t=[t]),ao(t))for(i=0,r=t.length;i<r;i++)e.call(null,t[i],i,t);else{if(xa(t))return;const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let a;for(i=0;i<o;i++)a=s[i],e.call(null,t[a],a,t)}}function bx(t,e){if(xa(t))return null;e=e.toLowerCase();const n=Object.keys(t);let i=n.length,r;for(;i-- >0;)if(r=n[i],e===r.toLowerCase())return r;return null}const Wr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Rx=t=>!Qs(t)&&t!==Wr;function jf(){const{caseless:t,skipUndefined:e}=Rx(this)&&this||{},n={},i=(r,s)=>{if(s==="__proto__"||s==="constructor"||s==="prototype")return;const o=t&&bx(n,s)||s;Dl(n[o])&&Dl(r)?n[o]=jf(n[o],r):Dl(r)?n[o]=jf({},r):ao(r)?n[o]=r.slice():(!e||!Qs(r))&&(n[o]=r)};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&Sa(arguments[r],i);return n}const HC=(t,e,n,{allOwnKeys:i}={})=>(Sa(e,(r,s)=>{n&&xn(r)?Object.defineProperty(t,s,{value:Ex(r,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(t,s,{value:r,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:i}),t),GC=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),WC=(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),Object.defineProperty(t.prototype,"constructor",{value:t,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},jC=(t,e,n,i)=>{let r,s,o;const a={};if(e=e||{},t==null)return e;do{for(r=Object.getOwnPropertyNames(t),s=r.length;s-- >0;)o=r[s],(!i||i(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&fp(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},XC=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return i!==-1&&i===n},qC=t=>{if(!t)return null;if(ao(t))return t;let e=t.length;if(!Ax(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},$C=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&fp(Uint8Array)),YC=(t,e)=>{const i=(t&&t[Oc]).call(t);let r;for(;(r=i.next())&&!r.done;){const s=r.value;e.call(t,s[0],s[1])}},KC=(t,e)=>{let n;const i=[];for(;(n=t.exec(e))!==null;)i.push(n);return i},ZC=si("HTMLFormElement"),JC=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,r){return i.toUpperCase()+r}),e0=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),QC=si("RegExp"),Cx=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};Sa(n,(r,s)=>{let o;(o=e(r,s,t))!==!1&&(i[s]=o||r)}),Object.defineProperties(t,i)},eP=t=>{Cx(t,(e,n)=>{if(xn(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const i=t[n];if(xn(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},tP=(t,e)=>{const n={},i=r=>{r.forEach(s=>{n[s]=!0})};return ao(t)?i(t):i(String(t).split(e)),n},nP=()=>{},iP=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function rP(t){return!!(t&&xn(t.append)&&t[wx]==="FormData"&&t[Oc])}const sP=t=>{const e=new Array(10),n=(i,r)=>{if(ya(i)){if(e.indexOf(i)>=0)return;if(xa(i))return i;if(!("toJSON"in i)){e[r]=i;const s=ao(i)?[]:{};return Sa(i,(o,a)=>{const l=n(o,r+1);!Qs(l)&&(s[a]=l)}),e[r]=void 0,s}}return i};return n(t,0)},oP=si("AsyncFunction"),aP=t=>t&&(ya(t)||xn(t))&&xn(t.then)&&xn(t.catch),Px=((t,e)=>t?setImmediate:e?((n,i)=>(Wr.addEventListener("message",({source:r,data:s})=>{r===Wr&&s===n&&i.length&&i.shift()()},!1),r=>{i.push(r),Wr.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",xn(Wr.postMessage)),lP=typeof queueMicrotask<"u"?queueMicrotask.bind(Wr):typeof process<"u"&&process.nextTick||Px,cP=t=>t!=null&&xn(t[Oc]),j={isArray:ao,isArrayBuffer:Tx,isBuffer:xa,isFormData:UC,isArrayBufferView:EC,isString:wC,isNumber:Ax,isBoolean:TC,isObject:ya,isPlainObject:Dl,isEmptyObject:AC,isReadableStream:OC,isRequest:BC,isResponse:kC,isHeaders:zC,isUndefined:Qs,isDate:bC,isFile:RC,isReactNativeBlob:CC,isReactNative:PC,isBlob:LC,isRegExp:QC,isFunction:xn,isStream:DC,isURLSearchParams:FC,isTypedArray:$C,isFileList:NC,forEach:Sa,merge:jf,extend:HC,trim:VC,stripBOM:GC,inherits:WC,toFlatObject:jC,kindOf:Bc,kindOfTest:si,endsWith:XC,toArray:qC,forEachEntry:YC,matchAll:KC,isHTMLForm:ZC,hasOwnProperty:e0,hasOwnProp:e0,reduceDescriptors:Cx,freezeMethods:eP,toObjectSet:tP,toCamelCase:JC,noop:nP,toFiniteNumber:iP,findKey:bx,global:Wr,isContextDefined:Rx,isSpecCompliantForm:rP,toJSONObject:sP,isAsyncFn:oP,isThenable:aP,setImmediate:Px,asap:lP,isIterable:cP};let Be=class Lx extends Error{static from(e,n,i,r,s,o){const a=new Lx(e.message,n||e.code,i,r,s);return a.cause=e,a.name=e.name,e.status!=null&&a.status==null&&(a.status=e.status),o&&Object.assign(a,o),a}constructor(e,n,i,r,s){super(e),Object.defineProperty(this,"message",{value:e,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),i&&(this.config=i),r&&(this.request=r),s&&(this.response=s,this.status=s.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:j.toJSONObject(this.config),code:this.code,status:this.status}}};Be.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";Be.ERR_BAD_OPTION="ERR_BAD_OPTION";Be.ECONNABORTED="ECONNABORTED";Be.ETIMEDOUT="ETIMEDOUT";Be.ERR_NETWORK="ERR_NETWORK";Be.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";Be.ERR_DEPRECATED="ERR_DEPRECATED";Be.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";Be.ERR_BAD_REQUEST="ERR_BAD_REQUEST";Be.ERR_CANCELED="ERR_CANCELED";Be.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";Be.ERR_INVALID_URL="ERR_INVALID_URL";const uP=null;function Xf(t){return j.isPlainObject(t)||j.isArray(t)}function Nx(t){return j.endsWith(t,"[]")?t.slice(0,-2):t}function Ju(t,e,n){return t?t.concat(e).map(function(r,s){return r=Nx(r),!n&&s?"["+r+"]":r}).join(n?".":""):e}function dP(t){return j.isArray(t)&&!t.some(Xf)}const fP=j.toFlatObject(j,{},null,function(e){return/^is[A-Z]/.test(e)});function zc(t,e,n){if(!j.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=j.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,m){return!j.isUndefined(m[y])});const i=n.metaTokens,r=n.visitor||u,s=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&j.isSpecCompliantForm(e);if(!j.isFunction(r))throw new TypeError("visitor must be a function");function c(v){if(v===null)return"";if(j.isDate(v))return v.toISOString();if(j.isBoolean(v))return v.toString();if(!l&&j.isBlob(v))throw new Be("Blob is not supported. Use a Buffer instead.");return j.isArrayBuffer(v)||j.isTypedArray(v)?l&&typeof Blob=="function"?new Blob([v]):Buffer.from(v):v}function u(v,y,m){let f=v;if(j.isReactNative(e)&&j.isReactNativeBlob(v))return e.append(Ju(m,y,s),c(v)),!1;if(v&&!m&&typeof v=="object"){if(j.endsWith(y,"{}"))y=i?y:y.slice(0,-2),v=JSON.stringify(v);else if(j.isArray(v)&&dP(v)||(j.isFileList(v)||j.endsWith(y,"[]"))&&(f=j.toArray(v)))return y=Nx(y),f.forEach(function(_,M){!(j.isUndefined(_)||_===null)&&e.append(o===!0?Ju([y],M,s):o===null?y:y+"[]",c(_))}),!1}return Xf(v)?!0:(e.append(Ju(m,y,s),c(v)),!1)}const h=[],d=Object.assign(fP,{defaultVisitor:u,convertValue:c,isVisitable:Xf});function g(v,y){if(!j.isUndefined(v)){if(h.indexOf(v)!==-1)throw Error("Circular reference detected in "+y.join("."));h.push(v),j.forEach(v,function(f,p){(!(j.isUndefined(f)||f===null)&&r.call(e,f,j.isString(p)?p.trim():p,y,d))===!0&&g(f,y?y.concat(p):[p])}),h.pop()}}if(!j.isObject(t))throw new TypeError("data must be an object");return g(t),e}function t0(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(i){return e[i]})}function hp(t,e){this._pairs=[],t&&zc(t,this,e)}const Dx=hp.prototype;Dx.append=function(e,n){this._pairs.push([e,n])};Dx.toString=function(e){const n=e?function(i){return e.call(this,i,t0)}:t0;return this._pairs.map(function(r){return n(r[0])+"="+n(r[1])},"").join("&")};function hP(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Ix(t,e,n){if(!e)return t;const i=n&&n.encode||hP,r=j.isFunction(n)?{serialize:n}:n,s=r&&r.serialize;let o;if(s?o=s(e,r):o=j.isURLSearchParams(e)?e.toString():new hp(e,r).toString(i),o){const a=t.indexOf("#");a!==-1&&(t=t.slice(0,a)),t+=(t.indexOf("?")===-1?"?":"&")+o}return t}class n0{constructor(){this.handlers=[]}use(e,n,i){return this.handlers.push({fulfilled:e,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){j.forEach(this.handlers,function(i){i!==null&&e(i)})}}const pp={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},pP=typeof URLSearchParams<"u"?URLSearchParams:hp,mP=typeof FormData<"u"?FormData:null,gP=typeof Blob<"u"?Blob:null,vP={isBrowser:!0,classes:{URLSearchParams:pP,FormData:mP,Blob:gP},protocols:["http","https","file","blob","url","data"]},mp=typeof window<"u"&&typeof document<"u",qf=typeof navigator=="object"&&navigator||void 0,_P=mp&&(!qf||["ReactNative","NativeScript","NS"].indexOf(qf.product)<0),xP=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",yP=mp&&window.location.href||"http://localhost",SP=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:mp,hasStandardBrowserEnv:_P,hasStandardBrowserWebWorkerEnv:xP,navigator:qf,origin:yP},Symbol.toStringTag,{value:"Module"})),tn={...SP,...vP};function MP(t,e){return zc(t,new tn.classes.URLSearchParams,{visitor:function(n,i,r,s){return tn.isNode&&j.isBuffer(n)?(this.append(i,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)},...e})}function EP(t){return j.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function wP(t){const e={},n=Object.keys(t);let i;const r=n.length;let s;for(i=0;i<r;i++)s=n[i],e[s]=t[s];return e}function Ux(t){function e(n,i,r,s){let o=n[s++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=s>=n.length;return o=!o&&j.isArray(r)?r.length:o,l?(j.hasOwnProp(r,o)?r[o]=[r[o],i]:r[o]=i,!a):((!r[o]||!j.isObject(r[o]))&&(r[o]=[]),e(n,i,r[o],s)&&j.isArray(r[o])&&(r[o]=wP(r[o])),!a)}if(j.isFormData(t)&&j.isFunction(t.entries)){const n={};return j.forEachEntry(t,(i,r)=>{e(EP(i),r,n,0)}),n}return null}function TP(t,e,n){if(j.isString(t))try{return(e||JSON.parse)(t),j.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(t)}const Ma={transitional:pp,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const i=n.getContentType()||"",r=i.indexOf("application/json")>-1,s=j.isObject(e);if(s&&j.isHTMLForm(e)&&(e=new FormData(e)),j.isFormData(e))return r?JSON.stringify(Ux(e)):e;if(j.isArrayBuffer(e)||j.isBuffer(e)||j.isStream(e)||j.isFile(e)||j.isBlob(e)||j.isReadableStream(e))return e;if(j.isArrayBufferView(e))return e.buffer;if(j.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){if(i.indexOf("application/x-www-form-urlencoded")>-1)return MP(e,this.formSerializer).toString();if((a=j.isFileList(e))||i.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return zc(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return s||r?(n.setContentType("application/json",!1),TP(e)):e}],transformResponse:[function(e){const n=this.transitional||Ma.transitional,i=n&&n.forcedJSONParsing,r=this.responseType==="json";if(j.isResponse(e)||j.isReadableStream(e))return e;if(e&&j.isString(e)&&(i&&!this.responseType||r)){const o=!(n&&n.silentJSONParsing)&&r;try{return JSON.parse(e,this.parseReviver)}catch(a){if(o)throw a.name==="SyntaxError"?Be.from(a,Be.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:tn.classes.FormData,Blob:tn.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};j.forEach(["delete","get","head","post","put","patch"],t=>{Ma.headers[t]={}});const AP=j.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),bP=t=>{const e={};let n,i,r;return t&&t.split(`
`).forEach(function(o){r=o.indexOf(":"),n=o.substring(0,r).trim().toLowerCase(),i=o.substring(r+1).trim(),!(!n||e[n]&&AP[n])&&(n==="set-cookie"?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)}),e},i0=Symbol("internals");function wo(t){return t&&String(t).trim().toLowerCase()}function Il(t){return t===!1||t==null?t:j.isArray(t)?t.map(Il):String(t)}function RP(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}const CP=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Qu(t,e,n,i,r){if(j.isFunction(i))return i.call(this,e,n);if(r&&(e=n),!!j.isString(e)){if(j.isString(i))return e.indexOf(i)!==-1;if(j.isRegExp(i))return i.test(e)}}function PP(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,i)=>n.toUpperCase()+i)}function LP(t,e){const n=j.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{value:function(r,s,o){return this[i].call(this,e,r,s,o)},configurable:!0})})}let yn=class{constructor(e){e&&this.set(e)}set(e,n,i){const r=this;function s(a,l,c){const u=wo(l);if(!u)throw new Error("header name must be a non-empty string");const h=j.findKey(r,u);(!h||r[h]===void 0||c===!0||c===void 0&&r[h]!==!1)&&(r[h||l]=Il(a))}const o=(a,l)=>j.forEach(a,(c,u)=>s(c,u,l));if(j.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(j.isString(e)&&(e=e.trim())&&!CP(e))o(bP(e),n);else if(j.isObject(e)&&j.isIterable(e)){let a={},l,c;for(const u of e){if(!j.isArray(u))throw TypeError("Object iterator must return a key-value pair");a[c=u[0]]=(l=a[c])?j.isArray(l)?[...l,u[1]]:[l,u[1]]:u[1]}o(a,n)}else e!=null&&s(n,e,i);return this}get(e,n){if(e=wo(e),e){const i=j.findKey(this,e);if(i){const r=this[i];if(!n)return r;if(n===!0)return RP(r);if(j.isFunction(n))return n.call(this,r,i);if(j.isRegExp(n))return n.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=wo(e),e){const i=j.findKey(this,e);return!!(i&&this[i]!==void 0&&(!n||Qu(this,this[i],i,n)))}return!1}delete(e,n){const i=this;let r=!1;function s(o){if(o=wo(o),o){const a=j.findKey(i,o);a&&(!n||Qu(i,i[a],a,n))&&(delete i[a],r=!0)}}return j.isArray(e)?e.forEach(s):s(e),r}clear(e){const n=Object.keys(this);let i=n.length,r=!1;for(;i--;){const s=n[i];(!e||Qu(this,this[s],s,e,!0))&&(delete this[s],r=!0)}return r}normalize(e){const n=this,i={};return j.forEach(this,(r,s)=>{const o=j.findKey(i,s);if(o){n[o]=Il(r),delete n[s];return}const a=e?PP(s):String(s).trim();a!==s&&delete n[s],n[a]=Il(r),i[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return j.forEach(this,(i,r)=>{i!=null&&i!==!1&&(n[r]=e&&j.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const i=new this(e);return n.forEach(r=>i.set(r)),i}static accessor(e){const i=(this[i0]=this[i0]={accessors:{}}).accessors,r=this.prototype;function s(o){const a=wo(o);i[a]||(LP(r,o),i[a]=!0)}return j.isArray(e)?e.forEach(s):s(e),this}};yn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);j.reduceDescriptors(yn.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(i){this[n]=i}}});j.freezeMethods(yn);function ed(t,e){const n=this||Ma,i=e||n,r=yn.from(i.headers);let s=i.data;return j.forEach(t,function(a){s=a.call(n,s,r.normalize(),e?e.status:void 0)}),r.normalize(),s}function Fx(t){return!!(t&&t.__CANCEL__)}let Ea=class extends Be{constructor(e,n,i){super(e??"canceled",Be.ERR_CANCELED,n,i),this.name="CanceledError",this.__CANCEL__=!0}};function Ox(t,e,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):e(new Be("Request failed with status code "+n.status,[Be.ERR_BAD_REQUEST,Be.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function NP(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function DP(t,e){t=t||10;const n=new Array(t),i=new Array(t);let r=0,s=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),u=i[s];o||(o=c),n[r]=l,i[r]=c;let h=s,d=0;for(;h!==r;)d+=n[h++],h=h%t;if(r=(r+1)%t,r===s&&(s=(s+1)%t),c-o<e)return;const g=u&&c-u;return g?Math.round(d*1e3/g):void 0}}function IP(t,e){let n=0,i=1e3/e,r,s;const o=(c,u=Date.now())=>{n=u,r=null,s&&(clearTimeout(s),s=null),t(...c)};return[(...c)=>{const u=Date.now(),h=u-n;h>=i?o(c,u):(r=c,s||(s=setTimeout(()=>{s=null,o(r)},i-h)))},()=>r&&o(r)]}const hc=(t,e,n=3)=>{let i=0;const r=DP(50,250);return IP(s=>{const o=s.loaded,a=s.lengthComputable?s.total:void 0,l=o-i,c=r(l),u=o<=a;i=o;const h={loaded:o,total:a,progress:a?o/a:void 0,bytes:l,rate:c||void 0,estimated:c&&a&&u?(a-o)/c:void 0,event:s,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(h)},n)},r0=(t,e)=>{const n=t!=null;return[i=>e[0]({lengthComputable:n,total:t,loaded:i}),e[1]]},s0=t=>(...e)=>j.asap(()=>t(...e)),UP=tn.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,tn.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(tn.origin),tn.navigator&&/(msie|trident)/i.test(tn.navigator.userAgent)):()=>!0,FP=tn.hasStandardBrowserEnv?{write(t,e,n,i,r,s,o){if(typeof document>"u")return;const a=[`${t}=${encodeURIComponent(e)}`];j.isNumber(n)&&a.push(`expires=${new Date(n).toUTCString()}`),j.isString(i)&&a.push(`path=${i}`),j.isString(r)&&a.push(`domain=${r}`),s===!0&&a.push("secure"),j.isString(o)&&a.push(`SameSite=${o}`),document.cookie=a.join("; ")},read(t){if(typeof document>"u")return null;const e=document.cookie.match(new RegExp("(?:^|; )"+t+"=([^;]*)"));return e?decodeURIComponent(e[1]):null},remove(t){this.write(t,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function OP(t){return typeof t!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function BP(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function Bx(t,e,n){let i=!OP(e);return t&&(i||n==!1)?BP(t,e):e}const o0=t=>t instanceof yn?{...t}:t;function ts(t,e){e=e||{};const n={};function i(c,u,h,d){return j.isPlainObject(c)&&j.isPlainObject(u)?j.merge.call({caseless:d},c,u):j.isPlainObject(u)?j.merge({},u):j.isArray(u)?u.slice():u}function r(c,u,h,d){if(j.isUndefined(u)){if(!j.isUndefined(c))return i(void 0,c,h,d)}else return i(c,u,h,d)}function s(c,u){if(!j.isUndefined(u))return i(void 0,u)}function o(c,u){if(j.isUndefined(u)){if(!j.isUndefined(c))return i(void 0,c)}else return i(void 0,u)}function a(c,u,h){if(h in e)return i(c,u);if(h in t)return i(void 0,c)}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(c,u,h)=>r(o0(c),o0(u),h,!0)};return j.forEach(Object.keys({...t,...e}),function(u){if(u==="__proto__"||u==="constructor"||u==="prototype")return;const h=j.hasOwnProp(l,u)?l[u]:r,d=h(t[u],e[u],u);j.isUndefined(d)&&h!==a||(n[u]=d)}),n}const kx=t=>{const e=ts({},t);let{data:n,withXSRFToken:i,xsrfHeaderName:r,xsrfCookieName:s,headers:o,auth:a}=e;if(e.headers=o=yn.from(o),e.url=Ix(Bx(e.baseURL,e.url,e.allowAbsoluteUrls),t.params,t.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):""))),j.isFormData(n)){if(tn.hasStandardBrowserEnv||tn.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if(j.isFunction(n.getHeaders)){const l=n.getHeaders(),c=["content-type","content-length"];Object.entries(l).forEach(([u,h])=>{c.includes(u.toLowerCase())&&o.set(u,h)})}}if(tn.hasStandardBrowserEnv&&(i&&j.isFunction(i)&&(i=i(e)),i||i!==!1&&UP(e.url))){const l=r&&s&&FP.read(s);l&&o.set(r,l)}return e},kP=typeof XMLHttpRequest<"u",zP=kP&&function(t){return new Promise(function(n,i){const r=kx(t);let s=r.data;const o=yn.from(r.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:c}=r,u,h,d,g,v;function y(){g&&g(),v&&v(),r.cancelToken&&r.cancelToken.unsubscribe(u),r.signal&&r.signal.removeEventListener("abort",u)}let m=new XMLHttpRequest;m.open(r.method.toUpperCase(),r.url,!0),m.timeout=r.timeout;function f(){if(!m)return;const _=yn.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders()),A={data:!a||a==="text"||a==="json"?m.responseText:m.response,status:m.status,statusText:m.statusText,headers:_,config:t,request:m};Ox(function(R){n(R),y()},function(R){i(R),y()},A),m=null}"onloadend"in m?m.onloadend=f:m.onreadystatechange=function(){!m||m.readyState!==4||m.status===0&&!(m.responseURL&&m.responseURL.indexOf("file:")===0)||setTimeout(f)},m.onabort=function(){m&&(i(new Be("Request aborted",Be.ECONNABORTED,t,m)),m=null)},m.onerror=function(M){const A=M&&M.message?M.message:"Network Error",w=new Be(A,Be.ERR_NETWORK,t,m);w.event=M||null,i(w),m=null},m.ontimeout=function(){let M=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const A=r.transitional||pp;r.timeoutErrorMessage&&(M=r.timeoutErrorMessage),i(new Be(M,A.clarifyTimeoutError?Be.ETIMEDOUT:Be.ECONNABORTED,t,m)),m=null},s===void 0&&o.setContentType(null),"setRequestHeader"in m&&j.forEach(o.toJSON(),function(M,A){m.setRequestHeader(A,M)}),j.isUndefined(r.withCredentials)||(m.withCredentials=!!r.withCredentials),a&&a!=="json"&&(m.responseType=r.responseType),c&&([d,v]=hc(c,!0),m.addEventListener("progress",d)),l&&m.upload&&([h,g]=hc(l),m.upload.addEventListener("progress",h),m.upload.addEventListener("loadend",g)),(r.cancelToken||r.signal)&&(u=_=>{m&&(i(!_||_.type?new Ea(null,t,m):_),m.abort(),m=null)},r.cancelToken&&r.cancelToken.subscribe(u),r.signal&&(r.signal.aborted?u():r.signal.addEventListener("abort",u)));const p=NP(r.url);if(p&&tn.protocols.indexOf(p)===-1){i(new Be("Unsupported protocol "+p+":",Be.ERR_BAD_REQUEST,t));return}m.send(s||null)})},VP=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let i=new AbortController,r;const s=function(c){if(!r){r=!0,a();const u=c instanceof Error?c:this.reason;i.abort(u instanceof Be?u:new Ea(u instanceof Error?u.message:u))}};let o=e&&setTimeout(()=>{o=null,s(new Be(`timeout of ${e}ms exceeded`,Be.ETIMEDOUT))},e);const a=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(c=>{c.unsubscribe?c.unsubscribe(s):c.removeEventListener("abort",s)}),t=null)};t.forEach(c=>c.addEventListener("abort",s));const{signal:l}=i;return l.unsubscribe=()=>j.asap(a),l}},HP=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let i=0,r;for(;i<n;)r=i+e,yield t.slice(i,r),i=r},GP=async function*(t,e){for await(const n of WP(t))yield*HP(n,e)},WP=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:i}=await e.read();if(n)break;yield i}}finally{await e.cancel()}},a0=(t,e,n,i)=>{const r=GP(t,e);let s=0,o,a=l=>{o||(o=!0,i&&i(l))};return new ReadableStream({async pull(l){try{const{done:c,value:u}=await r.next();if(c){a(),l.close();return}let h=u.byteLength;if(n){let d=s+=h;n(d)}l.enqueue(new Uint8Array(u))}catch(c){throw a(c),c}},cancel(l){return a(l),r.return()}},{highWaterMark:2})},l0=64*1024,{isFunction:fl}=j,jP=(({Request:t,Response:e})=>({Request:t,Response:e}))(j.global),{ReadableStream:c0,TextEncoder:u0}=j.global,d0=(t,...e)=>{try{return!!t(...e)}catch{return!1}},XP=t=>{t=j.merge.call({skipUndefined:!0},jP,t);const{fetch:e,Request:n,Response:i}=t,r=e?fl(e):typeof fetch=="function",s=fl(n),o=fl(i);if(!r)return!1;const a=r&&fl(c0),l=r&&(typeof u0=="function"?(v=>y=>v.encode(y))(new u0):async v=>new Uint8Array(await new n(v).arrayBuffer())),c=s&&a&&d0(()=>{let v=!1;const y=new n(tn.origin,{body:new c0,method:"POST",get duplex(){return v=!0,"half"}}).headers.has("Content-Type");return v&&!y}),u=o&&a&&d0(()=>j.isReadableStream(new i("").body)),h={stream:u&&(v=>v.body)};r&&["text","arrayBuffer","blob","formData","stream"].forEach(v=>{!h[v]&&(h[v]=(y,m)=>{let f=y&&y[v];if(f)return f.call(y);throw new Be(`Response type '${v}' is not supported`,Be.ERR_NOT_SUPPORT,m)})});const d=async v=>{if(v==null)return 0;if(j.isBlob(v))return v.size;if(j.isSpecCompliantForm(v))return(await new n(tn.origin,{method:"POST",body:v}).arrayBuffer()).byteLength;if(j.isArrayBufferView(v)||j.isArrayBuffer(v))return v.byteLength;if(j.isURLSearchParams(v)&&(v=v+""),j.isString(v))return(await l(v)).byteLength},g=async(v,y)=>{const m=j.toFiniteNumber(v.getContentLength());return m??d(y)};return async v=>{let{url:y,method:m,data:f,signal:p,cancelToken:_,timeout:M,onDownloadProgress:A,onUploadProgress:w,responseType:R,headers:x,withCredentials:b="same-origin",fetchOptions:C}=kx(v),P=e||fetch;R=R?(R+"").toLowerCase():"text";let U=VP([p,_&&_.toAbortSignal()],M),$=null;const q=U&&U.unsubscribe&&(()=>{U.unsubscribe()});let I;try{if(w&&c&&m!=="get"&&m!=="head"&&(I=await g(x,f))!==0){let ie=new n(y,{method:"POST",body:f,duplex:"half"}),le;if(j.isFormData(f)&&(le=ie.headers.get("content-type"))&&x.setContentType(le),ie.body){const[Fe,Ue]=r0(I,hc(s0(w)));f=a0(ie.body,l0,Fe,Ue)}}j.isString(b)||(b=b?"include":"omit");const B=s&&"credentials"in n.prototype,G={...C,signal:U,method:m.toUpperCase(),headers:x.normalize().toJSON(),body:f,duplex:"half",credentials:B?b:void 0};$=s&&new n(y,G);let O=await(s?P($,C):P(y,G));const X=u&&(R==="stream"||R==="response");if(u&&(A||X&&q)){const ie={};["status","statusText","headers"].forEach(ce=>{ie[ce]=O[ce]});const le=j.toFiniteNumber(O.headers.get("content-length")),[Fe,Ue]=A&&r0(le,hc(s0(A),!0))||[];O=new i(a0(O.body,l0,Fe,()=>{Ue&&Ue(),q&&q()}),ie)}R=R||"text";let Z=await h[j.findKey(h,R)||"text"](O,v);return!X&&q&&q(),await new Promise((ie,le)=>{Ox(ie,le,{data:Z,headers:yn.from(O.headers),status:O.status,statusText:O.statusText,config:v,request:$})})}catch(B){throw q&&q(),B&&B.name==="TypeError"&&/Load failed|fetch/i.test(B.message)?Object.assign(new Be("Network Error",Be.ERR_NETWORK,v,$,B&&B.response),{cause:B.cause||B}):Be.from(B,B&&B.code,v,$,B&&B.response)}}},qP=new Map,zx=t=>{let e=t&&t.env||{};const{fetch:n,Request:i,Response:r}=e,s=[i,r,n];let o=s.length,a=o,l,c,u=qP;for(;a--;)l=s[a],c=u.get(l),c===void 0&&u.set(l,c=a?new Map:XP(e)),u=c;return c};zx();const gp={http:uP,xhr:zP,fetch:{get:zx}};j.forEach(gp,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const f0=t=>`- ${t}`,$P=t=>j.isFunction(t)||t===null||t===!1;function YP(t,e){t=j.isArray(t)?t:[t];const{length:n}=t;let i,r;const s={};for(let o=0;o<n;o++){i=t[o];let a;if(r=i,!$P(i)&&(r=gp[(a=String(i)).toLowerCase()],r===void 0))throw new Be(`Unknown adapter '${a}'`);if(r&&(j.isFunction(r)||(r=r.get(e))))break;s[a||"#"+o]=r}if(!r){const o=Object.entries(s).map(([l,c])=>`adapter ${l} `+(c===!1?"is not supported by the environment":"is not available in the build"));let a=n?o.length>1?`since :
`+o.map(f0).join(`
`):" "+f0(o[0]):"as no adapter specified";throw new Be("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return r}const Vx={getAdapter:YP,adapters:gp};function td(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Ea(null,t)}function h0(t){return td(t),t.headers=yn.from(t.headers),t.data=ed.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Vx.getAdapter(t.adapter||Ma.adapter,t)(t).then(function(i){return td(t),i.data=ed.call(t,t.transformResponse,i),i.headers=yn.from(i.headers),i},function(i){return Fx(i)||(td(t),i&&i.response&&(i.response.data=ed.call(t,t.transformResponse,i.response),i.response.headers=yn.from(i.response.headers))),Promise.reject(i)})}const Hx="1.13.6",Vc={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Vc[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});const p0={};Vc.transitional=function(e,n,i){function r(s,o){return"[Axios v"+Hx+"] Transitional option '"+s+"'"+o+(i?". "+i:"")}return(s,o,a)=>{if(e===!1)throw new Be(r(o," has been removed"+(n?" in "+n:"")),Be.ERR_DEPRECATED);return n&&!p0[o]&&(p0[o]=!0,console.warn(r(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,a):!0}};Vc.spelling=function(e){return(n,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function KP(t,e,n){if(typeof t!="object")throw new Be("options must be an object",Be.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let r=i.length;for(;r-- >0;){const s=i[r],o=e[s];if(o){const a=t[s],l=a===void 0||o(a,s,t);if(l!==!0)throw new Be("option "+s+" must be "+l,Be.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Be("Unknown option "+s,Be.ERR_BAD_OPTION)}}const Ul={assertOptions:KP,validators:Vc},Fn=Ul.validators;let qr=class{constructor(e){this.defaults=e||{},this.interceptors={request:new n0,response:new n0}}async request(e,n){try{return await this._request(e,n)}catch(i){if(i instanceof Error){let r={};Error.captureStackTrace?Error.captureStackTrace(r):r=new Error;const s=r.stack?r.stack.replace(/^.+\n/,""):"";try{i.stack?s&&!String(i.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(i.stack+=`
`+s):i.stack=s}catch{}}throw i}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=ts(this.defaults,n);const{transitional:i,paramsSerializer:r,headers:s}=n;i!==void 0&&Ul.assertOptions(i,{silentJSONParsing:Fn.transitional(Fn.boolean),forcedJSONParsing:Fn.transitional(Fn.boolean),clarifyTimeoutError:Fn.transitional(Fn.boolean),legacyInterceptorReqResOrdering:Fn.transitional(Fn.boolean)},!1),r!=null&&(j.isFunction(r)?n.paramsSerializer={serialize:r}:Ul.assertOptions(r,{encode:Fn.function,serialize:Fn.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Ul.assertOptions(n,{baseUrl:Fn.spelling("baseURL"),withXsrfToken:Fn.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=s&&j.merge(s.common,s[n.method]);s&&j.forEach(["delete","get","head","post","put","patch","common"],v=>{delete s[v]}),n.headers=yn.concat(o,s);const a=[];let l=!0;this.interceptors.request.forEach(function(y){if(typeof y.runWhen=="function"&&y.runWhen(n)===!1)return;l=l&&y.synchronous;const m=n.transitional||pp;m&&m.legacyInterceptorReqResOrdering?a.unshift(y.fulfilled,y.rejected):a.push(y.fulfilled,y.rejected)});const c=[];this.interceptors.response.forEach(function(y){c.push(y.fulfilled,y.rejected)});let u,h=0,d;if(!l){const v=[h0.bind(this),void 0];for(v.unshift(...a),v.push(...c),d=v.length,u=Promise.resolve(n);h<d;)u=u.then(v[h++],v[h++]);return u}d=a.length;let g=n;for(;h<d;){const v=a[h++],y=a[h++];try{g=v(g)}catch(m){y.call(this,m);break}}try{u=h0.call(this,g)}catch(v){return Promise.reject(v)}for(h=0,d=c.length;h<d;)u=u.then(c[h++],c[h++]);return u}getUri(e){e=ts(this.defaults,e);const n=Bx(e.baseURL,e.url,e.allowAbsoluteUrls);return Ix(n,e.params,e.paramsSerializer)}};j.forEach(["delete","get","head","options"],function(e){qr.prototype[e]=function(n,i){return this.request(ts(i||{},{method:e,url:n,data:(i||{}).data}))}});j.forEach(["post","put","patch"],function(e){function n(i){return function(s,o,a){return this.request(ts(a||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}qr.prototype[e]=n(),qr.prototype[e+"Form"]=n(!0)});let ZP=class Gx{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const i=this;this.promise.then(r=>{if(!i._listeners)return;let s=i._listeners.length;for(;s-- >0;)i._listeners[s](r);i._listeners=null}),this.promise.then=r=>{let s;const o=new Promise(a=>{i.subscribe(a),s=a}).then(r);return o.cancel=function(){i.unsubscribe(s)},o},e(function(s,o,a){i.reason||(i.reason=new Ea(s,o,a),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=i=>{e.abort(i)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new Gx(function(r){e=r}),cancel:e}}};function JP(t){return function(n){return t.apply(null,n)}}function QP(t){return j.isObject(t)&&t.isAxiosError===!0}const $f={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries($f).forEach(([t,e])=>{$f[e]=t});function Wx(t){const e=new qr(t),n=Ex(qr.prototype.request,e);return j.extend(n,qr.prototype,e,{allOwnKeys:!0}),j.extend(n,e,null,{allOwnKeys:!0}),n.create=function(r){return Wx(ts(t,r))},n}const It=Wx(Ma);It.Axios=qr;It.CanceledError=Ea;It.CancelToken=ZP;It.isCancel=Fx;It.VERSION=Hx;It.toFormData=zc;It.AxiosError=Be;It.Cancel=It.CanceledError;It.all=function(e){return Promise.all(e)};It.spread=JP;It.isAxiosError=QP;It.mergeConfig=ts;It.AxiosHeaders=yn;It.formToJSON=t=>Ux(j.isHTMLForm(t)?new FormData(t):t);It.getAdapter=Vx.getAdapter;It.HttpStatusCode=$f;It.default=It;const{Axios:l2,AxiosError:c2,CanceledError:u2,isCancel:d2,CancelToken:f2,VERSION:h2,all:p2,Cancel:m2,isAxiosError:g2,spread:v2,toFormData:_2,AxiosHeaders:x2,HttpStatusCode:y2,formToJSON:S2,getAdapter:M2,mergeConfig:E2}=It,Ht=It.create({baseURL:window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"http://localhost:8000":`${window.location.protocol}//${window.location.hostname}`});Ht.interceptors.request.use(t=>{const e=localStorage.getItem("token");return e&&(t.headers.Authorization=`Bearer ${e}`),t});Ht.interceptors.response.use(t=>t,t=>(t.response&&t.response.status===401&&(localStorage.removeItem("token"),!window.location.pathname.includes("/login")&&!window.location.pathname.includes("/register")&&(window.location.href="/login")),Promise.reject(t)));const w2={getHistory:()=>Ht.get("/billing/history"),getStoneReport:(t,e)=>Ht.get("/billing/stone-report",{params:{year:t,month:e}}),downloadInvoice:t=>Ht.get(`/billing/invoice/${t}`,{responseType:"blob"}),downloadInvoiceExcel:t=>Ht.get(`/billing/invoice/${t}/excel`,{responseType:"blob"}),getMonthly:(t,e)=>Ht.get("/billing/monthly",{params:{year:t,month:e}}),generateInvoices:(t,e,n)=>Ht.post("/billing/invoice",null,{params:{year:t,month:e,user_id:n}}),getAdminOverview:(t,e)=>Ht.get("/billing/admin/overview",{params:{year:t,month:e}}),getAdminStoneReport:(t,e,n)=>Ht.get("/billing/admin/stone-report",{params:{user_id:t,year:e,month:n}}),getAllInvoices:()=>Ht.get("/billing/admin/all-invoices"),adminDownloadInvoice:t=>Ht.get(`/billing/admin/invoice/${t}`,{responseType:"blob"}),adminDownloadInvoiceExcel:t=>Ht.get(`/billing/admin/invoice/${t}/excel`,{responseType:"blob"}),getUserAccount:(t,e,n)=>Ht.get(`/billing/admin/user-account/${t}`,{params:{year:e,month:n}})};function Yf({mode:t="client",isModal:e=!1,onClose:n}){const i=Nc(),r=t==="admin",[s,o]=te.useState({username:"",password:""}),[a,l]=te.useState(""),[c,u]=te.useState(!1),[h,d]=te.useState(!1),[g,v]=te.useState(!1),[y,m]=te.useState(1),[f,p]=te.useState(""),[_,M]=te.useState(""),[A,w]=te.useState({newPwd:"",confirmPwd:""}),[R,x]=te.useState(!1),[b,C]=te.useState(!1),[P,U]=te.useState(""),[$,q]=te.useState(""),[I,B]=te.useState(!1),G=async ce=>{var Y,oe;ce.preventDefault(),l(""),d(!0);try{const re={username:s.username,password:s.password,is_admin_login:r},{data:De}=await Ht.post("/auth/login",re);localStorage.setItem("token",De.access_token),localStorage.setItem("is_admin",String(De.is_admin)),i(De.is_admin?"/admin":"/dashboard")}catch(re){l(((oe=(Y=re.response)==null?void 0:Y.data)==null?void 0:oe.detail)||"Login failed. Please verify credentials.")}finally{d(!1)}},O=async ce=>{var Y,oe;ce.preventDefault(),U(""),q(""),B(!0);try{const{data:re}=await Ht.post("/auth/forgot-password",{email:f});q(re.message),m(2)}catch(re){U(((oe=(Y=re.response)==null?void 0:Y.data)==null?void 0:oe.detail)||"Failed to generate OTP.")}finally{B(!1)}},X=async ce=>{var Y,oe;ce.preventDefault(),U(""),q(""),B(!0);try{await Ht.post("/auth/verify-otp",{email:f,otp:_}),q("OTP verified successfully! Now define your new password."),m(3)}catch(re){U(((oe=(Y=re.response)==null?void 0:Y.data)==null?void 0:oe.detail)||"Incorrect or expired OTP.")}finally{B(!1)}},Z=async ce=>{var Y,oe;if(ce.preventDefault(),U(""),q(""),A.newPwd!==A.confirmPwd){U("Passwords do not match!");return}B(!0);try{const{data:re}=await Ht.post("/auth/reset-password",{email:f,otp:_,new_password:A.newPwd});v(!1),m(1),p(""),M(""),w({newPwd:"",confirmPwd:""}),l(""),alert(re.message||"Password updated successfully. Please login with your new password.")}catch(re){U(((oe=(Y=re.response)==null?void 0:Y.data)==null?void 0:oe.detail)||"Failed to update password.")}finally{B(!1)}},ie=()=>{v(!1),m(1),U(""),q("")},le=ce=>{ce.target===ce.currentTarget&&n&&n()},Fe=e?{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(3, 4, 8, 0.75)",backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9999,padding:"20px",animation:"fadeIn 0.3s ease"}:{position:"relative"},Ue=e?"login-modal-overlay":"auth-page";return L.jsxs("div",{className:Ue,style:Fe,onClick:e?le:void 0,children:[L.jsx("div",{className:"glow-blob blob-1",style:{top:"-10%",left:"15%"}}),L.jsx("div",{className:"glow-blob blob-2",style:{bottom:"-10%",right:"10%"}}),!e&&L.jsxs("button",{className:"btn btn-outline btn-sm btn-back-home",onClick:()=>i("/"),style:{position:"absolute",top:"24px",left:"24px",display:"flex",alignItems:"center",gap:"6px",borderRadius:"var(--radius-sm)",zIndex:1e3},children:[L.jsx(BE,{size:14})," Back to Home"]}),!e&&L.jsx("div",{style:{position:"absolute",top:"24px",right:"24px",zIndex:1e3},children:L.jsx(Mx,{})}),g?L.jsxs("div",{className:"auth-card",style:{position:"relative",animation:"modalSlideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1)"},children:[e&&L.jsx("button",{type:"button",onClick:n,"aria-label":"Close modal",className:"btn-close-modal",style:{position:"absolute",top:"20px",right:"20px",background:"rgba(255, 255, 255, 0.08)",border:"1px solid var(--border)",borderRadius:"50%",width:"36px",height:"36px",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--text)",cursor:"pointer",transition:"all var(--transition)",padding:0,zIndex:10},onMouseEnter:ce=>{ce.currentTarget.style.transform="rotate(90deg)",ce.currentTarget.style.background="var(--primary-bg)"},onMouseLeave:ce=>{ce.currentTarget.style.transform="none",ce.currentTarget.style.background="rgba(255, 255, 255, 0.08)"},children:L.jsx(Jm,{size:18})}),L.jsx("div",{className:"logo-icon primary",children:L.jsx(jE,{size:28})}),L.jsx("h1",{children:"Reset Password"}),L.jsx("p",{style:{marginBottom:"20px"},children:"Admin Security Portal"}),P&&L.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",background:"var(--danger-bg)",border:"1px solid var(--border)",color:"var(--danger)",padding:"10px 14px",borderRadius:"var(--radius-sm)",fontSize:"0.85rem",marginBottom:"16px"},children:[L.jsx(QE,{size:16,style:{flexShrink:0}}),L.jsx("span",{children:P})]}),$&&L.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",background:"var(--success-bg)",border:"1px solid var(--border)",color:"var(--success)",padding:"10px 14px",borderRadius:"var(--radius-sm)",fontSize:"0.85rem",marginBottom:"16px"},children:[L.jsx(V_,{size:16,style:{flexShrink:0}}),L.jsx("span",{children:$})]}),y===1&&L.jsxs("form",{onSubmit:O,children:[L.jsxs("div",{style:{position:"relative",marginBottom:"16px"},children:[L.jsx("input",{type:"email",placeholder:"Enter registered Admin Email","aria-label":"Registered Admin Email",value:f,onChange:ce=>p(ce.target.value),required:!0,autoFocus:!0,style:{paddingLeft:"40px"}}),L.jsx(YE,{size:16,style:{position:"absolute",left:"14px",top:"14px",color:"var(--text-light)"}})]}),L.jsx("button",{type:"submit",className:"btn-primary",disabled:I,style:{width:"100%",justifyContent:"center",padding:"12px",marginBottom:"12px"},children:I?"Sending OTP...":"Request 6-Digit OTP"})]}),y===2&&L.jsxs("form",{onSubmit:X,children:[L.jsx("div",{style:{position:"relative",marginBottom:"16px"},children:L.jsx("input",{type:"text",placeholder:"Enter 6-Digit OTP","aria-label":"6-Digit OTP",value:_,onChange:ce=>M(ce.target.value),required:!0,maxLength:6,autoFocus:!0,style:{textAlign:"center",letterSpacing:"6px",fontSize:"1.2rem",fontWeight:700}})}),L.jsx("button",{type:"submit",className:"btn-primary",disabled:I,style:{width:"100%",justifyContent:"center",padding:"12px",marginBottom:"12px"},children:I?"Verifying...":"Verify Code"})]}),y===3&&L.jsxs("form",{onSubmit:Z,children:[L.jsxs("div",{style:{position:"relative",marginBottom:"12px"},children:[L.jsx("input",{type:R?"text":"password",placeholder:"New Password","aria-label":"New Password",value:A.newPwd,onChange:ce=>w({...A,newPwd:ce.target.value}),required:!0,autoFocus:!0,style:{paddingRight:42,marginBottom:0}}),L.jsx("button",{type:"button",onClick:()=>x(!R),"aria-label":R?"Hide new password":"Show new password",style:{position:"absolute",right:12,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",padding:4,color:"var(--text-light)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},children:R?L.jsx(vu,{size:18}):L.jsx(_u,{size:18})})]}),L.jsxs("div",{style:{position:"relative",marginBottom:"18px"},children:[L.jsx("input",{type:b?"text":"password",placeholder:"Confirm New Password","aria-label":"Confirm New Password",value:A.confirmPwd,onChange:ce=>w({...A,confirmPwd:ce.target.value}),required:!0,style:{paddingRight:42,marginBottom:0}}),L.jsx("button",{type:"button",onClick:()=>C(!b),"aria-label":b?"Hide confirm password":"Show confirm password",style:{position:"absolute",right:12,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",padding:4,color:"var(--text-light)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},children:b?L.jsx(vu,{size:18}):L.jsx(_u,{size:18})})]}),L.jsx("button",{type:"submit",className:"btn-primary",disabled:I,style:{width:"100%",justifyContent:"center",padding:"12px",marginBottom:"12px"},children:I?"Updating...":"Update Password"})]}),L.jsx("button",{type:"button",className:"btn btn-outline",onClick:ie,style:{width:"100%",justifyContent:"center",padding:"10px"},children:"Cancel"})]}):L.jsxs("form",{className:"auth-card",onSubmit:G,style:{position:"relative",animation:"modalSlideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1)"},children:[e&&L.jsx("button",{type:"button",onClick:n,"aria-label":"Close modal",className:"btn-close-modal",style:{position:"absolute",top:"20px",right:"20px",background:"rgba(255, 255, 255, 0.08)",border:"1px solid var(--border)",borderRadius:"50%",width:"36px",height:"36px",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--text)",cursor:"pointer",transition:"all var(--transition)",padding:0,zIndex:10},onMouseEnter:ce=>{ce.currentTarget.style.transform="rotate(90deg)",ce.currentTarget.style.background="var(--primary-bg)"},onMouseLeave:ce=>{ce.currentTarget.style.transform="none",ce.currentTarget.style.background="rgba(255, 255, 255, 0.08)"},children:L.jsx(Jm,{size:18})}),L.jsx("div",{className:"logo-icon primary",children:L.jsx(Tl,{size:28})}),L.jsx("h1",{children:r?"Admin Control":"Client Operations"}),L.jsxs("p",{style:{marginBottom:"20px"},children:["Sign in to your ",r?"system settings":"diamond queue"]}),L.jsx("div",{style:{position:"relative",marginBottom:"14px"},children:L.jsx("input",{placeholder:"Username","aria-label":"Username",value:s.username,onChange:ce=>o({...s,username:ce.target.value}),required:!0,autoFocus:!0,autoComplete:"off",style:{marginBottom:0}})}),L.jsxs("div",{style:{position:"relative",marginBottom:"14px"},children:[L.jsx("input",{type:c?"text":"password",placeholder:"Password","aria-label":"Password",value:s.password,onChange:ce=>o({...s,password:ce.target.value}),required:!0,style:{paddingRight:42,marginBottom:0}}),L.jsx("button",{type:"button",onClick:()=>u(!c),"aria-label":c?"Hide password":"Show password",style:{position:"absolute",right:12,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",padding:4,color:"var(--text-light)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},children:c?L.jsx(vu,{size:18}):L.jsx(_u,{size:18})})]}),a&&L.jsx("small",{className:"error",style:{marginBottom:"14px",display:"block"},children:a}),L.jsxs("button",{type:"submit",className:"btn-primary",disabled:h,style:{width:"100%",justifyContent:"center",padding:"12px",marginBottom:"14px"},children:[L.jsx(qE,{size:18}),h?"Signing in...":"Sign In"]}),r&&L.jsx("div",{style:{textAlign:"center",marginTop:"4px"},children:L.jsx("button",{type:"button",className:"btn-ghost",onClick:()=>v(!0),style:{background:"none",border:"none",color:"var(--primary-light)",fontSize:"0.85rem",fontWeight:600,cursor:"pointer",padding:"4px 8px"},children:"Forgot Password?"})})]})]})}function wn({children:t,className:e="",delay:n=0,direction:i="up",style:r={}}){const[s,o]=te.useState(!1),a=te.useRef();te.useEffect(()=>{const c=new IntersectionObserver(h=>{h.forEach(d=>{d.isIntersecting&&d.intersectionRatio>=.1?o(!0):d.isIntersecting||d.target.getBoundingClientRect().top>=window.innerHeight-10&&o(!1)})},{threshold:[0,.1]}),u=a.current;return u&&c.observe(u),()=>{u&&c.unobserve(u)}},[]);const l={up:"reveal-up",down:"reveal-down",left:"reveal-left",right:"reveal-right",fade:"reveal-fade"}[i];return L.jsx("div",{ref:a,className:`scroll-reveal ${l} ${s?"active":""} ${e}`,style:{transitionDelay:`${n}ms`,...r},children:t})}function e2(){const t=te.useRef(),e=te.useRef(!1),n=te.useRef(0),i=te.useRef(0),[r,s]=te.useState(!1),[o,a]=te.useState(document.documentElement.getAttribute("data-theme")||"dark"),l=te.useRef(document.documentElement.getAttribute("data-theme")||"dark");return te.useEffect(()=>{const c=t.current;if(!c)return;let u=null,h=null,d=null,g=null,v=null;try{const y=document.documentElement.getAttribute("data-theme")||"dark";l.current=y,a(y),d=new MutationObserver(Ee=>{Ee.forEach(Ce=>{if(Ce.attributeName==="data-theme"){const ue=document.documentElement.getAttribute("data-theme")||"dark";l.current=ue,a(ue)}})}),d.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]});const m=()=>{const Ee=[];for(let Se=0;Se<8;Se++){const Ze=Se*Math.PI*2/8;Ee.push(Math.cos(Ze)*.52,.38,Math.sin(Ze)*.52)}Ee.push(0,.38,0);for(let Se=0;Se<8;Se++){const Ze=(Se+.5)*Math.PI*2/8;Ee.push(Math.cos(Ze)*.82,.22,Math.sin(Ze)*.82)}for(let Se=0;Se<16;Se++){const Ze=Se*Math.PI*2/16;Ee.push(Math.cos(Ze)*1.15,0,Math.sin(Ze)*1.15)}for(let Se=0;Se<8;Se++){const Ze=(Se+.5)*Math.PI*2/8;Ee.push(Math.cos(Ze)*.55,-.38,Math.sin(Ze)*.55)}Ee.push(0,-.72,0);const Ce=[];for(let Se=0;Se<8;Se++){const Ze=(Se+1)%8,D=2*Se,mt=2*Se+1,Ye=(2*Se+2)%16;Ce.push(8,Ze,Se),Ce.push(Se,Ze,9+Se),Ce.push(Se,9+Se,17+mt),Ce.push(Se,17+mt,17+D),Ce.push(Ze,17+mt,9+Se),Ce.push(Ze,17+Ye,17+mt),Ce.push(17+D,33+Se,17+mt),Ce.push(17+mt,33+Se,17+Ye),Ce.push(17+D,41,33+Se);const ct=(Se-1+8)%8;Ce.push(17+D,33+ct,41)}const ue=new ri;ue.setAttribute("position",new Cn(Ee,3)),ue.setIndex(Ce);const Ve=ue.toNonIndexed();return Ve.computeVertexNormals(),Ve},f=new Q1,p=new zn(45,1,.1,100);p.position.z=3.7;const _=new SC({antialias:!0,alpha:!0,powerPreference:"high-performance"});if(!_.capabilities.isWebGL2&&!_.getContext())throw new Error("WebGL context not supported or disabled in this browser.");_.setPixelRatio(Math.min(window.devicePixelRatio,2)),_.toneMapping=Kh,_.toneMappingExposure=1.8;const M=Math.max(c.clientWidth,400),A=Math.max(c.clientHeight,400);p.aspect=M/A,p.updateProjectionMatrix(),_.setSize(M,A),c.appendChild(_.domElement),_.domElement.style.width="100%",_.domElement.style.height="100%",_.domElement.style.position="absolute",_.domElement.style.top="0",_.domElement.style.left="0",h=new ResizeObserver(Ee=>{for(let Ce of Ee){const ue=Math.floor(Ce.contentRect.width||c.clientWidth||400),Ve=Math.floor(Ce.contentRect.height||c.clientHeight||400);ue>0&&Ve>0&&(p.aspect=ue/Ve,p.updateProjectionMatrix(),_.setSize(ue,Ve))}}),h.observe(c);const w=y==="light",R=new _w({color:w?5195493:959977,emissive:w?1973067:223649,transparent:!0,opacity:1,roughness:0,metalness:.12,ior:2.417,transmission:w?0:.3,thickness:2.2,side:pi,clearcoat:1,clearcoatRoughness:0,reflectivity:1,envMapIntensity:5,dispersion:.32});v=m(),g=new ii(v,R),g.rotation.x=.22,f.add(g);const x=Ee=>{try{const Ce=document.createElement("canvas");Ce.width=512,Ce.height=256;const ue=Ce.getContext("2d");if(!ue)return null;Ee==="light"?ue.fillStyle="#0b0f19":ue.fillStyle="#02040a",ue.fillRect(0,0,512,256);const Ve=ue.createLinearGradient(0,0,512,0);Ee==="light"?(Ve.addColorStop(0,"#02040a"),Ve.addColorStop(.5,"#312e81"),Ve.addColorStop(1,"#02040a")):(Ve.addColorStop(0,"#030712"),Ve.addColorStop(.5,"#253b59"),Ve.addColorStop(1,"#030712")),ue.fillStyle=Ve,ue.fillRect(0,20,512,216);const Se=new uw(Ce);return Se.mapping=bl,Se}catch{return null}},b=x("dark"),C=x("light"),P=y==="light"?C:b;P&&(f.environment=P,R.envMap=P);const U=new Po,$=new up(.01,0),q=[16777215,12248829,14742270,3718648,16317180],I=[16777215,13095678,14739455,8490232,5195493],B=w?I:q,G=[];for(let Ee=0;Ee<28;Ee++){const Ce=new ap({color:B[Math.floor(Math.random()*B.length)],transparent:!0,opacity:.35+Math.random()*.65}),ue=new ii($,Ce),Ve=Math.random()*Math.PI*2,Se=Math.acos(Math.random()*2-1),Ze=1.1+Math.random()*1.1;ue.position.set(Ze*Math.sin(Se)*Math.cos(Ve),Ze*Math.sin(Se)*Math.sin(Ve),Ze*Math.cos(Se)),G.push({mesh:ue,speed:.12+Math.random()*.22,theta:Ve,phi:Se,radius:Ze,pulseSpeed:1.4+Math.random()*2.2}),U.add(ue)}f.add(U);const O=new Ew(w?14739455:730437,w?.85:.65);f.add(O);const X=new cl(w?13095678:3718648,w?4:3.5);X.position.set(0,10,0),f.add(X);const Z=new cl(w?14739455:8246268,w?3.5:3);Z.position.set(5,5,5),f.add(Z);const ie=new cl(w?5195493:959977,w?3:2.5);ie.position.set(-5,3,-5),f.add(ie);const le=new cl(w?3223169:165063,w?3.5:3.2);le.position.set(0,-6,1),f.add(le);let Fe=!1,Ue={x:0,y:0};const ce=Ee=>{Fe=!0,e.current=!0,Ue={x:Ee.clientX,y:Ee.clientY}},Y=Ee=>{const Ce=c.getBoundingClientRect(),ue=(Ee.clientX-Ce.left)/Ce.width*2-1,Ve=-((Ee.clientY-Ce.top)/Ce.height)*2+1;if(!Fe){n.current=Ve*.35,i.current=ue*.35;return}const Se={x:Ee.clientX-Ue.x,y:Ee.clientY-Ue.y};g&&(g.rotation.y+=Se.x*.007,g.rotation.x+=Se.y*.007),U.rotation.y+=Se.x*.004,Ue={x:Ee.clientX,y:Ee.clientY}},oe=()=>{Fe=!1,setTimeout(()=>{e.current=!1},1200)},re=Ee=>{Ee.touches.length===1&&(Fe=!0,e.current=!0,Ue={x:Ee.touches[0].clientX,y:Ee.touches[0].clientY})},De=Ee=>{if(Fe&&Ee.touches.length===1){const Ce={x:Ee.touches[0].clientX-Ue.x,y:Ee.touches[0].clientY-Ue.y};g&&(g.rotation.y+=Ce.x*.007,g.rotation.x+=Ce.y*.007),U.rotation.y+=Ce.x*.004,Ue={x:Ee.touches[0].clientX,y:Ee.touches[0].clientY}}};c.addEventListener("mousedown",ce),window.addEventListener("mousemove",Y),window.addEventListener("mouseup",oe),c.addEventListener("touchstart",re),window.addEventListener("touchmove",De,{passive:!0}),window.addEventListener("touchend",oe);let ze;const Oe=performance.now();let pt=y;const $e=()=>{ze=requestAnimationFrame($e);const Ee=(performance.now()-Oe)*.001,Ce=l.current;if(Ce!==pt){const ue=Ce==="light";R.color.setHex(ue?5195493:959977),R.emissive.setHex(ue?1973067:223649),R.transmission=ue?0:.3;const Ve=ue?C:b;Ve&&(f.environment=Ve,R.envMap=Ve),O.color.setHex(ue?14739455:730437),O.intensity=ue?.85:.65,X.color.setHex(ue?13095678:3718648),X.intensity=ue?4:3.5,Z.color.setHex(ue?14739455:8246268),Z.intensity=ue?3.5:3,ie.color.setHex(ue?5195493:959977),ie.intensity=ue?3:2.5,le.color.setHex(ue?3223169:165063),le.intensity=ue?3.5:3.2;const Se=ue?I:q;G.forEach(Ze=>{Ze.mesh.material.color.setHex(Se[Math.floor(Math.random()*Se.length)]),Ze.mesh.material.needsUpdate=!0}),R.needsUpdate=!0,pt=Ce}g&&(e.current||(g.rotation.y+=.0055,g.rotation.x+=(n.current+.22-g.rotation.x)*.04,g.rotation.z+=6e-4),g.position.y=Math.sin(Ee*1.1)*.035),U.rotation.y+=.0012,G.forEach(ue=>{ue.theta+=ue.speed*.01,ue.mesh.position.y+=Math.sin(Ee*ue.pulseSpeed)*8e-4,ue.mesh.material.opacity=.35+Math.sin(Ee*ue.pulseSpeed)*.3}),_.render(f,p)};$e(),u=()=>{cancelAnimationFrame(ze),d&&d.disconnect(),h&&h.disconnect(),c.removeEventListener("mousedown",ce),window.removeEventListener("mousemove",Y),window.removeEventListener("mouseup",oe),c.removeEventListener("touchstart",re),window.removeEventListener("touchmove",De),window.removeEventListener("touchend",oe),c&&_.domElement&&c.contains(_.domElement)&&c.removeChild(_.domElement),v&&v.dispose(),g&&g.geometry.dispose(),R.dispose(),b&&b.dispose(),C&&C.dispose(),_.dispose()}}catch(y){console.error("Three.js diamond visualizer failed to initialize:",y),s(!0)}return()=>{u&&u()}},[]),r?L.jsx("div",{className:"anim-float-diamond diamond-visualizer",style:{display:"flex",alignItems:"center",justifyContent:"center",position:"relative",margin:"0 auto",filter:"drop-shadow(0 0 50px rgba(255, 255, 255, 0.15)) drop-shadow(0 0 100px rgba(6, 182, 212, 0.25))"},children:L.jsx("img",{src:"/main_diamond.png",alt:"Premium Diamond Visualizer Fallback",style:{width:"100%",height:"100%",objectFit:"contain"}})}):L.jsxs(L.Fragment,{children:[L.jsx("style",{children:`
        @keyframes diamondShadowPulse {
          0% {
            transform: translateX(-50%) scale(1.08);
            opacity: 0.45;
            filter: blur(6px);
          }
          100% {
            transform: translateX(-50%) scale(0.92);
            opacity: 0.8;
            filter: blur(3px);
          }
        }
      `}),L.jsxs("div",{className:"diamond-studio-container",style:{position:"relative",width:"100%",maxWidth:"480px",height:"auto",aspectRatio:"1 / 1",margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"center",background:"transparent",border:"none",boxShadow:"none",overflow:"visible"},children:[L.jsx("div",{style:{position:"absolute",top:"-40px",left:"-15%",right:"-15%",height:"120%",background:o==="light"?"radial-gradient(ellipse at 50% 0%, rgba(254, 205, 205, 0.22) 0%, rgba(254, 205, 205, 0.07) 45%, rgba(0, 0, 0, 0) 80%)":"radial-gradient(ellipse at 50% 0%, rgba(186, 230, 253, 0.08) 0%, rgba(186, 230, 253, 0.02) 45%, rgba(0, 0, 0, 0) 80%)",pointerEvents:"none",zIndex:1,transition:"background 0.5s ease"}}),L.jsx("div",{ref:t,className:"diamond-visualizer",style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",position:"relative",zIndex:2,cursor:e.current?"grabbing":"grab",userSelect:"none",touchAction:"none"}}),L.jsx("div",{className:"diamond-reflection-shadow",style:{position:"absolute",bottom:"35px",left:"50%",transform:"translateX(-50%)",width:"180px",height:"16px",borderRadius:"50%",background:o==="light"?"radial-gradient(ellipse, rgba(153, 27, 27, 0.22) 0%, rgba(239, 68, 68, 0.08) 40%, rgba(0, 0, 0, 0) 75%)":"radial-gradient(ellipse, rgba(0, 0, 0, 0.8) 0%, rgba(56, 189, 248, 0.08) 35%, rgba(0, 0, 0, 0) 75%)",filter:"blur(4px)",pointerEvents:"none",zIndex:1,animation:"diamondShadowPulse 2.85s ease-in-out infinite alternate",transition:"background 0.5s ease"}})]})]})}function m0(){Nc();const[t,e]=te.useState({isOpen:!1,mode:"client"});te.useEffect(()=>{document.documentElement.setAttribute("data-theme","dark"),localStorage.setItem("theme","dark")},[]);const n=s=>{e({isOpen:!0,mode:s})},i=[{value:"5.4M+",label:"Stones Logged"},{value:"99.99%",label:"Parsing Accuracy"},{value:"10K+",label:"Batches Processed"},{value:"100%",label:"Files Reconciled"}],r=[{num:"01",title:"Secure Sheet Submission",desc:"Clients upload their diamond inventory spreadsheets (Excel/CSV) directly via the secure Client Console."},{num:"02",title:"Automated Sheet Processing",desc:"Our engine validates columns, processes total weights, maps field properties, and updates the database records."}];return L.jsxs("div",{className:"landing-page",style:{minHeight:"100vh",background:"var(--bg)",color:"var(--text)",position:"relative",overflowX:"hidden",fontFamily:"'Outfit', sans-serif"},children:[L.jsx("div",{className:"glow-blob blob-1 blob-float-1",style:{position:"absolute",top:"-5%",left:"10%",width:"500px",height:"500px",background:"radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)",pointerEvents:"none"}}),L.jsx("div",{className:"glow-blob blob-2 blob-float-2",style:{position:"absolute",bottom:"20%",right:"5%",width:"600px",height:"600px",background:"radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)",pointerEvents:"none"}}),L.jsxs("header",{className:"shell-header responsive-landing-header anim-fade-in-down",children:[L.jsxs(Xm,{to:"/",style:{display:"flex",alignItems:"center",gap:"12px",textDecoration:"none",color:"inherit"},children:[L.jsx("div",{className:"panel-icon primary",style:{width:"42px",height:"42px",display:"flex",alignItems:"center",justifyContent:"center"},children:L.jsx(Tl,{size:22})}),L.jsx("span",{style:{fontWeight:800,fontSize:"1.75rem",letterSpacing:"-0.03em",background:"linear-gradient(135deg, var(--text), var(--accent))",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"Diamond"})]}),L.jsxs("div",{className:"landing-header-buttons",style:{display:"flex",alignItems:"center",gap:"12px"},children:[L.jsx(Mx,{}),L.jsx("button",{onClick:()=>n("client"),className:"btn btn-outline",style:{borderRadius:"var(--radius-sm)",padding:"8px 20px",fontWeight:600,fontSize:"0.85rem",display:"inline-flex",alignItems:"center",justifyContent:"center"},children:"Client Login"}),L.jsx("button",{onClick:()=>n("admin"),className:"btn btn-primary",style:{borderRadius:"var(--radius-sm)",padding:"8px 20px",fontWeight:600,fontSize:"0.85rem",background:"linear-gradient(135deg, var(--primary), var(--accent))",boxShadow:"0 4px 14px rgba(6, 182, 212, 0.3)",display:"inline-flex",alignItems:"center",justifyContent:"center"},children:"Admin Login"})]})]}),L.jsxs("main",{children:[L.jsxs("section",{className:"landing-hero-section",children:[L.jsxs("div",{className:"landing-two-col-grid",children:[L.jsxs("div",{style:{textAlign:"left"},children:[L.jsx(wn,{direction:"left",delay:100,children:L.jsxs("h1",{className:"landing-hero-title",style:{fontSize:"clamp(2.2rem, 5vw, 3.8rem)",fontWeight:800,lineHeight:1.15,letterSpacing:"-0.03em",marginBottom:"20px",textAlign:"left"},children:["Diamond File &",L.jsx("br",{}),L.jsx("span",{style:{background:"linear-gradient(135deg, var(--text), var(--accent))",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"Spreadsheet Management"})]})}),L.jsx(wn,{direction:"left",delay:200,children:L.jsx("p",{className:"landing-hero-desc",style:{fontSize:"1.15rem",color:"var(--text-secondary)",lineHeight:1.65,margin:"0 0 40px 0",textAlign:"left"},children:"Upload, validate, and process diamond inventory sheets with automated calculations for total weights, payouts, and client sheet histories."})}),L.jsx(wn,{direction:"up",delay:300,children:L.jsxs("div",{className:"landing-hero-ctas desktop-hero-ctas",style:{display:"flex",gap:"16px",justifyContent:"flex-start",marginTop:"28px"},children:[L.jsxs("button",{onClick:()=>n("client"),className:"btn btn-primary",style:{padding:"14px 32px",fontSize:"0.95rem",fontWeight:600,borderRadius:"var(--radius-sm)",background:"linear-gradient(135deg, var(--primary), var(--accent))",boxShadow:"0 8px 24px rgba(6, 182, 212, 0.3)",display:"inline-flex",alignItems:"center",justifyContent:"center"},children:["Client Console ",L.jsx(Zm,{size:16,style:{marginLeft:"6px"}})]}),L.jsx("button",{onClick:()=>n("admin"),className:"btn btn-outline",style:{padding:"14px 32px",fontSize:"0.95rem",fontWeight:600,borderRadius:"var(--radius-sm)",display:"inline-flex",alignItems:"center",justifyContent:"center"},children:"Admin Control Center"})]})})]}),L.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",minWidth:0,overflow:"visible"},children:L.jsx(wn,{direction:"right",delay:400,style:{width:"100%",display:"flex",justifyContent:"center",minWidth:0},children:L.jsx(e2,{})})}),L.jsx(wn,{direction:"up",delay:300,className:"mobile-hero-ctas",style:{width:"100%"},children:L.jsxs("div",{className:"landing-hero-ctas",style:{display:"flex",gap:"16px",width:"100%"},children:[L.jsxs("button",{onClick:()=>n("client"),className:"btn btn-primary",style:{padding:"14px 32px",fontSize:"0.95rem",fontWeight:600,borderRadius:"var(--radius-sm)",background:"linear-gradient(135deg, var(--primary), var(--accent))",boxShadow:"0 8px 24px rgba(6, 182, 212, 0.3)",display:"inline-flex",alignItems:"center",justifyContent:"center"},children:["Client Console ",L.jsx(Zm,{size:16,style:{marginLeft:"6px"}})]}),L.jsx("button",{onClick:()=>n("admin"),className:"btn btn-outline",style:{padding:"14px 32px",fontSize:"0.95rem",fontWeight:600,borderRadius:"var(--radius-sm)",display:"inline-flex",alignItems:"center",justifyContent:"center"},children:"Admin Control Center"})]})})]}),L.jsx("div",{className:"stats-wrapper",children:L.jsx(wn,{direction:"up",delay:500,children:L.jsx("div",{className:"landing-hero-stats",children:i.map((s,o)=>L.jsxs("div",{className:"anim-stat-pulse",style:{textAlign:"center"},children:[L.jsx("h2",{style:{fontSize:"2.8rem",fontWeight:800,margin:"0 0 6px 0",background:"linear-gradient(135deg, var(--text), var(--accent))",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:s.value}),L.jsx("span",{style:{fontSize:"0.9rem",color:"var(--text-secondary)",fontWeight:600},children:s.label})]},o))})})})]}),L.jsxs("section",{style:{padding:"80px 0",position:"relative",zIndex:10},children:[L.jsx("div",{style:{maxWidth:"1200px",margin:"0 auto",textAlign:"center",marginBottom:"40px",padding:"0 20px",width:"100%",boxSizing:"border-box"},children:L.jsxs(wn,{direction:"up",children:[L.jsx("h2",{style:{fontSize:"2.2rem",fontWeight:800,marginBottom:"12px"},children:"Automated Spreadsheet Operations"}),L.jsx("p",{style:{color:"var(--text-secondary)",maxWidth:"600px",margin:"0 auto"},children:"Explore how diamond spreadsheet records are seamlessly parsed, audited, and processed into secure statements."})]})}),L.jsxs("div",{className:"storytelling-container",children:[L.jsx(wn,{direction:"left",children:L.jsxs("div",{style:{padding:"20px"},children:[L.jsx("div",{style:{color:"var(--accent)",fontWeight:700,fontSize:"0.85rem",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:"12px"},children:"Phase 1: 3D Scan & Parameter Mapping"}),L.jsx("h3",{style:{fontSize:"1.8rem",fontWeight:800,marginBottom:"16px",color:"var(--text)"},children:"Intelligent 3D Geometry & Planning Analysis"}),L.jsx("p",{style:{color:"var(--text-secondary)",lineHeight:1.7,marginBottom:"20px"},children:"Seamlessly process advanced 3D scanning and cutting planning files. The system automatically parses crucial physical attributes—such as shape, carat weight, color, clarity grades, planning planes, and yield statistics—translating scanner outputs directly into standardized spreadsheet data."}),L.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[L.jsx("span",{style:{fontSize:"0.85rem",background:"var(--primary-bg)",color:"var(--accent-light)",padding:"6px 12px",borderRadius:"20px",fontWeight:600},children:"3D Scan Parsing"}),L.jsx("span",{style:{fontSize:"0.85rem",background:"var(--primary-bg)",color:"var(--accent-light)",padding:"6px 12px",borderRadius:"20px",fontWeight:600},children:"Parameter Extraction"}),L.jsx("span",{style:{fontSize:"0.85rem",background:"var(--primary-bg)",color:"var(--accent-light)",padding:"6px 12px",borderRadius:"20px",fontWeight:600},children:"Geometry Mapping"})]})]})}),L.jsx(wn,{direction:"right",children:L.jsxs("div",{className:"storytelling-image-wrapper shine-overlay",children:[L.jsx("img",{src:"/phase_1.png",alt:"3D diamond planning and scan interface showing shape, carat, color, clarity, and planning planes data"}),L.jsx("div",{className:"glow-line"})]})})]}),L.jsxs("div",{className:"storytelling-container mobile-reverse",children:[L.jsx(wn,{direction:"left",children:L.jsxs("div",{className:"storytelling-image-wrapper shine-overlay",children:[L.jsx("img",{src:"/phase_2.png",alt:"Conceptual diagram showing four distinct, colorful 3D faceted gems arranged in gold-bordered segments representing automated data categorization"}),L.jsx("div",{className:"glow-line"})]})}),L.jsx(wn,{direction:"right",children:L.jsxs("div",{style:{padding:"20px"},children:[L.jsx("div",{style:{color:"var(--accent)",fontWeight:700,fontSize:"0.85rem",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:"12px"},children:"Phase 2: Dynamic Parcel Categorization"}),L.jsx("h3",{style:{fontSize:"1.8rem",fontWeight:800,marginBottom:"16px",color:"var(--text)"},children:"Smart Multi-Parcel Sorting & Formatting"}),L.jsx("p",{style:{color:"var(--text-secondary)",lineHeight:1.7,marginBottom:"20px"},children:"Automatically categorize and sort raw spreadsheet entries into distinct, structured parcel segments based on physical attributes like shape, color, and carat weight brackets. The system maps complex inventory records into clean, color-coded classifications and generates individual yield reports on the fly."}),L.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[L.jsx("span",{style:{fontSize:"0.85rem",background:"var(--primary-bg)",color:"var(--accent-light)",padding:"6px 12px",borderRadius:"20px",fontWeight:600},children:"Parcel Segregation"}),L.jsx("span",{style:{fontSize:"0.85rem",background:"var(--primary-bg)",color:"var(--accent-light)",padding:"6px 12px",borderRadius:"20px",fontWeight:600},children:"Multi-Schema Formatting"}),L.jsx("span",{style:{fontSize:"0.85rem",background:"var(--primary-bg)",color:"var(--accent-light)",padding:"6px 12px",borderRadius:"20px",fontWeight:600},children:"Segmented Reports"})]})]})})]})]}),L.jsx("section",{style:{background:"rgba(6, 182, 212, 0.02)",borderTop:"1px solid var(--border-light)",borderBottom:"1px solid var(--border-light)",padding:"80px 20px",position:"relative",zIndex:10},children:L.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[L.jsx("div",{style:{textAlign:"center",marginBottom:"60px"},children:L.jsxs(wn,{direction:"up",children:[L.jsx("h2",{style:{fontSize:"2.2rem",fontWeight:800,marginBottom:"12px"},children:"The Automated File Processing Flow"}),L.jsx("p",{style:{color:"var(--text-secondary)",maxWidth:"500px",margin:"0 auto"},children:"See how files securely propagate from client submission to final database logging."})]})}),L.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))",gap:"30px",position:"relative"},children:r.map((s,o)=>L.jsx(wn,{direction:"up",delay:o*100,children:L.jsxs("div",{className:"anim-hover-lift",style:{background:"var(--bg-card)",backdropFilter:"var(--glass)",WebkitBackdropFilter:"var(--glass)",border:"1px solid var(--border-glass)",padding:"30px",borderRadius:"var(--radius-lg)",boxShadow:"var(--shadow)",position:"relative",height:"100%"},children:[L.jsx("div",{style:{position:"absolute",top:"20px",right:"24px",fontSize:"2.5rem",fontWeight:900,opacity:.07,fontFamily:"'Outfit', sans-serif"},children:s.num}),L.jsxs("h3",{style:{fontSize:"1.15rem",fontWeight:700,marginBottom:"12px",display:"flex",alignItems:"center",gap:"8px"},children:[L.jsx(V_,{size:18,className:"text-success"})," ",s.title]}),L.jsx("p",{style:{fontSize:"0.88rem",color:"var(--text-secondary)",lineHeight:1.55,margin:0},children:s.desc})]})},o))})]})})]}),L.jsxs("footer",{style:{background:"var(--bg-card)",backdropFilter:"var(--glass)",WebkitBackdropFilter:"var(--glass)",borderTop:"1px solid var(--border-glass)",padding:"60px 40px 30px 40px",position:"relative",zIndex:10,boxShadow:"0 -8px 32px rgba(6, 182, 212, 0.03)"},children:[L.jsx("div",{className:"mobile-footer-logo",children:L.jsx("div",{className:"panel-icon primary",style:{width:"32px",height:"32px",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"16px"},children:L.jsx(Tl,{size:16})})}),L.jsxs("div",{className:"landing-footer-grid",children:[L.jsxs("div",{children:[L.jsxs(Xm,{to:"/",style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"16px",textDecoration:"none",color:"inherit"},children:[L.jsx("div",{className:"desktop-footer-logo-icon panel-icon primary",style:{width:"32px",height:"32px",display:"flex",alignItems:"center",justifyContent:"center"},children:L.jsx(Tl,{size:16})}),L.jsx("span",{style:{fontWeight:800,fontSize:"1.2rem",letterSpacing:"-0.02em",background:"linear-gradient(135deg, var(--text), var(--accent))",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"Diamond"})]}),L.jsx("p",{style:{fontSize:"0.85rem",color:"var(--text-secondary)",lineHeight:1.6,margin:0},children:"State-of-the-art diamond spreadsheet processing and operations management portal designed specifically for global merchants and manufacturers."})]}),L.jsxs("div",{children:[L.jsx("h4",{style:{fontSize:"0.9rem",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:"16px"},children:"System Portals"}),L.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px",fontSize:"0.85rem"},children:[L.jsx("button",{onClick:()=>n("client"),className:"footer-portal-btn",children:"Client Portal Login"}),L.jsx("button",{onClick:()=>n("admin"),className:"footer-portal-btn",children:"Admin Control Center"})]})]}),L.jsxs("div",{children:[L.jsx("h4",{style:{fontSize:"0.9rem",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:"16px"},children:"Company Resources"}),L.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px",fontSize:"0.85rem"},children:[L.jsx("span",{style:{color:"var(--text-secondary)"},children:"File Formatting Guides"}),L.jsx("span",{style:{color:"var(--text-secondary)"},children:"Spreadsheet Schema Specs"}),L.jsx("span",{style:{color:"var(--text-secondary)"},children:"Data Integration Manual"})]})]}),L.jsxs("div",{children:[L.jsx("h4",{style:{fontSize:"0.9rem",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:"16px"},children:"Operating Hours"}),L.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px",fontSize:"0.85rem",color:"var(--text-secondary)"},children:[L.jsxs("span",{children:["Monday – Friday: ",L.jsx("strong",{children:"9:00 AM – 6:00 PM"})]}),L.jsxs("span",{children:["Saturday: ",L.jsx("strong",{children:"9:00 AM – 2:00 PM"})]}),L.jsxs("span",{children:["Sunday: ",L.jsx("strong",{children:"Closed"})]}),L.jsxs("span",{children:["Timezone: ",L.jsx("strong",{children:"India (GMT+5:30)"})]})]})]})]}),L.jsxs("div",{style:{borderTop:"1px solid var(--border-light)",paddingTop:"24px",textAlign:"center",fontSize:"0.8rem",color:"var(--text-secondary)",display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:"16px",maxWidth:"1200px",margin:"0 auto"},children:[L.jsxs("span",{children:["© ",new Date().getFullYear()," Diamond System. All rights reserved."]}),L.jsxs("div",{style:{display:"flex",gap:"20px"},children:[L.jsx("span",{children:"Privacy Policy"}),L.jsx("span",{children:"Terms of Service"}),L.jsx("span",{children:"Security Statement"})]})]})]}),t.isOpen&&L.jsx(Yf,{mode:t.mode,isModal:!0,onClose:()=>e({isOpen:!1,mode:"client"})})]})}const t2=te.lazy(()=>k_(()=>import("./AdminDashboardPage-C8sNkmRt.js"),__vite__mapDeps([0,1]))),n2=te.lazy(()=>k_(()=>import("./UserDashboardPage-2ZMJOFRd.js"),__vite__mapDeps([2,1])));function g0({children:t,adminOnly:e=!1}){const n=localStorage.getItem("token"),i=localStorage.getItem("is_admin")==="true";return n?e&&!i?L.jsx(ac,{to:"/dashboard",replace:!0}):t:L.jsx(ac,{to:"/login/client",replace:!0})}function i2(){return te.useEffect(()=>{const t=localStorage.getItem("theme")||"dark";document.documentElement.setAttribute("data-theme",t)},[]),L.jsx(te.Suspense,{fallback:L.jsx("div",{style:{padding:"1rem"},children:"Loading..."}),children:L.jsxs(xE,{children:[L.jsx(Pi,{path:"/",element:L.jsx(m0,{})}),L.jsx(Pi,{path:"/index",element:L.jsx(m0,{})}),L.jsx(Pi,{path:"/login/client",element:L.jsx(Yf,{mode:"client"})}),L.jsx(Pi,{path:"/login/admin",element:L.jsx(Yf,{mode:"admin"})}),L.jsx(Pi,{path:"/login",element:L.jsx(ac,{to:"/login/client",replace:!0})}),L.jsx(Pi,{path:"/dashboard",element:L.jsx(g0,{children:L.jsx(n2,{})})}),L.jsx(Pi,{path:"/admin",element:L.jsx(g0,{adminOnly:!0,children:L.jsx(t2,{})})}),L.jsx(Pi,{path:"*",element:L.jsx(ac,{to:"/",replace:!0})})]})})}nd.createRoot(document.getElementById("root")).render(L.jsx(b0.StrictMode,{children:L.jsx(AE,{future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:L.jsx(i2,{})})}));export{V_ as C,_u as E,b0 as R,Mx as T,Ht as a,w2 as b,Dn as c,vu as d,r2 as e,ey as g,L as j,te as r,Nc as u};
