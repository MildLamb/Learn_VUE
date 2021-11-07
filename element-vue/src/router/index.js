import Vue from 'vue'
import VueRouter from "vue-router";

import Main from "../views/Main";
import Login from "../views/Login";

import UserList from "../views/user/List";
import UserProfile from "../views/user/Profile"

import NotFound from "../views/NotFound";

Vue.use(VueRouter);

/**
 * 路由模式：
 *    - hash：路径带 # 符号
 *    - history：路径不带 # 符号
 */

export default new VueRouter({
  mode: "history",
  routes: [{
    path: "/main/:name",
    component: Main,  //嵌套路由
    props: true,
    children: [
      //第一种路径
      {path: "/user/profile/:uid",component: UserProfile,name: "Profile"},
      // 第二种路径  由于2，3用的同一个路径才注释的
      // {path: "/user/list/",component: UserList,name: "List"},
      // 第三种路径
      {path: "/user/list/:mynameid",component: UserList,name: "List",props: true}]
  },{
    path: "/login",
    component: Login
  },{
    // Vue重定向
    path: "/goHome",
    redirect: "/login"
  },{
    path: "*",
    component: NotFound
  }]
});
