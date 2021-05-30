<template>
  <div>
  <div class="row">
  <div class="col s12">
    <h3>{{costOrder}}</h3>
  </div>
  </div>

  </div>
</template>

<script>
// import messages from '@/utils/messages'
// import M from 'materialize-css'
export default {
  computed: {
    costOrder () {
      return this.$store.getters.getOrderCost // получаем цену заказа
    }
  },
  methods: {

  },
  components: {
  }
}
</script>
