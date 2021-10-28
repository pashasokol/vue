<template>
  <div class="border shadow bg-white d-flex justify-content-between align-items-center p-1 mb-2 rounded">
      <p class="m-0" :class="{'done': todo.completed}" @click="todo.completed = !todo.completed">  {{ todo.title }}</p>
      <button class="btn btn-danger btn-sm" @click="deleteTodo"><i class="fas fa-trash"></i></button>
  </div>
</template>

<script>
export default {

    props: ['todo'],
    methods: {
        deleteTodo() {
            if(this.todo.completed){
                this.$emit('delete-todo', this.todo._id)
            }

            else {
                this.$emit('todo-error')
            }
        }
    }

}
</script>

<style scoped>

    p {
        cursor: pointer;
        flex: 1;
    }
    .done {
        text-decoration: line-through;
        color: #9b9b9b;
    }

</style>