<template>
  <div class="overlay" @click.self="closeModal">

<div class="card">
  <div class="card-header">
  
    <h5 class="card-title">Whoops!</h5>
  </div>
  <div class="card-body">
    <p class="card-text">You need to complete Todo first</p>
    <button class="btn btn-primary" @click="closeModal">OK</button>
  </div>
</div>

  </div>
</template>

<script>
export default {
  methods: {
    closeModal()  {
      this.$emit('close-modal')
    }
  }

}
</script>

<style scoped>

.overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #00000046 ;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>