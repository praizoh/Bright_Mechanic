import axios from 'axios'
import router from '@/router';
export const item={
    state : {
       item: {},
       items:[],
    itemByDealer:[]
   },
   
    actions :{
       async items( { commit }){
         const response = await axios.get('/items');
           let items= response.data.items;
          //  alert(items)
           console.log(items)
           commit('setItems', items);
        },

        async getItemsByDealerName( { commit }, {dealerName, dealerAlias}){
          const response = await axios.get('/items?dealerName=' +dealerName +'&dealerAlias='+dealerAlias);
            let items= response.data.items;
            alert(items[0].name)
            console.log(items)
            commit('setItemByDealer', items);
          },

   },
   
  mutations: {
      setItems(state,items){
      state.items=items;  
      },
      
        setItemByDealer(state,itemByDealer){
        state.itemByDealer=itemByDealer;  
        
    }
  }
}

