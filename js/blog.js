this.onload = () => {

    Vue.component('wxz-title', {
        data: function(){
            return {};
        },
        props: ['content', 'time'],
        template: '<div><div class="jumbotron p-3 p-md-5 text-white rounded bg-dark"><div class="col-md-6 px-0"><h1 class="display-4 font-italic">{{content}}</h1></div></div><el-divider content-position="left">{{time}}</el-divider></div>'
    });
    Vue.component('wxz-subtitle', {
        data: function (){
            return {};
        },
        props: ['content'],
        template: '<h2 class="blog-post-subtitle">{{content}}</h2>'
    });
    Vue.component('wxz-cshape', {
        data: function(){
            return {};
        },
        props: ['content'],
        template: '<span>// {{content}}</span> '
    });
    Vue.component('wxz-html', {
        data: function(){
            return {};
        },
        props: ['content'],
        template: '<span>&lt;!-- {{content}} --&gt;</span> '
    });
    Vue.component('wxz-css', {
        data: function(){
            return {};
        },
        props: ['content'],
        template: '<span>/* {{content}} */</span> '
    });
    Vue.component('wxz-python', {
        data: function(){
            return {};
        },
        props: ['content'],
        template: '<span># {{content}}</span> '
    });

    const vm = new Vue({
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