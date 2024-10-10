<template>
    <div>
      <router-link to="/">登录</router-link>
      <router-link to="/Regisister">注册</router-link>
      <p>我是登录页面</p>
      <div > 
      <from ref="from">
       <div>
         <label>账号：</label>
        <input v-model="user.uname" type="text">
      </div>
       <div>
        <label>密码：</label>
        <input v-model="user.upassword" type="password" name="upassword"> 
      </div>
        <input @click="submit" type="submit">
      </from>
      <p>我修改了一个登录框</p>
      </div>
      
    </div>
    
  </template>
  <script> 

  export default {
    name: 'loginePage',
    data(){
      return{
        user:{
          uname:'',
          upassword:''
        },
        name:'我是父组件',
        arr:[12,36,55],
        resNum:{}
      }
    },
    components: {
      
    },
    created(){
     
     
    },
    mounted(){
      

    },
    methods:{
      submit(){
       /*  this.$router.push({path:'/index',query:{uname:this.user.uname,upassword:this.user.upassword}}) */
       this.$refs.from.classList.add('active')
        console.log(this.$refs.from.classList)
      }
    }
  }
  </script>
  
  <style lang="scss">

  p{
    margin-left: 10px;
    margin-top: 10px;
  }
  .active{
    background-color: aqua;
    color: red;
  }
  
  </style>
  