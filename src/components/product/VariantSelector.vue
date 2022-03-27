<template>
    <div class="product-info__color-picker">
        <p>{{this.option.name}}</p>
        <VariantValue
          v-for   ="(value, index) in this.option.values"
          :key    ="index"
          :value  = value
        />
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
  }
}
</script>
