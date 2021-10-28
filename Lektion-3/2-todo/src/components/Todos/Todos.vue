<template>
  <div v-if="todos.length">
      <div v-for="todo in todos" :key="todo._id">  

          <Todo  v-if="value === '' " :todo="todo"  @todo-error="$emit('todo-error')"  @delete-todo="$emit('delete-todo', todo._id)" />
          <Todo  v-else-if="todo.completed === value" :todo="todo" @todo-error="$emit('todo-error')" @delete-todo="$emit('delete-todo', todo._id)" />
            
            </div>
   


  </div>
  <div v-else>
    <h2>No todos left</h2>

  </div>
</template>

<script>

import Todo from './Todo.vue'
export default {
    props: ['todos', 'value'],
    components: {
        Todo
    }

}
</script>

<style>

</style>