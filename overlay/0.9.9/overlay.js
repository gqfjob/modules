define("#overlay/0.9.9/overlay",["$","#position/1.0.0/position","#iframe-shim/1.0.0/iframe-shim","#widget/1.0.0/widget","#base/1.0.0/base","#class/1.0.0/class","#events/1.0.0/events"],function(e,t,n){function a(e){return r.contains(document.documentElement,e)}function f(e){r(u.blurOverlays).each(function(t,n){if(!n.get("visible"))return;for(var t=0;t<n._relativeElements.length;t++){var i=r(n._relativeElements[t])[0];if(i===e.target||r.contains(i,e.target))return}n.hide()})}var r=e("$"),i=e("#position/1.0.0/position"),s=e("#iframe-shim/1.0.0/iframe-shim"),o=e("#widget/1.0.0/widget"),u=o.extend({attrs:{width:"",height:"",zIndex:99,visible:!1,align:{selfXY:[0,0],baseElement:i.VIEWPORT,baseXY:[0,0]},parentNode:document.body},render:function(){return u.superclass.render.call(this),this._setPosition(),this},show:function(){return this.rendered||this.render(),this.set("visible",!0),this},hide:function(){return this.set("visible",!1),this},setup:function(){this._setupShim()},_setPosition:function(e){if(!a(this.element[0]))return;e||(e=this.get("align"));var t=this.element.css("display")==="none";return t&&this.element.css({visibility:"hidden",display:"block"}),i.pin({element:this.element,x:e.selfXY[0],y:e.selfXY[1]},{element:e.baseElement,x:e.baseXY[0],y:e.baseXY[1]}),t&&this.element.css({visibility:"",display:"none"}),this},_setupShim:function(){var e=new s(this.element);this.after("show hide",e.sync,e);var t=u.prototype.attrs;for(var n in t)if(t.hasOwnProperty(n)){if(n==="parentNode")continue;this.on("change:"+n,e.sync,e)}},_blurHide:function(e){e=e||[],e.push(this.element),this._relativeElements=e,u.blurOverlays.push(this)},_onRenderWidth:function(e){this.element.css("width",e)},_onRenderHeight:function(e){this.element.css("height",e)},_onRenderZIndex:function(e){this.element.css("zIndex",e)},_onRenderAlign:function(e){this._setPosition(e)},_onRenderVisible:function(e){this.element[e?"show":"hide"]()}});u.blurOverlays=[],r(document).on("click",function(e){f(e)}),n.exports=u});