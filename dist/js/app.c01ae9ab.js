(function(t){function a(a){for(var e,s,r=a[0],c=a[1],l=a[2],p=0,d=[];p<r.length;p++)s=r[p],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&(t[e]=c[e]);u&&u(a);while(d.length)d.shift()();return n.push.apply(n,l||[]),i()}function i(){for(var t,a=0;a<n.length;a++){for(var i=n[a],e=!0,r=1;r<i.length;r++){var c=i[r];0!==o[c]&&(e=!1)}e&&(n.splice(a--,1),t=s(s.s=i[0]))}return t}var e={},o={app:0},n=[];function s(a){if(e[a])return e[a].exports;var i=e[a]={i:a,l:!1,exports:{}};return t[a].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=e,s.d=function(t,a,i){s.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,a){if(1&a&&(t=s(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var e in t)s.d(i,e,function(a){return t[a]}.bind(null,e));return i},s.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(a,"a",a),a},s.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=a,r=r.slice();for(var l=0;l<r.length;l++)a(r[l]);var u=c;n.push([0,"chunk-vendors"]),i()})({0:function(t,a,i){t.exports=i("56d7")},"041c":function(t,a,i){t.exports=i.p+"img/myCoupons.f23df61e.jpg"},3957:function(t,a,i){"use strict";i("8a90")},"56d7":function(t,a,i){"use strict";i.r(a);i("e260"),i("e6cf"),i("cca6"),i("a79d");var e=i("2b0e"),o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t.activity.id?[e("video",{attrs:{preload:"auto",width:"100%",height:"300",controls:"controls","x5-video-player-fullscreen":"false","x5-playsinline":"",playsinline:"","webkit-playsinline":"true",poster:t.$backend+t.activity.video_thumbnail}},[e("source",{attrs:{src:t.$backend+t.activity.video,type:"video/mp4"}})]),e("van-image",{attrs:{width:"100vw",fit:"cover",src:t.$backend+t.activity.poster}})]:t._e(),e("van-form",[e("van-field",{attrs:{label:"门店名称",readonly:"",placeholder:"门店名称"},model:{value:t.activity.shop,callback:function(a){t.$set(t.activity,"shop",a)},expression:"activity.shop"}}),e("van-field",{attrs:{clickable:"",label:"门店电话",readonly:"",placeholder:"门店电话","right-icon":"phone-o"},on:{click:function(a){return t.call(t.activity.tel)}},model:{value:t.activity.tel,callback:function(a){t.$set(t.activity,"tel",a)},expression:"activity.tel"}}),e("van-field",{attrs:{clickable:"",readonly:"",label:"门店地址",placeholder:"门店地址","right-icon":"location-o"},on:{click:function(a){return t.locate(t.activity.location)}},model:{value:t.activity.address,callback:function(a){t.$set(t.activity,"address",a)},expression:"activity.address"}})],1),e("h3",{ref:"sign_up_form"},[t._v("信息登记处")]),e("van-form",[e("van-field",{attrs:{required:"",label:"车牌号",placeholder:"车牌号"},model:{value:t.sign_up_form.licensePlateNumber,callback:function(a){t.$set(t.sign_up_form,"licensePlateNumber","string"===typeof a?a.trim():a)},expression:"sign_up_form.licensePlateNumber"}}),e("van-field",{attrs:{required:"",label:"手机号",placeholder:"手机号"},model:{value:t.sign_up_form.phoneNumber,callback:function(a){t.$set(t.sign_up_form,"phoneNumber","string"===typeof a?a.trim():a)},expression:"sign_up_form.phoneNumber"}}),e("van-field",{attrs:{required:"",label:"姓名",placeholder:"姓名"},model:{value:t.sign_up_form.name,callback:function(a){t.$set(t.sign_up_form,"name","string"===typeof a?a.trim():a)},expression:"sign_up_form.name"}}),e("van-field",{attrs:{required:"",label:"车型",placeholder:"车型"},model:{value:t.sign_up_form.carModel,callback:function(a){t.$set(t.sign_up_form,"carModel","string"===typeof a?a.trim():a)},expression:"sign_up_form.carModel"}})],1),e("div",{staticClass:"count-down"},[e("img",{attrs:{src:i("6d04")}}),e("div",{staticClass:"text"},["inProgress"==t.activity.state?[e("div",[t._v("报名参加活动")]),e("div",[t._v("活动倒计时")]),e("div",[e("van-count-down",{attrs:{time:t.countDown,format:"DD 天 HH时 mm分 ss秒"},on:{finish:t.activityEnds}})],1)]:[e("div",[t._v("活动已结束")]),e("div",[t._v("下一场活动马上开启")])]],2)]),t.activity.id?[e("div",{staticClass:"van-hairline--bottom"},[t._v("已有"+t._s(t.activity.participants.length)+"人关注")]),e("div",{staticClass:"participant-avatar"},t._l(Math.min(33,t.activity.participants.length),(function(a){return e("div",{key:a.id,staticClass:"avatar"},[e("van-image",{attrs:{width:"90%",round:"",fit:"cover",src:t.activity.participants[a-1].participant_info.avatar}})],1)})),0),e("div",{staticClass:"van-hairline--bottom"},[t._v("已参与"+t._s(t.normalCoupons.total)+"人")]),e("div",[e("van-notice-bar",{staticStyle:{padding:"0",height:"60px"},attrs:{scrollable:!1}},[e("van-swipe",{staticClass:"notice-swipe",attrs:{vertical:"",autoplay:3e3,"show-indicators":!1}},t._l(Math.ceil(t.normalCoupons.coupons.length/2),(function(a){return e("van-swipe-item",{key:a},[e("div",{staticClass:"swipe-item"},t._l(2,(function(i){return e("div",{key:i,staticClass:"row"},[e("div",{staticClass:"avatar"},[e("van-image",{attrs:{height:"25px",width:"25px",fit:"cover",round:"",src:t.normalCoupons.coupons[(2*a-i%2-1)%t.normalCoupons.coupons.length].participant.participant_info.avatar}})],1),e("div",{staticStyle:{"margin-right":"0.5rem"}},[t._v(" "+t._s(t.normalCoupons.coupons[(2*a-i%2-1)%t.normalCoupons.coupons.length].participant.participant_info.name)+" ")]),e("div",{staticStyle:{"margin-right":"0.5rem"}},[t._v(" "+t._s(t.normalCoupons.coupons[(2*a-i%2-1)%t.normalCoupons.coupons.length].participant.license_plate_number.replace(/^(..)(.*)(.)$/,"$1**$3"))+" ")]),e("div",{staticStyle:{"margin-right":"0.5rem"}},[t._v(" "+t._s(t.normalCoupons.coupons[(2*a-i%2-1)%t.normalCoupons.coupons.length].created_at)+" ")]),e("div",[t._v(" 已支付"+t._s(t.normalCoupons.coupons[(2*a-i%2)%t.normalCoupons.coupons.length].value)+"元 ")])])})),0)])})),1)],1)],1)]:t._e(),e("div",{staticClass:"coupon-buttons"},[e("div",{on:{click:function(a){t.showCoupons=!0}}},[e("img",{attrs:{src:i("041c")}})]),e("div",{on:{click:t.scan}},[e("img",{attrs:{src:i("af1a")}})])]),t.activity.id?t._l(t.activity.propaganda_images,(function(a,i){return e("van-image",{key:i,attrs:{src:t.$backend+a}})})):t._e(),e("div",{staticClass:"footer"},[t._v("由****提供技术支持")]),e("div",{staticClass:"share-button",on:{click:t.generatePoster}},[e("van-icon",{attrs:{size:"40",color:"#b8b8b8",name:"share-o"}})],1),e("div",{staticClass:"bottom-buttons"},[e("div",{staticClass:"introduction-button",on:{click:function(a){t.showIntroduction=!0}}},[e("p",[t._v("活动锦囊")])]),"end"==t.activity.state?[t._m(0)]:[t.haveACoupon?t._e():[e("div",{staticClass:"sign-up-button",on:{click:t.buyCoupon}},[e("p",[t._v("马上参与("+t._s(t.activity.signing_up_fee)+"元)")])])],t.haveACoupon?[e("div",{staticClass:"sign-up-button"},[e("p",[t._v("已参与("+t._s(t.activity.signing_up_fee)+"元)")])])]:t._e()]],2),e("div",[e("van-popup",{style:{minHeight:"100vw",paddingTop:"3rem",boxSizing:"border-box"},attrs:{closeable:"",position:"top"},model:{value:t.showIntroduction,callback:function(a){t.showIntroduction=a},expression:"showIntroduction"}},[e("van-tabs",{attrs:{type:"card"}},[e("van-tab",{attrs:{title:"活动说明"}},[e("div",{staticStyle:{"margin-top":"1rem"}},[e("van-button",{attrs:{round:"",type:"default"}},[t._v("参与记录")]),t.haveACoupon&&t.availableCoupons.length>0?e("div",[t._v(t._s(t.availableCoupons[0].created_at)+"参加活动")]):e("div",[t._v("未参加")])],1),e("div",[e("van-button",{attrs:{round:"",type:"default"}},[t._v("活动时间")]),e("div",[t._v(t._s(t.activity.start_at)+" 至 "+t._s(t.activity.end_at))])],1),e("div",[e("van-button",{attrs:{round:"",type:"default"}},[t._v("技术支持")]),e("div",[t._v('页面技术由"***"提供')])],1)]),e("van-tab",{attrs:{title:"我的奖品"}},t._l(t.availableCoupons,(function(a){return e("div",{key:a.id},[e("Coupon",{attrs:{value:a.value,allow_to_use_at:t.activity.allow_to_use_at,expire_at:t.activity.expire_at,description:t.activity.description,available:!0}})],1)})),0)],1)],1)],1),e("div",[e("van-popup",{attrs:{closeable:""},model:{value:t.poster.show,callback:function(a){t.$set(t.poster,"show",a)},expression:"poster.show"}},[e("div",{staticClass:"poster"},[e("van-image",{attrs:{width:"100%",src:t.poster.src}})],1)])],1),t.user.id&&t.activity.id?e("div",[e("van-popup",{style:{height:"100vh",paddingTop:"3rem",boxSizing:"border-box"},attrs:{closeable:"",position:"bottom"},model:{value:t.showCoupons,callback:function(a){t.showCoupons=a},expression:"showCoupons"}},[e("van-tabs",{attrs:{type:"card"}},[e("van-tab",{attrs:{title:"可用的",name:"available"}},t._l(t.availableCoupons,(function(a){return e("div",{key:a.id,on:{click:function(i){return t.dealWithTheCoupon(a)}}},[e("Coupon",{attrs:{value:a.value,allow_to_use_at:t.activity.allow_to_use_at,expire_at:t.activity.expire_at,description:t.activity.description,available:"available"==a.state}})],1)})),0),e("van-tab",{attrs:{title:"分享的",name:"shared"}},t._l(t.sharedCoupons,(function(a){return e("div",{key:a.id,on:{click:function(i){return t.dealWithTheCoupon(a)}}},[e("Coupon",{attrs:{value:a.value,allow_to_use_at:t.activity.allow_to_use_at,expire_at:t.activity.expire_at,available:"available"==a.state}})],1)})),0),e("van-tab",{attrs:{title:"失效的",name:"expired"}},t._l(t.expiredCoupons,(function(a){return e("div",{key:a.id},[e("Coupon",{attrs:{value:a.value,allow_to_use_at:t.activity.allow_to_use_at,expire_at:t.activity.expire_at,available:!1}})],1)})),0)],1)],1)],1):t._e(),e("div",[e("van-popup",{model:{value:t.showQrcode,callback:function(a){t.showQrcode=a},expression:"showQrcode"}},[e("van-image",{attrs:{src:t.qrcode}})],1)],1)],2)},n=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"sign-up-button"},[i("p",[t._v("活动已结束")])])}],s=i("5530"),r=(i("4de4"),i("d3b7"),i("fb6a"),i("b0c0"),i("25f0"),i("99af"),i("ac1f"),i("466d"),i("a4d3"),i("e01a"),i("d399")),c=i("2241"),l=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"van-coupon",class:{"van-coupon--disabled":!t.available},staticStyle:{"margin-top":"1rem"}},[i("div",{staticClass:"van-coupon__content"},[i("div",{staticClass:"van-coupon__head"},[i("h2",{staticClass:"van-coupon__amount"},[t._v(t._s(t.value)),i("span",[t._v("元")])]),i("p",{staticClass:"van-coupon__condition"},[t._v("无使用门槛")])]),i("div",{staticClass:"van-coupon__body"},[i("p",{staticClass:"van-coupon__name"},[t._v("优惠券")]),i("p",{staticClass:"van-coupon__valid"},[t._v(" "+t._s(t.$dayjs(t.allow_to_use_at).format("YYYY-MM-DD"))+" 至 "+t._s(t.$dayjs(t.expire_at).format("YYYY-MM-DD"))+" ")])])]),i("p",{staticClass:"van-coupon__description"},[t._v(t._s(t.description))])])},u=[],p={name:"Coupon",props:["value","allow_to_use_at","expire_at","available","description"]},d=p,v=i("2877"),h=Object(v["a"])(d,l,u,!1,null,null,null),f=h.exports,_={name:"App",data:function(){return{qrcode:"",showQrcode:!1,inviter:void 0,showIntroduction:!1,user:{},activity:{},poster:{show:!1,src:""},sign_up_form:{licensePlateNumber:"",phoneNumber:"",name:"",carModel:""},showCoupons:!1}},components:{Coupon:f},watch:{activity:function(){}},computed:{haveACoupon:function(){var t=this;if(this.user.id&&this.activity.id){var a=this.user.coupons.filter((function(a){return a.activity_id==t.activity.id&&"normal"==a.type}));if(a.length>0)return!0}return!1},countDown:function(){return this.activity.end_at?this.$dayjs().isBefore(this.activity.end_at)?Math.abs(this.$dayjs().diff(this.activity.end_at,"millisecond")):0:864e5},availableCoupons:function(){var t=this;return this.user.id&&this.activity.id?this.user.coupons.filter((function(a){return a.activity_id==t.activity.id&&t.$dayjs().isBefore(t.activity.expire_at)&&"normal"==a.type})):[]},sharedCoupons:function(){var t=this;return this.user.id&&this.activity.id?this.user.coupons.filter((function(a){return a.activity_id==t.activity.id&&t.$dayjs().isBefore(t.activity.expire_at)&&"shared"==a.type})):[]},expiredCoupons:function(){var t=this;return this.user.id&&this.activity.id?this.user.coupons.filter((function(a){return a.activity_id==t.activity.id&&!t.$dayjs().isBefore(t.activity.expire_at)})):[]},normalCoupons:function(){if(this.activity.id){var t=this.activity.coupons.filter((function(t){return"normal"==t.type}));return{total:t.length,coupons:t.slice(0,50)}}return{total:0,coupons:[]}}},methods:{locate:function(t){this.$wx.openLocation(Object(s["a"])(Object(s["a"])({},t),{},{scale:17}))},call:function(t){window.location.href="tel://"+t},buyCoupon:function(){var t=this;if(this.user.id&&this.activity.id)return this.sign_up_form.licensePlateNumber&&this.sign_up_form.phoneNumber&&this.sign_up_form.name&&this.sign_up_form.carModel?void this.axios.post(this.$api+"pay",Object(s["a"])({amount:.01,payer:this.user.id,open_id:this.user.open_id,activityId:this.activity.id,inviter:this.inviter},this.sign_up_form)).then((function(a){console.log(a.data),t.$wx.chooseWXPay(Object(s["a"])(Object(s["a"])({},a.data),{},{timestamp:a.data.timeStamp,success:function(){setTimeout((function(){t.axios.post(t.$api+"login",{temporaryId:localStorage.temporaryId}).then((function(a){200==a.status&&(t.user=a.data)}))}),3e3)}}))})):(Object(r["a"])({message:"请登记完整信息"}),void this.$refs.sign_up_form.scrollIntoView({behavior:"smooth"}))},activityEnds:function(){this.activity.state="ended"},scan:function(){var t=this;"employee"==this.user.permission?this.$wx.scanQRCode({needResult:1,success:function(a){t.axios.put(t.$api+"coupon/".concat(a.resultStr,"/use"),{temporaryId:localStorage.temporaryId}).then((function(t){203!=t.status?Object(r["a"])({message:"核销成功"}):c["a"].alert({title:"已核销",message:"请勿重复核销"})})).catch((function(){Object(r["a"])({message:"无核销权限"})}))}}):Object(r["a"])({message:"请找工作人员进行核销"})},dealWithTheCoupon:function(t){if("available"==t.state)return this.qrcode=this.$qrcode.getQrBase64(t.id.toString()),void(this.showQrcode=!0);Object(r["a"])({message:"此券已经核销"})},generatePoster:function(){var t=this;this.poster.src?this.poster.show=!0:this.user.id&&this.activity.id&&(r["a"].loading({message:"正在为您生成海报",forbidClick:!0,duration:0}),this.axios.get(this.$api+"activity/".concat(this.activity.id,"/participant/").concat(this.user.id,"/poster/")).then((function(a){r["a"].clear(),t.poster.src=a.data,t.poster.show=!0})))}},mounted:function(){var t=this;localStorage.activityId=window.location.href.match(/(?<=\/activity\/)(\d+)/g)||localStorage.activityId,localStorage.inviter=window.location.href.match(/(?<=\/inviter\/)(\d+)/g)||localStorage.inviter,"undefined"!=localStorage.inviter&&(this.inviter=localStorage.inviter),localStorage.temporaryId||(localStorage.temporaryId=this.$uuid.v1()),this.axios.get(this.$api+"activity/"+localStorage.activityId).then((function(a){document.title=a.data.title,t.$dayjs().isBefore(a.data.end_at)?a.data.state="inProgress":a.data.state="ended",t.activity=a.data,t.$emit("updateShareData"),localStorage.activityId=a.data.id})),this.axios.post(this.$api+"login",{temporaryId:localStorage.temporaryId}).then((function(a){204==a.status?t.axios.get(t.$api+"wechat/redirect_uri/"+localStorage.temporaryId).then((function(t){window.location.href=t.data})):200==a.status&&(t.user=a.data,t.$emit("updateShareData"),localStorage.activityId&&"undefined"!=localStorage.activityId&&t.axios.post(t.$api+"activity/participate",{userId:t.user.id,activityId:localStorage.activityId}))})),this.$on("updateShareData",(function(){if(t.user.id&&t.activity.id){var a={title:t.activity.title,desc:t.activity.description,link:window.location.origin+"/activity/".concat(t.activity.id,"/inviter/").concat(t.user.id),imgUrl:t.$backend+t.activity.poster};t.$wx.updateTimelineShareData(a),a.title="".concat(t.user.name,"向您推荐").concat(t.activity.title),t.$wx.onMenuShareAppMessage(a)}})),this.axios.get(this.$api+"wechat/jssdk",{params:{url:window.location.href}}).then((function(a){t.$wx.config(Object(s["a"])({},a.data)),t.$emit("updateShareData")}))}},m=_,y=(i("3957"),Object(v["a"])(m,o,n,!1,null,"308e1852",null)),b=y.exports,g=i("bc3a"),w=i.n(g),C=i("130e"),x=i("b970"),$=i("8c4f"),k=(i("157a"),function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("h2",[t._v("我是About的内容")])}),S=[],j={name:"About"},O=j,I=Object(v["a"])(O,k,S,!1,null,null,null),M=I.exports,P=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("h2",[t._v("我是Home的内容")])},D=[],q={name:"Home"},N=q,T=Object(v["a"])(N,P,D,!1,null,null,null),A=T.exports,Y=new $["a"]({mode:"history",routes:[{path:"/about",component:M},{path:"/home",component:A}]}),E=i("5a0c"),Q=i.n(E),B=i("4208"),H=i.n(B),W=i("18a0"),z=i.n(W),J=i("9612"),R=i("4a37"),L=i.n(R);Q.a.extend(H.a),e["a"].use(J["a"]),e["a"].use(x["a"]),e["a"].use($["a"]),e["a"].config.productionTip=!1,e["a"].use(C["a"],w.a),new e["a"]({beforeCreate:function(){e["a"].prototype.$bus=this,e["a"].prototype.$wx=z.a,e["a"].prototype.$dayjs=Q.a,e["a"].prototype.$api="http://amap.100pq.cn/laravel/api/",e["a"].prototype.$backend="http://amap.100pq.cn/laravel",e["a"].prototype.$qrcode=L.a},mounted:function(){},render:function(t){return t(b)},router:Y}).$mount("#app")},"6d04":function(t,a,i){t.exports=i.p+"img/countdown.a1427068.png"},"8a90":function(t,a,i){},af1a:function(t,a,i){t.exports=i.p+"img/useCoupons.6e44d759.jpg"}});
//# sourceMappingURL=app.c01ae9ab.js.map