<template>
    <div>
      <div class="card border-dark m-3" style="width: 18rem;">
        <div v-if="user.image !== null">
          <img :src="user.image.url" class="card-img-top" alt="resim1" />
        </div>
        <div v-else>
          <img
            src="../../assets/defaultpicture.jpg"
            class="card-img-top"
            alt="resim1"
          />
        </div>

        <div class="card-body">
          <h5>
            {{ user.candidate.firstName + " " }}{{ user.candidate.lastName }}
          </h5>
          <div v-if="user.experiences.length > 0">
            <p class="card-text">{{ user.experiences[0].jobTitle.title }}</p>
          </div>
          <div v-else>
            <p class="card-text">Bilgi Girişi Yapılmamış</p>
          </div>
        </div>
        <div class="text-center mt-2">
          <hr />
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

<script>
export default {
  props: ["user"],
};
</script>
