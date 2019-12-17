/*
 * @Description: 
 * @Autor: cuiJian
 * @Date: 2019-12-17 11:17:06
 * @LastEditors: cuiJian
 * @LastEditTime: 2019-12-17 14:41:38
 */
import {getReq,postReq} from "./http";
export const testGet = url => getReq(url);
export const testGet_mh = id => getReq(`getList/${id}`);
export const testGet_wh = (url,params) => getReq(url,params);
export const testGet_wh_url = url => getReq(url);