/*
 * @Description: 
 * @Autor: cuiJian
 * @Date: 2019-12-17 10:29:24
 * @LastEditors: cuiJian
 * @LastEditTime: 2019-12-17 10:58:32
 */
export default {
    routes: [
        {path: "/login", component: "login"},
        {path: "/l1",component: "../layout/l1",routes: [
            {path: "page1",component: "page1"},
        ]},
        {path: "/l2",component: "../layout/l2",routes: [
            {path: "page2",component: "page2"}
        ]}
    ],
    plugins: [
        ['umi-plugin-react', {
            antd: true,
            dva: true
        }],
    ],
}