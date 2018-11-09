# jwBulkDOM

Do you hate having to iterate over a bunch of elements to add a class to all of them?

Do you want to avoid that without using jQuery?

If so, then this library is for you!

With this library, you can use new `jwBulk` functions on `HTMLElement` and `HTMLCollection` objects to add/remove styles, eventsListeners, etc.! 
While `HTMLElement` will only modify one element with multiple changes, `HTMLCollection` lets you modify all of the elements in the collection!

## How to use:

```JavaScript
window.onload=function(){
	jwLibs.bulkDOM.init();
	var p=document.getElementsByTagName("p");
	p.jwBulkStyle({"color":"red"}); // Sets all <p> to have the text color red.
}
```

Even better, you can string together a bunch of bulkDOM functions on one line!

```JavaScript
window.onload=function(){
	jwLibs.bulkDOM.init();
	var p=document.getElementsByTagName("p");
	p.jwBulkStyle({"color":"red", "background-color":"blue"}).jwBulkToggleClass(["class1", "class2"]);
	/*
		For all <p>:
			1. Set color to red
			2. Set background-color to blue
			3. Toggle the class "class1"
			4. Toggle the class "class2"
	*/
}
```

If that's not cool enough, bulk modifications also trigger events!

```JavaScript
window.onload=function(){
	jwLibs.bulkDOM.init();
	var p=document.getElementsByTagName("p");
	p.jwBulkAddEventListener({"jwBulkStyle":function(e){console.log(e.detail.rules)}});
	p.jwBulkStyle({"color":"red", "background-color":"blue"});
}
```

How about only detecting when a bulk modification affects multiple elements?

```JavaScript
window.onload=function(){
	jwLibs.bulkDOM.init();
	var p=document.getElementsByTagName("p");
	p.jwBulkAddEventListener({"jwBulkStyleMulti":function(e){console.log(e.detail.rules)}});
	p.jwBulkStyle({"color":"red", "background-color":"blue"});
	p[0].jwBulkStyle({"color":"yellow", "background-color":"blue"});
}
```