<template>
  <div>
      {{ $route.params.id  }}
  </div>
</template>

<script>

import axios from 'axios'

export default {
        name: 'Booking Details',
        data()  {
            return {
                meetingRoom: null
            }
        },

        methods: {
            async getARoom() {
                const res = await axios.get('http://localhost:3000/meetingRooms/' + this.$route.params.id)

                if(res.status === 200) {
                    this.meetingRoom = res.data
                }          
            }
        },
        created()  {
            this.getARoom()
        }


}
</script>

<style>

</style>