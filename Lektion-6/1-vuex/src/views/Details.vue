<template>
  <div v-if="product">
    <h1>   {{ product.name  }}  </h1>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {

  methods: {
    ...mapActions(['getProduct'])
  },
  computed: {
    ...mapGetters(['product'])
  },

  created() {
    this.getProduct(this.$route.params.id)
  }
}
</script>

<style>

</style>