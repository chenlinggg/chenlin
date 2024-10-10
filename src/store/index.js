import Vue from 'vue';
import Vuex from 'vuex';
import user from './user'
Vue.use(Vuex)
const store=new Vuex.Store({
    state:{
        count:52
    },
    mutations:{
       
    },
    modules:{
        user
    }
});
export default store;