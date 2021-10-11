<template>
  <!-- <div class="container">
    <form class="row d-flex align-items-center justify-content-center mt-5 ">
      <div class="row">
        <div class="col-md-3 offset-4">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"
              >Email address</label
            >
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              v-model="userData.email"
            />
          </div>

          <div class="mb-3">
            <label for="inputPassword4" class="form-label">Password</label>
            <input type="password" class="form-control" id="inputPassword4" v-model="userData.password" />
          </div>
          <div class="col-auto">
            <button type="submit" class="btn btn-primary mb-3" @click="onSubmit">
              Giriş Yap
            </button>
          </div>
        </div>
      </div>
    </form>
  </div> -->

  <div class="container">
    <div class="col-4 offset-4 text-center">
      <form>
    <img class="mb-4 mt-4" src="@/assets/login.jpg" alt="login" width="472" height="257">
    <h1 class="h3 mb-3 fw-bold">Sign In</h1>

    <div class="form-floating mb-1">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating mb-1">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
      <label for="floatingPassword">Password</label>
    </div>

    <button class="w-100 btn btn-lg" style="background-color:#388E3C;" type="submit">Sign in</button>
  </form>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            userData:{
                email: null,
                password: null
            }
        }
    },

    created() {
        this.$store.dispatch("getUsers")
    },

     computed:{
      usersLogIn(){
        console.log("computed")
        console.log(this.usersLogIn)
        return this.$store.getters.getUsersLogIn
      }
    },
    
    methods: {
        onSubmit(){
            if(this.$store.getters.getUsersLength >0) {
                console.log("başarılı")
            } else [
                console.log("başarısız")
            ]
        }
    }    
}
</script>