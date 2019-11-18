<template>
<div>
    <Dashboard/>
     <v-container>
        <v-toolbar color="white" class="mb-0" height="30" flat>
            <v-toolbar-title class="res1 font-weight-black">
                Manage Users
            </v-toolbar-title>
            <v-spacer>
            </v-spacer>
        </v-toolbar>
        
        <v-toolbar flat>
            <v-toolbar-title style="color:#B1AFCE" class="font-weight-black">Users</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn large class="white--text" to='/manageUsers/addUser' style="background-color:#B1AFCE">
                <v-icon>mdi-plus</v-icon> <span > Add Users</span>
            </v-btn>
        </v-toolbar>
        <v-card class="mt-4" flat>
        <div v-for="user in users" :key="user.id" no-gutters>
        <v-row>
            <v-col cols="12" lg="10" md="6" sm="6" class="mt-n2">
        <v-card class="ml-12 mr-12" flat  tile to="manageUsers/manageUserProflie">
        
       <v-row justify="space-around">
           <v-col cols="12" lg="3" md="6" sm="6" class="mt-n4">
               <v-subheader class="res1 font-weight-bold">Name</v-subheader>
               <v-card-text class="mt-n4 res2 font-weight-black">{{user.name}}</v-card-text>
           </v-col>
           <v-col cols="12" lg="2" md="6" sm="6" class="mt-n4">
               <v-subheader class="res1 font-weight-bold">Username</v-subheader>
               <v-card-text class="mt-n4 res2 font-weight-black text-truncate" v-on="on">{{user.username}}</v-card-text>
                    
           </v-col>
           <v-col cols="12" lg="3" md="6" sm="6" class="mt-n4">
               <v-subheader class="res1 font-weight-bold">Password</v-subheader>
               <v-card-text class="mt-n4 res2 font-weight-black">{{user.password}}</v-card-text>
           </v-col>
           <v-col cols="12" lg="2" md="6" sm="6" class="mt-n4">
               <v-subheader class="res1 font-weight-bold">Priviledge</v-subheader>
               <v-card-text class="mt-n4 res2 font-weight-black">{{user.priviledge}}</v-card-text>
           </v-col>
           
       </v-row>
       
        </v-card>
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
        <v-col cols="12" lg="1" md="6" sm="6" class="mt-4">
               <v-btn icon class="mr-n7" to="/manageUsers/editUser">
                <v-icon color="red">mdi-pencil</v-icon>
              </v-btn>
               
           </v-col>
        

        </v-row>
        <v-divider></v-divider>
        </div>
        </v-card>
        
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
  }),
  computed:{
    dealers(){
    return this.$store.state.dealers;
    },
    users(){
    return this.$store.state.users;
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
</style>