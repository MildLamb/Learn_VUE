- 安装vue-router
```shell
npm install vue-router --save-dev
```
- 两个模板页面 Main.vue 和 Content.vue
Content.vue
```html
<template>
  <h1>内容页</h1>
</template>

<script>
    export default {
        name: "Content"
    }
</script>

<!-- scoped表示作用域在当前vue文件中 -->
<style scoped>

</style>
```
Main.vue
```html
<template>
    <h1>首页</h1>
</template>

<script>
    export default {
        name: "Main"
    }
</script>

<style scoped>

</style>
```
- 路由配置 ../router/index.js
```js
import Vue from 'vue'
import VueRouter from "vue-router";

import Content from "../components/Content";
import Main from "../components/Main";

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
      component: Content
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

```
- 主页面 App.vue
```html
<template>
  <div id="app">
    <h1>Vue-Router</h1>
    <router-link to="/main">首页</router-link>
    <router-link to="/content">内容页</router-link>
    <!-- 展示template模板 -->
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  comments: {

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

```
- 程序主入口  main.js
```js
import Vue from 'vue'
import App from './App'
import router from './router/index'

Vue.config.productionTip = false

//显示声明使用VueRouter

/* eslint-disable no-new */
new Vue({
  el: '#app',
  //配置路由
  router,
  components: { App },
  template: '<App/>'
});

```
