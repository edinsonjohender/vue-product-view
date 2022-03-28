<template>
    <div v-if="type"  class="product-info__variant-value-color" :class="{'colorSelected': isSelected }"  @click="selectVariation()">
      <div :style="{'background-color':this.value.toLowerCase()}"></div>
    </div>
    <div v-else  class="product-info__variant-value"  :class="{'colorSelected': isSelected }"  @click="selectVariation()">
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
  computed: {
    isSelected(){
      var a = false
      this.$store.state.variants.filter((x) =>{
        if(x.name == this.name && x.value == this.value){
          a = true
        }
      })
      return a
    },
  }
}
</script>

<style>

.product-info__variant-value-color {
    padding: 0.1rem !important;
    border-radius: 1rem;
    height: 2rem;
    border: solid 2px transparent;

}

.product-info__variant-value-color > div {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 1rem;
}

.colorSelected{
    border: solid 2px !important;
    color: black !important;
}

.product-info__variant-value {
    text-align: center;
    color: #b9b8b8;
    border: solid 2px #b9b8b8;
    height: 2.3rem;
    padding: 0.5rem;
    min-width: 3.5rem;
    font-size: 13px;
}



</style>