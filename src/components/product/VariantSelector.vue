<template>
    <div class="row product-info__variant-selector">
        <p>{{this.option.name}}:</p>
        <b-row class="product-info__variant-options">
          <VariantValue
            v-for   ="(value, index) in this.option.values"
            :key    ="index"
            :type   = isColor()
            :name   = option.name
            :value  = value
          
          />
        </b-row>
    </div>
</template>

<script>

import VariantValue from './variantValue.vue'

export default {
  name: 'VariantsSelector',
  props: {
    option: {
      type: Object
    }
  },
  components: {
    VariantValue
  },
  methods: {
    isColor(){return this.option.name == 'Color' ? true : false},
  }
}
</script>

<style>

.product-info__variant-options {
    gap: 0.5rem;
}
.product-info__variant-selector > * {
    width: auto !important;
}
.row.product-info__variant-options > * {
    width: auto !important;
}

</style>