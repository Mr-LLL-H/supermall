<template>
    <div class="swiper-box">
        <!-- <swiper ref="mySwiper" :options="swiperOptions">
                <swiper-slide v-for='(item,index) in  banner.list' :key ='index'>
                    <a :href="item.link">
                        <img :src="item.image" alt="">
                    </a>
                </swiper-slide>
         
         <div class="swiper-pagination" slot="pagination"></div>
        </swiper> -->
        <Swiper>
            <SwiperItem v-for='(item,index) in  banner.list' :key ='index'>
                <a :href="item.link">
                        <img :src="item.image" alt="">
                </a>
            </SwiperItem>
        </Swiper>
    </div>
</template>...
<script>
import { Swiper,SwiperItem } from 'components/common/swiper'


export default {
   props:{
       banner:{
           type:Object
       },
   },
    data() {
      return {
        
      }
    },
   components:{
     Swiper,
     SwiperItem
   }

}
</script>
<style  scoped>

.swiper-pagination{
  width: 5rem;
  height: 5rem;
  background: red;
}
</style>
