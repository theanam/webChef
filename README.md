# webChef: Minimal erb/ejs style tiny templating snippet (Library!)

Yet another erb / ejs inspired templating engine? not actually. This plugin / code is actually a lot simpler (just 16 lines) . UnderscoreJS has almost the same feature. that one is even better, use mine if you want to include something even smaller, or you just like me for no reason.

### What it does?

* Use erb style syntax <%something%>
* Helps you seperate logic and view (by seperate I mean completely seperate)
* Renders template with a given data


### What it doesn't

* use any loop / condition, expressions or filters in itself (like other fancy templating languages. if you need some, feel free to use handlebars,mustache or any other tools instead)
* leave you with a lot of code
* disturb your cat

### Usage

webChef creates an object named `webChef` which has two functions : `cook` and `makeRecipe` . The first one, `cook` takes two arguments, template [String] and data [object] and returns the compiled template. Example :

```js
var template = "<%name%> is <%type%> I just <%feeling%> it!";
var data = {
	name    : "webChef",
	type    : "simple",
	feeling : "love"
}
webChef.cook(template,data);
```

the above code will return:

```
webChef is simple I just love it!
```

The second function `makeRecipe` takes one argument, and returns a function. That function can be used to render template with data as argument. This is useful when you need to reuse the template. Let's rewrite the same code with `makeRecipe` :

```js
var template = "<%name%> is <%type%> I just <%feeling%> it!";
var data1 = {
	name    : "webChef",
	type    : "simple",
	feeling : "love"
}
var data2 = {
	name    : "JavaScript",
	type    : "awesome",
	feeling : "wanna hug"
}

var template = webChef.makeRecipe(template);
template(data1); // for first dataset
template(data2); // for second dataset
```

This will result in :
```
webChef is simple I just love it!
JavaScript is awesome I just wanna hug it!
```

### A more practical example, using the template as a part of the document.

create a `script` tag with `type` anything other than `text/javascript` (or the browser will try to interprete it) , in this example, I'll be using `text/potato` and give it an id.

```html
<script type="text/potato" id="mytemplate">
	<div id="sda">
		<h1 class ="<%theclass%>"><%data%></h1>
	</div>
</script>
```

great! now you need to get it's inner HTML and pass it as the template in `cook / makeRecipe` function. you'll have to write a few lines of JavaScript for this :

```js
var templateData = document.querySelector('#mytemplate').innerHTML;
var template = webChef.makeRecipe(templateData);
var dataFromSource = {
	data:'lorem ipsum',
	theclass:'nice'
}
document.body.innerHTML=template(dataFromSource);
```

this code will replace everything inside the `<body>` tag, resulting in this :

```html
<body>
	<div id="sda">
		<h1 class="nice">lorem ipsum</h1>
	</div>
</body>
```

### Things to consider

* It uses *Regular Expressions* , may perform slow for bigger templates.
* Nothing is 100% Bug Free
* Contributions are always welcome
* This project is released under [MIT License](http://opensource.org/licenses/MIT)

Developed and maintained by [Anam Ahmed](http://anam.co)