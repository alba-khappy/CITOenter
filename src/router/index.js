import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'authorization',
        component: () => import("../pages/authorization.vue")
    },
    
]

const router = new VueRouter({
    mode: 'history',
    routes
  })
  
  export default router