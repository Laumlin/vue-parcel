import Vue from 'vue'
import Vuex from 'vuex'
import modules from './module/index.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules,
  mutations: {}
})
export default store