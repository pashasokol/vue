<template>
  <nav>
      <h1>Hello World</h1>
      <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>        
        </ul>
    
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>


nav {
    background-color: darkslateblue;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;

}

h1 {
    color: #fff;
}

ul {
    list-style: none;
    display: flex;

}

a {
    text-decoration: none;
    color: #fff;
    padding: 1rem;
    display: inline-block;
}

a:hover {
    background: #00000036;
}

</style>