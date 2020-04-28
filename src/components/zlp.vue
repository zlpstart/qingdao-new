<template>
  <div>
    <div class="zlp" v-if="show">
      <!-- 企业档案 -->
      <TopBar></TopBar>
      <div class="header">
        <div class="header_wrap">
          <div class="header_left">
            <img :src="allUser.imgAddr" />
          </div>
          <div class="header_right">
            <div class="header_right_p">
              <p>{{allUser.realName}}</p>
            </div>
            <div class="header_right_span">
              <span>
                <img src="../assets/authentication.png" alt />
                经办人
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="Record_box">
        <div class="zlp_box" v-if="codeShow" v-for="(item,index) in data1" :key="index">
          <ul>
            <!-- v-show="items.show" -->
            <li v-for="(items,index) in item">
              <b>{{items.key}}:</b>
              <p v-if="item.key == 'ZP'">
                <img :src="'data:image/png;base64,'+items.value" alt />
              </p>
              <p v-else>{{items.value}}</p>
              <p @click="cloce">X</p>
            </li>
          </ul>
          <h1 v-if="!codeShow">未查询到信息</h1>
          <div class="xian">
            <div class="xian_left">
              <img src="../assets/connect.png" alt />
            </div>
            <div class="xian_right">
              <img src="../assets/connect.png" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="zlp" v-if="!show">
      <!-- 企业档案 -->
      <TopBar></TopBar>
      <div class="header">
        <div class="header_wrap">
          <div class="header_left">
            <img :src="allUser.imgAddr" />
          </div>
          <div class="header_right">
            <div class="header_right_p">
              <p>{{allUser.realName}}</p>
            </div>
            <div class="header_right_span">
              <span>
                <img src="../assets/authentication.png" alt />
                经办人
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="Record_box">
        <div class="zlp_box2">
          <p>未查询到信息</p>
          <div class="cha" @click="cloce">
            X
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import TopBar from "./TopBar";
  import none from './none.vue'
  import {
    mapGetters,
    mapActions
  } from "vuex";

  export default {
    name: "zlp",
    data() {
      return {
        data1: [],
        data2: [],
        title: "",
        img: [],
        code: "",
        codeShow: true,
        show: true
      };
    },
    components: {
      TopBar,
      none
    },
    methods: {
      cloce() {
        this.$router.push("/")
      }
    },
    created() {
      window.alert = function (name) {
        var iframe = document.createElement("IFRAME");
        iframe.style.display = "none";
        iframe.setAttribute("src", "data:text/plain,");
        document.documentElement.appendChild(iframe);
        window.frames[0].window.alert(name);
        iframe.parentNode.removeChild(iframe);
      };
      this.data1 = JSON.parse(window.localStorage.getItem("data"));
      if (this.data1.length < 1 || this.data1 == "") {
        this.show = false
      }
      // this.code = window.localStorage.getItem("code");
      // console.log(this.data1[0].length)
      // if (this.data1[0].length < 1) {
      //   if (this.data1.code == 2000) {
      //     this.codeShow = false;
      //   } else {
      //     alert("服务繁忙，请稍后再试！");
      //   }
      // }
    },
    mounted: {},
    computed: {
      ...mapGetters([
        "allUser",
        "show",
        "allRecord",
        "jibenxinxi2",
        "jibenxinxi3"
      ])
    }
  };
</script>

