(function(t){function a(a){for(var i,s,r=a[0],c=a[1],l=a[2],d=0,p=[];d<r.length;d++)s=r[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(a);while(p.length)p.shift()();return n.push.apply(n,l||[]),e()}function e(){for(var t,a=0;a<n.length;a++){for(var e=n[a],i=!0,r=1;r<e.length;r++){var c=e[r];0!==o[c]&&(i=!1)}i&&(n.splice(a--,1),t=s(s.s=e[0]))}return t}var i={},o={app:0},n=[];function s(a){if(i[a])return i[a].exports;var e=i[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=i,s.d=function(t,a,e){s.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,a){if(1&a&&(t=s(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var i in t)s.d(e,i,function(a){return t[a]}.bind(null,i));return e},s.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(a,"a",a),a},s.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=a,r=r.slice();for(var l=0;l<r.length;l++)a(r[l]);var u=c;n.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"041c":function(t,a,e){t.exports=e.p+"img/myCoupons.f23df61e.jpg"},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var i=e("2b0e"),o=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("van-form",[i("van-field",{attrs:{label:"门店名称",readonly:"",placeholder:"门店名称"},model:{value:t.activity.shop,callback:function(a){t.$set(t.activity,"shop",a)},expression:"activity.shop"}}),i("van-field",{attrs:{label:"门店电话",readonly:"",placeholder:"门店电话"},model:{value:t.activity.tel,callback:function(a){t.$set(t.activity,"tel",a)},expression:"activity.tel"}}),i("van-field",{attrs:{readonly:"",label:"门店地址",placeholder:"门店地址"},model:{value:t.activity.address,callback:function(a){t.$set(t.activity,"address",a)},expression:"activity.address"}})],1),t._m(0),i("van-form",[i("van-field",{attrs:{required:"",label:"车牌号",placeholder:"车牌号"},model:{value:t.client.licensePlateNumber,callback:function(a){t.$set(t.client,"licensePlateNumber",a)},expression:"client.licensePlateNumber"}}),i("van-field",{attrs:{required:"",label:"手机号",placeholder:"手机号"},model:{value:t.client.phoneNumber,callback:function(a){t.$set(t.client,"phoneNumber",a)},expression:"client.phoneNumber"}}),i("van-field",{attrs:{required:"",label:"姓名",placeholder:"姓名"},model:{value:t.client.name,callback:function(a){t.$set(t.client,"name",a)},expression:"client.name"}}),i("van-field",{attrs:{required:"",label:"车型",placeholder:"车型"},model:{value:t.client.carModel,callback:function(a){t.$set(t.client,"carModel",a)},expression:"client.carModel"}})],1),i("div",{staticClass:"count-down"},[i("img",{attrs:{src:e("6d04")}}),i("div",{staticClass:"text"},["inProgress"==t.activity.state?[i("div",[t._v("报名参加活动")]),i("div",[t._v("活动倒计时")]),i("div",[i("van-count-down",{attrs:{time:t.countDown,format:"DD 天 HH时 mm分 ss秒"},on:{finish:t.activityEnds}})],1)]:[i("div",[t._v("活动已结束")]),i("div",[t._v("下一场活动马上开启")])]],2)]),t.activity.id?[i("div",{staticClass:"van-hairline--bottom"},[t._v(" 已有"+t._s(t.activity.participants.length)+"人关注 ")]),i("div",{staticClass:"participant-avatar"},t._l(Math.min(33,t.activity.participants.length),(function(a){return i("div",{key:a.id,staticClass:"avatar"},[i("van-image",{attrs:{width:"90%",round:"",fit:"cover",src:t.activity.participants[a-1].participant_info.avatar}})],1)})),0),i("div",{staticClass:"van-hairline--bottom"},[t._v(" 已参与"+t._s(t.activity.participantCount)+"人 ")])]:t._e(),i("div",{staticClass:"coupon-buttons"},[i("div",{on:{click:function(a){t.showCoupons=!0}}},[i("img",{attrs:{src:e("041c")}})]),i("div",{on:{click:t.scan}},[i("img",{attrs:{src:e("af1a")}})])]),i("div",{staticClass:"footer"},[t._v("由****提供技术支持")]),i("div",{staticClass:"share-button",on:{click:t.generatePoster}},[i("van-icon",{attrs:{size:"40",color:"#b8b8b8",name:"share-o"}})],1),i("div",{staticClass:"bottom-buttons"},[i("div",{staticClass:"introduction-button",on:{click:function(a){t.showIntroduction=!0}}},[i("p",[t._v("活动锦囊")])]),"end"==t.activity.state?[t._m(1)]:[t.haveACoupon?t._e():[i("div",{staticClass:"sign-up-button",on:{click:t.buyCoupon}},[i("p",[t._v("马上参与("+t._s(t.activity.signing_up_fee)+"元)")])])],t.haveACoupon?[i("div",{staticClass:"sign-up-button"},[i("p",[t._v("已参与("+t._s(t.activity.signing_up_fee)+"元)")])])]:t._e()]],2),i("div",[i("van-popup",{style:{minHeight:"100vw",paddingTop:"3rem",boxSizing:"border-box"},attrs:{closeable:"",position:"top"},model:{value:t.showIntroduction,callback:function(a){t.showIntroduction=a},expression:"showIntroduction"}},[i("van-tabs",{attrs:{type:"card"}},[i("van-tab",{attrs:{title:"活动说明"}},[i("div",{staticStyle:{"margin-top":"1rem"}},[i("van-button",{attrs:{round:"",type:"default"}},[t._v("参与记录")]),t.haveACoupon?i("div",[t._v(" "+t._s(t.availableCoupons[0].created_at)+"参加活动 ")]):i("div",[t._v("未参加")])],1),i("div",[i("van-button",{attrs:{round:"",type:"default"}},[t._v("活动时间")]),i("div",[t._v(t._s(t.activity.start_at)+" 至 "+t._s(t.activity.end_at))])],1),i("div",[i("van-button",{attrs:{round:"",type:"default"}},[t._v("技术支持")]),i("div",[t._v('页面技术由"***"提供')])],1)]),i("van-tab",{attrs:{title:"我的奖品"}},t._l(t.availableCoupons,(function(a){return i("div",{key:a.id},[i("Coupon",{attrs:{value:a.value,allow_to_use_at:t.activity.allow_to_use_at,expire_at:t.activity.expire_at,description:t.activity.description,available:!0}})],1)})),0)],1)],1)],1),i("div",[i("van-popup",{attrs:{closeable:""},model:{value:t.poster.show,callback:function(a){t.$set(t.poster,"show",a)},expression:"poster.show"}},[i("div",{staticClass:"poster"},[i("van-image",{attrs:{width:"100%",src:t.poster.src}})],1)])],1),t.user.id&&t.activity.id?i("div",[i("van-popup",{style:{height:"100vh",paddingTop:"3rem",boxSizing:"border-box"},attrs:{closeable:"",position:"bottom"},model:{value:t.showCoupons,callback:function(a){t.showCoupons=a},expression:"showCoupons"}},[i("van-tabs",{attrs:{type:"card"}},[i("van-tab",{attrs:{title:"可用的",name:"available"}},t._l(t.availableCoupons,(function(a){return i("div",{key:a.id,on:{click:function(e){return t.dealWithTheCoupon(a)}}},[i("Coupon",{attrs:{value:a.value,allow_to_use_at:t.activity.allow_to_use_at,expire_at:t.activity.expire_at,description:t.activity.description,available:"available"==a.state}})],1)})),0),i("van-tab",{attrs:{title:"分享的",name:"shared"}},t._l(t.sharedCoupons,(function(a){return i("div",{key:a.id,on:{click:function(e){return t.dealWithTheCoupon(a)}}},[i("Coupon",{attrs:{value:a.value,allow_to_use_at:t.activity.allow_to_use_at,expire_at:t.activity.expire_at,available:"available"==a.state}})],1)})),0),i("van-tab",{attrs:{title:"失效的",name:"expired"}},t._l(t.expiredCoupons,(function(a){return i("div",{key:a.id},[i("Coupon",{attrs:{value:a.value,allow_to_use_at:t.activity.allow_to_use_at,expire_at:t.activity.expire_at,available:!1}})],1)})),0)],1)],1)],1):t._e(),i("div",[i("van-popup",{model:{value:t.showQrcode,callback:function(a){t.showQrcode=a},expression:"showQrcode"}},[i("van-image",{attrs:{src:t.qrcode}})],1)],1)],2)},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("h3",[t._v("信息登记处")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"sign-up-button"},[e("p",[t._v("活动已结束")])])}],s=e("5530"),r=(e("4de4"),e("d3b7"),e("25f0"),e("ac1f"),e("466d"),e("2241")),c=e("d399"),l=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"van-coupon",class:{"van-coupon--disabled":!t.available},staticStyle:{"margin-top":"1rem"}},[e("div",{staticClass:"van-coupon__content"},[e("div",{staticClass:"van-coupon__head"},[e("h2",{staticClass:"van-coupon__amount"},[t._v(t._s(t.value)),e("span",[t._v("元")])]),e("p",{staticClass:"van-coupon__condition"},[t._v("无使用门槛")])]),e("div",{staticClass:"van-coupon__body"},[e("p",{staticClass:"van-coupon__name"},[t._v("优惠券")]),e("p",{staticClass:"van-coupon__valid"},[t._v(" "+t._s(t.$dayjs(t.allow_to_use_at).format("YYYY-MM-DD"))+" 至 "+t._s(t.$dayjs(t.expire_at).format("YYYY-MM-DD"))+" ")])])]),e("p",{staticClass:"van-coupon__description"},[t._v(t._s(t.description))])])},u=[],d={name:"Coupon",props:["value","allow_to_use_at","expire_at","available","description"]},p=d,v=e("2877"),h=Object(v["a"])(p,l,u,!1,null,null,null),f=h.exports,_={name:"App",data:function(){return{qrcode:"",showQrcode:!1,inviter:void 0,showIntroduction:!1,user:{},activity:{},poster:{show:!1,src:""},client:{licensePlateNumber:"",phoneNumber:"",name:"",carModel:""},showCoupons:!1}},components:{Coupon:f},watch:{activity:function(){}},computed:{haveACoupon:function(){var t=this;if(this.user.id&&this.activity.id){var a=this.user.coupons.filter((function(a){return a.activity_id==t.activity.id&&"normal"==a.type}));if(a.length>0)return!0}return!1},countDown:function(){return this.activity.end_at?this.$dayjs().isBefore(this.activity.end_at)?Math.abs(this.$dayjs().diff(this.activity.end_at,"millisecond")):0:864e5},availableCoupons:function(){var t=this;return this.user.id&&this.activity.id?this.user.coupons.filter((function(a){return a.activity_id==t.activity.id&&t.$dayjs().isBefore(t.activity.expire_at)&&"normal"==a.type})):[]},sharedCoupons:function(){var t=this;return this.user.id&&this.activity.id?this.user.coupons.filter((function(a){return a.activity_id==t.activity.id&&t.$dayjs().isBefore(t.activity.expire_at)&&"shared"==a.type})):[]},expiredCoupons:function(){var t=this;return this.user.id&&this.activity.id?this.user.coupons.filter((function(a){return a.activity_id==t.activity.id&&!t.$dayjs().isBefore(t.activity.expire_at)})):[]}},methods:{test1:function(){var t=this;this.axios.post(this.$api+"posters/test").then((function(a){t.poster.src=a.data,t.poster.show=!0}))},buyCoupon:function(){var t=this;this.user.id&&this.activity.id&&this.axios.post(this.$api+"pay",{amount:.01,payer:this.user.id,open_id:this.user.open_id,activityId:this.activity.id,inviter:this.inviter}).then((function(a){console.log(a.data),t.$wx.chooseWXPay(Object(s["a"])(Object(s["a"])({},a.data),{},{timestamp:a.data.timeStamp,success:function(){setTimeout((function(){t.axios.post(t.$api+"login",{temporaryId:localStorage.temporaryId}).then((function(a){200==a.status&&(t.user=a.data)}))}),3e3)}}))}))},activityEnds:function(){this.activity.state="ended"},scan:function(){var t=this;"employee"==this.user.permission&&this.$wx.scanQRCode({needResult:1,success:function(a){t.axios.put(t.$api+"coupon/".concat(a.resultStr,"/use"),{temporaryId:localStorage.temporaryId}).then((function(t){203!=t.status?Object(c["a"])({message:"核销成功"}):r["a"].alert({title:"已核销",message:"请勿重复核销"})})).catch((function(){Object(c["a"])({message:"无核销权限"})}))}})},dealWithTheCoupon:function(t){if("available"==t.state)return this.qrcode=this.$qrcode.getQrBase64(t.id.toString()),void(this.showQrcode=!0);Object(c["a"])({message:"此券已经核销"})},generatePoster:function(){var t=this;this.axios.post("http://localhost/api/posters",{userId:123}).then((function(a){t.poster.src=a.data,t.poster.show=!0}))}},mounted:function(){var t=this;localStorage.activityId=window.location.href.match(/(?<=\/activity\/)(\d+)/g)||localStorage.activityId,this.axios.get(this.$api+"activity/"+localStorage.activityId).then((function(a){t.$dayjs().isBefore(a.data.end_at)?a.data.state="inProgress":a.data.state="ended",t.activity=a.data,localStorage.activityId=a.data.id})),localStorage.inviter=window.location.href.match(/(?<=\/inviter\/)(\d+)/g)||localStorage.inviter,"undefined"!=localStorage.inviter&&(this.inviter=localStorage.inviter),localStorage.temporaryId||(localStorage.temporaryId=this.$uuid.v1()),this.axios.post(this.$api+"login",{temporaryId:localStorage.temporaryId}).then((function(a){204==a.status?t.axios.get(t.$api+"wechat/redirect_uri/"+localStorage.temporaryId).then((function(t){window.location.href=t.data})):200==a.status&&(t.user=a.data,localStorage.activityId&&"undefined"!=localStorage.activityId&&t.axios.post(t.$api+"user/activity",{userId:t.user.id,activityId:localStorage.activityId}))})),this.$wx.ready((function(){t.$wx.updateAppMessageShareData({title:"title321",desc:"desc123",link:"http://amap.100pq.cn/activity/1/inviter/12",imgUrl:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AUser_icon_2.svg&psig=AOvVaw2H1JS2UmBkgL1TBmSZ3la6&ust=1643260367689000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKi4-4XUzvUCFQAAAAAdAAAAABAD",success:function(){}}),t.$wx.updateTimelineShareData({title:"title321",link:"http://amap.100pq.cn/activity/1/inviter/12",imgUrl:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AUser_icon_2.svg&psig=AOvVaw2H1JS2UmBkgL1TBmSZ3la6&ust=1643260367689000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKi4-4XUzvUCFQAAAAAdAAAAABAD",success:function(){}})})),this.axios.get(this.$api+"wechat/jssdk",{params:{url:window.location.href}}).then((function(a){t.$wx.config(Object(s["a"])({},a.data))}))}},y=_,m=(e("a27d"),Object(v["a"])(y,o,n,!1,null,"22137986",null)),b=m.exports,g=e("bc3a"),w=e.n(g),x=e("130e"),C=e("b970"),$=e("8c4f"),A=(e("157a"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("h2",[t._v("我是About的内容")])}),k=[],S={name:"About"},j=S,I=Object(v["a"])(j,A,k,!1,null,null,null),O=I.exports,P=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("h2",[t._v("我是Home的内容")])},M=[],q={name:"Home"},F=q,T=Object(v["a"])(F,P,M,!1,null,null,null),B=T.exports,D=new $["a"]({mode:"history",routes:[{path:"/about",component:O},{path:"/home",component:B}]}),Q=e("5a0c"),U=e.n(Q),E=e("4208"),N=e.n(E),Y=e("18a0"),H=e.n(Y),z=e("9612"),J=e("4a37"),R=e.n(J);U.a.extend(N.a),i["a"].use(z["a"]),i["a"].use(C["a"]),i["a"].use($["a"]),i["a"].config.productionTip=!1,i["a"].use(x["a"],w.a),new i["a"]({beforeCreate:function(){i["a"].prototype.$bus=this,i["a"].prototype.$wx=H.a,i["a"].prototype.$dayjs=U.a,i["a"].prototype.$api="http://amap.100pq.cn/laravel/api/",i["a"].prototype.$qrcode=R.a},mounted:function(){},render:function(t){return t(b)},router:D}).$mount("#app")},"6d04":function(t,a,e){t.exports=e.p+"img/countdown.a1427068.png"},a27d:function(t,a,e){"use strict";e("a3d5")},a3d5:function(t,a,e){},af1a:function(t,a,e){t.exports=e.p+"img/useCoupons.6e44d759.jpg"}});
//# sourceMappingURL=app.63977a3e.js.map