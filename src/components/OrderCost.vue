<template>
<div>
  <div class="section">

  <div class="row">
  <div class="col s12">
    <span style="font-size: 24px; font-weight: 300; margin-left: 10px;">{{'cost' | localize}}</span>
    <div class="right-align">
    <span>{{'price_of_dishes' | localize}}: {{infoOrder.cost_wo_percent}}{{'kzt' | localize}}</span>
    <div class="divider"></div>
    <h5>{{'total' | localize}}: {{infoOrder.total_cost}}{{'kzt' | localize}}</h5>
    <label>+10% {{'for_service' | localize}}</label>
    </div>
  </div>
  </div>
  </div>

  <div class="card" style="border-radius: 20px;">
    <div class="card-content">
    <span class="card-title">{{'payment' | localize}}</span>
    <div>
      <p>
      <label>
        <input name="payment" type="radio" value="online" v-model="infoOrder.online_payment" />
        <span>{{'online_payment' | localize}}</span>
      </label>
    </p>
    <p>
      <label>
        <input name="payment" type="radio" value="waiter" v-model="infoOrder.online_payment" />
        <span>{{'payment_waiter' | localize}}</span>
      </label>
    </p>
    </div>
  </div>
  <div class="card-action right-align grey darken-4" style="border-radius: 0 0 20px 20px;">
    <span class="btn-flat left white-text" v-if="!infoOrder.payed">{{'not_paid' | localize}}</span>
    <span class="btn-flat left white-text" v-else>{{'paid' | localize}}</span>
    <a class="btn" @click="pay">{{'pay' | localize}}</a>
  </div>
  </div>
</div>
</template>

<script>
export default {
  computed: {
    infoOrder () {
      return this.$store.getters.getOrderData // получаем инфо о заказе
    }
  },
  methods: {
    pay () {
      this.$store.dispatch('updatefetchInfo_Order')
    }
  },
  components: {
  }
}
</script>
