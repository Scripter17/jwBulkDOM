try{jwLibs}catch(e){jwLibs={};}
jwLibs.bulkDOM={
	init:function(){
		HTMLElement.prototype.jwBulkStyle=function(obj){
			var s, evt;
			for (s in obj){
				this.style[s]=obj[s];
			}
			evt=new CustomEvent("jwBulkStyle", {detail:{elem:this, rules:obj}});
			this.dispatchEvent(evt);
			return this;
		};
		
		HTMLElement.prototype.jwBulkAddClass=function(classes){
			var c, evt;
			for (c in classes){
				this.classList.add(classes[c]);
			}
			evt=new CustomEvent("jwBulkAddClass", {detail:{elem:this, val:classes}});
			this.dispatchEvent(evt);
			return this;
		}
		HTMLElement.prototype.jwBulkRemoveClass=function(classes){
			var e, evt;
			for (c in classes){
				this[e].classList.remove(classes[c]);
			}
			evt=new CustomEvent("jwBulkRemoveClass", {detail:{elem:this, val:classes}});
			this.dispatchEvent(evt);
			return this;
		};
		HTMLElement.prototype.jwBulkToggleClass=function(classes){
			var c, evt;
			for (c in classes){
				this.classList.toggle(classes[c]);
			}
			evt=new CustomEvent("jwBulkToggleClass", {detail:{elem:this, val:classes}});
			this.dispatchEvent(evt);
			return this;
		};
		
		HTMLElement.prototype.jwBulkAddEventListener=function(obj){
			var ev, evt;
			for (ev in obj){
				this.addEventListener(ev, obj[ev]);
			}
			evt=new CustomEvent("jwBulkAddEventListener", {detail:{elem:this, rules:obj}});
			this.dispatchEvent(evt);
			return this;
		};
		HTMLElement.prototype.jwBulkRemoveEventListener=function(obj){
			var ev, evt;
			for (ev in obj){
				this.removeEventListener(ev, obj[ev]);
			}
			evt=new CustomEvent("jwBulkRemoveEventListener", {detail:{elem:this, rules:obj}});
			this.dispatchEvent(evt);
			return this;
		};
		
		HTMLElement.prototype.jwBulkSetAttribute=function(obj){
			var name, evt;
			for (name in obj){
				this.setAttribute(name, obj[name]);
			}
			evt=new CustomEvent("jwBulkSetAttribute", {detail:{elem:this, attrs:obj}});
			this.dispatchEvent(evt);
			return this;
		};
		HTMLElement.prototype.jwBulkSetAttributeNS=function(obj){
			var name, evt;
			for (name in obj){
				this.setAttributeNS(name, obj[name]);
			}
			evt=new CustomEvent("jwBulkSetAttributeNS", {detail:{elem:this, attrs:obj}});
			this.dispatchEvent(evt);
			return this;
		};
		
		//   O-------------------------------------------------O
		//   |           MULTI BULK FUNCTION THINGS.           |
		//   | APPLY BULK MANIPS. TO MULTIPLE ELEMENTS AT ONCE |
		//   O-------------------------------------------------O
		
		HTMLCollection.prototype.jwBulkStyle=function(obj){
			var e;
			for (e=0; e<this.length; e++){
				this[e].jwBulkStyle(obj);
				evt=new CustomEvent("jwBulkStyleMulti", {detail:{elems:this, rules:obj}});
				this[e].dispatchEvent(evt);
			}
			return this;
		};
		
		HTMLCollection.prototype.jwBulkAddClass=function(classes){
			var e, evt;
			for (e=0; e<this.length; e++){
				this[e].jwBulkAddClass(classes);
				evt=new CustomEvent("jwBulkAddClassMulti", {detail:{elems:this, val:classes}});
				this[e].dispatchEvent(evt);
			}
			return this;
		}
		HTMLCollection.prototype.jwBulkRemoveClass=function(classes){
			var e, evt;
			for (e=0; e<this.length; e++){
				this[e].classList.remove(classes);
				evt=new CustomEvent("jwBulkRemoveClassMulti", {detail:{elems:this, val:classes}});
				this[e].dispatchEvent(evt);
			}
			return this;
		};
		HTMLCollection.prototype.jwBulkToggleClass=function(classes){
			var e, evt;
			for (e=0; e<this.length; e++){
				this[e].classList.toggle(classes);
				evt=new CustomEvent("jwBulkToggleClassMulti", {detail:{elems:this, val:classes}});
				this[e].dispatchEvent(evt);
			}
			return this;
		};
		
		HTMLCollection.prototype.jwBulkAddEventListener=function(obj){
			var e, ev, evt;
			for (e=0; e<this.length; e++){
				this[e].jwBulkAddEventListener(obj)
				evt=new CustomEvent("jwBulkAddEventListenerMulti", {detail:{elems:this, funcs:obj}});
				this[e].dispatchEvent(evt);
			}
			return this;
		};
		HTMLCollection.prototype.jwBulkRemoveEventListener=function(obj){
			var e, ev, evt;
			for (e=0; e<this.length; e++){
				this[e].jwBulkRemoveEventListener(obj)
				evt=new CustomEvent("jwBulkRemoveEventListenerMulti", {detail:{elems:this, funcs:obj}});
				this[e].dispatchEvent(evt);
			}
			return this;
		};
	}
};