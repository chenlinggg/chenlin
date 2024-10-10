<template>
    <div class="son">
        <div>我是子组件</div>
    <div>{{ name }}</div>
    <div v-for="item in arr" :key="item">{{ item }}</div>
    <button @click="transformDate">向父组件传入一个123</button>
    </div>
</template>
<script>
export default{
    name:'sonPage',
    props:['name','arr'],
    methods:{
        transformDate(){
            this.$emit("changEvet",this.dataB);
        }
    },
    data(){
        return{
            dataB:{
                name:'chenlin',
                pho:'6655555'
            }
        }
    }

    

}
</script>

<style>
.son{
    box-sizing: border-box;
    background-color: aqua;
    width: 20vw;
    height: 20vh;
    border-radius: 20px;
    padding: 10px;
}


</style>