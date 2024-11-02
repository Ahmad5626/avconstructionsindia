"use strict";function _classCallCheck(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}var _extends=Object.assign||function(a){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n])}return a},_createClass=function(){function a(a,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}return function(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}}();!function(a){var t=function(){function t(){var a=this;_classCallCheck(this,t),setTimeout(function(){a.initOwlCarousel()},200)}return _createClass(t,[{key:"initOwlCarousel",value:function(){var t=this;a("[data-opal-carousel]").each(function(e,n){var o=t._getImageThumbnail(a(n)),i=a(n);t._setupOwlCarousel(i),i.data("thumb")&&t._initOwlThumbnails(i,o)})}},{key:"_setupOwlCarousel",value:function(t){var e=this,n=t.data("items")?t.data("items"):3,o=t.data("tablet")?t.data("tablet"):2,i=t.data("mobile")?t.data("mobile"):1;n<3&&(o=n);var l={dots:this._setDefaultBoolean(t.data("dots"),!0),nav:this._setDefaultBoolean(t.data("nav"),!0),loop:this._setDefaultBoolean(t.data("loop"),!0),center:this._setDefaultBoolean(t.data("center"),!1),rewind:this._setDefaultBoolean(t.data("rewind"),!1),mouseDrag:this._setDefaultBoolean(t.data("mousedrag"),!0),touchDrag:this._setDefaultBoolean(t.data("touchdrag"),!0),pullDrag:this._setDefaultBoolean(t.data("pulldrag"),!0),freeDrag:this._setDefaultBoolean(t.data("freedrag"),!1),margin:t.data("margin")?t.data("margin"):0,stagePadding:t.data("stage-padding")?t.data("stage-padding"):0,merge:this._setDefaultBoolean(t.data("merge"),!1),mergeFit:this._setDefaultBoolean(t.data("mergefit"),!0),autoWidth:this._setDefaultBoolean(t.data("autowidth"),!1),startPosition:t.data("start-position")?t.data("start-position"):0,rtl:a("body").hasClass("rtl"),smartSpeed:t.data("smart-speed")?t.data("smart-speed"):250,fluidSpeed:this._setDefaultBoolean(t.data("fluid-speed"),!1),dragEndSpeed:this._setDefaultBoolean(t.data("dragend-speed"),!1),animateOut:t.data("animate-out")?t.data("animate-out"):"",animateIn:t.data("animate-in")?t.data("animate-in"):"",autoplay:this._setDefaultBoolean(t.data("autoplay"),!1),autoplayTimeout:t.data("autoplay-timeout")?t.data("autoplay-timeout"):5e3,autoplayHoverPause:this._setDefaultBoolean(t.data("autoplay-hover-pause"),!1),autoHeight:this._setDefaultBoolean(t.data("auto-height"),!0),responsive:{0:{items:i,dots:!1,stagePadding:0},480:{items:i,dots:!1,stagePadding:0},768:{items:o,stagePadding:0},980:{items:n}}};t.data("thumb")&&(l=_extends({},l,{onChanged:function(a){e._changedCarouselCB(a,t,l)}})),t.data("is-thumb")&&(l=_extends({},l,{onInitialized:function(a){e._thumbnailCarouselLoaded(a,t)}})),t.data("timeout")?setTimeout(function(){t.owlCarousel(l)},t.data("timeout")):t.owlCarousel(l)}},{key:"_changedCarouselCB",value:function(t,e,n){var o=t.item.index;if(n.loop){var i=e.find(".owl-item.cloned").length/2;"number"==typeof t.item.index&&0!=t.item.index&&(o=t.item.index-i)<0&&(o=t.item.count+o)}var l=e.next();l.hasClass("owl-loaded")&&l.trigger("to.owl.carousel",o).find(".item").removeClass("selected").each(function(t,e){a(e).data("index")==o&&a(e).addClass("selected")})}},{key:"_setDefaultBoolean",value:function(a,t){return void 0===a?t:a}},{key:"_getImageThumbnail",value:function(t){var e=[];return t.find("img").each(function(t,n){e.push(a(n).attr("src"))}),e}},{key:"_thumbnailCarouselLoaded",value:function(t,e){var n=e.prev();e.find(".item").on("click",function(t){n.trigger("to.owl.carousel",a(t.currentTarget).data("index"))})}},{key:"_initOwlThumbnails",value:function(a,t){var e=a.data("thumb-items")?a.data("thumb-items"):5,n=a.data("thumb-margin")?a.data("thumb-margin"):0,o='<div class="owl-carousel owl-theme owl-carousel-thumbnail" data-is-thumb="true" data-items="'+e+'" data-dots="false" data-loop="false" data-margin="'+n+'" data-nav="false">',i=0,l=!0,s=!1,u=void 0;try{for(var d,r=t[Symbol.iterator]();!(l=(d=r.next()).done);l=!0){var m=d.value;o+='<div class="item'+(0==i?" selected":"")+'" data-index="'+i+'">\n        <img src="'+m+'">\n    </div>',i++}}catch(a){s=!0,u=a}finally{try{!l&&r.return&&r.return()}finally{if(s)throw u}}o+="</div>",a.after(o);var c=a.next();this._setupOwlCarousel(c)}}]),t}();a(document).ready(function(){new t})}(jQuery);
//# sourceMappingURL=carousel.js.map
