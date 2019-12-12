import axios from 'axios'
// import router from '@/router';
export const user={
    state : {
       user: {},
       users:[],
   },
   
   actions :{
    async User( { commit } ){
        const response = await axios.get('/users');
        const users=response.data.users
        console.log(users)
        commit('setUsers', users);
    },
},

mutations: {
    setUsers(state, users){
        state.users=users
    },
    setUserById(state,User){
        state.user=User;
    }
}
}

