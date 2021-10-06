<template>
  <Navbar />
  <div class="container">
    <h1>Employers</h1>
    <hr />
    <div class="d-flex align-items-stretch flex-wrap">
      <div class="row ">
      <EmployerBox />
    </div>
    </div>
    <hr />
  </div>

  <Footer />
</template>

<script>
const params = {
  status: true,
  id: 1,
};
export default {
  mounted() {
    this.$store.dispatch("getConfirmedEmployers", params);
  },
};
</script>
