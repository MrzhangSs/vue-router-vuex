import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        first : 10,
        second: 0
    },
    mutations:{
        increment(state){
            state.second++
        },
        reduce(state){
            state.first--;
            if(state.first == 0){
                var r = confirm("确定的话我就变成100给你看，牛逼你就点")
                if(r == true){
                    state.first = 100
                } else {
                    state.first = 10
                }
            }
        }
    }
}) 