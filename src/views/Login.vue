<template>
<v-container fluid id='item' class="fill-height" >
    
    <v-row align="center">
        <v-col class="d-none d-sm-none d-md-block ml-8">
            <div class="mb-12 mt-n7 mr-12 float-right">
                <h1 class="white--text" style="width: 221px; height: 56px; left: 85px; top: 404px; font-family: Raleway; font-style: normal; font-weight: bold; font-size: 40px; line-height: 56px;">Welcome</h1>
                <div class="white--text" style="width: 496px; height: 28px; left: 85px; top: 463px; font-family: Raleway; font-style: normal; font-weight: 500; font-size: 24px; line-height: 28px;" >Fill in your details to login to your dashboard</div>
            </div>
        </v-col>
        <v-col> 
            <v-card max-width="500" min-width="300"
            :class="{'mx-auto': $vuetify.breakpoint.mdAndDown, 'pa-12': $vuetify.breakpoint.lgAndDown}"
            >
                <v-toolbar flat color="white">
                    <v-toolbar-title class="font-weight-bold display-1 mt-n6" style="color:#080E53">Login</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                    <v-form>
                        <v-text-field  outlined color="#B1AFCE" label="Username" name="username" v-model="username" prepend-inner-icon="mdi-account" type="text">

                        </v-text-field>
                        <v-text-field  class="mt-7" color="#B1AFCE" outlined label="Password" name="password" v-model="password" prepend-inner-icon="mdi-lock" type="password">

                        </v-text-field>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-btn width="100" large color="#080E53" class="white--text text-none ml-2 font-weight-bold title" @click="login()">
                        Login
                    </v-btn>
                </v-card-actions>

            </v-card>
        </v-col>
    </v-row>
    
</v-container>
</template>

<script>
export default {
    data(){
        return {
            username:"",
            password:""
        }
    },
    methods:{
        login(){
            let username=this.username
            let password=this.password
            alert(username)
            alert(password)
            if (username=="Bright56" && password=="1234"){
                this.$router.push('/dealers')
            } else{
                this.$router.push('/')
            }
            //this.$store.dispatch('login', {username, password})
            //.then(()=>this.$router.push('/dealers'))
            //.catch(err=> console.log(err))
        }
    }
}
</script>

<style scoped>
#item{
    background-color: #080E53 !important;
    min-height:100vh;
}

</style>