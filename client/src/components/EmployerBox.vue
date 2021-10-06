<template>
<div>
  <div v-for="employer in $store.state.confirmedEmployers" :key="employer.id" class="card align-items-center">
    <h4 class="card-title">title</h4>
    <div class="card-body">
      This is some text within a card body.
    </div>
  </div>
  </div>
</template>
