<template>
    <div class=" grid-item circular" v-bind:style="{ 'background-image': 'url(' + this.image + ')' }"></div>
</template>

<script>


export default {
  name: 'GalleryImage',
  props: {
    image: {
      type: String
    },
  },
}
</script>
