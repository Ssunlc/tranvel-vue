<template>
    <div class="header">
        <div class="header-left"> <span class="iconfont back-icon">&#xe624</span></div>
        <div class="header-input"><span class="iconfont">&#xe632</span>输入城市/景点</div>
        <div class="header-right">城市<span class="iconfont">&#xe64a</span></div>
    </div>
</template>
<script>
export default{
  name: 'HomeHeader'
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
         width: 1.24rem
         float: right 
         text-align :center
</style>
