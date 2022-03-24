<template>
  <div id="app">
    <MainView/>
  </div>
</template>

<script>
import MainView from './view/MainView.vue'
import axios from 'axios'

export default {
  name: 'App',
  data(){
      return {
          info: ''
      }
  },
  components: {
    MainView
  },
  async fetch(){
      console.log('asd')
      //await store.dispatch('user/getUserOnline')
      
  },
  created(){
      console.log('created')

  },
  mounted () {
    axios
      .get('https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js')
      .then((res) =>{
        console.log(res)
      })
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
