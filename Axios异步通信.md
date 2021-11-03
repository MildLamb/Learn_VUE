## 使用
- 测试数据 data.json
```json
{
  "name": "Kindred",
  "url": "http://gnardada.com/",
  "page": 1,
  "isNonProfit": true,
  "address": {
    "street": "大街",
    "city": "郴州",
    "country": "中国"
  },
  "links": [
    {
      "name": "bilibili",
      "url": "www.bilibili.com"
    },
    {
      "name": "baidu",
      "url": "www.baidu.com"
    }
  ]
}
```

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
    {{message}}
</div>

<!-- 导入Vue -->
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
    var vm = new Vue({
        el: "#app",
        mounted(){  //钩子函数 链式编程
            axios.get('../data.json').then(response => (console.log(response.data)))
        }
    });
</script>
</body>
</html>
```
