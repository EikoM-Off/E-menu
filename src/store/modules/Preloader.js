export default {
  actions: {

  },
  mutations: {
    lockUi: state => state.lockingPool++,
    unlockUi: state => state.lockingPool--,
    activateWaveHint (state) {
      state.wavehint = true
    },
    deactivateWaveHint (state) {
      state.wavehint = false
    }
  },
  state: {
    lockingPool: 0,
    wavehint: false
  },
  getters: {
    isUiLocked: state => state.lockingPool > 0,
    isWaveHint: state => state.wavehint
  }
}
