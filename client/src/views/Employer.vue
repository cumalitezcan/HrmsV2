<template>
  <div>
    <Navbar />
    <div class="container">
      <h1>Employers</h1>
      <hr />
      <div class="row">
        <div class="col-md-10 offset-1">
      <div class="d-flex flex-wrap">
        <div v-for="(employer,index) in confirmedEmployers" :key="index">
        <EmployerBox :employer="employer" />
        </div>
      </div>
      <hr />
    </div>
    </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import EmployerBox from "@/components/EmployerBox.vue";
import { mapState, mapActions } from "vuex";
const params = {
  status: true,
  id: 1,
};
export default {
  components: {
    EmployerBox,
  },

   created() {
    this.getConfirmedEmployers(params);
   },

   methods:{
    ...mapActions(["getConfirmedEmployers"])
    },
   computed: {
     ...mapState(["confirmedEmployers"]),
    }

 
};
</script>
