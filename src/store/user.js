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
    // get user by ID
    async getUserById ( { commit }, {id} ){
        const response = await axios.get('/users/' +id);
        let user = response.data
        commit ('setUserById', user)
        console.log(response.data);
    },
    // to create users
    async postUsers( { commit },payload ){
        var userid=payload.userid
        alert('userid '+ payload.userid)
        var firstname=payload.firstname
        var lastname=payload.lastname
        var phonePri=payload.phonePri
        var phoneSec=payload.phoneSec
        var email=payload.email
        var gender=payload.gender
        var userGroups=payload.priviledge
        var domain=payload.domain
        alert(userid)
        alert(domain)
        alert(userGroups[0])
        try{
            const response = await axios.post('/users', {userid,firstname,lastname,phonePri, phoneSec, email,gender,userGroups,domain});
            // const response = await axios.post('/users',{payload});
            console.log(response.data)
        }catch(error){
            // alert(error)
            console.log(error)
        }
    },
},

mutations: {
    setUsers(state, users){
        state.users=users
    },
    setUserById(state,user){
        state.user=user;
    }
}
}

