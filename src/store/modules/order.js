const order = {
    namespaced: true,
    state: {
        name: 'order'
    },
    getters: {
        lowerName(state) {
            return (state.name || '').toLowerCase()
        }
    },
    mutations: {
        setName(state, v) {
            state.name = v
        }
    },
    actions: {
        setNameAction(context, v) {
            context.commit('setName', v)
        }
    },
}
export default order
