export default {
  namespaced: true,
  state: {
    demo: {}
  },
  mutations: {
    setDemo (state, demo) {
      state.demo = demo
    }
  },
  actions: {
    async getDemo ({ commit }, { test }) {
      if (!test) {
        commit('setDemo', {})
      }
      commit('setDemo', { test })
    }
  }
}