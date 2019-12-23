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
            
            // const basicAuth = 'Basic ' + btoa(`${payload.username}:${payload.password}`);
            let data={}
            // const headers=payload
            const response = await axios.post('/userauth', data, {auth:{
                username:payload.username, password:payload.password
            }});
            const token = response.data.token
            alert(token)
            const loggedUser = response.data.user
            alert(loggedUser.firstname)
            localStorage.setItem("token", token)
            commit('setToken', token)
            commit('setLoggedUser', loggedUser)
        },
    },
    
    mutations: {
        setLoggedUser(state,loggedUser){
        state.loggedUser=loggedUser; 
        alert(state.loggedUser.lastname)          
        alert("login details confirmed")
        },
        setToken(state,token){
            state.token=token;
        }
    }
}

// logout({commit}){
//     return new Promise((resolve, reject) => {
//       commit('logout')
//       localStorage.removeItem('token')
//       delete axios.defaults.headers.common['Authorization']
//       resolve()
//     })
//   }
// logout(state){
//     state.status = ''
//     state.token = ''
//   },