<template>
<div>
    <Dashboard/>
    <v-container>
        
        <v-toolbar color="white" class="mb-0" height="30" flat>
            <v-subheader class="res1 font-weight-black">
                Dealers/ Dealers Info/ Edit Dealer Info
            </v-subheader>
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
        
        <v-container fill-width>
            
            <v-form class="mt-5 px-3" ref="form">
                <v-row no-gutters>
                    <v-col cols="12" sm="12" md="3" >
                        <v-subheader class="text-center ml-12 res1 font-weight-black">Company Name</v-subheader>
                    </v-col>
                    <v-col cols="12" sm="12" md="9">
                         <v-text-field outlined dense name="companyName" required v-model="companyName" type="text" style="width:70%" :rules="inputRules" color="#B1AFCE"> </v-text-field>
                    </v-col>
                </v-row>
                 <v-row no-gutters>
                    <v-col cols="12" sm="12" md="3" >
                        <v-subheader class="text-center res1 font-weight-black ml-12">Alis</v-subheader>
                    </v-col>
                    <v-col cols="12" sm="12" md="9">
                         <v-text-field outlined dense name="alis" required v-model="alis" type="text" style="width:70%" :rules="inputRules" color="#B1AFCE"> </v-text-field>
                    </v-col>
                </v-row>
                <v-row no-gutters>
                    <v-col cols="12" sm="12" md="3" >
                        <v-subheader class="text-center res1 font-weight-black ml-12">Phone Number</v-subheader>
                    </v-col>
                    <v-col cols="12" sm="12" md="9">
                         <v-text-field outlined dense name="phoneNumber" required v-model="phoneNumber" type="text" style="width:70%" :rules="inputRules" color="#B1AFCE"> </v-text-field>
                    </v-col>
                </v-row>
                <v-row no-gutters>
                    <v-col cols="12" sm="12" md="3" >
                        <v-subheader class="text-center res1 font-weight-black ml-12">Email</v-subheader>
                    </v-col>
                    <v-col cols="12" sm="12" md="9">
                         <v-text-field outlined dense name="email" required v-model="email"  type="text" style="width:70%" :rules="inputRules " color="#B1AFCE"> </v-text-field>
                    </v-col>
                </v-row>
                <v-row no-gutters>
                    <v-col cols="12" sm="12" md="3" >
                        <v-subheader class="text-center res1 font-weight-black ml-12">Address</v-subheader>
                    </v-col>
                    <v-col cols="12" sm="12" md="9">
                         <v-text-field outlined dense name="address" required v-model="address" :rules="inputRules"  color="#B1AFCE" type="text" style="width:70%"> </v-text-field>
                    </v-col>
                </v-row>
                <v-row no-gutters>
                    <v-col cols="12" sm="12" md="3" >
                        <v-subheader class="text-center res1 font-weight-black ml-12">Note</v-subheader>
                    </v-col>
                    <v-col cols="12" sm="12" md="9">
                         <v-text-field outlined dense name="note" required v-model="note" :rules="inputRules"  type="text" style="width:80%" color="#B1AFCE"> </v-text-field>
                    </v-col>
                </v-row>
                <v-row no-gutters>
                    <v-col cols="12" sm="12" md="3" >
                        <v-subheader class="text-center res1 font-weight-black ml-12">Description</v-subheader>
                    </v-col>
                    <v-col cols="12" sm="12" md="9">
                         <v-text-field outlined dense name="description" required v-model="description"  type="text" style="width:80%" color="#B1AFCE"> </v-text-field>
                    </v-col>
                </v-row> 
                <v-row>
                    <v-col cols="12" sm="12" md="3" ></v-col>
                    <v-col cols="12" sm="12" md="7">
                        
                        <v-btn large class="white--text" color="#080838" @click="submit">Save</v-btn>
                    
                        <v-btn large class="white--text float-right mr-n5" color="#080838" @click="submit">Cancel</v-btn>
                        
                        
                    </v-col>
                   
                </v-row>
            </v-form>
            
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
            itemName:"",
            partNumber:"",
            condition:"",
            brand:"",
            dealerPrice:"",
            retailPrice:"",
            category:"",
            spec:"",
            itemPicture:[],
            inputRules: [v => !!v || 'Fill this field']
            // ,
        //   (v) => v && v.length <= 3 || 'Field must be less than 3 characters'
        }
     
    },
    methods:{
        save(){
            if(this.$refs.form.validate()){
                //console.log(this.itemName)
                alert('submitted')
            }
        },
        cancel(){
            alert('cancelled')
        }
    }
    
}
</script>

<style scoped>
.res1{
font-family: Raleway;

color: #B1AFCE
}

</style>
