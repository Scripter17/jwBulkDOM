try{jwLibs}catch(e){jwLibs={}; window.jwActiveLibs=[];}
jwLibs.bulkDOM={
	init:function(){
		window.jwActiveLibs.push("bulkDOM");
		
		// CSS styling
		HTMLElement.prototype.jwBulkStyle=function(obj){
			// {"rule1":"val1", "rule2":"val2", ...}
			var i;
			for (i in obj){this.style[i]=obj[i];}
			this.dispatchEvent(new CustomEvent("jwBulkStyle", {detail:{elem:this, rules:obj}}));
			return this;
		};
		
		// Classes
		HTMLElement.prototype.jwBulkAddClass=function(arr){
			// ["class1", "class2", ...]
			var i;
			for (i in arr){this.classList.add(arr[i]);}
			this.dispatchEvent(new CustomEvent("jwBulkAddClass", {detail:{elem:this, val:arr}}));
			return this;
		}
		HTMLElement.prototype.jwBulkRemoveClass=function(arr){
			// ["class1", "class2", ...]
			var i;
			for (i in arr){this.classList.remove(arr[i]);}
			this.dispatchEvent(new CustomEvent("jwBulkRemoveClass", {detail:{elem:this, val:arr}}));
			return this;
		};
		HTMLElement.prototype.jwBulkToggleClass=function(arr){
			// ["class1", "class2", ...]
			var i;
			for (i in arr){this.classList.toggle(arr[i]);}
			this.dispatchEvent(new CustomEvent("jwBulkToggleClass", {detail:{elem:this, val:arr}}));
			return this;
		};
		
		// Event Listeners
		HTMLElement.prototype.jwBulkAddEventListener=function(obj){
			// {"eventName1":[function1, function2, ...], "eventName2":[function1, function2, ...], ...}
			var type, i;
			for (type in obj){
				for (i in obj[type]){
					this.addEventListener(type, obj[type][i]);
				}
			}
			this.dispatchEvent(new CustomEvent("jwBulkAddEventListener", {detail:{elem:this, rules:obj}}));
			return this;
		};
		HTMLElement.prototype.jwBulkRemoveEventListener=function(obj){
			// {"eventName1":[function, function, ...], "eventName2":[function, function, ...], ...}
			var type, i;
			for (type in obj){
				for (i in obj[type]){
					this.removeEventListener(type, obj[type][i]);
				}
			}
			this.dispatchEvent(new CustomEvent("jwBulkRemoveEventListener", {detail:{elem:this, rules:obj}}));
			return this;
		};
		
		// Attributes
		HTMLElement.prototype.jwBulkSetAttribute=function(obj){
			// {"name1":"val1", "name2":"val2", ...}
			var name;
			for (name in obj){this.setAttribute(name, obj[name]);}
			this.dispatchEvent(new CustomEvent("jwBulkSetAttribute", {detail:{elem:this, attrs:obj}}));
			return this;
		};
		HTMLElement.prototype.jwBulkSetAttributeNS=function(obj){
			// {"name1":"val1", "name2":"val2", ...}
			var name;
			for (name in obj){this.setAttributeNS(name, obj[name]);}
			this.dispatchEvent(new CustomEvent("jwBulkSetAttributeNS", {detail:{elem:this, attrs:obj}}));
			return this;
		};
		
		//   O-------------------------------------------------O
		//   |           MULTI BULK FUNCTION THINGS.           |
		//   | APPLY BULK MANIPS. TO MULTIPLE ELEMENTS AT ONCE |
		//   O-------------------------------------------------O
		
		// CSS styling
		HTMLCollection.prototype.jwBulkStyle=function(obj){
			// {"rule1":"val1", "rule2":"val2", ...}
			var elem;
			for (elem=0; elem<this.length; elem++){
				this[elem].jwBulkStyle(obj);
				this[elem].dispatchEvent(new CustomEvent("jwBulkStyleMulti", {detail:{elems:this, rules:obj}}));
			}
			return this;
		};
		
		// Classes
		HTMLCollection.prototype.jwBulkAddClass=function(classes){
			// ["class1", "class2", ...]
			var elem;
			for (elem=0; elem<this.length; elem++){
				this[elem].jwBulkAddClass(classes);
				this[elem].dispatchEvent(new CustomEvent("jwBulkAddClassMulti", {detail:{elems:this, val:classes}}));
			}
			return this;
		}
		HTMLCollection.prototype.jwBulkRemoveClass=function(classes){
			// ["class1", "class2", ...]
			var elem;
			for (elem=0; elem<this.length; elem++){
				this[elem].classList.remove(classes);
				this[elem].dispatchEvent(new CustomEvent("jwBulkRemoveClassMulti", {detail:{elems:this, val:classes}}));
			}
			return this;
		};
		HTMLCollection.prototype.jwBulkToggleClass=function(classes){
			// ["class1", "class2", ...]
			var elem;
			for (elem=0; elem<this.length; elem++){
				this[elem].classList.toggle(classes);
				this[elem].dispatchEvent(new CustomEvent("jwBulkToggleClassMulti", {detail:{elems:this, val:classes}}));
			}
			return this;
		};
		
		// Event Listeners
		HTMLCollection.prototype.jwBulkAddEventListener=function(obj){
			// {"eventName1":[function1, function2, ...], "eventName2":[function1, function2, ...], ...}
			var elem;
			for (elem=0; elem<this.length; elem++){
				this[elem].jwBulkAddEventListener(obj)
				this[elem].dispatchEvent(new CustomEvent("jwBulkAddEventListenerMulti", {detail:{elems:this, funcs:obj}}));
			}
			return this;
		};
		HTMLCollection.prototype.jwBulkRemoveEventListener=function(obj){
			// {"eventName1":[function, function, ...], "eventName2":[function, function, ...], ...}
			var elem;
			for (elem=0; elem<this.length; elem++){
				this[elem].jwBulkRemoveEventListener(obj)
				this[elem].dispatchEvent(new CustomEvent("jwBulkRemoveEventListenerMulti", {detail:{elems:this, funcs:obj}}));
			}
			return this;
		};
		
		// Attributes
		HTMLCollection.prototype.jwBulkSetAttribute=function(obj){
			// {"name1":"val1", "name2":"val2", ...}
			var elem;
			for (elem=0; elem<this.length; elem++){
				this[elem].jwBulkSetAttribute(obj)
				this[elem].dispatchEvent(new CustomEvent("jwBulkSetAttributeMulti", {detail:{elems:this, attrs:obj}}));
			}
			return this;
		};
		HTMLCollection.prototype.jwBulkSetAttributeNS=function(obj){
			// {"name1":"val1", "name2":"val2", ...}
			var elem;
			for (elem=0; elem<this.length; elem++){
				this[elem].jwBulkSetAttributeNS(obj)
				this[elem].dispatchEvent(new CustomEvent("jwBulkSetAttributeNSMulti", {detail:{elems:this, attrs:obj}}));
			}
			return this;
		};
	}
};
