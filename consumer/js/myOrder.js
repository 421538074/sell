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
            }
        },
        lookInfo() {
            window.location.href = "logistics.html"
        }
    }
})
















$(".order_uu li").click(function () {
    $(this).addClass('active').siblings().removeClass('active')
})
