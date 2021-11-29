<template>
  <div>

      <button class="btn" @click="addToPrice">Add</button>
      <button class="btn" @click="subPrice(5)">SUB</button>

      <div class="list">
            <ProductCard v-for="product in prodTax" :key="product.id" class="card"  :product="product" />
      </div>
  </div>
</template>

<script>

    import ProductCard from './ProductCard.vue'
export default {


    components: {
        ProductCard
    },

    methods: {
        addToPrice()   {
            // this.$store.state.products.forEach(product => {
            //     product.price += 10
            // })
            // this.$store.commit('ADD', 10)
            this.$store.dispatch('addToPrice', 5)

        },

        subPrice(amount)  {

            // this.$store.commit('SUB', amount)

            this.$store.dispatch('subAsync', amount)

        }

    },

    computed: {
        products()  {
            return this.$store.state.products
        },

        prodTax()  {
            return this.$store.getters.taxedProducts
        }
    }

 

}
</script>

<style scoped>



    .card {
        margin: 1rem;
        background-color: #424242;
        color: #fff;
        display: flex;
        justify-content: space-between;
    }

</style>