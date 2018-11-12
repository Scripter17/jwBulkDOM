# jwBulkDOM

![Jank: 70%](https://img.shields.io/badge/Jank-70%25-orange.svg) ![Estimated completion: 50%](https://img.shields.io/badge/Estimated%20completion-50%25-ece000.svg) [![License: DBAD](https://img.shields.io/badge/License-DBAD-green.svg)](#License)

Do you hate having to iterate over a bunch of elements to add a class to all of them?\
Do you want to avoid that without using jQuery?\
If so, then this library is for you!

With this library, you can use new `jwBulk` functions on `HTMLElement` and `HTMLCollection` objects to modify styles, eventsListeners, etc!\
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

## jwBulkAdd/RemoveEventListener

If that's not cool enough, bulk modifications also trigger events!

```JavaScript
window.onload=function(){
	jwLibs.bulkDOM.init();
	var p=document.getElementsByTagName("p");
	p.jwBulkAddEventListener({"jwBulkStyle":[function(e){console.log(e.detail.rules)}]});
	p.jwBulkStyle({"color":"red", "background-color":"blue"});
}
```

How about only detecting when a bulk modification affects multiple elements?

```JavaScript
window.onload=function(){
	jwLibs.bulkDOM.init();
	var p=document.getElementsByTagName("p");
	p.jwBulkAddEventListener({"jwBulkStyleMulti":[function(e){console.log(e.detail.rules)}]});
	p.jwBulkStyle({"color":"red", "background-color":"blue"});
	p[0].jwBulkStyle({"color":"yellow", "background-color":"blue"});
}
```
Note: The event will trigger once for every element.

Sometimes you want to apply slightly different modifications to multiple elements, well, with the `ef` input you can do that! `ef` stands for `Evaluate Function`, and if it's true then any functions in the input values will be evaluated before being applied!\
For example, the following code makes the first `<p>` element red and the second one blue:
```JavaScript
window.onload=function(){
	jwLibs.bulkDOM.init();
	p=document.getElementsByTagName("p");
	p.jwBulkStyle({"color":function(obj, rule, elem, index){return ["red","blue"][index]}},true);
}
```
When applying a manipulation with a function value, the function should be able to take the following inputs:
* `obj` - The object of the manipulations (the first argument in a bulk function)
* `key` - Current object key/property being modified
* `elem` - The current element (always defined as `this` in the function declaration scope)
* `index` - The index of the current element in the `HTMLCollection`. (Note: Defaults to `0` when the bulk function is on a single element)

## jwBulkGet/SetProp

For those times when the other functions don't suit your needs, you may need to set properties on each `HTMLElement` object directly.\
For example, the following code sets the `innerHTML` of every `<p>` element to "asdf".
```JavaScript
window.onload=function(){
	jwLibs.bulkDOM.init();
	p=document.getElementsByTagName("p");
	p.jwBulkSetProp({"innerHTML":"asdf"});
}
```
And, for the reverse, you can use `jwBulkGetProp`:
```JavaScript
window.onload=function(){
	jwLibs.bulkDOM.init();
	p=document.getElementsByTagName("p");
	console.log(p.jwBulkGetProp(["innerHTML"]));
}
```
# Reference

| Property Name | Input Format | `ef` compatible? | Return Format 
|--|--|--|--|
| `jwBulkStyle` | `{"rule1":"val1", "rule2":"val2", ...}` | Yes | `undefined`
| `jwBulkAddClass` | `["class1", "class2", ...]` | Yes | `undefined`
| `jwBulkRemoveClass` | `["class1", "class2", ...]` | Yes | `undefined`
| `jwBulkToggleClass` | `["class1", "class2", ...]` | Yes | `undefined`
| `jwBulkAddEventListener` | `{"eventName1":[func1, func2, ...], "eventName2":[func1, func2, ...], ...}` | No | `undefined`
| `jwBulkRemoveEventListener` | `{"eventName1":[func1, func2, ...], "eventName2":[func1, func2, ...], ...}` | No | `undefined`
| `jwBulkSetAttribute` | `{"name1":"val1", "name2":"val2", ...}` | Yes | `undefined`
| `jwBulkSetAttributeNS` | `{"name1":"val1", "name2":"val2", ...}` | Yes | `undefined`
|`jwBulkSetProp` | `{"key1":"val1", "key2":"val2", ...}` | Yes | `undefined`
|`jwBulkGetProp` | `["prop1", "prop2", ...]` | No | Single: `{"prop1":"val1", "prop2":"val2"}`<br/>Collection: `[{"elem":"elem1", "props":{"prop1":"val1", "prop2":"val2", ...}}, ...]`

The above functions are added to `HTMLElement.prototype` and `HTMLCollection.prototype` when `jwLibs.bulkDOM.init` is called. The functions on `HTMLCollection` runs the equivalent function on every element in the collection.

