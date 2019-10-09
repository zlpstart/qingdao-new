<template>
  <div class="preview">
    <div class="preview_top">
      <h1>“一企一档”信息资源共享查询单</h1>
    </div>
    <div class="preview_content">
      <div class="preview_box">
        <div class="preview_title">
          <h1>基本信息</h1>
        </div>
        <div class="preview_content2">
          <ul>
            <li>
              <span>注册号码：</span>
              <span>64327484910003222</span>
            </li>
            <li>
              <span>成立日期：</span>
              <span>64327484910003222</span>
            </li>
            <li>
              <span>企业类型：</span>
              <span>64327484910003222</span>
            </li>
            <li>
              <span>登记机关：</span>
              <span>64327484910003222</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "preview",
  data() {
    return {};
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
ul {
  list-style: none;
}
.preview_top {
  width: 100%;
  height: 1.0667rem;
  background: #f7faff;
  text-align: center;
  line-height: 1.0667rem;
}
.preview_top h1 {
  font-size: 0.4rem;
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
    background:rgba(247,250,255,1);
    padding-left:0.36rem; 
}
.preview_title h1 {
  font-size: 0.3467rem;
  font-family: PingFangSC-Semibold, PingFangSC;
  font-weight: 600;
  color: rgba(0, 0, 0, 1);
}
.preview_box {
    line-height: 0.8933rem;
}
.preview_content2 {
    width: 96%;
    padding-left: 
}
</style>