<template>
  <div>
    <Navbar />
    <div class="container">
      <h1>Job Posting</h1>
      <hr />
      <div class="row"> 
        <div class="col-md-8">
          <div class="row">
           
            <PageSize :length="this.jobPostingLength" />
         
          </div>
        </div>

         <div class="col-md-4 mt-3">
          <h2>Filter Bölümü</h2>
          <div class="d-flex flex-column">
            <Dropdown
              :data="jobTitleFilter"
              title="Job Title"
              class="mb-2 mt-3"
            />
            <Dropdown :data="cityFilter" title="City" class="mb-2 mt-3" />
            <Dropdown
              :data="workingTimeFilter"
              title="Working Time"
              class="mb-2 mt-3"
            />
            <Dropdown
              :data="workingTypeFilter"
              title="Working Type"
              class="mb-2 mt-3"
            />
          </div>
          <div>
            <div>
              <button class="btn btn-success">Getir</button>
            </div>
            <div class="mt-2">
              <button class="btn btn-warning">Temizle</button>
            </div>
          </div>
        </div>
      </div>
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
import { mapGetters, mapActions,mapState } from "vuex";
import PageSize from "@/components/PageSize";
import JobCard from "@/components/JobCard";
export default {
  name: "JobPosting",
  data() {
    return {
      showData: true,
    };
  },
  components: {
    PageSize,
    JobCard,
  },

  created() {
    console.log("job postingin created methodu");

    this.getJobPostingByPageNoAndSize({pageNo:1,pageSize:10});
    
    this.getJobPostingConfirmations();

    this.getJobTitles();

    this.getCities();

    this.getWorkingTimes();

    this.getWorkingTypes();

    
  },

  methods: {
    ...mapActions([
      "getJobPostingByPageNoAndSize",
      "getJobPostingConfirmations",
      "getJobTitles",
      "getCities",
      "getWorkingTimes",
      "getWorkingTypes",
    ]),
  
  },

  //1-10 2-10 2-20
  //http://localhost:8080/api/jobPostings/getAllActiveOnesByPageSortedByPostingDate?pageNo=1&pageSize=10


  //filters
  //http://localhost:8080/api/jobPostings/getAllActiveOnesFilteredByCityAndJobTitleAndWorkingTimeAndWorkingType?cityId=1&jobTitleId=0&workingTimeId=0&workingTypeId=0

  //genel
  //http://localhost:8080/api/jobPostings/getAllActiveOnesByPageFilteredByCityAndJobTitleAndWorkingTimeAndWorkingType?cityId=1&jobTitleId=0&pageNo=2&pageSize=10&workingTimeId=0&workingTypeId=0


  computed: {
    ...mapGetters([
      "jobTitleFilter",
      "cityFilter",
      "workingTimeFilter",
      "workingTypeFilter",
      "jobPostingLength"
    ]),
    ...mapState(["jobPostingsByPage"]),
    // jobTitleFilter: "_jobTitleFilter",
    // cityFilter: "_cityFilter",
    // workingTimeFilter: "_workingTimeFilter",
    // workingTypeFilter: "_workingTypeFilter",
  },
};
</script>
