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
        clearInput() {
            this.keywords = '';
        }
    },
    watch: {
        watchInput() {
            if(this.keywords.length > 0) {
                this.isShowClearIcon = true;
            }
            else {
                this.isShowClearIcon = false;
            }
        }
    },
});