<template>
  <div>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-outline-success btn-rounded"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal1"
      data-backdrop="false"
    >
      {{ $t('nav.login')}}
    </button>

    <div></div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal1"
      tabindex="-1"
      aria-labelledby="exampleModal1Label"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-fullscreen">
        <div class="modal-content bg-transparent text-dark">
          <div class="modal-body position-relative">
            <div class="text-center ">
              <div
                class="col-3 position-absolute top-50 start-50 translate-middle"
              >
                <button class="btn btn-outline-info btn-rounded mb-2">
                  <i class="fas fa-sign-in-alt fa-4x"></i>
                </button>
                <p class="fw-bolder fs-4 text-monospace text-dark">
                  What type of account do you want to log into ?
                </p>
                <router-link :to="{ name: 'LoginPage' }">
                  <button class="btn btn-info" data-bs-dismiss="modal">
                    Candidate
                  </button>
                </router-link>
                <h3>or</h3>
                <router-link :to="{ name: 'LoginPage' }">
                  <button class="btn btn-warning" data-bs-dismiss="modal">
                    Employer
                  </button>
                </router-link>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
