<template>
    <div>
        <div class="goods" v-for="(item,index) in cartarr" :key="index">
            {{item.title}}
            <div class="goodsright">
                <i class="cubeic-remove" @click="removeCart(index)"></i>
                <span>{{item.cartCount}}</span>
                <i class="cubeic-add" @click="addCart(index)"></i>
            </div>            
        </div>
        <cube-button style="margin:10px 0;">Proceed to Checkout</cube-button>
        <cube-button @click="clearcart">Clear Cart</cube-button>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data(){
        return{}
    },
    computed:{
        ...mapState({
           cartarr:state=>state.cartarry 
        })
    },
    methods:{
        removeCart(index){
            this.$store.commit('cartremove',index)
        },
        addCart(index){
            this.$store.commit('cartadd',index)
        },
        clearcart(){
            this.$store.commit('clearcart')
        }
    }
}
</script>

<style lang="stylus" scoped>
    .goods
        padding 30px 40px
        text-align left
        font-size 20px 
        .goodsright
            float  right
        i 
            font-size 18px
</style>