<template>
    <div>

    </div>
    
</template>

<script>
import TopBar from './TopBar'
import {mapGetters,mapActions} from 'vuex'

export default {
    name:"Footprint",
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
.data ul li {
  position: relative;
}
.data ul li i {
  width:0.0267rem;
  height:1.9667rem;
  position: absolute;
  left: -0.3633rem;
  background: #C8D3E6;
}
.data ul li:nth-last-child(1) i {
  width:0.0267rem;
  height:1.2667rem;
  position: absolute;
  left: -0.3633rem;
  background: #C8D3E6;
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
    padding: 0.0933rem;
    height:0.72rem;
    background:rgba(250,252,255,1);
    border-radius:3.36rem;
    border:0.0267rem solid rgba(0,206,159,1);
    margin: 0 auto;
    line-height: 0.72rem;
    text-align: center;
    position: absolute;
    top: 0.1867rem;
    left: 50%;
    margin-top: -0.36rem;
    transform: translate(-50%, -50%);
  }
  .Record_content_box {
      width: 100%;
      position: absolute;
      top: 4.1267rem;
      left: 50%;
      transform: translate(-50%);
  }
  .bottom {
    width: 100%;
    height: 1.3333rem;
    line-height: 0.5667rem;
    text-align: center;
    position: absolute;
    bottom:0;
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
.data {
    width: 100%;
    position: relative;
  }
  .data li {
    width:7.65rem;
    height:1.1733333333333333rem;
    background:rgba(255,255,255,1);
    box-shadow:0.05333333333333334rem 0.05333333333333334rem 0.26666666666666666rem 0rem rgba(173,206,255,0.2);
    line-height: 1.1733333333333333rem;
    margin: 0 auto;
    margin-top: 0.78rem;
    margin-left: 0.84rem;
    position: relative;
  }
  .data li span {
    font-size:0.29333333333333333rem;
    font-weight:500;
    color:rgba(0,206,159,1);
    display: block;
    float: left;
    margin-left: 0.4533333333333333rem;
  }
  .data p {
    font-size:0.29333333333333333rem;
    font-weight:400;
    color:rgba(11,24,86,1);
    float: left;
    margin-left: 0.49333333333333335rem;
  }
  .data ul li b {
    width: 0;
    height: 0;
    border-top: 0.0667rem solid transparent;
    border-right: 0.0933rem solid gray;
    border-bottom: 0.0667rem solid transparent;
    display: block;
    position: absolute;
    left: -0.1067rem;
    top: 0.5533rem;
    box-shadow:0.0533rem 0.0533rem 0.2667rem 0rem rgba(173,206,255,0.2);
  }
  .schedule {
    width:0.0267rem;
    height: 4.8333rem;
    background-color: #C8D3E6;
    position: absolute;
    left: 0.46rem;
  }
  .yuan {
    width: 0.2133rem;
    height:0.2133rem;
    border-radius: 0.2133rem;
    position: absolute;
    background: #00C296;
    margin-top: 0.5133rem;
    left: -0.916rem;
  }
  .Footprint_data {
    width:9.28rem;
    background:rgba(255,255,255,1);
    box-shadow:0.0533rem 0.0533rem 0.2667rem 0rem rgba(173,206,255,0.2);
    border-radius:0.1333rem;
    border:0.0133rem solid rgba(0,206,159,0.8);
    margin: 0 auto;
    margin-top: -3.3267rem;
    padding-bottom: 0.78rem;
  }
</style>
