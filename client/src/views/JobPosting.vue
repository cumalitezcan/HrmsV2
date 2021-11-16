<template>
  <div>
    <Navbar />
    <div class="container">
      <h1>Job Posting</h1>
      <hr />
      <div class="row">
        <div class="col-md-8">
          <div class="row">
            <!-- <PageSize /> -->
            <h1>Deneme1</h1>
          </div>
          <div class="row">
            <div v-for="(jobPosting,index) in jobPostingsBySize.ten" :key="index"> -->
            <!-- <Card /> -->
            <h2>{{jobPosting.id}}</h2>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="col-md-4">
          <h2>Filter Bölümü</h2>
          <div class="d-flex flex-column">
            <Dropdown :data="jobTitleFilter" title="Job Title" class="mb-2 mt-3" />
            <Dropdown :data="cityFilter" title="City" class="mb-2" />
            <Dropdown
              :data="workingTimeFilter"
              title="Working Time"
              class="mb-2"
            />
            <Dropdown
              :data="workingTypeFilter"
              title="Working Type"
              class="mb-2"
            />
          </div>
        </div> -->
    </div>
    <!-- <div class="row d-flex justify-content-center">
      <div class="col-md-6 offset-1">
        <div class="row d-flex justify-content-between ">
          <JobCard m-2 />
        </div>
      </div>
      <div class="col-md-4 offset-1 ">
        <Dropdown :data="jobTitleFilter" title="Job Title" class="mb-2" />
        <Dropdown :data="cityFilter" title="City" class="mb-2" />
        <Dropdown :data="workingTimeFilter" title="Working Time" class="mb-2" />
        <Dropdown :data="workingTypeFilter" title="Working Type" class="mb-2" />
        <button class="btn btn-warning d-grid gap-2 col-5 mb-2">Filter</button>
        <button class="btn btn-light d-grid gap-2 col-5 mb-2 border">
          Clear
        </button>
      </div>
    </div> -->

    <hr />
    <Footer />
  </div>
</template>

<script>
import { mapState,mapGetters, mapActions } from "vuex";
// import PageSize from "@/components/PageSize";
// import JobCard from "@/components/JobCard";
export default {
  name: "JobPosting",
  data() {
    return {
     
    };
  },
  // components: {
  //   PageSize,
  //   JobCard,
  // },

  created() {
    console.log("job postingin created methodu");

    this.getJobPostingConfirmations();
    

    // this.$store.state.tempJobPosting = jobPostingsBySize.ten;

    // this.$store.dispatch("getCities");

    // this.$store.dispatch("getJobTitles");

    // this.$store.dispatch("getWorkingTimes");

    // this.$store.dispatch("getWorkingTypes");

    // this.$store.dispatch("getJobPostingConfirmations");
  },

  methods: {
    ...mapActions(["getJobPostingConfirmations"]),
  },

  computed: {
    ...mapGetters(["jobPostingsBySize"]),
    ...mapState(["jobPostingConfirmations"]),
    // jobTitleFilter: "_jobTitleFilter",
    // cityFilter: "_cityFilter",
    // workingTimeFilter: "_workingTimeFilter",
    // workingTypeFilter: "_workingTypeFilter",
  },
};
</script>
