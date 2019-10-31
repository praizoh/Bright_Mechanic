<template>
    
<div>
    <Dashboard/>
    <v-container>
        <v-toolbar color="white" class="mb-0" height="30" flat>
            <v-toolbar-title>
                Items
            </v-toolbar-title>
            <v-spacer>
            </v-spacer>
            <v-avatar
                size="30px"
                class="mr-10 ml-2"
            >
                <img
                alt="Avatar"
                src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                >
            </v-avatar>
        </v-toolbar>
        
        <v-row class="mt-0">
            <v-col cols="12" md="8">
                <v-text-field class="ml-10 mr-10"
                    placeholder="search for items..."
                    prepend-inner-icon="mdi-magnify"
            ></v-text-field>
            </v-col>
            
            <v-col cols="12" md="4">
                <div class="float-md-right mx-sm-auto ml-8 mr-12">
                    <v-btn large class="white--text grey mt-4">
                         + Add Items
                    </v-btn>
                </div>
                
            </v-col>
        </v-row>
        <v-container class="mt-n4">
        <v-expansion-panels>
            <v-expansion-panel v-for="(item,i) in items" :key="i">
                <v-expansion-panel-header>
                    
                    <v-row justify="space-around">
                        <v-col cols="12" lg="4" md="6" sm="6" class="mt-n4">
                            <v-subheader>Name</v-subheader>
                            <v-card-text class="mt-n4 font-weight-black text-truncate">{{item.Name}}</v-card-text>
                        </v-col>
                        <v-col cols="12" lg="2" md="6" sm="6" class="mt-n4">
                            <v-subheader>State</v-subheader>
                            <v-card-text class="mt-n4 font-weight-black text-truncate">{{item.State}}</v-card-text>
                        </v-col>
                        <v-col cols="12" lg="3" md="6" sm="6" class="mt-n4">
                            <v-subheader>Dealer</v-subheader>
                            <v-card-text class="mt-n4 font-weight-black  text-truncate">{{item.Dealer}}</v-card-text>
                        </v-col>
                        <v-col cols="12" lg="2" md="6" sm="6" class="mt-n4">
                            <v-subheader>Price</v-subheader>
                            <v-card-text class="mt-n4 font-weight-black text-truncate">{{item.Price}}</v-card-text>
                        </v-col>
                            <v-col cols="12" lg="1" md="6" sm="6" class="mt-n2">
                            <v-btn icon class="mr-2">
                                <v-icon color="red">mdi-delete</v-icon>
                            </v-btn>
                            
                        </v-col>
                    </v-row>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-row>
                        <v-col>
                    <v-row>
                        <v-col cols="12" lg="8" md="6" sm="6" class="mt-n4">
                            <v-subheader>Part-Number</v-subheader>
                            <v-card-text class="mt-n4 font-weight-black text-truncate">{{item.PartNumber}}</v-card-text>
                        </v-col>
                        <v-col cols="12" lg="4" md="6" sm="6" class="mt-n4" justify="center">
                            <v-subheader>Retail Price</v-subheader>
                            <v-card-text class="mt-n4 font-weight-black text-truncate">{{item.RetailPrice}}</v-card-text>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" lg="6" md="6" sm="6" class="mt-n4">
                            <v-subheader>Dealer Phone No.</v-subheader>
                            <v-card-text class="mt-n4 font-weight-black text-truncate">{{item.DealerPhone}}</v-card-text>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" lg="6" md="6" sm="6" class="mt-n4">
                            <v-subheader>Dealer Address</v-subheader>
                            <v-card-text class="mt-n4 font-weight-black text-truncate">{{item.DealerAddress}}</v-card-text>
                        </v-col>
                    </v-row>
                    </v-col>
                    <v-col>
                        <v-img src='/cab.jpg'  class="mx-auto mt-5" max-height="150" max-width='200'></v-img>
                    </v-col>
                    </v-row>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
    </v-container>
    <div class="text-center mt-5">
        <v-pagination
        v-model="page"
        :length="7"
        :total-visible="5"
        color="grey"
        ></v-pagination>
    </div>
</v-container>
</div>
    
</template>
<script>
import Dashboard from '../components/Dashboard'
export default {
    components:{
        Dashboard,
    },
     data: () => ({
    items: [
        {Name:'Benz class c radiator, 5767', State:'New', Dealer:'Chibosu General Mohammed', Price:'50,000', PartNumber:'90856783tghy', RetailPrice:'#55,000', DealerPhone:'0804 456 777', DealerAddress:'No. 89, Salvation Road, Bodija,Ibadan'},
        {Name:'Benz class c radiator, 5767', State:'New', Dealer:'Chibosu General Mohammed', Price:'50,000', PartNumber:'90856783tghy', RetailPrice:'#55,000', DealerPhone:'0804 456 777', DealerAddress:'No. 89, Salvation Road, Bodija,Ibadan'},
        {Name:'Benz class c radiator, 5767', State:'New', Dealer:'Chibosu General Mohammed', Price:'50,000', PartNumber:'90856783tghy', RetailPrice:'#55,000', DealerPhone:'0804 456 777', DealerAddress:'No. 89, Salvation Road, Bodija,Ibadan'},
        {Name:'Benz class c radiator, 5767', State:'New', Dealer:'Chibosu General Mohammed', Price:'50,000', PartNumber:'90856783tghy', RetailPrice:'#55,000', DealerPhone:'0804 456 777', DealerAddress:'No. 89, Salvation Road, Bodija,Ibadan'},
        {Name:'Benz class c radiator, 5767', State:'New', Dealer:'Chibosu General Mohammed', Price:'50,000', PartNumber:'90856783tghy', RetailPrice:'#55,000', DealerPhone:'0804 456 777', DealerAddress:'No. 89, Salvation Road, Bodija,Ibadan'},
        {Name:'Benz class c radiator, 5767', State:'New', Dealer:'Chibosu General Mohammed', Price:'50,000', PartNumber:'90856783tghy', RetailPrice:'#55,000', DealerPhone:'0804 456 777', DealerAddress:'No. 89, Salvation Road, Bodija,Ibadan'},
        {Name:'Benz class c radiator, 5767', State:'New', Dealer:'Chibosu General Mohammed', Price:'50,000', PartNumber:'90856783tghy', RetailPrice:'#55,000', DealerPhone:'0804 456 777', DealerAddress:'No. 89, Salvation Road, Bodija,Ibadan'},
    ],
    page:1
     
  }),
    
}
</script>

<style scoped>

</style>
