import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#274959', // #E53935
                secondary: '#4c6c7c', // #FFCDD2
                accent: '#385F73', // #3F51B5
            },
        },
    },
})
