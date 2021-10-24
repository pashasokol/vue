<template>
  <div>

    <Names :names="names"/>
    <Loop :names="names"/>
    <Users :users="users"/>
    <Object :users="users"/>
  </div>
</template>

<script>

import Names from './components/Names.vue'
import Loop from './components/Loop.vue'
import Users from './components/Users.vue'
import Object from './components/Object.vue'
export default {

  name: "App",
  components: {
    Names,
    Loop,
    Users,
    Object

  },

  data()  {
    return {
      
      names: ['Pavel', 'Sanela', 'Stepa', 'Lusya', 'Koshka'],
      users: [
        { id:1, name: 'Pavel', age:28},
        { id:2, name: 'Sanela', age:34},
        { id:3, name: 'Lusya', age:12}
      ] 
    }
  }

}
</script>

<style>

</style>