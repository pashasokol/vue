<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-info">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/">Meetingsroom</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" exact to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/booking">Booking</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/about">About</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {

}
</script>

<style>

</style>