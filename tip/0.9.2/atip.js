define("#tip/0.9.2/atip",["./tip","$","#popup/0.9.9/popup","#overlay/0.9.12/overlay","#position/1.0.0/position","#iframe-shim/1.0.0/iframe-shim","#widget/1.0.2/widget","#base/1.0.1/base","#class/1.0.0/class","#events/1.0.0/events"],function(e,t,n){var r=e("$"),i=e("./tip"),s=i.extend({attrs:{template:'<div class="ui-poptip"><div class="ui-poptip-shadow"><div class="ui-poptip-container"><div class="ui-poptip-arrow"><em>◆</em><span>◆</span></div>                 <div class="ui-poptip-content" data-role="content"></div></div></div></div>',content:"这是一个提示框",arrowPosition:7,theme:"yellow",inViewport:!1,width:"auto",height:"auto"},setup:function(){this._originArrowPosition=this.get("arrowPosition"),s.superclass.setup.call(this)},show:function(){s.superclass.show.call(this),this._makesureInViewport()},_makesureInViewport:function(){if(this.get("inViewport")){var e=this._originArrowPosition,t=r(window).scrollTop(),n=r(window).outerHeight(),i=this.element.height()+this.get("distance"),s=r(this.get("trigger")).offset().top,o={1:"5",5:"1",7:"11",11:"7"};(e===11||e===1)&&s>t+n-i?this.set("arrowPosition",o[e]):(e===7||e===5)&&s<t+i?this.set("arrowPosition",o[e]):this.set("arrowPosition",this._originArrowPosition)}},_onRenderArrowPosition:function(e,t){e=parseInt(e,10);var n=this.$(".ui-poptip-arrow");n.removeClass("ui-poptip-arrow-"+t).addClass("ui-poptip-arrow-"+e);var r="",i=0;e===10?(r="right",i=20):e===11?(r="down",i=22):e===1?(r="down",i=-22):e===2?(r="left",i=20):e===5?(r="up",i=-22):e===7&&(r="up",i=22),this.set("direction",r),this.set("arrowShift",i),this._setAlign()},_onRenderWidth:function(e){this.$('[data-role="content"]').css("width",e)},_onRenderHeight:function(e){this.$('[data-role="content"]').css("height",e)},_onRenderTheme:function(e,t){this.element.removeClass("ui-poptip-"+t),this.element.addClass("ui-poptip-"+e)}});n.exports=s});