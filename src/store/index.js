import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import Preloader from './modules/Preloader'
import Notice from './modules/Message'
import CafeData from './modules/CafeData'
import AccountData from './modules/AccountData'
import Menu from './modules/Menu'
import Order from './modules/Order'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: null
  },
  mutations: {
    setError (state, error) {
      state.error = error
    },
    clearError (state) {
      state.error = null
    }
  },
  getters: {
    error: s => s.error
  },
  modules: {
    auth, Preloader, Notice, CafeData, AccountData, Menu, Order
  }
})
