!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=10)}([function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var r=(a=i,l=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(s," */")),o=i.sources.map(function(e){return"/*# sourceURL=".concat(i.sourceRoot).concat(e," */")});return[n].concat(o).concat([r]).join("\n")}var a,l,s;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2],"{").concat(n,"}"):n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];null!=o&&(i[o]=!0)}for(var a=0;a<e.length;a++){var l=e[a];null!=l[0]&&i[l[0]]||(n&&!l[2]?l[2]=n:n&&(l[2]="(".concat(l[2],") and (").concat(n,")")),t.push(l))}},t}},function(e,t,n){"use strict";var i,r={},o=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}();function l(e,t){for(var n=[],i={},r=0;r<e.length;r++){var o=e[r],a=t.base?o[0]+t.base:o[0],l={css:o[1],media:o[2],sourceMap:o[3]};i[a]?i[a].parts.push(l):n.push(i[a]={id:a,parts:[l]})}return n}function s(e,t){for(var n=0;n<e.length;n++){var i=e[n],o=r[i.id],a=0;if(o){for(o.refs++;a<o.parts.length;a++)o.parts[a](i.parts[a]);for(;a<i.parts.length;a++)o.parts.push(v(i.parts[a],t))}else{for(var l=[];a<i.parts.length;a++)l.push(v(i.parts[a],t));r[i.id]={id:i.id,refs:1,parts:l}}}}function c(e){var t=document.createElement("style");if(void 0===e.attributes.nonce){var i=n.nc;i&&(e.attributes.nonce=i)}if(Object.keys(e.attributes).forEach(function(n){t.setAttribute(n,e.attributes[n])}),"function"==typeof e.insert)e.insert(t);else{var r=a(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}return t}var d,p=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function u(e,t,n,i){var r=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=p(t,r);else{var o=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}var h=null,f=0;function v(e,t){var n,i,r;if(t.singleton){var o=f++;n=h||(h=c(t)),i=u.bind(null,n,o,!1),r=u.bind(null,n,o,!0)}else n=c(t),i=function(e,t,n){var i=n.css,r=n.media,o=n.sourceMap;if(r&&e.setAttribute("media",r),o&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=l(e,t);return s(n,t),function(e){for(var i=[],o=0;o<n.length;o++){var a=n[o],c=r[a.id];c&&(c.refs--,i.push(c))}e&&s(l(e,t),t);for(var d=0;d<i.length;d++){var p=i[d];if(0===p.refs){for(var u=0;u<p.parts.length;u++)p.parts[u]();delete r[p.id]}}}}},function(e,t){!function(e){function t(e,t,n){return"string"==typeof e&&("%"==e.slice(-1)?e=parseInt(e.substring(0,e.length-1))/100*t:"vh"==e.slice(-2)?e=parseInt(e.substring(0,e.length-2))/100*n:"px"==e.slice(-2)&&(e=parseInt(e.substring(0,e.length-2)))),e}var n=e(window),i=1,r={};n.on("scroll",function(){var t=n.scrollTop();e.map(r,function(e){window.clearTimeout(e.timeoutId),e.timeoutId=window.setTimeout(function(){e.handler(t)},e.options.delay)})}).on("load",function(){n.trigger("scroll")}),jQuery.fn.scrollex=function(o){var a,l,s,c,d,p=e(this);if(0==this.length)return p;if(this.length>1){for(var u=0;u<this.length;u++)e(this[u]).scrollex(o);return p}if(p.data("_scrollexId"))return p;switch(a=i++,(l=jQuery.extend({top:0,bottom:0,delay:0,mode:"default",enter:null,leave:null,initialize:null,terminate:null,scroll:null},o)).mode){case"top":s=function(e,t,n,i,r){return e>=i&&r>=e};break;case"bottom":s=function(e,t,n,i,r){return n>=i&&r>=n};break;case"middle":s=function(e,t,n,i,r){return t>=i&&r>=t};break;case"top-only":s=function(e,t,n,i,r){return i>=e&&n>=i};break;case"bottom-only":s=function(e,t,n,i,r){return n>=r&&r>=e};break;default:case"default":s=function(e,t,n,i,r){return n>=i&&r>=e}}return c=function(e){var i,r,o,a,l,s,c,d=this.state,p=this.$element.offset();r=e+(i=n.height())/2,o=e+i,a=this.$element.outerHeight(),l=p.top+t(this.options.top,a,i),s=p.top+a-t(this.options.bottom,a,i),(c=this.test(e,r,o,l,s))!=d&&(this.state=c,c?this.options.enter&&this.options.enter.apply(this.element):this.options.leave&&this.options.leave.apply(this.element)),this.options.scroll&&this.options.scroll.apply(this.element,[(r-l)/(s-l)])},d={id:a,options:l,test:s,handler:c,state:null,element:this,$element:p,timeoutId:null},r[a]=d,p.data("_scrollexId",d.id),d.options.initialize&&d.options.initialize.apply(this),p},jQuery.fn.unscrollex=function(){var t,n,i=e(this);if(0==this.length)return i;if(this.length>1){for(var o=0;o<this.length;o++)e(this[o]).unscrollex();return i}return(t=i.data("_scrollexId"))?(n=r[t],window.clearTimeout(n.timeoutId),delete r[t],i.removeData("_scrollexId"),n.options.terminate&&n.options.terminate.apply(this),i):i}}(jQuery)},function(e,t){!function(e){function t(t,a){var l,s,c;if(0==(l=e(t))[n])return i;switch(s=l[o]()[r],a.anchor){case"middle":c=s-(e(window).height()-l.outerHeight())/2;break;default:case r:c=Math.max(s,0)}return"function"==typeof a[o]?c-=a[o]():c-=a[o],c}var n="length",i=null,r="top",o="offset",a="click.scrolly";e(window);e.fn.scrolly=function(o){var l,s,c,d,p=e(this);if(0==this[n])return p;if(this[n]>1){for(l=0;l<this[n];l++)e(this[l]).scrolly(o);return p}if(d=i,"#"!=(c=p.attr("href")).charAt(0)||c[n]<2)return p;(s=jQuery.extend({anchor:r,easing:"swing",offset:0,parent:e("body,html"),pollOnce:!1,speed:1e3},o)).pollOnce&&(d=t(c,s)),p.off(a).on(a,function(e){var n=d!==i?d:t(c,s);n!==i&&(e.preventDefault(),s.parent.stop().animate({scrollTop:n},s.speed,s.easing))})}}(jQuery)},function(e,t){var n;(n=jQuery).fn.navList=function(){var e=n(this);return $a=e.find("a"),b=[],$a.each(function(){var e=n(this),t=Math.max(0,e.parents("li").length-1),i=e.attr("href"),r=e.attr("target");b.push('<a class="link depth-'+t+'"'+(void 0!==r&&""!=r?' target="'+r+'"':"")+(void 0!==i&&""!=i?' href="'+i+'"':"")+'><span class="indent-'+t+'"></span>'+e.text()+"</a>")}),b.join("")},n.fn.panel=function(e){if(0==this.length)return r;if(this.length>1){for(var t=0;t<this.length;t++)n(this[t]).panel(e);return r}var i,r=n(this),o=n("body"),a=n(window),l=r.attr("id");return"jQuery"!=typeof(i=n.extend({delay:0,hideOnClick:!1,hideOnEscape:!1,hideOnSwipe:!1,resetScroll:!1,resetForms:!1,side:null,target:r,visibleClass:"visible"},e)).target&&(i.target=n(i.target)),r._hide=function(e){i.target.hasClass(i.visibleClass)&&(e&&(e.preventDefault(),e.stopPropagation()),i.target.removeClass(i.visibleClass),window.setTimeout(function(){i.resetScroll&&r.scrollTop(0),i.resetForms&&r.find("form").each(function(){this.reset()})},i.delay))},r.css("-ms-overflow-style","-ms-autohiding-scrollbar").css("-webkit-overflow-scrolling","touch"),i.hideOnClick&&(r.find("a").css("-webkit-tap-highlight-color","rgba(0,0,0,0)"),r.on("click","a",function(e){var t=n(this),o=t.attr("href"),a=t.attr("target");o&&"#"!=o&&""!=o&&o!="#"+l&&(e.preventDefault(),e.stopPropagation(),r._hide(),window.setTimeout(function(){"_blank"==a?window.open(o):window.location.href=o},i.delay+10))})),r.on("touchstart",function(e){r.touchPosX=e.originalEvent.touches[0].pageX,r.touchPosY=e.originalEvent.touches[0].pageY}),r.on("touchmove",function(e){if(null!==r.touchPosX&&null!==r.touchPosY){var t=r.touchPosX-e.originalEvent.touches[0].pageX,n=r.touchPosY-e.originalEvent.touches[0].pageY,o=r.outerHeight(),a=r.get(0).scrollHeight-r.scrollTop();if(i.hideOnSwipe){var l=!1;switch(i.side){case"left":l=n<20&&n>-20&&t>50;break;case"right":l=n<20&&n>-20&&t<-50;break;case"top":l=t<20&&t>-20&&n>50;break;case"bottom":l=t<20&&t>-20&&n<-50}if(l)return r.touchPosX=null,r.touchPosY=null,r._hide(),!1}(r.scrollTop()<0&&n<0||a>o-2&&a<o+2&&n>0)&&(e.preventDefault(),e.stopPropagation())}}),r.on("click touchend touchstart touchmove",function(e){e.stopPropagation()}),r.on("click",'a[href="#'+l+'"]',function(e){e.preventDefault(),e.stopPropagation(),i.target.removeClass(i.visibleClass)}),o.on("click touchend",function(e){r._hide(e)}),o.on("click",'a[href="#'+l+'"]',function(e){e.preventDefault(),e.stopPropagation(),i.target.toggleClass(i.visibleClass)}),i.hideOnEscape&&a.on("keydown",function(e){27==e.keyCode&&r._hide(e)}),r},n.fn.placeholder=function(){if(void 0!==document.createElement("input").placeholder)return n(this);if(0==this.length)return t;if(this.length>1){for(var e=0;e<this.length;e++)n(this[e]).placeholder();return t}var t=n(this);return t.find("input[type=text],textarea").each(function(){var e=n(this);""!=e.val()&&e.val()!=e.attr("placeholder")||e.addClass("polyfill-placeholder").val(e.attr("placeholder"))}).on("blur",function(){var e=n(this);e.attr("name").match(/-polyfill-field$/)||""==e.val()&&e.addClass("polyfill-placeholder").val(e.attr("placeholder"))}).on("focus",function(){var e=n(this);e.attr("name").match(/-polyfill-field$/)||e.val()==e.attr("placeholder")&&e.removeClass("polyfill-placeholder").val("")}),t.find("input[type=password]").each(function(){var e=n(this),t=n(n("<div>").append(e.clone()).remove().html().replace(/type="password"/i,'type="text"').replace(/type=password/i,"type=text"));""!=e.attr("id")&&t.attr("id",e.attr("id")+"-polyfill-field"),""!=e.attr("name")&&t.attr("name",e.attr("name")+"-polyfill-field"),t.addClass("polyfill-placeholder").val(t.attr("placeholder")).insertAfter(e),""==e.val()?e.hide():t.hide(),e.on("blur",function(t){t.preventDefault();var n=e.parent().find("input[name="+e.attr("name")+"-polyfill-field]");""==e.val()&&(e.hide(),n.show())}),t.on("focus",function(e){e.preventDefault();var n=t.parent().find("input[name="+t.attr("name").replace("-polyfill-field","")+"]");t.hide(),n.show().focus()}).on("keypress",function(e){e.preventDefault(),t.val("")})}),t.on("submit",function(){t.find("input[type=text],input[type=password],textarea").each(function(e){var t=n(this);t.attr("name").match(/-polyfill-field$/)&&t.attr("name",""),t.val()==t.attr("placeholder")&&(t.removeClass("polyfill-placeholder"),t.val(""))})}).on("reset",function(e){e.preventDefault(),t.find("select").val(n("option:first").val()),t.find("input,textarea").each(function(){var e,t=n(this);switch(t.removeClass("polyfill-placeholder"),this.type){case"submit":case"reset":break;case"password":t.val(t.attr("defaultValue")),e=t.parent().find("input[name="+t.attr("name")+"-polyfill-field]"),""==t.val()?(t.hide(),e.show()):(t.show(),e.hide());break;case"checkbox":case"radio":t.attr("checked",t.attr("defaultValue"));break;case"text":case"textarea":t.val(t.attr("defaultValue")),""==t.val()&&(t.addClass("polyfill-placeholder"),t.val(t.attr("placeholder")));break;default:t.val(t.attr("defaultValue"))}})}),t},n.prioritize=function(e,t){var i="__prioritize";"jQuery"!=typeof e&&(e=n(e)),e.each(function(){var e,r=n(this),o=r.parent();if(0!=o.length)if(r.data(i)){if(t)return;e=r.data(i),r.insertAfter(e),r.removeData(i)}else{if(!t)return;if(0==(e=r.prev()).length)return;r.prependTo(o),r.data(i,e)}})}},function(e,t){!function(e){var t=e(window),n=e("body"),i=e("#nav");breakpoints({wide:["961px","1880px"],normal:["961px","1620px"],narrow:["961px","1320px"],narrower:["737px","960px"],mobile:[null,"736px"]}),t.on("load",function(){window.setTimeout(function(){n.removeClass("is-preload")},100)});var r=i.find("a");r.addClass("scrolly").on("click",function(t){var n=e(this);"#"==n.attr("href").charAt(0)&&(t.preventDefault(),r.removeClass("active"),n.addClass("active").addClass("active-locked"))}).each(function(){var t=e(this),n=t.attr("href"),i=e(n);i.length<1||i.scrollex({mode:"middle",top:"-10vh",bottom:"-10vh",initialize:function(){i.addClass("inactive")},enter:function(){i.removeClass("inactive"),0==r.filter(".active-locked").length?(r.removeClass("active"),t.addClass("active")):t.hasClass("active-locked")&&t.removeClass("active-locked")}})}),e(".scrolly").scrolly(),e('<div id="headerToggle"><a href="#header" class="toggle"></a></div>').appendTo(n),e("#header").panel({delay:500,hideOnClick:!0,hideOnSwipe:!0,resetScroll:!0,resetForms:!0,side:"left",target:n,visibleClass:"header-visible"})}(jQuery)},function(e,t,n){var i=n(7);"string"==typeof i&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1};n(1)(i,r);i.locals&&(e.exports=i.locals)},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,".title-bg {\r\n  padding: 32px 24px;\r\n  background: rgba(250, 250, 250, 0.55);\r\n  border-radius: 28px;\r\n  color: #222629; /* #282a36; */\r\n}\r\n\r\n#highlights img {\r\n  border-style: solid;\r\n  border-width: 5px;\r\n  border-color: white;\r\n}\r\n\r\n.symbol {\r\n  margin-top: 3.3vw;\r\n  font-size: 8vw;\r\n}\r\n\r\n@media screen and (min-width: 1400px) {\r\n  .symbol {\r\n    margin-top: 45px;\r\n    font-size: 110pt;\r\n  }\r\n}\r\n\r\n/*\r\n * Dialog\r\n */\r\n\r\n#dialog {\r\n  display: none;\r\n  width: 90%;\r\n  height: 80%;\r\n  position: fixed;\r\n  top: 10%;\r\n  left: 5%;\r\n  z-index: 100;\r\n  background-color: rgba(27, 31, 34, 0.98);\r\n  border-color: rgba(27, 31, 34, 1.0);\r\n  box-shadow: 0 0 4px rgba(27, 31, 34, 1);\r\n  border-width: 1px;\r\n  color: white;\r\n  border-radius: 4px;\r\n  padding: 10px 0px 10px 10px;\r\n}\r\n\r\n#dialog-content {\r\n  width: 100%;\r\n  height: 95%;\r\n  color: white;\r\n  overflow-y: scroll;\r\n}\r\n\r\n#dialog-content > h1 {\r\n  color: white;\r\n}\r\n\r\n#dialog-content > h2 {\r\n  color: white;\r\n}\r\n\r\n#dialog-content > h3 {\r\n  color: white;\r\n}\r\n\r\n#dialog-content > h4 {\r\n  color: white;\r\n}\r\n\r\n#dialog-content > h5 {\r\n  color: white;\r\n}\r\n\r\n#dialog-content::-webkit-scrollbar-track {\r\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n  border-radius: 10px;\r\n  background-color: #ddd;\r\n}\r\n\r\n#dialog-content::-webkit-scrollbar {\r\n  width: 12px;\r\n  border-radius: 10px;\r\n  background-color: #ddd;\r\n}\r\n\r\n#dialog-content::-webkit-scrollbar-thumb {\r\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n  border-radius: 10px;\r\n  background-color: #666;\r\n}\r\n",""])},function(e,t,n){var i=n(9);"string"==typeof i&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1};n(1)(i,r);i.locals&&(e.exports=i.locals)},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,".pub-image {\r\n    margin-top: 60px;\r\n    width: 100%;\r\n    background-color: white;\r\n    border-width: 1px;\r\n    border-style: solid;\r\n    border-color: #ccc;\r\n}\r\n\r\n@media screen and (max-width: 960px) {\r\n    .pub-image {\r\n        width: 35%;\r\n    }\r\n}\r\n\r\n.pub-entry {\r\n    margin-top: 50px;\r\n    margin-left: 0px;\r\n    height: 100%;\r\n    text-align: left;\r\n}\r\n\r\n@media screen and (max-width: 960px) {\r\n    .pub-entry {\r\n        margin-top: 0px;\r\n        padding: 0 20px;\r\n        height: 100%;\r\n        text-align: left;\r\n    }\r\n}\r\n\r\n.pub-authors {\r\n    font-size: 0.9em;\r\n}\r\n\r\n.pub-title {\r\n    font-size: 100%;\r\n    font-weight: bold;\r\n}\r\n\r\n.pub-published {\r\n    font-size: 0.9em;\r\n    font-style: italic;\r\n}\r\n\r\n.pub-link {\r\n    margin: 0 5px;\r\n}",""])},function(e,t,n){"use strict";n.r(t);n(2),n(3),n(4),n(5),n(6),n(8);const i=[{type:"inproceedings",authors:"David Pomerenke, Frederik L. Dennig, Daniel A. Keim, and Michael Blumenschein",title:"Slope-Dependent Rendering of Parallel Coordinates to Reduce Density Distortion and Ghost Clusters",published:"Proceedings of the IEEE Visualization Conference (VIS), Short Papers",year:2019,note:void 0,image:"/static/images/pub/pcp-rendering.png",pdf:"/static/pdf/Pomerenke2019.pdf",video:"https://vimeo.com/373792354",demo:"http://subspace.dbvis.de/pcp-adjustment",code:"https://github.com/davidpomerenke/slope",doi:"https://doi.org/10.1109/VISUAL.2019.8933706",arxiv:"https://arxiv.org/abs/1907.12489",dblp:"https://dblp.uni-trier.de/rec/bibtex/conf/visualization/PomerenkeDK0B19"},{type:"inproceedings",authors:"Frederik L. Dennig, Tom Polk, Zudi Lin, Tobias Schreck, Hanspeter Pfister, and Michael Behrisch",title:"FDive: Learning Relevance Models using Pattern-based Similarity Measures",published:"Proceedings of IEEE Conference on Visual Analytics Science and Technology (VAST)",year:2019,note:void 0,image:"/static/images/pub/fdive.png",pdf:"/static/pdf/Dennig2019.pdf",video:"https://vimeo.com/371537420",demo:void 0,code:void 0,doi:"https://doi.org/10.1109/VAST47406.2019.8986940",arxiv:"https://arxiv.org/abs/1907.12489",dblp:"https://dblp.uni-trier.de/rec/bibtex/conf/ieeevast/DennigPLSP019"},{type:"inproceedings",authors:"Christin Schätzle, Frederik L. Dennig, Michael Blumenschein, Daniel A. Keim, and Miriam Butt",title:"Visualizing Linguistic Change as Dimension Interactions",published:"Proceedings of the 1st International Workshop on Computational Approaches to Historical Language Change",year:2019,note:void 0,image:"/static/images/pub/histobankvis-2.png",pdf:"/static/pdf/Schaetzle2019.pdf",video:void 0,demo:"https://dennig.dbvis.de/histobankvis",code:void 0,doi:void 0,arxiv:void 0,dblp:void 0},{type:"inproceedings",authors:"Chrisitin Schätzle, Michael Hund, Frederik L. Dennig, Miriam Butt, and Daniel A. Keim",title:"HistoBankVis: Detecting Language Change via Data Visualization",published:"Proceedings of the NoDaLiDa 2017 Workshop on Processing Historical Language",year:2017,note:void 0,image:"/static/images/pub/histobankvis.png",pdf:"/static/pdf/Schaetzle2017.pdf",video:void 0,demo:"https://dennig.dbvis.de/histobankvis",code:void 0,doi:void 0,arxiv:void 0,dblp:"https://dblp.org/rec/bibtex/conf/histlang/SchatzleHDBK17"}],r=[{type:"pdf",classes:"icon solid fa-file-pdf  pub-link",title:"PDF"},{type:"video",classes:"icon solid fa-video  pub-link",title:"Video"},{type:"demo",classes:"icon solid fa-play-circle pub-link",title:"Live prototype"},{type:"code",classes:"icon solid fa-code pub-link",title:"Source code"},{type:"doi",classes:"ai ai-doi ai-lg pub-link",title:"DOI"},{type:"arxiv",classes:"ai ai-arxiv ai-lg pub-link",title:"arXiv publication"},{type:"dblp",classes:"ai ai-dblp ai-lg pub-link",title:"dblp bibliography"}];const o=()=>c("static/txt/dsvgo-en.txt"),a=()=>c("static/txt/dsvgo-de.txt"),l=()=>c("static/txt/impressum-en.txt"),s=()=>c("static/txt/impressum-de.txt");function c(e){jQuery.get(e,function(e){document.getElementById("dialog-content").innerHTML=e,document.getElementById("dialog").style="display: block;",jQuery("#dialog-content").scrollTop(0)})}function d(){document.getElementById("dialog").style="display: none;"}window.onload=()=>{!function(){const e=document.getElementById("publications-list");for(const t of i){const n=document.createElement("div");n.className="row";const i=document.createElement("div");i.className="col-2 col-12-narrower";const o=document.createElement("img");o.className="pub-image",o.src=t.image,i.appendChild(o);const a=document.createElement("div");a.className="col-10 col-12-narrower";const l=document.createElement("div");l.className="pub-entry";const s=document.createElement("div");s.className="pub-authors",s.textContent=t.authors;const c=document.createElement("div");c.className="pub-title",c.textContent=t.title;const d=document.createElement("div");d.className="pub-published",d.textContent=t.published+", "+t.year+".",l.appendChild(s),l.appendChild(c),l.appendChild(d);for(const e of r)if(t[e.type]){const n=document.createElement("a");n.className=e.classes,n.href=t[e.type],n.title=e.title,l.appendChild(n)}a.appendChild(l),n.appendChild(i),n.appendChild(a),e.appendChild(n)}}(),window.openDataProtectionDialog=o,window.openDatenschutzDialog=a,window.openLegalNoticeDialog=l,window.openImpressumDialog=s,window.closeDialog=d}}]);
//# sourceMappingURL=bundle.js.map