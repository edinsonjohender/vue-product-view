<template>
    <div class="product-info__quantity-selector">
        <div class="">
          <b-button>-</b-button>
          <p>{{this.$store.state.quantity}}</p>
          <b-button>+</b-button>
        </div>
    </div>
</template>

<script>

export default {
  name: 'QuantitySelector',
  components: {}
}
</script>
