(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-145831da"],{"041c":function(t,i,a){t.exports=a.p+"img/myCoupons.3eeca74d.jpg"},3972:function(t,i,a){},"6d04":function(t,i,a){t.exports=a.p+"img/countdown.a1427068.png"},"7abe":function(t,i,a){"use strict";a.r(i);var e=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[t.activity.id?[e("video",{attrs:{preload:"auto",width:"100%",height:"300",controls:"controls","x5-video-player-fullscreen":"false","x5-playsinline":"",playsinline:"","webkit-playsinline":"true",poster:t.$oss+t.activity.video_thumbnail}},[e("source",{attrs:{src:t.$oss+t.activity.video,type:"video/mp4"}})]),e("van-image",{attrs:{width:"100vw",fit:"cover",src:t.$oss+t.activity.poster}})]:t._e(),e("van-form",[e("van-field",{attrs:{label:"门店名称",readonly:"",placeholder:"门店名称"},model:{value:t.activity.shop,callback:function(i){t.$set(t.activity,"shop",i)},expression:"activity.shop"}}),e("van-field",{attrs:{clickable:"",label:"门店电话",readonly:"",placeholder:"门店电话","right-icon":"phone-o"},on:{click:function(i){return t.call(t.activity.tel)}},model:{value:t.activity.tel,callback:function(i){t.$set(t.activity,"tel",i)},expression:"activity.tel"}}),e("van-field",{attrs:{clickable:"",readonly:"",label:"门店地址",placeholder:"门店地址","right-icon":"location-o"},on:{click:function(i){return t.locate(t.activity.location)}},model:{value:t.activity.address,callback:function(i){t.$set(t.activity,"address",i)},expression:"activity.address"}})],1),e("h3",{ref:"sign_up_form"},[t._v("信息登记处")]),e("van-form",[e("van-field",{attrs:{required:"",label:"车牌号",placeholder:"车牌号"},model:{value:t.sign_up_form.licensePlateNumber,callback:function(i){t.$set(t.sign_up_form,"licensePlateNumber","string"===typeof i?i.trim():i)},expression:"sign_up_form.licensePlateNumber"}}),e("van-field",{attrs:{required:"",label:"手机号",placeholder:"手机号",type:"number"},model:{value:t.sign_up_form.phoneNumber,callback:function(i){t.$set(t.sign_up_form,"phoneNumber","string"===typeof i?i.trim():i)},expression:"sign_up_form.phoneNumber"}}),e("van-field",{attrs:{required:"",label:"姓名",placeholder:"姓名"},model:{value:t.sign_up_form.name,callback:function(i){t.$set(t.sign_up_form,"name","string"===typeof i?i.trim():i)},expression:"sign_up_form.name"}}),e("van-field",{attrs:{required:"",label:"车型",placeholder:"车型"},model:{value:t.sign_up_form.carModel,callback:function(i){t.$set(t.sign_up_form,"carModel","string"===typeof i?i.trim():i)},expression:"sign_up_form.carModel"}})],1),e("div",{staticClass:"count-down"},[e("img",{attrs:{src:a("6d04")}}),e("div",{staticClass:"text"},["inProgress"==t.activity.state?[e("div",[t._v("报名参加活动")]),e("div",[t._v("活动倒计时")]),e("div",[e("van-count-down",{attrs:{time:t.countDown,format:"DD 天 HH时 mm分 ss秒"},on:{finish:t.activityEnds}})],1)]:[e("div",[t._v("活动已结束")]),e("div",[t._v("下一场活动马上开启")])]],2)]),t.activity.id?[e("div",{staticClass:"van-hairline--bottom"},[t._v("已有"+t._s(t.activity.participants.length+t.activity.offset.participants)+"人关注")]),e("div",{staticClass:"participant-avatar"},t._l(Math.min(33,t.activity.participants.length),(function(i){return e("div",{key:i.id,staticClass:"avatar"},[e("van-image",{attrs:{width:"90%",round:"",fit:"cover",src:t.activity.participants[i-1].participant_info.avatar}})],1)})),0),e("div",{staticClass:"van-hairline--bottom"},[t._v("已参与"+t._s(t.normalCoupons.total+t.activity.offset.coupons)+"人")]),e("div",[e("van-notice-bar",{staticStyle:{padding:"0",height:"60px"},attrs:{scrollable:!1}},[e("van-swipe",{staticClass:"notice-swipe",attrs:{vertical:"",autoplay:3e3,"show-indicators":!1}},t._l(Math.ceil(t.normalCoupons.coupons.length/2),(function(i){return e("van-swipe-item",{key:i},[e("div",{staticClass:"swipe-item"},t._l(2,(function(a){return e("div",{key:a,staticClass:"row"},[e("div",{staticClass:"avatar"},[e("van-image",{attrs:{height:"25px",width:"25px",fit:"cover",round:"",src:t.normalCoupons.coupons[(2*i-a%2-1)%t.normalCoupons.coupons.length].participant.participant_info.avatar}})],1),e("div",{staticStyle:{"margin-right":"0.5rem"}},[t._v(" "+t._s(t.normalCoupons.coupons[(2*i-a%2-1)%t.normalCoupons.coupons.length].participant.participant_info.name)+" ")]),t.normalCoupons.coupons[(2*i-a%2-1)%t.normalCoupons.coupons.length].participant.license_plate_number?e("div",{staticStyle:{"margin-right":"0.5rem"}},[t._v(" "+t._s(t.normalCoupons.coupons[(2*i-a%2-1)%t.normalCoupons.coupons.length].participant.license_plate_number.replace(RegExp("^(..)(.*)(.)$"),"$1**$3"))+" ")]):t._e(),e("div",{staticStyle:{"margin-right":"0.5rem"}},[t._v(" "+t._s(t.normalCoupons.coupons[(2*i-a%2-1)%t.normalCoupons.coupons.length].created_at)+" ")]),e("div",[t._v(" 已支付"+t._s(t.normalCoupons.coupons[(2*i-a%2)%t.normalCoupons.coupons.length].value)+"元 ")])])})),0)])})),1)],1)],1)]:t._e(),e("div",{staticClass:"coupon-buttons"},[e("div",{on:{click:t.toCouponsView}},[e("img",{attrs:{src:a("041c")}})]),e("div",{on:{click:t.scan}},[e("img",{attrs:{src:a("af1a")}})])]),t.activity.id?t._l(t.activity.propaganda_images,(function(i,a){return e("van-image",{key:a,attrs:{src:t.$oss+i}})})):t._e(),e("div",{staticStyle:{display:"flex","justify-content":"center"}},[e("img",{attrs:{width:"150px",height:"45px",src:a("cafc")},on:{click:t.franchise}})]),e("div",{staticClass:"footer"},[t._v(t._s(t.config.tech_surppot)+"提供技术支持")]),e("div",{staticClass:"share-button",on:{click:t.generatePoster}},[e("van-icon",{attrs:{size:"40",color:"#b8b8b8",name:"share-o"}})],1),e("div",{staticClass:"bottom-buttons"},[e("div",{staticClass:"introduction-button",on:{click:function(i){t.showIntroduction=!0}}},[e("p",[t._v("活动锦囊")])]),"ended"==t.activity.state?[t._m(0)]:[t.haveACoupon?t._e():[e("div",{staticClass:"sign-up-button",on:{click:t.buyCoupon}},[e("p",[t._v("马上参与("+t._s(t.activity.signing_up_fee)+"元)")])])],t.haveACoupon?[e("div",{staticClass:"sign-up-button"},[e("p",[t._v("已参与("+t._s(t.activity.signing_up_fee)+"元)")])])]:t._e()]],2),e("div",[e("van-popup",{style:{minHeight:"100vw",paddingTop:"3rem",boxSizing:"border-box"},attrs:{closeable:"",position:"top"},model:{value:t.showIntroduction,callback:function(i){t.showIntroduction=i},expression:"showIntroduction"}},[e("van-tabs",{attrs:{type:"card"}},[e("van-tab",{attrs:{title:"活动说明"}},[e("div",{staticStyle:{"margin-top":"1rem"}},[e("van-button",{attrs:{round:"",type:"default"}},[t._v("参与记录")]),t.haveACoupon&&t.availableCoupons.length>0?e("div",[t._v(t._s(t.availableCoupons[0].created_at)+"参加活动")]):e("div",[t._v("未参加")])],1),e("div",[e("van-button",{attrs:{round:"",type:"default"}},[t._v("活动时间")]),e("div",[t._v(t._s(t.activity.start_at)+" 至 "+t._s(t.activity.end_at))])],1),e("div",[e("van-button",{attrs:{round:"",type:"default"}},[t._v("技术支持")]),e("div",[t._v("页面技术由"+t._s(t.config.tech_surppot)+"提供")])],1)]),e("van-tab",{attrs:{title:"我的奖品"}},t._l(t.availableCoupons,(function(i){return e("div",{key:i.id},[e("Coupon",{attrs:{value:i.value,allow_to_use_at:t.activity.allow_to_use_at,expire_at:t.activity.expire_at,description:t.activity.description,available:!0}})],1)})),0)],1)],1)],1),e("div",[e("van-popup",{attrs:{closeable:""},model:{value:t.poster.show,callback:function(i){t.$set(t.poster,"show",i)},expression:"poster.show"}},[e("div",{staticClass:"poster"},[e("van-image",{attrs:{width:"100%",src:t.poster.src}})],1)])],1)],2)},s=[function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"sign-up-button"},[a("p",[t._v("活动已结束")])])}],o=a("5530"),n=(a("4de4"),a("d3b7"),a("fb6a"),a("b0c0"),a("99af"),a("d399")),c=a("2241"),r=a("f43e"),l=a("2f62"),u={name:"Home",data:function(){return{showIntroduction:!1,isPaying:!1,poster:{show:!1,src:""},sign_up_form:{licensePlateNumber:"",phoneNumber:"",name:"",carModel:""}}},components:{Coupon:r["a"]},watch:{},computed:Object(o["a"])(Object(o["a"])({},Object(l["b"])(["activity","user","config","inviter"])),{},{haveACoupon:function(){var t=this;if(this.user.id&&this.activity.id){var i=this.user.coupons.filter((function(i){return i.activity_id==t.activity.id&&"normal"==i.type}));if(i.length>0)return!0}return!1},countDown:function(){return this.activity.end_at?this.$dayjs().isBefore(this.activity.end_at)?Math.abs(this.$dayjs().diff(this.activity.end_at,"millisecond")):0:864e5},availableCoupons:function(){var t=this;return this.user.id&&this.activity.id?this.user.coupons.filter((function(i){return i.activity_id==t.activity.id&&t.$dayjs().isBefore(t.activity.expire_at)&&"normal"==i.type})):[]},normalCoupons:function(){if(this.activity.id){var t=this.activity.coupons.filter((function(t){return"normal"==t.type}));return{total:t.length,coupons:t.slice(0,50)}}return{total:0,coupons:[]}}}),methods:{toCouponsView:function(){this.$router.push("/coupons")},franchise:function(){this.$router.push("/franchise")},locate:function(t){this.$wx.openLocation(Object(o["a"])(Object(o["a"])({},t),{},{scale:17}))},call:function(t){window.location.href="tel://"+t},buyCoupon:function(){var t=this;if(this.user.id&&this.activity.id)return this.sign_up_form.licensePlateNumber.length>3&&this.sign_up_form.phoneNumber&&this.sign_up_form.name&&this.sign_up_form.carModel?void(this.isPaying||(this.isPaying=!0,this.axios.post(this.$api+"pay",Object(o["a"])({amount:this.activity.signing_up_fee,payer:this.user.id,open_id:this.user.open_id,activityId:this.activity.id,inviter:this.inviter,notify_url:"".concat(window.location.origin,"/proxy/api/pay/wechat/notification")},this.sign_up_form)).then((function(i){t.isPaying=!1,console.log(i.data),t.$wx.chooseWXPay(Object(o["a"])(Object(o["a"])({},i.data),{},{timestamp:i.data.timeStamp,success:function(){}}))})).catch((function(i){t.isPaying=!1,500==i.response.status?Object(n["a"])({message:"请在微信内置浏览器中购买"}):400==i.response.status&&Object(n["a"])({message:"邀请好友购买后,您可以购买"})})))):(Object(n["a"])({message:"请登记完整信息"}),void this.$refs.sign_up_form.scrollIntoView({behavior:"smooth"}))},activityEnds:function(){this.activity.state="ended"},scan:function(){var t=this;"employee"==this.user.permission?this.$wx.scanQRCode({needResult:1,success:function(i){t.axios.put(t.$api+"coupon/".concat(i.resultStr,"/use"),{temporaryId:localStorage.temporaryId}).then((function(t){203!=t.status?Object(n["a"])({message:"核销成功"}):c["a"].alert({title:"已核销",message:"请勿重复核销"})})).catch((function(){Object(n["a"])({message:"无核销权限"})}))}}):Object(n["a"])({message:"请找工作人员进行核销"})},generatePoster:function(){var t=this;this.poster.src?this.poster.show=!0:this.user.id&&this.activity.id&&(n["a"].loading({message:"正在为您生成海报",forbidClick:!0,duration:0}),this.axios.post(this.$api+"activity/".concat(this.activity.id,"/participant/").concat(this.user.id,"/poster/"),{originUrl:window.location.href,posterUrl:this.$oss+this.activity.poster}).then((function(i){n["a"].clear(),t.poster.src=i.data,t.poster.show=!0})))}},mounted:function(){var t=this;this.$bus.$on("activityReady",(function(){t.sign_up_form.licensePlateNumber=t.activity.prefix})),this.sign_up_form.licensePlateNumber=this.activity.prefix,this.$Echo.channel("4s").listen("Paid",(function(i){i.user_id==t.user.id&&(t.axios.post(t.$api+"login",{temporaryId:localStorage.temporaryId}).then((function(i){200==i.status&&t.$store.dispatch("setUser",i.data)})),t.axios.get(t.$api+"activity/"+t.activity.id).then((function(i){t.$dayjs().isBefore(i.data.end_at)?i.data.state="inProgress":i.data.state="ended",t.$store.dispatch("setActivity",i.data)})))}))}},p=u,v=(a("cb90"),a("2877")),d=Object(v["a"])(p,e,s,!1,null,"32305cd4",null);i["default"]=d.exports},af1a:function(t,i,a){t.exports=a.p+"img/useCoupons.5539ae8e.jpg"},cafc:function(t,i,a){t.exports=a.p+"img/apply_button.b68c5257.png"},cb90:function(t,i,a){"use strict";a("3972")},f43e:function(t,i,a){"use strict";var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"van-coupon",class:{"van-coupon--disabled":!t.available},staticStyle:{"margin-top":"1rem"}},[a("div",{staticClass:"van-coupon__content"},[a("div",{staticClass:"van-coupon__head"},[a("h2",{staticClass:"van-coupon__amount"},[t._v(t._s(t.value)),a("span",[t._v("元")])]),a("p",{staticClass:"van-coupon__condition"},[t._v("无使用门槛")])]),a("div",{staticClass:"van-coupon__body"},[a("p",{staticClass:"van-coupon__name"},[t._v("优惠券")]),a("p",{staticClass:"van-coupon__valid"},[t._v(" "+t._s(t.$dayjs(t.allow_to_use_at).format("YYYY-MM-DD"))+" 至 "+t._s(t.$dayjs(t.expire_at).format("YYYY-MM-DD"))+" ")])])]),a("p",{staticClass:"van-coupon__description"},[t._v(t._s(t.description))])])},s=[],o={name:"Coupon",props:["value","allow_to_use_at","expire_at","available","description"]},n=o,c=a("2877"),r=Object(c["a"])(n,e,s,!1,null,null,null);i["a"]=r.exports},fb6a:function(t,i,a){"use strict";var e=a("23e7"),s=a("da84"),o=a("e8b5"),n=a("68ee"),c=a("861d"),r=a("23cb"),l=a("07fa"),u=a("fc6a"),p=a("8418"),v=a("b622"),d=a("1dde"),_=a("f36a"),h=d("slice"),f=v("species"),m=s.Array,y=Math.max;e({target:"Array",proto:!0,forced:!h},{slice:function(t,i){var a,e,s,v=u(this),d=l(v),h=r(t,d),g=r(void 0===i?d:i,d);if(o(v)&&(a=v.constructor,n(a)&&(a===m||o(a.prototype))?a=void 0:c(a)&&(a=a[f],null===a&&(a=void 0)),a===m||void 0===a))return _(v,h,g);for(e=new(void 0===a?m:a)(y(g-h,0)),s=0;h<g;h++,s++)h in v&&p(e,s,v[h]);return e.length=s,e}})}}]);
//# sourceMappingURL=chunk-145831da.1a39b978.js.map