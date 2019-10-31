<template>
<div class="attend">
     <!-- <Navbar/> -->
      <v-container>
       <v-row class="mr-12 ml-12 mt-n3 pr-12">
          <v-col
            cols="12"
            sm="3"
            md="4" class="mt-2">
            <v-card>
              <v-img
                class=""
                height="300px"
                src="/Rectangle.png"
              >
              </v-img>

              <div class="pa-3">
                <p class="litText mb-0">Bid (Starting Value:40, 000)</p>
                <v-text-field placeholder="bid a value" solo dense flat background-color="#f5f3fc" style="width:60%"> </v-text-field>
                <p class="litText mb-0 pb-0 mt-n3">Attendance Expected </p>
                <p class="colored mt-0 font-weight-bold">300</p>
                <p class="litText mb-0 pb-0 mt-n3">Registered Attendance </p>
                <p class="colored mt-0 font-weight-bold"> 250</p>
                <p class="litText mb-0 pb-0 mt-n3">Highest bid</p>
                <p class="colored mt-0 font-weight-bold">#60,000</p>
                 <p class="mt-10"></p>
                  
                  <v-btn  color="#2B12C3" tile class="pa-2  mr-4" width="90" to="/attendLitFree">
                    <v-icon color="white">mdi-account</v-icon>
                    <span class="white--text">Attend</span>
                  </v-btn>
                 
                  
                  <v-btn color="#2B12C3" tile class="pa-2 mr-4" width="90" to="/attendLitPaid">
                    <v-icon color="white">mdi-account</v-icon>
                    <span class="white--text">Share</span>
                  </v-btn>
                  
                
                  <v-btn text class="pa-2 " width="70">
                  <v-icon color="#2B12C3">mdi-heart</v-icon>
                  <span class="colored">Invite</span>
                </v-btn>
      
              </div>
            </v-card>


          </v-col>
          <v-col
            cols="12"
            sm="3"
            md="8"
            class=""
            >
            <h2 style="color:#5C5B5A; font-size:24px;">Annual Science Festival 2020</h2>
            <p class="text-justify" style="color:#817D7C font-style: normal; font-weight: normal; font-size: 18px;">Annual Science Festival 2020 is an Annual event geared towards technology awareness and steering young minds to embrace the development of technology.
            </p>
            <v-row class="mt-n4">
          <v-col
            cols="12"
            sm="3"
            md="4">
             <v-img
                class=""
                height="135px"
                width="151px"
                src="/Rectangle-47.png"
                >
              </v-img>
              <v-card-text class="bold-text">
              <h4>Miss Ada Lawson </h4>
              </v-card-text>
          </v-col>
          <v-col
            cols="12"
            sm="3"
            md="4">
             <v-img
                class=""
                height="135px"
                width="151px"
                src="/Rectangle-48.png"
                >
              </v-img>
              <v-card-text class="bold-text">
                <h4>Engr. Ford Lord</h4>
              </v-card-text>
          </v-col>
          <v-col
            cols="12"
            sm="3"
            md="4">
             <v-img
                class=""
                 height="135px"
                 width="151px"
                src="/Rectangle-49.png"
                >
              </v-img>
              <v-card-text class="bold-text">
              <h4>Dr. Adegbemiga Sogunle</h4>
              </v-card-text>
          </v-col>
        </v-row>

        <v-row class="mt-n5">
          <v-col
            cols="12"
            sm="3"
            md="1">
            <v-icon>mdi-calendar-range</v-icon>
          </v-col>
          <v-col
            cols="12"
            sm="3"
            md="1">
         <p style="color: #B11717;" class="font-weight-bold">8.00am</p>
          </v-col>
        </v-row>

        <!-- second -->
        <v-row class="mt-n9">
          <v-col
            cols="12"
            sm="3"
            md="1">
            <v-icon>mdi-alarm</v-icon>
          </v-col>
          <v-col
            cols="12"
            sm="3"
            md="3">
         <p style="color: #B11717;" class="font-weight-bold">Fri, 30 Jan. 2020.</p>
          </v-col>
        </v-row>
        

        <!-- third -->
        <v-row class="mt-n9">
          <v-col
            cols="12"
            sm="3"
            md="1">
            <v-icon>mdi-map-marker</v-icon>
          </v-col>
          <v-col
            cols="12"
            sm="3"
            md="6">
         <p style="color: #B11717;" class="font-weight-bold">Providence Tech Hub, Joyce B Road, Ring Road Ibadan.</p>
          </v-col>
        </v-row>
         </v-col>

       </v-row>

      </v-container>


</div>
    
</template>


<script>

export default {
    components: {
       
    },
    // data(){
    //   return{
    //     resourcePersons:[
    //       {flyerImage: "", hallname:"", hallAddress:"", hallCapacity:"", hallFacilities:"" image:"", name:"", time:"", data:"", location:""}
    //     ]
    //   }
    // }
    
}
</script>



<style scoped>
.colored{
  color:#2B12C3;
  font-style: normal;
  
  
  
}
.litText{
  color:#C4C4C4;
  font-style: normal;
  font-size:18px;
  
}
</style>
