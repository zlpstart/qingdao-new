<template>
  <keep-alive>
    <div :class="{over:alert}">
      <!-- 企业档案 -->
      <!-- <div v-if="getRecordB"> -->
      <div>
        <div class="Record">
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
                <!-- <div class="header_text">
                        <p @click="extract" v-if="!xiaoxi">提取消息</p>
                        <p @click="extract" v-if="xiaoxi">取消</p>
                      </div>-->
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
            <div class="loging" v-if="isShow">
              <div class="loader">
                <div class="loading-3">
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
                <!-- <button @click="close">取消</button> -->
              </div>
            </div>
            <div class="legal_content" v-for="(item,index) in getGeren" :key="item.url" v-if="!isShow">
              <div @click="getUrl(item.key)">
                <h1>{{item.name}}</h1>
                <div class="xian">
                  <div class="xian_left">
                    <img src="../assets/connect.png" alt />
                  </div>
                  <div class="xian_right">
                    <img src="../assets/connect.png" alt />
                  </div>
                </div>
              </div>
              <div class="radio">
                <!-- <input type="checkbox" id="test1" class="test">同意
                        <label for="test1"></label>
                        <input type="checkbox" id="test" class="test">同意
                        <label for="test"></label> -->

                <input type="checkbox" v-model="radio" :value="item.key">
                <!-- <label :for="index"></label> -->
              </div>
            </div>
            <div class="kong"></div>
            <div class="kong2" v-if="kong2"></div>
            <div class="bottom" v-if="changeClass">
              <span></span>
              <p>数据由青岛市行政审批局提供</p>
              <span></span>
              <p>服务热线 0531-8619444</p>
            </div>
          </div>
        </div>
        <!-- <div class="footer" v-if="duo1"> -->
        <div class="footer" v-if="true">
          <!-- <div class="footer_wrap1">
                  <div class="footer_btn1" @click="more">更多</div>
                  <div class="footer_btn2" @click="download" v-if="true">
                    <a :href="xia + xiazai ">下载</a>
                    下载
                  </div>
                </div> -->
          <div class="footer_wrap2">
            <!-- <div class="footer_btn3" @click="survey">预览</div> -->
            <div class="footer_btn">
              <div class="footer_btn2" @click="download2">扫码打印</div>
            </div>
            <div class="footer_btn">
              <div class="footer_btn4" @click="survey">预览</div>
            </div>

          </div>
        </div>
        <!-- <div class="gengduo" v-if="duo"> -->
        <div class="gengduo" v-if="false">
          <div class="gengduo-top">
            <div class="gengduo-top1">
              <div class="gengduo-img">
                <div class="gengduo-img-img" @click="close">
                  <img src="../assets/save.png" align="center" />
                </div>
              </div>
              <p>保存图片</p>
            </div>
            <div class="gengduo-top2">
              <div class="gengduo-img">
                <img src="../assets/transmit.png" align="center" />
              </div>
              <p>转发</p>
            </div>
            <div class="gengduo-top3">
              <div class="gengduo-img">
                <img src="../assets/mail.png" alt align="center" />
              </div>
              <p>发送邮件</p>
            </div>
          </div>
          <div class="gengduo_bottom">
            <img src="../assets/close.png" alt @click="close" />
          </div>
        </div>
        <!-- <div class="QR" v-if="QR" @click="QRshow"> -->
        <div class="QR" v-if="showMa" @click="QRshow">
          <div class="QR_wrap">
            <div class="QR_header">
              <div class="QR_text">请向窗口操作人员出示</div>
              <div class="guanbi" @click="guanbi">X</div>
            </div>
            <div class="QR_bottom">
              <img :src="ma + tu " />
            </div>
          </div>
        </div>
      </div>
      <!-- <div v-if="!getRecordB"> -->
      <div v-if="false">
        暂时没有数据
      </div>
      <div class="alert_wrap" v-if="alert">
        <div class="alert" v-if="alert">
          <p v-if="xiale">请选择下载内容</p>
          <p v-if="erweima">请选择二维码内容</p>
          <p v-if="yulan">请选择预览内容</p>
          <button @click="alerts">确定</button>
        </div>
      </div>
    </div>
  </keep-alive>

