//small templating function
"use strict";
var webChef = Object.create(null);
webChef.cook=function(text,vals){
		var output = text;
		var exprs = text.match(/<%\s?\w+\s?%>/ig);
		exprs.forEach(function(el){
			output = output.replace(el,vals[el.match(/<%\s?(\w+)\s?%>/i)[1]]||"");
		});
		return output;
	}
webChef.makeRecipe=function(text){
	return function(data){
		return webChef.cook(text,data);
	}
}
