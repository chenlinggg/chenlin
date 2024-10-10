<template>
    <div>
      <router-link to="/">登录</router-link>
      <router-link to="/Regisister">注册</router-link>
      <p>我是注册的页面</p>
      <input v-model="inputDate">
      <p>{{ inputDate }}</p>
      <p>输入的数字的数据扩大2倍的结果：{{ sum}}</p>
      <button @onclick="num++">点击改变</button>
      <p>{{ num }}</p>
      <p>我要上传一个我的源代码到git上</p>
      <p>继续修改代码</p>
    </div>
    
  </template>
  
  <script>


  
  
  export default {
    name: 'regiSister',
    data(){
      return{
        inputDate:2,
        num:0
      }
    },
    computed:{
      sum:{
        get:function(){
          console.log(this.inputDate)
          return this.inputDate
        },
        set:function (newVelue){
          console.log('我的数字改变了');
          console.log(newVelue);
          this.inputDate=newVelue
          return this.inputDate
        }
          
        
      }
    },
    methods:{
      change(){
        this.num
        console.log(this.num);
      }
    },
    created(){
      this.inputDate=56
    }
  
  }
  </script>
  
  <style scoped lang="scss">
  $color:#e81b69;
  div{
    p{
      color:$color;
    }
  }
  </style>
  