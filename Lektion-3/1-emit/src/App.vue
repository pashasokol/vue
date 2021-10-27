<template>
  <div class="container mt-5">
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <Display :name="name" :age="age" :email="email" />
      <Update :name="name" :age="age" :email="email" @update-user="updateUser"/>
    </div>
  </div>
</template>

<script>
import Display from "./components/Display.vue";
import Update from "./components/Update.vue";

export default {
  name: "App",
  components: {
    Display,
    Update,
  },

  data()  {
    return {
      name: 'Pavel',
      age: '28',
      email: 'sokoliklive@gmail.com'
    }
  },
  methods: {
    updateUser(newUser) {
      this.name = newUser.name,
      this.age = newUser.age,
      this.email = newUser.email
    }
  }
};
</script>

<style>
</style>