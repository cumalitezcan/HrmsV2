<template>
  <Navbar />
  <div class="container">
    <div class="row">
      <div class="p-5 col-md-6">
        <img src="@/assets/hrms2.png" class="img-fluid" alt="..." />
      </div>
      <div class="col-lg-6 p-5">
        <div>
          <h1
            class="mt-5 text-center display-2 fw-bold fst-italic text-primary"
          >
            Find a new
          </h1>
        </div>
        <div>
          <h1 class="text-center display-1 fw-bold fst-italic text-primary">
            Job
          </h1>
        </div>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-md-10 offset-1 ">
        <div class="row d-flex justify-content-between">
          <Card />
        </div>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col d-flex justify-content-center d-grid gap-2 col-6 mx-auto text-center">
        <router-link :to="{ name: 'JobPostingPage' }">
          <!-- <p class="btn btn-warning">
           View All Job Postings by Posting Date
          </p> -->
          <a class="fas fa-arrow-down fa-2x"></a>
          <div class="mt-2">
            <button type="button" class="btn btn-outline-success btn-rounded">
              View All Job Postings by Posting Date
            </button>
          </div>
        </router-link>
      </div>
    </div>
  </div>
  <hr />
  <Footer />
</template>

<script>
export default {
  mounted(){
    this.$store.dispatch("getRecentlyPosted");
    this.$store.dispatch("getJobPostintConfirmation");
  }
}
</script>
