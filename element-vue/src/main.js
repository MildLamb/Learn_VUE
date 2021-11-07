import Vue from 'vue'
import App from './App'

import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

import Axios from "axios";
import VueAxios from "vue-axios";

Vue.use(router);
Vue.use(ElementUI);

//axios 与 Vue结合使用有些特殊 ， 要绑定在一起写
Vue.use(VueAxios,Axios);

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
});
