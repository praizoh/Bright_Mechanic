<template>   
<div>
    <Dashboard/>
    <v-toolbar color="white" class="mb-0" height="30" flat app>
            <v-toolbar-title class="res1 ml-12 font-weight-black">
                Manage Users/ user profile 
            </v-toolbar-title>
        </v-toolbar>
        <v-toolbar flat>
            <v-toolbar-title style="color:#B1AFCE" class="font-weight-black">User Profile</v-toolbar-title>
            <v-spacer></v-spacer>
                <v-icon class="red--text">mdi-delete</v-icon> 
        </v-toolbar>
    <v-container class="mr-12 ml-n12">
         
        <v-row justify="center" class="mt-10">
            <v-row justify="center">
                <v-avatar size="120">
                    <img
                        src="/Ellipse.png"
                        alt="Profile Picture"
                    >
                </v-avatar>
            </v-row>
            
        </v-row>
        <v-row justify="center" class="ml-12 mr-n12 mt-n6">
            <div class="ml-12 mr-n12 mb-6">
                <v-btn icon class="ml-10" to="/manageUsers/editUser">
                    <v-icon color="#DADADA" >mdi-pencil</v-icon>
                </v-btn>
                
                <v-subheader class="mt-n3 ml-7 title1">Change Picture</v-subheader>  
            </div> 
        </v-row>
        <v-row justify="center" class="mt-n3">
            <v-col>
                <v-subheader class="float-right title1 font-weight-bold">Name</v-subheader>
            </v-col>
            <v-col class="mt-3">
                <span class="font-weight-bold" style="color:#292929">{{user.firstname}}&nbsp;{{user.lastname}}</span>
            </v-col>
        </v-row>
        <v-row justify="center" class="mt-n8">
            <v-col>
                <v-subheader class="float-right title1 font-weight-bold">Username</v-subheader>
            </v-col>
            <v-col class="mt-3">
                <span class="font-weight-bold">{{user.userid}}</span>
            </v-col>
        </v-row>
        <v-row justify="center" class="mt-n8">
            <v-col>
                <v-subheader class="float-right title1 font-weight-bold">Email</v-subheader>
            </v-col>
            <v-col class="mt-3">
                <span class="font-weight-bold">{{user.email}}</span>
            </v-col>
        </v-row>
        <v-row justify="center" class="mt-n8">
            <v-col>
                <v-subheader class="float-right title1 font-weight-bold">Phone 1</v-subheader>
            </v-col>
            <v-col class="mt-3">
                <span class="font-weight-bold" >{{user.phonePri}}</span>
            </v-col>
        </v-row>
        <v-row justify="center" class="mt-n8">
            <v-col>
                <v-subheader class="float-right title1 font-weight-bold">Phone 2</v-subheader>
            </v-col>
            <v-col class="mt-3">
                <span class="font-weight-bold" > {{user.phoneSec}} </span>
            </v-col>
        </v-row>
        <v-row justify="center" class="mt-n8">
            <v-col>
                <v-subheader class="float-right title1 font-weight-bold">Priviledge</v-subheader>
            </v-col>
            <v-col class="mt-3">
                <v-select solo style="width:60%"
                :items="user.userGroups"
                dense
                >
                
                </v-select>
            </v-col>
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
            dialog:false,
            roles:['Admin', 'Member']
        }
    },
    computed:{
        user(){
        return this.$store.state.user.user;
    },
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
