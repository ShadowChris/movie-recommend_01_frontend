import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "@/views/Login";
import Register from "@/views/Register";

import HomeInform from "@/views/Home";

import AdminDetails from "@/views/sample/AdminDetails";

import OldManInfo from "@/views/sample/OldManInfo";
import OldManAdd from "@/views/sample/OldManAdd";
import OldManDetails from "@/views/sample/OldManDetails";

import Test from "@/views/Test"

Vue.use(VueRouter)

const routes = [

    {
        path: '/',
        name: 'HomeInform',
        component: HomeInform
    },
    {
        path: '/HomeInform',
        name: 'HomeInform',
        component: HomeInform
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        //单个路由守卫，如果已经获取了session信息，访问登录界面就直接进入主界面
        beforeEnter: (to, from, next) => {
            if(sessionStorage.getItem("user") != null) {
                next("HomeInform")
            } else {
                next()
            }
        }
    },
    {
        path: '/Register',
        name: 'Register',
        component: Register,
        beforeEnter: (to, from, next) => {
            if(sessionStorage.getItem("user") != null) {
                next("HomeInform")
            } else {
                next()
            }
        }
    },
    {
        path: '/AdminDetails',
        name: 'AdminDetails',
        component: AdminDetails
    },

    {
        path: '/OldManInfo',
        name: 'OldManInfo',
        component: OldManInfo
    },
    {
        path: '/OldManDetails/:id',
        name: 'OldManDetails',
        component: OldManDetails
    },
    {
        path: '/OldManAdd',
        name: 'OldManAdd',
        component: OldManAdd
    },
    {
        path: '/Test',
        name: 'Test',
        component: Test
    }

]


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

//路由全局守卫
// router.beforeEach((to, from, next) => {
//     if( (to.name !== 'Register' && to.name !== 'Login') && sessionStorage.getItem("user") == null) {
//
//         // alert(to.name)
//         next("Login")
//     } else {
//         next()
//     }
//
// });

export default router
