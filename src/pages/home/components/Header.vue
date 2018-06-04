<template>
    <div class="header">
        <div class="header-left"> <span class="iconfont back-icon">&#xe624</span></div>
        <div class="header-input"><span class="iconfont">&#xe632</span>输入城市/景点</div>
        <router-link to='/city' >
            <div class="header-right">
                {{this.$store.state.city}}
                <span class="iconfont">&#xe64a</span>
            </div>
        </router-link>
    </div>
</template>
<script>
export default{
  name: 'HomeHeader',
}
</script>
<style lang="stylus" scoped>
   .header
      display: flex
      line-height: .86rem
      background :#00bcd4
      color:#fff
      .header-left
         width: .64rem
         float: left
         .back-icon
           font-size .4rem
           text-align center
           display block
      .header-input
         flex: 1
         background #fff
         margin-top .12rem
         border-radius .1rem
         margin-left .2rem
         height .64rem
         line-height .64rem
         color #ccc
         padding-left .2rem 
      .header-right
         min-width: 1.04rem
         padding .1rem
         float: right 
         text-align :center
         color #fff
</style>
