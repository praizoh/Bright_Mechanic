import axios from 'axios'
// import router from '@/router';
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
          alert('items')
          const response = await axios.get('/items?dealerName=' +dealerName +'&dealerAlias='+dealerAlias);
            let items= response.data.items;
            alert(items[0].name)
            console.log(items)
            commit('setItemByDealer', items);
          },

          // to create items
    async postItems( { commit },payload ){
      var item=payload.name
      var partNumber=payload.partNumber
      var condition= payload.condition
      var dealerPrice= payload.dealerPrice
      var retailPrice = payload.retailPrice
      var spec= payload.spec
      var brand= payload.brand
      var description= payload.description
      var datasheetUrl=payload.datasheetUrl
      var datasheetThumbnail=payload.datasheetThumbnail
      var itemThumbnail=payload.itemThumbnail
      var imgUrls=payload.imgUrls
      var dealer=payload.dealer
      var domain=payload.domain
      var categories=payload.categories
      try{
          const response = await axios.post('/items', {name,partNumber,condition,dealerPrice,retailPrice,spec,brand,description,datasheetUrl,datasheetThumbnail,itemThumbnail,imgUrls,dealer,domain,categories});
          // const response = await axios.post('/users',{payload});
          console.log(response.data)
      }catch(error){
          // alert(error)
          console.log(error)
      }
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

