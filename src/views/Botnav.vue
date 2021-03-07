<template>
    <div>
        <transition>
            <router-view class="Router"></router-view>
        </transition>
        <cube-tab-bar
            v-model="selectedLabelDefault"
            :data="tabs"
            @change="changeHandler"
            class="botnav">
        </cube-tab-bar>
        <span class="countsum">{{countsum}}</span>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    data () {
        return {
            selectedLabelDefault: 'Main',
            tabs: [{
              label: 'Main',
              icon: 'cubeic-home'
            }, {
              label: 'List',
              icon: 'cubeic-tag'
            }, {
              label: 'Cart',
              icon: 'cubeic-mall'
            }, {
              label: 'Mine',
              icon: 'cubeic-person'
            }]
        }
    },

    methods: {
        changeHandler (label) {
            switch(label){
                case 'Main':
                    this.$router.push('/botnav/index');
                    break;
                case 'List':
                    this.$router.push({path: '/botnav/list'});
                    break;
                case 'Cart':
                    this.$router.push({path: '/botnav/cart'});
                    break;
                case 'Mine':
                    this.$router.push({path: '/botnav/mine'});
                    break;
            }
        }
    },

    computed:{
        ...mapGetters({
            countsum:'countsum'
        })
    },
    
    created(){
        switch(this.$route.path){
            case '/botnav/index':
                this.selectedLabelDefault =' Main';
                break;
            case '/botnav/list':
                this.selectedLabelDefault = 'List';
                break;
            case '/botnav/cart':
                this.selectedLabelDefault ='Cart';
                break;
            case '/botnav/mine':
                this.selectedLabelDefault = 'Mine';
                break;
        }
    }
}
</script>

<style lang="stylus">
    .cube-tab-bar.botnav
        position  fixed
        bottom  0
        left 0
        z-index 1000
        width 100%
        background #fff
        .cube-tab div
            font-size  15px
        i 
            font-size 25px
    .countsum
        position  fixed
        bottom 40px
        right 110px
        z-index  1001
        width 18px
        height 18px
        line-height 18px
        border-radius 50%
        font-size 14px
        background red
        opacity 80%
        color #fff
</style>
