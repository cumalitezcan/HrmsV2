<template>
    <div class="btn-group me-2" role="group" aria-label="First group">
      <button type="button" class="btn btn-dark">1</button>
      <button type="button" class="btn btn-dark">2</button>
      <button type="button" class="btn btn-dark">3</button>
      <button type="button" class="btn btn-dark">4</button>
      <button type="button" class="btn btn-dark">5</button>
      {{currentPage}}
    </div>


</template>

<script>
export default {
  data(){
    return {
      currentPage : null,
    }
  }
}
</script>
