import axios from 'axios'
import router from '@/router';
export const item={
    state : {
       item: {},
       items:[
        {Name:'Benz class c radiator, 5767', State:'New', Dealer:'Chibosu General Mohammed', Price:'50,000', PartNumber:'90856783tghy', RetailPrice:'#55,000', DealerPhone:'0804 456 777', DealerAddress:'No. 89, Salvation Road, Bodija,Ibadan'},
        {Name:'Benz class c radiator, 5767', State:'New', Dealer:'Chibosu General Mohammed', Price:'50,000', PartNumber:'90856783tghy', RetailPrice:'#55,000', DealerPhone:'0804 456 777', DealerAddress:'No. 89, Salvation Road, Bodija,Ibadan'},
        {Name:'Benz class c radiator, 5767', State:'New', Dealer:'Chibosu General Mohammed', Price:'50,000', PartNumber:'90856783tghy', RetailPrice:'#55,000', DealerPhone:'0804 456 777', DealerAddress:'No. 89, Salvation Road, Bodija,Ibadan'},
        {Name:'Benz class c radiator, 5767', State:'New', Dealer:'Chibosu General Mohammed', Price:'50,000', PartNumber:'90856783tghy', RetailPrice:'#55,000', DealerPhone:'0804 456 777', DealerAddress:'No. 89, Salvation Road, Bodija,Ibadan'},
        {Name:'Benz class c radiator, 5767', State:'New', Dealer:'Chibosu General Mohammed', Price:'50,000', PartNumber:'90856783tghy', RetailPrice:'#55,000', DealerPhone:'0804 456 777', DealerAddress:'No. 89, Salvation Road, Bodija,Ibadan'},
        {Name:'Benz class c radiator, 5767', State:'New', Dealer:'Chibosu General Mohammed', Price:'50,000', PartNumber:'90856783tghy', RetailPrice:'#55,000', DealerPhone:'0804 456 777', DealerAddress:'No. 89, Salvation Road, Bodija,Ibadan'},
        {Name:'Benz class c radiator, 5767', State:'New', Dealer:'Chibosu General Mohammed', Price:'50,000', PartNumber:'90856783tghy', RetailPrice:'#55,000', DealerPhone:'0804 456 777', DealerAddress:'No. 89, Salvation Road, Bodija,Ibadan'},
    ],
   },
   
    actions :{
       async items( { commit }){
         const response = await axios.post('/login');
           
           commit('dealers');
         },
   },
   
   //  mutations: {
       // dealers(state,dealers){
           // state.dealers=dealers;
           
           // alert("login details confirmed")
           // router.push('/dealers');
       // }
   // }
}

