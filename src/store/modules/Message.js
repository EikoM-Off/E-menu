export default {
  mutations: {
    setMess (state, mess) {
      state.message = mess
    },
    clearMess (state) {
      state.message = ''
    }
  },
  state: {
    message: ''
  },
  getters: {
    getMess: state => state.message
  }
}
