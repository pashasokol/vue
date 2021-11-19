<template>
  <div>

      <!-- <button @click="login=true" class="btn btn-sm btn-outline-primary rounded-0">
          Login
      </button>
      <button @click="login=false" class="btn btn-sm btn-primary">
          Signup
      </button>


      <Signup v-if="login === false" />
      <Login v-if="login === true" /> -->
      <button @click="change('Login')" class="btn btn-sm  rounded-0" :class="loginClasses">
          Login
      </button>
      <button @click="change('Signup')" class="btn btn-sm rounded-0" :class="registerClasses">
          Signup
      </button>


      <keep-alive>

     <component :is="comp"  />
     </keep-alive>


<!-- 
      <Signup v-if="login === false" />
      <Login v-if="login === true" /> -->
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
            comp: 'Login',
            login: true
        }
    },

    methods: {
        change(val)  {
            this.comp = val;
            if(val === 'Login')
                this.login = true
                else
                this.login = false
        }
    },

    computed: {
        loginClasses() {
            return {
                'btn-primary': this.login,
                'btn-outline-primary': !this.login
            }
        },
        registerClasses()  {
                return {
                'btn-primary': !this.login,
                'btn-outline-primary': this.login
            }
        },
        
    }

}
</script>

<style>

</style>