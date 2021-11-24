<template>
 
    <div>
      <select
        v-model="options"
        class="form-select"
        aria-label="Default select example"
      >
        <option>{{ title }}</option>
        <option  v-for="(d, index) in data" :key="index" :value="d.id">{{
          d.data
        }}</option>
      </select>
      {{options}}
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
 
};
</script>
