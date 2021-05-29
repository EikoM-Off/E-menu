<template>
  <ul id="slide-out" class="sidenav" ref="main_sidenav">
    <li><div class="user-view">
      <div class="background yellow lighten-5">
        <!-- <img src="https://img2.goodfon.ru/original/2048x2048/1/51/tekstura-uzor-svetlyy-fon.jpg"> -->
      </div>
      <a><img class="circle" src="../assets/img/fried-eggs.png"></a>
      <a><span class="brown-text darken-4 name">{{CafeData.name}}</span></a>
      <a><span class="brown-text darken-4 email">E-mail: {{CafeData.email}} </span></a>
    </div></li>

    <li><a class="subheader">{{'menu' | localize}}</a></li>
    <div style="overflow-y: auto; height: 48%">
      <li
        v-for="(category, index) in CategoryMenuData"
        :key="index"
          >
      <router-link :to="category.url">{{category.title | localize}} <i class="material-icons">send</i></router-link>
      </li>
    </div>

    <div class="patreon-ad">
    <li @click="closeSidenav">
       <router-link to="/profile" class="black-text">
         <i class="material-icons">account_circle</i>{{'Profile' | localize}}
       </router-link>
     </li>
    <li class="divider" tabindex="-1"></li>
     <li @click="logout">
       <router-link to="/" class="black-text">
         <i class="material-icons">exit_to_app</i>{{'Logout' | localize}}
       </router-link>
     </li>
    </div>
  </ul>
</template>

<script>
import M from 'materialize-css'
export default {
  data: () => ({
    category: 'popular'
  }),
  computed: {
    CafeData () {
      return this.$store.getters.getCafeData
    },
    CategoryMenuData () {
      return this.$store.getters.getCategoryMenuData
    }
  },
  methods: {
    closeSidenav () {
      M.Sidenav.getInstance(this.$refs.main_sidenav).close()
    },
    async logout () {
      await this.$store.dispatch('logout')
      M.Sidenav.getInstance(this.$refs.main_sidenav).close()
      // this.$router.push('/')
    }
  },
  mounted () {
    M.Sidenav.init(this.$refs.main_sidenav, {})
    M.Collapsible.init(this.$refs.collapsible, {})
  }
}
</script>
