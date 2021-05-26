export default {
  action: {

  },
  mutations: {

  },
  state: {
    cafe_data:
      {
        name: 'Yammy Food',
        email: 'yammy-food@gmail.com'
      }
  },
  getters: {
    getCafeData (state) {
      return state.cafe_data
    }
  }
}
