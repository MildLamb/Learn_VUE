<template>
  <div>
    <h1>个人信息</h1>
    {{$route.params.uid}}
  </div>
</template>

<script>
    export default {
        name: "UserProFile",

        //在进入路由前执行 ,类似于过滤器
        beforeRouteEnter: (to, from, next)=>{
          console.log("beforeRouteEnter:进入路由前");
          //加载数据
          next(vm => {
            vm.getData();  //进入路由之前执行getData方法
          });
        },
        beforeRouteLeave: (to, from, next) => {
          console.log("beforeRouteLeave:离开路由前");
          next();
        },
        methods: {
          getData: function () {
            this.axios({
              method: 'get',
              url: 'http://localhost:8080/static/mock/data.json',
            }).then(function (resp){
              console.log(resp)
            })
          }
        }
    }
</script>

<style scoped>

</style>
