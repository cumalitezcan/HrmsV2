<template>
  <div>
    <div class="d-flex justify-content-start align-items-center">
      <div class="ms-5 me-5 mt-3 mb-3">
        <span>Page Size: {{ size }}</span>
      </div>
      <div class="btn-group me-2" role="group" aria-label="First group">
        <button
          @click="getData({ size: 10, count: 'ten', clicked: false })"
          type="button"
          class="btn btn-dark rounded-circle"
        >
          10
        </button>
        <button
          @click="getData({ size: 20, count: 'twenty', clicked: false })"
          type="button"
          class="btn btn-dark rounded-circle"
        >
          20
        </button>
        <button
          @click="getData({ size: 50, count: 'fifty', clicked: false })"
          type="button"
          class="btn btn-dark rounded-circle"
        >
          50
        </button>
        <button
          @click="getData({ size: 100, count: 'onehundred', clicked: false })"
          type="button"
          class="btn btn-dark rounded-circle"
        >
          100
        </button>

        <div>
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li class="page-item"><a class="page-link" href="#">{{lastSize}}</a></li>
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <div class="d-flex flex-wrap">
      <div v-for="(jobPosting, index) in selectedJobPostings" :key="index">
        <JobCard :jobPosting="jobPosting" />
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
import { mapGetters,mapState } from "vuex";
import JobCard from "@/components/JobCard";
export default {
  name: "PageSize",
  components: {
    JobCard,
  },

  data() {
    return {
      size: 10,
      selectedJobPostings: [],
      pageNumber:1,
      lastSize:1,
      dataLength : this.jobPostingConfirmations.lenghth
    };
  },

  methods: {
    getData({ size, count, clicked }) {
      this.$emit("getClick", clicked);
      this.size = size;
      this.selectedJobPostings = this.jobPostingsBySize[count];
    },
  },
  computed: {
    ...mapState(["jobPostingConfirmations"]),
    ...mapGetters(["jobPostingsBySize"]),
    pages(){
      
      for(i=this.size;i<=this.dataLength;i+=this.size){
        this.lastSize++
      }
    }
  },
};
</script>
