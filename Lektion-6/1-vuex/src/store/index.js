import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        name: "product 1",
        price: 200,
      },
      {
        id: 2,
        name: "product 2",
        price: 299,
      },
      {
        id: 3,
        name: "product 3",
        price: 500,
      },
      {
        id: 4,
        name: "product 4",
        price: 700,
      },
      {
        id: 5,
        name: "product 5",
        price: 399,
      },
      {
        id: 6,
        name: "product 6",
        price: 499,
      },
      {
        id: 7,
        name: "product 7",
        price: 455,
      },
      {
        id: 8,
        name: "product 8",
        price: 219,
      },
      {
        id: 9,
        name: "product 9",
        price: 199,
      },
      {
        id: 10,
        name: "product 10",
        price: 399,
      },
      { id: 11,
        name: "product 11",
        price: 599 },
    ],

    comp: 'grid',
    product: null
  },
  getters: {
    taxedProducts: state => {
      
        let taxedProducts = state.products.map(product => {
            return {
                ...product,
                name: product.name + ` + tax `,
                price: Math.round(product.price + product.price * 0.2)
            }
        })


        return taxedProducts
    
    },


    products: state => state.products,
    comp: state => state.comp,
    product: state => state.product


  },
  mutations: {

    ADD: (state, amount)  => {
      state.products.forEach(product => {
        product.price += amount
    })
    },
 


    SUB: (state, amount)  =>{
     
        state.products.forEach(product => {
          product.price -= amount
      })
     
  },

  CHANGE_COMP: (state, payload)  => {
    state.comp = payload
  },

  SET_PRODUCT: (state,id)  => {
    let prod = state.products.find(p => p.id === id)
    prod = {
      ...prod,
      taxPrice: Math.round(prod.price + prod.price * 0.2)
    }
    return prod
  }
},



  actions: {

    // subAsync: (context, amount)  => {
    //   setTimeout(() => {
    //     context.commit('SUB', amount)
    //   },4000)
    // }
    subAsync: ({ commit   }, amount)  => {
      setTimeout(() => {
        commit('SUB', amount)
      },4000)
    },

    addToPrice:  ({commit}, amount)  => {
      commit('ADD', amount)
    },

    changeComp: ( {commit}, component  ) => {
      commit('CHANGE_COMP', component)
    },

    getProduct: ( {commit}, id )  => {
      commit('SET_PRODUCT', id)
    } 
 

  },
  modules: {},
});
