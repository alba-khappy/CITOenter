import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'authorization',
        component: () => import("../pages/authorization.vue")
    },
    {
        path: '/users-1',
        name: 'users-1',
        component: () => import("../pages/users-1.vue")
    },
    {
        path: '/users-2',
        name: 'users-2',
        component: () => import("../pages/users-2.vue")
    },
    
]

const router = new VueRouter({
    mode: 'history',
    routes
  })
  
  export default router