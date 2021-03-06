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
- 测试 html
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
    <div>
        {{info.name}}
        {{info.links[1].url}}
    </div>
</div>

<!-- 导入Vue -->
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<!--* data 是全局的，在大项目中容易污染数据 * 将data封装成一个函数，我们在实例化组件的时候只是调用了这个函数生成的数据副本，避免了数据污染-->
<script>
    var vm = new Vue({
        el: "#app",
        data(){
          return{
              //请求的返回参数格式，必须要和json字符串一样
              info: {
                  name: null,
                  url: null,
                  address: {
                      street: null,
                      city: null,
                      country: null
                  },
                  links: [
                      {
                          name: null,
                          url: null
                      }
                  ]
              }
          }
        },
        mounted(){  //钩子函数 链式编程
            axios.get('../data.json').then(response => (this.info = response.data))
        }
    });
</script>
</body>
</html>
```
