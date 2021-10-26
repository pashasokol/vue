<template>
  <div>

    <Navbar :title="title"  v-on:changeTitle="change($event)" />

    <div class="container">

          <Users :users="users" />
          <Users2 :users="users" />

    </div>
    <Footer :title="title" />
  </div>
</template>



<script>

import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Users from './components/Users.vue'
import Users2 from './components/Users2.vue'
export default {


  name: 'App',
  components: {
    Navbar,
    Footer,
    Users,
    Users2

    },
  data() {
    return {
      title: 'Frontend 2021',

      users: [
        { id:1, name: 'Pavel', email: 'sokoliklive@gmail.com'  },
        { id:2, name: 'Sanela', email: 'sanela@gmail.com'  },
        { id:3, name: 'Stepa', email: 'stepa@gmail.com'  },
        { id:4, name: 'Lusya', email: 'lusya@gmail.com'  },
      ]
      
      }
  },

  methods: {
    change(newTitle) {
      this.title = newTitle
    } 
  }

}
</script>

<style>


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  width: 80%;
  margin: auto;
  min-height: 500px;
}

</style>