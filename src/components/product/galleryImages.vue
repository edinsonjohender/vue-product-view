<template>
    <div class="grid-container">
      <GalleryImage
        v-for="(image, index) in this.$store.state.product.images"
        :key="index"
        :image="image"
      />
    </div>
</template>

<script>

import GalleryImage from './galleryImage.vue'

export default {
  name: 'GalleryImages',
  components:{
    GalleryImage
  }
}
</script>

<style >

.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  margin-top: 0.5rem;
  gap: 0.5rem;
}

.grid-item {
    float: left;
    padding: 50px;
    text-align: center;
    font-size: 25px;
    cursor: pointer;
    color: white;
    gap: 0.5rem;;
    padding-top: 70%;
    background-position: center;
    background-size: cover;
}
</style>