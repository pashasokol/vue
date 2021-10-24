<template>
  <div>


    <Navbar :active="active" />

    <div class="container">
      <h1 v-if="name === 'Pavel'">Hej {{ name }} välkommen tillbaka</h1>
      <h1 v-else>Trevlig att träffas  {{ name }}</h1>

    <Form class="mt"/>
    <Todos :todos="todos" class="mt"/>
      
    </div>

  </div>
</template>

<script>

import Form from './components/Form.vue'
import Navbar from './components/Navbar.vue'
import Todos from './components/Todos.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Form,
    Todos
  },

  data() {
    return {
      name: 'Pavel',
      active: true,
      todos: [
        {title: 'Todo1'},
        {title: 'Todo2'},
        {title: 'Todo3'}

      ]
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