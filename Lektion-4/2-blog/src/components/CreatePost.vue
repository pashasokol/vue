<template>
  <div>
    <form @submit.prevent="create">
      <h4 class="text-center mb-4">Create a new post</h4>

      <div class="mb-4">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          v-model="blog.title"
        />
        <p class="invalid-feedback">Please enter a title</p>
      </div>
      <div class="mb-4">
        <label for="content">Content</label>
        <textarea
          type="text"
          class="form-control"
          id="content"
          v-model="blog.content"
        ></textarea>
        <p class="invalid-feedback">Please enter some content</p>
      </div>

      <p>Categories</p>

      <div class="mb-4">
        <div class="form-check form-check-inline">
          <input
            type="checkbox"
            class="form-check-input"
            id="travel"
            autocomplete="off"
            value="Travel"
            v-model="blog.categories"
          />
          <label class="form-check-label" for="travel">Travel</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            type="checkbox"
            class="form-check-input"
            id="food"
            autocomplete="off"
            value="Food"
            v-model="blog.categories"
          />
          <label class="form-check-label" for="food">Food</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            type="checkbox"
            class="form-check-input"
            id="computers"
            autocomplete="off"
            value="Computers"
            v-model="blog.categories"
          />
          <label class="form-check-label" for="computers">Computers</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            type="checkbox"
            class="form-check-input"
            id="frontend"
            autocomplete="off"
            value="Frontend"
            v-model="blog.categories"
          />
          <label class="form-check-label" for="frontend">Frontend</label>
        </div>

        <p class="text-danger small" v-if="catError">
          Please choose a category
        </p>
      </div>

      <div class="mb-4">
        <label for="select">Author</label>

        <select
          class="form-select"
          aria-label="Default select example"
          id="select"
          v-model="blog.author"
        >
          <option selected value="" disabled></option>
          <option v-for="(au, index) in authors" :key="index">{{ au }}</option>
        </select>

        <p class="invalid-feedback">Please choose an author</p>
      </div>

      <button class="btn btn-info">Create post</button>
    </form>

    <div class="mt-5">

            <h2 class="text-center mb-3">Preview</h2>


      <div class="card">
        <!-- Card image -->
        <div class="bg-info text-center p-2">
          <!-- Title -->
          <h2 class="card-header-title mb-3"> {{ blog.title  }}</h2>
         
        </div>

        <!-- Card content -->
        <div class="card-body">
          <!-- Text -->
          <p>   Content : </p>
          <p>   {{blog.content}}</p>
          <p>  Categories: </p>
          <ul class="list-group list-group-horizontal">

              <li v-for="(cat, index) in blog.categories" :key="index">  {{cat}}  </li>
        
              </ul>

            <p> Author:  {{ blog.author  }} </p>

        </div>
      </div>
      <!-- Card -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        author: "",
      },

      authors: ["Pavel", "Sanela", "Stepa"],
      catError: false,
    };
  },

  methods: {
    create(e) {
      if (
        this.blog.title !== "" &&
        this.blog.content !== "" &&
        this.blog.categories.length > 0 &&
        this.blog.author !== ""
      ) {
        // Emit new post

        // reset form

        this.blog = {
          title: "",
          content: "",
          categories: [],
          author: "",
        };

        // validate

        e.target.forEach((t) => t.classList.remove("is-invalid"));
        this.catError = false;
      } else {
        e.target.forEach((t) => {
          if (t.type == "checkbox") {
            if (this.blog.categories.length > 0) {
              t.classList.remove("is-invalid");
              this.catError = false;
            } else {
              t.classList.add("is-invalid");
              this.catError = true;
            }
          } else {
            if (t.value === "") {
              t.classList.add("is-invalid");
            } else {
              t.classList.remove("is-invalid");
            }
          }
        });
      }
    },
  },
};
</script>

<style>
</style>