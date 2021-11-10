<template>
  <div>
      <form>

          <h4 class="text-center mb-4">Create a new post</h4>

          <div class="mb-4">
              <label for="title">Title</label>
              <input type="text" class="form-control" id="title">
              <p class="invalid-feedback"> Please enter a title</p>
          </div>
          <div class="mb-4">
              <label for="content">Content</label>
              <textarea type="text" class="form-control" id="content"></textarea>
              <p class="invalid-feedback"> Please enter some content</p>
          </div>


        <p> Categories </p>

            <div class="form-check form-check-inline">

                <input type="checkbox" class="form-check-input" id="travel" autocomplete="off" value="Travel"/>
                <label class="form-check-label" for="travel">Travel</label>

            </div>    
            <div class="form-check form-check-inline">

                <input type="checkbox" class="form-check-input" id="food" autocomplete="off" value="Food"/>
                <label class="form-check-label" for="food">Food</label>

            </div>    
            <div class="form-check form-check-inline">

                <input type="checkbox" class="form-check-input" id="computers" autocomplete="off" value="Computers"/>
                <label class="form-check-label" for="computers">Computers</label>

            </div>    
            <div class="form-check form-check-inline">

                <input type="checkbox" class="form-check-input" id="frontend" autocomplete="off" value="Frontend"/>
                <label class="form-check-label" for="frontend">Frontend</label>

            </div>    


        <p class="text-danger small">Please choose a category</p>


           

      </form>

      <div>

      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>