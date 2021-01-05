<template>
  <div class="fixed-action-btn" ref="fixed_action_btn">
  <router-link to="/order" class="btn-floating btn-large orange" :class="{'pulse': Wavehint}" data-position="left" :data-tooltip="'order_cart' | localize">
    <i class="large material-icons">assignment</i>
  </router-link>
</div>
</template>

<script>
import M from 'materialize-css'

export default {
  data: () => ({
  }),
  mounted () {
    M.FloatingActionButton.init(this.$refs.fixed_action_btn, { hoverEnabled: false })
  },
  computed: {
    Wavehint () {
      return this.$store.getters.isWaveHint
    }
  },
  methods: {

  }
}
</script>
