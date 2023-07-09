//
// @/rabbit/router/category.js
// 路由设计
// createRouter 创建router实例对象
// createWebHashHistory 创建history模式的路由
//
import {createRouter, createWebHashHistory} from "vue-router";



const rabbitConstantRoutes = [
    {
        path: "/",
        component: () => import("@/views/layout/Index.vue"),
        children: [
            {
                path: '',
                component: () => import('@/views/home/Index.vue')
            },
            {
                path: 'category',
                component: () => import('@/views/category/Index.vue')
            }
        ]
    },
    {
        path: "/login",
        component: () => import("@/views/login/Index.vue")
    },
    {
        path: '/404',
        component: () => import('@/views/Page404.vue'),
        hidden: true
    },
    // 404 page must be placed at the end !!!
    {
        path: "/:catchAll(.*)", // 不识别的path自动匹配404
        redirect: '/404',
        hidden: true
    }
]
const router = new createRouter({
    routes: rabbitConstantRoutes,
    history: createWebHashHistory(import.meta.env.BASE_URL),
})
export default router