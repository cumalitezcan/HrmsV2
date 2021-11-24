import axios from "axios";
import { createStore } from "vuex";

const store = createStore({
  state: {
    users: [],
    cvDetails: [],
    confirmedEmployers: [],
    cities: [],
    jobTitles: [],
    workingTimes: [],
    workingTypes: [],
    jobPostingConfirmations: [],
    jobPosting : null ,
    recentlyPosted: [],
    jobPostintConfirmation: null,
    employerDetail : null,
    jobPostingsByPage: []
  },

  mutations: {
    setUsers(state, users) {
      state.users = users;
    },

    setCvDetails(state, cvDetails) {
      state.cvDetails = cvDetails;
    },
    setConfirmedEmployers(state, confirmedEmployers) {
      state.confirmedEmployers = confirmedEmployers;
    },
    setCities(state, cities) {
      state.cities = cities;
    },

    setJobTitles(state, jobTitles) {
      state.jobTitles = jobTitles;
    },
    setWorkingTimes(state, workingTimes) {
      state.workingTimes = workingTimes;
    },
    setWorkingTypes(state, workingTypes) {
      state.workingTypes = workingTypes;
    },
    setJobPostingConfirmations(state, jobPostingConfirmations) {
      state.jobPostingConfirmations = jobPostingConfirmations;
    },
    setJobPostingById(state, jobPosting) {
      state.jobPosting = jobPosting;
    },
    setRecentlyPosted(state, recentlyPosted) {
      state.recentlyPosted = recentlyPosted;
    },
    setJobPostintConfirmation(state, jobPostintConfirmation) {
      state.jobPostintConfirmation = jobPostintConfirmation;
    },
    setJobPostintByPageNoAndSize(state,payload){
      state.jobPostingsByPage = payload
    },

  },

  actions: {
    getUsers({ commit }) {
      axios.get(`http://localhost:8080/api/users/getAll`).then((response) => {
        commit("setUsers", response.data.data);
      });
    },

    getCvDetails({ commit }) {
      console.log("get cv daetils")
      axios
        .get(
          `http://localhost:8080/api/resumes/getAllResumesDetailsByActivatedCandidate`
        )
        .then((response) => {
          console.log(response.data.data)
          commit("setCvDetails", response.data.data);
        });
    },
    getCities({ commit }) {
      axios.get(`http://localhost:8080/api/cities/getAll`).then((response) => {
        commit("setCities", response.data);
      });
    },
    getConfirmedEmployers({ commit }, params) {
      axios
        .get(
          `http://localhost:8080/api/employers/getAllByIsConfirmedAndUserConfirmationTypeIdSortedByCompanyName?isConfirmed=${params.status}&userConfirmationTypeId=${params.id}`
        )
        .then((response) => {
          console.log(response.data.data)
          commit("setConfirmedEmployers", response.data.data);
        });
    },

    getJobTitles({ commit }) {
      axios
        .get(`http://localhost:8080/api/jobTitles/getAll`)
        .then((response) => {
          commit("setJobTitles", response.data);
        });
    },
    getWorkingTimes({ commit }) {
      axios
        .get(`http://localhost:8080/api/workingTimes/getAll`)
        .then((response) => {
          commit("setWorkingTimes", response.data);
        });
    },
    getWorkingTypes({ commit }) {
      axios
        .get(`http://localhost:8080/api/workingTypes/getAll`)
        .then((response) => {
          commit("setWorkingTypes", response.data);
        });
    },
    getJobPostingConfirmations({ commit }) {
      axios
        .get(`http://localhost:8080/api/jobPostings/getAllByIsActive?isActive=true`)
        .then((response) => {
          commit("setJobPostingConfirmations", response.data.data);
        });
    },
    getJobPostingById({ commit },id) {
      axios
        .get(`http://localhost:8080/api/jobPostings/getById?id=${id}`)
        .then((response) => {
          commit("setJobPostingById", response.data.data);
        });
    },
    getRecentlyPosted({ commit }) {
      axios
        .get(`http://localhost:8080/api/jobPostings/getAllActiveOnesSortedByPostingDateTop6`)
        .then((response) => {
          commit("setRecentlyPosted", response.data.data);
        });
    },
    getJobPostintConfirmation({ commit },id) {
      axios
        .get(`http://localhost:8080/api/jobPostingConfirmations/getById?id=${id}`)
        .then((response) => {
          commit("setJobPostintConfirmation", response.data.data);
        });
    },
    getJobPostintByPageNoAndSize({ commit },pageNo,pageSize) {
      axios
        .get(`http://localhost:8080/api/jobPostings/getAllActiveOnesByPageSortedByPostingDate?pageNo=${pageNo}&pageSize=${pageSize}`)
        .then((response) => {
          commit("setJobPostintByPageNoAndSize", response.data.data);
        });
    },


  },

  getters: {
    getUsersLogIn: (state) => {
      return state.users.map((user) => {
        return {
          email: user.email,
          password: user.password,
        };
      });
    },

    jobTitleFilter: (state) => {
      return state.jobTitles.data.map((jobTitle)=>{
        return {
          id:jobTitle.id,
          data:jobTitle.title,
        };
      });
    },
    cityFilter: (state) => {
      return state.cities.data.map((city)=>{
        return {
          id:city.id,
          data:city.city,
        };
      });
    },
    workingTimeFilter: (state) => {
      return state.workingTimes.data.map((workingTime)=>{
        return {
          id:workingTime.id,
          data:workingTime.time,
        };
      });
    },
    workingTypeFilter: (state) => {
      return state.workingTypes.data.map((workingType)=>{
        return {
            id:workingType.id,
            data:workingType.type,
        }
      })
    },
    

    jobPostingsBySize: (state) => {
        return {
          ten:state.jobPostingConfirmations.slice(0,10),
          twenty:state.jobPostingConfirmations.slice(0,20),
          fifty:state.jobPostingConfirmations.slice(0,50),
          onehundred:state.jobPostingConfirmations.slice(0,100),
        }
    },

    // userExperiences: (state) => {
    //   return state.cvDetails.experiences[0].jobTitle.map((user)=>{
    //     return {
    //         id:user.id,
    //         title:user.title
    //     }
    //   })
    // },


    // _CandidateFilter: (state) => {
    //   return state.cvDetails.data.map((candidate)=>{
    //     return {
    //       id:candidate.id,
    //       experiences: candidate.experiences,
    //       firstName:candidate.candidate.firstName,
    //       lastName:candidate.candidate.lastName,
    //       imageUrl:candidate.image.url,
    //       links:candidate.links,
    //     };
    //   });
    // },

    // getUsersLogIn : state => {
    //    const newList = state.users.map(user=>{
    //         return {
    //             email: user.email,
    //             password: user.password
    //         }
    //    })
    //     return newList;
    // },
  },
  modules: {},
});

export default store;
