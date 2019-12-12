import axios from 'axios'   
// import router from '@/router';
export const login={
     state : {
        token:localStorage.getItem("token") || '',
        loggedUser:{}
    },
    
    actions :{
        async Login( { commit }, payload){
            alert(payload.username)
            alert(payload.password)
            let data={}
            const headers=payload
            const response = await axios.post('/userauth', data, {headers:headers});
            const token = response.data.token
            alert(token)
            const loggedUser = response.data.user
            localStorage.setItem("token", token)
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

