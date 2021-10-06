import axios from "axios";
import {createStore} from "vuex";

const store = createStore({
    state:{
        users : [],
        cvDetails: [],
        confirmedEmployers: []
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
    },     

    actions:{
        getCvDetails({commit}) {
            axios.get(`http://localhost:8080/api/resumes/getAllResumesDetailsByActivatedCandidate`)
            .then(response=>{
                commit('setCvDetails',response.data.data)
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