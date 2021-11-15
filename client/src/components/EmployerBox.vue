<template>
  <div>
    <div
      class="col-6"
      v-for="employer in confirmedEmployers"
      :key="employer.id"
    >
      <div
        @click="goDetails(employer)"
        class="card align-items-center m-2"
        style="background-color: #757575;"
      >
        <router-link :to="`/employers/employer/${employer.id}`">
          <h4
            class="card-title mt-3 fw-bold text-decoration-underline text-light"
          >
            {{ employer.companyName }}
          </h4>
        </router-link>
        <div class="card-body text-light">
          {{ employer.webAddress }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goDetails(employer) {
      this.$store.state.employerDetail = employer;
    },
  },
  computed: {
    confirmedEmployers() {
      return this.$store.state.confirmedEmployers;
    },
  },
};
</script>
