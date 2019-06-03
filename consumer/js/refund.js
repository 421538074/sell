new Vue({
    el: '#app',
    data() {
        return {

        }
    },
    methods: {
        refundChange() {
                $.confirm("是否确认取消退款？", "", function () {
                    $.toast("文件已经删除!");
                }, function () {
                    //取消操作
                    $(".weui-mask").css("display","none")
                    $(".weui-dialog").css("display","none")
                    $.closeModal();
                });
        },

    }
})







