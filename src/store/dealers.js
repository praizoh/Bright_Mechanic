import axios from 'axios'
// import router from '@/router';
export const dealers={
     state : {
        dealer: {},
        dealers:[],
    },
    
     actions :{
        async dealers( { commit }){
            const response = await axios.get('http://localhost:8081/dealers');
            const dealersData=response.data.dealers
            commit('dealers', dealersData);
        },
        // async getDealerById ( { commit }, {id} ){
        //     const response = await axios.get('http://localhost:3000/dealers/' +id);
        //     // const dealer={ id:1, companyName: 'Benson Car Parts',  Address:'Shop 34, Computer Village, Ikeja, Lagos' , Phone:'0801 000 0000'}
        //     commit ('setDealerById', dealer)
        //     // console.log(response.data);
        //   },

        async postDealers( { commit },payload ){
            try{
                var bodyFormData = new FormData();
                const response = await axios.post('/dealers', {payload});
                console.log(response.data)
            }catch(error){
                alert(error)
                console.log(error)
            }
        },
    },

    mutations: {
    dealers(state,dealersData){
        state.dealers=dealersData;
    },

    //get dealers by Id
    setDealerById(state, dealer){
        state.dealer = dealer;
    },
}
}

