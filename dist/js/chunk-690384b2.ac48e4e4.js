(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-690384b2"],{a15b:function(i,e,t){"use strict";var n=t("23e7"),o=t("e330"),a=t("44ad"),s=t("fc6a"),r=t("a640"),c=o([].join),d=a!=Object,l=r("join",",");n({target:"Array",proto:!0,forced:d||!l},{join:function(i){return c(s(this),void 0===i?",":i)}})},d81d:function(i,e,t){"use strict";var n=t("23e7"),o=t("b727").map,a=t("1dde"),s=a("map");n({target:"Array",proto:!0,forced:!s},{map:function(i){return o(this,i,arguments.length>1?arguments[1]:void 0)}})},e46b:function(i,e,t){"use strict";t.r(e);var n=function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("div",{staticStyle:{width:"100vw",overflow:"hidden"}},[t("div",[t("van-image",{attrs:{width:"100vw",src:i.$backend+i.config.franchise_banner}})],1),t("div",[t("van-field",{attrs:{"is-link":"",readonly:"",label:"区域",placeholder:"区域选择"},on:{click:function(e){i.showCityPicker=!0}},model:{value:i.form.division,callback:function(e){i.$set(i.form,"division",e)},expression:"form.division"}}),t("van-field",{attrs:{label:"品牌"},model:{value:i.form.brand,callback:function(e){i.$set(i.form,"brand",e)},expression:"form.brand"}}),t("van-field",{attrs:{label:"店名"},model:{value:i.form.shop,callback:function(e){i.$set(i.form,"shop",e)},expression:"form.shop"}}),t("van-field",{attrs:{label:"姓名"},model:{value:i.form.name,callback:function(e){i.$set(i.form,"name",e)},expression:"form.name"}}),t("van-field",{attrs:{type:"tel",label:"手机"},model:{value:i.form.phone_number,callback:function(e){i.$set(i.form,"phone_number",e)},expression:"form.phone_number"}}),t("van-field",{attrs:{label:"职位"},model:{value:i.form.job_title,callback:function(e){i.$set(i.form,"job_title",e)},expression:"form.job_title"}}),t("van-button",{attrs:{type:"warning",block:""},on:{click:i.franchise}},[i._v("立即报名")])],1),i._e(),t("div",[t("van-popup",{attrs:{position:"bottom"},model:{value:i.showBrandPicker,callback:function(e){i.showBrandPicker=e},expression:"showBrandPicker"}},[t("van-tree-select",{attrs:{items:i.brands,"active-id":i.activeId,"main-active-index":i.activeIndex},on:{"update:activeId":function(e){i.activeId=e},"update:active-id":function(e){i.activeId=e},"update:mainActiveIndex":function(e){i.activeIndex=e},"update:main-active-index":function(e){i.activeIndex=e},"click-item":i.selectBrand}})],1)],1),t("div",[t("van-popup",{attrs:{round:"",position:"bottom"},model:{value:i.showCityPicker,callback:function(e){i.showCityPicker=e},expression:"showCityPicker"}},[t("van-cascader",{attrs:{title:"区域选择",options:i.administrative_division_codes},on:{close:function(e){i.showCityPicker=!1},finish:i.onFinish},model:{value:i.code,callback:function(e){i.code=e},expression:"code"}})],1)],1)])},o=[],a=t("5530"),s=(t("a15b"),t("d81d"),t("b0c0"),t("e9c4"),t("d3b7"),t("159b"),t("2f62")),r=t("d399"),c={data:function(){return{form:{brand:void 0,shop:void 0,job_title:void 0,name:void 0,phone_number:void 0,division:void 0},brand:"",brands:[],activeId:2,activeIndex:0,showCityPicker:!1,showBrandPicker:!1,code:"",franchisees:[],administrative_division_codes:[]}},methods:{onFinish:function(i){var e=i.selectedOptions;this.showCityPicker=!1,this.form.division=e.map((function(i){return i.text})).join("/")},selectBrand:function(i){this.form.brand=i.text,this.showBrandPicker=!1},franchise:function(){var i=this,e=this.form,t=e.brand,n=e.shop,o=e.job_title,s=e.name,c=e.phone_number,d=e.division;t&&n&&o&&s&&c&&d?this.axios.post(this.$api+"franchisee/franchise",Object(a["a"])(Object(a["a"])({},this.form),{},{open_id:this.user.open_id,user_id:this.user.id})).then((function(){Object(r["a"])({message:"报名成功"}),i.form={brand:void 0,shop:void 0,job_title:void 0,name:void 0,phone_number:void 0,division:void 0}})):Object(r["a"])({message:"请输入完整信息"})}},computed:Object(a["a"])({},Object(s["b"])(["user","config"])),created:function(){var i=this;localStorage.getItem("franchisees")&&(this.franchisees=JSON.parse(localStorage.getItem("franchisees"))),this.axios.get(this.$api+"franchisees").then((function(e){i.franchisees=e.data,localStorage.setItem("franchisees",JSON.stringify(e.data))})),this.axios.get(this.$api+"brands").then((function(e){e.data.forEach((function(i){i.text=i.main_brand;var e=[],t=1;i.sub_brands.forEach((function(i){e.push({text:i,id:t++})})),i.children=e})),i.brands=e.data})),this.axios.get(this.$api+"administrative_division_codes").then((function(e){e.data.forEach((function(i){i.text=i.division,i.value=i.code,i.cities.length>0?(i.cities.forEach((function(i){i.text=i.division,i.value=i.code})),i.children=i.cities):i.children=[{text:i.division,value:i.code}]})),i.administrative_division_codes=e.data}))}},d=c,l=t("2877"),f=Object(l["a"])(d,n,o,!1,null,"b9268030",null);e["default"]=f.exports}}]);
//# sourceMappingURL=chunk-690384b2.ac48e4e4.js.map