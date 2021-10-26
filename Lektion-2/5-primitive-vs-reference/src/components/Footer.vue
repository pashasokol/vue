<template>
  <footer>
      <h3> Copyright 2021  {{ title }}   </h3>
  </footer>
</template>

<script>
export default {

    props: ['title']

}
</script>

<style scoped>
 footer {
     background-color: darkslategray;
     padding: 2rem;
     color: #fff;
 }

</style>