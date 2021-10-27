<template>
  <div class="col">
    <div class="card h-100">
     <div class="card-header bg-primary text-center text-white">
         <h2 class="card-title">   {{name}}  </h2>
         <p class="card-subtitle">  Age: {{ age }}  </p>
     </div>
      <div class="card-body text-center">
        <p class="card-text">
          Email:   {{ email }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

    props: ['name', 'age', 'email']

}
</script>

<style>

</style>