<template>
  <div>
      <h1>404</h1>
      <p>Page not found</p>
  </div>
</template>

<script>
export default {

    created()  {
        setTimeout(() => {
            // this.$router.replace({ path: '/'})
            this.$router.replace({ name: 'Home'})
        }, 4000)
    }
 
}
</script>

<style>

</style>