<template>
<div>
    <Dashboard/>
     <v-container>
        <v-toolbar color="white" class="mb-0" height="30" flat>
            <v-toolbar-title>
                Dealers
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
                    placeholder="search for dealers..."
                    prepend-inner-icon="mdi-magnify"
            ></v-text-field>
            </v-col>
            
            <v-col cols="12" md="4">
                <div class="float-md-right mx-sm-auto ml-8 mr-12">
                    <v-btn large class="white--text grey mt-4">
                         + Add Users
                    </v-btn>
                </div>
                
            </v-col>
        </v-row>
        <v-container class="mt-n4">
        <v-row v-for="user in users" :key="user.id">
            <v-col cols="12" lg="10" md="6" sm="6" class="mt-n2">
        <v-card hover class="ml-12 mr-12" flat  tile  to="/dealerInfo">
       <v-row justify="space-around">
           <v-col cols="12" lg="3" md="6" sm="6" class="mt-n4">
               <v-subheader>Name</v-subheader>
               <v-card-text class="mt-n4 font-weight-black">{{user.name}}</v-card-text>
           </v-col>
           <v-col cols="12" lg="2" md="6" sm="6" class="mt-n4">
               <v-subheader>Username</v-subheader>
               <v-card-text class="mt-n4 font-weight-black text-truncate" v-on="on">{{user.username}}</v-card-text>
                    
           </v-col>
           <v-col cols="12" lg="3" md="6" sm="6" class="mt-n4">
               <v-subheader>Password</v-subheader>
               <v-card-text class="mt-n4 font-weight-black">{{user.password}}</v-card-text>
           </v-col>
           <v-col cols="12" lg="2" md="6" sm="6" class="mt-n4">
               <v-subheader>Priviledge</v-subheader>
               <v-card-text class="mt-n4 font-weight-black">{{user.priviledge}}</v-card-text>
           </v-col>
           
       </v-row>
       <v-divider></v-divider>
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
               <v-btn icon class="mr-n7">
                <v-icon color="red">mdi-pencil</v-icon>
              </v-btn>
               
           </v-col>
        </v-row>
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