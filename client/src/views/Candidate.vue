<template>
  <Navbar />
  <div class="container">
    <h1>Candidates</h1>
    <hr />
     <div class="d-flex align-items-stretch flex-wrap">
        <ImageCard />
    </div>
  </div>
  <hr />
  <ul>
    <li v-for="(u,index) in usersLogIn" :key="index">
      {{u}}
    </li>
  </ul>
  <Footer />
</template>

<script>




export default {

     created() {
        this.$store.dispatch("getCvDetails")
        this.$store.dispatch("getUsers")
       
    },

   
    
}
</script>
