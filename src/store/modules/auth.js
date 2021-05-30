import firebase from 'firebase/app'
import localizeFilter from '@/filters/localize.filter'

export default {
  actions: {
    async login ({ commit, dispatch }, { email, password }) { // логин
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
        await dispatch('fetchInfo')
        commit('setMess', localizeFilter('Logged'))
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
          age: 0,
          bonus: 0,
          locale: 'ru-RU',
          title: 'Русский'
        })
        await dispatch('fetchInfo')
        commit('setMess', localizeFilter('registered'))
      } catch (e) {
        commit('setMess', e)
        throw e
      }
    },
    async guest ({ dispatch, commit }) { // логин анонимно, гость
      try {
        await firebase.auth().signInAnonymously()
        const uid = await dispatch('getUid')
        await firebase.database().ref(`/users/${uid}/info`).set({
          name: 'guest',
          email: '',
          age: 0,
          bonus: 0,
          locale: 'ru-RU',
          title: 'Русский'
        })
        await dispatch('fetchInfo')
        commit('setMess', localizeFilter('LoggedGuest'))
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
      // commit('clearInfoAccs')
      commit('setMess', localizeFilter('LoggedOut'))
    },
    async changePassword ({ commit }) { // отправляем запрос на смену пароля
      var auth = firebase.auth()
      var emailAddress = firebase.auth().currentUser.email

      auth.sendPasswordResetEmail(emailAddress).then(function () {
        commit('setMess', localizeFilter('password_change_email'))
      }).catch(function (error) {
        commit('setMess', error)
      })
    }
  }
}
