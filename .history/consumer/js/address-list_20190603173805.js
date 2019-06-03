new Vue({
    el: '#app',
    data() {
        return {
            currendDefault: 2
        }
    },
    methods: {
        setDefault(id) {
            if (this.currendDefault != id) {
                this.currendDefault = id;
            }
        },
        deleteAdd(id) {
            $.confirm("确定要删除该地址吗？", function () {
                $.showLoading();
                setTimeout(() => {
                    $.hideLoading();
                    $.toast('删除成功',200);
                }, 2000);
            });
        }
    }
});