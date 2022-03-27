<template>
    <article class="product-info col-lg-6 col-md-7 col-12">

        <p class="product-info__category">Product Info</p>

        <h1 class="product-info__title">{{this.$store.state.product.title}}</h1>

        <b-row class="product-info__prices">
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
import SizePicker       from './sizePicker.vue'
import ColorPicker      from './colorPicker.vue'

export default {
  name: 'ProductInfo',
  components: {
    QuantitySelector,
    SizePicker,
    ColorPicker
  }
}
</script>


<style>

.product-info {
    text-align: start;
}

.product-info__category{
  color: #b9b8b8;
  margin-bottom: 5px;
}
.product-info__title{
  font-weight: 600;
}

.product-info__prices > *{
  width: auto !important;
}

.product-info__prices h4 {
    font-weight: bold;
}

.product-info__prices h5 {
    color: #b9b8b8;
    font-size: 17px;
    padding: 5px;
}

</style>