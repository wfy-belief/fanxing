export const default_routes = [
    {
        path: '/',
        children: [


            {
                path: '',
                name: 'login_route',
                meta: {
                    keepAlive: true,
                    title: '登录'
                },
                component: () => import('../views/Login/index.vue')
            }

        ]
    }
]