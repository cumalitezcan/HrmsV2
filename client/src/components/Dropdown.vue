<template>
 
  <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"
  style="width:170px; height:40px;">
   {{this.title}}
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li v-for="d in data" :key="d.id"><p class="dropdown-item">{{d.data}}</p></li>
   
  </ul>
</div>
</template>

<script>
export default {
  props: ["data","title"]
}
</script>
