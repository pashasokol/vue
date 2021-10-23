<template>
  <div>

      <label for="name">Name:</label>
      <input type="text" id="name" :class="hasErrors ?  {error: true} : {success: true}" >
      <input type="text" id="name" :class="hasErrors ?  'error' : 'success'" >

  </div>
</template>

<script>
export default {

    data()  {
        return {
            hasErrors: true,
        }
    }

}
</script>

<style scoped>


input{
    width: 100%;
    padding: .5rem .3rem;
}


.error {

    border: 2px solid red;
    outline: red;

}

.success {

    border: 2px solid green;
    outline: green;

}

</style>