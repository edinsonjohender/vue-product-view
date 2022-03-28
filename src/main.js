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
      product   : {},
      cart      : [],
      variants  : [],
      quantity  : 1,
      mainImage : ''
    }
  },
  mutations: {
    /// set product info when page loads
    setProduct (state, p) {
      state.mainImage = p.data.featured_image
      state.product   = p.data
    },
    /// shows the selected image
    selectedImage(state, i){
      state.mainImage = i
    },
    /// this selects any variation of the product, it can be used for any type of variation (Color, Size, others)
    selectVariant(state, [n, v]){
      state.variants.filter((x) =>{
        if(x.name == n){
          state.variants.splice(state.variants.indexOf(x), 1);
        }
      })
      state.variants.push({
        name : n,
        value: v
      })
    }
  }
})


new Vue({
  store: store,
  render: h => h(App),
}).$mount('#app')