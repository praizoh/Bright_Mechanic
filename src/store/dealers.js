// import axios from 'axios'
// import router from '@/router';
export const dealers={
     state : {
        dealer: {},
        dealers:[
            { id:1, companyName: 'Benson Car Parts',  Address:'Shop 34, Computer Village, Ikeja, Lagos' , Phone:'0801 000 0000'},
             { id:2, companyName: 'Chibosu General Merchant',  Address:'Number 89, Salvation Road,Mobil, Computer Village,Ibadan' , Phone:'0807 090 6459'},
             { id:3, companyName: 'Bodija Car Part Shop',  Address:'Shop 34, Computer Village' , Phone:'0801 000 0000'},
             { id:4, companyName: 'Uchendum Shop',  Address:'Shop 34, Computer Village,Ikeja, Lagos' , Phone:'0801 987 4321'},
             { id:5, companyName: 'Prestique Cars',  Address:'Shop 34, Computer Village,Ikeja, Lagos' , Phone:'0810 750 8709'},
          ],
    },
    
     actions :{
        // async dealers( { commit }){
        //     // const response = await axios.post('http://localhost:3000/login', {username,password});
            
        //     commit('dealers');
        // },
        async getDealerById ( { commit }, {id} ){
            alert(id);
            // const response = await axios.get('http://localhost:3000/viewPatient/' +id);
            const dealer={ id:1, companyName: 'Benson Car Parts',  Address:'Shop 34, Computer Village, Ikeja, Lagos' , Phone:'0801 000 0000'}
            commit ('setDealerById', dealer)
            // console.log(response.data);
          },
    },

    mutations: {
    // dealers(state,dealers){
    //     state.dealers=dealers;
        
    //     alert("login details confirmed")
    //     router.push('/dealers');
    // }

    //get dealers by Id
    setDealerById(state, dealer){
        state.dealer = dealer;
        // console.log(state.dealer);
    },
}
}

