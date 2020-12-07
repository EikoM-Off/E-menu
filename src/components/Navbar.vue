<template>
<nav class="navbar-fixed brown lighten-1">
    <div class="nav-wrapper">
      <a data-target="slide-out" class="sidenav-trigger show-on-medium-and-up"><i class="material-icons" style="cursor: pointer">restaurant_menu</i></a>
     <ul class="right">
      <li><a style="cursor: default">Table #13</a></li>
      <!-- Dropdown Trigger -->
      <li><a class="dropdown-trigger" ref="dropdown" data-target="dropdown1">AccountName<i class="material-icons right">arrow_drop_down</i></a></li>
    </ul>
    </div>

   <ul id='dropdown1' class='dropdown-content'>
     <li>
       <router-link to="/" class="black-text">
         <i class="material-icons">account_circle</i>Профиль
       </router-link>
     </li>
     <li class="divider" tabindex="-1"></li>
     <li>
       <router-link to="/" class="black-text">
         <i class="material-icons">assignment_return</i>Выйти
       </router-link>
     </li>
   </ul>
  </nav>
</template>

<script>
import M from 'materialize-css'
export default {
  mounted () {
    M.Dropdown.init(this.$refs.dropdown, {
      coverTrigger: false
    })
  }
}
</script>
