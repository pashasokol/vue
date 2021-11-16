<template>
  <nav>
      <h1>LOGO</h1>
      <ul>
          <li><router-link to="/" class="link" exact>Home</router-link></li>
          <li><router-link to="/about" class="link">About</router-link></li>

      </ul>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    background-color: #123b20;
    color: #fff;

}

ul {
    display: flex;
    list-style: none;

}


.link {

    text-decoration: none;
    color: #fff;
    padding: 1rem ;
    display: inline-block;

}


.link:hover {
    background-color: rgba(0, 0, 0, 0.281);
    ;
}

/* .router-link-active {
    text-decoration: underline;
} */
.router-link-active {
    text-decoration: underline;
}
</style>