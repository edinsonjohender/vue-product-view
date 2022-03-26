<template>
    <article class="product-info col-lg-6 col-md-7 col-12">
        <p>Product Info</p>
        <h1>{{this.$store.state.product.title}}</h1>
        <b-row>
        <h4>$ {{this.$store.state.product.price}}</h4>
        <h5>$ {{this.$store.state.product.compare_at_price}}</h5>
        </b-row>
        <QuantitySelector/>
        <ColorPicker/>
        <SizePicker/>
        <p>{{this.$store.state.product.description}}</p>
    </article>
</template>

<script>

import QuantitySelector from './quantitySelector.vue'
import SizePicker from './sizePicker.vue'
import ColorPicker from './colorPicker.vue'

export default {
  name: 'ProductInfo',
  components: {
    QuantitySelector,
    SizePicker,
    ColorPicker
  }
}
</script>
