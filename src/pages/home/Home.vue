<template>
    <div>
       <home-header ></home-header>
       <home-swiper :list='swiperList' ></home-swiper>
       <home-icons :iconList='iconList' ></home-icons>
       <home-recommend :list="recommendList"></home-recommend>
    </div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import axios from 'axios'
export default{
    name: 'Home',
    data () {
        return {
            swiperList : [],
            iconList : [],
            recommendList : []
        }
    },
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend
    },
    methods:{
        getHomeInfo () {
            axios.get('/static/mock/index.json')
            .then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc (res) {
            var res = res.data;
            this.swiperList = res.data.swiperList;
            this.iconList = res.data.iconList;
            this.recommendList = res.data.recommendList
        }
    },
    mounted () {
        this.getHomeInfo()
    }
}
</script>
<style lang="stylus" scoped>

</style>

