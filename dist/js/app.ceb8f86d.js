(function(e){function t(t){for(var n,r,c=t[0],s=t[1],u=t[2],d=0,p=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);l&&l(t);while(p.length)p.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,r=1;r<a.length;r++){var c=a[r];0!==o[c]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},r={app:0},o={app:0},i=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-1ee2ee7c":"709a0ad1","chunk-4a8da51d":"13352e9f","chunk-690384b2":"0ba5552d"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var t=[],a={"chunk-1ee2ee7c":1,"chunk-4a8da51d":1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=new Promise((function(t,a){for(var n="css/"+({}[e]||e)+"."+{"chunk-1ee2ee7c":"06aef82b","chunk-4a8da51d":"293d29cc","chunk-690384b2":"31d6cfe0"}[e]+".css",o=s.p+n,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===n||d===o))return t()}var p=document.getElementsByTagName("style");for(c=0;c<p.length;c++){u=p[c],d=u.getAttribute("data-href");if(d===n||d===o)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var n=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete r[e],l.parentNode.removeChild(l),a(i)},l.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(l)})).then((function(){r[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,a){n=o[e]=[t,a]}));t.push(n[2]=i);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=c(e);var p=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(l);var a=o[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",p.name="ChunkLoadError",p.type=n,p.request=r,a[1](p)}o[e]=void 0}};var l=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var l=d;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("router-view")],1)},o=[],i=a("1da1"),c=a("5530"),s=(a("96cf"),a("e9c4"),a("ac1f"),a("466d"),a("4d63"),a("c607"),a("2c3e"),a("25f0"),a("99af"),a("b0c0"),a("a4d3"),a("e01a"),a("2f62")),u={name:"App",data:function(){return{}},watch:{},computed:Object(c["a"])({},Object(s["b"])(["activity","user"])),beforeDestroy:function(){},created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,n,r,o,i,s,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return sessionStorage.getItem("store")&&e.$store.replaceState(Object.assign({},e.$store.state,JSON.parse(sessionStorage.getItem("store")))),localStorage.open_at=e.$dayjs().unix(),window.addEventListener("pagehide",(function(){sessionStorage.setItem("store",JSON.stringify(e.$store.state));var t=Math.floor(Date.now()/1e3),a=parseInt(localStorage.open_at),n=t-a;navigator.sendBeacon("http://api.nightowl.name/api/analytics",new Blob([JSON.stringify({user:e.$store.state.user.id,activity:e.$store.state.activity.id,duration:n})]))})),e.$store.dispatch("setApi",e.$api),e.axios.get(e.$api+"system/config").then((function(t){e.$store.dispatch("setConfig",t.data)})),a=window.location.href.match(RegExp("(/inviter/)([0-9]+)")),a&&(localStorage.inviter=a[a.length-1]),e.$store.dispatch("setInviter",localStorage.inviter),localStorage.temporaryId||(localStorage.temporaryId=e.$uuid.v1()),a=window.location.href.match(RegExp("(/activity/)([0-9]+)")),a&&(localStorage.activityId=a[a.length-1]),t.prev=11,t.next=14,e.axios.get(e.$api+"activity/"+localStorage.activityId);case 14:n=t.sent,console.log("fetched the activity",n.data),document.title=n.data.title,e.$dayjs().isBefore(n.data.end_at)?n.data.state="inProgress":n.data.state="ended",e.$store.dispatch("setActivity",n.data),e.$emit("updateShareData"),localStorage.activityId=n.data.id,t.next=26;break;case 23:t.prev=23,t.t0=t["catch"](11),t.t0.response&&(r=t.t0.response.status,404==r&&(console.log("no activity"),document.title="目前还没有活动,请耐心等待"));case 26:return t.prev=26,t.next=29,e.axios.post(e.$api+"v3/login",{temporaryId:localStorage.temporaryId});case 29:o=t.sent,console.log("user login",o.data),e.$store.dispatch("setUser",o.data),e.$emit("updateShareData"),e.$bus.$emit("activityReady"),e.axios.post(e.$api+"activity/participate",{userId:e.user.id,activityId:localStorage.activityId}),t.next=40;break;case 37:t.prev=37,t.t1=t["catch"](26),t.t1.response&&(i=t.t1.response.status,404==i&&e.axios.get(e.$api+"v3/wechat/redirect_uri/"+localStorage.temporaryId,{params:{hostname:window.location.origin,redirect_to:window.location.href}}).then((function(e){window.location.href=e.data})),400==i&&console.error("missing temporary id"));case 40:return t.prev=40,t.next=43,e.axios.get(e.$api+"wechat/jssdk",{params:{url:window.location.href}});case 43:s=t.sent,console.log("jssdk configration",s.data),e.$wx.config(Object(c["a"])({},s.data)),e.$emit("updateShareData"),t.next=52;break;case 49:t.prev=49,t.t2=t["catch"](40),console.error("jssdk config failed");case 52:u={title:"".concat(e.user.name,"向您分享").concat(e.activity.title),desc:e.activity.description,link:window.location.origin+"/activity/".concat(e.activity.id,"/inviter/").concat(e.user.id),imgUrl:e.$backend+e.activity.poster},e.$wx.updateTimelineShareData(u),e.$wx.onMenuShareAppMessage(u);case 55:case"end":return t.stop()}}),t,null,[[11,23],[26,37],[40,49]])})))()}},d=u,p=a("2877"),l=Object(p["a"])(d,r,o,!1,null,null,null),f=l.exports,h=a("bc3a"),g=a.n(h),m=a("130e"),v=a("b970"),y=a("8c4f"),b=(a("157a"),a("d3b7"),a("3ca3"),a("ddb0"),new y["a"]({mode:"history",routes:[{path:"/coupons",component:function(){return a.e("chunk-4a8da51d").then(a.bind(null,"a29e"))}},{path:"/franchise",component:function(){return a.e("chunk-690384b2").then(a.bind(null,"e46b"))}},{path:"*",component:function(){return a.e("chunk-1ee2ee7c").then(a.bind(null,"7abe"))}}]})),w=a("5a0c"),S=a.n(w),$=a("4208"),k=a.n($),I=a("18a0"),x=a.n(I),E=a("9612"),T=a("4a37"),_=a.n(T);n["a"].use(s["a"]);var O={add:function(e,t){e.commit("ADD",t)},setConfig:function(e,t){e.commit("SET_CONFIG",t)},setActivity:function(e,t){e.commit("SET_ACTIVITY",t)},setUser:function(e,t){e.commit("SET_USER",t)},setInviter:function(e,t){"undefined"!=t&&e.commit("SET_INVITER",parseInt(t))},setApi:function(e,t){e.commit("SET_API",t)}},j={ADD:function(e,t){e.sum+=t},SET_CONFIG:function(e,t){e.config=t},SET_ACTIVITY:function(e,t){e.activity=t},SET_USER:function(e,t){e.user=t},SET_INVITER:function(e,t){e.inviter=t},SET_API:function(e,t){e.api=t}},A={sum:1,user:{},config:{},activity:{},inviter:void 0,api:""},P={multiple:function(e){return 10*e.sum}},C=new s["a"].Store({actions:O,mutations:j,state:A,getters:P}),N=a("5638");S.a.extend(k.a),n["a"].use(E["a"]),n["a"].use(v["a"]),n["a"].use(y["a"]),n["a"].config.productionTip=!1,n["a"].use(m["a"],g.a),new n["a"]({beforeCreate:function(){n["a"].prototype.$bus=this,n["a"].prototype.$wx=x.a,n["a"].prototype.$dayjs=S.a,n["a"].prototype.$api="http://api.nightowl.name/api/",n["a"].prototype.$backend="http://api.nightowl.name",n["a"].prototype.$qrcode=_.a,n["a"].prototype.$Pusher=a("782e"),n["a"].prototype.$Echo=new N["a"]({broadcaster:"pusher",key:"ShdHLAikrhOsNRg9",wsHost:"4s.100pq.cn",wsPort:6001,forceTLS:!1})},mounted:function(){},render:function(e){return e(f)},router:b,store:C}).$mount("#app")}});
//# sourceMappingURL=app.ceb8f86d.js.map