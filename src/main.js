import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import localizeFilter from '@/filters/localize.filter'
import messagePlugin from '@/utils/message.plugin'
import 'materialize-css/dist/js/materialize.min'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.filter('localize', localizeFilter)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
