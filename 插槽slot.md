# 插槽slot
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
        <comment slot="comment" v-bind:item="cham" v-for="cham in chamNames"></comment>
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

    //定义插槽
    Vue.component("tit",{
        props: ['title'],
        template: '<div>{{title}}</div>'
    });

    //定义插槽
    Vue.component("comment",{
        props: ['item'],
        template: '<li>{{item}}</li>'
    });

    var vm = new Vue({
        el: "#app",
        data: {
            title: "英雄列表",
            chamNames: ['Kindred','Gnar','Neeko']
        }
    });
</script>
</body>
</html>
```
