import Vue from 'vue'
import Vuex from 'vuex'
import demo from './module/demo.js'

Vue.use(Vuex)
const modules = {
	demo
}
export default new Vuex.Store({
	modules
})	