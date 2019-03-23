// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../static/font/iconfont.css'


Vue.use(ElementUI);

Vue.config.productionTip = false

//ajax模块
import axios from 'axios';
Vue.prototype.$axios=axios;
axios.defaults.withCredentials=true;  //允许跨域的时候携带cookie

import store from '@/vuex/store'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
