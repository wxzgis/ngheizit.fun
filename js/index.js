this.onload = () => {
    if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) {
        this.location = './mobile.html';
    }
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
    const vm = new Vue({
        el: '#app',
        data(){
            return{
                link: false,
                wxz: 'wxz',
                linkList,
                blogList
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
            this.$message('Good Luck.');
        }
    });
}