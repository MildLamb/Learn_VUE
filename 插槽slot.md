# 插槽slot
- 简单描述
  - 插槽：插槽也是组件，在模板组件中预留插槽的位置，后续在模板中填充插槽，插槽需要通过slot绑定插槽组件名称。
  - 自定义事件：组件是不能直接操作Vue实例中的数据的，因此我们需要使用自定义事件，实现组件操作Vue实例中的数据。
  
```html
<!DOCTYPE html>
<html lang="en" xmlns:v-bind="http://www.w3.org/1999/xhtml" xmlns:v-on="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="UTF-8">
    <title>Vue</title>
</head>
<body>

<!-- View层 模板 -->
<div id="app">
    <names>
        <tit slot="tit" v-bind:title="title"></tit>
        <!--
            component: this.$emit('re',num);
            前端: v-on:re="removeItem(count)"
            通过上面两个操作，实现了组件绑定前端事件，又因为Vue的VM数据双向绑定，此时可以通过前端实现对Vue实例数据的修改
            组件  ->  前端  ->  Vue实例
        -->
        <comment slot="comment" v-bind:item="cham" v-for="(cham,count) in chamNames" v-bind:num="count"
                 v-on:re="removeItem(count)"></comment>
    </names>
</div>

<!-- 导入Vue -->
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script>
    //定义插槽模板
    Vue.component("names",{
       template:
      "<div>\
       <slot name='tit'></slot>\
       <ol>\
            <slot name='comment'></slot>\
       </ol>\
       </div>"
    });

    Vue.component("tit",{
        props: ['title'],
        template: '<div>{{title}}</div>'
    });

    Vue.component("comment",{
        props: ['item','num'],
        template: '<li>{{num}} -- {{item}}<button v-on:click="remove">删除</button></li>',
        methods: {
            remove: function (num) {
                //this.$emit(自定义事件名称,方法参数...) 自定义事件分发
                //自定义事件
                this.$emit('re',num);
            }
        }
    });

    var vm = new Vue({
        el: "#app",
        data: {
            title: "英雄列表",
            chamNames: ['Kindred','Gnar','Neeko']
        },
        methods: {
            removeItem: function (index) {
                console.log("删除了:" + this.chamNames[index]);
                this.chamNames.splice(index,1)
            }
        }
    });
</script>
</body>
</html>
```
