<template>
    <div>
        <div class="MySpace" v-if="show">
            <TopBar></TopBar>
            <div class="header">
                <div class="header_wrap">
                    <div class="header_left" @click="menu">
                        <img :src="allUser.imgAddr" alt="">
                    </div>
                    <div class="header_right">
                        <div class="header_right_p">
                            <p>{{allUser.realName}}</p>
                        </div>
                        <div class="header_right_span">
                            <span>
                                <img src="../assets/认证.png" alt="">
                                认证用户
                            </span>
                            <span>
                                <img src="../assets/实名.png" alt="">
                                已实名
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content">
                <div class="content_title">
                    <div class="xian"></div>
                    <h1>我的空间</h1>
                    <div class="xian"></div>
                </div>
                <div class="content_wrap">
                    <router-link tag="div" to="//Record" class="content_box" @click="documents">
                        <div class="content_p">
                                <p>我的档案</p>
                        </div>
                    </router-link>
                    <router-link tag="div" to="//Record" @click="license">
                        <div class="content_p">
                                <p>我的证照</p>
                        </div>
                    </div>
                    <router-link tag="div" to="//Record" @click="Footprint">
                        <div class="content_p">
                                <p>我的足迹</p>
                        </div>
                    </div>
                </div>
                <div class="btn">
                    <button @click="Opinion">
                        意见反馈
                        <img src="../assets/输入.png" alt="">
                    </button>
                </div>
                <div class="bottom">
                    <span></span>
                    <p>数据由青岛市行政审批局提供</p>
                    <span></span>
                    <p>服务热线 0531-8619444</p>
                </div>
            </div>
        </div>

        <div class="Enterprise" v-if="!show">
            <TopBar></TopBar>
                <div class="header">
                <div class="header_wrap">
                    <div class="header_left">
                        <img :src="allUser.imgAddr">
                    </div>
                    <div class="header_right">
                        <div class="header_right_p">
                            <p>{{allUser.realName}}</p>
                        </div>
                        <div class="header_right_span">
                            <span>
                                <img src="../assets/认证.png" alt="">
                                认证用户
                            </span>
                            <span>
                                <img src="../assets/实名.png" alt="">
                                已实名
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content">
                <div class="content_title">
                    <div class="xian"></div>
                    <h1>企业空间</h1>
                    <div class="xian"></div>
                </div>
                <div class="content_wrap">
                    <div class="content_box">
                        <div class="content_p">
                                <p>我的档案</p>
                        </div>
                    </div>
                    <div class="content_box">
                        <div class="content_p">
                                <p>我的证照</p>
                        </div>
                    </div>
                    <div class="content_box">
                        <div class="content_p">
                                <p>我的足迹</p>
                        </div>
                    </div>
                </div>
                <div class="btn">
                    <button @click="Opinion2">意见反馈</button>
                </div>
                <div class="bottom">
                    <span></span>
                    <p>数据由青岛市行政审批局提供</p>
                    <span></span>
                    <p>服务热线 0531-8619444</p>
                </div>
            </div>
        </div>
    </div>
   
</template>

<script>
import TopBar from './TopBar'
import {mapGetters,mapActions} from 'vuex'

