<template>
    <div>
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