(function(t){function e(e){for(var i,s,c=e[0],r=e[1],l=e[2],d=0,p=[];d<c.length;d++)s=c[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],i=!0,c=1;c<a.length;c++){var r=a[c];0!==n[r]&&(i=!1)}i&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var i={},n={app:0},o=[];function s(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=i,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(a,i,function(e){return t[e]}.bind(null,i));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=r;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"041c":function(t,e,a){t.exports=a.p+"img/myCoupons.f23df61e.jpg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("van-form",[i("van-field",{attrs:{label:"门店名称",readonly:"",placeholder:"门店名称"},model:{value:t.activity.shop,callback:function(e){t.$set(t.activity,"shop",e)},expression:"activity.shop"}}),i("van-field",{attrs:{label:"门店电话",readonly:"",placeholder:"门店电话"},model:{value:t.activity.tel,callback:function(e){t.$set(t.activity,"tel",e)},expression:"activity.tel"}}),i("van-field",{attrs:{readonly:"",label:"门店地址",placeholder:"门店地址"},model:{value:t.activity.address,callback:function(e){t.$set(t.activity,"address",e)},expression:"activity.address"}})],1),t._m(0),i("van-form",[i("van-field",{attrs:{required:"",label:"车牌号",placeholder:"车牌号"},model:{value:t.client.licensePlateNumber,callback:function(e){t.$set(t.client,"licensePlateNumber",e)},expression:"client.licensePlateNumber"}}),i("van-field",{attrs:{required:"",label:"手机号",placeholder:"手机号"},model:{value:t.client.phoneNumber,callback:function(e){t.$set(t.client,"phoneNumber",e)},expression:"client.phoneNumber"}}),i("van-field",{attrs:{required:"",label:"姓名",placeholder:"姓名"},model:{value:t.client.name,callback:function(e){t.$set(t.client,"name",e)},expression:"client.name"}}),i("van-field",{attrs:{required:"",label:"车型",placeholder:"车型"},model:{value:t.client.carModel,callback:function(e){t.$set(t.client,"carModel",e)},expression:"client.carModel"}})],1),i("div",{staticClass:"count-down"},[i("img",{attrs:{src:a("6d04")}}),i("div",{staticClass:"text"},["inProgress"==t.activity.state?[i("div",[t._v("报名参加活动")]),i("div",[t._v("活动倒计时")]),i("div",[i("van-count-down",{attrs:{time:t.countDown,format:"DD 天 HH时 mm分 ss秒"},on:{finish:t.activityEnds}})],1)]:[i("div",[t._v("活动已结束")]),i("div",[t._v("下一场活动马上开启")])]],2)]),i("div",{staticClass:"van-hairline--bottom"},[t._v(" 已有"+t._s(t.activity.participants.length)+"人关注 ")]),i("div",{staticClass:"participant-avatar"},t._l(Math.min(33,t.activity.participants.length),(function(e){return i("div",{key:e.id,staticClass:"avatar"},[i("van-image",{attrs:{width:"90%",round:"",fit:"cover",src:t.activity.participants[e-1].participant_info.avatar}})],1)})),0),i("div",{staticClass:"van-hairline--bottom"},[t._v(" 已参与"+t._s(t.activity.participantCount)+"人 ")]),i("div",{staticClass:"coupon-buttons"},[i("div",{on:{click:t.showMyCoupons}},[i("img",{attrs:{src:a("041c")}})]),i("div",{on:{click:t.scan}},[i("img",{attrs:{src:a("af1a")}})])]),i("div",{staticClass:"footer"},[t._v("由****提供技术支持")]),i("div",{staticClass:"share-button",on:{click:t.generatePoster}},[i("van-icon",{attrs:{size:"40",color:"#b8b8b8",name:"share-o"}})],1),i("div",{staticClass:"bottom-buttons"},[i("div",{staticClass:"introduction-button",on:{click:function(e){t.showIntroduction=!0}}},[i("p",[t._v("活动锦囊")])]),i("div",{staticClass:"sign-up-button",on:{click:t.buyCoupon}},[i("p",[t._v("已参与("+t._s(t.activity.signing_up_fee)+"元)")])])]),i("div",[i("van-popup",{style:{minHeight:"100vw",paddingTop:"1rem"},attrs:{position:"top"},model:{value:t.showIntroduction,callback:function(e){t.showIntroduction=e},expression:"showIntroduction"}},[i("van-tabs",{attrs:{type:"card"}},t._l(2,(function(e){return i("van-tab",{key:e,attrs:{title:1==e?"活动说明":"我的奖品"}},[1==e?i("div",[i("div",[i("van-button",{attrs:{round:"",type:"default"}},[t._v("参与记录")]),i("div")],1),i("div",[i("van-button",{attrs:{round:"",type:"default"}},[t._v("活动时间")]),i("div",[t._v(t._s(t.activity.start_at)+"} - "+t._s(t.activity.end_at)+"}")])],1),i("div",[i("van-button",{attrs:{round:"",type:"default"}},[t._v("技术支持")]),i("div",[t._v('页面技术由"***"提供')])],1)]):t._e(),2==e?i("div"):t._e()])})),1)],1)],1),i("div",[i("van-popup",{attrs:{closeable:""},model:{value:t.poster.show,callback:function(e){t.$set(t.poster,"show",e)},expression:"poster.show"}},[i("div",{staticClass:"poster"},[i("van-image",{attrs:{width:"100%",src:t.poster.src}})],1)])],1),i("div",[i("van-popup",{style:{height:"100vh",paddingTop:"3rem",boxSizing:"border-box"},attrs:{closeable:"",position:"bottom"},model:{value:t.myCoupons.show,callback:function(e){t.$set(t.myCoupons,"show",e)},expression:"myCoupons.show"}},[i("van-tabs",{attrs:{type:"card"}},t._l(t.myCoupons.couponList,(function(e,a){return i("van-tab",{key:a,attrs:{title:e.type}},t._l(e.coupons,(function(e){return i("div",{key:e.id,on:{click:function(a){return t.dealWithTheCoupon(e)}}},[i("div",{staticClass:"van-coupon__content"},[i("div",{staticClass:"van-coupon__head"},[i("h2",{staticClass:"van-coupon__amount"},[t._v(" "+t._s(e.value)),i("span",[t._v("元")])]),i("p",{staticClass:"van-coupon__condition"},[t._v("无使用门槛")])]),i("div",{staticClass:"van-coupon__body"},[i("p",{staticClass:"van-coupon__name"},[t._v("优惠券")]),i("p",{staticClass:"van-coupon__valid"},[t._v("54545-5487")]),i("div",{staticClass:"van-checkbox van-coupon__corner",attrs:{role:"checkbox",tabindex:"0","aria-checked":"true",size:"18"}},[i("div",{staticClass:"\n                      van-checkbox__icon\n                      van-checkbox__icon--round\n                      van-checkbox__icon--checked\n                    "})])])])])})),0)})),1)],1)],1)],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h3",[t._v("信息登记处")])])}],s=a("5530"),c=(a("ac1f"),a("466d"),a("d399")),r={name:"App",data:function(){return{inviter:void 0,showIntroduction:!1,user:{},activity:{id:0,subscriberCount:55,subscribers:[],participantCount:20,participants:[],countdown:5875258},poster:{show:!1,src:""},client:{licensePlateNumber:"",phoneNumber:"",name:"",carModel:""},myCoupons:{show:!1,couponList:[{type:"available",coupons:[{id:1,value:20},{id:2,value:20}]},{type:"shareable",coupons:[]},{type:"expired",coupons:[]}]}}},computed:{countDown:function(){return this.activity.end_at?this.$dayjs().isBefore(this.activity.end_at)?Math.abs(this.$dayjs().diff(this.activity.end_at,"millisecond")):0:864e5}},methods:{test1:function(){var t=this;this.axios.post(this.$api+"posters/test").then((function(e){t.poster.src=e.data,t.poster.show=!0}))},buyCoupon:function(){var t=this;this.axios.post(this.$api+"pay",{amount:.01,payer:this.user.id,open_id:this.user.open_id,activityId:this.activity.id}).then((function(e){t.$wx.chooseWXPay(Object(s["a"])(Object(s["a"])({},e.data),{},{timestamp:e.data.timeStamp,success:function(t){Object(c["a"])({duration:0,message:t})}}))}))},activityEnds:function(){this.activity.state="ended"},scan:function(){this.$wx.scanQRCode({needResult:1,scanType:["qrCode","barCode"],success:function(t){Object(c["a"])({message:t.resultStr})}})},dealWithTheCoupon:function(){},showMyCoupons:function(){this.myCoupons.show=!0},generatePoster:function(){var t=this;this.axios.post("http://localhost/api/posters",{userId:123}).then((function(e){t.poster.src=e.data,t.poster.show=!0}))}},mounted:function(){var t=this;localStorage.activityId=window.location.href.match(/(?<=\/activity\/)(\d+)/g)||localStorage.activityId,this.axios.get(this.$api+"activity/"+localStorage.activityId).then((function(e){t.$dayjs().isBefore(e.data.end_at)?e.data.state="inProgress":e.data.state="ended",t.activity=e.data,localStorage.activityId=e.data.id})),localStorage.inviter=window.location.href.match(/(?<=\/inviter\/)(\d+)/g)||localStorage.inviter,this.inviter=localStorage.inviter,localStorage.temporaryId||(localStorage.temporaryId=this.$uuid.v1()),this.axios.post(this.$api+"login",{temporaryId:localStorage.temporaryId}).then((function(e){204==e.status?t.axios.get(t.$api+"wechat/redirect_uri/"+localStorage.temporaryId).then((function(t){window.location.href=t.data})):200==e.status&&(t.user=e.data,localStorage.activityId&&"undefined"!=localStorage.activityId&&t.axios.post(t.$api+"user/activity",{userId:t.user.id,activityId:localStorage.activityId}))})),this.$wx.ready((function(){t.$wx.updateAppMessageShareData({title:"title321",desc:"desc123",link:"http://amap.100pq.cn/activity/1/inviter/12",imgUrl:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AUser_icon_2.svg&psig=AOvVaw2H1JS2UmBkgL1TBmSZ3la6&ust=1643260367689000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKi4-4XUzvUCFQAAAAAdAAAAABAD",success:function(){Object(c["a"])({message:"updateAppMessageShareData"})}}),t.$wx.updateTimelineShareData({title:"title321",link:"http://amap.100pq.cn/activity/1/inviter/12",imgUrl:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AUser_icon_2.svg&psig=AOvVaw2H1JS2UmBkgL1TBmSZ3la6&ust=1643260367689000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKi4-4XUzvUCFQAAAAAdAAAAABAD",success:function(){Object(c["a"])({message:"updateTimelineShareData"})}})})),this.axios.get(this.$api+"wechat/jssdk",{params:{url:window.location.href}}).then((function(e){t.$wx.config(Object(s["a"])({},e.data))}))},components:{}},l=r,u=(a("820b"),a("2877")),d=Object(u["a"])(l,n,o,!1,null,"16d6d5dc",null),p=d.exports,v=a("bc3a"),h=a.n(v),f=a("130e"),m=a("b970"),y=a("8c4f"),b=(a("157a"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h2",[t._v("我是About的内容")])}),_=[],g={name:"About"},w=g,x=Object(u["a"])(w,b,_,!1,null,null,null),C=x.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h2",[t._v("我是Home的内容")])},A=[],$={name:"Home"},S=$,j=Object(u["a"])(S,k,A,!1,null,null,null),O=j.exports,I=new y["a"]({mode:"history",routes:[{path:"/about",component:C},{path:"/home",component:O}]}),P=a("5a0c"),F=a.n(P),M=a("4208"),T=a.n(M),q=a("18a0"),D=a.n(q),U=a("9612");F.a.extend(T.a),i["a"].use(U["a"]),i["a"].use(m["a"]),i["a"].use(y["a"]),i["a"].config.productionTip=!1,i["a"].use(f["a"],h.a),new i["a"]({beforeCreate:function(){i["a"].prototype.$bus=this,i["a"].prototype.$wx=D.a,i["a"].prototype.$dayjs=F.a,i["a"].prototype.$api="http://amap.100pq.cn/laravel/api/"},mounted:function(){},render:function(t){return t(p)},router:I}).$mount("#app")},6755:function(t,e,a){},"6d04":function(t,e,a){t.exports=a.p+"img/countdown.a1427068.png"},"820b":function(t,e,a){"use strict";a("6755")},af1a:function(t,e,a){t.exports=a.p+"img/useCoupons.6e44d759.jpg"}});
//# sourceMappingURL=app.02817a4d.js.map