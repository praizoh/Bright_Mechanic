<template>
  <v-app id="item">
    <!-- <Navbar/> -->
    <v-content>
      <router-view> </router-view>
    </v-content>
  </v-app>
</template>

<script>
//import Navbar from './components/Navbar';

export default {
  name: 'App',
  components: {
  //  Navbar,
   
  },
  data: () => ({
   
  }),
};
</script>
<style>
#item{
  background-color:white !important;
  min-height:100vh;
  font-family: Raleway;
}

</style>
