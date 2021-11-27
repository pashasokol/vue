<template>
  <nav>
      <router-link class="logo" to="/">
          LOGO
      </router-link>
        <ul>
            <li><router-link class="link" exact to="/">Home</router-link></li>
            <li><router-link class="link" exact to="/about">About</router-link></li>
            <li><router-link class="link" exact to="/products">Products</router-link></li>
         
        </ul>



  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>

    nav {
        background-color: rgb(46, 3, 12);
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 1rem;


    }
    .logo  {
        text-decoration: none;
        color: #fff;
        font-size: 2rem;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: 600;
    }

    ul {
        display: flex;
        list-style: none;

    }

    .link {
        color: #fff;
        text-decoration: none;
        padding: 1.5rem 1rem;
        display: inline-block;
        position: relative;
    }

    .link:hover {
        color: #a5a5a5;

    }
    .link.router-link-active::after {
        content: '';
        border-bottom: 2px solid #00fdfd;
        position: absolute;
        left: 1rem;
        right: 1.7rem;
        bottom: 1.2rem;

    }

</style>