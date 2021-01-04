// import firebase from 'firebase/app'
// import localizeFilter from '@/filters/localize.filter'

export default {
  actions: {
  /* async login ({ commit }, { email, password }) { // логин
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
      } catch (e) {
        commit('setMess', e)
        throw e
      }
    },
    async register ({ dispatch, commit }, { email, password, name }) { // регистрация
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        const uid = await dispatch('getUid')
        await firebase.database().ref(`/users/${uid}/info`).set({
          name,
          email,
          locale: 'en-US',
          title: 'English'
        })
      } catch (e) {
        commit('setMess', e)
        throw e
      }
    },
    getUid () { // получаем ид пользователя
      const user = firebase.auth().currentUser
      return user ? user.uid : null
    },
    async logout ({ commit }) { // логаут
      await firebase.auth().signOut()
      commit('clearInfo')
      commit('clearInfoAccs')
    },
    async changePassword ({ commit }) { // отправляем запрос на смену пароля
      var auth = firebase.auth()
      var emailAddress = firebase.auth().currentUser.email

      auth.sendPasswordResetEmail(emailAddress).then(function () {
        commit('setMess', localizeFilter('password_change_email'))
      }).catch(function (error) {
        commit('setMess', error)
      })
    } */
  }
}
