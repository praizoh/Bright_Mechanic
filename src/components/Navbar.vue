<template>
<div>
   <nav>
       <v-app-bar app height='60px' flat>
          <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
           <v-autocomplete
              label="Search for lits..."
              height="10"
              :items="lits"
              solo
              dense flat
              class="mt-7 ml-3"
              prepend-inner-icon="mdi-magnify" background-color="#f5f3fc"
              style="width:60%"
              
            ></v-autocomplete>
         
         
         
         <v-spacer></v-spacer>
          

            <v-btn text>
            <v-badge color="red" bottom overlap class="mr-10 ml-10">
              <template v-slot:badge>0</template>
              <v-icon>mdi-bell</v-icon>
            </v-badge>
            </v-btn>
            
            <v-avatar
                  size="30px"
                  class="mr-10 ml-2"
                >
                  <img
                    alt="Avatar"
                    src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                  >
                  <v-menu bottom left class="m>
                    <template v-slot:activator="{ on }">
                      <v-btn small icon text v-on="on">
                        <v-icon 
                        right class="ml-0 pl-0"
                      >mdi-chevron-down</v-icon>
                      </v-btn>    
                    </template>
                    <v-list>
                    <v-list-item
                      v-for="(item, i) in menus"
                      :key="i"
                    
                    >
                      <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                    </v-list>
                  </v-menu>
                  
                </v-avatar>
    </v-app-bar>

      <v-navigation-drawer
      v-model="drawer"
      app
       width="180"
      style="background-color:white"
    >
    

     <v-layout column align-center>
                <v-flex class="mt-3">
                  <div class="mt-3">
                      <v-img src="../assets/crolit.png"></v-img>
                  </div>
                </v-flex>
            </v-layout>
         <v-list dense >
            <v-list-item  v-for="link in links" :key="link.text" router :to="link.route">
                <v-list-item-content>
                  <v-list-item-title class='text-center font-regular' >
                     {{link.text}}
                  </v-list-item-title>
                </v-list-item-content>

                
            </v-list-item>
            </v-list>
    </v-navigation-drawer>
  </nav>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        drawer: null,
      links:[
                { text: 'Dashboard',  route:'/' },
                { text: 'Crolit',  route: '/crolit' },
                { text: 'Attend Lit',  route:'/attendLit' },
                { text: 'Wallet',  route:'/wallet' },
                { text: 'Venue',  route:'/venue' },
                { text: 'Volunteer',  route:'/volunteer' },
            ],
            lits:[
              'Nigeria Economic Summit',
              'Tech Summit',
              'Food Fiesta',
              'Song Works Wonders',
              'Kids Science FunFair',
              'Agriculture and IoT',
              'Africa Code Week'
            ],
            menus:[
              {title:"Profile"},
              {title: "Logout"}
            ]
      }
    
  },
  created () {
      this.$vuetify.theme.light = true
    },
  }
</script>
<style scoped>
.v-textfield input{
  font-size: 0.8em !important;
}
#badge{
  height: 10px !important;
  width: 10px !important;
}
.v-list .v-list-item--active{
  
  border-right: 5px #2B12C3 solid;
}
#item{
  background-color:#f5f3fc !important;
  min-height:100vh;
}
</style>
     