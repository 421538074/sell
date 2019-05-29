var xm = new Vue({
    el: "#app",
    data: {
        isshade: false,
        isrefund: false,
        isreply: true,
        cur: 0,
        order: [{}, {}, {}],
        chatList: [{}, {}, {}],
        // list: [
        //     { feed: "反馈" },
        //     { feed: "查看反馈" },
        //     { feed: "反馈" },],
    },
    methods: {
        tab(t) {
            this.cur = t
        },
        // 反馈
        feedback(text) {
            if (text == "反馈") {
                window.location.href = "feedback.html"
            } else {
                window.location.href = "look-feedback.html"
            }
        },
        // 添加订单
        addOrder() {
            window.location.href = "add-order.html"
        },
        noAgree() {
            this.isrefund = true
        },
        agree() {
            this.isshade = true
        },
        close() {
            this.isshade = false
        },
        openReply() {
            this.isreply = !this.isreply
        }
    },

});