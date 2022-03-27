<template>
  <section class="main-content">
      <b-row>
        <MainImage/>
        <ProductInfo/> 
      </b-row>
  </section>
</template>

<script>

import MainImage from '../components/product/mainImage.vue'
import ProductInfo from '../components/product/productInfo.vue'
 
 
export default {
  name: 'MainView',
  components: {
    MainImage,
    ProductInfo
  },

}

</script>
<style>
section.main-content {
    margin: 7rem 20rem;
}

</style>
