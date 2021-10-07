<template>
  <Navbar />
  <div class="container">
    <h1>Employers</h1>
    <hr />

    <div class="d-flex align-items-stretch flex-wrap">
        <EmployerBox />
    </div>
    <hr />
  </div>

  <Footer />
</template>

<script>
import EmployerBox from "../components/EmployerBox.vue";
const params = {
  status: true,
  id: 1,
};
export default {

  components: {
    EmployerBox
  },

  mounted() {
    this.$store.dispatch("getConfirmedEmployers", params);
  },
};
</script>
