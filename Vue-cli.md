- 下载node.js  
[http://nodejs.cn/download/](node.js下载)
- 下载淘宝镜像加速
```shell
npm install cnpm -g
```
- 安装vue-cli
```shell
cnpm install vue-cli -g
```
- 安装好vue-cli后可以使用vue list命令查看可以用哪些方式创建vue项目
```shell
vue list
```
- 创建一个vue项目
```shell
C:\Code_Study\IDEA\Vue-Study>vue init webpack myvue

? Project name myvue
? Project description My_First_VueCli
? Author MildLamb
? Vue build standalone
? Install vue-router? No
? Use ESLint to lint your code? No
? Set up unit tests No
? Setup e2e tests with Nightwatch? No
? Should we run `npm install` for you after the project has been created? (recommended) no
```
- 创建完成后进入项目 安装环境 运行
```shell
C:\Code_Study\IDEA\Vue-Study>cd myvue

C:\Code_Study\IDEA\Vue-Study\myvue>npm install

npm run dev
```
- ctrl+c 退出
