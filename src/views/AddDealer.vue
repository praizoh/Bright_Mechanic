<template>
<div>
    <Dashboard/>
    <v-container>
        
        <v-toolbar color="white" class="mb-0" height="30" flat>
            <v-toolbar-title class="res1 font-weight-black">
                Dealers/ Add Dealer
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
        <v-toolbar flat class="mt-3" height="30">
                    <v-spacer></v-spacer>
                    <!-- <v-btn large class="white--text" to='/item/addItem' style="background-color:#B1AFCE">
                        <v-icon>mdi-plus</v-icon> <span > Add Items</span>
                    </v-btn> -->
                </v-toolbar>
        <v-container fill-width>
            <v-card style="width:80%" class="mt-n5" flat>
                <!-- <div > -->
                    <v-form ref="form">
                        <v-row no-gutters>
                            <v-col cols="12" sm="12" md="3">
                                <v-subheader class="text-center ml-12 res1">Company Name</v-subheader>
                            </v-col>
                            <v-col cols="12" xs="12" sm="12" md="8">
                                <!-- <h4 class="mt-3 res2" >Benson Car Parts</h4> -->
                                <v-text-field solo flat class="pt-1 pl-0 ml-0" dense name="dealersName" required v-model="dealerName" type="text" style=" font-size:20px; font-weight:bold" :rules="inputRules"  placeholder="Benson Car Parts" readonly="true" color="#B1AFCE"> </v-text-field>
                            </v-col>
                        </v-row>
                        <v-row no-gutters>
                            <v-col cols="12" sm="12" md="3" >
                                <v-subheader class="text-center ml-12 res1">Alias</v-subheader>
                            </v-col>
                            <v-col cols="12" sm="12" md="9">
                                <v-text-field outlined dense name="alias" color="#B1AFCE" required v-model="alias" type="text" style=" font-weight:bold" :rules="inputRules"> </v-text-field>
                            </v-col>
                        </v-row>
                        <v-row no-gutters>
                            <v-col cols="12" sm="12" md="3" >
                                <v-subheader class="text-center ml-12 res1">Phone Number</v-subheader>
                            </v-col>
                            <v-col cols="12" sm="12" md="9">
                                <v-text-field color="#B1AFCE" outlined dense name="phoneNumber" required v-model="phoneNumber"  type="text" style="; font-weight:bold" :rules="inputRules"> </v-text-field>
                            </v-col>
                        </v-row>
                        <v-row no-gutters>
                            <v-col cols="12" sm="12" md="3" >
                                <v-subheader class="text-center ml-12 res1">Email</v-subheader>
                            </v-col>
                            <v-col cols="12" sm="12" md="9">
                                <v-text-field outlined dense color="#B1AFCE" name="email" required v-model="email" :rules="inputRules"  type="text" style=" font-weight:bold"> </v-text-field>
                            </v-col>
                        </v-row>
                        <v-row no-gutters>
                            <v-col cols="12" sm="12" md="3" >
                                <v-subheader class="text-center ml-12 res1">Address</v-subheader>
                            </v-col>
                            <v-col cols="12" sm="12" md="9">
                                <v-textarea outlined color="#B1AFCE" dense name="address" required v-model="address" :rules="inputRules"  type="text" style="font-weight:bold"> </v-textarea>
                            </v-col>
                        </v-row>
                        <v-row no-gutters>
                            <v-col cols="12" sm="12" md="3" >
                                <v-subheader class="text-center res1 ml-12">Note</v-subheader>
                            </v-col>
                            <v-col cols="12" sm="12" md="9">
                                <v-textarea outlined color="#B1AFCE" dense name="note" required v-model="note"  :rules="inputRules" type="text" style="font-weight:bold" value=""> </v-textarea>
                            </v-col>
                        </v-row>
                        <v-row no-gutters>
                            <v-col cols="12" sm="12" md="3" >
                                <v-subheader class="text-center ml-12 res1">Description</v-subheader>
                            </v-col>
                            <v-col cols="12" sm="12" md="9">
                                <v-textarea outlined dense color="#B1AFCE" name="description" required v-model="description" :rules="inputRules"  type="text" style="font-weight:bold"> </v-textarea>
                            </v-col>
                        </v-row>
                        <v-row no-gutters>
                            <v-col cols="12" sm="12" md="3" >
                                <v-subheader class="text-center res1 ml-12">Company Image</v-subheader>
                            </v-col>
                            <v-col cols="12" sm="12" md="9">
                                
                                <v-file-input
                                    accept='image/*'
                                    outlined=""
                                    label="Upload Picture" 
                                    dense 
                                    style=" font-weight:bold"
                                    
                                    color="#B1AFCE"
                                    @change="onFileChange($event)"
                                ></v-file-input>
                            </v-col>
                        </v-row>
                        
                        <v-row class="">
                            
                            <v-col cols="12" sm="12" md="12" class="mt-n6">
                                <v-card-text class="text-right">
                                 <v-btn large class="white--text " color="#080838" @click="submit()">Submit</v-btn>
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
            dealerName:'Benson Car Parts',
            alias:"",
            phoneNumber:"",
            email:"",
            address:"",
            note:"",
            description:"",
            image:"",
            domain:"test/test",
            inputRules: [v => !!v || 'Fill this field']
            // ,
        //   (v) => v && v.length <= 3 || 'Field must be less than 3 characters'
        }
     
    },
    methods:{
        onFileChange(e){
            this.image=e;
            console.log(this.image)
        },
        submit(){
            // if(this.$refs.form.validate()){
            {
              //  console.log(this.itemName)
                alert('submitted')
                let payload={}
                payload.dealer={
                    name:this.dealerName,
                    alias:this.alias,
                    phonePri:this.phoneNumber,
                    email:this.email,
                    address:this.address,
                    note:this.note,
                    description:this.description,
                    imgUr:'pics.jpg',
                    domain:this.domain
                }
                console.log(payload)
                this.$store.dispatch('postDealers', payload)
                .then((succes)=>{
                    this.dealerName=""
                    this.alias=""
                    this.phoneNumber=""
                    this.email=""
                    this.address=""
                    this.note=""
                    this.description=""
                    this.image=""
                })
                .catch((error)=>{
                    console.log(error)
                    alert(error)
                })
            }
            // else{
            //     alert('no')
            // }
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
