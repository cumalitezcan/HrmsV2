<template>
    <div>
      <select
        v-model="options"
        class="form-select"
        aria-label="Default select example"
      >
        <option>deneme</option>
        <option v-for="(d, index) in data" :key="index" :value="d.id" >
         <span>{{d.data}}</span> 
        </option>
      </select>
      {{options}}
    </div>
   
</template>

<script>
export default {
  data() {
    return {
      options: "0",
    };
  },
  props: ["data","index"],
  watch:{
    options(){
      this.$store.commit("setFilters",{id:this.index,value:this.options})
    }
  }


};
</script>







