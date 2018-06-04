<template>
    <div class="wrapper">
        <swiper :options="swiperOption" v-if='list.length' >
        <!-- slides -->
        <swiper-slide v-for="swiper in list" :key="swiper.id" >
            <img :src="swiper.imgUrl" class="swiper-img">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"> </div>
    </swiper>
  </div>
</template>
<script>
export default {
    name :'HomeSwiper',
    data () {
        return {
            swiperOption: {
                pagination : '.swiper-pagination',
                loop : true
            },
        }
    },
    props : {
        list : Array,
        required :true
    }
}  
</script>
<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active
        background #fff
    .wrapper
        width 100%
        height 0
        padding-bottom 31.25%
        overflow hidden
        .swiper-img
            width: 100%
</style>
