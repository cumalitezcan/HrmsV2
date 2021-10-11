<template>
<div class="col-6" v-for="employer in confirmedEmployers" :key="employer.id">
  <div class="card align-items-center m-2" style="background-color: #757575;">
    <h4 class="card-title mt-3 fw-bold text-decoration-underline text-light">{{employer.companyName}}</h4>
    <div class="card-body text-light">
      {{employer.webAddress}}
    </div>
  </div>
  </div>
</template>

<script>
export default {
  computed:{
    confirmedEmployers(){
       return this.$store.state.confirmedEmployers;
    }
   
  }
}
</script>
