import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vant from 'vant'
import VueRouter from 'vue-router'
import 'vant/lib/index.css'
import router from './router'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import wx from 'weixin-js-sdk';
import UUID from "vue-uuid";
import jrQrcode from "jr-qrcode"



dayjs.extend(relativeTime);
Vue.use(UUID);
Vue.use(Vant);
Vue.use(VueRouter);
Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$wx = wx;
    Vue.prototype.$dayjs = dayjs;
    // Vue.prototype.$api = "http://amap.100pq.cn/laravel/api/";
    // Vue.prototype.$backend = "http://amap.100pq.cn/laravel";
    // Vue.prototype.$domain = "http://amap.100pq.cn/";
    Vue.prototype.$api = "http://192.168.31.84/api/";
    Vue.prototype.$backend = "http://192.168.31.84";
    Vue.prototype.$domain = "http://192.168.31.84:8080/";
    // Vue.prototype.$qrcode = require('jr-qrcode');
    Vue.prototype.$qrcode = jrQrcode;
  },
  mounted() {

  },

  render: h => h(App),
  router,
}).$mount('#app')
