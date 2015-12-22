ace.define("ace/ext/statusbar",["require","exports","module","ace/lib/dom","ace/lib/lang"],function(e,t,n){var r=e("ace/lib/dom"),i=e("ace/lib/lang"),s=function(e,t){this.element=r.createElement("div"),this.element.className="ace_status-indicator",this.element.style.cssText="display: inline-block;",t.appendChild(this.element);var n=i.delayedCall(function(){this.updateStatus(e)}.bind(this));e.on("changeStatus",function(){n.schedule(100)}),e.on("changeSelection",function(){n.schedule(100)})};(function(){this.updateStatus=function(e){function t(e,t){e&&n.push(e,t||"|")}var n=[];e.$vimModeHandler?t(e.$vimModeHandler.getStatusText()):e.commands.recording&&t("REC");var r=e.selection.lead;t(r.row+":"+r.column," ");if(!e.selection.isEmpty()){var i=e.getSelectionRange();t("("+(i.end.row-i.start.row)+":"+(i.end.column-i.start.column)+")")}n.pop(),this.element.textContent=n.join("")}}).call(s.prototype),t.StatusBar=s}),function(){ace.require(["ace/ext/statusbar"],function(){})}();