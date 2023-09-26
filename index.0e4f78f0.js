let t;var e,r,n,o,i,s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function a(t,e){return function(){return t.apply(e,arguments)}}// utils is a library of generic helper functions non-specific to axios
const{toString:u}=Object.prototype,{getPrototypeOf:l}=Object,c=(e=Object.create(null),t=>{let r=u.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())}),f=t=>(t=t.toLowerCase(),e=>c(e)===t),d=t=>e=>typeof e===t,{isArray:h}=Array,p=d("undefined"),y=f("ArrayBuffer"),g=d("string"),m=d("function"),b=d("number"),w=t=>null!==t&&"object"==typeof t,E=t=>{if("object"!==c(t))return!1;let e=l(t);return(null===e||e===Object.prototype||null===Object.getPrototypeOf(e))&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},v=f("Date"),A=f("File"),L=f("Blob"),S=f("FileList"),O=f("URLSearchParams");/**
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
 */function T(t,e,{allOwnKeys:r=!1}={}){let n,o;// Don't bother if no value provided
if(null!=t){if("object"!=typeof t&&/*eslint no-param-reassign:0*/(t=[t]),h(t))for(n=0,o=t.length;n<o;n++)e.call(null,t[n],n,t);else{let o;// Iterate over object keys
let i=r?Object.getOwnPropertyNames(t):Object.keys(t),s=i.length;for(n=0;n<s;n++)o=i[n],e.call(null,t[o],o,t)}}}function R(t,e){let r;e=e.toLowerCase();let n=Object.keys(t),o=n.length;for(;o-- >0;)if(e===(r=n[o]).toLowerCase())return r;return null}const U=/*eslint no-undef:0*/"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:s,B=t=>!p(t)&&t!==U,C=(r="undefined"!=typeof Uint8Array&&l(Uint8Array),t=>r&&t instanceof r),x=f("HTMLFormElement"),j=(({hasOwnProperty:t})=>(e,r)=>t.call(e,r))(Object.prototype),N=f("RegExp"),P=(t,e)=>{let r=Object.getOwnPropertyDescriptors(t),n={};T(r,(r,o)=>{let i;!1!==(i=e(r,o,t))&&(n[o]=i||r)}),Object.defineProperties(t,n)},k="abcdefghijklmnopqrstuvwxyz",_="0123456789",F={DIGIT:_,ALPHA:k,ALPHA_DIGIT:k+k.toUpperCase()+_},M=f("AsyncFunction");var I={isArray:h,isArrayBuffer:y,isBuffer:/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */function(t){return null!==t&&!p(t)&&null!==t.constructor&&!p(t.constructor)&&m(t.constructor.isBuffer)&&t.constructor.isBuffer(t)},isFormData:t=>{let e;return t&&("function"==typeof FormData&&t instanceof FormData||m(t.append)&&("formdata"===(e=c(t))||// detect form-data instance
"object"===e&&m(t.toString)&&"[object FormData]"===t.toString()))},isArrayBufferView:/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&y(t.buffer)},isString:g,isNumber:b,isBoolean:t=>!0===t||!1===t,isObject:w,isPlainObject:E,isUndefined:p,isDate:v,isFile:A,isBlob:L,isRegExp:N,isFunction:m,isStream:t=>w(t)&&m(t.pipe),isURLSearchParams:O,isTypedArray:C,isFileList:S,forEach:T,merge:/**
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
 */function t(){let{caseless:e}=B(this)&&this||{},r={},n=(n,o)=>{let i=e&&R(r,o)||o;E(r[i])&&E(n)?r[i]=t(r[i],n):E(n)?r[i]=t({},n):h(n)?r[i]=n.slice():r[i]=n};for(let t=0,e=arguments.length;t<e;t++)arguments[t]&&T(arguments[t],n);return r},extend:(t,e,r,{allOwnKeys:n}={})=>(T(e,(e,n)=>{r&&m(e)?t[n]=a(e,r):t[n]=e},{allOwnKeys:n}),t),trim:t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:t=>(65279===t.charCodeAt(0)&&(t=t.slice(1)),t),inherits:(t,e,r,n)=>{t.prototype=Object.create(e.prototype,n),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),r&&Object.assign(t.prototype,r)},toFlatObject:(t,e,r,n)=>{let o,i,s;let a={};// eslint-disable-next-line no-eq-null,eqeqeq
if(e=e||{},null==t)return e;do{for(i=(o=Object.getOwnPropertyNames(t)).length;i-- >0;)s=o[i],(!n||n(s,t,e))&&!a[s]&&(e[s]=t[s],a[s]=!0);t=!1!==r&&l(t)}while(t&&(!r||r(t,e))&&t!==Object.prototype)return e},kindOf:c,kindOfTest:f,endsWith:(t,e,r)=>{t=String(t),(void 0===r||r>t.length)&&(r=t.length),r-=e.length;let n=t.indexOf(e,r);return -1!==n&&n===r},toArray:t=>{if(!t)return null;if(h(t))return t;let e=t.length;if(!b(e))return null;let r=Array(e);for(;e-- >0;)r[e]=t[e];return r},forEachEntry:(t,e)=>{let r;let n=t&&t[Symbol.iterator],o=n.call(t);for(;(r=o.next())&&!r.done;){let n=r.value;e.call(t,n[0],n[1])}},matchAll:(t,e)=>{let r;let n=[];for(;null!==(r=t.exec(e));)n.push(r);return n},isHTMLForm:x,hasOwnProperty:j,hasOwnProp:j,reduceDescriptors:P,freezeMethods:t=>{P(t,(e,r)=>{// skip restricted props in strict mode
if(m(t)&&-1!==["arguments","caller","callee"].indexOf(r))return!1;let n=t[r];if(m(n)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},toObjectSet:(t,e)=>{let r={};return(t=>{t.forEach(t=>{r[t]=!0})})(h(t)?t:String(t).split(e)),r},toCamelCase:t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,e,r){return e.toUpperCase()+r}),noop:()=>{},toFiniteNumber:(t,e)=>Number.isFinite(t=+t)?t:e,findKey:R,global:U,isContextDefined:B,ALPHABET:F,generateString:(t=16,e=F.ALPHA_DIGIT)=>{let r="",{length:n}=e;for(;t--;)r+=e[Math.random()*n|0];return r},isSpecCompliantForm:/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */function(t){return!!(t&&m(t.append)&&"FormData"===t[Symbol.toStringTag]&&t[Symbol.iterator])},toJSONObject:t=>{let e=Array(10),r=(t,n)=>{if(w(t)){if(e.indexOf(t)>=0)return;if(!("toJSON"in t)){e[n]=t;let o=h(t)?[]:{};return T(t,(t,e)=>{let i=r(t,n+1);p(i)||(o[e]=i)}),e[n]=void 0,o}}return t};return r(t,0)},isAsyncFn:M,isThenable:t=>t&&(w(t)||m(t))&&m(t.then)&&m(t.catch)};/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */function D(t,e,r,n,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),r&&(this.config=r),n&&(this.request=n),o&&(this.response=o)}I.inherits(D,Error,{toJSON:function(){return{// Standard
message:this.message,name:this.name,// Microsoft
description:this.description,number:this.number,// Mozilla
fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,// Axios
config:I.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const q=D.prototype,H={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{H[t]={value:t}}),Object.defineProperties(D,H),Object.defineProperty(q,"isAxiosError",{value:!0}),// eslint-disable-next-line func-names
D.from=(t,e,r,n,o,i)=>{let s=Object.create(q);return I.toFlatObject(t,s,function(t){return t!==Error.prototype},t=>"isAxiosError"!==t),D.call(s,t.message,e,r,n,o),s.cause=t,s.name=t.name,i&&Object.assign(s,i),s},n=function(t){// go through the array every three bytes, we'll deal with trailing stuff later
for(var e,r=t.length,n=r%3// if we have 1 byte left, pad 2 bytes
,o=[],i=0,s=r-n;i<s;i+=16383// must be multiple of 3
)o.push(function(t,e,r){for(var n,o=[],i=e;i<r;i+=3)o.push(z[(n=(t[i]<<16&16711680)+(t[i+1]<<8&65280)+(255&t[i+2]))>>18&63]+z[n>>12&63]+z[n>>6&63]+z[63&n]);return o.join("")}(t,i,i+16383>s?s:i+16383));return 1===n?o.push(z[(e=t[r-1])>>2]+z[e<<4&63]+"=="):2===n&&o.push(z[(e=(t[r-2]<<8)+t[r-1])>>10]+z[e>>4&63]+z[e<<2&63]+"="),o.join("")};for(var z=[],J=[],$="undefined"!=typeof Uint8Array?Uint8Array:Array,V="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",W=0,K=V.length;W<K;++W)z[W]=V[W],J[V.charCodeAt(W)]=W;// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
J["-".charCodeAt(0)]=62,J["_".charCodeAt(0)]=63,o=function(t,e,r,n,o){var i,s,a=8*o-n-1,u=(1<<a)-1,l=u>>1,c=-7,f=r?o-1:0,d=r?-1:1,h=t[e+f];for(f+=d,i=h&(1<<-c)-1,h>>=-c,c+=a;c>0;i=256*i+t[e+f],f+=d,c-=8);for(s=i&(1<<-c)-1,i>>=-c,c+=n;c>0;s=256*s+t[e+f],f+=d,c-=8);if(0===i)i=1-l;else{if(i===u)return s?NaN:(h?-1:1)*(1/0);s+=Math.pow(2,n),i-=l}return(h?-1:1)*s*Math.pow(2,i-n)},i=function(t,e,r,n,o,i){var s,a,u,l=8*i-o-1,c=(1<<l)-1,f=c>>1,d=23===o?5960464477539062e-23:0,h=n?0:i-1,p=n?1:-1,y=e<0||0===e&&1/e<0?1:0;for(isNaN(e=Math.abs(e))||e===1/0?(a=isNaN(e)?1:0,s=c):(s=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-s))<1&&(s--,u*=2),s+f>=1?e+=d/u:e+=d*Math.pow(2,1-f),e*u>=2&&(s++,u/=2),s+f>=c?(a=0,s=c):s+f>=1?(a=(e*u-1)*Math.pow(2,o),s+=f):(a=e*Math.pow(2,f-1)*Math.pow(2,o),s=0));o>=8;t[r+h]=255&a,h+=p,a/=256,o-=8);for(s=s<<o|a,l+=o;l>0;t[r+h]=255&s,h+=p,s/=256,l-=8);t[r+h-p]|=128*y};var G="function"==typeof Symbol&&"function"// eslint-disable-line dot-notation
==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom")// eslint-disable-line dot-notation
:null;function Y(t){if(t>2147483647)throw RangeError('The value "'+t+'" is invalid for option "size"');// Return an augmented `Uint8Array` instance
var e=new Uint8Array(t);return Object.setPrototypeOf(e,X.prototype),e}/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */function X(t,e,r){// Common case.
if("number"==typeof t){if("string"==typeof e)throw TypeError('The "string" argument must be of type string. Received type number');return tt(t)}return Z(t,e,r)}function Z(t,e,r){if("string"==typeof t)return function(t,e){if(("string"!=typeof e||""===e)&&(e="utf8"),!X.isEncoding(e))throw TypeError("Unknown encoding: "+e);var r=0|to(t,e),n=Y(r),o=n.write(t,e);return o!==r&&// cause everything after the first invalid character to be ignored. (e.g.
// 'abxxcd' will be treated as 'ab')
(n=n.slice(0,o)),n}(t,e);if(ArrayBuffer.isView(t))return function(t){if(tw(t,Uint8Array)){var e=new Uint8Array(t);return tr(e.buffer,e.byteOffset,e.byteLength)}return te(t)}(t);if(null==t)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(tw(t,ArrayBuffer)||t&&tw(t.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(tw(t,SharedArrayBuffer)||t&&tw(t.buffer,SharedArrayBuffer)))return tr(t,e,r);if("number"==typeof t)throw TypeError('The "value" argument must not be of type number. Received type number');var n=t.valueOf&&t.valueOf();if(null!=n&&n!==t)return X.from(n,e,r);var o=function(t){if(X.isBuffer(t)){var e,r=0|tn(t.length),n=Y(r);return 0===n.length||t.copy(n,0,0,r),n}return void 0!==t.length?"number"!=typeof t.length||(e=t.length)!=e// eslint-disable-line no-self-compare
?Y(0):te(t):"Buffer"===t.type&&Array.isArray(t.data)?te(t.data):void 0}(t);if(o)return o;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return X.from(t[Symbol.toPrimitive]("string"),e,r);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function Q(t){if("number"!=typeof t)throw TypeError('"size" argument must be of type number');if(t<0)throw RangeError('The value "'+t+'" is invalid for option "size"')}function tt(t){return Q(t),Y(t<0?0:0|tn(t))}function te(t){for(var e=t.length<0?0:0|tn(t.length),r=Y(e),n=0;n<e;n+=1)r[n]=255&t[n];return r}function tr(t,e,r){var n;if(e<0||t.byteLength<e)throw RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(r||0))throw RangeError('"length" is outside of buffer bounds');return(// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(n=void 0===e&&void 0===r?new Uint8Array(t):void 0===r?new Uint8Array(t,e):new Uint8Array(t,e,r),X.prototype),n)}function tn(t){// Note: cannot use `length < K_MAX_LENGTH` here because that fails when
// length is NaN (which is otherwise coerced to zero.)
if(t>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|t}function to(t,e){if(X.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||tw(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);var r=t.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;for(// Use a for loop to avoid recursion
var o=!1;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return tg(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return tm(t).length;default:if(o)return n?-1:tg(t).length// assume utf8
;e=(""+e).toLowerCase(),o=!0}}function ti(t,e,r){var o,i,s=!1;// Return early if start > this.length. Done here to prevent potential uint32
// coercion fail below.
if((void 0===e||e<0)&&(e=0),e>this.length||((void 0===r||r>this.length)&&(r=this.length),r<=0||// Force coercion to uint32. This will also coerce falsey/NaN values to 0.
(r>>>=0)<=(e>>>=0)))return"";for(t||(t="utf8");;)switch(t){case"hex":return function(t,e,r){var n=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>n)&&(r=n);for(var o="",i=e;i<r;++i)o+=tE[t[i]];return o}(this,e,r);case"utf8":case"utf-8":return tl(this,e,r);case"ascii":return function(t,e,r){var n="";r=Math.min(t.length,r);for(var o=e;o<r;++o)n+=String.fromCharCode(127&t[o]);return n}(this,e,r);case"latin1":case"binary":return function(t,e,r){var n="";r=Math.min(t.length,r);for(var o=e;o<r;++o)n+=String.fromCharCode(t[o]);return n}(this,e,r);case"base64":return o=e,i=r,0===o&&i===this.length?n(this):n(this.slice(o,i));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(t,e,r){// If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
for(var n=t.slice(e,r),o="",i=0;i<n.length-1;i+=2)o+=String.fromCharCode(n[i]+256*n[i+1]);return o}(this,e,r);default:if(s)throw TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),s=!0}}function ts(t,e,r){var n=t[e];t[e]=t[r],t[r]=n}// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function ta(t,e,r,n,o){var i;// Empty buffer means no match
if(0===t.length)return -1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),(i=r=+r// Coerce to Number.
)!=i&&(r=o?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(o)return -1;r=t.length-1}else if(r<0){if(!o)return -1;r=0}// Finally, search either indexOf (if dir is true) or lastIndexOf
if("string"==typeof e&&(e=X.from(e,n)),X.isBuffer(e))return(// Special case: looking for empty string/buffer always fails
0===e.length?-1:tu(t,e,r,n,o));if("number"==typeof e)return(e&=255// Search for a byte value [0-255]
,"function"==typeof Uint8Array.prototype.indexOf)?o?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):tu(t,[e],r,n,o);throw TypeError("val must be string, number or Buffer")}function tu(t,e,r,n,o){var i,s=1,a=t.length,u=e.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return -1;s=2,a/=2,u/=2,r/=2}function l(t,e){return 1===s?t[e]:t.readUInt16BE(e*s)}if(o){var c=-1;for(i=r;i<a;i++)if(l(t,i)===l(e,-1===c?0:i-c)){if(-1===c&&(c=i),i-c+1===u)return c*s}else -1!==c&&(i-=i-c),c=-1}else for(r+u>a&&(r=a-u),i=r;i>=0;i--){for(var f=!0,d=0;d<u;d++)if(l(t,i+d)!==l(e,d)){f=!1;break}if(f)return i}return -1}function tl(t,e,r){r=Math.min(t.length,r);for(var n=[],o=e;o<r;){var i,s,a,u,l=t[o],c=null,f=l>239?4:l>223?3:l>191?2:1;if(o+f<=r)switch(f){case 1:l<128&&(c=l);break;case 2:(192&(i=t[o+1]))==128&&(u=(31&l)<<6|63&i)>127&&(c=u);break;case 3:i=t[o+1],s=t[o+2],(192&i)==128&&(192&s)==128&&(u=(15&l)<<12|(63&i)<<6|63&s)>2047&&(u<55296||u>57343)&&(c=u);break;case 4:i=t[o+1],s=t[o+2],a=t[o+3],(192&i)==128&&(192&s)==128&&(192&a)==128&&(u=(15&l)<<18|(63&i)<<12|(63&s)<<6|63&a)>65535&&u<1114112&&(c=u)}null===c?(// we did not generate a valid codePoint so insert a
// replacement char (U+FFFD) and advance only 1 byte
c=65533,f=1):c>65535&&(// encode to utf16 (surrogate pair dance)
c-=65536,n.push(c>>>10&1023|55296),c=56320|1023&c),n.push(c),o+=f}return function(t){var e=t.length;if(e<=4096)return String.fromCharCode.apply(String,t)// avoid extra slice()
;for(// Decode in chunks to avoid "call stack size exceeded".
var r="",n=0;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=4096));return r}(n)}/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */function tc(t,e,r){if(t%1!=0||t<0)throw RangeError("offset is not uint");if(t+e>r)throw RangeError("Trying to access beyond buffer length")}function tf(t,e,r,n,o,i){if(!X.isBuffer(t))throw TypeError('"buffer" argument must be a Buffer instance');if(e>o||e<i)throw RangeError('"value" argument is out of bounds');if(r+n>t.length)throw RangeError("Index out of range")}function td(t,e,r,n,o,i){if(r+n>t.length||r<0)throw RangeError("Index out of range")}function th(t,e,r,n,o){return e=+e,r>>>=0,o||td(t,e,r,4,34028234663852886e22,-34028234663852886e22),i(t,e,r,n,23,4),r+4}function tp(t,e,r,n,o){return e=+e,r>>>=0,o||td(t,e,r,8,17976931348623157e292,-17976931348623157e292),i(t,e,r,n,52,8),r+8}/**
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
try{var t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),X.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(X.prototype,"parent",{enumerable:!0,get:function(){if(X.isBuffer(this))return this.buffer}}),Object.defineProperty(X.prototype,"offset",{enumerable:!0,get:function(){if(X.isBuffer(this))return this.byteOffset}}),X.poolSize=8192// not used by this implementation
,/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/X.from=function(t,e,r){return Z(t,e,r)},// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(X.prototype,Uint8Array.prototype),Object.setPrototypeOf(X,Uint8Array),/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/X.alloc=function(t,e,r){return(Q(t),t<=0)?Y(t):void 0!==e?"string"==typeof r?Y(t).fill(e,r):Y(t).fill(e):Y(t)},/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */X.allocUnsafe=function(t){return tt(t)},/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */X.allocUnsafeSlow=function(t){return tt(t)},X.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==X.prototype// so Buffer.isBuffer(Buffer.prototype) will be false
},X.compare=function(t,e){if(tw(t,Uint8Array)&&(t=X.from(t,t.offset,t.byteLength)),tw(e,Uint8Array)&&(e=X.from(e,e.offset,e.byteLength)),!X.isBuffer(t)||!X.isBuffer(e))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;for(var r=t.length,n=e.length,o=0,i=Math.min(r,n);o<i;++o)if(t[o]!==e[o]){r=t[o],n=e[o];break}return r<n?-1:n<r?1:0},X.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},X.concat=function(t,e){if(!Array.isArray(t))throw TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return X.alloc(0);if(void 0===e)for(r=0,e=0;r<t.length;++r)e+=t[r].length;var r,n=X.allocUnsafe(e),o=0;for(r=0;r<t.length;++r){var i=t[r];if(tw(i,Uint8Array))o+i.length>n.length?X.from(i).copy(n,o):Uint8Array.prototype.set.call(n,i,o);else if(X.isBuffer(i))i.copy(n,o);else throw TypeError('"list" argument must be an Array of Buffers');o+=i.length}return n},X.byteLength=to,// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
X.prototype._isBuffer=!0,X.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)ts(this,e,e+1);return this},X.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)ts(this,e,e+3),ts(this,e+1,e+2);return this},X.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)ts(this,e,e+7),ts(this,e+1,e+6),ts(this,e+2,e+5),ts(this,e+3,e+4);return this},X.prototype.toString=function(){var t=this.length;return 0===t?"":0==arguments.length?tl(this,0,t):ti.apply(this,arguments)},X.prototype.toLocaleString=X.prototype.toString,X.prototype.equals=function(t){if(!X.isBuffer(t))throw TypeError("Argument must be a Buffer");return this===t||0===X.compare(this,t)},X.prototype.inspect=function(){var t="";return t=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(t+=" ... "),"<Buffer "+t+">"},G&&(X.prototype[G]=X.prototype.inspect),X.prototype.compare=function(t,e,r,n,o){if(tw(t,Uint8Array)&&(t=X.from(t,t.offset,t.byteLength)),!X.isBuffer(t))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),e<0||r>t.length||n<0||o>this.length)throw RangeError("out of range index");if(n>=o&&e>=r)return 0;if(n>=o)return -1;if(e>=r)return 1;if(e>>>=0,r>>>=0,n>>>=0,o>>>=0,this===t)return 0;for(var i=o-n,s=r-e,a=Math.min(i,s),u=this.slice(n,o),l=t.slice(e,r),c=0;c<a;++c)if(u[c]!==l[c]){i=u[c],s=l[c];break}return i<s?-1:s<i?1:0},X.prototype.includes=function(t,e,r){return -1!==this.indexOf(t,e,r)},X.prototype.indexOf=function(t,e,r){return ta(this,t,e,r,!0)},X.prototype.lastIndexOf=function(t,e,r){return ta(this,t,e,r,!1)},X.prototype.write=function(t,e,r,n){// Buffer#write(string)
if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"==typeof e)n=e,r=this.length,e=0;else if(isFinite(e))e>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var o,i,s,a,u,l,c,f,d=this.length-e;if((void 0===r||r>d)&&(r=d),t.length>0&&(r<0||e<0)||e>this.length)throw RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var h=!1;;)switch(n){case"hex":return function(t,e,r,n){r=Number(r)||0;var o=t.length-r;n?(n=Number(n))>o&&(n=o):n=o;var i=e.length;n>i/2&&(n=i/2);for(var s=0;s<n;++s){var a=parseInt(e.substr(2*s,2),16);if(a!=a)break;t[r+s]=a}return s}(this,t,e,r);case"utf8":case"utf-8":return o=e,i=r,tb(tg(t,this.length-o),this,o,i);case"ascii":case"latin1":case"binary":return s=e,a=r,tb(function(t){for(var e=[],r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}(t),this,s,a);case"base64":// Warning: maxLength not taken into account in base64Write
return u=e,l=r,tb(tm(t),this,u,l);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return c=e,f=r,tb(function(t,e){for(var r,n,o=[],i=0;i<t.length&&!((e-=2)<0);++i)n=(r=t.charCodeAt(i))>>8,o.push(r%256),o.push(n);return o}(t,this.length-c),this,c,f);default:if(h)throw TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),h=!0}},X.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},X.prototype.slice=function(t,e){var r=this.length;t=~~t,e=void 0===e?r:~~e,t<0?(t+=r)<0&&(t=0):t>r&&(t=r),e<0?(e+=r)<0&&(e=0):e>r&&(e=r),e<t&&(e=t);var n=this.subarray(t,e);return(// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(n,X.prototype),n)},X.prototype.readUintLE=X.prototype.readUIntLE=function(t,e,r){t>>>=0,e>>>=0,r||tc(t,e,this.length);for(var n=this[t],o=1,i=0;++i<e&&(o*=256);)n+=this[t+i]*o;return n},X.prototype.readUintBE=X.prototype.readUIntBE=function(t,e,r){t>>>=0,e>>>=0,r||tc(t,e,this.length);for(var n=this[t+--e],o=1;e>0&&(o*=256);)n+=this[t+--e]*o;return n},X.prototype.readUint8=X.prototype.readUInt8=function(t,e){return t>>>=0,e||tc(t,1,this.length),this[t]},X.prototype.readUint16LE=X.prototype.readUInt16LE=function(t,e){return t>>>=0,e||tc(t,2,this.length),this[t]|this[t+1]<<8},X.prototype.readUint16BE=X.prototype.readUInt16BE=function(t,e){return t>>>=0,e||tc(t,2,this.length),this[t]<<8|this[t+1]},X.prototype.readUint32LE=X.prototype.readUInt32LE=function(t,e){return t>>>=0,e||tc(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},X.prototype.readUint32BE=X.prototype.readUInt32BE=function(t,e){return t>>>=0,e||tc(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},X.prototype.readIntLE=function(t,e,r){t>>>=0,e>>>=0,r||tc(t,e,this.length);for(var n=this[t],o=1,i=0;++i<e&&(o*=256);)n+=this[t+i]*o;return n>=(o*=128)&&(n-=Math.pow(2,8*e)),n},X.prototype.readIntBE=function(t,e,r){t>>>=0,e>>>=0,r||tc(t,e,this.length);for(var n=e,o=1,i=this[t+--n];n>0&&(o*=256);)i+=this[t+--n]*o;return i>=(o*=128)&&(i-=Math.pow(2,8*e)),i},X.prototype.readInt8=function(t,e){return(t>>>=0,e||tc(t,1,this.length),128&this[t])?-((255-this[t]+1)*1):this[t]},X.prototype.readInt16LE=function(t,e){t>>>=0,e||tc(t,2,this.length);var r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},X.prototype.readInt16BE=function(t,e){t>>>=0,e||tc(t,2,this.length);var r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},X.prototype.readInt32LE=function(t,e){return t>>>=0,e||tc(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},X.prototype.readInt32BE=function(t,e){return t>>>=0,e||tc(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},X.prototype.readFloatLE=function(t,e){return t>>>=0,e||tc(t,4,this.length),o(this,t,!0,23,4)},X.prototype.readFloatBE=function(t,e){return t>>>=0,e||tc(t,4,this.length),o(this,t,!1,23,4)},X.prototype.readDoubleLE=function(t,e){return t>>>=0,e||tc(t,8,this.length),o(this,t,!0,52,8)},X.prototype.readDoubleBE=function(t,e){return t>>>=0,e||tc(t,8,this.length),o(this,t,!1,52,8)},X.prototype.writeUintLE=X.prototype.writeUIntLE=function(t,e,r,n){if(t=+t,e>>>=0,r>>>=0,!n){var o=Math.pow(2,8*r)-1;tf(this,t,e,r,o,0)}var i=1,s=0;for(this[e]=255&t;++s<r&&(i*=256);)this[e+s]=t/i&255;return e+r},X.prototype.writeUintBE=X.prototype.writeUIntBE=function(t,e,r,n){if(t=+t,e>>>=0,r>>>=0,!n){var o=Math.pow(2,8*r)-1;tf(this,t,e,r,o,0)}var i=r-1,s=1;for(this[e+i]=255&t;--i>=0&&(s*=256);)this[e+i]=t/s&255;return e+r},X.prototype.writeUint8=X.prototype.writeUInt8=function(t,e,r){return t=+t,e>>>=0,r||tf(this,t,e,1,255,0),this[e]=255&t,e+1},X.prototype.writeUint16LE=X.prototype.writeUInt16LE=function(t,e,r){return t=+t,e>>>=0,r||tf(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},X.prototype.writeUint16BE=X.prototype.writeUInt16BE=function(t,e,r){return t=+t,e>>>=0,r||tf(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},X.prototype.writeUint32LE=X.prototype.writeUInt32LE=function(t,e,r){return t=+t,e>>>=0,r||tf(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},X.prototype.writeUint32BE=X.prototype.writeUInt32BE=function(t,e,r){return t=+t,e>>>=0,r||tf(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},X.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e>>>=0,!n){var o=Math.pow(2,8*r-1);tf(this,t,e,r,o-1,-o)}var i=0,s=1,a=0;for(this[e]=255&t;++i<r&&(s*=256);)t<0&&0===a&&0!==this[e+i-1]&&(a=1),this[e+i]=(t/s>>0)-a&255;return e+r},X.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e>>>=0,!n){var o=Math.pow(2,8*r-1);tf(this,t,e,r,o-1,-o)}var i=r-1,s=1,a=0;for(this[e+i]=255&t;--i>=0&&(s*=256);)t<0&&0===a&&0!==this[e+i+1]&&(a=1),this[e+i]=(t/s>>0)-a&255;return e+r},X.prototype.writeInt8=function(t,e,r){return t=+t,e>>>=0,r||tf(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},X.prototype.writeInt16LE=function(t,e,r){return t=+t,e>>>=0,r||tf(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},X.prototype.writeInt16BE=function(t,e,r){return t=+t,e>>>=0,r||tf(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},X.prototype.writeInt32LE=function(t,e,r){return t=+t,e>>>=0,r||tf(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},X.prototype.writeInt32BE=function(t,e,r){return t=+t,e>>>=0,r||tf(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},X.prototype.writeFloatLE=function(t,e,r){return th(this,t,e,!0,r)},X.prototype.writeFloatBE=function(t,e,r){return th(this,t,e,!1,r)},X.prototype.writeDoubleLE=function(t,e,r){return tp(this,t,e,!0,r)},X.prototype.writeDoubleBE=function(t,e,r){return tp(this,t,e,!1,r)},// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
X.prototype.copy=function(t,e,r,n){if(!X.isBuffer(t))throw TypeError("argument should be a Buffer");// Copy 0 bytes; we're done
if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r||0===t.length||0===this.length)return 0;// Fatal error conditions
if(e<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("Index out of range");if(n<0)throw RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);var o=n-r;return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(e,r,n):Uint8Array.prototype.set.call(t,this.subarray(r,n),e),o},// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
X.prototype.fill=function(t,e,r,n){// Handle string cases:
if("string"==typeof t){if("string"==typeof e?(n=e,e=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw TypeError("encoding must be a string");if("string"==typeof n&&!X.isEncoding(n))throw TypeError("Unknown encoding: "+n);if(1===t.length){var o,i=t.charCodeAt(0);("utf8"===n&&i<128||"latin1"===n)&&(t=i)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));// Invalid ranges are not set to a default, so can range check early.
if(e<0||this.length<e||this.length<r)throw RangeError("Out of range index");if(r<=e)return this;if(e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"==typeof t)for(o=e;o<r;++o)this[o]=t;else{var s=X.isBuffer(t)?t:X.from(t,n),a=s.length;if(0===a)throw TypeError('The value "'+t+'" is invalid for argument "value"');for(o=0;o<r-e;++o)this[o+e]=s[o%a]}return this};// HELPER FUNCTIONS
// ================
var ty=/[^+/0-9A-Za-z-_]/g;function tg(t,e){e=e||1/0;for(var r,n=t.length,o=null,i=[],s=0;s<n;++s){// is surrogate component
if((r=t.charCodeAt(s))>55295&&r<57344){// last char was a lead
if(!o){// no lead yet
if(r>56319||s+1===n){// unexpected trail
(e-=3)>-1&&i.push(239,191,189);continue}// valid lead
o=r;continue}// 2 leads in a row
if(r<56320){(e-=3)>-1&&i.push(239,191,189),o=r;continue}// valid surrogate pair
r=(o-55296<<10|r-56320)+65536}else o&&(e-=3)>-1&&i.push(239,191,189);// encode utf8
if(o=null,r<128){if((e-=1)<0)break;i.push(r)}else if(r<2048){if((e-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else if(r<1114112){if((e-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}else throw Error("Invalid code point")}return i}function tm(t){return function(t){var e,r,n=function(t){var e=t.length;if(e%4>0)throw Error("Invalid string. Length must be a multiple of 4");// Trim off extra bytes after placeholder bytes are found
// See: https://github.com/beatgammit/base64-js/issues/42
var r=t.indexOf("=");-1===r&&(r=e);var n=r===e?0:4-r%4;return[r,n]}(t),o=n[0],i=n[1],s=new $((o+i)*3/4-i),a=0,u=i>0?o-4:o;for(r=0;r<u;r+=4)e=J[t.charCodeAt(r)]<<18|J[t.charCodeAt(r+1)]<<12|J[t.charCodeAt(r+2)]<<6|J[t.charCodeAt(r+3)],s[a++]=e>>16&255,s[a++]=e>>8&255,s[a++]=255&e;return 2===i&&(e=J[t.charCodeAt(r)]<<2|J[t.charCodeAt(r+1)]>>4,s[a++]=255&e),1===i&&(e=J[t.charCodeAt(r)]<<10|J[t.charCodeAt(r+1)]<<4|J[t.charCodeAt(r+2)]>>2,s[a++]=e>>8&255,s[a++]=255&e),s}(function(t){// Node converts strings with length < 2 to ''
if(// Node strips out invalid characters like \n and \t from the string, base64-js does not
(t=// Node takes equal signs as end of the Base64 encoding
(t=t.split("=")[0]).trim().replace(ty,"")).length<2)return"";// Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
for(;t.length%4!=0;)t+="=";return t}(t))}function tb(t,e,r,n){for(var o=0;o<n&&!(o+r>=e.length)&&!(o>=t.length);++o)e[o+r]=t[o];return o}// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function tw(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
var tE=function(){for(var t="0123456789abcdef",e=Array(256),r=0;r<16;++r)for(var n=16*r,o=0;o<16;++o)e[n+o]=t[r]+t[o];return e}();/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */function tv(t){return I.isPlainObject(t)||I.isArray(t)}/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */function tA(t){return I.endsWith(t,"[]")?t.slice(0,-2):t}/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */function tL(t,e,r){return t?t.concat(e).map(function(t,e){return(// eslint-disable-next-line no-param-reassign
t=tA(t),!r&&e?"["+t+"]":t)}).join(r?".":""):e}const tS=I.toFlatObject(I,{},null,function(t){return/^is[A-Z]/.test(t)});var tO=/**
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
 */function(t,e,r){if(!I.isObject(t))throw TypeError("target must be an object");// eslint-disable-next-line no-param-reassign
e=e||new FormData,// eslint-disable-next-line no-param-reassign
r=I.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(t,e){// eslint-disable-next-line no-eq-null,eqeqeq
return!I.isUndefined(e[t])});let n=r.metaTokens,o=r.visitor||c,i=r.dots,s=r.indexes,a=r.Blob||"undefined"!=typeof Blob&&Blob,u=a&&I.isSpecCompliantForm(e);if(!I.isFunction(o))throw TypeError("visitor must be a function");function l(t){if(null===t)return"";if(I.isDate(t))return t.toISOString();if(!u&&I.isBlob(t))throw new D("Blob is not supported. Use a Buffer instead.");return I.isArrayBuffer(t)||I.isTypedArray(t)?u&&"function"==typeof Blob?new Blob([t]):X.from(t):t}/**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */function c(t,r,o){let a=t;if(t&&!o&&"object"==typeof t){if(I.endsWith(r,"{}"))// eslint-disable-next-line no-param-reassign
r=n?r:r.slice(0,-2),// eslint-disable-next-line no-param-reassign
t=JSON.stringify(t);else{var u;if(I.isArray(t)&&(u=t,I.isArray(u)&&!u.some(tv))||(I.isFileList(t)||I.endsWith(r,"[]"))&&(a=I.toArray(t)))return(// eslint-disable-next-line no-param-reassign
r=tA(r),a.forEach(function(t,n){I.isUndefined(t)||null===t||e.append(!0===s?tL([r],n,i):null===s?r:r+"[]",l(t))}),!1)}}return!!tv(t)||(e.append(tL(o,r,i),l(t)),!1)}let f=[],d=Object.assign(tS,{defaultVisitor:c,convertValue:l,isVisitable:tv});if(!I.isObject(t))throw TypeError("data must be an object");return!function t(r,n){if(!I.isUndefined(r)){if(-1!==f.indexOf(r))throw Error("Circular reference detected in "+n.join("."));f.push(r),I.forEach(r,function(r,i){let s=!(I.isUndefined(r)||null===r)&&o.call(e,r,I.isString(i)?i.trim():i,n,d);!0===s&&t(r,n?n.concat(i):[i])}),f.pop()}}(t),e};/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */function tT(t){let e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\x00"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(t){return e[t]})}/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */function tR(t,e){this._pairs=[],t&&tO(t,this,e)}const tU=tR.prototype;/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */function tB(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function tC(t,e,r){let n;/*eslint no-param-reassign:0*/if(!e)return t;let o=r&&r.encode||tB,i=r&&r.serialize;if(n=i?i(e,r):I.isURLSearchParams(e)?e.toString():new tR(e,r).toString(o)){let e=t.indexOf("#");-1!==e&&(t=t.slice(0,e)),t+=(-1===t.indexOf("?")?"?":"&")+n}return t}tU.append=function(t,e){this._pairs.push([t,e])},tU.toString=function(t){let e=t?function(e){return t.call(this,e,tT)}:tT;return this._pairs.map(function(t){return e(t[0])+"="+e(t[1])},"").join("&")};var tx=class{constructor(){this.handlers=[]}/**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */use(t,e,r){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1}/**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */eject(t){this.handlers[t]&&(this.handlers[t]=null)}/**
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
   */forEach(t){I.forEach(this.handlers,function(e){null!==e&&t(e)})}},tj={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},tN="undefined"!=typeof URLSearchParams?URLSearchParams:tR,tP="undefined"!=typeof FormData?FormData:null,tk="undefined"!=typeof Blob?Blob:null;/**
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
 */const t_=("undefined"==typeof navigator||"ReactNative"!==(t=navigator.product)&&"NativeScript"!==t&&"NS"!==t)&&"undefined"!=typeof window&&"undefined"!=typeof document,tF="undefined"!=typeof WorkerGlobalScope&&// eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts;var tM={classes:{URLSearchParams:tN,FormData:tP,Blob:tk},isStandardBrowserEnv:t_,isStandardBrowserWebWorkerEnv:tF,protocols:["http","https","file","blob","url","data"]},tI=/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */function(t){if(I.isFormData(t)&&I.isFunction(t.entries)){let e={};return I.forEachEntry(t,(t,r)=>{!function t(e,r,n,o){let i=e[o++],s=Number.isFinite(+i),a=o>=e.length;if(i=!i&&I.isArray(n)?n.length:i,a)return I.hasOwnProp(n,i)?n[i]=[n[i],r]:n[i]=r,!s;n[i]&&I.isObject(n[i])||(n[i]=[]);let u=t(e,r,n[i],o);return u&&I.isArray(n[i])&&(n[i]=/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */function(t){let e,r;let n={},o=Object.keys(t),i=o.length;for(e=0;e<i;e++)n[r=o[e]]=t[r];return n}(n[i])),!s}(I.matchAll(/\w+|\[(\w*)]/g,t).map(t=>"[]"===t[0]?"":t[1]||t[0]),r,e,0)}),e}return null};const tD={transitional:tj,adapter:tM.isNode?"http":"xhr",transformRequest:[function(t,e){let r;let n=e.getContentType()||"",o=n.indexOf("application/json")>-1,i=I.isObject(t);i&&I.isHTMLForm(t)&&(t=new FormData(t));let s=I.isFormData(t);if(s)return o&&o?JSON.stringify(tI(t)):t;if(I.isArrayBuffer(t)||I.isBuffer(t)||I.isStream(t)||I.isFile(t)||I.isBlob(t))return t;if(I.isArrayBufferView(t))return t.buffer;if(I.isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();if(i){if(n.indexOf("application/x-www-form-urlencoded")>-1){var a,u;return(a=t,u=this.formSerializer,tO(a,new tM.classes.URLSearchParams,Object.assign({visitor:function(t,e,r,n){return tM.isNode&&I.isBuffer(t)?(this.append(e,t.toString("base64")),!1):n.defaultVisitor.apply(this,arguments)}},u))).toString()}if((r=I.isFileList(t))||n.indexOf("multipart/form-data")>-1){let e=this.env&&this.env.FormData;return tO(r?{"files[]":t}:t,e&&new e,this.formSerializer)}}return i||o?(e.setContentType("application/json",!1),/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */function(t,e,r){if(I.isString(t))try{return(0,JSON.parse)(t),I.trim(t)}catch(t){if("SyntaxError"!==t.name)throw t}return(0,JSON.stringify)(t)}(t)):t}],transformResponse:[function(t){let e=this.transitional||tD.transitional,r=e&&e.forcedJSONParsing,n="json"===this.responseType;if(t&&I.isString(t)&&(r&&!this.responseType||n)){let r=e&&e.silentJSONParsing;try{return JSON.parse(t)}catch(t){if(!r&&n){if("SyntaxError"===t.name)throw D.from(t,D.ERR_BAD_RESPONSE,this,null,this.response);throw t}}}return t}],/**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:tM.classes.FormData,Blob:tM.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};I.forEach(["delete","get","head","post","put","patch"],t=>{tD.headers[t]={}});// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const tq=I.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var /**
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
 */tH=t=>{let e,r,n;let o={};return t&&t.split("\n").forEach(function(t){n=t.indexOf(":"),e=t.substring(0,n).trim().toLowerCase(),r=t.substring(n+1).trim(),!e||o[e]&&tq[e]||("set-cookie"===e?o[e]?o[e].push(r):o[e]=[r]:o[e]=o[e]?o[e]+", "+r:r)}),o};const tz=Symbol("internals");function tJ(t){return t&&String(t).trim().toLowerCase()}function t$(t){return!1===t||null==t?t:I.isArray(t)?t.map(t$):String(t)}const tV=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function tW(t,e,r,n,o){if(I.isFunction(n))return n.call(this,e,r);if(o&&(e=r),I.isString(e)){if(I.isString(n))return -1!==e.indexOf(n);if(I.isRegExp(n))return n.test(e)}}class tK{constructor(t){t&&this.set(t)}set(t,e,r){let n=this;function o(t,e,r){let o=tJ(e);if(!o)throw Error("header name must be a non-empty string");let i=I.findKey(n,o);i&&void 0!==n[i]&&!0!==r&&(void 0!==r||!1===n[i])||(n[i||e]=t$(t))}let i=(t,e)=>I.forEach(t,(t,r)=>o(t,r,e));return I.isPlainObject(t)||t instanceof this.constructor?i(t,e):I.isString(t)&&(t=t.trim())&&!tV(t)?i(tH(t),e):null!=t&&o(e,t,r),this}get(t,e){if(t=tJ(t)){let r=I.findKey(this,t);if(r){let t=this[r];if(!e)return t;if(!0===e)return function(t){let e;let r=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;for(;e=n.exec(t);)r[e[1]]=e[2];return r}(t);if(I.isFunction(e))return e.call(this,t,r);if(I.isRegExp(e))return e.exec(t);throw TypeError("parser must be boolean|regexp|function")}}}has(t,e){if(t=tJ(t)){let r=I.findKey(this,t);return!!(r&&void 0!==this[r]&&(!e||tW(this,this[r],r,e)))}return!1}delete(t,e){let r=this,n=!1;function o(t){if(t=tJ(t)){let o=I.findKey(r,t);o&&(!e||tW(r,r[o],o,e))&&(delete r[o],n=!0)}}return I.isArray(t)?t.forEach(o):o(t),n}clear(t){let e=Object.keys(this),r=e.length,n=!1;for(;r--;){let o=e[r];(!t||tW(this,this[o],o,t,!0))&&(delete this[o],n=!0)}return n}normalize(t){let e=this,r={};return I.forEach(this,(n,o)=>{let i=I.findKey(r,o);if(i){e[i]=t$(n),delete e[o];return}let s=t?o.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,e,r)=>e.toUpperCase()+r):String(o).trim();s!==o&&delete e[o],e[s]=t$(n),r[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){let e=Object.create(null);return I.forEach(this,(r,n)=>{null!=r&&!1!==r&&(e[n]=t&&I.isArray(r)?r.join(", "):r)}),e}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,e])=>t+": "+e).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...e){let r=new this(t);return e.forEach(t=>r.set(t)),r}static accessor(t){let e=this[tz]=this[tz]={accessors:{}},r=e.accessors,n=this.prototype;function o(t){let e=tJ(t);r[e]||(!function(t,e){let r=I.toCamelCase(" "+e);["get","set","has"].forEach(n=>{Object.defineProperty(t,n+r,{value:function(t,r,o){return this[n].call(this,e,t,r,o)},configurable:!0})})}(n,t),r[e]=!0)}return I.isArray(t)?t.forEach(o):o(t),this}}function tG(t,e){let r=this||tD,n=e||r,o=tK.from(n.headers),i=n.data;return I.forEach(t,function(t){i=t.call(r,i,o.normalize(),e?e.status:void 0)}),o.normalize(),i}function tY(t){return!!(t&&t.__CANCEL__)}/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */function tX(t,e,r){D.call(this,null==t?"canceled":t,D.ERR_CANCELED,e,r),this.name="CanceledError"}tK.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),I.reduceDescriptors(tK.prototype,({value:t},e)=>{let r=e[0].toUpperCase()+e.slice(1);// map `set` => `Set`
return{get:()=>t,set(t){this[r]=t}}}),I.freezeMethods(tK),I.inherits(tX,D,{__CANCEL__:!0});var tZ=tM.isStandardBrowserEnv?{write:function(t,e,r,n,o,i){let s=[];s.push(t+"="+encodeURIComponent(e)),I.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),I.isString(n)&&s.push("path="+n),I.isString(o)&&s.push("domain="+o),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(t){let e=document.cookie.match(RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function tQ(t,e){return t&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)?e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t:e}var t0=tM.isStandardBrowserEnv?// whether the request URL is of the same origin as current location.
function(){let t;let e=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");/**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */function n(t){let n=t;// urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
return e&&(// IE needs attribute set twice to normalize properties
r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}/**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */return t=n(window.location.href),function(e){let r=I.isString(e)?n(e):e;return r.protocol===t.protocol&&r.host===t.host}}():function(){return!0},t1=/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */function(t,e){let r;t=t||10;let n=Array(t),o=Array(t),i=0,s=0;return e=void 0!==e?e:1e3,function(a){let u=Date.now(),l=o[s];r||(r=u),n[i]=a,o[i]=u;let c=s,f=0;for(;c!==i;)f+=n[c++],c%=t;if((i=(i+1)%t)===s&&(s=(s+1)%t),u-r<e)return;let d=l&&u-l;return d?Math.round(1e3*f/d):void 0}};function t2(t,e){let r=0,n=t1(50,250);return o=>{let i=o.loaded,s=o.lengthComputable?o.total:void 0,a=i-r,u=n(a),l=i<=s;r=i;let c={loaded:i,total:s,progress:s?i/s:void 0,bytes:a,rate:u||void 0,estimated:u&&s&&l?(s-i)/u:void 0,event:o};c[e?"download":"upload"]=!0,t(c)}}const t5="undefined"!=typeof XMLHttpRequest;var t4=t5&&function(t){return new Promise(function(e,r){let n,o=t.data,i=tK.from(t.headers).normalize(),s=t.responseType;function a(){t.cancelToken&&t.cancelToken.unsubscribe(n),t.signal&&t.signal.removeEventListener("abort",n)}I.isFormData(o)&&(tM.isStandardBrowserEnv||tM.isStandardBrowserWebWorkerEnv?i.setContentType(!1):i.setContentType("multipart/form-data;",!1));let u=new XMLHttpRequest;// HTTP basic authentication
if(t.auth){let e=t.auth.username||"",r=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";i.set("Authorization","Basic "+btoa(e+":"+r))}let l=tQ(t.baseURL,t.url);function c(){if(!u)return;// Prepare the response
let n=tK.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),o=s&&"text"!==s&&"json"!==s?u.response:u.responseText,i={data:o,status:u.status,statusText:u.statusText,headers:n,config:t,request:u};!function(t,e,r){let n=r.config.validateStatus;!r.status||!n||n(r.status)?t(r):e(new D("Request failed with status code "+r.status,[D.ERR_BAD_REQUEST,D.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}(function(t){e(t),a()},function(t){r(t),a()},i),// Clean up request
u=null}// Add xsrf header
// This is only done if running in a standard browser environment.
// Specifically not if we're in a web worker, or react-native.
if(u.open(t.method.toUpperCase(),tC(l,t.params,t.paramsSerializer),!0),// Set the request timeout in MS
u.timeout=t.timeout,"onloadend"in u?u.onloadend=c:u.onreadystatechange=function(){u&&4===u.readyState&&(0!==u.status||u.responseURL&&0===u.responseURL.indexOf("file:"))&&// readystate handler is calling before onerror or ontimeout handlers,
// so we should call onloadend on the next 'tick'
setTimeout(c)},// Handle browser request cancellation (as opposed to a manual cancellation)
u.onabort=function(){u&&(r(new D("Request aborted",D.ECONNABORTED,t,u)),// Clean up request
u=null)},// Handle low level network errors
u.onerror=function(){// Real errors are hidden from us by the browser
// onerror should only fire if it's a network error
r(new D("Network Error",D.ERR_NETWORK,t,u)),// Clean up request
u=null},// Handle timeout
u.ontimeout=function(){let e=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded",n=t.transitional||tj;t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),r(new D(e,n.clarifyTimeoutError?D.ETIMEDOUT:D.ECONNABORTED,t,u)),// Clean up request
u=null},tM.isStandardBrowserEnv){// Add xsrf header
let e=(t.withCredentials||t0(l))&&t.xsrfCookieName&&tZ.read(t.xsrfCookieName);e&&i.set(t.xsrfHeaderName,e)}// Remove Content-Type if data is undefined
void 0===o&&i.setContentType(null),"setRequestHeader"in u&&I.forEach(i.toJSON(),function(t,e){u.setRequestHeader(e,t)}),I.isUndefined(t.withCredentials)||(u.withCredentials=!!t.withCredentials),s&&"json"!==s&&(u.responseType=t.responseType),"function"==typeof t.onDownloadProgress&&u.addEventListener("progress",t2(t.onDownloadProgress,!0)),"function"==typeof t.onUploadProgress&&u.upload&&u.upload.addEventListener("progress",t2(t.onUploadProgress)),(t.cancelToken||t.signal)&&(// Handle cancellation
// eslint-disable-next-line func-names
n=e=>{u&&(r(!e||e.type?new tX(null,t,u):e),u.abort(),u=null)},t.cancelToken&&t.cancelToken.subscribe(n),t.signal&&(t.signal.aborted?n():t.signal.addEventListener("abort",n)));let f=function(t){let e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}(l);if(f&&-1===tM.protocols.indexOf(f)){r(new D("Unsupported protocol "+f+":",D.ERR_BAD_REQUEST,t));return}// Send the request
u.send(o||null)})};const t6={http:null,xhr:t4};I.forEach(t6,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch(t){// eslint-disable-next-line no-empty
}Object.defineProperty(t,"adapterName",{value:e})}});var t8={getAdapter:t=>{let e,r;t=I.isArray(t)?t:[t];let{length:n}=t;for(let o=0;o<n&&(e=t[o],!(r=I.isString(e)?t6[e.toLowerCase()]:e));o++);if(!r){if(!1===r)throw new D(`Adapter ${e} is not supported by the environment`,"ERR_NOT_SUPPORT");throw Error(I.hasOwnProp(t6,e)?`Adapter '${e}' is not available in the build`:`Unknown adapter '${e}'`)}if(!I.isFunction(r))throw TypeError("adapter is not a function");return r},adapters:t6};/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */function t3(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new tX(null,t)}function t7(t){t3(t),t.headers=tK.from(t.headers),// Transform request data
t.data=tG.call(t,t.transformRequest),-1!==["post","put","patch"].indexOf(t.method)&&t.headers.setContentType("application/x-www-form-urlencoded",!1);let e=t8.getAdapter(t.adapter||tD.adapter);return e(t).then(function(e){return t3(t),// Transform response data
e.data=tG.call(t,t.transformResponse,e),e.headers=tK.from(e.headers),e},function(e){return!tY(e)&&(t3(t),e&&e.response&&(e.response.data=tG.call(t,t.transformResponse,e.response),e.response.headers=tK.from(e.response.headers))),Promise.reject(e)})}const t9=t=>t instanceof tK?t.toJSON():t;function et(t,e){// eslint-disable-next-line no-param-reassign
e=e||{};let r={};function n(t,e,r){return I.isPlainObject(t)&&I.isPlainObject(e)?I.merge.call({caseless:r},t,e):I.isPlainObject(e)?I.merge({},e):I.isArray(e)?e.slice():e}// eslint-disable-next-line consistent-return
function o(t,e,r){return I.isUndefined(e)?I.isUndefined(t)?void 0:n(void 0,t,r):n(t,e,r)}// eslint-disable-next-line consistent-return
function i(t,e){if(!I.isUndefined(e))return n(void 0,e)}// eslint-disable-next-line consistent-return
function s(t,e){return I.isUndefined(e)?I.isUndefined(t)?void 0:n(void 0,t):n(void 0,e)}// eslint-disable-next-line consistent-return
function a(r,o,i){return i in e?n(r,o):i in t?n(void 0,r):void 0}let u={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(t,e)=>o(t9(t),t9(e),!0)};return I.forEach(Object.keys(Object.assign({},t,e)),function(n){let i=u[n]||o,s=i(t[n],e[n],n);I.isUndefined(s)&&i!==a||(r[n]=s)}),r}const ee="1.5.0",er={};// eslint-disable-next-line func-names
["object","boolean","number","function","string","symbol"].forEach((t,e)=>{er[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const en={};/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */er.transitional=function(t,e,r){function n(t,e){return"[Axios v"+ee+"] Transitional option '"+t+"'"+e+(r?". "+r:"")}// eslint-disable-next-line func-names
return(r,o,i)=>{if(!1===t)throw new D(n(o," has been removed"+(e?" in "+e:"")),D.ERR_DEPRECATED);return e&&!en[o]&&(en[o]=!0,// eslint-disable-next-line no-console
console.warn(n(o," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(r,o,i)}};var eo={assertOptions:/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */function(t,e,r){if("object"!=typeof t)throw new D("options must be an object",D.ERR_BAD_OPTION_VALUE);let n=Object.keys(t),o=n.length;for(;o-- >0;){let i=n[o],s=e[i];if(s){let e=t[i],r=void 0===e||s(e,i,t);if(!0!==r)throw new D("option "+i+" must be "+r,D.ERR_BAD_OPTION_VALUE);continue}if(!0!==r)throw new D("Unknown option "+i,D.ERR_BAD_OPTION)}},validators:er};const ei=eo.validators;/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */class es{constructor(t){this.defaults=t,this.interceptors={request:new tx,response:new tx}}/**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */request(t,e){let r,n;"string"==typeof t?(e=e||{}).url=t:e=t||{},e=et(this.defaults,e);let{transitional:o,paramsSerializer:i,headers:s}=e;void 0!==o&&eo.assertOptions(o,{silentJSONParsing:ei.transitional(ei.boolean),forcedJSONParsing:ei.transitional(ei.boolean),clarifyTimeoutError:ei.transitional(ei.boolean)},!1),null!=i&&(I.isFunction(i)?e.paramsSerializer={serialize:i}:eo.assertOptions(i,{encode:ei.function,serialize:ei.function},!0)),// Set config.method
e.method=(e.method||this.defaults.method||"get").toLowerCase();// Flatten headers
let a=s&&I.merge(s.common,s[e.method]);s&&I.forEach(["delete","get","head","post","put","patch","common"],t=>{delete s[t]}),e.headers=tK.concat(a,s);// filter out skipped interceptors
let u=[],l=!0;this.interceptors.request.forEach(function(t){("function"!=typeof t.runWhen||!1!==t.runWhen(e))&&(l=l&&t.synchronous,u.unshift(t.fulfilled,t.rejected))});let c=[];this.interceptors.response.forEach(function(t){c.push(t.fulfilled,t.rejected)});let f=0;if(!l){let t=[t7.bind(this),void 0];for(t.unshift.apply(t,u),t.push.apply(t,c),n=t.length,r=Promise.resolve(e);f<n;)r=r.then(t[f++],t[f++]);return r}n=u.length;let d=e;for(f=0;f<n;){let t=u[f++],e=u[f++];try{d=t(d)}catch(t){e.call(this,t);break}}try{r=t7.call(this,d)}catch(t){return Promise.reject(t)}for(f=0,n=c.length;f<n;)r=r.then(c[f++],c[f++]);return r}getUri(t){t=et(this.defaults,t);let e=tQ(t.baseURL,t.url);return tC(e,t.params,t.paramsSerializer)}}I.forEach(["delete","get","head","options"],function(t){/*eslint func-names:0*/es.prototype[t]=function(e,r){return this.request(et(r||{},{method:t,url:e,data:(r||{}).data}))}}),I.forEach(["post","put","patch"],function(t){/*eslint func-names:0*/function e(e){return function(r,n,o){return this.request(et(o||{},{method:t,headers:e?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}es.prototype[t]=e(),es.prototype[t+"Form"]=e(!0)});/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */class ea{constructor(t){let e;if("function"!=typeof t)throw TypeError("executor must be a function.");this.promise=new Promise(function(t){e=t});let r=this;// eslint-disable-next-line func-names
this.promise.then(t=>{if(!r._listeners)return;let e=r._listeners.length;for(;e-- >0;)r._listeners[e](t);r._listeners=null}),// eslint-disable-next-line func-names
this.promise.then=t=>{let e;// eslint-disable-next-line func-names
let n=new Promise(t=>{r.subscribe(t),e=t}).then(t);return n.cancel=function(){r.unsubscribe(e)},n},t(function(t,n,o){r.reason||(r.reason=new tX(t,n,o),e(r.reason))})}/**
   * Throws a `CanceledError` if cancellation has been requested.
   */throwIfRequested(){if(this.reason)throw this.reason}/**
   * Subscribe to the cancel signal
   */subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}/**
   * Unsubscribe from the cancel signal
   */unsubscribe(t){if(!this._listeners)return;let e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}/**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */static source(){let t;let e=new ea(function(e){t=e});return{token:e,cancel:t}}}const eu={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(eu).forEach(([t,e])=>{eu[e]=t});// Create the default instance to be exported
const el=/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */function t(e){let r=new es(e),n=a(es.prototype.request,r);return I.extend(n,es.prototype,r,{allOwnKeys:!0}),I.extend(n,r,null,{allOwnKeys:!0}),// Factory for creating new instances
n.create=function(r){return t(et(e,r))},n}(tD);// Expose Axios class to allow class inheritance
el.Axios=es,// Expose Cancel & CancelToken
el.CanceledError=tX,el.CancelToken=ea,el.isCancel=tY,el.VERSION=ee,el.toFormData=tO,// Expose AxiosError class
el.AxiosError=D,// alias for CanceledError for backward compatibility
el.Cancel=el.CanceledError,// Expose all/spread
el.all=function(t){return Promise.all(t)},el.spread=function(t){return function(e){return t.apply(null,e)}},// Expose isAxiosError
el.isAxiosError=function(t){return I.isObject(t)&&!0===t.isAxiosError},// Expose mergeConfig
el.mergeConfig=et,el.AxiosHeaders=tK,el.formToJSON=t=>tI(I.isHTMLForm(t)?new FormData(t):t),el.getAdapter=t8.getAdapter,el.HttpStatusCode=eu,el.default=el;// This module is intended to unwrap Axios default export as named.
// Keep top-level export same with static properties
// so that it can keep same with es module or cjs
const{Axios:ec,AxiosError:ef,CanceledError:ed,isCancel:eh,CancelToken:ep,VERSION:ey,all:eg,Cancel:em,isAxiosError:eb,spread:ew,toFormData:eE,AxiosHeaders:ev,HttpStatusCode:eA,formToJSON:eL,getAdapter:eS,mergeConfig:eO}=el,eT="95f474a01cc4252905d63c7d958d5749";el.defaults.baseURL="https://api.themoviedb.org/3/movie/popular",el.defaults.params={api_key:"95f474a01cc4252905d63c7d958d5749",language:"en-US",page:1};const eR={method:"GET",url:"https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",headers:{accept:"application/json",Authorization:"Bearer 95f474a01cc4252905d63c7d958d5749"}},eU=async()=>{try{let t=await el.request(eR),e=await t.data;return e}catch(t){console.log(t)}},eB=async()=>{try{let t=await el.get("https://api.themoviedb.org/3/genre/movie/list",{params:{api_key:eT}}),e=await t.data.genres;return e}catch(t){console.error(t.message)}},eC=async t=>{try{let e=el.get(`https://api.themoviedb.org/3/movie/${t}/videos`,{params:{api_key:eT}});return e}catch(t){console.log(t)}};async function ex(t){try{let e=await eC(t),r=await e.data.results[0].key;return r}catch(t){console.log(t)}}const ej=document.querySelector(".modal-backdrop");function eN(t){"Escape"===t.key&&(ej.classList.add("is-hidden"),ej.innerHTML="",document.removeEventListener("keydown",eN),document.body.style.overflow="auto")}el.defaults.baseURL="https://api.themoviedb.org/3/movie/popular",el.defaults.params={api_key:"95f474a01cc4252905d63c7d958d5749",language:"en-US"};const eP=async(t="1")=>{let e=new URLSearchParams({page:t});try{let t=await el.get(`?${e}`),r=await t.data;return r}catch(t){console.log(t)}},ek=`<div class="container pagination-section">
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
</div>`;// ACTUAL PAGE NUMBER
let e_=1;// UPDATE PAGES HANDLER
async function eF(){let t=await eP(e_);eD(t.results)}const eM=document.querySelector(".main-section");let eI=[];function eD(t){let e=[];eM.innerHTML="",t.forEach(t=>{//We need to add link that brings us to modal window if we press .main__photo-card
let r=[];for(let e of t.genre_ids)eI.map(t=>{t.id===e&&r.push(t.name)});let n=document.createElement("div");n.classList.add("film-poster"),n.setAttribute("value",t.id),n.insertAdjacentHTML("afterbegin",`<img class="film-poster__photo" src="https://image.tmdb.org/t/p/original${t.poster_path}" alt="${t.title}" loading="lazy"/>`);let o=document.createElement("div");o.classList.add("film-poster__description");let i=document.createElement("button");i.classList.add("film-poster__button"),i.setAttribute("type","button"),i.setAttribute("value",`${t.id}`),i.innerHTML="▶",i.addEventListener("click",t=>{ex(t.target.value).then(t=>{!function(t){// `<iframe width="560" height="315" src="https://www.youtube.com/embed/${key}?si=NP4x3PPUZd7lNCFY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
let e=document.createElement("div");e.classList.add("modal-trailer"),e.insertAdjacentHTML("afterbegin",`<iframe class="modal-trailer__iframe" src="https://www.youtube.com/embed/${t}?si=NP4x3PPUZd7lNCFY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`),ej.innerHTML="",ej.insertAdjacentElement("afterbegin",e),ej.classList.remove("is-hidden"),document.body.style.overflow="hidden",ej.addEventListener("click",()=>{ej.classList.add("is-hidden"),ej.innerHTML="",document.body.style.overflow="auto"}),document.addEventListener("keydown",eN)}(t)});// showTrailer(trailerKey);
}),o.insertAdjacentElement("afterbegin",i),o.insertAdjacentHTML("beforeend",` <p class="film-poster__title">
              ${t.title}
            </p><br />
            <p class="film-poster__genre">
              ${r.join(", ")} |
            </p>
            <p class="film-poster__year">
              ${t.release_date.substring(0,4)}
            </p>
          </div>
        </div>`),n.insertAdjacentElement("beforeend",o),e.push(n)}),eM.append(...e),function(){eM.insertAdjacentHTML("beforeend",ek);// QUERY SELECTORS
let t=document.querySelector(".current-page"),e=document.querySelector(".arrow--left"),r=document.querySelector(".dots--left"),n=document.querySelector(".two-pages--back"),o=document.querySelector(".page--back"),i=document.querySelector(".page--next"),s=document.querySelector(".two-pages--next"),a=document.querySelector(".dots--right"),u=document.querySelector(".page--last"),l=document.querySelector(".arrow--right"),c=document.querySelector(".page--first"),f=document.querySelector(".page--second"),d=document.querySelector(".page--third"),h=document.querySelector(".page--fourth"),p=document.querySelector(".page--fifth"),y=document.querySelector(".page--sixth"),g=document.querySelector(".page--seventh");// CONDITIONS
switch(// LAST PAGE
u.innerHTML=500,u.addEventListener("click",()=>{e_=500,eF()}),e_){case 1:c.classList.add("hidden"),r.classList.add("hidden"),n.classList.add("hidden"),o.classList.add("hidden"),i.classList.add("hidden"),s.classList.add("hidden"),e.classList.add("hidden");break;case 2:t.innerHTML=`${e_}`,r.classList.add("hidden"),n.classList.add("hidden"),o.classList.add("hidden"),i.classList.add("hidden"),s.classList.add("hidden"),f.classList.add("hidden");break;case 3:t.innerHTML=`${e_}`,r.classList.add("hidden"),n.classList.add("hidden"),o.innerHTML=e_-1,i.classList.add("hidden"),s.classList.add("hidden"),f.classList.add("hidden"),d.classList.add("hidden");break;case 4:t.innerHTML=`${e_}`,r.classList.add("hidden"),n.innerHTML=e_-2,o.innerHTML=e_-1,i.classList.add("hidden"),s.classList.add("hidden"),f.classList.add("hidden"),d.classList.add("hidden"),h.classList.add("hidden");break;case 500:i.classList.add("hidden"),s.classList.add("hidden"),u.classList.add("hidden"),a.classList.add("hidden"),l.classList.add("hidden");case 499:s.classList.add("hidden"),u.classList.add("hidden"),a.classList.add("hidden");case 498:u.classList.add("hidden"),a.classList.add("hidden");case 497:a.classList.add("hidden");default:t.innerHTML=`${e_}`,n.innerHTML=e_-2,o.innerHTML=e_-1,i.innerHTML=e_+1,s.innerHTML=e_+2,f.classList.add("hidden"),d.classList.add("hidden"),h.classList.add("hidden"),p.classList.add("hidden"),y.classList.add("hidden"),g.classList.add("hidden")}// BUTTONS LISTENERS
c.addEventListener("click",()=>{e_=1,eF()}),f.addEventListener("click",()=>{e_=2,eF()}),d.addEventListener("click",()=>{e_=3,eF()}),h.addEventListener("click",()=>{e_=4,eF()}),p.addEventListener("click",()=>{e_=5,eF()}),y.addEventListener("click",()=>{e_=6,eF()}),g.addEventListener("click",()=>{e_=7,eF()}),i.addEventListener("click",()=>{e_++,eF()}),s.addEventListener("click",()=>{e_+=2,eF()}),o.addEventListener("click",()=>{e_--,eF()}),n.addEventListener("click",()=>{e_-=2,eF()}),l.addEventListener("click",()=>{e_++,eF()}),e.addEventListener("click",()=>{1!==e_&&(e_--,eF())})}()}eB().then(t=>eI.push(...t)).catch(t=>console.log(t)),async function(){await eU().then(t=>{eD(t.results)}).catch(t=>console.log(t))}();// makeFilmsBoxByPage();
//# sourceMappingURL=index.0e4f78f0.js.map

//# sourceMappingURL=index.0e4f78f0.js.map
