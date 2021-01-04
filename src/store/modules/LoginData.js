// import firebase from 'firebase/app'

export default {
  actions: {
    /* async fetchInfo ({ dispatch, commit }) { // Load info from BD
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
          state.login_data
        )
      } catch (e) {
        commit('setError', e)
        throw e
      }
    } */
  },
  mutations: {
    /* setLocale (state, value) {
      state.login_data.locale = value.value.id
      state.login_data.title = value.value.title
    },
    setInfo (state, info) {
      state.login_data = info
    },
    clearInfo (state) {
      state.login_data = {
        name: 'None',
        email: 'none@mail.none',
        locale: 'en-US',
        title: 'English'
      }
    } */
  },
  state: {
    /* login_data:
       {
         name: 'None',
         email: 'none@mail.none',
         locale: 'en-US',
         title: 'English'
       } */
  },
  getters: {
    /* getLoginData (state) {
      return state.login_data
    } */
  }

}
