<template>
  <div>
     <div class="row" v-if="meetingRoom">
         <div class="col-lg-6">
             <img class="w-100" :src="meetingRoom.imgURL" alt="meeting room image">

         </div>


        <div class="col-lg-6 mt-5 mt-lg-0">


            <div class="text-center text-lg-start">

            <h2> {{ meetingRoom.name}} </h2>
            <p> 
                <span class="text-danger">Capacity   </span>
                <span>  {{ meetingRoom.capacity  }}  </span> </p>

                </div>    
        <div class="mt-4">

            <h4>Description</h4>
            <p>  {{ meetingRoom.desc}}    </p>

        </div>


            <div class="mt-5">

                <h4> Equipment </h4>
             <ul class="list-group list-group-horizontal">
               <li v-for="(eq, index) in meetingRoom.equipment" :key="index"
                class="list-group-item"> {{eq}}  </li>
            </ul>

            </div>
            <div class="mt-5 text-end">
                <button class="btn btn-info ms-auto"> Book now </button>
            </div>
        </div>


     </div>

  </div>
</template>

<script>

import axios from 'axios'

export default {
        name: 'BookingDetails',
        props: ['id'],
        data()  {
            return {
                meetingRoom: null
            }
        },

        methods: {
            async getARoom() {
                // const res = await axios.get('http://localhost:3000/meetingRooms/' + this.$route.params.id)

                try {
                const res = await axios.get('http://localhost:3000/meetingRooms/' + this.id)

                    if(res.status === 200) {
                        this.meetingRoom = res.data
                }          
                    } catch(err) {
                        this.$router.replace({name: '404'})
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