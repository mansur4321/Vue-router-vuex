import Vue from 'vue';
import VueRouter from 'vue-router';
import Analytics from './pages/Analytics';
import Authorization from './pages/Authorization';

Vue.use(VueRouter);

const routers = [
    {
        path: '/',
        component: Authorization,
    },

    {
        path: '/analytics',
        component: Analytics,
    },
]

export default new VueRouter({
    mode: 'history',
    routers,
})