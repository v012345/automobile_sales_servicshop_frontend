(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-732afed4"],{"041c":function(t,i,e){t.exports=e.p+"img/myCoupons.3eeca74d.jpg"},"0cb2":function(t,i,e){var a=e("e330"),n=e("7b0b"),o=Math.floor,s=a("".charAt),c=a("".replace),r=a("".slice),l=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,u=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,i,e,a,d,p){var v=e+t.length,f=a.length,h=u;return void 0!==d&&(d=n(d),h=l),c(p,h,(function(n,c){var l;switch(s(c,0)){case"$":return"$";case"&":return t;case"`":return r(i,0,e);case"'":return r(i,v);case"<":l=d[r(c,1,-1)];break;default:var u=+c;if(0===u)return n;if(u>f){var p=o(u/10);return 0===p?n:p<=f?void 0===a[p-1]?s(c,1):a[p-1]+s(c,1):n}l=a[u-1]}return void 0===l?"":l}))}},"0ce4":function(t,i,e){},3628:function(t,i,e){"use strict";e("0ce4")},5319:function(t,i,e){"use strict";var a=e("2ba4"),n=e("c65b"),o=e("e330"),s=e("d784"),c=e("d039"),r=e("825a"),l=e("1626"),u=e("5926"),d=e("50c4"),p=e("577e"),v=e("1d80"),f=e("8aa5"),h=e("dc4a"),_=e("0cb2"),m=e("14c3"),g=e("b622"),b=g("replace"),y=Math.max,C=Math.min,w=o([].concat),x=o([].push),k=o("".indexOf),$=o("".slice),j=function(t){return void 0===t?t:String(t)},O=function(){return"$0"==="a".replace(/./,"$0")}(),M=function(){return!!/./[b]&&""===/./[b]("a","$0")}(),P=!c((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}));s("replace",(function(t,i,e){var o=M?"$":"$0";return[function(t,e){var a=v(this),o=void 0==t?void 0:h(t,b);return o?n(o,t,a,e):n(i,p(a),t,e)},function(t,n){var s=r(this),c=p(t);if("string"==typeof n&&-1===k(n,o)&&-1===k(n,"$<")){var v=e(i,s,c,n);if(v.done)return v.value}var h=l(n);h||(n=p(n));var g=s.global;if(g){var b=s.unicode;s.lastIndex=0}var O=[];while(1){var M=m(s,c);if(null===M)break;if(x(O,M),!g)break;var P=p(M[0]);""===P&&(s.lastIndex=f(c,d(s.lastIndex),b))}for(var I="",S=0,A=0;A<O.length;A++){M=O[A];for(var E=p(M[0]),N=y(C(u(M.index),c.length),0),R=[],D=1;D<M.length;D++)x(R,j(M[D]));var V=M.groups;if(h){var Y=w([E],R,N,c);void 0!==V&&x(Y,V);var q=p(a(n,void 0,Y))}else q=_(E,c,N,R,V,n);N>=S&&(I+=$(c,S,N)+q,S=N+E.length)}return I+$(c,S)}]}),!P||!O||M)},5377:function(t,i,e){var a=e("83ab"),n=e("9bf2"),o=e("ad6d"),s=e("d039"),c=RegExp.prototype,r=a&&s((function(){return"sy"!==Object.getOwnPropertyDescriptor(c,"flags").get.call({dotAll:!0,sticky:!0})}));r&&n.f(c,"flags",{configurable:!0,get:o})},6285:function(t,i,e){t.exports=e.p+"img/share_button.6bef1d39.png"},"6d04":function(t,i,e){t.exports=e.p+"img/countdown.a1427068.png"},"7abe":function(t,i,e){"use strict";e.r(i);var a=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",[t.activity.id?[t._e(),a("van-image",{attrs:{width:"100vw",fit:"cover",src:t.$backend+t.activity.poster}})]:t._e(),a("van-form",[a("van-field",{attrs:{label:"门店名称",readonly:"",placeholder:"门店名称"},model:{value:t.activity.shop,callback:function(i){t.$set(t.activity,"shop",i)},expression:"activity.shop"}}),a("van-field",{attrs:{clickable:"",label:"门店电话",readonly:"",placeholder:"门店电话","right-icon":"phone-o"},on:{click:function(i){return t.call(t.activity.tel)}},model:{value:t.activity.tel,callback:function(i){t.$set(t.activity,"tel",i)},expression:"activity.tel"}}),a("van-field",{attrs:{clickable:"",readonly:"",label:"门店地址",placeholder:"门店地址","right-icon":"location-o"},on:{click:function(i){return t.locate(t.activity.location)}},model:{value:t.activity.address,callback:function(i){t.$set(t.activity,"address",i)},expression:"activity.address"}})],1),a("h3",{ref:"sign_up_form"},[t._v("信息登记处")]),a("van-form",[t.activityConfig.show_license_plate_number_field?[a("van-field",{attrs:{required:"",label:"车牌号",placeholder:"车牌号"},model:{value:t.sign_up_form.licensePlateNumber,callback:function(i){t.$set(t.sign_up_form,"licensePlateNumber","string"===typeof i?i.trim():i)},expression:"sign_up_form.licensePlateNumber"}})]:t._e(),a("van-field",{attrs:{required:"",label:"手机号",placeholder:"手机号",type:"number"},model:{value:t.sign_up_form.phoneNumber,callback:function(i){t.$set(t.sign_up_form,"phoneNumber","string"===typeof i?i.trim():i)},expression:"sign_up_form.phoneNumber"}}),a("van-field",{attrs:{required:"",label:"姓名",placeholder:"姓名"},model:{value:t.sign_up_form.name,callback:function(i){t.$set(t.sign_up_form,"name","string"===typeof i?i.trim():i)},expression:"sign_up_form.name"}}),t.activityConfig.allow_user_inputing_car_model?[a("van-field",{attrs:{required:"",label:"车型",placeholder:"车型"},model:{value:t.sign_up_form.carModel,callback:function(i){t.$set(t.sign_up_form,"carModel","string"===typeof i?i.trim():i)},expression:"sign_up_form.carModel"}})]:[a("van-field",{attrs:{required:"",readonly:"",label:"车型",placeholder:"车型"},on:{click:function(i){t.showCarModelPicker=!0}},model:{value:t.sign_up_form.carModel,callback:function(i){t.$set(t.sign_up_form,"carModel","string"===typeof i?i.trim():i)},expression:"sign_up_form.carModel"}})]],2),a("div",{staticClass:"count-down"},[a("img",{attrs:{src:e("6d04")}}),a("div",{staticClass:"text"},["inProgress"==t.activity.state?[a("div",[t._v("报名参加活动")]),a("div",[t._v("活动倒计时")]),a("div",[a("van-count-down",{attrs:{time:t.countDown,format:"DD 天 HH时 mm分 ss秒"},on:{finish:t.activityEnds}})],1)]:[a("div",[t._v("活动已结束")]),a("div",[t._v("下一场活动马上开启")])]],2)]),a("div",{staticClass:"contract"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.checked,expression:"checked"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.checked)?t._i(t.checked,null)>-1:t.checked},on:{change:function(i){var e=t.checked,a=i.target,n=!!a.checked;if(Array.isArray(e)){var o=null,s=t._i(e,o);a.checked?s<0&&(t.checked=e.concat([o])):s>-1&&(t.checked=e.slice(0,s).concat(e.slice(s+1)))}else t.checked=n}}}),a("span",{staticStyle:{"font-size":"0.8rem"}},[t._v('已阅读相关"'),a("span",{staticStyle:{color:"darkblue"},on:{click:t.showContract}},[t._v("活动条款")]),t._v('"')])]),t.activity.id?[a("div",{staticClass:"van-hairline--bottom"},[t._v("已有"+t._s(t.activity.participants_count+t.activity.offset.participants)+"人关注 ")]),a("div",{staticClass:"participant-avatar"},t._l(Math.min(33,t.activity.participants.length),(function(i){return a("div",{key:i.id,staticClass:"avatar"},[a("van-image",{attrs:{round:"",fit:"cover",src:t.activity.participants[i-1].participant_info.avatar}})],1)})),0),a("div",{staticClass:"van-hairline--bottom"},[t._v("已参与"+t._s(t.activity.sales_number+t.activity.offset.coupons)+"人")]),a("div",[a("van-notice-bar",{staticStyle:{padding:"0",height:"60px"},attrs:{scrollable:!1}},[a("van-swipe",{staticClass:"notice-swipe",attrs:{vertical:"",autoplay:3e3,"show-indicators":!1}},t._l(Math.ceil(t.normalCoupons.coupons.length/2),(function(i){return a("van-swipe-item",{key:i},[a("div",{staticClass:"swipe-item"},t._l(2,(function(e){return a("div",{key:e,staticClass:"row"},[a("div",{staticClass:"avatar"},[a("van-image",{attrs:{height:"25px",width:"25px",fit:"cover",round:"",src:t.normalCoupons.coupons[(2*i-e%2-1)%t.normalCoupons.coupons.length].participant.participant_info.avatar},on:{click:function(a){t.log(t.normalCoupons.coupons[(2*i-e%2-1)%t.normalCoupons.coupons.length].participant)}}})],1),a("div",{staticClass:"name",staticStyle:{"margin-right":"0.5rem"}},[t._v(" "+t._s(t.normalCoupons.coupons[(2*i-e%2-1)%t.normalCoupons.coupons.length].participant.participant_info.name)+" ")]),t.activityConfig.show_license_plate_number_field&&t.normalCoupons.coupons[(2*i-e%2-1)%t.normalCoupons.coupons.length].participant.license_plate_number?a("div",{staticClass:"license_plate_number",staticStyle:{"margin-right":"0.5rem"}},[t._v(" "+t._s(t.normalCoupons.coupons[(2*i-e%2-1)%t.normalCoupons.coupons.length].participant.license_plate_number.replace(RegExp("^(...)(.*)(..)$"),"$1**$3"))+" ")]):t._e(),a("div",{staticStyle:{"margin-right":"0.5rem"}},[t._v(" "+t._s(t.normalCoupons.coupons[(2*i-e%2-1)%t.normalCoupons.coupons.length].created_at)+" ")]),a("div",[t._v(" 支付"+t._s(t.normalCoupons.coupons[(2*i-e%2-1)%t.normalCoupons.coupons.length].value)+"元 ")])])})),0)])})),1)],1)],1)]:t._e(),a("div",{staticClass:"coupon-buttons"},[a("div",{on:{click:t.toCouponsView}},[a("img",{attrs:{src:e("af1a")}})]),a("div",{on:{click:t.scan}},[a("img",{attrs:{src:e("041c")}})])]),a("div",{staticClass:"show-more-button"},[a("h5",[t._v("已有 "),a("span",{staticStyle:{color:"red","font-size":"1.3rem"}},[t._v(t._s(t.bullets.count))]),t._v("人购买")])]),a("div",{staticClass:"no-line"},[a("van-grid",{attrs:{direction:"horizontal","column-num":4}},[a("van-grid-item",{attrs:{text:"序号"}}),a("van-grid-item",{attrs:{text:"车牌号码"}}),a("van-grid-item",{attrs:{text:"卡券状态"}}),a("van-grid-item",{attrs:{text:"购买时间"}})],1),t._l(t.bullets.data,(function(i,e){return a("van-grid",{key:e,attrs:{direction:"horizontal","column-num":4}},[e<=t.page?[a("van-grid-item",{attrs:{text:(t.bullets.count-e).toString()}}),a("van-grid-item",{attrs:{text:i.license_plate_number}}),a("van-grid-item",{attrs:{text:"已领取"}}),a("van-grid-item",{attrs:{text:i.created_at}})]:t._e()],2)}))],2),a("div",{staticClass:"show-more-button"},[a("van-button",{attrs:{type:"warning"},on:{click:function(i){t.page=t.page+15}}},[t._v("点击查看更多")])],1),t.activity.id?t._l(t.activity.propaganda_images,(function(i,e){return a("van-image",{key:e,attrs:{src:t.$backend+i}})})):t._e(),a("div",{staticClass:"footer"},[t._v(t._s(t.config.tech_surppot)+"提供技术支持")]),a("div",{staticClass:"share-button",on:{click:t.generatePoster}},[a("img",{attrs:{width:"50px",height:"50px",src:e("6285")}})]),a("div",{staticClass:"bottom-buttons"},[a("div",{staticClass:"introduction-button",on:{click:function(i){t.showIntroduction=!0}}},[a("p",[t._v("活动锦囊")])]),"ended"==t.activity.state?[t._m(0)]:[t.haveACoupon?t._e():[a("div",{staticClass:"sign-up-button",on:{click:t.buy}},[a("p",[t._v("马上参与("+t._s(t.activity.signing_up_fee)+"元)")])])],t.haveACoupon?[a("div",{staticClass:"sign-up-button"},[a("p",[t._v("已参与("+t._s(t.activity.signing_up_fee)+"元)")])])]:t._e()]],2),a("div",[a("van-popup",{style:{minHeight:"150vw",paddingTop:"3rem",boxSizing:"border-box"},attrs:{closeable:"",position:"top"},model:{value:t.showIntroduction,callback:function(i){t.showIntroduction=i},expression:"showIntroduction"}},[a("van-tabs",{attrs:{type:"card"}},[a("van-tab",{attrs:{title:"活动说明"}},[a("div",{staticClass:"activity-desc"},[a("h3",[t._v("参与记录")]),t.haveACoupon&&t.availableCoupons.length>0?a("div",[t._v(t._s(t.availableCoupons[0].created_at)+"参加活动")]):a("div",[t._v("未参加")])]),a("div",{staticClass:"activity-desc"},[a("h3",[t._v("活动时间")]),a("div",[t._v(t._s(t.activity.start_at)+" 至 "+t._s(t.activity.end_at))])]),a("div",{staticClass:"activity-desc"},[a("h3",[t._v("技术支持")]),a("div",[t._v("页面技术由"+t._s(t.config.tech_surppot)+"提供")])]),t.config.custom?t._l(t.config.custom,(function(i,e){return a("div",{key:e,staticClass:"activity-desc"},[a("h3",[t._v(t._s(i.department))]),a("div",[t._v(t._s(i.title))])])})):t._e()],2),t._e()],2)],1)],1),a("div",[a("van-popup",{attrs:{closeable:""},model:{value:t.poster.show,callback:function(i){t.$set(t.poster,"show",i)},expression:"poster.show"}},[a("div",{staticClass:"poster"},[a("van-image",{attrs:{width:"100%",src:t.poster.src}})],1)])],1),a("div",[a("van-popup",{attrs:{round:"",position:"bottom"},model:{value:t.showCarModelPicker,callback:function(i){t.showCarModelPicker=i},expression:"showCarModelPicker"}},[a("van-cascader",{attrs:{title:"选择车型",options:t.activityConfig.brand_category},on:{close:function(i){t.showCarModelPicker=!1},finish:t.onFinish},model:{value:t.cascaderValue,callback:function(i){t.cascaderValue=i},expression:"cascaderValue"}})],1)],1)],2)},n=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"sign-up-button"},[e("p",[t._v("活动已结束")])])}],o=e("1da1"),s=e("5530"),c=(e("96cf"),e("4de4"),e("d3b7"),e("fb6a"),e("a15b"),e("d81d"),e("b0c0"),e("5377"),e("99af"),e("ac1f"),e("466d"),e("4d63"),e("c607"),e("2c3e"),e("25f0"),e("159b"),e("5319"),e("2241")),r=e("d399"),l=e("f43e"),u=e("2f62"),d={name:"Home",data:function(){return{bullets:{count:0,data:[]},page:15,checked:!1,flags:{},showCarModelPicker:!1,cascaderValue:"",showIntroduction:!1,isPaying:!1,poster:{show:!1,src:""},sign_up_form:{licensePlateNumber:"",phoneNumber:"",name:"",carModel:""}}},components:{Coupon:l["a"]},watch:{},computed:Object(s["a"])(Object(s["a"])({},Object(u["b"])(["activity","user","config","inviter","activityConfig"])),{},{haveACoupon:function(){var t=this;if(this.user.id&&this.activity.id){var i=this.user.coupons.filter((function(i){return i.activity_id==t.activity.id&&"normal"==i.type}));if(i.length>0)return!0}return!1},countDown:function(){return this.activity.end_at?this.$dayjs().isBefore(this.activity.end_at)?Math.abs(this.$dayjs().diff(this.activity.end_at,"millisecond")):0:864e5},availableCoupons:function(){var t=this;return this.user.id&&this.activity.id?this.user.coupons.filter((function(i){return i.activity_id==t.activity.id&&t.$dayjs().isBefore(t.activity.expire_at)&&"normal"==i.type})):[]},normalCoupons:function(){if(this.activity.id){var t=this.activity.coupons.filter((function(t){return"normal"==t.type}));return t.reverse(),{total:t.length,coupons:t.slice(0,50)}}return{total:0,coupons:[]}}}),methods:{showContract:function(){c["a"].alert({title:"用户购买须知",message:'1.机油仅限店内使用,机油升级或者超过4升,需要补差价<br>2.本活动不得与店内其他优惠同时使用<br>3.销售套餐由合作4S店提供,并由该店提供正规专业的保养服务<br>4.为回馈广大车主,套餐为特价福利产品,购买后不可退款<br><br>购买前请认真阅读本"须知",如有异议请咨询详情页面4S店服务电话',messageAlign:"left"}).then((function(){}))},log:function(t){console.log(t)},onFinish:function(t){var i=t.selectedOptions;this.showCarModelPicker=!1,this.sign_up_form.carModel=i.map((function(t){return t.text})).join("/")},toCouponsView:function(){this.$router.push("/coupons")},franchise:function(){this.$router.push("/franchise")},locate:function(t){this.$wx.openLocation(Object(s["a"])(Object(s["a"])({},t),{},{scale:17}))},call:function(t){window.location.href="tel://"+t},buy:function(){var t=this;return this.user.id&&this.activity.id&&this.activityConfig.activity_id?this.sign_up_form.phoneNumber&&this.sign_up_form.name&&this.sign_up_form.carModel?this.activityConfig.show_license_plate_number_field&&this.sign_up_form.licensePlateNumber.length<5?(Object(r["a"])({message:"请登记完整信息"}),void this.$refs.sign_up_form.scrollIntoView({behavior:"smooth"})):void(this.checked?(r["a"].loading({message:"请求支付中",forbidClick:!0,duration:0}),this.isPaying?Object(r["a"])({message:"正在购买,请稍等"}):(this.isPaying=!0,this.axios.post(this.$api+"v3/pay",Object(s["a"])({amount:this.activity.signing_up_fee,payer:this.user.id,open_id:this.user.open_id,activityId:this.activity.id,inviter:this.inviter,hostname:window.location.origin},this.sign_up_form)).then((function(i){t.isPaying=!1,console.log(i.data),t.$wx.chooseWXPay(Object(s["a"])(Object(s["a"])({},i.data),{},{timestamp:i.data.timeStamp,success:function(){t.flags.hasBought||(t.isPaying=!0,r["a"].loading({message:"正在取回优惠券,请稍等",forbidClick:!0,duration:0}))},cancel:function(){t.isPaying=!1,Object(r["a"])({message:"已取消支付"})}}))})).catch((function(i){t.isPaying=!1,500==i.response.status?Object(r["a"])({message:"请在微信内置浏览器中购买"}):400==i.response.status&&Object(r["a"])({message:"邀请好友购买后,您可以购买"})})))):Object(r["a"])({message:"请先阅读并相关活动条款"})):(Object(r["a"])({message:"请登记完整信息"}),void this.$refs.sign_up_form.scrollIntoView({behavior:"smooth"})):(Object(r["a"])({message:"正加在载个人信息,请稍等"}),void this.$refs.sign_up_form.scrollIntoView({behavior:"smooth"}))},activityEnds:function(){this.activity.state="ended"},scan:function(){var t=this;"employee"==this.user.permission?this.$wx.scanQRCode({needResult:1,success:function(i){t.axios.put(t.$api+"coupon/".concat(i.resultStr,"/use"),{temporaryId:localStorage.temporaryId}).then((function(t){203!=t.status?Object(r["a"])({message:"核销成功"}):c["a"].alert({title:"已核销",message:"请勿重复核销"})})).catch((function(){Object(r["a"])({message:"无核销权限"})}))}}):Object(r["a"])({message:"请找工作人员进行核销"})},generatePoster:function(){var t=this;this.poster.src?this.poster.show=!0:this.user.id&&this.activity.id&&(r["a"].loading({message:"正在为您生成海报",forbidClick:!0,duration:0}),this.axios.post(this.$api+"v3/activity/".concat(this.activity.id,"/participant/").concat(this.user.id,"/poster"),{content:window.location.origin+"/activity/".concat(this.activity.id,"/inviter/").concat(this.user.id),image:this.$qrcode.getQrBase64(window.location.origin+"/activity/".concat(this.activity.id,"/inviter/").concat(this.user.id),{width:150,height:150})}).then((function(i){r["a"].clear(),t.poster.src=i.data,t.poster.show=!0})))}},created:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function i(){var e,a;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.prev=0,e=window.location.href.match(RegExp("(/activity/)([0-9]+)")),e&&(localStorage.activityId=e[e.length-1]),i.next=5,t.axios.post(t.$api+"v3/activity/configration",{activityId:localStorage.activityId});case 5:a=i.sent,t.$store.dispatch("setActivityConfig",a.data),console.log("activity config",a.data),localStorage.activityId=a.data.activity_id,t.sign_up_form.licensePlateNumber=a.data.license_plate_number_prefix,i.next=15;break;case 12:i.prev=12,i.t0=i["catch"](0),console.log("no activity config");case 15:try{t.axios.get(t.$api+"v3/bulletin/"+localStorage.activityId).then((function(i){i.data.data.forEach((function(t){t.license_plate_number=t.license_plate_number.replace(RegExp("^(..)(.*)(..)$"),"$1***$3"),t.created_at=t.created_at.replace(RegExp("^(.....)(.*)(...)$"),"$2")})),t.bullets=i.data}))}catch(n){console.log("missing localStorage.activityId")}case 16:case"end":return i.stop()}}),i,null,[[0,12]])})))()},mounted:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:t.$Echo.channel("4s").listen("Paid",(function(i){i.user_id==t.user.id&&(t.$set(t.flags,"hasBought",!0),t.axios.post(t.$api+"v3/init",{activityId:localStorage.activityId,temporaryId:localStorage.temporaryId}).then((function(i){r["a"].clear(),t.$store.dispatch("init",i.data),t.$router.push("/coupons")})))}));case 1:case"end":return i.stop()}}),i)})))()}},p=d,v=(e("3628"),e("2877")),f=Object(v["a"])(p,a,n,!1,null,"156ccfcb",null);i["default"]=f.exports},a15b:function(t,i,e){"use strict";var a=e("23e7"),n=e("e330"),o=e("44ad"),s=e("fc6a"),c=e("a640"),r=n([].join),l=o!=Object,u=c("join",",");a({target:"Array",proto:!0,forced:l||!u},{join:function(t){return r(s(this),void 0===t?",":t)}})},af1a:function(t,i,e){t.exports=e.p+"img/useCoupons.45918790.jpg"},b69b:function(t,i,e){},cc42:function(t,i,e){"use strict";e("b69b")},d81d:function(t,i,e){"use strict";var a=e("23e7"),n=e("b727").map,o=e("1dde"),s=o("map");a({target:"Array",proto:!0,forced:!s},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},f43e:function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"van-coupon",class:{"van-coupon--disabled":!t.available},staticStyle:{"margin-top":"1rem"}},[e("div",{staticClass:"van-coupon__content"},[e("div",{staticClass:"van-coupon__head"},["normal"==t.type?[e("h2",{staticClass:"van-coupon__amount"},[t._v(t._s(t.value)),e("span",[t._v("元")])])]:[e("h2",{staticClass:"van-coupon__amount"},[e("span",{staticStyle:{"font-size":"1.5rem"}},[t._v(t._s(t.gift))])])],e("p",{staticClass:"van-coupon__condition"},[t._v("请到门店使用")])],2),e("div",{staticClass:"van-coupon__body"},[e("p",{staticClass:"van-coupon__name"},[t._v(t._s("normal"==t.type?"保养服务":"礼品券"))]),e("p",{staticClass:"van-coupon__valid"},[t._v(" "+t._s(t.$dayjs(t.allow_to_use_at).format("YYYY-MM-DD"))+" 至 "+t._s(t.$dayjs(t.expire_at).format("YYYY-MM-DD"))+" ")])]),e("div",{staticClass:"right_button"},[t.available?[e("van-button",{attrs:{type:"danger"}},[e("span",{staticClass:"text1"},[t._v("已生效")])])]:[e("van-button",{attrs:{color:"#cfcfcf",disabled:""}},[e("span",{staticClass:"text1"},[t._v("未生效")])])]],2)]),e("p",{staticClass:"van-coupon__description"},[t._v(t._s(t.description))])])},n=[],o={name:"Coupon",data:function(){return{gift:"收纳箱"}},props:{value:{},allow_to_use_at:{},expire_at:{},available:{},description:{},type:{default:"normal"},state:{default:"available"}}},s=o,c=(e("cc42"),e("2877")),r=Object(c["a"])(s,a,n,!1,null,"2abd5fb6",null);i["a"]=r.exports},fb6a:function(t,i,e){"use strict";var a=e("23e7"),n=e("da84"),o=e("e8b5"),s=e("68ee"),c=e("861d"),r=e("23cb"),l=e("07fa"),u=e("fc6a"),d=e("8418"),p=e("b622"),v=e("1dde"),f=e("f36a"),h=v("slice"),_=p("species"),m=n.Array,g=Math.max;a({target:"Array",proto:!0,forced:!h},{slice:function(t,i){var e,a,n,p=u(this),v=l(p),h=r(t,v),b=r(void 0===i?v:i,v);if(o(p)&&(e=p.constructor,s(e)&&(e===m||o(e.prototype))?e=void 0:c(e)&&(e=e[_],null===e&&(e=void 0)),e===m||void 0===e))return f(p,h,b);for(a=new(void 0===e?m:e)(g(b-h,0)),n=0;h<b;h++,n++)h in p&&d(a,n,p[h]);return a.length=n,a}})}}]);
//# sourceMappingURL=chunk-732afed4.869d5dd5.js.map