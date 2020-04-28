<template>
  <div class="timeshow">
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
    <div class="timeshowImg">
        <img src="../assets/await.gif" alt />
    </div>
  </div>
</template>

<script>
import TopBar from "./TopBar";
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  components: {
    TopBar
  },
  computed: {
    ...mapGetters(["allUser"])
  }
};
</script>

<style scoped>
.timeshow {
  width: 100%;
  height: 100%;
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
.timeshowImg {
    width: 100px;
    height: 100px;
    margin:0 auto;
    margin-top: 60px;
}
.timeshowImg img {
    width: 100%;
    height: 100%;
}
</style>