var xm = new Vue({
    el: "#app",
    data: {
        cur: 0,
        order: [{}, {}, {}],
        list: [
            { title: "发给代理商" },
        ],
    },
    methods: {
        tab(t) {
            this.cur = t
            if (t == 1) {
                alert(1)
            } else if (t == 2) {
                alert(2)
            }
        },
        // 反馈
        feedback(text) {
            if (text == "反馈") {
                window.location.href = "feedback.html"
            } else {
                window.location.href = "look-feedback.html"
            }

        }
    },

});