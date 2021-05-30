<template>
<div>
  <div>
    <h1>{{'order' | localize}}</h1>
    <div class="container">
      <div class="section">
        <h5>{{'dishes' | localize}}</h5>
        <Orderview />
      </div>

    <div class="divider"></div>

      <div class="section">
        <h5>{{'cost' | localize}}</h5>
        <OrderCost />
      </div>
    </div>
  </div>

</div>
</template>

<script>
import Orderview from '@/components/OrderShop'
import OrderCost from '@/components/OrderCost'
// import M from 'materialize-css'
export default {
  components: {
    Orderview, OrderCost
  },
  mounted () {
    this.$store.dispatch('fetchInfo_Order')
  }
}
</script>
