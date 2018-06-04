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
- vuex数据共享和管理
- vue awesome swiper插件构建home-header轮播图

## 一些细节
- 利用padding-bottom实现高度自适应占位，解决页面闪烁
- 在swiper.vue里修改引用的vue-awesome-swiper组件样式，改变其样式时在style里无效，因为使用的scope，样式只在当前组件生效，在其子组件无效，使用 >>>穿透让其在子组件里生效
- better-scroll模拟移动端滚动条   
npm i better-scroll   
import Bscroll = 'better-scroll'  
this.scroll = Bscroll.$refs.wrapper挂载在mounted生命周期函数里     
- 兄弟组件间通信     
1.子组件通过$emmit触发事件传递给父组件，父组件再以绑定属性的方式把数据传递给其他子组件       
2.创建公共实例bus的方式进行不太复杂的数据传递
- 使用scroll事件的scrollToElement()方法进行页面视口区域的“跳转”
这里在给v-for列表渲染的li绑定ref，再用$refs拿到时其实他会变成一个数组，而不是单一的dom string，可使用[0]取值的方式拿到
## 截图
![photoShow](https://github.com/Ssunlc/tranvel-vue/raw/master/pictureShow/1.png)
![photoShow](https://github.com/Ssunlc/tranvel-vue/raw/master/pictureShow/2.png)
![photoShow](https://github.com/Ssunlc/tranvel-vue/raw/master/pictureShow/3.png)
