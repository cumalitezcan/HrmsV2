<template>
  <Navbar />
  <div class="container">
    <h1>Candidates</h1>
    <hr />
    <div class="row">
      <div class="col-12">
        <div class="row d-flex justify-content-between">
          <ImageCard class="m-2" />
        </div>
      </div>
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
