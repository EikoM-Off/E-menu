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
    menu_data:
       {
         popular: [
           [{
             title: 'Beef steak',
             comment: 'Very tasty and juicy grilled meat.',
             img: 'https://im0-tub-kz.yandex.net/i?id=6274e99ca195c9813549526fe1a6faf1-l&n=13',
             weight: 330,
             calories: 1200,
             cost: 2400,
             composition: 'Beef, Soy sauce, Sesame oil, Brown sugar, Ginger, Garlic, Chili pepper, Salt, Rosemary'
           }],
           [{
             title: 'Caesar salad',
             comment: 'smth',
             img: '',
             weight: 250,
             calories: 480,
             cost: 1200,
             composition: 'something'
           }]
         ],
         salad: [
           [{
             title: 'Greek salad',
             comment: 'smth',
             img: 'https://donatewales.org/wp-content/uploads/2/3/3/2333952cbbb6788c4ae051b953b5fc5e.jpeg',
             weight: 100,
             calories: 380,
             cost: 900,
             composition: 'something'
           }],
           [{
             title: 'Caesar salad',
             comment: 'smth',
             img: '',
             weight: 250,
             calories: 480,
             cost: 1200,
             composition: 'something'
           }]
         ],
         first_meal: {

         },
         garnish: {

         },
         main_dish: {

         },
         fish: {

         },
         second_meal: {

         },
         bake: {

         },
         drinks: {

         }

       },
    menu_category_data: [
      { title: 'pop_dish', url: '/' },
      { title: 'first_meal', url: '/' },
      { title: 'second_meal', url: '/' },
      { title: 'fish', url: '/' },
      { title: 'garnish', url: '/' },
      { title: 'salads', url: '/' },
      { title: 'bake', url: '/' },
      { title: 'drinks', url: '/' }
    ]
  },
  getters: {
    getMenuData (state) {
      return state.menu_data
    },
    getCategoryMenuData (state) {
      return state.menu_category_data
    }
  }

}
