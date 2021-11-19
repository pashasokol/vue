<template>
<div>
  <Navbar />


  <div class="container mt-5">
    <component :is="component" />

    

  </div>
  
</div>
</template>

<script>

import Navbar from './components/Navbar.vue'
import CreatePost from './components/CreatePost.vue'
export default {

  name: 'App',
  components: {
    Navbar,
    CreatePost
  },

  data() {
    return {
      component: 'CreatePost'
    }
  }

}
</script>

<style>

</style>