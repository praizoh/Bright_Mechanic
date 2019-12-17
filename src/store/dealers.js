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
        async getDealerById ( { commit }, {id} ){
            const response = await axios.get('/dealers/' +id);
            let dealer = response.data
            commit ('setDealerById', dealer)
            console.log(response.data);
        },

        async postDealers( { commit },payload ){  
            let dealer={
                name:payload.dealer.name,
                alias:payload.dealer.alias,
                phonePri:payload.dealer.phonePri,
                email:payload.dealer.email,
                address:payload.dealer.address,
                note:payload.dealer.note,
                description:payload.dealer.description,
                imgUr:payload.dealer.imgUr,
                domain:payload.dealer.domain
            }
            alert(dealer.name)
            alert(dealer.alias)
            try{
                const response = await axios.post('/signup', {dealer});
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

