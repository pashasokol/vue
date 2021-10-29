<template>
  <div class="bg-light">

    <Header />
    <AddTodo @add-todo="add" @sort="sortTodos"/>

    <div class="container py-5">
      
    <Todos :value="sort"  :todos="todos" @delete-todo="deleteTodo"  @todo-error="openModal" />

    </div>

    <ErrorModal v-if="showModal" @close-modal="showModal = false"/>

  </div>
</template>

<script>


import axios from 'axios'
import Header from './components/Header.vue'
import AddTodo from './components/AddTodo.vue'
import Todos from './components/Todos/Todos.vue'
import ErrorModal from './components/Todos/ErrorModal.vue'


import {v4 as uuidv4} from 'uuid'

export default {

  name: 'App',
  components: {
    Header,
    AddTodo,
    Todos,
    ErrorModal
  },

  data()  {
    return {
      todos: [],

      sort: '',
      showModal: false,
      apiUrl: 'http://localhost:9999/api/todos'
    }
  },

  methods: {


    async fetchTodos()  {
      const res = await axios.get(this.apiUrl)
      console.log(res.data)
      this.todos = res.data;
    },




    add(title)  {

      let todo = {
        _id: uuidv4(),
        title,
        completed: false
      }

      this.todos.push(todo)
    },

    deleteTodo(id)   {

      this.todos = this.todos.filter(todo => todo._id !== id)

    },

    sortTodos(val)  {

      switch(val)  {
        case 'false':
          this.sort = false
          break;

        case 'true':
          this.sort = true
          break;
        
        default:
          this.sort = ''
      }
    },

    openModal()  {
      this.showModal = true

    }

  },

  created() {
    console.log('created')
    this.fetchTodos();
  }

}
</script>

<style>

</style>