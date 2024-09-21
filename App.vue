<template>
  <div id="app">
   <login-card :code="fathernum"></login-card>
  </div>
</template>

<script>
import LoginCard from './components/LoginCard.vue';

export default {
  name: 'App',
  data(){
   
     return{
       fathernum:'fdfdf'
     }
   
  },
  components: {
    LoginCard
  }
}
</script>

<style>




</style>
