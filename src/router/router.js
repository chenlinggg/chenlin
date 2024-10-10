import VueRouter from "vue-router";
import Logine from "@/views/Logine.vue";
import Regisister from "@/views/Regisister.vue";
import IndexPage from "@/views/index.vue";
const router=new VueRouter({
     routes:[{
        path:"/",
        component:Logine
     },
     {
        path:"/Regisister",
        component:Regisister
     },
     {
      path:'/index',
      component:IndexPage
     }
   
   
   ]

});
/* router.beforeEach((to,from,next)=>{
if(to.path==='/index'){
console.log('我要去首页')
next('/Regisister')
}else{
   next()
}
}) */
export default router;