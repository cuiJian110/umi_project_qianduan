import React from "react";
import {Button} from "antd";
import {connect} from "dva";
class Login extends React.Component {
    render() {
        const {num,jiayi,jianyi, testGet, testGet_mh, testGet_wh, testGet_wh_url} = this.props;
        return (
            <div>
                <div>
                Login
                </div>
                <div>
                    <Button type="danger">primary</Button>
                </div>
                <div>
                    {num}
                    <Button onClick={() => jiayi()}>+1</Button>
                    <Button onClick={() => jianyi()}>-1</Button>
                </div>
                <div>
                    <Button onClick={() => testGet()}>test common Get</Button>
                    <Button onClick={() => testGet_mh()}>test : Get</Button>
                    <Button onClick={() => testGet_wh()}>test ? Get</Button>
                    <Button onClick={() => testGet_wh_url()}>test ?url Get</Button>
                </div>
            </div>
        )
    }
}
const ms = s => ({
    num: s.login.num
})
const md = d => ({
    jiayi() {
        d({type: "login/jiayi"});
    },
    jianyi() {
        d({type: "login/jianyi"});
    },
    testGet() {
        d({
            type: "login/testGet",
            url: "testGet"
        })
    },
    testGet_mh() {
        d({
            type: "login/testGet_mh",
            id: 33
        })
    },
    testGet_wh() {
        d({
            type: "login/testGet_wh",
            url: "getList",
            params: {
                pageSize: 5,
                currentPage: 2
            }
        })
    },
    testGet_wh_url() {
        d({
            type: "login/testGet_wh_url",
            url: "getList?pageSize=10&currentPage=10"
        })
    }
})
export default connect(ms,md)(Login);