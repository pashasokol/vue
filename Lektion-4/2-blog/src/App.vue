<template>
<div>
  <Navbar @change-component="changeComponent" />


  <div class="container mt-5">
    <keep-alive>

    <component :is="component" :posts="posts" @change-component="changeComponent" @new-post="newPost" />

    </keep-alive>

  </div>
  
</div>
</template>

<script>

import Navbar from './components/Navbar.vue'
import CreatePost from './components/CreatePost.vue'
import ViewPosts from './components/ViewPosts.vue'
export default {

  name: 'App',
  components: {
    Navbar,
    CreatePost,
    ViewPosts
  },

  data() {
    return {
      component: 'ViewPosts',
      posts: []
    }
  },
  methods: {
    changeComponent(comp)  {
      this.component = comp;
    },
  
    newPost(blogPost)  {

    this.posts.push(blogPost)
    this.component = 'ViewPosts'

  }
  }

}
</script>

<style>

</style>