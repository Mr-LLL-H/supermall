<template>
    <div>
        <ul class="recommend">
            <li v-for='(item,index) in recommends.list' :key='index' class="recommend-item">
                <a :href="item.link">
                    <img :src="item.image" alt="">
                    <div>{{item.title}}</div>
                    
                </a>
                <p>zh</p>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
   data() {
      return {
      }
   },
   props:{
       recommends:{}
   },
   created(){
   },
   components:{
   },
}
</script>
<style  scoped>
.recommend{
    width: 100%;
    display: flex;
    padding: 10px 0 10px;
    border-bottom:6px  solid #eee;
}
.recommend-item{
    flex: 1;
    text-align: center;
}
.recommend-item a div {
    color:var(--span-color)
}
.recommend-item img{
    width: 6.5rem;
    height: 6.5rem;
    margin-bottom: 4px;
}
</style>
