try{jwLibs}catch(e){jwLibs={};}
jwLibs.bulkDOM={
	init:function(){
		HTMLElement.prototype.jwBulkStyle=function(obj){
			var s;
			for (s in obj){this.style[s]=obj[s];}
			this.dispatchEvent(new CustomEvent("jwBulkStyle", {detail:{elem:this, rules:obj}}));
			return this;
		};
		
		HTMLElement.prototype.jwBulkAddClass=function(classes){
			var c;
			for (c in classes){this.classList.add(classes[c]);}
			this.dispatchEvent(new CustomEvent("jwBulkAddClass", {detail:{elem:this, val:classes}}));
			return this;
		}
		HTMLElement.prototype.jwBulkRemoveClass=function(classes){
			var c;
			for (c in classes){this.classList.remove(classes[c]);}
			this.dispatchEvent(new CustomEvent("jwBulkRemoveClass", {detail:{elem:this, val:classes}}));
			return this;
		};
		HTMLElement.prototype.jwBulkToggleClass=function(classes){
			var c;
			for (c in classes){this.classList.toggle(classes[c]);}
			this.dispatchEvent(new CustomEvent("jwBulkToggleClass", {detail:{elem:this, val:classes}}));
			return this;
		};
		
		HTMLElement.prototype.jwBulkAddEventListener=function(obj){
			var ev;
			for (ev in obj){this.addEventListener(ev, obj[ev]);}
			this.dispatchEvent(new CustomEvent("jwBulkAddEventListener", {detail:{elem:this, rules:obj}}));
			return this;
		};
		HTMLElement.prototype.jwBulkRemoveEventListener=function(obj){
			var ev;
			for (ev in obj){this.removeEventListener(ev, obj[ev]);}
			this.dispatchEvent(new CustomEvent("jwBulkRemoveEventListener", {detail:{elem:this, rules:obj}}));
			return this;
		};
		
		HTMLElement.prototype.jwBulkSetAttribute=function(obj){
			var name;
			for (name in obj){this.setAttribute(name, obj[name]);}
			this.dispatchEvent(new CustomEvent("jwBulkSetAttribute", {detail:{elem:this, attrs:obj}}));
			return this;
		};
		HTMLElement.prototype.jwBulkSetAttributeNS=function(obj){
			var name;
			for (name in obj){this.setAttributeNS(name, obj[name]);}
			this.dispatchEvent(new CustomEvent("jwBulkSetAttributeNS", {detail:{elem:this, attrs:obj}}));
			return this;
		};
		
		//   O-------------------------------------------------O
		//   |           MULTI BULK FUNCTION THINGS.           |
		//   | APPLY BULK MANIPS. TO MULTIPLE ELEMENTS AT ONCE |
		//   O-------------------------------------------------O
		
		HTMLCollection.prototype.jwBulkStyle=function(obj){
			var elem;
			for (elem=0; elem<this.length; elem++){
				this[elem].jwBulkStyle(obj);
				this[elem].dispatchEvent(new CustomEvent("jwBulkStyleMulti", {detail:{elems:this, rules:obj}}));
			}
			return this;
		};
		
		HTMLCollection.prototype.jwBulkAddClass=function(classes){
			var elem;
			for (elem=0; elem<this.length; elem++){
				this[elem].jwBulkAddClass(classes);
				this[elem].dispatchEvent(new CustomEvent("jwBulkAddClassMulti", {detail:{elems:this, val:classes}}));
			}
			return this;
		}
		HTMLCollection.prototype.jwBulkRemoveClass=function(classes){
			var elem;
			for (elem=0; elem<this.length; elem++){
				this[elem].classList.remove(classes);
				this[elem].dispatchEvent(new CustomEvent("jwBulkRemoveClassMulti", {detail:{elems:this, val:classes}}));
			}
			return this;
		};
		HTMLCollection.prototype.jwBulkToggleClass=function(classes){
			var elem;
			for (elem=0; elem<this.length; elem++){
				this[elem].classList.toggle(classes);
				evt=new CustomEvent("jwBulkToggleClassMulti", {detail:{elems:this, val:classes}});
				this[elem].dispatchEvent(evt);
			}
			return this;
		};
		
		HTMLCollection.prototype.jwBulkAddEventListener=function(obj){
			var elem;
			for (elem=0; elem<this.length; elem++){
				this[elem].jwBulkAddEventListener(obj)
				this[elem].dispatchEvent(new CustomEvent("jwBulkAddEventListenerMulti", {detail:{elems:this, funcs:obj}}));
			}
			return this;
		};
		HTMLCollection.prototype.jwBulkRemoveEventListener=function(obj){
			var elem;
			for (elem=0; elem<this.length; elem++){
				this[elem].jwBulkRemoveEventListener(obj)
				this[elem].dispatchEvent(new CustomEvent("jwBulkRemoveEventListenerMulti", {detail:{elems:this, funcs:obj}}));
			}
			return this;
		};
	}
};