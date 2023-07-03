ace.define("ace/mode/rdoc",["require","exports","module","ace/lib/oop","ace/mode/text","ace/tokenizer","ace/mode/text_highlight_rules","ace/mode/rdoc_highlight_rules","ace/mode/matching_brace_outdent"],(function(e,t,o){var r=e("../lib/oop"),n=e("./text").Mode,i=e("../tokenizer").Tokenizer,a=(e("./text_highlight_rules").TextHighlightRules,e("./rdoc_highlight_rules").RDocHighlightRules),g=e("./matching_brace_outdent").MatchingBraceOutdent,l=function(e){this.$tokenizer=new i((new a).getRules()),this.$outdent=new g};r.inherits(l,n),function(){this.getNextLineIndent=function(e,t,o){return this.$getIndent(t)}}.call(l.prototype),t.Mode=l})),ace.define("ace/mode/rdoc_highlight_rules",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/mode/text_highlight_rules","ace/mode/latex_highlight_rules"],(function(e,t,o){var r=e("../lib/oop"),n=(e("../lib/lang"),e("./text_highlight_rules").TextHighlightRules),i=(e("./latex_highlight_rules"),function(){this.$rules={start:[{token:"comment",regex:"%.*$"},{token:"text",regex:"\\\\[$&%#\\{\\}]"},{token:"keyword",regex:"\\\\(?:name|alias|method|S3method|S4method|item|code|preformatted|kbd|pkg|var|env|option|command|author|email|url|source|cite|acronym|href|code|preformatted|link|eqn|deqn|keyword|usage|examples|dontrun|dontshow|figure|if|ifelse|Sexpr|RdOpts|inputencoding|usepackage)\\b",next:"nospell"},{token:"keyword",regex:"\\\\(?:[a-zA-z0-9]+|[^a-zA-z0-9])"},{token:"paren.keyword.operator",regex:"[[({]"},{token:"paren.keyword.operator",regex:"[\\])}]"},{token:"text",regex:"\\s+"}],nospell:[{token:"comment",regex:"%.*$",next:"start"},{token:"nospell.text",regex:"\\\\[$&%#\\{\\}]"},{token:"keyword",regex:"\\\\(?:name|alias|method|S3method|S4method|item|code|preformatted|kbd|pkg|var|env|option|command|author|email|url|source|cite|acronym|href|code|preformatted|link|eqn|deqn|keyword|usage|examples|dontrun|dontshow|figure|if|ifelse|Sexpr|RdOpts|inputencoding|usepackage)\\b"},{token:"keyword",regex:"\\\\(?:[a-zA-z0-9]+|[^a-zA-z0-9])",next:"start"},{token:"paren.keyword.operator",regex:"[[({]"},{token:"paren.keyword.operator",regex:"[\\])]"},{token:"paren.keyword.operator",regex:"}",next:"start"},{token:"nospell.text",regex:"\\s+"},{token:"nospell.text",regex:"\\w+"}]}});r.inherits(i,n),t.RDocHighlightRules=i})),ace.define("ace/mode/latex_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],(function(e,t,o){var r=e("../lib/oop"),n=e("./text_highlight_rules").TextHighlightRules,i=function(){this.$rules={start:[{token:"keyword",regex:"\\\\(?:[^a-zA-Z]|[a-zA-Z]+)"},{token:"lparen",regex:"[[({]"},{token:"rparen",regex:"[\\])}]"},{token:"string",regex:"\\$(?:(?:\\\\.)|(?:[^\\$\\\\]))*?\\$"},{token:"comment",regex:"%.*$"}]}};r.inherits(i,n),t.LatexHighlightRules=i})),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],(function(e,t,o){var r=e("../range").Range,n=function(){};(function(){this.checkOutdent=function(e,t){return!!/^\s+$/.test(e)&&/^\s*\}/.test(t)},this.autoOutdent=function(e,t){var o=e.getLine(t).match(/^(\s*\})/);if(!o)return 0;var n=o[1].length,i=e.findMatchingBracket({row:t,column:n});if(!i||i.row==t)return 0;var a=this.$getIndent(e.getLine(i.row));e.replace(new r(t,0,t,n-1),a)},this.$getIndent=function(e){var t=e.match(/^(\s+)/);return t?t[1]:""}}).call(n.prototype),t.MatchingBraceOutdent=n}));
