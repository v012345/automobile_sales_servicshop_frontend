(function(t){function e(e){for(var a,o,c=e[0],s=e[1],u=e[2],p=0,l=[];p<c.length;p++)o=c[p],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&l.push(r[o][0]),r[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);d&&d(e);while(l.length)l.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},o={app:0},r={app:0},i=[];function c(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-458d7fc4":"0453e753","chunk-690384b2":"08de5553","chunk-b08b9510":"c375ea28","chunk-e6c10550":"e252d776"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-458d7fc4":1,"chunk-b08b9510":1,"chunk-e6c10550":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-458d7fc4":"6b583a25","chunk-690384b2":"31d6cfe0","chunk-b08b9510":"ba93a972","chunk-e6c10550":"50cc0810"}[t]+".css",r=s.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],p=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(p===a||p===r))return e()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){u=l[c],p=u.getAttribute("data-href");if(p===a||p===r)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||r,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete o[t],d.parentNode.removeChild(d),n(i)},d.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){o[t]=0})));var a=r[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=i);var u,p=document.createElement("script");p.charset="utf-8",p.timeout=120,s.nc&&p.setAttribute("nonce",s.nc),p.src=c(t);var l=new Error;u=function(e){p.onerror=p.onload=null,clearTimeout(d);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",l.name="ChunkLoadError",l.type=a,l.request=o,n[1](l)}r[t]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:p})}),12e4);p.onerror=p.onload=u,document.head.appendChild(p)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],p=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var d=p;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("router-view")],1)},r=[],i=n("1da1"),c=n("5530"),s=(n("96cf"),n("e9c4"),n("ac1f"),n("466d"),n("4d63"),n("c607"),n("2c3e"),n("25f0"),n("99af"),n("b0c0"),n("a4d3"),n("e01a"),n("2f62")),u={name:"App",data:function(){return{}},watch:{},computed:Object(c["a"])({},Object(s["b"])(["activity","user"])),beforeDestroy:function(){},created:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,a,o,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return localStorage.getItem("storeV3")&&t.$store.replaceState(Object.assign({},t.$store.state,JSON.parse(localStorage.getItem("storeV3")))),localStorage.open_at=t.$dayjs().unix(),window.addEventListener("pagehide",(function(){localStorage.setItem("storeV3",JSON.stringify(t.$store.state));var e=Math.floor(Date.now()/1e3),n=parseInt(localStorage.open_at),a=e-n;navigator.sendBeacon("http://amap.100pq.cn/laravel/api/analytics",new Blob([JSON.stringify({user:t.$store.state.user.id,activity:t.$store.state.activity.id,duration:a})]))})),t.$store.dispatch("setApi",t.$api),t.axios.get(t.$api+"system/config").then((function(e){t.$store.dispatch("setConfig",e.data),console.log(e.data)})),n=window.location.href.match(RegExp("(/inviter/)([0-9]+)")),n&&(localStorage.inviter=n[n.length-1]),t.$store.dispatch("setInviter",localStorage.inviter),localStorage.temporaryId||(localStorage.temporaryId=t.$uuid.v1()),n=window.location.href.match(RegExp("(/activity/)([0-9]+)")),n&&(localStorage.activityId=n[n.length-1]),e.prev=11,e.next=14,t.axios.post(t.$api+"v3/init",{activityId:localStorage.activityId,temporaryId:localStorage.temporaryId});case 14:a=e.sent,t.$store.dispatch("init",a.data),t.axios.post(t.$api+"activity/participate",{userId:a.data.user.id,activityId:a.data.activity.id}),t.axios.post(t.$api+"v3/ask/participant/has_coupon",{activityId:a.data.activity.id,temporaryId:localStorage.temporaryId}).then((function(e){console.log(e.data),e.data&&t.$router.push("/coupons")})),e.next=23;break;case 20:e.prev=20,e.t0=e["catch"](11),t.axios.get(t.$api+"v3/wechat/redirect_uri/"+localStorage.temporaryId,{params:{hostname:window.location.origin,redirect_to:window.location.href}}).then((function(t){window.location.href=t.data}));case 23:return t.$Echo.channel("test").listen("Test",(function(t){console.log(123)})),e.prev=24,e.next=27,t.axios.get(t.$api+"wechat/jssdk",{params:{url:window.location.href}});case 27:o=e.sent,console.log("jssdk configration",o.data),t.$wx.config(Object(c["a"])({},o.data)),e.next=35;break;case 32:e.prev=32,e.t1=e["catch"](24),console.error("jssdk config failed");case 35:r={title:"".concat(t.user.name,"向您分享").concat(t.activity.title),desc:t.activity.description,link:window.location.origin+"/activity/".concat(t.activity.id,"/inviter/").concat(t.user.id),imgUrl:t.$backend+t.activity.poster},t.$wx.updateTimelineShareData(r),t.$wx.onMenuShareAppMessage(r);case 38:case"end":return e.stop()}}),e,null,[[11,20],[24,32]])})))()}},p=u,l=n("2877"),d=Object(l["a"])(p,o,r,!1,null,null,null),f=d.exports,h=n("bc3a"),v=n.n(h),m=n("130e"),g=n("b970"),y=n("8c4f"),b=(n("157a"),n("d3b7"),n("3ca3"),n("ddb0"),new y["a"]({mode:"history",routes:[{path:"/coupons",component:function(){return n.e("chunk-b08b9510").then(n.bind(null,"a29e"))}},{path:"/franchise",component:function(){return n.e("chunk-690384b2").then(n.bind(null,"e46b"))}},{path:"/pay",component:function(){return n.e("chunk-e6c10550").then(n.bind(null,"7bb3"))}},{path:"*",component:function(){return n.e("chunk-458d7fc4").then(n.bind(null,"7abe"))}}],scrollBehavior:function(t,e,n){return n||{x:0,y:0}}})),S=n("5a0c"),w=n.n(S),I=n("4208"),T=n.n(I),_=n("18a0"),k=n.n(_),E=n("9612"),$=n("4a37"),x=n.n($);a["a"].use(s["a"]);var O={add:function(t,e){t.commit("ADD",e)},init:function(t,e){if(e.user&&t.commit("SET_USER",e.user),e.activity_config&&t.commit("SET_ACTIVITY_CONFIG",e.activity_config),e.activity){var n=e.activity;w()().isBefore(n.end_at)?n.state="inProgress":n.state="ended",document.title=n.title,localStorage.activityId=n.id,t.commit("SET_ACTIVITY",n)}},setConfig:function(t,e){t.commit("SET_CONFIG",e)},setActivity:function(t,e){t.commit("SET_ACTIVITY",e)},setActivityConfig:function(t,e){t.commit("SET_ACTIVITY_CONFIG",e)},setUser:function(t,e){t.commit("SET_USER",e)},setInviter:function(t,e){"undefined"!=e&&t.commit("SET_INVITER",parseInt(e))},setApi:function(t,e){t.commit("SET_API",e)}},C={ADD:function(t,e){t.sum+=e},SET_CONFIG:function(t,e){t.config=e},SET_ACTIVITY:function(t,e){t.activity=e},SET_ACTIVITY_CONFIG:function(t,e){t.activityConfig=e},SET_USER:function(t,e){t.user=e},SET_INVITER:function(t,e){t.inviter=e},SET_API:function(t,e){t.api=e}},A={sum:1,user:{},config:{},activity:{},activityConfig:{},inviter:void 0,api:""},j={multiple:function(t){return 10*t.sum}},N=new s["a"].Store({actions:O,mutations:C,state:A,getters:j}),P=n("5638");w.a.extend(T.a),a["a"].use(E["a"]),a["a"].use(g["a"]),a["a"].use(y["a"]),a["a"].config.productionTip=!1,a["a"].use(m["a"],v.a),new a["a"]({beforeCreate:function(){a["a"].prototype.$bus=this,a["a"].prototype.$wx=k.a,a["a"].prototype.$dayjs=w.a,a["a"].prototype.$api="http://amap.100pq.cn/laravel/api/",a["a"].prototype.$backend="http://cdn4s.100pq.cn",a["a"].prototype.$qrcode=x.a,a["a"].prototype.$Pusher=n("782e"),a["a"].prototype.$Echo=new P["a"]({broadcaster:"pusher",key:"ShdHLAikrhOsNRg9",wsHost:"4s.100pq.cn",wsPort:6001,forceTLS:!1})},mounted:function(){},render:function(t){return t(f)},router:b,store:N}).$mount("#app")}});
//# sourceMappingURL=app.d0fd5f4e.js.map