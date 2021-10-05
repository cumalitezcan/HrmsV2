import axios from "axios";
import {createStore} from "vuex";

const store = createStore({

    state:{
        users : []
    },

    mutations:{
        setUsers(state,users){
            state.users = users;
        }
    },

    actions:{
        getUsers({commit}) {
            axios.get('http://localhost:8081/api/users/getAll')
            .then(response=>{
                console.log(response)
                commit('setUsers',response.data)
            })
        }
        
    },

    getters:{
        getUsersEmailPassword: state => state.users.data.filter(user=>user.email != null && user.password != null),
        getUsersLength(state){
            return state.users.data.length
        }    
    },

    modules:{

    }
})

export default store;