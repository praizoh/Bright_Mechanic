<template>
<div>
    <Dashboard/>
    <v-container>
        
        <v-toolbar color="white" class="mb-0" height="30" flat>
            <v-toolbar-title class="res1 font-weight-black">
                Manage Users/ Edit User
            </v-toolbar-title>
        </v-toolbar>
        
        <v-container fill-width>
            <v-card-text class="res1 font-weight-bold title-1" > Edit User</v-card-text>
            <v-card style="width:80%" flat>
                <!-- <div > -->
                    <v-form class="mt-5" ref="form">
                        <v-row no-gutters>
                            <v-col cols="12" sm="12" md="3" >
                                <v-subheader class="text-center ml-12 res1">UserName</v-subheader>
                            </v-col>
                            <v-col cols="12" sm="12" md="9">
                                <v-text-field res2 outlined dense name="itemName" color="#B1AFCE" required v-model="userName" type="text" style="font-weight:bold; width:50%" :rules="inputRules"> </v-text-field>
                            </v-col>
                        </v-row>
                        <v-row no-gutters>
                            <v-col cols="12" sm="12" md="3" >
                                <v-subheader class="text-center ml-12 res1">First Name</v-subheader>
                            </v-col>
                            <v-col cols="12" sm="12" md="9">
                                <v-text-field color="#B1AFCE" outlined dense name="firstName" required v-model="firstName"  type="text" style="width:50%;font-weight:bold" :rules="inputRules"> </v-text-field>
                            </v-col>
                        </v-row>
                        <v-row no-gutters>
                            <v-col cols="12" sm="12" md="3" >
                                <v-subheader class="text-center ml-12 res1">Last Name</v-subheader>
                            </v-col>
                            <v-col cols="12" sm="12" md="9">
                                <v-text-field outlined dense color="#B1AFCE" name="lastName" required v-model="lastName" :rules="inputRules"  type="text" style="width:50%; font-weight:bold"> </v-text-field>
                            </v-col>
                        </v-row>
                        <v-row no-gutters>
                            <v-col cols="12" sm="12" md="3" >
                                <v-subheader class="text-center ml-12 res1">Brand</v-subheader>
                            </v-col>
                            <v-col cols="12" sm="12" md="9">
                                <v-text-field outlined color="#B1AFCE" dense name="brand" required v-model="brand" :rules="inputRules"  type="text" style="width:50%;font-weight:bold"> </v-text-field>
                            </v-col>
                        </v-row>
                        <v-row no-gutters>
                            <v-col cols="12" sm="12" md="3" >
                                <v-subheader class="text-center res1 ml-12">Phone Number</v-subheader>
                            </v-col>
                            <v-col cols="12" sm="12" md="9">
                                <v-row style="width:50%">
                                    <v-col >
                                        <v-text-field outlined color="#B1AFCE" dense name="phone1" required v-model="phone1"  type="text" style="font-weight:bold"> </v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field outlined color="#B1AFCE" dense name="phone2" required v-model="phone2"  type="text" style="font-weight:bold"> </v-text-field>
                                    </v-col>
                                </v-row>
                                
                            </v-col>
                        </v-row>
                        <v-row no-gutters>
                            <v-col cols="12" sm="12" md="3" >
                                <v-subheader class="text-center ml-12 res1">Email</v-subheader>
                            </v-col>
                            <v-col cols="12" sm="12" md="9">
                                <v-text-field outlined dense color="#B1AFCE" name="email" required v-model="email" :rules="inputRules"  type="text" style="width:50%; font-weight:bold"> </v-text-field>
                            </v-col>
                        </v-row>
                        <v-row no-gutters>
                            <v-col cols="12" sm="12" md="3" >
                                <v-subheader class="text-center ml-12 res1">Password</v-subheader>
                            </v-col>
                            <v-col cols="12" sm="12" md="9">
                                <v-text-field outlined dense name="password" color="#B1AFCE" required v-model="password" :rules="inputRules"  type="text" style="width:50%;font-weight:bold"> </v-text-field>
                            </v-col>
                        </v-row>
                         <v-row no-gutters>
                            <v-col cols="12" sm="12" md="3" >
                                <v-subheader class="text-center ml-12 res1">Priviledge</v-subheader>
                            </v-col>
                            <v-col cols="12" sm="12" md="9">
                            <v-select
                            class="res2"
                            :items="role"
                            
                            outlined
                            color="#5c246b"
                            style="width:50%"
                        ></v-select>
                            </v-col>
                        </v-row>
                         
                        
                        <v-row >
                            <v-col cols="12" sm="12" md="3" >
                                <!-- <v-subheader class="text-center ml-12 res1">Password</v-subheader> -->
                            </v-col>
                            <v-col cols="12" sm="12" md="9">
                                <v-card-text class="text-left">
                                 <v-btn large class="white--text " color="#080838" @click="submit">Submit</v-btn>
                                </v-card-text>
                                
                            </v-col>
                        
                        </v-row>
                    </v-form>
             <!-- </div> -->
                
            </v-card>
            
            
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
     data() {
        return{
            dealersName:"Benson Car Parts",
            itemName:"",
            partNumber:"",
            condition:"",
            brand:"",
            dealerPrice:"",
            retailPrice:"",
            category:"",
            spec:"",
            itemPicture:[],
            inputRules: [v => !!v || 'Fill this field'],
            role:['member', 'admin']
            // ,
        //   (v) => v && v.length <= 3 || 'Field must be less than 3 characters'
        }
     
    },
    methods:{
        submit(){
            if(this.$refs.form.validate()){
              //  console.log(this.itemName)
                alert('submitted')
            }
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
width: 50%;
font-family: Raleway;
color: black;
}
.custom-placeholder-color input::placeholder{
    color:red !important;
}
.custom-label-color .v-label{
    color:red !important;
}
.custom-placeholder-color input, .custom-label-color input{
    color:red !important;
}
.disable{
    pointer-events: none
}

</style>
