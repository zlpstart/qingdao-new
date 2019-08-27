<template>
    <div class="Home">
        <ul>
            <li><router-link to="/Enterprise">企业空间</router-link></li>
            <li><router-link to="/Opinion">意见反馈</router-link></li>   
            <li><router-link to="/Opinion2">企业意见反馈</router-link></li>
            <li><router-link to="/Record">我的档案</router-link></li> 
            <li><router-link to="/Car">我的档案——车辆登记信息</router-link></li>      
            <li><router-link to="/House">我的档案——房屋登记信息</router-link></li>
            <li><router-link to="/License">我的证照</router-link></li>
            <li><router-link to="/Footprint">我的足迹</router-link></li>
            <li><router-link to="/Footprint2">企业足迹</router-link></li>
            <li><router-link to="/Record2">企业档案</router-link></li>
            <li><router-link to="/License2">企业证照</router-link></li>
        </ul>
        <button @click="hehe(allUser.imgAddr)">点我获取数据</button>
        <img :src="allUser.imgAddr" alt="">         <!-- allUser.imgAddr == ../assets/boy.png -->
        <img src="../assets/boy.png" alt="">        <!-- 上下的地址是一样 为什么上面一行的图片显示不出来 -->
    </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'

export default {
    name:"Home",
    data(){
        return {
            list:"",
        }
    },
    methods:{
        ...mapActions(["getUsers"]),
    },
    computed:mapGetters(["allUser"]),
    created(){
        this.getUsers();
    }
}
</script>

<style scoped>
* {
    padding: 0;
    margin: 0;
}
ul {
    list-style: none;
}
a {
    text-decoration: none;
}
body {
    background: #F7FAFF;
}
.Home a {
    font-size: 0.8rem;
}

</style>
