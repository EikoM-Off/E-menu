<template>
  <div class="fixed-action-btn" ref="fixed_action_btn">
  <a class="btn-floating btn-large orange tooltipped" :class="{'pulse': Wavehint}" data-position="left" :data-tooltip="'Tools' | localize" v-if="!removeMode" >
    <i class="large material-icons">create</i>
  </a>
  <a class="btn-floating btn-large blue-grey darken-3 tooltipped" :data-tooltip="'Cancel' | localize" @click="deleteBnt" v-else>
    <i class="large material-icons blue-grey-text text-lighten-5">cancel</i>
  </a>
  <ul>
    <li><a class="btn-floating tooltipped red" data-position="left" :data-tooltip="'Delete_mode' | localize" @click="deleteBnt"><i class="material-icons">delete</i></a></li>
    <li><a href="#modalAddEntry" class="btn-floating blue modal-trigger tooltipped" data-position="left" :data-tooltip="'Add_Entry' | localize"><i class="material-icons">add</i></a></li>
    <li><a class="btn-floating green tooltipped" data-position="left" :data-tooltip="'Save_Changes' | localize" @click="SaveEntries"><i class="material-icons">save</i></a></li>
  </ul>
</div>
</template>

<script>
import M from 'materialize-css'

export default {
  data: () => ({
    removeMode: false
  }),
  mounted () {
    M.FloatingActionButton.init(this.$refs.fixed_action_btn, { hoverEnabled: false })
    M.Tooltip.init(document.querySelectorAll('.tooltipped'), {})
  },
  computed: {
    Wavehint () {
      return this.$store.getters.isWaveHint
    }
  },
  methods: {
    deleteBnt () {
      this.removeMode = !this.removeMode
      this.$emit('deleteBnt', {
        removeMode: this.removeMode
      })
    },
    SaveEntries () {
      this.$store.dispatch('updateInfoAccounts')
    }
  }
}
</script>
