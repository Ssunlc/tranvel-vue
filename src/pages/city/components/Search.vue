<template>
    <div>
        <div class="search">
            <input type="text" class="search-input" placeholder="请输入城市名或拼音"  v-model="keyword" >
        </div>
        <div class="search-content" v-show="keyword" >
            <ul>
                <li  
                    class="search-item border-bottom" 
                    v-for="item in list" 
                    :key="item.id" 
                    @click="handleCityClick(item.name)"
                >
                {{item.name}}</li>
                <li class="search-item border-bottom" v-show="!list.length" >没有找到匹配数据</li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'CitySearch',
        props: {
            cities: Object
        },
        data () {
            return {
                keyword: '',
                list:[],
                timer:null
            }
        },
        watch: {
            keyword () {
                if(this.timer) {
                    clearTimeout(this.timer)
                }
                if (!this.keyword) {
                    this.list = [];
                    return
                }
                this.timer = setTimeout( () => {
                    const result = [];
                    for (let i in this.cities){
                        this.cities[i].forEach((value) => {
                            if(value.spell.indexOf(this.keyword)>-1 || value.name.indexOf(this.keyword) > -1 ){
                                result.push(value)
                            }
                        });
                    }
                    this.list = result;
                },100 )
            }
        },
        methods: {
            handleCityClick (city) {
            this.$store.dispatch('changeCity',city);
            this.$router.push('/')
        }
        }
    }
</script>
<style lang="stylus" scoped>
    @import '../../../assets/styles/varibles.styl'
    .search
        height .72rem
        padding 0 .1rem
        background $bgColor
        .search-input
            width 100%
            height .62rem
            line-height .62rem
            text-align center
            border-radius .006rem
            color #666
    .search-content
        overflow hidden
        z-index 1
        position absolute 
        top 1.58rem
        left 0
        right 0
        bottom 0
        background #eee
        .search-item
            padding-left .2rem
            line-height .62rem
            color #666
            background #fff
            
</style>

