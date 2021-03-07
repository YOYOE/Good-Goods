<template>
    <div class="index">
        <img src="../assets/title.png" alt="" class="title">

        <!-- Slides -->
        <cube-slide ref="slide" :data="items">
            <cube-slide-item v-for="(item, index) in items" :key="index">
                <a :href="item.url">
                <img class="banner" :src="item.image">
                </a>
            </cube-slide-item>
        </cube-slide>
        <br>

        <!-- Categories -->
        <cube-slide ref="slidelists" :auto-play="false" :data="lists">
            <cube-slide-item v-for="(list, index) in lists" :key="index">
               <ul class="listul">
                   <li class="listli" v-for="(item,i) in list" :key="i">
                       <a :href="item.url">
                           <img :src="item.image" alt="">
                           <p>{{item.label}}</p>
                       </a>
                   </li>
               </ul>
            </cube-slide-item>
        </cube-slide>
        <br>

        <img src="../assets/footer.jpg" alt="" class="footer">
    </div>
</template>

<script>
export default {
    data() {
        return {
            // slides
            items: [], 
            // categories
            lists:[],
      }
    },
    methods: {
        clickHandler(item, index) {
            console.log(item, index)
        }
    },
    async created(){
       try{
            const items = await this.$http.get('/api/banner');
            this.items = items.data;
            const lists = await this.$http.get('/api/rollinglist');
            this.lists = lists.data;
        } catch(err) {
            console.log(err)
        }
    }
}
</script>

<style lang="stylus" scoped>
    .index
        img.title
            width 80%
            margin 25px auto
        a
            .banner
                display block
                height 200px
                margin 0 auto
        .listul
            display flex
            flex-wrap wrap
        .listli
            width 33%
            img
                width 50px
                height  50px
                border-radius  50%
            p
                font-size  14px
                padding-bottom  20px
        .footer 
            margin-bottom 30px
</style>

