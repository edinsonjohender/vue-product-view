<template>
  <section class="main-content">
    <div class="row"></div>
      <MainImage/>
      <ProductInfo/>
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
