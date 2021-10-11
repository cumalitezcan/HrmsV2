<template>
  <div
    v-for="u in user"
    :key="u.id"
    class="card border-dark mb-3"
    style="width: 18rem;"
  >
    <div class="card-body">
    
      <h5 class="card-title fs-6 fw-bold text-decoration-underline">{{ u.jobTitle.title }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">
        {{ u.employer.companyName }}
      </h6>
    
        <h6 class="font-monospace">Number Of Position: 
        <span class="badge bg-danger ms-2">{{ u.numberOfOpenPositions }}</span>
        </h6> 
      <p class="text-danger">Posting Date: {{ u.postingDate }} </p>
      <p class="text-danger">Closing Date: {{ u.closingDate}} </p>
      <hr />
      <div class="d-flex justify-content-between">
        <div class="text-start">
           <i class="fab fa-critical-role fa-2x"></i>
        </div>
      <div class="text-end">
        <router-link :to="`/jobPostings/jobPosting/${u.id}`">
        <button @click="sendJobPosting(u)" class="btn btn-warning">
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

  methods: {
    sendJobPosting(u) {
      
      this.$store.state.jobPosting = u;
    },
  },
  computed: {
    user() {
      return this.$store.state.recentlyPosted;
    },
  },
};
</script>
