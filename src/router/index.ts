// 使用 vue-router 配置路由
import {createRouter, createWebHistory, Router} from 'vue-router'

let router: Router = createRouter({
        // 路由模式 History
        history: createWebHistory(),
        routes: [
            {
                path: '/',
                name: 'login_route',
                component: () => import('../views/Login/index.vue')
            },
        ]
    })
;


export default router