# Au_OJ
学习Vue的过程中决定自己写一个比较完整的项目，因目前有很多的电商网址或是音乐等app了，同时考虑到数据的问题，故写了一个OJ用于练手，目前只大体完成了前端部分和后端部分，判题端有待后续补充。

项目线上地址：<br>
项目前端地址：https://github.com/zhaoangus/Au_OJ<br>
项目后端地址：https://github.com/zhaoangus/Au_OJ_BE

本项目前端架构为Vue2.5 + vue-router3 + vuex + axios + stylus + webpack3.6，后端架构为Koa2 + mongodb。

## 技术选型
在前端页面时考虑过使用UI组件库，但是还是选择了全手写练手，使用了Vue全家桶作为前端架构（后期可以考虑使用React改写一遍）。
后端使用轻量的Koa框架，使用mongoose链接数据库。

## 项目预览
![图片1](https://github.com/zhaoangus/Au_OJ/blob/master/static/img/1.png)  

![图片2](https://github.com/zhaoangus/Au_OJ/blob/master/static/img/2.png)  

![图片3](https://github.com/zhaoangus/Au_OJ/blob/master/static/img/3.png)  

## 实现功能
前端主要分为消息模块、题目模块、讨论模块、状态模块、排名模块、比赛模块和管理员模块。用户分为两种：普通用户和管理员用户。普通用户可以答题、参加比赛、发帖、查看信息等，管理员可对题目、消息、比赛等拥有增删改查的权限。

+ 消息模块<br>
OJ首页，包括消息列表和消息详情页，用户进入后首先看到的消息。
+ 题目模块<br>
包括题目列表和题目详情页，详情页中分为3个tab页面，题目描述、提交、统计，后续考虑加入我的提交、编辑等页面。
+ 讨论模块<br>
讨论区。
+ 状态模块<br>
用户提交题目的判题结果（待完善）。
+ 排行模块<br>
用户排名结果。（分组功能待完善）
+ 比赛模块<br>
含有比赛列表和比赛详情页，有5个tab页面，总览、题目、提交、状态、排名，后续加入管理员编辑页面。
+ 管理员模块<br>
包括用户和组管理、创建题目、创建消息、创建比赛等几个模块。

## 前端
前端使用vue-cli构建，包括了二十多张页面。项目结构：

```
├── dist // 生成打包好的文件
│   ├── static
│   │   ├── css
│   │   ├── fonts
│   │   ├── img
│   │   └── js  
│   └── index.html
└── src
    ├── main.js // 项目入口
    ├── router // 路由文件，说明了各个路由将会使用的组件
    │   ├── index.js // router 的配置以及引用组件
    │   └── routes.js // 定义各个路由
    ├── assets // 网站 logo 图资源
    ├── components // 一些小组件
    ├── store // vuex 文件
    │   └── modules // 子模块
    ├── utils // js 工具方法
    └── views // 路由对应的组件 (这些组件在 router.js 中都被引入)
        ├── Admin
        ├── Contest
        ├── News
        └── Problem
```
前端一共有二十多张页面，为了保证首屏加载的速度，对部分路由进行懒加载。

```
const News = r => require.ensure([], () => r(require('@/views/News')), 'news')

const Descr = r => require.ensure([], () => r(require('@/views/Problem/Descr')), 'problem')
const Sub = r => require.ensure([], () => r(require('@/views/Problem/Sub')), 'problem')
const Stat = r => require.ensure([], () => r(require('@/views/Problem/Stat')), 'problem')

const DisDescr = r => require.ensure([], () => r(require('@/views/Discuss/DisDescr')), 'discuss')

const ContestDetail = r => require.ensure([], () => r(require('@/views/contest/ContestDetail')), 'contest')

const DetailOverview = r => require.ensure([], () => r(require('@/views/contest/DetailOverview')), 'detail')
const DetailProblem = r => require.ensure([], () => r(require('@/views/contest/DetailProblem')), 'detail')
const DetailSubmit = r => require.ensure([], () => r(require('@/views/contest/DetailSubmit')), 'detail')
const DetailStatus = r => require.ensure([], () => r(require('@/views/contest/DetailStatus')), 'detail')
const DetailRanklist = r => require.ensure([], () => r(require('@/views/contest/DetailRanklist')), 'detail')

const Manage = r => require.ensure([], () => r(require('@/views/admin/Manage')), 'admin')
const UserEdit = r => require.ensure([], () => r(require('@/views/admin/UserEdit')), 'admin')
const GroupEdit = r => require.ensure([], () => r(require('@/views/admin/GroupEdit')), 'admin')
const AdminEdit = r => require.ensure([], () => r(require('@/views/admin/AdminEdit')), 'admin')
const TagEdit = r => require.ensure([], () => r(require('@/views/admin/TagEdit')), 'admin')
const NewsCreate = r => require.ensure([], () => r(require('@/views/admin/NewsCreate')), 'admin')
const ProblemCreate = r => require.ensure([], () => r(require('@/views/admin/ProblemCreate')), 'admin')
const ContestCreate = r => require.ensure([], () => r(require('@/views/admin/ContestCreate')), 'admin')
```

## 后端

```
├── bin // 项目执行文件
├── models // 数据库 model
├── public // json和图片等文件
├── routes // 后端路由
├── utils // js工具函数
├── views // 后端模版
├── test // 测试
└── app.js
```

后端实用Koa2开发，项目架构使用koa-generator生成，项目主要数据保存在MongoDB中，使用mongoose连接数据库。