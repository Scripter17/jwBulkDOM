# jwBulkDOM

Do you hate having to iterate over a bunch of elements to add a class to all of them?

Do you want to do that without using jQuery?

If so, then this ~~garbage~~ jwLib is for you!

```
//TODO: Make the README not garbage
```

##How to use:

```JavaScript
window.onload=function(){
	jwLibs.bulkDOM.init();
	var p=documnet.getElementsByTagName("p");
	p.jwBulkStyle({"color":"red"}); // Sets all <p> to have the text color red.
}
```