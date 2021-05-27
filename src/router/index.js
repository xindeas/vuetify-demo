import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../layout/index.vue'
import store from '@/store'
import i18n from '@/i18n'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: '/',
                name: 'Home',
                meta: {
                    title: 'menu.home'
                },
                component: Home,
            },
            {
                path: '/Setting',
                name: 'Setting',
                meta: {
                    title: 'menu.setting'
                },
                component: () => import('../views/Setting.vue')
            },
            {
                path: '/1',
                name: 'Test1',
                meta: {
                    title: 'menu.test1'
                },
                component: () => import('../views/About.vue')
            },
        ]
    },
    {
        path: '/about',
        name: 'About',
        meta: {
            title: 'menu.about'
        },
        component: () => import('../views/About.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    initLang();
    store.commit('setCurRoute', to);
    addTabs(to);
    next()
})

function addTabs(to) {
    const curTabs = store.state.curTabs;
    const index = curTabs.findIndex(item => item.path === to.path);
    if (index >= 0) {
        curTabs.splice(index, 1, to);
        store.commit('setCurTabs', curTabs);
    } else {
        curTabs.push(to);
        store.commit('setCurTabs', curTabs);
    }
}

function initLang() {
    const lang = sessionStorage.getItem('lang');
    if (!lang) {
        sessionStorage.setItem('lang', 'en');
    } else {
        i18n.locale = lang;
    }
}


export default router
