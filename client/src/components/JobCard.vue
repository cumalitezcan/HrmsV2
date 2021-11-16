<template>
  <div>
    <div
      class="card border-dark ms-3 me-3 mt-2 mb-2"
      style="width: 18rem;">
      
      <div class="card-body">
        <h5 class="card-title fs-6 fw-bold text-decoration-underline">
          {{ jobPosting.jobTitle.title }}
        </h5>
        <h6 class="card-subtitle mb-2 text-muted">
          {{ jobPosting.employer.companyName }}
        </h6>

        <h6 class="font-monospace">
          Number Of Position:
          <span class="badge bg-danger ms-2">{{
            jobPosting.numberOfOpenPositions
          }}</span>
        </h6>
        <p class="text-danger">Posting Date: {{ jobPosting.postingDate }}</p>
        <p class="text-danger">Closing Date: {{ jobPosting.closingDate }}</p>
        <hr />
        <div class="text-end">
          <router-link :to="`/jobPostings/jobPosting/${jobPosting.id}`">
            <button @click="sendJobPosting(jobPosting)" class="btn btn-warning">
              View Details
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:["jobPosting"],
  methods: {
    sendJobPosting(u) {
      this.$store.state.jobPosting = u;
    },
  },

  created(){
    console.log("job card methodu")
  }

};
</script>
