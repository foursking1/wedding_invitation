(function(t){function e(e){for(var i,s,o=e[0],c=e[1],u=e[2],p=0,d=[];p<o.length;p++)s=o[p],a[s]&&d.push(a[s][0]),a[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(i=!1)}i&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},a={app:0},r=[];function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0b39":function(t,e,n){"use strict";var i=n("2279"),a=n.n(i);a.a},1490:function(t,e){(function(){for(var t=0,e=["ms","moz","webkit","o"],n=0;n<e.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[e[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[n]+"CancelAnimationFrame"]||window[e[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e){var n=(new Date).getTime(),i=Math.max(0,16-(n-t)),a=window.setTimeout(function(){e(n+i)},i);return t=n+i,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})})()},2279:function(t,e,n){},2913:function(t,e,n){"use strict";var i=n("5df9"),a=n.n(i);a.a},"2b70":function(t,e,n){},"322c":function(t,e,n){t.exports=n.p+"img/seal.dcbfcd04.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wedding"},[n("Editor")],1)},r=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"editor",staticClass:"wedding-editor"},[t._m(0),n("p",{staticClass:"code"},[t._v("Last login: "),n("span",[t._v(t._s(t.startDate))]),t._v(" on ttys001")]),n("pre",[t._v("    "),n("code",{domProps:{innerHTML:t._s(t.highlightedCode)}}),t._v("\n  ")]),n("Executions",{attrs:{canExecute:t.canExecute},on:{onUpdating:t.scrollToBottom,onFinish:function(e){t.canOpen=!0}}}),n("invitation",{attrs:{canOpen:t.canOpen},on:{sendBarrage:t.onAfterSending}}),n("Barrage",{attrs:{wish:t.wish,canStart:t.canStart}})],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"editor-header"},[n("a",{attrs:{href:"javascript:;"}}),n("a",{staticClass:"minimum",attrs:{href:"javascript:;"}}),n("a",{staticClass:"maximum",attrs:{href:"javascript:;"}})])}],c=n("c197"),u=n.n(c),l=(n("fa97"),n("1490"),{code:"\nval 👩 + 👨 = 🏠;\n👨.say('盛佳丽');\n👩.response('干嘛');\n👨.say('宝宝');\n👩.response('干嘛');\n👨.say('嫁给我吧❤️');\n👩.response('好的吧❤️');\n// 那我们请帖写起来\n// 程序跑起来~",executions:[{name:"初始化",time:"",duration:0,visible:!1},{name:"解压中",time:"",duration:0,visible:!1},{name:"组装中",time:"",duration:0,visible:!1},{name:"❤️",time:"",duration:0,visible:!1},{name:"❤️❤️",time:"",duration:0,visible:!1},{name:"编译中...",time:"",visible:!1}],barrages:["66666666","愿你美梦成真","你的邀请函真是美","人美心更美","你是最棒的","哇哇哇","还差女朋友吗","今晚翻你牌","看朕给你打下的江山","你写代码老快了","你的代码真是棒","😗 😙 😚 😋 ","只要代码写得好，单身永远跑不了"]}),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"executions"},[t._l(t.executions,function(e,i){return n("p",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"execution.visible"}],key:i,staticClass:"code"},[n("span",{staticClass:"addon"},[t._v("~")]),t._v("\n    ["),n("span",{staticClass:"time"},[t._v(t._s(e.time))]),t._v("]\n    "),n("span",{staticClass:"task"},[t._v(t._s(e.name))]),void 0!==e.duration?n("span",{staticClass:"duration"},[t._v(t._s(e.duration)+" ms")]):t._e()])}),n("p",{directives:[{name:"show",rawName:"v-show",value:t.isProcessed,expression:"isProcessed"}],staticClass:"code"},[n("span",{staticClass:"addon"},[t._v("~")]),t._v("\n    "+t._s(t.progressBarText)+"\n    "),n("span",{staticClass:"percentage"},[t._v(t._s(t.percentage)+"%")])]),n("p",{directives:[{name:"show",rawName:"v-show",value:t.endExecution.visible,expression:"endExecution.visible"}],staticClass:"code"},[n("span",{staticClass:"addon"},[t._v("~")]),t._v("\n    ["),n("span",{staticClass:"time"},[t._v(t._s(t.endExecution.time))]),t._v("]\n    "),n("span",{staticClass:"task"},[t._v(t._s(t.endExecution.name))])])],2)},d=[],f=(n("a481"),n("ac4d"),n("8a81"),n("ac6a"),n("96cf"),n("1da1")),v=(n("28a5"),{name:"Executions",props:["canExecute"],data:function(){return{executions:l.executions,isProcessed:!1,isFinished:!1,progressBarText:"--------------------------",endExecution:{name:"打开中...",time:"",visible:!1}}},computed:{percentage:function(){var t=this.progressBarText.split("").filter(function(t){return"#"===t}).length,e=this.progressBarText.length;return Math.floor(100*t/e)}},watch:{canExecute:function(t){!0===t&&this.runExecutions()}},updated:function(){this.$emit("onUpdating")},methods:{runExecutions:function(){var t=Object(f["a"])(regeneratorRuntime.mark(function t(){var e,n,i,a,r,s,o=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:e=!0,n=!1,i=void 0,t.prev=3,a=this.executions[Symbol.iterator]();case 5:if(e=(r=a.next()).done){t.next=12;break}return s=r.value,t.next=9,this.progressivelyRun(s);case 9:e=!0,t.next=5;break;case 12:t.next=18;break;case 14:t.prev=14,t.t0=t["catch"](3),n=!0,i=t.t0;case 18:t.prev=18,t.prev=19,e||null==a.return||a.return();case 21:if(t.prev=21,!n){t.next=24;break}throw i;case 24:return t.finish(21);case 25:return t.finish(18);case 26:return t.next=28,this.successProcessing(1500);case 28:return t.next=30,this.progressivelyRun(this.endExecution).then(function(){setTimeout(function(){o.isFinished=!0,o.$emit("onFinish")},500)});case 30:case"end":return t.stop()}},t,this,[[3,14,18,26],[19,,21,25]])}));return function(){return t.apply(this,arguments)}}(),progressivelyRun:function(t,e){return new Promise(function(n){var i=new Date,a=e||50*Math.random()+250,r=function(){t.time=i.toLocaleTimeString(),t.duration=void 0!==t.duration?a.toFixed(2):void 0,t.visible=!0,n()};setTimeout(r,a)})},successProcessing:function(t){var e=this;return new Promise(function(n){var i,a=null,r=0;e.isProcessed=!0;var s=function s(o){var c;null===a&&(a=o),c=o-a,r%3===0&&(e.progressBarText=e.progressBarText.replace("-","#")),r++,c<t?i=requestAnimationFrame(s):(n(),e.progressBarText=e.progressBarText.replace(/-/g,"#"),cancelAnimationFrame(i))};i=requestAnimationFrame(s)})}}}),m=v,h=(n("6af3"),n("2877")),g=Object(h["a"])(m,p,d,!1,null,null,null);g.options.__file="Executions.vue";var b=g.exports,w=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wedding-invitation",class:{"invitation-bounce":t.canOpen}},[i("div",{staticClass:"invitation-container",class:{"invitation-down":t.isOpening}},[i("div",{staticClass:"invitation-cover"},[i("div",{staticClass:"cover-content",class:{"invitation-up":t.isOpening}},[i("div",{staticClass:"content-inside"},[i("div",{staticClass:"content-swiper"},[i("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption},on:{someSwiperEvent:t.callback}},[i("swiper-slide",[i("img",{staticClass:"content-inside-photo",attrs:{src:n("9137")}})]),i("swiper-slide",[i("img",{staticClass:"content-inside-photo",attrs:{src:n("9137")}})]),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],1)],1),i("p",[t._v("我们结婚啦！")]),t._m(0),i("p",[t._v("时间：2019年3月23日(周六)")]),t._m(1),i("input",{directives:[{name:"model",rawName:"v-model",value:t.wish,expression:"wish"}],ref:"wishInput",staticClass:"content-inside-input",attrs:{placeholder:"轻触写下祝福，按回车发送"},domProps:{value:t.wish},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.sendBarrage(e):null},focus:function(e){t.isFocused=!0},blur:function(e){t.isFocused=!1,t.hasEntered=!1},input:function(e){e.target.composing||(t.wish=e.target.value)}}}),!t.wish&&t.isFocused&&t.hasEntered?i("p",[t._v("请输入祝福哦")]):t._e()])]),i("div",{staticClass:"cover-inside-left",class:{opening:t.isOpening}}),i("div",{staticClass:"cover-inside-right",class:{opening:t.isOpening}}),i("img",{staticClass:"cover-inside-seal",class:{"invitation-flight":t.isOpening},attrs:{src:n("322c")},on:{click:t.openInvitation}})])])])},_=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("b",[t._v("叶宇飞 & 盛佳丽")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("b",[t._v("地点")]),t._v("："),n("b",[t._v("杭州市余杭区浙商开元名都大酒店-浙商厅")])])}],x=(n("dfa4"),n("7212")),y={components:{swiper:x["swiper"],swiperSlide:x["swiperSlide"]},props:["canOpen"],data:function(){return{isOpening:!1,wish:"",isFocused:!1,hasEntered:!1,swiperOption:{pagination:{el:".swiper-pagination",dynamicBullets:!0},autoplay:{delay:2500,disableOnInteraction:!1}}}},computed:{swiper:function(){return this.$refs.mySwiper.swiper}},methods:{openInvitation:function(){this.isOpening=!0},sendBarrage:function(){var t=this;this.$nextTick(function(){t.hasEntered=!0,t.wish&&(t.isOpening=!1,t.$refs.wishInput.blur(),setTimeout(function(){t.$emit("sendBarrage",t.wish)},660))})}},mounted:function(){this.swiper.slideTo(3,1e3,!1)}},C=y,O=(n("bddb"),Object(h["a"])(C,w,_,!1,null,null,null));O.options.__file="Invitation.vue";var E=O.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"barrage",staticClass:"wedding-barrage",style:{opacity:t.canStart?1:0}},[n("div",{domProps:{innerHTML:t._s(t.codeInStyleTag)}}),n("p",{ref:"barrageFirst",staticClass:"code barrage-0",style:{transform:"translate("+t.initialOffset+"px)",top:"10px"}},[n("span",{staticClass:"mine"},[t._v(t._s(t.wish))]),t._l(t.filterBarrage(t.barrages,0),function(e,i){return n("span",{key:i},[t._v(t._s(e))])})],2),n("p",{ref:"barrageSecond",staticClass:"code barrage-1",style:{transform:"translate("+t.initialOffset+"px)",top:"40px"}},t._l(t.filterBarrage(t.barrages,1),function(e,i){return n("span",{key:i},[t._v(t._s(e))])})),n("p",{ref:"barrageThird",staticClass:"code barrage-2",style:{transform:"translate("+t.initialOffset+"px)",top:"70px"}},t._l(t.filterBarrage(t.barrages,2),function(e,i){return n("span",{key:i},[t._v(t._s(e))])})),n("p",{ref:"barrageFourth",staticClass:"code barrage-3",style:{transform:"translate("+t.initialOffset+"px)",top:"100px"}},t._l(t.filterBarrage(t.barrages,3),function(e,i){return n("span",{key:i},[t._v(t._s(e))])})),n("div",{staticClass:"barrage-space"})])},T=[],F={props:["wish","canStart"],data:function(){return{barrages:l.barrages,animationStyle:"",initialOffset:0}},computed:{codeInStyleTag:function(){return"<style>".concat(this.animationStyle,"</style>")}},watch:{canStart:function(t){!0===t&&this.barrageAnimationStart()}},methods:{barrageAnimationStart:function(){var t=this,e=this.getWidth(this.$refs.barrage),n=[this.getWidth(this.$refs.barrageFirst),this.getWidth(this.$refs.barrageSecond),this.getWidth(this.$refs.barrageThird),this.getWidth(this.$refs.barrageFourth)];this.initialOffset=e+15,n.map(function(n,i){t.animationStyle+="\n          .barrage-".concat(i,"{\n            animation: barrage-").concat(i," ").concat(n/40,"s linear infinite;\n            -webkit-animation: barrage-").concat(i," ").concat(n/40,"s linear infinite;\n          }\n          @keyframes barrage-").concat(i," {\n            from {\n              transform:translate3d(").concat(e+15,"px,0,0);\n              -webkit-transform:translate3d(").concat(e+15,"px,0,0);\n            }\n            to {\n              transform:translate3d(-").concat(n+15,"px,0,0);\n              -webkit-transform:translate3d(-").concat(n+15,"px,0,0);\n            }\n          }")})},getWidth:function(t){return window.getComputedStyle(t,null).width.replace("px","")-0},filterBarrage:function(t,e){if(t)return t.filter(function(t,n){if(n%4===e)return t})}}},k=F,B=(n("2913"),Object(h["a"])(k,S,T,!1,null,null,null));B.options.__file="Barrage.vue";var A=B.exports,$={name:"Editor",components:{Executions:b,Invitation:E,Barrage:A},data:function(){return{startDate:"",code:l.code,currentCode:"",isCursorVisible:1,canExecute:!1,canOpen:!1,wish:"",canStart:!1}},created:function(){this.startDate=(new Date).toDateString(),this.progressivelyTyping()},updated:function(){this.scrollToBottom()},computed:{highlightedCode:function(){var t=u.a.highlight(this.currentCode,u.a.languages.javascript),e="".concat(t,'<span style="opacity:').concat(this.isCursorVisible,'"> ▍</span>');return e}},methods:{scrollToBottom:function(){this.$refs.editor.scrollTop=1e5},progressivelyTyping:function(){var t=this;return new Promise(function(e){var n,i=0,a=0,r=function r(){var s=Math.round(10*Math.random());i%2===0&&s%4===0&&(t.currentCode=t.code.substring(0,a),a++),i%24===0&&(t.isCursorVisible=0===t.isCursorVisible?1:0),i++,a<=t.code.length?n=requestAnimationFrame(r):(e(),t.canExecute=!0,cancelAnimationFrame(n))};n=requestAnimationFrame(r)})},onAfterSending:function(t){var e=this;this.wish=t,this.canOpen=!1,setTimeout(function(){e.canStart=!0},800)}}},j=$,P=(n("8164"),Object(h["a"])(j,s,o,!1,null,null,null));P.options.__file="Editor.vue";var M=P.exports,q={props:[],components:{Editor:M},name:"Wedding"},I=q,W=(n("0b39"),Object(h["a"])(I,a,r,!1,null,null,null));W.options.__file="Wedding.vue";var D=W.exports;new i["a"]({el:"#app",render:function(t){return t(D)}})},"5df9":function(t,e,n){},"6af3":function(t,e,n){"use strict";var i=n("2b70"),a=n.n(i);a.a},8164:function(t,e,n){"use strict";var i=n("b1f4"),a=n.n(i);a.a},9137:function(t,e,n){t.exports=n.p+"img/1.8e85c157.jpg"},b1f4:function(t,e,n){},bddb:function(t,e,n){"use strict";var i=n("d0b9"),a=n.n(i);a.a},d0b9:function(t,e,n){}});
//# sourceMappingURL=app.81bab9bb.js.map