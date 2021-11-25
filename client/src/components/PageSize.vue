<template>
  <div>
    <div class="d-flex justify-content-start align-items-center">
      <div class="ms-5 me-5 mt-3 mb-3">
        <span>Page Size: {{ size }}</span>
      </div>
      <div class="btn-group me-2" role="group" aria-label="First group">
        <button
          @click="getData({ size: 10,  clicked: false })"
          type="button"
          class="btn btn-dark rounded-circle"
        >
          10
        </button>
        <button
          @click="getData({ size: 20, clicked: false })"
          type="button"
          class="btn btn-dark rounded-circle"
        >
          20
        </button>
        <button
          @click="getData({ size: 50,  clicked: false })"
          type="button"
          class="btn btn-dark rounded-circle"
        >
          50
        </button>
        <button
          @click="getData({ size: 100, clicked: false })"
          type="button"
          class="btn btn-dark rounded-circle"
        >
          100
        </button>

        <div>
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li @click="decrement" class="page-item">
                <a class="page-link" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li class="page-item"><a class="page-link" href="#">{{pageNumber}}/{{lastSize}}</a></li>
              <li @click="increment" class="page-item">
                <a class="page-link"  aria-label="Next">
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
    getData({ size, clicked }) {
      console.log(size,clicked)
      this.$emit("getClick", clicked);
      this.size = size;
      this.lastSize = Math.ceil(this.length/size)

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
  }
}
</script>
