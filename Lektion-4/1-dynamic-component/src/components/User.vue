<template>
  <div>

      <button class="btn btn-sm btn-outline-primary rounded-0">
          Login
      </button>
      <button class="btn btn-sm btn-primary">
          Signup
      </button>


      <Signup v-if="login === false" />
      <Login v-if="login === true" />
  </div>
</template>

<script>


    import Signup from './Signup.vue'
    import Login from './Login.vue'

export default {
    components: {
        Signup,
        Login
    },

    data() {
        return {
            login: true
        }
    }

}
</script>

<style>

</style>