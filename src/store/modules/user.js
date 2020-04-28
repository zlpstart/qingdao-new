import axios from 'axios'

const state = {
    user: [],
    record: [],
    code: "",
    boy: require("../../assets/boy.png"),
    gril: require("../../assets/gril.png"),
    corporation: require("../../assets/corporation.png"),
    show: true,
    jibenxinxi: [],
    jibenxinxi2: [],
    jibenxinxi3: [],
    showziranren: null,
    category: "",
    geren: [],
    sfzh: "",
    qiehuan: true,
    RecordB: true,
    zlpB: true,
    img:true
}

const getters = {
    allUser: state => state.user,
    allRecord: state => state.record,
    userImg: state => state.img,
    boy: state => state.boy,
    gril: state => state.gril,
    show: state => state.show,
    jibenxinxi: state => state.jibenxinxi,
    jibenxinxi2: state => state.jibenxinxi2,
    jibenxinxi3: state => state.jibenxinxi3,
    getziranren: state => state.showziranren,
    getcategory: state => state.category,
    getGeren: state => state.geren,
    getsfzh: state => state.sfzh,
    getqiehuan: state => state.qiehuan,
    getRecordB: state => state.RecordB,
    // getZlp: state => state.zlpB
}

const mutations = {
    // 更改user信息方法
    setUsers: (state, users) => (state.user = users),
    // setRecord: (state, users) => (state.record = users),
    //获取用户code
    getCode: (state) => {
        let URL = window.location.href  // 获取到当前url
        var b = ""      //准备获取code
        if (URL.indexOf("=") > -1) { //判断url里最后一个=的位置 是否大于0
            b = URL.substring(URL.indexOf("=") + 1, URL.length - 16)  // 如果大于0 则截取URL的=后字符串
            window.localStorage.setItem("code", b)   //将URL的code 存入localStorage
        }
        state.code = window.localStorage.getItem("code")      //获取到localStorage 里的的code 并存入code变量
    },
    setGeren: (state, geren) => (state.geren = geren),
    setSfzh: (state, sfzh) => (state.sfzh = sfzh),
    changeQiehuan: (state) => (state.qiehuan = true),
    changeQiehuan2: (state) => (state.qiehuan = false),
    changeRecord: (state) => (state.RecordB = false),
    changeZlp: (state) => (state.zlpB = false),
    changeImg:(state) => (state.img = false)
}

const actions = {
    getUsers({ commit, state }) {
        if(state.img){
            commit("getCode")
            // axios.get("http://120.55.60.206:18082/api/getUserInfo?code=" + state.code) //请求接口
            axios.get("http://120.55.60.206:8081/api/getUserInfo?code=" + state.code) //请求接口
            // axios.get("http://120.221.95.112:18080/api/getUserInfo?code=" + state.code) //请求接口
                .then(res => {
                    if (res.data.length < 1 || res.data == "") {
                        commit("changeRecord")
                    } else {
                        if (res.data.category == "13") {
                            state.show = true
                            commit("changeQiehuan")
                            axios
                                .get("http://120.55.60.206:8081/api/getNormalUserDetailInfo?code=" + state.code)
                                // .get("http://120.221.95.112:18080/api/getNormalUserDetailInfo?code=" + state.code)
                                .then(res => {
                                    if (res.data.imgAddr == "") {       //判断用户是否上传头像   
                                        if (res.data.gender == 0) {     //判断用户是否是男人
                                            res.data.imgAddr = state.boy    //把接口数据的空值 改成本地男生图片路径
                                        } else {                      //判断用户是否是女人
                                            res.data.imgAddr = state.gril   //把接口数据的空值 改成本地女生图片路径
                                        }
                                    }
                                    commit("setUsers", res.data)
                                    commit("setSfzh", res.data.idCode)
                                })
                            axios.get("http://120.55.60.206:8081/api/userServiceList")
                            // axios.get("http://120.221.95.112:18080/api/userServiceList")
                                .then(res => {
                                    let foo = JSON.parse(res.data.data).sort(function (a, b) {
                                        return a.order - b.order;
                                    })
                                    commit("setGeren", foo)
                                })
                        } else {
                            commit("changeQiehuan2")
                            axios
                                .get("http://120.55.60.206:8081/api/getLegalUserDetailInfo?code=" + state.code)
                                // .get("http://120.221.95.112:18080/api/getLegalUserDetailInfo?code=" + state.code)
                                .then(res => {
                                    if (res.data.imgAddr == "") {       //判断用户是否上传头像   
                                        if (res.data.gender == 0) {     //判断用户是否是男人
                                            res.data.imgAddr = state.boy    //把接口数据的空值 改成本地男生图片路径
                                        } else {                      //判断用户是否是女人
                                            res.data.imgAddr = state.gril   //把接口数据的空值 改成本地女生图片路径
                                        }
                                    }
                                    commit("setUsers", res.data)
                                    commit("setSfzh", res.data.creditCode)
                                })
                            axios.get("http://120.55.60.206:8081/api/enterpriseServiceList")
                            // axios.get("http://120.221.95.112:18080/api/enterpriseServiceList")
                                .then(res => {
                                    let foo = JSON.parse(res.data.data).sort(function (a, b) {
                                        return a.order - b.order;
                                    })
                                    commit("setGeren", foo)
                                })
                        }



                        if (res.data.category == 0) {
                            state.showziranren = true
                        } else {
                            state.showziranren = false
                        }
                        commit("setUsers", res.data)
                    }
                })
                .catch(err => {
                    console.log(err)
                    commit("changeRecord")
                })
            commit("changeImg")
        }
        
    },
    async getRecord({ commit, state }) {
        await commit("getCode")
        // axios.get("http://120.55.60.206:18082/fileapi/queryInfo?code=" + state.code) //请求接口
        axios.get("http://120.55.60.206:8081/fileapi/queryInfo?code=" + state.code) //请求接口
        // axios.get("http://120.221.95.112:18080/fileapi/queryInfo?code=" + state.code) //请求接口
            .then(res => {
                commit("allRecord", res.data)
            })
    },

    //存在jibenxinxi里
    async getxinxi({ state }) {
        axios.get('http://120.55.60.206:8081/api/service005?code=' + state.code)
        // axios.get('http://120.221.95.112:18080/api/service005?code=' + state.code)
            .then(res => {
                state.jibenxinxi = res.data
            })
    },

    //存在jibenxin2里
    async getxinxi2({ state }) {
        axios.get('http://120.55.60.206:8081/api/service007?code=123' + state.code)
        // axios.get('http://120.221.95.112:18080/api/service007?code=123' + state.code)
            .then(res => {
                state.jibenxinxi2 = JSON.parse(res.data.data)
            })
    },

    //存在jibenxinxi3里
    async getxinxi3({ state }) {
        axios.get('http://120.55.60.206:8081/api/service010?code=123' + state.code)
        // axios.get('http://120.221.95.112:18080/api/service010?code=123' + state.code)
            .then(res => {
                state.jibenxinxi3 = JSON.parse(res.data.data)
            })
    },
}

export default {
    state,
    getters,
    mutations,
    actions
}