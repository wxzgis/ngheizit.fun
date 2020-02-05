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
        }
    });
}