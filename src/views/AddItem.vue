<template>
<div>
    <Dashboard/>
    <v-container>
        
        <v-toolbar color="white" class="mb-0" height="30" flat>
            <v-subheader >
                Dealers/ Dealers Info/ Add Item
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
                    <v-col cols="12" xs="6" sm="6" md="2" >
                        <v-subheader class="text-center ml-12">Dealers Name</v-subheader>
                    </v-col>
                    <v-col cols="12" xs="6" sm="6" md="9">
                         <h4 class="mt-3">Benson Car Parts</h4>
                    </v-col>
                </v-row>
                <v-row no-gutters>
                    <v-col cols="12" sm="12" md="2" >
                        <v-subheader class="text-center ml-12">Item Name</v-subheader>
                    </v-col>
                    <v-col cols="12" sm="12" md="9">
                         <v-text-field outlined dense name="itemName" required v-model="itemName" type="text" style="width:70%" :rules="inputRules"> </v-text-field>
                    </v-col>
                </v-row>
                <v-row no-gutters>
                    <v-col cols="12" sm="12" md="2" >
                        <v-subheader class="text-center ml-12">Part Number</v-subheader>
                    </v-col>
                    <v-col cols="12" sm="12" md="9">
                         <v-text-field outlined dense name="partNumber" required v-model="partNumber"  type="text" style="width:70%" :rules="inputRules"> </v-text-field>
                    </v-col>
                </v-row>
                <v-row no-gutters>
                    <v-col cols="12" sm="12" md="2" >
                        <v-subheader class="text-center ml-12">Condition</v-subheader>
                    </v-col>
                    <v-col cols="12" sm="12" md="9">
                         <v-text-field outlined dense name="condition" required v-model="condition" :rules="inputRules"  type="text" style="width:70%"> </v-text-field>
                    </v-col>
                </v-row>
                <v-row no-gutters>
                    <v-col cols="12" sm="12" md="2" >
                        <v-subheader class="text-center ml-12">Brand</v-subheader>
                    </v-col>
                    <v-col cols="12" sm="12" md="9">
                         <v-text-field outlined dense name="brand" required v-model="brand" :rules="inputRules"  type="text" style="width:70%"> </v-text-field>
                    </v-col>
                </v-row>
                <v-row no-gutters>
                    <v-col cols="12" sm="12" md="2" >
                        <v-subheader class="text-center ml-12">Spec</v-subheader>
                    </v-col>
                    <v-col cols="12" sm="12" md="9">
                         <v-text-field outlined dense name="spec" required v-model="spec"  type="text" style="width:70%"> </v-text-field>
                    </v-col>
                </v-row>
                <v-row no-gutters>
                    <v-col cols="12" sm="12" md="2" >
                        <v-subheader class="text-center ml-12">Dealer Price</v-subheader>
                    </v-col>
                    <v-col cols="12" sm="12" md="9">
                         <v-text-field outlined dense name="dealerPrice" required v-model="dealerPrice" :rules="inputRules"  type="text" style="width:70%"> </v-text-field>
                    </v-col>
                </v-row>
                <v-row no-gutters>
                    <v-col cols="12" sm="12" md="2" >
                        <v-subheader class="text-center ml-12">Retail Price</v-subheader>
                    </v-col>
                    <v-col cols="12" sm="12" md="9">
                         <v-text-field outlined dense name="retailPrice" required v-model="retailPrice" :rules="inputRules"  type="text" style="width:70%"> </v-text-field>
                    </v-col>
                </v-row>
                <v-row no-gutters>
                    <v-col cols="12" sm="12" md="2" >
                        <v-subheader class="text-center ml-12">Category</v-subheader>
                    </v-col>
                    <v-col cols="12" sm="12" md="9">
                         <v-text-field outlined dense name="category" required v-model="category" :rules="inputRules"  type="text" style="width:70%"> </v-text-field>
                    </v-col>
                </v-row>
                <v-row no-gutters>
                    <v-col cols="12" sm="12" md="2" >
                        <v-subheader class="text-center ml-12">Item Picture</v-subheader>
                    </v-col>
                    <v-col cols="12" sm="12" md="9">
                        <v-file-input
                            outlined dense style="width:70%"
                            prepend-outer-icon="mdi-camera"
                            v-model="itemPicture"
                        ></v-file-input>
                    </v-col>
                </v-row>
                
                <v-row>
                    <v-col cols="12" sm="12" md="2" >
                        <!-- <v-subheader class="text-center ml-12">Item Picture</v-subheader> -->
                    </v-col>
                    <v-col cols="12" sm="12" md="2" class="mr-12">
                        
                        <v-btn style="margin-left:68vh" large class="white--text" color="#080838" @click="submit">Submit</v-btn>
                        
                        
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
.v-textfield input{
  font-size: 0.8em !important;
}

.v-list .v-list-item--active{
  
  border-right: 5px plum solid;
}

/* .v-text-field__details{ */
    /* top:-10 !important; */
    /* z-index:-1 !important; */
    /* margin-top: -30px !important;
    font-family: Roboto; */
    /* display: none; */
    
/* } */

</style>
