<template>
  <div id="test">
    <h1>{{message}}</h1>
    <router-link to="/kind">千珏是谁</router-link>
    <router-link to="/gnar">纳尔是谁</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: "Content"
    }
</script>

<!-- scoped表示作用域在当前vue文件中 -->
<style scoped>

</style>
