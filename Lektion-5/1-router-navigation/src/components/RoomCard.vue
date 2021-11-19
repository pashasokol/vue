<template>
   <div class="col">
       <router-link :to="'/booking/details/' + room.id" class="text-dark">

    <div class="card h-100">
      <img
        :src="room.imgURL"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">   {{ room.name}}  </h5>
        <p class="card-text">
          
          {{ room.desc.slice(0,50)  }}...

        </p>
      </div>
    </div>
       </router-link>
  </div>
</template>

<script>
export default {

    props: ['room']

}
</script>

<style>

</style>