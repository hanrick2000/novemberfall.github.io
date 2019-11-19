(function(t){function e(e){for(var n,a,o=e[0],l=e[1],c=e[2],h=0,p=[];h<o.length;h++)a=o[h],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],n=!0,o=1;o<s.length;o++){var l=s[o];0!==r[l]&&(n=!1)}n&&(i.splice(e--,1),t=a(a.s=s[0]))}return t}var n={},r={app:0},i=[];function a(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=t,a.c=n,a.d=function(t,e,s){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(s,n,function(e){return t[e]}.bind(null,n));return s},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;i.push(["1d50","chunk-vendors"]),s()})({"07f1":function(t,e,s){},1177:function(t,e,s){"use strict";var n=s("f819"),r=s.n(n);r.a},"1d50":function(t,e,s){"use strict";s.r(e);var n=s("e832"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("transition",[s("router-view")],1)],1)},i=[],a=(s("e5cd"),s("a6c2")),o={},l=Object(a["a"])(o,r,i,!1,null,null,null),c=l.exports,u=s("4af9"),h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"background"},[s("div",{staticClass:"phone"},[s("div",{staticClass:"speaker"}),s("div",{staticClass:"screen"},[s("div",{staticClass:"home"},[s("player")],1)]),s("div",{staticClass:"homeBtn"})])])},p=[],f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"player"},[s("div",{staticClass:"player_disk"},[s("disk")],1),s("div",{staticClass:"player_control"},[s("control")],1),s("div",{staticClass:"player_progress"},[s("progress-bar")],1)])},d=[],y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"disk",class:{disk__playing:t.isPlaying}},[s("label",{ref:"cover",staticClass:"disk_cover",style:{transform:t.stopMatrix,backgroundImage:t.coverUrl?"url("+t.coverUrl+")":""},attrs:{for:"file"}}),s("input",{ref:"file",attrs:{id:"file",type:"file",accept:".mp3",multiple:""},on:{change:t.handleChange}})])},g=[],m=s("94ea");class v{constructor(){this.handlers=[]}listen(t){this.handlers.push(t)}emit(...t){this.handlers.forEach(e=>{e(...t)})}}class b{constructor(){this.audioContext=new AudioContext,this.playList=[],this.playIndex=0,this.emptyNode={file:null,offset:0,start:null,source:null,buffer:null},this.onPlay=new v,this.onPause=new v,this.onChange=new v,this.onReady=new v}async readAudioBuffer(t){return new Promise((e,s)=>{const n=new FileReader;n.onload=async t=>{this.audioContext.decodeAudioData(t.target.result).then(e,s)},n.onerror=s,n.readAsArrayBuffer(t)})}async append(t){const e=this.isEmpty;this.playList.push({file:t,offset:0,start:null,source:null,buffer:await this.readAudioBuffer(t)}),e&&this.onReady.emit(this)}play(){if(!this.playList.length||this.current.source)return;const t=this.audioContext.createBufferSource();t.buffer=this.current.buffer,t.onended=this.next.bind(this),t.connect(this.audioContext.destination),t.start(0,this.current.offset),this.current.source=t,this.current.start=this.audioContext.currentTime,this.onPlay.emit(this)}pause(){this.playList.length&&this.current.source&&(this.current.source.stop(0),this.current.source.disconnect(0),this.current.source.onended=null,this.current.source=null,this.current.offset=this.position,this.current.start=null,this.onPause.emit(this))}stop(){this.pause(),this.current.offset=0,this.current.start=null}next(){this.stop(),this.playIndex++,this.playIndex>=this.playList.length&&(this.playIndex=0),this.play(),this.onChange.emit(this)}prev(){this.stop(),this.playIndex--,this.playIndex<0&&(this.playIndex=Math.max(this.playList.length-1,0)),this.play(),this.onChange.emit(this)}get isEmpty(){return this.current===this.emptyNode}get current(){return this.playList[this.playIndex]||this.emptyNode}get position(){return this.playList.length?this.current.offset+(null!==this.current.start?this.audioContext.currentTime-this.current.start:0):0}set position(t){this.playList.length&&(this.stop(),this.current.offset=t,this.current.start=null,this.play())}get duration(){return this.current.buffer?this.current.buffer.duration:.001}}const _=new b;var x={data(){return{stopMatrix:""}},computed:{...Object(m["c"])(["isPlaying","coverUrl"])},watch:{isPlaying(t){if(t){const t=this.stopMatrix;this.stopMatrix="";const e=t.match(/^matrix\(([^,]+),([^,]+)/),[,s,n]=e||[0,0,0],r=Math.atan2(n,s)/2/Math.PI*360%360,i=[...document.styleSheets];i.forEach(t=>{const e=[...t.cssRules];e.forEach(t=>{t.type===t.KEYFRAMES_RULE&&"rotate"===t.name&&(t.cssRules[0].style.transform=`rotate(${r}deg)`,t.cssRules[1].style.transform=`rotate(${r+360}deg)`)})})}else this.stopMatrix=window.getComputedStyle(this.$refs.cover).transform}},methods:{...Object(m["b"])(["togglePlay","changeCover"]),async handleChange(){const t=this.$refs.file,e=t.files?t.files:[];if(e.length)for(let s=0;s<e.length;s++)await _.append(e[s]);t.value=""}},mounted(){_.onReady.listen(()=>{this.changeCover()}),_.onChange.listen(()=>{this.changeCover()}),_.onPlay.listen(()=>{this.togglePlay(!0)}),_.onPause.listen(()=>{this.togglePlay(!1)})}},C=x,P=(s("6367"),Object(a["a"])(C,y,g,!1,null,null,null)),w=P.exports,j=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"control",class:{control__playing:t.isPlaying}},[s("div",{staticClass:"control_btn control_btn__side",on:{click:t.handlePrev}},[s("i",{staticClass:"fa fa-backward"})]),s("div",{staticClass:"control_btn",on:{click:t.handlePlay}},[s("span",{staticClass:"play-btn"})]),s("div",{staticClass:"control_btn control_btn__side",on:{click:t.handleNext}},[s("i",{staticClass:"fa fa-forward"})])])},O=[],k={computed:{...Object(m["c"])(["isPlaying"])},methods:{handlePlay(){_.isEmpty||(this.isPlaying?_.pause():_.play())},handlePrev(){this.isPlaying&&_.prev()},handleNext(){this.isPlaying&&_.next()}}},M=k,$=(s("1177"),Object(a["a"])(M,j,O,!1,null,null,null)),E=$.exports,I=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"progress",class:{progress__playing:t.isPlaying}},[s("h2",{staticClass:"progress_title"},[t._v(t._s(t._f("formatName")(t.name)))]),s("p",{staticClass:"progress_text"},[t._v("\n    "+t._s(t._f("formatTime")(t.position))+" / "+t._s(t._f("formatTime")(t.duration))+"\n  ")]),s("div",{staticClass:"progress_line"},[s("span",{style:{width:t.progress}})])])},L=[],S={data(){return{name:"",position:0,duration:.001,progress:""}},computed:{...Object(m["c"])(["isPlaying"])},filters:{formatTime(t){const e=Math.floor(t/60),s=Math.floor(t%60);return`${e}:${s<10?"0":""}${s}`},formatName(t){return t.replace(/\.mp3$/,"")}},mounted(){const t=()=>{requestAnimationFrame(t);const e=_.position/_.duration;this.progress=`${(100*e).toFixed(2)}%`,this.position=_.position,this.duration=_.duration,this.name=_.current.file?_.current.file.name:""};t()}},R=S,A=(s("9c88"),Object(a["a"])(R,I,L,!1,null,null,null)),T=A.exports,N={components:{Disk:w,Control:E,ProgressBar:T}},U=N,B=(s("3dc8"),Object(a["a"])(U,f,d,!1,null,null,null)),F=B.exports,D={components:{Player:F}},J=D,q=(s("9e99"),Object(a["a"])(J,h,p,!1,null,null,null)),K=q.exports;n["a"].use(u["a"]);var Y=new u["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:K}]});n["a"].use(m["a"]);const z=[s("7c24"),s("f380"),s("f6cf")];var G=new m["a"].Store({state:{isPlaying:!1,coverUrl:""},getters:{},mutations:{togglePlay(t,e){t.isPlaying=void 0!==e?e:!t.isPlaying},changeCover(t){while(1){const e=Math.floor(3*Math.random()),s=z[e];if(s!==t.coverUrl){t.coverUrl=s;break}}}},actions:{}});n["a"].config.productionTip=!1,new n["a"]({router:Y,store:G,render:t=>t(c)}).$mount("#app")},2036:function(t,e,s){},"3dc8":function(t,e,s){"use strict";var n=s("3ec3"),r=s.n(n);r.a},"3ec3":function(t,e,s){},6367:function(t,e,s){"use strict";var n=s("07f1"),r=s.n(n);r.a},"7c24":function(t,e,s){t.exports=s.p+"img/cover.9945c61c.jpg"},"9c88":function(t,e,s){"use strict";var n=s("e8d1"),r=s.n(n);r.a},"9e99":function(t,e,s){"use strict";var n=s("d8cc"),r=s.n(n);r.a},d8cc:function(t,e,s){},e5cd:function(t,e,s){"use strict";var n=s("2036"),r=s.n(n);r.a},e8d1:function(t,e,s){},f380:function(t,e,s){t.exports=s.p+"img/cover2.d7b75287.jpg"},f6cf:function(t,e,s){t.exports=s.p+"img/cover3.a23e6ba7.jpg"},f819:function(t,e,s){}});
//# sourceMappingURL=app.318d68b6.js.map