<template>
  <div>

    <Navbar />

    <div class="container mt-5">
      <User />
    </div>

  </div>
</template>

<script>

import Navbar from './components/Navbar.vue'
import User from './components/User.vue'


export default {

  name: 'App',
  components: {
    Navbar,
    User


  }

}
</script>

<style>

</style>
