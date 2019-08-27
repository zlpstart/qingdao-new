import axios from 'axios'



const userModule = {
    state: {
      user:[],
      code:"" 
    },

    mutations: {
      setUsers(state,users) {state.user = users},
      setCode(state,code){state.code = code},
    },
  
    actions:{
        fetchCode({state,commit}) {
            let URL = window.location.href  // 获取到当前url
            var b = ""      //准备获取code
            if(URL.indexOf("=")>-1){ //判断url里最后一个=的位置 是否大于0
                b = URL.substring(URL.indexOf("=")+1,URL.length-16)  // 如果大于0 则截取URL的=后字符串
                window.localStorage.setItem("code",b)   //将URL的code 存入localStorage
            }
            commit('setCode', state, window.localStorage.getItem("code") )     //获取到localStorage 里的的code 并存入code变量
        },

        fetchUser({state,commit}){
             commit("getCode")
            const response = axios.get("http://120.55.60.206:18082/api/getUserInfo?code="+state.code) //请求接口
            alert(response)
            commit("setUsers",response.data)
            alert(1)
        }

    },

    getters: {
      getUsers (state) {
        state.user
      }
    }
  }



export default userModule;