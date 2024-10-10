<template>
  <div id="app">
   
    <router-view></router-view>

   
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
   
  }
}
</script>

<style lang="scss">
div{
  router-link{
    text-decoration: none !important;
    
  }
}

.router-link-active{
   text-decoration: none;
}
div{
  a{
    margin-left: 10px;
  }
}
</style>
