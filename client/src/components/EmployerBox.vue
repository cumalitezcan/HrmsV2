<template>
<div class="col-6" v-for="employer in confirmedEmployers" :key="employer.id">
  <div class="card align-items-center">
    <h4 class="card-title mt-3">{{employer.companyName}}</h4>
    <div class="card-body">
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
