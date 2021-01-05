export default {
  action: {

  },
  mutations: {

  },
  state: {
    cafe_data:
      {
        name: 'Grand Cafe',
        email: 'grand-cafe@some_mail.none'
      }
  },
  getters: {
    getCafeData (state) {
      return state.cafe_data
    }
  }
}
