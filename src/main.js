import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueResource from 'vue-resource'

Vue.use(VueResource)

new Vue({
  el: '#app',
  vuetify,
  render: h => h(App)
})
