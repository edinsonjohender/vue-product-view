<template>
    <div class="product-info__size-picker">
        <p>{{value}}</p>
    </div>
</template>

<script>

export default {
  name: 'VariantValue',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  components: {}
}
</script>
