<template>
  <div class="bg-light">

    <Header />
    <AddTodo @add-todo="add" @sort="sortTodos"/>

    <div class="container py-5">
      
    <Todos :value="sort"  :todos="todos" @delete-todo="deleteTodo"  @todo-error="showModal" />

    </div>

    <ErrorModal v-if="showError"/>

  </div>
</template>

<script>

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
      todos: [
        { _id: '1', title: 'Todo Idet One', completed: false},
        { _id: '2', title: 'Todo Idet Two', completed: true},
        { _id: '3', title: 'Todo Idet Three', completed: false},
        { _id: '4', title: 'Todo Idet Four', completed: false},
        { _id: '5', title: 'Todo Idet Five', completed: false},
      ],

      sort: '',
      showError: false
    }
  },

  methods: {
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

    showModal()  {
      this.showError = true

    }

  }

}
</script>

<style>

</style>