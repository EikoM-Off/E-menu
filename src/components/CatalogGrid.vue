<template>
    <div>
    <h1>{{category | localize}}</h1>

    <div class="row">
    <div class="col s12">

    <div class="col s12 m6 l3"
    v-for="(dish, index) in infoMenu"
    :key="index"
    >
      <div class="card sticky-action large">
      <div class="card-image pointer unselectable">
        <img class="activator" v-bind:src="dish.img">
        <span class="card-title">{{'cost' | localize}}: {{dish.cost}}{{'kzt' | localize}}</span>
      </div>
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4" v-if="locale == 'en-US'">{{dish.title_EN}}<i class="material-icons right">more_vert</i></span>
        <span class="card-title activator grey-text text-darken-4" v-if="locale == 'ru-RU'">{{dish.title_RU}}<i class="material-icons right">more_vert</i></span>
        <p v-if="locale == 'en-US'">{{dish.comment_EN}}<br></p>
        <p v-if="locale == 'ru-RU'">{{dish.comment_RU}}<br></p>
      </div>
      <div class="card-action right-align">
          <span class="waves-effect waves-light btn-flat amber-text text-darken-2" @click="addDish(dish)">{{'add_to_order' | localize}}</span>
          </div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">{{'ingredients' | localize}}:<i class="material-icons right">close</i></span>
        <p v-if="locale == 'en-US'">{{dish.composition_EN}}</p>
        <p v-if="locale == 'ru-RU'">{{dish.composition_RU}}</p>
        <ul style="position: absolute; bottom: 60px;">
          <li>{{'weight' | localize}}: {{dish.weight}}{{'g' | localize}}</li>
          <li>{{'calories' | localize}}: {{dish.calories}}{{'kkal' | localize}}</li>
        </ul>
      </div>
    </div>
  </div>

  </div>
  </div>

  </div>
</template>

<script>
// import messages from '@/utils/messages'
// import M from 'materialize-css'
export default {
  data: () => ({

  }),
  computed: {
    mess () {
      return this.$store.getters.getMess // получаем сообщения
    },
    category () {
      return this.$store.getters.getCategory // получаем категорию
    },
    infoMenu () {
      return this.$store.getters.getMenuData // получаем меню
    },
    locale () {
      return this.$store.getters.getLocale // получаем переменную локализации
    }
  },
  watch: {
    mess: function () { // наблюдаем за переменной с сообщением и если что выводим
      if (this.mess !== '') { this.$message(this.mess) }
      this.$store.commit('clearMess') // обнуляем сообщения
    }
  },
  mounted () {
    this.$store.dispatch('fetchInfo_Menu') // выкачиваем из бд меню
  },
  methods: {
    addDish (data) {
      this.$store.dispatch('addDish', data) // добавляем в заказ блюдо
    }
  }

}
</script>
