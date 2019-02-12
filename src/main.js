import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import store from './store'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vuetify from 'vuetify'

Vue.use(Vuetify, {
  iconfont: 'md'
})

Vue.config.productionTip = false

new Vue({
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
