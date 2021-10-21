<template>
  <div>

    <appNavbar />
    <Hero />

  </div>
</template>

<script>

import Navbar from './components/navigation/Navbar.vue'
import Hero from './components/Hero/Hero.vue'



export default {

  name: 'App',
  components: {
    appNavbar: Navbar,
    Hero
  }

}
</script>




<style>


</style>