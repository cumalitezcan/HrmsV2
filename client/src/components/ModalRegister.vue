<template>
  <div>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-outline-warning btn-rounded ms-2"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal2"
    >
      {{ $t('nav.register')}}
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal2"
      tabindex="-1"
      aria-labelledby="exampleModal2Label"
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
                  <i class="fas fa-user-plus fa-3x"></i>
                </button>
                <p class="fw-bolder fs-4 text-monospace text-dark">
                  What type of account do you want to create ?
                </p>
                <router-link :to="{ name: 'RegisterCandidatePage' }">
                  <button class="btn btn-info" data-bs-dismiss="modal">
                    Candidate
                  </button>
                </router-link>
                <h3>or</h3>
                <router-link :to="{ name: 'RegisterEmployerPage' }">
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
