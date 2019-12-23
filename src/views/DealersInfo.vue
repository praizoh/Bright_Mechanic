<template>
    <div>
        <Dashboard/>
        <v-container>
            <v-toolbar color="white" class="mb-0 mt-2" height="30" flat>
            <v-toolbar-title class="res1 font-weight-black">
                
                Dealers/ Dealers deal
            
                
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
            <v-toolbar color="white" class="mb-0 mr-10 mt-4" height="30" flat>
            <v-spacer>
            </v-spacer>
           <v-btn icon class="mr-n12" to='/dealers/editDealerInfo.
           '>
                <v-icon color="grey">mdi-pencil</v-icon>
                
            </v-btn>
            <v-subheader class="mt-10 res1">Edit</v-subheader>
                <v-dialog v-model="dialog1" persistent max-width="400" overlay-color="white">
                    <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on">
                        <v-icon color="red">mdi-delete</v-icon>
                    </v-btn>
                    </template>
                    <v-card  class="pa-7">
                        <v-card-text class="font-weight-black text-center">Are you sure you want to delete Benson Car Parts. All items record will be deleted too.</v-card-text>
                        <v-card-action>
                            <v-btn color="#B1AFCE" dark @click="dialog1 = false">No</v-btn>
                            
                            <v-btn color="#B1AFCE" dark class="float-right" @click="dialog1 = false">Yes</v-btn>
                        </v-card-action>
                    </v-card>
                </v-dialog>
            </v-toolbar>
            <v-container mt-8>
                <v-card  flat>
                    <v-row no-gutters>
                        <v-col cols="12" lg="3" md="6" sm="6">
                            <v-subheader class="res1">Company Name</v-subheader>
                        </v-col>
                        <v-col cols="12" lg="9" md="6" sm="6">
                            <v-card-text class="res2 font-weight-black">{{deal.name}}</v-card-text>
                        </v-col>
                    
                    </v-row>
                    <v-divider></v-divider>
                    <v-row no-gutters>
                        <v-col cols="12" lg="3" md="6" sm="6">
                            <v-subheader class="res1">Alias</v-subheader>
                        </v-col>
                        <v-col cols="12" lg="9" md="6" sm="6">
                            <v-card-text class="res2 font-weight-black">{{deal.alias}}</v-card-text>
                        </v-col>
                    </v-row>
                    <v-divider></v-divider>
                    <v-row no-gutters>
                        <v-col cols="12" lg="3" md="6" sm="6">
                            <v-subheader class="res1">Phone Number(s)</v-subheader>
                        </v-col>
                        <v-col cols="12" lg="9" md="6" sm="6">
                            <v-card-text class="res2 font-weight-black">{{deal.phonePri}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{deal.phoneSec}}</v-card-text>
                        </v-col>
                    
                    </v-row>
                    <v-divider></v-divider>
                    <v-row no-gutters>
                        <v-col cols="12" lg="3" md="6" sm="6">
                            <v-subheader class="res1">Email</v-subheader>
                        </v-col>
                        <v-col cols="12" lg="9" md="6" sm="6">
                            <v-card-text class="res2 font-weight-black">{{deal.email}}</v-card-text>
                        </v-col>
                    
                    </v-row>
                    <v-divider></v-divider>
                    <v-row no-gutters>
                        <v-col cols="12" lg="3" md="6" sm="6">
                            <v-subheader class="res1">Address</v-subheader>
                        </v-col>
                        <v-col cols="12" lg="9" md="6" sm="6">
                            <v-card-text class="res2 font-weight-black">{{deal.address}}</v-card-text>
                        </v-col>
                    
                    </v-row>
                    <v-divider></v-divider>
                    <v-row no-gutters>
                        <v-col cols="12" lg="3" md="6" sm="6">
                            <v-subheader class="res1">Note</v-subheader>
                        </v-col>
                        <v-col cols="12" lg="9" md="6" sm="6">
                            <v-card-text class="res2 font-weight-black">{{deal.note}}</v-card-text>
                        </v-col>
                    </v-row>
                    <v-divider></v-divider>
                    <v-row no-gutters>
                        <v-col cols="12" lg="3" md="6" sm="6">
                            <v-subheader class="res1">Description</v-subheader>
                        </v-col>
                        <v-col cols="12" lg="9" md="6" sm="6">
                            <v-card-text class="res2 font-weight-black">{{deal.description}}</v-card-text>
                        </v-col>
                    
                    </v-row>
                    <v-divider></v-divider>
                </v-card>
                <v-toolbar-title style="color:#B1AFCE" class="font-weight-black mt-5 mb-n4">Items</v-toolbar-title>
                <v-toolbar flat class="mt-12" height="30">
                    
                    <v-text-field
                        placeholder="search for items..."
                        prepend-inner-icon="mdi-magnify"
                        color="#B1AFCE"
                    ></v-text-field>
    
                    <v-spacer></v-spacer>
                    <!-- <v-sub-header class="res1">Upload CSV</v-sub-header> -->
                    <v-dialog v-model="dialog_file" persistent max-width="500" overlay-color="white">
                        <template v-slot:activator="{ on }">
                        <v-btn large v-on="on" class="mr-4 d-none d-sm-none d-md-block">
                            
                            <v-icon color="red">mdi-file-document-box-plus</v-icon>
                            <span>Upload CSV</span>  
                        </v-btn>
                        
                        </template>
                        <v-card  class="pa-7">
                            <v-row no-gutters >
                                <v-col cols="12" sm="12" md="5">
                                    <v-subheader class="text-center res2 font-weight-bold">Upload Items(CSV)</v-subheader>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="7">
                                    <v-file-input
                                        outlined dense style=" font-weight:bold"
                                        prepend-outer-icon="mdi-camera"
                                        color="#B1AFCE"
                                    ></v-file-input>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>

                                </v-col>
                                <v-card-action>
                                <!-- <v-btn color="#B1AFCE" dark @click="dialog1 = false">No</v-btn> -->
                                
                                <v-btn color="#080E53" dark class="float-right" @click="dialog_file = false">Submit</v-btn>
                            </v-card-action>
                            </v-row>
                            
                        </v-card>
                    </v-dialog>
                    
                     <v-btn large class="white--text d-none d-sm-none d-md-flex" to='/item/addItem' style="background-color:#B1AFCE">
                        <v-icon>mdi-plus</v-icon> <span > Add Items</span>
                    </v-btn>
                </v-toolbar>
                <!-- toolbar for medium and down -->
                <v-toolbar flat class="mt-12 d-sm-block d-md-none" height="30">
    
                   
                    <!-- <v-sub-header class="res1">Upload CSV</v-sub-header> -->
                    <v-dialog v-model="dialog_file" persistent max-width="500" overlay-color="white">
                        <template v-slot:activator="{ on }">
                        <v-btn large v-on="on" class="ma-2">
                            
                            <v-icon color="red">mdi-file-document-box-plus</v-icon>
                            <span>Upload CSV</span>  
                        </v-btn>
                        
                        </template>
                        <v-card  class="pa-7">
                            <v-row no-gutters >
                                <v-col cols="12" sm="12" md="5">
                                    <v-subheader class="text-center res2 font-weight-bold">Upload Items(CSV)</v-subheader>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="7">
                                    <v-file-input
                                        outlined dense style=" font-weight:bold"
                                        prepend-outer-icon="mdi-camera"
                                        v-model="itemPicture"
                                        color="#B1AFCE"
                                    ></v-file-input>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>

                                </v-col>
                                <v-card-action>
                                <!-- <v-btn color="#B1AFCE" dark @click="dialog1 = false">No</v-btn> -->
                                
                                <v-btn color="#080E53" dark class="float-right" @click="dialog_file = false">Submit</v-btn>
                            </v-card-action>
                            </v-row>
                            
                        </v-card>
                    </v-dialog>
                     <v-spacer></v-spacer>
                    <v-btn large class="white--text" to='/item/addItem' style="background-color:#B1AFCE">
                        <v-icon>mdi-plus</v-icon> <span > Add Items</span>
                    </v-btn>
                </v-toolbar>
                

            </v-container>
        <v-container>
            <v-expansion-panels class="mr-7">
                <v-expansion-panel v-for="(item,i) in items" :key="i">
                    <v-expansion-panel-header>
                        
                        <v-row justify="space-around">
                            <v-col cols="12" lg="2" md="3" sm="6" class="mt-n4">
                                <v-subheader class="res1">Name</v-subheader>
                                <v-card-text class="mt-n4 res2 font-weight-black">{{item.name}}</v-card-text>
                            </v-col>
                            <v-col cols="12" lg="2" md="3" sm="6" class="mt-n4">
                                <v-subheader class="res1">Part Number</v-subheader>
                                <v-card-text class="mt-n4 res2 font-weight-black">{{item.partNumber}}</v-card-text>
                            </v-col>
                            <v-col cols="12" lg="2" md="4" sm="6" class="mt-n4">
                                <v-subheader class="res1">Condition</v-subheader>
                                <v-card-text class="mt-n4 res2 font-weight-black">{{item.condition}}</v-card-text>
                            </v-col>
                            <v-col cols="12" lg="2" md="4" sm="6" class="mt-n4">
                                <v-subheader class="res1">Dealer Price</v-subheader>
                                <v-card-text class="mt-n4 res2 font-weight-black">{{item.dealerPrice}}</v-card-text>
                            </v-col>
                            <v-col cols="12" lg="2" md="4" sm="6" class="mt-n4">
                                <v-subheader class="res1">Retail Price</v-subheader>
                                <v-card-text class="mt-n4 res2 font-weight-black">{{item.retailPrice}}</v-card-text>
                            </v-col>
                            <v-col cols="12" lg="2" md="4" sm="6" class="mt-n2">
                                <v-btn icon class="mr-2 mt-7 d-none d-sm-none d-md-none d-lg-inline">
                                    <v-icon color="red">mdi-pencil</v-icon>
                                </v-btn>
                                <v-dialog v-model="dialog" persistent max-width="400">
                                    <template v-slot:activator="{ on }">
                                    <v-btn icon class="mr-2 mt-7 d-none d-sm-none d-md-none d-lg-inline" v-on="on">
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
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <v-row>
                            <v-col cols="12" lg="6" md="6" sm="12">
                        <v-row>
                            <v-col cols="12" lg="8" md="8" sm="6" class="mt-n4">
                                <v-subheader class="res1">Brand</v-subheader>
                                <v-card-text class="mt-n4 res2 font-weight-black">{{item.brand}}</v-card-text>
                            </v-col>
                            <v-col cols="12" lg="4" md="4" sm="6" class="mt-n4" justify="center">
                                <v-subheader class="res1">Spec</v-subheader>
                                <v-card-text class="mt-n4 res2 font-weight-black">{{item.spec}}</v-card-text>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" lg="8" md="12" sm="12" class="mt-n4">
                                <v-subheader class="res1">Category</v-subheader>
                                <v-card-text class="mt-n4 res2 font-weight-black">{{item.category}}</v-card-text>
                            </v-col>
                             <v-col cols="12" lg="4" md="12" sm="12" class="mt-n2 d-none d-sm-none d-md-block d-lg-none float-right" >
                                <v-btn icon class="mr-2 mt-7">
                                    <v-icon color="red">mdi-pencil</v-icon>
                                </v-btn>
                                <v-dialog v-model="dialog2" persistent max-width="300" hide-overlay overlay-color="white">
                                    <template v-slot:activator="{ on }">
                                    <v-btn icon class="mr-2 mt-7" v-on="on">
                                        <v-icon color="red">mdi-delete</v-icon>
                                    </v-btn>
                                    </template>
                                    <v-card  class="pa-7">
                                        <v-card-text class="font-weight-black text-center">Are you sure you want to delete fuel pump?</v-card-text>
                                        <v-card-action>
                                            <v-btn color="grey" dark @click="dialog2 = false">No</v-btn>
                                            
                                            <v-btn color="grey" dark class="float-right" @click="dialog2 = false">Yes</v-btn>
                                        </v-card-action>
                                    </v-card>
                                </v-dialog>
                                
                            </v-col>
                        </v-row>
                        </v-col>
                        <v-col cols="12" lg="6" md="6" sm="12">
                            <!-- :class="{'mt-n12': $vuetify.breakpoint.smAndDown} -->
                            <v-img src='/cab.jpg'  class="mx-auto mt-5" max-height="150" max-width='200'></v-img>
                            <div class="d-inline d-sm-inline d-md-none d-lg-none float-right">
                                <v-btn icon class="mr-2 mt-7">
                                    <v-icon color="red">mdi-pencil</v-icon>
                                </v-btn>
                                <v-dialog v-model="dialog3" persistent max-width="300" hide-overlay overlay-color="white">
                                    <template v-slot:activator="{ on }">
                                    <v-btn icon class="mr-2 mt-7" v-on="on">
                                        <v-icon color="red">mdi-delete</v-icon>
                                    </v-btn>
                                    </template>
                                    <v-card  class="pa-7">
                                        <v-card-text class="font-weight-black text-center">Are you sure you want to delete fuel pump?</v-card-text>
                                        <v-card-action>
                                            <v-btn color="grey" dark @click="dialog3 = false">No</v-btn>
                                            
                                            <v-btn color="grey" dark class="float-right" @click="dialog3 = false">Yes</v-btn>
                                        </v-card-action>
                                    </v-card>
                                </v-dialog>
                            </div>
                            
                        </v-col>
                        </v-row>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
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
    data(){
        return{
            dialog1:false,
            dialog:false,
            dialog2:false,
            dialog3:false,
            dialog_file:false,
        
        }
    },
    computed:{
    deal(){
    return this.$store.state.dealers.dealer;
    },
    items(){
    return this.$store.state.item.itemByDealer;
    }
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