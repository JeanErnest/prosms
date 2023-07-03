ace.define("ace/mode/diff",["require","exports","module","ace/lib/oop","ace/mode/text","ace/tokenizer","ace/mode/diff_highlight_rules","ace/mode/folding/diff"],(function(e,i,t){var n=e("../lib/oop"),o=e("./text").Mode,r=e("../tokenizer").Tokenizer,a=e("./diff_highlight_rules").DiffHighlightRules,d=e("./folding/diff").FoldMode,l=function(){this.$tokenizer=new r((new a).getRules(),"i"),this.foldingRules=new d(["diff","index","\\+{3}","@@|\\*{5}"],"i")};n.inherits(l,o),function(){}.call(l.prototype),i.Mode=l})),ace.define("ace/mode/diff_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],(function(e,i,t){var n=e("../lib/oop"),o=e("./text_highlight_rules").TextHighlightRules,r=function(){this.$rules={start:[{regex:"^(?:\\*{15}|={67}|-{3}|\\+{3})$",token:"punctuation.definition.separator.diff",name:"keyword"},{regex:"^(@@)(\\s*.+?\\s*)(@@)(.*)$",token:["constant","constant.numeric","constant","comment.doc.tag"]},{regex:"^(\\d+)([,\\d]+)(a|d|c)(\\d+)([,\\d]+)(.*)$",token:["constant.numeric","punctuation.definition.range.diff","constant.function","constant.numeric","punctuation.definition.range.diff","invalid"],name:"meta."},{regex:"^(?:(\\-{3}|\\+{3}|\\*{3})( .+))$",token:["constant.numeric","meta.tag"]},{regex:"^([!+>])(.*?)(\\s*)$",token:["support.constant","text","invalid"]},{regex:"^([<\\-])(.*?)(\\s*)$",token:["support.function","string","invalid"]},{regex:"^(diff)(\\s+--\\w+)?(.+?)( .+)?$",token:["variable","variable","keyword","variable"]},{regex:"^Index.+$",token:"variable"},{regex:"^(.*?)(\\s*)$",token:["invisible","invalid"]}]}};n.inherits(r,o),i.DiffHighlightRules=r})),ace.define("ace/mode/folding/diff",["require","exports","module","ace/lib/oop","ace/mode/folding/fold_mode","ace/range"],(function(e,i,t){var n=e("../../lib/oop"),o=e("./fold_mode").FoldMode,r=e("../../range").Range,a=i.FoldMode=function(e,i){this.regExpList=e,this.flag=i,this.foldingStartMarker=RegExp("^("+e.join("|")+")",this.flag)};n.inherits(a,o),function(){this.getFoldWidgetRange=function(e,i,t){for(var n=e.getLine(t),o={row:t,column:n.length},a=this.regExpList,d=1;d<=a.length;d++){var l=RegExp("^("+a.slice(0,d).join("|")+")",this.flag);if(l.test(n))break}for(var f=e.getLength();++t<f&&(n=e.getLine(t),!l.test(n)););if(t!=o.row+1)return r.fromPoints(o,{row:t-1,column:n.length})}}.call(a.prototype)}));