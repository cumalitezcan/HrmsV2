<template>
  <div>
    <Navbar />
    <div class="container">
      <h1 class="mt-2">Candidate Register</h1>
      <hr />

      <div class="row">
        <div class="col-6 col-md-6 offset-3">
          <div class="text-end"><DateTime /></div>
          <form>
            <div class="mb-2">
              <label for="exampleFormControlInput1" class="form-label"
                >First Name</label
              >
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                v-model="v$.user.firstName.$model"
                :class="{ 'is-invalid': v$.user.firstName.$error }"
              />
              <small
                class="text-center text-danger"
                v-if="
                  v$.user.firstName.required.$invalid &&
                    v$.user.firstName.$error &&
                    clicked"
                >En az 3 harf
                
            </small>
            </div>
            <div class="mb-2">
              <label for="exampleFormControlInput2" class="form-label"
                >Last Name</label
              >
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput2"
                v-model="v$.user.lastName.$model"
                :class="{ 'is-invalid': v$.user.lastName.$error }"
              />
               <small
                class="text-center text-danger"
                v-if="
                  v$.user.lastName.required.$invalid &&
                    v$.user.lastName.$error &&
                    clicked"
                >En az 3 harf
                
            </small>
            </div>
            <div class="mb-2 d-flex align-items-center justify-content-center">
              <div class="me-2 col-md-6 ">
                <label for="exampleFormControlInput3" class="form-label"
                  >Identity Number</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput3"
                  placeholder="XXXXXXXXXXX"
                  v-model="v$.user.identityNumber.$model"
                  :class="{ 'is-invalid': v$.user.identityNumber.$error }"
                />
                 <small
                class="text-center text-danger"
                v-if="
                  v$.user.identityNumber.required.$invalid &&
                    v$.user.identityNumber.$error &&
                    clicked"
                >Boş olamaz ve 11 karakter içerir
                
            </small>
              </div>
              <div class="col-md-6">
                <label for="exampleFormControlInput4" class="form-label"
                  >Date of Birth</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput4"
                  placeholder="YYYY-MM-DD"
                  v-model="v$.user.dateOfBirth.$model"
                  :class="{ 'is-invalid': v$.user.dateOfBirth.$error }"
                />
                <small
                class="text-center text-danger"
                v-if="
                  v$.user.dateOfBirth.required.$invalid &&
                    v$.user.dateOfBirth.$error &&
                    clicked"
                >Boş olamaz ve belirtilen formata göre
                
            </small>
              </div>
            </div>
            <div class="mb-2">
              <label for="exampleFormControlInput5" class="form-label"
                >Email</label
              >
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput5"
                placeholder="example@example.com"
                v-model="v$.user.email.$model"
                :class="{ 'is-invalid': v$.user.email.$error }"
              />
              <small
                class="text-center text-danger"
                v-if="
                  v$.user.email.required.$invalid &&
                    v$.user.email.$error &&
                    clicked"
                >Boş olamaz ve email formatına göre
                
            </small>
            </div>
            <div class="mb-2">
              <label for="exampleFormControlInput6" class="form-label"
                >Password</label
              >
              <input
                type="password"
                class="form-control"
                id="exampleFormControlInput6"
                v-model="v$.user.password.$model"
                :class="{ 'is-invalid': v$.user.password.$error }"
              />
              <small
                class="text-center text-danger"
                v-if="
                  v$.user.password.required.$invalid &&
                    v$.user.password.$error &&
                    clicked"
                >Boş olamaz ve password formatına göre
                
            </small>
            </div>
            <div class="mb-4">
              <label for="exampleFormControlInput7" class="form-label"
                >Confirm Password</label
              >
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput7"
                v-model="v$.user.passwordConfirm.$model"
                :class="{ 'is-invalid': v$.user.passwordConfirm.$error }"
              />
              <small
                class="text-center text-danger"
                v-if="
                  v$.user.passwordConfirm.required.$invalid &&
                    v$.user.passwordConfirm.$error &&
                    clicked"
                >Password ile aynı sayılar girilmelidir
            </small>
            </div>
            <div class="d-grid gap-2 mb-4">
              <button
                @click="loginHandler"
                type="submit"
                class="btn btn-warning"
                :ref="btn"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <hr />
      <Footer />
    </div>
  </div>
</template>

<script>
import { required, minValue, minLength, email } from "@vuelidate/validators";
import { helpers } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
export default {
  data() {
    return {
      clicked:false,
      v$: useVuelidate(),
      user: {
        firstName: "",
        lastName: "",
        identityNumber: "",
        dateOfBirth: "",
        email: "",
        password: "",
        passwordConfirm: "",
      },
    };
  },
  validations() {
    return {
      user: {
        firstName: { required, minLength: minLength(3) },
        lastName: { required, minLength: minLength(3) },
        identityNumber: { required, minLength: helpers.regex(/^\d{11}$/) },
        dateOfBirth: { required},
        email: { required, email },
        password: { required, minValue: minLength(6) },
        passwordConfirm: { required, minValue: minLength(6) },
      },
    };
  },
  methods: {
    loginHandler() {
      this.clicked=true;
      this.v$.$validate();
      if (!this.v$.$error) {
        this.$refs.btn.disabled = true;
      }
    },
  },
};
</script>
