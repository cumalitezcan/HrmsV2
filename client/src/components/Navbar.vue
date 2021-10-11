<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light border">
    <div class="container-fluid offset-1">
      <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div>
          <i class="fab fa-artstation fa-2x"></i>
        </div>
        <div class="ms-auto me-auto">
          <ul class="navbar-nav">
            <router-link :to="{ name: 'HomePage' }">
              <li class="nav-item active me-2">
                <a class="btn btn-outline-dark btn-rounded">Home</a>
              </li>
            </router-link>
            <router-link :to="{ name: 'JobPostingPage' }">
              <li class="nav-item me-2">
                <a class="btn btn-outline-dark btn-rounded">Job Postings</a>
              </li>
            </router-link>
            <router-link :to="{ name: 'CandidatePage' }">
              <li class="nav-item me-2">
                <a class="btn btn-outline-dark btn-rounded">Candidates</a>
              </li>
            </router-link>
            <router-link :to="{ name: 'EmployerPage' }">
              <li class="nav-item me-2">
                <a class="btn btn-outline-dark btn-rounded">Employers</a>
              </li>
            </router-link>
            <router-link :to="{ name: 'AboutPage' }">
              <li class="nav-item me-2">
                <a class="btn btn-outline-dark btn-rounded">About Us</a>
              </li>
            </router-link>
          </ul>
        </div>

        <div class="d-flex me-2">
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
