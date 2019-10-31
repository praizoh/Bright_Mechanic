<template>   
<div>
    <Dashboard/>
    <v-container>
        <div class="ml-7">Profile</div>
        <v-row justify="center" class="mt-12">
            <v-row justify="center">
                <v-avatar size="180">
                    <img
                        src="https://cdn.vuetifyjs.com/images/john.jpg"
                        alt="John"
                    >
                </v-avatar>
            </v-row>
        </v-row>
        <v-row justify="center" class="ml-12 mr-n12 mt-n4">
            <div class="ml-12 mr-n12">
                <v-icon class="ml-10">mdi-pencil</v-icon>
                <v-subheader class="mt-n3 ml-7">Change Picture</v-subheader>  
            </div> 
        </v-row>
        <v-row>
            <v-btn Large white--text>Reset Password</v-btn>
        </v-row>
    </v-container>
    

</div>
    
</template>
<script>
import Dashboard from '../components/Dashboard'
export default {
    components:{
        Dashboard,
    },
     data: () => ({
    
     
  }),
    
}
</script>

<style scoped>

</style>
