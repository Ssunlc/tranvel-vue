<template>
    <div>
        <city-header></city-header>
        <city-search :cities="cities" ></city-search>
        <city-list :hot='hotCities' :cities='cities' :letter='letter' ></city-list>
        <city-alphabet :cities='cities'  @change='hanleLetterchange' ></city-alphabet>
    </div>
</template>
<script>
    import axios from 'axios'
    import CityHeader from './components/Header'
    import CitySearch from './components/Search'
    import CityList from './components/List'
    import CityAlphabet from './components/Alphabet'
    export default {
        name:'City',
        data () {
            return {
                hotCities:[],
                cities:{},
                letter: ''
            }
        },
        components: {
            CityHeader,
            CitySearch,
            CityList,
            CityAlphabet
        },
        methods: {
            getCityInfo () {
                axios.get('/static/mock/city.json')
                .then(this.getCityInfoSucc)
            },
            getCityInfoSucc (res) {
                var res = res.data;
                this.hotCities = res.data.hotCities;
                this.cities = res.data.cities;
            },
            hanleLetterchange (letter) {
                this.letter = letter;
            }
        },
        mounted () {
            this.getCityInfo()
            }
    }
</script>
<style lang="stylus" scoped>

</style>
