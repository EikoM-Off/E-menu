import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import localizeFilter from '@/filters/localize.filter'
import messagePlugin from '@/utils/message.plugin'
import Vuelidate from 'vuelidate'
import 'materialize-css/dist/js/materialize.min'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.filter('localize', localizeFilter)
Vue.use(Vuelidate)

var firebaseConfig = {
  apiKey: 'AIzaSyBilDwYRM23fAvjZlmr4hTZgcFVQl9v89A',
  authDomain: 'e-menu-57517.firebaseapp.com',
  projectId: 'e-menu-57517',
  storageBucket: 'e-menu-57517.appspot.com',
  messagingSenderId: '162702185456',
  appId: '1:162702185456:web:e2be8f9b74622d08e7c335',
  measurementId: 'G-DHZQ3JZNVF'
}

firebase.initializeApp(firebaseConfig)

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
