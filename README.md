# Learn_VUE
学习VUE

### MVVM模式的实现者
- Model：模型层，这里表示JavaScript对象
- View：视图层，这里表示DOM(HTML操作的元素)
- ViewModel：连接视图和数据的中间件，Vue.js就是MVVM中的ViewModel层的实现者
```bash
ViewModel 能够观察到数据的变化，并对视图对应的内容进行更新
ViewModel 能够监听到视图的变化，并能够通知数据发生改变
```

### 初试vue
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Vue</title>
</head>
<body>

<!-- View层 模板 -->
<div id="app">
    {{message}}
</div>
<div id="app2">
    {{message}}
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
### vue 属性
- el属性
  - 用来指示vue编译器从什么地方开始解析 vue的语法，可以说是一个占位符
- data属性
  - 用来组织从view中抽象出来的属性，可以说将视图的数据抽象出来存放在data中
- template属性
  - 用来设置模板，会替换页面元素，包括占位符
- methods属性
  - 放置页面中的业务逻辑，js方法一般都放置在methods中
- render属性
  - 创建真正的Virtual Dom
- computed属性
  - 用来计算
- watch属性
  - watch:function(new,old){}
  - 监听data中数据的变化
  - 两个参数，一个返回新值，一个返回旧值

### Vue 模板闪烁问题解决思路 v-clock
```html
<!DOCTYPE html>
<html lang="en" xmlns:v-bind="http://www.w3.org/1999/xhtml" xmlns:v-on="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="UTF-8">
    <title>Vue</title>

    <!-- v-clock:解决闪烁问题 -->
    <style>
        [v-clock]{
            display: none;
        }
    </style>

</head>
<body>

<!-- View层 模板 -->
<div id="app" v-clock>
    <div>
        {{info.name}}
        {{info.links[1].url}}
    </div>
</div>
</body>
```
