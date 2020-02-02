this.onload = () => {
    this.main();
};

// OpenLayer 初始化地图
function ol_Init(){
    var map = new ol.Map({
        target: 'map',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([113, 23]),
            zoom: 6
        }),
        controls: ol.control.defaults({
            attribution: false, // 底部信息控件 不可见
            zoom: false // 缩放控件 不可见
        })
    });
}


function main(){
    const linkList = [
        {
            title: "常规",
            links: [
                {
                    name: 'Google 浙大镜像',
                    url: 'https://g3.luciaz.me/'
                },{
                    name: 'Google 翻译',
                    url: 'https://translate.google.cn/'
                },{
                    name: 'Bing 微软搜索引擎',
                    url: 'https://cn.bing.com/'
                },{
                    name: 'Github 代码仓库',
                    url: 'https://github.com/'
                },{
                    name: '河北师范大学',
                    url: 'http://www.hebtu.edu.cn/'
                },{
                    name: '12306 官网',
                    url: 'https://www.12306.cn/index/'
                }
            ]
        },
        {
            title: "Web端",
            links: [
                {
                    name: 'w3school 官网',
                    url: 'https://www.w3school.com.cn/'
                },{
                    name: 'Element ui框架 官网',
                    url: 'https://element.eleme.cn/#/zh-CN'
                },{
                    name: 'Vue.js 前端框架 官网',
                    url: 'https://cn.vuejs.org/'
                },{
                    name: 'Mint UI 基于 Vue.js 的移动端组件库 官网',
                    url: 'https://mint-ui.github.io/#!/zh-cn'
                }

            ]
        },
        {
            title: "服务端",
            links: [
                {
                    name: 'Node.js 官网',
                    url: 'https://nodejs.org/en/'
                },{
                    name: 'Express.js 官网',
                    url: 'https://expressjs.com/'
                }
            ]
        },{
            title: "GIS",
            links: [
                {
                    name: 'ArcGIS for developers 开发者工具中心',
                    url: 'https://developers.arcgis.com/'
                },{
                    name: '全国GIS高等教育门户',
                    url: 'http://edugis.net/#/'
                },{
                    name: 'ArcGIS 知乎',
                    url: 'http://zhihu.esrichina.com.cn/'
                }
            ]
        },{
            title: '计算机综合',
            links: [
                {
                    name: '菜鸟教程 官网',
                    url: 'https://www.runoob.com/'
                },{
                    name: 'leetcode 官网',
                    url: 'https://leetcode.com/'
                }
            ]
        },{
            title: '邮箱',
            links: [
                {
                    name: '163 网易邮箱',
                    url: 'https://mail.163.com/'
                },{
                    name: 'Outlook 微软邮箱',
                    url: 'https://outlook.live.com/mail/0/'
                },{
                    name: 'Gmail 谷歌邮箱',
                    url: 'https://mail.google.com/mail/u/0/#'
                }
            ]
        },{
            title: '论文',
            links: [
                {
                    name: '中国知网',
                    url: 'https://www.cnki.net/'
                },{
                    name: 'SIC Hub',
                    url: 'https://sci-hub.tw/'
                }
            ]
        },{
            title: '其他',
            links: [
                {
                    name: '中国大学 MOOC',
                    url: 'https://www.icourse163.org/'
                },{
                    name: 'bilibili',
                    url: 'https://www.bilibili.com/'
                },{
                    name: 'Iconfont 阿里巴巴矢量图标库',
                    url: 'https://www.iconfont.cn/'
                },{
                    name: 'ZAMZAR 图片格式转换',
                    url: 'https://www.zamzar.com/'
                }
            ]
        }
    ]
    new Vue({
        el: '#app',
        data(){
            return{
                link: false,
                linkList
            }
        },
        methods:{
            showMsg: function(msg, type){
                // null, success, warning, error
                if(type === 'error'){
                    this.$message.error(msg);
                }else if(type === undefined){
                    this.$message(msg);
                }else{
                    this.$message({
                        message: msg,
                        type: type
                    });
                }
            },
            ol_Init
        },
        mounted(){
            ol_Init();
            // this.$message('Hello World.');
        }
    });
}