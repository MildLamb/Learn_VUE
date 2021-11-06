import Vue from 'vue'
import App from './App'
import router from './router/index'

Vue.config.productionTip = false

//显示声明使用VueRouter

/* eslint-disable no-new */
new Vue({
  el: '#app',
  //配置路由
  router:router,
  components: { App },
  template: '<App/>'
});
