<template>
  <div>


<button class="btn btn-active" @click="toogle">TOGGLE</button>
<div class="output" :class="computedClasses">
    <h2>EN TEXT</h2>

</div>

  </div>
</template>

<script>
export default {

    data() {
        return {
            bg: false,
            text: false

        }
    },

    methods: {
        toogle() {
            this.bg = !this.bg,
            this.text = !this.text
        }
    },

    computed: {
        computedClasses(){
            return {
                'bg-dark': this.bg,
                'text-white': this.text
            }
        }
    }

}
</script>




<style scoped>

    .btn {
        border: none;
        border-radius: 0.5rem;
        padding: 0.4rem .8rem;
        cursor: pointer;
    }

    .btn-primary {
        background-color: #38054e;
        color: #fff;
    }
    .btn-active {
        background-color: green;
        color: #fff;
    }

    .output {
        margin-top: 1rem;
        background-color: #f4f4f4;
        width: 300px;
        min-height: 300px;
        padding: 1rem;
    }


    .bg-dark {
        background-color: #333;

    }

    .text-white {
        color: #fff;
    }

</style>