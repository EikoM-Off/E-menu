import Vue from 'vue'
import Vuex from 'vuex'
import AccountData from './modules/AccountData'
import LoginData from './modules/LoginData'
import auth from './modules/auth'
import Preloader from './modules/Preloader'
import Notice from './modules/Message'

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
    AccountData, LoginData, auth, Preloader, Notice
  }
})
