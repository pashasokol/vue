<template>
  <nav class="bg-info p-3 text-dark d-flex justify-content-between align-items-center">
      <h1 class="m-0">Blog</h1>
      <div class="d-flex align-items-center">
          <p @click="$emit('change-component', 'ViewPosts')" class="m-0"> My posts</p>
          <button @click="$emit('change-component', 'CreatePost')" class="ms-3 btn btn-outline-dark">Create new post</button>
      </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>

  p {
    cursor: pointer;
  }

</style>