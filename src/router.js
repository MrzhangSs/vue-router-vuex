import Vue from 'vue'
import VueRouter from 'vue-router'



import first from "./components/first.vue"
import second from "./components/second.vue"

Vue.use(VueRouter)
const routes = [
    { path:'/', component: first },
    { path:'/second', component: second }
]

export default new VueRouter({
    routes
})