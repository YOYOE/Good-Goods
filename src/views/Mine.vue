<template>
    <div>
         <img class="headerimg" src="../assets/title.png" alt="">
        <ul>
            <li v-for="item in options" class="mineitem" @click="itemclick(item)" :key="item.label">
                <span class="minetitle">{{item.label}}</span>
                <i class="cubeic-arrow"></i>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            options:[
                {label:'Your Orders'},
                {label:'Buy Again'},
                {label:'Your Wish List'},
                {label:'Your Account'},
                {label:'Settings'},
                {label:'Customer Service'},
                {label:'Sign Out', type:'exit'},
            ]
        }
    },
    methods:{
        itemclick(item){
            if(item.type=='exit'){
                this.$store.commit('settoken','')
                localStorage.removeItem('token')
                this.$router.push({path:'/login'})
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
    .headerimg
        width 80%
        margin 30px auto
    .mineitem
        font-size  18px
        height  60px
        line-height 60px
        text-align left 
        padding-left 10%
        border-bottom 1px solid #eee
        .minetitle
            display inline-block
            width 90%
</style>