// import firebase from 'firebase/app'
// import localizeFilter from '@/filters/localize.filter'

export default {
  actions: {
    /* async addAccount ({ dispatch, commit, state }, { category, name, login, pass }) { // Add new entry
      try {
        const uid = await dispatch('getUid')
        pass = state.Crypt(pass, uid)
        await firebase.database().ref(`/users/${uid}/Accounts/${category}`).push({
          name,
          login,
          pass
        })
        await dispatch('fetchInfoAccounts')
        commit('setMess', localizeFilter('Added') + ' "' + name + '"')
      } catch (e) {
        commit('setMess', localizeFilter('Error') + ' "' + e + '"')
        throw e
      }
    },
    async fetchInfoAccounts ({ dispatch, commit, state }) { // Load accounts from BD
      try {
        commit('lockUi')
        const uid = await dispatch('getUid')
        var info = (await firebase.database().ref(`/users/${uid}/Accounts/`).once('value')).val()
        info = state.deCrypt(info, uid)
        if (info == null) {
          info = {}
          commit('setMess', localizeFilter('Empty'))
          commit('activateWaveHint')
        } else {
          commit('deactivateWaveHint')
        }
        commit('setInfoAccounts', info)
        commit('unlockUi')
      } catch (e) {
        commit('setMess', localizeFilter('Error') + ' "' + e + '"')
        throw e
      }
    },
    async updateInfoAccounts ({ dispatch, commit, state }) { // Update info in BD
      try {
        const uid = await dispatch('getUid')
        await firebase.database().ref(`/users/${uid}/Accounts/`).set(
          state.arrayCrypt(state.account_data, uid)
        )
        state.deCrypt(state.account_data, uid)
        commit('setMess', localizeFilter('Saved'))
      } catch (e) {
        commit('setMess', localizeFilter('Error') + ' "' + e + '"')
        throw e
      }
    },
    async removeAccount ({ dispatch, commit }, data) { // Remove entry in BD
      try {
        const uid = await dispatch('getUid')
        await firebase.database().ref(`/users/${uid}/Accounts/${data.category}/${data.id}`).remove()
        await dispatch('fetchInfoAccounts')
        commit('setMess', localizeFilter('Removed'))
      } catch (e) {
        commit('setMess', localizeFilter('Error') + ' "' + e + '"')
        throw e
      }
    } */
  },
  mutations: {
    /* addEntry (state, value) {
      state.account_data = [
        ...state.account_data,
        value
      ]
    },
    removeEntry (state, id) {
      state.account_data.splice(id, 1)
    },
    setInfoAccounts (state, info) {
      state.account_data = info
    },
    clearInfoAccs (state) {
      state.account_data = {}
    } */

    setLocale (state, value) {
      state.account_data.locale = value.value.id
      state.account_data.title = value.value.title
    },
    setInfo (state, info) {
      state.account_data = info
    },
    clearInfo (state) {
      state.account_data = {
        name: 'None',
        age: 0,
        bonus: 0,
        locale: 'en-US',
        title: 'English'
      }
    }
  },
  state: {
    account_data: {
      name: 'SomeName',
      age: 23,
      bonus: 123,
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
