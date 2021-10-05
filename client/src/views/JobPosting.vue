<template>
  <Navbar />
  <div class="container">
    <h1>Job Posting</h1>
    <hr />
    <div class="row">
      <div class="col-8 offset-2 d-flex justify-content-start">
        <PageSize class="m-4" />
        <Pages class="mt-4 ms-5" />
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div class="col-6 offset-1">
        <div class="row d-flex justify-content-between ">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div class="col-4 offset-1 ">
     
          <Dropdown class="mb-2" />
          <Dropdown class="mb-2" />
          <Dropdown class="mb-2" />
          <Dropdown class="mb-2" />
          <button class="btn btn-warning d-grid gap-2 col-5 mb-2">Filter</button>
          <button class="btn btn-light d-grid gap-2 col-5 mb-2 border">Clear Filter</button>
         
          
      
      
      </div>
    </div>
  </div>
  <hr />
  <Footer />
</template>
