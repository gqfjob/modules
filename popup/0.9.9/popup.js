define("#popup/0.9.9/popup",["$","#overlay/0.9.12/overlay","#position/1.0.0/position","#iframe-shim/1.0.0/iframe-shim","#widget/1.0.2/widget","#base/1.0.1/base","#class/1.0.0/class","#events/1.0.0/events"],function(e,t,n){var r=e("$"),i=e("#overlay/0.9.12/overlay"),s=i.extend({attrs:{trigger:{value:null,getter:function(e){return r(e)}},triggerType:"hover",align:{baseXY:[0,"100%"],selfXY:[0,0]},disabled:!1},setup:function(){s.superclass.setup.call(this),this._bindTrigger(),this._blurHide([this.get("trigger")])},show:function(){!this.rendered&&this.render(),this.set("visible",!0);var e=this.get("align");e.baseElement=this.activeTrigger,this.set("align",e)},toggle:function(){if(this.get("disabled"))return;this[this.get("visible")?"hide":"show"]()},_bindTrigger:function(){function u(){clearTimeout(i),o.get("visible")&&(s=setTimeout(function(){o.toggle()},n))}var e=this.get("trigger"),t=this.get("triggerType"),n=100,i,s,o=this;t==="click"?e.on(t,function(e){e.preventDefault(),o.activeTrigger=r(this),o.toggle()}):t==="focus"?e.on("focus blur",function(){o.activeTrigger=r(this),o.toggle()}):(e.hover(function(){clearTimeout(s),o.get("visible")||(o.activeTrigger=r(this),i=setTimeout(function(){o.toggle()},n))},u),this.element.hover(function(){clearTimeout(s)},u))}});n.exports=s});