<template>
  <div class="bg-light">

    <Header />
    <AddTodo @add-todo="add" @sort="sortTodos"/>

    <div class="container py-5">
      
    <Todos :value="sort"  :todos="todos" @toogle-complete="toogleComplete" @delete-todo="deleteTodo"  @todo-error="openModal" />

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


// import {v4 as uuidv4} from 'uuid'

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
      apiUrl: 'http://localhost:9999/api/todos',
      apiUrl2: 'http://localhost:9999/api/todos/new',
      apiUrl3: 'http://localhost:9999/api/todos'
    }
  },

  methods: {


    async fetchTodos()  {
      const res = await axios.get(this.apiUrl)
      console.log(res.data)
      this.todos = res.data;
    },




    async add(title)  {

      // let todo = {
      //   _id: uuidv4(),
      //   title,
      //   completed: false
      // }

    try {
      
      const res = await axios.post(this.apiUrl2, {title})
    console.log(res)

    if(res.status === 201) {
      // this.todos.push(todo)
      this.fetchTodos()
    }
      }
      catch(err) {
        console.log(err)
      }
    },

   deleteTodo(id)   {

     

    axios.delete(`${this.apiUrl3}/${id}`)
    .then(res => {
      console.log(res)
      if(res.status === 200)  {
        this.todos = this.todos.filter(todo => todo._id !== id)
      }
    })
    .catch(err => console.log(err))


    },

    async toogleComplete(todo)  {

      
      const res = await axios.patch(`${this.apiUrl3}/${todo._id}`, {
        completed: !todo.completed
      })

      if(res.status === 200) {
        todo.completed = !todo.completed
      }

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