<template>
  <div>
  
    <Navbar />
    
    <router-view/>

    <Footer />

  </div>
</template>

<script>


  import Navbar from './components/navigation/Navbar.vue'
  import Footer from './components/navigation/Footer.vue'

export default {

  components: {
    Navbar,
    Footer
  }
  
  
}
</script>

<style>

</style>
