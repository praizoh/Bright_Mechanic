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
    // to create users
    async postUsers( { commit },payload ){
        try{
            const response = await axios.post('/users', {payload});
            console.log(response.data)
        }catch(error){
            alert(error)
            console.log(error)
        }
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

