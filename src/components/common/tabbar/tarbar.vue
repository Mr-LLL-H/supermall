<template>
    <div id="tab-bar">
        <slot></slot>
    </div>
</template>
<script>
export default {
name:'tabbar',
   data() {
      return {
      }
   },
   created(){
   },
   computed:{
   },
   methods:{
   },
}
</script>
<style  scoped>
#tab-bar{
    display:flex ;
    background: #f6f6f6;
    height: 49px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0px -2px 5px rgba(100, 100, 100, 0.4);
}


</style>
