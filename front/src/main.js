import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import appStore from './appStore.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

new Vue({
  el: '#app',
  router,
  render: h => h(App),
  store: appStore
})
