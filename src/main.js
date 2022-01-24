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
dayjs.extend(relativeTime)

Vue.use(Vant)
Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.use(VueAxios, axios)
new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.wx = wx;
    Vue.prototype.$dayjs = dayjs;
  },
  mounted() {

  },

  render: h => h(App),
  router,
}).$mount('#app')
