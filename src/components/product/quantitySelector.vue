<template>
    <div class="product-info__quantity-selector">
        <div class="row product-info__quantity-selector-button">
          <b-button @click="setQuantity(false)">-</b-button>
            <p>{{this.$store.state.quantity}}</p>
          <b-button @click="setQuantity(true)">+</b-button>
        </div>
        <div class="total-price">
          <p>Total price: {{this.totalPrice()}}</p>
        </div>

    </div>
</template>

<script>

export default {
  name: 'QuantitySelector',
  methods: {
    setQuantity(value){
      var a = this.$store.state.quantity
      if(value){
        a = a + 1
      }else{
        a = a == 1 ? 1 : this.$store.state.quantity - 1 
      }
      this.$store.commit('setQuantity', a)
    },
    /// check if the variation is of type color
    totalPrice(){return  this.$store.state.quantity * this.$store.state.product.price},
  }
}
</script>

<style>
.product-info__quantity-selector{
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
}
.row.product-info__quantity-selector-button {
  border: solid 1px #b9b8b8;
  width: 100px;
  height: 50px;
  margin-top: 1rem;
}

.row.product-info__quantity-selector-button > * {
    width: auto;
    background: transparent;
    color: black;
    border: none;
    font-weight: bold;
}

.product-info__quantity-selector-button > p {
  margin: 0.8rem 0 0 0;
}

.btn-secondary:hover {
    color: black !important;
    background-color: transparent !important;
    border: none !important;
    box-shadow: none  !important;
}

.btn-secondary:focus {
    color: black !important;
    background-color: transparent !important;
    border: none !important;
    box-shadow: none  !important;
}
.total-price {
    margin-top: 30px;
}

</style>