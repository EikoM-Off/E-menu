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
    }
  },
  mutations: {
    addEntry (state, value) {
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
  },
  state: {
    /* account_data: {},
    Crypt: function (data, key) { // Зашифровать строку
      var aes = new pidCrypt.AES.CBC()

      return aes.encryptText(data, key)
    },
    deCrypt: function (data, key) { // Рассшифровать пароли
      var aes = new pidCrypt.AES.CBC()

      for (var category in data) {
        for (var password in data[category]) {
          data[category][password].pass = aes.decryptText(data[category][password].pass, key)
        }
      }
      return data
    },
    arrayCrypt: function (data, key) { // Зашифровать пароли
      var aes = new pidCrypt.AES.CBC()

      for (var category in data) {
        for (var password in data[category]) {
          data[category][password].pass = aes.encryptText(data[category][password].pass, key)
        }
      }
      return data
    } */
  },
  getters: {
    /* getAccData (state) {
      return state.account_data
    },
    getCountAccData (state) {
      var info = state.account_data
      var data = []
      var i = 0; var j = 0
      for (var category in info) {
        j = 0
        i++
        for (var password in info[category]) {
          info[category][password] = state.account_data[category][password]
          j++
          data[i - 1] = j
        }
      }
      return data
    } */
  }
}
