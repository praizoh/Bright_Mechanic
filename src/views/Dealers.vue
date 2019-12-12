<template>
<div>
    <Dashboard/>
     <v-container>
        <v-toolbar color="white" class="mb-0" height="30" flat app>
            <v-toolbar-title class="res1 font-weight-black">
                Dealers
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
            <v-col cols="12" md="8" sm="8">
                <v-text-field class="ml-10 mr-10"
                    placeholder="search for dealers..."
                    prepend-inner-icon="mdi-magnify"
                    color="#B1AFCE"
                ></v-text-field>
            </v-col>
            
            <v-col cols="12" md="4" sm="4">
                <div class="float-md-right mx-sm-auto ml-8 mr-12">
                    <v-btn large class="white--text mt-4" style="background-color:#B1AFCE" to="/dealers/addDealer">
                         <v-icon>mdi-plus</v-icon> Add Dealers
                    </v-btn>
                </div>
                
            </v-col>
        </v-row>
        <v-container class="mt-n4" v-for="dealer in dealers" :key="dealer.id">
            <v-hover v-slot:default="{ hover }">
                <v-row :class="{'on-hover':hover}">
                    <v-col cols="12" lg="11" md="11" sm="11" class="mt-n2 mb-0 pb-0">
                        <v-card class="ml-12 mr-12 mb-0" flat  tile   @mouseover="getDealerId(dealer.id)">
                            <v-row justify="space-around">
                                <v-col cols="12" lg="5" md="5" sm="12" class="mt-n4">
                                        <v-subheader class="res1 font-weight-bold" style="color:#B1AFCE; font-weight:bold">Company Name</v-subheader>
                                    <v-card-text class="mt-n4 font-weight-black res2 text-truncate">{{dealer.name}}</v-card-text>
                                </v-col>
                                <v-col cols="12" lg="4" md="4" sm="12" class="mt-n4">
                                    <v-subheader class="res1 font-weight-bold" style="color:#B1AFCE; font-weight:bold">Address</v-subheader>
                                    <v-tooltip bottom color="#080838">
                                        <template v-slot:activator="{ on }">
                                            <v-card-text class="mt-n4 font-weight-black res2 text-truncate" v-on="on">{{dealer.address}}</v-card-text>
                                            </template>
                                            <span>{{dealer.address}}</span>
                                    </v-tooltip>  
                                </v-col>
                                <v-col cols="12" lg="3" md="3" sm="12" class="mt-n4">
                                    <v-subheader class="res1 font-weight-bold" style="color:#B1AFCE; font-weight:bold">Phone</v-subheader>
                                    <v-card-text class="mt-n4 font-weight-black res2">{{dealer.phonePri}}</v-card-text>
                                </v-col>
                                
                            </v-row>
                
                        </v-card>
                    </v-col>
                    <v-col cols="12" lg="1" md="1" sm="1" class="mt-n2">
                        <v-dialog v-model="dialog" persistent max-width="300" hide-overlay overlay-color="white">
                        <template v-slot:activator="{ on }">
                                <v-btn icon class="mr-2 mt-7"  :class="{'mr-12 float-right': $vuetify.breakpoint.smAndDown}" v-on="on">
                                    <v-icon color="red">mdi-delete</v-icon>
                                </v-btn>
                            </template>
                            <v-card  class="pa-7">
                                <v-card-text class="font-weight-black text-center">Are you sure you want to delete fuel pump?</v-card-text>
                                <v-card-action>
                                    <v-btn color="grey" dark @click="dialog = false">No</v-btn>
                                    
                                    <v-btn color="grey" dark class="float-right" @click="dialog = false">Yes</v-btn>
                                </v-card-action>
                            </v-card>
                        </v-dialog>
                    </v-col>
                </v-row>
                
            </v-hover>
            
             <v-divider class="mt-0"></v-divider>
        </v-container>
        
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
         dialog:false,
         hover:false
  }),
  created(){
    this.$store.dispatch("dealers")
      .then((success)=>{
        alert(success);
      })
      .catch((error)=>{
        alert(error);
      });
    },
  computed:{
    dealers(){
    return this.$store.state.dealers.dealers;
    }
  },
  methods:{
      getDealerId(id){
        // alert(id);
        this.$store.dispatch('getDealerById', {id:id})
        .then(()=>this.$router.push('/dealers/dealerInfo'))
      }
  }
}
</script>
<style>
.res1{
font-weight: bolder;
font-family: Raleway;

color: #B1AFCE
}
.res2{
font-weight: bolder;
/* font-size: 15px; */
font-family: Raleway;
color: black;
}
.on-hover{
    background-image:#B1AFCE !important; 
}
</style>