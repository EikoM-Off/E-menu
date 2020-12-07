<template>
  <ul id="slide-out" class="sidenav" ref="main_sidenav">
    <li><div class="user-view">
      <div class="background teal lighten-5">
        <!-- <img src="https://img2.goodfon.ru/original/2048x2048/1/51/tekstura-uzor-svetlyy-fon.jpg"> -->
      </div>
      <a><img class="circle" src="https://tlt.aquarelle-centre.ru/upload/iblock/30e/coffee_hall.png"></a>
      <a><span class="brown-text darken-4 name">name</span></a>
      <a><span class="brown-text darken-4 email">E-mail: </span></a>
    </div></li>

      <ul class="collapsible" ref="collapsible">
    <li>
      <div class="collapsible-header"><i class="material-icons">filter_drama</i>First</div>
      <div class="collapsible-body truncate">
        <li class="collection-item"><div>Alvin<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div></li>
        <li class="collection-item"><div>Alvin<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div></li>
        <li class="collection-item"><div>Alvin<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div></li>
        <li class="collection-item"><div>Alvin<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div></li>
      </div>
    </li>
    <li>
      <div class="collapsible-header"><i class="material-icons">place</i>Second</div>
      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
    </li>
    <li>
      <div class="collapsible-header"><i class="material-icons">whatshot</i>Third</div>
      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
    </li>
  </ul>

    <li><div class="divider"></div></li>
    <li><a class="waves-effect" href="#!" ><i class="material-icons">exit_to_app</i>piauwoeiru</a></li>
  </ul>
</template>

<script>
import M from 'materialize-css'
export default {
  data: () => ({
  }),
  mounted () {
    M.Sidenav.init(this.$refs.main_sidenav, {})
    M.Collapsible.init(this.$refs.collapsible, {})
  }
}
</script>
