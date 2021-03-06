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
import store from './store'
import Echo from "laravel-echo"



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
    Vue.prototype.$api = process.env.VUE_APP_API;
    Vue.prototype.$backend = process.env.VUE_APP_BACKEND;
    // Vue.prototype.$api = "http://amap.100pq.cn/laravel/api/";
    // Vue.prototype.$backend = "http://amap.100pq.cn/laravel";

    // Vue.prototype.$api = "http://192.168.31.84/api/";
    // Vue.prototype.$backend = "http://192.168.31.84";

    // Vue.prototype.$domain = "http://amap.100pq.cn/";
    // Vue.prototype.$qrcode = require('jr-qrcode');

    Vue.prototype.$qrcode = jrQrcode;

    Vue.prototype.$Pusher = require("pusher-js")
    Vue.prototype.$Echo = new Echo({
      broadcaster: 'pusher',
      key: "ShdHLAikrhOsNRg9",
      wsHost: "4s.100pq.cn",
      wsPort: 6001,
      forceTLS: false
    });
  },
  mounted() {

  },

  render: h => h(App),
  router,
  store
}).$mount('#app')
