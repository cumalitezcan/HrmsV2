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
  <Footer />
</template>

<script>




export default {

     mounted() {
        this.$store.dispatch("getCvDetails")
        console.log("geldi")
    },
    
}
</script>
