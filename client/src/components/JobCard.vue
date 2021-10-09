<template>
  <div
    v-for="user in jobPostings"
    :key="user.id"
    class="card"
    style="width: 18rem;"
  >
    <div class="card-body">
      <h5 class="card-title">{{ user.id }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">
        {{ user.jobPosting.employer.companyName }}
      </h6>
      <h6 class="card-subtitle mb-2 text-muted">
        Number Of Position: {{ user.jobPosting.numberOfOpenPositions }}
      </h6>
      <p class="card-text">Posting Date: {{ user.jobPosting.postingDate }}</p>
      <p class="card-text">Closing Date: {{ user.jobPosting.closingDate }}</p>
      <hr />
      <router-link :to="`/jobPostings/jobPosting/${user.id}`">
        <button @click="sendJobPosting(user)" class="btn btn-warning">
          View Details
        </button>
      </router-link>
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
