<template>
  <div class="card border-dark m-3" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title fs-6 fw-bold text-decoration-underline">
        {{ data.jobTitle.title }}
      </h5>
      <h6 class="card-subtitle mb-2 text-muted">
        {{ data.employer.companyName }}
      </h6>

      <h6 class="font-monospace">
        Number Of Position:
        <span class="badge bg-danger ms-2">{{
          data.numberOfOpenPositions
        }}</span>
      </h6>
      <p class="text-danger">Posting Date: {{ data.postingDate }}</p>
      <p class="text-danger">Closing Date: {{ data.closingDate }}</p>
      <hr />
      <div class="d-flex justify-content-between">
        <div class="text-start">
          <i class="fab fa-critical-role fa-2x"></i>
        </div>
        <div class="text-end">
          <router-link :to="`/jobPostings/jobPosting/${data.id}`">
            <button @click="sendJobPosting(data)" class="btn btn-warning">
              View Details
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: ["data"],

  methods: {
    sendJobPosting(data) {
      this.jobPosting = data;
    },
  },
   computed: {
   ...mapState(["jobPosting"]),

  }
};
</script>
