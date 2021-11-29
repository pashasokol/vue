<template>
  <div>
   <Navbar />
    <router-view/>
  </div>
</template>

<script>

import Navbar from './components/Navbar.vue'
export default {
  components: {
    Navbar
  }
  
}
</script>




<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

  .btn {
    margin: 1rem 0 0 1rem;
    padding: .5rem .8rem;
    border-radius: 10px;
    border:none;
    background-color: rgb(46, 3, 12);
    color: #fff;
    cursor: pointer;

  }


  .btn:hover {
    box-shadow: 0 0 5px 0 rgb(46, 3, 12);

  }

  .btn:active {
    background-color: #000;
    box-shadow: none;
  }
</style>
