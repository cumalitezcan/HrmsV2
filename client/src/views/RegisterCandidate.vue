<template>
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
            />
          </div>
          <div class="mb-2">
            <label for="exampleFormControlInput2" class="form-label"
              >Last Name</label
            >
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput2"
            />
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
            />
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
            />
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
            />
          </div>
            <div class="mb-2">
            <label for="exampleFormControlInput6" class="form-label"
              >Password</label
            >
            <input
              type="password"
              class="form-control"
              id="exampleFormControlInput6"
            />
          </div>
            <div class="mb-4">
            <label for="exampleFormControlInput7" class="form-label"
              >Confirm Password</label
            >
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput7"
            />
          </div>
          <div class="d-grid gap-2 mb-4">
            <button type="submit" class="btn btn-warning">Submit</button>
          </div>
        </form>
      </div>
    </div>
    <hr>
    <Footer />
  </div>
</template>
