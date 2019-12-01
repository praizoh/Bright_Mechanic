<template>   
<div>
    <Dashboard/>
    <v-toolbar color="white" class="mb-0" height="30" flat app>
            <v-toolbar-title class="res1 mt-12 ml-12 font-weight-black">
                Profile 
            </v-toolbar-title>
        </v-toolbar>
    <v-container class="mr-12 ml-n12">
         
        <v-row justify="center" class="mt-10">
            <v-row justify="center">
                <v-avatar size="120">
                    <img
                        src="/Ellipse.png"
                        alt="John"
                    >
                </v-avatar>
            </v-row>
        </v-row>
        <v-row justify="center" class="ml-12 mr-n12 mt-n6">
            <div class="ml-12 mr-n12 mb-6">
                <v-btn icon class="ml-10">
                    <v-icon color="#DADADA" >mdi-pencil</v-icon>
                </v-btn>
                
                <v-subheader class="mt-n3 ml-7 title1">Change Picture</v-subheader>  
            </div> 
        </v-row>
        <v-row justify="center" class="mt-n3">
            <v-col>
                <v-subheader class="float-right title1">Name</v-subheader>
            </v-col>
            <v-col class="mt-3">
                <span class="font-weight-bold" style="color:#292929">Richard Somto</span>
            </v-col>
        </v-row>
        <v-row justify="center" class="mt-n8">
            <v-col>
                <v-subheader class="float-right title1">Username</v-subheader>
            </v-col>
            <v-col class="mt-3">
                <span class="font-weight-bold">Somtomana</span>
            </v-col>
        </v-row>
        <v-row justify="center" class="mt-n8">
            <v-col>
                <v-subheader class="float-right title1">Email</v-subheader>
            </v-col>
            <v-col class="mt-3">
                <span class="font-weight-bold">Somtomana@gmail.com</span>
            </v-col>
        </v-row>
        <v-row justify="center" class="mt-n8">
            <v-col>
                <v-subheader class="float-right title1">Phone Number</v-subheader>
            </v-col>
            <v-col class="mt-3">
                <span class="font-weight-bold" >080102876562  0809765343</span>
            </v-col>
        </v-row>
        <v-row justify="center" class="mt-n8">
            <v-col>
                <v-subheader class="float-right title1">Role</v-subheader>
            </v-col>
            <v-col class="mt-3">
                <span class="font-weight-bold">Admin</span>
            </v-col>
        </v-row>
        
        <v-row align="center" justify="center" class="mt-10">
             <v-dialog v-model="dialog" persistent max-width="500" max-height="600" hide-overlay overlay-color="white">
                <template v-slot:activator="{ on }">
                <v-btn Large white--text width="180" height="50" color="#B1AFCE" dark v-on="on">Reset Password</v-btn>
                </template>
                <v-card  class="pa-7">
                    <v-row no-gutters justify="center">
                        <v-col cols="12" sm="12" md="6">
                            <v-subheader class="text-center ml-12 res2 font-weight-bold">Current Password</v-subheader>
                        </v-col>
                        <v-col cols="12" xs="12" sm="12" md="6">
                            <!-- <h4 class="mt-3 res2" >Benson Car Parts</h4> -->
                            <v-text-field outlined dense name="itemName" color="#B1AFCE" required v-model="itemName" type="text" style=" font-weight:bold" :rules="inputRules"> </v-text-field>
                        </v-col>
                    </v-row>
                    <v-row no-gutters>
                        <v-col cols="12" sm="12" md="6">
                            <v-subheader class="text-center ml-12 res2 font-weight-bold">New Password</v-subheader>
                        </v-col>
                        <v-col cols="12" xs="12" sm="12" md="6">
                            <!-- <h4 class="mt-3 res2" >Benson Car Parts</h4> -->
                            <v-text-field outlined dense name="itemName" color="#B1AFCE" required v-model="itemName" type="text" style=" font-weight:bold" :rules="inputRules"> </v-text-field>
                        </v-col>
                    </v-row>
                    <v-row no-gutters>
                        <v-col cols="12" sm="12" md="6">
                            <v-subheader class="text-center ml-12 res2 font-weight-bold">Confirm Password</v-subheader>
                        </v-col>
                        <v-col cols="12" xs="12" sm="12" md="6">
                            <!-- <h4 class="mt-3 res2" >Benson Car Parts</h4> -->
                            <v-text-field outlined dense name="itemName" color="#B1AFCE" required v-model="itemName" type="text" style=" font-weight:bold" :rules="inputRules"> </v-text-field>
                        </v-col>
                    </v-row>
                    <!-- <v-card-action> -->
                        <v-btn color="#B1AFCE" dark class="float-right mt-n2 mb-2" @click="dialog = false">Submit</v-btn>
                    <!-- </v-card-action> -->
                </v-card>
            </v-dialog>  
        </v-row>
       
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
            dialog:false
        }
    }
    
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
span{
    color:#292929 !important;
}
.title1{
    color:#B1AFCE
}
</style>
