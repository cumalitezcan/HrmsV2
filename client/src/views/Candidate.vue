<template>
<div>
  <Navbar />
  <div class="container">
    <h1>Candidates</h1>
    <hr />
    <div class="row">
      <div class="col">
       <div class="d-flex flex-wrap">
       <div v-for="(user,index) in cvDetails" :key="index">
         <ImageCard :user="user" />
       </div>
    </div>
    </div>
    </div>
 
  <hr />
  <!-- <ul>
    <li v-for="(u,index) in usersLogIn" :key="index">
      {{u}}
    </li>
  </ul> -->
   </div>
  <Footer />
  </div>
</template>
<script>

import {mapState,mapActions} from "vuex"
export default {

  created(){
    this.getCvDetails();
  },


    methods:{
    ...mapActions(["getCvDetails"])
    },
   computed: {
     ...mapState(["cvDetails",]),
    }

}
</script>
