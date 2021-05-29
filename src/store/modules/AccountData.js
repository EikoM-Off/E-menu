import firebase from 'firebase/app'
// import localizeFilter from '@/filters/localize.filter'

export default {
  actions: {
    async fetchInfo ({ dispatch, commit }) { // Load info from BD
      try {
        commit('lockUi')
        const uid = await dispatch('getUid')
        const info = (await firebase.database().ref(`/users/${uid}/info/`).once('value')).val()
        commit('setInfo', info)
        commit('unlockUi')
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    async updatefetchInfo ({ dispatch, commit, state }) { // Update info from BD
      try {
        const uid = await dispatch('getUid')
        await firebase.database().ref(`/users/${uid}/info/`).set(
          state.account_data
        )
      } catch (e) {
        commit('setError', e)
        throw e
      }
    }
  },
  mutations: {
    setLocale (state, value) {
      state.account_data.locale = value.value.id
      state.account_data.title = value.value.title
    },
    setInfo (state, info) {
      state.account_data = info
    },
    clearInfo (state) {
      state.account_data = {
        name: 'Guest',
        age: 0,
        bonus: 0,
        locale: 'ru-RU',
        title: 'Русский'
      }
    }
  },
  state: {
    account_data: {
      name: 'Guest',
      age: 0,
      bonus: 0,
      locale: 'ru-RU',
      title: 'Русский'
    }
  },
  getters: {
    getAccountData (state) {
      return state.account_data
    }
  }
}
