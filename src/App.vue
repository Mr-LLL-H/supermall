<template>
  <div id="app">
    <div id="nav">
     <main-tabar/>
    </div>
    <router-view />
  </div>
</template>
<script>
import 'assets/css/base.css'
import MainTabar from 'components/content/Maintabar/MainTabar'
export default {
  name:'app',
  components:{
    MainTabar

  }
  
}
</script>


<style>


</style>
