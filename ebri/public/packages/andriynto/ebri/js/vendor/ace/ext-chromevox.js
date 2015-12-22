ace.define("ace/ext/chromevox",["require","exports","module","ace/editor","ace/config"],function(e,t,n){function r(){return typeof cvox!="undefined"&&cvox&&cvox.Api}function i(e){if(r())yt(e);else{bt++;if(bt>=wt)return;window.setTimeout(i,500,e)}}var s={};s.SpeechProperty,s.Cursor,s.Token,s.Annotation;var o={rate:.8,pitch:.4,volume:.9},u={rate:1,pitch:.5,volume:.9},a={rate:.8,pitch:.8,volume:.9},f={rate:.8,pitch:.3,volume:.9},l={rate:.8,pitch:.7,volume:.9},c={rate:.8,pitch:.8,volume:.9},h={punctuationEcho:"none",relativePitch:-0.6},p="ALERT_NONMODAL",d="ALERT_MODAL",v="INVALID_KEYPRESS",m="insertMode",g="start",y=[{substr:";",newSubstr:" semicolon "},{substr:":",newSubstr:" colon "}],b={SPEAK_ANNOT:"annots",SPEAK_ALL_ANNOTS:"all_annots",TOGGLE_LOCATION:"toggle_location",SPEAK_MODE:"mode",SPEAK_ROW_COL:"row_col",TOGGLE_DISPLACEMENT:"toggle_displacement",FOCUS_TEXT:"focus_text"},w="CONTROL + SHIFT ";s.editor=null;var E=null,S={},x=!1,T=!1,N=!1,C=null,k={},L={},A=function(e){return w+String.fromCharCode(e)},O=function(){var e=s.editor.keyBinding.getKeyboardHandler();return e.$id==="ace/keyboard/vim"},M=function(e){return s.editor.getSession().getTokenAt(e.row,e.column+1)},_=function(e){return s.editor.getSession().getLine(e.row)},D=function(e){S[e.row]&&cvox.Api.playEarcon(p),x?(cvox.Api.stop(),V(e),z(M(e)),R(e.row,1)):R(e.row,0)},P=function(e){var t=_(e),n=t.substr(e.column-1);e.column===0&&(n=" "+t);var r=/^\W(\w+)/,i=r.exec(n);return i!==null},H={constant:{prop:o},entity:{prop:a},keyword:{prop:f},storage:{prop:l},variable:{prop:c},meta:{prop:u,replace:[{substr:"</",newSubstr:" closing tag "},{substr:"/>",newSubstr:" close tag "},{substr:"<",newSubstr:" tag start "},{substr:">",newSubstr:" tag end "}]}},B={prop:B},j=function(e,t){var n=e;for(var r=0;r<t.length;r++){var i=t[r],s=new RegExp(i.substr,"g");n=n.replace(s,i.newSubstr)}return n},F=function(e,t,n){var r={};r.value="",r.type=e[t].type;for(var i=t;i<n;i++)r.value+=e[i].value;return r},I=function(e){if(e.length<=1)return e;var t=[],n=0;for(var r=1;r<e.length;r++){var i=e[n],s=e[r];W(i)!==W(s)&&(t.push(F(e,n,r)),n=r)}return t.push(F(e,n,e.length)),t},q=function(e){var t=s.editor.getSession().getLine(e),n=/^\s*$/;return n.exec(t)!==null},R=function(e,t){var n=s.editor.getSession().getTokens(e);if(n.length===0||q(e)){cvox.Api.playEarcon("EDITABLE_TEXT");return}n=I(n);var r=n[0];n=n.filter(function(e){return e!==r}),X(r,t),n.forEach(z)},U=function(e){X(e,0)},z=function(e){X(e,1)},W=function(e){if(!e||!e.type)return;var t=e.type.split(".");if(t.length===0)return;var n=t[0],r=H[n];return r?r:B},X=function(e,t){var n=W(e),r=j(e.value,y);n.replace&&(r=j(r,n.replace)),cvox.Api.speak(r,t,n.prop)},V=function(e){var t=_(e);cvox.Api.speak(t[e.column],1)},$=function(e,t){var n=_(t),r=n.substring(e.column,t.column);r=r.replace(/ /g," space "),cvox.Api.speak(r)},J=function(e,t){if(Math.abs(e.column-t.column)!==1){var n=_(t).length;if(t.column===0||t.column===n){R(t.row,0);return}if(P(t)){cvox.Api.stop(),z(M(t));return}}V(t)},K=function(e,t){s.editor.selection.isEmpty()?T?$(e,t):J(e,t):($(e,t),cvox.Api.speak("selected",1))},Q=function(e){if(N){N=!1;return}var t=s.editor.selection.getCursor();t.row!==E.row?D(t):K(E,t),E=t},G=function(e){s.editor.selection.isEmpty()&&cvox.Api.speak("unselected")},Y=function(e){var t=e.data;switch(t.action){case"removeText":cvox.Api.speak(t.text,0,h),N=!0;break;case"insertText":cvox.Api.speak(t.text,0),N=!0}},Z=function(e){var t=e.row,n=e.column;return!S[t]||!S[t][n]},et=function(e){S={};for(var t=0;t<e.length;t++){var n=e[t],r=n.row,i=n.column;S[r]||(S[r]={}),S[r][i]=n}},tt=function(e){var t=s.editor.getSession().getAnnotations(),n=t.filter(Z);n.length>0&&cvox.Api.playEarcon(p),et(t)},nt=function(e){var t=e.type+" "+e.text+" on "+it(e.row,e.column);t=t.replace(";","semicolon"),cvox.Api.speak(t,1)},rt=function(e){var t=S[e];for(var n in t)nt(t[n])},it=function(e,t){return"row "+(e+1)+" column "+(t+1)},st=function(){cvox.Api.speak(it(E.row,E.column))},ot=function(){for(var e in S)rt(e)},ut=function(){if(!O())return;switch(s.editor.keyBinding.$data.state){case m:cvox.Api.speak("Insert mode");break;case g:cvox.Api.speak("Command mode")}},at=function(){x=!x,x?cvox.Api.speak("Speak location on row change enabled."):cvox.Api.speak("Speak location on row change disabled.")},ft=function(){T=!T,T?cvox.Api.speak("Speak displacement on column changes."):cvox.Api.speak("Speak current character or word on column changes.")},lt=function(e){if(e.ctrlKey&&e.shiftKey){var t=k[e.keyCode];t&&t.func()}},ct=function(e,t){if(!O())return;var n=t.keyBinding.$data.state;if(n===C)return;switch(n){case m:cvox.Api.playEarcon(d),cvox.Api.setKeyEcho(!0);break;case g:cvox.Api.playEarcon(d),cvox.Api.setKeyEcho(!1)}C=n},ht=function(e){var t=e.detail.customCommand,n=L[t];n&&(n.func(),s.editor.focus())},pt=function(){var e=mt.map(function(e){return{desc:e.desc+A(e.keyCode),cmd:e.cmd}}),t=document.querySelector("body");t.setAttribute("contextMenuActions",JSON.stringify(e)),t.addEventListener("ATCustomEvent",ht,!0)},dt=function(e){e.match?R(E.row,0):cvox.Api.playEarcon(v)},vt=function(){s.editor.focus()},mt=[{keyCode:49,func:function(){rt(E.row)},cmd:b.SPEAK_ANNOT,desc:"Speak annotations on line"},{keyCode:50,func:ot,cmd:b.SPEAK_ALL_ANNOTS,desc:"Speak all annotations"},{keyCode:51,func:ut,cmd:b.SPEAK_MODE,desc:"Speak Vim mode"},{keyCode:52,func:at,cmd:b.TOGGLE_LOCATION,desc:"Toggle speak row location"},{keyCode:53,func:st,cmd:b.SPEAK_ROW_COL,desc:"Speak row and column"},{keyCode:54,func:ft,cmd:b.TOGGLE_DISPLACEMENT,desc:"Toggle speak displacement"},{keyCode:55,func:vt,cmd:b.FOCUS_TEXT,desc:"Focus text"}],gt=function(){s.editor=editor,editor.getSession().selection.on("changeCursor",Q),editor.getSession().selection.on("changeSelection",G),editor.getSession().on("change",Y),editor.getSession().on("changeAnnotation",tt),editor.on("changeStatus",ct),editor.on("findSearchBox",dt),editor.container.addEventListener("keydown",lt),E=editor.selection.getCursor()},yt=function(e){gt(),mt.forEach(function(e){k[e.keyCode]=e,L[e.cmd]=e}),e.on("focus",gt),O()&&cvox.Api.setKeyEcho(!1),pt()},bt=0,wt=15,Et=e("../editor").Editor;e("../config").defineOptions(Et.prototype,"editor",{enableChromevoxEnhancements:{set:function(e){e&&i(this)},value:!0}})}),function(){ace.require(["ace/ext/chromevox"],function(){})}();