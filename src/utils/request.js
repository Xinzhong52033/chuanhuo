import axios from 'axios'
import Qs from 'qs'
import { Message, Loading } from 'element-ui'
import { baseUrl } from './config.js';

export const request = axios.create({
    timeout: 7000, // 请求超时时间
    baseURL: baseUrl,
    withCredentials:true,//
    transformRequest: [function (data) {
        data = Qs.stringify(data);
        return data;
    }],
})
// 添加请求拦截器
request.interceptors.request.use(config => {
    config => {
        // if (getToken()) {
        //     config.headers['token'] = getToken()
        // } 
        return config
    },
    error => { 
        console.log(error); //调试
        return Promise.reject(error)
    }
    return config
})
// 添加响应拦截器
request.interceptors.response.use(response => {
    const res = response.data;
    return new Promise((resolve, reject) => {
      if (res.code == 1) {
        resolve(res)
      } else if(res.code == -4) {//登录失效
        router.push({path:'/login'})
        return false;
      }else{
        MSG.errorMsg(res.msg)
        return false;
      }
    })
}, error => {
    const msg = error.Message !== undefined ? error.Message : ''
    Message({
        message: '网络错误' + msg,
        type: 'error',
        duration: 3 * 1000
    })
    return Promise.reject(error)
})