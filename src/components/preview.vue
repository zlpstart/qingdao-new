<template>
  <div :class="{wrap:!show,wrap2:show}">
    <div class="zlp">
      <div :class="{preview:show,preview2:!show}">
        <div class="position">
          <div class="preview_top">
            <h1>{{datas.header}}</h1>
          </div>
          <div class="preview_content">
            <div class="preview_box" v-for="(item,index) in datas.blockList">
              <div class="preview_title">
                <h1>{{item.contentTitle}}</h1>
              </div>
              <div class="preview_content2">
                <div>
                  <ul v-for="(items,index) in item.contentInfo" v-if="!show">
                    <li v-for="(itemss,index) in items.contentList">
                      <span>{{itemss.displayInfo}}</span>
                    </li>
                    <div class="show" v-if="items.contentList.length < 1 ">
                      <p>没有查询到相关信息</p>
                    </div>
                  </ul>
                  <div class="clearn"></div>
                  <div class="show" v-if="datas.blockList.length < 1 ">
                    <p>没有查询到相关信息</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="footer">
              <p>{{datas.footer.nameDisplayInfo}}</p>
              <p>{{datas.footer.timeDisplayInfo}}</p>
            </div>
          </div>
        </div>
        <div class="shui" v-if="show"></div>
        <div class="shui2" v-if="!show"></div>`
        <div class="cloce" @click="clock">
          X
        </div>

      </div>
      <div class="erweima">
          <p>下列是样例二维码：</p>
          <img src="../assets//yulan.png" alt="">
        </div>
    </div>
    <div class="both"></div>

    <div class="hahaha" v-if="show"></div>
    <div class="hahaha2" v-if="!show"></div>

  </div>
</template>

<script>
  import {
    mapGetters
  } from 'vuex'

  export default {
    name: "preview",
    data() {
      return {
        datas: [],
        show:false
      };
    },
    created() {
      console.log("进入预览页面")
      this.datas = JSON.parse(window.localStorage.getItem("zlp"))
      console.log(this.datas)
      window.removeItem("zlp")
      
      // if(this.datas)
    },
    mounted(){
      if(this.datas.blockList[0].contentInfo.length <= 0){
        this.show = true;
      }
    },
    methods: {
      clock() {
        this.$router.push("/")
      }
    },
    computed: {
      ...mapGetters(["show"])
    }
  };
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }

  /* .zlp {
    background-image: url("../assets/13shui.jpg");
    background-repeat: no-repeat;
    width: 100%;
    background-attachment: fixed
  }

  .zlp2 {
    background-image: url("../assets/14shui.png");
    background-repeat: no-repeat;
    background-attachment: fixed
  } */
  .zlp {
    z-index: 33;
    position: relative;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
  .both {
    clear: both;
  }
  .preview_top {
    width: 100%;
    height: 1.0667rem;
    /* background: #f7faff; */
    text-align: center;
    line-height: 1.0667rem;
    z-index: 2;
  }
  .wrap {
    width: 100%;
    background: url("../assets/13shui.jpg");
    background-repeat:repeat-y;
    background-size:100%;
    /* background-position: 100% 30%; */
  }
  .wrap2 {
    width: 100%;
    background: url("../assets/14shui.png");
    background-repeat:repeat-y;
    background-size:100%;
  }
  .preview_top h1 {
    font-size: 0.5rem;
    font-family: PingFangSC-Semibold, PingFangSC;
    font-weight: 600;
    color: rgba(0, 0, 0, 1);
  }

  .preview_content li span:nth-child(1) {
    font-size: 0.3467rem;
    font-family: PingFangSC-Regular, PingFangSC;
    font-weight: 400;
    color: rgba(0, 0, 0, 1);
  }

  .preview_content {
    z-index: 2;
  }

  .preview_content li span:nth-child(2) {
    font-size: 0.3467rem;
    font-family: PingFangSC-Regular, PingFangSC;
    font-weight: 400;
    color: rgba(0, 0, 0, 1);
  }

  .preview_title {
    width: 96%;
    height: 0.8533rem;
    margin-top: 0.4267rem;
    line-height: 0.8533rem;
    /* background: rgba(247, 250, 255, 1); */
    padding-left: 0.36rem;
  }

  .preview_title h1 {
    font-size: 0.4467rem;
    font-family: PingFangSC-Semibold, PingFangSC;
    font-weight: 600;
    color: rgba(0, 0, 0, 1);
  }

  .preview_box {
    line-height: 0.3933rem;
  }

  .preview_content2 {
    width: 96%;
    padding-left: 0.36rem;
  }

  .footer {
    width: 96%;
    height: 300px;
    padding-left: 0.36rem;
    margin-top: 40px;
  }

  .footer p {
    font-size: 0.3467rem;
    font-family: PingFangSC-Regular, PingFangSC;
    font-weight: 400;
    color: rgba(0, 0, 0, 1);
  }

  .preview_content2 ul {
    margin-top: 15px;
    line-height: 15px;
  }
  .preview_content2 li {
    font-size: 14px;
  }

  .cloce {
    width: 25px;
    height: 25px;
    background: rgba(0, 0, 0, 0.2);
    position: absolute;
    right: 0;
    top: 0;
    color: white;
    line-height: 25px;
    text-align: center;
  }

  .alert_wrap {
    width: 100%;
    height: 100vh;
    position: fixed;
    background: rgba(0, 0, 0, 0.2);
  }

  .clearn {
    clear: both;
    height: 0;
  }

  /* .hahaha {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 22;
    background: url("../assets/13shui.jpg");
  }
  .hahaha2 {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 22;
    background: url("../assets/13shui.jpg");
  } */
  .erweima {
    margin-top: -250px;
    text-align: center;
    margin-bottom: 100px;
  }
  .erweima img {
    width: 150px;
    height: 150px;
    margin: 0 auto;
    margin-top:20px;
  }
  .show {
    margin-top: 5px;
    font-size: 15px;
  }
</style>