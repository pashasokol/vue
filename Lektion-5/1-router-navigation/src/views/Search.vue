<template>
   <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
        <RoomCard v-for="room in meetingRooms" :key="room.id" :room="room" />

</div>
</template>

<script>

    
  import axios from 'axios'
  import RoomCard from '../components/RoomCard.vue'

export default {
    name: 'Search',
    components: {
        RoomCard
    },
    data() {
        return  {
            meetingRooms: [],
            searched: false,
            query: '',
            
        }
    },
    methods: {
          async getRooms()  {
            const res = await axios.get(`http://localhost:3000/meetingRooms?name=${this.query}`)
            if(res.status === 200) {
                this.meetingRooms = res.data
             
            }
        }
    },


    created() {
        this.query = this.$route.query.q
        this.getRooms()
     

    },

        updated()  {

            this.query = this.$route.query.q
               this.getRooms()
            }
        // }

    
  

}
</script>

<style>

</style>