export default {
    name:"MySpace",
    data(){
        return {

        }
    },

    methods:{
        to(){
            this.$router.go(0)
        },
        Opinion(){
            this.$router.push({path:"/Opinion"})
        },
        menu(){
            this.$router.push({path:"/Home"})
        },
        documents(){
            this.$router.push({path:"/Record"})
        },
        license(){
            this.$router.push({path:"/license"})
        },
        Footprint(){
            this.$router.push({path:"/Footprint"})
        },
        ...mapActions(["getUsers"]),

    },

    computed:{
        ...mapGetters(["allUser","show"]),
    },

    created(){
        this.getUsers()
    },

    components:{
        TopBar
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
.logo {
    width: 100%;
    height: 0.3733rem;
    position: absolute;
    top: 1.0133rem;
}
.logo_left p {
    float: left;
}
.logo_left p:nth-child(1){
    margin-left: 0.3867rem;
}
.logo_left p:nth-child(2){
    margin-left: 0.32rem;
}
.logo_left img {
    width: 0.4rem;
    height: 0.4rem;
}
.logo a {
    color: white;
}
.logo_title {
    width: 4.6333rem;
    margin: 0 auto;
    text-align: center;
}
.logo_title p {
    font-size:0.4rem;
    font-weight:500;
    color:rgba(255,255,255,1);
}
.header {
    width: 100%;
    height: 1.7067rem;
    position: absolute;
    top: 1.32rem;
}
.header_wrap {
    width: 7.48rem;
    margin: 0 auto;
    padding: 0 0.72rem;
}
.header_left {
    width:1.7067rem;
    height:1.7067rem;
    float: left;
    border-radius: 1.7067rem;
    overflow: hidden;
    line-height: 1.7067rem;
    /* background: url("../assets/timg.jpg")no-repeat center center; */
    background-size:100%;
    text-align: center;
    color:white;
}
.header_left img {
    width:1.7067rem;
    height:1.7067rem;
    /* background: url("../assets/timg.jpg")no-repeat center center; */
    background-size: 100%;
    overflow: hidden;
}
.header_right {
    width: 2.9rem;
    height:1.3333rem;
    float: left;
    margin-left: 0.64rem;
}
.header_right_p {
    width: 2.6267rem;
    height: 0.5933rem;
    line-height: 0.5933rem;
}
.header_right_p p {
    font-size:0.4267rem;
    font-weight:500;
    color:rgba(255,255,255,1);
}
.header_right_span {
    width: 5.2667rem;
    margin-top: 0.2267rem;
    height: 0.5867rem;
}
.header_right_span img {
    width: 0.2933rem;
    height: 0.3333rem;
    margin-left: 0.0933rem;
}
.header_right_span {
    color: white;
}
.header_right_span span {
    padding: 0.0933rem 0.0933rem 0.0933rem 0.0933rem;
    border-radius:0.32rem;
    background:rgba(255,255,255,0.1);
    float: left;
    margin-left: 0.32rem;
    font-size:0.2933rem;
    font-weight:500;
    color:white
    /* color:rgba(255,255,255,1); */
}
.header_right_span span:nth-child(1){
    margin-left: 0;
}
.content {
    width:8.4533rem;
    padding: 0.8533rem 0.4133rem 1.2rem 0.4133rem;
    background:rgba(255,255,255,1);
    box-shadow:0.0533rem 0.0533rem 0.2667rem 0rem rgba(173,206,255,0.2);
    border-radius:0.1333rem;
    position: absolute;
    top: 3.6267rem;
    margin: 0 auto;
    left: 50%;
    transform: translate(-50%);
}
.xian {
    width:0.4rem;
    height:0.0533rem;
    background:rgba(0,194,150,1);
    border-radius:0.0267rem;
    float: left;
    margin-top: 0.2333rem;
}
.xian:nth-child(1){
    margin-right: 0.2133rem;
}
.xian:nth-child(3){
    margin-left: 0.2133rem;
}
.content_wrap {
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.content_title {
    width: 2.9267rem;
    text-align: center;
    margin: 0 auto;
    height: 1.6667rem;
}
.content_title h1 {
    font-size:0.4rem;
    font-weight:500;
    color:rgba(11,24,86,1);
    float: left;
}
.content_box {
    width: 2.48rem;
    height: 3.4667rem;
    text-align: center;
    line-height: 5rem;
}
.content_box:nth-child(1) {
    background-image: url("../assets/我的档案.png");
    background-size:100%;
}
.content_box:nth-child(2) {
    background-image: url("../assets/我的证照.png");
    background-size:100%;
}
.content_box:nth-child(3) {
    background-image: url("../assets/我的足迹.png");
    background-size:100%;
}
.content_box p {
    font-size:0.3467rem;
    font-weight:400;
    color:rgb(108, 114, 143);
    height: 0;
}
.content_p p {
    font-size:0.3467rem;
    font-weight:400;
    color:rgba(18,33,104,1);
    margin-top:0.28rem;
}
.btn {
    width: 2.24rem;
    height: 0.7467rem;
    position: absolute;
    top: 8.3rem;
    left: 50%;
    transform: translate( -50%);
}
.btn button {
    width:2.24rem;
    height:0.7467rem;
    background:rgba(0,194,150,1);
    border-radius:0.4667rem;
    border: 0.0133rem rgba(0,194,150,1) solid;
    font-size:0.3467rem;
    font-weight:500;
    color:rgba(255,255,255,1);
}
.btn button img {
    width: 0.2933rem;
    height: 0.3067rem;
    margin-left: 0.0333rem;
}
.bottom {
    width: 4.6667rem;
    height: 1.3333rem;
    position: absolute;
    top: 10rem;
    left: 50%;
    line-height: 0.5667rem;
    text-align: center;
    transform: translate( -50%);
}
.bottom p {
font-size:0.24rem;
font-weight:400;
color:#BABFD4;
}
</style>
