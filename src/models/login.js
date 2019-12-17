/*
 * @Description: 
 * @Autor: cuiJian
 * @Date: 2019-12-17 10:58:50
 * @LastEditors: cuiJian
 * @LastEditTime: 2019-12-17 14:41:14
 */
import {testGet, testGet_mh, testGet_wh, testGet_wh_url} from "../api/login";
export default {
    namespace: "login",
    state: {
        num: 88
    },
    effects: {
        *testGet(p,{call,put}) {
            console.log(p);
            const res = yield call(testGet,p.url);
            console.log(res);
            yield put({type: "jiayi"});
        },
        *testGet_mh(p,{call,put}) {
            console.log(p);
            const res = yield call(testGet_mh,p.id);
            console.log(res);
            yield put({type: "jianyi"})
        },
        *testGet_wh(p,{call,put}) {
            console.log(p);
            const res = yield call(testGet_wh,p.url,p.params);
            console.log(res);
            yield put({type: "jiayi"})
        },
        *testGet_wh_url(p,{call,put}) {
            console.log(p);
            const res = yield call(testGet_wh_url,p.url);
            console.log(res);
            yield put({type: "jianyi"});
        }
    },
    reducers: {
        jiayi(s) {
            const n = JSON.parse(JSON.stringify(s));
            n.num++;
            return n;
        },
        jianyi(s) {
            const n = JSON.parse(JSON.stringify(s));
            n.num--;
            return n;
        }
    }
}