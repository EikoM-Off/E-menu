<template>
  <div>
  <Preloader v-if="preload > 0" />
  <div class="row">
  <div class="col s12"
  v-for="(dish, index) in dishes"
  :key="index"
  >
    <div class="card horizontal">
      <div class="card-image">
        <!-- <a class="btn-floating btn-small waves-effect waves-light red darken-4" style="position: absolute; left: -15px; top: -15px;"><i class="material-icons">delete_forever</i></a> -->
        <img style="width: 100%; object-fit: cover; height: 100%;" v-bind:src="dish.img">
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <span class="card-title" v-if="locale == 'en-US'">{{dish.title_EN}}</span>
          <span class="card-title" v-if="locale == 'ru-RU'">{{dish.title_RU}}</span>
            <ul>
              <li>{{'weight' | localize}}: {{dish.weight}}{{'g' | localize}}</li>
              <li>{{'calories' | localize}}: {{dish.calories}}{{'kkal' | localize}}</li>
            </ul>
        </div>
        <div class="card-action center-align">
          <span>x{{dish.count}}</span>
          <div>
            <span class="left btn-flat-small amber-text text-darken-2 pointer" @click="removeOnce (index, dish.count)"><i class="material-icons">remove</i></span>
            <span class="grey-text text-darken-4">{{dish.cost*dish.count}}{{'kzt' | localize}}</span>
            <span class="right btn-flat-small amber-text text-darken-2 pointer" @click="addOnce (index, dish.count)"><i class="material-icons">add</i></span>
          </div>
        </div>
      </div>
    </div>

  </div>
  </div>

  </div>
</template>

<script>
import Preloader from '@/components/PreLoader'
// import messages from '@/utils/messages'
// import M from 'materialize-css'
export default {
  computed: {
    dishes () {
      return this.$store.getters.getOrderDishes // получаем блюда
    },
    infoOrder () {
      return this.$store.getters.getOrderData // получаем основную инфу
    },
    locale () {
      return this.$store.getters.getLocale // получаем переменную локализации
    },
    preload () {
      return this.$store.getters.isUiLocked
    }
  },
  mounted () {
    this.$store.dispatch('fetchInfo_Order')
  },
  methods: {
    removeOnce (id, count) {
      this.$store.dispatch('removeOnce', { id, count })
    },
    addOnce (id, count) {
      this.$store.dispatch('addOnce', { id, count })
    }
  },
  components: {
    Preloader
  }
}
</script>
