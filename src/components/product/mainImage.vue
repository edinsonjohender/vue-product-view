<template>
    <article class="product-images  col-lg-6 col-md-5 col-12">
        <img :src=this.$store.state.product.featured_image style="width:100%">
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
