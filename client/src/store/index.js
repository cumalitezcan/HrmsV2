import axios from "axios";
import {createStore} from "vuex";

const store = createStore({
    state:{
        users : [],
        cvDetails: [],
        confirmedEmployers: [],
        cities: []
    },

    mutations:{ 
        setCvDetails(state,cvDetails){
            state.cvDetails = cvDetails;
            console.log("--")
            console.log(cvDetails)
            console.log("--")
        },
        setConfirmedEmployers(state,confirmedEmployers){
            state.confirmedEmployers = confirmedEmployers;
            console.log("--")
            console.log(confirmedEmployers)
            console.log("--")
        },  
        setCities(state,cities){
            state.cities = cities;
            console.log("--")
            console.log(cities)
            console.log("--")
        },  
    },     

    actions:{
        getCvDetails({commit}) {
            axios.get(`http://localhost:8080/api/resumes/getAllResumesDetailsByActivatedCandidate`)
            .then(response=>{
                commit('setCvDetails',response.data.data)
            })
        },
        getCities({commit}) {
            axios.get(`http://localhost:8080/api/cities/getAll`)
            .then(response=>{
                commit('setCities',response.data)
            })
        },
        getConfirmedEmployers({commit},params) {
            axios.get(`http://localhost:8080/api/employers/getAllByIsConfirmedAndUserConfirmationTypeIdSortedByCompanyName?isConfirmed=${params.status}&userConfirmationTypeId=${params.id}`)
            .then(response=>{
                commit('setConfirmedEmployers',response.data.data)
            })
        }, 
    },

    getters:{
        getUsersLength(state){
            return state.users.data.length
        }    ,
        getImages(state){
            console.log(state.cvDetails.data)
            return state.cvDetails.data
        }    
    },
    modules:{
    }
})

export default store;