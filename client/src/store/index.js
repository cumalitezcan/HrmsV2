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
    filter:[
      0,
      0,
      0,
      0,
    ],


    //home2
    jobPosting : null ,

    //home1
    recentlyPosted: [],

    jobPostintConfirmation: null,
    employerDetail : null,
    jobPostingsByPage: []
  },

  mutations: {
    setUsers(state, users) {
      state.users = users;
    },

    setFilters(state, filter){
      state.filter.splice(filter.id,1,filter.value)
    },

    setCvDetails(state, cvDetails) {
      state.cvDetails = cvDetails;
    },
    setConfirmedEmployers(state, confirmedEmployers) {
      state.confirmedEmployers = confirmedEmployers;
    },

    //jobPosting 1
    setCities(state, cities) {
      state.cities = cities;
    },

    //jobPosting 2
    setJobTitles(state, jobTitles) {
      state.jobTitles = jobTitles;
    },
    //jobPosting 3
    setWorkingTimes(state, workingTimes) {
      state.workingTimes = workingTimes;
    },
    //jobPosting 4
    setWorkingTypes(state, workingTypes) {
      state.workingTypes = workingTypes;
    },
    //jobPosting 5
    setJobPostingConfirmations(state, jobPostingConfirmations) {
      state.jobPostingConfirmations = jobPostingConfirmations;
    },
    
    setJobPostingById(state, jobPosting) {
      state.jobPosting = jobPosting;
    },
    
    //home page1
    setRecentlyPosted(state, recentlyPosted) {
      state.recentlyPosted = recentlyPosted;
    },
   
    //job posting 6
    setJobPostingByPageNoAndSize(state,payload){
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

    //jobPosting 1
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

    //jobPosting 2
    getJobTitles({ commit }) {
      axios
        .get(`http://localhost:8080/api/jobTitles/getAll`)
        .then((response) => {
          commit("setJobTitles", response.data);
        });
    },

    //jobPosting 3
    getWorkingTimes({ commit }) {
      axios
        .get(`http://localhost:8080/api/workingTimes/getAll`)
        .then((response) => {
          commit("setWorkingTimes", response.data);
        });
    },

    //jobPosting 4
    getWorkingTypes({ commit }) {
      axios
        .get(`http://localhost:8080/api/workingTypes/getAll`)
        .then((response) => {
         response.data.data.unshift({id:0,type:"title"})
         console.log(response.data.data)
          commit("setWorkingTypes", response.data.data);
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

    //home page 1
    getRecentlyPosted({ commit }) {
      axios
        .get(`http://localhost:8080/api/jobPostings/getAllActiveOnesSortedByPostingDateTop6`)
        .then((response) => {
          commit("setRecentlyPosted", response.data.data);
        });
    },
    
    getJobPostingByPageNoAndSize({ commit},{pageNo,pageSize}) {
      console.log(pageNo)
      console.log(pageSize)
      axios
        .get(`http://localhost:8080/api/jobPostings/getAllActiveOnesByPageSortedByPostingDate?pageNo=${pageNo}&pageSize=${pageSize}`)
        .then((response) => {
          commit("setJobPostingByPageNoAndSize", response.data.data);
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
    jobPostingLength: (state) => state.jobPostingConfirmations.length 
    

    

    // jobPostingsBySize: (state) => {
    //     return {
    //       ten:state.jobPostingConfirmations.slice(0,10),
    //       twenty:state.jobPostingConfirmations.slice(0,20),
    //       fifty:state.jobPostingConfirmations.slice(0,50),
    //       onehundred:state.jobPostingConfirmations.slice(0,100),
    //     }
    // },

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
