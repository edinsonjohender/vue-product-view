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
    /// check if the variation is of type color
    isColor(){return this.option.name == 'Color' ? true : false},
  }
}
</script>

<style>

.product-info__variant-selector {
  flex-flow: nowrap !important;
  border-bottom: solid 2px #b9b8b8;
  padding: 1rem 0;
  max-width: 100%;
}

.product-info__variant-selector > * {
    width: auto !important;
    align-items: center;
    gap: 1rem;
}
.product-info__variant-selector > p {
  min-width: 70px;
  margin: 0;
}

.row.product-info__variant-options > * {
    width: auto !important;
    
}

</style>