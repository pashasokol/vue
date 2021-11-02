<template>
  <div v-if="todos.length">

<transition-group name="fade-slide">




      <div v-for="todo in todos" :key="todo._id">  

          <Todo  v-if="value === '' " :todo="todo" @toogle-complete="$emit('toogle-complete', todo)"  @todo-error="$emit('todo-error')"  @delete-todo="$emit('delete-todo', todo._id)" />
          <Todo  v-else-if="todo.completed === value" @toogle-complete="$emit('toogle-complete', todo)" :todo="todo" @todo-error="$emit('todo-error')" @delete-todo="$emit('delete-todo', todo._id)" />
            
            </div>
   
</transition-group>


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

.fade-slide-enter-active, .fade-slide-leave-active {
  transition: all 0.5s ease;
}

.fade-slide-enter {
  opacity: 0;
  transform: translateX(-50px);

}
  .fade-slide-leave-to {
    opacity: 0;
    transform: translateX(50px);
  }

/* .fade-slide-enter-to {
  opacity: 1;
  } */


</style>