<template>
  <nav>
    <div class="container">
      <a href="">
      <h1>LOGO</h1>

      </a>
      <ul v-if="active">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
      </ul>
      <ul v-else>
          <li><a href="#">Login</a></li>
          <li><a href="#">Register</a></li>
      </ul>

  </div>
  </nav>

</template>

<script>
export default {
    name: 'Navbar',
    props: ['active']

}
</script>

<style scoped>

    nav {
        background-color: darkslategray;
        color: #fff;
        

    }

    nav .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    ul {
        display: flex;
        list-style: none;
    }

    a {
        color: #fff;
        text-decoration: none;

    }

    ul li a {
        padding: 1.5rem;
        display: inline-block;

    }

    a:hover {
        background: #00000027;
    }


</style>