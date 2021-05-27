import Vue from 'vue'
import Vuex from 'vuex'
import order from './modules/order'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        name: 'Tarzan',
        // 当前打开的路由
        curRoute: {},
        // 当前打开的标签页
        curTabs: [],
    },
    mutations: {
        setName(state, v) {
            state.name = v
        },
        setCurRoute(state, v) {
            state.curRoute = v
        },
        setCurTabs(state, v) {
            state.curTabs = v
        },
    },
    modules: {
        order,
        // 或者你想要重命名
        // myorder: order
    }
})
