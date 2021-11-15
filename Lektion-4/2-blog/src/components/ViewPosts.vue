<template>
  <div>
    
    <div class="card mb-4" v-for="post in posts" :key="post.id">
        <!-- Card image -->
        <div class="bg-info text-center p-2">
          <!-- Title -->
          <h2 class="card-header-title mb-3 out-title"> {{ post.title.toUpperCase()  }}</h2>
         
        </div>

        <!-- Card content -->
        <div class="card-body">
          <!-- Text -->

          <div class="d-flex justify-content-between">

         
          <ul class="list d-flex">

              <li v-for="(cat, index) in post.categories" :key="index" class="small m-0">  {{cat}}  </li>
        
              </ul>

            <p class="cmall"> Author:  {{ post.author  }} </p>
           </div>


          <p>   {{post.content}}</p>

          

        </div>
      </div>

  </div>
</template>

<script>
export default {

  props: ['posts']



}
</script>

<style scoped>

    .list li {
      background-color: #333 ;
      padding: .1rem 0.6rem;
      list-style: none;
      margin: 0 .5rem 0 0;
      border-radius: .7rem ;
      color: #fff;
    }

</style>