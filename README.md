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
