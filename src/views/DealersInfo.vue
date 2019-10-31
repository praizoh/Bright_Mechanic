<template>
    <div>
        <Dashboard/>
        <v-container>
            <v-toolbar color="white" class="mb-0" height="30" flat>
            <v-toolbar-title>
                Dealers/Dealer Info
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
           <v-btn icon class="mr-n12" to='/editDealerInfo'>
                <v-icon color="grey">mdi-pencil</v-icon>
                
            </v-btn>
            <v-subheader class="mt-10">Edit</v-subheader>
                <v-dialog v-model="dialog" persistent max-width="300" hide-overlay overlay-color="white">
                    <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on">
                        <v-icon color="red">mdi-delete</v-icon>
                    </v-btn>
                    </template>
                    <v-card  class="pa-7">
                        <v-card-text class="font-weight-black text-center">Are you sure you want to delete Benson Car Parts. All items record will be deleted too.</v-card-text>
                        <v-card-action>
                            <v-btn color="grey" dark @click="dialog = false">No</v-btn>
                            
                            <v-btn color="grey" dark class="float-right" @click="dialog = false">Yes</v-btn>
                        </v-card-action>
                    </v-card>
                </v-dialog>
            </v-toolbar>
            <v-container>
                <v-card  flat v-for="info in dealer" :key="info.companyName">
                    <v-row no-gutters>
                        <v-col cols="12" lg="3" md="6" sm="6">
                            <v-subheader>Company Name</v-subheader>
                        </v-col>
                        <v-col cols="12" lg="9" md="6" sm="6">
                            <v-card-text class="font-weight-black">{{info.companyName}}</v-card-text>
                        </v-col>
                    
                    </v-row>
                    <v-divider></v-divider>
                    <v-row no-gutters>
                        <v-col cols="12" lg="3" md="6" sm="6">
                            <v-subheader>Alis</v-subheader>
                        </v-col>
                        <v-col cols="12" lg="9" md="6" sm="6">
                            <v-card-text class="font-weight-black">{{info.alis}}</v-card-text>
                        </v-col>
                    </v-row>
                    <v-divider></v-divider>
                    <v-row no-gutters>
                        <v-col cols="12" lg="3" md="6" sm="6">
                            <v-subheader>Phone Number</v-subheader>
                        </v-col>
                        <v-col cols="12" lg="9" md="6" sm="6">
                            <v-card-text class="font-weight-black">{{info.phoneNumber}}</v-card-text>
                        </v-col>
                    
                    </v-row>
                    <v-divider></v-divider>
                    <v-row no-gutters>
                        <v-col cols="12" lg="3" md="6" sm="6">
                            <v-subheader>Email</v-subheader>
                        </v-col>
                        <v-col cols="12" lg="9" md="6" sm="6">
                            <v-card-text class="font-weight-black">{{info.email}}</v-card-text>
                        </v-col>
                    
                    </v-row>
                    <v-divider></v-divider>
                    <v-row no-gutters>
                        <v-col cols="12" lg="3" md="6" sm="6">
                            <v-subheader>Address</v-subheader>
                        </v-col>
                        <v-col cols="12" lg="9" md="6" sm="6">
                            <v-card-text class="font-weight-black">{{info.address}}</v-card-text>
                        </v-col>
                    
                    </v-row>
                    <v-divider></v-divider>
                    <v-row no-gutters>
                        <v-col cols="12" lg="3" md="6" sm="6">
                            <v-subheader>Note</v-subheader>
                        </v-col>
                        <v-col cols="12" lg="9" md="6" sm="6">
                            <v-card-text class="font-weight-black">{{info.note}}</v-card-text>
                        </v-col>
                    </v-row>
                    <v-divider></v-divider>
                    <v-row no-gutters>
                        <v-col cols="12" lg="3" md="6" sm="6">
                            <v-subheader>Description</v-subheader>
                        </v-col>
                        <v-col cols="12" lg="9" md="6" sm="6">
                            <v-card-text class="font-weight-black">{{info.description}}</v-card-text>
                        </v-col>
                    
                    </v-row>
                    <v-divider></v-divider>
                </v-card>

                <v-toolbar flat class="mt-12">
                    <v-toolbar-title>Items</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn large class="white--text grey" to='/addItem'>
                        <v-icon>mdi-plus</v-icon> <span> Add Items</span>
                    </v-btn>
                </v-toolbar>

            </v-container>
        <v-container>
            <v-expansion-panels class="mr-7">
                <v-expansion-panel v-for="(item,i) in items" :key="i">
                    <v-expansion-panel-header>
                        
                        <v-row justify="space-around">
                            <v-col cols="12" lg="2" md="6" sm="6" class="mt-n4">
                                <v-subheader>Name</v-subheader>
                                <v-card-text class="mt-n4 font-weight-black text-truncate">{{item.name}}</v-card-text>
                            </v-col>
                            <v-col cols="12" lg="2" md="6" sm="6" class="mt-n4">
                                <v-subheader>Part Number</v-subheader>
                                <v-card-text class="mt-n4 font-weight-black text-truncate">{{item.partNumber}}</v-card-text>
                            </v-col>
                            <v-col cols="12" lg="2" md="6" sm="6" class="mt-n4">
                                <v-subheader>Condition</v-subheader>
                                <v-card-text class="mt-n4 font-weight-black  text-truncate">{{item.condition}}</v-card-text>
                            </v-col>
                            <v-col cols="12" lg="2" md="6" sm="6" class="mt-n4">
                                <v-subheader>Dealer Price</v-subheader>
                                <v-card-text class="mt-n4 font-weight-black text-truncate">{{item.dealerPrice}}</v-card-text>
                            </v-col>
                            <v-col cols="12" lg="2" md="6" sm="6" class="mt-n4">
                                <v-subheader>Retail Price</v-subheader>
                                <v-card-text class="mt-n4 font-weight-black text-truncate">{{item.retailPrice}}</v-card-text>
                            </v-col>
                            <v-col cols="12" lg="1" md="6" sm="6" class="mt-n2">
                                <v-btn icon class="mr-2 mt-7">
                                    <v-icon color="red">mdi-pencil</v-icon>
                                </v-btn>
                                
                            </v-col>
                            <v-col cols="12" lg="1" md="6" sm="6" class="mt-n2">
                                
                                <v-dialog v-model="dialog" persistent max-width="300" hide-overlay overlay-color="white">
                                    <template v-slot:activator="{ on }">
                                    <v-btn icon class="mr-2 mt-7" v-on="on">
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
                            <v-col>
                        <v-row>
                            <v-col cols="12" lg="8" md="6" sm="6" class="mt-n4">
                                <v-subheader>Brand</v-subheader>
                                <v-card-text class="mt-n4 font-weight-black text-truncate">{{item.brand}}</v-card-text>
                            </v-col>
                            <v-col cols="12" lg="4" md="6" sm="6" class="mt-n4" justify="center">
                                <v-subheader>Spec</v-subheader>
                                <v-card-text class="mt-n4 font-weight-black text-truncate">{{item.spec}}</v-card-text>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" lg="6" md="6" sm="6" class="mt-n4">
                                <v-subheader>Category</v-subheader>
                                <v-card-text class="mt-n4 font-weight-black text-truncate">{{item.category}}</v-card-text>
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
            dialog:false,
            dealer:[
                {
                    companyName:'Benson Car Parts',
                    alis:'Uncle Benson Car Parts',
                    phoneNumber:'0812 300 4154  0812 300 4154',
                    email:'Bensoncars@hotmail.com',
                    address:'Shop 34, Computer Village, Ikeja, Lagos',
                    note:'You have to pre order tbefore he delivers goods, and he is a busy person',
                    description:'Specializes in Toyota car parts'
                }
            ],
            items:[
                {
                name:"Fuel Pump",
                partNumber:"1239064",
                condition:"New",
                dealerPrice:"#2890",
                retailPrice:"#3000",
                brand:"Toyota Corolla 2011",
                spec:"Teahy",
                category:"Mechanical part"
                },
                {
                name:"Toyota Bumper",
                partNumber:"1239064",
                condition:"Used",
                dealerPrice:"#12000",
                retailPrice:"#3000",
                brand:"Toyota Corolla 2011",
                spec:"Teahy",
                category:"Mechanical part"
                },
                {
                name:"Wind Shield",
                partNumber:"1239064",
                condition:"New",
                dealerPrice:"#50000",
                retailPrice:"#3000",
                brand:"Toyota Corolla 2011",
                spec:"Teahy",
                category:"Mechanical part"
                },
                {
                name:"Toyota Engine",
                partNumber:"1239064",
                condition:"Used",
                dealerPrice:"#100,500",
                retailPrice:"#3000",
                brand:"Toyota Corolla 2011",
                spec:"Teahy",
                category:"Mechanical part"
                },
                {
                name:"Silencer doubler",
                partNumber:"1239064",
                condition:"New",
                dealerPrice:"#2890",
                retailPrice:"#3000",
                brand:"Toyota Corolla 2011",
                spec:"Teahy",
                category:"Mechanical part"
                },
                {
                name:"Car Battery",
                partNumber:"1239064",
                condition:"New",
                dealerPrice:"#16,000",
                retailPrice:"#3000",
                brand:"Toyota Corolla 2011",
                spec:"Teahy",
                category:"Mechanical part"
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>