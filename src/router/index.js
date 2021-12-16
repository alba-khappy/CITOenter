import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'sections',
        component: () => import("../pages/sections.vue")
    },
    {
        path: '/news',
        name: 'news',
        component: () => import("../pages/news.vue")
    },
    {
        path: '/allNews',
        name: 'allNews',
        component: () => import("../pages/allNews.vue")
    },
    {
        path: '/search',
        name: 'search',
        component: () => import("../pages/search.vue")
    },
    {
        path: '/user',
        name: 'user',
        component: () => import("../pages/user.vue")
    },
    {
        path: '/rules',
        name: 'rules',
        component: () => import("../pages/rules.vue")
    },
    {
        path: '/directions',
        name: 'directions',
        component: () => import("../pages/directions.vue")
    },
    {
        path: '/directionsWithParameter',
        name: 'directionsWithParameter',
        component: () => import("../pages/directionsWithParameter.vue")
    },
    {
        path: '/profile',
        name: 'profile',
        component: () => import("../pages/profile.vue")
    },
    {
        path: '/chosenDirection',
        name: 'chosenDirection',
        component: () => import("../pages/chosenDirection.vue")
    },
    {
        path: '/compare',
        name: 'compare',
        component: () => import("../pages/compare.vue")
    },
    {
        path: '/searchOptions',
        name: 'searchOptions',
        component: () => import("../pages/searchOptions.vue")
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
  })
  
  export default router