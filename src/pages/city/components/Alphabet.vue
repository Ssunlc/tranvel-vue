<template>
    <ul class="list">
        <li class="item" v-for='(item,key) in cities' :key='key'>{{key}}</li>
    </ul>
</template>
<script>
    export default {
        name:'CityAlphabet',
        props:{
            cities:Object
        }
    }
</script>
<style lang="stylus" scoped>
    @import '../../../assets/styles/varibles.styl'
    .list
        display flex
        flex-direction column
        justify-content center
        position absolute 
        top 1.58rem
        bottom 0
        right 0
        width .4rem
        .item
            color $bgColor
            text-align center
            line-height .44rem
</style>
