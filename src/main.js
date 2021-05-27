import Vue from 'vue'
import VueCookies from 'vue-cookies'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import store from './store'
import vuetify from './plugins/vuetify'
import '@/assets/index.css'

Vue.config.productionTip = false

Vue.use(VueCookies)
// 重写路由入栈方法
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
new Vue({
    router,
    store,
    i18n,
    vuetify,
    render: h => h(App)
}).$mount('#app')
