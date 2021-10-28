<template>
  <div class="border-bottom bg-white">
    <form class="container py-5" @submit.prevent="addTodo">
      <div class="row">
        <div class="col-8">
          <div class="input-group col-8">
            <input type="text" class="form-control" ref="title" placeholder="Add todo..." v-model="title"/>
            <button class="btn btn-dark">ADD</button>
          </div>
        </div>

        <div class="col-4">
          <select class="form-select col-4" v-model="select" @change="$emit('sort', select )">
              <option value="">Show all</option>
              <option value="false">Show Uncompleted</option>
              <option value="true">Show Completed</option>
          </select>
        </div>
      </div>
      <small class="text-danger">  {{error}}   </small>
    </form>
  </div>
</template>

<script>
export default {

    data()  {
        return {
            title: '',
            select: '',
            error: 'error msg'
        }
    },

    methods: {
      addTodo()  {
        if(this.title.trim() !== '')  {
          this.$emit('add-todo', this.title)
          this.title = ''
          this.$refs.title.focus()
          this.error = ''
        }

        else {
          this.error = 'You need to enter what todo'
        }
      }
    }


};
</script>

<style>
</style>