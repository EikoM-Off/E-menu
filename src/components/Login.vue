<template>
<div class="row" style="max-width:300px">
  <div class="card">
    <div class="card-content grey-text text-darken-4">
        <h3 class="center-align">{{'Authorization' | localize}}</h3>
        <preloader v-if="preload" />
        <form @submit.prevent="submitHandler">
          <div class="input-field col s12 padder-x">
            <input type="text" name="email" id="email"
            v-model.trim="email"
            :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}">
            <label for="email">{{'EntMail' | localize}}</label>
            <small
          class="helper-text invalid"
          v-if="$v.email.$dirty && !$v.email.required"
        >Email is empty</small>
        <small
          class="helper-text invalid"
          v-else-if="$v.email.$dirty && !$v.email.email"
        >Incorrect Email</small>
          </div>
          <div class="input-field col s12 padder-x">
            <input type="password" name="password" id="password"
            v-model="password"
            :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}">
            <label for="password">{{'EntPass' | localize}}</label>
            <small
          class="helper-text invalid"
          v-if="$v.password.$dirty && !$v.password.required"
        >
          Enter password
        </small>
        <small
          class="helper-text invalid"
          v-else-if="$v.password.$dirty && !$v.password.minLength"
        >
         Password must be {{$v.password.$params.minLength.min}} characters. Now: {{password.length}}
        </small>
          </div>
          <button type="submit" class="col s12 btn waves-effect waves-light btn btn-large m-md yellow darken-4">{{'Login' | localize}}</button>
          <div>
            <label class="center-align">
              <h6><a class="waves-effect waves-teal btn-flat blue-grey-text text-darken-4" @click="reg_method">{{'SignUp' | localize}}</a></h6>
            </label>
          </div>
        </form>
    </div>
  </div>
</div>
</template>

<script>
import M from 'materialize-css'
import preloader from '@/components/PreLoader'
import { required, minLength, email } from 'vuelidate/lib/validators'

export default {
  data: () => ({
    email: '',
    password: '',
    preload: false
  }),
  validations: {
    email: { email, required },
    password: { minLength: minLength(6), required }
  },
  methods: {
    reg_method: function () { // передача на регистрацию опции
      this.$emit('reg_method', 'register')
    },
    async submitHandler () { // отправка данных формы
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      const formData = { // собираем данные из полей
        email: this.email,
        password: this.password
      }

      try {
        this.preload = true // включение прелоадера
        await this.$store.dispatch('login', formData) // вызов метода логин
        this.preload = false // выключение прелоадера
        this.$emit('closeModalL') // отправить на закрытие модального окна
      } catch (e) { this.preload = false }
    },
    async trylogin () { // если активна сессия
      try {
        if (await this.$store.dispatch('getUid') != null) { this.$emit('closeModalL') }
      } catch (e) { }
    },
    onCancel: function () {
      this.$v.$reset()
      M.Modal.getInstance(this.$refs.modalLogin).close()
    }
  },

  components: {
    preloader
  }
}
</script>
