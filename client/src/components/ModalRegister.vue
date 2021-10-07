<template>
  <!-- Button trigger modal -->
  <button
    type="button"
    class="btn btn-primary ms-2"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal2"
  >
    Register
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
      <div class="modal-content">
        <div class="modal-body position-relative">
          <div class="row ">
            <div
              class="col-3 position-absolute top-50 start-50 translate-middle"
            >
              <button class="btn btn-primary">Icon</button>
              <p class="fw-bolder">
                What type of account do you want to create ?
              </p>
              <router-link :to="{ name: 'LoginPage' }">
                <button class="btn btn-info">Candidate2</button>
              </router-link>
              <h3>or</h3>
              <router-link :to="{ name: 'LoginPage' }">
                <button class="btn btn-warning">Employer2</button>
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
