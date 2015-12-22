/**
 * jQuery BASE64 functions
 *
 * @alias Muhammad Hussein Fattahizadeh < muhammad [AT] semnanweb [DOT] com >
 * @link http://www.semnanweb.com/jquery-plugin/base64.html
 * @see http://www.webtoolkit.info/
 * @license http://www.gnu.org/licenses/gpl.html [GNU General Public License]
 * @param {jQuery} {base64Encode:function(input))
 * @param {jQuery} {base64Decode:function(input))
 * @return string
 */

(function(e){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",n=function(e){e=e.replace(/\x0d\x0a/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);r<128?t+=String.fromCharCode(r):r>127&&r<2048?(t+=String.fromCharCode(r>>6|192),t+=String.fromCharCode(r&63|128)):(t+=String.fromCharCode(r>>12|224),t+=String.fromCharCode(r>>6&63|128),t+=String.fromCharCode(r&63|128))}return t},r=function(e){var t="",n=0,r=c1=c2=0;while(n<e.length)r=e.charCodeAt(n),r<128?(t+=String.fromCharCode(r),n++):r>191&&r<224?(c2=e.charCodeAt(n+1),t+=String.fromCharCode((r&31)<<6|c2&63),n+=2):(c2=e.charCodeAt(n+1),c3=e.charCodeAt(n+2),t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63),n+=3);return t};return e.extend({base64Encode:function(e){var r="",i,s,o,u,a,f,l,c=0;e=n(e);while(c<e.length)i=e.charCodeAt(c++),s=e.charCodeAt(c++),o=e.charCodeAt(c++),u=i>>2,a=(i&3)<<4|s>>4,f=(s&15)<<2|o>>6,l=o&63,isNaN(s)?f=l=64:isNaN(o)&&(l=64),r=r+t.charAt(u)+t.charAt(a)+t.charAt(f)+t.charAt(l);return r},base64Decode:function(e){var n="",i,s,o,u,a,f,l,c=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(c<e.length)u=t.indexOf(e.charAt(c++)),a=t.indexOf(e.charAt(c++)),f=t.indexOf(e.charAt(c++)),l=t.indexOf(e.charAt(c++)),i=u<<2|a>>4,s=(a&15)<<4|f>>2,o=(f&3)<<6|l,n+=String.fromCharCode(i),f!=64&&(n+=String.fromCharCode(s)),l!=64&&(n+=String.fromCharCode(o));return n=r(n),n}}),0})(jQuery);