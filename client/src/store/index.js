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
    filter:[0,0,0,0,],
      

    //home2
    jobPosting : null ,

    //home1
    recentlyPosted: [],

    jobPostintConfirmation: null,
    employerDetail : null,
    jobPostingsByPage: [],

    jobPostingsByFilters:[]
  },

  mutations: {
    setUsers(state, users) {
      state.users = users;
    },

    setFilters(state, filter){
      console.log(filter)
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

    setJobPostingByFilters(state,payload){
      state.jobPostingsByFilters = payload
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
        response.data.data.unshift({id:0,city:"City"})
        commit("setCities", response.data);
      });
    },


    getConfirmedEmployers({ commit }, params) {
      axios
        .get(
          `http://localhost:8080/api/employers/getAllByIsConfirmedAndUserConfirmationTypeIdSortedByCompanyName?isConfirmed=${params.status}&userConfirmationTypeId=${params.id}`
        )
        .then((response) => {
          commit("setConfirmedEmployers", response.data.data);
        });
    },

    //jobPosting 2
    getJobTitles({ commit }) {
      axios
        .get(`http://localhost:8080/api/jobTitles/getAll`)
        .then((response) => {
          response.data.data.unshift({id:0,title:"Job Title"})
          commit("setJobTitles", response.data);
        });
    },

    //jobPosting 3
    getWorkingTimes({ commit }) {
      axios
        .get(`http://localhost:8080/api/workingTimes/getAll`)
        .then((response) => {
          response.data.data.unshift({id:0,time:"Working Time"})
          commit("setWorkingTimes", response.data);
        });
    },

    //jobPosting 4
    getWorkingTypes({ commit }) {
      axios
        .get(`http://localhost:8080/api/workingTypes/getAll`)
        .then((response) => {
         response.data.data.unshift({id:0,type:"Working Type"})
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

    //home page 1
    getRecentlyPosted({ commit }) {
      axios
        .get(`http://localhost:8080/api/jobPostings/getAllActiveOnesSortedByPostingDateTop6`)
        .then((response) => {
          commit("setRecentlyPosted", response.data.data);
        });
    },
    
    getJobPostingByPageNoAndSize({ commit},{pageNo,pageSize}) {
      axios
        .get(`http://localhost:8080/api/jobPostings/getAllActiveOnesByPageSortedByPostingDate?pageNo=${pageNo}&pageSize=${pageSize}`)
        .then((response) => {
          commit("setJobPostingByPageNoAndSize", response.data.data);
        });
    },

    getJobPostingByFilters({ commit},payload) {
      console.log("geldiax")
      let [a,b,c,d] = [...payload]
      axios
        .get(`http://localhost:8080/api/jobPostings/getAllActiveOnesFilteredByCityAndJobTitleAndWorkingTimeAndWorkingType?cityId=${b}&jobTitleId=${a}&workingTimeId=${c}&workingTypeId=${d}`)
        .then((response) => {
          console.log("response")
          console.log(response)
          console.log("response")
          commit("setJobPostingByFilters", response.data.data);
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
