<template>
  
  <footer>
      <h1>{{ msg }}</h1>
  </footer>
</template>

<script>
export default {
    name: 'Footer',
    props: ['msg']

}
</script>

<style scoped>


footer {
    background-color: darkslateblue ;
    padding: 3rem 1rem;
    color: #fff;
}

</style>