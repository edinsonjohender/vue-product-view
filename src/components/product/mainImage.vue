<template>
    <article class="product-images  col-lg-6 col-md-5 col-12">
      <div style="width:100%; ">
        <img :src=this.$store.state.mainImage style="width:100%;  margin: 0 5px;">
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
