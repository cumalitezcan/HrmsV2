<template>
  <div>
    <div class="d-flex justify-content-start align-items-center">
      <div class="ms-5 me-5 mt-3 mb-3">
        <span class="fw-bold">Page Size: {{ size }}</span>
      </div>
      <div class="btn-group" role="group" aria-label="First group" style="height: 38px;">
        <button
          @click="getData({ size: 10 })"
          type="button"
          class="btn btn-outline-dark rounded-circle"

        >
          10
        </button>
        <button
          @click="getData({ size: 20 })"
          type="button"
          class="btn btn-outline-dark rounded-circle"
        >
          20
        </button>
        <button
          @click="getData({ size: 50 })"
          type="button"
          class="btn btn-outline-dark rounded-circle"
        >
          50
        </button>
        <button
          @click="getData({ size: 100 })"
          type="button"
          class="btn btn-outline-dark rounded-circle"
        >
          100
        </button>

        <div class="ms-3">
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li @click="decrement" class="page-item">
                <a class="page-link imgRds" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li class="page-item imgRds"><a class="page-link" href="#">{{pageNumber}}/{{lastSize}}</a></li>
              <li @click="increment" class="page-item">
                <a class="page-link imgRds"  aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>

    <div class="d-flex flex-wrap">
      <div v-for="(jobPosting, index) in jobPostingsByPage" :key="index">
        <JobCard :jobPosting="jobPosting" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState,mapActions } from "vuex";
import JobCard from "@/components/JobCard";
export default {
  name: "PageSize",
  components: {
    JobCard,
  },
  props:["length"],
  data() {
    return {
      size: 10,
      selectedJobPostings: [],
      pageNumber:1,
      lastSize:5,
      
    };
  },

  methods: {
     ...mapActions([
      "getJobPostingByPageNoAndSize"]),
    getData({ size }) {
      this.size = size;
      this.pageNumber = 1;
      this.lastSize = Math.ceil(this.length/size)

      if(this.pageNumber == 1){
        this.getJobPostingByPageNoAndSize({pageNo:this.pageNumber,pageSize:size});
      }
      
    },
     increment(){
      return this.pageNumber<this.lastSize ? this.pageNumber++ : ''
    },
    decrement(){
      return this.pageNumber>1 ? this.pageNumber-- : ''
    },
  },
  computed: {
    ...mapState(["jobPostingsByPage"]),
  },
  watch:{
    pageNumber(last){
      this.getJobPostingByPageNoAndSize({pageNo:last,pageSize:this.size});
    }
  }
}
</script>

<style scoped>
  .buttonGroup {
  float: left;
  border: 1px solid rgb(12, 12, 12);
}

.pagination {
  display: flex;
}

.pagination a {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
}

.pagination a.active {
  background-color: #4CAF50;
  color: white;
}

.pagination a:hover:not(.active) {background-color: #ddd;}

.imgRds {
  border-radius: 1p5;
}


</style>


