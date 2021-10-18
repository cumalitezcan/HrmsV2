<template>
  <Navbar />
  <div class="container">
    <h1 class="mt-2">Employer Register</h1>
    <hr />
    
    
    <div class="row">
      <div class="col-6 col-md-6 offset-3">
        <div class="text-end"><DateTime /></div>
        <form>
          <div class="mb-2">
            <label for="exampleFormControlInput1" class="form-label"
              >Company Name</label
            >
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
            />
          </div>
          <div class="mb-2">
            <label for="exampleFormControlInput2" class="form-label"
              >Phone Number</label
            >
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput2"
            />
          </div>
         
           <div class="mb-2 ">
            <label for="exampleFormControlInput3" class="form-label"
              >Web Address(The domains of the e-mail and web address must be the same.)</label
            >
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput3"
              placeholder="example.com"
            />
          </div>
          <div class="mb-2">
            <label for="exampleFormControlInput4" class="form-label"
              >E-mail</label
            >
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput4"
              placeholder="example@example.com"
            />
          </div>
          
            <div class="mb-2">
            <label for="exampleFormControlInput5" class="form-label"
              >Password</label
            >
            <input
              type="password"
              class="form-control"
              id="exampleFormControlInput5"
            />
          </div>
            <div class="mb-4">
            <label for="exampleFormControlInput6" class="form-label"
              >Confirm Password</label
            >
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput6"
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
