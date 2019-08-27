<template>
    <div class="Opinion">
        <div class="Opinion_text">
            <textarea placeholder="请输入您的意见..."></textarea>
        </div>
        <div class="Opinion_btn">
            <button>提交</button>
        </div>
    </div>
</template>

<script>
export default {
    name:"Opinion",
    data(){
        return {
            
        }
    },
    methods:{
        to(){
            this.$router.go(-1)
        },
    },
    created(){
        
    }
}
</script>
<style scoped>
* {
    padding: 0;
    margin: 0
}
a {
    text-decoration: none;
}
ul {
    list-style: none;
}
body {
background:rgba(247,250,255,1);
}
.Opinion_title {
    height: 0.56rem;
    padding: 0 0.3733rem;
    line-height: 0.56rem;
    margin-top: 0.8933rem;
}
.Opinion_left {
    width: 2.6667rem;
    float: left;
}
.Opinion_right {
    margin: 0 auto;
    width: 1.6667rem;
}
.Opinion_right h1 {
    font-size:0.4rem;
    font-weight:500;
    color:rgba(11,24,86,1);
}
.Opinion_left p {
    float: left;
}
.Opinion_left p:nth-child(2){
    margin-left:0.32rem;
}
.Opinion_left img {
    width: 0.4rem;
    height: 0.4rem;
}
.Opinion_text {
    width:9.28rem;
    height:4.6133rem;
    background:rgba(255,255,255,1);
    box-shadow:0.0533rem 0.0533rem 0.2667rem 0rem rgba(173,206,255,0.2);
    border-radius:0.1333rem;
    /* border:0.0133rem solid rgba(0,194,150,1); */
    margin: 0 auto;
    margin-top: 0.8933rem
}
.Opinion_text textarea {
    width: 90%;
    height: 90%;
    border:0.0133rem solid rgba(0,194,150,1);
    outline: none;
    padding: 5%
}
.Opinion_btn {
    width:2.24rem;
    height:0.7467rem;
    position: absolute;
    top: 8.24rem;
    left: 50%;
    transform: translate(-50%);
}
.Opinion_btn button {
    width: 100%;
    height: 100%;
    background:rgba(0,194,150,1);
    border-radius:0.4667rem;
    font-size:0.3467rem;
    border:0.0133rem rgba(0,194,150,1) solid;
    font-weight:500;
    outline: none;
    color:rgba(255,255,255,1);
}
</style>
