<template>
  <div class="products">
      <aside>
          <div class="buttons">
              <button @click="changeComp('Grid')"> <i class="fas fa-th-large"></i>  </button>
              <button @click="changeComp('List')"> <i class="fas fa-list"></i>  </button>
          </div>

          <form>
              <div>
                  <input type="text" placeholder="Search...">
              </div>
          </form>


      </aside>

        <div class="content">
            <component :is="comp" />

        </div>

  </div>
</template>

<script>
import Grid from '../components/Products/Grid.vue'
import List from '../components/Products/List.vue'
export default {
    name: 'products',
    components: {
        Grid,
        List
    },
    data() {
        return {
            comp: 'List'
        }
    },
    methods: {
        changeComp(val) {
            this.comp = val;
        }
    }

}
</script>

<style scoped>
    .products {
        display: flex;

    }

    aside {
        flex: 2;
        background-color: #424242;
        padding: 2rem;
        min-height: calc(100vh - 66.29px);


    }
    .content {
        flex: 10;
    }

    .buttons button {
        padding: .2rem;
        margin-right: .5rem;
        cursor: pointer;
        color: #fff;
        background: transparent;
        border: none;
        margin-bottom: 3rem;

        }

</style>