<template>
    <article class="product-info">
        <p>Product Info</p>
        <p>name</p>
        <p>price</p>
        <QuantitySelector/>
        <ColorPicker/>
        <SizePicker/>
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
