<template>
  <div class="row">
    <div class="col-md-6 offset-3">
      <div>
        {{ user.jobPosting.postingDate }}
      </div>
      <div>
        <div>
          <h1>{{ user.jobPosting.jobTitle.title }}</h1>
          <h3>{{ user.jobPosting.employer.companyName }}</h3>
          <h3>{{ user.jobPosting.employer.webAddress }}</h3>
          <h3>{{ user.jobPosting.employer.email }}</h3>
          <h3>{{ user.jobPosting.employer.phoneNumber }}</h3>
        </div>
        <div>
          <button>Make passive</button>
          <button>Add Favorites</button>
        </div>
      </div>
      <hr />
      <div>
        <p>
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
          <li>City: {{ user.jobPosting.city.city }}</li>
          <li>Working Time: {{ user.jobPosting.workingTime.time }}</li>
          <li>Working Type: {{ user.jobPosting.workingType.type }}</li>
          <li>Salary Min: {{ user.jobPosting.salaryMin }}</li>
          <li>Salary Max: {{ user.jobPosting.salaryMax }}</li>
          <li>
            Number of Open Positions:
            {{ user.jobPosting.numberOfOpenPositions }}
          </li>
        </ul>
        <p>Closing Date {{ user.jobPosting.closingDate }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.jobPosting;
    },
  },
};
</script>
