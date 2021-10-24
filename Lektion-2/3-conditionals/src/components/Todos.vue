<template>
  <div>

<div v-if="todos.length > 0">
    "title:" {{ todos[0].title}}</div>

<h3 v-else>Det finns inga todos att göra</h3>

  </div>
</template>

<script>
export default {

    props: ['todos']

}
</script>

<style>

</style>