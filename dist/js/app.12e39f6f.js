(function(t){function e(e){for(var a,o,c=e[0],s=e[1],u=e[2],d=0,p=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);l&&l(e);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},o={app:0},r={app:0},i=[];function c(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-07e89fe2":"df7a6f8e","chunk-2568b337":"8f05b2ea","chunk-690384b2":"0ba5552d","chunk-e6c10550":"e252d776"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-07e89fe2":1,"chunk-2568b337":1,"chunk-e6c10550":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-07e89fe2":"c371b8b3","chunk-2568b337":"9c2477ab","chunk-690384b2":"31d6cfe0","chunk-e6c10550":"50cc0810"}[t]+".css",r=s.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===a||d===r))return e()}var p=document.getElementsByTagName("style");for(c=0;c<p.length;c++){u=p[c],d=u.getAttribute("data-href");if(d===a||d===r)return e()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=e,l.onerror=function(e){var a=e&&e.target&&e.target.src||r,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete o[t],l.parentNode.removeChild(l),n(i)},l.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(l)})).then((function(){o[t]=0})));var a=r[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=i);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=c(t);var p=new Error;u=function(e){d.onerror=d.onload=null,clearTimeout(l);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",p.name="ChunkLoadError",p.type=a,p.request=o,n[1](p)}r[t]=void 0}};var l=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=e,u=u.slice();for(var p=0;p<u.length;p++)e(u[p]);var l=d;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("router-view")],1)},r=[],i=n("1da1"),c=n("5530"),s=(n("96cf"),n("e9c4"),n("ac1f"),n("466d"),n("4d63"),n("c607"),n("2c3e"),n("25f0"),n("d9e2"),n("99af"),n("b0c0"),n("a4d3"),n("e01a"),n("2f62")),u={name:"App",data:function(){return{}},watch:{},computed:Object(c["a"])({},Object(s["b"])(["activity","user"])),beforeDestroy:function(){},created:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,a,o,r,i,s,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return sessionStorage.getItem("store"),localStorage.open_at=t.$dayjs().unix(),window.addEventListener("pagehide",(function(){sessionStorage.setItem("store",JSON.stringify(t.$store.state));var e=Math.floor(Date.now()/1e3),n=parseInt(localStorage.open_at),a=e-n;navigator.sendBeacon("http://api.nightowl.name/api/analytics",new Blob([JSON.stringify({user:t.$store.state.user.id,activity:t.$store.state.activity.id,duration:a})]))})),t.$store.dispatch("setApi",t.$api),t.axios.get(t.$api+"system/config").then((function(e){t.$store.dispatch("setConfig",e.data),console.log(e.data)})),n=window.location.href.match(RegExp("(/inviter/)([0-9]+)")),n&&(localStorage.inviter=n[n.length-1]),t.$store.dispatch("setInviter",localStorage.inviter),localStorage.temporaryId||(localStorage.temporaryId=t.$uuid.v1()),n=window.location.href.match(RegExp("(/activity/)([0-9]+)")),n&&(localStorage.activityId=n[n.length-1]),e.prev=11,e.next=14,t.axios.post(t.$api+"v3/init",{activityId:localStorage.activityId,temporaryId:localStorage.temporaryId});case 14:if(a=e.sent,console.log(a.data),a.data.activity&&(o=a.data.activity,document.title=o.title,t.$dayjs().isBefore(o.end_at)?o.state="inProgress":o.state="ended",t.$store.dispatch("setActivity",o),localStorage.activityId=o.id),a.data.activity_config&&(r=a.data.activity_config,t.$store.dispatch("setActivityConfig",r)),!a.data.user){e.next=24;break}i=a.data.user,t.$store.dispatch("setUser",i),t.axios.post(t.$api+"activity/participate",{userId:i.id,activityId:localStorage.activityId}),e.next=25;break;case 24:throw new Error;case 25:e.next=30;break;case 27:e.prev=27,e.t0=e["catch"](11),t.axios.get(t.$api+"v3/wechat/redirect_uri/"+localStorage.temporaryId,{params:{hostname:window.location.origin,redirect_to:window.location.href}}).then((function(t){window.location.href=t.data}));case 30:return e.prev=30,e.next=33,t.axios.get(t.$api+"wechat/jssdk",{params:{url:window.location.href}});case 33:s=e.sent,console.log("jssdk configration",s.data),t.$wx.config(Object(c["a"])({},s.data)),e.next=41;break;case 38:e.prev=38,e.t1=e["catch"](30),console.error("jssdk config failed");case 41:u={title:"".concat(t.user.name,"向您分享").concat(t.activity.title),desc:t.activity.description,link:window.location.origin+"/activity/".concat(t.activity.id,"/inviter/").concat(t.user.id),imgUrl:t.$backend+t.activity.poster},t.$wx.updateTimelineShareData(u),t.$wx.onMenuShareAppMessage(u);case 44:case"end":return e.stop()}}),e,null,[[11,27],[30,38]])})))()}},d=u,p=n("2877"),l=Object(p["a"])(d,o,r,!1,null,null,null),f=l.exports,h=n("bc3a"),g=n.n(h),v=n("130e"),m=n("b970"),y=n("8c4f"),b=(n("157a"),n("d3b7"),n("3ca3"),n("ddb0"),new y["a"]({mode:"history",routes:[{path:"/coupons",component:function(){return n.e("chunk-07e89fe2").then(n.bind(null,"a29e"))}},{path:"/franchise",component:function(){return n.e("chunk-690384b2").then(n.bind(null,"e46b"))}},{path:"/pay",component:function(){return n.e("chunk-e6c10550").then(n.bind(null,"7bb3"))}},{path:"*",component:function(){return n.e("chunk-2568b337").then(n.bind(null,"7abe"))}}]})),w=n("5a0c"),S=n.n(w),I=n("4208"),k=n.n(I),T=n("18a0"),$=n.n(T),_=n("9612"),E=n("4a37"),x=n.n(E);a["a"].use(s["a"]);var O={add:function(t,e){t.commit("ADD",e)},setConfig:function(t,e){t.commit("SET_CONFIG",e)},setActivity:function(t,e){t.commit("SET_ACTIVITY",e)},setActivityConfig:function(t,e){t.commit("SET_ACTIVITY_CONFIG",e)},setUser:function(t,e){t.commit("SET_USER",e)},setInviter:function(t,e){"undefined"!=e&&t.commit("SET_INVITER",parseInt(e))},setApi:function(t,e){t.commit("SET_API",e)}},A={ADD:function(t,e){t.sum+=e},SET_CONFIG:function(t,e){t.config=e},SET_ACTIVITY:function(t,e){t.activity=e},SET_ACTIVITY_CONFIG:function(t,e){t.activityConfig=e},SET_USER:function(t,e){t.user=e},SET_INVITER:function(t,e){t.inviter=e},SET_API:function(t,e){t.api=e}},j={sum:1,user:{},config:{},activity:{},activityConfig:{},inviter:void 0,api:""},C={multiple:function(t){return 10*t.sum}},P=new s["a"].Store({actions:O,mutations:A,state:j,getters:C}),N=n("5638");S.a.extend(k.a),a["a"].use(_["a"]),a["a"].use(m["a"]),a["a"].use(y["a"]),a["a"].config.productionTip=!1,a["a"].use(v["a"],g.a),new a["a"]({beforeCreate:function(){a["a"].prototype.$bus=this,a["a"].prototype.$wx=$.a,a["a"].prototype.$dayjs=S.a,a["a"].prototype.$api="http://api.nightowl.name/api/",a["a"].prototype.$backend="http://api.nightowl.name",a["a"].prototype.$qrcode=x.a,a["a"].prototype.$Pusher=n("782e"),a["a"].prototype.$Echo=new N["a"]({broadcaster:"pusher",key:"ShdHLAikrhOsNRg9",wsHost:"4s.100pq.cn",wsPort:6001,forceTLS:!1})},mounted:function(){},render:function(t){return t(f)},router:b,store:P}).$mount("#app")}});
//# sourceMappingURL=app.12e39f6f.js.map