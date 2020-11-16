<template>
  <div class="rabbar-item"  @click='pagechange'>
        <slot v-if='!isactive' name='item-icon'></slot>
        <slot v-else name='active-icon'></slot>
        <div  :style='showcss'> <slot name='item-txt'></slot></div>
        
  </div>
</template>

<script>
export default {
   name:'tabbarItem',
   data() {
      return {
          
      }
   },
   props:{
       path:String,
       showcsscolor:{
           type:String,
           default:'red'
       }
   },
   created(){
   },
   computed:{
        isactive(){
           return this.$route.path.indexOf(this.path)!==-1
       },
       showcss(){
           return this.isactive?{color:this.showcsscolor}:{}
       }
   },
   methods:{
       pagechange(){
           if (this.$route.path==this.path){
               return
           }
           this.$router.replace(this.path)
       },
      
   },
}
</script>
<style  scoped>
.rabbar-item{
flex: 1;
text-align: center;
}
.rabbar-item img{
    width: 24px;
    height: 24px;
}
</style>
