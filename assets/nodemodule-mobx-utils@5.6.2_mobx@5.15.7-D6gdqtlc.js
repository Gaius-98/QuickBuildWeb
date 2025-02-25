import{e as R,f as N,v as S,h as B,j as F,k as M,b as f,o as h,l as L,m as $,a as w,n as E,r as z,O as q,p as J,q as U,$ as W,u as x,w as H}from"./nodemodule-mobx@5.15.7-BNbkWaZx.js";function Q(e){throw new Error("[mobx-utils] "+e)}function _(e,o){o===void 0&&(o="Illegal state"),e||Q(o)}var G=function(e){return e&&e!==Object.prototype&&Object.getOwnPropertyNames(e).concat(G(Object.getPrototypeOf(e))||[])},X=function(e){var o=G(e),t=o.filter(function(r,n){return o.indexOf(r)===n});return t},Y=function(e){return X(e).filter(function(o){return o!=="constructor"&&!~o.indexOf("__")})},T="pending",O="fulfilled",P="rejected";function Z(e){switch(this.state){case T:return e.pending&&e.pending(this.value);case P:return e.rejected&&e.rejected(this.value);case O:return e.fulfilled?e.fulfilled(this.value):this.value}}function D(e,o){if(_(arguments.length<=2,"fromPromise expects up to two arguments"),_(typeof e=="function"||typeof e=="object"&&e&&typeof e.then=="function","Please pass a promise or function to fromPromise"),e.isPromiseBasedObservable===!0)return e;typeof e=="function"&&(e=new Promise(e));var t=e;e.then(f("observableFromPromise-resolve",function(n){t.value=n,t.state=O}),f("observableFromPromise-reject",function(n){t.value=n,t.state=P})),t.isPromiseBasedObservable=!0,t.case=Z;var r=o&&o.state===O?o.value:void 0;return J(t,{value:r,state:T},{},{deep:!1}),t}(function(e){e.reject=f("fromPromise.reject",function(t){var r=e(Promise.reject(t));return r.state=P,r.value=t,r});function o(t){t===void 0&&(t=void 0);var r=e(Promise.resolve(t));return r.state=O,r.value=t,r}e.resolve=f("fromPromise.resolve",o)})(D||(D={}));var y=function(e,o,t,r){var n=arguments.length,i=n<3?o:r===null?r=Object.getOwnPropertyDescriptor(o,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,o,t,r);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(i=(n<3?a(i):n>3?a(o,t,i):a(o,t))||i);return n>3&&i&&Object.defineProperty(o,t,i),i};(function(){function e(o,t){var r=this;U(function(){r.current=t,r.subscription=o.subscribe(r)})}return e.prototype.dispose=function(){this.subscription&&this.subscription.unsubscribe()},e.prototype.next=function(o){this.current=o},e.prototype.complete=function(){this.dispose()},e.prototype.error=function(o){this.current=o,this.dispose()},y([h.ref],e.prototype,"current",void 0),y([f.bound],e.prototype,"next",null),y([f.bound],e.prototype,"complete",null),y([f.bound],e.prototype,"error",null),e})();var g=function(){return g=Object.assign||function(e){for(var o,t=1,r=arguments.length;t<r;t++){o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},g.apply(this,arguments)},b=function(e,o,t,r){var n=arguments.length,i=n<3?o:r===null?r=Object.getOwnPropertyDescriptor(o,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,o,t,r);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(i=(n<3?a(i):n>3?a(o,t,i):a(o,t))||i);return n>3&&i&&Object.defineProperty(o,t,i),i},k=["model","reset","submit","isDirty","isPropertyDirty","resetProperty"];(function(){function e(o){var t=this;this.model=o,this.localValues=h.map({}),this.localComputedValues=h.map({}),this.isPropertyDirty=function(r){return t.localValues.has(r)},_(B(o),"createViewModel expects an observable object"),Y(o).forEach(function(r){if(!(r===W||r==="__mobxDidRunLazyInitializers")){if(_(k.indexOf(r)===-1,"The propertyname "+r+" is reserved and cannot be used with viewModels"),x(o,r)){var n=H(o,r).derivation;t.localComputedValues.set(r,w(n.bind(t)))}var i=Object.getOwnPropertyDescriptor(o,r),a=i?{enumerable:i.enumerable}:{};Object.defineProperty(t,r,g(g({},a),{configurable:!0,get:function(){return x(o,r)?t.localComputedValues.get(r).get():t.isPropertyDirty(r)?t.localValues.get(r):t.model[r]},set:f(function(s){s!==t.model[r]?t.localValues.set(r,s):t.localValues.delete(r)})}))}})}return Object.defineProperty(e.prototype,"isDirty",{get:function(){return this.localValues.size>0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"changedValues",{get:function(){return this.localValues.toJS()},enumerable:!1,configurable:!0}),e.prototype.submit=function(){var o=this;L(this.localValues).forEach(function(t){var r=o.localValues.get(t),n=o.model[t];F(n)?n.replace(r):M(n)?(n.clear(),n.merge(r)):$(r)||(o.model[t]=r)}),this.localValues.clear()},e.prototype.reset=function(){this.localValues.clear()},e.prototype.resetProperty=function(o){this.localValues.delete(o)},b([w],e.prototype,"isDirty",null),b([w],e.prototype,"changedValues",null),b([f.bound],e.prototype,"submit",null),b([f.bound],e.prototype,"reset",null),b([f.bound],e.prototype,"resetProperty",null),e})();function I(e){if(!e)return"ROOT";for(var o=[];e.parent;)o.push(e.path),e=e.parent;return o.reverse().join("/")}function V(e){return B(e)||F(e)||M(e)}function re(e,o){var t=new WeakMap;function r(s){var l=t.get(s.object);n(s,l),o(s,I(l),e)}function n(s,l){switch(s.type){case"add":i(s.newValue,l,s.name);break;case"update":a(s.oldValue),i(s.newValue,l,s.name||""+s.index);break;case"remove":case"delete":a(s.oldValue);break;case"splice":s.removed.map(a),s.added.forEach(function(d,c){return i(d,l,""+(s.index+c))});for(var p=s.index+s.addedCount;p<s.object.length;p++)if(V(s.object[p])){var u=t.get(s.object[p]);u&&(u.path=""+p)}break}}function i(s,l,p){if(V(s)){var u=t.get(s);if(u){if(u.parent!==l||u.path!==p)throw new Error("The same observable object cannot appear twice in the same tree,"+(" trying to assign it to '"+I(l)+"/"+p+"',")+(" but it already exists at '"+I(u.parent)+"/"+u.path+"'"))}else{var d={parent:l,path:p,dispose:R(s,r)};t.set(s,d),N(s).forEach(function(c){var v=c[0],m=c[1];return i(m,d,v)})}}}function a(s){if(V(s)){var l=t.get(s);if(!l)return;t.delete(s),l.dispose(),S(s).forEach(a)}}return i(e,void 0,""),function(){a(e)}}var ee=function(){var e=function(o,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var i in n)n.hasOwnProperty(i)&&(r[i]=n[i])},e(o,t)};return function(o,t){e(o,t);function r(){this.constructor=o}o.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}}();(function(e){ee(o,e);function o(t,r,n){var i=n===void 0?{}:n,a=i.name,s=a===void 0?"ogm"+(Math.random()*1e3|0):a,l=i.keyToName,p=l===void 0?function(c){return""+c}:l,u=e.call(this)||this;u._keyToName=p,u._groupBy=r,u._ogmInfoKey=Symbol("ogmInfo"+s),u._base=t;for(var d=0;d<t.length;d++)u._addItem(t[d]);return u._disposeBaseObserver=R(u._base,function(c){if(c.type==="splice")E(function(){for(var v=0,m=c.removed;v<m.length;v++){var C=m[v];u._removeItem(C)}for(var j=0,A=c.added;j<A.length;j++){var K=A[j];u._addItem(K)}});else if(c.type==="update")E(function(){u._removeItem(c.oldValue),u._addItem(c.newValue)});else throw new Error("illegal state")}),u}return o.prototype.clear=function(){throw new Error("not supported")},o.prototype.delete=function(t){throw new Error("not supported")},o.prototype.set=function(t,r){throw new Error("not supported")},o.prototype.dispose=function(){this._disposeBaseObserver();for(var t=0;t<this._base.length;t++){var r=this._base[t],n=r[this._ogmInfoKey];n.reaction(),delete r[this._ogmInfoKey]}},o.prototype._getGroupArr=function(t){var r=e.prototype.get.call(this,t);return r===void 0&&(r=h([],{name:"GroupArray["+this._keyToName(t)+"]",deep:!1}),e.prototype.set.call(this,t,r)),r},o.prototype._removeFromGroupArr=function(t,r){var n=e.prototype.get.call(this,t);n.length===1?e.prototype.delete.call(this,t):(r===n.length-1||(n[r]=n[n.length-1],n[r][this._ogmInfoKey].groupArrIndex=r),n.length--)},o.prototype._addItem=function(t){var r=this,n=this._groupBy(t),i=this._getGroupArr(n),a={groupByValue:n,groupArrIndex:i.length,reaction:z(function(){return r._groupBy(t)},function(s,l){var p=t[r._ogmInfoKey];r._removeFromGroupArr(p.groupByValue,p.groupArrIndex);var u=r._getGroupArr(s),d=u.length;u.push(t),p.groupByValue=s,p.groupArrIndex=d})};Object.defineProperty(t,this._ogmInfoKey,{configurable:!0,enumerable:!1,value:a}),i.push(t)},o.prototype._removeItem=function(t){var r=t[this._ogmInfoKey];this._removeFromGroupArr(r.groupByValue,r.groupArrIndex),r.reaction(),delete t[this._ogmInfoKey]},o})(q);Promise.resolve(),typeof queueMicrotask<"u"||typeof process<"u"&&process.nextTick;export{re as d};
