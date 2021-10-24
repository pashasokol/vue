<template>
  <div>
<Navbar />


<div class="output container">

  <h2>{{ message }}</h2>


  <Functions />
  <Input class="mt" />
  <Computed class="mt"/>
</div>



<Footer msg="message" />
<Footer v-bind:msg="message" />
<Footer :msg="message" />


  </div>
</template>

<script>

import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Functions from './components/Functions.vue'
import Input from './components/Input.vue'
import Computed from './components/Computed.vue'

export default {

  name: 'App',
  components: {
    Navbar,
    Footer,
    Functions,
    Input,
    Computed
  },

  data() {
    return {
      message: 'Ett meddelande från våran data'
    }
  }


}
</script>

<style>


* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.container {
  width: 80%;
  margin: auto;
}

.output {
  min-height: 500px;
}



.mt {
  margin-top: 3rem;
}




</style>