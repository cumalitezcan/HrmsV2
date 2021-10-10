<template>
  <!-- Button trigger modal -->
  <button
    type="button"
    class="btn btn-outline-success btn-rounded"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal1"
  >
    LogIn
  </button>

  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal1"
    tabindex="-1"
    aria-labelledby="exampleModal1Label"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-fullscreen">
      <div class="modal-content">
        <div class="modal-body position-relative">
          <div class="row ">
            <div
              class="col-3 position-absolute top-50 start-50 translate-middle"
            >
              <button class="btn btn-primary">Icon</button>
              <p class="fw-bolder">
                What type of account do you want to log into ?
              </p>
              <router-link :to="{ name: 'LoginPage' }">
                <button class="btn btn-info">Candidate1</button>
              </router-link>
              <h3>or</h3>
              <router-link :to="{ name: 'LoginPage' }">
                <button class="btn btn-warning">Employer1</button>
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
</template>

