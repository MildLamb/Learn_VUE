import Vue from 'vue'
import VueRouter from "vue-router";

import Content from "../components/Content";
import Main from "../components/Main";
import Kindred from "../components/Kindred";
import Gnar from "../components/Gnar";

//安装路由
Vue.use(VueRouter);

//配置导出路由
export default new VueRouter({
  routes: [
    {
      //路由路径
      path: '/content',
      name: 'myRoute',
      //跳转的组件
      component: Content,
      children: [
        {path : "/kind", component: Kindred},
        {path : "/gnar", component: Gnar}
      ]
    },
    {
      //路由路径
      path: '/main',
      name: 'myMain',
      //跳转的组件
      component: Main
    }
  ]
});
