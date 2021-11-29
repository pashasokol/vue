<template>
  <div>
      <div class="grid">
            <ProductCard v-for="product in products" :key="product.id" class="card"  :product="product" />
      </div>
  </div>
</template>

<script>

    import ProductCard from './ProductCard.vue'
export default {


    components: {
        ProductCard
    },

    data()  {
        return {
            products: [
                {
                    id: 1, name: 'product 1', price: 200
                },
                {
                    id: 2, name: 'product 2', price: 299
                },
                {
                    id: 3, name: 'product 3', price: 500
                },
                {
                    id: 4, name: 'product 4', price: 700
                },
                {
                    id: 5, name: 'product 5', price: 399
                },
                {
                    id: 6, name: 'product 6', price: 499
                },
                {
                    id: 7, name: 'product 7', price: 455
                },
                {
                    id: 8, name: 'product 8', price: 219
                },
                {
                    id: 9, name: 'product 9', price: 199
                },
                {
                    id: 10, name: 'product 10', price: 399
                },
                {
                    id: 11, name: 'product 11', price: 599
                },
            ]
        }
    }

}
</script>

<style scoped>

    .grid  {
        padding: 1rem;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px,1fr)) ;
        gap: 1rem;

    }

    .card {
        background-color: #005c50;
        color: #fff;
    }

</style>