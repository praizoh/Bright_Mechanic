<template>
<nav>
  <v-navigation-drawer
    v-model="drawer"
    app
    color="#080E53"
    :expand-on-hover="$vuetify.breakpoint.smAndDown"
    permanent
    floating
  >

  <v-layout column align-center>
    <v-flex class="mt-12">
      <div class="mt-12"></div>
    </v-flex>
  </v-layout>
  <v-list class="mt-12 ml-8" height="70">
    <v-list-item  v-for="link in links" :key="link.text" router :to="link.route">
      <v-list-item-icon>
        <font-awesome-icon color="white" :icon="link.icon" />
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title class='font-regular white--text' >
          {{link.text}}
          <!-- v-if="loggedUser.userGroups[0]=='role-domain-admin'" -->
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item style="margin-top:40vh">
      <v-list-item-icon>
        <font-awesome-icon color="white" icon="power-off" />
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
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    
  },
  data: () => ({
    
    drawer: null,
      links:[
                { text: 'Items',  route:'/item', icon:'tools' },
                { text: 'Dealers',  route: '/dealers', icon:'people-carry' },
                { text: 'Profile',  route:'/profile', icon:'user' },
                { text: 'Manage Users',  route:'/manageUsers', icon:'user-cog' },
                
            ],
  }),
  computed: mapState([
    'loggedUser'
  ])
};
</script>
<style scoped>
#item{
  background-color:white !important;
  min-height:100vh;
}
.v-list .v-list-item--active{
  
  border-right: 5px #B1AFCE solid;
  background: #080E53;
  box-shadow: 0px 4px 17px #00053B;
}
</style>
