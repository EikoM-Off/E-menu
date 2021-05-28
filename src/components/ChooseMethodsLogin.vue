<template>
<div class="row" style="max-width:300px">
  <div class="card">
    <div class="card-content grey-text text-darken-4 center-align">
        <h3 class="center-align">{{'SignIn' | localize}}</h3>
        <a class="waves-effect waves-light btn-large m-md amber lighten-4 grey-text text-darken-4" @click="guest_login"><i class="material-icons left">perm_identity</i>{{'as-guest' | localize}}</a>
        <div class="card-action">
        <a h class="waves-effect waves-light btn yellow darken-4" @click="log_method('login')">{{'Login' | localize}}</a>
        </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  methods: {
    log_method: function (method) {
      this.$emit('log_method', method)
    },
    async guest_login () {
      try {
        await this.$store.dispatch('guest') // вызов метода логин guest
        this.$emit('closeModal')
      } catch (e) { console.log(e) }
    }
  }
}
</script>
