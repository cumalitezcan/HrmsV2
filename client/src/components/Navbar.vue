<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light border">
    <div class="container-fluid offset-1">
      <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div>
          <i class="fab fa-artstation"></i>
        </div>
        <div class="ms-auto me-auto">
          <ul class="navbar-nav">
            <router-link :to="{ name: 'HomePage' }">
              <li class="nav-item active">
                <a class="nav-link">Home</a>
              </li>
            </router-link>
            <router-link :to="{ name: 'JobPostingPage' }">
              <li class="nav-item">
                <a class="nav-link">Job Postings</a>
              </li>
            </router-link>
            <router-link :to="{ name: 'CandidatePage' }">
              <li class="nav-item">
                <a class="nav-link">Candidates</a>
              </li>
            </router-link>
            <router-link :to="{ name: 'EmployerPage' }">
              <li class="nav-item">
                <a class="nav-link">Employers</a>
              </li>
            </router-link>
            <router-link :to="{ name: 'AboutPage' }">
              <li class="nav-item">
                <a class="nav-link">About Us</a>
              </li>
            </router-link>
          </ul>
        </div>

        <div class="me-5">
          <ModalLogIn />
          <ModalRegister />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import ModalLogIn from "./ModalLogIn.vue";
import ModalRegister from "./ModalRegister.vue";
export default {
  components: {
    ModalLogIn,
    ModalRegister,
  },
};
</script>
