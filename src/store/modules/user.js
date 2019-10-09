import axios from 'axios'

const state ={
    user:[],
    code:"",
    boy:require("../../assets/boy.png"),
    gril:require("../../assets/gril.png"),
    corporation:require("../../assets/corporation.png"),
    show:true
}

const getters = {
    allUser: state => state.user,
    userImg: state => state.img,
    boy: state => state.boy,
    gril: state => state.gril,
    show:state => state.show
}

const mutations = {
    // 更改user信息方法
    setUsers:(state,users) => (state.user = users),
    //获取用户code
    getCode:(state) => {
        let URL = window.location.href  // 获取到当前url
        var b = ""      //准备获取code
        if(URL.indexOf("=")>-1){ //判断url里最后一个=的位置 是否大于0
            b = URL.substring(URL.indexOf("=")+1,URL.length-16)  // 如果大于0 则截取URL的=后字符串
            window.localStorage.setItem("code",b)   //将URL的code 存入localStorage
        }
        state.code = window.localStorage.getItem("code")      //获取到localStorage 里的的code 并存入code变量
    },
}

const actions = {
     async getUsers({commit,state}){
        await commit("getCode")
        axios.get("http://120.55.60.206:18082/api/getUserInfo?code="+state.code) //请求接口
        .then(res => {
            // console.log("成功请求",res)
            res.data.category = 0
            if(res.data.category == 13){
                state.show = true
                // console.log(state.show)
                window.open("/")
                axios.get("http://120.55.60.206:18082/api/getNormalUserDetailInfo?code="+state.code)
                .then(i => {
                    // console.log(i.data)
                    if(i.data.imgAddr == ""){       //判断用户是否上传头像   
                        if(i.data.gender == 0){     //判断用户是否是男人
                            i.data.imgAddr = state.boy    //把接口数据的空值 改成本地男生图片路径
                            // console.log(i.data.imgAddr)
                        }else{                      //判断用户是否是女人
                            i.data.imgAddr = state.gril   //把接口数据的空值 改成本地女生图片路径
                            // console.log(i.data.imgAddr)
                        }
                    }
                    commit("setUsers",i.data)
                })
                .catch(j => console.log(j))
            }else {
                state.show = false
                // console.log(state.show)
                window.open("/Enterprise")
                axios.get("http://120.55.60.206:18082/api/getNormalUserDetailInfo?code="+state.code)
                .then(a => {
                    // console.log(a.data)
                    if(a.data.imgAddr == ""){
                        a.data.imgAddr = state.corporation
                    }
                    commit("setUsers",a.data)
                })
                // .catch(b => console.log(b))
            }
            commit("setUsers",res.data)
        })
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}