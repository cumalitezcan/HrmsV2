<template>
  <div class="job-posting">
    <Navbar />
    <div class="container">
      <h1>Job Posting</h1>
      <hr />
      <div class="row"> 
        <div class="col-md-7">
          <div v-if="selectFilter" class="row">
            <PageSize :selectFilter="selectFilter" :length="this.jobPostingLength" />
          </div>
          <div v-else class="row">
             <PageSize :selectFilter="selectFilter" :length="this.jobPostingsByFilters.length" />
          </div>
        </div>

         <div class="col-md-5 mt-3">
          <h2 class="text-center text-secondary">Filters</h2>
          <div class="d-flex flex-column">
            <div v-for="(filter,index) in dataFilters" :key="index">
              <Dropdown :data="filter" :index="index" />
            </div>
            <button @click="clearFilter" class="btn btn-secondary mb-2 me-3">Clear Filter</button>
            <button @click="getFilter" class="btn btn-warning mb-2 me-3">Filter</button>
          </div>
        </div>
      </div>
    </div>

    <hr />
    <Footer />
  </div>
</template>

<script>
import { mapGetters, mapActions,mapState } from "vuex";
import PageSize from "@/views/job-posting/PageSize";
import JobCard from "@/views/job-posting/JobCard";
export default {
  name: "JobPosting",
  components: {
    PageSize,
    JobCard,
  },

  data(){
    return{
      selectFilter:true
    }
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
      "getJobPostingByFilters"
    ]),

    getFilter(){
      this.getJobPostingByFilters(this.filter);
      this.selectFilter = false

    },

    clearFilter(){
      this.selectFilter = true;
    }

  },

  //1-10 2-10 2-20
  //http://localhost:8080/api/jobPostings/getAllActiveOnesByPageSortedByPostingDate?pageNo=1&pageSize=10


  //filters
  //http://localhost:8080/api/jobPostings/getAllActiveOnesFilteredByCityAndJobTitleAndWorkingTimeAndWorkingType?cityId=1&jobTitleId=0&workingTimeId=0&workingTypeId=0

  //genel
  //http://localhost:8080/api/jobPostings/getAllActiveOnesByPageFilteredByCityAndJobTitleAndWorkingTimeAndWorkingType?cityId=1&jobTitleId=0&pageNo=2&pageSize=10&workingTimeId=0&workingTypeId=0


  computed: {
    dataFilters(){
      let dataFilters = []
      dataFilters.push(this.$store.getters.jobTitleFilter)
      dataFilters.push(this.$store.getters.cityFilter)
      dataFilters.push(this.$store.getters.workingTimeFilter)
      dataFilters.push(this.$store.getters.workingTypeFilter)
      return dataFilters;
    },
    ...mapGetters([
      "jobPostingLength"
    ]),
    ...mapState(["jobPostingsByPage","filter","jobPostingsByFilters"]),
  },
};
</script>

<style scoped>
.button3 {width: 100%;}
</style>