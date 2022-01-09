<template>
  <div class="home">
    <Navbar />
    <div class="container">

      <!-- First Row -->
      <div class="row">
        <div class="p-5 col-md-6">
          <img src="@/assets/hrms2.png" class="img-fluid" alt="..." />
        </div>
        <div class="col-lg-6 p-5">
          <div>
            <h1
              class="mt-5 text-center display-2 fw-bold fst-italic text-primary"
            >
              {{ $t('jobMessage1')}}
            </h1>
          </div>
          <div>
            <h1 class="text-center display-1 fw-bold fst-italic text-primary">
              {{ $t('jobMessage2')}}
            </h1>
          </div>
        </div>
      </div>

      <hr />
      <!-- Second Row -->
      <div class="row">
        <div class="col-md-10 offset-1">
          <div class="d-flex flex-wrap">
            <div v-for="(recently,index) in recentlyPosted" :key="index">
              <Card :data="recently" />
            </div>
            
          </div>
        </div>
      </div>

      <!-- Third Row -->
      <div class="row mt-3">
        <div
          class="col d-flex justify-content-center d-grid gap-2 col-6 mx-auto text-center"
        >
          <router-link :to="{ name: 'JobPostingPage' }">
            <a class="fas fa-arrow-down fa-2x"></a>
            <div class="mt-2">
              <button type="button" class="btn btn-outline-success btn-rounded">
                View All Job Postings by Posting Date
              </button>
            </div>
          </router-link>
        </div>
      </div>
    </div>

    <hr />

    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Card from "@/views/home/Card"
import {mapActions, mapState } from 'vuex'
export default {
  name: "home",
  components: {
    Navbar,
    Footer,
    Card
  },

  created(){
    this.getRecentlyPosted();
  },

  methods:{
    ...mapActions(["getRecentlyPosted"])
  },
  computed: {
   ...mapState(["recentlyPosted"]),

  }
};
</script>
