<template>
    <div class="panelsbox">
        <cube-scroll class="leftpanels">
            <ul>
                <li v-for="(list,index) in tabslabel" @click='selectlist(index)' :class="list.active?'active':''" :key='index'>
                    {{list.label}}
                </li>
            </ul>
        </cube-scroll>
        <cube-scroll class="rightpanels">
            <ul>
                <li v-for="(tag,index) in tags" :key="index">
                    <img :src="tag.image" alt="">
                    <p>{{tag.label}} <i class="cubeic-add" @click="addtocart($event,tag)"></i></p>
                </li>
            </ul>
        </cube-scroll>
        <div class="ball-wrap">
            <transition
                @before-enter="beforeEnter"
                @enter="enter"
                @afterEnter="afterEnter">
                <div class="ball" v-if="ball.show">
                    <div class="inner">
                        <i class="cubeic-add"></i>
                    </div>
                </div>
             </transition>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            ball:{
                show:false,
                el:''
            },
           tags:[],
           tabslabel:[
               {
                   label:'Electronics',
                   active:true
               },
               {
                   label:'Computers',
                   active:false
               },
               {
                   label:'Smart Home',
                   active:false
               },
               {
                   label:'Artrs & Crafts',
                   active:false
               },
               {
                   label:'Software',
                   active:false
               },
               {
                   label:'Video Games',
                   active:false
               }
           ] 
        }
    },
    methods:{
        selectlist(index){
            this.tabslabel.forEach((val, i)=>{
                val.active = (index == i) ? true : false;
                // if(index == i){
                //     val.active = true;
                // }else{
                //     val.active = false;
                // }
            })
            this.getclassify(index);
        },

        async getclassify(index){
           const result = await this.$http.get('/api/classify',{params:{type: index}});
           this.tags = result.data;
        },

        addtocart(event, tag){
            this.$store.commit('tocart',tag);
            this.ball.show = true;
            this.ball.el = event.target;
        },

        beforeEnter(el){
            const dom = this.ball.el;
            // console.log(dom)
            const rect = dom.getBoundingClientRect();
            // console.log(rect)
            const x = rect.left - window.innerWidth * 0.7;
            const y = - (window.innerHeight - rect.top);
            // console.log(x,y)
            el.style.display = 'block';
            el.style.transform = `translate3d(0,${y}px,0)`;
            const inner = el.querySelector('.inner');
            inner.style.transform = `translate3d(${x}px,0,0)`;
        },

        enter(el,done){
            document.body.offsetHeight;
            el.style.transform = `translate3d(0,0,0)`;
            const inner = el.querySelector('.inner');
            inner.style.transform = `translate3d(0,0,0)`;
            el.addEventListener('transitionend', done)
        },
        
        afterEnter(el){
            this.ball.show = false;
            el.style.display = 'none';
        }
    },

    created(){
        this.getclassify(0);
    },

    // mounted(){
    //     const leftpanels = document.querySelector('.leftpanels');
    //     const rightpanels = document.querySelector('.rightpanels');
    //     const bodyheight = document.documentElement.clientHeight;
    //     leftpanels.style.height = bodyheight - 57 + ' px';
    //     rightpanels.style.height = bodyheight - 57 + 'px';
    // }
}
</script>

<style lang="stylus" scoped>
    .ball-wrap
        .ball
            position fixed
            left 70%
            bottom 10px
            z-index 1003
            color red
            transition all 0.8s cubic-bezier(0.49,-0.29,0.75,0.41)
            .inner
                width 10px
                height  10px
                transition all 1s linear
    .panelsbox
        display flex
        .leftpanels
            width 30%
            li
                height 50px
                line-height 50px
                border-bottom 1px solid #fff
                color #333
                background #f8f8f8
                font-size  14px
            .active
                background #fff
                color #e93b3d
        .rightpanels
            width 70%
            ul
                display flex
                flex-wrap  wrap
                li
                    width 50%
                    justify-content center
                    align-items center
                    font-size 12px
                    img 
                        width 80px
                        height  80px
                    .cubeic-add
                        font-size  18px
</style>


