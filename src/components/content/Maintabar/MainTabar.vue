<template>
    <div>
        <tabbar>
        <tabbaritem path='/home' >
        <img slot="active-icon" src="~assets/img/tabarImg/home.png" alt="">
          <img slot="item-icon" src="~assets/img/tabarImg/tabbar.svg" alt="">
           <div slot='item-txt'>首页</div>
           </tabbaritem>
        <tabbaritem path='/category' >
         <img slot="active-icon" src="~assets/img/tabarImg/category.png" alt="">
          <img slot="item-icon" src="~assets/img/tabarImg/tabbar2.svg" alt="">
           <div slot='item-txt'>分类</div>
        </tabbaritem>
        <tabbaritem path='/cart' >
         <img slot="active-icon" src="~assets/img/tabarImg/cart.png" alt="">
          <img slot="item-icon" src="~assets/img/tabarImg/tabbar3.svg" alt="">
           <div slot='item-txt'>购物车</div>
        </tabbaritem>
        <tabbaritem path='/profile'>
          <img slot="active-icon" src="~assets/img/tabarImg/profile.png" alt="">
          <img slot="item-icon" src="~/assets/img/tabarImg/tabbar4.svg" alt="">
           <div slot='item-txt'>我的</div>
        </tabbaritem>
    </tabbar>
    </div>
</template>
<script>
import Tabbar from 'components/common/tabbar/tarbar'
import tabbaritem from 'components/common/tabbar/tabbar-item'



export default {
   data() {
      return {
      }
   },
   created(){
        
      
   },
   computed:{
      
   },
   components:{
 Tabbar,
       tabbaritem
   },
   methods:{
   },
}
</script>
<style  scoped>

</style>
