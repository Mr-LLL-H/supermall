<template>
    <div>
        <Navbar class='navbar-background'> <div slot="center" class='centercolor'>购物街</div></Navbar>
       <HomeSwiper :banner='banner' />
       <HomeReacommendView   :recommends='recommends' />
    </div>
</template>
<script>
import Navbar from 'components/common/Navbar/Navbar'
import HomeSwiper from './homechild/Swiper'
import HomeReacommendView from './homechild/HomeRecommendView'

import { getHomeMultidata } from 'network/home.js'

export default {
   name:'home',
   data() {
      return {
          banner:{},
          recommends:[]
      }
   },
   components:{
       Navbar,
       HomeSwiper,
       HomeReacommendView
   },
   created(){
        //请求多个数据
         getHomeMultidata().then(res =>{this.banner = res.data.banner;this.recommends = res.data.recommend;console.log(this.recommends)},)
   },
   mounted(){
       
       },
   computed:{
   },
   methods:{

   },
}
</script>
<style  scoped>
.navbar-background{
    background:tomato;
}
.centercolor{
    color: #fff;
}
</style>
