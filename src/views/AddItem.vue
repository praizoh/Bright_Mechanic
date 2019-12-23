<template>
<div>
    <Dashboard/>
    <v-container>
        
        <v-toolbar color="white" class="mb-0" height="30" flat>
            <v-toolbar-title class="res1 font-weight-black">
                Dealers/ Dealers Info/ Add Item
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
        
        <v-container fill-width>
            <v-card style="width:80%" flat>
                <!-- <div > -->
                    <v-form class="mt-5" ref="form">
                        <v-row no-gutters>
                            <v-col cols="12" sm="12" md="3">
                                <v-subheader class="text-center ml-12 res1">Dealers Name</v-subheader>
                            </v-col>
                            <v-col cols="12" xs="12" sm="12" md="8">
                                <!-- <h4 class="mt-3 res2" >Benson Car Parts</h4> -->
                                <v-text-field solo flat class="pt-1 pl-0 ml-0" dense name="dealersName" v-model="deal.name" required type="text" style=" font-size:20px; font-weight:bold" :rules="inputRules" readonly="true" color="#B1AFCE"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row no-gutters>
                            <v-col cols="12" sm="12" md="3" >
                                <v-subheader class="text-center ml-12 res1">Item Name</v-subheader>
                            </v-col>
                            <v-col cols="12" sm="12" md="9">
                                <v-text-field outlined dense name="itemName" color="#B1AFCE" required v-model="itemName" type="text" style=" font-weight:bold" :rules="inputRules"> </v-text-field>
                            </v-col>
                        </v-row>
                        <v-row no-gutters>
                            <v-col cols="12" sm="12" md="3" >
                                <v-subheader class="text-center ml-12 res1">Part Number</v-subheader>
                            </v-col>
                            <v-col cols="12" sm="12" md="9">
                                <v-text-field color="#B1AFCE" outlined dense name="partNumber" required v-model="partNumber"  type="text" style="; font-weight:bold" :rules="inputRules"> </v-text-field>
                            </v-col>
                        </v-row>
                        <v-row no-gutters>
                            <v-col cols="12" sm="12" md="3" >
                                <v-subheader class="text-center ml-12 res1">Condition</v-subheader>
                            </v-col>
                            <v-col cols="12" sm="12" md="9">
                                <v-text-field outlined dense color="#B1AFCE" name="condition" required v-model="condition" :rules="inputRules"  type="text" style=" font-weight:bold"> </v-text-field>
                            </v-col>
                        </v-row>
                        <v-row no-gutters>
                            <v-col cols="12" sm="12" md="3" >
                                <v-subheader class="text-center ml-12 res1">Brand</v-subheader>
                            </v-col>
                            <v-col cols="12" sm="12" md="9">
                                <v-text-field outlined color="#B1AFCE" dense name="brand" required v-model="brand" :rules="inputRules"  type="text" style="font-weight:bold"> </v-text-field>
                            </v-col>
                        </v-row>
                        <v-row no-gutters>
                            <v-col cols="12" sm="12" md="3" >
                                <v-subheader class="text-center res1 ml-12">Spec</v-subheader>
                            </v-col>
                            <v-col cols="12" sm="12" md="9">
                                <v-text-field outlined color="#B1AFCE" dense name="spec" required v-model="spec"  type="text" style="font-weight:bold"> </v-text-field>
                            </v-col>
                        </v-row>
                        <v-row no-gutters>
                            <v-col cols="12" sm="12" md="3" >
                                <v-subheader class="text-center ml-12 res1">Dealer Price</v-subheader>
                            </v-col>
                            <v-col cols="12" sm="12" md="9">
                                <v-text-field outlined dense color="#B1AFCE" name="dealerPrice" required v-model="dealerPrice" :rules="inputRules"  type="text" style="font-weight:bold"> </v-text-field>
                            </v-col>
                        </v-row>
                        <v-row no-gutters>
                            <v-col cols="12" sm="12" md="3" >
                                <v-subheader class="text-center ml-12 res1">Retail Price</v-subheader>
                            </v-col>
                            <v-col cols="12" sm="12" md="9">
                                <v-text-field outlined dense name="retailPrice" color="#B1AFCE" required v-model="retailPrice" :rules="inputRules"  type="text" style="font-weight:bold"> </v-text-field>
                            </v-col>
                        </v-row>
                        <v-row no-gutters>
                            <v-col cols="12" sm="12" md="3" >
                                <v-subheader class="text-center ml-12 res1">Description</v-subheader>
                            </v-col>
                            <v-col cols="12" sm="12" md="9">
                                <!-- <v-combobox dark background-color="#370000" :return-object= "false" multiple v-model="category1" :items="categories.result"  item-value ="category" item-text="category" label="Select a category or create a new one" filled  ></v-combobox> -->
                                <v-text-field outlined dense color="#B1AFCE" name="category" required v-model="description" :rules="inputRules"  type="text" style="font-weight:bold"> </v-text-field>
                            </v-col>
                        </v-row>
                          <v-row no-gutters>
                            <v-col cols="12" sm="12" md="3" >
                                <v-subheader class="text-center ml-12 res1">Category</v-subheader>
                            </v-col>
                            <v-col cols="12" sm="12" md="9">
                                <!-- <v-combobox dark background-color="#370000" :return-object= "false" multiple v-model="category" :items="categories.result"  item-value ="category" item-text="category" label="Select a category or create a new one" filled  ></v-combobox> -->
                                <!-- <v-text-field outlined dense color="#B1AFCE" name="category" required v-model="category" :rules="inputRules"  type="text" style="font-weight:bold"> </v-text-field> -->
                            </v-col>
                        </v-row>
                         <v-row no-gutters>
                            <v-col cols="12" sm="12" md="3" >
                                <v-subheader class="text-center res1 ml-12">Item Datasheet</v-subheader>
                            </v-col>
                            <v-col cols="12" sm="12" md="9">
                                
                                <v-file-input
                                    outlined dense style=" font-weight:bold"
                                    
                                    v-model="itemDatasheet"
                                    color="#B1AFCE"
                                ></v-file-input>
                                <!-- <div class="mt-n5 disable"><v-btn large class="white--text mt-n12 mb-12" color="#080838">Choose Datasheet</v-btn></div> -->
                            </v-col>
                        </v-row>
                        <v-row no-gutters>
                            <v-col cols="12" sm="12" md="3" >
                                <v-subheader class="text-center res1 ml-12">Item Picture</v-subheader>
                            </v-col>
                            <v-col cols="12" sm="12" md="9">
                                
                                <v-file-input
                                    outlined dense style=" font-weight:bold"
                                    prepend-outer-icon="mdi-camera"
                                    v-model="itemPicture"
                                    color="#B1AFCE"
                                    multiple
                                ></v-file-input>
                                <!-- <div class="mt-n5 disable"><v-btn large class="white--text mt-n12 mb-12" color="#080838">Choose Picture</v-btn></div> -->
                            </v-col>
                        </v-row>
                        
                        <v-row >
                            
                            <v-col cols="12" sm="12" md="12 pr-0">
                                <v-card-text class="text-right">
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
            dealersName:this.$store.state.dealers.dealer.name,
            itemName:"",
            partNumber:"",
            condition:"",
            brand:"",
            dealerPrice:"",
            retailPrice:"",
            category:"",
            spec:"",
            itemDatasheet:'file.pdf',
            itemPicture:[],
            description:'',
            dataSheetThumbnailUrl:'ford/datasheet/thumbnail.png',
            itemThumbnailUrl:"thumbnail.png",
            domain:"test/test",
            inputRules: [v => !!v || 'Fill this field']
            // ,
        //   (v) => v && v.length <= 3 || 'Field must be less than 3 characters'
        }
     
    },
    computed:{
        deal(){
            return this.$store.state.dealers.dealer;
        
    },
    },
    
    methods:{
        submit(){
            if(this.$refs.form.validate()){
              //  console.log(this.itemName)
                alert('submitted')
                let payload={
                    name:this.itemName,
                    partNumber:this.partNumber,
                    condition:this.condition,
                    dealerPrice:this.dealerPrice,
                    retailPrice:this.retailPrice,
                    spec:this.spec,
                    brand:this.brand,
                    description:this.description,
                    dataSheetUrl:this.itemDatasheet,
                    dataSheetThumbnailUrl:this.dataSheetThumbnailUrl,
                    itemThumbnailUrl:this.itemThumbnailUrl,
                    domain:this.domain,
                    dealer:{"name":this.dealersName},
	                imgUrls:[{"imgUrl":"/img1.png", "caption":"image1"},{"imgUrl":"/img2.png", "caption":"image2"}],
                    categories:this.category
                }
                console.log(payload)
                this.$store.dispatch('postItems', payload)
                .then((succes)=>{
                 alert('success')
                })
                .catch((error)=>{
                    console.log(error)
                    alert(error)
                })
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
