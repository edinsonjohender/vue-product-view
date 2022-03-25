<template>
  <div id="app">
    <MainView/>
    <p>{{this.$store.state.product}}</p>
  </div>
</template>

<script>

import axios from 'axios'

import MainView from './view/MainView.vue'

export default {
  name: 'App',
  components: {
    MainView
  },
  mounted () {
    axios
      .get('https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js')
        .then((res) => {this.$store.commit('setProduct', res)})
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
