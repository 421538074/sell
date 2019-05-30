new Vue({
    el:'#app',
    data() {
        return {
            // 是否显示清空图标
            isShowClearIcon:false,
            keywords:''
        }
    },
    methods: {
        watchInput() {
            if(this.keywords.length > 0) {
                this.isShowClearIcon = true;
            }
        },
        clearInput() {
            this.keywords = '';
        }
    },
});