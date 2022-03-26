import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use (Vuex)
Vue.use(BootstrapVue)

// Create a new store instance.
const store = new Vuex.Store({
  state () {
    return {
      product: {}
    }
  },
  mutations: {
    setProduct (state, p) {
      state.product = p.data
    }
  }
})


new Vue({
  store: store,
  render: h => h(App),
}).$mount('#app')