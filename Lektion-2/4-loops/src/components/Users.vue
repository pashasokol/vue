<template>
  <div v-if="users.length">
      <div class="card" v-for="user in users" :key="user.id">
          <h3>  {{ user.name}}  </h3>

          <p>  {{ user.age}}   </p>
      </div>
  </div>

    <div v-else>
        <h3>No users Registered</h3>
    </div>

</template>

<script>
export default {
    props: ['users']

}
</script>

<style scoped>

  .card {
      border: 1px solid #333;
      padding: 1rem;
      display: inline-block;
      width: 200px;
      margin-right: 1rem;
  }

</style>