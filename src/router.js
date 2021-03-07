import Vue from 'vue'
import Router from 'vue-router'
import Register from './views/Register.vue'
Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'main',
            redirect: '/login'
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/login',
            name: 'login',
            component: () =>
                import ('./views/Login.vue')
        },
        {
            path: '/index',
            name: 'index',
            component: () =>
                import ('./views/Index.vue')
        },
        {
            path: '/botnav',
            name: 'botnav',
            component: () =>
                import ('./views/Botnav.vue'),
            children: [{
                    path: 'index',
                    name: 'botnav-index',
                    component: () =>
                        import ('./views/Index.vue')
                },
                {
                    path: 'list',
                    name: 'list',
                    component: () =>
                        import ('./views/List.vue')
                },
                {
                    path: 'cart',
                    name: 'cart',
                    meta: {
                        requireAuth: true,
                    },
                    component: () =>
                        import ('./views/Cart.vue')
                },
                {
                    path: 'mine',
                    name: 'mine',
                    meta: {
                        requireAuth: true,
                    },
                    component: () =>
                        import ('./views/Mine.vue')
                },
            ]
        },
    ]
})