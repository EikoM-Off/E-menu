<template>
  <div>
    <div class="page-title">
      <h3 class="hide-on-small-and-down">{{'Profile' | localize}}</h3>
    </div>
 <div class="row">
   <div class="col s12 m6 l6 xl3">
     <img src="https://avatars.mds.yandex.net/get-pdb/921063/f744ffc7-3243-49f5-9d19-56be4c9f0699/s1200?webp=false" alt="" class="circle responsive-img"> <!-- notice the "circle" class -->
   </div>

    <div class="col s12 m6 l6 xl9 right">
      <ul class="collection with-header">
            <li class="collection-header"><h4>{{'Personal_Data' | localize}}</h4></li>
              <li class="collection-item"><b>{{'YName' | localize}}: {{personalData.name}}</b> </li>
              <li class="collection-item"><b>{{'Age' | localize}}: {{personalData.age}}</b>  </li>
              <li class="collection-item"><b>{{'Bonus' | localize}}: {{personalData.bonus}}</b>  </li>
        </ul>
    </div>

    </div>

    <button data-target="modal_chng_pass" class="btn modal-trigger right">{{'Change_Pass' | localize}}</button>
    <PasswordChange />

  </div>
</template>

<script>
import PasswordChange from '@/components/PasswordChange.vue'
export default {
  computed: {
    personalData () {
      return this.$store.getters.getAccountData
    },
    preload () {
      return this.$store.getters.isUiLocked
    }
  },
  mounted () {
    this.$store.dispatch('fetchInfo') // получаем данные
  },
  components: {
    PasswordChange
  }
}
</script>
