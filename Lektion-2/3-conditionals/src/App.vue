<template>
  <div>


    <Navbar :active="active" />

    <div class="container">
      <h1 v-if="name === 'Pavel'">Hej {{ name }} välkommen tillbaka</h1>
      <h1 v-else>Trevlig att träffas  {{ name }}</h1>

    <Form class="mt"/>
      
    </div>

  </div>
</template>

<script>

import Form from './components/Form.vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Form
  },

  data() {
    return {
      name: 'Pavel',
      active: true,
    }
  }

}
</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  width: 80%;
  margin: auto;
  
  }

  .mt {
    margin-top: 2rem;
  }

</style>