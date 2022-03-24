<template>
    <article class="product-images">
        <p>
            imagen principal
        </p>
       <CarouselImage/>
    </article>
</template>

<script>

import CarouselImage from './carousel.vue'

export default {
  name: 'MainImage',
  components: {
    CarouselImage
  }
}
</script>
