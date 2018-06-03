# tranvel-vue

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
## 主要技术
- vue-router的使用
- axios请求数据（本地json文件模拟）
- vuex管理
- vue awesome swiper插件构建home-header轮播图
## 一些细节
- 利用padding-bottom实现高度自适应占位，解决页面闪烁
- 在swiper.vue里修改引用的vue-awesome-swiper组件，改变其样式时在style里无效，因为使用的scope，样式只在当前组件生效，在其子组件无效，使用 >>>穿透让其在子组件里生效