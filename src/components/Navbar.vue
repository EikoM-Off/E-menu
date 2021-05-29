<template>
<div>
<nav class="navbar-fixed yellow darken-3">
    <div class="nav-wrapper">
      <a data-target="slide-out" class="sidenav-trigger show-on-medium-and-up"><i class="material-icons" style="cursor: pointer">restaurant_menu</i></a>
     <ul class="right">
      <li><a href="#modalLogin" class="modal-trigger" style="cursor: default">{{'Table' | localize}} #13</a></li>
      <!-- Dropdown Trigger -->
      <li><a class="dropdown-trigger" ref="dropdown" data-target="dropdown1">{{getAccountData.title}}<i class="material-icons right">arrow_drop_down</i></a></li>
    </ul>
    </div>

   <!-- <ul id='dropdown1' class='dropdown-content'>
     <li>
       <router-link to="/profile" class="black-text">
         <i class="material-icons">account_circle</i>{{'Profile' | localize}}
       </router-link>
     </li>
     <li class="divider" tabindex="-1"></li>
     <li>
       <router-link to="/" class="black-text">
         <i class="material-icons">assignment_return</i>Выйти
       </router-link>
     </li>
   </ul> -->

    <ul id="dropdown1" class="dropdown-content">
      <li
      v-for="locale in localize"
      :key="locale.id"
      active-class="active"
      :to="locale.id"
    >
      <a href="#" class="waves-effect waves-light pointer grey-text text-darken-4" @click="(choosed.title = locale.title) && (choosed.id = locale.id)&&(updateLocale())">{{locale.title}}</a>
    </li>
</ul>

</nav>

<LoginModal />
</div>
</template>

<script>
import M from 'materialize-css'
import { mapGetters, mapMutations } from 'vuex'
import LoginModal from '@/components/Modal'

export default {
  data: () => ({
    localize: [
      { title: 'English', id: 'en-US' },
      { title: 'Русский', id: 'ru-RU' }
    ],
    choosed: { title: 'English', id: 'en-US' }
  }),
  mounted () {
    M.Dropdown.init(this.$refs.dropdown, {
      coverTrigger: false
    })
    this.choosed = { title: this.getAccountData.title, id: this.getAccountData.locale }
  },
  computed: {
    ...mapGetters(['getAccountData'])
  },
  methods: {
    ...mapMutations(['setLocale']),
    updateLocale: function () {
      this.setLocale({
        value: this.choosed
      })
      this.$store.dispatch('updatefetchInfo')
    }
  },
  components: { LoginModal }
}
</script>
