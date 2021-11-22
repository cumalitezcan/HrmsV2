<template>
 
    <div>
      <select
        v-model="options"
        class="form-select"
        aria-label="Default select example"
      >
        <option>{{ title }}</option>
        <option  v-for="(d, index) in data" :key="index" :value="d.id" @click="sendData(d.id)">{{
          d.data
        }}</option>
      </select>
      
    </div>
   
  
</template>

<script>
export default {
  data() {
    return {
      options: [],
    };
  },
  props: ["data", "title"],
  methods:{
    sendData(id){
      console.log("geldi")
      console.log(id)
    },
  },
};
</script>
