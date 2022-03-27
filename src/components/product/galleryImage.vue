<template>
    <div :class="{ 'display': isSelected }" class=" grid-item circular" v-bind:style="{ 'background-image': 'url(' + this.image + ')'}" @click="selectImage()"></div>
</template>

<script>


export default {
  name: 'GalleryImage',
  props: {
    image: {
      type: String
    }
  },
  /// select [MainImage]
  methods:{selectImage(){this.$store.commit('selectedImage', this.image)}},
  /// hide [image] selected
  computed: {isSelected() {return this.$store.state.mainImage === this.image ? true : false;},},
}
</script>

<style>
.display {
  display: none;
}
</style>