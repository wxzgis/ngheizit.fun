this.onload = () => {
    new Vue({
        el: '#app',
        data(){
            return {
                page: 'home',
                linkType: "0",
                linkList,
                blogList
            }
        },
        watch: {
            page: function(val){
                this.showToast(val.toUpperCase ());
            }
        },
        methods: {
            showToast: function(msg){
                this.$toast({
                    message: msg, 
                    duration: 1000,
                    position: 'bottom'
                });
            }
        },
        mounted(){
            this.$toast({message: 'Good Luck.', duration: 1000});
            console.log(this);
            initArcGISforJsApi();
        }
    });
}

function initArcGISforJsApi(){
    require([
        "esri/Map",
        "esri/views/MapView",
    ], function(
        Map,
        MapView
    ){
        var map = new Map({
            basemap: "osm"
        });
    
        var view = new MapView({
            container: "axMapView",
            map: map,
            center: [113, 23],
            zoom: 6
        });

        view.when(function(){
            document.getElementsByClassName("esri-component esri-attribution esri-widget")[0].remove();
        });
    })
}