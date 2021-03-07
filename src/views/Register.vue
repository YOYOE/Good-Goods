<template>
    <div>
        <img class="headerimg" src="../assets/title.png" alt="">
        <cube-form
            :model="model"
            :schema="schema"
            @submit="submitHandler">
        </cube-form>
        <div class="link">
            <router-link to="/login">Already have an account? Click here</router-link>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            model:{
                username: '',
                password: ''
            },
            schema:{
                fields:[
                    // Username
                    {
                        type: 'input',
                        modelKey: 'username',
                        label: 'Username',
                        props: {
                            placeholder: 'Please enter your username.'
                        },
                        rules: {
                            required: true,
                            type: 'string',
                            min: 2,
                            max: 20,
                        },
                        trigger: 'blur',
                        messages: {
                            required: 'Username is required.',
                            min: 'Username can not be less than 2 characters.',
                            max: 'Username can not be more than 20 characters.',
                        }
                    },
                    // Password
                    {
                        type: 'input',
                        modelKey: 'password',
                        label: 'Password',
                        props: {
                            placeholder: 'Please enter your password.',
                            type: 'password',
                            eye: {
                                open: false,
                            }
                        },
                        rules: {
                            required: true,
                        },
                        trigger: 'blur',
                    },
                    {
                        type: 'submit',
                        label: 'SIGN UP'
                    }
                ]
            }
        }
    },
    methods:{
        async submitHandler(e){
            e.preventDefault();
            try{
                const result = await this.$http.get('/api/register', {params:this.model});
                if(result.success) {
                    this.$router.replace({path: '/botnav/index'})
                } else {
                    alert(result.message)
                }
            }catch(err){
                console.log(err);
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
    .headerimg
        width 80%
        margin 15px auto
    .link
        font-size 15px
</style>

