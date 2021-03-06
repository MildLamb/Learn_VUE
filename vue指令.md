### v-bind 给组件绑定参数，简写:
```html
<!DOCTYPE html>
<html lang="en" xmlns:v-bind="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="UTF-8">
    <title>Vue</title>
</head>
<body>

<!-- View层 模板 -->
<div id="app">
    <span v-bind:title="message">
        鼠标悬停几秒后查看此处动态绑定的提示信息
    </span>
</div>

<!-- 导入Vue -->
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script>
    var vm = new Vue({
        el:"#app",
        //Model 数据
        data:{
            message:"hello,vue!"
        }
    });
</script>
</body>
</html>
```

### v-if/v-else-if/v-else 判断
```html
<!DOCTYPE html>
<html lang="en" xmlns:v-bind="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="UTF-8">
    <title>Vue</title>
</head>
<body>

<!-- View层 模板 -->
<div id="app">
    <h1 v-if="type === 'A'">A</h1>
    <h1 v-else-if="type === 'B'">B</h1>
    <h1 v-else-if="type === 'C'">C</h1>
    <h1 v-else>D</h1>
</div>

<!-- 导入Vue -->
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script>
    var vm = new Vue({
        el:"#app",
        data: {
            type: "B"
        }
    });
</script>
</body>
</html>
```
### v-for 遍历
```html
<!DOCTYPE html>
<html lang="en" xmlns:v-bind="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="UTF-8">
    <title>Vue</title>
</head>
<body>

<!-- View层 模板 -->
<div id="app">
    <li v-for="(champion,count) in champions">
        {{champion.name}} -- {{count + 1}}
    </li>
</div>

<!-- 导入Vue -->
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script>
    var vm = new Vue({
        el:"#app",
        data: {
            champions: [
                {name: "kindred"},
                {name: "gnar"},
                {name: "neeko"}
            ]
        }
    });
</script>
</body>
</html>
```
### v-on 绑定事件和方法,简写@ 
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
    <button v-on:click="sayHi">click it</button>
</div>

<!-- 导入Vue -->
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script>
    var vm = new Vue({
        el:"#app",
        data: {
            message: "永猎双子 -- 千珏"
        },
        methods: {  //方法必须定义在Vue 的 methods 对象中
            sayHi: function () {
                alert(this.message)
            }
        },
    });
</script>
</body>
</html>
```
- v-model 数据双向绑定
```html
<!DOCTYPE html>
<html lang="en" xmlns:v-bind="http://www.w3.org/1999/xhtml" xmlns:v-on="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="UTF-8">
    <title>Vue</title>
</head>
<body>

<!-- View层 模板 -->
<!-- v-model数据双向绑定 -->
<!-- 文本数据绑定 -->
<div id="app">
    输入的文本: <input type="text" v-model="inputText"> {{inputText}}
    <textarea v-model="inputText"></textarea>{{inputText}}
</div>

<!-- 当选框数据绑定 -->
<div id="app2">
    性别:
    <input type="radio" name="sex" value="男" v-model="gender"> 男
    <input type="radio" name="sex" value="女" v-model="gender"> 女
    选的是 ： {{gender}}
</div>


<!-- 下拉列表数据绑定 -->
<div id="app3">
    选择你的英雄:
    <select v-model="champion">
        <option value="">--请选择--</option>
        <option value="neeko">妮蔻</option>
        <option value="gnar">纳尔</option>
        <option value="kindred" selected>千珏</option>
    </select>
    你选择了: {{champion}}
</div>

<!-- 导入Vue -->
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script>
    var vm = new Vue({
        el:"#app",
        data: {
            inputText: "neeko"
        }
    });

    var vm2 = new Vue({
        el: "#app2",
        data: {
            gender: ""
        }
    });

    var vm2 = new Vue({
        el: "#app3",
        data: {
            champion: "",
        }
    });
</script>
</body>
</html>
```
### Vue.component Vue组件
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
    <kindred v-for="cham in heroes" v-bind:hero="cham"></kindred>
</div>

<!-- 导入Vue -->
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script>
    //定义一个Vue组件
    Vue.component("kindred",{
        props: ['hero'],
        template: "<li>{{hero}}</li>"
    });

    var vm = new Vue({
        el: "#app",
        data: {
            heroes: ["永猎双子","迷失之牙","万花通灵"]
        }
    });
</script>
</body>
</html> 
```
```bash
<kindred v-for="cham in heroes" v-bind:hero="cham"></kindred>
- v-for="cham in heroes":遍历Vue实例中定义的名为heroes的数组，并创建同等数量的组件

- v-bind:hero="cham"：将遍历出来的结过项cham，绑定到组件中props定义的名为hero的属性上
= 左边为props绑定的属性名 ，= 右边为 绑定遍历出来的每一项的数据项
```
