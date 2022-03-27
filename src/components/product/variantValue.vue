<template>
    <div v-if="type" class="product-info__variant-value-color"  @click="selectVariation()">
      <div :style="{'background-color':this.value.toLowerCase()}"></div>
    </div>
    <div v-else  class="product-info__variant-value"   @click="selectVariation()">
        <p>{{this.value}}</p>
    </div>
</template>

<script>
export default {
  name: 'VariantValue',
  props: {
    name: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    type: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    selectVariation(){
      this.$store.commit('selectVariant', [this.name, this.value])
    },
  },
  components: {}
}
</script>

<style>
.product-info__variant-value-color {
    border: solid 2px;
    padding: 0.1rem !important;
    border-radius: 1rem;
    height: 2rem;

}

.product-info__variant-value-color > div {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 1rem;
}

</style>