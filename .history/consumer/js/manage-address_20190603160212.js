new Vue({
    el: '#app',
    data() {
        return {
            title:''
        }
    },
    created() {
        if (this.getParams().type == 'edit') {
            this.title = '编辑地址';
        } else {
            this.title = '添加地址';
        }
    },
})