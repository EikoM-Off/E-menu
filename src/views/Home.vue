<template>
<div>
  <Preloader v-if="preload > 0" />

  <CatalogGrid />
  <FloatButton />

  <div class="divider"></div>

<!--   <Footer /> -->

</div>
</template>

<script>
import FloatButton from '@/components/FloatButton'
import messages from '@/utils/messages'
import Preloader from '@/components/PreLoader'
import CatalogGrid from '@/components/CatalogGrid'
// import M from 'materialize-css'
export default {
  data: () => ({

  }),
  props: ['category'],
  components: {
    FloatButton, CatalogGrid, Preloader
  },
  computed: {
    mess () {
      return this.$store.getters.getMess // получаем сообщения
    },
    preload () {
      return this.$store.getters.isUiLocked
    }
  },
  watch: {
    mess: function () { // наблюдаем за переменной с сообщением и если что выводим
      if (this.mess !== '') { this.$message(this.mess) }
      this.$store.commit('clearMess') // обнуляем сообщения
    }
  },
  mounted () {
    if (messages[this.$route.query.message]) { // выводим сообщения
      this.$message(messages[this.$route.query.message])
    }
    this.$store.commit('setInfo_Table', this.$route.query.table) // обнуляем сообщения
  },
  methods: {

  }

}
</script>
