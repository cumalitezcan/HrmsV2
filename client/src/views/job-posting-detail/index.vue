<template>
    <div class="job-posting-detail">
    <Navbar />
    <hr />
    <div class="container">
        <h1>Job Posting</h1>
       <Detail :jobPosting="this.jobPosting" />
    </div>
    <hr />
    <Footer />
     </div>
</template>

<script>
import Detail from "@/views/job-posting-detail/Detail"
import { mapActions,mapState } from "vuex";
export default {
    created(){
    this.getJobPostingById(this.$route.params.id);
  },

   methods: {
    ...mapActions(["getJobPostingById"])
   },

   computed: {
     ...mapState(["jobPosting"]),
  },
}
</script>