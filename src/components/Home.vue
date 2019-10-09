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
            <li><router-link to="/ceshi">测试</router-link></li>
        </ul>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name:"Home",
    data(){
        return {
            list:"",
        }
    },
    methods:{
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