<style scoped>
  * {
    padding: 0;
    margin: 0;
  }

  .Record {
    height: 100vh;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  body {
    background: #f7faff;
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

  .logo_left p:nth-child(1) {
    margin-left: 0.3867rem;
  }

  .logo_left p:nth-child(2) {
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
    font-size: 0.4rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
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
    width: 1.7067rem;
    height: 1.7067rem;
    float: left;
    border-radius: 1.7067rem;
    overflow: hidden;
  }

  .header_left img {
    width: 1.7067rem;
    height: 1.7067rem;
    background-size: 100%;
    overflow: hidden;
  }

  .header_right {
    width: 2.9rem;
    height: 1.3333rem;
    float: left;
    margin-left: 0.64rem;
  }

  .header_right_p {
    width: 5.6667rem;
    height: 0.7rem;
  }

  .header_right_p p {
    font-size: 0.4267rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    float: left;
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
    border-radius: 0.32rem;
    background: rgba(255, 255, 255, 0.1);
    float: left;
    margin-left: 0.32rem;
    font-size: 0.2933rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
  }

  .header_right_span span:nth-child(1) {
    margin-left: 0;
  }

  .header_right_p p:nth-child(2) {
    width: 1.8533rem;
    font-size: 0.4267rem;
    font-family: PingFangSC;
    font-weight: 600;
    color: rgba(255, 255, 255, 1);
    float: left;
    margin-left: 2.24rem;
  }

  .decorate {
    width: 8.4267rem;
    padding: 0 0.4267rem;
    position: absolute;
    top: -1.16rem;
    left: 0;
  }

  .checkbox {
    position: absolute;
    right: -0.9667rem;
    top: 0.9375rem;
  }

  .checkbox input[type="checkbox"] {
    width: 0.5667rem;
    height: 0.5667rem;
    border: 0.0133rem solid #000;
    border-radius: 50%;
  }

  .decorate img {
    width: 100%;
    height: 100%;
  }

  .decorate_left {
    width: 0.24rem;
    background: url("../assets/connect.png") no-repeat center center;
    background-size: 100%;
    height: 1.36rem;
    float: left;
  }

  .decorate_right {
    width: 0.24rem;
    background: url("../assets/connect.png") no-repeat center center;
    height: 1.36rem;
    background-size: 100%;
    float: right;
  }

  .Record_content_box {
    width: 100%;
    position: absolute;
    top: 3.0267rem;
    left: 50%;
    transform: translate(-50%);
    margin-bottom: 0.9333rem;
  }

  .kong {
    width: 100%;
    height: 1.8rem;
  }

  .bottom {
    width: 100%;
    height: 1.3333rem;
    line-height: 0.5667rem;
    text-align: center;
  }

  .bottom p {
    font-size: 0.24rem;
    font-weight: 400;
    color: #babfd4;
  }

  /* 更改前 */
  .legal_content ul li {
    font-size: 0.3467rem;
    font-weight: 400;
    color: #6c7498;
  }

  .legal_content ul li b {
    font-size: 0.3467rem;
    font-weight: 400;
    color: rgba(11, 24, 86, 1);
  }

  .legal_content:nth-child(1).decorate {
    display: none;
  }

  .legal_content {
    width: 7.7334rem;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0.0533rem 0.0533rem 0.2667rem 0rem rgba(173, 206, 255, 0.2);
    border-radius: 0.1333rem;
    border: 0.0133rem solid rgba(0, 206, 159, 0.8);
    margin: 0 auto;
    margin-top: 0.267rem;
    position: relative;
    padding: 1.0133rem 0.7733rem 1.0933rem 0.7733rem;
  }

  .legal_content:nth-child(1) .xian {
    display: none;
  }

  .legal_content li b {
    font-size: 0.3467rem;
    font-weight: 400;
    color: #0b1856;
  }

  .legal_content li {
    font-size: 0.3467rem;
    font-weight: 400;
    margin-top: 0.3733rem;
    color: rgba(11, 24, 86, 1);
  }

  .legal_title {
    padding: 0.1033rem 0.2333rem;
    height: 0.42rem;
    background: rgba(250, 252, 255, 1);
    border-radius: 0.36rem;
    border: 0.0267rem solid rgba(0, 206, 159, 1);
    margin: 0 auto;
    line-height: 0.42rem;
    text-align: center;
    position: absolute;
    top: 0.3867rem;
    left: 50%;
    margin-top: -0.36rem;
    transform: translate(-50%, -50%);
    transition: 1s all;
  }

  .legal_title h1 {
    font-size: 0.3733rem;
    font-family: PingFangSC-Medium;
    color: rgba(11, 24, 86, 1);
  }

  /* 更改后 */

  .legal2_content ul li {
    font-size: 0.3467rem;
    font-weight: 400;
    color: #6c7498;
  }

  .legal2_content ul li b {
    font-size: 0.3467rem;
    font-weight: 400;
    color: rgba(11, 24, 86, 1);
  }

  .legal2_content:nth-child(1).decorate {
    display: none;
  }

  .legal2_content {
    width: 7.5067rem;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0.0533rem 0.0533rem 0.2667rem 0rem rgba(173, 206, 255, 0.2);
    border-radius: 0.1333rem;
    border: 0.0133rem solid rgba(0, 206, 159, 0.8);
    margin: 0 auto;
    transition: 1s all;
    left: -0.5667rem;
    margin-top: 0.5267rem;
    position: relative;
    padding: 1.0133rem 0 1.0933rem 0.7733rem;
  }

  .legal2_content li b {
    font-size: 0.3467rem;
    font-weight: 400;
    color: #0b1856;
  }

  .legal2_content li {
    font-size: 0.3467rem;
    font-weight: 400;
    margin-top: 0.3733rem;
    color: rgba(11, 24, 86, 1);
  }

  .legal2_content .legal_title h1 {
    font-size: 0.3733rem;
    font-family: PingFangSC-Medium;
    color: rgba(11, 24, 86, 1);
  }

  .legal2_content .legal_title {
    padding: 0.1033rem 0.2333rem;
    height: 0.42rem;
    background: rgba(250, 252, 255, 1);
    border-radius: 0.36rem;
    border: 0.0267rem solid rgba(0, 206, 159, 1);
    margin: 0 auto;
    line-height: 0.42rem;
    text-align: center;
    position: absolute;
    top: 1.3867rem;
    left: 50%;
    transition: 1s all;
    margin-top: -0.36rem;
    transform: translate(-50%, -50%);
  }

  .legal2_content .decorate {
    width: 7.4267rem;
  }

  .footer {
    width: 100%;
    height: 1.8667rem;
    line-height: 1.8667rem;
    position: fixed;
    bottom: 0;
    background: gray;
  }

  .footer_btn1,
  .footer_btn2,
  .footer_btn3 {
    width: 1.6rem;
    height: 0.8rem;
    background: rgba(255, 255, 255, 0.99);
    border-radius: 0.4rem;
    border: 0.0267rem solid rgba(0, 194, 150, 1);
    line-height: 0.8rem;
    float: left;
    /* flex:1; */
    text-align: center;
    font-size: 0.3467rem;
    font-family: PingFangSC-Semibold, PingFangSC;
    font-weight: 600;
    color: rgba(0, 194, 150, 1);
    margin-top: 0.52rem;
    margin-left: 0.4267rem;
  }

  .footer_btn2 {
    margin-left: 2.4267rem;
  }

  input[type="checkbox"] {
    width: 0.2667rem;
    height: 0.2667rem;
    border: 0.0133rem solid #000;
    border-radius: 50%;
  }

  .footer_btn4 {
    width: 2.1333rem;
    height: 0.8rem;
    background: rgba(0, 194, 150, 1);
    box-shadow: 0 0.0267rem 0.1333rem 0rem rgba(0, 194, 150, 0.53);
    border-radius: 0.4rem;
    line-height: 0.8rem;
    float: left;
    text-align: center;
    font-size: 0.3467rem;
    font-family: PingFangSC-Semibold, PingFangSC;
    font-weight: 600;
    color: rgba(255, 255, 255, 1);
    margin-top: 0.52rem;
    margin-left: 1.4667rem;
  }

  .gengduo {
    width: 100%;
    height: 4.9333rem;
    position: fixed;
    z-index: 1;
    bottom: 0;
  }

  .gengduo-top {
    width: 100%;
    height: 3.2rem;
    background: #ebf1fa;
    display: flex;
    /* justify-content: space-between; */
  }

  .gengduo_bottom {
    width: 100%;
    height: 1.7333rem;
    line-height: 1.7333rem;
  }

  .gengduo-top1,
  .gengduo-top2,
  .gengduo-top3 {
    width: 1.3333rem;
    height: 2.1333rem;
    flex: 1;
    margin-top: 0.6133rem;
    text-align: center;
  }

  .gengduo-img {
    width: 1.3333rem;
    height: 1.3333rem;
    margin: 0 auto;
  }

  .gengduo-top1 img {
    width: 100%;
    height: 100%;
  }

  .gengduo-top2 img {
    width: 100%;
    height: 100%;
  }

  .gengduo-top3 img {
    width: 100%;
    height: 100%;
  }

  .gengduo_bottom img {
    width: 0.4267rem;
    height: 0.4267rem;
    margin: 0.6473rem auto;
    display: block;
  }

  .kong2 {
    width: 100%;
    height: 3.3333rem;
  }

  .overview {
    width: 100%;
    z-index: 2;

    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .header_text p {
    position: absolute;
    font-size: 0.4267rem;
    font-family: PingFangSC;
    font-weight: 600;
    color: rgba(255, 255, 255, 1);
    float: left;
    margin-left: 2.24rem;
    top: -0.733rem;
    right: 0.3333rem;
  }

  /* 二维码 */
  .QR {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.2);
  }

  .QR_header {
    width: 100%;
    height: 20%;
    position: relative;
    margin: 0 auto;
    background: #f7faff;
  }

  .QR_bottom {
    width: 100%;
    height: 80%;
    position: relative;
    background: #f7faff;
  }

  .QR_text {
    width: 5.6757rem;
    height: 0.973rem;
    margin: 0 auto;
    text-align: center;
    line-height: 0.973rem;
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -2.83785rem;
    margin-top: -0.4865rem;
    font-size: 0.4865rem;
    background: #00c296;
    border-radius: 0.8108rem;
  }

  .checkbox input {
    width: 50px;
    height: 50px;
  }

  .QR_wrap {
    width: 9.3784rem;
    height: 10.8108rem;
    margin: 0 auto;
    margin-top: 1.8919rem;
  }

  .QR_bottom img {
    width: 6.4865rem;
    height: 6.4865rem;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -3.24325rem;
    margin-top: -3.24325rem;
  }

  .footer_btn2 a {
    color: rgba(0, 194, 150, 1);
  }

  .Record_box {
    width: 9.28rem;
    height: 100%;
    /* background: red; */
    position: absolute;
    top: 4.033333333333333rem;
    left: 50%;
    margin-left: -4.64rem;
  }

  .Record_minbox {
    /* width:9.28rem; */
    background: rgba(255, 255, 255, 1);
    box-shadow: 4px 4px 20px 0px rgba(173, 206, 255, 0.2);
    border-radius: 0.13333333333333333rem;
    border: 1px solid rgba(0, 194, 150, 1);
    position: relative;
    padding: 0.32rem 0.64rem 0.64rem 0.64rem;
    margin-bottom: 0.48rem;
  }

  .Record_title {
    width: 2.1333333333333333rem;
    background: rgba(250, 252, 255, 1);
    border-radius: 0.36rem;
    border: 2px solid rgba(0, 194, 150, 1);
    margin: 0 auto;
    text-align: center;
    line-height: 0.72rem;
  }

  .Record_title h1 {
    font-size: 0.37333333333333335rem;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(11, 24, 86, 1);
  }

  .Record_minbox ul b {
    font-size: 0.3466666666666667rem;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(11, 24, 86, 1);
  }

  .Record_minbox ul li {
    font-size: 0.3466666666666667rem;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: gray;
    margin-top: 0.32rem;
  }


  /* zlp */
  .zlp_box {
    /* overflow: hidden; */
    width: 8rem;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0.05333333333333334rem 0.05333333333333334rem 0.26666666666666666rem 0px rgba(173, 206, 255, 0.2);
    border-radius: 0.13333333333333333rem;
    border: 1px solid rgba(0, 194, 150, 1);
    padding: 0.32rem 0.64rem 0.64rem 0.64rem;
    margin-bottom: 0.48rem;
    position: relative;
  }
  .zlp_box2 {
    /* overflow: hidden; */
    width: 8rem;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0.05333333333333334rem 0.05333333333333334rem 0.26666666666666666rem 0px rgba(173, 206, 255, 0.2);
    border-radius: 0.13333333333333333rem;
    border: 1px solid rgba(0, 194, 150, 1);
    height: 5rem;
    line-height: 5rem;
    text-align: center;
    padding: 0.32rem 0.64rem 0.64rem 0.64rem;
    margin-bottom: 0.48rem;
    position: relative;
  }
  .zlp_title {
    width: 2.1333333333333333rem;
    height: 0.72rem;
    background: rgba(250, 252, 255, 1);
    border-radius: 0.36rem;
    text-align: center;
    line-height: 0.72rem;
    border: 2px solid rgba(0, 194, 150, 1);
    margin: 0 auto;
  }

  .zlp_title h1 {
    font-size: 0.37333333333333335rem;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(11, 24, 86, 1);
  }

  .zlp_box ul li b {
    font-size: 0.3466666666666667rem;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(11, 24, 86, 1);
  }

  .zlp_box ul li {
    font-size: 0.3466666666666667rem;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: gray;
    margin-top: 0.32rem;
    overflow: hidden;
  }

  .xian {
    width: 92%;
    height: 1.36rem;
    position: absolute;
    padding: 0 0.4rem;
    left: 0;
    top: -0.8rem;
  }

  .xian img {
    width: 0.24rem;
    height: 1.12rem;
  }

  .xian_left {
    float: left;
  }

  .xian_right {
    float: right;
  }

  .zlp_box:nth-child(1) .xian {
    display: none;
  }

  .zlp_box2:nth-child(1) .xian {
    display: none;
  }

  .legal2_content:nth-child(1) .xian {
    display: none;
  }

  .zlp_box li img {
    width: 200px;
    height: 229.99999999999997px;
    margin: 0 auto；;
  }

  .zlp_box li b {
    float: left;
  }

  .zlp_box li p {
    float: left;
  }

  .zlp_box li {
    width: 100%;
  }

  .zlp_box ul li p:last-child {
    display: block;
    width: 25px;
    height: 25px;
    position: absolute;
    right: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.1);
    color: white;
    text-align: center;
    line-height: 25px;
    display: none;
    margin-right: 2px;
    margin-top: 2px;
  }
  .cha {
    width: 25px;
    height: 25px;
    position: absolute;
    right: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.1);
    color: white;
    text-align: center;
    line-height: 25px;
    margin-right: 2px;
    margin-top: 2px;
  }

  .zlp_box:nth-child(1) ul li p:last-child {
    display: block;
  }
</style>