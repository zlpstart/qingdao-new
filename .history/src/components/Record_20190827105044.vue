<template>
    <div>
        <div class="Record" v-if="!show">
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
            <div class="Record_content_box">
                <div class="legal_content">
                    <div class="legal_title">
                        <h1>基本信息</h1>
                    </div>
                    <ul>
                        <li><b>身份证号：</b>{{allUser.idCode}}</li>
                        <li><b>手机号码：</b>{{allUser.mobile}}</li>
                        <li><b>户籍地址：</b>中国广东省深圳市宝山区示范新村307号</li>
                        <li><b>婚姻状况：</b>已婚</li>
                    </ul>
                </div>
                <div class="legal_content">
                    <div class="decorate">
                        <div class="decorate_left"></div>
                        <div class="decorate_right"></div>
                    </div>
                    <div class="legal_title">
                        <h1>资产信息</h1>
                    </div>
                    <ul>
                        <li><b>车辆信息：</b>2345986538728485643</li>
                        <li><b>房产交易登记：</b>18080836752</li>
                    </ul>
                </div>
                <div class="legal_content">
                    <div class="decorate">
                        <div class="decorate_left"></div>
                        <div class="decorate_right"></div>
                    </div>
                    <div class="legal_title">
                        <h1>社保信息</h1>
                    </div>
                    <ul>
                        <li><b>缴费状态：</b>参保缴费</li>
                        <li><b>开始年月：</b>2018-03-15</li>
                        <li><b>终止年月：</b>2018-09-26</li>
                    </ul>
                </div>
                <div class="kong"></div>
                <div class="bottom">
                    <span></span>
                    <p>数据由青岛市行政审批局提供</p>
                    <span></span>
                    <p>服务热线 0531-8619444</p>
            </div>
            </div>
        </div>

        <div class="Record2" v-if="!show">
            <TopBar></TopBar>
            <div class="header">
                <div class="header_wrap">
                    <div class="header_left">
                        <img src="../assets/timg.jpg" alt="">
                    </div>
                    <div class="header_right">
                        <div class="header_right_p">
                            <p>一只小鹿</p>
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
            <div class="Record_content_box">
                <div class="legal_content">
                    <div class="legal_title">
                    <h1>基本信息</h1>
                    </div>
                    <ul>
                    <li><b>身份证号：</b>2345986538728485643</li>
                    <li><b>手机号码：</b>18080836752</li>
                    <li><b>户籍地址：</b>中国广东省深圳市宝山区示范新村307号</li>
                    <li><b>婚姻状况：</b>已婚</li>
                    </ul>
                </div>
                <div class="legal_content">
                    <div class="decorate">
                        <div class="decorate_left"></div>
                        <div class="decorate_right"></div>
                    </div>
                    <div class="legal_title">
                        <h1>资产信息</h1>
                    </div>
                    <ul>
                        <li><b>车辆信息：</b>2345986538728485643</li>
                        <li><b>房产交易登记：</b>18080836752</li>
                    </ul>
                </div>
                <div class="legal_content">
                    <div class="decorate">
                        <div class="decorate_left"></div>
                        <div class="decorate_right"></div>
                    </div>
                    <div class="legal_title">
                        <h1>社保信息</h1>
                    </div>
                    <ul>
                        <li><b>缴费状态：</b>参保缴费</li>
                        <li><b>开始年月：</b>2018-03-15</li>
                        <li><b>终止年月：</b>2018-09-26</li>
                    </ul>
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
    name:"Record",
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
  .legal_content li b{
    font-size:0.3467rem;
    font-weight:400;
    color:#0B1856;
  }
  .legal_content li {
    font-size:0.3467rem;
    font-weight:400;
    margin-top: 0.3733rem;
    color:rgba(11,24,86,1);
  }
  .legal_content li:nth-child(1){
    margin-top: 0;
  }
  .decorate {
    width: 8.4267rem;
    padding: 0 0.4267rem;
    position: absolute;
    top: -1.16rem;
    left: 0;
  }
  .decorate img {
    width: 100%;
    height: 100%
  }
  .decorate_left {
    width: 0.24rem;
    background: url("../assets/连接.png")no-repeat center center;
    background-size: 100%;
    height: 1.36rem;
    float: left;
  }
  .decorate_right {
    width: 0.24rem;
    background: url("../assets/连接.png")no-repeat center center;
    height: 1.36rem;
    background-size: 100%;
    float: right;
  }
  .legal_content:nth-child(1).decorate{
    display: none;
  }
    .legal_content {
    width:8.5067rem;
    background:rgba(255,255,255,1);
    box-shadow:0.0533rem 0.0533rem 0.2667rem 0rem rgba(173,206,255,0.2);
    border-radius:0.1333rem;
    border:0.0133rem solid rgba(0,206,159,0.8);
    margin: 0 auto;
    margin-top: 0.8267rem;
    position: relative;
    padding: 1.0133rem 0 1.0933rem 0.7733rem;
  }
  .legal_title {
    padding: 0.1033rem 0.2333rem;
    height:0.42rem;
    background:rgba(250,252,255,1);
    border-radius:0.36rem;
    border:0.0267rem solid rgba(0,206,159,1);
    margin: 0 auto;
    line-height: 0.42rem;
    text-align: center;
    position: absolute;
    top: 0.3867rem;
    left: 50%;
    margin-top: -0.36rem;
    transform: translate(-50%, -50%);
  }
  .legal_title h1 {
    font-size:0.3733rem;
    font-family:PingFangSC-Medium;
    color:rgba(11,24,86,1);
  }
  .Record_content_box {
      width: 100%;
      position: absolute;
      top: 3.0267rem;
      left: 50%;
      transform: translate(-50%);
  }
  .kong {
      width: 100%;
      height: 1rem;
  }
  .bottom {
    width: 100%;
    height: 1.3333rem;
    line-height: 0.5667rem;
    text-align: center;
}
.bottom p {
    font-size:0.24rem;
    font-weight:400;
    color:#BABFD4;
}
.legal_content ul li {
    font-size:0.3467rem;
    font-weight:400;
    color:#6C7498;
}
.legal_content ul li b {
    font-size:0.3467rem;
    font-weight:400;
    color:rgba(11,24,86,1);
}
</style>
