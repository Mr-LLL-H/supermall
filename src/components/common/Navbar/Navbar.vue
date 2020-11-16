<template>
    <div class="nav-bar">
        <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
       <div class="right"><slot name="right"></slot></div>
    </div>
</template>
<script>
export default {
   data() {
      return {
      }
   },
   created(){
   },
   components:{
   },
   computed:{
   },
   methods:{
   },
}
</script>
<style  scoped>
.nav-bar{
    width: 100%;
    display: flex;
    height: 44px;
    line-height: 44px;
    box-shadow:0 2px 2px rgba(100, 100, 100, .3) ;
}
.center{
    flex: 1;
    text-align: center;
}
.left,.right{
    width: 60px;
 
}
</style>
