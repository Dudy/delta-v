import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
        path: '/',
        component: () => import('./components/Main.vue'),
        children: [
            {
                path: '',
                redirect: 'rockets'
            },
            {
                path: 'rockets',
                name: 'Rockets',
                component: () => import('./components/Rockets.vue'),
                children: [
                    {
                        path: 'deltav',
                        name: 'Delta-v',
                        component: () => import('./components/rockets/DeltaV.vue')
                    }, {
                        path: 'rocketengine',
                        name: 'Rocket Engine',
                        component: () => import('./components/rockets/RocketEngine.vue')
                    }
                ]
            }, {
                path: 'credits',
                name: 'Credits',
                component: () => import('./components/Credits.vue')
            }, {
                path: 'research',
                name: 'Research',
                component: () => import('./components/Research.vue')
            }
        ]
    }]
})

export default router
