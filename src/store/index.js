import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
let defaultCity = "上海"
try {
    if (localStorage.city) {
        defaultCity = localStorage.city
    }
} catch (e) {

}

export default new Vuex.Store({
    state: {
        city: defaultCity
    },
    actions: {
        changeCity(ctx, city) {
            ctx.commit('changeCityM', city)
        }
    },
    mutations: {
        changeCityM(state, city) {
            state.city = city;
            try {
                localStorage.city = city;
            } catch (e) {}
        }
    }
})