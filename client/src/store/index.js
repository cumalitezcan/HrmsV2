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
    jobPostingConfirmations: []
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
  },

  actions: {
    getUsers({ commit }) {
      axios.get(`http://localhost:8080/api/users/getAll`).then((response) => {
        commit("setUsers", response.data.data);
      });
    },

    getCvDetails({ commit }) {
      axios
        .get(
          `http://localhost:8080/api/resumes/getAllResumesDetailsByActivatedCandidate`
        )
        .then((response) => {
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
        .get(`http://localhost:8080/api/jobPostingConfirmations/getAll`)
        .then((response) => {
          commit("setJobPostingConfirmations", response.data.data);
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
