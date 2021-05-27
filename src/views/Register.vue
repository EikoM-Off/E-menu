<template>
<div class="row m-b-none" style="max-width:600px">
  <div class="card">
    <div class="card-content grey-text text-darken-4">
        <h2 class="center-align">{{'SignUp' | localize}}</h2>
        <preloader v-if="preload" />
        <form @submit.prevent="submitHandler">
          <div class="input-field col s12 padder-x">
            <input type="text" name="name" id="name"
            v-model="name"
            :class="{invalid: ($v.email.$dirty && !$v.name.required) || ($v.email.$dirty && !$v.name.minLength)}"
            >
            <label for="name">{{'YName' | localize}}</label>
            <small
              class="helper-text invalid"
              v-if="$v.name.$dirty && !$v.name.required"
            >Enter your Name
            </small>
            <small
              class="helper-text invalid"
              v-else-if="$v.name.$dirty && !$v.name.minLength"
            >Name is too short
            </small>
          </div>

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
            >Enter password
            </small>
            <small
              class="helper-text invalid"
              v-else-if="$v.password.$dirty && !$v.password.minLength"
            >Password must be {{$v.password.$params.minLength.min}} characters. Now: {{password.length}}
            </small>
          </div>

          <button type="submit" class="col s12 btn waves-effect waves-light btn btn-large m-md brown">{{'SignUp' | localize}}</button>
          <div>
            <label class="center-align">
              <h6><router-link class="waves-effect waves-teal btn-flat blue-grey-text text-darken-4" to="/">{{'SignIn' | localize}}</router-link></h6>
            </label>
          </div>
        </form>
    </div>
  </div>
</div>
</template>

<script>
import { required, minLength, email } from 'vuelidate/lib/validators'
import preloader from '@/components/PreLoader'
// import messages from '@/utils/messages'

export default {
  name: 'register',
  data: () => ({
    email: '',
    password: '',
    name: '',
    preload: false
  }),
  validations: {
    email: { email, required },
    password: { minLength: minLength(6), required },
    name: { required, minLength: minLength(2) }
  },
  computed: {
    mess () {
      return this.$store.getters.getMess
    }
  },
  watch: {
    mess: function () {
      if (this.mess !== '') { this.$message(this.mess) }
      this.$store.commit('clearMess')
    }
  },
  methods: {
    async submitHandler () {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      const formData = {
        email: this.email,
        password: this.password,
        name: this.name
      }

      try {
        this.preload = true
        await this.$store.dispatch('register', formData)
        this.preload = false
        this.$router.push('/main')
      } catch (e) { this.preload = false }
    }
  },
  components: {
    preloader
  }
}
</script>
