<template>
  <div class="row">
    <div class="col-md-6 offset-3">
      <div>
        {{ jobPosting.postingDate }}
      </div>
      <div>
        <div>
          <h1>{{ jobPosting.jobTitle.title }}</h1>
          <h3>{{ jobPosting.employer.companyName }}</h3>
          <h3>{{ jobPosting.employer.webAddress }}</h3>
          <h3>{{ jobPosting.employer.email }}</h3>
          <h3>{{ jobPosting.employer.phoneNumber }}</h3>
        </div>
        <div>
          <button class="btn btn-danger me-1">Make passive</button>
          <button class="btn btn-success">Add Favorites</button>
        </div>
      </div>
      <hr />
      <div>
        <p class="text-primary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim diam
          vulputate ut pharetra. Eu scelerisque felis imperdiet proin fermentum
          leo vel. Eget mauris pharetra et ultrices neque ornare. Leo a diam
          sollicitudin tempor id eu nisl. Sed tempus urna et pharetra. Faucibus
          nisl tincidunt eget nullam non nisi est. Non nisi est sit amet
          facilisis. Suspendisse faucibus interdum posuere lorem ipsum. At
          elementum eu facilisis sed odio. Vitae ultricies leo integer malesuada
          nunc. Orci a scelerisque purus semper eget duis. Egestas integer eget
          aliquet nibh praesent tristique. Ornare suspendisse sed nisi lacus sed
          viverra tellus in. Libero justo laoreet sit amet cursus. Tincidunt id
          aliquet risus feugiat in. Imperdiet sed euismod nisi porta lorem
          mollis aliquam. Id porta nibh venenatis cras sed felis eget.
        </p>
        <ul>
          <li>City: {{ jobPosting.city.city }}</li>
          <li>Working Time: {{ jobPosting.workingTime.time }}</li>
          <li>Working Type: {{ jobPosting.workingType.type }}</li>
          <li>Salary Min: {{ jobPosting.salaryMin }}</li>
          <li>Salary Max: {{ jobPosting.salaryMax }}</li>
          <li>
            Number of Open Positions:
            {{ jobPosting.numberOfOpenPositions }}
          </li>
        </ul>
        <p>Closing Date {{ jobPosting.closingDate }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:["jobPosting"],
  
};
</script>
