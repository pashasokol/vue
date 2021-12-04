<template>
  <div>


       <button class="btn" @click="addToPrice(10)">Add</button>
      <button class="btn" @click="subAcync(5)">SUB</button>

      <div class="grid">
            <ProductCard v-for="product in taxedProducts" :key="product.id" class="card"  :product="product" />
      </div>
  </div>
</template>

<script>

    import ProductCard from './ProductCard.vue'
    import {  mapGetters, mapActions }  from 'vuex'
export default {


    components: {
        ProductCard
    },

    computed: {

        ...mapGetters(['taxedProducts'])

    },

    methods: {
        ...mapActions(['subAcync', 'addToPrice'])
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