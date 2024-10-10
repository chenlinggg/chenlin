<template>
    <div class="indexBox">
      <div>我是首页</div>
      <p>我是路由组件传过来的值{{  }}</p>
      <p>{{ this.$route.query.uname }}</p>
      <p>{{ this.$route.query.upassword }}</p>
    </div>


</template>
<script>
export default{
    name:'IndexPage',
    created(){
        console.log( this.$route.query)
    }

}

</script>
<style scoped>
.indexBox{
    width: 100vw;
    height: 100vh;
    background-color: azure;
}

</style>