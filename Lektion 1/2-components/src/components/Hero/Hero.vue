<template>

<div class="bg-light">


    <div class="container mb-5 py-5 z-depth-1">


    <!--Section: Content-->
    <section class="px-md-5 mx-md-5 text-center dark-grey-text">

      <!--Grid row-->
      <div class="row d-flex justify-content-center">

        <!--Grid column-->
        <div class="col-xl-6 col-md-8">

          <h3 class="font-weight-bold">Call to action</h3>

          <p class="text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quam sapiente
            molestiae
            numquam quas, voluptates omnis nulla ea odio.</p>

          <a class="btn btn-info btn-md ml-0 mb-5" href="#" role="button">Start now<i class="fa fa-magic ml-2"></i></a>

        </div>
        <!--Grid column-->

      </div>
      <!--Grid row-->


      <!--Grid row-->
      <div class="row">

        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />


      </div>
      <!--/Grid row-->


    </section>
    <!--Section: Content-->


  </div>




  </div>
</template>

<script>

import FeatureCard from './FeatureCard.vue'


export default {
  name: 'Hero',
  components: {
    FeatureCard
  }

}
</script>

<style>

</style>