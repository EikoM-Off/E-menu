<template>
<div id="modalLogin" class="modal" ref="modalLogin">
<ChMethod v-if="modalWindow == 'chMethod'" v-on:log_method="modalWindow = $event" v-on:closeModal="closeModal"/>
<Login v-else-if="modalWindow == 'login'" v-on:reg_method="modalWindow = $event"/>
<Register v-else-if="modalWindow == 'register'" v-on:log_method="modalWindow = $event"/>
<div class="modal-footer">
      <a class="modal-close btn-flat right unselectable" @click="modalWindow = 'chMethod'">{{'Cancel' | localize}}</a>
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
  },
  methods: {
    closeModal () {
      M.Modal.getInstance(this.$refs.modalLogin).close()
    }
  },
  components: {
    Login, ChMethod, Register
  }
}
</script>
