let e;var t,r,n,i,o,s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function a(e,t){return function(){return e.apply(t,arguments)}}// utils is a library of generic helper functions non-specific to axios
const{toString:u}=Object.prototype,{getPrototypeOf:l}=Object,c=(t=Object.create(null),e=>{let r=u.call(e);return t[r]||(t[r]=r.slice(8,-1).toLowerCase())}),f=e=>(e=e.toLowerCase(),t=>c(t)===e),d=e=>t=>typeof t===e,{isArray:h}=Array,p=d("undefined"),y=f("ArrayBuffer"),g=d("string"),m=d("function"),b=d("number"),w=e=>null!==e&&"object"==typeof e,E=e=>{if("object"!==c(e))return!1;let t=l(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},v=f("Date"),L=f("File"),A=f("Blob"),S=f("FileList"),O=f("URLSearchParams");/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */function T(e,t,{allOwnKeys:r=!1}={}){let n,i;// Don't bother if no value provided
if(null!=e){if("object"!=typeof e&&/*eslint no-param-reassign:0*/(e=[e]),h(e))for(n=0,i=e.length;n<i;n++)t.call(null,e[n],n,e);else{let i;// Iterate over object keys
let o=r?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;for(n=0;n<s;n++)i=o[n],t.call(null,e[i],i,e)}}}function R(e,t){let r;t=t.toLowerCase();let n=Object.keys(e),i=n.length;for(;i-- >0;)if(t===(r=n[i]).toLowerCase())return r;return null}const U=/*eslint no-undef:0*/"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:s,B=e=>!p(e)&&e!==U,C=(r="undefined"!=typeof Uint8Array&&l(Uint8Array),e=>r&&e instanceof r),x=f("HTMLFormElement"),k=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),j=f("RegExp"),_=(e,t)=>{let r=Object.getOwnPropertyDescriptors(e),n={};T(r,(r,i)=>{let o;!1!==(o=t(r,i,e))&&(n[i]=o||r)}),Object.defineProperties(e,n)},N="abcdefghijklmnopqrstuvwxyz",P="0123456789",F={DIGIT:P,ALPHA:N,ALPHA_DIGIT:N+N.toUpperCase()+P},M=f("AsyncFunction");var D={isArray:h,isArrayBuffer:y,isBuffer:/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */function(e){return null!==e&&!p(e)&&null!==e.constructor&&!p(e.constructor)&&m(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||m(e.append)&&("formdata"===(t=c(e))||// detect form-data instance
"object"===t&&m(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&y(e.buffer)},isString:g,isNumber:b,isBoolean:e=>!0===e||!1===e,isObject:w,isPlainObject:E,isUndefined:p,isDate:v,isFile:L,isBlob:A,isRegExp:j,isFunction:m,isStream:e=>w(e)&&m(e.pipe),isURLSearchParams:O,isTypedArray:C,isFileList:S,forEach:T,merge:/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */function e(){let{caseless:t}=B(this)&&this||{},r={},n=(n,i)=>{let o=t&&R(r,i)||i;E(r[o])&&E(n)?r[o]=e(r[o],n):E(n)?r[o]=e({},n):h(n)?r[o]=n.slice():r[o]=n};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&T(arguments[e],n);return r},extend:(e,t,r,{allOwnKeys:n}={})=>(T(t,(t,n)=>{r&&m(t)?e[n]=a(t,r):e[n]=t},{allOwnKeys:n}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},toFlatObject:(e,t,r,n)=>{let i,o,s;let a={};// eslint-disable-next-line no-eq-null,eqeqeq
if(t=t||{},null==e)return t;do{for(o=(i=Object.getOwnPropertyNames(e)).length;o-- >0;)s=i[o],(!n||n(s,e,t))&&!a[s]&&(t[s]=e[s],a[s]=!0);e=!1!==r&&l(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype)return t},kindOf:c,kindOfTest:f,endsWith:(e,t,r)=>{e=String(e),(void 0===r||r>e.length)&&(r=e.length),r-=t.length;let n=e.indexOf(t,r);return -1!==n&&n===r},toArray:e=>{if(!e)return null;if(h(e))return e;let t=e.length;if(!b(t))return null;let r=Array(t);for(;t-- >0;)r[t]=e[t];return r},forEachEntry:(e,t)=>{let r;let n=e&&e[Symbol.iterator],i=n.call(e);for(;(r=i.next())&&!r.done;){let n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let r;let n=[];for(;null!==(r=e.exec(t));)n.push(r);return n},isHTMLForm:x,hasOwnProperty:k,hasOwnProp:k,reduceDescriptors:_,freezeMethods:e=>{_(e,(t,r)=>{// skip restricted props in strict mode
if(m(e)&&-1!==["arguments","caller","callee"].indexOf(r))return!1;let n=e[r];if(m(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},toObjectSet:(e,t)=>{let r={};return(e=>{e.forEach(e=>{r[e]=!0})})(h(e)?e:String(e).split(t)),r},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,t,r){return t.toUpperCase()+r}),noop:()=>{},toFiniteNumber:(e,t)=>Number.isFinite(e=+e)?e:t,findKey:R,global:U,isContextDefined:B,ALPHABET:F,generateString:(e=16,t=F.ALPHA_DIGIT)=>{let r="",{length:n}=t;for(;e--;)r+=t[Math.random()*n|0];return r},isSpecCompliantForm:/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */function(e){return!!(e&&m(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{let t=Array(10),r=(e,n)=>{if(w(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[n]=e;let i=h(e)?[]:{};return T(e,(e,t)=>{let o=r(e,n+1);p(o)||(i[t]=o)}),t[n]=void 0,i}}return e};return r(e,0)},isAsyncFn:M,isThenable:e=>e&&(w(e)||m(e))&&m(e.then)&&m(e.catch)};/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */function I(e,t,r,n,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),i&&(this.response=i)}D.inherits(I,Error,{toJSON:function(){return{// Standard
message:this.message,name:this.name,// Microsoft
description:this.description,number:this.number,// Mozilla
fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,// Axios
config:D.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const q=I.prototype,H={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{H[e]={value:e}}),Object.defineProperties(I,H),Object.defineProperty(q,"isAxiosError",{value:!0}),// eslint-disable-next-line func-names
I.from=(e,t,r,n,i,o)=>{let s=Object.create(q);return D.toFlatObject(e,s,function(e){return e!==Error.prototype},e=>"isAxiosError"!==e),I.call(s,e.message,t,r,n,i),s.cause=e,s.name=e.name,o&&Object.assign(s,o),s},n=function(e){// go through the array every three bytes, we'll deal with trailing stuff later
for(var t,r=e.length,n=r%3// if we have 1 byte left, pad 2 bytes
,i=[],o=0,s=r-n;o<s;o+=16383// must be multiple of 3
)i.push(function(e,t,r){for(var n,i=[],o=t;o<r;o+=3)i.push(z[(n=(e[o]<<16&16711680)+(e[o+1]<<8&65280)+(255&e[o+2]))>>18&63]+z[n>>12&63]+z[n>>6&63]+z[63&n]);return i.join("")}(e,o,o+16383>s?s:o+16383));return 1===n?i.push(z[(t=e[r-1])>>2]+z[t<<4&63]+"=="):2===n&&i.push(z[(t=(e[r-2]<<8)+e[r-1])>>10]+z[t>>4&63]+z[t<<2&63]+"="),i.join("")};for(var z=[],$=[],J="undefined"!=typeof Uint8Array?Uint8Array:Array,V="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",W=0,K=V.length;W<K;++W)z[W]=V[W],$[V.charCodeAt(W)]=W;// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
$["-".charCodeAt(0)]=62,$["_".charCodeAt(0)]=63,i=function(e,t,r,n,i){var o,s,a=8*i-n-1,u=(1<<a)-1,l=u>>1,c=-7,f=r?i-1:0,d=r?-1:1,h=e[t+f];for(f+=d,o=h&(1<<-c)-1,h>>=-c,c+=a;c>0;o=256*o+e[t+f],f+=d,c-=8);for(s=o&(1<<-c)-1,o>>=-c,c+=n;c>0;s=256*s+e[t+f],f+=d,c-=8);if(0===o)o=1-l;else{if(o===u)return s?NaN:(h?-1:1)*(1/0);s+=Math.pow(2,n),o-=l}return(h?-1:1)*s*Math.pow(2,o-n)},o=function(e,t,r,n,i,o){var s,a,u,l=8*o-i-1,c=(1<<l)-1,f=c>>1,d=23===i?5960464477539062e-23:0,h=n?0:o-1,p=n?1:-1,y=t<0||0===t&&1/t<0?1:0;for(isNaN(t=Math.abs(t))||t===1/0?(a=isNaN(t)?1:0,s=c):(s=Math.floor(Math.log(t)/Math.LN2),t*(u=Math.pow(2,-s))<1&&(s--,u*=2),s+f>=1?t+=d/u:t+=d*Math.pow(2,1-f),t*u>=2&&(s++,u/=2),s+f>=c?(a=0,s=c):s+f>=1?(a=(t*u-1)*Math.pow(2,i),s+=f):(a=t*Math.pow(2,f-1)*Math.pow(2,i),s=0));i>=8;e[r+h]=255&a,h+=p,a/=256,i-=8);for(s=s<<i|a,l+=i;l>0;e[r+h]=255&s,h+=p,s/=256,l-=8);e[r+h-p]|=128*y};var G="function"==typeof Symbol&&"function"// eslint-disable-line dot-notation
==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom")// eslint-disable-line dot-notation
:null;function Y(e){if(e>2147483647)throw RangeError('The value "'+e+'" is invalid for option "size"');// Return an augmented `Uint8Array` instance
var t=new Uint8Array(e);return Object.setPrototypeOf(t,X.prototype),t}/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */function X(e,t,r){// Common case.
if("number"==typeof e){if("string"==typeof t)throw TypeError('The "string" argument must be of type string. Received type number');return ee(e)}return Q(e,t,r)}function Q(e,t,r){if("string"==typeof e)return function(e,t){if(("string"!=typeof t||""===t)&&(t="utf8"),!X.isEncoding(t))throw TypeError("Unknown encoding: "+t);var r=0|ei(e,t),n=Y(r),i=n.write(e,t);return i!==r&&// cause everything after the first invalid character to be ignored. (e.g.
// 'abxxcd' will be treated as 'ab')
(n=n.slice(0,i)),n}(e,t);if(ArrayBuffer.isView(e))return function(e){if(ew(e,Uint8Array)){var t=new Uint8Array(e);return er(t.buffer,t.byteOffset,t.byteLength)}return et(e)}(e);if(null==e)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(ew(e,ArrayBuffer)||e&&ew(e.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(ew(e,SharedArrayBuffer)||e&&ew(e.buffer,SharedArrayBuffer)))return er(e,t,r);if("number"==typeof e)throw TypeError('The "value" argument must not be of type number. Received type number');var n=e.valueOf&&e.valueOf();if(null!=n&&n!==e)return X.from(n,t,r);var i=function(e){if(X.isBuffer(e)){var t,r=0|en(e.length),n=Y(r);return 0===n.length||e.copy(n,0,0,r),n}return void 0!==e.length?"number"!=typeof e.length||(t=e.length)!=t// eslint-disable-line no-self-compare
?Y(0):et(e):"Buffer"===e.type&&Array.isArray(e.data)?et(e.data):void 0}(e);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return X.from(e[Symbol.toPrimitive]("string"),t,r);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function Z(e){if("number"!=typeof e)throw TypeError('"size" argument must be of type number');if(e<0)throw RangeError('The value "'+e+'" is invalid for option "size"')}function ee(e){return Z(e),Y(e<0?0:0|en(e))}function et(e){for(var t=e.length<0?0:0|en(e.length),r=Y(t),n=0;n<t;n+=1)r[n]=255&e[n];return r}function er(e,t,r){var n;if(t<0||e.byteLength<t)throw RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw RangeError('"length" is outside of buffer bounds');return(// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(n=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),X.prototype),n)}function en(e){// Note: cannot use `length < K_MAX_LENGTH` here because that fails when
// length is NaN (which is otherwise coerced to zero.)
if(e>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|e}function ei(e,t){if(X.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||ew(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var r=e.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;for(// Use a for loop to avoid recursion
var i=!1;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return eg(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return em(e).length;default:if(i)return n?-1:eg(e).length// assume utf8
;t=(""+t).toLowerCase(),i=!0}}function eo(e,t,r){var i,o,s=!1;// Return early if start > this.length. Done here to prevent potential uint32
// coercion fail below.
if((void 0===t||t<0)&&(t=0),t>this.length||((void 0===r||r>this.length)&&(r=this.length),r<=0||// Force coercion to uint32. This will also coerce falsey/NaN values to 0.
(r>>>=0)<=(t>>>=0)))return"";for(e||(e="utf8");;)switch(e){case"hex":return function(e,t,r){var n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);for(var i="",o=t;o<r;++o)i+=eE[e[o]];return i}(this,t,r);case"utf8":case"utf-8":return el(this,t,r);case"ascii":return function(e,t,r){var n="";r=Math.min(e.length,r);for(var i=t;i<r;++i)n+=String.fromCharCode(127&e[i]);return n}(this,t,r);case"latin1":case"binary":return function(e,t,r){var n="";r=Math.min(e.length,r);for(var i=t;i<r;++i)n+=String.fromCharCode(e[i]);return n}(this,t,r);case"base64":return i=t,o=r,0===i&&o===this.length?n(this):n(this.slice(i,o));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(e,t,r){// If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
for(var n=e.slice(t,r),i="",o=0;o<n.length-1;o+=2)i+=String.fromCharCode(n[o]+256*n[o+1]);return i}(this,t,r);default:if(s)throw TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),s=!0}}function es(e,t,r){var n=e[t];e[t]=e[r],e[r]=n}// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function ea(e,t,r,n,i){var o;// Empty buffer means no match
if(0===e.length)return -1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),(o=r=+r// Coerce to Number.
)!=o&&(r=i?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(i)return -1;r=e.length-1}else if(r<0){if(!i)return -1;r=0}// Finally, search either indexOf (if dir is true) or lastIndexOf
if("string"==typeof t&&(t=X.from(t,n)),X.isBuffer(t))return(// Special case: looking for empty string/buffer always fails
0===t.length?-1:eu(e,t,r,n,i));if("number"==typeof t)return(t&=255// Search for a byte value [0-255]
,"function"==typeof Uint8Array.prototype.indexOf)?i?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):eu(e,[t],r,n,i);throw TypeError("val must be string, number or Buffer")}function eu(e,t,r,n,i){var o,s=1,a=e.length,u=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return -1;s=2,a/=2,u/=2,r/=2}function l(e,t){return 1===s?e[t]:e.readUInt16BE(t*s)}if(i){var c=-1;for(o=r;o<a;o++)if(l(e,o)===l(t,-1===c?0:o-c)){if(-1===c&&(c=o),o-c+1===u)return c*s}else -1!==c&&(o-=o-c),c=-1}else for(r+u>a&&(r=a-u),o=r;o>=0;o--){for(var f=!0,d=0;d<u;d++)if(l(e,o+d)!==l(t,d)){f=!1;break}if(f)return o}return -1}function el(e,t,r){r=Math.min(e.length,r);for(var n=[],i=t;i<r;){var o,s,a,u,l=e[i],c=null,f=l>239?4:l>223?3:l>191?2:1;if(i+f<=r)switch(f){case 1:l<128&&(c=l);break;case 2:(192&(o=e[i+1]))==128&&(u=(31&l)<<6|63&o)>127&&(c=u);break;case 3:o=e[i+1],s=e[i+2],(192&o)==128&&(192&s)==128&&(u=(15&l)<<12|(63&o)<<6|63&s)>2047&&(u<55296||u>57343)&&(c=u);break;case 4:o=e[i+1],s=e[i+2],a=e[i+3],(192&o)==128&&(192&s)==128&&(192&a)==128&&(u=(15&l)<<18|(63&o)<<12|(63&s)<<6|63&a)>65535&&u<1114112&&(c=u)}null===c?(// we did not generate a valid codePoint so insert a
// replacement char (U+FFFD) and advance only 1 byte
c=65533,f=1):c>65535&&(// encode to utf16 (surrogate pair dance)
c-=65536,n.push(c>>>10&1023|55296),c=56320|1023&c),n.push(c),i+=f}return function(e){var t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e)// avoid extra slice()
;for(// Decode in chunks to avoid "call stack size exceeded".
var r="",n=0;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=4096));return r}(n)}/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */function ec(e,t,r){if(e%1!=0||e<0)throw RangeError("offset is not uint");if(e+t>r)throw RangeError("Trying to access beyond buffer length")}function ef(e,t,r,n,i,o){if(!X.isBuffer(e))throw TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<o)throw RangeError('"value" argument is out of bounds');if(r+n>e.length)throw RangeError("Index out of range")}function ed(e,t,r,n,i,o){if(r+n>e.length||r<0)throw RangeError("Index out of range")}function eh(e,t,r,n,i){return t=+t,r>>>=0,i||ed(e,t,r,4,34028234663852886e22,-34028234663852886e22),o(e,t,r,n,23,4),r+4}function ep(e,t,r,n,i){return t=+t,r>>>=0,i||ed(e,t,r,8,17976931348623157e292,-17976931348623157e292),o(e,t,r,n,52,8),r+8}/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */X.TYPED_ARRAY_SUPPORT=function(){// Can typed array instances can be augmented?
try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),X.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(X.prototype,"parent",{enumerable:!0,get:function(){if(X.isBuffer(this))return this.buffer}}),Object.defineProperty(X.prototype,"offset",{enumerable:!0,get:function(){if(X.isBuffer(this))return this.byteOffset}}),X.poolSize=8192// not used by this implementation
,/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/X.from=function(e,t,r){return Q(e,t,r)},// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(X.prototype,Uint8Array.prototype),Object.setPrototypeOf(X,Uint8Array),/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/X.alloc=function(e,t,r){return(Z(e),e<=0)?Y(e):void 0!==t?"string"==typeof r?Y(e).fill(t,r):Y(e).fill(t):Y(e)},/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */X.allocUnsafe=function(e){return ee(e)},/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */X.allocUnsafeSlow=function(e){return ee(e)},X.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==X.prototype// so Buffer.isBuffer(Buffer.prototype) will be false
},X.compare=function(e,t){if(ew(e,Uint8Array)&&(e=X.from(e,e.offset,e.byteLength)),ew(t,Uint8Array)&&(t=X.from(t,t.offset,t.byteLength)),!X.isBuffer(e)||!X.isBuffer(t))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var r=e.length,n=t.length,i=0,o=Math.min(r,n);i<o;++i)if(e[i]!==t[i]){r=e[i],n=t[i];break}return r<n?-1:n<r?1:0},X.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},X.concat=function(e,t){if(!Array.isArray(e))throw TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return X.alloc(0);if(void 0===t)for(r=0,t=0;r<e.length;++r)t+=e[r].length;var r,n=X.allocUnsafe(t),i=0;for(r=0;r<e.length;++r){var o=e[r];if(ew(o,Uint8Array))i+o.length>n.length?X.from(o).copy(n,i):Uint8Array.prototype.set.call(n,o,i);else if(X.isBuffer(o))o.copy(n,i);else throw TypeError('"list" argument must be an Array of Buffers');i+=o.length}return n},X.byteLength=ei,// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
X.prototype._isBuffer=!0,X.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)es(this,t,t+1);return this},X.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)es(this,t,t+3),es(this,t+1,t+2);return this},X.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)es(this,t,t+7),es(this,t+1,t+6),es(this,t+2,t+5),es(this,t+3,t+4);return this},X.prototype.toString=function(){var e=this.length;return 0===e?"":0==arguments.length?el(this,0,e):eo.apply(this,arguments)},X.prototype.toLocaleString=X.prototype.toString,X.prototype.equals=function(e){if(!X.isBuffer(e))throw TypeError("Argument must be a Buffer");return this===e||0===X.compare(this,e)},X.prototype.inspect=function(){var e="";return e=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(e+=" ... "),"<Buffer "+e+">"},G&&(X.prototype[G]=X.prototype.inspect),X.prototype.compare=function(e,t,r,n,i){if(ew(e,Uint8Array)&&(e=X.from(e,e.offset,e.byteLength)),!X.isBuffer(e))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),t<0||r>e.length||n<0||i>this.length)throw RangeError("out of range index");if(n>=i&&t>=r)return 0;if(n>=i)return -1;if(t>=r)return 1;if(t>>>=0,r>>>=0,n>>>=0,i>>>=0,this===e)return 0;for(var o=i-n,s=r-t,a=Math.min(o,s),u=this.slice(n,i),l=e.slice(t,r),c=0;c<a;++c)if(u[c]!==l[c]){o=u[c],s=l[c];break}return o<s?-1:s<o?1:0},X.prototype.includes=function(e,t,r){return -1!==this.indexOf(e,t,r)},X.prototype.indexOf=function(e,t,r){return ea(this,e,t,r,!0)},X.prototype.lastIndexOf=function(e,t,r){return ea(this,e,t,r,!1)},X.prototype.write=function(e,t,r,n){// Buffer#write(string)
if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else if(isFinite(t))t>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var i,o,s,a,u,l,c,f,d=this.length-t;if((void 0===r||r>d)&&(r=d),e.length>0&&(r<0||t<0)||t>this.length)throw RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var h=!1;;)switch(n){case"hex":return function(e,t,r,n){r=Number(r)||0;var i=e.length-r;n?(n=Number(n))>i&&(n=i):n=i;var o=t.length;n>o/2&&(n=o/2);for(var s=0;s<n;++s){var a=parseInt(t.substr(2*s,2),16);if(a!=a)break;e[r+s]=a}return s}(this,e,t,r);case"utf8":case"utf-8":return i=t,o=r,eb(eg(e,this.length-i),this,i,o);case"ascii":case"latin1":case"binary":return s=t,a=r,eb(function(e){for(var t=[],r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(e),this,s,a);case"base64":// Warning: maxLength not taken into account in base64Write
return u=t,l=r,eb(em(e),this,u,l);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return c=t,f=r,eb(function(e,t){for(var r,n,i=[],o=0;o<e.length&&!((t-=2)<0);++o)n=(r=e.charCodeAt(o))>>8,i.push(r%256),i.push(n);return i}(e,this.length-c),this,c,f);default:if(h)throw TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),h=!0}},X.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},X.prototype.slice=function(e,t){var r=this.length;e=~~e,t=void 0===t?r:~~t,e<0?(e+=r)<0&&(e=0):e>r&&(e=r),t<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);var n=this.subarray(e,t);return(// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(n,X.prototype),n)},X.prototype.readUintLE=X.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||ec(e,t,this.length);for(var n=this[e],i=1,o=0;++o<t&&(i*=256);)n+=this[e+o]*i;return n},X.prototype.readUintBE=X.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||ec(e,t,this.length);for(var n=this[e+--t],i=1;t>0&&(i*=256);)n+=this[e+--t]*i;return n},X.prototype.readUint8=X.prototype.readUInt8=function(e,t){return e>>>=0,t||ec(e,1,this.length),this[e]},X.prototype.readUint16LE=X.prototype.readUInt16LE=function(e,t){return e>>>=0,t||ec(e,2,this.length),this[e]|this[e+1]<<8},X.prototype.readUint16BE=X.prototype.readUInt16BE=function(e,t){return e>>>=0,t||ec(e,2,this.length),this[e]<<8|this[e+1]},X.prototype.readUint32LE=X.prototype.readUInt32LE=function(e,t){return e>>>=0,t||ec(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},X.prototype.readUint32BE=X.prototype.readUInt32BE=function(e,t){return e>>>=0,t||ec(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},X.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||ec(e,t,this.length);for(var n=this[e],i=1,o=0;++o<t&&(i*=256);)n+=this[e+o]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*t)),n},X.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||ec(e,t,this.length);for(var n=t,i=1,o=this[e+--n];n>0&&(i*=256);)o+=this[e+--n]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*t)),o},X.prototype.readInt8=function(e,t){return(e>>>=0,t||ec(e,1,this.length),128&this[e])?-((255-this[e]+1)*1):this[e]},X.prototype.readInt16LE=function(e,t){e>>>=0,t||ec(e,2,this.length);var r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},X.prototype.readInt16BE=function(e,t){e>>>=0,t||ec(e,2,this.length);var r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},X.prototype.readInt32LE=function(e,t){return e>>>=0,t||ec(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},X.prototype.readInt32BE=function(e,t){return e>>>=0,t||ec(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},X.prototype.readFloatLE=function(e,t){return e>>>=0,t||ec(e,4,this.length),i(this,e,!0,23,4)},X.prototype.readFloatBE=function(e,t){return e>>>=0,t||ec(e,4,this.length),i(this,e,!1,23,4)},X.prototype.readDoubleLE=function(e,t){return e>>>=0,t||ec(e,8,this.length),i(this,e,!0,52,8)},X.prototype.readDoubleBE=function(e,t){return e>>>=0,t||ec(e,8,this.length),i(this,e,!1,52,8)},X.prototype.writeUintLE=X.prototype.writeUIntLE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){var i=Math.pow(2,8*r)-1;ef(this,e,t,r,i,0)}var o=1,s=0;for(this[t]=255&e;++s<r&&(o*=256);)this[t+s]=e/o&255;return t+r},X.prototype.writeUintBE=X.prototype.writeUIntBE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){var i=Math.pow(2,8*r)-1;ef(this,e,t,r,i,0)}var o=r-1,s=1;for(this[t+o]=255&e;--o>=0&&(s*=256);)this[t+o]=e/s&255;return t+r},X.prototype.writeUint8=X.prototype.writeUInt8=function(e,t,r){return e=+e,t>>>=0,r||ef(this,e,t,1,255,0),this[t]=255&e,t+1},X.prototype.writeUint16LE=X.prototype.writeUInt16LE=function(e,t,r){return e=+e,t>>>=0,r||ef(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},X.prototype.writeUint16BE=X.prototype.writeUInt16BE=function(e,t,r){return e=+e,t>>>=0,r||ef(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},X.prototype.writeUint32LE=X.prototype.writeUInt32LE=function(e,t,r){return e=+e,t>>>=0,r||ef(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},X.prototype.writeUint32BE=X.prototype.writeUInt32BE=function(e,t,r){return e=+e,t>>>=0,r||ef(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},X.prototype.writeIntLE=function(e,t,r,n){if(e=+e,t>>>=0,!n){var i=Math.pow(2,8*r-1);ef(this,e,t,r,i-1,-i)}var o=0,s=1,a=0;for(this[t]=255&e;++o<r&&(s*=256);)e<0&&0===a&&0!==this[t+o-1]&&(a=1),this[t+o]=(e/s>>0)-a&255;return t+r},X.prototype.writeIntBE=function(e,t,r,n){if(e=+e,t>>>=0,!n){var i=Math.pow(2,8*r-1);ef(this,e,t,r,i-1,-i)}var o=r-1,s=1,a=0;for(this[t+o]=255&e;--o>=0&&(s*=256);)e<0&&0===a&&0!==this[t+o+1]&&(a=1),this[t+o]=(e/s>>0)-a&255;return t+r},X.prototype.writeInt8=function(e,t,r){return e=+e,t>>>=0,r||ef(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},X.prototype.writeInt16LE=function(e,t,r){return e=+e,t>>>=0,r||ef(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},X.prototype.writeInt16BE=function(e,t,r){return e=+e,t>>>=0,r||ef(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},X.prototype.writeInt32LE=function(e,t,r){return e=+e,t>>>=0,r||ef(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},X.prototype.writeInt32BE=function(e,t,r){return e=+e,t>>>=0,r||ef(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},X.prototype.writeFloatLE=function(e,t,r){return eh(this,e,t,!0,r)},X.prototype.writeFloatBE=function(e,t,r){return eh(this,e,t,!1,r)},X.prototype.writeDoubleLE=function(e,t,r){return ep(this,e,t,!0,r)},X.prototype.writeDoubleBE=function(e,t,r){return ep(this,e,t,!1,r)},// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
X.prototype.copy=function(e,t,r,n){if(!X.isBuffer(e))throw TypeError("argument should be a Buffer");// Copy 0 bytes; we're done
if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r||0===e.length||0===this.length)return 0;// Fatal error conditions
if(t<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("Index out of range");if(n<0)throw RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);var i=n-r;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,r,n):Uint8Array.prototype.set.call(e,this.subarray(r,n),t),i},// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
X.prototype.fill=function(e,t,r,n){// Handle string cases:
if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw TypeError("encoding must be a string");if("string"==typeof n&&!X.isEncoding(n))throw TypeError("Unknown encoding: "+n);if(1===e.length){var i,o=e.charCodeAt(0);("utf8"===n&&o<128||"latin1"===n)&&(e=o)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));// Invalid ranges are not set to a default, so can range check early.
if(t<0||this.length<t||this.length<r)throw RangeError("Out of range index");if(r<=t)return this;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(i=t;i<r;++i)this[i]=e;else{var s=X.isBuffer(e)?e:X.from(e,n),a=s.length;if(0===a)throw TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<r-t;++i)this[i+t]=s[i%a]}return this};// HELPER FUNCTIONS
// ================
var ey=/[^+/0-9A-Za-z-_]/g;function eg(e,t){t=t||1/0;for(var r,n=e.length,i=null,o=[],s=0;s<n;++s){// is surrogate component
if((r=e.charCodeAt(s))>55295&&r<57344){// last char was a lead
if(!i){// no lead yet
if(r>56319||s+1===n){// unexpected trail
(t-=3)>-1&&o.push(239,191,189);continue}// valid lead
i=r;continue}// 2 leads in a row
if(r<56320){(t-=3)>-1&&o.push(239,191,189),i=r;continue}// valid surrogate pair
r=(i-55296<<10|r-56320)+65536}else i&&(t-=3)>-1&&o.push(239,191,189);// encode utf8
if(i=null,r<128){if((t-=1)<0)break;o.push(r)}else if(r<2048){if((t-=2)<0)break;o.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;o.push(r>>12|224,r>>6&63|128,63&r|128)}else if(r<1114112){if((t-=4)<0)break;o.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}else throw Error("Invalid code point")}return o}function em(e){return function(e){var t,r,n=function(e){var t=e.length;if(t%4>0)throw Error("Invalid string. Length must be a multiple of 4");// Trim off extra bytes after placeholder bytes are found
// See: https://github.com/beatgammit/base64-js/issues/42
var r=e.indexOf("=");-1===r&&(r=t);var n=r===t?0:4-r%4;return[r,n]}(e),i=n[0],o=n[1],s=new J((i+o)*3/4-o),a=0,u=o>0?i-4:i;for(r=0;r<u;r+=4)t=$[e.charCodeAt(r)]<<18|$[e.charCodeAt(r+1)]<<12|$[e.charCodeAt(r+2)]<<6|$[e.charCodeAt(r+3)],s[a++]=t>>16&255,s[a++]=t>>8&255,s[a++]=255&t;return 2===o&&(t=$[e.charCodeAt(r)]<<2|$[e.charCodeAt(r+1)]>>4,s[a++]=255&t),1===o&&(t=$[e.charCodeAt(r)]<<10|$[e.charCodeAt(r+1)]<<4|$[e.charCodeAt(r+2)]>>2,s[a++]=t>>8&255,s[a++]=255&t),s}(function(e){// Node converts strings with length < 2 to ''
if(// Node strips out invalid characters like \n and \t from the string, base64-js does not
(e=// Node takes equal signs as end of the Base64 encoding
(e=e.split("=")[0]).trim().replace(ey,"")).length<2)return"";// Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
for(;e.length%4!=0;)e+="=";return e}(e))}function eb(e,t,r,n){for(var i=0;i<n&&!(i+r>=t.length)&&!(i>=e.length);++i)t[i+r]=e[i];return i}// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function ew(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
var eE=function(){for(var e="0123456789abcdef",t=Array(256),r=0;r<16;++r)for(var n=16*r,i=0;i<16;++i)t[n+i]=e[r]+e[i];return t}();/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */function ev(e){return D.isPlainObject(e)||D.isArray(e)}/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */function eL(e){return D.endsWith(e,"[]")?e.slice(0,-2):e}/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */function eA(e,t,r){return e?e.concat(t).map(function(e,t){return(// eslint-disable-next-line no-param-reassign
e=eL(e),!r&&t?"["+e+"]":e)}).join(r?".":""):t}const eS=D.toFlatObject(D,{},null,function(e){return/^is[A-Z]/.test(e)});var eO=/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **//**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */function(e,t,r){if(!D.isObject(e))throw TypeError("target must be an object");// eslint-disable-next-line no-param-reassign
t=t||new FormData,// eslint-disable-next-line no-param-reassign
r=D.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(e,t){// eslint-disable-next-line no-eq-null,eqeqeq
return!D.isUndefined(t[e])});let n=r.metaTokens,i=r.visitor||c,o=r.dots,s=r.indexes,a=r.Blob||"undefined"!=typeof Blob&&Blob,u=a&&D.isSpecCompliantForm(t);if(!D.isFunction(i))throw TypeError("visitor must be a function");function l(e){if(null===e)return"";if(D.isDate(e))return e.toISOString();if(!u&&D.isBlob(e))throw new I("Blob is not supported. Use a Buffer instead.");return D.isArrayBuffer(e)||D.isTypedArray(e)?u&&"function"==typeof Blob?new Blob([e]):X.from(e):e}/**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */function c(e,r,i){let a=e;if(e&&!i&&"object"==typeof e){if(D.endsWith(r,"{}"))// eslint-disable-next-line no-param-reassign
r=n?r:r.slice(0,-2),// eslint-disable-next-line no-param-reassign
e=JSON.stringify(e);else{var u;if(D.isArray(e)&&(u=e,D.isArray(u)&&!u.some(ev))||(D.isFileList(e)||D.endsWith(r,"[]"))&&(a=D.toArray(e)))return(// eslint-disable-next-line no-param-reassign
r=eL(r),a.forEach(function(e,n){D.isUndefined(e)||null===e||t.append(!0===s?eA([r],n,o):null===s?r:r+"[]",l(e))}),!1)}}return!!ev(e)||(t.append(eA(i,r,o),l(e)),!1)}let f=[],d=Object.assign(eS,{defaultVisitor:c,convertValue:l,isVisitable:ev});if(!D.isObject(e))throw TypeError("data must be an object");return!function e(r,n){if(!D.isUndefined(r)){if(-1!==f.indexOf(r))throw Error("Circular reference detected in "+n.join("."));f.push(r),D.forEach(r,function(r,o){let s=!(D.isUndefined(r)||null===r)&&i.call(t,r,D.isString(o)?o.trim():o,n,d);!0===s&&e(r,n?n.concat(o):[o])}),f.pop()}}(e),t};/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */function eT(e){let t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\x00"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(e){return t[e]})}/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */function eR(e,t){this._pairs=[],e&&eO(e,this,t)}const eU=eR.prototype;/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */function eB(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function eC(e,t,r){let n;/*eslint no-param-reassign:0*/if(!t)return e;let i=r&&r.encode||eB,o=r&&r.serialize;if(n=o?o(t,r):D.isURLSearchParams(t)?t.toString():new eR(t,r).toString(i)){let t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+n}return e}eU.append=function(e,t){this._pairs.push([e,t])},eU.toString=function(e){let t=e?function(t){return e.call(this,t,eT)}:eT;return this._pairs.map(function(e){return t(e[0])+"="+t(e[1])},"").join("&")};var ex=class{constructor(){this.handlers=[]}/**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */use(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1}/**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */eject(e){this.handlers[e]&&(this.handlers[e]=null)}/**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */clear(){this.handlers&&(this.handlers=[])}/**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */forEach(e){D.forEach(this.handlers,function(t){null!==t&&e(t)})}},ek={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ej="undefined"!=typeof URLSearchParams?URLSearchParams:eR,e_="undefined"!=typeof FormData?FormData:null,eN="undefined"!=typeof Blob?Blob:null;/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */const eP=("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&"undefined"!=typeof window&&"undefined"!=typeof document,eF="undefined"!=typeof WorkerGlobalScope&&// eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts;var eM={classes:{URLSearchParams:ej,FormData:e_,Blob:eN},isStandardBrowserEnv:eP,isStandardBrowserWebWorkerEnv:eF,protocols:["http","https","file","blob","url","data"]},eD=/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */function(e){if(D.isFormData(e)&&D.isFunction(e.entries)){let t={};return D.forEachEntry(e,(e,r)=>{!function e(t,r,n,i){let o=t[i++],s=Number.isFinite(+o),a=i>=t.length;if(o=!o&&D.isArray(n)?n.length:o,a)return D.hasOwnProp(n,o)?n[o]=[n[o],r]:n[o]=r,!s;n[o]&&D.isObject(n[o])||(n[o]=[]);let u=e(t,r,n[o],i);return u&&D.isArray(n[o])&&(n[o]=/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */function(e){let t,r;let n={},i=Object.keys(e),o=i.length;for(t=0;t<o;t++)n[r=i[t]]=e[r];return n}(n[o])),!s}(D.matchAll(/\w+|\[(\w*)]/g,e).map(e=>"[]"===e[0]?"":e[1]||e[0]),r,t,0)}),t}return null};const eI={transitional:ek,adapter:eM.isNode?"http":"xhr",transformRequest:[function(e,t){let r;let n=t.getContentType()||"",i=n.indexOf("application/json")>-1,o=D.isObject(e);o&&D.isHTMLForm(e)&&(e=new FormData(e));let s=D.isFormData(e);if(s)return i&&i?JSON.stringify(eD(e)):e;if(D.isArrayBuffer(e)||D.isBuffer(e)||D.isStream(e)||D.isFile(e)||D.isBlob(e))return e;if(D.isArrayBufferView(e))return e.buffer;if(D.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1){var a,u;return(a=e,u=this.formSerializer,eO(a,new eM.classes.URLSearchParams,Object.assign({visitor:function(e,t,r,n){return eM.isNode&&D.isBuffer(e)?(this.append(t,e.toString("base64")),!1):n.defaultVisitor.apply(this,arguments)}},u))).toString()}if((r=D.isFileList(e))||n.indexOf("multipart/form-data")>-1){let t=this.env&&this.env.FormData;return eO(r?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||i?(t.setContentType("application/json",!1),/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */function(e,t,r){if(D.isString(e))try{return(0,JSON.parse)(e),D.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){let t=this.transitional||eI.transitional,r=t&&t.forcedJSONParsing,n="json"===this.responseType;if(e&&D.isString(e)&&(r&&!this.responseType||n)){let r=t&&t.silentJSONParsing;try{return JSON.parse(e)}catch(e){if(!r&&n){if("SyntaxError"===e.name)throw I.from(e,I.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],/**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:eM.classes.FormData,Blob:eM.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};D.forEach(["delete","get","head","post","put","patch"],e=>{eI.headers[e]={}});// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const eq=D.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var /**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */eH=e=>{let t,r,n;let i={};return e&&e.split("\n").forEach(function(e){n=e.indexOf(":"),t=e.substring(0,n).trim().toLowerCase(),r=e.substring(n+1).trim(),!t||i[t]&&eq[t]||("set-cookie"===t?i[t]?i[t].push(r):i[t]=[r]:i[t]=i[t]?i[t]+", "+r:r)}),i};const ez=Symbol("internals");function e$(e){return e&&String(e).trim().toLowerCase()}function eJ(e){return!1===e||null==e?e:D.isArray(e)?e.map(eJ):String(e)}const eV=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function eW(e,t,r,n,i){if(D.isFunction(n))return n.call(this,t,r);if(i&&(t=r),D.isString(t)){if(D.isString(n))return -1!==t.indexOf(n);if(D.isRegExp(n))return n.test(t)}}class eK{constructor(e){e&&this.set(e)}set(e,t,r){let n=this;function i(e,t,r){let i=e$(t);if(!i)throw Error("header name must be a non-empty string");let o=D.findKey(n,i);o&&void 0!==n[o]&&!0!==r&&(void 0!==r||!1===n[o])||(n[o||t]=eJ(e))}let o=(e,t)=>D.forEach(e,(e,r)=>i(e,r,t));return D.isPlainObject(e)||e instanceof this.constructor?o(e,t):D.isString(e)&&(e=e.trim())&&!eV(e)?o(eH(e),t):null!=e&&i(t,e,r),this}get(e,t){if(e=e$(e)){let r=D.findKey(this,e);if(r){let e=this[r];if(!t)return e;if(!0===t)return function(e){let t;let r=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;for(;t=n.exec(e);)r[t[1]]=t[2];return r}(e);if(D.isFunction(t))return t.call(this,e,r);if(D.isRegExp(t))return t.exec(e);throw TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=e$(e)){let r=D.findKey(this,e);return!!(r&&void 0!==this[r]&&(!t||eW(this,this[r],r,t)))}return!1}delete(e,t){let r=this,n=!1;function i(e){if(e=e$(e)){let i=D.findKey(r,e);i&&(!t||eW(r,r[i],i,t))&&(delete r[i],n=!0)}}return D.isArray(e)?e.forEach(i):i(e),n}clear(e){let t=Object.keys(this),r=t.length,n=!1;for(;r--;){let i=t[r];(!e||eW(this,this[i],i,e,!0))&&(delete this[i],n=!0)}return n}normalize(e){let t=this,r={};return D.forEach(this,(n,i)=>{let o=D.findKey(r,i);if(o){t[o]=eJ(n),delete t[i];return}let s=e?i.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,r)=>t.toUpperCase()+r):String(i).trim();s!==i&&delete t[i],t[s]=eJ(n),r[s]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){let t=Object.create(null);return D.forEach(this,(r,n)=>{null!=r&&!1!==r&&(t[n]=e&&D.isArray(r)?r.join(", "):r)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){let r=new this(e);return t.forEach(e=>r.set(e)),r}static accessor(e){let t=this[ez]=this[ez]={accessors:{}},r=t.accessors,n=this.prototype;function i(e){let t=e$(e);r[t]||(!function(e,t){let r=D.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(e,r,i){return this[n].call(this,t,e,r,i)},configurable:!0})})}(n,e),r[t]=!0)}return D.isArray(e)?e.forEach(i):i(e),this}}function eG(e,t){let r=this||eI,n=t||r,i=eK.from(n.headers),o=n.data;return D.forEach(e,function(e){o=e.call(r,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function eY(e){return!!(e&&e.__CANCEL__)}/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */function eX(e,t,r){I.call(this,null==e?"canceled":e,I.ERR_CANCELED,t,r),this.name="CanceledError"}eK.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),D.reduceDescriptors(eK.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);// map `set` => `Set`
return{get:()=>e,set(e){this[r]=e}}}),D.freezeMethods(eK),D.inherits(eX,I,{__CANCEL__:!0});var eQ=eM.isStandardBrowserEnv?{write:function(e,t,r,n,i,o){let s=[];s.push(e+"="+encodeURIComponent(t)),D.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),D.isString(n)&&s.push("path="+n),D.isString(i)&&s.push("domain="+i),!0===o&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){let t=document.cookie.match(RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function eZ(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e:t}var e0=eM.isStandardBrowserEnv?// whether the request URL is of the same origin as current location.
function(){let e;let t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");/**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */function n(e){let n=e;// urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
return t&&(// IE needs attribute set twice to normalize properties
r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}/**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */return e=n(window.location.href),function(t){let r=D.isString(t)?n(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0},e1=/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */function(e,t){let r;e=e||10;let n=Array(e),i=Array(e),o=0,s=0;return t=void 0!==t?t:1e3,function(a){let u=Date.now(),l=i[s];r||(r=u),n[o]=a,i[o]=u;let c=s,f=0;for(;c!==o;)f+=n[c++],c%=e;if((o=(o+1)%e)===s&&(s=(s+1)%e),u-r<t)return;let d=l&&u-l;return d?Math.round(1e3*f/d):void 0}};function e2(e,t){let r=0,n=e1(50,250);return i=>{let o=i.loaded,s=i.lengthComputable?i.total:void 0,a=o-r,u=n(a),l=o<=s;r=o;let c={loaded:o,total:s,progress:s?o/s:void 0,bytes:a,rate:u||void 0,estimated:u&&s&&l?(s-o)/u:void 0,event:i};c[t?"download":"upload"]=!0,e(c)}}const e5="undefined"!=typeof XMLHttpRequest;var e4=e5&&function(e){return new Promise(function(t,r){let n,i=e.data,o=eK.from(e.headers).normalize(),s=e.responseType;function a(){e.cancelToken&&e.cancelToken.unsubscribe(n),e.signal&&e.signal.removeEventListener("abort",n)}D.isFormData(i)&&(eM.isStandardBrowserEnv||eM.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.setContentType("multipart/form-data;",!1));let u=new XMLHttpRequest;// HTTP basic authentication
if(e.auth){let t=e.auth.username||"",r=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(t+":"+r))}let l=eZ(e.baseURL,e.url);function c(){if(!u)return;// Prepare the response
let n=eK.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),i=s&&"text"!==s&&"json"!==s?u.response:u.responseText,o={data:i,status:u.status,statusText:u.statusText,headers:n,config:e,request:u};!function(e,t,r){let n=r.config.validateStatus;!r.status||!n||n(r.status)?e(r):t(new I("Request failed with status code "+r.status,[I.ERR_BAD_REQUEST,I.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}(function(e){t(e),a()},function(e){r(e),a()},o),// Clean up request
u=null}// Add xsrf header
// This is only done if running in a standard browser environment.
// Specifically not if we're in a web worker, or react-native.
if(u.open(e.method.toUpperCase(),eC(l,e.params,e.paramsSerializer),!0),// Set the request timeout in MS
u.timeout=e.timeout,"onloadend"in u?u.onloadend=c:u.onreadystatechange=function(){u&&4===u.readyState&&(0!==u.status||u.responseURL&&0===u.responseURL.indexOf("file:"))&&// readystate handler is calling before onerror or ontimeout handlers,
// so we should call onloadend on the next 'tick'
setTimeout(c)},// Handle browser request cancellation (as opposed to a manual cancellation)
u.onabort=function(){u&&(r(new I("Request aborted",I.ECONNABORTED,e,u)),// Clean up request
u=null)},// Handle low level network errors
u.onerror=function(){// Real errors are hidden from us by the browser
// onerror should only fire if it's a network error
r(new I("Network Error",I.ERR_NETWORK,e,u)),// Clean up request
u=null},// Handle timeout
u.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",n=e.transitional||ek;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(new I(t,n.clarifyTimeoutError?I.ETIMEDOUT:I.ECONNABORTED,e,u)),// Clean up request
u=null},eM.isStandardBrowserEnv){// Add xsrf header
let t=(e.withCredentials||e0(l))&&e.xsrfCookieName&&eQ.read(e.xsrfCookieName);t&&o.set(e.xsrfHeaderName,t)}// Remove Content-Type if data is undefined
void 0===i&&o.setContentType(null),"setRequestHeader"in u&&D.forEach(o.toJSON(),function(e,t){u.setRequestHeader(t,e)}),D.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),s&&"json"!==s&&(u.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&u.addEventListener("progress",e2(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&u.upload&&u.upload.addEventListener("progress",e2(e.onUploadProgress)),(e.cancelToken||e.signal)&&(// Handle cancellation
// eslint-disable-next-line func-names
n=t=>{u&&(r(!t||t.type?new eX(null,e,u):t),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(n),e.signal&&(e.signal.aborted?n():e.signal.addEventListener("abort",n)));let f=function(e){let t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(l);if(f&&-1===eM.protocols.indexOf(f)){r(new I("Unsupported protocol "+f+":",I.ERR_BAD_REQUEST,e));return}// Send the request
u.send(i||null)})};const e6={http:null,xhr:e4};D.forEach(e6,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){// eslint-disable-next-line no-empty
}Object.defineProperty(e,"adapterName",{value:t})}});var e8={getAdapter:e=>{let t,r;e=D.isArray(e)?e:[e];let{length:n}=e;for(let i=0;i<n&&(t=e[i],!(r=D.isString(t)?e6[t.toLowerCase()]:t));i++);if(!r){if(!1===r)throw new I(`Adapter ${t} is not supported by the environment`,"ERR_NOT_SUPPORT");throw Error(D.hasOwnProp(e6,t)?`Adapter '${t}' is not available in the build`:`Unknown adapter '${t}'`)}if(!D.isFunction(r))throw TypeError("adapter is not a function");return r},adapters:e6};/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */function e3(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new eX(null,e)}function e7(e){e3(e),e.headers=eK.from(e.headers),// Transform request data
e.data=eG.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);let t=e8.getAdapter(e.adapter||eI.adapter);return t(e).then(function(t){return e3(e),// Transform response data
t.data=eG.call(e,e.transformResponse,t),t.headers=eK.from(t.headers),t},function(t){return!eY(t)&&(e3(e),t&&t.response&&(t.response.data=eG.call(e,e.transformResponse,t.response),t.response.headers=eK.from(t.response.headers))),Promise.reject(t)})}const e9=e=>e instanceof eK?e.toJSON():e;function te(e,t){// eslint-disable-next-line no-param-reassign
t=t||{};let r={};function n(e,t,r){return D.isPlainObject(e)&&D.isPlainObject(t)?D.merge.call({caseless:r},e,t):D.isPlainObject(t)?D.merge({},t):D.isArray(t)?t.slice():t}// eslint-disable-next-line consistent-return
function i(e,t,r){return D.isUndefined(t)?D.isUndefined(e)?void 0:n(void 0,e,r):n(e,t,r)}// eslint-disable-next-line consistent-return
function o(e,t){if(!D.isUndefined(t))return n(void 0,t)}// eslint-disable-next-line consistent-return
function s(e,t){return D.isUndefined(t)?D.isUndefined(e)?void 0:n(void 0,e):n(void 0,t)}// eslint-disable-next-line consistent-return
function a(r,i,o){return o in t?n(r,i):o in e?n(void 0,r):void 0}let u={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(e,t)=>i(e9(e),e9(t),!0)};return D.forEach(Object.keys(Object.assign({},e,t)),function(n){let o=u[n]||i,s=o(e[n],t[n],n);D.isUndefined(s)&&o!==a||(r[n]=s)}),r}const tt="1.5.0",tr={};// eslint-disable-next-line func-names
["object","boolean","number","function","string","symbol"].forEach((e,t)=>{tr[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const tn={};/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */tr.transitional=function(e,t,r){function n(e,t){return"[Axios v"+tt+"] Transitional option '"+e+"'"+t+(r?". "+r:"")}// eslint-disable-next-line func-names
return(r,i,o)=>{if(!1===e)throw new I(n(i," has been removed"+(t?" in "+t:"")),I.ERR_DEPRECATED);return t&&!tn[i]&&(tn[i]=!0,// eslint-disable-next-line no-console
console.warn(n(i," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,i,o)}};var ti={assertOptions:/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */function(e,t,r){if("object"!=typeof e)throw new I("options must be an object",I.ERR_BAD_OPTION_VALUE);let n=Object.keys(e),i=n.length;for(;i-- >0;){let o=n[i],s=t[o];if(s){let t=e[o],r=void 0===t||s(t,o,e);if(!0!==r)throw new I("option "+o+" must be "+r,I.ERR_BAD_OPTION_VALUE);continue}if(!0!==r)throw new I("Unknown option "+o,I.ERR_BAD_OPTION)}},validators:tr};const to=ti.validators;/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */class ts{constructor(e){this.defaults=e,this.interceptors={request:new ex,response:new ex}}/**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */request(e,t){let r,n;"string"==typeof e?(t=t||{}).url=e:t=e||{},t=te(this.defaults,t);let{transitional:i,paramsSerializer:o,headers:s}=t;void 0!==i&&ti.assertOptions(i,{silentJSONParsing:to.transitional(to.boolean),forcedJSONParsing:to.transitional(to.boolean),clarifyTimeoutError:to.transitional(to.boolean)},!1),null!=o&&(D.isFunction(o)?t.paramsSerializer={serialize:o}:ti.assertOptions(o,{encode:to.function,serialize:to.function},!0)),// Set config.method
t.method=(t.method||this.defaults.method||"get").toLowerCase();// Flatten headers
let a=s&&D.merge(s.common,s[t.method]);s&&D.forEach(["delete","get","head","post","put","patch","common"],e=>{delete s[e]}),t.headers=eK.concat(a,s);// filter out skipped interceptors
let u=[],l=!0;this.interceptors.request.forEach(function(e){("function"!=typeof e.runWhen||!1!==e.runWhen(t))&&(l=l&&e.synchronous,u.unshift(e.fulfilled,e.rejected))});let c=[];this.interceptors.response.forEach(function(e){c.push(e.fulfilled,e.rejected)});let f=0;if(!l){let e=[e7.bind(this),void 0];for(e.unshift.apply(e,u),e.push.apply(e,c),n=e.length,r=Promise.resolve(t);f<n;)r=r.then(e[f++],e[f++]);return r}n=u.length;let d=t;for(f=0;f<n;){let e=u[f++],t=u[f++];try{d=e(d)}catch(e){t.call(this,e);break}}try{r=e7.call(this,d)}catch(e){return Promise.reject(e)}for(f=0,n=c.length;f<n;)r=r.then(c[f++],c[f++]);return r}getUri(e){e=te(this.defaults,e);let t=eZ(e.baseURL,e.url);return eC(t,e.params,e.paramsSerializer)}}D.forEach(["delete","get","head","options"],function(e){/*eslint func-names:0*/ts.prototype[e]=function(t,r){return this.request(te(r||{},{method:e,url:t,data:(r||{}).data}))}}),D.forEach(["post","put","patch"],function(e){/*eslint func-names:0*/function t(t){return function(r,n,i){return this.request(te(i||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}ts.prototype[e]=t(),ts.prototype[e+"Form"]=t(!0)});/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */class ta{constructor(e){let t;if("function"!=typeof e)throw TypeError("executor must be a function.");this.promise=new Promise(function(e){t=e});let r=this;// eslint-disable-next-line func-names
this.promise.then(e=>{if(!r._listeners)return;let t=r._listeners.length;for(;t-- >0;)r._listeners[t](e);r._listeners=null}),// eslint-disable-next-line func-names
this.promise.then=e=>{let t;// eslint-disable-next-line func-names
let n=new Promise(e=>{r.subscribe(e),t=e}).then(e);return n.cancel=function(){r.unsubscribe(t)},n},e(function(e,n,i){r.reason||(r.reason=new eX(e,n,i),t(r.reason))})}/**
   * Throws a `CanceledError` if cancellation has been requested.
   */throwIfRequested(){if(this.reason)throw this.reason}/**
   * Subscribe to the cancel signal
   */subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}/**
   * Unsubscribe from the cancel signal
   */unsubscribe(e){if(!this._listeners)return;let t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}/**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */static source(){let e;let t=new ta(function(t){e=t});return{token:t,cancel:e}}}const tu={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(tu).forEach(([e,t])=>{tu[t]=e});// Create the default instance to be exported
const tl=/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */function e(t){let r=new ts(t),n=a(ts.prototype.request,r);return D.extend(n,ts.prototype,r,{allOwnKeys:!0}),D.extend(n,r,null,{allOwnKeys:!0}),// Factory for creating new instances
n.create=function(r){return e(te(t,r))},n}(eI);// Expose Axios class to allow class inheritance
tl.Axios=ts,// Expose Cancel & CancelToken
tl.CanceledError=eX,tl.CancelToken=ta,tl.isCancel=eY,tl.VERSION=tt,tl.toFormData=eO,// Expose AxiosError class
tl.AxiosError=I,// alias for CanceledError for backward compatibility
tl.Cancel=tl.CanceledError,// Expose all/spread
tl.all=function(e){return Promise.all(e)},tl.spread=function(e){return function(t){return e.apply(null,t)}},// Expose isAxiosError
tl.isAxiosError=function(e){return D.isObject(e)&&!0===e.isAxiosError},// Expose mergeConfig
tl.mergeConfig=te,tl.AxiosHeaders=eK,tl.formToJSON=e=>eD(D.isHTMLForm(e)?new FormData(e):e),tl.getAdapter=e8.getAdapter,tl.HttpStatusCode=tu,tl.default=tl;// This module is intended to unwrap Axios default export as named.
// Keep top-level export same with static properties
// so that it can keep same with es module or cjs
const{Axios:tc,AxiosError:tf,CanceledError:td,isCancel:th,CancelToken:tp,VERSION:ty,all:tg,Cancel:tm,isAxiosError:tb,spread:tw,toFormData:tE,AxiosHeaders:tv,HttpStatusCode:tL,formToJSON:tA,getAdapter:tS,mergeConfig:tO}=tl,tT="95f474a01cc4252905d63c7d958d5749",tR=async()=>{try{let e=await tl.get("https://api.themoviedb.org/3/genre/movie/list",{params:{api_key:tT}}),t=await e.data.genres;return t}catch(e){console.error(e.message)}},tU=async e=>{try{let t=tl.get(`https://api.themoviedb.org/3/movie/${e}/videos`,{params:{api_key:tT}});return t}catch(e){console.log(e)}};async function tB(e,t){let r=new URLSearchParams(t);try{let t=await tl.get(`${e}?${r}`),n=await t.data;return n}catch(e){console.log(e)}}async function tC(e){try{let t=await tU(e),r=await t.data.results[0].key;return r}catch(e){console.log(e)}}const tx=document.querySelector(".modal-backdrop");function tk(e){"Escape"===e.key&&(tx.classList.add("is-hidden"),tx.innerHTML="",document.removeEventListener("keydown",tk),document.body.style.overflow="auto")}// PAGINATION STRING
const tj=`<div class="container pagination-section">
  <button class="arrow--left">
    ⬅
  </button>
  <button class="page--first">1</button>
  <button class="dots--left">...</button>
  <button class="two-pages--back"></button>
  <button class="page--back"></button>
  <button class="current-page">1</button>
  <button class="page--next"></button>
  <button class="two-pages--next"></button>
  <button class="page--second">2</button>
  <button class="page--third">3</button>
  <button class="page--fourth">4</button>
  <button class="page--fifth">5</button>
  <button class="page--sixth">6</button>
  <button class="page--seventh">7</button>
  <button class="dots--right">...</button>
  <button class="page--last"></button>
  <button class="arrow--right">
    ➡
  </button>
</div>`;// UPDATING PAGES FN
async function t_(e,t){try{let r=await tB(e,t),n=await r.results;tD(n),tN(e,t)}catch(e){console.log(e)}}function tN(e,t){tP.insertAdjacentHTML("beforeend",tj);let r=t.page,n=document.querySelector(".current-page"),i=document.querySelector(".arrow--left"),o=document.querySelector(".dots--left"),s=document.querySelector(".two-pages--back"),a=document.querySelector(".page--back"),u=document.querySelector(".page--next"),l=document.querySelector(".two-pages--next"),c=document.querySelector(".dots--right"),f=document.querySelector(".page--last"),d=document.querySelector(".arrow--right"),h=document.querySelector(".page--first"),p=document.querySelector(".page--second"),y=document.querySelector(".page--third"),g=document.querySelector(".page--fourth"),m=document.querySelector(".page--fifth"),b=document.querySelector(".page--sixth"),w=document.querySelector(".page--seventh");// RUN CHECKING...
// ASYNC FN TO CHECING PAGE
(async function(){try{let E;let v=await tB(e,t),L=await v.total_pages,A=await v.total_results;// CONDITIONS
switch(E=L,L>=500&&(E=500),f.innerHTML=E,f.addEventListener("click",()=>{t.page=E,t_(e,t)}),r){case E:u.classList.add("hidden"),l.classList.add("hidden"),f.classList.add("hidden"),c.classList.add("hidden"),d.classList.add("hidden");break;case E-1:l.classList.add("hidden"),f.classList.add("hidden"),c.classList.add("hidden");break;case E-2:f.classList.add("hidden"),c.classList.add("hidden");break;case E-3:c.classList.add("hidden")}// CONDITIONS
switch(r){case 1:h.classList.add("hidden"),o.classList.add("hidden"),s.classList.add("hidden"),a.classList.add("hidden"),u.classList.add("hidden"),l.classList.add("hidden"),i.classList.add("hidden");break;case 2:n.innerHTML=`${t.page}`,o.classList.add("hidden"),s.classList.add("hidden"),a.classList.add("hidden"),u.classList.add("hidden"),l.classList.add("hidden"),p.classList.add("hidden");break;case 3:n.innerHTML=`${t.page}`,o.classList.add("hidden"),s.classList.add("hidden"),a.innerHTML=t.page-1,u.classList.add("hidden"),l.classList.add("hidden"),p.classList.add("hidden"),y.classList.add("hidden");break;case 4:n.innerHTML=`${t.page}`,o.classList.add("hidden"),s.innerHTML=t.page-2,a.innerHTML=t.page-1,u.classList.add("hidden"),l.classList.add("hidden"),p.classList.add("hidden"),y.classList.add("hidden"),g.classList.add("hidden");break;default:n.innerHTML=`${t.page}`,s.innerHTML=t.page-2,a.innerHTML=t.page-1,u.innerHTML=t.page+1,l.innerHTML=t.page+2,p.classList.add("hidden"),y.classList.add("hidden"),g.classList.add("hidden"),m.classList.add("hidden"),b.classList.add("hidden"),w.classList.add("hidden")}switch(E){case 7:f.classList.add("hidden"),c.classList.add("hidden");break;case 6:w.classList.add("hidden"),f.classList.add("hidden"),c.classList.add("hidden");break;case 5:b.classList.add("hidden"),w.classList.add("hidden"),f.classList.add("hidden"),c.classList.add("hidden");break;case 4:m.classList.add("hidden"),b.classList.add("hidden"),w.classList.add("hidden"),f.classList.add("hidden"),c.classList.add("hidden");break;case 3:g.classList.add("hidden"),m.classList.add("hidden"),b.classList.add("hidden"),w.classList.add("hidden"),f.classList.add("hidden"),c.classList.add("hidden");break;case 2:y.classList.add("hidden"),g.classList.add("hidden"),m.classList.add("hidden"),b.classList.add("hidden"),w.classList.add("hidden"),f.classList.add("hidden"),c.classList.add("hidden");break;case 1:p.classList.add("hidden"),y.classList.add("hidden"),g.classList.add("hidden"),m.classList.add("hidden"),b.classList.add("hidden"),w.classList.add("hidden"),f.classList.add("hidden"),c.classList.add("hidden")}0===A&&n.classList.add("hidden")}catch(e){console.log(e)}})(),// BUTTONS LISTENERS
h.addEventListener("click",()=>{t.page=1,t_(e,t)}),p.addEventListener("click",()=>{t.page=2,t_(e,t)}),y.addEventListener("click",()=>{t.page=3,t_(e,t)}),g.addEventListener("click",()=>{t.page=4,t_(e,t)}),m.addEventListener("click",()=>{t.page=5,t_(e,t)}),b.addEventListener("click",()=>{t.page=6,t_(e,t)}),w.addEventListener("click",()=>{t.page=7,t_(e,t)}),u.addEventListener("click",()=>{t.page++,t_(e,t)}),l.addEventListener("click",()=>{t.page+=2,t_(e,t)}),a.addEventListener("click",()=>{t.page--,t_(e,t)}),s.addEventListener("click",()=>{t.page-=2,t_(e,t)}),d.addEventListener("click",()=>{t.page++,t_(e,t)}),i.addEventListener("click",()=>{1!==t.page&&(t.page--,t_(e,t))})}const tP=document.querySelector(".main-section");let tF=[];async function tM(){// const data = await axiosSecondFetchFn()
//   .then(data => {
//     drawFilmBox(data.results);
//   })
//   .catch(error => console.log(error));
let e="https://api.themoviedb.org/3/movie/popular",t={api_key:"95f474a01cc4252905d63c7d958d5749",language:"en-US",page:1};try{let r=await tB(e,t),n=await r.results;return tD(n),tN(e,t)}catch(e){console.log(e)}}function tD(e){let t=[];tP.innerHTML="",e.forEach(e=>{//We need to add link that brings us to modal window if we press .main__photo-card
let r=[];for(let t of e.genre_ids)tF.map(e=>{e.id===t&&r.push(e.name)});let n=document.createElement("div");n.classList.add("film-poster"),n.setAttribute("value",e.id),null===e.poster_path&&(e.poster_path="/uc4RAVW1T3T29h6OQdr7zu4Blui.jpg"),n.insertAdjacentHTML("afterbegin",`<img class="film-poster__photo" src="https://image.tmdb.org/t/p/original${e.poster_path}" alt="${e.title}" loading="lazy"/>`);let i=document.createElement("div");i.classList.add("film-poster__description");let o=document.createElement("button");o.classList.add("film-poster__button"),o.setAttribute("type","button"),o.setAttribute("value",`${e.id}`),o.innerHTML="▶",o.addEventListener("click",e=>{tC(e.target.value).then(e=>{!function(e){// `<iframe width="560" height="315" src="https://www.youtube.com/embed/${key}?si=NP4x3PPUZd7lNCFY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
let t=document.createElement("div");t.classList.add("modal-trailer"),t.insertAdjacentHTML("afterbegin",`<iframe class="modal-trailer__iframe" src="https://www.youtube.com/embed/${e}?si=NP4x3PPUZd7lNCFY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`),tx.innerHTML="",tx.insertAdjacentElement("afterbegin",t),tx.classList.remove("is-hidden"),document.body.style.overflow="hidden",tx.addEventListener("click",()=>{tx.classList.add("is-hidden"),tx.innerHTML="",document.body.style.overflow="auto"}),document.addEventListener("keydown",tk)}(e)});// showTrailer(trailerKey);
}),i.insertAdjacentElement("afterbegin",o),i.insertAdjacentHTML("beforeend",` <p class="film-poster__title">
              ${e.title}
            </p><br />
            <p class="film-poster__genre">
              ${r.join(", ")} |
            </p>
            <p class="film-poster__year">
              ${e.release_date.substring(0,4)}
            </p>
          </div>
        </div>`),n.insertAdjacentElement("beforeend",i),t.push(n)}),tP.append(...t)}tR().then(e=>tF.push(...e)).catch(e=>console.log(e));const tI=document.querySelector(".search-form"),tq=document.querySelector(".search-form__input"),tH=document.querySelector(".search-form__svg");async function tz(e,t){try{let r=await tB(e,t),n=await r.results;return tD(n),tN(e,t)}catch(e){console.log(e)}}tM(),tI.addEventListener("submit",e=>{e.preventDefault();let t={api_key:"95f474a01cc4252905d63c7d958d5749",language:"en-US",page:1,query:`${tq.value}`};tz("https://api.themoviedb.org/3/search/movie",t)}),tH.addEventListener("click",e=>{let t={api_key:"95f474a01cc4252905d63c7d958d5749",language:"en-US",page:1,query:`${tq.value}`};tz("https://api.themoviedb.org/3/search/movie",t)});//# sourceMappingURL=index.781eea6f.js.map

//# sourceMappingURL=index.781eea6f.js.map
