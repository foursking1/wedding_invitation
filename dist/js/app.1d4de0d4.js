(function(t){function e(e){for(var i,r,o=e[0],c=e[1],u=e[2],d=0,p=[];d<o.length;d++)r=o[d],a[r]&&p.push(a[r][0]),a[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(e);while(p.length)p.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(i=!1)}i&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},a={app:0},s=[];function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0b39":function(t,e,n){"use strict";var i=n("2279"),a=n.n(i);a.a},1490:function(t,e){(function(){for(var t=0,e=["ms","moz","webkit","o"],n=0;n<e.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[e[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[n]+"CancelAnimationFrame"]||window[e[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e){var n=(new Date).getTime(),i=Math.max(0,16-(n-t)),a=window.setTimeout(function(){e(n+i)},i);return t=n+i,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})})()},2279:function(t,e,n){},2913:function(t,e,n){"use strict";var i=n("5df9"),a=n.n(i);a.a},"2b70":function(t,e,n){},"30df":function(t,e,n){},"322c":function(t,e,n){t.exports=n.p+"img/seal.dcbfcd04.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wedding"},[n("Editor")],1)},s=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"editor",staticClass:"wedding-editor"},[t._m(0),n("p",{staticClass:"code"},[t._v("Last login: "),n("span",[t._v(t._s(t.startDate))]),t._v(" on ttys001")]),n("pre",[t._v("    "),n("code",{domProps:{innerHTML:t._s(t.highlightedCode)}}),t._v("\n  ")]),n("Executions",{attrs:{canExecute:t.canExecute},on:{onUpdating:t.scrollToBottom,onFinish:function(e){t.canOpen=!0}}}),n("invitation",{attrs:{canOpen:t.canOpen},on:{sendBarrage:t.onAfterSending}}),n("Barrage",{attrs:{wish:t.wish,canStart:t.canStart,barrages:t.barrages}}),n("Music")],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"editor-header"},[n("a",{attrs:{href:"javascript:;"}}),n("a",{staticClass:"minimum",attrs:{href:"javascript:;"}}),n("a",{staticClass:"maximum",attrs:{href:"javascript:;"}})])}],c=n("c197"),u=n.n(c),l=(n("fa97"),n("1490"),{code:"\nval 👩 + 👨 = 🏠;\n👨.say('盛佳丽');\n👩.response('干嘛');\n👨.say('宝宝');\n👩.response('干嘛');\n👨.say('嫁给我吧❤️');\n👩.response('你把请柬做了我就嫁给你！❤️');\n// 那我们请帖写起来\n// 程序跑起来~",executions:[{name:"初始化",time:"",duration:0,visible:!1},{name:"解压中",time:"",duration:0,visible:!1},{name:"组装中",time:"",duration:0,visible:!1},{name:"❤️",time:"",duration:0,visible:!1},{name:"❤️❤️",time:"",duration:0,visible:!1},{name:"编译中...",time:"",visible:!1}],barrages:["66666666","愿你美梦成真","你的邀请函真是美","人美心更美","你是最棒的","哇哇哇","还差女朋友吗","今晚翻你牌","看朕给你打下的江山","你写代码老快了","你的代码真是棒","😗 😙 😚 😋 ","只要代码写得好，单身永远跑不了"]}),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"executions"},[t._l(t.executions,function(e,i){return n("p",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"execution.visible"}],key:i,staticClass:"code"},[n("span",{staticClass:"addon"},[t._v("~")]),t._v("\n    ["),n("span",{staticClass:"time"},[t._v(t._s(e.time))]),t._v("]\n    "),n("span",{staticClass:"task"},[t._v(t._s(e.name))]),void 0!==e.duration?n("span",{staticClass:"duration"},[t._v(t._s(e.duration)+" ms")]):t._e()])}),n("p",{directives:[{name:"show",rawName:"v-show",value:t.isProcessed,expression:"isProcessed"}],staticClass:"code"},[n("span",{staticClass:"addon"},[t._v("~")]),t._v("\n    "+t._s(t.progressBarText)+"\n    "),n("span",{staticClass:"percentage"},[t._v(t._s(t.percentage)+"%")])]),n("p",{directives:[{name:"show",rawName:"v-show",value:t.endExecution.visible,expression:"endExecution.visible"}],staticClass:"code"},[n("span",{staticClass:"addon"},[t._v("~")]),t._v("\n    ["),n("span",{staticClass:"time"},[t._v(t._s(t.endExecution.time))]),t._v("]\n    "),n("span",{staticClass:"task"},[t._v(t._s(t.endExecution.name))])])],2)},p=[],f=(n("a481"),n("ac4d"),n("8a81"),n("ac6a"),n("96cf"),n("1da1")),h=(n("28a5"),{name:"Executions",props:["canExecute"],data:function(){return{executions:l.executions,isProcessed:!1,isFinished:!1,progressBarText:"--------------------------",endExecution:{name:"打开中...",time:"",visible:!1}}},computed:{percentage:function(){var t=this.progressBarText.split("").filter(function(t){return"#"===t}).length,e=this.progressBarText.length;return Math.floor(100*t/e)}},watch:{canExecute:function(t){!0===t&&this.runExecutions()}},updated:function(){this.$emit("onUpdating")},methods:{runExecutions:function(){var t=Object(f["a"])(regeneratorRuntime.mark(function t(){var e,n,i,a,s,r,o=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:e=!0,n=!1,i=void 0,t.prev=3,a=this.executions[Symbol.iterator]();case 5:if(e=(s=a.next()).done){t.next=12;break}return r=s.value,t.next=9,this.progressivelyRun(r);case 9:e=!0,t.next=5;break;case 12:t.next=18;break;case 14:t.prev=14,t.t0=t["catch"](3),n=!0,i=t.t0;case 18:t.prev=18,t.prev=19,e||null==a.return||a.return();case 21:if(t.prev=21,!n){t.next=24;break}throw i;case 24:return t.finish(21);case 25:return t.finish(18);case 26:return t.next=28,this.successProcessing(1500);case 28:return t.next=30,this.progressivelyRun(this.endExecution).then(function(){setTimeout(function(){o.isFinished=!0,o.$emit("onFinish")},500)});case 30:case"end":return t.stop()}},t,this,[[3,14,18,26],[19,,21,25]])}));return function(){return t.apply(this,arguments)}}(),progressivelyRun:function(t,e){return new Promise(function(n){var i=new Date,a=e||50*Math.random()+250,s=function(){t.time=i.toLocaleTimeString(),t.duration=void 0!==t.duration?a.toFixed(2):void 0,t.visible=!0,n()};setTimeout(s,a)})},successProcessing:function(t){var e=this;return new Promise(function(n){var i,a=null,s=0;e.isProcessed=!0;var r=function r(o){var c;null===a&&(a=o),c=o-a,s%3===0&&(e.progressBarText=e.progressBarText.replace("-","#")),s++,c<t?i=requestAnimationFrame(r):(n(),e.progressBarText=e.progressBarText.replace(/-/g,"#"),cancelAnimationFrame(i))};i=requestAnimationFrame(r)})}}}),v=h,m=(n("6af3"),n("2877")),g=Object(m["a"])(v,d,p,!1,null,null,null);g.options.__file="Executions.vue";var b=g.exports,w=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wedding-invitation",class:{"invitation-bounce":t.canOpen}},[i("div",{staticClass:"invitation-container",class:{"invitation-down":t.isOpening}},[i("div",{staticClass:"invitation-cover"},[i("v-touch",{staticClass:"wrapper",on:{swipeup:t.swiperleft,swipedown:t.swiperright}},[i("div",{staticClass:"cover-content",class:{"invitation-up":t.isOpening}},[i("transition",{attrs:{name:"fade"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isFirstPage,expression:"isFirstPage"}],staticClass:"gallery-inside"},[i("div",{staticClass:"content-swiper"},[i("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption},on:{someSwiperEvent:t.callback}},[i("swiper-slide",[i("img",{staticClass:"content-inside-photo",attrs:{src:"https://note.youdao.com/yws/api/personal/file/WEB2875f4e1ec3682ab6bf6d96602edff17?method=download&shareKey=0c57b9ee5207cd1583115237db96584d"}})]),i("swiper-slide",[i("img",{staticClass:"content-inside-photo",attrs:{src:"https://note.youdao.com/yws/api/personal/file/WEB90520684209dbc1a43c908398aaac388?method=download&shareKey=bd748a3f5be4e941dddae8b156c0019b"}})]),i("swiper-slide",[i("img",{staticClass:"content-inside-photo",attrs:{src:"https://note.youdao.com/yws/api/personal/file/WEB5a2c5286519893f7aec68eaa2f7e3759?method=download&shareKey=e76d96a46056757f741c46ae8d4ad3b2"}})]),i("swiper-slide",[i("img",{staticClass:"content-inside-photo",attrs:{src:"https://note.youdao.com/yws/api/personal/file/WEB7b47aa986ac121ec4475c7b2584cf9c6?method=download&shareKey=1b3ad3b9b68e260086efe13763427bae"}})]),i("swiper-slide",[i("img",{staticClass:"content-inside-photo",attrs:{src:"https://note.youdao.com/yws/api/personal/file/WEBaf0903071b0311a22c6b0ef09bef4273?method=download&shareKey=bad84aebfde8af042f4a47500ccc7264"}})]),i("swiper-slide",[i("img",{staticClass:"content-inside-photo",attrs:{src:"https://note.youdao.com/yws/api/personal/file/WEBdc35ea7b7ab646b038ddb0d1a8cbaa3f?method=download&shareKey=bf179706398c4c660ae9ad5464fa6e5b"}})]),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"}),i("div",{staticClass:"swiper-scrollbar",attrs:{slot:"scrollbar"},slot:"scrollbar"})],1)],1),i("p",[i("b",[t._v("叶宇飞")]),t._v("，金牛座，急性子"),i("br"),t._v("爱打篮球，爱吃美食"),i("br"),i("b",[t._v("盛佳丽")]),t._v("，天枰座，慢性子"),i("br"),t._v("爱做瑜伽，爱吃新郎做的美食")]),i("div",{staticClass:"arrow-up"})])]),i("transition",{attrs:{name:"fade"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:!t.isFirstPage,expression:"!isFirstPage"}],staticClass:"content-inside"},[i("img",{staticClass:"content-inside-photo",attrs:{src:"https://note.youdao.com/yws/api/personal/file/WEB16bc5be3611203060ea53eb9b48339c2?method=download&shareKey=19fb4c3cd6021fed8201db399973a285"}}),i("p",[t._v("我们结婚啦！")]),i("p",[i("b",[t._v("叶宇飞 & 盛佳丽")])]),i("p",[t._v("时间：2019年3月23日(周六)")]),i("p",[i("b",[t._v("地点")]),t._v("："),i("b",[t._v("杭州市余杭区"),i("br"),t._v("浙商开元名都大酒店-浙商厅")])]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.wish,expression:"wish"}],ref:"wishInput",staticClass:"content-inside-input",attrs:{placeholder:"留言有弹幕哦！！"},domProps:{value:t.wish},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.sendBarrage(e):null},focus:function(e){t.isFocused=!0},blur:function(e){t.isFocused=!1,t.hasEntered=!1},input:function(e){e.target.composing||(t.wish=e.target.value)}}}),i("button",{staticClass:"content-inside-button",on:{click:t.sendBarrage}},[t._v("发送")]),!t.wish&&t.isFocused&&t.hasEntered?i("p",[t._v("留言有弹幕哦")]):t._e(),i("div",{staticClass:"arrow-up"})])])],1)]),i("div",{staticClass:"cover-inside-left",class:{opening:t.isOpening}}),i("div",{staticClass:"cover-inside-right",class:{opening:t.isOpening}}),i("img",{staticClass:"cover-inside-open",class:{"invitation-flight":t.isOpening},attrs:{src:n("69c1")},on:{click:t.openInvitation}}),i("img",{staticClass:"cover-inside-seal",class:{"invitation-flight":t.isOpening},attrs:{src:n("322c")},on:{click:t.openInvitation}})],1)])])},_=[],y=(n("dfa4"),n("7212")),x={components:{swiper:y["swiper"],swiperSlide:y["swiperSlide"]},props:["canOpen"],data:function(){return{isFirstPage:!0,isOpening:!1,wish:"",isFocused:!1,hasEntered:!1,swiperOption:{pagination:{el:".swiper-pagination",dynamicBullets:!0},autoplay:{delay:5e3,disableOnInteraction:!1}}}},computed:{swiper:function(){return this.$refs.mySwiper.swiper}},methods:{openInvitation:function(){this.isOpening=!0},swiperleft:function(){1==this.isFirstPage?this.isFirstPage=!1:this.isFirstPage=!0},swiperright:function(){1==this.isFirstPage?this.isFirstPage=!1:this.isFirstPage=!0},sendBarrage:function(){var t=this;this.axios.get("http://www.fast2do.com:3389/add/"+this.wish),this.$nextTick(function(){t.hasEntered=!0,t.wish&&(t.isOpening=!1,t.$refs.wishInput.blur(),setTimeout(function(){t.$emit("sendBarrage",t.wish)},660))})}},mounted:function(){this.swiper.slideTo(3,1e3,!1)}},C=x,O=(n("bddb"),Object(m["a"])(C,w,_,!1,null,null,null));O.options.__file="Invitation.vue";var E=O.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"barrage",staticClass:"wedding-barrage",style:{opacity:t.canStart?1:0}},[n("div",{domProps:{innerHTML:t._s(t.codeInStyleTag)}}),n("p",{ref:"barrageFirst",staticClass:"code barrage-0",style:{transform:"translate("+t.initialOffset+"px)",top:"10px"}},[n("span",{staticClass:"mine"},[t._v(t._s(t.wish))]),t._l(t.filterBarrage(t.barrages,0),function(e,i){return n("span",{key:i},[t._v(t._s(e))])})],2),n("p",{ref:"barrageSecond",staticClass:"code barrage-1",style:{transform:"translate("+t.initialOffset+"px)",top:"40px"}},t._l(t.filterBarrage(t.barrages,1),function(e,i){return n("span",{key:i},[t._v(t._s(e))])})),n("p",{ref:"barrageThird",staticClass:"code barrage-2",style:{transform:"translate("+t.initialOffset+"px)",top:"70px"}},t._l(t.filterBarrage(t.barrages,2),function(e,i){return n("span",{key:i},[t._v(t._s(e))])})),n("p",{ref:"barrageFourth",staticClass:"code barrage-3",style:{transform:"translate("+t.initialOffset+"px)",top:"100px"}},t._l(t.filterBarrage(t.barrages,3),function(e,i){return n("span",{key:i},[t._v(t._s(e))])})),n("div",{staticClass:"barrage-space"})])},B=[],S={props:["wish","canStart","barrages"],data:function(){return{animationStyle:"",initialOffset:0}},computed:{codeInStyleTag:function(){return"<style>".concat(this.animationStyle,"</style>")}},watch:{canStart:function(t){!0===t&&this.barrageAnimationStart()},isBarrages:function(t){!0===t&&this.barrageAnimationStart()}},methods:{barrageAnimationStart:function(){var t=this,e=this.getWidth(this.$refs.barrage),n=[this.getWidth(this.$refs.barrageFirst),this.getWidth(this.$refs.barrageSecond),this.getWidth(this.$refs.barrageThird),this.getWidth(this.$refs.barrageFourth)];this.initialOffset=e+15,n.map(function(n,i){t.animationStyle+="\n          .barrage-".concat(i,"{\n            animation: barrage-").concat(i," ").concat(n/40,"s linear infinite;\n            -webkit-animation: barrage-").concat(i," ").concat(n/40,"s linear infinite;\n          }\n          @keyframes barrage-").concat(i," {\n            from {\n              transform:translate3d(").concat(e+15,"px,0,0);\n              -webkit-transform:translate3d(").concat(e+15,"px,0,0);\n            }\n            to {\n              transform:translate3d(-").concat(n+15,"px,0,0);\n              -webkit-transform:translate3d(-").concat(n+15,"px,0,0);\n            }\n          }")})},getWidth:function(t){return window.getComputedStyle(t,null).width.replace("px","")-0},filterBarrage:function(t,e){if(t)return t.filter(function(t,n){if(n%4===e)return t})}}},P=S,k=(n("2913"),Object(m["a"])(P,F,B,!1,null,null,null));k.options.__file="Barrage.vue";var T=k.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{class:t.isOff?"isOff":"isOn",on:{click:t.changeOn}}),n("audio",{attrs:{id:"audio",src:"http://www.170hi.com/kw/other.web.rf01.sycdn.kuwo.cn/resource/n2/80/69/1039022526.mp3"}})])},j=[],$={data:function(){return{isOff:!0}},components:{},created:function(){},mounted:function(){document.addEventListener("touchstart",this.audioAutoPlay,!1),document.addEventListener("WeixinJSBridgeReady",this.audioAutoPlay,!1);var t=document.querySelector("#audio");t.onended=function(){t.load(),t.play()}},methods:{changeOn:function(){var t=document.querySelector("#audio");this.isOff?t.play():t.pause(),this.isOff=!this.isOff},audioAutoPlay:function(){var t=document.getElementById("audio");this.isOff=!1,t.play(),document.removeEventListener("touchstart",this.audioAutoPlay)}}},W=$,M=(n("e232"),Object(m["a"])(W,A,j,!1,null,"324bd20c",null));M.options.__file="Music.vue";var q=M.exports,I={name:"Editor",components:{Executions:b,Invitation:E,Barrage:T,Music:q},data:function(){return{startDate:"",code:l.code,currentCode:"",isCursorVisible:1,canExecute:!1,canOpen:!1,wish:"",canStart:!1,barrages:null}},created:function(){this.startDate=(new Date).toDateString(),this.progressivelyTyping()},updated:function(){this.scrollToBottom()},computed:{highlightedCode:function(){var t=u.a.highlight(this.currentCode,u.a.languages.javascript),e="".concat(t,'<span style="opacity:').concat(this.isCursorVisible,'"> ▍</span>');return e}},methods:{getBarrages:function(){var t=this;this.axios.get("http://www.fast2do.com:3389/get").then(function(e){return t.barrages=e.data.wishes})},scrollToBottom:function(){this.$refs.editor.scrollTop=1e5},progressivelyTyping:function(){var t=this;return new Promise(function(e){var n,i=0,a=0,s=function s(){var r=Math.round(10*Math.random());i%2===0&&r%4===0&&(t.currentCode=t.code.substring(0,a),a++),i%24===0&&(t.isCursorVisible=0===t.isCursorVisible?1:0),i++,a<=t.code.length?n=requestAnimationFrame(s):(e(),t.canExecute=!0,cancelAnimationFrame(n))};n=requestAnimationFrame(s)})},onAfterSending:function(t){var e=this;this.getBarrages(),this.wish=t,this.canOpen=!1,setTimeout(function(){e.canStart=!0},800)}}},R=I,D=(n("8164"),Object(m["a"])(R,r,o,!1,null,null,null));D.options.__file="Editor.vue";var K=D.exports,L={props:[],components:{Editor:K},name:"Wedding"},N=L,V=(n("0b39"),Object(m["a"])(N,a,s,!1,null,null,null));V.options.__file="Wedding.vue";var J=V.exports,H=n("ca95"),U=n.n(H),z=n("a7fe"),G=n.n(z),Q=n("bc3a"),X=n.n(Q);new i["a"]({el:"#app",render:function(t){return t(J)}}),i["a"].use(U.a,{name:"v-touch"}),i["a"].use(G.a,X.a)},"5df9":function(t,e,n){},"69c1":function(t,e,n){t.exports=n.p+"img/seal2.eead566d.png"},"6af3":function(t,e,n){"use strict";var i=n("2b70"),a=n.n(i);a.a},8164:function(t,e,n){"use strict";var i=n("b1f4"),a=n.n(i);a.a},b1f4:function(t,e,n){},bddb:function(t,e,n){"use strict";var i=n("d0b9"),a=n.n(i);a.a},d0b9:function(t,e,n){},e232:function(t,e,n){"use strict";var i=n("30df"),a=n.n(i);a.a}});
//# sourceMappingURL=app.1d4de0d4.js.map