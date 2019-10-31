<template>
<nav>
  <v-navigation-drawer
    v-model="drawer"
    app
    color="#080838"
      
  >

  <v-layout column align-center>
    <v-flex class="mt-12">
      <div class="mt-12"></div>
    </v-flex>
  </v-layout>
  <v-list class="mt-12 ml-8" height="70">
    <v-list-item  v-for="link in links" :key="link.text" router :to="link.route">
      <v-list-item-icon>
        <v-icon color="white" v-text="link.icon"></v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title class='font-regular white--text' >
          {{link.text}}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item style="margin-top:250px">
      <v-list-item-icon>
        <v-icon color="white">mdi-heart</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title class='font-regular white--text'>Logout</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
 
</v-navigation-drawer>
</nav>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  },
  data: () => ({
    
    drawer: null,
      links:[
                { text: 'Items',  route:'/item', icon:'mdi-tools' },
                { text: 'Dealers',  route: '/dealers', icon:'mdi-account' },
                { text: 'Profile',  route:'/profile', icon:'mdi-account' },
                
            ],
  }),
};
</script>
<style scoped>
#item{
  background-color:white !important;
  min-height:100vh;
}
.v-list .v-list-item--active{
  
  border-right: 5px plum solid;
}
</style>
