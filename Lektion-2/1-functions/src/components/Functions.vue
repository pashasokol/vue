<template>
  
  <div>
      <!-- <button v-on:click="sum++">Add</button>
      <button @click="sum--">Substract</button> -->
      <button v-on:click="add()">Add</button>
      <button @click="sub()">Substract</button>

      <h4> sum: {{  sum  }}       </h4>


    
  </div>
</template>

<script>



export default {
    name: 'Functions',

    data() {
        return {
            sum: 10
        }
    },

    methods: {
        add(nr)  {
            this.sum += nr
        },

        sub() {
            this.sum --
        }


    }

}
</script>

<style scoped>

button {
    background-color: darkslateblue;
    padding: .3rem .8rem;
    color: #fff;
    border: none;
    margin: 1rem 1rem 1rem 0;
    cursor: pointer;

}

</style>