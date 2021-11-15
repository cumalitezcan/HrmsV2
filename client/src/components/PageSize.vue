<template>
  <div>
    <div class="d-flex justify-content-start align-items-center" >
    <div class="ms-5 me-5 mt-3 mb-3">
      <span>Page Size: {{ size }}</span>
    </div>
    <div class="btn-group me-2" role="group" aria-label="First group">
      <button
        @click="getData({ size: 10, count: 'ten' })"
        type="button"
        class="btn btn-dark rounded-circle"
      >
        10
      </button>
      <button
        @click="getData({ size: 20, count: 'twenty' })"
        type="button"
        class="btn btn-dark rounded-circle"
      >
        20
      </button>
      <button
        @click="getData({ size: 50, count: 'fifty' })"
        type="button"
        class="btn btn-dark rounded-circle"
      >
        50
      </button>
      <button
        @click="getData({ size: 100, count: 'onehundred' })"
        type="button"
        class="btn btn-dark rounded-circle"
      >
        100
      </button>
    </div>
    </div>
    <div class="d-flex flex-wrap">
      <div v-for="(jobPosting,index) in selectedJobPostings" :key="index">
        <JobCard :jobPosting="jobPosting"  />
      </div>
      
    </div>
    <div></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// import Pages from "@/components/Pages";
import JobCard from "@/components/JobCard";
export default {
  name:"PageSize",
  components: {
    // Pages,
    JobCard
  },

  
  data() {
    return {
      size: 10,
      selectedJobPostings: [],
    };
  },
  methods: {
    getData({ size, count }) {
      this.size = size;
      this.selectedJobPostings = this.jobPostingsBySize[count];
    },
  },
  computed: {
    ...mapGetters(["jobPostingsBySize"]),
  },
};
</script>
