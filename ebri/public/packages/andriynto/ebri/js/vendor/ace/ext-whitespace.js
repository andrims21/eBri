ace.define("ace/ext/whitespace",["require","exports","module","ace/lib/lang"],function(e,t,n){var r=e("../lib/lang");t.$detectIndentation=function(e,t){function n(e){var t=0;for(var n=e;n<r.length;n+=e)t+=r[n]||0;return t}var r=[],i=[],s=0,o=0,u=Math.min(e.length,1e3);for(var a=0;a<u;a++){var f=e[a];if(!/^\s*[^*+\-\s]/.test(f))continue;var l=f.match(/^\t*/)[0].length;f[0]=="	"&&s++;var c=f.match(/^ */)[0].length;if(c&&f[c]!="	"){var h=c-o;h>0&&!(o%h)&&!(c%h)&&(i[h]=(i[h]||0)+1),r[c]=(r[c]||0)+1}o=c;while(a<u&&f[f.length-1]=="\\")f=e[a++]}if(!r.length)return;var p=i.reduce(function(e,t){return e+t},0),d={score:0,length:0},v=0;for(var a=1;a<12;a++){if(a==1){v=n(a);var m=1}else var m=n(a)/v;i[a]&&(m+=i[a]/p),m>d.score&&(d={score:m,length:a})}if(d.score&&d.score>1.4)var g=d.length;if(s>v+1)return{ch:"	",length:g};if(v+1>s)return{ch:" ",length:g}},t.detectIndentation=function(e){var n=e.getLines(0,1e3),r=t.$detectIndentation(n)||{};return r.ch&&e.setUseSoftTabs(r.ch==" "),r.length&&e.setTabSize(r.length),r},t.trimTrailingSpace=function(e,t){var n=e.getDocument(),r=n.getAllLines(),i=t?-1:0;for(var s=0,o=r.length;s<o;s++){var u=r[s],a=u.search(/\s+$/);a>i&&n.removeInLine(s,a,u.length)}},t.convertIndentation=function(e,t,n){var i=e.getTabString()[0],s=e.getTabSize();n||(n=s),t||(t=i);var o=t=="	"?t:r.stringRepeat(t,n),u=e.doc,a=u.getAllLines(),f={},l={};for(var c=0,h=a.length;c<h;c++){var p=a[c],d=p.match(/^\s*/)[0];if(d){var v=e.$getStringScreenWidth(d)[0],m=Math.floor(v/s),g=v%s,y=f[m]||(f[m]=r.stringRepeat(o,m));y+=l[g]||(l[g]=r.stringRepeat(" ",g)),y!=d&&(u.removeInLine(c,0,d.length),u.insertInLine({row:c,column:0},y))}}e.setTabSize(n),e.setUseSoftTabs(t==" ")},t.$parseStringArg=function(e){var t={};/t/.test(e)?t.ch="	":/s/.test(e)&&(t.ch=" ");var n=e.match(/\d+/);return n&&(t.length=parseInt(n[0],10)),t},t.$parseArg=function(e){return e?typeof e=="string"?t.$parseStringArg(e):typeof e.text=="string"?t.$parseStringArg(e.text):e:{}},t.commands=[{name:"detectIndentation",exec:function(e){t.detectIndentation(e.session)}},{name:"trimTrailingSpace",exec:function(e){t.trimTrailingSpace(e.session)}},{name:"convertIndentation",exec:function(e,n){var r=t.$parseArg(n);t.convertIndentation(e.session,r.ch,r.length)}},{name:"setIndentation",exec:function(e,n){var r=t.$parseArg(n);r.length&&e.session.setTabSize(r.length),r.ch&&e.session.setUseSoftTabs(r.ch==" ")}}]}),function(){ace.require(["ace/ext/whitespace"],function(){})}();