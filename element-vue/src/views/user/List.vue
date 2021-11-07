<template>
  <div>
    <h1>用户列表</h1>
    {{$route.query.mypath}}
    {{$route.query.myname}}
    {{mynameid}}
  </div>
</template>

<script>
    export default {
        props: ['mynameid'],
        name: "UserList"
    }
</script>

<style scoped>

</style>
