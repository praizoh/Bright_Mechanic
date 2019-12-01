// import axios from 'axios'
// import router from '@/router';
export const user={
    state : {
       user: {},
       users:[
                { name: 'Hafiz Gods-will',  username:'Hafs' , password:'Hafiza', priviledge:'Member'},
                { name: 'Hafiz Gods-will',  username:'Hafs' , password:'Hafiza', priviledge:'Member'},
                { name: 'Hafiz Gods-will',  username:'Hafs' , password:'Hafiza', priviledge:'Admin'},
                { name: 'Hafiz Gods-will',  username:'Hafs' , password:'Hafiza', priviledge:'Member'},
                { name: 'Hafiz Gods-will',  username:'Hafs' , password:'Hafiza', priviledge:'Member'},
                { name: 'Hafiz Gods-will',  username:'Hafs' , password:'Hafiza', priviledge:'Admin'},
                { name: 'Hafiz Gods-will',  username:'Hafs' , password:'Hafiza', priviledge:'Member'},
                { name: 'Hafiz Gods-will',  username:'Hafs' , password:'Hafiza', priviledge:'Member'},
                { name: 'Hafiz Gods-will',  username:'Hafs' , password:'Hafiza', priviledge:'Member'},
                { name: 'Hafiz Gods-will',  username:'Hafs' , password:'Hafiza', priviledge:'Admin'},
                { name: 'Hafiz Gods-will',  username:'Hafs' , password:'Hafiza', priviledge:'Member'},
        
      ],
   },
   
   actions :{
    async User( { commit } ){
        // const response = await axios.post('/users');
        const User= { name: 'Hafiz Gods-will',  username:'Hafs' , password:'Hafiza', priviledge:'Member'}
        commit('setUserById', User)
    },
},

mutations: {
    setUserById(state,User){
        state.user=User;
    }
}
}

