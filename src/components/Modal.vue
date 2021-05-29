<template>
<div id="modalLogin" class="modal" ref="modalLogin">
<ChMethod v-if="modalWindow == 'chMethod'" v-on:log_method="modalWindow = $event" v-on:closeModal="closeModal"/>
<Login v-else-if="modalWindow == 'login'" v-on:reg_method="modalWindow = $event" v-on:closeModalL="closeModal"/>
<Register v-else-if="modalWindow == 'register'" v-on:log_method="modalWindow = $event" v-on:closeModalR="closeModal"/>
<div class="modal-footer">
      <a class="btn-flat right unselectable" v-if="modalWindow != 'chMethod'" @click="modalWindow = 'chMethod'">{{'Cancel' | localize}}</a>
    </div>
</div>
</template>

<script>
import M from 'materialize-css'
import Login from '@/components/Login'
import Register from '@/components/Register'
import ChMethod from '@/components/ChooseMethodsLogin'

export default {
  data: () => ({
    modalWindow: 'chMethod'
  }),
  mounted () {
    M.Modal.init(this.$refs.modalLogin, { dismissible: false })
    this.trylogin()
  },
  methods: {
    closeModal () {
      M.Modal.getInstance(this.$refs.modalLogin).close()
    },
    async trylogin () { // если активна сессия
      try {
        if (await this.$store.dispatch('getUid') != null) { this.closeModal() } else { M.Modal.getInstance(this.$refs.modalLogin).open() } // залогинен или нет
      } catch (e) { }
    }
  },
  components: {
    Login, ChMethod, Register
  }
}
</script>
