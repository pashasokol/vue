<template>
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
        <RoomCard v-for="room in meetingRooms" :key="room.id" :room="room" />
  
</div>
</template>

<script>
    import axios from 'axios'
    import RoomCard from '../../components/RoomCard.vue'

export default {
    name: 'Booking',
    components: {
        RoomCard
         
        },
    data() {
        return {
            meetingRooms: []
        }
    },
    methods: {

        async getRooms()  {
            const res = await axios.get('http://localhost:3000/meetingRooms')
            if(res.status === 200) {
                this.meetingRooms = res.data
            }
            console.log(res)
        }

    },
    created() {
        this.getRooms();
    }

}
</script>

<style>

</style>