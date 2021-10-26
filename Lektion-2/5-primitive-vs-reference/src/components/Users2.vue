<template>
  <div>

    
          <div class="user" v-for="user in users" :key="user.id">
              <h3>   {{ user.name }}</h3>
              <p>  Email:  {{ user.email }}  </p>

          </div>
     


      <button @click="change">Change</button>
    
  </div>
</template>

<script>
export default {

    props: ['users'],
    methods: {

        change() {
            if(this.users[0].name == 'Plo') {

                this.users.pop()
            }
        }
    }

}
</script>

<style scoped>

 .d-flex {
     display: flex;
     justify-content: space-between;

 }

 .user {
     background-color: #001925;
     color: #fff;
     border: 1px solid #000;
     padding: 1rem;
     margin: 1rem;
 }

</style>