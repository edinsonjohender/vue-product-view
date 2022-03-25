import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use (Vuex)

// Create a new store instance.
const store = new Vuex.Store({
  state () {
    return {
      count: 69,
      product: {}
    }
  },
  mutations: {
    increment (state) {
      state.count++
      console.log(state.count);
    },
    setProduct (state, p) {
      state.product = p
      console.log(state.product);
    }
  }
})


new Vue({
  store: store,
  render: h => h(App),
}).$mount('#app')