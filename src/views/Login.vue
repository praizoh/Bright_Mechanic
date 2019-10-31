<template>
<v-container fluid id='item' class="fill-height">
    
    <v-row align="center">
        <v-col class="d-none d-sm-none d-md-block">
            <div class="mb-12 mt-n7 float-right mr-12">
                <h1 class="white--text">Welcome</h1>
                <h3 class="white--text">Fill in your details to login to your dashboard</h3>
            </div>
        </v-col>
        <v-col>
            <v-card max-width="400"
            :class="{'mx-auto': $vuetify.breakpoint.mdAndDown, 'pa-7': $vuetify.breakpoint.lgAndDown}"
            >
                <v-toolbar flat color="white">
                    <v-toolbar-title class="font-weight-bold" style="color:#080838">Login</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                    <v-form>
                        <v-text-field  outlined label="Username" name="username" v-model="username" prepend-inner-icon="mdi-account" type="text">

                        </v-text-field>
                        <v-text-field  outlined label="Password" name="password" v-model="password" prepend-inner-icon="mdi-lock" type="password">

                        </v-text-field>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-btn large color="#080838" class="white--text text-none ml-2" @click="login()">
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
    background-color: #080838 !important;
    min-height:100vh;
}

</style>