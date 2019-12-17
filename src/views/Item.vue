<template>
    
<div>
    <Dashboard/>
    <v-container>
        <v-toolbar color="white" class="mb-0" height="30" flat>
            <!-- <v-toolbar-title style="font-family: Raleway;font-style: normal;font-weight: bold;font-size: 30px;color: #B1AFCE;"> -->
            <v-toolbar-title class="font-weight-black res1">
                Items
            </v-toolbar-title>
            <v-spacer>
            </v-spacer>
            <v-avatar
                size="40px"
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
                    color="#B1AFCE"
            ></v-text-field>
            </v-col>
            
            <v-col cols="12" md="4">
                <!-- <div class="float-md-right mx-sm-auto ml-8 mr-12">
                    <v-btn large class="white--text mt-4" style="background-color:#B1AFCE" to='/item/addItem'>
                        <v-icon>mdi-plus</v-icon> Add Items
                    </v-btn>
                </div> -->
                
            </v-col>
            
        </v-row>
        <v-container class="mt-n4">
        <v-expansion-panels max-width="800" >
            <v-expansion-panel v-for="(item,i) in items" :key="i">
                <v-expansion-panel-header class="">
                    
                    <v-row justify="space-around">
                        <v-col cols="12" lg="3" md="6" sm="6" class="mt-n4">
                            <v-subheader class="res1 font-weight-bold">Name</v-subheader>
                            <v-card-text class="mt-n4 font-weight-black res2">{{item.name}}</v-card-text>
                        </v-col>
                        <v-col cols="12" lg="2" md="6" sm="6" class="mt-n4">
                            <v-subheader class="res1 font-weight-bold">State</v-subheader>
                            <v-card-text class="mt-n4 res2 font-weight-black">{{item.condition}}</v-card-text>
                        </v-col>
                        <v-col cols="12" lg="4" md="6" sm="6" class="mt-n4">
                            <v-subheader class="res1 font-weight-bold">Dealer</v-subheader>
                            <v-card-text class="mt-n4 res2 font-weight-black">{{item.dealer.name}}</v-card-text>
                        </v-col>
                        <v-col cols="12" lg="2" md="6" sm="6" class="mt-n4">
                            <v-subheader class="res1 font-weight-bold">Price</v-subheader>
                            <v-card-text class="mt-n4 res2 font-weight-black">{{item.dealerPrice}}</v-card-text>
                        </v-col>
                        <v-col cols="12" lg="1" md="12" sm="12" class="mt-n2">
                            <v-dialog v-model="dialog1" persistent max-width="400" hide-overlay overlay-color="white">
                                <template v-slot:activator="{ on }">
                                    <v-btn icon class="mr-2 float-right" v-on="on">
                                        <v-icon color="red">mdi-delete</v-icon>
                                    </v-btn>
                                </template>
                                <v-card  class="pa-7">
                                    <v-card-text class="font-weight-black text-center">Are you sure you want to delete?</v-card-text>
                                    <v-card-action>
                                        <v-btn color="grey" dark @click="dialog1 = false">No</v-btn>
                                        
                                        <v-btn color="grey" dark class="float-right" @click="dialog1 = false">Yes</v-btn>
                                    </v-card-action>
                                </v-card>
                            </v-dialog>
                            
                        </v-col>
                    
                    </v-row>
                </v-expansion-panel-header>
                <v-expansion-panel-content class="mt-n6">
                    <v-row>
                    <v-col cols="12" lg="6" md="6" sm="6">
                    <v-row>
                        <v-col cols="12" lg="5" md="6" sm="12" class="mt-n4">
                            <v-subheader class="res1 font-weight-bold">Part-Number</v-subheader>
                            <v-card-text class="mt-n4 res2 font-weight-black ">{{item.partNumber}}</v-card-text>
                        </v-col>
                        <v-col cols="12" lg="5" md="6" sm="12" class="mt-n4" justify="center">
                            <v-subheader class="res1 font-weight-bold">Retail Price</v-subheader>
                            <v-card-text class="mt-n4 res2 font-weight-black">{{item.retailPrice}}</v-card-text>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" lg="5" md="6" sm="12" class="mt-n4">
                            <v-subheader class="res1 font-weight-bold">Dealer Phone No.</v-subheader>
                            <v-card-text class="mt-n4 res2 font-weight-black">{{item.dealer.phonePri}}</v-card-text>
                        </v-col>
                        <v-col cols="12" lg="5" md="6" sm="12" class="mt-n4">
                            <v-subheader class="res1 font-weight-bold">Item Datasheet</v-subheader>
                            <!-- <v-card-text class="mt-n4 res2 font-weight-black">{{item.DealerPhone}}</v-card-text> -->
                            <v-card-text class="mt-n4 res2 font-weight-black"><a href="https://www.reddit.com/r/vuejs/comments/8z8og1/vuetify_icon_links/" target="_blank">Datasheet</a></v-card-text>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" lg="12" md="12" sm="12" class="mt-n4">
                            <v-subheader class="res1 font-weight-bold">Dealer Address</v-subheader>
                            <v-card-text class="mt-n4 res2 font-weight-black">{{item.dealer.address}}</v-card-text>
                        </v-col>
                    </v-row>
                    </v-col>
                    <v-col cols="12" lg="5" md="6" sm="6">
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
         dialog1:false,
    
    page:1
     
  }),
  computed:{
    items(){
    return this.$store.state.item.items;
    }
  },
   created(){
    this.$store.dispatch("items")
      .then((success)=>{
        alert(success);
      })
      .catch((error)=>{
        alert(error);
      });
    },
    
}
</script>

<style scoped>
.res1{
font-family: Raleway;

color: #B1AFCE
}
.res2{
font-weight: bolder;
/* font-size: 15px; */
font-family: Raleway;
color: black;
}
</style>
