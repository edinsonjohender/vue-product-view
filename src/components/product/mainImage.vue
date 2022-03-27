<template>
    <article class="product-images col-lg-6 col-md-5 col-12">
      <div class="product-images__main-image">
        <img :src=this.$store.state.mainImage >
      </div>
        <Gallery/>
    </article>
</template>

<script>

import Gallery from './galleryImages.vue'

export default {
  name: 'MainImage',
  components: {
    Gallery
  }
}
</script>

<style>

.product-images__main-image{
  width:100%;
  padding: 0 5px;
}
.product-images__main-image > img {
  width:100%;
}

</style>