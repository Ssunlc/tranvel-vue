<template>
    <div class="icons">
        <figure class="icon" v-for='item in iconList' :key='item.id' >
            <div class="icon-img">
                <img class="icon-img-content" :src= 'item.imgUrl' >
            </div>
            <p class="icon-desc">{{item.desc}}</p>
        </figure>
    </div>
</template>
<script>
    export default {
        name:'HomeIcons',
        props : {
            list : Array,
            iconList : Array
        }
    }
</script>
<style lang="stylus" scoped>
    @import '../../../assets/styles/varibles.styl'
    .icons
        weight 100%
        height 0
        overflow hidden
        padding-bottom 50%
        .icon
            position relative
            width 25%
            height 0
            float left
            overflow hidden
            padding-bottom 25%
            .icon-img 
                position absolute 
                top 0
                left 0
                right 0
                bottom .44rem
                padding .1rem
                box-sizing border-box
                .icon-img-content
                    display block
                    margin 0 auto
                    height 100%
            .icon-desc
                position absolute 
                left 0
                right 0
                bottom 0
                height .44rem
                line-height .44rem
                text-align center
                color $darkTextColor
</style>
