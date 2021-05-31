<template>
    <div class="input-field col s6">
    <select ref="FormSelect" v-model="category" @change='selected'>
      <option value="" disabled selected>{{'Choose_Option' | localize}}</option>
      <option
      v-for="(category, index) in categoryData"
      :key="index"
      :value="category.title"
      >{{category.title}}</option>
    </select>
    <label>{{'Category_Select' | localize}}</label>
  </div>
</template>

<script>
import M from 'materialize-css'
export default {
  data: () => ({
    category: ''
  }),
  computed: {
    categoryData () {
      return this.$store.getters.getCategoryMenuData
    }
  },
  mounted () {
    M.FormSelect.init(this.$refs.FormSelect, {})
  },
  methods: {
    selected () {
      this.$emit('selected', {
        category: this.category
      })
    }
  }
}
</script>
