<template>
    <div>
        <div class="License">
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
            <div class="content_box">
                <div class="content_minbox">
                    <div class="title">
                        <span>个人身份证</span>
                    </div>
                    <div class="content_img">
                        <img src="../assets/身份证.png" alt="">
                        <div class="content_text">
                            <p>这里是文件内容或登记时间</p>
                        </div>
                    </div>
                </div>
                <div class="content_minbox">
                    <div class="xian">
                        <div class="xian_left">
                            <img src="../assets/连接.png" alt="">
                        </div>
                        <div class="xian_right">
                            <img src="../assets/连接.png" alt="">
                        </div>
                    </div>
                    <div class="title">
                        <span>驾驶证</span>
                    </div>
                    <div class="content_img">
                        <img src="../assets/驾驶证.png" alt="">
                        <div class="content_text">
                            <p>这里是文件内容或登记时间</p>
                        </div>
                    </div>
                </div>
                <div class="bottom">
                    <span></span>
                    <p>数据由青岛市行政审批局提供</p>
                    <span></span>
                    <p>服务热线 0531-8619444</p>
                </div>
            </div>
        </div>

            <div class="License2">
        <TopBar></TopBar>
        <div class="header">
            <div class="header_wrap">
                <div class="header_left">
                    <img src="../assets/timg.jpg" alt="">
                </div>
                <div class="header_right">
                    <div class="header_right_p">
                        <p>青岛XX信息科技有限公司</p>
                    </div>
                    <div class="header_right_span">
                        <span>
                            <img src="../assets/认证.png" alt="">
                            经办人
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="content_box">
            <div class="content_minbox">
                <div class="title">
                    <span>个人身份证</span>
                </div>
                <div class="content_img">
                    <p>这里是文件内容或登记时间</p>
                </div>
            </div>
            <div class="content_minbox">
                <div class="xian">
                    <div class="xian_left">
                        <img src="../assets/连接.png" alt="">
                    </div>
                    <div class="xian_right">
                        <img src="../assets/连接.png" alt="">
                    </div>
                </div>
                <div class="title">
                    <span>驾驶证</span>
                </div>
                <div class="content_img">
                    <p>这里是文件内容或登记时间</p>
                </div>
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
    name:"License",
    data(){
        return {
            
        }
    },
    components:{
        TopBar
    },
    methods:{
        to(){
            this.$router.go(0)
        },
        ...mapActions(["getUsers"]),
    },
    created(){
        this.getUsers()
    },
    computed:{
        ...mapGetters(["allUser","show"]),
    },
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
.content_box {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    top: 3.6267rem;
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
}
.header_left img {
    width:1.7067rem;
    height:1.7067rem;
    background: url("../assets/timg.jpg")no-repeat center center;
    background-size: 100%;
    overflow: hidden;
}
.header_right {
    width: 2.9rem;
    height:1.3333rem;
    float: left;
    margin-left: 0.64rem;
}
.header_right_p p {
    font-size:0.4267rem;
    font-weight:500;
    color:rgba(255,255,255,1);
}
.header_right_span img {
    width: 0.2933rem;
    height: 0.3333rem;
    margin-left: 0.0933rem;
}
.header_right_span {
    width: 5.2667rem;
    margin-top: 0.2267rem;
    height: 0.5867rem;
}
.header_right_span span {
    padding: 0.0933rem 0.0933rem 0.0933rem 0.0933rem;
    border-radius:0.32rem;
    background:rgba(255,255,255,0.1);
    float: left;
    margin-left: 0.32rem;
    font-size:0.2933rem;
    font-weight:500;
    color:rgba(255,255,255,1);
}
.header_right_span span:nth-child(1){
    margin-left: 0;
}
.content_minbox {
    width:9.28rem;
    height:6.4267rem;
    background:rgba(255,255,255,1);
    box-shadow:0.0533rem 0.0533rem 0.2667rem 0rem rgba(173,206,255,0.2);
    border-radius:0.1333rem;
    border:0.0133rem solid rgba(0,194,150,1);
    margin: 0 auto;
    text-align: center;
    position: relative;
}
.content_text {
    width:8.4267rem;
    height:1.7333rem;
    background:linear-gradient(180deg,rgba(0,0,0,0) 0%,rgba(0,0,0,0.68) 100%);
    border-radius:0rem 0rem 0.1333rem 0.1333rem;
    z-index: 1;
    position: absolute;
    line-height: 1.7333rem;
    text-align: left;
    bottom: 0;
}
.content_text p {
    font-size:0.3467rem;
    font-family:PingFangSC-Semibold;
    font-weight:600;
    color:rgba(255,255,255,1);
    margin-left: 0.4267rem;
}
.title {
    width: 100%;
    height: 1.4267rem;
    line-height: 1.4267rem;
}
.title span {
    position: 0.0933rem;
    background:rgba(250,252,255,1);
    border-radius:0.36rem;
    border:0.0267rem solid rgba(0,194,150,1);
    padding: 0.1533rem;
}
.content_img {
    width:8.4267rem;
    height:4.56rem;
    margin: 0 auto;
    position: relative;
}
.content_img img {
    width: 100%;
    height: 100%;
}
.content_img p {
    font-size:0.3467rem;
    font-weight:600;
    color:rgba(255,255,255,1);
}
.content_minbox:nth-child(2){
    margin-top: 0.48rem;
}
.xian {
    width: 100%;
    height: 1.12rem;
    position: absolute;
    top: -0.8rem;
}
.xian img {
    width: 100%;
    height: 100%;
}
.xian_left {
    width: 0.24rem;
    height: 1.12rem;
    float: left;
    margin-left: 0.4133rem;
}
.xian_right {
    width: 0.24rem;
    height: 1.12rem;
    float: right;
    margin-right: 0.4133rem;
}
  .bottom {
    width: 100%;
    height: 1.3333rem;
    margin-top: 0.6267rem;
    line-height: 0.5667rem;
    text-align: center;
}
.bottom p {
    font-size:0.24rem;
    font-weight:400;
    color:#BABFD4;
}
</style>
