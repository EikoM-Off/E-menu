<template>
<div>
  <div>
    <h1>{{'order' | localize}}</h1>
    <div class="container">
      <Orderview />
    </div>
  </div>

</div>
</template>

<script>
import Orderview from '@/components/OrderShop'
// import M from 'materialize-css'
export default {
  components: {
    Orderview
  }
}
</script>
