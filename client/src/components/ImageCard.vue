<template>
  <div
    v-for="user in $store.state.cvDetails"
    :key="user.id"
    class="card col-3"
    
  >
    <div v-if="user.image !== null">
      <img :src="user.image.url" class="card-img-top" alt="resim1" />
    </div>
    <div v-else>
      <img
        src="../assets/defaultpicture.jpg"
        class="card-img-top"
        alt="resim1"
      />
    </div>

    <div class="card-body">
      <h5>{{ user.candidate.firstName + " " }}{{ user.candidate.lastName }}</h5>

      <div
        v-for="job in user.experiences"
        :key="job.id"
        class="card"
        style="width: 18rem;"
      >

      <div v-if="job.jobTitle.title != null & job.id != null">
      <p class="card-text">{{job.jobTitle.title}} </p>
    </div>
    <div v-else>
       <p class="card-text">Bilgi Girişi Yapılmamış</p>
    </div>

     <!-- <p class="card-text">  {{job.jobTitle.title !== null || job.jobTitle.title !== undefined ? job.jobTitle.title : 'yok'}}   </p> -->
      </div>
      <div class="text-center mt-2">
         <a class="me-2" style="color: #171515 ;" href="#!" role="button"
          ><i class="fab fa-github fa-2x"></i
        ></a>

        <a style="color: #0077b5;" href="#!" role="button"
          ><i class="fab fa-linkedin fa-2x"></i
        ></a>
      </div>
     
    </div>
  </div>
</template>
