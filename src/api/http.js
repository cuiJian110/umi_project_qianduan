/*
 * @Description: 
 * @Autor: cuiJian
 * @Date: 2019-12-17 11:08:22
 * @LastEditors: cuiJian
 * @LastEditTime: 2019-12-17 11:16:01
 */
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000/";
axios.interceptors.request.use(config => {
    return config;
}, error => {
    return Promise.reject(error);
});
axios.interceptors.response.use(response => {
    return response.data;
}, error => {
    return Promise.reject(error);
});
const hs = r => r;
const hf = e => e;
const getReq = (url,params) => {
    return axios.get(url,{params: params}).then(r => r).catch(e => e);
}
const postReq = (url,params) => {
    return axios.post(url,params).then(r => r).catch(e => e);
}
export {getReq, postReq};