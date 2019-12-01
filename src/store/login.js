// import axios from 'axios'
// import router from '@/router';
export const login={
     state : {
        token:localStorage.getItem("token") || '',
        loggedUser:''
    },
    
    actions :{
        async Login( { commit }, payload){
            // const response = await axios.post('/login', payload);
            // const token = data.token
            // const loggedUser = data.user
            const loggedUser= {
                name:"Ade",
                id:7
            }
            const token = 123
            localStorage.setItem("token", token)
            alert (payload.username);
            alert (payload.password);
            commit('setToken', token)
            commit('setLoggedUser', loggedUser)
        },
    },
    
    mutations: {
        setLoggedUser(state,loggedUser){
        state.loggedUser=loggedUser;           
        alert("login details confirmed")
        },
        setToken(state,token){
            state.token=token;
        }
    }
}

