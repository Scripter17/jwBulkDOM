# jwBulkDOM

![Jank: 60%](https://img.shields.io/badge/Jank-60%25-orange.svg) ![Estimated completion: 30%](https://img.shields.io/badge/Estimated%20completion-30%25-Orange.svg) [![License: DBAD](https://img.shields.io/badge/License-DBAD-green.svg)](#License)

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

| Property Name | Input Format |
|--|--|
| `jwBulkStyle` | `{"rule1":"val1", "rule2":"val2", ...}` |
| `jwBulkAddClass` | `["class1", "class2", ...]` |
| `jwBulkRemoveClass` | `["class1", "class2", ...]` |
| `jwBulkToggleClass` | `["class1", "class2", ...]` |
| `jwBulkAddEventListener` | `{"eventName1":[func1, func2, ...], "eventName2":[func1, func2, ...], ...}` |
| `jwBulkRemoveEventListener` | `{"eventName1":[func1, func2, ...], "eventName2":[func1, func2, ...], ...}` |
| `jwBulkSetAttribute` | `{"name1":"val1", "name2":"val2", ...}` |
| `jwBulkSetAttributeNS` | `{"name1":"val1", "name2":"val2", ...}` |

The above functions are added to `HTMLElement.prototype` and `HTMLCollection.prototype` when `jwLibs.bulkDOM.init` is called. The functions on `HTMLCollection` runs the equivalent function on every element in the collection.

 # License
 This code/repository is released under the "[Don't Be a Dick](https://dbad-license.org/)" license, which has the following terms:
 ```
# DON'T BE A DICK PUBLIC LICENSE

> Version 1.1, December 2016

> Copyright (C) 2018 James C. Wise

Everyone is permitted to copy and distribute verbatim or modified
copies of this license document.

> DON'T BE A DICK PUBLIC LICENSE
> TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

1. Do whatever you like with the original work, just don't be a dick.

   Being a dick includes - but is not limited to - the following instances:

 1a. Outright copyright infringement - Don't just copy this and change the name.
 1b. Selling the unmodified original with no work done what-so-ever, that's REALLY being a dick.
 1c. Modifying the original work to contain hidden harmful content. That would make you a PROPER dick.

2. If you become rich through modifications, related works/services, or supporting the original work,
share the love. Only a dick would make loads off this work and not buy the original work's
creator(s) a pint.

3. Code is provided with no warranty. Using somebody else's code and bitching when it goes wrong makes
you a DONKEY dick. Fix the problem yourself. A non-dick would submit the fix back.
```
