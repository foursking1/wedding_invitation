(function(e){function t(t){for(var i,r,o=t[0],c=t[1],u=t[2],d=0,p=[];d<o.length;d++)r=o[d],a[r]&&p.push(a[r][0]),a[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);l&&l(t);while(p.length)p.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],i=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(i=!1)}i&&(s.splice(t--,1),e=r(r.s=n[0]))}return e}var i={},a={app:0},s=[];function r(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=i,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0b39":function(e,t,n){"use strict";var i=n("2279"),a=n.n(i);a.a},1490:function(e,t){(function(){for(var e=0,t=["ms","moz","webkit","o"],n=0;n<t.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[t[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[n]+"CancelAnimationFrame"]||window[t[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t){var n=(new Date).getTime(),i=Math.max(0,16-(n-e)),a=window.setTimeout(function(){t(n+i)},i);return e=n+i,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})})()},2279:function(e,t,n){},2913:function(e,t,n){"use strict";var i=n("5df9"),a=n.n(i);a.a},"2b70":function(e,t,n){},"30df":function(e,t,n){},"322c":function(e,t,n){e.exports=n.p+"img/seal.dcbfcd04.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var i=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wedding"},[n("Editor")],1)},s=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"editor",staticClass:"wedding-editor"},[e._m(0),n("p",{staticClass:"code"},[e._v("Last login: "),n("span",[e._v(e._s(e.startDate))]),e._v(" on ttys001")]),n("pre",[e._v("    "),n("code",{domProps:{innerHTML:e._s(e.highlightedCode)}}),e._v("\n  ")]),n("Executions",{attrs:{canExecute:e.canExecute},on:{onUpdating:e.scrollToBottom,onFinish:function(t){e.canOpen=!0}}}),n("invitation",{attrs:{canOpen:e.canOpen},on:{sendBarrage:e.onAfterSending}}),n("Barrage",{attrs:{wish:e.wish,canStart:e.canStart,barrages:e.barrages}}),n("Music")],1)},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"editor-header"},[n("a",{attrs:{href:"javascript:;"}}),n("a",{staticClass:"minimum",attrs:{href:"javascript:;"}}),n("a",{staticClass:"maximum",attrs:{href:"javascript:;"}})])}],c=n("c197"),u=n.n(c),l=(n("fa97"),n("1490"),{code:"\nval 👩 + 👨 = 🏠;\n👨.say('盛佳丽');\n👩.response('干嘛');\n👨.say('宝宝');\n👩.response('干嘛');\n👨.say('嫁给我吧❤️');\n👩.response('你把请柬做了我就嫁给你！❤️');\n// 那我们请帖写起来\n// 程序跑起来~",executions:[{name:"初始化",time:"",duration:0,visible:!1},{name:"解压中",time:"",duration:0,visible:!1},{name:"组装中",time:"",duration:0,visible:!1},{name:"❤️",time:"",duration:0,visible:!1},{name:"❤️❤️",time:"",duration:0,visible:!1},{name:"编译中...",time:"",visible:!1}],barrages:["66666666","愿你美梦成真","你的邀请函真是美","人美心更美","你是最棒的","哇哇哇","还差女朋友吗","今晚翻你牌","看朕给你打下的江山","你写代码老快了","你的代码真是棒","😗 😙 😚 😋 ","只要代码写得好，单身永远跑不了"]}),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"executions"},[e._l(e.executions,function(t,i){return n("p",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"execution.visible"}],key:i,staticClass:"code"},[n("span",{staticClass:"addon"},[e._v("~")]),e._v("\n    ["),n("span",{staticClass:"time"},[e._v(e._s(t.time))]),e._v("]\n    "),n("span",{staticClass:"task"},[e._v(e._s(t.name))]),void 0!==t.duration?n("span",{staticClass:"duration"},[e._v(e._s(t.duration)+" ms")]):e._e()])}),n("p",{directives:[{name:"show",rawName:"v-show",value:e.isProcessed,expression:"isProcessed"}],staticClass:"code"},[n("span",{staticClass:"addon"},[e._v("~")]),e._v("\n    "+e._s(e.progressBarText)+"\n    "),n("span",{staticClass:"percentage"},[e._v(e._s(e.percentage)+"%")])]),n("p",{directives:[{name:"show",rawName:"v-show",value:e.endExecution.visible,expression:"endExecution.visible"}],staticClass:"code"},[n("span",{staticClass:"addon"},[e._v("~")]),e._v("\n    ["),n("span",{staticClass:"time"},[e._v(e._s(e.endExecution.time))]),e._v("]\n    "),n("span",{staticClass:"task"},[e._v(e._s(e.endExecution.name))])])],2)},p=[],f=(n("a481"),n("ac4d"),n("8a81"),n("ac6a"),n("96cf"),n("1da1")),h=(n("28a5"),{name:"Executions",props:["canExecute"],data:function(){return{executions:l.executions,isProcessed:!1,isFinished:!1,progressBarText:"--------------------------",endExecution:{name:"打开中...",time:"",visible:!1}}},computed:{percentage:function(){var e=this.progressBarText.split("").filter(function(e){return"#"===e}).length,t=this.progressBarText.length;return Math.floor(100*e/t)}},watch:{canExecute:function(e){!0===e&&this.runExecutions()}},updated:function(){this.$emit("onUpdating")},methods:{runExecutions:function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(){var t,n,i,a,s,r,o=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t=!0,n=!1,i=void 0,e.prev=3,a=this.executions[Symbol.iterator]();case 5:if(t=(s=a.next()).done){e.next=12;break}return r=s.value,e.next=9,this.progressivelyRun(r);case 9:t=!0,e.next=5;break;case 12:e.next=18;break;case 14:e.prev=14,e.t0=e["catch"](3),n=!0,i=e.t0;case 18:e.prev=18,e.prev=19,t||null==a.return||a.return();case 21:if(e.prev=21,!n){e.next=24;break}throw i;case 24:return e.finish(21);case 25:return e.finish(18);case 26:return e.next=28,this.successProcessing(1500);case 28:return e.next=30,this.progressivelyRun(this.endExecution).then(function(){setTimeout(function(){o.isFinished=!0,o.$emit("onFinish")},500)});case 30:case"end":return e.stop()}},e,this,[[3,14,18,26],[19,,21,25]])}));return function(){return e.apply(this,arguments)}}(),progressivelyRun:function(e,t){return new Promise(function(n){var i=new Date,a=t||50*Math.random()+250,s=function(){e.time=i.toLocaleTimeString(),e.duration=void 0!==e.duration?a.toFixed(2):void 0,e.visible=!0,n()};setTimeout(s,a)})},successProcessing:function(e){var t=this;return new Promise(function(n){var i,a=null,s=0;t.isProcessed=!0;var r=function r(o){var c;null===a&&(a=o),c=o-a,s%3===0&&(t.progressBarText=t.progressBarText.replace("-","#")),s++,c<e?i=requestAnimationFrame(r):(n(),t.progressBarText=t.progressBarText.replace(/-/g,"#"),cancelAnimationFrame(i))};i=requestAnimationFrame(r)})}}}),m=h,v=(n("6af3"),n("2877")),g=Object(v["a"])(m,d,p,!1,null,null,null);g.options.__file="Executions.vue";var w=g.exports,b=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"wedding-invitation",class:{"invitation-bounce":e.canOpen}},[i("div",{staticClass:"invitation-container",class:{"invitation-down":e.isOpening}},[i("div",{staticClass:"invitation-cover"},[i("v-touch",{staticClass:"wrapper",on:{swipeup:e.swiperleft,swipedown:e.swiperright}},[i("div",{staticClass:"cover-content",class:{"invitation-up":e.isOpening}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.isFirstPage,expression:"isFirstPage"}],staticClass:"gallery-inside"},[i("div",{staticClass:"content-swiper"},[i("swiper",{ref:"mySwiper",attrs:{options:e.swiperOption},on:{someSwiperEvent:e.callback}},[i("swiper-slide",[i("img",{staticClass:"content-inside-photo",attrs:{src:"https://note.youdao.com/yws/api/personal/file/WEB2875f4e1ec3682ab6bf6d96602edff17?method=download&shareKey=0c57b9ee5207cd1583115237db96584d"}})]),i("swiper-slide",[i("img",{staticClass:"content-inside-photo",attrs:{src:"https://note.youdao.com/yws/api/personal/file/WEB1508b251c125d98a184e557a6489b560?method=download&shareKey=689bf4ef89d40d72633ece38ca969e32"}})]),i("swiper-slide",[i("img",{staticClass:"content-inside-photo",attrs:{src:"https://note.youdao.com/yws/api/personal/file/WEB5a2c5286519893f7aec68eaa2f7e3759?method=download&shareKey=e76d96a46056757f741c46ae8d4ad3b2"}})]),i("swiper-slide",[i("img",{staticClass:"content-inside-photo",attrs:{src:"https://note.youdao.com/yws/api/personal/file/WEB7b47aa986ac121ec4475c7b2584cf9c6?method=download&shareKey=1b3ad3b9b68e260086efe13763427bae"}})]),i("swiper-slide",[i("img",{staticClass:"content-inside-photo",attrs:{src:"https://note.youdao.com/yws/api/personal/file/WEBaf0903071b0311a22c6b0ef09bef4273?method=download&shareKey=bad84aebfde8af042f4a47500ccc7264"}})]),i("swiper-slide",[i("img",{staticClass:"content-inside-photo",attrs:{src:"https://note.youdao.com/yws/api/personal/file/WEBdc35ea7b7ab646b038ddb0d1a8cbaa3f?method=download&shareKey=bf179706398c4c660ae9ad5464fa6e5b"}})]),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],1)],1),i("div",{staticClass:"arrow-up"})]),i("div",{directives:[{name:"show",rawName:"v-show",value:!e.isFirstPage,expression:"!isFirstPage"}],staticClass:"content-inside"},[i("img",{staticClass:"content-inside-photo",attrs:{src:"https://note.youdao.com/yws/api/personal/file/WEB16bc5be3611203060ea53eb9b48339c2?method=download&shareKey=19fb4c3cd6021fed8201db399973a285"}}),i("p",[e._v("我们结婚啦！")]),i("p",[i("b",[e._v("叶宇飞 & 盛佳丽")])]),i("p",[e._v("时间：2019年3月23日(周六)")]),i("p",[i("b",[e._v("地点")]),e._v("："),i("b",[e._v("杭州市余杭区"),i("br"),e._v("浙商开元名都大酒店-浙商厅")])]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.wish,expression:"wish"}],ref:"wishInput",staticClass:"content-inside-input",attrs:{placeholder:"留言有弹幕哦！！"},domProps:{value:e.wish},on:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.sendBarrage(t):null},focus:function(t){e.isFocused=!0},blur:function(t){e.isFocused=!1,e.hasEntered=!1},input:function(t){t.target.composing||(e.wish=t.target.value)}}}),i("button",{staticClass:"content-inside-button",on:{click:e.sendBarrage}},[e._v("发送")]),!e.wish&&e.isFocused&&e.hasEntered?i("p",[e._v("留言有弹幕哦")]):e._e(),i("div",{staticClass:"arrow-up"})])])]),i("div",{staticClass:"cover-inside-left",class:{opening:e.isOpening}}),i("div",{staticClass:"cover-inside-right",class:{opening:e.isOpening}}),i("img",{staticClass:"cover-inside-open",class:{"invitation-flight":e.isOpening},attrs:{src:n("69c1")},on:{click:e.openInvitation}}),i("img",{staticClass:"cover-inside-seal",class:{"invitation-flight":e.isOpening},attrs:{src:n("322c")},on:{click:e.openInvitation}})],1)])])},y=[],_=(n("dfa4"),n("7212")),x={components:{swiper:_["swiper"],swiperSlide:_["swiperSlide"]},props:["canOpen"],data:function(){return{isFirstPage:!0,isOpening:!1,wish:"",isFocused:!1,hasEntered:!1,swiperOption:{pagination:{el:".swiper-pagination",dynamicBullets:!0},autoplay:{delay:2500,disableOnInteraction:!1}}}},computed:{swiper:function(){return this.$refs.mySwiper.swiper}},methods:{openInvitation:function(){this.isOpening=!0},swiperleft:function(){1==this.isFirstPage?this.isFirstPage=!1:this.isFirstPage=!0},swiperright:function(){1==this.isFirstPage?this.isFirstPage=!1:this.isFirstPage=!0},sendBarrage:function(){var e=this;this.axios.get("http://www.fast2do.com:3389/add/"+this.wish),this.$nextTick(function(){e.hasEntered=!0,e.wish&&(e.isOpening=!1,e.$refs.wishInput.blur(),setTimeout(function(){e.$emit("sendBarrage",e.wish)},660))})}},mounted:function(){this.swiper.slideTo(3,1e3,!1)}},C=x,O=(n("bddb"),Object(v["a"])(C,b,y,!1,null,null,null));O.options.__file="Invitation.vue";var E=O.exports,F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"barrage",staticClass:"wedding-barrage",style:{opacity:e.canStart?1:0}},[n("div",{domProps:{innerHTML:e._s(e.codeInStyleTag)}}),n("p",{ref:"barrageFirst",staticClass:"code barrage-0",style:{transform:"translate("+e.initialOffset+"px)",top:"10px"}},[n("span",{staticClass:"mine"},[e._v(e._s(e.wish))]),e._l(e.filterBarrage(e.barrages,0),function(t,i){return n("span",{key:i},[e._v(e._s(t))])})],2),n("p",{ref:"barrageSecond",staticClass:"code barrage-1",style:{transform:"translate("+e.initialOffset+"px)",top:"40px"}},e._l(e.filterBarrage(e.barrages,1),function(t,i){return n("span",{key:i},[e._v(e._s(t))])})),n("p",{ref:"barrageThird",staticClass:"code barrage-2",style:{transform:"translate("+e.initialOffset+"px)",top:"70px"}},e._l(e.filterBarrage(e.barrages,2),function(t,i){return n("span",{key:i},[e._v(e._s(t))])})),n("p",{ref:"barrageFourth",staticClass:"code barrage-3",style:{transform:"translate("+e.initialOffset+"px)",top:"100px"}},e._l(e.filterBarrage(e.barrages,3),function(t,i){return n("span",{key:i},[e._v(e._s(t))])})),n("div",{staticClass:"barrage-space"})])},B=[],S={props:["wish","canStart","barrages"],data:function(){return{animationStyle:"",initialOffset:0}},computed:{codeInStyleTag:function(){return"<style>".concat(this.animationStyle,"</style>")}},watch:{canStart:function(e){!0===e&&this.barrageAnimationStart()},isBarrages:function(e){!0===e&&this.barrageAnimationStart()}},methods:{barrageAnimationStart:function(){var e=this,t=this.getWidth(this.$refs.barrage),n=[this.getWidth(this.$refs.barrageFirst),this.getWidth(this.$refs.barrageSecond),this.getWidth(this.$refs.barrageThird),this.getWidth(this.$refs.barrageFourth)];this.initialOffset=t+15,n.map(function(n,i){e.animationStyle+="\n          .barrage-".concat(i,"{\n            animation: barrage-").concat(i," ").concat(n/40,"s linear infinite;\n            -webkit-animation: barrage-").concat(i," ").concat(n/40,"s linear infinite;\n          }\n          @keyframes barrage-").concat(i," {\n            from {\n              transform:translate3d(").concat(t+15,"px,0,0);\n              -webkit-transform:translate3d(").concat(t+15,"px,0,0);\n            }\n            to {\n              transform:translate3d(-").concat(n+15,"px,0,0);\n              -webkit-transform:translate3d(-").concat(n+15,"px,0,0);\n            }\n          }")})},getWidth:function(e){return window.getComputedStyle(e,null).width.replace("px","")-0},filterBarrage:function(e,t){if(e)return e.filter(function(e,n){if(n%4===t)return e})}}},P=S,k=(n("2913"),Object(v["a"])(P,F,B,!1,null,null,null));k.options.__file="Barrage.vue";var T=k.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{class:e.isOff?"isOff":"isOn",on:{click:e.changeOn}}),n("audio",{attrs:{id:"audio",src:"http://www.170hi.com/kw/other.web.rf01.sycdn.kuwo.cn/resource/n2/80/69/1039022526.mp3"}})])},j=[],$={data:function(){return{isOff:!0}},components:{},created:function(){},mounted:function(){document.addEventListener("touchstart",this.audioAutoPlay,!1),document.addEventListener("WeixinJSBridgeReady",this.audioAutoPlay,!1);var e=document.querySelector("#audio");e.onended=function(){e.load(),e.play()}},methods:{changeOn:function(){var e=document.querySelector("#audio");this.isOff?e.play():e.pause(),this.isOff=!this.isOff},audioAutoPlay:function(){var e=document.getElementById("audio");this.isOff=!1,e.play(),document.removeEventListener("touchstart",this.audioAutoPlay)}}},W=$,M=(n("e232"),Object(v["a"])(W,A,j,!1,null,"324bd20c",null));M.options.__file="Music.vue";var q=M.exports,I={name:"Editor",components:{Executions:w,Invitation:E,Barrage:T,Music:q},data:function(){return{startDate:"",code:l.code,currentCode:"",isCursorVisible:1,canExecute:!1,canOpen:!1,wish:"",canStart:!1,barrages:null}},created:function(){this.startDate=(new Date).toDateString(),this.progressivelyTyping()},updated:function(){this.scrollToBottom()},computed:{highlightedCode:function(){var e=u.a.highlight(this.currentCode,u.a.languages.javascript),t="".concat(e,'<span style="opacity:').concat(this.isCursorVisible,'"> ▍</span>');return t}},methods:{getBarrages:function(){var e=this;this.axios.get("http://www.fast2do.com:3389/get").then(function(t){return e.barrages=t.data.wishes})},scrollToBottom:function(){this.$refs.editor.scrollTop=1e5},progressivelyTyping:function(){var e=this;return new Promise(function(t){var n,i=0,a=0,s=function s(){var r=Math.round(10*Math.random());i%2===0&&r%4===0&&(e.currentCode=e.code.substring(0,a),a++),i%24===0&&(e.isCursorVisible=0===e.isCursorVisible?1:0),i++,a<=e.code.length?n=requestAnimationFrame(s):(t(),e.canExecute=!0,cancelAnimationFrame(n))};n=requestAnimationFrame(s)})},onAfterSending:function(e){var t=this;this.getBarrages(),this.wish=e,this.canOpen=!1,setTimeout(function(){t.canStart=!0},800)}}},R=I,D=(n("8164"),Object(v["a"])(R,r,o,!1,null,null,null));D.options.__file="Editor.vue";var K=D.exports,L={props:[],components:{Editor:K},name:"Wedding"},N=L,V=(n("0b39"),Object(v["a"])(N,a,s,!1,null,null,null));V.options.__file="Wedding.vue";var J=V.exports,H=n("ca95"),U=n.n(H),z=n("a7fe"),G=n.n(z),Q=n("bc3a"),X=n.n(Q);new i["a"]({el:"#app",render:function(e){return e(J)}}),i["a"].use(U.a,{name:"v-touch"}),i["a"].use(G.a,X.a)},"5df9":function(e,t,n){},"69c1":function(e,t,n){e.exports=n.p+"img/seal2.eead566d.png"},"6af3":function(e,t,n){"use strict";var i=n("2b70"),a=n.n(i);a.a},8164:function(e,t,n){"use strict";var i=n("b1f4"),a=n.n(i);a.a},b1f4:function(e,t,n){},bddb:function(e,t,n){"use strict";var i=n("d0b9"),a=n.n(i);a.a},d0b9:function(e,t,n){},e232:function(e,t,n){"use strict";var i=n("30df"),a=n.n(i);a.a}});
//# sourceMappingURL=app.857b3a6d.js.map