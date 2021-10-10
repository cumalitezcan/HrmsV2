<template>
  <div
    v-for="user in jobPostings"
    :key="user.id"
    class="card"
    style="width: 18rem;"
  >
    <div class="card-body">
      <h5 class="card-title fs-4 fw-bold">{{ user.jobPosting.jobTitle.title }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">
        {{ user.jobPosting.employer.companyName }}
      </h6>
    
        <p class="btn btn-primary" style="background-color: #3b5998;">Number Of Position: 
        <span class="badge bg-danger ms-2">{{ user.jobPosting.numberOfOpenPositions }}</span>
        </p> 
      <p class="btn btn-primary">Posting Date: {{ user.jobPosting.postingDate }} </p>
      <p class="btn btn-primary">Closing Date: {{ user.jobPosting.closingDate }} </p>
      <hr />
      <div class="text-end">
        <router-link :to="`/jobPostings/jobPosting/${user.id}`">
        <button @click="sendJobPosting(user)" class="btn btn-warning">
          View Details
        </button>
      </router-link>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    sendJobPosting(user) {
      console.log("geldi");
      console.log(user);
      this.$store.state.jobPosting = user;
    },
  },

  computed: {
    jobPostings() {
      return this.$store.state.jobPostingConfirmations;
    },
  },
};
</script>
