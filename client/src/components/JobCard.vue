<template>
    <div v-for="user in $store.state.jobPostingConfirmations" :key="user.id" class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">{{user.id}}</h5>
    <h6 class="card-subtitle mb-2 text-muted">{{user.jobPosting.employer.companyName}}</h6>
    <h6 class="card-subtitle mb-2 text-muted">Number Of Position: {{user.jobPosting.numberOfOpenPositions}}</h6>
    <p class="card-text">Posting Date: {{user.jobPosting.postingDate}}</p>
    <p class="card-text">Closing Date: {{user.jobPosting.closingDate}}</p>
    <hr >
    <a href="#" class="card-link">Card link</a>
  </div>
</div>
</template>

<script>


</script>