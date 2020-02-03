this.onload = () => {
    new Vue({
        el: '#app',
        data(){
            return {

            };
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
            }
        },
        mounted(){
            this.$message('Good Luck.');
        }
    });
}