(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-05639f96"],{"0b0b":function(t,i,a){"use strict";a("d838")},a29e:function(t,i,a){"use strict";a.r(i);var o=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",[t.user.id&&t.activity.id&&t.activityConfig.activity_id?a("div",{staticClass:"card-container"},[a("van-tabs",{attrs:{type:"card"}},[a("van-tab",{attrs:{title:"可用的",name:"available"}},[t._l(t.availableCoupons,(function(i){return a("div",{key:i.id,on:{click:function(a){return t.dealWithTheCoupon(i)}}},[a("Coupon",{attrs:{value:t.activityConfig.normal_coupon_value,allow_to_use_at:t.activity.allow_to_use_at,expire_at:t.activity.expire_at,description:t.activityConfig.normal_coupon_description,available:"available"==i.state}})],1)})),t._l(t.sharedCoupons,(function(i){return a("div",{key:i.id,on:{click:function(a){return t.dealWithTheCoupon(i)}}},[a("Coupon",{attrs:{value:t.activityConfig.shared_coupon_value,allow_to_use_at:t.activity.allow_to_use_at,expire_at:t.activity.expire_at,description:t.activityConfig.shared_coupon_description,available:"available"==i.state}})],1)}))],2),a("van-tab",{attrs:{title:"失效的",name:"expired"}},t._l(t.expiredCoupons,(function(i){return a("div",{key:i.id},["normal"==i.type?[a("Coupon",{attrs:{value:t.activityConfig.normal_coupon_value,allow_to_use_at:t.activity.allow_to_use_at,expire_at:t.activity.expire_at,description:t.activityConfig.normal_coupon_description,available:!1}})]:[a("Coupon",{attrs:{value:t.activityConfig.shared_coupon_value,allow_to_use_at:t.activity.allow_to_use_at,expire_at:t.activity.expire_at,description:t.activityConfig.shared_coupon_description,available:!1}})]],2)})),0)],1)],1):t._e(),a("div",[a("van-popup",{model:{value:t.showQrcode,callback:function(i){t.showQrcode=i},expression:"showQrcode"}},[a("van-image",{attrs:{src:t.qrcode}})],1)],1),a("div",[a("van-popup",{model:{value:t.showOfficialAccountQrcode,callback:function(i){t.showOfficialAccountQrcode=i},expression:"showOfficialAccountQrcode"}},[a("van-image",{attrs:{src:"http://cdn4s.100pq.cn/official_account_qrcode.jpg"}})],1)],1),a("div",{staticClass:"footer-nav"},[a("van-button",{attrs:{type:"info",block:""},on:{click:function(i){return t.$router.back()}}},[t._v("返回首页 "),a("br"),t._v(" 已有人"+t._s(t.activity.sales_number)+"参与 ")]),a("div",{staticClass:"middle-button"},[a("van-button",{attrs:{type:"danger",size:"large",block:""},on:{click:function(i){t.showOfficialAccountQrcode=!0}}},[t._v("关注公众号"),a("br"),t._v("获取更多好礼 ")])],1),a("van-button",{attrs:{type:"info",block:""},on:{click:t.generatePoster}},[t._v("分享活动海报"),a("br"),t._v("获取活动奖品")])],1)])},e=[],n=a("5530"),c=(a("4de4"),a("d3b7"),a("25f0"),a("99af"),a("d399")),s=a("f43e"),r=a("2f62"),u={name:"Coupons",data:function(){return{qrcode:"",showQrcode:!1,showOfficialAccountQrcode:!1}},components:{Coupon:s["a"]},computed:Object(n["a"])(Object(n["a"])({},Object(r["b"])(["activity","user","config","activityConfig","myPoster"])),{},{availableCoupons:function(){var t=this;return this.user.id&&this.activity.id?this.user.coupons.filter((function(i){return i.activity_id==t.activity.id&&t.$dayjs().isBefore(t.activity.expire_at)&&"normal"==i.type})):[]},sharedCoupons:function(){var t=this;return this.user.id&&this.activity.id?this.user.coupons.filter((function(i){return i.activity_id==t.activity.id&&t.$dayjs().isBefore(t.activity.expire_at)&&"shared"==i.type})):[]},expiredCoupons:function(){var t=this;return this.user.id&&this.activity.id?this.user.coupons.filter((function(i){return i.activity_id==t.activity.id&&!t.$dayjs().isBefore(t.activity.expire_at)})):[]}}),methods:{dealWithTheCoupon:function(t){if("available"==t.state)return this.qrcode=this.$qrcode.getQrBase64(t.id.toString()),void(this.showQrcode=!0);Object(c["a"])({message:"此券已经核销"})},generatePoster:function(){var t=this;this.myPoster&&this.myPoster.activity_id==this.activity.id?this.$router.push("/poster"):this.user.id&&this.activity.id&&(c["a"].loading({message:"正在为您生成海报",forbidClick:!0,duration:0}),this.axios.post(this.$api+"v3/activity/".concat(this.activity.id,"/participant/").concat(this.user.id,"/poster"),{content:window.location.origin+"/activity/".concat(this.activity.id,"/inviter/").concat(this.user.id),image:this.$qrcode.getQrBase64(window.location.origin+"/activity/".concat(this.activity.id,"/inviter/").concat(this.user.id),{width:150,height:150})}).then((function(i){c["a"].clear(),t.$store.dispatch("setMyPoster",{activity_id:t.activity.id,src:i.data}),t.$router.push("/poster")})))}},created:function(){var t=this;this.$Echo.channel("4s").listen("Used",(function(i){i.user_id==t.user.id&&t.axios.post(t.$api+"v3/init",{activityId:localStorage.activityId,temporaryId:localStorage.temporaryId}).then((function(i){t.showQrcode=!1,t.$store.dispatch("init",i.data)}))}))}},l=u,d=(a("0b0b"),a("2877")),v=Object(d["a"])(l,o,e,!1,null,"4593a6eb",null);i["default"]=v.exports},d838:function(t,i,a){},f43e:function(t,i,a){"use strict";var o=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"van-coupon",class:{"van-coupon--disabled":!t.available},staticStyle:{"margin-top":"1rem"}},[a("div",{staticClass:"van-coupon__content"},[a("div",{staticClass:"van-coupon__head"},[a("h2",{staticClass:"van-coupon__amount"},[t._v(t._s(t.value)),a("span",[t._v("元")])]),a("p",{staticClass:"van-coupon__condition"},[t._v("无使用门槛")])]),a("div",{staticClass:"van-coupon__body"},[a("p",{staticClass:"van-coupon__name"},[t._v("优惠券")]),a("p",{staticClass:"van-coupon__valid"},[t._v(" "+t._s(t.$dayjs(t.allow_to_use_at).format("YYYY-MM-DD"))+" 至 "+t._s(t.$dayjs(t.expire_at).format("YYYY-MM-DD"))+" ")])])]),a("p",{staticClass:"van-coupon__description"},[t._v(t._s(t.description))])])},e=[],n={name:"Coupon",props:["value","allow_to_use_at","expire_at","available","description"]},c=n,s=a("2877"),r=Object(s["a"])(c,o,e,!1,null,null,null);i["a"]=r.exports}}]);
//# sourceMappingURL=chunk-05639f96.9a5eed90.js.map