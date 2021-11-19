<template>
  <div>
  
    <Navbar />

    <div class="container my-5">
      
    
    <router-view/>

    </div>
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
