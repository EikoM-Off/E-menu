<template>
<div>
    <h4>{{'admin_panel' | localize}}</h4>
        <AddDish />
</div>
</template>

<script>
// import M from 'materialize-css'
import AddDish from '@/components/AddDishAdmin'
export default {
  components: {
    AddDish
  }
}
</script>
