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
  },

}
</script>

<style >

.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  margin-top: 5px;
}

.grid-item {
    float: left;
    padding: 50px;
    text-align: center;
    font-size: 25px;
    cursor: pointer;
    color: white;
    margin: 5px;
    padding-top: 70%;
    background-position: center;
    background-size: cover;
}
</style>