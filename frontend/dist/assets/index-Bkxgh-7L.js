const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AdminDashboardPage-B8y0Cujj.js","assets/CustomDatePicker-qkQobAgS.js","assets/UserDashboardPage-yxZMwk7N.js"])))=>i.map(i=>d[i]);
function Jx(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var r2=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Qx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var g0={exports:{}},pc={},v0={exports:{}},Ze={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ca=Symbol.for("react.element"),ey=Symbol.for("react.portal"),ty=Symbol.for("react.fragment"),ny=Symbol.for("react.strict_mode"),iy=Symbol.for("react.profiler"),ry=Symbol.for("react.provider"),sy=Symbol.for("react.context"),oy=Symbol.for("react.forward_ref"),ay=Symbol.for("react.suspense"),ly=Symbol.for("react.memo"),cy=Symbol.for("react.lazy"),Cp=Symbol.iterator;function uy(t){return t===null||typeof t!="object"?null:(t=Cp&&t[Cp]||t["@@iterator"],typeof t=="function"?t:null)}var _0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x0=Object.assign,y0={};function eo(t,e,n){this.props=t,this.context=e,this.refs=y0,this.updater=n||_0}eo.prototype.isReactComponent={};eo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};eo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function S0(){}S0.prototype=eo.prototype;function Yf(t,e,n){this.props=t,this.context=e,this.refs=y0,this.updater=n||_0}var Kf=Yf.prototype=new S0;Kf.constructor=Yf;x0(Kf,eo.prototype);Kf.isPureReactComponent=!0;var Pp=Array.isArray,M0=Object.prototype.hasOwnProperty,Zf={current:null},E0={key:!0,ref:!0,__self:!0,__source:!0};function w0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)M0.call(e,i)&&!E0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ca,type:t,key:s,ref:o,props:r,_owner:Zf.current}}function dy(t,e){return{$$typeof:ca,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Jf(t){return typeof t=="object"&&t!==null&&t.$$typeof===ca}function fy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Lp=/\/+/g;function Gc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?fy(""+t.key):e.toString(36)}function hl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ca:case ey:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Gc(o,0):i,Pp(r)?(n="",t!=null&&(n=t.replace(Lp,"$&/")+"/"),hl(r,e,n,"",function(c){return c})):r!=null&&(Jf(r)&&(r=dy(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Lp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Pp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Gc(s,a);o+=hl(s,e,n,l,r)}else if(l=uy(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Gc(s,a++),o+=hl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Aa(t,e,n){if(t==null)return t;var i=[],r=0;return hl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function hy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var un={current:null},pl={transition:null},py={ReactCurrentDispatcher:un,ReactCurrentBatchConfig:pl,ReactCurrentOwner:Zf};function T0(){throw Error("act(...) is not supported in production builds of React.")}Ze.Children={map:Aa,forEach:function(t,e,n){Aa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Aa(t,function(){e++}),e},toArray:function(t){return Aa(t,function(e){return e})||[]},only:function(t){if(!Jf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ze.Component=eo;Ze.Fragment=ty;Ze.Profiler=iy;Ze.PureComponent=Yf;Ze.StrictMode=ny;Ze.Suspense=ay;Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=py;Ze.act=T0;Ze.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=x0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Zf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)M0.call(e,l)&&!E0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ca,type:t.type,key:r,ref:s,props:i,_owner:o}};Ze.createContext=function(t){return t={$$typeof:sy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ry,_context:t},t.Consumer=t};Ze.createElement=w0;Ze.createFactory=function(t){var e=w0.bind(null,t);return e.type=t,e};Ze.createRef=function(){return{current:null}};Ze.forwardRef=function(t){return{$$typeof:oy,render:t}};Ze.isValidElement=Jf;Ze.lazy=function(t){return{$$typeof:cy,_payload:{_status:-1,_result:t},_init:hy}};Ze.memo=function(t,e){return{$$typeof:ly,type:t,compare:e===void 0?null:e}};Ze.startTransition=function(t){var e=pl.transition;pl.transition={};try{t()}finally{pl.transition=e}};Ze.unstable_act=T0;Ze.useCallback=function(t,e){return un.current.useCallback(t,e)};Ze.useContext=function(t){return un.current.useContext(t)};Ze.useDebugValue=function(){};Ze.useDeferredValue=function(t){return un.current.useDeferredValue(t)};Ze.useEffect=function(t,e){return un.current.useEffect(t,e)};Ze.useId=function(){return un.current.useId()};Ze.useImperativeHandle=function(t,e,n){return un.current.useImperativeHandle(t,e,n)};Ze.useInsertionEffect=function(t,e){return un.current.useInsertionEffect(t,e)};Ze.useLayoutEffect=function(t,e){return un.current.useLayoutEffect(t,e)};Ze.useMemo=function(t,e){return un.current.useMemo(t,e)};Ze.useReducer=function(t,e,n){return un.current.useReducer(t,e,n)};Ze.useRef=function(t){return un.current.useRef(t)};Ze.useState=function(t){return un.current.useState(t)};Ze.useSyncExternalStore=function(t,e,n){return un.current.useSyncExternalStore(t,e,n)};Ze.useTransition=function(){return un.current.useTransition()};Ze.version="18.3.1";v0.exports=Ze;var te=v0.exports;const A0=Qx(te),my=Jx({__proto__:null,default:A0},[te]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gy=te,vy=Symbol.for("react.element"),_y=Symbol.for("react.fragment"),xy=Object.prototype.hasOwnProperty,yy=gy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Sy={key:!0,ref:!0,__self:!0,__source:!0};function b0(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)xy.call(e,i)&&!Sy.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:vy,type:t,key:s,ref:o,props:r,_owner:yy.current}}pc.Fragment=_y;pc.jsx=b0;pc.jsxs=b0;g0.exports=pc;var N=g0.exports,td={},R0={exports:{}},Ln={},C0={exports:{}},P0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,q){var Z=O.length;O.push(q);e:for(;0<Z;){var ie=Z-1>>>1,le=O[ie];if(0<r(le,q))O[ie]=q,O[Z]=le,Z=ie;else break e}}function n(O){return O.length===0?null:O[0]}function i(O){if(O.length===0)return null;var q=O[0],Z=O.pop();if(Z!==q){O[0]=Z;e:for(var ie=0,le=O.length,Ue=le>>>1;ie<Ue;){var Fe=2*(ie+1)-1,ce=O[Fe],Y=Fe+1,ae=O[Y];if(0>r(ce,Z))Y<le&&0>r(ae,ce)?(O[ie]=ae,O[Y]=Z,ie=Y):(O[ie]=ce,O[Fe]=Z,ie=Fe);else if(Y<le&&0>r(ae,Z))O[ie]=ae,O[Y]=Z,ie=Y;else break e}}return q}function r(O,q){var Z=O.sortIndex-q.sortIndex;return Z!==0?Z:O.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,f=null,d=3,v=!1,g=!1,y=!1,p=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(O){for(var q=n(c);q!==null;){if(q.callback===null)i(c);else if(q.startTime<=O)i(c),q.sortIndex=q.expirationTime,e(l,q);else break;q=n(c)}}function M(O){if(y=!1,_(O),!g)if(n(l)!==null)g=!0,B(T);else{var q=n(c);q!==null&&G(M,q.startTime-O)}}function T(O,q){g=!1,y&&(y=!1,h(x),x=-1),v=!0;var Z=d;try{for(_(q),f=n(l);f!==null&&(!(f.expirationTime>q)||O&&!L());){var ie=f.callback;if(typeof ie=="function"){f.callback=null,d=f.priorityLevel;var le=ie(f.expirationTime<=q);q=t.unstable_now(),typeof le=="function"?f.callback=le:f===n(l)&&i(l),_(q)}else i(l);f=n(l)}if(f!==null)var Ue=!0;else{var Fe=n(c);Fe!==null&&G(M,Fe.startTime-q),Ue=!1}return Ue}finally{f=null,d=Z,v=!1}}var w=!1,R=null,x=-1,b=5,P=-1;function L(){return!(t.unstable_now()-P<b)}function U(){if(R!==null){var O=t.unstable_now();P=O;var q=!0;try{q=R(!0,O)}finally{q?$():(w=!1,R=null)}}else w=!1}var $;if(typeof m=="function")$=function(){m(U)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,I=j.port2;j.port1.onmessage=U,$=function(){I.postMessage(null)}}else $=function(){p(U,0)};function B(O){R=O,w||(w=!0,$())}function G(O,q){x=p(function(){O(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){g||v||(g=!0,B(T))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(O){switch(d){case 1:case 2:case 3:var q=3;break;default:q=d}var Z=d;d=q;try{return O()}finally{d=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,q){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var Z=d;d=O;try{return q()}finally{d=Z}},t.unstable_scheduleCallback=function(O,q,Z){var ie=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ie+Z:ie):Z=ie,O){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=Z+le,O={id:u++,callback:q,priorityLevel:O,startTime:Z,expirationTime:le,sortIndex:-1},Z>ie?(O.sortIndex=Z,e(c,O),n(l)===null&&O===n(c)&&(y?(h(x),x=-1):y=!0,G(M,Z-ie))):(O.sortIndex=le,e(l,O),g||v||(g=!0,B(T))),O},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(O){var q=d;return function(){var Z=d;d=q;try{return O.apply(this,arguments)}finally{d=Z}}}})(P0);C0.exports=P0;var My=C0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ey=te,Pn=My;function oe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var L0=new Set,Vo={};function ts(t,e){Hs(t,e),Hs(t+"Capture",e)}function Hs(t,e){for(Vo[t]=e,t=0;t<e.length;t++)L0.add(e[t])}var Bi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nd=Object.prototype.hasOwnProperty,wy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Np={},Dp={};function Ty(t){return nd.call(Dp,t)?!0:nd.call(Np,t)?!1:wy.test(t)?Dp[t]=!0:(Np[t]=!0,!1)}function Ay(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function by(t,e,n,i){if(e===null||typeof e>"u"||Ay(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function dn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var $t={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){$t[t]=new dn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];$t[e]=new dn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){$t[t]=new dn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){$t[t]=new dn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){$t[t]=new dn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){$t[t]=new dn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){$t[t]=new dn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){$t[t]=new dn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){$t[t]=new dn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Qf=/[\-:]([a-z])/g;function eh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Qf,eh);$t[e]=new dn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Qf,eh);$t[e]=new dn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Qf,eh);$t[e]=new dn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){$t[t]=new dn(t,1,!1,t.toLowerCase(),null,!1,!1)});$t.xlinkHref=new dn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){$t[t]=new dn(t,1,!1,t.toLowerCase(),null,!0,!0)});function th(t,e,n,i){var r=$t.hasOwnProperty(e)?$t[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(by(e,n,r,i)&&(n=null),i||r===null?Ty(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Wi=Ey.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ba=Symbol.for("react.element"),Ms=Symbol.for("react.portal"),Es=Symbol.for("react.fragment"),nh=Symbol.for("react.strict_mode"),id=Symbol.for("react.profiler"),N0=Symbol.for("react.provider"),D0=Symbol.for("react.context"),ih=Symbol.for("react.forward_ref"),rd=Symbol.for("react.suspense"),sd=Symbol.for("react.suspense_list"),rh=Symbol.for("react.memo"),tr=Symbol.for("react.lazy"),I0=Symbol.for("react.offscreen"),Ip=Symbol.iterator;function lo(t){return t===null||typeof t!="object"?null:(t=Ip&&t[Ip]||t["@@iterator"],typeof t=="function"?t:null)}var wt=Object.assign,Wc;function To(t){if(Wc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Wc=e&&e[1]||""}return`
`+Wc+t}var jc=!1;function Xc(t,e){if(!t||jc)return"";jc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{jc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?To(t):""}function Ry(t){switch(t.tag){case 5:return To(t.type);case 16:return To("Lazy");case 13:return To("Suspense");case 19:return To("SuspenseList");case 0:case 2:case 15:return t=Xc(t.type,!1),t;case 11:return t=Xc(t.type.render,!1),t;case 1:return t=Xc(t.type,!0),t;default:return""}}function od(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Es:return"Fragment";case Ms:return"Portal";case id:return"Profiler";case nh:return"StrictMode";case rd:return"Suspense";case sd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case D0:return(t.displayName||"Context")+".Consumer";case N0:return(t._context.displayName||"Context")+".Provider";case ih:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case rh:return e=t.displayName||null,e!==null?e:od(t.type)||"Memo";case tr:e=t._payload,t=t._init;try{return od(t(e))}catch{}}return null}function Cy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return od(e);case 8:return e===nh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function xr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function U0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Py(t){var e=U0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ra(t){t._valueTracker||(t._valueTracker=Py(t))}function F0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=U0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Fl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ad(t,e){var n=e.checked;return wt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Up(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=xr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function O0(t,e){e=e.checked,e!=null&&th(t,"checked",e,!1)}function ld(t,e){O0(t,e);var n=xr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?cd(t,e.type,n):e.hasOwnProperty("defaultValue")&&cd(t,e.type,xr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Fp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function cd(t,e,n){(e!=="number"||Fl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ao=Array.isArray;function Is(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+xr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function ud(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(oe(91));return wt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Op(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(oe(92));if(Ao(n)){if(1<n.length)throw Error(oe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:xr(n)}}function B0(t,e){var n=xr(e.value),i=xr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Bp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function k0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function dd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?k0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ca,z0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ca=Ca||document.createElement("div"),Ca.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ca.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ho(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var No={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ly=["Webkit","ms","Moz","O"];Object.keys(No).forEach(function(t){Ly.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),No[e]=No[t]})});function V0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||No.hasOwnProperty(t)&&No[t]?(""+e).trim():e+"px"}function H0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=V0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Ny=wt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fd(t,e){if(e){if(Ny[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(oe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(oe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(oe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(oe(62))}}function hd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pd=null;function sh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var md=null,Us=null,Fs=null;function kp(t){if(t=fa(t)){if(typeof md!="function")throw Error(oe(280));var e=t.stateNode;e&&(e=xc(e),md(t.stateNode,t.type,e))}}function G0(t){Us?Fs?Fs.push(t):Fs=[t]:Us=t}function W0(){if(Us){var t=Us,e=Fs;if(Fs=Us=null,kp(t),e)for(t=0;t<e.length;t++)kp(e[t])}}function j0(t,e){return t(e)}function X0(){}var qc=!1;function q0(t,e,n){if(qc)return t(e,n);qc=!0;try{return j0(t,e,n)}finally{qc=!1,(Us!==null||Fs!==null)&&(X0(),W0())}}function Go(t,e){var n=t.stateNode;if(n===null)return null;var i=xc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(oe(231,e,typeof n));return n}var gd=!1;if(Bi)try{var co={};Object.defineProperty(co,"passive",{get:function(){gd=!0}}),window.addEventListener("test",co,co),window.removeEventListener("test",co,co)}catch{gd=!1}function Dy(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Do=!1,Ol=null,Bl=!1,vd=null,Iy={onError:function(t){Do=!0,Ol=t}};function Uy(t,e,n,i,r,s,o,a,l){Do=!1,Ol=null,Dy.apply(Iy,arguments)}function Fy(t,e,n,i,r,s,o,a,l){if(Uy.apply(this,arguments),Do){if(Do){var c=Ol;Do=!1,Ol=null}else throw Error(oe(198));Bl||(Bl=!0,vd=c)}}function ns(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function $0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function zp(t){if(ns(t)!==t)throw Error(oe(188))}function Oy(t){var e=t.alternate;if(!e){if(e=ns(t),e===null)throw Error(oe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return zp(r),t;if(s===i)return zp(r),e;s=s.sibling}throw Error(oe(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(oe(189))}}if(n.alternate!==i)throw Error(oe(190))}if(n.tag!==3)throw Error(oe(188));return n.stateNode.current===n?t:e}function Y0(t){return t=Oy(t),t!==null?K0(t):null}function K0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=K0(t);if(e!==null)return e;t=t.sibling}return null}var Z0=Pn.unstable_scheduleCallback,Vp=Pn.unstable_cancelCallback,By=Pn.unstable_shouldYield,ky=Pn.unstable_requestPaint,Lt=Pn.unstable_now,zy=Pn.unstable_getCurrentPriorityLevel,oh=Pn.unstable_ImmediatePriority,J0=Pn.unstable_UserBlockingPriority,kl=Pn.unstable_NormalPriority,Vy=Pn.unstable_LowPriority,Q0=Pn.unstable_IdlePriority,mc=null,vi=null;function Hy(t){if(vi&&typeof vi.onCommitFiberRoot=="function")try{vi.onCommitFiberRoot(mc,t,void 0,(t.current.flags&128)===128)}catch{}}var ei=Math.clz32?Math.clz32:jy,Gy=Math.log,Wy=Math.LN2;function jy(t){return t>>>=0,t===0?32:31-(Gy(t)/Wy|0)|0}var Pa=64,La=4194304;function bo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function zl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=bo(a):(s&=o,s!==0&&(i=bo(s)))}else o=n&~r,o!==0?i=bo(o):s!==0&&(i=bo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ei(e),r=1<<n,i|=t[n],e&=~r;return i}function Xy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qy(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ei(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Xy(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function _d(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ev(){var t=Pa;return Pa<<=1,!(Pa&4194240)&&(Pa=64),t}function $c(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ua(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ei(e),t[e]=n}function $y(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ei(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function ah(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ei(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ct=0;function tv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var nv,lh,iv,rv,sv,xd=!1,Na=[],ur=null,dr=null,fr=null,Wo=new Map,jo=new Map,ir=[],Yy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hp(t,e){switch(t){case"focusin":case"focusout":ur=null;break;case"dragenter":case"dragleave":dr=null;break;case"mouseover":case"mouseout":fr=null;break;case"pointerover":case"pointerout":Wo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":jo.delete(e.pointerId)}}function uo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=fa(e),e!==null&&lh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Ky(t,e,n,i,r){switch(e){case"focusin":return ur=uo(ur,t,e,n,i,r),!0;case"dragenter":return dr=uo(dr,t,e,n,i,r),!0;case"mouseover":return fr=uo(fr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Wo.set(s,uo(Wo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,jo.set(s,uo(jo.get(s)||null,t,e,n,i,r)),!0}return!1}function ov(t){var e=Br(t.target);if(e!==null){var n=ns(e);if(n!==null){if(e=n.tag,e===13){if(e=$0(n),e!==null){t.blockedOn=e,sv(t.priority,function(){iv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ml(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=yd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);pd=i,n.target.dispatchEvent(i),pd=null}else return e=fa(n),e!==null&&lh(e),t.blockedOn=n,!1;e.shift()}return!0}function Gp(t,e,n){ml(t)&&n.delete(e)}function Zy(){xd=!1,ur!==null&&ml(ur)&&(ur=null),dr!==null&&ml(dr)&&(dr=null),fr!==null&&ml(fr)&&(fr=null),Wo.forEach(Gp),jo.forEach(Gp)}function fo(t,e){t.blockedOn===e&&(t.blockedOn=null,xd||(xd=!0,Pn.unstable_scheduleCallback(Pn.unstable_NormalPriority,Zy)))}function Xo(t){function e(r){return fo(r,t)}if(0<Na.length){fo(Na[0],t);for(var n=1;n<Na.length;n++){var i=Na[n];i.blockedOn===t&&(i.blockedOn=null)}}for(ur!==null&&fo(ur,t),dr!==null&&fo(dr,t),fr!==null&&fo(fr,t),Wo.forEach(e),jo.forEach(e),n=0;n<ir.length;n++)i=ir[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<ir.length&&(n=ir[0],n.blockedOn===null);)ov(n),n.blockedOn===null&&ir.shift()}var Os=Wi.ReactCurrentBatchConfig,Vl=!0;function Jy(t,e,n,i){var r=ct,s=Os.transition;Os.transition=null;try{ct=1,ch(t,e,n,i)}finally{ct=r,Os.transition=s}}function Qy(t,e,n,i){var r=ct,s=Os.transition;Os.transition=null;try{ct=4,ch(t,e,n,i)}finally{ct=r,Os.transition=s}}function ch(t,e,n,i){if(Vl){var r=yd(t,e,n,i);if(r===null)ru(t,e,i,Hl,n),Hp(t,i);else if(Ky(r,t,e,n,i))i.stopPropagation();else if(Hp(t,i),e&4&&-1<Yy.indexOf(t)){for(;r!==null;){var s=fa(r);if(s!==null&&nv(s),s=yd(t,e,n,i),s===null&&ru(t,e,i,Hl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else ru(t,e,i,null,n)}}var Hl=null;function yd(t,e,n,i){if(Hl=null,t=sh(i),t=Br(t),t!==null)if(e=ns(t),e===null)t=null;else if(n=e.tag,n===13){if(t=$0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Hl=t,null}function av(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(zy()){case oh:return 1;case J0:return 4;case kl:case Vy:return 16;case Q0:return 536870912;default:return 16}default:return 16}}var or=null,uh=null,gl=null;function lv(){if(gl)return gl;var t,e=uh,n=e.length,i,r="value"in or?or.value:or.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return gl=r.slice(t,1<i?1-i:void 0)}function vl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Da(){return!0}function Wp(){return!1}function Nn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Da:Wp,this.isPropagationStopped=Wp,this}return wt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Da)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Da)},persist:function(){},isPersistent:Da}),e}var to={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dh=Nn(to),da=wt({},to,{view:0,detail:0}),eS=Nn(da),Yc,Kc,ho,gc=wt({},da,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ho&&(ho&&t.type==="mousemove"?(Yc=t.screenX-ho.screenX,Kc=t.screenY-ho.screenY):Kc=Yc=0,ho=t),Yc)},movementY:function(t){return"movementY"in t?t.movementY:Kc}}),jp=Nn(gc),tS=wt({},gc,{dataTransfer:0}),nS=Nn(tS),iS=wt({},da,{relatedTarget:0}),Zc=Nn(iS),rS=wt({},to,{animationName:0,elapsedTime:0,pseudoElement:0}),sS=Nn(rS),oS=wt({},to,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),aS=Nn(oS),lS=wt({},to,{data:0}),Xp=Nn(lS),cS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=dS[t])?!!e[t]:!1}function fh(){return fS}var hS=wt({},da,{key:function(t){if(t.key){var e=cS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=vl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?uS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fh,charCode:function(t){return t.type==="keypress"?vl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?vl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),pS=Nn(hS),mS=wt({},gc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qp=Nn(mS),gS=wt({},da,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fh}),vS=Nn(gS),_S=wt({},to,{propertyName:0,elapsedTime:0,pseudoElement:0}),xS=Nn(_S),yS=wt({},gc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),SS=Nn(yS),MS=[9,13,27,32],hh=Bi&&"CompositionEvent"in window,Io=null;Bi&&"documentMode"in document&&(Io=document.documentMode);var ES=Bi&&"TextEvent"in window&&!Io,cv=Bi&&(!hh||Io&&8<Io&&11>=Io),$p=" ",Yp=!1;function uv(t,e){switch(t){case"keyup":return MS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ws=!1;function wS(t,e){switch(t){case"compositionend":return dv(e);case"keypress":return e.which!==32?null:(Yp=!0,$p);case"textInput":return t=e.data,t===$p&&Yp?null:t;default:return null}}function TS(t,e){if(ws)return t==="compositionend"||!hh&&uv(t,e)?(t=lv(),gl=uh=or=null,ws=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return cv&&e.locale!=="ko"?null:e.data;default:return null}}var AS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!AS[t.type]:e==="textarea"}function fv(t,e,n,i){G0(i),e=Gl(e,"onChange"),0<e.length&&(n=new dh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Uo=null,qo=null;function bS(t){Ev(t,0)}function vc(t){var e=bs(t);if(F0(e))return t}function RS(t,e){if(t==="change")return e}var hv=!1;if(Bi){var Jc;if(Bi){var Qc="oninput"in document;if(!Qc){var Zp=document.createElement("div");Zp.setAttribute("oninput","return;"),Qc=typeof Zp.oninput=="function"}Jc=Qc}else Jc=!1;hv=Jc&&(!document.documentMode||9<document.documentMode)}function Jp(){Uo&&(Uo.detachEvent("onpropertychange",pv),qo=Uo=null)}function pv(t){if(t.propertyName==="value"&&vc(qo)){var e=[];fv(e,qo,t,sh(t)),q0(bS,e)}}function CS(t,e,n){t==="focusin"?(Jp(),Uo=e,qo=n,Uo.attachEvent("onpropertychange",pv)):t==="focusout"&&Jp()}function PS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return vc(qo)}function LS(t,e){if(t==="click")return vc(e)}function NS(t,e){if(t==="input"||t==="change")return vc(e)}function DS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ni=typeof Object.is=="function"?Object.is:DS;function $o(t,e){if(ni(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!nd.call(e,r)||!ni(t[r],e[r]))return!1}return!0}function Qp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function em(t,e){var n=Qp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qp(n)}}function mv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?mv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function gv(){for(var t=window,e=Fl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Fl(t.document)}return e}function ph(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function IS(t){var e=gv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&mv(n.ownerDocument.documentElement,n)){if(i!==null&&ph(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=em(n,s);var o=em(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var US=Bi&&"documentMode"in document&&11>=document.documentMode,Ts=null,Sd=null,Fo=null,Md=!1;function tm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Md||Ts==null||Ts!==Fl(i)||(i=Ts,"selectionStart"in i&&ph(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Fo&&$o(Fo,i)||(Fo=i,i=Gl(Sd,"onSelect"),0<i.length&&(e=new dh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ts)))}function Ia(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var As={animationend:Ia("Animation","AnimationEnd"),animationiteration:Ia("Animation","AnimationIteration"),animationstart:Ia("Animation","AnimationStart"),transitionend:Ia("Transition","TransitionEnd")},eu={},vv={};Bi&&(vv=document.createElement("div").style,"AnimationEvent"in window||(delete As.animationend.animation,delete As.animationiteration.animation,delete As.animationstart.animation),"TransitionEvent"in window||delete As.transitionend.transition);function _c(t){if(eu[t])return eu[t];if(!As[t])return t;var e=As[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in vv)return eu[t]=e[n];return t}var _v=_c("animationend"),xv=_c("animationiteration"),yv=_c("animationstart"),Sv=_c("transitionend"),Mv=new Map,nm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Er(t,e){Mv.set(t,e),ts(e,[t])}for(var tu=0;tu<nm.length;tu++){var nu=nm[tu],FS=nu.toLowerCase(),OS=nu[0].toUpperCase()+nu.slice(1);Er(FS,"on"+OS)}Er(_v,"onAnimationEnd");Er(xv,"onAnimationIteration");Er(yv,"onAnimationStart");Er("dblclick","onDoubleClick");Er("focusin","onFocus");Er("focusout","onBlur");Er(Sv,"onTransitionEnd");Hs("onMouseEnter",["mouseout","mouseover"]);Hs("onMouseLeave",["mouseout","mouseover"]);Hs("onPointerEnter",["pointerout","pointerover"]);Hs("onPointerLeave",["pointerout","pointerover"]);ts("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ts("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ts("onBeforeInput",["compositionend","keypress","textInput","paste"]);ts("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ts("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ts("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),BS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ro));function im(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Fy(i,e,void 0,t),t.currentTarget=null}function Ev(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;im(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;im(r,a,c),s=l}}}if(Bl)throw t=vd,Bl=!1,vd=null,t}function _t(t,e){var n=e[bd];n===void 0&&(n=e[bd]=new Set);var i=t+"__bubble";n.has(i)||(wv(e,t,2,!1),n.add(i))}function iu(t,e,n){var i=0;e&&(i|=4),wv(n,t,i,e)}var Ua="_reactListening"+Math.random().toString(36).slice(2);function Yo(t){if(!t[Ua]){t[Ua]=!0,L0.forEach(function(n){n!=="selectionchange"&&(BS.has(n)||iu(n,!1,t),iu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ua]||(e[Ua]=!0,iu("selectionchange",!1,e))}}function wv(t,e,n,i){switch(av(e)){case 1:var r=Jy;break;case 4:r=Qy;break;default:r=ch}n=r.bind(null,e,n,t),r=void 0,!gd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function ru(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Br(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}q0(function(){var c=s,u=sh(n),f=[];e:{var d=Mv.get(t);if(d!==void 0){var v=dh,g=t;switch(t){case"keypress":if(vl(n)===0)break e;case"keydown":case"keyup":v=pS;break;case"focusin":g="focus",v=Zc;break;case"focusout":g="blur",v=Zc;break;case"beforeblur":case"afterblur":v=Zc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=jp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=nS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=vS;break;case _v:case xv:case yv:v=sS;break;case Sv:v=xS;break;case"scroll":v=eS;break;case"wheel":v=SS;break;case"copy":case"cut":case"paste":v=aS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=qp}var y=(e&4)!==0,p=!y&&t==="scroll",h=y?d!==null?d+"Capture":null:d;y=[];for(var m=c,_;m!==null;){_=m;var M=_.stateNode;if(_.tag===5&&M!==null&&(_=M,h!==null&&(M=Go(m,h),M!=null&&y.push(Ko(m,M,_)))),p)break;m=m.return}0<y.length&&(d=new v(d,g,null,n,u),f.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",d&&n!==pd&&(g=n.relatedTarget||n.fromElement)&&(Br(g)||g[ki]))break e;if((v||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,v?(g=n.relatedTarget||n.toElement,v=c,g=g?Br(g):null,g!==null&&(p=ns(g),g!==p||g.tag!==5&&g.tag!==6)&&(g=null)):(v=null,g=c),v!==g)){if(y=jp,M="onMouseLeave",h="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(y=qp,M="onPointerLeave",h="onPointerEnter",m="pointer"),p=v==null?d:bs(v),_=g==null?d:bs(g),d=new y(M,m+"leave",v,n,u),d.target=p,d.relatedTarget=_,M=null,Br(u)===c&&(y=new y(h,m+"enter",g,n,u),y.target=_,y.relatedTarget=p,M=y),p=M,v&&g)t:{for(y=v,h=g,m=0,_=y;_;_=os(_))m++;for(_=0,M=h;M;M=os(M))_++;for(;0<m-_;)y=os(y),m--;for(;0<_-m;)h=os(h),_--;for(;m--;){if(y===h||h!==null&&y===h.alternate)break t;y=os(y),h=os(h)}y=null}else y=null;v!==null&&rm(f,d,v,y,!1),g!==null&&p!==null&&rm(f,p,g,y,!0)}}e:{if(d=c?bs(c):window,v=d.nodeName&&d.nodeName.toLowerCase(),v==="select"||v==="input"&&d.type==="file")var T=RS;else if(Kp(d))if(hv)T=NS;else{T=PS;var w=CS}else(v=d.nodeName)&&v.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(T=LS);if(T&&(T=T(t,c))){fv(f,T,n,u);break e}w&&w(t,d,c),t==="focusout"&&(w=d._wrapperState)&&w.controlled&&d.type==="number"&&cd(d,"number",d.value)}switch(w=c?bs(c):window,t){case"focusin":(Kp(w)||w.contentEditable==="true")&&(Ts=w,Sd=c,Fo=null);break;case"focusout":Fo=Sd=Ts=null;break;case"mousedown":Md=!0;break;case"contextmenu":case"mouseup":case"dragend":Md=!1,tm(f,n,u);break;case"selectionchange":if(US)break;case"keydown":case"keyup":tm(f,n,u)}var R;if(hh)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else ws?uv(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(cv&&n.locale!=="ko"&&(ws||x!=="onCompositionStart"?x==="onCompositionEnd"&&ws&&(R=lv()):(or=u,uh="value"in or?or.value:or.textContent,ws=!0)),w=Gl(c,x),0<w.length&&(x=new Xp(x,t,null,n,u),f.push({event:x,listeners:w}),R?x.data=R:(R=dv(n),R!==null&&(x.data=R)))),(R=ES?wS(t,n):TS(t,n))&&(c=Gl(c,"onBeforeInput"),0<c.length&&(u=new Xp("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:c}),u.data=R))}Ev(f,e)})}function Ko(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Gl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Go(t,n),s!=null&&i.unshift(Ko(t,s,r)),s=Go(t,e),s!=null&&i.push(Ko(t,s,r))),t=t.return}return i}function os(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function rm(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Go(n,s),l!=null&&o.unshift(Ko(n,l,a))):r||(l=Go(n,s),l!=null&&o.push(Ko(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var kS=/\r\n?/g,zS=/\u0000|\uFFFD/g;function sm(t){return(typeof t=="string"?t:""+t).replace(kS,`
`).replace(zS,"")}function Fa(t,e,n){if(e=sm(e),sm(t)!==e&&n)throw Error(oe(425))}function Wl(){}var Ed=null,wd=null;function Td(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ad=typeof setTimeout=="function"?setTimeout:void 0,VS=typeof clearTimeout=="function"?clearTimeout:void 0,om=typeof Promise=="function"?Promise:void 0,HS=typeof queueMicrotask=="function"?queueMicrotask:typeof om<"u"?function(t){return om.resolve(null).then(t).catch(GS)}:Ad;function GS(t){setTimeout(function(){throw t})}function su(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Xo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Xo(e)}function hr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function am(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var no=Math.random().toString(36).slice(2),hi="__reactFiber$"+no,Zo="__reactProps$"+no,ki="__reactContainer$"+no,bd="__reactEvents$"+no,WS="__reactListeners$"+no,jS="__reactHandles$"+no;function Br(t){var e=t[hi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ki]||n[hi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=am(t);t!==null;){if(n=t[hi])return n;t=am(t)}return e}t=n,n=t.parentNode}return null}function fa(t){return t=t[hi]||t[ki],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function bs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(oe(33))}function xc(t){return t[Zo]||null}var Rd=[],Rs=-1;function wr(t){return{current:t}}function xt(t){0>Rs||(t.current=Rd[Rs],Rd[Rs]=null,Rs--)}function vt(t,e){Rs++,Rd[Rs]=t.current,t.current=e}var yr={},on=wr(yr),mn=wr(!1),qr=yr;function Gs(t,e){var n=t.type.contextTypes;if(!n)return yr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function gn(t){return t=t.childContextTypes,t!=null}function jl(){xt(mn),xt(on)}function lm(t,e,n){if(on.current!==yr)throw Error(oe(168));vt(on,e),vt(mn,n)}function Tv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(oe(108,Cy(t)||"Unknown",r));return wt({},n,i)}function Xl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||yr,qr=on.current,vt(on,t),vt(mn,mn.current),!0}function cm(t,e,n){var i=t.stateNode;if(!i)throw Error(oe(169));n?(t=Tv(t,e,qr),i.__reactInternalMemoizedMergedChildContext=t,xt(mn),xt(on),vt(on,t)):xt(mn),vt(mn,n)}var Li=null,yc=!1,ou=!1;function Av(t){Li===null?Li=[t]:Li.push(t)}function XS(t){yc=!0,Av(t)}function Tr(){if(!ou&&Li!==null){ou=!0;var t=0,e=ct;try{var n=Li;for(ct=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Li=null,yc=!1}catch(r){throw Li!==null&&(Li=Li.slice(t+1)),Z0(oh,Tr),r}finally{ct=e,ou=!1}}return null}var Cs=[],Ps=0,ql=null,$l=0,Bn=[],kn=0,$r=null,Ni=1,Di="";function Dr(t,e){Cs[Ps++]=$l,Cs[Ps++]=ql,ql=t,$l=e}function bv(t,e,n){Bn[kn++]=Ni,Bn[kn++]=Di,Bn[kn++]=$r,$r=t;var i=Ni;t=Di;var r=32-ei(i)-1;i&=~(1<<r),n+=1;var s=32-ei(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ni=1<<32-ei(e)+r|n<<r|i,Di=s+t}else Ni=1<<s|n<<r|i,Di=t}function mh(t){t.return!==null&&(Dr(t,1),bv(t,1,0))}function gh(t){for(;t===ql;)ql=Cs[--Ps],Cs[Ps]=null,$l=Cs[--Ps],Cs[Ps]=null;for(;t===$r;)$r=Bn[--kn],Bn[kn]=null,Di=Bn[--kn],Bn[kn]=null,Ni=Bn[--kn],Bn[kn]=null}var Rn=null,bn=null,St=!1,Zn=null;function Rv(t,e){var n=Vn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function um(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Rn=t,bn=hr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Rn=t,bn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=$r!==null?{id:Ni,overflow:Di}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Vn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Rn=t,bn=null,!0):!1;default:return!1}}function Cd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Pd(t){if(St){var e=bn;if(e){var n=e;if(!um(t,e)){if(Cd(t))throw Error(oe(418));e=hr(n.nextSibling);var i=Rn;e&&um(t,e)?Rv(i,n):(t.flags=t.flags&-4097|2,St=!1,Rn=t)}}else{if(Cd(t))throw Error(oe(418));t.flags=t.flags&-4097|2,St=!1,Rn=t}}}function dm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Rn=t}function Oa(t){if(t!==Rn)return!1;if(!St)return dm(t),St=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Td(t.type,t.memoizedProps)),e&&(e=bn)){if(Cd(t))throw Cv(),Error(oe(418));for(;e;)Rv(t,e),e=hr(e.nextSibling)}if(dm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(oe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){bn=hr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}bn=null}}else bn=Rn?hr(t.stateNode.nextSibling):null;return!0}function Cv(){for(var t=bn;t;)t=hr(t.nextSibling)}function Ws(){bn=Rn=null,St=!1}function vh(t){Zn===null?Zn=[t]:Zn.push(t)}var qS=Wi.ReactCurrentBatchConfig;function po(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(oe(309));var i=n.stateNode}if(!i)throw Error(oe(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(oe(284));if(!n._owner)throw Error(oe(290,t))}return t}function Ba(t,e){throw t=Object.prototype.toString.call(e),Error(oe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function fm(t){var e=t._init;return e(t._payload)}function Pv(t){function e(h,m){if(t){var _=h.deletions;_===null?(h.deletions=[m],h.flags|=16):_.push(m)}}function n(h,m){if(!t)return null;for(;m!==null;)e(h,m),m=m.sibling;return null}function i(h,m){for(h=new Map;m!==null;)m.key!==null?h.set(m.key,m):h.set(m.index,m),m=m.sibling;return h}function r(h,m){return h=vr(h,m),h.index=0,h.sibling=null,h}function s(h,m,_){return h.index=_,t?(_=h.alternate,_!==null?(_=_.index,_<m?(h.flags|=2,m):_):(h.flags|=2,m)):(h.flags|=1048576,m)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,m,_,M){return m===null||m.tag!==6?(m=hu(_,h.mode,M),m.return=h,m):(m=r(m,_),m.return=h,m)}function l(h,m,_,M){var T=_.type;return T===Es?u(h,m,_.props.children,M,_.key):m!==null&&(m.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===tr&&fm(T)===m.type)?(M=r(m,_.props),M.ref=po(h,m,_),M.return=h,M):(M=wl(_.type,_.key,_.props,null,h.mode,M),M.ref=po(h,m,_),M.return=h,M)}function c(h,m,_,M){return m===null||m.tag!==4||m.stateNode.containerInfo!==_.containerInfo||m.stateNode.implementation!==_.implementation?(m=pu(_,h.mode,M),m.return=h,m):(m=r(m,_.children||[]),m.return=h,m)}function u(h,m,_,M,T){return m===null||m.tag!==7?(m=jr(_,h.mode,M,T),m.return=h,m):(m=r(m,_),m.return=h,m)}function f(h,m,_){if(typeof m=="string"&&m!==""||typeof m=="number")return m=hu(""+m,h.mode,_),m.return=h,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ba:return _=wl(m.type,m.key,m.props,null,h.mode,_),_.ref=po(h,null,m),_.return=h,_;case Ms:return m=pu(m,h.mode,_),m.return=h,m;case tr:var M=m._init;return f(h,M(m._payload),_)}if(Ao(m)||lo(m))return m=jr(m,h.mode,_,null),m.return=h,m;Ba(h,m)}return null}function d(h,m,_,M){var T=m!==null?m.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return T!==null?null:a(h,m,""+_,M);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ba:return _.key===T?l(h,m,_,M):null;case Ms:return _.key===T?c(h,m,_,M):null;case tr:return T=_._init,d(h,m,T(_._payload),M)}if(Ao(_)||lo(_))return T!==null?null:u(h,m,_,M,null);Ba(h,_)}return null}function v(h,m,_,M,T){if(typeof M=="string"&&M!==""||typeof M=="number")return h=h.get(_)||null,a(m,h,""+M,T);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case ba:return h=h.get(M.key===null?_:M.key)||null,l(m,h,M,T);case Ms:return h=h.get(M.key===null?_:M.key)||null,c(m,h,M,T);case tr:var w=M._init;return v(h,m,_,w(M._payload),T)}if(Ao(M)||lo(M))return h=h.get(_)||null,u(m,h,M,T,null);Ba(m,M)}return null}function g(h,m,_,M){for(var T=null,w=null,R=m,x=m=0,b=null;R!==null&&x<_.length;x++){R.index>x?(b=R,R=null):b=R.sibling;var P=d(h,R,_[x],M);if(P===null){R===null&&(R=b);break}t&&R&&P.alternate===null&&e(h,R),m=s(P,m,x),w===null?T=P:w.sibling=P,w=P,R=b}if(x===_.length)return n(h,R),St&&Dr(h,x),T;if(R===null){for(;x<_.length;x++)R=f(h,_[x],M),R!==null&&(m=s(R,m,x),w===null?T=R:w.sibling=R,w=R);return St&&Dr(h,x),T}for(R=i(h,R);x<_.length;x++)b=v(R,h,x,_[x],M),b!==null&&(t&&b.alternate!==null&&R.delete(b.key===null?x:b.key),m=s(b,m,x),w===null?T=b:w.sibling=b,w=b);return t&&R.forEach(function(L){return e(h,L)}),St&&Dr(h,x),T}function y(h,m,_,M){var T=lo(_);if(typeof T!="function")throw Error(oe(150));if(_=T.call(_),_==null)throw Error(oe(151));for(var w=T=null,R=m,x=m=0,b=null,P=_.next();R!==null&&!P.done;x++,P=_.next()){R.index>x?(b=R,R=null):b=R.sibling;var L=d(h,R,P.value,M);if(L===null){R===null&&(R=b);break}t&&R&&L.alternate===null&&e(h,R),m=s(L,m,x),w===null?T=L:w.sibling=L,w=L,R=b}if(P.done)return n(h,R),St&&Dr(h,x),T;if(R===null){for(;!P.done;x++,P=_.next())P=f(h,P.value,M),P!==null&&(m=s(P,m,x),w===null?T=P:w.sibling=P,w=P);return St&&Dr(h,x),T}for(R=i(h,R);!P.done;x++,P=_.next())P=v(R,h,x,P.value,M),P!==null&&(t&&P.alternate!==null&&R.delete(P.key===null?x:P.key),m=s(P,m,x),w===null?T=P:w.sibling=P,w=P);return t&&R.forEach(function(U){return e(h,U)}),St&&Dr(h,x),T}function p(h,m,_,M){if(typeof _=="object"&&_!==null&&_.type===Es&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case ba:e:{for(var T=_.key,w=m;w!==null;){if(w.key===T){if(T=_.type,T===Es){if(w.tag===7){n(h,w.sibling),m=r(w,_.props.children),m.return=h,h=m;break e}}else if(w.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===tr&&fm(T)===w.type){n(h,w.sibling),m=r(w,_.props),m.ref=po(h,w,_),m.return=h,h=m;break e}n(h,w);break}else e(h,w);w=w.sibling}_.type===Es?(m=jr(_.props.children,h.mode,M,_.key),m.return=h,h=m):(M=wl(_.type,_.key,_.props,null,h.mode,M),M.ref=po(h,m,_),M.return=h,h=M)}return o(h);case Ms:e:{for(w=_.key;m!==null;){if(m.key===w)if(m.tag===4&&m.stateNode.containerInfo===_.containerInfo&&m.stateNode.implementation===_.implementation){n(h,m.sibling),m=r(m,_.children||[]),m.return=h,h=m;break e}else{n(h,m);break}else e(h,m);m=m.sibling}m=pu(_,h.mode,M),m.return=h,h=m}return o(h);case tr:return w=_._init,p(h,m,w(_._payload),M)}if(Ao(_))return g(h,m,_,M);if(lo(_))return y(h,m,_,M);Ba(h,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,m!==null&&m.tag===6?(n(h,m.sibling),m=r(m,_),m.return=h,h=m):(n(h,m),m=hu(_,h.mode,M),m.return=h,h=m),o(h)):n(h,m)}return p}var js=Pv(!0),Lv=Pv(!1),Yl=wr(null),Kl=null,Ls=null,_h=null;function xh(){_h=Ls=Kl=null}function yh(t){var e=Yl.current;xt(Yl),t._currentValue=e}function Ld(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Bs(t,e){Kl=t,_h=Ls=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(pn=!0),t.firstContext=null)}function Gn(t){var e=t._currentValue;if(_h!==t)if(t={context:t,memoizedValue:e,next:null},Ls===null){if(Kl===null)throw Error(oe(308));Ls=t,Kl.dependencies={lanes:0,firstContext:t}}else Ls=Ls.next=t;return e}var kr=null;function Sh(t){kr===null?kr=[t]:kr.push(t)}function Nv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Sh(e)):(n.next=r.next,r.next=n),e.interleaved=n,zi(t,i)}function zi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var nr=!1;function Mh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Dv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ui(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function pr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,st&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,zi(t,n)}return r=i.interleaved,r===null?(e.next=e,Sh(i)):(e.next=r.next,r.next=e),i.interleaved=e,zi(t,n)}function _l(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ah(t,n)}}function hm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Zl(t,e,n,i){var r=t.updateQueue;nr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,u=c=l=null,a=s;do{var d=a.lane,v=a.eventTime;if((i&d)===d){u!==null&&(u=u.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,y=a;switch(d=e,v=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){f=g.call(v,f,d);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,d=typeof g=="function"?g.call(v,f,d):g,d==null)break e;f=wt({},f,d);break e;case 2:nr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else v={eventTime:v,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=v,l=f):u=u.next=v,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(u===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Kr|=o,t.lanes=o,t.memoizedState=f}}function pm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(oe(191,r));r.call(i)}}}var ha={},_i=wr(ha),Jo=wr(ha),Qo=wr(ha);function zr(t){if(t===ha)throw Error(oe(174));return t}function Eh(t,e){switch(vt(Qo,e),vt(Jo,t),vt(_i,ha),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:dd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=dd(e,t)}xt(_i),vt(_i,e)}function Xs(){xt(_i),xt(Jo),xt(Qo)}function Iv(t){zr(Qo.current);var e=zr(_i.current),n=dd(e,t.type);e!==n&&(vt(Jo,t),vt(_i,n))}function wh(t){Jo.current===t&&(xt(_i),xt(Jo))}var Mt=wr(0);function Jl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var au=[];function Th(){for(var t=0;t<au.length;t++)au[t]._workInProgressVersionPrimary=null;au.length=0}var xl=Wi.ReactCurrentDispatcher,lu=Wi.ReactCurrentBatchConfig,Yr=0,Et=null,Ot=null,Gt=null,Ql=!1,Oo=!1,ea=0,$S=0;function Kt(){throw Error(oe(321))}function Ah(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ni(t[n],e[n]))return!1;return!0}function bh(t,e,n,i,r,s){if(Yr=s,Et=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,xl.current=t===null||t.memoizedState===null?JS:QS,t=n(i,r),Oo){s=0;do{if(Oo=!1,ea=0,25<=s)throw Error(oe(301));s+=1,Gt=Ot=null,e.updateQueue=null,xl.current=eM,t=n(i,r)}while(Oo)}if(xl.current=ec,e=Ot!==null&&Ot.next!==null,Yr=0,Gt=Ot=Et=null,Ql=!1,e)throw Error(oe(300));return t}function Rh(){var t=ea!==0;return ea=0,t}function di(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Gt===null?Et.memoizedState=Gt=t:Gt=Gt.next=t,Gt}function Wn(){if(Ot===null){var t=Et.alternate;t=t!==null?t.memoizedState:null}else t=Ot.next;var e=Gt===null?Et.memoizedState:Gt.next;if(e!==null)Gt=e,Ot=t;else{if(t===null)throw Error(oe(310));Ot=t,t={memoizedState:Ot.memoizedState,baseState:Ot.baseState,baseQueue:Ot.baseQueue,queue:Ot.queue,next:null},Gt===null?Et.memoizedState=Gt=t:Gt=Gt.next=t}return Gt}function ta(t,e){return typeof e=="function"?e(t):e}function cu(t){var e=Wn(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=Ot,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Yr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,Et.lanes|=u,Kr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,ni(i,e.memoizedState)||(pn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Et.lanes|=s,Kr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function uu(t){var e=Wn(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ni(s,e.memoizedState)||(pn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Uv(){}function Fv(t,e){var n=Et,i=Wn(),r=e(),s=!ni(i.memoizedState,r);if(s&&(i.memoizedState=r,pn=!0),i=i.queue,Ch(kv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Gt!==null&&Gt.memoizedState.tag&1){if(n.flags|=2048,na(9,Bv.bind(null,n,i,r,e),void 0,null),Wt===null)throw Error(oe(349));Yr&30||Ov(n,e,r)}return r}function Ov(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Bv(t,e,n,i){e.value=n,e.getSnapshot=i,zv(e)&&Vv(t)}function kv(t,e,n){return n(function(){zv(e)&&Vv(t)})}function zv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ni(t,n)}catch{return!0}}function Vv(t){var e=zi(t,1);e!==null&&ti(e,t,1,-1)}function mm(t){var e=di();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:t},e.queue=t,t=t.dispatch=ZS.bind(null,Et,t),[e.memoizedState,t]}function na(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Hv(){return Wn().memoizedState}function yl(t,e,n,i){var r=di();Et.flags|=t,r.memoizedState=na(1|e,n,void 0,i===void 0?null:i)}function Sc(t,e,n,i){var r=Wn();i=i===void 0?null:i;var s=void 0;if(Ot!==null){var o=Ot.memoizedState;if(s=o.destroy,i!==null&&Ah(i,o.deps)){r.memoizedState=na(e,n,s,i);return}}Et.flags|=t,r.memoizedState=na(1|e,n,s,i)}function gm(t,e){return yl(8390656,8,t,e)}function Ch(t,e){return Sc(2048,8,t,e)}function Gv(t,e){return Sc(4,2,t,e)}function Wv(t,e){return Sc(4,4,t,e)}function jv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Xv(t,e,n){return n=n!=null?n.concat([t]):null,Sc(4,4,jv.bind(null,e,t),n)}function Ph(){}function qv(t,e){var n=Wn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ah(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function $v(t,e){var n=Wn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ah(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Yv(t,e,n){return Yr&21?(ni(n,e)||(n=ev(),Et.lanes|=n,Kr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,pn=!0),t.memoizedState=n)}function YS(t,e){var n=ct;ct=n!==0&&4>n?n:4,t(!0);var i=lu.transition;lu.transition={};try{t(!1),e()}finally{ct=n,lu.transition=i}}function Kv(){return Wn().memoizedState}function KS(t,e,n){var i=gr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Zv(t))Jv(e,n);else if(n=Nv(t,e,n,i),n!==null){var r=cn();ti(n,t,i,r),Qv(n,e,i)}}function ZS(t,e,n){var i=gr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Zv(t))Jv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ni(a,o)){var l=e.interleaved;l===null?(r.next=r,Sh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Nv(t,e,r,i),n!==null&&(r=cn(),ti(n,t,i,r),Qv(n,e,i))}}function Zv(t){var e=t.alternate;return t===Et||e!==null&&e===Et}function Jv(t,e){Oo=Ql=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Qv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ah(t,n)}}var ec={readContext:Gn,useCallback:Kt,useContext:Kt,useEffect:Kt,useImperativeHandle:Kt,useInsertionEffect:Kt,useLayoutEffect:Kt,useMemo:Kt,useReducer:Kt,useRef:Kt,useState:Kt,useDebugValue:Kt,useDeferredValue:Kt,useTransition:Kt,useMutableSource:Kt,useSyncExternalStore:Kt,useId:Kt,unstable_isNewReconciler:!1},JS={readContext:Gn,useCallback:function(t,e){return di().memoizedState=[t,e===void 0?null:e],t},useContext:Gn,useEffect:gm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,yl(4194308,4,jv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return yl(4194308,4,t,e)},useInsertionEffect:function(t,e){return yl(4,2,t,e)},useMemo:function(t,e){var n=di();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=di();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=KS.bind(null,Et,t),[i.memoizedState,t]},useRef:function(t){var e=di();return t={current:t},e.memoizedState=t},useState:mm,useDebugValue:Ph,useDeferredValue:function(t){return di().memoizedState=t},useTransition:function(){var t=mm(!1),e=t[0];return t=YS.bind(null,t[1]),di().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Et,r=di();if(St){if(n===void 0)throw Error(oe(407));n=n()}else{if(n=e(),Wt===null)throw Error(oe(349));Yr&30||Ov(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,gm(kv.bind(null,i,s,t),[t]),i.flags|=2048,na(9,Bv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=di(),e=Wt.identifierPrefix;if(St){var n=Di,i=Ni;n=(i&~(1<<32-ei(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ea++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=$S++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},QS={readContext:Gn,useCallback:qv,useContext:Gn,useEffect:Ch,useImperativeHandle:Xv,useInsertionEffect:Gv,useLayoutEffect:Wv,useMemo:$v,useReducer:cu,useRef:Hv,useState:function(){return cu(ta)},useDebugValue:Ph,useDeferredValue:function(t){var e=Wn();return Yv(e,Ot.memoizedState,t)},useTransition:function(){var t=cu(ta)[0],e=Wn().memoizedState;return[t,e]},useMutableSource:Uv,useSyncExternalStore:Fv,useId:Kv,unstable_isNewReconciler:!1},eM={readContext:Gn,useCallback:qv,useContext:Gn,useEffect:Ch,useImperativeHandle:Xv,useInsertionEffect:Gv,useLayoutEffect:Wv,useMemo:$v,useReducer:uu,useRef:Hv,useState:function(){return uu(ta)},useDebugValue:Ph,useDeferredValue:function(t){var e=Wn();return Ot===null?e.memoizedState=t:Yv(e,Ot.memoizedState,t)},useTransition:function(){var t=uu(ta)[0],e=Wn().memoizedState;return[t,e]},useMutableSource:Uv,useSyncExternalStore:Fv,useId:Kv,unstable_isNewReconciler:!1};function Yn(t,e){if(t&&t.defaultProps){e=wt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Nd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:wt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Mc={isMounted:function(t){return(t=t._reactInternals)?ns(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=cn(),r=gr(t),s=Ui(i,r);s.payload=e,n!=null&&(s.callback=n),e=pr(t,s,r),e!==null&&(ti(e,t,r,i),_l(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=cn(),r=gr(t),s=Ui(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=pr(t,s,r),e!==null&&(ti(e,t,r,i),_l(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=cn(),i=gr(t),r=Ui(n,i);r.tag=2,e!=null&&(r.callback=e),e=pr(t,r,i),e!==null&&(ti(e,t,i,n),_l(e,t,i))}};function vm(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!$o(n,i)||!$o(r,s):!0}function e_(t,e,n){var i=!1,r=yr,s=e.contextType;return typeof s=="object"&&s!==null?s=Gn(s):(r=gn(e)?qr:on.current,i=e.contextTypes,s=(i=i!=null)?Gs(t,r):yr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Mc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function _m(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Mc.enqueueReplaceState(e,e.state,null)}function Dd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Mh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Gn(s):(s=gn(e)?qr:on.current,r.context=Gs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Nd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Mc.enqueueReplaceState(r,r.state,null),Zl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function qs(t,e){try{var n="",i=e;do n+=Ry(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function du(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Id(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var tM=typeof WeakMap=="function"?WeakMap:Map;function t_(t,e,n){n=Ui(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){nc||(nc=!0,Wd=i),Id(t,e)},n}function n_(t,e,n){n=Ui(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Id(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Id(t,e),typeof i!="function"&&(mr===null?mr=new Set([this]):mr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function xm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new tM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=mM.bind(null,t,e,n),e.then(t,t))}function ym(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Sm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ui(-1,1),e.tag=2,pr(n,e,1))),n.lanes|=1),t)}var nM=Wi.ReactCurrentOwner,pn=!1;function ln(t,e,n,i){e.child=t===null?Lv(e,null,n,i):js(e,t.child,n,i)}function Mm(t,e,n,i,r){n=n.render;var s=e.ref;return Bs(e,r),i=bh(t,e,n,i,s,r),n=Rh(),t!==null&&!pn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Vi(t,e,r)):(St&&n&&mh(e),e.flags|=1,ln(t,e,i,r),e.child)}function Em(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Bh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,i_(t,e,s,i,r)):(t=wl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:$o,n(o,i)&&t.ref===e.ref)return Vi(t,e,r)}return e.flags|=1,t=vr(s,i),t.ref=e.ref,t.return=e,e.child=t}function i_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if($o(s,i)&&t.ref===e.ref)if(pn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(pn=!0);else return e.lanes=t.lanes,Vi(t,e,r)}return Ud(t,e,n,i,r)}function r_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},vt(Ds,Tn),Tn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,vt(Ds,Tn),Tn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,vt(Ds,Tn),Tn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,vt(Ds,Tn),Tn|=i;return ln(t,e,r,n),e.child}function s_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ud(t,e,n,i,r){var s=gn(n)?qr:on.current;return s=Gs(e,s),Bs(e,r),n=bh(t,e,n,i,s,r),i=Rh(),t!==null&&!pn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Vi(t,e,r)):(St&&i&&mh(e),e.flags|=1,ln(t,e,n,r),e.child)}function wm(t,e,n,i,r){if(gn(n)){var s=!0;Xl(e)}else s=!1;if(Bs(e,r),e.stateNode===null)Sl(t,e),e_(e,n,i),Dd(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Gn(c):(c=gn(n)?qr:on.current,c=Gs(e,c));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&_m(e,o,i,c),nr=!1;var d=e.memoizedState;o.state=d,Zl(e,i,o,r),l=e.memoizedState,a!==i||d!==l||mn.current||nr?(typeof u=="function"&&(Nd(e,n,u,i),l=e.memoizedState),(a=nr||vm(e,n,a,i,d,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Dv(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Yn(e.type,a),o.props=c,f=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Gn(l):(l=gn(n)?qr:on.current,l=Gs(e,l));var v=n.getDerivedStateFromProps;(u=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&_m(e,o,i,l),nr=!1,d=e.memoizedState,o.state=d,Zl(e,i,o,r);var g=e.memoizedState;a!==f||d!==g||mn.current||nr?(typeof v=="function"&&(Nd(e,n,v,i),g=e.memoizedState),(c=nr||vm(e,n,c,i,d,g,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Fd(t,e,n,i,s,r)}function Fd(t,e,n,i,r,s){s_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&cm(e,n,!1),Vi(t,e,s);i=e.stateNode,nM.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=js(e,t.child,null,s),e.child=js(e,null,a,s)):ln(t,e,a,s),e.memoizedState=i.state,r&&cm(e,n,!0),e.child}function o_(t){var e=t.stateNode;e.pendingContext?lm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&lm(t,e.context,!1),Eh(t,e.containerInfo)}function Tm(t,e,n,i,r){return Ws(),vh(r),e.flags|=256,ln(t,e,n,i),e.child}var Od={dehydrated:null,treeContext:null,retryLane:0};function Bd(t){return{baseLanes:t,cachePool:null,transitions:null}}function a_(t,e,n){var i=e.pendingProps,r=Mt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),vt(Mt,r&1),t===null)return Pd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Tc(o,i,0,null),t=jr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Bd(n),e.memoizedState=Od,t):Lh(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return iM(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=vr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=vr(a,s):(s=jr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Bd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Od,i}return s=t.child,t=s.sibling,i=vr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Lh(t,e){return e=Tc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ka(t,e,n,i){return i!==null&&vh(i),js(e,t.child,null,n),t=Lh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function iM(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=du(Error(oe(422))),ka(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Tc({mode:"visible",children:i.children},r,0,null),s=jr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&js(e,t.child,null,o),e.child.memoizedState=Bd(o),e.memoizedState=Od,s);if(!(e.mode&1))return ka(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(oe(419)),i=du(s,i,void 0),ka(t,e,o,i)}if(a=(o&t.childLanes)!==0,pn||a){if(i=Wt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,zi(t,r),ti(i,t,r,-1))}return Oh(),i=du(Error(oe(421))),ka(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=gM.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,bn=hr(r.nextSibling),Rn=e,St=!0,Zn=null,t!==null&&(Bn[kn++]=Ni,Bn[kn++]=Di,Bn[kn++]=$r,Ni=t.id,Di=t.overflow,$r=e),e=Lh(e,i.children),e.flags|=4096,e)}function Am(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Ld(t.return,e,n)}function fu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function l_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(ln(t,e,i.children,n),i=Mt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Am(t,n,e);else if(t.tag===19)Am(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(vt(Mt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Jl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),fu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Jl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}fu(e,!0,n,null,s);break;case"together":fu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Sl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Vi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Kr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(oe(153));if(e.child!==null){for(t=e.child,n=vr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=vr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function rM(t,e,n){switch(e.tag){case 3:o_(e),Ws();break;case 5:Iv(e);break;case 1:gn(e.type)&&Xl(e);break;case 4:Eh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;vt(Yl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(vt(Mt,Mt.current&1),e.flags|=128,null):n&e.child.childLanes?a_(t,e,n):(vt(Mt,Mt.current&1),t=Vi(t,e,n),t!==null?t.sibling:null);vt(Mt,Mt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return l_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),vt(Mt,Mt.current),i)break;return null;case 22:case 23:return e.lanes=0,r_(t,e,n)}return Vi(t,e,n)}var c_,kd,u_,d_;c_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};kd=function(){};u_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,zr(_i.current);var s=null;switch(n){case"input":r=ad(t,r),i=ad(t,i),s=[];break;case"select":r=wt({},r,{value:void 0}),i=wt({},i,{value:void 0}),s=[];break;case"textarea":r=ud(t,r),i=ud(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Wl)}fd(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Vo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Vo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&_t("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};d_=function(t,e,n,i){n!==i&&(e.flags|=4)};function mo(t,e){if(!St)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Zt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function sM(t,e,n){var i=e.pendingProps;switch(gh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zt(e),null;case 1:return gn(e.type)&&jl(),Zt(e),null;case 3:return i=e.stateNode,Xs(),xt(mn),xt(on),Th(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Oa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Zn!==null&&(qd(Zn),Zn=null))),kd(t,e),Zt(e),null;case 5:wh(e);var r=zr(Qo.current);if(n=e.type,t!==null&&e.stateNode!=null)u_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(oe(166));return Zt(e),null}if(t=zr(_i.current),Oa(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[hi]=e,i[Zo]=s,t=(e.mode&1)!==0,n){case"dialog":_t("cancel",i),_t("close",i);break;case"iframe":case"object":case"embed":_t("load",i);break;case"video":case"audio":for(r=0;r<Ro.length;r++)_t(Ro[r],i);break;case"source":_t("error",i);break;case"img":case"image":case"link":_t("error",i),_t("load",i);break;case"details":_t("toggle",i);break;case"input":Up(i,s),_t("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},_t("invalid",i);break;case"textarea":Op(i,s),_t("invalid",i)}fd(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Fa(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Fa(i.textContent,a,t),r=["children",""+a]):Vo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&_t("scroll",i)}switch(n){case"input":Ra(i),Fp(i,s,!0);break;case"textarea":Ra(i),Bp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Wl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=k0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[hi]=e,t[Zo]=i,c_(t,e,!1,!1),e.stateNode=t;e:{switch(o=hd(n,i),n){case"dialog":_t("cancel",t),_t("close",t),r=i;break;case"iframe":case"object":case"embed":_t("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ro.length;r++)_t(Ro[r],t);r=i;break;case"source":_t("error",t),r=i;break;case"img":case"image":case"link":_t("error",t),_t("load",t),r=i;break;case"details":_t("toggle",t),r=i;break;case"input":Up(t,i),r=ad(t,i),_t("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=wt({},i,{value:void 0}),_t("invalid",t);break;case"textarea":Op(t,i),r=ud(t,i),_t("invalid",t);break;default:r=i}fd(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?H0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&z0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ho(t,l):typeof l=="number"&&Ho(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Vo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&_t("scroll",t):l!=null&&th(t,s,l,o))}switch(n){case"input":Ra(t),Fp(t,i,!1);break;case"textarea":Ra(t),Bp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+xr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Is(t,!!i.multiple,s,!1):i.defaultValue!=null&&Is(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Wl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Zt(e),null;case 6:if(t&&e.stateNode!=null)d_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(oe(166));if(n=zr(Qo.current),zr(_i.current),Oa(e)){if(i=e.stateNode,n=e.memoizedProps,i[hi]=e,(s=i.nodeValue!==n)&&(t=Rn,t!==null))switch(t.tag){case 3:Fa(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Fa(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[hi]=e,e.stateNode=i}return Zt(e),null;case 13:if(xt(Mt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(St&&bn!==null&&e.mode&1&&!(e.flags&128))Cv(),Ws(),e.flags|=98560,s=!1;else if(s=Oa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(oe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(oe(317));s[hi]=e}else Ws(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Zt(e),s=!1}else Zn!==null&&(qd(Zn),Zn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Mt.current&1?Bt===0&&(Bt=3):Oh())),e.updateQueue!==null&&(e.flags|=4),Zt(e),null);case 4:return Xs(),kd(t,e),t===null&&Yo(e.stateNode.containerInfo),Zt(e),null;case 10:return yh(e.type._context),Zt(e),null;case 17:return gn(e.type)&&jl(),Zt(e),null;case 19:if(xt(Mt),s=e.memoizedState,s===null)return Zt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)mo(s,!1);else{if(Bt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Jl(t),o!==null){for(e.flags|=128,mo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return vt(Mt,Mt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Lt()>$s&&(e.flags|=128,i=!0,mo(s,!1),e.lanes=4194304)}else{if(!i)if(t=Jl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),mo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!St)return Zt(e),null}else 2*Lt()-s.renderingStartTime>$s&&n!==1073741824&&(e.flags|=128,i=!0,mo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Lt(),e.sibling=null,n=Mt.current,vt(Mt,i?n&1|2:n&1),e):(Zt(e),null);case 22:case 23:return Fh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Tn&1073741824&&(Zt(e),e.subtreeFlags&6&&(e.flags|=8192)):Zt(e),null;case 24:return null;case 25:return null}throw Error(oe(156,e.tag))}function oM(t,e){switch(gh(e),e.tag){case 1:return gn(e.type)&&jl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Xs(),xt(mn),xt(on),Th(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return wh(e),null;case 13:if(xt(Mt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(oe(340));Ws()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return xt(Mt),null;case 4:return Xs(),null;case 10:return yh(e.type._context),null;case 22:case 23:return Fh(),null;case 24:return null;default:return null}}var za=!1,en=!1,aM=typeof WeakSet=="function"?WeakSet:Set,be=null;function Ns(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){At(t,e,i)}else n.current=null}function zd(t,e,n){try{n()}catch(i){At(t,e,i)}}var bm=!1;function lM(t,e){if(Ed=Vl,t=gv(),ph(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,f=t,d=null;t:for(;;){for(var v;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(v=f.firstChild)!==null;)d=f,f=v;for(;;){if(f===t)break t;if(d===n&&++c===r&&(a=o),d===s&&++u===i&&(l=o),(v=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(wd={focusedElem:t,selectionRange:n},Vl=!1,be=e;be!==null;)if(e=be,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,be=t;else for(;be!==null;){e=be;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,p=g.memoizedState,h=e.stateNode,m=h.getSnapshotBeforeUpdate(e.elementType===e.type?y:Yn(e.type,y),p);h.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(oe(163))}}catch(M){At(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,be=t;break}be=e.return}return g=bm,bm=!1,g}function Bo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&zd(e,n,s)}r=r.next}while(r!==i)}}function Ec(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Vd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function f_(t){var e=t.alternate;e!==null&&(t.alternate=null,f_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[hi],delete e[Zo],delete e[bd],delete e[WS],delete e[jS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function h_(t){return t.tag===5||t.tag===3||t.tag===4}function Rm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||h_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Hd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Wl));else if(i!==4&&(t=t.child,t!==null))for(Hd(t,e,n),t=t.sibling;t!==null;)Hd(t,e,n),t=t.sibling}function Gd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Gd(t,e,n),t=t.sibling;t!==null;)Gd(t,e,n),t=t.sibling}var jt=null,Kn=!1;function $i(t,e,n){for(n=n.child;n!==null;)p_(t,e,n),n=n.sibling}function p_(t,e,n){if(vi&&typeof vi.onCommitFiberUnmount=="function")try{vi.onCommitFiberUnmount(mc,n)}catch{}switch(n.tag){case 5:en||Ns(n,e);case 6:var i=jt,r=Kn;jt=null,$i(t,e,n),jt=i,Kn=r,jt!==null&&(Kn?(t=jt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):jt.removeChild(n.stateNode));break;case 18:jt!==null&&(Kn?(t=jt,n=n.stateNode,t.nodeType===8?su(t.parentNode,n):t.nodeType===1&&su(t,n),Xo(t)):su(jt,n.stateNode));break;case 4:i=jt,r=Kn,jt=n.stateNode.containerInfo,Kn=!0,$i(t,e,n),jt=i,Kn=r;break;case 0:case 11:case 14:case 15:if(!en&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&zd(n,e,o),r=r.next}while(r!==i)}$i(t,e,n);break;case 1:if(!en&&(Ns(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){At(n,e,a)}$i(t,e,n);break;case 21:$i(t,e,n);break;case 22:n.mode&1?(en=(i=en)||n.memoizedState!==null,$i(t,e,n),en=i):$i(t,e,n);break;default:$i(t,e,n)}}function Cm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new aM),e.forEach(function(i){var r=vM.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function jn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:jt=a.stateNode,Kn=!1;break e;case 3:jt=a.stateNode.containerInfo,Kn=!0;break e;case 4:jt=a.stateNode.containerInfo,Kn=!0;break e}a=a.return}if(jt===null)throw Error(oe(160));p_(s,o,r),jt=null,Kn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){At(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)m_(e,t),e=e.sibling}function m_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(jn(e,t),li(t),i&4){try{Bo(3,t,t.return),Ec(3,t)}catch(y){At(t,t.return,y)}try{Bo(5,t,t.return)}catch(y){At(t,t.return,y)}}break;case 1:jn(e,t),li(t),i&512&&n!==null&&Ns(n,n.return);break;case 5:if(jn(e,t),li(t),i&512&&n!==null&&Ns(n,n.return),t.flags&32){var r=t.stateNode;try{Ho(r,"")}catch(y){At(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&O0(r,s),hd(a,o);var c=hd(a,s);for(o=0;o<l.length;o+=2){var u=l[o],f=l[o+1];u==="style"?H0(r,f):u==="dangerouslySetInnerHTML"?z0(r,f):u==="children"?Ho(r,f):th(r,u,f,c)}switch(a){case"input":ld(r,s);break;case"textarea":B0(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?Is(r,!!s.multiple,v,!1):d!==!!s.multiple&&(s.defaultValue!=null?Is(r,!!s.multiple,s.defaultValue,!0):Is(r,!!s.multiple,s.multiple?[]:"",!1))}r[Zo]=s}catch(y){At(t,t.return,y)}}break;case 6:if(jn(e,t),li(t),i&4){if(t.stateNode===null)throw Error(oe(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){At(t,t.return,y)}}break;case 3:if(jn(e,t),li(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Xo(e.containerInfo)}catch(y){At(t,t.return,y)}break;case 4:jn(e,t),li(t);break;case 13:jn(e,t),li(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Ih=Lt())),i&4&&Cm(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(en=(c=en)||u,jn(e,t),en=c):jn(e,t),li(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(be=t,u=t.child;u!==null;){for(f=be=u;be!==null;){switch(d=be,v=d.child,d.tag){case 0:case 11:case 14:case 15:Bo(4,d,d.return);break;case 1:Ns(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(y){At(i,n,y)}}break;case 5:Ns(d,d.return);break;case 22:if(d.memoizedState!==null){Lm(f);continue}}v!==null?(v.return=d,be=v):Lm(f)}u=u.sibling}e:for(u=null,f=t;;){if(f.tag===5){if(u===null){u=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=V0("display",o))}catch(y){At(t,t.return,y)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(y){At(t,t.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:jn(e,t),li(t),i&4&&Cm(t);break;case 21:break;default:jn(e,t),li(t)}}function li(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(h_(n)){var i=n;break e}n=n.return}throw Error(oe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ho(r,""),i.flags&=-33);var s=Rm(t);Gd(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Rm(t);Hd(t,a,o);break;default:throw Error(oe(161))}}catch(l){At(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function cM(t,e,n){be=t,g_(t)}function g_(t,e,n){for(var i=(t.mode&1)!==0;be!==null;){var r=be,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||za;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||en;a=za;var c=en;if(za=o,(en=l)&&!c)for(be=r;be!==null;)o=be,l=o.child,o.tag===22&&o.memoizedState!==null?Nm(r):l!==null?(l.return=o,be=l):Nm(r);for(;s!==null;)be=s,g_(s),s=s.sibling;be=r,za=a,en=c}Pm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,be=s):Pm(t)}}function Pm(t){for(;be!==null;){var e=be;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:en||Ec(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!en)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Yn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&pm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}pm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&Xo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(oe(163))}en||e.flags&512&&Vd(e)}catch(d){At(e,e.return,d)}}if(e===t){be=null;break}if(n=e.sibling,n!==null){n.return=e.return,be=n;break}be=e.return}}function Lm(t){for(;be!==null;){var e=be;if(e===t){be=null;break}var n=e.sibling;if(n!==null){n.return=e.return,be=n;break}be=e.return}}function Nm(t){for(;be!==null;){var e=be;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ec(4,e)}catch(l){At(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){At(e,r,l)}}var s=e.return;try{Vd(e)}catch(l){At(e,s,l)}break;case 5:var o=e.return;try{Vd(e)}catch(l){At(e,o,l)}}}catch(l){At(e,e.return,l)}if(e===t){be=null;break}var a=e.sibling;if(a!==null){a.return=e.return,be=a;break}be=e.return}}var uM=Math.ceil,tc=Wi.ReactCurrentDispatcher,Nh=Wi.ReactCurrentOwner,Hn=Wi.ReactCurrentBatchConfig,st=0,Wt=null,Ft=null,qt=0,Tn=0,Ds=wr(0),Bt=0,ia=null,Kr=0,wc=0,Dh=0,ko=null,hn=null,Ih=0,$s=1/0,Pi=null,nc=!1,Wd=null,mr=null,Va=!1,ar=null,ic=0,zo=0,jd=null,Ml=-1,El=0;function cn(){return st&6?Lt():Ml!==-1?Ml:Ml=Lt()}function gr(t){return t.mode&1?st&2&&qt!==0?qt&-qt:qS.transition!==null?(El===0&&(El=ev()),El):(t=ct,t!==0||(t=window.event,t=t===void 0?16:av(t.type)),t):1}function ti(t,e,n,i){if(50<zo)throw zo=0,jd=null,Error(oe(185));ua(t,n,i),(!(st&2)||t!==Wt)&&(t===Wt&&(!(st&2)&&(wc|=n),Bt===4&&rr(t,qt)),vn(t,i),n===1&&st===0&&!(e.mode&1)&&($s=Lt()+500,yc&&Tr()))}function vn(t,e){var n=t.callbackNode;qy(t,e);var i=zl(t,t===Wt?qt:0);if(i===0)n!==null&&Vp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Vp(n),e===1)t.tag===0?XS(Dm.bind(null,t)):Av(Dm.bind(null,t)),HS(function(){!(st&6)&&Tr()}),n=null;else{switch(tv(i)){case 1:n=oh;break;case 4:n=J0;break;case 16:n=kl;break;case 536870912:n=Q0;break;default:n=kl}n=w_(n,v_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function v_(t,e){if(Ml=-1,El=0,st&6)throw Error(oe(327));var n=t.callbackNode;if(ks()&&t.callbackNode!==n)return null;var i=zl(t,t===Wt?qt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=rc(t,i);else{e=i;var r=st;st|=2;var s=x_();(Wt!==t||qt!==e)&&(Pi=null,$s=Lt()+500,Wr(t,e));do try{hM();break}catch(a){__(t,a)}while(!0);xh(),tc.current=s,st=r,Ft!==null?e=0:(Wt=null,qt=0,e=Bt)}if(e!==0){if(e===2&&(r=_d(t),r!==0&&(i=r,e=Xd(t,r))),e===1)throw n=ia,Wr(t,0),rr(t,i),vn(t,Lt()),n;if(e===6)rr(t,i);else{if(r=t.current.alternate,!(i&30)&&!dM(r)&&(e=rc(t,i),e===2&&(s=_d(t),s!==0&&(i=s,e=Xd(t,s))),e===1))throw n=ia,Wr(t,0),rr(t,i),vn(t,Lt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(oe(345));case 2:Ir(t,hn,Pi);break;case 3:if(rr(t,i),(i&130023424)===i&&(e=Ih+500-Lt(),10<e)){if(zl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){cn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Ad(Ir.bind(null,t,hn,Pi),e);break}Ir(t,hn,Pi);break;case 4:if(rr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ei(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Lt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*uM(i/1960))-i,10<i){t.timeoutHandle=Ad(Ir.bind(null,t,hn,Pi),i);break}Ir(t,hn,Pi);break;case 5:Ir(t,hn,Pi);break;default:throw Error(oe(329))}}}return vn(t,Lt()),t.callbackNode===n?v_.bind(null,t):null}function Xd(t,e){var n=ko;return t.current.memoizedState.isDehydrated&&(Wr(t,e).flags|=256),t=rc(t,e),t!==2&&(e=hn,hn=n,e!==null&&qd(e)),t}function qd(t){hn===null?hn=t:hn.push.apply(hn,t)}function dM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ni(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function rr(t,e){for(e&=~Dh,e&=~wc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ei(e),i=1<<n;t[n]=-1,e&=~i}}function Dm(t){if(st&6)throw Error(oe(327));ks();var e=zl(t,0);if(!(e&1))return vn(t,Lt()),null;var n=rc(t,e);if(t.tag!==0&&n===2){var i=_d(t);i!==0&&(e=i,n=Xd(t,i))}if(n===1)throw n=ia,Wr(t,0),rr(t,e),vn(t,Lt()),n;if(n===6)throw Error(oe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ir(t,hn,Pi),vn(t,Lt()),null}function Uh(t,e){var n=st;st|=1;try{return t(e)}finally{st=n,st===0&&($s=Lt()+500,yc&&Tr())}}function Zr(t){ar!==null&&ar.tag===0&&!(st&6)&&ks();var e=st;st|=1;var n=Hn.transition,i=ct;try{if(Hn.transition=null,ct=1,t)return t()}finally{ct=i,Hn.transition=n,st=e,!(st&6)&&Tr()}}function Fh(){Tn=Ds.current,xt(Ds)}function Wr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,VS(n)),Ft!==null)for(n=Ft.return;n!==null;){var i=n;switch(gh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&jl();break;case 3:Xs(),xt(mn),xt(on),Th();break;case 5:wh(i);break;case 4:Xs();break;case 13:xt(Mt);break;case 19:xt(Mt);break;case 10:yh(i.type._context);break;case 22:case 23:Fh()}n=n.return}if(Wt=t,Ft=t=vr(t.current,null),qt=Tn=e,Bt=0,ia=null,Dh=wc=Kr=0,hn=ko=null,kr!==null){for(e=0;e<kr.length;e++)if(n=kr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}kr=null}return t}function __(t,e){do{var n=Ft;try{if(xh(),xl.current=ec,Ql){for(var i=Et.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ql=!1}if(Yr=0,Gt=Ot=Et=null,Oo=!1,ea=0,Nh.current=null,n===null||n.return===null){Bt=1,ia=e,Ft=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=qt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var v=ym(o);if(v!==null){v.flags&=-257,Sm(v,o,a,s,e),v.mode&1&&xm(s,c,e),e=v,l=c;var g=e.updateQueue;if(g===null){var y=new Set;y.add(l),e.updateQueue=y}else g.add(l);break e}else{if(!(e&1)){xm(s,c,e),Oh();break e}l=Error(oe(426))}}else if(St&&a.mode&1){var p=ym(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),Sm(p,o,a,s,e),vh(qs(l,a));break e}}s=l=qs(l,a),Bt!==4&&(Bt=2),ko===null?ko=[s]:ko.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=t_(s,l,e);hm(s,h);break e;case 1:a=l;var m=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(mr===null||!mr.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=n_(s,a,e);hm(s,M);break e}}s=s.return}while(s!==null)}S_(n)}catch(T){e=T,Ft===n&&n!==null&&(Ft=n=n.return);continue}break}while(!0)}function x_(){var t=tc.current;return tc.current=ec,t===null?ec:t}function Oh(){(Bt===0||Bt===3||Bt===2)&&(Bt=4),Wt===null||!(Kr&268435455)&&!(wc&268435455)||rr(Wt,qt)}function rc(t,e){var n=st;st|=2;var i=x_();(Wt!==t||qt!==e)&&(Pi=null,Wr(t,e));do try{fM();break}catch(r){__(t,r)}while(!0);if(xh(),st=n,tc.current=i,Ft!==null)throw Error(oe(261));return Wt=null,qt=0,Bt}function fM(){for(;Ft!==null;)y_(Ft)}function hM(){for(;Ft!==null&&!By();)y_(Ft)}function y_(t){var e=E_(t.alternate,t,Tn);t.memoizedProps=t.pendingProps,e===null?S_(t):Ft=e,Nh.current=null}function S_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=oM(n,e),n!==null){n.flags&=32767,Ft=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Bt=6,Ft=null;return}}else if(n=sM(n,e,Tn),n!==null){Ft=n;return}if(e=e.sibling,e!==null){Ft=e;return}Ft=e=t}while(e!==null);Bt===0&&(Bt=5)}function Ir(t,e,n){var i=ct,r=Hn.transition;try{Hn.transition=null,ct=1,pM(t,e,n,i)}finally{Hn.transition=r,ct=i}return null}function pM(t,e,n,i){do ks();while(ar!==null);if(st&6)throw Error(oe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(oe(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if($y(t,s),t===Wt&&(Ft=Wt=null,qt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Va||(Va=!0,w_(kl,function(){return ks(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Hn.transition,Hn.transition=null;var o=ct;ct=1;var a=st;st|=4,Nh.current=null,lM(t,n),m_(n,t),IS(wd),Vl=!!Ed,wd=Ed=null,t.current=n,cM(n),ky(),st=a,ct=o,Hn.transition=s}else t.current=n;if(Va&&(Va=!1,ar=t,ic=r),s=t.pendingLanes,s===0&&(mr=null),Hy(n.stateNode),vn(t,Lt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(nc)throw nc=!1,t=Wd,Wd=null,t;return ic&1&&t.tag!==0&&ks(),s=t.pendingLanes,s&1?t===jd?zo++:(zo=0,jd=t):zo=0,Tr(),null}function ks(){if(ar!==null){var t=tv(ic),e=Hn.transition,n=ct;try{if(Hn.transition=null,ct=16>t?16:t,ar===null)var i=!1;else{if(t=ar,ar=null,ic=0,st&6)throw Error(oe(331));var r=st;for(st|=4,be=t.current;be!==null;){var s=be,o=s.child;if(be.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(be=c;be!==null;){var u=be;switch(u.tag){case 0:case 11:case 15:Bo(8,u,s)}var f=u.child;if(f!==null)f.return=u,be=f;else for(;be!==null;){u=be;var d=u.sibling,v=u.return;if(f_(u),u===c){be=null;break}if(d!==null){d.return=v,be=d;break}be=v}}}var g=s.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var p=y.sibling;y.sibling=null,y=p}while(y!==null)}}be=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,be=o;else e:for(;be!==null;){if(s=be,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Bo(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,be=h;break e}be=s.return}}var m=t.current;for(be=m;be!==null;){o=be;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,be=_;else e:for(o=m;be!==null;){if(a=be,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ec(9,a)}}catch(T){At(a,a.return,T)}if(a===o){be=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,be=M;break e}be=a.return}}if(st=r,Tr(),vi&&typeof vi.onPostCommitFiberRoot=="function")try{vi.onPostCommitFiberRoot(mc,t)}catch{}i=!0}return i}finally{ct=n,Hn.transition=e}}return!1}function Im(t,e,n){e=qs(n,e),e=t_(t,e,1),t=pr(t,e,1),e=cn(),t!==null&&(ua(t,1,e),vn(t,e))}function At(t,e,n){if(t.tag===3)Im(t,t,n);else for(;e!==null;){if(e.tag===3){Im(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(mr===null||!mr.has(i))){t=qs(n,t),t=n_(e,t,1),e=pr(e,t,1),t=cn(),e!==null&&(ua(e,1,t),vn(e,t));break}}e=e.return}}function mM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=cn(),t.pingedLanes|=t.suspendedLanes&n,Wt===t&&(qt&n)===n&&(Bt===4||Bt===3&&(qt&130023424)===qt&&500>Lt()-Ih?Wr(t,0):Dh|=n),vn(t,e)}function M_(t,e){e===0&&(t.mode&1?(e=La,La<<=1,!(La&130023424)&&(La=4194304)):e=1);var n=cn();t=zi(t,e),t!==null&&(ua(t,e,n),vn(t,n))}function gM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),M_(t,n)}function vM(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(oe(314))}i!==null&&i.delete(e),M_(t,n)}var E_;E_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||mn.current)pn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return pn=!1,rM(t,e,n);pn=!!(t.flags&131072)}else pn=!1,St&&e.flags&1048576&&bv(e,$l,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Sl(t,e),t=e.pendingProps;var r=Gs(e,on.current);Bs(e,n),r=bh(null,e,i,t,r,n);var s=Rh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,gn(i)?(s=!0,Xl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Mh(e),r.updater=Mc,e.stateNode=r,r._reactInternals=e,Dd(e,i,t,n),e=Fd(null,e,i,!0,s,n)):(e.tag=0,St&&s&&mh(e),ln(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Sl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=xM(i),t=Yn(i,t),r){case 0:e=Ud(null,e,i,t,n);break e;case 1:e=wm(null,e,i,t,n);break e;case 11:e=Mm(null,e,i,t,n);break e;case 14:e=Em(null,e,i,Yn(i.type,t),n);break e}throw Error(oe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),Ud(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),wm(t,e,i,r,n);case 3:e:{if(o_(e),t===null)throw Error(oe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Dv(t,e),Zl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=qs(Error(oe(423)),e),e=Tm(t,e,i,n,r);break e}else if(i!==r){r=qs(Error(oe(424)),e),e=Tm(t,e,i,n,r);break e}else for(bn=hr(e.stateNode.containerInfo.firstChild),Rn=e,St=!0,Zn=null,n=Lv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ws(),i===r){e=Vi(t,e,n);break e}ln(t,e,i,n)}e=e.child}return e;case 5:return Iv(e),t===null&&Pd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Td(i,r)?o=null:s!==null&&Td(i,s)&&(e.flags|=32),s_(t,e),ln(t,e,o,n),e.child;case 6:return t===null&&Pd(e),null;case 13:return a_(t,e,n);case 4:return Eh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=js(e,null,i,n):ln(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),Mm(t,e,i,r,n);case 7:return ln(t,e,e.pendingProps,n),e.child;case 8:return ln(t,e,e.pendingProps.children,n),e.child;case 12:return ln(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,vt(Yl,i._currentValue),i._currentValue=o,s!==null)if(ni(s.value,o)){if(s.children===r.children&&!mn.current){e=Vi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ui(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ld(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(oe(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ld(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ln(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Bs(e,n),r=Gn(r),i=i(r),e.flags|=1,ln(t,e,i,n),e.child;case 14:return i=e.type,r=Yn(i,e.pendingProps),r=Yn(i.type,r),Em(t,e,i,r,n);case 15:return i_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),Sl(t,e),e.tag=1,gn(i)?(t=!0,Xl(e)):t=!1,Bs(e,n),e_(e,i,r),Dd(e,i,r,n),Fd(null,e,i,!0,t,n);case 19:return l_(t,e,n);case 22:return r_(t,e,n)}throw Error(oe(156,e.tag))};function w_(t,e){return Z0(t,e)}function _M(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vn(t,e,n,i){return new _M(t,e,n,i)}function Bh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function xM(t){if(typeof t=="function")return Bh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ih)return 11;if(t===rh)return 14}return 2}function vr(t,e){var n=t.alternate;return n===null?(n=Vn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function wl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Bh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Es:return jr(n.children,r,s,e);case nh:o=8,r|=8;break;case id:return t=Vn(12,n,e,r|2),t.elementType=id,t.lanes=s,t;case rd:return t=Vn(13,n,e,r),t.elementType=rd,t.lanes=s,t;case sd:return t=Vn(19,n,e,r),t.elementType=sd,t.lanes=s,t;case I0:return Tc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case N0:o=10;break e;case D0:o=9;break e;case ih:o=11;break e;case rh:o=14;break e;case tr:o=16,i=null;break e}throw Error(oe(130,t==null?t:typeof t,""))}return e=Vn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function jr(t,e,n,i){return t=Vn(7,t,i,e),t.lanes=n,t}function Tc(t,e,n,i){return t=Vn(22,t,i,e),t.elementType=I0,t.lanes=n,t.stateNode={isHidden:!1},t}function hu(t,e,n){return t=Vn(6,t,null,e),t.lanes=n,t}function pu(t,e,n){return e=Vn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function yM(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$c(0),this.expirationTimes=$c(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$c(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function kh(t,e,n,i,r,s,o,a,l){return t=new yM(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Vn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mh(s),t}function SM(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ms,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function T_(t){if(!t)return yr;t=t._reactInternals;e:{if(ns(t)!==t||t.tag!==1)throw Error(oe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(gn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(oe(171))}if(t.tag===1){var n=t.type;if(gn(n))return Tv(t,n,e)}return e}function A_(t,e,n,i,r,s,o,a,l){return t=kh(n,i,!0,t,r,s,o,a,l),t.context=T_(null),n=t.current,i=cn(),r=gr(n),s=Ui(i,r),s.callback=e??null,pr(n,s,r),t.current.lanes=r,ua(t,r,i),vn(t,i),t}function Ac(t,e,n,i){var r=e.current,s=cn(),o=gr(r);return n=T_(n),e.context===null?e.context=n:e.pendingContext=n,e=Ui(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=pr(r,e,o),t!==null&&(ti(t,r,o,s),_l(t,r,o)),o}function sc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Um(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function zh(t,e){Um(t,e),(t=t.alternate)&&Um(t,e)}function MM(){return null}var b_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Vh(t){this._internalRoot=t}bc.prototype.render=Vh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(oe(409));Ac(t,e,null,null)};bc.prototype.unmount=Vh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Zr(function(){Ac(null,t,null,null)}),e[ki]=null}};function bc(t){this._internalRoot=t}bc.prototype.unstable_scheduleHydration=function(t){if(t){var e=rv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ir.length&&e!==0&&e<ir[n].priority;n++);ir.splice(n,0,t),n===0&&ov(t)}};function Hh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Rc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Fm(){}function EM(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=sc(o);s.call(c)}}var o=A_(e,i,t,0,null,!1,!1,"",Fm);return t._reactRootContainer=o,t[ki]=o.current,Yo(t.nodeType===8?t.parentNode:t),Zr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=sc(l);a.call(c)}}var l=kh(t,0,!1,null,null,!1,!1,"",Fm);return t._reactRootContainer=l,t[ki]=l.current,Yo(t.nodeType===8?t.parentNode:t),Zr(function(){Ac(e,l,n,i)}),l}function Cc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=sc(o);a.call(l)}}Ac(e,o,t,r)}else o=EM(n,e,t,r,i);return sc(o)}nv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=bo(e.pendingLanes);n!==0&&(ah(e,n|1),vn(e,Lt()),!(st&6)&&($s=Lt()+500,Tr()))}break;case 13:Zr(function(){var i=zi(t,1);if(i!==null){var r=cn();ti(i,t,1,r)}}),zh(t,1)}};lh=function(t){if(t.tag===13){var e=zi(t,134217728);if(e!==null){var n=cn();ti(e,t,134217728,n)}zh(t,134217728)}};iv=function(t){if(t.tag===13){var e=gr(t),n=zi(t,e);if(n!==null){var i=cn();ti(n,t,e,i)}zh(t,e)}};rv=function(){return ct};sv=function(t,e){var n=ct;try{return ct=t,e()}finally{ct=n}};md=function(t,e,n){switch(e){case"input":if(ld(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=xc(i);if(!r)throw Error(oe(90));F0(i),ld(i,r)}}}break;case"textarea":B0(t,n);break;case"select":e=n.value,e!=null&&Is(t,!!n.multiple,e,!1)}};j0=Uh;X0=Zr;var wM={usingClientEntryPoint:!1,Events:[fa,bs,xc,G0,W0,Uh]},go={findFiberByHostInstance:Br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},TM={bundleType:go.bundleType,version:go.version,rendererPackageName:go.rendererPackageName,rendererConfig:go.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Y0(t),t===null?null:t.stateNode},findFiberByHostInstance:go.findFiberByHostInstance||MM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ha=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ha.isDisabled&&Ha.supportsFiber)try{mc=Ha.inject(TM),vi=Ha}catch{}}Ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wM;Ln.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hh(e))throw Error(oe(200));return SM(t,e,null,n)};Ln.createRoot=function(t,e){if(!Hh(t))throw Error(oe(299));var n=!1,i="",r=b_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=kh(t,1,!1,null,null,n,!1,i,r),t[ki]=e.current,Yo(t.nodeType===8?t.parentNode:t),new Vh(e)};Ln.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(oe(188)):(t=Object.keys(t).join(","),Error(oe(268,t)));return t=Y0(e),t=t===null?null:t.stateNode,t};Ln.flushSync=function(t){return Zr(t)};Ln.hydrate=function(t,e,n){if(!Rc(e))throw Error(oe(200));return Cc(null,t,e,!0,n)};Ln.hydrateRoot=function(t,e,n){if(!Hh(t))throw Error(oe(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=b_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=A_(e,null,t,1,n??null,r,!1,s,o),t[ki]=e.current,Yo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new bc(e)};Ln.render=function(t,e,n){if(!Rc(e))throw Error(oe(200));return Cc(null,t,e,!1,n)};Ln.unmountComponentAtNode=function(t){if(!Rc(t))throw Error(oe(40));return t._reactRootContainer?(Zr(function(){Cc(null,null,t,!1,function(){t._reactRootContainer=null,t[ki]=null})}),!0):!1};Ln.unstable_batchedUpdates=Uh;Ln.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Rc(n))throw Error(oe(200));if(t==null||t._reactInternals===void 0)throw Error(oe(38));return Cc(t,e,n,!1,i)};Ln.version="18.3.1-next-f1338f8080-20240426";function R_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(R_)}catch(t){console.error(t)}}R_(),R0.exports=Ln;var AM=R0.exports,Om=AM;td.createRoot=Om.createRoot,td.hydrateRoot=Om.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ra(){return ra=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ra.apply(this,arguments)}var lr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(lr||(lr={}));const Bm="popstate";function bM(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:o,hash:a}=i.location;return $d("",{pathname:s,search:o,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:oc(r)}return CM(e,n,null,t)}function Nt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Gh(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function RM(){return Math.random().toString(36).substr(2,8)}function km(t,e){return{usr:t.state,key:t.key,idx:e}}function $d(t,e,n,i){return n===void 0&&(n=null),ra({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?io(e):e,{state:n,key:e&&e.key||i||RM()})}function oc(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function io(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function CM(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,o=r.history,a=lr.Pop,l=null,c=u();c==null&&(c=0,o.replaceState(ra({},o.state,{idx:c}),""));function u(){return(o.state||{idx:null}).idx}function f(){a=lr.Pop;let p=u(),h=p==null?null:p-c;c=p,l&&l({action:a,location:y.location,delta:h})}function d(p,h){a=lr.Push;let m=$d(y.location,p,h);c=u()+1;let _=km(m,c),M=y.createHref(m);try{o.pushState(_,"",M)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;r.location.assign(M)}s&&l&&l({action:a,location:y.location,delta:1})}function v(p,h){a=lr.Replace;let m=$d(y.location,p,h);c=u();let _=km(m,c),M=y.createHref(m);o.replaceState(_,"",M),s&&l&&l({action:a,location:y.location,delta:0})}function g(p){let h=r.location.origin!=="null"?r.location.origin:r.location.href,m=typeof p=="string"?p:oc(p);return m=m.replace(/ $/,"%20"),Nt(h,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,h)}let y={get action(){return a},get location(){return t(r,o)},listen(p){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(Bm,f),l=p,()=>{r.removeEventListener(Bm,f),l=null}},createHref(p){return e(r,p)},createURL:g,encodeLocation(p){let h=g(p);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:d,replace:v,go(p){return o.go(p)}};return y}var zm;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(zm||(zm={}));function PM(t,e,n){return n===void 0&&(n="/"),LM(t,e,n)}function LM(t,e,n,i){let r=typeof e=="string"?io(e):e,s=Wh(r.pathname||"/",n);if(s==null)return null;let o=C_(t);NM(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=WM(s);a=VM(o[l],c)}return a}function C_(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Nt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=_r([i,l.relativePath]),u=n.concat(l);s.children&&s.children.length>0&&(Nt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),C_(s.children,e,u,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:kM(c,s.index),routesMeta:u})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))r(s,o);else for(let l of P_(s.path))r(s,o,l)}),e}function P_(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let o=P_(i.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),r&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function NM(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:zM(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const DM=/^:[\w-]+$/,IM=3,UM=2,FM=1,OM=10,BM=-2,Vm=t=>t==="*";function kM(t,e){let n=t.split("/"),i=n.length;return n.some(Vm)&&(i+=BM),e&&(i+=UM),n.filter(r=>!Vm(r)).reduce((r,s)=>r+(DM.test(s)?IM:s===""?FM:OM),i)}function zM(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function VM(t,e,n){let{routesMeta:i}=t,r={},s="/",o=[];for(let a=0;a<i.length;++a){let l=i[a],c=a===i.length-1,u=s==="/"?e:e.slice(s.length)||"/",f=HM({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u),d=l.route;if(!f)return null;Object.assign(r,f.params),o.push({params:r,pathname:_r([s,f.pathname]),pathnameBase:YM(_r([s,f.pathnameBase])),route:d}),f.pathnameBase!=="/"&&(s=_r([s,f.pathnameBase]))}return o}function HM(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=GM(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((c,u,f)=>{let{paramName:d,isOptional:v}=u;if(d==="*"){let y=a[f]||"";o=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const g=a[f];return v&&!g?c[d]=void 0:c[d]=(g||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function GM(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Gh(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(i.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function WM(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Gh(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Wh(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}const jM=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,XM=t=>jM.test(t);function qM(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?io(t):t,s;if(n)if(XM(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Gh(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=Hm(n.substring(1),"/"):s=Hm(n,e)}else s=e;return{pathname:s,search:KM(i),hash:ZM(r)}}function Hm(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function mu(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function $M(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function jh(t,e){let n=$M(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function Xh(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=io(t):(r=ra({},t),Nt(!r.pathname||!r.pathname.includes("?"),mu("?","pathname","search",r)),Nt(!r.pathname||!r.pathname.includes("#"),mu("#","pathname","hash",r)),Nt(!r.search||!r.search.includes("#"),mu("#","search","hash",r)));let s=t===""||r.pathname==="",o=s?"/":r.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!i&&o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),f-=1;r.pathname=d.join("/")}a=f>=0?e[f]:"/"}let l=qM(r,a),c=o&&o!=="/"&&o.endsWith("/"),u=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}const _r=t=>t.join("/").replace(/\/\/+/g,"/"),YM=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),KM=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,ZM=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function JM(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const L_=["post","put","patch","delete"];new Set(L_);const QM=["get",...L_];new Set(QM);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sa(){return sa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},sa.apply(this,arguments)}const qh=te.createContext(null),eE=te.createContext(null),Ar=te.createContext(null),Pc=te.createContext(null),br=te.createContext({outlet:null,matches:[],isDataRoute:!1}),N_=te.createContext(null);function tE(t,e){let{relative:n}=e===void 0?{}:e;ro()||Nt(!1);let{basename:i,navigator:r}=te.useContext(Ar),{hash:s,pathname:o,search:a}=I_(t,{relative:n}),l=o;return i!=="/"&&(l=o==="/"?i:_r([i,o])),r.createHref({pathname:l,search:a,hash:s})}function ro(){return te.useContext(Pc)!=null}function pa(){return ro()||Nt(!1),te.useContext(Pc).location}function D_(t){te.useContext(Ar).static||te.useLayoutEffect(t)}function Lc(){let{isDataRoute:t}=te.useContext(br);return t?pE():nE()}function nE(){ro()||Nt(!1);let t=te.useContext(qh),{basename:e,future:n,navigator:i}=te.useContext(Ar),{matches:r}=te.useContext(br),{pathname:s}=pa(),o=JSON.stringify(jh(r,n.v7_relativeSplatPath)),a=te.useRef(!1);return D_(()=>{a.current=!0}),te.useCallback(function(c,u){if(u===void 0&&(u={}),!a.current)return;if(typeof c=="number"){i.go(c);return}let f=Xh(c,JSON.parse(o),s,u.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:_r([e,f.pathname])),(u.replace?i.replace:i.push)(f,u.state,u)},[e,i,o,s,t])}function I_(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=te.useContext(Ar),{matches:r}=te.useContext(br),{pathname:s}=pa(),o=JSON.stringify(jh(r,i.v7_relativeSplatPath));return te.useMemo(()=>Xh(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function iE(t,e){return rE(t,e)}function rE(t,e,n,i){ro()||Nt(!1);let{navigator:r}=te.useContext(Ar),{matches:s}=te.useContext(br),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=pa(),u;if(e){var f;let p=typeof e=="string"?io(e):e;l==="/"||(f=p.pathname)!=null&&f.startsWith(l)||Nt(!1),u=p}else u=c;let d=u.pathname||"/",v=d;if(l!=="/"){let p=l.replace(/^\//,"").split("/");v="/"+d.replace(/^\//,"").split("/").slice(p.length).join("/")}let g=PM(t,{pathname:v}),y=cE(g&&g.map(p=>Object.assign({},p,{params:Object.assign({},a,p.params),pathname:_r([l,r.encodeLocation?r.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?l:_r([l,r.encodeLocation?r.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),s,n,i);return e&&y?te.createElement(Pc.Provider,{value:{location:sa({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:lr.Pop}},y):y}function sE(){let t=hE(),e=JM(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return te.createElement(te.Fragment,null,te.createElement("h2",null,"Unexpected Application Error!"),te.createElement("h3",{style:{fontStyle:"italic"}},e),n?te.createElement("pre",{style:r},n):null,null)}const oE=te.createElement(sE,null);class aE extends te.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?te.createElement(br.Provider,{value:this.props.routeContext},te.createElement(N_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function lE(t){let{routeContext:e,match:n,children:i}=t,r=te.useContext(qh);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),te.createElement(br.Provider,{value:e},i)}function cE(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(r=n)==null?void 0:r.errors;if(a!=null){let u=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);u>=0||Nt(!1),o=o.slice(0,Math.min(o.length,u+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let u=0;u<o.length;u++){let f=o[u];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=u),f.route.id){let{loaderData:d,errors:v}=n,g=f.route.loader&&d[f.route.id]===void 0&&(!v||v[f.route.id]===void 0);if(f.route.lazy||g){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((u,f,d)=>{let v,g=!1,y=null,p=null;n&&(v=a&&f.route.id?a[f.route.id]:void 0,y=f.route.errorElement||oE,l&&(c<0&&d===0?(mE("route-fallback"),g=!0,p=null):c===d&&(g=!0,p=f.route.hydrateFallbackElement||null)));let h=e.concat(o.slice(0,d+1)),m=()=>{let _;return v?_=y:g?_=p:f.route.Component?_=te.createElement(f.route.Component,null):f.route.element?_=f.route.element:_=u,te.createElement(lE,{match:f,routeContext:{outlet:u,matches:h,isDataRoute:n!=null},children:_})};return n&&(f.route.ErrorBoundary||f.route.errorElement||d===0)?te.createElement(aE,{location:n.location,revalidation:n.revalidation,component:y,error:v,children:m(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):m()},null)}var U_=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(U_||{}),F_=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(F_||{});function uE(t){let e=te.useContext(qh);return e||Nt(!1),e}function dE(t){let e=te.useContext(eE);return e||Nt(!1),e}function fE(t){let e=te.useContext(br);return e||Nt(!1),e}function O_(t){let e=fE(),n=e.matches[e.matches.length-1];return n.route.id||Nt(!1),n.route.id}function hE(){var t;let e=te.useContext(N_),n=dE(),i=O_();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function pE(){let{router:t}=uE(U_.UseNavigateStable),e=O_(F_.UseNavigateStable),n=te.useRef(!1);return D_(()=>{n.current=!0}),te.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,sa({fromRouteId:e},s)))},[t,e])}const Gm={};function mE(t,e,n){Gm[t]||(Gm[t]=!0)}function gE(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Yd(t){let{to:e,replace:n,state:i,relative:r}=t;ro()||Nt(!1);let{future:s,static:o}=te.useContext(Ar),{matches:a}=te.useContext(br),{pathname:l}=pa(),c=Lc(),u=Xh(e,jh(a,s.v7_relativeSplatPath),l,r==="path"),f=JSON.stringify(u);return te.useEffect(()=>c(JSON.parse(f),{replace:n,state:i,relative:r}),[c,f,r,n,i]),null}function Ss(t){Nt(!1)}function vE(t){let{basename:e="/",children:n=null,location:i,navigationType:r=lr.Pop,navigator:s,static:o=!1,future:a}=t;ro()&&Nt(!1);let l=e.replace(/^\/*/,"/"),c=te.useMemo(()=>({basename:l,navigator:s,static:o,future:sa({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof i=="string"&&(i=io(i));let{pathname:u="/",search:f="",hash:d="",state:v=null,key:g="default"}=i,y=te.useMemo(()=>{let p=Wh(u,l);return p==null?null:{location:{pathname:p,search:f,hash:d,state:v,key:g},navigationType:r}},[l,u,f,d,v,g,r]);return y==null?null:te.createElement(Ar.Provider,{value:c},te.createElement(Pc.Provider,{children:n,value:y}))}function _E(t){let{children:e,location:n}=t;return iE(Kd(e),n)}new Promise(()=>{});function Kd(t,e){e===void 0&&(e=[]);let n=[];return te.Children.forEach(t,(i,r)=>{if(!te.isValidElement(i))return;let s=[...e,r];if(i.type===te.Fragment){n.push.apply(n,Kd(i.props.children,s));return}i.type!==Ss&&Nt(!1),!i.props.index||!i.props.children||Nt(!1);let o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=Kd(i.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zd(){return Zd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Zd.apply(this,arguments)}function xE(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function yE(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function SE(t,e){return t.button===0&&(!e||e==="_self")&&!yE(t)}const ME=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],EE="6";try{window.__reactRouterVersion=EE}catch{}const wE="startTransition",Wm=my[wE];function TE(t){let{basename:e,children:n,future:i,window:r}=t,s=te.useRef();s.current==null&&(s.current=bM({window:r,v5Compat:!0}));let o=s.current,[a,l]=te.useState({action:o.action,location:o.location}),{v7_startTransition:c}=i||{},u=te.useCallback(f=>{c&&Wm?Wm(()=>l(f)):l(f)},[l,c]);return te.useLayoutEffect(()=>o.listen(u),[o,u]),te.useEffect(()=>gE(i),[i]),te.createElement(vE,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:i})}const AE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",bE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,jm=te.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:u,viewTransition:f}=e,d=xE(e,ME),{basename:v}=te.useContext(Ar),g,y=!1;if(typeof c=="string"&&bE.test(c)&&(g=c,AE))try{let _=new URL(window.location.href),M=c.startsWith("//")?new URL(_.protocol+c):new URL(c),T=Wh(M.pathname,v);M.origin===_.origin&&T!=null?c=T+M.search+M.hash:y=!0}catch{}let p=tE(c,{relative:r}),h=RE(c,{replace:o,state:a,target:l,preventScrollReset:u,relative:r,viewTransition:f});function m(_){i&&i(_),_.defaultPrevented||h(_)}return te.createElement("a",Zd({},d,{href:g||p,onClick:y||s?i:m,ref:n,target:l}))});var Xm;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Xm||(Xm={}));var qm;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(qm||(qm={}));function RE(t,e){let{target:n,replace:i,state:r,preventScrollReset:s,relative:o,viewTransition:a}=e===void 0?{}:e,l=Lc(),c=pa(),u=I_(t,{relative:o});return te.useCallback(f=>{if(SE(f,n)){f.preventDefault();let d=i!==void 0?i:oc(c)===oc(u);l(t,{replace:d,state:r,preventScrollReset:s,relative:o,viewTransition:a})}},[c,l,u,i,r,n,t,s,o,a])}const CE="modulepreload",PE=function(t){return"/"+t},$m={},B_=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.allSettled(n.map(l=>{if(l=PE(l),l in $m)return;$m[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":CE,c||(f.as="script"),f.crossOrigin="",f.href=l,a&&f.setAttribute("nonce",a),document.head.appendChild(f),c)return new Promise((d,v)=>{f.addEventListener("load",d),f.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k_=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LE=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NE=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,i)=>i?i.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ym=t=>{const e=NE(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var DE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IE=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UE=te.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...a},l)=>te.createElement("svg",{ref:l,...DE,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:k_("lucide",r),...!s&&!IE(a)&&{"aria-hidden":"true"},...a},[...o.map(([c,u])=>te.createElement(c,u)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dn=(t,e)=>{const n=te.forwardRef(({className:i,...r},s)=>te.createElement(UE,{ref:s,iconNode:e,className:k_(`lucide-${LE(Ym(t))}`,`lucide-${t}`,i),...r}));return n.displayName=Ym(t),n};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FE=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],OE=Dn("arrow-left",FE);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BE=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Km=Dn("arrow-right",BE);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kE=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],z_=Dn("circle-check",kE);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zE=[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z",key:"1f1r0c"}]],Tl=Dn("diamond",zE);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VE=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],gu=Dn("eye-off",VE);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HE=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],vu=Dn("eye",HE);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GE=[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",key:"1s6t7t"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]],WE=Dn("key-round",GE);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jE=[["path",{d:"m10 17 5-5-5-5",key:"1bsop3"}],["path",{d:"M15 12H3",key:"6jk70r"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}]],XE=Dn("log-in",jE);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qE=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],$E=Dn("mail",qE);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YE=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],KE=Dn("moon",YE);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZE=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],JE=Dn("shield-alert",ZE);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QE=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],e1=Dn("sun",QE);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Zm=Dn("x",t1);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $h="184",n1=0,Jm=1,i1=2,Al=1,r1=2,Co=3,Sr=0,_n=1,pi=2,Fi=0,zs=1,Qm=2,eg=3,tg=4,s1=5,Fr=100,o1=101,a1=102,l1=103,c1=104,u1=200,d1=201,f1=202,h1=203,Jd=204,Qd=205,p1=206,m1=207,g1=208,v1=209,_1=210,x1=211,y1=212,S1=213,M1=214,ef=0,tf=1,nf=2,Ys=3,rf=4,sf=5,of=6,af=7,V_=0,E1=1,w1=2,xi=0,H_=1,G_=2,W_=3,Yh=4,j_=5,X_=6,q_=7,$_=300,Jr=301,Ks=302,bl=303,_u=304,Nc=306,lf=1e3,Ii=1001,cf=1002,Xt=1003,T1=1004,Ga=1005,nn=1006,xu=1007,Vr=1008,An=1009,Y_=1010,K_=1011,oa=1012,Kh=1013,Mi=1014,mi=1015,Hi=1016,Zh=1017,Jh=1018,aa=1020,Z_=35902,J_=35899,Q_=1021,ex=1022,Qn=1023,Gi=1026,Hr=1027,tx=1028,Qh=1029,Qr=1030,ep=1031,tp=1033,Rl=33776,Cl=33777,Pl=33778,Ll=33779,uf=35840,df=35841,ff=35842,hf=35843,pf=36196,mf=37492,gf=37496,vf=37488,_f=37489,ac=37490,xf=37491,yf=37808,Sf=37809,Mf=37810,Ef=37811,wf=37812,Tf=37813,Af=37814,bf=37815,Rf=37816,Cf=37817,Pf=37818,Lf=37819,Nf=37820,Df=37821,If=36492,Uf=36494,Ff=36495,Of=36283,Bf=36284,lc=36285,kf=36286,A1=3200,zf=0,b1=1,sr="",On="srgb",cc="srgb-linear",uc="linear",lt="srgb",as=7680,ng=519,R1=512,C1=513,P1=514,np=515,L1=516,N1=517,ip=518,D1=519,ig=35044,rg="300 es",gi=2e3,la=2001;function I1(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function dc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function U1(){const t=dc("canvas");return t.style.display="block",t}const sg={};function og(...t){const e="THREE."+t.shift();console.log(e,...t)}function nx(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Be(...t){t=nx(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function rt(...t){t=nx(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Vf(...t){const e=t.join(" ");e in sg||(sg[e]=!0,Be(...t))}function F1(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const O1={[ef]:tf,[nf]:of,[rf]:af,[Ys]:sf,[tf]:ef,[of]:nf,[af]:rf,[sf]:Ys};class is{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yu=Math.PI/180,Hf=180/Math.PI;function ma(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Jt[t&255]+Jt[t>>8&255]+Jt[t>>16&255]+Jt[t>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[n&63|128]+Jt[n>>8&255]+"-"+Jt[n>>16&255]+Jt[n>>24&255]+Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]).toLowerCase()}function Je(t,e,n){return Math.max(e,Math.min(n,t))}function B1(t,e){return(t%e+e)%e}function Su(t,e,n){return(1-n)*t+n*e}function vo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function fn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const gp=class gp{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Je(this.x,e.x,n.x),this.y=Je(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Je(this.x,e,n),this.y=Je(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};gp.prototype.isVector2=!0;let et=gp;class so{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],d=s[o+0],v=s[o+1],g=s[o+2],y=s[o+3];if(f!==y||l!==d||c!==v||u!==g){let p=l*d+c*v+u*g+f*y;p<0&&(d=-d,v=-v,g=-g,y=-y,p=-p);let h=1-a;if(p<.9995){const m=Math.acos(p),_=Math.sin(m);h=Math.sin(h*m)/_,a=Math.sin(a*m)/_,l=l*h+d*a,c=c*h+v*a,u=u*h+g*a,f=f*h+y*a}else{l=l*h+d*a,c=c*h+v*a,u=u*h+g*a,f=f*h+y*a;const m=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=m,c*=m,u*=m,f*=m}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],v=s[o+2],g=s[o+3];return e[n]=a*g+u*f+l*v-c*d,e[n+1]=l*g+u*d+c*f-a*v,e[n+2]=c*g+u*v+a*d-l*f,e[n+3]=u*g-a*f-l*d-c*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),v=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*v*g,this._y=c*v*f-d*u*g,this._z=c*u*g+d*v*f,this._w=c*u*f-d*v*g;break;case"YXZ":this._x=d*u*f+c*v*g,this._y=c*v*f-d*u*g,this._z=c*u*g-d*v*f,this._w=c*u*f+d*v*g;break;case"ZXY":this._x=d*u*f-c*v*g,this._y=c*v*f+d*u*g,this._z=c*u*g+d*v*f,this._w=c*u*f-d*v*g;break;case"ZYX":this._x=d*u*f-c*v*g,this._y=c*v*f+d*u*g,this._z=c*u*g-d*v*f,this._w=c*u*f+d*v*g;break;case"YZX":this._x=d*u*f+c*v*g,this._y=c*v*f+d*u*g,this._z=c*u*g-d*v*f,this._w=c*u*f-d*v*g;break;case"XZY":this._x=d*u*f-c*v*g,this._y=c*v*f-d*u*g,this._z=c*u*g+d*v*f,this._w=c*u*f+d*v*g;break;default:Be("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+a+f;if(d>0){const v=.5/Math.sqrt(d+1);this._w=.25/v,this._x=(u-l)*v,this._y=(s-c)*v,this._z=(o-r)*v}else if(i>a&&i>f){const v=2*Math.sqrt(1+i-a-f);this._w=(u-l)/v,this._x=.25*v,this._y=(r+o)/v,this._z=(s+c)/v}else if(a>f){const v=2*Math.sqrt(1+a-i-f);this._w=(s-c)/v,this._x=(r+o)/v,this._y=.25*v,this._z=(l+u)/v}else{const v=2*Math.sqrt(1+f-i-a);this._w=(o-r)/v,this._x=(s+c)/v,this._y=(l+u)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const vp=class vp{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(ag.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(ag.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Je(this.x,e.x,n.x),this.y=Je(this.y,e.y,n.y),this.z=Je(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Je(this.x,e,n),this.y=Je(this.y,e,n),this.z=Je(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Mu.copy(this).projectOnVector(e),this.sub(Mu)}reflect(e){return this.sub(Mu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};vp.prototype.isVector3=!0;let z=vp;const Mu=new z,ag=new so,_p=class _p{constructor(e,n,i,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],v=i[5],g=i[8],y=r[0],p=r[3],h=r[6],m=r[1],_=r[4],M=r[7],T=r[2],w=r[5],R=r[8];return s[0]=o*y+a*m+l*T,s[3]=o*p+a*_+l*w,s[6]=o*h+a*M+l*R,s[1]=c*y+u*m+f*T,s[4]=c*p+u*_+f*w,s[7]=c*h+u*M+f*R,s[2]=d*y+v*m+g*T,s[5]=d*p+v*_+g*w,s[8]=d*h+v*M+g*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,v=c*s-o*l,g=n*f+i*d+r*v;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=f*y,e[1]=(r*c-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=d*y,e[4]=(u*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=v*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Eu.makeScale(e,n)),this}rotate(e){return this.premultiply(Eu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Eu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};_p.prototype.isMatrix3=!0;let He=_p;const Eu=new He,lg=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cg=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function k1(){const t={enabled:!0,workingColorSpace:cc,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===lt&&(r.r=Oi(r.r),r.g=Oi(r.g),r.b=Oi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===lt&&(r.r=Vs(r.r),r.g=Vs(r.g),r.b=Vs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===sr?uc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Vf("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Vf("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[cc]:{primaries:e,whitePoint:i,transfer:uc,toXYZ:lg,fromXYZ:cg,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:On},outputColorSpaceConfig:{drawingBufferColorSpace:On}},[On]:{primaries:e,whitePoint:i,transfer:lt,toXYZ:lg,fromXYZ:cg,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:On}}}),t}const Qe=k1();function Oi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Vs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ls;class z1{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ls===void 0&&(ls=dc("canvas")),ls.width=e.width,ls.height=e.height;const r=ls.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ls}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=dc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Oi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Oi(n[i]/255)*255):n[i]=Oi(n[i]);return{data:n,width:e.width,height:e.height}}else return Be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let V1=0;class rp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:V1++}),this.uuid=ma(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(wu(r[o].image)):s.push(wu(r[o]))}else s=wu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function wu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?z1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Be("Texture: Unable to serialize Texture."),{})}let H1=0;const Tu=new z;class rn extends is{constructor(e=rn.DEFAULT_IMAGE,n=rn.DEFAULT_MAPPING,i=Ii,r=Ii,s=nn,o=Vr,a=Qn,l=An,c=rn.DEFAULT_ANISOTROPY,u=sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:H1++}),this.uuid=ma(),this.name="",this.source=new rp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Tu).x}get height(){return this.source.getSize(Tu).y}get depth(){return this.source.getSize(Tu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Be(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Be(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case lf:e.x=e.x-Math.floor(e.x);break;case Ii:e.x=e.x<0?0:1;break;case cf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case lf:e.y=e.y-Math.floor(e.y);break;case Ii:e.y=e.y<0?0:1;break;case cf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=$_;rn.DEFAULT_ANISOTROPY=1;const xp=class xp{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],v=l[5],g=l[9],y=l[2],p=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-y)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+y)<.1&&Math.abs(g+p)<.1&&Math.abs(c+v+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,M=(v+1)/2,T=(h+1)/2,w=(u+d)/4,R=(f+y)/4,x=(g+p)/4;return _>M&&_>T?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=w/i,s=R/i):M>T?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=w/r,s=x/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=R/s,r=x/s),this.set(i,r,s,n),this}let m=Math.sqrt((p-g)*(p-g)+(f-y)*(f-y)+(d-u)*(d-u));return Math.abs(m)<.001&&(m=1),this.x=(p-g)/m,this.y=(f-y)/m,this.z=(d-u)/m,this.w=Math.acos((c+v+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Je(this.x,e.x,n.x),this.y=Je(this.y,e.y,n.y),this.z=Je(this.z,e.z,n.z),this.w=Je(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Je(this.x,e,n),this.y=Je(this.y,e,n),this.z=Je(this.z,e,n),this.w=Je(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};xp.prototype.isVector4=!0;let bt=xp;class G1 extends is{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new bt(0,0,e,n),this.scissorTest=!1,this.viewport=new bt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new rn(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new rp(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yi extends G1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class ix extends rn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class W1 extends rn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const hc=class hc{constructor(e,n,i,r,s,o,a,l,c,u,f,d,v,g,y,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,d,v,g,y,p)}set(e,n,i,r,s,o,a,l,c,u,f,d,v,g,y,p){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=v,h[7]=g,h[11]=y,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new hc().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/cs.setFromMatrixColumn(e,0).length(),s=1/cs.setFromMatrixColumn(e,1).length(),o=1/cs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,v=o*f,g=a*u,y=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=v+g*c,n[5]=d-y*c,n[9]=-a*l,n[2]=y-d*c,n[6]=g+v*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,v=l*f,g=c*u,y=c*f;n[0]=d+y*a,n[4]=g*a-v,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=v*a-g,n[6]=y+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,v=l*f,g=c*u,y=c*f;n[0]=d-y*a,n[4]=-o*f,n[8]=g+v*a,n[1]=v+g*a,n[5]=o*u,n[9]=y-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,v=o*f,g=a*u,y=a*f;n[0]=l*u,n[4]=g*c-v,n[8]=d*c+y,n[1]=l*f,n[5]=y*c+d,n[9]=v*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,v=o*c,g=a*l,y=a*c;n[0]=l*u,n[4]=y-d*f,n[8]=g*f+v,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=v*f+g,n[10]=d-y*f}else if(e.order==="XZY"){const d=o*l,v=o*c,g=a*l,y=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+y,n[5]=o*u,n[9]=v*f-g,n[2]=g*f-v,n[6]=a*u,n[10]=y*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(j1,e,X1)}lookAt(e,n,i){const r=this.elements;return Mn.subVectors(e,n),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Yi.crossVectors(i,Mn),Yi.lengthSq()===0&&(Math.abs(i.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Yi.crossVectors(i,Mn)),Yi.normalize(),Wa.crossVectors(Mn,Yi),r[0]=Yi.x,r[4]=Wa.x,r[8]=Mn.x,r[1]=Yi.y,r[5]=Wa.y,r[9]=Mn.y,r[2]=Yi.z,r[6]=Wa.z,r[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],v=i[13],g=i[2],y=i[6],p=i[10],h=i[14],m=i[3],_=i[7],M=i[11],T=i[15],w=r[0],R=r[4],x=r[8],b=r[12],P=r[1],L=r[5],U=r[9],$=r[13],j=r[2],I=r[6],B=r[10],G=r[14],O=r[3],q=r[7],Z=r[11],ie=r[15];return s[0]=o*w+a*P+l*j+c*O,s[4]=o*R+a*L+l*I+c*q,s[8]=o*x+a*U+l*B+c*Z,s[12]=o*b+a*$+l*G+c*ie,s[1]=u*w+f*P+d*j+v*O,s[5]=u*R+f*L+d*I+v*q,s[9]=u*x+f*U+d*B+v*Z,s[13]=u*b+f*$+d*G+v*ie,s[2]=g*w+y*P+p*j+h*O,s[6]=g*R+y*L+p*I+h*q,s[10]=g*x+y*U+p*B+h*Z,s[14]=g*b+y*$+p*G+h*ie,s[3]=m*w+_*P+M*j+T*O,s[7]=m*R+_*L+M*I+T*q,s[11]=m*x+_*U+M*B+T*Z,s[15]=m*b+_*$+M*G+T*ie,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],v=e[14],g=e[3],y=e[7],p=e[11],h=e[15],m=l*v-c*d,_=a*v-c*f,M=a*d-l*f,T=o*v-c*u,w=o*d-l*u,R=o*f-a*u;return n*(y*m-p*_+h*M)-i*(g*m-p*T+h*w)+r*(g*_-y*T+h*R)-s*(g*M-y*w+p*R)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],v=e[11],g=e[12],y=e[13],p=e[14],h=e[15],m=n*a-i*o,_=n*l-r*o,M=n*c-s*o,T=i*l-r*a,w=i*c-s*a,R=r*c-s*l,x=u*y-f*g,b=u*p-d*g,P=u*h-v*g,L=f*p-d*y,U=f*h-v*y,$=d*h-v*p,j=m*$-_*U+M*L+T*P-w*b+R*x;if(j===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/j;return e[0]=(a*$-l*U+c*L)*I,e[1]=(r*U-i*$-s*L)*I,e[2]=(y*R-p*w+h*T)*I,e[3]=(d*w-f*R-v*T)*I,e[4]=(l*P-o*$-c*b)*I,e[5]=(n*$-r*P+s*b)*I,e[6]=(p*M-g*R-h*_)*I,e[7]=(u*R-d*M+v*_)*I,e[8]=(o*U-a*P+c*x)*I,e[9]=(i*P-n*U-s*x)*I,e[10]=(g*w-y*M+h*m)*I,e[11]=(f*M-u*w-v*m)*I,e[12]=(a*b-o*L-l*x)*I,e[13]=(n*L-i*b+r*x)*I,e[14]=(y*_-g*T-p*m)*I,e[15]=(u*T-f*_+d*m)*I,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,d=s*c,v=s*u,g=s*f,y=o*u,p=o*f,h=a*f,m=l*c,_=l*u,M=l*f,T=i.x,w=i.y,R=i.z;return r[0]=(1-(y+h))*T,r[1]=(v+M)*T,r[2]=(g-_)*T,r[3]=0,r[4]=(v-M)*w,r[5]=(1-(d+h))*w,r[6]=(p+m)*w,r[7]=0,r[8]=(g+_)*R,r[9]=(p-m)*R,r[10]=(1-(d+y))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let o=cs.set(r[0],r[1],r[2]).length();const a=cs.set(r[4],r[5],r[6]).length(),l=cs.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Xn.copy(this);const c=1/o,u=1/a,f=1/l;return Xn.elements[0]*=c,Xn.elements[1]*=c,Xn.elements[2]*=c,Xn.elements[4]*=u,Xn.elements[5]*=u,Xn.elements[6]*=u,Xn.elements[8]*=f,Xn.elements[9]*=f,Xn.elements[10]*=f,n.setFromRotationMatrix(Xn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,r,s,o,a=gi,l=!1){const c=this.elements,u=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),v=(i+r)/(i-r);let g,y;if(l)g=s/(o-s),y=o*s/(o-s);else if(a===gi)g=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===la)g=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=v,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=gi,l=!1){const c=this.elements,u=2/(n-e),f=2/(i-r),d=-(n+e)/(n-e),v=-(i+r)/(i-r);let g,y;if(l)g=1/(o-s),y=o/(o-s);else if(a===gi)g=-2/(o-s),y=-(o+s)/(o-s);else if(a===la)g=-1/(o-s),y=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=v,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};hc.prototype.isMatrix4=!0;let Dt=hc;const cs=new z,Xn=new Dt,j1=new z(0,0,0),X1=new z(1,1,1),Yi=new z,Wa=new z,Mn=new z,ug=new Dt,dg=new so;class Mr{constructor(e=0,n=0,i=0,r=Mr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],v=r[10];switch(n){case"XYZ":this._y=Math.asin(Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,v),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,v),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,v),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Je(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,v),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,v));break;case"XZY":this._z=Math.asin(-Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,v),this._y=0);break;default:Be("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return ug.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ug,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return dg.setFromEuler(this),this.setFromQuaternion(dg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mr.DEFAULT_ORDER="XYZ";class rx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let q1=0;const fg=new z,us=new so,Ti=new Dt,ja=new z,_o=new z,$1=new z,Y1=new so,hg=new z(1,0,0),pg=new z(0,1,0),mg=new z(0,0,1),gg={type:"added"},K1={type:"removed"},ds={type:"childadded",child:null},Au={type:"childremoved",child:null};class sn extends is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:q1++}),this.uuid=ma(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=sn.DEFAULT_UP.clone();const e=new z,n=new Mr,i=new so,r=new z(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Dt},normalMatrix:{value:new He}}),this.matrix=new Dt,this.matrixWorld=new Dt,this.matrixAutoUpdate=sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return us.setFromAxisAngle(e,n),this.quaternion.multiply(us),this}rotateOnWorldAxis(e,n){return us.setFromAxisAngle(e,n),this.quaternion.premultiply(us),this}rotateX(e){return this.rotateOnAxis(hg,e)}rotateY(e){return this.rotateOnAxis(pg,e)}rotateZ(e){return this.rotateOnAxis(mg,e)}translateOnAxis(e,n){return fg.copy(e).applyQuaternion(this.quaternion),this.position.add(fg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(hg,e)}translateY(e){return this.translateOnAxis(pg,e)}translateZ(e){return this.translateOnAxis(mg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ja.copy(e):ja.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),_o.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(_o,ja,this.up):Ti.lookAt(ja,_o,this.up),this.quaternion.setFromRotationMatrix(Ti),r&&(Ti.extractRotation(r.matrixWorld),us.setFromRotationMatrix(Ti),this.quaternion.premultiply(us.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gg),ds.child=e,this.dispatchEvent(ds),ds.child=null):rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(K1),Au.child=e,this.dispatchEvent(Au),Au.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gg),ds.child=e,this.dispatchEvent(ds),ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_o,e,$1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_o,Y1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),v=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),v.length>0&&(i.animations=v),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}sn.DEFAULT_UP=new z(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Po extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Z1={type:"move"};class bu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Po,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Po,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Po,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const p=n.getJointPose(y,i),h=this._getHandJoint(c,y);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),v=.02,g=.005;c.inputState.pinching&&d>v+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=v-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Z1)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Po;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const sx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},Xa={h:0,s:0,l:0};function Ru(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class tt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=On){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Qe.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Qe.workingColorSpace){if(e=B1(e,1),n=Je(n,0,1),i=Je(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Ru(o,s,e+1/3),this.g=Ru(o,s,e),this.b=Ru(o,s,e-1/3)}return Qe.colorSpaceToWorking(this,r),this}setStyle(e,n=On){function i(s){s!==void 0&&parseFloat(s)<1&&Be("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Be("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);Be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=On){const i=sx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oi(e.r),this.g=Oi(e.g),this.b=Oi(e.b),this}copyLinearToSRGB(e){return this.r=Vs(e.r),this.g=Vs(e.g),this.b=Vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=On){return Qe.workingToColorSpace(Qt.copy(this),e),Math.round(Je(Qt.r*255,0,255))*65536+Math.round(Je(Qt.g*255,0,255))*256+Math.round(Je(Qt.b*255,0,255))}getHexString(e=On){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Qe.workingColorSpace){Qe.workingToColorSpace(Qt.copy(this),n);const i=Qt.r,r=Qt.g,s=Qt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Qe.workingColorSpace){return Qe.workingToColorSpace(Qt.copy(this),n),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=On){Qe.workingToColorSpace(Qt.copy(this),e);const n=Qt.r,i=Qt.g,r=Qt.b;return e!==On?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ki),this.setHSL(Ki.h+e,Ki.s+n,Ki.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ki),e.getHSL(Xa);const i=Su(Ki.h,Xa.h,n),r=Su(Ki.s,Xa.s,n),s=Su(Ki.l,Xa.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new tt;tt.NAMES=sx;class J1 extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mr,this.environmentIntensity=1,this.environmentRotation=new Mr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const qn=new z,Ai=new z,Cu=new z,bi=new z,fs=new z,hs=new z,vg=new z,Pu=new z,Lu=new z,Nu=new z,Du=new bt,Iu=new bt,Uu=new bt;class Jn{constructor(e=new z,n=new z,i=new z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),qn.subVectors(e,n),r.cross(qn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){qn.subVectors(r,n),Ai.subVectors(i,n),Cu.subVectors(e,n);const o=qn.dot(qn),a=qn.dot(Ai),l=qn.dot(Cu),c=Ai.dot(Ai),u=Ai.dot(Cu),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,v=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-v-g,g,v)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,bi)===null?!1:bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,bi.x),l.addScaledVector(o,bi.y),l.addScaledVector(a,bi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Du.setScalar(0),Iu.setScalar(0),Uu.setScalar(0),Du.fromBufferAttribute(e,n),Iu.fromBufferAttribute(e,i),Uu.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Du,s.x),o.addScaledVector(Iu,s.y),o.addScaledVector(Uu,s.z),o}static isFrontFacing(e,n,i,r){return qn.subVectors(i,n),Ai.subVectors(e,n),qn.cross(Ai).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),qn.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Jn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Jn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;fs.subVectors(r,i),hs.subVectors(s,i),Pu.subVectors(e,i);const l=fs.dot(Pu),c=hs.dot(Pu);if(l<=0&&c<=0)return n.copy(i);Lu.subVectors(e,r);const u=fs.dot(Lu),f=hs.dot(Lu);if(u>=0&&f<=u)return n.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(fs,o);Nu.subVectors(e,s);const v=fs.dot(Nu),g=hs.dot(Nu);if(g>=0&&v<=g)return n.copy(s);const y=v*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(hs,a);const p=u*g-v*f;if(p<=0&&f-u>=0&&v-g>=0)return vg.subVectors(s,r),a=(f-u)/(f-u+(v-g)),n.copy(r).addScaledVector(vg,a);const h=1/(p+y+d);return o=y*h,a=d*h,n.copy(i).addScaledVector(fs,o).addScaledVector(hs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ga{constructor(e=new z(1/0,1/0,1/0),n=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint($n.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint($n.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=$n.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,$n):$n.fromBufferAttribute(s,o),$n.applyMatrix4(e.matrixWorld),this.expandByPoint($n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),qa.copy(i.boundingBox)),qa.applyMatrix4(e.matrixWorld),this.union(qa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xo),$a.subVectors(this.max,xo),ps.subVectors(e.a,xo),ms.subVectors(e.b,xo),gs.subVectors(e.c,xo),Zi.subVectors(ms,ps),Ji.subVectors(gs,ms),Cr.subVectors(ps,gs);let n=[0,-Zi.z,Zi.y,0,-Ji.z,Ji.y,0,-Cr.z,Cr.y,Zi.z,0,-Zi.x,Ji.z,0,-Ji.x,Cr.z,0,-Cr.x,-Zi.y,Zi.x,0,-Ji.y,Ji.x,0,-Cr.y,Cr.x,0];return!Fu(n,ps,ms,gs,$a)||(n=[1,0,0,0,1,0,0,0,1],!Fu(n,ps,ms,gs,$a))?!1:(Ya.crossVectors(Zi,Ji),n=[Ya.x,Ya.y,Ya.z],Fu(n,ps,ms,gs,$a))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ri=[new z,new z,new z,new z,new z,new z,new z,new z],$n=new z,qa=new ga,ps=new z,ms=new z,gs=new z,Zi=new z,Ji=new z,Cr=new z,xo=new z,$a=new z,Ya=new z,Pr=new z;function Fu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Pr.fromArray(t,s);const a=r.x*Math.abs(Pr.x)+r.y*Math.abs(Pr.y)+r.z*Math.abs(Pr.z),l=e.dot(Pr),c=n.dot(Pr),u=i.dot(Pr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Ut=new z,Ka=new et;let Q1=0;class Si extends is{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Q1++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=ig,this.updateRanges=[],this.gpuType=mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ka.fromBufferAttribute(this,n),Ka.applyMatrix3(e),this.setXY(n,Ka.x,Ka.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyMatrix3(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyMatrix4(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyNormalMatrix(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.transformDirection(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=vo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=fn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=vo(n,this.array)),n}setX(e,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=vo(n,this.array)),n}setY(e,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=vo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=vo(n,this.array)),n}setW(e,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=fn(n,this.array),i=fn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=fn(n,this.array),i=fn(i,this.array),r=fn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=fn(n,this.array),i=fn(i,this.array),r=fn(r,this.array),s=fn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ig&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class ox extends Si{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class ax extends Si{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Cn extends Si{constructor(e,n,i){super(new Float32Array(e),n,i)}}const ew=new ga,yo=new z,Ou=new z;class sp{constructor(e=new z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):ew.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yo.subVectors(e,this.center);const n=yo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(yo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ou.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yo.copy(e.center).add(Ou)),this.expandByPoint(yo.copy(e.center).sub(Ou))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let tw=0;const Un=new Dt,Bu=new sn,vs=new z,En=new ga,So=new ga,Vt=new z;class ri extends is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tw++}),this.uuid=ma(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(I1(e)?ax:ox)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,n,i){return Un.makeTranslation(e,n,i),this.applyMatrix4(Un),this}scale(e,n,i){return Un.makeScale(e,n,i),this.applyMatrix4(Un),this}lookAt(e){return Bu.lookAt(e),Bu.updateMatrix(),this.applyMatrix4(Bu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Cn(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ga);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];En.setFromBufferAttribute(s),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sp);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(En.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];So.setFromBufferAttribute(a),this.morphTargetsRelative?(Vt.addVectors(En.min,So.min),En.expandByPoint(Vt),Vt.addVectors(En.max,So.max),En.expandByPoint(Vt)):(En.expandByPoint(So.min),En.expandByPoint(So.max))}En.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Vt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Vt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Vt.fromBufferAttribute(a,c),l&&(vs.fromBufferAttribute(e,c),Vt.add(vs)),r=Math.max(r,i.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Si(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let x=0;x<i.count;x++)a[x]=new z,l[x]=new z;const c=new z,u=new z,f=new z,d=new et,v=new et,g=new et,y=new z,p=new z;function h(x,b,P){c.fromBufferAttribute(i,x),u.fromBufferAttribute(i,b),f.fromBufferAttribute(i,P),d.fromBufferAttribute(s,x),v.fromBufferAttribute(s,b),g.fromBufferAttribute(s,P),u.sub(c),f.sub(c),v.sub(d),g.sub(d);const L=1/(v.x*g.y-g.x*v.y);isFinite(L)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(f,-v.y).multiplyScalar(L),p.copy(f).multiplyScalar(v.x).addScaledVector(u,-g.x).multiplyScalar(L),a[x].add(y),a[b].add(y),a[P].add(y),l[x].add(p),l[b].add(p),l[P].add(p))}let m=this.groups;m.length===0&&(m=[{start:0,count:e.count}]);for(let x=0,b=m.length;x<b;++x){const P=m[x],L=P.start,U=P.count;for(let $=L,j=L+U;$<j;$+=3)h(e.getX($+0),e.getX($+1),e.getX($+2))}const _=new z,M=new z,T=new z,w=new z;function R(x){T.fromBufferAttribute(r,x),w.copy(T);const b=a[x];_.copy(b),_.sub(T.multiplyScalar(T.dot(b))).normalize(),M.crossVectors(w,b);const L=M.dot(l[x])<0?-1:1;o.setXYZW(x,_.x,_.y,_.z,L)}for(let x=0,b=m.length;x<b;++x){const P=m[x],L=P.start,U=P.count;for(let $=L,j=L+U;$<j;$+=3)R(e.getX($+0)),R(e.getX($+1)),R(e.getX($+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Si(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,v=i.count;d<v;d++)i.setXYZ(d,0,0,0);const r=new z,s=new z,o=new z,a=new z,l=new z,c=new z,u=new z,f=new z;if(e)for(let d=0,v=e.count;d<v;d+=3){const g=e.getX(d+0),y=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,p),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,v=n.count;d<v;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Vt.fromBufferAttribute(e,n),Vt.normalize(),e.setXYZ(n,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let v=0,g=0;for(let y=0,p=l.length;y<p;y++){a.isInterleavedBufferAttribute?v=l[y]*a.data.stride+a.offset:v=l[y]*u;for(let h=0;h<u;h++)d[g++]=c[v++]}return new Si(d,u,f)}if(this.index===null)return Be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ri,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],v=e(d,i);l.push(v)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const v=c[f];u.push(v.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,v=f.length;d<v;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let nw=0;class va extends is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nw++}),this.uuid=ma(),this.name="",this.type="Material",this.blending=zs,this.side=Sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jd,this.blendDst=Qd,this.blendEquation=Fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ng,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=as,this.stencilZFail=as,this.stencilZPass=as,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Be(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Be(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==zs&&(i.blending=this.blending),this.side!==Sr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Jd&&(i.blendSrc=this.blendSrc),this.blendDst!==Qd&&(i.blendDst=this.blendDst),this.blendEquation!==Fr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ys&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ng&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==as&&(i.stencilFail=this.stencilFail),this.stencilZFail!==as&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==as&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ci=new z,ku=new z,Za=new z,Qi=new z,zu=new z,Ja=new z,Vu=new z;class iw{constructor(e=new z,n=new z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ci.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,n),Ci.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){ku.copy(e).add(n).multiplyScalar(.5),Za.copy(n).sub(e).normalize(),Qi.copy(this.origin).sub(ku);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Za),a=Qi.dot(this.direction),l=-Qi.dot(Za),c=Qi.lengthSq(),u=Math.abs(1-o*o);let f,d,v,g;if(u>0)if(f=o*l-a,d=o*a-l,g=s*u,f>=0)if(d>=-g)if(d<=g){const y=1/u;f*=y,d*=y,v=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),v=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),v=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),v=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),v=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),v=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),v=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ku).addScaledVector(Za,d),v}intersectSphere(e,n){Ci.subVectors(e.center,this.origin);const i=Ci.dot(this.direction),r=Ci.dot(Ci)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,n,i,r,s){zu.subVectors(n,e),Ja.subVectors(i,e),Vu.crossVectors(zu,Ja);let o=this.direction.dot(Vu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Qi.subVectors(this.origin,e);const l=a*this.direction.dot(Ja.crossVectors(Qi,Ja));if(l<0)return null;const c=a*this.direction.dot(zu.cross(Qi));if(c<0||l+c>o)return null;const u=-a*Qi.dot(Vu);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class op extends va{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mr,this.combine=V_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _g=new Dt,Lr=new iw,Qa=new sp,xg=new z,el=new z,tl=new z,nl=new z,Hu=new z,il=new z,yg=new z,rl=new z;class ii extends sn{constructor(e=new ri,n=new op){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){il.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Hu.fromBufferAttribute(f,e),o?il.addScaledVector(Hu,u):il.addScaledVector(Hu.sub(n),u))}n.add(il)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Qa.copy(i.boundingSphere),Qa.applyMatrix4(s),Lr.copy(e.ray).recast(e.near),!(Qa.containsPoint(Lr.origin)===!1&&(Lr.intersectSphere(Qa,xg)===null||Lr.origin.distanceToSquared(xg)>(e.far-e.near)**2))&&(_g.copy(s).invert(),Lr.copy(e.ray).applyMatrix4(_g),!(i.boundingBox!==null&&Lr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Lr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,v=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){const p=d[g],h=o[p.materialIndex],m=Math.max(p.start,v.start),_=Math.min(a.count,Math.min(p.start+p.count,v.start+v.count));for(let M=m,T=_;M<T;M+=3){const w=a.getX(M),R=a.getX(M+1),x=a.getX(M+2);r=sl(this,h,e,i,c,u,f,w,R,x),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const g=Math.max(0,v.start),y=Math.min(a.count,v.start+v.count);for(let p=g,h=y;p<h;p+=3){const m=a.getX(p),_=a.getX(p+1),M=a.getX(p+2);r=sl(this,o,e,i,c,u,f,m,_,M),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){const p=d[g],h=o[p.materialIndex],m=Math.max(p.start,v.start),_=Math.min(l.count,Math.min(p.start+p.count,v.start+v.count));for(let M=m,T=_;M<T;M+=3){const w=M,R=M+1,x=M+2;r=sl(this,h,e,i,c,u,f,w,R,x),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const g=Math.max(0,v.start),y=Math.min(l.count,v.start+v.count);for(let p=g,h=y;p<h;p+=3){const m=p,_=p+1,M=p+2;r=sl(this,o,e,i,c,u,f,m,_,M),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function rw(t,e,n,i,r,s,o,a){let l;if(e.side===_n?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Sr,a),l===null)return null;rl.copy(a),rl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(rl);return c<n.near||c>n.far?null:{distance:c,point:rl.clone(),object:t}}function sl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,el),t.getVertexPosition(l,tl),t.getVertexPosition(c,nl);const u=rw(t,e,n,i,el,tl,nl,yg);if(u){const f=new z;Jn.getBarycoord(yg,el,tl,nl,f),r&&(u.uv=Jn.getInterpolatedAttribute(r,a,l,c,f,new et)),s&&(u.uv1=Jn.getInterpolatedAttribute(s,a,l,c,f,new et)),o&&(u.normal=Jn.getInterpolatedAttribute(o,a,l,c,f,new z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new z,materialIndex:0};Jn.getNormal(el,tl,nl,d.normal),u.face=d,u.barycoord=f}return u}class sw extends rn{constructor(e=null,n=1,i=1,r,s,o,a,l,c=Xt,u=Xt,f,d){super(null,o,a,l,c,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Gu=new z,ow=new z,aw=new He;class Ur{constructor(e=new z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Gu.subVectors(i,n).cross(ow.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(Gu),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||aw.getNormalMatrix(e),r=this.coplanarPoint(Gu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Nr=new sp,lw=new et(.5,.5),ol=new z;class ap{constructor(e=new Ur,n=new Ur,i=new Ur,r=new Ur,s=new Ur,o=new Ur){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=gi,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],f=s[5],d=s[6],v=s[7],g=s[8],y=s[9],p=s[10],h=s[11],m=s[12],_=s[13],M=s[14],T=s[15];if(r[0].setComponents(c-o,v-u,h-g,T-m).normalize(),r[1].setComponents(c+o,v+u,h+g,T+m).normalize(),r[2].setComponents(c+a,v+f,h+y,T+_).normalize(),r[3].setComponents(c-a,v-f,h-y,T-_).normalize(),i)r[4].setComponents(l,d,p,M).normalize(),r[5].setComponents(c-l,v-d,h-p,T-M).normalize();else if(r[4].setComponents(c-l,v-d,h-p,T-M).normalize(),n===gi)r[5].setComponents(c+l,v+d,h+p,T+M).normalize();else if(n===la)r[5].setComponents(l,d,p,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Nr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Nr)}intersectsSprite(e){Nr.center.set(0,0,0);const n=lw.distanceTo(e.center);return Nr.radius=.7071067811865476+n,Nr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Nr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ol.x=r.normal.x>0?e.max.x:e.min.x,ol.y=r.normal.y>0?e.max.y:e.min.y,ol.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ol)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class lx extends rn{constructor(e=[],n=Jr,i,r,s,o,a,l,c,u){super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class cw extends rn{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Zs extends rn{constructor(e,n,i=Mi,r,s,o,a=Xt,l=Xt,c,u=Gi,f=1){if(u!==Gi&&u!==Hr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:f};super(d,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new rp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class uw extends Zs{constructor(e,n=Mi,i=Jr,r,s,o=Xt,a=Xt,l,c=Gi){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,n,i,r,s,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class cx extends rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class _a extends ri{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,v=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Cn(c,3)),this.setAttribute("normal",new Cn(u,3)),this.setAttribute("uv",new Cn(f,2));function g(y,p,h,m,_,M,T,w,R,x,b){const P=M/R,L=T/x,U=M/2,$=T/2,j=w/2,I=R+1,B=x+1;let G=0,O=0;const q=new z;for(let Z=0;Z<B;Z++){const ie=Z*L-$;for(let le=0;le<I;le++){const Ue=le*P-U;q[y]=Ue*m,q[p]=ie*_,q[h]=j,c.push(q.x,q.y,q.z),q[y]=0,q[p]=0,q[h]=w>0?1:-1,u.push(q.x,q.y,q.z),f.push(le/R),f.push(1-Z/x),G+=1}}for(let Z=0;Z<x;Z++)for(let ie=0;ie<R;ie++){const le=d+ie+I*Z,Ue=d+ie+I*(Z+1),Fe=d+(ie+1)+I*(Z+1),ce=d+(ie+1)+I*Z;l.push(le,Ue,ce),l.push(Ue,Fe,ce),O+=6}a.addGroup(v,O,b),v+=O,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _a(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class lp extends ri{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new Cn(s,3)),this.setAttribute("normal",new Cn(s.slice(),3)),this.setAttribute("uv",new Cn(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(m){const _=new z,M=new z,T=new z;for(let w=0;w<n.length;w+=3)v(n[w+0],_),v(n[w+1],M),v(n[w+2],T),l(_,M,T,m)}function l(m,_,M,T){const w=T+1,R=[];for(let x=0;x<=w;x++){R[x]=[];const b=m.clone().lerp(M,x/w),P=_.clone().lerp(M,x/w),L=w-x;for(let U=0;U<=L;U++)U===0&&x===w?R[x][U]=b:R[x][U]=b.clone().lerp(P,U/L)}for(let x=0;x<w;x++)for(let b=0;b<2*(w-x)-1;b++){const P=Math.floor(b/2);b%2===0?(d(R[x][P+1]),d(R[x+1][P]),d(R[x][P])):(d(R[x][P+1]),d(R[x+1][P+1]),d(R[x+1][P]))}}function c(m){const _=new z;for(let M=0;M<s.length;M+=3)_.x=s[M+0],_.y=s[M+1],_.z=s[M+2],_.normalize().multiplyScalar(m),s[M+0]=_.x,s[M+1]=_.y,s[M+2]=_.z}function u(){const m=new z;for(let _=0;_<s.length;_+=3){m.x=s[_+0],m.y=s[_+1],m.z=s[_+2];const M=p(m)/2/Math.PI+.5,T=h(m)/Math.PI+.5;o.push(M,1-T)}g(),f()}function f(){for(let m=0;m<o.length;m+=6){const _=o[m+0],M=o[m+2],T=o[m+4],w=Math.max(_,M,T),R=Math.min(_,M,T);w>.9&&R<.1&&(_<.2&&(o[m+0]+=1),M<.2&&(o[m+2]+=1),T<.2&&(o[m+4]+=1))}}function d(m){s.push(m.x,m.y,m.z)}function v(m,_){const M=m*3;_.x=e[M+0],_.y=e[M+1],_.z=e[M+2]}function g(){const m=new z,_=new z,M=new z,T=new z,w=new et,R=new et,x=new et;for(let b=0,P=0;b<s.length;b+=9,P+=6){m.set(s[b+0],s[b+1],s[b+2]),_.set(s[b+3],s[b+4],s[b+5]),M.set(s[b+6],s[b+7],s[b+8]),w.set(o[P+0],o[P+1]),R.set(o[P+2],o[P+3]),x.set(o[P+4],o[P+5]),T.copy(m).add(_).add(M).divideScalar(3);const L=p(T);y(w,P+0,m,L),y(R,P+2,_,L),y(x,P+4,M,L)}}function y(m,_,M,T){T<0&&m.x===1&&(o[_]=m.x-1),M.x===0&&M.z===0&&(o[_]=T/2/Math.PI+.5)}function p(m){return Math.atan2(m.z,-m.x)}function h(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lp(e.vertices,e.indices,e.radius,e.detail)}}class cp extends lp{constructor(e=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new cp(e.radius,e.detail)}}class Dc extends ri{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=n/l,v=[],g=[],y=[],p=[];for(let h=0;h<u;h++){const m=h*d-o;for(let _=0;_<c;_++){const M=_*f-s;g.push(M,-m,0),y.push(0,0,1),p.push(_/a),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let m=0;m<a;m++){const _=m+c*h,M=m+c*(h+1),T=m+1+c*(h+1),w=m+1+c*h;v.push(_,M,w),v.push(M,T,w)}this.setIndex(v),this.setAttribute("position",new Cn(g,3)),this.setAttribute("normal",new Cn(y,3)),this.setAttribute("uv",new Cn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dc(e.width,e.height,e.widthSegments,e.heightSegments)}}function Js(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(Sg(r))r.isRenderTargetTexture?(Be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(Sg(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function an(t){const e={};for(let n=0;n<t.length;n++){const i=Js(t[n]);for(const r in i)e[r]=i[r]}return e}function Sg(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function dw(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function ux(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const fw={clone:Js,merge:an};var hw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ei extends va{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hw,this.fragmentShader=pw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Js(e.uniforms),this.uniformsGroups=dw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class mw extends Ei{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class gw extends va{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zf,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class vw extends gw{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new et(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new tt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new tt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new tt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class _w extends va{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=A1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xw extends va{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class dx extends sn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const Wu=new Dt,Mg=new z,Eg=new z;class yw{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.mapType=An,this.map=null,this.mapPass=null,this.matrix=new Dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ap,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Mg.setFromMatrixPosition(e.matrixWorld),n.position.copy(Mg),Eg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Eg),n.updateMatrixWorld(),Wu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wu,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===la||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Wu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const al=new z,ll=new so,ci=new z;class fx extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Dt,this.projectionMatrix=new Dt,this.projectionMatrixInverse=new Dt,this.coordinateSystem=gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(al,ll,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(al,ll,ci.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(al,ll,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(al,ll,ci.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const er=new z,wg=new et,Tg=new et;class zn extends fx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Hf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(yu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hf*2*Math.atan(Math.tan(yu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){er.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(er.x,er.y).multiplyScalar(-e/er.z),er.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(er.x,er.y).multiplyScalar(-e/er.z)}getViewSize(e,n){return this.getViewBounds(e,wg,Tg),n.subVectors(Tg,wg)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(yu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class up extends fx{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Sw extends yw{constructor(){super(new up(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class cl extends dx{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.target=new sn,this.shadow=new Sw}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class Mw extends dx{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const _s=-90,xs=1;class Ew extends sn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new zn(_s,xs,e,n);r.layers=this.layers,this.add(r);const s=new zn(_s,xs,e,n);s.layers=this.layers,this.add(s);const o=new zn(_s,xs,e,n);o.layers=this.layers,this.add(o);const a=new zn(_s,xs,e,n);a.layers=this.layers,this.add(a);const l=new zn(_s,xs,e,n);l.layers=this.layers,this.add(l);const c=new zn(_s,xs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===gi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===la)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(f,d,v),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class ww extends zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const yp=class yp{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};yp.prototype.isMatrix2=!0;let Ag=yp;function bg(t,e,n,i){const r=Tw(i);switch(n){case Q_:return t*e;case tx:return t*e/r.components*r.byteLength;case Qh:return t*e/r.components*r.byteLength;case Qr:return t*e*2/r.components*r.byteLength;case ep:return t*e*2/r.components*r.byteLength;case ex:return t*e*3/r.components*r.byteLength;case Qn:return t*e*4/r.components*r.byteLength;case tp:return t*e*4/r.components*r.byteLength;case Rl:case Cl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Pl:case Ll:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case df:case hf:return Math.max(t,16)*Math.max(e,8)/4;case uf:case ff:return Math.max(t,8)*Math.max(e,8)/2;case pf:case mf:case vf:case _f:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case gf:case ac:case xf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case yf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Sf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Mf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Ef:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case wf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Tf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Af:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case bf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Rf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Cf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Pf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Lf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Nf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Df:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case If:case Uf:case Ff:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Of:case Bf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case lc:case kf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Tw(t){switch(t){case An:case Y_:return{byteLength:1,components:1};case oa:case K_:case Hi:return{byteLength:2,components:1};case Zh:case Jh:return{byteLength:2,components:4};case Mi:case Kh:case mi:return{byteLength:4,components:1};case Z_:case J_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$h}}));typeof window<"u"&&(window.__THREE__?Be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$h);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function hx(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Aw(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let v;if(c instanceof Float32Array)v=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)v=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?v=t.HALF_FLOAT:v=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)v=t.SHORT;else if(c instanceof Uint32Array)v=t.UNSIGNED_INT;else if(c instanceof Int32Array)v=t.INT;else if(c instanceof Int8Array)v=t.BYTE;else if(c instanceof Uint8Array)v=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)v=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:v,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((v,g)=>v.start-g.start);let d=0;for(let v=1;v<f.length;v++){const g=f[d],y=f[v];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,f[d]=y)}f.length=d+1;for(let v=0,g=f.length;v<g;v++){const y=f[v];t.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var bw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rw=`#ifdef USE_ALPHAHASH
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
#endif`,Cw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dw=`#ifdef USE_AOMAP
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
#endif`,Iw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Uw=`#ifdef USE_BATCHING
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
#endif`,Fw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ow=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kw=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zw=`#ifdef USE_IRIDESCENCE
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
#endif`,Vw=`#ifdef USE_BUMPMAP
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
#endif`,Hw=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Gw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ww=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,qw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,$w=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Yw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Kw=`#define PI 3.141592653589793
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
} // validated`,Zw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Jw=`vec3 transformedNormal = objectNormal;
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
#endif`,Qw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iT="gl_FragColor = linearToOutputTexel( gl_FragColor );",rT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sT=`#ifdef USE_ENVMAP
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
#endif`,oT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,aT=`#ifdef USE_ENVMAP
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
#endif`,lT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cT=`#ifdef USE_ENVMAP
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
#endif`,uT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pT=`#ifdef USE_GRADIENTMAP
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
}`,mT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_T=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,xT=`#ifdef USE_ENVMAP
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
#endif`,yT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ST=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,MT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ET=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wT=`PhysicalMaterial material;
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
#endif`,TT=`uniform sampler2D dfgLUT;
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
}`,AT=`
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
#endif`,bT=`#if defined( RE_IndirectDiffuse )
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
#endif`,RT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,CT=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,PT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,LT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,NT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,DT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,IT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,UT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,FT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,OT=`#if defined( USE_POINTS_UV )
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
#endif`,BT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,VT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,HT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,GT=`#ifdef USE_MORPHTARGETS
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
#endif`,WT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,XT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$T=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,KT=`#ifdef USE_NORMALMAP
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
#endif`,ZT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,JT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,QT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,eA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,iA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,oA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,aA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,fA=`float getShadowMask() {
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
}`,hA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pA=`#ifdef USE_SKINNING
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
#endif`,mA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gA=`#ifdef USE_SKINNING
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
#endif`,vA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_A=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,SA=`#ifdef USE_TRANSMISSION
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
#endif`,MA=`#ifdef USE_TRANSMISSION
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
#endif`,EA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,TA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,RA=`uniform sampler2D t2D;
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
}`,CA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,LA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DA=`#include <common>
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
}`,IA=`#if DEPTH_PACKING == 3200
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
}`,UA=`#define DISTANCE
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
}`,FA=`#define DISTANCE
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
}`,OA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,BA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kA=`uniform float scale;
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
}`,zA=`uniform vec3 diffuse;
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
}`,VA=`#include <common>
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
}`,HA=`uniform vec3 diffuse;
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
}`,GA=`#define LAMBERT
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
}`,WA=`#define LAMBERT
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
}`,jA=`#define MATCAP
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
}`,XA=`#define MATCAP
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
}`,qA=`#define NORMAL
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
}`,$A=`#define NORMAL
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
}`,YA=`#define PHONG
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
}`,KA=`#define PHONG
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
}`,ZA=`#define STANDARD
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
}`,JA=`#define STANDARD
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
}`,QA=`#define TOON
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
}`,eb=`#define TOON
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
}`,tb=`uniform float size;
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
}`,nb=`uniform vec3 diffuse;
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
}`,ib=`#include <common>
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
}`,rb=`uniform vec3 color;
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
}`,sb=`uniform float rotation;
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
}`,ob=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:bw,alphahash_pars_fragment:Rw,alphamap_fragment:Cw,alphamap_pars_fragment:Pw,alphatest_fragment:Lw,alphatest_pars_fragment:Nw,aomap_fragment:Dw,aomap_pars_fragment:Iw,batching_pars_vertex:Uw,batching_vertex:Fw,begin_vertex:Ow,beginnormal_vertex:Bw,bsdfs:kw,iridescence_fragment:zw,bumpmap_pars_fragment:Vw,clipping_planes_fragment:Hw,clipping_planes_pars_fragment:Gw,clipping_planes_pars_vertex:Ww,clipping_planes_vertex:jw,color_fragment:Xw,color_pars_fragment:qw,color_pars_vertex:$w,color_vertex:Yw,common:Kw,cube_uv_reflection_fragment:Zw,defaultnormal_vertex:Jw,displacementmap_pars_vertex:Qw,displacementmap_vertex:eT,emissivemap_fragment:tT,emissivemap_pars_fragment:nT,colorspace_fragment:iT,colorspace_pars_fragment:rT,envmap_fragment:sT,envmap_common_pars_fragment:oT,envmap_pars_fragment:aT,envmap_pars_vertex:lT,envmap_physical_pars_fragment:xT,envmap_vertex:cT,fog_vertex:uT,fog_pars_vertex:dT,fog_fragment:fT,fog_pars_fragment:hT,gradientmap_pars_fragment:pT,lightmap_pars_fragment:mT,lights_lambert_fragment:gT,lights_lambert_pars_fragment:vT,lights_pars_begin:_T,lights_toon_fragment:yT,lights_toon_pars_fragment:ST,lights_phong_fragment:MT,lights_phong_pars_fragment:ET,lights_physical_fragment:wT,lights_physical_pars_fragment:TT,lights_fragment_begin:AT,lights_fragment_maps:bT,lights_fragment_end:RT,lightprobes_pars_fragment:CT,logdepthbuf_fragment:PT,logdepthbuf_pars_fragment:LT,logdepthbuf_pars_vertex:NT,logdepthbuf_vertex:DT,map_fragment:IT,map_pars_fragment:UT,map_particle_fragment:FT,map_particle_pars_fragment:OT,metalnessmap_fragment:BT,metalnessmap_pars_fragment:kT,morphinstance_vertex:zT,morphcolor_vertex:VT,morphnormal_vertex:HT,morphtarget_pars_vertex:GT,morphtarget_vertex:WT,normal_fragment_begin:jT,normal_fragment_maps:XT,normal_pars_fragment:qT,normal_pars_vertex:$T,normal_vertex:YT,normalmap_pars_fragment:KT,clearcoat_normal_fragment_begin:ZT,clearcoat_normal_fragment_maps:JT,clearcoat_pars_fragment:QT,iridescence_pars_fragment:eA,opaque_fragment:tA,packing:nA,premultiplied_alpha_fragment:iA,project_vertex:rA,dithering_fragment:sA,dithering_pars_fragment:oA,roughnessmap_fragment:aA,roughnessmap_pars_fragment:lA,shadowmap_pars_fragment:cA,shadowmap_pars_vertex:uA,shadowmap_vertex:dA,shadowmask_pars_fragment:fA,skinbase_vertex:hA,skinning_pars_vertex:pA,skinning_vertex:mA,skinnormal_vertex:gA,specularmap_fragment:vA,specularmap_pars_fragment:_A,tonemapping_fragment:xA,tonemapping_pars_fragment:yA,transmission_fragment:SA,transmission_pars_fragment:MA,uv_pars_fragment:EA,uv_pars_vertex:wA,uv_vertex:TA,worldpos_vertex:AA,background_vert:bA,background_frag:RA,backgroundCube_vert:CA,backgroundCube_frag:PA,cube_vert:LA,cube_frag:NA,depth_vert:DA,depth_frag:IA,distance_vert:UA,distance_frag:FA,equirect_vert:OA,equirect_frag:BA,linedashed_vert:kA,linedashed_frag:zA,meshbasic_vert:VA,meshbasic_frag:HA,meshlambert_vert:GA,meshlambert_frag:WA,meshmatcap_vert:jA,meshmatcap_frag:XA,meshnormal_vert:qA,meshnormal_frag:$A,meshphong_vert:YA,meshphong_frag:KA,meshphysical_vert:ZA,meshphysical_frag:JA,meshtoon_vert:QA,meshtoon_frag:eb,points_vert:tb,points_frag:nb,shadow_vert:ib,shadow_frag:rb,sprite_vert:sb,sprite_frag:ob},_e={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},fi={basic:{uniforms:an([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:an([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new tt(0)},envMapIntensity:{value:1}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:an([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:an([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:an([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new tt(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:an([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:an([_e.points,_e.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:an([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:an([_e.common,_e.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:an([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:an([_e.sprite,_e.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distance:{uniforms:an([_e.common,_e.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distance_vert,fragmentShader:qe.distance_frag},shadow:{uniforms:an([_e.lights,_e.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};fi.physical={uniforms:an([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const ul={r:0,b:0,g:0},ab=new Dt,px=new He;px.set(-1,0,0,0,1,0,0,0,1);function lb(t,e,n,i,r,s){const o=new tt(0);let a=r===!0?0:1,l,c,u=null,f=0,d=null;function v(m){let _=m.isScene===!0?m.background:null;if(_&&_.isTexture){const M=m.backgroundBlurriness>0;_=e.get(_,M)}return _}function g(m){let _=!1;const M=v(m);M===null?p(o,a):M&&M.isColor&&(p(M,1),_=!0);const T=t.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function y(m,_){const M=v(_);M&&(M.isCubeTexture||M.mapping===Nc)?(c===void 0&&(c=new ii(new _a(1,1,1),new Ei({name:"BackgroundCubeMaterial",uniforms:Js(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ab.makeRotationFromEuler(_.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(px),c.material.toneMapped=Qe.getTransfer(M.colorSpace)!==lt,(u!==M||f!==M.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,u=M,f=M.version,d=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new ii(new Dc(2,2),new Ei({name:"BackgroundMaterial",uniforms:Js(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:Sr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(M.colorSpace)!==lt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,u=M,f=M.version,d=t.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function p(m,_){m.getRGB(ul,ux(t)),n.buffers.color.setClear(ul.r,ul.g,ul.b,_,s)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(m,_=1){o.set(m),a=_,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(m){a=m,p(o,a)},render:g,addToRenderList:y,dispose:h}}function cb(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(L,U,$,j,I){let B=!1;const G=f(L,j,$,U);s!==G&&(s=G,c(s.object)),B=v(L,j,$,I),B&&g(L,j,$,I),I!==null&&e.update(I,t.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,M(L,U,$,j),I!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function l(){return t.createVertexArray()}function c(L){return t.bindVertexArray(L)}function u(L){return t.deleteVertexArray(L)}function f(L,U,$,j){const I=j.wireframe===!0;let B=i[U.id];B===void 0&&(B={},i[U.id]=B);const G=L.isInstancedMesh===!0?L.id:0;let O=B[G];O===void 0&&(O={},B[G]=O);let q=O[$.id];q===void 0&&(q={},O[$.id]=q);let Z=q[I];return Z===void 0&&(Z=d(l()),q[I]=Z),Z}function d(L){const U=[],$=[],j=[];for(let I=0;I<n;I++)U[I]=0,$[I]=0,j[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:$,attributeDivisors:j,object:L,attributes:{},index:null}}function v(L,U,$,j){const I=s.attributes,B=U.attributes;let G=0;const O=$.getAttributes();for(const q in O)if(O[q].location>=0){const ie=I[q];let le=B[q];if(le===void 0&&(q==="instanceMatrix"&&L.instanceMatrix&&(le=L.instanceMatrix),q==="instanceColor"&&L.instanceColor&&(le=L.instanceColor)),ie===void 0||ie.attribute!==le||le&&ie.data!==le.data)return!0;G++}return s.attributesNum!==G||s.index!==j}function g(L,U,$,j){const I={},B=U.attributes;let G=0;const O=$.getAttributes();for(const q in O)if(O[q].location>=0){let ie=B[q];ie===void 0&&(q==="instanceMatrix"&&L.instanceMatrix&&(ie=L.instanceMatrix),q==="instanceColor"&&L.instanceColor&&(ie=L.instanceColor));const le={};le.attribute=ie,ie&&ie.data&&(le.data=ie.data),I[q]=le,G++}s.attributes=I,s.attributesNum=G,s.index=j}function y(){const L=s.newAttributes;for(let U=0,$=L.length;U<$;U++)L[U]=0}function p(L){h(L,0)}function h(L,U){const $=s.newAttributes,j=s.enabledAttributes,I=s.attributeDivisors;$[L]=1,j[L]===0&&(t.enableVertexAttribArray(L),j[L]=1),I[L]!==U&&(t.vertexAttribDivisor(L,U),I[L]=U)}function m(){const L=s.newAttributes,U=s.enabledAttributes;for(let $=0,j=U.length;$<j;$++)U[$]!==L[$]&&(t.disableVertexAttribArray($),U[$]=0)}function _(L,U,$,j,I,B,G){G===!0?t.vertexAttribIPointer(L,U,$,I,B):t.vertexAttribPointer(L,U,$,j,I,B)}function M(L,U,$,j){y();const I=j.attributes,B=$.getAttributes(),G=U.defaultAttributeValues;for(const O in B){const q=B[O];if(q.location>=0){let Z=I[O];if(Z===void 0&&(O==="instanceMatrix"&&L.instanceMatrix&&(Z=L.instanceMatrix),O==="instanceColor"&&L.instanceColor&&(Z=L.instanceColor)),Z!==void 0){const ie=Z.normalized,le=Z.itemSize,Ue=e.get(Z);if(Ue===void 0)continue;const Fe=Ue.buffer,ce=Ue.type,Y=Ue.bytesPerElement,ae=ce===t.INT||ce===t.UNSIGNED_INT||Z.gpuType===Kh;if(Z.isInterleavedBufferAttribute){const re=Z.data,Ce=re.stride,ke=Z.offset;if(re.isInstancedInterleavedBuffer){for(let Ie=0;Ie<q.locationSize;Ie++)h(q.location+Ie,re.meshPerAttribute);L.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Ie=0;Ie<q.locationSize;Ie++)p(q.location+Ie);t.bindBuffer(t.ARRAY_BUFFER,Fe);for(let Ie=0;Ie<q.locationSize;Ie++)_(q.location+Ie,le/q.locationSize,ce,ie,Ce*Y,(ke+le/q.locationSize*Ie)*Y,ae)}else{if(Z.isInstancedBufferAttribute){for(let re=0;re<q.locationSize;re++)h(q.location+re,Z.meshPerAttribute);L.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let re=0;re<q.locationSize;re++)p(q.location+re);t.bindBuffer(t.ARRAY_BUFFER,Fe);for(let re=0;re<q.locationSize;re++)_(q.location+re,le/q.locationSize,ce,ie,le*Y,le/q.locationSize*re*Y,ae)}}else if(G!==void 0){const ie=G[O];if(ie!==void 0)switch(ie.length){case 2:t.vertexAttrib2fv(q.location,ie);break;case 3:t.vertexAttrib3fv(q.location,ie);break;case 4:t.vertexAttrib4fv(q.location,ie);break;default:t.vertexAttrib1fv(q.location,ie)}}}}m()}function T(){b();for(const L in i){const U=i[L];for(const $ in U){const j=U[$];for(const I in j){const B=j[I];for(const G in B)u(B[G].object),delete B[G];delete j[I]}}delete i[L]}}function w(L){if(i[L.id]===void 0)return;const U=i[L.id];for(const $ in U){const j=U[$];for(const I in j){const B=j[I];for(const G in B)u(B[G].object),delete B[G];delete j[I]}}delete i[L.id]}function R(L){for(const U in i){const $=i[U];for(const j in $){const I=$[j];if(I[L.id]===void 0)continue;const B=I[L.id];for(const G in B)u(B[G].object),delete B[G];delete I[L.id]}}}function x(L){for(const U in i){const $=i[U],j=L.isInstancedMesh===!0?L.id:0,I=$[j];if(I!==void 0){for(const B in I){const G=I[B];for(const O in G)u(G[O].object),delete G[O];delete I[B]}delete $[j],Object.keys($).length===0&&delete i[U]}}}function b(){P(),o=!0,s!==r&&(s=r,c(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:b,resetDefaultState:P,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:p,disableUnusedAttributes:m}}function ub(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,u){u!==0&&(t.drawArraysInstanced(i,l,c,u),n.update(c,i,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let d=0;for(let v=0;v<u;v++)d+=c[v];n.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function db(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==Qn&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const x=R===Hi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==An&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==mi&&!x)}function l(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(Be("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&d===!1&&Be("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const v=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),p=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=t.getParameter(t.MAX_SAMPLES),w=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:v,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:p,maxAttributes:h,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:M,maxSamples:T,samples:w}}function fb(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Ur,a=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const v=f.length!==0||d||i!==0||r;return r=d,i=f.length,v},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,v){const g=f.clippingPlanes,y=f.clipIntersection,p=f.clipShadows,h=t.get(f);if(!r||g===null||g.length===0||s&&!p)s?u(null):c();else{const m=s?0:i,_=m*4;let M=h.clippingState||null;l.value=M,M=u(g,d,_,v);for(let T=0;T!==_;++T)M[T]=n[T];h.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,v,g){const y=f!==null?f.length:0;let p=null;if(y!==0){if(p=l.value,g!==!0||p===null){const h=v+y*4,m=d.matrixWorldInverse;a.getNormalMatrix(m),(p===null||p.length<h)&&(p=new Float32Array(h));for(let _=0,M=v;_!==y;++_,M+=4)o.copy(f[_]).applyMatrix4(m,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}const cr=4,Rg=[.125,.215,.35,.446,.526,.582],Or=20,hb=256,Mo=new up,Cg=new tt;let ju=null,Xu=0,qu=0,$u=!1;const pb=new z;class Pg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=pb}=s;ju=this._renderer.getRenderTarget(),Xu=this._renderer.getActiveCubeFace(),qu=this._renderer.getActiveMipmapLevel(),$u=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ng(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ju,Xu,qu),this._renderer.xr.enabled=$u,e.scissorTest=!1,ys(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Jr||e.mapping===Ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ju=this._renderer.getRenderTarget(),Xu=this._renderer.getActiveCubeFace(),qu=this._renderer.getActiveMipmapLevel(),$u=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:Hi,format:Qn,colorSpace:cc,depthBuffer:!1},r=Lg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lg(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=mb(s)),this._blurMaterial=vb(s,e,n),this._ggxMaterial=gb(s,e,n)}return r}_compileMaterial(e){const n=new ii(new ri,e);this._renderer.compile(n,Mo)}_sceneToCubeUV(e,n,i,r,s){const l=new zn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,v=f.toneMapping;f.getClearColor(Cg),f.toneMapping=xi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ii(new _a,new op({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,p=y.material;let h=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,h=!0):(p.color.copy(Cg),h=!0);for(let _=0;_<6;_++){const M=_%3;M===0?(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[_],s.y,s.z)):M===1?(l.up.set(0,0,c[_]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[_],s.z)):(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[_]));const T=this._cubeSize;ys(r,M*T,_>2?T:0,T,T),f.setRenderTarget(r),h&&f.render(y,l),f.render(e,l)}f.toneMapping=v,f.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Jr||e.mapping===Ks;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ng());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ys(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Mo)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),d=0+c*1.25,v=f*d,{_lodMax:g}=this,y=this._sizeLods[i],p=3*y*(i>g-cr?i-g+cr:0),h=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=v,l.mipInt.value=g-n,ys(s,p,h,3*y,2*y),r.setRenderTarget(s),r.render(a,Mo),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-i,ys(e,p,h,3*y,2*y),r.setRenderTarget(e),r.render(a,Mo)}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&rt("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[r];f.material=c;const d=c.uniforms,v=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*v):2*Math.PI/(2*Or-1),y=s/g,p=isFinite(s)?1+Math.floor(u*y):Or;p>Or&&Be(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Or}`);const h=[];let m=0;for(let R=0;R<Or;++R){const x=R/y,b=Math.exp(-x*x/2);h.push(b),R===0?m+=b:R<p&&(m+=2*b)}for(let R=0;R<h.length;R++)h[R]=h[R]/m;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-i;const M=this._sizeLods[r],T=3*M*(r>_-cr?r-_+cr:0),w=4*(this._cubeSize-M);ys(n,T,w,3*M,2*M),l.setRenderTarget(n),l.render(f,Mo)}}function mb(t){const e=[],n=[],i=[];let r=t;const s=t-cr+1+Rg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>t-cr?l=Rg[o-t+cr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],v=6,g=6,y=3,p=2,h=1,m=new Float32Array(y*g*v),_=new Float32Array(p*g*v),M=new Float32Array(h*g*v);for(let w=0;w<v;w++){const R=w%3*2/3-1,x=w>2?0:-1,b=[R,x,0,R+2/3,x,0,R+2/3,x+1,0,R,x,0,R+2/3,x+1,0,R,x+1,0];m.set(b,y*g*w),_.set(d,p*g*w);const P=[w,w,w,w,w,w];M.set(P,h*g*w)}const T=new ri;T.setAttribute("position",new Si(m,y)),T.setAttribute("uv",new Si(_,p)),T.setAttribute("faceIndex",new Si(M,h)),i.push(new ii(T,null)),r>cr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Lg(t,e,n){const i=new yi(t,e,n);return i.texture.mapping=Nc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ys(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function gb(t,e,n){return new Ei({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:hb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ic(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function vb(t,e,n){const i=new Float32Array(Or),r=new z(0,1,0);return new Ei({name:"SphericalGaussianBlur",defines:{n:Or,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ic(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Ng(){return new Ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ic(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Dg(){return new Ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Ic(){return`

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
	`}class mx extends yi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new lx(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new _a(5,5,5),s=new Ei({name:"CubemapFromEquirect",uniforms:Js(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_n,blending:Fi});s.uniforms.tEquirect.value=n;const o=new ii(r,s),a=n.minFilter;return n.minFilter===Vr&&(n.minFilter=nn),new Ew(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}function _b(t){let e=new WeakMap,n=new WeakMap,i=null;function r(d,v=!1){return d==null?null:v?o(d):s(d)}function s(d){if(d&&d.isTexture){const v=d.mapping;if(v===bl||v===_u)if(e.has(d)){const g=e.get(d).texture;return a(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const y=new mx(g.height);return y.fromEquirectangularTexture(t,d),e.set(d,y),d.addEventListener("dispose",c),a(y.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){const v=d.mapping,g=v===bl||v===_u,y=v===Jr||v===Ks;if(g||y){let p=n.get(d);const h=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==h)return i===null&&(i=new Pg(t)),p=g?i.fromEquirectangular(d,p):i.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,n.set(d,p),p.texture;if(p!==void 0)return p.texture;{const m=d.image;return g&&m&&m.height>0||y&&m&&l(m)?(i===null&&(i=new Pg(t)),p=g?i.fromEquirectangular(d):i.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,n.set(d,p),d.addEventListener("dispose",u),p.texture):null}}}return d}function a(d,v){return v===bl?d.mapping=Jr:v===_u&&(d.mapping=Ks),d}function l(d){let v=0;const g=6;for(let y=0;y<g;y++)d[y]!==void 0&&v++;return v===g}function c(d){const v=d.target;v.removeEventListener("dispose",c);const g=e.get(v);g!==void 0&&(e.delete(v),g.dispose())}function u(d){const v=d.target;v.removeEventListener("dispose",u);const g=n.get(v);g!==void 0&&(n.delete(v),g.dispose())}function f(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function xb(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Vf("WebGLRenderer: "+i+" extension not supported."),r}}}function yb(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];const v=s.get(d);v&&(e.remove(v),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const v in d)e.update(d[v],t.ARRAY_BUFFER)}function c(f){const d=[],v=f.index,g=f.attributes.position;let y=0;if(g===void 0)return;if(v!==null){const m=v.array;y=v.version;for(let _=0,M=m.length;_<M;_+=3){const T=m[_+0],w=m[_+1],R=m[_+2];d.push(T,w,w,R,R,T)}}else{const m=g.array;y=g.version;for(let _=0,M=m.length/3-1;_<M;_+=3){const T=_+0,w=_+1,R=_+2;d.push(T,w,w,R,R,T)}}const p=new(g.count>=65535?ax:ox)(d,1);p.version=y;const h=s.get(f);h&&e.remove(h),s.set(f,p)}function u(f){const d=s.get(f);if(d){const v=f.index;v!==null&&d.version<v.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Sb(t,e,n){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){t.drawElements(i,d,s,f*o),n.update(d,i,1)}function c(f,d,v){v!==0&&(t.drawElementsInstanced(i,d,s,f*o,v),n.update(d,i,v))}function u(f,d,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,f,0,v);let y=0;for(let p=0;p<v;p++)y+=d[p];n.update(y,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Mb(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:rt("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Eb(t,e,n){const i=new WeakMap,r=new bt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let b=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();const v=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],h=a.morphAttributes.normal||[],m=a.morphAttributes.color||[];let _=0;v===!0&&(_=1),g===!0&&(_=2),y===!0&&(_=3);let M=a.attributes.position.count*_,T=1;M>e.maxTextureSize&&(T=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const w=new Float32Array(M*T*4*f),R=new ix(w,M,T,f);R.type=mi,R.needsUpdate=!0;const x=_*4;for(let P=0;P<f;P++){const L=p[P],U=h[P],$=m[P],j=M*T*4*P;for(let I=0;I<L.count;I++){const B=I*x;v===!0&&(r.fromBufferAttribute(L,I),w[j+B+0]=r.x,w[j+B+1]=r.y,w[j+B+2]=r.z,w[j+B+3]=0),g===!0&&(r.fromBufferAttribute(U,I),w[j+B+4]=r.x,w[j+B+5]=r.y,w[j+B+6]=r.z,w[j+B+7]=0),y===!0&&(r.fromBufferAttribute($,I),w[j+B+8]=r.x,w[j+B+9]=r.y,w[j+B+10]=r.z,w[j+B+11]=$.itemSize===4?r.w:1)}}d={count:f,texture:R,size:new et(M,T)},i.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let v=0;for(let y=0;y<c.length;y++)v+=c[y];const g=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function wb(t,e,n,i,r){let s=new WeakMap;function o(c){const u=r.render.frame,f=c.geometry,d=e.get(c,f);if(s.get(d)!==u&&(e.update(d),s.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const v=c.skeleton;s.get(v)!==u&&(v.update(),s.set(v,u))}return d}function a(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:a}}const Tb={[H_]:"LINEAR_TONE_MAPPING",[G_]:"REINHARD_TONE_MAPPING",[W_]:"CINEON_TONE_MAPPING",[Yh]:"ACES_FILMIC_TONE_MAPPING",[X_]:"AGX_TONE_MAPPING",[q_]:"NEUTRAL_TONE_MAPPING",[j_]:"CUSTOM_TONE_MAPPING"};function Ab(t,e,n,i,r){const s=new yi(e,n,{type:t,depthBuffer:i,stencilBuffer:r,depthTexture:i?new Zs(e,n):void 0}),o=new yi(e,n,{type:Hi,depthBuffer:!1,stencilBuffer:!1}),a=new ri;a.setAttribute("position",new Cn([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Cn([0,2,0,0,2,0],2));const l=new mw({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new ii(a,l),u=new up(-1,1,1,-1,0,1);let f=null,d=null,v=!1,g,y=null,p=[],h=!1;this.setSize=function(m,_){s.setSize(m,_),o.setSize(m,_);for(let M=0;M<p.length;M++){const T=p[M];T.setSize&&T.setSize(m,_)}},this.setEffects=function(m){p=m,h=p.length>0&&p[0].isRenderPass===!0;const _=s.width,M=s.height;for(let T=0;T<p.length;T++){const w=p[T];w.setSize&&w.setSize(_,M)}},this.begin=function(m,_){if(v||m.toneMapping===xi&&p.length===0)return!1;if(y=_,_!==null){const M=_.width,T=_.height;(s.width!==M||s.height!==T)&&this.setSize(M,T)}return h===!1&&m.setRenderTarget(s),g=m.toneMapping,m.toneMapping=xi,!0},this.hasRenderPass=function(){return h},this.end=function(m,_){m.toneMapping=g,v=!0;let M=s,T=o;for(let w=0;w<p.length;w++){const R=p[w];if(R.enabled!==!1&&(R.render(m,T,M,_),R.needsSwap!==!1)){const x=M;M=T,T=x}}if(f!==m.outputColorSpace||d!==m.toneMapping){f=m.outputColorSpace,d=m.toneMapping,l.defines={},Qe.getTransfer(f)===lt&&(l.defines.SRGB_TRANSFER="");const w=Tb[d];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,m.setRenderTarget(y),m.render(c,u),y=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const gx=new rn,Gf=new Zs(1,1),vx=new ix,_x=new W1,xx=new lx,Ig=[],Ug=[],Fg=new Float32Array(16),Og=new Float32Array(9),Bg=new Float32Array(4);function oo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Ig[r];if(s===void 0&&(s=new Float32Array(r),Ig[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function kt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function zt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Uc(t,e){let n=Ug[e];n===void 0&&(n=new Int32Array(e),Ug[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function bb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Rb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2fv(this.addr,e),zt(n,e)}}function Cb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(kt(n,e))return;t.uniform3fv(this.addr,e),zt(n,e)}}function Pb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4fv(this.addr,e),zt(n,e)}}function Lb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),zt(n,e)}else{if(kt(n,i))return;Bg.set(i),t.uniformMatrix2fv(this.addr,!1,Bg),zt(n,i)}}function Nb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),zt(n,e)}else{if(kt(n,i))return;Og.set(i),t.uniformMatrix3fv(this.addr,!1,Og),zt(n,i)}}function Db(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),zt(n,e)}else{if(kt(n,i))return;Fg.set(i),t.uniformMatrix4fv(this.addr,!1,Fg),zt(n,i)}}function Ib(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Ub(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2iv(this.addr,e),zt(n,e)}}function Fb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(kt(n,e))return;t.uniform3iv(this.addr,e),zt(n,e)}}function Ob(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4iv(this.addr,e),zt(n,e)}}function Bb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function kb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2uiv(this.addr,e),zt(n,e)}}function zb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(kt(n,e))return;t.uniform3uiv(this.addr,e),zt(n,e)}}function Vb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4uiv(this.addr,e),zt(n,e)}}function Hb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Gf.compareFunction=n.isReversedDepthBuffer()?ip:np,s=Gf):s=gx,n.setTexture2D(e||s,r)}function Gb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||_x,r)}function Wb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||xx,r)}function jb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||vx,r)}function Xb(t){switch(t){case 5126:return bb;case 35664:return Rb;case 35665:return Cb;case 35666:return Pb;case 35674:return Lb;case 35675:return Nb;case 35676:return Db;case 5124:case 35670:return Ib;case 35667:case 35671:return Ub;case 35668:case 35672:return Fb;case 35669:case 35673:return Ob;case 5125:return Bb;case 36294:return kb;case 36295:return zb;case 36296:return Vb;case 35678:case 36198:case 36298:case 36306:case 35682:return Hb;case 35679:case 36299:case 36307:return Gb;case 35680:case 36300:case 36308:case 36293:return Wb;case 36289:case 36303:case 36311:case 36292:return jb}}function qb(t,e){t.uniform1fv(this.addr,e)}function $b(t,e){const n=oo(e,this.size,2);t.uniform2fv(this.addr,n)}function Yb(t,e){const n=oo(e,this.size,3);t.uniform3fv(this.addr,n)}function Kb(t,e){const n=oo(e,this.size,4);t.uniform4fv(this.addr,n)}function Zb(t,e){const n=oo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Jb(t,e){const n=oo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Qb(t,e){const n=oo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function eR(t,e){t.uniform1iv(this.addr,e)}function tR(t,e){t.uniform2iv(this.addr,e)}function nR(t,e){t.uniform3iv(this.addr,e)}function iR(t,e){t.uniform4iv(this.addr,e)}function rR(t,e){t.uniform1uiv(this.addr,e)}function sR(t,e){t.uniform2uiv(this.addr,e)}function oR(t,e){t.uniform3uiv(this.addr,e)}function aR(t,e){t.uniform4uiv(this.addr,e)}function lR(t,e,n){const i=this.cache,r=e.length,s=Uc(n,r);kt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=Gf:o=gx;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||o,s[a])}function cR(t,e,n){const i=this.cache,r=e.length,s=Uc(n,r);kt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||_x,s[o])}function uR(t,e,n){const i=this.cache,r=e.length,s=Uc(n,r);kt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||xx,s[o])}function dR(t,e,n){const i=this.cache,r=e.length,s=Uc(n,r);kt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||vx,s[o])}function fR(t){switch(t){case 5126:return qb;case 35664:return $b;case 35665:return Yb;case 35666:return Kb;case 35674:return Zb;case 35675:return Jb;case 35676:return Qb;case 5124:case 35670:return eR;case 35667:case 35671:return tR;case 35668:case 35672:return nR;case 35669:case 35673:return iR;case 5125:return rR;case 36294:return sR;case 36295:return oR;case 36296:return aR;case 35678:case 36198:case 36298:case 36306:case 35682:return lR;case 35679:case 36299:case 36307:return cR;case 35680:case 36300:case 36308:case 36293:return uR;case 36289:case 36303:case 36311:case 36292:return dR}}class hR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Xb(n.type)}}class pR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=fR(n.type)}}class mR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Yu=/(\w+)(\])?(\[|\.)?/g;function kg(t,e){t.seq.push(e),t.map[e.id]=e}function gR(t,e,n){const i=t.name,r=i.length;for(Yu.lastIndex=0;;){const s=Yu.exec(i),o=Yu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){kg(n,c===void 0?new hR(a,t,e):new pR(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new mR(a),kg(n,f)),n=f}}}class Nl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);gR(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function zg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const vR=37297;let _R=0;function xR(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Vg=new He;function yR(t){Qe._getMatrix(Vg,Qe.workingColorSpace,t);const e=`mat3( ${Vg.elements.map(n=>n.toFixed(4))} )`;switch(Qe.getTransfer(t)){case uc:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return Be("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Hg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+xR(t.getShaderSource(e),a)}else return s}function SR(t,e){const n=yR(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const MR={[H_]:"Linear",[G_]:"Reinhard",[W_]:"Cineon",[Yh]:"ACESFilmic",[X_]:"AgX",[q_]:"Neutral",[j_]:"Custom"};function ER(t,e){const n=MR[e];return n===void 0?(Be("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const dl=new z;function wR(){Qe.getLuminanceCoefficients(dl);const t=dl.x.toFixed(4),e=dl.y.toFixed(4),n=dl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function TR(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lo).join(`
`)}function AR(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function bR(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Lo(t){return t!==""}function Gg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const RR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wf(t){return t.replace(RR,PR)}const CR=new Map;function PR(t,e){let n=qe[e];if(n===void 0){const i=CR.get(e);if(i!==void 0)n=qe[i],Be('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Wf(n)}const LR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jg(t){return t.replace(LR,NR)}function NR(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Xg(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const DR={[Al]:"SHADOWMAP_TYPE_PCF",[Co]:"SHADOWMAP_TYPE_VSM"};function IR(t){return DR[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const UR={[Jr]:"ENVMAP_TYPE_CUBE",[Ks]:"ENVMAP_TYPE_CUBE",[Nc]:"ENVMAP_TYPE_CUBE_UV"};function FR(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":UR[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const OR={[Ks]:"ENVMAP_MODE_REFRACTION"};function BR(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":OR[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const kR={[V_]:"ENVMAP_BLENDING_MULTIPLY",[E1]:"ENVMAP_BLENDING_MIX",[w1]:"ENVMAP_BLENDING_ADD"};function zR(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":kR[t.combine]||"ENVMAP_BLENDING_NONE"}function VR(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function HR(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=IR(n),c=FR(n),u=BR(n),f=zR(n),d=VR(n),v=TR(n),g=AR(s),y=r.createProgram();let p,h,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Lo).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Lo).join(`
`),h.length>0&&(h+=`
`)):(p=[Xg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lo).join(`
`),h=[Xg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==xi?"#define TONE_MAPPING":"",n.toneMapping!==xi?qe.tonemapping_pars_fragment:"",n.toneMapping!==xi?ER("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,SR("linearToOutputTexel",n.outputColorSpace),wR(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Lo).join(`
`)),o=Wf(o),o=Gg(o,n),o=Wg(o,n),a=Wf(a),a=Gg(a,n),a=Wg(a,n),o=jg(o),a=jg(a),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,p=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",n.glslVersion===rg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===rg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const _=m+p+o,M=m+h+a,T=zg(r,r.VERTEX_SHADER,_),w=zg(r,r.FRAGMENT_SHADER,M);r.attachShader(y,T),r.attachShader(y,w),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function R(L){if(t.debug.checkShaderErrors){const U=r.getProgramInfoLog(y)||"",$=r.getShaderInfoLog(T)||"",j=r.getShaderInfoLog(w)||"",I=U.trim(),B=$.trim(),G=j.trim();let O=!0,q=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(O=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,T,w);else{const Z=Hg(r,T,"vertex"),ie=Hg(r,w,"fragment");rt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+I+`
`+Z+`
`+ie)}else I!==""?Be("WebGLProgram: Program Info Log:",I):(B===""||G==="")&&(q=!1);q&&(L.diagnostics={runnable:O,programLog:I,vertexShader:{log:B,prefix:p},fragmentShader:{log:G,prefix:h}})}r.deleteShader(T),r.deleteShader(w),x=new Nl(r,y),b=bR(r,y)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let P=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(y,vR)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=_R++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=T,this.fragmentShader=w,this}let GR=0;class WR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new jR(e),n.set(e,i)),i}}class jR{constructor(e){this.id=GR++,this.code=e,this.usedTimes=0}}function XR(t){return t===Qr||t===ac||t===lc}function qR(t,e,n,i,r,s){const o=new rx,a=new WR,l=new Set,c=[],u=new Map,f=i.logarithmicDepthBuffer;let d=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function y(x,b,P,L,U,$){const j=L.fog,I=U.geometry,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,O=e.get(x.envMap||B,G),q=O&&O.mapping===Nc?O.image.height:null,Z=v[x.type];x.precision!==null&&(d=i.getMaxPrecision(x.precision),d!==x.precision&&Be("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const ie=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,le=ie!==void 0?ie.length:0;let Ue=0;I.morphAttributes.position!==void 0&&(Ue=1),I.morphAttributes.normal!==void 0&&(Ue=2),I.morphAttributes.color!==void 0&&(Ue=3);let Fe,ce,Y,ae;if(Z){const Ge=fi[Z];Fe=Ge.vertexShader,ce=Ge.fragmentShader}else Fe=x.vertexShader,ce=x.fragmentShader,a.update(x),Y=a.getVertexShaderID(x),ae=a.getFragmentShaderID(x);const re=t.getRenderTarget(),Ce=t.state.buffers.depth.getReversed(),ke=U.isInstancedMesh===!0,Ie=U.isBatchedMesh===!0,mt=!!x.map,Ye=!!x.matcap,at=!!O,ut=!!x.aoMap,ge=!!x.lightMap,Le=!!x.bumpMap,Me=!!x.normalMap,Ke=!!x.displacementMap,C=!!x.emissiveMap,ze=!!x.metalnessMap,je=!!x.roughnessMap,nt=x.anisotropy>0,ve=x.clearcoat>0,yt=x.dispersion>0,A=x.iridescence>0,S=x.sheen>0,k=x.transmission>0,Q=nt&&!!x.anisotropyMap,se=ve&&!!x.clearcoatMap,ue=ve&&!!x.clearcoatNormalMap,me=ve&&!!x.clearcoatRoughnessMap,K=A&&!!x.iridescenceMap,ee=A&&!!x.iridescenceThicknessMap,Se=S&&!!x.sheenColorMap,Te=S&&!!x.sheenRoughnessMap,he=!!x.specularMap,de=!!x.specularColorMap,Ve=!!x.specularIntensityMap,Xe=k&&!!x.transmissionMap,ot=k&&!!x.thicknessMap,D=!!x.gradientMap,fe=!!x.alphaMap,J=x.alphaTest>0,Ee=!!x.alphaHash,pe=!!x.extensions;let ne=xi;x.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(ne=t.toneMapping);const Pe={shaderID:Z,shaderType:x.type,shaderName:x.name,vertexShader:Fe,fragmentShader:ce,defines:x.defines,customVertexShaderID:Y,customFragmentShaderID:ae,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:Ie,batchingColor:Ie&&U._colorsTexture!==null,instancing:ke,instancingColor:ke&&U.instanceColor!==null,instancingMorph:ke&&U.morphTexture!==null,outputColorSpace:re===null?t.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Qe.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:mt,matcap:Ye,envMap:at,envMapMode:at&&O.mapping,envMapCubeUVHeight:q,aoMap:ut,lightMap:ge,bumpMap:Le,normalMap:Me,displacementMap:Ke,emissiveMap:C,normalMapObjectSpace:Me&&x.normalMapType===b1,normalMapTangentSpace:Me&&x.normalMapType===zf,packedNormalMap:Me&&x.normalMapType===zf&&XR(x.normalMap.format),metalnessMap:ze,roughnessMap:je,anisotropy:nt,anisotropyMap:Q,clearcoat:ve,clearcoatMap:se,clearcoatNormalMap:ue,clearcoatRoughnessMap:me,dispersion:yt,iridescence:A,iridescenceMap:K,iridescenceThicknessMap:ee,sheen:S,sheenColorMap:Se,sheenRoughnessMap:Te,specularMap:he,specularColorMap:de,specularIntensityMap:Ve,transmission:k,transmissionMap:Xe,thicknessMap:ot,gradientMap:D,opaque:x.transparent===!1&&x.blending===zs&&x.alphaToCoverage===!1,alphaMap:fe,alphaTest:J,alphaHash:Ee,combine:x.combine,mapUv:mt&&g(x.map.channel),aoMapUv:ut&&g(x.aoMap.channel),lightMapUv:ge&&g(x.lightMap.channel),bumpMapUv:Le&&g(x.bumpMap.channel),normalMapUv:Me&&g(x.normalMap.channel),displacementMapUv:Ke&&g(x.displacementMap.channel),emissiveMapUv:C&&g(x.emissiveMap.channel),metalnessMapUv:ze&&g(x.metalnessMap.channel),roughnessMapUv:je&&g(x.roughnessMap.channel),anisotropyMapUv:Q&&g(x.anisotropyMap.channel),clearcoatMapUv:se&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:ue&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Te&&g(x.sheenRoughnessMap.channel),specularMapUv:he&&g(x.specularMap.channel),specularColorMapUv:de&&g(x.specularColorMap.channel),specularIntensityMapUv:Ve&&g(x.specularIntensityMap.channel),transmissionMapUv:Xe&&g(x.transmissionMap.channel),thicknessMapUv:ot&&g(x.thicknessMap.channel),alphaMapUv:fe&&g(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Me||nt),vertexNormals:!!I.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!I.attributes.uv&&(mt||fe),fog:!!j,useFog:x.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||I.attributes.normal===void 0&&Me===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Ce,skinning:U.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:Ue,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:$.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:ne,decodeVideoTexture:mt&&x.map.isVideoTexture===!0&&Qe.getTransfer(x.map.colorSpace)===lt,decodeVideoTextureEmissive:C&&x.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(x.emissiveMap.colorSpace)===lt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===pi,flipSided:x.side===_n,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:pe&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&x.extensions.multiDraw===!0||Ie)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Pe.vertexUv1s=l.has(1),Pe.vertexUv2s=l.has(2),Pe.vertexUv3s=l.has(3),l.clear(),Pe}function p(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)b.push(P),b.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(h(b,x),m(b,x),b.push(t.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function h(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function m(x,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),x.push(o.mask)}function _(x){const b=v[x.type];let P;if(b){const L=fi[b];P=fw.clone(L.uniforms)}else P=x.uniforms;return P}function M(x,b){let P=u.get(b);return P!==void 0?++P.usedTimes:(P=new HR(t,b,x,r),c.push(P),u.set(b,P)),P}function T(x){if(--x.usedTimes===0){const b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function w(x){a.remove(x)}function R(){a.dispose()}return{getParameters:y,getProgramCacheKey:p,getUniforms:_,acquireProgram:M,releaseProgram:T,releaseShaderCache:w,programs:c,dispose:R}}function $R(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function YR(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function qg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function $g(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d){let v=0;return d.isInstancedMesh&&(v+=2),d.isSkinnedMesh&&(v+=1),v}function a(d,v,g,y,p,h){let m=t[e];return m===void 0?(m={id:d.id,object:d,geometry:v,material:g,materialVariant:o(d),groupOrder:y,renderOrder:d.renderOrder,z:p,group:h},t[e]=m):(m.id=d.id,m.object=d,m.geometry=v,m.material=g,m.materialVariant=o(d),m.groupOrder=y,m.renderOrder=d.renderOrder,m.z=p,m.group=h),e++,m}function l(d,v,g,y,p,h){const m=a(d,v,g,y,p,h);g.transmission>0?i.push(m):g.transparent===!0?r.push(m):n.push(m)}function c(d,v,g,y,p,h){const m=a(d,v,g,y,p,h);g.transmission>0?i.unshift(m):g.transparent===!0?r.unshift(m):n.unshift(m)}function u(d,v){n.length>1&&n.sort(d||YR),i.length>1&&i.sort(v||qg),r.length>1&&r.sort(v||qg)}function f(){for(let d=e,v=t.length;d<v;d++){const g=t[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:f,sort:u}}function KR(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new $g,t.set(i,[o])):r>=s.length?(o=new $g,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function ZR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new z,color:new tt};break;case"SpotLight":n={position:new z,direction:new z,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new z,color:new tt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new z,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":n={color:new tt,position:new z,halfWidth:new z,halfHeight:new z};break}return t[e.id]=n,n}}}function JR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let QR=0;function eC(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function tC(t){const e=new ZR,n=JR(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);const r=new z,s=new Dt,o=new Dt;function a(c){let u=0,f=0,d=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let v=0,g=0,y=0,p=0,h=0,m=0,_=0,M=0,T=0,w=0,R=0;c.sort(eC);for(let b=0,P=c.length;b<P;b++){const L=c[b],U=L.color,$=L.intensity,j=L.distance;let I=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Qr?I=L.shadow.map.texture:I=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=U.r*$,f+=U.g*$,d+=U.b*$;else if(L.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(L.sh.coefficients[B],$);R++}else if(L.isDirectionalLight){const B=e.get(L);if(B.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const G=L.shadow,O=n.get(L);O.shadowIntensity=G.intensity,O.shadowBias=G.bias,O.shadowNormalBias=G.normalBias,O.shadowRadius=G.radius,O.shadowMapSize=G.mapSize,i.directionalShadow[v]=O,i.directionalShadowMap[v]=I,i.directionalShadowMatrix[v]=L.shadow.matrix,m++}i.directional[v]=B,v++}else if(L.isSpotLight){const B=e.get(L);B.position.setFromMatrixPosition(L.matrixWorld),B.color.copy(U).multiplyScalar($),B.distance=j,B.coneCos=Math.cos(L.angle),B.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),B.decay=L.decay,i.spot[y]=B;const G=L.shadow;if(L.map&&(i.spotLightMap[T]=L.map,T++,G.updateMatrices(L),L.castShadow&&w++),i.spotLightMatrix[y]=G.matrix,L.castShadow){const O=n.get(L);O.shadowIntensity=G.intensity,O.shadowBias=G.bias,O.shadowNormalBias=G.normalBias,O.shadowRadius=G.radius,O.shadowMapSize=G.mapSize,i.spotShadow[y]=O,i.spotShadowMap[y]=I,M++}y++}else if(L.isRectAreaLight){const B=e.get(L);B.color.copy(U).multiplyScalar($),B.halfWidth.set(L.width*.5,0,0),B.halfHeight.set(0,L.height*.5,0),i.rectArea[p]=B,p++}else if(L.isPointLight){const B=e.get(L);if(B.color.copy(L.color).multiplyScalar(L.intensity),B.distance=L.distance,B.decay=L.decay,L.castShadow){const G=L.shadow,O=n.get(L);O.shadowIntensity=G.intensity,O.shadowBias=G.bias,O.shadowNormalBias=G.normalBias,O.shadowRadius=G.radius,O.shadowMapSize=G.mapSize,O.shadowCameraNear=G.camera.near,O.shadowCameraFar=G.camera.far,i.pointShadow[g]=O,i.pointShadowMap[g]=I,i.pointShadowMatrix[g]=L.shadow.matrix,_++}i.point[g]=B,g++}else if(L.isHemisphereLight){const B=e.get(L);B.skyColor.copy(L.color).multiplyScalar($),B.groundColor.copy(L.groundColor).multiplyScalar($),i.hemi[h]=B,h++}}p>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const x=i.hash;(x.directionalLength!==v||x.pointLength!==g||x.spotLength!==y||x.rectAreaLength!==p||x.hemiLength!==h||x.numDirectionalShadows!==m||x.numPointShadows!==_||x.numSpotShadows!==M||x.numSpotMaps!==T||x.numLightProbes!==R)&&(i.directional.length=v,i.spot.length=y,i.rectArea.length=p,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=M+T-w,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=R,x.directionalLength=v,x.pointLength=g,x.spotLength=y,x.rectAreaLength=p,x.hemiLength=h,x.numDirectionalShadows=m,x.numPointShadows=_,x.numSpotShadows=M,x.numSpotMaps=T,x.numLightProbes=R,i.version=QR++)}function l(c,u){let f=0,d=0,v=0,g=0,y=0;const p=u.matrixWorldInverse;for(let h=0,m=c.length;h<m;h++){const _=c[h];if(_.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),f++}else if(_.isSpotLight){const M=i.spot[v];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),v++}else if(_.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(p),o.identity(),s.copy(_.matrixWorld),s.premultiply(p),o.extractRotation(s),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(p),d++}else if(_.isHemisphereLight){const M=i.hemi[y];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(p),y++}}}return{setup:a,setupView:l,state:i}}function Yg(t){const e=new tC(t),n=[],i=[],r=[];function s(d){f.camera=d,n.length=0,i.length=0,r.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function l(d){r.push(d)}function c(){e.setup(n)}function u(d){e.setupView(n,d)}const f={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function nC(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Yg(t),e.set(r,[a])):s>=o.length?(a=new Yg(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const iC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rC=`uniform sampler2D shadow_pass;
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
}`,sC=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],oC=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],Kg=new Dt,Eo=new z,Ku=new z;function aC(t,e,n){let i=new ap;const r=new et,s=new et,o=new bt,a=new _w,l=new xw,c={},u=n.maxTextureSize,f={[Sr]:_n,[_n]:Sr,[pi]:pi},d=new Ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:iC,fragmentShader:rC}),v=d.clone();v.defines.HORIZONTAL_PASS=1;const g=new ri;g.setAttribute("position",new Si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new ii(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Al;let h=this.type;this.render=function(w,R,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===r1&&(Be("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Al);const b=t.getRenderTarget(),P=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),U=t.state;U.setBlending(Fi),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const $=h!==this.type;$&&R.traverse(function(j){j.material&&(Array.isArray(j.material)?j.material.forEach(I=>I.needsUpdate=!0):j.material.needsUpdate=!0)});for(let j=0,I=w.length;j<I;j++){const B=w[j],G=B.shadow;if(G===void 0){Be("WebGLShadowMap:",B,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const O=G.getFrameExtents();r.multiply(O),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/O.x),r.x=s.x*O.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/O.y),r.y=s.y*O.y,G.mapSize.y=s.y));const q=t.state.buffers.depth.getReversed();if(G.camera._reversedDepth=q,G.map===null||$===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Co){if(B.isPointLight){Be("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new yi(r.x,r.y,{format:Qr,type:Hi,minFilter:nn,magFilter:nn,generateMipmaps:!1}),G.map.texture.name=B.name+".shadowMap",G.map.depthTexture=new Zs(r.x,r.y,mi),G.map.depthTexture.name=B.name+".shadowMapDepth",G.map.depthTexture.format=Gi,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Xt,G.map.depthTexture.magFilter=Xt}else B.isPointLight?(G.map=new mx(r.x),G.map.depthTexture=new uw(r.x,Mi)):(G.map=new yi(r.x,r.y),G.map.depthTexture=new Zs(r.x,r.y,Mi)),G.map.depthTexture.name=B.name+".shadowMap",G.map.depthTexture.format=Gi,this.type===Al?(G.map.depthTexture.compareFunction=q?ip:np,G.map.depthTexture.minFilter=nn,G.map.depthTexture.magFilter=nn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Xt,G.map.depthTexture.magFilter=Xt);G.camera.updateProjectionMatrix()}const Z=G.map.isWebGLCubeRenderTarget?6:1;for(let ie=0;ie<Z;ie++){if(G.map.isWebGLCubeRenderTarget)t.setRenderTarget(G.map,ie),t.clear();else{ie===0&&(t.setRenderTarget(G.map),t.clear());const le=G.getViewport(ie);o.set(s.x*le.x,s.y*le.y,s.x*le.z,s.y*le.w),U.viewport(o)}if(B.isPointLight){const le=G.camera,Ue=G.matrix,Fe=B.distance||le.far;Fe!==le.far&&(le.far=Fe,le.updateProjectionMatrix()),Eo.setFromMatrixPosition(B.matrixWorld),le.position.copy(Eo),Ku.copy(le.position),Ku.add(sC[ie]),le.up.copy(oC[ie]),le.lookAt(Ku),le.updateMatrixWorld(),Ue.makeTranslation(-Eo.x,-Eo.y,-Eo.z),Kg.multiplyMatrices(le.projectionMatrix,le.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Kg,le.coordinateSystem,le.reversedDepth)}else G.updateMatrices(B);i=G.getFrustum(),M(R,x,G.camera,B,this.type)}G.isPointLightShadow!==!0&&this.type===Co&&m(G,x),G.needsUpdate=!1}h=this.type,p.needsUpdate=!1,t.setRenderTarget(b,P,L)};function m(w,R){const x=e.update(y);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,v.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,v.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new yi(r.x,r.y,{format:Qr,type:Hi})),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(R,null,x,d,y,null),v.uniforms.shadow_pass.value=w.mapPass.texture,v.uniforms.resolution.value=w.mapSize,v.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(R,null,x,v,y,null)}function _(w,R,x,b){let P=null;const L=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)P=L;else if(P=x.isPointLight===!0?l:a,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const U=P.uuid,$=R.uuid;let j=c[U];j===void 0&&(j={},c[U]=j);let I=j[$];I===void 0&&(I=P.clone(),j[$]=I,R.addEventListener("dispose",T)),P=I}if(P.visible=R.visible,P.wireframe=R.wireframe,b===Co?P.side=R.shadowSide!==null?R.shadowSide:R.side:P.side=R.shadowSide!==null?R.shadowSide:f[R.side],P.alphaMap=R.alphaMap,P.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,P.map=R.map,P.clipShadows=R.clipShadows,P.clippingPlanes=R.clippingPlanes,P.clipIntersection=R.clipIntersection,P.displacementMap=R.displacementMap,P.displacementScale=R.displacementScale,P.displacementBias=R.displacementBias,P.wireframeLinewidth=R.wireframeLinewidth,P.linewidth=R.linewidth,x.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const U=t.properties.get(P);U.light=x}return P}function M(w,R,x,b,P){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&P===Co)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);const $=e.update(w),j=w.material;if(Array.isArray(j)){const I=$.groups;for(let B=0,G=I.length;B<G;B++){const O=I[B],q=j[O.materialIndex];if(q&&q.visible){const Z=_(w,q,b,P);w.onBeforeShadow(t,w,R,x,$,Z,O),t.renderBufferDirect(x,null,$,Z,w,O),w.onAfterShadow(t,w,R,x,$,Z,O)}}}else if(j.visible){const I=_(w,j,b,P);w.onBeforeShadow(t,w,R,x,$,I,null),t.renderBufferDirect(x,null,$,I,w,null),w.onAfterShadow(t,w,R,x,$,I,null)}}const U=w.children;for(let $=0,j=U.length;$<j;$++)M(U[$],R,x,b,P)}function T(w){w.target.removeEventListener("dispose",T);for(const x in c){const b=c[x],P=w.target.uuid;P in b&&(b[P].dispose(),delete b[P])}}}function lC(t,e){function n(){let D=!1;const fe=new bt;let J=null;const Ee=new bt(0,0,0,0);return{setMask:function(pe){J!==pe&&!D&&(t.colorMask(pe,pe,pe,pe),J=pe)},setLocked:function(pe){D=pe},setClear:function(pe,ne,Pe,Ge,Rt){Rt===!0&&(pe*=Ge,ne*=Ge,Pe*=Ge),fe.set(pe,ne,Pe,Ge),Ee.equals(fe)===!1&&(t.clearColor(pe,ne,Pe,Ge),Ee.copy(fe))},reset:function(){D=!1,J=null,Ee.set(-1,0,0,0)}}}function i(){let D=!1,fe=!1,J=null,Ee=null,pe=null;return{setReversed:function(ne){if(fe!==ne){const Pe=e.get("EXT_clip_control");ne?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),fe=ne;const Ge=pe;pe=null,this.setClear(Ge)}},getReversed:function(){return fe},setTest:function(ne){ne?re(t.DEPTH_TEST):Ce(t.DEPTH_TEST)},setMask:function(ne){J!==ne&&!D&&(t.depthMask(ne),J=ne)},setFunc:function(ne){if(fe&&(ne=O1[ne]),Ee!==ne){switch(ne){case ef:t.depthFunc(t.NEVER);break;case tf:t.depthFunc(t.ALWAYS);break;case nf:t.depthFunc(t.LESS);break;case Ys:t.depthFunc(t.LEQUAL);break;case rf:t.depthFunc(t.EQUAL);break;case sf:t.depthFunc(t.GEQUAL);break;case of:t.depthFunc(t.GREATER);break;case af:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Ee=ne}},setLocked:function(ne){D=ne},setClear:function(ne){pe!==ne&&(pe=ne,fe&&(ne=1-ne),t.clearDepth(ne))},reset:function(){D=!1,J=null,Ee=null,pe=null,fe=!1}}}function r(){let D=!1,fe=null,J=null,Ee=null,pe=null,ne=null,Pe=null,Ge=null,Rt=null;return{setTest:function(dt){D||(dt?re(t.STENCIL_TEST):Ce(t.STENCIL_TEST))},setMask:function(dt){fe!==dt&&!D&&(t.stencilMask(dt),fe=dt)},setFunc:function(dt,wi,oi){(J!==dt||Ee!==wi||pe!==oi)&&(t.stencilFunc(dt,wi,oi),J=dt,Ee=wi,pe=oi)},setOp:function(dt,wi,oi){(ne!==dt||Pe!==wi||Ge!==oi)&&(t.stencilOp(dt,wi,oi),ne=dt,Pe=wi,Ge=oi)},setLocked:function(dt){D=dt},setClear:function(dt){Rt!==dt&&(t.clearStencil(dt),Rt=dt)},reset:function(){D=!1,fe=null,J=null,Ee=null,pe=null,ne=null,Pe=null,Ge=null,Rt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},d={},v=new WeakMap,g=[],y=null,p=!1,h=null,m=null,_=null,M=null,T=null,w=null,R=null,x=new tt(0,0,0),b=0,P=!1,L=null,U=null,$=null,j=null,I=null;const B=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,O=0;const q=t.getParameter(t.VERSION);q.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(q)[1]),G=O>=1):q.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),G=O>=2);let Z=null,ie={};const le=t.getParameter(t.SCISSOR_BOX),Ue=t.getParameter(t.VIEWPORT),Fe=new bt().fromArray(le),ce=new bt().fromArray(Ue);function Y(D,fe,J,Ee){const pe=new Uint8Array(4),ne=t.createTexture();t.bindTexture(D,ne),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Pe=0;Pe<J;Pe++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(fe,0,t.RGBA,1,1,Ee,0,t.RGBA,t.UNSIGNED_BYTE,pe):t.texImage2D(fe+Pe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,pe);return ne}const ae={};ae[t.TEXTURE_2D]=Y(t.TEXTURE_2D,t.TEXTURE_2D,1),ae[t.TEXTURE_CUBE_MAP]=Y(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[t.TEXTURE_2D_ARRAY]=Y(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ae[t.TEXTURE_3D]=Y(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),re(t.DEPTH_TEST),o.setFunc(Ys),Le(!1),Me(Jm),re(t.CULL_FACE),ut(Fi);function re(D){u[D]!==!0&&(t.enable(D),u[D]=!0)}function Ce(D){u[D]!==!1&&(t.disable(D),u[D]=!1)}function ke(D,fe){return d[D]!==fe?(t.bindFramebuffer(D,fe),d[D]=fe,D===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=fe),D===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=fe),!0):!1}function Ie(D,fe){let J=g,Ee=!1;if(D){J=v.get(fe),J===void 0&&(J=[],v.set(fe,J));const pe=D.textures;if(J.length!==pe.length||J[0]!==t.COLOR_ATTACHMENT0){for(let ne=0,Pe=pe.length;ne<Pe;ne++)J[ne]=t.COLOR_ATTACHMENT0+ne;J.length=pe.length,Ee=!0}}else J[0]!==t.BACK&&(J[0]=t.BACK,Ee=!0);Ee&&t.drawBuffers(J)}function mt(D){return y!==D?(t.useProgram(D),y=D,!0):!1}const Ye={[Fr]:t.FUNC_ADD,[o1]:t.FUNC_SUBTRACT,[a1]:t.FUNC_REVERSE_SUBTRACT};Ye[l1]=t.MIN,Ye[c1]=t.MAX;const at={[u1]:t.ZERO,[d1]:t.ONE,[f1]:t.SRC_COLOR,[Jd]:t.SRC_ALPHA,[_1]:t.SRC_ALPHA_SATURATE,[g1]:t.DST_COLOR,[p1]:t.DST_ALPHA,[h1]:t.ONE_MINUS_SRC_COLOR,[Qd]:t.ONE_MINUS_SRC_ALPHA,[v1]:t.ONE_MINUS_DST_COLOR,[m1]:t.ONE_MINUS_DST_ALPHA,[x1]:t.CONSTANT_COLOR,[y1]:t.ONE_MINUS_CONSTANT_COLOR,[S1]:t.CONSTANT_ALPHA,[M1]:t.ONE_MINUS_CONSTANT_ALPHA};function ut(D,fe,J,Ee,pe,ne,Pe,Ge,Rt,dt){if(D===Fi){p===!0&&(Ce(t.BLEND),p=!1);return}if(p===!1&&(re(t.BLEND),p=!0),D!==s1){if(D!==h||dt!==P){if((m!==Fr||T!==Fr)&&(t.blendEquation(t.FUNC_ADD),m=Fr,T=Fr),dt)switch(D){case zs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Qm:t.blendFunc(t.ONE,t.ONE);break;case eg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case tg:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:rt("WebGLState: Invalid blending: ",D);break}else switch(D){case zs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Qm:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case eg:rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case tg:rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:rt("WebGLState: Invalid blending: ",D);break}_=null,M=null,w=null,R=null,x.set(0,0,0),b=0,h=D,P=dt}return}pe=pe||fe,ne=ne||J,Pe=Pe||Ee,(fe!==m||pe!==T)&&(t.blendEquationSeparate(Ye[fe],Ye[pe]),m=fe,T=pe),(J!==_||Ee!==M||ne!==w||Pe!==R)&&(t.blendFuncSeparate(at[J],at[Ee],at[ne],at[Pe]),_=J,M=Ee,w=ne,R=Pe),(Ge.equals(x)===!1||Rt!==b)&&(t.blendColor(Ge.r,Ge.g,Ge.b,Rt),x.copy(Ge),b=Rt),h=D,P=!1}function ge(D,fe){D.side===pi?Ce(t.CULL_FACE):re(t.CULL_FACE);let J=D.side===_n;fe&&(J=!J),Le(J),D.blending===zs&&D.transparent===!1?ut(Fi):ut(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);const Ee=D.stencilWrite;a.setTest(Ee),Ee&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),C(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?re(t.SAMPLE_ALPHA_TO_COVERAGE):Ce(t.SAMPLE_ALPHA_TO_COVERAGE)}function Le(D){L!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),L=D)}function Me(D){D!==n1?(re(t.CULL_FACE),D!==U&&(D===Jm?t.cullFace(t.BACK):D===i1?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ce(t.CULL_FACE),U=D}function Ke(D){D!==$&&(G&&t.lineWidth(D),$=D)}function C(D,fe,J){D?(re(t.POLYGON_OFFSET_FILL),(j!==fe||I!==J)&&(j=fe,I=J,o.getReversed()&&(fe=-fe),t.polygonOffset(fe,J))):Ce(t.POLYGON_OFFSET_FILL)}function ze(D){D?re(t.SCISSOR_TEST):Ce(t.SCISSOR_TEST)}function je(D){D===void 0&&(D=t.TEXTURE0+B-1),Z!==D&&(t.activeTexture(D),Z=D)}function nt(D,fe,J){J===void 0&&(Z===null?J=t.TEXTURE0+B-1:J=Z);let Ee=ie[J];Ee===void 0&&(Ee={type:void 0,texture:void 0},ie[J]=Ee),(Ee.type!==D||Ee.texture!==fe)&&(Z!==J&&(t.activeTexture(J),Z=J),t.bindTexture(D,fe||ae[D]),Ee.type=D,Ee.texture=fe)}function ve(){const D=ie[Z];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function yt(){try{t.compressedTexImage2D(...arguments)}catch(D){rt("WebGLState:",D)}}function A(){try{t.compressedTexImage3D(...arguments)}catch(D){rt("WebGLState:",D)}}function S(){try{t.texSubImage2D(...arguments)}catch(D){rt("WebGLState:",D)}}function k(){try{t.texSubImage3D(...arguments)}catch(D){rt("WebGLState:",D)}}function Q(){try{t.compressedTexSubImage2D(...arguments)}catch(D){rt("WebGLState:",D)}}function se(){try{t.compressedTexSubImage3D(...arguments)}catch(D){rt("WebGLState:",D)}}function ue(){try{t.texStorage2D(...arguments)}catch(D){rt("WebGLState:",D)}}function me(){try{t.texStorage3D(...arguments)}catch(D){rt("WebGLState:",D)}}function K(){try{t.texImage2D(...arguments)}catch(D){rt("WebGLState:",D)}}function ee(){try{t.texImage3D(...arguments)}catch(D){rt("WebGLState:",D)}}function Se(D){return f[D]!==void 0?f[D]:t.getParameter(D)}function Te(D,fe){f[D]!==fe&&(t.pixelStorei(D,fe),f[D]=fe)}function he(D){Fe.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),Fe.copy(D))}function de(D){ce.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),ce.copy(D))}function Ve(D,fe){let J=c.get(fe);J===void 0&&(J=new WeakMap,c.set(fe,J));let Ee=J.get(D);Ee===void 0&&(Ee=t.getUniformBlockIndex(fe,D.name),J.set(D,Ee))}function Xe(D,fe){const Ee=c.get(fe).get(D);l.get(fe)!==Ee&&(t.uniformBlockBinding(fe,Ee,D.__bindingPointIndex),l.set(fe,Ee))}function ot(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},f={},Z=null,ie={},d={},v=new WeakMap,g=[],y=null,p=!1,h=null,m=null,_=null,M=null,T=null,w=null,R=null,x=new tt(0,0,0),b=0,P=!1,L=null,U=null,$=null,j=null,I=null,Fe.set(0,0,t.canvas.width,t.canvas.height),ce.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:re,disable:Ce,bindFramebuffer:ke,drawBuffers:Ie,useProgram:mt,setBlending:ut,setMaterial:ge,setFlipSided:Le,setCullFace:Me,setLineWidth:Ke,setPolygonOffset:C,setScissorTest:ze,activeTexture:je,bindTexture:nt,unbindTexture:ve,compressedTexImage2D:yt,compressedTexImage3D:A,texImage2D:K,texImage3D:ee,pixelStorei:Te,getParameter:Se,updateUBOMapping:Ve,uniformBlockBinding:Xe,texStorage2D:ue,texStorage3D:me,texSubImage2D:S,texSubImage3D:k,compressedTexSubImage2D:Q,compressedTexSubImage3D:se,scissor:he,viewport:de,reset:ot}}function cC(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new et,u=new WeakMap,f=new Set;let d;const v=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,S){return g?new OffscreenCanvas(A,S):dc("canvas")}function p(A,S,k){let Q=1;const se=yt(A);if((se.width>k||se.height>k)&&(Q=k/Math.max(se.width,se.height)),Q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const ue=Math.floor(Q*se.width),me=Math.floor(Q*se.height);d===void 0&&(d=y(ue,me));const K=S?y(ue,me):d;return K.width=ue,K.height=me,K.getContext("2d").drawImage(A,0,0,ue,me),Be("WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+ue+"x"+me+")."),K}else return"data"in A&&Be("WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),A;return A}function h(A){return A.generateMipmaps}function m(A){t.generateMipmap(A)}function _(A){return A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?t.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function M(A,S,k,Q,se,ue=!1){if(A!==null){if(t[A]!==void 0)return t[A];Be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let me;Q&&(me=e.get("EXT_texture_norm16"),me||Be("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=S;if(S===t.RED&&(k===t.FLOAT&&(K=t.R32F),k===t.HALF_FLOAT&&(K=t.R16F),k===t.UNSIGNED_BYTE&&(K=t.R8),k===t.UNSIGNED_SHORT&&me&&(K=me.R16_EXT),k===t.SHORT&&me&&(K=me.R16_SNORM_EXT)),S===t.RED_INTEGER&&(k===t.UNSIGNED_BYTE&&(K=t.R8UI),k===t.UNSIGNED_SHORT&&(K=t.R16UI),k===t.UNSIGNED_INT&&(K=t.R32UI),k===t.BYTE&&(K=t.R8I),k===t.SHORT&&(K=t.R16I),k===t.INT&&(K=t.R32I)),S===t.RG&&(k===t.FLOAT&&(K=t.RG32F),k===t.HALF_FLOAT&&(K=t.RG16F),k===t.UNSIGNED_BYTE&&(K=t.RG8),k===t.UNSIGNED_SHORT&&me&&(K=me.RG16_EXT),k===t.SHORT&&me&&(K=me.RG16_SNORM_EXT)),S===t.RG_INTEGER&&(k===t.UNSIGNED_BYTE&&(K=t.RG8UI),k===t.UNSIGNED_SHORT&&(K=t.RG16UI),k===t.UNSIGNED_INT&&(K=t.RG32UI),k===t.BYTE&&(K=t.RG8I),k===t.SHORT&&(K=t.RG16I),k===t.INT&&(K=t.RG32I)),S===t.RGB_INTEGER&&(k===t.UNSIGNED_BYTE&&(K=t.RGB8UI),k===t.UNSIGNED_SHORT&&(K=t.RGB16UI),k===t.UNSIGNED_INT&&(K=t.RGB32UI),k===t.BYTE&&(K=t.RGB8I),k===t.SHORT&&(K=t.RGB16I),k===t.INT&&(K=t.RGB32I)),S===t.RGBA_INTEGER&&(k===t.UNSIGNED_BYTE&&(K=t.RGBA8UI),k===t.UNSIGNED_SHORT&&(K=t.RGBA16UI),k===t.UNSIGNED_INT&&(K=t.RGBA32UI),k===t.BYTE&&(K=t.RGBA8I),k===t.SHORT&&(K=t.RGBA16I),k===t.INT&&(K=t.RGBA32I)),S===t.RGB&&(k===t.UNSIGNED_SHORT&&me&&(K=me.RGB16_EXT),k===t.SHORT&&me&&(K=me.RGB16_SNORM_EXT),k===t.UNSIGNED_INT_5_9_9_9_REV&&(K=t.RGB9_E5),k===t.UNSIGNED_INT_10F_11F_11F_REV&&(K=t.R11F_G11F_B10F)),S===t.RGBA){const ee=ue?uc:Qe.getTransfer(se);k===t.FLOAT&&(K=t.RGBA32F),k===t.HALF_FLOAT&&(K=t.RGBA16F),k===t.UNSIGNED_BYTE&&(K=ee===lt?t.SRGB8_ALPHA8:t.RGBA8),k===t.UNSIGNED_SHORT&&me&&(K=me.RGBA16_EXT),k===t.SHORT&&me&&(K=me.RGBA16_SNORM_EXT),k===t.UNSIGNED_SHORT_4_4_4_4&&(K=t.RGBA4),k===t.UNSIGNED_SHORT_5_5_5_1&&(K=t.RGB5_A1)}return(K===t.R16F||K===t.R32F||K===t.RG16F||K===t.RG32F||K===t.RGBA16F||K===t.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function T(A,S){let k;return A?S===null||S===Mi||S===aa?k=t.DEPTH24_STENCIL8:S===mi?k=t.DEPTH32F_STENCIL8:S===oa&&(k=t.DEPTH24_STENCIL8,Be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Mi||S===aa?k=t.DEPTH_COMPONENT24:S===mi?k=t.DEPTH_COMPONENT32F:S===oa&&(k=t.DEPTH_COMPONENT16),k}function w(A,S){return h(A)===!0||A.isFramebufferTexture&&A.minFilter!==Xt&&A.minFilter!==nn?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function R(A){const S=A.target;S.removeEventListener("dispose",R),b(S),S.isVideoTexture&&u.delete(S),S.isHTMLTexture&&f.delete(S)}function x(A){const S=A.target;S.removeEventListener("dispose",x),L(S)}function b(A){const S=i.get(A);if(S.__webglInit===void 0)return;const k=A.source,Q=v.get(k);if(Q){const se=Q[S.__cacheKey];se.usedTimes--,se.usedTimes===0&&P(A),Object.keys(Q).length===0&&v.delete(k)}i.remove(A)}function P(A){const S=i.get(A);t.deleteTexture(S.__webglTexture);const k=A.source,Q=v.get(k);delete Q[S.__cacheKey],o.memory.textures--}function L(A){const S=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(S.__webglFramebuffer[Q]))for(let se=0;se<S.__webglFramebuffer[Q].length;se++)t.deleteFramebuffer(S.__webglFramebuffer[Q][se]);else t.deleteFramebuffer(S.__webglFramebuffer[Q]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[Q])}else{if(Array.isArray(S.__webglFramebuffer))for(let Q=0;Q<S.__webglFramebuffer.length;Q++)t.deleteFramebuffer(S.__webglFramebuffer[Q]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Q=0;Q<S.__webglColorRenderbuffer.length;Q++)S.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[Q]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const k=A.textures;for(let Q=0,se=k.length;Q<se;Q++){const ue=i.get(k[Q]);ue.__webglTexture&&(t.deleteTexture(ue.__webglTexture),o.memory.textures--),i.remove(k[Q])}i.remove(A)}let U=0;function $(){U=0}function j(){return U}function I(A){U=A}function B(){const A=U;return A>=r.maxTextures&&Be("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),U+=1,A}function G(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function O(A,S){const k=i.get(A);if(A.isVideoTexture&&nt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&k.__version!==A.version){const Q=A.image;if(Q===null)Be("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)Be("WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(k,A,S);return}}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,k.__webglTexture,t.TEXTURE0+S)}function q(A,S){const k=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){Ce(k,A,S);return}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,k.__webglTexture,t.TEXTURE0+S)}function Z(A,S){const k=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){Ce(k,A,S);return}n.bindTexture(t.TEXTURE_3D,k.__webglTexture,t.TEXTURE0+S)}function ie(A,S){const k=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&k.__version!==A.version){ke(k,A,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture,t.TEXTURE0+S)}const le={[lf]:t.REPEAT,[Ii]:t.CLAMP_TO_EDGE,[cf]:t.MIRRORED_REPEAT},Ue={[Xt]:t.NEAREST,[T1]:t.NEAREST_MIPMAP_NEAREST,[Ga]:t.NEAREST_MIPMAP_LINEAR,[nn]:t.LINEAR,[xu]:t.LINEAR_MIPMAP_NEAREST,[Vr]:t.LINEAR_MIPMAP_LINEAR},Fe={[R1]:t.NEVER,[D1]:t.ALWAYS,[C1]:t.LESS,[np]:t.LEQUAL,[P1]:t.EQUAL,[ip]:t.GEQUAL,[L1]:t.GREATER,[N1]:t.NOTEQUAL};function ce(A,S){if(S.type===mi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===nn||S.magFilter===xu||S.magFilter===Ga||S.magFilter===Vr||S.minFilter===nn||S.minFilter===xu||S.minFilter===Ga||S.minFilter===Vr)&&Be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,le[S.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,le[S.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,le[S.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,Ue[S.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,Ue[S.minFilter]),S.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,Fe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Xt||S.minFilter!==Ga&&S.minFilter!==Vr||S.type===mi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Y(A,S){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",R));const Q=S.source;let se=v.get(Q);se===void 0&&(se={},v.set(Q,se));const ue=G(S);if(ue!==A.__cacheKey){se[ue]===void 0&&(se[ue]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,k=!0),se[ue].usedTimes++;const me=se[A.__cacheKey];me!==void 0&&(se[A.__cacheKey].usedTimes--,me.usedTimes===0&&P(S)),A.__cacheKey=ue,A.__webglTexture=se[ue].texture}return k}function ae(A,S,k){return Math.floor(Math.floor(A/k)/S)}function re(A,S,k,Q){const ue=A.updateRanges;if(ue.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,S.width,S.height,k,Q,S.data);else{ue.sort((Te,he)=>Te.start-he.start);let me=0;for(let Te=1;Te<ue.length;Te++){const he=ue[me],de=ue[Te],Ve=he.start+he.count,Xe=ae(de.start,S.width,4),ot=ae(he.start,S.width,4);de.start<=Ve+1&&Xe===ot&&ae(de.start+de.count-1,S.width,4)===Xe?he.count=Math.max(he.count,de.start+de.count-he.start):(++me,ue[me]=de)}ue.length=me+1;const K=n.getParameter(t.UNPACK_ROW_LENGTH),ee=n.getParameter(t.UNPACK_SKIP_PIXELS),Se=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,S.width);for(let Te=0,he=ue.length;Te<he;Te++){const de=ue[Te],Ve=Math.floor(de.start/4),Xe=Math.ceil(de.count/4),ot=Ve%S.width,D=Math.floor(Ve/S.width),fe=Xe,J=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,ot),n.pixelStorei(t.UNPACK_SKIP_ROWS,D),n.texSubImage2D(t.TEXTURE_2D,0,ot,D,fe,J,k,Q,S.data)}A.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,K),n.pixelStorei(t.UNPACK_SKIP_PIXELS,ee),n.pixelStorei(t.UNPACK_SKIP_ROWS,Se)}}function Ce(A,S,k){let Q=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Q=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Q=t.TEXTURE_3D);const se=Y(A,S),ue=S.source;n.bindTexture(Q,A.__webglTexture,t.TEXTURE0+k);const me=i.get(ue);if(ue.version!==me.__version||se===!0){if(n.activeTexture(t.TEXTURE0+k),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const J=Qe.getPrimaries(Qe.workingColorSpace),Ee=S.colorSpace===sr?null:Qe.getPrimaries(S.colorSpace),pe=S.colorSpace===sr||J===Ee?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe)}n.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment);let ee=p(S.image,!1,r.maxTextureSize);ee=ve(S,ee);const Se=s.convert(S.format,S.colorSpace),Te=s.convert(S.type);let he=M(S.internalFormat,Se,Te,S.normalized,S.colorSpace,S.isVideoTexture);ce(Q,S);let de;const Ve=S.mipmaps,Xe=S.isVideoTexture!==!0,ot=me.__version===void 0||se===!0,D=ue.dataReady,fe=w(S,ee);if(S.isDepthTexture)he=T(S.format===Hr,S.type),ot&&(Xe?n.texStorage2D(t.TEXTURE_2D,1,he,ee.width,ee.height):n.texImage2D(t.TEXTURE_2D,0,he,ee.width,ee.height,0,Se,Te,null));else if(S.isDataTexture)if(Ve.length>0){Xe&&ot&&n.texStorage2D(t.TEXTURE_2D,fe,he,Ve[0].width,Ve[0].height);for(let J=0,Ee=Ve.length;J<Ee;J++)de=Ve[J],Xe?D&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,de.width,de.height,Se,Te,de.data):n.texImage2D(t.TEXTURE_2D,J,he,de.width,de.height,0,Se,Te,de.data);S.generateMipmaps=!1}else Xe?(ot&&n.texStorage2D(t.TEXTURE_2D,fe,he,ee.width,ee.height),D&&re(S,ee,Se,Te)):n.texImage2D(t.TEXTURE_2D,0,he,ee.width,ee.height,0,Se,Te,ee.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Xe&&ot&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,he,Ve[0].width,Ve[0].height,ee.depth);for(let J=0,Ee=Ve.length;J<Ee;J++)if(de=Ve[J],S.format!==Qn)if(Se!==null)if(Xe){if(D)if(S.layerUpdates.size>0){const pe=bg(de.width,de.height,S.format,S.type);for(const ne of S.layerUpdates){const Pe=de.data.subarray(ne*pe/de.data.BYTES_PER_ELEMENT,(ne+1)*pe/de.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,ne,de.width,de.height,1,Se,Pe)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,de.width,de.height,ee.depth,Se,de.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,J,he,de.width,de.height,ee.depth,0,de.data,0,0);else Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xe?D&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,de.width,de.height,ee.depth,Se,Te,de.data):n.texImage3D(t.TEXTURE_2D_ARRAY,J,he,de.width,de.height,ee.depth,0,Se,Te,de.data)}else{Xe&&ot&&n.texStorage2D(t.TEXTURE_2D,fe,he,Ve[0].width,Ve[0].height);for(let J=0,Ee=Ve.length;J<Ee;J++)de=Ve[J],S.format!==Qn?Se!==null?Xe?D&&n.compressedTexSubImage2D(t.TEXTURE_2D,J,0,0,de.width,de.height,Se,de.data):n.compressedTexImage2D(t.TEXTURE_2D,J,he,de.width,de.height,0,de.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?D&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,de.width,de.height,Se,Te,de.data):n.texImage2D(t.TEXTURE_2D,J,he,de.width,de.height,0,Se,Te,de.data)}else if(S.isDataArrayTexture)if(Xe){if(ot&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,he,ee.width,ee.height,ee.depth),D)if(S.layerUpdates.size>0){const J=bg(ee.width,ee.height,S.format,S.type);for(const Ee of S.layerUpdates){const pe=ee.data.subarray(Ee*J/ee.data.BYTES_PER_ELEMENT,(Ee+1)*J/ee.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Ee,ee.width,ee.height,1,Se,Te,pe)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,Se,Te,ee.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,he,ee.width,ee.height,ee.depth,0,Se,Te,ee.data);else if(S.isData3DTexture)Xe?(ot&&n.texStorage3D(t.TEXTURE_3D,fe,he,ee.width,ee.height,ee.depth),D&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,Se,Te,ee.data)):n.texImage3D(t.TEXTURE_3D,0,he,ee.width,ee.height,ee.depth,0,Se,Te,ee.data);else if(S.isFramebufferTexture){if(ot)if(Xe)n.texStorage2D(t.TEXTURE_2D,fe,he,ee.width,ee.height);else{let J=ee.width,Ee=ee.height;for(let pe=0;pe<fe;pe++)n.texImage2D(t.TEXTURE_2D,pe,he,J,Ee,0,Se,Te,null),J>>=1,Ee>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in t){const J=t.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),ee.parentNode!==J){J.appendChild(ee),f.add(S),J.onpaint=Ge=>{const Rt=Ge.changedElements;for(const dt of f)Rt.includes(dt.image)&&(dt.needsUpdate=!0)},J.requestPaint();return}const Ee=0,pe=t.RGBA,ne=t.RGBA,Pe=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,Ee,pe,ne,Pe,ee),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ve.length>0){if(Xe&&ot){const J=yt(Ve[0]);n.texStorage2D(t.TEXTURE_2D,fe,he,J.width,J.height)}for(let J=0,Ee=Ve.length;J<Ee;J++)de=Ve[J],Xe?D&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,Se,Te,de):n.texImage2D(t.TEXTURE_2D,J,he,Se,Te,de);S.generateMipmaps=!1}else if(Xe){if(ot){const J=yt(ee);n.texStorage2D(t.TEXTURE_2D,fe,he,J.width,J.height)}D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Se,Te,ee)}else n.texImage2D(t.TEXTURE_2D,0,he,Se,Te,ee);h(S)&&m(Q),me.__version=ue.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function ke(A,S,k){if(S.image.length!==6)return;const Q=Y(A,S),se=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+k);const ue=i.get(se);if(se.version!==ue.__version||Q===!0){n.activeTexture(t.TEXTURE0+k);const me=Qe.getPrimaries(Qe.workingColorSpace),K=S.colorSpace===sr?null:Qe.getPrimaries(S.colorSpace),ee=S.colorSpace===sr||me===K?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const Se=S.isCompressedTexture||S.image[0].isCompressedTexture,Te=S.image[0]&&S.image[0].isDataTexture,he=[];for(let ne=0;ne<6;ne++)!Se&&!Te?he[ne]=p(S.image[ne],!0,r.maxCubemapSize):he[ne]=Te?S.image[ne].image:S.image[ne],he[ne]=ve(S,he[ne]);const de=he[0],Ve=s.convert(S.format,S.colorSpace),Xe=s.convert(S.type),ot=M(S.internalFormat,Ve,Xe,S.normalized,S.colorSpace),D=S.isVideoTexture!==!0,fe=ue.__version===void 0||Q===!0,J=se.dataReady;let Ee=w(S,de);ce(t.TEXTURE_CUBE_MAP,S);let pe;if(Se){D&&fe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ee,ot,de.width,de.height);for(let ne=0;ne<6;ne++){pe=he[ne].mipmaps;for(let Pe=0;Pe<pe.length;Pe++){const Ge=pe[Pe];S.format!==Qn?Ve!==null?D?J&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe,0,0,Ge.width,Ge.height,Ve,Ge.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe,ot,Ge.width,Ge.height,0,Ge.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe,0,0,Ge.width,Ge.height,Ve,Xe,Ge.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe,ot,Ge.width,Ge.height,0,Ve,Xe,Ge.data)}}}else{if(pe=S.mipmaps,D&&fe){pe.length>0&&Ee++;const ne=yt(he[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Ee,ot,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(Te){D?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,he[ne].width,he[ne].height,Ve,Xe,he[ne].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ot,he[ne].width,he[ne].height,0,Ve,Xe,he[ne].data);for(let Pe=0;Pe<pe.length;Pe++){const Rt=pe[Pe].image[ne].image;D?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe+1,0,0,Rt.width,Rt.height,Ve,Xe,Rt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe+1,ot,Rt.width,Rt.height,0,Ve,Xe,Rt.data)}}else{D?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ve,Xe,he[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ot,Ve,Xe,he[ne]);for(let Pe=0;Pe<pe.length;Pe++){const Ge=pe[Pe];D?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe+1,0,0,Ve,Xe,Ge.image[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe+1,ot,Ve,Xe,Ge.image[ne])}}}h(S)&&m(t.TEXTURE_CUBE_MAP),ue.__version=se.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Ie(A,S,k,Q,se,ue){const me=s.convert(k.format,k.colorSpace),K=s.convert(k.type),ee=M(k.internalFormat,me,K,k.normalized,k.colorSpace),Se=i.get(S),Te=i.get(k);if(Te.__renderTarget=S,!Se.__hasExternalTextures){const he=Math.max(1,S.width>>ue),de=Math.max(1,S.height>>ue);se===t.TEXTURE_3D||se===t.TEXTURE_2D_ARRAY?n.texImage3D(se,ue,ee,he,de,S.depth,0,me,K,null):n.texImage2D(se,ue,ee,he,de,0,me,K,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),je(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,se,Te.__webglTexture,0,ze(S)):(se===t.TEXTURE_2D||se>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Q,se,Te.__webglTexture,ue),n.bindFramebuffer(t.FRAMEBUFFER,null)}function mt(A,S,k){if(t.bindRenderbuffer(t.RENDERBUFFER,A),S.depthBuffer){const Q=S.depthTexture,se=Q&&Q.isDepthTexture?Q.type:null,ue=T(S.stencilBuffer,se),me=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;je(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ze(S),ue,S.width,S.height):k?t.renderbufferStorageMultisample(t.RENDERBUFFER,ze(S),ue,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,ue,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,me,t.RENDERBUFFER,A)}else{const Q=S.textures;for(let se=0;se<Q.length;se++){const ue=Q[se],me=s.convert(ue.format,ue.colorSpace),K=s.convert(ue.type),ee=M(ue.internalFormat,me,K,ue.normalized,ue.colorSpace);je(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ze(S),ee,S.width,S.height):k?t.renderbufferStorageMultisample(t.RENDERBUFFER,ze(S),ee,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,ee,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ye(A,S,k){const Q=S.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const se=i.get(S.depthTexture);if(se.__renderTarget=S,(!se.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Q){if(se.__webglInit===void 0&&(se.__webglInit=!0,S.depthTexture.addEventListener("dispose",R)),se.__webglTexture===void 0){se.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,se.__webglTexture),ce(t.TEXTURE_CUBE_MAP,S.depthTexture);const Se=s.convert(S.depthTexture.format),Te=s.convert(S.depthTexture.type);let he;S.depthTexture.format===Gi?he=t.DEPTH_COMPONENT24:S.depthTexture.format===Hr&&(he=t.DEPTH24_STENCIL8);for(let de=0;de<6;de++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,he,S.width,S.height,0,Se,Te,null)}}else O(S.depthTexture,0);const ue=se.__webglTexture,me=ze(S),K=Q?t.TEXTURE_CUBE_MAP_POSITIVE_X+k:t.TEXTURE_2D,ee=S.depthTexture.format===Hr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(S.depthTexture.format===Gi)je(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,K,ue,0,me):t.framebufferTexture2D(t.FRAMEBUFFER,ee,K,ue,0);else if(S.depthTexture.format===Hr)je(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,K,ue,0,me):t.framebufferTexture2D(t.FRAMEBUFFER,ee,K,ue,0);else throw new Error("Unknown depthTexture format")}function at(A){const S=i.get(A),k=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const Q=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Q){const se=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Q.removeEventListener("dispose",se)};Q.addEventListener("dispose",se),S.__depthDisposeCallback=se}S.__boundDepthTexture=Q}if(A.depthTexture&&!S.__autoAllocateDepthBuffer)if(k)for(let Q=0;Q<6;Q++)Ye(S.__webglFramebuffer[Q],A,Q);else{const Q=A.texture.mipmaps;Q&&Q.length>0?Ye(S.__webglFramebuffer[0],A,0):Ye(S.__webglFramebuffer,A,0)}else if(k){S.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[Q]),S.__webglDepthbuffer[Q]===void 0)S.__webglDepthbuffer[Q]=t.createRenderbuffer(),mt(S.__webglDepthbuffer[Q],A,!1);else{const se=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=S.__webglDepthbuffer[Q];t.bindRenderbuffer(t.RENDERBUFFER,ue),t.framebufferRenderbuffer(t.FRAMEBUFFER,se,t.RENDERBUFFER,ue)}}else{const Q=A.texture.mipmaps;if(Q&&Q.length>0?n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),mt(S.__webglDepthbuffer,A,!1);else{const se=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ue),t.framebufferRenderbuffer(t.FRAMEBUFFER,se,t.RENDERBUFFER,ue)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function ut(A,S,k){const Q=i.get(A);S!==void 0&&Ie(Q.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),k!==void 0&&at(A)}function ge(A){const S=A.texture,k=i.get(A),Q=i.get(S);A.addEventListener("dispose",x);const se=A.textures,ue=A.isWebGLCubeRenderTarget===!0,me=se.length>1;if(me||(Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture()),Q.__version=S.version,o.memory.textures++),ue){k.__webglFramebuffer=[];for(let K=0;K<6;K++)if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[K]=[];for(let ee=0;ee<S.mipmaps.length;ee++)k.__webglFramebuffer[K][ee]=t.createFramebuffer()}else k.__webglFramebuffer[K]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let K=0;K<S.mipmaps.length;K++)k.__webglFramebuffer[K]=t.createFramebuffer()}else k.__webglFramebuffer=t.createFramebuffer();if(me)for(let K=0,ee=se.length;K<ee;K++){const Se=i.get(se[K]);Se.__webglTexture===void 0&&(Se.__webglTexture=t.createTexture(),o.memory.textures++)}if(A.samples>0&&je(A)===!1){k.__webglMultisampledFramebuffer=t.createFramebuffer(),k.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let K=0;K<se.length;K++){const ee=se[K];k.__webglColorRenderbuffer[K]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,k.__webglColorRenderbuffer[K]);const Se=s.convert(ee.format,ee.colorSpace),Te=s.convert(ee.type),he=M(ee.internalFormat,Se,Te,ee.normalized,ee.colorSpace,A.isXRRenderTarget===!0),de=ze(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,de,he,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+K,t.RENDERBUFFER,k.__webglColorRenderbuffer[K])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=t.createRenderbuffer(),mt(k.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ue){n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),ce(t.TEXTURE_CUBE_MAP,S);for(let K=0;K<6;K++)if(S.mipmaps&&S.mipmaps.length>0)for(let ee=0;ee<S.mipmaps.length;ee++)Ie(k.__webglFramebuffer[K][ee],A,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+K,ee);else Ie(k.__webglFramebuffer[K],A,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);h(S)&&m(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(me){for(let K=0,ee=se.length;K<ee;K++){const Se=se[K],Te=i.get(Se);let he=t.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(he=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(he,Te.__webglTexture),ce(he,Se),Ie(k.__webglFramebuffer,A,Se,t.COLOR_ATTACHMENT0+K,he,0),h(Se)&&m(he)}n.unbindTexture()}else{let K=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(K=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(K,Q.__webglTexture),ce(K,S),S.mipmaps&&S.mipmaps.length>0)for(let ee=0;ee<S.mipmaps.length;ee++)Ie(k.__webglFramebuffer[ee],A,S,t.COLOR_ATTACHMENT0,K,ee);else Ie(k.__webglFramebuffer,A,S,t.COLOR_ATTACHMENT0,K,0);h(S)&&m(K),n.unbindTexture()}A.depthBuffer&&at(A)}function Le(A){const S=A.textures;for(let k=0,Q=S.length;k<Q;k++){const se=S[k];if(h(se)){const ue=_(A),me=i.get(se).__webglTexture;n.bindTexture(ue,me),m(ue),n.unbindTexture()}}}const Me=[],Ke=[];function C(A){if(A.samples>0){if(je(A)===!1){const S=A.textures,k=A.width,Q=A.height;let se=t.COLOR_BUFFER_BIT;const ue=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,me=i.get(A),K=S.length>1;if(K)for(let Se=0;Se<S.length;Se++)n.bindFramebuffer(t.FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer);const ee=A.texture.mipmaps;ee&&ee.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let Se=0;Se<S.length;Se++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(se|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(se|=t.STENCIL_BUFFER_BIT)),K){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,me.__webglColorRenderbuffer[Se]);const Te=i.get(S[Se]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Te,0)}t.blitFramebuffer(0,0,k,Q,0,0,k,Q,se,t.NEAREST),l===!0&&(Me.length=0,Ke.length=0,Me.push(t.COLOR_ATTACHMENT0+Se),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Me.push(ue),Ke.push(ue),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ke)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Me))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),K)for(let Se=0;Se<S.length;Se++){n.bindFramebuffer(t.FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.RENDERBUFFER,me.__webglColorRenderbuffer[Se]);const Te=i.get(S[Se]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.TEXTURE_2D,Te,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const S=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function ze(A){return Math.min(r.maxSamples,A.samples)}function je(A){const S=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function nt(A){const S=o.render.frame;u.get(A)!==S&&(u.set(A,S),A.update())}function ve(A,S){const k=A.colorSpace,Q=A.format,se=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==cc&&k!==sr&&(Qe.getTransfer(k)===lt?(Q!==Qn||se!==An)&&Be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):rt("WebGLTextures: Unsupported texture color space:",k)),S}function yt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=$,this.getTextureUnits=j,this.setTextureUnits=I,this.setTexture2D=O,this.setTexture2DArray=q,this.setTexture3D=Z,this.setTextureCube=ie,this.rebindTextures=ut,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=Le,this.updateMultisampleRenderTarget=C,this.setupDepthRenderbuffer=at,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=je,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function uC(t,e){function n(i,r=sr){let s;const o=Qe.getTransfer(r);if(i===An)return t.UNSIGNED_BYTE;if(i===Zh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Jh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Z_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===J_)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Y_)return t.BYTE;if(i===K_)return t.SHORT;if(i===oa)return t.UNSIGNED_SHORT;if(i===Kh)return t.INT;if(i===Mi)return t.UNSIGNED_INT;if(i===mi)return t.FLOAT;if(i===Hi)return t.HALF_FLOAT;if(i===Q_)return t.ALPHA;if(i===ex)return t.RGB;if(i===Qn)return t.RGBA;if(i===Gi)return t.DEPTH_COMPONENT;if(i===Hr)return t.DEPTH_STENCIL;if(i===tx)return t.RED;if(i===Qh)return t.RED_INTEGER;if(i===Qr)return t.RG;if(i===ep)return t.RG_INTEGER;if(i===tp)return t.RGBA_INTEGER;if(i===Rl||i===Cl||i===Pl||i===Ll)if(o===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Rl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Cl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Pl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ll)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Rl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Cl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Pl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ll)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===uf||i===df||i===ff||i===hf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===uf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===df)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ff)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===hf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===pf||i===mf||i===gf||i===vf||i===_f||i===ac||i===xf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===pf||i===mf)return o===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===gf)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===vf)return s.COMPRESSED_R11_EAC;if(i===_f)return s.COMPRESSED_SIGNED_R11_EAC;if(i===ac)return s.COMPRESSED_RG11_EAC;if(i===xf)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===yf||i===Sf||i===Mf||i===Ef||i===wf||i===Tf||i===Af||i===bf||i===Rf||i===Cf||i===Pf||i===Lf||i===Nf||i===Df)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===yf)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Sf)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Mf)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ef)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===wf)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Tf)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Af)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===bf)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Rf)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Cf)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Pf)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Lf)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Nf)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Df)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===If||i===Uf||i===Ff)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===If)return o===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Uf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ff)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Of||i===Bf||i===lc||i===kf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Of)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Bf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===lc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===kf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===aa?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const dC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fC=`
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

}`;class hC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new cx(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ei({vertexShader:dC,fragmentShader:fC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ii(new Dc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pC extends is{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,v=null,g=null;const y=typeof XRWebGLBinding<"u",p=new hC,h={},m=n.getContextAttributes();let _=null,M=null;const T=[],w=[],R=new et;let x=null;const b=new zn;b.viewport=new bt;const P=new zn;P.viewport=new bt;const L=[b,P],U=new ww;let $=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ae=T[Y];return ae===void 0&&(ae=new bu,T[Y]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(Y){let ae=T[Y];return ae===void 0&&(ae=new bu,T[Y]=ae),ae.getGripSpace()},this.getHand=function(Y){let ae=T[Y];return ae===void 0&&(ae=new bu,T[Y]=ae),ae.getHandSpace()};function I(Y){const ae=w.indexOf(Y.inputSource);if(ae===-1)return;const re=T[ae];re!==void 0&&(re.update(Y.inputSource,Y.frame,c||o),re.dispatchEvent({type:Y.type,data:Y.inputSource}))}function B(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",G);for(let Y=0;Y<T.length;Y++){const ae=w[Y];ae!==null&&(w[Y]=null,T[Y].disconnect(ae))}$=null,j=null,p.reset();for(const Y in h)delete h[Y];e.setRenderTarget(_),v=null,d=null,f=null,r=null,M=null,ce.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&Be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&Be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:v},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(r,n)),f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",B),r.addEventListener("inputsourceschange",G),m.xrCompatible!==!0&&await n.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(R),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,Ce=null,ke=null;m.depth&&(ke=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,re=m.stencil?Hr:Gi,Ce=m.stencil?aa:Mi);const Ie={colorFormat:n.RGBA8,depthFormat:ke,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(Ie),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new yi(d.textureWidth,d.textureHeight,{format:Qn,type:An,depthTexture:new Zs(d.textureWidth,d.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const re={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};v=new XRWebGLLayer(r,n,re),r.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),M=new yi(v.framebufferWidth,v.framebufferHeight,{format:Qn,type:An,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ce.setContext(r),ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function G(Y){for(let ae=0;ae<Y.removed.length;ae++){const re=Y.removed[ae],Ce=w.indexOf(re);Ce>=0&&(w[Ce]=null,T[Ce].disconnect(re))}for(let ae=0;ae<Y.added.length;ae++){const re=Y.added[ae];let Ce=w.indexOf(re);if(Ce===-1){for(let Ie=0;Ie<T.length;Ie++)if(Ie>=w.length){w.push(re),Ce=Ie;break}else if(w[Ie]===null){w[Ie]=re,Ce=Ie;break}if(Ce===-1)break}const ke=T[Ce];ke&&ke.connect(re)}}const O=new z,q=new z;function Z(Y,ae,re){O.setFromMatrixPosition(ae.matrixWorld),q.setFromMatrixPosition(re.matrixWorld);const Ce=O.distanceTo(q),ke=ae.projectionMatrix.elements,Ie=re.projectionMatrix.elements,mt=ke[14]/(ke[10]-1),Ye=ke[14]/(ke[10]+1),at=(ke[9]+1)/ke[5],ut=(ke[9]-1)/ke[5],ge=(ke[8]-1)/ke[0],Le=(Ie[8]+1)/Ie[0],Me=mt*ge,Ke=mt*Le,C=Ce/(-ge+Le),ze=C*-ge;if(ae.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ze),Y.translateZ(C),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),ke[10]===-1)Y.projectionMatrix.copy(ae.projectionMatrix),Y.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const je=mt+C,nt=Ye+C,ve=Me-ze,yt=Ke+(Ce-ze),A=at*Ye/nt*je,S=ut*Ye/nt*je;Y.projectionMatrix.makePerspective(ve,yt,A,S,je,nt),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ie(Y,ae){ae===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ae.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let ae=Y.near,re=Y.far;p.texture!==null&&(p.depthNear>0&&(ae=p.depthNear),p.depthFar>0&&(re=p.depthFar)),U.near=P.near=b.near=ae,U.far=P.far=b.far=re,($!==U.near||j!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),$=U.near,j=U.far),U.layers.mask=Y.layers.mask|6,b.layers.mask=U.layers.mask&-5,P.layers.mask=U.layers.mask&-3;const Ce=Y.parent,ke=U.cameras;ie(U,Ce);for(let Ie=0;Ie<ke.length;Ie++)ie(ke[Ie],Ce);ke.length===2?Z(U,b,P):U.projectionMatrix.copy(b.projectionMatrix),le(Y,U,Ce)};function le(Y,ae,re){re===null?Y.matrix.copy(ae.matrixWorld):(Y.matrix.copy(re.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ae.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ae.projectionMatrix),Y.projectionMatrixInverse.copy(ae.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Hf*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(d===null&&v===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=Y)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(U)},this.getCameraTexture=function(Y){return h[Y]};let Ue=null;function Fe(Y,ae){if(u=ae.getViewerPose(c||o),g=ae,u!==null){const re=u.views;v!==null&&(e.setRenderTargetFramebuffer(M,v.framebuffer),e.setRenderTarget(M));let Ce=!1;re.length!==U.cameras.length&&(U.cameras.length=0,Ce=!0);for(let Ye=0;Ye<re.length;Ye++){const at=re[Ye];let ut=null;if(v!==null)ut=v.getViewport(at);else{const Le=f.getViewSubImage(d,at);ut=Le.viewport,Ye===0&&(e.setRenderTargetTextures(M,Le.colorTexture,Le.depthStencilTexture),e.setRenderTarget(M))}let ge=L[Ye];ge===void 0&&(ge=new zn,ge.layers.enable(Ye),ge.viewport=new bt,L[Ye]=ge),ge.matrix.fromArray(at.transform.matrix),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.projectionMatrix.fromArray(at.projectionMatrix),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(),ge.viewport.set(ut.x,ut.y,ut.width,ut.height),Ye===0&&(U.matrix.copy(ge.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Ce===!0&&U.cameras.push(ge)}const ke=r.enabledFeatures;if(ke&&ke.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){f=i.getBinding();const Ye=f.getDepthInformation(re[0]);Ye&&Ye.isValid&&Ye.texture&&p.init(Ye,r.renderState)}if(ke&&ke.includes("camera-access")&&y){e.state.unbindTexture(),f=i.getBinding();for(let Ye=0;Ye<re.length;Ye++){const at=re[Ye].camera;if(at){let ut=h[at];ut||(ut=new cx,h[at]=ut);const ge=f.getCameraImage(at);ut.sourceTexture=ge}}}}for(let re=0;re<T.length;re++){const Ce=w[re],ke=T[re];Ce!==null&&ke!==void 0&&ke.update(Ce,ae,c||o)}Ue&&Ue(Y,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),g=null}const ce=new hx;ce.setAnimationLoop(Fe),this.setAnimationLoop=function(Y){Ue=Y},this.dispose=function(){}}}const mC=new Dt,yx=new He;yx.set(-1,0,0,0,1,0,0,0,1);function gC(t,e){function n(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,ux(t)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,m,_,M){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?s(p,h):h.isMeshLambertMaterial?(s(p,h),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(s(p,h),f(p,h)):h.isMeshPhongMaterial?(s(p,h),u(p,h),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(s(p,h),d(p,h),h.isMeshPhysicalMaterial&&v(p,h,M)):h.isMeshMatcapMaterial?(s(p,h),g(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),y(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(o(p,h),h.isLineDashedMaterial&&a(p,h)):h.isPointsMaterial?l(p,h,m,_):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,n(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,n(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,n(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===_n&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,n(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===_n&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,n(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,n(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const m=e.get(h),_=m.envMap,M=m.envMapRotation;_&&(p.envMap.value=_,p.envMapRotation.value.setFromMatrix4(mC.makeRotationFromEuler(M)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(yx),p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,p.aoMapTransform))}function o(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,n(h.map,p.mapTransform))}function a(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,m,_){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*m,p.scale.value=_*.5,h.map&&(p.map.value=h.map,n(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,n(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,n(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,n(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function f(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function d(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function v(p,h,m){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===_n&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=m.texture,p.transmissionSamplerSize.value.set(m.width,m.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,h){h.matcap&&(p.matcap.value=h.matcap)}function y(p,h){const m=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(m.matrixWorld),p.nearDistance.value=m.shadow.camera.near,p.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function vC(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,_){const M=_.program;i.uniformBlockBinding(m,M)}function c(m,_){let M=r[m.id];M===void 0&&(g(m),M=u(m),r[m.id]=M,m.addEventListener("dispose",p));const T=_.program;i.updateUBOMapping(m,T);const w=e.render.frame;s[m.id]!==w&&(d(m),s[m.id]=w)}function u(m){const _=f();m.__bindingPointIndex=_;const M=t.createBuffer(),T=m.__size,w=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,T,w),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,M),M}function f(){for(let m=0;m<a;m++)if(o.indexOf(m)===-1)return o.push(m),m;return rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(m){const _=r[m.id],M=m.uniforms,T=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let w=0,R=M.length;w<R;w++){const x=Array.isArray(M[w])?M[w]:[M[w]];for(let b=0,P=x.length;b<P;b++){const L=x[b];if(v(L,w,b,T)===!0){const U=L.__offset,$=Array.isArray(L.value)?L.value:[L.value];let j=0;for(let I=0;I<$.length;I++){const B=$[I],G=y(B);typeof B=="number"||typeof B=="boolean"?(L.__data[0]=B,t.bufferSubData(t.UNIFORM_BUFFER,U+j,L.__data)):B.isMatrix3?(L.__data[0]=B.elements[0],L.__data[1]=B.elements[1],L.__data[2]=B.elements[2],L.__data[3]=0,L.__data[4]=B.elements[3],L.__data[5]=B.elements[4],L.__data[6]=B.elements[5],L.__data[7]=0,L.__data[8]=B.elements[6],L.__data[9]=B.elements[7],L.__data[10]=B.elements[8],L.__data[11]=0):ArrayBuffer.isView(B)?L.__data.set(new B.constructor(B.buffer,B.byteOffset,L.__data.length)):(B.toArray(L.__data,j),j+=G.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,U,L.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function v(m,_,M,T){const w=m.value,R=_+"_"+M;if(T[R]===void 0)return typeof w=="number"||typeof w=="boolean"?T[R]=w:ArrayBuffer.isView(w)?T[R]=w.slice():T[R]=w.clone(),!0;{const x=T[R];if(typeof w=="number"||typeof w=="boolean"){if(x!==w)return T[R]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(x.equals(w)===!1)return x.copy(w),!0}}return!1}function g(m){const _=m.uniforms;let M=0;const T=16;for(let R=0,x=_.length;R<x;R++){const b=Array.isArray(_[R])?_[R]:[_[R]];for(let P=0,L=b.length;P<L;P++){const U=b[P],$=Array.isArray(U.value)?U.value:[U.value];for(let j=0,I=$.length;j<I;j++){const B=$[j],G=y(B),O=M%T,q=O%G.boundary,Z=O+q;M+=q,Z!==0&&T-Z<G.storage&&(M+=T-Z),U.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=M,M+=G.storage}}}const w=M%T;return w>0&&(M+=T-w),m.__size=M,m.__cache={},this}function y(m){const _={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(_.boundary=4,_.storage=4):m.isVector2?(_.boundary=8,_.storage=8):m.isVector3||m.isColor?(_.boundary=16,_.storage=12):m.isVector4?(_.boundary=16,_.storage=16):m.isMatrix3?(_.boundary=48,_.storage=48):m.isMatrix4?(_.boundary=64,_.storage=64):m.isTexture?Be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(m)?(_.boundary=16,_.storage=m.byteLength):Be("WebGLRenderer: Unsupported uniform value type.",m),_}function p(m){const _=m.target;_.removeEventListener("dispose",p);const M=o.indexOf(_.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function h(){for(const m in r)t.deleteBuffer(r[m]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}const _C=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ui=null;function xC(){return ui===null&&(ui=new sw(_C,16,16,Qr,Hi),ui.name="DFG_LUT",ui.minFilter=nn,ui.magFilter=nn,ui.wrapS=Ii,ui.wrapT=Ii,ui.generateMipmaps=!1,ui.needsUpdate=!0),ui}class yC{constructor(e={}){const{canvas:n=U1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:v=An}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const y=v,p=new Set([tp,ep,Qh]),h=new Set([An,Mi,oa,aa,Zh,Jh]),m=new Uint32Array(4),_=new Int32Array(4),M=new z;let T=null,w=null;const R=[],x=[];let b=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let L=!1,U=null;this._outputColorSpace=On;let $=0,j=0,I=null,B=-1,G=null;const O=new bt,q=new bt;let Z=null;const ie=new tt(0);let le=0,Ue=n.width,Fe=n.height,ce=1,Y=null,ae=null;const re=new bt(0,0,Ue,Fe),Ce=new bt(0,0,Ue,Fe);let ke=!1;const Ie=new ap;let mt=!1,Ye=!1;const at=new Dt,ut=new z,ge=new bt,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Me=!1;function Ke(){return I===null?ce:1}let C=i;function ze(E,F){return n.getContext(E,F)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${$h}`),n.addEventListener("webglcontextlost",ne,!1),n.addEventListener("webglcontextrestored",Pe,!1),n.addEventListener("webglcontextcreationerror",Ge,!1),C===null){const F="webgl2";if(C=ze(F,E),C===null)throw ze(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw rt("WebGLRenderer: "+E.message),E}let je,nt,ve,yt,A,S,k,Q,se,ue,me,K,ee,Se,Te,he,de,Ve,Xe,ot,D,fe,J;function Ee(){je=new xb(C),je.init(),D=new uC(C,je),nt=new db(C,je,e,D),ve=new lC(C,je),nt.reversedDepthBuffer&&d&&ve.buffers.depth.setReversed(!0),yt=new Mb(C),A=new $R,S=new cC(C,je,ve,A,nt,D,yt),k=new _b(P),Q=new Aw(C),fe=new cb(C,Q),se=new yb(C,Q,yt,fe),ue=new wb(C,se,Q,fe,yt),Ve=new Eb(C,nt,S),Te=new fb(A),me=new qR(P,k,je,nt,fe,Te),K=new gC(P,A),ee=new KR,Se=new nC(je),de=new lb(P,k,ve,ue,g,l),he=new aC(P,ue,nt),J=new vC(C,yt,nt,ve),Xe=new ub(C,je,yt),ot=new Sb(C,je,yt),yt.programs=me.programs,P.capabilities=nt,P.extensions=je,P.properties=A,P.renderLists=ee,P.shadowMap=he,P.state=ve,P.info=yt}Ee(),y!==An&&(b=new Ab(y,n.width,n.height,r,s));const pe=new pC(P,C);this.xr=pe,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const E=je.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=je.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(E){E!==void 0&&(ce=E,this.setSize(Ue,Fe,!1))},this.getSize=function(E){return E.set(Ue,Fe)},this.setSize=function(E,F,W=!0){if(pe.isPresenting){Be("WebGLRenderer: Can't change size while VR device is presenting.");return}Ue=E,Fe=F,n.width=Math.floor(E*ce),n.height=Math.floor(F*ce),W===!0&&(n.style.width=E+"px",n.style.height=F+"px"),b!==null&&b.setSize(n.width,n.height),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(Ue*ce,Fe*ce).floor()},this.setDrawingBufferSize=function(E,F,W){Ue=E,Fe=F,ce=W,n.width=Math.floor(E*W),n.height=Math.floor(F*W),this.setViewport(0,0,E,F)},this.setEffects=function(E){if(y===An){rt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let F=0;F<E.length;F++)if(E[F].isOutputPass===!0){Be("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(O)},this.getViewport=function(E){return E.copy(re)},this.setViewport=function(E,F,W,V){E.isVector4?re.set(E.x,E.y,E.z,E.w):re.set(E,F,W,V),ve.viewport(O.copy(re).multiplyScalar(ce).round())},this.getScissor=function(E){return E.copy(Ce)},this.setScissor=function(E,F,W,V){E.isVector4?Ce.set(E.x,E.y,E.z,E.w):Ce.set(E,F,W,V),ve.scissor(q.copy(Ce).multiplyScalar(ce).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(E){ve.setScissorTest(ke=E)},this.setOpaqueSort=function(E){Y=E},this.setTransparentSort=function(E){ae=E},this.getClearColor=function(E){return E.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor(...arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha(...arguments)},this.clear=function(E=!0,F=!0,W=!0){let V=0;if(E){let H=!1;if(I!==null){const ye=I.texture.format;H=p.has(ye)}if(H){const ye=I.texture.type,Ae=h.has(ye),xe=de.getClearColor(),Re=de.getClearAlpha(),Ne=xe.r,We=xe.g,$e=xe.b;Ae?(m[0]=Ne,m[1]=We,m[2]=$e,m[3]=Re,C.clearBufferuiv(C.COLOR,0,m)):(_[0]=Ne,_[1]=We,_[2]=$e,_[3]=Re,C.clearBufferiv(C.COLOR,0,_))}else V|=C.COLOR_BUFFER_BIT}F&&(V|=C.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(V|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&C.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),U=E},this.dispose=function(){n.removeEventListener("webglcontextlost",ne,!1),n.removeEventListener("webglcontextrestored",Pe,!1),n.removeEventListener("webglcontextcreationerror",Ge,!1),de.dispose(),ee.dispose(),Se.dispose(),A.dispose(),k.dispose(),ue.dispose(),fe.dispose(),J.dispose(),me.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",Sp),pe.removeEventListener("sessionend",Mp),Rr.stop()};function ne(E){E.preventDefault(),og("WebGLRenderer: Context Lost."),L=!0}function Pe(){og("WebGLRenderer: Context Restored."),L=!1;const E=yt.autoReset,F=he.enabled,W=he.autoUpdate,V=he.needsUpdate,H=he.type;Ee(),yt.autoReset=E,he.enabled=F,he.autoUpdate=W,he.needsUpdate=V,he.type=H}function Ge(E){rt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Rt(E){const F=E.target;F.removeEventListener("dispose",Rt),dt(F)}function dt(E){wi(E),A.remove(E)}function wi(E){const F=A.get(E).programs;F!==void 0&&(F.forEach(function(W){me.releaseProgram(W)}),E.isShaderMaterial&&me.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,W,V,H,ye){F===null&&(F=Le);const Ae=H.isMesh&&H.matrixWorld.determinant()<0,xe=Xx(E,F,W,V,H);ve.setMaterial(V,Ae);let Re=W.index,Ne=1;if(V.wireframe===!0){if(Re=se.getWireframeAttribute(W),Re===void 0)return;Ne=2}const We=W.drawRange,$e=W.attributes.position;let De=We.start*Ne,ft=(We.start+We.count)*Ne;ye!==null&&(De=Math.max(De,ye.start*Ne),ft=Math.min(ft,(ye.start+ye.count)*Ne)),Re!==null?(De=Math.max(De,0),ft=Math.min(ft,Re.count)):$e!=null&&(De=Math.max(De,0),ft=Math.min(ft,$e.count));const Ct=ft-De;if(Ct<0||Ct===1/0)return;fe.setup(H,V,xe,W,Re);let Tt,ht=Xe;if(Re!==null&&(Tt=Q.get(Re),ht=ot,ht.setIndex(Tt)),H.isMesh)V.wireframe===!0?(ve.setLineWidth(V.wireframeLinewidth*Ke()),ht.setMode(C.LINES)):ht.setMode(C.TRIANGLES);else if(H.isLine){let Yt=V.linewidth;Yt===void 0&&(Yt=1),ve.setLineWidth(Yt*Ke()),H.isLineSegments?ht.setMode(C.LINES):H.isLineLoop?ht.setMode(C.LINE_LOOP):ht.setMode(C.LINE_STRIP)}else H.isPoints?ht.setMode(C.POINTS):H.isSprite&&ht.setMode(C.TRIANGLES);if(H.isBatchedMesh)if(je.get("WEBGL_multi_draw"))ht.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Yt=H._multiDrawStarts,we=H._multiDrawCounts,Sn=H._multiDrawCount,it=Re?Q.get(Re).bytesPerElement:1,In=A.get(V).currentProgram.getUniforms();for(let ai=0;ai<Sn;ai++)In.setValue(C,"_gl_DrawID",ai),ht.render(Yt[ai]/it,we[ai])}else if(H.isInstancedMesh)ht.renderInstances(De,Ct,H.count);else if(W.isInstancedBufferGeometry){const Yt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,we=Math.min(W.instanceCount,Yt);ht.renderInstances(De,Ct,we)}else ht.render(De,Ct)};function oi(E,F,W){E.transparent===!0&&E.side===pi&&E.forceSinglePass===!1?(E.side=_n,E.needsUpdate=!0,Ta(E,F,W),E.side=Sr,E.needsUpdate=!0,Ta(E,F,W),E.side=pi):Ta(E,F,W)}this.compile=function(E,F,W=null){W===null&&(W=E),w=Se.get(W),w.init(F),x.push(w),W.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),E!==W&&E.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),w.setupLights();const V=new Set;return E.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ye=H.material;if(ye)if(Array.isArray(ye))for(let Ae=0;Ae<ye.length;Ae++){const xe=ye[Ae];oi(xe,W,H),V.add(xe)}else oi(ye,W,H),V.add(ye)}),w=x.pop(),V},this.compileAsync=function(E,F,W=null){const V=this.compile(E,F,W);return new Promise(H=>{function ye(){if(V.forEach(function(Ae){A.get(Ae).currentProgram.isReady()&&V.delete(Ae)}),V.size===0){H(E);return}setTimeout(ye,10)}je.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let Vc=null;function Wx(E){Vc&&Vc(E)}function Sp(){Rr.stop()}function Mp(){Rr.start()}const Rr=new hx;Rr.setAnimationLoop(Wx),typeof self<"u"&&Rr.setContext(self),this.setAnimationLoop=function(E){Vc=E,pe.setAnimationLoop(E),E===null?Rr.stop():Rr.start()},pe.addEventListener("sessionstart",Sp),pe.addEventListener("sessionend",Mp),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;U!==null&&U.renderStart(E,F);const W=pe.enabled===!0&&pe.isPresenting===!0,V=b!==null&&(I===null||W)&&b.begin(P,I);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(F),F=pe.getCamera()),E.isScene===!0&&E.onBeforeRender(P,E,F,I),w=Se.get(E,x.length),w.init(F),w.state.textureUnits=S.getTextureUnits(),x.push(w),at.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ie.setFromProjectionMatrix(at,gi,F.reversedDepth),Ye=this.localClippingEnabled,mt=Te.init(this.clippingPlanes,Ye),T=ee.get(E,R.length),T.init(),R.push(T),pe.enabled===!0&&pe.isPresenting===!0){const Ae=P.xr.getDepthSensingMesh();Ae!==null&&Hc(Ae,F,-1/0,P.sortObjects)}Hc(E,F,0,P.sortObjects),T.finish(),P.sortObjects===!0&&T.sort(Y,ae),Me=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,Me&&de.addToRenderList(T,E),this.info.render.frame++,mt===!0&&Te.beginShadows();const H=w.state.shadowsArray;if(he.render(H,E,F),mt===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset(),(V&&b.hasRenderPass())===!1){const Ae=T.opaque,xe=T.transmissive;if(w.setupLights(),F.isArrayCamera){const Re=F.cameras;if(xe.length>0)for(let Ne=0,We=Re.length;Ne<We;Ne++){const $e=Re[Ne];wp(Ae,xe,E,$e)}Me&&de.render(E);for(let Ne=0,We=Re.length;Ne<We;Ne++){const $e=Re[Ne];Ep(T,E,$e,$e.viewport)}}else xe.length>0&&wp(Ae,xe,E,F),Me&&de.render(E),Ep(T,E,F)}I!==null&&j===0&&(S.updateMultisampleRenderTarget(I),S.updateRenderTargetMipmap(I)),V&&b.end(P),E.isScene===!0&&E.onAfterRender(P,E,F),fe.resetDefaultState(),B=-1,G=null,x.pop(),x.length>0?(w=x[x.length-1],S.setTextureUnits(w.state.textureUnits),mt===!0&&Te.setGlobalState(P.clippingPlanes,w.state.camera)):w=null,R.pop(),R.length>0?T=R[R.length-1]:T=null,U!==null&&U.renderEnd()};function Hc(E,F,W,V){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLightProbeGrid)w.pushLightProbeGrid(E);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Ie.intersectsSprite(E)){V&&ge.setFromMatrixPosition(E.matrixWorld).applyMatrix4(at);const Ae=ue.update(E),xe=E.material;xe.visible&&T.push(E,Ae,xe,W,ge.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Ie.intersectsObject(E))){const Ae=ue.update(E),xe=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ge.copy(E.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),ge.copy(Ae.boundingSphere.center)),ge.applyMatrix4(E.matrixWorld).applyMatrix4(at)),Array.isArray(xe)){const Re=Ae.groups;for(let Ne=0,We=Re.length;Ne<We;Ne++){const $e=Re[Ne],De=xe[$e.materialIndex];De&&De.visible&&T.push(E,Ae,De,W,ge.z,$e)}}else xe.visible&&T.push(E,Ae,xe,W,ge.z,null)}}const ye=E.children;for(let Ae=0,xe=ye.length;Ae<xe;Ae++)Hc(ye[Ae],F,W,V)}function Ep(E,F,W,V){const{opaque:H,transmissive:ye,transparent:Ae}=E;w.setupLightsView(W),mt===!0&&Te.setGlobalState(P.clippingPlanes,W),V&&ve.viewport(O.copy(V)),H.length>0&&wa(H,F,W),ye.length>0&&wa(ye,F,W),Ae.length>0&&wa(Ae,F,W),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function wp(E,F,W,V){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[V.id]===void 0){const De=je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[V.id]=new yi(1,1,{generateMipmaps:!0,type:De?Hi:An,minFilter:Vr,samples:Math.max(4,nt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace})}const ye=w.state.transmissionRenderTarget[V.id],Ae=V.viewport||O;ye.setSize(Ae.z*P.transmissionResolutionScale,Ae.w*P.transmissionResolutionScale);const xe=P.getRenderTarget(),Re=P.getActiveCubeFace(),Ne=P.getActiveMipmapLevel();P.setRenderTarget(ye),P.getClearColor(ie),le=P.getClearAlpha(),le<1&&P.setClearColor(16777215,.5),P.clear(),Me&&de.render(W);const We=P.toneMapping;P.toneMapping=xi;const $e=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),w.setupLightsView(V),mt===!0&&Te.setGlobalState(P.clippingPlanes,V),wa(E,W,V),S.updateMultisampleRenderTarget(ye),S.updateRenderTargetMipmap(ye),je.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let ft=0,Ct=F.length;ft<Ct;ft++){const Tt=F[ft],{object:ht,geometry:Yt,material:we,group:Sn}=Tt;if(we.side===pi&&ht.layers.test(V.layers)){const it=we.side;we.side=_n,we.needsUpdate=!0,Tp(ht,W,V,Yt,we,Sn),we.side=it,we.needsUpdate=!0,De=!0}}De===!0&&(S.updateMultisampleRenderTarget(ye),S.updateRenderTargetMipmap(ye))}P.setRenderTarget(xe,Re,Ne),P.setClearColor(ie,le),$e!==void 0&&(V.viewport=$e),P.toneMapping=We}function wa(E,F,W){const V=F.isScene===!0?F.overrideMaterial:null;for(let H=0,ye=E.length;H<ye;H++){const Ae=E[H],{object:xe,geometry:Re,group:Ne}=Ae;let We=Ae.material;We.allowOverride===!0&&V!==null&&(We=V),xe.layers.test(W.layers)&&Tp(xe,F,W,Re,We,Ne)}}function Tp(E,F,W,V,H,ye){E.onBeforeRender(P,F,W,V,H,ye),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),H.onBeforeRender(P,F,W,V,E,ye),H.transparent===!0&&H.side===pi&&H.forceSinglePass===!1?(H.side=_n,H.needsUpdate=!0,P.renderBufferDirect(W,F,V,H,E,ye),H.side=Sr,H.needsUpdate=!0,P.renderBufferDirect(W,F,V,H,E,ye),H.side=pi):P.renderBufferDirect(W,F,V,H,E,ye),E.onAfterRender(P,F,W,V,H,ye)}function Ta(E,F,W){F.isScene!==!0&&(F=Le);const V=A.get(E),H=w.state.lights,ye=w.state.shadowsArray,Ae=H.state.version,xe=me.getParameters(E,H.state,ye,F,W,w.state.lightProbeGridArray),Re=me.getProgramCacheKey(xe);let Ne=V.programs;V.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?F.environment:null,V.fog=F.fog;const We=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;V.envMap=k.get(E.envMap||V.environment,We),V.envMapRotation=V.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Ne===void 0&&(E.addEventListener("dispose",Rt),Ne=new Map,V.programs=Ne);let $e=Ne.get(Re);if($e!==void 0){if(V.currentProgram===$e&&V.lightsStateVersion===Ae)return bp(E,xe),$e}else xe.uniforms=me.getUniforms(E),U!==null&&E.isNodeMaterial&&U.build(E,W,xe),E.onBeforeCompile(xe,P),$e=me.acquireProgram(xe,Re),Ne.set(Re,$e),V.uniforms=xe.uniforms;const De=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(De.clippingPlanes=Te.uniform),bp(E,xe),V.needsLights=$x(E),V.lightsStateVersion=Ae,V.needsLights&&(De.ambientLightColor.value=H.state.ambient,De.lightProbe.value=H.state.probe,De.directionalLights.value=H.state.directional,De.directionalLightShadows.value=H.state.directionalShadow,De.spotLights.value=H.state.spot,De.spotLightShadows.value=H.state.spotShadow,De.rectAreaLights.value=H.state.rectArea,De.ltc_1.value=H.state.rectAreaLTC1,De.ltc_2.value=H.state.rectAreaLTC2,De.pointLights.value=H.state.point,De.pointLightShadows.value=H.state.pointShadow,De.hemisphereLights.value=H.state.hemi,De.directionalShadowMatrix.value=H.state.directionalShadowMatrix,De.spotLightMatrix.value=H.state.spotLightMatrix,De.spotLightMap.value=H.state.spotLightMap,De.pointShadowMatrix.value=H.state.pointShadowMatrix),V.lightProbeGrid=w.state.lightProbeGridArray.length>0,V.currentProgram=$e,V.uniformsList=null,$e}function Ap(E){if(E.uniformsList===null){const F=E.currentProgram.getUniforms();E.uniformsList=Nl.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function bp(E,F){const W=A.get(E);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function jx(E,F){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;M.setFromMatrixPosition(F.matrixWorld);for(let W=0,V=E.length;W<V;W++){const H=E[W];if(H.texture!==null&&H.boundingBox.containsPoint(M))return H}return null}function Xx(E,F,W,V,H){F.isScene!==!0&&(F=Le),S.resetTextureUnits();const ye=F.fog,Ae=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?F.environment:null,xe=I===null?P.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Qe.workingColorSpace,Re=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Ne=k.get(V.envMap||Ae,Re),We=V.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,$e=!!W.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),De=!!W.morphAttributes.position,ft=!!W.morphAttributes.normal,Ct=!!W.morphAttributes.color;let Tt=xi;V.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Tt=P.toneMapping);const ht=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Yt=ht!==void 0?ht.length:0,we=A.get(V),Sn=w.state.lights;if(mt===!0&&(Ye===!0||E!==G)){const gt=E===G&&V.id===B;Te.setState(V,E,gt)}let it=!1;V.version===we.__version?(we.needsLights&&we.lightsStateVersion!==Sn.state.version||we.outputColorSpace!==xe||H.isBatchedMesh&&we.batching===!1||!H.isBatchedMesh&&we.batching===!0||H.isBatchedMesh&&we.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&we.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&we.instancing===!1||!H.isInstancedMesh&&we.instancing===!0||H.isSkinnedMesh&&we.skinning===!1||!H.isSkinnedMesh&&we.skinning===!0||H.isInstancedMesh&&we.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&we.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&we.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&we.instancingMorph===!1&&H.morphTexture!==null||we.envMap!==Ne||V.fog===!0&&we.fog!==ye||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==Te.numPlanes||we.numIntersection!==Te.numIntersection)||we.vertexAlphas!==We||we.vertexTangents!==$e||we.morphTargets!==De||we.morphNormals!==ft||we.morphColors!==Ct||we.toneMapping!==Tt||we.morphTargetsCount!==Yt||!!we.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(it=!0):(it=!0,we.__version=V.version);let In=we.currentProgram;it===!0&&(In=Ta(V,F,H),U&&V.isNodeMaterial&&U.onUpdateProgram(V,In,we));let ai=!1,ji=!1,rs=!1;const pt=In.getUniforms(),Pt=we.uniforms;if(ve.useProgram(In.program)&&(ai=!0,ji=!0,rs=!0),V.id!==B&&(B=V.id,ji=!0),we.needsLights){const gt=jx(w.state.lightProbeGridArray,H);we.lightProbeGrid!==gt&&(we.lightProbeGrid=gt,ji=!0)}if(ai||G!==E){ve.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),pt.setValue(C,"projectionMatrix",E.projectionMatrix),pt.setValue(C,"viewMatrix",E.matrixWorldInverse);const qi=pt.map.cameraPosition;qi!==void 0&&qi.setValue(C,ut.setFromMatrixPosition(E.matrixWorld)),nt.logarithmicDepthBuffer&&pt.setValue(C,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&pt.setValue(C,"isOrthographic",E.isOrthographicCamera===!0),G!==E&&(G=E,ji=!0,rs=!0)}if(we.needsLights&&(Sn.state.directionalShadowMap.length>0&&pt.setValue(C,"directionalShadowMap",Sn.state.directionalShadowMap,S),Sn.state.spotShadowMap.length>0&&pt.setValue(C,"spotShadowMap",Sn.state.spotShadowMap,S),Sn.state.pointShadowMap.length>0&&pt.setValue(C,"pointShadowMap",Sn.state.pointShadowMap,S)),H.isSkinnedMesh){pt.setOptional(C,H,"bindMatrix"),pt.setOptional(C,H,"bindMatrixInverse");const gt=H.skeleton;gt&&(gt.boneTexture===null&&gt.computeBoneTexture(),pt.setValue(C,"boneTexture",gt.boneTexture,S))}H.isBatchedMesh&&(pt.setOptional(C,H,"batchingTexture"),pt.setValue(C,"batchingTexture",H._matricesTexture,S),pt.setOptional(C,H,"batchingIdTexture"),pt.setValue(C,"batchingIdTexture",H._indirectTexture,S),pt.setOptional(C,H,"batchingColorTexture"),H._colorsTexture!==null&&pt.setValue(C,"batchingColorTexture",H._colorsTexture,S));const Xi=W.morphAttributes;if((Xi.position!==void 0||Xi.normal!==void 0||Xi.color!==void 0)&&Ve.update(H,W,In),(ji||we.receiveShadow!==H.receiveShadow)&&(we.receiveShadow=H.receiveShadow,pt.setValue(C,"receiveShadow",H.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&F.environment!==null&&(Pt.envMapIntensity.value=F.environmentIntensity),Pt.dfgLUT!==void 0&&(Pt.dfgLUT.value=xC()),ji){if(pt.setValue(C,"toneMappingExposure",P.toneMappingExposure),we.needsLights&&qx(Pt,rs),ye&&V.fog===!0&&K.refreshFogUniforms(Pt,ye),K.refreshMaterialUniforms(Pt,V,ce,Fe,w.state.transmissionRenderTarget[E.id]),we.needsLights&&we.lightProbeGrid){const gt=we.lightProbeGrid;Pt.probesSH.value=gt.texture,Pt.probesMin.value.copy(gt.boundingBox.min),Pt.probesMax.value.copy(gt.boundingBox.max),Pt.probesResolution.value.copy(gt.resolution)}Nl.upload(C,Ap(we),Pt,S)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Nl.upload(C,Ap(we),Pt,S),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&pt.setValue(C,"center",H.center),pt.setValue(C,"modelViewMatrix",H.modelViewMatrix),pt.setValue(C,"normalMatrix",H.normalMatrix),pt.setValue(C,"modelMatrix",H.matrixWorld),V.uniformsGroups!==void 0){const gt=V.uniformsGroups;for(let qi=0,ss=gt.length;qi<ss;qi++){const Rp=gt[qi];J.update(Rp,In),J.bind(Rp,In)}}return In}function qx(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function $x(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(E,F,W){const V=A.get(E);V.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),A.get(E.texture).__webglTexture=F,A.get(E.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:W,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,F){const W=A.get(E);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0};const Yx=C.createFramebuffer();this.setRenderTarget=function(E,F=0,W=0){I=E,$=F,j=W;let V=null,H=!1,ye=!1;if(E){const xe=A.get(E);if(xe.__useDefaultFramebuffer!==void 0){ve.bindFramebuffer(C.FRAMEBUFFER,xe.__webglFramebuffer),O.copy(E.viewport),q.copy(E.scissor),Z=E.scissorTest,ve.viewport(O),ve.scissor(q),ve.setScissorTest(Z),B=-1;return}else if(xe.__webglFramebuffer===void 0)S.setupRenderTarget(E);else if(xe.__hasExternalTextures)S.rebindTextures(E,A.get(E.texture).__webglTexture,A.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const We=E.depthTexture;if(xe.__boundDepthTexture!==We){if(We!==null&&A.has(We)&&(E.width!==We.image.width||E.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(E)}}const Re=E.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(ye=!0);const Ne=A.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ne[F])?V=Ne[F][W]:V=Ne[F],H=!0):E.samples>0&&S.useMultisampledRTT(E)===!1?V=A.get(E).__webglMultisampledFramebuffer:Array.isArray(Ne)?V=Ne[W]:V=Ne,O.copy(E.viewport),q.copy(E.scissor),Z=E.scissorTest}else O.copy(re).multiplyScalar(ce).floor(),q.copy(Ce).multiplyScalar(ce).floor(),Z=ke;if(W!==0&&(V=Yx),ve.bindFramebuffer(C.FRAMEBUFFER,V)&&ve.drawBuffers(E,V),ve.viewport(O),ve.scissor(q),ve.setScissorTest(Z),H){const xe=A.get(E.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+F,xe.__webglTexture,W)}else if(ye){const xe=F;for(let Re=0;Re<E.textures.length;Re++){const Ne=A.get(E.textures[Re]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Re,Ne.__webglTexture,W,xe)}}else if(E!==null&&W!==0){const xe=A.get(E.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,xe.__webglTexture,W)}B=-1},this.readRenderTargetPixels=function(E,F,W,V,H,ye,Ae,xe=0){if(!(E&&E.isWebGLRenderTarget)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=A.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ae!==void 0&&(Re=Re[Ae]),Re){ve.bindFramebuffer(C.FRAMEBUFFER,Re);try{const Ne=E.textures[xe],We=Ne.format,$e=Ne.type;if(E.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+xe),!nt.textureFormatReadable(We)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable($e)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-V&&W>=0&&W<=E.height-H&&C.readPixels(F,W,V,H,D.convert(We),D.convert($e),ye)}finally{const Ne=I!==null?A.get(I).__webglFramebuffer:null;ve.bindFramebuffer(C.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(E,F,W,V,H,ye,Ae,xe=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=A.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ae!==void 0&&(Re=Re[Ae]),Re)if(F>=0&&F<=E.width-V&&W>=0&&W<=E.height-H){ve.bindFramebuffer(C.FRAMEBUFFER,Re);const Ne=E.textures[xe],We=Ne.format,$e=Ne.type;if(E.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+xe),!nt.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const De=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,De),C.bufferData(C.PIXEL_PACK_BUFFER,ye.byteLength,C.STREAM_READ),C.readPixels(F,W,V,H,D.convert(We),D.convert($e),0);const ft=I!==null?A.get(I).__webglFramebuffer:null;ve.bindFramebuffer(C.FRAMEBUFFER,ft);const Ct=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await F1(C,Ct,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,De),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,ye),C.deleteBuffer(De),C.deleteSync(Ct),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,F=null,W=0){const V=Math.pow(2,-W),H=Math.floor(E.image.width*V),ye=Math.floor(E.image.height*V),Ae=F!==null?F.x:0,xe=F!==null?F.y:0;S.setTexture2D(E,0),C.copyTexSubImage2D(C.TEXTURE_2D,W,0,0,Ae,xe,H,ye),ve.unbindTexture()};const Kx=C.createFramebuffer(),Zx=C.createFramebuffer();this.copyTextureToTexture=function(E,F,W=null,V=null,H=0,ye=0){let Ae,xe,Re,Ne,We,$e,De,ft,Ct;const Tt=E.isCompressedTexture?E.mipmaps[ye]:E.image;if(W!==null)Ae=W.max.x-W.min.x,xe=W.max.y-W.min.y,Re=W.isBox3?W.max.z-W.min.z:1,Ne=W.min.x,We=W.min.y,$e=W.isBox3?W.min.z:0;else{const Pt=Math.pow(2,-H);Ae=Math.floor(Tt.width*Pt),xe=Math.floor(Tt.height*Pt),E.isDataArrayTexture?Re=Tt.depth:E.isData3DTexture?Re=Math.floor(Tt.depth*Pt):Re=1,Ne=0,We=0,$e=0}V!==null?(De=V.x,ft=V.y,Ct=V.z):(De=0,ft=0,Ct=0);const ht=D.convert(F.format),Yt=D.convert(F.type);let we;F.isData3DTexture?(S.setTexture3D(F,0),we=C.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(S.setTexture2DArray(F,0),we=C.TEXTURE_2D_ARRAY):(S.setTexture2D(F,0),we=C.TEXTURE_2D),ve.activeTexture(C.TEXTURE0),ve.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,F.flipY),ve.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),ve.pixelStorei(C.UNPACK_ALIGNMENT,F.unpackAlignment);const Sn=ve.getParameter(C.UNPACK_ROW_LENGTH),it=ve.getParameter(C.UNPACK_IMAGE_HEIGHT),In=ve.getParameter(C.UNPACK_SKIP_PIXELS),ai=ve.getParameter(C.UNPACK_SKIP_ROWS),ji=ve.getParameter(C.UNPACK_SKIP_IMAGES);ve.pixelStorei(C.UNPACK_ROW_LENGTH,Tt.width),ve.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Tt.height),ve.pixelStorei(C.UNPACK_SKIP_PIXELS,Ne),ve.pixelStorei(C.UNPACK_SKIP_ROWS,We),ve.pixelStorei(C.UNPACK_SKIP_IMAGES,$e);const rs=E.isDataArrayTexture||E.isData3DTexture,pt=F.isDataArrayTexture||F.isData3DTexture;if(E.isDepthTexture){const Pt=A.get(E),Xi=A.get(F),gt=A.get(Pt.__renderTarget),qi=A.get(Xi.__renderTarget);ve.bindFramebuffer(C.READ_FRAMEBUFFER,gt.__webglFramebuffer),ve.bindFramebuffer(C.DRAW_FRAMEBUFFER,qi.__webglFramebuffer);for(let ss=0;ss<Re;ss++)rs&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,A.get(E).__webglTexture,H,$e+ss),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,A.get(F).__webglTexture,ye,Ct+ss)),C.blitFramebuffer(Ne,We,Ae,xe,De,ft,Ae,xe,C.DEPTH_BUFFER_BIT,C.NEAREST);ve.bindFramebuffer(C.READ_FRAMEBUFFER,null),ve.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(H!==0||E.isRenderTargetTexture||A.has(E)){const Pt=A.get(E),Xi=A.get(F);ve.bindFramebuffer(C.READ_FRAMEBUFFER,Kx),ve.bindFramebuffer(C.DRAW_FRAMEBUFFER,Zx);for(let gt=0;gt<Re;gt++)rs?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Pt.__webglTexture,H,$e+gt):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Pt.__webglTexture,H),pt?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Xi.__webglTexture,ye,Ct+gt):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Xi.__webglTexture,ye),H!==0?C.blitFramebuffer(Ne,We,Ae,xe,De,ft,Ae,xe,C.COLOR_BUFFER_BIT,C.NEAREST):pt?C.copyTexSubImage3D(we,ye,De,ft,Ct+gt,Ne,We,Ae,xe):C.copyTexSubImage2D(we,ye,De,ft,Ne,We,Ae,xe);ve.bindFramebuffer(C.READ_FRAMEBUFFER,null),ve.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else pt?E.isDataTexture||E.isData3DTexture?C.texSubImage3D(we,ye,De,ft,Ct,Ae,xe,Re,ht,Yt,Tt.data):F.isCompressedArrayTexture?C.compressedTexSubImage3D(we,ye,De,ft,Ct,Ae,xe,Re,ht,Tt.data):C.texSubImage3D(we,ye,De,ft,Ct,Ae,xe,Re,ht,Yt,Tt):E.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,ye,De,ft,Ae,xe,ht,Yt,Tt.data):E.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,ye,De,ft,Tt.width,Tt.height,ht,Tt.data):C.texSubImage2D(C.TEXTURE_2D,ye,De,ft,Ae,xe,ht,Yt,Tt);ve.pixelStorei(C.UNPACK_ROW_LENGTH,Sn),ve.pixelStorei(C.UNPACK_IMAGE_HEIGHT,it),ve.pixelStorei(C.UNPACK_SKIP_PIXELS,In),ve.pixelStorei(C.UNPACK_SKIP_ROWS,ai),ve.pixelStorei(C.UNPACK_SKIP_IMAGES,ji),ye===0&&F.generateMipmaps&&C.generateMipmap(we),ve.unbindTexture()},this.initRenderTarget=function(E){A.get(E).__webglFramebuffer===void 0&&S.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?S.setTextureCube(E,0):E.isData3DTexture?S.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?S.setTexture2DArray(E,0):S.setTexture2D(E,0),ve.unbindTexture()},this.resetState=function(){$=0,j=0,I=null,ve.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),n.unpackColorSpace=Qe._getUnpackColorSpace()}}function Sx(){const[t,e]=te.useState(localStorage.getItem("theme")||"dark");te.useEffect(()=>{document.documentElement.setAttribute("data-theme",t),localStorage.setItem("theme",t)},[t]),te.useEffect(()=>{const i=document.documentElement.getAttribute("data-theme")||"dark";e(i);const r=new MutationObserver(s=>{s.forEach(o=>{if(o.attributeName==="data-theme"){const a=document.documentElement.getAttribute("data-theme")||"dark";e(l=>l!==a?a:l)}})});return r.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),()=>{r.disconnect()}},[]);const n=i=>{const r=t==="light"?"dark":"light";if(!document.startViewTransition){e(r);return}const s=(i==null?void 0:i.clientX)||window.innerWidth/2,o=(i==null?void 0:i.clientY)||window.innerHeight/2,a=Math.hypot(Math.max(s,window.innerWidth-s),Math.max(o,window.innerHeight-o));document.documentElement.classList.add("theme-transition");const l=document.startViewTransition(()=>{e(r),document.documentElement.setAttribute("data-theme",r),localStorage.setItem("theme",r)});l.ready.then(()=>{const c=[`circle(0px at ${s}px ${o}px)`,`circle(${a}px at ${s}px ${o}px)`];document.documentElement.animate({clipPath:c},{duration:500,easing:"cubic-bezier(0.4, 0, 0.2, 1)",pseudoElement:"::view-transition-new(root)"})}),l.finished.then(()=>{document.documentElement.classList.remove("theme-transition")})};return N.jsx("button",{onClick:i=>n(i),className:"btn-icon theme-toggle",title:`Switch to ${t==="light"?"dark":"light"} mode`,style:{position:"relative",zIndex:10002},children:t==="light"?N.jsx(KE,{size:18}):N.jsx(e1,{size:18})})}function Mx(t,e){return function(){return t.apply(e,arguments)}}const{toString:SC}=Object.prototype,{getPrototypeOf:dp}=Object,{iterator:Fc,toStringTag:Ex}=Symbol,Oc=(t=>e=>{const n=SC.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),si=t=>(t=t.toLowerCase(),e=>Oc(e)===t),Bc=t=>e=>typeof e===t,{isArray:ao}=Array,Qs=Bc("undefined");function xa(t){return t!==null&&!Qs(t)&&t.constructor!==null&&!Qs(t.constructor)&&xn(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const wx=si("ArrayBuffer");function MC(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&wx(t.buffer),e}const EC=Bc("string"),xn=Bc("function"),Tx=Bc("number"),ya=t=>t!==null&&typeof t=="object",wC=t=>t===!0||t===!1,Dl=t=>{if(Oc(t)!=="object")return!1;const e=dp(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Ex in t)&&!(Fc in t)},TC=t=>{if(!ya(t)||xa(t))return!1;try{return Object.keys(t).length===0&&Object.getPrototypeOf(t)===Object.prototype}catch{return!1}},AC=si("Date"),bC=si("File"),RC=t=>!!(t&&typeof t.uri<"u"),CC=t=>t&&typeof t.getParts<"u",PC=si("Blob"),LC=si("FileList"),NC=t=>ya(t)&&xn(t.pipe);function DC(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const Zg=DC(),Jg=typeof Zg.FormData<"u"?Zg.FormData:void 0,IC=t=>{let e;return t&&(Jg&&t instanceof Jg||xn(t.append)&&((e=Oc(t))==="formdata"||e==="object"&&xn(t.toString)&&t.toString()==="[object FormData]"))},UC=si("URLSearchParams"),[FC,OC,BC,kC]=["ReadableStream","Request","Response","Headers"].map(si),zC=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Sa(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let i,r;if(typeof t!="object"&&(t=[t]),ao(t))for(i=0,r=t.length;i<r;i++)e.call(null,t[i],i,t);else{if(xa(t))return;const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let a;for(i=0;i<o;i++)a=s[i],e.call(null,t[a],a,t)}}function Ax(t,e){if(xa(t))return null;e=e.toLowerCase();const n=Object.keys(t);let i=n.length,r;for(;i-- >0;)if(r=n[i],e===r.toLowerCase())return r;return null}const Gr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,bx=t=>!Qs(t)&&t!==Gr;function jf(){const{caseless:t,skipUndefined:e}=bx(this)&&this||{},n={},i=(r,s)=>{if(s==="__proto__"||s==="constructor"||s==="prototype")return;const o=t&&Ax(n,s)||s;Dl(n[o])&&Dl(r)?n[o]=jf(n[o],r):Dl(r)?n[o]=jf({},r):ao(r)?n[o]=r.slice():(!e||!Qs(r))&&(n[o]=r)};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&Sa(arguments[r],i);return n}const VC=(t,e,n,{allOwnKeys:i}={})=>(Sa(e,(r,s)=>{n&&xn(r)?Object.defineProperty(t,s,{value:Mx(r,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(t,s,{value:r,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:i}),t),HC=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),GC=(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),Object.defineProperty(t.prototype,"constructor",{value:t,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},WC=(t,e,n,i)=>{let r,s,o;const a={};if(e=e||{},t==null)return e;do{for(r=Object.getOwnPropertyNames(t),s=r.length;s-- >0;)o=r[s],(!i||i(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&dp(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},jC=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return i!==-1&&i===n},XC=t=>{if(!t)return null;if(ao(t))return t;let e=t.length;if(!Tx(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},qC=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&dp(Uint8Array)),$C=(t,e)=>{const i=(t&&t[Fc]).call(t);let r;for(;(r=i.next())&&!r.done;){const s=r.value;e.call(t,s[0],s[1])}},YC=(t,e)=>{let n;const i=[];for(;(n=t.exec(e))!==null;)i.push(n);return i},KC=si("HTMLFormElement"),ZC=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,r){return i.toUpperCase()+r}),Qg=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),JC=si("RegExp"),Rx=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};Sa(n,(r,s)=>{let o;(o=e(r,s,t))!==!1&&(i[s]=o||r)}),Object.defineProperties(t,i)},QC=t=>{Rx(t,(e,n)=>{if(xn(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const i=t[n];if(xn(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},eP=(t,e)=>{const n={},i=r=>{r.forEach(s=>{n[s]=!0})};return ao(t)?i(t):i(String(t).split(e)),n},tP=()=>{},nP=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function iP(t){return!!(t&&xn(t.append)&&t[Ex]==="FormData"&&t[Fc])}const rP=t=>{const e=new Array(10),n=(i,r)=>{if(ya(i)){if(e.indexOf(i)>=0)return;if(xa(i))return i;if(!("toJSON"in i)){e[r]=i;const s=ao(i)?[]:{};return Sa(i,(o,a)=>{const l=n(o,r+1);!Qs(l)&&(s[a]=l)}),e[r]=void 0,s}}return i};return n(t,0)},sP=si("AsyncFunction"),oP=t=>t&&(ya(t)||xn(t))&&xn(t.then)&&xn(t.catch),Cx=((t,e)=>t?setImmediate:e?((n,i)=>(Gr.addEventListener("message",({source:r,data:s})=>{r===Gr&&s===n&&i.length&&i.shift()()},!1),r=>{i.push(r),Gr.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",xn(Gr.postMessage)),aP=typeof queueMicrotask<"u"?queueMicrotask.bind(Gr):typeof process<"u"&&process.nextTick||Cx,lP=t=>t!=null&&xn(t[Fc]),X={isArray:ao,isArrayBuffer:wx,isBuffer:xa,isFormData:IC,isArrayBufferView:MC,isString:EC,isNumber:Tx,isBoolean:wC,isObject:ya,isPlainObject:Dl,isEmptyObject:TC,isReadableStream:FC,isRequest:OC,isResponse:BC,isHeaders:kC,isUndefined:Qs,isDate:AC,isFile:bC,isReactNativeBlob:RC,isReactNative:CC,isBlob:PC,isRegExp:JC,isFunction:xn,isStream:NC,isURLSearchParams:UC,isTypedArray:qC,isFileList:LC,forEach:Sa,merge:jf,extend:VC,trim:zC,stripBOM:HC,inherits:GC,toFlatObject:WC,kindOf:Oc,kindOfTest:si,endsWith:jC,toArray:XC,forEachEntry:$C,matchAll:YC,isHTMLForm:KC,hasOwnProperty:Qg,hasOwnProp:Qg,reduceDescriptors:Rx,freezeMethods:QC,toObjectSet:eP,toCamelCase:ZC,noop:tP,toFiniteNumber:nP,findKey:Ax,global:Gr,isContextDefined:bx,isSpecCompliantForm:iP,toJSONObject:rP,isAsyncFn:sP,isThenable:oP,setImmediate:Cx,asap:aP,isIterable:lP};let Oe=class Px extends Error{static from(e,n,i,r,s,o){const a=new Px(e.message,n||e.code,i,r,s);return a.cause=e,a.name=e.name,e.status!=null&&a.status==null&&(a.status=e.status),o&&Object.assign(a,o),a}constructor(e,n,i,r,s){super(e),Object.defineProperty(this,"message",{value:e,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),i&&(this.config=i),r&&(this.request=r),s&&(this.response=s,this.status=s.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:X.toJSONObject(this.config),code:this.code,status:this.status}}};Oe.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";Oe.ERR_BAD_OPTION="ERR_BAD_OPTION";Oe.ECONNABORTED="ECONNABORTED";Oe.ETIMEDOUT="ETIMEDOUT";Oe.ERR_NETWORK="ERR_NETWORK";Oe.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";Oe.ERR_DEPRECATED="ERR_DEPRECATED";Oe.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";Oe.ERR_BAD_REQUEST="ERR_BAD_REQUEST";Oe.ERR_CANCELED="ERR_CANCELED";Oe.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";Oe.ERR_INVALID_URL="ERR_INVALID_URL";const cP=null;function Xf(t){return X.isPlainObject(t)||X.isArray(t)}function Lx(t){return X.endsWith(t,"[]")?t.slice(0,-2):t}function Zu(t,e,n){return t?t.concat(e).map(function(r,s){return r=Lx(r),!n&&s?"["+r+"]":r}).join(n?".":""):e}function uP(t){return X.isArray(t)&&!t.some(Xf)}const dP=X.toFlatObject(X,{},null,function(e){return/^is[A-Z]/.test(e)});function kc(t,e,n){if(!X.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=X.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,p){return!X.isUndefined(p[y])});const i=n.metaTokens,r=n.visitor||u,s=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&X.isSpecCompliantForm(e);if(!X.isFunction(r))throw new TypeError("visitor must be a function");function c(g){if(g===null)return"";if(X.isDate(g))return g.toISOString();if(X.isBoolean(g))return g.toString();if(!l&&X.isBlob(g))throw new Oe("Blob is not supported. Use a Buffer instead.");return X.isArrayBuffer(g)||X.isTypedArray(g)?l&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function u(g,y,p){let h=g;if(X.isReactNative(e)&&X.isReactNativeBlob(g))return e.append(Zu(p,y,s),c(g)),!1;if(g&&!p&&typeof g=="object"){if(X.endsWith(y,"{}"))y=i?y:y.slice(0,-2),g=JSON.stringify(g);else if(X.isArray(g)&&uP(g)||(X.isFileList(g)||X.endsWith(y,"[]"))&&(h=X.toArray(g)))return y=Lx(y),h.forEach(function(_,M){!(X.isUndefined(_)||_===null)&&e.append(o===!0?Zu([y],M,s):o===null?y:y+"[]",c(_))}),!1}return Xf(g)?!0:(e.append(Zu(p,y,s),c(g)),!1)}const f=[],d=Object.assign(dP,{defaultVisitor:u,convertValue:c,isVisitable:Xf});function v(g,y){if(!X.isUndefined(g)){if(f.indexOf(g)!==-1)throw Error("Circular reference detected in "+y.join("."));f.push(g),X.forEach(g,function(h,m){(!(X.isUndefined(h)||h===null)&&r.call(e,h,X.isString(m)?m.trim():m,y,d))===!0&&v(h,y?y.concat(m):[m])}),f.pop()}}if(!X.isObject(t))throw new TypeError("data must be an object");return v(t),e}function e0(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(i){return e[i]})}function fp(t,e){this._pairs=[],t&&kc(t,this,e)}const Nx=fp.prototype;Nx.append=function(e,n){this._pairs.push([e,n])};Nx.toString=function(e){const n=e?function(i){return e.call(this,i,e0)}:e0;return this._pairs.map(function(r){return n(r[0])+"="+n(r[1])},"").join("&")};function fP(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Dx(t,e,n){if(!e)return t;const i=n&&n.encode||fP,r=X.isFunction(n)?{serialize:n}:n,s=r&&r.serialize;let o;if(s?o=s(e,r):o=X.isURLSearchParams(e)?e.toString():new fp(e,r).toString(i),o){const a=t.indexOf("#");a!==-1&&(t=t.slice(0,a)),t+=(t.indexOf("?")===-1?"?":"&")+o}return t}class t0{constructor(){this.handlers=[]}use(e,n,i){return this.handlers.push({fulfilled:e,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){X.forEach(this.handlers,function(i){i!==null&&e(i)})}}const hp={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},hP=typeof URLSearchParams<"u"?URLSearchParams:fp,pP=typeof FormData<"u"?FormData:null,mP=typeof Blob<"u"?Blob:null,gP={isBrowser:!0,classes:{URLSearchParams:hP,FormData:pP,Blob:mP},protocols:["http","https","file","blob","url","data"]},pp=typeof window<"u"&&typeof document<"u",qf=typeof navigator=="object"&&navigator||void 0,vP=pp&&(!qf||["ReactNative","NativeScript","NS"].indexOf(qf.product)<0),_P=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",xP=pp&&window.location.href||"http://localhost",yP=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:pp,hasStandardBrowserEnv:vP,hasStandardBrowserWebWorkerEnv:_P,navigator:qf,origin:xP},Symbol.toStringTag,{value:"Module"})),tn={...yP,...gP};function SP(t,e){return kc(t,new tn.classes.URLSearchParams,{visitor:function(n,i,r,s){return tn.isNode&&X.isBuffer(n)?(this.append(i,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)},...e})}function MP(t){return X.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function EP(t){const e={},n=Object.keys(t);let i;const r=n.length;let s;for(i=0;i<r;i++)s=n[i],e[s]=t[s];return e}function Ix(t){function e(n,i,r,s){let o=n[s++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=s>=n.length;return o=!o&&X.isArray(r)?r.length:o,l?(X.hasOwnProp(r,o)?r[o]=[r[o],i]:r[o]=i,!a):((!r[o]||!X.isObject(r[o]))&&(r[o]=[]),e(n,i,r[o],s)&&X.isArray(r[o])&&(r[o]=EP(r[o])),!a)}if(X.isFormData(t)&&X.isFunction(t.entries)){const n={};return X.forEachEntry(t,(i,r)=>{e(MP(i),r,n,0)}),n}return null}function wP(t,e,n){if(X.isString(t))try{return(e||JSON.parse)(t),X.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(t)}const Ma={transitional:hp,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const i=n.getContentType()||"",r=i.indexOf("application/json")>-1,s=X.isObject(e);if(s&&X.isHTMLForm(e)&&(e=new FormData(e)),X.isFormData(e))return r?JSON.stringify(Ix(e)):e;if(X.isArrayBuffer(e)||X.isBuffer(e)||X.isStream(e)||X.isFile(e)||X.isBlob(e)||X.isReadableStream(e))return e;if(X.isArrayBufferView(e))return e.buffer;if(X.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){if(i.indexOf("application/x-www-form-urlencoded")>-1)return SP(e,this.formSerializer).toString();if((a=X.isFileList(e))||i.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return kc(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return s||r?(n.setContentType("application/json",!1),wP(e)):e}],transformResponse:[function(e){const n=this.transitional||Ma.transitional,i=n&&n.forcedJSONParsing,r=this.responseType==="json";if(X.isResponse(e)||X.isReadableStream(e))return e;if(e&&X.isString(e)&&(i&&!this.responseType||r)){const o=!(n&&n.silentJSONParsing)&&r;try{return JSON.parse(e,this.parseReviver)}catch(a){if(o)throw a.name==="SyntaxError"?Oe.from(a,Oe.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:tn.classes.FormData,Blob:tn.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};X.forEach(["delete","get","head","post","put","patch"],t=>{Ma.headers[t]={}});const TP=X.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),AP=t=>{const e={};let n,i,r;return t&&t.split(`
`).forEach(function(o){r=o.indexOf(":"),n=o.substring(0,r).trim().toLowerCase(),i=o.substring(r+1).trim(),!(!n||e[n]&&TP[n])&&(n==="set-cookie"?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)}),e},n0=Symbol("internals");function wo(t){return t&&String(t).trim().toLowerCase()}function Il(t){return t===!1||t==null?t:X.isArray(t)?t.map(Il):String(t)}function bP(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}const RP=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Ju(t,e,n,i,r){if(X.isFunction(i))return i.call(this,e,n);if(r&&(e=n),!!X.isString(e)){if(X.isString(i))return e.indexOf(i)!==-1;if(X.isRegExp(i))return i.test(e)}}function CP(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,i)=>n.toUpperCase()+i)}function PP(t,e){const n=X.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{value:function(r,s,o){return this[i].call(this,e,r,s,o)},configurable:!0})})}let yn=class{constructor(e){e&&this.set(e)}set(e,n,i){const r=this;function s(a,l,c){const u=wo(l);if(!u)throw new Error("header name must be a non-empty string");const f=X.findKey(r,u);(!f||r[f]===void 0||c===!0||c===void 0&&r[f]!==!1)&&(r[f||l]=Il(a))}const o=(a,l)=>X.forEach(a,(c,u)=>s(c,u,l));if(X.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(X.isString(e)&&(e=e.trim())&&!RP(e))o(AP(e),n);else if(X.isObject(e)&&X.isIterable(e)){let a={},l,c;for(const u of e){if(!X.isArray(u))throw TypeError("Object iterator must return a key-value pair");a[c=u[0]]=(l=a[c])?X.isArray(l)?[...l,u[1]]:[l,u[1]]:u[1]}o(a,n)}else e!=null&&s(n,e,i);return this}get(e,n){if(e=wo(e),e){const i=X.findKey(this,e);if(i){const r=this[i];if(!n)return r;if(n===!0)return bP(r);if(X.isFunction(n))return n.call(this,r,i);if(X.isRegExp(n))return n.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=wo(e),e){const i=X.findKey(this,e);return!!(i&&this[i]!==void 0&&(!n||Ju(this,this[i],i,n)))}return!1}delete(e,n){const i=this;let r=!1;function s(o){if(o=wo(o),o){const a=X.findKey(i,o);a&&(!n||Ju(i,i[a],a,n))&&(delete i[a],r=!0)}}return X.isArray(e)?e.forEach(s):s(e),r}clear(e){const n=Object.keys(this);let i=n.length,r=!1;for(;i--;){const s=n[i];(!e||Ju(this,this[s],s,e,!0))&&(delete this[s],r=!0)}return r}normalize(e){const n=this,i={};return X.forEach(this,(r,s)=>{const o=X.findKey(i,s);if(o){n[o]=Il(r),delete n[s];return}const a=e?CP(s):String(s).trim();a!==s&&delete n[s],n[a]=Il(r),i[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return X.forEach(this,(i,r)=>{i!=null&&i!==!1&&(n[r]=e&&X.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const i=new this(e);return n.forEach(r=>i.set(r)),i}static accessor(e){const i=(this[n0]=this[n0]={accessors:{}}).accessors,r=this.prototype;function s(o){const a=wo(o);i[a]||(PP(r,o),i[a]=!0)}return X.isArray(e)?e.forEach(s):s(e),this}};yn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);X.reduceDescriptors(yn.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(i){this[n]=i}}});X.freezeMethods(yn);function Qu(t,e){const n=this||Ma,i=e||n,r=yn.from(i.headers);let s=i.data;return X.forEach(t,function(a){s=a.call(n,s,r.normalize(),e?e.status:void 0)}),r.normalize(),s}function Ux(t){return!!(t&&t.__CANCEL__)}let Ea=class extends Oe{constructor(e,n,i){super(e??"canceled",Oe.ERR_CANCELED,n,i),this.name="CanceledError",this.__CANCEL__=!0}};function Fx(t,e,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):e(new Oe("Request failed with status code "+n.status,[Oe.ERR_BAD_REQUEST,Oe.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function LP(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function NP(t,e){t=t||10;const n=new Array(t),i=new Array(t);let r=0,s=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),u=i[s];o||(o=c),n[r]=l,i[r]=c;let f=s,d=0;for(;f!==r;)d+=n[f++],f=f%t;if(r=(r+1)%t,r===s&&(s=(s+1)%t),c-o<e)return;const v=u&&c-u;return v?Math.round(d*1e3/v):void 0}}function DP(t,e){let n=0,i=1e3/e,r,s;const o=(c,u=Date.now())=>{n=u,r=null,s&&(clearTimeout(s),s=null),t(...c)};return[(...c)=>{const u=Date.now(),f=u-n;f>=i?o(c,u):(r=c,s||(s=setTimeout(()=>{s=null,o(r)},i-f)))},()=>r&&o(r)]}const fc=(t,e,n=3)=>{let i=0;const r=NP(50,250);return DP(s=>{const o=s.loaded,a=s.lengthComputable?s.total:void 0,l=o-i,c=r(l),u=o<=a;i=o;const f={loaded:o,total:a,progress:a?o/a:void 0,bytes:l,rate:c||void 0,estimated:c&&a&&u?(a-o)/c:void 0,event:s,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(f)},n)},i0=(t,e)=>{const n=t!=null;return[i=>e[0]({lengthComputable:n,total:t,loaded:i}),e[1]]},r0=t=>(...e)=>X.asap(()=>t(...e)),IP=tn.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,tn.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(tn.origin),tn.navigator&&/(msie|trident)/i.test(tn.navigator.userAgent)):()=>!0,UP=tn.hasStandardBrowserEnv?{write(t,e,n,i,r,s,o){if(typeof document>"u")return;const a=[`${t}=${encodeURIComponent(e)}`];X.isNumber(n)&&a.push(`expires=${new Date(n).toUTCString()}`),X.isString(i)&&a.push(`path=${i}`),X.isString(r)&&a.push(`domain=${r}`),s===!0&&a.push("secure"),X.isString(o)&&a.push(`SameSite=${o}`),document.cookie=a.join("; ")},read(t){if(typeof document>"u")return null;const e=document.cookie.match(new RegExp("(?:^|; )"+t+"=([^;]*)"));return e?decodeURIComponent(e[1]):null},remove(t){this.write(t,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function FP(t){return typeof t!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function OP(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function Ox(t,e,n){let i=!FP(e);return t&&(i||n==!1)?OP(t,e):e}const s0=t=>t instanceof yn?{...t}:t;function es(t,e){e=e||{};const n={};function i(c,u,f,d){return X.isPlainObject(c)&&X.isPlainObject(u)?X.merge.call({caseless:d},c,u):X.isPlainObject(u)?X.merge({},u):X.isArray(u)?u.slice():u}function r(c,u,f,d){if(X.isUndefined(u)){if(!X.isUndefined(c))return i(void 0,c,f,d)}else return i(c,u,f,d)}function s(c,u){if(!X.isUndefined(u))return i(void 0,u)}function o(c,u){if(X.isUndefined(u)){if(!X.isUndefined(c))return i(void 0,c)}else return i(void 0,u)}function a(c,u,f){if(f in e)return i(c,u);if(f in t)return i(void 0,c)}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(c,u,f)=>r(s0(c),s0(u),f,!0)};return X.forEach(Object.keys({...t,...e}),function(u){if(u==="__proto__"||u==="constructor"||u==="prototype")return;const f=X.hasOwnProp(l,u)?l[u]:r,d=f(t[u],e[u],u);X.isUndefined(d)&&f!==a||(n[u]=d)}),n}const Bx=t=>{const e=es({},t);let{data:n,withXSRFToken:i,xsrfHeaderName:r,xsrfCookieName:s,headers:o,auth:a}=e;if(e.headers=o=yn.from(o),e.url=Dx(Ox(e.baseURL,e.url,e.allowAbsoluteUrls),t.params,t.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):""))),X.isFormData(n)){if(tn.hasStandardBrowserEnv||tn.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if(X.isFunction(n.getHeaders)){const l=n.getHeaders(),c=["content-type","content-length"];Object.entries(l).forEach(([u,f])=>{c.includes(u.toLowerCase())&&o.set(u,f)})}}if(tn.hasStandardBrowserEnv&&(i&&X.isFunction(i)&&(i=i(e)),i||i!==!1&&IP(e.url))){const l=r&&s&&UP.read(s);l&&o.set(r,l)}return e},BP=typeof XMLHttpRequest<"u",kP=BP&&function(t){return new Promise(function(n,i){const r=Bx(t);let s=r.data;const o=yn.from(r.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:c}=r,u,f,d,v,g;function y(){v&&v(),g&&g(),r.cancelToken&&r.cancelToken.unsubscribe(u),r.signal&&r.signal.removeEventListener("abort",u)}let p=new XMLHttpRequest;p.open(r.method.toUpperCase(),r.url,!0),p.timeout=r.timeout;function h(){if(!p)return;const _=yn.from("getAllResponseHeaders"in p&&p.getAllResponseHeaders()),T={data:!a||a==="text"||a==="json"?p.responseText:p.response,status:p.status,statusText:p.statusText,headers:_,config:t,request:p};Fx(function(R){n(R),y()},function(R){i(R),y()},T),p=null}"onloadend"in p?p.onloadend=h:p.onreadystatechange=function(){!p||p.readyState!==4||p.status===0&&!(p.responseURL&&p.responseURL.indexOf("file:")===0)||setTimeout(h)},p.onabort=function(){p&&(i(new Oe("Request aborted",Oe.ECONNABORTED,t,p)),p=null)},p.onerror=function(M){const T=M&&M.message?M.message:"Network Error",w=new Oe(T,Oe.ERR_NETWORK,t,p);w.event=M||null,i(w),p=null},p.ontimeout=function(){let M=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const T=r.transitional||hp;r.timeoutErrorMessage&&(M=r.timeoutErrorMessage),i(new Oe(M,T.clarifyTimeoutError?Oe.ETIMEDOUT:Oe.ECONNABORTED,t,p)),p=null},s===void 0&&o.setContentType(null),"setRequestHeader"in p&&X.forEach(o.toJSON(),function(M,T){p.setRequestHeader(T,M)}),X.isUndefined(r.withCredentials)||(p.withCredentials=!!r.withCredentials),a&&a!=="json"&&(p.responseType=r.responseType),c&&([d,g]=fc(c,!0),p.addEventListener("progress",d)),l&&p.upload&&([f,v]=fc(l),p.upload.addEventListener("progress",f),p.upload.addEventListener("loadend",v)),(r.cancelToken||r.signal)&&(u=_=>{p&&(i(!_||_.type?new Ea(null,t,p):_),p.abort(),p=null)},r.cancelToken&&r.cancelToken.subscribe(u),r.signal&&(r.signal.aborted?u():r.signal.addEventListener("abort",u)));const m=LP(r.url);if(m&&tn.protocols.indexOf(m)===-1){i(new Oe("Unsupported protocol "+m+":",Oe.ERR_BAD_REQUEST,t));return}p.send(s||null)})},zP=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let i=new AbortController,r;const s=function(c){if(!r){r=!0,a();const u=c instanceof Error?c:this.reason;i.abort(u instanceof Oe?u:new Ea(u instanceof Error?u.message:u))}};let o=e&&setTimeout(()=>{o=null,s(new Oe(`timeout of ${e}ms exceeded`,Oe.ETIMEDOUT))},e);const a=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(c=>{c.unsubscribe?c.unsubscribe(s):c.removeEventListener("abort",s)}),t=null)};t.forEach(c=>c.addEventListener("abort",s));const{signal:l}=i;return l.unsubscribe=()=>X.asap(a),l}},VP=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let i=0,r;for(;i<n;)r=i+e,yield t.slice(i,r),i=r},HP=async function*(t,e){for await(const n of GP(t))yield*VP(n,e)},GP=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:i}=await e.read();if(n)break;yield i}}finally{await e.cancel()}},o0=(t,e,n,i)=>{const r=HP(t,e);let s=0,o,a=l=>{o||(o=!0,i&&i(l))};return new ReadableStream({async pull(l){try{const{done:c,value:u}=await r.next();if(c){a(),l.close();return}let f=u.byteLength;if(n){let d=s+=f;n(d)}l.enqueue(new Uint8Array(u))}catch(c){throw a(c),c}},cancel(l){return a(l),r.return()}},{highWaterMark:2})},a0=64*1024,{isFunction:fl}=X,WP=(({Request:t,Response:e})=>({Request:t,Response:e}))(X.global),{ReadableStream:l0,TextEncoder:c0}=X.global,u0=(t,...e)=>{try{return!!t(...e)}catch{return!1}},jP=t=>{t=X.merge.call({skipUndefined:!0},WP,t);const{fetch:e,Request:n,Response:i}=t,r=e?fl(e):typeof fetch=="function",s=fl(n),o=fl(i);if(!r)return!1;const a=r&&fl(l0),l=r&&(typeof c0=="function"?(g=>y=>g.encode(y))(new c0):async g=>new Uint8Array(await new n(g).arrayBuffer())),c=s&&a&&u0(()=>{let g=!1;const y=new n(tn.origin,{body:new l0,method:"POST",get duplex(){return g=!0,"half"}}).headers.has("Content-Type");return g&&!y}),u=o&&a&&u0(()=>X.isReadableStream(new i("").body)),f={stream:u&&(g=>g.body)};r&&["text","arrayBuffer","blob","formData","stream"].forEach(g=>{!f[g]&&(f[g]=(y,p)=>{let h=y&&y[g];if(h)return h.call(y);throw new Oe(`Response type '${g}' is not supported`,Oe.ERR_NOT_SUPPORT,p)})});const d=async g=>{if(g==null)return 0;if(X.isBlob(g))return g.size;if(X.isSpecCompliantForm(g))return(await new n(tn.origin,{method:"POST",body:g}).arrayBuffer()).byteLength;if(X.isArrayBufferView(g)||X.isArrayBuffer(g))return g.byteLength;if(X.isURLSearchParams(g)&&(g=g+""),X.isString(g))return(await l(g)).byteLength},v=async(g,y)=>{const p=X.toFiniteNumber(g.getContentLength());return p??d(y)};return async g=>{let{url:y,method:p,data:h,signal:m,cancelToken:_,timeout:M,onDownloadProgress:T,onUploadProgress:w,responseType:R,headers:x,withCredentials:b="same-origin",fetchOptions:P}=Bx(g),L=e||fetch;R=R?(R+"").toLowerCase():"text";let U=zP([m,_&&_.toAbortSignal()],M),$=null;const j=U&&U.unsubscribe&&(()=>{U.unsubscribe()});let I;try{if(w&&c&&p!=="get"&&p!=="head"&&(I=await v(x,h))!==0){let ie=new n(y,{method:"POST",body:h,duplex:"half"}),le;if(X.isFormData(h)&&(le=ie.headers.get("content-type"))&&x.setContentType(le),ie.body){const[Ue,Fe]=i0(I,fc(r0(w)));h=o0(ie.body,a0,Ue,Fe)}}X.isString(b)||(b=b?"include":"omit");const B=s&&"credentials"in n.prototype,G={...P,signal:U,method:p.toUpperCase(),headers:x.normalize().toJSON(),body:h,duplex:"half",credentials:B?b:void 0};$=s&&new n(y,G);let O=await(s?L($,P):L(y,G));const q=u&&(R==="stream"||R==="response");if(u&&(T||q&&j)){const ie={};["status","statusText","headers"].forEach(ce=>{ie[ce]=O[ce]});const le=X.toFiniteNumber(O.headers.get("content-length")),[Ue,Fe]=T&&i0(le,fc(r0(T),!0))||[];O=new i(o0(O.body,a0,Ue,()=>{Fe&&Fe(),j&&j()}),ie)}R=R||"text";let Z=await f[X.findKey(f,R)||"text"](O,g);return!q&&j&&j(),await new Promise((ie,le)=>{Fx(ie,le,{data:Z,headers:yn.from(O.headers),status:O.status,statusText:O.statusText,config:g,request:$})})}catch(B){throw j&&j(),B&&B.name==="TypeError"&&/Load failed|fetch/i.test(B.message)?Object.assign(new Oe("Network Error",Oe.ERR_NETWORK,g,$,B&&B.response),{cause:B.cause||B}):Oe.from(B,B&&B.code,g,$,B&&B.response)}}},XP=new Map,kx=t=>{let e=t&&t.env||{};const{fetch:n,Request:i,Response:r}=e,s=[i,r,n];let o=s.length,a=o,l,c,u=XP;for(;a--;)l=s[a],c=u.get(l),c===void 0&&u.set(l,c=a?new Map:jP(e)),u=c;return c};kx();const mp={http:cP,xhr:kP,fetch:{get:kx}};X.forEach(mp,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const d0=t=>`- ${t}`,qP=t=>X.isFunction(t)||t===null||t===!1;function $P(t,e){t=X.isArray(t)?t:[t];const{length:n}=t;let i,r;const s={};for(let o=0;o<n;o++){i=t[o];let a;if(r=i,!qP(i)&&(r=mp[(a=String(i)).toLowerCase()],r===void 0))throw new Oe(`Unknown adapter '${a}'`);if(r&&(X.isFunction(r)||(r=r.get(e))))break;s[a||"#"+o]=r}if(!r){const o=Object.entries(s).map(([l,c])=>`adapter ${l} `+(c===!1?"is not supported by the environment":"is not available in the build"));let a=n?o.length>1?`since :
`+o.map(d0).join(`
`):" "+d0(o[0]):"as no adapter specified";throw new Oe("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return r}const zx={getAdapter:$P,adapters:mp};function ed(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Ea(null,t)}function f0(t){return ed(t),t.headers=yn.from(t.headers),t.data=Qu.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),zx.getAdapter(t.adapter||Ma.adapter,t)(t).then(function(i){return ed(t),i.data=Qu.call(t,t.transformResponse,i),i.headers=yn.from(i.headers),i},function(i){return Ux(i)||(ed(t),i&&i.response&&(i.response.data=Qu.call(t,t.transformResponse,i.response),i.response.headers=yn.from(i.response.headers))),Promise.reject(i)})}const Vx="1.13.6",zc={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{zc[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});const h0={};zc.transitional=function(e,n,i){function r(s,o){return"[Axios v"+Vx+"] Transitional option '"+s+"'"+o+(i?". "+i:"")}return(s,o,a)=>{if(e===!1)throw new Oe(r(o," has been removed"+(n?" in "+n:"")),Oe.ERR_DEPRECATED);return n&&!h0[o]&&(h0[o]=!0,console.warn(r(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,a):!0}};zc.spelling=function(e){return(n,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function YP(t,e,n){if(typeof t!="object")throw new Oe("options must be an object",Oe.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let r=i.length;for(;r-- >0;){const s=i[r],o=e[s];if(o){const a=t[s],l=a===void 0||o(a,s,t);if(l!==!0)throw new Oe("option "+s+" must be "+l,Oe.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Oe("Unknown option "+s,Oe.ERR_BAD_OPTION)}}const Ul={assertOptions:YP,validators:zc},Fn=Ul.validators;let Xr=class{constructor(e){this.defaults=e||{},this.interceptors={request:new t0,response:new t0}}async request(e,n){try{return await this._request(e,n)}catch(i){if(i instanceof Error){let r={};Error.captureStackTrace?Error.captureStackTrace(r):r=new Error;const s=r.stack?r.stack.replace(/^.+\n/,""):"";try{i.stack?s&&!String(i.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(i.stack+=`
`+s):i.stack=s}catch{}}throw i}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=es(this.defaults,n);const{transitional:i,paramsSerializer:r,headers:s}=n;i!==void 0&&Ul.assertOptions(i,{silentJSONParsing:Fn.transitional(Fn.boolean),forcedJSONParsing:Fn.transitional(Fn.boolean),clarifyTimeoutError:Fn.transitional(Fn.boolean),legacyInterceptorReqResOrdering:Fn.transitional(Fn.boolean)},!1),r!=null&&(X.isFunction(r)?n.paramsSerializer={serialize:r}:Ul.assertOptions(r,{encode:Fn.function,serialize:Fn.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Ul.assertOptions(n,{baseUrl:Fn.spelling("baseURL"),withXsrfToken:Fn.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=s&&X.merge(s.common,s[n.method]);s&&X.forEach(["delete","get","head","post","put","patch","common"],g=>{delete s[g]}),n.headers=yn.concat(o,s);const a=[];let l=!0;this.interceptors.request.forEach(function(y){if(typeof y.runWhen=="function"&&y.runWhen(n)===!1)return;l=l&&y.synchronous;const p=n.transitional||hp;p&&p.legacyInterceptorReqResOrdering?a.unshift(y.fulfilled,y.rejected):a.push(y.fulfilled,y.rejected)});const c=[];this.interceptors.response.forEach(function(y){c.push(y.fulfilled,y.rejected)});let u,f=0,d;if(!l){const g=[f0.bind(this),void 0];for(g.unshift(...a),g.push(...c),d=g.length,u=Promise.resolve(n);f<d;)u=u.then(g[f++],g[f++]);return u}d=a.length;let v=n;for(;f<d;){const g=a[f++],y=a[f++];try{v=g(v)}catch(p){y.call(this,p);break}}try{u=f0.call(this,v)}catch(g){return Promise.reject(g)}for(f=0,d=c.length;f<d;)u=u.then(c[f++],c[f++]);return u}getUri(e){e=es(this.defaults,e);const n=Ox(e.baseURL,e.url,e.allowAbsoluteUrls);return Dx(n,e.params,e.paramsSerializer)}};X.forEach(["delete","get","head","options"],function(e){Xr.prototype[e]=function(n,i){return this.request(es(i||{},{method:e,url:n,data:(i||{}).data}))}});X.forEach(["post","put","patch"],function(e){function n(i){return function(s,o,a){return this.request(es(a||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}Xr.prototype[e]=n(),Xr.prototype[e+"Form"]=n(!0)});let KP=class Hx{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const i=this;this.promise.then(r=>{if(!i._listeners)return;let s=i._listeners.length;for(;s-- >0;)i._listeners[s](r);i._listeners=null}),this.promise.then=r=>{let s;const o=new Promise(a=>{i.subscribe(a),s=a}).then(r);return o.cancel=function(){i.unsubscribe(s)},o},e(function(s,o,a){i.reason||(i.reason=new Ea(s,o,a),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=i=>{e.abort(i)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new Hx(function(r){e=r}),cancel:e}}};function ZP(t){return function(n){return t.apply(null,n)}}function JP(t){return X.isObject(t)&&t.isAxiosError===!0}const $f={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries($f).forEach(([t,e])=>{$f[e]=t});function Gx(t){const e=new Xr(t),n=Mx(Xr.prototype.request,e);return X.extend(n,Xr.prototype,e,{allOwnKeys:!0}),X.extend(n,e,null,{allOwnKeys:!0}),n.create=function(r){return Gx(es(t,r))},n}const It=Gx(Ma);It.Axios=Xr;It.CanceledError=Ea;It.CancelToken=KP;It.isCancel=Ux;It.VERSION=Vx;It.toFormData=kc;It.AxiosError=Oe;It.Cancel=It.CanceledError;It.all=function(e){return Promise.all(e)};It.spread=ZP;It.isAxiosError=JP;It.mergeConfig=es;It.AxiosHeaders=yn;It.formToJSON=t=>Ix(X.isHTMLForm(t)?new FormData(t):t);It.getAdapter=zx.getAdapter;It.HttpStatusCode=$f;It.default=It;const{Axios:l2,AxiosError:c2,CanceledError:u2,isCancel:d2,CancelToken:f2,VERSION:h2,all:p2,Cancel:m2,isAxiosError:g2,spread:v2,toFormData:_2,AxiosHeaders:x2,HttpStatusCode:y2,formToJSON:S2,getAdapter:M2,mergeConfig:E2}=It,Ht=It.create({baseURL:window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"http://localhost:8000":`${window.location.protocol}//${window.location.hostname}`});Ht.interceptors.request.use(t=>{const e=localStorage.getItem("token");return e&&(t.headers.Authorization=`Bearer ${e}`),t});Ht.interceptors.response.use(t=>t,t=>(t.response&&t.response.status===401&&(localStorage.removeItem("token"),!(t.config&&t.config.url&&t.config.url.includes("/auth/login"))&&window.location.pathname!=="/"&&(window.location.href="/")),Promise.reject(t)));const w2={getHistory:()=>Ht.get("/billing/history"),getStoneReport:(t,e)=>Ht.get("/billing/stone-report",{params:{year:t,month:e}}),downloadInvoice:t=>Ht.get(`/billing/invoice/${t}`,{responseType:"blob"}),downloadInvoiceExcel:t=>Ht.get(`/billing/invoice/${t}/excel`,{responseType:"blob"}),getMonthly:(t,e)=>Ht.get("/billing/monthly",{params:{year:t,month:e}}),generateInvoices:(t,e,n)=>Ht.post("/billing/invoice",null,{params:{year:t,month:e,user_id:n}}),getAdminOverview:(t,e)=>Ht.get("/billing/admin/overview",{params:{year:t,month:e}}),getAdminStoneReport:(t,e,n)=>Ht.get("/billing/admin/stone-report",{params:{user_id:t,year:e,month:n}}),getAllInvoices:()=>Ht.get("/billing/admin/all-invoices"),adminDownloadInvoice:t=>Ht.get(`/billing/admin/invoice/${t}`,{responseType:"blob"}),adminDownloadInvoiceExcel:t=>Ht.get(`/billing/admin/invoice/${t}/excel`,{responseType:"blob"}),getUserAccount:(t,e,n)=>Ht.get(`/billing/admin/user-account/${t}`,{params:{year:e,month:n}})};function QP({mode:t="client",isModal:e=!1,onClose:n}){const i=Lc(),r=t==="admin",[s,o]=te.useState({username:"",password:""}),[a,l]=te.useState(""),[c,u]=te.useState(!1),[f,d]=te.useState(!1),[v,g]=te.useState(!1),[y,p]=te.useState(1),[h,m]=te.useState(""),[_,M]=te.useState(""),[T,w]=te.useState({newPwd:"",confirmPwd:""}),[R,x]=te.useState(!1),[b,P]=te.useState(!1),[L,U]=te.useState(""),[$,j]=te.useState(""),[I,B]=te.useState(!1),G=async ce=>{var Y,ae;ce.preventDefault(),l(""),d(!0);try{const re={username:s.username,password:s.password,is_admin_login:r},{data:Ce}=await Ht.post("/auth/login",re);localStorage.setItem("token",Ce.access_token),localStorage.setItem("is_admin",String(Ce.is_admin)),i(Ce.is_admin?"/admin":"/dashboard")}catch(re){l(((ae=(Y=re.response)==null?void 0:Y.data)==null?void 0:ae.detail)||"Login failed. Please verify credentials.")}finally{d(!1)}},O=async ce=>{var Y,ae;ce.preventDefault(),U(""),j(""),B(!0);try{const{data:re}=await Ht.post("/auth/forgot-password",{email:h});j(re.message),p(2)}catch(re){U(((ae=(Y=re.response)==null?void 0:Y.data)==null?void 0:ae.detail)||"Failed to generate OTP.")}finally{B(!1)}},q=async ce=>{var Y,ae;ce.preventDefault(),U(""),j(""),B(!0);try{await Ht.post("/auth/verify-otp",{email:h,otp:_}),j("OTP verified successfully! Now define your new password."),p(3)}catch(re){U(((ae=(Y=re.response)==null?void 0:Y.data)==null?void 0:ae.detail)||"Incorrect or expired OTP.")}finally{B(!1)}},Z=async ce=>{var Y,ae;if(ce.preventDefault(),U(""),j(""),T.newPwd!==T.confirmPwd){U("Passwords do not match!");return}B(!0);try{const{data:re}=await Ht.post("/auth/reset-password",{email:h,otp:_,new_password:T.newPwd});g(!1),p(1),m(""),M(""),w({newPwd:"",confirmPwd:""}),l(""),alert(re.message||"Password updated successfully. Please login with your new password.")}catch(re){U(((ae=(Y=re.response)==null?void 0:Y.data)==null?void 0:ae.detail)||"Failed to update password.")}finally{B(!1)}},ie=()=>{g(!1),p(1),U(""),j("")},le=ce=>{ce.target===ce.currentTarget&&n&&n()},Ue=e?{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(3, 4, 8, 0.75)",backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9999,padding:"20px",animation:"fadeIn 0.3s ease"}:{position:"relative"},Fe=e?"login-modal-overlay":"auth-page";return N.jsxs("div",{className:Fe,style:Ue,onClick:e?le:void 0,children:[N.jsx("div",{className:"glow-blob blob-1",style:{top:"-10%",left:"15%"}}),N.jsx("div",{className:"glow-blob blob-2",style:{bottom:"-10%",right:"10%"}}),!e&&N.jsxs("button",{className:"btn btn-outline btn-sm btn-back-home",onClick:()=>i("/"),style:{position:"absolute",top:"24px",left:"24px",display:"flex",alignItems:"center",gap:"6px",borderRadius:"var(--radius-sm)",zIndex:1e3},children:[N.jsx(OE,{size:14})," Back to Home"]}),!e&&N.jsx("div",{style:{position:"absolute",top:"24px",right:"24px",zIndex:1e3},children:N.jsx(Sx,{})}),v?N.jsxs("div",{className:"auth-card",style:{position:"relative",animation:"modalSlideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1)"},children:[e&&N.jsx("button",{type:"button",onClick:n,"aria-label":"Close modal",className:"btn-close-modal",style:{position:"absolute",top:"20px",right:"20px",background:"rgba(255, 255, 255, 0.08)",border:"1px solid var(--border)",borderRadius:"50%",width:"36px",height:"36px",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--text)",cursor:"pointer",transition:"all var(--transition)",padding:0,zIndex:10},onMouseEnter:ce=>{ce.currentTarget.style.transform="rotate(90deg)",ce.currentTarget.style.background="var(--primary-bg)"},onMouseLeave:ce=>{ce.currentTarget.style.transform="none",ce.currentTarget.style.background="rgba(255, 255, 255, 0.08)"},children:N.jsx(Zm,{size:18})}),N.jsx("div",{className:"logo-icon primary",children:N.jsx(WE,{size:28})}),N.jsx("h1",{children:"Reset Password"}),N.jsx("p",{style:{marginBottom:"20px"},children:"Admin Security Portal"}),L&&N.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",background:"var(--danger-bg)",border:"1px solid var(--border)",color:"var(--danger)",padding:"10px 14px",borderRadius:"var(--radius-sm)",fontSize:"0.85rem",marginBottom:"16px"},children:[N.jsx(JE,{size:16,style:{flexShrink:0}}),N.jsx("span",{children:L})]}),$&&N.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",background:"var(--success-bg)",border:"1px solid var(--border)",color:"var(--success)",padding:"10px 14px",borderRadius:"var(--radius-sm)",fontSize:"0.85rem",marginBottom:"16px"},children:[N.jsx(z_,{size:16,style:{flexShrink:0}}),N.jsx("span",{children:$})]}),y===1&&N.jsxs("form",{onSubmit:O,children:[N.jsxs("div",{style:{position:"relative",marginBottom:"16px"},children:[N.jsx("input",{type:"email",placeholder:"Enter registered Admin Email","aria-label":"Registered Admin Email",value:h,onChange:ce=>m(ce.target.value),required:!0,autoFocus:!0,style:{paddingLeft:"40px"}}),N.jsx($E,{size:16,style:{position:"absolute",left:"14px",top:"14px",color:"var(--text-light)"}})]}),N.jsx("button",{type:"submit",className:"btn-primary",disabled:I,style:{width:"100%",justifyContent:"center",padding:"12px",marginBottom:"12px"},children:I?"Sending OTP...":"Request 6-Digit OTP"})]}),y===2&&N.jsxs("form",{onSubmit:q,children:[N.jsx("div",{style:{position:"relative",marginBottom:"16px"},children:N.jsx("input",{type:"text",placeholder:"Enter 6-Digit OTP","aria-label":"6-Digit OTP",value:_,onChange:ce=>M(ce.target.value),required:!0,maxLength:6,autoFocus:!0,style:{textAlign:"center",letterSpacing:"6px",fontSize:"1.2rem",fontWeight:700}})}),N.jsx("button",{type:"submit",className:"btn-primary",disabled:I,style:{width:"100%",justifyContent:"center",padding:"12px",marginBottom:"12px"},children:I?"Verifying...":"Verify Code"})]}),y===3&&N.jsxs("form",{onSubmit:Z,children:[N.jsxs("div",{style:{position:"relative",marginBottom:"12px"},children:[N.jsx("input",{type:R?"text":"password",placeholder:"New Password","aria-label":"New Password",value:T.newPwd,onChange:ce=>w({...T,newPwd:ce.target.value}),required:!0,autoFocus:!0,style:{paddingRight:42,marginBottom:0}}),N.jsx("button",{type:"button",onClick:()=>x(!R),"aria-label":R?"Hide new password":"Show new password",style:{position:"absolute",right:12,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",padding:4,color:"var(--text-light)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},children:R?N.jsx(gu,{size:18}):N.jsx(vu,{size:18})})]}),N.jsxs("div",{style:{position:"relative",marginBottom:"18px"},children:[N.jsx("input",{type:b?"text":"password",placeholder:"Confirm New Password","aria-label":"Confirm New Password",value:T.confirmPwd,onChange:ce=>w({...T,confirmPwd:ce.target.value}),required:!0,style:{paddingRight:42,marginBottom:0}}),N.jsx("button",{type:"button",onClick:()=>P(!b),"aria-label":b?"Hide confirm password":"Show confirm password",style:{position:"absolute",right:12,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",padding:4,color:"var(--text-light)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},children:b?N.jsx(gu,{size:18}):N.jsx(vu,{size:18})})]}),N.jsx("button",{type:"submit",className:"btn-primary",disabled:I,style:{width:"100%",justifyContent:"center",padding:"12px",marginBottom:"12px"},children:I?"Updating...":"Update Password"})]}),N.jsx("button",{type:"button",className:"btn btn-outline",onClick:ie,style:{width:"100%",justifyContent:"center",padding:"10px"},children:"Cancel"})]}):N.jsxs("form",{className:"auth-card",onSubmit:G,style:{position:"relative",animation:"modalSlideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1)"},children:[e&&N.jsx("button",{type:"button",onClick:n,"aria-label":"Close modal",className:"btn-close-modal",style:{position:"absolute",top:"20px",right:"20px",background:"rgba(255, 255, 255, 0.08)",border:"1px solid var(--border)",borderRadius:"50%",width:"36px",height:"36px",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--text)",cursor:"pointer",transition:"all var(--transition)",padding:0,zIndex:10},onMouseEnter:ce=>{ce.currentTarget.style.transform="rotate(90deg)",ce.currentTarget.style.background="var(--primary-bg)"},onMouseLeave:ce=>{ce.currentTarget.style.transform="none",ce.currentTarget.style.background="rgba(255, 255, 255, 0.08)"},children:N.jsx(Zm,{size:18})}),N.jsx("div",{className:"logo-icon primary",children:N.jsx(Tl,{size:28})}),N.jsx("h1",{children:r?"Admin Control":"Client Operations"}),N.jsxs("p",{style:{marginBottom:"20px"},children:["Sign in to your ",r?"system settings":"diamond queue"]}),N.jsx("div",{style:{position:"relative",marginBottom:"14px"},children:N.jsx("input",{placeholder:"Username","aria-label":"Username",value:s.username,onChange:ce=>o({...s,username:ce.target.value}),required:!0,autoFocus:!0,autoComplete:"off",style:{marginBottom:0}})}),N.jsxs("div",{style:{position:"relative",marginBottom:"14px"},children:[N.jsx("input",{type:c?"text":"password",placeholder:"Password","aria-label":"Password",value:s.password,onChange:ce=>o({...s,password:ce.target.value}),required:!0,style:{paddingRight:42,marginBottom:0}}),N.jsx("button",{type:"button",onClick:()=>u(!c),"aria-label":c?"Hide password":"Show password",style:{position:"absolute",right:12,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",padding:4,color:"var(--text-light)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},children:c?N.jsx(gu,{size:18}):N.jsx(vu,{size:18})})]}),a&&N.jsx("small",{className:"error",style:{marginBottom:"14px",display:"block"},children:a}),N.jsxs("button",{type:"submit",className:"btn-primary",disabled:f,style:{width:"100%",justifyContent:"center",padding:"12px",marginBottom:"14px"},children:[N.jsx(XE,{size:18}),f?"Signing in...":"Sign In"]}),r&&N.jsx("div",{style:{textAlign:"center",marginTop:"4px"},children:N.jsx("button",{type:"button",className:"btn-ghost",onClick:()=>g(!0),style:{background:"none",border:"none",color:"var(--primary-light)",fontSize:"0.85rem",fontWeight:600,cursor:"pointer",padding:"4px 8px"},children:"Forgot Password?"})})]})]})}function wn({children:t,className:e="",delay:n=0,direction:i="up",style:r={}}){const[s,o]=te.useState(!1),a=te.useRef();te.useEffect(()=>{const c=new IntersectionObserver(f=>{f.forEach(d=>{d.isIntersecting&&d.intersectionRatio>=.1?o(!0):d.isIntersecting||d.target.getBoundingClientRect().top>=window.innerHeight-10&&o(!1)})},{threshold:[0,.1]}),u=a.current;return u&&c.observe(u),()=>{u&&c.unobserve(u)}},[]);const l={up:"reveal-up",down:"reveal-down",left:"reveal-left",right:"reveal-right",fade:"reveal-fade"}[i];return N.jsx("div",{ref:a,className:`scroll-reveal ${l} ${s?"active":""} ${e}`,style:{transitionDelay:`${n}ms`,...r},children:t})}function e2(){const t=te.useRef(),e=te.useRef(!1),n=te.useRef(0),i=te.useRef(0),[r,s]=te.useState(!1),[o,a]=te.useState(!1),[l,c]=te.useState(document.documentElement.getAttribute("data-theme")||"dark"),u=te.useRef(document.documentElement.getAttribute("data-theme")||"dark");return te.useEffect(()=>{const f=t.current;if(!f)return;let d=null,v=null,g=null,y=null,p=null;try{const h=document.documentElement.getAttribute("data-theme")||"dark";u.current=h,c(h),g=new MutationObserver(ge=>{ge.forEach(Le=>{if(Le.attributeName==="data-theme"){const Me=document.documentElement.getAttribute("data-theme")||"dark";u.current=Me,c(Me)}})}),g.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]});const m=()=>{const ge=[];for(let C=0;C<8;C++){const ze=C*Math.PI*2/8;ge.push(Math.cos(ze)*.52,.38,Math.sin(ze)*.52)}ge.push(0,.38,0);for(let C=0;C<8;C++){const ze=(C+.5)*Math.PI*2/8;ge.push(Math.cos(ze)*.82,.22,Math.sin(ze)*.82)}for(let C=0;C<16;C++){const ze=C*Math.PI*2/16;ge.push(Math.cos(ze)*1.15,0,Math.sin(ze)*1.15)}for(let C=0;C<8;C++){const ze=(C+.5)*Math.PI*2/8;ge.push(Math.cos(ze)*.55,-.38,Math.sin(ze)*.55)}ge.push(0,-.72,0);const Le=[];for(let C=0;C<8;C++){const ze=(C+1)%8,je=2*C,nt=2*C+1,ve=(2*C+2)%16;Le.push(8,ze,C),Le.push(C,ze,9+C),Le.push(C,9+C,17+nt),Le.push(C,17+nt,17+je),Le.push(ze,17+nt,9+C),Le.push(ze,17+ve,17+nt),Le.push(17+je,33+C,17+nt),Le.push(17+nt,33+C,17+ve),Le.push(17+je,41,33+C);const yt=(C-1+8)%8;Le.push(17+je,33+yt,41)}const Me=new ri;Me.setAttribute("position",new Cn(ge,3)),Me.setIndex(Le);const Ke=Me.toNonIndexed();return Ke.computeVertexNormals(),Ke},_=new J1,M=new zn(45,1,.1,100);M.position.z=3.7;const T=new yC({antialias:!0,alpha:!0,powerPreference:"high-performance"});if(!T.capabilities.isWebGL2&&!T.getContext())throw new Error("WebGL context not supported or disabled in this browser.");T.setPixelRatio(Math.min(window.devicePixelRatio,2)),T.toneMapping=Yh,T.toneMappingExposure=1.8,T.setClearColor(0,0);const w=Math.max(f.clientWidth,400),R=Math.max(f.clientHeight,400);M.aspect=w/R,M.updateProjectionMatrix(),T.setSize(w,R),f.appendChild(T.domElement),T.domElement.style.width="100%",T.domElement.style.height="100%",T.domElement.style.position="absolute",T.domElement.style.top="0",T.domElement.style.left="0",T.domElement.style.background="transparent",T.domElement.style.backgroundColor="transparent",v=new ResizeObserver(ge=>{for(let Le of ge){const Me=Math.floor(Le.contentRect.width||f.clientWidth||400),Ke=Math.floor(Le.contentRect.height||f.clientHeight||400);Me>0&&Ke>0&&(M.aspect=Me/Ke,M.updateProjectionMatrix(),T.setSize(Me,Ke))}}),v.observe(f);const x=h==="light",b=new vw({color:x?5195493:959977,emissive:x?1973067:223649,transparent:!0,opacity:1,roughness:0,metalness:.12,ior:2.417,transmission:x?0:.3,thickness:2.2,side:pi,clearcoat:1,clearcoatRoughness:0,reflectivity:1,envMapIntensity:5,dispersion:.32});p=m(),y=new ii(p,b),y.rotation.x=.22,_.add(y);const P=ge=>{try{const Le=document.createElement("canvas");Le.width=512,Le.height=256;const Me=Le.getContext("2d");if(!Me)return null;ge==="light"?Me.fillStyle="#0b0f19":Me.fillStyle="#02040a",Me.fillRect(0,0,512,256);const Ke=Me.createLinearGradient(0,0,512,0);ge==="light"?(Ke.addColorStop(0,"#02040a"),Ke.addColorStop(.5,"#312e81"),Ke.addColorStop(1,"#02040a")):(Ke.addColorStop(0,"#030712"),Ke.addColorStop(.5,"#253b59"),Ke.addColorStop(1,"#030712")),Me.fillStyle=Ke,Me.fillRect(0,20,512,216);const C=new cw(Le);return C.mapping=bl,C}catch{return null}},L=P("dark"),U=P("light"),$=h==="light"?U:L;$&&(_.environment=$,b.envMap=$);const j=new Po,I=new cp(.01,0),B=[16777215,12248829,14742270,3718648,16317180],G=[16777215,13095678,14739455,8490232,5195493],O=x?G:B,q=[];for(let ge=0;ge<28;ge++){const Le=new op({color:O[Math.floor(Math.random()*O.length)],transparent:!0,opacity:.35+Math.random()*.65}),Me=new ii(I,Le),Ke=Math.random()*Math.PI*2,C=Math.acos(Math.random()*2-1),ze=1.1+Math.random()*1.1;Me.position.set(ze*Math.sin(C)*Math.cos(Ke),ze*Math.sin(C)*Math.sin(Ke),ze*Math.cos(C)),q.push({mesh:Me,speed:.12+Math.random()*.22,theta:Ke,phi:C,radius:ze,pulseSpeed:1.4+Math.random()*2.2}),j.add(Me)}_.add(j);const Z=new Mw(x?14739455:730437,x?.85:.65);_.add(Z);const ie=new cl(x?13095678:3718648,x?4:3.5);ie.position.set(0,10,0),_.add(ie);const le=new cl(x?14739455:8246268,x?3.5:3);le.position.set(5,5,5),_.add(le);const Ue=new cl(x?5195493:959977,x?3:2.5);Ue.position.set(-5,3,-5),_.add(Ue);const Fe=new cl(x?3223169:165063,x?3.5:3.2);Fe.position.set(0,-6,1),_.add(Fe);let ce=!1,Y={x:0,y:0};const ae=ge=>{ce=!0,e.current=!0,Y={x:ge.clientX,y:ge.clientY}},re=ge=>{const Le=f.getBoundingClientRect(),Me=(ge.clientX-Le.left)/Le.width*2-1,Ke=-((ge.clientY-Le.top)/Le.height)*2+1;if(!ce){n.current=Ke*.35,i.current=Me*.35;return}const C={x:ge.clientX-Y.x,y:ge.clientY-Y.y};y&&(y.rotation.y+=C.x*.007,y.rotation.x+=C.y*.007),j.rotation.y+=C.x*.004,Y={x:ge.clientX,y:ge.clientY}},Ce=()=>{ce=!1,setTimeout(()=>{e.current=!1},1200)},ke=ge=>{ge.touches.length===1&&(ce=!0,e.current=!0,Y={x:ge.touches[0].clientX,y:ge.touches[0].clientY})},Ie=ge=>{if(ce&&ge.touches.length===1){const Le={x:ge.touches[0].clientX-Y.x,y:ge.touches[0].clientY-Y.y};y&&(y.rotation.y+=Le.x*.007,y.rotation.x+=Le.y*.007),j.rotation.y+=Le.x*.004,Y={x:ge.touches[0].clientX,y:ge.touches[0].clientY}}};f.addEventListener("mousedown",ae),window.addEventListener("mousemove",re),window.addEventListener("mouseup",Ce),f.addEventListener("touchstart",ke),window.addEventListener("touchmove",Ie,{passive:!0}),window.addEventListener("touchend",Ce);let mt;const Ye=performance.now();let at=h;const ut=()=>{mt=requestAnimationFrame(ut);const ge=(performance.now()-Ye)*.001,Le=u.current;if(Le!==at){const Me=Le==="light";b.color.setHex(Me?5195493:959977),b.emissive.setHex(Me?1973067:223649),b.transmission=Me?0:.3;const Ke=Me?U:L;Ke&&(_.environment=Ke,b.envMap=Ke),Z.color.setHex(Me?14739455:730437),Z.intensity=Me?.85:.65,ie.color.setHex(Me?13095678:3718648),ie.intensity=Me?4:3.5,le.color.setHex(Me?14739455:8246268),le.intensity=Me?3.5:3,Ue.color.setHex(Me?5195493:959977),Ue.intensity=Me?3:2.5,Fe.color.setHex(Me?3223169:165063),Fe.intensity=Me?3.5:3.2;const C=Me?G:B;q.forEach(ze=>{ze.mesh.material.color.setHex(C[Math.floor(Math.random()*C.length)]),ze.mesh.material.needsUpdate=!0}),b.needsUpdate=!0,at=Le}y&&(e.current||(y.rotation.y+=.0055,y.rotation.x+=(n.current+.22-y.rotation.x)*.04,y.rotation.z+=6e-4),y.position.y=Math.sin(ge*1.1)*.035),j.rotation.y+=.0012,q.forEach(Me=>{Me.theta+=Me.speed*.01,Me.mesh.position.y+=Math.sin(ge*Me.pulseSpeed)*8e-4,Me.mesh.material.opacity=.35+Math.sin(ge*Me.pulseSpeed)*.3}),T.render(_,M)};T.render(_,M),a(!0),ut(),d=()=>{cancelAnimationFrame(mt),g&&g.disconnect(),v&&v.disconnect(),f.removeEventListener("mousedown",ae),window.removeEventListener("mousemove",re),window.removeEventListener("mouseup",Ce),f.removeEventListener("touchstart",ke),window.removeEventListener("touchmove",Ie),window.removeEventListener("touchend",Ce),f&&T.domElement&&f.contains(T.domElement)&&f.removeChild(T.domElement),p&&p.dispose(),y&&y.geometry.dispose(),b.dispose(),L&&L.dispose(),U&&U.dispose(),T.dispose()}}catch(h){console.error("Three.js diamond visualizer failed to initialize:",h),s(!0)}return()=>{d&&d()}},[]),r?N.jsx("div",{className:"anim-float-diamond diamond-visualizer",style:{display:"flex",alignItems:"center",justifyContent:"center",position:"relative",margin:"0 auto",filter:"drop-shadow(0 0 50px rgba(255, 255, 255, 0.15)) drop-shadow(0 0 100px rgba(6, 182, 212, 0.25))"},children:N.jsx("img",{src:"/main_diamond.png",alt:"Premium Diamond Visualizer Fallback",style:{width:"100%",height:"100%",objectFit:"contain"}})}):N.jsxs(N.Fragment,{children:[N.jsx("style",{children:`
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
      `}),N.jsxs("div",{className:"diamond-studio-container",style:{position:"relative",width:"100%",maxWidth:"480px",height:"auto",aspectRatio:"1 / 1",margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"center",background:"transparent",border:"none",boxShadow:"none",overflow:"visible"},children:[N.jsx("div",{style:{position:"absolute",top:"-40px",left:"-15%",right:"-15%",height:"120%",background:l==="light"?"radial-gradient(ellipse at 50% 0%, rgba(254, 205, 205, 0.22) 0%, rgba(254, 205, 205, 0.07) 45%, rgba(0, 0, 0, 0) 80%)":"radial-gradient(ellipse at 50% 0%, rgba(186, 230, 253, 0.08) 0%, rgba(186, 230, 253, 0.02) 45%, rgba(0, 0, 0, 0) 80%)",pointerEvents:"none",zIndex:1,transition:"background 0.5s ease"}}),N.jsx("div",{ref:t,className:"diamond-visualizer",style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",position:"relative",zIndex:2,cursor:e.current?"grabbing":"grab",userSelect:"none",touchAction:"none",opacity:o?1:0,transition:"opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)"}}),N.jsx("div",{className:"diamond-reflection-shadow",style:{position:"absolute",bottom:"35px",left:"50%",transform:"translateX(-50%)",width:"180px",height:"16px",borderRadius:"50%",background:l==="light"?"radial-gradient(ellipse, rgba(153, 27, 27, 0.22) 0%, rgba(239, 68, 68, 0.08) 40%, rgba(0, 0, 0, 0) 75%)":"radial-gradient(ellipse, rgba(0, 0, 0, 0.8) 0%, rgba(56, 189, 248, 0.08) 35%, rgba(0, 0, 0, 0) 75%)",filter:"blur(4px)",pointerEvents:"none",zIndex:1,animation:"diamondShadowPulse 2.85s ease-in-out infinite alternate",transition:"background 0.5s ease"}})]})]})}function p0(){Lc();const[t,e]=te.useState({isOpen:!1,mode:"client"});te.useEffect(()=>{const s=localStorage.getItem("theme")||"dark";document.documentElement.setAttribute("data-theme",s)},[]);const n=s=>{e({isOpen:!0,mode:s})},i=[{value:"5.4M+",label:"Stones Logged"},{value:"99.99%",label:"Parsing Accuracy"},{value:"10K+",label:"Batches Processed"},{value:"100%",label:"Files Reconciled"}],r=[{num:"01",title:"Secure Sheet Submission",desc:"Clients upload their diamond inventory spreadsheets (Excel/CSV) directly via the secure Client Console."},{num:"02",title:"Automated Sheet Processing",desc:"Our engine validates columns, processes total weights, maps field properties, and updates the database records."}];return N.jsxs("div",{className:"landing-page",style:{minHeight:"100vh",background:"var(--bg)",color:"var(--text)",position:"relative",overflowX:"hidden",fontFamily:"'Outfit', sans-serif"},children:[N.jsx("div",{className:"glow-blob blob-1 blob-float-1",style:{position:"absolute",top:"-5%",left:"10%",width:"500px",height:"500px",background:"radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)",pointerEvents:"none"}}),N.jsx("div",{className:"glow-blob blob-2 blob-float-2",style:{position:"absolute",bottom:"20%",right:"5%",width:"600px",height:"600px",background:"radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)",pointerEvents:"none"}}),N.jsxs("header",{className:"shell-header responsive-landing-header anim-fade-in-down",children:[N.jsxs(jm,{to:"/",style:{display:"flex",alignItems:"center",gap:"12px",textDecoration:"none",color:"inherit"},children:[N.jsx("div",{className:"panel-icon primary",style:{width:"42px",height:"42px",display:"flex",alignItems:"center",justifyContent:"center"},children:N.jsx(Tl,{size:22})}),N.jsx("span",{style:{fontWeight:800,fontSize:"1.75rem",letterSpacing:"-0.03em",background:"linear-gradient(135deg, var(--text), var(--accent))",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"Diamond"})]}),N.jsxs("div",{className:"landing-header-buttons",style:{display:"flex",alignItems:"center",gap:"12px"},children:[N.jsx(Sx,{}),N.jsx("button",{onClick:()=>n("client"),className:"btn btn-outline",style:{borderRadius:"var(--radius-sm)",padding:"8px 20px",fontWeight:600,fontSize:"0.85rem",display:"inline-flex",alignItems:"center",justifyContent:"center"},children:"Client Login"}),N.jsx("button",{onClick:()=>n("admin"),className:"btn btn-primary",style:{borderRadius:"var(--radius-sm)",padding:"8px 20px",fontWeight:600,fontSize:"0.85rem",background:"linear-gradient(135deg, var(--primary), var(--accent))",boxShadow:"0 4px 14px rgba(6, 182, 212, 0.3)",display:"inline-flex",alignItems:"center",justifyContent:"center"},children:"Admin Login"})]})]}),N.jsxs("main",{children:[N.jsxs("section",{className:"landing-hero-section",children:[N.jsxs("div",{className:"landing-two-col-grid",children:[N.jsxs("div",{style:{textAlign:"left"},children:[N.jsx(wn,{direction:"left",delay:100,children:N.jsxs("h1",{className:"landing-hero-title",style:{fontSize:"clamp(2.2rem, 5vw, 3.8rem)",fontWeight:800,lineHeight:1.15,letterSpacing:"-0.03em",marginBottom:"20px",textAlign:"left"},children:["Diamond File &",N.jsx("br",{}),N.jsx("span",{style:{background:"linear-gradient(135deg, var(--text), var(--accent))",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"Spreadsheet Management"})]})}),N.jsx(wn,{direction:"left",delay:200,children:N.jsx("p",{className:"landing-hero-desc",style:{fontSize:"1.15rem",color:"var(--text-secondary)",lineHeight:1.65,margin:"0 0 40px 0",textAlign:"left"},children:"Upload, validate, and process diamond inventory sheets with automated calculations for total weights, payouts, and client sheet histories."})}),N.jsx(wn,{direction:"up",delay:300,children:N.jsxs("div",{className:"landing-hero-ctas desktop-hero-ctas",style:{display:"flex",gap:"16px",justifyContent:"flex-start",marginTop:"28px"},children:[N.jsxs("button",{onClick:()=>n("client"),className:"btn btn-primary",style:{padding:"14px 32px",fontSize:"0.95rem",fontWeight:600,borderRadius:"var(--radius-sm)",background:"linear-gradient(135deg, var(--primary), var(--accent))",boxShadow:"0 8px 24px rgba(6, 182, 212, 0.3)",display:"inline-flex",alignItems:"center",justifyContent:"center"},children:["Client Console ",N.jsx(Km,{size:16,style:{marginLeft:"6px"}})]}),N.jsx("button",{onClick:()=>n("admin"),className:"btn btn-outline",style:{padding:"14px 32px",fontSize:"0.95rem",fontWeight:600,borderRadius:"var(--radius-sm)",display:"inline-flex",alignItems:"center",justifyContent:"center"},children:"Admin Control Center"})]})})]}),N.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",minWidth:0,overflow:"visible"},children:N.jsx(wn,{direction:"right",delay:400,style:{width:"100%",display:"flex",justifyContent:"center",minWidth:0},children:N.jsx(e2,{})})}),N.jsx(wn,{direction:"up",delay:300,className:"mobile-hero-ctas",style:{width:"100%"},children:N.jsxs("div",{className:"landing-hero-ctas",style:{display:"flex",gap:"16px",width:"100%"},children:[N.jsxs("button",{onClick:()=>n("client"),className:"btn btn-primary",style:{padding:"14px 32px",fontSize:"0.95rem",fontWeight:600,borderRadius:"var(--radius-sm)",background:"linear-gradient(135deg, var(--primary), var(--accent))",boxShadow:"0 8px 24px rgba(6, 182, 212, 0.3)",display:"inline-flex",alignItems:"center",justifyContent:"center"},children:["Client Console ",N.jsx(Km,{size:16,style:{marginLeft:"6px"}})]}),N.jsx("button",{onClick:()=>n("admin"),className:"btn btn-outline",style:{padding:"14px 32px",fontSize:"0.95rem",fontWeight:600,borderRadius:"var(--radius-sm)",display:"inline-flex",alignItems:"center",justifyContent:"center"},children:"Admin Control Center"})]})})]}),N.jsx("div",{className:"stats-wrapper",children:N.jsx(wn,{direction:"up",delay:500,children:N.jsx("div",{className:"landing-hero-stats",children:i.map((s,o)=>N.jsxs("div",{className:"anim-stat-pulse",style:{textAlign:"center"},children:[N.jsx("h2",{style:{fontSize:"2.8rem",fontWeight:800,margin:"0 0 6px 0",background:"linear-gradient(135deg, var(--text), var(--accent))",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:s.value}),N.jsx("span",{style:{fontSize:"0.9rem",color:"var(--text-secondary)",fontWeight:600},children:s.label})]},o))})})})]}),N.jsxs("section",{style:{padding:"80px 0",position:"relative",zIndex:10},children:[N.jsx("div",{style:{maxWidth:"1200px",margin:"0 auto",textAlign:"center",marginBottom:"40px",padding:"0 20px",width:"100%",boxSizing:"border-box"},children:N.jsxs(wn,{direction:"up",children:[N.jsx("h2",{style:{fontSize:"2.2rem",fontWeight:800,marginBottom:"12px"},children:"Automated Spreadsheet Operations"}),N.jsx("p",{style:{color:"var(--text-secondary)",maxWidth:"600px",margin:"0 auto"},children:"Explore how diamond spreadsheet records are seamlessly parsed, audited, and processed into secure statements."})]})}),N.jsxs("div",{className:"storytelling-container",children:[N.jsx(wn,{direction:"left",children:N.jsxs("div",{style:{padding:"20px"},children:[N.jsx("div",{style:{color:"var(--accent)",fontWeight:700,fontSize:"0.85rem",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:"12px"},children:"Phase 1: 3D Scan & Parameter Mapping"}),N.jsx("h3",{style:{fontSize:"1.8rem",fontWeight:800,marginBottom:"16px",color:"var(--text)"},children:"Intelligent 3D Geometry & Planning Analysis"}),N.jsx("p",{style:{color:"var(--text-secondary)",lineHeight:1.7,marginBottom:"20px"},children:"Seamlessly process advanced 3D scanning and cutting planning files. The system automatically parses crucial physical attributes—such as shape, carat weight, color, clarity grades, planning planes, and yield statistics—translating scanner outputs directly into standardized spreadsheet data."}),N.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[N.jsx("span",{style:{fontSize:"0.85rem",background:"var(--primary-bg)",color:"var(--accent-light)",padding:"6px 12px",borderRadius:"20px",fontWeight:600},children:"3D Scan Parsing"}),N.jsx("span",{style:{fontSize:"0.85rem",background:"var(--primary-bg)",color:"var(--accent-light)",padding:"6px 12px",borderRadius:"20px",fontWeight:600},children:"Parameter Extraction"}),N.jsx("span",{style:{fontSize:"0.85rem",background:"var(--primary-bg)",color:"var(--accent-light)",padding:"6px 12px",borderRadius:"20px",fontWeight:600},children:"Geometry Mapping"})]})]})}),N.jsx(wn,{direction:"right",children:N.jsxs("div",{className:"storytelling-image-wrapper shine-overlay",children:[N.jsx("img",{src:"/phase_1.png",alt:"3D diamond planning and scan interface showing shape, carat, color, clarity, and planning planes data"}),N.jsx("div",{className:"glow-line"})]})})]}),N.jsxs("div",{className:"storytelling-container mobile-reverse",children:[N.jsx(wn,{direction:"left",children:N.jsxs("div",{className:"storytelling-image-wrapper shine-overlay",children:[N.jsx("img",{src:"/phase_2.png",alt:"Conceptual diagram showing four distinct, colorful 3D faceted gems arranged in gold-bordered segments representing automated data categorization"}),N.jsx("div",{className:"glow-line"})]})}),N.jsx(wn,{direction:"right",children:N.jsxs("div",{style:{padding:"20px"},children:[N.jsx("div",{style:{color:"var(--accent)",fontWeight:700,fontSize:"0.85rem",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:"12px"},children:"Phase 2: Dynamic Parcel Categorization"}),N.jsx("h3",{style:{fontSize:"1.8rem",fontWeight:800,marginBottom:"16px",color:"var(--text)"},children:"Smart Multi-Parcel Sorting & Formatting"}),N.jsx("p",{style:{color:"var(--text-secondary)",lineHeight:1.7,marginBottom:"20px"},children:"Automatically categorize and sort raw spreadsheet entries into distinct, structured parcel segments based on physical attributes like shape, color, and carat weight brackets. The system maps complex inventory records into clean, color-coded classifications and generates individual yield reports on the fly."}),N.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[N.jsx("span",{style:{fontSize:"0.85rem",background:"var(--primary-bg)",color:"var(--accent-light)",padding:"6px 12px",borderRadius:"20px",fontWeight:600},children:"Parcel Segregation"}),N.jsx("span",{style:{fontSize:"0.85rem",background:"var(--primary-bg)",color:"var(--accent-light)",padding:"6px 12px",borderRadius:"20px",fontWeight:600},children:"Multi-Schema Formatting"}),N.jsx("span",{style:{fontSize:"0.85rem",background:"var(--primary-bg)",color:"var(--accent-light)",padding:"6px 12px",borderRadius:"20px",fontWeight:600},children:"Segmented Reports"})]})]})})]})]}),N.jsx("section",{style:{background:"rgba(6, 182, 212, 0.02)",borderTop:"1px solid var(--border-light)",borderBottom:"1px solid var(--border-light)",padding:"80px 20px",position:"relative",zIndex:10},children:N.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[N.jsx("div",{style:{textAlign:"center",marginBottom:"60px"},children:N.jsxs(wn,{direction:"up",children:[N.jsx("h2",{style:{fontSize:"2.2rem",fontWeight:800,marginBottom:"12px"},children:"The Automated File Processing Flow"}),N.jsx("p",{style:{color:"var(--text-secondary)",maxWidth:"500px",margin:"0 auto"},children:"See how files securely propagate from client submission to final database logging."})]})}),N.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))",gap:"30px",position:"relative"},children:r.map((s,o)=>N.jsx(wn,{direction:"up",delay:o*100,children:N.jsxs("div",{className:"anim-hover-lift",style:{background:"var(--bg-card)",backdropFilter:"var(--glass)",WebkitBackdropFilter:"var(--glass)",border:"1px solid var(--border-glass)",padding:"30px",borderRadius:"var(--radius-lg)",boxShadow:"var(--shadow)",position:"relative",height:"100%"},children:[N.jsx("div",{style:{position:"absolute",top:"20px",right:"24px",fontSize:"2.5rem",fontWeight:900,opacity:.07,fontFamily:"'Outfit', sans-serif"},children:s.num}),N.jsxs("h3",{style:{fontSize:"1.15rem",fontWeight:700,marginBottom:"12px",display:"flex",alignItems:"center",gap:"8px"},children:[N.jsx(z_,{size:18,className:"text-success"})," ",s.title]}),N.jsx("p",{style:{fontSize:"0.88rem",color:"var(--text-secondary)",lineHeight:1.55,margin:0},children:s.desc})]})},o))})]})})]}),N.jsxs("footer",{style:{background:"var(--bg-card)",backdropFilter:"var(--glass)",WebkitBackdropFilter:"var(--glass)",borderTop:"1px solid var(--border-glass)",padding:"60px 40px 30px 40px",position:"relative",zIndex:10,boxShadow:"0 -8px 32px rgba(6, 182, 212, 0.03)"},children:[N.jsx("div",{className:"mobile-footer-logo",children:N.jsx("div",{className:"panel-icon primary",style:{width:"32px",height:"32px",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"16px"},children:N.jsx(Tl,{size:16})})}),N.jsxs("div",{className:"landing-footer-grid",children:[N.jsxs("div",{children:[N.jsxs(jm,{to:"/",style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"16px",textDecoration:"none",color:"inherit"},children:[N.jsx("div",{className:"desktop-footer-logo-icon panel-icon primary",style:{width:"32px",height:"32px",display:"flex",alignItems:"center",justifyContent:"center"},children:N.jsx(Tl,{size:16})}),N.jsx("span",{style:{fontWeight:800,fontSize:"1.2rem",letterSpacing:"-0.02em",background:"linear-gradient(135deg, var(--text), var(--accent))",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"Diamond"})]}),N.jsx("p",{style:{fontSize:"0.85rem",color:"var(--text-secondary)",lineHeight:1.6,margin:0},children:"State-of-the-art diamond spreadsheet processing and operations management portal designed specifically for global merchants and manufacturers."})]}),N.jsxs("div",{children:[N.jsx("h4",{style:{fontSize:"0.9rem",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:"16px"},children:"System Portals"}),N.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px",fontSize:"0.85rem"},children:[N.jsx("button",{onClick:()=>n("client"),className:"footer-portal-btn",children:"Client Portal Login"}),N.jsx("button",{onClick:()=>n("admin"),className:"footer-portal-btn",children:"Admin Control Center"})]})]}),N.jsxs("div",{children:[N.jsx("h4",{style:{fontSize:"0.9rem",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:"16px"},children:"Company Resources"}),N.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px",fontSize:"0.85rem"},children:[N.jsx("span",{style:{color:"var(--text-secondary)"},children:"File Formatting Guides"}),N.jsx("span",{style:{color:"var(--text-secondary)"},children:"Spreadsheet Schema Specs"}),N.jsx("span",{style:{color:"var(--text-secondary)"},children:"Data Integration Manual"})]})]}),N.jsxs("div",{children:[N.jsx("h4",{style:{fontSize:"0.9rem",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:"16px"},children:"Operating Hours"}),N.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px",fontSize:"0.85rem",color:"var(--text-secondary)"},children:[N.jsxs("span",{children:["Monday – Friday: ",N.jsx("strong",{children:"9:00 AM – 6:00 PM"})]}),N.jsxs("span",{children:["Saturday: ",N.jsx("strong",{children:"9:00 AM – 2:00 PM"})]}),N.jsxs("span",{children:["Sunday: ",N.jsx("strong",{children:"Closed"})]}),N.jsxs("span",{children:["Timezone: ",N.jsx("strong",{children:"India (GMT+5:30)"})]})]})]})]}),N.jsxs("div",{style:{borderTop:"1px solid var(--border-light)",paddingTop:"24px",textAlign:"center",fontSize:"0.8rem",color:"var(--text-secondary)",display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:"16px",maxWidth:"1200px",margin:"0 auto"},children:[N.jsxs("span",{children:["© ",new Date().getFullYear()," Diamond System. All rights reserved."]}),N.jsxs("div",{style:{display:"flex",gap:"20px"},children:[N.jsx("span",{children:"Privacy Policy"}),N.jsx("span",{children:"Terms of Service"}),N.jsx("span",{children:"Security Statement"})]})]})]}),t.isOpen&&N.jsx(QP,{mode:t.mode,isModal:!0,onClose:()=>e({isOpen:!1,mode:"client"})})]})}const t2=te.lazy(()=>B_(()=>import("./AdminDashboardPage-B8y0Cujj.js"),__vite__mapDeps([0,1]))),n2=te.lazy(()=>B_(()=>import("./UserDashboardPage-yxZMwk7N.js"),__vite__mapDeps([2,1])));function m0({children:t,adminOnly:e=!1}){const n=localStorage.getItem("token"),i=localStorage.getItem("is_admin")==="true";return n?e&&!i?N.jsx(Yd,{to:"/dashboard",replace:!0}):t:N.jsx(Yd,{to:"/",replace:!0})}function i2(){return te.useEffect(()=>{const t=localStorage.getItem("theme")||"dark";document.documentElement.setAttribute("data-theme",t)},[]),N.jsx(te.Suspense,{fallback:N.jsx("div",{style:{padding:"1rem"},children:"Loading..."}),children:N.jsxs(_E,{children:[N.jsx(Ss,{path:"/",element:N.jsx(p0,{})}),N.jsx(Ss,{path:"/index",element:N.jsx(p0,{})}),N.jsx(Ss,{path:"/dashboard",element:N.jsx(m0,{children:N.jsx(n2,{})})}),N.jsx(Ss,{path:"/admin",element:N.jsx(m0,{adminOnly:!0,children:N.jsx(t2,{})})}),N.jsx(Ss,{path:"*",element:N.jsx(Yd,{to:"/",replace:!0})})]})})}td.createRoot(document.getElementById("root")).render(N.jsx(A0.StrictMode,{children:N.jsx(TE,{future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:N.jsx(i2,{})})}));export{z_ as C,vu as E,A0 as R,Sx as T,Ht as a,w2 as b,Dn as c,gu as d,r2 as e,Qx as g,N as j,te as r,Lc as u};
