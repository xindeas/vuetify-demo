import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n)
const i18n = new VueI18n({
    // 语言标识
    locale: 'en',
    // 通过切换locale的值来实现语言切换
    messages: {
        'zh': require('@/i18n/lang-zh'),
        'en': require('@/i18n/lang-en')
    }
})
export default i18n
