<template>
  <div>
    <select
      v-model="selectedItem"
      class="form-select"
      aria-label="Default select example"
    >
      <option>{{ title }}</option>
      <option v-for="(d, index) in data" :key="index" :value="d.data">{{
        d.data
      }}</option>
    </select>
    <div v-for="(s, index) in selectedItems" :key="index">
      {{ selectedItem }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedItem : ""
    };
  },
  props: ["data", "title"],
};
</script>
