/*
 webChef v1
 Developed and maintained by [Anam Ahmed](http://anam.co)
 License: MIT
*/

(function (window) {
   'use strict';

	var webChef = Object.create(null);

	webChef.cook = function(text, vals){
		var output = text,
			exprs = text.match(/<%\s?\w+\s?%>/ig);

		exprs.forEach(function(el){
			output = output.replace(el,vals[el.match(/<%\s?(\w+)\s?%>/i)[1]]||"");
		});

		return output;
	};

	webChef.makeRecipe=function(text){
		return function(data){
			return webChef.cook(text, data);
		};
	};

	//expose webChef to global object
	window.webChef = webChef;
}(window));