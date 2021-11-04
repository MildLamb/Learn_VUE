# webpack使用
- 安装
```shell
npm install webpack -g
npm install webpack-cli -g
```
- 配置
  - 创建webpack.config.js配置文件
    - entry:入口文件，指定Webpack用哪个文件作为入口项
    - output:输出，指定Webpack把处理完成的文件放置到指定路径
    - module:模块，用于处理各种类型的文件
    - plugins:插件，如：热更新，代码重用等
    - resolve:设置路径指向
    - watch:监听，用于设置文件改动后直接打包

- 使用webpack
打包命令
```shell
webpack
```