</template>

<script>
  import TopBar from "./TopBar";
  import {
    mapGetters,
    mapActions,
    mapMutations,
    mapState
  } from "vuex";

  export default {
    name: "Record",
    data() {
      return {
        showMa: false,
        tiqu: true,
        //正常样式
        changeClass: true,
        //点击样式
        changeStyle: false,
        //多选选中
        box: [],
        duo: false,
        duo1: false,
        kong2: false,
        gailan: false,
        xiaoxi: false,
        QR: false,
        //存储code
        codes: "",
        // 存储数据
        save: [],
        //header
        header: "",
        ma: "data:image/png;base64,",
        tu: "",
        xiazai: "",
        xia: "http://120.55.60.206:18082/fileapi/pdfFile?token=",
        content: [],
        listed: [],
        hehe: null,
        footer: [],
        neirong: [],
        jsons: {},
        title: [],
        bb: null,
        code: "",
        jiben: [],
        jiben2: null,
        isShow: false,
        radio: [],
        string: "",
        showMa2: false,
        xinxi: [],
        arr: [],
        alert: false,
        xiale: false,
        erweima: false,
        yulan: false,
        top: null
      };
    },
    components: {
      TopBar
    },
    mounted() {
      console.log(this.radio)
    },
    methods: {
      to() {
        this.$router.go(0);
      },
      ...mapActions(["getUsers", "getRecord", "getxinxi2", "getxinxi3"]),
      extract() {
        this.changeClass = !this.changeClass;
        this.changeStyle = !this.changeStyle;
        this.duo1 = !this.duo1;
        this.tiqu = !this.tiqu;
        this.xiaoxi = !this.xiaoxi;
      },
      more() {
        this.duo = !this.duo;
        this.duo1 = !this.duo1;
        this.kong2 = !this.kong2;
      },
      close() {
        this.duo = !this.duo;
        this.duo1 = !this.duo1;
        this.kong2 = !this.kong2;
      },
      information() {
        this.xiaoxi = !this.xiaoxi;
      },
      QRcode() {
        // this.QR = true;
        // const arr = [];
        // //box v-model集合
        // if (this.box.length > 0) {
        //   this.box.forEach(function (ele, index) {
        //     this.neirong.push(ele);
        //   });
        // }
        // this.box.forEach(item => {
        //   if (item !== []) {
        //     this.neirong.push(this.content[item]);
        //   }
        // });
        // this.jsons.header = this.header;
        // this.jsons.footer = this.footer;
        // // this.jsons.footer = this.footer;
        // this.jsons.blockInfoList = this.neirong;
        // // this.jsons.blockInfoList = this.neirong;
        // this.jsons.waterMarkText = this.save.waterMarkText;
        // this.listed = arr;
        // axios
        //   .post(
        //     // "http://120.55.60.206:18082/fileapi/getQrCode?code=" + this.code,
        //     // "http://120.55.60.206:8081/fileapi/getQrCode?code=" + this.code,
        //     "http://120.221.95.112:18080/fileapi/getQrCode?code=" + this.code,
        //     this.jsons
        //   )
        //   .then(res => {
        //     this.tu = res.data.data;
        //     this.xiazai = res.data.return_subMsg;
        //   });
        // this.neirong = [];
      },
      QRshow() {
        this.QR = false;
      },
      getUrl(e) {
        axios.interceptors.request.use(
          config => {
            // 在发送请求之前做些什么
            this.isShow = true;
            return config;
          },
          function (error) {
            // 对请求错误做些什么
            return Promise.reject(error);
          }
        );

        // 添加响应拦截器
        axios.interceptors.response.use(
          response => {
            // 对响应数据做点什么
            this.isShow = false;
            return response;
          },
          function (error) {
            // 对响应错误做点什么
            return Promise.reject(error);
          }
        );
        if (this.getqiehuan) {
          // 自然人
          axios
            // .get("http://120.55.60.206:8081/api/requestUserInfo?serviceKey=" + e + "&sfzh=" + this.getsfzh)
            .get("http://120.221.95.112:18080/api/requestUserInfo?serviceKey=" + e + "&sfzh=" + this.getsfzh)
            .then(res => {
              console.log(res)
              res.data.data[2] == "]" || res.data.data == "" ?
                (this.localStorage = false) :
                (this.localStorage = true);
              if (this.localStorage == true) {
                this.xinxi = JSON.parse(res.data.data)
                this.xinxi.map(item => {
                  this.arr.push(item.contentList)
                })
                window.localStorage.setItem("data", JSON.stringify(this.arr));
                // window.localStorage.setItem("code", JSON.stringify(JSON.parse(res.data.code)[0].contentList));
                this.$router.push("/zlp");
              } else {
                this.$router.push("/zlp");
              }
            })
        } else {
          // 法人
          axios
            // .get("http://120.55.60.206:8081/api/requestEnterpriseInfo?serviceKey=" + e + "&xydm=" + this.getsfzh)
            .get("http://120.221.95.112:18080/api/requestEnterpriseInfo?serviceKey=" + e + "&xydm=" + this.getsfzh)
            .then(res => {
              console.log("法人成功")
              console.log(res)
              res.data.data[2] == "]" || res.data.data == "" ?
                (this.localStorage = false) :
                (this.localStorage = true);
              if (this.localStorage == true) {
                this.xinxi = JSON.parse(res.data.data)
                this.xinxi.map(item => {
                  this.arr.push(item.contentList)
                })
                window.localStorage.setItem("data", JSON.stringify(this.arr));
                // window.localStorage.setItem("code", JSON.stringify(JSON.parse(res.data.code)[0].contentList));
                this.$router.push("/zlp");
              } else {
                this.$router.push("/zlp");
              }
            })
        }

      },
      close() {
        return Promise.reject(error);
      },
      guanbi() {
        this.showMa = false
        document.body.style.position = 'static';
        document.body.style.height = 'auto';
        window.scrollTo(0, this.top);
      },
      // 下载
      download() {
        if (this.radio.length > 0) {
          this.xiazai = "";
          this.tu = ""
          this.radio.map(item => {
            this.string += item + ','
          })
          // axios.post('http://120.55.60.206:8081/fileapi/makePdfQrBySfzh?serviceKeys=' + this.string + '&sfzh=' + this
          //     .getsfzh)
          axios.post('http://120.221.95.112:18080/fileapi/makePdfQrBySfzh?serviceKeys=' + this.string + '&sfzh=' + this
              .getsfzh)
            .then(res => {
              // 下载的地址
              console.log("下载的内容")
              console.log(res)
              // this.tu = res.data.data;
              // this.xiazai = res.data.return_subMsg;
              console.log("要打开的地址")
              console.log(this.xia + res.data.data)
              window.open(this.xia + res.data.data)
            })
        } else {
          alert("请选择下载内容")
        }
      },
      //扫码打印
      download2() {
        if (this.radio.length > 0) {
          this.showMa = true
          let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
          if (currentScroll > 0) {
            window.scrollTo(0, currentScroll - (currentScroll / 15))
          }
          // document.documentElement.scrollTop = 0;
          this.radio.map(item => {
            this.string += item + ','
          })
          if (this.getqiehuan) {
            // axios.post('http://120.55.60.206:8081/fileapi/makePdfQrBySfzh?serviceKeys=' + this.string + '&sfzh=' +
            //     this.getsfzh)
            axios.post('http://120.221.95.112:18080/fileapi/makePdfQrBySfzh?serviceKeys=' + this.string + '&sfzh=' +
                this.getsfzh)
              .then(res => {
                console.log("自然人二维码成功")
                console.log(res)
                this.tu = res.data.data;
                this.xiazai = res.data.return_subMsg;
                document.body.style.position = 'fixed';
                document.body.style.width = '100%';
                document.body.style.height = '100%';
                this.top = window.scrollY;
              })
          } else {
            // axios.post('http://120.55.60.206:8081/fileapi/makePdfQrByXydm?serviceKeys=' + this.string + '&xydm=' +
            //     this.getsfzh)
            axios.post('http://120.221.95.112:18080/fileapi/makePdfQrByXydm?serviceKeys=' + this.string + '&xydm=' +
                this.getsfzh)
              .then(res => {
                console.log("法人二维码成功")
                console.log(res)
                this.tu = res.data.data;
                this.xiazai = res.data.return_subMsg;
                document.body.style.position = 'fixed';
                document.body.style.width = '100%';
                document.body.style.height = '100%';
                this.top = window.scrollY;
              })
          }
        } else {
          this.alert = true
          this.erweima = true
          document.body.style.position = 'fixed';
          document.body.style.width = '100%';
          document.body.style.height = '100%';
          this.top = window.scrollY;
        }
      },
      survey() {
        if (this.radio.length > 0) {
          this.radio.map(item => {
            this.string += item + ','
          })
          if (this.getqiehuan) {
            axios.interceptors.request.use(
          config => {
            // 在发送请求之前做些什么
            this.isShow = true;
            return config;
          },
          function (error) {
            // 对请求错误做些什么
            return Promise.reject(error);
          }
        );

        // 添加响应拦截器
        axios.interceptors.response.use(
          response => {
            // 对响应数据做点什么
            this.isShow = false;
            return response;
          },
          function (error) {
            // 对响应错误做点什么
            return Promise.reject(error);
          }
        );

            // axios.get("http://120.55.60.206:8081/fileapi/previewNormalUserDetail?sfzh=" + this.getsfzh +
            //     "&serviceKeys=" + this.string)
            axios.get("http://120.221.95.112:18080/fileapi/previewNormalUserDetail?sfzh=" + this.getsfzh +
                "&serviceKeys=" + this.string)
              .then(res => {
                window.localStorage.setItem("zlp", JSON.stringify(res.data.data))
                window.scrollTo(0, 0);
                this.$router.push("preview");
              })
              .catch(err => console.log(err))
          } else {
            // axios.get("http://120.55.60.206:8081/fileapi/previewLegalUserDetail?xydm=" + this.getsfzh +
            //     "&serviceKeys=" + this.string)
            axios.get("http://120.221.95.112:18080/fileapi/previewLegalUserDetail?xydm=" + this.getsfzh +
                "&serviceKeys=" + this.string)
              .then(res => {
                window.localStorage.setItem("zlp", JSON.stringify(res.data.data))
                window.scrollTo(0, 0);
                this.$router.push("preview");
              })
              .catch(err => console.log(err))
          }


        } else {
          this.alert = true;
          this.yulan = true
          document.body.style.position = 'fixed';
          document.body.style.width = '100%';
          document.body.style.height = '100%';
          this.top = window.scrollY;
        }

      },
      alerts() {
        this.alert = false;
        this.xiale = false;
        this.erweima = false;
        this.yulan = false;
        document.body.style.position = 'static';
        document.body.style.height = 'auto';
        window.scrollTo(0, this.top);
      }
    },
    created() {
      window.alert = function (name) {
        var iframe = document.createElement("IFRAME");
        iframe.style.display = "none";
        iframe.setAttribute("src", 'data:text/plain,');
        document.documentElement.appendChild(iframe);
        window.frames[0].window.alert(name);
        iframe.parentNode.removeChild(iframe);
      }
      let URL = window.location.href // 获取到当前url
      var b = "" //准备获取code
      if (URL.indexOf("=") > -1) { //判断url里最后一个=的位置 是否大于0
        b = URL.substring(URL.indexOf("=") + 1, URL.length - 16) // 如果大于0 则截取URL的=后字符串
        window.localStorage.setItem("code", b) //将URL的code 存入localStorage
      }
      this.code = window.localStorage.getItem("code") //获取到localStorage 里的的code 并存入code变量
      this.getUsers();
    },
    computed: {
      ...mapGetters([
        "allUser",
        "show",
        "allRecord",
        "jibenxinxi2",
        "jibenxinxi3",
        "getziranren",
        "getcategory",
        "getGeren",
        "getsfzh",
        "getqiehuan",
        "getRecordB"
      ]),
      ...mapState(["category"])
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
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 0.4rem;
    border: #999999 1px solid;
  }

  input:checked+label::before {
    background-color: #00C296;
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
    overflow: hidden;
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
    text-align: center;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0.0533rem 0.0533rem 0.2667rem 0rem rgba(173, 206, 255, 0.2);
    border-radius: 0.1333rem;
    border: 0.0133rem solid rgba(0, 206, 159, 0.8);
    float: left;
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

  .legal_content h1 {
    font-size: 0.3733rem;
    text-align: center;
    display: inline-block;
    font-family: PingFangSC-Medium;
    padding: 0.1033rem 0.2333rem;
    color: rgba(11, 24, 86, 1);
    border-radius: 0.36rem;
    border: 0.0267rem solid rgba(0, 206, 159, 1);
  }

  .legal_title h1 {
    font-size: 0.3733rem;
    text-align: center;
    font-family: PingFangSC-Medium;
    padding: 0.1033rem 0.2333rem;
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

  .footer_btn {
    width: 50%;
    float: left;
    flex: 1;
  }

  input[type="checkbox"] {
    width: 0.2667rem;
    height: 0.2667rem;
    border: 0.0133rem solid #000;
    border-radius: 50%;
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
    background: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
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
    width: 8.293333333333333rem;
    height: 10.666666666666666rem;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -4.1892rem;
    margin-top: -5.3rem;
  }

  .QR_bottom img {
    width: 6.4rem;
    height: 6.4rem;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -3.2rem;
    margin-top: -3.2rem;
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
    /* width: 2.1333333333333333rem; */
    padding: 7px 24px 7px 24px;
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

  .Record_minbox:nth-child(1) .xian {
    display: none;
  }

  .legal2_content:nth-child(1) .xian {
    display: none;
  }

  .loader {
    width: 30%;
    position: absolute;
    top: 50%;
    left: 50%;
  }

  @-webkit-keyframes loading-3 {
    50% {
      transform: scale(0.4);
      opacity: 0.3;
    }

    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  .loading-3 {
    position: relative;
  }

  .loading-3 i {
    display: block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #333;
    position: absolute;
  }

  .loading-3 i:nth-child(1) {
    top: 25px;
    left: 0;
    -webkit-animation: loading-3 1s ease 0s infinite;
  }

  .loading-3 i:nth-child(2) {
    top: 17px;
    left: 17px;
    -webkit-animation: loading-3 1s ease -0.12s infinite;
  }

  .loading-3 i:nth-child(3) {
    top: 0;
    left: 25px;
    -webkit-animation: loading-3 1s ease -0.24s infinite;
  }

  .loading-3 i:nth-child(4) {
    top: -17px;
    left: 17px;
    -webkit-animation: loading-3 1s ease -0.36s infinite;
  }

  .loading-3 i:nth-child(5) {
    top: -25px;
    left: 0;
    -webkit-animation: loading-3 1s ease -0.48s infinite;
  }

  .loading-3 i:nth-child(6) {
    top: -17px;
    left: -17px;
    -webkit-animation: loading-3 1s ease -0.6s infinite;
  }

  .loading-3 i:nth-child(7) {
    top: 0;
    left: -25px;
    -webkit-animation: loading-3 1s ease -0.72s infinite;
  }

  .loading-3 i:nth-child(8) {
    top: 17px;
    left: -17px;
    -webkit-animation: loading-3 1s ease -0.84s infinite;
  }

  .loging {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    
  }

  .loader button {
    width: 80px;
    height: 40px;
    background: gray;
    border: none;
    text-align: center;
    line-height: 40px;
    color: white;
    border-radius: 15px;
    margin-top: 10px;
    position: absolute;
    margin-top: 10px;
    top: 100px;
    right: 58px;
  }

  .radio {
    position: absolute;
    top: 40%;
    right: 25px;
  }

  .radio input {
    width: 20px;
    height: 20px;
    border-radius: 20px;
  }

  .guanbi {
    width: 25px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    float: left;
    background: rgba(0, 0, 0, 0.2);
  }

  .footer {
    width: 100%;
  }

  /* .footer .footer_wrap2,
  .footer_wrap1 {
    width: 50%;
    float: left;
  } */
  .footer_btn2 {
    width: 1.6rem;
    height: 0.8rem;
    background: rgba(255, 255, 255, 0.99);
    border-radius: 0.4rem;
    border: 0.02666666666666667rem solid rgba(0, 194, 150, 1);
    line-height: 0.8rem;
    text-align: center;
    color: #00C296;
    margin: 0 auto;
    margin-top: 0.32rem;
  }

  .footer_wrap {
    text-align: center;
    font-size: 0.3467rem;
    font-family: PingFangSC-Semibold, PingFangSC;
    font-weight: 600;
    color: rgba(0, 194, 150, 1);
  }

  .footer_btn4 {
    width: 2.1333333333333333rem;
    height: 0.8rem;
    margin: 0 auto;
    margin-top: 0.32rem;
    line-height: 0.8rem;
    text-align: center;
    color: white;
    background: rgba(0, 194, 150, 1);
    box-shadow: 0px 2px 10px 0px rgba(0, 194, 150, 0.53);
    border-radius: 0.4rem;
  }

  .alert {
    width: 7.466666666666667rem;
    height: 3.2rem;
    text-align: center;
    background: rgba(255, 255, 255, 1);
    border-radius: 0.13333333333333333rem;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -3.73rem;
    margin-top: -1.6rem;
  }

  .alert p {
    font-size: 0.3466666666666667rem;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(34, 34, 34, 1);
    margin-top: 0.8rem;
  }

  .alert_wrap {
    background: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .alert {
    font-size: 15px;
  }

  .alert button {
    width: 1.6rem;
    height: 0.8rem;
    line-height: 0.8rem;
    text-align: center;
    background: rgba(0, 194, 150, 1);
    border-radius: 0.48rem;
    margin-top: 0.68rem;
    border: 0.02666666666666667rem solid rgba(0, 194, 150, 1);
    font-size: 0.3466666666666667rem;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: rgba(255, 255, 255, 1);
    margin: 0 auto;
    margin-top: 0.68rem;
  }

  /* .test {
    visibility: hidden;
  }

  .test+label {
    width: 18px;
    height: 18px;
    background-color: white;
    border: 1px gray solid;
    display: block;
    border-radius: 18px;
    position: relative;
    top: -18px;
    left: -2px;
    cursor: pointer;
    overflow: hidden;
  }

  .test:checked+label:before {
    content: " ";
    width: 18px;
    height: 18px;
    background: url("../assets/select.png") no-repeat;
    background-size: 96% auto;
    display: block;
    color: #ffffff;
    text-align: center;
    font-weight: bolder;
    line-height: 18px;
  } */

  .over {
    overflow: hidden;
  }
</style>