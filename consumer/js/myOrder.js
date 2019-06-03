new Vue({
    el: '#app',
    data() {
        return {
            list: [
                { task: '确认收货' },
                { task: '反馈问题' },
                { task: '评价' },
                { task: '评价' },
            ],

        }
    },
    methods: {
        tag(t) {
            if (t = 0) {

            }
        },
        goProblem(name) {
            if (name == "反馈问题") {
                a = 1
                if (a == 1) {
                    window.location.href = "feedback.html"
                } else {
                    window.location.href = "feedback-once.html"
                }
            } else if (name == "评价") {
                window.location.href = "evaluate.html"
            } else if (name == "确认收货") {
                $.confirm("最好确定收到货后再确认哦！", "确认收货？", function () {
                    $.toast("文件已经删除!");
                }, function () {
                    //取消操作
                    $(".weui-mask").css("display","none")
                    $(".weui-dialog").css("display","none")
                    $.closeModal();
                });
            }
        },
        lookInfo() {
            window.location.href = "logistics.html"
        },
        goService(){
            window.location.href = "post-sale.html"
        },
        // 订单详情
        productDeatil(){
            window.location.href="sale-detail.html"
        }
    }
})










$(".order_uu li").click(function () {
    $(this).addClass('active').siblings().removeClass('active')
})
