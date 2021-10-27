<template>
  <div class="col">
      <div class="card h-100">
     <div class="card-header bg-primary text-center text-white">
         <h2 class="card-title">  Update </h2>
     
     </div>
      <div class="card-body">

      <form @submit.prevent="update">
  <!-- Name input -->
  <div class="mb-2">
    <label class="form-label" for="name">Name</label>
    <input type="text" id="name" class="form-control" v-model="newName"/>
  </div>

  <!-- Age input -->
  <div class="mb-2">
    <label class="form-label" for="age">Age</label>
    <input type="number" id="age" class="form-control" v-model="newAge"/>
  </div>

  <!-- Email input -->
  <div class="mb-4">
    <label class="form-label" for="email">Email address</label>
    <input type="text" id="email" class="form-control" v-model="newEmail" />
  </div>



  <!-- Submit button -->
  <button type="submit" class="btn btn-primary btn-block mb-4">CHANGE</button>
</form>
       
      </div>
    </div>
  </div>
</template>

<script>
export default {

    props: ['name', 'age', 'email'],
    data()  {
        return {
            newName: this.name,
            newAge: this.age,
            newEmail: this.email
        }
    },

    methods:  {

        update()  {
            
            let user = {
                name: this.newName,
                age: this.newAge,
                email: this.newEmail
            }

            this.$emit('update-user', user)
        }
            }

}
</script>

<style>

</style>